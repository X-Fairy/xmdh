<template>
	<view>
		<!-- <uni-nav-bar left-icon="back" title="主题换肤" @click-left="back" /> -->
		<view class="uni-navbar">
			<view :style="backColor" class="uni-navbar__content uni-navbar--shadow uni-navbar--border" ref="box">
				<view :style="{height:statusHeight,'line-height':statusline}" class="uni-navbar__header uni-navbar__content_view">
					<view class="uni-navbar__header-btns uni-navbar__content_view" :style="{'line-height':statusline}">
						<view class="uni-navbar__content_view" :style="{'line-height':statusline}" @click="back">
							<uni-icon type="back" color="white" size="24" />
						</view>
					</view>
					<view class="uni-navbar__header-container uni-navbar__content_view" :style="{'line-height':statusline}">
						<view class="uni-navbar__header-container-inner uni-navbar__content_view" :style="{'line-height':statusline}">主题换肤</view>
					</view>
					<view class="uni-navbar__header-btns uni-navbar__content_view">
					</view>
				</view>
			</view>
		</view>
		<view class="theme">
			<view class="nav">
				皮肤广场
			</view>
			<view class="goods">
				<view class="item" v-for="(item, index) in list" :key="index">
					<view class="img" v-if="item.src">
						<image :src="item.src" mode=""></image>
					</view>
					<view class="img" v-else :style="item.color">

					</view>
					<view class="bottom">
						<view class="left">
							{{item.title}}
						</view>
						<view class="right">
							<button type="warn" plain="true" class="btn" @click="bindExc(item)">去使用</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniStatusBar from '@/components/uni-status-bar/uni-status-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		components: {
			uniNavBar,
			uniStatusBar,
			uniIcon

		},
		data() {
			return {
				backColor: '',
				statusline:0,
				statusHeight:0,
				list: [{
					src: 'https://hbimg.huabanimg.com/011ffc88dc74df31cc034c17197202c3ef9715579306c-QNoOao_fw658',
					title: '圣诞'
				}, {
					src: 'https://hbimg.huabanimg.com/03012ea95143ba2b5a0c074c9e99f3aadf0ce3758904-lmXDBo_fw658',
					title: '过年'
				},{
					color: 'background-image: linear-gradient(to right top, #ffc125, #ffbc4b, #ffba68, #ffb981, #ffbb98, #ffb89c, #ffb6a0, #ffb4a4, #ffaa9a, #ffa090, #ff9587, #fe8a7e);',
					title: '暖色'
				}, {
					color: 'background-image: linear-gradient(to right top, #5e5e5e, #555555, #4c4c4c, #434343, #3b3b3b, #333333, #2c2c2c, #252525, #1d1d1d, #161616, #0d0d0d, #000000);',
					title: '夜间'
				}, {
					color: 'background-image: linear-gradient(to right top, #c5f093, #bae589, #b0db7f, #a5d076, #9bc66c, #90c36d, #84c16e, #78be70, #66c17e, #51c48d, #37c79d, #00c9ad);',
					title: '护眼绿'
				}, {
					color: 'background-image: linear-gradient( 135deg, #5ab6f9 10%, #038df0 100%);',
					title: '优雅蓝'
				}, {
					src: 'https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
					title: '春'
				}, {
					src: 'https://images.pexels.com/photos/1154985/pexels-photo-1154985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
					title: '夏'
				}, {
					src: 'https://images.pexels.com/photos/3363359/pexels-photo-3363359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
					title: '冬'
				}, {
					src: 'https://images.pexels.com/photos/3210189/pexels-photo-3210189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
					title: '秋'
				}, {
					src: 'https://hbimg.huabanimg.com/d32683e09085fdd1c8c456d1a2532b7540210ddb1cd97-2xjRYa_fw658',
					title: '雨天'
				}, {
					src: 'https://images.pexels.com/photos/3289880/pexels-photo-3289880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250',
					title: '天空'
				}, ]
			}
		},
		onLoad() {
			this.getTitleHeight();
			let theme = uni.getStorageSync('theme');
			this.backColor = theme.backColor;
		},
		methods: {
			getTitleHeight() {
				let that = this;
				uni.getSystemInfo({
					success: res => {
						console.log(res.screenHeight)
						if (res.screenHeight < 740) {
							that.statusline = "90px"
							that.statusHeight = "60px"
							return false;
						}
						if (res.screenHeight < 950) {
							that.statusline = "100px"
							that.statusHeight = "70px"
							return false;
						}
						if (res.screenHeight > 1000) {
							that.statusline = "110px";
							that.statusHeight = "80px";
							return false;
						}
					}
				})
			},
			bindExc(data) {
				
				let color;
				if (data.src) {
					color = {
						backColor: 'background-image:url(' + data.src + ')'
					}
				};
				if (data.color) {
					color = {
						backColor: data.color
					}
				}
				this.backColor = color.backColor;
				uni.setStorageSync('theme', color);
				uni.$emit('theme', {
					msg: '页面更新'
				})
			},
			back() {
				uni.switchTab({
					url: '/pages/user/user'
				});
			},
		},
		onBackPress() {
			uni.switchTab({
				url: '/pages/user/user'
			});
		},
	}
</script>

<style lang='scss'>
	page {
		background-color: #f8f8f8;
	}

	.theme {
		padding: 10upx 30upx;


		.nav {
			font-size: 46upx;
			font-weight: bold;
			margin-bottom: 10upx;
		}

		.goods {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.item {
				width: 47%;
				background: white;
				border-radius: 10upx;
				margin: 13upx 0;

				.img {
					width: 100%;
					height: 310upx;
					border-radius: 10upx;
				}

				image {
					width: 100%;
					height: 100%;
				}

				.bottom {
					display: flex;
					justify-content: space-between;
					height: 80upx;
					align-items: center;
					padding: 0 14upx;

					.right {
						.btn {
							height: 40upx;
							width: 100upx;
							margin: 0;
							padding: 0;
							font-size: 23upx;
							line-height: 40upx;
						}

					}
				}

			}
		}
	}

	.theme-l {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.uni-navbar__content {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		display: block;
		position: relative;
		width: 100%;
		background-color: #fff;
		overflow: hidden;
		// background-image: $back-banner;
	}

	.uni-navbar__content .uni-navbar__content_view {
		/* line-height: 170upx; */
	}

	.uni-navbar__header {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 120upx;
		/* 	line-height: 170px; */
		font-size: 16px
	}

	.uni-navbar__header-btns {
		display: inline-flex;
		flex-wrap: nowrap;
		flex-shrink: 0;
		width: 120upx;
		padding: 0 12upx
	}

	.uni-navbar__header-btns:first-child {
		padding-left: 0
	}

	.uni-navbar__header-btns:last-child {
		width: 60upx
	}

	.uni-navbar__header-container {
		width: 100%;
		margin: 0 10upx
	}

	.uni-navbar__header-container-inner {
		font-size: 30upx;
		text-align: center;
		padding-right: 60upx;
		color: white;
	}

	.uni-navbar__placeholder-view {
		height: 44px
	}

	.uni-navbar--fixed {
		position: fixed;
		z-index: 998
	}

	.uni-navbar--shadow {
		box-shadow: 0 1px 6px #ccc
	}

	.uni-navbar--border:after {
		position: absolute;
		z-index: 3;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}
</style>
