<template>

	<view class="container">
		<!-- 头部 -->
		<view style="position: fixed;left: 0;width: 100%;height: 300upx;z-index: 90;">
			<view class="nav-heard">
				<!-- <image src="/static/user.png" mode="" class="bg"></image> -->
				<!-- <view class="bg"></view> -->
				<uni-nav-bar theme="1" backHeight="height: 110px;" class="bg" />
				<view class="heard-title">
					<view class="title">
						{{i18n.title}}
					</view>
					<view class="bottom">
						<view class="left">
							{{i18n.p1}}<text> {{list.sptyp}} </text>
							{{i18n.p2}} {{list.spnum}} {{i18n.p3}}
						</view>
						<view class="right" @click="actionSheetTap()">
							<view class="icon icon-guanli">
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cartHint" @touchmove="handletouchmove" @touchstart="handletouchstart" @touchend="handletouchend">
				<view class="txt">
					{{i18n.hint3}}
				</view>
				<image src="../../static/slide.png" mode="" class="slide"></image>
			</view>
		</view>

		<!-- 空白页 -->
		<view v-if="list.empty" class="empty">
			<image src="/static/emptyCart.jpg" mode="aspectFit"></image>
			<view class="empty-tips">
				<navigator class="navigator" url="../index/index" open-type="switchTab">{{i18n.emptyText}}<text class="yticon icon-you"></text></navigator>
			</view>
		</view>
		<view v-else>
			<scroll-view class="list-scroll-content" scroll-y>
				<view class="cart-list" style="margin-top: 10upx;position: relative;padding-top:250upx ;padding-bottom: 240upx;"
				 @touchmove="handletouchmove" @touchstart="handletouchstart" @touchend="handletouchend">

					<view v-for="(item, index) in list.cartList" :key="index" class="animated bounceInRight">
						<view class="cart-item" :class="{'b-b': index!==list.cartList.length-1}">
							<image src="../../static/temp/h6.png" mode="" class="disicon" v-if="item.huodong=='zhe'"></image>
							<view @click="navToDetailPage(item)">
								<imglazy :url="item.image"></imglazy>
							</view>
							<view class="item-right">
								<text class="clamp title" @click="navToDetailPage(item)">{{item.item_name}}</text>
								<view class="item-buttom">
									<view class="price" style="margin-right: 50upx;font-size: 30upx;font-weight: bold;">
										<text style="font-size: 24upx;font-weight:normal;">¥</text> {{item.price}}
									</view>
									<uni-number-box class="step" type="cart" :min="item.allNum" :value="item.num" :step="item.allNum" :index="index"
									 :code="item.item_no" @change="bindChange"></uni-number-box>
								</view>
							</view>
							<view class="del-btn yticon icon-fork" @click="deleteCartItem(item, index)"></view>
						</view>
					</view>
					<uni-load-more :status="list.loadingType"></uni-load-more>
				</view>
			</scroll-view>
		</view>
		<!-- 底部菜单栏 -->
		<view class="action-section">
			<view class="total-box">
				<view class="disTitle">
					<text @click="show('right')">{{list.distext}}</text>
				</view>
				<text class="price">
					合计: ¥<text class="num">{{list.total}}</text>
					<!-- <text class="m-num">{{list.total}}</text> -->
				</text>
			</view>
			<button type="primary" class="no-border confirm-btn" @click="createOrder">{{i18n.go}}</button>
		</view>
		<!-- 右侧侧边栏 -->
		<uni-drawer :visible="list.showRigth" mode="right" @close="closeDrawer('right')">
			<view class="dis-p">
				<view class="disNav">
					{{i18n.select}}
				</view>
				<scroll-view :scroll-top="list.scrollTop" scroll-y="true" class="scroll-Y">
					<view class="dis-center" v-for="(item,index) in list.activeList" :key="index">
						<view class="dis-left">
							<view class="price">
								¥<text class="num">{{item.data.money}}</text>{{i18n.voucher}}
							</view>
							<view class="condition">
								{{i18n.use}}
							</view>
						</view>
						<view class="dis-right">
							<view class="image-wrapper">
								<view class="icon icon-xuanze checkbox" :class="{checked: item.data.checked}" @click="discheck('item', index)"></view>
							</view>
						</view>
					</view>

				</scroll-view>
				<button type="default" @click="hide" class="disclose" style="background:#e84c8e;color: write;">{{i18n.bind}}</button>
			</view>
		</uni-drawer>
		<!-- 左侧侧边栏 -->
		<uni-drawer :visible="list.showLeft" mode="left" @close="closeDrawer('left')">
			<view class="dis-p">
				<view class="disNav" style="padding-left: 30upx;font-size: 35upx;">
					{{i18n.type}}：
				</view>
				<scroll-view scroll-y class="cate-list" @touchmove="handletouchmove" @touchstart="handletouchstart" @touchend="handletouchend">
					<view class="dis-p">
						<view v-if="list.navActive==1">
							<view v-for="(item,index) in list.typeList" :key="index" class="cate-item b-b" :class="{active: item.cls==list.activeId}"
							 @click="changeCate(item,index)">
								<view class="text">
									{{item.title}}
								</view>
							</view>
						</view>
						<view v-else>
							<view style="height: 800upx;">
								<view v-for="(row,index) in list.typeList[list.navIndex].child" :key="index" class="cate-item b-b" :class="{active: row.cls==list.activeId}"
								 @click="changeCate(row,index)">
									<view class="text">
										{{row.title}}
									</view>
								</view>
							</view>
							<button type="default" @click="upper" class="disclose" style="background:#e84c8e;color: write;">返回上一层</button>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box.vue';
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import api from '@/common/index.js';
	import over from '@/components/over.vue';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	var eindex = {
		flag: 0,
		mindex: -1,
		lastX: 0,
		lastY: 0,
		text: 0,
		navIndex: 0,
		typeList: [],
		activeId: "",
		downNum: '',
		cartdata: [],
		activeClass: 0,
		cartList: [],
		scrollTop: 0,
		total: 0, //总价格
		allCount: [],
		navList: [],
		navListRight: [],
		typeId: "",
		windowHeight: 0,

		spnum: 0,
		showRigth: false,
		showLeft: false,
		activeList: [],
		disnum: 0,
		distext: '请选择代金券',
		filterIndex: 0,
		priceOrder: 0, //1 价格从低到高 2价格从高到低
		aniClass: '-1',
		page: 1,
		pageSize: 20,
		type: 'add',
		isShow: false,
		navActive: 1,
		listId: -1,
		navStatus: false,
		onPull: 1,
		loadingType: 'more', //加载更多状态
		sptyp: ''
	}
	export default {
		components: {
			uniNumberBox,
			uniDrawer,
			over,
			imglazy,
			uniLoadMore,
			uniNavBar
		},
		data() {
			return {

				list: {
					flag: 0,
					mindex: -1,
					lastX: 0,
					lastY: 0,
					text: 0,
					navIndex: 0,
					typeList: [],
					activeId: "",
					downNum: '',
					cartdata: [],
					activeClass: 0,
					cartList: [],
					scrollTop: 0,
					total: 0, //总价格
					loadingType: 'more', //加载更多状态
					page: 1,
					pageSize: 20,
					type: 'add',
					allCount: [],
					navList: [],
					navListRight: [],
					typeId: "",
					windowHeight: 0,
					sptyp: '',
					spnum: 0,
					showRigth: false,
					showLeft: false,
					activeList: [],
					disnum: 0,
					distext: '请选择代金券',
					filterIndex: 0,
					priceOrder: 0, //1 价格从低到高 2价格从高到低
					aniClass: '-1',
					isShow: false,
					navActive: 1,
					listId: -1,
					navStatus: false,
					onPull: 1,
				}
			};
		},
		onLoad() {

		},
		onShow() {
			let that = this
			const params = uni.getStorageSync('userinfo');
			if (!params) {
				this.$store.dispatch('showLogin');
				return false;
			}
			api.load(this.$t('index').loadmsg)
			setTimeout(function() {
				eindex.page = 1;
				eindex.onPull = 1;
				eindex = that.list;
				eindex.navList = [];
				eindex.navListRight = [];
				eindex.cartList = [];
				eindex.empty = false;
				that.list = eindex;
				eindex.loadingType = "more";
				that.distext = that.$t('cart').select;
				that.loadData();
			}, 400)
		},

		computed: {
			i18n() {
				return this.$t('cart');
			}
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
			eindex.onPull = 1;
			eindex.page = 1;
			eindex.type = 'refresh';
			this.loadData();
		},
		//加载更多
		onReachBottom() {
			if (eindex.onPull == 1) {
				eindex.type = 'add';
				this.loadData();
			}

		},
		methods: {
			// 分类
			handletouchmove: function(event) {
				// console.log("开始移动")
				if (eindex.flag !== 0) {
					return;
				}
				let currentX = event.touches[0].pageX;
				let currentY = event.touches[0].pageY;
				let tx = currentX - eindex.lastX;
				let ty = currentY - eindex.lastY;
				let text = '';
				eindex.mindex = -1;
				//左右方向滑动
				if (Math.abs(tx) > Math.abs(ty)) {
					if (tx < 0) {
						text = '向左滑动';
						eindex.flag = 1;
						this.hide();
						// this.getListleft(); //调用列表的方法
					} else if (tx > 0) {
						text = '向右滑动';
						eindex.flag = 2;
						this.show("left");
						// this.getListright(); //调用列表的方法
					}
				}
				//上下方向滑动
				else {
					if (ty < 0) {
						text = '向上滑动';
						eindex.flag = 3;
						//  this.getList();  //调用列表的方法
					} else if (ty > 0) {
						text = '向下滑动';
						eindex.flag = 4;
					}
				}
				//将当前坐标进行保存以进行下一次计算
				eindex.lastX = currentX;
				eindex.lastY = currentY;
				eindex.text = text;

			},
			handletouchstart: function(event) {
				// console.log("开始触摸")
				eindex.lastX = event.touches[0].pageX;
				eindex.lastY = event.touches[0].pageY;
			},
			handletouchend: function(event) {
				// console.log("结束")
				eindex.flag = 0;
				eindex.text = '没有滑动';
			},
			loadStatus(item) {
				// console.log(item)
				eindex.total = item.amt;

				let list = eindex.cartList;

				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				eindex.loadingType = 'nomore';
			},
			// 商品分类点击
			changeCate(item, index) {
				let that = this;
				eindex.page = 1;
				eindex.navStatus = true;
				eindex.onPull = 2;
				// 父类
				if (item.cls == "cn") {
					let childList = item.cn
					childList.forEach(function(item, index) {
						item.checked = true;
						item.image = that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/80';
						item.allNum = parseInt(item.spec);
						item.num = parseInt(item.num)
					});

					eindex.cartList = childList;
					eindex.listId = item.cls;
					that.loadStatus(item);
					that.hide();
					return false;
				}
				if (item.cls == "zhe") {
					let childList = item.zhe
					childList.forEach(function(item, index) {
						item.checked = true;
						item.image = that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/80';
						item.allNum = parseInt(item.spec);
						item.num = parseInt(item.num)
					});
					eindex.cartList = childList;
					eindex.listId = item.cls;
					that.loadStatus(item);
					that.hide();
					return false;
				}
				if (eindex.navActive == 1) {
					let childList = item.goods
					childList.forEach(function(item, index) {
						item.checked = true;
						item.image = that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/80';
						item.allNum = parseInt(item.spec);
						item.num = parseInt(item.num)
					});
					eindex.cartList = childList;
					eindex.listId = item.cls;
					if (item.child != undefined) {
						if (item.child) {
							eindex.navActive = 2;
						}
						eindex.navIndex = index;
					}
					that.loadStatus(item);
					that.hide();
				} else {
					// 子类
					let childList = item.goods
					childList.forEach(function(item, index) {
						item.checked = true;
						item.image = that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/80';
						item.allNum = parseInt(item.spec);
						item.num = parseInt(item.num)
					});
					eindex.cartList = childList
					eindex.listId = item.clss;
					if (item.child == undefined) {
						if (item.child) {
							eindex.navActive = 2;
						}
						// eindex.navIndex = index;
					}
					that.loadStatus(item);
					that.hide();
				}


			},
			upper() {
				eindex.navActive = 1;
				eindex.activeId = -1;
				this.list = eindex;
			},
			// 管理
			actionSheetTap() {
				let that = this;
				uni.showActionSheet({
					title: that.$t('cart').regulate,
					itemList: that.$t('cart').sheet,
					cancelText: '取消',
					success: (e) => {
						let i = e.tapIndex;
						eindex.listId = -1;
						eindex.navActive = 1
						if (i == 0) {
							eindex.page = 1;
							eindex.onPull = 1;
							eindex.cartList = [];
							eindex.downNum = "desc"
							that.loadData();
							api.load(that.$t('index').loadmsg)
						}
						if (i == 1) {
							eindex.page = 1;
							eindex.onPull = 1;
							eindex.cartList = [];
							eindex.downNum = "asc"
							that.loadData();
							api.load(that.$t('index').loadmsg)
						}
						if (i == 2) {
							that.clearCart();
						}
						that.list = eindex;
					}
				})
			},

			//请求数据
			loadData() {

				if (eindex.loadingType != "nomore") {
					eindex.empty = false;
					eindex.over = false;
					eindex.activeClass = 0;
					let that = this;
					let params = {
						downNum: eindex.downNum,
						page: eindex.page
					}
					that.$ajax.cartData(params).then(res => {
						that.allPage(res);
					})
				}

			},
			// 分页
			allPage(res) {
				let that = this;
				eindex.cartdata = res;
				let cartList = res.list; //商品列表
				let navListRight = res.hd_list; //分类
				let navList = res.cate;
				let classifyList = [] // 创建商品分类列表

				// 当商品为空时
				if (res.other.totalpage == 0) {
					eindex.loadingType = "nomore";
					eindex.empty = true;
					eindex.cartList = [];
					eindex.navList = [];
					eindex.total = 0;
					eindex.disnum = 0;
					eindex.spnum = 0;
					eindex.sptyp = 0;
					eindex.distext = that.$t('cart').select;
					let arry = '';
					uni.setStorageSync('getlist', arry);
					that.list = eindex;
					uni.hideLoading();
					return false;
				}

				// 添加图片
				eindex.spnum = 0;
				eindex.sptyp = res.sptyp;
				cartList.forEach(function(item, index) {
					item.checked = true;
					item.image = that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/80';
					item.allNum = parseInt(item.spec);
					item.num = parseInt(item.num);
					eindex.spnum = eindex.spnum + item.num
				});
				// 加载状态
				eindex.loadingType = parseInt(res.other.page) > parseInt(res.other.totalpage) ? 'nomore' : 'more';

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
					eindex.cartList = [];
					uni.stopPullDownRefresh();
					eindex.page = eindex.page + 1;

					if (eindex.loadingType === 'nomore') {
						that.list = eindex;
						return;
					}
					eindex.loadingType = 'loading';
				}
				// 当前页面小于20条
				if (cartList.length < 20) {
					eindex.loadingType = 'nomore';
				}
				// 导航列表
				navListRight.forEach(function(item, index) {
					item.title = item.huodong_name;
					item.cls = item.huodong;
					navList.push(item)
				})

				// if (classifyList.length == 0) {
				// 	eindex.cartList = cartList; //全部商品
				// } else {
				// 	eindex.cartList = classifyList; //分类商品
				// }

				eindex.cartList = eindex.cartList.concat(cartList);
				eindex.over = true;
				eindex.typeList = res.cate;
				if (res.other.page == 1) {


					eindex.total = res.spprice;
				}
				// console.log(eindex.cartList)
				uni.setStorageSync('getlist', cartList);
				// that.calcTotal(); //计算总价
				// that.disData();
				uni.hideLoading();
				that.list = eindex
			},
			//详情页
			navToDetailPage(item) {
				console.log(item)
				if (item.huodong == "zhe") {
					uni.navigateTo({
						url: `/pages/product/product?productId=${item.item_no}&num=${item.price}`
					})
				} else {
					uni.navigateTo({
						url: `/pages/product/product?productId=${item.item_no}`
					});
				}

			},
			// 商品分类
			changenav(item, index) {
				let list = uni.getStorageSync('getlist');
				let typeId = item.cls;
				eindex.typeId = item.cls;

				eindex.activeClass = index;
				if (typeId == "默认") {
					eindex.cartList = list;

				} else {
					let navItem = [];
					list.forEach(function(data, j) {
						if (parseInt(typeId) >= 0) {
							if (data.cls_id === typeId) {
								navItem.push(data)
							}
						} else {
							if (data.huodong == typeId) {
								navItem.push(data)
							}
						}
					})
					eindex.cartList = navItem;

				}
				this.list = eindex;
				// this.calcTotal(item)
			},
			//优惠券选中状态处理
			discheck(type, index) {
				// let disList = eindex.activeList;
				// // 当优惠券有多张时
				// let that = this;
				// if (disList.length != 1) {
				// 	disList.forEach(function(item, index) {
				// 		item.data.checked = false
				// 	})
				// }
				// if (type === 'item') {
				// 	if (eindex.total >= eindex.activeList[index].data.money) {
				// 		eindex.activeList[index].data.checked = !eindex.activeList[index].data.checked;
				// 		eindex.distext = that.$t('cart').uesText + eindex.activeList[index].data.money + that.$t('cart').voucher;
				// 		that.disPrice();
				// 	} else {
				// 		that.$api.msg("总金额不小于优惠金额！")
				// 	}
				// }
			},
			// 修改商品数量
			bindChange(data) {

				let that = this;
				let info = eindex.cartList[data.index];
				info.num = data.number
				this.calculate();
			},
			// 计算商品价格
			calculate() {
				let params = {
					downNum: eindex.downNum,
					page: eindex.page
				};
				let that = this;
				that.$ajax.cartData(params).then(res => {
					let cartList = eindex.cartList; //商品列表
					eindex.spnum = 0;
					cartList.forEach(function(item, index) {
						eindex.spnum = eindex.spnum + item.num;

					});
					eindex.sptyp = res.sptyp;
					eindex.total = res.spprice
				})
			},
			//单件删除
			deleteCartItem(item, index) {
				let that = this;
				let params = {
					id: item.cls_id,
					item_no: item.item_no
				}
				that.$ajax.cartDele(params).then(res => {
					if (res.result == "success") {
						that.$api.msg(that.$t('index').msg2);
						eindex.aniClass = index;
						eindex.cartList.splice(index, 1);
						this.calculate()
					} else {
						that.$api.msg(res.msg);
					}
					if (eindex.cartList.length == 0) {
						eindex.cartList = [];
						eindex.navList = [];
						eindex.total = 0;
						eindex.disnum = 0;
						eindex.spnum = 0;
						eindex.sptyp = 0;
						eindex.listId = -1;
						that.loadData();

						eindex.distext = that.$t('cart').select;

						that.list = eindex;
						return false;
					}

					uni.hideLoading();
				})
			},
			//清空
			clearCart() {
				let that = this;
				const user = uni.getStorageSync('userinfo');
				uni.showModal({
					content: that.$t('cart').hint,
					cancelText: that.$t('index').cancel,
					confirmText: that.$t('index').confirm,
					success: (e) => {
						if (e.confirm) {
							that.$ajax.cartAlldele(user).then(res => {
								eindex.cartList = [];
								eindex.navList = [];
								that.loadData();
								eindex.empty = true;

								eindex.total = 0;
								eindex.disnum = 0;
								eindex.spnum = 0;
								eindex.sptyp = 0;
								// that.disPrice();
								eindex.distext = that.$t('cart').select;

								that.list = eindex;
							})

						}
					}
				})

			},

			// 使用代金券
			disPrice() {
				// // 计算优惠金额
				// let that = this;
				// let dislist = eindex.activeList;
				// dislist.forEach(function(item, index) {
				// 	// 当优惠券被选中时
				// 	if (item.data.checked == true) {

				// 		//当总额大于优惠券金额时
				// 		if (eindex.total >= item.data.money) {
				// 			console.log(item.data.money);
				// 			let num = eindex.total - item.data.money
				// 			eindex.disnum = Number(num.toFixed(2));
				// 			eindex.distext = that.$t('cart').uesText + eindex.activeList[index].data.money + that.$t('cart').voucher;
				// 			that.list = eindex;
				// 		} else {
				// 			//当总额小于优惠券金额时，关闭优惠券
				// 			that.$api.msg("总金额不小于优惠金额！");
				// 			eindex.distext = '请选择优惠券';
				// 			item.data.checked = false;
				// 			that.list = eindex;
				// 		}
				// 	}
				// })
			},
			//提交购物车
			createOrder() {

				let that = this;
				let params = {
					src: "APP",
					coupon_id: "0"
				};
				if (eindex.listId != "" && parseInt(eindex.listId) >= 0) {
					params.cls = eindex.listId
				}
				// 获取选中代金券
				let dislist = eindex.activeList;
				dislist.forEach(function(item, index) {
					console.log(item.data.checked);
					if (item.data.checked == true) {
						params.coupon_id = item.data.coupon_id;
					}
				})
				uni.showModal({
					content: that.$t('cart').hint2,
					cancelText: that.$t('index').cancel,
					confirmText: that.$t('index').confirm,
					success: (e) => {
						if (e.confirm) {
							that.$ajax.cartJiesuan(params).then(res => {
								console.log(res)

								that.$api.msg(that.$t('index').msg3);
								eindex.typeId = "";
								eindex.cartList = [];
								eindex.navList = [];
								eindex.empty = true;
								eindex.navActive = 1;
								eindex.total = 0;
								eindex.disnum = 0;
								eindex.spnum = 0;
								eindex.sptyp = 0;
								eindex.distext = that.$t('cart').select;

								let disParams = {
									code: res.code,
									id: params.id
								};

								that.loadData();
								uni.navigateTo({
									url: '/pages/cart/success/success?sn=' + res
								})
								// 代金券使用
								if (typeof(res) == "object") {
									that.disStatus(disParams);
								}

							})
						}
					}
				})


			},
			// 修改代金券状态
			disStatus(params) {
				api.post("/index.php/Home/Coupon/useconpon", params, function(res) {

				})
			},
			// 修改侧边栏状态
			show(e) {
				if (e === 'left') {
					eindex.showLeft = true
				} else {
					eindex.showRigth = true
				}
				this.list = eindex
			},
			// 关闭侧边栏
			hide() {
				eindex.showLeft = false
				eindex.showRigth = false

			},
			closeDrawer(e) {
				if (e === 'left') {
					eindex.showLeft = false
				} else {
					eindex.showRigth = false
				}

			},
			// 获取代金券列表
			disData() {
				let that = this;
				eindex.activeList = [];
				that.$ajax.dis().then(res => {
					let list = [];
					let allList = res;
					allList.forEach(function(item, index) {
						item.data.checked = false;
						if (item.data.type.expire == 0) {
							if (item.data.type.not_used == 0) {
								list.push(item)
							}
						}
					})
					eindex.activeList = list;
				})
			},
			//swiper 切换
			changeTab(e) {
				this.show('left')
			},
		},
		onNavigationBarButtonTap(e) {
			eindex.showRigth = !eindex.showRigth;
			this.list = eindex;
		},
		// 触发返回键
		onBackPress() {
			if (this.showRigth || this.showLeft) {
				this.hide();
			}
			let main = plus.android.runtimeMainActivity();
			plus.android.runtimeMainActivity();
			plus.runtime.quit = function() {
				main.moveTaskToBack(false);
			};
			uni.closeSocket();
			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
			});
			plus.nativeUI.toast = (function(str) {
				if (str == '再按一次退出应用') {
					main.moveTaskToBack(false);
					return false;
				} else {
					uni.showToast({
						title: '再按一次退出应用',
						icon: 'none',
					})
				}
			});
		},
	}
