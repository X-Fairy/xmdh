<template>
	<view class="content">
		<view style="position: fixed;left: 0;width: 100%;height: 300upx;z-index: 90;">
			<uni-nav-bar left-icon="back" :title="list.navTitle" @click-left="back" />
			<view class="navbar">
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
				<text class="cate-item yticon icon-fenlei1" @click="toggleCateMask('show')" v-if="list.rightnavhide==true"></text>
			</view>
		</view>
		<empty v-if="list.cartoon==true"></empty>
		<view v-else :style="{'padding-top': list.navHeight}">
			<view class="guess-section">
				<view v-for="(item, index) in list.goodsList" :key="index" class="guess-item">
					<view @click="navToDetailPage(item)">
						<imglazy :url="item.image" :sty="imglazyStyle"></imglazy>
					</view>
					<view style="padding: 0 15upx;">
						<text class="title clamp">{{item.item_name}}</text>
						<view class="guess-right">
							<view v-if='list.listId=="dis"'>
								<text class="price">{{i18n.p3}}：￥{{item.discount}}</text>
								<text class="m-price">￥{{item.base_price}}</text>
							</view>
							<view v-if='list.listId!="dis"'>
								<view class="price">{{i18n.p1}}:￥{{item.base_price}}</view>
							</view>
							<view class="price" v-if='list.listId!="dis"'>{{i18n.p2}}:￥{{item.ling}}</view>
						</view>
						<view class="guess-right">
							<uni-number-box class="step" :min="item.mini" :value="item.allNum" :step="item.mini" :index="index" @change="bindChange"></uni-number-box>
							<image src="../../static/cart.png" mode="" class="cart" @click="shopping(item)"></image>
						</view>
						<view class="circle" v-if="item.circleHidden==true">
							{{item.cnum}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="list.loadingType"></uni-load-more>

		<view class="cate-mask" :class="list.cateMaskState===0 ? 'none' : list.cateMaskState===1 ? 'show' : ''" @click="toggleCateMask">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
					<view style="padding-left: 30upx;font-size: 35upx;">
						{{i18n.title}}：
					</view>
					<view v-for="tItem in list.cateList" :key="tItem.id" class="cate-item b-b" :class="{active: tItem.cls_no==list.activeId}"
					 @click="changeCate" v-bind:id="tItem.cls_no">
						{{tItem.cls_name}}
					</view>
				</scroll-view>
			</view>
		</view>
		<scrllTop></scrllTop>
	</view>
</template>

<script>
	import api from '../../common/index.js';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniNumberBox from '@/components/uni-number-box.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import empty from "@/components/empty";
	import scrllTop from '@/components/uni-scrollTo/uni-scrollTo.vue';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	let eindex = {
		title: "",
		thispage: 0,
		Allpage: 0,
		cateMaskState: 0, //分类面板展开状态
		headerPosition: "fixed",
		headerTop: "0px",
		loadingType: 'more', //加载更多状态
		filterIndex: 0,
		cateId: 0, //已选三级分类id
		priceOrder: 0, //1 价格从低到高 2价格从高到低
		cateList: [],
		goodsList: [],
		listId: '',
		page: 1,
		pageSize: 20,
		type: 'add',
		activeId: "",
		downNum: "",
		navTitle: "",
		cartoon: false,
		rightnavhide: true,
		prciceHdid: false,
		navHeight: 0,

		bind: '',
		China: ''
	}
	export default {
		components: {
			uniNavBar,
			uniLoadMore,
			uniNumberBox,
			empty,
			scrllTop,
			imglazy
		},
		data() {
			return {
				imglazyStyle: 'border-radius: 10upx;',
				list: {
					title: "",
					thispage: 0,
					Allpage: 0,
					cateMaskState: 0, //分类面板展开状态
					headerPosition: "fixed",
					headerTop: "0px",
					loadingType: 'more', //加载更多状态
					filterIndex: 0,
					cateId: 0, //已选三级分类id
					priceOrder: 0, //1 价格从低到高 2价格从高到低
					cateList: [],
					goodsList: [],
					listId: '',
					page: 1,
					pageSize: 20,
					activeId: "",
					downNum: "",
					navTitle: "",
					cartoon: false,
					rightnavhide: true,
					prciceHdid: false,
					navHeight: 0,
					type: 'add',
					bind: '',
					China: ''
				}
			};
		},
		computed: {
			i18n() {
				return this.$t('list')
			}
		},
		onLoad(options) {
			let that = this;
			eindex = this.list
			api.load(this.$t('index').loadmsg)
			this.getTitleHeight();
			if (options.tid) {
				eindex.cateId = options.tid;
			};
			if (options.listId) {
				eindex.listId = options.listId;
			};

			setTimeout(function() {
				that.loadData();
			}, 300)
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				eindex.headerPosition = "fixed";
			} else {
				eindex.headerPosition = "absolute";
			}
		},

		//下拉刷新
		onPullDownRefresh() {
			eindex.page = 1;
			eindex.type = 'refresh';
			this.loadData();
		},
		//加载更多
		onReachBottom() {
			eindex.type = 'add';
			this.loadData();
		},
		methods: {
			//加载商品 ，带下拉刷新和上滑加载
			imageError(index) {
				// this.goodsList[index].image = 'http://dh.xmcpcn.com/Public/images/none.jpg';
			},
			getTitleHeight() {
				let that = this;
				uni.getSystemInfo({
					success: res => {
						console.log(res.screenHeight)
						if (res.screenHeight < 750) {

							eindex.navHeight = "110px"
							return false;
						}
						if (res.screenHeight < 950) {
							eindex.navHeight = "120px"

							return false;
						}
						if (res.screenHeight > 1000) {
							eindex.navHeight = "180px";

							return false;
						}
					}
				})
			},
			loadData() {
				var that = this;
				let params = {
					type: 'app'
				}

				if (that.isNumber(eindex.listId)) {
					let getData = {
						listId: eindex.listId,
						pagesize: eindex.pageSize,
						page: eindex.page,
						downNum: eindex.downNum
					}
					that.$ajax.category(getData, params).then(res => {
						if (res.list == null || res.list == 0) {
							if (res.other.thispage == 1) {
								eindex.loadingType = "nomore";
								uni.hideLoading();
								eindex.cartoon = true;
								that.list = eindex;
								return false;
							}
						};
						if (res.nav.length == 2) {
							eindex.navTitle = res.nav[1].title;
						};
						if (res.nav.length == 3) {
							eindex.navTitle = res.nav[2].title;
						};
						if (res.nav.length == 4) {
							eindex.navTitle = res.nav[3].title;
						};
						if (res.sub_cls.length == 0) {
							eindex.rightnavhide = false
						};
						that.allPage(res)

					})
				} else {
					// 新品上线
					let list_data = {
						page: eindex.page,
						downNum: eindex.downNum
					}
					switch (eindex.listId) {
						case 'new':
							that.$ajax.hNew(list_data, params).then(res => {
								eindex.navTitle = res.nav[1].title;
								that.allPage(res);
							})
							// api.post('/index.php/Home/Category/new_goods?p=' + that.page + "&num=" + that.downNum, params, res => {

							// })
							break;
						case 'supplement':
							that.$ajax.hBu(list_data, params).then(res => {
								eindex.navTitle = res.nav[1].title;
								that.allPage(res);
							})

							break;
						case 'dis':
							that.$ajax.hDis(list_data, params).then(res => {
								eindex.navTitle = res.nav[1].title;
								that.allPage(res);
							})

							break;
						case 'sell':
							that.$ajax.hSale(list_data, params).then(res => {
								eindex.navTitle = res.nav[1].title;
								that.allPage(res);
							})

							break;
						case 'China':
							api.post('/index.php/Home/Promotion/China_products?p=' + that.page + "&cls=01" + "&num=" + that.downNum, params,
								res => {
									if (!res.list) {
										this.$api.msg(res);
										uni.hideLoading();
										eindex.loadingType = "nomore";
										return false;
									}

									eindex.navTitle = res.nav[1].title;
									that.allPage(res);
								})
							break;
						case 'China70':
							api.post('/index.php/Home/Promotion/China70?p=' + that.page + "&num=" + that.downNum, params, res => {
								eindex.navTitle = res.nav[2].title;
								res.other.thispage = 1;
								res.other.totalPage = 1;
								that.allPage(res);
							})
							break;

					}
				}
			},
			// 分页
			allPage(res) {

				let that = this;
				//当商品数据为空时
				if (res.list == null || res.other.totalPage == 0) {
					eindex.loadingType = "nomore";
					uni.hideLoading();
					that.list = eindex;
					// that.cartoon = true;
					return false;
				};
				eindex.prciceHdid = true;
				eindex.Allpage = res.other.totalPage;
				eindex.thispage = res.other.thispage;
				let banner = res.list;
				eindex.cateList = res.sub_cls
				for (var i = 0; i < banner.length; i++) {
					let banner_img = that.$store.getters.imgShow + '/thumb/' + banner[i].item_no + '.jpg?x-oss-process=style/300';
					banner[i].image = banner_img;
					banner[i].allNum = parseInt(banner[i].spec);
					banner[i].mini = parseInt(banner[i].spec);
					banner[i].circleHidden = false;
					if (banner[i].cnum != "0") {
						banner[i].circleHidden = true;
					}
				}
				let goodsList = banner;
				//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
				eindex.loadingType = res.other.thispage > res.other.totalPage ? 'nomore' : 'more';
				//没有更多直接返回

				//请求分页
				if (eindex.type == 'add') {
					eindex.page = eindex.page + 1;

					if (eindex.loadingType === 'nomore') {
						that.list = eindex;
						return;
					}
					eindex.loadingType = 'loading';
				} else {
					eindex.loadingType = 'more'
				}

				// 刷新页面
				if (eindex.type == 'refresh') {
					eindex.goodsList = [];
					uni.stopPullDownRefresh();
					eindex.page = eindex.page + 1;

					if (eindex.loadingType === 'nomore') {
						that.list = eindex;
						return;
					}
					eindex.loadingType = 'loading';
				}
				// 当前页面小于20条
				if (goodsList.length < 20) {
					eindex.loadingType = 'nomore';
					uni.hideLoading();
					eindex.goodsList = eindex.goodsList.concat(goodsList);
					that.list = eindex;
					return false;
				}
				
				uni.hideLoading();
				eindex.goodsList = eindex.goodsList.concat(goodsList);
				
				that.list = eindex;
			},
			// 筛选数字
			isNumber(val) {
				var regPos = /^\d+(\.\d+)?$/; //非负浮点数
				var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
				if (regPos.test(val) || regNeg.test(val)) {
					return true;
				} else {
					return false;
				}
			},
			//筛选点击
			tabClick(index) {

				eindex.bind = 'active'
				eindex.filterIndex = index;
				eindex.page = 1;
				eindex.type = 'refresh';
				if (index == 2) {

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
					eindex.downNum = '';
					this.loadData();
				}
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})

				api.load(this.$t('index').loadmsg)


			},
			//显示分类面板
			toggleCateMask(type) {
				let timer = type === 'show' ? 10 : 300;
				let state = type === 'show' ? 1 : 0;
				eindex.cateMaskState = 2;
				setTimeout(() => {
					eindex.cateMaskState = state;
				}, timer)
				this.list = eindex
			},
			//分类点击
			changeCate(item) {

				var that = this;
				eindex.goodsList = [];
				var Cate = new Promise(function(resolve, reject) {
					eindex.listId = item.target.id;
					eindex.page = 1;
					resolve(eindex.listId);
				})
				Cate.then(function(res) {
					console.log(res);
					that.toggleCateMask();
				});

				eindex.activeId = item.target.id;
				this.toggleCateMask();
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				api.load(this.$t('index').loadmsg)

			},

			//详情页
			navToDetailPage(item) {

				if (eindex.listId == "dis") {
					uni.navigateTo({
						url: `/pages/product/product?productId=${item.item_no}&num=${item.discount}`
					})
				} else {
					uni.navigateTo({
						url: `/pages/product/product?productId=${item.item_no}`
					})
				}

			},
			//总数量
			bindChange(data) {
				eindex.goodsList[data.index].allNum = data.number;
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
			stopPrevent() {},
			// 返回
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
		},
	}
