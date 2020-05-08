<template>
	<view>
		<view class="navback">
			<!-- #ifdef MP -->
			<view class="mp-search-box" :style="{'padding-top':list.getTop}">
				<view class="wx-header">
					<view class="yticon icon-goback" @click="goback"></view>
					<input class="ser-input" type="text" :placeholder="i18n.inputpl" :value="list.text" data-key="text" @input="inputChange" @confirm="bindconfirm"/>
					<view class="searchText" @click="postData">{{i18n.title}}</view>
				</view>
			</view>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<view class="mp-search-box" :style="{'padding-top':list.getTop,width:list.appwidth}">
				<view class="wx-header">
					<view class="yticon icon-goback" @click="goback"></view>
					<input class="ser-input" type="text" :placeholder="i18n.inputpl" :value="list.text" data-key="text" @input="inputChange" @confirm="bindconfirm"/>
					<view class="searchText" @click="postData">{{i18n.title}}</view>
				</view>
			</view>
			<!-- #endif -->

			<view class="navbar" v-if="list.sort">
				<view class="nav-item" :class="{current: list.filterIndex === 0}" @click="tabClick(0)">
					{{i18n.Default}}
				</view>

				<view class="nav-item" :class="{current: list.filterIndex === 2}" @click="tabClick(2)">
					<text>{{i18n.price}}</text>
					<view class="p-box">
						<text :class="{active: list.priceOrder === 1 && list.filterIndex === 2}" class="yticon icon-shang"></text>
						<text :class="{active: list.priceOrder === 2 && list.filterIndex === 2}" class="yticon icon-shang xia"></text>
					</view>
				</view>
				<view class="pagination nav-item">
					{{list.thispage}}/{{list.Allpage}}{{i18n.page}}
				</view>
			</view>
		</view>
		<view class="content" :style="{'padding-top': list.getTop2}">
			<view v-if="list.isHistory" class="history-box">
				<view class="recommend">
					<view class="title">
						{{i18n.recommend}}：
					</view>
					<view class="center_a" v-if="list.satus_a">
						<view v-for="(item,index) in list.recList_a" :key='index' @click="bindSea(item.id)">
							<text>{{item.value}}</text>
						</view>
					</view>
					<view class="center_b" v-if="list.satus_b">
						<view v-for="(item,index) in list.recList_b" :key='index' @click="bindnav(index)">
							<text>{{item.value}}</text>
						</view>
					</view>
				</view>
			</view>
			<view v-else class="history-box">
				<view v-if="list.historyList.length > 0" class="history-list-box">
					<view style="padding: 0 20upx;">
						{{i18n.title}}<text>"</text> {{list.text}} <text>"</text>{{i18n.results}}
					</view>
					<view class="guess-section">
						<view v-for="(item, index) in list.historyList" :key="index" class="guess-item">
							<view @click="navToDetailPage(item.item_no)">
								<imglazy :url="item.image" :sty="imglazyStyle"></imglazy>
							</view>

							<view style="padding: 0 15upx;">
								<text class="title clamp" @click="navToDetailPage(item.item_no)">{{item.item_name}}</text>
								<view class="guess-right">
									<view class="price">{{i18n.p1}}:￥{{item.price}}</view>
									<view class="price">{{i18n.p2}}:￥{{item.ling}}</view>
								</view>
								<view class="guess-right">
									<uni-number-box class="step" :min="item.mini" :value="item.allNum" :step="item.mini" :index="index"
									 @change="bindChange"></uni-number-box>
									<image src="../../static/cart.png" mode="" class="cart" @click="shopping(item)"></image>
								</view>
								<view class="circle" v-if="item.circleHidden==true">
									{{item.cnum}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="list.loadingType" v-if="list.sort"></uni-load-more>
		<scrllTop v-if="list.scrllHdid"></scrllTop>
	</view>
</template>

<script>
	import api from '@/common/index.js';
	import uniNumberBox from '@/components/uni-number-box.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import scrllTop from '@/components/uni-scrollTo/uni-scrollTo.vue';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	let eindex = {
		statusHeight: 0,
		historyList: [],
		isHistory: true,
		text: "",
		thispage: 0,
		Allpage: 0,
		all: 0,
		sort: false,
		recList_a: [],
		recList_b: [],
		page: 1,
		loadingType: 'more', //加载更多状态
		type: 'add',
		filterIndex: 0,
		priceOrder: 0, //1 价格从低到高 2价格从高到低
		downNum: '',
		getTop: 0,
		getTop2: 0,
		appwidth: '100%',
		scrllHdid: false,
		over: false,
		satus_a: false,
		satus_b: false,
	};
	export default {
		components: {
			uniNumberBox,
			uniLoadMore,
			scrllTop,
			imglazy
		},

		data() {
			return {
				imglazyStyle: 'border-radius: 10upx;',
				list: {
					statusHeight: 0,
					historyList: [],
					isHistory: true,
					text: "",
					thispage: 0,
					Allpage: 0,
					all: 0,
					sort: false,
					recList_a: [],
					recList_b: [],
					page: 1,
					loadingType: 'more', //加载更多状态
					type: 'add',
					filterIndex: 0,
					priceOrder: 0, //1 价格从低到高 2价格从高到低
					downNum: '',
					getTop: 0,
					getTop2: 0,
					appwidth: '100%',
					scrllHdid: false,
					over: false,
					satus_a: false,
					satus_b: false,
				}
			};
		},
		onLoad() {
			let that = this;
			setTimeout(function() {
				eindex = that.list;
				that.getTitleHeight();
				that.seachData();
			}, 300)
		},
		computed: {
			i18n() {
				return this.$t('search')
			}
		},
		methods: {
			// 判断国外关键字跳转
			bindnav(e) {
				switch (e) {
					case 0:
						uni.navigateTo({
							url: `/pages/product/list?listId=new`
						})
						break;
					case 1:
						uni.navigateTo({
							url: `/pages/product/list?listId=China`
						})
				}
			},
			// 判断国内外关键字推荐
			seachData() {
				eindex.satus_a = true;
				eindex.recList_a = this.$t('search').recList_a;
				this.list = eindex;
				// 				const data = uni.getStorageSync('userinfo');
				// 				if (data.oversea == 1) {
				// 					console.log("1")
				// 					this.recList_b = this.$t('search').recList_b
				// 					this.satus_b = true;
				// 					this.satus_a = false;
				// 
				// 				} else {
				// 					console.log("2")
				// 					this.recList_a = this.$t('search').recList_a
				// 					this.satus_b = false;
				// 					this.satus_a = true;
				// 				}
			},
			getTitleHeight() {
				let that = this;
				uni.getSystemInfo({
					success: res => {
						console.log(res.screenHeight)
						if (res.screenHeight < 740) {

							eindex.statusHeight = "90px";
							eindex.getTop = '32px';
							if (eindex.sort == true) {
								eindex.getTop2 = '120px';
							} else {
								eindex.getTop2 = '70px';
							}
							that.list = eindex
							return false;
						}
						if (res.screenHeight < 950) {

							eindex.statusHeight = "95px";
							eindex.getTop = '40px';

							if (eindex.sort == true) {
								eindex.getTop2 = '130px';
							} else {
								eindex.getTop2 = '80px';
							}
							that.list = eindex
							return false;
						}
						if (res.screenHeight > 1000) {

							eindex.statusHeight = "140px";
							eindex.getTop = '30px';
							if (eindex.sort == true) {
								eindex.getTop2 = '220px';
							} else {
								eindex.getTop2 = '160px';
							}
							that.list = eindex
							return false;
						}
					}
				})
			},
			
			inputChange(e) {
				const key = e.currentTarget.dataset.key;
				eindex[key] = e.detail.value;
			},
			postData() {
				var that = this;
				if (eindex.text == "") {
					eindex.isHistory = true;
					eindex.over = true;
					that.list = eindex;
					this.$api.msg(that.$t('search').pl)
					return false;
				}
				eindex.page = 1;
				eindex.over = false;
				eindex.historyList = [];
				api.load(this.$t('index').loadmsg)
				this.loadData()

			},
			bindSea(option) {

				eindex.text = option;
				api.load(this.$t('index').loadmsg)
				this.loadData();
			},
			//下拉刷新
			onPullDownRefresh() {
				if (eindex.text != '') {
					eindex.page = 1
					eindex.type = 'refresh';
					this.loadData();
				} else {
					uni.stopPullDownRefresh();
				}
			},
			//加载更多
			onReachBottom() {
				eindex.type = 'add';
				this.loadData();
			},
			// 键盘搜索
			bindconfirm(){
				this.postData();
			},
			loadData(data) {
				var that = this;
				eindex.over = false;

				let items = {
					text: eindex.text,
					page: eindex.page,
					downNum: eindex.downNum
				}
				that.$ajax.searchData(items).then(res => {
					console.log(res)
					let content = res.list;
					// 当数据为空时
					if (res.list == null || res.other.totalPage == 0) {
						eindex.loadingType = "nomore";
						eindex.isHistory = false;
						eindex.over = true;
						
						eindex.thispage=0;
						eindex.Allpage=0;
						that.list = eindex
						uni.hideLoading();
						return false;
					};
					if (res.list == 0) {
						if (res.other.totalPage == 0) {
							eindex.loadingType = "nomore";
							eindex.historyList = [];
							eindex.isHistory = false;
							that.over = true;
						}
					};
					let list = [];
					eindex.Allpage = res.other.totalPage;
					eindex.thispage = res.other.thispage;
					eindex.all = res.other.all;
					eindex.sort = true;
					eindex.scrllHdid = true;
					that.getTitleHeight();
					for (let i in content) {
						content[i].image = that.$store.getters.imgShow + '/thumb/' + content[i].item_no +
							'.jpg?x-oss-process=style/204';
						content[i].allNum = parseInt(content[i].spec);
						content[i].mini=parseInt(content[i].spec);
						content[i].circleHidden = false;
						content[i].circleText = 0;
						if (content[i].cnum != "0") {
							content[i].circleHidden = true;
						}
						list.push(content[i]); //属性
					}
					eindex.isHistory = false;

					eindex.loadingType = parseInt(res.other.thispage) > res.other.totalPage ? 'nomore' : 'more';
					if (eindex.type == 'add') {
						eindex.page = eindex.page + 1;

						if (eindex.loadingType === 'nomore') {
							that.list = eindex
							return;
						}
						eindex.loadingType = 'loading';
					} else {
						eindex.loadingType = 'more'
					};
					if (eindex.type == 'refresh') {
						eindex.historyList = [];
						uni.stopPullDownRefresh();
						eindex.page = eindex.page + 1;

						if (eindex.loadingType === 'nomore') {
							that.list = eindex;
							return;
						}
						eindex.loadingType = 'loading';
					}
					// 当前页面小于20条
					if (list.length < 20) {
						eindex.loadingType = 'nomore';
						uni.hideLoading();
						eindex.historyList = eindex.historyList.concat(list);
						return false;
					}
					uni.hideLoading();
					eindex.historyList = eindex.historyList.concat(list);

					that.list = eindex;
				})
			},
			//总数量
			bindChange(data) {
				eindex.historyList[data.index].allNum = data.number;
				this.list = eindex;
			},
			//添加购物车
			shopping(data) {
				let that = this;
				let cartInfo = {
					item_no: data.item_no,
					allNum: data.allNum
				};
				that.$ajax.addShop(cartInfo).then(res => {
					if (res.result == "success") {
						that.$api.msg(that.$t('index').msg1);
						data.circleHidden = true;
						data.cnum = parseInt(data.cnum) + parseInt(data.allNum)
					} else {
						that.$api.msg(res.msg);
					}
				})
			},
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			//详情页
			navToDetailPage(item) {

				uni.navigateTo({
					url: `/pages/product/product?productId=${item}`
				})
			},
			// 扫描商品
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
			//筛选点击
			tabClick(index) {
				eindex.filterIndex = index;
				eindex.page = 1;
				eindex.type = 'refresh';
				if (index === 2) {

					eindex.priceOrder = eindex.priceOrder === 1 ? 2 : 1;
					if (eindex.priceOrder == 1) {
						eindex.downNum = "desc"
					};
					if (eindex.priceOrder == 2) {
						eindex.downNum = "asc"
					};

					this.loadData();
				} else {

					eindex.priceOrder = 0;
					eindex.downNum = ''
					this.loadData();
				}
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})

				api.load(this.$t('index').loadmsg)

			},
		},

		onNavigationBarSearchInputChanged(e) {
			eindex.text = e.text;
		},
	};