</script>

<style lang='scss'>
	@font-face {
		font-family: icon;
		font-weight: normal;
		font-style: normal;
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQAAAsAAAAACMAAAAO0AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqFAIQuATYCJAMQCwoABCAFhG0HQxubBxHVm7vIfizGtgjaL1BFE+3NBAHp1Hv925EhYatMToEmBJgyGcocYGy7txvBBmhPBZKWtkV6K2npIxapb137yU4MGHsNgP//XuVk67fgvBaLy38/e74TGnNTTgDDWwM0R8fmkrUgFfQusHMI1Ork6xCAk554ETNmLViBjiLYJwBxYO/uregtG2qGEOhG+8hVhbiKDV07pz0EruS/L74wWuigYZMER5fsmrmDKe+Gvv8kA1aADamD5P1hQLsFEvACCsSeUc82ZBn3InE62YrxgB5iDfY1d/v9J8tixbXodP6XBxoCCcJOoHMTa6xFcsfksQQavL8tgYD3n2xIZCiDvjn5BEQkshI0Gtbq7li3O6Zz55jwi/sfP17x5MnKZ89WP326dsfN88aq28HSC56Vu+9cKA7sH0VzJGpWYeeip20mudjlulDaTaSUOJ3ni+YEM0tbO9XNxekQSCuqG1jeUJIhDt/OCGZ2Wn2ndXSJZ+Wt8kBZwoqbdeA1Jt+6YGuCx9Gc7+GAZ81WWiNRX1zOKXt4NYHiAa7CUiGCJQOdeUUHJD2OoVl9LhRRSGHmv9A99d9UibpD1dxTM0xTdsh7uNS3Yu7C1gGtzW1t/ZPweGr60OGt/c8MwLJy5PPnMickCSUdddb0e+rPH7WZZMQqPsG4dy9t4U4vOoVtL+2h/AmhXcbPb0eMF8aRbz+Nl56fIT+e9od+emJ7hX94f4aSk80t3iOZIBThtYdX+r2HzV1WopWcHE5su81EM0EW7nzR2Mb1vLS8jdiMI97694T2UW+Me/6ik7nk5ZYDlW95ucRcaRhHQFZHjUQ8e2jLC4M9X80WAKzd8oEWBvN9GRqm/DX+hoTyfSs3R0/4rrsUAC+qZ32kBmu3Qgbg+5WL5X8EubBPucrArpStimVeUpGF/u61gBMn8PWnIY63+zB4xAQIg6cGjQh6gESnP02xvGDDxViwozMZnAxj9m0X8RxDIpQDGMopAEEMlaARxT2QxPCIplhvwIbBN7ATIyQ4WSXiH+lC3Qu/OxAKRg3yB16NxURO3hWlV7SvJKipzPlPpMWHoKvbbuqCBWkfJ5a37ZkNGBoznOFtmNIIE40BFdeOeRqaxox9U63GXO04EApGDcgf4NVYTDqcd72fv6J9JUEzPR3pJ9LiFwc6aloB7aIrop7nsnp52x5mw7sMjRk4I8YUxkdgGt8UUHGN2xCdBhoaZKS6+viG/AqPAE6CVyihCSmUsLFKeonyx3WGu5VVfclXFQ==');
	}

	page,
	.container {
		height: 100%;
	}

	/* 隐藏滚动条 */
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.nav-heard {
		position: relative;
		height: 110px;
		text-align: left;

		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
		}

		.heard-title {
			position: absolute;
			bottom: 0;
			width: 100%;

			view {
				font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			}

			.title {
				font-weight: bold;
				font-size: 33upx;
				color: white;
				padding: 5upx 30upx;
			}

			.bottom {
				height: 80upx;
				color: white;
				padding: 5upx 30upx;
				display: flex;
				width: 100%;
				justify-content: space-between;

				.left {
					line-height: 80upx;
					font-weight: bold;
					font-size: 33upx;
				}

				.right {
					line-height: 80upx;
				}
			}
		}
	}

	.icon {
		font-family: "icon" !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.swiper-box {
		height: calc(100% - 10upx);
	}

	.list-scroll-content {
		height: 100%;
	}

	.icon-xuanze:before {
		content: "\e696";
		font-size: 22px;
	}

	.icon-xuanze1:before {
		content: "\e52a";
	}

	.icon-guanli:before {
		content: "\e6e9";
		font-size: 20px;
		line-height: 1.8;
		color: white;
	}

	.floor-info {
		display: flex;
		background: white;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
		padding-left: 30upx;
	}



	.floor-left {
		flex: 1;
	}

	.container {
		padding-bottom: 134upx;


	}


	/* 空白页 */
	.empty {

		width: 100%;
		height: 60vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 20%;
		background: #fff;

		image {
			width: 240upx;
			height: 160upx;
			margin-bottom: 30upx;
		}

		.empty-tips {
			display: flex;
			font-size: $font-sm+2upx;
			color: $font-color-e1;

			.navigator {
				color: $font-color-e1;

			}
		}
	}

	/* 购物车列表项 */
	.cart-item {
		display: flex;
		position: relative;
		margin: 30upx 30upx;
		padding: 15upx 30upx;
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .2);
		border-radius: 10upx;
		transition: opacity 0.2s linear;

		.image-wrapper {
			width: 135upx;
			height: 130upx;
			flex-shrink: 0;
			position: relative;
			display: flex;
			flex-direction: row;

			image {
				border-radius: 8upx;
			}
		}

		.lazy {
			width: 135upx;
			height: 130upx;
			flex-shrink: 0;
			position: relative;
			display: flex;
			flex-direction: row;
		}

		.checkbox {
			position: absolute;
			left: -16upx;
			top: -16upx;
			z-index: 8;
			font-size: 44upx;
			line-height: 1;
			padding: 4upx;
			color: $font-color-disabled;
			background: #fff;
			border-radius: 50px;

		}

		.item-right {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position: relative;
			padding-left: 30upx;

			.item-buttom {
				display: flex;
				justify-content: left;
				margin-top: 30upx;
			}

			.title,
			.price {
				font-size: $font-sm;
				color: $font-color-dark;
				height: 40upx;
				line-height: 40upx;
			}


			.attr {
				font-size: $font-sm + 2upx;
				color: $font-color-light;
				height: 50upx;
				line-height: 50upx;
			}

			.price {
				height: 50upx;
				line-height: 50upx;
				color: #fa436a;

			}
		}

		.del-btn {
			padding: 4upx 10upx;
			font-size: 34upx;
			height: 50upx;
			color: $font-color-light;
		}
	}

	/* 底部栏 */
	.action-section {
		/* #ifdef H5 */
		margin-bottom: 100upx;
		/* #endif */
		position: fixed;
		left: 30upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 690upx;
		height: 100upx;
		padding-right: 30upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
		border-radius: 16upx;

		.checkbox {
			width: 33%;
			height: 52upx;
			position: relative;

			image {
				width: 52upx;
				height: 100%;
				position: relative;
				z-index: 5;
			}
		}

		.clear-btn {

			width: 120rpx;
			text-align: center;
			position: absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			height: 52upx;
			line-height: 52upx;
			font-size: $font-base;
			color: #fff;
			background: $font-color-disabled;
			border-radius: 20upx;
			opacity: 0;
			transition: .2s;

			&.show {
				opacity: 1;
				padding: 0 20upx;
			}
		}

		.total-box {

			flex: 1;
			display: flex;
			flex-direction: column;
			text-align: right;
			padding-right: 40upx;

			.price {

				font-size: $font-sm;

				.num {
					color: $uni-color-primary;
					font-size: $font-lg;
				}

				.m-num {
					font-size: $font-sm;
					text-decoration: line-through;
					color: $font-color-light;
					margin-left: 8upx;
				}
			}

			.coupon {
				font-size: $font-sm;
				color: $font-color-light;

				text {
					color: $font-color-dark;
				}
			}
		}

		.confirm-btn {
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: $font-base + 2upx;
			background: $font-color-e1;
			box-shadow: 1px 2px 5px $font-color-e1
		}
	}

	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked {
		color: $font-color-e1;
	}

	/* 顶部导航 */
	.floor-list {
		width: 90%;
		white-space: nowrap;
		box-shadow: 0 2upx 10upx rgba(0, 0, 0, .06);
		background-color: white;

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

			position: relative;

			.title {
				line-height: 80upx;
				padding: 0 10upx;
				height: 100%;
				margin: 0 20upx;
				text-align: center;
			}

			.active {
				color: $font-color-e1;
				border-bottom: 4upx solid $font-color-e1;


			}

		}


	}

	.cart-top {
		display: flex;
		padding: 15upx 40upx;
		justify-content: space-between;
	}

	.cart-top-right {
		font-weight: bold;
		font-size: 30upx;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
	}

	.cart-top-left {
		background-color: $image-bg-color;
		border-radius: 20upx;
		padding: 0 20upx;
		color: $back-b1;
	}



	%section {
		text-align: center;


	}

	%flex {
		display: flex;
	}


	.dis-center {
		@extend %flex;
		box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.1);
		margin: 20upx 0;
		height: 120upx;
	}



	.dis-left {
		@extend %section;
		width: 80%;
		color: white;

		background-image: linear-gradient(135deg, #a0dde6 15%, #e84c8e 90%);


		.dis-time {
			font-size: 25upx;
			margin-bottom: 1px;

			text {
				color: #999999;
				font-family: 'Courier New', Courier, monospace;
			}
		}

		.price {

			font-size: 25upx;

			.num {

				font-size: 40upx;

			}
		}

		.condition {

			color: white;
		}
	}

	.dis-right {
		@extend %section;
		width: 20%;


		.image-wrapper {
			flex-shrink: 0;
			position: relative;
			display: flex;
			flex-direction: row;

		}

		.checkbox {
			position: absolute;
			top: 40upx;
			left: 20upx;
			z-index: 8;
			font-size: 37upx;
			line-height: 1;
			padding: 4upx;
			color: $font-color-disabled;
			background: #fff;
			border-radius: 50px;
		}

		.checked {
			color: $font-color-e1;
		}





	}

	.dis-but {

		width: 120upx;
		height: 40upx;
		line-height: 40upx;
		background: #3ecdc0;
		color: white;
		text-align: center;
		border-radius: 30upx;
		font-size: 25upx;
		margin-right: 10upx;

	}

	.disTitle {
		color: $font-color-e1;
	}

	.disNav {
		font-size: 25upx;
		text-align: left;
		height: 30upx;
		line-height: 30upx;
		margin: 10upx 0;
		color: $font-color-e1;
	}

	.dis-p {
		padding: 100upx 15upx 0upx 15upx;

		.disclose {
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: $font-base + 2upx;
			background: $font-color-e1;
			box-shadow: 1px 2px 5px $font-color-e1;
			color: white;

		}
	}

	.scroll-Y {
		height: 980upx;
		overflow-x: scroll;
	}

	.cate-list {
		display: flex;
		flex-direction: column;
		height: 980upx;


		.cate-item {
			display: flex;
			align-items: center;
			height: 90upx;
			font-size: 28upx;
			color: #555;
			position: relative;
			padding-left: 30upx;

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

	.leftdisclose {
		position: absolute;
		width: 100%;
		bottom: 0;
		padding: 0 38upx;
		margin: 0;
		border-radius: 100px;
		height: 76upx;
		line-height: 76upx;
		font-size: $font-base + 2upx;
		background: $font-color-e1;
		box-shadow: 1px 2px 5px $font-color-e1;
		color: white;
	}

	.cartHint {
		padding: 5upx 30upx;
		display: flex;
		width: 100%;
		background-color: #fffbe8;

		.txt {
			font-size: 26upx;
			color: #999999;
		}

	}

	.slide {
		width: 55upx;
		height: 50upx;

	}

	.disicon {
		width: 45upx;
		height: 45upx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 80;
	}
</style>
