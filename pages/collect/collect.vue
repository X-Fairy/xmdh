<template>
	<view>
		<empty v-if="mvc.cartoon"></empty>
		<view v-else>
			<!-- 导航 -->
			<view class="nav">
				<scroll-view class="floor-list" scroll-x>
					<view class="scoll-wrapper">
						<view v-for="(item, index) in mvc.navList" :key="index" class="floor-item" @click="changenav(item, index)">
							<text class="title" :class="mvc.activeClass == index?'active':''">{{item.title}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 商品列表 -->
			<view class="addcard" style="padding-top: 80upx;">
				<view v-if="mvc.collectList.length==0">
					<view style="text-align: center;">
						{{i18n.more}}
					</view>
				</view>
				<view class="s-header box-border" v-for="(item,index) in mvc.collectList" :key="index" v-else>
					<!-- <view class="addImg">
						<image :src="item.img" mode="" class="s-header-img" @click="navToDetailPage(item.code)"></image>
					</view> -->
					<view @click="navToDetailPage(item.code)">
						<imglazy :url="item.img"  :sty="imglazyStyle"></imglazy>
					</view>
					
					<view class="s-text" @click="navToDetailPage(item.code)">
						<view class="clamp">
							{{item.item_name}}
						</view>
						<view>
							{{i18n.item_no}}: {{item.code}}
						</view>
						<view class="parice">
							<view class="">
								<text class="num">{{i18n.p1}}：¥{{item.base_price}}</text>
							</view>
							<view class="">
								<text class="num">{{i18n.p2}}：¥{{item.sale_price}}</text>
							</view>
						</view>
					</view>
					<view class="del-btn yticon icon-fork" @click="deleteCartItem(item, index)">
					</view>
				</view>
				<over v-if="mvc.over"></over>
			</view>

			<!-- 底部菜单栏 -->
			<view class="action-section">

				<button type="primary" class="no-border confirm-btn" @click="deleteAll">{{i18n.empty}}</button>
				<view class="total-box">
					<text class="price">{{i18n.foot_a}} {{mvc.collectList.length}} {{i18n.foot_b}}</text>
					<!-- <text class="coupon">
					已优惠
					<text>{{shengqian}}</text>
					元
				</text> -->
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/common/index.js';
	import empty from "@/components/empty";
	import over from '@/components/over.vue';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	let mvc = {
		collectList: [],
		total: "",
		navList: [],
		activeClass: 0,
		cartoon: false,
		over: false,
		typeId: -1
	}
	export default {
		components: {
			empty,
			over,
			imglazy
		},
		data() {
			return {
				imglazyStyle: 'border-radius: 10upx;',
				mvc: {
					collectList: [],
					total: "",
					navList: [],
					activeClass: 0,
					cartoon: false,
					over: false,
					typeId: -1
				}
			}
		},
		onLoad() {
			let that = this
			setTimeout(function() {
				api.pageTitle(that.$t('collect').title)
				api.load(that.$t('index').loadmsg)
				that.loadData();
				let arry = '';
				uni.setStorageSync('collectlist', arry);
			}, 300)
		},
		computed: {
			i18n() {
				return this.$t('collect')
			}
		},
		methods: {
			loadData() {
				let that = this;
				mvc.cartoon = false;
				mvc.over = false;
				that.$ajax.colList().then(res => {
					let arry = res.sql;
					if (arry.length == 0) {
						mvc.cartoon = true;
						uni.hideLoading();
						that.mvc = mvc
						return false;
					}
					let navarry = res.cls;
					let navListRight = [];
					arry.forEach(function(item, index) {
						item.img = that.$store.getters.imgShow + '/thumb/' + item.code + '.jpg?x-oss-process=style/300';
					});
					for (let i in navarry) {
						navListRight.push(navarry[i])
					}
					let entire = {
						title: that.$t('collect').Default,
						cls: "全部"
					}
					mvc.over = true;
					navListRight.unshift(entire)
					mvc.navList = navListRight;
					mvc.allList = arry
					uni.setStorageSync('collectlist', arry);
					mvc.collectList = arry;
					uni.hideLoading();
					that.mvc = mvc;
				})

			},
			// 商品分类
			changenav(item, index) {
				let list = uni.getStorageSync('collectlist');
				mvc.typeId = item.cls;

				mvc.activeClass = index;
				if (mvc.typeId == "全部") {
					mvc.collectList = uni.getStorageSync('collectlist');
				} else {
					let navItem = [];
					list.forEach(function(data, j) {
						if (parseInt(mvc.typeId) >= 0) {
							if (data.cls_id === mvc.typeId) {
								navItem.push(data)
							}
						} else {
							if (data.huodong == mvc.typeId) {
								navItem.push(data)
							}
						}
					})
					mvc.collectList = navItem;
				}
				this.mvc = mvc;
			},
			//删除
			deleteCartItem(item, index) {
				let that = this;
				let allList = uni.getStorageSync('collectlist');
				let params = {
					sn: item.code
				}
				that.$ajax.colDele(params).then(res => {
					that.$api.msg(that.$t('index').msg2);
					let list = mvc.collectList;
					let row = list[index];
					let code = row.code;
					mvc.collectList.splice(index, 1);
					if (mvc.collectList.length == 0) {
						mvc.collectList = [];
						that.loadData();
					}
					allList.forEach(function(e, k) {
						if (e.code == code) {
							allList.splice(k, 1);
						}
					})
					uni.setStorageSync('collectlist', allList);
					uni.hideLoading();
					that.mvc = mvc;
				})
			},
			navToDetailPage(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/product/product?productId=${item}`
				})
			},
			// 全部清空
			deleteAll() {
				let that = this;
				uni.showModal({
					title: '提示',
					cancelText: that.$t('index').cancel,
					confirmText: that.$t('index').confirm,
					content: '您是否要删除全部商品？',
					success: function(res) {
						if (res.confirm) {
							that.$ajax.colDeleAll().then(res => {
								let arry = '';
								mvc.collectList = [];
								mvc.navList = [];
								mvc.over = false;
								mvc.cartoon = true;
								uni.setStorageSync('collectlist', arry);
								that.mvc = mvc
							})

						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.addcard {
		margin: 0 30upx 30upx 30upx;
		position: relative;
		padding-bottom: 200upx
	}

	.nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 30;
		background: white;
		width: 100%;
	}

	%section {
		background: white;
		border-radius: 10upx;
		width: 100%;
		padding: 20upx;

	}

	.s-bottom {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 10;

		.s-bottom-btn {
			width: 50%;
			background-color: #F7F7F7;
			border: #999;
			font-size: 28upx;
			color: #6F6F6F;
			border-radius: 0;
			border-top: none;
		}

		.s-bottom-btn:after {

			border-radius: 0;

		}

		.button-hover {
			background-color: #DDDDDD;

		}
	}

	.s-header {
		@extend %section;
		display: flex;
		justify-content: left;
		margin: 25upx 0;
		position: relative;

		.addImg {
			width: 150;
			height: 150upx;

			image {
				width: 150upx;
				height: 150upx;
				border-radius: 10upx;
				margin: 0 10upx;
			}
		}

		.lazy {
			width: 160upx;
			height: 150upx;
			padding-right: 10upx;
		}

		.s-text {

			width: 75%;

			view {
				font-size: 26upx;
			}

			.parice {
				display: flex;
				display: flex;
				justify-content: left;

				view {
					margin-right: 20upx;

					.num {
						color: $font-color-e1
					}
				}
			}

		}

		.del-btn {
			position: absolute;
			top: 0;
			right: 1%;
		}

		.yticon {
			color: red;
			font-weight: bold;
		}
	}

	/* 底部栏 */
	.action-section {
		/* #ifdef H5 */
		margin-bottom: 30upx;
		/* #endif */

		position: fixed;
		left: 30upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 690upx;
		height: 100upx;
		padding: 0 30upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
		border-radius: 16upx;

		.checkbox {
			height: 52upx;
			position: relative;

			image {
				width: 52upx;
				height: 100%;
				position: relative;
				z-index: 5;
			}
		}


		.total-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			text-align: right;
			padding-right: 40upx;

			.price {
				font-size: $font-lg;
				color: $font-color-dark;
			}

			.coupon {
				font-size: $font-sm;
				color: $font-color-light;

				text {
					color: $font-color-dark;
				}
			}
		}

		.confirm-btn {
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: $font-base + 2upx;
			background: $uni-color-primary;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
		}
	}

	/* 顶部导航 */
	.floor-list {
		white-space: nowrap;
		box-shadow: 0 2upx 10upx rgba(0, 0, 0, .06);
	}

	.scoll-wrapper {
		display: flex;
		align-items: flex-start;
		display: flex;
		width: 100%;
		height: 80upx;
		border-bottom: 1px solid #eeeeee;

		.floor-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 26upx;

			position: relative;

			.title {
				line-height: 80upx;
				width: 100upx;
				height: 100%;
				margin: 0 20upx;
				text-align: center;
			}

			.active {
				color: #FF80AB;

				border-bottom: 4upx solid $base-color;

			}
		}


	}
</style>
