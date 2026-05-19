import{C as rc}from"./constants-BGnRCI-w.js";import{s as Qi,g as ic}from"./storage-CVOSwLF2.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ha={exports:{}},ei={},Qa={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=Symbol.for("react.element"),lc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),mc=Symbol.for("react.lazy"),Ml=Symbol.iterator;function gc(e){return e===null||typeof e!="object"?null:(e=Ml&&e[Ml]||e["@@iterator"],typeof e=="function"?e:null)}var qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ka=Object.assign,Ga={};function ot(e,n,t){this.props=e,this.context=n,this.refs=Ga,this.updater=t||qa}ot.prototype.isReactComponent={};ot.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ya(){}Ya.prototype=ot.prototype;function Bo(e,n,t){this.props=e,this.context=n,this.refs=Ga,this.updater=t||qa}var Wo=Bo.prototype=new Ya;Wo.constructor=Bo;Ka(Wo,ot.prototype);Wo.isPureReactComponent=!0;var Al=Array.isArray,Xa=Object.prototype.hasOwnProperty,Vo={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Xa.call(n,r)&&!Za.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gt,type:e,key:o,ref:l,props:i,_owner:Vo.current}}function vc(e,n){return{$$typeof:Gt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gt}function yc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Dl=/\/+/g;function wi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):n.toString(36)}function yr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gt:case lc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+wi(l,0):r,Al(i)?(t="",e!=null&&(t=e.replace(Dl,"$&/")+"/"),yr(i,n,t,"",function(c){return c})):i!=null&&($o(i)&&(i=vc(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Dl,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",Al(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+wi(o,a);l+=yr(o,n,t,s,i)}else if(s=gc(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+wi(o,a++),l+=yr(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function nr(e,n,t){if(e==null)return e;var r=[],i=0;return yr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function wc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},wr={transition:null},kc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Vo};function ba(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=ot;N.Fragment=ac;N.Profiler=uc;N.PureComponent=Bo;N.StrictMode=sc;N.Suspense=pc;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;N.act=ba;N.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ka({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Vo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Xa.call(n,s)&&!Za.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Gt,type:e.type,key:i,ref:o,props:r,_owner:l}};N.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};N.createElement=Ja;N.createFactory=function(e){var n=Ja.bind(null,e);return n.type=e,n};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:fc,render:e}};N.isValidElement=$o;N.lazy=function(e){return{$$typeof:mc,_payload:{_status:-1,_result:e},_init:wc}};N.memo=function(e,n){return{$$typeof:hc,type:e,compare:n===void 0?null:n}};N.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};N.unstable_act=ba;N.useCallback=function(e,n){return ae.current.useCallback(e,n)};N.useContext=function(e){return ae.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};N.useEffect=function(e,n){return ae.current.useEffect(e,n)};N.useId=function(){return ae.current.useId()};N.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};N.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};N.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};N.useMemo=function(e,n){return ae.current.useMemo(e,n)};N.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};N.useRef=function(e){return ae.current.useRef(e)};N.useState=function(e){return ae.current.useState(e)};N.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};N.useTransition=function(){return ae.current.useTransition()};N.version="18.3.1";Qa.exports=N;var We=Qa.exports;const zc=oc(We);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=We,xc=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,Ec=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_c={key:!0,ref:!0,__self:!0,__source:!0};function es(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Pc.call(n,r)&&!_c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:xc,type:e,key:o,ref:l,props:i,_owner:Ec.current}}ei.Fragment=Cc;ei.jsx=es;ei.jsxs=es;Ha.exports=ei;var C=Ha.exports,qi={},ns={exports:{}},ye={},ts={exports:{}},rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,T){var R=x.length;x.push(T);e:for(;0<R;){var H=R-1>>>1,Y=x[H];if(0<i(Y,T))x[H]=T,x[R]=Y,R=H;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var T=x[0],R=x.pop();if(R!==T){x[0]=R;e:for(var H=0,Y=x.length,bt=Y>>>1;H<bt;){var vn=2*(H+1)-1,yi=x[vn],yn=vn+1,er=x[yn];if(0>i(yi,R))yn<Y&&0>i(er,yi)?(x[H]=er,x[yn]=R,H=yn):(x[H]=yi,x[vn]=R,H=vn);else if(yn<Y&&0>i(er,R))x[H]=er,x[yn]=R,H=yn;else break e}}return T}function i(x,T){var R=x.sortIndex-T.sortIndex;return R!==0?R:x.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],h=1,m=null,p=3,y=!1,w=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var T=t(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=x)r(c),T.sortIndex=T.expirationTime,n(s,T);else break;T=t(c)}}function g(x){if(k=!1,f(x),!w)if(t(s)!==null)w=!0,gi(S);else{var T=t(c);T!==null&&vi(g,T.startTime-x)}}function S(x,T){w=!1,k&&(k=!1,d(_),_=-1),y=!0;var R=p;try{for(f(T),m=t(s);m!==null&&(!(m.expirationTime>T)||x&&!Ee());){var H=m.callback;if(typeof H=="function"){m.callback=null,p=m.priorityLevel;var Y=H(m.expirationTime<=T);T=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===t(s)&&r(s),f(T)}else r(s);m=t(s)}if(m!==null)var bt=!0;else{var vn=t(c);vn!==null&&vi(g,vn.startTime-T),bt=!1}return bt}finally{m=null,p=R,y=!1}}var P=!1,E=null,_=-1,$=5,L=-1;function Ee(){return!(e.unstable_now()-L<$)}function st(){if(E!==null){var x=e.unstable_now();L=x;var T=!0;try{T=E(!0,x)}finally{T?ut():(P=!1,E=null)}}else P=!1}var ut;if(typeof u=="function")ut=function(){u(st)};else if(typeof MessageChannel<"u"){var Il=new MessageChannel,tc=Il.port2;Il.port1.onmessage=st,ut=function(){tc.postMessage(null)}}else ut=function(){D(st,0)};function gi(x){E=x,P||(P=!0,ut())}function vi(x,T){_=D(function(){x(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,gi(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var R=p;p=T;try{return x()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,T){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var R=p;p=x;try{return T()}finally{p=R}},e.unstable_scheduleCallback=function(x,T,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,x){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,x={id:h++,callback:T,priorityLevel:x,startTime:R,expirationTime:Y,sortIndex:-1},R>H?(x.sortIndex=R,n(c,x),t(s)===null&&x===t(c)&&(k?(d(_),_=-1):k=!0,vi(g,R-H))):(x.sortIndex=Y,n(s,x),w||y||(w=!0,gi(S))),x},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(x){var T=p;return function(){var R=p;p=T;try{return x.apply(this,arguments)}finally{p=R}}}})(rs);ts.exports=rs;var Tc=ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=We,ve=Tc;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var is=new Set,Lt={};function Ln(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(Lt[e]=n,e=0;e<n.length;e++)is.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ki=Object.prototype.hasOwnProperty,Nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fl={},Ul={};function Lc(e){return Ki.call(Ul,e)?!0:Ki.call(Fl,e)?!1:Nc.test(e)?Ul[e]=!0:(Fl[e]=!0,!1)}function jc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oc(e,n,t,r){if(n===null||typeof n>"u"||jc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function se(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ho=/[\-:]([a-z])/g;function Qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ho,Qo);ee[n]=new se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ho,Qo);ee[n]=new se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ho,Qo);ee[n]=new se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function qo(e,n,t,r){var i=ee.hasOwnProperty(n)?ee[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Oc(n,t,i,r)&&(t=null),r||i===null?Lc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ye=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),In=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),os=Symbol.for("react.provider"),ls=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Xi=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),as=Symbol.for("react.offscreen"),Bl=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Bl&&e[Bl]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,ki;function yt(e){if(ki===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ki=n&&n[1]||""}return`
`+ki+e}var zi=!1;function Si(e,n){if(!e||zi)return"";zi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{zi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?yt(e):""}function Ic(e){switch(e.tag){case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return yt("Suspense");case 19:return yt("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function Zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case In:return"Portal";case Gi:return"Profiler";case Ko:return"StrictMode";case Yi:return"Suspense";case Xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ls:return(e.displayName||"Context")+".Consumer";case os:return(e._context.displayName||"Context")+".Provider";case Go:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yo:return n=e.displayName||null,n!==null?n:Zi(e.type)||"Memo";case Ze:n=e._payload,e=e._init;try{return Zi(e(n))}catch{}}return null}function Mc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zi(n);case 8:return n===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ss(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ac(e){var n=ss(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Ac(e))}function us(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ss(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Wl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function cs(e,n){n=n.checked,n!=null&&qo(e,"checked",n,!1)}function bi(e,n){cs(e,n);var t=fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?eo(e,n.type,t):n.hasOwnProperty("defaultValue")&&eo(e,n.type,fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Vl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function eo(e,n,t){(n!=="number"||Nr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function qn(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+fn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function no(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $l(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(wt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:fn(t)}}function ds(e,n){var t=fn(n.value),r=fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Hl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function to(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function jt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var St={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","ms","Moz","O"];Object.keys(St).forEach(function(e){Dc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),St[n]=St[e]})});function hs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||St.hasOwnProperty(e)&&St[e]?(""+n).trim():n+"px"}function ms(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=hs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Fc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,n){if(n){if(Fc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function io(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Kn=null,Gn=null;function Ql(e){if(e=Zt(e)){if(typeof lo!="function")throw Error(v(280));var n=e.stateNode;n&&(n=oi(n),lo(e.stateNode,e.type,n))}}function gs(e){Kn?Gn?Gn.push(e):Gn=[e]:Kn=e}function vs(){if(Kn){var e=Kn,n=Gn;if(Gn=Kn=null,Ql(e),n)for(e=0;e<n.length;e++)Ql(n[e])}}function ys(e,n){return e(n)}function ws(){}var xi=!1;function ks(e,n,t){if(xi)return e(n,t);xi=!0;try{return ys(e,n,t)}finally{xi=!1,(Kn!==null||Gn!==null)&&(ws(),vs())}}function Ot(e,n){var t=e.stateNode;if(t===null)return null;var r=oi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var ao=!1;if(Qe)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){ao=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{ao=!1}function Uc(e,n,t,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var xt=!1,Lr=null,jr=!1,so=null,Bc={onError:function(e){xt=!0,Lr=e}};function Wc(e,n,t,r,i,o,l,a,s){xt=!1,Lr=null,Uc.apply(Bc,arguments)}function Vc(e,n,t,r,i,o,l,a,s){if(Wc.apply(this,arguments),xt){if(xt){var c=Lr;xt=!1,Lr=null}else throw Error(v(198));jr||(jr=!0,so=c)}}function jn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function zs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ql(e){if(jn(e)!==e)throw Error(v(188))}function $c(e){var n=e.alternate;if(!n){if(n=jn(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return ql(i),e;if(o===r)return ql(i),n;o=o.sibling}throw Error(v(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function Ss(e){return e=$c(e),e!==null?xs(e):null}function xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xs(e);if(n!==null)return n;e=e.sibling}return null}var Cs=ve.unstable_scheduleCallback,Kl=ve.unstable_cancelCallback,Hc=ve.unstable_shouldYield,Qc=ve.unstable_requestPaint,Q=ve.unstable_now,qc=ve.unstable_getCurrentPriorityLevel,Zo=ve.unstable_ImmediatePriority,Ps=ve.unstable_UserBlockingPriority,Or=ve.unstable_NormalPriority,Kc=ve.unstable_LowPriority,Es=ve.unstable_IdlePriority,ni=null,De=null;function Gc(e){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Zc,Yc=Math.log,Xc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Yc(e)/Xc|0)|0}var or=64,lr=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=kt(a):(o&=l,o!==0&&(r=kt(o)))}else l=t&~i,l!==0?r=kt(l):o!==0&&(r=kt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),i=1<<t,r|=e[t],n&=~i;return r}function Jc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Le(o),a=1<<l,s=i[l];s===-1?(!(a&t)||a&r)&&(i[l]=Jc(a,n)):s<=n&&(e.expiredLanes|=a),o&=~a}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _s(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Ci(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function ed(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Le(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Jo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rs,bo,Ns,Ls,js,co=!1,ar=[],rn=null,on=null,ln=null,It=new Map,Mt=new Map,be=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gl(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mt.delete(n.pointerId)}}function ft(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Zt(n),n!==null&&bo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function td(e,n,t,r,i){switch(n){case"focusin":return rn=ft(rn,e,n,t,r,i),!0;case"dragenter":return on=ft(on,e,n,t,r,i),!0;case"mouseover":return ln=ft(ln,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return It.set(o,ft(It.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mt.set(o,ft(Mt.get(o)||null,e,n,t,r,i)),!0}return!1}function Os(e){var n=zn(e.target);if(n!==null){var t=jn(n);if(t!==null){if(n=t.tag,n===13){if(n=zs(t),n!==null){e.blockedOn=n,js(e.priority,function(){Ns(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=fo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);oo=r,t.target.dispatchEvent(r),oo=null}else return n=Zt(t),n!==null&&bo(n),e.blockedOn=t,!1;n.shift()}return!0}function Yl(e,n,t){kr(e)&&t.delete(n)}function rd(){co=!1,rn!==null&&kr(rn)&&(rn=null),on!==null&&kr(on)&&(on=null),ln!==null&&kr(ln)&&(ln=null),It.forEach(Yl),Mt.forEach(Yl)}function pt(e,n){e.blockedOn===n&&(e.blockedOn=null,co||(co=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,rd)))}function At(e){function n(i){return pt(i,e)}if(0<ar.length){pt(ar[0],e);for(var t=1;t<ar.length;t++){var r=ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&pt(rn,e),on!==null&&pt(on,e),ln!==null&&pt(ln,e),It.forEach(n),Mt.forEach(n),t=0;t<be.length;t++)r=be[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(t=be[0],t.blockedOn===null);)Os(t),t.blockedOn===null&&be.shift()}var Yn=Ye.ReactCurrentBatchConfig,Mr=!0;function id(e,n,t,r){var i=O,o=Yn.transition;Yn.transition=null;try{O=1,el(e,n,t,r)}finally{O=i,Yn.transition=o}}function od(e,n,t,r){var i=O,o=Yn.transition;Yn.transition=null;try{O=4,el(e,n,t,r)}finally{O=i,Yn.transition=o}}function el(e,n,t,r){if(Mr){var i=fo(e,n,t,r);if(i===null)Ii(e,n,r,Ar,t),Gl(e,r);else if(td(i,e,n,t,r))r.stopPropagation();else if(Gl(e,r),n&4&&-1<nd.indexOf(e)){for(;i!==null;){var o=Zt(i);if(o!==null&&Rs(o),o=fo(e,n,t,r),o===null&&Ii(e,n,r,Ar,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ii(e,n,r,null,t)}}var Ar=null;function fo(e,n,t,r){if(Ar=null,e=Xo(r),e=zn(e),e!==null)if(n=jn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=zs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ar=e,null}function Is(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case Zo:return 1;case Ps:return 4;case Or:case Kc:return 16;case Es:return 536870912;default:return 16}default:return 16}}var nn=null,nl=null,zr=null;function Ms(){if(zr)return zr;var e,n=nl,t=n.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return zr=i.slice(e,1<r?1-r:void 0)}function Sr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Xl(){return!1}function we(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sr:Xl,this.isPropagationStopped=Xl,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),n}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=we(lt),Xt=W({},lt,{view:0,detail:0}),ld=we(Xt),Pi,Ei,ht,ti=W({},Xt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ht&&(ht&&e.type==="mousemove"?(Pi=e.screenX-ht.screenX,Ei=e.screenY-ht.screenY):Ei=Pi=0,ht=e),Pi)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),Zl=we(ti),ad=W({},ti,{dataTransfer:0}),sd=we(ad),ud=W({},Xt,{relatedTarget:0}),_i=we(ud),cd=W({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=we(cd),fd=W({},lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=we(fd),hd=W({},lt,{data:0}),Jl=we(hd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vd[e])?!!n[e]:!1}function rl(){return yd}var wd=W({},Xt,{key:function(e){if(e.key){var n=md[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=we(wd),zd=W({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bl=we(zd),Sd=W({},Xt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),xd=we(Sd),Cd=W({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=we(Cd),Ed=W({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_d=we(Ed),Td=[9,13,27,32],il=Qe&&"CompositionEvent"in window,Ct=null;Qe&&"documentMode"in document&&(Ct=document.documentMode);var Rd=Qe&&"TextEvent"in window&&!Ct,As=Qe&&(!il||Ct&&8<Ct&&11>=Ct),ea=" ",na=!1;function Ds(e,n){switch(e){case"keyup":return Td.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Nd(e,n){switch(e){case"compositionend":return Fs(n);case"keypress":return n.which!==32?null:(na=!0,ea);case"textInput":return e=n.data,e===ea&&na?null:e;default:return null}}function Ld(e,n){if(An)return e==="compositionend"||!il&&Ds(e,n)?(e=Ms(),zr=nl=nn=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return As&&n.locale!=="ko"?null:n.data;default:return null}}var jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jd[e.type]:n==="textarea"}function Us(e,n,t,r){gs(r),n=Dr(n,"onChange"),0<n.length&&(t=new tl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Pt=null,Dt=null;function Od(e){Xs(e,0)}function ri(e){var n=Un(e);if(us(n))return e}function Id(e,n){if(e==="change")return n}var Bs=!1;if(Qe){var Ti;if(Qe){var Ri="oninput"in document;if(!Ri){var ra=document.createElement("div");ra.setAttribute("oninput","return;"),Ri=typeof ra.oninput=="function"}Ti=Ri}else Ti=!1;Bs=Ti&&(!document.documentMode||9<document.documentMode)}function ia(){Pt&&(Pt.detachEvent("onpropertychange",Ws),Dt=Pt=null)}function Ws(e){if(e.propertyName==="value"&&ri(Dt)){var n=[];Us(n,Dt,e,Xo(e)),ks(Od,n)}}function Md(e,n,t){e==="focusin"?(ia(),Pt=n,Dt=t,Pt.attachEvent("onpropertychange",Ws)):e==="focusout"&&ia()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(Dt)}function Dd(e,n){if(e==="click")return ri(n)}function Fd(e,n){if(e==="input"||e==="change")return ri(n)}function Ud(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Oe=typeof Object.is=="function"?Object.is:Ud;function Ft(e,n){if(Oe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Ki.call(n,i)||!Oe(e[i],n[i]))return!1}return!0}function oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function la(e,n){var t=oa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=oa(t)}}function Vs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $s(){for(var e=window,n=Nr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Nr(e.document)}return n}function ol(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bd(e){var n=$s(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Vs(t.ownerDocument.documentElement,t)){if(r!==null&&ol(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=la(t,o);var l=la(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wd=Qe&&"documentMode"in document&&11>=document.documentMode,Dn=null,po=null,Et=null,ho=!1;function aa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ho||Dn==null||Dn!==Nr(r)||(r=Dn,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Et&&Ft(Et,r)||(Et=r,r=Dr(po,"onSelect"),0<r.length&&(n=new tl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Dn)))}function ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Fn={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Ni={},Hs={};Qe&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function ii(e){if(Ni[e])return Ni[e];if(!Fn[e])return e;var n=Fn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Hs)return Ni[e]=n[t];return e}var Qs=ii("animationend"),qs=ii("animationiteration"),Ks=ii("animationstart"),Gs=ii("transitionend"),Ys=new Map,sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,n){Ys.set(e,n),Ln(n,[e])}for(var Li=0;Li<sa.length;Li++){var ji=sa[Li],Vd=ji.toLowerCase(),$d=ji[0].toUpperCase()+ji.slice(1);hn(Vd,"on"+$d)}hn(Qs,"onAnimationEnd");hn(qs,"onAnimationIteration");hn(Ks,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Gs,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(zt));function ua(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Vc(r,n,void 0,e),e.currentTarget=null}function Xs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;ua(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;ua(i,a,c),o=s}}}if(jr)throw e=so,jr=!1,so=null,e}function M(e,n){var t=n[wo];t===void 0&&(t=n[wo]=new Set);var r=e+"__bubble";t.has(r)||(Zs(n,e,2,!1),t.add(r))}function Oi(e,n,t){var r=0;n&&(r|=4),Zs(t,e,r,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Ut(e){if(!e[cr]){e[cr]=!0,is.forEach(function(t){t!=="selectionchange"&&(Hd.has(t)||Oi(t,!1,e),Oi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,Oi("selectionchange",!1,n))}}function Zs(e,n,t,r){switch(Is(n)){case 1:var i=id;break;case 4:i=od;break;default:i=el}t=i.bind(null,n,t,e),i=void 0,!ao||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ii(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=zn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}ks(function(){var c=o,h=Xo(t),m=[];e:{var p=Ys.get(e);if(p!==void 0){var y=tl,w=e;switch(e){case"keypress":if(Sr(t)===0)break e;case"keydown":case"keyup":y=kd;break;case"focusin":w="focus",y=_i;break;case"focusout":w="blur",y=_i;break;case"beforeblur":case"afterblur":y=_i;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xd;break;case Qs:case qs:case Ks:y=dd;break;case Gs:y=Pd;break;case"scroll":y=ld;break;case"wheel":y=_d;break;case"copy":case"cut":case"paste":y=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bl}var k=(n&4)!==0,D=!k&&e==="scroll",d=k?p!==null?p+"Capture":null:p;k=[];for(var u=c,f;u!==null;){f=u;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Ot(u,d),g!=null&&k.push(Bt(u,g,f)))),D)break;u=u.return}0<k.length&&(p=new y(p,w,null,t,h),m.push({event:p,listeners:k}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&t!==oo&&(w=t.relatedTarget||t.fromElement)&&(zn(w)||w[qe]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=t.relatedTarget||t.toElement,y=c,w=w?zn(w):null,w!==null&&(D=jn(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(k=Zl,g="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=bl,g="onPointerLeave",d="onPointerEnter",u="pointer"),D=y==null?p:Un(y),f=w==null?p:Un(w),p=new k(g,u+"leave",y,t,h),p.target=D,p.relatedTarget=f,g=null,zn(h)===c&&(k=new k(d,u+"enter",w,t,h),k.target=f,k.relatedTarget=D,g=k),D=g,y&&w)n:{for(k=y,d=w,u=0,f=k;f;f=On(f))u++;for(f=0,g=d;g;g=On(g))f++;for(;0<u-f;)k=On(k),u--;for(;0<f-u;)d=On(d),f--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break n;k=On(k),d=On(d)}k=null}else k=null;y!==null&&ca(m,p,y,k,!1),w!==null&&D!==null&&ca(m,D,w,k,!0)}}e:{if(p=c?Un(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Id;else if(ta(p))if(Bs)S=Fd;else{S=Ad;var P=Md}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Dd);if(S&&(S=S(e,c))){Us(m,S,t,h);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&eo(p,"number",p.value)}switch(P=c?Un(c):window,e){case"focusin":(ta(P)||P.contentEditable==="true")&&(Dn=P,po=c,Et=null);break;case"focusout":Et=po=Dn=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,aa(m,t,h);break;case"selectionchange":if(Wd)break;case"keydown":case"keyup":aa(m,t,h)}var E;if(il)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else An?Ds(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(As&&t.locale!=="ko"&&(An||_!=="onCompositionStart"?_==="onCompositionEnd"&&An&&(E=Ms()):(nn=h,nl="value"in nn?nn.value:nn.textContent,An=!0)),P=Dr(c,_),0<P.length&&(_=new Jl(_,e,null,t,h),m.push({event:_,listeners:P}),E?_.data=E:(E=Fs(t),E!==null&&(_.data=E)))),(E=Rd?Nd(e,t):Ld(e,t))&&(c=Dr(c,"onBeforeInput"),0<c.length&&(h=new Jl("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:c}),h.data=E))}Xs(m,n)})}function Bt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Dr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ot(e,t),o!=null&&r.unshift(Bt(e,o,i)),o=Ot(e,n),o!=null&&r.push(Bt(e,o,i))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ca(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=Ot(t,o),s!=null&&l.unshift(Bt(t,s,a))):i||(s=Ot(t,o),s!=null&&l.push(Bt(t,s,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Qd=/\r\n?/g,qd=/\u0000|\uFFFD/g;function da(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(qd,"")}function dr(e,n,t){if(n=da(n),da(e)!==n&&t)throw Error(v(425))}function Fr(){}var mo=null,go=null;function vo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(Yd)}:yo;function Yd(e){setTimeout(function(){throw e})}function Mi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),At(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);At(n)}function an(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function pa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var at=Math.random().toString(36).slice(2),Ae="__reactFiber$"+at,Wt="__reactProps$"+at,qe="__reactContainer$"+at,wo="__reactEvents$"+at,Xd="__reactListeners$"+at,Zd="__reactHandles$"+at;function zn(e){var n=e[Ae];if(n)return n;for(var t=e.parentNode;t;){if(n=t[qe]||t[Ae]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=pa(e);e!==null;){if(t=e[Ae])return t;e=pa(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[Ae]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function oi(e){return e[Wt]||null}var ko=[],Bn=-1;function mn(e){return{current:e}}function A(e){0>Bn||(e.current=ko[Bn],ko[Bn]=null,Bn--)}function I(e,n){Bn++,ko[Bn]=e.current,e.current=n}var pn={},ie=mn(pn),de=mn(!1),En=pn;function bn(e,n){var t=e.type.contextTypes;if(!t)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function fe(e){return e=e.childContextTypes,e!=null}function Ur(){A(de),A(ie)}function ha(e,n,t){if(ie.current!==pn)throw Error(v(168));I(ie,n),I(de,t)}function Js(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(v(108,Mc(e)||"Unknown",i));return W({},t,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,En=ie.current,I(ie,e),I(de,de.current),!0}function ma(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=Js(e,n,En),r.__reactInternalMemoizedMergedChildContext=e,A(de),A(ie),I(ie,e)):A(de),I(de,t)}var Be=null,li=!1,Ai=!1;function bs(e){Be===null?Be=[e]:Be.push(e)}function Jd(e){li=!0,bs(e)}function gn(){if(!Ai&&Be!==null){Ai=!0;var e=0,n=O;try{var t=Be;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Be=null,li=!1}catch(i){throw Be!==null&&(Be=Be.slice(e+1)),Cs(Zo,gn),i}finally{O=n,Ai=!1}}return null}var Wn=[],Vn=0,Wr=null,Vr=0,ke=[],ze=0,_n=null,Ve=1,$e="";function wn(e,n){Wn[Vn++]=Vr,Wn[Vn++]=Wr,Wr=e,Vr=n}function eu(e,n,t){ke[ze++]=Ve,ke[ze++]=$e,ke[ze++]=_n,_n=e;var r=Ve;e=$e;var i=32-Le(r)-1;r&=~(1<<i),t+=1;var o=32-Le(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ve=1<<32-Le(n)+i|t<<i|r,$e=o+e}else Ve=1<<o|t<<i|r,$e=e}function ll(e){e.return!==null&&(wn(e,1),eu(e,1,0))}function al(e){for(;e===Wr;)Wr=Wn[--Vn],Wn[Vn]=null,Vr=Wn[--Vn],Wn[Vn]=null;for(;e===_n;)_n=ke[--ze],ke[ze]=null,$e=ke[--ze],ke[ze]=null,Ve=ke[--ze],ke[ze]=null}var ge=null,me=null,F=!1,Ne=null;function nu(e,n){var t=Se(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ga(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,me=an(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_n!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Se(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,me=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(F){var n=me;if(n){var t=n;if(!ga(e,n)){if(zo(e))throw Error(v(418));n=an(t.nextSibling);var r=ge;n&&ga(e,n)?nu(r,t):(e.flags=e.flags&-4097|2,F=!1,ge=e)}}else{if(zo(e))throw Error(v(418));e.flags=e.flags&-4097|2,F=!1,ge=e}}}function va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function fr(e){if(e!==ge)return!1;if(!F)return va(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!vo(e.type,e.memoizedProps)),n&&(n=me)){if(zo(e))throw tu(),Error(v(418));for(;n;)nu(e,n),n=an(n.nextSibling)}if(va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=an(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=ge?an(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=me;e;)e=an(e.nextSibling)}function et(){me=ge=null,F=!1}function sl(e){Ne===null?Ne=[e]:Ne.push(e)}var bd=Ye.ReactCurrentBatchConfig;function mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function pr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ya(e){var n=e._init;return n(e._payload)}function ru(e){function n(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=dn(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,g){return u===null||u.tag!==6?(u=$i(f,d.mode,g),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,g){var S=f.type;return S===Mn?h(d,u,f.props.children,g,f.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&ya(S)===u.type)?(g=i(u,f.props),g.ref=mt(d,u,f),g.return=d,g):(g=Rr(f.type,f.key,f.props,null,d.mode,g),g.ref=mt(d,u,f),g.return=d,g)}function c(d,u,f,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Hi(f,d.mode,g),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function h(d,u,f,g,S){return u===null||u.tag!==7?(u=Pn(f,d.mode,g,S),u.return=d,u):(u=i(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$i(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case tr:return f=Rr(u.type,u.key,u.props,null,d.mode,f),f.ref=mt(d,null,u),f.return=d,f;case In:return u=Hi(u,d.mode,f),u.return=d,u;case Ze:var g=u._init;return m(d,g(u._payload),f)}if(wt(u)||ct(u))return u=Pn(u,d.mode,f,null),u.return=d,u;pr(d,u)}return null}function p(d,u,f,g){var S=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,u,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===S?s(d,u,f,g):null;case In:return f.key===S?c(d,u,f,g):null;case Ze:return S=f._init,p(d,u,S(f._payload),g)}if(wt(f)||ct(f))return S!==null?null:h(d,u,f,g,null);pr(d,f)}return null}function y(d,u,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(u,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tr:return d=d.get(g.key===null?f:g.key)||null,s(u,d,g,S);case In:return d=d.get(g.key===null?f:g.key)||null,c(u,d,g,S);case Ze:var P=g._init;return y(d,u,f,P(g._payload),S)}if(wt(g)||ct(g))return d=d.get(f)||null,h(u,d,g,S,null);pr(u,g)}return null}function w(d,u,f,g){for(var S=null,P=null,E=u,_=u=0,$=null;E!==null&&_<f.length;_++){E.index>_?($=E,E=null):$=E.sibling;var L=p(d,E,f[_],g);if(L===null){E===null&&(E=$);break}e&&E&&L.alternate===null&&n(d,E),u=o(L,u,_),P===null?S=L:P.sibling=L,P=L,E=$}if(_===f.length)return t(d,E),F&&wn(d,_),S;if(E===null){for(;_<f.length;_++)E=m(d,f[_],g),E!==null&&(u=o(E,u,_),P===null?S=E:P.sibling=E,P=E);return F&&wn(d,_),S}for(E=r(d,E);_<f.length;_++)$=y(E,d,_,f[_],g),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?_:$.key),u=o($,u,_),P===null?S=$:P.sibling=$,P=$);return e&&E.forEach(function(Ee){return n(d,Ee)}),F&&wn(d,_),S}function k(d,u,f,g){var S=ct(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var P=S=null,E=u,_=u=0,$=null,L=f.next();E!==null&&!L.done;_++,L=f.next()){E.index>_?($=E,E=null):$=E.sibling;var Ee=p(d,E,L.value,g);if(Ee===null){E===null&&(E=$);break}e&&E&&Ee.alternate===null&&n(d,E),u=o(Ee,u,_),P===null?S=Ee:P.sibling=Ee,P=Ee,E=$}if(L.done)return t(d,E),F&&wn(d,_),S;if(E===null){for(;!L.done;_++,L=f.next())L=m(d,L.value,g),L!==null&&(u=o(L,u,_),P===null?S=L:P.sibling=L,P=L);return F&&wn(d,_),S}for(E=r(d,E);!L.done;_++,L=f.next())L=y(E,d,_,L.value,g),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?_:L.key),u=o(L,u,_),P===null?S=L:P.sibling=L,P=L);return e&&E.forEach(function(st){return n(d,st)}),F&&wn(d,_),S}function D(d,u,f,g){if(typeof f=="object"&&f!==null&&f.type===Mn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var S=f.key,P=u;P!==null;){if(P.key===S){if(S=f.type,S===Mn){if(P.tag===7){t(d,P.sibling),u=i(P,f.props.children),u.return=d,d=u;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&ya(S)===P.type){t(d,P.sibling),u=i(P,f.props),u.ref=mt(d,P,f),u.return=d,d=u;break e}t(d,P);break}else n(d,P);P=P.sibling}f.type===Mn?(u=Pn(f.props.children,d.mode,g,f.key),u.return=d,d=u):(g=Rr(f.type,f.key,f.props,null,d.mode,g),g.ref=mt(d,u,f),g.return=d,d=g)}return l(d);case In:e:{for(P=f.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=Hi(f,d.mode,g),u.return=d,d=u}return l(d);case Ze:return P=f._init,D(d,u,P(f._payload),g)}if(wt(f))return w(d,u,f,g);if(ct(f))return k(d,u,f,g);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(d,u.sibling),u=i(u,f),u.return=d,d=u):(t(d,u),u=$i(f,d.mode,g),u.return=d,d=u),l(d)):t(d,u)}return D}var nt=ru(!0),iu=ru(!1),$r=mn(null),Hr=null,$n=null,ul=null;function cl(){ul=$n=Hr=null}function dl(e){var n=$r.current;A($r),e._currentValue=n}function xo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Xn(e,n){Hr=e,ul=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function Ce(e){var n=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:n,next:null},$n===null){if(Hr===null)throw Error(v(308));$n=e,Hr.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return n}var Sn=null;function fl(e){Sn===null?Sn=[e]:Sn.push(e)}function ou(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,fl(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ke(e,r)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Je=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ke(e,t)}return i=r.interleaved,i===null?(n.next=n,fl(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ke(e,t)}function xr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Jo(e,t)}}function wa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Qr(e,n,t,r){var i=e.updateQueue;Je=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,h=c=s=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(p=n,y=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(y,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,p=typeof w=="function"?w.call(y,m,p):w,p==null)break e;m=W({},m,p);break e;case 2:Je=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,s=m):h=h.next=y,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Rn|=l,e.lanes=l,e.memoizedState=m}}function ka(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var Jt={},Fe=mn(Jt),Vt=mn(Jt),$t=mn(Jt);function xn(e){if(e===Jt)throw Error(v(174));return e}function hl(e,n){switch(I($t,n),I(Vt,e),I(Fe,Jt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:to(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=to(n,e)}A(Fe),I(Fe,n)}function tt(){A(Fe),A(Vt),A($t)}function au(e){xn($t.current);var n=xn(Fe.current),t=to(n,e.type);n!==t&&(I(Vt,e),I(Fe,t))}function ml(e){Vt.current===e&&(A(Fe),A(Vt))}var U=mn(0);function qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Di=[];function gl(){for(var e=0;e<Di.length;e++)Di[e]._workInProgressVersionPrimary=null;Di.length=0}var Cr=Ye.ReactCurrentDispatcher,Fi=Ye.ReactCurrentBatchConfig,Tn=0,B=null,K=null,X=null,Kr=!1,_t=!1,Ht=0,ef=0;function ne(){throw Error(v(321))}function vl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Oe(e[t],n[t]))return!1;return!0}function yl(e,n,t,r,i,o){if(Tn=o,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Cr.current=e===null||e.memoizedState===null?of:lf,e=t(r,i),_t){o=0;do{if(_t=!1,Ht=0,25<=o)throw Error(v(301));o+=1,X=K=null,n.updateQueue=null,Cr.current=af,e=t(r,i)}while(_t)}if(Cr.current=Gr,n=K!==null&&K.next!==null,Tn=0,X=K=B=null,Kr=!1,n)throw Error(v(300));return e}function wl(){var e=Ht!==0;return Ht=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?B.memoizedState=X=e:X=X.next=e,X}function Pe(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=X===null?B.memoizedState:X.next;if(n!==null)X=n,K=e;else{if(e===null)throw Error(v(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},X===null?B.memoizedState=X=e:X=X.next=e}return X}function Qt(e,n){return typeof n=="function"?n(e):n}function Ui(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var h=c.lane;if((Tn&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,B.lanes|=h,Rn|=h}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,Oe(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,B.lanes|=o,Rn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bi(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Oe(o,n.memoizedState)||(ce=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function su(){}function uu(e,n){var t=B,r=Pe(),i=n(),o=!Oe(r.memoizedState,i);if(o&&(r.memoizedState=i,ce=!0),r=r.queue,kl(fu.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||X!==null&&X.memoizedState.tag&1){if(t.flags|=2048,qt(9,du.bind(null,t,r,i,n),void 0,null),Z===null)throw Error(v(349));Tn&30||cu(t,n,i)}return i}function cu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function du(e,n,t,r){n.value=t,n.getSnapshot=r,pu(n)&&hu(e)}function fu(e,n,t){return t(function(){pu(n)&&hu(e)})}function pu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Oe(e,t)}catch{return!0}}function hu(e){var n=Ke(e,1);n!==null&&je(n,e,1,-1)}function za(e){var n=Me();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},n.queue=e,e=e.dispatch=rf.bind(null,B,e),[n.memoizedState,e]}function qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function mu(){return Pe().memoizedState}function Pr(e,n,t,r){var i=Me();B.flags|=e,i.memoizedState=qt(1|n,t,void 0,r===void 0?null:r)}function ai(e,n,t,r){var i=Pe();r=r===void 0?null:r;var o=void 0;if(K!==null){var l=K.memoizedState;if(o=l.destroy,r!==null&&vl(r,l.deps)){i.memoizedState=qt(n,t,o,r);return}}B.flags|=e,i.memoizedState=qt(1|n,t,o,r)}function Sa(e,n){return Pr(8390656,8,e,n)}function kl(e,n){return ai(2048,8,e,n)}function gu(e,n){return ai(4,2,e,n)}function vu(e,n){return ai(4,4,e,n)}function yu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wu(e,n,t){return t=t!=null?t.concat([e]):null,ai(4,4,yu.bind(null,n,e),t)}function zl(){}function ku(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function zu(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Su(e,n,t){return Tn&21?(Oe(t,n)||(t=_s(),B.lanes|=t,Rn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function nf(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=Fi.transition;Fi.transition={};try{e(!1),n()}finally{O=t,Fi.transition=r}}function xu(){return Pe().memoizedState}function tf(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Cu(e))Pu(n,t);else if(t=ou(e,n,t,r),t!==null){var i=le();je(t,e,r,i),Eu(t,n,r)}}function rf(e,n,t){var r=cn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Pu(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,Oe(a,l)){var s=n.interleaved;s===null?(i.next=i,fl(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=ou(e,n,i,r),t!==null&&(i=le(),je(t,e,r,i),Eu(t,n,r))}}function Cu(e){var n=e.alternate;return e===B||n!==null&&n===B}function Pu(e,n){_t=Kr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Eu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Jo(e,t)}}var Gr={readContext:Ce,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},of={readContext:Ce,useCallback:function(e,n){return Me().memoizedState=[e,n===void 0?null:n],e},useContext:Ce,useEffect:Sa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Pr(4194308,4,yu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Pr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Pr(4,2,e,n)},useMemo:function(e,n){var t=Me();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Me();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=tf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=Me();return e={current:e},n.memoizedState=e},useState:za,useDebugValue:zl,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=za(!1),n=e[0];return e=nf.bind(null,e[1]),Me().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,i=Me();if(F){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),Z===null)throw Error(v(349));Tn&30||cu(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Sa(fu.bind(null,r,o,e),[e]),r.flags|=2048,qt(9,du.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Me(),n=Z.identifierPrefix;if(F){var t=$e,r=Ve;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ht++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ef++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},lf={readContext:Ce,useCallback:ku,useContext:Ce,useEffect:kl,useImperativeHandle:wu,useInsertionEffect:gu,useLayoutEffect:vu,useMemo:zu,useReducer:Ui,useRef:mu,useState:function(){return Ui(Qt)},useDebugValue:zl,useDeferredValue:function(e){var n=Pe();return Su(n,K.memoizedState,e)},useTransition:function(){var e=Ui(Qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:uu,useId:xu,unstable_isNewReconciler:!1},af={readContext:Ce,useCallback:ku,useContext:Ce,useEffect:kl,useImperativeHandle:wu,useInsertionEffect:gu,useLayoutEffect:vu,useMemo:zu,useReducer:Bi,useRef:mu,useState:function(){return Bi(Qt)},useDebugValue:zl,useDeferredValue:function(e){var n=Pe();return K===null?n.memoizedState=e:Su(n,K.memoizedState,e)},useTransition:function(){var e=Bi(Qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:uu,useId:xu,unstable_isNewReconciler:!1};function Te(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Co(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var si={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=le(),i=cn(e),o=He(r,i);o.payload=n,t!=null&&(o.callback=t),n=sn(e,o,i),n!==null&&(je(n,e,i,r),xr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=le(),i=cn(e),o=He(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=sn(e,o,i),n!==null&&(je(n,e,i,r),xr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=le(),r=cn(e),i=He(t,r);i.tag=2,n!=null&&(i.callback=n),n=sn(e,i,r),n!==null&&(je(n,e,r,t),xr(n,e,r))}};function xa(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Ft(t,r)||!Ft(i,o):!0}function _u(e,n,t){var r=!1,i=pn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ce(o):(i=fe(n)?En:ie.current,r=n.contextTypes,o=(r=r!=null)?bn(e,i):pn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=si,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ca(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&si.enqueueReplaceState(n,n.state,null)}function Po(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},pl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ce(o):(o=fe(n)?En:ie.current,i.context=bn(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Co(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&si.enqueueReplaceState(i,i.state,null),Qr(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=Ic(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Wi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Eo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sf=typeof WeakMap=="function"?WeakMap:Map;function Tu(e,n,t){t=He(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Xr||(Xr=!0,Ao=r),Eo(e,n)},t}function Ru(e,n,t){t=He(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Eo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Eo(e,n),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Pa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new sf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Sf.bind(null,e,n,t),n.then(e,e))}function Ea(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function _a(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=He(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var uf=Ye.ReactCurrentOwner,ce=!1;function oe(e,n,t,r){n.child=e===null?iu(n,null,t,r):nt(n,e.child,t,r)}function Ta(e,n,t,r,i){t=t.render;var o=n.ref;return Xn(n,i),r=yl(e,n,t,r,o,i),t=wl(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ge(e,n,i)):(F&&t&&ll(n),n.flags|=1,oe(e,n,r,i),n.child)}function Ra(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Rl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Nu(e,n,o,r,i)):(e=Rr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ft,t(l,r)&&e.ref===n.ref)return Ge(e,n,i)}return n.flags|=1,e=dn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Nu(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Ft(o,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Ge(e,n,i)}return _o(e,n,t,r,i)}function Lu(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Qn,he),he|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(Qn,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,I(Qn,he),he|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,I(Qn,he),he|=r;return oe(e,n,i,t),n.child}function ju(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function _o(e,n,t,r,i){var o=fe(t)?En:ie.current;return o=bn(n,o),Xn(n,i),t=yl(e,n,t,r,o,i),r=wl(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ge(e,n,i)):(F&&r&&ll(n),n.flags|=1,oe(e,n,t,i),n.child)}function Na(e,n,t,r,i){if(fe(t)){var o=!0;Br(n)}else o=!1;if(Xn(n,i),n.stateNode===null)Er(e,n),_u(n,t,r),Po(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var s=l.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=fe(t)?En:ie.current,c=bn(n,c));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Ca(n,l,r,c),Je=!1;var p=n.memoizedState;l.state=p,Qr(n,r,l,i),s=n.memoizedState,a!==r||p!==s||de.current||Je?(typeof h=="function"&&(Co(n,t,h,r),s=n.memoizedState),(a=Je||xa(n,t,a,r,p,s,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,lu(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Te(n.type,a),l.props=c,m=n.pendingProps,p=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ce(s):(s=fe(t)?En:ie.current,s=bn(n,s));var y=t.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||p!==s)&&Ca(n,l,r,s),Je=!1,p=n.memoizedState,l.state=p,Qr(n,r,l,i);var w=n.memoizedState;a!==m||p!==w||de.current||Je?(typeof y=="function"&&(Co(n,t,y,r),w=n.memoizedState),(c=Je||xa(n,t,c,r,p,w,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),l.props=r,l.state=w,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return To(e,n,t,r,o,i)}function To(e,n,t,r,i,o){ju(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&ma(n,t,!1),Ge(e,n,o);r=n.stateNode,uf.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=nt(n,e.child,null,o),n.child=nt(n,null,a,o)):oe(e,n,a,o),n.memoizedState=r.state,i&&ma(n,t,!0),n.child}function Ou(e){var n=e.stateNode;n.pendingContext?ha(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ha(e,n.context,!1),hl(e,n.containerInfo)}function La(e,n,t,r,i){return et(),sl(i),n.flags|=256,oe(e,n,t,r),n.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function No(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,n,t){var r=n.pendingProps,i=U.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(U,i&1),e===null)return So(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=di(l,r,0,null),e=Pn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=No(t),n.memoizedState=Ro,e):Sl(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cf(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=dn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=dn(a,o):(o=Pn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?No(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Ro,r}return o=e.child,e=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Sl(e,n){return n=di({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function hr(e,n,t,r){return r!==null&&sl(r),nt(n,e.child,null,t),e=Sl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cf(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=Wi(Error(v(422))),hr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=di({mode:"visible",children:r.children},i,0,null),o=Pn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&nt(n,e.child,null,l),n.child.memoizedState=No(l),n.memoizedState=Ro,o);if(!(n.mode&1))return hr(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(v(419)),r=Wi(o,r,void 0),hr(e,n,l,r)}if(a=(l&e.childLanes)!==0,ce||a){if(r=Z,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ke(e,i),je(r,e,i,-1))}return Tl(),r=Wi(Error(v(421))),hr(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=xf.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,me=an(i.nextSibling),ge=n,F=!0,Ne=null,e!==null&&(ke[ze++]=Ve,ke[ze++]=$e,ke[ze++]=_n,Ve=e.id,$e=e.overflow,_n=n),n=Sl(n,r.children),n.flags|=4096,n)}function ja(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xo(e.return,n,t)}function Vi(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Mu(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(oe(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ja(e,t,n);else if(e.tag===19)ja(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&qr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Vi(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&qr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Vi(n,!0,t,null,o);break;case"together":Vi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Er(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Rn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function df(e,n,t){switch(n.tag){case 3:Ou(n),et();break;case 5:au(n);break;case 1:fe(n.type)&&Br(n);break;case 4:hl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;I($r,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(I(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Iu(e,n,t):(I(U,U.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);I(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Mu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,t)}return Ge(e,n,t)}var Au,Lo,Du,Fu;Au=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Lo=function(){};Du=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,xn(Fe.current);var o=null;switch(t){case"input":i=Ji(e,i),r=Ji(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=no(e,i),r=no(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fr)}ro(t,r);var l;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lt.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&M("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Fu=function(e,n,t,r){t!==r&&(n.flags|=4)};function gt(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ff(e,n,t){var r=n.pendingProps;switch(al(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return fe(n.type)&&Ur(),te(n),null;case 3:return r=n.stateNode,tt(),A(de),A(ie),gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ne!==null&&(Uo(Ne),Ne=null))),Lo(e,n),te(n),null;case 5:ml(n);var i=xn($t.current);if(t=n.type,e!==null&&n.stateNode!=null)Du(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return te(n),null}if(e=xn(Fe.current),fr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ae]=n,r[Wt]=o,e=(n.mode&1)!==0,t){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(i=0;i<zt.length;i++)M(zt[i],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":Wl(r,o),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},M("invalid",r);break;case"textarea":$l(r,o),M("invalid",r)}ro(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),i=["children",""+a]):Lt.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&M("scroll",r)}switch(t){case"input":rr(r),Vl(r,o,!0);break;case"textarea":rr(r),Hl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ae]=n,e[Wt]=r,Au(e,n,!1,!1),n.stateNode=e;e:{switch(l=io(t,r),t){case"dialog":M("cancel",e),M("close",e),i=r;break;case"iframe":case"object":case"embed":M("load",e),i=r;break;case"video":case"audio":for(i=0;i<zt.length;i++)M(zt[i],e);i=r;break;case"source":M("error",e),i=r;break;case"img":case"image":case"link":M("error",e),M("load",e),i=r;break;case"details":M("toggle",e),i=r;break;case"input":Wl(e,r),i=Ji(e,r),M("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),M("invalid",e);break;case"textarea":$l(e,r),i=no(e,r),M("invalid",e);break;default:i=r}ro(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?ms(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ps(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&jt(e,s):typeof s=="number"&&jt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Lt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&M("scroll",e):s!=null&&qo(e,o,s,l))}switch(t){case"input":rr(e),Vl(e,r,!1);break;case"textarea":rr(e),Hl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?qn(e,!!r.multiple,o,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Fu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=xn($t.current),xn(Fe.current),fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ae]=n,(o=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ae]=n,n.stateNode=r}return te(n),null;case 13:if(A(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&me!==null&&n.mode&1&&!(n.flags&128))tu(),et(),n.flags|=98560,o=!1;else if(o=fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[Ae]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),o=!1}else Ne!==null&&(Uo(Ne),Ne=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?G===0&&(G=3):Tl())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return tt(),Lo(e,n),e===null&&Ut(n.stateNode.containerInfo),te(n),null;case 10:return dl(n.type._context),te(n),null;case 17:return fe(n.type)&&Ur(),te(n),null;case 19:if(A(U),o=n.memoizedState,o===null)return te(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)gt(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=qr(e),l!==null){for(n.flags|=128,gt(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&Q()>it&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304)}else{if(!r)if(e=qr(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!F)return te(n),null}else 2*Q()-o.renderingStartTime>it&&t!==1073741824&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Q(),n.sibling=null,t=U.current,I(U,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return _l(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?he&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function pf(e,n){switch(al(n),n.tag){case 1:return fe(n.type)&&Ur(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),A(de),A(ie),gl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ml(n),null;case 13:if(A(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return A(U),null;case 4:return tt(),null;case 10:return dl(n.type._context),null;case 22:case 23:return _l(),null;case 24:return null;default:return null}}var mr=!1,re=!1,hf=typeof WeakSet=="function"?WeakSet:Set,z=null;function Hn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function jo(e,n,t){try{t()}catch(r){V(e,n,r)}}var Oa=!1;function mf(e,n){if(mo=Mr,e=$s(),ol(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,s=-1,c=0,h=0,m=e,p=null;n:for(;;){for(var y;m!==t||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break n;if(p===t&&++c===i&&(a=l),p===o&&++h===r&&(s=l),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(go={focusedElem:e,selectionRange:t},Mr=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,D=w.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?k:Te(n.type,k),D);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){V(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return w=Oa,Oa=!1,w}function Tt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&jo(n,t,o)}i=i.next}while(i!==r)}}function ui(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Oo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Uu(e){var n=e.alternate;n!==null&&(e.alternate=null,Uu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ae],delete n[Wt],delete n[wo],delete n[Xd],delete n[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fr));else if(r!==4&&(e=e.child,e!==null))for(Io(e,n,t),e=e.sibling;e!==null;)Io(e,n,t),e=e.sibling}function Mo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mo(e,n,t),e=e.sibling;e!==null;)Mo(e,n,t),e=e.sibling}var J=null,Re=!1;function Xe(e,n,t){for(t=t.child;t!==null;)Wu(e,n,t),t=t.sibling}function Wu(e,n,t){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(ni,t)}catch{}switch(t.tag){case 5:re||Hn(t,n);case 6:var r=J,i=Re;J=null,Xe(e,n,t),J=r,Re=i,J!==null&&(Re?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Re?(e=J,t=t.stateNode,e.nodeType===8?Mi(e.parentNode,t):e.nodeType===1&&Mi(e,t),At(e)):Mi(J,t.stateNode));break;case 4:r=J,i=Re,J=t.stateNode.containerInfo,Re=!0,Xe(e,n,t),J=r,Re=i;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&jo(t,n,l),i=i.next}while(i!==r)}Xe(e,n,t);break;case 1:if(!re&&(Hn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}Xe(e,n,t);break;case 21:Xe(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Xe(e,n,t),re=r):Xe(e,n,t);break;default:Xe(e,n,t)}}function Ma(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new hf),n.forEach(function(r){var i=Cf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function _e(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,Re=!1;break e;case 3:J=a.stateNode.containerInfo,Re=!0;break e;case 4:J=a.stateNode.containerInfo,Re=!0;break e}a=a.return}if(J===null)throw Error(v(160));Wu(o,l,i),J=null,Re=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){V(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vu(n,e),n=n.sibling}function Vu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(n,e),Ie(e),r&4){try{Tt(3,e,e.return),ui(3,e)}catch(k){V(e,e.return,k)}try{Tt(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:_e(n,e),Ie(e),r&512&&t!==null&&Hn(t,t.return);break;case 5:if(_e(n,e),Ie(e),r&512&&t!==null&&Hn(t,t.return),e.flags&32){var i=e.stateNode;try{jt(i,"")}catch(k){V(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&cs(i,o),io(a,l);var c=io(a,o);for(l=0;l<s.length;l+=2){var h=s[l],m=s[l+1];h==="style"?ms(i,m):h==="dangerouslySetInnerHTML"?ps(i,m):h==="children"?jt(i,m):qo(i,h,m,c)}switch(a){case"input":bi(i,o);break;case"textarea":ds(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?qn(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?qn(i,!!o.multiple,o.defaultValue,!0):qn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wt]=o}catch(k){V(e,e.return,k)}}break;case 6:if(_e(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(v(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){V(e,e.return,k)}}break;case 3:if(_e(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{At(n.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:_e(n,e),Ie(e);break;case 13:_e(n,e),Ie(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pl=Q())),r&4&&Ma(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||h,_e(n,e),re=c):_e(n,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(m=z=h;z!==null;){switch(p=z,y=p.child,p.tag){case 0:case 11:case 14:case 15:Tt(4,p,p.return);break;case 1:Hn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){V(r,t,k)}}break;case 5:Hn(p,p.return);break;case 22:if(p.memoizedState!==null){Da(m);continue}}y!==null?(y.return=p,z=y):Da(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=hs("display",l))}catch(k){V(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){V(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:_e(n,e),Ie(e),r&4&&Ma(e);break;case 21:break;default:_e(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Bu(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jt(i,""),r.flags&=-33);var o=Ia(e);Mo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ia(e);Io(e,a,l);break;default:throw Error(v(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gf(e,n,t){z=e,$u(e)}function $u(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||mr;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||re;a=mr;var c=re;if(mr=l,(re=s)&&!c)for(z=i;z!==null;)l=z,s=l.child,l.tag===22&&l.memoizedState!==null?Fa(i):s!==null?(s.return=l,z=s):Fa(i);for(;o!==null;)z=o,$u(o),o=o.sibling;z=i,mr=a,re=c}Aa(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Aa(e)}}function Aa(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||ui(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Te(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ka(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ka(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&At(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||n.flags&512&&Oo(n)}catch(p){V(n,n.return,p)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function Da(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function Fa(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ui(4,n)}catch(s){V(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){V(n,i,s)}}var o=n.return;try{Oo(n)}catch(s){V(n,o,s)}break;case 5:var l=n.return;try{Oo(n)}catch(s){V(n,l,s)}}}catch(s){V(n,n.return,s)}if(n===e){z=null;break}var a=n.sibling;if(a!==null){a.return=n.return,z=a;break}z=n.return}}var vf=Math.ceil,Yr=Ye.ReactCurrentDispatcher,xl=Ye.ReactCurrentOwner,xe=Ye.ReactCurrentBatchConfig,j=0,Z=null,q=null,b=0,he=0,Qn=mn(0),G=0,Kt=null,Rn=0,ci=0,Cl=0,Rt=null,ue=null,Pl=0,it=1/0,Ue=null,Xr=!1,Ao=null,un=null,gr=!1,tn=null,Zr=0,Nt=0,Do=null,_r=-1,Tr=0;function le(){return j&6?Q():_r!==-1?_r:_r=Q()}function cn(e){return e.mode&1?j&2&&b!==0?b&-b:bd.transition!==null?(Tr===0&&(Tr=_s()),Tr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Is(e.type)),e):1}function je(e,n,t,r){if(50<Nt)throw Nt=0,Do=null,Error(v(185));Yt(e,t,r),(!(j&2)||e!==Z)&&(e===Z&&(!(j&2)&&(ci|=t),G===4&&en(e,b)),pe(e,r),t===1&&j===0&&!(n.mode&1)&&(it=Q()+500,li&&gn()))}function pe(e,n){var t=e.callbackNode;bc(e,n);var r=Ir(e,e===Z?b:0);if(r===0)t!==null&&Kl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Kl(t),n===1)e.tag===0?Jd(Ua.bind(null,e)):bs(Ua.bind(null,e)),Gd(function(){!(j&6)&&gn()}),t=null;else{switch(Ts(r)){case 1:t=Zo;break;case 4:t=Ps;break;case 16:t=Or;break;case 536870912:t=Es;break;default:t=Or}t=Zu(t,Hu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Hu(e,n){if(_r=-1,Tr=0,j&6)throw Error(v(327));var t=e.callbackNode;if(Zn()&&e.callbackNode!==t)return null;var r=Ir(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Jr(e,r);else{n=r;var i=j;j|=2;var o=qu();(Z!==e||b!==n)&&(Ue=null,it=Q()+500,Cn(e,n));do try{kf();break}catch(a){Qu(e,a)}while(!0);cl(),Yr.current=o,j=i,q!==null?n=0:(Z=null,b=0,n=G)}if(n!==0){if(n===2&&(i=uo(e),i!==0&&(r=i,n=Fo(e,i))),n===1)throw t=Kt,Cn(e,0),en(e,r),pe(e,Q()),t;if(n===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!yf(i)&&(n=Jr(e,r),n===2&&(o=uo(e),o!==0&&(r=o,n=Fo(e,o))),n===1))throw t=Kt,Cn(e,0),en(e,r),pe(e,Q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:kn(e,ue,Ue);break;case 3:if(en(e,r),(r&130023424)===r&&(n=Pl+500-Q(),10<n)){if(Ir(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yo(kn.bind(null,e,ue,Ue),n);break}kn(e,ue,Ue);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Le(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vf(r/1960))-r,10<r){e.timeoutHandle=yo(kn.bind(null,e,ue,Ue),r);break}kn(e,ue,Ue);break;case 5:kn(e,ue,Ue);break;default:throw Error(v(329))}}}return pe(e,Q()),e.callbackNode===t?Hu.bind(null,e):null}function Fo(e,n){var t=Rt;return e.current.memoizedState.isDehydrated&&(Cn(e,n).flags|=256),e=Jr(e,n),e!==2&&(n=ue,ue=t,n!==null&&Uo(n)),e}function Uo(e){ue===null?ue=e:ue.push.apply(ue,e)}function yf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Oe(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Cl,n&=~ci,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Ua(e){if(j&6)throw Error(v(327));Zn();var n=Ir(e,0);if(!(n&1))return pe(e,Q()),null;var t=Jr(e,n);if(e.tag!==0&&t===2){var r=uo(e);r!==0&&(n=r,t=Fo(e,r))}if(t===1)throw t=Kt,Cn(e,0),en(e,n),pe(e,Q()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kn(e,ue,Ue),pe(e,Q()),null}function El(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(it=Q()+500,li&&gn())}}function Nn(e){tn!==null&&tn.tag===0&&!(j&6)&&Zn();var n=j;j|=1;var t=xe.transition,r=O;try{if(xe.transition=null,O=1,e)return e()}finally{O=r,xe.transition=t,j=n,!(j&6)&&gn()}}function _l(){he=Qn.current,A(Qn)}function Cn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kd(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:tt(),A(de),A(ie),gl();break;case 5:ml(r);break;case 4:tt();break;case 13:A(U);break;case 19:A(U);break;case 10:dl(r.type._context);break;case 22:case 23:_l()}t=t.return}if(Z=e,q=e=dn(e.current,null),b=he=n,G=0,Kt=null,Cl=ci=Rn=0,ue=Rt=null,Sn!==null){for(n=0;n<Sn.length;n++)if(t=Sn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Sn=null}return e}function Qu(e,n){do{var t=q;try{if(cl(),Cr.current=Gr,Kr){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kr=!1}if(Tn=0,X=K=B=null,_t=!1,Ht=0,xl.current=null,t===null||t.return===null){G=1,Kt=n,q=null;break}e:{var o=e,l=t.return,a=t,s=n;if(n=b,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Ea(l);if(y!==null){y.flags&=-257,_a(y,l,a,o,n),y.mode&1&&Pa(o,c,n),n=y,s=c;var w=n.updateQueue;if(w===null){var k=new Set;k.add(s),n.updateQueue=k}else w.add(s);break e}else{if(!(n&1)){Pa(o,c,n),Tl();break e}s=Error(v(426))}}else if(F&&a.mode&1){var D=Ea(l);if(D!==null){!(D.flags&65536)&&(D.flags|=256),_a(D,l,a,o,n),sl(rt(s,a));break e}}o=s=rt(s,a),G!==4&&(G=2),Rt===null?Rt=[o]:Rt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=Tu(o,s,n);wa(o,d);break e;case 1:a=s;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(un===null||!un.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=Ru(o,a,n);wa(o,g);break e}}o=o.return}while(o!==null)}Gu(t)}catch(S){n=S,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function qu(){var e=Yr.current;return Yr.current=Gr,e===null?Gr:e}function Tl(){(G===0||G===3||G===2)&&(G=4),Z===null||!(Rn&268435455)&&!(ci&268435455)||en(Z,b)}function Jr(e,n){var t=j;j|=2;var r=qu();(Z!==e||b!==n)&&(Ue=null,Cn(e,n));do try{wf();break}catch(i){Qu(e,i)}while(!0);if(cl(),j=t,Yr.current=r,q!==null)throw Error(v(261));return Z=null,b=0,G}function wf(){for(;q!==null;)Ku(q)}function kf(){for(;q!==null&&!Hc();)Ku(q)}function Ku(e){var n=Xu(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Gu(e):q=n,xl.current=null}function Gu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=pf(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,q=null;return}}else if(t=ff(t,n,he),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);G===0&&(G=5)}function kn(e,n,t){var r=O,i=xe.transition;try{xe.transition=null,O=1,zf(e,n,t,r)}finally{xe.transition=i,O=r}return null}function zf(e,n,t,r){do Zn();while(tn!==null);if(j&6)throw Error(v(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(ed(e,o),e===Z&&(q=Z=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gr||(gr=!0,Zu(Or,function(){return Zn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=xe.transition,xe.transition=null;var l=O;O=1;var a=j;j|=4,xl.current=null,mf(e,t),Vu(t,e),Bd(go),Mr=!!mo,go=mo=null,e.current=t,gf(t),Qc(),j=a,O=l,xe.transition=o}else e.current=t;if(gr&&(gr=!1,tn=e,Zr=i),o=e.pendingLanes,o===0&&(un=null),Gc(t.stateNode),pe(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xr)throw Xr=!1,e=Ao,Ao=null,e;return Zr&1&&e.tag!==0&&Zn(),o=e.pendingLanes,o&1?e===Do?Nt++:(Nt=0,Do=e):Nt=0,gn(),null}function Zn(){if(tn!==null){var e=Ts(Zr),n=xe.transition,t=O;try{if(xe.transition=null,O=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Zr=0,j&6)throw Error(v(331));var i=j;for(j|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(z=c;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:Tt(8,h,o)}var m=h.child;if(m!==null)m.return=h,z=m;else for(;z!==null;){h=z;var p=h.sibling,y=h.return;if(Uu(h),h===c){z=null;break}if(p!==null){p.return=y,z=p;break}z=y}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tt(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,z=d;break e}z=o.return}}var u=e.current;for(z=u;z!==null;){l=z;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,z=f;else e:for(l=u;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ui(9,a)}}catch(S){V(a,a.return,S)}if(a===l){z=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,z=g;break e}z=a.return}}if(j=i,gn(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{O=t,xe.transition=n}}return!1}function Ba(e,n,t){n=rt(t,n),n=Tu(e,n,1),e=sn(e,n,1),n=le(),e!==null&&(Yt(e,1,n),pe(e,n))}function V(e,n,t){if(e.tag===3)Ba(e,e,t);else for(;n!==null;){if(n.tag===3){Ba(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=rt(t,e),e=Ru(n,e,1),n=sn(n,e,1),e=le(),n!==null&&(Yt(n,1,e),pe(n,e));break}}n=n.return}}function Sf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=le(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(b&t)===t&&(G===4||G===3&&(b&130023424)===b&&500>Q()-Pl?Cn(e,0):Cl|=t),pe(e,n)}function Yu(e,n){n===0&&(e.mode&1?(n=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):n=1);var t=le();e=Ke(e,n),e!==null&&(Yt(e,n,t),pe(e,t))}function xf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yu(e,t)}function Cf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),Yu(e,t)}var Xu;Xu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,df(e,n,t);ce=!!(e.flags&131072)}else ce=!1,F&&n.flags&1048576&&eu(n,Vr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Er(e,n),e=n.pendingProps;var i=bn(n,ie.current);Xn(n,t),i=yl(null,n,r,e,i,t);var o=wl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(o=!0,Br(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pl(n),i.updater=si,n.stateNode=i,i._reactInternals=n,Po(n,r,e,t),n=To(null,n,r,!0,o,t)):(n.tag=0,F&&o&&ll(n),oe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Er(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Ef(r),e=Te(r,e),i){case 0:n=_o(null,n,r,e,t);break e;case 1:n=Na(null,n,r,e,t);break e;case 11:n=Ta(null,n,r,e,t);break e;case 14:n=Ra(null,n,r,Te(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),_o(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),Na(e,n,r,i,t);case 3:e:{if(Ou(n),e===null)throw Error(v(387));r=n.pendingProps,o=n.memoizedState,i=o.element,lu(e,n),Qr(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=rt(Error(v(423)),n),n=La(e,n,r,t,i);break e}else if(r!==i){i=rt(Error(v(424)),n),n=La(e,n,r,t,i);break e}else for(me=an(n.stateNode.containerInfo.firstChild),ge=n,F=!0,Ne=null,t=iu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===i){n=Ge(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return au(n),e===null&&So(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,vo(r,i)?l=null:o!==null&&vo(r,o)&&(n.flags|=32),ju(e,n),oe(e,n,l,t),n.child;case 6:return e===null&&So(n),null;case 13:return Iu(e,n,t);case 4:return hl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),Ta(e,n,r,i,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,I($r,r._currentValue),r._currentValue=l,o!==null)if(Oe(o.value,l)){if(o.children===i.children&&!de.current){n=Ge(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=He(-1,t&-t),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),xo(o.return,t,n),a.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(v(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),xo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}oe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Xn(n,t),i=Ce(i),r=r(i),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,i=Te(r,n.pendingProps),i=Te(r.type,i),Ra(e,n,r,i,t);case 15:return Nu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),Er(e,n),n.tag=1,fe(r)?(e=!0,Br(n)):e=!1,Xn(n,t),_u(n,r,i),Po(n,r,i,t),To(null,n,r,!0,e,t);case 19:return Mu(e,n,t);case 22:return Lu(e,n,t)}throw Error(v(156,n.tag))};function Zu(e,n){return Cs(e,n)}function Pf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,n,t,r){return new Pf(e,n,t,r)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Yo)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=Se(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Rr(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")Rl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Mn:return Pn(t.children,i,o,n);case Ko:l=8,i|=8;break;case Gi:return e=Se(12,t,n,i|2),e.elementType=Gi,e.lanes=o,e;case Yi:return e=Se(13,t,n,i),e.elementType=Yi,e.lanes=o,e;case Xi:return e=Se(19,t,n,i),e.elementType=Xi,e.lanes=o,e;case as:return di(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case os:l=10;break e;case ls:l=9;break e;case Go:l=11;break e;case Yo:l=14;break e;case Ze:l=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=Se(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Pn(e,n,t,r){return e=Se(7,e,r,n),e.lanes=t,e}function di(e,n,t,r){return e=Se(22,e,r,n),e.elementType=as,e.lanes=t,e.stateNode={isHidden:!1},e}function $i(e,n,t){return e=Se(6,e,null,n),e.lanes=t,e}function Hi(e,n,t){return n=Se(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function _f(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nl(e,n,t,r,i,o,l,a,s){return e=new _f(e,n,t,a,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Se(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(o),e}function Tf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ju(e){if(!e)return pn;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(fe(t))return Js(e,t,n)}return n}function bu(e,n,t,r,i,o,l,a,s){return e=Nl(t,r,!0,e,i,o,l,a,s),e.context=Ju(null),t=e.current,r=le(),i=cn(t),o=He(r,i),o.callback=n??null,sn(t,o,i),e.current.lanes=i,Yt(e,i,r),pe(e,r),e}function fi(e,n,t,r){var i=n.current,o=le(),l=cn(i);return t=Ju(t),n.context===null?n.context=t:n.pendingContext=t,n=He(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=sn(i,n,l),e!==null&&(je(e,i,l,o),xr(e,i,l)),l}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wa(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ll(e,n){Wa(e,n),(e=e.alternate)&&Wa(e,n)}function Rf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function jl(e){this._internalRoot=e}pi.prototype.render=jl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));fi(e,n,null,null)};pi.prototype.unmount=jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nn(function(){fi(null,e,null,null)}),n[qe]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ls();e={blockedOn:null,target:e,priority:n};for(var t=0;t<be.length&&n!==0&&n<be[t].priority;t++);be.splice(t,0,e),t===0&&Os(e)}};function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Va(){}function Nf(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=br(l);o.call(c)}}var l=bu(n,r,e,0,null,!1,!1,"",Va);return e._reactRootContainer=l,e[qe]=l.current,Ut(e.nodeType===8?e.parentNode:e),Nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=br(s);a.call(c)}}var s=Nl(e,0,!1,null,null,!1,!1,"",Va);return e._reactRootContainer=s,e[qe]=s.current,Ut(e.nodeType===8?e.parentNode:e),Nn(function(){fi(n,s,t,r)}),s}function mi(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=br(l);a.call(s)}}fi(n,l,e,i)}else l=Nf(t,n,e,i,r);return br(l)}Rs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&(Jo(n,t|1),pe(n,Q()),!(j&6)&&(it=Q()+500,gn()))}break;case 13:Nn(function(){var r=Ke(e,1);if(r!==null){var i=le();je(r,e,1,i)}}),Ll(e,1)}};bo=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=le();je(n,e,134217728,t)}Ll(e,134217728)}};Ns=function(e){if(e.tag===13){var n=cn(e),t=Ke(e,n);if(t!==null){var r=le();je(t,e,n,r)}Ll(e,n)}};Ls=function(){return O};js=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};lo=function(e,n,t){switch(n){case"input":if(bi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=oi(r);if(!i)throw Error(v(90));us(r),bi(r,i)}}}break;case"textarea":ds(e,t);break;case"select":n=t.value,n!=null&&qn(e,!!t.multiple,n,!1)}};ys=El;ws=Nn;var Lf={usingClientEntryPoint:!1,Events:[Zt,Un,oi,gs,vs,El]},vt={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jf={bundleType:vt.bundleType,version:vt.version,rendererPackageName:vt.rendererPackageName,rendererConfig:vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ss(e),e===null?null:e.stateNode},findFiberByHostInstance:vt.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{ni=vr.inject(jf),De=vr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lf;ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ol(n))throw Error(v(200));return Tf(e,n,null,t)};ye.createRoot=function(e,n){if(!Ol(e))throw Error(v(299));var t=!1,r="",i=ec;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Nl(e,1,!1,null,null,t,!1,r,i),e[qe]=n.current,Ut(e.nodeType===8?e.parentNode:e),new jl(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Ss(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Nn(e)};ye.hydrate=function(e,n,t){if(!hi(n))throw Error(v(200));return mi(null,e,n,!0,t)};ye.hydrateRoot=function(e,n,t){if(!Ol(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=ec;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=bu(n,null,e,1,t??null,i,!1,o,l),e[qe]=n.current,Ut(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new pi(n)};ye.render=function(e,n,t){if(!hi(n))throw Error(v(200));return mi(null,e,n,!1,t)};ye.unmountComponentAtNode=function(e){if(!hi(e))throw Error(v(40));return e._reactRootContainer?(Nn(function(){mi(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};ye.unstable_batchedUpdates=El;ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!hi(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return mi(e,n,t,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),ns.exports=ye;var Of=ns.exports,$a=Of;qi.createRoot=$a.createRoot,qi.hydrateRoot=$a.hydrateRoot;function If({current:e,onChange:n,locale:t}){return C.jsx("div",{className:"flex gap-1 px-4 py-1 overflow-x-auto scrollbar-hide",children:rc.map(r=>C.jsxs("button",{onClick:()=>n(r.id),className:`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${e===r.id?"bg-indigo-100 text-indigo-700 font-medium":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[C.jsx("span",{children:r.icon}),C.jsx("span",{children:r.label[t]})]},r.id))})}function Mf({value:e,onChange:n,locale:t}){const r=t==="zh"?"搜索模板...":"Search templates...";return C.jsxs("div",{className:"relative",children:[C.jsxs("svg",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[C.jsx("circle",{cx:"11",cy:"11",r:"8"}),C.jsx("path",{d:"m21 21-4.35-4.35"})]}),C.jsx("input",{type:"text",value:e,onChange:i=>n(i.target.value),placeholder:r,className:"w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"})]})}function Af({templates:e,locale:n}){return e.length===0?C.jsx("div",{className:"flex items-center justify-center h-32 text-gray-400 text-sm",children:n==="zh"?"没有找到模板":"No templates found"}):C.jsx("div",{className:"flex flex-col gap-2",children:e.map(t=>C.jsx(Df,{template:t,locale:n},t.id))})}function Df({template:e,locale:n}){const[t,r]=We.useState("idle"),i=async()=>{await navigator.clipboard.writeText(e.prompt[n]),r("copied"),setTimeout(()=>r("idle"),1500)},o=async()=>{try{const[l]=await chrome.tabs.query({active:!0,currentWindow:!0}),a=["chatgpt.com","claude.ai","gemini.google.com","chat.deepseek.com","www.doubao.com"];if(!((l==null?void 0:l.url)&&a.some(c=>l.url.includes(c)))){await navigator.clipboard.writeText(e.prompt[n]),r("fallback"),setTimeout(()=>r("idle"),2e3);return}chrome.runtime.sendMessage({type:"INSERT_TEMPLATE",payload:{text:e.prompt[n]}}),r("inserted"),setTimeout(()=>r("idle"),1500)}catch{await navigator.clipboard.writeText(e.prompt[n]),r("fallback"),setTimeout(()=>r("idle"),2e3)}};return C.jsxs("div",{className:"bg-white rounded-lg border border-gray-100 p-3 hover:border-indigo-200 hover:shadow-sm transition-all",children:[C.jsx("h3",{className:"text-sm font-medium text-gray-800 mb-1",children:e.title[n]}),C.jsx("p",{className:"text-xs text-gray-500 mb-2 line-clamp-2",children:e.description[n]}),C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("button",{onClick:o,className:`px-3 py-1 text-xs rounded-md font-medium transition-colors ${t==="inserted"?"bg-green-50 text-green-600":t==="fallback"?"bg-yellow-50 text-yellow-600":"bg-indigo-50 text-indigo-600 hover:bg-indigo-100"}`,children:t==="inserted"?n==="zh"?"已插入":"Inserted":t==="fallback"?n==="zh"?"已复制(请打开AI页面)":"Copied (open AI page)":n==="zh"?"插入":"Insert"}),C.jsx("button",{onClick:i,className:"px-3 py-1 text-xs rounded-md bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors",children:t==="copied"?n==="zh"?"已复制":"Copied":n==="zh"?"复制":"Copy"}),C.jsx("div",{className:"flex-1"}),C.jsx("div",{className:"flex gap-1",children:e.tags.slice(0,2).map(l=>C.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-400",children:l[n]},l[n]))})]})]})}function Ff({locale:e,onLocaleChange:n,onBack:t}){const r=i=>{n(i),Qi({locale:i})};return C.jsxs("div",{className:"flex flex-col h-full bg-gray-50",children:[C.jsxs("header",{className:"flex items-center gap-3 px-4 py-3 bg-white border-b",children:[C.jsx("button",{onClick:t,className:"p-1 rounded hover:bg-gray-100","aria-label":"Back",children:C.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:C.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),C.jsx("h1",{className:"text-base font-semibold text-gray-800",children:e==="zh"?"设置":"Settings"})]}),C.jsxs("div",{className:"flex-1 p-4 space-y-4",children:[C.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[C.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-3",children:e==="zh"?"语言 / Language":"Language / 语言"}),C.jsxs("div",{className:"flex gap-2",children:[C.jsx("button",{onClick:()=>r("zh"),className:`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${e==="zh"?"bg-indigo-100 text-indigo-700 border border-indigo-200":"bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"}`,children:"中文"}),C.jsx("button",{onClick:()=>r("en"),className:`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${e==="en"?"bg-indigo-100 text-indigo-700 border border-indigo-200":"bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"}`,children:"English"})]})]}),C.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[C.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:e==="zh"?"关于":"About"}),C.jsx("p",{className:"text-xs text-gray-500",children:"PromptPro v1.0.0"}),C.jsx("p",{className:"text-xs text-gray-400 mt-1",children:e==="zh"?"一键优化 AI 提示词，内置专业模板库":"One-click AI prompt optimizer with template library"})]}),C.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[C.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:e==="zh"?"使用统计":"Usage"}),C.jsx("p",{className:"text-xs text-gray-500",children:e==="zh"?"每日免费优化次数：10 次":"Daily free optimizations: 10"})]})]})]})}const Uf=[{id:"w1",category:"writing",title:{zh:"文章大纲生成",en:"Article Outline Generator"},description:{zh:"生成结构化的文章大纲",en:"Generate a structured article outline"},prompt:{zh:`请为以下主题生成一篇详细的文章大纲，包含引言、3-5个主要章节（每个章节有2-3个子要点）和结论。

主题：{topic}

要求：
- 逻辑清晰，层次分明
- 每个章节标题简洁有力
- 子要点具体可展开`,en:`Please generate a detailed article outline for the following topic, including an introduction, 3-5 main sections (with 2-3 sub-points each), and a conclusion.

Topic: {topic}

Requirements:
- Clear logic and well-structured hierarchy
- Concise and impactful section titles
- Specific and expandable sub-points`},variables:["topic"],tags:[{zh:"大纲",en:"outline"},{zh:"文章",en:"article"},{zh:"结构化",en:"structured"}]},{id:"w2",category:"writing",title:{zh:"小红书文案",en:"Xiaohongshu Copywriting"},description:{zh:"生成吸引人的小红书风格文案",en:"Generate engaging social media copy"},prompt:{zh:`你是一位资深小红书博主。请为以下内容写一篇小红书文案。

内容主题：{topic}

要求：
- 标题吸引眼球，使用emoji
- 正文口语化、有感染力
- 分段清晰，适合手机阅读
- 结尾引导互动
- 添加5-8个相关标签`,en:`You are an experienced Xiaohongshu (RED) influencer. Please write a Xiaohongshu-style post for the following content.

Topic: {topic}

Requirements:
- Eye-catching title with emojis
- Conversational and engaging tone
- Clear paragraphs optimized for mobile reading
- End with a call-to-action for interaction
- Add 5-8 relevant hashtags`},variables:["topic"],tags:[{zh:"小红书",en:"xiaohongshu"},{zh:"社交媒体",en:"social-media"},{zh:"文案",en:"copywriting"}]},{id:"w3",category:"writing",title:{zh:"SEO 文章写作",en:"SEO Article Writing"},description:{zh:"生成 SEO 友好的长文",en:"Generate SEO-friendly long-form content"},prompt:{zh:`你是一位 SEO 内容专家。请围绕以下关键词写一篇 SEO 友好的文章。

目标关键词：{keyword}

要求：
- 标题包含关键词，吸引点击
- 文章 1500-2000 字
- 自然融入关键词（密度 2-3%）
- 使用 H2/H3 子标题结构
- 开头直击痛点
- 包含实用建议和案例
- 结尾有 CTA`,en:`You are an SEO content expert. Please write an SEO-friendly article around the following keyword.

Target Keyword: {keyword}

Requirements:
- Title contains the keyword and is click-worthy
- 1500-2000 words
- Naturally weave in the keyword (2-3% density)
- Use H2/H3 subheadings
- Start by addressing pain points directly
- Include practical advice and case examples
- End with a clear CTA`},variables:["keyword"],tags:[{zh:"SEO",en:"seo"},{zh:"长文",en:"long-form"},{zh:"内容营销",en:"content-marketing"}]},{id:"w4",category:"writing",title:{zh:"故事续写",en:"Story Continuation"},description:{zh:"根据开头续写故事",en:"Continue a story from the beginning"},prompt:{zh:`请根据以下故事开头，续写一个引人入胜的故事。

故事开头：{story_start}

要求：
- 保持与开头一致的风格和语气
- 情节有起伏和转折
- 人物形象鲜明
- 对话自然生动
- 续写约 500-800 字`,en:`Please continue the following story opening into an engaging narrative.

Story Opening: {story_start}

Requirements:
- Maintain consistent style and tone with the opening
- Plot with rises, falls, and twists
- Vivid character portrayals
- Natural and lively dialogue
- Continue for approximately 500-800 words`},variables:["story_start"],tags:[{zh:"故事",en:"story"},{zh:"创作",en:"creative"},{zh:"续写",en:"continuation"}]},{id:"w5",category:"writing",title:{zh:"产品描述",en:"Product Description"},description:{zh:"生成有说服力的产品描述",en:"Generate persuasive product descriptions"},prompt:{zh:`请为以下产品写一段有说服力的产品描述。

产品信息：{product_info}

要求：
- 突出核心卖点和差异化优势
- 使用感性+理性结合的表达
- 描述使用场景
- 语言简洁有力
- 适合电商详情页使用
- 150-300 字`,en:`Please write a persuasive product description for the following product.

Product Info: {product_info}

Requirements:
- Highlight core selling points and differentiators
- Combine emotional and rational appeals
- Describe use cases
- Concise and impactful language
- Suitable for e-commerce product pages
- 150-300 words`},variables:["product_info"],tags:[{zh:"产品",en:"product"},{zh:"电商",en:"e-commerce"},{zh:"文案",en:"copywriting"}]},{id:"w6",category:"writing",title:{zh:"文本摘要",en:"Text Summary"},description:{zh:"将长文本压缩为精炼摘要",en:"Compress long text into concise summary"},prompt:{zh:`请将以下文本压缩为一段精炼的摘要，保留核心信息和关键观点。

原文：{text}

要求：
- 摘要长度为原文的 20-30%
- 保留关键数据和结论
- 使用客观中立的语气
- 逻辑连贯，可独立阅读`,en:`Please compress the following text into a concise summary, preserving core information and key points.

Original Text: {text}

Requirements:
- Summary length: 20-30% of the original
- Retain key data and conclusions
- Use objective and neutral tone
- Coherent and self-contained`},variables:["text"],tags:[{zh:"摘要",en:"summary"},{zh:"压缩",en:"compress"},{zh:"总结",en:"summarize"}]},{id:"w7",category:"writing",title:{zh:"标题生成器",en:"Title Generator"},description:{zh:"为文章生成多个吸引人的标题",en:"Generate multiple catchy titles"},prompt:{zh:`请为以下内容生成 10 个吸引人的标题选项。

文章主题/内容概要：{content}

要求：
- 风格多样（疑问式、数字式、悬念式、对比式等）
- 简洁有力，15字以内
- 激发好奇心
- 适合在社交媒体传播
- 标注每个标题的风格类型`,en:`Please generate 10 catchy title options for the following content.

Topic/Content Summary: {content}

Requirements:
- Diverse styles (question, number, suspense, contrast, etc.)
- Concise and impactful, under 70 characters
- Spark curiosity
- Optimized for social media sharing
- Label the style type for each title`},variables:["content"],tags:[{zh:"标题",en:"title"},{zh:"创意",en:"creative"},{zh:"社交媒体",en:"social-media"}]},{id:"w8",category:"writing",title:{zh:"公众号文章",en:"WeChat Article"},description:{zh:"撰写适合公众号传播的深度文章",en:"Write in-depth articles for WeChat"},prompt:{zh:`请为以下主题撰写一篇公众号文章。

主题：{topic}
目标读者：{audience}

要求：
- 标题吸引打开（可用数字、疑问、反常识）
- 开头用故事/数据/问题引入，3秒抓住注意力
- 正文分段清晰，每段不超过4行
- 善用加粗、引用块突出重点
- 穿插案例和数据增强说服力
- 结尾升华主题，引导点赞/在看/转发
- 全文 2000-3000 字
- 配图建议（描述需要什么图）`,en:`Please write an in-depth article suitable for newsletter/blog publishing.

Topic: {topic}
Target Readers: {audience}

Requirements:
- Click-worthy title (use numbers, questions, or counterintuitive angles)
- Open with a story/data/question to grab attention in 3 seconds
- Clear paragraphs, no more than 4 lines each
- Use bold and blockquotes to highlight key points
- Weave in cases and data for persuasion
- Conclude with a meaningful takeaway and CTA
- 2000-3000 words total
- Image suggestions (describe what visuals are needed)`},variables:["topic","audience"],tags:[{zh:"公众号",en:"wechat"},{zh:"深度",en:"in-depth"},{zh:"文章",en:"article"}]}],Bf=[{id:"wp1",category:"workplace",title:{zh:"转正述职报告",en:"Probation Review Report"},description:{zh:"生成结构化的转正述职报告",en:"Generate a structured probation review report"},prompt:{zh:`请帮我撰写一份转正述职报告。

基本信息：
- 岗位：{position}
- 试用期时长：{duration}
- 主要工作内容：{work_content}

请按以下结构撰写：
1. 开头：简述入职背景和对岗位的理解
2. 试用期工作总结（按项目/职责分类，量化成果）
3. 个人成长与收获（技能提升、团队协作、文化融入）
4. 不足与改进方向（真诚但不过度自贬）
5. 未来工作计划与目标
6. 结尾：表达对团队的感谢和转正意愿

风格：专业诚恳，数据说话，突出价值贡献，1500-2000字`,en:`Please help me write a probation review report.

Basic Info:
- Position: {position}
- Probation Duration: {duration}
- Main Work Content: {work_content}

Structure:
1. Opening: Brief background and understanding of the role
2. Probation work summary (categorized by project/responsibility, with quantified results)
3. Personal growth and gains (skills, collaboration, culture fit)
4. Areas for improvement (sincere but not overly self-deprecating)
5. Future work plan and goals
6. Closing: Express gratitude to the team and intent to be confirmed

Style: Professional and sincere, data-driven, emphasize value contribution, 1500-2000 words`},variables:["position","duration","work_content"],tags:[{zh:"转正",en:"probation"},{zh:"述职",en:"review"},{zh:"职场",en:"workplace"}]},{id:"wp2",category:"workplace",title:{zh:"年终总结报告",en:"Annual Review Report"},description:{zh:"生成全面的年终工作总结",en:"Generate a comprehensive annual work review"},prompt:{zh:`请帮我撰写一份年终工作总结报告。

基本信息：
- 岗位/部门：{position}
- 年度主要工作：{work_content}
- 关键数据/成果：{achievements}

请按以下结构撰写：
1. 年度工作概述（一段话总结全年亮点）
2. 重点工作成果（3-5个核心项目，每个包含：背景、行动、结果、数据）
3. 能力成长（专业技能、管理能力、跨部门协作）
4. 问题与反思（遇到的挑战、失误及教训）
5. 明年规划（目标、策略、所需资源支持）

风格：结构清晰、数据驱动、成果导向，2000-3000字。用STAR法则描述项目成果。`,en:`Please help me write a comprehensive annual work review report.

Basic Info:
- Position/Department: {position}
- Main Work This Year: {work_content}
- Key Data/Achievements: {achievements}

Structure:
1. Annual overview (one paragraph summarizing year highlights)
2. Key achievements (3-5 core projects, each with: background, actions, results, data)
3. Skill growth (technical, management, cross-functional collaboration)
4. Challenges and reflections (issues, mistakes, lessons learned)
5. Next year plan (goals, strategies, resource needs)

Style: Well-structured, data-driven, results-oriented, 2000-3000 words. Use the STAR framework for project descriptions.`},variables:["position","work_content","achievements"],tags:[{zh:"年终",en:"annual"},{zh:"总结",en:"summary"},{zh:"职场",en:"workplace"}]},{id:"wp3",category:"workplace",title:{zh:"OKR 撰写",en:"OKR Writing"},description:{zh:"制定清晰可衡量的 OKR",en:"Write clear and measurable OKRs"},prompt:{zh:`请帮我制定下季度的 OKR（目标与关键结果）。

岗位/职责：{role}
业务方向：{direction}

要求：
- 2-3 个 Objective（鼓舞人心、有挑战性）
- 每个 O 下 3-4 个 Key Results（可量化、有明确标准）
- KR 符合 SMART 原则
- 区分承诺型 KR 和挑战型 KR
- 给出信心指数（0.3-0.7 为佳）
- 附带简要行动计划`,en:`Please help me draft OKRs (Objectives and Key Results) for next quarter.

Role: {role}
Business Direction: {direction}

Requirements:
- 2-3 Objectives (inspiring and challenging)
- 3-4 Key Results per Objective (quantifiable with clear criteria)
- KRs follow the SMART principle
- Distinguish between committed and aspirational KRs
- Provide confidence index (0.3-0.7 is ideal)
- Include a brief action plan`},variables:["role","direction"],tags:[{zh:"OKR",en:"okr"},{zh:"目标",en:"goal"},{zh:"规划",en:"planning"}]},{id:"wp4",category:"workplace",title:{zh:"晋升答辩材料",en:"Promotion Defense Material"},description:{zh:"准备晋升答辩的结构化材料",en:"Prepare structured promotion defense materials"},prompt:{zh:`请帮我准备晋升答辩材料。

当前职级：{current_level}
目标职级：{target_level}
核心项目/成果：{achievements}

请按以下结构准备：
1. 个人简介与职业发展路径
2. 核心能力展示（对标目标职级能力模型）
3. 代表性项目详述（2-3个，用STAR法则）
4. 技术/业务影响力（团队贡献、知识分享、流程优化）
5. 未来规划与更高层级的价值承诺

风格：自信不自大，用事实和数据说话，突出超出当前职级的贡献`,en:`Please help me prepare promotion defense materials.

Current Level: {current_level}
Target Level: {target_level}
Key Projects/Achievements: {achievements}

Structure:
1. Personal intro and career development path
2. Core capability showcase (mapped to target level competency model)
3. Representative projects in detail (2-3 projects, using STAR framework)
4. Technical/business influence (team contribution, knowledge sharing, process optimization)
5. Future plans and value commitment at the higher level

Style: Confident but not arrogant, fact and data driven, highlight contributions exceeding current level`},variables:["current_level","target_level","achievements"],tags:[{zh:"晋升",en:"promotion"},{zh:"答辩",en:"defense"},{zh:"职场",en:"workplace"}]},{id:"wp5",category:"workplace",title:{zh:"周报生成器",en:"Weekly Report Generator"},description:{zh:"快速生成结构化周报",en:"Quickly generate structured weekly reports"},prompt:{zh:`请根据以下工作内容，帮我生成一份结构化的周报。

本周工作内容：{work_content}

格式要求：
1. 本周完成事项（按重要性排序）
2. 进行中的工作及进度
3. 遇到的问题及解决方案
4. 下周计划

风格：简洁专业，用数据说话`,en:`Please help me generate a structured weekly report based on the following work content.

This Week's Work: {work_content}

Format:
1. Completed items this week (sorted by importance)
2. In-progress work and status
3. Issues encountered and solutions
4. Plan for next week

Style: Concise and professional, data-driven`},variables:["work_content"],tags:[{zh:"周报",en:"weekly-report"},{zh:"工作",en:"work"},{zh:"汇报",en:"report"}]},{id:"wp6",category:"workplace",title:{zh:"会议纪要整理",en:"Meeting Minutes"},description:{zh:"将会议内容整理成结构化纪要",en:"Organize meeting content into structured minutes"},prompt:{zh:`请将以下会议内容整理成结构化的会议纪要。

会议内容：{meeting_content}

格式：
- 会议主题
- 参会人员（如有提及）
- 讨论要点（按议题分类）
- 决议事项
- 待办事项（标注负责人和截止时间）
- 下次会议安排`,en:`Please organize the following meeting content into structured meeting minutes.

Meeting Content: {meeting_content}

Format:
- Meeting topic
- Attendees (if mentioned)
- Discussion points (categorized by agenda)
- Decisions made
- Action items (with owner and deadline)
- Next meeting schedule`},variables:["meeting_content"],tags:[{zh:"会议",en:"meeting"},{zh:"纪要",en:"minutes"},{zh:"整理",en:"organize"}]},{id:"wp7",category:"workplace",title:{zh:"邮件润色",en:"Email Polish"},description:{zh:"让邮件更专业、得体",en:"Make emails more professional"},prompt:{zh:`请帮我润色以下邮件内容，使其更加专业、得体、简洁。保持原意不变，优化表达方式和语气。

原始邮件：
{email_content}

要求：
- 语气正式但不生硬
- 逻辑清晰，重点突出
- 适当使用过渡词
- 结尾礼貌得体`,en:`Please polish the following email to make it more professional, appropriate, and concise. Keep the original meaning, but optimize expression and tone.

Original Email:
{email_content}

Requirements:
- Formal but not stiff tone
- Clear logic with emphasized key points
- Appropriate use of transition words
- Polite and appropriate closing`},variables:["email_content"],tags:[{zh:"邮件",en:"email"},{zh:"润色",en:"polish"},{zh:"商务",en:"business"}]},{id:"wp8",category:"workplace",title:{zh:"项目复盘报告",en:"Project Retrospective"},description:{zh:"系统化的项目复盘总结",en:"Systematic project retrospective summary"},prompt:{zh:`请帮我撰写一份项目复盘报告。

项目信息：
- 项目名称：{project_name}
- 项目周期：{duration}
- 项目成果：{results}
- 遇到的问题：{issues}

请按以下结构撰写：
1. 项目背景与目标回顾
2. 关键里程碑与实际达成情况
3. 做得好的地方（Continue）
4. 需要改进的地方（Stop）
5. 新的尝试建议（Start）
6. 关键经验教训（可复用到其他项目）
7. 数据对比（目标 vs 实际）
8. 致谢与后续计划`,en:`Please help me write a project retrospective report.

Project Info:
- Project Name: {project_name}
- Duration: {duration}
- Results: {results}
- Issues Encountered: {issues}

Structure:
1. Project background and goal review
2. Key milestones vs actual delivery
3. What went well (Continue)
4. What needs improvement (Stop)
5. New experiments to try (Start)
6. Key lessons learned (reusable for other projects)
7. Data comparison (target vs actual)
8. Acknowledgements and next steps`},variables:["project_name","duration","results","issues"],tags:[{zh:"复盘",en:"retrospective"},{zh:"项目",en:"project"},{zh:"总结",en:"summary"}]},{id:"wp9",category:"workplace",title:{zh:"工作交接文档",en:"Work Handover Document"},description:{zh:"生成清晰的工作交接文档",en:"Generate clear work handover documents"},prompt:{zh:`请帮我撰写工作交接文档。

交接信息：
- 岗位：{position}
- 负责的工作内容：{responsibilities}
- 进行中的项目：{ongoing_projects}

请包含：
1. 日常工作职责清单（按频率分类：每日/每周/每月）
2. 进行中项目状态与下一步
3. 关键联系人与协作关系
4. 常用工具/系统/账号（不含密码）
5. 重要文档/资料位置索引
6. 常见问题与处理方式（FAQ）
7. 注意事项与避坑指南
8. 建议优先处理的事项`,en:`Please help me write a work handover document.

Handover Info:
- Position: {position}
- Responsibilities: {responsibilities}
- Ongoing Projects: {ongoing_projects}

Include:
1. Daily responsibility list (categorized by frequency: daily/weekly/monthly)
2. Ongoing project status and next steps
3. Key contacts and collaboration relationships
4. Common tools/systems/accounts (no passwords)
5. Important document/resource location index
6. Common issues and resolution methods (FAQ)
7. Cautions and pitfall guide
8. Suggested priority items`},variables:["position","responsibilities","ongoing_projects"],tags:[{zh:"交接",en:"handover"},{zh:"文档",en:"document"},{zh:"职场",en:"workplace"}]},{id:"wp10",category:"workplace",title:{zh:"绩效自评",en:"Performance Self-Review"},description:{zh:"撰写有说服力的绩效自评",en:"Write a persuasive performance self-review"},prompt:{zh:`请帮我撰写本季度/年度的绩效自评。

岗位：{position}
考核周期内的工作：{work_content}
量化成果：{metrics}

要求：
1. 对照 KPI/OKR 逐项评估完成情况
2. 用 STAR 法则描述 2-3 个代表性成果
3. 量化贡献（节省成本、提升效率、增长数据等）
4. 展示超出岗位职责的额外贡献
5. 诚实提及不足，但重点放在改进行动
6. 语气自信专业，避免过度谦虚或自夸

风格：数据驱动，成果导向，800-1200字`,en:`Please help me write a quarterly/annual performance self-review.

Position: {position}
Work During Review Period: {work_content}
Quantified Results: {metrics}

Requirements:
1. Evaluate completion of KPIs/OKRs item by item
2. Use STAR framework to describe 2-3 representative achievements
3. Quantify contributions (cost savings, efficiency gains, growth metrics)
4. Showcase contributions beyond core responsibilities
5. Honestly mention shortcomings but focus on improvement actions
6. Confident and professional tone, avoid excessive humility or boasting

Style: Data-driven, results-oriented, 800-1200 words`},variables:["position","work_content","metrics"],tags:[{zh:"绩效",en:"performance"},{zh:"自评",en:"self-review"},{zh:"考核",en:"evaluation"}]}],Wf=[{id:"c1",category:"coding",title:{zh:"代码审查",en:"Code Review"},description:{zh:"对代码进行专业审查",en:"Professional code review"},prompt:{zh:`你是一位资深软件工程师。请对以下代码进行审查。

\`\`\`
{code}
\`\`\`

请从以下维度评审：
1. 代码质量（可读性、命名规范）
2. 潜在 Bug 和边界情况
3. 性能问题
4. 安全隐患
5. 改进建议（附修改后的代码）

格式：按严重程度排序，给出具体行号和修改建议。`,en:`You are a senior software engineer. Please review the following code.

\`\`\`
{code}
\`\`\`

Review dimensions:
1. Code quality (readability, naming conventions)
2. Potential bugs and edge cases
3. Performance issues
4. Security risks
5. Improvement suggestions (with revised code)

Format: Sort by severity, provide specific line numbers and suggested changes.`},variables:["code"],tags:[{zh:"代码审查",en:"code-review"},{zh:"质量",en:"quality"},{zh:"最佳实践",en:"best-practice"}]},{id:"c2",category:"coding",title:{zh:"需求转代码",en:"Requirements to Code"},description:{zh:"将需求描述转为可执行代码",en:"Convert requirements to executable code"},prompt:{zh:`请根据以下需求描述，编写完整的实现代码。

需求：{requirement}
技术栈：{tech_stack}

要求：
- 代码完整可运行
- 包含必要的错误处理
- 关键逻辑添加注释
- 遵循该语言的最佳实践
- 如有多种实现方案，说明选择理由`,en:`Please write complete implementation code based on the following requirements.

Requirement: {requirement}
Tech Stack: {tech_stack}

Requirements:
- Complete, runnable code
- Include necessary error handling
- Add comments for key logic
- Follow language best practices
- If multiple approaches exist, explain why you chose one`},variables:["requirement","tech_stack"],tags:[{zh:"实现",en:"implementation"},{zh:"需求",en:"requirements"},{zh:"编码",en:"coding"}]},{id:"c3",category:"coding",title:{zh:"Bug 诊断",en:"Bug Diagnosis"},description:{zh:"分析代码问题并给出修复方案",en:"Analyze code issues and provide fixes"},prompt:{zh:`我遇到了一个 Bug，请帮我诊断并修复。

代码：
\`\`\`
{code}
\`\`\`

错误信息/异常行为：{error}

请：
1. 分析根本原因
2. 解释为什么会出现这个问题
3. 给出修复方案（附完整修改后的代码）
4. 建议如何避免类似问题`,en:`I have a bug, please help diagnose and fix it.

Code:
\`\`\`
{code}
\`\`\`

Error/Unexpected Behavior: {error}

Please:
1. Analyze the root cause
2. Explain why this issue occurred
3. Provide a fix (with complete revised code)
4. Suggest how to avoid similar issues`},variables:["code","error"],tags:[{zh:"调试",en:"debug"},{zh:"Bug",en:"bug"},{zh:"修复",en:"fix"}]},{id:"c4",category:"coding",title:{zh:"单元测试生成",en:"Unit Test Generator"},description:{zh:"为代码生成全面的单元测试",en:"Generate comprehensive unit tests"},prompt:{zh:`请为以下代码编写全面的单元测试。

\`\`\`
{code}
\`\`\`

测试框架：{framework}

要求：
- 覆盖正常路径和边界情况
- 包含错误输入的测试
- 测试命名清晰描述测试意图
- 使用 AAA 模式（Arrange-Act-Assert）
- 目标覆盖率 > 90%`,en:`Please write comprehensive unit tests for the following code.

\`\`\`
{code}
\`\`\`

Test Framework: {framework}

Requirements:
- Cover happy paths and edge cases
- Include tests for invalid inputs
- Test names clearly describe intent
- Use AAA pattern (Arrange-Act-Assert)
- Target coverage > 90%`},variables:["code","framework"],tags:[{zh:"测试",en:"testing"},{zh:"单元测试",en:"unit-test"},{zh:"质量",en:"quality"}]},{id:"c5",category:"coding",title:{zh:"代码重构",en:"Code Refactoring"},description:{zh:"优化代码结构和可维护性",en:"Optimize code structure and maintainability"},prompt:{zh:`请重构以下代码，提升其可读性、可维护性和性能。

\`\`\`
{code}
\`\`\`

重构目标：{goal}

要求：
- 保持功能不变
- 解释每处重构的理由
- 应用适当的设计模式
- 消除代码异味
- 给出重构前后的对比说明`,en:`Please refactor the following code to improve readability, maintainability, and performance.

\`\`\`
{code}
\`\`\`

Refactoring Goal: {goal}

Requirements:
- Preserve functionality
- Explain the rationale for each refactor
- Apply appropriate design patterns
- Eliminate code smells
- Provide before/after comparison`},variables:["code","goal"],tags:[{zh:"重构",en:"refactor"},{zh:"优化",en:"optimization"},{zh:"设计模式",en:"design-pattern"}]},{id:"c6",category:"coding",title:{zh:"API 设计",en:"API Design"},description:{zh:"设计 RESTful API 接口",en:"Design RESTful API endpoints"},prompt:{zh:`请为以下业务场景设计 RESTful API。

业务场景：{scenario}

要求：
- 遵循 RESTful 规范
- 包含请求方法、路径、参数、响应格式
- 考虑分页、过滤、排序
- 包含错误响应格式
- 给出 OpenAPI/Swagger 格式的文档
- 考虑版本控制策略`,en:`Please design RESTful APIs for the following business scenario.

Scenario: {scenario}

Requirements:
- Follow RESTful conventions
- Include HTTP methods, paths, parameters, response formats
- Consider pagination, filtering, sorting
- Include error response formats
- Provide OpenAPI/Swagger documentation
- Consider versioning strategy`},variables:["scenario"],tags:[{zh:"API",en:"api"},{zh:"REST",en:"rest"},{zh:"设计",en:"design"}]},{id:"c7",category:"coding",title:{zh:"正则表达式生成",en:"Regex Generator"},description:{zh:"根据需求生成正则表达式",en:"Generate regex from requirements"},prompt:{zh:`请根据以下需求生成正则表达式。

匹配需求：{requirement}

请提供：
1. 正则表达式
2. 逐段解释每个部分的含义
3. 5个匹配成功的示例
4. 3个不匹配的示例
5. 在 JavaScript/Python 中的使用代码`,en:`Please generate a regex based on the following requirement.

Matching Requirement: {requirement}

Provide:
1. The regex pattern
2. Step-by-step explanation of each part
3. 5 examples that match
4. 3 examples that do not match
5. Usage code in JavaScript and Python`},variables:["requirement"],tags:[{zh:"正则",en:"regex"},{zh:"匹配",en:"matching"},{zh:"工具",en:"tool"}]},{id:"c8",category:"coding",title:{zh:"SQL 查询优化",en:"SQL Query Optimization"},description:{zh:"优化 SQL 查询性能",en:"Optimize SQL query performance"},prompt:{zh:`请优化以下 SQL 查询的性能。

\`\`\`sql
{sql}
\`\`\`

表结构/数据量信息：{context}

请：
1. 分析当前查询的性能瓶颈
2. 给出优化后的 SQL
3. 建议需要创建的索引
4. 解释优化原理
5. 估算优化前后的性能差异`,en:`Please optimize the following SQL query for performance.

\`\`\`sql
{sql}
\`\`\`

Table Schema / Data Volume: {context}

Please:
1. Analyze current performance bottlenecks
2. Provide the optimized SQL
3. Suggest indexes to create
4. Explain the optimization rationale
5. Estimate performance improvement`},variables:["sql","context"],tags:[{zh:"SQL",en:"sql"},{zh:"性能",en:"performance"},{zh:"数据库",en:"database"}]},{id:"c9",category:"coding",title:{zh:"代码解释",en:"Code Explanation"},description:{zh:"详细解释代码逻辑",en:"Explain code logic in detail"},prompt:{zh:`请详细解释以下代码的逻辑和工作原理。

\`\`\`
{code}
\`\`\`

请：
1. 概述代码的整体功能
2. 逐段解释关键逻辑
3. 说明使用的算法/设计模式
4. 标注可能的坑点或注意事项
5. 用通俗的比喻帮助理解复杂部分`,en:`Please explain the logic and how the following code works in detail.

\`\`\`
{code}
\`\`\`

Please:
1. Outline the overall functionality
2. Explain key logic section by section
3. Identify algorithms/design patterns used
4. Highlight potential pitfalls or caveats
5. Use analogies to help understand complex parts`},variables:["code"],tags:[{zh:"解释",en:"explain"},{zh:"学习",en:"learning"},{zh:"理解",en:"understanding"}]},{id:"c10",category:"coding",title:{zh:"Git Commit 信息",en:"Git Commit Message"},description:{zh:"生成规范的 commit message",en:"Generate conventional commit messages"},prompt:{zh:`请根据以下代码变更，生成一条规范的 Git Commit Message。

变更内容：{changes}

格式要求（Conventional Commits）：
- type(scope): subject
- 空行
- body（详细描述）
- 空行
- footer（Breaking Changes 等）

请给出 3 个候选 commit message，从简洁到详细。`,en:`Please generate a conventional Git commit message for the following changes.

Changes: {changes}

Format (Conventional Commits):
- type(scope): subject
- blank line
- body (detailed description)
- blank line
- footer (Breaking Changes, etc.)

Provide 3 candidate commit messages, from concise to detailed.`},variables:["changes"],tags:[{zh:"Git",en:"git"},{zh:"Commit",en:"commit"},{zh:"规范",en:"convention"}]}],Vf=[{id:"t1",category:"translation",title:{zh:"中英互译（信达雅）",en:"CN-EN Translation (Faithful & Elegant)"},description:{zh:"高质量中英文互译，兼顾准确与流畅",en:"High-quality CN-EN translation"},prompt:{zh:`你是一位资深翻译专家，精通中英双语。请将以下文本翻译为{target_language}。

原文：
{text}

翻译要求：
- 信：准确传达原文含义，不遗漏信息
- 达：译文通顺流畅，符合目标语言表达习惯
- 雅：用词考究，文风与原文一致
- 专业术语保持准确
- 如有歧义，在译文后用括号标注`,en:`You are a senior translation expert, fluent in both Chinese and English. Please translate the following text into {target_language}.

Source Text:
{text}

Translation Requirements:
- Faithful: Accurately convey the original meaning without omitting information
- Smooth: Read naturally in the target language
- Elegant: Use refined wording matching the original style
- Maintain accuracy of technical terms
- For ambiguities, add clarification in parentheses`},variables:["text","target_language"],tags:[{zh:"翻译",en:"translation"},{zh:"中英",en:"cn-en"},{zh:"专业",en:"professional"}]},{id:"t2",category:"translation",title:{zh:"学术论文翻译",en:"Academic Paper Translation"},description:{zh:"学术风格的精准翻译",en:"Precise academic-style translation"},prompt:{zh:`你是一位学术翻译专家。请将以下学术文本翻译为{target_language}。

原文：
{text}

要求：
- 保持学术语体和正式风格
- 专业术语使用该领域通用译法，首次出现时附原文
- 保留原文的逻辑结构和论证层次
- 被动语态、长句等按目标语言习惯调整
- 引用格式保持不变
- 数字、公式、缩写保持原样`,en:`You are an academic translation expert. Please translate the following academic text into {target_language}.

Source Text:
{text}

Requirements:
- Maintain academic register and formal style
- Use field-standard translations for technical terms, with original term in parentheses on first occurrence
- Preserve original logical structure and argumentation
- Adjust passive voice and long sentences to suit target language conventions
- Keep citation format unchanged
- Keep numbers, formulas, and abbreviations as-is`},variables:["text","target_language"],tags:[{zh:"学术",en:"academic"},{zh:"论文",en:"paper"},{zh:"翻译",en:"translation"}]},{id:"t3",category:"translation",title:{zh:"本地化翻译",en:"Localization Translation"},description:{zh:"适合产品/UI的本地化翻译",en:"Product/UI localization translation"},prompt:{zh:`你是一位产品本地化专家。请将以下产品文案/UI文本翻译为{target_language}。

原文：
{text}

产品类型：{product_type}

要求：
- 符合目标市场的文化习惯和用语偏好
- UI文本简洁，控制字符长度
- 按钮/标签类文本不超过原文长度的130%
- 保持品牌调性一致
- 避免直译，优先意译
- 标注需要注意的文化差异点`,en:`You are a product localization expert. Please translate the following product copy/UI text into {target_language}.

Source Text:
{text}

Product Type: {product_type}

Requirements:
- Match cultural conventions and language preferences of the target market
- Keep UI text concise and within character limits
- Button/label text should not exceed 130% of original length
- Maintain consistent brand voice
- Prefer adaptation over literal translation
- Note any cultural differences to watch for`},variables:["text","target_language","product_type"],tags:[{zh:"本地化",en:"localization"},{zh:"UI",en:"ui"},{zh:"产品",en:"product"}]},{id:"t4",category:"translation",title:{zh:"多语言批量翻译",en:"Multi-language Batch Translation"},description:{zh:"一次翻译为多种语言",en:"Translate into multiple languages at once"},prompt:{zh:`请将以下文本同时翻译为以下语言：英语、日语、韩语、法语、西班牙语。

原文：
{text}

输出格式：
🇺🇸 English: ...
🇯🇵 日本語: ...
🇰🇷 한국어: ...
🇫🇷 Français: ...
🇪🇸 Español: ...

要求：每种语言都要自然流畅，不是逐字翻译。`,en:`Please translate the following text into multiple languages: English, Japanese, Korean, French, Spanish.

Source Text:
{text}

Output Format:
🇺🇸 English: ...
🇯🇵 日本語: ...
🇰🇷 한국어: ...
🇫🇷 Français: ...
🇪🇸 Español: ...

Requirement: Each translation should be natural and fluent, not word-for-word.`},variables:["text"],tags:[{zh:"多语言",en:"multilingual"},{zh:"批量",en:"batch"},{zh:"翻译",en:"translation"}]},{id:"t5",category:"translation",title:{zh:"字幕翻译",en:"Subtitle Translation"},description:{zh:"视频字幕的翻译与时间轴适配",en:"Video subtitle translation"},prompt:{zh:`你是一位字幕翻译专家。请将以下字幕翻译为{target_language}。

字幕内容：
{text}

要求：
- 每行字幕控制在15个中文字/35个英文字符以内
- 口语化表达，易于快速阅读
- 保持说话人的语气和风格
- 俚语/梗适当本地化
- 如有双关语无法翻译，用脚注说明`,en:`You are a subtitle translation expert. Please translate the following subtitles into {target_language}.

Subtitle Content:
{text}

Requirements:
- Keep each line within 15 Chinese chars / 35 English chars
- Use conversational language for quick reading
- Maintain speaker tone and style
- Localize slang and memes appropriately
- For untranslatable wordplay, add a footnote explanation`},variables:["text","target_language"],tags:[{zh:"字幕",en:"subtitle"},{zh:"视频",en:"video"},{zh:"翻译",en:"translation"}]}],$f=[{id:"m1",category:"marketing",title:{zh:"爆款标题公式",en:"Viral Headline Formulas"},description:{zh:"用经典公式生成高点击率标题",en:"Generate high-CTR headlines with proven formulas"},prompt:{zh:`你是一位资深内容营销专家。请用以下经典标题公式，为我的内容生成 10 个爆款标题。

内容主题：{topic}
目标受众：{audience}

请使用以下公式各生成至少1个：
- 数字式：「7个方法让你...」
- 疑问式：「为什么...？」
- 对比式：「从...到...」
- 恐惧式：「不做...你会...」
- 好奇式：「...的秘密」
- 利益式：「如何...省下...」

要求：标注每个标题使用的公式类型和预估点击吸引力（1-5星）`,en:`You are a senior content marketing expert. Please generate 10 viral headlines for my content using classic formulas.

Topic: {topic}
Target Audience: {audience}

Use at least one of each formula:
- Number: "7 ways to..."
- Question: "Why...?"
- Contrast: "From... to..."
- Fear: "If you don't..., you'll..."
- Curiosity: "The secret of..."
- Benefit: "How to... save..."

Requirement: Label each headline with its formula type and predicted click appeal (1-5 stars)`},variables:["topic","audience"],tags:[{zh:"标题",en:"headline"},{zh:"爆款",en:"viral"},{zh:"点击率",en:"ctr"}]},{id:"m2",category:"marketing",title:{zh:"品牌故事撰写",en:"Brand Story Writing"},description:{zh:"打造有感染力的品牌故事",en:"Craft compelling brand stories"},prompt:{zh:`请为以下品牌撰写一个有感染力的品牌故事。

品牌信息：
- 品牌名：{brand_name}
- 行业：{industry}
- 核心价值观：{values}
- 创立背景：{background}

要求：
- 使用英雄之旅叙事结构
- 突出创始人/团队的初心和使命
- 融入具体细节和情感共鸣点
- 结尾升华到品牌愿景
- 500-800字
- 适合放在官网「关于我们」页面`,en:`Please write a compelling brand story for the following brand.

Brand Info:
- Brand Name: {brand_name}
- Industry: {industry}
- Core Values: {values}
- Founding Background: {background}

Requirements:
- Use the Hero's Journey narrative structure
- Highlight the founder/team's original mission
- Include specific details and emotional resonance points
- End by elevating to the brand vision
- 500-800 words
- Suitable for the "About Us" page`},variables:["brand_name","industry","values","background"],tags:[{zh:"品牌",en:"brand"},{zh:"故事",en:"story"},{zh:"文案",en:"copywriting"}]},{id:"m3",category:"marketing",title:{zh:"社交媒体内容日历",en:"Social Media Content Calendar"},description:{zh:"规划一周的社交媒体内容",en:"Plan a week of social media content"},prompt:{zh:`请为以下品牌/账号规划一周的社交媒体内容日历。

账号信息：
- 品牌/账号：{brand}
- 平台：{platform}
- 目标受众：{audience}
- 近期营销重点：{focus}

请输出：
| 日期 | 内容主题 | 内容类型 | 文案摘要 | 配图建议 | 发布时间 |

要求：
- 内容类型多样（教育、娱乐、互动、促销比例 4:3:2:1）
- 考虑平台算法偏好
- 包含互动引导（投票、提问、UGC征集）
- 标注最佳发布时间`,en:`Please plan a one-week social media content calendar for the following brand/account.

Account Info:
- Brand/Account: {brand}
- Platform: {platform}
- Target Audience: {audience}
- Recent Marketing Focus: {focus}

Output:
| Date | Theme | Content Type | Copy Summary | Image Suggestion | Posting Time |

Requirements:
- Diverse content types (educational, entertainment, interactive, promotional in 4:3:2:1 ratio)
- Consider platform algorithm preferences
- Include interaction prompts (polls, questions, UGC calls)
- Note optimal posting times`},variables:["brand","platform","audience","focus"],tags:[{zh:"社交媒体",en:"social-media"},{zh:"内容规划",en:"content-plan"},{zh:"日历",en:"calendar"}]},{id:"m4",category:"marketing",title:{zh:"广告文案 AIDA",en:"AIDA Ad Copy"},description:{zh:"用 AIDA 模型写转化文案",en:"Write conversion copy using AIDA model"},prompt:{zh:`请用 AIDA 模型为以下产品/服务撰写广告文案。

产品/服务：{product}
目标受众：{audience}
核心卖点：{selling_point}
投放渠道：{channel}

请按 AIDA 结构输出：
- Attention（注意）：用什么钩子抓住注意力
- Interest（兴趣）：如何激发深入了解的欲望
- Desire（欲望）：如何让受众产生拥有的渴望
- Action（行动）：用什么 CTA 促成转化

同时提供3个版本：短版（朋友圈/信息流）、中版（详情页首屏）、长版（落地页）`,en:`Please write ad copy for the following product/service using the AIDA model.

Product/Service: {product}
Target Audience: {audience}
Core Selling Point: {selling_point}
Channel: {channel}

Output in AIDA structure:
- Attention: What hook grabs attention
- Interest: How to spark deeper interest
- Desire: How to create a desire to own
- Action: What CTA drives conversion

Also provide 3 versions: Short (social feed), Medium (above-the-fold), Long (landing page)`},variables:["product","audience","selling_point","channel"],tags:[{zh:"广告",en:"advertising"},{zh:"AIDA",en:"aida"},{zh:"转化",en:"conversion"}]},{id:"m5",category:"marketing",title:{zh:"竞品分析框架",en:"Competitive Analysis Framework"},description:{zh:"系统化分析竞争对手",en:"Systematically analyze competitors"},prompt:{zh:`请帮我对以下竞品进行系统化分析。

我的产品：{my_product}
竞品列表：{competitors}

请从以下维度分析：
1. 产品定位与目标用户
2. 核心功能对比（表格形式）
3. 定价策略
4. 营销渠道与获客方式
5. 用户口碑（优势与槽点）
6. 技术/体验差异化
7. SWOT 分析
8. 我的差异化机会点

输出格式：结构化报告，关键结论加粗标注`,en:`Please conduct a systematic competitive analysis.

My Product: {my_product}
Competitors: {competitors}

Analyze across these dimensions:
1. Product positioning and target users
2. Core feature comparison (table format)
3. Pricing strategy
4. Marketing channels and acquisition methods
5. User reputation (strengths and complaints)
6. Technical/UX differentiation
7. SWOT analysis
8. My differentiation opportunities

Output: Structured report with key conclusions bolded`},variables:["my_product","competitors"],tags:[{zh:"竞品",en:"competitor"},{zh:"分析",en:"analysis"},{zh:"策略",en:"strategy"}]},{id:"m6",category:"marketing",title:{zh:"用户画像构建",en:"User Persona Builder"},description:{zh:"构建详细的目标用户画像",en:"Build detailed target user personas"},prompt:{zh:`请为以下产品构建 2-3 个典型用户画像。

产品：{product}
行业：{industry}

每个画像包含：
- 姓名（虚构）、年龄、职业、收入
- 一句话描述
- 目标与动机
- 痛点与挫折
- 信息获取渠道
- 决策因素
- 典型使用场景
- 一句代表性语录

要求：画像之间有明显差异，覆盖核心用户群和潜力用户群`,en:`Please build 2-3 typical user personas for the following product.

Product: {product}
Industry: {industry}

Each persona includes:
- Name (fictional), age, occupation, income
- One-line description
- Goals and motivations
- Pain points and frustrations
- Information sources
- Decision factors
- Typical use cases
- A representative quote

Requirement: Personas should differ significantly, covering core users and potential users`},variables:["product","industry"],tags:[{zh:"用户画像",en:"user-persona"},{zh:"产品",en:"product"},{zh:"营销",en:"marketing"}]}],Hf=[{id:"a1",category:"academic",title:{zh:"论文摘要撰写",en:"Paper Abstract Writing"},description:{zh:"生成规范的学术论文摘要",en:"Generate a standard academic paper abstract"},prompt:{zh:`请根据以下论文信息，撰写一篇规范的学术摘要。

论文标题：{title}
研究领域：{field}
主要内容/发现：{content}

摘要结构（共200-300字）：
1. 研究背景与问题（1-2句）
2. 研究方法（1-2句）
3. 主要发现/结果（2-3句）
4. 结论与意义（1-2句）

要求：
- 使用学术语体，第三人称
- 避免引用和缩写
- 包含关键术语
- 最后列出 3-5 个关键词`,en:`Please write a standard academic abstract based on the paper info below.

Paper Title: {title}
Research Field: {field}
Main Content/Findings: {content}

Abstract Structure (200-300 words):
1. Research background and problem (1-2 sentences)
2. Research methodology (1-2 sentences)
3. Main findings/results (2-3 sentences)
4. Conclusions and significance (1-2 sentences)

Requirements:
- Use academic register, third person
- Avoid citations and abbreviations
- Include key terminology
- List 3-5 keywords at the end`},variables:["title","field","content"],tags:[{zh:"摘要",en:"abstract"},{zh:"论文",en:"paper"},{zh:"学术",en:"academic"}]},{id:"a2",category:"academic",title:{zh:"文献综述框架",en:"Literature Review Framework"},description:{zh:"构建文献综述的逻辑框架",en:"Build a logical framework for literature review"},prompt:{zh:`请帮我构建一个文献综述的框架。

研究主题：{topic}
已有文献方向：{directions}

请输出：
1. 综述结构大纲（按主题/时间/方法论组织）
2. 每个部分应覆盖的核心问题
3. 文献之间的逻辑关系（支持/对立/补充）
4. 研究空白（Gap）的识别
5. 过渡段落的写法建议
6. 建议的搜索关键词和数据库

要求：体现批判性思维，不是简单罗列文献`,en:`Please help me build a literature review framework.

Research Topic: {topic}
Existing Literature Directions: {directions}

Output:
1. Review structure outline (organized by theme/timeline/methodology)
2. Core questions each section should address
3. Logical relationships between literature (supporting/opposing/complementary)
4. Identification of research gaps
5. Suggestions for transitional paragraphs
6. Recommended search keywords and databases

Requirement: Demonstrate critical thinking, not just listing literature`},variables:["topic","directions"],tags:[{zh:"文献综述",en:"literature-review"},{zh:"框架",en:"framework"},{zh:"研究",en:"research"}]},{id:"a3",category:"academic",title:{zh:"研究方法论设计",en:"Research Methodology Design"},description:{zh:"设计严谨的研究方法论",en:"Design rigorous research methodology"},prompt:{zh:`请帮我设计研究方法论。

研究问题：{question}
研究类型：{type}
可用资源/数据：{resources}

请包含：
1. 研究设计（定性/定量/混合）及理由
2. 样本选择策略与样本量论证
3. 数据收集方法与工具
4. 数据分析方法
5. 信效度保障措施
6. 伦理考量
7. 研究局限性预判
8. 时间线规划

要求：方法论选择要有理论依据，引用方法论文献`,en:`Please help me design a research methodology.

Research Question: {question}
Research Type: {type}
Available Resources/Data: {resources}

Include:
1. Research design (qualitative/quantitative/mixed) and rationale
2. Sampling strategy and sample size justification
3. Data collection methods and tools
4. Data analysis methods
5. Reliability and validity measures
6. Ethical considerations
7. Anticipated limitations
8. Timeline planning

Requirement: Methodology choices must be theoretically grounded with citations`},variables:["question","type","resources"],tags:[{zh:"方法论",en:"methodology"},{zh:"研究设计",en:"research-design"},{zh:"学术",en:"academic"}]},{id:"a4",category:"academic",title:{zh:"论文润色（学术风格）",en:"Academic Paper Polishing"},description:{zh:"提升论文的学术表达质量",en:"Improve academic writing quality"},prompt:{zh:`请对以下学术文本进行润色，提升其学术表达质量。

原文：
{text}

润色要求：
- 使用正式学术语体
- 消除口语化表达
- 改善句式多样性（避免重复句型）
- 加强逻辑连接词的使用
- 确保主谓一致、时态统一
- 术语使用规范统一
- 标注修改处并简要说明修改理由

输出格式：润色后的文本 + 修改说明列表`,en:`Please polish the following academic text to improve its scholarly quality.

Original Text:
{text}

Polishing Requirements:
- Use formal academic register
- Remove colloquial expressions
- Improve sentence variety (avoid repetitive structures)
- Strengthen use of logical connectors
- Ensure subject-verb agreement and consistent tense
- Standardize terminology usage
- Mark each change with a brief rationale

Output: Polished text + list of revisions with explanations`},variables:["text"],tags:[{zh:"润色",en:"polish"},{zh:"论文",en:"paper"},{zh:"学术写作",en:"academic-writing"}]},{id:"a5",category:"academic",title:{zh:"开题报告撰写",en:"Research Proposal Writing"},description:{zh:"撰写结构完整的开题报告",en:"Write a complete research proposal"},prompt:{zh:`请帮我撰写开题报告。

研究题目：{title}
学科方向：{field}
初步想法：{ideas}

请按以下结构撰写：
1. 选题背景与意义（理论意义+实践意义）
2. 国内外研究现状（文献梳理+研究空白）
3. 研究内容与目标
4. 研究方法与技术路线
5. 创新点
6. 研究计划与时间安排
7. 参考文献格式建议

要求：3000-5000字，逻辑严密，体现研究可行性`,en:`Please help me write a research proposal.

Research Title: {title}
Field: {field}
Initial Ideas: {ideas}

Structure:
1. Background and significance (theoretical + practical)
2. State of research (literature review + research gaps)
3. Research content and objectives
4. Methodology and technical roadmap
5. Innovation points
6. Research plan and timeline
7. Reference formatting suggestions

Requirements: 3000-5000 words, rigorous logic, demonstrate feasibility`},variables:["title","field","ideas"],tags:[{zh:"开题",en:"proposal"},{zh:"报告",en:"report"},{zh:"研究",en:"research"}]},{id:"a6",category:"academic",title:{zh:"答辩PPT大纲",en:"Defense PPT Outline"},description:{zh:"规划论文答辩PPT结构",en:"Plan thesis defense PPT structure"},prompt:{zh:`请为我的论文答辩设计 PPT 大纲。

论文题目：{title}
答辩时间限制：{duration}分钟
论文核心内容：{content}

请输出：
1. 每页 PPT 的标题和要点（控制总页数）
2. 每页建议停留时间
3. 关键图表建议
4. 预判评委可能提问（5-8个）及应答要点
5. 开场白和结束语建议

要求：重点突出、逻辑清晰、时间分配合理（研究方法和结果占60%以上）`,en:`Please design a PPT outline for my thesis defense.

Thesis Title: {title}
Defense Time Limit: {duration} minutes
Thesis Core Content: {content}

Output:
1. Title and key points for each slide (control total slide count)
2. Suggested time per slide
3. Key charts/figures suggestions
4. Anticipated committee questions (5-8) with response strategies
5. Opening and closing remark suggestions

Requirements: Highlight key points, clear logic, balanced time allocation (methodology + results > 60%)`},variables:["title","duration","content"],tags:[{zh:"答辩",en:"defense"},{zh:"PPT",en:"ppt"},{zh:"论文",en:"paper"}]}],Qf=[{id:"an1",category:"analysis",title:{zh:"数据分析报告",en:"Data Analysis Report"},description:{zh:"将数据转化为有洞察的分析报告",en:"Transform data into insightful analysis reports"},prompt:{zh:`请根据以下数据，撰写一份数据分析报告。

数据/指标：{data}
分析目的：{purpose}

报告结构：
1. 数据概览(关键指标摘要)
2. 趋势分析(同比/环比变化)
3. 异常点识别与原因假设
4. 细分维度分析(按时间/地区/用户群等)
5. 关键洞察(3-5条)
6. 行动建议(基于数据的具体建议)

要求：用数据说话，每个结论都有数据支撑，图表建议用文字描述`,en:`Please write a data analysis report based on the following data.

Data/Metrics: {data}
Purpose: {purpose}

Report Structure:
1. Data overview (key metrics summary)
2. Trend analysis (YoY/MoM changes)
3. Anomaly identification and hypothesized causes
4. Segmented analysis (by time/region/user group)
5. Key insights (3-5 items)
6. Action recommendations (data-driven suggestions)

Requirement: Let data speak, every conclusion backed by data; describe chart suggestions in text`},variables:["data","purpose"],tags:[{zh:"数据",en:"data"},{zh:"分析",en:"analysis"},{zh:"报告",en:"report"}]},{id:"an2",category:"analysis",title:{zh:"SWOT 分析",en:"SWOT Analysis"},description:{zh:"全面的 SWOT 战略分析",en:"Comprehensive SWOT strategic analysis"},prompt:{zh:`请对以下对象进行 SWOT 分析。

分析对象：{subject}
行业/背景：{context}

请输出：

| | 有利 | 不利 |
|---|---|---|
| 内部 | Strengths | Weaknesses |
| 外部 | Opportunities | Threats |

每个象限列出 4-6 个要点，并附带：
1. SO策略(利用优势抓住机会)
2. WO策略(克服劣势利用机会)
3. ST策略(利用优势应对威胁)
4. WT策略(减少劣势避免威胁)

最后给出优先级排序的战略建议`,en:`Please conduct a SWOT analysis on the following subject.

Subject: {subject}
Industry/Context: {context}

Output:

| | Favorable | Unfavorable |
|---|---|---|
| Internal | Strengths | Weaknesses |
| External | Opportunities | Threats |

List 4-6 points per quadrant, with:
1. SO strategies (use strengths to seize opportunities)
2. WO strategies (overcome weaknesses to leverage opportunities)
3. ST strategies (use strengths to counter threats)
4. WT strategies (minimize weaknesses to avoid threats)

Finally provide prioritized strategic recommendations`},variables:["subject","context"],tags:[{zh:"SWOT",en:"swot"},{zh:"战略",en:"strategy"},{zh:"分析",en:"analysis"}]},{id:"an3",category:"analysis",title:{zh:"用户反馈分析",en:"User Feedback Analysis"},description:{zh:"从用户反馈中提取洞察",en:"Extract insights from user feedback"},prompt:{zh:`请分析以下用户反馈/评论数据。

反馈内容：
{feedback}

请输出：
1. 情感分析(正面/中性/负面比例)
2. 高频关键词/主题聚类
3. 核心痛点排序(按提及频率和严重程度)
4. 用户最满意的点
5. 功能需求提取(按优先级排序)
6. 典型用户声音引用
7. 改进建议(短期速赢 + 长期规划)

要求：定量+定性结合，给出可执行的产品建议`,en:`Please analyze the following user feedback/review data.

Feedback Content:
{feedback}

Output:
1. Sentiment analysis (positive/neutral/negative ratio)
2. High-frequency keywords/topic clusters
3. Core pain points ranked (by mention frequency and severity)
4. User satisfaction highlights
5. Feature request extraction (prioritized)
6. Typical user voice quotes
7. Improvement suggestions (short-term wins + long-term plans)

Requirement: Combine quantitative and qualitative analysis, provide actionable product recommendations`},variables:["feedback"],tags:[{zh:"用户反馈",en:"user-feedback"},{zh:"洞察",en:"insight"},{zh:"产品",en:"product"}]},{id:"an4",category:"analysis",title:{zh:"商业模式画布",en:"Business Model Canvas"},description:{zh:"用画布模型分析商业模式",en:"Analyze business model using canvas"},prompt:{zh:`请用商业模式画布(Business Model Canvas)分析以下业务。

业务描述：{business}

请填充九大模块：
1. 客户细分(Customer Segments)
2. 价值主张(Value Propositions)
3. 渠道通路(Channels)
4. 客户关系(Customer Relationships)
5. 收入来源(Revenue Streams)
6. 核心资源(Key Resources)
7. 关键业务(Key Activities)
8. 重要合作(Key Partnerships)
9. 成本结构(Cost Structure)

最后给出：模式优势、潜在风险、优化建议`,en:`Please analyze the following business using the Business Model Canvas.

Business Description: {business}

Fill in the nine blocks:
1. Customer Segments
2. Value Propositions
3. Channels
4. Customer Relationships
5. Revenue Streams
6. Key Resources
7. Key Activities
8. Key Partnerships
9. Cost Structure

Finally provide: model strengths, potential risks, optimization suggestions`},variables:["business"],tags:[{zh:"商业模式",en:"business-model"},{zh:"画布",en:"canvas"},{zh:"战略",en:"strategy"}]},{id:"an5",category:"analysis",title:{zh:"根因分析(5Why)",en:"Root Cause Analysis (5 Whys)"},description:{zh:"用5Why方法深挖问题根因",en:"Deep dive into root causes using 5 Whys"},prompt:{zh:`请用 5 Why 方法分析以下问题的根本原因。

问题描述：{problem}
背景信息：{context}

分析过程：
- Why 1: 为什么会出现这个问题？→ 因为...
- Why 2: 为什么会...？→ 因为...
- Why 3: 为什么会...？→ 因为...
- Why 4: 为什么会...？→ 因为...
- Why 5: 为什么会...？→ 根本原因是...

最后输出：
1. 根本原因总结
2. 短期应急措施
3. 长期根治方案
4. 预防机制建议
5. 鱼骨图结构(文字版)`,en:`Please analyze the root cause of the following problem using the 5 Whys method.

Problem Description: {problem}
Background: {context}

Analysis:
- Why 1: Why does this problem occur? → Because...
- Why 2: Why does that happen? → Because...
- Why 3: Why does that happen? → Because...
- Why 4: Why does that happen? → Because...
- Why 5: Why does that happen? → The root cause is...

Final Output:
1. Root cause summary
2. Short-term remediation
3. Long-term solution
4. Prevention mechanism
5. Fishbone diagram structure (text version)`},variables:["problem","context"],tags:[{zh:"根因",en:"root-cause"},{zh:"5Why",en:"5-whys"},{zh:"问题解决",en:"problem-solving"}]},{id:"an6",category:"analysis",title:{zh:"行业趋势分析",en:"Industry Trend Analysis"},description:{zh:"分析行业发展趋势与机会",en:"Analyze industry trends and opportunities"},prompt:{zh:`请对以下行业进行趋势分析。

行业：{industry}
关注时间范围：{timeframe}

请从以下维度分析：
1. 宏观环境(PEST分析：政策、经济、社会、技术)
2. 行业规模与增长率
3. 关键驱动因素
4. 技术变革趋势
5. 竞争格局变化
6. 消费者行为变化
7. 新兴机会点(3-5个)
8. 潜在风险与挑战
9. 对从业者的建议

要求：结合最新动态，给出有前瞻性的判断`,en:`Please conduct a trend analysis for the following industry.

Industry: {industry}
Time Frame: {timeframe}

Analyze across:
1. Macro environment (PEST: Political, Economic, Social, Technological)
2. Industry size and growth rate
3. Key drivers
4. Technology disruption trends
5. Competitive landscape changes
6. Consumer behavior shifts
7. Emerging opportunities (3-5)
8. Potential risks and challenges
9. Recommendations for practitioners

Requirement: Combine latest trends, provide forward-looking judgment`},variables:["industry","timeframe"],tags:[{zh:"行业",en:"industry"},{zh:"趋势",en:"trend"},{zh:"机会",en:"opportunity"}]}],qf=[{id:"cr1",category:"creative",title:{zh:"头脑风暴",en:"Brainstorming"},description:{zh:"激发创意灵感的头脑风暴",en:"Creative brainstorming session"},prompt:{zh:`请围绕以下主题进行头脑风暴，生成尽可能多的创意点子。

主题：{topic}
约束条件：{constraints}

要求：
- 先发散后收敛
- 至少生成 20 个点子(不要自我审查)
- 包含常规思路和疯狂想法
- 用 SCAMPER 方法拓展：
  S-替代 C-组合 A-调整 M-放大/缩小 P-另作他用 E-消除 R-重排
- 最后筛选出 Top 5 最有潜力的，说明理由
- 对 Top 5 给出初步可行性评估`,en:`Please brainstorm around the following topic and generate as many ideas as possible.

Topic: {topic}
Constraints: {constraints}

Requirements:
- Diverge first, then converge
- Generate at least 20 ideas (no self-censorship)
- Include conventional and wild ideas
- Use SCAMPER method to expand:
  S-Substitute C-Combine A-Adapt M-Magnify/Minify P-Put to other use E-Eliminate R-Rearrange
- Select Top 5 most promising ideas with rationale
- Provide initial feasibility assessment for Top 5`},variables:["topic","constraints"],tags:[{zh:"头脑风暴",en:"brainstorm"},{zh:"创意",en:"creative"},{zh:"灵感",en:"inspiration"}]},{id:"cr2",category:"creative",title:{zh:"产品命名",en:"Product Naming"},description:{zh:"为产品/品牌起一个好名字",en:"Create great product/brand names"},prompt:{zh:`请为以下产品/品牌起名。

产品描述：{product}
目标受众：{audience}
品牌调性：{tone}

请从以下维度各生成 5 个候选名：
1. 描述型(直接说明功能)
2. 隐喻型(用比喻传达理念)
3. 造词型(新造词汇)
4. 缩写型(首字母/音节组合)
5. 情感型(唤起特定感受)

每个名字附带：
- 含义解释
- 域名可用性建议(.com/.cn)
- 商标风险评估(高/中/低)
- 国际化友好度`,en:`Please name the following product/brand.

Product Description: {product}
Target Audience: {audience}
Brand Tone: {tone}

Generate 5 candidates per dimension:
1. Descriptive (directly stating function)
2. Metaphorical (using analogies)
3. Coined (newly created words)
4. Acronym (initial letters/syllable combinations)
5. Emotional (evoking specific feelings)

Each name includes:
- Meaning explanation
- Domain availability suggestion (.com/.cn)
- Trademark risk assessment (high/medium/low)
- International friendliness`},variables:["product","audience","tone"],tags:[{zh:"命名",en:"naming"},{zh:"品牌",en:"brand"},{zh:"创意",en:"creative"}]},{id:"cr3",category:"creative",title:{zh:"Midjourney 提示词",en:"Midjourney Prompt"},description:{zh:"生成高质量的 AI 绘画提示词",en:"Generate high-quality AI art prompts"},prompt:{zh:`请为以下画面描述生成 Midjourney 提示词。

想要的画面：{description}
风格偏好：{style}

请生成 5 个版本的提示词，每个包含：
- 主体描述(subject)
- 环境/背景(environment)
- 光照(lighting)
- 风格(style/artist reference)
- 技术参数(--ar, --v, --s, --q)

格式示例：
\`[主体], [环境], [光照], [风格], [细节] --ar 16:9 --v 6 --s 750\`

从写实到抽象，风格递进排列`,en:`Please generate Midjourney prompts for the following image description.

Desired Image: {description}
Style Preference: {style}

Generate 5 prompt versions, each containing:
- Subject description
- Environment/background
- Lighting
- Style/artist reference
- Technical parameters (--ar, --v, --s, --q)

Format example:
\`[subject], [environment], [lighting], [style], [details] --ar 16:9 --v 6 --s 750\`

Progress from realistic to abstract`},variables:["description","style"],tags:[{zh:"Midjourney",en:"midjourney"},{zh:"AI绘画",en:"ai-art"},{zh:"提示词",en:"prompt"}]},{id:"cr4",category:"creative",title:{zh:"短视频脚本",en:"Short Video Script"},description:{zh:"创作吸引人的短视频脚本",en:"Create engaging short video scripts"},prompt:{zh:`请为以下内容创作一个短视频脚本。

视频主题：{topic}
目标平台：{platform}
时长：{duration}秒

脚本格式：
| 时间 | 画面 | 台词/旁白 | 字幕 | BGM/音效 |

要求：
- 前3秒必须有强钩子(hook)
- 节奏紧凑，信息密度高
- 结尾有互动引导或反转
- 适合竖屏拍摄
- 标注需要的道具/场景
- 给出3个标题选项和话题标签`,en:`Please create a short video script for the following content.

Video Topic: {topic}
Target Platform: {platform}
Duration: {duration} seconds

Script Format:
| Time | Visual | Voiceover/Lines | Subtitles | BGM/SFX |

Requirements:
- Must have a strong hook in first 3 seconds
- Tight pacing, high information density
- End with interaction prompt or twist
- Suitable for vertical filming
- Note required props/scenes
- Provide 3 title options and hashtags`},variables:["topic","platform","duration"],tags:[{zh:"短视频",en:"short-video"},{zh:"脚本",en:"script"},{zh:"创作",en:"creative"}]},{id:"cr5",category:"creative",title:{zh:"活动策划方案",en:"Event Planning"},description:{zh:"策划完整的线上/线下活动",en:"Plan complete online/offline events"},prompt:{zh:`请为以下活动策划一个完整方案。

活动目的：{purpose}
目标人群：{audience}
预算范围：{budget}
时间/场地：{venue}

方案结构：
1. 活动概述(主题、slogan、形式)
2. 目标设定(量化指标)
3. 活动流程(时间线)
4. 创意亮点(3个差异化环节)
5. 传播计划(预热-引爆-长尾)
6. 预算分配
7. 风险预案
8. 效果评估方案

要求：方案可落地执行，创意与可行性兼顾`,en:`Please plan a complete event plan for the following.

Event Purpose: {purpose}
Target Audience: {audience}
Budget Range: {budget}
Time/Venue: {venue}

Plan Structure:
1. Event overview (theme, slogan, format)
2. Goals (quantified metrics)
3. Event flow (timeline)
4. Creative highlights (3 differentiated segments)
5. Promotion plan (pre-event, climax, long-tail)
6. Budget allocation
7. Risk contingency
8. Effectiveness evaluation plan

Requirement: Executable plan balancing creativity and feasibility`},variables:["purpose","audience","budget","venue"],tags:[{zh:"活动",en:"event"},{zh:"策划",en:"planning"},{zh:"方案",en:"plan"}]},{id:"cr6",category:"creative",title:{zh:"角色设定",en:"Character Design"},description:{zh:"创建丰满的虚构角色",en:"Create well-rounded fictional characters"},prompt:{zh:`请为以下故事/项目创建一个角色设定。

故事背景：{background}
角色定位：{role}

请包含：
1. 基本信息(姓名、年龄、外貌、职业)
2. 性格特征(MBTI、核心性格、矛盾点)
3. 背景故事(成长经历、关键转折)
4. 动机与目标(表面目标 vs 深层需求)
5. 人际关系网
6. 说话风格与口头禅
7. 习惯与小癖好
8. 角色弧光(成长方向)
9. 代表性场景描写(200字)`,en:`Please create a character profile for the following story/project.

Story Background: {background}
Character Role: {role}

Include:
1. Basic info (name, age, appearance, occupation)
2. Personality (MBTI, core traits, contradictions)
3. Backstory (upbringing, key turning points)
4. Motivations and goals (surface goal vs deep need)
5. Relationship network
6. Speech style and catchphrases
7. Habits and quirks
8. Character arc (growth direction)
9. Representative scene description (200 words)`},variables:["background","role"],tags:[{zh:"角色",en:"character"},{zh:"设定",en:"design"},{zh:"创作",en:"creative"}]},{id:"cr7",category:"creative",title:{zh:"口播脚本",en:"Talking Head Script"},description:{zh:"适合真人出镜的口播视频脚本",en:"Script for talking-head videos"},prompt:{zh:`请为以下主题写一个口播视频脚本。

主题：{topic}
人设/账号定位：{persona}
时长：{duration}分钟

脚本格式：
- 开场钩子(前5秒，必须抓人)
- 正文(分3-5个要点，每个要点有过渡)
- 结尾(总结+互动引导)

要求：
- 口语化，像跟朋友聊天
- 节奏感强，每30秒有一个信息点或情绪转折
- 标注语气、表情、手势提示
- 标注需要插入的画面/字幕/贴纸
- 避免书面语和长句`,en:`Please write a talking-head video script for the following topic.

Topic: {topic}
Persona/Account Positioning: {persona}
Duration: {duration} minutes

Script Format:
- Opening hook (first 5 seconds, must grab attention)
- Main body (3-5 points with transitions)
- Ending (summary + interaction prompt)

Requirements:
- Conversational, like chatting with a friend
- Strong rhythm, an info point or emotional shift every 30 seconds
- Note tone, expression, gesture cues
- Mark visuals/subtitles/stickers to insert
- Avoid formal language and long sentences`},variables:["topic","persona","duration"],tags:[{zh:"口播",en:"talking-head"},{zh:"视频",en:"video"},{zh:"脚本",en:"script"}]},{id:"cr8",category:"creative",title:{zh:"带货视频脚本",en:"Product Review Video Script"},description:{zh:"种草/带货类视频脚本",en:"Product promotion video script"},prompt:{zh:`请为以下产品写一个带货/种草视频脚本。

产品：{product}
目标人群：{audience}
视频平台：{platform}
时长：{duration}秒

脚本结构(FABE法则)：
1. Feature(产品特点)：展示产品外观/功能
2. Advantage(优势)：对比竞品/痛点解决
3. Benefit(利益)：用户能获得什么
4. Evidence(证据)：使用效果/数据/口碑

格式：
| 时间 | 画面 | 台词 | 产品展示动作 | 字幕/贴纸 |

要求：
- 前3秒痛点切入或效果前置
- 真实感强，不要硬广感
- 结尾有限时优惠/链接引导`,en:`Please write a product promotion/review video script.

Product: {product}
Target Audience: {audience}
Video Platform: {platform}
Duration: {duration} seconds

Script Structure (FABE):
1. Feature: Show product appearance/function
2. Advantage: Comparison with competitors / pain point solving
3. Benefit: What users gain
4. Evidence: Usage results/data/testimonials

Format:
| Time | Visual | Lines | Product Display Action | Subtitle/Sticker |

Requirements:
- First 3 seconds: pain point intro or effect preview
- Authentic feel, avoid hard-sell tone
- End with limited-time offer/link CTA`},variables:["product","audience","platform","duration"],tags:[{zh:"带货",en:"product-promo"},{zh:"种草",en:"recommendation"},{zh:"脚本",en:"script"}]},{id:"cr9",category:"creative",title:{zh:"长视频分镜脚本",en:"Long Video Storyboard"},description:{zh:"5-15分钟视频的完整分镜",en:"Complete storyboard for 5-15 min videos"},prompt:{zh:`请为以下视频创作完整的分镜脚本。

视频主题：{topic}
视频类型：{type}
目标时长：{duration}分钟

请输出：
1. 视频结构大纲(起承转合)
2. 详细分镜表：
| 镜号 | 时长 | 景别 | 画面描述 | 台词/旁白 | BGM/音效 | 转场 |

3. 开头钩子设计(3个备选方案)
4. 高潮/转折点设计
5. 结尾设计(引导订阅/下期预告)
6. 所需素材清单
7. 拍摄注意事项

要求：节奏张弛有度，每2-3分钟有一个小高潮`,en:`Please create a complete storyboard for the following video.

Video Topic: {topic}
Video Type: {type}
Target Duration: {duration} minutes

Output:
1. Video structure outline (setup-development-twist-resolution)
2. Detailed storyboard:
| Shot # | Duration | Shot Size | Visual Description | Lines/Voiceover | BGM/SFX | Transition |

3. Opening hook design (3 alternatives)
4. Climax/turning point design
5. Ending design (subscribe prompt / next episode preview)
6. Required asset list
7. Filming notes

Requirement: Balanced pacing with a mini-climax every 2-3 minutes`},variables:["topic","type","duration"],tags:[{zh:"分镜",en:"storyboard"},{zh:"长视频",en:"long-video"},{zh:"脚本",en:"script"}]},{id:"cr10",category:"creative",title:{zh:"视频选题策划",en:"Video Topic Planning"},description:{zh:"批量生成视频选题创意",en:"Batch generate video topic ideas"},prompt:{zh:`请为以下账号策划一批视频选题。

账号定位：{positioning}
目标平台：{platform}
近期热点/趋势：{trends}

请生成 20 个选题，每个包含：
- 选题标题(吸引点击)
- 一句话内容概要
- 预估热度(高/中/低)
- 内容类型(教程/故事/测评/盘点/反转/科普)
- 难度(拍摄成本高/中/低)

分类输出：
- 蹭热点类(5个)
- 常青内容类(5个)
- 争议/讨论类(5个)
- 系列/连载类(5个)

最后推荐本周优先拍摄的 Top 3 并说明理由`,en:`Please plan a batch of video topics for the following account.

Account Positioning: {positioning}
Target Platform: {platform}
Recent Trends: {trends}

Generate 20 topics, each with:
- Topic title (click-worthy)
- One-line content summary
- Estimated popularity (high/medium/low)
- Content type (tutorial/story/review/list/twist/explainer)
- Difficulty (filming cost high/medium/low)

Categorized output:
- Trend-based (5)
- Evergreen (5)
- Controversial/discussion (5)
- Series/serial (5)

Finally recommend Top 3 to film this week with rationale`},variables:["positioning","platform","trends"],tags:[{zh:"选题",en:"topic"},{zh:"策划",en:"planning"},{zh:"视频",en:"video"}]},{id:"cr11",category:"creative",title:{zh:"Vlog 脚本",en:"Vlog Script"},description:{zh:"生活记录类 Vlog 的叙事脚本",en:"Narrative script for lifestyle vlogs"},prompt:{zh:`请为以下 Vlog 写一个脚本。

Vlog 主题：{topic}
拍摄场景/地点：{location}
预计时长：{duration}分钟
个人风格：{style}

脚本结构：
1. 开场(营造氛围，交代今天要做什么)
2. 主体内容(按时间线/场景切换组织)
3. 结尾(感悟/总结/预告下期)

每个片段包含：
| 场景 | 画面描述 | 旁白/自言自语 | 情绪氛围 | BGM风格 | 拍摄手法 |

要求：
- 生活感强，不要像念稿
- 注重情绪节奏(轻松→专注→惊喜→温暖等)
- 标注适合用空镜/延时/慢动作的地方
- 旁白口语化，像内心独白或跟观众聊天
- 预留"意外惊喜"或"真实反应"的即兴空间
- 配乐建议(具体风格/节奏，不需要歌名)
- 封面和标题建议(3个选项)`,en:`Please write a script for the following vlog.

Vlog Topic: {topic}
Filming Location: {location}
Duration: {duration} minutes
Personal Style: {style}

Script Structure:
1. Opening (set atmosphere, state today's plan)
2. Main content (organized by timeline/scene transitions)
3. Ending (reflection/summary/next episode preview)

Each segment includes:
| Scene | Visual Description | Voiceover/Self-talk | Mood | BGM Style | Filming Technique |

Requirements:
- Strong life feel, not script-like
- Focus on emotional rhythm (relaxed → focused → surprised → warm, etc.)
- Note where to use B-roll/timelapse/slow-motion
- Conversational voiceover, like inner monologue or chatting with viewers
- Leave space for "unexpected moments" and "authentic reactions"
- BGM suggestions (specific style/tempo, not song titles)
- Cover image and title suggestions (3 options)`},variables:["topic","location","duration","style"],tags:[{zh:"Vlog",en:"vlog"},{zh:"生活",en:"lifestyle"},{zh:"脚本",en:"script"}]}],Kf=[...Uf,...Bf,...Wf,...Vf,...$f,...Hf,...Qf,...qf];function Gf(){const[e,n]=We.useState("zh"),[t,r]=We.useState("writing"),[i,o]=We.useState(""),[l,a]=We.useState(!1);We.useEffect(()=>{ic().then(h=>n(h.locale))},[]);const s=()=>{const h=e==="zh"?"en":"zh";n(h),Qi({locale:h})},c=Kf.filter(h=>{const m=h.category===t,p=!i||h.title[e].toLowerCase().includes(i.toLowerCase())||h.tags.some(y=>y[e].toLowerCase().includes(i.toLowerCase()));return m&&p});return l?C.jsx(Ff,{locale:e,onLocaleChange:h=>{n(h),Qi({locale:h})},onBack:()=>a(!1)}):C.jsxs("div",{className:"flex flex-col h-full bg-gray-50",children:[C.jsxs("header",{className:"flex items-center justify-between px-4 py-3 bg-white border-b",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("div",{className:"w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center",children:C.jsx("span",{className:"text-white text-xs font-bold",children:"P"})}),C.jsx("h1",{className:"text-base font-semibold text-gray-800",children:"PromptPro"})]}),C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("button",{onClick:s,className:"text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-600",children:e==="zh"?"EN":"中"}),C.jsx("button",{onClick:()=>a(!0),className:"p-1.5 rounded hover:bg-gray-100 text-gray-500","aria-label":"Settings",children:C.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[C.jsx("circle",{cx:"12",cy:"12",r:"3"}),C.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]})]}),C.jsx("div",{className:"px-4 py-2",children:C.jsx(Mf,{value:i,onChange:o,locale:e})}),C.jsx(If,{current:t,onChange:r,locale:e}),C.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-2",children:C.jsx(Af,{templates:c,locale:e})})]})}qi.createRoot(document.getElementById("root")).render(C.jsx(zc.StrictMode,{children:C.jsx(Gf,{})}));
