import{C as Ta,d as uo,g as pr,r as cl,u as dl,s as fl,c as Zc,a as Jc}from"./storage-D0CloTd5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ja={exports:{}},yi={},Ra={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),nd=Symbol.for("react.portal"),td=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),sd=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ud=Symbol.for("react.memo"),cd=Symbol.for("react.lazy"),pl=Symbol.iterator;function dd(e){return e===null||typeof e!="object"?null:(e=pl&&e[pl]||e["@@iterator"],typeof e=="function"?e:null)}var Ma={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ia=Object.assign,Da={};function vt(e,n,t){this.props=e,this.context=n,this.refs=Da,this.updater=t||Ma}vt.prototype.isReactComponent={};vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function La(){}La.prototype=vt.prototype;function fs(e,n,t){this.props=e,this.context=n,this.refs=Da,this.updater=t||Ma}var ps=fs.prototype=new La;ps.constructor=fs;Ia(ps,vt.prototype);ps.isPureReactComponent=!0;var hl=Array.isArray,Fa=Object.prototype.hasOwnProperty,hs={current:null},Oa={key:!0,ref:!0,__self:!0,__source:!0};function Ba(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Fa.call(n,r)&&!Oa.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:sr,type:e,key:o,ref:s,props:i,_owner:hs.current}}function fd(e,n){return{$$typeof:sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function pd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ml=/\/+/g;function Ii(e,n){return typeof e=="object"&&e!==null&&e.key!=null?pd(""+e.key):n.toString(36)}function Rr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case sr:case nd:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ii(s,0):r,hl(i)?(t="",e!=null&&(t=e.replace(ml,"$&/")+"/"),Rr(i,n,t,"",function(u){return u})):i!=null&&(ms(i)&&(i=fd(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ml,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",hl(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Ii(o,l);s+=Rr(o,n,t,a,i)}else if(a=dd(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Ii(o,l++),s+=Rr(o,n,t,a,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function hr(e,n,t){if(e==null)return e;var r=[],i=0;return Rr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function hd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Mr={transition:null},md={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:hs};function Ua(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:hr,forEach:function(e,n,t){hr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return hr(e,function(){n++}),n},toArray:function(e){return hr(e,function(n){return n})||[]},only:function(e){if(!ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=vt;I.Fragment=td;I.Profiler=id;I.PureComponent=fs;I.StrictMode=rd;I.Suspense=ad;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=md;I.act=Ua;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ia({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=hs.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in n)Fa.call(n,a)&&!Oa.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&l!==void 0?l[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:sr,type:e.type,key:i,ref:o,props:r,_owner:s}};I.createContext=function(e){return e={$$typeof:sd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:od,_context:e},e.Consumer=e};I.createElement=Ba;I.createFactory=function(e){var n=Ba.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:ld,render:e}};I.isValidElement=ms;I.lazy=function(e){return{$$typeof:cd,_payload:{_status:-1,_result:e},_init:hd}};I.memo=function(e,n){return{$$typeof:ud,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=n}};I.unstable_act=Ua;I.useCallback=function(e,n){return me.current.useCallback(e,n)};I.useContext=function(e){return me.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return me.current.useDeferredValue(e)};I.useEffect=function(e,n){return me.current.useEffect(e,n)};I.useId=function(){return me.current.useId()};I.useImperativeHandle=function(e,n,t){return me.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return me.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return me.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return me.current.useMemo(e,n)};I.useReducer=function(e,n,t){return me.current.useReducer(e,n,t)};I.useRef=function(e){return me.current.useRef(e)};I.useState=function(e){return me.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return me.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return me.current.useTransition()};I.version="18.3.1";Ra.exports=I;var L=Ra.exports;const gd=ed(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd=L,vd=Symbol.for("react.element"),wd=Symbol.for("react.fragment"),xd=Object.prototype.hasOwnProperty,kd=yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sd={key:!0,ref:!0,__self:!0,__source:!0};function Wa(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)xd.call(n,r)&&!Sd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:vd,type:e,key:o,ref:s,props:i,_owner:kd.current}}yi.Fragment=wd;yi.jsx=Wa;yi.jsxs=Wa;ja.exports=yi;var y=ja.exports,co={},$a={exports:{}},_e={},Va={exports:{}},Ha={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,R){var M=_.length;_.push(R);e:for(;0<M;){var G=M-1>>>1,te=_[G];if(0<i(te,R))_[G]=R,_[M]=te,M=G;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],M=_.pop();if(M!==R){_[0]=M;e:for(var G=0,te=_.length,dr=te>>>1;G<dr;){var Nn=2*(G+1)-1,Mi=_[Nn],Tn=Nn+1,fr=_[Tn];if(0>i(Mi,M))Tn<te&&0>i(fr,Mi)?(_[G]=fr,_[Tn]=M,G=Tn):(_[G]=Mi,_[Nn]=M,G=Nn);else if(Tn<te&&0>i(fr,M))_[G]=fr,_[Tn]=M,G=Tn;else break e}}return R}function i(_,R){var M=_.sortIndex-R.sortIndex;return M!==0?M:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,h=null,f=3,g=!1,v=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var R=t(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=_)r(u),R.sortIndex=R.expirationTime,n(a,R);else break;R=t(u)}}function k(_){if(x=!1,m(_),!v)if(t(a)!==null)v=!0,Ve(z);else{var R=t(u);R!==null&&De(k,R.startTime-_)}}function z(_,R){v=!1,x&&(x=!1,p(w),w=-1),g=!0;var M=f;try{for(m(R),h=t(a);h!==null&&(!(h.expirationTime>R)||_&&!D());){var G=h.callback;if(typeof G=="function"){h.callback=null,f=h.priorityLevel;var te=G(h.expirationTime<=R);R=e.unstable_now(),typeof te=="function"?h.callback=te:h===t(a)&&r(a),m(R)}else r(a);h=t(a)}if(h!==null)var dr=!0;else{var Nn=t(u);Nn!==null&&De(k,Nn.startTime-R),dr=!1}return dr}finally{h=null,f=M,g=!1}}var E=!1,P=null,w=-1,j=5,C=-1;function D(){return!(e.unstable_now()-C<j)}function X(){if(P!==null){var _=e.unstable_now();C=_;var R=!0;try{R=P(!0,_)}finally{R?V():(E=!1,P=null)}}else E=!1}var V;if(typeof c=="function")V=function(){c(X)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Z=q.port2;q.port1.onmessage=X,V=function(){Z.postMessage(null)}}else V=function(){N(X,0)};function Ve(_){P=_,E||(E=!0,V())}function De(_,R){w=N(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Ve(z))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(_){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var M=f;f=R;try{return _()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var M=f;f=_;try{return R()}finally{f=M}},e.unstable_scheduleCallback=function(_,R,M){var G=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?G+M:G):M=G,_){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=M+te,_={id:d++,callback:R,priorityLevel:_,startTime:M,expirationTime:te,sortIndex:-1},M>G?(_.sortIndex=M,n(u,_),t(a)===null&&_===t(u)&&(x?(p(w),w=-1):x=!0,De(k,M-G))):(_.sortIndex=te,n(a,_),v||g||(v=!0,Ve(z))),_},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(_){var R=f;return function(){var M=f;f=R;try{return _.apply(this,arguments)}finally{f=M}}}})(Ha);Va.exports=Ha;var zd=Va.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd=L,Pe=zd;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ka=new Set,$t={};function Hn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for($t[e]=n,e=0;e<n.length;e++)Ka.add(n[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fo=Object.prototype.hasOwnProperty,Ed=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gl={},yl={};function Pd(e){return fo.call(yl,e)?!0:fo.call(gl,e)?!1:Ed.test(e)?yl[e]=!0:(gl[e]=!0,!1)}function _d(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ad(e,n,t,r){if(n===null||typeof n>"u"||_d(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ge(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var gs=/[\-:]([a-z])/g;function ys(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(gs,ys);le[n]=new ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(gs,ys);le[n]=new ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(gs,ys);le[n]=new ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function vs(e,n,t,r){var i=le.hasOwnProperty(n)?le[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ad(n,t,i,r)&&(t=null),r||i===null?Pd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var on=Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),bn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),ws=Symbol.for("react.strict_mode"),po=Symbol.for("react.profiler"),Qa=Symbol.for("react.provider"),ba=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),ho=Symbol.for("react.suspense"),mo=Symbol.for("react.suspense_list"),ks=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),qa=Symbol.for("react.offscreen"),vl=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=vl&&e[vl]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Di;function Nt(e){if(Di===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Di=n&&n[1]||""}return`
`+Di+e}var Li=!1;function Fi(e,n){if(!e||Li)return"";Li=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Li=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nt(e):""}function Nd(e){switch(e.tag){case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 2:case 15:return e=Fi(e.type,!1),e;case 11:return e=Fi(e.type.render,!1),e;case 1:return e=Fi(e.type,!0),e;default:return""}}function go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case bn:return"Portal";case po:return"Profiler";case ws:return"StrictMode";case ho:return"Suspense";case mo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ba:return(e.displayName||"Context")+".Consumer";case Qa:return(e._context.displayName||"Context")+".Provider";case xs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ks:return n=e.displayName||null,n!==null?n:go(e.type)||"Memo";case ln:n=e._payload,e=e._init;try{return go(e(n))}catch{}}return null}function Td(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return go(n);case 8:return n===ws?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ga(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jd(e){var n=Ga(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gr(e){e._valueTracker||(e._valueTracker=jd(e))}function Ya(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ga(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yo(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function wl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=kn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Xa(e,n){n=n.checked,n!=null&&vs(e,"checked",n,!1)}function vo(e,n){Xa(e,n);var t=kn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?wo(e,n.type,t):n.hasOwnProperty("defaultValue")&&wo(e,n.type,kn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function wo(e,n,t){(n!=="number"||Kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Tt=Array.isArray;function ot(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+kn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function xo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Tt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:kn(t)}}function Za(e,n){var t=kn(n.value),r=kn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Sl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ja(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ko(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ja(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rd=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){Rd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function nu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function tu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=nu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Md=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function So(e,n){if(n){if(Md[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function zo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Co=null;function Ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Eo=null,st=null,lt=null;function zl(e){if(e=ur(e)){if(typeof Eo!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Si(n),Eo(e.stateNode,e.type,n))}}function ru(e){st?lt?lt.push(e):lt=[e]:st=e}function iu(){if(st){var e=st,n=lt;if(lt=st=null,zl(e),n)for(e=0;e<n.length;e++)zl(n[e])}}function ou(e,n){return e(n)}function su(){}var Oi=!1;function lu(e,n,t){if(Oi)return e(n,t);Oi=!0;try{return ou(e,n,t)}finally{Oi=!1,(st!==null||lt!==null)&&(su(),iu())}}function Ht(e,n){var t=e.stateNode;if(t===null)return null;var r=Si(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Po=!1;if(en)try{var St={};Object.defineProperty(St,"passive",{get:function(){Po=!0}}),window.addEventListener("test",St,St),window.removeEventListener("test",St,St)}catch{Po=!1}function Id(e,n,t,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var It=!1,Qr=null,br=!1,_o=null,Dd={onError:function(e){It=!0,Qr=e}};function Ld(e,n,t,r,i,o,s,l,a){It=!1,Qr=null,Id.apply(Dd,arguments)}function Fd(e,n,t,r,i,o,s,l,a){if(Ld.apply(this,arguments),It){if(It){var u=Qr;It=!1,Qr=null}else throw Error(S(198));br||(br=!0,_o=u)}}function Kn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function au(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Cl(e){if(Kn(e)!==e)throw Error(S(188))}function Od(e){var n=e.alternate;if(!n){if(n=Kn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Cl(i),e;if(o===r)return Cl(i),n;o=o.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===t){s=!0,t=i,r=o;break}if(l===r){s=!0,r=i,t=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===t){s=!0,t=o,r=i;break}if(l===r){s=!0,r=o,t=i;break}l=l.sibling}if(!s)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function uu(e){return e=Od(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=cu(e);if(n!==null)return n;e=e.sibling}return null}var du=Pe.unstable_scheduleCallback,El=Pe.unstable_cancelCallback,Bd=Pe.unstable_shouldYield,Ud=Pe.unstable_requestPaint,Y=Pe.unstable_now,Wd=Pe.unstable_getCurrentPriorityLevel,zs=Pe.unstable_ImmediatePriority,fu=Pe.unstable_UserBlockingPriority,qr=Pe.unstable_NormalPriority,$d=Pe.unstable_LowPriority,pu=Pe.unstable_IdlePriority,vi=null,be=null;function Vd(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Qd,Hd=Math.log,Kd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(Hd(e)/Kd|0)|0}var vr=64,wr=4194304;function jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~i;l!==0?r=jt(l):(o&=s,o!==0&&(r=jt(o)))}else s=t&~i,s!==0?r=jt(s):o!==0&&(r=jt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ue(n),i=1<<t,r|=e[t],n&=~i;return r}function bd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ue(o),l=1<<s,a=i[s];a===-1?(!(l&t)||l&r)&&(i[s]=bd(l,n)):a<=n&&(e.expiredLanes|=l),o&=~l}}function Ao(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Bi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=t}function Gd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ue(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Cs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ue(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gu,Es,yu,vu,wu,No=!1,xr=[],pn=null,hn=null,mn=null,Kt=new Map,Qt=new Map,un=[],Yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pl(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Kt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(n.pointerId)}}function zt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ur(n),n!==null&&Es(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Xd(e,n,t,r,i){switch(n){case"focusin":return pn=zt(pn,e,n,t,r,i),!0;case"dragenter":return hn=zt(hn,e,n,t,r,i),!0;case"mouseover":return mn=zt(mn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Kt.set(o,zt(Kt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qt.set(o,zt(Qt.get(o)||null,e,n,t,r,i)),!0}return!1}function xu(e){var n=In(e.target);if(n!==null){var t=Kn(n);if(t!==null){if(n=t.tag,n===13){if(n=au(t),n!==null){e.blockedOn=n,wu(e.priority,function(){yu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=To(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Co=r,t.target.dispatchEvent(r),Co=null}else return n=ur(t),n!==null&&Es(n),e.blockedOn=t,!1;n.shift()}return!0}function _l(e,n,t){Ir(e)&&t.delete(n)}function Zd(){No=!1,pn!==null&&Ir(pn)&&(pn=null),hn!==null&&Ir(hn)&&(hn=null),mn!==null&&Ir(mn)&&(mn=null),Kt.forEach(_l),Qt.forEach(_l)}function Ct(e,n){e.blockedOn===n&&(e.blockedOn=null,No||(No=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Zd)))}function bt(e){function n(i){return Ct(i,e)}if(0<xr.length){Ct(xr[0],e);for(var t=1;t<xr.length;t++){var r=xr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Ct(pn,e),hn!==null&&Ct(hn,e),mn!==null&&Ct(mn,e),Kt.forEach(n),Qt.forEach(n),t=0;t<un.length;t++)r=un[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(t=un[0],t.blockedOn===null);)xu(t),t.blockedOn===null&&un.shift()}var at=on.ReactCurrentBatchConfig,Yr=!0;function Jd(e,n,t,r){var i=O,o=at.transition;at.transition=null;try{O=1,Ps(e,n,t,r)}finally{O=i,at.transition=o}}function ef(e,n,t,r){var i=O,o=at.transition;at.transition=null;try{O=4,Ps(e,n,t,r)}finally{O=i,at.transition=o}}function Ps(e,n,t,r){if(Yr){var i=To(e,n,t,r);if(i===null)Gi(e,n,r,Xr,t),Pl(e,r);else if(Xd(i,e,n,t,r))r.stopPropagation();else if(Pl(e,r),n&4&&-1<Yd.indexOf(e)){for(;i!==null;){var o=ur(i);if(o!==null&&gu(o),o=To(e,n,t,r),o===null&&Gi(e,n,r,Xr,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Gi(e,n,r,null,t)}}var Xr=null;function To(e,n,t,r){if(Xr=null,e=Ss(r),e=In(e),e!==null)if(n=Kn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=au(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Xr=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wd()){case zs:return 1;case fu:return 4;case qr:case $d:return 16;case pu:return 536870912;default:return 16}default:return 16}}var dn=null,_s=null,Dr=null;function Su(){if(Dr)return Dr;var e,n=_s,t=n.length,r,i="value"in dn?dn.value:dn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function Lr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Al(){return!1}function Ae(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?kr:Al,this.isPropagationStopped=Al,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=Ae(wt),ar=Q({},wt,{view:0,detail:0}),nf=Ae(ar),Ui,Wi,Et,wi=Q({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Et&&(Et&&e.type==="mousemove"?(Ui=e.screenX-Et.screenX,Wi=e.screenY-Et.screenY):Wi=Ui=0,Et=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:Wi}}),Nl=Ae(wi),tf=Q({},wi,{dataTransfer:0}),rf=Ae(tf),of=Q({},ar,{relatedTarget:0}),$i=Ae(of),sf=Q({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=Ae(sf),af=Q({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uf=Ae(af),cf=Q({},wt,{data:0}),Tl=Ae(cf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=pf[e])?!!n[e]:!1}function Ns(){return hf}var mf=Q({},ar,{key:function(e){if(e.key){var n=df[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=Ae(mf),yf=Q({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jl=Ae(yf),vf=Q({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),wf=Ae(vf),xf=Q({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),kf=Ae(xf),Sf=Q({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zf=Ae(Sf),Cf=[9,13,27,32],Ts=en&&"CompositionEvent"in window,Dt=null;en&&"documentMode"in document&&(Dt=document.documentMode);var Ef=en&&"TextEvent"in window&&!Dt,zu=en&&(!Ts||Dt&&8<Dt&&11>=Dt),Rl=" ",Ml=!1;function Cu(e,n){switch(e){case"keyup":return Cf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function Pf(e,n){switch(e){case"compositionend":return Eu(n);case"keypress":return n.which!==32?null:(Ml=!0,Rl);case"textInput":return e=n.data,e===Rl&&Ml?null:e;default:return null}}function _f(e,n){if(Gn)return e==="compositionend"||!Ts&&Cu(e,n)?(e=Su(),Dr=_s=dn=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zu&&n.locale!=="ko"?null:n.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Il(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Af[e.type]:n==="textarea"}function Pu(e,n,t,r){ru(r),n=Zr(n,"onChange"),0<n.length&&(t=new As("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Lt=null,qt=null;function Nf(e){Fu(e,0)}function xi(e){var n=Zn(e);if(Ya(n))return e}function Tf(e,n){if(e==="change")return n}var _u=!1;if(en){var Vi;if(en){var Hi="oninput"in document;if(!Hi){var Dl=document.createElement("div");Dl.setAttribute("oninput","return;"),Hi=typeof Dl.oninput=="function"}Vi=Hi}else Vi=!1;_u=Vi&&(!document.documentMode||9<document.documentMode)}function Ll(){Lt&&(Lt.detachEvent("onpropertychange",Au),qt=Lt=null)}function Au(e){if(e.propertyName==="value"&&xi(qt)){var n=[];Pu(n,qt,e,Ss(e)),lu(Nf,n)}}function jf(e,n,t){e==="focusin"?(Ll(),Lt=n,qt=t,Lt.attachEvent("onpropertychange",Au)):e==="focusout"&&Ll()}function Rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(qt)}function Mf(e,n){if(e==="click")return xi(n)}function If(e,n){if(e==="input"||e==="change")return xi(n)}function Df(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $e=typeof Object.is=="function"?Object.is:Df;function Gt(e,n){if($e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!fo.call(n,i)||!$e(e[i],n[i]))return!1}return!0}function Fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ol(e,n){var t=Fl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fl(t)}}function Nu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Nu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tu(){for(var e=window,n=Kr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Kr(e.document)}return n}function js(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Lf(e){var n=Tu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Nu(t.ownerDocument.documentElement,t)){if(r!==null&&js(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ol(t,o);var s=Ol(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=en&&"documentMode"in document&&11>=document.documentMode,Yn=null,jo=null,Ft=null,Ro=!1;function Bl(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ro||Yn==null||Yn!==Kr(r)||(r=Yn,"selectionStart"in r&&js(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ft&&Gt(Ft,r)||(Ft=r,r=Zr(jo,"onSelect"),0<r.length&&(n=new As("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Yn)))}function Sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Ki={},ju={};en&&(ju=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function ki(e){if(Ki[e])return Ki[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ju)return Ki[e]=n[t];return e}var Ru=ki("animationend"),Mu=ki("animationiteration"),Iu=ki("animationstart"),Du=ki("transitionend"),Lu=new Map,Ul="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,n){Lu.set(e,n),Hn(n,[e])}for(var Qi=0;Qi<Ul.length;Qi++){var bi=Ul[Qi],Of=bi.toLowerCase(),Bf=bi[0].toUpperCase()+bi.slice(1);zn(Of,"on"+Bf)}zn(Ru,"onAnimationEnd");zn(Mu,"onAnimationIteration");zn(Iu,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Du,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Wl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Fd(r,n,void 0,e),e.currentTarget=null}function Fu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Wl(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Wl(i,l,u),o=a}}}if(br)throw e=_o,br=!1,_o=null,e}function U(e,n){var t=n[Fo];t===void 0&&(t=n[Fo]=new Set);var r=e+"__bubble";t.has(r)||(Ou(n,e,2,!1),t.add(r))}function qi(e,n,t){var r=0;n&&(r|=4),Ou(t,e,r,n)}var zr="_reactListening"+Math.random().toString(36).slice(2);function Yt(e){if(!e[zr]){e[zr]=!0,Ka.forEach(function(t){t!=="selectionchange"&&(Uf.has(t)||qi(t,!1,e),qi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zr]||(n[zr]=!0,qi("selectionchange",!1,n))}}function Ou(e,n,t,r){switch(ku(n)){case 1:var i=Jd;break;case 4:i=ef;break;default:i=Ps}t=i.bind(null,n,t,e),i=void 0,!Po||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Gi(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=In(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}lu(function(){var u=o,d=Ss(t),h=[];e:{var f=Lu.get(e);if(f!==void 0){var g=As,v=e;switch(e){case"keypress":if(Lr(t)===0)break e;case"keydown":case"keyup":g=gf;break;case"focusin":v="focus",g=$i;break;case"focusout":v="blur",g=$i;break;case"beforeblur":case"afterblur":g=$i;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wf;break;case Ru:case Mu:case Iu:g=lf;break;case Du:g=kf;break;case"scroll":g=nf;break;case"wheel":g=zf;break;case"copy":case"cut":case"paste":g=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jl}var x=(n&4)!==0,N=!x&&e==="scroll",p=x?f!==null?f+"Capture":null:f;x=[];for(var c=u,m;c!==null;){m=c;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=Ht(c,p),k!=null&&x.push(Xt(c,k,m)))),N)break;c=c.return}0<x.length&&(f=new g(f,v,null,t,d),h.push({event:f,listeners:x}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&t!==Co&&(v=t.relatedTarget||t.fromElement)&&(In(v)||v[nn]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=t.relatedTarget||t.toElement,g=u,v=v?In(v):null,v!==null&&(N=Kn(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=Nl,k="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=jl,k="onPointerLeave",p="onPointerEnter",c="pointer"),N=g==null?f:Zn(g),m=v==null?f:Zn(v),f=new x(k,c+"leave",g,t,d),f.target=N,f.relatedTarget=m,k=null,In(d)===u&&(x=new x(p,c+"enter",v,t,d),x.target=m,x.relatedTarget=N,k=x),N=k,g&&v)n:{for(x=g,p=v,c=0,m=x;m;m=Qn(m))c++;for(m=0,k=p;k;k=Qn(k))m++;for(;0<c-m;)x=Qn(x),c--;for(;0<m-c;)p=Qn(p),m--;for(;c--;){if(x===p||p!==null&&x===p.alternate)break n;x=Qn(x),p=Qn(p)}x=null}else x=null;g!==null&&$l(h,f,g,x,!1),v!==null&&N!==null&&$l(h,N,v,x,!0)}}e:{if(f=u?Zn(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var z=Tf;else if(Il(f))if(_u)z=If;else{z=Rf;var E=jf}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(z=Mf);if(z&&(z=z(e,u))){Pu(h,z,t,d);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&wo(f,"number",f.value)}switch(E=u?Zn(u):window,e){case"focusin":(Il(E)||E.contentEditable==="true")&&(Yn=E,jo=u,Ft=null);break;case"focusout":Ft=jo=Yn=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,Bl(h,t,d);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Bl(h,t,d)}var P;if(Ts)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Gn?Cu(e,t)&&(w="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(w="onCompositionStart");w&&(zu&&t.locale!=="ko"&&(Gn||w!=="onCompositionStart"?w==="onCompositionEnd"&&Gn&&(P=Su()):(dn=d,_s="value"in dn?dn.value:dn.textContent,Gn=!0)),E=Zr(u,w),0<E.length&&(w=new Tl(w,e,null,t,d),h.push({event:w,listeners:E}),P?w.data=P:(P=Eu(t),P!==null&&(w.data=P)))),(P=Ef?Pf(e,t):_f(e,t))&&(u=Zr(u,"onBeforeInput"),0<u.length&&(d=new Tl("onBeforeInput","beforeinput",null,t,d),h.push({event:d,listeners:u}),d.data=P))}Fu(h,n)})}function Xt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ht(e,t),o!=null&&r.unshift(Xt(e,o,i)),o=Ht(e,n),o!=null&&r.push(Xt(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $l(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var l=t,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ht(t,o),a!=null&&s.unshift(Xt(t,a,l))):i||(a=Ht(t,o),a!=null&&s.push(Xt(t,a,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Wf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function Vl(e){return(typeof e=="string"?e:""+e).replace(Wf,`
`).replace($f,"")}function Cr(e,n,t){if(n=Vl(n),Vl(e)!==n&&t)throw Error(S(425))}function Jr(){}var Mo=null,Io=null;function Do(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,Hl=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hl<"u"?function(e){return Hl.resolve(null).then(e).catch(Kf)}:Lo;function Kf(e){setTimeout(function(){throw e})}function Yi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),bt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);bt(n)}function gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Kl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var xt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+xt,Zt="__reactProps$"+xt,nn="__reactContainer$"+xt,Fo="__reactEvents$"+xt,Qf="__reactListeners$"+xt,bf="__reactHandles$"+xt;function In(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nn]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Kl(e);e!==null;){if(t=e[Qe])return t;e=Kl(e)}return n}e=t,t=e.parentNode}return null}function ur(e){return e=e[Qe]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Si(e){return e[Zt]||null}var Oo=[],Jn=-1;function Cn(e){return{current:e}}function W(e){0>Jn||(e.current=Oo[Jn],Oo[Jn]=null,Jn--)}function B(e,n){Jn++,Oo[Jn]=e.current,e.current=n}var Sn={},de=Cn(Sn),xe=Cn(!1),Bn=Sn;function ft(e,n){var t=e.type.contextTypes;if(!t)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function ei(){W(xe),W(de)}function Ql(e,n,t){if(de.current!==Sn)throw Error(S(168));B(de,n),B(xe,t)}function Bu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,Td(e)||"Unknown",i));return Q({},t,r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Bn=de.current,B(de,e),B(xe,xe.current),!0}function bl(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Bu(e,n,Bn),r.__reactInternalMemoizedMergedChildContext=e,W(xe),W(de),B(de,e)):W(xe),B(xe,t)}var Ye=null,zi=!1,Xi=!1;function Uu(e){Ye===null?Ye=[e]:Ye.push(e)}function qf(e){zi=!0,Uu(e)}function En(){if(!Xi&&Ye!==null){Xi=!0;var e=0,n=O;try{var t=Ye;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ye=null,zi=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),du(zs,En),i}finally{O=n,Xi=!1}}return null}var et=[],nt=0,ti=null,ri=0,Ne=[],Te=0,Un=null,Xe=1,Ze="";function jn(e,n){et[nt++]=ri,et[nt++]=ti,ti=e,ri=n}function Wu(e,n,t){Ne[Te++]=Xe,Ne[Te++]=Ze,Ne[Te++]=Un,Un=e;var r=Xe;e=Ze;var i=32-Ue(r)-1;r&=~(1<<i),t+=1;var o=32-Ue(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xe=1<<32-Ue(n)+i|t<<i|r,Ze=o+e}else Xe=1<<o|t<<i|r,Ze=e}function Rs(e){e.return!==null&&(jn(e,1),Wu(e,1,0))}function Ms(e){for(;e===ti;)ti=et[--nt],et[nt]=null,ri=et[--nt],et[nt]=null;for(;e===Un;)Un=Ne[--Te],Ne[Te]=null,Ze=Ne[--Te],Ne[Te]=null,Xe=Ne[--Te],Ne[Te]=null}var Ee=null,Ce=null,$=!1,Be=null;function $u(e,n){var t=je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ql(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ee=e,Ce=gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ee=e,Ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Un!==null?{id:Xe,overflow:Ze}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ee=e,Ce=null,!0):!1;default:return!1}}function Bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Uo(e){if($){var n=Ce;if(n){var t=n;if(!ql(e,n)){if(Bo(e))throw Error(S(418));n=gn(t.nextSibling);var r=Ee;n&&ql(e,n)?$u(r,t):(e.flags=e.flags&-4097|2,$=!1,Ee=e)}}else{if(Bo(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,Ee=e}}}function Gl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Er(e){if(e!==Ee)return!1;if(!$)return Gl(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Do(e.type,e.memoizedProps)),n&&(n=Ce)){if(Bo(e))throw Vu(),Error(S(418));for(;n;)$u(e,n),n=gn(n.nextSibling)}if(Gl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ce=gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ce=null}}else Ce=Ee?gn(e.stateNode.nextSibling):null;return!0}function Vu(){for(var e=Ce;e;)e=gn(e.nextSibling)}function pt(){Ce=Ee=null,$=!1}function Is(e){Be===null?Be=[e]:Be.push(e)}var Gf=on.ReactCurrentBatchConfig;function Pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Pr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Yl(e){var n=e._init;return n(e._payload)}function Hu(e){function n(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function t(p,c){if(!e)return null;for(;c!==null;)n(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=xn(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,m,k){return c===null||c.tag!==6?(c=io(m,p.mode,k),c.return=p,c):(c=i(c,m),c.return=p,c)}function a(p,c,m,k){var z=m.type;return z===qn?d(p,c,m.props.children,k,m.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ln&&Yl(z)===c.type)?(k=i(c,m.props),k.ref=Pt(p,c,m),k.return=p,k):(k=Vr(m.type,m.key,m.props,null,p.mode,k),k.ref=Pt(p,c,m),k.return=p,k)}function u(p,c,m,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=oo(m,p.mode,k),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function d(p,c,m,k,z){return c===null||c.tag!==7?(c=On(m,p.mode,k,z),c.return=p,c):(c=i(c,m),c.return=p,c)}function h(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=io(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:return m=Vr(c.type,c.key,c.props,null,p.mode,m),m.ref=Pt(p,null,c),m.return=p,m;case bn:return c=oo(c,p.mode,m),c.return=p,c;case ln:var k=c._init;return h(p,k(c._payload),m)}if(Tt(c)||kt(c))return c=On(c,p.mode,m,null),c.return=p,c;Pr(p,c)}return null}function f(p,c,m,k){var z=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return z!==null?null:l(p,c,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mr:return m.key===z?a(p,c,m,k):null;case bn:return m.key===z?u(p,c,m,k):null;case ln:return z=m._init,f(p,c,z(m._payload),k)}if(Tt(m)||kt(m))return z!==null?null:d(p,c,m,k,null);Pr(p,m)}return null}function g(p,c,m,k,z){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,l(c,p,""+k,z);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case mr:return p=p.get(k.key===null?m:k.key)||null,a(c,p,k,z);case bn:return p=p.get(k.key===null?m:k.key)||null,u(c,p,k,z);case ln:var E=k._init;return g(p,c,m,E(k._payload),z)}if(Tt(k)||kt(k))return p=p.get(m)||null,d(c,p,k,z,null);Pr(c,k)}return null}function v(p,c,m,k){for(var z=null,E=null,P=c,w=c=0,j=null;P!==null&&w<m.length;w++){P.index>w?(j=P,P=null):j=P.sibling;var C=f(p,P,m[w],k);if(C===null){P===null&&(P=j);break}e&&P&&C.alternate===null&&n(p,P),c=o(C,c,w),E===null?z=C:E.sibling=C,E=C,P=j}if(w===m.length)return t(p,P),$&&jn(p,w),z;if(P===null){for(;w<m.length;w++)P=h(p,m[w],k),P!==null&&(c=o(P,c,w),E===null?z=P:E.sibling=P,E=P);return $&&jn(p,w),z}for(P=r(p,P);w<m.length;w++)j=g(P,p,w,m[w],k),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?w:j.key),c=o(j,c,w),E===null?z=j:E.sibling=j,E=j);return e&&P.forEach(function(D){return n(p,D)}),$&&jn(p,w),z}function x(p,c,m,k){var z=kt(m);if(typeof z!="function")throw Error(S(150));if(m=z.call(m),m==null)throw Error(S(151));for(var E=z=null,P=c,w=c=0,j=null,C=m.next();P!==null&&!C.done;w++,C=m.next()){P.index>w?(j=P,P=null):j=P.sibling;var D=f(p,P,C.value,k);if(D===null){P===null&&(P=j);break}e&&P&&D.alternate===null&&n(p,P),c=o(D,c,w),E===null?z=D:E.sibling=D,E=D,P=j}if(C.done)return t(p,P),$&&jn(p,w),z;if(P===null){for(;!C.done;w++,C=m.next())C=h(p,C.value,k),C!==null&&(c=o(C,c,w),E===null?z=C:E.sibling=C,E=C);return $&&jn(p,w),z}for(P=r(p,P);!C.done;w++,C=m.next())C=g(P,p,w,C.value,k),C!==null&&(e&&C.alternate!==null&&P.delete(C.key===null?w:C.key),c=o(C,c,w),E===null?z=C:E.sibling=C,E=C);return e&&P.forEach(function(X){return n(p,X)}),$&&jn(p,w),z}function N(p,c,m,k){if(typeof m=="object"&&m!==null&&m.type===qn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case mr:e:{for(var z=m.key,E=c;E!==null;){if(E.key===z){if(z=m.type,z===qn){if(E.tag===7){t(p,E.sibling),c=i(E,m.props.children),c.return=p,p=c;break e}}else if(E.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ln&&Yl(z)===E.type){t(p,E.sibling),c=i(E,m.props),c.ref=Pt(p,E,m),c.return=p,p=c;break e}t(p,E);break}else n(p,E);E=E.sibling}m.type===qn?(c=On(m.props.children,p.mode,k,m.key),c.return=p,p=c):(k=Vr(m.type,m.key,m.props,null,p.mode,k),k.ref=Pt(p,c,m),k.return=p,p=k)}return s(p);case bn:e:{for(E=m.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){t(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{t(p,c);break}else n(p,c);c=c.sibling}c=oo(m,p.mode,k),c.return=p,p=c}return s(p);case ln:return E=m._init,N(p,c,E(m._payload),k)}if(Tt(m))return v(p,c,m,k);if(kt(m))return x(p,c,m,k);Pr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(t(p,c.sibling),c=i(c,m),c.return=p,p=c):(t(p,c),c=io(m,p.mode,k),c.return=p,p=c),s(p)):t(p,c)}return N}var ht=Hu(!0),Ku=Hu(!1),ii=Cn(null),oi=null,tt=null,Ds=null;function Ls(){Ds=tt=oi=null}function Fs(e){var n=ii.current;W(ii),e._currentValue=n}function Wo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ut(e,n){oi=e,Ds=tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(we=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:n,next:null},tt===null){if(oi===null)throw Error(S(308));tt=e,oi.dependencies={lanes:0,firstContext:e}}else tt=tt.next=e;return n}var Dn=null;function Os(e){Dn===null?Dn=[e]:Dn.push(e)}function Qu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Os(n)):(t.next=i.next,i.next=t),n.interleaved=t,tn(e,r)}function tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var an=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,tn(e,t)}return i=r.interleaved,i===null?(n.next=n,Os(r)):(n.next=i.next,i.next=n),r.interleaved=n,tn(e,t)}function Fr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Cs(e,t)}}function Xl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function si(e,n,t,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;s=0,d=u=a=null,l=o;do{var f=l.lane,g=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(f=n,g=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(g,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(g,h,f):v,f==null)break e;h=Q({},h,f);break e;case 2:an=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=h):d=d.next=g,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);$n|=s,e.lanes=s,e.memoizedState=h}}function Zl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var cr={},qe=Cn(cr),Jt=Cn(cr),er=Cn(cr);function Ln(e){if(e===cr)throw Error(S(174));return e}function Us(e,n){switch(B(er,n),B(Jt,e),B(qe,cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ko(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ko(n,e)}W(qe),B(qe,n)}function mt(){W(qe),W(Jt),W(er)}function qu(e){Ln(er.current);var n=Ln(qe.current),t=ko(n,e.type);n!==t&&(B(Jt,e),B(qe,t))}function Ws(e){Jt.current===e&&(W(qe),W(Jt))}var H=Cn(0);function li(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=[];function $s(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var Or=on.ReactCurrentDispatcher,Ji=on.ReactCurrentBatchConfig,Wn=0,K=null,ee=null,re=null,ai=!1,Ot=!1,nr=0,Yf=0;function ae(){throw Error(S(321))}function Vs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!$e(e[t],n[t]))return!1;return!0}function Hs(e,n,t,r,i,o){if(Wn=o,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Or.current=e===null||e.memoizedState===null?ep:np,e=t(r,i),Ot){o=0;do{if(Ot=!1,nr=0,25<=o)throw Error(S(301));o+=1,re=ee=null,n.updateQueue=null,Or.current=tp,e=t(r,i)}while(Ot)}if(Or.current=ui,n=ee!==null&&ee.next!==null,Wn=0,re=ee=K=null,ai=!1,n)throw Error(S(300));return e}function Ks(){var e=nr!==0;return nr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?K.memoizedState=re=e:re=re.next=e,re}function Ie(){if(ee===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=re===null?K.memoizedState:re.next;if(n!==null)re=n,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?K.memoizedState=re=e:re=re.next=e}return re}function tr(e,n){return typeof n=="function"?n(e):n}function eo(e){var n=Ie(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var d=u.lane;if((Wn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,s=r):a=a.next=h,K.lanes|=d,$n|=d}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,$e(r,n.memoizedState)||(we=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,$n|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function no(e){var n=Ie(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);$e(o,n.memoizedState)||(we=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Gu(){}function Yu(e,n){var t=K,r=Ie(),i=n(),o=!$e(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,Qs(Ju.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,rr(9,Zu.bind(null,t,r,i,n),void 0,null),ie===null)throw Error(S(349));Wn&30||Xu(t,n,i)}return i}function Xu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zu(e,n,t,r){n.value=t,n.getSnapshot=r,ec(n)&&nc(e)}function Ju(e,n,t){return t(function(){ec(n)&&nc(e)})}function ec(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!$e(e,t)}catch{return!0}}function nc(e){var n=tn(e,1);n!==null&&We(n,e,1,-1)}function Jl(e){var n=Ke();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},n.queue=e,e=e.dispatch=Jf.bind(null,K,e),[n.memoizedState,e]}function rr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function tc(){return Ie().memoizedState}function Br(e,n,t,r){var i=Ke();K.flags|=e,i.memoizedState=rr(1|n,t,void 0,r===void 0?null:r)}function Ci(e,n,t,r){var i=Ie();r=r===void 0?null:r;var o=void 0;if(ee!==null){var s=ee.memoizedState;if(o=s.destroy,r!==null&&Vs(r,s.deps)){i.memoizedState=rr(n,t,o,r);return}}K.flags|=e,i.memoizedState=rr(1|n,t,o,r)}function ea(e,n){return Br(8390656,8,e,n)}function Qs(e,n){return Ci(2048,8,e,n)}function rc(e,n){return Ci(4,2,e,n)}function ic(e,n){return Ci(4,4,e,n)}function oc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function sc(e,n,t){return t=t!=null?t.concat([e]):null,Ci(4,4,oc.bind(null,n,e),t)}function bs(){}function lc(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ac(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function uc(e,n,t){return Wn&21?($e(t,n)||(t=hu(),K.lanes|=t,$n|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=t)}function Xf(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),n()}finally{O=t,Ji.transition=r}}function cc(){return Ie().memoizedState}function Zf(e,n,t){var r=wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},dc(e))fc(n,t);else if(t=Qu(e,n,t,r),t!==null){var i=he();We(t,e,r,i),pc(t,n,r)}}function Jf(e,n,t){var r=wn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,t);if(i.hasEagerState=!0,i.eagerState=l,$e(l,s)){var a=n.interleaved;a===null?(i.next=i,Os(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Qu(e,n,i,r),t!==null&&(i=he(),We(t,e,r,i),pc(t,n,r))}}function dc(e){var n=e.alternate;return e===K||n!==null&&n===K}function fc(e,n){Ot=ai=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function pc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Cs(e,t)}}var ui={readContext:Me,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},ep={readContext:Me,useCallback:function(e,n){return Ke().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:ea,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Br(4194308,4,oc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Br(4194308,4,e,n)},useInsertionEffect:function(e,n){return Br(4,2,e,n)},useMemo:function(e,n){var t=Ke();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ke();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Zf.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var n=Ke();return e={current:e},n.memoizedState=e},useState:Jl,useDebugValue:bs,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Jl(!1),n=e[0];return e=Xf.bind(null,e[1]),Ke().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=K,i=Ke();if($){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),ie===null)throw Error(S(349));Wn&30||Xu(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,ea(Ju.bind(null,r,o,e),[e]),r.flags|=2048,rr(9,Zu.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ke(),n=ie.identifierPrefix;if($){var t=Ze,r=Xe;t=(r&~(1<<32-Ue(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=nr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Yf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},np={readContext:Me,useCallback:lc,useContext:Me,useEffect:Qs,useImperativeHandle:sc,useInsertionEffect:rc,useLayoutEffect:ic,useMemo:ac,useReducer:eo,useRef:tc,useState:function(){return eo(tr)},useDebugValue:bs,useDeferredValue:function(e){var n=Ie();return uc(n,ee.memoizedState,e)},useTransition:function(){var e=eo(tr)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:Gu,useSyncExternalStore:Yu,useId:cc,unstable_isNewReconciler:!1},tp={readContext:Me,useCallback:lc,useContext:Me,useEffect:Qs,useImperativeHandle:sc,useInsertionEffect:rc,useLayoutEffect:ic,useMemo:ac,useReducer:no,useRef:tc,useState:function(){return no(tr)},useDebugValue:bs,useDeferredValue:function(e){var n=Ie();return ee===null?n.memoizedState=e:uc(n,ee.memoizedState,e)},useTransition:function(){var e=no(tr)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:Gu,useSyncExternalStore:Yu,useId:cc,unstable_isNewReconciler:!1};function Fe(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function $o(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),i=wn(e),o=Je(r,i);o.payload=n,t!=null&&(o.callback=t),n=yn(e,o,i),n!==null&&(We(n,e,i,r),Fr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),i=wn(e),o=Je(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=yn(e,o,i),n!==null&&(We(n,e,i,r),Fr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=wn(e),i=Je(t,r);i.tag=2,n!=null&&(i.callback=n),n=yn(e,i,r),n!==null&&(We(n,e,r,t),Fr(n,e,r))}};function na(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!Gt(t,r)||!Gt(i,o):!0}function hc(e,n,t){var r=!1,i=Sn,o=n.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=ke(n)?Bn:de.current,r=n.contextTypes,o=(r=r!=null)?ft(e,i):Sn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ei,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function ta(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ei.enqueueReplaceState(n,n.state,null)}function Vo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Bs(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=ke(n)?Bn:de.current,i.context=ft(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&($o(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ei.enqueueReplaceState(i,i.state,null),si(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gt(e,n){try{var t="",r=n;do t+=Nd(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function to(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ho(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var rp=typeof WeakMap=="function"?WeakMap:Map;function mc(e,n,t){t=Je(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){di||(di=!0,es=r),Ho(e,n)},t}function gc(e,n,t){t=Je(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ho(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Ho(e,n),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function ra(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new rp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=yp.bind(null,e,n,t),n.then(e,e))}function ia(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function oa(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Je(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var ip=on.ReactCurrentOwner,we=!1;function fe(e,n,t,r){n.child=e===null?Ku(n,null,t,r):ht(n,e.child,t,r)}function sa(e,n,t,r,i){t=t.render;var o=n.ref;return ut(n,i),r=Hs(e,n,t,r,o,i),t=Ks(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):($&&t&&Rs(n),n.flags|=1,fe(e,n,r,i),n.child)}function la(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!nl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,yc(e,n,o,r,i)):(e=Vr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(s,r)&&e.ref===n.ref)return rn(e,n,i)}return n.flags|=1,e=xn(o,r),e.ref=n.ref,e.return=n,n.child=e}function yc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Gt(o,r)&&e.ref===n.ref)if(we=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return n.lanes=e.lanes,rn(e,n,i)}return Ko(e,n,t,r,i)}function vc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(it,ze),ze|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(it,ze),ze|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,B(it,ze),ze|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,B(it,ze),ze|=r;return fe(e,n,i,t),n.child}function wc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ko(e,n,t,r,i){var o=ke(t)?Bn:de.current;return o=ft(n,o),ut(n,i),t=Hs(e,n,t,r,o,i),r=Ks(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rn(e,n,i)):($&&r&&Rs(n),n.flags|=1,fe(e,n,t,i),n.child)}function aa(e,n,t,r,i){if(ke(t)){var o=!0;ni(n)}else o=!1;if(ut(n,i),n.stateNode===null)Ur(e,n),hc(n,t,r),Vo(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var a=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=ke(t)?Bn:de.current,u=ft(n,u));var d=t.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ta(n,s,r,u),an=!1;var f=n.memoizedState;s.state=f,si(n,r,s,i),a=n.memoizedState,l!==r||f!==a||xe.current||an?(typeof d=="function"&&($o(n,t,d,r),a=n.memoizedState),(l=an||na(n,t,l,r,f,a,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,bu(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Fe(n.type,l),s.props=u,h=n.pendingProps,f=s.context,a=t.contextType,typeof a=="object"&&a!==null?a=Me(a):(a=ke(t)?Bn:de.current,a=ft(n,a));var g=t.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||f!==a)&&ta(n,s,r,a),an=!1,f=n.memoizedState,s.state=f,si(n,r,s,i);var v=n.memoizedState;l!==h||f!==v||xe.current||an?(typeof g=="function"&&($o(n,t,g,r),v=n.memoizedState),(u=an||na(n,t,u,r,f,v,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),s.props=r,s.state=v,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Qo(e,n,t,r,o,i)}function Qo(e,n,t,r,i,o){wc(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&bl(n,t,!1),rn(e,n,o);r=n.stateNode,ip.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=ht(n,e.child,null,o),n.child=ht(n,null,l,o)):fe(e,n,l,o),n.memoizedState=r.state,i&&bl(n,t,!0),n.child}function xc(e){var n=e.stateNode;n.pendingContext?Ql(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ql(e,n.context,!1),Us(e,n.containerInfo)}function ua(e,n,t,r,i){return pt(),Is(i),n.flags|=256,fe(e,n,t,r),n.child}var bo={dehydrated:null,treeContext:null,retryLane:0};function qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function kc(e,n,t){var r=n.pendingProps,i=H.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(H,i&1),e===null)return Uo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ai(s,r,0,null),e=On(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=qo(t),n.memoizedState=bo,e):qs(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return op(e,n,s,r,l,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=xn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=xn(l,o):(o=On(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?qo(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=bo,r}return o=e.child,e=o.sibling,r=xn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function qs(e,n){return n=Ai({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _r(e,n,t,r){return r!==null&&Is(r),ht(n,e.child,null,t),e=qs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function op(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=to(Error(S(422))),_r(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Ai({mode:"visible",children:r.children},i,0,null),o=On(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&ht(n,e.child,null,s),n.child.memoizedState=qo(s),n.memoizedState=bo,o);if(!(n.mode&1))return _r(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(S(419)),r=to(o,r,void 0),_r(e,n,s,r)}if(l=(s&e.childLanes)!==0,we||l){if(r=ie,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),We(r,e,i,-1))}return el(),r=to(Error(S(421))),_r(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=vp.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ce=gn(i.nextSibling),Ee=n,$=!0,Be=null,e!==null&&(Ne[Te++]=Xe,Ne[Te++]=Ze,Ne[Te++]=Un,Xe=e.id,Ze=e.overflow,Un=n),n=qs(n,r.children),n.flags|=4096,n)}function ca(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Wo(e.return,n,t)}function ro(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Sc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,n,r.children,t),r=H.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ca(e,t,n);else if(e.tag===19)ca(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(H,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&li(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ro(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ro(n,!0,t,null,o);break;case"together":ro(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ur(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),$n|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=xn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=xn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sp(e,n,t){switch(n.tag){case 3:xc(n),pt();break;case 5:qu(n);break;case 1:ke(n.type)&&ni(n);break;case 4:Us(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;B(ii,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(B(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?kc(e,n,t):(B(H,H.current&1),e=rn(e,n,t),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Sc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(H,H.current),r)break;return null;case 22:case 23:return n.lanes=0,vc(e,n,t)}return rn(e,n,t)}var zc,Go,Cc,Ec;zc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Go=function(){};Cc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Ln(qe.current);var o=null;switch(t){case"input":i=yo(e,i),r=yo(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=xo(e,i),r=xo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}So(t,r);var s;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($t.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(t||(t={}),t[s]=a[s])}else t||(o||(o=[]),o.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($t.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&U("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Ec=function(e,n,t,r){t!==r&&(n.flags|=4)};function _t(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function lp(e,n,t){var r=n.pendingProps;switch(Ms(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(n),null;case 1:return ke(n.type)&&ei(),ue(n),null;case 3:return r=n.stateNode,mt(),W(xe),W(de),$s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(rs(Be),Be=null))),Go(e,n),ue(n),null;case 5:Ws(n);var i=Ln(er.current);if(t=n.type,e!==null&&n.stateNode!=null)Cc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ue(n),null}if(e=Ln(qe.current),Er(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Qe]=n,r[Zt]=o,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Rt.length;i++)U(Rt[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":wl(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":kl(r,o),U("invalid",r)}So(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,l,e),i=["children",""+l]):$t.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&U("scroll",r)}switch(t){case"input":gr(r),xl(r,o,!0);break;case"textarea":gr(r),Sl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ja(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[Qe]=n,e[Zt]=r,zc(e,n,!1,!1),n.stateNode=e;e:{switch(s=zo(t,r),t){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rt.length;i++)U(Rt[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":wl(e,r),i=yo(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),U("invalid",e);break;case"textarea":kl(e,r),i=xo(e,r),U("invalid",e);break;default:i=r}So(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?tu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&eu(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Vt(e,a):typeof a=="number"&&Vt(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($t.hasOwnProperty(o)?a!=null&&o==="onScroll"&&U("scroll",e):a!=null&&vs(e,o,a,s))}switch(t){case"input":gr(e),xl(e,r,!1);break;case"textarea":gr(e),Sl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ot(e,!!r.multiple,o,!1):r.defaultValue!=null&&ot(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ue(n),null;case 6:if(e&&n.stateNode!=null)Ec(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Ln(er.current),Ln(qe.current),Er(n)){if(r=n.stateNode,t=n.memoizedProps,r[Qe]=n,(o=r.nodeValue!==t)&&(e=Ee,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Qe]=n,n.stateNode=r}return ue(n),null;case 13:if(W(H),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Ce!==null&&n.mode&1&&!(n.flags&128))Vu(),pt(),n.flags|=98560,o=!1;else if(o=Er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Qe]=n}else pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ue(n),o=!1}else Be!==null&&(rs(Be),Be=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?ne===0&&(ne=3):el())),n.updateQueue!==null&&(n.flags|=4),ue(n),null);case 4:return mt(),Go(e,n),e===null&&Yt(n.stateNode.containerInfo),ue(n),null;case 10:return Fs(n.type._context),ue(n),null;case 17:return ke(n.type)&&ei(),ue(n),null;case 19:if(W(H),o=n.memoizedState,o===null)return ue(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)_t(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=li(e),s!==null){for(n.flags|=128,_t(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(H,H.current&1|2),n.child}e=e.sibling}o.tail!==null&&Y()>yt&&(n.flags|=128,r=!0,_t(o,!1),n.lanes=4194304)}else{if(!r)if(e=li(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),_t(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return ue(n),null}else 2*Y()-o.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,r=!0,_t(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Y(),n.sibling=null,t=H.current,B(H,r?t&1|2:t&1),n):(ue(n),null);case 22:case 23:return Js(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ze&1073741824&&(ue(n),n.subtreeFlags&6&&(n.flags|=8192)):ue(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function ap(e,n){switch(Ms(n),n.tag){case 1:return ke(n.type)&&ei(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mt(),W(xe),W(de),$s(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ws(n),null;case 13:if(W(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(H),null;case 4:return mt(),null;case 10:return Fs(n.type._context),null;case 22:case 23:return Js(),null;case 24:return null;default:return null}}var Ar=!1,ce=!1,up=typeof WeakSet=="function"?WeakSet:Set,A=null;function rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){b(e,n,r)}else t.current=null}function Yo(e,n,t){try{t()}catch(r){b(e,n,r)}}var da=!1;function cp(e,n){if(Mo=Yr,e=Tu(),js(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,l=-1,a=-1,u=0,d=0,h=e,f=null;n:for(;;){for(var g;h!==t||i!==0&&h.nodeType!==3||(l=s+i),h!==o||r!==0&&h.nodeType!==3||(a=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===e)break n;if(f===t&&++u===i&&(l=s),f===o&&++d===r&&(a=s),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}t=l===-1||a===-1?null:{start:l,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Io={focusedElem:e,selectionRange:t},Yr=!1,A=n;A!==null;)if(n=A,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,A=e;else for(;A!==null;){n=A;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,N=v.memoizedState,p=n.stateNode,c=p.getSnapshotBeforeUpdate(n.elementType===n.type?x:Fe(n.type,x),N);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(k){b(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,A=e;break}A=n.return}return v=da,da=!1,v}function Bt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Yo(n,t,o)}i=i.next}while(i!==r)}}function Pi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Xo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pc(e){var n=e.alternate;n!==null&&(e.alternate=null,Pc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[Zt],delete n[Fo],delete n[Qf],delete n[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function fa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Zo(e,n,t),e=e.sibling;e!==null;)Zo(e,n,t),e=e.sibling}function Jo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jo(e,n,t),e=e.sibling;e!==null;)Jo(e,n,t),e=e.sibling}var oe=null,Oe=!1;function sn(e,n,t){for(t=t.child;t!==null;)Ac(e,n,t),t=t.sibling}function Ac(e,n,t){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(vi,t)}catch{}switch(t.tag){case 5:ce||rt(t,n);case 6:var r=oe,i=Oe;oe=null,sn(e,n,t),oe=r,Oe=i,oe!==null&&(Oe?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(Oe?(e=oe,t=t.stateNode,e.nodeType===8?Yi(e.parentNode,t):e.nodeType===1&&Yi(e,t),bt(e)):Yi(oe,t.stateNode));break;case 4:r=oe,i=Oe,oe=t.stateNode.containerInfo,Oe=!0,sn(e,n,t),oe=r,Oe=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Yo(t,n,s),i=i.next}while(i!==r)}sn(e,n,t);break;case 1:if(!ce&&(rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){b(t,n,l)}sn(e,n,t);break;case 21:sn(e,n,t);break;case 22:t.mode&1?(ce=(r=ce)||t.memoizedState!==null,sn(e,n,t),ce=r):sn(e,n,t);break;default:sn(e,n,t)}}function pa(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new up),n.forEach(function(r){var i=wp.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Le(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,Oe=!1;break e;case 3:oe=l.stateNode.containerInfo,Oe=!0;break e;case 4:oe=l.stateNode.containerInfo,Oe=!0;break e}l=l.return}if(oe===null)throw Error(S(160));Ac(o,s,i),oe=null,Oe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){b(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Nc(n,e),n=n.sibling}function Nc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(n,e),He(e),r&4){try{Bt(3,e,e.return),Pi(3,e)}catch(x){b(e,e.return,x)}try{Bt(5,e,e.return)}catch(x){b(e,e.return,x)}}break;case 1:Le(n,e),He(e),r&512&&t!==null&&rt(t,t.return);break;case 5:if(Le(n,e),He(e),r&512&&t!==null&&rt(t,t.return),e.flags&32){var i=e.stateNode;try{Vt(i,"")}catch(x){b(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Xa(i,o),zo(l,s);var u=zo(l,o);for(s=0;s<a.length;s+=2){var d=a[s],h=a[s+1];d==="style"?tu(i,h):d==="dangerouslySetInnerHTML"?eu(i,h):d==="children"?Vt(i,h):vs(i,d,h,u)}switch(l){case"input":vo(i,o);break;case"textarea":Za(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?ot(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?ot(i,!!o.multiple,o.defaultValue,!0):ot(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zt]=o}catch(x){b(e,e.return,x)}}break;case 6:if(Le(n,e),He(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){b(e,e.return,x)}}break;case 3:if(Le(n,e),He(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{bt(n.containerInfo)}catch(x){b(e,e.return,x)}break;case 4:Le(n,e),He(e);break;case 13:Le(n,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xs=Y())),r&4&&pa(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ce=(u=ce)||d,Le(n,e),ce=u):Le(n,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(A=e,d=e.child;d!==null;){for(h=A=d;A!==null;){switch(f=A,g=f.child,f.tag){case 0:case 11:case 14:case 15:Bt(4,f,f.return);break;case 1:rt(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(x){b(r,t,x)}}break;case 5:rt(f,f.return);break;case 22:if(f.memoizedState!==null){ma(h);continue}}g!==null?(g.return=f,A=g):ma(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,a=h.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=nu("display",s))}catch(x){b(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){b(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Le(n,e),He(e),r&4&&pa(e);break;case 21:break;default:Le(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(_c(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vt(i,""),r.flags&=-33);var o=fa(e);Jo(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=fa(e);Zo(e,l,s);break;default:throw Error(S(161))}}catch(a){b(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function dp(e,n,t){A=e,Tc(e)}function Tc(e,n,t){for(var r=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ar;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ce;l=Ar;var u=ce;if(Ar=s,(ce=a)&&!u)for(A=i;A!==null;)s=A,a=s.child,s.tag===22&&s.memoizedState!==null?ga(i):a!==null?(a.return=s,A=a):ga(i);for(;o!==null;)A=o,Tc(o),o=o.sibling;A=i,Ar=l,ce=u}ha(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):ha(e)}}function ha(e){for(;A!==null;){var n=A;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ce||Pi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ce)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Fe(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Zl(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Zl(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&bt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ce||n.flags&512&&Xo(n)}catch(f){b(n,n.return,f)}}if(n===e){A=null;break}if(t=n.sibling,t!==null){t.return=n.return,A=t;break}A=n.return}}function ma(e){for(;A!==null;){var n=A;if(n===e){A=null;break}var t=n.sibling;if(t!==null){t.return=n.return,A=t;break}A=n.return}}function ga(e){for(;A!==null;){var n=A;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Pi(4,n)}catch(a){b(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){b(n,i,a)}}var o=n.return;try{Xo(n)}catch(a){b(n,o,a)}break;case 5:var s=n.return;try{Xo(n)}catch(a){b(n,s,a)}}}catch(a){b(n,n.return,a)}if(n===e){A=null;break}var l=n.sibling;if(l!==null){l.return=n.return,A=l;break}A=n.return}}var fp=Math.ceil,ci=on.ReactCurrentDispatcher,Gs=on.ReactCurrentOwner,Re=on.ReactCurrentBatchConfig,F=0,ie=null,J=null,se=0,ze=0,it=Cn(0),ne=0,ir=null,$n=0,_i=0,Ys=0,Ut=null,ye=null,Xs=0,yt=1/0,Ge=null,di=!1,es=null,vn=null,Nr=!1,fn=null,fi=0,Wt=0,ns=null,Wr=-1,$r=0;function he(){return F&6?Y():Wr!==-1?Wr:Wr=Y()}function wn(e){return e.mode&1?F&2&&se!==0?se&-se:Gf.transition!==null?($r===0&&($r=hu()),$r):(e=O,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e):1}function We(e,n,t,r){if(50<Wt)throw Wt=0,ns=null,Error(S(185));lr(e,t,r),(!(F&2)||e!==ie)&&(e===ie&&(!(F&2)&&(_i|=t),ne===4&&cn(e,se)),Se(e,r),t===1&&F===0&&!(n.mode&1)&&(yt=Y()+500,zi&&En()))}function Se(e,n){var t=e.callbackNode;qd(e,n);var r=Gr(e,e===ie?se:0);if(r===0)t!==null&&El(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&El(t),n===1)e.tag===0?qf(ya.bind(null,e)):Uu(ya.bind(null,e)),Hf(function(){!(F&6)&&En()}),t=null;else{switch(mu(r)){case 1:t=zs;break;case 4:t=fu;break;case 16:t=qr;break;case 536870912:t=pu;break;default:t=qr}t=Oc(t,jc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function jc(e,n){if(Wr=-1,$r=0,F&6)throw Error(S(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var r=Gr(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=pi(e,r);else{n=r;var i=F;F|=2;var o=Mc();(ie!==e||se!==n)&&(Ge=null,yt=Y()+500,Fn(e,n));do try{mp();break}catch(l){Rc(e,l)}while(!0);Ls(),ci.current=o,F=i,J!==null?n=0:(ie=null,se=0,n=ne)}if(n!==0){if(n===2&&(i=Ao(e),i!==0&&(r=i,n=ts(e,i))),n===1)throw t=ir,Fn(e,0),cn(e,r),Se(e,Y()),t;if(n===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!pp(i)&&(n=pi(e,r),n===2&&(o=Ao(e),o!==0&&(r=o,n=ts(e,o))),n===1))throw t=ir,Fn(e,0),cn(e,r),Se(e,Y()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:Rn(e,ye,Ge);break;case 3:if(cn(e,r),(r&130023424)===r&&(n=Xs+500-Y(),10<n)){if(Gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Lo(Rn.bind(null,e,ye,Ge),n);break}Rn(e,ye,Ge);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-Ue(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fp(r/1960))-r,10<r){e.timeoutHandle=Lo(Rn.bind(null,e,ye,Ge),r);break}Rn(e,ye,Ge);break;case 5:Rn(e,ye,Ge);break;default:throw Error(S(329))}}}return Se(e,Y()),e.callbackNode===t?jc.bind(null,e):null}function ts(e,n){var t=Ut;return e.current.memoizedState.isDehydrated&&(Fn(e,n).flags|=256),e=pi(e,n),e!==2&&(n=ye,ye=t,n!==null&&rs(n)),e}function rs(e){ye===null?ye=e:ye.push.apply(ye,e)}function pp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!$e(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cn(e,n){for(n&=~Ys,n&=~_i,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ue(n),r=1<<t;e[t]=-1,n&=~r}}function ya(e){if(F&6)throw Error(S(327));ct();var n=Gr(e,0);if(!(n&1))return Se(e,Y()),null;var t=pi(e,n);if(e.tag!==0&&t===2){var r=Ao(e);r!==0&&(n=r,t=ts(e,r))}if(t===1)throw t=ir,Fn(e,0),cn(e,n),Se(e,Y()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rn(e,ye,Ge),Se(e,Y()),null}function Zs(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(yt=Y()+500,zi&&En())}}function Vn(e){fn!==null&&fn.tag===0&&!(F&6)&&ct();var n=F;F|=1;var t=Re.transition,r=O;try{if(Re.transition=null,O=1,e)return e()}finally{O=r,Re.transition=t,F=n,!(F&6)&&En()}}function Js(){ze=it.current,W(it)}function Fn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Vf(t)),J!==null)for(t=J.return;t!==null;){var r=t;switch(Ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:mt(),W(xe),W(de),$s();break;case 5:Ws(r);break;case 4:mt();break;case 13:W(H);break;case 19:W(H);break;case 10:Fs(r.type._context);break;case 22:case 23:Js()}t=t.return}if(ie=e,J=e=xn(e.current,null),se=ze=n,ne=0,ir=null,Ys=_i=$n=0,ye=Ut=null,Dn!==null){for(n=0;n<Dn.length;n++)if(t=Dn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}Dn=null}return e}function Rc(e,n){do{var t=J;try{if(Ls(),Or.current=ui,ai){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ai=!1}if(Wn=0,re=ee=K=null,Ot=!1,nr=0,Gs.current=null,t===null||t.return===null){ne=1,ir=n,J=null;break}e:{var o=e,s=t.return,l=t,a=n;if(n=se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=ia(s);if(g!==null){g.flags&=-257,oa(g,s,l,o,n),g.mode&1&&ra(o,u,n),n=g,a=u;var v=n.updateQueue;if(v===null){var x=new Set;x.add(a),n.updateQueue=x}else v.add(a);break e}else{if(!(n&1)){ra(o,u,n),el();break e}a=Error(S(426))}}else if($&&l.mode&1){var N=ia(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),oa(N,s,l,o,n),Is(gt(a,l));break e}}o=a=gt(a,l),ne!==4&&(ne=2),Ut===null?Ut=[o]:Ut.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var p=mc(o,a,n);Xl(o,p);break e;case 1:l=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(vn===null||!vn.has(m)))){o.flags|=65536,n&=-n,o.lanes|=n;var k=gc(o,l,n);Xl(o,k);break e}}o=o.return}while(o!==null)}Dc(t)}catch(z){n=z,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function Mc(){var e=ci.current;return ci.current=ui,e===null?ui:e}function el(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||!($n&268435455)&&!(_i&268435455)||cn(ie,se)}function pi(e,n){var t=F;F|=2;var r=Mc();(ie!==e||se!==n)&&(Ge=null,Fn(e,n));do try{hp();break}catch(i){Rc(e,i)}while(!0);if(Ls(),F=t,ci.current=r,J!==null)throw Error(S(261));return ie=null,se=0,ne}function hp(){for(;J!==null;)Ic(J)}function mp(){for(;J!==null&&!Bd();)Ic(J)}function Ic(e){var n=Fc(e.alternate,e,ze);e.memoizedProps=e.pendingProps,n===null?Dc(e):J=n,Gs.current=null}function Dc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ap(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,J=null;return}}else if(t=lp(t,n,ze),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);ne===0&&(ne=5)}function Rn(e,n,t){var r=O,i=Re.transition;try{Re.transition=null,O=1,gp(e,n,t,r)}finally{Re.transition=i,O=r}return null}function gp(e,n,t,r){do ct();while(fn!==null);if(F&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Gd(e,o),e===ie&&(J=ie=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Nr||(Nr=!0,Oc(qr,function(){return ct(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var s=O;O=1;var l=F;F|=4,Gs.current=null,cp(e,t),Nc(t,e),Lf(Io),Yr=!!Mo,Io=Mo=null,e.current=t,dp(t),Ud(),F=l,O=s,Re.transition=o}else e.current=t;if(Nr&&(Nr=!1,fn=e,fi=i),o=e.pendingLanes,o===0&&(vn=null),Vd(t.stateNode),Se(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(di)throw di=!1,e=es,es=null,e;return fi&1&&e.tag!==0&&ct(),o=e.pendingLanes,o&1?e===ns?Wt++:(Wt=0,ns=e):Wt=0,En(),null}function ct(){if(fn!==null){var e=mu(fi),n=Re.transition,t=O;try{if(Re.transition=null,O=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,fi=0,F&6)throw Error(S(331));var i=F;for(F|=4,A=e.current;A!==null;){var o=A,s=o.child;if(A.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Bt(8,d,o)}var h=d.child;if(h!==null)h.return=d,A=h;else for(;A!==null;){d=A;var f=d.sibling,g=d.return;if(Pc(d),d===u){A=null;break}if(f!==null){f.return=g,A=f;break}A=g}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}A=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bt(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,A=p;break e}A=o.return}}var c=e.current;for(A=c;A!==null;){s=A;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,A=m;else e:for(s=c;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pi(9,l)}}catch(z){b(l,l.return,z)}if(l===s){A=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,A=k;break e}A=l.return}}if(F=i,En(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{O=t,Re.transition=n}}return!1}function va(e,n,t){n=gt(t,n),n=mc(e,n,1),e=yn(e,n,1),n=he(),e!==null&&(lr(e,1,n),Se(e,n))}function b(e,n,t){if(e.tag===3)va(e,e,t);else for(;n!==null;){if(n.tag===3){va(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=gt(t,e),e=gc(n,e,1),n=yn(n,e,1),e=he(),n!==null&&(lr(n,1,e),Se(n,e));break}}n=n.return}}function yp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(se&t)===t&&(ne===4||ne===3&&(se&130023424)===se&&500>Y()-Xs?Fn(e,0):Ys|=t),Se(e,n)}function Lc(e,n){n===0&&(e.mode&1?(n=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):n=1);var t=he();e=tn(e,n),e!==null&&(lr(e,n,t),Se(e,t))}function vp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Lc(e,t)}function wp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Lc(e,t)}var Fc;Fc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)we=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return we=!1,sp(e,n,t);we=!!(e.flags&131072)}else we=!1,$&&n.flags&1048576&&Wu(n,ri,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ur(e,n),e=n.pendingProps;var i=ft(n,de.current);ut(n,t),i=Hs(null,n,r,e,i,t);var o=Ks();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ke(r)?(o=!0,ni(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bs(n),i.updater=Ei,n.stateNode=i,i._reactInternals=n,Vo(n,r,e,t),n=Qo(null,n,r,!0,o,t)):(n.tag=0,$&&o&&Rs(n),fe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ur(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=kp(r),e=Fe(r,e),i){case 0:n=Ko(null,n,r,e,t);break e;case 1:n=aa(null,n,r,e,t);break e;case 11:n=sa(null,n,r,e,t);break e;case 14:n=la(null,n,r,Fe(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fe(r,i),Ko(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fe(r,i),aa(e,n,r,i,t);case 3:e:{if(xc(n),e===null)throw Error(S(387));r=n.pendingProps,o=n.memoizedState,i=o.element,bu(e,n),si(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=gt(Error(S(423)),n),n=ua(e,n,r,t,i);break e}else if(r!==i){i=gt(Error(S(424)),n),n=ua(e,n,r,t,i);break e}else for(Ce=gn(n.stateNode.containerInfo.firstChild),Ee=n,$=!0,Be=null,t=Ku(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pt(),r===i){n=rn(e,n,t);break e}fe(e,n,r,t)}n=n.child}return n;case 5:return qu(n),e===null&&Uo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Do(r,i)?s=null:o!==null&&Do(r,o)&&(n.flags|=32),wc(e,n),fe(e,n,s,t),n.child;case 6:return e===null&&Uo(n),null;case 13:return kc(e,n,t);case 4:return Us(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ht(n,null,r,t):fe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fe(r,i),sa(e,n,r,i,t);case 7:return fe(e,n,n.pendingProps,t),n.child;case 8:return fe(e,n,n.pendingProps.children,t),n.child;case 12:return fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,B(ii,r._currentValue),r._currentValue=s,o!==null)if($e(o.value,s)){if(o.children===i.children&&!xe.current){n=rn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Je(-1,t&-t),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Wo(o.return,t,n),l.lanes|=t;break}a=a.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Wo(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}fe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ut(n,t),i=Me(i),r=r(i),n.flags|=1,fe(e,n,r,t),n.child;case 14:return r=n.type,i=Fe(r,n.pendingProps),i=Fe(r.type,i),la(e,n,r,i,t);case 15:return yc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fe(r,i),Ur(e,n),n.tag=1,ke(r)?(e=!0,ni(n)):e=!1,ut(n,t),hc(n,r,i),Vo(n,r,i,t),Qo(null,n,r,!0,e,t);case 19:return Sc(e,n,t);case 22:return vc(e,n,t)}throw Error(S(156,n.tag))};function Oc(e,n){return du(e,n)}function xp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,n,t,r){return new xp(e,n,t,r)}function nl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return nl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xs)return 11;if(e===ks)return 14}return 2}function xn(e,n){var t=e.alternate;return t===null?(t=je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Vr(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")nl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case qn:return On(t.children,i,o,n);case ws:s=8,i|=8;break;case po:return e=je(12,t,n,i|2),e.elementType=po,e.lanes=o,e;case ho:return e=je(13,t,n,i),e.elementType=ho,e.lanes=o,e;case mo:return e=je(19,t,n,i),e.elementType=mo,e.lanes=o,e;case qa:return Ai(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qa:s=10;break e;case ba:s=9;break e;case xs:s=11;break e;case ks:s=14;break e;case ln:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=je(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function On(e,n,t,r){return e=je(7,e,r,n),e.lanes=t,e}function Ai(e,n,t,r){return e=je(22,e,r,n),e.elementType=qa,e.lanes=t,e.stateNode={isHidden:!1},e}function io(e,n,t){return e=je(6,e,null,n),e.lanes=t,e}function oo(e,n,t){return n=je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Sp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tl(e,n,t,r,i,o,s,l,a){return e=new Sp(e,n,t,l,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=je(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(o),e}function zp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Bc(e){if(!e)return Sn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(ke(t))return Bu(e,t,n)}return n}function Uc(e,n,t,r,i,o,s,l,a){return e=tl(t,r,!0,e,i,o,s,l,a),e.context=Bc(null),t=e.current,r=he(),i=wn(t),o=Je(r,i),o.callback=n??null,yn(t,o,i),e.current.lanes=i,lr(e,i,r),Se(e,r),e}function Ni(e,n,t,r){var i=n.current,o=he(),s=wn(i);return t=Bc(t),n.context===null?n.context=t:n.pendingContext=t,n=Je(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=yn(i,n,s),e!==null&&(We(e,i,s,o),Fr(e,i,s)),s}function hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wa(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function rl(e,n){wa(e,n),(e=e.alternate)&&wa(e,n)}function Cp(){return null}var Wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function il(e){this._internalRoot=e}Ti.prototype.render=il.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Ni(e,n,null,null)};Ti.prototype.unmount=il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vn(function(){Ni(null,e,null,null)}),n[nn]=null}};function Ti(e){this._internalRoot=e}Ti.prototype.unstable_scheduleHydration=function(e){if(e){var n=vu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<un.length&&n!==0&&n<un[t].priority;t++);un.splice(t,0,e),t===0&&xu(e)}};function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xa(){}function Ep(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=hi(s);o.call(u)}}var s=Uc(n,r,e,0,null,!1,!1,"",xa);return e._reactRootContainer=s,e[nn]=s.current,Yt(e.nodeType===8?e.parentNode:e),Vn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=hi(a);l.call(u)}}var a=tl(e,0,!1,null,null,!1,!1,"",xa);return e._reactRootContainer=a,e[nn]=a.current,Yt(e.nodeType===8?e.parentNode:e),Vn(function(){Ni(n,a,t,r)}),a}function Ri(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=hi(s);l.call(a)}}Ni(n,s,e,i)}else s=Ep(t,n,e,i,r);return hi(s)}gu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=jt(n.pendingLanes);t!==0&&(Cs(n,t|1),Se(n,Y()),!(F&6)&&(yt=Y()+500,En()))}break;case 13:Vn(function(){var r=tn(e,1);if(r!==null){var i=he();We(r,e,1,i)}}),rl(e,1)}};Es=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var t=he();We(n,e,134217728,t)}rl(e,134217728)}};yu=function(e){if(e.tag===13){var n=wn(e),t=tn(e,n);if(t!==null){var r=he();We(t,e,n,r)}rl(e,n)}};vu=function(){return O};wu=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};Eo=function(e,n,t){switch(n){case"input":if(vo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Si(r);if(!i)throw Error(S(90));Ya(r),vo(r,i)}}}break;case"textarea":Za(e,t);break;case"select":n=t.value,n!=null&&ot(e,!!t.multiple,n,!1)}};ou=Zs;su=Vn;var Pp={usingClientEntryPoint:!1,Events:[ur,Zn,Si,ru,iu,Zs]},At={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_p={bundleType:At.bundleType,version:At.version,rendererPackageName:At.rendererPackageName,rendererConfig:At.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:At.findFiberByHostInstance||Cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{vi=Tr.inject(_p),be=Tr}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;_e.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ol(n))throw Error(S(200));return zp(e,n,null,t)};_e.createRoot=function(e,n){if(!ol(e))throw Error(S(299));var t=!1,r="",i=Wc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=tl(e,1,!1,null,null,t,!1,r,i),e[nn]=n.current,Yt(e.nodeType===8?e.parentNode:e),new il(n)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=uu(n),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Vn(e)};_e.hydrate=function(e,n,t){if(!ji(n))throw Error(S(200));return Ri(null,e,n,!0,t)};_e.hydrateRoot=function(e,n,t){if(!ol(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=Wc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Uc(n,null,e,1,t??null,i,!1,o,s),e[nn]=n.current,Yt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ti(n)};_e.render=function(e,n,t){if(!ji(n))throw Error(S(200));return Ri(null,e,n,!1,t)};_e.unmountComponentAtNode=function(e){if(!ji(e))throw Error(S(40));return e._reactRootContainer?(Vn(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};_e.unstable_batchedUpdates=Zs;_e.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ji(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ri(e,n,t,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function $c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($c)}catch(e){console.error(e)}}$c(),$a.exports=_e;var Ap=$a.exports,ka=Ap;co.createRoot=ka.createRoot,co.hydrateRoot=ka.hydrateRoot;function Pn(e){return Array.isArray?Array.isArray(e):Hc(e)==="[object Array]"}function Np(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function is(e){return e==null?"":Np(e)}function pe(e){return typeof e=="string"}function Hr(e){return typeof e=="number"}function Tp(e){return e===!0||e===!1||jp(e)&&Hc(e)=="[object Boolean]"}function Vc(e){return typeof e=="object"}function jp(e){return Vc(e)&&e!==null}function ve(e){return e!=null}function jr(e){return!e.trim().length}function Hc(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Rp="Incorrect 'index' type",Mp=e=>`Invalid value for key ${e}`,Ip=e=>`Pattern length exceeds max of ${e}.`,Dp=e=>`Missing ${e} property in key`,Lp=e=>`Property 'weight' in key '${e}' must be a positive integer`,Sa=Object.prototype.hasOwnProperty;class Fp{constructor(n){this._keys=[],this._keyMap={};let t=0;n.forEach(r=>{const i=Kc(r);this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight}),this._keys.forEach(r=>{r.weight/=t})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Kc(e){let n=null,t=null,r=null,i=1,o=null;if(pe(e)||Pn(e))r=e,n=za(e),t=os(e);else{if(!Sa.call(e,"name"))throw new Error(Dp("name"));const s=e.name;if(r=s,Sa.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(Lp(s));n=za(s),t=os(s),o=e.getFn}return{path:n,id:t,weight:i,src:r,getFn:o}}function za(e){return Pn(e)?e:e.split(".")}function os(e){return Pn(e)?e.join("."):e}function Op(e,n){const t=[];let r=!1;const i=(o,s,l,a)=>{if(ve(o))if(!s[l])t.push(a!==void 0?{v:o,i:a}:o);else{const u=s[l],d=o[u];if(!ve(d))return;if(l===s.length-1&&(pe(d)||Hr(d)||Tp(d)||typeof d=="bigint"))t.push(a!==void 0?{v:is(d),i:a}:is(d));else if(Pn(d)){r=!0;for(let h=0,f=d.length;h<f;h+=1)i(d[h],s,l+1,h)}else s.length&&i(d,s,l+1,a)}};return i(e,pe(n)?n.split("."):n,0),r?t:t[0]}const Bp={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Up={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,n)=>e.score===n.score?e.idx<n.idx?-1:1:e.score<n.score?-1:1},Wp={location:0,threshold:.6,distance:100},$p={useExtendedSearch:!1,useTokenSearch:!1,getFn:Op,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},T=Object.freeze({...Up,...Bp,...Wp,...$p}),Vp=/[^ ]+/g;function Hp(e=1,n=3){const t=new Map,r=Math.pow(10,n);return{get(i){const o=i.match(Vp).length;if(t.has(o))return t.get(o);const s=1/Math.pow(o,.5*e),l=parseFloat(Math.round(s*r)/r);return t.set(o,l),l},clear(){t.clear()}}}class sl{constructor({getFn:n=T.getFn,fieldNormWeight:t=T.fieldNormWeight}={}){this.norm=Hp(t,3),this.getFn=n,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((t,r)=>{this._keysMap[t.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,pe(this.docs[0])?this.docs.forEach((n,t)=>{this._addString(n,t)}):this.docs.forEach((n,t)=>{this._addObject(n,t)}),this.norm.clear())}add(n){const t=this.size();pe(n)?this._addString(n,t):this._addObject(n,t)}removeAt(n){this.records.splice(n,1);for(let t=n,r=this.size();t<r;t+=1)this.records[t].i-=1}removeAll(n){for(let t=n.length-1;t>=0;t-=1)this.records.splice(n[t],1);for(let t=0,r=this.records.length;t<r;t+=1)this.records[t].i=t}getValueForItemAtKeyId(n,t){return n[this._keysMap[t]]}size(){return this.records.length}_addString(n,t){if(!ve(n)||jr(n))return;const r={v:n,i:t,n:this.norm.get(n)};this.records.push(r)}_addObject(n,t){const r={i:t,$:{}};this.keys.forEach((i,o)=>{const s=i.getFn?i.getFn(n):this.getFn(n,i.path);if(ve(s)){if(Pn(s)){const l=[];for(let a=0,u=s.length;a<u;a+=1){const d=s[a];if(ve(d)){if(pe(d)){if(!jr(d)){const h={v:d,i:a,n:this.norm.get(d)};l.push(h)}}else if(ve(d.v)){const h=pe(d.v)?d.v:is(d.v);if(!jr(h)){const f={v:h,i:d.i,n:this.norm.get(h)};l.push(f)}}}}r.$[o]=l}else if(pe(s)&&!jr(s)){const l={v:s,n:this.norm.get(s)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys.map(({getFn:n,...t})=>t),records:this.records}}}function Qc(e,n,{getFn:t=T.getFn,fieldNormWeight:r=T.fieldNormWeight}={}){const i=new sl({getFn:t,fieldNormWeight:r});return i.setKeys(e.map(Kc)),i.setSources(n),i.create(),i}function Kp(e,{getFn:n=T.getFn,fieldNormWeight:t=T.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new sl({getFn:n,fieldNormWeight:t});return o.setKeys(r),o.setIndexRecords(i),o}function Qp(e=[],n=T.minMatchCharLength){const t=[];let r=-1,i=-1,o=0;for(let s=e.length;o<s;o+=1){const l=e[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=n&&t.push([r,i]),r=-1)}return e[o-1]&&o-r>=n&&t.push([r,o-1]),t}const Mn=32;function bp(e,n,t,{location:r=T.location,distance:i=T.distance,threshold:o=T.threshold,findAllMatches:s=T.findAllMatches,minMatchCharLength:l=T.minMatchCharLength,includeMatches:a=T.includeMatches,ignoreLocation:u=T.ignoreLocation}={}){if(n.length>Mn)throw new Error(Ip(Mn));const d=n.length,h=e.length,f=Math.max(0,Math.min(r,h));let g=o,v=f;const x=(w,j)=>{const C=w/d;if(u)return C;const D=Math.abs(f-j);return i?C+D/i:D?1:C},N=l>1||a,p=N?Array(h):[];let c;for(;(c=e.indexOf(n,v))>-1;){const w=x(0,c);if(g=Math.min(w,g),v=c+d,N){let j=0;for(;j<d;)p[c+j]=1,j+=1}}v=-1;let m=[],k=1,z=d+h;const E=1<<d-1;for(let w=0;w<d;w+=1){let j=0,C=z;for(;j<C;)x(w,f+C)<=g?j=C:z=C,C=Math.floor((z-j)/2+j);z=C;let D=Math.max(1,f-C+1);const X=s?h:Math.min(f+C,h)+d,V=Array(X+2);V[X+1]=(1<<w)-1;for(let Z=X;Z>=D;Z-=1){const Ve=Z-1,De=t[e[Ve]];if(N&&(p[Ve]=+!!De),V[Z]=(V[Z+1]<<1|1)&De,w&&(V[Z]|=(m[Z+1]|m[Z])<<1|1|m[Z+1]),V[Z]&E&&(k=x(w,Ve),k<=g)){if(g=k,v=Ve,v<=f)break;D=Math.max(1,2*f-v)}}if(x(w+1,f)>g)break;m=V}const P={isMatch:v>=0,score:Math.max(.001,k)};if(N){const w=Qp(p,l);w.length?a&&(P.indices=w):P.isMatch=!1}return P}function qp(e){const n={};for(let t=0,r=e.length;t<r;t+=1){const i=e.charAt(t);n[i]=(n[i]||0)|1<<r-t-1}return n}function ll(e){if(e.length<=1)return e;e.sort((t,r)=>t[0]-r[0]||t[1]-r[1]);const n=[e[0]];for(let t=1,r=e.length;t<r;t+=1){const i=n[n.length-1],o=e[t];o[0]<=i[1]+1?i[1]=Math.max(i[1],o[1]):n.push(o)}return n}const bc={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Gp=new RegExp("["+Object.keys(bc).join("")+"]","g"),or=String.prototype.normalize?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Gp,n=>bc[n]):e=>e;class al{constructor(n,{location:t=T.location,threshold:r=T.threshold,distance:i=T.distance,includeMatches:o=T.includeMatches,findAllMatches:s=T.findAllMatches,minMatchCharLength:l=T.minMatchCharLength,isCaseSensitive:a=T.isCaseSensitive,ignoreDiacritics:u=T.ignoreDiacritics,ignoreLocation:d=T.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:a,ignoreDiacritics:u,ignoreLocation:d},n=a?n:n.toLowerCase(),n=u?or(n):n,this.pattern=n,this.chunks=[],!this.pattern.length)return;const h=(g,v)=>{this.chunks.push({pattern:g,alphabet:qp(g),startIndex:v})},f=this.pattern.length;if(f>Mn){let g=0;const v=f%Mn,x=f-v;for(;g<x;)h(this.pattern.substr(g,Mn),g),g+=Mn;if(v){const N=f-Mn;h(this.pattern.substr(N),N)}}else h(this.pattern,0)}searchIn(n){const{isCaseSensitive:t,ignoreDiacritics:r,includeMatches:i}=this.options;if(n=t?n:n.toLowerCase(),n=r?or(n):n,this.pattern===n){const x={isMatch:!0,score:0};return i&&(x.indices=[[0,n.length-1]]),x}const{location:o,distance:s,threshold:l,findAllMatches:a,minMatchCharLength:u,ignoreLocation:d}=this.options,h=[];let f=0,g=!1;this.chunks.forEach(({pattern:x,alphabet:N,startIndex:p})=>{const{isMatch:c,score:m,indices:k}=bp(n,x,N,{location:o+p,distance:s,threshold:l,findAllMatches:a,minMatchCharLength:u,includeMatches:i,ignoreLocation:d});c&&(g=!0),f+=m,c&&k&&h.push(...k)});const v={isMatch:g,score:g?f/this.chunks.length:1};return g&&i&&(v.indices=ll(h)),v}}class _n{constructor(n){this.pattern=n}static isMultiMatch(n){return Ca(n,this.multiRegex)}static isSingleMatch(n){return Ca(n,this.singleRegex)}search(n){return{isMatch:!1,score:1}}}function Ca(e,n){const t=e.match(n);return t?t[1]:null}class Yp extends _n{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const t=n===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Xp extends _n{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const r=n.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,n.length-1]}}}class Zp extends _n{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const t=n.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Jp extends _n{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const t=!n.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,n.length-1]}}}class eh extends _n{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const t=n.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class nh extends _n{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const t=!n.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,n.length-1]}}}class qc extends _n{constructor(n,{location:t=T.location,threshold:r=T.threshold,distance:i=T.distance,includeMatches:o=T.includeMatches,findAllMatches:s=T.findAllMatches,minMatchCharLength:l=T.minMatchCharLength,isCaseSensitive:a=T.isCaseSensitive,ignoreDiacritics:u=T.ignoreDiacritics,ignoreLocation:d=T.ignoreLocation}={}){super(n),this._bitapSearch=new al(n,{location:t,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:a,ignoreDiacritics:u,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class Gc extends _n{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let t=0,r;const i=[],o=this.pattern.length;for(;(r=n.indexOf(this.pattern,t))>-1;)t=r+o,i.push([r,t-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const ss=[Yp,Gc,Zp,Jp,nh,eh,Xp,qc],Ea=ss.length,th="\0",rh="|";function ih(e){const n=[],t=e.length;let r=0;for(;r<t;){for(;r<t&&e[r]===" ";)r++;if(r>=t)break;let i=r;for(;i<t&&e[i]!==" "&&e[i]!=='"';)i++;if(i<t&&e[i]==='"'){for(i++;i<t;){if(e[i]==='"'){const o=i+1;if(o>=t||e[o]===" "){i++;break}if(e[o]==="$"&&(o+1>=t||e[o+1]===" ")){i+=2;break}}i++}n.push(e.substring(r,i)),r=i}else{for(;i<t&&e[i]!==" ";)i++;n.push(e.substring(r,i)),r=i}}return n}function oh(e,n={}){return e.replace(/\\\|/g,th).split(rh).map(r=>{const i=r.replace(/\u0000/g,"|"),o=ih(i.trim()).filter(l=>l&&!!l.trim()),s=[];for(let l=0,a=o.length;l<a;l+=1){const u=o[l];let d=!1,h=-1;for(;!d&&++h<Ea;){const f=ss[h],g=f.isMultiMatch(u);g&&(s.push(new f(g,n)),d=!0)}if(!d)for(h=-1;++h<Ea;){const f=ss[h],g=f.isSingleMatch(u);if(g){s.push(new f(g,n));break}}}return s})}const sh=new Set([qc.type,Gc.type]);class lh{constructor(n,{isCaseSensitive:t=T.isCaseSensitive,ignoreDiacritics:r=T.ignoreDiacritics,includeMatches:i=T.includeMatches,minMatchCharLength:o=T.minMatchCharLength,ignoreLocation:s=T.ignoreLocation,findAllMatches:l=T.findAllMatches,location:a=T.location,threshold:u=T.threshold,distance:d=T.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:o,findAllMatches:l,ignoreLocation:s,location:a,threshold:u,distance:d},n=t?n:n.toLowerCase(),n=r?or(n):n,this.pattern=n,this.query=oh(this.pattern,this.options)}static condition(n,t){return t.useExtendedSearch}searchIn(n){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:o}=this.options;n=i?n:n.toLowerCase(),n=o?or(n):n;let s=0;const l=[];let a=0,u=!1;for(let d=0,h=t.length;d<h;d+=1){const f=t[d];l.length=0,s=0,u=!1;for(let g=0,v=f.length;g<v;g+=1){const x=f[g],{isMatch:N,indices:p,score:c}=x.search(n);if(N){s+=1,a+=c;const m=x.constructor.type;m.startsWith("inverse")&&(u=!0),r&&(sh.has(m)?l.push(...p):l.push(p))}else{a=0,s=0,l.length=0,u=!1;break}}if(s){const g={isMatch:!0,score:a/s};return u&&(g.hasInverse=!0),r&&(g.indices=ll(l)),g}}return{isMatch:!1,score:1}}}const ls=[];function ul(...e){ls.push(...e)}function mi(e,n){for(let t=0,r=ls.length;t<r;t+=1){const i=ls[t];if(i.condition(e,n))return new i(e,n)}return new al(e,n)}const gi={AND:"$and",OR:"$or"},as={PATH:"$path",PATTERN:"$val"},us=e=>!!(e[gi.AND]||e[gi.OR]),ah=e=>!!e[as.PATH],uh=e=>!Pn(e)&&Vc(e)&&!us(e),Pa=e=>({[gi.AND]:Object.keys(e).map(n=>({[n]:e[n]}))});function Yc(e,n,{auto:t=!0}={}){const r=i=>{if(pe(i)){const a={keyId:null,pattern:i};return t&&(a.searcher=mi(i,n)),a}const o=Object.keys(i),s=ah(i);if(!s&&o.length>1&&!us(i))return r(Pa(i));if(uh(i)){const a=s?i[as.PATH]:o[0],u=s?i[as.PATTERN]:i[a];if(!pe(u))throw new Error(Mp(a));const d={keyId:os(a),pattern:u};return t&&(d.searcher=mi(u,n)),d}const l={children:[],operator:o[0]};return o.forEach(a=>{const u=i[a];Pn(u)&&u.forEach(d=>{l.children.push(r(d))})}),l};return us(e)||(e=Pa(e)),r(e)}function cs(e,{ignoreFieldNorm:n=T.ignoreFieldNorm}){let t=1;return e.forEach(({key:r,norm:i,score:o})=>{const s=r?r.weight:null;t*=Math.pow(o===0&&s?Number.EPSILON:o,(s||1)*(n?1:i))}),t}function ch(e,{ignoreFieldNorm:n=T.ignoreFieldNorm}){e.forEach(t=>{t.score=cs(t.matches,{ignoreFieldNorm:n})})}class dh{constructor(n){this.limit=n,this.heap=[]}get size(){return this.heap.length}shouldInsert(n){return this.size<this.limit||n<this.heap[0].score}insert(n){this.size<this.limit?(this.heap.push(n),this._bubbleUp(this.size-1)):n.score<this.heap[0].score&&(this.heap[0]=n,this._sinkDown(0))}extractSorted(n){return this.heap.sort(n)}_bubbleUp(n){const t=this.heap;for(;n>0;){const r=n-1>>1;if(t[n].score<=t[r].score)break;const i=t[n];t[n]=t[r],t[r]=i,n=r}}_sinkDown(n){const t=this.heap,r=t.length;let i=n;do{n=i;const o=2*n+1,s=2*n+2;if(o<r&&t[o].score>t[i].score&&(i=o),s<r&&t[s].score>t[i].score&&(i=s),i!==n){const l=t[n];t[n]=t[i],t[i]=l}}while(i!==n)}}function fh(e,n){const t=e.matches;n.matches=[],ve(t)&&t.forEach(r=>{if(!ve(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r,s={indices:i,value:o};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),n.matches.push(s)})}function ph(e,n){n.score=e.score}function hh(e,n,{includeMatches:t=T.includeMatches,includeScore:r=T.includeScore}={}){const i=[];return t&&i.push(fh),r&&i.push(ph),e.map(o=>{const{idx:s}=o,l={item:n[s],refIndex:s};return i.length&&i.forEach(a=>{a(o,l)}),l})}const mh=/\b\w+\b/g;function ds({isCaseSensitive:e=!1,ignoreDiacritics:n=!1}={}){return{tokenize(t){return e||(t=t.toLowerCase()),n&&(t=or(t)),t.match(mh)||[]}}}function gh(e,n,t){const r=new Map,i=new Map;let o=0;function s(l,a,u,d){const h=t.tokenize(l);if(!h.length)return;o++;const f=new Map;for(const g of h)f.set(g,(f.get(g)||0)+1);for(const[g,v]of f){const x={docIdx:a,keyIdx:u,subIdx:d,tf:v};let N=r.get(g);N||(N=[],r.set(g,N)),N.push(x),i.set(g,(i.get(g)||0)+1)}}for(const l of e){const{i:a,v:u,$:d}=l;if(u!==void 0){s(u,a,-1,-1);continue}if(d)for(let h=0;h<n;h++){const f=d[h];if(f)if(Array.isArray(f))for(const g of f)s(g.v,a,h,g.i??-1);else s(f.v,a,h,-1)}}return{terms:r,fieldCount:o,df:i}}function yh(e,n,t,r){const{i,v:o,$:s}=n;function l(a,u,d){const h=r.tokenize(a);if(!h.length)return;e.fieldCount++;const f=new Map;for(const g of h)f.set(g,(f.get(g)||0)+1);for(const[g,v]of f){const x={docIdx:i,keyIdx:u,subIdx:d,tf:v};let N=e.terms.get(g);N||(N=[],e.terms.set(g,N)),N.push(x),e.df.set(g,(e.df.get(g)||0)+1)}}if(o!==void 0){l(o,-1,-1);return}if(s)for(let a=0;a<t;a++){const u=s[a];if(u)if(Array.isArray(u))for(const d of u)l(d.v,a,d.i??-1);else l(u.v,a,-1)}}function _a(e,n){for(const[t,r]of e.terms){const i=r.filter(s=>s.docIdx!==n),o=r.length-i.length;o>0&&(e.fieldCount-=o,e.df.set(t,(e.df.get(t)||0)-o),i.length===0?(e.terms.delete(t),e.df.delete(t)):e.terms.set(t,i))}}class An{constructor(n,t,r){this.options={...T,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new Fp(this.options.keys),this._docs=n,this._myIndex=null,this._invertedIndex=null,this.setCollection(n,r),this._lastQuery=null,this._lastSearcher=null}_getSearcher(n){if(this._lastQuery===n)return this._lastSearcher;const t=this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options,r=mi(n,t);return this._lastQuery=n,this._lastSearcher=r,r}setCollection(n,t){if(this._docs=n,t&&!(t instanceof sl))throw new Error(Rp);if(this._myIndex=t||Qc(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const r=ds({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});this._invertedIndex=gh(this._myIndex.records,this._myIndex.keys.length,r)}}add(n){if(ve(n)&&(this._docs.push(n),this._myIndex.add(n),this._invertedIndex)){const t=this._myIndex.records[this._myIndex.records.length-1],r=ds({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});yh(this._invertedIndex,t,this._myIndex.keys.length,r)}}remove(n=()=>!1){const t=[],r=[];for(let i=0,o=this._docs.length;i<o;i+=1)n(this._docs[i],i)&&(t.push(this._docs[i]),r.push(i));if(r.length){if(this._invertedIndex)for(const i of r)_a(this._invertedIndex,i);for(let i=r.length-1;i>=0;i-=1)this._docs.splice(r[i],1);this._myIndex.removeAll(r)}return t}removeAt(n){this._invertedIndex&&_a(this._invertedIndex,n);const t=this._docs.splice(n,1)[0];return this._myIndex.removeAt(n),t}getIndex(){return this._myIndex}search(n,t){const{limit:r=-1}=t||{},{includeMatches:i,includeScore:o,shouldSort:s,sortFn:l,ignoreFieldNorm:a}=this.options;if(pe(n)&&!n.trim()){let h=this._docs.map((f,g)=>({item:f,refIndex:g}));return Hr(r)&&r>-1&&(h=h.slice(0,r)),h}const u=Hr(r)&&r>0&&pe(n);let d;if(u){const h=new dh(r);pe(this._docs[0])?this._searchStringList(n,{heap:h,ignoreFieldNorm:a}):this._searchObjectList(n,{heap:h,ignoreFieldNorm:a}),d=h.extractSorted(l)}else d=pe(n)?pe(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n),ch(d,{ignoreFieldNorm:a}),s&&d.sort(l),Hr(r)&&r>-1&&(d=d.slice(0,r));return hh(d,this._docs,{includeMatches:i,includeScore:o})}_searchStringList(n,{heap:t,ignoreFieldNorm:r}={}){const i=this._getSearcher(n),{records:o}=this._myIndex,s=t?null:[];return o.forEach(({v:l,i:a,n:u})=>{if(!ve(l))return;const{isMatch:d,score:h,indices:f}=i.searchIn(l);if(d){const g={item:l,idx:a,matches:[{score:h,value:l,norm:u,indices:f}]};t?(g.score=cs(g.matches,{ignoreFieldNorm:r}),t.shouldInsert(g.score)&&t.insert(g)):s.push(g)}}),s}_searchLogical(n){const t=Yc(n,this.options),r=(l,a,u)=>{if(!("children"in l)){const{keyId:g,searcher:v}=l;let x;return g===null?(x=[],this._myIndex.keys.forEach((N,p)=>{x.push(...this._findMatches({key:N,value:a[p],searcher:v}))})):x=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(a,g),searcher:v}),x&&x.length?[{idx:u,item:a,matches:x}]:[]}const{children:d,operator:h}=l,f=[];for(let g=0,v=d.length;g<v;g+=1){const x=d[g],N=r(x,a,u);if(N.length)f.push(...N);else if(h===gi.AND)return[]}return f},i=this._myIndex.records,o=new Map,s=[];return i.forEach(({$:l,i:a})=>{if(ve(l)){const u=r(t,l,a);u.length&&(o.has(a)||(o.set(a,{idx:a,item:l,matches:[]}),s.push(o.get(a))),u.forEach(({matches:d})=>{o.get(a).matches.push(...d)}))}}),s}_searchObjectList(n,{heap:t,ignoreFieldNorm:r}={}){const i=this._getSearcher(n),{keys:o,records:s}=this._myIndex,l=t?null:[];return s.forEach(({$:a,i:u})=>{if(!ve(a))return;const d=[];let h=!1,f=!1;if(o.forEach((g,v)=>{const x=this._findMatches({key:g,value:a[v],searcher:i});x.length?(d.push(...x),x[0].hasInverse&&(f=!0)):h=!0}),!(f&&h)&&d.length){const g={idx:u,item:a,matches:d};t?(g.score=cs(g.matches,{ignoreFieldNorm:r}),t.shouldInsert(g.score)&&t.insert(g)):l.push(g)}}),l}_findMatches({key:n,value:t,searcher:r}){if(!ve(t))return[];const i=[];if(Pn(t))t.forEach(({v:o,i:s,n:l})=>{if(!ve(o))return;const{isMatch:a,score:u,indices:d,hasInverse:h}=r.searchIn(o);a&&i.push({score:u,key:n,value:o,idx:s,norm:l,indices:d,hasInverse:h})});else{const{v:o,n:s}=t,{isMatch:l,score:a,indices:u,hasInverse:d}=r.searchIn(o);l&&i.push({score:a,key:n,value:o,norm:s,indices:u,hasInverse:d})}return i}}class vh{static condition(n,t){return t.useTokenSearch}constructor(n,t){this.options=t,this.analyzer=ds({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics});const r=this.analyzer.tokenize(n),i=t._invertedIndex,{df:o,fieldCount:s}=i;this.termSearchers=[],this.idfWeights=[];for(const l of r){this.termSearchers.push(new al(l,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));const a=o.get(l)||0,u=Math.log(1+(s-a+.5)/(a+.5));this.idfWeights.push(u)}}searchIn(n){if(!this.termSearchers.length)return{isMatch:!1,score:1};const t=[];let r=0,i=0,o=0;for(let a=0;a<this.termSearchers.length;a++){const u=this.termSearchers[a].searchIn(n),d=this.idfWeights[a];i+=d,u.isMatch&&(o++,r+=d*(1-u.score),u.indices&&t.push(...u.indices))}if(o===0)return{isMatch:!1,score:1};const s=i>0?1-r/i:0,l={isMatch:!0,score:Math.max(.001,s)};return this.options.includeMatches&&t.length&&(l.indices=ll(t)),l}}An.version="7.3.0";An.createIndex=Qc;An.parseIndex=Kp;An.config=T;An.match=function(e,n,t){return mi(e,{...T,...t}).searchIn(n)};An.parseQuery=Yc;ul(lh);ul(vh);An.use=function(...e){e.forEach(n=>ul(n))};function wh({current:e,onChange:n,locale:t,disabled:r}){const i=L.useRef(null),o=L.useRef({});return L.useEffect(()=>{if(r)return;const s=o.current[e];s&&s.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[e,r]),y.jsx("div",{ref:i,className:"flex gap-1 px-4 py-1 overflow-x-auto scrollbar-hide",children:Ta.map(s=>{const l=!r&&e===s.id;return y.jsxs("button",{ref:a=>{o.current[s.id]=a},onClick:()=>n(s.id),className:`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${l?"bg-indigo-100 text-indigo-700 font-medium":r?"bg-gray-50 text-gray-400 hover:bg-gray-100":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,title:r?t==="zh"?"点击切换到该分类":"Click to switch to this category":void 0,children:[y.jsx("span",{children:s.icon}),y.jsx("span",{children:s.label[t]})]},s.id)})})}function xh({value:e,onChange:n,locale:t}){const r=t==="zh"?"搜索模板...":"Search templates...";return y.jsxs("div",{className:"relative",children:[y.jsxs("svg",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("circle",{cx:"11",cy:"11",r:"8"}),y.jsx("path",{d:"m21 21-4.35-4.35"})]}),y.jsx("input",{type:"text",value:e,onChange:i=>n(i.target.value),placeholder:r,className:"w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"})]})}const kh={topic:{zh:"主题",en:"Topic"},text:{zh:"文本内容",en:"Text"},content:{zh:"内容概要",en:"Content summary"},audience:{zh:"目标受众",en:"Target audience"},target_language:{zh:"目标语言",en:"Target language"},platform:{zh:"发布平台",en:"Platform"},style:{zh:"风格偏好",en:"Style"},product:{zh:"产品/服务",en:"Product/service"},background:{zh:"背景信息",en:"Background"},constraints:{zh:"约束条件",en:"Constraints"}};function Xc(e){const n=e.variables||[],t=[...e.prompt.zh.matchAll(/\{([a-zA-Z][a-zA-Z0-9_]*)\}/g)].map(r=>r[1]);return Array.from(new Set([...n,...t]))}function so(e,n){var t;return((t=kh[e])==null?void 0:t[n])||e.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase())}function Sh(e,n){return Object.entries(n).reduce((t,[r,i])=>t.split(`{${r}}`).join(i.trim()),e)}function zh({template:e,locale:n,mode:t,onCancel:r,onSubmit:i}){const o=L.useMemo(()=>Xc(e),[e]),[s,l]=L.useState({}),[a,u]=L.useState(""),d=Sh(e.prompt[n],s),h=()=>{if(o.filter(g=>{var v;return!((v=s[g])!=null&&v.trim())}).length>0){u(n==="zh"?"请填写所有必填信息":"Please fill in all required fields");return}i(d)};return y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4",children:y.jsxs("div",{className:"w-full max-w-[520px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl",children:[y.jsxs("div",{className:"flex items-start justify-between gap-3",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-base font-semibold text-gray-900",children:n==="zh"?"填写任务信息":"Fill in task details"}),y.jsx("p",{className:"mt-1 text-xs text-gray-500",children:e.title[n]})]}),y.jsx("button",{onClick:r,className:"rounded p-1 text-gray-400 hover:bg-gray-100","aria-label":"Close",children:"×"})]}),y.jsx("div",{className:"mt-4 space-y-3",children:o.map(f=>y.jsxs("label",{className:"block",children:[y.jsxs("span",{className:"mb-1 block text-xs font-medium text-gray-700",children:[so(f,n)," ",y.jsx("span",{className:"text-red-400",children:"*"})]}),y.jsx("textarea",{value:s[f]||"",onChange:g=>{l(v=>({...v,[f]:g.target.value})),u("")},rows:f==="text"||f==="content"||f==="background"?4:2,placeholder:n==="zh"?`请输入${so(f,n)}`:`Enter ${so(f,n).toLowerCase()}`,className:"w-full resize-y rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"})]},f))}),y.jsxs("div",{className:"mt-4 rounded-lg border border-indigo-100 bg-indigo-50 p-3",children:[y.jsx("div",{className:"mb-1 text-[11px] font-semibold text-indigo-700",children:n==="zh"?"生成预览":"Generation preview"}),y.jsx("p",{className:"max-h-24 overflow-y-auto whitespace-pre-wrap text-xs leading-5 text-gray-600",children:d})]}),a&&y.jsx("p",{className:"mt-2 text-xs text-red-500",children:a}),y.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[y.jsx("button",{onClick:r,className:"rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-600 hover:bg-gray-50",children:n==="zh"?"取消":"Cancel"}),y.jsx("button",{onClick:h,className:"rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700",children:t==="insert"?n==="zh"?"生成并插入":"Generate & insert":n==="zh"?"生成并复制":"Generate & copy"})]})]})})}const Ch=Object.fromEntries(Ta.map(e=>[e.id,e]));function Eh({templates:e,locale:n,isSearching:t,isGlobalSearch:r,query:i,onCategoryClick:o}){return e.length===0?y.jsx("div",{className:"flex flex-col items-center justify-center h-32 text-gray-400 text-sm gap-1",children:t?y.jsxs(y.Fragment,{children:[y.jsx("span",{children:n==="zh"?`未找到与 "${i}" 相关的模板`:`No templates match "${i}"`}),y.jsx("span",{className:"text-xs",children:n==="zh"?"试试其他关键词，或浏览分类":"Try different keywords or browse by category"})]}):y.jsx("span",{children:n==="zh"?"该分类下暂无模板":"No templates in this category"})}):y.jsxs("div",{className:"flex flex-col gap-2",children:[t&&y.jsx("div",{className:"text-xs text-gray-500 px-1",children:r?n==="zh"?`全局搜索 · 找到 ${e.length} 条结果`:`Global search · ${e.length} result${e.length===1?"":"s"}`:n==="zh"?`当前分类内 · 找到 ${e.length} 条结果`:`In current category · ${e.length} result${e.length===1?"":"s"}`}),e.map(s=>y.jsx(Ph,{template:s,locale:n,showCategoryBadge:!!r,onCategoryClick:o},s.id))]})}function Ph({template:e,locale:n,showCategoryBadge:t,onCategoryClick:r}){const[i,o]=L.useState("idle"),[s,l]=L.useState(null),a=Ch[e.category],u=Xc(e),d=async v=>{await navigator.clipboard.writeText(v),o("copied"),setTimeout(()=>o("idle"),1500)},h=async v=>{try{const[x]=await chrome.tabs.query({active:!0,currentWindow:!0}),N=["chatgpt.com","claude.ai","gemini.google.com","chat.deepseek.com","www.doubao.com"];if(!((x==null?void 0:x.url)&&N.some(c=>x.url.includes(c)))){await d(v),o("fallback"),setTimeout(()=>o("idle"),2e3);return}chrome.runtime.sendMessage({type:"INSERT_TEMPLATE",payload:{text:v}}),o("inserted"),setTimeout(()=>o("idle"),1500)}catch{await d(v),o("fallback"),setTimeout(()=>o("idle"),2e3)}},f=async()=>{if(u.length>0){l("copy");return}await d(e.prompt[n])},g=async()=>{if(u.length>0){l("insert");return}await h(e.prompt[n])};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"bg-white rounded-lg border border-gray-100 p-3 hover:border-indigo-200 hover:shadow-sm transition-all",children:[y.jsxs("div",{className:"flex items-start justify-between gap-2 mb-1",children:[y.jsx("h3",{className:"text-sm font-medium text-gray-800 flex-1",children:e.title[n]}),t&&a&&y.jsxs("button",{onClick:()=>r==null?void 0:r(e.category),className:"shrink-0 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors",title:n==="zh"?"查看该分类全部模板":"View all templates in this category",children:[y.jsx("span",{children:a.icon}),y.jsx("span",{children:a.label[n]})]})]}),y.jsx("p",{className:"text-xs text-gray-500 mb-2 line-clamp-2",children:e.description[n]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("button",{onClick:g,className:`px-3 py-1 text-xs rounded-md font-medium transition-colors ${i==="inserted"?"bg-green-50 text-green-600":i==="fallback"?"bg-yellow-50 text-yellow-600":"bg-indigo-50 text-indigo-600 hover:bg-indigo-100"}`,children:i==="inserted"?n==="zh"?"已插入":"Inserted":i==="fallback"?n==="zh"?"已复制(请打开AI页面)":"Copied (open AI page)":n==="zh"?"插入":"Insert"}),y.jsx("button",{onClick:f,className:"px-3 py-1 text-xs rounded-md bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors",children:i==="copied"?n==="zh"?"已复制":"Copied":n==="zh"?"复制":"Copy"}),y.jsx("div",{className:"flex-1"}),y.jsx("div",{className:"flex gap-1",children:e.tags.slice(0,2).map(v=>y.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-400",children:v[n]},v[n]))})]})]}),s&&y.jsx(zh,{template:e,locale:n,mode:s,onCancel:()=>l(null),onSubmit:async v=>{l(null),s==="copy"?await d(v):await h(v)}})]})}function _h({locale:e,onLocaleChange:n,onBack:t}){const r=o=>{n(o),uo({locale:o,localeSetByUser:!0})},i=()=>{window.confirm(e==="zh"?`感谢您的支持！❤️
点击"确定"前往 Ko-fi 请我喝杯咖啡`:`Thanks for your support! ❤️
Click "OK" to buy me a coffee on Ko-fi`)&&window.open("https://ko-fi.com/sumei7550","_blank")};return y.jsxs("div",{className:"flex flex-col h-full bg-gray-50",children:[y.jsxs("header",{className:"flex items-center gap-3 px-4 py-3 bg-white border-b",children:[y.jsx("button",{onClick:t,className:"p-1 rounded hover:bg-gray-100","aria-label":"Back",children:y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:y.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),y.jsx("h1",{className:"text-base font-semibold text-gray-800",children:e==="zh"?"设置":"Settings"})]}),y.jsxs("div",{className:"flex-1 p-4 space-y-4",children:[y.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[y.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-3",children:e==="zh"?"语言 / Language":"Language / 语言"}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("button",{onClick:()=>r("zh"),className:`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${e==="zh"?"bg-indigo-100 text-indigo-700 border border-indigo-200":"bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"}`,children:"中文"}),y.jsx("button",{onClick:()=>r("en"),className:`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${e==="en"?"bg-indigo-100 text-indigo-700 border border-indigo-200":"bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"}`,children:"English"})]})]}),y.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[y.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:e==="zh"?"关于":"About"}),y.jsx("p",{className:"text-xs text-gray-500",children:"PromptPro v1.0.2"}),y.jsx("p",{className:"text-xs text-gray-400 mt-1",children:e==="zh"?"一键优化 AI 提示词，内置专业模板库":"One-click AI prompt optimizer with template library"})]}),y.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[y.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:e==="zh"?"使用统计":"Usage"}),y.jsx("p",{className:"text-xs text-gray-500",children:e==="zh"?"每日免费优化次数：10 次":"Daily free optimizations: 10"})]}),y.jsxs("div",{className:"bg-white rounded-lg p-4 border border-gray-100",children:[y.jsxs("button",{onClick:i,className:"w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-80 flex items-center justify-center gap-2",style:{backgroundColor:"#29abe0"},children:[y.jsx("span",{children:"☕"}),e==="zh"?"请我喝杯咖啡":"Buy me a coffee"]}),y.jsx("p",{className:"text-xs text-gray-400 text-center mt-2",children:e==="zh"?"支持项目持续发展 ❤️":"Support the project ❤️"})]}),y.jsx("div",{className:"mt-4 pt-3 border-t border-gray-100 -mb-4",children:y.jsx("a",{href:e==="zh"?chrome.runtime.getURL("privacy_zh.html"):chrome.runtime.getURL("privacy_en.html"),target:"_blank",rel:"noopener noreferrer",className:"block text-center text-xs text-gray-400 hover:text-gray-600 transition-colors",children:e==="zh"?"隐私政策":"Privacy Policy"})})]})]})}const Ah=[{name:"ChatGPT",color:"#10a37f"},{name:"Claude",color:"#d97706"},{name:"DeepSeek",color:"#4f6ef7"},{name:"Gemini",color:"#4285f4"},{name:"豆包",color:"#3b82f6"}];function Nh({locale:e,onDismiss:n}){const t=e==="zh"?"前往以下 AI 对话页面，即可使用一键提示词优化功能":"Visit any supported AI chat page to use the prompt optimization feature";return y.jsxs("div",{className:"mx-4 mt-2 p-3 bg-indigo-50 border border-indigo-100 rounded-lg relative",children:[y.jsx("button",{onClick:n,className:"absolute top-2 right-2 text-gray-400 hover:text-gray-600 w-5 h-5 flex items-center justify-center","aria-label":"Close",children:y.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:y.jsx("path",{d:"M2 2l8 8M10 2l-8 8"})})}),y.jsx("p",{className:"text-xs text-gray-700 pr-4 mb-2",children:t}),y.jsx("div",{className:"flex flex-wrap gap-1.5",children:Ah.map(r=>y.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white",style:{backgroundColor:r.color},children:r.name},r.name))})]})}const lo=(e="")=>({id:crypto.randomUUID(),title:"",description:"",prompt:e,category:"writing",tags:[],isFavorite:!1,createdAt:Date.now(),updatedAt:Date.now(),useCount:0,versions:[]});function Th({locale:e,onBack:n,draft:t=""}){const r=e==="zh",[i,o]=L.useState([]),[s,l]=L.useState("all"),[a,u]=L.useState(""),[d,h]=L.useState(null),[f,g]=L.useState(null),[v,x]=L.useState("");L.useEffect(()=>{pr().then(o)},[]),L.useEffect(()=>{t&&!d&&h(lo(t))},[t]);const N=L.useMemo(()=>i.filter(w=>s==="favorites"?w.isFavorite:s==="recent"?!!w.lastUsedAt:!0).filter(w=>`${w.title} ${w.description} ${w.prompt} ${w.tags.join(" ")}`.toLowerCase().includes(a.toLowerCase())),[i,s,a]),p=w=>{x(w),window.setTimeout(()=>x(""),1800)},c=async w=>{await navigator.clipboard.writeText(w.prompt),await cl(w.id),o(await pr()),p(r?"已复制，可直接粘贴":"Copied to clipboard")},m=async w=>{const j={...w,isFavorite:!w.isFavorite,updatedAt:Date.now()};await dl(j),o(await pr())},k=async w=>{const j=i.filter(C=>C.id!==w);await fl(j),o(j)},z=()=>Aa("promptpro-templates.json",JSON.stringify({version:1,templates:i},null,2),"application/json"),E=()=>Aa("promptpro-templates.md",i.map(w=>`# ${w.title}

${w.description}

\`\`\`prompt
${w.prompt}
\`\`\`
`).join(`
`),"text/markdown"),P=w=>{const j=new FileReader;j.onload=async()=>{try{const C=String(j.result);let D;if(w.name.toLowerCase().endsWith(".md"))D=C.split(/\n(?=# )/).filter(Boolean).map(q=>{const Z=q.split(`
`),Ve=(Z[0]||"").replace(/^#\s*/,"").trim(),De=q.match(/```prompt\n([\s\S]*?)\n```/),_=Z.slice(2,De?Z.findIndex(R=>R.startsWith("```prompt")):Z.length).join(`
`).trim();return{title:Ve,description:_,prompt:(De==null?void 0:De[1])||""}});else{const q=JSON.parse(C);D=Array.isArray(q)?q:q.templates}if(!Array.isArray(D))throw new Error("invalid");const X=D.filter(q=>q&&typeof q.title=="string"&&typeof q.prompt=="string").map(q=>({...lo(),...q,id:q.id||crypto.randomUUID(),updatedAt:Date.now(),versions:Array.isArray(q.versions)?q.versions:[]})),V=[...X,...i.filter(q=>!X.some(Z=>Z.id===q.id))];await fl(V),o(V),p(r?`已导入 ${X.length} 个模板`:`Imported ${X.length} templates`)}catch{p(r?"导入失败：文件格式不正确":"Import failed: invalid file")}},j.readAsText(w)};return y.jsxs("div",{className:"flex h-full flex-col bg-gray-50",children:[y.jsxs("header",{className:"flex items-center gap-2 border-b bg-white px-4 py-3",children:[y.jsx("button",{onClick:n,className:"rounded p-1 text-gray-500 hover:bg-gray-100",children:"←"}),y.jsxs("div",{className:"flex-1",children:[y.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:r?"我的 Prompt 资产":"My Prompt assets"}),y.jsx("p",{className:"text-[10px] text-gray-400",children:r?"仅保存在本机，不会上传":"Stored locally on this device"})]}),y.jsxs("label",{className:"cursor-pointer rounded bg-gray-100 px-2 py-1 text-[11px] text-gray-600",children:[r?"导入":"Import",y.jsx("input",{type:"file",accept:".json,.md",className:"hidden",onChange:w=>{var j;return((j=w.target.files)==null?void 0:j[0])&&P(w.target.files[0])}})]}),y.jsx("button",{onClick:z,className:"rounded bg-gray-100 px-2 py-1 text-[11px] text-gray-600",children:"JSON"}),y.jsx("button",{onClick:E,className:"rounded bg-gray-100 px-2 py-1 text-[11px] text-gray-600",children:"MD"})]}),y.jsxs("div",{className:"border-b bg-white px-4 py-2",children:[y.jsx("div",{className:"flex gap-1 rounded-lg bg-gray-100 p-1",children:["all","favorites","recent"].map(w=>y.jsx("button",{onClick:()=>l(w),className:`flex-1 rounded-md py-1 text-xs ${s===w?"bg-white font-medium text-indigo-600 shadow-sm":"text-gray-500"}`,children:w==="all"?r?"全部":"All":w==="favorites"?r?"收藏":"Favorites":r?"最近使用":"Recent"},w))}),y.jsx("input",{value:a,onChange:w=>u(w.target.value),placeholder:r?"搜索我的模板...":"Search my templates...",className:"mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"})]}),y.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:N.length===0?y.jsx("div",{className:"py-10 text-center text-xs text-gray-400",children:r?"还没有个人模板，点击下方开始创建":"No personal templates yet"}):y.jsx("div",{className:"space-y-2",children:N.map(w=>y.jsxs("div",{className:"rounded-xl border border-gray-100 bg-white p-3",children:[y.jsxs("div",{className:"flex items-start gap-2",children:[y.jsxs("div",{className:"flex-1",children:[y.jsx("h2",{className:"text-sm font-medium text-gray-800",children:w.title||(r?"未命名模板":"Untitled template")}),y.jsx("p",{className:"mt-1 line-clamp-2 whitespace-pre-wrap text-xs text-gray-500",children:w.prompt})]}),y.jsx("button",{onClick:()=>m(w),className:"text-lg text-amber-400",children:w.isFavorite?"★":"☆"})]}),y.jsxs("div",{className:"mt-2 flex items-center gap-1",children:[y.jsx("button",{onClick:()=>c(w),className:"rounded-md bg-indigo-50 px-2.5 py-1 text-xs text-indigo-600",children:r?"复制":"Copy"}),y.jsx("button",{onClick:()=>{h(w),cl(w.id)},className:"rounded-md bg-gray-50 px-2.5 py-1 text-xs text-gray-600",children:r?"复用/编辑":"Reuse / edit"}),y.jsx("button",{onClick:()=>g(w),className:"rounded-md bg-gray-50 px-2.5 py-1 text-xs text-gray-600",children:r?"历史":"History"}),y.jsx("button",{onClick:()=>k(w.id),className:"ml-auto px-2 py-1 text-xs text-red-400",children:r?"删除":"Delete"})]})]},w.id))})}),y.jsx("div",{className:"border-t bg-white p-3",children:y.jsxs("button",{onClick:()=>h(lo()),className:"w-full rounded-lg bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-700",children:["＋ ",r?"新建模板（3 步保存）":"New template (save in 3 steps)"]})}),v&&y.jsx("div",{className:"fixed bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-3 py-2 text-xs text-white",children:v}),d&&y.jsx(jh,{locale:e,item:d,onCancel:()=>h(null),onSave:async w=>{await dl(w),o(await pr()),h(null),p(r?"模板已保存":"Template saved")}}),f&&y.jsx(Rh,{locale:e,item:f,onClose:()=>g(null)})]})}function jh({locale:e,item:n,onCancel:t,onSave:r}){const i=e==="zh",[o,s]=L.useState(n),l=()=>{if(!o.title.trim()||!o.prompt.trim())return;const a=n.prompt!==o.prompt;r({...o,title:o.title.trim(),prompt:o.prompt.trim(),updatedAt:Date.now(),versions:a?[{id:crypto.randomUUID(),prompt:n.prompt,createdAt:Date.now()},...n.versions].slice(0,20):n.versions})};return y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4",children:y.jsxs("div",{className:"w-full rounded-2xl bg-white p-4 shadow-2xl",children:[y.jsx("h2",{className:"text-base font-semibold",children:i?"保存个人模板":"Save personal template"}),y.jsx("p",{className:"mt-1 text-xs text-gray-400",children:i?"填写标题 → 检查内容 → 保存":"Name it, review it, save it"}),y.jsx("input",{autoFocus:!0,value:o.title,onChange:a=>s({...o,title:a.target.value}),placeholder:i?"模板名称":"Template name",className:"mt-4 w-full rounded-lg border px-3 py-2 text-sm"}),y.jsx("textarea",{value:o.description,onChange:a=>s({...o,description:a.target.value}),placeholder:i?"用途说明（可选）":"Description (optional)",className:"mt-2 w-full rounded-lg border px-3 py-2 text-xs",rows:2}),y.jsx("textarea",{value:o.prompt,onChange:a=>s({...o,prompt:a.target.value}),placeholder:i?"Prompt 内容":"Prompt content",className:"mt-2 w-full rounded-lg border px-3 py-2 text-sm",rows:7}),y.jsxs("div",{className:"mt-3 flex justify-end gap-2",children:[y.jsx("button",{onClick:t,className:"rounded-lg border px-3 py-2 text-xs text-gray-600",children:i?"取消":"Cancel"}),y.jsx("button",{disabled:!o.title.trim()||!o.prompt.trim(),onClick:l,className:"rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white disabled:opacity-40",children:i?"保存模板":"Save template"})]})]})})}function Rh({locale:e,item:n,onClose:t}){const r=e==="zh";return y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4",children:y.jsxs("div",{className:"max-h-[80vh] w-full overflow-y-auto rounded-2xl bg-white p-4",children:[y.jsxs("div",{className:"flex justify-between",children:[y.jsx("h2",{className:"text-sm font-semibold",children:r?"版本历史与对比":"Version history & compare"}),y.jsx("button",{onClick:t,children:"×"})]}),y.jsxs("div",{className:"mt-3 rounded-lg bg-indigo-50 p-3",children:[y.jsx("p",{className:"mb-1 text-[10px] text-indigo-600",children:r?"当前版本":"Current version"}),y.jsx("pre",{className:"whitespace-pre-wrap text-xs text-gray-700",children:n.prompt})]}),n.versions.map((i,o)=>y.jsxs("div",{className:"mt-2 rounded-lg border p-3",children:[y.jsx("p",{className:"mb-1 text-[10px] text-gray-400",children:r?`历史版本 ${n.versions.length-o}`:`Previous version ${n.versions.length-o}`}),y.jsx("pre",{className:"whitespace-pre-wrap text-xs text-gray-500",children:i.prompt})]},i.id))]})})}function Aa(e,n,t){const r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement("a");i.href=r,i.download=e,i.click(),URL.revokeObjectURL(r)}const Mh=[{id:"w1",category:"writing",title:{zh:"文章大纲生成",en:"Article Outline Generator"},description:{zh:"生成结构化的文章大纲",en:"Generate a structured article outline"},prompt:{zh:`请为以下主题生成一篇详细的文章大纲，包含引言、3-5个主要章节（每个章节有2-3个子要点）和结论。

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
- If appropriate, suggest photo direction (how many, what style)`},variables:["scene"],tags:[{zh:"朋友圈",en:"moments"},{zh:"微信",en:"wechat"},{zh:"生活",en:"lifestyle"}],keywords:["九宫格","配文","生活分享","日常","文案灵感"]}],Ih=[{id:"wp1",category:"workplace",title:{zh:"转正述职报告",en:"Probation Review Report"},description:{zh:"生成结构化的转正述职报告",en:"Generate a structured probation review report"},prompt:{zh:`请帮我撰写一份转正述职报告。

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

Style: Data-driven, results-oriented, 800-1200 words`},variables:["position","work_content","metrics"],tags:[{zh:"绩效",en:"performance"},{zh:"自评",en:"self-review"},{zh:"考核",en:"evaluation"}],keywords:["绩效考核","自我评价","绩效评估","考核自评","绩效面谈","KPI","review"]}],Dh=[{id:"c1",category:"coding",title:{zh:"代码审查",en:"Code Review"},description:{zh:"对代码进行专业审查",en:"Professional code review"},prompt:{zh:`你是一位资深软件工程师。请对以下代码进行审查。

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

Provide 3 candidate commit messages, from concise to detailed.`},variables:["changes"],tags:[{zh:"Git",en:"git"},{zh:"Commit",en:"commit"},{zh:"规范",en:"convention"}],keywords:["github","gitlab","gitee","提交信息","commit message","版本控制"]}],Lh=[{id:"t1",category:"translation",title:{zh:"中英互译（信达雅）",en:"CN-EN Translation (Faithful & Elegant)"},description:{zh:"高质量中英文互译，兼顾准确与流畅",en:"High-quality CN-EN translation"},prompt:{zh:`你是一位资深翻译专家，精通中英双语。请将以下文本翻译为{target_language}。

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
- For untranslatable wordplay, add a footnote explanation`},variables:["text","target_language"],tags:[{zh:"字幕",en:"subtitle"},{zh:"视频",en:"video"},{zh:"翻译",en:"translation"}]}],Fh=[{id:"m1",category:"marketing",title:{zh:"爆款标题公式",en:"Viral Headline Formulas"},description:{zh:"用经典公式生成高点击率标题",en:"Generate high-CTR headlines with proven formulas"},prompt:{zh:`你是一位资深内容营销专家。请用以下经典标题公式，为我的内容生成 10 个爆款标题。

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

Requirement: Personas should differ significantly, covering core users and potential users`},variables:["product","industry"],tags:[{zh:"用户画像",en:"user-persona"},{zh:"产品",en:"product"},{zh:"营销",en:"marketing"}]}],Oh=[{id:"a1",category:"academic",title:{zh:"论文摘要撰写",en:"Paper Abstract Writing"},description:{zh:"生成规范的学术论文摘要",en:"Generate a standard academic paper abstract"},prompt:{zh:`请根据以下论文信息，撰写一篇规范的学术摘要。

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

Requirements: Highlight key points, clear logic, balanced time allocation (methodology + results > 60%)`},variables:["title","duration","content"],tags:[{zh:"答辩",en:"defense"},{zh:"PPT",en:"ppt"},{zh:"论文",en:"paper"}]}],Bh=[{id:"an1",category:"analysis",title:{zh:"数据分析报告",en:"Data Analysis Report"},description:{zh:"将数据转化为有洞察的分析报告",en:"Transform data into insightful analysis reports"},prompt:{zh:`请根据以下数据，撰写一份数据分析报告。

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

Requirement: Combine latest trends, provide forward-looking judgment`},variables:["industry","timeframe"],tags:[{zh:"行业",en:"industry"},{zh:"趋势",en:"trend"},{zh:"机会",en:"opportunity"}]}],Uh=[{id:"cr1",category:"creative",title:{zh:"头脑风暴",en:"Brainstorming"},description:{zh:"激发创意灵感的头脑风暴",en:"Creative brainstorming session"},prompt:{zh:`请围绕以下主题进行头脑风暴，生成尽可能多的创意点子。

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
- Cover image and title suggestions (3 options)`},variables:["topic","location","duration","style"],tags:[{zh:"Vlog",en:"vlog"},{zh:"生活",en:"lifestyle"},{zh:"脚本",en:"script"}]}],Na=[...Mh,...Ih,...Dh,...Lh,...Fh,...Oh,...Bh,...Uh],Wh="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%20width='128'%20height='128'%3e%3cdefs%3e%3clinearGradient%20id='bg'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%237C3AED'/%3e%3cstop%20offset='100%25'%20stop-color='%234F46E5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='sparkle'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FDE68A'/%3e%3cstop%20offset='100%25'%20stop-color='%23F59E0B'/%3e%3c/linearGradient%3e%3c/defs%3e%3c!--%20Rounded%20square%20background%20--%3e%3crect%20x='4'%20y='4'%20width='120'%20height='120'%20rx='24'%20ry='24'%20fill='url(%23bg)'/%3e%3c!--%20Text%20cursor%20/%20prompt%20symbol%20'%3e'%20--%3e%3cpath%20d='M30%2044%20L58%2064%20L30%2084'%20stroke='white'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'%20fill='none'%20opacity='0.95'/%3e%3c!--%20Horizontal%20line%20(text%20representation)%20--%3e%3cline%20x1='66'%20y1='64'%20x2='98'%20y2='64'%20stroke='white'%20stroke-width='7'%20stroke-linecap='round'%20opacity='0.7'/%3e%3c!--%20Magic%20wand%20sparkle%20top-right%20--%3e%3cg%20fill='url(%23sparkle)'%3e%3c!--%20Main%20star%20--%3e%3cpath%20d='M96%2024%20L98.5%2031%20L106%2033.5%20L98.5%2036%20L96%2043%20L93.5%2036%20L86%2033.5%20L93.5%2031%20Z'/%3e%3c!--%20Small%20star%20--%3e%3cpath%20d='M78%2020%20L79.5%2023.5%20L83%2025%20L79.5%2026.5%20L78%2030%20L76.5%2026.5%20L73%2025%20L76.5%2023.5%20Z'/%3e%3c!--%20Tiny%20dot%20--%3e%3ccircle%20cx='104'%20cy='22'%20r='2.5'/%3e%3c/g%3e%3c/svg%3e",ao="promptpro_popup_onboarded";function $h(){const[e,n]=L.useState("en"),[t,r]=L.useState("writing"),[i,o]=L.useState(!0),[s,l]=L.useState(""),[a,u]=L.useState(!1),[d,h]=L.useState(!1),[f,g]=L.useState(null),[v,x]=L.useState(!1),[N,p]=L.useState("");L.useEffect(()=>{Zc().then(n),Jc().then(g),chrome.storage.local.get(ao).then(C=>{C[ao]||h(!0)}),chrome.storage.local.get("pendingTemplateDraft").then(C=>{typeof C.pendingTemplateDraft=="string"&&C.pendingTemplateDraft.trim()&&(p(C.pendingTemplateDraft),x(!0),chrome.storage.local.remove("pendingTemplateDraft"))})},[]),L.useEffect(()=>{const C=D=>{var X;(D.ctrlKey||D.metaKey)&&D.key.toLowerCase()==="k"&&(D.preventDefault(),(X=document.querySelector('input[placeholder*="Search"], input[placeholder*="鎼滅储"]'))==null||X.focus()),(D.ctrlKey||D.metaKey)&&D.shiftKey&&D.key.toLowerCase()==="s"&&(D.preventDefault(),x(!0))};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[]);const c=()=>{const C=e==="zh"?"en":"zh";n(C),uo({locale:C,localeSetByUser:!0})},m=C=>{r(C),o(!0)},k=C=>{l(C),C.trim()?o(!1):o(!0)},z=s.trim().length>0,E=s.trim(),P=z&&!i,w=L.useMemo(()=>new An(Na,{keys:[{name:"title.zh",weight:.3},{name:"title.en",weight:.3},{name:"keywords",weight:.25},{name:"description.zh",weight:.15},{name:"description.en",weight:.15},{name:"tags.zh",weight:.1},{name:"tags.en",weight:.1},{name:"category",weight:.05}],threshold:.3,ignoreLocation:!0,includeScore:!0}),[]),j=L.useMemo(()=>{if(!z)return Na.filter(V=>V.category===t);const D=/[一-鿿]/.test(E)?.35:E.length<=3?.15:.3,X=w.search(E).filter(V=>(V.score??1)<=D).map(V=>V.item);return i?X.filter(V=>V.category===t):X},[z,E,i,t,w]);return a?y.jsx(_h,{locale:e,onLocaleChange:C=>{n(C),uo({locale:C,localeSetByUser:!0})},onBack:()=>u(!1)}):v?y.jsx(Th,{locale:e,draft:N,onBack:()=>{x(!1),p("")}}):y.jsxs("div",{className:"flex flex-col h-full bg-gray-50",children:[y.jsxs("header",{className:"flex items-center justify-between px-4 py-3 bg-white border-b",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("img",{src:Wh,alt:"PromptPro",className:"w-7 h-7"}),y.jsx("h1",{className:"text-base font-semibold text-gray-800",children:"PromptPro"}),f!==null&&y.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded-full ${f<=3?"bg-red-50 text-red-500":"bg-gray-100 text-gray-500"}`,children:e==="zh"?`${f}次`:`${f} left`})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("button",{onClick:()=>x(!0),className:"rounded bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-600 hover:bg-indigo-100",children:e==="zh"?"我的资产":"My assets"}),y.jsx("button",{onClick:c,className:"text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-600",children:e==="zh"?"EN":"中"}),y.jsx("button",{onClick:()=>u(!0),className:"p-1.5 rounded hover:bg-gray-100 text-gray-500","aria-label":"Settings",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("circle",{cx:"12",cy:"12",r:"3"}),y.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]})]}),d&&y.jsx(Nh,{locale:e,onDismiss:()=>{h(!1),chrome.storage.local.set({[ao]:!0})}}),y.jsx("div",{className:"px-4 py-2",children:y.jsx(xh,{value:s,onChange:k,locale:e})}),y.jsx(wh,{current:t,onChange:m,locale:e,disabled:P}),y.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-2",children:y.jsx(Eh,{templates:j,locale:e,isSearching:z,isGlobalSearch:P,query:E,onCategoryClick:m})})]})}co.createRoot(document.getElementById("root")).render(y.jsx(gd.StrictMode,{children:y.jsx($h,{})}));
