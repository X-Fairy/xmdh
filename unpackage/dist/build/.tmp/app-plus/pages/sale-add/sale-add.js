(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sale-add/sale-add"],{"106d":function(t,e,a){"use strict";var n=a("5f33"),i=a.n(n);i.a},"17c8":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("3e59");var i=o(a("3d3b"));function o(t){return t&&t.__esModule?t:{default:t}}var s={radioType:!1,radioList:[],addList:[],form:{item_no:"",num:"",reason:"",item_name:""},scrollTop:0,current:-1,navHeight:0},r={data:function(){return{title:"radio 单选框",mvc:{radioType:!1,radioList:[],addList:[],form:{item_no:"",num:"",reason:"",item_name:""},scrollTop:0,current:-1,navHeight:0}}},onLoad:function(e){var a=this;setTimeout(function(){s=a.mvc,i.default.pageTitle(a.$t("sale_add").title),s.radioList=a.$t("sale_add").radioList;var e=[];t.setStorageSync("list",e);var n=0;t.setStorageSync("radio",n),a.getTitleHeight()},300)},computed:{i18n:function(){return this.$t("sale_add")}},onShow:function(){},methods:{getTitleHeight:function(){var e=this;t.getSystemInfo({success:function(t){return console.log(n(t.screenHeight," at pages\\sale-add\\sale-add.vue:142")),t.screenHeight<750?(s.navHeight="450px",e.mvc=s,!1):t.screenHeight<950?(s.navHeight="550px",e.mvc=s,!1):t.screenHeight>1e3?(s.navHeight="600px",e.mvc=s,!1):void 0}})},check:function(e){var a=this,n=s.radioList,i=1,o=t.getStorageSync("radio");if(99==o)return a.mvc=s,!1;0==o?(t.setStorageSync("radio",i),s.radioType=!0,s.radioList[e].checked=!s.radioList[e].checked,a.mvc=s):(t.setStorageSync("radio",i),s.radioType=!0,t.showModal({content:a.$t("sale_add").hint5,cancelText:a.$t("index").cancel,confirmText:a.$t("index").confirm,success:function(a){if(a.confirm){var i=[],o={item_no:"",num:"",reason:"",item_name:""};s.form=o,t.setStorageSync("list",i),s.addList=[],n.forEach(function(t,e){t.checked=!1}),s.radioList[e].checked=!s.radioList[e].checked}}}),a.mvc=s)},loadType:function(){s.radioType||this.$api.msg(this.$t("sale_add").hint1)},confirm:function(){var e,a=this,n=s.addList,i=s.radioList;i.forEach(function(t,a){1==t.checked&&(e=t.value)});var o={item_no:[],reason:[],type:e,aqty:[]};if(0==s.addList.length)return a.$api.msg(this.$t("sale_add").hint9),!1;n.forEach(function(t,e){o.item_no.push(t.item_no),o.reason.push(t.reason),o.aqty.push(t.num)}),a.$ajax.saleAdd(o).then(function(e){t.showToast({title:a.$t("sale_add").hint8});var n=1;t.setStorageSync("radio",n),setTimeout(function(){t.navigateBack({delta:1})},800)})},onScan:function(){var e=this;t.scanCode({success:function(t){s.form.item_no=t.result,e.$ajax.saleScan().then(function(t){s.current+1==2?s.form.num=1:s.form.num=t.purchase_spec,s.form.item_name=t.item_name})}})},bindadd:function(){var e=this,a=t.getStorageSync("list");if(console.log(n(a," at pages\\sale-add\\sale-add.vue:276")),!s.radioType)return this.$api.msg(e.$t("sale_add").hint1),!1;if(!s.form.item_no)return e.$api.msg(e.$t("sale_add").hint2),!1;for(var i=0;a.length>i;i++)if(a[i].item_no==s.form.item_no)return e.$api.msg(e.$t("sale_add").hint6),!1;if(!s.form.num)return e.$api.msg(e.$t("sale_add").hint3),!1;s.form.pics=[],a.push(s.form),a.forEach(function(t,a){t.img=e.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/300"}),t.setStorageSync("list",a);var o=t.getStorageSync("list");s.addList=o;var r={item_no:"",num:"",reason:"",item_name:""};s.form=r,this.mvc=s},changeinput:function(t){var e=this,a=(s.form,s.addList,{value:t.detail.value});e.$ajax.saleName(a).then(function(t){var a,n=s.radioList;n.forEach(function(t,e){1==t.checked&&(a=t.value)}),s.form.num=2==a?1:t.purchase_spec,s.form.item_name=t.item_name,e.mvc=s})},deleteCartItem:function(e,a){s.addList;var n=t.getStorageSync("list");n.splice(a,1),s.addList.splice(a,1),t.setStorageSync("list",n)},upload:function(e,a){var n=t.getStorageSync("userinfo"),i=this;t.chooseImage({success:function(a){var o=a.tempFilePaths,r=t.uploadFile({url:"https://api.xmvogue.com/index.php/Home/User/uppic?item_no="+e.item_no,filePath:o[0],name:"file",formData:{hdid:n.hdid,tmp_name:"ximei.jpg",uid:n.uid,sign:n.token},success:function(a){var n="http://ximiphoto.oss-cn-hangzhou.aliyuncs.com/shouhou/"+a.data+"?x-oss-process=style/300";e.pics.push(n);var o=s.addList;t.setStorageSync("list",o),t.showToast({title:i.$t("sale_add").hint7});var r=99;t.setStorageSync("radio",r)}});r.onProgressUpdate(function(t){t.progress})}})}},onBackPress:function(){var e=1;t.setStorageSync("radio",e)}};e.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])},"4a44":function(t,e,a){"use strict";(function(t){a("d471"),a("921b");n(a("66fd"));var e=n(a("e3df"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"5f33":function(t,e,a){},"8bd8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},cc95:function(t,e,a){"use strict";a.r(e);var n=a("17c8"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},e3df:function(t,e,a){"use strict";a.r(e);var n=a("8bd8"),i=a("cc95");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("106d");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}},[["4a44","common/runtime","common/vendor"]]]);