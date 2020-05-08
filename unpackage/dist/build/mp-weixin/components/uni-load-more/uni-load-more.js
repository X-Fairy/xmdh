(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-load-more/uni-load-more"],{"18e5":function(t,n,e){"use strict";var o,r=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}))},"24c0":function(t,n,e){"use strict";var o=e("f3f5"),r=e.n(o);r.a},"32b2":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"uni-load-more",data:function(){return{contentdown:"正在加载1...",contentrefresh:"正在加载...",contentnomore:"没有更多数据啦1"}},props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"正在加载...",contentrefresh:"正在加载...",contentnomore:"没有更多数据啦"}}}},created:function(){this.contentnomore=this.$t("index").contentnomore,this.contentdown=this.$t("index").contentdown,this.contentrefresh=this.$t("index").contentrefresh}};n.default=o},"5c08":function(t,n,e){"use strict";e.r(n);var o=e("18e5"),r=e("cf35");for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);e("24c0");var u,f=e("f0c5"),i=Object(f["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=i.exports},cf35:function(t,n,e){"use strict";e.r(n);var o=e("32b2"),r=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=r.a},f3f5:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-load-more/uni-load-more-create-component',
    {
        'components/uni-load-more/uni-load-more-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5c08"))
        })
    },
    [['components/uni-load-more/uni-load-more-create-component']]
]);
