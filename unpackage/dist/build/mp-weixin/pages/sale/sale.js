(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sale/sale"],{1101:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;o(e("cd60"));var a=o(e("0421"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){e.e("components/uni-load-more/uni-load-more").then(function(){return resolve(e("5c08"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/empty").then(function(){return resolve(e("30fd"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("d4f9"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/over").then(function(){return resolve(e("7aed"))}.bind(null,e)).catch(e.oe)},r={saleList:[],cartoon:!1,over:!1},s={components:{uniNavBar:c,uniLoadMore:i,empty:u,over:l},data:function(){return{navList:[{state:0,text:"申报产品",loadingType:"more",saleList:[]},{state:1,text:"寄回产品",loadingType:"more",saleList:[]}],mvc:{saleList:[],cartoon:!1,over:!1}}},computed:{i18n:function(){return this.$t("sale")}},onLoad:function(t){a.default.pageTitle(this.$t("sale").title),0==t.state&&this.loadData()},onShow:function(){t.showLoading({title:"正在加载"}),this.loadData()},methods:{back:function(){t.navigateBack({delta:1})},loadData:function(n){var e=this;r.over=!1,e.$ajax.saleData().then((function(t){r.saleList=t.list,0==r.saleList.length?r.cartoon=!0:r.over=!0})),this.mvc=r,t.hideLoading()},details:function(n){t.navigateTo({url:"/pages/sale-detail/sale-detail?id="+n})},addSale:function(n){t.navigateTo({url:"/pages/sale-add/sale-add"})},navlogistics:function(n){t.navigateTo({url:"/pages/logistics-list/logistics-list"})}}};n.default=s}).call(this,e("543d")["default"])},"26db":function(t,n,e){"use strict";(function(t){e("3f5c"),e("921b");a(e("66fd"));var n=a(e("6e40"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"3fd6":function(t,n,e){"use strict";var a=e("bf84"),o=e.n(a);o.a},"6e40":function(t,n,e){"use strict";e.r(n);var a=e("c41b"),o=e("f24f");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("3fd6");var u,c=e("f0c5"),l=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=l.exports},bf84:function(t,n,e){},c41b:function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}))},f24f:function(t,n,e){"use strict";e.r(n);var a=e("1101"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a}},[["26db","common/runtime","common/vendor"]]]);