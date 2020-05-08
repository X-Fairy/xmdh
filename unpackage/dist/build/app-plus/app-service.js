var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'mix-list-cell']],[[7],[3,'border']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'eventClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'cell-hover'])
Z([1,50])
Z([[7],[3,'icon']])
Z([[7],[3,'tips']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-card']],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'isFull']],[1,true]],[[2,'==='],[[7],[3,'isFull']],[1,'true']]],[1,'uni-card--full'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'title']])
Z([3,'uni-card__header'])
Z([[7],[3,'thumbnail']])
Z([[7],[3,'extra']])
Z([[7],[3,'note']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'uni-collapse-cell']],[[4],[[5],[[5],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-collapse-cell--disabled'],[1,'']]],[[2,'?:'],[[7],[3,'isOpen']],[1,'uni-collapse-cell--open'],[1,'']]]]]])
Z([[2,'?:'],[[7],[3,'disabled']],[1,''],[1,'uni-collapse-cell--hover']])
Z([3,'__e'])
Z([3,'uni-collapse-cell__title'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'thumb']])
Z([3,'__l'])
Z([3,'#bbb'])
Z([3,'20'])
Z([3,'arrowdown'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-countdown'])
Z([[7],[3,'showDay']])
Z(z[1])
Z([[2,'!'],[[7],[3,'showColon']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visibleSync']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[1,'uni-drawer']],[[2,'?:'],[[7],[3,'showDrawer']],[1,'uni-drawer--visible'],[1,'']]],[[2,'?:'],[[7],[3,'rightMode']],[1,'uni-drawer--right'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveHandle']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-navbar'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-navbar__content']],[[2,'?:'],[[7],[3,'fixed']],[1,'uni-navbar--fixed'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--shadow'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--border'],[1,'']]]])
Z([[7],[3,'statusBar']])
Z([3,'__l'])
Z([3,'1'])
Z([3,'uni-navbar__header uni-navbar__content_view'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'statusHeight']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'line-height:'],[[7],[3,'statusline']]],[1,';']]])
Z([3,'__e'])
Z([3,'uni-navbar__header-btns uni-navbar__content_view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickLeft']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'line-height:'],[[7],[3,'statusline']]],[1,';']])
Z([[6],[[7],[3,'leftIcon']],[3,'length']])
Z(z[3])
Z([[7],[3,'color']])
Z([3,'24'])
Z([[7],[3,'leftIcon']])
Z([3,'2'])
Z([[6],[[7],[3,'leftText']],[3,'length']])
Z([3,'left'])
Z([3,'uni-navbar__header-container uni-navbar__content_view'])
Z(z[10])
Z([[6],[[7],[3,'title']],[3,'length']])
Z(z[7])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickRight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[10])
Z([[6],[[7],[3,'rightIcon']],[3,'length']])
Z(z[3])
Z(z[13])
Z(z[14])
Z([[7],[3,'rightIcon']])
Z([3,'3'])
Z([[2,'&&'],[[6],[[7],[3,'rightText']],[3,'length']],[[2,'!'],[[6],[[7],[3,'rightIcon']],[3,'length']]]])
Z([3,'right'])
Z([[7],[3,'fixed']])
Z(z[2])
Z(z[3])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'options']])
Z(z[0])
Z([[4],[[5],[[5],[[5],[1,'uni-steps-item']],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'active']]],[1,'uni-steps-process'],[1,'']]],[[2,'?:'],[[2,'<'],[[7],[3,'index']],[[7],[3,'active']]],[1,'uni-steps-finish'],[1,'']]]])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([3,'uni-steps-item-circle-container'])
Z([[2,'!=='],[[7],[3,'index']],[[7],[3,'active']]])
Z([3,'__l'])
Z([[7],[3,'activeColor']])
Z([3,'14'])
Z([3,'checkbox-filled'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'options']],[3,'length']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-5e381b14'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([3,'back'])
Z([[6],[[7],[3,'list']],[3,'navTitle']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'mvc']],[3,'addressList']])
Z(z[0])
Z([3,'wrapper'])
Z([[6],[[7],[3,'item']],[3,'default']])
Z([[6],[[7],[3,'item']],[3,'PHONE']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[6],[[7],[3,'list']],[3,'empty']])
Z([3,'__e'])
Z(z[2])
Z(z[2])
Z([3,'cart-list'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'handletouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'handletouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'handletouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'margin-top:10rpx;position:relative;padding-top:210rpx;padding-bottom:260rpx;'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'list']],[3,'cartList']])
Z(z[8])
Z([[4],[[5],[[5],[1,'cart-item']],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[6],[[7],[3,'list']],[3,'cartList']],[3,'length']],[1,1]]],[1,'b-b'],[1,'']]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'huodong']],[1,'zhe']])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list.cartList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[16])
Z(z[2])
Z([3,'step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'bindChange']]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'allNum']])
Z(z[24])
Z([[6],[[7],[3,'item']],[3,'num']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[2,'=='],[[6],[[7],[3,'list']],[3,'over']],[1,true]])
Z(z[16])
Z([3,'3'])
Z(z[16])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^close']],[[4],[[5],[[4],[[5],[[5],[1,'closeDrawer']],[[4],[[5],[1,'right']]]]]]]]]]])
Z([3,'right'])
Z([[6],[[7],[3,'list']],[3,'showRigth']])
Z([3,'4'])
Z([[4],[[5],[1,'default']]])
Z(z[16])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^close']],[[4],[[5],[[4],[[5],[[5],[1,'closeDrawer']],[[4],[[5],[1,'left']]]]]]]]]]])
Z([3,'left'])
Z([[6],[[7],[3,'list']],[3,'showLeft']])
Z([3,'5'])
Z(z[37])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'mvc']],[3,'rightHide']],[1,true]])
Z([3,'__e'])
Z([3,'nav-right animated swing'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'mvc']],[3,'scrollTop']])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[6],[[7],[3,'mvc']],[3,'height']]],[1,'px']])
Z([3,'index'])
Z([3,'foods'])
Z([[6],[[7],[3,'mvc']],[3,'classifyData']])
Z(z[6])
Z([3,'i'])
Z([3,'item'])
Z([[6],[[7],[3,'foods']],[3,'child']])
Z(z[10])
Z(z[1])
Z([3,'nav-right-item '])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'cart']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'mvc.classifyData']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[[5],[1,'child']],[1,'']],[[7],[3,'i']]],[1,'cls_id']]]]]]]]]]]]]]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'i']],[1,0]],[1,'first'],[1,'']])
Z([3,'ff'])
Z([3,'img'])
Z([[6],[[7],[3,'item']],[3,'lazy']])
Z(z[18])
Z([3,'__l'])
Z([[6],[[7],[3,'img']],[3,'src']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'1-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'i']]],[1,'-']],[[7],[3,'ff']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'mvc']],[3,'cartoon']])
Z([3,'__l'])
Z([3,'1'])
Z([3,'addcard'])
Z([3,'padding-top:80rpx;'])
Z([[2,'=='],[[6],[[6],[[7],[3,'mvc']],[3,'collectList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'mvc']],[3,'collectList']])
Z(z[6])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'mvc.collectList']],[1,'']],[[7],[3,'index']]],[1,'code']]]]]]]]]]]]]]])
Z(z[1])
Z([[7],[3,'imglazyStyle']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'mvc']],[3,'over']])
Z(z[1])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[6],[[7],[3,'mvc']],[3,'cartoon']])
Z([3,'__l'])
Z([3,'1'])
Z([[2,'=='],[[6],[[6],[[7],[3,'mvc']],[3,'activeList']],[3,'length']],[1,0]])
Z(z[2])
Z([3,'2'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'mvc']],[3,'activeList']])
Z(z[7])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'item']],[3,'data']],[3,'type']],[3,'not_used']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'index']],[3,'newList']])
Z(z[1])
Z([3,'__e'])
Z([3,'floor-item animated bounceInRight'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'index.newList']],[1,'']],[[7],[3,'index']]],[1,'item_no']]]]]]]]]]]]]]])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[1])
Z(z[2])
Z([[6],[[7],[3,'index']],[3,'mentList']])
Z(z[1])
Z(z[5])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'index.mentList']],[1,'']],[[7],[3,'index']]],[1,'item_no']]]]]]]]]]]]]]])
Z(z[8])
Z(z[9])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[1])
Z(z[2])
Z([[6],[[7],[3,'index']],[3,'seckillList']])
Z(z[1])
Z(z[5])
Z([3,'floor-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'index.seckillList']],[1,'']],[[7],[3,'index']]],[1,'item_no']]]]]]]]]]]]]]])
Z(z[8])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'index.seckillList']],[1,'']],[[7],[3,'index']]],[1,'item_no']]]]]]]]]]]]]]])
Z(z[9])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[1])
Z(z[2])
Z([[6],[[7],[3,'index']],[3,'sellList']])
Z(z[1])
Z(z[5])
Z(z[26])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navDisPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'index.sellList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z(z[8])
Z(z[9])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
Z(z[1])
Z(z[2])
Z([[6],[[7],[3,'index']],[3,'goodsList']])
Z(z[1])
Z([3,'guess-item'])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'index.goodsList']],[1,'']],[[7],[3,'index']]],[1,'item_no']]]]]]]]]]]]]]])
Z(z[8])
Z(z[9])
Z([[2,'+'],[1,'5-'],[[7],[3,'index']]])
Z([3,'padding:0 15rpx;'])
Z(z[8])
Z(z[5])
Z([3,'step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'bindChange']]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'allNum']])
Z(z[59])
Z(z[59])
Z([[2,'+'],[1,'6-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'circleHidden']])
Z(z[8])
Z([3,'7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-content'])
Z([[2,'=='],[[7],[3,'app']],[1,2]])
Z([[2,'=='],[[7],[3,'hisHdid']],[1,true]])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[6],[[7],[3,'mvc']],[3,'active']])
Z([3,'__l'])
Z([3,'column'])
Z([[6],[[7],[3,'mvc']],[3,'list2']])
Z([3,'1'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'mvc']],[3,'detaList']])
Z(z[6])
Z(z[2])
Z([[7],[3,'imglazyStyle']])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[6],[[7],[3,'mvc']],[3,'loadingType']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'mvc']],[3,'over']])
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'mvc']],[3,'isShow']])
Z([[6],[[7],[3,'mvc']],[3,'hide']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'mvc']],[3,'over']])
Z([3,'details'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'mvc']],[3,'detailList']])
Z(z[2])
Z([3,'__e'])
Z([3,'card-info'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'mvc.detailList']],[1,'']],[[7],[3,'index']]],[1,'item_no']]]]]]]]]]]]]]])
Z(z[6])
Z(z[8])
Z([3,'__l'])
Z([[7],[3,'imglazyStyle']])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[0])
Z(z[11])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[2,'=='],[[6],[[7],[3,'mvc']],[3,'cartoon']],[1,true]])
Z([3,'__l'])
Z([3,'1'])
Z(z[2])
Z([[6],[[7],[3,'mvc']],[3,'loadingType']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'mvc']],[3,'over']])
Z([3,'details'])
Z([[2,'=='],[[6],[[6],[[7],[3,'mvc']],[3,'orderInfo']],[3,'istrans']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'mvc']],[3,'detailList']])
Z(z[3])
Z([3,'__e'])
Z([3,'card-info'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'mvc.detailList']],[1,'']],[[7],[3,'index']]],[1,'item_no']]]]]]]]]]]]]]])
Z([3,'__l'])
Z([[7],[3,'imglazyStyle']])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[0])
Z(z[10])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'position:fixed;left:0;width:100%;height:300rpx;z-index:90;'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([3,'back'])
Z([[6],[[7],[3,'list']],[3,'navTitle']])
Z([3,'1'])
Z([[2,'=='],[[6],[[7],[3,'list']],[3,'rightnavhide']],[1,true]])
Z([[2,'=='],[[6],[[7],[3,'list']],[3,'cartoon']],[1,true]])
Z(z[2])
Z([3,'2'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'list']],[3,'goodsList']])
Z(z[12])
Z([3,'guess-item'])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list.goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z(z[2])
Z([[7],[3,'imglazyStyle']])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z([3,'padding:0 15rpx;'])
Z([3,'guess-right'])
Z([[2,'=='],[[6],[[7],[3,'list']],[3,'listId']],[1,'dis']])
Z([[2,'!='],[[6],[[7],[3,'list']],[3,'listId']],[1,'dis']])
Z(z[26])
Z(z[2])
Z(z[3])
Z([3,'step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'bindChange']]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'min']])
Z([[6],[[7],[3,'item']],[3,'allNum']])
Z(z[34])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'circleHidden']],[1,true]])
Z(z[2])
Z([[6],[[7],[3,'list']],[3,'loadingType']])
Z([3,'5'])
Z(z[2])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'previewImage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'index.banner']]]]]]]]]]])
Z([3,'__l'])
Z([[6],[[7],[3,'index']],[3,'banner']])
Z([3,'1'])
Z([3,'price-box'])
Z([[2,'!='],[[6],[[7],[3,'index']],[3,'discountPrice']],[1,'']])
Z([[2,'=='],[[6],[[7],[3,'index']],[3,'discountPrice']],[1,'']])
Z([3,'c-list'])
Z([3,'margin-bottom:20rpx;'])
Z([[2,'&&'],[[2,'<'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'material']],[1,30]],[[2,'>'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'material']],[1,2]]])
Z([[2,'&&'],[[2,'<'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'features']],[1,30]],[[2,'>'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'features']],[1,2]]])
Z([[2,'&&'],[[2,'<'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'usage']],[1,30]],[[2,'>'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'usage']],[1,2]]])
Z([[2,'&&'],[[2,'<'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'notes']],[1,30]],[[2,'>'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'notes']],[1,2]]])
Z(z[3])
Z(z[10])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'material']],[1,30]])
Z(z[3])
Z([[6],[[7],[3,'index']],[3,'material']])
Z([1,true])
Z([[6],[[7],[3,'i18n']],[3,'Material']])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'2']])
Z(z[18])
Z([[2,'>'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'features']],[1,30]])
Z(z[3])
Z([[6],[[7],[3,'index']],[3,'features']])
Z(z[22])
Z([[6],[[7],[3,'i18n']],[3,'features']])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'2']])
Z(z[18])
Z([[2,'>'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'usage']],[1,30]])
Z(z[3])
Z([[6],[[7],[3,'index']],[3,'usage']])
Z(z[22])
Z([[6],[[7],[3,'i18n']],[3,'usage']])
Z([[2,'+'],[[2,'+'],[1,'5'],[1,',']],[1,'2']])
Z(z[18])
Z([[2,'>'],[[6],[[6],[[7],[3,'index']],[3,'dataLength']],[3,'notes']],[1,30]])
Z(z[3])
Z([[6],[[7],[3,'index']],[3,'notes']])
Z(z[22])
Z([[6],[[7],[3,'i18n']],[3,'notice']])
Z([[2,'+'],[[2,'+'],[1,'6'],[1,',']],[1,'2']])
Z(z[18])
Z(z[3])
Z(z[1])
Z([3,'step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'bindChange']]]]]]]]])
Z([[6],[[7],[3,'index']],[3,'allNum']])
Z(z[51])
Z(z[51])
Z([3,'7'])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[1,'popup spec']],[[6],[[7],[3,'index']],[3,'specClass']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleSpec']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'layer attr-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z(z[4])
Z([3,'8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'stock'])
Z([[2,'=='],[[6],[[7],[3,'mvc']],[3,'current']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'mvc']],[3,'current']],[1,2]])
Z([[6],[[7],[3,'mvc']],[3,'qiunHdid']])
Z([[2,'!='],[[6],[[7],[3,'mvc']],[3,'current']],[1,0]])
Z([3,'padding:0 20rpx;margin-bottom:100rpx;'])
Z([3,'index'])
Z([3,'list'])
Z([[6],[[7],[3,'mvc']],[3,'repList']])
Z(z[6])
Z([3,'__e'])
Z([3,'detaList box-border'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'mvc.repList']],[1,'']],[[7],[3,'index']]],[1,'CODE2']]]]]]]]]]]]]]])
Z([3,'__l'])
Z([[7],[3,'imglazyStyle']])
Z([[6],[[7],[3,'list']],[3,'img']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'mvc']],[3,'over']])
Z(z[13])
Z([3,'2'])
Z([[6],[[7],[3,'mvc']],[3,'hide']])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'mvc']],[3,'saleList']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'imglazyStyle']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'mvc']],[3,'all']],[3,'zt']],[1,'待审核']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'mvc']],[3,'cartoon']],[1,true]])
Z([3,'__l'])
Z([3,'1'])
Z([[2,'=='],[[6],[[7],[3,'mvc']],[3,'over']],[1,true]])
Z(z[1])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'list']],[3,'sort']])
Z([3,'content'])
Z([[2,'+'],[[2,'+'],[1,'padding-top:'],[[6],[[7],[3,'list']],[3,'getTop2']]],[1,';']])
Z([[6],[[7],[3,'list']],[3,'isHistory']])
Z([3,'recommend'])
Z([[6],[[7],[3,'list']],[3,'satus_a']])
Z([[6],[[7],[3,'list']],[3,'satus_b']])
Z([[2,'>'],[[6],[[6],[[7],[3,'list']],[3,'historyList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'list']],[3,'historyList']])
Z(z[8])
Z([3,'guess-item'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'list.historyList']],[1,'']],[[7],[3,'index']]],[1,'item_no']]]]]]]]]]]]]]])
Z([3,'__l'])
Z([[7],[3,'imglazyStyle']])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([3,'padding:0 15rpx;'])
Z(z[15])
Z(z[13])
Z([3,'step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'bindChange']]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'allNum']])
Z(z[25])
Z(z[25])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'circleHidden']],[1,true]])
Z(z[0])
Z(z[15])
Z([[6],[[7],[3,'list']],[3,'loadingType']])
Z([3,'3'])
Z([[6],[[7],[3,'list']],[3,'scrllHdid']])
Z(z[15])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'navbar'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([3,'back'])
Z([3,'限时秒杀'])
Z([3,'1'])
Z([3,'#FF80AB'])
Z(z[1])
Z(z[7])
Z([3,'#ffffff'])
Z([1,2])
Z([1,30])
Z([1,0])
Z([1,false])
Z(z[10])
Z([3,'2'])
Z([[2,'+'],[[2,'+'],[1,'padding-top:'],[[6],[[7],[3,'mvc']],[3,'navHeight']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'mvc']],[3,'seckList']])
Z(z[18])
Z([3,'guess-item'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'mvc.seckList']],[1,'']],[[7],[3,'index']]],[1,'item_no']]]]]]]]]]]]]]])
Z(z[1])
Z([[7],[3,'imglazyStyle']])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z([3,'padding:0 15rpx;'])
Z(z[1])
Z(z[2])
Z([3,'step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'bindChange']]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'allNum']])
Z(z[35])
Z(z[35])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'circleHidden']],[1,true]])
Z(z[1])
Z([[6],[[7],[3,'mvc']],[3,'loadingType']])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'hdid']],[1,true]])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'mvc']],[3,'ProgressHdid']])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'vip-card-box'])
Z([[2,'=='],[[6],[[7],[3,'index']],[3,'isvip']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'index']],[3,'isvip']],[1,0]])
Z([3,'__e'])
Z(z[4])
Z(z[4])
Z([3,'cover-container'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'coverTransform']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[7],[3,'coverTransition']]],[1,';']]])
Z([[2,'=='],[[7],[3,'app']],[1,2]])
Z([3,'history-section icon'])
Z([3,'__l'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventClick']],[[4],[[5],[[4],[[5],[1,'order']]]]]]]]])
Z([3,'icon-order'])
Z([3,'#2ec6e2'])
Z([[6],[[7],[3,'i18n']],[3,'info_c1']])
Z([3,'1'])
Z(z[12])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventClick']],[[4],[[5],[[4],[[5],[1,'navCollect']]]]]]]]])
Z([3,'icon-shoucang_xuanzhongzhuangtai'])
Z([3,'#ffc700'])
Z([[6],[[7],[3,'i18n']],[3,'info_c2']])
Z([3,'2'])
Z(z[12])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventClick']],[[4],[[5],[[4],[[5],[1,'navDiscounts']]]]]]]]])
Z([3,'icon-dis'])
Z([3,'#e84c8e'])
Z([[6],[[7],[3,'i18n']],[3,'info_c3']])
Z([3,'3'])
Z(z[12])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventClick']],[[4],[[5],[[4],[[5],[[5],[1,'address']],[[4],[[5],[1,'url']]]]]]]]]]])
Z([3,'icon-dizhi'])
Z([3,'#5fcda2'])
Z([[6],[[7],[3,'i18n']],[3,'info_c4']])
Z([3,'4'])
Z(z[12])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventClick']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'/pages/set/set']]]]]]]]]]])
Z([3,'icon-shezhi1'])
Z([3,'#e07472'])
Z([[6],[[7],[3,'i18n']],[3,'info_c5']])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/empty.wxml','./components/img-lazy/img-lazy.wxml','./components/mix-list-cell.wxml','./components/over.wxml','./components/share.wxml','./components/uni-card/uni-card.wxml','./components/uni-collapse-item/uni-collapse-item.wxml','./components/uni-collapse/uni-collapse.wxml','./components/uni-countdown/uni-countdown.wxml','./components/uni-drawer/uni-drawer.wxml','./components/uni-icon/uni-icon.wxml','./components/uni-load-more/uni-load-more.wxml','./components/uni-nav-bar/uni-nav-bar.wxml','./components/uni-number-box.wxml','./components/uni-scrollTo/uni-scrollTo.wxml','./components/uni-status-bar/uni-status-bar.wxml','./components/uni-steps/uni-steps.wxml','./pages/Article/Article.wxml','./pages/address/address.wxml','./pages/cart/cart.wxml','./pages/category/leftCategory.wxml','./pages/collect/collect.wxml','./pages/discounts/discounts.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/logistics-add/logistics-add.wxml','./pages/logistics-detail/logistics-detail.wxml','./pages/logistics-list/logistics-list.wxml','./pages/market-detail/market-detail.wxml','./pages/market/market.wxml','./pages/order-hddata/order-hddata.wxml','./pages/order/order.wxml','./pages/oreder-detail/oreder-detail.wxml','./pages/product/list.wxml','./pages/product/product.wxml','./pages/repertory/repertory.wxml','./pages/sale-add/sale-add.wxml','./pages/sale-detail/sale-detail.wxml','./pages/sale/sale.wxml','./pages/search/search.wxml','./pages/seckill/seckill.wxml','./pages/set/set.wxml','./pages/technology/technology.wxml','./pages/update/update.wxml','./pages/user/user.wxml','./pages/webview/webview.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2,'hoverStayTime',3],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,6,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(r,oD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cI=_v()
_(r,cI)
if(_oz(z,0,e,s,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var lK=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,3,e,s,gg)){aL.wxVkey=1
var eN=_n('view')
_rz(z,eN,'class',4,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,5,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(eN,oP)
if(_oz(z,6,e,s,gg)){oP.wxVkey=1
}
bO.wxXCkey=1
oP.wxXCkey=1
_(aL,eN)
}
var xQ=_n('slot')
_(lK,xQ)
var tM=_v()
_(lK,tM)
if(_oz(z,7,e,s,gg)){tM.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
_(r,lK)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var fS=_mz(z,'view',['class',0,'hoverClass',1],[],e,s,gg)
var cT=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,5,e,s,gg)){hU.wxVkey=1
}
var oV=_mz(z,'uni-icon',['bind:__l',6,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(cT,oV)
hU.wxXCkey=1
_(fS,cT)
var cW=_n('slot')
_(fS,cW)
_(r,fS)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var lY=_n('slot')
_(r,lY)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var t1=_n('view')
_rz(z,t1,'class',0,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,1,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(t1,b3)
if(_oz(z,2,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(t1,o4)
if(_oz(z,3,e,s,gg)){o4.wxVkey=1
}
e2.wxXCkey=1
b3.wxXCkey=1
o4.wxXCkey=1
_(r,t1)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var o6=_v()
_(r,o6)
if(_oz(z,0,e,s,gg)){o6.wxVkey=1
var f7=_mz(z,'view',['catchtouchmove',1,'class',1,'data-event-opts',2],[],e,s,gg)
var c8=_n('slot')
_(f7,c8)
_(o6,f7)
}
o6.wxXCkey=1
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oBB=_n('view')
_rz(z,oBB,'class',0,e,s,gg)
var aDB=_n('view')
_rz(z,aDB,'class',1,e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,2,e,s,gg)){tEB.wxVkey=1
var eFB=_mz(z,'uni-status-bar',['bind:__l',3,'vueId',1],[],e,s,gg)
_(tEB,eFB)
}
var bGB=_mz(z,'view',['class',5,'style',1],[],e,s,gg)
var oHB=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,11,e,s,gg)){xIB.wxVkey=1
var fKB=_mz(z,'uni-icon',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(xIB,fKB)
}
var oJB=_v()
_(oHB,oJB)
if(_oz(z,17,e,s,gg)){oJB.wxVkey=1
}
var cLB=_n('slot')
_rz(z,cLB,'name',18,e,s,gg)
_(oHB,cLB)
xIB.wxXCkey=1
xIB.wxXCkey=3
oJB.wxXCkey=1
_(bGB,oHB)
var hMB=_mz(z,'view',['class',19,'style',1],[],e,s,gg)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,21,e,s,gg)){oNB.wxVkey=1
}
var cOB=_n('slot')
_(hMB,cOB)
oNB.wxXCkey=1
_(bGB,hMB)
var oPB=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var lQB=_v()
_(oPB,lQB)
if(_oz(z,26,e,s,gg)){lQB.wxVkey=1
var tSB=_mz(z,'uni-icon',['bind:__l',27,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(lQB,tSB)
}
var aRB=_v()
_(oPB,aRB)
if(_oz(z,32,e,s,gg)){aRB.wxVkey=1
}
var eTB=_n('slot')
_rz(z,eTB,'name',33,e,s,gg)
_(oPB,eTB)
lQB.wxXCkey=1
lQB.wxXCkey=3
aRB.wxXCkey=1
_(bGB,oPB)
_(aDB,bGB)
tEB.wxXCkey=1
tEB.wxXCkey=3
_(oBB,aDB)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,34,e,s,gg)){lCB.wxVkey=1
var bUB=_v()
_(lCB,bUB)
if(_oz(z,35,e,s,gg)){bUB.wxVkey=1
var oVB=_mz(z,'uni-status-bar',['bind:__l',36,'vueId',1],[],e,s,gg)
_(bUB,oVB)
}
bUB.wxXCkey=1
bUB.wxXCkey=3
}
lCB.wxXCkey=1
lCB.wxXCkey=3
_(r,oBB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var cZB=_n('slot')
_(r,cZB)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var o2B=_v()
_(r,o2B)
var c3B=function(l5B,o4B,a6B,gg){
var e8B=_n('view')
_rz(z,e8B,'class',4,l5B,o4B,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,5,l5B,o4B,gg)){b9B.wxVkey=1
}
var xAC=_n('view')
_rz(z,xAC,'class',6,l5B,o4B,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,7,l5B,o4B,gg)){oBC.wxVkey=1
}
else{oBC.wxVkey=2
var fCC=_mz(z,'uni-icon',['bind:__l',8,'color',1,'size',2,'type',3,'vueId',4],[],l5B,o4B,gg)
_(oBC,fCC)
}
oBC.wxXCkey=1
oBC.wxXCkey=3
_(e8B,xAC)
var o0B=_v()
_(e8B,o0B)
if(_oz(z,13,l5B,o4B,gg)){o0B.wxVkey=1
}
b9B.wxXCkey=1
o0B.wxXCkey=1
_(a6B,e8B)
return a6B
}
o2B.wxXCkey=4
_2z(z,2,c3B,e,s,gg,o2B,'item','index','index')
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var hEC=_mz(z,'uni-nav-bar',['bind:__l',0,'bind:clickLeft',1,'class',1,'data-event-opts',2,'leftIcon',3,'title',4,'vueId',5],[],e,s,gg)
_(r,hEC)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var cGC=_v()
_(r,cGC)
var oHC=function(aJC,lIC,tKC,gg){
var bMC=_n('view')
_rz(z,bMC,'class',4,aJC,lIC,gg)
var oNC=_v()
_(bMC,oNC)
if(_oz(z,5,aJC,lIC,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(bMC,xOC)
if(_oz(z,6,aJC,lIC,gg)){xOC.wxVkey=1
}
oNC.wxXCkey=1
xOC.wxXCkey=1
_(tKC,bMC)
return tKC
}
cGC.wxXCkey=2
_2z(z,2,oHC,e,s,gg,cGC,'item','index','index')
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var fQC=_n('view')
_rz(z,fQC,'class',0,e,s,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,1,e,s,gg)){cRC.wxVkey=1
}
else{cRC.wxVkey=2
var hSC=_mz(z,'view',['bindtouchend',2,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var cUC=_v()
_(hSC,cUC)
var oVC=function(aXC,lWC,tYC,gg){
var b1C=_n('view')
_rz(z,b1C,'class',12,aXC,lWC,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,13,aXC,lWC,gg)){o2C.wxVkey=1
}
var x3C=_mz(z,'view',['bindtap',14,'data-event-opts',1],[],aXC,lWC,gg)
var o4C=_mz(z,'imglazy',['bind:__l',16,'url',1,'vueId',2],[],aXC,lWC,gg)
_(x3C,o4C)
_(b1C,x3C)
var f5C=_mz(z,'uni-number-box',['bind:__l',19,'bind:change',1,'class',2,'data-event-opts',3,'index',4,'min',5,'step',6,'value',7,'vueId',8],[],aXC,lWC,gg)
_(b1C,f5C)
o2C.wxXCkey=1
_(tYC,b1C)
return tYC
}
cUC.wxXCkey=4
_2z(z,10,oVC,e,s,gg,cUC,'item','index','index')
var oTC=_v()
_(hSC,oTC)
if(_oz(z,28,e,s,gg)){oTC.wxVkey=1
var c6C=_mz(z,'over',['bind:__l',29,'vueId',1],[],e,s,gg)
_(oTC,c6C)
}
oTC.wxXCkey=1
oTC.wxXCkey=3
_(cRC,hSC)
}
var h7C=_mz(z,'uni-drawer',['bind:__l',31,'bind:close',1,'data-event-opts',2,'mode',3,'visible',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(fQC,h7C)
var o8C=_mz(z,'uni-drawer',['bind:__l',38,'bind:close',1,'data-event-opts',2,'mode',3,'visible',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(fQC,o8C)
cRC.wxXCkey=1
cRC.wxXCkey=3
_(r,fQC)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var o0C=_v()
_(r,o0C)
if(_oz(z,0,e,s,gg)){o0C.wxVkey=1
var lAD=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',1,'class',1,'data-event-opts',2,'scrollTop',3,'style',4],[],e,s,gg)
var aBD=_v()
_(lAD,aBD)
var tCD=function(bED,eDD,oFD,gg){
var oHD=_v()
_(oFD,oHD)
var fID=function(hKD,cJD,oLD,gg){
var oND=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2,'id',3],[],hKD,cJD,gg)
var lOD=_v()
_(oND,lOD)
var aPD=function(eRD,tQD,bSD,gg){
var xUD=_mz(z,'imglazy',['bind:__l',22,'url',1,'vueId',2],[],eRD,tQD,gg)
_(bSD,xUD)
return bSD
}
lOD.wxXCkey=4
_2z(z,20,aPD,hKD,cJD,gg,lOD,'img','ff','ff')
_(oLD,oND)
return oLD
}
oHD.wxXCkey=4
_2z(z,12,fID,bED,eDD,gg,oHD,'item','i','i')
return oFD
}
aBD.wxXCkey=4
_2z(z,8,tCD,e,s,gg,aBD,'foods','index','index')
_(o0C,lAD)
}
o0C.wxXCkey=1
o0C.wxXCkey=3
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var fWD=_n('view')
var cXD=_v()
_(fWD,cXD)
if(_oz(z,0,e,s,gg)){cXD.wxVkey=1
var hYD=_mz(z,'empty',['bind:__l',1,'vueId',1],[],e,s,gg)
_(cXD,hYD)
}
else{cXD.wxVkey=2
var oZD=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var c1D=_v()
_(oZD,c1D)
if(_oz(z,5,e,s,gg)){c1D.wxVkey=1
}
else{c1D.wxVkey=2
var l3D=_v()
_(c1D,l3D)
var a4D=function(e6D,t5D,b7D,gg){
var x9D=_mz(z,'view',['bindtap',10,'data-event-opts',1],[],e6D,t5D,gg)
var o0D=_mz(z,'imglazy',['bind:__l',12,'sty',1,'url',2,'vueId',3],[],e6D,t5D,gg)
_(x9D,o0D)
_(b7D,x9D)
return b7D
}
l3D.wxXCkey=4
_2z(z,8,a4D,e,s,gg,l3D,'item','index','index')
}
var o2D=_v()
_(oZD,o2D)
if(_oz(z,16,e,s,gg)){o2D.wxVkey=1
var fAE=_mz(z,'over',['bind:__l',17,'vueId',1],[],e,s,gg)
_(o2D,fAE)
}
c1D.wxXCkey=1
c1D.wxXCkey=3
o2D.wxXCkey=1
o2D.wxXCkey=3
_(cXD,oZD)
}
cXD.wxXCkey=1
cXD.wxXCkey=3
cXD.wxXCkey=3
_(r,fWD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var hCE=_n('view')
_rz(z,hCE,'class',0,e,s,gg)
var oDE=_v()
_(hCE,oDE)
if(_oz(z,1,e,s,gg)){oDE.wxVkey=1
var cEE=_mz(z,'empty',['bind:__l',2,'vueId',1],[],e,s,gg)
_(oDE,cEE)
}
else{oDE.wxVkey=2
var oFE=_n('view')
var lGE=_v()
_(oFE,lGE)
if(_oz(z,4,e,s,gg)){lGE.wxVkey=1
var aHE=_mz(z,'empty',['bind:__l',5,'vueId',1],[],e,s,gg)
_(lGE,aHE)
}
else{lGE.wxVkey=2
var tIE=_v()
_(lGE,tIE)
var eJE=function(oLE,bKE,xME,gg){
var fOE=_v()
_(xME,fOE)
if(_oz(z,11,oLE,bKE,gg)){fOE.wxVkey=1
}
fOE.wxXCkey=1
return xME
}
tIE.wxXCkey=2
_2z(z,9,eJE,e,s,gg,tIE,'item','index','index')
}
lGE.wxXCkey=1
lGE.wxXCkey=3
_(oDE,oFE)
}
oDE.wxXCkey=1
oDE.wxXCkey=3
oDE.wxXCkey=3
_(r,hCE)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var hQE=_n('view')
_rz(z,hQE,'class',0,e,s,gg)
var oRE=_v()
_(hQE,oRE)
var cSE=function(lUE,oTE,aVE,gg){
var eXE=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],lUE,oTE,gg)
var bYE=_mz(z,'imglazy',['bind:__l',8,'url',1,'vueId',2],[],lUE,oTE,gg)
_(eXE,bYE)
_(aVE,eXE)
return aVE
}
oRE.wxXCkey=4
_2z(z,3,cSE,e,s,gg,oRE,'item','index','index')
var oZE=_v()
_(hQE,oZE)
var x1E=function(f3E,o2E,c4E,gg){
var o6E=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],f3E,o2E,gg)
var c7E=_mz(z,'imglazy',['bind:__l',18,'url',1,'vueId',2],[],f3E,o2E,gg)
_(o6E,c7E)
_(c4E,o6E)
return c4E
}
oZE.wxXCkey=4
_2z(z,13,x1E,e,s,gg,oZE,'item','index','index')
var o8E=_v()
_(hQE,o8E)
var l9E=function(tAF,a0E,eBF,gg){
var oDF=_mz(z,'view',['bindtap',25,'class',1,'data-event-opts',2],[],tAF,a0E,gg)
var xEF=_mz(z,'imglazy',['bind:__l',28,'bind:click',1,'data-event-opts',2,'url',3,'vueId',4],[],tAF,a0E,gg)
_(oDF,xEF)
_(eBF,oDF)
return eBF
}
o8E.wxXCkey=4
_2z(z,23,l9E,e,s,gg,o8E,'item','index','index')
var oFF=_v()
_(hQE,oFF)
var fGF=function(hIF,cHF,oJF,gg){
var oLF=_mz(z,'view',['bindtap',37,'class',1,'data-event-opts',2],[],hIF,cHF,gg)
var lMF=_mz(z,'imglazy',['bind:__l',40,'url',1,'vueId',2],[],hIF,cHF,gg)
_(oLF,lMF)
_(oJF,oLF)
return oJF
}
oFF.wxXCkey=4
_2z(z,35,fGF,e,s,gg,oFF,'item','index','index')
var aNF=_v()
_(hQE,aNF)
var tOF=function(bQF,ePF,oRF,gg){
var oTF=_n('view')
_rz(z,oTF,'class',47,bQF,ePF,gg)
var fUF=_mz(z,'view',['bindtap',48,'data-event-opts',1],[],bQF,ePF,gg)
var cVF=_mz(z,'imglazy',['bind:__l',50,'url',1,'vueId',2],[],bQF,ePF,gg)
_(fUF,cVF)
_(oTF,fUF)
var hWF=_n('view')
_rz(z,hWF,'style',53,bQF,ePF,gg)
var cYF=_mz(z,'uni-number-box',['bind:__l',54,'bind:change',1,'class',2,'data-event-opts',3,'index',4,'min',5,'step',6,'value',7,'vueId',8],[],bQF,ePF,gg)
_(hWF,cYF)
var oXF=_v()
_(hWF,oXF)
if(_oz(z,63,bQF,ePF,gg)){oXF.wxVkey=1
}
oXF.wxXCkey=1
_(oTF,hWF)
_(oRF,oTF)
return oRF
}
aNF.wxXCkey=4
_2z(z,45,tOF,e,s,gg,aNF,'item','index','index')
var oZF=_mz(z,'over',['bind:__l',64,'vueId',1],[],e,s,gg)
_(hQE,oZF)
_(r,hQE)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var a2F=_n('view')
_rz(z,a2F,'class',0,e,s,gg)
var t3F=_v()
_(a2F,t3F)
if(_oz(z,1,e,s,gg)){t3F.wxVkey=1
}
var e4F=_v()
_(a2F,e4F)
if(_oz(z,2,e,s,gg)){e4F.wxVkey=1
}
t3F.wxXCkey=1
e4F.wxXCkey=1
_(r,a2F)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var x7F=_n('view')
_rz(z,x7F,'class',0,e,s,gg)
var o8F=_mz(z,'uni-steps',['active',1,'bind:__l',1,'direction',2,'options',3,'vueId',4],[],e,s,gg)
_(x7F,o8F)
var f9F=_v()
_(x7F,f9F)
var c0F=function(oBG,hAG,cCG,gg){
var lEG=_mz(z,'imglazy',['bind:__l',10,'sty',1,'url',2,'vueId',3],[],oBG,hAG,gg)
_(cCG,lEG)
return cCG
}
f9F.wxXCkey=4
_2z(z,8,c0F,e,s,gg,f9F,'item','index','index')
_(r,x7F)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var tGG=_mz(z,'uni-load-more',['bind:__l',0,'status',1,'vueId',1],[],e,s,gg)
_(r,tGG)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var bIG=_v()
_(r,bIG)
if(_oz(z,0,e,s,gg)){bIG.wxVkey=1
var oJG=_mz(z,'over',['bind:__l',1,'vueId',1],[],e,s,gg)
_(bIG,oJG)
}
bIG.wxXCkey=1
bIG.wxXCkey=3
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oLG=_n('view')
var fMG=_v()
_(oLG,fMG)
if(_oz(z,0,e,s,gg)){fMG.wxVkey=1
}
var cNG=_v()
_(oLG,cNG)
if(_oz(z,1,e,s,gg)){cNG.wxVkey=1
}
fMG.wxXCkey=1
cNG.wxXCkey=1
_(r,oLG)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oPG=_v()
_(r,oPG)
if(_oz(z,0,e,s,gg)){oPG.wxVkey=1
var cQG=_n('view')
_rz(z,cQG,'class',1,e,s,gg)
var lSG=_v()
_(cQG,lSG)
var aTG=function(eVG,tUG,bWG,gg){
var xYG=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],eVG,tUG,gg)
var oZG=_mz(z,'view',['bindtap',9,'data-event-opts',1],[],eVG,tUG,gg)
var f1G=_mz(z,'imglazy',['bind:__l',11,'sty',1,'url',2,'vueId',3],[],eVG,tUG,gg)
_(oZG,f1G)
_(xYG,oZG)
_(bWG,xYG)
return bWG
}
lSG.wxXCkey=4
_2z(z,4,aTG,e,s,gg,lSG,'item','index','index')
var oRG=_v()
_(cQG,oRG)
if(_oz(z,15,e,s,gg)){oRG.wxVkey=1
var c2G=_mz(z,'over',['bind:__l',16,'vueId',1],[],e,s,gg)
_(oRG,c2G)
}
oRG.wxXCkey=1
oRG.wxXCkey=3
_(oPG,cQG)
}
oPG.wxXCkey=1
oPG.wxXCkey=3
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var o4G=_n('view')
_rz(z,o4G,'class',0,e,s,gg)
var c5G=_v()
_(o4G,c5G)
if(_oz(z,1,e,s,gg)){c5G.wxVkey=1
var o6G=_mz(z,'empty',['bind:__l',2,'vueId',1],[],e,s,gg)
_(c5G,o6G)
}
else{c5G.wxVkey=2
var l7G=_mz(z,'uni-load-more',['bind:__l',4,'status',1,'vueId',2],[],e,s,gg)
_(c5G,l7G)
}
c5G.wxXCkey=1
c5G.wxXCkey=3
c5G.wxXCkey=3
_(r,o4G)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var t9G=_v()
_(r,t9G)
if(_oz(z,0,e,s,gg)){t9G.wxVkey=1
var e0G=_n('view')
_rz(z,e0G,'class',1,e,s,gg)
var bAH=_v()
_(e0G,bAH)
if(_oz(z,2,e,s,gg)){bAH.wxVkey=1
}
var xCH=_v()
_(e0G,xCH)
var oDH=function(cFH,fEH,hGH,gg){
var cIH=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],cFH,fEH,gg)
var oJH=_mz(z,'imglazy',['bind:__l',10,'sty',1,'url',2,'vueId',3],[],cFH,fEH,gg)
_(cIH,oJH)
_(hGH,cIH)
return hGH
}
xCH.wxXCkey=4
_2z(z,5,oDH,e,s,gg,xCH,'item','index','index')
var oBH=_v()
_(e0G,oBH)
if(_oz(z,14,e,s,gg)){oBH.wxVkey=1
var lKH=_mz(z,'over',['bind:__l',15,'vueId',1],[],e,s,gg)
_(oBH,lKH)
}
bAH.wxXCkey=1
oBH.wxXCkey=1
oBH.wxXCkey=3
_(t9G,e0G)
}
t9G.wxXCkey=1
t9G.wxXCkey=3
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var tMH=_n('view')
_rz(z,tMH,'class',0,e,s,gg)
var bOH=_n('view')
_rz(z,bOH,'style',1,e,s,gg)
var xQH=_mz(z,'uni-nav-bar',['bind:__l',2,'bind:clickLeft',1,'data-event-opts',2,'leftIcon',3,'title',4,'vueId',5],[],e,s,gg)
_(bOH,xQH)
var oPH=_v()
_(bOH,oPH)
if(_oz(z,8,e,s,gg)){oPH.wxVkey=1
}
oPH.wxXCkey=1
_(tMH,bOH)
var eNH=_v()
_(tMH,eNH)
if(_oz(z,9,e,s,gg)){eNH.wxVkey=1
var oRH=_mz(z,'empty',['bind:__l',10,'vueId',1],[],e,s,gg)
_(eNH,oRH)
}
else{eNH.wxVkey=2
var fSH=_v()
_(eNH,fSH)
var cTH=function(oVH,hUH,cWH,gg){
var lYH=_n('view')
_rz(z,lYH,'class',16,oVH,hUH,gg)
var aZH=_mz(z,'view',['bindtap',17,'data-event-opts',1],[],oVH,hUH,gg)
var t1H=_mz(z,'imglazy',['bind:__l',19,'sty',1,'url',2,'vueId',3],[],oVH,hUH,gg)
_(aZH,t1H)
_(lYH,aZH)
var e2H=_n('view')
_rz(z,e2H,'style',23,oVH,hUH,gg)
var o4H=_n('view')
_rz(z,o4H,'class',24,oVH,hUH,gg)
var x5H=_v()
_(o4H,x5H)
if(_oz(z,25,oVH,hUH,gg)){x5H.wxVkey=1
}
var o6H=_v()
_(o4H,o6H)
if(_oz(z,26,oVH,hUH,gg)){o6H.wxVkey=1
}
var f7H=_v()
_(o4H,f7H)
if(_oz(z,27,oVH,hUH,gg)){f7H.wxVkey=1
}
x5H.wxXCkey=1
o6H.wxXCkey=1
f7H.wxXCkey=1
_(e2H,o4H)
var c8H=_mz(z,'uni-number-box',['bind:__l',28,'bind:change',1,'class',2,'data-event-opts',3,'index',4,'min',5,'step',6,'value',7,'vueId',8],[],oVH,hUH,gg)
_(e2H,c8H)
var b3H=_v()
_(e2H,b3H)
if(_oz(z,37,oVH,hUH,gg)){b3H.wxVkey=1
}
b3H.wxXCkey=1
_(lYH,e2H)
_(cWH,lYH)
return cWH
}
fSH.wxXCkey=4
_2z(z,14,cTH,e,s,gg,fSH,'item','index','index')
}
var h9H=_mz(z,'uni-load-more',['bind:__l',38,'status',1,'vueId',2],[],e,s,gg)
_(tMH,h9H)
var o0H=_mz(z,'scrll-top',['bind:__l',41,'vueId',1],[],e,s,gg)
_(tMH,o0H)
eNH.wxXCkey=1
eNH.wxXCkey=3
eNH.wxXCkey=3
_(r,tMH)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var oBI=_n('view')
_rz(z,oBI,'class',0,e,s,gg)
var lCI=_mz(z,'view',['bindtap',1,'data-event-opts',1],[],e,s,gg)
var aDI=_mz(z,'imglazy',['bind:__l',3,'url',1,'vueId',2],[],e,s,gg)
_(lCI,aDI)
_(oBI,lCI)
var tEI=_n('view')
_rz(z,tEI,'class',6,e,s,gg)
var eFI=_v()
_(tEI,eFI)
if(_oz(z,7,e,s,gg)){eFI.wxVkey=1
}
var bGI=_v()
_(tEI,bGI)
if(_oz(z,8,e,s,gg)){bGI.wxVkey=1
}
eFI.wxXCkey=1
bGI.wxXCkey=1
_(oBI,tEI)
var oHI=_mz(z,'view',['class',9,'style',1],[],e,s,gg)
var xII=_v()
_(oHI,xII)
if(_oz(z,11,e,s,gg)){xII.wxVkey=1
}
var oJI=_v()
_(oHI,oJI)
if(_oz(z,12,e,s,gg)){oJI.wxVkey=1
}
var fKI=_v()
_(oHI,fKI)
if(_oz(z,13,e,s,gg)){fKI.wxVkey=1
}
var cLI=_v()
_(oHI,cLI)
if(_oz(z,14,e,s,gg)){cLI.wxVkey=1
}
xII.wxXCkey=1
oJI.wxXCkey=1
fKI.wxXCkey=1
cLI.wxXCkey=1
_(oBI,oHI)
var hMI=_mz(z,'uni-collapse',['bind:__l',15,'style',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var oNI=_v()
_(hMI,oNI)
if(_oz(z,19,e,s,gg)){oNI.wxVkey=1
var aRI=_mz(z,'uni-collapse-item',['bind:__l',20,'center',1,'showAnimation',2,'title',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(oNI,aRI)
}
var cOI=_v()
_(hMI,cOI)
if(_oz(z,26,e,s,gg)){cOI.wxVkey=1
var tSI=_mz(z,'uni-collapse-item',['bind:__l',27,'center',1,'showAnimation',2,'title',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(cOI,tSI)
}
var oPI=_v()
_(hMI,oPI)
if(_oz(z,33,e,s,gg)){oPI.wxVkey=1
var eTI=_mz(z,'uni-collapse-item',['bind:__l',34,'center',1,'showAnimation',2,'title',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(oPI,eTI)
}
var lQI=_v()
_(hMI,lQI)
if(_oz(z,40,e,s,gg)){lQI.wxVkey=1
var bUI=_mz(z,'uni-collapse-item',['bind:__l',41,'center',1,'showAnimation',2,'title',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(lQI,bUI)
}
oNI.wxXCkey=1
oNI.wxXCkey=3
cOI.wxXCkey=1
cOI.wxXCkey=3
oPI.wxXCkey=1
oPI.wxXCkey=3
lQI.wxXCkey=1
lQI.wxXCkey=3
_(oBI,hMI)
var oVI=_mz(z,'uni-number-box',['bind:__l',47,'bind:change',1,'class',2,'data-event-opts',3,'min',4,'step',5,'value',6,'vueId',7],[],e,s,gg)
_(oBI,oVI)
var xWI=_mz(z,'view',['bindtap',55,'catchtouchmove',1,'class',2,'data-event-opts',3],[],e,s,gg)
var oXI=_mz(z,'view',['catchtap',59,'class',1,'data-event-opts',2],[],e,s,gg)
var fYI=_mz(z,'imglazy',['bind:__l',62,'url',1,'vueId',2],[],e,s,gg)
_(oXI,fYI)
_(xWI,oXI)
_(oBI,xWI)
_(r,oBI)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var h1I=_n('view')
var c3I=_n('view')
_rz(z,c3I,'class',0,e,s,gg)
var o4I=_v()
_(c3I,o4I)
if(_oz(z,1,e,s,gg)){o4I.wxVkey=1
}
var l5I=_v()
_(c3I,l5I)
if(_oz(z,2,e,s,gg)){l5I.wxVkey=1
}
var a6I=_v()
_(c3I,a6I)
if(_oz(z,3,e,s,gg)){a6I.wxVkey=1
}
o4I.wxXCkey=1
l5I.wxXCkey=1
a6I.wxXCkey=1
_(h1I,c3I)
var o2I=_v()
_(h1I,o2I)
if(_oz(z,4,e,s,gg)){o2I.wxVkey=1
var t7I=_n('view')
_rz(z,t7I,'style',5,e,s,gg)
var o0I=_v()
_(t7I,o0I)
var xAJ=function(fCJ,oBJ,cDJ,gg){
var oFJ=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],fCJ,oBJ,gg)
var cGJ=_mz(z,'imglazy',['bind:__l',13,'sty',1,'url',2,'vueId',3],[],fCJ,oBJ,gg)
_(oFJ,cGJ)
_(cDJ,oFJ)
return cDJ
}
o0I.wxXCkey=4
_2z(z,8,xAJ,e,s,gg,o0I,'list','index','index')
var e8I=_v()
_(t7I,e8I)
if(_oz(z,17,e,s,gg)){e8I.wxVkey=1
var oHJ=_mz(z,'over',['bind:__l',18,'vueId',1],[],e,s,gg)
_(e8I,oHJ)
}
var b9I=_v()
_(t7I,b9I)
if(_oz(z,20,e,s,gg)){b9I.wxVkey=1
}
e8I.wxXCkey=1
e8I.wxXCkey=3
b9I.wxXCkey=1
_(o2I,t7I)
}
o2I.wxXCkey=1
o2I.wxXCkey=3
_(r,h1I)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var tKJ=_n('view')
var bMJ=_v()
_(tKJ,bMJ)
var oNJ=function(oPJ,xOJ,fQJ,gg){
var hSJ=_mz(z,'imglazy',['bind:__l',4,'sty',1,'url',2,'vueId',3],[],oPJ,xOJ,gg)
_(fQJ,hSJ)
return fQJ
}
bMJ.wxXCkey=4
_2z(z,2,oNJ,e,s,gg,bMJ,'item','index','index')
var eLJ=_v()
_(tKJ,eLJ)
if(_oz(z,8,e,s,gg)){eLJ.wxVkey=1
}
eLJ.wxXCkey=1
_(r,tKJ)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var cUJ=_n('view')
var oVJ=_v()
_(cUJ,oVJ)
if(_oz(z,0,e,s,gg)){oVJ.wxVkey=1
var lWJ=_mz(z,'empty',['bind:__l',1,'vueId',1],[],e,s,gg)
_(oVJ,lWJ)
}
else{oVJ.wxVkey=2
var aXJ=_v()
_(oVJ,aXJ)
if(_oz(z,3,e,s,gg)){aXJ.wxVkey=1
var tYJ=_mz(z,'over',['bind:__l',4,'vueId',1],[],e,s,gg)
_(aXJ,tYJ)
}
aXJ.wxXCkey=1
aXJ.wxXCkey=3
}
oVJ.wxXCkey=1
oVJ.wxXCkey=3
oVJ.wxXCkey=3
_(r,cUJ)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var b1J=_n('view')
var o2J=_v()
_(b1J,o2J)
if(_oz(z,0,e,s,gg)){o2J.wxVkey=1
}
var f5J=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var c6J=_v()
_(f5J,c6J)
if(_oz(z,3,e,s,gg)){c6J.wxVkey=1
var h7J=_n('view')
_rz(z,h7J,'class',4,e,s,gg)
var o8J=_v()
_(h7J,o8J)
if(_oz(z,5,e,s,gg)){o8J.wxVkey=1
}
var c9J=_v()
_(h7J,c9J)
if(_oz(z,6,e,s,gg)){c9J.wxVkey=1
}
o8J.wxXCkey=1
c9J.wxXCkey=1
_(c6J,h7J)
}
else{c6J.wxVkey=2
var o0J=_v()
_(c6J,o0J)
if(_oz(z,7,e,s,gg)){o0J.wxVkey=1
var lAK=_v()
_(o0J,lAK)
var aBK=function(eDK,tCK,bEK,gg){
var xGK=_n('view')
_rz(z,xGK,'class',12,eDK,tCK,gg)
var oHK=_mz(z,'view',['bindtap',13,'data-event-opts',1],[],eDK,tCK,gg)
var fIK=_mz(z,'imglazy',['bind:__l',15,'sty',1,'url',2,'vueId',3],[],eDK,tCK,gg)
_(oHK,fIK)
_(xGK,oHK)
var cJK=_n('view')
_rz(z,cJK,'style',19,eDK,tCK,gg)
var oLK=_mz(z,'uni-number-box',['bind:__l',20,'bind:change',1,'class',2,'data-event-opts',3,'index',4,'min',5,'step',6,'value',7,'vueId',8],[],eDK,tCK,gg)
_(cJK,oLK)
var hKK=_v()
_(cJK,hKK)
if(_oz(z,29,eDK,tCK,gg)){hKK.wxVkey=1
}
hKK.wxXCkey=1
_(xGK,cJK)
_(bEK,xGK)
return bEK
}
lAK.wxXCkey=4
_2z(z,10,aBK,e,s,gg,lAK,'item','index','index')
}
o0J.wxXCkey=1
o0J.wxXCkey=3
}
c6J.wxXCkey=1
c6J.wxXCkey=3
_(b1J,f5J)
var x3J=_v()
_(b1J,x3J)
if(_oz(z,30,e,s,gg)){x3J.wxVkey=1
var cMK=_mz(z,'uni-load-more',['bind:__l',31,'status',1,'vueId',2],[],e,s,gg)
_(x3J,cMK)
}
var o4J=_v()
_(b1J,o4J)
if(_oz(z,34,e,s,gg)){o4J.wxVkey=1
var oNK=_mz(z,'scrll-top',['bind:__l',35,'vueId',1],[],e,s,gg)
_(o4J,oNK)
}
o2J.wxXCkey=1
x3J.wxXCkey=1
x3J.wxXCkey=3
o4J.wxXCkey=1
o4J.wxXCkey=3
_(r,b1J)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var aPK=_n('view')
var tQK=_n('view')
_rz(z,tQK,'class',0,e,s,gg)
var eRK=_mz(z,'uni-nav-bar',['bind:__l',1,'bind:clickLeft',1,'data-event-opts',2,'leftIcon',3,'title',4,'vueId',5],[],e,s,gg)
_(tQK,eRK)
var bSK=_mz(z,'uni-countdown',['backgroundColor',7,'bind:__l',1,'borderColor',2,'color',3,'hour',4,'minute',5,'second',6,'showDay',7,'splitorColor',8,'vueId',9],[],e,s,gg)
_(tQK,bSK)
_(aPK,tQK)
var oTK=_n('view')
_rz(z,oTK,'style',17,e,s,gg)
var xUK=_v()
_(oTK,xUK)
var oVK=function(cXK,fWK,hYK,gg){
var c1K=_n('view')
_rz(z,c1K,'class',22,cXK,fWK,gg)
var o2K=_mz(z,'view',['bindtap',23,'data-event-opts',1],[],cXK,fWK,gg)
var l3K=_mz(z,'imglazy',['bind:__l',25,'sty',1,'url',2,'vueId',3],[],cXK,fWK,gg)
_(o2K,l3K)
_(c1K,o2K)
var a4K=_n('view')
_rz(z,a4K,'style',29,cXK,fWK,gg)
var e6K=_mz(z,'uni-number-box',['bind:__l',30,'bind:change',1,'class',2,'data-event-opts',3,'index',4,'min',5,'step',6,'value',7,'vueId',8],[],cXK,fWK,gg)
_(a4K,e6K)
var t5K=_v()
_(a4K,t5K)
if(_oz(z,39,cXK,fWK,gg)){t5K.wxVkey=1
}
t5K.wxXCkey=1
_(c1K,a4K)
_(hYK,c1K)
return hYK
}
xUK.wxXCkey=4
_2z(z,20,oVK,e,s,gg,xUK,'item','index','index')
var b7K=_mz(z,'uni-load-more',['bind:__l',40,'status',1,'vueId',2],[],e,s,gg)
_(oTK,b7K)
_(aPK,oTK)
_(r,aPK)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var x9K=_v()
_(r,x9K)
if(_oz(z,0,e,s,gg)){x9K.wxVkey=1
}
x9K.wxXCkey=1
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var cBL=_v()
_(r,cBL)
if(_oz(z,0,e,s,gg)){cBL.wxVkey=1
}
cBL.wxXCkey=1
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var oDL=_n('view')
_rz(z,oDL,'class',0,e,s,gg)
var cEL=_n('view')
_rz(z,cEL,'class',1,e,s,gg)
var oFL=_v()
_(cEL,oFL)
if(_oz(z,2,e,s,gg)){oFL.wxVkey=1
}
var lGL=_v()
_(cEL,lGL)
if(_oz(z,3,e,s,gg)){lGL.wxVkey=1
}
oFL.wxXCkey=1
lGL.wxXCkey=1
_(oDL,cEL)
var aHL=_mz(z,'view',['bindtouchend',4,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var tIL=_v()
_(aHL,tIL)
if(_oz(z,10,e,s,gg)){tIL.wxVkey=1
}
var eJL=_n('view')
_rz(z,eJL,'class',11,e,s,gg)
var bKL=_mz(z,'list-cell',['bind:__l',12,'bind:eventClick',1,'data-event-opts',2,'icon',3,'iconColor',4,'title',5,'vueId',6],[],e,s,gg)
_(eJL,bKL)
var oLL=_mz(z,'list-cell',['bind:__l',19,'bind:eventClick',1,'data-event-opts',2,'icon',3,'iconColor',4,'title',5,'vueId',6],[],e,s,gg)
_(eJL,oLL)
var xML=_mz(z,'list-cell',['bind:__l',26,'bind:eventClick',1,'data-event-opts',2,'icon',3,'iconColor',4,'title',5,'vueId',6],[],e,s,gg)
_(eJL,xML)
var oNL=_mz(z,'list-cell',['bind:__l',33,'bind:eventClick',1,'data-event-opts',2,'icon',3,'iconColor',4,'title',5,'vueId',6],[],e,s,gg)
_(eJL,oNL)
var fOL=_mz(z,'list-cell',['bind:__l',40,'bind:eventClick',1,'data-event-opts',2,'icon',3,'iconColor',4,'title',5,'vueId',6],[],e,s,gg)
_(eJL,fOL)
_(aHL,eJL)
tIL.wxXCkey=1
_(oDL,aHL)
_(r,oDL)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/product/product","pages/set/set","pages/cart/cart","pages/user/user","pages/login/login","pages/order/order","pages/address/address","pages/oreder-detail/oreder-detail","pages/repertory/repertory","pages/sale/sale","pages/technology/technology","pages/category/leftCategory","pages/product/list","pages/search/search","pages/market/market","pages/sale-detail/sale-detail","pages/sale-add/sale-add","pages/logistics-add/logistics-add","pages/logistics-list/logistics-list","pages/logistics-detail/logistics-detail","pages/collect/collect","pages/update/update","pages/webview/webview","pages/discounts/discounts","pages/Article/Article","pages/market-detail/market-detail","pages/order-hddata/order-hddata","pages/seckill/seckill"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"熙美诚品","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#f8f8f8"},"tabBar":{"color":"#C0C4CC","selectedColor":"#fa436a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"首页"},{"pagePath":"pages/category/leftCategory","iconPath":"static/tab-cate.png","selectedIconPath":"static/tab-cate-current.png","text":"分类"},{"pagePath":"pages/cart/cart","iconPath":"static/tab-cart.png","selectedIconPath":"static/tab-cart-current.png","text":"购物车"},{"pagePath":"pages/user/user","iconPath":"static/tab-my.png","selectedIconPath":"static/tab-my-current.png","text":"我的"}]},"networkTimeout":{"request":20000,"uploadFile":20000},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"熙美诚品","compilerVersion":"2.3.7","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/empty.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/empty.wxml']=$gwx('./components/empty.wxml');

__wxAppCode__['components/img-lazy/img-lazy.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/img-lazy/img-lazy.wxml']=$gwx('./components/img-lazy/img-lazy.wxml');

__wxAppCode__['components/mix-list-cell.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mix-list-cell.wxml']=$gwx('./components/mix-list-cell.wxml');

__wxAppCode__['components/over.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/over.wxml']=$gwx('./components/over.wxml');

__wxAppCode__['components/share.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/share.wxml']=$gwx('./components/share.wxml');

__wxAppCode__['components/uni-card/uni-card.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-card/uni-card.wxml']=$gwx('./components/uni-card/uni-card.wxml');

__wxAppCode__['components/uni-collapse-item/uni-collapse-item.json']={"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon"},"component":true};
__wxAppCode__['components/uni-collapse-item/uni-collapse-item.wxml']=$gwx('./components/uni-collapse-item/uni-collapse-item.wxml');

__wxAppCode__['components/uni-collapse/uni-collapse.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-collapse/uni-collapse.wxml']=$gwx('./components/uni-collapse/uni-collapse.wxml');

__wxAppCode__['components/uni-countdown/uni-countdown.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-countdown/uni-countdown.wxml']=$gwx('./components/uni-countdown/uni-countdown.wxml');

__wxAppCode__['components/uni-drawer/uni-drawer.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-drawer/uni-drawer.wxml']=$gwx('./components/uni-drawer/uni-drawer.wxml');

__wxAppCode__['components/uni-icon/uni-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icon/uni-icon.wxml']=$gwx('./components/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-nav-bar/uni-nav-bar.json']={"usingComponents":{"uni-status-bar":"/components/uni-status-bar/uni-status-bar","uni-icon":"/components/uni-icon/uni-icon"},"component":true};
__wxAppCode__['components/uni-nav-bar/uni-nav-bar.wxml']=$gwx('./components/uni-nav-bar/uni-nav-bar.wxml');

__wxAppCode__['components/uni-number-box.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-number-box.wxml']=$gwx('./components/uni-number-box.wxml');

__wxAppCode__['components/uni-scrollTo/uni-scrollTo.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-scrollTo/uni-scrollTo.wxml']=$gwx('./components/uni-scrollTo/uni-scrollTo.wxml');

__wxAppCode__['components/uni-status-bar/uni-status-bar.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-status-bar/uni-status-bar.wxml']=$gwx('./components/uni-status-bar/uni-status-bar.wxml');

__wxAppCode__['components/uni-steps/uni-steps.json']={"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon"},"component":true};
__wxAppCode__['components/uni-steps/uni-steps.wxml']=$gwx('./components/uni-steps/uni-steps.wxml');

__wxAppCode__['pages/address/address.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"收货地址","usingComponents":{}};
__wxAppCode__['pages/address/address.wxml']=$gwx('./pages/address/address.wxml');

__wxAppCode__['pages/Article/Article.json']={"navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/Article/Article.wxml']=$gwx('./pages/Article/Article.wxml');

__wxAppCode__['pages/cart/cart.json']={"navigationBarTitleText":"购物车","navigationStyle":"custom","usingComponents":{"uni-number-box":"/components/uni-number-box","uni-drawer":"/components/uni-drawer/uni-drawer","over":"/components/over","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/category/leftCategory.json']={"navigationBarTitleText":"分类","navigationBarTextStyle":"black","usingComponents":{"imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/category/leftCategory.wxml']=$gwx('./pages/category/leftCategory.wxml');

__wxAppCode__['pages/collect/collect.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"我的收藏","usingComponents":{"empty":"/components/empty","over":"/components/over","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/collect/collect.wxml']=$gwx('./pages/collect/collect.wxml');

__wxAppCode__['pages/discounts/discounts.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"代金券","usingComponents":{"empty":"/components/empty"}};
__wxAppCode__['pages/discounts/discounts.wxml']=$gwx('./pages/discounts/discounts.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"首页","titleNView":{"type":"transparent","searchInput":{"backgroundColor":"rgba(231, 231, 231,.7)","borderRadius":"16px","placeholder":"请输入搜索关键词...","disabled":true,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"26","color":"#303133","float":"left","background":"rgba(0,0,0,0)"}]},"usingComponents":{"uni-number-box":"/components/uni-number-box","uni-countdown":"/components/uni-countdown/uni-countdown","over":"/components/over","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"","navigationStyle":"custom","titleNView":false,"animationType":"slide-in-bottom","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/logistics-add/logistics-add.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"申请寄回","usingComponents":{}};
__wxAppCode__['pages/logistics-add/logistics-add.wxml']=$gwx('./pages/logistics-add/logistics-add.wxml');

__wxAppCode__['pages/logistics-detail/logistics-detail.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"寄回详情","usingComponents":{"uni-steps":"/components/uni-steps/uni-steps","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/logistics-detail/logistics-detail.wxml']=$gwx('./pages/logistics-detail/logistics-detail.wxml');

__wxAppCode__['pages/logistics-list/logistics-list.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"寄回产品","usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/logistics-list/logistics-list.wxml']=$gwx('./pages/logistics-list/logistics-list.wxml');

__wxAppCode__['pages/market-detail/market-detail.json']={"usingComponents":{"over":"/components/over"}};
__wxAppCode__['pages/market-detail/market-detail.wxml']=$gwx('./pages/market-detail/market-detail.wxml');

__wxAppCode__['pages/market/market.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"我的销售","usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/market/market.wxml']=$gwx('./pages/market/market.wxml');

__wxAppCode__['pages/order-hddata/order-hddata.json']={"usingComponents":{"uni-card":"/components/uni-card/uni-card","uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar","over":"/components/over","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/order-hddata/order-hddata.wxml']=$gwx('./pages/order-hddata/order-hddata.wxml');

__wxAppCode__['pages/order/order.json']={"enablePullDownRefresh":true,"navigationBarTextStyle":"black","navigationBarTitleText":"我的订单","bounce":"none","usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar","empty":"/components/empty","uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/order/order.wxml']=$gwx('./pages/order/order.wxml');

__wxAppCode__['pages/oreder-detail/oreder-detail.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"订单详情","usingComponents":{"uni-card":"/components/uni-card/uni-card","uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar","over":"/components/over","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/oreder-detail/oreder-detail.wxml']=$gwx('./pages/oreder-detail/oreder-detail.wxml');

__wxAppCode__['pages/product/list.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"商品列表","titleNView":false,"usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar","uni-load-more":"/components/uni-load-more/uni-load-more","uni-number-box":"/components/uni-number-box","empty":"/components/empty","scrll-top":"/components/uni-scrollTo/uni-scrollTo","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/product/list.wxml']=$gwx('./pages/product/list.wxml');

__wxAppCode__['pages/product/product.json']={"navigationBarTitleText":"详情展示","titleNView":{"type":"transparent"},"usingComponents":{"share":"/components/share","uni-number-box":"/components/uni-number-box","uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/product/product.wxml']=$gwx('./pages/product/product.wxml');

__wxAppCode__['pages/repertory/repertory.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"库存查询","usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar","imglazy":"/components/img-lazy/img-lazy","over":"/components/over"}};
__wxAppCode__['pages/repertory/repertory.wxml']=$gwx('./pages/repertory/repertory.wxml');

__wxAppCode__['pages/sale-add/sale-add.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"申报产品","usingComponents":{}};
__wxAppCode__['pages/sale-add/sale-add.wxml']=$gwx('./pages/sale-add/sale-add.wxml');

__wxAppCode__['pages/sale-detail/sale-detail.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"售后详情","usingComponents":{"uni-steps":"/components/uni-steps/uni-steps","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/sale-detail/sale-detail.wxml']=$gwx('./pages/sale-detail/sale-detail.wxml');

__wxAppCode__['pages/sale/sale.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"我的售后","usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar","uni-load-more":"/components/uni-load-more/uni-load-more","empty":"/components/empty","over":"/components/over"}};
__wxAppCode__['pages/sale/sale.wxml']=$gwx('./pages/sale/sale.wxml');

__wxAppCode__['pages/search/search.json']={"navigationStyle":"custom","navigationBarTitleText":"搜索","enablePullDownRefresh":true,"usingComponents":{"uni-number-box":"/components/uni-number-box","uni-load-more":"/components/uni-load-more/uni-load-more","scrll-top":"/components/uni-scrollTo/uni-scrollTo","imglazy":"/components/img-lazy/img-lazy"}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/seckill/seckill.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"限时秒杀","titleNView":false,"usingComponents":{"uni-countdown":"/components/uni-countdown/uni-countdown","uni-number-box":"/components/uni-number-box","uni-load-more":"/components/uni-load-more/uni-load-more","imglazy":"/components/img-lazy/img-lazy","uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/seckill/seckill.wxml']=$gwx('./pages/seckill/seckill.wxml');

__wxAppCode__['pages/set/set.json']={"navigationBarTitleText":"设置","usingComponents":{}};
__wxAppCode__['pages/set/set.wxml']=$gwx('./pages/set/set.wxml');

__wxAppCode__['pages/technology/technology.json']={"navigationBarTextStyle":"black","navigationBarTitleText":"技术支持","usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/technology/technology.wxml']=$gwx('./pages/technology/technology.wxml');

__wxAppCode__['pages/update/update.json']={"navigationBarTitleText":"系统更新","navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/update/update.wxml']=$gwx('./pages/update/update.wxml');

__wxAppCode__['pages/user/user.json']={"navigationStyle":"custom","navigationBarTitleText":"我的","bounce":"none","titleNView":{"type":"transparent","buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"24","color":"#303133","width":"46px","background":"rgba(0,0,0,0)"}]},"usingComponents":{"list-cell":"/components/mix-list-cell"}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/webview/webview.json']={"navigationBarTitleText":"活动","usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/webview/webview.wxml']=$gwx('./pages/webview/webview.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"2a5b":function(e,t,n){},"51cf":function(e,t,n){"use strict";(function(e,t){n("d471"),n("921b");var o=p(n("66fd")),a=p(n("43b6")),u=p(n("8379")),i=p(n("c06f")),c=p(n("3d3b")),r=p(n("747f")),s=p(n("81dd")),l=p(n("9e13")),f=p(n("a701")),d=p(n("3a9a"));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){g(e,t,n[t])})}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o.default.use(f.default),o.default.use(d.default,{loading:n("1909")});var b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(t)&&e.showToast({title:t,duration:n,mask:o,icon:a})},v=function(e){return new Promise(function(t){setTimeout(function(){t(i.default[e])},500)})},h=function(){var e=getCurrentPages(),t=e[e.length-2];return t.$vm},S={id:1002},$=new f.default({locale:"zh",messages:{en:s.default,zh:l.default}});o.default.prototype._i18n=$,o.default.prototype.$current=S,o.default.config.productionTip=!1,o.default.prototype.$fire=new o.default,o.default.prototype.$store=a.default,o.default.prototype.$api={msg:b,json:v,prePage:h},o.default.prototype.$xm=c.default,o.default.prototype.$ajax=r.default,u.default.mpType="app";var y=new o.default(m({i18n:$},u.default));t(y).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])},8379:function(e,t,n){"use strict";n.r(t);var o=n("cea9");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("8aa1");var u,i,c=n("2877"),r=Object(c["a"])(o["default"],u,i,!1,null,null,null);t["default"]=r.exports},"8aa1":function(e,t,n){"use strict";var o=n("2a5b"),a=n.n(o);a.a},bf4c:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("3d3b")),n("2f62");function a(e){return e&&e.__esModule?e:{default:e}}var u,i=n("737f"),c={methods:{createWebSocket:function(){var t="wss://sw.xmvogue.com",n={timeout:3e4,timeoutObj:null,serverTimeoutObj:null,reset:function(){return clearTimeout(this.timeoutObj),clearTimeout(this.serverTimeoutObj),this},start:function(){var a=this;this.timeoutObj=setTimeout(function(){e.sendSocketMessage({data:"keep",success:function(e){n.reset().start()},fail:function(e){console.log(o(e," at App.vue:31"))}}),a.serverTimeoutObj=setTimeout(function(){e.onSocketClose(function(e){console.log(o("WebSocket 已关闭！"," at App.vue:36")),reconnect(t)})},a.timeout)},this.timeout)}};e.connectSocket({url:t}),e.onSocketOpen(function(t){setTimeout(function(){var t=e.getStorageSync("userinfo"),a=getCurrentPages(),u=a[0].route.split("/");console.log(o(a," at App.vue:54"));var i='{"user_id":"'+t.hdid+'","user_name":"'+t.username+'","page":"'+u[2]+'","src":"app"}',c={class:"Xmorder",action:"connect",content:i},r=JSON.stringify(c);e.sendSocketMessage({data:r,success:function(e){console.log(o(r," at App.vue:66")),n.reset().start()},fail:function(e){}})},2e3)}),e.onSocketMessage(function(e){console.log(o(e," at App.vue:78"))})}},computed:{i18n:function(){return this.$t("index")}},onLaunch:function(){u=new i({key:"Y63BZ-KFOWF-LRRJZ-NL52N-OC2F2-T2FPA"})},onShow:function(){if("2"==this.$store.state.app){var t=e.getStorageSync("lang"),n=this;t?("zh"==t.locale&&(this.$i18n.locale="zh"),"en"==t.locale&&(this.$i18n.locale="en"),e.setTabBarItem({index:0,text:n.$t("index").tab1}),e.setTabBarItem({index:1,text:n.$t("index").tab2}),e.setTabBarItem({index:2,text:n.$t("index").tab3}),e.setTabBarItem({index:3,text:n.$t("index").tab4})):this.$i18n.locale="zh",""!=e.getStorageSync("userinfo")&&this.createWebSocket(),this.$request.getclient(),setTimeout(function(){u.reverseGeocoder({location:"",success:function(e){"中国"==e.result.address_component.nation?(n.$store.dispatch("imghideZN"),n.$api.msg(n.$t("index").address+e.result.address_component.nation)):n.$store.dispatch("imgshowEN"),console.log(o(n.$store.getters.imgShow," at App.vue:168"))},fail:function(e){console.log(o("获取当前地址失败"," at App.vue:171"))}})},2e3)}},onHide:function(){e.closeSocket(),e.onSocketClose(function(e){console.log(o("WebSocket 已关闭！"," at App.vue:180"))})}};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},cea9:function(e,t,n){"use strict";n.r(t);var o=n("bf4c"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=a.a}},[["51cf","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (n) {
  function e(e) {
    for (var t, r, s = e[0], c = e[1], a = e[2], l = 0, p = []; l < s.length; l++) {
      r = s[l], i[r] && p.push(i[r][0]), i[r] = 0;
    }

    for (t in c) {
      Object.prototype.hasOwnProperty.call(c, t) && (n[t] = c[t]);
    }

    m && m(e);

    while (p.length) {
      p.shift()();
    }

    return u.push.apply(u, a || []), o();
  }

  function o() {
    for (var n, e = 0; e < u.length; e++) {
      for (var o = u[e], t = !0, r = 1; r < o.length; r++) {
        var s = o[r];
        0 !== i[s] && (t = !1);
      }

      t && (u.splice(e--, 1), n = c(c.s = o[0]));
    }

    return n;
  }

  var t = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      u = [];

  function s(n) {
    return c.p + "" + n + ".js";
  }

  function c(e) {
    if (t[e]) return t[e].exports;
    var o = t[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(o.exports, o, o.exports, c), o.l = !0, o.exports;
  }

  c.e = function (n) {
    var e = [],
        o = {
      "components/img-lazy/img-lazy": 1,
      "components/uni-countdown/uni-countdown": 1,
      "components/uni-number-box": 1,
      "components/share": 1,
      "components/uni-collapse-item/uni-collapse-item": 1,
      "components/uni-collapse/uni-collapse": 1,
      "components/uni-drawer/uni-drawer": 1,
      "components/mix-list-cell": 1,
      "components/empty": 1,
      "components/uni-load-more/uni-load-more": 1,
      "components/uni-nav-bar/uni-nav-bar": 1,
      "components/uni-card/uni-card": 1,
      "components/uni-scrollTo/uni-scrollTo": 1,
      "components/uni-steps/uni-steps": 1,
      "components/uni-icon/uni-icon": 1,
      "components/uni-status-bar/uni-status-bar": 1
    };
    r[n] ? e.push(r[n]) : 0 !== r[n] && o[n] && e.push(r[n] = new Promise(function (e, o) {
      for (var t = ({
        "components/img-lazy/img-lazy": "components/img-lazy/img-lazy",
        "components/over": "components/over",
        "components/uni-countdown/uni-countdown": "components/uni-countdown/uni-countdown",
        "components/uni-number-box": "components/uni-number-box",
        "components/share": "components/share",
        "components/uni-collapse-item/uni-collapse-item": "components/uni-collapse-item/uni-collapse-item",
        "components/uni-collapse/uni-collapse": "components/uni-collapse/uni-collapse",
        "components/uni-drawer/uni-drawer": "components/uni-drawer/uni-drawer",
        "components/mix-list-cell": "components/mix-list-cell",
        "components/empty": "components/empty",
        "components/uni-load-more/uni-load-more": "components/uni-load-more/uni-load-more",
        "components/uni-nav-bar/uni-nav-bar": "components/uni-nav-bar/uni-nav-bar",
        "components/uni-card/uni-card": "components/uni-card/uni-card",
        "components/uni-scrollTo/uni-scrollTo": "components/uni-scrollTo/uni-scrollTo",
        "components/uni-steps/uni-steps": "components/uni-steps/uni-steps",
        "components/uni-icon/uni-icon": "components/uni-icon/uni-icon",
        "components/uni-status-bar/uni-status-bar": "components/uni-status-bar/uni-status-bar"
      }[n] || n) + ".wxss", i = c.p + t, u = document.getElementsByTagName("link"), s = 0; s < u.length; s++) {
        var a = u[s],
            l = a.getAttribute("data-href") || a.getAttribute("href");
        if ("stylesheet" === a.rel && (l === t || l === i)) return e();
      }

      var p = document.getElementsByTagName("style");

      for (s = 0; s < p.length; s++) {
        a = p[s], l = a.getAttribute("data-href");
        if (l === t || l === i) return e();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = e, m.onerror = function (e) {
        var t = e && e.target && e.target.src || i,
            u = new Error("Loading CSS chunk " + n + " failed.\n(" + t + ")");
        u.request = t, delete r[n], m.parentNode.removeChild(m), o(u);
      }, m.href = i;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(m);
    }).then(function () {
      r[n] = 0;
    }));
    var t = i[n];
    if (0 !== t) if (t) e.push(t[2]);else {
      var u = new Promise(function (e, o) {
        t = i[n] = [e, o];
      });
      e.push(t[2] = u);
      var a,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = s(n), a = function a(e) {
        l.onerror = l.onload = null, clearTimeout(p);
        var o = i[n];

        if (0 !== o) {
          if (o) {
            var t = e && ("load" === e.type ? "missing" : e.type),
                r = e && e.target && e.target.src,
                u = new Error("Loading chunk " + n + " failed.\n(" + t + ": " + r + ")");
            u.type = t, u.request = r, o[1](u);
          }

          i[n] = void 0;
        }
      };
      var p = setTimeout(function () {
        a({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = a, document.head.appendChild(l);
    }
    return Promise.all(e);
  }, c.m = n, c.c = t, c.d = function (n, e, o) {
    c.o(n, e) || Object.defineProperty(n, e, {
      enumerable: !0,
      get: o
    });
  }, c.r = function (n) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    });
  }, c.t = function (n, e) {
    if (1 & e && (n = c(n)), 8 & e) return n;
    if (4 & e && "object" === typeof n && n && n.__esModule) return n;
    var o = Object.create(null);
    if (c.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: n
    }), 2 & e && "string" != typeof n) for (var t in n) {
      c.d(o, t, function (e) {
        return n[e];
      }.bind(null, t));
    }
    return o;
  }, c.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n["default"];
    } : function () {
      return n;
    };
    return c.d(e, "a", e), e;
  }, c.o = function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }, c.p = "/", c.oe = function (n) {
    throw console.error(n), n;
  };
  var a = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = a.push.bind(a);
  a.push = e, a = a.slice();

  for (var p = 0; p < a.length; p++) {
    e(a[p]);
  }

  var m = l;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,i){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var n=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(n){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=o(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t}),s="";if(n.length>1){var r=n.pop();s=n.join("---COMMA---"),0===r.indexOf(" at ")?s+=r:s+="---COMMA---"+r}else s=n[0];return s}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},1909:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAVtJREFUaAXt2DGPgzAMBeDr6QQbGxMb//+nsLOxMbHBVKa+KmoUWY1LczYS0mNAmBjz+Jqpt2EYfq52/F4t8DMvQ5/1q1Ga0ooAt4eCY7pEaVNOZRilFRzTJUqbcirDKK3gmC5R2pRTGUZpBcd0idKmnMowSis4pkuUNuVUhl1S+k/5oI9L99cxz3PXdW3b5h55Nd4/duYmpPf/JT1NE2YhR9/3OKdzxfXxTvHg27JcOqSs63rf96ZpcA4vCPnWdY32uc63gY7cLJdelgWJQ8T0TVBHYnxG3C25zvSpr67LQ4MW+bZtq6oKWxbn9MW4E0u9M7Ydv7gV/6mOHx2E4ERcXMfNMI4jmAM2biJKrvN4StFZHloMOrMs3x5nphTvYmgB4lZS2o1WDKa0AHErKe1GKwZTWoC4lZR2oxWDKS1A3EpKu9GKwZQWIG4lpd1oxWBKCxC3ktJutGLwA9ZAg95oozaIAAAAAElFTkSuQmCC"},2877:function(t,e,i){"use strict";function o(t,e,i,o,n,s,r,a){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),o&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):n&&(c=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}i.d(e,"a",function(){return o})},"2dbb":function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(e){return function(i){return new t(!0).update(i)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var i=0;i<c.length;++i){var o=c[i];e[o]=b(o)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(o){if("string"==typeof o)return e.createHash("md5").update(o,"utf8").digest("hex");if(null===o||void 0===o)throw r;return o.constructor===ArrayBuffer&&(o=new Uint8Array(o)),Array.isArray(o)||ArrayBuffer.isView(o)||o.constructor===i?e.createHash("md5").update(new i(o)).digest("hex"):t(o)};return s};t.prototype.update=function(t){if(!this.finalized){var e,i=typeof t;if("string"!==i){if("object"!==i)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var o,n,s=0,c=t.length,l=this.blocks,u=this.buffer8;s<c;){if(this.hashed&&(this.hashed=!1,l[0]=l[16],l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0),e)if(a)for(n=this.start;s<c&&n<64;++s)u[n++]=t[s];else for(n=this.start;s<c&&n<64;++s)l[n>>2]|=t[s]<<y[3&n++];else if(a)for(n=this.start;s<c&&n<64;++s)(o=t.charCodeAt(s))<128?u[n++]=o:o<2048?(u[n++]=192|o>>6,u[n++]=128|63&o):o<55296||o>=57344?(u[n++]=224|o>>12,u[n++]=128|o>>6&63,u[n++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),u[n++]=240|o>>18,u[n++]=128|o>>12&63,u[n++]=128|o>>6&63,u[n++]=128|63&o);else for(n=this.start;s<c&&n<64;++s)(o=t.charCodeAt(s))<128?l[n>>2]|=o<<y[3&n++]:o<2048?(l[n>>2]|=(192|o>>6)<<y[3&n++],l[n>>2]|=(128|63&o)<<y[3&n++]):o<55296||o>=57344?(l[n>>2]|=(224|o>>12)<<y[3&n++],l[n>>2]|=(128|o>>6&63)<<y[3&n++],l[n>>2]|=(128|63&o)<<y[3&n++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),l[n>>2]|=(240|o>>18)<<y[3&n++],l[n>>2]|=(128|o>>12&63)<<y[3&n++],l[n>>2]|=(128|o>>6&63)<<y[3&n++],l[n>>2]|=(128|63&o)<<y[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,e,i,o,n,s,r=this.blocks;this.first?e=((e=((t=((t=r[0]-680876937)<<7|t>>>25)-271733879<<0)^(i=((i=(-271733879^(o=((o=(-1732584194^2004318071&t)+r[1]-117830708)<<12|o>>>20)+t<<0)&(-271733879^t))+r[2]-1126478375)<<17|i>>>15)+o<<0)&(o^t))+r[3]-1316259209)<<22|e>>>10)+i<<0:(t=this.h0,e=this.h1,i=this.h2,e=((e+=((t=((t+=((o=this.h3)^e&(i^o))+r[0]-680876936)<<7|t>>>25)+e<<0)^(i=((i+=(e^(o=((o+=(i^t&(e^i))+r[1]-389564586)<<12|o>>>20)+t<<0)&(t^e))+r[2]+606105819)<<17|i>>>15)+o<<0)&(o^t))+r[3]-1044525330)<<22|e>>>10)+i<<0),e=((e+=((t=((t+=(o^e&(i^o))+r[4]-176418897)<<7|t>>>25)+e<<0)^(i=((i+=(e^(o=((o+=(i^t&(e^i))+r[5]+1200080426)<<12|o>>>20)+t<<0)&(t^e))+r[6]-1473231341)<<17|i>>>15)+o<<0)&(o^t))+r[7]-45705983)<<22|e>>>10)+i<<0,e=((e+=((t=((t+=(o^e&(i^o))+r[8]+1770035416)<<7|t>>>25)+e<<0)^(i=((i+=(e^(o=((o+=(i^t&(e^i))+r[9]-1958414417)<<12|o>>>20)+t<<0)&(t^e))+r[10]-42063)<<17|i>>>15)+o<<0)&(o^t))+r[11]-1990404162)<<22|e>>>10)+i<<0,e=((e+=((t=((t+=(o^e&(i^o))+r[12]+1804603682)<<7|t>>>25)+e<<0)^(i=((i+=(e^(o=((o+=(i^t&(e^i))+r[13]-40341101)<<12|o>>>20)+t<<0)&(t^e))+r[14]-1502002290)<<17|i>>>15)+o<<0)&(o^t))+r[15]+1236535329)<<22|e>>>10)+i<<0,e=((e+=((o=((o+=(e^i&((t=((t+=(i^o&(e^i))+r[1]-165796510)<<5|t>>>27)+e<<0)^e))+r[6]-1069501632)<<9|o>>>23)+t<<0)^t&((i=((i+=(t^e&(o^t))+r[11]+643717713)<<14|i>>>18)+o<<0)^o))+r[0]-373897302)<<20|e>>>12)+i<<0,e=((e+=((o=((o+=(e^i&((t=((t+=(i^o&(e^i))+r[5]-701558691)<<5|t>>>27)+e<<0)^e))+r[10]+38016083)<<9|o>>>23)+t<<0)^t&((i=((i+=(t^e&(o^t))+r[15]-660478335)<<14|i>>>18)+o<<0)^o))+r[4]-405537848)<<20|e>>>12)+i<<0,e=((e+=((o=((o+=(e^i&((t=((t+=(i^o&(e^i))+r[9]+568446438)<<5|t>>>27)+e<<0)^e))+r[14]-1019803690)<<9|o>>>23)+t<<0)^t&((i=((i+=(t^e&(o^t))+r[3]-187363961)<<14|i>>>18)+o<<0)^o))+r[8]+1163531501)<<20|e>>>12)+i<<0,e=((e+=((o=((o+=(e^i&((t=((t+=(i^o&(e^i))+r[13]-1444681467)<<5|t>>>27)+e<<0)^e))+r[2]-51403784)<<9|o>>>23)+t<<0)^t&((i=((i+=(t^e&(o^t))+r[7]+1735328473)<<14|i>>>18)+o<<0)^o))+r[12]-1926607734)<<20|e>>>12)+i<<0,e=((e+=((s=(o=((o+=((n=e^i)^(t=((t+=(n^o)+r[5]-378558)<<4|t>>>28)+e<<0))+r[8]-2022574463)<<11|o>>>21)+t<<0)^t)^(i=((i+=(s^e)+r[11]+1839030562)<<16|i>>>16)+o<<0))+r[14]-35309556)<<23|e>>>9)+i<<0,e=((e+=((s=(o=((o+=((n=e^i)^(t=((t+=(n^o)+r[1]-1530992060)<<4|t>>>28)+e<<0))+r[4]+1272893353)<<11|o>>>21)+t<<0)^t)^(i=((i+=(s^e)+r[7]-155497632)<<16|i>>>16)+o<<0))+r[10]-1094730640)<<23|e>>>9)+i<<0,e=((e+=((s=(o=((o+=((n=e^i)^(t=((t+=(n^o)+r[13]+681279174)<<4|t>>>28)+e<<0))+r[0]-358537222)<<11|o>>>21)+t<<0)^t)^(i=((i+=(s^e)+r[3]-722521979)<<16|i>>>16)+o<<0))+r[6]+76029189)<<23|e>>>9)+i<<0,e=((e+=((s=(o=((o+=((n=e^i)^(t=((t+=(n^o)+r[9]-640364487)<<4|t>>>28)+e<<0))+r[12]-421815835)<<11|o>>>21)+t<<0)^t)^(i=((i+=(s^e)+r[15]+530742520)<<16|i>>>16)+o<<0))+r[2]-995338651)<<23|e>>>9)+i<<0,e=((e+=((o=((o+=(e^((t=((t+=(i^(e|~o))+r[0]-198630844)<<6|t>>>26)+e<<0)|~i))+r[7]+1126891415)<<10|o>>>22)+t<<0)^((i=((i+=(t^(o|~e))+r[14]-1416354905)<<15|i>>>17)+o<<0)|~t))+r[5]-57434055)<<21|e>>>11)+i<<0,e=((e+=((o=((o+=(e^((t=((t+=(i^(e|~o))+r[12]+1700485571)<<6|t>>>26)+e<<0)|~i))+r[3]-1894986606)<<10|o>>>22)+t<<0)^((i=((i+=(t^(o|~e))+r[10]-1051523)<<15|i>>>17)+o<<0)|~t))+r[1]-2054922799)<<21|e>>>11)+i<<0,e=((e+=((o=((o+=(e^((t=((t+=(i^(e|~o))+r[8]+1873313359)<<6|t>>>26)+e<<0)|~i))+r[15]-30611744)<<10|o>>>22)+t<<0)^((i=((i+=(t^(o|~e))+r[6]-1560198380)<<15|i>>>17)+o<<0)|~t))+r[13]+1309151649)<<21|e>>>11)+i<<0,e=((e+=((o=((o+=(e^((t=((t+=(i^(e|~o))+r[4]-145523070)<<6|t>>>26)+e<<0)|~i))+r[11]-1120210379)<<10|o>>>22)+t<<0)^((i=((i+=(t^(o|~e))+r[2]+718787259)<<15|i>>>17)+o<<0)|~t))+r[9]-343485551)<<21|e>>>11)+i<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=i-1732584194<<0,this.h3=o+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+i<<0,this.h3=this.h3+o<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,i=this.h2,o=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]+n[o>>4&15]+n[15&o]+n[o>>12&15]+n[o>>8&15]+n[o>>20&15]+n[o>>16&15]+n[o>>28&15]+n[o>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,i=this.h2,o=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255,255&o,o>>8&255,o>>16&255,o>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,e,i,o="",n=this.array(),s=0;s<15;)t=n[s++],e=n[s++],i=n[s++],o+=p[t>>>2]+p[63&(t<<4|e>>>4)]+p[63&(e<<2|i>>>6)]+p[63&i];return t=n[s],o+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"2f62":function(t,e,i){"use strict";i.r(e),i.d(e,"Store",function(){return m}),i.d(e,"install",function(){return T}),i.d(e,"mapState",function(){return E}),i.d(e,"mapMutations",function(){return O}),i.d(e,"mapGetters",function(){return D}),i.d(e,"mapActions",function(){return L}),i.d(e,"createNamespacedHelpers",function(){return F});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var o=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:o});else{var i=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[o].concat(t.init):o,i.call(this,t)}}function o(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},n="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){n&&(t._devtoolHook=n,n.emit("vuex:init",t),n.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){n.emit("vuex:mutation",t,e)}))}function r(t,e){Object.keys(t).forEach(function(i){return e(t[i],i)})}function a(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var l=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=("function"===typeof i?i():i)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},l.prototype.addChild=function(t,e){this._children[t]=e},l.prototype.removeChild=function(t){delete this._children[t]},l.prototype.getChild=function(t){return this._children[t]},l.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},l.prototype.forEachChild=function(t){r(this._children,t)},l.prototype.forEachGetter=function(t){this._rawModule.getters&&r(this._rawModule.getters,t)},l.prototype.forEachAction=function(t){this._rawModule.actions&&r(this._rawModule.actions,t)},l.prototype.forEachMutation=function(t){this._rawModule.mutations&&r(this._rawModule.mutations,t)},Object.defineProperties(l.prototype,u);var p=function(t){this.register([],t,!1)};function h(t,e,i){if(e.update(i),i.modules)for(var o in i.modules){if(!e.getChild(o))return void 0;h(t.concat(o),e.getChild(o),i.modules[o])}}p.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,i){return e=e.getChild(i),t+(e.namespaced?i+"/":"")},"")},p.prototype.update=function(t){h([],this.root,t)},p.prototype.register=function(t,e,i){var o=this;void 0===i&&(i=!0);var n=new l(e,i);if(0===t.length)this.root=n;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],n)}e.modules&&r(e.modules,function(e,n){o.register(t.concat(n),e,i)})},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),i=t[t.length-1];e.getChild(i).runtime&&e.removeChild(i)};var d;var m=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&T(window.Vue);var i=t.plugins;void 0===i&&(i=[]);var o=t.strict;void 0===o&&(o=!1);var n=t.state;void 0===n&&(n={}),"function"===typeof n&&(n=n()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var r=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(t,e){return c.call(r,t,e)},this.commit=function(t,e,i){return l.call(r,t,e,i)},this.strict=o,x(this,n,[],this._modules.root),v(this,n),i.forEach(function(t){return t(e)}),d.config.devtools&&s(this)},g={state:{configurable:!0}};function f(t,e){return e.indexOf(t)<0&&e.push(t),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var i=t.state;x(t,i,[],t._modules.root,!0),v(t,i,e)}function v(t,e,i){var o=t._vm;t.getters={};var n=t._wrappedGetters,s={};r(n,function(e,i){s[i]=function(){return e(t)},Object.defineProperty(t.getters,i,{get:function(){return t._vm[i]},enumerable:!0})});var a=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:s}),d.config.silent=a,t.strict&&A(t),o&&(i&&t._withCommit(function(){o._data.$$state=null}),d.nextTick(function(){return o.$destroy()}))}function x(t,e,i,o,n){var s=!i.length,r=t._modules.getNamespace(i);if(o.namespaced&&(t._modulesNamespaceMap[r]=o),!s&&!n){var a=S(e,i.slice(0,-1)),c=i[i.length-1];t._withCommit(function(){d.set(a,c,o.state)})}var l=o.context=_(t,r,i);o.forEachMutation(function(e,i){var o=r+i;w(t,o,e,l)}),o.forEachAction(function(e,i){var o=e.root?i:r+i,n=e.handler||e;j(t,o,n,l)}),o.forEachGetter(function(e,i){var o=r+i;k(t,o,e,l)}),o.forEachChild(function(o,s){x(t,e,i.concat(s),o,n)})}function _(t,e,i){var o=""===e,n={dispatch:o?t.dispatch:function(i,o,n){var s=P(i,o,n),r=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,r)},commit:o?t.commit:function(i,o,n){var s=P(i,o,n),r=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,r,a)}};return Object.defineProperties(n,{getters:{get:o?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return S(t.state,i)}}}),n}function b(t,e){var i={},o=e.length;return Object.keys(t.getters).forEach(function(n){if(n.slice(0,o)===e){var s=n.slice(o);Object.defineProperty(i,s,{get:function(){return t.getters[n]},enumerable:!0})}}),i}function w(t,e,i,o){var n=t._mutations[e]||(t._mutations[e]=[]);n.push(function(e){i.call(t,o.state,e)})}function j(t,e,i,o){var n=t._actions[e]||(t._actions[e]=[]);n.push(function(e,n){var s=i.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,n);return c(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}function k(t,e,i,o){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return i(o.state,o.getters,t.state,t.getters)})}function A(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function S(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function P(t,e,i){return a(t)&&t.type&&(i=e,e=t,t=t.type),{type:t,payload:e,options:i}}function T(t){d&&t===d||(d=t,o(d))}g.state.get=function(){return this._vm._data.$$state},g.state.set=function(t){0},m.prototype.commit=function(t,e,i){var o=this,n=P(t,e,i),s=n.type,r=n.payload,a=(n.options,{type:s,payload:r}),c=this._mutations[s];c&&(this._withCommit(function(){c.forEach(function(t){t(r)})}),this._subscribers.forEach(function(t){return t(a,o.state)}))},m.prototype.dispatch=function(t,e){var i=this,o=P(t,e),n=o.type,s=o.payload,r={type:n,payload:s},a=this._actions[n];if(a)return this._actionSubscribers.forEach(function(t){return t(r,i.state)}),a.length>1?Promise.all(a.map(function(t){return t(s)})):a[0](s)},m.prototype.subscribe=function(t){return f(t,this._subscribers)},m.prototype.subscribeAction=function(t){return f(t,this._actionSubscribers)},m.prototype.watch=function(t,e,i){var o=this;return this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,i)},m.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},m.prototype.registerModule=function(t,e,i){void 0===i&&(i={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),x(this,this.state,t,this._modules.get(t),i.preserveState),v(this,this.state)},m.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var i=S(e.state,t.slice(0,-1));d.delete(i,t[t.length-1])}),y(this)},m.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},m.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(m.prototype,g);var E=C(function(t,e){var i={};return M(e).forEach(function(e){var o=e.key,n=e.val;i[o]=function(){var e=this.$store.state,i=this.$store.getters;if(t){var o=$(this.$store,"mapState",t);if(!o)return;e=o.context.state,i=o.context.getters}return"function"===typeof n?n.call(this,e,i):e[n]},i[o].vuex=!0}),i}),O=C(function(t,e){var i={};return M(e).forEach(function(e){var o=e.key,n=e.val;i[o]=function(){var e=[],i=arguments.length;while(i--)e[i]=arguments[i];var o=this.$store.commit;if(t){var s=$(this.$store,"mapMutations",t);if(!s)return;o=s.context.commit}return"function"===typeof n?n.apply(this,[o].concat(e)):o.apply(this.$store,[n].concat(e))}}),i}),D=C(function(t,e){var i={};return M(e).forEach(function(e){var o=e.key,n=e.val;n=t+n,i[o]=function(){if(!t||$(this.$store,"mapGetters",t))return this.$store.getters[n]},i[o].vuex=!0}),i}),L=C(function(t,e){var i={};return M(e).forEach(function(e){var o=e.key,n=e.val;i[o]=function(){var e=[],i=arguments.length;while(i--)e[i]=arguments[i];var o=this.$store.dispatch;if(t){var s=$(this.$store,"mapActions",t);if(!s)return;o=s.context.dispatch}return"function"===typeof n?n.apply(this,[o].concat(e)):o.apply(this.$store,[n].concat(e))}}),i}),F=function(t){return{mapState:E.bind(null,t),mapGetters:D.bind(null,t),mapMutations:O.bind(null,t),mapActions:L.bind(null,t)}};function M(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function C(t){return function(e,i){return"string"!==typeof e?(i=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,i)}}function $(t,e,i){var o=t._modulesNamespaceMap[i];return o}var z={Store:m,install:T,version:"3.0.1",mapState:E,mapMutations:O,mapGetters:D,mapActions:L,createNamespacedHelpers:F};e["default"]=z},"3a9a":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;
/*!
 * Vue-Lazyload.js v1.3.3
 * (c) 2019 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(t){return null==t||"function"!==typeof t&&"object"!==("undefined"===typeof t?"undefined":i(t))},r=function(t,e){if(null===t||"undefined"===typeof t)throw new TypeError("expected first argument to be an object.");if("undefined"===typeof e||"undefined"===typeof Symbol)return t;if("function"!==typeof Object.getOwnPropertySymbols)return t;var i=Object.prototype.propertyIsEnumerable,o=Object(t),n=arguments.length,s=0;while(++s<n)for(var r=Object(arguments[s]),a=Object.getOwnPropertySymbols(r),c=0;c<a.length;c++){var l=a[c];i.call(r,l)&&(o[l]=r[l])}return o},a=Object.prototype.toString,c=function(t){var e="undefined"===typeof t?"undefined":i(t);return"undefined"===e?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?"undefined"!==typeof t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":"undefined"!==typeof Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(e=a.call(t),"[object RegExp]"===e?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Error]"===e?"error":"[object Promise]"===e?"promise":l(t)?"buffer":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Map Iterator]"===e?"mapiterator":"[object Set Iterator]"===e?"setiterator":"[object String Iterator]"===e?"stringiterator":"[object Array Iterator]"===e?"arrayiterator":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object")};function l(t){return t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function u(t){t=t||{};var e=arguments.length,i=0;if(1===e)return t;while(++i<e){var o=arguments[i];s(t)&&(t=o),h(o)&&p(t,o)}return t}function p(t,e){for(var i in r(t,e),e)if("__proto__"!==i&&d(e,i)){var o=e[i];h(o)?("undefined"===c(t[i])&&"function"===c(o)&&(t[i]=o),t[i]=u(t[i]||{},o)):t[i]=o}return t}function h(t){return"object"===c(t)||"function"===c(t)}function d(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var m=u,g="undefined"!==typeof window,f=y();function y(){return!!(g&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}var v={event:"event",observer:"observer"},x=function(){if(g)return"function"===typeof window.CustomEvent?window.CustomEvent:(t.prototype=window.Event.prototype,t);function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}}();function _(t,e){if(t.length){var i=t.indexOf(e);return i>-1?t.splice(i,1):void 0}}function b(t,e){for(var i=!1,o=0,n=t.length;o<n;o++)if(e(t[o])){i=!0;break}return i}function w(t,e){if("IMG"===t.tagName&&t.getAttribute("data-srcset")){var i=t.getAttribute("data-srcset"),o=[],n=t.parentNode,s=n.offsetWidth*e,r=void 0,a=void 0,c=void 0;i=i.trim().split(","),i.map(function(t){t=t.trim(),r=t.lastIndexOf(" "),-1===r?(a=t,c=999998):(a=t.substr(0,r),c=parseInt(t.substr(r+1,t.length-r-2),10)),o.push([c,a])}),o.sort(function(t,e){if(t[0]<e[0])return 1;if(t[0]>e[0])return-1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0});for(var l="",u=void 0,p=0;p<o.length;p++){u=o[p],l=u[1];var h=o[p+1];if(h&&h[0]<s){l=u[1];break}if(!h){l=u[1];break}}return l}}function j(t,e){for(var i=void 0,o=0,n=t.length;o<n;o++)if(e(t[o])){i=t[o];break}return i}var k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return g&&window.devicePixelRatio||t};function A(){if(!g)return!1;var t=!0,e=document;try{var i=e.createElement("object");i.type="image/webp",i.style.visibility="hidden",i.innerHTML="!",e.body.appendChild(i),t=!i.offsetWidth,e.body.removeChild(i)}catch(o){t=!1}return t}function S(t,e){var i=null,o=0;return function(){if(!i){var n=Date.now()-o,s=this,r=arguments,a=function(){o=Date.now(),i=!1,t.apply(s,r)};n>=e?a():i=setTimeout(a,e)}}}function P(){if(g){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(i){}return t}}var T=P(),E={on:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?t.addEventListener(e,i,{capture:o,passive:!0}):t.addEventListener(e,i,o)},off:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.removeEventListener(e,i,o)}},O=function(t,e,i){var o=new Image;if(!t||!t.src){var n=new Error("image src is required");return i(n)}o.src=t.src,o.onload=function(){e({naturalHeight:o.naturalHeight,naturalWidth:o.naturalWidth,src:o.src})},o.onerror=function(t){i(t)}},D=function(t,e){return"undefined"!==typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},L=function(t){return D(t,"overflow")+D(t,"overflow-y")+D(t,"overflow-x")},F=function(t){if(g){if(!(t instanceof HTMLElement))return window;var e=t;while(e){if(e===document.body||e===document.documentElement)break;if(!e.parentNode)break;if(/(scroll|auto)/.test(L(e)))return e;e=e.parentNode}return window}};function M(t){return null!==t&&"object"===("undefined"===typeof t?"undefined":i(t))}function C(t){if(!(t instanceof Object))return[];if(Object.keys)return Object.keys(t);var e=[];for(var i in t)t.hasOwnProperty(i)&&e.push(i);return e}function $(t){for(var e=t.length,i=[],o=0;o<e;o++)i.push(t[o]);return i}function z(){}var R=function(){function t(e){var i=e.max;o(this,t),this.options={max:i||100},this._caches=[]}return n(t,[{key:"has",value:function(t){return this._caches.indexOf(t)>-1}},{key:"add",value:function(t){this.has(t)||(this._caches.push(t),this._caches.length>this.options.max&&this.free())}},{key:"free",value:function(){this._caches.shift()}}]),t}(),I=function(){function e(t){var i=t.el,n=t.src,s=t.error,r=t.loading,a=t.bindType,c=t.$parent,l=t.options,u=t.elRenderer,p=t.imageCache;o(this,e),this.el=i,this.src=n,this.error=s,this.loading=r,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=l,this.rect=null,this.$parent=c,this.elRenderer=u,this._imageCache=p,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return n(e,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(t){this.performanceData[t]=Date.now()}},{key:"update",value:function(t){var e=t.src,i=t.loading,o=t.error,n=this.src;this.src=e,this.loading=i,this.error=o,this.filter(),n!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var t=this;C(this.options.filter).map(function(e){t.options.filter[e](t,t.options)})}},{key:"renderLoading",value:function(e){var i=this;this.state.loading=!0,O({src:this.loading},function(t){i.render("loading",!1),i.state.loading=!1,e()},function(){e(),i.state.loading=!1,i.options.silent||console.warn(t("VueLazyload log: load failed with loading image("+i.loading+")"," at node_modules\\vue-lazyload\\vue-lazyload.esm.js:810"))})}},{key:"load",value:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log(t("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"," at node_modules\\vue-lazyload\\vue-lazyload.esm.js:827")),void i()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,i()):void this.renderLoading(function(){e.attempt++,e.options.adapter["beforeLoad"]&&e.options.adapter["beforeLoad"](e,e.options),e.record("loadStart"),O({src:e.src},function(t){e.naturalHeight=t.naturalHeight,e.naturalWidth=t.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),e.state.rendered=!0,e._imageCache.add(e.src),i()},function(i){!e.options.silent&&console.error(t(i," at node_modules\\vue-lazyload\\vue-lazyload.esm.js:858")),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(t,e){this.elRenderer(this,t,e)}},{key:"performance",value:function(){var t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}},{key:"$destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),H="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",N=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],B={rootMargin:"0px",threshold:0},W=function(e){return function(){function i(t){var e=t.preLoad,n=t.error,s=t.throttleWait,r=t.preLoadTop,a=t.dispatchEvent,c=t.loading,l=t.attempt,u=t.silent,p=void 0===u||u,h=t.scale,d=t.listenEvents,m=(t.hasbind,t.filter),g=t.adapter,f=t.observer,y=t.observerOptions;o(this,i),this.version="1.3.3",this.mode=v.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:p,dispatchEvent:!!a,throttleWait:s||200,preLoad:e||1.3,preLoadTop:r||0,error:n||H,loading:c||H,attempt:l||3,scale:h||k(h),ListenEvents:d||N,hasbind:!1,supportWebp:A(),filter:m||{},adapter:g||{},observer:!!f,observerOptions:y||B},this._initEvent(),this._imageCache=new R({max:200}),this.lazyLoadHandler=S(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?v.observer:v.event)}return n(i,[{key:"config",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m(this.options,t)}},{key:"performance",value:function(){var t=[];return this.ListenerQueue.map(function(e){t.push(e.performance())}),t}},{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),g&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}},{key:"add",value:function(t,i,o){var n=this;if(b(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,i),e.nextTick(this.lazyLoadHandler);var s=this._valueFormatter(i.value),r=s.src,a=s.loading,c=s.error;e.nextTick(function(){r=w(t,n.options.scale)||r,n._observer&&n._observer.observe(t);var s=Object.keys(i.modifiers)[0],l=void 0;s&&(l=o.context.$refs[s],l=l?l.$el||l:document.getElementById(s)),l||(l=F(t));var u=new I({bindType:i.arg,$parent:l,el:t,loading:a,error:c,src:r,elRenderer:n._elRenderer.bind(n),options:n.options,imageCache:n._imageCache});n.ListenerQueue.push(u),g&&(n._addListenerTarget(window),n._addListenerTarget(l)),n.lazyLoadHandler(),e.nextTick(function(){return n.lazyLoadHandler()})})}},{key:"update",value:function(t,i,o){var n=this,s=this._valueFormatter(i.value),r=s.src,a=s.loading,c=s.error;r=w(t,this.options.scale)||r;var l=j(this.ListenerQueue,function(e){return e.el===t});l?l.update({src:r,loading:a,error:c}):this.add(t,i,o),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return n.lazyLoadHandler()})}},{key:"remove",value:function(t){if(t){this._observer&&this._observer.unobserve(t);var e=j(this.ListenerQueue,function(e){return e.el===t});e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),_(this.ListenerQueue,e),e.$destroy())}}},{key:"removeComponent",value:function(t){t&&(_(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(t){var e=this;f||t!==v.observer||(t=v.event),this.mode=t,t===v.event?(this._observer&&(this.ListenerQueue.forEach(function(t){e._observer.unobserve(t.el)}),this._observer=null),this.TargetQueue.forEach(function(t){e._initListen(t.el,!0)})):(this.TargetQueue.forEach(function(t){e._initListen(t.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(t){if(t){var e=j(this.TargetQueue,function(e){return e.el===t});return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===v.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(t){var e=this;this.TargetQueue.forEach(function(i,o){i.el===t&&(i.childrenCount--,i.childrenCount||(e._initListen(i.el,!1),e.TargetQueue.splice(o,1),i=null))})}},{key:"_initListen",value:function(t,e){var i=this;this.options.ListenEvents.forEach(function(o){return E[e?"on":"off"](t,o,i.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var t=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(e,i){t.Event.listeners[e]||(t.Event.listeners[e]=[]),t.Event.listeners[e].push(i)},this.$once=function(e,i){var o=t;function n(){o.$off(e,n),i.apply(o,arguments)}t.$on(e,n)},this.$off=function(e,i){if(i)_(t.Event.listeners[e],i);else{if(!t.Event.listeners[e])return;t.Event.listeners[e].length=0}},this.$emit=function(e,i,o){t.Event.listeners[e]&&t.Event.listeners[e].forEach(function(t){return t(i,o)})}}},{key:"_lazyLoadHandler",value:function(){var t=this,e=[];this.ListenerQueue.forEach(function(t,i){t.el&&t.el.parentNode||e.push(t);var o=t.checkInView();o&&t.load()}),e.forEach(function(e){_(t.ListenerQueue,e),e.$destroy()})}},{key:"_initIntersectionObserver",value:function(){var t=this;f&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(e){t._observer.observe(e.el)}))}},{key:"_observerHandler",value:function(t,e){var i=this;t.forEach(function(t){t.isIntersecting&&i.ListenerQueue.forEach(function(e){if(e.el===t.target){if(e.state.loaded)return i._observer.unobserve(e.el);e.load()}})})}},{key:"_elRenderer",value:function(t,e,i){if(t.el){var o=t.el,n=t.bindType,s=void 0;switch(e){case"loading":s=t.loading;break;case"error":s=t.error;break;default:s=t.src;break}if(n?o.style[n]='url("'+s+'")':o.getAttribute("src")!==s&&o.setAttribute("src",s),o.setAttribute("lazy",e),this.$emit(e,t,i),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){var r=new x(e,{detail:t});o.dispatchEvent(r)}}}},{key:"_valueFormatter",value:function(e){var i=e,o=this.options.loading,n=this.options.error;return M(e)&&(e.src||this.options.silent||console.error(t("Vue Lazyload warning: miss src with "+e," at node_modules\\vue-lazyload\\vue-lazyload.esm.js:1454")),i=e.src,o=e.loading||this.options.loading,n=e.error||this.options.error),{src:i,loading:o,error:n}}}]),i}()},q=function(t){return{props:{tag:{type:String,default:"div"}},render:function(t){return!1===this.show?t(this.tag):t(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),g&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy:function(){return this.$destroy}}}},U=function(){function t(e){var i=e.lazy;o(this,t),this.lazy=i,i.lazyContainerMananger=this,this._queue=[]}return n(t,[{key:"bind",value:function(t,e,i){var o=new G({el:t,binding:e,vnode:i,lazy:this.lazy});this._queue.push(o)}},{key:"update",value:function(t,e,i){var o=j(this._queue,function(e){return e.el===t});o&&o.update({el:t,binding:e,vnode:i})}},{key:"unbind",value:function(t,e,i){var o=j(this._queue,function(e){return e.el===t});o&&(o.clear(),_(this._queue,o))}}]),t}(),V={selector:"img"},G=function(){function t(e){var i=e.el,n=e.binding,s=e.vnode,r=e.lazy;o(this,t),this.el=null,this.vnode=s,this.binding=n,this.options={},this.lazy=r,this._queue=[],this.update({el:i,binding:n})}return n(t,[{key:"update",value:function(t){var e=this,i=t.el,o=t.binding;this.el=i,this.options=m({},V,o.value);var n=this.getImgs();n.forEach(function(t){e.lazy.add(t,m({},e.binding,{value:{src:"dataset"in t?t.dataset.src:t.getAttribute("data-src"),error:("dataset"in t?t.dataset.error:t.getAttribute("data-error"))||e.options.error,loading:("dataset"in t?t.dataset.loading:t.getAttribute("data-loading"))||e.options.loading}}),e.vnode)})}},{key:"getImgs",value:function(){return $(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var t=this,e=this.getImgs();e.forEach(function(e){return t.lazy.remove(e)}),this.vnode=null,this.binding=null,this.lazy=null}}]),t}(),Q=function(e){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:e.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),e.addLazyBox(this),e.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{init:function(){var t=e._valueFormatter(this.src),i=t.src,o=t.loading,n=t.error;this.state.loaded=!1,this.options.src=i,this.options.error=n,this.options.loading=o,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),g&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){var i=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;if(this.state.attempt>this.options.attempt-1&&this.state.error)return e.options.silent||console.log(t("VueLazyload log: "+this.options.src+" tried too more than "+this.options.attempt+" times"," at node_modules\\vue-lazyload\\vue-lazyload.esm.js:1710")),void o();var n=this.options.src;O({src:n},function(t){var e=t.src;i.renderSrc=e,i.state.loaded=!0},function(t){i.state.attempt++,i.renderSrc=i.options.error,i.state.error=!0})}}}},K={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=W(t),o=new i(e),n=new U({lazy:o}),s="2"===t.version.split(".")[0];t.prototype.$Lazyload=o,e.lazyComponent&&t.component("lazy-component",q(o)),e.lazyImage&&t.component("lazy-image",Q(o)),s?(t.directive("lazy",{bind:o.add.bind(o),update:o.update.bind(o),componentUpdated:o.lazyLoadHandler.bind(o),unbind:o.remove.bind(o)}),t.directive("lazy-container",{bind:n.bind.bind(n),componentUpdated:n.update.bind(n),unbind:n.unbind.bind(n)})):(t.directive("lazy",{bind:o.lazyLoadHandler.bind(o),update:function(t,e){m(this.vm.$refs,this.vm.$els),o.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){o.remove(this.el)}}),t.directive("lazy-container",{update:function(t,e){n.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){n.unbind(this.el)}}))}},X=K;e.default=X}).call(this,i("0de9")["default"])},"3b34":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={appid:"__UNI__B16C092"};e.default=o},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},"3d3b":function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="https://api.xmvogue.com",n=Date.now||function(){return(new Date).getTime()},s=Array.isArray||function(t){return t instanceof Array};function r(t,e,i,o){this.post(t,e,i,o)}function a(e,n,s,r){var c=t.getStorageSync("userinfo"),l=t.getStorageSync("lang"),u={uid:c.uid,hdid:c.hdid,sign:c.token,oversea:c.oversea};""!=l&&(u.lang=l.lang),n=Object.assign(u,n),t.request({url:o+e,method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:n,success:function(i){200==i.statusCode?s(i.data):(t.hideLoading(),t.showModal({content:"网络异常,请重新加载",success:function(i){i.confirm&&(t.showToast({title:"正在加载...",image:"../../static/msg.png",duration:1e3}),setTimeout(function(){a(e,n,s,r)},1100))}}))},fail:function(o){if(console.log(i(o," at common\\index.js:70")),t.hideLoading(),t.showModal({content:"网络异常,请重新加载",success:function(i){i.confirm&&(t.showToast({title:"正在加载...",image:"../../static/msg.png",duration:1e3}),setTimeout(function(){a(e,n,s,r)},1100))}}),"request:fail timeout"==o.errMsg)return!1;r(o)},complete:function(){}})}function c(e,n,s,r){var a=t.getStorageSync("userinfo"),c={uid:a.uid,sign:a.token};n=Object.assign(c,n),t.request({url:o+e,method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:n,success:function(t){console.log(i(t," at common\\index.js:124")),s(t)},fail:function(e){console.log(i(e," at common\\index.js:128")),r(e),t.hideLoading()},complete:function(){}})}function l(e,o,n,s){var r=t.getStorageSync("userinfo"),a={uid:r.uid,hdid:r.hdid,sign:r.token,oversea:r.oversea};if("1"==a.oversea&&(a.lang=r.lang),""==r&&!o.version)return t.showToast({title:"请登录后操作",image:"../../static/msg.png",duration:1500}),setTimeout(function(){t.navigateTo({url:"/pages/login/login"})},1500),!1;o=Object.assign(a,o),t.request({url:"http://172.21.8.128/api"+e,method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:o,success:function(t){n(t.data)},fail:function(e){console.log(i(e," at common\\index.js:185")),s(e),t.hideLoading()},complete:function(){}})}function u(t){if("object"===typeof t){var e="";for(var o in t)if("string"!=typeof t[o]&&"number"!=typeof t[o]||(e+=o+"="+t[o]+"&"),"object"==typeof t[o])for(var n in t[o])e+=o+"[]="+t[o][n]+"&";return console.log(i(e," at common\\index.js:248")),e=e.substring(0,e.length-1),e}return t}function p(e,n,s,r){var a=t.getStorageSync("userinfo"),c={uid:a.uid,hdid:a.hdid,sign:a.token};n=Object.assign(c,n),t.request({url:o+e,method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:u(n),success:function(t){console.log(i(t," at common\\index.js:275")),s(t)},fail:function(e){console.log(i(e," at common\\index.js:279")),r(e),t.hideLoading()},complete:function(){}})}function h(t){t=new Date(1e3*t),t.getFullYear();var e=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,i=t.getDate()<10?"0"+t.getDate():t.getDate();t.getHours(),t.getHours(),t.getMinutes(),t.getMinutes(),t.getSeconds(),t.getSeconds();return"".concat(e,"月").concat(i,"日")}function d(t){for(var e=0,i=0;i<t.length;i++){var o=t.charCodeAt(i);o>=1&&o<=126||65376<=o&&o<=65439?e++:e+=2}return e}function m(){var e=t.getStorageSync("userinfo"),o=getCurrentPages(),n=o[0].route.split("/"),s='{"user_id":"'+e.hdid+'","user_name":"'+e.username+'","page":"'+n[2]+'","src":"app"}',r={class:"Xmorder",action:"connect",content:s},a=JSON.stringify(r);console.log(i(a," at common\\index.js:332")),t.sendSocketMessage({data:a,success:function(t){console.log(i(t," at common\\index.js:336"))},fail:function(t){console.log(i(t," at common\\index.js:339"))}})}var g=!1,f="wss://sw.xmvogue.com";function y(){try{t.connectSocket({url:f}),x()}catch(e){}}function v(t){g||(g=!0,setTimeout(function(){y(f),console.log(i("正在重连，当前时间"+new Date," at common\\index.js:366")),g=!1},5e3))}function x(){t.onSocketOpen(function(t){console.log(i("成功连接到"+f," at common\\index.js:376")),setTimeout(function(){m()},2e3),_.reset().start()}),t.onSocketMessage(function(t){var e=t.data.split("arg:"),o=JSON.parse(e[1]);console.log(i(o," at common\\index.js:388"))}),t.onSocketClose(function(t){console.log(i("WebSocket 已关闭！"," at common\\index.js:404")),v(f)}),t.onSocketError(function(t){v(f)})}var _={timeout:15e3,timeoutObj:null,serverTimeoutObj:null,reset:function(){return clearTimeout(this.timeoutObj),clearTimeout(this.serverTimeoutObj),this},start:function(){var e=this;this.timeoutObj=setTimeout(function(){t.sendSocketMessage({data:"keep",success:function(t){_.reset().start()},fail:function(t){console.log(i(t," at common\\index.js:436"))}}),e.serverTimeoutObj=setTimeout(function(){t.onSocketClose(function(t){console.log(i("WebSocket 已关闭！"," at common\\index.js:441")),v(f)})},e.timeout)},this.timeout)}};function b(){plus.runtime.getProperty(plus.runtime.appid,function(e){var o="";o="android"==plus.os.name.toLowerCase()?1:2;var n={version:e.version,type:o};a("/index.php/Home/Version/index",n,function(e){console.log(i(e," at common\\index.js:468")),e.id&&t.navigateTo({url:"/pages/update/update"})})})}function w(){plus.screen.lockOrientation("portrait-primary"),plus.runtime.getProperty(plus.runtime.appid,function(t){console.log(i(t.version," at common\\index.js:483"));var e="",o="";"android"==plus.os.name.toLowerCase()?(e=1,o={type:e,version:t.version,link:"https://service.dcloud.net.cn/build/download/8cccfbe0-b8e5-11e9-8095-1f7572572025",text:"请求余额接口/增加新品上线商品列表/我的库存增加查询搜索关键字/我的订单增加已确认和未确定订单"}):(e=2,o={type:e,version:t.version,link:"https://service.dcloud.net.cn/build/download/8cccfbe0-b8e5-11e9-8095-1f7572572025",text:"ios更新了"}),a("/index.php/Home/Version/check_version",o,function(t){})})}function j(){var t=new Date(new Date-6048e4),e=new Date(t),i=e.getFullYear(),o=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,n=e.getDate()<10?"0"+e.getDate():e.getDate();e.getHours(),e.getHours(),e.getMinutes(),e.getMinutes(),e.getSeconds(),e.getSeconds();return"".concat(i,"-").concat(o,"-").concat(n)}function k(){var t=new Date;t.setMonth(t.getMonth()-1);var e=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,o=t.getDate()<10?"0"+t.getDate():t.getDate();t.getHours(),t.getHours(),t.getMinutes(),t.getMinutes(),t.getSeconds(),t.getSeconds();return"".concat(e,"-").concat(i,"-").concat(o)}function A(){var t=new Date(new Date-864e5),e=new Date(t),i=e.getFullYear(),o=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,n=e.getDate()<10?"0"+e.getDate():e.getDate();e.getHours(),e.getHours(),e.getMinutes(),e.getMinutes(),e.getSeconds(),e.getSeconds();return"".concat(i,"-").concat(o,"-").concat(n)}function S(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,o=t.getDate()<10?"0"+t.getDate():t.getDate();t.getHours(),t.getHours(),t.getMinutes(),t.getMinutes(),t.getSeconds(),t.getSeconds();return"".concat(e,"-").concat(i,"-").concat(o)}function P(e){t.setNavigationBarTitle({title:e})}function T(e){t.showLoading({title:e})}var E={api:o,now:n,isArray:s,postRequest:r,post:a,market:c,ceshi:l,arry:p,formatDate:h,strlen:d,send:m,createWebSocket:y,getclient:b,getserver:w,weekend:j,month:k,yesterday:A,newdata:S,pageTitle:P,load:T};e.default=E}).call(this,i("6e42")["default"],i("0de9")["default"])},"3e59":function(t,e,i){},4362:function(t,e,i){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,o="/";e.cwd=function(){return o},e.chdir=function(e){t||(t=i("df7c")),o=t.resolve(e,o)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"43b6":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(i("66fd")),n=s(i("2f62"));function s(t){return t&&t.__esModule?t:{default:t}}o.default.use(n.default);var r=new n.default.Store({state:{hasLogin:!1,showFooter:!0,userinfo:{},imgStatus:!0,imgUrl:"http://img.xmvogue.com",app:"1"},getters:{isShow:function(t){return t.showFooter},imgGet:function(t){return t.imgStatus},imgShow:function(t){return t.imgUrl}},mutations:{show:function(t){t.showFooter=!0},hide:function(t){t.showFooter=!1},login:function(e,i){e.hasLogin=!0,e.userinfo=i,t.setStorage({key:"userinfo",data:i})},logout:function(e){e.hasLogin=!1,e.userinfo={},t.removeStorage({key:"userinfo"}),t.removeStorage({key:"getlist"}),t.removeStorage({key:"radio"}),t.removeStorage({key:"collectlist"}),t.removeStorage({key:"list"}),t.removeStorage({key:"lang"})},navLogin:function(e){t.showToast({title:"请登录后操作",image:"../../static/msg.png",duration:1500}),setTimeout(function(){t.navigateTo({url:"/pages/login/login"})},1500)},imgZN:function(t){t.imgStatus=!0,t.imgStatus?t.imgUrl="http://img.xmvogue.com":t.imgUrl="http://hwimg.xmvogue.com"},imgEN:function(t){t.imgStatus=!1,t.imgStatus?t.imgUrl="http://img.xmvogue.com":t.imgUrl="http://hwimg.xmvogue.com"}},actions:{hideFooter:function(t){t.commit("hide")},showFooter:function(t){t.commit("show")},showLogin:function(t){t.commit("navLogin")},imghideZN:function(t){t.commit("imgZN")},imgshowEN:function(t){t.commit("imgEN")}}}),a=r;e.default=a}).call(this,i("6e42")["default"])},"66fd":function(t,e,i){"use strict";i.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({});function o(t){return void 0===t||null===t}function n(t){return void 0!==t&&null!==t}function s(t){return!0===t}function r(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function u(t){return"[object Object]"===l.call(t)}function p(t){return"[object RegExp]"===l.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return n(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function f(t,e){for(var i=Object.create(null),o=t.split(","),n=0;n<o.length;n++)i[o[n]]=!0;return e?function(t){return i[t.toLowerCase()]}:function(t){return i[t]}}f("slot,component",!0);var y=f("key,ref,slot,slot-scope,is");function v(t,e){if(t.length){var i=t.indexOf(e);if(i>-1)return t.splice(i,1)}}var x=Object.prototype.hasOwnProperty;function _(t,e){return x.call(t,e)}function b(t){var e=Object.create(null);return function(i){var o=e[i];return o||(e[i]=t(i))}}var w=/-(\w)/g,j=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),k=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/\B([A-Z])/g,S=b(function(t){return t.replace(A,"-$1").toLowerCase()});function P(t,e){function i(i){var o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,i):t.call(e)}return i._length=t.length,i}function T(t,e){return t.bind(e)}var E=Function.prototype.bind?T:P;function O(t,e){e=e||0;var i=t.length-e,o=new Array(i);while(i--)o[i]=t[i+e];return o}function D(t,e){for(var i in e)t[i]=e[i];return t}function L(t){for(var e={},i=0;i<t.length;i++)t[i]&&D(e,t[i]);return e}function F(t,e,i){}var M=function(t,e,i){return!1},C=function(t){return t};function $(t,e){if(t===e)return!0;var i=c(t),o=c(e);if(!i||!o)return!i&&!o&&String(t)===String(e);try{var n=Array.isArray(t),s=Array.isArray(e);if(n&&s)return t.length===e.length&&t.every(function(t,i){return $(t,e[i])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(n||s)return!1;var r=Object.keys(t),a=Object.keys(e);return r.length===a.length&&r.every(function(i){return $(t[i],e[i])})}catch(l){return!1}}function z(t,e){for(var i=0;i<t.length;i++)if($(t[i],e))return i;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var I=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],N={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:F,parsePlatformTagName:C,mustUseProp:M,async:!0,_lifecycleHooks:H},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function q(t,e,i,o){Object.defineProperty(t,e,{value:i,enumerable:!!o,writable:!0,configurable:!0})}var U=new RegExp("[^"+B.source+".$_\\d]");function V(t){if(!U.test(t)){var e=t.split(".");return function(t){for(var i=0;i<e.length;i++){if(!t)return;t=t[e[i]]}return t}}}var G,Q="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),J=K&&window.navigator.userAgent.toLowerCase(),Z=J&&/msie|trident/.test(J),tt=(J&&J.indexOf("msie 9.0"),J&&J.indexOf("edge/")>0),et=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===Y),it=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/),{}.watch);if(K)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ot)}catch(en){}var nt=function(){return void 0===G&&(G=!K&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},st=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function rt(t){return"function"===typeof t&&/native code/.test(t.toString())}var at,ct="undefined"!==typeof Symbol&&rt(Symbol)&&"undefined"!==typeof Reflect&&rt(Reflect.ownKeys);at="undefined"!==typeof Set&&rt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var lt=F,ut=0,pt=function(){this.id=ut++,this.subs=[]};function ht(t){pt.SharedObject.targetStack.push(t),pt.SharedObject.target=t}function dt(){pt.SharedObject.targetStack.pop(),pt.SharedObject.target=pt.SharedObject.targetStack[pt.SharedObject.targetStack.length-1]}pt.prototype.addSub=function(t){this.subs.push(t)},pt.prototype.removeSub=function(t){v(this.subs,t)},pt.prototype.depend=function(){pt.SharedObject.target&&pt.SharedObject.target.addDep(this)},pt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,i=t.length;e<i;e++)t[e].update()},pt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},pt.SharedObject.target=null,pt.SharedObject.targetStack=[];var mt=function(t,e,i,o,n,s,r,a){this.tag=t,this.data=e,this.children=i,this.text=o,this.elm=n,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(mt.prototype,gt);var ft=function(t){void 0===t&&(t="");var e=new mt;return e.text=t,e.isComment=!0,e};function yt(t){return new mt(void 0,void 0,void 0,String(t))}function vt(t){var e=new mt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var xt=Array.prototype,_t=Object.create(xt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=xt[t];q(_t,t,function(){var i=[],o=arguments.length;while(o--)i[o]=arguments[o];var n,s=e.apply(this,i),r=this.__ob__;switch(t){case"push":case"unshift":n=i;break;case"splice":n=i.slice(2);break}return n&&r.observeArray(n),r.dep.notify(),s})});var wt=Object.getOwnPropertyNames(_t),jt=!0;function kt(t){jt=t}var At=function(t){this.value=t,this.dep=new pt,this.vmCount=0,q(t,"__ob__",this),Array.isArray(t)?(Q?t.push!==t.__proto__.push?Pt(t,_t,wt):St(t,_t):Pt(t,_t,wt),this.observeArray(t)):this.walk(t)};function St(t,e){t.__proto__=e}function Pt(t,e,i){for(var o=0,n=i.length;o<n;o++){var s=i[o];q(t,s,e[s])}}function Tt(t,e){var i;if(c(t)&&!(t instanceof mt))return _(t,"__ob__")&&t.__ob__ instanceof At?i=t.__ob__:jt&&!nt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(i=new At(t)),e&&i&&i.vmCount++,i}function Et(t,e,i,o,n){var s=new pt,r=Object.getOwnPropertyDescriptor(t,e);if(!r||!1!==r.configurable){var a=r&&r.get,c=r&&r.set;a&&!c||2!==arguments.length||(i=t[e]);var l=!n&&Tt(i);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):i;return pt.SharedObject.target&&(s.depend(),l&&(l.dep.depend(),Array.isArray(e)&&Lt(e))),e},set:function(e){var o=a?a.call(t):i;e===o||e!==e&&o!==o||a&&!c||(c?c.call(t,e):i=e,l=!n&&Tt(e),s.notify())}})}}function Ot(t,e,i){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,i),i;if(e in t&&!(e in Object.prototype))return t[e]=i,i;var o=t.__ob__;return t._isVue||o&&o.vmCount?i:o?(Et(o.value,e,i),o.dep.notify(),i):(t[e]=i,i)}function Dt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var i=t.__ob__;t._isVue||i&&i.vmCount||_(t,e)&&(delete t[e],i&&i.dep.notify())}}function Lt(t){for(var e=void 0,i=0,o=t.length;i<o;i++)e=t[i],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Lt(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)Et(t,e[i])},At.prototype.observeArray=function(t){for(var e=0,i=t.length;e<i;e++)Tt(t[e])};var Ft=N.optionMergeStrategies;function Mt(t,e){if(!e)return t;for(var i,o,n,s=ct?Reflect.ownKeys(e):Object.keys(e),r=0;r<s.length;r++)i=s[r],"__ob__"!==i&&(o=t[i],n=e[i],_(t,i)?o!==n&&u(o)&&u(n)&&Mt(o,n):Ot(t,i,n));return t}function Ct(t,e,i){return i?function(){var o="function"===typeof e?e.call(i,i):e,n="function"===typeof t?t.call(i,i):t;return o?Mt(o,n):n}:e?t?function(){return Mt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function $t(t,e){var i=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return i?zt(i):i}function zt(t){for(var e=[],i=0;i<t.length;i++)-1===e.indexOf(t[i])&&e.push(t[i]);return e}function Rt(t,e,i,o){var n=Object.create(t||null);return e?D(n,e):n}Ft.data=function(t,e,i){return i?Ct(t,e,i):e&&"function"!==typeof e?t:Ct(t,e)},H.forEach(function(t){Ft[t]=$t}),I.forEach(function(t){Ft[t+"s"]=Rt}),Ft.watch=function(t,e,i,o){if(t===it&&(t=void 0),e===it&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var s in D(n,t),e){var r=n[s],a=e[s];r&&!Array.isArray(r)&&(r=[r]),n[s]=r?r.concat(a):Array.isArray(a)?a:[a]}return n},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,i,o){if(!t)return e;var n=Object.create(null);return D(n,t),e&&D(n,e),n},Ft.provide=Ct;var It=function(t,e){return void 0===e?t:e};function Ht(t,e){var i=t.props;if(i){var o,n,s,r={};if(Array.isArray(i)){o=i.length;while(o--)n=i[o],"string"===typeof n&&(s=j(n),r[s]={type:null})}else if(u(i))for(var a in i)n=i[a],s=j(a),r[s]=u(n)?n:{type:n};else 0;t.props=r}}function Nt(t,e){var i=t.inject;if(i){var o=t.inject={};if(Array.isArray(i))for(var n=0;n<i.length;n++)o[i[n]]={from:i[n]};else if(u(i))for(var s in i){var r=i[s];o[s]=u(r)?D({from:s},r):{from:r}}else 0}}function Bt(t){var e=t.directives;if(e)for(var i in e){var o=e[i];"function"===typeof o&&(e[i]={bind:o,update:o})}}function Wt(t,e,i){if("function"===typeof e&&(e=e.options),Ht(e,i),Nt(e,i),Bt(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,i)),e.mixins))for(var o=0,n=e.mixins.length;o<n;o++)t=Wt(t,e.mixins[o],i);var s,r={};for(s in t)a(s);for(s in e)_(t,s)||a(s);function a(o){var n=Ft[o]||It;r[o]=n(t[o],e[o],i,o)}return r}function qt(t,e,i,o){if("string"===typeof i){var n=t[e];if(_(n,i))return n[i];var s=j(i);if(_(n,s))return n[s];var r=k(s);if(_(n,r))return n[r];var a=n[i]||n[s]||n[r];return a}}function Ut(t,e,i,o){var n=e[t],s=!_(i,t),r=i[t],a=Kt(Boolean,n.type);if(a>-1)if(s&&!_(n,"default"))r=!1;else if(""===r||r===S(t)){var c=Kt(String,n.type);(c<0||a<c)&&(r=!0)}if(void 0===r){r=Vt(o,n,t);var l=jt;kt(!0),Tt(r),kt(l)}return r}function Vt(t,e,i){if(_(e,"default")){var o=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[i]&&void 0!==t._props[i]?t._props[i]:"function"===typeof o&&"Function"!==Gt(e.type)?o.call(t):o}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Qt(t,e){return Gt(t)===Gt(e)}function Kt(t,e){if(!Array.isArray(e))return Qt(e,t)?0:-1;for(var i=0,o=e.length;i<o;i++)if(Qt(e[i],t))return i;return-1}function Xt(t,e,i){ht();try{if(e){var o=e;while(o=o.$parent){var n=o.$options.errorCaptured;if(n)for(var s=0;s<n.length;s++)try{var r=!1===n[s].call(o,t,e,i);if(r)return}catch(en){Jt(en,o,"errorCaptured hook")}}}Jt(t,e,i)}finally{dt()}}function Yt(t,e,i,o,n){var s;try{s=i?t.apply(e,i):t.call(e),s&&!s._isVue&&d(s)&&!s._handled&&(s.catch(function(t){return Xt(t,o,n+" (Promise/async)")}),s._handled=!0)}catch(en){Xt(en,o,n)}return s}function Jt(t,e,i){if(N.errorHandler)try{return N.errorHandler.call(null,t,e,i)}catch(en){en!==t&&Zt(en,null,"config.errorHandler")}Zt(t,e,i)}function Zt(t,e,i){if(!K&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ie=!1;function oe(){ie=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&rt(Promise)){var ne=Promise.resolve();te=function(){ne.then(oe),et&&setTimeout(F)}}else if(Z||"undefined"===typeof MutationObserver||!rt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&rt(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var se=1,re=new MutationObserver(oe),ae=document.createTextNode(String(se));re.observe(ae,{characterData:!0}),te=function(){se=(se+1)%2,ae.data=String(se)}}function ce(t,e){var i;if(ee.push(function(){if(t)try{t.call(e)}catch(en){Xt(en,e,"nextTick")}else i&&i(e)}),ie||(ie=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}var le=new at;function ue(t){pe(t,le),le.clear()}function pe(t,e){var i,o,n=Array.isArray(t);if(!(!n&&!c(t)||Object.isFrozen(t)||t instanceof mt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(n){i=t.length;while(i--)pe(t[i],e)}else{o=Object.keys(t),i=o.length;while(i--)pe(t[o[i]],e)}}}var he=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var i="~"===t.charAt(0);t=i?t.slice(1):t;var o="!"===t.charAt(0);return t=o?t.slice(1):t,{name:t,once:i,capture:o,passive:e}});function de(t,e){function i(){var t=arguments,o=i.fns;if(!Array.isArray(o))return Yt(o,null,arguments,e,"v-on handler");for(var n=o.slice(),s=0;s<n.length;s++)Yt(n[s],null,t,e,"v-on handler")}return i.fns=t,i}function me(t,e,i,n,r,a){var c,l,u,p;for(c in t)l=t[c],u=e[c],p=he(c),o(l)||(o(u)?(o(l.fns)&&(l=t[c]=de(l,a)),s(p.once)&&(l=t[c]=r(p.name,l,p.capture)),i(p.name,l,p.capture,p.passive,p.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)o(t[c])&&(p=he(c),n(p.name,e[c],p.capture))}function ge(t,e,i){var s=e.options.props;if(!o(s)){var r={},a=t.attrs,c=t.props;if(n(a)||n(c))for(var l in s){var u=S(l);fe(r,c,l,u,!0)||fe(r,a,l,u,!1)}return r}}function fe(t,e,i,o,s){if(n(e)){if(_(e,i))return t[i]=e[i],s||delete e[i],!0;if(_(e,o))return t[i]=e[o],s||delete e[o],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ve(t){return a(t)?[yt(t)]:Array.isArray(t)?_e(t):void 0}function xe(t){return n(t)&&n(t.text)&&r(t.isComment)}function _e(t,e){var i,r,c,l,u=[];for(i=0;i<t.length;i++)r=t[i],o(r)||"boolean"===typeof r||(c=u.length-1,l=u[c],Array.isArray(r)?r.length>0&&(r=_e(r,(e||"")+"_"+i),xe(r[0])&&xe(l)&&(u[c]=yt(l.text+r[0].text),r.shift()),u.push.apply(u,r)):a(r)?xe(l)?u[c]=yt(l.text+r):""!==r&&u.push(yt(r)):xe(r)&&xe(l)?u[c]=yt(l.text+r.text):(s(t._isVList)&&n(r.tag)&&o(r.key)&&n(e)&&(r.key="__vlist"+e+"_"+i+"__"),u.push(r)));return u}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=je(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach(function(i){Et(t,i,e[i])}),kt(!0))}function je(t,e){if(t){for(var i=Object.create(null),o=ct?Reflect.ownKeys(t):Object.keys(t),n=0;n<o.length;n++){var s=o[n];if("__ob__"!==s){var r=t[s].from,a=e;while(a){if(a._provided&&_(a._provided,r)){i[s]=a._provided[r];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;i[s]="function"===typeof c?c.call(e):c}else 0}}return i}}function ke(t,e){if(!t||!t.length)return{};for(var i={},o=0,n=t.length;o<n;o++){var s=t[o],r=s.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,s.context!==e&&s.fnContext!==e||!r||null==r.slot)s.asyncMeta&&s.asyncMeta.data&&"page"===s.asyncMeta.data.slot?(i["page"]||(i["page"]=[])).push(s):(i.default||(i.default=[])).push(s);else{var a=r.slot,c=i[a]||(i[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var l in i)i[l].every(Ae)&&delete i[l];return i}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Se(t,e,o){var n,s=Object.keys(e).length>0,r=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(r&&o&&o!==i&&a===o.$key&&!s&&!o.$hasNormal)return o;for(var c in n={},t)t[c]&&"$"!==c[0]&&(n[c]=Pe(e,c,t[c]))}else n={};for(var l in e)l in n||(n[l]=Te(e,l));return t&&Object.isExtensible(t)&&(t._normalized=n),q(n,"$stable",r),q(n,"$key",a),q(n,"$hasNormal",s),n}function Pe(t,e,i){var o=function(){var t=arguments.length?i.apply(null,arguments):i({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ve(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return i.proxy&&Object.defineProperty(t,e,{get:o,enumerable:!0,configurable:!0}),o}function Te(t,e){return function(){return t[e]}}function Ee(t,e){var i,o,s,r,a;if(Array.isArray(t)||"string"===typeof t)for(i=new Array(t.length),o=0,s=t.length;o<s;o++)i[o]=e(t[o],o);else if("number"===typeof t)for(i=new Array(t),o=0;o<t;o++)i[o]=e(o+1,o);else if(c(t))if(ct&&t[Symbol.iterator]){i=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)i.push(e(u.value,i.length)),u=l.next()}else for(r=Object.keys(t),i=new Array(r.length),o=0,s=r.length;o<s;o++)a=r[o],i[o]=e(t[a],a,o);return n(i)||(i=[]),i._isVList=!0,i}function Oe(t,e,i,o){var n,s=this.$scopedSlots[t];s?(i=i||{},o&&(i=D(D({},o),i)),n=s(i)||e):n=this.$slots[t]||e;var r=i&&i.slot;return r?this.$createElement("template",{slot:r},n):n}function De(t){return qt(this.$options,"filters",t,!0)||C}function Le(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Fe(t,e,i,o,n){var s=N.keyCodes[e]||i;return n&&o&&!N.keyCodes[e]?Le(n,o):s?Le(s,t):o?S(o)!==e:void 0}function Me(t,e,i,o,n){if(i)if(c(i)){var s;Array.isArray(i)&&(i=L(i));var r=function(r){if("class"===r||"style"===r||y(r))s=t;else{var a=t.attrs&&t.attrs.type;s=o||N.mustUseProp(e,a,r)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=j(r),l=S(r);if(!(c in s)&&!(l in s)&&(s[r]=i[r],n)){var u=t.on||(t.on={});u["update:"+r]=function(t){i[r]=t}}};for(var a in i)r(a)}else;return t}function Ce(t,e){var i=this._staticTrees||(this._staticTrees=[]),o=i[t];return o&&!e?o:(o=i[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),ze(o,"__static__"+t,!1),o)}function $e(t,e,i){return ze(t,"__once__"+e+(i?"_"+i:""),!0),t}function ze(t,e,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)t[o]&&"string"!==typeof t[o]&&Re(t[o],e+"_"+o,i);else Re(t,e,i)}function Re(t,e,i){t.isStatic=!0,t.key=e,t.isOnce=i}function Ie(t,e){if(e)if(u(e)){var i=t.on=t.on?D({},t.on):{};for(var o in e){var n=i[o],s=e[o];i[o]=n?[].concat(n,s):s}}else;return t}function He(t,e,i,o){e=e||{$stable:!i};for(var n=0;n<t.length;n++){var s=t[n];Array.isArray(s)?He(s,e,i):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return o&&(e.$key=o),e}function Ne(t,e){for(var i=0;i<e.length;i+=2){var o=e[i];"string"===typeof o&&o&&(t[e[i]]=e[i+1])}return t}function Be(t,e){return"string"===typeof t?e+t:t}function We(t){t._o=$e,t._n=g,t._s=m,t._l=Ee,t._t=Oe,t._q=$,t._i=z,t._m=Ce,t._f=De,t._k=Fe,t._b=Me,t._v=yt,t._e=ft,t._u=He,t._g=Ie,t._d=Ne,t._p=Be}function qe(t,e,o,n,r){var a,c=this,l=r.options;_(n,"_uid")?(a=Object.create(n),a._original=n):(a=n,n=n._original);var u=s(l._compiled),p=!u;this.data=t,this.props=e,this.children=o,this.parent=n,this.listeners=t.on||i,this.injections=je(l.inject,n),this.slots=function(){return c.$slots||Se(t.scopedSlots,c.$slots=ke(o,n)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Se(t.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Se(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,i,o){var s=oi(a,t,e,i,o,p);return s&&!Array.isArray(s)&&(s.fnScopeId=l._scopeId,s.fnContext=n),s}:this._c=function(t,e,i,o){return oi(a,t,e,i,o,p)}}function Ue(t,e,o,s,r){var a=t.options,c={},l=a.props;if(n(l))for(var u in l)c[u]=Ut(u,l,e||i);else n(o.attrs)&&Ge(c,o.attrs),n(o.props)&&Ge(c,o.props);var p=new qe(o,c,r,s,t),h=a.render.call(null,p._c,p);if(h instanceof mt)return Ve(h,o,p.parent,a,p);if(Array.isArray(h)){for(var d=ve(h)||[],m=new Array(d.length),g=0;g<d.length;g++)m[g]=Ve(d[g],o,p.parent,a,p);return m}}function Ve(t,e,i,o,n){var s=vt(t);return s.fnContext=i,s.fnOptions=o,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function Ge(t,e){for(var i in e)t[j(i)]=e[i]}We(qe.prototype);var Qe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var i=t;Qe.prepatch(i,i)}else{var o=t.componentInstance=Ye(t,wi);o.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var i=e.componentOptions,o=e.componentInstance=t.componentInstance;Si(o,i.propsData,i.listeners,e,i.children)},insert:function(t){var e=t.context,i=t.componentInstance;i._isMounted||(i._isMounted=!0,Oi(i,"mounted")),t.data.keepAlive&&(e._isMounted?Bi(i):Ti(i,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Ei(e,!0):e.$destroy())}},Ke=Object.keys(Qe);function Xe(t,e,i,r,a){if(!o(t)){var l=i.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(o(t.cid)&&(u=t,t=di(u,l),void 0===t))return hi(u,e,i,r,a);e=e||{},po(t),n(e.model)&&ti(t.options,e);var p=ge(e,t,a);if(s(t.options.functional))return Ue(t,p,e,i,r);var h=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Je(e);var m=t.options.name||a,g=new mt("vue-component-"+t.cid+(m?"-"+m:""),e,void 0,void 0,void 0,i,{Ctor:t,propsData:p,listeners:h,tag:a,children:r},u);return g}}}function Ye(t,e){var i={_isComponent:!0,_parentVnode:t,parent:e},o=t.data.inlineTemplate;return n(o)&&(i.render=o.render,i.staticRenderFns=o.staticRenderFns),new t.componentOptions.Ctor(i)}function Je(t){for(var e=t.hook||(t.hook={}),i=0;i<Ke.length;i++){var o=Ke[i],n=e[o],s=Qe[o];n===s||n&&n._merged||(e[o]=n?Ze(s,n):s)}}function Ze(t,e){var i=function(i,o){t(i,o),e(i,o)};return i._merged=!0,i}function ti(t,e){var i=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[i]=e.model.value;var s=e.on||(e.on={}),r=s[o],a=e.model.callback;n(r)?(Array.isArray(r)?-1===r.indexOf(a):r!==a)&&(s[o]=[a].concat(r)):s[o]=a}var ei=1,ii=2;function oi(t,e,i,o,n,r){return(Array.isArray(i)||a(i))&&(n=o,o=i,i=void 0),s(r)&&(n=ii),ni(t,e,i,o,n)}function ni(t,e,i,o,s){if(n(i)&&n(i.__ob__))return ft();if(n(i)&&n(i.is)&&(e=i.is),!e)return ft();var r,a,c;(Array.isArray(o)&&"function"===typeof o[0]&&(i=i||{},i.scopedSlots={default:o[0]},o.length=0),s===ii?o=ve(o):s===ei&&(o=ye(o)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||N.getTagNamespace(e),r=N.isReservedTag(e)?new mt(N.parsePlatformTagName(e),i,o,void 0,void 0,t):i&&i.pre||!n(c=qt(t.$options,"components",e))?new mt(e,i,o,void 0,void 0,t):Xe(c,i,t,o,e)):r=Xe(e,i,t,o);return Array.isArray(r)?r:n(r)?(n(a)&&si(r,a),n(i)&&ri(i),r):ft()}function si(t,e,i){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,i=!0),n(t.children))for(var r=0,a=t.children.length;r<a;r++){var c=t.children[r];n(c.tag)&&(o(c.ns)||s(i)&&"svg"!==c.tag)&&si(c,e,i)}}function ri(t){c(t.style)&&ue(t.style),c(t.class)&&ue(t.class)}function ai(t){t._vnode=null,t._staticTrees=null;var e=t.$options,o=t.$vnode=e._parentVnode,n=o&&o.context;t.$slots=ke(e._renderChildren,n),t.$scopedSlots=i,t._c=function(e,i,o,n){return oi(t,e,i,o,n,!1)},t.$createElement=function(e,i,o,n){return oi(t,e,i,o,n,!0)};var s=o&&o.data;Et(t,"$attrs",s&&s.attrs||i,null,!0),Et(t,"$listeners",e._parentListeners||i,null,!0)}var ci,li=null;function ui(t){We(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,i=e.$options,o=i.render,n=i._parentVnode;n&&(e.$scopedSlots=Se(n.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=n;try{li=e,t=o.call(e._renderProxy,e.$createElement)}catch(en){Xt(en,e,"render"),t=e._vnode}finally{li=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof mt||(t=ft()),t.parent=n,t}}function pi(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function hi(t,e,i,o,n){var s=ft();return s.asyncFactory=t,s.asyncMeta={data:e,context:i,children:o,tag:n},s}function di(t,e){if(s(t.error)&&n(t.errorComp))return t.errorComp;if(n(t.resolved))return t.resolved;var i=li;if(i&&n(t.owners)&&-1===t.owners.indexOf(i)&&t.owners.push(i),s(t.loading)&&n(t.loadingComp))return t.loadingComp;if(i&&!n(t.owners)){var r=t.owners=[i],a=!0,l=null,u=null;i.$on("hook:destroyed",function(){return v(r,i)});var p=function(t){for(var e=0,i=r.length;e<i;e++)r[e].$forceUpdate();t&&(r.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},h=R(function(i){t.resolved=pi(i,e),a?r.length=0:p(!0)}),m=R(function(e){n(t.errorComp)&&(t.error=!0,p(!0))}),g=t(h,m);return c(g)&&(d(g)?o(t.resolved)&&g.then(h,m):d(g.component)&&(g.component.then(h,m),n(g.error)&&(t.errorComp=pi(g.error,e)),n(g.loading)&&(t.loadingComp=pi(g.loading,e),0===g.delay?t.loading=!0:l=setTimeout(function(){l=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,p(!1))},g.delay||200)),n(g.timeout)&&(u=setTimeout(function(){u=null,o(t.resolved)&&m(null)},g.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function mi(t){return t.isComment&&t.asyncFactory}function gi(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var i=t[e];if(n(i)&&(n(i.componentOptions)||mi(i)))return i}}function fi(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&_i(t,e)}function yi(t,e){ci.$on(t,e)}function vi(t,e){ci.$off(t,e)}function xi(t,e){var i=ci;return function o(){var n=e.apply(null,arguments);null!==n&&i.$off(t,o)}}function _i(t,e,i){ci=t,me(e,i||{},yi,vi,xi,t),ci=void 0}function bi(t){var e=/^hook:/;t.prototype.$on=function(t,i){var o=this;if(Array.isArray(t))for(var n=0,s=t.length;n<s;n++)o.$on(t[n],i);else(o._events[t]||(o._events[t]=[])).push(i),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var i=this;function o(){i.$off(t,o),e.apply(i,arguments)}return o.fn=e,i.$on(t,o),i},t.prototype.$off=function(t,e){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(t)){for(var o=0,n=t.length;o<n;o++)i.$off(t[o],e);return i}var s,r=i._events[t];if(!r)return i;if(!e)return i._events[t]=null,i;var a=r.length;while(a--)if(s=r[a],s===e||s.fn===e){r.splice(a,1);break}return i},t.prototype.$emit=function(t){var e=this,i=e._events[t];if(i){i=i.length>1?O(i):i;for(var o=O(arguments,1),n='event handler for "'+t+'"',s=0,r=i.length;s<r;s++)Yt(i[s],e,o,e,n)}return e}}var wi=null;function ji(t){var e=wi;return wi=t,function(){wi=e}}function ki(t){var e=t.$options,i=e.parent;if(i&&!e.abstract){while(i.$options.abstract&&i.$parent)i=i.$parent;i.$children.push(t)}t.$parent=i,t.$root=i?i.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ai(t){t.prototype._update=function(t,e){var i=this,o=i.$el,n=i._vnode,s=ji(i);i._vnode=t,i.$el=n?i.__patch__(n,t):i.__patch__(i.$el,t,e,!1),s(),o&&(o.__vue__=null),i.$el&&(i.$el.__vue__=i),i.$vnode&&i.$parent&&i.$vnode===i.$parent._vnode&&(i.$parent.$el=i.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Oi(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||v(e.$children,t),t._watcher&&t._watcher.teardown();var i=t._watchers.length;while(i--)t._watchers[i].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Oi(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Si(t,e,o,n,s){var r=n.data.scopedSlots,a=t.$scopedSlots,c=!!(r&&!r.$stable||a!==i&&!a.$stable||r&&t.$scopedSlots.$key!==r.$key),l=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=n,t.$vnode=n,t._vnode&&(t._vnode.parent=n),t.$options._renderChildren=s,t.$attrs=n.data.attrs||i,t.$listeners=o||i,e&&t.$options.props){kt(!1);for(var u=t._props,p=t.$options._propKeys||[],h=0;h<p.length;h++){var d=p[h],m=t.$options.props;u[d]=Ut(d,m,e,t)}kt(!0),t.$options.propsData=e}o=o||i;var g=t.$options._parentListeners;t.$options._parentListeners=o,_i(t,o,g),l&&(t.$slots=ke(s,n.context),t.$forceUpdate())}function Pi(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Ti(t,e){if(e){if(t._directInactive=!1,Pi(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var i=0;i<t.$children.length;i++)Ti(t.$children[i]);Oi(t,"activated")}}function Ei(t,e){if((!e||(t._directInactive=!0,!Pi(t)))&&!t._inactive){t._inactive=!0;for(var i=0;i<t.$children.length;i++)Ei(t.$children[i]);Oi(t,"deactivated")}}function Oi(t,e){ht();var i=t.$options[e],o=e+" hook";if(i)for(var n=0,s=i.length;n<s;n++)Yt(i[n],t,null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Di=[],Li=[],Fi={},Mi=!1,Ci=!1,$i=0;function zi(){$i=Di.length=Li.length=0,Fi={},Mi=Ci=!1}var Ri=Date.now;if(K&&!Z){var Ii=window.performance;Ii&&"function"===typeof Ii.now&&Ri()>document.createEvent("Event").timeStamp&&(Ri=function(){return Ii.now()})}function Hi(){var t,e;for(Ri(),Ci=!0,Di.sort(function(t,e){return t.id-e.id}),$i=0;$i<Di.length;$i++)t=Di[$i],t.before&&t.before(),e=t.id,Fi[e]=null,t.run();var i=Li.slice(),o=Di.slice();zi(),Wi(i),Ni(o),st&&N.devtools&&st.emit("flush")}function Ni(t){var e=t.length;while(e--){var i=t[e],o=i.vm;o._watcher===i&&o._isMounted&&!o._isDestroyed&&Oi(o,"updated")}}function Bi(t){t._inactive=!1,Li.push(t)}function Wi(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Ti(t[e],!0)}function qi(t){var e=t.id;if(null==Fi[e]){if(Fi[e]=!0,Ci){var i=Di.length-1;while(i>$i&&Di[i].id>t.id)i--;Di.splice(i+1,0,t)}else Di.push(t);Mi||(Mi=!0,ce(Hi))}}var Ui=0,Vi=function(t,e,i,o,n){this.vm=t,n&&(t._watcher=this),t._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=i,this.id=++Ui,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new at,this.newDepIds=new at,this.expression="","function"===typeof e?this.getter=e:(this.getter=V(e),this.getter||(this.getter=F)),this.value=this.lazy?void 0:this.get()};Vi.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(en){if(!this.user)throw en;Xt(en,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),dt(),this.cleanupDeps()}return t},Vi.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Vi.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},Vi.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():qi(this)},Vi.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(en){Xt(en,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Vi.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Vi.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Vi.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Gi={enumerable:!0,configurable:!0,get:F,set:F};function Qi(t,e,i){Gi.get=function(){return this[e][i]},Gi.set=function(t){this[e][i]=t},Object.defineProperty(t,i,Gi)}function Ki(t){t._watchers=[];var e=t.$options;e.props&&Xi(t,e.props),e.methods&&no(t,e.methods),e.data?Yi(t):Tt(t._data={},!0),e.computed&&to(t,e.computed),e.watch&&e.watch!==it&&so(t,e.watch)}function Xi(t,e){var i=t.$options.propsData||{},o=t._props={},n=t.$options._propKeys=[],s=!t.$parent;s||kt(!1);var r=function(s){n.push(s);var r=Ut(s,e,i,t);Et(o,s,r),s in t||Qi(t,"_props",s)};for(var a in e)r(a);kt(!0)}function Yi(t){var e=t.$options.data;e=t._data="function"===typeof e?Ji(e,t):e||{},u(e)||(e={});var i=Object.keys(e),o=t.$options.props,n=(t.$options.methods,i.length);while(n--){var s=i[n];0,o&&_(o,s)||W(s)||Qi(t,"_data",s)}Tt(e,!0)}function Ji(t,e){ht();try{return t.call(e,e)}catch(en){return Xt(en,e,"data()"),{}}finally{dt()}}var Zi={lazy:!0};function to(t,e){var i=t._computedWatchers=Object.create(null),o=nt();for(var n in e){var s=e[n],r="function"===typeof s?s:s.get;0,o||(i[n]=new Vi(t,r||F,F,Zi)),n in t||eo(t,n,s)}}function eo(t,e,i){var o=!nt();"function"===typeof i?(Gi.get=o?io(e):oo(i),Gi.set=F):(Gi.get=i.get?o&&!1!==i.cache?io(e):oo(i.get):F,Gi.set=i.set||F),Object.defineProperty(t,e,Gi)}function io(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),pt.SharedObject.target&&e.depend(),e.value}}function oo(t){return function(){return t.call(this,this)}}function no(t,e){t.$options.props;for(var i in e)t[i]="function"!==typeof e[i]?F:E(e[i],t)}function so(t,e){for(var i in e){var o=e[i];if(Array.isArray(o))for(var n=0;n<o.length;n++)ro(t,i,o[n]);else ro(t,i,o)}}function ro(t,e,i,o){return u(i)&&(o=i,i=i.handler),"string"===typeof i&&(i=t[i]),t.$watch(e,i,o)}function ao(t){var e={get:function(){return this._data}},i={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",i),t.prototype.$set=Ot,t.prototype.$delete=Dt,t.prototype.$watch=function(t,e,i){var o=this;if(u(e))return ro(o,t,e,i);i=i||{},i.user=!0;var n=new Vi(o,t,e,i);if(i.immediate)try{e.call(o,n.value)}catch(s){Xt(s,o,'callback for immediate watcher "'+n.expression+'"')}return function(){n.teardown()}}}var co=0;function lo(t){t.prototype._init=function(t){var e=this;e._uid=co++,e._isVue=!0,t&&t._isComponent?uo(e,t):e.$options=Wt(po(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ki(e),fi(e),ai(e),Oi(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Ki(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Oi(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function uo(t,e){var i=t.$options=Object.create(t.constructor.options),o=e._parentVnode;i.parent=e.parent,i._parentVnode=o;var n=o.componentOptions;i.propsData=n.propsData,i._parentListeners=n.listeners,i._renderChildren=n.children,i._componentTag=n.tag,e.render&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns)}function po(t){var e=t.options;if(t.super){var i=po(t.super),o=t.superOptions;if(i!==o){t.superOptions=i;var n=ho(t);n&&D(t.extendOptions,n),e=t.options=Wt(i,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function ho(t){var e,i=t.options,o=t.sealedOptions;for(var n in i)i[n]!==o[n]&&(e||(e={}),e[n]=i[n]);return e}function mo(t){this._init(t)}function go(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var i=O(arguments,1);return i.unshift(this),"function"===typeof t.install?t.install.apply(t,i):"function"===typeof t&&t.apply(null,i),e.push(t),this}}function fo(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function yo(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var i=this,o=i.cid,n=t._Ctor||(t._Ctor={});if(n[o])return n[o];var s=t.name||i.options.name;var r=function(t){this._init(t)};return r.prototype=Object.create(i.prototype),r.prototype.constructor=r,r.cid=e++,r.options=Wt(i.options,t),r["super"]=i,r.options.props&&vo(r),r.options.computed&&xo(r),r.extend=i.extend,r.mixin=i.mixin,r.use=i.use,I.forEach(function(t){r[t]=i[t]}),s&&(r.options.components[s]=r),r.superOptions=i.options,r.extendOptions=t,r.sealedOptions=D({},r.options),n[o]=r,r}}function vo(t){var e=t.options.props;for(var i in e)Qi(t.prototype,"_props",i)}function xo(t){var e=t.options.computed;for(var i in e)eo(t.prototype,i,e[i])}function _o(t){I.forEach(function(e){t[e]=function(t,i){return i?("component"===e&&u(i)&&(i.name=i.name||t,i=this.options._base.extend(i)),"directive"===e&&"function"===typeof i&&(i={bind:i,update:i}),this.options[e+"s"][t]=i,i):this.options[e+"s"][t]}})}function bo(t){return t&&(t.Ctor.options.name||t.tag)}function wo(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function jo(t,e){var i=t.cache,o=t.keys,n=t._vnode;for(var s in i){var r=i[s];if(r){var a=bo(r.componentOptions);a&&!e(a)&&ko(i,s,o,n)}}}function ko(t,e,i,o){var n=t[e];!n||o&&n.tag===o.tag||n.componentInstance.$destroy(),t[e]=null,v(i,e)}lo(mo),ao(mo),bi(mo),Ai(mo),ui(mo);var Ao=[String,RegExp,Array],So={name:"keep-alive",abstract:!0,props:{include:Ao,exclude:Ao,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ko(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){jo(t,function(t){return wo(e,t)})}),this.$watch("exclude",function(e){jo(t,function(t){return!wo(e,t)})})},render:function(){var t=this.$slots.default,e=gi(t),i=e&&e.componentOptions;if(i){var o=bo(i),n=this,s=n.include,r=n.exclude;if(s&&(!o||!wo(s,o))||r&&o&&wo(r,o))return e;var a=this,c=a.cache,l=a.keys,u=null==e.key?i.Ctor.cid+(i.tag?"::"+i.tag:""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,v(l,u),l.push(u)):(c[u]=e,l.push(u),this.max&&l.length>parseInt(this.max)&&ko(c,l[0],l,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Po={KeepAlive:So};function To(t){var e={get:function(){return N}};Object.defineProperty(t,"config",e),t.util={warn:lt,extend:D,mergeOptions:Wt,defineReactive:Et},t.set=Ot,t.delete=Dt,t.nextTick=ce,t.observable=function(t){return Tt(t),t},t.options=Object.create(null),I.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,D(t.options.components,Po),go(t),fo(t),yo(t),_o(t)}To(mo),Object.defineProperty(mo.prototype,"$isServer",{get:nt}),Object.defineProperty(mo.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(mo,"FunctionalRenderContext",{value:qe}),mo.version="2.6.10";var Eo="[object Array]",Oo="[object Object]";function Do(t,e){var i={};return Lo(t,e),Fo(t,e,"",i),i}function Lo(t,e){if(t!==e){var i=Co(t),o=Co(e);if(i==Oo&&o==Oo){if(Object.keys(t).length>=Object.keys(e).length)for(var n in e){var s=t[n];void 0===s?t[n]=null:Lo(s,e[n])}}else i==Eo&&o==Eo&&t.length>=e.length&&e.forEach(function(e,i){Lo(t[i],e)})}}function Fo(t,e,i,o){if(t!==e){var n=Co(t),s=Co(e);if(n==Oo)if(s!=Oo||Object.keys(t).length<Object.keys(e).length)Mo(o,i,t);else{var r=function(n){var s=t[n],r=e[n],a=Co(s),c=Co(r);if(a!=Eo&&a!=Oo)s!=e[n]&&Mo(o,(""==i?"":i+".")+n,s);else if(a==Eo)c!=Eo?Mo(o,(""==i?"":i+".")+n,s):s.length<r.length?Mo(o,(""==i?"":i+".")+n,s):s.forEach(function(t,e){Fo(t,r[e],(""==i?"":i+".")+n+"["+e+"]",o)});else if(a==Oo)if(c!=Oo||Object.keys(s).length<Object.keys(r).length)Mo(o,(""==i?"":i+".")+n,s);else for(var l in s)Fo(s[l],r[l],(""==i?"":i+".")+n+"."+l,o)};for(var a in t)r(a)}else n==Eo?s!=Eo?Mo(o,i,t):t.length<e.length?Mo(o,i,t):t.forEach(function(t,n){Fo(t,e[n],i+"["+n+"]",o)}):Mo(o,i,t)}}function Mo(t,e,i){t[e]=i}function Co(t){return Object.prototype.toString.call(t)}function $o(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var i=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var o=0;o<i.length;o++)i[o]()}}function zo(t){return Di.find(function(e){return t._watcher===e})}function Ro(t,e){if(!t.__next_tick_pending&&!zo(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var o=t.$scope;console.log("["+ +new Date+"]["+(o.is||o.route)+"]["+t._uid+"]:nextMPTick")}var n;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(en){Xt(en,t,"nextTick")}else n&&n(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}function Io(t){var e=Object.create(null),i=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return i.reduce(function(e,i){return e[i]=t[i],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ho=function(t,e){var i=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var o=this.$scope,n=Object.create(null);try{n=Io(this)}catch(a){console.error(a)}n.__webviewId__=o.data.__webviewId__;var s=Object.create(null);Object.keys(n).forEach(function(t){s[t]=o.data[t]});var r=Do(n,s);Object.keys(r).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(o.is||o.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,o.setData(r,function(){i.__next_tick_pending=!1,$o(i)})):$o(this)}};function No(){}function Bo(t,e,i){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=No),t.$options.render||(t.$options.render=No),"mp-toutiao"!==t.mpHost&&Oi(t,"beforeMount");var o=function(){t._update(t._render(),i)};return new Vi(t,o,F,{before:function(){t._isMounted&&!t._isDestroyed&&Oi(t,"beforeUpdate")}},!0),i=!1,t}function Wo(t,e){return n(t)||n(e)?qo(t,Uo(e)):""}function qo(t,e){return t?e?t+" "+e:t:e||""}function Uo(t){return Array.isArray(t)?Vo(t):c(t)?Go(t):"string"===typeof t?t:""}function Vo(t){for(var e,i="",o=0,s=t.length;o<s;o++)n(e=Uo(t[o]))&&""!==e&&(i&&(i+=" "),i+=e);return i}function Go(t){var e="";for(var i in t)t[i]&&(e&&(e+=" "),e+=i);return e}var Qo=b(function(t){var e={},i=/;(?![^(]*\))/g,o=/:(.+)/;return t.split(i).forEach(function(t){if(t){var i=t.split(o);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e});function Ko(t){return Array.isArray(t)?L(t):"string"===typeof t?Qo(t):t}var Xo=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yo(t,e){var i=e.split("."),o=i[0];return 0===o.indexOf("__$n")&&(o=parseInt(o.replace("__$n",""))),1===i.length?t[o]:Yo(t[o],i.slice(1).join("."))}function Jo(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:O(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ro(this,t)},Xo.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var i=this;ht();var o,n=i.$options[t],s=t+" hook";if(n)for(var r=0,a=n.length;r<a;r++)o=Yt(n[r],i,e?[e]:null,i,s);return i._hasHookEvent&&i.$emit("hook:"+t),dt(),o},t.prototype.__set_model=function(t,e,i,o){Array.isArray(o)&&(-1!==o.indexOf("trim")&&(i=i.trim()),-1!==o.indexOf("number")&&(i=this._n(i))),t||(t=this),t[e]=i},t.prototype.__set_sync=function(t,e,i){t||(t=this),t[e]=i},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yo(e||this,t)},t.prototype.__get_class=function(t,e){return Wo(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var i=Ko(t),o=e?D(e,i):i;return Object.keys(o).map(function(t){return S(t)+":"+o[t]}).join(";")},t.prototype.__map=function(t,e){var i,o,n,s,r;if(Array.isArray(t)){for(i=new Array(t.length),o=0,n=t.length;o<n;o++)i[o]=e(t[o],o);return i}if(c(t)){for(s=Object.keys(t),i=Object.create(null),o=0,n=s.length;o<n;o++)r=s[o],i[r]=e(t[r],r,o);return i}return[]}}var Zo=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function tn(t){var e=t.extend;t.extend=function(t){t=t||{};var i=t.methods;return i&&Object.keys(i).forEach(function(e){-1!==Zo.indexOf(e)&&(t[e]=i[e],delete i[e])}),e.call(this,t)};var i=t.config.optionMergeStrategies,o=i.created;Zo.forEach(function(t){i[t]=o}),t.prototype.__lifecycle_hooks__=Zo}mo.prototype.__patch__=Ho,mo.prototype.$mount=function(t,e){return Bo(this,t,e)},tn(mo),Jo(mo),e["default"]=mo}.call(this,i("c8ba"))},"6a98":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=[{name:"女装",foods:[{name:"A字裙",key:"A字裙",icon:"http://img.kiwifruits.cn/classify/1/1.jpg",cat:10},{name:"T恤",key:"T恤",icon:"http://img.kiwifruits.cn/classify/1/2.jpg",cat:10},{name:"半身裙",key:"半身裙",icon:"http://img.kiwifruits.cn/classify/1/3.jpg",cat:10},{name:"衬衫",key:"衬衫",icon:"http://img.kiwifruits.cn/classify/1/4.jpg",cat:10},{name:"短裙",key:"短裙",icon:"http://img.kiwifruits.cn/classify/1/5.jpg",cat:10},{name:"阔腿裤",key:"阔腿裤",icon:"http://img.kiwifruits.cn/classify/1/6.jpg",cat:10},{name:"连衣裙",key:"连衣裙",icon:"http://img.kiwifruits.cn/classify/1/7.jpg",cat:10},{name:"妈妈装",key:"妈妈装",icon:"http://img.kiwifruits.cn/classify/1/8.jpg",cat:10},{name:"牛仔裤",key:"牛仔裤",icon:"http://img.kiwifruits.cn/classify/1/9.jpg",cat:10},{name:"情侣装",key:"情侣装",icon:"http://img.kiwifruits.cn/classify/1/10.jpg",cat:10},{name:"休闲裤",key:"休闲裤",icon:"http://img.kiwifruits.cn/classify/1/11.jpg",cat:10},{name:"雪纺衫",key:"雪纺衫",icon:"http://img.kiwifruits.cn/classify/1/12.jpg",cat:10},{name:"防晒衣",key:"防晒衣",icon:"http://img.kiwifruits.cn/classify/1/13.jpg",cat:10},{name:"礼服/婚纱",key:"礼服婚纱",icon:"http://img.kiwifruits.cn/classify/1/14.jpg",cat:10}]},{name:"美食",foods:[{name:"火锅",key:"火锅",icon:"http://img.kiwifruits.cn/classify/2/1.jpg",cat:6},{name:"糕点饼干",key:"糕点饼干",icon:"http://img.kiwifruits.cn/classify/2/2.jpg",cat:6},{name:"坚果果干",key:"坚果果干",icon:"http://img.kiwifruits.cn/classify/2/3.jpg",cat:6},{name:"酒类",key:"酒类",icon:"http://img.kiwifruits.cn/classify/2/4.jpg",cat:6},{name:"辣条",key:"辣条",icon:"http://img.kiwifruits.cn/classify/2/5.jpg",cat:6},{name:"大礼包",key:"大礼包",icon:"http://img.kiwifruits.cn/classify/2/6.jpg",cat:6},{name:"精品茗茶",key:"茶",icon:"http://img.kiwifruits.cn/classify/2/7.jpg",cat:6},{name:"休闲食品",key:"休闲食品",icon:"http://img.kiwifruits.cn/classify/2/8.jpg",cat:6},{name:"糖果巧克力",key:"糖果巧克力",icon:"http://img.kiwifruits.cn/classify/2/9.jpg",cat:6},{name:"方便速食",key:"方便速食",icon:"http://img.kiwifruits.cn/classify/2/10.jpg",cat:6},{name:"营养代餐",key:"营养代餐",icon:"http://img.kiwifruits.cn/classify/2/11.jpg",cat:6},{name:"粮油副食",key:"粮油",icon:"http://img.kiwifruits.cn/classify/2/12.jpg",cat:6},{name:"生鲜水果",key:"水果",icon:"http://img.kiwifruits.cn/classify/2/13.jpg",cat:6},{name:"饮品",key:"饮品",icon:"http://img.kiwifruits.cn/classify/2/14.jpg",cat:6}]},{name:"美妆",foods:[{name:"化妆刷",key:"化妆刷",icon:"http://img.kiwifruits.cn/classify/3/1.jpg",cat:3},{name:"粉底",key:"粉底",icon:"http://img.kiwifruits.cn/classify/3/2.jpg",cat:3},{name:"洗发护发",key:"洗发护发",icon:"http://img.kiwifruits.cn/classify/3/3.jpg",cat:3},{name:"美容工具",key:"美容工具",icon:"http://img.kiwifruits.cn/classify/3/4.jpg",cat:3},{name:"眼部护理",key:"眼部护理",icon:"http://img.kiwifruits.cn/classify/3/5.jpg",cat:3},{name:"眉妆",key:"眉妆",icon:"http://img.kiwifruits.cn/classify/3/6.jpg",cat:3},{name:"卸妆品",key:"卸妆品",icon:"http://img.kiwifruits.cn/classify/3/7.jpg",cat:3},{name:"基础护肤",key:"基础护肤",icon:"http://img.kiwifruits.cn/classify/3/8.jpg",cat:3},{name:"眼妆",key:"眼妆",icon:"http://img.kiwifruits.cn/classify/3/9.jpg",cat:3},{name:"唇妆",key:"唇妆",icon:"http://img.kiwifruits.cn/classify/3/10.jpg",cat:3},{name:"面膜",key:"面膜",icon:"http://img.kiwifruits.cn/classify/3/11.jpg",cat:3},{name:"沐浴用品",key:"沐浴用品",icon:"http://img.kiwifruits.cn/classify/3/12.jpg",cat:3},{name:"护肤套装",key:"护肤套装",icon:"http://img.kiwifruits.cn/classify/3/13.jpg",cat:3},{name:"防晒品",key:"防晒品",icon:"http://img.kiwifruits.cn/classify/3/14.jpg",cat:3},{name:"美甲",key:"美甲",icon:"http://img.kiwifruits.cn/classify/3/15.jpg",cat:3}]},{name:"居家日用",foods:[{name:"垃圾袋",key:"垃圾袋",icon:"http://img.kiwifruits.cn/classify/4/1.jpg",cat:4},{name:"纸巾",key:"纸巾",icon:"http://img.kiwifruits.cn/classify/4/2.jpg",cat:4},{name:"驱蚊用品",key:"驱蚊用品",icon:"http://img.kiwifruits.cn/classify/4/3.jpg",cat:4},{name:"收纳神器",key:"收纳神器",icon:"http://img.kiwifruits.cn/classify/4/4.jpg",cat:4},{name:"厨房用品",key:"厨房用品",icon:"http://img.kiwifruits.cn/classify/4/5.jpg",cat:4},{name:"厨房烹饪",key:"烹饪",icon:"http://img.kiwifruits.cn/classify/4/6.jpg",cat:4},{name:"衣物晾晒",key:"衣物晾晒",icon:"http://img.kiwifruits.cn/classify/4/7.jpg",cat:4},{name:"衣物护理",key:"衣物护理",icon:"http://img.kiwifruits.cn/classify/4/8.jpg",cat:4},{name:"宠物用品",key:"宠物用品",icon:"http://img.kiwifruits.cn/classify/4/9.jpg",cat:4},{name:"医药保健",key:"医药",icon:"http://img.kiwifruits.cn/classify/4/10.jpg",cat:4},{name:"日用百货",key:"百货",icon:"http://img.kiwifruits.cn/classify/4/11.jpg",cat:4},{name:"清洁用品",key:"清洁",icon:"http://img.kiwifruits.cn/classify/4/12.jpg",cat:4},{name:"绿植园艺",key:"绿植",icon:"http://img.kiwifruits.cn/classify/4/13.jpg",cat:4}]},{name:"男装",foods:[{name:"爸爸装",key:"爸爸装",icon:"http://img.kiwifruits.cn/classify/5/1.jpg",cat:12},{name:"牛仔裤",key:"牛仔裤",icon:"http://img.kiwifruits.cn/classify/5/2.jpg",cat:12},{name:"衬衫",key:"衬衫",icon:"http://img.kiwifruits.cn/classify/5/3.jpg",cat:12},{name:"休闲裤",key:"休闲裤",icon:"http://img.kiwifruits.cn/classify/5/4.jpg",cat:12},{name:"外套",key:"外套",icon:"http://img.kiwifruits.cn/classify/5/5.jpg",cat:12},{name:"T恤",key:"T恤",icon:"http://img.kiwifruits.cn/classify/5/6.jpg",cat:12},{name:"套装",key:"套装",icon:"http://img.kiwifruits.cn/classify/5/7.jpg",cat:12},{name:"运动裤",key:"运动裤",icon:"http://img.kiwifruits.cn/classify/5/8.jpg",cat:12},{name:"马甲/背心",key:"马甲背心",icon:"http://img.kiwifruits.cn/classify/5/9.jpg",cat:12},{name:"POLO衫",key:"POLO衫",icon:"http://img.kiwifruits.cn/classify/5/10.jpg",cat:12},{name:"商务装",key:"商务装",icon:"http://img.kiwifruits.cn/classify/5/11.jpg",cat:12}]},{name:"鞋品",foods:[{name:"单鞋",key:"单鞋",icon:"http://img.kiwifruits.cn/classify/6/1.jpg",cat:5},{name:"皮鞋",key:"皮鞋",icon:"http://img.kiwifruits.cn/classify/6/2.jpg",cat:5},{name:"帆布鞋",key:"帆布鞋",icon:"http://img.kiwifruits.cn/classify/6/3.jpg",cat:5},{name:"北京老布鞋",key:"北京老布鞋",icon:"http://img.kiwifruits.cn/classify/6/4.jpg",cat:5},{name:"运动鞋",key:"运动鞋",icon:"http://img.kiwifruits.cn/classify/6/5.jpg",cat:5},{name:"拖鞋",key:"拖鞋",icon:"http://img.kiwifruits.cn/classify/6/6.jpg",cat:5},{name:"凉鞋",key:"凉鞋",icon:"http://img.kiwifruits.cn/classify/6/7.jpg",cat:5},{name:"休闲鞋",key:"休闲鞋",icon:"http://img.kiwifruits.cn/classify/6/8.jpg",cat:5},{name:"高跟鞋",key:"高跟鞋",icon:"http://img.kiwifruits.cn/classify/6/9.jpg",cat:5},{name:"老人鞋",key:"老人鞋",icon:"http://img.kiwifruits.cn/classify/6/10.jpg",cat:5},{name:"懒人鞋",key:"懒人鞋",icon:"http://img.kiwifruits.cn/classify/6/11.jpg",cat:5}]},{name:"数码家电",foods:[{name:"数据线",key:"数据线",icon:"http://img.kiwifruits.cn/classify/7/1.jpg",cat:8},{name:"耳机",key:"耳机",icon:"http://img.kiwifruits.cn/classify/7/2.jpg",cat:8},{name:"生活家电",key:"家电",icon:"http://img.kiwifruits.cn/classify/7/3.jpg",cat:8},{name:"电风扇",key:"电风扇",icon:"http://img.kiwifruits.cn/classify/7/4.jpg",cat:8},{name:"电吹风",key:"电吹风",icon:"http://img.kiwifruits.cn/classify/7/5.jpg",cat:8},{name:"手机壳",key:"手机壳",icon:"http://img.kiwifruits.cn/classify/7/6.jpg",cat:8},{name:"榨汁机",key:"榨汁机",icon:"http://img.kiwifruits.cn/classify/7/7.jpg",cat:8},{name:"小家电",key:"小家电",icon:"http://img.kiwifruits.cn/classify/7/8.jpg",cat:8},{name:"数码电子",key:"数码",icon:"http://img.kiwifruits.cn/classify/7/9.jpg",cat:8},{name:"电饭锅",key:"电饭锅",icon:"http://img.kiwifruits.cn/classify/7/10.jpg",cat:8},{name:"手机支架",key:"手机支架",icon:"http://img.kiwifruits.cn/classify/7/11.jpg",cat:8},{name:"剃须刀",key:"剃须刀",icon:"http://img.kiwifruits.cn/classify/7/12.jpg",cat:8},{name:"充电宝",key:"充电宝",icon:"http://img.kiwifruits.cn/classify/7/13.jpg",cat:8},{name:"手机配件",key:"手机配件",icon:"http://img.kiwifruits.cn/classify/7/14.jpg",cat:8}]},{name:"母婴",foods:[{name:"婴童服饰",key:"衣服",icon:"http://img.kiwifruits.cn/classify/8/1.jpg",cat:2},{name:"玩具乐器",key:"玩具乐器",icon:"http://img.kiwifruits.cn/classify/8/2.jpg",cat:2},{name:"尿不湿",key:"尿不湿",icon:"http://img.kiwifruits.cn/classify/8/3.jpg",cat:2},{name:"安抚牙胶",key:"安抚牙胶",icon:"http://img.kiwifruits.cn/classify/8/4.jpg",cat:2},{name:"奶瓶奶嘴",key:"奶瓶奶嘴",icon:"http://img.kiwifruits.cn/classify/8/5.jpg",cat:2},{name:"孕妈用品",key:"孕妈用品",icon:"http://img.kiwifruits.cn/classify/8/6.jpg",cat:2},{name:"宝宝用品",key:"宝宝用品",icon:"http://img.kiwifruits.cn/classify/8/7.jpg",cat:2},{name:"婴童湿巾",key:"湿巾",icon:"http://img.kiwifruits.cn/classify/8/8.jpg",cat:2},{name:"喂养洗护",key:"洗护",icon:"http://img.kiwifruits.cn/classify/8/9.jpg",cat:2},{name:"婴童鞋靴",key:"童鞋",icon:"http://img.kiwifruits.cn/classify/8/10.jpg",cat:2},{name:"口水巾",key:"口水巾",icon:"http://img.kiwifruits.cn/classify/8/11.jpg",cat:2},{name:"营养辅食",key:"营养",icon:"http://img.kiwifruits.cn/classify/8/12.jpg",cat:2},{name:"婴幼书籍",key:"书籍",icon:"http://img.kiwifruits.cn/classify/8/13.jpg",cat:2},{name:"婴儿车",key:"婴儿车",icon:"http://img.kiwifruits.cn/classify/8/14.jpg",cat:2}]},{name:"箱包",foods:[{name:"单肩包",key:"单肩包",icon:"http://img.kiwifruits.cn/classify/9/1.jpg",cat:0},{name:"斜挎包",key:"斜挎包",icon:"http://img.kiwifruits.cn/classify/9/2.jpg",cat:0},{name:"女包",key:"女包",icon:"http://img.kiwifruits.cn/classify/9/3.jpg",cat:0},{name:"男包",key:"男包",icon:"http://img.kiwifruits.cn/classify/9/4.jpg",cat:0},{name:"双肩包",key:"双肩包",icon:"http://img.kiwifruits.cn/classify/9/5.jpg",cat:0},{name:"小方包",key:"小方包",icon:"http://img.kiwifruits.cn/classify/9/6.jpg",cat:0},{name:"钱包",key:"钱包",icon:"http://img.kiwifruits.cn/classify/9/7.jpg",cat:0},{name:"旅行箱包",key:"旅行箱包",icon:"http://img.kiwifruits.cn/classify/9/8.jpg",cat:0},{name:"零钱包",key:"零钱包",icon:"http://img.kiwifruits.cn/classify/9/9.jpg",cat:0},{name:"手提包",key:"手提包",icon:"http://img.kiwifruits.cn/classify/9/10.jpg",cat:0},{name:"胸包",key:"胸包",icon:"http://img.kiwifruits.cn/classify/9/11.jpg",cat:0}]},{name:"内衣",foods:[{name:"袜子",key:"袜子",icon:"http://img.kiwifruits.cn/classify/10/1.jpg",cat:11},{name:"吊带背心",key:"吊带背心",icon:"http://img.kiwifruits.cn/classify/10/2.jpg",cat:11},{name:"抹胸",key:"抹胸",icon:"http://img.kiwifruits.cn/classify/10/3.jpg",cat:11},{name:"内裤",key:"内裤",icon:"http://img.kiwifruits.cn/classify/10/4.jpg",cat:11},{name:"文胸",key:"文胸",icon:"http://img.kiwifruits.cn/classify/10/5.jpg",cat:11},{name:"文胸套装",key:"文胸套装",icon:"http://img.kiwifruits.cn/classify/10/6.jpg",cat:11},{name:"打底塑身",key:"打底塑身",icon:"http://img.kiwifruits.cn/classify/10/7.jpg",cat:11},{name:"家居服",key:"家居服",icon:"http://img.kiwifruits.cn/classify/10/8.jpg",cat:11},{name:"船袜",key:"船袜",icon:"http://img.kiwifruits.cn/classify/10/9.jpg",cat:11},{name:"情侣睡衣",key:"情侣睡衣",icon:"http://img.kiwifruits.cn/classify/10/10.jpg",cat:11},{name:"丝袜",key:"丝袜",icon:"http://img.kiwifruits.cn/classify/10/11.jpg",cat:11}]},{name:"文娱车品",foods:[{name:"车市车品",key:"车市车品",icon:"http://img.kiwifruits.cn/classify/11/1.jpg",cat:7},{name:"办公文具",key:"办公文具",icon:"http://img.kiwifruits.cn/classify/11/2.jpg",cat:7},{name:"考试必备",key:"考试必备",icon:"http://img.kiwifruits.cn/classify/11/3.jpg",cat:7},{name:"笔记本",key:"笔记本",icon:"http://img.kiwifruits.cn/classify/11/4.jpg",cat:7},{name:"艺术礼品",key:"礼品",icon:"http://img.kiwifruits.cn/classify/11/5.jpg",cat:7},{name:"书写工具",key:"书写工具",icon:"http://img.kiwifruits.cn/classify/11/6.jpg",cat:7},{name:"车载电器",key:"车载电器",icon:"http://img.kiwifruits.cn/classify/11/7.jpg",cat:7},{name:"图书音像",key:"图书音像",icon:"http://img.kiwifruits.cn/classify/11/8.jpg",cat:7},{name:"画具画材",key:"画具画材",icon:"http://img.kiwifruits.cn/classify/11/9.jpg",cat:7}]},{name:"配饰",foods:[{name:"太阳镜",key:"太阳镜",icon:"http://img.kiwifruits.cn/classify/12/1.jpg",cat:0},{name:"皮带",key:"皮带",icon:"http://img.kiwifruits.cn/classify/12/2.jpg",cat:0},{name:"棒球帽",key:"棒球帽",icon:"http://img.kiwifruits.cn/classify/12/3.jpg",cat:0},{name:"手表",key:"手表",icon:"http://img.kiwifruits.cn/classify/12/4.jpg",cat:0},{name:"发饰",key:"发饰",icon:"http://img.kiwifruits.cn/classify/12/5.jpg",cat:0},{name:"项链",key:"项链",icon:"http://img.kiwifruits.cn/classify/12/6.jpg",cat:0},{name:"手饰",key:"手饰",icon:"http://img.kiwifruits.cn/classify/12/7.jpg",cat:0},{name:"耳环",key:"耳环",icon:"http://img.kiwifruits.cn/classify/12/8.jpg",cat:0},{name:"帽子丝巾",key:"帽子丝巾",icon:"http://img.kiwifruits.cn/classify/12/9.jpg",cat:0},{name:"眼镜墨镜",key:"眼镜墨镜",icon:"http://img.kiwifruits.cn/classify/12/10.jpg",cat:0},{name:"发带发箍",key:"发带发箍",icon:"http://img.kiwifruits.cn/classify/12/11.jpg",cat:0}]},{name:"家装家纺",foods:[{name:"家居饰品",key:"家居饰品",icon:"http://img.kiwifruits.cn/classify/13/1.jpg",cat:0},{name:"凉席",key:"凉席",icon:"http://img.kiwifruits.cn/classify/13/2.jpg",cat:0},{name:"背枕靠枕",key:"靠枕",icon:"http://img.kiwifruits.cn/classify/13/3.jpg",cat:0},{name:"床上用品",key:"床上用品",icon:"http://img.kiwifruits.cn/classify/13/4.jpg",cat:0},{name:"摆件",key:"摆件",icon:"http://img.kiwifruits.cn/classify/13/5.jpg",cat:0},{name:"四件套",key:"四件套",icon:"http://img.kiwifruits.cn/classify/13/6.jpg",cat:0},{name:"装饰品",key:"装饰品",icon:"http://img.kiwifruits.cn/classify/13/7.jpg",cat:0},{name:"卫浴用品",key:"卫浴",icon:"http://img.kiwifruits.cn/classify/13/8.jpg",cat:0},{name:"家居家装",key:"家具",icon:"http://img.kiwifruits.cn/classify/13/9.jpg",cat:0},{name:"蚊帐",key:"蚊帐",icon:"http://img.kiwifruits.cn/classify/13/10.jpg",cat:0},{name:"墙纸贴纸",key:"墙纸",icon:"http://img.kiwifruits.cn/classify/13/11.jpg",cat:0},{name:"空调被",key:"空调被",icon:"http://img.kiwifruits.cn/classify/13/12.jpg",cat:0}]},{name:"户外运动",foods:[{name:"游泳装备",key:"游泳",icon:"http://img.kiwifruits.cn/classify/14/1.jpg",cat:0},{name:"泳镜",key:"泳镜",icon:"http://img.kiwifruits.cn/classify/14/2.jpg",cat:0},{name:"户外装备",key:"户外",icon:"http://img.kiwifruits.cn/classify/14/3.jpg",cat:0},{name:"健身服饰",key:"健身",icon:"http://img.kiwifruits.cn/classify/14/4.jpg",cat:0},{name:"泳衣",key:"泳衣",icon:"http://img.kiwifruits.cn/classify/14/5.jpg",cat:0},{name:"瑜伽垫",key:"瑜伽垫",icon:"http://img.kiwifruits.cn/classify/14/6.jpg",cat:0},{name:"瑜伽用品",key:"瑜伽",icon:"http://img.kiwifruits.cn/classify/14/7.jpg",cat:0},{name:"健身装备",key:"健身",icon:"http://img.kiwifruits.cn/classify/14/8.jpg",cat:0},{name:"球迷用品",key:"球迷",icon:"http://img.kiwifruits.cn/classify/14/9.jpg",cat:0}]}];e.default=o},"6e42":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=me,e.createComponent=ke,e.createPage=je,e.default=void 0;var o=n(i("66fd"));function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return c(t)||a(t,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){var i=[],o=!0,n=!1,s=void 0;try{for(var r,a=t[Symbol.iterator]();!(o=(r=a.next()).done);o=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){n=!0,s=c}finally{try{o||null==a["return"]||a["return"]()}finally{if(n)throw s}}return i}function c(t){if(Array.isArray(t))return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function u(t){return d(t)||h(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var m=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function f(t){return"function"===typeof t}function y(t){return"string"===typeof t}function v(t){return"[object Object]"===m.call(t)}function x(t,e){return g.call(t,e)}function _(){}function b(t){var e=Object.create(null);return function(i){var o=e[i];return o||(e[i]=t(i))}}var w=/-(\w)/g,j=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),k=["invoke","success","fail","complete","returnValue"],A={},S={};function P(t,e){var i=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return i?T(i):i}function T(t){for(var e=[],i=0;i<t.length;i++)-1===e.indexOf(t[i])&&e.push(t[i]);return e}function E(t,e){var i=t.indexOf(e);-1!==i&&t.splice(i,1)}function O(t,e){Object.keys(e).forEach(function(i){-1!==k.indexOf(i)&&f(e[i])&&(t[i]=P(t[i],e[i]))})}function D(t,e){t&&e&&Object.keys(e).forEach(function(i){-1!==k.indexOf(i)&&f(e[i])&&E(t[i],e[i])})}function L(t,e){"string"===typeof t&&v(e)?O(S[t]||(S[t]={}),e):v(t)&&O(A,t)}function F(t,e){"string"===typeof t?v(e)?D(S[t],e):delete S[t]:v(t)&&D(A,t)}function M(t){return function(e){return t(e)||e}}function C(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function $(t,e){for(var i=!1,o=0;o<t.length;o++){var n=t[o];if(i)i=Promise.then(M(n));else{var s=n(e);if(C(s)&&(i=Promise.resolve(s)),!1===s)return{then:function(){}}}}return i||{then:function(t){return t(e)}}}function z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(i){if(Array.isArray(t[i])){var o=e[i];e[i]=function(e){$(t[i],e).then(function(t){return f(o)&&o(t)||t})}}}),e}function R(t,e){var i=[];Array.isArray(A.returnValue)&&i.push.apply(i,u(A.returnValue));var o=S[t];return o&&Array.isArray(o.returnValue)&&i.push.apply(i,u(o.returnValue)),i.forEach(function(t){e=t(e)||e}),e}function I(t){var e=Object.create(null);Object.keys(A).forEach(function(t){"returnValue"!==t&&(e[t]=A[t].slice())});var i=S[t];return i&&Object.keys(i).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(i[t]))}),e}function H(t,e,i){for(var o=arguments.length,n=new Array(o>3?o-3:0),s=3;s<o;s++)n[s-3]=arguments[s];var r=I(t);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var a=$(r.invoke,i);return a.then(function(t){return e.apply(void 0,[z(r,t)].concat(n))})}return e.apply(void 0,[z(r,i)].concat(n))}return e.apply(void 0,[i].concat(n))}var N={returnValue:function(t){return C(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},B=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,W=/^create|Manager$/,q=/^on/;function U(t){return W.test(t)}function V(t){return B.test(t)}function G(t){return q.test(t)}function Q(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(U(t)||V(t)||G(t))}function X(t,e){return K(t)?function(){for(var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length,n=new Array(o>1?o-1:0),s=1;s<o;s++)n[s-1]=arguments[s];return f(i.success)||f(i.fail)||f(i.complete)?R(t,H.apply(void 0,[t,e,i].concat(n))):R(t,Q(new Promise(function(o,s){H.apply(void 0,[t,e,Object.assign({},i,{success:o,fail:s})].concat(n)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(i){return e.resolve(t()).then(function(){return i})},function(i){return e.resolve(t()).then(function(){throw i})})})})))}:e}var Y=1e-4,J=750,Z=!1,tt=0,et=0;function it(){var t=wx.getSystemInfoSync(),e=t.platform,i=t.pixelRatio,o=t.windowWidth;tt=o,et=i,Z="ios"===e}function ot(t,e){if(0===tt&&it(),t=Number(t),0===t)return 0;var i=t/J*(e||tt);return i<0&&(i=-i),i=Math.floor(i+Y),0===i?1!==et&&Z?.5:1:t<0?-i:i}var nt={promiseInterceptor:N},st=Object.freeze({upx2px:ot,interceptors:nt,addInterceptor:L,removeInterceptor:F}),rt={},at=[],ct=[],lt=["success","fail","cancel","complete"];function ut(t,e,i){return function(o){return e(ht(t,o,i))}}function pt(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(v(e)){var s=!0===n?e:{};for(var r in f(i)&&(i=i(e,s)||{}),e)if(x(i,r)){var a=i[r];f(a)&&(a=a(e[r],e,s)),a?y(a)?s[a]=e[r]:v(a)&&(s[a.name?a.name:r]=a.value):console.warn("app-plus ".concat(t,"暂不支持").concat(r))}else-1!==lt.indexOf(r)?s[r]=ut(t,e[r],o):n||(s[r]=e[r]);return s}return f(e)&&(e=ut(t,e,o)),e}function ht(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return f(rt.returnValue)&&(e=rt.returnValue(t,e)),pt(t,e,i,{},o)}function dt(t,e){if(x(rt,t)){var i=rt[t];return i?function(e,o){var n=i;f(i)&&(n=i(e)),e=pt(t,e,n.args,n.returnValue);var s=[e];"undefined"!==typeof o&&s.push(o);var r=wx[n.name||t].apply(wx,s);return V(t)?ht(t,r,n.returnValue,U(t)):r}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var mt=Object.create(null),gt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function ft(t){return function(e){var i=e.fail,o=e.complete,n={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};f(i)&&i(n),f(o)&&o(n)}}gt.forEach(function(t){mt[t]=ft(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new o.default),t};var t}();function vt(t,e,i){return t[e].apply(t,i)}function xt(){return vt(yt(),"$on",Array.prototype.slice.call(arguments))}function _t(){return vt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return vt(yt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return vt(yt(),"$emit",Array.prototype.slice.call(arguments))}var jt=Object.freeze({$on:xt,$off:_t,$once:bt,$emit:wt});function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function At(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var i=t.__uniapp_mask,o="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;kt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),n=t.show,s=t.hide,r=t.close,a=function(){o.setStyle({mask:i})},c=function(){o.setStyle({mask:"none"})};t.show=function(){a();for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return n.apply(t,i)},t.hide=function(){c();for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return s.apply(t,i)},t.close=function(){c(),e=[];for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r.apply(t,o)}}}function St(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&At(e),e}var Pt=Object.freeze({getSubNVueById:St,requireNativePlugin:kt}),Tt=Page,Et=Component,Ot=/:/g,Dt=b(function(t){return j(t.replace(Ot,"-"))});function Lt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(i){for(var o=arguments.length,n=new Array(o>1?o-1:0),s=1;s<o;s++)n[s-1]=arguments[s];return e.apply(t,[Dt(i)].concat(n))}}}function Ft(t,e){var i=e[t];e[t]=i?function(){Lt(this);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return i.apply(this,e)}:function(){Lt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ft("onLoad",t),Tt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ft("created",t),Et(t)};var Mt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ct(t,e){var i=t.$mp[t.mpType];e.forEach(function(e){x(i,e)&&(t[e]=i[e])})}function $t(t,e){if(!e)return!0;if(o.default.options&&Array.isArray(o.default.options[t]))return!0;if(e=e.default||e,f(e))return!!f(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(f(e[t]))return!0;var i=e.mixins;return Array.isArray(i)?!!i.find(function(e){return $t(t,e)}):void 0}function zt(t,e,i){e.forEach(function(e){$t(e,i)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Rt(t,e){var i;return e=e.default||e,f(e)?(i=e,e=i.extendOptions):i=t.extend(e),[i,e]}function It(t,e){if(Array.isArray(e)&&e.length){var i=Object.create(null);e.forEach(function(t){i[t]=!0}),t.$scopedSlots=t.$slots=i}}function Ht(t,e){t=(t||"").split(",");var i=t.length;1===i?e._$vueId=t[0]:2===i&&(e._$vueId=t[0],e._$vuePid=t[1])}function Nt(t,e){var i=t.data||{},o=t.methods||{};if("function"===typeof i)try{i=i.call(e)}catch(n){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",i)}else try{i=JSON.parse(JSON.stringify(i))}catch(n){}return v(i)||(i={}),Object.keys(o).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||x(i,t)||(i[t]=o[t])}),i}var Bt=[String,Number,Boolean,Object,Array,null];function Wt(t){return function(e,i){this.$vm&&(this.$vm[t]=e)}}function qt(t,e){var i=t["behaviors"],o=t["extends"],n=t["mixins"],s=t["props"];s||(t["props"]=s=[]);var r=[];return Array.isArray(i)&&i.forEach(function(t){r.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(s)?(s.push("name"),s.push("value")):(s["name"]={type:String,default:""},s["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),v(o)&&o.props&&r.push(e({properties:Vt(o.props,!0)})),Array.isArray(n)&&n.forEach(function(t){v(t)&&t.props&&r.push(e({properties:Vt(t.props,!0)}))}),r}function Ut(t,e,i,o){return Array.isArray(e)&&1===e.length?e[0]:e}function Vt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(i.vueId={type:String,value:""},i.vueSlots={type:null,value:[],observer:function(t,e){var i=Object.create(null);t.forEach(function(t){i[t]=!0}),this.setData({$slots:i})}}),Array.isArray(t)?t.forEach(function(t){i[t]={type:null,observer:Wt(t)}}):v(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(v(o)){var n=o["default"];f(n)&&(n=n()),o.type=Ut(e,o.type),i[e]={type:-1!==Bt.indexOf(o.type)?o.type:null,value:n,observer:Wt(e)}}else{var s=Ut(e,o);i[e]={type:-1!==Bt.indexOf(s)?s:null,observer:Wt(e)}}}),i}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=_,t.preventDefault=_,t.target=t.target||{},x(t,"detail")||(t.detail={}),v(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Qt(t,e){var i=t;return e.forEach(function(e){var o=e[0],n=e[2];if(o||"undefined"!==typeof n){var s=e[1],r=e[3],a=o?t.__get_value(o,i):i;Number.isInteger(a)?i=n:s?Array.isArray(a)?i=a.find(function(e){return t.__get_value(s,e)===n}):v(a)?i=Object.keys(a).find(function(e){return t.__get_value(s,a[e])===n}):console.error("v-for 暂不支持循环数据：",a):i=a[n],r&&(i=t.__get_value(r,i))}}),i}function Kt(t,e,i){var o={};return Array.isArray(e)&&e.length&&e.forEach(function(e,n){"string"===typeof e?e?"$event"===e?o["$"+n]=i:0===e.indexOf("$event.")?o["$"+n]=t.__get_value(e.replace("$event.",""),i):o["$"+n]=t.__get_value(e):o["$"+n]=t:o["$"+n]=Qt(t,e)}),o}function Xt(t){for(var e={},i=1;i<t.length;i++){var o=t[i];e[o[0]]=o[1]}return e}function Yt(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,r=!1;if(n&&(r=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!i.length))return r?[e]:e.detail.__args__||e.detail;var a=Kt(t,o,e),c=[];return i.forEach(function(t){"$event"===t?"__set_model"!==s||n?n&&!r?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Xt(t)):"string"===typeof t&&x(a,t)?c.push(a[t]):c.push(t)}),c}var Jt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Gt(t);var i=(t.currentTarget||t.target).dataset;if(!i)return console.warn("事件信息不存在");var o=i.eventOpts||i["event-opts"];if(!o)return console.warn("事件信息不存在");var n=t.type,s=[];return o.forEach(function(i){var o=i[0],r=i[1],a=o.charAt(0)===Zt;o=a?o.slice(1):o;var c=o.charAt(0)===Jt;o=c?o.slice(1):o,r&&te(n,o)&&r.forEach(function(i){var o=i[0];if(o){var n=e.$vm;n.$options.generic&&n.$parent&&n.$parent.$parent&&(n=n.$parent.$parent);var r=n[o];if(!f(r))throw new Error(" _vm.".concat(o," is not a function"));if(c){if(r.once)return;r.once=!0}s.push(r.apply(n,Yt(e.$vm,t,i[1],i[2],a,o)))}})}),"input"===n&&1===s.length&&"undefined"!==typeof s[0]?s[0]:void 0}var ie=["onShow","onHide","onError","onPageNotFound"];function oe(t,e){var i=e.mocks,n=e.initRefs;t.$options.store&&(o.default.prototype.$store=t.$options.store),o.default.prototype.mpHost="app-plus",o.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=l({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(n(this),Ct(this,i)))}});var s={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return s.globalData=t.$options.globalData||{},zt(s,ie),s}var ne=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function se(t,e){var i=t.$children,o=i.find(function(t){return t.$scope._$vueId===e});if(o)return o;for(var n=i.length-1;n>=0;n--)if(o=se(i[n],e),o)return o}function re(t){return Behavior(t)}function ae(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function le(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},i=e.selectAllComponents(".vue-ref");i.forEach(function(e){var i=e.dataset.ref;t[i]=e.$vm||e});var o=e.selectAllComponents(".vue-ref-in-for");return o.forEach(function(e){var i=e.dataset.ref;t[i]||(t[i]=[]),t[i].push(e.$vm||e)}),t}})}function ue(t){var e,i=t.detail||t.value,o=i.vuePid,n=i.vueOptions;o&&(e=se(this.$vm,o)),e||(e=this.$vm),n.parent=e}function pe(t){return oe(t,{mocks:ne,initRefs:le})}var he=["onUniNViewMessage"];function de(t){var e=pe(t);return zt(e,he),e}function me(t){return App(de(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.isPage,n=e.initRelation,r=Rt(o.default,t),a=s(r,2),c=a[0],l=a[1],u={options:{multipleSlots:!0,addGlobalClass:!0},data:Nt(l,o.default.prototype),behaviors:qt(l,re),properties:Vt(l.props,!1,l.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:i.call(this)?"page":"component",mpInstance:this,propsData:t};Ht(t.vueId,this),n.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),It(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(l.wxsCallMethods)&&l.wxsCallMethods.forEach(function(t){u.methods[t]=function(e){return this.$vm[t](e)}}),i?u:[u,c]}function fe(t){return ge(t,{isPage:ae,initRelation:ce})}function ye(t){var e=fe(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ve=["onShow","onHide","onUnload"];function xe(t,e){e.isPage,e.initRelation;var i=ye(t);return zt(i.methods,ve,t),i.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},i}function _e(t){return xe(t,{isPage:ae,initRelation:ce})}ve.push.apply(ve,Mt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=_e(t);return zt(e.methods,be),e}function je(t){return Component(we(t))}function ke(t){return Component(ye(t))}at.forEach(function(t){rt[t]=!1}),ct.forEach(function(t){var e=rt[t]&&rt[t].name?rt[t].name:t;wx.canIUse(e)||(rt[t]=!1)});var Ae={};Object.keys(st).forEach(function(t){Ae[t]=st[t]}),Object.keys(jt).forEach(function(t){Ae[t]=jt[t]}),Object.keys(Pt).forEach(function(t){Ae[t]=X(t,Pt[t])}),Object.keys(wx).forEach(function(t){(x(wx,t)||x(rt,t))&&(Ae[t]=X(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ae,t.UniEmitter=jt),wx.createApp=me,wx.createPage=je,wx.createComponent=ke;var Se=Ae,Pe=Se;e.default=Pe}).call(this,i("c8ba"))},"737f":function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}var r={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},a="https://apis.map.qq.com/ws/",c=a+"place/v1/search",l=a+"place/v1/suggestion",u=a+"geocoder/v1/",p=a+"district/v1/list",h=a+"district/v1/getchildren",d=a+"distance/v1/",m=a+"direction/v1/",g={driving:"driving",transit:"transit"},f=6378136.49,y={safeAdd:function(t,e){var i=(65535&t)+(65535&e),o=(t>>16)+(e>>16)+(i>>16);return o<<16|65535&i},bitRotateLeft:function(t,e){return t<<e|t>>>32-e},md5cmn:function(t,e,i,o,n,s){return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(e,t),this.safeAdd(o,s)),n),i)},md5ff:function(t,e,i,o,n,s,r){return this.md5cmn(e&i|~e&o,t,e,n,s,r)},md5gg:function(t,e,i,o,n,s,r){return this.md5cmn(e&o|i&~o,t,e,n,s,r)},md5hh:function(t,e,i,o,n,s,r){return this.md5cmn(e^i^o,t,e,n,s,r)},md5ii:function(t,e,i,o,n,s,r){return this.md5cmn(i^(e|~o),t,e,n,s,r)},binlMD5:function(t,e){var i,o,n,s,r;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var a=1732584193,c=-271733879,l=-1732584194,u=271733878;for(i=0;i<t.length;i+=16)o=a,n=c,s=l,r=u,a=this.md5ff(a,c,l,u,t[i],7,-680876936),u=this.md5ff(u,a,c,l,t[i+1],12,-389564586),l=this.md5ff(l,u,a,c,t[i+2],17,606105819),c=this.md5ff(c,l,u,a,t[i+3],22,-1044525330),a=this.md5ff(a,c,l,u,t[i+4],7,-176418897),u=this.md5ff(u,a,c,l,t[i+5],12,1200080426),l=this.md5ff(l,u,a,c,t[i+6],17,-1473231341),c=this.md5ff(c,l,u,a,t[i+7],22,-45705983),a=this.md5ff(a,c,l,u,t[i+8],7,1770035416),u=this.md5ff(u,a,c,l,t[i+9],12,-1958414417),l=this.md5ff(l,u,a,c,t[i+10],17,-42063),c=this.md5ff(c,l,u,a,t[i+11],22,-1990404162),a=this.md5ff(a,c,l,u,t[i+12],7,1804603682),u=this.md5ff(u,a,c,l,t[i+13],12,-40341101),l=this.md5ff(l,u,a,c,t[i+14],17,-1502002290),c=this.md5ff(c,l,u,a,t[i+15],22,1236535329),a=this.md5gg(a,c,l,u,t[i+1],5,-165796510),u=this.md5gg(u,a,c,l,t[i+6],9,-1069501632),l=this.md5gg(l,u,a,c,t[i+11],14,643717713),c=this.md5gg(c,l,u,a,t[i],20,-373897302),a=this.md5gg(a,c,l,u,t[i+5],5,-701558691),u=this.md5gg(u,a,c,l,t[i+10],9,38016083),l=this.md5gg(l,u,a,c,t[i+15],14,-660478335),c=this.md5gg(c,l,u,a,t[i+4],20,-405537848),a=this.md5gg(a,c,l,u,t[i+9],5,568446438),u=this.md5gg(u,a,c,l,t[i+14],9,-1019803690),l=this.md5gg(l,u,a,c,t[i+3],14,-187363961),c=this.md5gg(c,l,u,a,t[i+8],20,1163531501),a=this.md5gg(a,c,l,u,t[i+13],5,-1444681467),u=this.md5gg(u,a,c,l,t[i+2],9,-51403784),l=this.md5gg(l,u,a,c,t[i+7],14,1735328473),c=this.md5gg(c,l,u,a,t[i+12],20,-1926607734),a=this.md5hh(a,c,l,u,t[i+5],4,-378558),u=this.md5hh(u,a,c,l,t[i+8],11,-2022574463),l=this.md5hh(l,u,a,c,t[i+11],16,1839030562),c=this.md5hh(c,l,u,a,t[i+14],23,-35309556),a=this.md5hh(a,c,l,u,t[i+1],4,-1530992060),u=this.md5hh(u,a,c,l,t[i+4],11,1272893353),l=this.md5hh(l,u,a,c,t[i+7],16,-155497632),c=this.md5hh(c,l,u,a,t[i+10],23,-1094730640),a=this.md5hh(a,c,l,u,t[i+13],4,681279174),u=this.md5hh(u,a,c,l,t[i],11,-358537222),l=this.md5hh(l,u,a,c,t[i+3],16,-722521979),c=this.md5hh(c,l,u,a,t[i+6],23,76029189),a=this.md5hh(a,c,l,u,t[i+9],4,-640364487),u=this.md5hh(u,a,c,l,t[i+12],11,-421815835),l=this.md5hh(l,u,a,c,t[i+15],16,530742520),c=this.md5hh(c,l,u,a,t[i+2],23,-995338651),a=this.md5ii(a,c,l,u,t[i],6,-198630844),u=this.md5ii(u,a,c,l,t[i+7],10,1126891415),l=this.md5ii(l,u,a,c,t[i+14],15,-1416354905),c=this.md5ii(c,l,u,a,t[i+5],21,-57434055),a=this.md5ii(a,c,l,u,t[i+12],6,1700485571),u=this.md5ii(u,a,c,l,t[i+3],10,-1894986606),l=this.md5ii(l,u,a,c,t[i+10],15,-1051523),c=this.md5ii(c,l,u,a,t[i+1],21,-2054922799),a=this.md5ii(a,c,l,u,t[i+8],6,1873313359),u=this.md5ii(u,a,c,l,t[i+15],10,-30611744),l=this.md5ii(l,u,a,c,t[i+6],15,-1560198380),c=this.md5ii(c,l,u,a,t[i+13],21,1309151649),a=this.md5ii(a,c,l,u,t[i+4],6,-145523070),u=this.md5ii(u,a,c,l,t[i+11],10,-1120210379),l=this.md5ii(l,u,a,c,t[i+2],15,718787259),c=this.md5ii(c,l,u,a,t[i+9],21,-343485551),a=this.safeAdd(a,o),c=this.safeAdd(c,n),l=this.safeAdd(l,s),u=this.safeAdd(u,r);return[a,c,l,u]},binl2rstr:function(t){var e,i="",o=32*t.length;for(e=0;e<o;e+=8)i+=String.fromCharCode(t[e>>5]>>>e%32&255);return i},rstr2binl:function(t){var e,i=[];for(i[(t.length>>2)-1]=void 0,e=0;e<i.length;e+=1)i[e]=0;var o=8*t.length;for(e=0;e<o;e+=8)i[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return i},rstrMD5:function(t){return this.binl2rstr(this.binlMD5(this.rstr2binl(t),8*t.length))},rstrHMACMD5:function(t,e){var i,o,n=this.rstr2binl(t),s=[],r=[];for(s[15]=r[15]=void 0,n.length>16&&(n=this.binlMD5(n,8*t.length)),i=0;i<16;i+=1)s[i]=909522486^n[i],r[i]=1549556828^n[i];return o=this.binlMD5(s.concat(this.rstr2binl(e)),512+8*e.length),this.binl2rstr(this.binlMD5(r.concat(o),640))},rstr2hex:function(t){var e,i,o="0123456789abcdef",n="";for(i=0;i<t.length;i+=1)e=t.charCodeAt(i),n+=o.charAt(e>>>4&15)+o.charAt(15&e);return n},str2rstrUTF8:function(t){return unescape(encodeURIComponent(t))},rawMD5:function(t){return this.rstrMD5(this.str2rstrUTF8(t))},hexMD5:function(t){return this.rstr2hex(this.rawMD5(t))},rawHMACMD5:function(t,e){return this.rstrHMACMD5(this.str2rstrUTF8(t),str2rstrUTF8(e))},hexHMACMD5:function(t,e){return this.rstr2hex(this.rawHMACMD5(t,e))},md5:function(t,e,i){return e?i?this.rawHMACMD5(e,t):this.hexHMACMD5(e,t):i?this.rawMD5(t):this.hexMD5(t)},getSig:function(t,e,i,o){var n=null,s=[];return Object.keys(t).sort().forEach(function(e){s.push(e+"="+t[e])}),"search"==i&&(n="/ws/place/v1/search?"+s.join("&")+e),"suggest"==i&&(n="/ws/place/v1/suggestion?"+s.join("&")+e),"reverseGeocoder"==i&&(n="/ws/geocoder/v1/?"+s.join("&")+e),"geocoder"==i&&(n="/ws/geocoder/v1/?"+s.join("&")+e),"getCityList"==i&&(n="/ws/district/v1/list?"+s.join("&")+e),"getDistrictByCityId"==i&&(n="/ws/district/v1/getchildren?"+s.join("&")+e),"calculateDistance"==i&&(n="/ws/distance/v1/?"+s.join("&")+e),"direction"==i&&(n="/ws/direction/v1/"+o+"?"+s.join("&")+e),n=this.md5(n),n},location2query:function(t){if("string"==typeof t)return t;for(var e="",i=0;i<t.length;i++){var o=t[i];e&&(e+=";"),o.location&&(e=e+o.location.lat+","+o.location.lng),o.latitude&&o.longitude&&(e=e+o.latitude+","+o.longitude)}return e},rad:function(t){return t*Math.PI/180},getEndLocation:function(t){for(var e=t.split(";"),i=[],o=0;o<e.length;o++)i.push({lat:parseFloat(e[o].split(",")[0]),lng:parseFloat(e[o].split(",")[1])});return i},getDistance:function(t,e,i,o){var n=this.rad(t),s=this.rad(i),r=n-s,a=this.rad(e)-this.rad(o),c=2*Math.asin(Math.sqrt(Math.pow(Math.sin(r/2),2)+Math.cos(n)*Math.cos(s)*Math.pow(Math.sin(a/2),2)));return c*=f,c=Math.round(1e4*c)/1e4,parseFloat(c.toFixed(0))},getWXLocation:function(t,e,i){wx.getLocation({type:"gcj02",success:t,fail:e,complete:i})},getLocationParam:function(t){if("string"==typeof t){var e=t.split(",");t=2===e.length?{latitude:t.split(",")[0],longitude:t.split(",")[1]}:{}}return t},polyfillParam:function(t){t.success=t.success||function(){},t.fail=t.fail||function(){},t.complete=t.complete||function(){}},checkParamKeyEmpty:function(t,e){if(!t[e]){var i=this.buildErrorConfig(r.PARAM_ERR,r.PARAM_ERR_MSG+e+"参数格式有误");return t.fail(i),t.complete(i),!0}return!1},checkKeyword:function(t){return!this.checkParamKeyEmpty(t,"keyword")},checkLocation:function(t){var e=this.getLocationParam(t.location);if(!e||!e.latitude||!e.longitude){var i=this.buildErrorConfig(r.PARAM_ERR,r.PARAM_ERR_MSG+" location参数格式有误");return t.fail(i),t.complete(i),!1}return!0},buildErrorConfig:function(t,e){return{status:t,message:e}},handleData:function(t,e,i){if("search"==i){for(var o=e.data,n=[],s=0;s<o.length;s++)n.push({id:o[s].id||null,title:o[s].title||null,latitude:o[s].location&&o[s].location.lat||null,longitude:o[s].location&&o[s].location.lng||null,address:o[s].address||null,category:o[s].category||null,tel:o[s].tel||null,adcode:o[s].ad_info&&o[s].ad_info.adcode||null,city:o[s].ad_info&&o[s].ad_info.city||null,district:o[s].ad_info&&o[s].ad_info.district||null,province:o[s].ad_info&&o[s].ad_info.province||null});t.success(e,{searchResult:o,searchSimplify:n})}else if("suggest"==i){var r=e.data,a=[];for(s=0;s<r.length;s++)a.push({adcode:r[s].adcode||null,address:r[s].address||null,category:r[s].category||null,city:r[s].city||null,district:r[s].district||null,id:r[s].id||null,latitude:r[s].location&&r[s].location.lat||null,longitude:r[s].location&&r[s].location.lng||null,province:r[s].province||null,title:r[s].title||null,type:r[s].type||null});t.success(e,{suggestResult:r,suggestSimplify:a})}else if("reverseGeocoder"==i){var c=e.result,l={address:c.address||null,latitude:c.location&&c.location.lat||null,longitude:c.location&&c.location.lng||null,adcode:c.ad_info&&c.ad_info.adcode||null,city:c.address_component&&c.address_component.city||null,district:c.address_component&&c.address_component.district||null,nation:c.address_component&&c.address_component.nation||null,province:c.address_component&&c.address_component.province||null,street:c.address_component&&c.address_component.street||null,street_number:c.address_component&&c.address_component.street_number||null,recommend:c.formatted_addresses&&c.formatted_addresses.recommend||null,rough:c.formatted_addresses&&c.formatted_addresses.rough||null};if(c.pois){var u=c.pois,p=[];for(s=0;s<u.length;s++)p.push({id:u[s].id||null,title:u[s].title||null,latitude:u[s].location&&u[s].location.lat||null,longitude:u[s].location&&u[s].location.lng||null,address:u[s].address||null,category:u[s].category||null,adcode:u[s].ad_info&&u[s].ad_info.adcode||null,city:u[s].ad_info&&u[s].ad_info.city||null,district:u[s].ad_info&&u[s].ad_info.district||null,province:u[s].ad_info&&u[s].ad_info.province||null});t.success(e,{reverseGeocoderResult:c,reverseGeocoderSimplify:l,pois:u,poisSimplify:p})}else t.success(e,{reverseGeocoderResult:c,reverseGeocoderSimplify:l})}else if("geocoder"==i){var h=e.result,d={title:h.title||null,latitude:h.location&&h.location.lat||null,longitude:h.location&&h.location.lng||null,adcode:h.ad_info&&h.ad_info.adcode||null,province:h.address_components&&h.address_components.province||null,city:h.address_components&&h.address_components.city||null,district:h.address_components&&h.address_components.district||null,street:h.address_components&&h.address_components.street||null,street_number:h.address_components&&h.address_components.street_number||null,level:h.level||null};t.success(e,{geocoderResult:h,geocoderSimplify:d})}else if("getCityList"==i){var m=e.result[0],g=e.result[1],f=e.result[2];t.success(e,{provinceResult:m,cityResult:g,districtResult:f})}else if("getDistrictByCityId"==i){var y=e.result[0];t.success(e,y)}else if("calculateDistance"==i){var v=e.result.elements,x=[];for(s=0;s<v.length;s++)x.push(v[s].distance);t.success(e,{calculateDistanceResult:v,distance:x})}else if("direction"==i){var _=e.result.routes;t.success(e,_)}else t.success(e)},buildWxRequestConfig:function(t,e,i){var o=this;return e.header={"content-type":"application/json"},e.method="GET",e.success=function(e){var n=e.data;0===n.status?o.handleData(t,n,i):t.fail(n)},e.fail=function(e){e.statusCode=r.WX_ERR_CODE,t.fail(o.buildErrorConfig(r.WX_ERR_CODE,e.errMsg))},e.complete=function(e){var i=+e.statusCode;switch(i){case r.WX_ERR_CODE:t.complete(o.buildErrorConfig(r.WX_ERR_CODE,e.errMsg));break;case r.WX_OK_CODE:var n=e.data;0===n.status?t.complete(n):t.complete(o.buildErrorConfig(n.status,n.message));break;default:t.complete(o.buildErrorConfig(r.SYSTEM_ERR,r.SYSTEM_ERR_MSG))}},e},locationProcess:function(t,e,i,o){var n=this;if(i=i||function(e){e.statusCode=r.WX_ERR_CODE,t.fail(n.buildErrorConfig(r.WX_ERR_CODE,e.errMsg))},o=o||function(e){e.statusCode==r.WX_ERR_CODE&&t.complete(n.buildErrorConfig(r.WX_ERR_CODE,e.errMsg))},t.location){if(n.checkLocation(t)){var s=y.getLocationParam(t.location);e(s)}}else n.getWXLocation(e,i,o)}},v=function(){function t(e){if(o(this,t),!e.key)throw Error("key值不能为空");this.key=e.key}return s(t,[{key:"search",value:function(t){var e=this;if(t=t||{},y.polyfillParam(t),y.checkKeyword(t)){var i={keyword:t.keyword,orderby:t.orderby||"_distance",page_size:t.page_size||10,page_index:t.page_index||1,output:"json",key:e.key};t.address_format&&(i.address_format=t.address_format),t.filter&&(i.filter=t.filter);var o=t.distance||"1000",n=t.auto_extend||1,s=null,r=null;t.region&&(s=t.region),t.rectangle&&(r=t.rectangle);var a=function(e){s&&!r?(i.boundary="region("+s+","+n+","+e.latitude+","+e.longitude+")",t.sig&&(i.sig=y.getSig(i,t.sig,"search"))):r&&!s?(i.boundary="rectangle("+r+")",t.sig&&(i.sig=y.getSig(i,t.sig,"search"))):(i.boundary="nearby("+e.latitude+","+e.longitude+","+o+","+n+")",t.sig&&(i.sig=y.getSig(i,t.sig,"search"))),wx.request(y.buildWxRequestConfig(t,{url:c,data:i},"search"))};y.locationProcess(t,a)}}},{key:"getSuggestion",value:function(t){var e=this;if(t=t||{},y.polyfillParam(t),y.checkKeyword(t)){var i={keyword:t.keyword,region:t.region||"全国",region_fix:t.region_fix||0,policy:t.policy||0,page_size:t.page_size||10,page_index:t.page_index||1,get_subpois:t.get_subpois||0,output:"json",key:e.key};if(t.address_format&&(i.address_format=t.address_format),t.filter&&(i.filter=t.filter),t.location){var o=function(e){i.location=e.latitude+","+e.longitude,t.sig&&(i.sig=y.getSig(i,t.sig,"suggest")),wx.request(y.buildWxRequestConfig(t,{url:l,data:i},"suggest"))};y.locationProcess(t,o)}else t.sig&&(i.sig=y.getSig(i,t.sig,"suggest")),wx.request(y.buildWxRequestConfig(t,{url:l,data:i},"suggest"))}}},{key:"reverseGeocoder",value:function(t){var e=this;t=t||{},y.polyfillParam(t);var i={coord_type:t.coord_type||5,get_poi:t.get_poi||0,output:"json",key:e.key};t.poi_options&&(i.poi_options=t.poi_options);var o=function(e){i.location=e.latitude+","+e.longitude,t.sig&&(i.sig=y.getSig(i,t.sig,"reverseGeocoder")),wx.request(y.buildWxRequestConfig(t,{url:u,data:i},"reverseGeocoder"))};y.locationProcess(t,o)}},{key:"geocoder",value:function(t){var e=this;if(t=t||{},y.polyfillParam(t),!y.checkParamKeyEmpty(t,"address")){var i={address:t.address,output:"json",key:e.key};t.region&&(i.region=t.region),t.sig&&(i.sig=y.getSig(i,t.sig,"geocoder")),wx.request(y.buildWxRequestConfig(t,{url:u,data:i},"geocoder"))}}},{key:"getCityList",value:function(t){var e=this;t=t||{},y.polyfillParam(t);var i={output:"json",key:e.key};t.sig&&(i.sig=y.getSig(i,t.sig,"getCityList")),wx.request(y.buildWxRequestConfig(t,{url:p,data:i},"getCityList"))}},{key:"getDistrictByCityId",value:function(t){var e=this;if(t=t||{},y.polyfillParam(t),!y.checkParamKeyEmpty(t,"id")){var i={id:t.id||"",output:"json",key:e.key};t.sig&&(i.sig=y.getSig(i,t.sig,"getDistrictByCityId")),wx.request(y.buildWxRequestConfig(t,{url:h,data:i},"getDistrictByCityId"))}}},{key:"calculateDistance",value:function(t){var e=this;if(t=t||{},y.polyfillParam(t),!y.checkParamKeyEmpty(t,"to")){var i={mode:t.mode||"walking",to:y.location2query(t.to),output:"json",key:e.key};if(t.from&&(t.location=t.from),"straight"==i.mode){var o=function(e){for(var o=y.getEndLocation(i.to),n={message:"query ok",result:{elements:[]},status:0},s=0;s<o.length;s++)n.result.elements.push({distance:y.getDistance(e.latitude,e.longitude,o[s].lat,o[s].lng),duration:0,from:{lat:e.latitude,lng:e.longitude},to:{lat:o[s].lat,lng:o[s].lng}});var r=n.result.elements,a=[];for(s=0;s<r.length;s++)a.push(r[s].distance);return t.success(n,{calculateResult:r,distanceResult:a})};y.locationProcess(t,o)}else{o=function(e){i.from=e.latitude+","+e.longitude,t.sig&&(i.sig=y.getSig(i,t.sig,"calculateDistance")),wx.request(y.buildWxRequestConfig(t,{url:d,data:i},"calculateDistance"))};y.locationProcess(t,o)}}}},{key:"direction",value:function(t){var e=this;if(t=t||{},y.polyfillParam(t),!y.checkParamKeyEmpty(t,"to")){var i={output:"json",key:e.key};"string"==typeof t.to?i.to=t.to:i.to=t.to.latitude+","+t.to.longitude;var o=null;t.mode=t.mode||g.driving,o=m+t.mode,t.from&&(t.location=t.from),t.mode==g.driving&&(t.from_poi&&(i.from_poi=t.from_poi),t.heading&&(i.heading=t.heading),t.speed&&(i.speed=t.speed),t.accuracy&&(i.accuracy=t.accuracy),t.road_type&&(i.road_type=t.road_type),t.to_poi&&(i.to_poi=t.to_poi),t.from_track&&(i.from_track=t.from_track),t.waypoints&&(i.waypoints=t.waypoints),t.policy&&(i.policy=t.policy),t.plate_number&&(i.plate_number=t.plate_number)),t.mode==g.transit&&(t.departure_time&&(i.departure_time=t.departure_time),t.policy&&(i.policy=t.policy));var n=function(e){i.from=e.latitude+","+e.longitude,t.sig&&(i.sig=y.getSig(i,t.sig,"direction",t.mode)),wx.request(y.buildWxRequestConfig(t,{url:o,data:i},"direction"))};y.locationProcess(t,n)}}}]),t}();t.exports=v},"747f":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("3d3b"));function n(t){return t&&t.__esModule?t:{default:t}}var s=t.getStorageSync("userinfo"),r={hIndex:function(){return new Promise(function(t){o.default.post("/index.php/Home/Index/index","",function(e){t(e)})})},hNew:function(t,e){return new Promise(function(i){o.default.post("/index.php/Home/Category/new_goods?p="+t.page+"&num="+t.downNum,e,function(t){i(t)})})},hBu:function(t,e){return new Promise(function(i){o.default.post("/index.php/Home/Category/bu_goods?p="+t.page+"&num="+t.downNum,e,function(t){i(t)})})},hDis:function(t,e){return new Promise(function(i){o.default.post("/index.php/Home/Promotion/dis?p="+t.page+"&num="+t.downNum,e,function(t){i(t)})})},hSale:function(t,e){return new Promise(function(i){o.default.post("/index.php/Home/Category/get_province_sale?p="+t.page+"&num="+t.downNum,e,function(t){i(t)})})},hLike:function(){return new Promise(function(t){o.default.post("/Home/Category/get_sale/","",function(e){t(e)})})},addShop:function(t){var e={max_buy:40,oversea:s.oversea};return new Promise(function(i){o.default.post("/index.php/Home/Cart/addCart?sn="+t.item_no+"&num="+t.allNum,e,function(t){i(t)})})},product:function(t){return new Promise(function(e){o.default.post("/index.php/Home/Goods/index/id/"+t,"",function(t){e(t)})})},addLike:function(t){return new Promise(function(e){o.default.post("/index.php/Home/Collect/addcollect",t,function(t){e(t)})})},deleteLike:function(t){return new Promise(function(e){o.default.post("/index.php/Home/Collect/delcollect",t,function(t){e(t)})})},cartData:function(t){var e={cart_times:129600};return new Promise(function(i){o.default.post("/index.php/Home/Cart/index?num="+t,e,function(t){i(t)})})},money:function(){return new Promise(function(t){o.default.post("/Home/Index/get_amt?hdid="+s.hdid,"",function(e){t(e)})})},integral:function(){return new Promise(function(t){o.default.post("/index.php/Home/User/integralindex","",function(e){t(e)})})},dis:function(){return new Promise(function(t){o.default.post("/index.php/Home/Coupon/index","",function(e){t(e)})})},changenum:function(t){return new Promise(function(e){o.default.post("/index.php/Home/Cart/changenum?sn="+t.item_no+"&num="+t.num,"",function(t){e(t)})})},category:function(t,e){return new Promise(function(i){o.default.post("/index.php/Home/Category/appindex?id="+t.listId+"&pagesize="+t.pagesize+"&p="+t.page+"&num="+t.downNum,e,function(t){i(t)})})},artData:function(t){return new Promise(function(e){o.default.post("/Home/Article/show?id="+t,"",function(t){e(t)})})},cartDele:function(t){return new Promise(function(e){o.default.post("/Home/Cart/delGoods?sn="+t.item_no,t.id,function(t){e(t)})})},cartAlldele:function(){return new Promise(function(t){o.default.post("/index.php/Home/Cart/clear?uid="+s.uid,"",function(e){t(e)})})},cartJiesuan:function(t){return t.uname=s.username,new Promise(function(e){o.default.post("/index.php/Home/Cart/app_jiesuan",t,function(t){e(t)})})},searchData:function(t){var e={type:"app"};return new Promise(function(i){o.default.post("/index.php/Home/Category/search?ser_key="+t.text+"&p="+t.page+"&num="+t.downNum,e,function(t){i(t)})})},queryRep:function(t,e){return new Promise(function(i){o.default.post("/index.php/Home/User/appStock?code="+t.p_num,e,function(t){i(t)})})},saleData:function(){return new Promise(function(t){o.default.post("/index.php/Home/User/shouhou","",function(e){t(e)})})},saleView:function(t){return new Promise(function(e){o.default.post("/index.php/Home/User/shouhou_view?mid="+t.mid,"",function(t){e(t)})})},saleDele:function(t){return new Promise(function(e){o.default.post("/Home/User/shouhou_del?id="+t.mid,"",function(t){e(t)})})},saleAdd:function(t){return new Promise(function(e){o.default.arry("/index.php/Home/User/shouhou_add",t,function(t){e(t)})})},saleScan:function(t){return new Promise(function(e){o.default.arry("/index.php/Home/User/getItemInfo?item_no="+t.result,"",function(t){e(t)})})},saleName:function(t){return new Promise(function(e){o.default.post("/index.php/Home/User/getItemInfo?item_no="+t.value,"",function(t){e(t)})})},logisList:function(t){return new Promise(function(e){o.default.post("/index.php/Home/User/sh_express_list?p="+t.p,"",function(t){e(t)})})},logisData:function(t){return new Promise(function(e){o.default.post("/index.php/Home/User/sh_express_view?mid="+t.mid,"",function(t){e(t)})})},logisView:function(){return new Promise(function(t){o.default.post("/index.php/Home/User/sh_express","",function(e){t(e)})})},logisAdd:function(){return new Promise(function(t){o.default.post("/index.php/Home/User/sh_express","",function(e){t(e)})})},orderHa:function(t){return new Promise(function(e){o.default.post("/index.php/Home/User/orderList?p="+t.page,"",function(t){e(t)})})},orderHaView:function(t){return new Promise(function(e){o.default.post("/index.php/Home/User/orderView/sn/"+t.sn,"",function(t){e(t)})})},orderHd:function(t){return new Promise(function(e){o.default.post("/index.php/Home/Hd/orderList?p="+t.page,"",function(t){e(t)})})},orderHdView:function(t){return new Promise(function(e){o.default.post("/index.php/Home/Hd/orderView/sn/"+t.sn,"",function(t){e(t)})})},colList:function(){return new Promise(function(t){o.default.post("/index.php/Home/Collect/index","",function(e){t(e)})})},colDele:function(t){return new Promise(function(e){o.default.post("/index.php/Home/Collect/delcollect",t,function(t){e(t)})})},colDeleAll:function(){return new Promise(function(t){o.default.post("/index.php/Home/Collect/clear","",function(e){t(e)})})},address:function(){return new Promise(function(t){o.default.post("/index.php/Home/User/Address","",function(e){t(e)})})},categories_app:function(){return new Promise(function(t){o.default.post("/index.php/Home/Category/categories_tree3","",function(e){t(e)})})},marketRank:function(t){return new Promise(function(e){o.default.post("/index.php/Home/User/ranking",t,function(t){e(t)})})},marketView:function(t){return new Promise(function(e){o.default.post("/index.php/Home/User/mysale",t,function(t){e(t)})})},reqRank:function(){return new Promise(function(t){o.default.post("/index.php/Home/User/allstock","",function(e){t(e)})})},reqView:function(t,e){return new Promise(function(i){o.default.post("/index.php/Home/User/appStock?code="+t.p_num,e,function(t){i(t)})})},Version:function(t){return new Promise(function(e){o.default.post("/index.php/Home/Version/index",t,function(t){e(t)})})}},a=r;e.default=a}).call(this,i("6e42")["default"])},"752b":function(t,e,i){"use strict";(function(e,i){var o={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:12,pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};function n(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),o=1;o<arguments.length;o++){var n=arguments[o];if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i}var s={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var i=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!i}};function r(t,e){var i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,o=t.replace(i,function(t,e,i,o){return e+e+i+i+o+o}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o),s=parseInt(n[1],16),r=parseInt(n[2],16),a=parseInt(n[3],16);return"rgba("+s+","+r+","+a+","+e+")"}function a(t,e,i){if(isNaN(t))throw new Error("[wxCharts] unvalid series data!");i=i||10,e=e||"upper";var o=1;while(i<1)i*=10,o*=10;t="upper"===e?Math.ceil(t*o):Math.floor(t*o);while(t%i!==0)"upper"===e?t++:t--;return t/o}function c(t,e,i,o){var n=o.width-i.padding-e.xAxisPoints[0],s=e.eachSpacing*o.categories.length,r=t;return t>=0?r=0:Math.abs(t)>=s-n&&(r=n-s),r}function l(t,e,i){function o(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=o(t),e=o(e),i=o(i),e>i&&(i+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=i}function u(t,e,i){var o=t,n=i-e,s=o+(i-n-o)/Math.sqrt(2);s*=-1;var r=(i-n)*(Math.sqrt(2)-1)-(i-n-o)/Math.sqrt(2);return{transX:s,transY:r}}function p(t,e){function i(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var o=.2,n=.2,s=null,r=null,a=null,c=null;if(e<1?(s=t[0].x+(t[1].x-t[0].x)*o,r=t[0].y+(t[1].y-t[0].y)*o):(s=t[e].x+(t[e+1].x-t[e-1].x)*o,r=t[e].y+(t[e+1].y-t[e-1].y)*o),e>t.length-3){var l=t.length-1;a=t[l].x-(t[l].x-t[l-1].x)*n,c=t[l].y-(t[l].y-t[l-1].y)*n}else a=t[e+1].x-(t[e+2].x-t[e].x)*n,c=t[e+1].y-(t[e+2].y-t[e].y)*n;return i(t,e+1)&&(c=t[e+1].y),i(t,e)&&(r=t[e].y),{ctrA:{x:s,y:r},ctrB:{x:a,y:c}}}function h(t,e,i){return{x:i.x+t,y:i.y-e}}function d(t,e){if(e)while(s.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function m(t,e){var i=0;return t.map(function(t){return t.color||(t.color=e.colors[i],i=(i+1)%e.colors.length),t})}function g(t,e){return t.map(function(t){return t.type||(t.type=e.type),t})}function f(t,e){var i=0,o=e-t;return i=o>=1e4?1e3:o>=1e3?100:o>=100?10:o>=10?5:o>=1?1:o>=.1?.1:.01,{minRange:a(t,"lower",i),maxRange:a(e,"upper",i)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.fontSize;t=String(t);t=t.split("");var i=0;return t.forEach(function(t){/[a-zA-Z]/.test(t)?i+=7:/[0-9]/.test(t)?i+=5.5:/\./.test(t)?i+=2.7:/-/.test(t)?i+=3.25:/[\u4e00-\u9fa5]/.test(t)?i+=10:/\(|\)/.test(t)?i+=3.73:/\s/.test(t)?i+=2.5:/%/.test(t)?i+=8:i+=10}),i*e/10}function v(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function x(t){for(var e=new Array(t[0].data.length),i=0;i<e.length;i++)e[i]=0;for(var o=0;o<t.length;o++)for(i=0;i<e.length;i++)e[i]+=t[o].data[i];return t.reduce(function(t,i){return(t.data?t.data:t).concat(i.data).concat(e)},[])}function _(t,e,i){var o,n;return t.clientX?e.rotate?(n=e.height-t.clientX*e.pixelRatio,o=(t.pageY-i.mp.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(o=t.clientX*e.pixelRatio,n=(t.pageY-i.mp.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(n=e.height-t.x*e.pixelRatio,o=t.y*e.pixelRatio):(o=t.x*e.pixelRatio,n=t.y*e.pixelRatio),{x:o,y:n}}function b(t,e){var i=[];return t.forEach(function(t){if(null!==t.data[e]&&"undefined"!==typeof t.data[e]){var o={};o.color=t.color,o.name=t.name,o.data=t.format?t.format(t.data[e]):t.data[e],i.push(o)}}),i}function w(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function j(t){for(var e=2*Math.PI/t,i=[],o=0;o<t;o++)i.push(e*o);return i.map(function(t){return-1*t+Math.PI/2})}function k(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=t.map(function(t){return{text:n.format?n.format(t,o[i]):t.name+": "+t.data,color:t.color}}),r=[],a={x:0,y:0};return e.forEach(function(t){"undefined"!==typeof t[i]&&null!==t[i]&&r.push(t[i])}),r.forEach(function(t){a.x=Math.round(t.x),a.y+=t.y}),a.y/=r.length,{textList:s,offset:a}}function A(t,e,i,o,n,s){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var r=s.color.upFill,a=s.color.downFill,c=[r,r,a,r],l=[],u={text:n[o],color:null};l.push(u),e.map(function(e){0==o&&e.data[1]-e.data[0]<0?c[1]=a:(e.data[0]<t[o-1][1]&&(c[0]=a),e.data[1]<e.data[0]&&(c[1]=a),e.data[2]>t[o-1][1]&&(c[2]=r),e.data[3]<t[o-1][1]&&(c[3]=a));var i={text:"开盘："+e.data[0],color:c[0]},n={text:"收盘："+e.data[1],color:c[1]},s={text:"最低："+e.data[2],color:c[2]},u={text:"最高："+e.data[3],color:c[3]};l.push(i,n,s,u)});var p=[],h={x:0,y:0};return i.forEach(function(t){"undefined"!==typeof t[o]&&null!==t[o]&&p.push(t[o])}),h.x=Math.round(p[0][0].x),{textList:l,offset:h}}function S(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=-1;return P(t,i,o)&&e.forEach(function(e,i){t.x+n>e&&(s=i)}),s}function P(t,e,i){return t.x<e.width-i.padding&&t.x>i.padding+i.yAxisWidth+i.yAxisTitleWidth&&t.y>i.padding&&t.y<e.height-i.legendHeight-i.xAxisHeight-i.padding}function T(t,e,i){var o=2*Math.PI/i,n=-1;if(O(t,e.center,e.radius)){var s=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},r=Math.atan2(e.center.y-t.y,t.x-e.center.x);r*=-1,r<0&&(r+=2*Math.PI);var a=e.angleList.map(function(t){return t=s(-1*t),t});a.forEach(function(t,e){var i=s(t-o/2),a=s(t+o/2);a<i&&(a+=2*Math.PI),(r>=i&&r<=a||r+2*Math.PI>=i&&r+2*Math.PI<=a)&&(n=e)})}return n}function E(t,e){var i=-1;if(O(t,e.center,e.radius)){var o=Math.atan2(e.center.y-t.y,t.x-e.center.x);o=-o;for(var n=0,s=e.series.length;n<s;n++){var r=e.series[n];if(l(o,r._start_,r._start_+2*r._proportion_*Math.PI)){i=n;break}}}return i}function O(t,e,i){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(i,2)}function D(t){var e=[],i=[];return t.forEach(function(t,o){null!==t?i.push(t):(i.length&&e.push(i),i=[])}),i.length&&e.push(i),e}function L(t,e,i){if(!1===e.legend)return{legendList:[],legendHeight:0};var o=5*e.pixelRatio,n=8*e.pixelRatio,s=15*e.pixelRatio,r=[],a=0,c=[];return t.forEach(function(t){var i=3*o+s+y(t.name||"undefined");a+i>e.width?(r.push(c),a=i,c=[t]):(a+=i,c.push(t))}),c.length&&r.push(c),{legendList:r,legendHeight:r.length*(i.fontSize+n)+o}}function F(t,e,i){var o={angle:0,xAxisHeight:i.xAxisHeight},n=W(t,e,i),s=n.eachSpacing,r=t.map(function(t){return y(t)}),a=Math.max.apply(this,r);return 1==e.xAxis.rotateLabel&&a+2*i.xAxisTextPadding>s&&(o.angle=45*Math.PI/180,o.xAxisHeight=2*i.xAxisTextPadding+a*Math.sin(o.angle)),o}function M(t,e,i,o,n){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=n.extra.radar||{};r.max=r.max||0;var a=Math.max(r.max,Math.max.apply(null,v(o))),c=[];return o.forEach(function(o){var n={};n.color=o.color,n.data=[],o.data.forEach(function(o,r){var c={};c.angle=t[r],c.proportion=o/a,c.position=h(i*c.proportion*s*Math.cos(c.angle),i*c.proportion*s*Math.sin(c.angle),e),n.data.push(c)}),c.push(n)}),c}function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=0,o=0;return t.forEach(function(t){t.data=null===t.data?0:t.data,i+=t.data}),t.forEach(function(t){t.data=null===t.data?0:t.data,t._proportion_=t.data/i*e}),t.forEach(function(t){t._start_=o,o+=2*t._proportion_*Math.PI}),t}function $(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return 1==i&&(i=.999999),t.forEach(function(t){var o;t.data=null===t.data?0:t.data,o="default"==e.type?e.startAngle-e.endAngle+1:2,t._proportion_=o*t.data*i+e.startAngle,t._proportion_>=2&&(t._proportion_=t._proportion_%2)}),t}function z(t,e,i){for(var o=e-i+1,n=e,s=0;s<t.length;s++)t[s].value=null===t[s].value?0:t[s].value,t[s]._startAngle_=n,t[s]._endAngle_=o*t[s].value+e,t[s]._endAngle_>=2&&(t[s]._endAngle_=t[s]._endAngle_%2),n=t[s]._endAngle_;return t}function R(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return t.forEach(function(t){if(t.data=null===t.data?0:t.data,"auto"==i.pointer.color){for(var n=0;n<e.length;n++)if(t.data<=e[n].value){t.color=e[n].color;break}}else t.color=i.pointer.color;var s=i.startAngle-i.endAngle+1;t._endAngle_=s*t.data+i.startAngle,t._oldAngle_=i.oldAngle,i.oldAngle<i.endAngle&&(t._oldAngle_+=2),t.data>=i.oldData?t._proportion_=(t._endAngle_-t._oldAngle_)*o+i.oldAngle:t._proportion_=t._oldAngle_-(t._oldAngle_-t._endAngle_)*o,t._proportion_>=2&&(t._proportion_=t._proportion_%2)}),t}function I(t){t=C(t);var e=0;return t.forEach(function(t){var i=t.format?t.format(+t._proportion_.toFixed(2)):s.toFixed(100*t._proportion_)+"%";e=Math.max(e,y(i))}),e}function H(t,e,i,o,n,s){return t.map(function(t){return null===t?null:(t.width=(e-2*n.columePadding)/i,s.extra.column&&s.extra.column.width&&+s.extra.column.width>0?t.width=Math.min(t.width,+s.extra.column.width):t.width=Math.min(t.width,25),t.x+=(o+.5-i/2)*t.width,t)})}function N(t,e,i,o,n,s,r){return t.map(function(t){return null===t?null:(t.width=e-2*n.columePadding,s.extra.column&&s.extra.column.width&&+s.extra.column.width>0?t.width=Math.min(t.width,+s.extra.column.width):t.width=Math.min(t.width,25),o>0&&(t.width-=2*r),t)})}function B(t,e,i,o,n,s,r){return t.map(function(t,i){return null===t?null:(t.width=e-2*n.columePadding,s.extra.column&&s.extra.column.width&&+s.extra.column.width>0?t.width=Math.min(t.width,+s.extra.column.width):t.width=Math.min(t.width,25),t)})}function W(t,e,i){var o=i.yAxisWidth+i.yAxisTitleWidth,n=e.width-2*i.padding-o,s=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length,r=n/s,a=[],c=i.padding+o,l=e.width-i.padding;return t.forEach(function(t,e){a.push(c+e*r)}),!0===e.enableScroll?a.push(c+t.length*r):a.push(l),{xAxisPoints:a,startX:c,endX:l,eachSpacing:r}}function q(t,e,i,o,n,s,r){var a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c=[],l=s.height-2*r.padding-r.xAxisHeight-r.legendHeight;return t.forEach(function(t,u){if(null===t)c.push(null);else{var p=[];t.forEach(function(t,c){var h={};h.x=o[u]+Math.round(n/2);var d=t.value||t,m=l*(d-e)/(i-e);m*=a,h.y=s.height-r.xAxisHeight-r.legendHeight-Math.round(m)-r.padding,p.push(h)}),c.push(p)}}),c}function U(t,e,i,o,n,s,r){var a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c=[],l=s.height-2*r.padding-r.xAxisHeight-r.legendHeight;return t.forEach(function(t,u){if(null===t)c.push(null);else{var p={};p.color=t.color,p.x=o[u]+Math.round(n/2);var h=t.value||t,d=l*(h-e)/(i-e);d*=a,p.y=s.height-r.xAxisHeight-r.legendHeight-Math.round(d)-r.padding,c.push(p)}}),c}function V(t,e,i,o,n,s,r,a,c){var l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],p=s.height-2*r.padding-r.xAxisHeight-r.legendHeight;return t.forEach(function(t,h){if(null===t)u.push(null);else{var d={};if(d.color=t.color,d.x=o[h]+Math.round(n/2),a>0){for(var m=0,g=0;g<=a;g++)m+=c[g].data[h];var f=m-t,y=p*(m-e)/(i-e),v=p*(f-e)/(i-e)}else m=t,y=p*(m-e)/(i-e),v=0;var x=v;y*=l,x*=l,d.y=s.height-r.xAxisHeight-r.legendHeight-Math.round(y)-r.padding,d.y0=s.height-r.xAxisHeight-r.legendHeight-Math.round(x)-r.padding,u.push(d)}}),u}function G(t,e,i,o){var n;n="stack"==o?x(t):v(t);var s=[];n=n.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),n.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){s.push(t)}):s.push(t.value):s.push(t)});var r=0,a=0;if(s.length>0&&(r=Math.min.apply(this,s),a=Math.max.apply(this,s)),"number"===typeof e.yAxis.min&&(r=Math.min(e.yAxis.min,r)),"number"===typeof e.yAxis.max&&(a=Math.max(e.yAxis.max,a)),r===a){var c=a||10;a+=c}for(var l=f(r,a),u=l.minRange,p=l.maxRange,h=[],d=(p-u)/i.yAxisSplit,m=0;m<=i.yAxisSplit;m++)h.push(u+d*m);return h.reverse()}function Q(t,e,i){var o=n({},e.extra.column||{type:""}),r=G(t,e,i,o.type),a=i.yAxisWidth,c=r.map(function(t){return t=s.toFixed(t,2),t=e.yAxis.format?e.yAxis.format(Number(t)):t,a=Math.max(a,y(t)+5),t});return!0===e.yAxis.disabled&&(a=0),{rangesFormat:c,ranges:r,yAxisWidth:a}}function K(t,e,i,o,n){var s=G(e,i,o),r=i.height-2*o.padding-o.xAxisHeight-o.legendHeight,a=s[0],c=s[s.length-1],l=o.padding,u=o.padding+r,p=a-(a-c)*(t-l)/(u-l);return p=i.yAxis.format?i.yAxis.format(Number(p)):p,p}function X(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function Y(t,e,i,o,n){o.beginPath(),o.setStrokeStyle("#ffffff"),o.setLineWidth(1*n.pixelRatio),o.setFillStyle(e),"diamond"===i?t.forEach(function(t,e){null!==t&&(o.moveTo(t.x,t.y-4.5),o.lineTo(t.x-4.5,t.y),o.lineTo(t.x,t.y+4.5),o.lineTo(t.x+4.5,t.y),o.lineTo(t.x,t.y-4.5))}):"circle"===i?t.forEach(function(t,e){null!==t&&(o.moveTo(t.x+3.5*n.pixelRatio,t.y),o.arc(t.x,t.y,4*n.pixelRatio,0,2*Math.PI,!1))}):"rect"===i?t.forEach(function(t,e){null!==t&&(o.moveTo(t.x-3.5,t.y-3.5),o.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===i&&t.forEach(function(t,e){null!==t&&(o.moveTo(t.x,t.y-4.5),o.lineTo(t.x-4.5,t.y+4.5),o.lineTo(t.x+4.5,t.y+4.5),o.lineTo(t.x,t.y-4.5))}),o.closePath(),o.fill(),o.stroke()}function J(t,e,i){var o=t.title.fontSize||e.titleFontSize,n=t.subtitle.fontSize||e.subtitleFontSize,s=t.title.name||"",r=t.subtitle.name||"",a=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,l=s?o:0,u=r?n:0,p=5;if(r){var h=y(r,n),d=(t.width-h)/2+(t.subtitle.offsetX||0),m=(t.height-e.legendHeight+n)/2+(t.subtitle.offsetY||0);s&&(m-=(l+p)/2),i.beginPath(),i.setFontSize(n),i.setFillStyle(c),i.fillText(r,d,m),i.closePath(),i.stroke()}if(s){var g=y(s,o),f=(t.width-g)/2+(t.title.offsetX||0),v=(t.height-e.legendHeight+o)/2+(t.title.offsetY||0);r&&(v+=(u+p)/2),i.beginPath(),i.setFontSize(o),i.setFillStyle(a),i.fillText(s,f,v),i.closePath(),i.stroke()}}function Z(t,e,i,o){var n=e.data;t.forEach(function(t,s){if(null!==t){o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle("#666666");var r=n[s].value||n[s],a=e.format?e.format(r):r;o.fillText(a,t.x-y(a)/2,t.y-2),o.closePath(),o.stroke()}})}function tt(t,e,i,o,n,s){e-=t.width/2+n.gaugeLabelTextMargin;for(var r=t.startAngle-t.endAngle+1,a=r/t.splitLine.splitNumber,c=t.endNumber-t.startNumber,l=c/t.splitLine.splitNumber,u=t.startAngle,p=t.startNumber,h=0;h<t.splitLine.splitNumber+1;h++){var d={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)};d.x+=i.x-y(p)/2,d.y+=i.y;var m=d.x,g=d.y;s.beginPath(),s.setFontSize(n.fontSize),s.setFillStyle(t.labelColor||"#666666"),s.fillText(p,m,g+n.fontSize/2),s.closePath(),s.stroke(),u+=a,u>=2&&(u%=2),p+=l}}function et(t,e,i,o,n,r){var a=o.extra.radar||{};e+=n.radarLabelTextMargin,t.forEach(function(t,c){var l={x:e*Math.cos(t),y:e*Math.sin(t)},u=h(l.x,l.y,i),p=u.x,d=u.y;s.approximatelyEqual(l.x,0)?p-=y(o.categories[c]||"")/2:l.x<0&&(p-=y(o.categories[c]||"")),r.beginPath(),r.setFontSize(n.fontSize),r.setFillStyle(a.labelColor||"#666666"),r.fillText(o.categories[c]||"",p,d+n.fontSize/2),r.closePath(),r.stroke()})}function it(t,e,i,o,n,r){var a=n+i.pieChartLinePadding,c=[],l=null,u=t.map(function(t){var e=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),i=t.format?t.format(+t._proportion_.toFixed(2)):s.toFixed(100*t._proportion_)+"%",o=t.color;return{arc:e,text:i,color:o}});u.forEach(function(t){var e=Math.cos(t.arc)*a,o=Math.sin(t.arc)*a,r=Math.cos(t.arc)*n,u=Math.sin(t.arc)*n,p=e>=0?e+i.pieChartTextPadding:e-i.pieChartTextPadding,h=o,m=y(t.text),g=h;l&&s.isSameXCoordinateArea(l.start,{x:p})&&(g=p>0?Math.min(h,l.start.y):e<0?Math.max(h,l.start.y):h>0?Math.max(h,l.start.y):Math.min(h,l.start.y)),p<0&&(p-=m);var f={lineStart:{x:r,y:u},lineEnd:{x:e,y:o},start:{x:p,y:g},width:m,height:i.fontSize,text:t.text,color:t.color};l=d(f,l),c.push(l)}),c.forEach(function(t){var n=h(t.lineStart.x,t.lineStart.y,r),s=h(t.lineEnd.x,t.lineEnd.y,r),a=h(t.start.x,t.start.y,r);o.setLineWidth(1*e.pixelRatio),o.setFontSize(i.fontSize),o.beginPath(),o.setStrokeStyle(t.color),o.setFillStyle(t.color),o.moveTo(n.x,n.y);var c=t.start.x<0?a.x+t.width:a.x,l=t.start.x<0?a.x-5:a.x+5;o.quadraticCurveTo(s.x,s.y,c,a.y),o.moveTo(n.x,n.y),o.stroke(),o.closePath(),o.beginPath(),o.moveTo(a.x+t.width,a.y),o.arc(c,a.y,2,0,2*Math.PI),o.closePath(),o.fill(),o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle("#666666"),o.fillText(t.text,l,a.y+3),o.closePath(),o.stroke(),o.closePath()})}function ot(t,e,i,o){var n=e.extra.tooltip||{};n.gridType=void 0==n.gridType?"solid":n.gridType,n.dashLength=void 0==n.dashLength?4:n.dashLength;var s=i.padding,a=e.height-i.padding-i.xAxisHeight-i.legendHeight;if("dash"==n.gridType&&o.setLineDash([n.dashLength,n.dashLength]),o.beginPath(),o.setStrokeStyle(n.gridColor||"#cccccc"),o.setLineWidth(1*e.pixelRatio),o.moveTo(t,s),o.lineTo(t,a),o.closePath(),o.stroke(),o.setLineDash([]),n.xAxisLabel){var c=e.categories[e.tooltip.index];o.setFontSize(i.fontSize);var l=o.measureText(c).width,u=t-i.toolTipPadding-.5*l,p=a;o.beginPath(),o.setFillStyle(r(n.labelBgColor||i.toolTipBackground,n.labelBgOpacity||i.toolTipOpacity)),o.setStrokeStyle(n.labelBgColor||i.toolTipBackground),o.setLineWidth(1*e.pixelRatio),o.rect(u,p,l+2*i.toolTipPadding,i.fontSize+2*i.toolTipPadding),o.closePath(),o.stroke(),o.fill(),o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(n.labelFontColor||i.fontColor),o.fillText(c,u+2*i.toolTipPadding,p+i.toolTipPadding+i.fontSize),o.closePath(),o.stroke()}}function nt(t,e,i,o,n){var s=t.extra.tooltip||{};s.gridType=void 0==s.gridType?"solid":s.gridType,s.dashLength=void 0==s.dashLength?4:s.dashLength;var a=e.padding+e.yAxisWidth+e.yAxisTitleWidth,c=t.width-e.padding;if("dash"==s.gridType&&i.setLineDash([s.dashLength,s.dashLength]),i.beginPath(),i.setStrokeStyle(s.gridColor||"#cccccc"),i.setLineWidth(1*t.pixelRatio),i.moveTo(a,t.tooltip.offset.y),i.lineTo(c,t.tooltip.offset.y),i.closePath(),i.stroke(),i.setLineDash([]),s.yAxisLabel){var l=K(t.tooltip.offset.y,t.series,t,e,o);i.setFontSize(e.fontSize);var u=i.measureText(l).width,p=a-2*e.toolTipPadding-u,h=t.tooltip.offset.y;i.beginPath(),i.setFillStyle(r(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),i.setStrokeStyle(s.labelBgColor||e.toolTipBackground),i.setLineWidth(1*t.pixelRatio),i.rect(p,h-.5*e.fontSize-e.toolTipPadding,u+2*e.toolTipPadding,e.fontSize+2*e.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(e.fontSize),i.setFillStyle(s.labelFontColor||e.fontColor),i.fillText(l,p+e.toolTipPadding,h+.5*e.fontSize),i.closePath(),i.stroke()}}function st(t,e,i,o,n){var s=i.padding,a=e.height-i.padding-i.xAxisHeight-i.legendHeight;o.beginPath(),o.setFillStyle(r("#000000",.08)),o.rect(t-n/2,s,n,a-s),o.closePath(),o.fill()}function rt(t,e,i,o,s,a,c){i.extra.tooltip;var l=4*i.pixelRatio,u=5*i.pixelRatio,p=8*i.pixelRatio,h=!1;"line"!=i.type&&"area"!=i.type&&"candle"!=i.type&&"mix"!=i.type||ot(i.tooltip.offset.x,i,o,s),e=n({x:0,y:0},e),e.y-=8*i.pixelRatio;var d=t.map(function(t){return y(t.text)}),m=l+u+4*o.toolTipPadding+Math.max.apply(null,d),g=2*o.toolTipPadding+t.length*o.toolTipLineHeight;e.x-Math.abs(i._scrollDistance_)+p+m>i.width&&(h=!0),s.beginPath(),s.setFillStyle(r(i.tooltip.option.background||o.toolTipBackground,o.toolTipOpacity)),h?(s.moveTo(e.x,e.y+10*i.pixelRatio),s.lineTo(e.x-p,e.y+10*i.pixelRatio-5*i.pixelRatio),s.lineTo(e.x-p,e.y),s.lineTo(e.x-p-Math.round(m),e.y),s.lineTo(e.x-p-Math.round(m),e.y+g),s.lineTo(e.x-p,e.y+g),s.lineTo(e.x-p,e.y+10*i.pixelRatio+5*i.pixelRatio),s.lineTo(e.x,e.y+10*i.pixelRatio)):(s.moveTo(e.x,e.y+10*i.pixelRatio),s.lineTo(e.x+p,e.y+10*i.pixelRatio-5*i.pixelRatio),s.lineTo(e.x+p,e.y),s.lineTo(e.x+p+Math.round(m),e.y),s.lineTo(e.x+p+Math.round(m),e.y+g),s.lineTo(e.x+p,e.y+g),s.lineTo(e.x+p,e.y+10*i.pixelRatio+5*i.pixelRatio),s.lineTo(e.x,e.y+10*i.pixelRatio)),s.closePath(),s.fill(),t.forEach(function(t,i){if(null!==t.color){s.beginPath(),s.setFillStyle(t.color);var n=e.x+p+2*o.toolTipPadding,r=e.y+(o.toolTipLineHeight-o.fontSize)/2+o.toolTipLineHeight*i+o.toolTipPadding+1;h&&(n=e.x-m-p+2*o.toolTipPadding),s.fillRect(n,r,l,o.fontSize),s.closePath()}}),t.forEach(function(t,i){var n=e.x+p+2*o.toolTipPadding+l+u;h&&(n=e.x-m-p+2*o.toolTipPadding+ +l+u);var r=e.y+(o.toolTipLineHeight-o.fontSize)/2+o.toolTipLineHeight*i+o.toolTipPadding;s.beginPath(),s.setFontSize(o.fontSize),s.setFillStyle("#ffffff"),s.fillText(t.text,n,r+o.fontSize),s.closePath(),s.stroke()})}function at(t,e,i,o){var n=i.xAxisHeight+(e.height-i.xAxisHeight-y(t))/2;o.save(),o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(e.yAxis.titleFontColor||"#333333"),o.translate(0,e.height),o.rotate(-90*Math.PI/180),o.fillText(t,n,i.padding+.5*i.fontSize),o.closePath(),o.stroke(),o.restore()}function ct(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=e.extra.column||{type:{},meter:{}};s.type=void 0==s.type?"group":s.type,s.meter=s.meter||{},s.meter.border=void 0==s.meter.border?4:s.meter.border,s.meter.fillColor=void 0==s.meter.fillColor?"#FFFFFF":s.meter.fillColor;var r=Q(t,e,i),a=r.ranges,c=W(e.categories,e,i),l=c.xAxisPoints,u=c.eachSpacing,p=a.pop(),h=a.shift(),d=[];return o.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&o.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===n&&st(e.tooltip.offset.x,e,i,o,u),t.forEach(function(r,a){var c=r.data;switch(s.type){case"group":var m=U(c,p,h,l,u,e,i,n),g=V(c,p,h,l,u,e,i,a,t,n);d.push(g),m=H(m,u,t.length,a,i,e),m.forEach(function(t,n){if(null!==t){o.beginPath(),o.setFillStyle(t.color||r.color);var s=t.x-t.width/2+1,a=e.height-t.y-i.padding-i.xAxisHeight-i.legendHeight;o.moveTo(s,t.y),o.fillRect(s,t.y,t.width-2,a),o.closePath(),o.fill()}});break;case"stack":m=V(c,p,h,l,u,e,i,a,t,n);d.push(m),m=B(m,u,t.length,a,i,e,t),m.forEach(function(t,n){if(null!==t){o.beginPath(),o.setFillStyle(t.color||r.color);var s=t.x-t.width/2+1,c=e.height-t.y-i.padding-i.xAxisHeight-i.legendHeight,l=e.height-t.y0-i.padding-i.xAxisHeight-i.legendHeight;a>0&&(c-=l),o.moveTo(s,t.y),o.fillRect(s,t.y,t.width-2,c),o.closePath(),o.fill()}});break;case"meter":m=U(c,p,h,l,u,e,i,n);d.push(m),m=N(m,u,t.length,a,i,e,s.meter.border),0==a?m.forEach(function(t,n){if(null!==t){o.beginPath(),o.setFillStyle(s.meter.fillColor);var a=t.x-t.width/2+1,c=e.height-t.y-i.padding-i.xAxisHeight-i.legendHeight;o.moveTo(a,t.y),o.fillRect(a,t.y,t.width-2,c),o.closePath(),o.fill(),o.beginPath(),o.setStrokeStyle(r.color),o.setLineWidth(s.meter.border*e.pixelRatio),o.moveTo(a+.5*s.meter.border,t.y+c),o.lineTo(a+.5*s.meter.border,t.y+.5*s.meter.border),o.lineTo(a+t.width-s.meter.border,t.y+.5*s.meter.border),o.lineTo(a+t.width-s.meter.border,t.y+c),o.stroke()}}):m.forEach(function(t,n){if(null!==t){o.beginPath(),o.setFillStyle(t.color||r.color);var s=t.x-t.width/2+1,a=e.height-t.y-i.padding-i.xAxisHeight-i.legendHeight;o.moveTo(s,t.y),o.rect(s,t.y,t.width-2,a),o.closePath(),o.fill()}});break}}),!1!==e.dataLabel&&1===n&&t.forEach(function(r,a){var c=r.data;switch(s.type){case"group":var d=U(c,p,h,l,u,e,i,n);d=H(d,u,t.length,a,i,e),Z(d,r,i,o);break;case"stack":d=V(c,p,h,l,u,e,i,a,t,n);Z(d,r,i,o);break;case"meter":d=U(c,p,h,l,u,e,i,n);Z(d,r,i,o);break}}),o.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:u}}function lt(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=e.extra.candle||{color:{},average:{}};s.color.upLine=s.color.upLine?s.color.upLine:"#f04864",s.color.upFill=s.color.upFill?s.color.upFill:"#f04864",s.color.downLine=s.color.downLine?s.color.downLine:"#2fc25b",s.color.downFill=s.color.downFill?s.color.downFill:"#2fc25b",s.average.show=!0===s.average.show,s.average.name=s.average.name?s.average.name:[],s.average.day=s.average.day?s.average.day:[],s.average.color=s.average.color?s.average.color:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],e.extra.candle=s;var r=Q(t,e,i),a=r.ranges,c=W(e.categories,e,i),l=c.xAxisPoints,u=c.eachSpacing,p=a.pop(),h=a.shift(),d=[];return o.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&o.translate(e._scrollDistance_,0),t.forEach(function(t,r){var a=t.data,c=q(a,p,h,l,u,e,i,n);d.push(c);var m=D(c);m=m[0],m.forEach(function(t,i){o.beginPath(),a[i][1]-a[i][0]>0?(o.setStrokeStyle(s.color.upLine),o.setFillStyle(s.color.upFill),o.setLineWidth(1*e.pixelRatio),o.moveTo(t[3].x,t[3].y),o.lineTo(t[1].x,t[1].y),o.lineTo(t[1].x-u/4,t[1].y),o.lineTo(t[0].x-u/4,t[0].y),o.lineTo(t[0].x,t[0].y),o.lineTo(t[2].x,t[2].y),o.lineTo(t[0].x,t[0].y),o.lineTo(t[0].x+u/4,t[0].y),o.lineTo(t[1].x+u/4,t[1].y),o.lineTo(t[1].x,t[1].y),o.moveTo(t[3].x,t[3].y)):(o.setStrokeStyle(s.color.downLine),o.setFillStyle(s.color.downFill),o.setLineWidth(1*e.pixelRatio),o.moveTo(t[3].x,t[3].y),o.lineTo(t[0].x,t[0].y),o.lineTo(t[0].x-u/4,t[0].y),o.lineTo(t[1].x-u/4,t[1].y),o.lineTo(t[1].x,t[1].y),o.lineTo(t[2].x,t[2].y),o.lineTo(t[1].x,t[1].y),o.lineTo(t[1].x+u/4,t[1].y),o.lineTo(t[0].x+u/4,t[0].y),o.lineTo(t[0].x,t[0].y),o.moveTo(t[3].x,t[3].y)),o.closePath(),o.fill(),o.stroke()})}),o.restore(),s.average.show,{xAxisPoints:l,calPoints:d,eachSpacing:u}}function ut(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=Q(t,e,i),r=s.ranges,a=W(e.categories,e,i),c=a.xAxisPoints,l=a.eachSpacing,u=r.pop(),h=r.shift(),d=e.height-i.padding-i.xAxisHeight-i.legendHeight,m=[];return o.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&o.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===n&&ot(e.tooltip.offset.x,e,i,o),t.forEach(function(t,s){var r=t.data,a=U(r,u,h,c,l,e,i,n);m.push(a);var g=D(a);if(g.forEach(function(i){if(o.beginPath(),o.setStrokeStyle(t.color),o.setFillStyle(t.color),o.setGlobalAlpha(.2),o.setLineWidth(2*e.pixelRatio),i.length>1){var n=i[0],s=i[i.length-1];o.moveTo(n.x,n.y),"curve"===e.extra.lineStyle?i.forEach(function(t,e){if(e>0){var n=p(i,e-1);o.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&o.lineTo(t.x,t.y)}),o.lineTo(s.x,d),o.lineTo(n.x,d),o.lineTo(n.x,n.y)}else{var r=i[0];o.moveTo(r.x-l/2,r.y),o.lineTo(r.x+l/2,r.y),o.lineTo(r.x+l/2,d),o.lineTo(r.x-l/2,d),o.moveTo(r.x-l/2,r.y)}o.closePath(),o.fill(),o.setGlobalAlpha(1),o.beginPath(),o.setStrokeStyle(t.color),o.setLineWidth(2*e.pixelRatio),1===i.length?(o.moveTo(i[0].x,i[0].y),o.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(o.moveTo(i[0].x,i[0].y),"curve"===e.extra.lineStyle?i.forEach(function(t,e){if(e>0){var n=p(i,e-1);o.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&o.lineTo(t.x,t.y)}),o.moveTo(i[0].x,i[0].y)),o.closePath(),o.stroke()}),!1!==e.dataPointShape){var f=i.dataPointShape[s%i.dataPointShape.length];Y(a,t.color,f,o,e)}}),!1!==e.dataLabel&&1===n&&t.forEach(function(t,s){var r=t.data,a=U(r,u,h,c,l,e,i,n);Z(a,t,i,o)}),o.restore(),{xAxisPoints:c,calPoints:m,eachSpacing:l}}function pt(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=Q(t,e,i),r=s.ranges,a=W(e.categories,e,i),c=a.xAxisPoints,l=a.eachSpacing,u=r.pop(),h=r.shift(),d=[];return o.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&o.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===n&&ot(e.tooltip.offset.x,e,i,o),t.forEach(function(t,s){var r=t.data,a=U(r,u,h,c,l,e,i,n);d.push(a);var m=D(a);if(m.forEach(function(i,n){o.beginPath(),o.setStrokeStyle(t.color),o.setLineWidth(2*e.pixelRatio),1===i.length?(o.moveTo(i[0].x,i[0].y),o.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(o.moveTo(i[0].x,i[0].y),"curve"===e.extra.lineStyle?i.forEach(function(t,e){if(e>0){var n=p(i,e-1);o.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&o.lineTo(t.x,t.y)}),o.moveTo(i[0].x,i[0].y)),o.closePath(),o.stroke()}),!1!==e.dataPointShape){var g=i.dataPointShape[s%i.dataPointShape.length];Y(a,t.color,g,o,e)}}),!1!==e.dataLabel&&1===n&&t.forEach(function(t,s){var r=t.data,a=U(r,u,h,c,l,e,i,n);Z(a,t,i,o)}),o.restore(),{xAxisPoints:c,calPoints:d,eachSpacing:l}}function ht(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=Q(t,e,i),r=s.ranges,a=W(e.categories,e,i),c=a.xAxisPoints,l=a.eachSpacing,u=r.pop(),h=r.shift(),d=e.height-i.padding-i.xAxisHeight-i.legendHeight,m=[],g=0,f=0;if(t.forEach(function(t,e){"column"==t.type&&(f+=1)}),o.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&o.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===n&&ot(e.tooltip.offset.x,e,i,o),t.forEach(function(t,s){var r=t.data,a=U(r,u,h,c,l,e,i,n);if(m.push(a),"column"==t.type&&(a=H(a,l,f,g,i,e),a.forEach(function(n,s){if(null!==n){o.beginPath(),o.setFillStyle(n.color||t.color);var r=n.x-n.width/2+1,a=e.height-n.y-i.padding-i.xAxisHeight-i.legendHeight;o.moveTo(r,n.y),o.rect(r,n.y,n.width-2,a),o.closePath(),o.fill()}}),g+=1),"area"==t.type){var y=D(a);y.forEach(function(i){if(o.beginPath(),o.setStrokeStyle(t.color),o.setFillStyle(t.color),o.setGlobalAlpha(.2),o.setLineWidth(2*e.pixelRatio),i.length>1){var n=i[0],s=i[i.length-1];o.moveTo(n.x,n.y),"curve"===t.style?i.forEach(function(t,e){if(e>0){var n=p(i,e-1);o.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&o.lineTo(t.x,t.y)}),o.lineTo(s.x,d),o.lineTo(n.x,d),o.lineTo(n.x,n.y)}else{var r=i[0];o.moveTo(r.x-l/2,r.y),o.lineTo(r.x+l/2,r.y),o.lineTo(r.x+l/2,d),o.lineTo(r.x-l/2,d),o.moveTo(r.x-l/2,r.y)}o.closePath(),o.fill(),o.setGlobalAlpha(1)})}if("line"==t.type){y=D(a);y.forEach(function(i,n){o.beginPath(),o.setStrokeStyle(t.color),o.setLineWidth(2*e.pixelRatio),1===i.length?(o.moveTo(i[0].x,i[0].y),o.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(o.moveTo(i[0].x,i[0].y),"curve"==t.style?i.forEach(function(t,e){if(e>0){var n=p(i,e-1);o.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&o.lineTo(t.x,t.y)}),o.moveTo(i[0].x,i[0].y)),o.closePath(),o.stroke()})}if("point"==t.type){y=D(a);y.forEach(function(i,n){o.beginPath(),o.setStrokeStyle(t.color),o.setLineWidth(2*e.pixelRatio),o.moveTo(i[0].x,i[0].y),o.arc(i[0].x,i[0].y,1,0,2*Math.PI),o.closePath(),o.stroke()})}if(!1!==e.dataPointShape&&"column"!==t.type){var v=i.dataPointShape[s%i.dataPointShape.length];Y(a,t.color,v,o,e)}}),!1!==e.dataLabel&&1===n){g=0;t.forEach(function(t,s){var r=t.data,a=U(r,u,h,c,l,e,i,n);"column"!==t.type?Z(a,t,i,o):(a=H(a,l,f,g,i,e),Z(a,t,i,o),g+=1)})}return o.restore(),{xAxisPoints:c,calPoints:m,eachSpacing:l}}function dt(t,e,i,o,n,s){var r=t.extra.tooltip||{};r.horizentalLine&&t.tooltip&&1===o&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&nt(t,e,i,n,s),i.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&i.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===o&&rt(t.tooltip.textList,t.tooltip.offset,t,e,i,n,s),i.restore()}function mt(t,e,i,o){var n=W(t,e,i),s=n.xAxisPoints,r=n.startX,a=n.endX,c=n.eachSpacing,l=e.height-i.padding-i.xAxisHeight-i.legendHeight,p=i.padding;if(e.enableScroll&&e.xAxis.scrollShow){var h=e.height-i.padding-i.legendHeight+4*e.pixelRatio,d=a-r,m=c*(s.length-1),g=d*d/m,f=0;e._scrollDistance_&&(f=-e._scrollDistance_*d/m),o.beginPath(),o.setLineCap("round"),o.setLineWidth(6*e.pixelRatio),o.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),o.moveTo(r,h),o.lineTo(a,h),o.stroke(),o.closePath(),o.beginPath(),o.setLineCap("round"),o.setLineWidth(6*e.pixelRatio),o.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),o.moveTo(r+f,h),o.lineTo(r+f+g,h),o.stroke(),o.closePath()}if(o.save(),e._scrollDistance_&&0!==e._scrollDistance_&&o.translate(e._scrollDistance_,0),o.beginPath(),o.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),o.setLineCap("butt"),o.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&o.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),!0!==e.xAxis.disableGrid&&("calibration"===e.xAxis.type?s.forEach(function(t,i){i>0&&(o.moveTo(t-c/2,l),o.lineTo(t-c/2,l+4*e.pixelRatio))}):s.forEach(function(t,e){o.moveTo(t,l),o.lineTo(t,p)})),o.closePath(),o.stroke(),o.setLineDash([]),!0!==e.xAxis.disabled){var v=e.width-2*i.padding-i.yAxisWidth-i.yAxisTitleWidth,x=Math.min(t.length,Math.ceil(v/i.fontSize/1.5)),_=Math.ceil(t.length/x);t=t.map(function(t,e){return e%_!==0?"":t}),0===i._xAxisTextAngle_?t.forEach(function(t,n){var r=c/2-y(t)/2;o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(e.xAxis.fontColor||"#666666"),o.fillText(t,s[n]+r,l+i.fontSize+5),o.closePath(),o.stroke()}):t.forEach(function(t,n){o.save(),o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(e.xAxis.fontColor||"#666666");var r=y(t),a=c/2-r,p=u(s[n]+c/2,l+i.fontSize/2+5,e.height),h=p.transX,d=p.transY;o.rotate(-1*i._xAxisTextAngle_),o.translate(h,d),o.fillText(t,s[n]+a,l+i.fontSize+5),o.closePath(),o.stroke(),o.restore()})}o.restore()}function gt(t,e,i,o){if(!0!==e.yAxis.disableGrid){for(var n=e.height-2*i.padding-i.xAxisHeight-i.legendHeight,s=Math.floor(n/i.yAxisSplit),r=i.yAxisWidth+i.yAxisTitleWidth,a=i.padding+r,c=W(t,e,i),l=c.xAxisPoints,u=c.eachSpacing,p=u*(l.length-1),h=a+p,d=[],m=0;m<i.yAxisSplit;m++)d.push(i.padding+s*m);d.push(i.padding+s*i.yAxisSplit+2),o.save(),e._scrollDistance_&&0!==e._scrollDistance_&&o.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&o.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),o.beginPath(),o.setStrokeStyle(e.yAxis.gridColor||"#cccccc"),o.setLineWidth(1*e.pixelRatio),d.forEach(function(t,e){o.moveTo(a,t),o.lineTo(h,t)}),o.closePath(),o.stroke(),o.setLineDash([]),o.restore()}}function ft(t,e,i,o){if(!0!==e.yAxis.disabled){var n=Q(t,e,i),s=n.rangesFormat,r=i.yAxisWidth+i.yAxisTitleWidth,a=e.height-2*i.padding-i.xAxisHeight-i.legendHeight,c=Math.floor(a/i.yAxisSplit),l=i.padding+r,u=e.width-i.padding,p=e.height-i.padding-i.xAxisHeight-i.legendHeight;o.beginPath(),o.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&o.fillRect(0,0,l,p+i.xAxisHeight),o.fillRect(u,0,e.width,p+i.xAxisHeight),o.closePath(),o.stroke();for(var h=[],d=0;d<=i.yAxisSplit;d++)h.push(i.padding+c*d);s.forEach(function(t,n){var s=h[n]?h[n]:p;o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(e.yAxis.fontColor||"#666666"),o.fillText(t,i.padding+i.yAxisTitleWidth,s+i.fontSize/2),o.closePath(),o.stroke()}),e.yAxis.title&&at(e.yAxis.title,e,i,o)}}function yt(t,e,i,o){if(!1!==e.legend){var n=L(t,e,i),s=n.legendList,r=5*e.pixelRatio,a=10*e.pixelRatio,c=15*e.pixelRatio;s.forEach(function(t,n){var s=0;t.forEach(function(t){t.name=t.name||"undefined",s+=3*r+y(t.name)+c});var l=(e.width-s)/2+r,u=e.height-i.padding-i.legendHeight+n*(i.fontSize+a)+r+a;o.setFontSize(i.fontSize),t.forEach(function(t){switch(e.type){case"line":o.beginPath(),o.setLineWidth(1*e.pixelRatio),o.setStrokeStyle(t.color),o.setFillStyle(t.color),o.moveTo(l+7.5*e.pixelRatio,u+5*e.pixelRatio),o.arc(l+7.5*e.pixelRatio,u+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),o.closePath(),o.fill(),o.stroke();break;case"pie":o.beginPath(),o.setLineWidth(1*e.pixelRatio),o.setStrokeStyle(t.color),o.setFillStyle(t.color),o.moveTo(l+7.5*e.pixelRatio,u+5*e.pixelRatio),o.arc(l+7.5*e.pixelRatio,u+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),o.closePath(),o.fill(),o.stroke();break;case"ring":o.beginPath(),o.setLineWidth(1*e.pixelRatio),o.setStrokeStyle(t.color),o.setFillStyle(t.color),o.moveTo(l+7.5*e.pixelRatio,u+5*e.pixelRatio),o.arc(l+7.5*e.pixelRatio,u+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),o.closePath(),o.fill(),o.stroke();break;case"gauge":break;case"arcbar":break;default:o.beginPath(),o.setFillStyle(t.color),o.moveTo(l,u),o.fillRect(l,u,15*e.pixelRatio,10*e.pixelRatio),o.closePath(),o.fill(),o.stroke()}l+=r+c,o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(e.extra.legendTextColor||"#333333"),o.fillText(t.name,l,u+6*e.pixelRatio+3*e.pixelRatio),o.closePath(),o.stroke(),l+=y(t.name)+2*r})})}}function vt(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=e.extra.pie||{};t=C(t,n);var a={x:e.width/2,y:(e.height-i.legendHeight)/2},c=Math.min(a.x-i.pieChartLinePadding-i.pieChartTextPadding-i._pieTextMaxLength_,a.y-i.pieChartLinePadding-i.pieChartTextPadding);e.dataLabel?c-=10:c-=2*i.padding;var l=c+i.pieChartLinePadding/2;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,i){e.tooltip&&e.tooltip.index==i&&(o.beginPath(),o.setFillStyle(r(t.color,e.extra.pie.activeOpacity||.5)),o.moveTo(a.x,a.y),o.arc(a.x,a.y,l,t._start_,t._start_+2*t._proportion_*Math.PI),o.closePath(),o.fill()),o.beginPath(),o.setLineWidth(2*e.pixelRatio),o.setStrokeStyle("#ffffff"),o.setFillStyle(t.color),o.moveTo(a.x,a.y),o.arc(a.x,a.y,c,t._start_,t._start_+2*t._proportion_*Math.PI),o.closePath(),o.fill(),!0!==e.disablePieStroke&&o.stroke()}),"ring"===e.type){var u=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(u=Math.max(0,c-e.extra.pie.ringWidth)),o.beginPath(),o.setFillStyle(e.background||"#ffffff"),o.moveTo(a.x,a.y),o.arc(a.x,a.y,u,0,2*Math.PI),o.closePath(),o.fill()}if(!1!==e.dataLabel&&1===n){for(var p=!1,h=0,d=t.length;h<d;h++)if(t[h].data>0){p=!0;break}p&&it(t,e,i,o,c,a)}return 1===n&&"ring"===e.type&&J(e,i,o),{center:a,radius:c,series:t}}function xt(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=e.extra.arcbar||{};s.startAngle=s.startAngle?s.startAngle:.75,s.endAngle=s.endAngle?s.endAngle:.25,s.type=s.type?s.type:"default",t=$(t,s,n);var r={x:e.width/2,y:e.height/2},a=Math.min(r.x,r.y);return"number"===typeof s.width&&s.width>0?s.width=s.width:s.width=12*e.pixelRatio,a-=i.padding+s.width/2,o.setLineWidth(s.width),o.setStrokeStyle(s.backgroundColor||"#E9E9E9"),o.setLineCap("round"),o.beginPath(),"default"==s.type?o.arc(r.x,r.y,a,s.startAngle*Math.PI,s.endAngle*Math.PI,!1):o.arc(r.x,r.y,a,0,2*Math.PI,!1),o.stroke(),t.forEach(function(t){o.setLineWidth(s.width),o.setStrokeStyle(t.color),o.setLineCap("round"),o.beginPath(),o.arc(r.x,r.y,a,s.startAngle*Math.PI,t._proportion_*Math.PI,!1),o.stroke()}),J(e,i,o),{center:r,radius:a,series:t}}function _t(t,e,i,o,n){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=i.extra.gauge||{};r.startAngle=r.startAngle?r.startAngle:.75,void 0==r.oldAngle&&(r.oldAngle=r.startAngle),void 0==r.oldData&&(r.oldData=0),r.endAngle=r.endAngle?r.endAngle:.25,t=z(t,r.startAngle,r.endAngle);var a={x:i.width/2,y:i.height/2},c=Math.min(a.x,a.y);"number"===typeof r.width&&r.width>0?r.width=r.width:r.width=15*i.pixelRatio,c-=o.padding+r.width/2;var l=c-r.width;n.setLineWidth(r.width),n.setLineCap("butt"),t.forEach(function(t){n.beginPath(),n.setStrokeStyle(t.color),n.arc(a.x,a.y,c,t._startAngle_*Math.PI,t._endAngle_*Math.PI,!1),n.stroke()}),n.save();var u=r.startAngle-r.endAngle+1;r.splitLine.fixRadius=r.splitLine.fixRadius?r.splitLine.fixRadius:0,r.splitLine.splitNumber=r.splitLine.splitNumber?r.splitLine.splitNumber:10,r.splitLine.width=r.splitLine.width?r.splitLine.width:15*i.pixelRatio,r.splitLine.color=r.splitLine.color?r.splitLine.color:"#FFFFFF",r.splitLine.childNumber=r.splitLine.childNumber?r.splitLine.childNumber:5,r.splitLine.childWidth=r.splitLine.childWidth?r.splitLine.childWidth:5*i.pixelRatio;var p=u/r.splitLine.splitNumber,h=u/r.splitLine.splitNumber/r.splitLine.childNumber,d=-c-.5*r.width-r.splitLine.fixRadius,m=-c-.5*r.width-r.splitLine.fixRadius+r.splitLine.width,g=-c-.5*r.width-r.splitLine.fixRadius+r.splitLine.childWidth;n.translate(a.x,a.y),n.rotate((r.startAngle-1)*Math.PI);for(var f=0;f<r.splitLine.splitNumber+1;f++)n.beginPath(),n.setStrokeStyle(r.splitLine.color),n.setLineWidth(2*i.pixelRatio),n.moveTo(d,0),n.lineTo(m,0),n.stroke(),n.rotate(p*Math.PI);n.restore(),n.save(),n.translate(a.x,a.y),n.rotate((r.startAngle-1)*Math.PI);for(var y=0;y<r.splitLine.splitNumber*r.splitLine.childNumber+1;y++)n.beginPath(),n.setStrokeStyle(r.splitLine.color),n.setLineWidth(1*i.pixelRatio),n.moveTo(d,0),n.lineTo(g,0),n.stroke(),n.rotate(h*Math.PI);return n.restore(),r.pointer.width=r.pointer.width?r.pointer.width:15*i.pixelRatio,void 0==r.pointer.color||"auto"==r.pointer.color?r.pointer.color:(r.pointer.color,r.pointer.color),e=R(e,t,r,s),e.forEach(function(t){n.save(),n.translate(a.x,a.y),n.rotate((t._proportion_-1)*Math.PI),n.beginPath(),n.setFillStyle(t.color),n.moveTo(r.pointer.width,0),n.lineTo(0,-r.pointer.width/2),n.lineTo(-l,0),n.lineTo(0,r.pointer.width/2),n.lineTo(r.pointer.width,0),n.closePath(),n.fill(),n.beginPath(),n.setFillStyle("#FFFFFF"),n.arc(0,0,r.pointer.width/6,0,2*Math.PI,!1),n.fill(),n.restore()}),!1!==i.dataLabel&&tt(r,c,a,i,o,n),J(i,o,n),1===s&&"gauge"===i.type&&(r.oldAngle=e[0]._proportion_,r.oldData=e[0].data),{center:a,radius:c,innerRadius:l,categories:t,totalAngle:u}}function bt(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=e.extra.radar||{},r=j(e.categories.length),a={x:e.width/2,y:(e.height-i.legendHeight)/2},c=Math.min(a.x-(w(e.categories)+i.radarLabelTextMargin),a.y-i.radarLabelTextMargin);c-=i.padding,o.beginPath(),o.setLineWidth(1*e.pixelRatio),o.setStrokeStyle(s.gridColor||"#cccccc"),r.forEach(function(t){var e=h(c*Math.cos(t),c*Math.sin(t),a);o.moveTo(a.x,a.y),o.lineTo(e.x,e.y)}),o.stroke(),o.closePath();for(var l=function(t){var n={};o.beginPath(),o.setLineWidth(1*e.pixelRatio),o.setStrokeStyle(s.gridColor||"#cccccc"),r.forEach(function(e,s){var r=h(c/i.radarGridCount*t*Math.cos(e),c/i.radarGridCount*t*Math.sin(e),a);0===s?(n=r,o.moveTo(r.x,r.y)):o.lineTo(r.x,r.y)}),o.lineTo(n.x,n.y),o.stroke(),o.closePath()},u=1;u<=i.radarGridCount;u++)l(u);var p=M(r,a,c,t,e,n);return p.forEach(function(t,n){if(o.beginPath(),o.setFillStyle(t.color),o.setGlobalAlpha(.3),t.data.forEach(function(t,e){0===e?o.moveTo(t.position.x,t.position.y):o.lineTo(t.position.x,t.position.y)}),o.closePath(),o.fill(),o.setGlobalAlpha(1),!1!==e.dataPointShape){var s=i.dataPointShape[n%i.dataPointShape.length],r=t.data.map(function(t){return t.position});Y(r,t.color,s,o,e)}}),et(r,c,a,e,i,o),{center:a,radius:c,angleList:r}}function wt(t,e){e.draw()}var jt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function kt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17,i=function(){return"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:function(t){t(null)}},o=i(),n=null,s=function(i){if(null===i||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===n&&(n=i),i-n<t.duration){var r=(i-n)/t.duration,a=jt[t.timing];r=a(r),t.onProcess&&t.onProcess(r),o(s,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};s=s.bind(this),o(s,e)}function At(t,e,i,o){var n=this,s=e.series,r=e.categories;s=m(s,i),s=g(s,e);var a=L(s,e,i),c=a.legendHeight;i.legendHeight=c;var l=Q(s,e,i),u=l.yAxisWidth;if(i.yAxisWidth=u,r&&r.length){var p=F(r,e,i),h=p.xAxisHeight,d=p.angle;i.xAxisHeight=h,i._xAxisTextAngle_=d}"pie"!==t&&"ring"!==t||(i._pieTextMaxLength_=!1===e.dataLabel?0:I(s));var f=e.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),o.clearRect(0,0,e.width,e.height),t){case"line":this.animationInstance=new kt({timing:"easeIn",duration:f,onProcess:function(t){e.rotate&&X(o,e),gt(r,e,i,o),mt(r,e,i,o);var a=pt(s,e,i,o,t),c=a.xAxisPoints,l=a.calPoints,u=a.eachSpacing;n.chartData.xAxisPoints=c,n.chartData.calPoints=l,n.chartData.eachSpacing=u,yt(e.series,e,i,o),ft(s,e,i,o),dt(e,i,o,t,u,c),wt(e,o)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new kt({timing:"easeIn",duration:f,onProcess:function(t){e.rotate&&X(o,e),gt(r,e,i,o),mt(r,e,i,o);var a=ht(s,e,i,o,t),c=a.xAxisPoints,l=a.calPoints,u=a.eachSpacing;n.chartData.xAxisPoints=c,n.chartData.calPoints=l,n.chartData.eachSpacing=u,yt(e.series,e,i,o),ft(s,e,i,o),dt(e,i,o,t,u,c),wt(e,o)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new kt({timing:"easeIn",duration:f,onProcess:function(t){e.rotate&&X(o,e),gt(r,e,i,o),mt(r,e,i,o);var a=ct(s,e,i,o,t),c=a.xAxisPoints,l=a.calPoints,u=a.eachSpacing;n.chartData.xAxisPoints=c,n.chartData.calPoints=l,n.chartData.eachSpacing=u,yt(e.series,e,i,o),ft(s,e,i,o),dt(e,i,o,t,u,c),wt(e,o)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new kt({timing:"easeIn",duration:f,onProcess:function(t){e.rotate&&X(o,e),gt(r,e,i,o),mt(r,e,i,o);var a=ut(s,e,i,o,t),c=a.xAxisPoints,l=a.calPoints,u=a.eachSpacing;n.chartData.xAxisPoints=c,n.chartData.calPoints=l,n.chartData.eachSpacing=u,yt(e.series,e,i,o),ft(s,e,i,o),dt(e,i,o,t,u,c),wt(e,o)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new kt({timing:"easeInOut",duration:f,onProcess:function(t){e.rotate&&X(o,e),n.chartData.pieData=vt(s,e,i,o,t),yt(e.series,e,i,o),dt(e,i,o,t),wt(e,o)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new kt({timing:"easeInOut",duration:f,onProcess:function(t){e.rotate&&X(o,e),n.chartData.radarData=bt(s,e,i,o,t),yt(e.series,e,i,o),wt(e,o)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new kt({timing:"easeInOut",duration:f,onProcess:function(t){e.rotate&&X(o,e),n.chartData.arcbarData=xt(s,e,i,o,t),wt(e,o)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new kt({timing:"easeInOut",duration:f,onProcess:function(t){e.rotate&&X(o,e),n.chartData.gaugeData=_t(r,s,e,i,o,t),wt(e,o)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new kt({timing:"easeIn",duration:f,onProcess:function(t){e.rotate&&X(o,e),gt(r,e,i,o),mt(r,e,i,o);var a=lt(s,e,i,o,t),c=a.xAxisPoints,l=a.calPoints,u=a.eachSpacing;n.chartData.xAxisPoints=c,n.chartData.calPoints=l,n.chartData.eachSpacing=u,yt(e.series,e,i,o),ft(s,e,i,o),dt(e,i,o,t,u,c),wt(e,o)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break}}function St(){this.events={}}kt.prototype.stop=function(){this.isStop=!0},St.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},St.prototype.trigger=function(){for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];var n=i[0],s=i.slice(1);this.events[n]&&this.events[n].forEach(function(t){try{t.apply(null,s)}catch(i){console.error(e(i," at components\\u-charts\\u-charts.js:3303"))}})};var Pt=function(t){t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=t.title||{},t.subtitle=t.subtitle||{},t.yAxis=t.yAxis||{},t.yAxis.gridType=t.yAxis.gridType?t.yAxis.gridType:"solid",t.yAxis.dashLength=t.yAxis.dashLength?t.yAxis.dashLength:4*t.pixelRatio,t.xAxis=t.xAxis||{},t.xAxis.rotateLabel=!!t.xAxis.rotateLabel,t.xAxis.type=t.xAxis.type?t.xAxis.type:"calibration",t.xAxis.gridType=t.xAxis.gridType?t.xAxis.gridType:"solid",t.xAxis.dashLength=t.xAxis.dashLength?t.xAxis.dashLength:4*t.pixelRatio,t.xAxis.itemCount=t.xAxis.itemCount?t.xAxis.itemCount:5,t.xAxis.scrollAlign=t.xAxis.scrollAlign?t.xAxis.scrollAlign:"left",t.extra=t.extra||{},t.legend=!1!==t.legend,t.rotate=!!t.rotate,t.animation=!1!==t.animation;var e=n({},o);if(e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.lableWidth||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:o.yAxisSplit,e.rotate=t.rotate,t.rotate){var s=t.width,r=t.height;t.width=r,t.height=s}if(e.yAxisWidth=o.yAxisWidth*t.pixelRatio,e.xAxisHeight=o.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=4*t.pixelRatio),e.xAxisLineHeight=o.xAxisLineHeight*t.pixelRatio,e.legendHeight=o.legendHeight*t.pixelRatio,e.padding=o.padding*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=o.titleFontSize*t.pixelRatio,e.subtitleFontSize=o.subtitleFontSize*t.pixelRatio,e.toolTipPadding=o.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=o.toolTipLineHeight*t.pixelRatio,e.columePadding=o.columePadding*t.pixelRatio,o.pixelRatio=t.pixelRatio,o.fontSize=t.fontSize,o.rotate=t.rotate,this.opts=t,this.config=e,t.$this=t.$this?t.$this:this,this.context=i.createCanvasContext(t.canvasId,t.$this),this.chartData={},this.event=new St,this.scrollOption={currentOffset:0,startTouchX:0,distance:0},t.enableScroll&&"right"==t.xAxis.scrollAlign){var a=Q(t.series,t,e),c=a.yAxisWidth;e.yAxisWidth=c;var l=0,u=W(t.categories,t,e),p=u.xAxisPoints,h=u.startX,d=u.endX,m=u.eachSpacing,g=m*(p.length-1),f=d-h;l=f-g,this.scrollOption={currentOffset:l,startTouchX:l,distance:0},t._scrollDistance_=l}At.call(this,t.type,t,e,this.context)};Pt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts.series=t.series||this.opts.series,this.opts.categories=t.categories||this.opts.categories,this.opts.title=n({},this.opts.title,t.title||{}),this.opts.subtitle=n({},this.opts.subtitle,t.subtitle||{}),At.call(this,this.opts.type,this.opts,this.config,this.context)},Pt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;!0===this.opts.enableScroll?(this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount,At.call(this,this.opts.type,this.opts,this.config,this.context)):console.log(e("请启用滚动条后使用！"," at components\\u-charts\\u-charts.js:3422"))},Pt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Pt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Pt.prototype.getCurrentDataIndex=function(t){var e=t.mp.changedTouches[0];if(e){var i=_(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type?E({x:i.x,y:i.y},this.chartData.pieData):"radar"===this.opts.type?T({x:i.x,y:i.y},this.chartData.radarData,this.opts.categories.length):S({x:i.x,y:i.y},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Pt.prototype.showToolTip=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.mp.changedTouches[0],o=_(i,this.opts,t);if("line"===this.opts.type||"area"===this.opts.type||"mix"===this.opts.type||"column"===this.opts.type){var s=this.getCurrentDataIndex(t),r=this.scrollOption.currentOffset,a=n({},this.opts,{_scrollDistance_:r,animation:!1});if(s>-1){var c=b(this.opts.series,s);if(0!==c.length){var l=k(c,this.chartData.calPoints,s,this.opts.categories,e),u=l.textList,p=l.offset;p.y=o.y,a.tooltip={textList:u,offset:p,option:e,index:s}}}At.call(this,a.type,a,this.config,this.context)}if("candle"===this.opts.type){s=this.getCurrentDataIndex(t),r=this.scrollOption.currentOffset,a=n({},this.opts,{_scrollDistance_:r,animation:!1});if(s>-1){c=b(this.opts.series,s);if(0!==c.length){l=A(this.opts.series[0].data,c,this.chartData.calPoints,s,this.opts.categories,this.opts.extra.candle,e),u=l.textList,p=l.offset;p.y=o.y,a.tooltip={textList:u,offset:p,option:e,index:s}}}At.call(this,a.type,a,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type){s=this.getCurrentDataIndex(t),r=this.scrollOption.currentOffset,a=n({},this.opts,{_scrollDistance_:r,animation:!1});if(s>-1){c=this.opts.series[s],u=[{text:e.format?e.format(c):c.name+": "+c.data,color:c.color}],p={x:o.x,y:o.y};a.tooltip={textList:u,offset:p,option:e,index:s}}At.call(this,a.type,a,this.config,this.context)}},Pt.prototype.scrollStart=function(t){var e=t.mp.changedTouches[0],i=_(e,this.opts,t);e&&!0===this.opts.enableScroll&&(e.x?this.scrollOption.startTouchX=i.x:this.scrollOption.startTouchX=i.clientX)},Pt.prototype.scroll=function(t){var e=t.mp.changedTouches[0],i=_(e,this.opts,t);if(e&&!0===this.opts.enableScroll){var o;o=e.x?i.x-this.scrollOption.startTouchX:i.clientX-this.scrollOption.startTouchX;var s=this.scrollOption.currentOffset,r=c(s+o,this.chartData,this.config,this.opts);this.scrollOption.distance=o=r-s;var a=n({},this.opts,{_scrollDistance_:s+o,animation:!1});At.call(this,a.type,a,this.config,this.context)}},Pt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,i=e.currentOffset,o=e.distance;this.scrollOption.currentOffset=i+o,this.scrollOption.distance=0}},t.exports=Pt}).call(this,i("0de9")["default"],i("6e42")["default"])},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},"81dd":function(t,e,i){"use strict";var o,n;function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={login:{companyName:"XIMIVOGUE",project:"Ordering Website",user:"Username",pass:"Password",login:"login",userMsg:"Please enter user name",passMsg:"Please enter password",history:"Historical Notes",save:"Save user name"},categoryList_0:{typelist:[{id:"02",color:"#FF82AB",img:"../../static/home/huazhuang.png",title:"Cosmetics"},{id:"04",color:"#FFD700",img:"../../static/home/liwu.png",title:"Office Style"},{id:"09",color:"#9adaff",img:"../../static/home/erji_1.png",title:"Digital"},{id:"06",color:"#FFD700",img:"../../static/home/bag.png",title:"Bags"},{id:"05",color:"#a8f1a8",img:"../../static/home/xiezi.png",title:"Seasonal"},{id:"03",color:"#FF8C69",img:"../../static/home/zhubaoshipin.png",title:"Decorations"},{id:"01",color:"#B0E2FF",img:"../../static/home/beizi.png",title:"Household"},{id:"07",color:"#a6eba6",img:"../../static/home/shipin_1.png",title:"Toys"},{id:"08",color:"#FFC125",img:"../../static/home/wanju.png",title:"PlushDoll"},{id:"10",color:"#ff9769",img:"../../static/home/lingshi_2.png",title:"Leisurefood"}]},categoryList_1:{typelist:[{id:"22",color:"#FF82AB",img:"../../static/home/huazhuang.png",title:"Cosmetics"},{id:"24",color:"#FFD700",img:"../../static/home/liwu.png",title:"Office Style"},{id:"29",color:"#9adaff",img:"../../static/home/erji_1.png",title:"Digital"},{id:"26",color:"#FFD700",img:"../../static/home/bag.png",title:"Bags"},{id:"25",color:"#a8f1a8",img:"../../static/home/xiezi.png",title:"Seasonal"},{id:"23",color:"#FF8C69",img:"../../static/home/zhubaoshipin.png",title:"Decorations"},{id:"21",color:"#B0E2FF",img:"../../static/home/beizi.png",title:"Household"},{id:"27",color:"#a6eba6",img:"../../static/home/shipin_1.png",title:"Toys"},{id:"28",color:"#FFC125",img:"../../static/home/wanju.png",title:"PlushDoll"},{id:"20",color:"#ff9769",img:"../../static/home/lingshi_2.png",title:"Leisurefood"}]},index:{news:"New arrivals",rep:"Stock replenishment",sell:"Best Selling",dis:"90% OFF(no exchange)",sala:"Regional unmarketable",like:"Guess You Like",search:"Please enter",tab1:"Home",tab2:"Classify",tab3:"Shopping",tab4:"My",foot:"Have what",loadmsg:"loading...",all:"all",p1:"Trade",p2:"Sale",p3:"Discount",loginmsg:"please log in",contentdown:"loading...",contentrefresh:"loading...",contentnomore:"No Data",cancel:"Cancel",confirm:"Confirm",msg1:"Successfully added",msg2:"Successfully delete",msg3:"Submit successfully",msg4:"Collection of success",msg5:"Delete a site collection",address:"now located in "},my:{status:"Normal user",user:"User",vip:"XIMI SVIP",info_a1:"Remaining balance",info_a2:"Voucher",info_a3:"Integral",info_b1:"Inventory",info_b2:"Sales",info_b3:"After sale",info_b4:"Supporter",info_c1:"Order",info_c2:"Favorite",info_c3:"Voucher",info_c4:"Address",info_c5:"Set"},cart:(o={foot:"Have what",title:"Shopping trolley",p1:"There are",p2:"style and",p3:"piece",Sort:"",amount:"quantity",empty:"Clear",select:"Choose vouchers",all:"Total",go:"Submit",bind:"Confirm",Default:"Default"},s(o,"all","all"),s(o,"hint","Empty Cart?"),s(o,"regulate","Regulate"),s(o,"sheet",["number goes from high to low","number goes from low to high","Empty shopping cart"]),s(o,"emptyText","Go shopping"),s(o,"hint2","Settlement cart?"),s(o,"voucher","Voucher"),s(o,"use","Threshold free use"),s(o,"uesText","Select the"),s(o,"hint3","Right - click to view product categories"),s(o,"type","Classify"),o),classify:{title:"Classify"},details:{title:"details",price_a:"Trade Price",price_b:"Sale Price",type:"type",select:"selected",Default:"Default",code:"Barcode",spec:"Moq",size:"size",weight:"weight",Material:"Material",home:"home",cart:"shopping",like:"like",submit:"submit",add:"Add to Cart",rec:"recommend",features:"features",notice:"notice",usage:"usage",p3:"Discount",empty:"null",p1:"Trade",p2:"Sale"},list:{Default:"Default",price:"Price",page:"page",title:"Classify",p1:"Trade",p2:"Sale",p3:"Discount"},repertory:{title:" Inventory search",select:"select",type:"type",all:"total inventory",code:"Barcode",name:"name",hint:"no data",proportion:"Total store inventory amount proportion",submit:"Search",time:"End Time",totalMoney:"Total money",input:"Please input commodity barcode",key:" Please enter a search phrase",items:[{value:"c",name:"Stocks"},{value:"a",name:"barcode"},{value:"b",name:"name"}],store:"repertory",money:"money",num:"count",price:"price",total:"total",pcs:"pcs",category:["Home Depot","Health Beauty","Decorations","Office Style","Seasonal Products","Bags","Toys","Plush Doll","Digtial","Leisurefood","Consumable"],p1:"Please select the query type",p2:"Please enter the item number",p3:"Please enter the product name"},technology:{Remote:"Remote",title:"Supporter",password:"rconpassword",qq:"contact QQ",telephone:"telephone",problem:"problem description",upload:"Upload picture",submit:"submit",inputId:"Please enter the remote ID",inputPass:"Please enter the remote password",inputQQ:"Please enter the contact QQ",inputTel:"Please enter the telephone",inputProblem:"Please enter the problem ",inputImg:"Please upload picture"},market:{title:" my sales",code:"Store code",time:"Time range",zhi:"to",chart:"Total store sales chart",bills:"Real-time bills",tq:"Total Qty",ts:"Total retail sales",tc:"Total cost amount",tg:"Total gross profit",tt:"Total traffic",tp:"Total guest unit price",details:"view details",hint:"No data",submit:"search",num:"count",money:"money",category:["Home Depot","Health Beauty","Decorations","Office Style","Seasonal Products","Bags","Toys","Plush Doll","Digtial","Leisurefood","Consumable"],loading:"loading"},market_data:{title:"Sales detail",Default:"Default",tq:"Qty",ts:"Retail sales",tc:"Cost amount",tg:"Gross profit",tt:"Traffic",tp:"Guest unit price",readTime:"Real-time bills",weekDay:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},search:(n={title:"Search",inputpl:"Please write keywords...",p1:"Please write keywords",recommend:"Decommend",Default:"Default",price:"Price",page:"page"},s(n,"p1","Trade"),s(n,"p2","Sale"),s(n,"more","No Data"),s(n,"results","Results"),s(n,"recList_a",[{value:"Mask",id:"口罩"},{value:"Perfume",id:"香水"},{value:"Headset",id:"耳机"},{value:"Towel",id:"毛巾"},{value:"USB",id:"数据线"},{value:"Slipper",id:"拖鞋"}]),s(n,"recList_b",[{value:"New product launch"},{value:"Chinese Products"}]),n),order_list:{title:"Order",navList:["Pending order","Firm order"],priceAll:"Total Amount",time:"Time",more:"No Data",order:"Order number"},order_data:{title:"Order Detail",priceAll:"Total Amount",code:"Order NO",item_no:"Barcode",item_num:"Subtotal",hint:"Orders Submitted,Waiting for customer service confirming",pcs:"pcs"},collect:{title:"Collect",all:"all",item_no:"Barcode",p1:"Trade",p2:"Sale",empty:"Empty",foot_a:"Total of",foot_b:"goods",more:"No Data",Default:"Default"},voucher:{title:"Voucher",navList:["Unused","USED","Expired"],use:"Use",atime:"Start Time",btime:"End Time",more:"No Data"},address:{consignee:"Consignee",title:"Address",code:"code",Default:"Default",Phone:"Phone"},set:{title:"Set",clear:"Clear cache",quit:"Quit",check:"Detection of update",version:"version number",modelMsg:"Are you sure you want to log out",hint:"Clear success"},sale:{title:"After-sales",type:"Type",date:"Time",product:"Apply",send:"Logistics"},saleDetail:{title:"Detail",loading:"loading",num:"Number",type:"Type",count:"count",status:"Audit state",progress:"progress",information:"Return information",name:"name",code:"code",reason:"Application reason",situation:"Audit situation",picture:"picture",content:"Are you sure to cancel the after-sale goods?",remove:"Remove"},sale_add:{title:"Apply",radioList:[{value:"1",name:"Choose",checked:!1},{value:"2",name:"Quality",checked:!1},{value:"3",name:"Logistics",checked:!1}],hint1:"Plz Choose type!",hint2:"please enter Barcode",hint3:"Please enter the quantity",hint4:"Please enter the reason",code:"Barcode",qty:"Qty",reason:"Reason",add:"Add",photo:"Photo",submit:"Submit",hint5:"Are you sure to modify the selection type",hint6:"Item number already exists and cannot be added repeatedly",hint7:"upload successful",hint8:"upload successful",hint9:"Please add after sale goods"},send:{title:"Send back",submit:"submit",ex:"Express",time:"Time",dhl:"Express"},addsend:{hint1:"Please declare the after-sale products first",hint2:"Click on the declaration",title:"To apply for return",declaration:"Click on the declaration",name:"Express",number:"Express Number",fee:"Express   fee",img:"Upload pictures ",item_no:"Barcode",item_name:"Name",qty:"qty",num:"num",submit:"Submit",pla1:"Please enter the Express",pla2:"Please enter the Express Number",pla3:"Please input freight",pla4:"Please add after sale goods",pla5:"Please upload photos"}};e.default=r},"921b":function(t,e,i){"use strict";(function(t){var e=i("8189");function o(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?n(t):e}function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,i){return e&&l(t.prototype,e),i&&l(t,i),t}var p=e.version,h="https://tongji.dcloud.io/uni/stat",d="https://tongji.dcloud.io/uni/stat.gif",m=1800,g=300,f=10,y="__DC_STAT_UUID",v="__DC_UUID_VALUE";function x(){var e="";if("n"===j()){try{e=plus.runtime.getDCloudId()}catch(i){e=""}return e}try{e=t.getStorageSync(y)}catch(i){e=v}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(i){t.setStorageSync(y,v)}}return e}var _=function(t){var e=Object.keys(t),i=e.sort(),o={},n="";for(var s in i)o[i[s]]=t[i[s]],n+=i[s]+"="+t[i[s]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},b=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},j=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},k=function(){var e="";return"wx"!==j()&&"qq"!==j()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},A=function(){return"n"===j()?plus.runtime.version:""},S=function(){var t=j(),e="";return"n"===t&&(e=plus.runtime.channel),e},P=function(e){var i=j(),o="";return e||("wx"===i&&(o=t.getLaunchOptionsSync().scene),o)},T="First__Visit__Time",E="Last__Visit__Time",O=function(){var e=t.getStorageSync(T),i=0;return e?i=e:(i=w(),t.setStorageSync(T,i),t.removeStorageSync(E)),i},D=function(){var e=t.getStorageSync(E),i=0;return i=e||"",t.setStorageSync(E,w()),i},L="__page__residence__time",F=0,M=0,C=function(){return F=w(),"n"===j()&&t.setStorageSync(L,w()),F},$=function(){return M=w(),"n"===j()&&(F=t.getStorageSync(L)),M-F},z="Total__Visit__Count",R=function(){var e=t.getStorageSync(z),i=1;return e&&(i=e,i++),t.setStorageSync(z,i),i},I=function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e},H=0,N=0,B=function(){var t=(new Date).getTime();return H=t,N=0,t},W=function(){var t=(new Date).getTime();return N=t,t},q=function(t){var e=0;if(0!==H&&(e=N-H),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var i=e>g;return{residenceTime:e,overtime:i}}if("page"===t){var o=e>m;return{residenceTime:e,overtime:o}}return{residenceTime:e}},U=function(){var t=getCurrentPages(),e=t[t.length-1],i=e.$vm;return"bd"===j()?i.$mp&&i.$mp.page.is:i.$scope&&i.$scope.route||i.$mp&&i.$mp.page.route},V=function(t){var e=getCurrentPages(),i=e[e.length-1],o=i.$vm,n=t._query,s=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===j()?o.$mp&&o.$mp.page.is+s:o.$scope&&o.$scope.route+s||o.$mp&&o.$mp.page.route+s},G=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},Q=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=i("f99e").default,X=i("3b34").default||i("3b34"),Y=t.getSystemInfoSync(),J=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:x(),ut:j(),mpn:k(),ak:X.appid,usv:p,v:A(),ch:S(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){W();var t=q("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,W();var i=q();B();var o=V(this);this._sendHideRequest({urlref:o,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t=V(this),e=U();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return B(),this.__licationShow=!1,void(this._lastPageRoute=t);W(),this._lastPageRoute=t;var i=q("page");if(i.overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}B()}},{key:"_pageHide",value:function(){if(!this.__licationHide){W();var t=q("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=P(t.scene),this.statData.fvts=O(),this.statData.lvts=D(),this.statData.tvc=R(),"n"===j()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,o=t.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,o=t.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,o=t.value,n=void 0===o?"":o,s=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:s,ch:this.statData.ch,e_n:i,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,i){var o=this,n=w(),s=this._navigationBarTitle;e.ttn=s.page,e.ttpj=s.config,e.ttc=s.report;var r=this._reportingRequestData;if("n"===j()&&(r=t.getStorageSync("__UNI__STAT__DATA")||{}),r[e.lt]||(r[e.lt]=[]),r[e.lt].push(e),"n"===j()&&t.setStorageSync("__UNI__STAT__DATA",r),!($()<f)||i){var a=this._reportingRequestData;"n"===j()&&(a=t.getStorageSync("__UNI__STAT__DATA")),C();var c=[],l=[],u=[],h=function(t){var e=a[t];e.forEach(function(e){var i=b(e);0===t?c.push(i):3===t?u.push(i):l.push(i)})};for(var d in a)h(d);c.push.apply(c,l.concat(u));var m={usv:p,t:n,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===j()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==j()||"a"!==this.statData.p?this._sendRequest(m):setTimeout(function(){o._sendRequest(m)},200):this.imageRequest(m)}}},{key:"_sendRequest",value:function(e){var i=this;t.request({url:h,method:"POST",data:e,success:function(){},fail:function(t){++i._retry<3&&setTimeout(function(){i._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=_(I(t)).options;e.src=d+"?"+i}},{key:"sendEvent",value:function(t,e){Q(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function i(){var e;return c(this,i),e=o(this,s(i).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return r(i,e),u(i,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new i),this.instance}}]),u(i,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var i=this;e?t.addInterceptor("share",{success:function(){i._share()},fail:function(){i._share()}}):i._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,C(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,G(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,G(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i)}}]),i}(J),tt=Z.getInstance(),et=!1,it={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function ot(){var e=i("66fd");(e.default||e).mixin(it),t.report=function(t,e){tt.sendEvent(t,e)}}ot()}).call(this,i("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var i,o=Object.prototype,n=o.hasOwnProperty,s="function"===typeof Symbol?Symbol:{},r=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=_;var p="suspendedStart",h="suspendedYield",d="executing",m="completed",g={},f={};f[r]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(L([])));v&&v!==o&&n.call(v,r)&&(f=v);var x=k.prototype=w.prototype=Object.create(f);j.prototype=x.constructor=k,k.constructor=j,k[c]=j.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},u.awrap=function(t){return{__await:t}},A(S.prototype),S.prototype[a]=function(){return this},u.AsyncIterator=S,u.async=function(t,e,i,o){var n=new S(_(t,e,i,o));return u.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},A(x),x[c]="Generator",x[r]=function(){return this},x.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var o=e.pop();if(o in t)return i.value=o,i.done=!1,i}return i.done=!0,i}},u.values=L,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,n){return a.type="throw",a.arg=t,e.next=o,n&&(e.method="next",e.arg=i),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var r=this.tryEntries[s],a=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var c=n.call(r,"catchLoc"),l=n.call(r,"finallyLoc");if(c&&l){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var s=o;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var r=s?s.completion:{};return r.type=t,r.arg=e,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),O(i),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var o=i.completion;if("throw"===o.type){var n=o.arg;O(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:L(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=i),g}}}function _(t,e,i,o){var n=e&&e.prototype instanceof w?e:w,s=Object.create(n.prototype),r=new D(o||[]);return s._invoke=P(t,i,r),s}function b(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(o){return{type:"throw",arg:o}}}function w(){}function j(){}function k(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){function e(i,o,s,r){var a=b(t[i],t,o);if("throw"!==a.type){var c=a.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,s,r)},function(t){e("throw",t,s,r)}):Promise.resolve(l).then(function(t){c.value=t,s(c)},function(t){return e("throw",t,s,r)})}r(a.arg)}var i;function o(t,o){function n(){return new Promise(function(i,n){e(t,o,i,n)})}return i=i?i.then(n,n):n()}this._invoke=o}function P(t,e,i){var o=p;return function(n,s){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===n)throw s;return F()}i.method=n,i.arg=s;while(1){var r=i.delegate;if(r){var a=T(r,i);if(a){if(a===g)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(o===p)throw o=m,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);o=d;var c=b(t,e,i);if("normal"===c.type){if(o=i.done?m:h,c.arg===g)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(o=m,i.method="throw",i.arg=c.arg)}}}function T(t,e){var o=t.iterator[e.method];if(o===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,T(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=b(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,g;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,g):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[r];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=i,e.done=!0,e};return s.next=s}}return{next:F}}function F(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9e13":function(t,e,i){"use strict";var o,n;function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={login:{companyName:"熙美诚品订货系统",project:"",user:"用户名",pass:"密码",login:"登录",userMsg:"请输入用户名",passMsg:"请输入密码",history:"历史记录",save:"保存用户名"},categoryList_0:{typelist:[{id:"02",title:"健康美容",color:"#FF82AB",img:"../../static/home/huazhuang.png"},{id:"04",title:"文体礼品",color:"#FFD700",img:"../../static/home/liwu.png"},{id:"09",title:"数码配件",color:"#9adaff",img:"../../static/home/erji_1.png"},{id:"06",title:"精品包饰",color:"#FFD700",img:"../../static/home/bag.png"},{id:"05",title:"季节产品",color:"#a8f1a8",img:"../../static/home/xiezi.png"},{id:"03",title:"饰品系列",color:"#FF8C69",img:"../../static/home/zhubaoshipin.png"},{id:"01",title:"家居百货",color:"#B0E2FF",img:"../../static/home/beizi.png"},{id:"07",title:"儿童玩具",color:"#a6eba6",img:"../../static/home/shipin_1.png"},{id:"08",title:"毛绒公仔",color:"#FFC125",img:"../../static/home/wanju.png"},{id:"10",title:"休闲食品",color:"#ff9769",img:"../../static/home/lingshi_2.png"}]},categoryList_1:{typelist:[{id:"22",title:"健康美容",color:"#FF82AB",img:"../../static/home/huazhuang.png"},{id:"24",title:"文体礼品",color:"#FFD700",img:"../../static/home/liwu.png"},{id:"29",title:"数码配件",color:"#9adaff",img:"../../static/home/erji_1.png"},{id:"26",title:"精品包饰",color:"#FFD700",img:"../../static/home/bag.png"},{id:"25",title:"季节产品",color:"#a8f1a8",img:"../../static/home/xiezi.png"},{id:"23",title:"饰品系列",color:"#FF8C69",img:"../../static/home/zhubaoshipin.png"},{id:"21",title:"家居百货",color:"#B0E2FF",img:"../../static/home/beizi.png"},{id:"27",title:"儿童玩具",color:"#a6eba6",img:"../../static/home/shipin_1.png"},{id:"28",title:"毛绒公仔",color:"#FFC125",img:"../../static/home/wanju.png"},{id:"20",title:"休闲食品",color:"#ff9769",img:"../../static/home/lingshi_2.png"}]},index:{news:"新品上线",rep:"最近补货",sell:"地区最畅销商品",dis:"1折特价清仓（不退换）",sala:"地区滞销",like:"猜你喜欢",search:"请输入...",tab1:"主页",tab2:"分类",tab3:"购物车",tab4:"我的",foot:"已经到底啦",loadmsg:"正在加载...",all:"查看全部",p1:"批",p2:"售",p3:"打折",loginmsg:"请登录后操作",contentdown:"正在加载...",contentrefresh:"正在加载...",contentnomore:"没有更多数据啦",cancel:"取消",confirm:"确定",msg1:"添加成功",msg2:"删除成功",msg3:"提交成功",msg4:"收藏成功",msg5:"收藏成功",address:"当前位置在"},my:{status:"普通用户",user:"用户",vip:"熙美SVIP",info_a1:"余额",info_a2:"代金券",info_a3:"积分",info_b1:"我的库存",info_b2:"我的销售",info_b3:"售后服务",info_b4:"技术支持",info_c1:"我的订单",info_c2:"我的收藏",info_c3:"我的代金券",info_c4:"地址管理",info_c5:"设置"},cart:(o={foot:"已经到底啦",title:"购物车",p1:"共有",p2:"款",p3:"件宝贝",Sort:"排序:",amount:"数量",empty:"清空",select:"请选择代金券",all:"总额",go:"去结算",bind:"确定",Default:"默认"},s(o,"all","全部"),s(o,"hint","清空购物车?"),s(o,"regulate","管理"),s(o,"sheet",["数量由高到低","数量由低到高","清空购物车"]),s(o,"emptyText","空空如也 随便逛逛"),s(o,"hint2","结算购物车?"),s(o,"voucher","代金券"),s(o,"use","无门槛使用"),s(o,"uesText","选中"),s(o,"hint3","右滑查看商品分类"),s(o,"type","分类"),o),details:{title:"商品详情",price_a:"批发价",price_b:"销售价",type:"购买类型",select:"已选",Default:"默认",code:"商品条码",spec:"规格",size:"尺寸",weight:"重量",Material:"材质",home:"首页",cart:"购物车",like:"收藏",submit:"完成",add:"加入购物车",rec:"同类推荐",features:"产品特点",usage:"使用方法",notice:"注意事项",p3:"打折",empty:"空",p1:"批",p2:"售"},list:{Default:"默认",price:"价格",page:"页",title:"分类",p1:"批",p2:"售",p3:"打折"},repertory:{title:"库存查询",select:"选择",type:"选择类型",all:"总库存",code:"条码",name:"名称",hint:"目前店铺暂无此商品",proportion:"门店总库存金额占比",submit:"提交",time:"截止时间",totalMoney:"总金额",input:"请输入商品条码",key:"请输入关键字",items:[{value:"c",name:"总库存"},{value:"a",name:"条码"},{value:"b",name:"名称"}],store:"库存",money:"金额",num:"数量",price:"单价",total:"合计",pcs:"件",category:["家居百货","健康美容","饰品系列","文体礼品","季节产品","精品包饰","儿童玩具","毛绒公仔","数码配件","休闲食品","物料耗材"],p1:"请选择查询类型",p2:"请输入商品条码",p3:"请输入商品名称"},technology:{Remote:"远程",title:"技术支持",password:"远程密码",qq:"联系QQ",telephone:"联系电话",problem:"问题描述",upload:"上传照片",submit:"提交",inputId:"请输入远程ID",inputPass:"请输入远程密码",inputQQ:"请输入联系QQ",inputTel:"请输入联系电话",inputProblem:"请输入问题描述",inputImg:"请上传图片"},market:{title:"我的销售",code:"门店编码",time:"时间范围",zhi:"至",chart:"门店总销售图表",bills:"实时账单",tq:"总数量",ts:"总零售额",tc:"总成本额",tg:"总毛利额",tt:"总客流量",tp:"总客单价",details:"查看详情",hint:"暂无数据",submit:"查询",num:"数量",money:"金额",category:["家居百货","健康美容","饰品系列","文体礼品","季节产品","精品包饰","儿童玩具","毛绒公仔","数码配件","休闲食品","物料耗材"],loading:"正在加载中..."},market_data:{title:"销售明细",Default:"默认",tq:"数量",ts:"零售额",tc:"成本额",tg:"毛利额",tt:"客流量",tp:"客单价",readTime:"实时账单",weekDay:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},search:(n={title:"搜索",inputpl:"请输入关键字...",p1:"请输入关键字",recommend:"推荐",Default:"默认",price:"价格",page:"页"},s(n,"p1","批"),s(n,"p2","售"),s(n,"more","没有更多数据啦"),s(n,"results","结果"),s(n,"recList_a",[{value:"口罩",id:"口罩"},{value:"香水",id:"香水"},{value:"耳机",id:"耳机"},{value:"毛巾",id:"毛巾"},{value:"数据线",id:"数据线"},{value:"拖鞋",id:"拖鞋"}]),s(n,"recList_b",[{value:"新品上线"},{value:"中国仓产品"}]),n),order_list:{title:"我的订单",navList:["待确定订单","已确定订单"],priceAll:"订单总额",time:"提交时间",more:"没有更多数据啦",order:"订单号"},order_data:{title:"订单详情",priceAll:"订单总额",code:"订单条码",item_no:"商品条码",item_num:"商品总额",hint:"订单已提交,等待客服确认",pcs:"件"},collect:{title:"我的收藏",all:"全部",item_no:"商品条码",p1:"批",p2:"售",empty:"清空",foot_a:"收藏夹共有",foot_b:"款商品",more:"没有更多数据啦",Default:"默认"},voucher:{title:"代金券",navList:["未使用","已使用","已过期"],use:"使用",atime:"开始时间",btime:"结束时间",more:"没有更多数据啦"},address:{consignee:"收货人",title:"地址",code:"编号",Default:"默认",Phone:"电话"},set:{title:"设置",clear:"清除缓存",quit:"退出",check:"检测更新",version:"当前版本号",modelMsg:"确定要退出登录吗",hint:"清除成功"},sale:{title:"我的库存",type:"售后类型",date:"申请日期",product:"申报产品",send:"寄回产品"},saleDetail:{title:"售后详情",loading:"正在加载中...",num:"售后编号",type:"审核类型",count:"数量",status:"审核状态",progress:"进度",information:"退货信息",name:"商品名称",code:"商品条码",reason:"申请原因",situation:"审核情况",picture:"质量图片",content:"您确定撤销售后商品？",success:"撤销成功",remove:"撤销"},sale_add:{title:"添加售后",radioList:[{value:"1",name:"调换货物",checked:!1},{value:"2",name:"质量问题",checked:!1},{value:"3",name:"物流破损",checked:!1}],hint1:"请选择售后类型!",hint2:"请输入商品条码",hint3:"请输入数量",hint4:"请输入申请原因",hint5:"您确定修改选择类型吗",hint6:"货号已存在,不能重复添加",hint7:"上传成功",hint8:"添加成功",hint9:"请添加售后商品",code:"商品条码",qty:"数量",reason:"申请原因",add:"添加商品",photo:"质量图片",submit:"提交"},send:{title:"寄回产品",submit:"我要寄回",ex:"快递",time:"寄回时间",dhl:"快递公司"},addsend:{hint1:"请先申报售后产品",hint2:"点击申报",title:"申请寄回",declaration:"点击申报",name:"快递公司",number:"快递单号",fee:"快递运费",img:"上传面单",item_no:"商品编号",item_name:"商品名称",qty:"申报数",num:"实退数",submit:"提交",pla1:"请输入物流公司",pla2:"请输入物流单号",pla3:"请输入运费",pla4:"请添加售后商品",pla5:"请上传照片"}};e.default=r},a34a:function(t,e,i){t.exports=i("bbdd")},a701:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;
/*!
 * vue-i18n v8.14.1 
 * (c) 2019 kazuya kawaguchi
 * Released under the MIT License.
 */
var i=["style","currency","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","localeMatcher","formatMatcher"];function o(e,i){"undefined"!==typeof console&&(console.warn(t("[vue-i18n] "+e," at node_modules\\vue-i18n\\dist\\vue-i18n.esm.js:32")),i&&console.warn(t(i.stack," at node_modules\\vue-i18n\\dist\\vue-i18n.esm.js:35")))}function n(e,i){"undefined"!==typeof console&&(console.error(t("[vue-i18n] "+e," at node_modules\\vue-i18n\\dist\\vue-i18n.esm.js:42")),i&&console.error(t(i.stack," at node_modules\\vue-i18n\\dist\\vue-i18n.esm.js:45")))}function s(t){return null!==t&&"object"===typeof t}var r=Object.prototype.toString,a="[object Object]";function c(t){return r.call(t)===a}function l(t){return null===t||void 0===t}function u(){var t=[],e=arguments.length;while(e--)t[e]=arguments[e];var i=null,o=null;return 1===t.length?s(t[0])||Array.isArray(t[0])?o=t[0]:"string"===typeof t[0]&&(i=t[0]):2===t.length&&("string"===typeof t[0]&&(i=t[0]),(s(t[1])||Array.isArray(t[1]))&&(o=t[1])),{locale:i,params:o}}function p(t){return JSON.parse(JSON.stringify(t))}function h(t,e){if(t.length){var i=t.indexOf(e);if(i>-1)return t.splice(i,1)}}var d=Object.prototype.hasOwnProperty;function m(t,e){return d.call(t,e)}function g(t){for(var e=arguments,i=Object(t),o=1;o<arguments.length;o++){var n=e[o];if(void 0!==n&&null!==n){var r=void 0;for(r in n)m(n,r)&&(s(n[r])?i[r]=g(i[r],n[r]):i[r]=n[r])}}return i}function f(t,e){if(t===e)return!0;var i=s(t),o=s(e);if(!i||!o)return!i&&!o&&String(t)===String(e);try{var n=Array.isArray(t),r=Array.isArray(e);if(n&&r)return t.length===e.length&&t.every(function(t,i){return f(t,e[i])});if(n||r)return!1;var a=Object.keys(t),c=Object.keys(e);return a.length===c.length&&a.every(function(i){return f(t[i],e[i])})}catch(l){return!1}}function y(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){var e=[],i=arguments.length-1;while(i-- >0)e[i]=arguments[i+1];var o=this.$i18n;return o._t.apply(o,[t,o.locale,o._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){var i=[],o=arguments.length-2;while(o-- >0)i[o]=arguments[o+2];var n=this.$i18n;return n._tc.apply(n,[t,n.locale,n._getMessages(),this,e].concat(i))},t.prototype.$te=function(t,e){var i=this.$i18n;return i._te(t,i.locale,i._getMessages(),e)},t.prototype.$d=function(t){var e,i=[],o=arguments.length-1;while(o-- >0)i[o]=arguments[o+1];return(e=this.$i18n).d.apply(e,[t].concat(i))},t.prototype.$n=function(t){var e,i=[],o=arguments.length-1;while(o-- >0)i[o]=arguments[o+1];return(e=this.$i18n).n.apply(e,[t].concat(i))}}var v={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n)if(t.i18n instanceof ft){if(t.__i18n)try{var e={};t.__i18n.forEach(function(t){e=g(e,JSON.parse(t))}),Object.keys(e).forEach(function(i){t.i18n.mergeLocaleMessage(i,e[i])})}catch(s){0}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData()}else if(c(t.i18n)){if(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof ft&&(t.i18n.root=this.$root,t.i18n.formatter=this.$root.$i18n.formatter,t.i18n.fallbackLocale=this.$root.$i18n.fallbackLocale,t.i18n.formatFallbackMessages=this.$root.$i18n.formatFallbackMessages,t.i18n.silentTranslationWarn=this.$root.$i18n.silentTranslationWarn,t.i18n.silentFallbackWarn=this.$root.$i18n.silentFallbackWarn,t.i18n.pluralizationRules=this.$root.$i18n.pluralizationRules,t.i18n.preserveDirectiveContent=this.$root.$i18n.preserveDirectiveContent),t.__i18n)try{var i={};t.__i18n.forEach(function(t){i=g(i,JSON.parse(t))}),t.i18n.messages=i}catch(s){0}var o=t.i18n,n=o.sharedMessages;n&&c(n)&&(t.i18n.messages=g(t.i18n.messages,n)),this._i18n=new ft(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale())}else 0;else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof ft?this._i18n=this.$root.$i18n:t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof ft&&(this._i18n=t.parent.$i18n)},beforeMount:function(){var t=this.$options;t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n?t.i18n instanceof ft?(this._i18n.subscribeDataChanging(this),this._subscribing=!0):c(t.i18n)&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0):this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof ft?(this._i18n.subscribeDataChanging(this),this._subscribing=!0):t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof ft&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){if(this._i18n){var t=this;this.$nextTick(function(){t._subscribing&&(t._i18n.unsubscribeDataChanging(t),delete t._subscribing),t._i18nWatcher&&(t._i18nWatcher(),t._i18n.destroyVM(),delete t._i18nWatcher),t._localeWatcher&&(t._localeWatcher(),delete t._localeWatcher),t._i18n=null})}}},x={name:"i18n",functional:!0,props:{tag:{type:String},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var i=e.data,o=e.parent,n=e.props,s=e.slots,r=o.$i18n;if(r){var a=n.path,c=n.locale,l=n.places,u=s(),p=r.i(a,c,_(u)||l?b(u.default,l):u),h=n.tag||"span";return h?t(h,i,p):p}}};function _(t){var e;for(e in t)if("default"!==e)return!1;return Boolean(e)}function b(t,e){var i=e?w(e):{};if(!t)return i;t=t.filter(function(t){return t.tag||""!==t.text.trim()});var o=t.every(A);return t.reduce(o?j:k,i)}function w(t){return Array.isArray(t)?t.reduce(k,{}):Object.assign({},t)}function j(t,e){return e.data&&e.data.attrs&&e.data.attrs.place&&(t[e.data.attrs.place]=e),t}function k(t,e,i){return t[i]=e,t}function A(t){return Boolean(t.data&&t.data.attrs&&t.data.attrs.place)}var S,P={name:"i18n-n",functional:!0,props:{tag:{type:String,default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(t,e){var o=e.props,n=e.parent,r=e.data,a=n.$i18n;if(!a)return null;var c=null,l=null;"string"===typeof o.format?c=o.format:s(o.format)&&(o.format.key&&(c=o.format.key),l=Object.keys(o.format).reduce(function(t,e){var n;return i.includes(e)?Object.assign({},t,(n={},n[e]=o.format[e],n)):t},null));var u=o.locale||a.locale,p=a._ntp(o.value,u,c,l),h=p.map(function(t,e){var i,o=r.scopedSlots&&r.scopedSlots[t.type];return o?o((i={},i[t.type]=t.value,i.index=e,i.parts=p,i)):t.value});return t(o.tag,{attrs:r.attrs,class:r["class"],staticClass:r.staticClass},h)}};function T(t,e,i){D(t,i)&&F(t,e,i)}function E(t,e,i,o){if(D(t,i)){var n=i.context.$i18n;L(t,i)&&f(e.value,e.oldValue)&&f(t._localeMessage,n.getLocaleMessage(n.locale))||F(t,e,i)}}function O(t,e,i,n){var s=i.context;if(s){var r=i.context.$i18n||{};e.modifiers.preserve||r.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t["_vt"],t._locale=void 0,delete t["_locale"],t._localeMessage=void 0,delete t["_localeMessage"]}else o("Vue instance does not exists in VNode context")}function D(t,e){var i=e.context;return i?!!i.$i18n||(o("VueI18n instance does not exists in Vue instance"),!1):(o("Vue instance does not exists in VNode context"),!1)}function L(t,e){var i=e.context;return t._locale===i.$i18n.locale}function F(t,e,i){var n,s,r=e.value,a=M(r),c=a.path,l=a.locale,u=a.args,p=a.choice;if(c||l||u)if(c){var h=i.context;t._vt=t.textContent=p?(n=h.$i18n).tc.apply(n,[c,p].concat(C(l,u))):(s=h.$i18n).t.apply(s,[c].concat(C(l,u))),t._locale=h.$i18n.locale,t._localeMessage=h.$i18n.getLocaleMessage(h.$i18n.locale)}else o("`path` is required in v-t directive");else o("value type not supported")}function M(t){var e,i,o,n;return"string"===typeof t?e=t:c(t)&&(e=t.path,i=t.locale,o=t.args,n=t.choice),{path:e,locale:i,args:o,choice:n}}function C(t,e){var i=[];return t&&i.push(t),e&&(Array.isArray(e)||c(e))&&i.push(e),i}function $(t){$.installed=!0,S=t;S.version&&Number(S.version.split(".")[0]);y(S),S.mixin(v),S.directive("t",{bind:T,update:E,unbind:O}),S.component(x.name,x),S.component(P.name,P);var e=S.config.optionMergeStrategies;e.i18n=function(t,e){return void 0===e?t:e}}var z=function(){this._caches=Object.create(null)};z.prototype.interpolate=function(t,e){if(!e)return[t];var i=this._caches[t];return i||(i=H(t),this._caches[t]=i),N(i,e)};var R=/^(?:\d)+/,I=/^(?:\w)+/;function H(t){var e=[],i=0,o="";while(i<t.length){var n=t[i++];if("{"===n){o&&e.push({type:"text",value:o}),o="";var s="";n=t[i++];while(void 0!==n&&"}"!==n)s+=n,n=t[i++];var r="}"===n,a=R.test(s)?"list":r&&I.test(s)?"named":"unknown";e.push({value:s,type:a})}else"%"===n?"{"!==t[i]&&(o+=n):o+=n}return o&&e.push({type:"text",value:o}),e}function N(t,e){var i=[],o=0,n=Array.isArray(e)?"list":s(e)?"named":"unknown";if("unknown"===n)return i;while(o<t.length){var r=t[o];switch(r.type){case"text":i.push(r.value);break;case"list":i.push(e[parseInt(r.value,10)]);break;case"named":"named"===n&&i.push(e[r.value]);break;case"unknown":0;break}o++}return i}var B=0,W=1,q=2,U=3,V=0,G=1,Q=2,K=3,X=4,Y=5,J=6,Z=7,tt=8,et=[];et[V]={ws:[V],ident:[K,B],"[":[X],eof:[Z]},et[G]={ws:[G],".":[Q],"[":[X],eof:[Z]},et[Q]={ws:[Q],ident:[K,B],0:[K,B],number:[K,B]},et[K]={ident:[K,B],0:[K,B],number:[K,B],ws:[G,W],".":[Q,W],"[":[X,W],eof:[Z,W]},et[X]={"'":[Y,B],'"':[J,B],"[":[X,q],"]":[G,U],eof:tt,else:[X,B]},et[Y]={"'":[X,B],eof:tt,else:[Y,B]},et[J]={'"':[X,B],eof:tt,else:[J,B]};var it=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ot(t){return it.test(t)}function nt(t){var e=t.charCodeAt(0),i=t.charCodeAt(t.length-1);return e!==i||34!==e&&39!==e?t:t.slice(1,-1)}function st(t){if(void 0===t||null===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function rt(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(ot(e)?nt(e):"*"+e)}function at(t){var e,i,o,n,s,r,a,c=[],l=-1,u=V,p=0,h=[];function d(){var e=t[l+1];if(u===Y&&"'"===e||u===J&&'"'===e)return l++,o="\\"+e,h[B](),!0}h[W]=function(){void 0!==i&&(c.push(i),i=void 0)},h[B]=function(){void 0===i?i=o:i+=o},h[q]=function(){h[B](),p++},h[U]=function(){if(p>0)p--,u=X,h[B]();else{if(p=0,void 0===i)return!1;if(i=rt(i),!1===i)return!1;h[W]()}};while(null!==u)if(l++,e=t[l],"\\"!==e||!d()){if(n=st(e),a=et[u],s=a[n]||a["else"]||tt,s===tt)return;if(u=s[0],r=h[s[1]],r&&(o=s[2],o=void 0===o?e:o,!1===r()))return;if(u===Z)return c}}var ct=function(){this._cache=Object.create(null)};ct.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=at(t),e&&(this._cache[t]=e)),e||[]},ct.prototype.getPathValue=function(t,e){if(!s(t))return null;var i=this.parsePath(e);if(0===i.length)return null;var o=i.length,n=t,r=0;while(r<o){var a=n[i[r]];if(void 0===a)return null;n=a,r++}return n};var lt,ut=/<\/?[\w\s="\/.':;#-\/]+>/,pt=/(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,ht=/^@(?:\.([a-z]+))?:/,dt=/[()]/g,mt={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()}},gt=new z,ft=function(t){var e=this;void 0===t&&(t={}),!S&&"undefined"!==typeof window&&window.Vue&&$(window.Vue);var i=t.locale||"en-US",o=t.fallbackLocale||"en-US",n=t.messages||{},s=t.dateTimeFormats||{},r=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||gt,this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._formatFallbackMessages=void 0!==t.formatFallbackMessages&&!!t.formatFallbackMessages,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&t.silentTranslationWarn,this._silentFallbackWarn=void 0!==t.silentFallbackWarn&&!!t.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new ct,this._dataListeners=[],this._preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this.pluralizationRules=t.pluralizationRules||{},this._warnHtmlInMessage=t.warnHtmlInMessage||"off",this._exist=function(t,i){return!(!t||!i)&&(!l(e._path.getPathValue(t,i))||!!t[i])},"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||Object.keys(n).forEach(function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,n[t])}),this._initVM({locale:i,fallbackLocale:o,messages:n,dateTimeFormats:s,numberFormats:r})},yt={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},formatFallbackMessages:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0},warnHtmlInMessage:{configurable:!0}};ft.prototype._checkLocaleMessage=function(t,e,i){var s=[],r=function t(e,i,s,r){if(c(s))Object.keys(s).forEach(function(o){var n=s[o];c(n)?(r.push(o),r.push("."),t(e,i,n,r),r.pop(),r.pop()):(r.push(o),t(e,i,n,r),r.pop())});else if(Array.isArray(s))s.forEach(function(o,n){c(o)?(r.push("["+n+"]"),r.push("."),t(e,i,o,r),r.pop(),r.pop()):(r.push("["+n+"]"),t(e,i,o,r),r.pop())});else if("string"===typeof s){var a=ut.test(s);if(a){var l="Detected HTML in message '"+s+"' of keypath '"+r.join("")+"' at '"+i+"'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";"warn"===e?o(l):"error"===e&&n(l)}}};r(e,t,i,s)},ft.prototype._initVM=function(t){var e=S.config.silent;S.config.silent=!0,this._vm=new S({data:t}),S.config.silent=e},ft.prototype.destroyVM=function(){this._vm.$destroy()},ft.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},ft.prototype.unsubscribeDataChanging=function(t){h(this._dataListeners,t)},ft.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",function(){var e=t._dataListeners.length;while(e--)S.nextTick(function(){t._dataListeners[e]&&t._dataListeners[e].$forceUpdate()})},{deep:!0})},ft.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$i18n.vm.$watch("locale",function(e){t.$set(t,"locale",e),t.$forceUpdate()},{immediate:!0})},yt.vm.get=function(){return this._vm},yt.messages.get=function(){return p(this._getMessages())},yt.dateTimeFormats.get=function(){return p(this._getDateTimeFormats())},yt.numberFormats.get=function(){return p(this._getNumberFormats())},yt.availableLocales.get=function(){return Object.keys(this.messages).sort()},yt.locale.get=function(){return this._vm.locale},yt.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},yt.fallbackLocale.get=function(){return this._vm.fallbackLocale},yt.fallbackLocale.set=function(t){this._vm.$set(this._vm,"fallbackLocale",t)},yt.formatFallbackMessages.get=function(){return this._formatFallbackMessages},yt.formatFallbackMessages.set=function(t){this._formatFallbackMessages=t},yt.missing.get=function(){return this._missing},yt.missing.set=function(t){this._missing=t},yt.formatter.get=function(){return this._formatter},yt.formatter.set=function(t){this._formatter=t},yt.silentTranslationWarn.get=function(){return this._silentTranslationWarn},yt.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},yt.silentFallbackWarn.get=function(){return this._silentFallbackWarn},yt.silentFallbackWarn.set=function(t){this._silentFallbackWarn=t},yt.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},yt.preserveDirectiveContent.set=function(t){this._preserveDirectiveContent=t},yt.warnHtmlInMessage.get=function(){return this._warnHtmlInMessage},yt.warnHtmlInMessage.set=function(t){var e=this,i=this._warnHtmlInMessage;if(this._warnHtmlInMessage=t,i!==t&&("warn"===t||"error"===t)){var o=this._getMessages();Object.keys(o).forEach(function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,o[t])})}},ft.prototype._getMessages=function(){return this._vm.messages},ft.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},ft.prototype._getNumberFormats=function(){return this._vm.numberFormats},ft.prototype._warnDefault=function(t,e,i,o,n){if(!l(i))return i;if(this._missing){var s=this._missing.apply(null,[t,e,o,n]);if("string"===typeof s)return s}else 0;if(this._formatFallbackMessages){var r=u.apply(void 0,n);return this._render(e,"string",r.params,e)}return e},ft.prototype._isFallbackRoot=function(t){return!t&&!l(this._root)&&this._fallbackRoot},ft.prototype._isSilentFallbackWarn=function(t){return this._silentFallbackWarn instanceof RegExp?this._silentFallbackWarn.test(t):this._silentFallbackWarn},ft.prototype._isSilentFallback=function(t,e){return this._isSilentFallbackWarn(e)&&(this._isFallbackRoot()||t!==this.fallbackLocale)},ft.prototype._isSilentTranslationWarn=function(t){return this._silentTranslationWarn instanceof RegExp?this._silentTranslationWarn.test(t):this._silentTranslationWarn},ft.prototype._interpolate=function(t,e,i,o,n,s,r){if(!e)return null;var a,u=this._path.getPathValue(e,i);if(Array.isArray(u)||c(u))return u;if(l(u)){if(!c(e))return null;if(a=e[i],"string"!==typeof a)return null}else{if("string"!==typeof u)return null;a=u}return(a.indexOf("@:")>=0||a.indexOf("@.")>=0)&&(a=this._link(t,e,a,o,"raw",s,r)),this._render(a,n,s,i)},ft.prototype._link=function(t,e,i,o,n,s,r){var a=i,c=a.match(pt);for(var l in c)if(c.hasOwnProperty(l)){var u=c[l],p=u.match(ht),h=p[0],d=p[1],m=u.replace(h,"").replace(dt,"");if(r.includes(m))return a;r.push(m);var g=this._interpolate(t,e,m,o,"raw"===n?"string":n,"raw"===n?void 0:s,r);if(this._isFallbackRoot(g)){if(!this._root)throw Error("unexpected error");var f=this._root.$i18n;g=f._translate(f._getMessages(),f.locale,f.fallbackLocale,m,o,n,s)}g=this._warnDefault(t,m,g,o,Array.isArray(s)?s:[s]),mt.hasOwnProperty(d)&&(g=mt[d](g)),r.pop(),a=g?a.replace(u,g):a}return a},ft.prototype._render=function(t,e,i,o){var n=this._formatter.interpolate(t,i,o);return n||(n=gt.interpolate(t,i,o)),"string"===e?n.join(""):n},ft.prototype._translate=function(t,e,i,o,n,s,r){var a=this._interpolate(e,t[e],o,n,s,r,[o]);return l(a)?(a=this._interpolate(i,t[i],o,n,s,r,[o]),l(a)?null:a):a},ft.prototype._t=function(t,e,i,o){var n,s=[],r=arguments.length-4;while(r-- >0)s[r]=arguments[r+4];if(!t)return"";var a=u.apply(void 0,s),c=a.locale||e,l=this._translate(i,c,this.fallbackLocale,t,o,"string",a.params);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return(n=this._root).$t.apply(n,[t].concat(s))}return this._warnDefault(c,t,l,o,s)},ft.prototype.t=function(t){var e,i=[],o=arguments.length-1;while(o-- >0)i[o]=arguments[o+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(i))},ft.prototype._i=function(t,e,i,o,n){var s=this._translate(i,e,this.fallbackLocale,t,o,"raw",n);if(this._isFallbackRoot(s)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,n)}return this._warnDefault(e,t,s,o,[n])},ft.prototype.i=function(t,e,i){return t?("string"!==typeof e&&(e=this.locale),this._i(t,e,this._getMessages(),null,i)):""},ft.prototype._tc=function(t,e,i,o,n){var s,r=[],a=arguments.length-5;while(a-- >0)r[a]=arguments[a+5];if(!t)return"";void 0===n&&(n=1);var c={count:n,n:n},l=u.apply(void 0,r);return l.params=Object.assign(c,l.params),r=null===l.locale?[l.params]:[l.locale,l.params],this.fetchChoice((s=this)._t.apply(s,[t,e,i,o].concat(r)),n)},ft.prototype.fetchChoice=function(t,e){if(!t&&"string"!==typeof t)return null;var i=t.split("|");return e=this.getChoiceIndex(e,i.length),i[e]?i[e].trim():t},ft.prototype.getChoiceIndex=function(t,e){var i=function(t,e){return t=Math.abs(t),2===e?t?t>1?1:0:1:t?Math.min(t,2):0};return this.locale in this.pluralizationRules?this.pluralizationRules[this.locale].apply(this,[t,e]):i(t,e)},ft.prototype.tc=function(t,e){var i,o=[],n=arguments.length-2;while(n-- >0)o[n]=arguments[n+2];return(i=this)._tc.apply(i,[t,this.locale,this._getMessages(),null,e].concat(o))},ft.prototype._te=function(t,e,i){var o=[],n=arguments.length-3;while(n-- >0)o[n]=arguments[n+3];var s=u.apply(void 0,o).locale||e;return this._exist(i[s],t)},ft.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},ft.prototype.getLocaleMessage=function(t){return p(this._vm.messages[t]||{})},ft.prototype.setLocaleMessage=function(t,e){("warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||(this._checkLocaleMessage(t,this._warnHtmlInMessage,e),"error"!==this._warnHtmlInMessage))&&this._vm.$set(this._vm.messages,t,e)},ft.prototype.mergeLocaleMessage=function(t,e){("warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||(this._checkLocaleMessage(t,this._warnHtmlInMessage,e),"error"!==this._warnHtmlInMessage))&&this._vm.$set(this._vm.messages,t,g(this._vm.messages[t]||{},e))},ft.prototype.getDateTimeFormat=function(t){return p(this._vm.dateTimeFormats[t]||{})},ft.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e)},ft.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,g(this._vm.dateTimeFormats[t]||{},e))},ft.prototype._localizeDateTime=function(t,e,i,o,n){var s=e,r=o[s];if((l(r)||l(r[n]))&&(s=i,r=o[s]),l(r)||l(r[n]))return null;var a=r[n],c=s+"__"+n,u=this._dateTimeFormatters[c];return u||(u=this._dateTimeFormatters[c]=new Intl.DateTimeFormat(s,a)),u.format(t)},ft.prototype._d=function(t,e,i){if(!i)return new Intl.DateTimeFormat(e).format(t);var o=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),i);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,i,e)}return o||""},ft.prototype.d=function(t){var e=[],i=arguments.length-1;while(i-- >0)e[i]=arguments[i+1];var o=this.locale,n=null;return 1===e.length?"string"===typeof e[0]?n=e[0]:s(e[0])&&(e[0].locale&&(o=e[0].locale),e[0].key&&(n=e[0].key)):2===e.length&&("string"===typeof e[0]&&(n=e[0]),"string"===typeof e[1]&&(o=e[1])),this._d(t,o,n)},ft.prototype.getNumberFormat=function(t){return p(this._vm.numberFormats[t]||{})},ft.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e)},ft.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,g(this._vm.numberFormats[t]||{},e))},ft.prototype._getNumberFormatter=function(t,e,i,o,n,s){var r=e,a=o[r];if((l(a)||l(a[n]))&&(r=i,a=o[r]),l(a)||l(a[n]))return null;var c,u=a[n];if(s)c=new Intl.NumberFormat(r,Object.assign({},u,s));else{var p=r+"__"+n;c=this._numberFormatters[p],c||(c=this._numberFormatters[p]=new Intl.NumberFormat(r,u))}return c},ft.prototype._n=function(t,e,i,o){if(!ft.availabilities.numberFormat)return"";if(!i){var n=o?new Intl.NumberFormat(e,o):new Intl.NumberFormat(e);return n.format(t)}var s=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),i,o),r=s&&s.format(t);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:i,locale:e},o))}return r||""},ft.prototype.n=function(t){var e=[],o=arguments.length-1;while(o-- >0)e[o]=arguments[o+1];var n=this.locale,r=null,a=null;return 1===e.length?"string"===typeof e[0]?r=e[0]:s(e[0])&&(e[0].locale&&(n=e[0].locale),e[0].key&&(r=e[0].key),a=Object.keys(e[0]).reduce(function(t,o){var n;return i.includes(o)?Object.assign({},t,(n={},n[o]=e[0][o],n)):t},null)):2===e.length&&("string"===typeof e[0]&&(r=e[0]),"string"===typeof e[1]&&(n=e[1])),this._n(t,n,r,a)},ft.prototype._ntp=function(t,e,i,o){if(!ft.availabilities.numberFormat)return[];if(!i){var n=o?new Intl.NumberFormat(e,o):new Intl.NumberFormat(e);return n.formatToParts(t)}var s=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),i,o),r=s&&s.formatToParts(t);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(t,e,i,o)}return r||[]},Object.defineProperties(ft.prototype,yt),Object.defineProperty(ft,"availabilities",{get:function(){if(!lt){var t="undefined"!==typeof Intl;lt={dateTimeFormat:t&&"undefined"!==typeof Intl.DateTimeFormat,numberFormat:t&&"undefined"!==typeof Intl.NumberFormat}}return lt}}),ft.install=$,ft.version="8.14.1";var vt=ft;e.default=vt}).call(this,i("0de9")["default"])},bbdd:function(t,e,i){var o=function(){return this||"object"===typeof self&&self}()||Function("return this")(),n=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,s=n&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,t.exports=i("96cf"),n)o.regeneratorRuntime=s;else try{delete o.regeneratorRuntime}catch(r){o.regeneratorRuntime=void 0}},c06f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={status:1,data:{id:1,mobile:18888888888,nickname:"Leo yo",portrait:"http://img.61ef.cn/news/201409/28/2014092805595807.jpg"},msg:"提示"},n=[{src:"/static/temp/banner3.jpg",background:"rgb(203, 87, 60)"},{src:"/static/temp/banner2.jpg",background:"rgb(205, 215, 218)"},{src:"/static/temp/banner4.jpg",background:"rgb(183, 73, 69)"}],s=[{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",image2:"http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",image3:"http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",title:"古黛妃 短袖t恤女夏装2019新款韩版宽松",price:179,sales:61},{image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",image2:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",image3:"http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",title:"潘歌针织连衣裙",price:78,sales:16},{image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",image2:"http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",image3:"http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",title:"巧谷2019春夏季新品新款女装",price:108.8,sales:5},{image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg",image2:"http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",image3:"http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",title:"私萱连衣裙",price:265,sales:88},{image:"https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",image2:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",image3:"http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",title:"娇诗茹 ulzzang原宿风学生潮韩版春夏短",price:422,sales:137},{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",image2:"http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",image3:"http://img.61ef.cn/news/201903/20/2019032009251784.jpg",title:"古黛妃 短袖t恤女夏装2019新款韩版宽松",price:179,sales:95}],r=[{id:1,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg",attr_val:"春装款 L",stock:15,title:"OVBE 长袖风衣",price:278,number:1},{id:3,image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg",attr_val:"激光导航 扫拖一体",stock:3,title:"科沃斯 Ecovacs 扫地机器人",price:1348,number:5},{id:4,image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg",attr_val:"XL",stock:55,title:"朵绒菲小西装",price:175.88,number:1},{id:5,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG",attr_val:"520 #粉红色",stock:15,title:"迪奥（Dior）烈艳唇膏",price:1089,number:1},{id:6,image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg",attr_val:"樱花味润手霜 30ml",stock:15,title:"欧舒丹（L'OCCITANE）乳木果",price:128,number:1},{id:7,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg",attr_val:"特级 12个",stock:7,title:"新疆阿克苏苹果 特级",price:58.8,number:10},{id:8,image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg",attr_val:"激光导航 扫拖一体",stock:15,title:"科沃斯 Ecovacs 扫地机器人",price:1348,number:1},{id:9,image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg",attr_val:"XL",stock:55,title:"朵绒菲小西装",price:175.88,number:1},{id:10,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG",attr_val:"520 #粉红色",stock:15,title:"迪奥（Dior）烈艳唇膏",price:1089,number:1},{id:11,image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg",attr_val:"樱花味润手霜 30ml",stock:15,title:"欧舒丹（L'OCCITANE）乳木果",price:128,number:1},{id:12,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg",attr_val:"特级 12个",stock:7,title:"新疆阿克苏苹果 特级",price:58.8,number:10},{id:13,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg",attr_val:"春装款/m",stock:15,title:"女装2019春秋新款",price:420,number:1}],a={title:"纯种金毛幼犬活体有血统证书",title2:"拆家小能手 你值得拥有",favorite:!0,imgList:[{src:"http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg"},{src:"http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg"},{src:"http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg"},{src:"http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg"}],episodeList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],guessList:[{src:"http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg",title:"猫眼指甲油",title2:"独树一帜的免照灯猫眼指甲"},{src:"http://m.china-7.net/uploads/14778449362891.jpg",title:"创意屋",title2:"创意屋形上下双层高低床"},{src:"http://www.k73.com/up/allimg/130415/22-130415093527.jpg",title:"MissCandy 指甲油",title2:"十分适合喜欢素净的妹纸，尽显淡雅的气质"},{src:"http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg\t",title:"RMK 2017星空海蓝唇釉",title2:"唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。"}],evaList:[{src:"http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。"},{src:"http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"楼上说的好有道理。"}]},c=[{type:1,icon:"/static/temp/share_wechat.png",text:"微信好友"},{type:2,icon:"/static/temp/share_moment.png",text:"朋友圈"},{type:3,icon:"/static/temp/share_qq.png",text:"QQ好友"},{type:4,icon:"/static/temp/share_qqzone.png",text:"QQ空间"}],l=[{src:"http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg"},{src:"http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg"},{src:"http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg"},{src:"http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg"},{src:"http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg"},{src:"http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg"},{src:"http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg"},{src:"http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg"},{src:"http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg"},{src:"http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg"},{src:"http://pic1.win4000.com/wallpaper/d/5991569950166.jpg"},{src:"http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg"},{src:"http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg"},{src:"http://www.k73.com/up/allimg/130415/22-130415093527.jpg"},{src:"http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg"},{src:"http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg"},{src:"http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg"},{src:"http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg"},{src:"http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg"},{src:"http://pic1.win4000.com/mobile/3/57888a298d61d.jpg"}],u=[{time:"2019-04-06 11:37",state:1,goodsList:[{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg"},{image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"}]},{time:"2019-04-06 11:37",state:9,goodsList:[{title:"古黛妃 短袖t恤女 春夏装2019新款韩版宽松",price:179.5,image:"https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",number:1,attr:"珊瑚粉 M"}]},{time:"2019-04-06 11:37",state:1,goodsList:[{image:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2120460599/O1CN01LBPS4C1GINkwsOTXS_!!2120460599.jpg_430x430q90.jpg"},{image:"https://img.alicdn.com/imgextra/i2/1069876356/TB2ocTQG4WYBuNjy1zkXXXGGpXa_!!1069876356.jpg_430x430q90.jpg"},{image:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2120460599/O1CN01YsmgwZ1GINkv38rkn_!!2120460599.jpg_430x430q90.jpg"}]},{time:"2019-04-06 11:37",state:1,goodsList:[{title:"回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女",price:69,image:"https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg",number:1,attr:"白色-高帮 39"}]},{time:"2019-04-06 11:37",state:1,goodsList:[{image:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3358098495/O1CN01dhYyid2Ccl5MWLDok_!!3358098495.jpg_430x430q90.jpg"},{image:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3358098495/O1CN01AWsnFA2Ccl5OzvqsL_!!3358098495.jpg_430x430q90.jpg"}]},{time:"2019-04-06 11:37",state:1,goodsList:[{image:"https://img.alicdn.com/imgextra/i4/3470687433/O1CN0124mMQOSERr18L1h_!!3470687433.jpg_430x430q90.jpg"},{image:"https://img.alicdn.com/imgextra/i3/2888462616/O1CN01ERra5J1VCAbZaKI5n_!!0-item_pic.jpg_430x430q90.jpg"},{image:"https://gd3.alicdn.com/imgextra/i3/819381730/O1CN01YV4mXj1OeNhQIhQlh_!!819381730.jpg_400x400.jpg"}]}],p=[{id:1,name:"手机数码"},{id:2,name:"礼品鲜花"},{id:3,name:"男装女装"},{id:4,name:"母婴用品"},{id:5,pid:1,name:"手机通讯"},{id:6,pid:1,name:"运营商"},{id:8,pid:5,name:"全面屏手机",picture:"/static/temp/cate2.jpg"},{id:9,pid:5,name:"游戏手机",picture:"/static/temp/cate3.jpg"},{id:10,pid:5,name:"老人机",picture:"/static/temp/cate1.jpg"},{id:11,pid:5,name:"拍照手机",picture:"/static/temp/cate4.jpg"},{id:12,pid:5,name:"女性手机",picture:"/static/temp/cate5.jpg"},{id:14,pid:6,name:"合约机",picture:"/static/temp/cate1.jpg"},{id:15,pid:6,name:"选好卡",picture:"/static/temp/cate4.jpg"},{id:16,pid:6,name:"办套餐",picture:"/static/temp/cate5.jpg"},{id:17,pid:2,name:"礼品"},{id:18,pid:2,name:"鲜花"},{id:19,pid:17,name:"公益摆件",picture:"/static/temp/cate7.jpg"},{id:20,pid:17,name:"创意礼品",picture:"/static/temp/cate8.jpg"},{id:21,pid:18,name:"鲜花",picture:"/static/temp/cate9.jpg"},{id:22,pid:18,name:"每周一花",picture:"/static/temp/cate10.jpg"},{id:23,pid:18,name:"卡通花束",picture:"/static/temp/cate11.jpg"},{id:24,pid:18,name:"永生花",picture:"/static/temp/cate12.jpg"},{id:25,pid:3,name:"男装"},{id:26,pid:3,name:"女装"},{id:27,pid:25,name:"男士T恤",picture:"/static/temp/cate13.jpg"},{id:28,pid:25,name:"男士外套",picture:"/static/temp/cate14.jpg"},{id:29,pid:26,name:"裙装",picture:"/static/temp/cate15.jpg"},{id:30,pid:26,name:"T恤",picture:"/static/temp/cate16.jpg"},{id:31,pid:26,name:"上装",picture:"/static/temp/cate15.jpg"},{id:32,pid:26,name:"下装",picture:"/static/temp/cate16.jpg"},{id:33,pid:4,name:"奶粉"},{id:34,pid:4,name:"营养辅食"},{id:35,pid:4,name:"童装"},{id:39,pid:4,name:"喂养用品"},{id:36,pid:33,name:"有机奶粉",picture:"/static/temp/cate17.jpg"},{id:37,pid:34,name:"果泥/果汁",picture:"/static/temp/cate18.jpg"},{id:39,pid:34,name:"面条/粥",picture:"/static/temp/cate20.jpg"},{id:42,pid:35,name:"婴童衣橱",picture:"/static/temp/cate19.jpg"},{id:43,pid:39,name:"吸奶器",picture:"/static/temp/cate21.jpg"},{id:44,pid:39,name:"儿童餐具",picture:"/static/temp/cate22.jpg"},{id:45,pid:39,name:"牙胶安抚",picture:"/static/temp/cate23.jpg"},{id:46,pid:39,name:"围兜",picture:"/static/temp/cate24.jpg"}],h=[{cls_id:"01",cls_name:"家居百货",child:{101:{cls_id:"0101",cls_name:"杯类",img:["6970893335470","6941595106170","6939837616693"],index:"101",lazy:[{src:"http://img.xmvogue.com/thumb/6970893335470.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595106170.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837616693.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},102:{cls_id:"0102",cls_name:"厨房用品",img:["6939837608438","6939837616686","6939837609343"],index:"102",lazy:[{src:"http://img.xmvogue.com/thumb/6939837608438.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837616686.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837609343.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},103:{cls_id:"0103",cls_name:"居家用品",img:["6941196008859","6941196078203","6941196078210"],index:"103",lazy:[{src:"http://img.xmvogue.com/thumb/6941196008859.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196078203.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196078210.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},104:{cls_id:"0104",cls_name:"收纳用品",img:["6941196077657","6941196077664","6941196077671"],index:"104",lazy:[{src:"http://img.xmvogue.com/thumb/6941196077657.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196077664.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196077671.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},105:{cls_id:"0105",cls_name:"香氛日化",img:["6970893330062","6941196092940","6970893330536"],index:"105",lazy:[{src:"http://img.xmvogue.com/thumb/6970893330062.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196092940.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893330536.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},106:{cls_id:"0106",cls_name:"纺织用品",img:["6941196090830","6941196092438","6941595108136"],index:"106",lazy:[{src:"http://img.xmvogue.com/thumb/6941196090830.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196092438.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595108136.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},107:{cls_id:"0107",cls_name:"一次性用品",img:["6939837633942","6941196092209","6939837612794"],index:"107",lazy:[{src:"http://img.xmvogue.com/thumb/6939837633942.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196092209.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837612794.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},108:{cls_id:"0108",cls_name:"儿童用品",img:["6970893337504","6970893337627","13000270"],index:"108",lazy:[{src:"http://img.xmvogue.com/thumb/6970893337504.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893337627.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/13000270.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},109:{cls_id:"0109",cls_name:"季节产品",img:["6941595110665","6939837627019","6941595119163"],index:"109",lazy:[{src:"http://img.xmvogue.com/thumb/6941595110665.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837627019.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595119163.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},110:{cls_id:"0110",cls_name:"宠物用品",img:null,index:"110",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},111:{cls_id:"0111",cls_name:"个人护理",img:null,index:"111",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]}},foods:[{cls_id:"0101",cls_name:"杯类",img:["6970893335470","6941595106170","6939837616693"],index:"101",lazy:[{src:"http://img.xmvogue.com/thumb/6970893335470.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595106170.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837616693.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},{cls_id:"0102",cls_name:"厨房用品",img:["6939837608438","6939837616686","6939837609343"],index:"102",lazy:[{src:"http://img.xmvogue.com/thumb/6939837608438.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837616686.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837609343.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},{cls_id:"0103",cls_name:"居家用品",img:["6941196008859","6941196078203","6941196078210"],index:"103",lazy:[{src:"http://img.xmvogue.com/thumb/6941196008859.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196078203.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196078210.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},{cls_id:"0104",cls_name:"收纳用品",img:["6941196077657","6941196077664","6941196077671"],index:"104",lazy:[{src:"http://img.xmvogue.com/thumb/6941196077657.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196077664.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196077671.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},{cls_id:"0105",cls_name:"香氛日化",img:["6970893330062","6941196092940","6970893330536"],index:"105",lazy:[{src:"http://img.xmvogue.com/thumb/6970893330062.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196092940.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893330536.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},{cls_id:"0106",cls_name:"纺织用品",img:["6941196090830","6941196092438","6941595108136"],index:"106",lazy:[{src:"http://img.xmvogue.com/thumb/6941196090830.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196092438.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595108136.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},{cls_id:"0107",cls_name:"一次性用品",img:["6939837633942","6941196092209","6939837612794"],index:"107",lazy:[{src:"http://img.xmvogue.com/thumb/6939837633942.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196092209.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837612794.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},{cls_id:"0108",cls_name:"儿童用品",img:["6970893337504","6970893337627","13000270"],index:"108",lazy:[{src:"http://img.xmvogue.com/thumb/6970893337504.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893337627.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/13000270.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},{cls_id:"0109",cls_name:"季节产品",img:["6941595110665","6939837627019","6941595119163"],index:"109",lazy:[{src:"http://img.xmvogue.com/thumb/6941595110665.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837627019.jpg?x-oss-process=style/80",show:!0,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595119163.jpg?x-oss-process=style/80",show:!0,loaded:!1}]},{cls_id:"0110",cls_name:"宠物用品",img:null,index:"110",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"0111",cls_name:"个人护理",img:null,index:"111",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]}]},{cls_id:"02",cls_name:"健康美容",child:{201:{cls_id:"0201",cls_name:"彩妆、香水、甲油",img:["6928441732455","6934488908920","6934488909019"],index:"201",lazy:[{src:"http://img.xmvogue.com/thumb/6928441732455.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6934488908920.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6934488909019.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},202:{cls_id:"0202",cls_name:"护  肤",img:["6950079151285","6922200824627","6950079119636"],index:"202",lazy:[{src:"http://img.xmvogue.com/thumb/6950079151285.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6922200824627.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6950079119636.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},203:{cls_id:"0203",cls_name:"美妆工具",img:["6941196089292","6941196089339","6941196089360"],index:"203",lazy:[{src:"http://img.xmvogue.com/thumb/6941196089292.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196089339.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196089360.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},204:{cls_id:"0204",cls_name:"季节产品",img:["6941924324176","6922200852422","6936217741976"],index:"204",lazy:[{src:"http://img.xmvogue.com/thumb/6941924324176.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6922200852422.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6936217741976.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}},foods:[{cls_id:"0201",cls_name:"彩妆、香水、甲油",img:["6928441732455","6934488908920","6934488909019"],index:"201",lazy:[{src:"http://img.xmvogue.com/thumb/6928441732455.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6934488908920.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6934488909019.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0202",cls_name:"护  肤",img:["6950079151285","6922200824627","6950079119636"],index:"202",lazy:[{src:"http://img.xmvogue.com/thumb/6950079151285.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6922200824627.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6950079119636.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0203",cls_name:"美妆工具",img:["6941196089292","6941196089339","6941196089360"],index:"203",lazy:[{src:"http://img.xmvogue.com/thumb/6941196089292.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196089339.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196089360.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0204",cls_name:"季节产品",img:["6941924324176","6922200852422","6936217741976"],index:"204",lazy:[{src:"http://img.xmvogue.com/thumb/6941924324176.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6922200852422.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6936217741976.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}]},{cls_id:"03",cls_name:"饰品系列",child:{301:{cls_id:"0301",cls_name:"发夹",img:["6941595110504","6941595109638","6941595110511"],index:"301",lazy:[{src:"http://img.xmvogue.com/thumb/6941595110504.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595109638.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110511.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},302:{cls_id:"0302",cls_name:"发圈",img:["6941196088615","6941595103711","6941595109560"],index:"302",lazy:[{src:"http://img.xmvogue.com/thumb/6941196088615.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595103711.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595109560.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},303:{cls_id:"0303",cls_name:"发箍",img:["6941196064657","6941595105074","6941595110528"],index:"303",lazy:[{src:"http://img.xmvogue.com/thumb/6941196064657.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595105074.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110528.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},304:{cls_id:"0304",cls_name:"首饰",img:["6941196096689","6941595106002","6941595107344"],index:"304",lazy:[{src:"http://img.xmvogue.com/thumb/6941196096689.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595106002.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595107344.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},305:{cls_id:"0305",cls_name:"10任选",img:["6941196087434","6941595103742","6941595113642"],index:"305",lazy:[{src:"http://img.xmvogue.com/thumb/6941196087434.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595103742.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595113642.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},306:{cls_id:"0306",cls_name:"儿童头饰",img:["6941196089575","6941196089599","6941196089605"],index:"306",lazy:[{src:"http://img.xmvogue.com/thumb/6941196089575.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196089599.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196089605.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},307:{cls_id:"0307",cls_name:"服装类",img:["6939010811259","6970893330413","6939010800789"],index:"307",lazy:[{src:"http://img.xmvogue.com/thumb/6939010811259.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893330413.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939010800789.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},308:{cls_id:"0308",cls_name:"季节产品",img:["6939837600661","6970574423465","6970574421492"],index:"308",lazy:[{src:"http://img.xmvogue.com/thumb/6939837600661.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574423465.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574421492.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},309:{cls_id:"0309",cls_name:"网红爆款区",img:null,index:"309",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]}},foods:[{cls_id:"0301",cls_name:"发夹",img:["6941595110504","6941595109638","6941595110511"],index:"301",lazy:[{src:"http://img.xmvogue.com/thumb/6941595110504.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595109638.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110511.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0302",cls_name:"发圈",img:["6941196088615","6941595103711","6941595109560"],index:"302",lazy:[{src:"http://img.xmvogue.com/thumb/6941196088615.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595103711.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595109560.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0303",cls_name:"发箍",img:["6941196064657","6941595105074","6941595110528"],index:"303",lazy:[{src:"http://img.xmvogue.com/thumb/6941196064657.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595105074.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110528.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0304",cls_name:"首饰",img:["6941196096689","6941595106002","6941595107344"],index:"304",lazy:[{src:"http://img.xmvogue.com/thumb/6941196096689.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595106002.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595107344.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0305",cls_name:"10任选",img:["6941196087434","6941595103742","6941595113642"],index:"305",lazy:[{src:"http://img.xmvogue.com/thumb/6941196087434.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595103742.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595113642.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0306",cls_name:"儿童头饰",img:["6941196089575","6941196089599","6941196089605"],index:"306",lazy:[{src:"http://img.xmvogue.com/thumb/6941196089575.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196089599.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196089605.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0307",cls_name:"服装类",img:["6939010811259","6970893330413","6939010800789"],index:"307",lazy:[{src:"http://img.xmvogue.com/thumb/6939010811259.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893330413.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939010800789.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0308",cls_name:"季节产品",img:["6939837600661","6970574423465","6970574421492"],index:"308",lazy:[{src:"http://img.xmvogue.com/thumb/6939837600661.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574423465.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574421492.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0309",cls_name:"网红爆款区",img:null,index:"309",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]}]},{cls_id:"04",cls_name:"文体礼品",child:{401:{cls_id:"0401",cls_name:"文具",img:["6941595106361","6941595106385","6941595106415"],index:"401",lazy:[{src:"http://img.xmvogue.com/thumb/6941595106361.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595106385.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595106415.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},402:{cls_id:"0402",cls_name:"钟表",img:["6939837628016","6941196042013","6939837643552"],index:"402",lazy:[{src:"http://img.xmvogue.com/thumb/6939837628016.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196042013.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837643552.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},403:{cls_id:"0403",cls_name:"体育用品",img:["6939837635748","6939837601231","6939837624483"],index:"403",lazy:[{src:"http://img.xmvogue.com/thumb/6939837635748.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837601231.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837624483.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},404:{cls_id:"0404",cls_name:"办公学习",img:["6941595106453","6970574422390","6970574420891"],index:"404",lazy:[{src:"http://img.xmvogue.com/thumb/6941595106453.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574422390.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574420891.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},405:{cls_id:"0405",cls_name:"益智早教",img:["6941595114489","6941196084334","6941595114465"],index:"405",lazy:[{src:"http://img.xmvogue.com/thumb/6941595114489.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196084334.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595114465.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},406:{cls_id:"0406",cls_name:"礼品包装",img:["6941595110795","6941595110788","6941595110764"],index:"406",lazy:[{src:"http://img.xmvogue.com/thumb/6941595110795.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110788.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110764.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}},foods:[{cls_id:"0401",cls_name:"文具",img:["6941595106361","6941595106385","6941595106415"],index:"401",lazy:[{src:"http://img.xmvogue.com/thumb/6941595106361.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595106385.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595106415.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0402",cls_name:"钟表",img:["6939837628016","6941196042013","6939837643552"],index:"402",lazy:[{src:"http://img.xmvogue.com/thumb/6939837628016.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196042013.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837643552.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0403",cls_name:"体育用品",img:["6939837635748","6939837601231","6939837624483"],index:"403",lazy:[{src:"http://img.xmvogue.com/thumb/6939837635748.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837601231.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837624483.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0404",cls_name:"办公学习",img:["6941595106453","6970574422390","6970574420891"],index:"404",lazy:[{src:"http://img.xmvogue.com/thumb/6941595106453.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574422390.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574420891.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0405",cls_name:"益智早教",img:["6941595114489","6941196084334","6941595114465"],index:"405",lazy:[{src:"http://img.xmvogue.com/thumb/6941595114489.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196084334.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595114465.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0406",cls_name:"礼品包装",img:["6941595110795","6941595110788","6941595110764"],index:"406",lazy:[{src:"http://img.xmvogue.com/thumb/6941595110795.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110788.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110764.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}]},{cls_id:"05",cls_name:"季节潮品",child:{501:{cls_id:"0501",cls_name:"伞类",img:["6939837628443","6970893337870","6939837612190"],index:"501",lazy:[{src:"http://img.xmvogue.com/thumb/6939837628443.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893337870.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837612190.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},502:{cls_id:"0502",cls_name:"鞋类",img:["6939837633874","6939837633720","6970893338006"],index:"502",lazy:[{src:"http://img.xmvogue.com/thumb/6939837633874.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837633720.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893338006.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},503:{cls_id:"0503",cls_name:"内衣",img:["6939837608131","6939837628863","6970893338167"],index:"503",lazy:[{src:"http://img.xmvogue.com/thumb/6939837608131.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837628863.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893338167.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},504:{cls_id:"0504",cls_name:"皮带",img:["6941595108884","6941595108907","6941595108914"],index:"504",lazy:[{src:"http://img.xmvogue.com/thumb/6941595108884.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595108907.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595108914.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},505:{cls_id:"0505",cls_name:"功能产品",img:["6939837675645","6941595120466","6941595111723"],index:"505",lazy:[{src:"http://img.xmvogue.com/thumb/6939837675645.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595120466.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595111723.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},506:{cls_id:"0506",cls_name:"游泳产品",img:["6939010800536","6939010801724","6939010800543"],index:"506",lazy:[{src:"http://img.xmvogue.com/thumb/6939010800536.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939010801724.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939010800543.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},507:{cls_id:"0507",cls_name:"帽子",img:["6941595110252","6941595110269","6941595110283"],index:"507",lazy:[{src:"http://img.xmvogue.com/thumb/6941595110252.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110269.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110283.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},508:{cls_id:"0508",cls_name:"眼镜",img:["6939837641794","6970574428415","52000206"],index:"508",lazy:[{src:"http://img.xmvogue.com/thumb/6939837641794.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574428415.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/52000206.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},509:{cls_id:"0509",cls_name:"手套",img:["6939837675690","6939837675706","6939837622151"],index:"509",lazy:[{src:"http://img.xmvogue.com/thumb/6939837675690.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837675706.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837622151.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},510:{cls_id:"0510",cls_name:"袜子",img:["6941196092698","6941196092728","6939837629778"],index:"510",lazy:[{src:"http://img.xmvogue.com/thumb/6941196092698.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196092728.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837629778.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},511:{cls_id:"0511",cls_name:"围巾",img:["6941196060796","6941196060802","6941196070597"],index:"511",lazy:[{src:"http://img.xmvogue.com/thumb/6941196060796.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196060802.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196070597.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}},foods:[{cls_id:"0501",cls_name:"伞类",img:["6939837628443","6970893337870","6939837612190"],index:"501",lazy:[{src:"http://img.xmvogue.com/thumb/6939837628443.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893337870.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837612190.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0502",cls_name:"鞋类",img:["6939837633874","6939837633720","6970893338006"],index:"502",lazy:[{src:"http://img.xmvogue.com/thumb/6939837633874.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837633720.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893338006.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0503",cls_name:"内衣",img:["6939837608131","6939837628863","6970893338167"],index:"503",lazy:[{src:"http://img.xmvogue.com/thumb/6939837608131.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837628863.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893338167.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0504",cls_name:"皮带",img:["6941595108884","6941595108907","6941595108914"],index:"504",lazy:[{src:"http://img.xmvogue.com/thumb/6941595108884.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595108907.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595108914.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0505",cls_name:"功能产品",img:["6939837675645","6941595120466","6941595111723"],index:"505",lazy:[{src:"http://img.xmvogue.com/thumb/6939837675645.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595120466.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595111723.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0506",cls_name:"游泳产品",img:["6939010800536","6939010801724","6939010800543"],index:"506",lazy:[{src:"http://img.xmvogue.com/thumb/6939010800536.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939010801724.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939010800543.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0507",cls_name:"帽子",img:["6941595110252","6941595110269","6941595110283"],index:"507",lazy:[{src:"http://img.xmvogue.com/thumb/6941595110252.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110269.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595110283.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0508",cls_name:"眼镜",img:["6939837641794","6970574428415","52000206"],index:"508",lazy:[{src:"http://img.xmvogue.com/thumb/6939837641794.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574428415.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/52000206.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0509",cls_name:"手套",img:["6939837675690","6939837675706","6939837622151"],index:"509",lazy:[{src:"http://img.xmvogue.com/thumb/6939837675690.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837675706.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837622151.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0510",cls_name:"袜子",img:["6941196092698","6941196092728","6939837629778"],index:"510",lazy:[{src:"http://img.xmvogue.com/thumb/6941196092698.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196092728.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837629778.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0511",cls_name:"围巾",img:["6941196060796","6941196060802","6941196070597"],index:"511",lazy:[{src:"http://img.xmvogue.com/thumb/6941196060796.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196060802.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196070597.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}]},{cls_id:"06",cls_name:"精品包饰",child:{601:{cls_id:"0601",cls_name:"时尚包",img:["6941196094463","6941595105661","6939837632518"],index:"601",lazy:[{src:"http://img.xmvogue.com/thumb/6941196094463.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595105661.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837632518.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},602:{cls_id:"0602",cls_name:"双肩包",img:["6939837630408","6939837619342","6970893336835"],index:"602",lazy:[{src:"http://img.xmvogue.com/thumb/6939837630408.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837619342.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893336835.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},603:{cls_id:"0603",cls_name:"钱包",img:["6941595108990","6939837619816","6941595101885"],index:"603",lazy:[{src:"http://img.xmvogue.com/thumb/6941595108990.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837619816.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595101885.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},604:{cls_id:"0604",cls_name:"随意小包",img:["6970893336675","6939837635229","61000346"],index:"604",lazy:[{src:"http://img.xmvogue.com/thumb/6970893336675.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837635229.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/61000346.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},605:{cls_id:"0605",cls_name:"配饰",img:["6939837609480","6939837632761","6939837604393"],index:"605",lazy:[{src:"http://img.xmvogue.com/thumb/6939837609480.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837632761.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837604393.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},606:{cls_id:"0606",cls_name:"行李箱",img:["6939837640421","6939837637773","6939837630033"],index:"606",lazy:[{src:"http://img.xmvogue.com/thumb/6939837640421.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837637773.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837630033.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},607:{cls_id:"0607",cls_name:"功能大包",img:["6939837636240","6939837635557","6939837630071"],index:"607",lazy:[{src:"http://img.xmvogue.com/thumb/6939837636240.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837635557.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837630071.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},614:{cls_id:"0614",cls_name:"儿童包包",img:["6941595101649","6939837620027","6941595101656"],index:"614",lazy:[{src:"http://img.xmvogue.com/thumb/6941595101649.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837620027.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595101656.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}},foods:[{cls_id:"0601",cls_name:"时尚包",img:["6941196094463","6941595105661","6939837632518"],index:"601",lazy:[{src:"http://img.xmvogue.com/thumb/6941196094463.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595105661.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837632518.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0602",cls_name:"双肩包",img:["6939837630408","6939837619342","6970893336835"],index:"602",lazy:[{src:"http://img.xmvogue.com/thumb/6939837630408.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837619342.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970893336835.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0603",cls_name:"钱包",img:["6941595108990","6939837619816","6941595101885"],index:"603",lazy:[{src:"http://img.xmvogue.com/thumb/6941595108990.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837619816.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595101885.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0604",cls_name:"随意小包",img:["6970893336675","6939837635229","61000346"],index:"604",lazy:[{src:"http://img.xmvogue.com/thumb/6970893336675.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837635229.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/61000346.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0605",cls_name:"配饰",img:["6939837609480","6939837632761","6939837604393"],index:"605",lazy:[{src:"http://img.xmvogue.com/thumb/6939837609480.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837632761.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837604393.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0606",cls_name:"行李箱",img:["6939837640421","6939837637773","6939837630033"],index:"606",lazy:[{src:"http://img.xmvogue.com/thumb/6939837640421.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837637773.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837630033.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0607",cls_name:"功能大包",img:["6939837636240","6939837635557","6939837630071"],index:"607",lazy:[{src:"http://img.xmvogue.com/thumb/6939837636240.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837635557.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837630071.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0614",cls_name:"儿童包包",img:["6941595101649","6939837620027","6941595101656"],index:"614",lazy:[{src:"http://img.xmvogue.com/thumb/6941595101649.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837620027.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595101656.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}]},{cls_id:"07",cls_name:"儿童玩具",child:{704:{cls_id:"0704",cls_name:"模型玩具",img:["6970707190684","6970707190899","6970707190929"],index:"704",lazy:[{src:"http://img.xmvogue.com/thumb/6970707190684.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970707190899.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970707190929.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},705:{cls_id:"0705",cls_name:"拼图积木",img:["6971619010138","6971619010145","6932691995423"],index:"705",lazy:[{src:"http://img.xmvogue.com/thumb/6971619010138.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6971619010145.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6932691995423.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},706:{cls_id:"0706",cls_name:"益智玩具",img:["6952516803726","6952516803078","6970574421683"],index:"706",lazy:[{src:"http://img.xmvogue.com/thumb/6952516803726.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6952516803078.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574421683.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},707:{cls_id:"0707",cls_name:"季节产品",img:["6926205600774","6924270302678","6947806402635"],index:"707",lazy:[{src:"http://img.xmvogue.com/thumb/6926205600774.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6924270302678.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6947806402635.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},708:{cls_id:"0708",cls_name:"潮流玩具",img:["6970643770070","6946904786616","6946904780423"],index:"708",lazy:[{src:"http://img.xmvogue.com/thumb/6970643770070.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6946904786616.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6946904780423.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}},foods:[{cls_id:"0704",cls_name:"模型玩具",img:["6970707190684","6970707190899","6970707190929"],index:"704",lazy:[{src:"http://img.xmvogue.com/thumb/6970707190684.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970707190899.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970707190929.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0705",cls_name:"拼图积木",img:["6971619010138","6971619010145","6932691995423"],index:"705",lazy:[{src:"http://img.xmvogue.com/thumb/6971619010138.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6971619010145.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6932691995423.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0706",cls_name:"益智玩具",img:["6952516803726","6952516803078","6970574421683"],index:"706",lazy:[{src:"http://img.xmvogue.com/thumb/6952516803726.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6952516803078.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574421683.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0707",cls_name:"季节产品",img:["6926205600774","6924270302678","6947806402635"],index:"707",lazy:[{src:"http://img.xmvogue.com/thumb/6926205600774.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6924270302678.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6947806402635.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0708",cls_name:"潮流玩具",img:["6970643770070","6946904786616","6946904780423"],index:"708",lazy:[{src:"http://img.xmvogue.com/thumb/6970643770070.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6946904786616.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6946904780423.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}]},{cls_id:"08",cls_name:"毛绒公仔",child:{801:{cls_id:"0801",cls_name:"小号公仔",img:["6941196092216","6939837607868","6939837607912"],index:"801",lazy:[{src:"http://img.xmvogue.com/thumb/6941196092216.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837607868.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837607912.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},802:{cls_id:"0802",cls_name:"中号公仔",img:["6941196081067","6941595109881","6941595109898"],index:"802",lazy:[{src:"http://img.xmvogue.com/thumb/6941196081067.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595109881.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},803:{cls_id:"0803",cls_name:"大号公仔",img:["6941196068327","6941196085652","6941196086741"],index:"803",lazy:[{src:"http://img.xmvogue.com/thumb/6941196068327.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196085652.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196086741.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},809:{cls_id:"0809",cls_name:"版权公仔",img:["6941595109898","6941196064633","6941196056843"],index:"809",lazy:[{src:"http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196064633.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196056843.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}},foods:[{cls_id:"0801",cls_name:"小号公仔",img:["6941196092216","6939837607868","6939837607912"],index:"801",lazy:[{src:"http://img.xmvogue.com/thumb/6941196092216.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837607868.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837607912.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0802",cls_name:"中号公仔",img:["6941196081067","6941595109881","6941595109898"],index:"802",lazy:[{src:"http://img.xmvogue.com/thumb/6941196081067.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595109881.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0803",cls_name:"大号公仔",img:["6941196068327","6941196085652","6941196086741"],index:"803",lazy:[{src:"http://img.xmvogue.com/thumb/6941196068327.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196085652.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196086741.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0809",cls_name:"版权公仔",img:["6941595109898","6941196064633","6941196056843"],index:"809",lazy:[{src:"http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196064633.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196056843.jpg?x-oss-process=style/80",show:!1,loaded:!1}]}]},{cls_id:"09",cls_name:"数码配件",child:{901:{cls_id:"0901",cls_name:"手机配件",img:["6941196078913","6941595119309","6941595119323"],index:"901",lazy:[{src:"http://img.xmvogue.com/thumb/6941196078913.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595119309.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595119323.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},902:{cls_id:"0902",cls_name:"充电设备",img:["6941196099376","6941595103148","6941595102950"],index:"902",lazy:[{src:"http://img.xmvogue.com/thumb/6941196099376.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595103148.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595102950.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},903:{cls_id:"0903",cls_name:"影音娱乐",img:["6939837610288","6941196072133","6939837631269"],index:"903",lazy:[{src:"http://img.xmvogue.com/thumb/6939837610288.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196072133.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837631269.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},904:{cls_id:"0904",cls_name:"灯具",img:["6939837610271","6970574420389","6939837612763"],index:"904",lazy:[{src:"http://img.xmvogue.com/thumb/6939837610271.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574420389.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837612763.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},905:{cls_id:"0905",cls_name:"家用电器",img:["6970574429511","6970574425353","6970574421843"],index:"905",lazy:[{src:"http://img.xmvogue.com/thumb/6970574429511.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574425353.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574421843.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},906:{cls_id:"0906",cls_name:"电脑外设",img:["6970574423809","16000573","6939837605819"],index:"906",lazy:[{src:"http://img.xmvogue.com/thumb/6970574423809.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/16000573.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837605819.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},907:{cls_id:"0907",cls_name:"季节产品",img:["6941196063889","6941196083535","6941196077978"],index:"907",lazy:[{src:"http://img.xmvogue.com/thumb/6941196063889.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196083535.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196077978.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},908:{cls_id:"0908",cls_name:"移动电源",img:null,index:"908",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]}},foods:[{cls_id:"0901",cls_name:"手机配件",img:["6941196078913","6941595119309","6941595119323"],index:"901",lazy:[{src:"http://img.xmvogue.com/thumb/6941196078913.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595119309.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595119323.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0902",cls_name:"充电设备",img:["6941196099376","6941595103148","6941595102950"],index:"902",lazy:[{src:"http://img.xmvogue.com/thumb/6941196099376.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595103148.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941595102950.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0903",cls_name:"影音娱乐",img:["6939837610288","6941196072133","6939837631269"],index:"903",lazy:[{src:"http://img.xmvogue.com/thumb/6939837610288.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196072133.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837631269.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0904",cls_name:"灯具",img:["6939837610271","6970574420389","6939837612763"],index:"904",lazy:[{src:"http://img.xmvogue.com/thumb/6939837610271.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574420389.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837612763.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0905",cls_name:"家用电器",img:["6970574429511","6970574425353","6970574421843"],index:"905",lazy:[{src:"http://img.xmvogue.com/thumb/6970574429511.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574425353.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6970574421843.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0906",cls_name:"电脑外设",img:["6970574423809","16000573","6939837605819"],index:"906",lazy:[{src:"http://img.xmvogue.com/thumb/6970574423809.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/16000573.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6939837605819.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0907",cls_name:"季节产品",img:["6941196063889","6941196083535","6941196077978"],index:"907",lazy:[{src:"http://img.xmvogue.com/thumb/6941196063889.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196083535.jpg?x-oss-process=style/80",show:!1,loaded:!1},{src:"http://img.xmvogue.com/thumb/6941196077978.jpg?x-oss-process=style/80",show:!1,loaded:!1}]},{cls_id:"0908",cls_name:"移动电源",img:null,index:"908",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]}]},{cls_id:"10",cls_name:"休闲食品",child:{100101:{cls_id:"100101",cls_name:"糖果",img:null,index:"100101",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},100102:{cls_id:"100102",cls_name:"炒货",img:null,index:"100102",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},100103:{cls_id:"100103",cls_name:"坚果",img:null,index:"100103",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},100104:{cls_id:"100104",cls_name:"饼干",img:null,index:"100104",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},100105:{cls_id:"100105",cls_name:"膨化",img:null,index:"100105",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},100106:{cls_id:"100106",cls_name:"蜜饯果脯",img:null,index:"100106",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},100107:{cls_id:"100107",cls_name:"肉脯",img:null,index:"100107",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},100108:{cls_id:"100108",cls_name:"饮料",img:null,index:"100108",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},100109:{cls_id:"100109",cls_name:"其它",img:null,index:"100109",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]}},foods:[{cls_id:"100101",cls_name:"糖果",img:null,index:"100101",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"100102",cls_name:"炒货",img:null,index:"100102",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"100103",cls_name:"坚果",img:null,index:"100103",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"100104",cls_name:"饼干",img:null,index:"100104",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"100105",cls_name:"膨化",img:null,index:"100105",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"100106",cls_name:"蜜饯果脯",img:null,index:"100106",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"100107",cls_name:"肉脯",img:null,index:"100107",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"100108",cls_name:"饮料",img:null,index:"100108",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"100109",cls_name:"其它",img:null,index:"100109",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]}]},{cls_id:"14",cls_name:"物料耗材",foods:[{cls_id:"14",cls_name:"物料耗材",index:"14",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"14",cls_name:"物料耗材",index:"14",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]},{cls_id:"14",cls_name:"物料耗材",index:"14",lazy:[{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1},{src:"http://dh.xmcpcn.com/Public/images/none.jpg",show:!0,loaded:!1}]}]}],d={carouselList:n,cartList:r,detailData:a,lazyLoadList:l,userInfo:o,shareList:c,goodsList:s,orderList:u,cateList:p,cateData:h};e.default=d},c8ba:function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(o){"object"===typeof window&&(i=window)}t.exports=i},d471:function(t,e,i){},df7c:function(t,e,i){(function(t){function i(t,e){for(var i=0,o=t.length-1;o>=0;o--){var n=t[o];"."===n?t.splice(o,1):".."===n?(t.splice(o,1),i++):i&&(t.splice(o,1),i--)}if(e)for(;i--;i)t.unshift("..");return t}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(t){return o.exec(t).slice(1)};function s(t,e){if(t.filter)return t.filter(e);for(var i=[],o=0;o<t.length;o++)e(t[o],o,t)&&i.push(t[o]);return i}e.resolve=function(){for(var e="",o=!1,n=arguments.length-1;n>=-1&&!o;n--){var r=n>=0?arguments[n]:t.cwd();if("string"!==typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(e=r+"/"+e,o="/"===r.charAt(0))}return e=i(s(e.split("/"),function(t){return!!t}),!o).join("/"),(o?"/":"")+e||"."},e.normalize=function(t){var o=e.isAbsolute(t),n="/"===r(t,-1);return t=i(s(t.split("/"),function(t){return!!t}),!o).join("/"),t||o||(t="."),t&&n&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,i){function o(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var i=t.length-1;i>=0;i--)if(""!==t[i])break;return e>i?[]:t.slice(e,i-e+1)}t=e.resolve(t).substr(1),i=e.resolve(i).substr(1);for(var n=o(t.split("/")),s=o(i.split("/")),r=Math.min(n.length,s.length),a=r,c=0;c<r;c++)if(n[c]!==s[c]){a=c;break}var l=[];for(c=a;c<n.length;c++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=n(t),i=e[0],o=e[1];return i||o?(o&&(o=o.substr(0,o.length-1)),i+o):"."},e.basename=function(t,e){var i=n(t)[2];return e&&i.substr(-1*e.length)===e&&(i=i.substr(0,i.length-e.length)),i},e.extname=function(t){return n(t)[3]};var r="b"==="ab".substr(-1)?function(t,e,i){return t.substr(e,i)}:function(t,e,i){return e<0&&(e=t.length+e),t.substr(e,i)}}).call(this,i("4362"))},f99e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={pages:{"pages/index/index":{navigationBarTitleText:"首页",titleNView:{type:"transparent",searchInput:{backgroundColor:"rgba(231, 231, 231,.7)",borderRadius:"16px",placeholder:"请输入搜索关键词...",disabled:!0,placeholderColor:"#606266"},buttons:[{fontSrc:"/static/yticon.ttf",text:"",fontSize:"26",color:"#303133",float:"left",background:"rgba(0,0,0,0)"}]}},"pages/product/product":{navigationBarTitleText:"详情展示",titleNView:{type:"transparent"}},"pages/set/set":{navigationBarTitleText:"设置"},"pages/cart/cart":{navigationBarTitleText:"购物车",navigationStyle:"custom"},"pages/user/user":{navigationStyle:"custom",navigationBarTitleText:"我的",bounce:"none",titleNView:{type:"transparent",buttons:[{fontSrc:"/static/yticon.ttf",text:"",fontSize:"24",color:"#303133",width:"46px",background:"rgba(0,0,0,0)"}]}},"pages/login/login":{navigationBarTitleText:"",navigationStyle:"custom",titleNView:!1,animationType:"slide-in-bottom"},"pages/order/order":{enablePullDownRefresh:!0,navigationBarTextStyle:"black",navigationBarTitleText:"我的订单",bounce:"none"},"pages/address/address":{navigationBarTextStyle:"black",navigationBarTitleText:"收货地址"},"pages/oreder-detail/oreder-detail":{navigationBarTextStyle:"black",navigationBarTitleText:"订单详情"},"pages/repertory/repertory":{navigationBarTextStyle:"black",navigationBarTitleText:"库存查询"},"pages/sale/sale":{navigationBarTextStyle:"black",navigationBarTitleText:"我的售后"},"pages/technology/technology":{navigationBarTextStyle:"black",navigationBarTitleText:"技术支持"},"pages/category/leftCategory":{navigationBarTitleText:"分类",navigationBarTextStyle:"black"},"pages/product/list":{enablePullDownRefresh:!0,navigationBarTitleText:"商品列表",titleNView:!1},"pages/search/search":{navigationStyle:"custom",navigationBarTitleText:"搜索",enablePullDownRefresh:!0},"pages/market/market":{navigationBarTextStyle:"black",navigationBarTitleText:"我的销售"},"pages/sale-detail/sale-detail":{navigationBarTextStyle:"black",navigationBarTitleText:"售后详情"},"pages/sale-add/sale-add":{navigationBarTextStyle:"black",navigationBarTitleText:"申报产品"},"pages/logistics-add/logistics-add":{navigationBarTextStyle:"black",navigationBarTitleText:"申请寄回"},"pages/logistics-list/logistics-list":{navigationBarTextStyle:"black",navigationBarTitleText:"寄回产品"},"pages/logistics-detail/logistics-detail":{navigationBarTextStyle:"black",navigationBarTitleText:"寄回详情"},"pages/collect/collect":{navigationBarTextStyle:"black",navigationBarTitleText:"我的收藏"},"pages/update/update":{navigationBarTitleText:"系统更新",navigationStyle:"custom"},"pages/webview/webview":{navigationBarTitleText:"活动"},"pages/discounts/discounts":{navigationBarTextStyle:"black",navigationBarTitleText:"代金券"},"pages/Article/Article":{navigationStyle:"custom"},"pages/market-detail/market-detail":{},"pages/order-hddata/order-hddata":{},"pages/seckill/seckill":{enablePullDownRefresh:!0,navigationBarTitleText:"限时秒杀",titleNView:!1}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"熙美诚品",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#f8f8f8"}};e.default=o}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/empty';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/empty.js';

define('components/empty.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/empty"], {
  "09da": function da(A, e, B) {},
  "718c": function c(A, e, B) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var g = {
      data: function data() {
        return {
          typeSrc: {
            empty: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAACtCAYAAAANgcuAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk5MjI3NjM1NUJGMTFFOThGRTZGQUIxMjY1ODk1QTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk5MjI3NjQ1NUJGMTFFOThGRTZGQUIxMjY1ODk1QTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTkyMjc2MTU1QkYxMUU5OEZFNkZBQjEyNjU4OTVBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTkyMjc2MjU1QkYxMUU5OEZFNkZBQjEyNjU4OTVBOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvBPHdgAAEY/SURBVHja7H3bkiTH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"
          },
          text: this.$t("index").contentnomore
        };
      },
      props: {
        src: {
          type: String,
          default: "empty"
        }
      },
      computed: {
        setSrc: function setSrc() {
          return this.typeSrc[this.src];
        }
      }
    };
    e.default = g;
  },
  aea4: function aea4(A, e, B) {
    "use strict";

    B.r(e);
    var g = B("eb4f"),
        w = B("def6");

    for (var R in w) {
      "default" !== R && function (A) {
        B.d(e, A, function () {
          return w[A];
        });
      }(R);
    }

    B("d830");
    var o = B("2877"),
        a = Object(o["a"])(w["default"], g["a"], g["b"], !1, null, null, null);
    e["default"] = a.exports;
  },
  d830: function d830(A, e, B) {
    "use strict";

    var g = B("09da"),
        w = B.n(g);
    w.a;
  },
  def6: function def6(A, e, B) {
    "use strict";

    B.r(e);
    var g = B("718c"),
        w = B.n(g);

    for (var R in g) {
      "default" !== R && function (A) {
        B.d(e, A, function () {
          return g[A];
        });
      }(R);
    }

    e["default"] = w.a;
  },
  eb4f: function eb4f(A, e, B) {
    "use strict";

    var g = function g() {
      var A = this,
          e = A.$createElement;
      A._self._c;
    },
        w = [];

    B.d(e, "a", function () {
      return g;
    }), B.d(e, "b", function () {
      return w;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/empty-create-component', {
  'components/empty-create-component': function componentsEmptyCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("aea4"));
  }
}, [['components/empty-create-component']]]);
});
require('components/empty.js');
__wxRoute = 'components/img-lazy/img-lazy';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/img-lazy/img-lazy.js';

define('components/img-lazy/img-lazy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/img-lazy/img-lazy"], {
  "4a3d": function a3d(A, I, C) {
    "use strict";

    var g = function g() {
      var A = this,
          I = A.$createElement;
      A._self._c;
    },
        E = [];

    C.d(I, "a", function () {
      return g;
    }), C.d(I, "b", function () {
      return E;
    });
  },
  "530d": function d(A, I, C) {
    "use strict";

    C.r(I);
    var g = C("dd30"),
        E = C.n(g);

    for (var M in g) {
      "default" !== M && function (A) {
        C.d(I, A, function () {
          return g[A];
        });
      }(M);
    }

    I["default"] = E.a;
  },
  "98e1": function e1(A, I, C) {
    "use strict";

    var g = C("a79d"),
        E = C.n(g);
    E.a;
  },
  a79d: function a79d(A, I, C) {},
  b066: function b066(A, I, C) {
    "use strict";

    C.r(I);
    var g = C("4a3d"),
        E = C("530d");

    for (var M in E) {
      "default" !== M && function (A) {
        C.d(I, A, function () {
          return E[A];
        });
      }(M);
    }

    C("98e1");
    var B = C("2877"),
        q = Object(B["a"])(E["default"], g["a"], g["b"], !1, null, null, null);
    I["default"] = q.exports;
  },
  dd30: function dd30(A, I, C) {
    "use strict";

    Object.defineProperty(I, "__esModule", {
      value: !0
    }), I.default = void 0;
    var g = {
      name: "imglazy",
      data: function data() {
        return {
          status: !1,
          error: "http://dh.xmcpcn.com/Public/images/none.jpg"
        };
      },
      props: {
        url: {
          type: String,
          default: "data:image/gif;base64,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"
        },
        sty: {
          type: String
        }
      },
      methods: {
        imageError: function imageError(A) {
          this.status = !0;
        }
      }
    };
    I.default = g;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/img-lazy/img-lazy-create-component', {
  'components/img-lazy/img-lazy-create-component': function componentsImgLazyImgLazyCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b066"));
  }
}, [['components/img-lazy/img-lazy-create-component']]]);
});
require('components/img-lazy/img-lazy.js');
__wxRoute = 'components/mix-list-cell';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-list-cell.js';

define('components/mix-list-cell.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-list-cell"], {
  1240: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("fa76"),
        u = e("4573");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("92ad");
    var r = e("2877"),
        o = Object(r["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  4573: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("a489"),
        u = e.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  "5cc2": function cc2(t, n, e) {},
  "92ad": function ad(t, n, e) {
    "use strict";

    var i = e("5cc2"),
        u = e.n(i);
    u.a;
  },
  a489: function a489(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = {
      data: function data() {
        return {
          typeList: {
            left: "icon-zuo",
            right: "icon-you",
            up: "icon-shang",
            down: "icon-xia"
          }
        };
      },
      props: {
        icon: {
          type: String,
          default: ""
        },
        title: {
          type: String,
          default: "标题"
        },
        tips: {
          type: String,
          default: ""
        },
        navigateType: {
          type: String,
          default: "right"
        },
        border: {
          type: String,
          default: "b-b"
        },
        hoverClass: {
          type: String,
          default: "cell-hover"
        },
        iconColor: {
          type: String,
          default: "#333"
        }
      },
      methods: {
        eventClick: function eventClick() {
          this.$emit("eventClick");
        }
      }
    };
    n.default = i;
  },
  fa76: function fa76(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-list-cell-create-component', {
  'components/mix-list-cell-create-component': function componentsMixListCellCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1240"));
  }
}, [['components/mix-list-cell-create-component']]]);
});
require('components/mix-list-cell.js');
__wxRoute = 'components/over';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/over.js';

define('components/over.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/over"], {
  "2b46": function b46(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("e90f"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    n["default"] = r.a;
  },
  "35b2": function b2(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("9203"),
        r = e("2b46");

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    var o = e("2877"),
        f = Object(o["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  9203: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  e90f: function e90f(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      data: function data() {
        return {
          text: this.$t("index").foot
        };
      }
    };
    n.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/over-create-component', {
  'components/over-create-component': function componentsOverCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("35b2"));
  }
}, [['components/over-create-component']]]);
});
require('components/over.js');
__wxRoute = 'components/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/share.js';

define('components/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/share"], {
  "0135": function _(t, n, r) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    r.d(n, "a", function () {
      return o;
    }), r.d(n, "b", function () {
      return a;
    });
  },
  "1d13": function d13(t, n, r) {
    "use strict";

    var o = r("4914"),
        a = r.n(o);
    a.a;
  },
  4914: function _(t, n, r) {},
  a85d: function a85d(t, n, r) {
    "use strict";

    r.r(n);
    var o = r("0135"),
        a = r("ef04");

    for (var e in a) {
      "default" !== e && function (t) {
        r.d(n, t, function () {
          return a[t];
        });
      }(e);
    }

    r("1d13");
    var i = r("2877"),
        s = Object(i["a"])(a["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = s.exports;
  },
  ef04: function ef04(t, n, r) {
    "use strict";

    r.r(n);
    var o = r("f9c7"),
        a = r.n(o);

    for (var e in o) {
      "default" !== e && function (t) {
        r.d(n, t, function () {
          return o[t];
        });
      }(e);
    }

    n["default"] = a.a;
  },
  f9c7: function f9c7(t, n, r) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var r = {
        data: function data() {
          return {
            transform: "translateY(50vh)",
            timer: 0,
            backgroundColor: "rgba(0,0,0,0)",
            show: !1,
            config: {}
          };
        },
        props: {
          contentHeight: {
            type: Number,
            default: 0
          },
          hasTabbar: {
            type: Boolean,
            default: !1
          },
          shareList: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        created: function created() {
          var n = t.upx2px(this.contentHeight) + "px";
          this.config = {
            height: n,
            transform: "translateY(".concat(n, ")"),
            backgroundColor: "rgba(0,0,0,.4)"
          }, this.transform = this.config.transform;
        },
        methods: {
          toggleMask: function toggleMask() {
            var n = this;

            if (1 != this.timer) {
              if (this.timer = 1, setTimeout(function () {
                n.timer = 0;
              }, 500), this.show) return this.transform = this.config.transform, this.backgroundColor = "rgba(0,0,0,0)", void setTimeout(function () {
                n.show = !1, n.hasTabbar && t.showTabBar();
              }, 200);
              this.show = !0, this.hasTabbar ? t.hideTabBar({
                success: function success() {
                  var t = this;
                  setTimeout(function () {
                    t.backgroundColor = t.config.backgroundColor, t.transform = "translateY(0px)";
                  }, 10);
                }
              }) : setTimeout(function () {
                n.backgroundColor = n.config.backgroundColor, n.transform = "translateY(0px)";
              }, 10);
            }
          },
          stopPrevent: function stopPrevent() {},
          shareToFriend: function shareToFriend(t) {
            this.$api.msg("分享给".concat(t)), this.toggleMask();
          }
        }
      };
      n.default = r;
    }).call(this, r("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/share-create-component', {
  'components/share-create-component': function componentsShareCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a85d"));
  }
}, [['components/share-create-component']]]);
});
require('components/share.js');
__wxRoute = 'components/uni-card/uni-card';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-card/uni-card.js';

define('components/uni-card/uni-card.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-card/uni-card"], {
  "339b": function b(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "uni-card",
      props: {
        title: String,
        extra: String,
        note: String,
        thumbnail: String,
        isFull: {
          type: [Boolean, String],
          default: !1
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  "409a": function a(n, t, e) {
    "use strict";

    var u = e("edad"),
        r = e.n(u);
    r.a;
  },
  6766: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return r;
    });
  },
  "904e": function e(n, t, _e) {
    "use strict";

    _e.r(t);

    var u = _e("339b"),
        r = _e.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        _e.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = r.a;
  },
  edad: function edad(n, t, e) {},
  ffce: function ffce(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("6766"),
        r = e("904e");

    for (var a in r) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    e("409a");
    var i = e("2877"),
        c = Object(i["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-card/uni-card-create-component', {
  'components/uni-card/uni-card-create-component': function componentsUniCardUniCardCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ffce"));
  }
}, [['components/uni-card/uni-card-create-component']]]);
});
require('components/uni-card/uni-card.js');
__wxRoute = 'components/uni-collapse-item/uni-collapse-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse-item/uni-collapse-item.js';

define('components/uni-collapse-item/uni-collapse-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse-item/uni-collapse-item"], {
  "0b78": function b78(e, t, n) {
    "use strict";

    var i = n("e711"),
        a = n.n(i);
    a.a;
  },
  "48bd": function bd(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("a3a7"),
        a = n("f483");

    for (var o in a) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(o);
    }

    n("0b78");
    var l = n("2877"),
        s = Object(l["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = s.exports;
  },
  a3a7: function a3a7(e, t, n) {
    "use strict";

    var i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return a;
    });
  },
  e711: function e711(e, t, n) {},
  f1b9: function f1b9(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var i = function i() {
        return n.e("components/uni-icon/uni-icon").then(n.bind(null, "8a7c"));
      },
          a = {
        name: "UniCollapseItem",
        components: {
          uniIcon: i
        },
        props: {
          title: {
            type: String,
            default: ""
          },
          center: {
            type: String,
            default: ""
          },
          name: {
            type: [Number, String],
            default: 0
          },
          disabled: {
            type: Boolean,
            default: !1
          },
          showAnimation: {
            type: Boolean,
            default: !1
          },
          open: {
            type: Boolean,
            default: !1
          },
          thumb: {
            type: String,
            default: ""
          }
        },
        data: function data() {
          var e = this.__call_hook ? "uni_collapse_item" : "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            isOpen: !1,
            height: "auto",
            elId: e
          };
        },
        watch: {
          open: function open(e) {
            this.isOpen = e;
          }
        },
        inject: ["collapse"],
        created: function created() {
          if (this.isOpen = this.open, this.nameSync = this.name ? this.name : this.collapse.childrens.length, this.collapse.childrens.push(this), this.collapse.accordion && this.isOpen) {
            var e = this.collapse.childrens[this.collapse.childrens.length - 2];
            e && (this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = !1);
          }
        },
        onReady: function onReady() {
          this.getSize();
        },
        methods: {
          getSize: function getSize() {
            var t = this;
            this.showAnimation && e.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (e) {
              t.height = e[0].height + "px";
            });
          },
          onClick: function onClick() {
            var e = this;
            this.disabled || (this.collapse.accordion && this.collapse.childrens.forEach(function (t) {
              t !== e && (t.isOpen = !1);
            }), this.isOpen = !this.isOpen, this.collapse.onChange && this.collapse.onChange());
          }
        }
      };

      t.default = a;
    }).call(this, n("6e42")["default"]);
  },
  f483: function f483(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("f1b9"),
        a = n.n(i);

    for (var o in i) {
      "default" !== o && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(o);
    }

    t["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse-item/uni-collapse-item-create-component', {
  'components/uni-collapse-item/uni-collapse-item-create-component': function componentsUniCollapseItemUniCollapseItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("48bd"));
  }
}, [['components/uni-collapse-item/uni-collapse-item-create-component']]]);
});
require('components/uni-collapse-item/uni-collapse-item.js');
__wxRoute = 'components/uni-collapse/uni-collapse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse/uni-collapse.js';

define('components/uni-collapse/uni-collapse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse/uni-collapse"], {
  "113c": function c(n, t, e) {},
  2072: function _(n, t, e) {
    "use strict";

    var c = e("113c"),
        a = e.n(c);
    a.a;
  },
  "7c40": function c40(n, t, e) {
    "use strict";

    var c = function c() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return c;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  b10a: function b10a(n, t, e) {
    "use strict";

    e.r(t);
    var c = e("7c40"),
        a = e("b96c");

    for (var u in a) {
      "default" !== u && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(u);
    }

    e("2072");
    var o = e("2877"),
        r = Object(o["a"])(a["default"], c["a"], c["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  b7a2: function b7a2(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var c = {
      name: "UniCollapse",
      props: {
        accordion: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {};
      },
      provide: function provide() {
        return {
          collapse: this
        };
      },
      created: function created() {
        this.childrens = [];
      },
      methods: {
        onChange: function onChange() {
          var n = [];
          this.childrens.forEach(function (t, e) {
            t.isOpen && n.push(t.nameSync);
          }), this.$emit("change", n);
        }
      }
    };
    t.default = c;
  },
  b96c: function b96c(n, t, e) {
    "use strict";

    e.r(t);
    var c = e("b7a2"),
        a = e.n(c);

    for (var u in c) {
      "default" !== u && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(u);
    }

    t["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse/uni-collapse-create-component', {
  'components/uni-collapse/uni-collapse-create-component': function componentsUniCollapseUniCollapseCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b10a"));
  }
}, [['components/uni-collapse/uni-collapse-create-component']]]);
});
require('components/uni-collapse/uni-collapse.js');
__wxRoute = 'components/uni-countdown/uni-countdown';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-countdown/uni-countdown.js';

define('components/uni-countdown/uni-countdown.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-countdown/uni-countdown"], {
  "304a": function a(t, e, n) {
    "use strict";

    var o = n("bd2b"),
        u = n.n(o);
    u.a;
  },
  8027: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("c5c8"),
        u = n("d02a");

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    n("304a");
    var i = n("2877"),
        a = Object(i["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = a.exports;
  },
  a722: function a722(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var o = {
      name: "UniCountdown",
      props: {
        showDay: {
          type: Boolean,
          default: !0
        },
        showColon: {
          type: Boolean,
          default: !0
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        borderColor: {
          type: String,
          default: "#000000"
        },
        color: {
          type: String,
          default: "#000000"
        },
        splitorColor: {
          type: String,
          default: "#000000"
        },
        day: {
          type: Number,
          default: 0
        },
        hour: {
          type: Number,
          default: 0
        },
        minute: {
          type: Number,
          default: 0
        },
        second: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {
          timer: null,
          d: "00",
          h: "00",
          i: "00",
          s: "00",
          leftTime: 0,
          seconds: 0
        };
      },
      created: function created(t) {
        var e = this;
        this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second), this.countDown(), this.timer = setInterval(function () {
          e.seconds--, e.seconds < 0 ? e.timeUp() : e.countDown();
        }, 1e3);
      },
      beforeDestroy: function beforeDestroy() {
        clearInterval(this.timer);
      },
      methods: {
        toSeconds: function toSeconds(t, e, n, o) {
          return 60 * t * 60 * 24 + 60 * e * 60 + 60 * n + o;
        },
        timeUp: function timeUp() {
          clearInterval(this.timer), this.$emit("timeup");
        },
        countDown: function countDown() {
          var t = this.seconds,
              e = 0,
              n = 0,
              o = 0,
              u = 0;
          t > 0 ? (e = Math.floor(t / 86400), n = Math.floor(t / 3600) - 24 * e, o = Math.floor(t / 60) - 24 * e * 60 - 60 * n, u = Math.floor(t) - 24 * e * 60 * 60 - 60 * n * 60 - 60 * o) : this.timeUp(), e < 10 && (e = "0" + e), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), u < 10 && (u = "0" + u), this.d = e, this.h = n, this.i = o, this.s = u;
        }
      }
    };
    e.default = o;
  },
  bd2b: function bd2b(t, e, n) {},
  c5c8: function c5c8(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  d02a: function d02a(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("a722"),
        u = n.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(r);
    }

    e["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-countdown/uni-countdown-create-component', {
  'components/uni-countdown/uni-countdown-create-component': function componentsUniCountdownUniCountdownCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8027"));
  }
}, [['components/uni-countdown/uni-countdown-create-component']]]);
});
require('components/uni-countdown/uni-countdown.js');
__wxRoute = 'components/uni-drawer/uni-drawer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-drawer/uni-drawer.js';

define('components/uni-drawer/uni-drawer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-drawer/uni-drawer"], {
  "44ed": function ed(e, t, i) {
    "use strict";

    i.r(t);
    var n = i("a989"),
        r = i("703d");

    for (var o in r) {
      "default" !== o && function (e) {
        i.d(t, e, function () {
          return r[e];
        });
      }(o);
    }

    i("dcac");
    var a = i("2877"),
        s = Object(a["a"])(r["default"], n["a"], n["b"], !1, null, null, null);
    t["default"] = s.exports;
  },
  "4e1e": function e1e(e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = {
      name: "UniDrawer",
      props: {
        visible: {
          type: Boolean,
          default: !1
        },
        mode: {
          type: String,
          default: ""
        },
        mask: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          visibleSync: !1,
          showDrawer: !1,
          rightMode: !1
        };
      },
      watch: {
        visible: function visible(e) {
          var t = this;
          clearTimeout(this.watchTimer), setTimeout(function () {
            t.showDrawer = e;
          }, 100), this.visibleSync && clearTimeout(this.closeTimer), e ? this.visibleSync = e : this.watchTimer = setTimeout(function () {
            t.visibleSync = e;
          }, 300);
        }
      },
      created: function created() {
        var e = this;
        this.visibleSync = this.visible, setTimeout(function () {
          e.showDrawer = e.visible;
        }, 100), this.rightMode = "right" === this.mode;
      },
      methods: {
        close: function close() {
          var e = this;
          this.showDrawer = !1, this.closeTimer = setTimeout(function () {
            e.visibleSync = !1, e.$emit("close");
          }, 200);
        },
        moveHandle: function moveHandle() {}
      }
    };
    t.default = n;
  },
  "703d": function d(e, t, i) {
    "use strict";

    i.r(t);
    var n = i("4e1e"),
        r = i.n(n);

    for (var o in n) {
      "default" !== o && function (e) {
        i.d(t, e, function () {
          return n[e];
        });
      }(o);
    }

    t["default"] = r.a;
  },
  a989: function a989(e, t, i) {
    "use strict";

    var n = function n() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    i.d(t, "a", function () {
      return n;
    }), i.d(t, "b", function () {
      return r;
    });
  },
  dcac: function dcac(e, t, i) {
    "use strict";

    var n = i("dce1"),
        r = i.n(n);
    r.a;
  },
  dce1: function dce1(e, t, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-drawer/uni-drawer-create-component', {
  'components/uni-drawer/uni-drawer-create-component': function componentsUniDrawerUniDrawerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("44ed"));
  }
}, [['components/uni-drawer/uni-drawer-create-component']]]);
});
require('components/uni-drawer/uni-drawer.js');
__wxRoute = 'components/uni-icon/uni-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icon/uni-icon.js';

define('components/uni-icon/uni-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icon/uni-icon"], {
  5954: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "uni-icon",
      props: {
        type: String,
        color: String,
        size: [Number, String]
      },
      computed: {
        fontSize: function fontSize() {
          return "".concat(this.size, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  "666e": function e(n, t, _e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    _e.d(t, "a", function () {
      return u;
    }), _e.d(t, "b", function () {
      return i;
    });
  },
  "859d": function d(n, t, e) {
    "use strict";

    var u = e("b7d3"),
        i = e.n(u);
    i.a;
  },
  "8a7c": function a7c(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("666e"),
        i = e("8ca0");

    for (var c in i) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(c);
    }

    e("859d");
    var o = e("2877"),
        r = Object(o["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  "8ca0": function ca0(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("5954"),
        i = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = i.a;
  },
  b7d3: function b7d3(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icon/uni-icon-create-component', {
  'components/uni-icon/uni-icon-create-component': function componentsUniIconUniIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8a7c"));
  }
}, [['components/uni-icon/uni-icon-create-component']]]);
});
require('components/uni-icon/uni-icon.js');
__wxRoute = 'components/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-load-more/uni-load-more.js';

define('components/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-load-more/uni-load-more"], {
  "06dc": function dc(t, n, e) {
    "use strict";

    var o = e("6bd8"),
        r = e.n(o);
    r.a;
  },
  "4cb9": function cb9(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("ada7"),
        r = e.n(o);

    for (var c in o) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(c);
    }

    n["default"] = r.a;
  },
  "6bd8": function bd8(t, n, e) {},
  "859f": function f(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  "926e": function e(t, n, _e) {
    "use strict";

    _e.r(n);

    var o = _e("859f"),
        r = _e("4cb9");

    for (var c in r) {
      "default" !== c && function (t) {
        _e.d(n, t, function () {
          return r[t];
        });
      }(c);
    }

    _e("06dc");

    var u = _e("2877"),
        a = Object(u["a"])(r["default"], o["a"], o["b"], !1, null, null, null);

    n["default"] = a.exports;
  },
  ada7: function ada7(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "uni-load-more",
      data: function data() {
        return {
          contentdown: "正在加载1...",
          contentrefresh: "正在加载...",
          contentnomore: "没有更多数据啦1"
        };
      },
      props: {
        status: {
          type: String,
          default: "more"
        },
        showIcon: {
          type: Boolean,
          default: !0
        },
        color: {
          type: String,
          default: "#777777"
        },
        contentText: {
          type: Object,
          default: function _default() {
            return {
              contentdown: "正在加载...",
              contentrefresh: "正在加载...",
              contentnomore: "没有更多数据啦"
            };
          }
        }
      },
      created: function created() {
        this.contentnomore = this.$t("index").contentnomore, this.contentdown = this.$t("index").contentdown, this.contentrefresh = this.$t("index").contentrefresh;
      }
    };
    n.default = o;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-load-more/uni-load-more-create-component', {
  'components/uni-load-more/uni-load-more-create-component': function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("926e"));
  }
}, [['components/uni-load-more/uni-load-more-create-component']]]);
});
require('components/uni-load-more/uni-load-more.js');
__wxRoute = 'components/uni-nav-bar/uni-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-nav-bar/uni-nav-bar.js';

define('components/uni-nav-bar/uni-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-nav-bar/uni-nav-bar"], {
  "17ce": function ce(t, e, n) {},
  "411a": function a(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("a2ef"),
        u = n.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    e["default"] = u.a;
  },
  "4e42": function e42(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  "5d23": function d23(t, e, n) {
    "use strict";

    var i = n("17ce"),
        u = n.n(i);
    u.a;
  },
  "85b0": function b0(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("4e42"),
        u = n("411a");

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    n("5d23");
    var o = n("2877"),
        r = Object(o["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  a2ef: function a2ef(t, e, n) {
    "use strict";

    (function (t, i) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;

      var u = function u() {
        return n.e("components/uni-status-bar/uni-status-bar").then(n.bind(null, "2496"));
      },
          a = function a() {
        return n.e("components/uni-icon/uni-icon").then(n.bind(null, "8a7c"));
      },
          o = {
        name: "UniNavBar",
        components: {
          uniStatusBar: u,
          uniIcon: a
        },
        props: {
          title: {
            type: String,
            default: ""
          },
          leftText: {
            type: String,
            default: ""
          },
          rightText: {
            type: String,
            default: ""
          },
          leftIcon: {
            type: String,
            default: ""
          },
          rightIcon: {
            type: String,
            default: ""
          },
          fixed: {
            type: Boolean,
            default: !1
          },
          color: {
            type: String,
            default: "white"
          },
          statusBar: {
            type: Boolean,
            default: !1
          },
          shadow: {
            type: Boolean,
            default: !0
          },
          border: {
            type: Boolean,
            default: !0
          }
        },
        data: function data() {
          return {
            statusHeight: 0,
            statusline: 0
          };
        },
        mounted: function mounted() {
          this.getTitleHeight();
        },
        methods: {
          onClickLeft: function onClickLeft() {
            this.$emit("click-left");
          },
          onClickRight: function onClickRight() {
            this.$emit("click-right");
          },
          getTitleHeight: function getTitleHeight() {
            var e = this;
            t.getSystemInfo({
              success: function success(t) {
                return console.log(i(t.screenHeight, " at components\\uni-nav-bar\\uni-nav-bar.vue:109")), t.screenHeight < 740 ? (e.statusline = "90px", e.statusHeight = "60px", !1) : t.screenHeight < 950 ? (e.statusline = "100px", e.statusHeight = "70px", !1) : t.screenHeight > 1e3 ? (e.statusline = "110px", e.statusHeight = "80px", !1) : void 0;
              }
            });
          }
        }
      };

      e.default = o;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-nav-bar/uni-nav-bar-create-component', {
  'components/uni-nav-bar/uni-nav-bar-create-component': function componentsUniNavBarUniNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("85b0"));
  }
}, [['components/uni-nav-bar/uni-nav-bar-create-component']]]);
});
require('components/uni-nav-bar/uni-nav-bar.js');
__wxRoute = 'components/uni-number-box';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-number-box.js';

define('components/uni-number-box.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-number-box"], {
  "5dc9": function dc9(t, e, u) {
    "use strict";

    u.r(e);
    var n = u("eee4"),
        i = u.n(n);

    for (var a in n) {
      "default" !== a && function (t) {
        u.d(e, t, function () {
          return n[t];
        });
      }(a);
    }

    e["default"] = i.a;
  },
  "64e7": function e7(t, e, u) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    u.d(e, "a", function () {
      return n;
    }), u.d(e, "b", function () {
      return i;
    });
  },
  "9bca": function bca(t, e, u) {
    "use strict";

    var n = u("ef96"),
        i = u.n(n);
    i.a;
  },
  a528: function a528(t, e, u) {
    "use strict";

    u.r(e);
    var n = u("64e7"),
        i = u("5dc9");

    for (var a in i) {
      "default" !== a && function (t) {
        u.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    u("9bca");
    var l = u("2877"),
        s = Object(l["a"])(i["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  eee4: function eee4(t, e, u) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = {
      name: "uni-number-box",
      props: {
        value: {
          type: Number,
          default: 1
        },
        index: {
          type: Number,
          default: 0
        },
        min: {
          type: Number,
          default: 0
        },
        max: {
          type: Number,
          default: 100
        },
        step: {
          type: Number,
          default: 1
        },
        disabled: {
          type: Boolean,
          default: !1
        },
        focus: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          inputValue: this.value
        };
      },
      computed: {
        disableSubtract: function disableSubtract() {
          return this.inputValue <= this.min;
        },
        disableAdd: function disableAdd() {
          return this.inputValue >= this.max;
        }
      },
      watch: {
        value: function value(t) {
          this.inputValue = t;
        },
        inputValue: function inputValue(t) {
          var e = {
            number: t,
            index: this.index
          };
          this.$emit("change", e);
        }
      },
      methods: {
        _calcValue: function _calcValue(t) {
          if (!this.disabled) {
            var e = this._getDecimalScale(),
                u = this.inputValue * e,
                n = this.step * e;

            "subtract" === t ? u -= n : "add" === t && (u += n), u < this.min || u > this.max || (this.inputValue = u / e);
          }
        },
        _getDecimalScale: function _getDecimalScale() {
          var t = 1;
          return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)), t;
        },
        _onBlur: function _onBlur(t) {
          var e = t.detail.value;
          e ? (e = +e, e > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e) : this.inputValue = 0;
        }
      }
    };
    e.default = n;
  },
  ef96: function ef96(t, e, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-number-box-create-component', {
  'components/uni-number-box-create-component': function componentsUniNumberBoxCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a528"));
  }
}, [['components/uni-number-box-create-component']]]);
});
require('components/uni-number-box.js');
__wxRoute = 'components/uni-scrollTo/uni-scrollTo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-scrollTo/uni-scrollTo.js';

define('components/uni-scrollTo/uni-scrollTo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-scrollTo/uni-scrollTo"], {
  "06e7": function e7(n, t, u) {
    "use strict";

    u.r(t);
    var c = u("377c"),
        e = u("9dfa");

    for (var o in e) {
      "default" !== o && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(o);
    }

    u("37ab");
    var a = u("2877"),
        r = Object(a["a"])(e["default"], c["a"], c["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  "377c": function c(n, t, u) {
    "use strict";

    var c = function c() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        e = [];

    u.d(t, "a", function () {
      return c;
    }), u.d(t, "b", function () {
      return e;
    });
  },
  "37ab": function ab(n, t, u) {
    "use strict";

    var c = u("6c5d"),
        e = u.n(c);
    e.a;
  },
  "6c5d": function c5d(n, t, u) {},
  "9dfa": function dfa(n, t, u) {
    "use strict";

    u.r(t);
    var c = u("cd16"),
        e = u.n(c);

    for (var o in c) {
      "default" !== o && function (n) {
        u.d(t, n, function () {
          return c[n];
        });
      }(o);
    }

    t["default"] = e.a;
  },
  cd16: function cd16(n, t, u) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var u = {
        name: "scrllTop",
        data: function data() {
          return {};
        },
        methods: {
          top: function top() {
            n.pageScrollTo({
              duration: 300,
              scrollTop: 0
            });
          }
        }
      };
      t.default = u;
    }).call(this, u("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-scrollTo/uni-scrollTo-create-component', {
  'components/uni-scrollTo/uni-scrollTo-create-component': function componentsUniScrollToUniScrollToCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("06e7"));
  }
}, [['components/uni-scrollTo/uni-scrollTo-create-component']]]);
});
require('components/uni-scrollTo/uni-scrollTo.js');
__wxRoute = 'components/uni-status-bar/uni-status-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-status-bar/uni-status-bar.js';

define('components/uni-status-bar/uni-status-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-status-bar/uni-status-bar"], {
  2496: function _(t, n, u) {
    "use strict";

    u.r(n);
    var a = u("78ac"),
        e = u("6c31");

    for (var r in e) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    u("5361");
    var c = u("2877"),
        i = Object(c["a"])(e["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  5361: function _(t, n, u) {
    "use strict";

    var a = u("dfe2"),
        e = u.n(a);
    e.a;
  },
  "6c31": function c31(t, n, u) {
    "use strict";

    u.r(n);
    var a = u("8673"),
        e = u.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    n["default"] = e.a;
  },
  "78ac": function ac(t, n, u) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        e = [];

    u.d(n, "a", function () {
      return a;
    }), u.d(n, "b", function () {
      return e;
    });
  },
  8673: function _(t, n, u) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = t.getSystemInfoSync().statusBarHeight + "px",
          a = {
        name: "UniStatusBar",
        data: function data() {
          return {
            statusBarHeight: u
          };
        }
      };
      n.default = a;
    }).call(this, u("6e42")["default"]);
  },
  dfe2: function dfe2(t, n, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-status-bar/uni-status-bar-create-component', {
  'components/uni-status-bar/uni-status-bar-create-component': function componentsUniStatusBarUniStatusBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2496"));
  }
}, [['components/uni-status-bar/uni-status-bar-create-component']]]);
});
require('components/uni-status-bar/uni-status-bar.js');
__wxRoute = 'components/uni-steps/uni-steps';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-steps/uni-steps.js';

define('components/uni-steps/uni-steps.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-steps/uni-steps"], {
  "44e9": function e9(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("807c"),
        c = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = c.a;
  },
  "598c5": function c5(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("70bc"),
        c = e("44e9");

    for (var r in c) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(r);
    }

    e("a7c0");
    var a = e("2877"),
        i = Object(a["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = i.exports;
  },
  "70bc": function bc(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return c;
    });
  },
  "807c": function c(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var u = function u() {
      return e.e("components/uni-icon/uni-icon").then(e.bind(null, "8a7c"));
    },
        c = {
      name: "UniSteps",
      components: {
        uniIcon: u
      },
      props: {
        direction: {
          type: String,
          default: "row"
        },
        activeColor: {
          type: String,
          default: "#1aad19"
        },
        active: {
          type: Number,
          default: 0
        },
        options: {
          type: Array,
          default: function _default() {
            return [];
          }
        }
      },
      data: function data() {
        return {};
      }
    };

    t.default = c;
  },
  a7c0: function a7c0(n, t, e) {
    "use strict";

    var u = e("d7c4"),
        c = e.n(u);
    c.a;
  },
  d7c4: function d7c4(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-steps/uni-steps-create-component', {
  'components/uni-steps/uni-steps-create-component': function componentsUniStepsUniStepsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("598c5"));
  }
}, [['components/uni-steps/uni-steps-create-component']]]);
});
require('components/uni-steps/uni-steps.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"110b":function(t,e,n){"use strict";(function(t){n("d471"),n("921b");i(n("66fd"));var e=i(n("8bc3"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6b3f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},7879:function(t,e,n){},"8bc3":function(t,e,n){"use strict";n.r(e);var i=n("6b3f"),a=n("dbf0");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("ffe9");var c=n("2877"),s=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},"8c34":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("a34a")),o=c(n("3d3b"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,a,o,c){try{var s=t[o](c),r=s.value}catch(u){return void n(u)}s.done?e(r):Promise.resolve(r).then(i,a)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var o=t.apply(e,n);function c(t){s(o,i,a,c,r,"next",t)}function r(t){s(o,i,a,c,r,"throw",t)}c(void 0)})}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/uni-number-box").then(n.bind(null,"a528"))},d=function(){return n.e("components/uni-countdown/uni-countdown").then(n.bind(null,"8027"))},p=function(){return n.e("components/over").then(n.bind(null,"35b2"))},g=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},f={banner:[],gg:[],promotionUrl:"",swiperLength:"",newList:[],mentList:[],sellList:[],seckillList:[],goodsList:[],typelist:[],height:0,windowHeight:0},v={components:u({uniNumberBox:l,uniCountdown:d,over:p,imglazy:g},"uniCountdown",d),data:function(){return{promotion:"",titleNViewBackground:"",swiperCurrent:0,title:"滚动公告",over:!1,backweb:!0,placeholderSrc:"../../static/60x60.png",index:{banner:[],gg:[],promotionUrl:"",swiperLength:"",newList:[],mentList:[],sellList:[],seckillList:[],goodsList:[],typelist:[],height:0,windowHeight:0},list:[{img:1,error:2},{img:1,error:2}],loadDATA1:!1}},computed:{i18n:function(){return this.$t("index")}},onLoad:function(t){},onShow:function(e){var n=this;setTimeout(function(){var e=t.getStorageSync("userinfo");if(!e)return n.$store.dispatch("showLogin"),!1;f.height=t.getSystemInfoSync().windowHeight-f.tabBarHeight,f.windowHeight=t.getSystemInfoSync().windowHeight,n.loadData()},300),"2"==n.$store.state.app?(f.typelist=n.$t("categoryList_1").typelist,t.setTabBarItem({index:0,text:n.$t("index").tab1}),t.setTabBarItem({index:1,text:n.$t("index").tab2}),t.setTabBarItem({index:2,text:n.$t("index").tab3}),t.setTabBarItem({index:3,text:n.$t("index").tab4})):f.typelist=n.$t("categoryList_0").typelist},methods:{loadData:function(){var e=this,n={page:1,downNum:20},i={type:"app"};e.$ajax.hIndex().then(function(t){if("非法进入"==t)return!1;for(var n=t.gdgg_app,i=0;i<n.length;i++){var a=e.$store.getters.imgShow+"/ggao/"+n[i].pic+"?x-oss-process=style/yuan";n[i].pic=a,n[i].background="#d8262c"}f.banner=n,f.gg=t.gg,f.promotionUrl=t.app_promotion.url,f.swiperLength=n.length}).catch(function(t){return!1}),e.$ajax.hNew(n,i).then(function(n){e.pageData(n,"newList"),t.hideLoading()}),e.$ajax.hBu(n,i).then(function(t){e.pageData(t,"mentList")}),e.$ajax.hSale(n,i).then(function(t){e.pageData(t,"seckillList")}),e.$ajax.hDis(n,i).then(function(t){e.pageData(t,"sellList")}),e.$ajax.hLike().then(function(t){e.pageData(t,"goodsList"),e.loadDATA1=!0}),e.index=f},pageData:function(t,e){var n=this,i=t.list,a=[],o=6;if(i.length<6&&(o=i.length),"seckillList"==e)for(var c=0;c<o;c++)i[c].image=n.$store.getters.imgShow+"/thumb/"+i[c].item_no+".jpg?x-oss-process=style/300",a.push(i[c]);else for(c=0;c<o;c++)i[c].image=n.$store.getters.imgShow+"/thumb/"+i[c].item_no+".jpg?x-oss-process=style/300",i[c].allNum=parseInt(i[c].spec),i[c].circleHidden=!1,"0"!=i[c].cnum&&(i[c].circleHidden=!0),a.push(i[c]);switch(e){case"newList":f.newList=a||[];break;case"mentList":f.mentList=a||[];break;case"sellList":f.sellList=a||[];break;case"seckillList":f.seckillList=a||[];break;case"goodsList":f.goodsList=a||[]}},swiperChange:function(t){var e=t.detail.current;this.swiperCurrent=e},navToDetailPage:function(e){console.log(i(e," at pages\\index\\index.vue:456")),t.navigateTo({url:"/pages/product/product?productId=".concat(e)})},navDis:function(){t.navigateTo({url:"/pages/product/list?listId=dis"})},navNew:function(){t.navigateTo({url:"/pages/product/list?listId=new"})},navUnsala:function(){t.navigateTo({url:"/pages/product/list?listId=Unsalable"})},navreplenishment:function(){t.navigateTo({url:"/pages/product/list?listId=supplement"})},navsell:function(){t.navigateTo({url:"/pages/product/list?listId=sell"})},timeup:function(e){console.log(i(e," at pages\\index\\index.vue:492")),t.showToast({title:"时间到"})},navDisPage:function(e){t.navigateTo({url:"/pages/product/product?productId=".concat(e.item_no,"&num=").concat(e.discount)})},navSrckil:function(){var e="http://172.21.8.129:8080/#/index";t.navigateTo({url:"/pages/webview/webview?url=".concat(e,"&id=miaosha")})},navType:function(e){t.navigateTo({url:"/pages/product/list?listId=".concat(e)})},bindChange:function(t){this.goodsList[t.index].allNum=t.number},shopping:function(t){var e=this,n=t;e.$ajax.addShop(t).then(function(t){"success"==t.result?(e.$api.msg(e.$t("index").msg1),n.circleHidden=!0,n.cnum=parseInt(n.cnum)+parseInt(n.allNum)):e.$api.msg(t.msg)})},navSearch:function(){t.navigateTo({url:"/pages/search/search"})},onScan:function(){t.scanCode({success:function(e){t.navigateTo({url:"/pages/product/product?productId=".concat(e.result)})}})},loadDis:function(){o.default.post("/index.php/Home/Coupon/addconpon","",function(t){})},navwebview:function(e){t.navigateTo({url:"/pages/webview/webview?url=".concat(e)})},bindcarouse:function(e){console.log(i(e," at pages\\index\\index.vue:565")),e.app_act=e.app_act.split("|"),"Promotion"==e.app_act[0]&&t.navigateTo({url:"/pages/product/list?listId=".concat(e.app_act[1])}),"Article"==e.app_act[0]&&t.navigateTo({url:"/pages/Article/Article?id=".concat(e.app_act[1])}),"Category"==e.app_act[0]&&t.navigateTo({url:"/pages/product/list?listId=".concat(e.app_act[1])}),"Goods"==e.app_act[0]&&t.navigateTo({url:"/pages/product/product?productId=".concat(e.app_act[1])}),"WEB"==e.app_act[0]&&t.navigateTo({url:"/pages/webview/webview?url=".concat(e.link,"&id=").concat(e.app_act[1])})},bindActivity:function(e){"1"==e.sort?t.navigateTo({url:"/pages/webview/webview?url=".concat(e.contents,"&id=miaosha")}):t.navigateTo({url:"/pages/Article/Article?id=".concat(e.id)})},onBackPress:function(){var e=plus.android.runtimeMainActivity();plus.android.runtimeMainActivity(),plus.runtime.quit=function(){e.moveTaskToBack(!1)},t.closeSocket(),t.onSocketClose(function(t){console.log(i("WebSocket 已关闭！"," at pages\\index\\index.vue:626"))}),plus.nativeUI.toast=function(n){if("再按一次退出应用"==n)return e.moveTaskToBack(!1),!1;t.showToast({title:"再按一次退出应用",icon:"none"})}}},onNavigationBarSearchInputClicked:function(){var e=r(a.default.mark(function e(n){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.navigateTo({url:"/pages/search/search"});case 1:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onNavigationBarButtonTap:function(e){var n=e.index;if(0===n)t.scanCode({success:function(e){console.log(i("条码类型："+e.scanType," at pages\\index\\index.vue:658")),console.log(i("条码内容："+e.result," at pages\\index\\index.vue:659")),t.navigateTo({url:"/pages/product/product?productId=".concat(e.result)})}});else if(1===n){var a=getCurrentPages(),o=a[a.length-1],c=o.$getAppWebview();c.hideTitleNViewButtonRedDot({index:n}),t.navigateTo({url:"/pages/notice/notice"})}}};e.default=v}).call(this,n("6e42")["default"],n("0de9")["default"])},dbf0:function(t,e,n){"use strict";n.r(e);var i=n("8c34"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},ffe9:function(t,e,n){"use strict";var i=n("7879"),a=n.n(i);a.a}},[["110b","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/product/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/product.js';

define('pages/product/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"0d45":function(e,t,n){"use strict";(function(e){n("d471"),n("921b");i(n("66fd"));var t=i(n("439b"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},1827:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"439b":function(e,t,n){"use strict";n.r(t);var i=n("1827"),a=n("5ba8");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("a598");var o=n("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"5ba8":function(e,t,n){"use strict";n.r(t);var i=n("6343"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},6343:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("3d3b"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.e("components/share").then(n.bind(null,"a85d"))},u=function(){return n.e("components/uni-number-box").then(n.bind(null,"a528"))},r=function(){return n.e("components/uni-collapse/uni-collapse").then(n.bind(null,"b10a"))},l=function(){return n.e("components/uni-collapse-item/uni-collapse-item").then(n.bind(null,"48bd"))},c=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},d={title:"",discountPrice:"",base_price:"",sale_price:"",specSelected:[],coding:"",specification:"",material:"",features:"",usage:"",notes:"",size:"",weight:"",specClass:"none",dataLength:{material:"",features:"",usage:"",notes:""},org_price:0,goodsList:[],allNum:0,specChildList:[],productId:"",favorite:!1,default:!0},f={components:{share:o,uniNumberBox:u,uniCollapse:r,uniCollapseItem:l,imglazy:c},data:function(){return{backImages:"",typeList:[],index:{title:"",discountPrice:"",base_price:"",sale_price:"",specSelected:[],coding:"",specification:"",material:"",features:"",usage:"",notes:"",size:"",weight:"",specClass:"none",dataLength:{material:"",features:"",usage:"",notes:""},org_price:0,goodsList:[],allNum:0,specChildList:[],productId:"",favorite:!1,default:!0}}},onShow:function(){a.default.pageTitle(this.$t("details").title)},computed:{i18n:function(){return this.$t("details")}},onLoad:function(e){var t=this;d=this.index,a.default.load(this.$t("index").loadmsg),d.productId=e.productId,e.num&&(d.discountPrice=e.num),setTimeout(function(){t.postlist(e.productId)},300)},methods:{imageError:function(e){},postlist:function(t){var n=this;if(1==d.specChildList.length)return!1;n.$ajax.product(t).then(function(t){if(null==t.info.lwh&&(t.info.lwh=n.$t("details").empty),null==t.info.weight&&(t.info.weight=n.$t("details").empty),0==t.info.heart&&(d.favorite=!1),1==t.info.heart&&(d.favorite=!0),e.hideLoading(),d.banner=n.$store.getters.imgShow+"/thumb/"+t.info.item_no+".jpg?x-oss-process=style/800",d.base_price=t.info.base_price,d.sale_price=t.info.sale_price,d.title=t.info.item_name,d.coding=t.info.item_no,d.specification=t.info.spec,d.material=t.info.material,d.size=t.info.lwh,d.weight=t.info.weight,d.backImages=n.$store.getters.imgShow+"/detail/"+t.info.item_no+"-.jpg?x-oss-process=style/800",d.allNum=parseInt(t.info.spec),d.features=t.info.features,d.usage=t.info.usage,d.notes=t.info.notes,d.org_price=t.info.org_price,"0"==t.list.length&&(t.list=[{attr1:n.$t("cart").Default}],n.$set(t.list[0],"selected",!0),d.specSelected.push(t.list[0])),d.default){var i=!0,s=!1,o=void 0;try{for(var u,r=t.list[Symbol.iterator]();!(i=(u=r.next()).done);i=!0){var l=u.value;if(l.attr1==t.info.attr1){n.$set(l,"selected",!0),d.specSelected.push(l);break}}}catch(f){s=!0,o=f}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}d.specChildList=t.list}var c=t.relation;c.forEach(function(e,t){e.image=n.$store.getters.imgShow+"/thumb/"+e.item_no+".jpg?x-oss-process=style/800"}),d.goodsList=c,null!=t.info.material?d.dataLength.material=a.default.strlen(t.info.material):d.dataLength.material=0,null!=t.info.features?d.dataLength.features=a.default.strlen(t.info.features):d.dataLength.features=0,null!=t.info.usage?d.dataLength.usage=a.default.strlen(t.info.usage):d.dataLength.usage=0,null!=t.info.notes?d.dataLength.notes=a.default.strlen(t.info.notes):d.dataLength.notes=0,n.index=d})},toggleSpec:function(){"show"===d.specClass?(d.specClass="hide",setTimeout(function(){d.specClass="none"},250)):"none"===d.specClass&&(d.specClass="show"),this.index.specClass=d.specClass},selectSpec:function(e,t){var n=this;d.default=!1,this.postlist(t);var i=d.specChildList;i.forEach(function(e){n.$set(e,"selected",!1)}),this.$set(i[e],"selected",!0),d.specSelected=[],i.forEach(function(e){!0===e.selected&&d.specSelected.push(e)}),this.index=d},toFavorite:function(e){var t=this,n={sn:e};d.favorite=!d.favorite,console.log(i(t.favorite," at pages\\product\\product.vue:442")),d.favorite?t.addCartItem(n):t.deleteCartItem(n),this.index=d},addCartItem:function(e){var t=this;t.$ajax.addLike(e).then(function(e){t.$api.msg(t.$t("index").msg4)})},deleteLike:function(e){var t=this;t.$ajax.addLike(e).then(function(e){t.$api.msg(t.$t("index").msg4)})},bindChange:function(e){d.allCount=e.number},navToDetailPage:function(t){console.log(i(t," at pages\\product\\product.vue:471")),e.navigateTo({url:"/pages/product/product?productId=".concat(t)})},shopping:function(){var e=this,t={item_no:d.coding,allNum:d.allCount};e.$ajax.addShop(t).then(function(t){"success"==t.result?e.$api.msg(e.$t("index").msg1):e.$api.msg(t.msg)})},stopPrevent:function(){},back:function(){e.navigateBack({delta:1})},previewImage:function(t){var n=[];n.push(t),e.previewImage({current:t,urls:n})}}};t.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},a598:function(e,t,n){"use strict";var i=n("cfea"),a=n.n(i);a.a},cfea:function(e,t,n){}},[["0d45","common/runtime","common/vendor"]]]);
});
require('pages/product/product.js');
__wxRoute = 'pages/set/set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/set.js';

define('pages/set/set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{3687:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"48fe":function(t,e,n){"use strict";n.r(e);var o=n("3687"),i=n("fa4f");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("82ea");var a=n("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"502c":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62"),u=a(n("3d3b"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{version:"",hdid:!1}},onLoad:function(){u.default.pageTitle(this.$t("set").title)},computed:{i18n:function(){return this.$t("set")}},onShow:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(n){console.log(t(n.version," at pages\\set\\set.vue:45")),e.version=n.version}),"android"==plus.os.name.toLowerCase()&&(e.hdid=!0),"ios"==plus.os.name.toLowerCase()&&(e.hdid=!0)},methods:r({},(0,i.mapMutations)(["logout"]),{allclose:function(){o.clearStorage(),this.$api.msg(this.$t("set").hint)},toLogout:function(){var t=this,e=this;o.showModal({content:e.$t("set").modelMsg,cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,success:function(e){e.confirm&&(t.logout(),o.closeSocket(),setTimeout(function(){o.reLaunch({url:"/pages/login/login"})},500))}})},udate:function(){var t=this;u.default.load(this.$t("index").loadmsg);var e="";e="android"==plus.os.name.toLowerCase()?1:2;var n={version:t.version,type:e};u.default.post("/index.php/Home/Version/index",n,function(e){e.id?o.navigateTo({url:"/pages/update/update"}):t.$api.msg("当前版本是最新版本~")}),setTimeout(function(){o.hideLoading()},500)}})};e.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},"82ea":function(t,e,n){"use strict";var o=n("e051"),i=n.n(o);i.a},ba12:function(t,e,n){"use strict";(function(t){n("d471"),n("921b");o(n("66fd"));var e=o(n("48fe"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e051:function(t,e,n){},fa4f:function(t,e,n){"use strict";n.r(e);var o=n("502c"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=i.a}},[["ba12","common/runtime","common/vendor"]]]);
});
require('pages/set/set.js');
__wxRoute = 'pages/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cart/cart.js';

define('pages/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"2e58":function(t,e,a){"use strict";a.r(e);var i=a("f9a9"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},"360d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"548d":function(t,e,a){"use strict";(function(t){a("d471"),a("921b");i(a("66fd"));var e=i(a("a660"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"8d11":function(t,e,a){"use strict";var i=a("9821"),n=a.n(i);n.a},9821:function(t,e,a){},a660:function(t,e,a){"use strict";a.r(e);var i=a("360d"),n=a("2e58");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("8d11");var c=a("2877"),o=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},f9a9:function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("3d3b"));function s(t){return t&&t.__esModule?t:{default:t}}var c=function(){return a.e("components/uni-number-box").then(a.bind(null,"a528"))},o=function(){return a.e("components/uni-drawer/uni-drawer").then(a.bind(null,"44ed"))},r=function(){return a.e("components/over").then(a.bind(null,"35b2"))},l=function(){return a.e("components/img-lazy/img-lazy").then(a.bind(null,"b066"))},u={flag:0,mindex:-1,lastX:0,lastY:0,text:0,navIndex:0,typeList:[],activeId:"",downNum:"",cartdata:[],activeClass:0,cartList:[],allList:[],scrollTop:0,total:0,allCount:[],navList:[],navListRight:[],typeId:"",windowHeight:0,sptyp:0,spnum:0,showRigth:!1,showLeft:!1,activeList:[],disnum:0,distext:"请选择代金券",filterIndex:0,priceOrder:0,aniClass:"-1",isShow:!1,navActive:1,listId:-1,navStatus:!1},d={components:{uniNumberBox:c,uniDrawer:o,over:r,imglazy:l},data:function(){return{list:{flag:0,mindex:-1,lastX:0,lastY:0,text:0,navIndex:0,typeList:[],activeId:"",downNum:"",cartdata:[],activeClass:0,cartList:[],allList:[],scrollTop:0,total:0,allCount:[],navList:[],navListRight:[],typeId:"",windowHeight:0,sptyp:0,spnum:0,showRigth:!1,showLeft:!1,activeList:[],disnum:0,distext:"请选择代金券",filterIndex:0,priceOrder:0,aniClass:"-1",isShow:!1,navActive:1,listId:-1,navStatus:!1}}},onLoad:function(){var e=this;setTimeout(function(){u=e.list;var a="";u.navList=[],u.allList=[],u.navListRight=[],u.cartList=[],t.setStorageSync("getlist",a),u.empty=!1,e.list=u},300)},onShow:function(){var e=this,a=t.getStorageSync("userinfo");if(!a)return this.$store.dispatch("showLogin"),!1;setTimeout(function(){e.distext=e.$t("cart").select,e.loadData()},400)},watch:{},computed:{i18n:function(){return this.$t("cart")}},methods:{handletouchmove:function(t){if(0===u.flag){var e=t.touches[0].pageX,a=t.touches[0].pageY,i=e-u.lastX,n=a-u.lastY,s="";u.mindex=-1,Math.abs(i)>Math.abs(n)?i<0?(s="向左滑动",u.flag=1,this.hide()):i>0&&(s="向右滑动",u.flag=2,this.show("left")):n<0?(s="向上滑动",u.flag=3):n>0&&(s="向下滑动",u.flag=4),u.lastX=e,u.lastY=a,u.text=s}},handletouchstart:function(t){u.lastX=t.touches[0].pageX,u.lastY=t.touches[0].pageY},handletouchend:function(t){u.flag=0,u.text="没有滑动"},changeCate:function(t,e){var a=this;if(u.page=1,u.navStatus=!0,"cn"==t.cls){var n=t.cn;return n.forEach(function(t,e){t.checked=!0,t.image=a.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),u.cartList=n,u.listId=t.cls,this.hide(),this.calcTotal(),!1}if("zhe"==t.cls){var s=t.zhe;return s.forEach(function(t,e){t.checked=!0,t.image=a.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),u.cartList=s,u.listId=t.cls,this.hide(),this.calcTotal(),!1}if(1==u.navActive){console.log(i(u.navActive," at pages\\cart\\cart.vue:367"));var c=t.goods;c.forEach(function(t,e){t.checked=!0,t.image=a.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),u.cartList=c,u.listId=t.cls,void 0!=t.child&&(t.child&&(u.navActive=2),u.navIndex=e)}else{console.log(i(u.navActive," at pages\\cart\\cart.vue:386")),console.log(i(t," at pages\\cart\\cart.vue:387"));var o=t.goods;o.forEach(function(t,e){t.checked=!0,t.image=a.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),u.cartList=o,u.listId=t.clss,void 0==t.child&&t.child&&(u.navActive=2)}this.hide(),this.calcTotal()},upper:function(){u.navActive=1,u.activeId=-1,this.list=u},actionSheetTap:function(){var e=this;t.showActionSheet({title:e.$t("cart").regulate,itemList:e.$t("cart").sheet,cancelText:"取消",success:function(t){var a=t.tapIndex;u.listId=-1,u.navActive=1,0==a&&(u.downNum="desc",e.loadData(),n.default.load(e.$t("index").loadmsg)),1==a&&(u.downNum="asc",e.loadData(),n.default.load(e.$t("index").loadmsg)),2==a&&e.clearCart(),e.list=u}})},imageError:function(t){},isNumber:function(t){var e=/^\d+(\.\d+)?$/,a=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;return!(!e.test(t)&&!a.test(t))},loadData:function(){u.empty=!1,u.over=!1,u.cartList=[],u.activeClass=0,n.default.load(this.$t("index").loadmsg);var e=this;e.$ajax.cartData(u.downNum).then(function(a){u.cartdata=a;var i=a.list,n=a.hd_list,s=a.cate;if(void 0==i&&t.hideLoading(),0==i.length){u.empty=!0,u.cartList=[],u.navList=[],u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,u.distext=e.$t("cart").select;var c="";return t.setStorageSync("getlist",c),e.list=u,t.hideLoading(),!1}var o=[];i.forEach(function(t,a){t.checked=!0,t.image=e.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80",t.allNum=parseInt(t.spec),t.num=parseInt(t.num)}),n.forEach(function(t,e){t.title=t.huodong_name,t.cls=t.huodong,s.push(t)}),0==o.length?u.cartList=i:u.cartList=o,u.allList=i,u.over=!0,u.typeList=a.cate,t.setStorageSync("getlist",i),e.calcTotal(),e.disData(),t.hideLoading(),e.list=u})},navToDetailPage:function(e){console.log(i(e," at pages\\cart\\cart.vue:520")),"zhe"==e.huodong?t.navigateTo({url:"/pages/product/product?productId=".concat(e.item_no,"&num=").concat(e.price)}):t.navigateTo({url:"/pages/product/product?productId=".concat(e.item_no)})},changenav:function(e,a){var i=t.getStorageSync("getlist"),n=e.cls;if(u.typeId=e.cls,u.activeClass=a,"默认"==n)u.cartList=i;else{var s=[];i.forEach(function(t,e){parseInt(n)>=0?t.cls_id===n&&s.push(t):t.huodong==n&&s.push(t)}),u.cartList=s}this.list=u,this.calcTotal()},navToLogin:function(){t.navigateTo({url:"/pages/public/login"})},discheck:function(t,e){var a=u.activeList,i=this;1!=a.length&&a.forEach(function(t,e){t.data.checked=!1}),"item"===t&&(u.total>=u.activeList[e].data.money?(u.activeList[e].data.checked=!u.activeList[e].data.checked,u.distext=i.$t("cart").uesText+u.activeList[e].data.money+i.$t("cart").voucher,i.disPrice()):i.$api.msg("总金额不小于优惠金额！"))},bindChange:function(t){u.cartList[t.index].num=t.number,u.cartList[t.index].org_xj=parseFloat(u.cartList[t.index].org_price)*u.cartList[t.index].num,this.amendData(t)},amendData:function(t){var e=this,a=u.cartList[t.index];console.log(i(u.cartList[t.index]," at pages\\cart\\cart.vue:601"));var n={item_no:a.item_no,num:a.num};e.$ajax.changenum(n).then(function(t){"success"==t.result?e.calcTotal():e.$api.msg(t.msg)})},deleteCartItem:function(e,a){var n=this,s=t.getStorageSync("getlist"),c={id:e.cls_id,item_no:e.item_no};n.$ajax.cartDele(c).then(function(e){u.aniClass=a,n.$api.msg(n.$t("index").msg2);var c=u.cartList,o=c[a],r=o.item_no;if(u.cartList.splice(a,1),console.log(i(u.cartList," at pages\\cart\\cart.vue:631")),console.log(i(u.allList," at pages\\cart\\cart.vue:632")),0==u.cartList.length){u.cartList=[],u.navList=[],u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,u.listId=-1,n.loadData(),n.disPrice(),u.distext=n.$t("cart").select;var l="";return t.setStorageSync("getlist",l),n.list=u,!1}s.forEach(function(t,e){t.item_no==r&&s.splice(e,1)}),0==s.length&&(u.empty=!0),t.setStorageSync("getlist",s),n.disPrice(),n.calcTotal(),t.hideLoading()})},clearCart:function(){var e=this;t.getStorageSync("userinfo");t.showModal({content:e.$t("cart").hint,cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,success:function(a){a.confirm&&e.$ajax.cartAlldele().then(function(a){u.cartList=[],u.navList=[],e.loadData(),u.empty=!0,u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,e.disPrice(),u.distext=e.$t("cart").select;var i="";t.setStorageSync("getlist",i),e.list=u})}})},calcTotal:function(){var t=u.cartList,e=0;if(u.sptyp=t.length,0===t.length)return u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,void(this.list=u);var a=0,i=!0;t.forEach(function(t){e+=t.num,!0===t.checked?a+=parseFloat(t.price)*parseFloat(t.num):!0===i&&(i=!1)}),u.spnum=e,u.total=Number(a.toFixed(2)),u.disnum=Number(a.toFixed(2)),this.disPrice()},disPrice:function(){var t=this,e=u.activeList;e.forEach(function(e,a){if(1==e.data.checked)if(u.total>=e.data.money){console.log(i(e.data.money," at pages\\cart\\cart.vue:740"));var n=u.total-e.data.money;u.disnum=Number(n.toFixed(2)),u.distext=t.$t("cart").uesText+u.activeList[a].data.money+t.$t("cart").voucher,t.list=u}else t.$api.msg("总金额不小于优惠金额！"),u.distext="请选择优惠券",e.data.checked=!1,t.list=u})},createOrder:function(){var e=this,a={src:"APP",id:"0"};""!=u.listId&&parseInt(u.listId)>=0&&(a.cls=u.listId);var n=u.activeList;n.forEach(function(t,e){console.log(i(t.data.checked," at pages\\cart\\cart.vue:769")),1==t.data.checked&&(a.id=t.data.id)}),t.showModal({content:e.$t("cart").hint2,cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,success:function(i){i.confirm&&e.$ajax.cartJiesuan(a).then(function(i){e.$api.msg(e.$t("index").msg3),e.calcTotal(),u.typeId="",u.cartList=[],u.navList=[],u.empty=!0,u.navActive=1,u.total=0,u.disnum=0,u.spnum=0,u.sptyp=0,u.distext=e.$t("cart").select;var n="";t.setStorageSync("getlist",n);var s={code:i.code,id:a.id};e.loadData(),"object"==typeof i&&e.disStatus(s)})}})},disStatus:function(t){n.default.post("/index.php/Home/Coupon/useconpon",t,function(t){})},show:function(t){"left"===t?u.showLeft=!0:u.showRigth=!0,this.list=u},hide:function(){u.showLeft=!1,u.showRigth=!1,this.list=u},closeDrawer:function(t){"left"===t?u.showLeft=!1:u.showRigth=!1,this.list=u},disData:function(){var t=this;u.activeList=[],t.$ajax.dis().then(function(t){var e=[],a=t;a.forEach(function(t,a){t.data.checked=!1,0==t.data.type.expire&&0==t.data.type.not_used&&e.push(t)}),u.activeList=e})},changeTab:function(t){this.show("left")}},onNavigationBarButtonTap:function(t){u.showRigth=!u.showRigth,this.list=u},onBackPress:function(){(this.showRigth||this.showLeft)&&this.hide();var e=plus.android.runtimeMainActivity();plus.android.runtimeMainActivity(),plus.runtime.quit=function(){e.moveTaskToBack(!1)},t.closeSocket(),t.onSocketClose(function(t){console.log(i("WebSocket 已关闭！"," at pages\\cart\\cart.vue:882"))}),plus.nativeUI.toast=function(a){if("再按一次退出应用"==a)return e.moveTaskToBack(!1),!1;t.showToast({title:"再按一次退出应用",icon:"none"})}}};e.default=d}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["548d","common/runtime","common/vendor"]]]);
});
require('pages/cart/cart.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0494":function(t,e,n){"use strict";var a=n("6f8c"),i=n.n(a);i.a},"2ea3":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("3d3b")),n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/mix-list-cell").then(n.bind(null,"1240"))},s=0,r=0,u=!0,c={username:"",uid:"",isvip:"",activeList:[],price:0,integralNum:0,disLength:0},l={components:{listCell:o},data:function(){return{app:1,coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,language:"中文",langStatus:!1,index:{username:"",uid:"",isvip:"",price:0,integralNum:0,disLength:0}}},onLoad:function(){setTimeout(function(){var e=t.getStorageSync("userinfo");if(!e)return this.$store.dispatch("showLogin"),!1},300)},onShow:function(){var e=this;if(setTimeout(function(){c=e.index;var n=t.getStorageSync("userinfo");c.username=n.username,c.uid=n.uid,c.isvip=n.isvip,e.getAmt()},300),"2"==this.$store.state.app){this.app=2;var n=t.getStorageSync("lang"),i=t.getStorageSync("userinfo");if(n?(console.log(a(n.locale," at pages\\user\\user.vue:164")),"zh"==n.locale&&(this.language="English",this.langStatus=!1),"en"==n.locale&&(this.language="中文",this.langStatus=!1)):(this.$i18n.locale="en",this.language="中文"),!i||!n)return this.$store.dispatch("showLogin"),!1}},onNavigationBarButtonTap:function(e){var n=e.index;if(0===n)this.navTo("/pages/set/set");else if(1===n){var a=getCurrentPages(),i=a[a.length-1],o=i.$getAppWebview();o.hideTitleNViewButtonRedDot({index:n}),t.navigateTo({url:"/pages/notice/notice"})}},computed:{i18n:function(){return this.$t("my")}},methods:{delete1:function(){t.removeStorage({key:"lang",success:function(t){}})},switchChange:function(e){var n=this,a={locale:"",lang:""},i=t.getStorageSync("userinfo");"English"==this.language?(this.language="中文",this.langStatus=!0,this.$i18n.locale="en",i.lang="English",a.lang="English",a.locale="en"):(this.langStatus=!0,this.language="English",i.lang="Chinese",a.lang="Chinese",this.$i18n.locale="zh",a.locale="zh"),t.setTabBarItem({index:0,text:n.$t("index").tab1}),t.setTabBarItem({index:1,text:n.$t("index").tab2}),t.setTabBarItem({index:2,text:n.$t("index").tab3}),t.setTabBarItem({index:3,text:n.$t("index").tab4}),t.setStorageSync("lang",a),t.setStorageSync("userinfo",i)},getAmt:function(){t.getStorageSync("userinfo");var e=this;e.$ajax.money().then(function(t){c.price=t,e.integral()})},integral:function(){var t=this;t.$ajax.integral().then(function(e){c.integralNum=e,t.disData()})},disData:function(){var t=this;t.$ajax.dis().then(function(e){var n=e,a=[];n.forEach(function(t,e){0==t.data.type.expire&&0==t.data.type.not_used&&a.push(t)}),t.activeList=a,c.disLength=a.length,t.index=c})},address:function(e){t.navigateTo({url:"/pages/address/address"})},order:function(){t.navigateTo({url:"/pages/order/order"})},navTech:function(){t.navigateTo({url:"/pages/technology/technology"})},repertory:function(){t.navigateTo({url:"/pages/repertory/repertory"})},market:function(){t.navigateTo({url:"/pages/market/market"})},sale:function(){t.navigateTo({url:"/pages/sale/sale"})},navTo:function(){t.navigateTo({url:"/pages/set/set"})},navCollect:function(){t.navigateTo({url:"/pages/collect/collect"})},navDiscounts:function(){t.navigateTo({url:"/pages/discounts/discounts"})},coverTouchstart:function(t){!1!==u&&(this.coverTransition="transform .1s linear",s=t.touches[0].clientY)},coverTouchmove:function(t){r=t.touches[0].clientY;var e=r-s;e<0?this.moving=!1:(this.moving=!0,e>=80&&e<100&&(e=80),e>0&&e<=80&&(this.coverTransform="translateY(".concat(e,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}},onBackPress:function(){var e=plus.android.runtimeMainActivity();plus.android.runtimeMainActivity(),plus.runtime.quit=function(){e.moveTaskToBack(!1)},t.closeSocket(),t.onSocketClose(function(t){console.log(a("WebSocket 已关闭！"," at pages\\user\\user.vue:395"))}),plus.nativeUI.toast=function(n){if("再按一次退出应用"==n)return e.moveTaskToBack(!1),!1;t.showToast({title:"再按一次退出应用",icon:"none"})}}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},"6f8c":function(t,e,n){},b7f4:function(t,e,n){"use strict";n.r(e);var a=n("dd13"),i=n("f730");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("0494");var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},dd13:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},f730:function(t,e,n){"use strict";n.r(e);var a=n("2ea3"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},f7ec:function(t,e,n){"use strict";(function(t){n("d471"),n("921b");a(n("66fd"));var e=a(n("b7f4"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f7ec","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"2e33":function(e,t,n){"use strict";n.r(t);var a=n("e71f"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},"3a23":function(e,t,n){"use strict";(function(e){n("d471"),n("921b");a(n("66fd"));var t=a(n("a6a9"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"783f":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"986a":function(e,t,n){},a6a9:function(e,t,n){"use strict";n.r(t);var a=n("783f"),i=n("2e33");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("ae31");var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},ae31:function(e,t,n){"use strict";var a=n("986a"),i=n.n(a);i.a},e71f:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a")),o=r(n("3d3b")),s=r(n("2dbb")),u=n("2f62");function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,a,i,o,s){try{var u=e[o](s),r=u.value}catch(l){return void n(l)}u.done?t(r):Promise.resolve(r).then(a,i)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(a,i){var o=e.apply(t,n);function s(e){l(o,a,i,s,u,"next",e)}function u(e){l(o,a,i,s,u,"throw",e)}s(void 0)})}}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={data:function(){return{app:1,name:"",pass:"",logining:!1,scrollTop:0,hisHdid:!1,hisList:[],checkbox:!1,language:"中文",langStatus:!0,images:"hwimg"}},computed:{i18n:function(){return this.$t("login")}},onShow:function(){this.hisHdid=!1},onLoad:function(){var t=e.getStorageSync("namehistory");if(console.log(a(t," at pages\\login\\login.vue:121")),""==t){var n=[];e.setStorageSync("namehistory",n)}else this.hisList=t;if("2"==this.$store.state.app){this.app=2;var i=e.getStorageSync("lang");i?(console.log(a(i.locale," at pages\\login\\login.vue:133")),"zh"==i.locale&&(this.language="English",this.langStatus=!1),"en"==i.locale&&(this.language="中文",this.langStatus=!1)):(this.$i18n.locale="en",this.language="中文",this.langStatus=!1)}this.address()},methods:g({},(0,u.mapMutations)(["login"]),{inputChange:function(e){var t=e.currentTarget.dataset.key;this[t]=e.detail.value},switchChange:function(t){var n={locale:""};"English"==this.language?(this.language="中文",this.langStatus=!0,this.$i18n.locale="en",n.locale="en"):(this.langStatus=!0,this.language="English",this.$i18n.locale="zh",n.locale="zh"),e.setStorageSync("lang",n)},nameChange:function(e){var t=e.currentTarget.dataset.key;e.detail.value;this[t]=e.detail.value,this.pass=""},bindcheckbox:function(){this.checkbox=!this.checkbox},radioChange:function(e){this.images=e.detail.value},addname:function(){var t=e.getStorageSync("namehistory");console.log(a(t.length," at pages\\login\\login.vue:196")),0!=t.length&&(this.hisList=t,this.hisHdid=!0)},navBack:function(){e.navigateBack()},toRegist:function(){},bindhis:function(e){this.name=e,this.pass="",this.hisHdid=!1},close:function(){this.hisHdid=!1},address:function(){var e=this;plus.geolocation.getCurrentPosition(function(t){"中国"!=t.address.country&&(e.$i18n.locale="en")})},toLogin:function(){var t=c(i.default.mark(function t(){var n,u,r;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=this,u=this.name,r=this.pass,e.hideKeyboard(),""!=u){t.next=6;break}return e.showToast({title:n.$t("login").userMsg,icon:"none"}),t.abrupt("return",!1);case 6:if(""!=r){t.next=9;break}return e.showToast({title:n.$t("login").passMsg,icon:"none"}),t.abrupt("return",!1);case 9:e.request({url:o.default.api+"/index.php/Home/Login/index",method:"post",data:{user:u,pass:r,images:n.images},header:{"Content-type":"application/x-www-form-urlencoded"},success:function(t){var i=t.data.data;if("ok"==t.data.res){if("2"==n.$store.state.app){var u={locale:"",lang:""};"English"==n.language?(u.locale="zh",u.lang="Chinese"):(u.locale="en",u.lang="English"),e.setStorageSync("lang",u)}var r={uid:i.uid,hdid:i.hdid,username:i.uname,token:(0,s.default)(i.uid+i.hdid+"ximi"),isvip:i.isvip,oversea:i.oversea};if(n.login(r),1==n.checkbox){console.log(a("需要保存"," at pages\\login\\login.vue:300"));var l=n.name,c={name:l},g=e.getStorageSync("namehistory");if(0==g.length)g.push(c);else{for(var f=1,h=0;h<g.length;h++)switch(g[h].name){case l:f=2;break}1==f&&g.push(c)}e.setStorageSync("namehistory",g)}var d="wss://sw.xmvogue.com",p={timeout:15e3,timeoutObj:null,serverTimeoutObj:null,reset:function(){return clearTimeout(this.timeoutObj),clearTimeout(this.serverTimeoutObj),this},start:function(){var t=this;this.timeoutObj=setTimeout(function(){e.sendSocketMessage({data:"keep",success:function(e){console.log(a(e," at pages\\login\\login.vue:353")),p.reset().start()},fail:function(e){console.log(a(e," at pages\\login\\login.vue:357"))}}),t.serverTimeoutObj=setTimeout(function(){e.onSocketClose(function(e){console.log(a("WebSocket 已关闭！"," at pages\\login\\login.vue:362")),reconnect(d)})},t.timeout)},this.timeout)}};e.connectSocket({url:d}),e.onSocketOpen(function(t){console.log(a("成功连接到"+d," at pages\\login\\login.vue:375")),setTimeout(function(){var t=e.getStorageSync("userinfo"),n=getCurrentPages(),i=n[0].route.split("/"),o='{"user_id":"'+t.hdid+'","user_name":"'+t.username+'","page":"'+i[2]+'","src":"app"}',s={class:"Xmorder",action:"connect",content:o},u=JSON.stringify(s);e.sendSocketMessage({data:u,success:function(e){console.log(a(u," at pages\\login\\login.vue:391")),p.reset().start()},fail:function(e){}})},2e3)}),e.onSocketMessage(function(e){var t=e.data.split("arg:"),n=JSON.parse(t[1]);console.log(a(n," at pages\\login\\login.vue:405"))}),o.default.getclient(),e.switchTab({url:"/pages/index/index"})}else n.$api.msg(t.data.msg)},fail:function(e){console.log(a(e," at pages\\login\\login.vue:425"))},complete:function(){}});case 10:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()})};t.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["3a23","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/order/order';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/order.js';

define('pages/order/order.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"0ca7":function(e,t,n){"use strict";(function(e){n("d471"),n("921b");a(n("66fd"));var t=a(n("2bd3"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"178d":function(e,t,n){"use strict";n.r(t);var a=n("5638"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=o.a},"2bd3":function(e,t,n){"use strict";n.r(t);var a=n("fcda"),o=n("178d");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("3c63");var i=n("2877"),d=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=d.exports},"3c63":function(e,t,n){"use strict";var a=n("4dc1"),o=n.n(a);o.a},"4dc1":function(e,t,n){},5638:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a")),o=(r(n("c06f")),r(n("3d3b")));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,o,r,i){try{var d=e[r](i),u=d.value}catch(c){return void n(c)}d.done?t(u):Promise.resolve(u).then(a,o)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(a,o){var r=e.apply(t,n);function d(e){i(r,a,o,d,u,"next",e)}function u(e){i(r,a,o,d,u,"throw",e)}d(void 0)})}}n("3e59");var u=function(){return n.e("components/empty").then(n.bind(null,"aea4"))},c=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"85b0"))},l=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"926e"))},s={loadingType:"more",orderList:[],cartoon:!1,navList:[],activeClass:0,page:1,type:"add",status:0},f={components:{uniNavBar:c,empty:u,uniLoadMore:l},data:function(){return{mvc:{loadingType:"more",orderList:[],cartoon:!1,navList:[],activeClass:0,page:1,type:"add",status:0}}},onLoad:function(e){var t=this;setTimeout(function(){s=t.mvc,o.default.load(t.$t("index").loadmsg),o.default.pageTitle(t.$t("order_list").title),s.navList=t.$t("order_list").navList,t.loadData()},300)},computed:{i18n:function(){return this.$t("order_list")}},onPullDownRefresh:function(){s.page=1,s.type="refresh",this.loadData()},onReachBottom:function(){s.type="add",this.loadData()},methods:{back:function(){e.navigateBack({delta:1})},loadData:function(){var t=d(a.default.mark(function t(){var n,o;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=this,s.cartoon=!1,o={page:s.page},0==s.activeClass?n.$ajax.orderHa(o).then(function(t){if(null==t.list||0==t.other.totalPage)return e.hideLoading(),s.loadingType="nomore",s.cartoon=!0,!1;n.pagenum(t)}):n.$ajax.orderHd(o).then(function(t){if(null==t.list||0==t.other.totalPage)return e.hideLoading(),s.loadingType="nomore",s.cartoon=!0,!1;n.pagenum(t)});case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),pagenum:function(t){var n=this,a=t.list;if(s.loadingType=t.other.thispage>t.other.totalPage?"nomore":"more","add"==s.type){if(s.page=s.page+1,"nomore"===s.loadingType)return void(n.mvc=s);s.loadingType="loading"}else s.loadingType="more";if("refresh"==s.type){if(s.orderList=[],e.stopPullDownRefresh(),s.page=s.page+1,"nomore"===s.loadingType)return void(n.mvc=s);s.loadingType="loading"}if(a.length<20)return s.loadingType="nomore",e.hideLoading(),s.orderList=s.orderList.concat(a),n.mvc=s,!1;e.hideLoading(),s.orderList=s.orderList.concat(a),n.mvc=s},bindnav:function(e){s.activeClass=e;var t=this;s.cartoon=!1,s.loadingType="more",s.page=1,s.orderList=[],o.default.load(this.$t("index").loadmsg),t.loadData()},details:function(t){0==s.activeClass&&e.navigateTo({url:"/pages/oreder-detail/oreder-detail?sn="+t}),1==s.activeClass&&e.navigateTo({url:"/pages/order-hddata/order-hddata?sn="+t})}}};t.default=f}).call(this,n("6e42")["default"])},fcda:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})}},[["0ca7","common/runtime","common/vendor"]]]);
});
require('pages/order/order.js');
__wxRoute = 'pages/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/address.js';

define('pages/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"2c42":function(t,e,n){"use strict";(function(t){n("d471"),n("921b");a(n("66fd"));var e=a(n("4560"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},4560:function(t,e,n){"use strict";n.r(e);var a=n("5a2f"),u=n("db2a");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("a7b9");var o=n("2877"),s=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"5a2f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},a303:function(t,e,n){},a7b9:function(t,e,n){"use strict";var a=n("a303"),u=n.n(a);u.a},db2a:function(t,e,n){"use strict";n.r(e);var a=n("e386"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},e386:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("3d3b"));function u(t){return t&&t.__esModule?t:{default:t}}var r={source:0,addressList:[]},o={data:function(){return{mvc:{source:0,addressList:[]}}},onLoad:function(t){var e=this;setTimeout(function(){a.default.pageTitle(e.$t("address").title),r.source=t.source,e.lodeData()},300)},computed:{i18n:function(){return this.$t("address")}},methods:{lodeData:function(){var t=this;t.$ajax.address().then(function(e){e[0].default=!0,r.addressList=e,t.mvc=r})}}};e.default=o}},[["2c42","common/runtime","common/vendor"]]]);
});
require('pages/address/address.js');
__wxRoute = 'pages/oreder-detail/oreder-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/oreder-detail/oreder-detail.js';

define('pages/oreder-detail/oreder-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/oreder-detail/oreder-detail"],{"140e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3d3b"));function i(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/uni-card/uni-card").then(n.bind(null,"ffce"))},r=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"85b0"))},u=function(){return n.e("components/over").then(n.bind(null,"35b2"))},d=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},l={detailList:[{item_name:"",item_en:"",item_no:"",valid_price:"",real_qty:"",sub_amt:""}],orderInfo:{sheet_no:0,sheet_amt:0},sn:"",over:!1},c={components:{uniCard:o,uniNavBar:r,over:u,imglazy:d},data:function(){return{imglazyStyle:"border-radius: 10upx;",mvc:{detailList:[{item_name:"",item_en:"",item_no:"",valid_price:"",real_qty:"",sub_amt:""}],orderInfo:{sheet_no:0,sheet_amt:0},sn:"",over:!1}}},onLoad:function(t){var e=this;setTimeout(function(){a.default.load(e.$t("index").loadmsg),a.default.pageTitle(e.$t("order_data").title),l.sn=t.sn,e.loadData()})},computed:{i18n:function(){return this.$t("order_data")}},methods:{back:function(){t.navigateBack({delta:1})},loadData:function(){var e=this;l.over=!1;var n={sn:l.sn};e.$ajax.orderHaView(n).then(function(n){for(var a in l.detailList=n.list,l.orderInfo=n.info,l.detailList)l.detailList[a].url=e.$store.getters.imgShow+"/thumb/"+l.detailList[a].item_no+".jpg?x-oss-process=style/300";l.over=!0,t.hideLoading(),e.mvc=l})},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?productId=".concat(e)})}}};e.default=c}).call(this,n("6e42")["default"])},"7d65":function(t,e,n){"use strict";(function(t){n("d471"),n("921b");a(n("66fd"));var e=a(n("b877"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9f89":function(t,e,n){"use strict";n.r(e);var a=n("140e"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},a418:function(t,e,n){},ab52:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},b877:function(t,e,n){"use strict";n.r(e);var a=n("ab52"),i=n("9f89");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("ef9f");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},ef9f:function(t,e,n){"use strict";var a=n("a418"),i=n.n(a);i.a}},[["7d65","common/runtime","common/vendor"]]]);
});
require('pages/oreder-detail/oreder-detail.js');
__wxRoute = 'pages/repertory/repertory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/repertory/repertory.js';

define('pages/repertory/repertory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/repertory/repertory"],{"1d4e":function(e,t,r){"use strict";(function(e){r("d471"),r("921b");a(r("66fd"));var t=a(r("e473"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"20c0":function(e,t,r){"use strict";r.r(t);var a=r("f2a3"),n=r.n(a);for(var o in a)"default"!==o&&function(e){r.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},"2a85":function(e,t,r){"use strict";var a=r("c3a2"),n=r.n(a);n.a},c3a2:function(e,t,r){},e473:function(e,t,r){"use strict";r.r(t);var a=r("f489"),n=r("20c0");for(var o in n)"default"!==o&&function(e){r.d(t,e,function(){return n[e]})}(o);r("2a85");var i=r("2877"),s=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},f2a3:function(e,t,r){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("3d3b")),o=i(r("752b"));function i(e){return e&&e.__esModule?e:{default:e}}var s,u=function(){return r.e("components/uni-nav-bar/uni-nav-bar").then(r.bind(null,"85b0"))},c=function(){return r.e("components/over").then(r.bind(null,"35b2"))},d=function(){return r.e("components/img-lazy/img-lazy").then(r.bind(null,"b066"))},p=null,l={repList:[],number:"",statusCode:"",p_num:"",isShow:!1,list:"",hide:!1,name:"",current:-1,over:!1,cWidth:"",cHeight:"",pixelRatio:1,qiunHdid:!1,textarea:"",info:{name:"",num:"",time:""},numList:[]},m={components:{uniNavBar:u,imglazy:d,over:c},data:function(){return{mvc:{repList:[],number:"",statusCode:"",p_num:"",isShow:!1,list:"",hide:!1,name:"",current:-1,over:!1,cWidth:"",cHeight:"",pixelRatio:1,qiunHdid:!1,textarea:"",info:{name:"",num:"",time:""},numList:[]},imglazyStyle:"border-radius: 10upx;"}},onLoad:function(){var t=this;setTimeout(function(){l=t.mvc,n.default.pageTitle(t.$t("repertory").title),s=t,l.cWidth=e.upx2px(750),l.cHeight=e.upx2px(500);var r=e.getStorageSync("userinfo");l.number=r.hdid,t.mvc=l},300)},computed:{i18n:function(){return this.$t("repertory")}},methods:{radioChange:function(e){for(var t=this,r=0;r<t.$t("repertory").items.length;r++)if(t.$t("repertory").items[r].value===e.target.value){"a"==e.target.value&&(l.name="",l.repList=[],l.qiunHdid=!1,l.over=!1,l.hide=!1),"b"==e.target.value&&(l.p_num="",l.repList=[],l.qiunHdid=!1,l.over=!1,l.hide=!1),l.current=r;break}t.mvc=l},back:function(){e.navigateBack({delta:1})},navToDetailPage:function(t){console.log(a(t," at pages\\repertory\\repertory.vue:245")),e.navigateTo({url:"/pages/product/product?productId=".concat(t)})},onScan:function(){var t=this;e.scanCode({success:function(e){console.log(a("条码类型："+e.scanType," at pages\\repertory\\repertory.vue:256")),console.log(a("条码内容："+e.result," at pages\\repertory\\repertory.vue:257")),l.p_num=e.result,t.loadPost()}})},onKeyInput:function(e){var t=e.currentTarget.dataset.key;l[t]=e.detail.value},search:function(){var e=this;return-1==l.current?(e.$api.msg(e.$t("repertory").p1),!1):1==l.current&&""==l.p_num?(e.$api.msg(e.$t("repertory").p2),!1):2==l.current&&""==l.name?(e.$api.msg(e.$t("repertory").p3),!1):void e.loadPost()},loadPost:function(){var t=this;l.hide=!1,l.qiunHdid=!1,l.over=!1,n.default.load(this.$t("index").loadmsg);var r={name:l.name},o={p_num:l.p_num};l.repList=[],0!=l.current?t.$ajax.reqView(o,r).then(function(r){if(0!=r.length){var n=r;n.forEach(function(e,r){e.img=t.$store.getters.imgShow+"/thumb/"+e.CODE2+".jpg?x-oss-process=style/300",e.QTY>0?e.all=parseFloat(parseInt(e.RTLPRC)*parseFloat(e.QTY)):e.all=0}),l.statusCode=r.statusCode,l.repList=n,console.log(a(l.repList," at pages\\repertory\\repertory.vue:318")),l.over=!0,l.p_num=""}else l.hide=!0;e.hideLoading()}):this.repCharts(),t.mvc=l},repCharts:function(){var t=this;t.$ajax.reqRank().then(function(r){var a={series:[]};for(var n in l.info=r.zong,r.money){var o="";switch(n){case"01":"家居百货",o={name:t.$t("repertory").category[0],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"02":"健康美容",o={name:t.$t("repertory").category[1],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"03":"饰品系列",o={name:t.$t("repertory").category[2],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"04":"文体礼品",o={name:t.$t("repertory").category[3],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"05":"季节产品",o={name:t.$t("repertory").category[4],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"06":"精品包饰",o={name:t.$t("repertory").category[5],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"07":"儿童玩具",o={name:t.$t("repertory").category[6],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"08":"毛绒公仔",o={name:t.$t("repertory").category[7],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"09":"数码配件",o={name:t.$t("repertory").category[8],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"10":"休闲食品",o={name:t.$t("repertory").category[9],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o);break;case"14":"物料耗材",o={name:t.$t("repertory").category[10],data:r.money[n],qty:r.num[n],show:!0},a.series.push(o)}}t.showPie("canvasPie",a),l.qiunHdid=!0,l.numList=a.series,t.mvc=l,e.hideLoading()})},showPie:function(t,r){p=new o.default({$this:s,canvasId:t,type:"pie",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:l.pixelRatio,series:r.series,animation:!0,width:l.cWidth*l.pixelRatio,height:l.cHeight*l.pixelRatio,dataLabel:!0,extra:{pie:{}}}),e.hideLoading()},touchPie:function(e){p.showToolTip(e,{format:function(e){return e.name+":"+e.data+"元"}})},changeData:function(){if(isJSON(l.textarea)){var e=JSON.parse(l.textarea);p.updateData({series:e.series,categories:e.categories})}}}};t.default=m}).call(this,r("6e42")["default"],r("0de9")["default"])},f489:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n})}},[["1d4e","common/runtime","common/vendor"]]]);
});
require('pages/repertory/repertory.js');
__wxRoute = 'pages/sale/sale';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sale/sale.js';

define('pages/sale/sale.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sale/sale"],{"0b70":function(t,n,e){"use strict";(function(t){e("d471"),e("921b");a(e("66fd"));var n=a(e("674e"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"5e75":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"674e":function(t,n,e){"use strict";e.r(n);var a=e("5e75"),o=e("6a90");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("fd84");var u=e("2877"),l=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=l.exports},"6a90":function(t,n,e){"use strict";e.r(n);var a=e("8e00"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},"8e00":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;o(e("c06f"));var a=o(e("3d3b"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"926e"))},u=function(){return e.e("components/empty").then(e.bind(null,"aea4"))},l=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"85b0"))},s=function(){return e.e("components/over").then(e.bind(null,"35b2"))},r={saleList:[],cartoon:!1,over:!1},c={components:{uniNavBar:l,uniLoadMore:i,empty:u,over:s},data:function(){return{navList:[{state:0,text:"申报产品",loadingType:"more",saleList:[]},{state:1,text:"寄回产品",loadingType:"more",saleList:[]}],mvc:{saleList:[],cartoon:!1,over:!1}}},computed:{i18n:function(){return this.$t("sale")}},onLoad:function(t){a.default.pageTitle(this.$t("sale").title),this.loadData()},onShow:function(){t.showLoading({title:"正在加载"}),this.loadData()},methods:{back:function(){t.navigateBack({delta:1})},loadData:function(n){var e=this;r.over=!1,e.$ajax.saleData().then(function(t){r.saleList=t.list,0==r.saleList.length?r.cartoon=!0:r.over=!0}),this.mvc=r,t.hideLoading()},details:function(n){t.navigateTo({url:"/pages/sale-detail/sale-detail?id="+n})},addSale:function(n){t.navigateTo({url:"/pages/sale-add/sale-add"})},navlogistics:function(n){t.navigateTo({url:"/pages/logistics-list/logistics-list"})}}};n.default=c}).call(this,e("6e42")["default"])},e630:function(t,n,e){},fd84:function(t,n,e){"use strict";var a=e("e630"),o=e.n(a);o.a}},[["0b70","common/runtime","common/vendor"]]]);
});
require('pages/sale/sale.js');
__wxRoute = 'pages/technology/technology';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/technology/technology.js';

define('pages/technology/technology.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/technology/technology"],{"184b":function(t,e,n){"use strict";(function(t){n("d471"),n("921b");i(n("66fd"));var e=i(n("cbf4"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},6964:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("3d3b"));function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"85b0"))},s={pics:"",src:"../../static/addHeadIcon.png"},u={components:{uniNavBar:a},data:function(){return{mvc:{pics:"",src:"../../static/addHeadIcon.png"}}},computed:{i18n:function(){return this.$t("technology")}},onLoad:function(){i.default.pageTitle(this.$t("technology").title)},methods:{back:function(){t.navigateBack({delta:1})},formSubmit:function(e){var n=e.detail.value;if(n.ID)if(n.remotepass)if(n.qq)if(n.tel)if(n.problem)if(s.pics){var o=t.getStorageSync("userinfo"),a={uname:o.username,problem:n.problem,tel:n.tel,qq:n.qq,remotepass:n.remotepass,pics:s.pics};i.default.post("/index.php/Home/User/supporter",a,function(e){that.$api.msg(that.$t("index").msg3),t.navigateBack({delta:1})})}else this.$api.msg(this.$t("technology").inputImg);else this.$api.msg(this.$t("technology").inputProblem);else this.$api.msg(this.$t("technology").inputTel);else this.$api.msg(this.$t("technology").inputQQ);else this.$api.msg(this.$t("technology").inputPass);else this.$api.msg(this.$t("technology").inputId)},upload:function(){var e=t.getStorageSync("userinfo"),n=this;t.chooseImage({success:function(i){var o=i.tempFilePaths,a=t.uploadFile({url:"https://api.xmvogue.com/index.php/Home/User/uppic",filePath:o[0],name:"file",formData:{hdid:e.hdid,tmp_name:"ximei.jpg",uid:e.uid,sign:e.token},success:function(e){s.pics="http://ximiphoto.oss-cn-hangzhou.aliyuncs.com/shouhou/"+e.data+"?x-oss-process=style/300",s.src=s.pics,n.mvc=s,t.showToast({title:"上传成功"})}});a.onProgressUpdate(function(t){t.progress})}})}}};e.default=u}).call(this,n("6e42")["default"])},b44f:function(t,e,n){"use strict";n.r(e);var i=n("6964"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},baba:function(t,e,n){"use strict";var i=n("d48f"),o=n.n(i);o.a},cbf4:function(t,e,n){"use strict";n.r(e);var i=n("d5b8"),o=n("b44f");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("baba");var s=n("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},d48f:function(t,e,n){},d5b8:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}},[["184b","common/runtime","common/vendor"]]]);
});
require('pages/technology/technology.js');
__wxRoute = 'pages/category/leftCategory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/leftCategory.js';

define('pages/category/leftCategory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/leftCategory"],{"18fb":function(t,e,n){"use strict";(function(t){n("d471"),n("921b");o(n("66fd"));var e=o(n("9553"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"646a":function(t,e,n){"use strict";var o=n("df72"),i=n.n(o);i.a},9553:function(t,e,n){"use strict";n.r(e);var o=n("e2ff"),i=n("c17c");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("646a");var c=n("2877"),r=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"9ba3":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),a=r(n("6a98")),c=r(n("3d3b"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,o,i,a,c){try{var r=t[a](c),u=r.value}catch(s){return void n(s)}r.done?e(u):Promise.resolve(u).then(o,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function c(t){u(a,o,i,c,r,"next",t)}function r(t){u(a,o,i,c,r,"throw",t)}c(void 0)})}}var l=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},f={height:0,categoryActive:0,scrollTop:0,scrollLeftTop:0,scrollHeight:0,classifyData:[],arr:[0,384,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],leftItemHeight:51,navLeftHeight:0,diff:0,tabBarHeight:0,text:"",placeholderSrc:"../../../static/60x60.png",statusHeight:0,gdgg:"",rightHide:!1},g={components:{imglazy:l},data:function(){return{mvc:{height:0,categoryActive:0,scrollTop:0,scrollLeftTop:0,scrollHeight:0,classifyData:[],arr:[0,384,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],leftItemHeight:51,navLeftHeight:0,diff:0,tabBarHeight:0,text:"",statusHeight:0,rightHide:!1}}},onLoad:function(){var e=this;setTimeout(function(){var n=t.getStorageSync("userinfo");if(!n)return e.$store.dispatch("showLogin"),!1;c.default.pageTitle(e.$t("list").title),f.height=t.getSystemInfoSync().windowHeight-f.tabBarHeight,f.windowHeight=t.getSystemInfoSync().windowHeight,e.getTitleHeight(),e.loadData()})},methods:{loadData:function(){c.default.load(this.$t("index").loadmsg);var e=this;e.$ajax.categories_app().then(function(t){console.log(o(t," at pages\\category\\leftCategory.vue:97")),t.forEach(function(t,e){14==t.cls_id&&(t.child=[{cls_id:"14",cls_name:"物料耗材",lazy:[{src:"0"},{src:"0"},{src:"0"}],index:"14"}])}),f.classifyData=t,e.$nextTick(function(){e.getHeightList()}),f.rightHide=!0,e.mvc=f}),t.hideLoading(),this.scroll()},getTitleHeight:function(){var e=this;t.getSystemInfo({success:function(t){return t.screenHeight<750?(f.statusHeight="80px",e.mvc=f,!1):t.screenHeight<950?(f.statusHeight="95px",e.mvc=f,!1):t.screenHeight>1e3?(f.statusHeight="140px",e.mvc=f,!1):void 0}})},getHeightList:function(){var e=t.createSelectorQuery();e.selectAll(".nav-left-item").boundingClientRect(function(t){f.leftItemHeight=t[0].height,f.navLeftHeight=f.leftItemHeight*a.default.length,f.diff=f.navLeftHeight-f.height}),e.selectAll(".box").boundingClientRect(function(t){var e=[0],n=0;t.forEach(function(t){n+=t.height,e.push(n)}),console.log(o(f.arr," at pages\\category\\leftCategory.vue:174")),f.arr=e}).exec()},scroll:function(t){this.scrillType(t)},scrillType:function(t){this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){void 0!=t&&(f.scrollHeight=t.detail.scrollTop);for(var e=0;e<f.arr.length;e++){var n=f.arr[e],o=f.arr[e+1];if(!o||f.scrollHeight>=n&&f.scrollHeight<o)return f.categoryActive=e,f.diff>0&&(f.scrollLeftTop=Math.round(f.categoryActive*f.diff/(a.default.length-1))),!1}f.categoryActive=0,f.timeoutId=void 0},10),this.mvc=f},categoryClickMain:function(t){f.categoryActive=t,f.scrollTop=f.arr[t]},cart:function(e){t.navigateTo({url:"/pages/product/list?listId=".concat(e)})},navSearch:function(){t.navigateTo({url:"/pages/search/search"})},onScan:function(){t.scanCode({success:function(e){console.log(o("条码类型："+e.scanType," at pages\\category\\leftCategory.vue:227")),console.log(o("条码内容："+e.result," at pages\\category\\leftCategory.vue:228")),t.navigateTo({url:"/pages/product/product?productId=".concat(e.result)})}})},categoryError:function(t){}},onBackPress:function(){var e=plus.android.runtimeMainActivity();plus.android.runtimeMainActivity(),plus.runtime.quit=function(){e.moveTaskToBack(!1)},t.closeSocket(),t.onSocketClose(function(t){console.log(o("WebSocket 已关闭！"," at pages\\category\\leftCategory.vue:246"))}),plus.nativeUI.toast=function(n){if("再按一次退出应用"==n)return e.moveTaskToBack(!1),!1;t.showToast({title:"再按一次退出应用",icon:"none"})}},onNavigationBarSearchInputClicked:function(){var e=s(i.default.mark(function e(n){return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.navigateTo({url:"/pages/search/search"});case 1:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onNavigationBarButtonTap:function(e){var n=e.index;if(0===n)t.scanCode({success:function(e){console.log(o("条码类型："+e.scanType," at pages\\category\\leftCategory.vue:276")),console.log(o("条码内容："+e.result," at pages\\category\\leftCategory.vue:277")),t.navigateTo({url:"/pages/product/product?productId=".concat(e.result)})}});else if(1===n){var i=getCurrentPages(),a=i[i.length-1],c=a.$getAppWebview();c.hideTitleNViewButtonRedDot({index:n}),t.navigateTo({url:"/pages/notice/notice"})}}};e.default=g}).call(this,n("6e42")["default"],n("0de9")["default"])},c17c:function(t,e,n){"use strict";n.r(e);var o=n("9ba3"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},df72:function(t,e,n){},e2ff:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["18fb","common/runtime","common/vendor"]]]);
});
require('pages/category/leftCategory.js');
__wxRoute = 'pages/product/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/list.js';

define('pages/product/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"0683":function(e,t,n){},"162e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"39ba":function(e,t,n){"use strict";var a=n("0683"),i=n.n(a);i.a},"39e4":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("3d3b"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"926e"))},r=function(){return n.e("components/uni-number-box").then(n.bind(null,"a528"))},s=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"85b0"))},d=function(){return n.e("components/empty").then(n.bind(null,"aea4"))},u=function(){return n.e("components/uni-scrollTo/uni-scrollTo").then(n.bind(null,"06e7"))},c=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},g={title:"",thispage:0,Allpage:0,cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[],listId:"",page:1,pageSize:20,activeId:"",downNum:"",navTitle:"",cartoon:!1,rightnavhide:!0,prciceHdid:!1,navHeight:0,type:"add",bind:"",China:""},p={components:{uniNavBar:s,uniLoadMore:l,uniNumberBox:r,empty:d,scrllTop:u,imglazy:c},data:function(){return{imglazyStyle:"border-radius: 10upx;",list:{title:"",thispage:0,Allpage:0,cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[],listId:"",page:1,pageSize:20,activeId:"",downNum:"",navTitle:"",cartoon:!1,rightnavhide:!0,prciceHdid:!1,navHeight:0,type:"add",bind:"",China:""}}},computed:{i18n:function(){return this.$t("list")}},onLoad:function(e){var t=this;g=this.list,i.default.load(this.$t("index").loadmsg),this.getTitleHeight(),e.tid&&(g.cateId=e.tid),e.listId&&(g.listId=e.listId),setTimeout(function(){t.loadData()},300)},onPageScroll:function(e){e.scrollTop>=0?g.headerPosition="fixed":g.headerPosition="absolute"},onPullDownRefresh:function(){g.page=1,g.type="refresh",this.loadData()},onReachBottom:function(){g.type="add",this.loadData()},methods:{imageError:function(e){},getTitleHeight:function(){e.getSystemInfo({success:function(e){return console.log(a(e.screenHeight," at pages\\product\\list.vue:199")),e.screenHeight<750?(g.navHeight="110px",!1):e.screenHeight<950?(g.navHeight="120px",!1):e.screenHeight>1e3?(g.navHeight="180px",!1):void 0}})},loadData:function(){var t=this,n=this,a={type:"app"};if(n.isNumber(g.listId)){var o={listId:g.listId,pagesize:g.pageSize,page:g.page,downNum:g.downNum};n.$ajax.category(o,a).then(function(t){if((null==t.list||0==t.list)&&1==t.other.thispage)return g.loadingType="nomore",e.hideLoading(),g.cartoon=!0,n.list=g,!1;2==t.nav.length&&(g.navTitle=t.nav[1].title),3==t.nav.length&&(g.navTitle=t.nav[2].title),4==t.nav.length&&(g.navTitle=t.nav[3].title),0==t.sub_cls.length&&(g.rightnavhide=!1),n.allPage(t)})}else{var l={page:g.page,downNum:g.downNum};switch(g.listId){case"new":n.$ajax.hNew(l,a).then(function(e){g.navTitle=e.nav[1].title,n.allPage(e)});break;case"supplement":n.$ajax.hBu(l,a).then(function(e){g.navTitle=e.nav[1].title,n.allPage(e)});break;case"dis":n.$ajax.hDis(l,a).then(function(e){g.navTitle=e.nav[1].title,n.allPage(e)});break;case"sell":n.$ajax.hSale(l,a).then(function(e){g.navTitle=e.nav[1].title,n.allPage(e)});break;case"China":i.default.post("/index.php/Home/Promotion/China_products?p="+n.page+"&cls=01&num="+n.downNum,a,function(a){if(!a.list)return t.$api.msg(a),e.hideLoading(),g.loadingType="nomore",!1;g.navTitle=a.nav[1].title,n.allPage(a)});break;case"China70":i.default.post("/index.php/Home/Promotion/China70?p="+n.page+"&num="+n.downNum,a,function(e){g.navTitle=e.nav[2].title,e.other.thispage=1,e.other.totalPage=1,n.allPage(e)});break}}},allPage:function(t){var n=this;if(null==t.list||0==t.other.totalPage)return g.loadingType="nomore",e.hideLoading(),n.list=g,!1;g.prciceHdid=!0,g.Allpage=t.other.totalPage,g.thispage=t.other.thispage;var a=t.list;g.cateList=t.sub_cls;for(var i=0;i<a.length;i++){var o=n.$store.getters.imgShow+"/thumb/"+a[i].item_no+".jpg?x-oss-process=style/300";a[i].image=o,a[i].allNum=parseInt(a[i].spec),a[i].min=parseInt(a[i].spec),a[i].circleHidden=!1,"0"!=a[i].cnum&&(a[i].circleHidden=!0)}var l=a;if(g.loadingType=t.other.thispage>t.other.totalPage?"nomore":"more","add"==g.type){if(g.page=g.page+1,"nomore"===g.loadingType)return void(n.list=g);g.loadingType="loading"}else g.loadingType="more";if("refresh"==g.type){if(g.goodsList=[],e.stopPullDownRefresh(),g.page=g.page+1,"nomore"===g.loadingType)return void(n.list=g);g.loadingType="loading"}if(l.length<20)return g.loadingType="nomore",e.hideLoading(),g.goodsList=g.goodsList.concat(l),n.list=g,!1;e.hideLoading(),g.goodsList=g.goodsList.concat(l),n.list=g},isNumber:function(e){var t=/^\d+(\.\d+)?$/,n=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;return!(!t.test(e)&&!n.test(e))},tabClick:function(t){g.bind="active",g.filterIndex=t,g.page=1,g.type="refresh",2==t?(g.priceOrder=1===g.priceOrder?2:1,1==g.priceOrder&&(g.downNum="desc"),2==g.priceOrder&&(g.downNum="asc"),this.loadData()):(g.priceOrder=0,g.downNum="",this.loadData()),e.pageScrollTo({duration:300,scrollTop:0}),i.default.load(this.$t("index").loadmsg)},toggleCateMask:function(e){var t="show"===e?10:300,n="show"===e?1:0;g.cateMaskState=2,setTimeout(function(){g.cateMaskState=n},t),this.list=g},changeCate:function(t){var n=this;g.goodsList=[];var o=new Promise(function(e,n){g.listId=t.target.id,g.page=1,e(g.listId)});o.then(function(e){console.log(a(e," at pages\\product\\list.vue:450")),n.toggleCateMask()}),g.activeId=t.target.id,this.toggleCateMask(),e.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),i.default.load(this.$t("index").loadmsg)},navToDetailPage:function(t){"dis"==g.listId?e.navigateTo({url:"/pages/product/product?productId=".concat(t.item_no,"&num=").concat(t.discount)}):e.navigateTo({url:"/pages/product/product?productId=".concat(t.item_no)})},bindChange:function(e){g.goodsList[e.index].allNum=e.number,this.list=g},shopping:function(e){var t=this,n={item_no:e.item_no,allNum:e.allNum};t.$ajax.addShop(n).then(function(n){"success"==n.result?(t.$api.msg(t.$t("index").msg1),e.circleHidden=!0,e.cnum=parseInt(e.cnum)+parseInt(e.allNum)):t.$api.msg(n.msg)})},stopPrevent:function(){},back:function(){e.navigateBack({delta:1})}}};t.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},"41a5":function(e,t,n){"use strict";(function(e){n("d471"),n("921b");a(n("66fd"));var t=a(n("8787"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7db2":function(e,t,n){"use strict";n.r(t);var a=n("39e4"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},8787:function(e,t,n){"use strict";n.r(t);var a=n("162e"),i=n("7db2");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("39ba");var l=n("2877"),r=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports}},[["41a5","common/runtime","common/vendor"]]]);
});
require('pages/product/list.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{2367:function(t,e,a){"use strict";(function(t){a("d471"),a("921b");i(a("66fd"));var e=i(a("241b"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"241b":function(t,e,a){"use strict";a.r(e);var i=a("b4e9"),n=a("c511");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("6e53");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"6e53":function(t,e,a){"use strict";var i=a("829f"),n=a.n(i);n.a},"829f":function(t,e,a){},"889a":function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("3d3b"));function o(t){return t&&t.__esModule?t:{default:t}}var s=function(){return a.e("components/uni-number-box").then(a.bind(null,"a528"))},r=function(){return a.e("components/uni-load-more/uni-load-more").then(a.bind(null,"926e"))},l=function(){return a.e("components/uni-scrollTo/uni-scrollTo").then(a.bind(null,"06e7"))},u=function(){return a.e("components/img-lazy/img-lazy").then(a.bind(null,"b066"))},c={statusHeight:0,historyList:[],isHistory:!0,text:"",thispage:0,Allpage:0,all:0,sort:!1,recList_a:[],recList_b:[],page:1,loadingType:"more",type:"add",filterIndex:0,priceOrder:0,downNum:"",getTop:0,getTop2:0,appwidth:"100%",scrllHdid:!1,over:!1,satus_a:!1,satus_b:!1},d={components:{uniNumberBox:s,uniLoadMore:r,scrllTop:l,imglazy:u},data:function(){return{imglazyStyle:"border-radius: 10upx;",list:{statusHeight:0,historyList:[],isHistory:!0,text:"",thispage:0,Allpage:0,all:0,sort:!1,recList_a:[],recList_b:[],page:1,loadingType:"more",type:"add",filterIndex:0,priceOrder:0,downNum:"",getTop:0,getTop2:0,appwidth:"100%",scrllHdid:!1,over:!1,satus_a:!1,satus_b:!1}}},onLoad:function(){var t=this;setTimeout(function(){c=t.list,t.getTitleHeight(),t.seachData()},300)},computed:{i18n:function(){return this.$t("search")}},methods:{bindnav:function(e){switch(e){case 0:t.navigateTo({url:"/pages/product/list?listId=new"});break;case 1:t.navigateTo({url:"/pages/product/list?listId=China"})}},seachData:function(){c.satus_a=!0,c.recList_a=this.$t("search").recList_a,this.list=c},getTitleHeight:function(){var e=this;t.getSystemInfo({success:function(t){return console.log(i(t.screenHeight," at pages\\search\\search.vue:214")),t.screenHeight<740?(c.statusHeight="90px",c.getTop="32px",1==c.sort?c.getTop2="120px":c.getTop2="70px",e.list=c,!1):t.screenHeight<950?(c.statusHeight="95px",c.getTop="40px",1==c.sort?c.getTop2="130px":c.getTop2="80px",e.list=c,!1):t.screenHeight>1e3?(c.statusHeight="140px",c.getTop="30px",1==c.sort?c.getTop2="220px":c.getTop2="160px",e.list=c,!1):void 0}})},inputChange:function(t){var e=t.currentTarget.dataset.key;c[e]=t.detail.value},postData:function(){var t=this;if(""==c.text)return c.isHistory=!0,c.over=!0,t.list=c,this.$api.msg(t.$t("search").pl),!1;c.page=1,c.over=!1,c.historyList=[],n.default.load(this.$t("index").loadmsg),this.loadData()},bindSea:function(t){c.text=t,n.default.load(this.$t("index").loadmsg),this.loadData()},onPullDownRefresh:function(){""!=c.text?(c.page=1,c.type="refresh",this.loadData()):t.stopPullDownRefresh()},onReachBottom:function(){c.type="add",this.loadData()},bindconfirm:function(){this.loadData()},loadData:function(e){var a=this;c.over=!1;var i={text:c.text,page:c.page,downNum:c.downNum};a.$ajax.searchData(i).then(function(e){var i=e.list;if(null==e.list||0==e.other.totalPage)return c.loadingType="nomore",c.isHistory=!1,c.over=!0,a.list=c,t.hideLoading(),!1;0==e.list&&0==e.other.totalPage&&(c.historyList=[],c.isHistory=!1,a.over=!0);var n=[];for(var o in c.Allpage=e.other.totalPage,c.thispage=e.other.thispage,c.all=e.other.all,c.sort=!0,c.scrllHdid=!0,a.getTitleHeight(),i)i[o].image=a.$store.getters.imgShow+"/thumb/"+i[o].item_no+".jpg?x-oss-process=style/204",i[o].allNum=parseInt(i[o].spec),i[o].circleHidden=!1,i[o].circleText=0,"0"!=i[o].cnum&&(i[o].circleHidden=!0),n.push(i[o]);if(c.isHistory=!1,c.loadingType=parseInt(e.other.thispage)>e.other.totalPage?"nomore":"more","add"==c.type){if(c.page=c.page+1,"nomore"===c.loadingType)return void(a.list=c);c.loadingType="loading"}else c.loadingType="more";if("refresh"==c.type){if(c.historyList=[],t.stopPullDownRefresh(),c.page=c.page+1,"nomore"===c.loadingType)return void(a.list=c);c.loadingType="loading"}if(n.length<20)return c.loadingType="nomore",t.hideLoading(),c.historyList=c.historyList.concat(n),!1;t.hideLoading(),c.historyList=c.historyList.concat(n),a.list=c})},bindChange:function(t){c.historyList[t.index].allNum=t.number,this.list=c},shopping:function(t){var e=this,a={item_no:t.item_no,allNum:t.allNum};e.$ajax.addShop(a).then(function(a){"success"==a.result?(e.$api.msg(e.$t("index").msg1),t.circleHidden=!0,t.cnum=parseInt(t.cnum)+parseInt(t.allNum)):e.$api.msg(a.msg)})},goback:function(){t.navigateBack({delta:1})},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?productId=".concat(e)})},onScan:function(){t.scanCode({success:function(e){console.log(i("条码类型："+e.scanType," at pages\\search\\search.vue:423")),console.log(i("条码内容："+e.result," at pages\\search\\search.vue:424")),t.navigateTo({url:"/pages/product/product?productId=".concat(e.result)})}})},tabClick:function(e){c.filterIndex=e,c.page=1,c.type="refresh",2===e?(c.priceOrder=1===c.priceOrder?2:1,1==c.priceOrder&&(c.downNum="desc"),2==c.priceOrder&&(c.downNum="asc"),this.loadData()):(c.priceOrder=0,c.downNum="",this.loadData()),t.pageScrollTo({duration:300,scrollTop:0}),n.default.load(this.$t("index").loadmsg)}},onNavigationBarSearchInputChanged:function(t){c.text=t.text}};e.default=d}).call(this,a("6e42")["default"],a("0de9")["default"])},b4e9:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},c511:function(t,e,a){"use strict";a.r(e);var i=a("889a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a}},[["2367","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/market/market';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/market/market.js';

define('pages/market/market.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/market/market","components/uni-card/uni-card"],{"15bd":function(t,e,a){"use strict";a.r(e);var n=a("c863"),i=a("6b1b");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("21da");var o=a("2877"),u=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"21da":function(t,e,a){"use strict";var n=a("5c05"),i=a.n(n);i.a},"339b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-card",props:{title:String,extra:String,note:String,thumbnail:String,isFull:{type:[Boolean,String],default:!1}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"409a":function(t,e,a){"use strict";var n=a("edad"),i=a.n(n);i.a},5041:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r(a("ffce"));var n=r(a("3d3b"));a("3e59");var i=r(a("752b"));function r(t){return t&&t.__esModule?t:{default:t}}var o,u=function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"85b0"))},c=null,s={num:"",isShow:!1,hide:!1,all:[],name:""},d={components:{uniNavBar:u},data:function(){var t=this.getDate({format:!0}),e=this.postDate({format:!0});return{mvc:{num:"",isShow:!1,hide:!1,all:[],name:"",cWidth:"",cHeight:"",pixelRatio:1,itemCount:20,sliderMax:50,showLine:0},dateStart:t,dateEnd:e}},onLoad:function(){var e=this;setTimeout(function(){s=e.mvc,n.default.pageTitle(e.$t("market").title);var a=t.getStorageSync("userinfo");s.num=a.hdid,o=e,s.cWidth=t.upx2px(750),s.cHeight=t.upx2px(500),e.mvc=s},300)},computed:{i18n:function(){return this.$t("market")},startDate:function(){return this.getDate("start")},endDate:function(){return this.postDate("end")}},methods:{showLineA:function(e,a){c=new i.default({$this:o,canvasId:e,type:"line",padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,dataLabel:!0,dataPointShape:!0,background:"#FFFFFF",pixelRatio:s.pixelRatio,categories:a.categories,series:a.series,animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left",dashLength:8},yAxis:{gridType:"dash",splitNumber:8,min:10,max:100,format:function(t){return t.toFixed(0)}},width:s.cWidth*s.pixelRatio,height:s.cHeight*s.pixelRatio,extra:{lineStyle:"straight"}}),t.hideLoading()},back:function(){t.navigateBack({delta:1})},bindBeginTime:function(t){this.dateStart=t.target.value},bindExpireTime:function(t){this.dateEnd=t.target.value},inputChange:function(t){var e=t.currentTarget.dataset.key;s[e]=t.detail.value,this.mvc=s},getDate:function(t){var e=new Date,a=new Date(e),n=a.getFullYear(),i=a.getMonth(),r=a.getDate();return"start"==t?n-=60:"end"==t&&(n+=2),0==i&&(n=parseInt(n)-1,i=12),i>12&&(n=parseInt(n),i=1),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},postDate:function(t){var e=new Date,a=new Date(e),n=a.getFullYear(),i=a.getMonth()+1,r=a.getDate();return"start"==t?n-=60:"end"==t&&(n+=2),0==i&&(n=parseInt(n)-1,i=12),i>12&&(n=parseInt(n)+1,i=1),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},search:function(){t.showLoading({title:this.$t("market").loading});var e=this;e.all=[],e.name="",s.isShow=!1,s.hdid=!1;var a={sdate:this.dateStart,edate:this.dateEnd};this.postsale(a)},postsale:function(e){var a=this,n=this;n.$ajax.marketRank(e).then(function(i){if(null==i||0==i.length)return s.hide=!0,t.hideLoading(),!1;var r={categories:[],series:[]},o={name:a.$t("market").num,data:[]},u={name:a.$t("market").money,data:[]};for(var c in i.num){var d="";switch(c){case"01":d=a.$t("market").category[0];break;case"02":d=a.$t("market").category[1];break;case"03":d=a.$t("market").category[2];break;case"04":d=a.$t("market").category[3];break;case"05":d=a.$t("market").category[4];break;case"06":d=a.$t("market").category[5];break;case"07":d=a.$t("market").category[6];break;case"08":d=a.$t("market").category[7];break;case"09":d=a.$t("market").category[8];break;case"10":d=a.$t("market").category[9];break;case"14":d=a.$t("market").category[10]}r.categories.push(d),o.data.push(i.num[c])}for(var l in i.money)u.data.push(i.money[l]);r.series.push(o),r.series.push(u),n.showLineA("canvasLineA",r),n.getsale(e)})},getsale:function(e){var a=this;a.$ajax.marketView(e).then(function(e){var a=e;if(0==a.length)return s.hide=!0,t.hideLoading(),!1;s.hide=!1,s.all=e[0].zong,s.name=e[0].NAME,s.isShow=!0}),a.mvc=s},hidePopup:function(){this.isShow=!1},touchLineA:function(t){c.scrollStart(t)},moveLineA:function(t){c.scroll(t)},touchEndLineA:function(t){c.scrollEnd(t),c.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})},navdetail:function(e,a){t.navigateTo({url:"/pages/market-detail/market-detail?time1="+e+"&time2="+a})}}};e.default=d}).call(this,a("6e42")["default"])},"5c05":function(t,e,a){},6766:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"6b1b":function(t,e,a){"use strict";a.r(e);var n=a("5041"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"865a":function(t,e,a){"use strict";(function(t){a("d471"),a("921b");n(a("66fd"));var e=n(a("15bd"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"904e":function(t,e,a){"use strict";a.r(e);var n=a("339b"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},c863:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},edad:function(t,e,a){},ffce:function(t,e,a){"use strict";a.r(e);var n=a("6766"),i=a("904e");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("409a");var o=a("2877"),u=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports}},[["865a","common/runtime","common/vendor"]]]);
});
require('pages/market/market.js');
__wxRoute = 'pages/sale-detail/sale-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sale-detail/sale-detail.js';

define('pages/sale-detail/sale-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sale-detail/sale-detail"],{"2a95":function(e,t,n){},aa1e:function(e,t,n){"use strict";var i=n("2a95"),a=n.n(i);a.a},ab26:function(e,t,n){"use strict";n.r(t);var i=n("ed1a"),a=n("e2c5");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("aa1e");var s=n("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},bf0f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("3d3b"));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.e("components/uni-steps/uni-steps").then(n.bind(null,"598c5"))},s=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},u={mid:"",saleimg:"",code:"",name:"",num:"",saleList:[],all:{lx:"",zt:"",qty:"",shsn:""}},c={components:{uniSteps:o,imglazy:s},data:function(){return{imglazyStyle:"border-radius: 10upx;",mvc:{mid:"",saleimg:"",code:"",name:"",num:"",saleList:[],all:{lx:"",zt:"",qty:"",shsn:""}}}},computed:{i18n:function(){return this.$t("saleDetail")}},onLoad:function(t){var n=this;setTimeout(function(){u=n.mvc,i.default.pageTitle(n.$t("saleDetail").title),e.showLoading({title:n.$t("saleDetail").loading}),u.mid=t.id,n.loadData()},300)},methods:{loadData:function(){var t=this,n={mid:u.mid};t.$ajax.saleView(n).then(function(n){var i=n.list,a=e.getStorageSync("userinfo");i.forEach(function(e,n){e.img=t.$store.getters.imgShow+"/thumb/"+e.item_no+".jpg?x-oss-process=style/80",0!=e.pics.length&&e.pics.forEach(function(e,n){e.img=t.$store.getters.imgShow+"/shouhou/"+a.hdid+"/"+e.filename+"?x-oss-process=style/80"}),""==e.reason&&(e.reason="无")}),u.saleList=i,u.all=n.info,t.mvc=u,e.hideLoading()})},imageError:function(e,t){u.saleList[t].img="http://dh.xmcpcn.com/Public/images/none.jpg"},revocation:function(){var t=this;e.showModal({content:t.$t("saleDetail").content,cancelText:t.$t("index").cancel,confirmText:t.$t("index").confirm,success:function(n){if(n.confirm){var i={mid:u.mid};t.$ajax.saleDele(i).then(function(n){1==n?(e.showToast({title:t.$t("saleDetail").success}),setTimeout(function(){e.navigateBack({delta:1})},800)):t.$api.msg(n)})}}})},previewImage:function(t,n){var i=this,a=e.getStorageSync("userinfo"),o=i.$store.getters.imgShow+"/shouhou/"+a.hdid+"/"+t+"?x-oss-process=style/800",s=u.saleList[n].pics,c=[];s.forEach(function(e,t){e.preUrl=i.$store.getters.imgShow+"/shouhou/"+a.hdid+"/"+e.filename+"?x-oss-process=style/800",c.push(e.preUrl)}),e.previewImage({current:o,urls:c})}}};t.default=c}).call(this,n("6e42")["default"])},dda7:function(e,t,n){"use strict";(function(e){n("d471"),n("921b");i(n("66fd"));var t=i(n("ab26"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e2c5:function(e,t,n){"use strict";n.r(t);var i=n("bf0f"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},ed1a:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})}},[["dda7","common/runtime","common/vendor"]]]);
});
require('pages/sale-detail/sale-detail.js');
__wxRoute = 'pages/sale-add/sale-add';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sale-add/sale-add.js';

define('pages/sale-add/sale-add.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sale-add/sale-add"],{"106d":function(t,e,a){"use strict";var n=a("5f33"),i=a.n(n);i.a},"17c8":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("3e59");var i=o(a("3d3b"));function o(t){return t&&t.__esModule?t:{default:t}}var s={radioType:!1,radioList:[],addList:[],form:{item_no:"",num:"",reason:"",item_name:""},scrollTop:0,current:-1,navHeight:0},r={data:function(){return{title:"radio 单选框",mvc:{radioType:!1,radioList:[],addList:[],form:{item_no:"",num:"",reason:"",item_name:""},scrollTop:0,current:-1,navHeight:0}}},onLoad:function(e){var a=this;setTimeout(function(){s=a.mvc,i.default.pageTitle(a.$t("sale_add").title),s.radioList=a.$t("sale_add").radioList;var e=[];t.setStorageSync("list",e);var n=0;t.setStorageSync("radio",n),a.getTitleHeight()},300)},computed:{i18n:function(){return this.$t("sale_add")}},onShow:function(){},methods:{getTitleHeight:function(){var e=this;t.getSystemInfo({success:function(t){return console.log(n(t.screenHeight," at pages\\sale-add\\sale-add.vue:142")),t.screenHeight<750?(s.navHeight="450px",e.mvc=s,!1):t.screenHeight<950?(s.navHeight="550px",e.mvc=s,!1):t.screenHeight>1e3?(s.navHeight="600px",e.mvc=s,!1):void 0}})},check:function(e){var a=this,n=s.radioList,i=1,o=t.getStorageSync("radio");if(99==o)return a.mvc=s,!1;0==o?(t.setStorageSync("radio",i),s.radioType=!0,s.radioList[e].checked=!s.radioList[e].checked,a.mvc=s):(t.setStorageSync("radio",i),s.radioType=!0,t.showModal({content:a.$t("sale_add").hint5,cancelText:a.$t("index").cancel,confirmText:a.$t("index").confirm,success:function(a){if(a.confirm){var i=[],o={item_no:"",num:"",reason:"",item_name:""};s.form=o,t.setStorageSync("list",i),s.addList=[],n.forEach(function(t,e){t.checked=!1}),s.radioList[e].checked=!s.radioList[e].checked}}}),a.mvc=s)},loadType:function(){s.radioType||this.$api.msg(this.$t("sale_add").hint1)},confirm:function(){var e,a=this,n=s.addList,i=s.radioList;i.forEach(function(t,a){1==t.checked&&(e=t.value)});var o={item_no:[],reason:[],type:e,aqty:[]};if(0==s.addList.length)return a.$api.msg(this.$t("sale_add").hint9),!1;n.forEach(function(t,e){o.item_no.push(t.item_no),o.reason.push(t.reason),o.aqty.push(t.num)}),a.$ajax.saleAdd(o).then(function(e){t.showToast({title:a.$t("sale_add").hint8});var n=1;t.setStorageSync("radio",n),setTimeout(function(){t.navigateBack({delta:1})},800)})},onScan:function(){var e=this;t.scanCode({success:function(t){s.form.item_no=t.result,e.$ajax.saleScan().then(function(t){s.current+1==2?s.form.num=1:s.form.num=t.purchase_spec,s.form.item_name=t.item_name})}})},bindadd:function(){var e=this,a=t.getStorageSync("list");if(console.log(n(a," at pages\\sale-add\\sale-add.vue:276")),!s.radioType)return this.$api.msg(e.$t("sale_add").hint1),!1;if(!s.form.item_no)return e.$api.msg(e.$t("sale_add").hint2),!1;for(var i=0;a.length>i;i++)if(a[i].item_no==s.form.item_no)return e.$api.msg(e.$t("sale_add").hint6),!1;if(!s.form.num)return e.$api.msg(e.$t("sale_add").hint3),!1;s.form.pics=[],a.push(s.form),a.forEach(function(t,a){t.img=e.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/300"}),t.setStorageSync("list",a);var o=t.getStorageSync("list");s.addList=o;var r={item_no:"",num:"",reason:"",item_name:""};s.form=r,this.mvc=s},changeinput:function(t){var e=this,a=(s.form,s.addList,{value:t.detail.value});e.$ajax.saleName(a).then(function(t){var a,n=s.radioList;n.forEach(function(t,e){1==t.checked&&(a=t.value)}),s.form.num=2==a?1:t.purchase_spec,s.form.item_name=t.item_name,e.mvc=s})},deleteCartItem:function(e,a){s.addList;var n=t.getStorageSync("list");n.splice(a,1),s.addList.splice(a,1),t.setStorageSync("list",n)},upload:function(e,a){var n=t.getStorageSync("userinfo"),i=this;t.chooseImage({success:function(a){var o=a.tempFilePaths,r=t.uploadFile({url:"https://api.xmvogue.com/index.php/Home/User/uppic?item_no="+e.item_no,filePath:o[0],name:"file",formData:{hdid:n.hdid,tmp_name:"ximei.jpg",uid:n.uid,sign:n.token},success:function(a){var n="http://ximiphoto.oss-cn-hangzhou.aliyuncs.com/shouhou/"+a.data+"?x-oss-process=style/300";e.pics.push(n);var o=s.addList;t.setStorageSync("list",o),t.showToast({title:i.$t("sale_add").hint7});var r=99;t.setStorageSync("radio",r)}});r.onProgressUpdate(function(t){t.progress})}})}},onBackPress:function(){var e=1;t.setStorageSync("radio",e)}};e.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])},"4a44":function(t,e,a){"use strict";(function(t){a("d471"),a("921b");n(a("66fd"));var e=n(a("e3df"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"5f33":function(t,e,a){},"8bd8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},cc95:function(t,e,a){"use strict";a.r(e);var n=a("17c8"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},e3df:function(t,e,a){"use strict";a.r(e);var n=a("8bd8"),i=a("cc95");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("106d");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}},[["4a44","common/runtime","common/vendor"]]]);
});
require('pages/sale-add/sale-add.js');
__wxRoute = 'pages/logistics-add/logistics-add';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/logistics-add/logistics-add.js';

define('pages/logistics-add/logistics-add.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/logistics-add/logistics-add"],{"074f":function(e,s,t){"use strict";t.r(s);var n=t("d516"),a=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(s,e,function(){return n[e]})}(i);s["default"]=a.a},"23fe":function(e,s,t){"use strict";var n=function(){var e=this,s=e.$createElement;e._self._c},a=[];t.d(s,"a",function(){return n}),t.d(s,"b",function(){return a})},"5ef9":function(e,s,t){"use strict";var n=t("87ea"),a=t.n(n);a.a},"87ea":function(e,s,t){},a0d4:function(e,s,t){"use strict";(function(e){t("d471"),t("921b");n(t("66fd"));var s=n(t("f96d"));function n(e){return e&&e.__esModule?e:{default:e}}e(s.default)}).call(this,t("6e42")["createPage"])},d516:function(e,s,t){"use strict";(function(e,n){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,t("3e59");var a=i(t("3d3b"));function i(e){return e&&e.__esModule?e:{default:e}}var o={form:{express_name:"",express_number:"",express_fee:"",express_img:"../../static/addHeadIcon.png",express_imgName:""},expressList:[],cartoon:!1},r={data:function(){return{mvc:{form:{express_name:"",express_number:"",express_fee:"",express_img:"../../static/addHeadIcon.png",express_imgName:""},expressList:[],cartoon:!1}}},onLoad:function(){var e=this;setTimeout(function(){a.default.pageTitle(e.$t("addsend").title),e.loadData()},300)},onShow:function(){},computed:{i18n:function(){return this.$t("addsend")}},methods:{loadData:function(){var e=this;e.$ajax.logisView().then(function(s){var t=s.list;t.forEach(function(s,t){s.img=e.$store.getters.imgShow+"/thumb/"+s.item_no+".jpg?x-oss-process=style/300",s.num=""}),o.expressList=s.list,0==o.expressList.length&&(o.cartoon=!0),e.mvc=o})},confirm:function(){var s=o.form,t=this;if(s.express_name)if(s.express_number)if(s.express_fee)if("../../static/addHeadIcon.png"!=s.express_img){var i=o.expressList,r={item_no:[],num:[],express_name:s.express_name,express_number:s.express_number,express_fee:s.express_fee,express_img:s.express_imgName};0==o.expressList.length&&t.$api.msg(t.$t("addsend").p4),i.forEach(function(e,s){r.item_no.push(e.item_no),r.num.push(e.num)}),console.log(e(r," at pages\\logistics-add\\logistics-add.vue:163")),a.default.arry("/index.php/Home/User/sh_express_add",r,function(e){t.$api.msg(t.$t("index").msg3),n.navigateBack({delta:1})})}else this.$api.msg(t.$t("addsend").p5);else this.$api.msg(t.$t("addsend").p3);else this.$api.msg(t.$t("addsend").p2);else this.$api.msg(t.$t("addsend").p1)},imageError:function(e,s){e.img="http://dh.xmcpcn.com/Public/images/none.jpg"},upload:function(){var e=this,s=n.getStorageSync("userinfo");n.chooseImage({success:function(t){var a=t.tempFilePaths,i=n.uploadFile({url:"https://api.xmvogue.com/index.php/Home/User/uppic",filePath:a[0],name:"file",formData:{hdid:s.hdid,tmp_name:"ximei.jpg",uid:s.uid,sign:s.token},success:function(s){var t=s.data;t=t.split("/"),e.form.express_img="http://ximiphoto.oss-cn-hangzhou.aliyuncs.com/shouhou/"+s.data+"?x-oss-process=style/300",e.form.express_imgName=t[1],that.$api.msg(that.$t("sale_add").hint8)}});i.onProgressUpdate(function(e){e.progress})}})},navSale:function(){n.navigateTo({url:"/pages/sale-add/sale-add"})}}};s.default=r}).call(this,t("0de9")["default"],t("6e42")["default"])},f96d:function(e,s,t){"use strict";t.r(s);var n=t("23fe"),a=t("074f");for(var i in a)"default"!==i&&function(e){t.d(s,e,function(){return a[e]})}(i);t("5ef9");var o=t("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);s["default"]=r.exports}},[["a0d4","common/runtime","common/vendor"]]]);
});
require('pages/logistics-add/logistics-add.js');
__wxRoute = 'pages/logistics-list/logistics-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/logistics-list/logistics-list.js';

define('pages/logistics-list/logistics-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/logistics-list/logistics-list"],{"598c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("3d3b"));function o(t){return t&&t.__esModule?t:{default:t}}n("3e59");var i=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"926e"))},s={saleList:[],loadingType:"more",cartoon:!1,page:1,type:"add"},l={components:{uniLoadMore:i},data:function(){return{mvc:{saleList:[],loadingType:"more",cartoon:!1,page:1,type:"add"}}},onLoad:function(){},computed:{i18n:function(){return this.$t("send")}},onShow:function(t){var e=this;setTimeout(function(){a.default.pageTitle(e.$t("send").title),a.default.load(e.$t("index").loadmsg),e.loadData()},300)},methods:{loadData:function(){var e=this,n={p:1};e.$ajax.logisList(n).then(function(n){var a=n.list;if(null==a||0==n.other.totalPage)return t.hideLoading(),s.cartoon=!0,s.loadingType="nomore",!1;a.forEach(function(t,e){1==t.status&&(t.status="已清点"),2==t.status&&(t.status="完成"),0==t.status&&(t.status="待审核")}),s.saleList=a,e.pagenum(n)})},pagenum:function(e){var n=this;if(s.loadingType=e.other.thispage>e.other.totalPage?"nomore":"more","add"==s.type){if(s.page=s.page+1,"nomore"===s.loadingType)return void(n.mvc=s);s.loadingType="loading"}else s.loadingType="more";if("refresh"==s.type){if(s.saleList=[],t.stopPullDownRefresh(),s.page=s.page+1,"nomore"===s.loadingType)return void(n.mvc=s);s.loadingType="loading"}if(s.saleList.length<20)return s.loadingType="nomore",t.hideLoading(),s.saleList=s.saleList.concat(s.saleList),n.mvc=s,!1;t.hideLoading(),s.saleList=s.saleList.concat(s.saleList),n.mvc=s},onPullDownRefresh:function(){s.page=1,s.type="refresh",this.loadData()},onReachBottom:function(){s.type="add",this.loadData()},details:function(e){t.navigateTo({url:"/pages/logistics-detail/logistics-detail?id="+e})},navlogistics:function(e){t.navigateTo({url:"/pages/logistics-add/logistics-add"})}}};e.default=l}).call(this,n("6e42")["default"])},"635e":function(t,e,n){"use strict";n.r(e);var a=n("598c"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},6493:function(t,e,n){},"709e":function(t,e,n){"use strict";var a=n("6493"),o=n.n(a);o.a},9061:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},a80e:function(t,e,n){"use strict";(function(t){n("d471"),n("921b");a(n("66fd"));var e=a(n("b2f0"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b2f0:function(t,e,n){"use strict";n.r(e);var a=n("9061"),o=n("635e");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("709e");var s=n("2877"),l=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports}},[["a80e","common/runtime","common/vendor"]]]);
});
require('pages/logistics-list/logistics-list.js');
__wxRoute = 'pages/logistics-detail/logistics-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/logistics-detail/logistics-detail.js';

define('pages/logistics-detail/logistics-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/logistics-detail/logistics-detail"],{"0b80":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"32ac":function(t,e,n){"use strict";var i=n("499f"),o=n.n(i);o.a},"499f":function(t,e,n){},"8d3a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("3d3b"));function i(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/uni-steps/uni-steps").then(n.bind(null,"598c5"))},s=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},u={detaList:[],active:1,list2:[{title:"门店发货"},{title:"仓库签收"}],logList:[],mid:""},a={components:{uniSteps:o,imglazy:s},data:function(){return{imglazyStyle:"border-radius: 10upx;",mvc:{detaList:[],active:1,list2:[{title:"门店发货"},{title:"仓库签收"}],logList:[]}}},onLoad:function(t){var e=this;setTimeout(function(){u.mid=t.id,e.loadData()})},methods:{loadData:function(){var e=this,n=t.getStorageSync("userinfo"),i={mid:u.mid};e.$ajax.logisData(i).then(function(t){var i=t.list;i.forEach(function(t,n){t.img=e.$store.getters.imgShow+"/thumb/"+t.item_no+".jpg?x-oss-process=style/80"}),null!=t.info.express_img&&(t.info.express_url=e.$store.getters.imgShow+"/shouhou/"+n.hdid+"/"+t.info.express_img+"?x-oss-process=style/80"),u.logList=t.info,u.detaList=i,u.list2[1].desc=t.info.oper_date,u.active=parseInt(t.info.type-1),e.mvc=u})},imageError:function(t,e){u[t][e].img="http://dh.xmcpcn.com/Public/images/none.jpg"},previewImage:function(e){var n=this,i=t.getStorageSync("userinfo"),o=n.$store.getters.imgShow+"/shouhou/"+i.hdid+"/"+e+"?x-oss-process=style/800",s=[];s.push(o),t.previewImage({current:o,urls:s})}}};e.default=a}).call(this,n("6e42")["default"])},c1e1:function(t,e,n){"use strict";n.r(e);var i=n("8d3a"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},d173:function(t,e,n){"use strict";n.r(e);var i=n("0b80"),o=n("c1e1");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("32ac");var u=n("2877"),a=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},d52d:function(t,e,n){"use strict";(function(t){n("d471"),n("921b");i(n("66fd"));var e=i(n("d173"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["d52d","common/runtime","common/vendor"]]]);
});
require('pages/logistics-detail/logistics-detail.js');
__wxRoute = 'pages/collect/collect';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/collect/collect.js';

define('pages/collect/collect.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collect/collect"],{"2e4c":function(t,e,n){"use strict";n.r(e);var c=n("f713"),o=n("5453");for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);n("5a26");var a=n("2877"),i=Object(a["a"])(o["default"],c["a"],c["b"],!1,null,null,null);e["default"]=i.exports},"3d23":function(t,e,n){"use strict";(function(t,c){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(n("3d3b"));function l(t){return t&&t.__esModule?t:{default:t}}var a=function(){return n.e("components/empty").then(n.bind(null,"aea4"))},i=function(){return n.e("components/over").then(n.bind(null,"35b2"))},r=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},s={collectList:[],total:"",navList:[],activeClass:0,cartoon:!1,over:!1,typeId:-1},u={components:{empty:a,over:i,imglazy:r},data:function(){return{imglazyStyle:"border-radius: 10upx;",mvc:{collectList:[],total:"",navList:[],activeClass:0,cartoon:!1,over:!1,typeId:-1}}},onLoad:function(){var e=this;setTimeout(function(){o.default.pageTitle(e.$t("collect").title),o.default.load(e.$t("index").loadmsg),e.loadData();var n="";t.setStorageSync("collectlist",n)},300)},computed:{i18n:function(){return this.$t("collect")}},methods:{loadData:function(){var e=this;s.cartoon=!1,s.over=!1,e.$ajax.colList().then(function(n){var c=n.sql;if(0==c.length)return s.cartoon=!0,t.hideLoading(),e.mvc=s,!1;var o=n.cls,l=[];for(var a in c.forEach(function(t,n){t.img=e.$store.getters.imgShow+"/thumb/"+t.code+".jpg?x-oss-process=style/300"}),o)l.push(o[a]);var i={title:e.$t("collect").Default,cls:"全部"};s.over=!0,l.unshift(i),s.navList=l,s.allList=c,t.setStorageSync("collectlist",c),s.collectList=c,t.hideLoading(),e.mvc=s})},changenav:function(e,n){var c=t.getStorageSync("collectlist");if(s.typeId=e.cls,s.activeClass=n,"全部"==s.typeId)s.collectList=t.getStorageSync("collectlist");else{var o=[];c.forEach(function(t,e){parseInt(s.typeId)>=0?t.cls_id===s.typeId&&o.push(t):t.huodong==s.typeId&&o.push(t)}),s.collectList=o}this.mvc=s},deleteCartItem:function(e,n){var c=this,o=t.getStorageSync("collectlist"),l={sn:e.code};c.$ajax.colDele(l).then(function(e){c.$api.msg(c.$t("index").msg2);var l=s.collectList,a=l[n],i=a.code;s.collectList.splice(n,1),0==s.collectList.length&&(s.collectList=[],c.loadData()),o.forEach(function(t,e){t.code==i&&o.splice(e,1)}),t.setStorageSync("collectlist",o),t.hideLoading(),c.mvc=s})},navToDetailPage:function(e){console.log(c(e," at pages\\collect\\collect.vue:208")),t.navigateTo({url:"/pages/product/product?productId=".concat(e)})},deleteAll:function(){var e=this;t.showModal({title:"提示",cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,content:"您是否要删除全部商品？",success:function(n){n.confirm&&e.$ajax.colDeleAll().then(function(n){var c="";s.collectList=[],s.navList=[],s.over=!1,s.cartoon=!0,t.setStorageSync("collectlist",c),e.mvc=s})}})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},5453:function(t,e,n){"use strict";n.r(e);var c=n("3d23"),o=n.n(c);for(var l in c)"default"!==l&&function(t){n.d(e,t,function(){return c[t]})}(l);e["default"]=o.a},"5a26":function(t,e,n){"use strict";var c=n("afdf"),o=n.n(c);o.a},"628d":function(t,e,n){"use strict";(function(t){n("d471"),n("921b");c(n("66fd"));var e=c(n("2e4c"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},afdf:function(t,e,n){},f713:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return c}),n.d(e,"b",function(){return o})}},[["628d","common/runtime","common/vendor"]]]);
});
require('pages/collect/collect.js');
__wxRoute = 'pages/update/update';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/update/update.js';

define('pages/update/update.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/update/update"],{"13db":function(t,e,n){"use strict";n.r(e);var a=n("be6e"),o=n("cf70");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("3ac2");var i=n("2877"),l=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports},"3ac2":function(t,e,n){"use strict";var a=n("cef5"),o=n.n(a);o.a},"3dd7":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("3d3b"));function s(t){return t&&t.__esModule?t:{default:t}}var i={title:"发现新版本",downcenter:[],server_version:0,ProgressHdid:!1,downloadProgress:0},l={data:function(){return{info:"正在加载",Minfo:"未知",Mtip:"",updateInfo:"无",latest:null,packgeSize:null,packgePath:null,downloadTask:null,buttonLoading:!1,installed:!1,startProgress:!1,currentIsLatest:!0,appURL:"",iosLink:"https://itunes.apple.com/cn/app/XIMIVOGUE/id1256241115?mt=8&l=zh",mvc:{title:"发现新版本",downcenter:[],server_version:0,ProgressHdid:!1,downloadProgress:0}}},onLoad:function(t){this.loadAndroid()},onReady:function(t){},onShow:function(){!0===this.installed&&this.packgePath&&(this.installed=!1,this.haveDownloaded())},onUnload:function(){this.downloadTask&&(this.closeTask(),this.showToast("更新被取消"),t.navigateBack({delta:1}))},onPullDownRefresh:function(){t.stopPullDownRefresh()},methods:{loadAndroid:function(){o.default.load(this.$t("index").loadmsg);var e=this;plus.runtime.getProperty(plus.runtime.appid,function(n){var a="";a="android"==plus.os.name.toLowerCase()?1:2;var o={version:n.version,type:a};e.$ajax.Version(o).then(function(n){if(i.server_version=n.server_version,e.appURL=n.app_link,0!=n.update_note.length)i.downcenter=n.update_note.split("/");else{var a=[{0:"暂无"}];i.downcenter=a}e.mvc=i,t.hideLoading()})})},showToast:function(e){t.showToast({title:e,duration:3e3,icon:"none"})},goback:function(){t.navigateBack({delta:1})},installPackge:function(){var e=this;plus.runtime.install(this.packgePath,{force:!0}),this.installed=!0,t.setStorage({key:"updated",data:{completed:!0,packgePath:this.packgePath},success:function(t){console.log(a("成功保存更新记录"," at pages\\update\\update.vue:162"))}}),this.packgePath.match(RegExp(/.wgt/))&&(this.installed=!1,t.showModal({title:"提示",cancelText:e.$t("index").cancel,confirmText:e.$t("index").confirm,content:"应用将重启以完成更新",showCancel:!1,complete:function(){plus.runtime.restart()}}))},haveDownloaded:function(){var e=this,n=this;t.showModal({title:"更新尚未完成",content:"您已下载更新包，但是还没有完成安装，请问是否要继续安装更新包呢？",cancelText:n.$t("index").cancel,confirmText:n.$t("index").confirm,success:function(n){n.confirm?e.installPackge():n.cancel&&(e.showToast("更新被取消"),t.navigateBack({delta:1}))}})},closeTask:function(){this.downloadTask.abort(),this.downloadTask=null,this.startProgress=!1},createTask:function(e){var n=this,a=this;i.downloadProgress=0,this.startProgress=!0,this.downloadTask=t.downloadFile({url:e,success:function(e){200===e.statusCode&&t.saveFile({tempFilePath:e.tempFilePath,success:function(t){n.packgePath=t.savedFilePath,n.installPackge(),n.closeTask()}})}}),this.downloadTask.onProgressUpdate(function(t){i.downloadProgress=t.progress,a.mvc=i})},handleUpdate:function(){var t=this;"android"==plus.os.name.toLowerCase()?(i.ProgressHdid=!0,t.createTask(t.appURL)):plus.runtime.openURL(t.iosLink),t.mvc=i}}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},be6e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},cef5:function(t,e,n){},cf70:function(t,e,n){"use strict";n.r(e);var a=n("3dd7"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},ef99:function(t,e,n){"use strict";(function(t){n("d471"),n("921b");a(n("66fd"));var e=a(n("13db"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["ef99","common/runtime","common/vendor"]]]);
});
require('pages/update/update.js');
__wxRoute = 'pages/webview/webview';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/webview/webview.js';

define('pages/webview/webview.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/webview/webview"],{"029b":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},1878:function(e,t,n){"use strict";(function(e,u){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("3d3b"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"85b0"))},r={components:{uniNavBar:o},data:function(){return{webURL:""}},onLoad:function(t){console.log(e(t," at pages\\webview\\webview.vue:24")),"miaosha"==t.id&&a.default.pageTitle("限时秒杀");var n=u.getStorageSync("userinfo"),i={top:"70px",bottom:"0px",height:"100%"},o=this;plus.webview.create(t.url+"?uname="+n.username+"&hdid="+n.hdid+"&uid="+n.uid+"&sign="+n.token+"&token=AxiPmiPvogue","text",i),setTimeout(function(){o.post()},1e3)},methods:{back:function(){u.switchTab({url:"/pages/index/index"}),plus.webview.close("text")},post:function(){plus.webview.show("text")}},onBackPress:function(){plus.webview.close("text")}};t.default=r}).call(this,n("0de9")["default"],n("6e42")["default"])},"456d":function(e,t,n){"use strict";n.r(t);var u=n("1878"),a=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);t["default"]=a.a},"68ea":function(e,t,n){},"772c":function(e,t,n){"use strict";n.r(t);var u=n("029b"),a=n("456d");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("eefe");var o=n("2877"),r=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},"92aa":function(e,t,n){"use strict";(function(e){n("d471"),n("921b");u(n("66fd"));var t=u(n("772c"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},eefe:function(e,t,n){"use strict";var u=n("68ea"),a=n.n(u);a.a}},[["92aa","common/runtime","common/vendor"]]]);
});
require('pages/webview/webview.js');
__wxRoute = 'pages/discounts/discounts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/discounts/discounts.js';

define('pages/discounts/discounts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discounts/discounts"],{"03fc":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},c=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return c})},1092:function(t,a,e){},"6c73":function(t,a,e){"use strict";e.r(a);var n=e("e39d"),c=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,function(){return n[t]})}(u);a["default"]=c.a},"9e56":function(t,a,e){"use strict";var n=e("1092"),c=e.n(n);c.a},b370:function(t,a,e){"use strict";(function(t){e("d471"),e("921b");n(e("66fd"));var a=n(e("d905"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},d905:function(t,a,e){"use strict";e.r(a);var n=e("03fc"),c=e("6c73");for(var u in c)"default"!==u&&function(t){e.d(a,t,function(){return c[t]})}(u);e("9e56");var i=e("2877"),o=Object(i["a"])(c["default"],n["a"],n["b"],!1,null,null,null);a["default"]=o.exports},e39d:function(t,a,e){"use strict";(function(t,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=u(e("3d3b"));function u(t){return t&&t.__esModule?t:{default:t}}var i=function(){return e.e("components/empty").then(e.bind(null,"aea4"))},o={allList:[],activeList:[],activeClass:0,navList:[],cartoon:!1},s={components:{empty:i},data:function(){return{mvc:{allList:[],activeList:[],activeClass:0,navList:[],cartoon:!1}}},onLoad:function(t){var a=this;setTimeout(function(){o=a.mvc,c.default.pageTitle(a.$t("voucher").title),o.navList=a.$t("voucher").navList,c.default.load(a.$t("index").loadmsg),a.loadData()},300)},computed:{i18n:function(){return this.$t("voucher")}},methods:{back:function(){t.navigateBack({delta:1})},loadData:function(){var a=this;a.cartoon=!1,a.$ajax.dis().then(function(e){var n=[],c=e;0!=c.length?(c.forEach(function(t,a){0==t.data.type.expire&&0==t.data.type.not_used&&n.push(t)}),o.activeList=n,o.allList=e):o.cartoon=!0,t.hideLoading(),a.mvc=o})},navCart:function(){t.switchTab({url:"/pages/cart/cart"})},changenav:function(t,a){var e=o.allList,c=[];o.activeClass=a,console.log(n(a," at pages\\discounts\\discounts.vue:133")),e.forEach(function(t,e){switch(a){case 0:0==t.data.type.expire&&0==t.data.type.not_used&&c.push(t);break;case 1:1==t.data.type.not_used&&c.push(t);break;case 2:0==t.data.type.not_used&&1==t.data.type.expire&&c.push(t)}}),o.activeList=c,this.mvc=o}}};a.default=s}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["b370","common/runtime","common/vendor"]]]);
});
require('pages/discounts/discounts.js');
__wxRoute = 'pages/Article/Article';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Article/Article.js';

define('pages/Article/Article.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Article/Article"],{"002f":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("3d3b"));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"85b0"))},o={content:"",navTitle:""},r={components:{uniNavBar:c},data:function(){return{navHeight:0,list:{content:"",navTitle:""}}},onLoad:function(t){var e=this;i.default.load(this.$t("index").loadmsg),o=this.list,this.getTitleHeight(),setTimeout(function(){e.loadData(t.id)},300)},methods:{loadData:function(e){var n=this;n.$ajax.artData(e).then(function(e){var a=e.info.contents;a.replace(/\<img/g,'<img style="max-width:100%;"'),o.content=a.replace(/\<img/g,'<img style="max-width:100%;"'),o.navTitle=e.info.title,n.list=o,t.hideLoading()})},back:function(){t.navigateBack({delta:1})},getTitleHeight:function(){var e=this;t.getSystemInfo({success:function(t){return console.log(a(t.screenHeight," at pages\\Article\\Article.vue:68")),t.screenHeight<750?(e.navHeight="67px",!1):t.screenHeight<950?(e.navHeight="77px",!1):t.screenHeight>1e3?(e.navHeight="100px",!1):void 0}})}}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},"2c33":function(t,e,n){"use strict";n.r(e);var a=n("002f"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},"59a6":function(t,e,n){"use strict";n.r(e);var a=n("feb6"),i=n("2c33");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("9032");var c=n("2877"),o=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"5e381b14",null);e["default"]=o.exports},"76f9":function(t,e,n){},9032:function(t,e,n){"use strict";var a=n("76f9"),i=n.n(a);i.a},bac4:function(t,e,n){"use strict";(function(t){n("d471"),n("921b");a(n("66fd"));var e=a(n("59a6"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},feb6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["bac4","common/runtime","common/vendor"]]]);
});
require('pages/Article/Article.js');
__wxRoute = 'pages/market-detail/market-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/market-detail/market-detail.js';

define('pages/market-detail/market-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/market-detail/market-detail"],{"0767":function(t,e,a){"use strict";a.r(e);var n=a("735b"),d=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=d.a},"17ac":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},d=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return d})},"21b8":function(t,e,a){"use strict";var n=a("23ce"),d=a.n(n);d.a},"23ce":function(t,e,a){},"2fbe":function(t,e,a){"use strict";a.r(e);var n=a("17ac"),d=a("0767");for(var r in d)"default"!==r&&function(t){a.d(e,t,function(){return d[t]})}(r);a("21b8");var i=a("2877"),o=Object(i["a"])(d["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"735b":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=d(a("3d3b"));function d(t){return t&&t.__esModule?t:{default:t}}var r=function(){return a.e("components/over").then(a.bind(null,"35b2"))},i={dateStart:"",dateEnd:"",filterIndex:0,priceOrder:0,downNum:"",list:[],over:!1},o={components:{over:r},data:function(){return{mvc:{dateStart:"",dateEnd:"",filterIndex:0,priceOrder:0,downNum:"",list:[],over:!1}}},computed:{i18n:function(){return this.$t("market_data")}},onLoad:function(t){var e=this;setTimeout(function(){n.default.load(e.$t("index").loadmsg),n.default.pageTitle(e.$t("market_data").title),i.dateStart=t.time1,i.dateEnd=t.time2,e.loadData()},300)},methods:{tabClick:function(e){if(0==e)return i.filterIndex=e,i.downNum="",this.loadData(),this.mvc=i,!1;i.filterIndex=e,2===e&&(i.priceOrder=1===i.priceOrder?2:1,1==i.priceOrder&&(i.downNum="desc"),2==i.priceOrder&&(i.downNum="asc"),t.pageScrollTo({duration:300,scrollTop:0}),this.loadData()),this.mvc=i},loadData:function(){n.default.load(this.$t("index").loadmsg);var e=this,a="";""==i.downNum?a={sdate:i.dateStart,edate:i.dateEnd}:("asc"==i.downNum&&(a={sdate:i.dateStart,edate:i.dateEnd,type:"asc"}),"desc"==i.downNum&&(a={sdate:i.dateStart,edate:i.dateEnd,type:"desc"})),e.$ajax.marketView(a).then(function(a){var n=a,d=e.$t("market_data").weekDay;0!=n.length?(n.forEach(function(t,e){var a=t.AMT0-t.IAMT,n=new Date(Date.parse(t.TIME.replace(/-/g,"/")));t.price1=a.toFixed(2),t.day=d[n.getDay()]}),i.list=a,i.over=!0):i.hide=!0,t.hideLoading(),e.mvc=i})}}};e.default=o}).call(this,a("6e42")["default"])},f733:function(t,e,a){"use strict";(function(t){a("d471"),a("921b");n(a("66fd"));var e=n(a("2fbe"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["f733","common/runtime","common/vendor"]]]);
});
require('pages/market-detail/market-detail.js');
__wxRoute = 'pages/order-hddata/order-hddata';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order-hddata/order-hddata.js';

define('pages/order-hddata/order-hddata.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order-hddata/order-hddata"],{"388d":function(t,n,e){},"5a30":function(t,n,e){"use strict";e.r(n);var a=e("bad0"),o=e("d351");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);e("aeed");var i=e("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},aeed:function(t,n,e){"use strict";var a=e("388d"),o=e.n(a);o.a},bad0:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},c936:function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("3d3b"));function r(t){return t&&t.__esModule?t:{default:t}}var i=function(){return e.e("components/uni-card/uni-card").then(e.bind(null,"ffce"))},u=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"85b0"))},d=function(){return e.e("components/over").then(e.bind(null,"35b2"))},c=function(){return e.e("components/img-lazy/img-lazy").then(e.bind(null,"b066"))},s={detailList:[{item_name:"",item_en:"",item_no:"",price:"",QTY:"",sub_amt:""}],orderInfo:{NUM:0,sheet_amt:0},sn:"",over:!1,statusList:[]},l={components:{uniCard:i,uniNavBar:u,over:d,imglazy:c},data:function(){return{imglazyStyle:"border-radius: 10upx;",mvc:{detailList:[{item_name:"",item_en:"",item_no:"",price:"",QTY:"",sub_amt:""}],orderInfo:{NUM:0,sheet_amt:0},sn:"",over:!1,statusList:[]}}},onLoad:function(t){var n=this;setTimeout(function(){o.default.load(n.$t("index").loadmsg),s.sn=t.sn,n.loadData()},300)},methods:{back:function(){t.navigateBack({delta:1})},loadData:function(){var n=this;s.over=!1;var e={sn:s.sn};n.$ajax.orderHdView(e).then(function(e){for(var a in s.detailList=e.list,s.orderInfo=e.info,s.statusList=e.track,s.detailList)s.detailList[a].url=n.$store.getters.imgShow+"/thumb/"+s.detailList[a].item_no+".jpg?x-oss-process=style/300";s.over=!0,t.hideLoading(),n.mvc=s})},navToDetailPage:function(n){console.log(a(n," at pages\\order-hddata\\order-hddata.vue:131")),t.navigateTo({url:"/pages/product/product?productId=".concat(n)})}}};n.default=l}).call(this,e("6e42")["default"],e("0de9")["default"])},d351:function(t,n,e){"use strict";e.r(n);var a=e("c936"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=o.a},fc40:function(t,n,e){"use strict";(function(t){e("d471"),e("921b");a(e("66fd"));var n=a(e("5a30"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["fc40","common/runtime","common/vendor"]]]);
});
require('pages/order-hddata/order-hddata.js');
__wxRoute = 'pages/seckill/seckill';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/seckill/seckill.js';

define('pages/seckill/seckill.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/seckill/seckill"],{"265b":function(e,t,n){"use strict";(function(e){n("d471"),n("921b");i(n("66fd"));var t=i(n("e773"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},4079:function(e,t,n){"use strict";var i=n("ca65"),a=n.n(i);a.a},"40c8":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("3d3b"));function a(e){return e&&e.__esModule?e:{default:e}}var o={activeClass:0,page:1,loadingType:"more",type:"add",thispage:0,Allpage:0,seckList:[],navHeight:0,navList:[{title:"13:00",status:!0},{title:"14:00",status:!1},{title:"15:00",status:!1},{title:"16:00",status:!1},{title:"17:00",status:!1}]},s=function(){return n.e("components/uni-countdown/uni-countdown").then(n.bind(null,"8027"))},u=function(){return n.e("components/uni-number-box").then(n.bind(null,"a528"))},l=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"926e"))},c=function(){return n.e("components/img-lazy/img-lazy").then(n.bind(null,"b066"))},r=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"85b0"))},d={components:{uniCountdown:s,uniNumberBox:u,uniLoadMore:l,imglazy:c,uniNavBar:r},data:function(){return{imglazyStyle:"border-radius: 10upx;",mvc:{navHeight:0,activeClass:0,page:1,loadingType:"more",type:"add",thispage:0,Allpage:0,seckList:[],navList:[{title:"13:00",status:!0},{title:"14:00",status:!1},{title:"15:00",status:!1},{title:"16:00",status:!1},{title:"17:00",status:!1}]}}},computed:{i18n:function(){return this.$t("list")}},onLoad:function(){var e=this;setTimeout(function(t,n){e.getTitleHeight(),e.loadData()},300)},methods:{getTitleHeight:function(){e.getSystemInfo({success:function(e){return console.log(i(e.screenHeight," at pages\\seckill\\seckill.vue:190")),e.screenHeight<750?(o.navHeight="125px",!1):e.screenHeight<950?(o.navHeight="135px",!1):e.screenHeight>1e3?(o.navHeight="195px",!1):void 0}})},loadData:function(){var e=this,t={type:"app"},n={page:o.page,downNum:""};e.$ajax.hNew(n,t).then(function(t){e.allPage(t)})},allPage:function(t){var n=this;if(null==t.list||0==t.other.totalPage)return o.loadingType="nomore",e.hideLoading(),n.mvc=o,!1;o.Allpage=t.other.totalPage,o.thispage=t.other.thispage;for(var i=t.list,a=0;a<i.length;a++){var s=n.$store.getters.imgShow+"/thumb/"+i[a].item_no+".jpg?x-oss-process=style/300";i[a].image=s,i[a].allNum=parseInt(i[a].spec),i[a].min=parseInt(i[a].spec),i[a].circleHidden=!1,i[a].cnum}var u=i;if(o.loadingType=t.other.thispage>t.other.totalPage?"nomore":"more","add"==o.type){if(o.page=o.page+1,"nomore"===o.loadingType)return void(n.mvc=o);o.loadingType="loading"}else o.loadingType="more";if("refresh"==o.type){if(o.seckList=[],e.stopPullDownRefresh(),o.page=o.page+1,"nomore"===o.loadingType)return void(n.mvc=o);o.loadingType="loading"}if(u.length<20)return o.loadingType="nomore",e.hideLoading(),o.seckList=o.seckList.concat(u),n.mvc=o,!1;e.hideLoading(),o.seckList=o.seckList.concat(u),n.mvc=o},changenav:function(e,t){o.activeClass=t,this.mvc=o},timeup:function(t){console.log(i(t," at pages\\seckill\\seckill.vue:292")),e.showToast({title:"时间到"})},onPullDownRefresh:function(){o.page=1,o.type="refresh",this.loadData()},onReachBottom:function(){o.type="add",this.loadData()}}};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},c6e0:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},ca65:function(e,t,n){},dc81:function(e,t,n){"use strict";n.r(t);var i=n("40c8"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},e773:function(e,t,n){"use strict";n.r(t);var i=n("c6e0"),a=n("dc81");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("4079");var s=n("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports}},[["265b","common/runtime","common/vendor"]]]);
});
require('pages/seckill/seckill.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

