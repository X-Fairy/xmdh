(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0494":function(t,e,n){"use strict";var a=n("6f8c"),i=n.n(a);i.a},"2ea3":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("3d3b")),n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/mix-list-cell").then(n.bind(null,"1240"))},s=0,r=0,u=!0,c={username:"",uid:"",isvip:"",activeList:[],price:0,integralNum:0,disLength:0},l={components:{listCell:o},data:function(){return{app:1,coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,language:"中文",langStatus:!1,index:{username:"",uid:"",isvip:"",price:0,integralNum:0,disLength:0}}},onLoad:function(){setTimeout(function(){var e=t.getStorageSync("userinfo");if(!e)return this.$store.dispatch("showLogin"),!1},300)},onShow:function(){var e=this;if(setTimeout(function(){c=e.index;var n=t.getStorageSync("userinfo");c.username=n.username,c.uid=n.uid,c.isvip=n.isvip,e.getAmt()},300),"2"==this.$store.state.app){this.app=2;var n=t.getStorageSync("lang"),i=t.getStorageSync("userinfo");if(n?(console.log(a(n.locale," at pages\\user\\user.vue:164")),"zh"==n.locale&&(this.language="English",this.langStatus=!1),"en"==n.locale&&(this.language="中文",this.langStatus=!1)):(this.$i18n.locale="en",this.language="中文"),!i||!n)return this.$store.dispatch("showLogin"),!1}},onNavigationBarButtonTap:function(e){var n=e.index;if(0===n)this.navTo("/pages/set/set");else if(1===n){var a=getCurrentPages(),i=a[a.length-1],o=i.$getAppWebview();o.hideTitleNViewButtonRedDot({index:n}),t.navigateTo({url:"/pages/notice/notice"})}},computed:{i18n:function(){return this.$t("my")}},methods:{delete1:function(){t.removeStorage({key:"lang",success:function(t){}})},switchChange:function(e){var n=this,a={locale:"",lang:""},i=t.getStorageSync("userinfo");"English"==this.language?(this.language="中文",this.langStatus=!0,this.$i18n.locale="en",i.lang="English",a.lang="English",a.locale="en"):(this.langStatus=!0,this.language="English",i.lang="Chinese",a.lang="Chinese",this.$i18n.locale="zh",a.locale="zh"),t.setTabBarItem({index:0,text:n.$t("index").tab1}),t.setTabBarItem({index:1,text:n.$t("index").tab2}),t.setTabBarItem({index:2,text:n.$t("index").tab3}),t.setTabBarItem({index:3,text:n.$t("index").tab4}),t.setStorageSync("lang",a),t.setStorageSync("userinfo",i)},getAmt:function(){t.getStorageSync("userinfo");var e=this;e.$ajax.money().then(function(t){c.price=t,e.integral()})},integral:function(){var t=this;t.$ajax.integral().then(function(e){c.integralNum=e,t.disData()})},disData:function(){var t=this;t.$ajax.dis().then(function(e){var n=e,a=[];n.forEach(function(t,e){0==t.data.type.expire&&0==t.data.type.not_used&&a.push(t)}),t.activeList=a,c.disLength=a.length,t.index=c})},address:function(e){t.navigateTo({url:"/pages/address/address"})},order:function(){t.navigateTo({url:"/pages/order/order"})},navTech:function(){t.navigateTo({url:"/pages/technology/technology"})},repertory:function(){t.navigateTo({url:"/pages/repertory/repertory"})},market:function(){t.navigateTo({url:"/pages/market/market"})},sale:function(){t.navigateTo({url:"/pages/sale/sale"})},navTo:function(){t.navigateTo({url:"/pages/set/set"})},navCollect:function(){t.navigateTo({url:"/pages/collect/collect"})},navDiscounts:function(){t.navigateTo({url:"/pages/discounts/discounts"})},coverTouchstart:function(t){!1!==u&&(this.coverTransition="transform .1s linear",s=t.touches[0].clientY)},coverTouchmove:function(t){r=t.touches[0].clientY;var e=r-s;e<0?this.moving=!1:(this.moving=!0,e>=80&&e<100&&(e=80),e>0&&e<=80&&(this.coverTransform="translateY(".concat(e,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}},onBackPress:function(){var e=plus.android.runtimeMainActivity();plus.android.runtimeMainActivity(),plus.runtime.quit=function(){e.moveTaskToBack(!1)},t.closeSocket(),t.onSocketClose(function(t){console.log(a("WebSocket 已关闭！"," at pages\\user\\user.vue:395"))}),plus.nativeUI.toast=function(n){if("再按一次退出应用"==n)return e.moveTaskToBack(!1),!1;t.showToast({title:"再按一次退出应用",icon:"none"})}}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},"6f8c":function(t,e,n){},b7f4:function(t,e,n){"use strict";n.r(e);var a=n("dd13"),i=n("f730");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("0494");var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},dd13:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},f730:function(t,e,n){"use strict";n.r(e);var a=n("2ea3"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},f7ec:function(t,e,n){"use strict";(function(t){n("d471"),n("921b");a(n("66fd"));var e=a(n("b7f4"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f7ec","common/runtime","common/vendor"]]]);