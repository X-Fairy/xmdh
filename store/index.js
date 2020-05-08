import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		showFooter: true,
		userinfo: {},
		imgStatus: true,
		imgUrl: 'http://img.xmvogue.com',
		app: '1' //1是国内app，2是海外app
	},
	getters: {
		isShow(state) {
			return state.showFooter
		},
		imgGet(state) {
			return state.imgStatus
		},
		imgShow(state) {
			return state.imgUrl
		},
	},
	mutations: {
		// 修改登录状态
		show(state) {
			state.showFooter = true;
		},
		hide(state) {
			state.showFooter = false;
		},
		// 储存用户信息
		login(state, provider) {
			state.hasLogin = true;
			state.userinfo = provider;
			// uni.setStorageSync({ //缓存用户登陆状态
			// 	key: 'userinfo',
			// 	data: provider
			// })
			uni.setStorageSync('userinfo', provider);
		},
		//退出登录
		logout(state) {
			state.hasLogin = false;
			state.userinfo = {};
			uni.removeStorageSync('userinfo');
			// uni.removeStorageSync('getlist');
			// uni.removeStorageSync('radio');
			// uni.removeStorageSync('collectlist');
			// uni.removeStorageSync('list');
			// uni.removeStorageSync('lang');
			// uni.removeStorage({
			// 	key: 'userinfo'
			// })
			uni.removeStorage({
				key: 'getlist'
			})
			uni.removeStorage({
				key: 'radio'
			})
			uni.removeStorage({
				key: 'collectlist'
			})
			uni.removeStorage({
				key: 'list'
			})
			uni.removeStorage({
				key: 'lang'
			})
		},
		// 返回登录页面
		navLogin(state) {
			uni.showToast({
				title: '请登录后操作',
				image: "../../static/msg.png",
				duration: 1500
			});
			setTimeout(function() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}, 1500)
		},
		// 修改图片状态
		imgZN(state) {
			state.imgStatus = true;
			if (state.imgStatus) {
				state.imgUrl = 'http://img.xmvogue.com'
			} else {
				state.imgUrl = 'http://hwimg.xmvogue.com'
			}
		},
		imgEN(state) {
			state.imgStatus = false;
			if (state.imgStatus) {
				state.imgUrl = 'http://img.xmvogue.com'
			} else {
				state.imgUrl = 'http://hwimg.xmvogue.com'
			}
		},

	},
	actions: {
		hideFooter(context) { //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
			context.commit('hide');
		},
		showFooter(context) { //同上注释
			context.commit('show');
		},
		showLogin(context) {
			context.commit('navLogin');
		},
		imghideZN(context) {
			context.commit('imgZN');
		},
		imgshowEN(context) {
			context.commit('imgEN');
		},

	},
})

export default store
