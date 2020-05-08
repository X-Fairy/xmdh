<template>
	<view>
		<view class="content">
			<!-- 导航 -->
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in mvc.navList" :key="index" class="floor-item" @click="bindnav(index)" :class="mvc.activeClass == index?'active':''">
						<text class="title">{{item}}</text>
					</view>
				</view>
			</scroll-view>
			<!-- 空白页 -->
			<empty v-if="mvc.cartoon==true"></empty>
			<!-- 订单列表 -->
			<view v-else style="padding-top: 80upx;">
				<view class="list-cell" v-for="(item,index) in mvc.orderList" :key="index" @click="details(item.sheet_no || item.NUM)">
					<view class="uni-list-cell-navigate uni-navigate-right uni-media-list ">
						<view class="list-text">
							<view class="title">
								{{item.sheet_no||item.NUM}} {{i18n.order}}
							</view>

							<view class="did"><text class="tit-right">{{i18n.priceAll}}：</text>￥{{item.sheet_amt || item.TOTAL}}</view>
							<view class="did"><text class="tit-right">{{i18n.time}}：</text>{{item.oper_date}}</view>
						</view>
					</view>
				</view>
				<uni-load-more :status="mvc.loadingType"></uni-load-more>
			</view>

		</view>
	</view>
</template>

<script>
	import empty from "@/components/empty";
	import Json from '@/Json';
	import api from '@/common/index.js';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import '@/common/uni.css';
	let mvc = {
		loadingType: 'more', //加载更多状态
		orderList: [],
		cartoon: false,
		navList: [],
		activeClass: 0,
		page: 1, //当前页
		type: 'add',
		status: 0
	}
	export default {
		components: {
			uniNavBar,
			empty,
			uniLoadMore,
		},
		data() {
			return {
				mvc: {
					loadingType: 'more', //加载更多状态
					orderList: [],
					cartoon: false,
					navList: [],
					activeClass: 0,
					page: 1, //当前页
					type: 'add',
					status: 0
				}
			};
		},

		onLoad(options) {


		},
		onShow() {
			let that = this;
			setTimeout(function() {
				mvc = that.mvc;
				mvc.activeClass=0;
				mvc.page=1;
				mvc.orderList=[];
				api.load(that.$t('index').loadmsg)
				api.pageTitle(that.$t('order_list').title)
				mvc.navList = that.$t('order_list').navList;
				that.loadData();
			}, 300)
		},
		computed: {
			i18n() {
				return this.$t('order_list')
			}
		},

		//下拉刷新
		onPullDownRefresh() {
			mvc.page = 1;
			mvc.type = 'refresh';
			this.loadData();
		},
		//加载更多
		onReachBottom() {
			mvc.type = 'add'
			this.loadData();

		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			//获取未确认订单列表
			//加载商品 ，带下拉刷新和上滑加载
			async loadData() {
				let that = this;
				mvc.cartoon = false;
				let params = {
					page: mvc.page
				}
				if (mvc.activeClass == 0) {
					that.$ajax.orderHa(params).then(res => {
						if (res.list == null || res.other.totalPage == 0) {
							uni.hideLoading();
							mvc.loadingType = "nomore";
							mvc.cartoon = true;
							return false;
						} else {
							that.pagenum(res);
						}
					})
				} else {
					that.$ajax.orderHd(params).then(res => {
						if (res.list == null || res.other.totalPage == 0) {
							uni.hideLoading();
							mvc.loadingType = "nomore";
							mvc.cartoon = true;
							return false;
						} else {
							that.pagenum(res);
						}
					})
				}
			},
			pagenum(res) {
				let that = this;
				let orderList = res.list;
				mvc.loadingType = res.other.thispage > res.other.totalPage ? 'nomore' : 'more';
				//请求分页
				if (mvc.type == 'add') {
					mvc.page = mvc.page + 1;

					if (mvc.loadingType === 'nomore') {
						that.mvc = mvc
						return;
					}
					mvc.loadingType = 'loading';
				} else {
					mvc.loadingType = 'more'
				}

				// 刷新页面
				if (mvc.type == 'refresh') {
					mvc.orderList = [];
					uni.stopPullDownRefresh();
					mvc.page = mvc.page + 1;

					if (mvc.loadingType === 'nomore') {
						that.mvc = mvc
						return;
					}
					mvc.loadingType = 'loading';
				}
				// 当前页面小于20条
				if (orderList.length < 20) {
					mvc.loadingType = 'nomore';
					uni.hideLoading();
					mvc.orderList = mvc.orderList.concat(orderList);
					that.mvc = mvc
					return false;
				}
				uni.hideLoading();
				mvc.orderList = mvc.orderList.concat(orderList);
				that.mvc = mvc
			},

			bindnav(index) {
				mvc.activeClass = index;
				let that = this;
				mvc.cartoon = false;
				mvc.loadingType = "more";
				mvc.page = 1;
				mvc.orderList = [];
				api.load(this.$t('index').loadmsg)
				that.loadData();

			},
			details(e) {
				if (mvc.activeClass == 0) {
					uni.navigateTo({
						url: '/pages/oreder-detail/index?sn=' + e
					})
				};
				if (mvc.activeClass == 1) {
					uni.navigateTo({
						url: '/pages/order-hddata/order-hddata?sn=' + e
					})
				};

			},
		},
	}
</script>

