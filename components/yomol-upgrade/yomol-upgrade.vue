<template>
	<view class="mark uni-popup">
		<view class="view">
			<text class="title">{{title}}</text>
			<!-- <view class="tip">新版更新内容</view> -->
			<view class="smallTitle">
				<text>下载进度:{{ downloadProgress }}%</text>
				<progress :percent="downloadProgress" stroke-width="4" />
			</view>
			<view class="btns">
				<!-- <image class="icon" src="https://download.cheshangji.cn/app/upgrade.png"></image> -->
				<view class="sure" @click="onSureClick()">马上升级</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				progress: 0,
				contents: [],
				downloading: false,
				success: true,
				downloadProgress: 0,
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
				currentIsLatest: true // 当前版本就是最新版本 - 标记
			}
		},
		props: {
			type: {
				type: String,
				default: 'pkg'
			},
			url: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '版本更新'
			},
			content: {
				type: String,
				default: ""
			}
		},
		watch: {
			content() {
				var strs = this.content.split('\\n')
				for (var i = 0; i < strs.length; i++) {
					this.contents.push(strs[i])
				}
			}
		},
		methods: {
			onSureClick() {
				console.log(plus.os.name.toLowerCase())
				this.createTask("https://download.dgstaticresources.net/fusion/android/app-c6-release.apk")
			},
			// 开始下载任务
			createTask(downloadLink) {

				this.downloadProgress = 0
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
					this.downloadProgress = res.progress
				})
			},
			// 关闭下载任务
			closeTask() {
				this.downloadTask.abort()
				this.downloadTask = null
				this.startProgress = false
			},
			installPackge() {
				// 安装更新
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
					let that=this;
					uni.showModal({
						title: '提示',
						cancelText:that.$t('index').cancel,
						confirmText:that.$t('index').confirm,
						content: '应用将重启以完成更新',
						showCancel: false,
						complete: function(){
							plus.runtime.restart()
						}
					})
				}
			},
		},
	}
</script>

<style>
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
		height: 30vw;
		padding: 20upx 30upx;
		background-color: white;
		border-radius: 15upx;
		
	}

	.title {
		margin-top: 20upx;
		
		justify-content: left;
		font-size: 32upx;
		
	}

	.item {
		margin-left: 50upx;
		text-align: left;
		font-size: 30upx;
	}

	.btns {
		width: 100%;
		align-items: right;
		margin-bottom: 10upx;
	}

	.icon {
		width: 45upx;
		height: 45upx;
		margin-right: 10upx;
	}

	.sure {
		padding: 10upx 0;
		text-align: right;
		color: #5bbbca;
		font-size: 30upx;
		font-weight: 500;
	}

	.progress {
		margin-bottom: 20upx;
	}

	.smallTitle {
		font-size: 26upx;
		font-weight: 500;
		padding: 20upx 0;
		line-height: 1.5;
		color: #888;
		width: 100%;
	}
</style>
