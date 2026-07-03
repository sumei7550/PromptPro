import{C as xa,s as lo,a as Hc,g as Kc}from"./storage-CaNsMRkD.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ca={exports:{}},mi={},Ea={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),qc=Symbol.for("react.portal"),Gc=Symbol.for("react.fragment"),Yc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),bc=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),nd=Symbol.for("react.memo"),td=Symbol.for("react.lazy"),ss=Symbol.iterator;function rd(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var Pa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_a=Object.assign,Aa={};function yt(e,n,t){this.props=e,this.context=n,this.refs=Aa,this.updater=t||Pa}yt.prototype.isReactComponent={};yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ta(){}Ta.prototype=yt.prototype;function ul(e,n,t){this.props=e,this.context=n,this.refs=Aa,this.updater=t||Pa}var cl=ul.prototype=new Ta;cl.constructor=ul;_a(cl,yt.prototype);cl.isPureReactComponent=!0;var as=Array.isArray,Ra=Object.prototype.hasOwnProperty,dl={current:null},Na={key:!0,ref:!0,__self:!0,__source:!0};function Ma(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Ra.call(n,r)&&!Na.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:or,type:e,key:o,ref:l,props:i,_owner:dl.current}}function id(e,n){return{$$typeof:or,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function od(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var us=/\/+/g;function Ii(e,n){return typeof e=="object"&&e!==null&&e.key!=null?od(""+e.key):n.toString(36)}function Rr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case or:case qc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ii(l,0):r,as(i)?(t="",e!=null&&(t=e.replace(us,"$&/")+"/"),Rr(i,n,t,"",function(u){return u})):i!=null&&(fl(i)&&(i=id(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(us,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",as(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Ii(o,s);l+=Rr(o,n,t,a,i)}else if(a=rd(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Ii(o,s++),l+=Rr(o,n,t,a,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function fr(e,n,t){if(e==null)return e;var r=[],i=0;return Rr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function ld(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Nr={transition:null},sd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:dl};function Ia(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:fr,forEach:function(e,n,t){fr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return fr(e,function(){n++}),n},toArray:function(e){return fr(e,function(n){return n})||[]},only:function(e){if(!fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=yt;D.Fragment=Gc;D.Profiler=Xc;D.PureComponent=ul;D.StrictMode=Yc;D.Suspense=ed;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sd;D.act=Ia;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_a({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=dl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Ra.call(n,a)&&!Na.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:or,type:e.type,key:i,ref:o,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:Jc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zc,_context:e},e.Consumer=e};D.createElement=Ma;D.createFactory=function(e){var n=Ma.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:bc,render:e}};D.isValidElement=fl;D.lazy=function(e){return{$$typeof:td,_payload:{_status:-1,_result:e},_init:ld}};D.memo=function(e,n){return{$$typeof:nd,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=n}};D.unstable_act=Ia;D.useCallback=function(e,n){return de.current.useCallback(e,n)};D.useContext=function(e){return de.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return de.current.useDeferredValue(e)};D.useEffect=function(e,n){return de.current.useEffect(e,n)};D.useId=function(){return de.current.useId()};D.useImperativeHandle=function(e,n,t){return de.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return de.current.useMemo(e,n)};D.useReducer=function(e,n,t){return de.current.useReducer(e,n,t)};D.useRef=function(e){return de.current.useRef(e)};D.useState=function(e){return de.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return de.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return de.current.useTransition()};D.version="18.3.1";Ea.exports=D;var ne=Ea.exports;const ad=Qc(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud=ne,cd=Symbol.for("react.element"),dd=Symbol.for("react.fragment"),fd=Object.prototype.hasOwnProperty,pd=ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hd={key:!0,ref:!0,__self:!0,__source:!0};function Da(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)fd.call(n,r)&&!hd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:cd,type:e,key:o,ref:l,props:i,_owner:pd.current}}mi.Fragment=dd;mi.jsx=Da;mi.jsxs=Da;Ca.exports=mi;var S=Ca.exports,so={},La={exports:{}},Ce={},Fa={exports:{}},ja={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,N){var I=P.length;P.push(N);e:for(;0<I;){var K=I-1>>>1,X=P[K];if(0<i(X,N))P[K]=N,P[I]=X,I=K;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var N=P[0],I=P.pop();if(I!==N){P[0]=I;e:for(var K=0,X=P.length,cr=X>>>1;K<cr;){var _n=2*(K+1)-1,Mi=P[_n],An=_n+1,dr=P[An];if(0>i(Mi,I))An<X&&0>i(dr,Mi)?(P[K]=dr,P[An]=I,K=An):(P[K]=Mi,P[_n]=I,K=_n);else if(An<X&&0>i(dr,I))P[K]=dr,P[An]=I,K=An;else break e}}return N}function i(P,N){var I=P.sortIndex-N.sortIndex;return I!==0?I:P.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,h=null,p=3,g=!1,v=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var N=t(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=P)r(u),N.sortIndex=N.expirationTime,n(a,N);else break;N=t(u)}}function y(P){if(w=!1,m(P),!v)if(t(a)!==null)v=!0,tn(x);else{var N=t(u);N!==null&&Hn(y,N.startTime-P)}}function x(P,N){v=!1,w&&(w=!1,f(C),C=-1),g=!0;var I=p;try{for(m(N),h=t(a);h!==null&&(!(h.expirationTime>N)||P&&!b());){var K=h.callback;if(typeof K=="function"){h.callback=null,p=h.priorityLevel;var X=K(h.expirationTime<=N);N=e.unstable_now(),typeof X=="function"?h.callback=X:h===t(a)&&r(a),m(N)}else r(a);h=t(a)}if(h!==null)var cr=!0;else{var _n=t(u);_n!==null&&Hn(y,_n.startTime-N),cr=!1}return cr}finally{h=null,p=I,g=!1}}var z=!1,_=null,C=-1,M=5,T=-1;function b(){return!(e.unstable_now()-T<M)}function Ke(){if(_!==null){var P=e.unstable_now();T=P;var N=!0;try{N=_(!0,P)}finally{N?Pe():(z=!1,_=null)}}else z=!1}var Pe;if(typeof c=="function")Pe=function(){c(Ke)};else if(typeof MessageChannel<"u"){var Ni=new MessageChannel,we=Ni.port2;Ni.port1.onmessage=Ke,Pe=function(){we.postMessage(null)}}else Pe=function(){A(Ke,0)};function tn(P){_=P,z||(z=!0,Pe())}function Hn(P,N){C=A(function(){P(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,tn(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var I=p;p=N;try{return P()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,N){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var I=p;p=P;try{return N()}finally{p=I}},e.unstable_scheduleCallback=function(P,N,I){var K=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?K+I:K):I=K,P){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=I+X,P={id:d++,callback:N,priorityLevel:P,startTime:I,expirationTime:X,sortIndex:-1},I>K?(P.sortIndex=I,n(u,P),t(a)===null&&P===t(u)&&(w?(f(C),C=-1):w=!0,Hn(y,I-K))):(P.sortIndex=X,n(a,P),v||g||(v=!0,tn(x))),P},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(P){var N=p;return function(){var I=p;p=N;try{return P.apply(this,arguments)}finally{p=I}}}})(ja);Fa.exports=ja;var md=Fa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=ne,xe=md;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oa=new Set,Ut={};function $n(e,n){ct(e,n),ct(e+"Capture",n)}function ct(e,n){for(Ut[e]=n,e=0;e<n.length;e++)Oa.add(n[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ao=Object.prototype.hasOwnProperty,yd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cs={},ds={};function vd(e){return ao.call(ds,e)?!0:ao.call(cs,e)?!1:yd.test(e)?ds[e]=!0:(cs[e]=!0,!1)}function wd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kd(e,n,t,r){if(n===null||typeof n>"u"||wd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var pl=/[\-:]([a-z])/g;function hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(pl,hl);re[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(pl,hl);re[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(pl,hl);re[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,n,t,r){var i=re.hasOwnProperty(n)?re[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(kd(n,t,i,r)&&(t=null),r||i===null?vd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var nn=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),gl=Symbol.for("react.strict_mode"),uo=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Wa=Symbol.for("react.context"),yl=Symbol.for("react.forward_ref"),co=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Ua=Symbol.for("react.offscreen"),fs=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=fs&&e[fs]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Di;function At(e){if(Di===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Di=n&&n[1]||""}return`
`+Di+e}var Li=!1;function Fi(e,n){if(!e||Li)return"";Li=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Li=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?At(e):""}function Sd(e){switch(e.tag){case 5:return At(e.type);case 16:return At("Lazy");case 13:return At("Suspense");case 19:return At("SuspenseList");case 0:case 2:case 15:return e=Fi(e.type,!1),e;case 11:return e=Fi(e.type.render,!1),e;case 1:return e=Fi(e.type,!0),e;default:return""}}function po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Qn:return"Portal";case uo:return"Profiler";case gl:return"StrictMode";case co:return"Suspense";case fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wa:return(e.displayName||"Context")+".Consumer";case Ba:return(e._context.displayName||"Context")+".Provider";case yl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return n=e.displayName||null,n!==null?n:po(e.type)||"Memo";case on:n=e._payload,e=e._init;try{return po(e(n))}catch{}}return null}function zd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return po(n);case 8:return n===gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $a(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xd(e){var n=$a(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function hr(e){e._valueTracker||(e._valueTracker=xd(e))}function Va(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=$a(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ho(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ps(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=wn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ha(e,n){n=n.checked,n!=null&&ml(e,"checked",n,!1)}function mo(e,n){Ha(e,n);var t=wn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?go(e,n.type,t):n.hasOwnProperty("defaultValue")&&go(e,n.type,wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function hs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function go(e,n,t){(n!=="number"||Vr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Tt=Array.isArray;function it(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+wn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function yo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ms(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Tt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:wn(t)}}function Ka(e,n){var t=wn(n.value),r=wn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function gs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mr,qa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cd=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){Cd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function Ga(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function Ya(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Ga(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Ed=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wo(e,n){if(n){if(Ed[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function ko(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var So=null;function wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zo=null,ot=null,lt=null;function ys(e){if(e=ar(e)){if(typeof zo!="function")throw Error(k(280));var n=e.stateNode;n&&(n=ki(n),zo(e.stateNode,e.type,n))}}function Xa(e){ot?lt?lt.push(e):lt=[e]:ot=e}function Za(){if(ot){var e=ot,n=lt;if(lt=ot=null,ys(e),n)for(e=0;e<n.length;e++)ys(n[e])}}function Ja(e,n){return e(n)}function ba(){}var ji=!1;function eu(e,n,t){if(ji)return e(n,t);ji=!0;try{return Ja(e,n,t)}finally{ji=!1,(ot!==null||lt!==null)&&(ba(),Za())}}function Vt(e,n){var t=e.stateNode;if(t===null)return null;var r=ki(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var xo=!1;if(Ze)try{var St={};Object.defineProperty(St,"passive",{get:function(){xo=!0}}),window.addEventListener("test",St,St),window.removeEventListener("test",St,St)}catch{xo=!1}function Pd(e,n,t,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var It=!1,Hr=null,Kr=!1,Co=null,_d={onError:function(e){It=!0,Hr=e}};function Ad(e,n,t,r,i,o,l,s,a){It=!1,Hr=null,Pd.apply(_d,arguments)}function Td(e,n,t,r,i,o,l,s,a){if(Ad.apply(this,arguments),It){if(It){var u=Hr;It=!1,Hr=null}else throw Error(k(198));Kr||(Kr=!0,Co=u)}}function Vn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function nu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function vs(e){if(Vn(e)!==e)throw Error(k(188))}function Rd(e){var n=e.alternate;if(!n){if(n=Vn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return vs(i),e;if(o===r)return vs(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===t){l=!0,t=i,r=o;break}if(s===r){l=!0,r=i,t=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===t){l=!0,t=o,r=i;break}if(s===r){l=!0,r=o,t=i;break}s=s.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function tu(e){return e=Rd(e),e!==null?ru(e):null}function ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ru(e);if(n!==null)return n;e=e.sibling}return null}var iu=xe.unstable_scheduleCallback,ws=xe.unstable_cancelCallback,Nd=xe.unstable_shouldYield,Md=xe.unstable_requestPaint,Q=xe.unstable_now,Id=xe.unstable_getCurrentPriorityLevel,kl=xe.unstable_ImmediatePriority,ou=xe.unstable_UserBlockingPriority,Qr=xe.unstable_NormalPriority,Dd=xe.unstable_LowPriority,lu=xe.unstable_IdlePriority,gi=null,Ve=null;function Ld(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(gi,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:Od,Fd=Math.log,jd=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(Fd(e)/jd|0)|0}var gr=64,yr=4194304;function Rt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~i;s!==0?r=Rt(s):(o&=l,o!==0&&(r=Rt(o)))}else l=t&~i,l!==0?r=Rt(l):o!==0&&(r=Rt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-je(n),i=1<<t,r|=e[t],n&=~i;return r}function Bd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-je(o),s=1<<l,a=i[l];a===-1?(!(s&t)||s&r)&&(i[l]=Bd(s,n)):a<=n&&(e.expiredLanes|=s),o&=~s}}function Eo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function su(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function Oi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-je(n),e[n]=t}function Ud(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-je(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Sl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-je(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var F=0;function au(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uu,zl,cu,du,fu,Po=!1,vr=[],dn=null,fn=null,pn=null,Ht=new Map,Kt=new Map,sn=[],$d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ks(e,n){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Ht.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kt.delete(n.pointerId)}}function zt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ar(n),n!==null&&zl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Vd(e,n,t,r,i){switch(n){case"focusin":return dn=zt(dn,e,n,t,r,i),!0;case"dragenter":return fn=zt(fn,e,n,t,r,i),!0;case"mouseover":return pn=zt(pn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Ht.set(o,zt(Ht.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Kt.set(o,zt(Kt.get(o)||null,e,n,t,r,i)),!0}return!1}function pu(e){var n=Mn(e.target);if(n!==null){var t=Vn(n);if(t!==null){if(n=t.tag,n===13){if(n=nu(t),n!==null){e.blockedOn=n,fu(e.priority,function(){cu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_o(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);So=r,t.target.dispatchEvent(r),So=null}else return n=ar(t),n!==null&&zl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ss(e,n,t){Mr(e)&&t.delete(n)}function Hd(){Po=!1,dn!==null&&Mr(dn)&&(dn=null),fn!==null&&Mr(fn)&&(fn=null),pn!==null&&Mr(pn)&&(pn=null),Ht.forEach(Ss),Kt.forEach(Ss)}function xt(e,n){e.blockedOn===n&&(e.blockedOn=null,Po||(Po=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Hd)))}function Qt(e){function n(i){return xt(i,e)}if(0<vr.length){xt(vr[0],e);for(var t=1;t<vr.length;t++){var r=vr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&xt(dn,e),fn!==null&&xt(fn,e),pn!==null&&xt(pn,e),Ht.forEach(n),Kt.forEach(n),t=0;t<sn.length;t++)r=sn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(t=sn[0],t.blockedOn===null);)pu(t),t.blockedOn===null&&sn.shift()}var st=nn.ReactCurrentBatchConfig,Gr=!0;function Kd(e,n,t,r){var i=F,o=st.transition;st.transition=null;try{F=1,xl(e,n,t,r)}finally{F=i,st.transition=o}}function Qd(e,n,t,r){var i=F,o=st.transition;st.transition=null;try{F=4,xl(e,n,t,r)}finally{F=i,st.transition=o}}function xl(e,n,t,r){if(Gr){var i=_o(e,n,t,r);if(i===null)Gi(e,n,r,Yr,t),ks(e,r);else if(Vd(i,e,n,t,r))r.stopPropagation();else if(ks(e,r),n&4&&-1<$d.indexOf(e)){for(;i!==null;){var o=ar(i);if(o!==null&&uu(o),o=_o(e,n,t,r),o===null&&Gi(e,n,r,Yr,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Gi(e,n,r,null,t)}}var Yr=null;function _o(e,n,t,r){if(Yr=null,e=wl(r),e=Mn(e),e!==null)if(n=Vn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=nu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Yr=e,null}function hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Id()){case kl:return 1;case ou:return 4;case Qr:case Dd:return 16;case lu:return 536870912;default:return 16}default:return 16}}var un=null,Cl=null,Ir=null;function mu(){if(Ir)return Ir;var e,n=Cl,t=n.length,r,i="value"in un?un.value:un.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Ir=i.slice(e,1<r?1-r:void 0)}function Dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function zs(){return!1}function Ee(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wr:zs,this.isPropagationStopped=zs,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),n}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Ee(vt),sr=V({},vt,{view:0,detail:0}),qd=Ee(sr),Bi,Wi,Ct,yi=V({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ct&&(Ct&&e.type==="mousemove"?(Bi=e.screenX-Ct.screenX,Wi=e.screenY-Ct.screenY):Wi=Bi=0,Ct=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:Wi}}),xs=Ee(yi),Gd=V({},yi,{dataTransfer:0}),Yd=Ee(Gd),Xd=V({},sr,{relatedTarget:0}),Ui=Ee(Xd),Zd=V({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=Ee(Zd),bd=V({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ef=Ee(bd),nf=V({},vt,{data:0}),Cs=Ee(nf),tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=of[e])?!!n[e]:!1}function Pl(){return lf}var sf=V({},sr,{key:function(e){if(e.key){var n=tf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),af=Ee(sf),uf=V({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Es=Ee(uf),cf=V({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),df=Ee(cf),ff=V({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),pf=Ee(ff),hf=V({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mf=Ee(hf),gf=[9,13,27,32],_l=Ze&&"CompositionEvent"in window,Dt=null;Ze&&"documentMode"in document&&(Dt=document.documentMode);var yf=Ze&&"TextEvent"in window&&!Dt,gu=Ze&&(!_l||Dt&&8<Dt&&11>=Dt),Ps=" ",_s=!1;function yu(e,n){switch(e){case"keyup":return gf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function vf(e,n){switch(e){case"compositionend":return vu(n);case"keypress":return n.which!==32?null:(_s=!0,Ps);case"textInput":return e=n.data,e===Ps&&_s?null:e;default:return null}}function wf(e,n){if(Gn)return e==="compositionend"||!_l&&yu(e,n)?(e=mu(),Ir=Cl=un=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gu&&n.locale!=="ko"?null:n.data;default:return null}}var kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function As(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kf[e.type]:n==="textarea"}function wu(e,n,t,r){Xa(r),n=Xr(n,"onChange"),0<n.length&&(t=new El("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Lt=null,qt=null;function Sf(e){Ru(e,0)}function vi(e){var n=Zn(e);if(Va(n))return e}function zf(e,n){if(e==="change")return n}var ku=!1;if(Ze){var $i;if(Ze){var Vi="oninput"in document;if(!Vi){var Ts=document.createElement("div");Ts.setAttribute("oninput","return;"),Vi=typeof Ts.oninput=="function"}$i=Vi}else $i=!1;ku=$i&&(!document.documentMode||9<document.documentMode)}function Rs(){Lt&&(Lt.detachEvent("onpropertychange",Su),qt=Lt=null)}function Su(e){if(e.propertyName==="value"&&vi(qt)){var n=[];wu(n,qt,e,wl(e)),eu(Sf,n)}}function xf(e,n,t){e==="focusin"?(Rs(),Lt=n,qt=t,Lt.attachEvent("onpropertychange",Su)):e==="focusout"&&Rs()}function Cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(qt)}function Ef(e,n){if(e==="click")return vi(n)}function Pf(e,n){if(e==="input"||e==="change")return vi(n)}function _f(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Be=typeof Object.is=="function"?Object.is:_f;function Gt(e,n){if(Be(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!ao.call(n,i)||!Be(e[i],n[i]))return!1}return!0}function Ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ms(e,n){var t=Ns(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ns(t)}}function zu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xu(){for(var e=window,n=Vr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Vr(e.document)}return n}function Al(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Af(e){var n=xu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&zu(t.ownerDocument.documentElement,t)){if(r!==null&&Al(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ms(t,o);var l=Ms(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tf=Ze&&"documentMode"in document&&11>=document.documentMode,Yn=null,Ao=null,Ft=null,To=!1;function Is(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;To||Yn==null||Yn!==Vr(r)||(r=Yn,"selectionStart"in r&&Al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ft&&Gt(Ft,r)||(Ft=r,r=Xr(Ao,"onSelect"),0<r.length&&(n=new El("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Yn)))}function kr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Hi={},Cu={};Ze&&(Cu=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function wi(e){if(Hi[e])return Hi[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Cu)return Hi[e]=n[t];return e}var Eu=wi("animationend"),Pu=wi("animationiteration"),_u=wi("animationstart"),Au=wi("transitionend"),Tu=new Map,Ds="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){Tu.set(e,n),$n(n,[e])}for(var Ki=0;Ki<Ds.length;Ki++){var Qi=Ds[Ki],Rf=Qi.toLowerCase(),Nf=Qi[0].toUpperCase()+Qi.slice(1);Sn(Rf,"on"+Nf)}Sn(Eu,"onAnimationEnd");Sn(Pu,"onAnimationIteration");Sn(_u,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Au,"onTransitionEnd");ct("onMouseEnter",["mouseout","mouseover"]);ct("onMouseLeave",["mouseout","mouseover"]);ct("onPointerEnter",["pointerout","pointerover"]);ct("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nt));function Ls(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Td(r,n,void 0,e),e.currentTarget=null}function Ru(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Ls(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Ls(i,s,u),o=a}}}if(Kr)throw e=Co,Kr=!1,Co=null,e}function O(e,n){var t=n[Do];t===void 0&&(t=n[Do]=new Set);var r=e+"__bubble";t.has(r)||(Nu(n,e,2,!1),t.add(r))}function qi(e,n,t){var r=0;n&&(r|=4),Nu(t,e,r,n)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Yt(e){if(!e[Sr]){e[Sr]=!0,Oa.forEach(function(t){t!=="selectionchange"&&(Mf.has(t)||qi(t,!1,e),qi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Sr]||(n[Sr]=!0,qi("selectionchange",!1,n))}}function Nu(e,n,t,r){switch(hu(n)){case 1:var i=Kd;break;case 4:i=Qd;break;default:i=xl}t=i.bind(null,n,t,e),i=void 0,!xo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Gi(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Mn(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}eu(function(){var u=o,d=wl(t),h=[];e:{var p=Tu.get(e);if(p!==void 0){var g=El,v=e;switch(e){case"keypress":if(Dr(t)===0)break e;case"keydown":case"keyup":g=af;break;case"focusin":v="focus",g=Ui;break;case"focusout":v="blur",g=Ui;break;case"beforeblur":case"afterblur":g=Ui;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=df;break;case Eu:case Pu:case _u:g=Jd;break;case Au:g=pf;break;case"scroll":g=qd;break;case"wheel":g=mf;break;case"copy":case"cut":case"paste":g=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Es}var w=(n&4)!==0,A=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var c=u,m;c!==null;){m=c;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,f!==null&&(y=Vt(c,f),y!=null&&w.push(Xt(c,y,m)))),A)break;c=c.return}0<w.length&&(p=new g(p,v,null,t,d),h.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&t!==So&&(v=t.relatedTarget||t.fromElement)&&(Mn(v)||v[Je]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=t.relatedTarget||t.toElement,g=u,v=v?Mn(v):null,v!==null&&(A=Vn(v),v!==A||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=xs,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Es,y="onPointerLeave",f="onPointerEnter",c="pointer"),A=g==null?p:Zn(g),m=v==null?p:Zn(v),p=new w(y,c+"leave",g,t,d),p.target=A,p.relatedTarget=m,y=null,Mn(d)===u&&(w=new w(f,c+"enter",v,t,d),w.target=m,w.relatedTarget=A,y=w),A=y,g&&v)n:{for(w=g,f=v,c=0,m=w;m;m=Kn(m))c++;for(m=0,y=f;y;y=Kn(y))m++;for(;0<c-m;)w=Kn(w),c--;for(;0<m-c;)f=Kn(f),m--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break n;w=Kn(w),f=Kn(f)}w=null}else w=null;g!==null&&Fs(h,p,g,w,!1),v!==null&&A!==null&&Fs(h,A,v,w,!0)}}e:{if(p=u?Zn(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var x=zf;else if(As(p))if(ku)x=Pf;else{x=Cf;var z=xf}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=Ef);if(x&&(x=x(e,u))){wu(h,x,t,d);break e}z&&z(e,p,u),e==="focusout"&&(z=p._wrapperState)&&z.controlled&&p.type==="number"&&go(p,"number",p.value)}switch(z=u?Zn(u):window,e){case"focusin":(As(z)||z.contentEditable==="true")&&(Yn=z,Ao=u,Ft=null);break;case"focusout":Ft=Ao=Yn=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,Is(h,t,d);break;case"selectionchange":if(Tf)break;case"keydown":case"keyup":Is(h,t,d)}var _;if(_l)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Gn?yu(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(gu&&t.locale!=="ko"&&(Gn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Gn&&(_=mu()):(un=d,Cl="value"in un?un.value:un.textContent,Gn=!0)),z=Xr(u,C),0<z.length&&(C=new Cs(C,e,null,t,d),h.push({event:C,listeners:z}),_?C.data=_:(_=vu(t),_!==null&&(C.data=_)))),(_=yf?vf(e,t):wf(e,t))&&(u=Xr(u,"onBeforeInput"),0<u.length&&(d=new Cs("onBeforeInput","beforeinput",null,t,d),h.push({event:d,listeners:u}),d.data=_))}Ru(h,n)})}function Xt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vt(e,t),o!=null&&r.unshift(Xt(e,o,i)),o=Vt(e,n),o!=null&&r.push(Xt(e,o,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fs(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=Vt(t,o),a!=null&&l.unshift(Xt(t,a,s))):i||(a=Vt(t,o),a!=null&&l.push(Xt(t,a,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var If=/\r\n?/g,Df=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(Df,"")}function zr(e,n,t){if(n=js(n),js(e)!==n&&t)throw Error(k(425))}function Zr(){}var Ro=null,No=null;function Mo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Os=typeof Promise=="function"?Promise:void 0,Ff=typeof queueMicrotask=="function"?queueMicrotask:typeof Os<"u"?function(e){return Os.resolve(null).then(e).catch(jf)}:Io;function jf(e){setTimeout(function(){throw e})}function Yi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Qt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Qt(n)}function hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Bs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wt=Math.random().toString(36).slice(2),$e="__reactFiber$"+wt,Zt="__reactProps$"+wt,Je="__reactContainer$"+wt,Do="__reactEvents$"+wt,Of="__reactListeners$"+wt,Bf="__reactHandles$"+wt;function Mn(e){var n=e[$e];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Je]||t[$e]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Bs(e);e!==null;){if(t=e[$e])return t;e=Bs(e)}return n}e=t,t=e.parentNode}return null}function ar(e){return e=e[$e]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ki(e){return e[Zt]||null}var Lo=[],Jn=-1;function zn(e){return{current:e}}function B(e){0>Jn||(e.current=Lo[Jn],Lo[Jn]=null,Jn--)}function j(e,n){Jn++,Lo[Jn]=e.current,e.current=n}var kn={},se=zn(kn),ge=zn(!1),jn=kn;function dt(e,n){var t=e.type.contextTypes;if(!t)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function Jr(){B(ge),B(se)}function Ws(e,n,t){if(se.current!==kn)throw Error(k(168));j(se,n),j(ge,t)}function Mu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,zd(e)||"Unknown",i));return V({},t,r)}function br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,jn=se.current,j(se,e),j(ge,ge.current),!0}function Us(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Mu(e,n,jn),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(se),j(se,e)):B(ge),j(ge,t)}var qe=null,Si=!1,Xi=!1;function Iu(e){qe===null?qe=[e]:qe.push(e)}function Wf(e){Si=!0,Iu(e)}function xn(){if(!Xi&&qe!==null){Xi=!0;var e=0,n=F;try{var t=qe;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}qe=null,Si=!1}catch(i){throw qe!==null&&(qe=qe.slice(e+1)),iu(kl,xn),i}finally{F=n,Xi=!1}}return null}var bn=[],et=0,ei=null,ni=0,_e=[],Ae=0,On=null,Ge=1,Ye="";function Tn(e,n){bn[et++]=ni,bn[et++]=ei,ei=e,ni=n}function Du(e,n,t){_e[Ae++]=Ge,_e[Ae++]=Ye,_e[Ae++]=On,On=e;var r=Ge;e=Ye;var i=32-je(r)-1;r&=~(1<<i),t+=1;var o=32-je(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ge=1<<32-je(n)+i|t<<i|r,Ye=o+e}else Ge=1<<o|t<<i|r,Ye=e}function Tl(e){e.return!==null&&(Tn(e,1),Du(e,1,0))}function Rl(e){for(;e===ei;)ei=bn[--et],bn[et]=null,ni=bn[--et],bn[et]=null;for(;e===On;)On=_e[--Ae],_e[Ae]=null,Ye=_e[--Ae],_e[Ae]=null,Ge=_e[--Ae],_e[Ae]=null}var ze=null,Se=null,W=!1,Fe=null;function Lu(e,n){var t=Te(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function $s(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Se=hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Se=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=On!==null?{id:Ge,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Te(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Se=null,!0):!1;default:return!1}}function Fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(W){var n=Se;if(n){var t=n;if(!$s(e,n)){if(Fo(e))throw Error(k(418));n=hn(t.nextSibling);var r=ze;n&&$s(e,n)?Lu(r,t):(e.flags=e.flags&-4097|2,W=!1,ze=e)}}else{if(Fo(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,ze=e}}}function Vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function xr(e){if(e!==ze)return!1;if(!W)return Vs(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Mo(e.type,e.memoizedProps)),n&&(n=Se)){if(Fo(e))throw Fu(),Error(k(418));for(;n;)Lu(e,n),n=hn(n.nextSibling)}if(Vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Se=hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Se=null}}else Se=ze?hn(e.stateNode.nextSibling):null;return!0}function Fu(){for(var e=Se;e;)e=hn(e.nextSibling)}function ft(){Se=ze=null,W=!1}function Nl(e){Fe===null?Fe=[e]:Fe.push(e)}var Uf=nn.ReactCurrentBatchConfig;function Et(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Cr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Hs(e){var n=e._init;return n(e._payload)}function ju(e){function n(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=vn(f,c),f.index=0,f.sibling=null,f}function o(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,m,y){return c===null||c.tag!==6?(c=ro(m,f.mode,y),c.return=f,c):(c=i(c,m),c.return=f,c)}function a(f,c,m,y){var x=m.type;return x===qn?d(f,c,m.props.children,y,m.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===on&&Hs(x)===c.type)?(y=i(c,m.props),y.ref=Et(f,c,m),y.return=f,y):(y=Ur(m.type,m.key,m.props,null,f.mode,y),y.ref=Et(f,c,m),y.return=f,y)}function u(f,c,m,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=io(m,f.mode,y),c.return=f,c):(c=i(c,m.children||[]),c.return=f,c)}function d(f,c,m,y,x){return c===null||c.tag!==7?(c=Fn(m,f.mode,y,x),c.return=f,c):(c=i(c,m),c.return=f,c)}function h(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ro(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pr:return m=Ur(c.type,c.key,c.props,null,f.mode,m),m.ref=Et(f,null,c),m.return=f,m;case Qn:return c=io(c,f.mode,m),c.return=f,c;case on:var y=c._init;return h(f,y(c._payload),m)}if(Tt(c)||kt(c))return c=Fn(c,f.mode,m,null),c.return=f,c;Cr(f,c)}return null}function p(f,c,m,y){var x=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:s(f,c,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pr:return m.key===x?a(f,c,m,y):null;case Qn:return m.key===x?u(f,c,m,y):null;case on:return x=m._init,p(f,c,x(m._payload),y)}if(Tt(m)||kt(m))return x!==null?null:d(f,c,m,y,null);Cr(f,m)}return null}function g(f,c,m,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(m)||null,s(c,f,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pr:return f=f.get(y.key===null?m:y.key)||null,a(c,f,y,x);case Qn:return f=f.get(y.key===null?m:y.key)||null,u(c,f,y,x);case on:var z=y._init;return g(f,c,m,z(y._payload),x)}if(Tt(y)||kt(y))return f=f.get(m)||null,d(c,f,y,x,null);Cr(c,y)}return null}function v(f,c,m,y){for(var x=null,z=null,_=c,C=c=0,M=null;_!==null&&C<m.length;C++){_.index>C?(M=_,_=null):M=_.sibling;var T=p(f,_,m[C],y);if(T===null){_===null&&(_=M);break}e&&_&&T.alternate===null&&n(f,_),c=o(T,c,C),z===null?x=T:z.sibling=T,z=T,_=M}if(C===m.length)return t(f,_),W&&Tn(f,C),x;if(_===null){for(;C<m.length;C++)_=h(f,m[C],y),_!==null&&(c=o(_,c,C),z===null?x=_:z.sibling=_,z=_);return W&&Tn(f,C),x}for(_=r(f,_);C<m.length;C++)M=g(_,f,C,m[C],y),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?C:M.key),c=o(M,c,C),z===null?x=M:z.sibling=M,z=M);return e&&_.forEach(function(b){return n(f,b)}),W&&Tn(f,C),x}function w(f,c,m,y){var x=kt(m);if(typeof x!="function")throw Error(k(150));if(m=x.call(m),m==null)throw Error(k(151));for(var z=x=null,_=c,C=c=0,M=null,T=m.next();_!==null&&!T.done;C++,T=m.next()){_.index>C?(M=_,_=null):M=_.sibling;var b=p(f,_,T.value,y);if(b===null){_===null&&(_=M);break}e&&_&&b.alternate===null&&n(f,_),c=o(b,c,C),z===null?x=b:z.sibling=b,z=b,_=M}if(T.done)return t(f,_),W&&Tn(f,C),x;if(_===null){for(;!T.done;C++,T=m.next())T=h(f,T.value,y),T!==null&&(c=o(T,c,C),z===null?x=T:z.sibling=T,z=T);return W&&Tn(f,C),x}for(_=r(f,_);!T.done;C++,T=m.next())T=g(_,f,C,T.value,y),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?C:T.key),c=o(T,c,C),z===null?x=T:z.sibling=T,z=T);return e&&_.forEach(function(Ke){return n(f,Ke)}),W&&Tn(f,C),x}function A(f,c,m,y){if(typeof m=="object"&&m!==null&&m.type===qn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case pr:e:{for(var x=m.key,z=c;z!==null;){if(z.key===x){if(x=m.type,x===qn){if(z.tag===7){t(f,z.sibling),c=i(z,m.props.children),c.return=f,f=c;break e}}else if(z.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===on&&Hs(x)===z.type){t(f,z.sibling),c=i(z,m.props),c.ref=Et(f,z,m),c.return=f,f=c;break e}t(f,z);break}else n(f,z);z=z.sibling}m.type===qn?(c=Fn(m.props.children,f.mode,y,m.key),c.return=f,f=c):(y=Ur(m.type,m.key,m.props,null,f.mode,y),y.ref=Et(f,c,m),y.return=f,f=y)}return l(f);case Qn:e:{for(z=m.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){t(f,c.sibling),c=i(c,m.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=io(m,f.mode,y),c.return=f,f=c}return l(f);case on:return z=m._init,A(f,c,z(m._payload),y)}if(Tt(m))return v(f,c,m,y);if(kt(m))return w(f,c,m,y);Cr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,m),c.return=f,f=c):(t(f,c),c=ro(m,f.mode,y),c.return=f,f=c),l(f)):t(f,c)}return A}var pt=ju(!0),Ou=ju(!1),ti=zn(null),ri=null,nt=null,Ml=null;function Il(){Ml=nt=ri=null}function Dl(e){var n=ti.current;B(ti),e._currentValue=n}function Oo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function at(e,n){ri=e,Ml=nt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(Ml!==e)if(e={context:e,memoizedValue:n,next:null},nt===null){if(ri===null)throw Error(k(308));nt=e,ri.dependencies={lanes:0,firstContext:e}}else nt=nt.next=e;return n}var In=null;function Ll(e){In===null?In=[e]:In.push(e)}function Bu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Ll(n)):(t.next=i.next,i.next=t),n.interleaved=t,be(e,r)}function be(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ln=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function mn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,be(e,t)}return i=r.interleaved,i===null?(n.next=n,Ll(r)):(n.next=i.next,i.next=n),r.interleaved=n,be(e,t)}function Lr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Sl(e,t)}}function Ks(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ii(e,n,t,r){var i=e.updateQueue;ln=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;l=0,d=u=a=null,s=o;do{var p=s.lane,g=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(p=n,g=t,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(g,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(g,h,p):v,p==null)break e;h=V({},h,p);break e;case 2:ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=g,a=h):d=d.next=g,l|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Wn|=l,e.lanes=l,e.memoizedState=h}}function Qs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ur={},He=zn(ur),Jt=zn(ur),bt=zn(ur);function Dn(e){if(e===ur)throw Error(k(174));return e}function jl(e,n){switch(j(bt,n),j(Jt,e),j(He,ur),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:vo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=vo(n,e)}B(He),j(He,n)}function ht(){B(He),B(Jt),B(bt)}function Uu(e){Dn(bt.current);var n=Dn(He.current),t=vo(n,e.type);n!==t&&(j(Jt,e),j(He,t))}function Ol(e){Jt.current===e&&(B(He),B(Jt))}var U=zn(0);function oi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=[];function Bl(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var Fr=nn.ReactCurrentDispatcher,Ji=nn.ReactCurrentBatchConfig,Bn=0,$=null,G=null,Z=null,li=!1,jt=!1,er=0,$f=0;function ie(){throw Error(k(321))}function Wl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Be(e[t],n[t]))return!1;return!0}function Ul(e,n,t,r,i,o){if(Bn=o,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fr.current=e===null||e.memoizedState===null?Qf:qf,e=t(r,i),jt){o=0;do{if(jt=!1,er=0,25<=o)throw Error(k(301));o+=1,Z=G=null,n.updateQueue=null,Fr.current=Gf,e=t(r,i)}while(jt)}if(Fr.current=si,n=G!==null&&G.next!==null,Bn=0,Z=G=$=null,li=!1,n)throw Error(k(300));return e}function $l(){var e=er!==0;return er=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function Me(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=Z===null?$.memoizedState:Z.next;if(n!==null)Z=n,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function nr(e,n){return typeof n=="function"?n(e):n}function bi(e){var n=Me(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=G,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var d=u.lane;if((Bn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,$.lanes|=d,Wn|=d}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,Be(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,$.lanes|=o,Wn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function eo(e){var n=Me(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Be(o,n.memoizedState)||(me=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function $u(){}function Vu(e,n){var t=$,r=Me(),i=n(),o=!Be(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,Vl(Qu.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,tr(9,Ku.bind(null,t,r,i,n),void 0,null),J===null)throw Error(k(349));Bn&30||Hu(t,n,i)}return i}function Hu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ku(e,n,t,r){n.value=t,n.getSnapshot=r,qu(n)&&Gu(e)}function Qu(e,n,t){return t(function(){qu(n)&&Gu(e)})}function qu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Be(e,t)}catch{return!0}}function Gu(e){var n=be(e,1);n!==null&&Oe(n,e,1,-1)}function qs(e){var n=Ue();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},n.queue=e,e=e.dispatch=Kf.bind(null,$,e),[n.memoizedState,e]}function tr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Yu(){return Me().memoizedState}function jr(e,n,t,r){var i=Ue();$.flags|=e,i.memoizedState=tr(1|n,t,void 0,r===void 0?null:r)}function zi(e,n,t,r){var i=Me();r=r===void 0?null:r;var o=void 0;if(G!==null){var l=G.memoizedState;if(o=l.destroy,r!==null&&Wl(r,l.deps)){i.memoizedState=tr(n,t,o,r);return}}$.flags|=e,i.memoizedState=tr(1|n,t,o,r)}function Gs(e,n){return jr(8390656,8,e,n)}function Vl(e,n){return zi(2048,8,e,n)}function Xu(e,n){return zi(4,2,e,n)}function Zu(e,n){return zi(4,4,e,n)}function Ju(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bu(e,n,t){return t=t!=null?t.concat([e]):null,zi(4,4,Ju.bind(null,n,e),t)}function Hl(){}function ec(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function nc(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function tc(e,n,t){return Bn&21?(Be(t,n)||(t=su(),$.lanes|=t,Wn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function Vf(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),n()}finally{F=t,Ji.transition=r}}function rc(){return Me().memoizedState}function Hf(e,n,t){var r=yn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ic(e))oc(n,t);else if(t=Bu(e,n,t,r),t!==null){var i=ce();Oe(t,e,r,i),lc(t,n,r)}}function Kf(e,n,t){var r=yn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ic(e))oc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,s=o(l,t);if(i.hasEagerState=!0,i.eagerState=s,Be(s,l)){var a=n.interleaved;a===null?(i.next=i,Ll(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Bu(e,n,i,r),t!==null&&(i=ce(),Oe(t,e,r,i),lc(t,n,r))}}function ic(e){var n=e.alternate;return e===$||n!==null&&n===$}function oc(e,n){jt=li=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function lc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Sl(e,t)}}var si={readContext:Ne,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Qf={readContext:Ne,useCallback:function(e,n){return Ue().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:Gs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,jr(4194308,4,Ju.bind(null,n,e),t)},useLayoutEffect:function(e,n){return jr(4194308,4,e,n)},useInsertionEffect:function(e,n){return jr(4,2,e,n)},useMemo:function(e,n){var t=Ue();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ue();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Hf.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var n=Ue();return e={current:e},n.memoizedState=e},useState:qs,useDebugValue:Hl,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=qs(!1),n=e[0];return e=Vf.bind(null,e[1]),Ue().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=$,i=Ue();if(W){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),J===null)throw Error(k(349));Bn&30||Hu(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Gs(Qu.bind(null,r,o,e),[e]),r.flags|=2048,tr(9,Ku.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ue(),n=J.identifierPrefix;if(W){var t=Ye,r=Ge;t=(r&~(1<<32-je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=er++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=$f++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qf={readContext:Ne,useCallback:ec,useContext:Ne,useEffect:Vl,useImperativeHandle:bu,useInsertionEffect:Xu,useLayoutEffect:Zu,useMemo:nc,useReducer:bi,useRef:Yu,useState:function(){return bi(nr)},useDebugValue:Hl,useDeferredValue:function(e){var n=Me();return tc(n,G.memoizedState,e)},useTransition:function(){var e=bi(nr)[0],n=Me().memoizedState;return[e,n]},useMutableSource:$u,useSyncExternalStore:Vu,useId:rc,unstable_isNewReconciler:!1},Gf={readContext:Ne,useCallback:ec,useContext:Ne,useEffect:Vl,useImperativeHandle:bu,useInsertionEffect:Xu,useLayoutEffect:Zu,useMemo:nc,useReducer:eo,useRef:Yu,useState:function(){return eo(nr)},useDebugValue:Hl,useDeferredValue:function(e){var n=Me();return G===null?n.memoizedState=e:tc(n,G.memoizedState,e)},useTransition:function(){var e=eo(nr)[0],n=Me().memoizedState;return[e,n]},useMutableSource:$u,useSyncExternalStore:Vu,useId:rc,unstable_isNewReconciler:!1};function De(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Bo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xi={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ce(),i=yn(e),o=Xe(r,i);o.payload=n,t!=null&&(o.callback=t),n=mn(e,o,i),n!==null&&(Oe(n,e,i,r),Lr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ce(),i=yn(e),o=Xe(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=mn(e,o,i),n!==null&&(Oe(n,e,i,r),Lr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),r=yn(e),i=Xe(t,r);i.tag=2,n!=null&&(i.callback=n),n=mn(e,i,r),n!==null&&(Oe(n,e,r,t),Lr(n,e,r))}};function Ys(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Gt(t,r)||!Gt(i,o):!0}function sc(e,n,t){var r=!1,i=kn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(i=ye(n)?jn:se.current,r=n.contextTypes,o=(r=r!=null)?dt(e,i):kn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Xs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xi.enqueueReplaceState(n,n.state,null)}function Wo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Fl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ne(o):(o=ye(n)?jn:se.current,i.context=dt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Bo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&xi.enqueueReplaceState(i,i.state,null),ii(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mt(e,n){try{var t="",r=n;do t+=Sd(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function no(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Uo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Yf=typeof WeakMap=="function"?WeakMap:Map;function ac(e,n,t){t=Xe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ui||(ui=!0,Zo=r),Uo(e,n)},t}function uc(e,n,t){t=Xe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Uo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Uo(e,n),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Zs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Yf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=up.bind(null,e,n,t),n.then(e,e))}function Js(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function bs(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Xe(-1,1),n.tag=2,mn(t,n,1))),t.lanes|=1),e)}var Xf=nn.ReactCurrentOwner,me=!1;function ae(e,n,t,r){n.child=e===null?Ou(n,null,t,r):pt(n,e.child,t,r)}function ea(e,n,t,r,i){t=t.render;var o=n.ref;return at(n,i),r=Ul(e,n,t,r,o,i),t=$l(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,en(e,n,i)):(W&&t&&Tl(n),n.flags|=1,ae(e,n,r,i),n.child)}function na(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Jl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,cc(e,n,o,r,i)):(e=Ur(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(l,r)&&e.ref===n.ref)return en(e,n,i)}return n.flags|=1,e=vn(o,r),e.ref=n.ref,e.return=n,n.child=e}function cc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Gt(o,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,en(e,n,i)}return $o(e,n,t,r,i)}function dc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(rt,ke),ke|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,j(rt,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,j(rt,ke),ke|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,j(rt,ke),ke|=r;return ae(e,n,i,t),n.child}function fc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function $o(e,n,t,r,i){var o=ye(t)?jn:se.current;return o=dt(n,o),at(n,i),t=Ul(e,n,t,r,o,i),r=$l(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,en(e,n,i)):(W&&r&&Tl(n),n.flags|=1,ae(e,n,t,i),n.child)}function ta(e,n,t,r,i){if(ye(t)){var o=!0;br(n)}else o=!1;if(at(n,i),n.stateNode===null)Or(e,n),sc(n,t,r),Wo(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var a=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ne(u):(u=ye(t)?jn:se.current,u=dt(n,u));var d=t.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Xs(n,l,r,u),ln=!1;var p=n.memoizedState;l.state=p,ii(n,r,l,i),a=n.memoizedState,s!==r||p!==a||ge.current||ln?(typeof d=="function"&&(Bo(n,t,d,r),a=n.memoizedState),(s=ln||Ys(n,t,s,r,p,a,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Wu(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:De(n.type,s),l.props=u,h=n.pendingProps,p=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ne(a):(a=ye(t)?jn:se.current,a=dt(n,a));var g=t.getDerivedStateFromProps;(d=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||p!==a)&&Xs(n,l,r,a),ln=!1,p=n.memoizedState,l.state=p,ii(n,r,l,i);var v=n.memoizedState;s!==h||p!==v||ge.current||ln?(typeof g=="function"&&(Bo(n,t,g,r),v=n.memoizedState),(u=ln||Ys(n,t,u,r,p,v,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),l.props=r,l.state=v,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Vo(e,n,t,r,o,i)}function Vo(e,n,t,r,i,o){fc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Us(n,t,!1),en(e,n,o);r=n.stateNode,Xf.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=pt(n,e.child,null,o),n.child=pt(n,null,s,o)):ae(e,n,s,o),n.memoizedState=r.state,i&&Us(n,t,!0),n.child}function pc(e){var n=e.stateNode;n.pendingContext?Ws(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ws(e,n.context,!1),jl(e,n.containerInfo)}function ra(e,n,t,r,i){return ft(),Nl(i),n.flags|=256,ae(e,n,t,r),n.child}var Ho={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function hc(e,n,t){var r=n.pendingProps,i=U.current,o=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(U,i&1),e===null)return jo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Pi(l,r,0,null),e=Fn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ko(t),n.memoizedState=Ho,e):Kl(n,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Zf(e,n,l,r,s,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=vn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=vn(s,o):(o=Fn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Ko(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Ho,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Kl(e,n){return n=Pi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Er(e,n,t,r){return r!==null&&Nl(r),pt(n,e.child,null,t),e=Kl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zf(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=no(Error(k(422))),Er(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Pi({mode:"visible",children:r.children},i,0,null),o=Fn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&pt(n,e.child,null,l),n.child.memoizedState=Ko(l),n.memoizedState=Ho,o);if(!(n.mode&1))return Er(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=no(o,r,void 0),Er(e,n,l,r)}if(s=(l&e.childLanes)!==0,me||s){if(r=J,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,be(e,i),Oe(r,e,i,-1))}return Zl(),r=no(Error(k(421))),Er(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=cp.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Se=hn(i.nextSibling),ze=n,W=!0,Fe=null,e!==null&&(_e[Ae++]=Ge,_e[Ae++]=Ye,_e[Ae++]=On,Ge=e.id,Ye=e.overflow,On=n),n=Kl(n,r.children),n.flags|=4096,n)}function ia(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Oo(e.return,n,t)}function to(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function mc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ia(e,t,n);else if(e.tag===19)ia(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&oi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),to(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}to(n,!0,t,null,o);break;case"together":to(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Or(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function en(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Wn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Jf(e,n,t){switch(n.tag){case 3:pc(n),ft();break;case 5:Uu(n);break;case 1:ye(n.type)&&br(n);break;case 4:jl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;j(ti,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(j(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?hc(e,n,t):(j(U,U.current&1),e=en(e,n,t),e!==null?e.sibling:null);j(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return mc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,dc(e,n,t)}return en(e,n,t)}var gc,Qo,yc,vc;gc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Qo=function(){};yc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Dn(He.current);var o=null;switch(t){case"input":i=ho(e,i),r=ho(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=yo(e,i),r=yo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}wo(t,r);var l;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ut.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(o||(o=[]),o.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ut.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&O("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};vc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Pt(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function bf(e,n,t){var r=n.pendingProps;switch(Rl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(n),null;case 1:return ye(n.type)&&Jr(),oe(n),null;case 3:return r=n.stateNode,ht(),B(ge),B(se),Bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(el(Fe),Fe=null))),Qo(e,n),oe(n),null;case 5:Ol(n);var i=Dn(bt.current);if(t=n.type,e!==null&&n.stateNode!=null)yc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return oe(n),null}if(e=Dn(He.current),xr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[$e]=n,r[Zt]=o,e=(n.mode&1)!==0,t){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<Nt.length;i++)O(Nt[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":ps(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":ms(r,o),O("invalid",r)}wo(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),i=["children",""+s]):Ut.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&O("scroll",r)}switch(t){case"input":hr(r),hs(r,o,!0);break;case"textarea":hr(r),gs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[$e]=n,e[Zt]=r,gc(e,n,!1,!1),n.stateNode=e;e:{switch(l=ko(t,r),t){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nt.length;i++)O(Nt[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":ps(e,r),i=ho(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":ms(e,r),i=yo(e,r),O("invalid",e);break;default:i=r}wo(t,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Ya(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&qa(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&$t(e,a):typeof a=="number"&&$t(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ut.hasOwnProperty(o)?a!=null&&o==="onScroll"&&O("scroll",e):a!=null&&ml(e,o,a,l))}switch(t){case"input":hr(e),hs(e,r,!1);break;case"textarea":hr(e),gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?it(e,!!r.multiple,o,!1):r.defaultValue!=null&&it(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return oe(n),null;case 6:if(e&&n.stateNode!=null)vc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Dn(bt.current),Dn(He.current),xr(n)){if(r=n.stateNode,t=n.memoizedProps,r[$e]=n,(o=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:zr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[$e]=n,n.stateNode=r}return oe(n),null;case 13:if(B(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Se!==null&&n.mode&1&&!(n.flags&128))Fu(),ft(),n.flags|=98560,o=!1;else if(o=xr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[$e]=n}else ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;oe(n),o=!1}else Fe!==null&&(el(Fe),Fe=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?Y===0&&(Y=3):Zl())),n.updateQueue!==null&&(n.flags|=4),oe(n),null);case 4:return ht(),Qo(e,n),e===null&&Yt(n.stateNode.containerInfo),oe(n),null;case 10:return Dl(n.type._context),oe(n),null;case 17:return ye(n.type)&&Jr(),oe(n),null;case 19:if(B(U),o=n.memoizedState,o===null)return oe(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Pt(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=oi(e),l!==null){for(n.flags|=128,Pt(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return j(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&Q()>gt&&(n.flags|=128,r=!0,Pt(o,!1),n.lanes=4194304)}else{if(!r)if(e=oi(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Pt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!W)return oe(n),null}else 2*Q()-o.renderingStartTime>gt&&t!==1073741824&&(n.flags|=128,r=!0,Pt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Q(),n.sibling=null,t=U.current,j(U,r?t&1|2:t&1),n):(oe(n),null);case 22:case 23:return Xl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ke&1073741824&&(oe(n),n.subtreeFlags&6&&(n.flags|=8192)):oe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function ep(e,n){switch(Rl(n),n.tag){case 1:return ye(n.type)&&Jr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),B(ge),B(se),Bl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ol(n),null;case 13:if(B(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(U),null;case 4:return ht(),null;case 10:return Dl(n.type._context),null;case 22:case 23:return Xl(),null;case 24:return null;default:return null}}var Pr=!1,le=!1,np=typeof WeakSet=="function"?WeakSet:Set,E=null;function tt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function qo(e,n,t){try{t()}catch(r){H(e,n,r)}}var oa=!1;function tp(e,n){if(Ro=Gr,e=xu(),Al(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,s=-1,a=-1,u=0,d=0,h=e,p=null;n:for(;;){for(var g;h!==t||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===e)break n;if(p===t&&++u===i&&(s=l),p===o&&++d===r&&(a=l),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(No={focusedElem:e,selectionRange:t},Gr=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,A=v.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:De(n.type,w),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){H(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return v=oa,oa=!1,v}function Ot(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&qo(n,t,o)}i=i.next}while(i!==r)}}function Ci(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Go(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function wc(e){var n=e.alternate;n!==null&&(e.alternate=null,wc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[$e],delete n[Zt],delete n[Do],delete n[Of],delete n[Bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kc(e){return e.tag===5||e.tag===3||e.tag===4}function la(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Yo(e,n,t),e=e.sibling;e!==null;)Yo(e,n,t),e=e.sibling}function Xo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xo(e,n,t),e=e.sibling;e!==null;)Xo(e,n,t),e=e.sibling}var ee=null,Le=!1;function rn(e,n,t){for(t=t.child;t!==null;)Sc(e,n,t),t=t.sibling}function Sc(e,n,t){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(gi,t)}catch{}switch(t.tag){case 5:le||tt(t,n);case 6:var r=ee,i=Le;ee=null,rn(e,n,t),ee=r,Le=i,ee!==null&&(Le?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Le?(e=ee,t=t.stateNode,e.nodeType===8?Yi(e.parentNode,t):e.nodeType===1&&Yi(e,t),Qt(e)):Yi(ee,t.stateNode));break;case 4:r=ee,i=Le,ee=t.stateNode.containerInfo,Le=!0,rn(e,n,t),ee=r,Le=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&qo(t,n,l),i=i.next}while(i!==r)}rn(e,n,t);break;case 1:if(!le&&(tt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){H(t,n,s)}rn(e,n,t);break;case 21:rn(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,rn(e,n,t),le=r):rn(e,n,t);break;default:rn(e,n,t)}}function sa(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new np),n.forEach(function(r){var i=dp.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ie(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Le=!1;break e;case 3:ee=s.stateNode.containerInfo,Le=!0;break e;case 4:ee=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(ee===null)throw Error(k(160));Sc(o,l,i),ee=null,Le=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){H(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)zc(n,e),n=n.sibling}function zc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(n,e),We(e),r&4){try{Ot(3,e,e.return),Ci(3,e)}catch(w){H(e,e.return,w)}try{Ot(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:Ie(n,e),We(e),r&512&&t!==null&&tt(t,t.return);break;case 5:if(Ie(n,e),We(e),r&512&&t!==null&&tt(t,t.return),e.flags&32){var i=e.stateNode;try{$t(i,"")}catch(w){H(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ha(i,o),ko(s,l);var u=ko(s,o);for(l=0;l<a.length;l+=2){var d=a[l],h=a[l+1];d==="style"?Ya(i,h):d==="dangerouslySetInnerHTML"?qa(i,h):d==="children"?$t(i,h):ml(i,d,h,u)}switch(s){case"input":mo(i,o);break;case"textarea":Ka(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?it(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?it(i,!!o.multiple,o.defaultValue,!0):it(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zt]=o}catch(w){H(e,e.return,w)}}break;case 6:if(Ie(n,e),We(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){H(e,e.return,w)}}break;case 3:if(Ie(n,e),We(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:Ie(n,e),We(e);break;case 13:Ie(n,e),We(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gl=Q())),r&4&&sa(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(le=(u=le)||d,Ie(n,e),le=u):Ie(n,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(h=E=d;E!==null;){switch(p=E,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ot(4,p,p.return);break;case 1:tt(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(w){H(r,t,w)}}break;case 5:tt(p,p.return);break;case 22:if(p.memoizedState!==null){ua(h);continue}}g!==null?(g.return=p,E=g):ua(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ga("display",l))}catch(w){H(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){H(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ie(n,e),We(e),r&4&&sa(e);break;case 21:break;default:Ie(n,e),We(e)}}function We(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(kc(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($t(i,""),r.flags&=-33);var o=la(e);Xo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=la(e);Yo(e,s,l);break;default:throw Error(k(161))}}catch(a){H(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rp(e,n,t){E=e,xc(e)}function xc(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Pr;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||le;s=Pr;var u=le;if(Pr=l,(le=a)&&!u)for(E=i;E!==null;)l=E,a=l.child,l.tag===22&&l.memoizedState!==null?ca(i):a!==null?(a.return=l,E=a):ca(i);for(;o!==null;)E=o,xc(o),o=o.sibling;E=i,Pr=s,le=u}aa(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):aa(e)}}function aa(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Ci(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:De(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Qs(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Qs(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Qt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}le||n.flags&512&&Go(n)}catch(p){H(n,n.return,p)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function ua(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function ca(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ci(4,n)}catch(a){H(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){H(n,i,a)}}var o=n.return;try{Go(n)}catch(a){H(n,o,a)}break;case 5:var l=n.return;try{Go(n)}catch(a){H(n,l,a)}}}catch(a){H(n,n.return,a)}if(n===e){E=null;break}var s=n.sibling;if(s!==null){s.return=n.return,E=s;break}E=n.return}}var ip=Math.ceil,ai=nn.ReactCurrentDispatcher,Ql=nn.ReactCurrentOwner,Re=nn.ReactCurrentBatchConfig,L=0,J=null,q=null,te=0,ke=0,rt=zn(0),Y=0,rr=null,Wn=0,Ei=0,ql=0,Bt=null,pe=null,Gl=0,gt=1/0,Qe=null,ui=!1,Zo=null,gn=null,_r=!1,cn=null,ci=0,Wt=0,Jo=null,Br=-1,Wr=0;function ce(){return L&6?Q():Br!==-1?Br:Br=Q()}function yn(e){return e.mode&1?L&2&&te!==0?te&-te:Uf.transition!==null?(Wr===0&&(Wr=su()),Wr):(e=F,e!==0||(e=window.event,e=e===void 0?16:hu(e.type)),e):1}function Oe(e,n,t,r){if(50<Wt)throw Wt=0,Jo=null,Error(k(185));lr(e,t,r),(!(L&2)||e!==J)&&(e===J&&(!(L&2)&&(Ei|=t),Y===4&&an(e,te)),ve(e,r),t===1&&L===0&&!(n.mode&1)&&(gt=Q()+500,Si&&xn()))}function ve(e,n){var t=e.callbackNode;Wd(e,n);var r=qr(e,e===J?te:0);if(r===0)t!==null&&ws(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ws(t),n===1)e.tag===0?Wf(da.bind(null,e)):Iu(da.bind(null,e)),Ff(function(){!(L&6)&&xn()}),t=null;else{switch(au(r)){case 1:t=kl;break;case 4:t=ou;break;case 16:t=Qr;break;case 536870912:t=lu;break;default:t=Qr}t=Nc(t,Cc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Cc(e,n){if(Br=-1,Wr=0,L&6)throw Error(k(327));var t=e.callbackNode;if(ut()&&e.callbackNode!==t)return null;var r=qr(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=di(e,r);else{n=r;var i=L;L|=2;var o=Pc();(J!==e||te!==n)&&(Qe=null,gt=Q()+500,Ln(e,n));do try{sp();break}catch(s){Ec(e,s)}while(!0);Il(),ai.current=o,L=i,q!==null?n=0:(J=null,te=0,n=Y)}if(n!==0){if(n===2&&(i=Eo(e),i!==0&&(r=i,n=bo(e,i))),n===1)throw t=rr,Ln(e,0),an(e,r),ve(e,Q()),t;if(n===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!op(i)&&(n=di(e,r),n===2&&(o=Eo(e),o!==0&&(r=o,n=bo(e,o))),n===1))throw t=rr,Ln(e,0),an(e,r),ve(e,Q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Rn(e,pe,Qe);break;case 3:if(an(e,r),(r&130023424)===r&&(n=Gl+500-Q(),10<n)){if(qr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Io(Rn.bind(null,e,pe,Qe),n);break}Rn(e,pe,Qe);break;case 4:if(an(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-je(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ip(r/1960))-r,10<r){e.timeoutHandle=Io(Rn.bind(null,e,pe,Qe),r);break}Rn(e,pe,Qe);break;case 5:Rn(e,pe,Qe);break;default:throw Error(k(329))}}}return ve(e,Q()),e.callbackNode===t?Cc.bind(null,e):null}function bo(e,n){var t=Bt;return e.current.memoizedState.isDehydrated&&(Ln(e,n).flags|=256),e=di(e,n),e!==2&&(n=pe,pe=t,n!==null&&el(n)),e}function el(e){pe===null?pe=e:pe.push.apply(pe,e)}function op(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Be(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function an(e,n){for(n&=~ql,n&=~Ei,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-je(n),r=1<<t;e[t]=-1,n&=~r}}function da(e){if(L&6)throw Error(k(327));ut();var n=qr(e,0);if(!(n&1))return ve(e,Q()),null;var t=di(e,n);if(e.tag!==0&&t===2){var r=Eo(e);r!==0&&(n=r,t=bo(e,r))}if(t===1)throw t=rr,Ln(e,0),an(e,n),ve(e,Q()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rn(e,pe,Qe),ve(e,Q()),null}function Yl(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(gt=Q()+500,Si&&xn())}}function Un(e){cn!==null&&cn.tag===0&&!(L&6)&&ut();var n=L;L|=1;var t=Re.transition,r=F;try{if(Re.transition=null,F=1,e)return e()}finally{F=r,Re.transition=t,L=n,!(L&6)&&xn()}}function Xl(){ke=rt.current,B(rt)}function Ln(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Lf(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(Rl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:ht(),B(ge),B(se),Bl();break;case 5:Ol(r);break;case 4:ht();break;case 13:B(U);break;case 19:B(U);break;case 10:Dl(r.type._context);break;case 22:case 23:Xl()}t=t.return}if(J=e,q=e=vn(e.current,null),te=ke=n,Y=0,rr=null,ql=Ei=Wn=0,pe=Bt=null,In!==null){for(n=0;n<In.length;n++)if(t=In[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}In=null}return e}function Ec(e,n){do{var t=q;try{if(Il(),Fr.current=si,li){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(Bn=0,Z=G=$=null,jt=!1,er=0,Ql.current=null,t===null||t.return===null){Y=1,rr=n,q=null;break}e:{var o=e,l=t.return,s=t,a=n;if(n=te,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Js(l);if(g!==null){g.flags&=-257,bs(g,l,s,o,n),g.mode&1&&Zs(o,u,n),n=g,a=u;var v=n.updateQueue;if(v===null){var w=new Set;w.add(a),n.updateQueue=w}else v.add(a);break e}else{if(!(n&1)){Zs(o,u,n),Zl();break e}a=Error(k(426))}}else if(W&&s.mode&1){var A=Js(l);if(A!==null){!(A.flags&65536)&&(A.flags|=256),bs(A,l,s,o,n),Nl(mt(a,s));break e}}o=a=mt(a,s),Y!==4&&(Y=2),Bt===null?Bt=[o]:Bt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=ac(o,a,n);Ks(o,f);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gn===null||!gn.has(m)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=uc(o,s,n);Ks(o,y);break e}}o=o.return}while(o!==null)}Ac(t)}catch(x){n=x,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function Pc(){var e=ai.current;return ai.current=si,e===null?si:e}function Zl(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(Wn&268435455)&&!(Ei&268435455)||an(J,te)}function di(e,n){var t=L;L|=2;var r=Pc();(J!==e||te!==n)&&(Qe=null,Ln(e,n));do try{lp();break}catch(i){Ec(e,i)}while(!0);if(Il(),L=t,ai.current=r,q!==null)throw Error(k(261));return J=null,te=0,Y}function lp(){for(;q!==null;)_c(q)}function sp(){for(;q!==null&&!Nd();)_c(q)}function _c(e){var n=Rc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?Ac(e):q=n,Ql.current=null}function Ac(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ep(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,q=null;return}}else if(t=bf(t,n,ke),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);Y===0&&(Y=5)}function Rn(e,n,t){var r=F,i=Re.transition;try{Re.transition=null,F=1,ap(e,n,t,r)}finally{Re.transition=i,F=r}return null}function ap(e,n,t,r){do ut();while(cn!==null);if(L&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Ud(e,o),e===J&&(q=J=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_r||(_r=!0,Nc(Qr,function(){return ut(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var l=F;F=1;var s=L;L|=4,Ql.current=null,tp(e,t),zc(t,e),Af(No),Gr=!!Ro,No=Ro=null,e.current=t,rp(t),Md(),L=s,F=l,Re.transition=o}else e.current=t;if(_r&&(_r=!1,cn=e,ci=i),o=e.pendingLanes,o===0&&(gn=null),Ld(t.stateNode),ve(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ui)throw ui=!1,e=Zo,Zo=null,e;return ci&1&&e.tag!==0&&ut(),o=e.pendingLanes,o&1?e===Jo?Wt++:(Wt=0,Jo=e):Wt=0,xn(),null}function ut(){if(cn!==null){var e=au(ci),n=Re.transition,t=F;try{if(Re.transition=null,F=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,ci=0,L&6)throw Error(k(331));var i=L;for(L|=4,E=e.current;E!==null;){var o=E,l=o.child;if(E.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:Ot(8,d,o)}var h=d.child;if(h!==null)h.return=d,E=h;else for(;E!==null;){d=E;var p=d.sibling,g=d.return;if(wc(d),d===u){E=null;break}if(p!==null){p.return=g,E=p;break}E=g}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}E=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,E=l;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ot(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,E=f;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){l=E;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,E=m;else e:for(l=c;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ci(9,s)}}catch(x){H(s,s.return,x)}if(s===l){E=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,E=y;break e}E=s.return}}if(L=i,xn(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(gi,e)}catch{}r=!0}return r}finally{F=t,Re.transition=n}}return!1}function fa(e,n,t){n=mt(t,n),n=ac(e,n,1),e=mn(e,n,1),n=ce(),e!==null&&(lr(e,1,n),ve(e,n))}function H(e,n,t){if(e.tag===3)fa(e,e,t);else for(;n!==null;){if(n.tag===3){fa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=mt(t,e),e=uc(n,e,1),n=mn(n,e,1),e=ce(),n!==null&&(lr(n,1,e),ve(n,e));break}}n=n.return}}function up(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,J===e&&(te&t)===t&&(Y===4||Y===3&&(te&130023424)===te&&500>Q()-Gl?Ln(e,0):ql|=t),ve(e,n)}function Tc(e,n){n===0&&(e.mode&1?(n=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):n=1);var t=ce();e=be(e,n),e!==null&&(lr(e,n,t),ve(e,t))}function cp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Tc(e,t)}function dp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Tc(e,t)}var Rc;Rc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ge.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,Jf(e,n,t);me=!!(e.flags&131072)}else me=!1,W&&n.flags&1048576&&Du(n,ni,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Or(e,n),e=n.pendingProps;var i=dt(n,se.current);at(n,t),i=Ul(null,n,r,e,i,t);var o=$l();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(o=!0,br(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fl(n),i.updater=xi,n.stateNode=i,i._reactInternals=n,Wo(n,r,e,t),n=Vo(null,n,r,!0,o,t)):(n.tag=0,W&&o&&Tl(n),ae(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Or(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=pp(r),e=De(r,e),i){case 0:n=$o(null,n,r,e,t);break e;case 1:n=ta(null,n,r,e,t);break e;case 11:n=ea(null,n,r,e,t);break e;case 14:n=na(null,n,r,De(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),$o(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),ta(e,n,r,i,t);case 3:e:{if(pc(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Wu(e,n),ii(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=mt(Error(k(423)),n),n=ra(e,n,r,t,i);break e}else if(r!==i){i=mt(Error(k(424)),n),n=ra(e,n,r,t,i);break e}else for(Se=hn(n.stateNode.containerInfo.firstChild),ze=n,W=!0,Fe=null,t=Ou(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),r===i){n=en(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return Uu(n),e===null&&jo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Mo(r,i)?l=null:o!==null&&Mo(r,o)&&(n.flags|=32),fc(e,n),ae(e,n,l,t),n.child;case 6:return e===null&&jo(n),null;case 13:return hc(e,n,t);case 4:return jl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=pt(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),ea(e,n,r,i,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,j(ti,r._currentValue),r._currentValue=l,o!==null)if(Be(o.value,l)){if(o.children===i.children&&!ge.current){n=en(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Xe(-1,t&-t),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Oo(o.return,t,n),s.lanes|=t;break}a=a.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Oo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ae(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,at(n,t),i=Ne(i),r=r(i),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,i=De(r,n.pendingProps),i=De(r.type,i),na(e,n,r,i,t);case 15:return cc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),Or(e,n),n.tag=1,ye(r)?(e=!0,br(n)):e=!1,at(n,t),sc(n,r,i),Wo(n,r,i,t),Vo(null,n,r,!0,e,t);case 19:return mc(e,n,t);case 22:return dc(e,n,t)}throw Error(k(156,n.tag))};function Nc(e,n){return iu(e,n)}function fp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,n,t,r){return new fp(e,n,t,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pp(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yl)return 11;if(e===vl)return 14}return 2}function vn(e,n){var t=e.alternate;return t===null?(t=Te(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ur(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")Jl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case qn:return Fn(t.children,i,o,n);case gl:l=8,i|=8;break;case uo:return e=Te(12,t,n,i|2),e.elementType=uo,e.lanes=o,e;case co:return e=Te(13,t,n,i),e.elementType=co,e.lanes=o,e;case fo:return e=Te(19,t,n,i),e.elementType=fo,e.lanes=o,e;case Ua:return Pi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ba:l=10;break e;case Wa:l=9;break e;case yl:l=11;break e;case vl:l=14;break e;case on:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Te(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Fn(e,n,t,r){return e=Te(7,e,r,n),e.lanes=t,e}function Pi(e,n,t,r){return e=Te(22,e,r,n),e.elementType=Ua,e.lanes=t,e.stateNode={isHidden:!1},e}function ro(e,n,t){return e=Te(6,e,null,n),e.lanes=t,e}function io(e,n,t){return n=Te(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function hp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bl(e,n,t,r,i,o,l,s,a){return e=new hp(e,n,t,s,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Te(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fl(o),e}function mp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Mc(e){if(!e)return kn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(ye(t))return Mu(e,t,n)}return n}function Ic(e,n,t,r,i,o,l,s,a){return e=bl(t,r,!0,e,i,o,l,s,a),e.context=Mc(null),t=e.current,r=ce(),i=yn(t),o=Xe(r,i),o.callback=n??null,mn(t,o,i),e.current.lanes=i,lr(e,i,r),ve(e,r),e}function _i(e,n,t,r){var i=n.current,o=ce(),l=yn(i);return t=Mc(t),n.context===null?n.context=t:n.pendingContext=t,n=Xe(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=mn(i,n,l),e!==null&&(Oe(e,i,l,o),Lr(e,i,l)),l}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pa(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function es(e,n){pa(e,n),(e=e.alternate)&&pa(e,n)}function gp(){return null}var Dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ns(e){this._internalRoot=e}Ai.prototype.render=ns.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));_i(e,n,null,null)};Ai.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Un(function(){_i(null,e,null,null)}),n[Je]=null}};function Ai(e){this._internalRoot=e}Ai.prototype.unstable_scheduleHydration=function(e){if(e){var n=du();e={blockedOn:null,target:e,priority:n};for(var t=0;t<sn.length&&n!==0&&n<sn[t].priority;t++);sn.splice(t,0,e),t===0&&pu(e)}};function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ha(){}function yp(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fi(l);o.call(u)}}var l=Ic(n,r,e,0,null,!1,!1,"",ha);return e._reactRootContainer=l,e[Je]=l.current,Yt(e.nodeType===8?e.parentNode:e),Un(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=fi(a);s.call(u)}}var a=bl(e,0,!1,null,null,!1,!1,"",ha);return e._reactRootContainer=a,e[Je]=a.current,Yt(e.nodeType===8?e.parentNode:e),Un(function(){_i(n,a,t,r)}),a}function Ri(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=fi(l);s.call(a)}}_i(n,l,e,i)}else l=yp(t,n,e,i,r);return fi(l)}uu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Rt(n.pendingLanes);t!==0&&(Sl(n,t|1),ve(n,Q()),!(L&6)&&(gt=Q()+500,xn()))}break;case 13:Un(function(){var r=be(e,1);if(r!==null){var i=ce();Oe(r,e,1,i)}}),es(e,1)}};zl=function(e){if(e.tag===13){var n=be(e,134217728);if(n!==null){var t=ce();Oe(n,e,134217728,t)}es(e,134217728)}};cu=function(e){if(e.tag===13){var n=yn(e),t=be(e,n);if(t!==null){var r=ce();Oe(t,e,n,r)}es(e,n)}};du=function(){return F};fu=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};zo=function(e,n,t){switch(n){case"input":if(mo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ki(r);if(!i)throw Error(k(90));Va(r),mo(r,i)}}}break;case"textarea":Ka(e,t);break;case"select":n=t.value,n!=null&&it(e,!!t.multiple,n,!1)}};Ja=Yl;ba=Un;var vp={usingClientEntryPoint:!1,Events:[ar,Zn,ki,Xa,Za,Yl]},_t={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wp={bundleType:_t.bundleType,version:_t.version,rendererPackageName:_t.rendererPackageName,rendererConfig:_t.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:_t.findFiberByHostInstance||gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{gi=Ar.inject(wp),Ve=Ar}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;Ce.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ts(n))throw Error(k(200));return mp(e,n,null,t)};Ce.createRoot=function(e,n){if(!ts(e))throw Error(k(299));var t=!1,r="",i=Dc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=bl(e,1,!1,null,null,t,!1,r,i),e[Je]=n.current,Yt(e.nodeType===8?e.parentNode:e),new ns(n)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=tu(n),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Un(e)};Ce.hydrate=function(e,n,t){if(!Ti(n))throw Error(k(200));return Ri(null,e,n,!0,t)};Ce.hydrateRoot=function(e,n,t){if(!ts(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Dc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Ic(n,null,e,1,t??null,i,!1,o,l),e[Je]=n.current,Yt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ai(n)};Ce.render=function(e,n,t){if(!Ti(n))throw Error(k(200));return Ri(null,e,n,!1,t)};Ce.unmountComponentAtNode=function(e){if(!Ti(e))throw Error(k(40));return e._reactRootContainer?(Un(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Ce.unstable_batchedUpdates=Yl;Ce.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ti(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ri(e,n,t,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function Lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lc)}catch(e){console.error(e)}}Lc(),La.exports=Ce;var kp=La.exports,ma=kp;so.createRoot=ma.createRoot,so.hydrateRoot=ma.hydrateRoot;function Cn(e){return Array.isArray?Array.isArray(e):jc(e)==="[object Array]"}function Sp(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function nl(e){return e==null?"":Sp(e)}function ue(e){return typeof e=="string"}function $r(e){return typeof e=="number"}function zp(e){return e===!0||e===!1||xp(e)&&jc(e)=="[object Boolean]"}function Fc(e){return typeof e=="object"}function xp(e){return Fc(e)&&e!==null}function he(e){return e!=null}function Tr(e){return!e.trim().length}function jc(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Cp="Incorrect 'index' type",Ep=e=>`Invalid value for key ${e}`,Pp=e=>`Pattern length exceeds max of ${e}.`,_p=e=>`Missing ${e} property in key`,Ap=e=>`Property 'weight' in key '${e}' must be a positive integer`,ga=Object.prototype.hasOwnProperty;class Tp{constructor(n){this._keys=[],this._keyMap={};let t=0;n.forEach(r=>{const i=Oc(r);this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight}),this._keys.forEach(r=>{r.weight/=t})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Oc(e){let n=null,t=null,r=null,i=1,o=null;if(ue(e)||Cn(e))r=e,n=ya(e),t=tl(e);else{if(!ga.call(e,"name"))throw new Error(_p("name"));const l=e.name;if(r=l,ga.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(Ap(l));n=ya(l),t=tl(l),o=e.getFn}return{path:n,id:t,weight:i,src:r,getFn:o}}function ya(e){return Cn(e)?e:e.split(".")}function tl(e){return Cn(e)?e.join("."):e}function Rp(e,n){const t=[];let r=!1;const i=(o,l,s,a)=>{if(he(o))if(!l[s])t.push(a!==void 0?{v:o,i:a}:o);else{const u=l[s],d=o[u];if(!he(d))return;if(s===l.length-1&&(ue(d)||$r(d)||zp(d)||typeof d=="bigint"))t.push(a!==void 0?{v:nl(d),i:a}:nl(d));else if(Cn(d)){r=!0;for(let h=0,p=d.length;h<p;h+=1)i(d[h],l,s+1,h)}else l.length&&i(d,l,s+1,a)}};return i(e,ue(n)?n.split("."):n,0),r?t:t[0]}const Np={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Mp={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,n)=>e.score===n.score?e.idx<n.idx?-1:1:e.score<n.score?-1:1},Ip={location:0,threshold:.6,distance:100},Dp={useExtendedSearch:!1,useTokenSearch:!1,getFn:Rp,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},R=Object.freeze({...Mp,...Np,...Ip,...Dp}),Lp=/[^ ]+/g;function Fp(e=1,n=3){const t=new Map,r=Math.pow(10,n);return{get(i){const o=i.match(Lp).length;if(t.has(o))return t.get(o);const l=1/Math.pow(o,.5*e),s=parseFloat(Math.round(l*r)/r);return t.set(o,s),s},clear(){t.clear()}}}class rs{constructor({getFn:n=R.getFn,fieldNormWeight:t=R.fieldNormWeight}={}){this.norm=Fp(t,3),this.getFn=n,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((t,r)=>{this._keysMap[t.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ue(this.docs[0])?this.docs.forEach((n,t)=>{this._addString(n,t)}):this.docs.forEach((n,t)=>{this._addObject(n,t)}),this.norm.clear())}add(n){const t=this.size();ue(n)?this._addString(n,t):this._addObject(n,t)}removeAt(n){this.records.splice(n,1);for(let t=n,r=this.size();t<r;t+=1)this.records[t].i-=1}removeAll(n){for(let t=n.length-1;t>=0;t-=1)this.records.splice(n[t],1);for(let t=0,r=this.records.length;t<r;t+=1)this.records[t].i=t}getValueForItemAtKeyId(n,t){return n[this._keysMap[t]]}size(){return this.records.length}_addString(n,t){if(!he(n)||Tr(n))return;const r={v:n,i:t,n:this.norm.get(n)};this.records.push(r)}_addObject(n,t){const r={i:t,$:{}};this.keys.forEach((i,o)=>{const l=i.getFn?i.getFn(n):this.getFn(n,i.path);if(he(l)){if(Cn(l)){const s=[];for(let a=0,u=l.length;a<u;a+=1){const d=l[a];if(he(d)){if(ue(d)){if(!Tr(d)){const h={v:d,i:a,n:this.norm.get(d)};s.push(h)}}else if(he(d.v)){const h=ue(d.v)?d.v:nl(d.v);if(!Tr(h)){const p={v:h,i:d.i,n:this.norm.get(h)};s.push(p)}}}}r.$[o]=s}else if(ue(l)&&!Tr(l)){const s={v:l,n:this.norm.get(l)};r.$[o]=s}}}),this.records.push(r)}toJSON(){return{keys:this.keys.map(({getFn:n,...t})=>t),records:this.records}}}function Bc(e,n,{getFn:t=R.getFn,fieldNormWeight:r=R.fieldNormWeight}={}){const i=new rs({getFn:t,fieldNormWeight:r});return i.setKeys(e.map(Oc)),i.setSources(n),i.create(),i}function jp(e,{getFn:n=R.getFn,fieldNormWeight:t=R.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new rs({getFn:n,fieldNormWeight:t});return o.setKeys(r),o.setIndexRecords(i),o}function Op(e=[],n=R.minMatchCharLength){const t=[];let r=-1,i=-1,o=0;for(let l=e.length;o<l;o+=1){const s=e[o];s&&r===-1?r=o:!s&&r!==-1&&(i=o-1,i-r+1>=n&&t.push([r,i]),r=-1)}return e[o-1]&&o-r>=n&&t.push([r,o-1]),t}const Nn=32;function Bp(e,n,t,{location:r=R.location,distance:i=R.distance,threshold:o=R.threshold,findAllMatches:l=R.findAllMatches,minMatchCharLength:s=R.minMatchCharLength,includeMatches:a=R.includeMatches,ignoreLocation:u=R.ignoreLocation}={}){if(n.length>Nn)throw new Error(Pp(Nn));const d=n.length,h=e.length,p=Math.max(0,Math.min(r,h));let g=o,v=p;const w=(C,M)=>{const T=C/d;if(u)return T;const b=Math.abs(p-M);return i?T+b/i:b?1:T},A=s>1||a,f=A?Array(h):[];let c;for(;(c=e.indexOf(n,v))>-1;){const C=w(0,c);if(g=Math.min(C,g),v=c+d,A){let M=0;for(;M<d;)f[c+M]=1,M+=1}}v=-1;let m=[],y=1,x=d+h;const z=1<<d-1;for(let C=0;C<d;C+=1){let M=0,T=x;for(;M<T;)w(C,p+T)<=g?M=T:x=T,T=Math.floor((x-M)/2+M);x=T;let b=Math.max(1,p-T+1);const Ke=l?h:Math.min(p+T,h)+d,Pe=Array(Ke+2);Pe[Ke+1]=(1<<C)-1;for(let we=Ke;we>=b;we-=1){const tn=we-1,Hn=t[e[tn]];if(A&&(f[tn]=+!!Hn),Pe[we]=(Pe[we+1]<<1|1)&Hn,C&&(Pe[we]|=(m[we+1]|m[we])<<1|1|m[we+1]),Pe[we]&z&&(y=w(C,tn),y<=g)){if(g=y,v=tn,v<=p)break;b=Math.max(1,2*p-v)}}if(w(C+1,p)>g)break;m=Pe}const _={isMatch:v>=0,score:Math.max(.001,y)};if(A){const C=Op(f,s);C.length?a&&(_.indices=C):_.isMatch=!1}return _}function Wp(e){const n={};for(let t=0,r=e.length;t<r;t+=1){const i=e.charAt(t);n[i]=(n[i]||0)|1<<r-t-1}return n}function is(e){if(e.length<=1)return e;e.sort((t,r)=>t[0]-r[0]||t[1]-r[1]);const n=[e[0]];for(let t=1,r=e.length;t<r;t+=1){const i=n[n.length-1],o=e[t];o[0]<=i[1]+1?i[1]=Math.max(i[1],o[1]):n.push(o)}return n}const Wc={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Up=new RegExp("["+Object.keys(Wc).join("")+"]","g"),ir=String.prototype.normalize?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Up,n=>Wc[n]):e=>e;class os{constructor(n,{location:t=R.location,threshold:r=R.threshold,distance:i=R.distance,includeMatches:o=R.includeMatches,findAllMatches:l=R.findAllMatches,minMatchCharLength:s=R.minMatchCharLength,isCaseSensitive:a=R.isCaseSensitive,ignoreDiacritics:u=R.ignoreDiacritics,ignoreLocation:d=R.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:i,includeMatches:o,findAllMatches:l,minMatchCharLength:s,isCaseSensitive:a,ignoreDiacritics:u,ignoreLocation:d},n=a?n:n.toLowerCase(),n=u?ir(n):n,this.pattern=n,this.chunks=[],!this.pattern.length)return;const h=(g,v)=>{this.chunks.push({pattern:g,alphabet:Wp(g),startIndex:v})},p=this.pattern.length;if(p>Nn){let g=0;const v=p%Nn,w=p-v;for(;g<w;)h(this.pattern.substr(g,Nn),g),g+=Nn;if(v){const A=p-Nn;h(this.pattern.substr(A),A)}}else h(this.pattern,0)}searchIn(n){const{isCaseSensitive:t,ignoreDiacritics:r,includeMatches:i}=this.options;if(n=t?n:n.toLowerCase(),n=r?ir(n):n,this.pattern===n){const w={isMatch:!0,score:0};return i&&(w.indices=[[0,n.length-1]]),w}const{location:o,distance:l,threshold:s,findAllMatches:a,minMatchCharLength:u,ignoreLocation:d}=this.options,h=[];let p=0,g=!1;this.chunks.forEach(({pattern:w,alphabet:A,startIndex:f})=>{const{isMatch:c,score:m,indices:y}=Bp(n,w,A,{location:o+f,distance:l,threshold:s,findAllMatches:a,minMatchCharLength:u,includeMatches:i,ignoreLocation:d});c&&(g=!0),p+=m,c&&y&&h.push(...y)});const v={isMatch:g,score:g?p/this.chunks.length:1};return g&&i&&(v.indices=is(h)),v}}class En{constructor(n){this.pattern=n}static isMultiMatch(n){return va(n,this.multiRegex)}static isSingleMatch(n){return va(n,this.singleRegex)}search(n){return{isMatch:!1,score:1}}}function va(e,n){const t=e.match(n);return t?t[1]:null}class $p extends En{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const t=n===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Vp extends En{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const r=n.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,n.length-1]}}}class Hp extends En{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const t=n.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Kp extends En{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const t=!n.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,n.length-1]}}}class Qp extends En{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const t=n.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class qp extends En{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const t=!n.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,n.length-1]}}}class Uc extends En{constructor(n,{location:t=R.location,threshold:r=R.threshold,distance:i=R.distance,includeMatches:o=R.includeMatches,findAllMatches:l=R.findAllMatches,minMatchCharLength:s=R.minMatchCharLength,isCaseSensitive:a=R.isCaseSensitive,ignoreDiacritics:u=R.ignoreDiacritics,ignoreLocation:d=R.ignoreLocation}={}){super(n),this._bitapSearch=new os(n,{location:t,threshold:r,distance:i,includeMatches:o,findAllMatches:l,minMatchCharLength:s,isCaseSensitive:a,ignoreDiacritics:u,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class $c extends En{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let t=0,r;const i=[],o=this.pattern.length;for(;(r=n.indexOf(this.pattern,t))>-1;)t=r+o,i.push([r,t-1]);const l=!!i.length;return{isMatch:l,score:l?0:1,indices:i}}}const rl=[$p,$c,Hp,Kp,qp,Qp,Vp,Uc],wa=rl.length,Gp="\0",Yp="|";function Xp(e){const n=[],t=e.length;let r=0;for(;r<t;){for(;r<t&&e[r]===" ";)r++;if(r>=t)break;let i=r;for(;i<t&&e[i]!==" "&&e[i]!=='"';)i++;if(i<t&&e[i]==='"'){for(i++;i<t;){if(e[i]==='"'){const o=i+1;if(o>=t||e[o]===" "){i++;break}if(e[o]==="$"&&(o+1>=t||e[o+1]===" ")){i+=2;break}}i++}n.push(e.substring(r,i)),r=i}else{for(;i<t&&e[i]!==" ";)i++;n.push(e.substring(r,i)),r=i}}return n}function Zp(e,n={}){return e.replace(/\\\|/g,Gp).split(Yp).map(r=>{const i=r.replace(/\u0000/g,"|"),o=Xp(i.trim()).filter(s=>s&&!!s.trim()),l=[];for(let s=0,a=o.length;s<a;s+=1){const u=o[s];let d=!1,h=-1;for(;!d&&++h<wa;){const p=rl[h],g=p.isMultiMatch(u);g&&(l.push(new p(g,n)),d=!0)}if(!d)for(h=-1;++h<wa;){const p=rl[h],g=p.isSingleMatch(u);if(g){l.push(new p(g,n));break}}}return l})}const Jp=new Set([Uc.type,$c.type]);class bp{constructor(n,{isCaseSensitive:t=R.isCaseSensitive,ignoreDiacritics:r=R.ignoreDiacritics,includeMatches:i=R.includeMatches,minMatchCharLength:o=R.minMatchCharLength,ignoreLocation:l=R.ignoreLocation,findAllMatches:s=R.findAllMatches,location:a=R.location,threshold:u=R.threshold,distance:d=R.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:o,findAllMatches:s,ignoreLocation:l,location:a,threshold:u,distance:d},n=t?n:n.toLowerCase(),n=r?ir(n):n,this.pattern=n,this.query=Zp(this.pattern,this.options)}static condition(n,t){return t.useExtendedSearch}searchIn(n){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:o}=this.options;n=i?n:n.toLowerCase(),n=o?ir(n):n;let l=0;const s=[];let a=0,u=!1;for(let d=0,h=t.length;d<h;d+=1){const p=t[d];s.length=0,l=0,u=!1;for(let g=0,v=p.length;g<v;g+=1){const w=p[g],{isMatch:A,indices:f,score:c}=w.search(n);if(A){l+=1,a+=c;const m=w.constructor.type;m.startsWith("inverse")&&(u=!0),r&&(Jp.has(m)?s.push(...f):s.push(f))}else{a=0,l=0,s.length=0,u=!1;break}}if(l){const g={isMatch:!0,score:a/l};return u&&(g.hasInverse=!0),r&&(g.indices=is(s)),g}}return{isMatch:!1,score:1}}}const il=[];function ls(...e){il.push(...e)}function pi(e,n){for(let t=0,r=il.length;t<r;t+=1){const i=il[t];if(i.condition(e,n))return new i(e,n)}return new os(e,n)}const hi={AND:"$and",OR:"$or"},ol={PATH:"$path",PATTERN:"$val"},ll=e=>!!(e[hi.AND]||e[hi.OR]),eh=e=>!!e[ol.PATH],nh=e=>!Cn(e)&&Fc(e)&&!ll(e),ka=e=>({[hi.AND]:Object.keys(e).map(n=>({[n]:e[n]}))});function Vc(e,n,{auto:t=!0}={}){const r=i=>{if(ue(i)){const a={keyId:null,pattern:i};return t&&(a.searcher=pi(i,n)),a}const o=Object.keys(i),l=eh(i);if(!l&&o.length>1&&!ll(i))return r(ka(i));if(nh(i)){const a=l?i[ol.PATH]:o[0],u=l?i[ol.PATTERN]:i[a];if(!ue(u))throw new Error(Ep(a));const d={keyId:tl(a),pattern:u};return t&&(d.searcher=pi(u,n)),d}const s={children:[],operator:o[0]};return o.forEach(a=>{const u=i[a];Cn(u)&&u.forEach(d=>{s.children.push(r(d))})}),s};return ll(e)||(e=ka(e)),r(e)}function sl(e,{ignoreFieldNorm:n=R.ignoreFieldNorm}){let t=1;return e.forEach(({key:r,norm:i,score:o})=>{const l=r?r.weight:null;t*=Math.pow(o===0&&l?Number.EPSILON:o,(l||1)*(n?1:i))}),t}function th(e,{ignoreFieldNorm:n=R.ignoreFieldNorm}){e.forEach(t=>{t.score=sl(t.matches,{ignoreFieldNorm:n})})}class rh{constructor(n){this.limit=n,this.heap=[]}get size(){return this.heap.length}shouldInsert(n){return this.size<this.limit||n<this.heap[0].score}insert(n){this.size<this.limit?(this.heap.push(n),this._bubbleUp(this.size-1)):n.score<this.heap[0].score&&(this.heap[0]=n,this._sinkDown(0))}extractSorted(n){return this.heap.sort(n)}_bubbleUp(n){const t=this.heap;for(;n>0;){const r=n-1>>1;if(t[n].score<=t[r].score)break;const i=t[n];t[n]=t[r],t[r]=i,n=r}}_sinkDown(n){const t=this.heap,r=t.length;let i=n;do{n=i;const o=2*n+1,l=2*n+2;if(o<r&&t[o].score>t[i].score&&(i=o),l<r&&t[l].score>t[i].score&&(i=l),i!==n){const s=t[n];t[n]=t[i],t[i]=s}}while(i!==n)}}function ih(e,n){const t=e.matches;n.matches=[],he(t)&&t.forEach(r=>{if(!he(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r,l={indices:i,value:o};r.key&&(l.key=r.key.src),r.idx>-1&&(l.refIndex=r.idx),n.matches.push(l)})}function oh(e,n){n.score=e.score}function lh(e,n,{includeMatches:t=R.includeMatches,includeScore:r=R.includeScore}={}){const i=[];return t&&i.push(ih),r&&i.push(oh),e.map(o=>{const{idx:l}=o,s={item:n[l],refIndex:l};return i.length&&i.forEach(a=>{a(o,s)}),s})}const sh=/\b\w+\b/g;function al({isCaseSensitive:e=!1,ignoreDiacritics:n=!1}={}){return{tokenize(t){return e||(t=t.toLowerCase()),n&&(t=ir(t)),t.match(sh)||[]}}}function ah(e,n,t){const r=new Map,i=new Map;let o=0;function l(s,a,u,d){const h=t.tokenize(s);if(!h.length)return;o++;const p=new Map;for(const g of h)p.set(g,(p.get(g)||0)+1);for(const[g,v]of p){const w={docIdx:a,keyIdx:u,subIdx:d,tf:v};let A=r.get(g);A||(A=[],r.set(g,A)),A.push(w),i.set(g,(i.get(g)||0)+1)}}for(const s of e){const{i:a,v:u,$:d}=s;if(u!==void 0){l(u,a,-1,-1);continue}if(d)for(let h=0;h<n;h++){const p=d[h];if(p)if(Array.isArray(p))for(const g of p)l(g.v,a,h,g.i??-1);else l(p.v,a,h,-1)}}return{terms:r,fieldCount:o,df:i}}function uh(e,n,t,r){const{i,v:o,$:l}=n;function s(a,u,d){const h=r.tokenize(a);if(!h.length)return;e.fieldCount++;const p=new Map;for(const g of h)p.set(g,(p.get(g)||0)+1);for(const[g,v]of p){const w={docIdx:i,keyIdx:u,subIdx:d,tf:v};let A=e.terms.get(g);A||(A=[],e.terms.set(g,A)),A.push(w),e.df.set(g,(e.df.get(g)||0)+1)}}if(o!==void 0){s(o,-1,-1);return}if(l)for(let a=0;a<t;a++){const u=l[a];if(u)if(Array.isArray(u))for(const d of u)s(d.v,a,d.i??-1);else s(u.v,a,-1)}}function Sa(e,n){for(const[t,r]of e.terms){const i=r.filter(l=>l.docIdx!==n),o=r.length-i.length;o>0&&(e.fieldCount-=o,e.df.set(t,(e.df.get(t)||0)-o),i.length===0?(e.terms.delete(t),e.df.delete(t)):e.terms.set(t,i))}}class Pn{constructor(n,t,r){this.options={...R,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new Tp(this.options.keys),this._docs=n,this._myIndex=null,this._invertedIndex=null,this.setCollection(n,r),this._lastQuery=null,this._lastSearcher=null}_getSearcher(n){if(this._lastQuery===n)return this._lastSearcher;const t=this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options,r=pi(n,t);return this._lastQuery=n,this._lastSearcher=r,r}setCollection(n,t){if(this._docs=n,t&&!(t instanceof rs))throw new Error(Cp);if(this._myIndex=t||Bc(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const r=al({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});this._invertedIndex=ah(this._myIndex.records,this._myIndex.keys.length,r)}}add(n){if(he(n)&&(this._docs.push(n),this._myIndex.add(n),this._invertedIndex)){const t=this._myIndex.records[this._myIndex.records.length-1],r=al({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});uh(this._invertedIndex,t,this._myIndex.keys.length,r)}}remove(n=()=>!1){const t=[],r=[];for(let i=0,o=this._docs.length;i<o;i+=1)n(this._docs[i],i)&&(t.push(this._docs[i]),r.push(i));if(r.length){if(this._invertedIndex)for(const i of r)Sa(this._invertedIndex,i);for(let i=r.length-1;i>=0;i-=1)this._docs.splice(r[i],1);this._myIndex.removeAll(r)}return t}removeAt(n){this._invertedIndex&&Sa(this._invertedIndex,n);const t=this._docs.splice(n,1)[0];return this._myIndex.removeAt(n),t}getIndex(){return this._myIndex}search(n,t){const{limit:r=-1}=t||{},{includeMatches:i,includeScore:o,shouldSort:l,sortFn:s,ignoreFieldNorm:a}=this.options;if(ue(n)&&!n.trim()){let h=this._docs.map((p,g)=>({item:p,refIndex:g}));return $r(r)&&r>-1&&(h=h.slice(0,r)),h}const u=$r(r)&&r>0&&ue(n);let d;if(u){const h=new rh(r);ue(this._docs[0])?this._searchStringList(n,{heap:h,ignoreFieldNorm:a}):this._searchObjectList(n,{heap:h,ignoreFieldNorm:a}),d=h.extractSorted(s)}else d=ue(n)?ue(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n),th(d,{ignoreFieldNorm:a}),l&&d.sort(s),$r(r)&&r>-1&&(d=d.slice(0,r));return lh(d,this._docs,{includeMatches:i,includeScore:o})}_searchStringList(n,{heap:t,ignoreFieldNorm:r}={}){const i=this._getSearcher(n),{records:o}=this._myIndex,l=t?null:[];return o.forEach(({v:s,i:a,n:u})=>{if(!he(s))return;const{isMatch:d,score:h,indices:p}=i.searchIn(s);if(d){const g={item:s,idx:a,matches:[{score:h,value:s,norm:u,indices:p}]};t?(g.score=sl(g.matches,{ignoreFieldNorm:r}),t.shouldInsert(g.score)&&t.insert(g)):l.push(g)}}),l}_searchLogical(n){const t=Vc(n,this.options),r=(s,a,u)=>{if(!("children"in s)){const{keyId:g,searcher:v}=s;let w;return g===null?(w=[],this._myIndex.keys.forEach((A,f)=>{w.push(...this._findMatches({key:A,value:a[f],searcher:v}))})):w=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(a,g),searcher:v}),w&&w.length?[{idx:u,item:a,matches:w}]:[]}const{children:d,operator:h}=s,p=[];for(let g=0,v=d.length;g<v;g+=1){const w=d[g],A=r(w,a,u);if(A.length)p.push(...A);else if(h===hi.AND)return[]}return p},i=this._myIndex.records,o=new Map,l=[];return i.forEach(({$:s,i:a})=>{if(he(s)){const u=r(t,s,a);u.length&&(o.has(a)||(o.set(a,{idx:a,item:s,matches:[]}),l.push(o.get(a))),u.forEach(({matches:d})=>{o.get(a).matches.push(...d)}))}}),l}_searchObjectList(n,{heap:t,ignoreFieldNorm:r}={}){const i=this._getSearcher(n),{keys:o,records:l}=this._myIndex,s=t?null:[];return l.forEach(({$:a,i:u})=>{if(!he(a))return;const d=[];let h=!1,p=!1;if(o.forEach((g,v)=>{const w=this._findMatches({key:g,value:a[v],searcher:i});w.length?(d.push(...w),w[0].hasInverse&&(p=!0)):h=!0}),!(p&&h)&&d.length){const g={idx:u,item:a,matches:d};t?(g.score=sl(g.matches,{ignoreFieldNorm:r}),t.shouldInsert(g.score)&&t.insert(g)):s.push(g)}}),s}_findMatches({key:n,value:t,searcher:r}){if(!he(t))return[];const i=[];if(Cn(t))t.forEach(({v:o,i:l,n:s})=>{if(!he(o))return;const{isMatch:a,score:u,indices:d,hasInverse:h}=r.searchIn(o);a&&i.push({score:u,key:n,value:o,idx:l,norm:s,indices:d,hasInverse:h})});else{const{v:o,n:l}=t,{isMatch:s,score:a,indices:u,hasInverse:d}=r.searchIn(o);s&&i.push({score:a,key:n,value:o,norm:l,indices:u,hasInverse:d})}return i}}class ch{static condition(n,t){return t.useTokenSearch}constructor(n,t){this.options=t,this.analyzer=al({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics});const r=this.analyzer.tokenize(n),i=t._invertedIndex,{df:o,fieldCount:l}=i;this.termSearchers=[],this.idfWeights=[];for(const s of r){this.termSearchers.push(new os(s,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));const a=o.get(s)||0,u=Math.log(1+(l-a+.5)/(a+.5));this.idfWeights.push(u)}}searchIn(n){if(!this.termSearchers.length)return{isMatch:!1,score:1};const t=[];let r=0,i=0,o=0;for(let a=0;a<this.termSearchers.length;a++){const u=this.termSearchers[a].searchIn(n),d=this.idfWeights[a];i+=d,u.isMatch&&(o++,r+=d*(1-u.score),u.indices&&t.push(...u.indices))}if(o===0)return{isMatch:!1,score:1};const l=i>0?1-r/i:0,s={isMatch:!0,score:Math.max(.001,l)};return this.options.includeMatches&&t.length&&(s.indices=is(t)),s}}Pn.version="7.3.0";Pn.createIndex=Bc;Pn.parseIndex=jp;Pn.config=R;Pn.match=function(e,n,t){return pi(e,{...R,...t}).searchIn(n)};Pn.parseQuery=Vc;ls(bp);ls(ch);Pn.use=function(...e){e.forEach(n=>ls(n))};function dh({current:e,onChange:n,locale:t,disabled:r}){const i=ne.useRef(null),o=ne.useRef({});return ne.useEffect(()=>{if(r)return;const l=o.current[e];l&&l.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[e,r]),S.jsx("div",{ref:i,className:"flex gap-1 px-4 py-1 overflow-x-auto scrollbar-hide",children:xa.map(l=>{const s=!r&&e===l.id;return S.jsxs("button",{ref:a=>{o.current[l.id]=a},onClick:()=>n(l.id),className:`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${s?"bg-indigo-100 text-indigo-700 font-medium":r?"bg-gray-50 text-gray-400 hover:bg-gray-100":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,title:r?t==="zh"?"点击切换到该分类":"Click to switch to this category":void 0,children:[S.jsx("span",{children:l.icon}),S.jsx("span",{children:l.label[t]})]},l.id)})})}function fh({value:e,onChange:n,locale:t}){const r=t==="zh"?"搜索模板...":"Search templates...";return S.jsxs("div",{className:"relative",children:[S.jsxs("svg",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("circle",{cx:"11",cy:"11",r:"8"}),S.jsx("path",{d:"m21 21-4.35-4.35"})]}),S.jsx("input",{type:"text",value:e,onChange:i=>n(i.target.value),placeholder:r,className:"w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"})]})}const ph=Object.fromEntries(xa.map(e=>[e.id,e]));function hh({templates:e,locale:n,isSearching:t,isGlobalSearch:r,query:i,onCategoryClick:o}){return e.length===0?S.jsx("div",{className:"flex flex-col items-center justify-center h-32 text-gray-400 text-sm gap-1",children:t?S.jsxs(S.Fragment,{children:[S.jsx("span",{children:n==="zh"?`未找到与 "${i}" 相关的模板`:`No templates match "${i}"`}),S.jsx("span",{className:"text-xs",children:n==="zh"?"试试其他关键词，或浏览分类":"Try different keywords or browse by category"})]}):S.jsx("span",{children:n==="zh"?"该分类下暂无模板":"No templates in this category"})}):S.jsxs("div",{className:"flex flex-col gap-2",children:[t&&S.jsx("div",{className:"text-xs text-gray-500 px-1",children:r?n==="zh"?`全局搜索 · 找到 ${e.length} 条结果`:`Global search · ${e.length} result${e.length===1?"":"s"}`:n==="zh"?`当前分类内 · 找到 ${e.length} 条结果`:`In current category · ${e.length} result${e.length===1?"":"s"}`}),e.map(l=>S.jsx(mh,{template:l,locale:n,showCategoryBadge:!!r,onCategoryClick:o},l.id))]})}function mh({template:e,locale:n,showCategoryBadge:t,onCategoryClick:r}){const[i,o]=ne.useState("idle"),l=ph[e.category],s=async()=>{await navigator.clipboard.writeText(e.prompt[n]),o("copied"),setTimeout(()=>o("idle"),1500)},a=async()=>{try{const[u]=await chrome.tabs.query({active:!0,currentWindow:!0}),d=["chatgpt.com","claude.ai","gemini.google.com","chat.deepseek.com","www.doubao.com"];if(!((u==null?void 0:u.url)&&d.some(p=>u.url.includes(p)))){await navigator.clipboard.writeText(e.prompt[n]),o("fallback"),setTimeout(()=>o("idle"),2e3);return}chrome.runtime.sendMessage({type:"INSERT_TEMPLATE",payload:{text:e.prompt[n]}}),o("inserted"),setTimeout(()=>o("idle"),1500)}catch{await navigator.clipboard.writeText(e.prompt[n]),o("fallback"),setTimeout(()=>o("idle"),2e3)}};return S.jsxs("div",{className:"bg-white rounded-lg border border-gray-100 p-3 hover:border-indigo-200 hover:shadow-sm transition-all",children:[S.jsxs("div",{className:"flex items-start justify-between gap-2 mb-1",children:[S.jsx("h3",{className:"text-sm font-medium text-gray-800 flex-1",children:e.title[n]}),t&&l&&S.jsxs("button",{onClick:()=>r==null?void 0:r(e.category),className:"shrink-0 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors",title:n==="zh"?"查看该分类全部模板":"View all templates in this category",children:[S.jsx("span",{children:l.icon}),S.jsx("span",{children:l.label[n]})]})]}),S.jsx("p",{className:"text-xs text-gray-500 mb-2 line-clamp-2",children:e.description[n]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("button",{onClick:a,className:`px-3 py-1 text-xs rounded-md font-medium transition-colors ${i==="inserted"?"bg-green-50 text-green-600":i==="fallback"?"bg-yellow-50 text-yellow-600":"bg-indigo-50 text-indigo-600 hover:bg-indigo-100"}`,children:i==="inserted"?n==="zh"?"已插入":"Inserted":i==="fallback"?n==="zh"?"已复制(请打开AI页面)":"Copied (open AI page)":n==="zh"?"插入":"Insert"}),S.jsx("button",{onClick:s,className:"px-3 py-1 text-xs rounded-md bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors",children:i==="copied"?n==="zh"?"已复制":"Copied":n==="zh"?"复制":"Copy"}),S.jsx("div",{className:"flex-1"}),S.jsx("div",{className:"flex gap-1",children:e.tags.slice(0,2).map(u=>S.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-400",children:u[n]},u[n]))})]})]})}function gh({locale:e,onLocaleChange:n,onBack:t}){const r=o=>{n(o),lo({locale:o})},i=()=>{window.confirm(e==="zh"?`感谢您的支持！❤️
点击"确定"前往 Ko-fi 请我喝杯咖啡`:`Thanks for your support! ❤️
Click "OK" to buy me a coffee on Ko-fi`)&&window.open("https://ko-fi.com/sumei7550","_blank")};return S.jsxs("div",{className:"flex flex-col h-full bg-gray-50",children:[S.jsxs("header",{className:"flex items-center gap-3 px-4 py-3 bg-white border-b",children:[S.jsx("button",{onClick:t,className:"p-1 rounded hover:bg-gray-100","aria-label":"Back",children:S.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:S.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),S.jsx("h1",{className:"text-base font-semibold text-gray-800",children:e==="zh"?"设置":"Settings"})]}),S.jsxs("div",{className:"flex-1 p-4 space-y-4",children:[S.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[S.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-3",children:e==="zh"?"语言 / Language":"Language / 语言"}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:()=>r("zh"),className:`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${e==="zh"?"bg-indigo-100 text-indigo-700 border border-indigo-200":"bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"}`,children:"中文"}),S.jsx("button",{onClick:()=>r("en"),className:`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${e==="en"?"bg-indigo-100 text-indigo-700 border border-indigo-200":"bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"}`,children:"English"})]})]}),S.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[S.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:e==="zh"?"关于":"About"}),S.jsx("p",{className:"text-xs text-gray-500",children:"PromptPro v1.0.2"}),S.jsx("p",{className:"text-xs text-gray-400 mt-1",children:e==="zh"?"一键优化 AI 提示词，内置专业模板库":"One-click AI prompt optimizer with template library"})]}),S.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[S.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:e==="zh"?"使用统计":"Usage"}),S.jsx("p",{className:"text-xs text-gray-500",children:e==="zh"?"每日免费优化次数：10 次":"Daily free optimizations: 10"})]}),S.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[S.jsxs("button",{onClick:i,className:"w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-80 flex items-center justify-center gap-2",style:{backgroundColor:"#29abe0"},children:[S.jsx("span",{children:"☕"}),e==="zh"?"请我喝杯咖啡":"Buy me a coffee"]}),S.jsx("p",{className:"text-xs text-gray-400 text-center mt-2",children:e==="zh"?"支持项目持续发展 ❤️":"Support the project ❤️"})]}),S.jsx("div",{className:"mt-4 pt-3 border-t border-gray-100 -mb-4",children:S.jsx("a",{href:e==="zh"?chrome.runtime.getURL("privacy_zh.html"):chrome.runtime.getURL("privacy_en.html"),target:"_blank",rel:"noopener noreferrer",className:"block text-center text-xs text-gray-400 hover:text-gray-600 transition-colors",children:e==="zh"?"隐私政策":"Privacy Policy"})})]})]})}const yh=[{name:"ChatGPT",color:"#10a37f"},{name:"Claude",color:"#d97706"},{name:"DeepSeek",color:"#4f6ef7"},{name:"Gemini",color:"#4285f4"},{name:"豆包",color:"#3b82f6"}];function vh({locale:e,onDismiss:n}){const t=e==="zh"?"前往以下 AI 对话页面，即可使用一键提示词优化功能":"Visit any supported AI chat page to use the prompt optimization feature";return S.jsxs("div",{className:"mx-4 mt-2 p-3 bg-indigo-50 border border-indigo-100 rounded-lg relative",children:[S.jsx("button",{onClick:n,className:"absolute top-2 right-2 text-gray-400 hover:text-gray-600 w-5 h-5 flex items-center justify-center","aria-label":"Close",children:S.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:S.jsx("path",{d:"M2 2l8 8M10 2l-8 8"})})}),S.jsx("p",{className:"text-xs text-gray-700 pr-4 mb-2",children:t}),S.jsx("div",{className:"flex flex-wrap gap-1.5",children:yh.map(r=>S.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white",style:{backgroundColor:r.color},children:r.name},r.name))})]})}const wh=[{id:"w1",category:"writing",title:{zh:"文章大纲生成",en:"Article Outline Generator"},description:{zh:"生成结构化的文章大纲",en:"Generate a structured article outline"},prompt:{zh:`请为以下主题生成一篇详细的文章大纲，包含引言、3-5个主要章节（每个章节有2-3个子要点）和结论。

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
- Add 5-8 relevant hashtags`},variables:["topic"],tags:[{zh:"小红书",en:"xiaohongshu"},{zh:"社交媒体",en:"social-media"},{zh:"文案",en:"copywriting"}],keywords:["种草","笔记","图文","RED","达人","博主"]},{id:"w3",category:"writing",title:{zh:"SEO 文章写作",en:"SEO Article Writing"},description:{zh:"生成 SEO 友好的长文",en:"Generate SEO-friendly long-form content"},prompt:{zh:`你是一位 SEO 内容专家。请围绕以下关键词写一篇 SEO 友好的文章。

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
- Image suggestions (describe what visuals are needed)`},variables:["topic","audience"],tags:[{zh:"公众号",en:"wechat"},{zh:"深度",en:"in-depth"},{zh:"文章",en:"article"}],keywords:["微信","订阅号","深度文章","长文","自媒体"]},{id:"w9",category:"writing",title:{zh:"抖音/短视频文案",en:"Short Video Script"},description:{zh:"生成抖音/快手风格的爆款短视频文案",en:"Generate viral short video scripts"},prompt:{zh:`你是一位百万粉丝的短视频创作者。请为以下主题写一条短视频文案。

主题：{topic}

要求：
- 前3秒必须有强钩子（反转/冲突/悬念/共鸣）
- 口语化表达，像跟朋友聊天
- 节奏紧凑，每句话都有信息量
- 结尾设置互动点（评论区见/你觉得呢）
- 总时长控制在30-60秒（约150-300字）
- 标注画面切换节点
- 给出3个爆款标题选项
- 推荐BGM风格`,en:`You are a viral short video creator with millions of followers. Write a short video script for the following topic.

Topic: {topic}

Requirements:
- First 3 seconds must have a strong hook (twist/conflict/suspense/resonance)
- Conversational tone, like chatting with a friend
- Tight pacing, every sentence carries information
- End with an engagement point (comment below/what do you think)
- Total duration 30-60 seconds (about 150-300 words)
- Mark scene transition points
- Provide 3 viral title options
- Recommend BGM style`},variables:["topic"],tags:[{zh:"抖音",en:"douyin"},{zh:"短视频",en:"short-video"},{zh:"爆款",en:"viral"}],keywords:["快手","tiktok","视频文案","爆款文案","短视频脚本","口播"]},{id:"w10",category:"writing",title:{zh:"知乎回答",en:"Zhihu Answer"},description:{zh:"撰写专业有深度的知乎风格回答",en:"Write professional in-depth Zhihu-style answers"},prompt:{zh:`你是知乎某领域的优质答主。请为以下问题写一个高赞回答。

问题：{question}

要求：
- 开头先给结论（让人想继续看）
- 用"先说结论→再讲原因→最后给建议"的结构
- 有理有据，引用数据/案例/个人经历
- 适当使用分割线和加粗突出重点
- 语气专业但不学究，有个人观点
- 结尾升华或给出可操作的建议
- 800-1500字`,en:`You are a top-rated Zhihu (Q&A platform) contributor. Write a highly-upvoted answer for the following question.

Question: {question}

Requirements:
- Start with the conclusion (make people want to read more)
- Use "conclusion → reasoning → advice" structure
- Well-supported with data/cases/personal experience
- Use dividers and bold to highlight key points
- Professional but not pedantic tone, with personal opinions
- End with an insight or actionable advice
- 800-1500 words`},variables:["question"],tags:[{zh:"知乎",en:"zhihu"},{zh:"问答",en:"Q&A"},{zh:"深度",en:"in-depth"}],keywords:["专业回答","长文回答","干货","深度分析","问答"]},{id:"w11",category:"writing",title:{zh:"微博文案",en:"Weibo Post"},description:{zh:"生成适合微博传播的短文案",en:"Generate short copy for Weibo/Twitter"},prompt:{zh:`你是一位擅长社交传播的文案高手。请为以下内容写一条微博。

内容/话题：{topic}

要求：
- 140字以内（核心版）+ 展开版（280字以内）各一条
- 观点鲜明，有态度
- 善用短句、排比、反问增强节奏感
- 结合当下热点或情绪共鸣点
- 添加2-3个话题标签 #xxx#
- 给出最佳发布时间建议`,en:`You are a social media copywriting expert. Write a Weibo/Twitter post for the following content.

Topic: {topic}

Requirements:
- Short version (under 140 chars) + extended version (under 280 chars)
- Clear opinion with attitude
- Use short sentences, parallelism, rhetorical questions for rhythm
- Connect to current trends or emotional resonance
- Add 2-3 hashtags
- Suggest optimal posting time`},variables:["topic"],tags:[{zh:"微博",en:"weibo"},{zh:"短文案",en:"short-copy"},{zh:"热点",en:"trending"}],keywords:["twitter","热搜","话题","短文案","社交媒体","140字"]},{id:"w12",category:"writing",title:{zh:"朋友圈文案",en:"WeChat Moments Post"},description:{zh:"生成有质感的朋友圈配文",en:"Generate quality WeChat Moments captions"},prompt:{zh:`请为以下场景/内容写一条朋友圈文案。

场景/内容：{scene}

要求：
- 提供3种风格：文艺感 / 幽默感 / 走心感
- 每条控制在2-4行（50-100字）
- 真实自然，不矫情不做作
- 有留白感，给人想象空间
- 避免鸡汤和烂大街的句子
- 如适合，建议配图方向（几张、什么风格）`,en:`Please write a WeChat Moments caption for the following scene/content.

Scene/Content: {scene}

Requirements:
- Provide 3 styles: artistic / humorous / heartfelt
- Keep each to 2-4 lines (50-100 words)
- Authentic and natural, not pretentious
- Leave room for imagination
- Avoid clichés and overused quotes
- If appropriate, suggest photo direction (how many, what style)`},variables:["scene"],tags:[{zh:"朋友圈",en:"moments"},{zh:"微信",en:"wechat"},{zh:"生活",en:"lifestyle"}],keywords:["九宫格","配文","生活分享","日常","文案灵感"]}],kh=[{id:"wp1",category:"workplace",title:{zh:"转正述职报告",en:"Probation Review Report"},description:{zh:"生成结构化的转正述职报告",en:"Generate a structured probation review report"},prompt:{zh:`请帮我撰写一份转正述职报告。

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

Style: Professional and sincere, data-driven, emphasize value contribution, 1500-2000 words`},variables:["position","duration","work_content"],tags:[{zh:"转正",en:"probation"},{zh:"述职",en:"review"},{zh:"职场",en:"workplace"}],keywords:["试用期","实习转正","转正答辩","入职总结","试用期总结","probation","onboarding"]},{id:"wp2",category:"workplace",title:{zh:"年终总结报告",en:"Annual Review Report"},description:{zh:"生成全面的年终工作总结",en:"Generate a comprehensive annual work review"},prompt:{zh:`请帮我撰写一份年终工作总结报告。

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

Style: Well-structured, data-driven, results-oriented, 2000-3000 words. Use the STAR framework for project descriptions.`},variables:["position","work_content","achievements"],tags:[{zh:"年终",en:"annual"},{zh:"总结",en:"summary"},{zh:"职场",en:"workplace"}],keywords:["年度总结","年度汇报","年终汇报","述职报告","年度回顾"]},{id:"wp3",category:"workplace",title:{zh:"OKR 撰写",en:"OKR Writing"},description:{zh:"制定清晰可衡量的 OKR",en:"Write clear and measurable OKRs"},prompt:{zh:`请帮我制定下季度的 OKR（目标与关键结果）。

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
- Include a brief action plan`},variables:["role","direction"],tags:[{zh:"OKR",en:"okr"},{zh:"目标",en:"goal"},{zh:"规划",en:"planning"}],keywords:["KPI","目标管理","季度目标","绩效目标","目标制定"]},{id:"wp4",category:"workplace",title:{zh:"晋升答辩材料",en:"Promotion Defense Material"},description:{zh:"准备晋升答辩的结构化材料",en:"Prepare structured promotion defense materials"},prompt:{zh:`请帮我准备晋升答辩材料。

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

Style: Confident but not arrogant, fact and data driven, highlight contributions exceeding current level`},variables:["current_level","target_level","achievements"],tags:[{zh:"晋升",en:"promotion"},{zh:"答辩",en:"defense"},{zh:"职场",en:"workplace"}],keywords:["升职","职级晋升","晋级","答辩PPT","晋升材料"]},{id:"wp5",category:"workplace",title:{zh:"周报生成器",en:"Weekly Report Generator"},description:{zh:"快速生成结构化周报",en:"Quickly generate structured weekly reports"},prompt:{zh:`请根据以下工作内容，帮我生成一份结构化的周报。

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

Style: Concise and professional, data-driven`},variables:["work_content"],tags:[{zh:"周报",en:"weekly-report"},{zh:"工作",en:"work"},{zh:"汇报",en:"report"}],keywords:["日报","月报","工作汇报","进度汇报","工作日志","daily report","status update"]},{id:"wp6",category:"workplace",title:{zh:"会议纪要整理",en:"Meeting Minutes"},description:{zh:"将会议内容整理成结构化纪要",en:"Organize meeting content into structured minutes"},prompt:{zh:`请将以下会议内容整理成结构化的会议纪要。

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
- Next meeting schedule`},variables:["meeting_content"],tags:[{zh:"会议",en:"meeting"},{zh:"纪要",en:"minutes"},{zh:"整理",en:"organize"}],keywords:["会议记录","会议总结","会议笔记","会议备忘"]},{id:"wp7",category:"workplace",title:{zh:"邮件润色",en:"Email Polish"},description:{zh:"让邮件更专业、得体",en:"Make emails more professional"},prompt:{zh:`请帮我润色以下邮件内容，使其更加专业、得体、简洁。保持原意不变，优化表达方式和语气。

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
- Polite and appropriate closing`},variables:["email_content"],tags:[{zh:"邮件",en:"email"},{zh:"润色",en:"polish"},{zh:"商务",en:"business"}],keywords:["邮件优化","商务邮件","工作邮件","英文邮件","邮件改写"]},{id:"wp8",category:"workplace",title:{zh:"项目复盘报告",en:"Project Retrospective"},description:{zh:"系统化的项目复盘总结",en:"Systematic project retrospective summary"},prompt:{zh:`请帮我撰写一份项目复盘报告。

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
8. Acknowledgements and next steps`},variables:["project_name","duration","results","issues"],tags:[{zh:"复盘",en:"retrospective"},{zh:"项目",en:"project"},{zh:"总结",en:"summary"}],keywords:["项目总结","项目回顾","复盘会","postmortem","项目反思"]},{id:"wp9",category:"workplace",title:{zh:"工作交接文档",en:"Work Handover Document"},description:{zh:"生成清晰的工作交接文档",en:"Generate clear work handover documents"},prompt:{zh:`请帮我撰写工作交接文档。

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
8. Suggested priority items`},variables:["position","responsibilities","ongoing_projects"],tags:[{zh:"交接",en:"handover"},{zh:"文档",en:"document"},{zh:"职场",en:"workplace"}],keywords:["离职交接","工作移交","交接清单","岗位交接"]},{id:"wp10",category:"workplace",title:{zh:"绩效自评",en:"Performance Self-Review"},description:{zh:"撰写有说服力的绩效自评",en:"Write a persuasive performance self-review"},prompt:{zh:`请帮我撰写本季度/年度的绩效自评。

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

Style: Data-driven, results-oriented, 800-1200 words`},variables:["position","work_content","metrics"],tags:[{zh:"绩效",en:"performance"},{zh:"自评",en:"self-review"},{zh:"考核",en:"evaluation"}],keywords:["绩效考核","自我评价","绩效评估","考核自评","绩效面谈","KPI","review"]}],Sh=[{id:"c1",category:"coding",title:{zh:"代码审查",en:"Code Review"},description:{zh:"对代码进行专业审查",en:"Professional code review"},prompt:{zh:`你是一位资深软件工程师。请对以下代码进行审查。

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

Format: Sort by severity, provide specific line numbers and suggested changes.`},variables:["code"],tags:[{zh:"代码审查",en:"code-review"},{zh:"质量",en:"quality"},{zh:"最佳实践",en:"best-practice"}],keywords:["review","PR","pull request","代码评审","merge request"]},{id:"c2",category:"coding",title:{zh:"需求转代码",en:"Requirements to Code"},description:{zh:"将需求描述转为可执行代码",en:"Convert requirements to executable code"},prompt:{zh:`请根据以下需求描述，编写完整的实现代码。

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
- If multiple approaches exist, explain why you chose one`},variables:["requirement","tech_stack"],tags:[{zh:"实现",en:"implementation"},{zh:"需求",en:"requirements"},{zh:"编码",en:"coding"}],keywords:["功能开发","写代码","编程实现","feature","开发需求"]},{id:"c3",category:"coding",title:{zh:"Bug 诊断",en:"Bug Diagnosis"},description:{zh:"分析代码问题并给出修复方案",en:"Analyze code issues and provide fixes"},prompt:{zh:`我遇到了一个 Bug，请帮我诊断并修复。

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
4. Suggest how to avoid similar issues`},variables:["code","error"],tags:[{zh:"调试",en:"debug"},{zh:"Bug",en:"bug"},{zh:"修复",en:"fix"}],keywords:["报错","异常","error","排查","故障","crash","exception"]},{id:"c4",category:"coding",title:{zh:"单元测试生成",en:"Unit Test Generator"},description:{zh:"为代码生成全面的单元测试",en:"Generate comprehensive unit tests"},prompt:{zh:`请为以下代码编写全面的单元测试。

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
- Consider versioning strategy`},variables:["scenario"],tags:[{zh:"API",en:"api"},{zh:"REST",en:"rest"},{zh:"设计",en:"design"}],keywords:["接口设计","restful","graphql","swagger","openapi","微服务"]},{id:"c7",category:"coding",title:{zh:"正则表达式生成",en:"Regex Generator"},description:{zh:"根据需求生成正则表达式",en:"Generate regex from requirements"},prompt:{zh:`请根据以下需求生成正则表达式。

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
5. Estimate performance improvement`},variables:["sql","context"],tags:[{zh:"SQL",en:"sql"},{zh:"性能",en:"performance"},{zh:"数据库",en:"database"}],keywords:["mysql","postgresql","oracle","mariadb","sqlite","慢查询","索引优化","mongodb"]},{id:"c9",category:"coding",title:{zh:"代码解释",en:"Code Explanation"},description:{zh:"详细解释代码逻辑",en:"Explain code logic in detail"},prompt:{zh:`请详细解释以下代码的逻辑和工作原理。

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

Provide 3 candidate commit messages, from concise to detailed.`},variables:["changes"],tags:[{zh:"Git",en:"git"},{zh:"Commit",en:"commit"},{zh:"规范",en:"convention"}],keywords:["github","gitlab","gitee","提交信息","commit message","版本控制"]}],zh=[{id:"t1",category:"translation",title:{zh:"中英互译（信达雅）",en:"CN-EN Translation (Faithful & Elegant)"},description:{zh:"高质量中英文互译，兼顾准确与流畅",en:"High-quality CN-EN translation"},prompt:{zh:`你是一位资深翻译专家，精通中英双语。请将以下文本翻译为{target_language}。

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
- For untranslatable wordplay, add a footnote explanation`},variables:["text","target_language"],tags:[{zh:"字幕",en:"subtitle"},{zh:"视频",en:"video"},{zh:"翻译",en:"translation"}]}],xh=[{id:"m1",category:"marketing",title:{zh:"爆款标题公式",en:"Viral Headline Formulas"},description:{zh:"用经典公式生成高点击率标题",en:"Generate high-CTR headlines with proven formulas"},prompt:{zh:`你是一位资深内容营销专家。请用以下经典标题公式，为我的内容生成 10 个爆款标题。

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

Requirement: Personas should differ significantly, covering core users and potential users`},variables:["product","industry"],tags:[{zh:"用户画像",en:"user-persona"},{zh:"产品",en:"product"},{zh:"营销",en:"marketing"}]}],Ch=[{id:"a1",category:"academic",title:{zh:"论文摘要撰写",en:"Paper Abstract Writing"},description:{zh:"生成规范的学术论文摘要",en:"Generate a standard academic paper abstract"},prompt:{zh:`请根据以下论文信息，撰写一篇规范的学术摘要。

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

Requirements: Highlight key points, clear logic, balanced time allocation (methodology + results > 60%)`},variables:["title","duration","content"],tags:[{zh:"答辩",en:"defense"},{zh:"PPT",en:"ppt"},{zh:"论文",en:"paper"}]}],Eh=[{id:"an1",category:"analysis",title:{zh:"数据分析报告",en:"Data Analysis Report"},description:{zh:"将数据转化为有洞察的分析报告",en:"Transform data into insightful analysis reports"},prompt:{zh:`请根据以下数据，撰写一份数据分析报告。

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

Requirement: Combine latest trends, provide forward-looking judgment`},variables:["industry","timeframe"],tags:[{zh:"行业",en:"industry"},{zh:"趋势",en:"trend"},{zh:"机会",en:"opportunity"}]}],Ph=[{id:"cr1",category:"creative",title:{zh:"头脑风暴",en:"Brainstorming"},description:{zh:"激发创意灵感的头脑风暴",en:"Creative brainstorming session"},prompt:{zh:`请围绕以下主题进行头脑风暴，生成尽可能多的创意点子。

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
- Cover image and title suggestions (3 options)`},variables:["topic","location","duration","style"],tags:[{zh:"Vlog",en:"vlog"},{zh:"生活",en:"lifestyle"},{zh:"脚本",en:"script"}]}],za=[...wh,...kh,...Sh,...zh,...xh,...Ch,...Eh,...Ph],_h="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%20width='128'%20height='128'%3e%3cdefs%3e%3clinearGradient%20id='bg'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%237C3AED'/%3e%3cstop%20offset='100%25'%20stop-color='%234F46E5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='sparkle'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FDE68A'/%3e%3cstop%20offset='100%25'%20stop-color='%23F59E0B'/%3e%3c/linearGradient%3e%3c/defs%3e%3c!--%20Rounded%20square%20background%20--%3e%3crect%20x='4'%20y='4'%20width='120'%20height='120'%20rx='24'%20ry='24'%20fill='url(%23bg)'/%3e%3c!--%20Text%20cursor%20/%20prompt%20symbol%20'%3e'%20--%3e%3cpath%20d='M30%2044%20L58%2064%20L30%2084'%20stroke='white'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'%20fill='none'%20opacity='0.95'/%3e%3c!--%20Horizontal%20line%20(text%20representation)%20--%3e%3cline%20x1='66'%20y1='64'%20x2='98'%20y2='64'%20stroke='white'%20stroke-width='7'%20stroke-linecap='round'%20opacity='0.7'/%3e%3c!--%20Magic%20wand%20sparkle%20top-right%20--%3e%3cg%20fill='url(%23sparkle)'%3e%3c!--%20Main%20star%20--%3e%3cpath%20d='M96%2024%20L98.5%2031%20L106%2033.5%20L98.5%2036%20L96%2043%20L93.5%2036%20L86%2033.5%20L93.5%2031%20Z'/%3e%3c!--%20Small%20star%20--%3e%3cpath%20d='M78%2020%20L79.5%2023.5%20L83%2025%20L79.5%2026.5%20L78%2030%20L76.5%2026.5%20L73%2025%20L76.5%2023.5%20Z'/%3e%3c!--%20Tiny%20dot%20--%3e%3ccircle%20cx='104'%20cy='22'%20r='2.5'/%3e%3c/g%3e%3c/svg%3e",oo="promptpro_popup_onboarded";function Ah(){const[e,n]=ne.useState("en"),[t,r]=ne.useState("writing"),[i,o]=ne.useState(!0),[l,s]=ne.useState(""),[a,u]=ne.useState(!1),[d,h]=ne.useState(!1),[p,g]=ne.useState(null);ne.useEffect(()=>{Hc().then(z=>n(z.locale)),Kc().then(g),chrome.storage.local.get(oo).then(z=>{z[oo]||h(!0)})},[]);const v=()=>{const z=e==="zh"?"en":"zh";n(z),lo({locale:z})},w=z=>{r(z),o(!0)},A=z=>{s(z),z.trim()?o(!1):o(!0)},f=l.trim().length>0,c=l.trim(),m=f&&!i,y=ne.useMemo(()=>new Pn(za,{keys:[{name:"title.zh",weight:.3},{name:"title.en",weight:.3},{name:"keywords",weight:.25},{name:"description.zh",weight:.15},{name:"description.en",weight:.15},{name:"tags.zh",weight:.1},{name:"tags.en",weight:.1},{name:"category",weight:.05}],threshold:.3,ignoreLocation:!0,includeScore:!0}),[]),x=ne.useMemo(()=>{if(!f)return za.filter(M=>M.category===t);const _=/[一-鿿]/.test(c)?.35:c.length<=3?.15:.3,C=y.search(c).filter(M=>(M.score??1)<=_).map(M=>M.item);return i?C.filter(M=>M.category===t):C},[f,c,i,t,y]);return a?S.jsx(gh,{locale:e,onLocaleChange:z=>{n(z),lo({locale:z})},onBack:()=>u(!1)}):S.jsxs("div",{className:"flex flex-col h-full bg-gray-50",children:[S.jsxs("header",{className:"flex items-center justify-between px-4 py-3 bg-white border-b",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("img",{src:_h,alt:"PromptPro",className:"w-7 h-7"}),S.jsx("h1",{className:"text-base font-semibold text-gray-800",children:"PromptPro"}),p!==null&&S.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded-full ${p<=3?"bg-red-50 text-red-500":"bg-gray-100 text-gray-500"}`,children:e==="zh"?`${p}次`:`${p} left`})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("button",{onClick:v,className:"text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-600",children:e==="zh"?"EN":"中"}),S.jsx("button",{onClick:()=>u(!0),className:"p-1.5 rounded hover:bg-gray-100 text-gray-500","aria-label":"Settings",children:S.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[S.jsx("circle",{cx:"12",cy:"12",r:"3"}),S.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]})]}),d&&S.jsx(vh,{locale:e,onDismiss:()=>{h(!1),chrome.storage.local.set({[oo]:!0})}}),S.jsx("div",{className:"px-4 py-2",children:S.jsx(fh,{value:l,onChange:A,locale:e})}),S.jsx(dh,{current:t,onChange:w,locale:e,disabled:m}),S.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-2",children:S.jsx(hh,{templates:x,locale:e,isSearching:f,isGlobalSearch:m,query:c,onCategoryClick:w})})]})}so.createRoot(document.getElementById("root")).render(S.jsx(ad.StrictMode,{children:S.jsx(Ah,{})}));
