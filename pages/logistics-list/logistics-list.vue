<template>
	<view>
		<view style="padding-bottom: 120upx;">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in mvc.saleList" :key="index"
				 @click="details(item.id)">
					<view class="uni-list-cell-navigate uni-navigate-right uni-media-list">
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top" style="font-size: 26upx;">{{i18n.dhl}}：{{item.express_name}}{{i18n.ex}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis" style="font-size:24upx;">{{i18n.time}}: {{item.addtime}}</view>
						</view>
					</view>
				</view>
			</view>
			<uni-load-more :status="mvc.loadingType"></uni-load-more>
		</view>
		<view class="uni-btn-v">
			<button class="xi-btn" @click="navlogistics">{{i18n.submit}}</button>
		</view>
	</view>
</template>

<script>
	import api from '@/common/index.js';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import '@/common/uni.css';
	var mvc = {
		saleList: [],
		loadingType: 'more', //加载更多状态
		cartoon: false,
		page: 1, //当前页
		type: 'add'
	}
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				mvc: {
					saleList: [],
					loadingType: 'more', //加载更多状态
					cartoon: false,
					page: 1, //当前页
					type: 'add'
				}
			}
		},
		onLoad() {

		},
		computed: {
			i18n() {
				return this.$t('send');
			}
		},
		onShow(e) {
			let that = this
			setTimeout(function() {
				api.pageTitle(that.$t('send').title)
				api.load(that.$t('index').loadmsg)
				that.loadData();
			}, 300)

		},
		methods: {
			loadData() {
				let that = this;
				let params = {
					p: 1
				}
				that.$ajax.logisList(params).then(res => {
					let list = res.list;
					if (list == null || res.other.totalPage == 0) {
						uni.hideLoading();
						mvc.cartoon = true;
						mvc.loadingType = "nomore";
						return false;
					} else {
						list.forEach(function(item, index) {
							if (item.status == 1) {
								item.status = "已清点"
							};
							if (item.status == 2) {
								item.status = "完成"
							};
							if (item.status == 0) {
								item.status = "待审核"
							};
						})
						mvc.saleList = list;
						// that.mvc = mvc;
						that.pagenum(res);
					}
				})
			},
			pagenum(res) {
				let that = this;
				mvc.loadingType = res.other.thispage > res.other.totalPage ? 'nomore' : 'more';
				//请求分页
				if (mvc.type == 'add') {
					mvc.page = mvc.page + 1;

					if (mvc.loadingType === 'nomore') {
						that.mvc = mvc;
						return;
					}
					mvc.loadingType = 'loading';
				} else {
					mvc.loadingType = 'more'
				}

				// 刷新页面
				if (mvc.type == 'refresh') {
					mvc.saleList = [];
					uni.stopPullDownRefresh();
					mvc.page = mvc.page + 1;

					if (mvc.loadingType === 'nomore') {
						that.mvc = mvc;
						return;
					}
					mvc.loadingType = 'loading';
				}
				// 当前页面小于20条
				if (mvc.saleList.length < 20) {
					mvc.loadingType = 'nomore';
					uni.hideLoading();
					mvc.saleList = mvc.saleList.concat(mvc.saleList);
					that.mvc = mvc;
					return false;
				}
				uni.hideLoading();
				
				mvc.saleList = mvc.saleList.concat(mvc.saleList);
				that.mvc = mvc;
			},
			//下拉刷新
			onPullDownRefresh() {
				mvc.page = 1;
				mvc.type = 'refresh';
				this.loadData();
			},
			//加载更多
			onReachBottom() {
				mvc.type = 'add'
				this.loadData();
			
			},
			details(e) {
				uni.navigateTo({
					url: '/pages/logistics-detail/logistics-detail?id=' + e
				})

			},

			navlogistics(e) {
				uni.navigateTo({
					url: '/pages/logistics-add/logistics-add'
				})
			}
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: "iconfont";
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALsAAsAAAAABpgAAAKfAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBIIEzATYCJAMICwYABCAFhG0HMRvaBRHVk0dkXx3whuhTd5h1rRnOCNt6v7AKMfqbKhpWTcf7HDzx++M7c+d+EInQwmk3bYOTEI0mRCNCSXoeY4piLWcrRKvbmwKUwOifuHov2LheACzOOV2jItRIXpNnXUiKoywnp+iPe6d/FFAg8513ucwxaVIXYBxIAY61qIukQEJvGLvgBR6GAJ7ESiN1DW19BIs9SgBZNH/uNCl4sViWcEdwbVhokY244G7Wm5vAhuj78pGcuIPBRbFLuubUz2JvEp0UXeYsGwsQfCCg5S6AAmnAgvQ1RjsgwkiKZ1Qk4liFAm8SHSfQI0fVIOyvs/O9AYiG3GfiefxHZTQAWOgMmaB90g6g3t5hPHx4fvz4+uTJ7dGjmJ1nQdEFXkzLZfmOsB2HI4aWhfRv27VzX+jA9u2hUupye+H3XWzH9HvV3+7Sv7uccy4/tviC7nny/7pbnz4FrEz1/lCk9G2fiIZGrzt7vgzUretM6Y0DS7lxe7vyhMcOqgDgXK+LWvkff4OJLmzSr2x3LwvAs6ZXZyO3c70ZZgf3s9kE/hpvYIM1BLbOWI3XmDRk0rsp88QTcMDOQK+nKkNuMSm4E3KjdjdiMlDcSUYtMQ1c8CLP54o718oHT1I1wuVeBFkMEesBpFgNQPB3Egy+XAbF3y3UEl+BC6E+gyv+UfBkQII29AJsojqjFnRg3hDtNJJrEBUXHtHfi+a8ICJfkdcYgK5uy4kDjshLTFkfvhchIJ4G2IPjsJQJZp4SWqmDyLxpGmp6UW2noVKcUQs6YN4g2mmkoLWoyueP6O9Fc0ddnfmKvMbuQafWDkAP0nFQ3aM8sz58T4QA8TSAPeiHpUxgbu6X0EotTAjPG43TjIZK6+3lw99tAzyxVUacnoqXhJiiHqsKAA==');
	}

	page {
		background: $page-color-base;
		height: 100%;
	}

	.icon {
		font-family: "iconfont" !important;
		font-size: 16px;

		&.time {
			&:before {
				content: "\e622";
			}
		}

	}
</style>
