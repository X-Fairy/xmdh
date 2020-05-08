<template>
	<view>
		
		<!-- 物流 -->
		<!-- <view class="tui-flex-box" v-if="logisticShow">
			<image src="https://www.thorui.cn/wx/static/images/mall/order/img_order_logistics3x.png" class="tui-icon-img"></image>
			<view class="tui-logistics">
				<view class="tui-logistics-text">{{traces.AcceptStation}}</view>
				<view class="tui-logistics-time">{{traces.AcceptTime}}</view>
			</view>
			<view class="">
				<tui-icon name="arrowright" color="#b2b2b2" size="20" @tap="toTrack"></tui-icon>
			</view>
		</view> -->
		<!-- 收货地址 -->
		<!-- <view class="addr">
			<view class="icon">
				<image src="../../../../static/img/addricon.png" mode=""></image>
			</view>
			<view class="right">
				<view class="tel-name">
					<view class="name">
						{{recinfo.name}}
					</view>
					<view class="tel">
						{{recinfo.phone}}
					</view>
				</view>
				<view class="addres">
					{{recinfo.province+recinfo.city+recinfo.town}}
					{{recinfo.address}}
				</view>
			</view>
		</view> -->
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(item,index) in mvc.detailList" :key="index">
				<view class="goods-info">
					<view class="img" @click="navToDetailPage(item.item_no)">
						<imglazy :url="item.url" :sty="imglazyStyle"></imglazy>
					</view>
					<view class="info">
						<view class="title">{{item.item_name}}</view>
						<view class="spec">￥{{item.valid_price}} * {{item.real_qty}}件=￥{{item.sub_amt}}</view>

					</view>
				</view>
			</view>
		</view>
		
		<!-- 提示-备注 -->
		<view class="order">
			<view class="row">
				<view class="left">
					订单金额：
				</view>
				<view class="right">
					<text>￥{{mvc.orderInfo.yhh_amt}}</text>
				</view>
			</view>
			<view class="row">
				<view class="left">
					订单编号：
				</view>
				<view class="right">
					<text>{{mvc.orderInfo.sheet_no}}</text>
				</view>
			</view>
			<view class="row">
				<view class="left">
					下单时间：
				</view>
				<view class="right">
					<text>{{mvc.orderInfo.oper_date}}</text>
				</view>
			</view>

			<!-- <view class="row" v-if="orderShipSn">
				<view class="left">
					快递编号:
				</view>
				<view class="right">
					<text>{{orderShipSn}}</text>
				</view>
			</view> -->
		</view>
