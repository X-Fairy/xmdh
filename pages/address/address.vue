<template>
	<view class="content b-t">
		<view class="list b-b" v-for="(item, index) in mvc.addressList" :key="index">
			<view class="wrapper">
				<view class="address-box">
					<text v-if="item.default" class="tag">{{i18n.Default}}</text>
					<text class="name">{{i18n.consignee}}:{{item.NAME}}</text>
				</view>
				<view class="u-box">
					<text class="address">{{i18n.title}}：{{item.ADDRESS}}</text>
				</view>
				<view class="">
					{{i18n.code}}:{{item.CODE}} <text v-if="item.PHONE">{{i18n.Phone}}:{{item.PHONE}}</text>
				</view>

			</view>

		</view>

	</view>
</template>

<script>
	import api from '@/common/index.js';
	let mvc = {
		source: 0,
		addressList: []
	}
	export default {
		data() {
			return {
				mvc: {
					source: 0,
					addressList: []
				}
			}
		},

		onLoad(option) {
			let that = this;
			setTimeout(function() {
				api.pageTitle(that.$t('address').title)
				mvc.source = option.source;
				that.lodeData();
			}, 300)

		},
		computed: {
			i18n() {
				return this.$t("address")
			}
		},
		methods: {
			lodeData() {
				let that = this;
				that.$ajax.address().then(res => {
					res[0].default = true;
					mvc.addressList = res;
					that.mvc = mvc;
				})
			},
			
		}
	}
</script>

<style lang='scss'>
	page {
		padding-bottom: 120upx;
	}

	.list {
		display: flex;
		align-items: center;
		padding: 20upx 30upx;
		;
		background: #fff;
		position: relative;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.address-box {
		display: flex;
		align-items: center;

		.tag {
			font-size: 24upx;
			color: $base-color;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}

		.address {
			font-size: 30upx;
			color: $font-color-dark;
		}
	}

	.u-box {
		font-size: 28upx;
		color: $font-color-light;
		margin-top: 16upx;

		.name {
			margin-right: 30upx;
		}
	}

	.icon-bianji {
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 40upx;
		color: $font-color-light;
		padding-left: 30upx;
	}

	.add-btn {
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: #7AC5CD;
		border-radius: 10upx;

	}
</style>
