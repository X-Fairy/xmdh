<script>
	var QQMapWX = require('common/qqmap-wx-jssdk.min.js');
	var qqmapsdk;
	import api from '@/common/index.js';
	import {
		mapMutations
	} from 'vuex';
	export default {
		methods: {
			createWebSocket() {
				let wsUrl = "wss://sw.xmvogue.com";
				var heartCheck = {
					timeout: 30000, //毫秒
					timeoutObj: null,
					serverTimeoutObj: null,
					reset: function() {
						clearTimeout(this.timeoutObj);
						clearTimeout(this.serverTimeoutObj);
						return this;
					},
					start: function() {
						var self = this;
						this.timeoutObj = setTimeout(function() {
							uni.sendSocketMessage({
								data: "keep",
								success: function(res) {
									// console.log(res);
									heartCheck.reset().start();
								},
								fail: function(res) {
									console.log(res)
								}
							})
							self.serverTimeoutObj = setTimeout(function() { //如果超过一定时间还没重置，说明后端主动断开了
								uni.onSocketClose(function(res) {
									console.log('WebSocket 已关闭！');
									reconnect(wsUrl); //重连
								}); //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
							}, self.timeout)
						}, this.timeout)
					}
				}
				// 连接WebSocket
				uni.connectSocket({
					url: wsUrl
				});
				// 连接成功
				uni.onSocketOpen(function(res) {
					// console.log("成功连接到" + wsUrl);
					setTimeout(function() {
						const data = uni.getStorageSync('userinfo');
						const pages = getCurrentPages();
						let url = pages[0].route.split("/");
						console.log(pages)
						let test = '{"user_id":"' + data.hdid + '","user_name":"' + data.username + '","page":"' + url[2] +
							'","src":"app"}'
						let msg = {
							class: "Xmorder",
							action: "connect",
							content: test
						}
						let params = JSON.stringify(msg);
						uni.sendSocketMessage({
							data: params,
							success: function(res) {
								console.log(params);
								heartCheck.reset().start()
							},
							fail: function(res) {

							}
						})
					}, 2000);
				});

				// 服务器返回消息
				uni.onSocketMessage(function(res) {
					console.log(res);
				});
			},


		},
		computed: {
			i18n() {
				return this.$t("index")
			}
		},
		onLaunch: function() {

			qqmapsdk = new QQMapWX({
				key: 'Y63BZ-KFOWF-LRRJZ-NL52N-OC2F2-T2FPA'
			});

			// #ifdef MP-WEIXIN
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(function(res) {});
			updateManager.onUpdateReady(function(res) {
				let that = this
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					cancelText: that.$t('index').cancel,
					confirmText: that.$t('index').confirm,
					success(res) {
						if (res.confirm) {
							updateManager.applyUpdate();
						}
					}
				});
			});
			updateManager.onUpdateFailed(function(res) {
				// 新的版本下载失败
			});
			// #endif
		},
		onShow: function() {
			let that = this;
			setTimeout(function(){
				if (that.$store.state.app == "2") {
					let lang = uni.getStorageSync('lang');
					
					if (lang) {
						if (lang.locale == "zh") {
							this.$i18n.locale = 'zh';
						}
						if (lang.locale == "en") {
							this.$i18n.locale = 'en';
						}
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
					} else {
						this.$i18n.locale = 'zh';
					}
					if (uni.getStorageSync('userinfo') != "") {
						this.createWebSocket();
					}
					//#ifdef APP-PLUS
					this.$request.getclient(); //客户
					// that.$request.getserver();  //服务器

					// #endif

					setTimeout(function() {
						qqmapsdk.reverseGeocoder({
							location: '',
							success: function(res) {
								if (res.result.address_component.nation == "中国") {
									that.$store.dispatch('imghideZN');
									that.$api.msg(that.$t('index').address + res.result.address_component.nation)
									// console.log(that.$store.getters.imgShow)
								} else {
									that.$store.dispatch('imgshowEN');
									// console.log(that.$store.getters.imgShow)
								}
								console.log(that.$store.getters.imgShow) //测试图片切换
							},
							fail: function(res) {
								console.log('获取当前地址失败');
							}
						});
					}, 2000)
				}
			}, 300)
		},
		onHide: function() {
			uni.closeSocket();
			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
			});

		}


	}
