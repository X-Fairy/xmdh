(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"2a5b":function(e,t,n){},"51cf":function(e,t,n){"use strict";(function(e,t){n("d471"),n("921b");var o=p(n("66fd")),a=p(n("43b6")),u=p(n("8379")),i=p(n("c06f")),c=p(n("3d3b")),r=p(n("747f")),s=p(n("81dd")),l=p(n("9e13")),f=p(n("a701")),d=p(n("3a9a"));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){g(e,t,n[t])})}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o.default.use(f.default),o.default.use(d.default,{loading:n("1909")});var b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(t)&&e.showToast({title:t,duration:n,mask:o,icon:a})},v=function(e){return new Promise(function(t){setTimeout(function(){t(i.default[e])},500)})},h=function(){var e=getCurrentPages(),t=e[e.length-2];return t.$vm},S={id:1002},$=new f.default({locale:"zh",messages:{en:s.default,zh:l.default}});o.default.prototype._i18n=$,o.default.prototype.$current=S,o.default.config.productionTip=!1,o.default.prototype.$fire=new o.default,o.default.prototype.$store=a.default,o.default.prototype.$api={msg:b,json:v,prePage:h},o.default.prototype.$xm=c.default,o.default.prototype.$ajax=r.default,u.default.mpType="app";var y=new o.default(m({i18n:$},u.default));t(y).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])},8379:function(e,t,n){"use strict";n.r(t);var o=n("cea9");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("8aa1");var u,i,c=n("2877"),r=Object(c["a"])(o["default"],u,i,!1,null,null,null);t["default"]=r.exports},"8aa1":function(e,t,n){"use strict";var o=n("2a5b"),a=n.n(o);a.a},bf4c:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("3d3b")),n("2f62");function a(e){return e&&e.__esModule?e:{default:e}}var u,i=n("737f"),c={methods:{createWebSocket:function(){var t="wss://sw.xmvogue.com",n={timeout:3e4,timeoutObj:null,serverTimeoutObj:null,reset:function(){return clearTimeout(this.timeoutObj),clearTimeout(this.serverTimeoutObj),this},start:function(){var a=this;this.timeoutObj=setTimeout(function(){e.sendSocketMessage({data:"keep",success:function(e){n.reset().start()},fail:function(e){console.log(o(e," at App.vue:31"))}}),a.serverTimeoutObj=setTimeout(function(){e.onSocketClose(function(e){console.log(o("WebSocket 已关闭！"," at App.vue:36")),reconnect(t)})},a.timeout)},this.timeout)}};e.connectSocket({url:t}),e.onSocketOpen(function(t){setTimeout(function(){var t=e.getStorageSync("userinfo"),a=getCurrentPages(),u=a[0].route.split("/");console.log(o(a," at App.vue:54"));var i='{"user_id":"'+t.hdid+'","user_name":"'+t.username+'","page":"'+u[2]+'","src":"app"}',c={class:"Xmorder",action:"connect",content:i},r=JSON.stringify(c);e.sendSocketMessage({data:r,success:function(e){console.log(o(r," at App.vue:66")),n.reset().start()},fail:function(e){}})},2e3)}),e.onSocketMessage(function(e){console.log(o(e," at App.vue:78"))})}},computed:{i18n:function(){return this.$t("index")}},onLaunch:function(){u=new i({key:"Y63BZ-KFOWF-LRRJZ-NL52N-OC2F2-T2FPA"})},onShow:function(){if("2"==this.$store.state.app){var t=e.getStorageSync("lang"),n=this;t?("zh"==t.locale&&(this.$i18n.locale="zh"),"en"==t.locale&&(this.$i18n.locale="en"),e.setTabBarItem({index:0,text:n.$t("index").tab1}),e.setTabBarItem({index:1,text:n.$t("index").tab2}),e.setTabBarItem({index:2,text:n.$t("index").tab3}),e.setTabBarItem({index:3,text:n.$t("index").tab4})):this.$i18n.locale="zh",""!=e.getStorageSync("userinfo")&&this.createWebSocket(),this.$request.getclient(),setTimeout(function(){u.reverseGeocoder({location:"",success:function(e){"中国"==e.result.address_component.nation?(n.$store.dispatch("imghideZN"),n.$api.msg(n.$t("index").address+e.result.address_component.nation)):n.$store.dispatch("imgshowEN"),console.log(o(n.$store.getters.imgShow," at App.vue:168"))},fail:function(e){console.log(o("获取当前地址失败"," at App.vue:171"))}})},2e3)}},onHide:function(){e.closeSocket(),e.onSocketClose(function(e){console.log(o("WebSocket 已关闭！"," at App.vue:180"))})}};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},cea9:function(e,t,n){"use strict";n.r(t);var o=n("bf4c"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=a.a}},[["51cf","common/runtime","common/vendor"]]]);