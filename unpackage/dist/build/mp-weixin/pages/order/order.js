(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"060f":function(n,e,t){"use strict";(function(n){t("3f5c"),t("921b");o(t("66fd"));var e=o(t("dea3"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},4486:function(n,e,t){"use strict";var o=t("61c3"),a=t.n(o);a.a},"61c3":function(n,e,t){},"92a4":function(n,e,t){"use strict";var o={"uni-load-more":function(){return t.e("components/uni-load-more/uni-load-more").then(t.bind(null,"5c08"))}},a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return o}))},c62d:function(n,e,t){"use strict";t.r(e);var o=t("d456"),a=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,(function(){return o[n]}))}(r);e["default"]=a.a},d456:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(t("4795")),a=(r(t("cd60")),r(t("0421")));function r(n){return n&&n.__esModule?n:{default:n}}function i(n,e,t,o,a,r,i){try{var u=n[r](i),d=u.value}catch(c){return void t(c)}u.done?e(d):Promise.resolve(d).then(o,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(o,a){var r=n.apply(e,t);function u(n){i(r,o,a,u,d,"next",n)}function d(n){i(r,o,a,u,d,"throw",n)}u(void 0)}))}}t("7839");var d=function(){t.e("components/empty").then(function(){return resolve(t("30fd"))}.bind(null,t)).catch(t.oe)},c=function(){t.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(t("d4f9"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("components/uni-load-more/uni-load-more").then(function(){return resolve(t("5c08"))}.bind(null,t)).catch(t.oe)},s={loadingType:"more",orderList:[],cartoon:!1,navList:[],activeClass:0,page:1,type:"add",status:0},f={components:{uniNavBar:c,empty:d,uniLoadMore:l},data:function(){return{mvc:{loadingType:"more",orderList:[],cartoon:!1,navList:[],activeClass:0,page:1,type:"add",status:0}}},onLoad:function(n){},onShow:function(){var n=this;setTimeout((function(){s=n.mvc,s.activeClass=0,s.page=1,s.orderList=[],a.default.load(n.$t("index").loadmsg),a.default.pageTitle(n.$t("order_list").title),s.navList=n.$t("order_list").navList,n.loadData()}),300)},computed:{i18n:function(){return this.$t("order_list")}},onPullDownRefresh:function(){s.page=1,s.type="refresh",this.loadData()},onReachBottom:function(){s.type="add",this.loadData()},methods:{back:function(){n.navigateBack({delta:1})},loadData:function(){var e=this;return u(o.default.mark((function t(){var a,r;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,s.cartoon=!1,r={page:s.page},0==s.activeClass?a.$ajax.orderHa(r).then((function(e){if(null==e.list||0==e.other.totalPage)return n.hideLoading(),s.loadingType="nomore",s.cartoon=!0,!1;a.pagenum(e)})):a.$ajax.orderHd(r).then((function(e){if(null==e.list||0==e.other.totalPage)return n.hideLoading(),s.loadingType="nomore",s.cartoon=!0,!1;a.pagenum(e)}));case 4:case"end":return t.stop()}}),t)})))()},pagenum:function(e){var t=this,o=e.list;if(s.loadingType=e.other.thispage>e.other.totalPage?"nomore":"more","add"==s.type){if(s.page=s.page+1,"nomore"===s.loadingType)return void(t.mvc=s);s.loadingType="loading"}else s.loadingType="more";if("refresh"==s.type){if(s.orderList=[],n.stopPullDownRefresh(),s.page=s.page+1,"nomore"===s.loadingType)return void(t.mvc=s);s.loadingType="loading"}if(o.length<20)return s.loadingType="nomore",n.hideLoading(),s.orderList=s.orderList.concat(o),t.mvc=s,!1;n.hideLoading(),s.orderList=s.orderList.concat(o),t.mvc=s},bindnav:function(n){s.activeClass=n;var e=this;s.cartoon=!1,s.loadingType="more",s.page=1,s.orderList=[],a.default.load(this.$t("index").loadmsg),e.loadData()},details:function(e){0==s.activeClass&&n.navigateTo({url:"/pages/oreder-detail/index?sn="+e}),1==s.activeClass&&n.navigateTo({url:"/pages/order-hddata/order-hddata?sn="+e})}}};e.default=f}).call(this,t("543d")["default"])},dea3:function(n,e,t){"use strict";t.r(e);var o=t("92a4"),a=t("c62d");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("4486");var i,u=t("f0c5"),d=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=d.exports}},[["060f","common/runtime","common/vendor"]]]);