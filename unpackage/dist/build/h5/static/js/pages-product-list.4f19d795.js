(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-list"],{"077c":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("795b")),r=i(n("e814"));n("96cf");var o=i(n("3b8d")),s=i(n("3d3b")),c=i(n("926e")),l=i(n("a528")),d=i(n("85b0")),u=i(n("aea4")),f=i(n("06e7")),h={components:{uniNavBar:d.default,uniLoadMore:c.default,uniNumberBox:l.default,empty:u.default,scrllTop:f.default},data:function(){return{title:"123",thispage:0,Allpage:0,cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[],listId:"",page:1,pageSize:20,activeId:"",downNum:"",navTitle:"",cartoon:!1,rightnavhide:!0,prciceHdid:!1,navHeight:0,type:"add",bind:"",China:""}},computed:{i18n:function(){return this.$t("list")}},onLoad:function(t){s.default.load(this.$t("index").loadmsg),this.getTitleHeight(),t.tid&&(this.cateId=t.tid),t.listId&&(this.listId=t.listId),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.page=1,this.type="refresh",this.loadData()},onReachBottom:function(){this.type="add",this.loadData()},methods:{imageError:function(t){this.goodsList[t].image="http://dh.xmcpcn.com/Public/images/none.jpg"},getTitleHeight:function(){var t=this;uni.getSystemInfo({success:function(e){return console.log(e.screenHeight),e.screenHeight<750?(t.navHeight="110px",!1):e.screenHeight<950?(t.navHeight="120px",!1):e.screenHeight>1e3?(t.navHeight="180px",!1):void 0}})},loadData:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var e,n,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,n={type:"app"},!e.isNumber(e.listId)){t.next=6;break}s.default.post("/index.php/Home/Category/appindex?id="+e.listId+"&pagesize="+e.pageSize+"&p="+e.page+"&num="+e.downNum,n,function(t){if((null==t.data.list||0==t.data.list)&&1==t.data.other.thispage)return e.loadingType="nomore",uni.hideLoading(),e.cartoon=!0,!1;2==t.data.nav.length&&(e.navTitle=t.data.nav[1].title),3==t.data.nav.length&&(e.navTitle=t.data.nav[2].title),4==t.data.nav.length&&(e.navTitle=t.data.nav[3].title),0==t.data.sub_cls.length&&(e.rightnavhide=!1),e.allPage(t)}),t.next=22;break;case 6:({version:"1",sdate:s.default.month(),edate:s.default.newdata()}),t.t0=e.listId,t.next="new"===t.t0?10:"supplement"===t.t0?12:"dis"===t.t0?14:"sell"===t.t0?16:"China"===t.t0?18:"China70"===t.t0?20:22;break;case 10:return s.default.post("/index.php/Home/Category/new_goods?p="+e.page+"&num="+e.downNum,n,function(t){e.navTitle=t.data.nav[1].title,e.allPage(t)}),t.abrupt("break",22);case 12:return s.default.post("/index.php/Home/Category/bu_goods?p="+e.page+"&num="+e.downNum,n,function(t){e.navTitle=t.data.nav[1].title,e.allPage(t)}),t.abrupt("break",22);case 14:return s.default.post("/index.php/Home/Promotion/dis?p="+e.page+"&num="+e.downNum,n,function(t){e.navTitle=t.data.nav[1].title,e.allPage(t)}),t.abrupt("break",22);case 16:return s.default.post("/index.php/Home/Category/get_province_sale?p="+e.page+"&num="+e.downNum,n,function(t){e.navTitle=t.data.nav[1].title,e.allPage(t)}),t.abrupt("break",22);case 18:return s.default.post("/index.php/Home/Promotion/China_products?p="+e.page+"&cls=01&num="+e.downNum,n,function(t){if(!t.data.list)return i.$api.msg(t.data),uni.hideLoading(),e.loadingType="nomore",!1;e.navTitle=t.data.nav[1].title,e.allPage(t)}),t.abrupt("break",22);case 20:return s.default.post("/index.php/Home/Promotion/China70?p="+e.page+"&num="+e.downNum,n,function(t){e.navTitle=t.data.nav[2].title,t.data.other.thispage=1,t.data.other.totalPage=1,e.allPage(t)}),t.abrupt("break",22);case 22:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),allPage:function(t){var e=this;if(null==t.data.list||0==t.data.other.totalPage)return e.loadingType="nomore",uni.hideLoading(),!1;e.prciceHdid=!0,e.Allpage=t.data.other.totalPage,e.thispage=t.data.other.thispage;var n=t.data.list;e.cateList=t.data.sub_cls;for(var i=0;i<n.length;i++){var a=e.$store.getters.imgShow+"/thumb/"+n[i].item_no+".jpg?x-oss-process=style/300";n[i].image=a,n[i].allNum=(0,r.default)(n[i].spec),n[i].circleHidden=!1,"0"!=n[i].cnum&&(n[i].circleHidden=!0)}console.log(n);var o=n;if(e.loadingType=t.data.other.thispage>t.data.other.totalPage?"nomore":"more","add"==e.type){if(e.page=e.page+1,"nomore"===e.loadingType)return;e.loadingType="loading"}else e.loadingType="more";if("refresh"==e.type){if(e.goodsList=[],uni.stopPullDownRefresh(),e.page=e.page+1,"nomore"===e.loadingType)return;e.loadingType="loading"}if(o.length<20)return e.loadingType="nomore",uni.hideLoading(),e.goodsList=e.goodsList.concat(o),!1;uni.hideLoading(),e.goodsList=e.goodsList.concat(o)},isNumber:function(t){var e=/^\d+(\.\d+)?$/,n=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;return!(!e.test(t)&&!n.test(t))},tabClick:function(t){this.bind="active",this.filterIndex=t,this.page=1,this.type="refresh",2==t?(this.priceOrder=1===this.priceOrder?2:1,1==this.priceOrder&&(this.downNum="desc"),2==this.priceOrder&&(this.downNum="asc"),this.loadData()):(this.priceOrder=0,this.downNum="",this.loadData()),uni.pageScrollTo({duration:300,scrollTop:0}),s.default.load(this.$t("index").loadmsg)},toggleCateMask:function(t){var e=this,n="show"===t?10:300,i="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=i},n)},changeCate:function(t){var e=this;e.goodsList=[];var n=new a.default(function(n,i){e.listId=t.target.id,e.page=1,n(e.listId)});n.then(function(t){console.log(t),e.toggleCateMask()}),this.activeId=t.target.id,this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),s.default.load(this.$t("index").loadmsg)},navToDetailPage:function(t){console.log(t),"dis"==this.listId?(console.log("折扣"),uni.navigateTo({url:"/pages/product/product?productId=".concat(t.item_no,"&num=").concat(t.discount)})):uni.navigateTo({url:"/pages/product/product?productId=".concat(t.item_no)})},bindChange:function(t){this.goodsList[t.index].allNum=t.number},shopping:function(t){var e={max_buy:40},n=this,i=t;s.default.post("/index.php/Home/Cart/addCart?sn="+t.item_no+"&num="+t.allNum,e,function(t){"success"==t.data.result?(n.$api.msg(n.$t("index").msg1),i.circleHidden=!0,i.cnum=(0,r.default)(i.cnum)+(0,r.default)(i.allNum)):n.$api.msg(t.data.msg)})},stopPrevent:function(){},back:function(){uni.navigateBack({delta:1})}}};e.default=h},"0b2f":function(t,e,n){var i=n("f0e1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5d832f76",i,!0,{sourceMap:!1,shadowMode:!1})},2496:function(t,e,n){"use strict";n.r(e);var i=n("dcdc"),a=n("6c31");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("d311");var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"715a261d",null);e["default"]=s.exports},2584:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-navbar__content[data-v-35f4d1c8]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden;background-image:-o-linear-gradient(315deg,#81ffef 10%,#f067b4 100%);background-image:linear-gradient(135deg,#81ffef 10%,#f067b4)}.uni-navbar__content .uni-navbar__content_view[data-v-35f4d1c8]{\n\t/* line-height: 170upx; */}.uni-navbar__header[data-v-35f4d1c8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:%?120?%;\n/* \tline-height: 170px; */font-size:16px}.uni-navbar__header-btns[data-v-35f4d1c8]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?120?%;padding:0 %?12?%}.uni-navbar__header-btns[data-v-35f4d1c8]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-35f4d1c8]:last-child{width:%?60?%}.uni-navbar__header-container[data-v-35f4d1c8]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-35f4d1c8]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-35f4d1c8]{height:44px}.uni-navbar--fixed[data-v-35f4d1c8]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-35f4d1c8]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-35f4d1c8]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},"3a66":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2496")),r=i(n("8a7c")),o={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcon:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"white"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},data:function(){return{statusHeight:0,statusline:0}},mounted:function(){this.getTitleHeight()},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")},getTitleHeight:function(){var t=this;uni.getSystemInfo({success:function(e){return console.log(e.screenHeight),e.screenHeight<740?(t.statusline="90px",t.statusHeight="60px",!1):e.screenHeight<950?(t.statusline="100px",t.statusHeight="70px",!1):e.screenHeight>1e3?(t.statusline="110px",t.statusHeight="80px",!1):void 0}})}}};e.default=o},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var i=n("795b"),a=n.n(i);function r(t,e,n,i,r,o,s){try{var c=t[o](s),l=c.value}catch(d){return void n(d)}c.done?e(l):a.a.resolve(l).then(i,r)}function o(t){return function(){var e=this,n=arguments;return new a.a(function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)})}}},"411a":function(t,e,n){"use strict";n.r(e);var i=n("3a66"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"51d7":function(t,e,n){var i=n("2584");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("63cb82b4",i,!0,{sourceMap:!1,shadowMode:!1})},"6b44":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:i}}};e.default=a},"6c31":function(t,e,n){"use strict";n.r(e);var i=n("6b44"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"7db2":function(t,e,n){"use strict";n.r(e);var i=n("077c"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"7fcc":function(t,e,n){var i=n("d95c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6c063353",i,!0,{sourceMap:!1,shadowMode:!1})},8501:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticStyle:{position:"fixed",left:"0",width:"100%",height:"300upx","z-index":"90"}},[n("uni-nav-bar",{attrs:{"left-icon":"back",title:t.navTitle},on:{"click-left":function(e){e=t.$handleEvent(e),t.back(e)}}}),n("v-uni-view",{staticClass:"navbar"},[n("v-uni-view",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(0)}}},[t._v(t._s(t.i18n.Default))]),n("v-uni-view",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(2)}}},[n("v-uni-text",[t._v(t._s(t.i18n.price))]),n("v-uni-view",{staticClass:"p-box"},[n("v-uni-text",{staticClass:"yticon icon-shang",class:{active:1===t.priceOrder&&2===t.filterIndex}}),n("v-uni-text",{staticClass:"yticon icon-shang xia",class:{active:2===t.priceOrder&&2===t.filterIndex}})],1)],1),n("v-uni-view",{staticClass:"pagination nav-item"},[t._v(t._s(t.thispage)+"/"+t._s(t.Allpage)+t._s(t.i18n.page))]),1==t.rightnavhide?n("v-uni-text",{staticClass:"cate-item yticon icon-fenlei1",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask("show")}}}):t._e()],1)],1),1==t.cartoon?n("empty"):n("v-uni-view",{style:{"padding-top":t.navHeight}},[n("v-uni-view",{staticClass:"guess-section"},t._l(t.goodsList,function(e,i){return n("v-uni-view",{key:i,staticClass:"guess-item"},[n("v-uni-view",{staticClass:"image-wrapper",on:{click:function(n){n=t.$handleEvent(n),t.navToDetailPage(e)}}},[n("v-uni-image",{attrs:{src:e.image,mode:"aspectFill"},on:{error:function(e){e=t.$handleEvent(e),t.imageError(i)}}})],1),n("v-uni-view",{staticStyle:{padding:"0 15upx"}},[n("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.item_name))]),n("v-uni-view",{staticClass:"guess-right"},["dis"==t.listId?n("v-uni-view",[n("v-uni-text",{staticClass:"price"},[t._v(t._s(t.i18n.p3)+"：￥"+t._s(e.discount))]),n("v-uni-text",{staticClass:"m-price"},[t._v("￥"+t._s(e.base_price))])],1):t._e(),"dis"!=t.listId?n("v-uni-view",[n("v-uni-view",{staticClass:"price"},[t._v(t._s(t.i18n.p1)+":￥"+t._s(e.base_price))])],1):t._e(),"dis"!=t.listId?n("v-uni-view",{staticClass:"price"},[t._v(t._s(t.i18n.p2)+":￥"+t._s(e.ling))]):t._e()],1),n("v-uni-view",{staticClass:"guess-right"},[n("uni-number-box",{staticClass:"step",attrs:{min:e.allNum,value:e.allNum,step:e.allNum,index:i},on:{change:function(e){e=t.$handleEvent(e),t.bindChange(e)}}}),n("v-uni-image",{staticClass:"cart",attrs:{src:"../../static/cart.png",mode:""},on:{click:function(n){n=t.$handleEvent(n),t.shopping(e)}}})],1),1==e.circleHidden?n("v-uni-view",{staticClass:"circle"},[t._v(t._s(e.cnum))]):t._e()],1)],1)}),1)],1),n("uni-load-more",{attrs:{status:t.loadingType}}),n("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask(e)}}},[n("v-uni-view",{staticClass:"cate-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[n("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":""}},[n("v-uni-view",{staticStyle:{"padding-left":"30upx","font-size":"35upx"}},[t._v(t._s(t.i18n.classify)+"：")]),t._l(t.cateList,function(e){return n("v-uni-view",{key:e.id,staticClass:"cate-item b-b",class:{active:e.cls_no==t.activeId},attrs:{id:e.cls_no},on:{click:function(e){e=t.$handleEvent(e),t.changeCate(e)}}},[t._v(t._s(e.cls_name))])})],2)],1)],1),n("scrllTop")],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"85b0":function(t,e,n){"use strict";n.r(e);var i=n("be54"),a=n("411a");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("b0d9");var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"35f4d1c8",null);e["default"]=s.exports},8787:function(t,e,n){"use strict";n.r(e);var i=n("8501"),a=n("7db2");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("e385");var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"0cee8d7d",null);e["default"]=s.exports},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,a=i.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag",l="object"===typeof t,d=e.regeneratorRuntime;if(d)l&&(t.exports=d);else{d=e.regeneratorRuntime=l?t.exports:{},d.wrap=x;var u="suspendedStart",f="suspendedYield",h="executing",p="completed",v={},g={};g[o]=function(){return this};var b=Object.getPrototypeOf,m=b&&b(b(S([])));m&&m!==i&&a.call(m,o)&&(g=m);var w=C.prototype=k.prototype=Object.create(g);_.prototype=w.constructor=C,C.constructor=_,C[c]=_.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},d.awrap=function(t){return{__await:t}},T(L.prototype),L.prototype[s]=function(){return this},d.AsyncIterator=L,d.async=function(t,e,n,i){var a=new L(x(t,e,n,i));return d.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},T(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},d.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(H),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,a){return s.type="throw",s.arg=t,e.next=i,a&&(e.method="next",e.arg=n),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),H(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var a=i.arg;H(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:S(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),v}}}function x(t,e,n,i){var a=e&&e.prototype instanceof k?e:k,r=Object.create(a.prototype),o=new j(i||[]);return r._invoke=E(t,n,o),r}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function _(){}function C(){}function T(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){function e(n,i,r,o){var s=y(t[n],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):Promise.resolve(l).then(function(t){c.value=t,r(c)},function(t){return e("throw",t,r,o)})}o(s.arg)}var n;function i(t,i){function a(){return new Promise(function(n,a){e(t,i,n,a)})}return n=n?n.then(a,a):a()}this._invoke=i}function E(t,e,n){var i=u;return function(a,r){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===a)throw r;return N()}n.method=a,n.arg=r;while(1){var o=n.delegate;if(o){var s=I(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===u)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var c=y(t,e,n);if("normal"===c.type){if(i=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function I(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,I(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=y(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function H(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){while(++i<t.length)if(a.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return r.next=r}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b0d9:function(t,e,n){"use strict";var i=n("51d7"),a=n.n(i);a.a},be54:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.border,"uni-navbar--border":t.border}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,height:t.statusHeight,"line-height":t.statusline}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",style:{"line-height":t.statusline},on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view",style:{"line-height":t.statusline}},[n("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view",style:{"line-height":t.statusline}},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view",style:{"line-height":t.statusline}},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",style:{"line-height":t.statusline},on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},d311:function(t,e,n){"use strict";var i=n("0b2f"),a=n.n(i);a.a},d95c:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.header-back[data-v-0cee8d7d]{position:absolute;top:0;height:%?220?%;background-image:-o-linear-gradient(315deg,#81ffef 10%,#f067b4 100%);background-image:linear-gradient(135deg,#81ffef 10%,#f067b4);width:100%}.header-back uni-view[data-v-0cee8d7d]{line-height:%?200?%;text-align:center;color:#fff;font-size:%?32?%;font-weight:700}.content[data-v-0cee8d7d],uni-page-body[data-v-0cee8d7d]{background:#f8f8f8}.pagination[data-v-0cee8d7d]{display:block;text-align:center;font-size:%?28?%}.navbar[data-v-0cee8d7d]{background-color:#555;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:%?80?%;background:#fff;-webkit-box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-0cee8d7d]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;font-size:%?30?%;color:#000;position:relative}.navbar .nav-item.current[data-v-0cee8d7d]{color:#000}.navbar .nav-item.current[data-v-0cee8d7d]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?5?% solid #e84c8e}.navbar .p-box[data-v-0cee8d7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.navbar .p-box .yticon[data-v-0cee8d7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1.2;margin-left:%?4?%;font-size:%?26?%;color:#000}.navbar .p-box .yticon.active[data-v-0cee8d7d]{color:#e84c8e}.navbar .p-box .xia[data-v-0cee8d7d]{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.navbar .cate-item[data-v-0cee8d7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.navbar .cate-item[data-v-0cee8d7d]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}\n/* 分类 */.cate-mask[data-v-0cee8d7d]{position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:rgba(0,0,0,0);z-index:95;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.cate-mask .cate-content[data-v-0cee8d7d]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.cate-mask.none[data-v-0cee8d7d]{display:none}.cate-mask.show[data-v-0cee8d7d]{background:rgba(0,0,0,.4)}.cate-mask.show .cate-content[data-v-0cee8d7d]{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-0cee8d7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.cate-list .cate-item[data-v-0cee8d7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?90?%;padding-left:%?30?%;font-size:%?28?%;color:#555;position:relative}.cate-list .two[data-v-0cee8d7d]{height:%?64?%;color:#303133;font-size:%?30?%;background:#f8f8f8}.cate-list .active[data-v-0cee8d7d]{color:#fa436a}.guess-section[data-v-0cee8d7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?20?%;background:#fff}.guess-section .guess-item[data-v-0cee8d7d]{-webkit-box-shadow:0 2px 13px rgba(0,0,0,.1);box-shadow:0 2px 13px rgba(0,0,0,.1);margin:%?10?% 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?5?%;position:relative;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.guess-section .guess-item[data-v-0cee8d7d]:nth-child(odd){margin-right:4%}.guess-section .guess-item .guess-right[data-v-0cee8d7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:%?20?%}.guess-section .guess-item .guess-right .uni-numbox[data-v-f73045be][data-v-0cee8d7d]{position:relative}.guess-section .guess-item .guess-right .cart[data-v-0cee8d7d]{width:%?55?%;height:%?55?%}.guess-section .guess-item .circle[data-v-0cee8d7d]{width:%?33?%;height:%?33?%;border-radius:50%;line-height:%?33?%;position:absolute;right:%?15?%;bottom:%?55?%;font-size:%?22?%;text-align:center;color:#e84c8e;z-index:20;background-color:#fff}.guess-section .image-wrapper[data-v-0cee8d7d]{width:100%;height:%?300?%;border-radius:3px;overflow:hidden}.guess-section .image-wrapper uni-image[data-v-0cee8d7d]{width:100%;height:100%;opacity:1}.guess-section .title[data-v-0cee8d7d]{font-size:%?24?%;color:#303133;line-height:%?80?%}.guess-section .price[data-v-0cee8d7d]{font-size:%?24?%;color:#fa436a;line-height:1}.guess-section .m-price[data-v-0cee8d7d]{font-size:%?24?%;text-decoration:line-through;color:#909399;margin-left:%?8?%}.cate-list[data-v-0cee8d7d]{margin-top:%?80?%}body.?%PAGE?%[data-v-0cee8d7d]{background:#f8f8f8}',""])},dcdc:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},e385:function(t,e,n){"use strict";var i=n("7fcc"),a=n.n(i);a.a},f0e1:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-status-bar[data-v-715a261d]{display:block;width:100%;height:20px;height:0}",""])}}]);