<template>
	<view>
		<view class="uni-list">
			<view class="row b-b">
				<text class="tit">{{i18n.code}}</text>
				<input class="input" :value="mvc.num" data-key="num" @input="inputChange" type="number" disabled="disabled" />
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					{{i18n.time}}
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="dateStart" :start="startDate" @change="bindBeginTime">
						<view class="uni-input">{{dateStart}}</view>
					</picker>
					<text class="solstice">{{i18n.zhi}}</text>
					<picker mode="date" :value="dateEnd" :end="endDate" @change="bindExpireTime">
						<view class="uni-input">{{dateEnd}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="details" v-if="mvc.isShow" style="padding: 30upx 0 120upx 0;">

			<view class="qiun-columns" style="background:white;">
				<view class="qiun-name">{{i18n.chart}}</view>
				<view class="qiun-charts">
					<!--#ifdef MP-ALIPAY -->
					<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
					 disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
					<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
					<!--#endif-->
					<!--#ifndef MP-ALIPAY -->
					<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA"
					 @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
					<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
					<!--#endif-->
				</view>

			</view>

			<view class="cardAll box-border" style="padding-bottom: 80upx;">
				<view class="tit">
					{{dateStart}} {{i18n.zhi}} {{dateEnd}} {{i18n.bills}}
				</view>
				<view class="name">
					{{mvc.name}}
				</view>
				<view class="center">
					<view class="info right">
						<view class="title">{{i18n.tq}}</view>
						<view class="qty">{{mvc.all.QTY}}</view>
					</view>
					<view class="info">
						<view class="title">{{i18n.ts}}</view>
						<view>￥<text class="num">{{mvc.all.AMT0}}</text></view>
					</view>
					<view class="info right">
						<view class="title">{{i18n.tc}}</view>
						<view>￥<text class="num">{{mvc.all.IAMT}}</text></view>
					</view>
					<view class="info">
						<view class="title">{{i18n.tg}}</view>
						<view>￥<text class="num">{{mvc.all.price1}}</text></view>
					</view>
					<view class="info right">
						<view class="title">{{i18n.tt}}</view>
						<view class="qty">{{mvc.all.DN1}}</view>
					</view>
					<view class="info">
						<view class="title">{{i18n.tp}}</view>
						<view>￥<text class="num">{{mvc.all.price2}}</text></view>
					</view>
				</view>
				<view class="bottom" @click="navdetail(dateStart,dateEnd)">
					<view>
						{{i18n.details}}<text class="yticon icon-you"></text>
					</view>
				</view>

			</view>

		</view>
		<view class="overData" v-if="mvc.hide">
			{{i18n.hint}}
		</view>
		<button class="xi-btn" @click="search">{{i18n.submit}}</button>

	</view>
</template>
<script>
	import uniCard from "@/components/uni-card/uni-card.vue";
	import api from "@/common/index.js";
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import '@/common/uni.css';
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaLineA = null;
	var mvc = {
		num: '',
		isShow: false,
		hide: false,
		all: [],
		name: '',

	}
	export default {
		components: {
			uniNavBar
		},
		data() {
			const currentDate1 = this.getDate({
				format: true
			})
			const currentDate2 = this.postDate({
				format: true
			})
			return {
				mvc: {
					num: '',
					isShow: false,
					hide: false,
					all: [],
					name: '',
					cWidth: '',
					cHeight: '',
					pixelRatio: 1,
					itemCount: 20, //x轴单屏数据密度
					sliderMax: 50,
					showLine: 0
				},
				dateStart: currentDate1,
				dateEnd: currentDate2,
			};
		},
		onLoad() {
			let that = this;
			setTimeout(function() {
				mvc = that.mvc;
				api.pageTitle(that.$t('market').title)
				const params = uni.getStorageSync('userinfo');
				mvc.num = params.hdid;
				_self = that;
				//#ifdef MP-ALIPAY
				uni.getSystemInfo({
					success: function(res) {
						if (res.pixelRatio > 1) {
							//正常这里给2就行，如果pixelRatio=3性能会降低一点
							//_self.pixelRatio =res.pixelRatio;
							mvc.pixelRatio = 2;
						}
					}
				});
				//#endif
				mvc.cWidth = uni.upx2px(750);
				mvc.cHeight = uni.upx2px(500);
				that.mvc = mvc;
			}, 300);

		},
		computed: {
			i18n() {
				return this.$t('market')
			},
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.postDate('end');
			}
		},
		methods: {

			showLineA(canvasId, chartData) {

				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					fontSize: 11,
					dataLabel: true,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: mvc.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4, //可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
						scrollShow: true, //新增是否显示滚动条，默认false
						scrollAlign: 'left',
						dashLength: 8
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 8,
						min: 10,
						max: 100,
						format: (val) => {
							return val.toFixed(0)
						} //如不写此方法，Y轴刻度默认保留两位小数
					},
					width: mvc.cWidth * mvc.pixelRatio,
					height: mvc.cHeight * mvc.pixelRatio,

					extra: {
						lineStyle: 'straight'
					},

				});
				uni.hideLoading();
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			bindBeginTime: function(e) {
				this.dateStart = e.target.value
			},
			bindExpireTime: function(e) {
				this.dateEnd = e.target.value
			},
			inputChange(e) {
				const key = e.currentTarget.dataset.key;
				mvc[key] = e.detail.value;
				this.mvc = mvc
			},

			getDate(type) {
				// 获取前天时间
				let inputTime = new Date();
				const date = new Date(inputTime);
				let year = date.getFullYear();
				let month = date.getMonth();
				let day = date.getDate();
				if (type == 'start') {
					year = year - 60;

				} else if (type == 'end') {
					year = year + 2;
				}
				if (month == 0) {
					year = parseInt(year) - 1;
					month = 12;
				};
				if (month > 12) {
					year = parseInt(year);
					month = 1;
				};
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;


			},
			postDate(type) {
				// 获取昨天时间
				let inputTime = new Date();
				// let inputTime = new Date(new Date - 1000 * 60 * 60 * 24);
				const date = new Date(inputTime);
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type == 'start') {
					year = year - 60;

				} else if (type == 'end') {
					year = year + 2;
				}
				if (month == 0) {
					year = parseInt(year) - 1;
					month = 12;
				};
				if (month > 12) {
					year = parseInt(year) + 1;
					month = 1;
				};
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},

			search() {
				uni.showLoading({
					title: this.$t('market').loading
				});
				let that = this;
				that.all = [];
				that.name = "";
				mvc.isShow = false;
				mvc.hdid = false;
				let params = {
					sdate: this.dateStart,
					edate: this.dateEnd
				}
				this.postsale(params);

			},
			postsale(params) {
				let that = this;
				that.$ajax.marketRank(params).then(res => {
					if (res == null || res.length == 0) {
						mvc.hide = true;
						uni.hideLoading();
						return false;
					};

					let LineA = {
						categories: [],
						series: []
					};
					let arry = {
						name: this.$t('market').num,
						data: []
					}
					let money = {
						name: this.$t('market').money,
						data: []
					}
					for (let i in res.num) {
						let title = "";

						switch (i) {
							case '01':
								title = this.$t('market').category[0];
								break;
							case '02':
								title = this.$t('market').category[1];
								break;
							case '03':
								title = this.$t('market').category[2];
								break;
							case '04':
								title = this.$t('market').category[3];
								break;
							case '05':
								title = this.$t('market').category[4];
								break;
							case '06':
								title = this.$t('market').category[5];
								break;
							case '07':
								title = this.$t('market').category[6];
								break;
							case '08':
								title = this.$t('market').category[7];
								break;
							case '09':
								title = this.$t('market').category[8];
								break;
							case '10':
								title = this.$t('market').category[9];
								break;
							case '14':
								title = this.$t('market').category[10];

						}

						LineA.categories.push(title)
						arry.data.push(res.num[i])

					}

					for (let k in res.money) {
						money.data.push(res.money[k]);
					}

					LineA.series.push(arry);
					LineA.series.push(money)
					that.showLineA("canvasLineA", LineA);
					that.getsale(params);
				})
			},
			getsale(params) {
				let that = this;
				that.$ajax.marketView(params).then(res => {
					let list = res;
					if (list.length != 0) {
						mvc.hide = false;
						mvc.all = res[0].zong;
						mvc.name = res[0].NAME;
						mvc.isShow = true;

					} else {
						mvc.hide = true;
						uni.hideLoading();
						return false;
					}
				})
				that.mvc = mvc;
			},
			hidePopup() {
				this.isShow = false;
			},

			touchLineA(e) {


				canvaLineA.scrollStart(e);
			},
			moveLineA(e) {
				canvaLineA.scroll(e);
			},
			touchEndLineA(e) {
				canvaLineA.scrollEnd(e);

				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});

			},
			navdetail(time1, time2) {

				uni.navigateTo({
					url: '/pages/market-detail/market-detail?time1=' + time1 + '&time2=' + time2
				})
			}

		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;


	}



	.qiun-name {
		text-align: center;
		font-weight: bold;
		border-bottom: 1px solid #EEEEEE;
		padding: 20upx;
	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 180upx;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.input {
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}

	.uni-list {



		.uni-list-cell {
			height: 110upx;
			line-height: 110upx;

			.uni-list-cell-db {
				display: flex;

				.solstice {
					margin: 0upx 20upx;
				}

			}

			.uni-input {
				padding: 0;
				font-size: 28upx;

			}


		}

	}


	// 图表

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	/* 通用样式 */
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	/* 横屏样式 */
	.qiun-charts-rotate {
		width: 700upx;
		height: 1100upx;
		background-color: #FFFFFF;
		padding: 25upx;
	}

	.charts-rotate {
		width: 700upx;
		height: 1100upx;
		background-color: #FFFFFF;
	}

	/* 圆弧进度样式 */
	.qiun-charts3 {
		width: 750upx;
		height: 250upx;
		background-color: #FFFFFF;
		position: relative;
	}

	.charts3 {
		position: absolute;
		width: 250upx;
		height: 250upx;
		background-color: #FFFFFF;
	}

	.qiun-tip {
		display: block;
		width: auto;
		overflow: hidden;
		padding: 15upx;
		height: 30upx;
		line-height: 30upx;
		margin: 10upx;
		background: #ff9933;
		font-size: 30upx;
		border-radius: 8upx;
		justify-content: center;
		text-align: center;
		border: 1px solid #dc7004;
		color: #FFFFFF;
	}

	// 图表




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
			font-weight: bold;
			text-align: center;
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

	.bottom {

		height: 100upx;
		line-height: 100upx;
		color: #1890ff;
		float: right;

		view {
			text-align: right;
		}
	}
</style>