<style lang="scss">
	@font-face {
		font-family: 'HMfont-home';
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARcAAsAAAAACMQAAAQNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqFBIQfATYCJAMQCwoABCAFhG0HQRuKBxEVnOPJfh44xsrxg6Ieu1xtMcNf1Eh6z/nP532em7xvjMFCyhQw9/UuBLm76hdoKBkEQRYHFmDubW3avXVUJUvWTj/9A3nY4fLpEk5UyCZAwJwBl9MfJT7PshzH2rSHLQwwDiigsTYlFA6QgDyQhrHLi9wNBFByFYx6bnE15Bh9EAFo9unVAXnCiFXkEzkiLZgZoAsJeZ7F3QWwwPs8fUQmOcCRFOgjy3vmdEf697QfGl4QBTQ7BETD2QGweQAPCAYwoFHo7AQfRILxlHIqEwuQG69w8D3t+7kfGlFE4q0o5UiJrj88DqhCV6ohM1rBH5jIEkaqc5APBD80RnCYZmp559htgBJkOj+HDGGNqg3EyGBVKtWD5thOPHBasdwsnMxeqjx+nJYvtay6paJes5XPn9c+fVq9da8dq86p5uywHXpWYFuxwrL9ee36K351N6JWuK1QzbHYdj3zePa0WLlUsFhUtjsvolb5dNhx9W7l1rPCOZ8de5xevKjbccCJVp/3rR5Mv9yaXv3Zs5qlZure1UU0rHZ514o5lpplgrl66ewo2TZGf/25p8QrqtvzQKWZcy+gsA3YezqWrdrlY+jtP0rGGmqXb1eqZ28191Bv3921x0+zbZewk58gK+ft69lUbwqUfdLqtRQ5wvzfyQXdVxO5CVc3zeDmcDd3O02b+qc/VzPKxbBvzYSGltM+hnC9MrtdUxDR/doxr1nD+2dJpMyoT4zsNUCWZesdRiQx6HmPltLWoH/XWs8tY4Yq2p+aN3pEeWxM/14xTXVqkX2M31DpPM2Mh+l+Xi0bh/VBb2wcGrT0irIM2bl4JI2gnQvBytE+2L8KAFA16f69HN1uXc6b19n6bFuorIZ4Asrz8yVBqoZFomaT10+vTRrf16AKkuRcH2ucBNp66DchatXYB1xoCFL/VAc1/BR362d4z9A792EwAEC8VA7xaQDAHW4gIAqMeOGf+A56rxn1qk2X/EeuYgCAV+HhjZ64mQovVtRY9AeUMACiGMRJdBMLSWoJ1VxmCmRwK+VKwwK89zzA6D2Q2tI4FyBylggcGRfw5LxJxgyGhEo0pOTSoBQkb76KyVDwKBQAAk0DIHoHwNG6AJ7ePZIxOT+0bfzRMauJgUfLFYe2JYM9oxIMwf9CElCpTYsM/PwLRs9ccVzisR7IJvGDaznp+BlL5CHGmFfkiWjQTAWcwH6Y5wQVU4qBWLFItbNtXfQgK6CiNrDHkCJQCPi+QCJAStqpLwaZ91+gyFNO4YqqsuADYkbSPHBZnAbkWVk2qrqU9sZLxCOExv00RgrgBO0oNyIEVMXdUiggLHGHUGXHRrV0U6U1vbq4ww0ASvrFLI54YiRBd+RXEmCbkyiWthEKsloNAAAA') format('woff2')
	}

	.icon {
		font-family: 'HMfont-home' !important;
		font-size: 40upx;
		font-style: normal;
		position: absolute;

		&.right {
			&:before {
				content: "\e70d";
			}
		}

	}

	page {
		background-color: $page-color-base;
	}

	.uni-list {
		top: 78upx;
	}

	.list-cell {
		position: static;
		background-color: white;
		margin: 20rpx 30rpx;
		border: 1px solid #e7e7e7;
		border-radius: 20rpx;
	}

	.order-item {
		display: flex;
		flex-direction: column;
		padding: 15upx 30upx 15upx 30upx;
		margin-top: 16upx;

		.time {
			font-size: 25upx;
		}

		.item {
			margin-top: 10upx;
			margin-right: 30upx;
			display: flex;
			justify-content: space-between;
			font-size: 28upx;
		}
	}

	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}

	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}

	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}

	.uni-load-more__img>view {
		position: absolute
	}

	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}

	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}

	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}

	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}

	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}

	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}

	.load2 {
		transform: rotate(30deg)
	}

	.load3 {
		transform: rotate(60deg)
	}

	.load1 view:nth-child(1) {
		animation-delay: 0s
	}

	.load2 view:nth-child(1) {
		animation-delay: .13s
	}

	.load3 view:nth-child(1) {
		animation-delay: .26s
	}

	.load1 view:nth-child(2) {
		animation-delay: .39s
	}

	.load2 view:nth-child(2) {
		animation-delay: .52s
	}

	.load3 view:nth-child(2) {
		animation-delay: .65s
	}

	.load1 view:nth-child(3) {
		animation-delay: .78s
	}

	.load2 view:nth-child(3) {
		animation-delay: .91s
	}

	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}

	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}

	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}

	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}

	@-webkit-keyframes load {
		0% {
			opacity: 1
		}

		100% {
			opacity: .2
		}
	}

	/* 顶部导航 */
	.floor-list {
		white-space: nowrap;
		position: fixed;
		z-index: 10;
		background: #fff;
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
			cursor: pointer;
			position: relative;

			.title {
				line-height: 80upx;
				// width: 100upx;
				height: 100%;
				margin: 0 20upx;
				text-align: center;
			}
		}
	}

	.active {
		color: #FF80AB;

		border-bottom: 4upx solid $base-color;

	}

	.list-text {
		.did {
			font-size: 25upx;
			margin: 5upx 0;
		}

		.title {
			font-weight: bold;
			font-size: 30upx;
			margin: 5upx 0;
		}
	}

	.tit-right {
		color: #8f8f94;
	}
</style>
