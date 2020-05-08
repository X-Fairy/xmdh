<template>
	<view class="container">

		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<view class="wx-header">
				<input class="ser-input" type="search" :placeholder="i18n.search" disabled="disabled" @click="navSearch" />
				<view class="icon scan" @click="onScan"></view>
			</view>
		</view>
		<!-- #endif -->
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<uni-nav-bar theme="1" backHeight="height: 209px;" class="bg" v-if="index.banner" />
			<!-- <view class="bg"></view> -->
			<swiper class="carousel" circular @change="swiperChange" :autoplay="swiperStatus">
				<swiper-item v-for="(item, index) in index.banner" :key="index" class="carousel-item" @click="bindcarouse(item)">
					<image :src="item.pic" lazy-load="true" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{index.banner.length}}</text>
			</view>
		</view>

		<!-- 分类 -->
		<view class="cate-section">
			<view class="cate-item animated bounceIn" v-for="(item, index) in index.typelist" :key="index" @click="navType(item.id)">
				<view class='grid-icon' :style="{'background-color':item.color}">
					<image mode="scaleToFill" :src="item.img" style="width:100%;height:100%" lazy-load="true" />
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 直播 -->
		<view class="live" @tap="tolive">
			<image src="http://web.xmcpcn.com//img/banner/dhbanner.jpg" mode=""></image>
		</view>
		<!-- 双十一 -->
		<view class="ms-content" v-if="index.miaosha!=null">
			<view class="top">
				<view class="title">
					{{index.miaosha.title}}<text class="dit">{{index.miaosha.screen=="current"?"正在":"即将"}}</text>秒杀
				</view>
				<view class="ms-more" @click="bindms()" v-if="index.countStatus">
					<uni-countdown :show-day="false" :hour="index.hour" :minute="index.min" :second="index.afterMin" color="white"
					 background-color="#e60d14" border-color="#e60d14" @nowTime="overTime()" />
				</view>
			</view>
			<view class="bottom">
				<view class="item" v-for="(item,index) in divList" :key="index" @click="bindms(item)">
					{{item.title}}
				</view>
			</view>
		</view>
		<!-- 公告 -->
		<view class="seckill-section m-t activity" v-if="index.gg!=null">
			<view class="uni-swiper-msg">
				<view class="uni-swiper-msg-icon" style="width: 50uxp;height: 50upx;">
					<image src="../../static/tip.png" mode="widthFix" style="width: 50uxp;height: 50upx;"></image>
				</view>
				<swiper vertical="true" autoplay="true" circular="true" interval="3000">
					<swiper-item v-for="(item, index) in index.gg" :key="index" @click="bindActivity(item)">
						<navigator>{{item.title}}</navigator>
					</swiper-item>
				</swiper>

			</view>
		</view>


		<!-- 新品上线 -->
		<view class="f-header m-t" @click="navNew">
			<image src="/static/temp/h3.png"></image>
			<view class="tit-box">
				<text class="tit">{{i18n.news}}</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="seckill-section">

			<scroll-view class="floor-list" scroll-x>

				<view class="scoll-wrapper">
					<view v-for="(item, index) in index.newList" :key="index" class="floor-item animated bounceInRight" @click="navToDetailPage(item.item_no)">
						<imglazy :url="item.image"></imglazy>
						<text class="title clamp">{{item.item_name}}</text>
						<text class="price" style="font-size: 24upx;">{{i18n.p1}}￥{{item.price}}</text>
						<view class="price" style="font-size: 24upx;">{{i18n.p2}}￥{{item.ling}}</view>
					</view>
					<view class="more" @click="navNew">
						<text>{{i18n.all}}</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>


		<!-- 最近补货 -->
		<view class="f-header  m-t" @click="navreplenishment">
			<image src="/static/temp/h2.png"></image>
			<view class="tit-box">
				<text class="tit">{{i18n.rep}}</text>

			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="seckill-section">
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in index.mentList" :key="index" class="floor-item animated bounceInRight" @click="navToDetailPage(item.item_no)">
						<imglazy :url="item.image"></imglazy>

						<text class="title clamp">{{item.item_name}}</text>
						<text class="price" style="font-size: 24upx;">{{i18n.p1}}￥{{item.price}}</text>
						<view class="price" style="font-size: 24upx;">{{i18n.p2}}￥{{item.ling}}</view>
					</view>
					<view class="more" @click="navreplenishment">
						<text>{{i18n.all}}</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 地区畅销 -->
		<view class="f-header  m-t" @click="navsell">
			<image src="/static/temp/h8.png"></image>
			<view class="tit-box">
				<text class="tit">{{i18n.sell}}</text>

			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="seckill-section">
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in index.seckillList" :key="index" class="floor-item" @click="navToDetailPage(item.item_no)">
						<imglazy :url="item.image" @click="navToDetailPage(item.item_no)"></imglazy>
						<text class="title clamp">{{item.item_name}}</text>
						<text class="price" style="font-size: 24upx;">{{i18n.p1}}￥{{item.price}}</text>
						<view class="price" style="font-size: 24upx;">{{i18n.p2}}￥{{item.ling}}</view>
					</view>
					<view class="more" @click="navsell">
						<text>{{i18n.all}}</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 一折特价 -->
		<view class="f-header  m-t" @click="navDis">
			<image src="/static/temp/h7.png"></image>
			<view class="tit-box">
				<text class="tit">{{i18n.dis}}</text>

			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="seckill-section">

			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in index.sellList" :key="index" class="floor-item" @click="navDisPage(item)">
						<imglazy :url="item.image"></imglazy>
						<text class="title clamp">{{item.item_name}}</text>
						<text class="price">￥{{item.price}}</text>
						<text class="m-price">￥{{item.base_price}}</text>
					</view>
					<view class="more" @click="navDis">
						<text>{{i18n.all}}</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>

		<!-- 猜你喜欢 -->
		<view class="f-header m-t">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">{{i18n.like}}</text>
				<text class="tit2">Guess You Like It</text>
			</view>
			<!-- <text class="yticon icon-you"></text> -->
		</view>
		<view class="guess-section">
			<view v-for="(item, index) in index.goodsList" :key="index" class="guess-item">
				<view @click="navToDetailPage(item.item_no)">
					<imglazy :url="item.image"></imglazy>
				</view>
				<view style="padding: 0 15upx;">
					<text class="title clamp">{{item.item_name}}</text>
					<view class="guess-right">
						<view class="price">{{i18n.p1}}:￥{{item.base_price}}</view>
						<view class="price">{{i18n.p2}}:￥{{item.ling}}</view>
					</view>
					<view class="guess-right">
						<uni-number-box class="step" :min="item.mini" :value="item.allNum" :step="item.mini" :index="index" @change="bindChange"></uni-number-box>
						<image src="../../static/cart.png" mode="" class="cart" @click="shopping(item)"></image>
					</view>
					<view class="circle" v-if="item.circleHidden">
						{{item.cnum}}
					</view>
				</view>
			</view>
		</view>
		<over></over>
		<!-- 	<model :moderSrc="index.tan.pic" close="/static/error_2.png" v-if="index.tan.status" @bindmodel="bindWeb" @hide="modelShow"></model> -->
		<model moderSrc="https://ximiphoto.oss-cn-hangzhou.aliyuncs.com/ggao/20191111.png?x-oss-process=style/yuan" close="/static/error_2.png"
		 v-if="index.tan.status" @bindmodel="bindWeb" @hide="modelShow"></model>
	</view>
</template>

