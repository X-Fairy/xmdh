<template>
	<view>

		<view class="details" v-if="mvc.over">
			<view class="order-info">
				<text>订单条码:{{mvc.orderInfo.NUM}}</text>
				<text>订单总额:￥{{mvc.orderInfo.sheet_amt}}</text>
			</view>
			<view class="status-info">
				<view class="">
					订单状态:
				</view>
				<view class="status" v-for="(item,index) in mvc.statusList" :key="index">
					{{item.oper_date}} {{item.status}}
				</view>
			</view>

			<view class="card" v-for="(item,index) in mvc.detailList" :key="index">
				<view class="card-info"  @click="navToDetailPage(item.item_no)">
					<!-- 	<view class="img" >
						<image :src="item.url" class="img"></image>
					</view> -->
					<view @click="navToDetailPage(item.item_no)">
						<imglazy :url="item.url" :sty="imglazyStyle"></imglazy>
					</view>
					<view class="name">
						<text class="pname">{{item.item_name}}</text>

						<text class="number">条码:{{item.item_no}}</text>
					</view>

				</view>
				<view class="total">
					<text>总额:￥{{item.price}} * {{item.QTY}}件=￥{{item.sub_amt}}</text>
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
			price: '',
			QTY: '',
			sub_amt: ''
		}],
		orderInfo: {
			NUM: 0,
			sheet_amt: 0
		},
		sn: '',
		over: false,
		statusList: []
	}
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
						price: '',
						QTY: '',
						sub_amt: ''
					}],
					orderInfo: {
						NUM: 0,
						sheet_amt: 0
					},
					sn: '',
					over: false,
					statusList: []
				}
			};
		},
		onLoad(option) {
			let that = this;
			setTimeout(function() {
				api.load(that.$t('index').loadmsg)
				mvc.sn = option.sn;
				that.loadData();
			}, 300)

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
				that.$ajax.orderHdView(params).then(res => {
					mvc.detailList = res.list;
					mvc.orderInfo = res.info;
					mvc.statusList = res.track;
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
				console.log(item)
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


	}

	.status-info {

		margin: 0 25upx;
		padding: 20upx 30upx 15upx 30upx;
		background: #fff;
	}

	.status {
		font-size: 24upx;

		color: #333;
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
