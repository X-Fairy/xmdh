(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"3e46":function(t,e,n){},4916:function(t,e,n){"use strict";var a={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"d4f9"))},"uni-load-more":function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"5c08"))},"uni-drawer":function(){return n.e("components/uni-drawer/uni-drawer").then(n.bind(null,"bc95"))}},o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},7874:function(t,e,n){"use strict";(function(t){n("3f5c"),n("921b");a(n("66fd"));var e=a(n("9cdf"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},7959:function(t,e,n){"use strict";n.r(e);var a=n("b94d"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"9cdf":function(t,e,n){"use strict";n.r(e);var a=n("4916"),o=n("7959");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("e089");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=r.exports},b94d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("0421"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){n.e("components/uni-number-box").then(function(){return resolve(n("ee3a"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/uni-drawer/uni-drawer").then(function(){return resolve(n("bc95"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("5c08"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/over").then(function(){return resolve(n("7aed"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/img-lazy/img-lazy").then(function(){return resolve(n("f796"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("d4f9"))}.bind(null,n)).catch(n.oe)},d={flag:0,mindex:-1,lastX:0,lastY:0,text:0,navIndex:0,typeList:[],activeId:"",downNum:"",cartdata:[],activeClass:0,cartList:[],scrollTop:0,total:0,allCount:[],navList:[],navListRight:[],typeId:"",windowHeight:0,spnum:0,showRigth:!1,showLeft:!1,activeList:[],disnum:0,distext:"请选择代金券",filterIndex:0,priceOrder:0,aniClass:"-1",page:1,pageSize:20,type:"add",isShow:!1,navActive:1,listId:-1,navStatus:!1,onPull:1,loadingType:"more",sptyp:""},p={components:{uniNumberBox:i,uniDrawer:s,over:r,imglazy:u,uniLoadMore:c,uniNavBar:l},data:function(){return{list:{flag:0,mindex:-1,lastX:0,lastY:0,text:0,navIndex:0,typeList:[],activeId:"",downNum:"",cartdata:[],activeClass:0,cartList:[],scrollTop:0,total:0,loadingType:"more",page:1,pageSize:20,type:"add",allCount:[],navList:[],navListRight:[],typeId:"",windowHeight:0,sptyp:"",spnum:0,showRigth:!1,showLeft:!1,activeList:[],disnum:0,distext:"请选择代金券",filterIndex:0,priceOrder:0,aniClass:"-1",isShow:!1,navActive:1,listId:-1,navStatus:!1,onPull:1}}},onLoad:function(){},onShow:function(){var e=this,n=t.getStorageSync("userinfo");if(!n)return this.$store.dispatch("showLogin"),!1;a.default.load(this.$t("index").loadmsg),setTimeout((function(){d.page=1,d.onPull=1,d=e.list,d.navList=[],d.navListRight=[],d.cartList=[],d.empty=!1,e.list=d,d.loadingType="more",e.distext=e.$t("cart").select,e.loadData()}),400)},computed:{i18n:function(){return this.$t("cart")}},onPageScroll:function(t){t.scrollTop>=0?d.headerPosition="fixed":d.headerPosition="absolute"},onPullDownRefresh:function(){d.onPull=1,d.page=1,d.type="refresh",this.loadData()},onReachBottom:function(){1==d.onPull&&(d.type="add",this.loadData())},methods:{handletouchmove:function(t){if(0===d.flag){var e=t.touches[0].pageX,n=t.touches[0].pageY,a=e-d.lastX,o=n-d.lastY,i="";d.mindex=-1,Math.abs(a)>Math.abs(o)?a<0?(i="向左滑动",d.flag=1,this.hide()):a>0&&(i="向右滑动",d.flag=2,this.show("left")):o<0?(i="向上滑动",d.flag=3):o>0&&(i="向下滑动",d.flag=4),d.lastX=e,d.lastY=n,d.text=i}},handletouchstart:function(t){d.lastX=t.touches[0].pageX,d.lastY=t.touches[0].pageY},handletouchend:function(t){d.flag=0,d.text="没有滑动"},loadStatus:function(e){d.total=e.amt;d.cartList;t.pageScrollTo({duration:300,scrollTop:0}),d.loadingType="nomore"},changeCate:function(t,e){var n=this;if(d.page=1,d.navStatus=!0,d.onPull=2,"cn"==t.cls){var a=t.cn;return a.forEach((function(t,e){t.checked=!0,t.image=n.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)})),d.cartList=a,d.listId=t.cls,n.loadStatus(t),n.hide(),!1}if("zhe"==t.cls){var o=t.zhe;return o.forEach((function(t,e){t.checked=!0,t.image=n.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)})),d.cartList=o,d.listId=t.cls,n.loadStatus(t),n.hide(),!1}if(1==d.navActive){var i=t.goods;i.forEach((function(t,e){t.checked=!0,t.image=n.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)})),d.cartList=i,d.listId=t.cls,void 0!=t.child&&(t.child&&(d.navActive=2),d.navIndex=e),n.loadStatus(t),n.hide()}else{var s=t.goods;s.forEach((function(t,e){t.checked=!0,t.image=n.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)})),d.cartList=s,d.listId=t.clss,void 0==t.child&&t.child&&(d.navActive=2),n.loadStatus(t),n.hide()}},upper:function(){d.navActive=1,d.activeId=-1,this.list=d},actionSheetTap:function(){var e=this;t.showActionSheet({title:e.$t("cart").regulate,itemList:e.$t("cart").sheet,cancelText:"取消",success:function(t){var n=t.tapIndex;d.listId=-1,d.navActive=1,0==n&&(d.page=1,d.onPull=1,d.cartList=[],d.downNum="desc",e.loadData(),a.default.load(e.$t("index").loadmsg)),1==n&&(d.page=1,d.onPull=1,d.cartList=[],d.downNum="asc",e.loadData(),a.default.load(e.$t("index").loadmsg)),2==n&&e.clearCart(),e.list=d}})},loadData:function(){if("nomore"!=d.loadingType){d.empty=!1,d.over=!1,d.activeClass=0;var t=this,e={downNum:d.downNum,page:d.page};t.$ajax.cartData(e).then((function(e){t.allPage(e)}))}},allPage:function(e){var n=this;d.cartdata=e;var a=e.list,o=e.hd_list,i=e.cate;if(0==e.other.totalpage){d.loadingType="nomore",d.empty=!0,d.cartList=[],d.navList=[],d.total=0,d.disnum=0,d.spnum=0,d.sptyp=0,d.distext=n.$t("cart").select;var s="";return t.setStorageSync("getlist",s),n.list=d,t.hideLoading(),!1}if(d.spnum=0,d.sptyp=e.sptyp,a.forEach((function(t,e){t.checked=!0,t.image=n.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num),d.spnum=d.spnum+t.num})),d.loadingType=parseInt(e.other.page)>parseInt(e.other.totalpage)?"nomore":"more","add"==d.type){if(d.page=d.page+1,"nomore"===d.loadingType)return void(n.list=d);d.loadingType="loading"}else d.loadingType="more";if("refresh"==d.type){if(d.cartList=[],t.stopPullDownRefresh(),d.page=d.page+1,"nomore"===d.loadingType)return void(n.list=d);d.loadingType="loading"}a.length<20&&(d.loadingType="nomore"),o.forEach((function(t,e){t.title=t.huodong_name,t.cls=t.huodong,i.push(t)})),d.cartList=d.cartList.concat(a),d.over=!0,d.typeList=e.cate,1==e.other.page&&(d.total=e.spprice),t.setStorageSync("getlist",a),t.hideLoading(),n.list=d},navToDetailPage:function(e){console.log(e),"zhe"==e.huodong?t.navigateTo({url:"/pages/product/product?productId=".concat(e.item_no,"&num=").concat(e.price)}):t.navigateTo({url:"/pages/product/product?productId=".concat(e.item_no)})},changenav:function(e,n){var a=t.getStorageSync("getlist"),o=e.cls;if(d.typeId=e.cls,d.activeClass=n,"默认"==o)d.cartList=a;else{var i=[];a.forEach((function(t,e){parseInt(o)>=0?t.cls_id===o&&i.push(t):t.huodong==o&&i.push(t)})),d.cartList=i}this.list=d},discheck:function(t,e){},bindChange:function(t){var e=d.cartList[t.index];e.num=t.number,this.calculate()},calculate:function(){var t={downNum:d.downNum,page:d.page},e=this;e.$ajax.cartData(t).then((function(t){var e=d.cartList;d.spnum=0,e.forEach((function(t,e){d.spnum=d.spnum+t.num})),d.sptyp=t.sptyp,d.total=t.spprice}))},deleteCartItem:function(e,n){var a=this,o=this,i={id:e.cls_id,item_no:e.item_no};o.$ajax.cartDele(i).then((function(e){if("success"==e.result?(o.$api.msg(o.$t("index").msg2),d.aniClass=n,d.cartList.splice(n,1),a.calculate()):o.$api.msg(e.msg),0==d.cartList.length)return d.cartList=[],d.navList=[],d.total=0,d.disnum=0,d.spnum=0,d.sptyp=0,d.listId=-1,o.loadData(),d.distext=o.$t("cart").select,o.list=d,!1;t.hideLoading()}))},clearCart:function(){var e=this,n=t.getStorageSync("userinfo");t.showModal({content:e.$t("cart").hint,cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,success:function(t){t.confirm&&e.$ajax.cartAlldele(n).then((function(t){d.cartList=[],d.navList=[],e.loadData(),d.empty=!0,d.total=0,d.disnum=0,d.spnum=0,d.sptyp=0,d.distext=e.$t("cart").select,e.list=d}))}})},disPrice:function(){},createOrder:function(){var e=this,n={src:"APP",coupon_id:"0"};""!=d.listId&&parseInt(d.listId)>=0&&(n.cls=d.listId);var a=d.activeList;a.forEach((function(t,e){console.log(t.data.checked),1==t.data.checked&&(n.coupon_id=t.data.coupon_id)})),t.showModal({content:e.$t("cart").hint2,cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,success:function(a){a.confirm&&e.$ajax.cartJiesuan(n).then((function(a){console.log(a),e.$api.msg(e.$t("index").msg3),d.typeId="",d.cartList=[],d.navList=[],d.empty=!0,d.navActive=1,d.total=0,d.disnum=0,d.spnum=0,d.sptyp=0,d.distext=e.$t("cart").select;var o={code:a.code,id:n.id};e.loadData(),t.navigateTo({url:"/pages/cart/success/success?sn="+a}),"object"==typeof a&&e.disStatus(o)}))}})},disStatus:function(t){a.default.post("/index.php/Home/Coupon/useconpon",t,(function(t){}))},show:function(t){"left"===t?d.showLeft=!0:d.showRigth=!0,this.list=d},hide:function(){d.showLeft=!1,d.showRigth=!1},closeDrawer:function(t){"left"===t?d.showLeft=!1:d.showRigth=!1},disData:function(){var t=this;d.activeList=[],t.$ajax.dis().then((function(t){var e=[],n=t;n.forEach((function(t,n){t.data.checked=!1,0==t.data.type.expire&&0==t.data.type.not_used&&e.push(t)})),d.activeList=e}))},changeTab:function(t){this.show("left")}},onNavigationBarButtonTap:function(t){d.showRigth=!d.showRigth,this.list=d},onBackPress:function(){(this.showRigth||this.showLeft)&&this.hide();var e=plus.android.runtimeMainActivity();plus.android.runtimeMainActivity(),plus.runtime.quit=function(){e.moveTaskToBack(!1)},t.closeSocket(),t.onSocketClose((function(t){console.log("WebSocket 已关闭！")})),plus.nativeUI.toast=function(n){if("再按一次退出应用"==n)return e.moveTaskToBack(!1),!1;t.showToast({title:"再按一次退出应用",icon:"none"})}}};e.default=p}).call(this,n("543d")["default"])},e089:function(t,e,n){"use strict";var a=n("3e46"),o=n.n(a);o.a}},[["7874","common/runtime","common/vendor"]]]);