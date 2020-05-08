<template>
	<view>
		<view class="stock">
			<view class="row b-b">
				<text class="tit">{{i18n.code}}</text>
				<input class="input" type="text" :value="mvc.number" placeholder-class="placeholder" disabled="disabled" />
			</view>
			<view class="row b-b">
				<text class="tit">{{i18n.type}}</text>
				<radio-group @change="radioChange" style="position: static;">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in i18n.items" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === mvc.urrent" />
						</view>
						<view class="title">{{item.name}}</view>
					</label>
				</radio-group>
			</view>
			<view class="row b-b" v-if="mvc.current==1">
				<text class="tit">{{i18n.code}}</text>
				<input class="input" type="number" :placeholder="i18n.input" @input="onKeyInput" style="width: 80%" :value="mvc.p_num"
				 data-key="p_num" />
				<text class="icon scan" @click="onScan"></text>
			</view>
			<view class="row b-b" v-if="mvc.current==2">
				<text class="tit">{{i18n.name}}</text>
				<input class="input" type="text" :placeholder="i18n.key" @input="onKeyInput" :value="mvc.name" data-key="name" />
			</view>
			<view v-if="mvc.qiunHdid" style="margin-bottom: 100upx;">
				<view class="qiun-columns" style="background:white;margin: 20upx 0;">
					<view class="qiun-name">{{i18n.proportion}}</view>
					<view class="qiun-charts">
						<!--#ifdef MP-ALIPAY -->
						<canvas canvas-id="canvasPie" id="canvasPie" class="charts" :width="mvc.cWidth*mvc.pixelRatio" :height="mvc.cHeight*mvc.pixelRatio"
						 :style="{'width':mvc.cWidth+'px','height':mvc.cHeight+'px'}" @touchstart="touchPie"></canvas>
						<!--#endif-->
						<!--#ifndef MP-ALIPAY -->
						<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
						<!--#endif-->
					</view>
				</view>
				<view class="cardAll box-border" style="padding-bottom: 80upx;">
					<view class="tit">
						{{i18n.time}}:{{mvc.info.time}}
					</view>
					<view class="name">
						<view>
							{{mvc.info.name}}
						</view>
						<view class="">
							{{i18n.totalMoney}}:￥{{mvc.info.money}}
						</view>
					</view>

					<view class="center">

						<view class="info" v-for="(item,index) in mvc.numList" :key="index">
							<view class="qty">
								<view class="qtyname">{{item.name}}</view>
								<view class="qtymoney">{{i18n.money}}:￥<text>{{item.data}}</text></view>
								<view class="qtymoney">{{i18n.num}}:<text>{{item.qty}}</text></view>
							</view>
						</view>


					</view>

				</view>

			</view>
		</view>
		<view style="padding: 0 20upx;margin-bottom: 100upx;" v-if="mvc.current!=0">
			<view class="detaList box-border" @click="navToDetailPage(list.CODE2)" v-for="(list,index) in mvc.repList" :key='index'>

				<view class="s-header">
					<imglazy :url="list.img" :sty="imglazyStyle"></imglazy>
					<view class="s-text title">
						<view class="clamp">
							{{list.NAME}}
						</view>
						<view>
							{{i18n.code}}: {{list.CODE2}}
						</view>
					</view>
				</view>

				<view class="s-content">
					<view class="s-satus">
						<view>
							{{i18n.store}}:{{list.QTY}}
						</view>
						<view>
							{{i18n.price}}:￥{{list.RTLPRC}}
						</view>
						<view>
							{{i18n.total}}:￥{{list.all}}
						</view>

					</view>
				</view>

			</view>
			<over v-if="mvc.over"></over>
			<view style="text-align: center;" v-if="mvc.hide">
				{{i18n.hint}}
			</view>
		</view>
		<button class="xi-btn" @click="search">{{i18n.submit}}</button>
	</view>
	</view>
</template>