</script>

<style lang="scss">
	// 导航
	.navback {
		position: fixed;
		left: 0;
		width: 100%;
		z-index: 999;
		background-color: white;
	}

	.mp-search-box {
		width: 70%;
		border-bottom: 1px solid white;
		padding: 15upx 30upx 15upx 5upx;
		background-color: white;

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
				background: #EEEEEE;

			}

			.searchText {
				color: #333;
				margin-left: 10upx;
				line-height: 56upx;
			}

			.icon-goback {
				line-height: 56upx;
				color: #333;
				font-size: 36upx;
				margin-right: 20upx;
			}


		}

	}




	.header-back {
		.bg {
			width: 100%;
			height: 100%;

		}

		height: 180upx;
	}

	.history-box {
		position: relative;

	}

	.history-title {
		display: flex;
		justify-content: space-between;
		padding: 20upx 30upx;
		padding-bottom: 0;
		font-size: 34upx;
		color: #333;
	}

	.history-title .uni-icon {
		font-size: 40upx;
	}

	.history-content {
		display: flex;
		flex-wrap: wrap;
		padding: 15upx;
	}

	.history-item {
		padding: 4upx 35upx;
		border: 1px #f1f1f1 solid;
		background: #fff;
		border-radius: 50upx;
		margin: 12upx 10upx;
		color: #999;
	}



	.history-list-item {
		padding: 30upx 0;
		margin-left: 30upx;
		border-bottom: 1px #EEEEEE solid;
		font-size: 28upx;
	}

	.no-data {
		text-align: center;
		color: #999;
		margin: 100upx;
	}

	/* 猜你喜欢 */
	.guess-section {
		display: flex;
		flex-wrap: wrap;
		padding: 0 20upx;
		background: #fff;

		.guess-item {
			box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.1);
			margin: 10upx 0;
			display: flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 5upx;
			position: relative;
			justify-content: space-between;

			&:nth-child(2n+1) {
				margin-right: 4%;
			}

			.guess-right {
				display: flex;
				justify-content: space-between;
				margin-bottom: 20upx;

				.uni-numbox[data-v-f73045be] {
					position: relative;
				}

				.cart {
					width: 55upx;
					height: 55upx;
				}

			}

			.circle {
				width: 33upx;
				height: 33upx;
				border-radius: 50%;
				line-height: 33upx;
				position: absolute;
				right: 15upx;
				bottom: 55upx;
				font-size: 22upx;
				text-align: center;
				color: $font-color-e1;
				z-index: 99;
				background-color: white;
			}

		}

		.lazy {
			width: 100%;
			height: 300upx;
			opacity: 1;
		}

		.image-wrapper {
			width: 100%;
			height: 300upx;
			border-radius: 3px;



			image {
				width: 100%;
				height: 100%;

			}
		}

		.title {
			font-size: $font-sm;
			color: $font-color-dark;
			line-height: 80upx;
		}

		.price {
			font-size: $font-sm;
			color: $uni-color-primary;
			line-height: 1;
		}
	}

	.recommend {
		padding: 10upx;
		position: relative;

		.title {
			padding: 10upx 50upx;
			font-weight: bold;
		}

		.center_a {
			display: flex;
			flex-wrap: wrap;
			justify-content: left;

			view {
				width: 30%;
				text-align: center;
				height: 80upx;

				text {
					background-color: #EEEEEE;
					padding: 10upx 50upx;
					border-radius: 15upx;
					color: #333;
					font-size: $font-sm;

				}
			}
		}

		.center_b {
			display: flex;

			justify-content: left;

			view {
				padding: 10rpx;
				text-align: center;
				height: 80upx;

				text {
					background-color: #EEEEEE;
					padding: 10upx 50upx;
					border-radius: 15upx;
					color: #333;
					font-size: $font-sm;

				}
			}
		}
	}

	.navbar {
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
					border-bottom: 5upx solid $font-color-e1;
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
				line-height: 1.2;
				margin-left: 4upx;
				font-size: 26upx;
				color: black;

				&.active {
					color: $font-color-e1;
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
</style>
