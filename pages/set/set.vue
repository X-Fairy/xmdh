<template>
	<view class="container">
		<view class="list-cell" @click="allclose">
			<text class="cell-tit">{{i18n.clear}}</text>

			<text class="cell-more yticon icon-you"></text>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="list-cell" @click="udate" v-if="hdid==true">
			<text class="cell-tit">{{i18n.check}}</text>
			<text class="cell-tip">{{i18n.version}} {{version}}</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<!-- #endif -->
		<view class="list-cell log-out-btn" @click="toLogout">
			<text class="cell-tit">{{i18n.quit}}</text>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	import api from '@/common/index.js';
	export default {
		data() {
			return {
				version: '',
				hdid: false
			};
		},
		onLoad(){
			api.pageTitle(this.$t('set').title)
		},
		computed:{
			i18n(){
				return this.$t('set');
			}
		},
		onShow() {
			//#ifdef APP-PLUS
			let that = this;
			plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
				console.log(wgtinfo.version); //应用版本号
				that.version = wgtinfo.version;
			})
			if (plus.os.name.toLowerCase() == "android") {
				that.hdid = true
			}
			if (plus.os.name.toLowerCase() == "ios") {
				that.hdid = true
			}
			// #endif
		},
		methods: {
			...mapMutations(['logout']),
			allclose() {
				uni.clearStorage();
				this.$api.msg(this.$t('set').hint)
			},
			//退出登录
			toLogout() {
				let that = this;
				uni.showModal({
					content: that.$t('set').modelMsg,
					cancelText:that.$t('index').cancel,
					confirmText:that.$t('index').confirm,
					success: (e) => {
						if (e.confirm) {
							this.logout();
							uni.closeSocket();
							setTimeout(function(){
								uni.reLaunch({
									url: '/pages/login/login'
								})
							}, 500)
						}
					}
				});
			},
			udate() {
				//#ifdef APP-PLUS
				let that = this;
				api.load(this.$t('index').loadmsg)
				
				// 判断当前系统
				let status = "";
				if (plus.os.name.toLowerCase() == "android") {
					status = 1; // 当前系统为安卓

				} else {
					status = 2; // 当前系统为ios
				}
				let params = {
					version: that.version,
					type: status
				}
				api.post("/index.php/Home/Version/index", params, function(res) {
					if (res.id) {
						uni.navigateTo({
							url: '/pages/update/update'
						});
					} else {
						that.$api.msg("当前版本是最新版本~")
					}
				})

				setTimeout(function() {
					uni.hideLoading();
				}, 500);
				// #endif
			},
		}

	}
</script>

<style lang='scss'>
	page {
		background: $page-color-base;
	}

	.list-cell {
		display: flex;
		align-items: baseline;
		padding: 20upx $page-row-spacing;
		line-height: 60upx;
		position: relative;
		background: #fff;
		justify-content: center;

		&.log-out-btn {
			margin-top: 40upx;

			.cell-tit {
				color: $uni-color-primary;
				text-align: center;
				margin-right: 0;
			}
		}

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
		}

		&.m-t {
			margin-top: 16upx;
		}

		.cell-more {
			align-self: baseline;
			font-size: $font-lg;
			color: $font-color-light;
			margin-left: 10upx;
		}

		.cell-tit {
			flex: 1;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			margin-right: 10upx;
		}

		.cell-tip {
			font-size: $font-base;
			color: $font-color-light;
		}

		switch {
			transform: translateX(16upx) scale(.84);
		}
	}
</style>
