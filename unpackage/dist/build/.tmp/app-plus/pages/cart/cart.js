(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"2e58":function(t,e,a){"use strict";a.r(e);var i=a("f9a9"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},"360d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"548d":function(t,e,a){"use strict";(function(t){a("d471"),a("921b");i(a("66fd"));var e=i(a("a660"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"8d11":function(t,e,a){"use strict";var i=a("9821"),n=a.n(i);n.a},9821:function(t,e,a){},a660:function(t,e,a){"use strict";a.r(e);var i=a("360d"),n=a("2e58");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("8d11");var c=a("2877"),o=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},f9a9:function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("3d3b"));function s(t){return t&&t.__esModule?t:{default:t}}var c=function(){return a.e("components/uni-number-box").then(a.bind(null,"a528"))},o=function(){return a.e("components/uni-drawer/uni-drawer").then(a.bind(null,"44ed"))},r=function(){return a.e("components/over").then(a.bind(null,"35b2"))},l=function(){return a.e("components/img-lazy/img-lazy").then(a.bind(null,"b066"))},u={flag:0,mindex:-1,lastX:0,lastY:0,text:0,navIndex:0,typeList:[],activeId:"",downNum:"",cartdata:[],activeClass:0,cartList:[],allList:[],scrollTop:0,total:0,allCount:[],navList:[],navListRight:[],typeId:"",windowHeight:0,sptyp:0,spnum:0,showRigth:!1,showLeft:!1,activeList:[],disnum:0,distext:"请选择代金券",filterIndex:0,priceOrder:0,aniClass:"-1",isShow:!1,navActive:1,listId:-1,navStatus:!1},d={components:{uniNumberBox:c,uniDrawer:o,over:r,imglazy:l},data:function(){return{list:{flag:0,mindex:-1,lastX:0,lastY:0,text:0,navIndex:0,typeList:[],activeId:"",downNum:"",cartdata:[],activeClass:0,cartList:[],allList:[],scrollTop:0,total:0,allCount:[],navList:[],navListRight:[],typeId:"",windowHeight:0,sptyp:0,spnum:0,showRigth:!1,showLeft:!1,activeList:[],disnum:0,distext:"请选择代金券",filterIndex:0,priceOrder:0,aniClass:"-1",isShow:!1,navActive:1,listId:-1,navStatus:!1}}},onLoad:function(){var e=this;setTimeout(function(){u=e.list;var a="";u.navList=[],u.allList=[],u.navListRight=[],u.cartList=[],t.setStorageSync("getlist",a),u.empty=!1,e.list=u},300)},onShow:function(){var e=this,a=t.getStorageSync("userinfo");if(!a)return this.$store.dispatch("showLogin"),!1;setTimeout(function(){e.distext=e.$t("cart").select,e.loadData()},400)},watch:{},computed:{i18n:function(){return this.$t("cart")}},methods:{handletouchmove:function(t){if(0===u.flag){var e=t.touches[0].pageX,a=t.touches[0].pageY,i=e-u.lastX,n=a-u.lastY,s="";u.mindex=-1,Math.abs(i)>Math.abs(n)?i<0?(s="向左滑动",u.flag=1,this.hide()):i>0&&(s="向右滑动",u.flag=2,this.show("left")):n<0?(s="向上滑动",u.flag=3):n>0&&(s="向下滑动",u.flag=4),u.lastX=e,u.lastY=a,u.text=s}},handletouchstart:function(t){u.lastX=t.touches[0].pageX,u.lastY=t.touches[0].pageY},handletouchend:function(t){u.flag=0,u.text="没有滑动"},changeCate:function(t,e){var a=this;if(u.page=1,u.navStatus=!0,"cn"==t.cls){var n=t.cn;return n.forEach(function(t,e){t.checked=!0,t.image=a.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),u.cartList=n,u.listId=t.cls,this.hide(),this.calcTotal(),!1}if("zhe"==t.cls){var s=t.zhe;return s.forEach(function(t,e){t.checked=!0,t.image=a.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),u.cartList=s,u.listId=t.cls,this.hide(),this.calcTotal(),!1}if(1==u.navActive){console.log(i(u.navActive," at pages\\cart\\cart.vue:367"));var c=t.goods;c.forEach(function(t,e){t.checked=!0,t.image=a.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),u.cartList=c,u.listId=t.cls,void 0!=t.child&&(t.child&&(u.navActive=2),u.navIndex=e)}else{console.log(i(u.navActive," at pages\\cart\\cart.vue:386")),console.log(i(t," at pages\\cart\\cart.vue:387"));var o=t.goods;o.forEach(function(t,e){t.checked=!0,t.image=a.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),u.cartList=o,u.listId=t.clss,void 0==t.child&&t.child&&(u.navActive=2)}this.hide(),this.calcTotal()},upper:function(){u.navActive=1,u.activeId=-1,this.list=u},actionSheetTap:function(){var e=this;t.showActionSheet({title:e.$t("cart").regulate,itemList:e.$t("cart").sheet,cancelText:"取消",success:function(t){var a=t.tapIndex;u.listId=-1,u.navActive=1,0==a&&(u.downNum="desc",e.loadData(),n.default.load(e.$t("index").loadmsg)),1==a&&(u.downNum="asc",e.loadData(),n.default.load(e.$t("index").loadmsg)),2==a&&e.clearCart(),e.list=u}})},imageError:function(t){},isNumber:function(t){var e=/^\d+(\.\d+)?$/,a=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;return!(!e.test(t)&&!a.test(t))},loadData:function(){u.empty=!1,u.over=!1,u.cartList=[],u.activeClass=0,n.default.load(this.$t("index").loadmsg);var e=this;e.$ajax.cartData(u.downNum).then(function(a){u.cartdata=a;var i=a.list,n=a.hd_list,s=a.cate;if(void 0==i&&t.hideLoading(),0==i.length){u.empty=!0,u.cartList=[],u.navList=[],u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,u.distext=e.$t("cart").select;var c="";return t.setStorageSync("getlist",c),e.list=u,t.hideLoading(),!1}var o=[];i.forEach(function(t,a){t.checked=!0,t.image=e.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),n.forEach(function(t,e){t.title=t.huodong_name,t.cls=t.huodong,s.push(t)}),0==o.length?u.cartList=i:u.cartList=o,u.allList=i,u.over=!0,u.typeList=a.cate,t.setStorageSync("getlist",i),e.calcTotal(),e.disData(),t.hideLoading(),e.list=u})},navToDetailPage:function(e){console.log(i(e," at pages\\cart\\cart.vue:520")),"zhe"==e.huodong?t.navigateTo({url:"/pages/product/product?productId=".concat(e.item_no,"&num=").concat(e.price)}):t.navigateTo({url:"/pages/product/product?productId=".concat(e.item_no)})},changenav:function(e,a){var i=t.getStorageSync("getlist"),n=e.cls;if(u.typeId=e.cls,u.activeClass=a,"默认"==n)u.cartList=i;else{var s=[];i.forEach(function(t,e){parseInt(n)>=0?t.cls_id===n&&s.push(t):t.huodong==n&&s.push(t)}),u.cartList=s}this.list=u,this.calcTotal()},navToLogin:function(){t.navigateTo({url:"/pages/public/login"})},discheck:function(t,e){var a=u.activeList,i=this;1!=a.length&&a.forEach(function(t,e){t.data.checked=!1}),"item"===t&&(u.total>=u.activeList[e].data.money?(u.activeList[e].data.checked=!u.activeList[e].data.checked,u.distext=i.$t("cart").uesText+u.activeList[e].data.money+i.$t("cart").voucher,i.disPrice()):i.$api.msg("总金额不小于优惠金额！"))},bindChange:function(t){u.cartList[t.index].num=t.number,u.cartList[t.index].org_xj=parseFloat(u.cartList[t.index].org_price)*u.cartList[t.index].num,this.amendData(t)},amendData:function(t){var e=this,a=u.cartList[t.index];console.log(i(u.cartList[t.index]," at pages\\cart\\cart.vue:601"));var n={item_no:a.item_no,num:a.num};e.$ajax.changenum(n).then(function(t){"success"==t.result?e.calcTotal():e.$api.msg(t.msg)})},deleteCartItem:function(e,a){var n=this,s=t.getStorageSync("getlist"),c={id:e.cls_id,item_no:e.item_no};n.$ajax.cartDele(c).then(function(e){u.aniClass=a,n.$api.msg(n.$t("index").msg2);var c=u.cartList,o=c[a],r=o.item_no;if(u.cartList.splice(a,1),console.log(i(u.cartList," at pages\\cart\\cart.vue:631")),console.log(i(u.allList," at pages\\cart\\cart.vue:632")),0==u.cartList.length){u.cartList=[],u.navList=[],u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,u.listId=-1,n.loadData(),n.disPrice(),u.distext=n.$t("cart").select;var l="";return t.setStorageSync("getlist",l),n.list=u,!1}s.forEach(function(t,e){t.item_no==r&&s.splice(e,1)}),0==s.length&&(u.empty=!0),t.setStorageSync("getlist",s),n.disPrice(),n.calcTotal(),t.hideLoading()})},clearCart:function(){var e=this;t.getStorageSync("userinfo");t.showModal({content:e.$t("cart").hint,cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,success:function(a){a.confirm&&e.$ajax.cartAlldele().then(function(a){u.cartList=[],u.navList=[],e.loadData(),u.empty=!0,u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,e.disPrice(),u.distext=e.$t("cart").select;var i="";t.setStorageSync("getlist",i),e.list=u})}})},calcTotal:function(){var t=u.cartList,e=0;if(u.sptyp=t.length,0===t.length)return u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,void(this.list=u);var a=0,i=!0;t.forEach(function(t){e+=t.num,!0===t.checked?a+=parseFloat(t.price)*parseFloat(t.num):!0===i&&(i=!1)}),u.spnum=e,u.total=Number(a.toFixed(2)),u.disnum=Number(a.toFixed(2)),this.disPrice()},disPrice:function(){var t=this,e=u.activeList;e.forEach(function(e,a){if(1==e.data.checked)if(u.total>=e.data.money){console.log(i(e.data.money," at pages\\cart\\cart.vue:740"));var n=u.total-e.data.money;u.disnum=Number(n.toFixed(2)),u.distext=t.$t("cart").uesText+u.activeList[a].data.money+t.$t("cart").voucher,t.list=u}else t.$api.msg("总金额不小于优惠金额！"),u.distext="请选择优惠券",e.data.checked=!1,t.list=u})},createOrder:function(){var e=this,a={src:"APP",id:"0"};""!=u.listId&&parseInt(u.listId)>=0&&(a.cls=u.listId);var n=u.activeList;n.forEach(function(t,e){console.log(i(t.data.checked," at pages\\cart\\cart.vue:769")),1==t.data.checked&&(a.id=t.data.id)}),t.showModal({content:e.$t("cart").hint2,cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,success:function(i){i.confirm&&e.$ajax.cartJiesuan(a).then(function(i){e.$api.msg(e.$t("index").msg3),e.calcTotal(),u.typeId="",u.cartList=[],u.navList=[],u.empty=!0,u.navActive=1,u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,u.distext=e.$t("cart").select;var n="";t.setStorageSync("getlist",n);var s={code:i.code,id:a.id};e.loadData(),"object"==typeof i&&e.disStatus(s)})}})},disStatus:function(t){n.default.post("/index.php/Home/Coupon/useconpon",t,function(t){})},show:function(t){"left"===t?u.showLeft=!0:u.showRigth=!0,this.list=u},hide:function(){u.showLeft=!1,u.showRigth=!1,this.list=u},closeDrawer:function(t){"left"===t?u.showLeft=!1:u.showRigth=!1,this.list=u},disData:function(){var t=this;u.activeList=[],t.$ajax.dis().then(function(t){var e=[],a=t;a.forEach(function(t,a){t.data.checked=!1,0==t.data.type.expire&&0==t.data.type.not_used&&e.push(t)}),u.activeList=e})},changeTab:function(t){this.show("left")}},onNavigationBarButtonTap:function(t){u.showRigth=!u.showRigth,this.list=u},onBackPress:function(){(this.showRigth||this.showLeft)&&this.hide();var e=plus.android.runtimeMainActivity();plus.android.runtimeMainActivity(),plus.runtime.quit=function(){e.moveTaskToBack(!1)},t.closeSocket(),t.onSocketClose(function(t){console.log(i("WebSocket 已关闭！"," at pages\\cart\\cart.vue:882"))}),plus.nativeUI.toast=function(a){if("再按一次退出应用"==a)return e.moveTaskToBack(!1),!1;t.showToast({title:"再按一次退出应用",icon:"none"})}}};e.default=d}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["548d","common/runtime","common/vendor"]]]);