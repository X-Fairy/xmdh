import Vue from 'vue'
import store from './store'
import App from './App'
import Json from './Json' //测试用数据
import index from './common/index'
import ajax from './common/request'
import enmsg from './common/en'
import zhmsg from './common/zh'
import VueI18n from 'vue-i18n'
import VueLazyload from 'vue-lazyload' //图片的懒加载
Vue.use(VueI18n);
Vue.use(VueLazyload, {
	loading: require('@/static/60x60.png')
})
const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type => {
	//模拟异步请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}
const currentVersion = {
	id: 1002
}
const i18n = new VueI18n({
	locale: 'zh',
	messages: {
		'en': enmsg,
		'zh': zhmsg
	}
})
Vue.prototype._i18n = i18n
Vue.prototype.$current = currentVersion

Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {
	msg,
	json,
	prePage
};
Vue.prototype.$xm = index;
Vue.prototype.$ajax = ajax;
App.mpType = 'app'

const app = new Vue({
	i18n,
	...App
})

app.$mount()
