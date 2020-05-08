<template>
	<view class="container">

		<view class="user-section">
			<!-- 背景图 -->
			<uni-nav-bar theme="1" backHeight="height: 250px;" class="bg" v-if="navBar" />
			<!-- <view class="bg"></view> -->
			<!-- <image src="/static/user.png" mode="" class="bg"></image> -->
			<view class="user-info-box">
				<!-- <view class="portrait-box">
					<image class="portrait" :src="userInfo.portrait || '/static/missing-face.png'"></image>
				</view> -->
				<view class="info-box">
					<text class="username">{{index.username|| '游客'}}</text>
				</view>
			</view>
			<view class="vip-card-box">
				<!-- <image class="card-bg" src="/static/vip-card-bg.png" mode=""></image> -->
				<!-- <view class="b-btn" v-if="isvip==1">
					SVIP特权
				</view> -->
				<view class="tit" v-if="index.isvip==1">
					<text class="yticon icon-iLinkapp-"></text>
					{{i18n.vip}}
				</view>
				<view class="tit" v-if="index.isvip==0">
					<text class="yticon icon-iLinkapp-"></text>
					{{i18n.status}}
				</view>
				<text class="e-m">{{index.username}}</text>
				<text class="e-b">{{i18n.user}} ID:{{index.uid}}</text>
			</view>
		</view>

		<view class="cover-container" :style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
		 @touchstart="coverTouchstart" @touchmove="coverTouchmove" @touchend="coverTouchend">
			<image class="arc" src="/static/arc.png"></image>

			<view class="tj-sction">
				<view class="tj-item">
					<text class="num">{{index.price}}</text>
					<text>{{i18n.info_a1}}</text>
				</view>
				<view class="tj-item" @click="navDiscounts">
					<text class="num">{{index.disLength}}</text>
					<text>{{i18n.info_a2}}</text>
				</view>
				<view class="tj-item">
					<text class="num">{{index.integralNum}}</text>
					<text>{{i18n.info_a3}}</text>
				</view>
			</view>
			<!-- 订单 -->
			<view class="order-section">
				<!-- <view class="order-item" @click="order('url')" hover-class="common-hover" :hover-stay-time="50">
					<text class="icon icon-f1"></text>
					<text>我的订单</text>
				</view> -->
				<view class="order-item" @click="repertory('url')" hover-class="common-hover" :hover-stay-time="50">
					<span class="icon icon-f2"></span>
					<text>{{i18n.info_b1}}</text>
				</view>
				<view class="order-item" @click="market('url')" hover-class="common-hover" :hover-stay-time="50">
					<text class="icon icon-f3"></text>
					<text>{{i18n.info_b2}}</text>
				</view>
				<view class="order-item" @click="sale('url')" hover-class="common-hover" :hover-stay-time="50">
					<text class="icon icon-f5"></text>
					<text>{{i18n.info_b3}}</text>
				</view>
				<view class="order-item" @click="navTech" hover-class="common-hover" :hover-stay-time="50">
					<text class="icon icon-f4"></text>
					<text>{{i18n.info_b4}}</text>
				</view>
			</view>
			<view class="uni-list" v-if="app==2">
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-list-cell-db">{{language}}</view>
					<switch color="#FFCC33" @change="switchChange" :checked="langStatus" />
				</view>
			</view>
			<!-- 浏览历史 -->
			<view class="history-section icon">
				<!-- 	<list-cell icon="icon-iconfontweixin" iconColor="#e07472" title="我的钱包" tips="您的会员还有3天过期"></list-cell> -->
				<list-cell icon="icon-order" iconColor="#2ec6e2" :title="i18n.info_c1" @eventClick="order"></list-cell>
				<list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#ffc700" :title="i18n.info_c2" @eventClick="navCollect"></list-cell>
				<list-cell icon="icon-dis" iconColor="#e84c8e" title="主题换肤" @eventClick="navTheme"></list-cell>
				<list-cell icon="icon-dis" iconColor="#e84c8e" :title="i18n.info_c3" @eventClick="navDiscounts"></list-cell>
				<list-cell icon="icon-dizhi" iconColor="#5fcda2" :title="i18n.info_c4" @eventClick="address('url')"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" :title="i18n.info_c5" @eventClick="navTo('/pages/set/set')"></list-cell>
			</view>
		</view>
		<!-- <button type="primary" @click="ceshi">测试</button> -->

	</view>
