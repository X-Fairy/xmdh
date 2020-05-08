<template>
	<view>
		<view class="page-body" :style="'height:'+mvc.height+'px'">
			<scroll-view class="nav-left" scroll-y :style="'height:'+mvc.height+'px'" :scroll-top="mvc.scrollLeftTop"
			 scroll-with-animation>
				<view class="nav-left-item" @click="categoryClickMain(index)" :key="index" :class="index==mvc.categoryActive?'active':''"
				 v-for="(item,index) in mvc.classifyData">
					{{item.cls_name}}
				</view>
			</scroll-view>
			<scroll-view class="nav-right animated swing" scroll-y :scroll-top="mvc.scrollTop" @scroll="scroll" :style="'height:'+mvc.height+'px'"
			 scroll-with-animation v-if="mvc.rightHide==true">
				<view v-for="(foods,index) in mvc.classifyData" :key="index" class="box">
					<view :id="i==0?'first':''" class="nav-right-item " v-for="(item,i) in foods.child" :key="i" @click="cart(item.cls_id)">
						<view class="foodsTitle">{{item.cls_name}}</view>
						<view class="foodsimg">
							<view v-for="(img,ff) in item.lazy" :key="ff">
								<imglazy :url="img.src"></imglazy>
							</view>
						</view>

					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import classifyData from '@/common/classify.data.js';
	import api from '@/common/index.js';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	let mvc = {
		height: 0,
		categoryActive: 0,
		scrollTop: 0,
		scrollLeftTop: 0,
		scrollHeight: 0,
		classifyData: [],
		arr: [0, 384, 1168, 1752, 2336, 2805, 3274, 3858, 4442, 4911, 5380, 5734, 6203, 6672, 7017], //初始值，后边计算会根据手机适配覆盖
		leftItemHeight: 51, //49行会计算出新值进行覆盖
		navLeftHeight: 0, //左边scroll-view 内层nav的总高度
		diff: 0, //左边scroll-view 内层nav的总高度与视口之差
		tabBarHeight: 0, //如果此页面为Tab页面，自己改变高度值,一般tab高度为51
		text: "",
		placeholderSrc: '../../../static/60x60.png',
		statusHeight: 0,
		gdgg: '',
		rightHide: false
	}
	export default {
		components: {
			imglazy

		},
		data() {
			return {
				mvc: {
					height: 0,
					categoryActive: 0,
					scrollTop: 0,
					scrollLeftTop: 0,
					scrollHeight: 0,
					classifyData: [],
					arr: [0, 384, 1168, 1752, 2336, 2805, 3274, 3858, 4442, 4911, 5380, 5734, 6203, 6672, 7017], //初始值，后边计算会根据手机适配覆盖
					leftItemHeight: 51, //49行会计算出新值进行覆盖
					navLeftHeight: 0, //左边scroll-view 内层nav的总高度
					diff: 0, //左边scroll-view 内层nav的总高度与视口之差
					tabBarHeight: 0, //如果此页面为Tab页面，自己改变高度值,,一般tab高度为51
					text: "",
					statusHeight: 0,
					rightHide: false
				}
			}
		},

		onLoad: function() {
			let that = this
			setTimeout(function() {
				const params = uni.getStorageSync('userinfo');
				if (!params) {
					that.$store.dispatch('showLogin');
					return false;
				}
				api.pageTitle(that.$t('list').title)
				mvc.height = uni.getSystemInfoSync().windowHeight - mvc.tabBarHeight;
				mvc.windowHeight = uni.getSystemInfoSync().windowHeight;
				that.getTitleHeight();
				that.loadData();
			})
		},
		methods: {
			loadData() {
				api.load(this.$t('index').loadmsg);
				let that = this;
				that.$ajax.categories_app().then(res => {
					console.log(res)

					res.forEach(function(item, index) {
						if (item.cls_id == 14) {
							item.child = [{
								cls_id: "14",
								cls_name: "物料耗材",
								lazy: [{
									src: '0'
								}, {
									src: '0'
								}, {
									src: '0'
								}],
								index: "14"
							}]
						}
					})
					
					mvc.classifyData = res;
					that.$nextTick(function() {
						that.getHeightList();
					})
					mvc.rightHide = true
					that.mvc = mvc;
				})
				
				uni.hideLoading();
				this.scroll();
			},
			getTitleHeight() {
				let that = this;
				uni.getSystemInfo({
					success: res => {
						if (res.screenHeight < 750) {

							mvc.statusHeight = "80px";
							that.mvc = mvc;
							return false;
						}
						if (res.screenHeight < 950) {

							mvc.statusHeight = "95px";
							that.mvc = mvc;
							return false;
						}
						if (res.screenHeight > 1000) {

							mvc.statusHeight = "140px";
							that.mvc = mvc;
							return false;
						}
					}
				})
			},
			getHeightList() {
				let _this = this;
				let selectorQuery = uni.createSelectorQuery();
				selectorQuery.selectAll('.nav-left-item').boundingClientRect(function(rects) {

					mvc.leftItemHeight = rects[0].height;
					mvc.navLeftHeight = mvc.leftItemHeight * classifyData.length;
					mvc.diff = mvc.navLeftHeight - mvc.height;
				});
				selectorQuery.selectAll('.box').boundingClientRect(function(rects) {
					let arr = [0];
					let top = 0;
					rects.forEach(function(rect) {
						// 					rect.id      // 节点的ID
						// 					rect.dataset // 节点的dataset
						// 					rect.left    // 节点的左边界坐标
						// 					rect.right   // 节点的右边界坐标
						// 					rect.top     // 节点的上边界坐标
						// 					rect.bottom  // 节点的下边界坐标
						// 					rect.width   // 节点的宽度
						// 					rect.height  // 节点的高度
						top += rect.height;
						arr.push(top)
					})
					console.log(mvc.arr)
					mvc.arr = arr
				}).exec()
			},
			scroll(e) {
				// 懒加载
				// this.lazyload();
				this.scrillType(e);
			},
			scrillType(e) {
				// 自动更新当前分类
				let _this = this
				if (this.timeoutId) {
					clearTimeout(this.timeoutId);
				}
				this.timeoutId = setTimeout(function() { //节流
					if (e != undefined) {
						mvc.scrollHeight = e.detail.scrollTop;
					}
					//若想使切换参考线为屏幕顶部请删除 _this.height/2
					for (let i = 0; i < mvc.arr.length; i++) {
						let height1 = mvc.arr[i];
						let height2 = mvc.arr[i + 1];
						if (!height2 || (mvc.scrollHeight >= height1 && mvc.scrollHeight < height2)) {
							mvc.categoryActive = i;
							(mvc.diff > 0) && (mvc.scrollLeftTop = Math.round((mvc.categoryActive * mvc.diff) / (classifyData.length -
								1)));
							return false;
						}
					}
					mvc.categoryActive = 0;
					mvc.timeoutId = undefined;

				}, 10)
				this.mvc = mvc;
			},
			categoryClickMain(index) {
				mvc.categoryActive = index;
				mvc.scrollTop = mvc.arr[index]
			},
			cart: function(text) {
				uni.navigateTo({
					url: `/pages/product/list?listId=${text}`
				})
			},
			navSearch() {
				uni.navigateTo({
					url: `/pages/search/search`
				})
			},
			onScan() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.navigateTo({
							url: `/pages/product/product?productId=${res.result}`
						})
					}
				});
			},
			categoryError(e) {}

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
		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {

			uni.navigateTo({
				url: `/pages/search/search`
			})
		},

		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.navigateTo({
							url: `/pages/product/product?productId=${res.result}`
						})
					}
				});
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
		}
		// #endif
	}
