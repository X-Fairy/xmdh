(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{2367:function(t,e,a){"use strict";(function(t){a("d471"),a("921b");i(a("66fd"));var e=i(a("241b"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"241b":function(t,e,a){"use strict";a.r(e);var i=a("b4e9"),n=a("c511");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("6e53");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"6e53":function(t,e,a){"use strict";var i=a("829f"),n=a.n(i);n.a},"829f":function(t,e,a){},"889a":function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("3d3b"));function o(t){return t&&t.__esModule?t:{default:t}}var s=function(){return a.e("components/uni-number-box").then(a.bind(null,"a528"))},r=function(){return a.e("components/uni-load-more/uni-load-more").then(a.bind(null,"926e"))},l=function(){return a.e("components/uni-scrollTo/uni-scrollTo").then(a.bind(null,"06e7"))},u=function(){return a.e("components/img-lazy/img-lazy").then(a.bind(null,"b066"))},c={statusHeight:0,historyList:[],isHistory:!0,text:"",thispage:0,Allpage:0,all:0,sort:!1,recList_a:[],recList_b:[],page:1,loadingType:"more",type:"add",filterIndex:0,priceOrder:0,downNum:"",getTop:0,getTop2:0,appwidth:"100%",scrllHdid:!1,over:!1,satus_a:!1,satus_b:!1},d={components:{uniNumberBox:s,uniLoadMore:r,scrllTop:l,imglazy:u},data:function(){return{imglazyStyle:"border-radius: 10upx;",list:{statusHeight:0,historyList:[],isHistory:!0,text:"",thispage:0,Allpage:0,all:0,sort:!1,recList_a:[],recList_b:[],page:1,loadingType:"more",type:"add",filterIndex:0,priceOrder:0,downNum:"",getTop:0,getTop2:0,appwidth:"100%",scrllHdid:!1,over:!1,satus_a:!1,satus_b:!1}}},onLoad:function(){var t=this;setTimeout(function(){c=t.list,t.getTitleHeight(),t.seachData()},300)},computed:{i18n:function(){return this.$t("search")}},methods:{bindnav:function(e){switch(e){case 0:t.navigateTo({url:"/pages/product/list?listId=new"});break;case 1:t.navigateTo({url:"/pages/product/list?listId=China"})}},seachData:function(){c.satus_a=!0,c.recList_a=this.$t("search").recList_a,this.list=c},getTitleHeight:function(){var e=this;t.getSystemInfo({success:function(t){return console.log(i(t.screenHeight," at pages\\search\\search.vue:214")),t.screenHeight<740?(c.statusHeight="90px",c.getTop="32px",1==c.sort?c.getTop2="120px":c.getTop2="70px",e.list=c,!1):t.screenHeight<950?(c.statusHeight="95px",c.getTop="40px",1==c.sort?c.getTop2="130px":c.getTop2="80px",e.list=c,!1):t.screenHeight>1e3?(c.statusHeight="140px",c.getTop="30px",1==c.sort?c.getTop2="220px":c.getTop2="160px",e.list=c,!1):void 0}})},inputChange:function(t){var e=t.currentTarget.dataset.key;c[e]=t.detail.value},postData:function(){var t=this;if(""==c.text)return c.isHistory=!0,c.over=!0,t.list=c,this.$api.msg(t.$t("search").pl),!1;c.page=1,c.over=!1,c.historyList=[],n.default.load(this.$t("index").loadmsg),this.loadData()},bindSea:function(t){c.text=t,n.default.load(this.$t("index").loadmsg),this.loadData()},onPullDownRefresh:function(){""!=c.text?(c.page=1,c.type="refresh",this.loadData()):t.stopPullDownRefresh()},onReachBottom:function(){c.type="add",this.loadData()},bindconfirm:function(){this.loadData()},loadData:function(e){var a=this;c.over=!1;var i={text:c.text,page:c.page,downNum:c.downNum};a.$ajax.searchData(i).then(function(e){var i=e.list;if(null==e.list||0==e.other.totalPage)return c.loadingType="nomore",c.isHistory=!1,c.over=!0,a.list=c,t.hideLoading(),!1;0==e.list&&0==e.other.totalPage&&(c.historyList=[],c.isHistory=!1,a.over=!0);var n=[];for(var o in c.Allpage=e.other.totalPage,c.thispage=e.other.thispage,c.all=e.other.all,c.sort=!0,c.scrllHdid=!0,a.getTitleHeight(),i)i[o].image=a.$store.getters.imgShow+"/thumb/"+i[o].item_no+".jpg?x-oss-process=style/204",i[o].allNum=parseInt(i[o].spec),i[o].circleHidden=!1,i[o].circleText=0,"0"!=i[o].cnum&&(i[o].circleHidden=!0),n.push(i[o]);if(c.isHistory=!1,c.loadingType=parseInt(e.other.thispage)>e.other.totalPage?"nomore":"more","add"==c.type){if(c.page=c.page+1,"nomore"===c.loadingType)return void(a.list=c);c.loadingType="loading"}else c.loadingType="more";if("refresh"==c.type){if(c.historyList=[],t.stopPullDownRefresh(),c.page=c.page+1,"nomore"===c.loadingType)return void(a.list=c);c.loadingType="loading"}if(n.length<20)return c.loadingType="nomore",t.hideLoading(),c.historyList=c.historyList.concat(n),!1;t.hideLoading(),c.historyList=c.historyList.concat(n),a.list=c})},bindChange:function(t){c.historyList[t.index].allNum=t.number,this.list=c},shopping:function(t){var e=this,a={item_no:t.item_no,allNum:t.allNum};e.$ajax.addShop(a).then(function(a){"success"==a.result?(e.$api.msg(e.$t("index").msg1),t.circleHidden=!0,t.cnum=parseInt(t.cnum)+parseInt(t.allNum)):e.$api.msg(a.msg)})},goback:function(){t.navigateBack({delta:1})},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?productId=".concat(e)})},onScan:function(){t.scanCode({success:function(e){console.log(i("条码类型："+e.scanType," at pages\\search\\search.vue:423")),console.log(i("条码内容："+e.result," at pages\\search\\search.vue:424")),t.navigateTo({url:"/pages/product/product?productId=".concat(e.result)})}})},tabClick:function(e){c.filterIndex=e,c.page=1,c.type="refresh",2===e?(c.priceOrder=1===c.priceOrder?2:1,1==c.priceOrder&&(c.downNum="desc"),2==c.priceOrder&&(c.downNum="asc"),this.loadData()):(c.priceOrder=0,c.downNum="",this.loadData()),t.pageScrollTo({duration:300,scrollTop:0}),n.default.load(this.$t("index").loadmsg)}},onNavigationBarSearchInputChanged:function(t){c.text=t.text}};e.default=d}).call(this,a("6e42")["default"],a("0de9")["default"])},b4e9:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},c511:function(t,e,a){"use strict";a.r(e);var i=a("889a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a}},[["2367","common/runtime","common/vendor"]]]);