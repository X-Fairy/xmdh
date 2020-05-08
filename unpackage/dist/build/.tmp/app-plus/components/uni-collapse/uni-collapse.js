(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"113c":function(n,t,e){},2072:function(n,t,e){"use strict";var c=e("113c"),a=e.n(c);a.a},"7c40":function(n,t,e){"use strict";var c=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return c}),e.d(t,"b",function(){return a})},b10a:function(n,t,e){"use strict";e.r(t);var c=e("7c40"),a=e("b96c");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);e("2072");var o=e("2877"),r=Object(o["a"])(a["default"],c["a"],c["b"],!1,null,null,null);t["default"]=r.exports},b7a2:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=c},b96c:function(n,t,e){"use strict";e.r(t);var c=e("b7a2"),a=e.n(c);for(var u in c)"default"!==u&&function(n){e.d(t,n,function(){return c[n]})}(u);t["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("b10a"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);                
