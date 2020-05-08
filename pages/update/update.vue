<template>
	<view class="mark uni-popup">
		<view class="view">
			<view class="uptitle">{{mvc.title}}</view>
			<view class="smallTitle">
				<text class="title">版本: {{mvc.server_version}}</text>

			</view>
			<view class="smallTitle">
				<text class="title">本次更新: </text>
				<view class="center" v-for="(item,index) in mvc.downcenter" :key="index">
					{{index+1}}.{{item}}
				</view>
			</view>
			<view class="smallTitle" v-if="mvc.ProgressHdid">
				<text class="title">下载进度: {{ mvc.downloadProgress }}%</text>
				<progress :percent="downloadProgress" stroke-width="4" />
			</view>
			<view class="btns">
				<view class="">
				</view>
				<view style="display: flex;">
					<view class="sure" @click="goback">稍后更新</view>
					<view class="sure" @click="handleUpdate()">立刻更新</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import api from '@/common/index.js';
	let mvc = {
		title: "发现新版本",
		downcenter: [],
		server_version: 0,
		ProgressHdid: false,
		downloadProgress: 0, // 下载进度
	}
	export default {

		data() {

			return {
				info: '正在加载', // 主标题显示版本号
				Minfo: '未知', // 副标题显示版本类型
				Mtip: '', // 小提示标语
				updateInfo: '无', // 更新摘要
				latest: null, // 版本信息
				packgeSize: null, // 更新包大小
				packgePath: null, // 更新包的文件地址
				downloadTask: null, // 下载任务
				buttonLoading: false, // 加载 - 标记
				installed: false, // 是否执行了安装 - 标记
				startProgress: false, // 下载进行 - 标记
				currentIsLatest: true, // 当前版本就是最新版本 - 标记
				appURL: '',
				iosLink: 'https://itunes.apple.com/cn/app/XIMIVOGUE/id1256241115?mt=8&l=zh',
				mvc: {
					title: "发现新版本",
					downcenter: [],
					server_version: 0,
					ProgressHdid: false,
					downloadProgress: 0, // 下载进度

				}

			}
		},
		onLoad(option) {
			this.loadAndroid();
		},
		onReady(OP) {

		},
		// 如果用户下载后没有完成安装，却回到app，则执行这里
		onShow() {
			if (this.installed === true && this.packgePath) {
				this.installed = false
				this.haveDownloaded()
			}
		},
		// 用户关闭页面时检查是否存在下载任务
		onUnload() {
			if (this.downloadTask) {
				this.closeTask();
				this.showToast('更新被取消');
				uni.navigateBack({
					delta: 1
				})
			}
		},
		// 下拉刷新更新
		onPullDownRefresh() {

			uni.stopPullDownRefresh()
		},
		methods: {

			loadAndroid() {
				api.load(this.$t('index').loadmsg)

				let that = this;
				plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
					let status = '';
					if (plus.os.name.toLowerCase() == "android") {
						status = 1; // 当前系统为安卓

					} else {
						status = 2; // 当前系统为ios
					}

					let params = {
						version: wgtinfo.version,
						type: status
					}
					that.$ajax.Version(params).then(res=>{
						mvc.server_version = res.server_version;
						that.appURL = res.app_link;
						if (res.update_note.length != 0) {
							mvc.downcenter = res.update_note.split("/");
						} else {
							let arry = [{
								0: "暂无"
							}]
							mvc.downcenter = arry;
						}
						that.mvc = mvc
						uni.hideLoading();
					})
					
				})
			},
			showToast(text) {
				uni.showToast({
					title: text,
					duration: 3000,
					icon: 'none'
				})
			},
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			installPackge() {
				// 安装更新
				let that = this;
				plus.runtime.install(this.packgePath, {
					force: true
				})
				this.installed = true
				// 保存更新记录到stroage，方便下次启动app时删除安装包
				uni.setStorage({
					key: 'updated',
					data: {
						completed: true,
						packgePath: this.packgePath
					},
					success: (res) => {
						console.log('成功保存更新记录')
					}
				})
				// 判断是否为热更新（判断文件名中是否含有.wgt）
				if (this.packgePath.match(RegExp(/.wgt/))) {
					this.installed = false
					uni.showModal({
						title: '提示',
						cancelText: that.$t('index').cancel,
						confirmText: that.$t('index').confirm,
						content: '应用将重启以完成更新',
						showCancel: false,
						complete: function() {
							plus.runtime.restart()
						}
					})
				}
			},
			// 已经下载了更新包但是没有安装
			haveDownloaded() {
				let that = this
				uni.showModal({
					title: '更新尚未完成',
					content: '您已下载更新包，但是还没有完成安装，请问是否要继续安装更新包呢？',
					cancelText: that.$t('index').cancel,
					confirmText: that.$t('index').confirm,
					success: (res) => {
						if (res.confirm) {
							// 安装
							this.installPackge()
						} else if (res.cancel) {
							this.showToast('更新被取消')
							uni.navigateBack({
								delta: 1
							});
						}
					}
				})
			},

			// 关闭下载任务
			closeTask() {
				this.downloadTask.abort()
				this.downloadTask = null
				this.startProgress = false
			},
			// 开始下载任务
			createTask(downloadLink) {
				let that = this;
				mvc.downloadProgress = 0
				this.startProgress = true

				// 创建下载任务对象
				this.downloadTask = uni.downloadFile({
					url: downloadLink,
					success: (res) => {
						if (res.statusCode === 200) {
							// 保存下载的安装包
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								success: (res) => {
									this.packgePath = res.savedFilePath
									// 进行安装
									this.installPackge()
									// 任务完成，关闭下载任务
									this.closeTask()
								}
							})
						}
					}
				})
				// 进度条更新
				this.downloadTask.onProgressUpdate((res) => {
					mvc.downloadProgress = res.progress;
					that.mvc = mvc;
				})

			},
			handleUpdate() {
				let that = this;
				if (plus.os.name.toLowerCase() == "android") {
					mvc.ProgressHdid = true;
					that.createTask(that.appURL);
				} else {
					plus.runtime.openURL(that.iosLink);
				}
				that.mvc = mvc;
				// 判断系统类型

				// console.log(plus.os.name.toLowerCase());
				// if (plus.os.name.toLowerCase() === 'android') {
				// 	if (this.latest.androidLink && this.latest.androidLink !== '#') { // 我这里默认#也是没有地址，请根据业务自行修改
				// 		// 安卓：创建下载任务
				// 		this.createTask(that.appURL)
				// 		//https://download.dgstaticresources.net/fusion/android/app-c6-release.apk
				// 		//http://demo.dcloud.net.cn/test/update/H5EF3C469.wgt
				// 	} else {
				// 		this.showToast('未找到下载地址')
				// 	}
				// }
				// else {
				// 	if (this.latest.iosLink && this.latest.iosLink !== '#') { // 我这里默认#也是没有地址，请根据业务自行修改
				// 		// 苹果(A)：进行热更新（如果iosLink是wgt更新包的下载地址）判断文件名中是否含有.wgt
				// 		if (this.latest.iosLink.match(RegExp(/.wgt/))) {
				// 			this.createTask(this.latest.iosLink)
				// 		} else {
				// 			// 苹果(B)：打开商店链接（如果iosLink是苹果商店的地址）
				// 			plus.runtime.openURL(this.latest.iosLink)
				// 		}
				// 	} else {
				// 		this.showToast('未找到ios商店地址')
				// 	}
				// }
			}
		}
	}
</script>

<style lang="scss">
	.mark {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.view {
		width: 80vw;

		padding: 20upx 40upx;
		background-color: white;

		border-radius: 10upx;
	}

	.uptitle {
		margin: 20upx 0;
		justify-content: left;
		font-size: 32upx;
		font-weight: bold;

	}

	.item {
		margin-left: 50upx;
		text-align: left;
		font-size: 30upx;
	}

	.btns {
		width: 100%;
		justify-content: space-between;

		display: flex;

	}

	.icon {
		width: 45upx;
		height: 45upx;
		margin-right: 10upx;
	}

	.sure {
		padding: 10upx 0;
		color: #1890ff;
		font-size: 30upx;
		font-weight: 500;
		margin: 50upx 20upx 0 20upx;
	}

	.progress {
		margin-bottom: 20upx;
	}

	.smallTitle {

		margin: 3upx 0;
		color: #888;

		.title {

			font-size: $font-base;
		}

		.center {

			font-size: $font-sm;
		}
	}
</style>
