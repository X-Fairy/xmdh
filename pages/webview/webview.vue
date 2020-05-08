<template>
	<view>		
		<!-- 小程序 -->
		<!-- #ifdef MP -->
		<web-view :src="webURL"></web-view>
		<!-- #endif -->
	</view>
</template>

<script>
	import api from '@/common/index.js';
	
	export default {
		data() {
			return {
				webURL: ''
			}
		},
		onLoad(option) {
			let that = this;
			// 获取跳转参数
			// console.log(option)
			// 获取时间戳
			let timestamp = (new Date()).getTime();

			// uni.$on('web', function(data) {
			// 	console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
			// })
			// 获取用户信息
			let user = uni.getStorageSync('userinfo');

			// 手机端
			// #ifdef APP-PLUS
			var subpage_style = {
				top: '70px',
				bottom: '0px',
				height: '100%',
			};
			// 页面格式
			// 判断秒杀页面
			if (option.dis) {
				plus.webview.create(option.url + "?uname=" + user.username + '&hdid=' + user.hdid + '&uid=' + user.uid + '&sign=' +
					user.token + '&token=AxiPmiPvogue' + '&t=' + timestamp + '&dis=' + option.dis, "text", subpage_style)
			} else {
				plus.webview.create(option.url + "?uname=" + user.username + '&hdid=' + user.hdid + '&uid=' + user.uid + '&sign=' +
					user.token + '&token=AxiPmiPvogue' + '&t=' + timestamp, "text", subpage_style)
			}
			// plus.webview.create(option.url + "?uname=" + user.username + '&hdid=' + user.hdid + '&uid=' + user.uid + '&sign=' +
			// 	user.token + '&token=AxiPmiPvogue' + '&t=' + timestamp, "text", subpage_style)
			// plus.webview.create("http://172.21.8.129:8080/#/index?uname="+user.username + '&hdid=' + user.hdid +'&uid=' + user.uid + '&sign=' + user.token + '&token=AxiPmiPvogue', "text", subpage_style)

			// 创建页面
			setTimeout(function() {
				that.post();
			}, 1000)
			// #endif


			// 小程序端
			// #ifdef MP-WEIXIN
			if (option.dis) {
				this.webURL = option.url + "?uname=" + user.username + '&hdid=' + user.hdid + '&uid=' + user.uid + '&sign=' + user.token +
					'&token=AxiPmiPvogue' + '&t=' + timestamp + '&dis=' + option.dis;
			} else {
				this.webURL = option.url + "?uname=" + user.username + '&hdid=' + user.hdid + '&uid=' + user.uid + '&sign=' + user.token +
					'&token=AxiPmiPvogue' + '&t=' + timestamp;
			}
			console.log(this.webURL)
			// #endif

		},
		methods: {
			back() {
				//监控手机顶部app返回键
				uni.switchTab({
					url: '/pages/index/index'
				});
				// #ifdef APP-PLUS
				plus.webview.close("text");
				// #endif

			},
			post() {
				plus.webview.show("text");
			}
		},
		onBackPress() {

			//监控手机底部自带返回键
			// #ifdef APP-PLUS
			plus.webview.close("text");
			// #endif

		}
	}
</script>

<style>
	web-view {
		margin: 100px;
	}
</style>
