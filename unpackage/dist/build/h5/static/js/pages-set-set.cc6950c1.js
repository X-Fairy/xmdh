(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"237c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"list-cell",on:{click:function(e){e=t.$handleEvent(e),t.allclose(e)}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v(t._s(t.i18n.clear))]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell log-out-btn",on:{click:function(e){e=t.$handleEvent(e),t.toLogout(e)}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v(t._s(t.i18n.quit))])],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"3e1d":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("cebc")),l=n("2f62"),c=i(n("3d3b")),o={data:function(){return{version:"",hdid:!1}},onLoad:function(){c.default.pageTitle(this.$t("set").title)},computed:{i18n:function(){return this.$t("set")}},onShow:function(){},methods:(0,a.default)({},(0,l.mapMutations)(["logout"]),{allclose:function(){uni.clearStorage(),this.$api.msg(this.$t("set").hint)},toLogout:function(){var t=this,e=this;uni.showModal({content:e.$t("set").modelMsg,cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,success:function(e){e.confirm&&(t.logout(),uni.closeSocket(),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},500))}})},udate:function(){}})};e.default=o},"48fe":function(t,e,n){"use strict";n.r(e);var i=n("237c"),a=n("fa4f");for(var l in a)"default"!==l&&function(t){n.d(e,t,function(){return a[t]})}(l);n("8f93");var c=n("2877"),o=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"c9482f0e",null);e["default"]=o.exports},6683:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-c9482f0e]{background:#f8f8f8}.list-cell[data-v-c9482f0e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.list-cell.log-out-btn[data-v-c9482f0e]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-c9482f0e]{color:#fa436a;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-c9482f0e]{background:#fafafa}.list-cell.b-b[data-v-c9482f0e]:after{left:%?30?%}.list-cell.m-t[data-v-c9482f0e]{margin-top:%?16?%}.list-cell .cell-more[data-v-c9482f0e]{-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-c9482f0e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-c9482f0e]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-c9482f0e]{-webkit-transform:translateX(%?16?%) scale(.84);-ms-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-c9482f0e]{background:#f8f8f8}',""])},"8f93":function(t,e,n){"use strict";var i=n("a925"),a=n.n(i);a.a},a925:function(t,e,n){var i=n("6683");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("bd2ada06",i,!0,{sourceMap:!1,shadowMode:!1})},fa4f:function(t,e,n){"use strict";n.r(e);var i=n("3e1d"),a=n.n(i);for(var l in i)"default"!==l&&function(t){n.d(e,t,function(){return i[t]})}(l);e["default"]=a.a}}]);