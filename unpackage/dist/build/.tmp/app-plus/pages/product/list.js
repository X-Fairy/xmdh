(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"0683":function(e,t,n){},"162e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"39ba":function(e,t,n){"use strict";var a=n("0683"),i=n.n(a);i.a},"39e4":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("3d3b"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"926e"))},r=function(){return n.e("components/uni-number-box").then(n.bind(null,"a528"))},s=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"85b0"))},d=function(){return n.e("components/empty").then(n.bind(null,"aea4"))},u=function(){return n.e("components/uni-scrollTo/uni-scrollTo").then(n.bind(null,"06e7"))},c=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},g={title:"",thispage:0,Allpage:0,cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[],listId:"",page:1,pageSize:20,activeId:"",downNum:"",navTitle:"",cartoon:!1,rightnavhide:!0,prciceHdid:!1,navHeight:0,type:"add",bind:"",China:""},p={components:{uniNavBar:s,uniLoadMore:l,uniNumberBox:r,empty:d,scrllTop:u,imglazy:c},data:function(){return{imglazyStyle:"border-radius: 10upx;",list:{title:"",thispage:0,Allpage:0,cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[],listId:"",page:1,pageSize:20,activeId:"",downNum:"",navTitle:"",cartoon:!1,rightnavhide:!0,prciceHdid:!1,navHeight:0,type:"add",bind:"",China:""}}},computed:{i18n:function(){return this.$t("list")}},onLoad:function(e){var t=this;g=this.list,i.default.load(this.$t("index").loadmsg),this.getTitleHeight(),e.tid&&(g.cateId=e.tid),e.listId&&(g.listId=e.listId),setTimeout(function(){t.loadData()},300)},onPageScroll:function(e){e.scrollTop>=0?g.headerPosition="fixed":g.headerPosition="absolute"},onPullDownRefresh:function(){g.page=1,g.type="refresh",this.loadData()},onReachBottom:function(){g.type="add",this.loadData()},methods:{imageError:function(e){},getTitleHeight:function(){e.getSystemInfo({success:function(e){return console.log(a(e.screenHeight," at pages\\product\\list.vue:199")),e.screenHeight<750?(g.navHeight="110px",!1):e.screenHeight<950?(g.navHeight="120px",!1):e.screenHeight>1e3?(g.navHeight="180px",!1):void 0}})},loadData:function(){var t=this,n=this,a={type:"app"};if(n.isNumber(g.listId)){var o={listId:g.listId,pagesize:g.pageSize,page:g.page,downNum:g.downNum};n.$ajax.category(o,a).then(function(t){if((null==t.list||0==t.list)&&1==t.other.thispage)return g.loadingType="nomore",e.hideLoading(),g.cartoon=!0,n.list=g,!1;2==t.nav.length&&(g.navTitle=t.nav[1].title),3==t.nav.length&&(g.navTitle=t.nav[2].title),4==t.nav.length&&(g.navTitle=t.nav[3].title),0==t.sub_cls.length&&(g.rightnavhide=!1),n.allPage(t)})}else{var l={page:g.page,downNum:g.downNum};switch(g.listId){case"new":n.$ajax.hNew(l,a).then(function(e){g.navTitle=e.nav[1].title,n.allPage(e)});break;case"supplement":n.$ajax.hBu(l,a).then(function(e){g.navTitle=e.nav[1].title,n.allPage(e)});break;case"dis":n.$ajax.hDis(l,a).then(function(e){g.navTitle=e.nav[1].title,n.allPage(e)});break;case"sell":n.$ajax.hSale(l,a).then(function(e){g.navTitle=e.nav[1].title,n.allPage(e)});break;case"China":i.default.post("/index.php/Home/Promotion/China_products?p="+n.page+"&cls=01&num="+n.downNum,a,function(a){if(!a.list)return t.$api.msg(a),e.hideLoading(),g.loadingType="nomore",!1;g.navTitle=a.nav[1].title,n.allPage(a)});break;case"China70":i.default.post("/index.php/Home/Promotion/China70?p="+n.page+"&num="+n.downNum,a,function(e){g.navTitle=e.nav[2].title,e.other.thispage=1,e.other.totalPage=1,n.allPage(e)});break}}},allPage:function(t){var n=this;if(null==t.list||0==t.other.totalPage)return g.loadingType="nomore",e.hideLoading(),n.list=g,!1;g.prciceHdid=!0,g.Allpage=t.other.totalPage,g.thispage=t.other.thispage;var a=t.list;g.cateList=t.sub_cls;for(var i=0;i<a.length;i++){var o=n.$store.getters.imgShow+"/thumb/"+a[i].item_no+".jpg?x-oss-process=style/300";a[i].image=o,a[i].allNum=parseInt(a[i].spec),a[i].min=parseInt(a[i].spec),a[i].circleHidden=!1,"0"!=a[i].cnum&&(a[i].circleHidden=!0)}var l=a;if(g.loadingType=t.other.thispage>t.other.totalPage?"nomore":"more","add"==g.type){if(g.page=g.page+1,"nomore"===g.loadingType)return void(n.list=g);g.loadingType="loading"}else g.loadingType="more";if("refresh"==g.type){if(g.goodsList=[],e.stopPullDownRefresh(),g.page=g.page+1,"nomore"===g.loadingType)return void(n.list=g);g.loadingType="loading"}if(l.length<20)return g.loadingType="nomore",e.hideLoading(),g.goodsList=g.goodsList.concat(l),n.list=g,!1;e.hideLoading(),g.goodsList=g.goodsList.concat(l),n.list=g},isNumber:function(e){var t=/^\d+(\.\d+)?$/,n=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;return!(!t.test(e)&&!n.test(e))},tabClick:function(t){g.bind="active",g.filterIndex=t,g.page=1,g.type="refresh",2==t?(g.priceOrder=1===g.priceOrder?2:1,1==g.priceOrder&&(g.downNum="desc"),2==g.priceOrder&&(g.downNum="asc"),this.loadData()):(g.priceOrder=0,g.downNum="",this.loadData()),e.pageScrollTo({duration:300,scrollTop:0}),i.default.load(this.$t("index").loadmsg)},toggleCateMask:function(e){var t="show"===e?10:300,n="show"===e?1:0;g.cateMaskState=2,setTimeout(function(){g.cateMaskState=n},t),this.list=g},changeCate:function(t){var n=this;g.goodsList=[];var o=new Promise(function(e,n){g.listId=t.target.id,g.page=1,e(g.listId)});o.then(function(e){console.log(a(e," at pages\\product\\list.vue:450")),n.toggleCateMask()}),g.activeId=t.target.id,this.toggleCateMask(),e.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),i.default.load(this.$t("index").loadmsg)},navToDetailPage:function(t){"dis"==g.listId?e.navigateTo({url:"/pages/product/product?productId=".concat(t.item_no,"&num=").concat(t.discount)}):e.navigateTo({url:"/pages/product/product?productId=".concat(t.item_no)})},bindChange:function(e){g.goodsList[e.index].allNum=e.number,this.list=g},shopping:function(e){var t=this,n={item_no:e.item_no,allNum:e.allNum};t.$ajax.addShop(n).then(function(n){"success"==n.result?(t.$api.msg(t.$t("index").msg1),e.circleHidden=!0,e.cnum=parseInt(e.cnum)+parseInt(e.allNum)):t.$api.msg(n.msg)})},stopPrevent:function(){},back:function(){e.navigateBack({delta:1})}}};t.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},"41a5":function(e,t,n){"use strict";(function(e){n("d471"),n("921b");a(n("66fd"));var t=a(n("8787"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7db2":function(e,t,n){"use strict";n.r(t);var a=n("39e4"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},8787:function(e,t,n){"use strict";n.r(t);var a=n("162e"),i=n("7db2");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("39ba");var l=n("2877"),r=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports}},[["41a5","common/runtime","common/vendor"]]]);