<!-- 		<view class="order">

			<view class="row">
				<view class="left">
					订单金额：
				</view>
				<view class="right">
					<text>￥30</text>
				</view>
			</view>
			<view class="row">
				<view class="left">
					优惠金额：
				</view>
				<view class="right">
					<text>￥10</text>
				</view>
			</view>
			<view class="row">
				<view class="left">
					实付金额：
				</view>
				<view class="right">
					<text>￥{{mvc.orderInfo.yhh_amt}}</text>
				</view>
			</view>
		</view> -->

		<!-- 明细 -->
		<view class="detail" v-if="giveList.length!=0">
			<view class="de-heard">
				<view class="de-box">
					<view class="de-title">
						免费领取
					</view>
					<button plain="true" class="getBtn" @click="getOrder()">领取({{num}}/{{total}}元)</button>
				</view>
				<view class="de-text">
					你可以免费领取100元产品，快来挑选吧~
				</view>
			</view>
			<view class="get-list">

				<view class="row" v-for="(item,index) in giveList" :key="index">
					<view class="goods-info">
						<!-- <radio-group @change="bindRadio">
								<radio :value="'r'+index" color="#f795a2" class="radio" :checked="item.status" />
							</radio-group> -->
						<checkbox-group @change="bindRadio(index)">
							<checkbox :value="item.item_no" style="transform:scale(0.7);border-radius: 50%;" :checked="item.checked" />
						</checkbox-group>
						<view class="img" @click="navToDetailPage(item.item_no)">
							<imglazy :url="item.url"></imglazy>
						</view>
						<view class="info">
							<view class="title">{{item.item_name}}</view>
							<view class="spec">￥{{item.sale_price}}</view>
							<uni-number-box class="price-number" :min="item.allNum" :value="item.num" :step="item.allNum" :index="index"
							 @change="bindChange"></uni-number-box>
						</view>
					</view>
				</view>

			</view>
			<!-- 			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in giveList" :key="index" class="floor-item animated bounceInRight">
						<imglazy url="http://img.xmvogue.com/thumb/6941406842686.jpg?x-oss-process=style/300"></imglazy>
						<view style="padding: 5upx 10upx;">
							<view class="title clamp">商品商品商品商品商品商品商品商品商品商品</view>
							<text class="price" style="font-size: 24upx;">￥213</text>
							<text class="m-price">￥213</text>
							<view class="radio">
									<radio value="r1" color="#f795a2"/>请选择~
							</view>
						</view>
					</view>
				</view>
			</scroll-view> -->
			<!-- <view class="row">
				<view class="nominal">
					商品总金额
				</view>
				<view class="content">
					￥{{mvc.orderInfo.sheet_amt}}
				</view>
			</view> -->
			<!-- <view class="row">
				<view class="nominal">
					优惠金额
				</view>
				<view class="content">
					￥-{{deduction|toFixed}}
				</view>
			</view> -->
			<!-- <view class="row">
				<view class="nominal">
					合计
				</view>
				<view class="content">
					￥{{sumPrice|toFixed}}
				</view>
			</view> -->
		</view>
		<view class="blck">
		</view>
		<!-- <view class="footer">
			<view class="settlement">
				<view class="sum">实付金额:<view class="money">￥{{mvc.orderInfo.sheet_amt}}</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import api from "@/common/index.js";
	import over from '@/components/over.vue';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	import uniNumberBox from '@/components/uni-number-box.vue';
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
			sheet_amt: 0,
			yhh_amt: 0,
		},
		sn: '',
		over: false
	};
	export default {
		components: {
			over,
			imglazy,
			uniNumberBox
		},
		data() {
			return {
				imglazyStyle: 'border-radius: 10upx;',
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
						sheet_amt: 0,
						yhh_amt: 0,
					},
					sn: '',
					over: false,

				},
				giveList: [],
				getStatus: false,
				num: 0,
				total: 0,
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
		onShow() {},
		onHide() {

		},
		onBackPress() {

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
			goods() {
				let params = {
					sheet_no: mvc.sn
				}
				this.$ajax.orders(params).then(res => {
					if (res.free) {
						let result = res.free.list
						for (let i in result) {
							result[i].url = this.$store.getters.imgShow + "/thumb/" + result[i].item_no +
								".jpg?x-oss-process=style/300";
							result[i].checked = false;
							result[i].allNum = 1;
							result[i].num = 1;
						}
						this.giveList = result;
						this.total = res.free.money
					}

				})

			},
			//详情页
			navToDetailPage(item) {
				uni.navigateTo({
					url: `/pages/product/product?productId=${item}`
				})
			},
			scroll(e) {
				console.log(e)

			},

			bindRadio(index) {
				this.giveList[index].checked = !this.giveList[index].checked;
				let items = this.giveList
				this.num = 0;
				items.forEach((item) => {
					if (item.checked) {
						console.log(item)
						this.num = this.num + (Number(item.sale_price) * Number(item.num))
					}
				})
				this.giveList = items;
				if (this.num > this.total) {
					uni.showToast({
						title: "仅限领取" + this.total + "元内",
						icon: 'none',
					});
				}
			},

			getOrder() {
				if (this.num > this.total) {
					uni.showToast({
						title: "仅限领取" + this.total + "元内",
						icon: 'none',
					});
					return false;
				}
				let list = this.giveList;
				let params = {
					parent_sheet: mvc.sn,
					items: [],
					qtys: []
				}
				list.forEach((item) => {
					if (item.checked) {
						params.items.push(item.item_no);
						params.qtys.push(item.num)
					}
				})
				this.$ajax.create_free_order(params).then(res => {
					if (res.data.res == "success") {
						uni.showToast({
							title: "领取成功",
							icon: 'none'
						});
					}else{
						uni.showToast({
							title: "重复领取失败",
							icon: 'none'
						});
					}

				})
			},
			bindChange(e) {

				this.giveList[e.index].num = e.number;
				let items = this.giveList
				this.num = 0;
				items.forEach((item) => {
					if (item.checked) {
						this.num = this.num + (Number(item.sale_price) * Number(item.num))
					}
				})
				if (this.num > this.total) {
					uni.showToast({
						title: "仅限领取" + this.total + "元内",
						icon: 'none',
					});
				}
			}
		},

	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	.status {
		// width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		// background-color: #f06c7a;
		background-image: linear-gradient(135deg, #f795a2 10%, #FD6585 100%);
		color: white;
		padding: 0 40rpx;
		font-weight: bold;
		font-size: 45rpx;
	}

	.tui-flex-box {
		align-items: center;
		width: 86%;
		padding: 20upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;
		display: flex;

		.tui-icon-img {
			width: 44rpx;
			height: 44rpx;
			flex-shrink: 0;
		}

		.tui-logistics {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 24rpx 0 20rpx;
			box-sizing: border-box;
		}

		.tui-logistics-text {
			font-size: 28rpx;
			line-height: 32rpx;
		}

		.tui-logistics-time {
			font-size: 24rpx;
			line-height: 24rpx;
			padding-top: 16rpx;
			color: #666;
		}

	}

	.addr {
		width: 86%;
		padding: 20upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;
		display: flex;

		.icon {
			width: 80upx;
			height: 80upx;
			display: flex;
			align-items: center;

			image {
				width: 60upx;
				height: 60upx;
			}
		}

		.tel-name {
			width: 100%;
			display: flex;
			font-size: 32upx;

			.tel {
				margin-left: 40upx;
			}
		}

		.addres {
			width: 100%;
			font-size: 26upx;
			color: #999;
		}
	}

	.get-list {
		width: 100%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		background-color: #fff;
		border-radius: 20upx;

		.row {
			margin: 30upx 0;
			display: flex;
			flex-direction: column;

			.goods-info {
				width: 100%;
				display: flex;
				justify-content: center;
				margin-bottom: 30upx;
				align-items: center;

				/*checkbox 整体大小  */
				checkbox-group {
					display: flex;

					align-items: center;
					width: 90upx;
				}

				checkbox {
					width: 90upx;
					height: 90upx;
					border-radius: 50%;
				}

				/*checkbox 选项框大小  */
				checkbox .wx-checkbox-input {
					width: 50upx;
					height: 50upx;
					border-radius: 50%;
				}

				/*checkbox选中后样式  */
				checkbox .wx-checkbox-input.wx-checkbox-input-checked {
					background: #f795a2;
				}

				/*checkbox选中后图标样式  */
				checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
					width: 28upx;
					height: 28upx;
					line-height: 28upx;
					text-align: center;
					font-size: 22upx;
					color: #fff;
					background: transparent;
					transform: translate(-50%, -50%) scale(1);
					-webkit-transform: translate(-50%, -50%) scale(1);
				}

				// /deep/ radio-group,
				// checkbox-group {
				// 	width: 50upx;
				// 	height: 20uxp;
				// 	display: flex;
				// 	justify-content: center;

				// 	.radio {
				// 		height: 20uxp;
				// 		display: flex;
				// 		justify-content: center;
				// 	}
				// }

				// /deep/ .uni-checkbox-input {
				// 	border-radius: 50%;
				// 	width: 60upx;
				// 	height: 60upx;


				// 	&:hover {
				// 		border: 1px solid #d1d1d1;
				// 	}

				// 	&::before {
				// 		border-radius: 50%;
				// 		width: 82upx;
				// 		height: 82upx;
				// 		color: #fff;
				// 		text-align: center;
				// 		line-height: 82upx;
				// 		background-color: #f795a2;
				// 	}
				// }

				.img {
					width: 18vw;
					height: 18vw;
					border-radius: 10upx;
					overflow: hidden;
					flex-shrink: 0;
					margin-right: 10upx;

					image {
						width: 20vw;
						height: 20vw;
					}
				}

				.info {
					width: 100%;
					height: 20vw;
					overflow: hidden;
					display: flex;
					flex-wrap: wrap;
					position: relative;

					.title {
						width: 100%;
						font-size: 28upx;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						word-break: break-all;
					}

					.spec {
						font-size: 22upx;
						background-color: #f3f3f3;
						color: #a7a7a7;
						height: 40upx;
						display: flex;
						align-items: center;
						padding: 0 10upx;
						border-radius: 20upx;
						margin-bottom: 20vw;
					}

					.price-number {
						position: absolute;
						width: 100%;
						bottom: 0upx;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						font-size: 28upx;
						height: 40upx;

						.price {
							color: #f06c7a;
						}

						.default {
							min-width: 70upx;
							height: 50upx;
							padding: 0 20upx;
							border-radius: 50upx;
							display: flex;
							justify-content: center;
							align-items: center;
							font-size: 28upx;
							margin-left: 20upx;
							border: solid 1upx #ccc;
							color: #666;
							font-size: 26rpx;
						}

						// .number {
						// 	display: flex;
						// 	justify-content: center;
						// 	align-items: center;

						// }
					}
				}
			}
		}
	}

	.buy-list {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 30upx 0;

			.goods-info {
				width: 100%;
				display: flex;

				.img {
					width: 18vw;
					height: 18vw;
					border-radius: 10upx;
					overflow: hidden;
					flex-shrink: 0;
					margin-right: 10upx;

					image {
						width: 18vw;
						height: 18vw;
					}
				}

				.info {
					width: 100%;
					height: 18vw;
					overflow: hidden;
					display: flex;
					flex-wrap: wrap;
					position: relative;

					.title {
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						// text-align: justify;
						overflow: hidden;
					}

					.spec {
						font-size: 22upx;
						background-color: #f3f3f3;
						color: #a7a7a7;
						height: 40upx;
						display: flex;
						align-items: center;
						padding: 0 10upx;
						border-radius: 20upx;
						margin-bottom: 20vw;
					}

					.price-number {
						position: absolute;
						width: 100%;
						bottom: 0upx;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						font-size: 28upx;
						height: 40upx;

						.price {
							color: #f06c7a;
						}

						.default {
							min-width: 70upx;
							height: 50upx;
							padding: 0 20upx;
							border-radius: 50upx;
							display: flex;
							justify-content: center;
							align-items: center;
							font-size: 28upx;
							margin-left: 20upx;
							border: solid 1upx #ccc;
							color: #666;
							font-size: 26rpx;
						}

						// .number {
						// 	display: flex;
						// 	justify-content: center;
						// 	align-items: center;

						// }
					}
				}
			}
		}
	}

	.logisticss {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		
	}

	.order {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 20upx 0;
			height: 40upx;
			display: flex;

			.left {
				font-size: 28upx;
			}

			.right {
				margin-left: 40upx;
				font-size: 26upx;
				color: #999;

				input {
					font-size: 26upx;
					color: #999;
				}
			}
		}
	}

	.blck {
		width: 100%;
		height: 100upx;
	}

	.footer {
		width: 100%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;

		.settlement {
			width: 80%;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.sum {
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;

				.money {
					font-weight: 600;
				}
			}

			.btn {
				padding: 0 30upx;
				height: 60upx;
				background-color: #f06c7a;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30upx;
				border-radius: 40upx;
			}
		}
	}

	.detail {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;
		background-color: #fff6f9;

		.de-heard {
			margin: 20upx 0;

			.de-box {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				margin-bottom: 10upx;

				.de-title {
					font-size: 35upx;
					font-weight: bold;

				}

				.getBtn {
					height: 55upx;
					width: 220upx;
					line-height: 55upx;
					border: 1px solid #f795a2;
					color: #f795a2;
					font-size: 25upx;
					text-align: center;
					padding: 0;
					border-radius: 20upx;
					margin: 0;
				}

				.activeBtn {
					height: 55upx;
					width: 170upx;
					line-height: 55upx;
					border: 1px solid #f795a2;
					color: #fff;
					font-size: 25upx;
					text-align: center;
					padding: 0;
					border-radius: 20upx;
					background-color: #f795a2;
				}
			}


			.de-text {
				color: #999;
			}
		}


		.row {

			display: flex;
			justify-content: space-between;
			align-items: center;

			.nominal {
				font-size: 28upx;
			}

			.content {
				font-size: 26upx;
				color: #f06c7a;
			}
		}
	}

	.floor-list {
		white-space: nowrap;
	}

	.scoll-wrapper {
		display: flex;
		align-items: flex-start;

	}

	.floor-item {
		width: 250upx;
		margin-right: 20upx;
		font-size: $font-sm+2upx;
		color: $font-color-dark;
		line-height: 1.8;
		background-color: #fff;
		border-radius: 20upx;
		padding-bottom: 20upx;

		.lazy {
			width: 250upx;
			height: 250upx;
			border-radius: 6upx;
		}


		.price {
			color: $uni-color-primary;
		}

		.m-price {
			font-size: $font-sm;
			text-decoration: line-through;
			color: $font-color-light;
			margin-left: 8upx;
		}

		.radio {
			color: #f795a2;
			display: flex;
			align-items: center;

		}
	}
</style>
