(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-load-more/uni-load-more"],{"06dc":function(t,n,e){"use strict";var o=e("6bd8"),r=e.n(o);r.a},"4cb9":function(t,n,e){"use strict";e.r(n);var o=e("ada7"),r=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=r.a},"6bd8":function(t,n,e){},"859f":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},"926e":function(t,n,e){"use strict";e.r(n);var o=e("859f"),r=e("4cb9");for(var c in r)"default"!==c&&function(t){e.d(n,t,function(){return r[t]})}(c);e("06dc");var u=e("2877"),a=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=a.exports},ada7:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"uni-load-more",data:function(){return{contentdown:"正在加载1...",contentrefresh:"正在加载...",contentnomore:"没有更多数据啦1"}},props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"正在加载...",contentrefresh:"正在加载...",contentnomore:"没有更多数据啦"}}}},created:function(){this.contentnomore=this.$t("index").contentnomore,this.contentdown=this.$t("index").contentdown,this.contentrefresh=this.$t("index").contentrefresh}};n.default=o}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-load-more/uni-load-more-create-component',
    {
        'components/uni-load-more/uni-load-more-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("926e"))
        })
    },
    [['components/uni-load-more/uni-load-more-create-component']]
]);                
