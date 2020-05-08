<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="backcolor" @click="back">
			<view class="yticon icon-goback">

			</view>
		</view>
		<!-- #endif -->

		<view @click="previewImage(index.banner)">
			<imglazy :url="index.banner"></imglazy>
		</view>
		<view class="introduce-section">
			<text class="title">{{index.title}}</text>
			<view class="price-box">
				<view v-if="index.discountPrice!=''">
					<text class="price-tip">{{i18n.p3}}：¥</text>
					<text class="price">{{index.discountPrice}} <text class="m-price">￥{{index.org_price}}</text></text>
				</view>
				<view v-if="index.discountPrice==''">
					<text class="price-tip">{{i18n.price_a}}：¥</text>
					<text class="price">{{index.base_price}}</text>
				</view>
				<view class="market">
					<text class="price-tip">{{i18n.price_b}}：¥</text>
					<text class="price">{{index.sale_price}}</text>
				</view>


			</view>

		</view>
		<view class="c-list" style="margin-bottom: 20upx;">

			<view class="c-row b-b" @click="toggleSpec">
				<text class="tit">{{i18n.type}}</text>
				<view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in index.specSelected" :key="sIndex">
						{{sItem.attr1}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>

			<view class="c-row b-b">
				<text class="tit">{{i18n.code}}</text>
				<view class="bz-list con">
					<text>{{index.coding}}</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">{{i18n.spec}}</text>
				<view class="bz-list con">
					<text>{{index.specification}}</text>
				</view>
			</view>

			<view class="c-row b-b">
				<text class="tit">{{i18n.size}}</text>
				<view class="bz-list con">
					<text>{{index.size}}</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">{{i18n.weight}}</text>
				<view class="bz-list con">
					<text>{{index.weight}}g</text>
				</view>
			</view>
			<view class="c-row b-b" v-if="index.dataLength.material<30&&index.dataLength.material>2">
				<text class="tit">{{i18n.Material}}</text>
				<view class="bz-list con">
					<text>{{index.material}}</text>
				</view>
			</view>
			<view class="c-row b-b" v-if="index.dataLength.features<30&&index.dataLength.features>2">
				<text class="tit">{{i18n.features}}</text>
				<view class="bz-list con">
					<text>{{index.features}}</text>
				</view>
			</view>
			<view class="c-row b-b" v-if="index.dataLength.usage<30&&index.dataLength.usage>2">
				<text class="tit">{{i18n.usage}}</text>
				<view class="bz-list con">
					<text>{{index.usage}}</text>
				</view>
			</view>
			<view class="c-row b-b" v-if="index.dataLength.notes<30&&index.dataLength.notes>2">
				<text class="tit">{{i18n.notice}}</text>
				<view class="bz-list con">
					<text>{{index.notes}}</text>
				</view>
			</view>
		</view>
		<!-- 折叠面板 -->
		<uni-collapse style="margin-bottom: 20upx;">
			<uni-collapse-item :show-animation="true" :center="index.material" :title="i18n.Material" v-if="index.dataLength.material>30">
				<view style="padding:30upx;">
					{{index.material}}
				</view>
			</uni-collapse-item>
			<uni-collapse-item :show-animation="true" :center="index.features" :title="i18n.features" v-if="index.dataLength.features>30">
				<view style="padding:30upx;">
					{{index.features}}
				</view>
			</uni-collapse-item>
			<uni-collapse-item :show-animation="true" :center="index.usage" :title="i18n.usage" v-if="index.dataLength.usage>30">
				<view style="padding: 30upx;">
					{{index.usage}}
				</view>
			</uni-collapse-item>
			<uni-collapse-item :show-animation="true" :center="index.notes" :title="i18n.notice" v-if="index.dataLength.notes>30">
				<view style="padding: 30upx;">
					{{index.notes}}
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="detail-desc">
			<view class="d-header">
				<text>{{i18n.title}}</text>
			</view>
			<image :src="index.backImages" mode="widthFix" class="backImages"></image>
		</view>
		<!-- 商品推荐 -->
		<view class="detail-desc">
			<view class="d-header">
				<text>{{i18n.rec}}</text>
			</view>
			<view class="guess-section">
				<view v-for="(item, index) in index.goodsList" :key="index" class="guess-item">
					<view class="image-wrapper" @click="navToDetailPage(item.item_no)">
						<image :src="item.image" mode="aspectFill"></image>
					</view>
					<view style="padding: 0 15upx;">
						<text class="title clamp">{{item.item_name}}</text>
						<view class="guess-right">

							<view class="price">{{i18n.p1}}:￥{{item.base_price}}</view>
							<view class="price">{{i18n.p2}}:￥{{item.sale_price}}</view>
						</view>

					</view>
				</view>
			</view>
		</view>
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>{{i18n.home}}</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-gouwuche"></text>
				<text>{{i18n.cart}}</text>
			</navigator>
			<view class="p-b-btn" :class="{active: index.favorite}" @click="toFavorite(index.coding)">
				<text class="yticon icon-shoucang"></text>
				<text>{{i18n.like}}</text>
			</view>
			<uni-number-box class="step" :min="index.mini" :value="index.allNum" :step="index.mini" @change="bindChange"></uni-number-box>
			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border add-cart-btn" @click="shopping()">{{i18n.add}}</button>
			</view>
		</view>


		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="index.specClass" @touchmove.stop.prevent="stopPrevent" @click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<imglazy :url="index.banner"></imglazy>
					<view class="right">
						<text class="price">{{i18n.price_a}}：¥{{index.base_price}}</text>
						<!-- <text class="stock">库存：188件</text> -->
						<view class="selected">
							{{i18n.select}}：
							<text class="selected-text" v-for="(sItem, sIndex) in index.specSelected" :key="sIndex">
								{{sItem.attr1}}
							</text>
						</view>
					</view>
				</view>
				<view class="attr-list">

					<view class="item-list">
						<text v-for="(childItem, childIndex) in index.specChildList" :key="childIndex" class="tit" :class="{selected: childItem.selected}"
						 @click="selectSpec(childIndex, childItem.item_no)">
							{{childItem.attr1}}
						</text>
					</view>

				</view>
				<button class="btn" @click="toggleSpec">{{i18n.submit}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	import share from '@/components/share';
	import api from '@/common/index.js';
	import uniNumberBox from '@/components/uni-number-box.vue';
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
	import imglazy from '@/components/img-lazy/img-lazy.vue';
	var index = {

		title: '',
		discountPrice: '',
		base_price: '',
		sale_price: '',
		specSelected: [],
		coding: '',
		specification: '',
		material: "",
		features: '',
		usage: '',
		notes: '',
		size: "",
		weight: "",
		specClass: 'none',
		dataLength: {
			material: "",
			features: '',
			usage: '',
			notes: ''
		},
		org_price: 0,
		goodsList: [],
		allNum: 0,
		specChildList: [],
		productId: '',
		favorite: false,
		default: true,
	}
	export default {
		components: {
			share,
			uniNumberBox,
			uniCollapse,
			uniCollapseItem,
			imglazy
		},
		data() {
			return {
				backImages: "",
				typeList: [],
				index: {

					title: '',
					discountPrice: '',
					base_price: '',
					sale_price: '',
					specSelected: [],
					coding: '',
					specification: '',
					material: "",
					features: '',
					usage: '',
					notes: '',
					size: "",
					weight: "",
					specClass: 'none',
					dataLength: {
						material: "",
						features: '',
						usage: '',
						notes: ''
					},
					org_price: 0,
					goodsList: [],
					allNum: 0,
					specChildList: [],
					productId: '',
					favorite: false,
					default: true,
				}
			};
		},
		onShow() {
			api.pageTitle(this.$t('details').title)
		},
		computed: {
			i18n() {
				return this.$t('details')
			}
		},
		onLoad(options) {
			let that = this;
			index = this.index
			api.load(this.$t('index').loadmsg)
			index.productId = options.productId;
			if (options.num) {
				index.discountPrice = options.num
			}
			setTimeout(function() {
				that.postlist(options.productId);
			}, 300)
		},
		methods: {
			imageError(index) {
				// this.images = 'http://dh.xmcpcn.com/Public/images/none.jpg';
			},
			//请求商品详情
			postlist(productId) {
				// 修改标题

				let that = this;
				if (index.specChildList.length == 1) {
					return false;
				}
				that.$ajax.product(productId).then(res => {
					//封面

					if (res.info.lwh == null) {
						res.info.lwh = that.$t('details').empty
					};
					if (res.info.weight == null) {
						res.info.weight = that.$t('details').empty
					};
					if (res.info.heart == 0) {
						index.favorite = false
					}
					if (res.info.heart == 1) {
						index.favorite = true
					}
					uni.hideLoading();

					index.banner = that.$store.getters.imgShow + '/thumb/' + res.info.item_no + '.jpg?x-oss-process=style/800';
					index.base_price = res.info.base_price;
					index.sale_price = res.info.sale_price;
					index.title = res.info.item_name;
					index.coding = res.info.item_no;
					index.specification = res.info.spec;
					index.material = res.info.material;
					index.size = res.info.lwh;
					index.weight = res.info.weight;
					index.backImages = that.$store.getters.imgShow + '/detail/' + res.info.item_no + '-.jpg?x-oss-process=style/800';
					index.allNum = parseInt(res.info.spec);
					index.mini=parseInt(res.info.spec);
					index.features = res.info.features;
					index.usage = res.info.usage;
					index.notes = res.info.notes;
					index.org_price = res.info.org_price;
					// 当数据空时
					if (res.list.length == '0') {
						res.list = [{
							attr1: that.$t('cart').Default
						}]
						that.$set(res.list[0], 'selected', true);
						index.specSelected.push(res.list[0]);
					};
					if (index.default) {
						for (let cItem of res.list) {
							//默认当前第一个分类
							if (cItem.attr1 == res.info.attr1) {
								that.$set(cItem, 'selected', true);
								index.specSelected.push(cItem);
								break;
							}
						}
						index.specChildList = res.list;
					};
					let goodslist = res.relation;
					goodslist.forEach(function(item, index) {
						item.image = that.$store.getters.imgShow + '/thumb/' + item.item_no + '.jpg?x-oss-process=style/800';
					});
					index.goodsList = goodslist;

					if (res.info.material != null) {
						index.dataLength.material = api.strlen(res.info.material);
					} else {
						index.dataLength.material = 0;
					}

					if (res.info.features != null) {
						index.dataLength.features = api.strlen(res.info.features);
					} else {
						index.dataLength.features = 0;

					}

					if (res.info.usage != null) {
						index.dataLength.usage = api.strlen(res.info.usage);
					} else {
						index.dataLength.usage = 0;

					}

					if (res.info.notes != null) {
						index.dataLength.notes = api.strlen(res.info.notes);
					} else {
						index.dataLength.notes = 0;

					}
					that.index = index
				})

			},
			//规格弹窗开关
			toggleSpec() {
				if (index.specClass === 'show') {
					index.specClass = 'hide';
					setTimeout(function() {
						index.specClass = 'none';
					}, 250);
				} else if (index.specClass === 'none') {
					index.specClass = 'show';
				}
				this.index.specClass = index.specClass;
			},
			//选择规格
			selectSpec(key, id) {
				index.default = false
				this.postlist(id);
				let list = index.specChildList;

				list.forEach(item => {
					this.$set(item, 'selected', false);
				})
				this.$set(list[key], 'selected', true);

				index.specSelected = [];
				list.forEach(item => {
					if (item.selected === true) {
						index.specSelected.push(item);
					}
				})
				this.index = index;
			},

			//判断收藏
			toFavorite(id) {
				let that = this;
				let params = {
					sn: id
				}
				index.favorite = !index.favorite;
				console.log(that.favorite)
				if (index.favorite) {
					that.addCartItem(params)
				} else {
					that.deleteCartItem(params)
				}
				this.index = index;
			},
			// 收藏
			addCartItem(params) {
				let that = this;
				that.$ajax.addLike(params).then(res => {
					that.$api.msg(that.$t('index').msg4);
				})

			},
			// 取消收藏
			deleteLike(params) {
				let that = this;
				that.$ajax.addLike(params).then(res => {
					that.$api.msg(that.$t('index').msg4);
				})
			},
			//总数量
			bindChange(data) {
				index.allCount = data.number;
			},
			//详情页
			navToDetailPage(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/product/product?productId=${item}`
				})
			},
			//添加购物车
			shopping() {

				let that = this;
				let data = {
					item_no: index.coding,
					allNum: index.allCount
				}
				that.$ajax.addShop(data).then(res => {
					if (res.result == "success") {
						that.$api.msg(that.$t('index').msg1);
					} else {
						that.$api.msg(res.msg);
					}
				})
			},
			stopPrevent() {},
			back() {
				
				uni.navigateBack({
					delta: 1
				});
			},
			previewImage(img) {
				let urlList = [];
				urlList.push(img)
				uni.previewImage({
					current: img,
					urls: urlList
				})

			}
		},

	}
</script>

<style lang='scss'>
	.icon-goback {

		font-size: 30upx;
		font-style: normal;
		color: white;
		background-color: rgba(0, 0, 0, .5);
		border-radius: 50%;
		width: 65upx;
		height: 65upx;
		line-height: 65upx;
		padding: 0;


	}

	.backcolor {
		position: absolute;
		top: 5%;
		left: 10upx;
		z-index: 99;
		text-align: center;
	}

	page {
		background: $page-color-base;
		padding-bottom: 160upx;

	}

	.icon-you {
		font-size: $font-base + 2upx;
		color: #888;
	}

	.lazy {
		height: 522upx;
		width: 100%;
	}

	/* 标题简介 */
	.introduce-section {
		background: #fff;
		padding: 20upx 30upx;

		.title {
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}

		.price-box {
			display: flex;
			justify-content: left;
			align-items: baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color: $uni-color-primary;

			.market {
				margin-left: 20upx;
			}
		}

		.price {
			font-size: $font-lg + 2upx;
		}

		.m-price {
			margin: 0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
			font-size: $font-sm;
		}

		.coupon-tip {
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx);
		}

		.bot-row {
			display: flex;
			align-items: center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;

			text {
				flex: 1;
			}
		}
	}

	/* 分享 */
	.share-section {
		display: flex;
		align-items: center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;

		.share-icon {
			display: flex;
			align-items: center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position: relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;

			&:after {
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position: absolute;
				background: $uni-color-primary;
			}
		}

		.icon-xingxing {
			position: relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}

		.tit {
			font-size: $font-base;
			margin-left: 10upx;
		}

		.icon-bangzhu1 {
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}

		.share-btn {
			flex: 1;
			text-align: right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}

		.icon-you {
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}

	.c-list {
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;

		.c-row {
			display: flex;
			align-items: center;
			padding: 20upx 30upx;
			position: relative;
		}

		.tit {
			width: 140upx;
		}

		.con {
			flex: 1;
			color: $font-color-dark;

			.selected-text {
				margin-right: 10upx;
			}
		}

		.bz-list {

			font-size: $font-sm+2upx;
			color: $font-color-dark;

			text {
				display: inline-block;
				margin-right: 30upx;
			}
		}

		.con-list {
			flex: 1;
			display: flex;
			flex-direction: column;
			color: $font-color-dark;

		}

		.red {
			color: $uni-color-primary;
		}
	}

	/* 评价 */
	.eva-section {
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;

		.e-header {
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;

			.tit {
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}

			.tip {
				flex: 1;
				text-align: right;
			}

			.icon-you {
				margin-left: 10upx;
			}
		}
	}

	.eva-box {
		display: flex;
		padding: 20upx 0;

		.portrait {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}

		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;

			.con {
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}

			.bot {
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color: $font-color-light;
			}
		}
	}

	/*  详情 */
	.detail-desc {
		background: #fff;
		margin-top: 16upx;

		.d-header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;

			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;

			text {
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}



			&:after {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc;
			}
		}
	}

	.backImages {
		width: 100%;

	}

	/* 规格选择弹窗 */
	.attr-content {
		padding: 10upx 30upx;

		.a-t {
			display: flex;

			.lazy {
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;
			}

			image {
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;

			}

			.right {
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;

				.price {
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}

				.m-price {
					font-size: $font-sm;
					text-decoration: line-through;
					color: $font-color-light;
					margin-left: 8upx;
				}

				.selected-text {
					margin-right: 10upx;
				}
			}
		}

		.attr-list {
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}

		.item-list {
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;

			text {
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}

			.selected {
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}

	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}

		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;

			.btn {
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}

		@keyframes showPopup {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes hidePopup {
			0% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}

			100% {
				transform: translateY(0%);
			}
		}

		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}

			100% {
				transform: translateY(120%);
			}
		}
	}

	/* 底部操作菜单 */
	.page-bottom {
		position: fixed;
		left: 30upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
		border-radius: 16upx;

		.p-b-btn {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;

			.yticon {
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}

			&.active,
			&.active .yticon {
				color: $uni-color-primary;
			}

			.icon-fenxiang2 {
				font-size: 42upx;
				transform: translateY(-2upx);
			}

			.icon-shoucang {
				font-size: 46upx;
			}
		}

		.action-btn-group {
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C);
			margin-left: 20upx;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;

			}

			.action-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}

	/* 购物车 */
	.item-right {
		display: block;
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		position: relative;
		padding-left: 30upx;

		.title,
		.price {
			font-size: $font-base + 2upx;
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
				background-color: #F7F7F7;
				border-radius: 50%;
				line-height: 33upx;
				position: absolute;
				right: 15upx;
				bottom: 55upx;
				font-size: 22upx;
				text-align: center;
				color: #00C5CD;
			}

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
			font-size: 28upx;
			color: $font-color-dark;
			line-height: 80upx;
		}

		.price {
			font-size: $font-sm;
			color: $uni-color-primary;
			line-height: 1;
		}
	}
</style>
