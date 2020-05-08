<template>
	<view>
		<view style="position: fixed;left: 0;width: 100%;height: 150upx;z-index: 90;">
			<uni-nav-bar left-icon="back" :title="list.navTitle" @click-left="back" />
		</view>
		<view :style="{'padding-top': navHeight}">
			<div v-html="list.content" class="contentInfo">
			</div>
		</view>

	</view>
</template>

<script>
	import api from '@/common/index.js';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	var eindex = {
		content: '',
		navTitle: '',

	}
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				navHeight: 0,
				list: {
					content: '',
					navTitle: '',
					
				}
			}
		},
		onLoad(option) {
			let that=this;
			api.load(this.$t('index').loadmsg)
			eindex=this.list;
			this.getTitleHeight();
			setTimeout(function(){
				that.loadData(option.id);
			},300)

		},

		methods: {
			loadData(id) {
				let that = this;
				that.$ajax.artData(id).then(res => {
					let str = res.info.contents;
					str.replace(/\<img/g, '<img style="max-width:100%;"')
					eindex.content = str.replace(/\<img/g, '<img style="max-width:100%;"');
					eindex.navTitle = res.info.title;
					that.list=eindex;
					uni.hideLoading();
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			getTitleHeight() {
				let that = this;
				uni.getSystemInfo({
					success: res => {
						console.log(res.screenHeight)
						if (res.screenHeight < 750) {
							that.navHeight = "67px"
							return false;
						}
						if (res.screenHeight < 950) {
							that.navHeight = "77px"
							return false;
						}
						if (res.screenHeight > 1000) {
							that.navHeight = "100px";
							return false;
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.title {
		text-align: center;
		font-size: 38upx;
	}

	.contentInfo>>>p {
		max-width: 100%;
	}

	.contentInfo>>>p img {
		max-width: 100%;
	}

	.contentInfo>>>img {
		max-width: 100%;
	}
</style>
