<template>
	<view>
		<view class="navbar">
			<view class="nav-item" :class="{current: mvc.filterIndex === 0}" @click="tabClick(0)">
				{{i18n.Default}}
			</view>
			<view class="nav-item" :class="{current: mvc.filterIndex === 2}" @click="tabClick(2)">
				<text>{{i18n.ts}}</text>
				<view class="p-box">
					<text :class="{active: mvc.priceOrder === 1 && mvc.filterIndex === 2}" class="yticon icon-shang"></text>
					<text :class="{active: mvc.priceOrder === 2 && mvc.filterIndex === 2}" class="yticon icon-shang xia"></text>
				</view>
			</view>
		</view>
		<view style="padding-top:80upx;">
			<view class="cardAll box-border" v-for="(data,index) in mvc.list" :key="index">
				<view class="tit">
					{{data.TIME}} {{data.day}} {{i18n.readTime}}
				</view>
				<view class="center">
					<view class="info right">
						<view class="title">{{i18n.tq}}</view>
						<view class="qty">{{data.QTY}}</view>
					</view>
					<view class="info">
						<view class="title">{{i18n.ts}}</view>
						<view>￥<text class="num">{{data.AMT0}}</text></view>
					</view>
					<view class="info right">
						<view class="title">{{i18n.tc}}</view>
						<view>￥<text class="num">{{data.IAMT}}</text></view>
					</view>
					<view class="info">
						<view class="title">{{i18n.tg}}</view>
						<view>￥<text class="num">{{data.price1}}</text></view>
					</view>
					<view class="info right">
						<view class="title">{{i18n.tt}}</view>
						<view class="qty">{{data.DN1}}</view>
					</view>
					<view class="info">
						<view class="title">{{i18n.tp}}</view>
						<view>￥<text class="num">{{data.REALAMT}}</text></view>
					</view>
				</view>
			</view>
		</view>
		<over v-if="mvc.over"></over>
	</view>
</template>

<script>
	import api from "@/common/index.js";
	import over from '@/components/over.vue';

	let mvc = {
		dateStart: '',
		dateEnd: '',
		filterIndex: 0,
		priceOrder: 0, //1 价格从低到高 2价格从高到低
		downNum: '',
		list: [],
		over: false
	}
	export default {
		components: {
			over
		},
		data() {
			return {
				mvc: {
					dateStart: '',
					dateEnd: '',
					filterIndex: 0,
					priceOrder: 0, //1 价格从低到高 2价格从高到低
					downNum: '',
					list: [],
					over: false
				}

			}
		},
		computed: {
			i18n() {
				return this.$t('market_data');
			}
		},
		onLoad(option) {
			let that = this;
			setTimeout(function() {
				api.load(that.$t('index').loadmsg)
				api.pageTitle(that.$t('market_data').title);
				mvc.dateStart = option.time1;
				mvc.dateEnd = option.time2;
				that.loadData();
			}, 300)
		},
		methods: {
			tabClick(index) {
				if (index == 0) {
					mvc.filterIndex = index;
					mvc.downNum = "";
					this.loadData();
					this.mvc = mvc
					return false;
				}
				mvc.filterIndex = index;
				if (index === 2) {
					mvc.priceOrder = mvc.priceOrder === 1 ? 2 : 1;

					if (mvc.priceOrder == 1) {
						mvc.downNum = "desc"
					};
					if (mvc.priceOrder == 2) {
						mvc.downNum = "asc"
					};
					uni.pageScrollTo({
						duration: 300,
						scrollTop: 0
					})
					this.loadData();
				}
				this.mvc = mvc
			},
			loadData() {
				api.load(this.$t('index').loadmsg)

				let that = this;
				let params = ''
				if (mvc.downNum == '') {

					params = {
						sdate: mvc.dateStart,
						edate: mvc.dateEnd
					}

				} else {
					if (mvc.downNum == 'asc') {

						params = {
							sdate: mvc.dateStart,
							edate: mvc.dateEnd,
							type: "asc"
						}
					};
					if (mvc.downNum == 'desc') {

						params = {
							sdate: mvc.dateStart,
							edate: mvc.dateEnd,
							type: "desc"
						}
					};
				}
				that.$ajax.marketView(params).then(res => {
					let list = res;
					let weekDay = that.$t('market_data').weekDay;
					if (list.length != 0) {
						list.forEach(function(item, index) {
							let num = item.AMT0 - item.IAMT;
							let myDate = new Date(Date.parse(item.TIME.replace(/-/g, "/")));
							item.price1 = num.toFixed(2);
							item.day = weekDay[myDate.getDay()]
						})
						mvc.list = res;
						mvc.over = true;

					} else {
						mvc.hide = true;
					}
					uni.hideLoading();
					that.mvc = mvc;
				})

			}
		}
	}
</script>

<style lang='scss'>
	page {
		background: $page-color-base;


	}

	.navbar {
		position: fixed;
		top: 0;
		background-color: #555;
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0, 0, 0, .06);
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: black;
			position: relative;

			&.current {
				color: black;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120upx;
					height: 0;
					border-bottom: 5upx solid #1890ff;
				}
			}
		}

		.p-box {
			display: flex;
			flex-direction: column;

			.yticon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: black;

				&.active {
					color: #1890ff;
				}
			}

			.xia {
				transform: scaleY(-1);
			}
		}

		.cate-item {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;

			&:after {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36upx;
			}
		}
	}


	.card {
		background: white;
		border-radius: 10upx;
		padding: 20upx;
		margin: 20upx;

		view {
			padding: 13upx 5upx;

			width: 100%;

			text {
				padding-right: 20upx;


			}
		}
	}

	.sort {
		width: 120upx;
		height: 60upx;
		line-height: 60upx;
		font-size: 25upx;
		color: #fff;
		padding: 0;
		background-color: #3ebbce;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px #3ebbce;
	}

	.cardAll {
		padding: 20upx;
		background-color: white;
		margin: 30upx 20upx;

		.tit {
			color: #1890ff;
			font-weight: bold;
			font-size: $font-lg;
			border-bottom: 1px solid #eeeeee;
			padding: 20upx 0;
			font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		}

		.name {
			border-bottom: 1px solid #eeeeee;
			padding: 20upx 0;
		}

		.center {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			.right {
				border-right: 1px solid #eeeeee;
			}

			.info {
				margin: 30upx 0;
				width: 50%;
				text-align: center;


				.title {
					color: #333;

				}

				.qty {
					font-size: 40upx;
					font-weight: bold;
					font-family: Arial, Helvetica, sans-serif;
				}

				view {
					font-size: 25upx;

					.num {
						font-size: 40upx;
						font-weight: bold;
						font-family: Arial, Helvetica, sans-serif;
					}
				}
			}
		}
	}
</style>
