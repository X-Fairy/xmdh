<template>
	<view>
		
		<uni-swipe-action :options="options2">
			<image src="../../static/100.png" mode="" style="height:120upx;width: 120upx;"></image>
		</uni-swipe-action>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	export default {
		components: {
			uniSwipeAction
		},
		data() {
			return {
				options2: [{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				options3: [{
					text: '置顶'
				}, {
					text: '标记为已读',
					style: {
						backgroundColor: 'rgb(254,156,1)'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: 'rgb(255,58,49)'
					}
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
