(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sale-add/sale-add"],{3479:function(t,e,n){"use strict";n.r(e);var i=n("4051"),a=n("96ae");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6544");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},4051:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},6544:function(t,e,n){"use strict";var i=n("6697"),a=n.n(i);a.a},6697:function(t,e,n){},"96ae":function(t,e,n){"use strict";n.r(e);var i=n("b97d"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},b5e8:function(t,e,n){"use strict";(function(t){n("3f5c"),n("921b");i(n("66fd"));var e=i(n("3479"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b97d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7839");var i=a(n("0421"));function a(t){return t&&t.__esModule?t:{default:t}}var o={radioType:!1,radioList:[],addList:[],form:{item_no:"",num:"",reason:"",item_name:""},scrollTop:0,current:-1,navHeight:0},r={data:function(){return{title:"radio 单选框",mvc:{radioType:!1,radioList:[],addList:[],form:{item_no:"",num:"",reason:"",item_name:""},scrollTop:0,current:-1,navHeight:0}}},onLoad:function(e){var n=this;setTimeout((function(){o=n.mvc,i.default.pageTitle(n.$t("sale_add").title),o.radioList=n.$t("sale_add").radioList;var e=[];t.setStorageSync("list",e);var a=0;t.setStorageSync("radio",a),n.getTitleHeight()}),300)},computed:{i18n:function(){return this.$t("sale_add")}},onShow:function(){},methods:{getTitleHeight:function(){var e=this;t.getSystemInfo({success:function(t){return console.log(t.screenHeight),t.screenHeight<750?(o.navHeight="450px",e.mvc=o,!1):t.screenHeight<950?(o.navHeight="550px",e.mvc=o,!1):t.screenHeight>1e3?(o.navHeight="600px",e.mvc=o,!1):void 0}})},check:function(e){var n=this,i=o.radioList,a=1,r=t.getStorageSync("radio");if(99==r)return n.mvc=o,!1;0==r?(t.setStorageSync("radio",a),o.radioType=!0,o.radioList[e].checked=!o.radioList[e].checked,n.mvc=o):(t.setStorageSync("radio",a),o.radioType=!0,t.showModal({content:n.$t("sale_add").hint5,cancelText:n.$t("index").cancel,confirmText:n.$t("index").confirm,success:function(n){if(n.confirm){var a=[],r={item_no:"",num:"",reason:"",item_name:""};o.form=r,t.setStorageSync("list",a),o.addList=[],i.forEach((function(t,e){t.checked=!1})),o.radioList[e].checked=!o.radioList[e].checked}}}),n.mvc=o)},loadType:function(){o.radioType||this.$api.msg(this.$t("sale_add").hint1)},confirm:function(){var e,n=this,i=o.addList,a=o.radioList;a.forEach((function(t,n){1==t.checked&&(e=t.value)}));var r={item_no:[],reason:[],type:e,aqty:[]};if(0==o.addList.length)return n.$api.msg(this.$t("sale_add").hint9),!1;i.forEach((function(t,e){r.item_no.push(t.item_no),r.reason.push(t.reason),r.aqty.push(t.num)})),n.$ajax.saleAdd(r).then((function(e){t.showToast({title:n.$t("sale_add").hint8});var i=1;t.setStorageSync("radio",i),setTimeout((function(){t.navigateBack({delta:1})}),800)}))},onScan:function(){var e=this;t.scanCode({success:function(t){o.form.item_no=t.result,e.$ajax.saleScan().then((function(t){o.current+1==2?o.form.num=1:o.form.num=t.purchase_spec,o.form.item_name=t.item_name}))}})},bindadd:function(){var e=this,n=t.getStorageSync("list");if(console.log(n),!o.radioType)return this.$api.msg(e.$t("sale_add").hint1),!1;if(!o.form.item_no)return e.$api.msg(e.$t("sale_add").hint2),!1;for(var i=0;n.length>i;i++)if(n[i].item_no==o.form.item_no)return e.$api.msg(e.$t("sale_add").hint6),!1;if(!o.form.num)return e.$api.msg(e.$t("sale_add").hint3),!1;o.form.pics=[],n.push(o.form),n.forEach((function(t,n){t.img=e.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/300"})),t.setStorageSync("list",n);var a=t.getStorageSync("list");o.addList=a;var r={item_no:"",num:"",reason:"",item_name:""};o.form=r,this.mvc=o},changeinput:function(t){var e=this,n=(o.form,o.addList,{value:t.detail.value});e.$ajax.saleName(n).then((function(t){var n,i=o.radioList;i.forEach((function(t,e){1==t.checked&&(n=t.value)})),o.form.num=2==n?1:t.purchase_spec,o.form.item_name=t.item_name,e.mvc=o}))},deleteCartItem:function(e,n){o.addList;var i=t.getStorageSync("list");i.splice(n,1),o.addList.splice(n,1),t.setStorageSync("list",i)},upload:function(e,n){var i=t.getStorageSync("userinfo"),a=this;t.chooseImage({success:function(n){var r=n.tempFilePaths,s=t.uploadFile({url:"https://api.xmvogue.com/index.php/Home/User/uppic?item_no="+e.item_no,filePath:r[0],name:"file",formData:{hdid:i.hdid,tmp_name:"ximei.jpg",uid:i.uid,sign:i.token},success:function(n){var i="http://ximiphoto.oss-cn-hangzhou.aliyuncs.com/shouhou/"+n.data+"?x-oss-process=style/300";e.pics.push(i);var r=o.addList;t.setStorageSync("list",r),t.showToast({title:a.$t("sale_add").hint7});var s=99;t.setStorageSync("radio",s)}});s.onProgressUpdate((function(t){t.progress}))}})}},onBackPress:function(){var e=1;t.setStorageSync("radio",e)}};e.default=r}).call(this,n("543d")["default"])}},[["b5e8","common/runtime","common/vendor"]]]);