</template>
<script>
	import listCell from '@/components/mix-list-cell';
	import api from '@/common/index.js';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import {
		mapState
	} from 'vuex';
	let startY = 0,
		moveY = 0,
		pageAtTop = true,
		index = {
			username: '',
			uid: '',
			isvip: "",
			activeList: [],
			price: 0,
			integralNum: 0,
			disLength: 0
		};
	export default {
		components: {
			listCell,
			uniNavBar
		},

		data() {
			return {
				navBar: true,
				app: 1,
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				language: '中文',
				langStatus: false,
				index: {
					username: '',
					uid: '',
					isvip: "",
					price: 0,
					integralNum: 0,
					disLength: 0
				}
			}
		},
		onLoad() {
			setTimeout(function() {
				const params = uni.getStorageSync('userinfo');
				if (!params) {
					this.$store.dispatch('showLogin');
					return false;
				}
			}, 300)
		},
		onShow() {
			let that = this;

			setTimeout(function() {
				index = that.index;
				const params = uni.getStorageSync('userinfo');
				index.username = params.username;
				index.uid = params.uid
				index.isvip = params.isvip;

				that.getAmt();
			}, 300)
			if (this.$store.state.app == "2") {
				this.app = 2
				const lang = uni.getStorageSync('lang');
				const params = uni.getStorageSync('userinfo');
				if (lang) {
					console.log(lang.locale)
					if (lang.locale == "zh") {
						this.language = "English";
						this.langStatus = false;
					}
					if (lang.locale == "en") {
						this.language = "中文";
						this.langStatus = false;
					}
				} else {
					this.$i18n.locale = 'en';
					this.language = "中文";
				}
				if (!params || !lang) {
					this.$store.dispatch('showLogin');
					return false;
				}
			}
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		// #endif
		computed: {

			i18n() {
				return this.$t('my')
			}
		},
		methods: {
			delete1() {
				uni.removeStorage({
					key: 'lang',
					success: function(res) {

					}
				});
			},
			// ceshi(){
			// 	let type={
			// 		color:red
			// 	}
			// 	uni.setStorageSync('color', type);
			// },
			// 修改系统语言
			switchChange(e) {
				let that = this;
				let data = {
					locale: '',
					lang: ''
				};
				const userinfo = uni.getStorageSync('userinfo');
				if (this.language == "English") {
					this.language = "中文";
					this.langStatus = true
					this.$i18n.locale = 'en';
					userinfo.lang = 'English';
					data.lang = "English";
					data.locale = "en";
					// that.$store.dispatch('imghideZN');   //测试图片切换
				} else {
					this.langStatus = true
					this.language = "English";
					userinfo.lang = 'Chinese';
					data.lang = "Chinese";
					this.$i18n.locale = 'zh';
					data.locale = "zh";
					// that.$store.dispatch('imgshowEN'); //测试图片切换
				};
				// console.log(that.$store.getters.imgShow) //测试图片切换
				uni.setTabBarItem({
					index: 0,
					text: that.$t("index").tab1
				});
				uni.setTabBarItem({
					index: 1,
					text: that.$t("index").tab2
				});
				uni.setTabBarItem({
					index: 2,
					text: that.$t("index").tab3
				});
				uni.setTabBarItem({
					index: 3,
					text: that.$t("index").tab4
				});
				uni.setStorageSync('lang', data);
				uni.setStorageSync('userinfo', userinfo);
			},
			// 获取余额
			getAmt() {
				const params = uni.getStorageSync('userinfo');
				let that = this;
				that.$ajax.money(params).then(res => {
					index.price = res;
					that.integral();
				})
			},
			// 获取积分
			integral() {
				let that = this;
				that.$ajax.integral().then(res => {
					index.integralNum = res;
					that.disData();
				})
			},
			// 获取代金券列表
			disData() {
				let that = this;
				that.$ajax.dis().then(res => {
					let allList = res
					let list = []
					allList.forEach(function(item, index) {
						if (item.data.type.expire == 0) {
							if (item.data.type.not_used == 0) {
								list.push(item)
							}
						}

					})
					that.activeList = list;
					index.disLength = list.length;
					that.index = index;
				})
			},
			address(url) {
				uni.navigateTo({
					url: '/pages/address/address'
				})
			},
			order() {
				uni.navigateTo({
					url: '/pages/order/order'
				})
			},
			navTech() {
				uni.navigateTo({
					url: '/pages/technology/technology'
				})
			},
			repertory() {
				uni.navigateTo({
					url: '/pages/repertory/repertory'
				})
			},
			market() {
				uni.navigateTo({
					url: '/pages/market/market'
				})
			},
			sale() {
				uni.navigateTo({
					url: '/pages/sale/sale'
				})

			},
			navTo() {
				uni.navigateTo({
					url: '/pages/set/set'
				})
			},
			navCollect() {
				uni.navigateTo({
					url: '/pages/collect/collect'
				})
			},
			navDiscounts() {
				uni.navigateTo({
					url: '/pages/discounts/discounts'
				})
			},
			navTheme() {
				uni.reLaunch({
					url: '/pages/theme/theme'
				})
			},
			/**，
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e) {
				if (pageAtTop === false) {
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e) {
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if (moveDistance < 0) {
					this.moving = false;
					return;
				}
				this.moving = true;
				if (moveDistance >= 80 && moveDistance < 100) {
					moveDistance = 80;
				}

				if (moveDistance > 0 && moveDistance <= 80) {
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend() {
				if (this.moving === false) {
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}

		},
		onBackPress() {

			let main = plus.android.runtimeMainActivity();
			plus.android.runtimeMainActivity();
			plus.runtime.quit = function() {
				main.moveTaskToBack(false);
			};
			uni.closeSocket();
			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
			});
			plus.nativeUI.toast = (function(str) {
				if (str == '再按一次退出应用') {
					main.moveTaskToBack(false);
					return false;
				} else {
					uni.showToast({
						title: '再按一次退出应用',
						icon: 'none',
					})
				}
			});

		},
	}
</script>
<style lang='scss'>
	@font-face {
		font-family: 'HMfont-home';
		src: url('data:application/x-font-woff2;charset=utf-8;base64,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');
	}

	.icon {
		font-family: "HMfont-home" !important;
		font-size: 16px;
		font-style: normal;


		&.icon-f1 {
			&:before {
				content: "\e608";
			}
		}

		&.icon-f2 {
			&:before {
				content: "\e67b";
			}
		}

		&.icon-f3 {
			&:before {
				content: "\e706";
			}
		}

		&.icon-f4 {
			&:before {
				content: "\e62c";
			}
		}

		&.icon-f5 {
			&:before {
				content: "\e646";
			}
		}

		/* &.count {
			&:before {
				content: "\e63f";
			}
		}

		&.service {
			&:before {
				content: "\e6bd";
			}
		} */
	}

	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: white;
		border-radius: 10upx;
	}

	.user-section {
		height: 520upx;
		padding: 100upx 30upx 0;
		position: relative;

		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			/* filter: blur(1px); */
			/* 		background-image: $back-banner; */
		}
	}

	.user-info-box {
		height: 180upx;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;

		.portrait {
			width: 130upx;
			height: 130upx;
			border: 5upx solid #fff;
			border-radius: 50%;
		}

		.username {
			font-size: $font-lg + 6upx;
			color: white;
			margin-left: 20upx;
		}
	}

	.vip-card-box {
		display: flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		background: linear-gradient(left, rgba(0, 0, 0, .7), rgba(0, 0, 0, .8));
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: relative;
		padding: 20upx 24upx;

		.card-bg {
			position: absolute;
			top: 20upx;
			right: 0;
			width: 380upx;
			height: 260upx;
		}

		.b-btn {
			position: absolute;
			right: 20upx;
			top: 16upx;
			width: 132upx;
			height: 40upx;
			text-align: center;
			line-height: 40upx;
			font-size: 22upx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}

		.tit {
			font-size: $font-base+2upx;
			color: #f7d680;
			margin-bottom: 28upx;

			.yticon {
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}

		.e-b {
			font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}

	.cover-container {
		background: $page-color-base;
		margin-top: -130upx;
		padding: 0 30upx;
		position: relative;
		background: #f5f5f5;
		padding-bottom: 20upx;

		.arc {
			position: absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}

	.tj-sction {
		@extend %section;

		.tj-item {
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: #75787d;
		}

		.num {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 8upx;
		}
	}

	.order-section {
		@extend %section;
		padding: 28upx 0;
		margin-top: 20upx;

		.order-item {
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}

		.yticon,
		.icon {
			font-size: 48upx;

			color: #fa436a;
		}

		.icon-shouhoutuikuan {
			font-size: 44upx;
		}
	}

	.history-section {
		padding: 30upx 0 0;
		margin-top: 20upx;
		background: #fff;
		border-radius: 10upx;

		.sec-header {
			display: flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;

			.yticon {
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}

		.h-list {
			white-space: nowrap;
			padding: 30upx 30upx 0;

			image {
				display: inline-block;
				width: 160upx;
				height: 160upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}
</style>