<script>
	import api from '@/common/index.js';
	import uniNumberBox from '@/components/uni-number-box.vue';
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
	import over from '@/components/over.vue';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	import model from '@/components/uni-model';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	let num = 0
	let index = {
		banner: [],
		gg: null,
		promotionUrl: '',
		swiperLength: '',
		newList: [],
		mentList: [],
		sellList: [],
		seckillList: [],
		goodsList: [],
		typelist: [],
		height: 0,
		windowHeight: 0,
		tan: {
			status: false
		},
		msStatus: false,
		miaosha: null,
		hour: 0,
		min: 0,
		afterMin: 0,
		countStatus: false
	}

	export default {
		components: {
			uniNumberBox,
			uniCountdown,
			over,
			imglazy,
			uniCountdown,
			model,
			uniNavBar


		},
		data() {
			return {
				divList: [{
						title: "1折区",
						id: 1
					},
					{
						title: "2折区",
						id: 2
					},
					{
						title: "3折区",
						id: 3
					},
					{
						title: "4折区",
						id: 4
					},
					{
						title: "4.5折区",
						id: 4.5
					},
					{
						title: "5折区",
						id: 5
					}
				],
				swiperStatus: true,
				promotion: '',
				titleNViewBackground: '',
				swiperCurrent: 0,
				title: "滚动公告",
				over: false,
				backweb: true,
				placeholderSrc: '../../static/60x60.png',
				index: {
					banner: [],
					gg: null,
					promotionUrl: '',
					swiperLength: '',
					newList: [],
					mentList: [],
					sellList: [],
					seckillList: [],
					goodsList: [],
					typelist: [],
					height: 0,
					windowHeight: 0,
					tan: {
						status: false
					},
					msStatus: false,
					miaosha: null,
					hour: 0,
					min: 0,
					afterMin: 0,
					countStatus: false
				},
				list: [{
					img: 1,
					error: 2
				}, {
					img: 1,
					error: 2
				}],
				loadDATA1: false,
				allBack: ''
			};
		},

		computed: {
			i18n() {
				return this.$t("index");
			}
		},
		onLoad(option) {
			let that = this;
			setTimeout(function() {
				that.now()
			}, 300)
		},
		onShow(e) {
			let that = this;
			setTimeout(function() {
				const params = uni.getStorageSync('userinfo');
				if (!params) {
					that.$store.dispatch('showLogin');
					return false;
				}
				index.height = uni.getSystemInfoSync().windowHeight - index.tabBarHeight;
				index.windowHeight = uni.getSystemInfoSync().windowHeight;
				that.loadData();

			}, 300)
			if (that.$store.state.app == "2") {
				index.typelist = that.$t('categoryList_1').typelist;
				uni.setTabBarItem({
					index: 0,
					text: that.$t("index").tab1
				});
				uni.setTabBarItem({
					index: 1,
					text: that.$t("index").tab2
				});
				uni.setTabBarItem({
					index: 2,
					text: that.$t("index").tab3
				});
				uni.setTabBarItem({
					index: 3,
					text: that.$t("index").tab4
				});
			} else {
				index.typelist = that.$t('categoryList_0').typelist;
			}
		},

		methods: {
			loadData() {

				var that = this;
				let list_data = {
					page: 1,
					downNum: 20
				}
				let params = {
					type: 'app'
				}
				// 获取广告
				index.countStatus = false;
				that.$ajax.hIndex().then(res => {
					if (res == "非法进入") {
						return false;
					};
					let color
					// 轮播图
					let banner = res.gdgg_app;
					for (var i = 0; i < banner.length; i++) {
						let banner_img = that.$store.getters.imgShow + '/ggao/' + banner[i].pic + '?x-oss-process=style/yuan';
						banner[i].pic = banner_img;
						banner[i].background = "#d8262c"
					}
					if (res.color) {
						color = {
							backColor: res.color
						}
						let theme = uni.getStorageSync('theme');
						if (!theme) {
							uni.setStorageSync('theme', color);
						}

					}
					index.banner = banner;
					index.gg = res.gg;
					index.miaosha = res.miaosha;
					index.promotionUrl = res.app_promotion.url;
					index.swiperLength = banner.length;
					// 红包弹窗
					if (res.tan.pic == "") {
						res.tan.status = false;
					} else {
						res.tan.status = true;
					}
					index.tan = res.tan
					// 限时活动
					if (res.miaosha != null) {
						that.timeDifference(res.miaosha.now, res.miaosha.totime)
					}
				}).catch(function(error) {
					return false;
				})

				that.index = index;
			},
			now() {
				var that = this;
				let list_data = {
					page: 1,
					downNum: 20
				}
				let params = {
					type: 'app'
				}
				// 新品上线
				that.$ajax.hNew(list_data, params).then(res => {
					that.pageData(res, 'newList')
					uni.hideLoading();

				})
				// 最近补货
				that.$ajax.hBu(list_data, params).then(res => {
					that.pageData(res, 'mentList')
				})


				// 地区最畅销
				that.$ajax.hSale(list_data, params).then(res => {
					that.pageData(res, 'seckillList')

				})
				// 特惠商品
				that.$ajax.hDis(list_data, params).then(res => {
					that.pageData(res, 'sellList')

				})
				// 猜你喜欢
				that.$ajax.hLike().then(res => {
					that.pageData(res, 'goodsList')
					that.loadDATA1 = true
				})
				that.index = index;
			},
			// 比較時間
			timeDifference(startTime, endTime) {
				let date1 = this.$xm.formatDateTime(startTime);
				let date2 = this.$xm.formatDateTime(endTime);
				var oDate1 = new Date(date1);
				var oDate2 = new Date(date2);
				var s1 = oDate1.getTime(),
					s2 = oDate2.getTime();
				var total = (s2 - s1) / 1000;;
				// console.log(date1 + " or " + date2)

				var day = parseInt(total / (24 * 60 * 60)); //计算整数天数

				var afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数

				var hour = parseInt(afterDay / (60 * 60)); //计算整数小时数

				var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数

				var min = parseInt(afterHour / 60); //计算整数分

				var afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60; //取得算出分后剩余的秒数
				// console.log(day + ":" + hour + ":" + min + ":" + afterMin);

				index.hour = hour;
				index.min = min
				index.afterMin = afterMin;
				index.countStatus = true;
				this.index = index;
			},
			// 倒计时结束
			overTime() {
				this.loadData();
			},
			// 更新数据
			pageData(res, type) {
				let that = this;
				let banner = res.list;
				let list = [];
				let k = 6
				if (banner.length < 6) {
					k = banner.length;
				}
				if (type == "seckillList") {
					for (var i = 0; i < k; i++) {
						banner[i].image = that.$store.getters.imgShow + '/thumb/' + banner[i].item_no + '.jpg?x-oss-process=style/300'
						list.push(banner[i])
					};
				} else {
					for (var i = 0; i < k; i++) {
						banner[i].image = that.$store.getters.imgShow + '/thumb/' + banner[i].item_no + '.jpg?x-oss-process=style/300';
						banner[i].allNum = parseInt(banner[i].spec);
						banner[i].mini = parseInt(banner[i].spec);
						banner[i].circleHidden = false;
						if (banner[i].cnum != "0") {
							banner[i].circleHidden = true;
						}
						list.push(banner[i])
					};

				}
				switch (type) {
					case 'newList':
						index.newList = list || [];

						break;
					case 'mentList':
						index.mentList = list || [];
						break;
					case 'sellList':
						index.sellList = list || [];
						break;
					case 'seckillList':
						index.seckillList = list || [];
						break;
					case 'goodsList':
						index.goodsList = list || [];
				}

			},


			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				// this.titleNViewBackground = this.carouselList[index].background;
			},
			//详情页
			navToDetailPage(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/product/product?productId=${item}`
				})
			},
			//打折列表
			navDis() {
				uni.navigateTo({
					url: `/pages/product/list?listId=dis`
				})
			},
			// 新品上线
			navNew() {
				uni.navigateTo({
					url: `/pages/product/list?listId=new`
				})
			},
			//地区滞销
			navUnsala() {
				uni.navigateTo({
					url: `/pages/product/list?listId=Unsalable`
				})
			},
			// 最近补货
			navreplenishment() {
				uni.navigateTo({
					url: `/pages/product/list?listId=supplement`
				})
			},
			navsell() {
				uni.navigateTo({
					url: `/pages/product/list?listId=sell`
				})
			},
			// 倒计时结束
			timeup(e) {
				console.log(e)
				uni.showToast({
					title: '时间到'
				})
			},
			// 打折详情页
			navDisPage(item) {
				uni.navigateTo({
					url: `/pages/product/product?productId=${item.item_no}&num=${item.discount}`
				})
			},
			// 限时秒杀
			navSrckil() {
				let data = "http://172.21.8.129:8080/#/index"
				uni.navigateTo({
					url: `/pages/webview/webview?url=${data}&id=miaosha`
				})
			},
			//分类页
			navType(id) {
				uni.navigateTo({
					url: `/pages/product/list?listId=${id}`
				})
				// let params;
				// num=num+1;
				// if (num % 2 == 0) {
				// 	var color = "#";
				// 	for (var i = 0; i < 6; i++) {
				// 		color += (Math.random() * 16 | 0).toString(16);
				// 	}
				// 	params = {
				// 		backStatus: 2,
				// 		backColor: 'background:'+color+''
				// 	}
				// }else{
				// 	var color = "#";
				// 	for (var i = 0; i < 6; i++) {
				// 		color += (Math.random() * 16 | 0).toString(16);
				// 	}

				// 	params = {
				// 		backStatus: 1,
				// 		backColor: 'background-image:linear-gradient( 135deg, '+color+' 10%, #f140a4 100%)'
				// 	}
				// }
				// uni.setStorageSync('theme', params);
			},
			//总数量
			bindChange(data) {

				index.goodsList[data.index].allNum = data.number;
				this.index = index;
			},
			//添加购物车
			shopping(data) {
				let that = this;
				let item = data;
				that.$ajax.addShop(data).then(res => {
					if (res.result == "success") {
						that.$api.msg(that.$t('index').msg1);
						item.circleHidden = true;
						item.cnum = parseInt(item.cnum) + parseInt(item.allNum)
					} else {
						that.$api.msg(res.msg);
					}
				})
			},
			// 跳转搜索页面
			navSearch() {
				uni.navigateTo({
					url: `/pages/search/search`
				})
			},
			// 扫描商品
			onScan() {
				uni.scanCode({
					success: function(res) {
						uni.navigateTo({
							url: `/pages/product/product?productId=${res.result}`
						})
					}
				});
			},
			// 代金券
			loadDis() {
				api.post("/index.php/Home/Coupon/addconpon", "", function(res) {

				})
			},
			// 跳转外部链接
			navwebview(data) {

				uni.navigateTo({
					url: `/pages/webview/webview?url=${data}`
				})
			},
			// 关闭红包弹窗
			modelShow() {
				// console.log("关闭红包弹窗")
				index.tan.status = false;
				this.index = index;
			},
			// 直播
			tolive(){
				uni.navigateTo({
					url: `/pages/webview/webview?url=http://dh.xmvogue.com/live/#/live`
				})
			},
			// 秒杀跳转
			bindms(item) {				
				if (item) {
					uni.navigateTo({
						url: `/pages/webview/webview?url=https://dh.xmvogue.com/1111/#/index&dis=${item.id}`
					})
				} else {
					uni.navigateTo({
						url: `/pages/webview/webview?url=https://dh.xmvogue.com/1111/#/index`
					})
				}
			},
			// 红包弹窗
			bindWeb() {
				let data = index.tan.url.split("|");
				console.log(data)
				// 跳转文章
				if (data[0] == "Article") {
					uni.navigateTo({
						url: `/pages/Article/Article?id=${data[1]}`
					})
				};
				if (data[0] == "WEB") {
					uni.navigateTo({
						url: `/pages/webview/webview?url=${data[1]}`
					})
				}
				index.tan.status = false;
			},
			// 轮播图
			bindcarouse(data) {
				console.log(data);
				data.app_act = data.app_act.split("|");
				// 跳转文章
				if (data.app_act[0] == "Promotion") {
					uni.navigateTo({
						url: `/pages/product/list?listId=${data.app_act[1]}`
					})
				}
				// 跳转文章
				if (data.app_act[0] == "Article") {
					uni.navigateTo({
						url: `/pages/Article/Article?id=${data.app_act[1]}`
					})
				}
				//商品分类
				if (data.app_act[0] == "Category") {
					uni.navigateTo({
						url: `/pages/product/list?listId=${data.app_act[1]}`
					})
				}
				// 单品
				if (data.app_act[0] == "Goods") {
					uni.navigateTo({
						url: `/pages/product/product?productId=${data.app_act[1]}`
					})
				}
				// web链接
				if (data.app_act[0] == "WEB") {
					// uni.$emit('web', {
					// 	msg: '页面更新'
					// });
					uni.navigateTo({
						url: `/pages/webview/webview?url=${data.link}&id=${data.app_act[1]}`
					})
					// uni.navigateTo({
					// 	url: `/pages/webview/webview?url=http://dh.xmvogue.com/hb/index.html#/index&id=${data.app_act[1]}`
					// })
				}
			},
			bindActivity(data) {
				if (data.sort == "1") {
					uni.navigateTo({
						url: `/pages/webview/webview?url=${data.contents}&id=miaosha`
					})

				} else {
					uni.navigateTo({
						url: `/pages/Article/Article?id=${data.id}`
					})
				}

			},
			onBackPress() {
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


			}
		},

		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {

			uni.navigateTo({
				url: `/pages/search/search`
			})
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.navigateTo({
							url: `/pages/product/product?productId=${res.result}`
						})
					}
				});
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
		// #endif
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
		color: white;

		&.scan {
			position: absolute;
			left: 15upx;
			top: -10upx;

			&:before {
				content: "\e64b";
			}
		}

	}

	.grid-icon {
		width: 75upx;
		height: 75upx;
		padding: 10upx;
		margin-bottom: 10upx;
		border-radius: 25upx;
	}

	/* #ifdef MP */
	.mp-search-box {
		position: absolute;
		left: 0;
		top: 5%;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;


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
				background: rgba(255, 255, 255, .6);
			}


		}

	}



	/* #endif */


	page {
		background: #f5f5f5;
	}

	.m-t {
		margin-top: 16upx;
	}

	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 205px;
			filter: blur(1px);
			// background-image: $back-banner;
			// background-image: linear-gradient(to right top, #ffd46e, #ffc17b, #ffb18f, #ffa6a6, #ffa1bb, #fd9fc6, #f99ed2, #f29edf, #e79ce2, #dc9ae5, #cf98e8, #c297ea);
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 205px;
			transition: .4s;
		}
	}

	.carousel {
		width: 100%;
		height: 290upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 15upx;
		}
	}

	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}

	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		padding: 30upx 22upx;
		background: #fff;
		width: 100%;

		.cate-item {
			padding: 10upx 0;
			width: 20%;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm;
			color: $font-color-dark;
		}


		image {
			width: 74upx;
			height: 74upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: 1;


		}
	}

	.ad-1 {
		width: 100%;
		height: 210upx;
		padding: 10upx 0;
		background: #fff;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.seckill-card {
		padding: 30upx 22upx;
		background: #fff;
		width: 100%;

		.s-header {
			display: flex;
			align-items: center;
			height: 92upx;
			line-height: 1;

			.s-img {
				width: 140upx;
				height: 30upx;
				margin-right: 20upx;
			}

			.s-text {
				color: rgb(250, 67, 106);
				font-size: 33upx;
				font-weight: bold;
			}

			.tip {
				font-size: $font-sm;
				color: $font-color-light;
				margin: 0 20upx 0 40upx;
			}

			.tit {
				width: 30upx;
				height: 36upx;
				text-align: center;
				line-height: 36upx;
				font-size: $font-sm;
			}

			.timer {
				display: inline-block;
				width: 40upx;
				height: 36upx;
				text-align: center;
				line-height: 36upx;

				font-size: $font-sm;
				color: #fff;
				border-radius: 2px;
				background: rgba(0, 0, 0, .8);
			}

			.icon-you {
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
			}
		}

	}

	/* 秒杀专区 */
	.seckill-section {
		padding: 4upx 30upx 24upx;
		background: #fff;

		.s-header {
			display: flex;
			align-items: center;
			height: 92upx;
			line-height: 1;

			.s-img {
				width: 140upx;
				height: 30upx;
			}

			.s-text {
				color: rgb(250, 67, 106);
				font-size: 33upx;
				font-weight: bold;
			}

			.tip {
				font-size: $font-sm;
				color: $font-color-light;
				margin: 0 20upx 0 40upx;
			}

			.timer {
				display: inline-block;
				width: 40upx;
				height: 36upx;
				text-align: center;
				line-height: 36upx;
				margin-right: 14upx;
				font-size: $font-sm;
				color: #fff;
				border-radius: 2px;
				background: rgba(0, 0, 0, .8);
			}

			.icon-you {
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
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
			width: 180upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;


			.lazy {
				width: 150upx;
				height: 150upx;
				border-radius: 6upx;
			}

			image {
				width: 150upx;
				height: 150upx;
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
		}
	}

	.f-header {
		display: flex;
		align-items: center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;

		image {
			flex-shrink: 0;
			width: 65upx;
			height: 65upx;
			margin-right: 20upx;
		}

		.tit-box {
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		.tit {
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}

		.tit2 {
			font-size: $font-sm;
			color: $font-color-light;
		}

		.icon-you {
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}





	/* 上新 */
	.seckill-section-t {
		padding: 4upx 30upx 24upx;
		background: #fff;

		.s-header {
			display: flex;
			align-items: center;
			height: 92upx;
			line-height: 1;

			.s-img {
				width: 140upx;
				height: 30upx;
			}

			.s-text {
				color: rgb(250, 67, 106);
				font-size: 33upx;
				font-weight: bold;
			}

			.tip {
				font-size: $font-sm;
				color: $font-color-light;
				margin: 0 20upx 0 40upx;
			}

			.timer {
				display: inline-block;
				width: 40upx;
				height: 36upx;
				text-align: center;
				line-height: 36upx;
				margin-right: 14upx;
				font-size: $font-sm;
				color: #fff;
				border-radius: 2px;
				background: rgba(0, 0, 0, .8);
			}

			.icon-you {
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
			}
		}

		.floor-list-t {
			white-space: nowrap;
		}

		.scoll-wrapper-t {
			display: flex;
			align-items: flex-start;
		}

		.floor-item-t {
			width: 200upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;

			image {
				width: 200upx;
				height: 180upx;
				border-radius: 6upx;
			}

			.price {
				color: $uni-color-primary;
				font-size: 15upx;
			}


		}
	}

	.f-header-t {
		display: flex;
		align-items: center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;

		image {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}

		.tit-box {
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		.tit {
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}

		.tit2 {
			font-size: $font-sm;
			color: $font-color-light;
		}

		.icon-you {
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}

	/* 团购楼层 */
	.group-section {
		background: #fff;

		.g-swiper {
			height: 650upx;
			padding-bottom: 30upx;
		}

		.g-swiper-item {
			width: 100%;
			padding: 0 30upx;
			display: flex;
		}

		image {
			width: 100%;
			height: 460upx;
			border-radius: 4px;
		}

		.g-item {
			display: flex;
			flex-direction: column;
			overflow: hidden;
		}

		.left {
			flex: 1.2;
			margin-right: 24upx;

			.t-box {
				padding-top: 20upx;
			}
		}

		.right {
			flex: 0.8;
			flex-direction: column-reverse;

			.t-box {
				padding-bottom: 20upx;
			}
		}

		.t-box {
			height: 160upx;
			font-size: $font-base+2upx;
			color: $font-color-dark;
			line-height: 1.6;
		}

		.price {
			color: $uni-color-primary;
		}

		.m-price {
			font-size: $font-sm+2upx;
			text-decoration: line-through;
			color: $font-color-light;
			margin-left: 8upx;
		}

		.pro-box {
			display: flex;
			align-items: center;
			margin-top: 10upx;
			font-size: $font-sm;
			color: $font-base;
			padding-right: 10upx;
		}

		.progress-box {
			flex: 1;
			border-radius: 10px;
			overflow: hidden;
			margin-right: 8upx;
		}
	}

	/* 分类推荐楼层 */
	.hot-floor {
		width: 100%;
		overflow: hidden;
		margin-bottom: 20upx;

		.floor-img-box {
			width: 100%;
			height: 320upx;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(rgba(255, 255, 255, .06) 30%, #f8f8f8);
			}
		}

		.floor-img {
			width: 100%;
			height: 100%;
		}

		.floor-list {
			white-space: nowrap;
			padding: 20upx;
			padding-right: 50upx;
			border-radius: 6upx;
			margin-top: -140upx;
			margin-left: 30upx;
			background: #fff;
			box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
			position: relative;
			z-index: 1;
		}

		.scoll-wrapper {
			display: flex;
			align-items: flex-start;
		}

		.floor-item {
			width: 180upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;

			image {
				width: 180upx;
				height: 180upx;
				border-radius: 6upx;
			}

			.price {
				color: $uni-color-primary;
			}
		}

		.more {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			background: #f3f3f3;
			font-size: $font-base;
			color: $font-color-light;

			text:first-child {
				margin-bottom: 4upx;
			}
		}
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
				font-size: $font-sm;

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
	}

	.activity {
		padding: 0upx 20upx;
		// background: #fff;
		background-color: rgb(255, 251, 232);
		color: rgb(222, 140, 23);
	}

	.uni-swiper-msg-icon {
		width: 50upx;
		height: 50upx;

		imame {
			width: 100%;
			height: 50upx;
		}
	}

	.Event {
		display: flex;
		margin: 20upx 0;

		.title {
			height: 110upx;
			width: 27%;
		}

		.img {
			height: 110upx;
			width: 23%;
		}
	}

	.more {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex-shrink: 0;
		width: 180upx;
		height: 180upx;
		border-radius: 6upx;
		background: #f3f3f3;
		font-size: $font-base;
		color: $font-color-light;

		text:first-child {
			margin-bottom: 4upx;
		}
	}

	.placeholder {
		opacity: 1;
		transition: opacity 0.2s linear;
	}

	.placeholder.loaded {
		opacity: 0;
	}

	#vertical-page {
		#scroll {

			height: 50vh;
		}

		.container {
			display: flex;
			flex-direction: row;
			align-items: start;
		}

		.component-img-lazyload {
			box-shadow: 0 2upx 12upx rgba(0, 0, 0, 0.2);
			background: #fff;
			min-height: 600upx;
			min-width: 600upx;
			padding: 40upx;
			margin: 40upx;
			border-radius: 20upx;

			/* #ifdef H5*/
			/deep/ .img {
				width: 100%;
				border-radius: 14upx;
			}

			/* #endif */

			/* #ifndef H5*/
			.img {
				width: 100%;
				border-radius: 14upx;
			}

			/* #endif */
		}
	}

	// 直播
	.live{
		width: 100%;
	}
	// 限时秒杀

	.ms-content {
		padding: 10px 0;
		background-color: white;
		font-size: 28upx;

		.top {
			display: flex;
			justify-content: space-between;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAHCCAYAAAAKIXlXAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAr8lJREFUeJzsveuvPUta39fVe//Obeac88IEEtsBHGAGwi3OxYCxuRnGJFIk5x2KHCmKkRzl+s5O/oLEyavEsuRIWIkUSySvYikvDLExFnLAVpzAzHAZ7jAQJ8ZhZhgGA3N+uyur6/pU1fN0P7Vq9dpr/c73c87+7bV7VVdVV1fX5dtPPWUmAAAAAAAAAAAAgDvHPHcGAAAAAAAAAAAAAEaBwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHAAAAAAAAAAAALh7IHAAAAAAAAAAAADg7oHAAQAAAAAAAAAAgLsHAgcAAAAAAAAAAADuHggcAAAAAAAAAAAAuHsgcAAAAAAAAAAAAODugcABAAAAAAAAAACAuwcCBwAAAAAAAAAAAO4eCBwAAAAAAAAAAAC4eyBwAAAAAAAAAAAA4O6BwAEAAAAAAAAAAIC7BwIHAAAAAAAAAAAA7h4IHBv84E/99hfYafqjp48fnoz5ylNpffj0+Q+djv0Ba6a3Tp8/aKWT15I1uuK1a7hnvxPilTTM+qCn61raQ8py2YzWtvHy2FPRthnuycIsxMuXmSHHfRhjzcTdYMMUpLFSVRi73hS/4sK3zq+ZmfvQc3+NWI7a89f7oz+/59r480frM3+97DPFPTvupze9Kq2Os7l6Z4zlc2DnKs+LWPe5ePl2xfqHgjvOwAYVynFW5kuCqwtyWF29M6690NZRvmzYMpDqnRQvlze2bPXPb89zyt8zfdnwZbC2uVzY7TazjVhX5j31g41zpy3fS39l7sqDPl62Xei4vefnyydy1HBJ7n85+GvQny89O0wlFdvR01fKZ0LdrEw991LOlxZLrjdei9xvSNAy8+fZeBHWpOMmpkGOuSct/knS9Xmh4cjvta8LvYi/hmXt7U4fHsL1nFo7+9q0LC9cWP8kz+52p7SkuF088rXbje9a9OXID6nLc/P94UKe316leE9jKW19pm1IPodpH9YyZ9tsuQ1ypWaZs5Z8xH1vSHmEPMzhmHQde8+WLduFz59+Pnf6+Uz4/Runn589/Xwi/P7xdz/y9f/fdozvX559Wn1L/G8f/+xbpwfsT53aj+84Vf1vPx36usk9c7kBXH/TR4l+dy6vssDBTeIvAdc48RNNy7bc70eBQzsRh8Cxdf71BA7p2emZSEDgmCBwxLAQOCBwdAKBY4vbEDjc16rnoqPUFu3NvKzAkdOPcWvRCxzu0ELDSgIHF79/KtN1W3/8yUZR4/H0s35+cJ8X+5DTyKmTa6vLb1vcaPPF5XEPPo29OkS/vyWBowx/GYHDf5/P4YSdUuCw6VFeBY76GqzPRHm++4e5D31j4jXgx04/P3z6+Tunnx969yNf/0+1J7/qPPu0+rn5oY9/dj5V8+86ffx3Tw/Xv3l67j+wHo9VvxA3pqn4HCc2EDhkIHD0CRxTh8AhXe/4JP79LXBs5b9v0sIxKHCQNwVFWDHPr6bAIV1uj8DBT8juX+DghZt10MWUuRQvlzcIHJ0CR0+7dpsCh5ze8wkcqa3rMUlQIgkcXPvqnyfuvmm5nMDh87NXHvcjcJxjwZGvf1/gWI9lC41a4PD3e1lofDkOGy03Uh7XsK+diuwxWGm8cMJGin614Einz2Q8SuItLEqYayBIt9nYthz5ntqwz+r9CRxPTFlcSOCwZcnF8zmBw93mxZI7x8RLBBCf93B4XOCo+Z3Tz/96ivh/OP3+W+9+5OuO6QDuhGefVj8Xf/tjv/XBU5vyvacH6j89FcOXrseoUGEZ8UISOBba6RK4Y0tHiXPCSd/b2x5GJ8XZNOt8BgdNXenzA5Mx6wkeOok/Z3lO3yT+AgKHdDrzxQNTYuLAr0v40As63MSNy5ePRDshlOAny3r0AoekJGqreXxv1BzvuQ97S8HIRLTLckApRPDx9d2zvslUz/09SuBQR+rEpuZwx30Q88AdHxQ49MsKpy5RqideXuDYe4Zj/LygFONojg1bcHQIdsIzbe2TmL8azXOyGY/w/Ha1V2LdJeG22q8u0WOsX58nbrHgOj3pqI/q7Oon/JaaGTdxNKGFOEbz1VO2PYIOM4l3mSXH2TeO8ftlSj1jUiDmZIlBWeLNWbx1hnHWGL69s6cRxpPxVhrWCRxv+VbTxrinHLcEk2YTxJB70SH6JMFAqKV1OE1cNbF4eqSobAnR0x9x8Z/OXZg6trE8hD5rs1cluFjduYacs/7Nvcij/UHS0up0l+1xf09b0YV/Bn7l9PPfnH6+792PfN3njknotnnfCRw//PHfevNUpf6jU7X7C6da9wW+TSqLwTWBwaoitS2TO5iVQIX1BgSOXl5tgeNc3yP3JnD0TKbEPLATTUHgYNJ6EGO+UYGDCclNXt3xqwocO4mdK3CwkUHg6H1+rypwsKF74h2/D7zw0nEfuD5ViLfNi3ytfHldUeAQ7w4EDpn3m8DRw+jUoCcDc3vbDhM46HlTTsP68T49N84LVssIGwfuzqL79LO8cFYbL+0b7nOZVUOuRyjH4vo2BAhDJs0KQSSd94oLHE6E4PI1KHBMxO+GS7ND4GDL6XkFjsjqo+O/Pv385Xc/8rW/e0yCt8n7SuD4Ox//zPecLvkvnarcF0+FX41cDL66mWZJXwyzUFOqndIbFTgWpSmslJbM2KSHTf8CE+tXWeAYKV4IHOGYtARJayHgIhkVOPh603e+Lr+jPjhgwRHSuiOBo2uJyoEWHOxx9p51xAsLjg0GBQ7xmQ4jmgsLHOwEomNJHRv3tFV3SbjNJYTM2dIEjTX/1/dbssBx/sTN52HrjH1uQ+DoITjqpBd+FYGDCZdEhJh+cBAaxBBrH05PyZuTXR6np9V6Y3l0VhxmXoXEnI+YJ/42tP5CtiidouqIRemfFeZc9RKkywkcNJoRgSOLJFV7ZafUmJ8jcNTnUNGCEzisG9eHc6TyvA2BI/LJ089ffPcjX/s/HZPo7fG+EDj+7sc+/SWnavZXrTHfbf2o0Cuj6eqDeDFNjeUGFTdoFT5H3HBp3IQFBwSOowQOdqnS4IT/VRY4pHqnnxxA4JCAwBHSgsAxQeAIYSFwiEDgeDUEDkkc4JZyynFeX+BYydYKRwocoWckPjgm5xgyhvP+NZzlxvpUnH4vxvvUsMsb09Py9inMU0zM/Vgz5zQK/x4cRvjMU2oByXvDZrzZp8U8NWn4C9lNt46rSa1D4KijOFfgKP2A5GvI1zudJXA04sYSBIzUNzBiSOx/t9q42xI4Ij94+vnz737ka3/1mMRvh1de4PiRj336z56q2F851bB31m2cbLUjisdkcYMc9+1dK24UYUz54OxNHo4SOPoEip6OTsf7UeDo25WkHaRpB1Ne4NByuwLHeB3l4NOS8sUNPm9iiQoEDggc0+0IHNw1jwscHe3SnQkcXBFA4CjPobDnC2FHBQ6ZsUlezxIVUchXPhJdW4NKAkealO+H7SvJ7cn2PtcUOHK8fo4dws6ht3QD9Ef32zuQNNOTcxr6xin8i7BDigl3nk4UaH6NQtMjedxZelIIMUp2BQ5mwi778RkTOHixQd9vxDRaC4vLCByS5UbZL3BiSO4PxOf4NgWOlc+efv7Dd7/ra//6MRm4DV5ZgeNHPvrpN04X91dO9/nf8+3PqaEKtb8WOOKUsF524tvYVuCod1Wh/TqtyFyd77I0m9vA4xYcwiBNyJj0WPJhxwQGdpC3G2UOwBTXRlotckMtXK/yXtY1KAlpwiCPz5e2bHPHUQ6/OjqTHoGDKwSh8xp1MsrDZ5b3wSHV2x64e9b7UEodfnWMHffwTijld0U990GXryJ8ykzcLYhLX/dcmw6BQ1pXzD8/zy9waC2wXHkdInCs6Nqb6TCB4yALDtZrvRBtl8Bh299CZWCfX2Uft3V8XODgBuB8WnwdbQf//ijXrlxA4OAiqCcg6Vq19VlC327zAgef3nUFDmksxwkc3HNyCwKHKX43E3pLw5nmvMZaIpZVUU3iH+vIYPb1dwnlv47757DF6+Lv6lpWT1PYGcX9vDgdey1E9nJK8tZq5bFae6QbGUZrtsg4c71tfqVS3PXnwbBvwWGb8E0dDWEkiyQqcGzl7lyBo4iPigr1MWrVwQgcpjrNpz+FdtQ23S0VOHIcWQyhMzzbJXC0gbTWXt3oJ5r//ennP3j3u772947JyPPySgocf++jn/nCU7vzN05V55vcYxQtxxg7g7UeLIZMOtM3Wexwwkd1TgjiLEJEy0xl6Urh2OUOXc/D2MMjDSh1b1q30A+Kd4ORvPjbzA85NKxnyiLJ+WiXqKz3Wx5s971tquvO6PamROsrj7N19BJb1Y7l96FLzBgUfzomebLLL+3Emk+Lt4gQI2Hj5SdpW9TOF7nt/vR1Yd8Ca39ANPrsDL91F7LITR57fMpI6Z8jfJb5ksK2sFYzNyBwdFn+CYLQEfVGtEZQduJ+YM4pOqMT6PG6cI4lm0Zk4eDbtp7nRJOfPdrr7dtuW09Pvvi364LAwbbvvEzTs1RndBqRt2jNJWroJ+snh15IiKIGDVX2P3bxgoclaqYJgoNfoj674DZYYqwCxmJfd8+Vtd7PhjUP09Py5uRGEktMy4Q8SgIbtUTZumDGCsUIAkePyfdGjeSsFLg8FN8tsVz17VXxSm2jEPYEjjIu3tIi++LIx+L4fU/g8F8s5Y2qwwjLYQqBY8dShIRkM8FvP23ZMGx5dvpmEfix08+fefe7vuY3LhHZLfHKCRx/76Of+SOnX39rmacvW/8ulqS4f0sLDi+AGKbJMmk5iWFEEf+FaSw4UphJX/cgcIRoz7neXRN5PV7gOEJRva7AwcY9uMzGx6G9ZxA4JK4tcOhv7/MLHNIbYC3XFzh0k9o+4RQChw/8Kgsc2jgn9plk+99DBQ4uEggc9yZw8BEIYkhX2Q4KHOnTnsAxbwgcZNoZBYl1W1damC7YS/fVapnxZL2FxrRaZixvnJL/PRdoOX22L9/yz5mxwXom5kOy26muydbXljEXETi443K+7lXg8C/rLBufJHA01zox12vXF9tPpT2QbYKQ7ySBo3Z0atkRniRwaLiCwLHyi6ef73r3O7/mly8V4S3wSgkc//tHP/NVp/v9t08f/6AN1hUr8TMdDtow+K+FCCpw2Nkwx+O5Jp07LHAIx29C4GC/uYTAwaQnjZ+3IAFk/yS6XF3Gjwgf76sqcHCFC4FD5iiBg/c5MnU0GOcIHJb8Hhc4bsGCYzQsBA6Z4wQOXrQQMsEeuq7A0TFhuKIFR097c1WBgz16AYGjK/T7TODg+gJxrDA2jUi7Be5acEgCRyAu9aD+GNzfJswF1rjW7V0fTnP3107pvua2el2/M9OTt9wIP2F6HaSTYhq8eb12yXILv9BvnS8w5W34lpwXOPTlvec/gxLvQ1p64n4PCBxbAoZmiUqxLKUNywkcUmlxvoOsWRqBQyyvJfuvKWeFrfjC9ZN3IHCs/KPTz3e+851f8zOXjPQ5eWUEjh/9iU9/+amR+OHT/f7D69+uXQgV42kOgoTNogRdklILHO5PYwqHoEXVmstzRwUO+S4wk0dllDkX5yMOKDssOHrUTC7s/vVyymqboi6tV1TgWJdRXcCZ0T1ZcEg+DyBwSBwjcMziMK9l/55fVuDgB+wd9c4yTvuE+9uzC9KrK3B0tAmvggUHG7J3wqAUF+5B4Gji1SEuvxu24JCcrevahVdZ4LgmqWTJgHlc4DBu61Y7rWLGC2+pse6Gsrw12eWFO+58a6S7+OS3fHWvRqw/1/KevFjsNOVbsV2mc48FR7dz2TpbwrN+DYFjwIJjqnxd8AIHzWfMAzcZs6nvEgUOO9Eb2Ob3/SFwrPz66efb3/nOr/mFS0f8HLwSAseP/sSn/xlrzI+ePn55vN9LFCHWhiN+DgJHep3GNSpkoMAJHNQR6TkCB7vmStA6b8KCQ5zQKeMQa5h2ULwXQLNEhflC2M71VRM4Yh0aFQx8HPcjcBxlwSGMQtRxXEbgaBGHYuoWXi9w5Hv+fD44JCeFM7umlRMihLp7gAWHj/cWBI6WV8OCY0zg6HkmJXosOLSe8/31cn0X1w4LcXT0iaNLVPa4vSUq9y9wCDFM3DXIE6TRacDY+X0WHP5YIXBUlxW/W9xLzRfOv8a6HMU+vXBWG24RgY07oazKxMO0LC8mM793iv9lEEUeQ/xZxM/2HHtlS3xxMEXzsBzkg0MhcMR8cm05J3A4K3dlu30pgcPaOi7+GnJcNA/ld9Ep6Dy1uxZSgaN2KlrHMQtLVLjZ28UFjijOsOLNIVP4Vdz44+/8qa/5J0dEfk3uXuD40Y9+6rVT1fyR02D1G6zJ9zsuT0mWGGZdUkZ2S5nauhG/W1mY3VCSyVslcHTB2CpLDQH7oEgmVMN9VM8kz1RvUBb3EM7qLn/vYc/fS5fFbxN5AUGH/eYgnyNcHmrnoMH7sll6POdzHONklPcur39rL6fXMblgMjb3bB3ZUW94wW/9Z0z84SfmSxOvr6Mbpat4jqWJJlufuIlmkcR2OYuC3Y4VWE6jdZgb1+XGo/lrs/kWpohj8h7Q46Q5RyGo1VwehXyz06M6XhNMlYkZrn/UvaWhiQOnkMdCYLfB/b+w3pcXboQ2l5309AjY/AVrhQiJHouzPuGkR+CQxAXmWVcXGf/89/TrZuHamp77wF/D6FKQUQe9Pg5uctAKlPKLgH1o23Itxi0o9UKEXBeZso1zfCuHOY+eiXnewtXGDDWieRyXvzz983i6xsfJt+LvndrRR7dbiDVPp1KevSWGfX16ad/yu6KsIkeM3736iBOFmMd58tu/xjSF1iA51mBbfuGYbgxv4g6P9Xc7aRWWAx3VuY51jafeEaRfaNvf4rx89riwltyVMLG3cbeTeiy0ndZM0zLM+TaXXxLPTx+e7FO5M+Y0ET8g0vXQK+DHTMNP1kxcLEzkwwHN2Kna/YPTr2999zu++vcvH/v1uHuB48c++qnvO02v/1yyrAgCQqpicylw0G1fm3pBRY1K4Ci2fx0SONpDUpvADTiksOMCR8+EcGYFDn1hQOBY4Sa1TZ4uJHActYuKJHCMMi5wdEzSpMG21oKq00xfK3BIVh2bA48rCBxl9rctqKQaapjRGP92ib+e+m2Gs35SDLBorPQ+zMF6Sl43rBMCpCaQ88HhBz1kyGLClnVutwASqI7YeOdmu2IXTatjYt2zlESaWPPF2CNw9IiORwkcnDPP96PAoWN4ByLybwkjcAj3TLP7Ry6TcatGLQ9CBdHvVnIJgYOzHLBBVI0T++cWOIovSDxRAHgx+fv25J+jcLGL853x+vS0vD4tpx/jrDBmF7edHkO8a+s+T3bi0uMG5q2wLsM9PZJQwoUUBA6Wywocsc+z1XfdAofrk84XOKK1BU0/CfqDAgdrNUfa0Tiu8iEtK3Dod0w5RuCgVj7pXh1jwRGr/l979zu++nsPSeBK3LXA8fd/4jf/rDXmf3TTa4XAkZ0NeZq6USxPoV9WDd2ZAgdd3qIK39XADE4quwSO6J26FDj0D9u4wCEMb5TpS3GOCxw9Wz9qSuteBY7RhmV0u96eSU9PWrcqcKS6MCBwsGF3603+vmuAxeRTGmDl7bpJ2GoA4s0cLDt65Nfl+nNmm8vOTXTFusBdnF4MWcix/CbQFoP0XCZhsGyIl3YbpuFRWK7etu3Rs/yuR+CQTG9568PWIsmlN7hU6FUQOLbC1/Qs2ThuiQqThQsIHGoLDggccsgzBA6fl5jOJeiJh7Pg4L/31sOLrxOrjwxnnfEwPa1bvT59wIkb1i3YjGL3g7POKO90LsvNa2YFjh4RSAjLrl2P3ymjTnkiUZwhcFguAtsfnw192bkCR2FJIYQdEziYsKLAsTQCh+jHizl2mMAxlXNPH++hAsfKv/Put3/1Xz8kkStwtwLHj330N7/k9OtjxszvxJVUksCRdnkiAkesLKay1Ig4gcOkVXoFhcChyCtn/aHhqv42emYnqzL+zALHrVpw9Agc+vhuV+Bgw9p9gSN7OOe/H92uV1qiIt8fHT0CR88SFW29O1Lg0OahnBDuLDURv5Hzya6HNeUfzRv+Vawws+yLREh/TSeKS777YKZ5QpmyPktsG3xtFp/coNwWl22CWLGs5sHOyR2VC+KIqBx05nP7no8+gaMn4p6J9TFLVKa7Ezh6OELgkEQpfViOWxA4NGwJHD1+cMX4mYyNWjXajoGjHJIrW0uO+zugF13Oy0WbiS2Bg4oba9CXrkFdnKDxxin8G86JqHMY6vxtPJzCrOefxqTr7gJuSUoo/XTjDbn1W/msvgsCB3srGMehkzAm3tqhprfoz7Xg4K0Pc5/oD/TGc57AQa9hVOCgQYgnlIleTBQ7St8dZwgcwhLRV0zg+Ozp5+ve/fav/tVDEjqYuxU4/v7HfvMHTo3Cn/bdargMskZpz4LDhu8oxaNqTLHTShGOChyKErwLgaMrMbpecSUIHOrqpBc45BxcT+AYdzwqDD41eYoCBzOI7xnijTv91AsckzCJL+LbiWx4F5UOgWPcB8e4wMHDCxybvnmqDPJ56BE49iaEml2MOPJ5jZZhfQtjgshMRy1+KYpxu8ZUmoc7RzvIK3xwhEy49DqcuvW1mXEV+ETUPTOlZSlTtm6wMX+n++R+1r8f/ABvSc7ZqAC8n+djLDjW/AtWGR0CB7vETAjLO5ftGtkz59+ZBYcYTtvH9AgcfB44rilw8P2/jm2BY3xy31OftXQJHOIlbFtwyCOgmIeOfpITiqU4rLe4KAWOMh/xmrxfjRfTkxM2XnOCxhyeKScku4H+o3dI6lWNKS1JMWs9mqdySc7GNVSiRcy7Ncxrz4sIHP3i0pECh6bGleKEom2rBY4Nx+bRR0Z+GaYROLjysMVDUW8v68re+n5PK3Dk5TSSaFhd02ECx2CkUlplZn/w3W//6u8+JqVjuUuB4x989FPfc7oB3+/+mN1QOCi0U16nFMUJQ4eO+fgUwntFthUy7DynI8XNtu0uKjnq/eLsE9xGBlICRhgQdgkvdQPPK5nxO92x+tpoK6ufPKrpsLS4jLd03b007BjDFuuuz/K30rxWjg27rmzTSXVYJtQllqho3/YK1UO0AGHvOise8YO0cUuYC1hwcKEtfV624+UHIbwX8WJgbnLaZLjQ5oGeb2i43G7QAcTMVHpf/lE2zd9FL/pZpCHfCQMmlQCQRgz82+J8Bbb4Ro6oJPuEKToT8nczoiquZX0raW0cnPmftQSi4JEGbatT7dTj+R+nE7G5auuS8a+xfCZSWvH680Ax2jaeK2rtcZQPjq63a8y95F95SMf4HBy3REWHtINBn8DBlc0FrASV6cv3oYc9/0J1elXQDedpNLzJj5CKvqUB+rBsJmx93Ihh5ck3MxZjdwskkz9XJmtbs/hGfXUUurwI+Tm1wW6L1/W43+LVrrug2Hl6+fTW6ftHb7ExL6fx9HvO6ei0xGXTD6coV8FkntIyFuPTclFL25VU1xEdPdf5T+FsXWZSv0PCRYGEK69gZt5MjpmliDRfzVLNHXLX0ttelOfNNO3UJ9jgM6Mea9KXIEmt4BOjx2sxpLqGzeffxjyGc9PyG5tzseQ+0w0dQr9pJ8u0RSR96/td5v1L+F47vutjuUgsLfyctDn4b7/7bV/1/Ydk4EDuTuD4P37iU28tZvqZ0035YleNZv8+Me+e4rstQwSOLHqEMEWM67lzc9wS645XTuAYNv/vCd2zllo6eHmBQ1yqwJkwj5a5BCtwcKPtWuA447GtfKzERv1WBQ7tYFkSOKQ63jOAZoWEDl81fL0R6nNHvjrcmbFx8OSwXkPwMa77v6vrmy13PFk/zyHqGGcsU/pm68Fs2SJJ97E9bsm/ZWBOtOAFHbOxyMWmIYa/oNG2mN1adBLq3YaAbCuB4/P2ZfjsLUDcmvWU1yBMFPc0lJyN1xU7zBgu3MAobJMLP8rK8Jq7qLh+o6MN4dHm4bpLVDj6BQ4Oru4eJXBwYS/RKY+OTQQro6m8jvV+9ez22bVaeNREXdwmlhM4BpMq4n4IXc4y5aXg+dnwW7W+5rd4fXojLEd5nMy6RMUtU1nLfh37vzh9t1p0RJueKDaEcXphnbI3sSeLGtYbJvX11Q4s+utPisBOnISQh6L+LeePry4mcNDT98ZEZHl17HfEsTrjQFkex8jXYCz9vhrbhEN1HnKZVGF9xnLcS7iXSeAo4zlqvnBdgaOp1588/XzVu9/2lf/0kEwcxP0JHB/91F843ZC/lNutYMGxIXAsYbxm5lb3d+9TOLVZWlYCgeMmBA7OjOHeBA75eluKfbhvSODguLbAwVvCjAscWwMODVy9iQM5Tb4eepyBpnvWduqatIpBABUpisayjDv7/fCT8nmJj+Xp8xyn6t4kuFim54SQJUWVnlux0pwvCMmHTwdnxr+IMBPxQkHZ7LDTAukR4bbb5SYRkzR5a8POQh6yluGFD7fMxfglOXbx9y6ZW9OoDRE6pimLG7FeRDNs4k+kzxfCMT44+gQO7nypPvECFI9e4OgReo4TOFruTeAYFzl6/LxwmdCdf6TA4bc4HSgHUeBglrN0WHBsh/P9Qtyu1az+h8yTH6vb152Y8fT0QWe14e5Rsqaw0/KwbhN7Or4KHiGPT00aG3K5WFTkHNtTph0CB2vFF7/UCRzRP9WzCRwTJ3Bsx0XbZ86ZaIFC4DDFcYFibJsLLGWVEYmodWSZjjshp29zObACh5yrIQ4TONij7FX8xXe/7Sv/q0MycRB3JXD8w49+6oOnX7986iy+IPnbqKwvJIHDwWyXQAWOYiyvteAgX0Hg4OgZ1Aqjz8GBGxu2Q+A4ap0bL3CEfFQ82DR7PDOx0FFWcYy+geXf/bwaAgdvwdEzMODS5+szv9Wt5Ctj73ypk94i79hB4yrWoiZnnGFL1jRqCENW5vy4nSl5NRfabbLffUhjmVpv5/JwlSsbPqS0HpzXTVtrj7hUY04+npZQxI9CpMo2RFgCod/6NUzOOYGeiBR+2crqv4NeGx1s+3uf/HuEQs/b84WEbF626e6f6W0/jhI4OjIhtO/XFDiGfYZ09Bscr4oFx2V8Y50flN3q2v1TTXgOFjhS2mcJHVKpd/Qc2mTtgxNJnaPQaQltzPrF42SX1VLjLbfNq10dhYb3L3GpqbvXp1Pes29PedH57PxxhMibvC/UqWgMJVTRVIpBxN0vS1puhqRVhbC0L9yakO8LHNR3hPbucP1pL6UFh/+tteBY80yXGx4lcKR3JKFOlWVExvULFw/Nm07goH+8Tyw4Vn7z9POl737rV37ukIwcwL0JHP/x6dd/a8POKFngIJ6Nk8Dh/6Q+OPYsOCSBoyilUQuO3RDboS9xw0YFjuMGtbcgcDD5uqLAwS9RmfreUrKJLWkiupcHGV19vI0lKhvhG3oEDv19eGDn4G19lie1eoEjPzu8SFeEFYSXHC8ROOhbNxOPldPj7IyZTKBDADfYMFNam+t2CiHxrF/OoUi4QWKVHZIvDun89/jDbHshiRZUo3Gjzc6tjOu02jXeOQ1dXYiDxMY6JvxeC3qeH5IvE1sMVG2+lqlsd+KWtnaJAsdSHJ/o764GRB/2uktULiFwqGd5BwkcgrAmWjrqBA55UsbV3XsTODrqWMf5tgpvpr5xX1/fOShwdFhwyHFow8Wx+uKsL9atXVeBYlnemtYdUJxg7MYpqzXHS9dmuR1S1jCrD47lgeR59mK0W343h6U6ZBLggi35WLQ+E8rI9b82/+WDbV1YldZGCFIAZV40xPEGnfj3CBxVxsYFDv9ZI3Bkfx0dAgd7fySRxhZxlnneFjjYcWMlcJTfhWtc+9JXTODgoxXr6H/yzrd++C8fk5HLczcCxz/82KfWEv+FU/X6I27JSWpfpCUq5O/QdnG7orjh4IgFR6/AMTQo7p2QMhh+gtRDz5sefq08n768M4p+8MjnQa93X1XgYI9JeRgcPEoXcbMCh1LUmjaEIjXXEzio89P9MpJ2nWCOJcWBOvSybIMzc9YiUy5z6nx29UnhJ81+mG6nahcVEtXS7Hawnvf6aZL92KS5DkjT9qxh0GHFB427P1J95o6zUzc2Xn5wE/KeltWs5bC+hfz95lx5iQqN2xa/dMiBadGu9+oheDW0YULhpgPr5zDzihMuJ3uY6NjO+48n30x1Gb10a98nv+Ql+q0o1zDt5Ft/wT2T5VGBQ9omVnI+zHNFCw4xXI/A0dLnTeD9ZcEx4oPD8M1wX1oi/E4fasSMdYzylpkR2OJnsuPeakm2ihGrf43lzelp+cBp3vhmsOh4GerPqb95evBLUJwlx3p0Po3hQ8O1RLF6FTtMEAsWoj6TfKf7kycMUvGULYCRA1ZnpSIQ4qT3cnOJipjEkiwS0qGu5mN88Co5Gc20V0/H+OMWHD7GlB+aiiRYVcPodQkU1Tm2BQ6OOLap+4rW6vQVFzh+5fTzZe98y4cH37heh7sROP7Pj33qT5866x+Ilht0KUrRrLorIo5DTfldLVjHuKgA4twXhYayNi1MY13Tdq9tX8FouIMlLjUMWx1bbb7ODk60yx86l0kMT8w7BI6ehr/rMkTzw4442ER7BtAt40LC+CBR7/Byhd/BQI1wH3hhTLJ+4JA7Sfd7t7KU5VjsupGWCvgVwwsnElT5ndP5+a0BjTs50DJ5+2Dq9zt+8u3aunGen+hGh58ziWsK33gHbya87febsPpkyrJZwz3Or58m0Q+sdNmir6E9dZlPSWgr9LrJKZKXO6nGiX8cyNCR50ZiqzDu7ud7QRx5CkFZdS4cf0rhOL/ueVK7FF+Z8Iaz7C182FgXTHgx8BB3GbALiU9iqX7n8sgiiT//ab3G5o3Yow+fnuMo9Iw66OyxEtSJAC41yzinlSz/Bq9BXjGpbCA77NYlCw427CRFy0xqmHjd+RtLqPi8VcdYkUbIV4cA3eWDg0uKvQTLf9Ez4GCcHxpRhuNO58vWir01X77N+Sb2E1HojT6WfDsQe6KVObSjdnl0gsap13AWG8vy+unoCydE2ODQeZn8Vq6rhYYNW7zSdrZ6i0gmlKGdU1TlvLyDv97aD9/mNrIdYxbuVqxtL3VsTK60yGv8botK3mrOl9ivSSSOxab6u76McMtOHnyYdgcRJiahbaR5z+eFWiRa2pB7aeKzka+nmOlUTkNTukxaVDRhb3AtvIQ+mnNUepaPPAWX2JtwM36Tf9dbJFf86+98y4d/4NDMXIh7Eji+/1RxvqcQOAwvNEgCR7T8oOdYGqYojXZnFRofl267znJM4GAfFNcw6gdpTARnzMx70yDnXETg0KY1Lp2y18g6COwvxjbuMYFj3NfFBQQOrrjEsTZTb7sEDqmjPFbgcJ/DvWuafdfLhslhfX+XvAtFvFdpbXEc3MRxVEisvBZpoBrve5y0+ohN9EYfLS6C2GusCRONOWRgCb4ZvJAxr1tih0HlPMeBtEm7ahSXO5lp+03H+fRYhkkeOPT1mX/7w7ZXHcvkXDVgRYvwZRQkXLQP+SSar/T5Kfy9ML5BjJuAW7djiikqq3U738R4o0hGB9JkNxsnZs3hyOw+2Wbgasn5VLQIDkynPKiL1eUpiDfZl/Habz2Rc+uy0cHf3zGBQ6ZnCYO+3rFWjVxdnPTLRqSljXwWLiFw6O9DV5+m7MNvV+AQvhgQOPyxDjtUIV+CtDZpBY4YSwoffBDND+/55YexZ7LGOwt1YsWD86+xOgb1Y+3Vf9ELL2hYv5/uYh9SPvxxk+tBtfTEzuT6xOU19NpC0F3riQ5LmI5BvGwxUk7KS4GjDLdFaS2wLQ7U6W9TChxxiSlnKVrEe67AkRPbflk7CQIHEYtyumW/mtLtFDiK66Z5qW/cwRydVIfA8T+/8y0f/p6Ds3MR7kLg+L8+/qm3Tln9jdPHD9AtXzmBY9OCY8oCR/qbholmcORE0YKDGaZc2oKjR+DQd6DnCRznqpLjFhwr2kGPMFHteYPUIXCw85gdh38l92/BIS2XuJbA4ScBeoGDjbZD4KBm2HnLs/VfLo7wvVmEupLTsKHpSRuTkPBN/QlWv/HZcEPf04xy9THkBwDBgNc8uEGo267V+Lf263/F26o0YDFJbMlbD/I3Ur7eo9BPxvri5OLl6ujGhLCqwOIEzdUBYjuz9lvprVDZJpfLQ2x4K8Tn1RYWJ1kkc9YibinJe1OUJZJlEbl/3ppklTYevdhhzJTfFtsiXnq9cdDql6s8TXktclFx00jeRuGHs7VWd4rSfThK4NCH1S/PuITAwaR/kAVHzEcLd72XEDj04W5T4ODHVz3jJ1543ZvMFxGwh5cOCw52euM6qWWiTj7jucvkxYxpeXTLSV6+/MDp2IsUv3W2i2tD8JB+bCyrdVeUqXy6y0vIUkDetcIo2g3JP4kk9JBL3Xo+2HSFEc9GtyELHLQv2OYaAgfdNSSlJz2obDfFOO6u8pC6AiEsPacUOCZZ4Cj6L63AUV4EdezK5eUy21XrOGyJSqBD4Pid088XvfMnP/Q7h2boAtyFwPHjP/npP3P69b+sn7VLVCbBgmPizok/cYJg8ol1WzZswcFcX0/nN2KlEN8mc0tU9s87j1GBw3N5gaOLrol1y1ECx2UsOMaQLDh4Rpeo6O+DNOHoWZPOD2OYMqvUrpRGnt9N0uQsia3pjVX2kZE7/Vx//ATUTumNXhj4rjt8PD48FHmbzfqGbQ5ZzHE+hQGLt/KIVgQvnZWAW66Ssmnc1qINVtoc9Jqih0RHHthJpSR6bIlzzKSdjTfc69BRmHmZ8rKaSkyoOyipvE19rp3im1UvisQJCYmDihHm87lDXZ8kO5fPCFlOUl7aEizT6aDa5u9O9SluSWvi2qi4HGai6edyKcuLQ5qY90zWe+poj0h6eWsPP3BXiiFXFzj0QlOfwNFRNuw3PeONsfaqp46eMwYpJ7pHCRwTGy/rR8B6Xxs2bhPt3uo/TMvTKm68dvp589S5vDkty+P09PBeaGfWuP3SEy/SWG/VYeckcJjQXqVmyLUVJF/k81rP3Z+82bV4XdmpMl+Ophro92+JKxyXzWnSZN1PWdq8bqUW4XxhqPyw7FqBVwJH+DMLHOVzlpeKMHOeHoFj5/ltBQ6NBYckcNgi73VYWo7RsrHOyyslcMTf+wLHyr/1zp/80N84NEMX4C4Ejp/4yU//1VPh//n1MxU4kphB2LLgKAQOcjzf2Px4xirf44NDI3AIrx24gywjD1R2FNgxGBsUB+bBZSNdPjjEcK+mwNH3NpLjOIFDO/g8aonKqMBRdL7UB0YVtlgKYOb0NoZ2ulN8axteOVgSZ/0Sm5aHnxfGgdnklo+sKczLg7PGeFiXkxj/OY076G8Tlo4Wc2DjJtbxuuTHMwwEZ6Yc++ZHAs8thvBLVLp2Z2HeEOmcjIZDS1w+UhaoKT7FQf5CwjADUXco3NeJLjHxdS4PoKkoYt0DnB6rYqAXa3LOn0nbxFZiTL6gifagiw3r9Y0/72m1JkmTa+Ouyb3ZDYVWPHOThH5izXGcwKGNV281Jwoc3AQ6zpg08foZojoPPAdZcKhfZkhDqWPurz4py36hX2BCY6KTzKMEDj5e3lHi4l8srlYaq3PQ6Y3T79fCEhO/Y4lzFG2DC9hVuFh9cKy+N4LVh18mOYfJWmhXSK9lSftBFI+Uz7XvKt+ZbU3EOnaYad5kbjXk+nvJR0Pa2Rig9BStjrS0Mm0n5nIc7SFpqO8FDn/CWQJH43w8RFGl4eOpnsmi7zpI4Jh0Akccu9Er69tae4wbsuBY+e/e+RMf+vcPzdAFuAuB48c//umfO1Wsr5ioMBGEDkN8DKVh0toIk2Uo8fnwx0w6fyLnuZ+ZGuYGgSMmZ3JYej619ijyNZHjJkfANz1tb10912dRDhZIx9EFF35ckNHG0OWDY/itlIR0DaMDGWlirbuObCC6H69E3/mckMCF0jsD7Bv8Vm+iA3xTzDvSFQelUyt+mOr3JEwMTDg3vJMKz751Ezdjyjhi2+LSWki6ZM1xis86OWN6eJhTBKe/TnPSBxJZjlk0q43rX6awXSgz4CiW3HHNRnHoEuLEWLvS1451PA/s4FB4/puwe+nYMDD0vcxMt+OiQoVNtSinZajAsRG/O/2pOj1MImI6hvwutwgr9ZIpV0v3prW4Dk7QIc9cWnMV87RqKUsb1tpi+9k8wH1Kx8rroz/hHHqxKV8zOYeePzPHemnP0W9rWw62I9Jy1KvuuNKREi9W09nWufEqaczK0xfsUdkyS51gG6d4OhN2cCbk/VIow/oU6cnht6/7ls4I024k0ZeTjXqkO26D1cUa/qUTNV5zPjUWt3WrcRcW/W54YSMm+Yb/sG75muKhg2bSb5l8zIZ0DWmLJno9hnuPXl1vpH3j2FA6H61Ig/66Q+RHPUW85Gh921g/T9oXgbYslzhW8F+VMyGfVnV6PJ5NJoq4yrA5vkJmWrMgLlEp+xB//bVowafnj2vKxhYfyzti6xBNXcphcx9UJufbR/qCKjt+L2nXApQpXJKjBY6IFziE1jUf/vl3/sSHPnSVDA1w8wLHT/zkp7/wVG3+sfuDOgc1U7LEoI91bCvTttdTnnRak6dejW+O9QN9HU0+LiSOdE5xvimOx3yslaS2GmEtvlmBY9wbrzHjb+h5c9jBSXx7uSJ923325WE4TiaSh8ES77NY4fXyvvQ4BKeqymuTB+VjFhxuKMWNQ9i5cnWwspgokZ+12tM3Vx/jlqc2OFF8MHHHDDLQSP+aKU2yFp/2apfx6NySWydeOF8Z699PYbeVwnw1X0uJ7HZTF1ZPfw3X3uTnFzj4gabmmYz1SwoXR3U5Lu4tqRXSyrZBEfkecmuP6wFg+znTDHTJG7Opipsf1rc5KmMu85WkCBvM391zlh2sxnXW8bqMidvU+i8sScfPj7y1iV/9Ul9vJeiwxLLVby88ulWtKHBoJz6CI9wtQbcJq0spsNOW0+2qB8cLfLB6AiwzvpRzZazvErdpV2KtUV9vO+WzYbjihU73oi8uM3QCxDLFXZXoOesyktVZqH16w/nJeJpn5zg0LoFbd5xyT6j1vjacDw47h+eXTImXaN7PiRFVC2K3+umpMbTg4tgK3EyVNwQOY6LoQu+91KfyTkqjc84iJNNWbO0aUoQLE+/iOCvEpBP4v8OyQcmaq7Z+oFftBQ42uxN1yJl0tOpmRifoZUscw0gCB9O2kawXNbe2sm2zQNJq2xEbvsvXYSd57Mv1yW2/cYn53DECh1Sfear7/kXvfPNX/MaFM3RR7kHg+O5Tzfib62dXzWOO51ZR82N/f3yhu0eZ/MGpybWYkL6ulq4Y8j3nPJLEW8dnq3BR4JgZVfm2BQ4u3q4Y2EOsBs5G3DPh1+fhKIFDu2xFoueN3SUsOHjGBQ61cCJllakL0pKc0kzT/45vDRqrjNhpCetNi7DknBy+vYbZ2PDOyU+6ZkOdquWBjvtvmae4q4n3mWGcc9BH8+jH7MmqY27GLflv6TnZugpNWB23IXBcwrcPlwOuvbqEmNKKDhLbS8+s8JsGse33UR+pJvy77aAJg93T/w/p9nBpV416GjjTsKb8XCxNsSHrXsRMx0Ke01s1kyds7ve6zGcmaS1RDSFvqq2d2mWCOV/Z/J/k1f2pVVPXsB0WHAcIHNQ4taDe3jDmgak3fUYGwtK1lKH8x20IHKN94tgY4roCh0uxObJMfglZthwzXkh0UT+6JSzL6i9jeQhCxgu3BMXasK2rEx2NO+6z422vvLARpMrmmSnFDGbqOdFZ9/7yCqaW7jW5xaFaUIkCRxs2ij6qJR89Aoe4xTKThybc1PeCsJ68x3wlv0jhd51I/iN9T+WprSJvBQ5uOQtZzFikJ7UrzPM3cfeNt3RkXyzbuKSzPm6n8wSO+JnILdXYbYQbFDj+jXe++Sv+5oUzdFFuXuD46E995j87/fov0tCDiAXx72IIVS0FKZcuBkW26iuS1UUUR2gG0lNNNcLy3FI/zL9LP0gmfBQEDubo6O25hMAxDt/YHCFw9OZhOM7DLDi0YccFDrUQMekFjnYYkY838QpZ5aoCP/ErRYR8WN7GrK5ne75M6HVzg5No1UGtPk1sANwOJuH9+2ky9trja85iw8Vl4pKReB2xjZjcCMRtAzrlsshTs2HZcujs529TVo4RODia3UECff462jDichhuAsxGyzekthE48lbC+Rw5n5ITSrKinc8LzWwyV4zH6S4yQptOLrLeHSAPFOM1lNeXBsnGL3MJPX2weCJhCiGiHZCW1yEJHNz96RE4dCH9AF47ixfKVBQ4WoYFDuH7IwSOLnFBqG/6sdjKoAXH4IDDi+Xq1CaukuVp2vp8PIX4HpyosTyt/jTeOlWXN06HH6LcGJYihEVkywvvVyO9wrAkrdh/hfE3WZqWM1CKHTmPS/rbP8ed63lEc4L9Q6kFEC046gm4bkLYb8HBx8NNvnumpHsCR23BwQst5Yhjy4KjWaKiEThYkaCKUytwCO0wDZevURA4Yp/ZLXC0Fhx74lhP23jcEhVdvJb8G/jP3/nmD/2Xl8/P5biNseoGH/3pz3zf6defWz+7oo2NDiNwTOT7eGXFOeQLKkAU28RO5Lwpf19XxPIxmktrjxgd/ZtJI6fVPgTj8sZlVMNRDOeg0+qnyj0ChxznUQJHe3TU6VApz23DW4v0CUJHCByySHNZgYPuVtJGwA+wm/Scr4ulOeZYsofz2Jmyb+KiufxaQqt/jPWl8mkE8WJ+cAOJmWy7acPnOMcstNfig/FOGkmGL/c2AALHJWgcok3q4W/4zV0DL1/lAfj+812YF1MriTSY3Rt0LWyfVOTBhPpu6zarOi8lXPdoNv3k3RV8ZK5+N0WTJ0FTeBPtE7fp2UpDMGr9uN6jkAe3BCY5a833wFaD/DRS6BLctc8UFWe2uYzAIeRBLdhJ7PlTstIXF6FP4BDe6l5V4NCH5Wiq6FbYKJQ3PqWMX3YyPYTfqwHUO5N9em1KYsZsgtGTFzKenF+NaA6dbUazTw3+wpL1YiNq1L/pw058fogX11GQXFddnZ51UU7gCBsVNAKHIumjBI40gtifPLvzOwQOOb5OgYPkXRQ4xPt8nsCReiahT+by1zzTxUNGhZp+gUNn9XMLAkdfnNVV/bV3vvkrvveCmbk4tzFW3eBjP/2ZHzoV6ne4P6jlRgxgiiqZVVdyZXbOJ1lGxOAEjmYlSVURqyar8elhQuORd13xxxfG2xS/RGW8U8ymvs8H74izh/sSOB7aQ+fFrWBmm91jBA4fVi9wSMOeJqwocDADDvpWkKTQPKpT6QOjiIuOu5NfDkYMiQOBEHvWH5Z0PEbl7sMq2j3M0+NaA5wQ8jC9oJ6oQ2Dqdzj6FnCfU0Fc44m9osDRMyDteiiPETi6ViVw/omkul84YNoSOBTFsBMg7c6SwsbK53O4V3ZOlDZ0J5bwLGxZYFQXnXVAslOMJQGpABkGlsnHBpvH6AlrlTmpk1zrjrECRcrUQr6pHexGMae+JnpsS1wShB0RfXidWEbjlSYHurB9AsdOW04nNc9twSG91WWyJc9LntsHRxQZYt2eC+skPxA2ThC3tJNxv30dN08vTrV/dQ765vS0vOF8ZywuX6s5/oP7cWLG4gUMbykdB9ixdvidVOy6Bnyi7QHNa0i8OFztakisPajz8GgZIpWWYneHDLfawUxT8VQlB6xMWl1LVJqUYixN5Nqtn+PZdbghgSONifxfhcDBxuDrV9EW0SaRyV+xZDjVUTlMCS/66wWOMmzqA9J9bvsJkjE2H+csUbkvgaOnlymu64ff+eNf8R2XztElee757y4f++lP/8zp11e6P5itX6MFR9zitREtVoLAsSRluxQwcn9Q+cRl4qBsDRNtehWlwAj5Poie8cYx2ZEGWKOpXWCbup7OTFmQl3ByxnbrQi8hO1RiwirT982gUqAQI5UHiYWVxSQ1/B0TQiJEpDjXD7RDpG9542nNGn0SZcoDNbA004N5dMLGuuTEedVIykd718aFtSsz/Oqx54JvoXAGhRPlQFVOq8Ox5FSKfmxaJk8eyr2IuQFfzsN+Prmw+fPchJGEAS4+apVRh2/FhvbVAze5oO3BlshAviusPbzoUjoPrtPyx0p/H3V+DTPo35gxbOZxH2m7bA79tuOWf1N60Nilq0/mI5jY8UZXtPpy5PsjoaNUhk0bbVm/zWpcdvNkbJr0myj2hR2Xnla/GU7QeDz9vDY9LR8Msc2py1t9b9BJjl1CT18IES3ZD1Q9QQrxNM9FPJGLTXrjzaW9fYzGw/e1bWvRjW3Ta16yBGGIFzO2oxeFQkUEdLxja99DTZtTHjLScjbTlmntIzCXg7KdF6wy+OD8WIw+v9yWsFEASUtOGmes3NKZcKZwXzWcJ4hluLGvuwIm2uOs9IUFuGV6n3j7m778q47KwSW4eYHj4z/z6XUHlS/0f/lCr8UJd99nueGKFhw2bGMVRenWeo4ZKsUxIdkFhVqRbDU1/HIUGiJ/zwkubKyicqoP2zdAOoJXQ+DQq6/XEzgMf3i6xM4ZnMDBDhLFMYhOIHGdV4fAwQ8SF2KhkePNhhL0gVuEexkmJOkrEyYB4XhcfGIeTsPEefJbu+Z6bBlrrfsTOAbPP2gScRzXFDik9PfM/8lxdqJZi3Tr79rKYanCEFIHRKwv3IRfznXxZWG6mPMwF2bJVDgIf6eLjCbMNJ8VzKC7jJvGWx8v+x9RIFmWIk+t4GLJX5Vvj6Ye1OnR87cEDo6e/lsfVr/V7QpXRw9q3G5C4Ogoc6E/Yg5uD/aKOGldWYh29+DiXvweY1Pc/WTdynXdqnW11rCr7wwXzjsJLbZ1jSKcNaSYuVcyZDJb/E3eVtNrMc2HadqwvmgnhbVwsoUgcOyE9eE3olXcG0ng8McML3DsxKkSOJQiSbEDVpFJRuBQWHulVpUdtzHPmVTAlxY4GNHZXfLivzOGtLGiwFE191Nb6/eQbY/0GKbuWyHunsX+vbngqB6J33j7m778iw7KwEW4B4Hjs6dfb7s/Oiw4aLi0nWxUEYgYUlTx1qJ8iiL71jax0rTa7k2A6+/NVDymmlPOAwKHRNcEVBmxJA70wJbNhiPNlktYcCjTqg5u7UAiCRxaCw6fL7lsGnPJJk/b96bJh83OQR+cqDFPYS8U/5+hzrPafN2bwHFVA44LPL/jjAkcYrutfv4FgUQys9+Mgw72TPu9vPYmBKna6V3np8IAmXrfrcKmN2aNQDKRi6PLWSqRJP5ZDd6bfFFfJHV+rVQe9Pv4eS6vKZVR/L4WRaby+0b8OKdB4Af8PEdYcPDxQuAIybFHBYFD1bqt9fnRDzqNF0CTXZZ7VObpyb52OvY4ud1Qlg+cquGjCxuddrqlJ3GAG5xf+51RfPyNc8/SfDnlg4og4RB7PbZ5KA09q7o6vc+CvfIqLTjENy0kvDJZMT05V9LLpl3Hk6m5LH1w5e8VmW70In5mobPgYPImLs8sj0sT/tq5aQrPClR8HLwFRw7vq3b4zPZBvAWHIaJdl8BxqebPlClHFq7MDzPhUFlwfO7tb/yytw/KwEW4B4HD5p1R4pvR/P2WwJFoLDhMda4PZqbmBpJ0TFNa22IE33kVIne140v8vCkcQ+DY4AICx2FhryNwhPEKw0ECBxs6dir1t/sCR7K64NKSnDqK1hdlGlJfUAzDNgrEpfO0bgP7MD3OD9PDarFBvK6YojvcWre5nYetY/dGX62/f4FDgtMiF2mJGXtMWJu8WcC2aBC4yT07AK8n5Bth24zGsHVvzOQ/DTpNFTnjhM4EJ6OWnivkK1qQNIN6W05qTfld+XtiZj8p8eqawva1to6jspIxPs5igiKI1Pk0xiFhl8ChfwL7LDi4PBxlgTU6cxAmSF1xjC5RGbHgWOvykyvfZXrhLTQm727SPr3hHIJa+7r7WZeiWPPS+XRy27eGUbGveg85vmTBEQW3qodPH5kdISzbkpTfGT4sDydwdLT6zJIRKY56dLEtNkh5sM3HtISoOvscgaNw1ClY6e49EtlStWzLm+2ydwWOqbgIU1x6JZZwAocYJT8HOFvgKD6RGrnE680CRmZD4GD7zA1GlbICvUQqxjA8aNLtEff2N37ZTQ9TbzpzKz/5CSpwhCUq5Pu0XGSOTTlD2u4pPH71vouTXyIiCQ40/vUBLxyQmq1h+Y7AITzCW32C9F1fhb7kw3gOfOM2usXqltSkj6JD/OnywTFW5vxkuWcXh/Gy0S9RiZ3DvsDRpuHP4ZpXqQw3RZb0vXyl7v5s3EvaLrxYa2mw2lgtOFZrDps6UZPeiAUlVYyzSYO5tFvYBWmU+7PgOKZt5AaPjSPrjTxIk0/+bR6NOLS1hv69mdSULBYqgYB7JptdD+qJTeNMlOQpZrXWDaSwFGHQvSmklDlPv30bwYgxlglf3LOFHKYXQi+oFYu4UYYVBCxONOgzg76mBcdBAsfoI3l3S1Tq59cfW8e/i31wIsayvOl/m8fJb4vsd0Zx7rXdYNWLIu4xflqXp5zu7pxFQm/NnH151COH1hmnqepdeGosqevF4DY+Q3N1Do9e4Ng5viseVOdvBt9+ceKTqwWDetLPxLCXR9JXMKtcfZu/EUV0RBoCT7QN8knn8Q7jlqOOTRY4mmttbVZl56mSwEHDyBmrxSPJB0dun70kuC1w5KcgRre9NXqd9qW4hMAxOmoSRtXV4be/AQLHED/1s79FhjpkaJAaYFuIFtx2re3IrHImOhHhw6QgbTyBJQRl0yJp7DaQhnwgk6i4Xd6m54ay7+ErtPjcbQ349rlMpWEGHOI1aPN2zDVIby47fMhOfaM0boKz39mekxbrOFRyLx8sKOTGM3SaRtrqkktrK2/xvJQJ/hxmgpQ7uVJmMVxQKf0kjPryf+GEjQeXgejJPDoTU0cqBOInB7fQPI/lQRzg7FjdnBvveBtwjMDBRdszUZUmj/xzxiRcDXS38sW3ITSe7fN9HLsjZ/Kd7vs+Z81SvLUIMbkH3HAjfSreFEtc2jh4QSacvzmLiPHW9zdOSKgfFPpVdX1xWU9F+5hxjVVo18UmSDteECYibHcy/vxy9CwB7HnpYOMafhtEJ+fP4vFUdGHr1LB0xMf4MOUl/4ufXLE6oF82Yqr6ZE9x+7u7pvfaKcnXpif7xunn9dPfD8GCY3b1c6ET60JjM1Pa1jU5F6jXYJup3H55Sr+LqpAeh6ondWMCQ+KiX0cxRdPjco0jt9vgxLw06ZtgGkuvNbfBXAySBWbxqKU1KnqBY2K3iZX6yZy5Mq7tNtONtYwRwyXnm8V0pG7baZu33V+ZWMVMbLfkdDfzr1iKmdpgLo06/qovZPulymqEllp97aY+9ajxAkNP78eF7JOfBfs2U/7x9jf8C7cwSBW56cyt/NTPfrapQa7xD5P6uLlcbX1RnMTcq/z2LDd4fueTcD4VEOr0pV57qiuRchBvSoEj/mOZnVukWMYVuw4TzMGU5IjbmI0dt35gk+qJUxrEdwgcowPzvi1aeyZOqlFxEjg0lg6ipQWbVD5YbzpXdyZZ4KjyYDkLDD6v0q4tEn5QNTtx44V5SOrmzOVDgXwfb8HBJkefIXeDaKM62IooHKI9H8o8dL35EZ4p9pi+bOSwW/moB8IbwQskK4WNPNC3h0JafBsm1IXCkoamEYe1+by8ht+mgs5rx23xXdu2VemIViTN6CKnn0baMcyS56T1NTbOAMJ39BpSXuLkdynCGs6kqMtpkN5HEm+xQvN5Hn0CR++SnNyTezP2uOUwLeMnlwkzEeF7/Zx3WZ2isOGFh7BNsRNMvECyvPwDU7QrWkUNu27pulpqpDjJ5C2tjTDVD8l5usy9tjw6ILXsLiq1Tzlv0m94XxfU0fDO2IVvypnrmPhln11CcS1whMT5S9gQODqrKU213ap6u5ts9dG9fm5/KryOq9tyy8/DHPJUxEOC16sKU7u4J3BU+Wyzzj+TrLUVF9bGllxKn84Qw2fSJ0hPyGKIiDNlkeuaAsfozKtvhLk1dw3zZDtPb3/jH7lpDeGmM7fy0z+XBY5GvDC5KsfJRuyji2rH7WZSCBhBXGD8bNRpp3Prxp5LVytwTJXAEZBNmLkk7l/g4Cekx0xa+kSAvuPnhvPw16v1T9InBvGTC+nt+qZzq8ppJzvxYqv+vsDhg7CziCJcmRVuMscPtrm8zm6cF5yJzt5yY01+Js9qn3AV04LA4YDAcZHztQKFfyS4sPodW8q4bR7lbQXbSYuKB0UeGn8W6YsmLL/UQKgLrF+N+CSXaaay3bKe2HBel571SmwpzbOTWlHlKR4pRgRl1kn5m+b7ONEgccR20Zr8uYiOqzf8/eHRO72WBQ6O8b6aj3ZrB6LquM33yW/Fui4ae2/K1+ytJYylTqZz3TKmFJPW61+tQtblJNZZabzplp2s27rap9fC2G8N93D69cKnY55oFDHDlcAxNeJE4xi0vbr026a42jDN6g7rfeVIQkAbPw/fRTACB/siQ55Mc+nWec0Cx35YGmvvsoRC4LADAocPPe01vLntkOqzZa6BmegX9cEWIWnMrcDB505aehjzMhv+3Hahk7BVtdBtZJjdwyxz3c1ZtriH9yhw9OWUXZCa8uEt0lYLDggcQ1CBI+IqlplKC46qcS9OYiwhOEsL1pFoIYTQM5gGn/wdhzgtTDVr93DaJF5/nWYbbc/tvQGBQyiv57bgEN8KKQvijLvLxKEXOHrS4suh7z7UeZPC7S2zkfK9tw4ya3zbVz7LGkmOi/Tlq6+NRzOHzWDzdUrLXjT03Z9bYFDgOAh+YNEncBx3H8baq9E1vX1tm9ZnBRnETuS36k1dRLhnmw9ldU+59FiBRIqvHeD6ueTcCBH+c10+hgkTnaJWAkPRHuVyq5ck+GNxG1+uDtPwe+0HEU6KrHLXViK7lZOeNQ18frnJiUNtgrFVR3VoLThce7+c7tr8cpqCMOG8HNQ76tiHU7iH0Du8PP35RKaba1oPfsvWdZnJfIrn6QPT08t3XByLE0xMeDMe7oTb49IvQ5njoK8SINLSmXQg1iMiWmxMdGOYOu7CwlkYZCYLDjbueumLXJNkFzmjAgfvyUvNxiRd30Zz45v23M2lnEuuRVm42Hsm82SUjZe14OAn+tzOKbIFRwywVz7kGmg8cV5TnU9F7CxwcOPkvfRbEVhnwWFLC45Jvgu3ykUFjvD77T8GgWOInxEsOKjA4dhcosI0iqQBp8MMQbwuz51i2sxQhIm3Pbs+J0ycTO/79x02LFJanv8NsmTBcUwlHfSKPu3Op3M4dUorkjigp2dLyh4Ljjro1q4kiseojHvasOBIn2pZ0hThNgm7LLW7tkzig7Q2G6/NL06dq/H9JRk70mEdBI7rww8I+7rwY+7DMcOeHtFjeHeIzbTC9XlVoBj01aFUaakn7HKeupbZSJYhtXBhmK1mJz+x5Za/tNse2vJtpamP26oxakUPnyuSr8IPSM4TvYI6v9vx19cw+Ex1bFsuChxcf9RRoVVbaKak9iw48gTMr7hY3ETH2hfO6sLvSfLe6cv3ghjh3aTPp2MunJNQXpyq/WtOd7DL6hz0relpPd8tUfH+NGICaUlAeDtK67UNMYdc5uMpSNwCdmoeSMuIBeSKfdfuEq9eJRTncR2lT2zfgsOfL94Z1pfCJVpnaRRCy2+jXZG+ap51mXa7UeHcLRMOVuDgyP56ct6lcmzHc8XaGyImaQSO+iXU9vaw5TUUO6cIAkn7QkkQOMIztO3cNKafr5VLhxJ96KSnweYe4XqMPRPjoyMicLjymKe3/9iX3vRw9qYzt/IzP3/0EhVTxcfTtLfVVrNN+LMEjmbIIeaHzVPDMQLHYZXmigJH1/rbCwgc+muQGmZ9WvqmrHeJii5DlxQ4yrdDpTl3HPzvlU3hb2ND4IgfY+yPD/P0uO6Vcjq4hA0TTPQpR/J2fwKHfkoKgaOXexM4uMTW52wnPWILzPZ07OnnCBwxsl6BQ4qKm/hXk9ooJNjqOD3TFH+1A3dD71kZjnefuFQVMr4Bj3nOibRbR1KhqRRT2DwU59NdbnqeKWayu2n5U4W2ZVsup2X7BI6FxJPuUTs98p/qpQLzFB2IOiuLoDasgsayRHX7wYVblofpxfTyVJafP/35eecY1Gd39ZXxwosbq+8M+6YTOJ7cLiSnOE89il/i7H1uTDb665hTf5ImTZYcKeoGnaDXjkOn0n2FnYtJNtPbC0tY6s+mGTPF5SzaJSqywLFzOg3X03X1CBzMNWy2K8r2eFjgIHdNLXA0bSpTDnZD4Ih5rgWOQnArY00WFmonozFGacZTHbdtGGmJSp4VMulzAsdCv+exQdF4fwscJC4IHJfhEz/3Wcvu7DTzj/rmLlCmfHxiB1Yvb9mNp4pPe15v+2yYnn0RBBU+Av4PySfUGPwgdLSC9Syz6Xp7I+xaod2O1YfWHZPoCssvZGbj5OOtOowoDtJOwsgLYXy8W5OMnIR0zywRSfi1pTS+MPDj6mpzbPu+t0toStYh6xIezjiEfZwf/dIUMlaO28AWxzYTZp6Ha/aHImI3fsU8jE3D+3Zn6YlDXwbXFEguvxWdR96OWZveohYYpPLuscDgwlrxOeuZSHD0LN/puQbuWDPb8OmzVhEba8/pvTsdnJNZABnY12IMe79JQ82Eyb6xSGNIo2gWw0exJorCUUSrW9FWKOHKVppTl0uFaP5MPhTz494oBSefcVHxal2xvB5EiimLEkHMWJ+Xh/l3Tme/THlfrTSW5dGJIouTPd44RffCCSO+H1t2nM9XZVD7waB/Fo47hX628aNh0i/uO1ZiZKtzHa7deLNJU0HPI8n522kmCDm0nKaizfI+Rkifwmz1vRtHI074o006zf2PH4O4JPrxocfaKDiLiKI5oFRtTd3UlffJh52r75JLGBoPt9W1YDURnZsWYYVrLMXZaVNBK9rX6HeF3Bs+/jKOIq1J6qlvl7686sZnH/zXsERliE/8/G+z3TFjrefwmxzwTQkvPigFDubceN6y8YRoHgKxsxbe9ajjKMrBssfToRsVOHqcEc5XFjg4eq63a4qnFKXk9KvOKwkcpOHO46A23noAy6RLxQuOJHCEALxzwBgHeYPZfLdfykWnWoWnefX5CKFnr3CsfjcezNxck/s8Z4VxT+DQilLvT27AeekFrEAuz5HDJl373O/YmWuImDaTnSBcYOtXVuDQC0W7QqUmD2JY3fmy6KF1AlvHS/8mDdZkW3FCEjem2NYyfksYSxhp8lHO0FfiDi51umYq2wXGIWDOAHt8cU456ZHg+Skp0zndxc34X0zrVqwx3cV4Xxmz+b3Tt797+jl9np5O5fDeZOO5T2+4c94zL6Ynt7PW66eq/ZoTNCYX9vOTs+RYrTKMT8nvTlKXQXNR4XLpZIy7263LRUpTKnFC1gSdw3dMHGzbWOZ5UyToWGIiCxRMDrq61A2BQzNWTNYXzH1RYsmjl6+ytYShI8/CUmK14imeQSqGlvkpBY6Q93iQtL2ywGG3/qzuNy9wcHB+nmjwYvrELlcSZz3kvDrWMlwhcITsWBNFTT4vEqVf6WuOF8ZmU+O7qLRA4BjkE7/w27YRUCUhYseHRe0wdNOCY+Ncml4RJh1v49Dmq4y+Q+DgI8h5Iev42EnAcE045kHvyda4BxPDCz0da4t75ld916YPx4fl/FdkE0HxPQx5g7froLP6zQXQdibzppqiETjqQXr1vaWd/5Qswtbj63aw8zyHNzjWPYcpho5rkFyZ8IGvKYbcQrN/C3l4BQSOQ7IrLF3jEhPrs2RlYJV57tlGtEPpZXYwkILrhIQt9AJHj9i2nS8yo7JxAmLzgbXFL6wrqonPVH6XghZLksifZLZUTGQa/yJxIGKq7+tJVSW8GEkC48vm5fLBKQkl8e33KexsorDxFH6v1jG/74QI1xfO6/HP5x241u1Z16Uqa5hV0Fj9Z9j1ZzmNpd5eY3TOP106ZLznT7dBUDHhObB5KUlaUkJFn/yZuyP5cwzHDDD3i6aKk/jsUEdRjXetZY/v52E73s2QzGC5z8loOmk3rfqFzDkWHLQcRIFjKsdt8mqVekLeIXBUFhP8OLdRNDYyVI4bN32ZMJVBsuA4d5mc1zuVebigBcf7XuD4VyFwDPFzv/i5vIo0OL7J4sTUXMH2EpXyeKze5yxR8e0e09gK+eEf5xwb2950CBwcdOurXZO80W0buwZjeroEgwuYcY8KHD0XfJQFh0bgyCYZdKBVJtWU/WYHkvMjWljEhYuBbQuOjbQ0Agc9nbPgoAdCEazHHsLOKfHwbEl6JNxUx8HlQXnM89xOfuWac1x6z8s9LVHpimGwGezbQrsnsVzH85vNviUqfCYYMUYqhA7nlrxwIvRz7OGOa2DzJdUFRrBlRyiuBWvi4l/LVOebKHAQwYQZ5JczOGaHAiHvpQPWkJarH9lRYpvWPktj3RC3aI3Chk1awXo4bynuj8/L6n/jdWfd8bSKGPYDYenJahnyRqit82ls9fnpIfpJqRyxrctaqHTR3sX6nhimuLhplyUCiUy7a0opXXnxJ4dhR6Rsmdc1J9SnwfaGt+DgW9e+tDamqxqBw1a94jn6hsYHR/Rlkr7lEsrPVm1HIyQ8FQlXfiY0Y8RtwaXaJ1IoT1+G+vadjgk3d0khediJcprqPiYJFO1el5o+HQJH5oP/ypc+/0Bug5vO3MrP/uLnmhrkDtQvBMJ3y8YVNRYc4cy4FKRniYoI01dJDqJyXvQChwTbhBRP7rbYod2GtC8H4/QIHH1LVHrQizc9pdgVdtgHB79ERU6PObZTvr0Cx4OVc0Cv14QM5bcS+11SkdcdgcM///4JeDHPrpN1vklmk7e2tVNyAnw1gWNYdBRg7yMEjnBUff5xAsdgDIPt4GW25eb6mFbg8IPPnjzoRAepreIHzT3XK4gOSgFaFi3GBM7W0iKmRqfaIchmTFTwCNYa3NaKk6nCxtD7ZelD0W1xl3CkFrviCO3zzfnSNdRXn0Wets9YPWOs4oc7xz46S433Jr9DyrrDiRdF1rCPYVz5dCreR+9U1DnvfGjyQySLEK/xg9KZEx1IXaCD2uIS+ttlaVpoaU6TwMGP/Pg25AYEDjYCKeY7ETimSuDg8haW7CaPKZaeyyY8FQnT4dAk3DPBB0fjE8O9aK6uSxyeSk6oFQKHWJOZRK0cpyhwMEtUVDOunTweBwSOXm46cys/90ufK6pt6lKjsCH426CqNX0Ba8uv6Qd5SEVnNJVIQmOo81kIMeFnZrazNXwTcAjuZQNnsi+FPyAPR13t1ry6pWciMzph6AurDy85P21jmDtGIZvXa8plPNz6SiNcRG1euiWy0EG1fz7slH3S0Hj4CcPWzik5kzmFVchYjZUfaNxztf+69c8P3xwoBCgzkTeG+4yLjuOwHfgZg+7roc8XO9kdvCx53Lw3WLscfYMufVh22ZjYaWoEO2EEPdWT6n7E/qzKlw2D39Ep5JavDF0Jj14vddppi29qkt/RJo46YPMhf2babmOrY6Gts2xBMOdP/PPT7N4RRAu5fVyczwwnjJgn33+swsRqc+F8bjwGOSVmarVomP33rjb4c/Lk7cEt67Hea4fPwfJQFVhsE6loYfLvzf43DxKlmhj7wCL8FCebZV8mTt4L6w8SF6ercLuKMBNdmWM2tuffNNYZi7FuRKNKy5bVWZlJ3rGoJvVQf8hOQK5k6uEOqWN77ZZrEehykKaouNnVTtlZKy8hTvmjMe1bzXGiSykOWXK8PH9rHBYtSAz7XPB9cm6uFOVh2/TYTRwu0NnLbcNInBK6WD/wL0PgGGIVOOLnQjCIAge5hMJ6g5p2GL7KNjdXKI0tJ6ISdmoruhdbKoHDxIGBYZxUc7392C1z+WL6Hqnxvsh25HVaKScXjlcoG/7aehyHduR18Jb1FTc/qB4VOLabvTJ2UeAQzq2PSGnxLtikwc22wMHfE0P/cI5GX5jZ/XYnBK+itb+NOLSmx8Q8cEe23X3LeXwm2EHszQoct5inyBWXIHVZcBwk9HLtgvD87r+py2H14qCQLXGJChcHl1ZPHsIUWnE/5Jrbcy+VW692db1RNNmPRG6f6yNk14hqgMFmjdm9Q5pAL0GijruX0B2BlikuiKLtVz1IE8ShaL4XjyvKUGfRQvJi5UfXGDpBk2rLptxevGBIcZmZjY7VJ+swm5fW0xbrylMbL281UQfaT4nu+qY9J2QgfdQLHCb9S9soV1vjnCEv1t+Jn2YlWy8YLumiui/8cTa38rLt0nE9/wzY8Fxu+TOjyxh5gSOfV9b8MmySHptsSOPnHJOUNykz67XzAsf42OQmBY4/+iW3POi66RGhIwkcJvyT+4KGctt6k35lUWFbk5Mm8+wSE65TqD5LfkLa8ILAcQQ9fckEgcOdPyxwiMNtJq2eh1JpwbFO4C92vRqBQ9sQX0LgmNg4tgSOUtswrpI/GG+9Ed8L2jAauJzAEdsNLq+HaJkXoW+u/NwZfu70t3huHysCPRN+ftYkxKsVLcrXDvRoe75UGXva55449GG32sw2yTbsplPlSyPOosfywDqAFNLmU5JaeF4E4cLmDVn9shQnWNs5j8fWJSnBkWlOjfxuyia22+E7K6Xc5pmzuGDjThcVRAwueOokaF6nfM+oeKERQNjlniQ7EDjOFzh2BQhZ4PB1LNYBW4w1zhI4puxHhxU4CpR9gd0ROOjf8QSSn6n5Pp9bJJPyDYFDykXPclTWZ2RHWhwQOAb5+V/JS1SKpRxMzkULDlJl8/kdFhw0SBRLFCVXPGqC2JGbHlMdOwjTNw85Ii/3J3BI6K6ha2KuijGE1Ti8i1uynvUmkEuzXqLCT9g1bC5RYQ7PXZ1ELUJw30xe/LHr1rB+MOzFjSik2lJoCePLeD+lTrW+hrJeMr0zc5jN+HNwkcf0Whfy/AUmjze0231elz6LhjFYb/pSBevaVWRMcLiIcLIZtv5OG2/H4FWaeDMOsqVB8f5SviISbc5Svs5uShpTWDtVQyaBJaebrM5MWH5hqj4x5rGeZeVxZOm8UzsA1Ikh9BQ+RCWY0N1oyL3fvi3CEhUO1eO38YyppKqcL/VETVGeMaatRTI6HxzlVaiXqMR+Xwyx1+ZSh6JE+ChT6ctMyM/mMiOlY9+4rI+Dt+BgfC9FHx5bZcU6J6iPc+dTgSPaa3HipdSfxG8VQhJXnpJAeQQ9jWrHo65dYvaBf+mLb2EYI3LTmVv5+V/9HSr/ZaGTCXsNC47GX0Ytwtfn8kkV17G++XBNhmm/19I1eOgROA6oIUcJHNyFnd/JkDjEUYc8qS0P9gkc+iLfbqCpsNK3M8JG2dQCR4dI0xzfEDhmbg1wR12ULDhM9SyvrK7iHs1D3saSCBylmBPaEyJw5LrMXIdlRLdRj2x3hzlYsa3SembuTuAYbQeF28t2eWzZ0G1Li8M8ogO+Ni2+fO1m9EUcwwJHSMtWx9h+Q99H9AW7lEijgR/ouFZ+xPFt1yDkMZ+W6jY1+c//VtNXf4y14DDuZUK5REQjcMj9G02T/i2KT3GJirg8MA+OpeknZw0gvXzhfaHUYTYEjq6XTR0Ch1ZY2gmpS88Wt0/vgyOnz+eBEx3z2cUW9+zEnKaiyVC814zAUcSjmNBPUTTYEDjq/Kc2t02rkAtF/UEYX1XpcmG3tVDJAjqfm45Jj1yVL1HguAiXj1gqWQOB4zpQgcMJARsCOr/JURs2ig60Idp6fKJlSFQC691Y9ih2EWNLvFXwfRrXuz265TmXQY5ybIDV55SxY2IumvSqohUj7hEHtMlLx/lj4ixCTtPUnSR3Dbq3N5uCBZOFuUfgmPJDa+jDR57l+HtdmrJuD2togxDDkU6sV+DYetSbwaIc9K4RzaUVXvq3j99miY07Gb2uANbjkLRP4FCKvyEOLmf8IS6SHpGGDH630pp6BQ4ZK72JLNLqirGJywplo+0T2xFI/mZ46snmbUDGp+10E6tNbY6zv3NNc9wlywYxLE64WoFD9sFBM6LLO3XUybWDbKtmheepmOe2U7adLrlNsRABdO1rLcKltoN7VHsFDnl2Wx1WTLxs84HpbxW1uurWtTWWWyKzcbfIEZ+gIUdmUfRq0+DzUj7B9fbOZXXnwrGxyq1CfNbTMxoeHEm4Ez77vMVrZEQE4ZymbG0sR52otXef2uQaxeiwlbrse4DBtOSmQilwfD0EjiEKgYOoStyNLW7WxpUtVZha4IhOr5MTbBfIj+SS4zBTnbwhetRx19BBiK2+kc7RkB1JKSLoSIPbivcyFWlswi+ifPXPKdyejoEuOzrhJ8Bzx9WxHUpzXdGQlUurI176fdo2RJrE84NqzZX13ltJ25TllPwNfVy9FYrvhNc3Y4+mvBOxrPJjnQcT9FGX8pPTPH+CtLmNb0+0XKfeoxQd1EXIzku1eThKCHjuLvG6Agefha4Kpg7ZYwkn+4ngsrD9Jq5k6+1pff7ovaACxE4725UWM6wv/DPwediD64+kLez58/mQI8YbPg89gXt27+iBDvC224hSiJBPSd1qxcYCUSYvzPVavq/mRwHSxJObWEtiNX+Yhxu4Myqp5IybXO++jxNmItxRGe1UNU3qU3cm88uWhWw815Z/bsVXpFzNIKgYYGm4MywKFxJmDvdHyh8R0Ni07H7+GzmNW5pSCVBRKDL5rBCup58abbAYAatrWPHcYxBekOWAwDFIIXAY2ri1FGJkFCf2hBDuWDWTSQLHFCq/ITprJYZwFE01F87Uj3Ib+JxHLm9XtX+bbdek5yiOccTX4+BnfEtZ6XxeCNDHy5wv282p8kUn7xIzFTiUpuTaIWZaCaIldorVSWwcwZS3WSEyhXKLyv6pTXkIkoypnry8Me32BOraAkdPtOzE6u4EjmvSM0Fi1czB829A4JAYNJWWS0YrbAuT7UF/HUcJOu15kgixkQdtE39AtSl2O1EgiTTDWeu6PX1tG1+jtgZzirFUEwefjuHSsnkzWhnSRmm2Ta1S1IR11tJagaMHdkB+3jXs7yozNpK2wpBHdSJDFlm2xrmVwLERMo0/wilOJ6rSLgQONp3tQ+X3edrrlmxt5a24DO56+Sm0bJ1hd5dN+XmYLeKOlm1dAgd7VDhfOV/oq0bPPw6CwHElfoH64KBmM0rhggu3a8FRHdsSOJrXuuS8Jl6htOMgorAYiQf0Lw4a+iw49JEfNw85ap26LhYjhuyZUXIR8wLHsAVH+GY/AwMWHEX8uomIuhxN36IiI1VnruOrApnyS/ccO1HjNNl/tPVQMzzdybJjyemQhzpdp/hcaydu3MmXETg4bvZtwk3M7Y96A9yyZXqs5Zod+Gh++/IqxTsmUMhbv/bk4Xxqx4WjaZ3j20JzH/Z22RDO6jrcIok/3CE+bN9UWfZ5weej6tl2tar9aXXTlW1mp+5ZhZokRtL7oqeOh28be/xn8H2XOcvKp8eCI1lldr4cqCfQ2vNqihxuCRyVycisSDNN5sm/JAoman48ustCymOnMMqvmesV2kF6Wvn08AJHWz71gXCtHZfLiyFjc4CbeHfTgdX64Pi6f/6mr+ymM7fyC5/8Hdtu5yUIweRzdizKhWtnSkW4SrSw5FhqTMh38lSkhV3eIeWDe8fecceWjkGKtGayi+EoDrLg6BA49HRMPqXdTjpS0yj5Ga6DbUPV229x7IswnHAjhKzKod6RZY9k1mja421gQz6Szykz3pBh/e5BKXAkHxx00MDkJ38HgaOLrlHuUfmCwCEhv7PT5VncUZbrE3vKYcvku01NHXLT2XIdtmdQO2oCzUXZc13qiVrXe4/NeJ6VNIArcS0sY6Ww//Zy+/vsm2IsHjG8eonM+Rg2ogsIHGwEnA8OBbtOX2vnsr1lU06MtXdrX+DYygRtc3TTzGKnYMYnRKRc3MPkca9shB1XirRM9bX7rV9CyFtw2Oa7CLfLXXHRtsiIir7lLO0xrmxvt1fnUVtwQOAY4xdXgSP1snqBIz9pXLhW+S10U5MnM3V0jbUGE7aOvdRkW2oBIsVl2+vteVD29O0i7E0sUTlmJNS1+0ZvB1ifrwwnh+XZHSqVPShz/nkCh6msiDT5koaITcMfBA5tOeRWYP+M4tFlKoCJAsc8p7cAhgzovbyQbKvIMZqP+FsoQ263hN2cx3A9sumRPH+7wA5+r7HW/mBGBYOVqwoc4sBPl1/ubaRrgZiLEN9candcEUyoTce2uFK8+myxEQzPQNPy22Ig3xGBFHZmvrtIEySUg/bsg5azSW+Qtwf3inSb7EptOfNqQizvatB5Mfi41kmeuvfq2QGFDTozcYjqIPnUL3B0vYivrQwGn4UUl9oHh90cj0r1t4yOEwzWcLxfjE2s+Af5u3xZ5HdV4dLq7Uss+1Vzf2praSufK9Fj5aftjm5hJNeD2oLja//w8w8QN7jpzK380q/9Lls3mq3Rq990MhIn74XSWcc3kRM4ZSJEWk8JjRBfD835lQORmC3O+mOTFE95Ic1lCQqANPjsQVpeOV7xRgeJY4OuWijOnD+p9WHHJzd5kl52aSPx+seiv+ku88B17NH/xX4cNnb6jeWHJN6Qv6s6Hv3qz9F5sMnHc5w2hOLuqQ11yFT12dJAzHk69EPie2XsSuTJ4zVLqGOSphQde+HL4XoCydD2nzkWVSjXBimFBNFqsUfgGD5/XMAaTms0qWcemV/G+kOaAHP1t+OJ2G1rbEhjoz6yeRoUWJKlh6bw+LLRPtdFG0ZOWditm2d1m9e1zEaR1WLJjetcFSfVYeI9XM6plHTnEVt/VVzW3vIOa+PrlxhemR9LPih2TLHk32aKIp2zYYFRnN8lztazLjkPpShV7kiznYSyvmuiumqjecx4Z98PkAcCxyC/9Ou8wEEpqj8VJ1ILYPIxGoYE4wQOduhYzzw2SlBdzWthO/r7iO/YwwRsKz5pdxbdwyZfxCECx0UYFRLGkWWh/UNinEZrHLZ/DcXSjGEnS7zAsSvIFAM7qZNinIEWzxh9qKPoUOaipvXoX71ZmPzymyiWFLuspE8+LX53gH2BY8S8u9wWsL6KG6Urc4MCh7TN7I0KHMfJVc/8vqgrqfEJP6+Xd4hHowKHMNgePv+oW3bV9SFSmWvzwE20z8/NXtx8ApcbRcQ2KvYiWvj3Jmfka0TgUIuO/MBUlCeU19HtR2RvGOIjJacrrq8WMuoXhnSOoZil5LHHUn1TTVts/W0TVXFc/VLMNh/C+UJwsryjqSVikoxwwVmy7l0jF2fjQJUPadI/thS2hrBimk3Iqw7cnlng+BoIHEP8ciVw1EtBVO3LxkwjxlE0ObPQQZi0SSw9eG6bK4dLHpFMyobZGbv3PMLsUJspo4s0CzcqcIyy8U5IdUiMt+MipG35iml6ekD0mTjXIWlJ6BD2LiiMObYch2Z/OqHTuoAFhwlDziRwbMQ0sx10Pqk8hw48uNgkmMGU6I39NpvtZ3ekFcSy5rBUjsMOBvTns+uyL+Dg4LqOP8fgc6UXDIwUSZfOtD9h2ImAPTq6peyoJUxfEVxT9Fg5v5a5N7LcLROi1E6gUzx8LNqAm+eeXcrsIy2POHqi4eGuVy9KcUMM8TFV3x8pfWlbXE100beW8hkQ9I3sc5wuYt2Or9yhrQzr6jjxGTgXeWvj9RYc2ikoyQMVbMzOzSq+CGM57qstNgUOutOJ5ilsS1jc8ZCoRGqBY7c+MGXQE9Vzj4060S5Reeur/9BNX9lNZ26lEDii7lCFMeRYbD+TQ0B3zKRjNEyMK50f/4iNjWCiVu7VbC5i5cDN19xWXVW4S9AjcLANt2j+2xF2mMEB4WC2xMH2BYQXbXhpUM36nBic9OTuV3u+Lf7aS6sOVcsRUxXnXhlJAkdOz8eRlqiQlBopRBI45vhZGNay90Fiq1Wrv7nNZvva0yY1bMYuUYbPfx8gcEz8RewO2kfQidg9S/pGc9VjoXecwHH52tSbVbkqKN9C7b8zIAiTAMv9oX4dsrNERZGtFM9ILHqBQ3jBLqSivDYxMq7MrXLCbXn/NRKVsZephiGFMLFz8X5cUQoGJGNT8VJqT+AIY4N0hnp5xXa8TEJFOHrnpLuoXaJC8y9lvzy/3UWFzUN1jepxK5aoFGjtyCFwDPIr//fvpdpSNw9O7ayPsQJHOFaFpZQCgxTStJ6Kd6xDNLQ+OMoP5y5R4ZCXrfARLNyEXfLZoXxLeZnHf0xI4E1Gra4Fi3EoBY4eeq5BtOA4SOBQ561w9EQ6buHNmMtbbWHBPGJ01+N9gWP7eGHBQcM36W4tUaHXIEagyhcEjmdgWDF+/vvw3D44euDHkJfI6+grM73IIqbHrHzRT2m3UrrcwLs3zovRldzee9uds1ntaaP3OnCJSpWJjsPj8fbBjNG6HIdy42X+GtQ7+Gyl1wTejzQNSeLbiDMsONrjVJhQ5EESOKrtinYFjsoHR//kvBiwbPjgyO1iM0XZPKcKI6wlyQLH3lNgm7i38pDuc/q1vyxx/4mzxS9N0OLQ8w8VulALHP8iBI4hqMARxWKuGWXrnVK0b5hNEIXpZCVHWKd/buUVmzHytjmJqDtp6PJAm4y6CktCBFNaowLHRWrdmMAx9taicxjU8xpKMXnPQXsmwPqwcrzajEnNI5NWq4OUx+l3RODYo5avOK8d3geH/y492YzAwe8Kc6zAIQmRsnAz/lD1CJ+vAumuWq6yXYOj7tloDo6ZAMvNoHKALsesDs23jIPihjusfVY7y1Zr73yQVYYUa1fvOZC13lO5JSrbcdSTTaGWsYfJQdqPdYlN3EHpFYM2AulLfXtzlvXH2fdZqE3aQb1W4Ijxau+R5GQ0+eCw7bGtPEgCh5jXFWZyXjkCvJYPjv1zSisLdkzExKFeolLqMuX3SX+wTHlo6scF288OHxzjqWqF20k3cE6nC/1ndfjNr/qDNz1AvOnMrfzKP/q95k6lA1u559rBnbRSHxXWvxfN0VypK4rXyLvp1ZM6RkDRIooGWyORM+/+qJu269e6DuFicO2KbNXBDIDZsas0MO+5BikPXLxtYNm3BzeI108kNiciGxYcOaSuY47xSZ2hdypqnMCxMueuVow/76Lcdvp1R5zPP19EW/NXd/y+bh4zkRG55quHZ+qNymK+UYGjZ6bZQ0d7dbt0tI3c2zWpbeyaS3FfSGKILl8uKLs8TmpX+u6ZZvorVjvt5LOI68w61XVahzjAJdXr3FIdMSO8WKmOXboNirO/rtcyYjR7Yfvvs/AigLkXlvaqwoSdJT4exhZlvjmvlSbebBvChGuOLuG4nFQ9TqGJxbpJl8XsiRP8DnXbbUV52bZ8wdMlqMlIgkLONx83J2q0f2y0xawAI4TdOSQx9ur0MgynpxR6IXAM8qv/jxc43LM+tdVYdAchxLfZnsW51hQEjqK1MUFUNiHM2NjfxkgoA5PrnvEGp2/0PBBU4Nj1IUkblCh2d6R1CfrEgaMEDuX54jfKiTEJq7sWTuDQS1idGqMcViFwaN88hAgLK456O7s1OU7gaOI0OS8+i+2bE2kr3B7rGC7//Bsk/S47F+EwgYMZwvTY2V+yFO7AgkNcpzw67zqsvRrjIlYVDF3t8+BIlZp47+ehA3Y2dUak0hvqvbTO5Vx9YzgP48/ZcHpKcWA3+Dmki+p5I3e+GNLv46VdLpwn1GVclvTH3QJH+DAscCiDSpYEfLOSv5N3GKnvo924dG5sQr7bunAmff6dWYeoWyELWDsCx97EjnWeyosfXX3X3mWxvkf0p18aOzwwkL4o433zq/65m9YQbjpzK1HgoKT2zchvkKVxuaqiVUpKIUbUDj022Jsb1HmhnpR76RE4RukROCjafvbSdHm4v6LA0TeE6K8VmkvRWhlIUcnvy3Q32zQfwp+qAYMcd21gRa8zbgtrtqw82M+2Os69Jdl+RdBXu7iJ95UFjium1lfDr1gKh41Onr/7Fd6jqc8/TODomiSNChy9aCPpUUMGM5ZeAz0PkjVCHSbSU2+6iuYgkYbXlGirn/s7/tq4JYeKXvUCikuaNNpWSLBMuDX9mcmbuDV3E643h9yLgDAM3xA4Uo+oSC9NqJuktib6wnfq66v7al1aWdyZ+Ak70TdkK4YqriY97UusSnDYSU8tcAjtFWfJIokSZdG0IgYXB+8EdZ+9sJp4r9o6D85jZMevZbxvfCUEjiE+yVhwpLI36Z+WM/q51H6EhDhBO5oP7jn9lPJQpMW9Lj6TniUq1FljkR9tWh1hRa77GlodctSXQdf7GG4SL/dIQ/kRo+X8RHSMULj8NpMIs7/4qo5G88Zgz0JFFDjiTyNwWPb+02FsOUS8psBxbhyjvN8EDiYXV7RiuTbvO4GjPytD6Y1FqU9nfGcUvu3Tzlb9+Cy2rFIYMgno0X66yluW3JWJndfqFhMcZtIv+mroUIXOJI1rd/2TUJHmfIGjn406U/f59HP4SlNCxYSaRqK2ZNhBtPZoJ957iRUWKnsChxAHd6li2Oar+jt+OW57yT0vX6QHjbvfRHoThle2UEZsEzYJHE3c+3lo49o+4yYEjkG0Pjje+DAEjiE++f/uLVHpmlJuV7Liicl/JzGiViX2+qbtr18JHxxdb2LoH1eseX3WD9cTOHgfHFK8Y82j+F6JVxL4SJjDc0dxbQXVCByN8LIhcNRDbdbJaHN+9Lffho3f9wgcIyJ6vRzm2Rid3EvXwcXbldToGwq7K5DlsNNBt+JWu99bqHe3LHAwOWDb8q5ZfO8Xigz0IfQQfHL03/TCZLt0i7ecB1UxvkvtmHadK3DsiQPSX6r2dayw8txvJ1927xqUA5bu7G4JHFVIk2+QEcKIKXRbcHQc7xA4dofkxfVZEiaPN+Lf0nIWGp/mZVEZSy0y8M9tG0OHwCFax/CCFrd0hc8LFRqZb2HBoUJtwfHhf/ZWBzGOm87cShI4DFFsC42hfITZtueMq0zxnHNu5zmpwSLn9T4MbHghH5puim63q05/sDZdswEYFQx8JLoL7hnMDe9g4qjle+Ht3KQf/HX5MeHtDDfSbQMa1rmeFFvZ8ddRlm8f8r/ODNdMzFuB3K3SlsUN+2iZpjcsjFBC06dBlMV4MwLHNbmEpcRVRZKh0zu5QNl0CKrq869eR49KT9/RsUXGzlrG8zpqmXHR3QECst7HtONiJFK+lBNr0QleR1hl+iET+qBM2FHL0IvcRjEOZd7OyAPTi3dGoKhpO/mqJ5+lD45+gWP3CnaXf+yNbVpRRGJvu1bxlal2HCKKGxpBJ4RlHIfKzWUeO0lL2uLQSLbsatNjd3gUzubik9sxdSTPP5rrePS0jo7f/BAEjiF6BA6xuo8IHNPU3ybfuMBxBBA4NoI9u8AhpaV/a9dXXvKbihzf9QUOGsaEz8a08eYQCznDuvsd/XfkNCFwXAwIHBtA4JA5dPbXBNMKHD3ihPjW77qVjMkA17pJk4tjBA4ZTgyRttU8P84QsTqo6xWaN9E30NZA4IDAoYs2xz8ocETRIudlaj7XYSFwHIPY4rJ9FwSOq/DJf/z7O0/49iWcK3rU53EiRPrOXmZsXgscXWNPrpJ2nE/NS899EIcf4KvWxvHm5gLDphbSIezGydb9sjPfjUN5rI5blUazMwrXY0kSi2W/Lzq69iHlw1VhTFDj/PKaduiZ4w0dpWnjyUtV/JO6CjLZ0V6ZdzrI0NcZM0n14OYbbUJXG3SBK7vqIOKaW+hepGy457dnmLc9oDyX0Ssbn/yNCxFHpCVHoY9jtGxE4aXLoo87f5BDnz1GOFEXpJQvSTjpiPcSVYcZ2epPPudNIU2v/3xxUlYLAuqyucQyiu3Ttl4G+a1d9/r1QknogDuPv97seHY/Vja/KrG7Evl207JTOfPZOZ8VHfkyGJHa2JVNKQ7dDbq+uMGJvx2isjLDb0DgGOPXgsAhWXA0l8A9G2fcvx6x29TV/MxSrXXbrh1KzksywyTWG+dVx/vD3KjAIdI7OSk7th6LXqne9a2btk1E54op244/c1Ax39Uf8e/V6VrebcW0YSdbWF+Y4vu47CcGIPlNBQWBY1zg6OiUO9M7hCCeXZ7nv+sQOC5zF7reJrJv18bye5Fn5ALWKWPRSoIBc0jsz0bFPeX5m22CLl55Tfx55Dp0kMBh6nT8wd78qq57r9JUYkgxTtg69cyGZWtZmPObIQgGZ71irIUeJsC4wMFF0NMX6NPauvZW4OAGrySOnbLRCxyyKKaOQxnuSPqG77ore+Mrvuj5ByYb3HTmVn7tN/QWHJym0SNUUHoe37rZHpnon/sgDPsCHNiiNp03mIdrNgKXWaKiDHaRpPoFjnPvR58QsZH+lvXFzgNaXC+30ws5l82vqcJWuYrSQ/ocTuBMRQ2JJJ9rpyhttm44wnk0zh6X7+ncW+gWrwjbiPXW4+ft0rSmnf3cQFfdNai9J/omFPpBrTAt5m2Cu/Iwwqj1RU+83bV2UOCQNvrgX/Z2SS/MEf78+qh/AywJsgPCCZ+tzhOPETgs80m8EWfQY8FR5sA24wH5ROEFw+41bGVG89KChNlpF0TZrPB7MVLopLx2xZRwvPlK+XLHhn+EsSH3UkuIhMnTgMCxEVbr4+j6PST3wloabHP9kS6VN74cAscQvx4EDlrJirJXmDmw9+rMKxebpwuUZN1/dD0Uw+kLHfA1+tpnYTy3agubjqT6buPOECupAJWFATnK5W3QATPNgXwsZnGnbAobifoxqyYbpQ+O8nonIZyZsv2VafZ+jruqTGWRuq9seuwNLWITzyOZXYNC4NhHutx7EjguOIg/n4PK4BB/EM9eWNP5b0zPC76zslAR6ViHsm0BIovSe0gCB9n4QhFHT8BzJtyZ4e77rKpbT2WZSJhBl5jXwx6f/knPIVkRX4DQMNsplytjewQORdpc4N3nkxmbiOLBjsChqpxcHaviEWIwXF4n6RItmxZ3jXx60bqlnOmJS0REC446PY2oJAMLDpk3vvwLb1pDuOnMrfz6P/m8+Cj9/+3deYPzuGEf4NGu13buO22a3v3+H6tpk+Y+nDixo3reGUk8ABIgAArQPM8fu/NKJAje4I8g9S6aYDacs9mhY2M6yT+1lflTt9lqt7kb1ff5j7iUHQhryJnWJXhCefQxWA9bOr2QjXITkpJL5Ow1u7u283OwtyrMB7suh7pP5v7/zxG+m53EV/ffVuVfJt9dZmUv71QETvbRA9ZyuC8YcNRw6C7jQ41wLzitod7XUWO7y7mKb7Cdd7Tr5PSYmIoF0LGpJA+ZdeFW7tuRbDHR+CVDSRSxLGqvlZhQxL2EUFuuwNbIhdvu/fIweE5ZTKrKy17XZV0WP6g+GSqxrM9yLot/xwZ8e/u8VbGfwgTnLOdFMcHP914sOh33GuzBOr20v1fp27u95hPMC7uWH0baaxuLLWGpfo7/WLi7P5saPQaF1kP6igiHMLlt3425jW2HB+Xs6rFQKH3odKlvqvnp/xJwFIkFHHeROWjdvrmXf/TcO/k79vvx6TnwdsO8ZFkEX6qac6mbsXye3yZ9fsCRN71YffcvLnLn6XAQcol8fjNpg+7EGG/TQGH2bbAdGw4tZiHH7RGSSTARCjgukTo+Qo3JL63cvlsUE3tp6rJey2mTo+PT2UABx9EL8nkNEsP9z2/Sy63v2T9UsiV84bH+sM46a7ksQkF8YKjYMyZF0yzcH67nBhzR9lXiyglcO0fLzburm/519PHZzC79y3kJ7g+TMGR+URu4WRH4dD6F7Y/iHgHHVljwUavFxf91fnqI/6LKTr2CPRqu+8O8RZbJbLmmXoZdV1XM+anq8LDX4J/hG2PTQacDb4chSXV7e9vszXFEacBRWma8jMSA438KOIr877/cCTiih6vQzl5ndrd3m0QpVdkZJmfaqWFIyTSKy2x1+zRZhUZihZunpUVkXSyn/tRtpIiU0bd6NMzLmhQWaA8HX4ga+3ekXrf5ePTGWL0i+FGX212JSXHL8OZyXS6D9alhHn60CTieveecLSfai90Vft2lW6++R3+mNO9ucUa5xSWs1QgHEieUrfS4cPSFpD2HPrnqzEtgTWRdncy7ImyNuv9ukMwZup960uch9mrK9OkV7qmRLhyryCLSXroGboZcpzcrljJ6cIQHXYQWMd/m49FouAS2h/v418+JJS72YDiwaLhFf3o1Mk+pbbd1IrW3PGIbXk6KFmi3BbOQeKhzCX0bWY63VVE14GjwsuatGC9VesDxR103jrqu3Ls/iwQcj/0pnEoHnwet8FOoq/EPLsGk6VdaO6tpNQoSitsROcFLsy23NOktq1je2Dl1jZ7Zi+oQf/QlIzh5W551L2kvt7sFDLEvZtOY/mv+aMleSLJsONzHnbRElkeWWeNh+nls3wsEOgKOuOhWF8wyegg4Qi3IVmutUbmlt5s2z+TPdF4dCl+fcSulQk1yii2f3nq+K9wJSJ52JFQu62SQKdyvInwtlbBsciv57crspIDjm8TzXNTqivnjX9f1ULMenNfb55GAI3Xy30aIXxivaztpb2zO48fVyWU6X59XzfeL5/UVd1J14z0lwpf603oG5+nWtkoOWa7Bv3NeVBw6K8cfd8kIQyJ35269MtLq9vZlenCkTu0n/0PAUSQWcNxFH+8IN2pDf+YK78YN7NQxedqX/WGj9z472EKCdT8x4MiR/0NooTJSRVsngTJvd0SWX5TdmdpK55cX88FhI7tp6jL4FlBk7OrvdbqdpNZBRbiesy6l189W1GXd82P5ArPQyTg14LhkBhy8ixzosn7GKLR+yvfpul3v93Rw0E7WwTZ+cneFrC3hzFCoUcCRfpmYU2iLS4Ot6TUZNHKuTqtvrOdR/HAXvhmYOuyZy/z+KyC3X/eL9OBY3hu5//N6XZ/YY2XEa5HxceKyuc/XerR7wPGpyjs4Uh9RCeXv92klzNs9ZLrO//2WeSshUL9YKLPf62Z/uqttZmPA9B4cGeFr8pC5AUfpMS8x4Pjvf9h1Y6Pryr37s7/ae0QlT04oEB6/wSJLKfLWdo/+qHvgs0UI/vhn6CDSqFdHjWIrVy3tIFV7iqkid5uSm8WxNRmrQ2kPjrTPol9cJx9HfqB+rz6TjhSTD+fNxHUPi8t00I1y5uNeJj/lsnqW9jI5QX8+4nILKqY/JZu6/cXvVtTL8sNL/Kicu37dn3omYnVtE1qE21k5dcgx0nqIKVwGr/A8RrNZyLjIi7WZghfxNcwvfutotf9Gh06b7nU9RI25jh5VCn9CN9bwS63z/fo/oRfFx531xIJzWrrX1R/RuqT24Lgu6xAbNvpW1cl071lCPAC5tVFSlmPU3nsxdqxDqfW4y/bZdLB4HUPbXWmcWvDDzT2dRi5HT2t5xz8BR6H/81f/Vm2zqXGxnVWZxOltXQJcJ/+4bg4cv1DdzkTj49dQvPIqVmu6LFsdjHLS6nABkYAj+Q5w9IwZHD8YUGQs873eEwkfLz5frJyEdRUMMu7P7s7/+WhcXFbjLJfG9O7F4+/LZxmXxXePcab73TzgmJeyn7VPZ37Swk0+kCUEHDX3r2C9eg44eqhDwKkNpbJl0Eebro9aZJs9EJ+xHgob8XXygLK7lNG6HmhgVX2HyhO7rD4uQstuOpw9D1W2p8wyZnOYEEQ8LpZrbiuPuly/neCvwSBqXY+tnp7zshPSkrfgfM/CgdTf2sgIMyM3oFZTur7Nfk8nWo/gvBxYV7d3nCzLzyki8Nl3CVU57V1OCUpjnlQ/+W8CjiL/96+3A47cTerMC+6am/v9nJURcKyH+by4CnUDK94SGgUkNYs9ZWsvW+ulj7hET+AZ15mliyktyNgY/zN9vvWK+Pa/hMU6K3+yP8x/BeV+2+Pe/XUWiiymM32052O/uQUckxGvb7NeILOA4/OvdZxyG6JOwHHoflnt/aFF+ttQq15rYykMOLpo03VRiXzPCjjSp5Rdh/JycwbeaxQd8XnEfsImVS3gOLmRunP9W3cCn6fEcCiwEXDcR8/oefBoKoS/X0zhdoG731a5zv7cXltJV9arYVfBRdJs56y0SMCxKuI6Dzgikwj14NivVuiL0kv7a7COsR893p/ycxyvS2YPjv/6B103orqu3LvaAUeqnAvrZqHJdf5d0x2oUcBxZq+ZrcWYNGAF5XcISrPmnTsCsammTDbxBv1ysJJeAtPAIHX4+F/zQCHYk+P+dvP5OI9xAz03Lo/hL5dQfa+zYW9J42W3BbUIOAJzFP9kq+AePP/UM1TA0WxVNloGp256bSaW1fOgaDrhn7/eGn4p6zUzha6T/wa+SJJ8rk4ppcEjKn0Ed1OT11LuVq5mt7xzx4tHPKvmcHwauz9p+vh+a8jH8t7+/lbSve67VyyxIGIx2G4N48OG2iCxcR9tk9JwYf3x9TPg2N1ic+Z3qw7Fj6iEj69pPTj6cQ3+62gjP07AUejPawYc6xu0VZxx4zLhkLhfxuQuc7z8ys4MOCLTWt4YWZ0oK2rWESan+//Oz2ftTjgy8NF52xpvGTI8rLf4tOlfZn+u3xR+nfXUuGUI05+NDdXjPu6iB8b0X7fw47vVncVjAcdlFnCEpp/izNNu96eThdJ73k+e3+tgIU0zjQKOhPD2GYIBRyQiyeo2nTNoYSMiJ5ApeCo+X6PDZWlgclmcd/aGTq1DfCneznhHk4qjDd206U3PjOtfVomXkXzhv/PV6vu9mxWRQuP7QejGxlwsgFn13tip12bvib2RV4OuL62/C3yeWNjm5OPHu+vucLlSjlc9PaIylb7o85eUgKPQn//NwXdwBC5qj6q12U7eT5hU/iXh0BOd1lvenfNo+R1sIcG6FdQrJbWfDR+Z1pl3zVLlLpZoj5NgQaGeA+kLIX6XMnQHc5pMLHtVRCfw+PP6ub9NjgOXW7GL/TAeoAR6a4Qnt/j7Mc6yl8d0W4ovu2nsU+/I1cGufNfHhfngAUdE3gsCievwAJ+rxiw8vTvD+o77pfAllnGLcrfedFhtP1vWetLu25h8UxkJVjh+Sg9ZUqczL39v2VwTN4aCgCMycLidslNY1j62Pex8+inDLhbkgeX2aCmtQ4msbffAcrhNO6m9dPBYtt/T5mgBGWVkCBVZ/dj4Kz/5L7/fdWOj68q9OxxwZMiawIE7F8fPg5fgn5vTipcQHWazvDO3kBqBzIl1OFNOtYpPKNGePmVbU/glnrcyNmp9q8/eSXPjJtfyZ9kugV0rNr/BOyKLzy+B4coDjtKtfNEI6WrbDtxLe/Z1VLauFuhDpwHHcKs3yzhzdySYT7o72ewuSSDgyKlCab3uL4Rafl5zP5t1B4h+k6LOjZfAvEUO0FkBR+rkc04G18Jz5W4vioSPJz049tZe+EmQjJsRWctmJ+BY1CKtzPWwy4Ajq706KSrr8btor5nEY1XsxuVtkMmy6/OMGpf3q/Tpc7e8MfWT//x7XS+ariv37i8qBRyxE+M19GFk3Bp1yOrBMbkiqdl8Cm77ofNZxWmmSK1XbNgshWFKzztOXhhSFkFnNSymK/NxK25ScuiviemNhr2ZDAQZobLXwURo+HVy8lGHzz36+qjTZVLHy7q1syi3r4CjxTYdn4OyqfURhvR6FOi1XmF9rMtS48zEt60js7pF3a+bBQGJY0RGyXvvSWPLF86etTlVCaVCV+x11vnHGXbvDmKkDrPvH1Jvpu8/PhL65rrbgyJ4DbDYSI8tvfwL/lldH1f26dNalHPvpb6zDGbjTofc/AnZZQ3Sw5T3cku2yG7PqBkZXLn1nijgKPQXf7sTcOytyYQ5bH0uuZd/eQtPrMpaSOqgVXF6cbNzW87C3b0tv1dszsV2+qDxVXbeJWGLKaVsMfuNwPRlfgleYS9P7PtzessVNoZ4/OJJ6H0kq+lM35HxeI3o1pZ3mf0dCGbes41L/Odkp2Wt6rfsbpKg8H7ZRhllnl+Dcq1Cmmaa9eA4c377DAzibf+y+j5lS0qp8vJa+5p/h7buI1M1t4uMuyc5d6YOuk7OJ5tFJ0w3dYnHN+d1CfFFUKFRWzjD386yGyFB7AZn9qT2wpRbXSI9MrYvtHN6UGxP/zHsNb3cvQlshBbTFkvu3r7bgyNSmck9smi9pp9eNj+YfpcesrRQfMn01rIHx9xP/lTAUeT/7QUcUeHOV6EeHHvbwuz7YP+ytFujsX2qynmy8IK9isKtKbweIoe3rVv8lW3fZ0/7tHxqZaJ37wOTy5qD4G2OsiUTG275eUp5W8NcpqflzyxkHi5cFsPfPo9M4/q28+hL2l2EI4+SxJvEoVs0sTLqy9l32l3SFvYWqVSLtVan31Z3VHtt5j3f/i9bbOu5IRY8wheunsOj97RZNKjLx1kndjRPvwAubZtkZTxnrJNpAz7QQyF0SyD08tFLcMidaWZVcD9sCR+fsycYlfMOjtl0dxfNRtT/+dX11iP36L3GwneRhNpoy0V7e3d7Xrs+Ps1qDhed1pqqc+t0PvyP//R3ez51dX1e/eZ4wDF3O3GEvwtd5WU0waN7Skavij2Ja6r27pfTLs6/73xcqF5Zd5VyJpYTDhS/6OC8Fly0phtVWM9e/t2b5KBjZxfcDi/2v7gdD6bNycusBRW6ixVruHyMdwmMNQs4AgFIQlUTlAUcLU8ET7ohujO1HrSp1/RO8Ozz4gUs4IgbqL6LC+DmNa+43e11S8+6+5ly7fcM3xqrsd4l1/sgMVWO8qUzf3D8rXPFdfH3/fvMA9v9DH/kgJhw8X8JfLZfRkZdct6rkTDso7Xz2LZmx4dIfcviskkdcgKZULk7bcLlHnM7L8YeuzvSLq7jyARqrYVj0/rxfxJwFPnLSgHHuyoXtVkbVP7F394gWSfwlPEPbAGxuXpG+zltmoWbebMjXpt75jmlltcglKKn9Wj69mdGSy21Z0fo21DUeAkOkzqN9U+/zt5I/vj4bfqrKo9v4g31dQNp0aw7kA7c2svf3pfX/VH/HM//tZGcy7RGYUiz7aFVfQcKEqoo3RYKl9c1Z3oV1k2dRlpJoeUlnLmJhrL46PQLt5tTjpfri9bSolK/mF3sx9KU+0eJ7azN49VGGUnznzDQVk+S1ehlvSemH+8vm5x0MeXmTbqke3S7wjcRPr557jkqPvX6+++P/0TAUWQ34Gg0B3U2kkA3oTOvLmI3AQqL3UvZd1VeBHvTzHmZWLD8RgFHab3C8u9mlAh3pt0vdfeC+zofLq0usc/DW+d+wBH6+drbGIuypjO0KP+jS+R194WnW5/NBwi2uLZHebmAo90Ff59GW2kCjjq+WMCRVWynAUebKpR7RqCbPd8pF+1tpv0RcHxeuO4EHOkT2Bgm98WXhwKJeWC0Pb38dkVswN35WtwM2h523nZ6nAJCN9dOMMA5KLNvyuFhf/wnv9N1w6Tryr37q7+r2YOjVZfgDIVVOPLIyGz8sslH6zD5QYkEdddDzfN2q2WWOq06MhrFsXWZVGakyJwXfsTKCP5rbw9OiYzWyftynFvPi+DdsdtH1/Xny14il7f509SX2bCTzy+Tc+YlsPynDa3LfBqxefianr8Uzrx7UkWztlqn83uiVmFMqyV7uMfpo4BkeRHNeT2aNirx1AJivc1m546EWz2pgu2gKptzYgtrd1oJF9Rb2ULgs3sZyTP6CA/2WjyX4KdbRecv7NDNplsx4eVTskJjPThu7asKZc2+PvPKItxm+/bNohpPjn4zp9egB8d/FHAU2Q04suYgfeBWG2TKqbp10J7TXDgz9A/Wa+d28zOz1GjQ00JWsBU40SX2RIhPLHLInH5cuK3cg4Xg5BavXot0yd2OOJa9KD57bizCiu1eFdPkIzTM/OQY+hWV+3CX9bSPChdxbm+eM/UaJPRaryzNLmS+mrN7NARkJQltgoRgqVmLpqxeXdxvLeoF8K7C/pSRI8RaC+Fy0+Yhdul79OfQr/eL6fg5eTHxZNNzefxnho9OYN6rIne0ePsj1O67fbc56vaXKTtwUg+RxQgbdUlbtoV7dvE+2UHAkbUD56ydxB4c/+G3uz7Rd125d3+9E3DkXYCPcVJ8RqgQnWTgi1OXTUJ/+qesq5P3nPJEPKdXRTjg2K/Ddp/OpHnYKCKQTTwsQ45FOdNQYTbO5TILGWbFTp7nWPf3iKX868/D/08POJZTbHUU6/5kMFG+z589t+mh4Zl1C21TGTfMNoy0NbUyWMBROq2MIrKq1Sh4CU6qSalbBb9AwFE8D9sXuzHzgCOnHvNJh8wCjsio89DgQMAx+XOjObOeXiR4SQqKjgQcGcOmB5c7961XXz/WxXI5VHOguHMDjjOPgwKOU/z13//i9OvX61Yg3GiJHZ7JrWN7xbom1a/Jsukg4Oh+LymxXnqx2U1v9GSskcvmP6PFffT2iGz81/2eP9NpbQ2Z/t3HqfcybbEs8pRpD5VpA2oZoRwLiI4v8/tHXdzqPMvR+4b75aYrP2jnh17HXUNhXLQCTz5odr0td125uYGqWsXB+d0aLaF/QV3NJha721WauNXofRFux6Q+hbHZAzJreab0gogXOG3RvF/k3252Hv6lkcBLRq+L/wdHe5v83OvGofx6nbdlMiq2+mR5s2fz8ZqDN2+uCctxb9kc1foYsB/z1ViScz/+YwFHkb85MeCo3XOiacXbBPqJ066/o5wuY/k1Pn0fLred2IE/oxahi+hr7Pvl9NYjh6Y8awzkVyf7u/CJb9J8vSxP9pfJvy+z71ICjuidqeBGtrOVzd4yGvh6e+wOlde4eL9scsDreU30XLe5rs9FXVduKb2y0Xcftzop9uRgwtHivlT+9XjqCorUrHBdPs5y19VnSZPIfVlnsIyDA9yvwi+zsCfpvuP0nJ3dCSW2sy2ntf5wFnBsbJcpwUVa2+tRRmiWZ19mHSsyjk2JQ0fnucLx6oxD3iW4xvfHOuqHP/6trhsFXVfu3d/8wxN6cLydf07OLvvkNTcNf8I/jdSBRqFFDcnNhXikXqTVL2fUKXYjc743HDamv9M42FrOy++Cj4xcI8svcPd62avjEV6sG2GXWN0iZQUrvKpMrKzbqbvVq5Z7cebcdXAcbHGFFJ3Wa285z1S63TR791NE6MWfjU5d4eAk6wp4MKfPS+A4lvhYUPUjQs0XX9ZajtfVH0Gxs8FWkBCYSMqkkkKhRzkHF8S9fbMxfkLRu5fcsxtf17KQZzXtjbGDgdBryIt+jvvhjwQcRf52J+BodhMtVnBnF9GBa6y5re5llesSPsSHGkKVe4B0vhVH56usQ8Tp8uqQ1skvPkS0u0fgk+VdlIRpXCafT6oaeydGLPiYTiAUYMx7YzzunVzeFuOEQpLr8h9x517WtzmyvXb00kEYUuzWC+i5tSCgi2St0xpk3BhuFdJk6SDgCIkur6r1TSiswRXB7Rp+b5u4LnqL7La/D/cG2LjpMxvsyPxO+nAcXHe3NkBs/tc9NQo2kuD+G/5tpan9rbrRjlZ606GwWtdZ47atH/5QwFFkL+CoodkEEpdu0fST+sI1mG6wLoEJBmPSupvdkQNd1rxXqO6ZN1pbyQ845mHWR++BxFIWz7Nc3h6ntHsZqzsMeXeYYt9tfb4X26SFHI/hQrvCKtNIuD37GgFHXi3G8gIBx/2B8NB3y3+Mtn4o1uhncaOTC34aOgc0Ol6d2nBsdTH2xP00t1dD8rj5yyo14FgONX1CJTzZxHlYteMTA47dSR3tvZF6QyU83LJTxsaEEusS6lYbH2WvyfRR4nBn4JXJe/Afn5147hVwFNoNOGrMweL6KNY862l3qH9eKiwwfPO8X531xNnT7Y4a6+0QGmarF8Tb/EC9f2fk8X3qsMvq7H2+HWSkHSEuW3//akGl/ETtuszCLTIykeRu7tn94VOT3grd5hJdY8VW2dnPjZs+bPd4qmFrP+vhGHnY0JXvSKvdNytJ6O9MGX7cI+70R4A73P5vPUPiVZt/E+xVkdQZZH7DIWFSoQ92pzJr52yUMmsqXd/KXzIa60ESDWS2x18tp5JQJWPc8PppvOF2uF+kSq962fHyhz/8zf4OuBNdV+7d3/3jsR4cA2+bd+3C9fQm6jWnt0XvN+4S6hY76bzC9pSj1Ts7vpV98vh5vTguk//u3UUJ70fB6V3eHmHGJHWfhhVHesjkjxeX3IiIbhyle0mjja5RaNHrMSG0BV4WXXovgb/q1oEqLMiIjDSly2WYV6lrRmMwrzd8o1QqUmw4jk2NMeYX+rk3NsITKNk4Jt0+Nm7c3D5YzvsyzNidTvYg4RsuKWt8Gsplt0tCN7gSF3O7XhUbXXSG96y2yeXthz/4jZ6v+Lq+HP3m7ycBR6/bZg/vXstaNqmPksSGTbSVdyTfLE6YRvLAnclbZ1UHa6pFHfJCioLyfrW9fzQ2du5cBD7dCkVmv2h7Dztuj+ykNSaip7HL8ttjrcDy9dZpwNFIzr2mjAJONtYyP1MXqyek24qd6bzeXpuTO63ANseVZgFHrNTAdebezYRY37TdU1vWIg6cMzMsL8yXvUimbeGkXiOzwso2vtl0bm2by1v0R0sCFXj8b6v7yXL4t3W2EcqB1vWLl9eXyDaTlTA2Ol4F771FbmEVVOGH3xdwFPn7gz04QlpcUNZRoQNWB+f1Jj0dTt5Cd3twRK4j30Lfv4Cas1N70eSUtzvsZXlX+7MRstkrKdSPI3zXJPbZctzYpILP+EZ/dzd/L3yxzfbJspqNVcuMT+wWhp20pnttk76AVou21S+xfLlN4RVmuHAeqjaNSl92kjT6gWlM7y/k9LJYXeWnT3veDJgECYEitgOgnWnuVimtztPHbG7/vlXq1kukxdlyNVogmKlxJhxrV69wnbkg4Cj0D0d7cDx5zlpu+Mlln/3boIuLwRo9OPaqcPoBpmLA8bXud0fqe2AmckeJhgaVpjOPOVJ6fqwDjsu9a8ejjLK+U3lG25bOde7SKe4Z0puxWoEM4OT3mWY+9lHoVfeXGgsm1tE4UHxeG/HRS+HYkTYylcrzHLuJGApZggHH9MMDO9HWaB91y3nF5UYqU11aL9njpT7LM9sFl7cf/d6vd90w6bpy7/5hrwdH5hw8fYM8tQdzm9Ub69LUpAfHyULztkyhe9ekqju9GObOukR7NGHWL2ZLvMMQ+Nfjs1BYsTcX03AiXqdgwDF7jqVOwNFBR7RyQx1UGh1zq1xiDXQQi3r2nYuhNkYybV28nVaH5A/DWt1Uyp9iqBLbPRz36ni7iE6aekaniuxz7pEeDtEeHGnlLJfTfo+rgjUe2RG22vi372aP62RVIXZLtN6WW7uX2rq4zS6/XTq2SD7m8QcBR5l//KdfXGPHhXc9HLRnB9wTugAXz3POgmw0O09vJnaw5Z+5DKI/z7rVt3FdSOqHwULaLPLJ4yQbTaXHd3t5abyWKfWPdwKc1jM+/Ld/X2oGHPX7Ol3u/8mqSuEECwTrkL7dnvmza3FF98W+qBPXm+DjpQV/7f78aqxkXz926H6GSqhfVsCxEAoFth/jmA6R8lWFW5LXZZ1iL4feMH0c8ehx6fBLRoOFBf88NH6mavtorINOKKw690L1YTcprH/E0oOj0HvAUa2wwNzGCz96xyx/kWbN4MlrLKduxft191vjQaf22smtxNEgIq0nQ42S0m3FEzc787sIKGfv4AicvDbf0XF9DBQbLhhw7FxSr75L6TqVsJBDbzAP/c76eJ4/AzV6Kq89f776dt7yib+s8UV9sdlt5lWXY5X5OnpxXmPasfKO9AxdlldawbTAYLu3xeOIFaxrae+Qlr1LElU9+gfX2a+WYmqXkDO6gOd0haoykbe3H/3ur3XdCOm6cu/+8Z9++bidGd7GiuUUe+r5KOPm60iPUMS8wjwEZc7XuT07Wowd795YxVZnlNjV+PXzP5Ovt/pqHO+tEZ14JMwI/3tdduEdFQHHU5UHHI3mISUcO1m9Tr7PXe9fLvSowSLLM+ryah2ANFsu182yH49p7JRx4KvogNOkYtqZfKO4aU+Y7KPk9f6fArEuEdtjpbY46x/59/v6PNvhNZJ1Xb0IOH5HwFHkn372y/vu1EXoUGrr+isy6FPnL6vXy2urf43R5+5Xp1ahPr3hjSn+WMdeZY7U9NY7IhR3pwUbqVOOhxSXST3CwyYFHCmVyDgvx9dDqB/mSJ6/n53fM+ugeulCoOx6vb72PX+d96BVyNJsExmm0F6EzqmtZvjY+faQZc/J2mUHLDtqLk+dj3/PCwieYrOrFhghqYyCPuirUStuNwd6vaQMeyjgeOn9/2F/Nhs8oiLgKHMLOKpo1NujC5fC81oHW8LXexwmPBep85F+OZ5dhciHG9NbfRV6FCSnvse2hvRHVOYBR0oJ5b06Hsvwcv93eLxliBF8cVfFbfj83aF0b/9qNmPAQSSsx2oXZ7aZuBr73jlbXo28rd3N/HDNQj3hDk9id4jillCGjLtzeQMUuexM4ho4zx7qDL45GxnzWCGwmYUxn6O9b44f7/C49cxo1D0v8xg9b2kdCzAmBTxJbItJb6239oxF86PfFnAU+dnPfnnsJaPdz9lc8cZZOL9bXdlShz3VifO7N85xpUu3cCFk5Q2fTc3EcR6NvKN1zFsOR6byGOca/DSnzLRhl7/2Egk4Phsq0w9rNppD2h4uS+s+2MG8iVcIOPbUbJB3vM08faWNE3D0LXbB/9xlU2Pqsehme3r7j16E+gKm7qlFYVfNdRK9AVSr7PRYa9nRJb58rpv/zHOsrI+j+/X+d6jU7PUb67pRfRdscFepkTOPPgKOQj/754o9OCKefqo+cS3UmdfSC+v0WhzPio/qM2DIueNw6O7Ek+TV69hJJnfek4YPXItdNq7P9sqcBhihJ3mSGy6Z0z0k+5qnn7schyb39BPEuzbLpotZC+r1iPUC+l3pESOd0VrJ6SHwnGUT6inx+G5njT1zm6waSMUv/o/0Hrm+LV44Xq2qOwWF7vnstm3CAyS32vwSVTXhbWy/f3GuH/3WT7s+EHdduXdnBBxZGlyU9jWDCQJXYHnzcHIXyiz7dbveJ9X97vM0LS/HNg/UoQ4SGxfkqS/QLJmf/XDjZv3rKeWP3CROPGWX3Cl0tL3h3ONuYOkMd+Bfa3df6yv0WCFJ5BcMvpZGN16q7lBP3jtb3bVPKDd+Go0/HpMfXBTMYIVeJ6HQavX5qSFFjceCRvfcGx8CjkL/fDDguIXYezPY93af9QxB+lAl/QTfQgUc0aIXR4V6Ves7R4nlIxvfxLojHimz0Tg1Hmv5+DzelTNYxqq1lPqwVX6fTrvCEelLre9z0lKjrWGshfCy2j3uUCbak790YhVmOHYhyNtkYZy8VCaPyOxNuahHwlOCivxyt5bDZVbUtcJjH4Xr2g7Ure9/U8BR5J//5bxHVPoLQzJWT8ZjHznCpXbQigiK1KvyVu54OxEJhDYX+QlHnRqTeEa4Mf9uP+QQcIzsFXopLObhdgev9LeFx1oIL6vrgKNToaZYz/V9ipMfR7h8TvJ2WNqafLVHLqJFNJr3jGntBhxbZSybF7uz08HW30EV+pDaLkwj4Ch0RsBxqlBP5eiRpn4PjhoyOsBHS0iWtQjOCTieodedoPQ6pkodAp8d7XRTK6Q4Os78+0nAcYkNU1ObOPPrOWeJ9XFMSOq4XE/4iSyoonRTij4NmX412epeVRe7yXy3/Ty/ZQRCuXF86lHofljZzP4bLsHKgc+yHXHdu+mU5da6enaS18MWXdmhhmusBZwyXGSUxDp8/xs/6bp52HXl3v1LxYDjXtDh28tn71Dtnq8q60YZGTpY3T43sYz2RtJ4T9fnYk7yjKq37J1Rczof4ca8J0erJ6Za/1LL6+lzp6uzFvucN946PgmRq8WqrLLnVqrYgWum4krcO5EdGjtpCut/Fj/GkTCtRUixzHrzLml3Knq4k+eJB6fApFqtc4fcMAFHoX/5eeseHLmLoKw6eWMXrp4O1u7eQfdLHDhOWA9Hl2MHm0gTJfNVukySx79Mhl02ki6hsKPd3nK4IfRyXnWPCNNnh658tcPNV1B1nTZIXp5TwKyI+CMj19kwNabVaISNItrs1D2cpV7jcJXaA2Tt+18XcBR5tYAjS6T//2vsVHNHe1SklFFV93vM64uugr3kbPl97ImmxF72m1/HnlNdjJT2Lo6PAmpvemnl5dwXKtgDt35jN0dxH/OMpfwSB+L0dVl/C4QGXmK//GKS19kJK7fKJPYLWb02K1JK85sPvbxDI/MxnR7ORuMfasqW4ve//uMeVkNU15V79/OKAcfjGmN/toMT7X5pPVeTnd0yT9LqQFt18e8FxRUn1mqzqVFuahnBx1W+SV/bTZZDs32yxlZcGokOdsBx0N01fiOUl2XjTHOoN0Cz50YeNh6TuC4i4eWgxUfZ1bSfuDFd86ef+ph8H2ejVm/nqe/MreD7XxNwFPn5z/+93vrqYG5f+nyW29Pp8uLLg7kT979akzoz0NgbftmjY/lddlaU0sI4/ZhZckSo0Ruvg5PEqQLz66D8MqzKAR25hj86/ktZvhvj2MJJfQ9bLLyY98w4c2VsTOuEfvDXxYTuQc+J78rgw1lbnYCj0M//tWLAwYfIWreg20m9lIqm2KHrkEa9H1rpuYrPCDJyxg1+f7l+9Ea7vr01e/X+SSo9oEK2nvfKArG+3TYyGnv2JlbjAcKSo0LKT7DGmi5bT4duP66x3UNiXu4yCNko9Cwn/2zuYuKHBz/+mCv9WK/Fa+I6+/6nAo4i/1o54NjrJrb3+P3tIHv6Ltv9mtpPtr+EAdbTV1Zz9Zz2MtLpsMF3eCzfUPpaWu1Sr7ekjnDA+nJs+F/SWQHH1vSDAcdZr3j4nOqheWtex4IJVH+IP11wWVZfVg5Yx82vxtZLMvzChtQl/v1Pf+i6AdF15d5VDTi6n9vjHAIqaLh9WD95etlVT32xZ+DL9JeQhpy71fWyzl5ReE2WNU7g5dj4v55m67yDl14XFrT3FOrs8vcaHqdmfYZV+oKQF11c3wk4yvzrv3lE5WxPW+Ddb419O/PtBV0rmJn4qLk9JD76ea3Lyysn7X0cMaF7ZuU9PV5qWxlGm6Xu5AonsKP1IWs9nLzSKtat6Tl6t5429q/iu58IOIr8W8WAYyuEs0tOpL5lKTbe5PvQe55qPCPKF3bwqFV+sNs/UuxPIz1gKOu9keqJDSUKla8dx1wYgB21jaLl+qSVct1+4Xg3rqs/eDECjkI1A45mOliK/S8kSuy9pPS6/KBIWcf3c3aHkp4IKT8fEhruY9h4r4z1sDnfX1afp9WolnDZGb80EnqYem/1dHDs3FXl4fXUfSrzDdCdPqOSUoXXemvMCBvyEa+xdsJy1lnpcijdPgZeDwNXPd01+OdWS6O7I8ZTX3Tau2fv/3367sc/6nrGuq7cu1nA0X1tvwaHwU50sT/UvMJaRjZlQUTadB7DXjaHqe8SfGykRi+RvelWsioo44L9ZY8iXeyU6QZbDTlb2FnTzzfYNhI02IaTpccH61/4OPoCszB12Zuhruf3+C+q6Ar/9Qg4Cv3iF4+Aw77zdaTe++5O93tUbbVvIcfeGbFV7nYdwqskpdztEnJs945IDziO1iRpvFO33W734Igvt2PXN9oqb2b8bSn1ZwTHJOAYQqNZP7L2m73wu9vV26hi3c4vIQKOQtOA45lC95On39FI91tofW22p7MX5PF7rctL/OXl/7Hpb41Zr+No3tixGG99WySl3Et+BYBvMnecw9257aB1tGp1tXmvTau13n4plE/h2U8prloCT2+wn1SB0+fz6QuW1harWMBRqJeA4zTdr5F9X2uFLb3ACvwqPlfVJZZvbLVUUzfy0PChThqX4J8R85FtcVDCHkRjL98oevkZ3Hbq7He+rE+rXufL4WnOO59998P3XZ88u67cu1nA0X1t6VPZhuMw2qFpIJDTWaMjNbbKQWYVDkp5D4+9AHbVCOyrTfiLa7ZIvviy/uKzfzYBR6Ff/rJtD478wlO7uqeOUzLedNzuVyWvyCaapMWsf5TpjM4r+sIHCxhN8mko5+XhRBUvstdc5uO9cHps3/1IwFFkHnB0X93u2SmfIOXlLTbt4TxzldV8Rhr644AIX0/i+cxpr73VMu5rofdwhuhriZxPwFHol7/048ys7W4U3W/Z9GaUTSZez7SfmX0FXvjcu1H2JuC1FPzUKdkeLY60l6F/G9Jt626UbP4CjkICjgLdr12eZWunSnks16Z1jmPL+fUPmaNtfzlvjniNtTfaGgJeX+Wj62scrFemt0n22oPtj/QvupBPF15ToZ/8vqT+4uH333V9ou+6cu9++e8CDuC1nXMgnjZZ6h9Wuz+ZkMGLmYGvrLOjWKA6tzP59P9vi7+hFQFHoX8XcPBF2NDLdX9AO8ll9cenl2n5jLa3vMRCp8RomyxwAgcGxnT5TsBRRMABToGpuj+gnewy9ALZ+vmd0faIoVcELYy2CTOE5z1KQB4HAMYm4Cgk4ACqiV0rP+NIWPnnc7s/mAPQr9QXL9AhK4tzCTgKCTg4rPutG46zeQNAJa42Clh4X42Ao9D1KuA4g4UM5bo/oAIApHBxQMTlu74fgu66cu8EHAAAAPB8l4uAAwAAAKApAQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwPAEHAAAAMDwBBwAAADA8AQcAAAAwvP8PaOenN16sZJcAAAAASUVORK5CYII=);
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			padding: 0upx 50upx;
			height: 140upx;
			align-items: center;

			.title {
				font-size: 40upx;
				color: #d30e37;
				font-weight: bold;

			}

			.ms-more {
				color: #d30e37;
			}
		}

		.bottom {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 0 24upx;
			margin-top: -20upx;

			.item {
				width: 30%;
				background-color: #d30e37;
				color: white;
				text-align: center;
				margin: 10upx;
				padding: 13upx 0;
				font-weight: bold;
				border-radius: 7px;
				box-shadow: 1px 3px 6px #e86a80;
			}
		}
	}
</style>
