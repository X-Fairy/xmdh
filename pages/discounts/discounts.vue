<template>
	<view>

		<!-- 导航 -->
		<scroll-view class="floor-list" scroll-x>
			<view class="scoll-wrapper">
				<view v-for="(item, index) in mvc.navList" :key="index" class="floor-item" @click="changenav(item, index)" :class="mvc.activeClass == index?'active':''">
					<text class="title">{{item}}</text>
				</view>
			</view>
		</scroll-view>
		<view class="content">
			<empty v-if="mvc.cartoon"></empty>
			<view v-else>
				<empty v-if="mvc.activeList.length==0"></empty>
				<view class="dis-center" v-for="(item,index) in mvc.activeList" :key="index" v-else>
					<view class="dis-left">
						<view class="price">
							¥<text class="num">{{item.data.money}}</text>
						</view>
					</view>
					<view class="dis-right">
						<view class="top">
							<view class="title">
								{{i18n.title}}
							</view>
							<view class="dis-bottom">
								<view class="dis-nav" @click="navCart" v-if="item.data.type.not_used==0">
									{{i18n.use}}
								</view>
							</view>
						</view>
						<view class="dis-time">
							{{i18n.atime}}<text>{{item.data.take_time}}</text>
						</view>
						<view class="dis-time">
							{{i18n.btime}}<text>{{item.data.expire_time}}</text>
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import api from "@/common/index.js";
	import empty from "@/components/empty";
	let mvc = {
		allList: [],
		activeList: [],
		activeClass: 0,
		navList: [],
		cartoon: false
	}
	export default {
		components: {
			empty
		},
		data() {
			return {
				mvc: {
					allList: [],
					activeList: [],
					activeClass: 0,
					navList: [],
					cartoon: false
				}
			}
		},
		onLoad(option) {
			let that = this;
			setTimeout(function() {
				mvc=that.mvc
				api.pageTitle(that.$t('voucher').title);
				mvc.navList = that.$t('voucher').navList;
				api.load(that.$t('index').loadmsg);
				that.loadData();
			}, 300)
		},
		computed: {
			i18n() {
				return this.$t('voucher');
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 请求数据
			loadData() {
				let that = this;
				that.cartoon = false;
				that.$ajax.dis().then(res => {
					let list = [];
					let allList = res;
					if (allList.length != 0) {
						allList.forEach(function(item, index) {
							if (item.data.type.expire == 0) {
								if (item.data.type.not_used == 0) {

									list.push(item)
								}
							}

						})
						mvc.activeList = list;
						mvc.allList = res;
					} else {
						mvc.cartoon = true;
					}
					uni.hideLoading();
					that.mvc = mvc;
				})
			},
			//跳转页面
			navCart() {
				uni.switchTab({
					url: '/pages/cart/cart'
				});
			},
			// 商品分类
			changenav(item, index) {
				// 判断not_used,判断未使用和已使用,0是未使用
				// 判断expire,判断是否已过期，0是未过期
				let allList = mvc.allList;

				let listData = [];
				mvc.activeClass = index;
				console.log(index)
				allList.forEach(function(item, j) {
					switch (index) {
						//未过期未使用
						case 0:
							if (item.data.type.expire == 0) {
								if (item.data.type.not_used == 0) {
									listData.push(item);
								}
							}
							break;
							//未过期已使用
						case 1:
							if (item.data.type.not_used == 1) {
								listData.push(item);
							};
							break;
							//已过期
						case 2:
							if (item.data.type.not_used == 0) {
								if (item.data.type.expire == 1) {
									listData.push(item);
								}
							}
					}
				})
				mvc.activeList = listData;
				this.mvc = mvc;
			},
		}
	}
</script>

<style lang="scss">
	%section {
		text-align: center;
		padding: 20upx;

	}

	%flex {
		display: flex;
	}

	.content {
		padding: 10upx 30upx;

	}

	.dis-center {
		@extend %flex;
		box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.1);
		margin: 20upx 0;
		height: 168upx;
		background-image: linear-gradient(135deg, #a0dde6 15%, #e84c8e 90%);
		border-radius: 20upx;
	}

	.dis-left {
		@extend %section;
		width: 35%;
		color: white;



		.price {

			font-size: 20upx;

			.num {

				font-size: 60upx;
			}
		}

		.condition {

			color: white;
		}
	}

	.dis-right {
		@extend %section;
		width: 65%;
		text-align: left;
		color: white;

		.top {
			.title {
				font-size: 31upx;
				font-weight: bold;
			}
		}

		.dis-title {
			@extend %flex;

			margin-bottom: 1px;
		}

		.dis-bottom {
			position: relative;

			.dis-nav {
				position: absolute;
				right: 0;
				top: -50upx;
				width: 120upx;
				border-radius: 30upx;
				color: white;
				border: 1px solid white;
				text-align: center;
				font-size: 20upx;
			}
		}


		.dis-time {
			font-size: 25upx;
			margin-bottom: 1px;

			text {
				color: white;
				font-family: 'Courier New', Courier, monospace;
			}
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

	/* 顶部导航 */
	.floor-list {
		white-space: nowrap;

		box-shadow: 0 2upx 10upx rgba(0, 0, 0, .06);

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
				width: 100upx;
				height: 100%;
				margin: 0 20upx;
				text-align: center;
			}


		}


	}

	.active {
		color: #FF80AB;

		border-bottom: 5upx solid $base-color;

	}
</style>