<script>
	import api from "@/common/index.js";
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uCharts from '@/components/u-charts/u-charts.js';
	import over from '@/components/over.vue';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	var _self;
	var canvaPie = null;
	var mvc = {
		repList: [],
		number: '',
		statusCode: '',
		p_num: '',
		isShow: false,
		list: '',
		hide: false,
		name: '',
		current: -1,
		over: false,
		cWidth: '',
		cHeight: '',
		pixelRatio: 1,
		qiunHdid: false,
		textarea: "",
		info: {
			name: '',
			num: '',
			time: ''
		},
		numList: [],
	}
	export default {
		components: {
			uniNavBar,
			imglazy,
			over
		},
		data() {
			return {
				mvc: {
					repList: [],
					number: '',
					statusCode: '',
					p_num: '',
					isShow: false,
					list: '',
					hide: false,
					name: '',
					current: -1,
					over: false,
					cWidth: '',
					cHeight: '',
					pixelRatio: 1,
					qiunHdid: false,
					textarea: "",
					info: {
						name: '',
						num: '',
						time: ''
					},
					numList: [],
				},
				imglazyStyle: 'border-radius: 10upx;'
			};
		},
		onLoad() {
			let that = this;
			setTimeout(function() {
				mvc = that.mvc;
				api.pageTitle(that.$t('repertory').title)
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
				const params = uni.getStorageSync('userinfo');
				mvc.number = params.hdid;
				that.mvc = mvc;
			}, 300)
		},

		computed: {
			i18n() {
				return this.$t('repertory');
			}
		},
		methods: {
			// 选择类型
			radioChange(evt) {
				let that = this;
				for (let i = 0; i < that.$t("repertory").items.length; i++) {
					if (that.$t("repertory").items[i].value === evt.target.value) {
						if (evt.target.value == "a") {

							mvc.name = '';
							mvc.repList = [];
							mvc.qiunHdid = false;
							mvc.over = false;
							mvc.hide = false;
						};
						if (evt.target.value == "b") {

							mvc.p_num = '';
							mvc.repList = [];
							mvc.qiunHdid = false;
							mvc.over = false;
							mvc.hide = false;
						};
						mvc.current = i;

						break;
					}
				}
				that.mvc = mvc;
			},
			back() {
				// 返回上一层页面
				uni.navigateBack({
					delta: 1
				});
			},
			// 跳转详情
			navToDetailPage(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/product/product?productId=${item}`
				})
			},
			// 调用二维码扫描
			onScan() {

				let that = this;
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						mvc.p_num = res.result;
						that.loadPost();
					}
				});
			},
			// input
			onKeyInput(e) {
				const key = e.currentTarget.dataset.key;

				mvc[key] = e.detail.value;

			},
			search() {
				let that = this;
				if (mvc.current == -1) {
					that.$api.msg(that.$t('repertory').p1)
					return false;
				};
				if (mvc.current == 1) {
					if (mvc.p_num == "") {
						that.$api.msg(that.$t('repertory').p2)
						return false;
					}
				};
				if (mvc.current == 2) {
					if (mvc.name == "") {
						that.$api.msg(that.$t('repertory').p3)
						return false;
					}
				};
				that.loadPost()
			},

			loadPost() {
				let that = this;
				mvc.hide = false;
				mvc.qiunHdid = false;
				mvc.over = false;
				api.load(this.$t('index').loadmsg)
				let params = {
					name: mvc.name
				}
				let data = {
					p_num: mvc.p_num
				}
				mvc.repList = []
				if (mvc.current != 0) {
					that.$ajax.reqView(data, params).then(res => {
						if (res.length != 0) {
							let list = res;
							list.forEach(function(item, index) {
								item.img = that.$store.getters.imgShow + '/thumb/' + item.CODE2 + '.jpg?x-oss-process=style/300';
								if (item.QTY > 0) {
									item.all = parseFloat(parseInt(item.RTLPRC) * parseFloat(item.QTY))
								} else {
									item.all = 0
								}
							})
							mvc.statusCode = res.statusCode;
							mvc.repList = list;
							console.log(mvc.repList);
							mvc.over = true;
							mvc.p_num = "";
						} else {
							mvc.hide = true
						}

						uni.hideLoading();
					})
				} else {
					this.repCharts();
				}
				that.mvc = mvc;
			},

			repCharts() {
				let that = this;
				that.$ajax.reqRank().then(res => {
					let LineA = {
						series: []
					};

					mvc.info = res.zong;


					for (let i in res.money) {
						let title = "";
						let arry = "";

						switch (i) {
							case '01':
								title = "家居百货";
								arry = {
									name: that.$t('repertory').category[0],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry);

								break;
							case '02':
								title = "健康美容";
								arry = {

									name: that.$t('repertory').category[1],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)
								break;
							case '03':
								title = "饰品系列";
								arry = {

									name: that.$t('repertory').category[2],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)
								break;
							case '04':
								title = "文体礼品";
								arry = {

									name: that.$t('repertory').category[3],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)
								break;
							case '05':
								title = "季节产品";
								arry = {

									name: that.$t('repertory').category[4],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)
								break;
							case '06':
								title = "精品包饰";
								arry = {

									name: that.$t('repertory').category[5],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)
								break;
							case '07':
								title = "儿童玩具";
								arry = {

									name: that.$t('repertory').category[6],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)
								break;
							case '08':
								title = "毛绒公仔";
								arry = {

									name: that.$t('repertory').category[7],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)
								break;
							case '09':
								title = "数码配件";
								arry = {

									name: that.$t('repertory').category[8],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)
								break;
							case '10':
								title = "休闲食品";
								arry = {

									name: that.$t('repertory').category[9],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)
								break;
							case '14':
								title = "物料耗材";

								arry = {

									name: that.$t('repertory').category[10],
									data: res.money[i],
									qty: res.num[i],
									show: true
								}
								LineA.series.push(arry)

						}
					}

					that.showPie("canvasPie", LineA);
					mvc.qiunHdid = true;
					mvc.numList = LineA.series;
					that.mvc = mvc;
					uni.hideLoading();
				})
			},
			showPie(canvasId, chartData) {
				canvaPie = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					background: '#FFFFFF',
					pixelRatio: mvc.pixelRatio,
					series: chartData.series,
					animation: true,
					width: mvc.cWidth * mvc.pixelRatio,
					height: mvc.cHeight * mvc.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {}
					},
				});
				uni.hideLoading();
			},
			touchPie(e) {
				canvaPie.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data + "元"
					}
				});

			},
			changeData() {
				if (isJSON(mvc.textarea)) {
					let newdata = JSON.parse(mvc.textarea);
					canvaPie.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: 'HMfont-home';
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUwAAsAAAAACYQAAATiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqGIIUfATYCJAMUCwwABCAFhG0HTBsvCFGULk6O7EvIyYYekQTabRkvs9JQlpOfvbz+1w0unHdih8IPlwYu4AVBACgA4uH/9+u3z5U379/5org3yCbRNLs0TaKRlgiVSijeWJ0ZzLkS8ATx4uJbug0r1xUTOxd9mfzfzds2S/CDZkfhmJYuWtoBxfFZL4IIA64H/mPJWu72FLRrSwILKJD3gF64BW9vv7R5KJkFkhucBIGHkb7CQCuN+2J7wEW5MG3HhhW6HBxL/bQGy7P/doos6rDCB3x+oAeKyjXQQDeQDdDmvmHs8iIPE2hWsQcPRsanAzmFPioQN0WCEiCXMCsVxaEXuoKFRXxS9el1ugn46H1//OUaPUnN9InHLkfwQfCPoC/wfGQuOQiS4Zxgy8jYASjE/UL3TZJBbAdJTf49KXsBTS9JP/Z87p9PPQpFviFtM/7hUYQkEx1dPY6we1Xl4CSWONIIGgXUFDJJ/ITG9aLrgoYZwH9iN9BxG/BUA6HMVLhWiqL0GSwFVQtCCg0N4i1nIMRg+YoQ7DiNUp/h0D2DegTXPPDCAA2eBIUO3zeEGCyMBc6dQSrMEHXkjt7crEb70fBpdPgwnJ3WXLiGseANevw48+HD9I07tWu+LR7aQu17FENdc5qbH2euvmCVdcVtzmgOD2lS2x6ZPHoYj6bbNTUxdZ+4LVh0OHBxO9p4sv2UxZYdek+eZG3ZowcXT1umD2ac1Upv/uhRxrQG5L/ogFB8ZrZjbkgzY6ZdI316MEqnGlTex6bSXlnWjjtYDt2yKewCsPZho9TCNgvV3l5XunGmnt2MFAY3ahCFzds7dlgpbtrWvtXzbVyr3TGuqtNm7/E2vyv2rbpWt9WJ7N2OvRmR8fa9wuwfiDdEte1dwG3bvZyqtR0+l2KXAS2D5Kx9pLrNoW14p2QSdJ0av54B4C9CaGQX17XEkMTV7erp/js2rFi30u5aavFXV3C8ZmcVdLBYMXXhXzrk9XAOkxZlVsXXVVAp6yihE4w6oyK5tiCx0O7/UvQGXeT7hxpr1zaTtXu/lJ547PMStWJlzom+b2xlVrB2DEBo7f2go5mb5qqt+zHe4f0JbOxuAXZ/ASef3b6Vys9UxIvnoRJui5XNgLd2x45GSwM+P/ER1j+HCT8gGKRz7vdUawPwiQpQeQLRzrsZ2pVnBBT+KWzP+dX2ad/g0053TwGMkh/necfNcxAApBepCoCRC8zPf6+f8fAI+ViknPzlsIDv9DGF0mZq/4hGY8nPVFEQoxfMyXRLLVKtJZbyq1cGvBLpf1P1C/lnvR5Gu9C4kNBbiCAZWAlZbwOyYHdANbQLOr090GwXtXxoDktSlDFs0wMgTNsDyaSvkE27hSzYV1At8hU605GhORPxhkOb4hpyLCnhCN+4tMFYxGOqaNPGIb84lQhqKkrYuMyjZBJWLAoauzg6p5NRpIqwQ0wR1wpcOY42plmm0jgSHEcqKhjjapYpIzzOUchx1b5OTnTRBznymEqAHMAiSnAIPmOlGhgT4WFUoZ3mHJT5+lSEQI0KJdiKurJgJoIlJmrfmAtHzg2QUeqqRnWX0l2sloArDofGw2gsRiVjkdBJVBgxhrHq4n5lCB6OI2GHSDVfTqgR3VTtOL228h63QKNvUSNFjhI1Ov2DEqZBZO8ouxK2VsQj0otIIOSkV47hlQMAAAA=') format('woff2')
	}

	.icon {
		font-family: 'HMfont-home' !important;
		font-size: 40upx;
		font-style: normal;
		position: absolute;

		&.scan {
			position: absolute;
			right: 30upx;
			top: 20%;
			z-index: 20;

			&:before {
				content: "\e64b";
			}
		}

	}

	page,
	.stock {
		background: $page-color-base;
		padding: 10upx 0;
	}

	.rowradio {
		height: 110upx;
		background: #fff;
		display: flex;
		align-items: center;
		padding: 0 30upx;
		position: relative;

		.tit {
			flex-shrink: 0;
			width: 140upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
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
			width: 140upx;
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

	.search {
		display: flex;
		flex-direction: column;
		padding: 15upx 20upx 15upx 20upx;
		border-radius: 15upx;

		.uni-card {
			position: relative;
			padding: 10upx;
			margin: 20upx;
			border: none;
			font-size: 28upx;

			.uni-card__header {
				.uni-card__header-extra-text {
					position: absolute;
					margin-left: 23upx;
				}
			}

		}
	}

	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.detaList {
		margin: 15upx 0;

	}



	.hr {

		border-bottom: 1px dashed #ccc;
		width: 100%;
	}

	%section {
		background: white;
		border-radius: 10upx;
		width: 100%;
		padding: 20upx;
	}

	.s-header {
		@extend %section;
		display: flex;
		justify-content: left;

		.lazy {
			width: 150upx;
			height: 130upx;
			padding-right: 20upx;
		}

		.s-img {
			width: 24%;
			height: 130upx;
			padding-right: 20upx;

			image {
				border-radius: 10upx;
				width: 100%;
				height: 130upx;

			}
		}

		.s-text {
			width: 70%;
			font-size: 28upx;
			flex: 2;
		}
	}

	.s-content {
		@extend %section;


		.s-satus {
			display: flex;
			justify-content: space-around;

			view {
				width: 50%;
				text-align: center;
				background-color: #eeeeee;
				border: 1px solid white;
				height: 55upx;
				line-height: 55upx;
				border-radius: 10upx;
				font-size: 23upx;
			}
		}
	}

	.logistics {
		@extend %section;
		margin-top: 20upx;
	}

	radio-group {
		display: flex;
	}

	.uni-list-cell {
		position: static;

		.title {
			font-size: 25upx;
		}
	}


	// 图表
	.qiun-name {
		text-align: center;
		font-weight: bold;
		border-bottom: 1px solid #EEEEEE;
		padding: 20upx;
	}

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
			display: flex;
			justify-content: space-around;
		}

		.center {


			.right {
				border-right: 1px solid #eeeeee;
			}

			.left {
				border-left: 1px solid #eeeeee;
			}



			.info {
				height: 100upx;
				// display: flex;
				line-height: 100upx;
				border-bottom: 1px solid #eeeeee;

				.title {
					color: #333;
					line-height: 100upx;

				}

				.qty {
					line-height: 100upx;
					font-size: 20upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;

					.qtyname {
						color: #1890ff;
						padding: 0 10upx;
						font-size: 30upx;
						font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
					}

					.qtymoney {
						font-size: 24upx;
						margin: 0 10upx;

						text {
							text-align: left;
							font-size: 28upx;
							font-family: Arial, Helvetica, sans-serif;
						}
					}

				}

				view {
					line-height: 100upx;

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
