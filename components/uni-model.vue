<template>
	<view>
		<view class="mask">
			<view class="close">
				<image :src="close" mode="" @click="bindclose"></image>
			</view>
			<view class="box">
				<view class="info"   @click="bindsrc">
					<image :src='moderSrc'  mode="aspectFit" class="animated pulse infinite"></image>
				</view>
			</view>

		</view>
		<!-- <view class="bottom">
			<image :src="footsrc" mode=""></image>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: true
			};
		},
		props: {
			moderSrc: {
				type: String
			},
			close: {
				type: String
			}
		},
		created() {},
		methods: {
			bindclose() {

				this.$emit('hide')
			},
			bindsrc() {

				this.$emit('bindmodel')
			}
		}
	}
</script>

<style lang='scss'>
	.mask {
		position: fixed;
		z-index: 99999;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .6);
	}

	.close {
		position: fixed;
		top: 23%;
		right: 13%;
		width: 60upx;
		height: 60upx;
		z-index: 999999;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.box {
		position: fixed;
		z-index: 99999;
		width: 90%;
		height: 100%;
		left: 50%;
		top:50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
		border-radius: 3px;
		/* background-color: #FFFFFF; */

		.info {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content:center ;
			align-items: center;
			image {
				width: 100%;
				height: 100%;
			}
		}

	}

	.bottom {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 110upx;
		z-index: 9;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
