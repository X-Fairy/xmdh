(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/leftCategory"],{"18fb":function(t,e,n){"use strict";(function(t){n("d471"),n("921b");o(n("66fd"));var e=o(n("9553"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"646a":function(t,e,n){"use strict";var o=n("df72"),i=n.n(o);i.a},9553:function(t,e,n){"use strict";n.r(e);var o=n("e2ff"),i=n("c17c");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("646a");var c=n("2877"),r=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"9ba3":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),a=r(n("6a98")),c=r(n("3d3b"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,o,i,a,c){try{var r=t[a](c),u=r.value}catch(s){return void n(s)}r.done?e(u):Promise.resolve(u).then(o,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function c(t){u(a,o,i,c,r,"next",t)}function r(t){u(a,o,i,c,r,"throw",t)}c(void 0)})}}var l=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},f={height:0,categoryActive:0,scrollTop:0,scrollLeftTop:0,scrollHeight:0,classifyData:[],arr:[0,384,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],leftItemHeight:51,navLeftHeight:0,diff:0,tabBarHeight:0,text:"",placeholderSrc:"../../../static/60x60.png",statusHeight:0,gdgg:"",rightHide:!1},g={components:{imglazy:l},data:function(){return{mvc:{height:0,categoryActive:0,scrollTop:0,scrollLeftTop:0,scrollHeight:0,classifyData:[],arr:[0,384,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],leftItemHeight:51,navLeftHeight:0,diff:0,tabBarHeight:0,text:"",statusHeight:0,rightHide:!1}}},onLoad:function(){var e=this;setTimeout(function(){var n=t.getStorageSync("userinfo");if(!n)return e.$store.dispatch("showLogin"),!1;c.default.pageTitle(e.$t("list").title),f.height=t.getSystemInfoSync().windowHeight-f.tabBarHeight,f.windowHeight=t.getSystemInfoSync().windowHeight,e.getTitleHeight(),e.loadData()})},methods:{loadData:function(){c.default.load(this.$t("index").loadmsg);var e=this;e.$ajax.categories_app().then(function(t){console.log(o(t," at pages\\category\\leftCategory.vue:97")),t.forEach(function(t,e){14==t.cls_id&&(t.child=[{cls_id:"14",cls_name:"物料耗材",lazy:[{src:"0"},{src:"0"},{src:"0"}],index:"14"}])}),f.classifyData=t,e.$nextTick(function(){e.getHeightList()}),f.rightHide=!0,e.mvc=f}),t.hideLoading(),this.scroll()},getTitleHeight:function(){var e=this;t.getSystemInfo({success:function(t){return t.screenHeight<750?(f.statusHeight="80px",e.mvc=f,!1):t.screenHeight<950?(f.statusHeight="95px",e.mvc=f,!1):t.screenHeight>1e3?(f.statusHeight="140px",e.mvc=f,!1):void 0}})},getHeightList:function(){var e=t.createSelectorQuery();e.selectAll(".nav-left-item").boundingClientRect(function(t){f.leftItemHeight=t[0].height,f.navLeftHeight=f.leftItemHeight*a.default.length,f.diff=f.navLeftHeight-f.height}),e.selectAll(".box").boundingClientRect(function(t){var e=[0],n=0;t.forEach(function(t){n+=t.height,e.push(n)}),console.log(o(f.arr," at pages\\category\\leftCategory.vue:174")),f.arr=e}).exec()},scroll:function(t){this.scrillType(t)},scrillType:function(t){this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){void 0!=t&&(f.scrollHeight=t.detail.scrollTop);for(var e=0;e<f.arr.length;e++){var n=f.arr[e],o=f.arr[e+1];if(!o||f.scrollHeight>=n&&f.scrollHeight<o)return f.categoryActive=e,f.diff>0&&(f.scrollLeftTop=Math.round(f.categoryActive*f.diff/(a.default.length-1))),!1}f.categoryActive=0,f.timeoutId=void 0},10),this.mvc=f},categoryClickMain:function(t){f.categoryActive=t,f.scrollTop=f.arr[t]},cart:function(e){t.navigateTo({url:"/pages/product/list?listId=".concat(e)})},navSearch:function(){t.navigateTo({url:"/pages/search/search"})},onScan:function(){t.scanCode({success:function(e){console.log(o("条码类型："+e.scanType," at pages\\category\\leftCategory.vue:227")),console.log(o("条码内容："+e.result," at pages\\category\\leftCategory.vue:228")),t.navigateTo({url:"/pages/product/product?productId=".concat(e.result)})}})},categoryError:function(t){}},onBackPress:function(){var e=plus.android.runtimeMainActivity();plus.android.runtimeMainActivity(),plus.runtime.quit=function(){e.moveTaskToBack(!1)},t.closeSocket(),t.onSocketClose(function(t){console.log(o("WebSocket 已关闭！"," at pages\\category\\leftCategory.vue:246"))}),plus.nativeUI.toast=function(n){if("再按一次退出应用"==n)return e.moveTaskToBack(!1),!1;t.showToast({title:"再按一次退出应用",icon:"none"})}},onNavigationBarSearchInputClicked:function(){var e=s(i.default.mark(function e(n){return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.navigateTo({url:"/pages/search/search"});case 1:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onNavigationBarButtonTap:function(e){var n=e.index;if(0===n)t.scanCode({success:function(e){console.log(o("条码类型："+e.scanType," at pages\\category\\leftCategory.vue:276")),console.log(o("条码内容："+e.result," at pages\\category\\leftCategory.vue:277")),t.navigateTo({url:"/pages/product/product?productId=".concat(e.result)})}});else if(1===n){var i=getCurrentPages(),a=i[i.length-1],c=a.$getAppWebview();c.hideTitleNViewButtonRedDot({index:n}),t.navigateTo({url:"/pages/notice/notice"})}}};e.default=g}).call(this,n("6e42")["default"],n("0de9")["default"])},c17c:function(t,e,n){"use strict";n.r(e);var o=n("9ba3"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},df72:function(t,e,n){},e2ff:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["18fb","common/runtime","common/vendor"]]]);