</script>

<style lang="scss">
	page {
		position: relative;
	}

	@font-face {
		font-family: 'HMfont-home';
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUwAAsAAAAACYQAAATiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqGIIUfATYCJAMUCwwABCAFhG0HTBsvCFGULk6O7EvIyYYekQTabRkvs9JQlpOfvbz+1w0unHdih8IPlwYu4AVBACgA4uH/9+u3z5U379/5org3yCbRNLs0TaKRlgiVSijeWJ0ZzLkS8ATx4uJbug0r1xUTOxd9mfzfzds2S/CDZkfhmJYuWtoBxfFZL4IIA64H/mPJWu72FLRrSwILKJD3gF64BW9vv7R5KJkFkhucBIGHkb7CQCuN+2J7wEW5MG3HhhW6HBxL/bQGy7P/doos6rDCB3x+oAeKyjXQQDeQDdDmvmHs8iIPE2hWsQcPRsanAzmFPioQN0WCEiCXMCsVxaEXuoKFRXxS9el1ugn46H1//OUaPUnN9InHLkfwQfCPoC/wfGQuOQiS4Zxgy8jYASjE/UL3TZJBbAdJTf49KXsBTS9JP/Z87p9PPQpFviFtM/7hUYQkEx1dPY6we1Xl4CSWONIIGgXUFDJJ/ITG9aLrgoYZwH9iN9BxG/BUA6HMVLhWiqL0GSwFVQtCCg0N4i1nIMRg+YoQ7DiNUp/h0D2DegTXPPDCAA2eBIUO3zeEGCyMBc6dQSrMEHXkjt7crEb70fBpdPgwnJ3WXLiGseANevw48+HD9I07tWu+LR7aQu17FENdc5qbH2euvmCVdcVtzmgOD2lS2x6ZPHoYj6bbNTUxdZ+4LVh0OHBxO9p4sv2UxZYdek+eZG3ZowcXT1umD2ac1Upv/uhRxrQG5L/ogFB8ZrZjbkgzY6ZdI316MEqnGlTex6bSXlnWjjtYDt2yKewCsPZho9TCNgvV3l5XunGmnt2MFAY3ahCFzds7dlgpbtrWvtXzbVyr3TGuqtNm7/E2vyv2rbpWt9WJ7N2OvRmR8fa9wuwfiDdEte1dwG3bvZyqtR0+l2KXAS2D5Kx9pLrNoW14p2QSdJ0av54B4C9CaGQX17XEkMTV7erp/js2rFi30u5aavFXV3C8ZmcVdLBYMXXhXzrk9XAOkxZlVsXXVVAp6yihE4w6oyK5tiCx0O7/UvQGXeT7hxpr1zaTtXu/lJ547PMStWJlzom+b2xlVrB2DEBo7f2go5mb5qqt+zHe4f0JbOxuAXZ/ASef3b6Vys9UxIvnoRJui5XNgLd2x45GSwM+P/ER1j+HCT8gGKRz7vdUawPwiQpQeQLRzrsZ2pVnBBT+KWzP+dX2ad/g0053TwGMkh/necfNcxAApBepCoCRC8zPf6+f8fAI+ViknPzlsIDv9DGF0mZq/4hGY8nPVFEQoxfMyXRLLVKtJZbyq1cGvBLpf1P1C/lnvR5Gu9C4kNBbiCAZWAlZbwOyYHdANbQLOr090GwXtXxoDktSlDFs0wMgTNsDyaSvkE27hSzYV1At8hU605GhORPxhkOb4hpyLCnhCN+4tMFYxGOqaNPGIb84lQhqKkrYuMyjZBJWLAoauzg6p5NRpIqwQ0wR1wpcOY42plmm0jgSHEcqKhjjapYpIzzOUchx1b5OTnTRBznymEqAHMAiSnAIPmOlGhgT4WFUoZ3mHJT5+lSEQI0KJdiKurJgJoIlJmrfmAtHzg2QUeqqRnWX0l2sloArDofGw2gsRiVjkdBJVBgxhrHq4n5lCB6OI2GHSDVfTqgR3VTtOL228h63QKNvUSNFjhI1Ov2DEqZBZO8ouxK2VsQj0otIIOSkV47hlQMAAAA=') format('woff2')
	}



	.icon {
		font-family: 'HMfont-home' !important;
		font-size: 40upx;
		font-style: normal;
		position: absolute;
		color: white;

		&.scan {
			position: absolute;
			left: 15upx;
			top: -10upx;

			&:before {
				content: "\e64b";
			}
		}

	}

	/* #ifdef MP */
	.mp-search-box {
		position: absolute;
		left: 0;
		top: 6%;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;

		.wx-header {
			display: flex;

			.ser-input {
				flex: 1;
				height: 56upx;
				line-height: 56upx;
				text-align: center;
				font-size: 28upx;
				color: $font-color-base;
				border-radius: 20px;
				background: rgba(255, 255, 255, .6);
			}
		}

	}

	/* #endif */
	// 顶部导航占位符
	.header-back {
		.bg {
			width: 100%;
			height: 100%;

		}


		height:150upx;
	}

	/* 隐藏滚动条 */
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.page-body {
		display: flex;
		background: #fff;
		overflow: hidden;
		border-top: 1px solid #EEEEEE;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 25%;
		background: #F8F8F8;
	}

	.nav-left-item {
		padding: 30rpx 20rpx;
		border-right: solid 1px #EEEEEE;
		border-bottom: solid 1px #EEEEEE;
		font-size: 27upx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		color: #666666;
	}

	.nav-left-item:last-child {
		border-bottom: none;
	}

	.nav-right {

		width: 75%;
	}

	.box {
		display: block;
		overflow: hidden;
		border-bottom: 20upx solid #f3f3f3;
		// min-height: 100vh;
		/*若您的子分类过少想使得每个子分类占满屏请放开上边注视 */
	}

	.box:last-child {
		border: none;
		min-height: 100vh;
	}

	.nav-right-item {
		width: 100%;
		height: 240upx;
		float: left;
		text-align: center;
		padding: 11upx;
		font-size: 26upx;
		background: #fff;


	}

	.nav-right-item image {
		width: 130upx;
		height: 130upx;
	}

	.active {
		color: $font-color-e1;
		background: #fff;
		border-right: 0;

	}

	.active:before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		height: 80upx;
		width: 8upx;
		background-color: $font-color-e1;
		opacity: .8;
	}

	::-webkit-scrollbar {
		/*取消小程序的默认导航条样式*/
		width: 0;
		height: 0;
		color: transparent;
	}

	.foodsimg {
		display: flex;
		justify-content: space-around;
	}

	.foodsTitle {
		padding: 15upx;
		color: #999999;
	}

	.placeholder {
		opacity: 1;
		transition: opacity 0.4s linear;
	}

	.placeholder.loaded {
		opacity: 0;
	}

	.gdggsize {
		height: 100%;
	}

	.lazy {
		width: 130upx;
		height: 130upx;
	}
</style>
