<template>
	<view>
		<view class="heardinfo">
			<view style="font-size: 35upx;font-weight: bold;">
				{{mvc.all.lx}}
			</view>
			<view>
				{{mvc.all.sqrq}}
			</view>
		</view>
		<view class="c-list box-border">
			<view class="c-row b-b">
				<view class="tit">{{i18n.num}}</view>
				<view class="bz-list con">
					<text>{{mvc.all.shsn}}</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">{{i18n.type}}</text>
				<view class="bz-list con">
					<text>{{mvc.all.lx}}</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit"> {{i18n.count}}</text>
				<view class="bz-list con">
					<text>{{mvc.all.qty}}</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">{{i18n.status}}</text>
				<view class="bz-list con">
					<text>{{mvc.all.shstat}}</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">{{i18n.progress}}</text>
				<view class="bz-list con">
					<text>{{mvc.all.zt}}</text>
				</view>
			</view>
		</view>

		<view class="box-border box-top" v-for='(item,index) in mvc.saleList' :key="index">
			<view class="row b-b">
				<text class="tit" style="font-size: 28upx;color: #303133;">{{i18n.information}}</text>
			</view>
			<view class="s-header" style="background: #EEEEEE;">
				<imglazy :url="item.img" :sty="imglazyStyle"></imglazy>
				<view class="s-text">
					<view>
						{{item.item_name}}
					</view>
					<view>
						{{i18n.code}}: {{item.item_no}}
					</view>

				</view>
			</view>

			<view class="row b-b">
				<text class="tit">{{i18n.reason}}:</text>
				<view class="input">{{item.reason}}</view>
			</view>
			<view class="row b-b">
				<text class="tit">{{i18n.situation}}:</text>
				<view class="input" :id="item.status==2?'success':'error'">{{item.stat_html}}</view>
			</view>
			<view class="uploadinfo">
				<text class="tit">{{i18n.picture}}:</text>
				<view class="imgFlex" v-if="item.pics.length!=0">
					<view class="uploadImg" v-for='(data,j) in item.pics' :key="j">
						<image :src="data.img" mode="" class="uploadImg" @tap="previewImage(data.filename,index)"></image>
					</view>

				</view>

				<view v-else class="flextext">
					无
				</view>
			</view>
		</view>


		<button type="warn" @click="revocation" class="btn-warn" v-if="mvc.all.zt=='待审核'">{{i18n.remove}}</button>

	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import api from '@/common/index.js';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	let mvc = {
		mid: '',
		saleimg: "",
		code: "",
		name: "",
		num: "",
		saleList: [],
		all: {
			lx: "",
			zt: "",
			qty: '',
			shsn: '',
			shstat: ''
		}
	}
	export default {
		components: {
			uniSteps,
			imglazy
		},
		data() {
			return {
				imglazyStyle: 'border-radius: 10upx;',
				mvc: {
					mid: '',
					saleimg: "",
					code: "",
					name: "",
					num: "",
					saleList: [],
					all: {
						lx: "",
						zt: "",
						qty: '',
						shsn: '',
						shstat: ""
					}
				}
			}
		},
		computed: {
			i18n() {
				return this.$t('saleDetail')
			}
		},
		onLoad(optins) {
			let that = this;
			setTimeout(function() {
				mvc = that.mvc;
				api.pageTitle(that.$t('saleDetail').title)
				uni.showLoading({
					title: that.$t('saleDetail').loading
				})
				mvc.mid = optins.id;
				that.loadData()
			}, 300)
		},
		methods: {
			loadData() {
				let that = this;
				let params = {
					mid: mvc.mid
				}
				that.$ajax.saleView(params).then(res => {
					let arry = res.list;
					let user = uni.getStorageSync('userinfo');
					arry.forEach(function(item, index) {
						// 优化图片
						item.img = that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/80';
						if (item.pics.length != 0) {
							item.pics.forEach(function(data, j) {
								data.img = that.$store.getters.imgShow + '/shouhou/' + user.hdid + '/' + data.filename +
									'?x-oss-process=style/80';
							})
						}
						// 商品原因
						if (item.reason == "") {
							item.reason = "无"
						};
						// 商品状态
						if (item.status == '0') {
							item.stat_html = '未审';
						} else if (item.status == '1') {
							item.stat_html = '拒绝理由：'+ item.jjreason +'';
						} else {
							item.stat_html = '通过';
							if (item.isreturn == '2') {
								item.stat_html += '：此款无需退货';
							}
						}
					});
					if (res.info.wt == '1' && res.info.yt == '2') {
						res.info.shstat = '部分通过';
					} else if (res.info.shsj && res.info.wt != '1') {
						res.info.shstat = '通过';
					} else if (res.info.wt == '1' && res.info.yt != '2') {
						res.info.shstat = '全部拒绝';
					} else {
						res.info.shstat = '未审';
					}
					mvc.saleList = arry;
					mvc.all = res.info;
					that.mvc = mvc;
					uni.hideLoading();
				})
				// api.post('/index.php/Home/User/shouhou_view?mid=' + that.mid, "", function(res) {

				// })
			},
			imageError(key, index) {
				mvc.saleList[index].img = 'http://dh.xmcpcn.com/Public/images/none.jpg';
			},
			// 撤销
			revocation() {
				let that = this;
				uni.showModal({
					content: that.$t('saleDetail').content,
					cancelText: that.$t('index').cancel,
					confirmText: that.$t('index').confirm,
					success: (e) => {
						if (e.confirm) {
							let params = {
								mid: mvc.mid
							}
							that.$ajax.saleDele(params).then(res => {
								if (res == 1) {
									uni.showToast({
										title: that.$t('saleDetail').success
									})
									setTimeout(function() {
										uni.navigateBack({
											delta: 1
										});
									}, 800)
								} else {
									that.$api.msg(res)
								}
							})
							// api.post("/Home/User/shouhou_del?id=" + mvc.mid, "", res => {
							// })
						}
					}
				});


			},
			// 查看图片
			previewImage(item, index) {
				let that = this;
				let params = uni.getStorageSync('userinfo');
				let img = that.$store.getters.imgShow + '/shouhou/' + params.hdid + "/" + item +
					'?x-oss-process=style/800';
				let imgList = mvc.saleList[index].pics
				let urlList = [];
				imgList.forEach(function(data, k) {
					data.preUrl = that.$store.getters.imgShow + '/shouhou/' + params.hdid + '/' + data.filename +
						'?x-oss-process=style/800'
					urlList.push(data.preUrl)
				})
				uni.previewImage({
					current: img,
					urls: urlList
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #f8f8f8;

		font-size: 28upx;

	}

	%section {
		background: white;
		border-radius: 10upx;
		width: 100%;
		padding: 20upx;

	}

	.s-header {
		@extend %section;
		display: flex;
		justify-content: left;

		.lazy {
			width: 120upx;
			height: 110upx;
			padding-right: 10upx;
		}

		.leftImg {
			width: 120upx;
			height: 115upx;


			image {
				width: 120upx;
				height: 115upx;
				border-radius: 10upx;

			}
		}


		.s-text {
			font-size: 28upx;
			width: 70%;

		}
	}

	.s-content {
		@extend %section;
		margin: 20upx 0;

		.s-satus {
			display: flex;

			view {
				width: 50%;
				text-align: left;
				margin: 2upx;
			}
		}
	}

	.logistics {
		@extend %section;
	}

	.btn-warn {

		margin-top: 100upx;
		margin-bottom: 30rpx;
	}

	.uploadinfo {
		display: flex;
		align-items: center;
		position: relative;
		padding: 10upx 30upx;

		background: #fff;

		.tit {
			flex-shrink: 0;
			margin-right: 20rpx;
			font-size: $font-sm;
			color: $font-color-f1;
		}

		.imgFlex {
			display: flex;
			align-items: center;

			flex-wrap: wrap;
			padding: 10upx;

			.uploadImg {
				margin: 5upx;
				width: 110upx;
				height: 110upx;
			}
		}

		.flextext {
			font-size: $font-sm;
			color: $font-color-f1;
		}




	}

	.row {
		display: flex;
		align-items: center;
		padding: 0 30upx;
		height: 80upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			margin-right: 20rpx;
			font-size: $font-sm;
			color: $font-color-f1;
		}

		.placeholder {
			font-size: 28upx;
		}

		.input {
			flex: 1;
			font-size: $font-sm;
			color: $font-color-f1;
		}

		.uploadImg {
			width: 100upx;
			height: 100upx;
		}

	}

	.box-top {
		margin: 15upx 0;
		position: relative;
	}

	.c-list {
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;

		.c-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20upx 30upx;
			position: relative;
		}

		.tit {
			width: 280upx;
		}

		.con {
			// flex: 1;
			color: $font-color-dark;

			.selected-text {
				margin-right: 10upx;
			}
		}

		.bz-list {

			font-size: $font-sm+2upx;
			color: $font-color-dark;

			text {
				display: inline-block;
				margin-right: 30upx;
			}
		}

		.con-list {
			flex: 1;
			display: flex;
			flex-direction: column;
			color: $font-color-dark;

		}

		.red {
			color: $uni-color-primary;
		}
	}

	.heardinfo {
		background-color: #ff0337;
		width: 100%;
		height: 220upx;
		color: white;
		padding: 60upx;

	}
	#error{
		color: #ff0337;
	}
	#success{
		color: #093;
	}
</style>