</script>

<style lang='scss'>
	@import './common/uni.css';
	/* 调用动态css */
	/* #ifdef MP-WEIXIN */
	@import './common/animate.wxss';
	/* #endif */
	/* #ifdef APP-PLUS */
	@import './common/animate.css';

	/* #endif */
	/*
		全局公共样式和字体图标
	*/
	@font-face {
		font-family: yticon;
		font-weight: normal;
		font-style: normal;
		src: url('data:application/x-font-woff2;charset=utf-8;base64,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');
	}

	.contentsize {
		padding: 20upx 30upx;
	}

	.yticon {
		font-family: "yticon" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* base64 */
	.icon-you:before {
		content: "\e60d";
	}

	.icon-shang:before {
		content: "\e624";
	}

	.icon-fenlei1:before {
		content: "\e659";
	}

	.icon-xiatubiao--copy:before {
		content: "\e69d";
	}

	.icon-gouwuche:before {
		content: "\f0178";
	}

	.icon-shoucang:before {
		content: "\e712";
	}

	.icon-xuanzhong2:before {
		content: "\e61a";
	}



	.icon-fork:before {
		content: "\e63d";
	}

	.icon-dizhi:before {
		content: "\e60e";
	}

	.icon-shoucang_xuanzhongzhuangtai:before {
		content: "\e60c";
	}

	.icon-dis:before {
		content: "\e69b";
	}

	.icon-shezhi1:before {
		content: "\e606";
	}

	.icon-order:before {
		content: "\e616";
	}

	.iconsale:before {
		content: "\e6f0";
	}

	.iconsaleActive:before {
		content: "\e66e";
	}

	.icon-goback:before {
		content: "\e517";
	}

	/* ttf */
	/* .icon-yiguoqi1:before {
		content: "\e700";
	}

	.icon-iconfontshanchu1:before {
		content: "\e619";
	}

	.icon-iconfontweixin:before {
		content: "\e611";
	}

	.icon-alipay:before {
		content: "\e636";
	}

	.icon-shang:before {
		content: "\e624";
	}

	.icon-shouye:before {
		content: "\e626";
	}

	.icon-shanchu4:before {
		content: "\e622";
	}

	.icon-xiaoxi:before {
		content: "\e618";
	}

	.icon-jiantour-copy:before {
		content: "\e600";
	}

	.icon-fenxiang2:before {
		content: "\e61e";
	}

	.icon-pingjia:before {
		content: "\e67b";
	}

	.icon-daifukuan:before {
		content: "\e68f";
	}

	.icon-pinglun-copy:before {
		content: "\e612";
	}

	.icon-dianhua-copy:before {
		content: "\e621";
	}

	.icon-shoucang:before {
		content: "\e645";
	}

	.icon-xuanzhong2:before {
		content: "\e62f";
	}

	.icon-gouwuche_:before {
		content: "\e630";
	}

	.icon-icon-test:before {
		content: "\e60c";
	}

	.icon-icon-test1:before {
		content: "\e632";
	}

	.icon-bianji:before {
		content: "\e646";
	}

	.icon-jiazailoading-A:before {
		content: "\e8fc";
	}

	.icon-zuoshang:before {
		content: "\e613";
	}

	.icon-jia2:before {
		content: "\e60a";
	}

	.icon-huifu:before {
		content: "\e68b";
	}

	.icon-sousuo:before {
		content: "\e7ce";
	}

	.icon-arrow-fine-up:before {
		content: "\e601";
	}

	.icon-hot:before {
		content: "\e60e";
	}

	.icon-lishijilu:before {
		content: "\e6b9";
	}

	.icon-zhengxinchaxun-zhifubaoceping-:before {
		content: "\e616";
	}

	.icon-naozhong:before {
		content: "\e64a";
	}

	.icon-xiatubiao--copy:before {
		content: "\e608";
	}

	.icon-shoucang_xuanzhongzhuangtai:before {
		content: "\e6a9";
	}

	.icon-jia1:before {
		content: "\e61c";
	}

	.icon-bangzhu1:before {
		content: "\e63d";
	}

	.icon-arrow-left-bottom:before {
		content: "\e602";
	}

	.icon-arrow-right-bottom:before {
		content: "\e603";
	}

	.icon-arrow-left-top:before {
		content: "\e604";
	}

	.icon-icon--:before {
		content: "\e744";
	}

	.icon-zuojiantou-up:before {
		content: "\e605";
	}

	.icon-xia:before {
		content: "\e62d";
	}

	.icon--jianhao:before {
		content: "\e60b";
	}

	.icon-weixinzhifu:before {
		content: "\e61a";
	}

	.icon-comment:before {
		content: "\e64f";
	}

	.icon-weixin:before {
		content: "\e61f";
	}

	.icon-fenlei1:before {
		content: "\e620";
	}

	.icon-erjiye-yucunkuan:before {
		content: "\e623";
	}

	.icon-Group-:before {
		content: "\e688";
	}

	.icon-you:before {
		content: "\e606";
	}

	.icon-forward:before {
		content: "\e607";
	}

	.icon-tuijian:before {
		content: "\e610";
	}

	.icon-bangzhu:before {
		content: "\e679";
	}

	.icon-share:before {
		content: "\e656";
	}

	.icon-yiguoqi:before {
		content: "\e997";
	}

	.icon-shezhi1:before {
		content: "\e61d";
	}

	.icon-fork:before {
		content: "\e61b";
	}

	.icon-kafei:before {
		content: "\e66a";
	}

	.icon-iLinkapp-:before {
		content: "\e654";
	}

	.icon-saomiao:before {
		content: "\e60d";
	}

	.icon-shezhi:before {
		content: "\e60f";
	}

	.icon-shouhoutuikuan:before {
		content: "\e631";
	}

	.icon-gouwuche:before {
		content: "\e609";
	}

	.icon-dizhi:before {
		content: "\e614";
	}

	.icon-fenlei:before {
		content: "\e706";
	}

	.icon-xingxing:before {
		content: "\e70b";
	}

	.icon-tuandui:before {
		content: "\e633";
	}

	.icon-zuanshi:before {
		content: "\e615";
	}

	.icon-zuo:before {
		content: "\e63c";
	}

	.icon-shoucang2:before {
		content: "\e62e";
	}

	.icon-shouhuodizhi:before {
		content: "\e712";
	}

	.icon-yishouhuo:before {
		content: "\e71a";
	}

	.icon-dianzan-ash:before {
		content: "\e617";
	} */



	input {
		padding: 0 20upx;

	}

	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}

	/* 骨架屏替代方案 */
	.Skeleton {
		background: #f3f3f3;
		padding: 20upx 0;
		border-radius: 8upx;
	}

	/* 图片载入替代方案 */
	.image-wrapper {
		font-size: 0;
		background: #f3f3f3;
		border-radius: 4px;

		image {
			width: 100%;
			height: 100%;
			transition: .6s;
			opacity: 0;

			&.loaded {
				opacity: 1;
			}
		}
	}

	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}

	.common-hover {
		background: #f5f5f5;
	}

	/*边框*/
	.b-b:after,
	.b-t:after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		height: 0;
		content: '';
		transform: scaleY(.5);
		border-bottom: 1px solid $border-color-base;
	}

	.b-b:after {
		bottom: 0;
	}

	.b-t:after {
		top: 0;
	}

	/* button样式改写 */
	uni-button,
	button {
		height: 80upx;
		line-height: 80upx;
		font-size: $font-lg + 2upx;
		font-weight: normal;

		&.no-border:before,
		&.no-border:after {
			border: 0;
		}
	}

	uni-button[type=default],
	button[type=default] {
		color: $font-color-dark;
	}

	/* input 样式 */
	.input-placeholder {
		color: #999999;
	}

	.placeholder {
		color: #999999;
	}

	/* 消息提醒 */
	.uni-toast__content {
		font-size: 30upx;
		border-radius: 1upx;
	}

	/* 按钮 */
	.uni-btn-v {
		.buttonPy {
			background: #7AC5CD;
			color: #fff;
			bottom: 60upx;
			position: fixed;
			left: 20upx;
			right: 20upx;
		}
	}

	.xia {
		margin-top: 1upx;
	}

	.xi-btn {
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: #44b7d9;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px #44b7d9;
		border: none;

	}

	.box-border {
		box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.1);
	}

	.overData {
		margin-top: 60px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	/* 字体大小 */
	.size-h1 {
		font-size: 26upx;
	}

	image {
		will-change: transform;
	}
</style>
