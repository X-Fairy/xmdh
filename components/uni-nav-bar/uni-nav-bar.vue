<template>
	<view class="uni-navbar">
		<!-- 主题 -->
		<view v-if="theme==1" :style="backHeight">
			<view :style="backColor" class="theme-l">
			</view>
		</view>
		<view :class="{'uni-navbar--fixed': fixed,'uni-navbar--shadow':border,'uni-navbar--border':border}" :style="backColor"
		 class="uni-navbar__content" v-else ref="box">
			<uni-status-bar v-if="statusBar" />
			<view :style="{color:color,height:statusHeight,'line-height':statusline}" class="uni-navbar__header uni-navbar__content_view">
				<view class="uni-navbar__header-btns uni-navbar__content_view" @tap="onClickLeft" :style="{'line-height':statusline}">
					<view v-if="leftIcon.length" class="uni-navbar__content_view" :style="{'line-height':statusline}">
						<uni-icon :type="leftIcon" :color="color" size="24" />
					</view>
					<view v-if="leftText.length" :class="{'uni-navbar-btn-icon-left':!leftIcon.length}" class="uni-navbar-btn-text uni-navbar__content_view">{{ leftText }}</view>
					<slot name="left" />
				</view>
				<view class="uni-navbar__header-container uni-navbar__content_view" :style="{'line-height':statusline}">
					<view v-if="title.length" class="uni-navbar__header-container-inner uni-navbar__content_view" :style="{'line-height':statusline}">{{ title }}</view>
					<!-- 标题插槽 -->
					<slot />
				</view>
				<view class="uni-navbar__header-btns uni-navbar__content_view" @tap="onClickRight" :style="{'line-height':statusline}">
					<view v-if="rightIcon.length" class="uni-navbar__content_view">
						<uni-icon :type="rightIcon" :color="color" size="24" />
					</view>
					<!-- 优先显示图标 -->
					<view v-if="rightText.length&&!rightIcon.length" class="uni-navbar-btn-text uni-navbar__content_view">{{ rightText }}</view>
					<slot name="right" />
				</view>
			</view>
		</view>
		<!-- <view v-if="fixed" class="uni-navbar__placeholder">
			<uni-status-bar v-if="statusBar" />
			<view class="uni-navbar__placeholder-view" />
		</view> -->
	</view>
</template>

<script>
	import uniStatusBar from '../uni-status-bar/uni-status-bar.vue'
	import uniIcon from '../uni-icon/uni-icon.vue'

	export default {
		name: 'UniNavBar',
		components: {
			uniStatusBar,
			uniIcon
		},
		props: {

			backHeight: {
				type: String,
				default: ''
			},
			theme: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			leftText: {
				type: String,
				default: ''
			},
			rightText: {
				type: String,
				default: ''
			},
			leftIcon: {
				type: String,
				default: ''
			},
			rightIcon: {
				type: String,
				default: ''
			},
			fixed: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: 'white'
			},

			statusBar: {
				type: Boolean,
				default: false
			},
			shadow: {
				type: Boolean,
				default: true
			},
			border: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				statusHeight: 0,
				statusline: 0,
				backColor: 'background-image: linear-gradient(to right top, #ffd46e, #ffc17b, #ffb18f, #ffa6a6, #ffa1bb, #fd9fc6, #f99ed2, #f29edf, #e79ce2, #dc9ae5, #cf98e8, #c297ea)',
				backStatus: 1
			}
		},


		mounted() {
			uni.$on('theme', function(data) {
				let theme = uni.getStorageSync('theme');
				this.backStatus = theme.backStatus
				this.backColor = theme.backColor;
				// console.log("改变" + this.backColor)
				// console.log(this.$refs.box)
			})
			let theme = uni.getStorageSync('theme');
			this.backStatus = theme.backStatus
			this.backColor = theme.backColor
			this.getTitleHeight()
		},
		methods: {
			onClickLeft() {
				this.$emit('click-left')
			},
			onClickRight() {
				this.$emit('click-right')
			},
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
			}

		}
	}
</script>

<style lang="scss">
	@charset "UTF-8";

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
		padding-right: 60upx
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
