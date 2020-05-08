<template>
	<view>
		<empty v-if="mvc.cartoon==true"></empty>
		<view style="padding-bottom: 150upx;" v-else>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in mvc.saleList" :key="index"
				 @click="details(item.id)">
					<view class="uni-list-cell-navigate uni-navigate-right uni-media-list ">
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top" style="font-size: 26upx;">{{i18n.type}}：<text class="topcolor">{{item.lx}}</text></view>
							<view class="uni-media-list-text-bottom uni-ellipsis" style="font-size: 23upx;">{{i18n.date}}:{{item.sqrq}}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <view style="text-align: center;margin: 20upx;color: #999999;" v-if="over==true">
				--已经到底啦--
			</view> -->
			<over v-if="mvc.over==true"></over>
		</view>

		<view class="s-bottom">
			<button type="primary" class="s-bottom-btn add-btn" @click="addSale">{{i18n.product}}</button>
			<button type="primary" class="s-bottom-btn" @click="navlogistics">{{i18n.send}}</button>
		</view>
	</view>

</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import Json from '@/Json';
	import api from '@/common/index.js';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import over from '@/components/over.vue'
	var mvc = {
		saleList: [],
		cartoon: false,
		over: false
	};
	export default {
		components: {
			uniNavBar,
			uniLoadMore,
			empty,
			over
		},
		data() {
			return {

				navList: [{
						state: 0,
						text: '申报产品',
						loadingType: 'more',
						saleList: []
					},
					{
						state: 1,
						text: '寄回产品',
						loadingType: 'more',
						saleList: []
					},
				],
				mvc: {
					saleList: [],
					cartoon: false,
					over: false
				}

			};
		},
		computed: {
			i18n() {
				return this.$t('sale')
			}
		},
		onLoad(options) {
			api.pageTitle(this.$t('sale').title)
			// #ifndef MP
			this.loadData()
			// #endif
			// #ifdef MP
			if (options.state == 0) {
				this.loadData()
			}
			// #endif

		},
		onShow() {
			uni.showLoading({
				title: '正在加载'
			})
			this.loadData();
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			//获取订单列表
			loadData(source) {
				//这里是将订单挂载到tab列表下

				let that = this;
				mvc.over = false;
				that.$ajax.saleData().then(res => {
					mvc.saleList = res.list;
					if (mvc.saleList.length == 0) {
						mvc.cartoon = true
					} else {
						mvc.over = true;
					}
				})
				this.mvc = mvc;
				uni.hideLoading();

			},
			details(e) {
				uni.navigateTo({
					url: '/pages/sale-detail/sale-detail?id=' + e
				})

			},
			addSale(e) {
				uni.navigateTo({
					url: '/pages/sale-add/sale-add'
				})
			},
			navlogistics(e) {
				uni.navigateTo({
					url: '/pages/logistics-list/logistics-list'
				})
			}
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

	page,
	.sale {
		background: $page-color-base;
		height: 100%;
	}

	.swiper-box {
		height: calc(100% - 40px);
	}

	.list-scroll-content {
		height: 100%;
	}



	.navbar {
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, .06);
		position: relative;
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 12px;
			color: $font-color-dark;
			position: relative;

			&.current {
				color: $base-color;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid $base-color;
				}
			}
		}
	}

	.uni-swiper-item {
		height: auto;
	}

	.sale-item {
		display: flex;
		flex-direction: column;
		padding: 15upx 30upx 15upx 30upx;
		background: #fff;
		margin-bottom: 16upx;
		border: 1px solid #eeeeee;
		border-radius: 5upx;

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

	.topcolor {
		// color: $font-color-e2;
	}

	// .add-btn{
	// 	border-right:none; 
	// }
</style>