</script>

<style lang="scss">
	.header-back {
		position: absolute;
		top: 0;
		height: 220upx;
		background-image: linear-gradient(135deg, #81FFEF 10%, #F067B4 100%);
		width: 100%;

		view {
			line-height: 200upx;
			text-align: center;
			color: white;
			font-size: $font-lg;
			font-weight: bold;
		}
	}


	page,
	.content {
		background: $page-color-base;

	}

	.pagination {
		display: block;
		text-align: center;

		font-size: 28upx;


	}

	.content {
		// padding-top: 140upx;
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

	/* 分类 */
	.cate-mask {
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 95;
		transition: .3s;

		.cate-content {
			width: 630upx;
			height: 100%;
			background: #fff;
			float: right;
			transform: translateX(100%);
			transition: .3s;
		}

		&.none {
			display: none;
		}

		&.show {
			background: rgba(0, 0, 0, .4);

			.cate-content {
				transform: translateX(0);
			}
		}
	}

	.cate-list {
		display: flex;
		flex-direction: column;
		height: 100%;

		.cate-item {
			display: flex;
			align-items: center;
			height: 90upx;
			padding-left: 30upx;
			font-size: 28upx;
			color: #555;
			position: relative;
		}

		.two {
			height: 64upx;
			color: #303133;
			font-size: 30upx;
			background: #f8f8f8;
		}

		.active {
			color: $base-color;
		}
	}

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
				z-index: 20;
				background-color: white;

			}

		}

		.lazy {
			width: 100%;
			height: 300upx;
		}

		.image-wrapper {
			width: 100%;
			height: 300upx;
			border-radius: 3px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
				opacity: 1;
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

		.m-price {
			font-size: $font-sm;
			text-decoration: line-through;
			color: $font-color-light;
			margin-left: 8upx;
		}
	}

	.cate-list {
		margin-top: 80upx;
	}
</style>
