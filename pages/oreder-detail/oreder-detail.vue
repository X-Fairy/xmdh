<template>
	<view>

		<view class="details" v-if="mvc.over">
			<view class="order-info">
				<text>{{i18n.code}}:{{mvc.orderInfo.sheet_no}}</text>
				<text>{{i18n.priceAll}}:￥{{mvc.orderInfo.sheet_amt}}</text>
			</view>
			<view class="order-info">
				<view class="status" v-if="mvc.orderInfo.istrans==0">
					{{mvc.orderInfo.oper_date}} {{i18n.hint}}
				</view>

			</view>
			<view class="card" v-for="(item,index) in mvc.detailList" :key="index">
				<view class="card-info" @click="navToDetailPage(item.item_no)">
					<!-- <view class="img" @click="navToDetailPage(item.item_no)">
						<image :src="item.url" class="img"></image>
					</view> -->
					<imglazy :url="item.url"  :sty="imglazyStyle"></imglazy>
					<view class="name">
						<text class="pname">{{item.item_name}}</text>

						<text class="number">{{i18n.item_no}}:{{item.item_no}}</text>
					</view>

				</view>
				<view class="total">
					<text>{{i18n.item_num}}:￥{{item.valid_price}} * {{item.real_qty}}{{i18n.pcs}}=￥{{item.sub_amt}}</text>
				</view>
			</view>
			<over v-if="mvc.over"></over>
		</view>
	</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card.vue";
	import api from "@/common/index.js";
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import over from '@/components/over.vue';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	let mvc = {
		detailList: [{
			item_name: '',
			item_en: '',
			item_no: '',
			valid_price: '',
			real_qty: '',
			sub_amt: ''
		}],
		orderInfo: {
			sheet_no: 0,
			sheet_amt: 0
		},
		sn: '',
		over: false
	};
	export default {
		components: {
			uniCard,
			uniNavBar,
			over,
			imglazy
		},
		data() {
			return {
				imglazyStyle:'border-radius: 10upx;',
				mvc: {
					detailList: [{
						item_name: '',
						item_en: '',
						item_no: '',
						valid_price: '',
						real_qty: '',
						sub_amt: ''
					}],
					orderInfo: {
						sheet_no: 0,
						sheet_amt: 0
					},
					sn: '',
					over: false
				}
			};
		},
		onLoad(option) {
			let that = this;
			setTimeout(function() {
				api.load(that.$t('index').loadmsg)
				api.pageTitle(that.$t('order_data').title)
				mvc.sn = option.sn;
				that.loadData();
			})

		},
		computed: {
			i18n() {
				return this.$t('order_data')
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			loadData() {
				let that = this;
				mvc.over = false;
				let params = {
					sn: mvc.sn
				}
				that.$ajax.orderHaView(params).then(res => {
					mvc.detailList = res.list;
					mvc.orderInfo = res.info;
					for (let i in mvc.detailList) {
						mvc.detailList[i].url = that.$store.getters.imgShow + "/thumb/" + mvc.detailList[i].item_no +
							".jpg?x-oss-process=style/300";
					}
					mvc.over = true;
					uni.hideLoading();
					that.mvc = mvc;
				})
			},
			//详情页
			navToDetailPage(item) {
				uni.navigateTo({
					url: `/pages/product/product?productId=${item}`
				})
			},
		},

	}
</script>

<style lang="scss">
	page,
	details {
		background: $page-color-base;
		height: 100%;
	}

	.order-info {
		display: flex;
		justify-content: space-between;

		text {
			margin: 25upx;
			font-size: 28upx !important;
		}

		.status {
			font-size: 24upx;
			margin: 0 25upx;
			color: #333;
		}
	}

	.card {
		margin-left: 20upx;
		margin-right: 20upx;

		display: flex;
		flex-direction: column;
		padding: 20upx 30upx 15upx 30upx;
		background: #fff;
		margin-top: 16upx;

		.card-info {
			height: 100%;
			display: flex;
			justify-content: left;
			flex-wrap: wrap;

			.lazy {
				width: 155upx;
				height: 145upx;
				padding-right: 10upx;
			}

			.img {
				width: 28%;
				image {
					width: 150upx;
					height: 150upx;
				}
			}

			.name {
				width: 70%;

				text {
					display: block;
					padding-bottom: 8upx;

				}

				.pname,
				.number {
					font-size: 25upx;
				}

				.english {
					font-size: 20upx;
					opacity: 0.8;
				}
			}

			.price {
				margin-right: 10upx;
				width: 10%;

				text {
					display: block;
					font-size: 25upx;
				}

				.count {
					opacity: 0.6;
					font-size: 28upx;
					float: right;
				}
			}
		}

		.total {

			font-size: 25upx;

			text {
				float: right;
			}

			span {
				font-size: 28upx;
				font-weight: 500;
			}
		}
	}
</style>
