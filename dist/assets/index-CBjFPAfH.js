(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fl={exports:{}},ds={},ml={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Fc=Symbol.for("react.portal"),Bc=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),Wc=Symbol.for("react.provider"),Hc=Symbol.for("react.context"),Qc=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Vc=Symbol.for("react.memo"),$c=Symbol.for("react.lazy"),Xo=Symbol.iterator;function Gc(e){return e===null||typeof e!="object"?null:(e=Xo&&e[Xo]||e["@@iterator"],typeof e=="function"?e:null)}var hl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gl=Object.assign,yl={};function mn(e,t,n){this.props=e,this.context=t,this.refs=yl,this.updater=n||hl}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vl(){}vl.prototype=mn.prototype;function Ki(e,t,n){this.props=e,this.context=t,this.refs=yl,this.updater=n||hl}var Yi=Ki.prototype=new vl;Yi.constructor=Ki;gl(Yi,mn.prototype);Yi.isPureReactComponent=!0;var Ko=Array.isArray,wl=Object.prototype.hasOwnProperty,Zi={current:null},kl={key:!0,ref:!0,__self:!0,__source:!0};function xl(e,t,n){var r,s={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)wl.call(t,r)&&!kl.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:sr,type:e,key:i,ref:o,props:s,_owner:Zi.current}}function Xc(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Kc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yo=/\/+/g;function As(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kc(""+e.key):t.toString(36)}function Tr(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sr:case Fc:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+As(o,0):r,Ko(s)?(n="",e!=null&&(n=e.replace(Yo,"$&/")+"/"),Tr(s,t,n,"",function(d){return d})):s!=null&&(eo(s)&&(s=Xc(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Yo,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",Ko(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+As(i,a);o+=Tr(i,t,n,l,s)}else if(l=Gc(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+As(i,a++),o+=Tr(i,t,n,l,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pr(e,t,n){if(e==null)return e;var r=[],s=0;return Tr(e,r,"","",function(i){return t.call(n,i,s++)}),r}function Yc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Ar={transition:null},Zc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:Zi};function bl(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=mn;j.Fragment=Bc;j.Profiler=zc;j.PureComponent=Ki;j.StrictMode=Uc;j.Suspense=Jc;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zc;j.act=bl;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gl({},e.props),s=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Zi.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)wl.call(t,l)&&!kl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:sr,type:e.type,key:s,ref:i,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:Hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wc,_context:e},e.Consumer=e};j.createElement=xl;j.createFactory=function(e){var t=xl.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:Qc,render:e}};j.isValidElement=eo;j.lazy=function(e){return{$$typeof:$c,_payload:{_status:-1,_result:e},_init:Yc}};j.memo=function(e,t){return{$$typeof:Vc,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};j.unstable_act=bl;j.useCallback=function(e,t){return fe.current.useCallback(e,t)};j.useContext=function(e){return fe.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};j.useEffect=function(e,t){return fe.current.useEffect(e,t)};j.useId=function(){return fe.current.useId()};j.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return fe.current.useMemo(e,t)};j.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};j.useRef=function(e){return fe.current.useRef(e)};j.useState=function(e){return fe.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return fe.current.useTransition()};j.version="18.3.1";ml.exports=j;var A=ml.exports;const ed=Mc(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td=A,nd=Symbol.for("react.element"),rd=Symbol.for("react.fragment"),sd=Object.prototype.hasOwnProperty,id=td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,od={key:!0,ref:!0,__self:!0,__source:!0};function Sl(e,t,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)sd.call(t,r)&&!od.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:nd,type:e,key:i,ref:o,props:s,_owner:id.current}}ds.Fragment=rd;ds.jsx=Sl;ds.jsxs=Sl;fl.exports=ds;var u=fl.exports,ri={},_l={exports:{}},Ee={},El={exports:{}},Cl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,R){var N=E.length;E.push(R);e:for(;0<N;){var $=N-1>>>1,te=E[$];if(0<s(te,R))E[$]=R,E[N]=te,N=$;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var R=E[0],N=E.pop();if(N!==R){E[0]=N;e:for(var $=0,te=E.length,cr=te>>>1;$<cr;){var Et=2*($+1)-1,Ts=E[Et],Ct=Et+1,dr=E[Ct];if(0>s(Ts,N))Ct<te&&0>s(dr,Ts)?(E[$]=dr,E[Ct]=N,$=Ct):(E[$]=Ts,E[Et]=N,$=Et);else if(Ct<te&&0>s(dr,N))E[$]=dr,E[Ct]=N,$=Ct;else break e}}return R}function s(E,R){var N=E.sortIndex-R.sortIndex;return N!==0?N:E.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],d=[],y=1,g=null,h=3,k=!1,x=!1,b=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var R=n(d);R!==null;){if(R.callback===null)r(d);else if(R.startTime<=E)r(d),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(d)}}function v(E){if(b=!1,m(E),!x)if(n(l)!==null)x=!0,Ps(_);else{var R=n(d);R!==null&&Is(v,R.startTime-E)}}function _(E,R){x=!1,b&&(b=!1,f(T),T=-1),k=!0;var N=h;try{for(m(R),g=n(l);g!==null&&(!(g.expirationTime>R)||E&&!je());){var $=g.callback;if(typeof $=="function"){g.callback=null,h=g.priorityLevel;var te=$(g.expirationTime<=R);R=e.unstable_now(),typeof te=="function"?g.callback=te:g===n(l)&&r(l),m(R)}else r(l);g=n(l)}if(g!==null)var cr=!0;else{var Et=n(d);Et!==null&&Is(v,Et.startTime-R),cr=!1}return cr}finally{g=null,h=N,k=!1}}var P=!1,I=null,T=-1,V=5,q=-1;function je(){return!(e.unstable_now()-q<V)}function yn(){if(I!==null){var E=e.unstable_now();q=E;var R=!0;try{R=I(!0,E)}finally{R?vn():(P=!1,I=null)}}else P=!1}var vn;if(typeof p=="function")vn=function(){p(yn)};else if(typeof MessageChannel<"u"){var Go=new MessageChannel,Oc=Go.port2;Go.port1.onmessage=yn,vn=function(){Oc.postMessage(null)}}else vn=function(){O(yn,0)};function Ps(E){I=E,P||(P=!0,vn())}function Is(E,R){T=O(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,Ps(_))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var N=h;h=R;try{return E()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var N=h;h=E;try{return R()}finally{h=N}},e.unstable_scheduleCallback=function(E,R,N){var $=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?$+N:$):N=$,E){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=N+te,E={id:y++,callback:R,priorityLevel:E,startTime:N,expirationTime:te,sortIndex:-1},N>$?(E.sortIndex=N,t(d,E),n(l)===null&&E===n(d)&&(b?(f(T),T=-1):b=!0,Is(v,N-$))):(E.sortIndex=te,t(l,E),x||k||(x=!0,Ps(_))),E},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(E){var R=h;return function(){var N=h;h=R;try{return E.apply(this,arguments)}finally{h=N}}}})(Cl);El.exports=Cl;var ad=El.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=A,_e=ad;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pl=new Set,Bn={};function Ft(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Pl.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=Object.prototype.hasOwnProperty,ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zo={},ea={};function cd(e){return si.call(ea,e)?!0:si.call(Zo,e)?!1:ud.test(e)?ea[e]=!0:(Zo[e]=!0,!1)}function dd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pd(e,t,n,r){if(t===null||typeof t>"u"||dd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,s,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var to=/[\-:]([a-z])/g;function no(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(to,no);oe[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(to,no);oe[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(to,no);oe[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function ro(e,t,n,r){var s=oe.hasOwnProperty(t)?oe[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pd(t,n,s,r)&&(n=null),r||s===null?cd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),zt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),so=Symbol.for("react.strict_mode"),ii=Symbol.for("react.profiler"),Il=Symbol.for("react.provider"),Tl=Symbol.for("react.context"),io=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),ai=Symbol.for("react.suspense_list"),oo=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),Al=Symbol.for("react.offscreen"),ta=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Rs;function Pn(e){if(Rs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rs=t&&t[1]||""}return`
`+Rs+e}var Ns=!1;function js(e,t){if(!e||Ns)return"";Ns=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ns=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function fd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=js(e.type,!1),e;case 11:return e=js(e.type.render,!1),e;case 1:return e=js(e.type,!0),e;default:return""}}function li(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case zt:return"Portal";case ii:return"Profiler";case so:return"StrictMode";case oi:return"Suspense";case ai:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tl:return(e.displayName||"Context")+".Consumer";case Il:return(e._context.displayName||"Context")+".Provider";case io:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oo:return t=e.displayName||null,t!==null?t:li(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return li(e(t))}catch{}}return null}function md(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return li(t);case 8:return t===so?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hd(e){var t=Rl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){e._valueTracker||(e._valueTracker=hd(e))}function Nl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ui(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function na(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jl(e,t){t=t.checked,t!=null&&ro(e,"checked",t,!1)}function ci(e,t){jl(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?di(e,t.type,n):t.hasOwnProperty("defaultValue")&&di(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ra(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function di(e,t,n){(t!=="number"||Ur(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function pi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(In(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function ql(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hr,Ll=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gd=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Ol(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function Ml(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ol(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var yd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mi(e,t){if(t){if(yd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function hi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gi=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yi=null,tn=null,nn=null;function oa(e){if(e=ar(e)){if(typeof yi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=gs(t),yi(e.stateNode,e.type,t))}}function Fl(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Bl(){if(tn){var e=tn,t=nn;if(nn=tn=null,oa(e),t)for(e=0;e<t.length;e++)oa(t[e])}}function Ul(e,t){return e(t)}function zl(){}var qs=!1;function Wl(e,t,n){if(qs)return e(t,n);qs=!0;try{return Ul(e,t,n)}finally{qs=!1,(tn!==null||nn!==null)&&(zl(),Bl())}}function zn(e,t){var n=e.stateNode;if(n===null)return null;var r=gs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var vi=!1;if(Ze)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){vi=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{vi=!1}function vd(e,t,n,r,s,i,o,a,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Nn=!1,zr=null,Wr=!1,wi=null,wd={onError:function(e){Nn=!0,zr=e}};function kd(e,t,n,r,s,i,o,a,l){Nn=!1,zr=null,vd.apply(wd,arguments)}function xd(e,t,n,r,s,i,o,a,l){if(kd.apply(this,arguments),Nn){if(Nn){var d=zr;Nn=!1,zr=null}else throw Error(w(198));Wr||(Wr=!0,wi=d)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function aa(e){if(Bt(e)!==e)throw Error(w(188))}function bd(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return aa(s),e;if(i===r)return aa(s),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Ql(e){return e=bd(e),e!==null?Jl(e):null}function Jl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jl(e);if(t!==null)return t;e=e.sibling}return null}var Vl=_e.unstable_scheduleCallback,la=_e.unstable_cancelCallback,Sd=_e.unstable_shouldYield,_d=_e.unstable_requestPaint,G=_e.unstable_now,Ed=_e.unstable_getCurrentPriorityLevel,lo=_e.unstable_ImmediatePriority,$l=_e.unstable_UserBlockingPriority,Hr=_e.unstable_NormalPriority,Cd=_e.unstable_LowPriority,Gl=_e.unstable_IdlePriority,ps=null,Je=null;function Pd(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(ps,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Ad,Id=Math.log,Td=Math.LN2;function Ad(e){return e>>>=0,e===0?32:31-(Id(e)/Td|0)|0}var gr=64,yr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Tn(a):(i&=o,i!==0&&(r=Tn(i)))}else o=n&~s,o!==0?r=Tn(o):i!==0&&(r=Tn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),s=1<<n,r|=e[n],t&=~s;return r}function Rd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Fe(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=Rd(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xl(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function Ds(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function jd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Fe(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function uo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var L=0;function Kl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yl,co,Zl,eu,tu,xi=!1,vr=[],pt=null,ft=null,mt=null,Wn=new Map,Hn=new Map,lt=[],qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ua(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function xn(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=ar(t),t!==null&&co(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Dd(e,t,n,r,s){switch(t){case"focusin":return pt=xn(pt,e,t,n,r,s),!0;case"dragenter":return ft=xn(ft,e,t,n,r,s),!0;case"mouseover":return mt=xn(mt,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Wn.set(i,xn(Wn.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Hn.set(i,xn(Hn.get(i)||null,e,t,n,r,s)),!0}return!1}function nu(e){var t=Tt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Hl(n),t!==null){e.blockedOn=t,tu(e.priority,function(){Zl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gi=r,n.target.dispatchEvent(r),gi=null}else return t=ar(n),t!==null&&co(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){Rr(e)&&n.delete(t)}function Ld(){xi=!1,pt!==null&&Rr(pt)&&(pt=null),ft!==null&&Rr(ft)&&(ft=null),mt!==null&&Rr(mt)&&(mt=null),Wn.forEach(ca),Hn.forEach(ca)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,xi||(xi=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Ld)))}function Qn(e){function t(s){return bn(s,e)}if(0<vr.length){bn(vr[0],e);for(var n=1;n<vr.length;n++){var r=vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&bn(pt,e),ft!==null&&bn(ft,e),mt!==null&&bn(mt,e),Wn.forEach(t),Hn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)nu(n),n.blockedOn===null&&lt.shift()}var rn=rt.ReactCurrentBatchConfig,Jr=!0;function Od(e,t,n,r){var s=L,i=rn.transition;rn.transition=null;try{L=1,po(e,t,n,r)}finally{L=s,rn.transition=i}}function Md(e,t,n,r){var s=L,i=rn.transition;rn.transition=null;try{L=4,po(e,t,n,r)}finally{L=s,rn.transition=i}}function po(e,t,n,r){if(Jr){var s=bi(e,t,n,r);if(s===null)Qs(e,t,r,Vr,n),ua(e,r);else if(Dd(s,e,t,n,r))r.stopPropagation();else if(ua(e,r),t&4&&-1<qd.indexOf(e)){for(;s!==null;){var i=ar(s);if(i!==null&&Yl(i),i=bi(e,t,n,r),i===null&&Qs(e,t,r,Vr,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Qs(e,t,r,null,n)}}var Vr=null;function bi(e,t,n,r){if(Vr=null,e=ao(r),e=Tt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ed()){case lo:return 1;case $l:return 4;case Hr:case Cd:return 16;case Gl:return 536870912;default:return 16}default:return 16}}var ct=null,fo=null,Nr=null;function su(){if(Nr)return Nr;var e,t=fo,n=t.length,r,s="value"in ct?ct.value:ct.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[i-r];r++);return Nr=s.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function da(){return!1}function Ce(e){function t(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wr:da,this.isPropagationStopped=da,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mo=Ce(hn),or=Q({},hn,{view:0,detail:0}),Fd=Ce(or),Ls,Os,Sn,fs=Q({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Ls=e.screenX-Sn.screenX,Os=e.screenY-Sn.screenY):Os=Ls=0,Sn=e),Ls)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),pa=Ce(fs),Bd=Q({},fs,{dataTransfer:0}),Ud=Ce(Bd),zd=Q({},or,{relatedTarget:0}),Ms=Ce(zd),Wd=Q({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=Ce(Wd),Qd=Q({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=Ce(Qd),Vd=Q({},hn,{data:0}),fa=Ce(Vd),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xd[e])?!!t[e]:!1}function ho(){return Kd}var Yd=Q({},or,{key:function(e){if(e.key){var t=$d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Ce(Yd),ep=Q({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ma=Ce(ep),tp=Q({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),np=Ce(tp),rp=Q({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sp=Ce(rp),ip=Q({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),op=Ce(ip),ap=[9,13,27,32],go=Ze&&"CompositionEvent"in window,jn=null;Ze&&"documentMode"in document&&(jn=document.documentMode);var lp=Ze&&"TextEvent"in window&&!jn,iu=Ze&&(!go||jn&&8<jn&&11>=jn),ha=" ",ga=!1;function ou(e,t){switch(e){case"keyup":return ap.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function up(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(ga=!0,ha);case"textInput":return e=t.data,e===ha&&ga?null:e;default:return null}}function cp(e,t){if(Ht)return e==="compositionend"||!go&&ou(e,t)?(e=su(),Nr=fo=ct=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return iu&&t.locale!=="ko"?null:t.data;default:return null}}var dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dp[e.type]:t==="textarea"}function lu(e,t,n,r){Fl(r),t=$r(t,"onChange"),0<t.length&&(n=new mo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Jn=null;function pp(e){wu(e,0)}function ms(e){var t=Vt(e);if(Nl(t))return e}function fp(e,t){if(e==="change")return t}var uu=!1;if(Ze){var Fs;if(Ze){var Bs="oninput"in document;if(!Bs){var va=document.createElement("div");va.setAttribute("oninput","return;"),Bs=typeof va.oninput=="function"}Fs=Bs}else Fs=!1;uu=Fs&&(!document.documentMode||9<document.documentMode)}function wa(){qn&&(qn.detachEvent("onpropertychange",cu),Jn=qn=null)}function cu(e){if(e.propertyName==="value"&&ms(Jn)){var t=[];lu(t,Jn,e,ao(e)),Wl(pp,t)}}function mp(e,t,n){e==="focusin"?(wa(),qn=t,Jn=n,qn.attachEvent("onpropertychange",cu)):e==="focusout"&&wa()}function hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ms(Jn)}function gp(e,t){if(e==="click")return ms(t)}function yp(e,t){if(e==="input"||e==="change")return ms(t)}function vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:vp;function Vn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!si.call(t,s)||!Ue(e[s],t[s]))return!1}return!0}function ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xa(e,t){var n=ka(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ka(n)}}function du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pu(){for(var e=window,t=Ur();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ur(e.document)}return t}function yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wp(e){var t=pu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&du(n.ownerDocument.documentElement,n)){if(r!==null&&yo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=xa(n,i);var o=xa(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kp=Ze&&"documentMode"in document&&11>=document.documentMode,Qt=null,Si=null,Dn=null,_i=!1;function ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_i||Qt==null||Qt!==Ur(r)||(r=Qt,"selectionStart"in r&&yo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Vn(Dn,r)||(Dn=r,r=$r(Si,"onSelect"),0<r.length&&(t=new mo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Us={},fu={};Ze&&(fu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function hs(e){if(Us[e])return Us[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fu)return Us[e]=t[n];return e}var mu=hs("animationend"),hu=hs("animationiteration"),gu=hs("animationstart"),yu=hs("transitionend"),vu=new Map,Sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){vu.set(e,t),Ft(t,[e])}for(var zs=0;zs<Sa.length;zs++){var Ws=Sa[zs],xp=Ws.toLowerCase(),bp=Ws[0].toUpperCase()+Ws.slice(1);bt(xp,"on"+bp)}bt(mu,"onAnimationEnd");bt(hu,"onAnimationIteration");bt(gu,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(yu,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xd(r,t,void 0,e),e.currentTarget=null}function wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;_a(s,a,d),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,d=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;_a(s,a,d),i=l}}}if(Wr)throw e=wi,Wr=!1,wi=null,e}function B(e,t){var n=t[Ti];n===void 0&&(n=t[Ti]=new Set);var r=e+"__bubble";n.has(r)||(ku(t,e,2,!1),n.add(r))}function Hs(e,t,n){var r=0;t&&(r|=4),ku(n,e,r,t)}var xr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[xr]){e[xr]=!0,Pl.forEach(function(n){n!=="selectionchange"&&(Sp.has(n)||Hs(n,!1,e),Hs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xr]||(t[xr]=!0,Hs("selectionchange",!1,t))}}function ku(e,t,n,r){switch(ru(t)){case 1:var s=Od;break;case 4:s=Md;break;default:s=po}n=s.bind(null,t,n,e),s=void 0,!vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Qs(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Tt(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Wl(function(){var d=i,y=ao(n),g=[];e:{var h=vu.get(e);if(h!==void 0){var k=mo,x=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":k=Zd;break;case"focusin":x="focus",k=Ms;break;case"focusout":x="blur",k=Ms;break;case"beforeblur":case"afterblur":k=Ms;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=np;break;case mu:case hu:case gu:k=Hd;break;case yu:k=sp;break;case"scroll":k=Fd;break;case"wheel":k=op;break;case"copy":case"cut":case"paste":k=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ma}var b=(t&4)!==0,O=!b&&e==="scroll",f=b?h!==null?h+"Capture":null:h;b=[];for(var p=d,m;p!==null;){m=p;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=zn(p,f),v!=null&&b.push(Gn(p,v,m)))),O)break;p=p.return}0<b.length&&(h=new k(h,x,null,n,y),g.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==gi&&(x=n.relatedTarget||n.fromElement)&&(Tt(x)||x[et]))break e;if((k||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=d,x=x?Tt(x):null,x!==null&&(O=Bt(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=d),k!==x)){if(b=pa,v="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=ma,v="onPointerLeave",f="onPointerEnter",p="pointer"),O=k==null?h:Vt(k),m=x==null?h:Vt(x),h=new b(v,p+"leave",k,n,y),h.target=O,h.relatedTarget=m,v=null,Tt(y)===d&&(b=new b(f,p+"enter",x,n,y),b.target=m,b.relatedTarget=O,v=b),O=v,k&&x)t:{for(b=k,f=x,p=0,m=b;m;m=Ut(m))p++;for(m=0,v=f;v;v=Ut(v))m++;for(;0<p-m;)b=Ut(b),p--;for(;0<m-p;)f=Ut(f),m--;for(;p--;){if(b===f||f!==null&&b===f.alternate)break t;b=Ut(b),f=Ut(f)}b=null}else b=null;k!==null&&Ea(g,h,k,b,!1),x!==null&&O!==null&&Ea(g,O,x,b,!0)}}e:{if(h=d?Vt(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var _=fp;else if(ya(h))if(uu)_=yp;else{_=hp;var P=mp}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=gp);if(_&&(_=_(e,d))){lu(g,_,n,y);break e}P&&P(e,h,d),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&di(h,"number",h.value)}switch(P=d?Vt(d):window,e){case"focusin":(ya(P)||P.contentEditable==="true")&&(Qt=P,Si=d,Dn=null);break;case"focusout":Dn=Si=Qt=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,ba(g,n,y);break;case"selectionchange":if(kp)break;case"keydown":case"keyup":ba(g,n,y)}var I;if(go)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ht?ou(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(iu&&n.locale!=="ko"&&(Ht||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ht&&(I=su()):(ct=y,fo="value"in ct?ct.value:ct.textContent,Ht=!0)),P=$r(d,T),0<P.length&&(T=new fa(T,e,null,n,y),g.push({event:T,listeners:P}),I?T.data=I:(I=au(n),I!==null&&(T.data=I)))),(I=lp?up(e,n):cp(e,n))&&(d=$r(d,"onBeforeInput"),0<d.length&&(y=new fa("onBeforeInput","beforeinput",null,n,y),g.push({event:y,listeners:d}),y.data=I))}wu(g,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=zn(e,n),i!=null&&r.unshift(Gn(e,i,s)),i=zn(e,t),i!=null&&r.push(Gn(e,i,s))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ea(e,t,n,r,s){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,s?(l=zn(n,i),l!=null&&o.unshift(Gn(n,l,a))):s||(l=zn(n,i),l!=null&&o.push(Gn(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _p=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function Ca(e){return(typeof e=="string"?e:""+e).replace(_p,`
`).replace(Ep,"")}function br(e,t,n){if(t=Ca(t),Ca(e)!==t&&n)throw Error(w(425))}function Gr(){}var Ei=null,Ci=null;function Pi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ii=typeof setTimeout=="function"?setTimeout:void 0,Cp=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,Pp=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(Ip)}:Ii;function Ip(e){setTimeout(function(){throw e})}function Js(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Qn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ia(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+gn,Xn="__reactProps$"+gn,et="__reactContainer$"+gn,Ti="__reactEvents$"+gn,Tp="__reactListeners$"+gn,Ap="__reactHandles$"+gn;function Tt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[et]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ia(e);e!==null;){if(n=e[Qe])return n;e=Ia(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Qe]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function gs(e){return e[Xn]||null}var Ai=[],$t=-1;function St(e){return{current:e}}function U(e){0>$t||(e.current=Ai[$t],Ai[$t]=null,$t--)}function F(e,t){$t++,Ai[$t]=e.current,e.current=t}var xt={},ce=St(xt),ye=St(!1),qt=xt;function ln(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ve(e){return e=e.childContextTypes,e!=null}function Xr(){U(ye),U(ce)}function Ta(e,t,n){if(ce.current!==xt)throw Error(w(168));F(ce,t),F(ye,n)}function xu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(w(108,md(e)||"Unknown",s));return Q({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,qt=ce.current,F(ce,e),F(ye,ye.current),!0}function Aa(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=xu(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,U(ye),U(ce),F(ce,e)):U(ye),F(ye,n)}var Ge=null,ys=!1,Vs=!1;function bu(e){Ge===null?Ge=[e]:Ge.push(e)}function Rp(e){ys=!0,bu(e)}function _t(){if(!Vs&&Ge!==null){Vs=!0;var e=0,t=L;try{var n=Ge;for(L=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,ys=!1}catch(s){throw Ge!==null&&(Ge=Ge.slice(e+1)),Vl(lo,_t),s}finally{L=t,Vs=!1}}return null}var Gt=[],Xt=0,Yr=null,Zr=0,Pe=[],Ie=0,Dt=null,Xe=1,Ke="";function Pt(e,t){Gt[Xt++]=Zr,Gt[Xt++]=Yr,Yr=e,Zr=t}function Su(e,t,n){Pe[Ie++]=Xe,Pe[Ie++]=Ke,Pe[Ie++]=Dt,Dt=e;var r=Xe;e=Ke;var s=32-Fe(r)-1;r&=~(1<<s),n+=1;var i=32-Fe(t)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Xe=1<<32-Fe(t)+s|n<<s|r,Ke=i+e}else Xe=1<<i|n<<s|r,Ke=e}function vo(e){e.return!==null&&(Pt(e,1),Su(e,1,0))}function wo(e){for(;e===Yr;)Yr=Gt[--Xt],Gt[Xt]=null,Zr=Gt[--Xt],Gt[Xt]=null;for(;e===Dt;)Dt=Pe[--Ie],Pe[Ie]=null,Ke=Pe[--Ie],Pe[Ie]=null,Xe=Pe[--Ie],Pe[Ie]=null}var Se=null,be=null,z=!1,Oe=null;function _u(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ra(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,be=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:Xe,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,be=null,!0):!1;default:return!1}}function Ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ni(e){if(z){var t=be;if(t){var n=t;if(!Ra(e,t)){if(Ri(e))throw Error(w(418));t=ht(n.nextSibling);var r=Se;t&&Ra(e,t)?_u(r,n):(e.flags=e.flags&-4097|2,z=!1,Se=e)}}else{if(Ri(e))throw Error(w(418));e.flags=e.flags&-4097|2,z=!1,Se=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Sr(e){if(e!==Se)return!1;if(!z)return Na(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pi(e.type,e.memoizedProps)),t&&(t=be)){if(Ri(e))throw Eu(),Error(w(418));for(;t;)_u(e,t),t=ht(t.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Se?ht(e.stateNode.nextSibling):null;return!0}function Eu(){for(var e=be;e;)e=ht(e.nextSibling)}function un(){be=Se=null,z=!1}function ko(e){Oe===null?Oe=[e]:Oe.push(e)}var Np=rt.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ja(e){var t=e._init;return t(e._payload)}function Cu(e){function t(f,p){if(e){var m=f.deletions;m===null?(f.deletions=[p],f.flags|=16):m.push(p)}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function s(f,p){return f=wt(f,p),f.index=0,f.sibling=null,f}function i(f,p,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags|=2,p):m):(f.flags|=2,p)):(f.flags|=1048576,p)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,p,m,v){return p===null||p.tag!==6?(p=ei(m,f.mode,v),p.return=f,p):(p=s(p,m),p.return=f,p)}function l(f,p,m,v){var _=m.type;return _===Wt?y(f,p,m.props.children,v,m.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ot&&ja(_)===p.type)?(v=s(p,m.props),v.ref=_n(f,p,m),v.return=f,v):(v=Br(m.type,m.key,m.props,null,f.mode,v),v.ref=_n(f,p,m),v.return=f,v)}function d(f,p,m,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=ti(m,f.mode,v),p.return=f,p):(p=s(p,m.children||[]),p.return=f,p)}function y(f,p,m,v,_){return p===null||p.tag!==7?(p=jt(m,f.mode,v,_),p.return=f,p):(p=s(p,m),p.return=f,p)}function g(f,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ei(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fr:return m=Br(p.type,p.key,p.props,null,f.mode,m),m.ref=_n(f,null,p),m.return=f,m;case zt:return p=ti(p,f.mode,m),p.return=f,p;case ot:var v=p._init;return g(f,v(p._payload),m)}if(In(p)||wn(p))return p=jt(p,f.mode,m,null),p.return=f,p;_r(f,p)}return null}function h(f,p,m,v){var _=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:a(f,p,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fr:return m.key===_?l(f,p,m,v):null;case zt:return m.key===_?d(f,p,m,v):null;case ot:return _=m._init,h(f,p,_(m._payload),v)}if(In(m)||wn(m))return _!==null?null:y(f,p,m,v,null);_r(f,m)}return null}function k(f,p,m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,a(p,f,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fr:return f=f.get(v.key===null?m:v.key)||null,l(p,f,v,_);case zt:return f=f.get(v.key===null?m:v.key)||null,d(p,f,v,_);case ot:var P=v._init;return k(f,p,m,P(v._payload),_)}if(In(v)||wn(v))return f=f.get(m)||null,y(p,f,v,_,null);_r(p,v)}return null}function x(f,p,m,v){for(var _=null,P=null,I=p,T=p=0,V=null;I!==null&&T<m.length;T++){I.index>T?(V=I,I=null):V=I.sibling;var q=h(f,I,m[T],v);if(q===null){I===null&&(I=V);break}e&&I&&q.alternate===null&&t(f,I),p=i(q,p,T),P===null?_=q:P.sibling=q,P=q,I=V}if(T===m.length)return n(f,I),z&&Pt(f,T),_;if(I===null){for(;T<m.length;T++)I=g(f,m[T],v),I!==null&&(p=i(I,p,T),P===null?_=I:P.sibling=I,P=I);return z&&Pt(f,T),_}for(I=r(f,I);T<m.length;T++)V=k(I,f,T,m[T],v),V!==null&&(e&&V.alternate!==null&&I.delete(V.key===null?T:V.key),p=i(V,p,T),P===null?_=V:P.sibling=V,P=V);return e&&I.forEach(function(je){return t(f,je)}),z&&Pt(f,T),_}function b(f,p,m,v){var _=wn(m);if(typeof _!="function")throw Error(w(150));if(m=_.call(m),m==null)throw Error(w(151));for(var P=_=null,I=p,T=p=0,V=null,q=m.next();I!==null&&!q.done;T++,q=m.next()){I.index>T?(V=I,I=null):V=I.sibling;var je=h(f,I,q.value,v);if(je===null){I===null&&(I=V);break}e&&I&&je.alternate===null&&t(f,I),p=i(je,p,T),P===null?_=je:P.sibling=je,P=je,I=V}if(q.done)return n(f,I),z&&Pt(f,T),_;if(I===null){for(;!q.done;T++,q=m.next())q=g(f,q.value,v),q!==null&&(p=i(q,p,T),P===null?_=q:P.sibling=q,P=q);return z&&Pt(f,T),_}for(I=r(f,I);!q.done;T++,q=m.next())q=k(I,f,T,q.value,v),q!==null&&(e&&q.alternate!==null&&I.delete(q.key===null?T:q.key),p=i(q,p,T),P===null?_=q:P.sibling=q,P=q);return e&&I.forEach(function(yn){return t(f,yn)}),z&&Pt(f,T),_}function O(f,p,m,v){if(typeof m=="object"&&m!==null&&m.type===Wt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fr:e:{for(var _=m.key,P=p;P!==null;){if(P.key===_){if(_=m.type,_===Wt){if(P.tag===7){n(f,P.sibling),p=s(P,m.props.children),p.return=f,f=p;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ot&&ja(_)===P.type){n(f,P.sibling),p=s(P,m.props),p.ref=_n(f,P,m),p.return=f,f=p;break e}n(f,P);break}else t(f,P);P=P.sibling}m.type===Wt?(p=jt(m.props.children,f.mode,v,m.key),p.return=f,f=p):(v=Br(m.type,m.key,m.props,null,f.mode,v),v.ref=_n(f,p,m),v.return=f,f=v)}return o(f);case zt:e:{for(P=m.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=s(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=ti(m,f.mode,v),p.return=f,f=p}return o(f);case ot:return P=m._init,O(f,p,P(m._payload),v)}if(In(m))return x(f,p,m,v);if(wn(m))return b(f,p,m,v);_r(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=s(p,m),p.return=f,f=p):(n(f,p),p=ei(m,f.mode,v),p.return=f,f=p),o(f)):n(f,p)}return O}var cn=Cu(!0),Pu=Cu(!1),es=St(null),ts=null,Kt=null,xo=null;function bo(){xo=Kt=ts=null}function So(e){var t=es.current;U(es),e._currentValue=t}function ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){ts=e,xo=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(xo!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(ts===null)throw Error(w(308));Kt=e,ts.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var At=null;function _o(e){At===null?At=[e]:At.push(e)}function Iu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,_o(t)):(n.next=s.next,s.next=n),t.interleaved=n,tt(e,r)}function tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,tt(e,n)}return s=r.interleaved,s===null?(t.next=t,_o(r)):(t.next=s.next,s.next=t),r.interleaved=t,tt(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uo(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ns(e,t,n,r){var s=e.updateQueue;at=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,d=l.next;l.next=null,o===null?i=d:o.next=d,o=l;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==o&&(a===null?y.firstBaseUpdate=d:a.next=d,y.lastBaseUpdate=l))}if(i!==null){var g=s.baseState;o=0,y=d=l=null,a=i;do{var h=a.lane,k=a.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,b=a;switch(h=t,k=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){g=x.call(k,g,h);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,h=typeof x=="function"?x.call(k,g,h):x,h==null)break e;g=Q({},g,h);break e;case 2:at=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[a]:h.push(a))}else k={eventTime:k,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(d=y=k,l=g):y=y.next=k,o|=h;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;h=a,a=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(y===null&&(l=g),s.baseState=l,s.firstBaseUpdate=d,s.lastBaseUpdate=y,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Ot|=o,e.lanes=o,e.memoizedState=g}}function Da(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(w(191,s));s.call(r)}}}var lr={},Ve=St(lr),Kn=St(lr),Yn=St(lr);function Rt(e){if(e===lr)throw Error(w(174));return e}function Co(e,t){switch(F(Yn,t),F(Kn,e),F(Ve,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fi(t,e)}U(Ve),F(Ve,t)}function dn(){U(Ve),U(Kn),U(Yn)}function Au(e){Rt(Yn.current);var t=Rt(Ve.current),n=fi(t,e.type);t!==n&&(F(Kn,e),F(Ve,n))}function Po(e){Kn.current===e&&(U(Ve),U(Kn))}var W=St(0);function rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $s=[];function Io(){for(var e=0;e<$s.length;e++)$s[e]._workInProgressVersionPrimary=null;$s.length=0}var Dr=rt.ReactCurrentDispatcher,Gs=rt.ReactCurrentBatchConfig,Lt=0,H=null,Z=null,ne=null,ss=!1,Ln=!1,Zn=0,jp=0;function ae(){throw Error(w(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Ao(e,t,n,r,s,i){if(Lt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dr.current=e===null||e.memoizedState===null?Op:Mp,e=n(r,s),Ln){i=0;do{if(Ln=!1,Zn=0,25<=i)throw Error(w(301));i+=1,ne=Z=null,t.updateQueue=null,Dr.current=Fp,e=n(r,s)}while(Ln)}if(Dr.current=is,t=Z!==null&&Z.next!==null,Lt=0,ne=Z=H=null,ss=!1,t)throw Error(w(300));return e}function Ro(){var e=Zn!==0;return Zn=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?H.memoizedState=ne=e:ne=ne.next=e,ne}function Ne(){if(Z===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ne===null?H.memoizedState:ne.next;if(t!==null)ne=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?H.memoizedState=ne=e:ne=ne.next=e}return ne}function er(e,t){return typeof t=="function"?t(e):t}function Xs(e){var t=Ne(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Z,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,d=i;do{var y=d.lane;if((Lt&y)===y)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=g,o=r):l=l.next=g,H.lanes|=y,Ot|=y}d=d.next}while(d!==null&&d!==i);l===null?o=r:l.next=a,Ue(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,H.lanes|=i,Ot|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ks(e){var t=Ne(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=e(i,o.action),o=o.next;while(o!==s);Ue(i,t.memoizedState)||(ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ru(){}function Nu(e,t){var n=H,r=Ne(),s=t(),i=!Ue(r.memoizedState,s);if(i&&(r.memoizedState=s,ge=!0),r=r.queue,No(Du.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,tr(9,qu.bind(null,n,r,s,t),void 0,null),re===null)throw Error(w(349));Lt&30||ju(n,t,s)}return s}function ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qu(e,t,n,r){t.value=n,t.getSnapshot=r,Lu(t)&&Ou(e)}function Du(e,t,n){return n(function(){Lu(t)&&Ou(e)})}function Lu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function Ou(e){var t=tt(e,1);t!==null&&Be(t,e,1,-1)}function La(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=Lp.bind(null,H,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mu(){return Ne().memoizedState}function Lr(e,t,n,r){var s=He();H.flags|=e,s.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function vs(e,t,n,r){var s=Ne();r=r===void 0?null:r;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,r!==null&&To(r,o.deps)){s.memoizedState=tr(t,n,i,r);return}}H.flags|=e,s.memoizedState=tr(1|t,n,i,r)}function Oa(e,t){return Lr(8390656,8,e,t)}function No(e,t){return vs(2048,8,e,t)}function Fu(e,t){return vs(4,2,e,t)}function Bu(e,t){return vs(4,4,e,t)}function Uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zu(e,t,n){return n=n!=null?n.concat([e]):null,vs(4,4,Uu.bind(null,t,e),n)}function jo(){}function Wu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qu(e,t,n){return Lt&21?(Ue(n,t)||(n=Xl(),H.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function qp(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var r=Gs.transition;Gs.transition={};try{e(!1),t()}finally{L=n,Gs.transition=r}}function Ju(){return Ne().memoizedState}function Dp(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vu(e))$u(t,n);else if(n=Iu(e,t,n,r),n!==null){var s=pe();Be(n,e,r,s),Gu(n,t,r)}}function Lp(e,t,n){var r=vt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))$u(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Ue(a,o)){var l=t.interleaved;l===null?(s.next=s,_o(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}n=Iu(e,t,s,r),n!==null&&(s=pe(),Be(n,e,r,s),Gu(n,t,r))}}function Vu(e){var t=e.alternate;return e===H||t!==null&&t===H}function $u(e,t){Ln=ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uo(e,n)}}var is={readContext:Re,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Op={readContext:Re,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Oa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,Uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dp.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:La,useDebugValue:jo,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=La(!1),t=e[0];return e=qp.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,s=He();if(z){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),re===null)throw Error(w(349));Lt&30||ju(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Oa(Du.bind(null,r,i,e),[e]),r.flags|=2048,tr(9,qu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=He(),t=re.identifierPrefix;if(z){var n=Ke,r=Xe;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mp={readContext:Re,useCallback:Wu,useContext:Re,useEffect:No,useImperativeHandle:zu,useInsertionEffect:Fu,useLayoutEffect:Bu,useMemo:Hu,useReducer:Xs,useRef:Mu,useState:function(){return Xs(er)},useDebugValue:jo,useDeferredValue:function(e){var t=Ne();return Qu(t,Z.memoizedState,e)},useTransition:function(){var e=Xs(er)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Ru,useSyncExternalStore:Nu,useId:Ju,unstable_isNewReconciler:!1},Fp={readContext:Re,useCallback:Wu,useContext:Re,useEffect:No,useImperativeHandle:zu,useInsertionEffect:Fu,useLayoutEffect:Bu,useMemo:Hu,useReducer:Ks,useRef:Mu,useState:function(){return Ks(er)},useDebugValue:jo,useDeferredValue:function(e){var t=Ne();return Z===null?t.memoizedState=e:Qu(t,Z.memoizedState,e)},useTransition:function(){var e=Ks(er)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Ru,useSyncExternalStore:Nu,useId:Ju,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),s=vt(e),i=Ye(r,s);i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,s),t!==null&&(Be(t,e,s,r),qr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),s=vt(e),i=Ye(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,s),t!==null&&(Be(t,e,s,r),qr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=vt(e),s=Ye(n,r);s.tag=2,t!=null&&(s.callback=t),t=gt(e,s,r),t!==null&&(Be(t,e,r,n),qr(t,e,r))}};function Ma(e,t,n,r,s,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Vn(n,r)||!Vn(s,i):!0}function Xu(e,t,n){var r=!1,s=xt,i=t.contextType;return typeof i=="object"&&i!==null?i=Re(i):(s=ve(t)?qt:ce.current,r=t.contextTypes,i=(r=r!=null)?ln(e,s):xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function Di(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Eo(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Re(i):(i=ve(t)?qt:ce.current,s.context=ln(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(qi(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ws.enqueueReplaceState(s,s.state,null),ns(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=fd(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Ys(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bp=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){as||(as=!0,Ji=r),Li(e,t)},n}function Yu(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bp;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=ef.bind(null,e,t,n),t.then(e,e))}function Ua(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function za(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var Up=rt.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?Pu(t,null,n,r):cn(t,e.child,n,r)}function Wa(e,t,n,r,s){n=n.render;var i=t.ref;return sn(t,s),r=Ao(e,t,n,r,i,s),n=Ro(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,nt(e,t,s)):(z&&n&&vo(t),t.flags|=1,de(e,t,r,s),t.child)}function Ha(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Uo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Zu(e,t,i,r,s)):(e=Br(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vn,n(o,r)&&e.ref===t.ref)return nt(e,t,s)}return t.flags|=1,e=wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Zu(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(Vn(i,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,nt(e,t,s)}return Oi(e,t,n,r,s)}function ec(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Zt,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Zt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(Zt,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(Zt,xe),xe|=r;return de(e,t,s,n),t.child}function tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oi(e,t,n,r,s){var i=ve(n)?qt:ce.current;return i=ln(t,i),sn(t,s),n=Ao(e,t,n,r,i,s),r=Ro(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,nt(e,t,s)):(z&&r&&vo(t),t.flags|=1,de(e,t,n,s),t.child)}function Qa(e,t,n,r,s){if(ve(n)){var i=!0;Kr(t)}else i=!1;if(sn(t,s),t.stateNode===null)Or(e,t),Xu(t,n,r),Di(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Re(d):(d=ve(n)?qt:ce.current,d=ln(t,d));var y=n.getDerivedStateFromProps,g=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==d)&&Fa(t,o,r,d),at=!1;var h=t.memoizedState;o.state=h,ns(t,r,o,s),l=t.memoizedState,a!==r||h!==l||ye.current||at?(typeof y=="function"&&(qi(t,n,y,r),l=t.memoizedState),(a=at||Ma(t,n,a,r,h,l,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Tu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:De(t.type,a),o.props=d,g=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Re(l):(l=ve(n)?qt:ce.current,l=ln(t,l));var k=n.getDerivedStateFromProps;(y=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||h!==l)&&Fa(t,o,r,l),at=!1,h=t.memoizedState,o.state=h,ns(t,r,o,s);var x=t.memoizedState;a!==g||h!==x||ye.current||at?(typeof k=="function"&&(qi(t,n,k,r),x=t.memoizedState),(d=at||Ma(t,n,d,r,h,x,l)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Mi(e,t,n,r,i,s)}function Mi(e,t,n,r,s,i){tc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&Aa(t,n,!1),nt(e,t,i);r=t.stateNode,Up.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,i),t.child=cn(t,null,a,i)):de(e,t,a,i),t.memoizedState=r.state,s&&Aa(t,n,!0),t.child}function nc(e){var t=e.stateNode;t.pendingContext?Ta(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ta(e,t.context,!1),Co(e,t.containerInfo)}function Ja(e,t,n,r,s){return un(),ko(s),t.flags|=256,de(e,t,n,r),t.child}var Fi={dehydrated:null,treeContext:null,retryLane:0};function Bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function rc(e,t,n){var r=t.pendingProps,s=W.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),F(W,s&1),e===null)return Ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=bs(o,r,0,null),e=jt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Bi(n),t.memoizedState=Fi,e):qo(t,o));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return zp(e,t,o,r,a,s,n);if(i){i=r.fallback,o=t.mode,s=e.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=wt(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=wt(a,i):(i=jt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Bi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Fi,r}return i=e.child,e=i.sibling,r=wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qo(e,t){return t=bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&ko(r),cn(t,e.child,null,n),e=qo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zp(e,t,n,r,s,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Ys(Error(w(422))),Er(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=bs({mode:"visible",children:r.children},s,0,null),i=jt(i,s,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cn(t,e.child,null,o),t.child.memoizedState=Bi(o),t.memoizedState=Fi,i);if(!(t.mode&1))return Er(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(w(419)),r=Ys(i,r,void 0),Er(e,t,o,r)}if(a=(o&e.childLanes)!==0,ge||a){if(r=re,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,tt(e,s),Be(r,e,s,-1))}return Bo(),r=Ys(Error(w(421))),Er(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=tf.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,be=ht(s.nextSibling),Se=t,z=!0,Oe=null,e!==null&&(Pe[Ie++]=Xe,Pe[Ie++]=Ke,Pe[Ie++]=Dt,Xe=e.id,Ke=e.overflow,Dt=t),t=qo(t,r.children),t.flags|=4096,t)}function Va(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ji(e.return,t,n)}function Zs(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function sc(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(de(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Va(e,n,t);else if(e.tag===19)Va(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(W,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&rs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Zs(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&rs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Zs(t,!0,n,null,i);break;case"together":Zs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Or(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wp(e,t,n){switch(t.tag){case 3:nc(t),un();break;case 5:Au(t);break;case 1:ve(t.type)&&Kr(t);break;case 4:Co(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;F(es,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?rc(e,t,n):(F(W,W.current&1),e=nt(e,t,n),e!==null?e.sibling:null);F(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,ec(e,t,n)}return nt(e,t,n)}var ic,Ui,oc,ac;ic=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};oc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Rt(Ve.current);var i=null;switch(n){case"input":s=ui(e,s),r=ui(e,r),i=[];break;case"select":s=Q({},s,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":s=pi(e,s),r=pi(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}mi(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Bn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var l=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&B("scroll",e),i||a===l||(i=[])):(i=i||[]).push(d,l))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hp(e,t,n){var r=t.pendingProps;switch(wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ve(t.type)&&Xr(),le(t),null;case 3:return r=t.stateNode,dn(),U(ye),U(ce),Io(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Gi(Oe),Oe=null))),Ui(e,t),le(t),null;case 5:Po(t);var s=Rt(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return le(t),null}if(e=Rt(Ve.current),Sr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[Xn]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(s=0;s<An.length;s++)B(An[s],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":na(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":sa(r,i),B("invalid",r)}mi(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&br(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&br(r.textContent,a,e),s=["children",""+a]):Bn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":mr(r),ra(r,i,!0);break;case"textarea":mr(r),ia(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gr)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qe]=t,e[Xn]=r,ic(e,t,!1,!1),t.stateNode=e;e:{switch(o=hi(n,r),n){case"dialog":B("cancel",e),B("close",e),s=r;break;case"iframe":case"object":case"embed":B("load",e),s=r;break;case"video":case"audio":for(s=0;s<An.length;s++)B(An[s],e);s=r;break;case"source":B("error",e),s=r;break;case"img":case"image":case"link":B("error",e),B("load",e),s=r;break;case"details":B("toggle",e),s=r;break;case"input":na(e,r),s=ui(e,r),B("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Q({},r,{value:void 0}),B("invalid",e);break;case"textarea":sa(e,r),s=pi(e,r),B("invalid",e);break;default:s=r}mi(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Ml(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ll(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Un(e,l):typeof l=="number"&&Un(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bn.hasOwnProperty(i)?l!=null&&i==="onScroll"&&B("scroll",e):l!=null&&ro(e,i,l,o))}switch(n){case"input":mr(e),ra(e,r,!1);break;case"textarea":mr(e),ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?en(e,!!r.multiple,i,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Gr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Rt(Yn.current),Rt(Ve.current),Sr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return le(t),null;case 13:if(U(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&be!==null&&t.mode&1&&!(t.flags&128))Eu(),un(),t.flags|=98560,i=!1;else if(i=Sr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Qe]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Oe!==null&&(Gi(Oe),Oe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?ee===0&&(ee=3):Bo())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return dn(),Ui(e,t),e===null&&$n(t.stateNode.containerInfo),le(t),null;case 10:return So(t.type._context),le(t),null;case 17:return ve(t.type)&&Xr(),le(t),null;case 19:if(U(W),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)En(i,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=rs(e),o!==null){for(t.flags|=128,En(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>fn&&(t.flags|=128,r=!0,En(i,!1),t.lanes=4194304)}else{if(!r)if(e=rs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!z)return le(t),null}else 2*G()-i.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,En(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=W.current,F(W,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Fo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Qp(e,t){switch(wo(t),t.tag){case 1:return ve(t.type)&&Xr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),U(ye),U(ce),Io(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Po(t),null;case 13:if(U(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(W),null;case 4:return dn(),null;case 10:return So(t.type._context),null;case 22:case 23:return Fo(),null;case 24:return null;default:return null}}var Cr=!1,ue=!1,Jp=typeof WeakSet=="function"?WeakSet:Set,S=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function zi(e,t,n){try{n()}catch(r){J(e,t,r)}}var $a=!1;function Vp(e,t){if(Ei=Jr,e=pu(),yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,d=0,y=0,g=e,h=null;t:for(;;){for(var k;g!==n||s!==0&&g.nodeType!==3||(a=o+s),g!==i||r!==0&&g.nodeType!==3||(l=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++d===s&&(a=o),h===i&&++y===r&&(l=o),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ci={focusedElem:e,selectionRange:n},Jr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,O=x.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:De(t.type,b),O);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){J(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return x=$a,$a=!1,x}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&zi(t,n,i)}s=s.next}while(s!==r)}}function ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lc(e){var t=e.alternate;t!==null&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[Xn],delete t[Ti],delete t[Tp],delete t[Ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e){return e.tag===5||e.tag===3||e.tag===4}function Ga(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}var se=null,Le=!1;function it(e,t,n){for(n=n.child;n!==null;)cc(e,t,n),n=n.sibling}function cc(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(ps,n)}catch{}switch(n.tag){case 5:ue||Yt(n,t);case 6:var r=se,s=Le;se=null,it(e,t,n),se=r,Le=s,se!==null&&(Le?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Le?(e=se,n=n.stateNode,e.nodeType===8?Js(e.parentNode,n):e.nodeType===1&&Js(e,n),Qn(e)):Js(se,n.stateNode));break;case 4:r=se,s=Le,se=n.stateNode.containerInfo,Le=!0,it(e,t,n),se=r,Le=s;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&zi(n,t,o),s=s.next}while(s!==r)}it(e,t,n);break;case 1:if(!ue&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,it(e,t,n),ue=r):it(e,t,n);break;default:it(e,t,n)}}function Xa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jp),t.forEach(function(r){var s=nf.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Le=!1;break e;case 3:se=a.stateNode.containerInfo,Le=!0;break e;case 4:se=a.stateNode.containerInfo,Le=!0;break e}a=a.return}if(se===null)throw Error(w(160));cc(i,o,s),se=null,Le=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(d){J(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dc(t,e),t=t.sibling}function dc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),We(e),r&4){try{On(3,e,e.return),ks(3,e)}catch(b){J(e,e.return,b)}try{On(5,e,e.return)}catch(b){J(e,e.return,b)}}break;case 1:qe(t,e),We(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(qe(t,e),We(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var s=e.stateNode;try{Un(s,"")}catch(b){J(e,e.return,b)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&jl(s,i),hi(a,o);var d=hi(a,i);for(o=0;o<l.length;o+=2){var y=l[o],g=l[o+1];y==="style"?Ml(s,g):y==="dangerouslySetInnerHTML"?Ll(s,g):y==="children"?Un(s,g):ro(s,y,g,d)}switch(a){case"input":ci(s,i);break;case"textarea":ql(s,i);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?en(s,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?en(s,!!i.multiple,i.defaultValue,!0):en(s,!!i.multiple,i.multiple?[]:"",!1))}s[Xn]=i}catch(b){J(e,e.return,b)}}break;case 6:if(qe(t,e),We(e),r&4){if(e.stateNode===null)throw Error(w(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(b){J(e,e.return,b)}}break;case 3:if(qe(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(b){J(e,e.return,b)}break;case 4:qe(t,e),We(e);break;case 13:qe(t,e),We(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Oo=G())),r&4&&Xa(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(d=ue)||y,qe(t,e),ue=d):qe(t,e),We(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(S=e,y=e.child;y!==null;){for(g=S=y;S!==null;){switch(h=S,k=h.child,h.tag){case 0:case 11:case 14:case 15:On(4,h,h.return);break;case 1:Yt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){J(r,n,b)}}break;case 5:Yt(h,h.return);break;case 22:if(h.memoizedState!==null){Ya(g);continue}}k!==null?(k.return=h,S=k):Ya(g)}y=y.sibling}e:for(y=null,g=e;;){if(g.tag===5){if(y===null){y=g;try{s=g.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,l=g.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ol("display",o))}catch(b){J(e,e.return,b)}}}else if(g.tag===6){if(y===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(b){J(e,e.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;y===g&&(y=null),g=g.return}y===g&&(y=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:qe(t,e),We(e),r&4&&Xa(e);break;case 21:break;default:qe(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Un(s,""),r.flags&=-33);var i=Ga(e);Qi(e,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ga(e);Hi(e,a,o);break;default:throw Error(w(161))}}catch(l){J(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,n){S=e,pc(e)}function pc(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var s=S,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Cr;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||ue;a=Cr;var d=ue;if(Cr=o,(ue=l)&&!d)for(S=s;S!==null;)o=S,l=o.child,o.tag===22&&o.memoizedState!==null?Za(s):l!==null?(l.return=o,S=l):Za(s);for(;i!==null;)S=i,pc(i),i=i.sibling;S=s,Cr=a,ue=d}Ka(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,S=i):Ka(e)}}function Ka(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Da(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Da(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var g=y.dehydrated;g!==null&&Qn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ue||t.flags&512&&Wi(t)}catch(h){J(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ya(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Za(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ks(4,t)}catch(l){J(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(l){J(t,s,l)}}var i=t.return;try{Wi(t)}catch(l){J(t,i,l)}break;case 5:var o=t.return;try{Wi(t)}catch(l){J(t,o,l)}}}catch(l){J(t,t.return,l)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var Gp=Math.ceil,os=rt.ReactCurrentDispatcher,Do=rt.ReactCurrentOwner,Ae=rt.ReactCurrentBatchConfig,D=0,re=null,X=null,ie=0,xe=0,Zt=St(0),ee=0,nr=null,Ot=0,xs=0,Lo=0,Mn=null,he=null,Oo=0,fn=1/0,$e=null,as=!1,Ji=null,yt=null,Pr=!1,dt=null,ls=0,Fn=0,Vi=null,Mr=-1,Fr=0;function pe(){return D&6?G():Mr!==-1?Mr:Mr=G()}function vt(e){return e.mode&1?D&2&&ie!==0?ie&-ie:Np.transition!==null?(Fr===0&&(Fr=Xl()),Fr):(e=L,e!==0||(e=window.event,e=e===void 0?16:ru(e.type)),e):1}function Be(e,t,n,r){if(50<Fn)throw Fn=0,Vi=null,Error(w(185));ir(e,n,r),(!(D&2)||e!==re)&&(e===re&&(!(D&2)&&(xs|=n),ee===4&&ut(e,ie)),we(e,r),n===1&&D===0&&!(t.mode&1)&&(fn=G()+500,ys&&_t()))}function we(e,t){var n=e.callbackNode;Nd(e,t);var r=Qr(e,e===re?ie:0);if(r===0)n!==null&&la(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&la(n),t===1)e.tag===0?Rp(el.bind(null,e)):bu(el.bind(null,e)),Pp(function(){!(D&6)&&_t()}),n=null;else{switch(Kl(r)){case 1:n=lo;break;case 4:n=$l;break;case 16:n=Hr;break;case 536870912:n=Gl;break;default:n=Hr}n=kc(n,fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fc(e,t){if(Mr=-1,Fr=0,D&6)throw Error(w(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Qr(e,e===re?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=us(e,r);else{t=r;var s=D;D|=2;var i=hc();(re!==e||ie!==t)&&($e=null,fn=G()+500,Nt(e,t));do try{Yp();break}catch(a){mc(e,a)}while(!0);bo(),os.current=i,D=s,X!==null?t=0:(re=null,ie=0,t=ee)}if(t!==0){if(t===2&&(s=ki(e),s!==0&&(r=s,t=$i(e,s))),t===1)throw n=nr,Nt(e,0),ut(e,r),we(e,G()),n;if(t===6)ut(e,r);else{if(s=e.current.alternate,!(r&30)&&!Xp(s)&&(t=us(e,r),t===2&&(i=ki(e),i!==0&&(r=i,t=$i(e,i))),t===1))throw n=nr,Nt(e,0),ut(e,r),we(e,G()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:It(e,he,$e);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Oo+500-G(),10<t)){if(Qr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ii(It.bind(null,e,he,$e),t);break}It(e,he,$e);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-Fe(r);i=1<<o,o=t[o],o>s&&(s=o),r&=~i}if(r=s,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gp(r/1960))-r,10<r){e.timeoutHandle=Ii(It.bind(null,e,he,$e),r);break}It(e,he,$e);break;case 5:It(e,he,$e);break;default:throw Error(w(329))}}}return we(e,G()),e.callbackNode===n?fc.bind(null,e):null}function $i(e,t){var n=Mn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=us(e,t),e!==2&&(t=he,he=n,t!==null&&Gi(t)),e}function Gi(e){he===null?he=e:he.push.apply(he,e)}function Xp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Ue(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~Lo,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function el(e){if(D&6)throw Error(w(327));on();var t=Qr(e,0);if(!(t&1))return we(e,G()),null;var n=us(e,t);if(e.tag!==0&&n===2){var r=ki(e);r!==0&&(t=r,n=$i(e,r))}if(n===1)throw n=nr,Nt(e,0),ut(e,t),we(e,G()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,he,$e),we(e,G()),null}function Mo(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(fn=G()+500,ys&&_t())}}function Mt(e){dt!==null&&dt.tag===0&&!(D&6)&&on();var t=D;D|=1;var n=Ae.transition,r=L;try{if(Ae.transition=null,L=1,e)return e()}finally{L=r,Ae.transition=n,D=t,!(D&6)&&_t()}}function Fo(){xe=Zt.current,U(Zt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cp(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(wo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xr();break;case 3:dn(),U(ye),U(ce),Io();break;case 5:Po(r);break;case 4:dn();break;case 13:U(W);break;case 19:U(W);break;case 10:So(r.type._context);break;case 22:case 23:Fo()}n=n.return}if(re=e,X=e=wt(e.current,null),ie=xe=t,ee=0,nr=null,Lo=xs=Ot=0,he=Mn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}At=null}return e}function mc(e,t){do{var n=X;try{if(bo(),Dr.current=is,ss){for(var r=H.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ss=!1}if(Lt=0,ne=Z=H=null,Ln=!1,Zn=0,Do.current=null,n===null||n.return===null){ee=1,nr=t,X=null;break}e:{var i=e,o=n.return,a=n,l=t;if(t=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,y=a,g=y.tag;if(!(y.mode&1)&&(g===0||g===11||g===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var k=Ua(o);if(k!==null){k.flags&=-257,za(k,o,a,i,t),k.mode&1&&Ba(i,d,t),t=k,l=d;var x=t.updateQueue;if(x===null){var b=new Set;b.add(l),t.updateQueue=b}else x.add(l);break e}else{if(!(t&1)){Ba(i,d,t),Bo();break e}l=Error(w(426))}}else if(z&&a.mode&1){var O=Ua(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),za(O,o,a,i,t),ko(pn(l,a));break e}}i=l=pn(l,a),ee!==4&&(ee=2),Mn===null?Mn=[i]:Mn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ku(i,l,t);qa(i,f);break e;case 1:a=l;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yt===null||!yt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Yu(i,a,t);qa(i,v);break e}}i=i.return}while(i!==null)}yc(n)}catch(_){t=_,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function hc(){var e=os.current;return os.current=is,e===null?is:e}function Bo(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Ot&268435455)&&!(xs&268435455)||ut(re,ie)}function us(e,t){var n=D;D|=2;var r=hc();(re!==e||ie!==t)&&($e=null,Nt(e,t));do try{Kp();break}catch(s){mc(e,s)}while(!0);if(bo(),D=n,os.current=r,X!==null)throw Error(w(261));return re=null,ie=0,ee}function Kp(){for(;X!==null;)gc(X)}function Yp(){for(;X!==null&&!Sd();)gc(X)}function gc(e){var t=wc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?yc(e):X=t,Do.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,X=null;return}}else if(n=Hp(n,t,xe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);ee===0&&(ee=5)}function It(e,t,n){var r=L,s=Ae.transition;try{Ae.transition=null,L=1,Zp(e,t,n,r)}finally{Ae.transition=s,L=r}return null}function Zp(e,t,n,r){do on();while(dt!==null);if(D&6)throw Error(w(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(jd(e,i),e===re&&(X=re=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,kc(Hr,function(){return on(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var o=L;L=1;var a=D;D|=4,Do.current=null,Vp(e,n),dc(n,e),wp(Ci),Jr=!!Ei,Ci=Ei=null,e.current=n,$p(n),_d(),D=a,L=o,Ae.transition=i}else e.current=n;if(Pr&&(Pr=!1,dt=e,ls=s),i=e.pendingLanes,i===0&&(yt=null),Pd(n.stateNode),we(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(as)throw as=!1,e=Ji,Ji=null,e;return ls&1&&e.tag!==0&&on(),i=e.pendingLanes,i&1?e===Vi?Fn++:(Fn=0,Vi=e):Fn=0,_t(),null}function on(){if(dt!==null){var e=Kl(ls),t=Ae.transition,n=L;try{if(Ae.transition=null,L=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,ls=0,D&6)throw Error(w(331));var s=D;for(D|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(S=d;S!==null;){var y=S;switch(y.tag){case 0:case 11:case 15:On(8,y,i)}var g=y.child;if(g!==null)g.return=y,S=g;else for(;S!==null;){y=S;var h=y.sibling,k=y.return;if(lc(y),y===d){S=null;break}if(h!==null){h.return=k,S=h;break}S=k}}}var x=i.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var O=b.sibling;b.sibling=null,b=O}while(b!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:On(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var p=e.current;for(S=p;S!==null;){o=S;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,S=m;else e:for(o=p;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ks(9,a)}}catch(_){J(a,a.return,_)}if(a===o){S=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,S=v;break e}S=a.return}}if(D=s,_t(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(ps,e)}catch{}r=!0}return r}finally{L=n,Ae.transition=t}}return!1}function tl(e,t,n){t=pn(n,t),t=Ku(e,t,1),e=gt(e,t,1),t=pe(),e!==null&&(ir(e,1,t),we(e,t))}function J(e,t,n){if(e.tag===3)tl(e,e,n);else for(;t!==null;){if(t.tag===3){tl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=pn(n,e),e=Yu(t,e,1),t=gt(t,e,1),e=pe(),t!==null&&(ir(t,1,e),we(t,e));break}}t=t.return}}function ef(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(ie&n)===n&&(ee===4||ee===3&&(ie&130023424)===ie&&500>G()-Oo?Nt(e,0):Lo|=n),we(e,t)}function vc(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=pe();e=tt(e,t),e!==null&&(ir(e,t,n),we(e,n))}function tf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vc(e,n)}function nf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),vc(e,n)}var wc;wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Wp(e,t,n);ge=!!(e.flags&131072)}else ge=!1,z&&t.flags&1048576&&Su(t,Zr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Or(e,t),e=t.pendingProps;var s=ln(t,ce.current);sn(t,n),s=Ao(null,t,r,e,s,n);var i=Ro();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(i=!0,Kr(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Eo(t),s.updater=ws,t.stateNode=s,s._reactInternals=t,Di(t,r,e,n),t=Mi(null,t,r,!0,i,n)):(t.tag=0,z&&i&&vo(t),de(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Or(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=sf(r),e=De(r,e),s){case 0:t=Oi(null,t,r,e,n);break e;case 1:t=Qa(null,t,r,e,n);break e;case 11:t=Wa(null,t,r,e,n);break e;case 14:t=Ha(null,t,r,De(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:De(r,s),Oi(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:De(r,s),Qa(e,t,r,s,n);case 3:e:{if(nc(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Tu(e,t),ns(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=pn(Error(w(423)),t),t=Ja(e,t,r,n,s);break e}else if(r!==s){s=pn(Error(w(424)),t),t=Ja(e,t,r,n,s);break e}else for(be=ht(t.stateNode.containerInfo.firstChild),Se=t,z=!0,Oe=null,n=Pu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===s){t=nt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Au(t),e===null&&Ni(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,o=s.children,Pi(r,s)?o=null:i!==null&&Pi(r,i)&&(t.flags|=32),tc(e,t),de(e,t,o,n),t.child;case 6:return e===null&&Ni(t),null;case 13:return rc(e,t,n);case 4:return Co(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:De(r,s),Wa(e,t,r,s,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,o=s.value,F(es,r._currentValue),r._currentValue=o,i!==null)if(Ue(i.value,o)){if(i.children===s.children&&!ye.current){t=nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Ye(-1,n&-n),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?l.next=l:(l.next=y.next,y.next=l),d.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),ji(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ji(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}de(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,sn(t,n),s=Re(s),r=r(s),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,s=De(r,t.pendingProps),s=De(r.type,s),Ha(e,t,r,s,n);case 15:return Zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:De(r,s),Or(e,t),t.tag=1,ve(r)?(e=!0,Kr(t)):e=!1,sn(t,n),Xu(t,r,s),Di(t,r,s,n),Mi(null,t,r,!0,e,n);case 19:return sc(e,t,n);case 22:return ec(e,t,n)}throw Error(w(156,t.tag))};function kc(e,t){return Vl(e,t)}function rf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new rf(e,t,n,r)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sf(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===io)return 11;if(e===oo)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Br(e,t,n,r,s,i){var o=2;if(r=e,typeof e=="function")Uo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return jt(n.children,s,i,t);case so:o=8,s|=8;break;case ii:return e=Te(12,n,t,s|2),e.elementType=ii,e.lanes=i,e;case oi:return e=Te(13,n,t,s),e.elementType=oi,e.lanes=i,e;case ai:return e=Te(19,n,t,s),e.elementType=ai,e.lanes=i,e;case Al:return bs(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Il:o=10;break e;case Tl:o=9;break e;case io:o=11;break e;case oo:o=14;break e;case ot:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Te(o,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function jt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function bs(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Al,e.lanes=n,e.stateNode={isHidden:!1},e}function ei(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ti(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function of(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ds(0),this.expirationTimes=Ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function zo(e,t,n,r,s,i,o,a,l){return e=new of(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Te(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eo(i),e}function af(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xc(e){if(!e)return xt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return xu(e,n,t)}return t}function bc(e,t,n,r,s,i,o,a,l){return e=zo(n,r,!0,e,s,i,o,a,l),e.context=xc(null),n=e.current,r=pe(),s=vt(n),i=Ye(r,s),i.callback=t??null,gt(n,i,s),e.current.lanes=s,ir(e,s,r),we(e,r),e}function Ss(e,t,n,r){var s=t.current,i=pe(),o=vt(s);return n=xc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(s,t,o),e!==null&&(Be(e,s,o,i),qr(e,s,o)),o}function cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wo(e,t){nl(e,t),(e=e.alternate)&&nl(e,t)}function lf(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ho(e){this._internalRoot=e}_s.prototype.render=Ho.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Ss(e,t,null,null)};_s.prototype.unmount=Ho.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){Ss(null,e,null,null)}),t[et]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&nu(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rl(){}function uf(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=cs(o);i.call(d)}}var o=bc(t,r,e,0,null,!1,!1,"",rl);return e._reactRootContainer=o,e[et]=o.current,$n(e.nodeType===8?e.parentNode:e),Mt(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=cs(l);a.call(d)}}var l=zo(e,0,!1,null,null,!1,!1,"",rl);return e._reactRootContainer=l,e[et]=l.current,$n(e.nodeType===8?e.parentNode:e),Mt(function(){Ss(t,l,n,r)}),l}function Cs(e,t,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=cs(o);a.call(l)}}Ss(t,o,e,s)}else o=uf(n,t,e,s,r);return cs(o)}Yl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(uo(t,n|1),we(t,G()),!(D&6)&&(fn=G()+500,_t()))}break;case 13:Mt(function(){var r=tt(e,1);if(r!==null){var s=pe();Be(r,e,1,s)}}),Wo(e,1)}};co=function(e){if(e.tag===13){var t=tt(e,134217728);if(t!==null){var n=pe();Be(t,e,134217728,n)}Wo(e,134217728)}};Zl=function(e){if(e.tag===13){var t=vt(e),n=tt(e,t);if(n!==null){var r=pe();Be(n,e,t,r)}Wo(e,t)}};eu=function(){return L};tu=function(e,t){var n=L;try{return L=e,t()}finally{L=n}};yi=function(e,t,n){switch(t){case"input":if(ci(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=gs(r);if(!s)throw Error(w(90));Nl(r),ci(r,s)}}}break;case"textarea":ql(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};Ul=Mo;zl=Mt;var cf={usingClientEntryPoint:!1,Events:[ar,Vt,gs,Fl,Bl,Mo]},Cn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},df={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ql(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{ps=Ir.inject(df),Je=Ir}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cf;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(t))throw Error(w(200));return af(e,t,null,n)};Ee.createRoot=function(e,t){if(!Qo(e))throw Error(w(299));var n=!1,r="",s=Sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=zo(e,1,!1,null,null,n,!1,r,s),e[et]=t.current,$n(e.nodeType===8?e.parentNode:e),new Ho(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Ql(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Mt(e)};Ee.hydrate=function(e,t,n){if(!Es(t))throw Error(w(200));return Cs(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Qo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Sc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=bc(t,null,e,1,n??null,s,!1,i,o),e[et]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new _s(t)};Ee.render=function(e,t,n){if(!Es(t))throw Error(w(200));return Cs(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Es(e))throw Error(w(40));return e._reactRootContainer?(Mt(function(){Cs(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};Ee.unstable_batchedUpdates=Mo;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Es(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Cs(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function _c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c)}catch(e){console.error(e)}}_c(),_l.exports=Ee;var pf=_l.exports,sl=pf;ri.createRoot=sl.createRoot,ri.hydrateRoot=sl.hydrateRoot;const Ec=A.createContext(null);function ff({children:e}){const[t,n]=A.useState(()=>localStorage.getItem("ip-theme")||"dark");A.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("ip-theme",t)},[t]);const r=()=>{n(s=>s==="dark"?"light":"dark")};return u.jsx(Ec.Provider,{value:{theme:t,toggleTheme:r},children:e})}function Cc(){const e=A.useContext(Ec);if(!e)throw new Error("useTheme must be used inside ThemeProvider");return e}const Pc=A.createContext(null);function mf({children:e}){const[t,n]=A.useState("hr"),[r,s]=A.useState(""),[i,o]=A.useState("landing"),[a,l]=A.useState("all"),[d,y]=A.useState("all"),[g,h]=A.useState(!1),k=A.useCallback(()=>h(!1),[]),x=A.useCallback(()=>h(v=>!v),[]),b=v=>{n(v),o("section"),s(""),h(!1)},O=v=>{s(v),o(v.trim()?"search":"section"),v.trim()&&h(!1)},f=()=>{o("bookmarks"),s(""),h(!1)},p=()=>{o("landing"),s(""),h(!1)},m=()=>{l("all"),y("all")};return u.jsx(Pc.Provider,{value:{activeSection:t,searchQuery:r,activeView:i,filterPriority:a,filterDifficulty:d,sidebarOpen:g,setFilterPriority:l,setFilterDifficulty:y,navigateTo:b,triggerSearch:O,openBookmarks:f,goToLanding:p,toggleSidebar:x,closeSidebar:k,resetFilters:m},children:e})}function st(){const e=A.useContext(Pc);if(!e)throw new Error("useApp must be used inside AppProvider");return e}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ic=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=A.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...a},l)=>A.createElement("svg",{ref:l,...gf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ic("lucide",s),...a},[...o.map(([d,y])=>A.createElement(d,y)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,t)=>{const n=A.forwardRef(({className:r,...s},i)=>A.createElement(yf,{ref:i,iconNode:t,className:Ic(`lucide-${hf(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=Y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=Y("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=Y("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=Y("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=Y("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=Y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=Y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Y("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=Y("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=Y("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=Y("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=Y("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=Y("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=Y("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=Y("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=Y("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=Y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=Y("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=Y("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function qf({accentColor:e="#6366f1"}){const{searchQuery:t,triggerSearch:n}=st(),[r,s]=A.useState(t),i=A.useRef(null);A.useEffect(()=>{const a=setTimeout(()=>{n(r)},300);return()=>clearTimeout(a)},[r]),A.useEffect(()=>{t||s("")},[t]);const o=()=>{var a;s(""),n(""),(a=i.current)==null||a.focus()};return A.useEffect(()=>{const a=l=>{var d,y;l.key==="/"&&document.activeElement!==i.current&&(l.preventDefault(),(d=i.current)==null||d.focus()),l.key==="Escape"&&(o(),(y=i.current)==null||y.blur())};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),u.jsxs("div",{className:"search-bar",children:[u.jsx(Ac,{className:"search-bar__icon",size:15,"aria-hidden":!0}),u.jsx("input",{ref:i,type:"search",className:"search-bar__input",placeholder:'Search…  "/"',value:r,onChange:a=>s(a.target.value),onFocus:a=>{a.target.style.borderColor=e},onBlur:a=>{a.target.style.borderColor=""},"aria-label":"Search questions, answers, and tags"}),r&&u.jsx("button",{type:"button",onClick:o,className:"search-bar__clear","aria-label":"Clear search",children:u.jsx(Rc,{size:13})})]})}const Nc="ip-progress";function Df(){try{const e=localStorage.getItem(Nc);return e?JSON.parse(e):{}}catch{return{}}}function Lf(e){try{localStorage.setItem(Nc,JSON.stringify(e))}catch{console.warn("Could not save progress to localStorage")}}function ur(){const[e,t]=A.useState(Df);A.useEffect(()=>{Lf(e)},[e]);const n=A.useCallback(a=>{t(l=>({...l,[a]:!l[a]}))},[]),r=A.useCallback(a=>!!e[a],[e]),s=A.useCallback((a=[])=>({reviewed:a.filter(d=>!!e[d.id]).length,total:a.length}),[e]),i=A.useCallback((a=[])=>{let l=0,d=0;return a.forEach(y=>{y.questions.forEach(g=>{l++,e[g.id]&&d++})}),{reviewed:d,total:l}},[e]),o=A.useCallback(()=>{t({})},[]);return{toggleReviewed:n,isReviewed:r,getSectionProgress:s,getOverallProgress:i,resetProgress:o}}const jc="ip-bookmarks";function Of(){try{const e=localStorage.getItem(jc);return e?JSON.parse(e):[]}catch{return[]}}function Mf(e){try{localStorage.setItem(jc,JSON.stringify(e))}catch{console.warn("Could not save bookmarks to localStorage")}}function Jo(){const[e,t]=A.useState(Of);A.useEffect(()=>{Mf(e)},[e]);const n=A.useCallback(a=>{t(l=>l.includes(a)?l.filter(d=>d!==a):[...l,a])},[]),r=A.useCallback(a=>e.includes(a),[e]),s=A.useCallback(()=>e,[e]),i=e.length,o=A.useCallback(()=>{t([])},[]);return{toggleBookmark:n,isBookmarked:r,getBookmarkIds:s,bookmarkCount:i,clearBookmarks:o}}const il={hr:{color:"#FF6F61",dim:"rgba(255, 111, 97, 0.22)",pastel:"rgba(255, 111, 97, 0.42)",textOnDarkCard:"#1E293B"},python:{color:"#7E57C2",dim:"rgba(126, 87, 194, 0.22)",pastel:"rgba(126, 87, 194, 0.42)",textOnDarkCard:"#1E293B"},selenium:{color:"#43A047",dim:"rgba(67, 160, 71, 0.22)",pastel:"rgba(67, 160, 71, 0.42)",textOnDarkCard:"#1E293B"},framework:{color:"#8D5524",dim:"rgba(141, 85, 36, 0.24)",pastel:"rgba(141, 85, 36, 0.45)",textOnDarkCard:"#FFFFFF"},api:{color:"#FFA726",dim:"rgba(255, 167, 38, 0.24)",pastel:"rgba(255, 167, 38, 0.45)",textOnDarkCard:"#1E293B"},sql:{color:"#FDD835",dim:"rgba(253, 216, 53, 0.24)",pastel:"rgba(253, 216, 53, 0.45)",textOnDarkCard:"#1E293B"},jenkins:{color:"#FB8C00",dim:"rgba(251, 140, 0, 0.24)",pastel:"rgba(251, 140, 0, 0.42)",textOnDarkCard:"#1E293B"},banking:{color:"#42A5F5",dim:"rgba(66, 165, 245, 0.24)",pastel:"rgba(66, 165, 245, 0.42)",textOnDarkCard:"#1E293B"},scenario:{color:"#2E7D32",dim:"rgba(46, 125, 50, 0.22)",pastel:"rgba(46, 125, 50, 0.42)",textOnDarkCard:"#1E293B"},manual:{color:"#C9A227",dim:"rgba(201, 162, 39, 0.24)",pastel:"rgba(201, 162, 39, 0.42)",textOnDarkCard:"#1E293B"},git:{color:"#6B8E23",dim:"rgba(107, 142, 35, 0.24)",pastel:"rgba(107, 142, 35, 0.42)",textOnDarkCard:"#1E293B"},deepdive:{color:"#304FFE",dim:"rgba(48, 79, 254, 0.24)",pastel:"rgba(48, 79, 254, 0.45)",textOnDarkCard:"#FFFFFF"},fakecheck:{color:"#C96A23",dim:"rgba(201, 106, 35, 0.24)",pastel:"rgba(201, 106, 35, 0.42)",textOnDarkCard:"#1E293B"},highpriority:{color:"#D32F2F",dim:"rgba(211, 47, 47, 0.24)",pastel:"rgba(211, 47, 47, 0.45)",textOnDarkCard:"#FFFFFF"}};function Ff(e){return il[e]??il.framework}function Bf(e){const t=Ff(e.id);return{...e,color:t.color,colorDim:t.dim,pastel:t.pastel,darkCardText:t.textOnDarkCard??"#1E293B"}}function ol(e,t,n={}){return{id:e,question:t,answer:n.answer??null,code:n.code??[],source:n.source??null,tags:n.tags??[],category:n.category??null,difficulty:n.difficulty??"medium",priority:n.priority??"medium"}}function K(e,t,n={}){return t.map((r,s)=>{const i=String(s+1).padStart(2,"0");if(typeof r=="string")return ol(`${e}-${i}`,r,n);const{question:o,...a}=r;return ol(`${e}-${i}`,o,{...n,...a})})}function ke({id:e,number:t,title:n,description:r,priority:s,color:i,questions:o}){return{id:e,number:t,title:n,description:r,priority:s,color:i,questions:o}}const c=e=>({name:"GeeksForGeeks",url:`https://www.geeksforgeeks.org/${e}/`}),ze=e=>({name:"TutorialsPoint",url:`https://www.tutorialspoint.com/${e}`}),M=e=>({name:"BrowserStack",url:`https://www.browserstack.com/guide/${e}`}),Uf=[{question:"Tell me about yourself.",answer:`Structure your answer in 3 parts: Present (current role + key skills), Past (relevant experience that led here), Future (why this role excites you). Keep it under 90 seconds. Avoid reading your resume — tell a story instead.

Example: "I am currently working as a QA Automation Engineer at [company], where I build and maintain Selenium + pytest frameworks for payment applications. Over the past [X] years I moved from manual testing into automation and API testing. I am now looking for a role where I can deepen framework design and work in the banking domain."`,source:c("tell-me-about-yourself-in-interview"),tags:["behavioral","introduction","HR"],priority:"critical"},{question:"Walk me through your current project.",answer:`Cover these 5 points: (1) Application purpose and domain, (2) Your role and team size, (3) Tech stack — languages, tools, CI/CD, (4) Testing scope — modules, manual vs automation split, regression/smoke, (5) One concrete challenge you solved.

Example: "We test a SWIFT payment processing portal. I own the automation framework in Python/Selenium, integrate API tests with Postman/pytest, and run nightly Jenkins pipelines. I recently fixed flaky login tests by replacing implicit waits with explicit expected conditions."`,source:c("how-to-answer-tell-me-about-your-current-project"),tags:["behavioral","project","HR"],priority:"critical"},{question:"Explain your role in your current organization.",answer:`Describe reporting line, team structure, and day-to-day ownership. Cover: test planning, execution, automation, defect management, and collaboration with dev/BA/ops.

Example: "I report to the QA Lead in a squad of 4 testers. I am the primary automation owner — I write frameworks, review test scripts, maintain Jenkins jobs, and support production UAT. I also mentor junior testers on Python basics and participate in sprint ceremonies."`,source:c("how-to-explain-your-role-in-interview"),tags:["behavioral","HR"],priority:"critical"},{question:"Why are you looking for a job change?",answer:`Stay positive — never criticize your current employer. Valid reasons: growth, new tech stack, better automation exposure, domain interest, relocation, contract ending.

Example: "I have learned a lot in my current role, but the project is stabilizing and automation opportunities are limited. I want a role with stronger framework ownership, CI/CD integration, and exposure to modern API and cloud-based testing."`,source:c("why-are-you-looking-for-a-job-change"),tags:["behavioral","HR"],priority:"critical"},{question:"Why should we hire you?",answer:`Match your strengths to the job description. Highlight: relevant domain, automation skills, problem-solving, team collaboration, and quick learning.

Example: "I bring hands-on Selenium + Python automation, experience in banking payments, and a track record of reducing regression time by 40%. I communicate clearly with developers and business teams, and I take ownership of quality end-to-end — not just writing scripts."`,source:c("why-should-we-hire-you"),tags:["behavioral","HR"],priority:"critical"},{question:"What makes you suitable for Automation Testing?",answer:`Connect programming ability, testing mindset, and tool experience. Mention: coding skills (Python/Java), understanding of SDLC, debugging ability, framework knowledge, and passion for efficiency.

Example: "I enjoy coding and have built reusable Page Object frameworks. I think like a tester — I cover edge cases and negative flows — but I also think like a developer — clean code, version control, and CI integration. That combination makes me effective at automation."`,source:c("automation-tester-interview-questions"),tags:["behavioral","automation","HR"],priority:"high"},{question:"Difference between QA Analyst and Automation Tester?",answer:`QA Analyst focuses on overall quality — test planning, manual execution, test cases, defect logging, process adherence, UAT support. Automation Tester writes and maintains automated scripts, builds frameworks, integrates with CI/CD, and reduces manual regression effort.

Key difference: QA Analyst is process- and coverage-oriented; Automation Tester is code- and efficiency-oriented. Many roles combine both.`,source:c("difference-between-qa-analyst-and-automation-tester"),tags:["QA","automation","comparison"],priority:"high"},{question:"What challenges are you facing in your current project?",answer:`Pick a real challenge and explain how you handle it — shows honesty and problem-solving. Examples: flaky tests, unstable test data, unclear requirements, tight deadlines, legacy code without locators.

Example: "Our biggest challenge is dynamic locators in a React frontend. I addressed it by working with devs to add data-testid attributes and by building a custom wait utility that retries with multiple locator strategies before failing."`,source:c("common-challenges-in-software-testing"),tags:["behavioral","HR"],priority:"medium"},{question:"Describe a production issue you handled.",answer:`Use STAR: Situation, Task, Action, Result. Show calmness, triage skills, communication, and follow-up.

Example: "A payment message failed validation in production after a release. I reproduced it in UAT, identified a missing XML field mapping, logged a critical defect with logs and screenshots, coordinated a hotfix, and added an automated regression test to prevent recurrence. The fix went live within 4 hours."`,source:c("production-support-interview-questions"),tags:["behavioral","production","HR"],priority:"high"},{question:"Describe your biggest achievement.",answer:`Quantify impact where possible. Examples: built framework from scratch, cut regression time, found critical bug before release, improved CI pipeline stability.

Example: "I built our automation framework from scratch using Python, Selenium, and pytest. We went from 100% manual regression (3 days) to 70% automated coverage with a 6-hour nightly run. Defect leakage dropped and the team freed up time for exploratory testing."`,source:c("what-is-your-greatest-achievement-interview-question"),tags:["behavioral","HR"],priority:"medium"},{question:"Describe a conflict with developers/business users.",answer:`Show professionalism — focus on resolution, not blame. Use STAR format.

Example: "A developer marked my defect as 'Not Reproducible' but I had logs and screenshots. I set up a 15-minute call, walked through steps live, and we found an environment-specific config issue. We agreed on clearer environment tagging going forward. The relationship improved because I stayed factual, not emotional."`,source:c("conflict-resolution-interview-questions"),tags:["behavioral","conflict","HR"],priority:"medium"},{question:"Why banking domain?",answer:`Show genuine interest in domain complexity: compliance, accuracy, payment flows, security.

Example: "Banking testing is high-stakes — a missed decimal or wrong SWIFT field has real financial impact. I enjoy the challenge of validating payment lifecycles, message formats, and regulatory rules. My experience with SWIFT MT/MX and reconciliation gives me confidence to add value quickly."`,source:c("domain-knowledge-interview-questions"),tags:["domain","banking","HR"],priority:"high"},{question:"Explain your daily activities.",answer:`Walk through a typical day: stand-up, test execution, automation maintenance, defect triage, meetings, documentation.

Example: "Morning stand-up → execute assigned test cases and triage failures → fix/update automation scripts → attend refinement/planning as needed → log defects with clear evidence → end-of-day status update. On regression days I monitor Jenkins runs and investigate failures."`,source:c("software-tester-daily-activities"),tags:["behavioral","HR"],priority:"medium"},{question:"What percentage of work is automation vs manual?",answer:`Be honest and explain the split logically. Typical mid-level: 60–70% automation, 30–40% manual/exploratory.

Example: "Currently about 65% automation — I maintain scripts, framework, and CI jobs. 35% manual — new feature exploratory testing, UAT support, and complex scenarios not yet automated. I am actively increasing automation coverage for stable modules."`,source:c("manual-testing-vs-automation-testing"),tags:["behavioral","automation","HR"],priority:"medium"},{question:"What kind of applications have you tested?",answer:`List types with brief context: web apps, APIs, mobile (if applicable), domain (banking, e-commerce, etc.).

Example: "Web-based payment portals, SWIFT message validation tools, REST APIs for transaction status, and internal admin dashboards. Mostly browser-based on Chrome/Firefox with some headless CI execution."`,source:c("types-of-software-testing"),tags:["behavioral","testing","HR"],priority:"medium"},{question:"Have you worked in Agile?",answer:`Confirm experience and name ceremonies you participate in: sprint planning, daily stand-up, refinement, review, retrospective.

Example: "Yes, Scrum with 2-week sprints. I join planning to estimate testing effort, daily stand-ups for blockers, refinement to clarify acceptance criteria, and retrospectives to suggest process improvements. Testing is embedded in the sprint, not a separate phase."`,source:c("agile-testing-interview-questions"),tags:["Agile","process","HR"],priority:"high"},{question:"Explain your sprint lifecycle.",answer:`Map testing activities to each sprint phase:

Planning — estimate stories, identify test scope. Development — write test cases, start automation. Testing — execute manual + automated, log defects. Review — demo tested features. Retro — discuss what worked.

Example: "Day 1–2: review stories, write cases. Day 3–7: dev delivers, I test and automate. Day 8–9: regression + bug fixes. Day 10: sprint review and retro."`,source:c("scrum-sprint-lifecycle"),tags:["Agile","sprint","HR"],priority:"high"},{question:"How do you estimate testing effort?",answer:`Factors: story complexity, number of acceptance criteria, new vs existing module, automation vs manual, environment readiness, regression impact.

Techniques: experience-based, task breakdown, test case count × time per case, historical velocity, three-point estimation (optimistic/likely/pessimistic).

Example: "I break each story into test scenarios, estimate hours per scenario, add buffer for defect retesting, and flag dependencies like test data or API availability."`,source:c("test-estimation-techniques"),tags:["estimation","planning","HR"],priority:"medium"},{question:"What tools are you currently using?",answer:`Organize by category — be specific with versions if asked.

Automation: Selenium, pytest, Python. API: Postman, requests. CI/CD: Jenkins, Git. Reporting: Allure / HTML reports. Defect: Jira. DB: SQL Developer / pgAdmin. Other: Git, Confluence, BrowserStack (if applicable).`,source:c("software-testing-tools"),tags:["tools","HR"],priority:"medium"},{question:"Why do you want this company?",answer:`Research the company beforehand. Mention: product/domain fit, tech stack, culture, growth, reputation.

Example: "I admire your focus on digital payments and the scale of transactions you handle. The role combines automation framework work with banking domain — exactly where I want to grow. Your investment in CI/CD and modern testing practices aligns with how I work."`,source:c("why-do-you-want-to-work-for-our-company"),tags:["behavioral","motivation","HR"],priority:"high"},{question:"Explain your notice period situation.",answer:`Be direct and honest. State notice period length, whether negotiable, buyout option, and earliest joining date.

Example: "My notice period is 60 days as per company policy, but my manager is open to negotiation to 30 days for the right opportunity. I can join immediately after relieving. I am already wrapping up documentation for a smooth handover."`,source:c("notice-period-interview-questions"),tags:["HR","logistics"],priority:"medium"},{question:"What are your strengths and weaknesses?",answer:`Strengths: pick 2–3 relevant ones (attention to detail, debugging, collaboration, self-learning).

Weaknesses: pick a real one with improvement action — never say "I work too hard."

Example strengths: "Strong debugging of flaky tests and clear defect reporting."
Example weakness: "I sometimes dive deep into automation before confirming requirements — I now validate acceptance criteria in refinement before writing scripts."`,source:c("strengths-and-weaknesses-in-interview"),tags:["behavioral","HR"],priority:"high"}],zf=ke({id:"hr",number:1,title:"HR + Introduction",description:"These decide whether the interviewer continues comfortably or starts attacking your weak areas. Nail the narrative first.",priority:"critical",color:"var(--red)",questions:K("hr",Uf,{difficulty:"easy"})}),C=e=>({name:"GeeksForGeeks",url:`https://www.geeksforgeeks.org/${e}/`}),Wf=e=>({name:"TutorialsPoint",url:`https://www.tutorialspoint.com/${e}`}),Hf=[{question:"Difference between list, tuple, set, dictionary.",answer:`List: ordered, mutable, allows duplicates, uses []. Tuple: ordered, immutable, allows duplicates, uses (). Set: unordered, mutable, no duplicates, uses {}. Dictionary: ordered (Py3.7+), mutable key-value pairs, keys unique, uses {key: val}.

Use lists for sequences you modify, tuples for fixed records, sets for unique collections/membership tests, dicts for labeled data.`,source:C("python-list-vs-tuple-vs-dict-vs-set")},{question:"Mutable vs immutable objects.",answer:`Mutable objects can be changed in-place after creation (list, dict, set, bytearray). Immutable objects cannot be changed — a new object is created on modification (int, float, str, tuple, frozenset, bytes).

Immutability makes objects hashable (usable as dict keys) and safer to share across threads.`,source:C("mutable-vs-immutable-in-python")},{question:"What is slicing?",answer:`Slicing extracts a sub-sequence using [start:stop:step]. start is inclusive, stop is exclusive, step controls increment. Omitting start defaults to 0, omitting stop defaults to end, omitting step defaults to 1.

Works on strings, lists, tuples. Negative indices count from the end. [::−1] reverses a sequence.`,code:[{language:"python",snippet:`s = 'Interview'
print(s[0:5])    # Inter
print(s[::-1])   # weivretnI
print([1,2,3,4][1:3])  # [2, 3]`}],source:C("python-list-slicing")},{question:"Difference between append() and extend().",answer:`append(x) adds a single element to the end of the list (even if x is a list, it becomes one nested element). extend(iterable) adds each element from the iterable individually.

Example: [1,2].append([3,4]) → [1,2,[3,4]]. [1,2].extend([3,4]) → [1,2,3,4].`,code:[{language:"python",snippet:`a = [1, 2]
a.append([3, 4])   # [1, 2, [3, 4]]

b = [1, 2]
b.extend([3, 4])   # [1, 2, 3, 4]`}],source:C("append-extend-python")},{question:"What is unpacking?",answer:`Unpacking assigns elements of an iterable to multiple variables in one statement. Tuple unpacking: a, b, c = [1, 2, 3]. The * operator collects remaining items: first, *rest = [1, 2, 3, 4]. ** unpacks dictionaries into keyword arguments.

Commonly used to swap variables: a, b = b, a.`,code:[{language:"python",snippet:`a, b, c = (10, 20, 30)
first, *middle, last = [1, 2, 3, 4, 5]
# first=1, middle=[2,3,4], last=5`}],source:C("packing-unpacking-python")},{question:"Difference between deep copy and shallow copy.",answer:`Shallow copy creates a new object but references nested objects inside the original (copy.copy() or list slicing). Changes to nested objects affect both copies.

Deep copy recursively copies all nested objects, creating fully independent copies (copy.deepcopy()). Use deep copy when nested mutability matters.`,code:[{language:"python",snippet:`import copy
original = [[1, 2], [3, 4]]
shallow = copy.copy(original)
deep = copy.deepcopy(original)
shallow[0][0] = 99  # also changes original[0][0]
deep[0][0] = 99     # original unchanged`}],source:C("copy-python")},{question:"What are lambda functions?",answer:`A lambda is an anonymous one-expression function: lambda args: expression. Used for short throwaway functions, often with map(), filter(), sorted(key=...).

Limitations: single expression only, no statements, no annotations. For complex logic, use def instead.`,code:[{language:"python",snippet:`square = lambda x: x ** 2
nums = [3, 1, 4]
sorted(nums, key=lambda x: -x)  # [4, 3, 1]`}],source:C("python-lambda-anonymous-functions")},{question:"What are decorators?",answer:`A decorator is a function that wraps another function (or class) to extend its behavior without modifying its source. Syntax @decorator above def is shorthand for func = decorator(func).

Common uses: logging, timing, authentication, retry logic, and pytest fixtures.`,code:[{language:"python",snippet:`def log_calls(fn):
    def wrapper(*args, **kwargs):
        print(f'Calling {fn.__name__}')
        return fn(*args, **kwargs)
    return wrapper

@log_calls
def greet(name):
    return f'Hello {name}'`}],source:C("decorators-in-python")},{question:"What are generators?",answer:`Generators produce values lazily using yield instead of return, pausing execution and resuming on next(). Created with generator functions or generator expressions (x*2 for x in range(5)).

Memory-efficient for large datasets — values generated one at a time, not stored all at once.`,code:[{language:"python",snippet:`def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for num in count_up_to(3):
    print(num)  # 1, 2, 3`}],source:C("generators-in-python")},{question:"Difference between is and ==.",answer:`== compares values (equality). is compares object identity (same memory address).

Use == for value comparison. Use is only for singletons like None, True, False. Two lists with same content are == but not is. Small integers (−5 to 256) may be cached and appear identical with is.`,code:[{language:"python",snippet:`a = [1, 2]
b = [1, 2]
print(a == b)  # True
print(a is b)  # False

x = None
print(x is None)  # True — preferred over x == None`}],source:C("difference-between-is-and-in-python")},{question:"Explain *args and **kwargs.",answer:`*args collects extra positional arguments as a tuple. **kwargs collects extra keyword arguments as a dictionary. Names are convention — only * and ** matter.

Used in functions that accept variable arguments and when forwarding args to another function.`,code:[{language:"python",snippet:`def demo(a, *args, **kwargs):
    print(a, args, kwargs)

demo(1, 2, 3, x=10, y=20)
# 1 (2, 3) {'x': 10, 'y': 20}`}],source:C("args-kwargs-python")},{question:"What is list comprehension?",answer:`List comprehension creates a list in a single concise line: [expression for item in iterable if condition]. Faster and more readable than equivalent for-loop + append for simple transforms.

Dict and set comprehensions use similar syntax with {} or {key: val}.`,code:[{language:"python",snippet:`squares = [x**2 for x in range(6)]
evens = [x for x in range(10) if x % 2 == 0]
word_lens = {w: len(w) for w in ['hi', 'hello']}`}],source:C("list-comprehension-in-python")},{question:"What is exception handling?",answer:`Exception handling manages runtime errors gracefully using try, except, else, finally. try runs risky code; except catches specific exceptions; else runs if no exception; finally always runs (cleanup).

Always catch specific exceptions, not bare except. Use raise to re-throw or custom exceptions.`,code:[{language:"python",snippet:`try:
    result = 10 / int(input_val)
except ZeroDivisionError:
    print('Cannot divide by zero')
except ValueError:
    print('Invalid number')
finally:
    print('Done')`}],source:C("python-exception-handling")},{question:"Difference between compile-time and runtime errors.",answer:`Python is interpreted — compile-time errors occur before execution: SyntaxError, IndentationError (parser cannot understand code). Runtime errors occur during execution: TypeError, ValueError, ZeroDivisionError, IndexError.

Python has no traditional compile step like C++; "compile-time" here means parse/bytecode-compile phase before the code runs.`,source:C("errors-python")},{question:"Explain Python memory management.",answer:`Python uses private heap memory managed by the Python memory manager. Key mechanisms:

1. Reference counting — object deleted when count hits 0.
2. Garbage collector — detects and breaks reference cycles.
3. Memory pools — small object allocator (pymalloc) for efficiency.

Objects are accessed via references; assignment never copies data unless explicitly copied.`,source:C("memory-management-in-python")},{question:"What are modules and packages?",answer:`A module is a single .py file containing reusable code. A package is a directory of modules with __init__.py, allowing hierarchical imports (e.g., os.path).

Import with import module or from package import module. Python searches sys.path for modules.`,source:C("python-modules")},{question:"What is __init__.py?",answer:`__init__.py marks a directory as a Python package (Py3.3+ namespace packages can omit it, but it is still best practice). It runs on package import and can initialize package-level variables or expose a public API via __all__.

Can be empty — its presence alone tells Python to treat the folder as a package.`,source:C("python-package-init-py-file")},{question:"Explain OOP concepts in Python.",answer:`Python supports Object-Oriented Programming with four pillars:

1. Encapsulation — bundling data + methods, hiding internals.
2. Inheritance — child class inherits parent attributes/methods.
3. Polymorphism — same interface, different implementations.
4. Abstraction — hiding complexity, exposing essentials.

Everything in Python is an object, including functions and classes.`,source:C("object-oriented-programming-oops-concept-in-python")},{question:"Method overloading vs overriding.",answer:`Overriding: subclass provides its own implementation of a parent method with the same name — resolved at runtime (polymorphism).

Overloading: multiple methods with same name but different parameters. Python does NOT support traditional overloading — last def wins. Simulate with default args or @functools.singledispatch.`,code:[{language:"python",snippet:`class Animal:
    def speak(self):
        return '...'

class Dog(Animal):
    def speak(self):  # overriding
        return 'Woof'`}],source:C("method-overloading-vs-method-overriding-in-python")},{question:"What is inheritance?",answer:`Inheritance lets a child class (derived) acquire attributes and methods from a parent class (base). Syntax: class Child(Parent). Supports code reuse and is-a relationships.

Python supports single, multilevel, hierarchical, and multiple inheritance. Use super() to call parent methods.`,code:[{language:"python",snippet:`class Person:
    def __init__(self, name):
        self.name = name

class Employee(Person):
    def __init__(self, name, emp_id):
        super().__init__(name)
        self.emp_id = emp_id`}],source:C("inheritance-in-python")},{question:"Multiple inheritance in Python?",answer:`A class can inherit from multiple parents: class Child(A, B). Python resolves method lookup using MRO (C3 linearization) — visible via ClassName.__mro__ or mro().

Diamond problem is handled by MRO order. Mixins are a common pattern for adding behavior without deep hierarchies.`,code:[{language:"python",snippet:`class A:
    def show(self): return 'A'
class B:
    def show(self): return 'B'
class C(A, B): pass

print(C().show())       # A
print(C.__mro__)        # method resolution order`}],source:C("multiple-inheritance-in-python")},{question:"What is polymorphism?",answer:`Polymorphism means "many forms" — same method name behaves differently based on the object. Python achieves this via duck typing (if it walks and quacks...) and method overriding.

Example: len() works on str, list, dict. Different classes implement __len__ differently.`,source:C("polymorphism-in-python")},{question:"Static method vs class method vs instance method.",answer:`Instance method: first param is self, operates on instance data.

Class method (@classmethod): first param is cls, operates on class-level data, can be used as alternative constructors.

Static method (@staticmethod): no self/cls, behaves like a plain function inside the class namespace — utility functions related to the class.`,code:[{language:"python",snippet:`class Demo:
    count = 0
    def inst(self): return 'instance'
    @classmethod
    def cls_method(cls): return cls.count
    @staticmethod
    def util(x, y): return x + y`}],source:C("difference-between-static-method-class-method-and-instance-method-in-python")},{question:"What is encapsulation?",answer:`Encapsulation bundles data (attributes) and methods that operate on it into a class, restricting direct access to internals. Python uses naming conventions: _single underscore (internal use), __double underscore (name mangling to _ClassName__attr).

Use @property for controlled getter/setter access without breaking the interface.`,source:C("encapsulation-in-python")},{question:"What is abstraction?",answer:`Abstraction hides complex implementation details and exposes only essential features. In Python, achieved via abstract base classes (abc module) and interfaces.

@abstractmethod forces subclasses to implement specific methods — you cannot instantiate the abstract class directly.`,code:[{language:"python",snippet:`from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def area(self):
        return 3.14 * self.r ** 2`}],source:C("abstract-classes-in-python")},{question:"Explain MRO (Method Resolution Order).",answer:`MRO is the order Python searches base classes when resolving a method. Calculated using C3 linearization algorithm. View with ClassName.mro() or ClassName.__mro__.

Critical in multiple inheritance — ensures predictable, consistent method lookup. super() follows MRO, not just the direct parent.`,code:[{language:"python",snippet:`class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print(D.__mro__)
# D, B, C, A, object`}],source:C("method-resolution-order-in-python-inheritance")}],Qf=[{question:"Reverse a string.",answer:"Slice with step −1 is the Pythonic approach. Also works with reversed() + join for readability.",code:[{language:"python",snippet:`s = 'hello'
print(s[::-1])              # olleh
print(''.join(reversed(s))) # olleh`}],source:C("python-program-to-reverse-a-string")},{question:"Reverse a number.",answer:"Extract digits using modulo and build the reversed integer. Handle negative numbers by preserving sign.",code:[{language:"python",snippet:`def reverse_number(n):
    sign = -1 if n < 0 else 1
    n = abs(n)
    rev = 0
    while n:
        rev = rev * 10 + n % 10
        n //= 10
    return sign * rev

print(reverse_number(12345))  # 54321`}],source:C("python-program-to-reverse-a-number")},{question:"Palindrome program.",answer:"A palindrome reads the same forwards and backwards. Compare string with its reverse, or use two-pointer approach.",code:[{language:"python",snippet:`def is_palindrome(s):
    s = s.lower().replace(' ', '')
    return s == s[::-1]

print(is_palindrome('madam'))  # True
print(is_palindrome('hello'))  # False`}],source:C("python-program-to-check-if-a-string-is-palindrome-or-not")},{question:"Prime number check.",answer:"A prime is divisible only by 1 and itself. Check divisibility up to √n for efficiency.",code:[{language:"python",snippet:`def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(17))  # True`}],source:C("python-program-to-check-whether-a-number-is-prime-or-not")},{question:"Fibonacci series.",answer:"Each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8... Generate iteratively or recursively (with memoization for large n).",code:[{language:"python",snippet:`def fib(n):
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print(fib(8))  # [0, 1, 1, 2, 3, 5, 8, 13]`}],source:C("python-program-for-nth-fibonacci-number")},{question:"Factorial.",answer:"Factorial of n (n!) = n × (n−1) × ... × 1. Use loop or math.factorial(). 0! = 1 by definition.",code:[{language:"python",snippet:`def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

print(factorial(5))  # 120`}],source:C("python-program-to-find-factorial-of-a-number")},{question:"Armstrong number.",answer:"An Armstrong number equals the sum of its digits each raised to the power of the number of digits. Example: 153 = 1³ + 5³ + 3³.",code:[{language:"python",snippet:`def is_armstrong(n):
    s = str(n)
    power = len(s)
    return n == sum(int(d) ** power for d in s)

print(is_armstrong(153))   # True
print(is_armstrong(123))   # False`}],source:C("python-program-to-check-armstrong-number")},{question:"Anagram check.",answer:"Two strings are anagrams if they contain the same characters in the same frequency. Sort both strings and compare, or use Counter.",code:[{language:"python",snippet:`from collections import Counter

def is_anagram(a, b):
    return Counter(a.lower()) == Counter(b.lower())

print(is_anagram('listen', 'silent'))  # True`}],source:C("python-program-to-check-if-two-strings-are-anagram-or-not")},{question:"Count vowels in string.",answer:"Iterate through the string and count characters in the vowel set a, e, i, o, u (case-insensitive).",code:[{language:"python",snippet:`def count_vowels(s):
    vowels = 'aeiouAEIOU'
    return sum(1 for c in s if c in vowels)

print(count_vowels('Interview Prep'))  # 5`}],source:C("python-program-to-count-vowels-in-a-string")},{question:"Find duplicate characters.",answer:"Use a dictionary or Counter to track character frequency. Characters with count > 1 are duplicates.",code:[{language:"python",snippet:`from collections import Counter

def duplicates(s):
    counts = Counter(s)
    return {ch: cnt for ch, cnt in counts.items() if cnt > 1}

print(duplicates('programming'))  # {'r': 2, 'g': 2, 'm': 2}`}],source:C("python-program-to-find-duplicates-in-a-string")},{question:"Remove duplicates from list.",answer:"Convert to set (loses order) or use dict.fromkeys() (preserves insertion order in Py3.7+). List comprehension with seen set also works.",code:[{language:"python",snippet:`nums = [1, 2, 2, 3, 1, 4]
unique = list(dict.fromkeys(nums))
print(unique)  # [1, 2, 3, 4]`}],source:C("python-remove-duplicates-from-a-list")},{question:"Find largest/smallest element.",answer:"Use built-in max() and min(), or iterate manually. For empty lists, handle ValueError.",code:[{language:"python",snippet:`nums = [3, 7, 2, 9, 1]
print(max(nums))  # 9
print(min(nums))  # 1

# manual
largest = nums[0]
for n in nums:
    if n > largest:
        largest = n`}],source:C("python-program-to-find-largest-and-smallest-element-in-an-array")},{question:"Sort list without using sort().",answer:"Implement bubble sort, selection sort, or insertion sort. Bubble sort repeatedly swaps adjacent out-of-order elements.",code:[{language:"python",snippet:`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([5, 3, 1, 4, 2]))`}],source:C("bubble-sort-in-python")},{question:"Swap two numbers.",answer:"Python allows tuple unpacking swap without a temp variable: a, b = b, a. Also works with arithmetic or XOR (not recommended in Python).",code:[{language:"python",snippet:`a, b = 10, 20
a, b = b, a
print(a, b)  # 20 10`}],source:C("python-program-to-swap-two-numbers")},{question:"Count frequency of characters.",answer:"Use collections.Counter for a one-liner, or a dict with get/chars as keys.",code:[{language:"python",snippet:`from collections import Counter

freq = Counter('mississippi')
print(dict(freq))  # {'m': 1, 'i': 4, 's': 4, 'p': 2}`}],source:C("python-program-to-count-the-characters-frequency-in-a-string")},{question:"Find missing number in array.",answer:"Given n distinct numbers from 1 to n+1, one is missing. Use sum formula: expected = n*(n+1)/2, subtract actual sum. Or XOR all indices and values.",code:[{language:"python",snippet:`def missing_number(nums):
    n = len(nums)
    expected = n * (n + 1) // 2
    return expected - sum(nums)

print(missing_number([1, 2, 4, 5, 6]))  # 3`}],source:C("find-the-missing-number-in-python")},{question:"Merge two lists.",answer:"Use + operator, extend(), or list unpacking [*a, *b]. For sorted merge (merge step of merge sort), use two pointers.",code:[{language:"python",snippet:`a = [1, 3, 5]
b = [2, 4, 6]
merged = a + b
print(merged)  # [1, 3, 5, 2, 4, 6]

# sorted merge
i, j = 0, 0
result = []
while i < len(a) and j < len(b):
    if a[i] <= b[j]:
        result.append(a[i]); i += 1
    else:
        result.append(b[j]); j += 1
result += a[i:] + b[j:]`}],source:C("python-program-to-merge-two-sorted-arrays")},{question:"Find second largest number.",answer:"Sort and pick second element, or track largest and second_largest in one pass (more efficient).",code:[{language:"python",snippet:`def second_largest(nums):
    unique = sorted(set(nums), reverse=True)
    return unique[1] if len(unique) >= 2 else None

print(second_largest([10, 5, 20, 8, 20]))  # 10`}],source:C("python-program-to-find-second-largest-number-in-a-list")},{question:"Check if number is perfect/disarium/automorphic.",answer:`Perfect number: sum of proper divisors equals the number (6 = 1+2+3).
Disarium number: sum of digits raised to power of their position equals the number (135 = 1¹+3²+5³).
Automorphic number: square ends with the number itself (25² = 625).`,code:[{language:"python",snippet:`def is_perfect(n):
    return sum(i for i in range(1, n) if n % i == 0) == n

def is_automorphic(n):
    sq = str(n * n)
    return sq.endswith(str(n))

print(is_perfect(6))       # True
print(is_automorphic(25))  # True`}],source:C("perfect-number-in-python")},{question:"Binary to decimal conversion.",answer:"Use int(binary_string, 2) built-in, or manual: multiply each bit by 2^position and sum.",code:[{language:"python",snippet:`binary = '1011'
print(int(binary, 2))  # 11

# manual
decimal = sum(int(bit) * 2**i for i, bit in enumerate(reversed(binary)))
print(decimal)  # 11`}],source:C("python-program-to-convert-binary-to-decimal")},{question:"Decimal to binary.",answer:"Use bin(n)[2:] to strip 0b prefix, or repeatedly divide by 2 collecting remainders.",code:[{language:"python",snippet:`n = 11
print(bin(n)[2:])  # 1011

# manual
num, bits = n, ''
while num:
    bits = str(num % 2) + bits
    num //= 2
print(bits)  # 1011`}],source:C("python-program-to-convert-decimal-to-binary")},{question:"String compression logic.",answer:"Run-length encoding: replace consecutive duplicates with char + count. Example: aaabb → a3b2. Only compress if result is shorter.",code:[{language:"python",snippet:`def compress(s):
    if not s:
        return s
    result, count = [], 1
    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            result.append(s[i-1] + str(count))
            count = 1
    result.append(s[-1] + str(count))
    compressed = ''.join(result)
    return compressed if len(compressed) < len(s) else s

print(compress('aaabbcc'))  # a3b2c2`}],source:C("string-compression-in-python")},{question:"Find repeated words in sentence.",answer:"Split sentence into words, use Counter or dict to find words appearing more than once. Normalize case and strip punctuation for accuracy.",code:[{language:"python",snippet:`from collections import Counter
import re

def repeated_words(sentence):
    words = re.findall(r'\\b\\w+\\b', sentence.lower())
    counts = Counter(words)
    return [w for w, c in counts.items() if c > 1]

print(repeated_words('the cat and the dog and the bird'))  # ['the', 'and']`}],source:C("python-program-to-count-words-in-a-sentence")}],Jf=[{question:"Explain multithreading.",answer:`Multithreading runs multiple threads within one process, sharing the same memory space. In Python, use the threading module. Good for I/O-bound tasks (network, file, waiting for UI).

Due to the GIL, threads do not achieve true parallel CPU execution for CPU-bound work — use multiprocessing instead for that.`,code:[{language:"python",snippet:`import threading

def task(name):
    print(f'Thread {name} running')

t1 = threading.Thread(target=task, args=('A',))
t2 = threading.Thread(target=task, args=('B',))
t1.start(); t2.start()
t1.join(); t2.join()`}],source:C("multithreading-python")},{question:"Multithreading vs multiprocessing.",answer:`Multithreading: multiple threads, one process, shared memory, GIL limits CPU parallelism — best for I/O-bound.

Multiprocessing: multiple processes, separate memory, true parallel CPU usage — best for CPU-bound (heavy computation, data processing).

In test automation: parallel browser tests often use multiprocessing or pytest-xdist, not threads.`,source:C("difference-between-multiprocessing-and-multithreading-in-python")},{question:"What is GIL?",answer:`The Global Interpreter Lock (GIL) is a mutex that allows only one thread to execute Python bytecode at a time in CPython. It simplifies memory management but prevents true multi-core parallelism for CPU-bound threads.

I/O operations release the GIL, so threads still help for I/O-bound work. Alternatives: multiprocessing, or other Python implementations (Jython, IronPython) without GIL.`,source:C("global-interpreter-lock-in-python")},{question:"What is concurrency?",answer:`Concurrency is structuring a program to handle multiple tasks in overlapping time periods — tasks make progress without necessarily running simultaneously. Parallelism means tasks run at the same time on multiple cores.

Python achieves concurrency via threading (I/O-bound), asyncio (async/await), or multiprocessing (CPU-bound parallelism).`,source:C("concurrency-in-python")},{question:"Async programming?",answer:`Async programming uses async/await syntax with an event loop (asyncio module). Coroutines yield control while waiting for I/O instead of blocking the thread.

Ideal for many concurrent network requests or API calls. Not faster for CPU-heavy work. In automation, useful for parallel API testing without threads.`,code:[{language:"python",snippet:`import asyncio

async def fetch():
    await asyncio.sleep(1)  # non-blocking wait
    return 'done'

async def main():
    results = await asyncio.gather(fetch(), fetch())
    print(results)

asyncio.run(main())`}],source:C("asyncio-in-python")},{question:"File handling in Python.",answer:`Use open() with a context manager (with statement) for safe automatic close. Modes: r (read), w (write), a (append), b (binary), + (read/write).

read(), readline(), readlines() for reading; write(), writelines() for writing. pathlib.Path is the modern approach for file paths.`,code:[{language:"python",snippet:`with open('data.txt', 'r', encoding='utf-8') as f:
    content = f.read()

with open('out.txt', 'w') as f:
    f.write('Hello')`}],source:C("file-handling-python")},{question:"CSV/Excel reading.",answer:`CSV: use csv module or pandas.read_csv(). Excel: use openpyxl or pandas.read_excel() (requires openpyxl/xlrd).

Pandas is standard in test automation for data-driven testing — read test data from spreadsheets and feed to pytest parametrization.`,code:[{language:"python",snippet:`import csv
import pandas as pd

# CSV
with open('tests.csv') as f:
    rows = list(csv.DictReader(f))

# Excel
df = pd.read_excel('testdata.xlsx', sheet_name='Login')
print(df.head())`}],source:C("reading-csv-files-in-python")},{question:"Logging implementation.",answer:`Use the logging module instead of print(). Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL. Configure once with basicConfig or dictConfig.

In frameworks: log to file + console, include timestamp and level. log = logging.getLogger(__name__) in each module.`,code:[{language:"python",snippet:`import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.FileHandler('test.log'),
        logging.StreamHandler()
    ]
)
logging.info('Test started')`}],source:C("logging-in-python")},{question:"Regex questions.",answer:`Regular expressions match patterns in text. Use re module: re.search() (first match), re.findall() (all matches), re.sub() (replace), re.compile() (reusable pattern).

Common patterns: \\d+ (digits), \\w+ (word), .* (any), ^ $ (start/end). Raw strings r"pattern" avoid escape issues.`,code:[{language:"python",snippet:`import re

text = 'Order ID: 12345, Status: PASS'
id_match = re.search(r'ID: (\\d+)', text)
print(id_match.group(1))  # 12345

emails = re.findall(r'[\\w.-]+@[\\w.-]+', 'a@b.com c@d.com')`}],source:C("python-regex-re-module")},{question:"JSON parsing.",answer:`json.loads() parses JSON string to Python dict/list. json.dumps() serializes Python object to JSON string. json.load() / json.dump() for file I/O.

Essential for API test automation — parse responses and assert on fields.`,code:[{language:"python",snippet:`import json

data = '{"name": "test", "status": 200}'
parsed = json.loads(data)
print(parsed['status'])  # 200

print(json.dumps(parsed, indent=2))`}],source:C("json-in-python")},{question:"API response handling.",answer:`Use requests library: response = requests.get/post(url, headers=..., json=...). Key attributes: status_code, json(), text, headers, elapsed.

Assert status code and response body in tests. Handle timeouts, auth tokens, and session cookies via requests.Session().`,code:[{language:"python",snippet:`import requests

resp = requests.post(
    'https://api.example.com/login',
    json={'user': 'admin', 'pass': 'secret'},
    timeout=10
)
assert resp.status_code == 200
data = resp.json()
assert data['token']`}],source:C("python-requests-tutorial")},{question:"Database connection using Python.",answer:`Use DB-API drivers: sqlite3 (built-in), psycopg2 (PostgreSQL), pymysql/mysql-connector (MySQL). Pattern: connect → cursor → execute → fetch → commit → close.

In test automation: verify DB state after API/UI actions, seed test data, cleanup after tests.`,code:[{language:"python",snippet:`import sqlite3

conn = sqlite3.connect('test.db')
cur = conn.cursor()
cur.execute('SELECT * FROM users WHERE id = ?', (1,))
rows = cur.fetchall()
conn.close()`}],source:C("python-database-connection")},{question:"Virtual environment.",answer:`A virtual environment (venv) isolates project dependencies from system Python. Create: python -m venv venv. Activate: venv\\Scripts\\activate (Windows) or source venv/bin/activate (Mac/Linux).

Always use a venv per project — avoids version conflicts between automation projects.`,source:Wf("python/python_venv.htm")},{question:"Pip requirements.",answer:`pip install package installs dependencies. pip freeze > requirements.txt captures exact versions. pip install -r requirements.txt installs all dependencies for a project.

Pin versions in CI/CD for reproducible builds. Common in automation: selenium, pytest, requests, openpyxl, allure-pytest.`,code:[{language:"text",snippet:`# requirements.txt example
selenium==4.15.0
pytest==7.4.3
requests==2.31.0
openpyxl==3.1.2`}],source:C("how-to-use-pip-requirements-file-in-python")},{question:"Pytest fixtures.",answer:`Fixtures provide setup/teardown and shared test data. Defined with @pytest.fixture. Tests request fixtures by name as parameters. scope controls lifetime: function, class, module, session.

conftest.py holds shared fixtures. yield fixtures run teardown after yield.`,code:[{language:"python",snippet:`import pytest

@pytest.fixture
def browser():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_login(browser):
    browser.get('https://example.com')
    assert 'Login' in browser.title`}],source:C("pytest-fixtures")},{question:"Parametrization in pytest.",answer:`@pytest.mark.parametrize runs the same test with multiple input sets. Pass arg names as string and list of tuples.

Ideal for data-driven UI/API tests — one test function, many data rows from a list, CSV, or Excel.`,code:[{language:"python",snippet:`import pytest

@pytest.mark.parametrize('user,password,expected', [
    ('admin', 'pass123', 200),
    ('guest', 'wrong',   401),
    ('',      '',        400),
])
def test_login(user, password, expected):
    resp = api_login(user, password)
    assert resp.status_code == expected`}],source:C("parameterized-testing-with-pytest")}],Vf={category:"Basic Python",tags:["python","core"],difficulty:"easy",priority:"high"},$f={category:"Python Coding Questions",tags:["python","coding"],difficulty:"medium",priority:"high"},Gf={category:"Advanced Python",tags:["python","advanced"],difficulty:"medium",priority:"critical"},Xf=ke({id:"python",number:2,title:"Python Core",description:"This section destroys many automation testers because they only know Selenium syntax. Master Python fundamentals and coding problems.",priority:"critical",color:"var(--amber)",questions:[...K("py",Hf,Vf),...K("pyc",Qf,$f),...K("pya",Jf,Gf)]}),Kf=[{question:"What is Selenium?",answer:`Selenium is an open-source suite of tools for automating web browsers. It supports functional and regression testing of web applications across browsers and platforms. Selenium is not a single tool — it includes WebDriver, IDE, and Grid.

WebDriver is the primary component used in professional automation frameworks today.`,source:c("selenium-interview-questions")},{question:"Selenium components?",answer:`1. Selenium WebDriver — API to control browsers programmatically (most used).
2. Selenium IDE — browser extension for record-and-playback (prototyping only).
3. Selenium Grid — runs tests in parallel across machines/browsers.
4. Selenium RC (deprecated) — old server-based approach, replaced by WebDriver.`,source:c("components-of-selenium")},{question:"Why Selenium over other tools?",answer:`Selenium is free, open-source, supports multiple languages (Python, Java, C#), all major browsers, and integrates with TestNG/pytest, Jenkins, and CI/CD. Large community and extensive documentation.

Alternatives like Cypress, Playwright, and Katalon exist — Selenium remains industry standard due to flexibility and vendor-neutral browser control.`,source:c("why-selenium-is-best-automation-tool")},{question:"Advantages and limitations of Selenium.",answer:`Advantages: free, multi-browser, multi-language, parallel execution with Grid, large ecosystem, CI/CD friendly.

Limitations: web-only (no native mobile/desktop), no built-in reporting, CAPTCHA/OTP/barcode cannot be automated easily, steep learning curve for framework design, flaky tests if waits/locators are poor, no automatic test maintenance.`,source:c("advantages-and-disadvantages-of-selenium")},{question:"Difference between Selenium RC and WebDriver.",answer:`Selenium RC used a JavaScript-based server (Selenium Server) as a proxy between code and browser — slower, more complex. WebDriver communicates directly with browser native APIs — faster, simpler, more stable.

WebDriver is the modern standard. RC is deprecated and removed from Selenium 3+.`,source:c("difference-between-selenium-rc-and-webdriver")},{question:"WebDriver architecture.",answer:`Client Library (Python/Java code) → JSON Wire Protocol / W3C WebDriver Protocol → Browser Driver (ChromeDriver, GeckoDriver) → Browser.

Your test script sends commands (find element, click) as HTTP requests. The driver translates them to browser-native calls. Each browser needs its own driver executable.`,source:c("selenium-webdriver-architecture")},{question:"How browser communicates with Selenium?",answer:`Selenium WebDriver uses the W3C WebDriver protocol (formerly JSON Wire Protocol). Test code sends HTTP REST commands to the browser driver, which controls the browser.

Example flow: driver.get(url) → HTTP POST to driver → ChromeDriver opens URL in Chrome → response sent back to test script.`,source:c("how-does-selenium-webdriver-work")}],Yf=[{question:"Types of locators.",answer:`8 locator strategies in Selenium:
1. ID — fastest, most reliable if unique
2. Name
3. ClassName
4. TagName
5. LinkText / PartialLinkText
6. CSS Selector
7. XPath
8. DOM (rarely used)

Priority: ID > Name > CSS > XPath. Always prefer stable, unique locators.`,source:c("locators-in-selenium")},{question:"Difference between XPath and CSS Selector.",answer:`CSS Selector: faster, simpler syntax, good for class/id/tag-based selection, cannot traverse up the DOM easily.

XPath: more powerful, can traverse any direction (parent, sibling, ancestor), supports text-based matching, but slower and more brittle if overused.

Use CSS for simple locators; XPath when you need text, axes, or complex hierarchy.`,source:c("css-selectors-vs-xpath")},{question:"Absolute vs relative XPath.",answer:`Absolute XPath starts from root (/html/body/div[1]/...) — breaks with any DOM change, avoid in automation.

Relative XPath starts from anywhere (//div[@id='login']) — more resilient, preferred approach.

Always use relative XPath with unique attributes, not positional indexes like div[3]/span[2].`,source:c("absolute-and-relative-xpath-in-selenium")},{question:"Dynamic XPath.",answer:`Dynamic XPath handles elements whose attributes change at runtime (dynamic IDs, auto-generated classes). Strategies:

- contains(): //input[contains(@id, 'username')]
- starts-with(): //button[starts-with(@id, 'submit')]
- text(): //span[text()='Login']
- Combine stable parent + relative child
- Use data-testid attributes (best practice)`,code:[{language:"python",snippet:`# Dynamic ID partial match
driver.find_element(By.XPATH, "//input[contains(@id, 'email')]")

# Text-based
driver.find_element(By.XPATH, "//button[normalize-space()='Submit']")`}],source:c("dynamic-xpath-in-selenium")},{question:"Write XPath for difficult elements.",answer:`Techniques for hard elements:

1. Following sibling: //label[text()='Email']/following-sibling::input
2. Parent: //input[@type='checkbox']/..
3. Ancestor: //span[text()='Error']/ancestor::div[@class='form-group']
4. Multiple conditions: //input[@type='text' and @name='user']
5. Index: (//div[@class='row'])[2]//button`,code:[{language:"python",snippet:`# Label-to-input association
email = driver.find_element(
    By.XPATH, "//label[text()='Email']/following-sibling::input"
)

# Table cell by row/column text
cell = driver.find_element(
    By.XPATH, "//td[text()='John']/following-sibling::td[2]"
)`}],source:c("xpath-axes-in-selenium")},{question:"Following-sibling, ancestor, descendant usage.",answer:`XPath axes navigate relative to current node:

- following-sibling:: — siblings after current node
- preceding-sibling:: — siblings before
- ancestor:: — parent/grandparent chain
- descendant:: — all children at any depth
- parent:: — immediate parent
- child:: — direct children`,code:[{language:"python",snippet:`# Sibling
//h3[text()='Section']/following-sibling::p[1]

# Ancestor
//span[@class='error']/ancestor::form

# Descendant
//div[@id='menu']//a[text()='Settings']`}],source:c("xpath-axes-in-selenium")},{question:"When CSS is preferred over XPath?",answer:`Prefer CSS when:
- Element has stable id, class, or name
- Simple hierarchy selection (#login-form input[type=email])
- Performance matters (CSS is generally faster)
- You do not need text or upward traversal

Prefer XPath when you need text matching, sibling/parent navigation, or complex conditional logic.`,source:c("css-selectors-in-selenium")}],Zf=[{question:"Difference between find_element and find_elements.",answer:`find_element(locator) — returns the first matching WebElement. Throws NoSuchElementException if not found.

find_elements(locator) — returns a list of all matches. Returns empty list [] if none found (no exception).

Use find_elements when checking existence without failing, or when iterating multiple elements.`,code:[{language:"python",snippet:`from selenium.webdriver.common.by import By

# Single element
btn = driver.find_element(By.ID, 'submit')

# Multiple — no exception if empty
items = driver.find_elements(By.CLASS_NAME, 'list-item')
print(len(items))`}],source:c("find-element-and-find-elements-in-selenium")},{question:"How to handle dropdowns?",answer:`Use Select class from selenium.webdriver.support.ui for standard <select> elements.

Methods: select_by_visible_text(), select_by_value(), select_by_index(), deselect_all().

For custom dropdowns (non-select), click to open and click the option element directly.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import Select

dropdown = Select(driver.find_element(By.ID, 'country'))
dropdown.select_by_visible_text('India')
dropdown.select_by_value('IN')`}],source:c("how-to-handle-dropdown-in-selenium")},{question:"How to handle autosuggestions?",answer:`Type into input, wait for suggestion list to appear, then click the matching option.

Steps: locate input → send_keys(partial text) → explicit wait for suggestions → click desired item by text or index.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

inp = driver.find_element(By.ID, 'search')
inp.send_keys('Pyth')

option = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//li[contains(text(),'Python')]"))
)
option.click()`}],source:c("handling-auto-suggestion-in-selenium")},{question:"How to handle checkboxes/radio buttons?",answer:`Use is_selected() to check state. Use click() to toggle checkbox or select radio button.

For radio groups, find by value or associated label. Do not assume click is needed — check state first to avoid deselecting.`,code:[{language:"python",snippet:`checkbox = driver.find_element(By.ID, 'terms')
if not checkbox.is_selected():
    checkbox.click()

radio = driver.find_element(By.XPATH, "//input[@type='radio' and @value='male']")
radio.click()`}],source:c("how-to-handle-checkbox-in-selenium")},{question:"Handle hidden elements.",answer:`Hidden elements (display:none, visibility:hidden) cannot be clicked directly. Options:

1. JavaScript click: driver.execute_script("arguments[0].click()", element)
2. Scroll into view first, then click
3. Remove hidden attribute via JS (use cautiously)
4. Interact with visible proxy element if available`,code:[{language:"python",snippet:`elem = driver.find_element(By.ID, 'hidden-btn')
driver.execute_script('arguments[0].click();', elem)

# Scroll into view
driver.execute_script('arguments[0].scrollIntoView(true);', elem)
elem.click()`}],source:c("how-to-click-on-hidden-element-in-selenium")},{question:"Handle dynamic elements.",answer:`Dynamic elements load asynchronously or change attributes. Solutions:

1. Explicit waits (WebDriverWait + expected_conditions)
2. Stable locators (data-testid, partial attribute match)
3. Retry logic with custom wait
4. Avoid Thread.sleep — use condition-based waits`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

element = WebDriverWait(driver, 15).until(
    EC.visibility_of_element_located((By.ID, 'dynamic-content'))
)`}],source:c("handling-dynamic-elements-in-selenium")},{question:"Handle stale element exception.",answer:`StaleElementReferenceException occurs when an element reference is outdated — DOM was refreshed or page re-rendered after you found the element.

Fix: re-find the element before interacting, use explicit waits, avoid storing WebElement references across page navigations. Retry wrapper is common in frameworks.`,code:[{language:"python",snippet:`from selenium.common.exceptions import StaleElementReferenceException

def safe_click(driver, locator, retries=3):
    for _ in range(retries):
        try:
            driver.find_element(*locator).click()
            return
        except StaleElementReferenceException:
            continue`}],source:c("stale-element-reference-exception-selenium")},{question:"Handle element click intercepted exception.",answer:`ElementClickInterceptedException — another element (overlay, modal, cookie banner) covers the target. Fixes:

1. Wait for overlay to disappear
2. Scroll element into view
3. JavaScript click
4. Close popup/banner first`,code:[{language:"python",snippet:`from selenium.webdriver.common.action_chains import ActionChains

# Scroll then click
elem = driver.find_element(By.ID, 'submit')
ActionChains(driver).move_to_element(elem).click().perform()

# JS click fallback
driver.execute_script('arguments[0].click();', elem)`}],source:c("element-click-intercepted-exception-selenium")},{question:"Handle NoSuchElementException.",answer:`Thrown when find_element cannot locate the element. Causes: wrong locator, element not yet loaded, element in iframe, typo in attribute.

Fix: verify locator in DevTools, add explicit wait, check iframe context, use find_elements to check existence without crash.`,source:c("nosuchelementexception-in-selenium")},{question:"Difference between implicit and explicit wait.",answer:`Implicit wait: driver.implicitly_wait(10) — global setting, driver polls for element before throwing exception. Applies to all find_element calls.

Explicit wait: WebDriverWait + expected condition — waits for a specific condition on a specific element (clickable, visible). More precise and recommended.

Never mix many implicit waits with explicit waits — causes unpredictable delays.`,code:[{language:"python",snippet:`# Implicit — global
driver.implicitly_wait(10)

# Explicit — recommended
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, 'login-btn'))
)`}],source:c("implicit-wait-vs-explicit-wait-in-selenium")},{question:"Fluent wait?",answer:`FluentWait polls at a custom interval and ignores specific exceptions during the wait period. More flexible than WebDriverWait.

Use when you need custom polling frequency or to ignore StaleElementReferenceException during wait.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

wait = WebDriverWait(
    driver, timeout=30, poll_frequency=2,
    ignored_exceptions=[NoSuchElementException]
)
wait.until(EC.visibility_of_element_located((By.ID, 'result')))`}],source:c("fluent-wait-in-selenium")},{question:"Which wait do you prefer and why?",answer:`Explicit wait (WebDriverWait) — it waits for a specific condition rather than a fixed time, reducing flakiness and execution time. Encapsulate common waits in utility methods (wait_for_clickable, wait_for_visible).

Avoid Thread.sleep — wastes time and does not guarantee readiness. Set implicit wait to 0 when using explicit waits consistently.`,source:M("selenium-wait-for-page-to-load")},{question:"What is synchronization issue?",answer:`Synchronization issues occur when test speed outpaces application load speed — test tries to interact before element is ready. Symptoms: NoSuchElementException, stale element, click intercepted.

Fix with proper waits, page load strategy, and ensuring AJAX/dynamic content completes before assertions.`,source:c("synchronization-in-selenium-webdriver")}],em=[{question:"Handle multiple windows/tabs.",answer:"Use driver.window_handles (list of IDs) and driver.switch_to.window(handle). Get current with driver.current_window_handle. Always switch back to original window after validation.",code:[{language:"python",snippet:`main = driver.current_window_handle
driver.find_element(By.LINK_TEXT, 'Open New Tab').click()

for handle in driver.window_handles:
    if handle != main:
        driver.switch_to.window(handle)
        break

# do work in new tab
driver.close()
driver.switch_to.window(main)`}],source:c("how-to-handle-multiple-windows-in-selenium")},{question:"Handle frames/iFrames.",answer:`Switch context with driver.switch_to.frame(index/name/WebElement). Always switch back with driver.switch_to.default_content() when done.

Nested frames require switching into each level. Elements outside frame are not accessible while inside frame context.`,code:[{language:"python",snippet:`driver.switch_to.frame('iframe-id')
# or
driver.switch_to.frame(driver.find_element(By.TAG_NAME, 'iframe'))

driver.find_element(By.ID, 'inner-btn').click()
driver.switch_to.default_content()`}],source:c("how-to-handle-frames-in-selenium")},{question:"Handle alerts/popups.",answer:`JavaScript alerts/confirms/prompts: use driver.switch_to.alert. Methods: accept(), dismiss(), send_keys() (prompt), .text.

HTML modals are NOT alerts — handle them as regular DOM elements with explicit waits.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
print(alert.text)
alert.accept()  # or alert.dismiss()`}],source:c("alert-popup-handling-in-selenium-webdriver")},{question:"Handle file upload/download.",answer:`Upload: send_keys with absolute file path directly to <input type="file"> — no need to open OS dialog.

Download: configure browser profile to set download directory, then verify file exists after click. ChromeOptions with prefs for download.default_directory.`,code:[{language:"python",snippet:`upload = driver.find_element(By.ID, 'file-upload')
upload.send_keys('/absolute/path/to/file.pdf')

# Chrome download config
opts = webdriver.ChromeOptions()
opts.add_experimental_option('prefs', {
    'download.default_directory': '/tmp/downloads'
})`}],source:c("file-upload-in-selenium")},{question:"Handle authentication popup.",answer:`HTTP Basic Auth popup: pass credentials in URL — https://username:password@host.com. Or use Chrome DevTools Protocol / AutoIt (Windows) for native dialogs.

Form-based login: automate normally with find_element + send_keys. Never hardcode credentials in scripts — use environment variables or secrets manager.`,code:[{language:"python",snippet:`import os

# Form login
driver.find_element(By.ID, 'user').send_keys(os.getenv('TEST_USER'))
driver.find_element(By.ID, 'pass').send_keys(os.getenv('TEST_PASS'))
driver.find_element(By.ID, 'login').click()`}],source:c("how-to-handle-login-popup-in-selenium-webdriver")},{question:"Execute JavaScript in Selenium.",answer:"driver.execute_script(js, *args) runs JavaScript in browser context. Common uses: click hidden elements, scroll, remove overlays, get page load state, set attribute values.",code:[{language:"python",snippet:`# Scroll to bottom
driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')

# Click via JS
driver.execute_script('arguments[0].click();', element)

# Get return value
title = driver.execute_script('return document.title;')`}],source:c("javascriptexecutor-in-selenium")},{question:"Scroll page.",answer:"Methods: scrollIntoView on element, window.scrollBy pixels, scroll to bottom/top via JS, ActionChains move_to_element for hover menus.",code:[{language:"python",snippet:`elem = driver.find_element(By.ID, 'footer')
driver.execute_script('arguments[0].scrollIntoView(true);', elem)

# Scroll down 500px
driver.execute_script('window.scrollBy(0, 500);')`}],source:c("scroll-down-in-selenium-webdriver")},{question:"Screenshot capture.",answer:`driver.save_screenshot('path.png') — full page screenshot. element.screenshot('element.png') — specific element.

In pytest: capture screenshot on failure in conftest.py using request.node and driver fixture. Attach to Allure/HTML reports.`,code:[{language:"python",snippet:`driver.save_screenshot('screenshots/failure.png')

# Element screenshot
elem = driver.find_element(By.ID, 'error-msg')
elem.screenshot('error_element.png')`}],source:c("how-to-take-screenshot-in-selenium-webdriver")}],tm=[{question:"How would you automate OTP-based login?",answer:`Approaches:
1. Test environment: disable OTP or use static test OTP from backend team
2. Read OTP from test email/SMS API (Mailosaur, Twilio test API)
3. Fetch OTP from database in test env
4. Mock OTP validation via API stub

Never automate production OTP SMS — use test hooks agreed with dev team.`,source:M("automate-otp-authentication-selenium")},{question:"How would you automate CAPTCHA?",answer:`CAPTCHA is designed to block automation. Options:
1. Disable CAPTCHA in test/staging environment (best practice)
2. Use test bypass key from dev team
3. Mock CAPTCHA service in test env

Do NOT use third-party CAPTCHA solving services in professional test suites — unreliable and against most ToS.`,source:c("how-to-handle-captcha-in-selenium")},{question:"How would you handle dynamic IDs?",answer:`1. Use partial match: contains(@id, 'stable-part')
2. Use data-testid or data-qa attributes (request from devs)
3. CSS attribute selectors: [id^='prefix']
4. Locate by stable parent + relative XPath
5. Avoid absolute XPath with indexes`,code:[{language:"python",snippet:`driver.find_element(By.CSS_SELECTOR, '[data-testid="login-button"]')
driver.find_element(By.XPATH, "//button[contains(@id, 'submit-btn')]")`}],source:c("dynamic-xpath-in-selenium")},{question:"How would you validate broken links?",answer:`Collect all <a href> elements, send HTTP HEAD/GET request to each URL, assert status code is 200. Use requests library alongside Selenium, or Java HttpURLConnection.

Skip mailto:, javascript:, and anchor-only links.`,code:[{language:"python",snippet:`import requests

links = driver.find_elements(By.TAG_NAME, 'a')
for link in links:
    url = link.get_attribute('href')
    if url and url.startswith('http'):
        resp = requests.head(url, timeout=5)
        assert resp.status_code < 400, f'Broken: {url}'`}],source:c("find-broken-links-in-selenium")},{question:"How would you validate UI alignment?",answer:`Compare element location and size using .location, .size, .rect. Assert relative positions (button below label, elements aligned). Visual regression tools (Applitools, Percy) compare screenshots pixel-by-pixel.

For manual-style checks: get bounding boxes of two elements and compare y-coordinates for horizontal alignment.`,source:c("ui-testing-with-selenium")},{question:"How would you test pagination?",answer:"Verify: page 1 loads with expected row count, Next/Previous buttons work, page numbers update, last page disables Next, first page disables Previous, data changes between pages, URL/page param updates correctly.",code:[{language:"python",snippet:`rows = driver.find_elements(By.CSS_SELECTOR, 'table tbody tr')
assert len(rows) <= 10  # page size

driver.find_element(By.LINK_TEXT, 'Next').click()
WebDriverWait(driver, 10).until(
    EC.text_to_be_present_in_element((By.ID, 'page-num'), '2')
)`}],source:c("pagination-handling-in-selenium")},{question:"How would you test a search feature?",answer:"Test cases: valid search returns results, invalid/no results message, partial match, special characters, empty search, case sensitivity, result count, pagination of results, search persistence on navigation back.",source:c("test-cases-for-search-functionality")},{question:"How would you automate table validation?",answer:"Read table rows/cells via find_elements on tr/td. Compare cell text against expected data from a list or Excel. Dynamic tables: use column headers to map indices, then iterate rows.",code:[{language:"python",snippet:`rows = driver.find_elements(By.CSS_SELECTOR, 'table tbody tr')
data = []
for row in rows:
    cols = row.find_elements(By.TAG_NAME, 'td')
    data.append([c.text for c in cols])

assert data[0] == ['John', 'Admin', 'Active']`}],source:c("handling-web-table-in-selenium")},{question:"How would you validate sorting functionality?",answer:"Click column header, read all values in that column, verify ascending/descending order in Python with sorted(). Click again to verify toggle. Test numeric vs alphabetic sort separately.",code:[{language:"python",snippet:`driver.find_element(By.XPATH, "//th[text()='Name']").click()

cells = driver.find_elements(By.CSS_SELECTOR, 'td.name-col')
names = [c.text for c in cells]
assert names == sorted(names)`}],source:c("sorting-in-web-table-selenium")},{question:"How would you automate calendar/date picker?",answer:"Approach depends on widget type. Standard HTML5 date input: send_keys('2024-01-15'). Custom widgets: click input, navigate month/year, click day cell by text or attribute. Use explicit waits after each navigation click.",code:[{language:"python",snippet:`# HTML5 date input
date_input = driver.find_element(By.CSS_SELECTOR, 'input[type="date"]')
date_input.send_keys('2024-06-15')

# Custom picker
driver.find_element(By.ID, 'date-picker').click()
driver.find_element(By.XPATH, "//td[@data-date='2024-06-15']").click()`}],source:c("how-to-handle-date-picker-in-selenium")},{question:"How would you handle flaky tests?",answer:`Root causes: poor locators, hard sleeps, test data dependency, environment instability, async loading.

Fixes: explicit waits, stable locators (data-testid), test isolation, retry only for known transient failures (pytest-rerunfailures), parallel-safe test data, screenshot + logs on failure, quarantine consistently failing tests until fixed.`,source:M("flaky-selenium-test")},{question:"How would you reduce execution time?",answer:"Run headless, parallel execution (pytest-xdist), skip unnecessary waits, reuse browser session where safe, run smoke subset on commit and full regression nightly, optimize locators, disable images in browser prefs, use API setup instead of UI for test data creation.",source:c("speed-up-selenium-test-cases-execution")},{question:"How would you run tests in parallel?",answer:`pytest-xdist: pytest -n 4 (4 workers). Each worker needs isolated browser instance and test data. Selenium Grid distributes tests across machines/browsers.

Ensure tests are independent — no shared state, unique user accounts, thread-safe reporting.`,code:[{language:"bash",snippet:`# Parallel with pytest-xdist
pytest tests/ -n 4 --dist loadscope

# Selenium Grid — point driver to hub
driver = webdriver.Remote(
    command_executor='http://localhost:4444',
    options=chrome_options
)`}],source:c("parallel-testing-in-selenium")},{question:"How would you run tests on multiple browsers?",answer:"Parameterize browser in pytest with @pytest.mark.parametrize. Use WebDriver Manager or Grid to provision Chrome, Firefox, Edge drivers. Run same test suite against each browser — catches browser-specific issues.",code:[{language:"python",snippet:`import pytest
from selenium import webdriver

@pytest.mark.parametrize('browser', ['chrome', 'firefox'])
def test_login(browser):
    if browser == 'chrome':
        driver = webdriver.Chrome()
    else:
        driver = webdriver.Firefox()
    driver.get('https://example.com')
    # ... test logic
    driver.quit()`}],source:c("cross-browser-testing-using-selenium-webdriver")}],nm={category:"Selenium Basics",tags:["selenium","basics"],difficulty:"easy",priority:"high"},rm={category:"Locators",tags:["selenium","locators","xpath"],difficulty:"medium",priority:"critical"},sm={category:"Web Elements",tags:["selenium","waits","elements"],difficulty:"medium",priority:"critical"},im={category:"Browser Handling",tags:["selenium","browser"],difficulty:"medium",priority:"high"},om={category:"Selenium Scenarios",tags:["selenium","scenarios"],difficulty:"hard",priority:"high"},am=ke({id:"selenium",number:3,title:"Selenium",description:"This section is guaranteed in automation interviews. Cover locators, waits, browser handling, and real-world scenarios.",priority:"critical",color:"var(--green)",questions:[...K("sel",Kf,nm),...K("loc",Yf,rm),...K("we",Zf,sm),...K("bh",em,im),...K("scn",tm,om)]}),lm=[{question:"Explain your automation framework architecture.",answer:`A solid QA automation framework is layered: test layer (pytest test files), page object layer (UI locators and actions), business/service layer (API helpers, workflows), utilities (logging, config, data), and reporting/CI integration.

Tests stay thin — they call page methods and assert outcomes. Page objects hide Selenium/Playwright details. Config and credentials live outside tests. This separation makes maintenance easier when the UI or environment changes.

Example: A login test calls LoginPage.enter_credentials() and LoginPage.click_submit(), then asserts dashboard URL — it never touches raw driver.find_element calls.`,code:[{language:"python",snippet:`# tests/test_login.py — thin test layer
def test_valid_login(driver, config):
    login = LoginPage(driver)
    login.open(config.base_url)
    login.login(config.test_user, config.test_password)
    assert DashboardPage(driver).is_loaded()`}],source:M("test-automation-framework-design")},{question:"Did you create framework or maintain it?",answer:`Be honest about your role. If you built it: describe requirements gathered (POM, pytest, reporting, CI), tech choices, folder layout, and how you onboarded the team with README and code reviews.

If you maintained it: describe fixing flaky tests, adding page objects for new features, improving waits, refactoring duplicate code into utilities, and keeping Jenkins jobs green.

Example: "I inherited a Selenium + pytest framework with 200 tests. I refactored hard-coded sleeps to explicit waits, introduced conftest fixtures for driver lifecycle, and added Allure reporting — failure rate in CI dropped from 15% to under 3%."`,source:c("automation-testing-interview-questions")},{question:"Explain folder structure.",answer:`A typical Python + Selenium/Playwright framework structure:

project_root/
  tests/          — test modules (test_*.py)
  pages/          — Page Object classes
  utils/          — helpers (waits, file IO, DB)
  data/           — JSON/CSV test data
  config/         — env YAML/INI files
  reports/        — HTML/XML output
  conftest.py     — shared pytest fixtures
  pytest.ini      — pytest configuration
  requirements.txt

Keeping tests separate from page logic and config makes navigation predictable for any new team member.`,code:[{language:"bash",snippet:`project/
├── tests/
│   ├── test_login.py
│   └── test_checkout.py
├── pages/
│   ├── base_page.py
│   └── login_page.py
├── utils/
│   ├── logger.py
│   └── config_reader.py
├── data/
│   └── users.json
├── conftest.py
└── pytest.ini`}],source:ze("/selenium/selenium_automation_framework.htm")},{question:"Explain Page Object Model.",answer:`Page Object Model (POM) maps each UI page (or component) to a class. The class holds locators as attributes and exposes methods for user actions (click, type, select). Tests interact only with these methods, not raw locators.

When the UI changes, you update one page class instead of dozens of tests. POM also improves readability — test_login reads like a user story.

Example: LoginPage has locators for username, password, submit button, and methods login(user, pwd) that encapsulates the full flow.`,code:[{language:"python",snippet:`class LoginPage(BasePage):
    USERNAME = (By.ID, 'username')
    PASSWORD = (By.ID, 'password')
    SUBMIT   = (By.CSS_SELECTOR, 'button[type=submit]')

    def login(self, user, pwd):
        self.type(self.USERNAME, user)
        self.type(self.PASSWORD, pwd)
        self.click(self.SUBMIT)`}],source:c("page-object-model-for-automation")},{question:"Why POM?",answer:`Without POM, locators and Selenium calls are duplicated across tests. A single ID change breaks many files. POM centralizes locators and actions in one place per page.

Benefits: maintainability (one change point), readability (tests express intent), reusability (same page used by smoke and regression), and easier code review (reviewers see business actions, not XPath soup).

Example: If the login button ID changes from btn-login to login-submit, you update LoginPage only — 30 tests keep working without edits.`,source:c("advantages-of-page-object-model")},{question:"Hybrid framework?",answer:`A hybrid framework combines two or more approaches — commonly keyword-driven + data-driven + POM. Keywords describe actions (open browser, click, verify text); data files supply inputs; page objects implement the actual Selenium logic behind keywords.

Useful when manual testers or BAs contribute test cases in Excel/CSV while engineers maintain the underlying keyword library. Reduces coding for repetitive flows but needs discipline to avoid a messy keyword sprawl.

Example: A row in Excel says Action=Login, Username={user}, Password={pwd} — the keyword engine reads the row, loads user from a data sheet, and calls LoginPage.login().`,source:ze("/selenium/hybrid_framework.htm")},{question:"Data-driven framework?",answer:`Data-driven testing runs the same test logic with multiple data sets — from JSON, CSV, Excel, or pytest parametrize. Separates test data from test code so adding cases does not require new test methods.

In pytest, use @pytest.mark.parametrize or read external files in conftest. Assert the same outcomes for valid/invalid boundary cases.

Example: test_login runs 5 times with different username/password pairs — one test function, five data rows, five independent results in the report.`,code:[{language:"python",snippet:`import pytest

@pytest.mark.parametrize('user,pwd,expected', [
    ('valid@mail.com', 'Pass123', True),
    ('invalid', 'wrong', False),
    ('', 'Pass123', False),
])
def test_login(user, pwd, expected, login_page):
    result = login_page.login(user, pwd)
    assert result.success == expected`}],source:c("data-driven-testing")},{question:"Keyword-driven framework?",answer:`Keyword-driven framework defines reusable action keywords (OPEN_URL, CLICK, INPUT, VERIFY_TEXT) stored in a library. Test cases are written as sequences of keywords — often in spreadsheets — without Python/Java code per case.

Engine maps each keyword to an implementation function. Good for teams with mixed technical skills; downside is abstraction overhead and debugging indirection.

Example: Robot Framework is keyword-driven by design — "Click Button    Submit" calls the built-in or custom keyword implemented in Python libraries.`,source:c("keyword-driven-testing")},{question:"Explain utilities/helpers.",answer:`Utilities are shared, stateless helper modules — not tied to a single page. Common examples: explicit wait wrappers, screenshot capture, JSON/CSV readers, date generators, API client wrappers, DB query helpers, and random test data builders.

Keep utilities generic and well-tested. Page objects use utilities; tests should rarely import utilities directly except for special setup.

Example: wait_utils.wait_for_clickable(driver, locator, timeout=15) is used by every page class instead of repeating WebDriverWait boilerplate.`,code:[{language:"python",snippet:`def wait_for_visible(driver, locator, timeout=10):
    return WebDriverWait(driver, timeout).until(
        EC.visibility_of_element_located(locator)
    )

def read_json(path):
    with open(path) as f:
        return json.load(f)`}],source:c("test-automation-framework-best-practices")},{question:"How do you manage test data?",answer:`Strategies: (1) static JSON/CSV/YAML files in data/ folder versioned in Git; (2) pytest parametrize for small inline sets; (3) environment-specific data files (data/dev.json vs data/staging.json); (4) factories/faker for dynamic data; (5) DB seed scripts for integration tests.

Never commit real passwords or PII. Use secrets/env vars for credentials. Keep data independent from test logic so QA can add cases without touching code.

Example: users.json holds role-based accounts; conftest loads the file based on --env flag and injects test_user fixture into tests.`,code:[{language:"python",snippet:`# conftest.py
@pytest.fixture
def test_user(env):
    data = json.load(open(f'data/{env}/users.json'))
    return data['standard_user']`}],source:M("test-data-management-automation")},{question:"How do you manage configuration files?",answer:`Store environment settings in config files (config.ini, YAML, or .env) — base URL, timeouts, browser type, API endpoints. Load config once at session start via conftest or a Config singleton.

Override with CLI flags (--env=staging) or environment variables in Jenkins (BASE_URL, BROWSER). Never hardcode URLs or credentials in tests.

Example: config/dev.yaml has base_url: https://dev.app.com; Jenkins job sets ENV=staging and the framework loads config/staging.yaml automatically.`,code:[{language:"python",snippet:`import os, yaml

def load_config():
    env = os.getenv('ENV', 'dev')
    with open(f'config/{env}.yaml') as f:
        return yaml.safe_load(f)`}],source:c("configuration-management-in-test-automation")},{question:"Explain logging framework.",answer:`Use Python logging module — not print statements. Configure log level (DEBUG locally, INFO in CI), format with timestamp/thread/test name, and write to console plus rotating file (logs/test.log).

Log key steps: test start, navigation, assertions, failures with stack trace. Helps debug CI failures without re-running locally.

Example: logger.info("Logging in as %s", user) before action; logger.error("Element not found: %s", locator) in exception handlers.`,code:[{language:"python",snippet:`import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',
    handlers=[
        logging.FileHandler('logs/run.log'),
        logging.StreamHandler(),
    ],
)
logger = logging.getLogger(__name__)`}],source:c("logging-in-python")},{question:"Explain reporting mechanism.",answer:`Reporting answers: what ran, pass/fail, duration, failure reason, screenshots, and trends over time. Common tools: pytest-html, Allure, ExtentReports (Java), or custom JSON + dashboard.

Hook into pytest hooks (pytest_runtest_makereport) to capture status and attach screenshots on failure. Publish HTML/XML to Jenkins artifacts or Allure server after the pipeline.

Example: After each failed test, conftest attaches screenshot and browser console log to the Allure report — reviewers see failure context without re-running.`,source:M("test-reporting-in-automation")},{question:"Explain reusable methods.",answer:`Reusable methods live in base page classes, utility modules, or shared fixtures. Examples: click_and_wait, scroll_into_view, safe_type (clear + send_keys), login_as_role(role), and api_post_with_auth(endpoint, body).

Rule: if two tests duplicate more than 3 lines, extract a method. Name methods by user intent (submit_order) not by Selenium API (click_button_id_x).

Example: BasePage.click(locator) wraps wait + click + log — every page inherits it instead of copying WebDriverWait code.`,code:[{language:"python",snippet:`class BasePage:
    def click(self, locator):
        el = wait_for_clickable(self.driver, locator)
        el.click()
        logger.info('Clicked %s', locator)`}],source:c("reusable-functions-in-test-automation")},{question:"How do you capture screenshots on failure?",answer:`Use pytest hook pytest_runtest_makereport in conftest.py. When call.when == "call" and report.failed, call driver.save_screenshot() with a timestamped filename under reports/screenshots/.

Attach to Allure with allure.attach.file() or embed in HTML report. Ensure screenshot dir exists and Jenkins archives it as a build artifact.

Example: On failure, save reports/screenshots/test_login_20240531_143022.png and log the path in the console output for quick access.`,code:[{language:"python",snippet:`@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    report = outcome.get_result()
    if report.when == 'call' and report.failed:
        driver = item.funcargs.get('driver')
        if driver:
            path = f'reports/screenshots/{item.name}.png'
            driver.save_screenshot(path)`}],source:M("screenshot-on-test-failure-selenium")},{question:"How do you retry failed test cases?",answer:`Options: (1) pytest-rerunfailures plugin — @pytest.mark.flaky(reruns=2, reruns_delay=1); (2) retry only in CI with --reruns 2; (3) Jenkins retry failed stage; (4) separate quarantine job for known flaky tests.

Use retries sparingly — they mask real bugs. Pair with flake detection (track tests that pass on rerun) and fix root cause (waits, test data, env stability).

Example: pytest tests/ --reruns 2 --reruns-delay 3 runs failed tests up to two more times before marking final failure.`,code:[{language:"bash",snippet:`pip install pytest-rerunfailures
pytest tests/ --reruns 2 --reruns-delay 2`}],source:c("pytest-rerun-failed-tests")},{question:"How do you integrate Jenkins?",answer:`Create a Pipeline or Freestyle job that: checks out code from Git, creates a virtualenv, installs requirements.txt, runs pytest with markers/env vars, publishes HTML/Allure report, and archives screenshots/logs.

Store secrets (passwords, API keys) in Jenkins Credentials and inject as env vars. Trigger on push, PR, or nightly cron. Fail the build if test pass rate drops below threshold.

Example: Jenkinsfile runs stage("Test") { sh "pytest tests/ -m smoke --env=staging --alluredir=allure-results" } then allure includeProperties: false in post block.`,code:[{language:"bash",snippet:`# Jenkinsfile excerpt
stage('Automation') {
  steps {
    sh 'python -m venv venv && . venv/bin/activate'
    sh 'pip install -r requirements.txt'
    sh 'pytest tests/ -m regression --env=$ENV --junitxml=report.xml'
  }
  post {
    always { junit 'report.xml' }
  }
}`}],source:c("jenkins-integration-with-selenium")},{question:"How do you execute from command line?",answer:`Run pytest from project root after activating venv and installing dependencies. Common flags: -v (verbose), -m smoke (marker), -k "login" (name filter), --env=staging (custom option via conftest), --headed/--headless, parallel with pytest-xdist (-n auto).

CI and local should use the same command for consistency. Document the canonical run command in README.

Example: pytest tests/ -m smoke -v --env=qa --tb=short runs only smoke-tagged tests against QA with short tracebacks.`,code:[{language:"bash",snippet:`python -m venv venv
source venv/bin/activate   # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
pytest tests/ -m regression -v --env=staging --html=reports/report.html`}],source:c("pytest-command-line")},{question:"Explain pytest.ini.",answer:`pytest.ini is the project-level pytest config file (also pyproject.toml [tool.pytest.ini_options]). It sets defaults so you do not repeat flags every run.

Common settings: testpaths = tests, python_files = test_*.py, addopts = -v --tb=short, markers (smoke, regression), log_cli = true, filterwarnings.

Example: Defining marker smoke in pytest.ini lets you run pytest -m smoke without registering markers manually each time.`,code:[{language:"ini",snippet:`[pytest]
testpaths = tests
python_files = test_*.py
addopts = -v --tb=short --strict-markers
markers =
    smoke: quick sanity tests
    regression: full suite`}],source:c("pytest-ini-configuration")},{question:"Explain conftest.py.",answer:`conftest.py is a special pytest file for shared fixtures and hooks. pytest auto-discovers it — no import needed. Place at project root or tests/ folder; nested conftest.py scopes fixtures to subfolders.

Typical contents: driver/browser fixture (setup/teardown), config loader, API session, database connection, screenshot-on-failure hook, and custom CLI options (--env, --browser).

Example: A session-scoped driver fixture starts Chrome once for all tests in a module; function-scoped fixture clears cookies between tests.`,code:[{language:"python",snippet:`# conftest.py
@pytest.fixture(scope='function')
def driver(request):
    drv = webdriver.Chrome()
    yield drv
    drv.quit()`}],source:c("pytest-conftest-py-file")},{question:"Explain fixtures.",answer:`Fixtures provide setup/teardown and dependency injection for tests. Declare with @pytest.fixture; tests receive them as parameters by name. Scopes: function (default), class, module, package, session — control how often setup runs.

Use yield for teardown after test completes. fixture can depend on other fixtures (driver → login_page → logged_in_user). Use @pytest.fixture(params=[...]) for parametrized fixtures.

Example: logged_in_user fixture depends on driver and config — test_checkout only requests logged_in_user and starts already authenticated.`,code:[{language:"python",snippet:`@pytest.fixture
def logged_in_user(driver, config):
    LoginPage(driver).login(config.user, config.password)
    yield config.user
    # teardown if needed`}],source:c("pytest-fixtures")},{question:"How do you generate HTML reports?",answer:`Popular options: pytest-html (pytest --html=report.html --self-contained-html), Allure (pytest --alluredir=results then allure serve), or junit XML + Jenkins HTML publisher.

pytest-html gives a single self-contained file good for email/artifact sharing. Allure gives rich dashboards with history, categories, and attachments.

Example: pytest tests/ --html=reports/report.html --self-contained-html generates one HTML file with pass/fail, duration, and embedded logs — attach to Jenkins build.`,code:[{language:"bash",snippet:`pip install pytest-html allure-pytest
pytest tests/ --html=reports/report.html --self-contained-html
pytest tests/ --alluredir=allure-results
allure serve allure-results`}],source:M("pytest-html-report")},{question:"How do you manage environment-specific execution?",answer:`Use --env CLI option (registered in conftest), ENV environment variable in Jenkins, or separate config YAML per environment. Fixtures read config and expose base_url, credentials reference, and feature flags.

Same test code runs against dev/qa/staging/prod — only config changes. Prod runs should use read-only test accounts and restricted markers (@pytest.mark.prod_safe).

Example: pytest tests/ --env=staging loads config/staging.yaml; Jenkins sets ENV=qa in job parameters for on-demand QA runs.`,code:[{language:"python",snippet:`def pytest_addoption(parser):
    parser.addoption('--env', default='dev')

@pytest.fixture(scope='session')
def config(request):
    env = request.config.getoption('--env')
    return load_config(env)`}],source:c("environment-configuration-testing")},{question:"How do you run smoke/regression suites?",answer:`Tag tests with pytest markers: @pytest.mark.smoke for critical path (login, checkout), @pytest.mark.regression for full coverage. Register markers in pytest.ini to avoid warnings.

Smoke runs on every commit (fast, <15 min). Regression runs nightly or pre-release. Jenkins jobs pass -m smoke or -m regression. Can combine: -m "smoke and not slow".

Example: PR pipeline runs pytest -m smoke; nightly job runs pytest -m regression --env=staging with parallel workers (-n 4).`,code:[{language:"bash",snippet:`pytest tests/ -m smoke -v          # PR / quick check
pytest tests/ -m regression -n 4  # nightly full suite`}],source:M("smoke-testing-vs-regression-testing")},{question:"Git branching strategy?",answer:`For automation teams: feature branches per story (feature/QA-123-login-tests), PR into develop/main, CI runs smoke on PR, full regression on merge to develop, release branch for stabilization.

Keep test code in same repo as framework (or dedicated automation repo linked to app releases). Tag framework versions to match app releases. Never commit secrets — use .gitignore for reports, screenshots, .env.

Example: Branch feature/add-payment-tests → PR → Jenkins smoke on PR → merge to develop → nightly regression on develop.`,source:c("git-branching-strategies")},{question:"How do you handle flaky scripts?",answer:`Flaky tests pass and fail without code changes. Fix systematically: (1) replace implicit waits/sleep with explicit waits; (2) isolate test data — no shared state; (3) mock unstable third parties; (4) quarantine flaky tests (@pytest.mark.quarantine) until fixed; (5) track flake rate in CI dashboard.

Do not only add retries — investigate root cause (timing, env, data collision, locator fragility). Use stable locators (data-testid over dynamic XPath).

Example: test_payment_flaked because two tests used same order ID — fix by generating unique order_id per test with uuid4() instead of increasing reruns.`,source:M("flaky-test-automation")}],um=ke({id:"framework",number:4,title:"Framework",description:"This is the most important section for experienced candidates. Be ready to explain architecture, POM, reporting, and CI integration in detail.",priority:"critical",color:"var(--accent)",questions:K("fw",lm,{tags:["framework","architecture","pytest"],difficulty:"medium",priority:"critical"})}),cm=[{question:"What is API testing?",answer:`API testing validates application programming interfaces directly — business logic layer — without UI. Tests request/response, status codes, headers, payload structure, error handling, and performance.

Faster and more stable than UI tests. Catches bugs earlier. Essential for microservices and mobile backends.`,source:c("api-testing-interview-questions")},{question:"Difference between SOAP and REST.",answer:`SOAP: XML-only, strict standards (WSDL), built-in security (WS-Security), stateful possible, heavier payloads. Used in enterprise/banking legacy systems.

REST: architectural style, uses HTTP methods, supports JSON/XML, lightweight, stateless, cacheable. Dominant in modern web and mobile APIs.`,source:c("difference-between-soap-and-rest-web-services")},{question:"GET vs POST vs PUT vs PATCH vs DELETE.",answer:`GET — retrieve data, idempotent, no body (typically), cacheable.
POST — create resource, not idempotent.
PUT — replace entire resource, idempotent.
PATCH — partial update, idempotent.
DELETE — remove resource, idempotent.

Idempotent = same request repeated produces same result.`,code:[{language:"python",snippet:`import requests

requests.get('https://api.example.com/users/1')
requests.post('https://api.example.com/users', json={'name': 'Akash'})
requests.put('https://api.example.com/users/1', json={'name': 'Akash', 'role': 'QA'})
requests.patch('https://api.example.com/users/1', json={'role': 'Lead'})
requests.delete('https://api.example.com/users/1')`}],source:c("http-methods-get-post-put-patch-delete")},{question:"Status codes.",answer:`1xx Informational — 100 Continue
2xx Success — 200 OK, 201 Created, 204 No Content
3xx Redirection — 301 Moved, 302 Found, 304 Not Modified
4xx Client Error — 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable
5xx Server Error — 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable

In tests: always assert expected status code first.`,source:c("http-status-codes")},{question:"Authentication types.",answer:`Common API authentication methods:

1. API Key — key in header or query param
2. Basic Auth — Base64(username:password) in Authorization header
3. Bearer Token — token in Authorization: Bearer <token>
4. OAuth 2.0 — delegated access via access tokens
5. JWT — self-contained signed token
6. Session/Cookie — session ID after login`,source:c("api-authentication-methods")},{question:"Bearer token?",answer:`Bearer token authentication sends a token in the Authorization header. The server validates the token on each request. Format: Authorization: Bearer <access_token>.

Token is obtained from login/auth endpoint. Store securely in environment variables, not in source code. Tokens often expire — handle refresh flow.`,code:[{language:"python",snippet:`import requests

headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',
    'Content-Type': 'application/json'
}
resp = requests.get('https://api.example.com/profile', headers=headers)
assert resp.status_code == 200`}],source:c("bearer-token-authentication")},{question:"OAuth?",answer:`OAuth 2.0 is an authorization framework — allows apps to access user resources without sharing passwords. Roles: Resource Owner, Client, Authorization Server, Resource Server.

Flows: Authorization Code (most secure for web apps), Client Credentials (machine-to-machine), Password Grant (legacy, avoid). Returns access_token and optionally refresh_token.`,source:c("oauth-2-0-protocol")},{question:"Headers and payloads.",answer:`Headers carry metadata: Content-Type, Authorization, Accept, Cache-Control, custom headers (X-Request-ID).

Payload (body): data sent with POST/PUT/PATCH — usually JSON in REST APIs.

Content-Type: application/json tells server how to parse body. Accept header specifies expected response format.`,code:[{language:"python",snippet:`headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer <token>'
}
payload = {'username': 'testuser', 'password': 'secret'}
resp = requests.post(url, json=payload, headers=headers)`}],source:c("http-headers")},{question:"JSON vs XML.",answer:`JSON: lightweight, human-readable, native to JavaScript, faster to parse, dominant in REST APIs. Types: string, number, boolean, null, array, object.

XML: verbose, schema support (XSD), namespaces, still used in SOAP/banking (SWIFT MX). Better for complex document structures with strict validation.

For automation: json.loads() / response.json() in Python.`,source:c("json-vs-xml")},{question:"What is serialization/deserialization?",answer:`Serialization: convert object/data structure to storable/transmittable format (JSON string, XML). Deserialization: convert back to object.

In API testing: request body is serialized to JSON before sending; response JSON is deserialized to Python dict for assertions.`,code:[{language:"python",snippet:`import json

# Serialize
data = {'id': 1, 'status': 'PASS'}
json_str = json.dumps(data)

# Deserialize
parsed = json.loads('{"id": 1, "status": "PASS"}')
assert parsed['status'] == 'PASS'`}],source:c("serialization-in-python")},{question:"How do you validate response?",answer:`Validate at multiple levels:

1. Status code — assert 200, 201, 404, etc.
2. Response time — assert < threshold
3. Headers — Content-Type, custom headers
4. Body — field values, data types, array length
5. Schema — JSON Schema validation
6. Business rules — DB cross-check, downstream API state`,code:[{language:"python",snippet:`resp = requests.get(url)

assert resp.status_code == 200
assert resp.elapsed.total_seconds() < 2

data = resp.json()
assert data['status'] == 'SUCCESS'
assert 'transactionId' in data
assert isinstance(data['amount'], (int, float))`}],source:c("api-response-validation")},{question:"What tools have you used?",answer:`Common API testing tools:

Manual/Exploratory: Postman, Insomnia, Swagger UI
Automation: Python requests + pytest, REST Assured (Java), Karate DSL
Performance: JMeter, k6
Mocking: WireMock, MockServer
Documentation: Swagger/OpenAPI

Mention what you used and for what purpose (manual vs CI automation).`,source:c("api-testing-tools")},{question:"How do you automate APIs using Python?",answer:`Use requests library + pytest. Structure: test data (JSON/Excel), API client wrapper class, assertions, fixtures for auth token and base URL.

Pattern: arrange (setup data) → act (send request) → assert (status + body). Report with Allure or HTML plugins.`,code:[{language:"python",snippet:`import requests
import pytest

BASE_URL = 'https://api.example.com'

def test_get_user():
    resp = requests.get(f'{BASE_URL}/users/1')
    assert resp.status_code == 200
    assert resp.json()['id'] == 1

def test_create_user():
    payload = {'name': 'Test', 'email': 't@example.com'}
    resp = requests.post(f'{BASE_URL}/users', json=payload)
    assert resp.status_code == 201`}],source:c("api-testing-using-python-requests")},{question:"How do you chain APIs?",answer:`Chain APIs when one response feeds the next request — e.g., login → get token → create order → verify status.

Store token from login response, pass to subsequent headers. Use pytest fixtures or session-scoped setup. Each step asserts success before proceeding.`,code:[{language:"python",snippet:`def test_payment_flow():
    # Step 1: Login
    login = requests.post(f'{BASE}/auth/login',
        json={'user': 'test', 'pass': 'secret'})
    token = login.json()['access_token']
    headers = {'Authorization': f'Bearer {token}'}

    # Step 2: Create payment
    pay = requests.post(f'{BASE}/payments',
        json={'amount': 100}, headers=headers)
    pay_id = pay.json()['id']

    # Step 3: Verify status
    status = requests.get(f'{BASE}/payments/{pay_id}', headers=headers)
    assert status.json()['state'] == 'COMPLETED'`}],source:c("api-chaining-in-automation")},{question:"How do you validate schema?",answer:`JSON Schema defines expected structure — field types, required fields, formats. Validate with jsonschema library in Python or built-in checks in Postman.

Catches unexpected API contract changes early. Store schemas in version control alongside tests.`,code:[{language:"python",snippet:`import jsonschema

schema = {
    'type': 'object',
    'required': ['id', 'status'],
    'properties': {
        'id':     {'type': 'integer'},
        'status': {'type': 'string', 'enum': ['PASS', 'FAIL']}
    }
}

jsonschema.validate(instance=resp.json(), schema=schema)`}],source:c("json-schema-validation-in-python")},{question:"Difference between functional and integration API testing.",answer:`Functional API testing: validates individual endpoints against requirements — correct status, response fields, error messages for given input.

Integration API testing: validates interaction between services — payment service calls auth service, message queue triggers, database state after API call.

Functional = single API in isolation. Integration = multiple components together.`,source:c("integration-testing-vs-functional-testing")},{question:"How do you handle dynamic tokens?",answer:`1. Login fixture — call auth API before tests, store token in variable or pytest fixture
2. Session object — requests.Session() persists cookies/tokens
3. Environment variables — token from CI secrets
4. Refresh token flow — auto-refresh when access token expires
5. conftest.py — session-scoped fixture provides token to all tests`,code:[{language:"python",snippet:`import pytest
import requests

@pytest.fixture(scope='session')
def auth_token():
    resp = requests.post(f'{BASE}/auth/token',
        json={'client_id': os.getenv('CLIENT_ID'),
              'secret': os.getenv('CLIENT_SECRET')})
    return resp.json()['access_token']

def test_profile(auth_token):
    headers = {'Authorization': f'Bearer {auth_token}'}
    resp = requests.get(f'{BASE}/profile', headers=headers)
    assert resp.status_code == 200`}],source:c("how-to-handle-authentication-in-api-testing")},{question:"What is contract testing?",answer:`Contract testing verifies that API provider and consumer agree on request/response format without running full integration. Consumer defines expected contract; provider tests confirm they meet it.

Tools: Pact. Benefits: catch breaking changes early, test services independently, faster than end-to-end.`,source:c("contract-testing-in-microservices")}],dm=ke({id:"api",number:5,title:"API Testing",description:"Massively important now. Expect REST fundamentals, authentication, validation, and Python automation follow-ups.",priority:"critical",color:"var(--blue)",questions:K("api",cm,{tags:["api","rest","automation"],difficulty:"medium",priority:"critical"})}),pm=[{question:"Difference between WHERE and HAVING.",answer:`WHERE filters rows before grouping — cannot use aggregate functions. HAVING filters groups after GROUP BY — used with aggregates like COUNT, SUM, AVG.

Rule: WHERE for row-level filters, HAVING for group-level filters. Both can appear in the same query: WHERE first, then GROUP BY, then HAVING.`,code:[{language:"sql",snippet:`-- WHERE — filter rows before grouping
SELECT dept_id, salary
FROM employees
WHERE salary > 50000;

-- HAVING — filter groups after aggregation
SELECT dept_id, AVG(salary) AS avg_sal
FROM employees
GROUP BY dept_id
HAVING AVG(salary) > 50000;`}],source:c("difference-between-where-and-having-clause-in-sql")},{question:"JOIN types.",answer:`INNER JOIN — returns only matching rows in both tables.
LEFT JOIN — all rows from left table + matching right (NULL if no match).
RIGHT JOIN — all rows from right + matching left.
FULL OUTER JOIN — all rows from both; NULL where no match.
CROSS JOIN — Cartesian product (every row paired with every row).
SELF JOIN — table joined to itself.`,code:[{language:"sql",snippet:`SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- LEFT: all employees even without department
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;`}],source:c("sql-join-set-operators")},{question:"Primary key vs foreign key.",answer:`Primary Key (PK): uniquely identifies each row in a table. Cannot be NULL. Only one per table. Creates clustered index by default in many DBs.

Foreign Key (FK): column that references PK of another table. Enforces referential integrity — prevents orphan records. A table can have multiple FKs.`,code:[{language:"sql",snippet:`CREATE TABLE departments (
    dept_id   INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE employees (
    emp_id   INT PRIMARY KEY,
    name     VARCHAR(100),
    dept_id  INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`}],source:c("difference-between-primary-key-and-foreign-key")},{question:"Normalize vs denormalize.",answer:`Normalization: organize data to reduce redundancy — split into related tables (1NF, 2NF, 3NF). Pros: data integrity, less duplication. Cons: more JOINs, complex queries.

Denormalization: intentionally add redundancy for faster reads (e.g., store dept_name in employees table). Pros: faster queries. Cons: update anomalies, more storage.

OLTP systems favor normalization; reporting/analytics often denormalize.`,source:c("normalization-in-dbms")},{question:"Write query for duplicate records.",answer:"Find duplicates using GROUP BY + HAVING COUNT > 1, or window functions like ROW_NUMBER().",code:[{language:"sql",snippet:`-- Find duplicate emails
SELECT email, COUNT(*) AS cnt
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- List all rows that are duplicates
SELECT *
FROM users
WHERE email IN (
    SELECT email FROM users
    GROUP BY email HAVING COUNT(*) > 1
);`}],source:c("sql-query-to-find-duplicate-records")},{question:"Second highest salary query.",answer:"Common approaches: subquery with MAX, LIMIT/OFFSET, DENSE_RANK/ROW_NUMBER window function. Handle ties with DENSE_RANK if multiple employees share second-highest salary.",code:[{language:"sql",snippet:`-- Subquery approach
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Window function (handles ties)
SELECT DISTINCT salary
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) ranked
WHERE rnk = 2;`}],source:c("sql-query-to-find-second-highest-salary")},{question:"Count employees department-wise.",answer:"Use GROUP BY with COUNT. Add ORDER BY for sorted output. Use LEFT JOIN on departments if you need departments with zero employees.",code:[{language:"sql",snippet:`SELECT d.dept_name, COUNT(e.emp_id) AS employee_count
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name
ORDER BY employee_count DESC;`}],source:c("sql-group-by-count")},{question:"Delete duplicate rows.",answer:"Keep one row per duplicate key, delete the rest. Use ROW_NUMBER() in a CTE (SQL Server, PostgreSQL) or self-join with MIN(id). Always backup or test in transaction first.",code:[{language:"sql",snippet:`-- Keep lowest id per email (PostgreSQL / SQL Server)
WITH cte AS (
    SELECT id,
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM users
)
DELETE FROM users
WHERE id IN (SELECT id FROM cte WHERE rn > 1);`}],source:c("delete-duplicate-rows-in-sql")},{question:"Difference between DELETE, DROP, TRUNCATE.",answer:`DELETE — removes specific rows (with WHERE). Can be rolled back. Triggers fire. Slow for large datasets.

TRUNCATE — removes ALL rows, keeps table structure. Faster, minimal logging. Cannot use WHERE. Resets identity seed.

DROP — removes entire table (structure + data + constraints). Cannot rollback easily.`,source:c("difference-between-delete-drop-and-truncate")},{question:"What is indexing?",answer:`An index is a data structure (usually B-tree) that speeds up data retrieval at the cost of slower writes and extra storage. Like a book index — find rows without full table scan.

Types: clustered (defines physical order), non-clustered (separate structure). Index columns used in WHERE, JOIN, ORDER BY benefit most.`,code:[{language:"sql",snippet:`CREATE INDEX idx_emp_email ON employees(email);
CREATE UNIQUE INDEX idx_emp_email_unique ON employees(email);

-- Composite index for multi-column queries
CREATE INDEX idx_dept_salary ON employees(dept_id, salary);`}],source:c("indexing-in-databases")},{question:"What is a view?",answer:`A view is a virtual table based on a SQL query — stored query definition, not data. Used to simplify complex queries, restrict column access, and present consistent reporting interfaces.

Updating views depends on complexity — simple views may be updatable; joins/aggregates often are not.`,code:[{language:"sql",snippet:`CREATE VIEW vw_active_employees AS
SELECT e.emp_id, e.name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.status = 'ACTIVE';

SELECT * FROM vw_active_employees;`}],source:c("sql-views")},{question:"What is stored procedure?",answer:`A stored procedure is precompiled SQL code stored in the database. Called with EXEC/CALL. Used for reusable business logic, batch operations, and security (grant execute without table access).

In testing: used to seed test data, reset DB state, or validate backend data directly.`,code:[{language:"sql",snippet:`CREATE PROCEDURE sp_get_employees_by_dept
    @dept_id INT
AS
BEGIN
    SELECT emp_id, name, salary
    FROM employees
    WHERE dept_id = @dept_id;
END;

EXEC sp_get_employees_by_dept @dept_id = 10;`}],source:c("stored-procedures-in-sql")}],fm=ke({id:"sql",number:6,title:"SQL",description:"Very common in QA interviews. Practice writing queries for duplicates, rankings, and joins.",priority:"high",color:"var(--blue)",questions:K("sql",pm,{tags:["sql","database"],difficulty:"medium",priority:"high"})}),mm=[{question:"What is Jenkins?",answer:`Jenkins is an open-source automation server used for CI/CD — Continuous Integration and Continuous Delivery. It automates building, testing, and deploying software when developers push code.

For QA: Jenkins runs your pytest/Selenium/API suites on schedule or on every commit, publishes reports, notifies the team on failure, and keeps test execution consistent across machines.

Example: Every push to develop triggers a Jenkins job that installs dependencies, runs smoke tests, and emails the team if any test fails.`,source:c("what-is-jenkins")},{question:"Explain Jenkins pipeline.",answer:`A Jenkins Pipeline is a suite of plugins that models the delivery process as code — typically a Jenkinsfile in the repo. Pipelines define stages (Checkout, Build, Test, Deploy) and steps inside each stage.

Two types: Declarative (structured, recommended) and Scripted (Groovy-heavy, flexible). Pipeline runs on an agent (node) with defined tools and environment.

Example: A Declarative pipeline has stages Checkout → Install Dependencies → Run Tests → Publish Report — each visible in Blue Ocean or Stage view with pass/fail per stage.`,code:[{language:"bash",snippet:`pipeline {
  agent any
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Test') {
      steps { sh 'pytest tests/ -m smoke -v' }
    }
  }
  post {
    always { junit 'report.xml' }
  }
}`}],source:c("jenkins-pipeline-tutorial")},{question:"Difference between freestyle and pipeline job.",answer:`Freestyle project: configured entirely in Jenkins UI — build steps, shell commands, post-build actions. Simple for one-off jobs but hard to version, review, and reproduce.

Pipeline job: defined in Jenkinsfile stored in Git — version controlled, code-reviewed, supports complex parallel stages, checkpoints, and shared libraries. Industry standard for CI/CD.

Example: A freestyle job runs "pytest tests/" via UI shell step; the same logic in a Jenkinsfile travels with the repo and works identically on every Jenkins instance.`,source:c("difference-between-freestyle-and-pipeline-job-in-jenkins")},{question:"What stages are in your pipeline?",answer:`Typical QA automation pipeline stages:

1. Checkout — clone repo from Git
2. Setup — create venv, pip install -r requirements.txt
3. Lint/Static check (optional) — flake8, pylint
4. Test — pytest with markers (smoke/regression), env vars
5. Report — publish JUnit, HTML, Allure
6. Notify — email/Slack on failure
7. Archive — screenshots, logs as artifacts

Tailor to your project — mention parallel API and UI stages if applicable.

Example: "Our PR pipeline has Checkout → Install → Smoke Tests → Publish Allure; nightly adds Regression Tests with --env=staging."`,source:ze("/jenkins/jenkins_pipeline.htm")},{question:"How do you trigger execution?",answer:`Common triggers: (1) SCM polling or webhook on Git push/PR; (2) cron schedule (H 2 * * * for nightly); (3) manual Build with Parameters; (4) upstream job trigger after build completes; (5) remote API trigger (curl with Jenkins token).

For QA: smoke on every PR, full regression nightly, on-demand staging run before release.

Example: GitHub webhook fires on push to main — Jenkins Multibranch Pipeline auto-discovers branch and runs smoke within 5 minutes of merge.`,code:[{language:"bash",snippet:`# Trigger build remotely
curl -X POST https://jenkins.example.com/job/qa-smoke/build \\
  --user user:api_token \\
  --data-urlencode json='{"parameter": [{"name":"ENV", "value":"qa"}]}'`}],source:c("jenkins-build-triggers")},{question:"How do you integrate Git with Jenkins?",answer:`Install Git plugin. Configure credentials (SSH key or HTTPS username/token) in Jenkins Credentials. In job config or Jenkinsfile, use checkout scm or git url + branch.

Multibranch Pipeline auto-scans repo branches and PRs — creates a job per branch. Link Jenkins to GitHub/GitLab via webhook for instant feedback on commits.

Example: Jenkinsfile uses checkout scm; credentials ID git-ssh-key stored in Jenkins; branch main runs regression, feature/* runs smoke only.`,code:[{language:"bash",snippet:`stage('Checkout') {
  steps {
    git branch: 'develop',
        credentialsId: 'github-token',
        url: 'https://github.com/org/automation-framework.git'
  }
}`}],source:c("jenkins-git-integration")},{question:"What happens when tests fail?",answer:`When pytest exits non-zero, the Test stage fails — pipeline marks build UNSTABLE or FAILED depending on configuration. JUnit plugin shows failed test names; HTML/Allure links show details; archived screenshots help triage.

Post actions: post { failure { emailext ... } } notifies QA/dev; Slack webhook posts channel alert. Downstream deploy stages are skipped (when { expression { currentBuild.result == "SUCCESS" } }).

Example: Failed login test → Jenkins build #452 FAILED → email to team with Allure link → developer checks screenshot artifact and fixes locator.`,source:M("jenkins-test-failure-handling")},{question:"How do you generate reports in Jenkins?",answer:`Generate reports during test stage, publish in post. JUnit: pytest --junitxml=report.xml then junit 'report.xml' in pipeline. HTML: archive reports/report.html as artifact or HTML Publisher plugin. Allure: pytest --alluredir=allure-results then Allure Jenkins plugin.

Trend graphs come from JUnit history plugin. Keep reports self-contained for offline review.

Example: post { always { junit 'report.xml'; allure includeProperties: false, results: [[path: 'allure-results']] } } publishes results even when tests fail.`,code:[{language:"bash",snippet:`pytest tests/ --junitxml=report.xml --alluredir=allure-results
# Jenkinsfile post block:
post {
  always {
    junit 'report.xml'
    archiveArtifacts artifacts: 'reports/**/*.html', allowEmptyArchive: true
  }
}`}],source:c("jenkins-junit-plugin")},{question:"How do you debug failed pipeline?",answer:`Steps: (1) Open Console Output — full shell log with stderr; (2) identify failed stage and exact command; (3) check workspace files (archived artifacts, screenshots); (4) Replay pipeline with same parameters; (5) add echo/debug steps temporarily; (6) reproduce locally with same ENV and command from log.

Common issues: wrong branch, missing credential, path differences (Windows vs Linux), timeout, agent missing Chrome/Java.

Example: Console shows ModuleNotFoundError: selenium — fix by adding pip install -r requirements.txt in Setup stage before Test stage.`,source:c("jenkins-troubleshooting")},{question:"Why script passes locally but fails in Jenkins?",answer:`Root causes: different Python/package versions; missing env vars or config files; headless vs headed browser; different OS paths (backslash vs slash); Jenkins runs as different user without display; stale dependencies; parallel tests colliding on shared data; firewall blocking URLs Jenkins agent cannot reach.

Fix: pin versions in requirements.txt, document exact Jenkins command in README, use same --env flag, run Docker agent matching local image.

Example: Test passed locally with .env file but Jenkins had no BASE_URL — fixed by adding BASE_URL to Jenkins job environment parameters.`,source:M("tests-pass-locally-fail-ci")},{question:"Environment issue handling?",answer:`Treat Jenkins agent environment explicitly: define ENV, BASE_URL, BROWSER in job parameters or credentials; use config files per env; verify agent has network access to test URLs and DB; install browsers/drivers on agent or use Docker with pre-baked image.

Use labeled agents (agent { label 'linux-selenium' }) for consistent capability. Health-check job validates env before regression.

Example: Staging tests failed because Jenkins agent could not resolve internal hostname — added DNS entry and documented required VPN for on-prem agents.`,source:c("jenkins-environment-variables")},{question:"Dependency issue handling?",answer:`Pin dependencies in requirements.txt with versions. Always create fresh venv in pipeline: python -m venv venv && source venv/bin/activate && pip install -r requirements.txt. Cache pip downloads with Jenkins cache plugin for speed but not stale packages.

For browsers: use webdriver-manager or Selenium Manager, or Docker image with Chrome + chromedriver pre-installed. Lock Node/Java versions if mixed stack.

Example: Pipeline failed on import pandas — requirements.txt was updated locally but not committed — fix: commit lock file and fail PR if pip check fails.`,code:[{language:"bash",snippet:`stage('Setup') {
  steps {
    sh '''
      python3 -m venv venv
      . venv/bin/activate
      pip install --upgrade pip
      pip install -r requirements.txt
    '''
  }
}`}],source:c("jenkins-pipeline-python")},{question:"Parallel execution in Jenkins?",answer:`Pipeline parallel block runs stages concurrently — e.g. API tests and UI tests on different agents. pytest-xdist (-n auto) parallelizes inside one stage. Matrix builds test multiple browser/OS combinations.

Watch shared resources (same test account, DB) — use isolated data per worker. Set adequate agent capacity to avoid queue timeouts.

Example: parallel { stage('API') { steps { sh 'pytest tests/api -n 4' } }; stage('UI') { agent { label 'chrome' }; steps { sh 'pytest tests/ui -n 2' } } } cuts total time nearly in half.`,code:[{language:"bash",snippet:`parallel {
  stage('Chrome') { steps { sh 'pytest tests/ --browser=chrome' } }
  stage('Firefox') { steps { sh 'pytest tests/ --browser=firefox' } }
}`}],source:c("jenkins-parallel-stages")},{question:"Headless execution?",answer:`Headless browsers run without GUI — required on Linux Jenkins agents with no display. Chrome: --headless=new; Firefox: --headless. Selenium 4 options: ChromeOptions().add_argument("--headless").

Set window size explicitly in headless (1920x1080) — some layouts break at default small size. Xvfb (virtual framebuffer) is an alternative for older setups.

Example: conftest reads HEADLESS=true from Jenkins env and passes headless ChromeOptions — same tests run locally headed for debug and in CI headless.`,code:[{language:"python",snippet:`options = ChromeOptions()
if os.getenv('HEADLESS', 'true').lower() == 'true':
    options.add_argument('--headless=new')
    options.add_argument('--window-size=1920,1080')
driver = webdriver.Chrome(options=options)`}],source:M("headless-browser-testing")},{question:"Docker exposure?",answer:`Run tests inside Docker for reproducible Jenkins agents: pipeline uses agent { docker { image 'selenium/standalone-chrome' } } or docker-compose with app + tests. Expose ports (-p 4444:4444) for Selenium Grid; link containers on same network.

Benefits: consistent Chrome/driver versions, no polluting Jenkins host, easy scale with Kubernetes agents. Mount workspace volume for code and reports.

Example: Jenkins stage runs docker run -v $WORKSPACE:/app -w /app python:3.11 pytest tests/ — identical environment every build regardless of host OS.`,code:[{language:"bash",snippet:`stage('Test in Docker') {
  agent {
    docker {
      image 'python:3.11-slim'
      args '-v $WORKSPACE:/app -w /app'
    }
  }
  steps { sh 'pip install -r requirements.txt && pytest tests/' }
}`}],source:c("jenkins-docker-pipeline")},{question:"GitHub webhook?",answer:`A GitHub webhook sends HTTP POST to Jenkins on events (push, pull_request, release). Jenkins GitHub plugin receives payload and triggers the matching job — no polling delay.

Setup: Jenkins job → Build Triggers → GitHub hook trigger; GitHub repo → Settings → Webhooks → Payload URL https://jenkins.example.com/github-webhook/ → events Push and Pull request. Use secret token for security.

Example: Developer opens PR → webhook fires → Multibranch Pipeline runs smoke on PR branch → status reported back to GitHub Checks API — merge blocked if red.`,source:c("jenkins-github-webhook")}],hm=ke({id:"jenkins",number:7,title:"Jenkins / CI-CD",description:"You already got asked pipeline questions. Expect more on stages, triggers, debugging, and environment failures.",priority:"high",color:"var(--amber)",questions:K("jen",mm,{tags:["jenkins","ci-cd","pipeline"],difficulty:"medium",priority:"high"})}),gm=[{question:"What is SWIFT?",answer:`SWIFT (Society for Worldwide Interbank Financial Telecommunication) is a global messaging network used by banks and financial institutions to exchange standardized payment and securities instructions securely. It is not a payment system itself — it carries messages; settlement happens through correspondent banks, central banks, or clearing systems.

Members connect via SWIFTNet using BIC (Bank Identifier Code) to route messages. For QA, you validate that outbound/inbound messages conform to format rules, contain correct BICs, amounts, currencies, and reference fields, and that the application maps UI/API input correctly into SWIFT fields.`,source:c("introduction-to-swift")},{question:"Difference between MT and MX messages.",answer:`MT (Message Type) is the legacy SWIFT FIN format — fixed-length, tag-based text (e.g. :20:, :32A:). Examples: MT103 (customer credit transfer), MT202 (bank transfer). Human-readable in logs but harder to extend and validate programmatically.

MX (ISO 20022 XML) is the modern format — structured XML with XSD schemas, richer data (remittance, structured addresses), and better straight-through processing. CBPR+ and many corridors now mandate MX. In testing, MT checks focus on tag presence/length/format; MX checks add schema validation, namespace, and element business rules.`,source:c("swift-mt-vs-mx")},{question:"ISO 20022?",answer:`ISO 20022 is an international standard for financial messaging that defines a common data dictionary and XML/ASN.1 message models (e.g. pacs.008 for credit transfer, camt.053 for statements). It enables richer, structured payment data and global interoperability.

For QA in banking: validate messages against published XSDs, check mandatory elements (Debtor, Creditor, Amount, EndToEndId), verify mapping from internal payment objects to ISO elements, and regression-test when the bank upgrades schema versions (e.g. CBPR+ profile constraints).`,source:ze("/iso_20022/index.htm")},{question:"What message types have you worked on?",answer:`Tailor this to your experience. Common types QA teams test in payment projects:

Customer payments: MT103 / pacs.008 (single customer credit transfer). Bank transfers: MT202 / pacs.009 (financial institution transfer). Status: MT199, pacs.002 (payment status), camt.054/053 (notifications/statements). Investigations: MT192/MT196 or camt.056 (cancellation/recall).

In the interview, name 2–3 you actually tested, what module generated/consumed them, and what you validated — field mapping, amounts, charges (OUR/BEN/SHA), value date, and end-to-end reference across UI → core banking → SWIFT out.`,source:c("swift-message-types")},{question:"Explain payment lifecycle.",answer:`Typical cross-border/customer payment lifecycle:

1. Initiation — client or operations enters payment (portal, file upload, API). 2. Validation — format, mandatory fields, limits, sanctions, account status. 3. Routing — determine nostro/correspondent path and message type. 4. Authorization — maker-checker or straight-through if rules pass. 5. Messaging — generate MT/MX and send via SWIFT/interface. 6. Clearing/settlement — funds move at beneficiary bank (may be T+0 to T+2). 7. Status updates — ACK/NACK, settlement confirmation, exceptions. 8. Reconciliation — match internal ledger with SWIFT confirmations and statements.

As QA, you test each gate: invalid data rejected early, approved payments produce correct messages, status API/UI matches back-office state.`,source:c("payment-life-cycle")},{question:"What validations did you perform?",answer:`Functional: amount/currency precision, debit/credit account rules, cut-off times, holiday calendars, duplicate reference detection, charge bearer, FX rate application.

Message-level: SWIFT field lengths, allowed character sets, BIC format, mandatory tags/elements, MT vs MX profile rules (CBPR+).

Compliance: sanctions screening hits, PEP flags, country restrictions. Integration: API request/response vs generated message file, database posting, queue handoff.

Negative testing: missing IBAN, invalid BIC, over limit, closed account, screening block — expect clear error codes and no partial posting.`,source:M("api-testing-interview-questions")},{question:"What is UAT in banking?",answer:`User Acceptance Testing in banking is business-led validation that the system meets operational and regulatory requirements before production go-live. Participants often include operations, payments specialists, compliance, and sometimes treasury — not only IT QA.

Scope: real-world scenarios (high-value payment, recall, returns, cut-off edge cases), reconciliation reports, audit trails, and sign-off on message samples sent to SWIFT test environment or bank sandbox. QA supports UAT with test data, defect triage, evidence packs, and retest after fixes. Success criteria: zero critical defects, signed test summary, and parallel run results matching legacy if migrating.`,source:c("user-acceptance-testing")},{question:"Explain sanctions screening.",answer:`Sanctions screening compares payment parties (ordering customer, beneficiary, banks, intermediaries) and sometimes payment reference text against government and internal watchlists (OFAC, EU, UN, etc.) before release.

Flow: payment captured → screening engine called (in-house or vendor) → match score/hit → auto-release, false-positive workflow, or hard stop. QA tests: exact name match, fuzzy match, alias, secondary sanctions, country embargo, rescreening on amendment, and audit log of who released a hit. Never use real sanctioned names in lower environments — use approved test personas from compliance.`,source:c("aml-kyc-in-banking")},{question:"What happens if payment fails?",answer:`Failure can occur at validation, authorization, messaging (SWIFT NACK), settlement, or beneficiary rejection. System should: stop or reverse debit if not yet settled, set transaction status (Failed/Rejected/Returned), store reason code (ISO reason or internal code), notify operations/customer, and allow repair or re-initiation per policy.

QA verifies: no double debit, status consistency across UI/API/DB, correct exception queue entry, alert/email if configured, and that failed payments appear in ops dashboards and reconciliation exceptions. Retest recall/return flows if funds already left nostro account.`,source:c("payment-processing")},{question:"Explain settlement flow.",answer:`Settlement is the actual transfer of funds between banks to fulfill a payment instruction. In correspondent banking, ordering bank debits customer, credits nostro at intermediary, beneficiary bank credits end customer — often via MT202/pacs.009 chains.

QA focuses on: correct nostro selection, value date, settlement method (gross vs net), alignment with message amount, and status transition to Settled/Completed when camt/MT910 or internal confirmation received. Test partial settlements, delays, and mismatch between instructed amount and settled amount (FX, fees).`,source:c("bank-settlement-process")},{question:"Explain transaction status flow.",answer:`Typical statuses: Draft → Submitted → Pending Validation → Pending Approval → Approved → Sent to SWIFT → Acknowledged → In Progress → Settled → Completed (or Rejected/Failed/Returned/Cancelled).

Each transition should be auditable with timestamp and user/system id. QA validates: status API matches DB, UI timeline correct, invalid transitions blocked (e.g. cannot approve after reject), and webhook/event consumers get same status. Regression on status polling and bulk file payments where thousands update asynchronously.`,source:c("transaction-life-cycle")},{question:"What are message queues?",answer:`Message queues (e.g. IBM MQ, RabbitMQ, Kafka in modern stacks) decouple payment components — front office, core banking, SWIFT gateway, screening, reporting — so spikes and downstream slowness do not crash upstream.

Payments are published as messages; consumers process asynchronously with retry and dead-letter queues (DLQ). QA tests: message not lost on restart, poison message goes to DLQ, idempotent reprocessing, ordering where required, and correlation IDs linking queue payload to payment reference. Monitor queue depth alerts in production-like load tests.`,source:c("message-queue-system")},{question:"What production issues did you see?",answer:`Answer with sanitized real examples if you have them. Common production issues in payments QA support:

Cut-off misconfiguration causing payments stuck in Pending. Wrong BIC/nostro after reference data update. Duplicate file processing without idempotency key. Timezone/value date off by one day. Screening timeout releasing late. MX schema validation failure after SWIFT rulebook upgrade.

Describe your role: reproduce in lower env, gather logs/SWIFT traces, compare message before/after fix, verify hotfix in prod support window, and add regression automation or monitoring.`,source:M("production-testing")},{question:"What is reconciliation?",answer:`Reconciliation matches internal transaction records against external evidence — SWIFT confirmations (MT900/910, camt), nostro statements, clearing house files — to ensure every payment is accounted for and balances agree.

Types: intraday (exceptions), EOD nostro reconciliation, fee/charge reconciliation. QA validates report accuracy, unmatched item workflows, break reasons, and that retried/settled payments clear breaks. Test scenarios: missing confirmation, amount mismatch, duplicate entry, late statement line.`,source:c("bank-reconciliation")},{question:"What is STP (Straight Through Processing)?",answer:`STP means payments flow from initiation to messaging/settlement with no manual intervention when all automated checks pass — validation, limits, sanctions, routing, and message generation.

STP rate is a key KPI. QA improves STP by exhaustive negative testing (fail fast with clear errors) and positive path coverage so valid payments never land in ops queues incorrectly. Test that manual queue only receives true exceptions (screening hit, missing nostro, format error), not data bugs fixable in software.`,source:c("straight-through-processing")},{question:"Explain cross-border payments.",answer:`Cross-border payments move funds between accounts in different countries, often involving currency conversion, correspondent banks, and compliance (sanctions, AML reporting). Messages may chain MT103 + MT202 or ISO pacs.008/009 with routing via intermediary BICs.

QA covers: IBAN/account format per country, SWIFT BIC routing, FX rates and charges, regulatory reporting fields (purpose of payment), cut-offs per corridor, and longer settlement timelines. Test USD/EUR/GBP corridors and edge cases like payments to countries with capital controls.`,source:c("cross-border-payments")},{question:"Difference between SWIFT MT103 and MT202.",answer:`MT103 is a single customer credit transfer — contains ordering customer, beneficiary, remittance info, amount; used when bank pays end customer on behalf of client.

MT202 is a general financial institution transfer — bank-to-bank only, no detailed customer fields; used to move funds between nostro accounts, often as cover payment for an MT103.

In testing: MT103 has field 50/59 (ordering/beneficiary); MT202 uses field 52/58 (ordering/beneficiary institution). Verify correct pairing in cover payment scenarios and that amounts and references link both messages.`,code:[{language:"text",snippet:`{1:F01BANKUS33AXXX0000000000}{2:I103BANKDEFFXXXXN}{3:{108:REF12345}}{4:
:20:TXNREF001
:23B:CRED
:32A:240531USD10000,
:50K:/123456789
JOHN DOE
:59:/DE89370400440532013000
JANE SMITH
-}`}],source:c("swift-mt103")},{question:"What is CBPR+?",answer:`CBPR+ (Cross-Border Payments and Reporting Plus) is SWIFT's harmonized ISO 20022 usage guideline for cross-border payments on SWIFT, replacing many MT messages with constrained MX (pacs/camt) to improve STP globally.

Key for QA: messages must comply with CBPR+ implementation guidelines — restricted optional elements, specific code sets, character sets, and network-validated rules beyond base XSD. Test migration projects: dual MT/MX period, translation accuracy, and SWIFT gpi tracker fields where applicable.`,source:c("iso-20022-cbpr")},{question:"How did you validate XML messages?",answer:`Multi-layer validation:

1. Well-formed XML — parser loads without error. 2. XSD schema validation — pacs.008 / camt versions match environment. 3. Business rules — CBPR+, bank-specific rules (amount > 0, currency ISO4217, BIC pattern). 4. Golden file comparison — hash or diff against approved sample. 5. SWIFT pre-validator or alliance access test ACK/NACK.

Automation: Python lxml/xmlschema, Java JAXB with schema validator, or dedicated tools in CI. Store expected outputs per test case; on failure attach full XML to defect ticket.`,code:[{language:"python",snippet:`from lxml import etree

schema = etree.XMLSchema(etree.parse('pacs.008.001.08.xsd'))
tree = etree.parse('generated_payment.xml')
assert schema.validate(tree), schema.error_log`}],source:c("xml-validation")}],ym=ke({id:"banking",number:8,title:"Banking / SWIFT Domain",description:"This is your differentiator. Most testers cannot answer domain questions properly — payment lifecycle, SWIFT messages, and reconciliation.",priority:"high",color:"var(--red)",questions:K("bank",gm,{tags:["banking","swift","domain"],difficulty:"medium",priority:"high"})}),vm=[{question:"Test case is failing intermittently. What will you do?",answer:`Treat it as a flaky test until proven otherwise. First, check failure rate and pattern — same step every time vs random, specific browser/env, or after parallel run. Collect evidence: screenshots, logs, HAR, timestamps, and compare pass vs fail runs.

Common causes: timing (use explicit waits), shared test data, environment load, async UI/API, or order dependency in suite. Reproduce locally with same seed/data; run 10–20 times (pytest --count). Fix root cause — do not mask with blind retries unless transient infra is documented. Quarantine in CI if blocking pipeline while investigating.`,source:M("flaky-selenium-test")},{question:"Dev says issue is not reproducible. What will you do?",answer:`Provide a reproducible package: exact steps, environment (browser/OS/build), test data, user role, time zone, and video/screenshot. Confirm you are on the same build and config as dev (feature flags, API URL).

Try on another machine or clean profile to rule out local cache. Check if issue is data-specific — share DB snapshot or API request/response. If still not reproducible, log as intermittent with severity based on business impact, request logging/monitoring in prod-like env, and agree on watch period after release.`,source:c("how-to-report-bug-effectively")},{question:"Requirement changes during sprint. How do you handle it?",answer:`Acknowledge change with PO/BA in writing (Jira comment or updated AC). Impact analysis: which test cases/scripts are obsolete, what new coverage is needed, and effort delta. Update test plan and automation backlog; do not silently delete tests without review.

Re-prioritize sprint QA work with the team — negotiate scope trade-off if capacity is fixed. Run regression on affected module plus adjacent integrations. Flag release risk if change is late and untested; never sign off without explicit PO acceptance of residual risk.`,source:c("agile-testing")},{question:"You have limited time. What will you prioritize?",answer:`Prioritize by risk and business impact: critical path (login, payment submit, compliance checks), new/changed code in the sprint, and production defect hotspots. Run smoke first, then targeted regression on touched modules — not full suite if time-boxed.

Automate high-value repeatable checks for next sprint. Communicate clearly what was not tested and get PO sign-off on gaps. Document deferred areas in test summary. Never skip security/compliance or financial calculation tests in banking without explicit approval.`,source:c("test-prioritization")},{question:"Smoke passes but regression fails. What next?",answer:`Smoke passing only means core paths work — regression failure indicates deeper or edge-case breakage. Triage failures: group by module/root cause (one bug vs many). Check if regression env differs from smoke (data, config, feature flags).

Compare last green build — bisect commits if needed. Block release if failures are in scope of release or severity High/Critical. Fix or log defects with clear repro; re-run failed subset after fix before full regression. Update smoke suite if gap allowed regression failure to surprise late.`,source:c("smoke-testing-vs-regression-testing")},{question:"Production defect found after release. What steps?",answer:`1. Contain — assess severity, notify on-call/lead, disable feature flag or rollback if customer-impacting. 2. Document — steps, users affected, time window, logs/SWIFT traces (no PII in tickets). 3. Reproduce in lower environment with prod-like data mask. 4. Root cause with dev — code, config, data, or missed test scenario.

5. Hotfix + targeted regression + smoke in prod after deploy. 6. Post-incident: add regression test, improve monitoring/alert, update test plan. Communicate status to stakeholders until closed.`,source:M("production-testing")},{question:"Automation script unstable only in CI environment.",answer:`CI differs from local: headless mode, screen resolution, parallel workers, network latency, no display, different Chrome/driver versions, and shared agents. Compare Jenkins job config vs local — branches, env vars, secrets, base URL.

Fixes: pin browser/driver versions, increase timeouts modestly with explicit waits, use unique test users per worker, disable unnecessary video if resource-starved, run job on dedicated agent. Capture CI artifacts (screenshot, console, page source) on failure. Reproduce with Docker image matching CI.`,source:M("selenium-ci-cd")},{question:"API works manually but fails in automation.",answer:`Compare manual (Postman) vs script byte-for-byte: URL, method, headers (Content-Type, Authorization, Accept), body encoding, and query params. Common misses: missing Bearer token refresh, wrong Content-Type, trailing slash, HTTP vs HTTPS, or certificate issues in CI.

Check session/cookie not carried from UI test. Assert on response body in script — status 200 with error JSON is still failure. Log request/response in test for debugging. Use same environment variables as manual collection.`,code:[{language:"python",snippet:`import requests

resp = requests.post(url, json=payload, headers=headers, timeout=30)
print(resp.status_code, resp.text)  # debug CI failure
assert resp.status_code == 200`}],source:c("api-testing-interview-questions")},{question:"Element works locally but not in Jenkins.",answer:`Typical causes: headless rendering differences, viewport size hiding elements, slower page load in CI, different locale/date format, and stale locators after deploy timing. Use explicit waits for element visible + clickable, scroll into view, and stable locators (data-testid).

Verify Jenkins runs against correct environment URL and build. Check for overlays, cookie banners, or MFA disabled in test env only locally. Increase logging: save screenshot and HTML on failure. Run Jenkins job from branch with fix before merging.`,source:M("selenium-jenkins")},{question:"Business says expected result changed.",answer:`Do not change tests unilaterally. Request updated acceptance criteria or change request from BA/PO — email/Jira ticket. Assess impact on automation baselines, regression suite, and UAT sign-off documents.

Update test cases and scripts after approval; version-control with ticket reference. Re-run affected suite and communicate to team if other tests assumed old behavior. If change is retroactive for in-flight defects, clarify which failures are now invalid.`,source:c("change-management-in-testing")},{question:"Test data unavailable.",answer:`Escalate early — blocked testing is a sprint risk. Options: work with DBA/ops for masked prod subset, use API/factory scripts to create data, maintain golden test accounts documented in wiki, or use stub/mock for non-UI layers with PO agreement.

Never use real customer PII in test. For banking, use compliance-approved synthetic IBANs/BICs. Meanwhile execute static tests (message validation, unit-level) or peer review test cases. Log blocker in daily standup with ETA.`,source:c("test-data-management")},{question:"Application response slow.",answer:`Separate environment slowness from product defect. Measure response time with timestamps in automation (soft assert threshold), APM tools, or browser Network tab. Identify layer — UI, API, DB, third-party screening/SWIFT.

If slowness causes failures, adjust waits strategically (explicit, not huge sleep) and flag performance defect with evidence (p95 latency). Run tests off-peak or on dedicated env. Do not ignore — slow prod impacts STP and cut-offs in banking.`,source:c("performance-testing-basics")},{question:"Random popup appears.",answer:`Identify trigger — cookie consent, session timeout, marketing modal, error toast, or concurrent user alert. Reproduce with video; check if popup is iframe or shadow DOM.

Short-term: handle in Page Object — wait and close if displayed within short timeout (do not fail if absent). Long-term: request disable in test env or data-testid for dismiss button. Avoid clicking random coordinates. If popup is a bug (should not block flow), log defect separately from test maintenance.`,source:c("handle-alerts-popups-selenium")},{question:"Test passes individually but fails in suite execution.",answer:`Classic test isolation failure. Check shared state: same user logged in twice, data consumed by prior test, database not reset, static variables, or file locks. Review test order — @pytest.mark dependency or alphabetical order may expose coupling.

Fix: unique data per test, cleanup in teardown, independent browser session per test, pytest random order to detect. Run failed test with tests that ran before it. Use pytest fixtures with function scope for driver and fresh login.`,source:c("test-isolation")},{question:"Parallel execution causing failures.",answer:`Parallel tests must not share accounts, payment references, or DB rows. Use worker-specific IDs (pytest-xdist worker_id), separate browsers, and thread-safe reporting. Race conditions on same record cause intermittent failures.

Reduce parallelism for tests that hit single shared resource, or mock backend. Verify Grid/hub capacity — session timeouts under load. Run with -n auto locally to reproduce; fix data strategy before increasing CI parallelism.`,code:[{language:"bash",snippet:`pytest tests/ -n 4 --dist loadscope
# Each worker: unique user via worker input`}],source:c("parallel-testing-in-selenium")},{question:"Database values mismatch.",answer:`Confirm UI/API action completed — check transaction status and timestamps. Query correct schema/environment; watch replication lag in clustered DB. Compare expected vs actual with SQL — payment amount, status, nostro, message id.

Mismatch sources: async posting, rollback after SWIFT NACK, wrong test account, or date boundary (value date). Attach query results to defect. Automate DB assertion via controlled test API or read-only test DB user; avoid hardcoding prod connection.`,source:c("database-testing")},{question:"User story unclear.",answer:`Do not guess expected behavior. Schedule refinement with BA/PO — list specific questions (edge cases, error messages, limits). Document assumptions and get written answers in Jira AC before test design.

Write draft test scenarios and send for review — often clarifies gaps early. If story stays unclear, mark story as blocked in sprint; testing on ambiguity creates false defects. Escalate to Scrum Master if recurring.`,source:c("user-story-in-agile")},{question:"Requirement document missing.",answer:`Use available sources: Jira AC, mockups, API Swagger, previous sprint behavior, and SME interview. Produce a short test basis document listing assumptions and send to PO for confirmation before execution.

Log risk: incomplete coverage without BRD. For regulated banking, insist on compliance-approved requirements for audit trail. Do not sign UAT without documented expected results. Follow up formally for missing artifacts.`,source:c("software-requirement-specification")},{question:"High severity defect near release date.",answer:`Immediately notify QA lead, PM, and release manager with impact assessment — modules affected, workaround exists or not, regulatory exposure. Do not quietly downgrade severity without approval.

Options: fix and targeted retest, defer release, release with known issue + waiver (PO/compliance sign-off), or hotfix branch. Accelerate regression on fix; avoid skipping full smoke. Document decision in release notes. Post-release: monitor production closely for related symptoms.`,source:c("defect-life-cycle")}],wm=ke({id:"scenario",number:9,title:"Scenario-Based",description:"These are the real elimination questions. Interviewers test your debugging mindset, prioritization, and communication under pressure.",priority:"critical",color:"var(--red)",questions:K("scen",vm,{tags:["scenario","debugging","process"],difficulty:"medium",priority:"critical"})}),km=[{question:"SDLC vs STLC.",answer:`SDLC (Software Development Life Cycle) is the end-to-end process of building software — planning, requirements, design, development, testing, deployment, maintenance. It is owned by the whole project team.

STLC (Software Testing Life Cycle) is the subset focused only on testing activities — requirement analysis, test planning, test case design, environment setup, execution, cycle closure. STLC fits inside SDLC.

Key difference: SDLC produces the product; STLC validates it. Testing starts early in SDLC (shift-left) even though execution peaks before release.`,source:c("software-development-life-cycle-sdlc")},{question:"Severity vs priority.",answer:`Severity = technical impact on the system (how bad is the defect?). Set by QA based on functionality/data loss.

Priority = business urgency to fix (how soon should dev fix it?). Set by product/management based on release timelines and user impact.

They are independent. Example: wrong logo on login page — Low severity (cosmetic) but High priority if CEO demo is tomorrow. Payment calculation off by 1 cent — High severity but Low priority if feature is not live yet.

Common scale: Critical / Major / Minor / Trivial for severity; P1–P4 for priority.`,source:c("difference-between-severity-and-priority")},{question:"Defect lifecycle.",answer:`Typical states:

1. New — tester logs defect
2. Assigned — triaged to developer
3. Open / In Progress — developer investigating or fixing
4. Fixed / Resolved — fix deployed to test environment
5. Retest — QA verifies fix
6. Verified / Closed — fix confirmed
7. Reopened — fix failed retest
8. Deferred / Rejected / Duplicate / Cannot Reproduce — alternate closures

Good practice: every transition has an owner, comment, and build/version. Reopened defects often indicate poor root-cause analysis or missing regression coverage.`,source:c("defect-life-cycle-in-software-testing")},{question:"Bug leakage vs bug release.",answer:`Bug leakage — a defect that existed in the application but was NOT found during testing; it escapes to production or UAT. Indicates gaps in test coverage, environment parity, or test data.

Bug release — a defect that WAS found during testing but was consciously released anyway (known issue) — usually documented with waiver, workaround, or deferred fix due to low risk or deadline.

Leakage = testing miss. Release = informed business decision. Both hurt quality; leakage is worse for QA credibility.`,source:ze("/software_testing_dictionary/bug_leakage.htm")},{question:"Regression vs retesting.",answer:`Retesting — re-execute specific test cases that failed after a fix, on the same build or new build, to confirm the defect is resolved. Narrow scope, tied to defect IDs.

Regression testing — re-run a broader (or full) suite to ensure new code or fixes did NOT break existing functionality. Wider scope, often automated.

Example: login bug fixed → retest login test cases. Before release → run regression suite (smoke + critical paths + affected modules).`,source:c("difference-between-retesting-and-regression-testing")},{question:"Smoke vs sanity.",answer:`Smoke testing — shallow, wide check that the build is stable enough for further testing. "Does it install, launch, and core paths work?" Run on every new build. Fail fast — reject build if smoke fails.

Sanity testing — narrow, deep check on a specific changed area after a small fix. "Does this one feature still work after the patch?" Subset of regression, not full suite.

Smoke = build acceptance. Sanity = focused confidence after localized change.`,source:c("difference-between-sanity-testing-and-smoke-testing")},{question:"Test plan vs test strategy.",answer:`Test Strategy — high-level, organization/project-wide document. Defines testing approach, tools, levels (unit/integration/system), entry/exit criteria, risk approach, roles. Usually stable across releases.

Test Plan — project/release-specific document derived from strategy. Scope, schedule, features in/out of scope, test environment, deliverables, milestones, resources. Changes per sprint or release.

Analogy: Strategy = how we test in this company; Plan = how we test this release of Payment App v2.3.`,source:c("difference-between-test-plan-and-test-strategy")},{question:"Functional vs non-functional testing.",answer:`Functional testing — validates WHAT the system does against requirements. Examples: login with valid credentials, transfer amount, search returns correct results. Black-box, requirement-driven.

Non-functional testing — validates HOW WELL the system behaves. Examples: performance (load time under 2s), security (SQL injection blocked), usability, reliability, compatibility, scalability.

Both are required for production readiness. A feature can pass functional tests but fail performance under 1000 concurrent users.`,source:c("functional-vs-non-functional-testing")},{question:"Black box vs white box.",answer:`Black box testing — tester has no knowledge of internal code structure. Tests based on inputs, outputs, and requirements. Techniques: equivalence partitioning, boundary values, decision tables, exploratory testing. Typical for manual and system testing.

White box testing — tester knows internal logic, code paths, branches. Techniques: statement/branch coverage, path testing, unit tests by developers. Typical for unit and integration testing.

Gray box — partial knowledge (e.g., DB schema, API contracts) — common in API and integration testing.`,source:c("difference-between-black-box-and-white-box-testing")},{question:"Boundary value analysis.",answer:`Defects cluster at boundaries of input ranges. BVA tests values at, just below, and just above boundaries rather than every value in the range.

For field accepting 1–100: test 0, 1, 2, 99, 100, 101 (min-1, min, min+1, max-1, max, max+1).

Works with equivalence partitioning — first divide inputs into valid/invalid classes, then apply BVA on class edges.`,code:[{language:"text",snippet:`Field: Age 18–60 (inclusive)

BVA test values:
  17  → invalid (below min)
  18  → valid (min boundary)
  19  → valid (min+1)
  59  → valid (max-1)
  60  → valid (max boundary)
  61  → invalid (above max)`}],source:c("boundary-value-analysis-in-software-testing")},{question:"Equivalence partitioning.",answer:`Divide input data into partitions where all values in a partition are expected to behave the same. Pick one representative value per partition instead of testing every value — reduces test cases while maintaining coverage.

Example: password length 8–20 characters.
- Invalid partition 1: length < 8 (test: "abc")
- Valid partition: length 8–20 (test: "password1")
- Invalid partition 2: length > 20 (test: 21-char string)

Combine with BVA for edge cases within each partition.`,source:c("equivalence-partitioning-method")},{question:"Exploratory testing.",answer:`Simultaneous learning, test design, and test execution — no detailed pre-written scripts. Tester explores the application based on charter, intuition, and risk areas to find unexpected defects.

Best for: new features, unclear requirements, usability issues, edge cases scripts miss. Often time-boxed (e.g., 90-minute session) with session notes and debrief.

Not a replacement for scripted regression — complements it. Strong exploratory testers document findings and turn critical paths into automated checks later.`,source:c("exploratory-testing-software-testing")},{question:"Risk-based testing.",answer:`Prioritize testing effort based on risk = Probability of failure × Impact if it fails. High-risk areas get more depth, earlier execution, and automation; low-risk areas get lighter coverage.

Risk identification sources: requirements ambiguity, complex integrations, new technology, past defect history, regulatory impact (payments, healthcare).

Example: in a banking app, fund transfer and authentication are high risk; "About Us" page is low risk. Allocate 60% of regression effort to payment and auth modules.`,source:c("risk-based-testing-in-software-testing")},{question:"Agile testing principles.",answer:`Key principles (aligned with Agile Manifesto):

1. Testing is whole-team responsibility — not only QA at the end
2. Early and continuous testing — shift-left in every sprint
3. Automate regression; keep manual for exploratory and new stories
4. Working software over exhaustive documentation — lightweight test charters and BDD scenarios
5. Adapt to changing requirements — reprioritize tests each sprint
6. Face-to-face communication with dev and BA for quick clarification
7. Sustainable pace — avoid death-marches; quality drops under burnout

QA attends standups, refinement, and retros; defines Definition of Done with test evidence.`,source:c("agile-testing-principles")},{question:"Entry and exit criteria.",answer:`Entry criteria — conditions that must be met BEFORE testing starts. Examples: requirements signed off, test environment available, test data loaded, build deployed, smoke passed, test cases reviewed.

Exit criteria — conditions to STOP testing for a phase/release. Examples: planned test cases executed, critical/high defects closed or waived, regression pass rate ≥ 95%, no open P1 defects, sign-off from stakeholders.

Without clear criteria, teams debate "are we done?" and releases slip or ship with unknown risk.`,source:ze("/software_testing/software_testing_entry_exit_criteria.htm")},{question:"Traceability matrix.",answer:`A document (often spreadsheet or ALM tool) mapping requirements → test cases → defects → test results. Ensures every requirement is tested and every test traces back to a business need.

Types: Forward (requirement → tests), Backward (test → requirement), Bi-directional (both).

Example: REQ-101 "User can reset password" maps to TC-45, TC-46, TC-47. If REQ-101 fails UAT, you instantly see which tests should have caught it.

Critical for audits in regulated domains (banking, healthcare).`,source:c("requirement-traceability-matrix")},{question:"Defect report contents.",answer:`A good defect report enables reproduction without back-and-forth:

1. Defect ID and title (clear, specific)
2. Environment — build version, OS, browser, test data
3. Steps to reproduce (numbered)
4. Expected vs actual result
5. Severity and priority
6. Screenshots, logs, HAR files, or video
7. Test case reference / requirement ID
8. Reporter, date, assignment
9. Attachments (sample payload, DB snapshot if relevant)

Bad example: "Login broken." Good example: "Login fails with valid AD user on Chrome 120 — build 2.4.1 — returns 500 after MFA step; see attached network log."`,source:c("bug-report-format")}],xm=ke({id:"manual",number:10,title:"Manual Testing",description:"Do not underestimate this section. Core QA concepts like SDLC, defect lifecycle, and test design techniques are still frequently asked.",priority:"high",color:"var(--green)",questions:K("man",km,{tags:["manual","testing","fundamentals"],difficulty:"easy",priority:"high"})}),bm=[{question:"Difference between clone and fork.",answer:`git clone copies a remote repository to your local machine — full history, you push/pull to that remote (origin).

Fork (GitHub/GitLab feature) creates your own copy of someone else's repo on the hosting platform. You clone your fork, make changes, and submit a Pull Request to the original repo.

Clone = local copy. Fork = your own remote copy of another project.`,source:c("difference-between-fork-and-clone-in-github")},{question:"Difference between fetch and pull.",answer:`git fetch downloads commits from remote to your local repo but does NOT merge — safe to inspect changes first.

git pull = git fetch + git merge (or rebase). Downloads and immediately integrates into your current branch.

Use fetch when you want to review remote changes before merging. Use pull for quick sync when you trust remote changes.`,code:[{language:"bash",snippet:`git fetch origin          # download only
git log origin/main       # review changes
git pull origin main      # fetch + merge in one step`}],source:c("git-fetch-vs-pull")},{question:"Rebase vs merge.",answer:`git merge combines branches — creates a merge commit, preserves full history with branches visible.

git rebase replays your commits on top of another branch — linear history, no merge commit, cleaner log. Never rebase public/shared branches others are using.

Use merge for shared/main branches. Use rebase to update feature branch before PR.`,code:[{language:"bash",snippet:`# Merge — preserves branch history
git checkout main
git merge feature/login

# Rebase — linear history
git checkout feature/login
git rebase main`}],source:c("git-merge-vs-rebase")},{question:"Cherry-pick?",answer:`git cherry-pick <commit-hash> applies a specific commit from one branch onto your current branch — without merging the entire branch.

Useful for hotfixes: pick a bug fix commit from develop into release branch without merging everything else.`,code:[{language:"bash",snippet:`git checkout release/v1.2
git cherry-pick abc1234   # apply single commit
git push`}],source:c("git-cherry-pick")},{question:"Resolve merge conflict.",answer:`Conflicts occur when Git cannot auto-merge changes to the same lines.

Steps:
1. git pull or git merge triggers conflict
2. Open conflicted files — look for <<<<<<< HEAD markers
3. Manually edit to keep correct code
4. git add <resolved-files>
5. git commit (merge commit completes)

Use IDE conflict resolver or git mergetool for help.`,code:[{language:"bash",snippet:`git pull origin main
# CONFLICT in test_login.py

# Edit file — remove conflict markers
# <<<<<<< HEAD
# your changes
# =======
# their changes
# >>>>>>> origin/main

git add test_login.py
git commit -m 'Resolve merge conflict in test_login.py'`}],source:c("merge-conflicts-in-git")},{question:"Git stash.",answer:`git stash temporarily saves uncommitted changes and reverts working directory to clean state. Useful when you need to switch branches but aren't ready to commit.

git stash — save changes
git stash pop — restore and remove from stash
git stash list — view all stashes
git stash apply — restore without removing`,code:[{language:"bash",snippet:`git stash save 'WIP login tests'
git checkout hotfix/urgent-bug
# ... fix and commit ...
git checkout feature/login
git stash pop`}],source:c("git-stash")},{question:"Git revert vs reset.",answer:`git revert <commit> — creates a NEW commit that undoes a specific commit. Safe for shared/public branches — does not rewrite history.

git reset — moves branch pointer backward. --soft keeps changes staged, --mixed keeps changes unstaged, --hard discards all changes. Dangerous on pushed branches.

Use revert for production/shared branches. Use reset only on local unpushed commits.`,code:[{language:"bash",snippet:`# Safe for shared branches
git revert abc1234
git push

# Local only — undo last commit, keep changes
git reset --soft HEAD~1

# Local only — discard everything
git reset --hard HEAD~1`}],source:c("git-revert-vs-reset")},{question:"Branching strategy.",answer:`Common strategies:

Git Flow: main (production) + develop + feature/release/hotfix branches. Formal, good for scheduled releases.

GitHub Flow: main + short-lived feature branches + PR. Simple, continuous delivery.

Trunk-Based: everyone commits to main frequently with feature flags. Fast CI/CD.

For QA automation: feature branches per story, PR review, merge to develop, regression on staging, release to main.`,source:c("git-branching-strategies")},{question:"Pull request process.",answer:`Pull Request (PR) / Merge Request workflow:

1. Create feature branch from main/develop
2. Commit changes with clear messages
3. Push branch to remote
4. Open PR with description, linked ticket, test evidence
5. Code review + CI pipeline runs (tests must pass)
6. Address review comments
7. Squash/merge into target branch
8. Delete feature branch

As QA: include test results, automation report links in PR description.`,source:c("pull-request-in-git")}],Sm=ke({id:"git",number:11,title:"Git",description:"Version control workflow questions — branching, merging, conflicts, and pull request process.",priority:"medium",color:"var(--text-muted)",questions:K("git",bm,{tags:["git","version-control"],difficulty:"easy",priority:"medium"})}),_m=[{question:"Show me one automation flow you designed.",answer:`Describe end-to-end: trigger → layers → assertions → reporting.

Example (payment portal): "I designed a nightly regression flow: Jenkins triggers pytest suite on staging. Tests pull test data from a JSON fixture factory. Flow: UI login via Page Object → navigate to Outgoing Payment → fill SWIFT fields via API shortcut for speed → submit → poll status API until SETTLED → assert DB record in Oracle via JDBC helper. Failures attach screenshot + log to Allure and Slack alert QA channel. Runtime dropped from 4h manual to 45 min automated."

Highlight: why you chose UI vs API, how you handle async waits, and how the flow maps to a real business scenario.`,source:M("test-automation-framework-design")},{question:"Explain your hardest bug.",answer:`Use STAR and technical depth — intermittent bugs impress when you explain investigation method.

Example: "Intermittent duplicate SWIFT messages in UAT only under load. Reproduced after 200 parallel submissions. I correlated app logs with MQ queue depth — race condition: two threads read same sequence number before DB lock. I built a minimal JMeter script to reproduce, captured thread dumps, and paired with dev to add optimistic locking. Added an API-level idempotency test and a concurrency integration test. Bug was Critical severity — would have caused duplicate settlements in production."

Show: hypothesis → evidence → collaboration → permanent test guard.`,source:c("how-to-debug-intermittent-software-bugs")},{question:"Explain one failed release.",answer:`Be honest, blameless, and focus on process improvements — interviewers want maturity not excuses.

Example: "Release 3.2 failed UAT because FX rate table migration script ran against wrong schema in pre-prod — rates showed zeros. Testing had used mocked rates in lower env; integration gap. We rolled back within 2 hours. Post-mortem actions: (1) mandatory data parity checklist before UAT, (2) automated smoke on live rate feed, (3) release checklist owner sign-off. I updated regression to include end-to-end rate validation, not just UI display."

Cover: what broke, impact, rollback, root cause, what you changed personally.`,source:c("post-mortem-meeting-in-software-development")},{question:"Explain one production issue.",answer:`Demonstrate calm triage, communication, and follow-up automation.

Example: "After go-live, corporate clients could not download MT940 statements. I joined the war room, reproduced in prod-like UAT with same client ID, traced to a null pointer when account had zero transactions for the day — edge case missed. Provided logs and SQL evidence. Hotfix in 6 hours. I added a negative test for empty-state download and a monitoring alert on 500 errors for that endpoint. Communicated workaround to support: use date range with prior day."

Mention: severity, stakeholders notified, workaround, prevention test.`,source:c("production-support-interview-questions")},{question:"Explain your regression strategy.",answer:`Layer your answer: what runs when, on which environment, manual vs automated.

Example structure:
- Smoke (15 min) — every build: login, core navigation, one payment path
- Sprint regression (2h) — end of sprint: all stories in sprint + affected modules
- Full regression (nightly, 6h) — automated P1/P2 suites on staging
- Pre-prod — manual exploratory on changed areas + full automated pass
- Production sanity — post-deploy smoke only

Prioritize by risk matrix. Maintain regression suite in version control; retire obsolete tests quarterly. Track pass rate trend — dropping pass rate signals tech debt.`,source:c("regression-testing-in-software-testing")},{question:"How do you select automation candidates?",answer:`Use repeatable, stable, high-value criteria — not "automate everything."

Automate when:
- Test runs frequently (every sprint/release)
- Stable UI/API (locators agreed with dev, data-testid)
- Clear expected results (assertions are deterministic)
- High business risk or tedious manual effort
- Good ROI — effort to automate < 3× manual run cost over 6 months

Defer when:
- One-off or changing requirements
- Heavy visual/layout judgment
- Third-party dependencies you cannot stub

Example: automate login, payment submission, status API checks; keep one-time regulatory form layout review manual.`,source:M("what-test-cases-to-automate")},{question:"Which tests should NOT be automated?",answer:`Shows judgment — senior testers know automation limits.

Do NOT automate (or deprioritize):
- Exploratory / usability / ad-hoc sessions
- One-time tests (single migration validation)
- Unstable features still in flux (locators change daily)
- CAPTCHA, OTP hardware tokens, physical devices without harness
- Subjective visual design ("does branding look right?")
- Tests where maintenance cost exceeds manual run cost
- Compliance interviews or document review workflows

Better approach: automate the stable checks around these areas (e.g., API returns 200) and keep human judgment for the rest.`,source:c("when-not-to-automate-tests")},{question:"How do you measure automation success?",answer:`Use metrics that tie to business outcomes, not vanity counts.

Useful metrics:
- % critical regression automated (target e.g. 70% of P1 paths)
- Manual regression effort hours saved per release
- Defect leakage rate (prod bugs not caught in QA)
- Mean time to feedback — build to test results (CI duration)
- Flaky test rate (< 2% of runs)
- Automation pass rate trend (stable or improving)
- Cost per test run (infra + maintenance hours)

Avoid: "we have 5000 tests" without context. Report: "Nightly suite covers 85% of P1 scenarios; regression manual effort down from 3 days to 4 hours; zero P1 leakage last 2 releases."`,source:M("test-automation-metrics")},{question:"How do you reduce maintenance cost?",answer:`Maintenance kills automation ROI — explain concrete practices.

1. Page Object Model / Screenplay — UI changes in one place
2. Stable locators — data-testid agreements with frontend team
3. API setup instead of UI for test data (faster, less brittle)
4. Shared libraries for waits, drivers, DB helpers
5. Remove obsolete tests — quarterly suite audit
6. Parallel-safe tests — no shared state between tests
7. Code review for test PRs same as production code
8. Tag tests (@smoke, @payments) — run subsets, not always full suite

Example: "Refactoring 40 duplicate login steps into one fixture cut login-related failures by 60% and fix time from 2 hours to 15 minutes per locator change."`,source:c("page-object-model-in-selenium")},{question:"How do you improve execution speed?",answer:`Parallelization, smarter scope, and faster setup.

Tactics:
- Parallel runs (pytest-xdist, Selenium Grid, cloud like BrowserStack)
- Headless browsers where UI validation allows
- API tests instead of UI for data setup and assertions
- Skip unnecessary sleeps — explicit waits only
- Test data caching / DB snapshots instead of full UI registration per test
- Split suites: smoke on commit, full nightly
- Reuse browser session where framework supports it
- Mock external systems (credit bureau, SWIFT gateway) in lower envs

Example: "Parallelizing 80 tests across 4 nodes + replacing UI login with token injection reduced suite from 3h to 40 min."`,source:M("speed-up-selenium-test-automation")},{question:"How do you maintain test stability?",answer:`Flakiness erodes trust — describe prevention and detection.

Prevention:
- Explicit waits (expected conditions), never hard-coded sleep
- Retry only for known infra issues, not masking real bugs
- Isolate tests — independent data per test
- Stable test environment — versioned browsers, pinned dependencies
- Idempotent tests — can run in any order

Detection:
- Quarantine flaky tests immediately; fix or delete within sprint
- Track flake rate in CI dashboard
- Root-cause categories: timing, data, env, locator, external dependency

Example: "We added a custom wait helper and banned Thread.sleep in reviews. Flaky rate went from 12% to under 2% in one quarter."`,source:M("flaky-selenium-tests")},{question:"What improvements did you personally introduce?",answer:`Pick 2–3 with measurable impact — ownership matters for senior roles.

Examples you can adapt:
- "Built pytest + Selenium framework from scratch — team adopted in 2 months"
- "Integrated Allure reports into Jenkins — stakeholders see pass/fail without asking QA"
- "Introduced contract tests for payment API — caught breaking changes in CI before merge"
- "Added data-testid standards with dev lead — locator breakage down 50%"
- "Mentored 2 manual testers on Python — they now own 30% of automation backlog"

Formula: Problem → your action → measurable result. Avoid "we" only — say "I proposed, I implemented, I drove adoption."`,source:c("software-tester-career-growth")},{question:"What bottlenecks existed in your project?",answer:`Show awareness of process constraints and how you navigated them.

Common bottlenecks + responses:
- Slow environment provisioning → pushed for Dockerized test env
- Unclear requirements → asked for acceptance criteria in refinement, wrote BDD scenarios
- Serial QA at end of sprint → advocated shift-left, dev pairing on unit tests
- Shared test data conflicts → built data factory API
- Long regression → automation + risk-based selection
- Dev queue for bug fixes → prioritized by severity, daily triage with lead

Example: "UAT environment was shared with 3 projects — bookings collided. I documented a booking calendar and pushed for dedicated automation sandbox — reduced blocked days from 5/sprint to zero."`,source:c("common-challenges-in-software-testing")},{question:"How do you communicate with business teams?",answer:`Business cares about risk, timeline, and user impact — not Selenium details.

Practices:
- Plain language status: "Payment module — 2 high defects open, release at risk without fix by Wednesday"
- Visual evidence — screenshots, short demo videos for UAT sign-off
- Risk-based summaries in steering meetings — not raw defect counts
- Clarify requirements early — "Given/When/Then" examples in refinement
- Manage expectations on automation — what is covered, what is not
- Document known issues and workarounds before go-live

Example: "For business UAT I run a 30-minute walkthrough of test scope and show a one-page sign-off checklist with pass/fail per requirement — they sign digitally instead of reading 200 test cases."`,source:c("communication-skills-for-software-testers")},{question:"How do you prepare solution documents?",answer:`Solution docs bridge QA findings and dev/BA implementation — structure matters.

Typical sections:
1. Problem statement and business impact
2. Environment and reproduction steps
3. Root cause analysis (with logs/evidence)
4. Proposed solution options (pros/cons)
5. Recommended approach and effort estimate
6. Test impact — regression areas, new test cases
7. Risks and rollback plan

For automation proposals add: framework diagram, folder structure, CI integration, timeline, maintenance ownership.

Example: "For flaky payment tests I wrote a 3-page doc: root cause (implicit waits), option A (explicit waits, 3 days), option B (API-only path, 5 days). Lead chose hybrid. Attached sample code and migration plan for 45 tests."`,source:ze("/software_testing/software_test_documentation.htm")}],Em=ke({id:"deepdive",number:12,title:"Real Project Deep-Dive",description:"These decide seniority. Prepare concrete stories about automation flows, failed releases, and improvements you personally drove.",priority:"critical",color:"var(--accent)",questions:K("dd",_m,{tags:["project","senior","behavioral"],difficulty:"hard",priority:"critical"})}),Cm=[{question:"Show framework flow step by step.",answer:`Typical pytest + Selenium + POM flow:

1. pytest collects tests from tests/ per markers in pytest.ini
2. conftest.py fixtures run — session driver, env config, report hooks
3. Test calls Page Object method (e.g., LoginPage.login(user, pass))
4. Page uses locators from locators/ or class attributes + WebDriverWait utilities
5. Assertions in test or page (expected vs actual)
6. On failure: screenshot hook in conftest attaches to HTML/Allure report
7. Fixture teardown — driver.quit(), log flush
8. pytest-html or Allure generates report; Jenkins archives artifacts

Speak this as YOUR project: name folders, who owns config, which CI job runs regression.`,code:[{language:"python",snippet:`# tests/test_login.py
def test_valid_login(driver, config):
    login = LoginPage(driver)
    login.open(config.base_url)
    login.login(config.test_user, config.test_pass)
    assert login.is_dashboard_visible()`}],source:c("page-object-model-in-selenium-python")},{question:"Where exactly are locators stored?",answer:`Locators live in a dedicated layer — not scattered in tests.

Common patterns:
1. locators/ package — one file per page (login_locators.py) with tuples/constants
2. Inside Page Object class as class variables (LOC_USERNAME = (By.ID, "user"))
3. YAML/JSON locator files loaded by a LocatorReader utility (environment-specific overrides)

Rule: tests never contain raw By.XPATH strings. Page methods import locators. When UI changes, you update one file, not 50 tests.`,code:[{language:"python",snippet:`# locators/login_locators.py
from selenium.webdriver.common.by import By

USERNAME = (By.ID, 'username')
PASSWORD = (By.ID, 'password')
SUBMIT   = (By.CSS_SELECTOR, 'button[type="submit"]')

# pages/login_page.py — uses locators above`}],source:c("locators-in-selenium")},{question:"What is inside conftest.py?",answer:`conftest.py is pytest's shared configuration module (auto-discovered). Typical contents:

- @pytest.fixture(scope="session") for WebDriver — create once, yield, quit in teardown
- Environment fixture — loads config.ini / .env (base_url, credentials from secrets)
- Autouse fixtures — logging setup, screenshot directory creation
- Hooks: pytest_runtest_makereport — capture failure state for screenshots
- Custom CLI options via pytest_addoption (--env=qa)
- Shared API session or DB connection fixtures

Anything in conftest is available to all tests in that directory tree without import.`,code:[{language:"python",snippet:`# conftest.py
import pytest

@pytest.fixture(scope='session')
def driver():
    from selenium import webdriver
    d = webdriver.Chrome()
    yield d
    d.quit()

@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    report = outcome.get_result()
    setattr(item, 'rep_' + report.when, report)`}],source:c("pytest-fixtures")},{question:"How are fixtures triggered?",answer:`Fixtures run when pytest sees them as test function parameters (dependency injection).

1. Test declares fixture name: def test_x(driver, login_user)
2. pytest builds dependency graph — session fixtures run first, then function scope
3. Code before yield = setup; after yield = teardown
4. autouse=True runs fixture without being listed in test signature
5. @pytest.mark.usefixtures("cleanup") triggers fixture by marker

Scope controls lifetime: function (per test), class, module, session (once per run). Nested fixtures chain automatically — login_user may depend on driver.`,code:[{language:"python",snippet:`@pytest.fixture
def login_user(driver):
    page = LoginPage(driver)
    page.login('qa_user', 'pass')
    yield page
    page.logout()  # teardown

def test_dashboard(login_user):
    assert login_user.is_dashboard_visible()`}],source:c("pytest-fixtures")},{question:"How are reports generated?",answer:`Reporting stack in most Python frameworks:

1. pytest-html — plugin adds --html=report.html; conftest embeds screenshots via extras
2. Allure — pytest-allure-adaptor; steps/attachments; allure generate for dashboard
3. Custom listener — pytest hook writes JSON results per test for Jenkins parsing
4. Logging — loguru/logging to logs/run_<timestamp>.log

Flow: test runs → makereport hook captures pass/fail/duration → on fail attach screenshot/log → pytest sessionfinish writes HTML → Jenkins archives report/ and publishes HTML Publisher or Allure plugin.`,code:[{language:"bash",snippet:`pytest tests/ --html=reports/report.html --self-contained-html
# or
pytest tests/ --alluredir=allure-results
allure serve allure-results`}],source:c("pytest-html-report")},{question:"How do retries work internally?",answer:`Retries re-run failed tests without manual intervention.

1. pytest-rerunfailures — @pytest.mark.flaky(reruns=2, reruns_delay=1) or --reruns 2 CLI
2. Custom wrapper — for loop around action catching StaleElementReferenceException
3. Tenacity library on API calls — retry on 503/timeout
4. CI level — Jenkins retry stage (not ideal; prefer test-level)

Internal flow: test fails → plugin checks reruns remaining → same test re-executed → pass stops retry; final fail logged once in report. Combine with root-cause fix — retries mask locator/timing bugs if overused.`,code:[{language:"python",snippet:`import pytest

@pytest.mark.flaky(reruns=2, reruns_delay=1)
def test_flaky_submit(driver):
    LoginPage(driver).submit_form()`}],source:c("pytest-rerunfailed-tests")},{question:"How are screenshots attached?",answer:`Screenshot on failure pattern:

1. pytest_runtest_makereport hook stores report on item
2. Fixture with request.node accesses rep_call.failed
3. driver.save_screenshot(path) or element.screenshot()
4. Attach to report: pytest-html extras (pytest_html.extras.image), or allure.attach.file()

Paths usually: reports/screenshots/<test_name>_<timestamp>.png. Session fixture ensures screenshots/ exists. Only capture on call phase failure to avoid duplicate shots on setup errors unless needed.`,code:[{language:"python",snippet:`@pytest.fixture(autouse=True)
def screenshot_on_fail(request, driver):
    yield
    if hasattr(request.node, 'rep_call') and request.node.rep_call.failed:
        path = f"reports/screenshots/{request.node.name}.png"
        driver.save_screenshot(path)`}],source:c("screenshots-in-selenium-webdriver")},{question:"Explain one Jenkinsfile.",answer:`Declarative Jenkinsfile example for automation:

pipeline {
  agent any
  environment { ENV = 'qa' }
  stages {
    stage('Checkout') { steps { git branch: 'develop', url: '...' } }
    stage('Setup') { steps { sh 'pip install -r requirements.txt' } }
    stage('Tests') { steps { sh 'pytest tests/ -m smoke --html=report.html' } }
    stage('Publish') {
      steps {
        publishHTML(target: [reportDir: '.', reportFiles: 'report.html'])
        archiveArtifacts 'reports/**')
      }
    }
  }
  post {
    failure { emailext attachLog: true, to: 'team@company.com' }
  }
}

Know YOUR pipeline: branch triggers, parallel stages, credentials binding, Allure plugin.`,code:[{language:"groovy",snippet:`stage('Run Tests') {
  steps {
    sh '''
      export ENV=qa
      pytest tests/ -n 4 --alluredir=allure-results
    '''
  }
}`}],source:c("jenkins-pipeline-tutorial")},{question:"Explain exact Git flow in your project.",answer:`Typical QA automation Git flow:

1. main — production-ready framework + stable tests
2. develop — integration branch; nightly regression runs here
3. feature/<ticket>-<desc> — branched from develop for new tests/fixes
4. Commit with ticket ID: "QA-123 Add payment status API tests"
5. Push → open Pull Request to develop
6. CI runs smoke on PR (pytest -m smoke)
7. Code review from lead/peer → merge squash
8. Release: develop → main via release PR after UAT sign-off
9. hotfix/<issue> from main for urgent locator fix → PR back to main and develop

You personally: create branch, write tests, push, fix CI failures, update PR from review comments.`,source:c("git-branching-strategies")},{question:"Show one XPath you wrote recently.",answer:`Interviewers want a real, purposeful XPath — not textbook examples.

Example (dynamic table row by payment reference):
//tr[td[normalize-space()='REF12345']]//button[@aria-label='View Details']

Why: REF in td is stable business key; normalize-space handles whitespace; button located relative to row, not brittle absolute path.

Other patterns you can cite:
- contains(@id,'account') for partial dynamic IDs
- following-sibling:: for label-to-input
- ancestor::div[@class='modal'] for scoped search

Always mention you verified in Chrome DevTools ($x) before adding to framework.`,code:[{language:"python",snippet:`STATUS_CELL = (
    By.XPATH,
    "//tr[td[normalize-space()='{ref}']]//span[contains(@class,'status')]"
)
# format with payment ref from test data
driver.find_element(By.XPATH, STATUS_CELL[1].format(ref='REF12345'))`}],source:c("dynamic-xpath-in-selenium")},{question:"Explain one SQL query you used recently.",answer:`Tie query to test validation — not random SQL.

Example: verify payment reached COMPLETED in DB after UI/API test:

SELECT t.transaction_id, t.status, t.amount, a.account_no
FROM transactions t
INNER JOIN accounts a ON t.account_id = a.account_id
WHERE t.transaction_id = 'TXN98765'
  AND t.status = 'COMPLETED';

Used in: post-test DB assertion or test data setup (find stuck PENDING payments for retry tests).

Mention: read-only DB user in automation, no production writes, connection from config, results compared to API/UI response.`,code:[{language:"sql",snippet:`SELECT t.transaction_id, t.status, t.amount
FROM transactions t
INNER JOIN accounts a ON t.account_id = a.account_id
WHERE t.transaction_id = 'TXN98765'
  AND t.status = 'COMPLETED';`}],source:c("sql-join-set-operators")},{question:"Explain one real defect you found.",answer:`Use STAR format with technical depth:

Situation: regression on payment transfer page after UI release.
Task: automate happy path + edge cases for cross-border transfer.
Action: API returned 200 but UI showed "Processing" indefinitely. Compared API JSON status vs DB — DB stuck PENDING. Traced to missing status callback when intermediary bank rejected. Logged Sev-2, attached HAR, API response, SQL proof.
Result: dev fixed webhook handler; added API+DB assertion in automation; defect prevented in 2 later releases.

Pick YOUR story: wrong amount decimal, duplicate SWIFT message, sanction hold not displayed, timezone on value date. Quantify impact if possible.`,source:ze("software_testing/bug_life_cycle.htm")},{question:"What exactly did YOU do personally?",answer:`Separate team vs personal ownership clearly:

I personally:
- Built/maintained Page Objects and locators for 3 modules (login, transfers, admin)
- Wrote 40+ pytest tests (UI + API) and parametrized data sets
- Designed conftest fixtures (driver, env, screenshot hook)
- Integrated Jenkins pipeline and fixed 5+ CI-only failures (headless, paths, secrets)
- Triaged flaky tests — replaced implicit waits, added explicit waits
- Raised 12 production/UAT defects with logs and steps
- Reviewed PRs for locator standards and POM compliance

Team/shared: overall architecture decision, Grid infra, some legacy test migration.

Never claim sole credit for entire framework if you joined mid-project — be honest and specific.`,source:ze("software_testing/skills_required_for_software_tester.htm")}],Pm=ke({id:"fakecheck",number:13,title:"Fake Experience Checks",description:"Very important. If you cannot answer these naturally, the interviewer will know instantly. Know your framework internals cold.",priority:"critical",color:"var(--red)",questions:K("fc",Cm,{tags:["verification","framework","authenticity"],difficulty:"hard",priority:"critical"})}),Im=[{question:"Python OOP — explain classes, inheritance, polymorphism, and encapsulation with examples.",answer:`Class — blueprint for objects (attributes + methods). Inheritance — child class gets parent behavior; use super() for parent __init__. Polymorphism — same interface, different behavior (method overriding, duck typing). Encapsulation — hide internal state; use _private convention and @property for controlled access.

In test frameworks: BasePage parent with common wait/click; LoginPage( BasePage ) overrides open().`,code:[{language:"python",snippet:`class BasePage:
    def __init__(self, driver):
        self._driver = driver  # encapsulation
    def click(self, locator):
        self._driver.find_element(*locator).click()

class LoginPage(BasePage):  # inheritance
    def login(self, user, pwd):
        self.click(USERNAME)
        # polymorphism — same click(), page-specific flow`}],source:c("python-oops-concepts")},{question:"Pytest framework — explain fixtures, markers, parametrization, and conftest.py usage.",answer:`Fixtures — setup/teardown via @pytest.fixture; inject by parameter name; scopes: function/class/module/session.
Markers — @pytest.mark.smoke to categorize; run with pytest -m smoke; register in pytest.ini.
Parametrize — @pytest.mark.parametrize("user,pwd", [("a","1"),("b","2")]) runs same test with multiple data sets.
conftest.py — shared fixtures/hooks for a directory tree; no import needed.

pytest.ini sets addopts, markers, test paths, log format.`,code:[{language:"python",snippet:`@pytest.mark.smoke
@pytest.mark.parametrize('role', ['admin', 'viewer'])
def test_access(login_fixture, role):
    assert login_fixture.has_permission(role)`}],source:c("pytest-fixtures")},{question:"Selenium waits — explain implicit, explicit, and fluent waits with when to use each.",answer:`Implicit wait — driver.implicitly_wait(n): global poll on find_element. Simple but imprecise; avoid mixing heavily with explicit.
Explicit wait — WebDriverWait + expected_conditions on specific element/state. Preferred for automation.
Fluent wait — WebDriverWait with poll_frequency and ignored_exceptions; fine-grained polling.

Best practice: set implicit to 0; use explicit helpers (wait_clickable, wait_visible) in BasePage. Never Thread.sleep except debugging.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

WebDriverWait(driver, 15).until(
    EC.element_to_be_clickable((By.ID, 'submit'))
).click()`}],source:c("implicit-wait-vs-explicit-wait-in-selenium")},{question:"Dynamic XPath — write and explain XPath strategies for dynamic elements.",answer:`Dynamic elements change id/class at runtime. Strategies:

1. contains() — //input[contains(@id,'email')]
2. starts-with() — //div[starts-with(@id,'panel-')]
3. normalize-space() text — //button[normalize-space()='Submit']
4. Stable parent + relative child — //form[@id='login']//input[@name='user']
5. Axes — following-sibling, ancestor for label-input pairs
6. Prefer data-testid when devs add it — //*[@data-testid='login-btn']

Avoid absolute XPath and index-only paths (div[3]/span[2]).`,code:[{language:"python",snippet:`driver.find_element(By.XPATH, "//input[contains(@id,'username')]")
driver.find_element(By.XPATH, "//label[text()='Amount']/following-sibling::input")`}],source:c("dynamic-xpath-in-selenium")},{question:"Jenkins pipeline failures — debug why tests pass locally but fail in CI.",answer:`Common causes:

1. Environment — missing env vars, wrong BASE_URL, secrets not in Jenkins credentials
2. Headless/browser — Chrome options differ; add --headless=new, --no-sandbox, --disable-dev-shm-usage
3. Timing — CI slower; increase explicit waits; remove Thread.sleep assumptions
4. Paths — Windows vs Linux case sensitivity; hardcoded C:\\ paths
5. Dependencies — requirements.txt not installed; wrong Python version
6. Parallel — race conditions only under -n auto
7. Data — test account locked; DB not seeded in QA
8. Display — no DISPLAY on Linux without headless

Debug: reproduce with same Docker image, archive console + pytest log + screenshot on CI, compare pytest --collect-only locally vs CI.`,source:M("common-jenkins-errors")},{question:"API automation — explain end-to-end API test automation using Python.",answer:`Stack: requests/httpx + pytest + JSON schema validation.

Flow:
1. Load config (base_url, credentials from env)
2. Auth fixture — POST /login → store Bearer token in session fixture
3. Test CRUD — assert status code, response time, JSON fields
4. Chain tests — create order → get order → delete (use dynamic IDs from response)
5. Negative tests — 400/401/404, invalid payload
6. Data — JSON/YAML files or factories; pytest parametrize for boundary values
7. Reports — pytest-html/Allure; CI publishes results

Integrate with UI: API setup data, UI validates display, API teardown cleanup.`,code:[{language:"python",snippet:`import requests

def test_get_user(auth_headers):
    r = requests.get(f'{BASE_URL}/users/1', headers=auth_headers)
    assert r.status_code == 200
    assert r.json()['id'] == 1`}],source:c("api-testing-interview-questions")},{question:"SQL joins — explain INNER, LEFT, RIGHT, and FULL joins with examples.",answer:`INNER JOIN — only rows matching ON condition in both tables.
LEFT (OUTER) JOIN — all left rows + matching right; NULL if no match.
RIGHT JOIN — all right rows + matching left.
FULL OUTER JOIN — all from both; NULLs where no match (not all DBs support).

QA use: join transaction to account for validation; LEFT JOIN to find orphan records (NULL on right = missing account).`,code:[{language:"sql",snippet:`-- INNER: payments with account info
SELECT p.payment_id, a.account_no
FROM payments p
INNER JOIN accounts a ON p.account_id = a.account_id;

-- LEFT: all payments even if account missing
SELECT p.payment_id, a.account_no
FROM payments p
LEFT JOIN accounts a ON p.account_id = a.account_id
WHERE a.account_id IS NULL;  -- orphans`}],source:c("sql-join-set-operators")},{question:"SWIFT MT vs MX — explain the difference and when each format is used.",answer:`SWIFT MT (Message Type) — legacy FIN format, fixed/block structure (MT103 customer transfer, MT202 bank transfer). Text-based, field tags like :20:, :32A:.

SWIFT MX — XML messages based on ISO 20022 (e.g., pacs.008, pain.001). Rich structured data, better for straight-through processing and modern APIs.

When: MT still widely used in correspondent banking; MX/CBPR+ adoption growing for cross-border ISO 20022 migration. QA validates field tags in MT vs XSD/schema in MX; UAT often compares both during migration.`,source:c("difference-between-mt-and-mx-messages")},{question:"Regression strategy — explain how you plan, select, and execute regression testing.",answer:`Plan:
1. Risk-based selection — high-impact modules (payments, login, compliance) first
2. Map tests to requirements/user stories — traceability matrix
3. Suite tiers — smoke (<30 min), regression (full), full E2E (nightly)

Select:
- Code change impact analysis (which modules touched)
- Failed tests from last run always re-run
- Stable automated suite in CI; manual exploratory for new features

Execute:
- Smoke on every PR; regression on develop nightly; pre-release full pass
- Track pass rate trend; quarantine flaky tests with ticket
- Sign-off criteria: zero Sev-1/2 open, >95% automated pass, known failures documented`,source:ze("software_testing/regression_testing.htm")},{question:"Production support scenarios — describe how you handle live production issues.",answer:`Production support flow:

1. Triage — severity (Sev-1 payment down vs cosmetic), assign owner
2. Reproduce — logs, transaction ID, timestamp, environment; compare with QA
3. Mitigate — rollback, disable feature flag, manual workaround for ops
4. Root cause — app logs, DB state, SWIFT message trace, API gateway
5. Verify fix in UAT → deploy → smoke in prod (read-only checks)
6. Post-incident — RCA document, new regression test, monitoring alert

QA role: reproduce from prod data (sanitized), validate hotfix, run targeted regression, update automation for gap that missed it.`,source:ze("software_testing/incident_management.htm")},{question:"Framework architecture — explain layers, design patterns, and data flow in your framework.",answer:`Layers:
1. Tests — assertions, markers, thin (no locators)
2. Pages — user actions (login, transfer); inherit BasePage
3. Locators — constants only
4. Utilities — waits, driver factory, API client, DB helper, config reader
5. Data — JSON/Excel/DB fixtures
6. Reports/logs — hooks, Allure

Patterns: Page Object Model, Factory (driver), Singleton (config), Facade (API helper).

Data flow: config.ini → conftest fixtures → test → page → driver → browser; parallel path API client → assertions on JSON + optional DB check.`,source:c("page-object-model-in-selenium-python")},{question:"Exception handling — explain try/except/finally in Python and Selenium exception handling.",answer:`Python: try runs code; except catches specific errors; else if no error; finally always runs (cleanup).

Selenium common exceptions:
- NoSuchElementException — bad locator or timing
- TimeoutException — explicit wait expired
- StaleElementReferenceException — DOM refreshed
- ElementClickInterceptedException — overlay blocking click

Framework pattern: catch specific exceptions in retry wrapper; log context; re-raise after max retries; screenshot in except block.`,code:[{language:"python",snippet:`from selenium.common.exceptions import TimeoutException

try:
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located(loc))
except TimeoutException:
    driver.save_screenshot('timeout.png')
    raise`}],source:c("python-exception-handling")},{question:"Logging and reporting — explain how logging and HTML reports are implemented in your framework.",answer:`Logging:
- Python logging or loguru; config in conftest (level from --env)
- Log test start/end, locator actions, API request/response (mask passwords)
- File handler: logs/test_run_<timestamp>.log

Reporting:
- pytest-html with --html=reports/report.html
- conftest pytest_runtest_makereport → attach screenshot on failure
- Optional Allure for steps and history trend
- Jenkins archives reports/ and emails on failure

Correlation: test name in log matches report entry and screenshot filename.`,code:[{language:"python",snippet:`import logging
logger = logging.getLogger(__name__)

def test_transfer():
    logger.info('Starting transfer test')
    # ... on fail, hook attaches screenshot to HTML report`}],source:c("pytest-html-report")},{question:"Parallel execution — explain how you run tests in parallel locally and in CI.",answer:`Local/CI parallel with pytest-xdist:
pytest tests/ -n auto  (workers = CPU count)
pytest tests/ -n 4     (fixed workers)

Requirements:
- Tests independent — no shared static state
- Session-scoped driver → use function scope OR pytest-xdist worker-specific fixtures
- Unique test data per worker (UUID suffix on accounts)
- Separate Grid nodes or Docker agents in Jenkins for heavy suites

Selenium Grid: Hub routes to multiple nodes; each node one browser instance. CI: parallel stages or matrix (Chrome + Firefox).`,code:[{language:"bash",snippet:`pytest tests/ -n 4 --dist loadscope
# loadscope keeps class tests on same worker`}],source:c("pytest-parallel-testing")},{question:"Real-time debugging scenarios — walk through how you debug flaky or failing tests live.",answer:`Live debugging checklist:

1. Re-run single test verbose: pytest tests/test_x.py::test_y -v -s --tb=long
2. Check failure screenshot/video and log timestamp
3. Run headed (disable headless) to watch behavior
4. Verify locator in DevTools; check iframe/shadow DOM
5. Add temporary explicit wait — if passes, timing issue
6. Check test data — account state changed, duplicate record
7. API/UI mismatch — log response body vs UI text
8. CI-only: env diff, headless, resolution, parallel collision
9. Git bisect if regression started after specific commit
10. Quarantine with @pytest.mark.flaky after 2 reruns fail; file ticket with evidence

Communicate: share screen, narrate hypothesis, prove with one targeted fix.`,source:M("debug-flaky-selenium-tests")}],Tm=ke({id:"highpriority",number:14,title:"Extra Hard Prep",description:"These are the highest probability topics based on your profile. Review these last and make sure you can speak to each one confidently.",priority:"critical",color:"var(--amber)",questions:K("hp",Im,{priority:"critical"})}),Am=[zf,Xf,am,um,dm,fm,hm,ym,wm,xm,Sm,Em,Pm,Tm],Me=Am.map(Bf);function Rm({sectionColor:e="#6366f1",showMenu:t=!0}){const{theme:n,toggleTheme:r}=Cc(),{openBookmarks:s,activeView:i,goToLanding:o,toggleSidebar:a,sidebarOpen:l}=st(),{getOverallProgress:d}=ur(),{bookmarkCount:y}=Jo(),{reviewed:g,total:h}=d(Me),k=h===0?0:Math.round(g/h*100);return u.jsxs("header",{className:"app-header glass-panel",children:[u.jsxs("div",{className:"app-header__left",children:[t&&u.jsx("button",{type:"button",className:"app-header__menu-btn",onClick:a,"aria-label":l?"Close menu":"Open menu","aria-expanded":l,children:u.jsx(Af,{size:18})}),u.jsxs("button",{type:"button",onClick:o,title:"Back to home",className:"app-header__brand",children:[u.jsx("div",{className:"app-header__logo",style:{background:`linear-gradient(135deg, ${e}, color-mix(in srgb, ${e} 60%, #fff))`,boxShadow:`0 2px 12px ${e}44`},children:"PF"}),u.jsx("span",{className:"app-header__title",style:{color:i==="landing"?e:"var(--text-primary)"},children:"Prep First"})]})]}),u.jsx("div",{className:"app-header__search",children:u.jsx(qf,{accentColor:e})}),u.jsxs("div",{className:"app-header__actions",children:[u.jsxs("div",{className:"app-header__progress",children:[u.jsx("span",{className:"app-header__progress-dot",style:{background:k===100?"var(--green)":e,boxShadow:`0 0 6px ${e}66`}}),u.jsxs("span",{className:"app-header__progress-pct",style:{color:e},children:[k,"%"]}),u.jsxs("span",{className:"app-header__progress-count",children:[g,"/",h]})]}),u.jsxs("button",{type:"button",onClick:s,title:"Bookmarks",className:`app-header__icon-btn${i==="bookmarks"?" app-header__icon-btn--active":""}`,style:{"--btn-accent":e,borderColor:i==="bookmarks"?e:void 0,color:i==="bookmarks"?e:void 0},children:[u.jsx(wf,{size:16}),y>0&&u.jsx("span",{className:"app-header__badge",style:{background:e},children:y})]}),u.jsx("button",{type:"button",onClick:r,title:`Switch to ${n==="dark"?"light":"dark"} mode`,className:"app-header__icon-btn app-header__icon-btn--square",style:{"--btn-accent":e},children:n==="dark"?u.jsx(jf,{size:16}):u.jsx(Rf,{size:16})})]})]})}const al={critical:{label:"Critical",color:"var(--red)",bg:"var(--red-dim)"},high:{label:"High",color:"var(--amber)",bg:"var(--amber-dim)"},medium:{label:"Medium",color:"var(--blue)",bg:"var(--blue-dim)"},low:{label:"Low",color:"var(--green)",bg:"var(--green-dim)"}},ll={easy:{label:"Easy",color:"var(--green)",bg:"var(--green-dim)"},medium:{label:"Medium",color:"var(--amber)",bg:"var(--amber-dim)"},hard:{label:"Hard",color:"var(--red)",bg:"var(--red-dim)"}};function Nm(e){return al[e]??al.medium}function jm(e){return ll[e]??ll.easy}function qm(e="",t=""){if(!t.trim())return[{text:e,highlight:!1}];const n=new RegExp(`(${Dm(t.trim())})`,"gi");return e.split(n).map(s=>({text:s,highlight:n.test(s)}))}function Dm(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function Lm(e=""){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function Om({value:e=0,total:t=1,height:n=4,color:r="var(--accent)",bg:s="var(--border)",showLabel:i=!1,style:o={}}){const a=t===0?0:Math.round(e/t*100);return u.jsxs("div",{style:{width:"100%",...o},children:[i&&u.jsxs("div",{className:"progress-bar__label",style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[u.jsxs("span",{children:[e," / ",t," reviewed"]}),u.jsxs("span",{children:[a,"%"]})]}),u.jsx("div",{style:{width:"100%",height:`${n}px`,background:s,borderRadius:"99px",overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:`${a}%`,background:r,borderRadius:"99px",transition:"width 0.4s ease"}})})]})}function Mm({value:e=0,total:t=1,size:n=36,strokeWidth:r=3,color:s="var(--accent)"}){const i=t===0?0:Math.round(e/t*100),o=(n-r*2)/2,a=2*Math.PI*o,l=a-i/100*a;return u.jsxs("div",{style:{position:"relative",width:n,height:n},children:[u.jsxs("svg",{width:n,height:n,style:{transform:"rotate(-90deg)"},children:[u.jsx("circle",{cx:n/2,cy:n/2,r:o,fill:"none",stroke:"var(--border)",strokeWidth:r}),u.jsx("circle",{cx:n/2,cy:n/2,r:o,fill:"none",stroke:s,strokeWidth:r,strokeDasharray:a,strokeDashoffset:l,strokeLinecap:"round",style:{transition:"stroke-dashoffset 0.4s ease"}})]}),u.jsxs("span",{className:"progress-ring__label",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:[i,"%"]})]})}function Fm({section:e,isActive:t,onClick:n}){const[r,s]=A.useState(!1),{theme:i}=Cc(),{getSectionProgress:o}=ur(),{reviewed:a,total:l}=o(e.questions),d=e.color??"#6366f1",y=i==="dark",g=y?t?"#ffffff":r?d:"rgba(255, 255, 255, 0.28)":t||r?d:"var(--text-muted)";return u.jsxs("button",{type:"button",onClick:n,className:`sidebar-item${t?" sidebar-item--active":""}${r&&!t?" sidebar-item--hover":""}`,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{"--item-accent":d,"--item-accent-dim":e.colorDim??"var(--accent-dim)","--item-text":e.darkCardText??"#1E293B"},children:[u.jsx("span",{className:"sidebar-item__strip","aria-hidden":!0}),u.jsx("span",{className:"sidebar-item__num",children:String(e.number).padStart(2,"0")}),u.jsxs("div",{className:"sidebar-item__body",children:[u.jsxs("div",{className:"sidebar-item__title-row",children:[u.jsx("span",{className:"sidebar-item__dot","aria-hidden":!0}),u.jsx("span",{className:"sidebar-item__title",children:e.title})]}),u.jsxs("span",{className:"sidebar-item__meta",children:[a,"/",l," reviewed"]})]}),u.jsx("div",{className:"sidebar-item__ring",children:u.jsx(Mm,{value:a,total:l,size:28,strokeWidth:2.5,color:g})})]})}function Bm({isMobile:e=!1,isOpen:t=!1}){const{activeSection:n,activeView:r,navigateTo:s,closeSidebar:i}=st();return u.jsxs("aside",{className:`sidebar glass-panel${e?" sidebar--drawer":" sidebar--desktop"}${t?" sidebar--open":""}`,"aria-hidden":e&&!t,"aria-label":"Sections navigation",children:[u.jsxs("div",{className:"sidebar__header",children:[u.jsx("span",{className:"sidebar__label",children:"Sections"}),e&&u.jsx("button",{type:"button",className:"sidebar__close",onClick:i,"aria-label":"Close menu",children:u.jsx(Rc,{size:18})})]}),u.jsx("nav",{className:"sidebar__nav",children:Me.map(o=>u.jsx(Fm,{section:o,isActive:r==="section"&&n===o.id,onClick:()=>s(o.id)},o.id))})]})}function Um(e=[],t=""){const n=A.useMemo(()=>{const r=t.trim().toLowerCase();if(!r)return[];const s=[];return e.forEach(i=>{i.questions.forEach(o=>{var y,g;const a=o.question.toLowerCase().includes(r),l=((y=o.answer)==null?void 0:y.toLowerCase().includes(r))??!1,d=((g=o.tags)==null?void 0:g.some(h=>h.toLowerCase().includes(r)))??!1;(a||l||d)&&s.push({...o,sectionId:i.id,sectionTitle:i.title,sectionColor:i.color,sectionPastel:i.pastel})})}),s},[e,t]);return{results:n,totalCount:n.length,hasResults:n.length>0}}function zm(e=[],t="all",n="all"){return A.useMemo(()=>e.filter(r=>{const s=t==="all"||r.priority===t,i=n==="all"||r.difficulty===n;return s&&i}),[e,t,n])}const Vo={display:"inline-flex",alignItems:"center",padding:"2px 8px",borderRadius:"99px",whiteSpace:"nowrap"};function qc({priority:e}){const t=Nm(e);return u.jsx("span",{className:"typo-badge",style:{...Vo,color:t.color,background:t.bg},children:t.label})}function Wm({difficulty:e}){const t=jm(e);return u.jsx("span",{className:"typo-badge",style:{...Vo,color:t.color,background:t.bg},children:t.label})}function Hm({label:e,color:t="var(--text-muted)",bg:n="var(--bg-primary)"}){return u.jsx("span",{className:"typo-badge",style:{...Vo,color:t,background:n,border:"1px solid var(--border)",fontWeight:"var(--font-medium)"},children:e})}function Qm({tags:e=[]}){return e.length?u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.map(t=>u.jsx(Hm,{label:t},t))}):null}function Jm({section:e}){const{getSectionProgress:t}=ur(),{reviewed:n,total:r}=t(e.questions),s=r===0?0:Math.round(n/r*100),i=e.color??"#6366f1";return u.jsxs("div",{style:{padding:"24px 0 20px",marginBottom:"8px"},children:[u.jsxs("div",{className:"section-hero",style:{background:`linear-gradient(135deg, ${e.colorDim??"var(--accent-dim)"} 0%, transparent 70%)`,border:`1px solid ${i}33`,borderLeft:`4px solid ${i}`,boxShadow:`0 8px 32px ${i}18`},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px",flexWrap:"wrap"},children:[u.jsx("span",{className:"section-hero__badge",style:{background:i},children:String(e.number).padStart(2,"0")}),u.jsx("h1",{className:"section-hero__title",children:e.title}),e.priority&&u.jsx(qc,{priority:e.priority})]}),e.description&&u.jsx("p",{className:"section-hero__desc",children:e.description})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap",paddingTop:"12px",borderBottom:"1px solid var(--border)",paddingBottom:"16px"},children:[u.jsxs("div",{style:{display:"flex",gap:"16px"},children:[u.jsx(ni,{label:"Questions",value:r}),u.jsx(ni,{label:"Reviewed",value:n,color:i}),u.jsx(ni,{label:"Remaining",value:r-n,color:"var(--text-muted)"})]}),u.jsx("div",{style:{flex:1,minWidth:"160px"},children:u.jsx(Om,{value:n,total:r,height:6,color:i,showLabel:!1})}),u.jsxs("span",{className:"section-pct",style:{color:i},children:[s,"%"]})]})]})}function ni({label:e,value:t,color:n="var(--text-primary)"}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[u.jsx("span",{className:"section-stat__value",style:{color:n},children:t}),u.jsx("span",{className:"section-stat__label",children:e})]})}const Vm=new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"]),Dc=new Set(["SELECT","FROM","WHERE","JOIN","INNER","LEFT","RIGHT","OUTER","ON","GROUP","BY","HAVING","ORDER","ASC","DESC","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","VIEW","INDEX","UNIQUE","PRIMARY","KEY","FOREIGN","REFERENCES","AS","DISTINCT","COUNT","AVG","SUM","MAX","MIN","AND","OR","NOT","NULL","IS","IN","EXISTS","BETWEEN","LIKE","LIMIT","OFFSET","UNION","ALL","CASE","WHEN","THEN","ELSE","END","WITH","OVER","PARTITION","ROW_NUMBER","DENSE_RANK","PROCEDURE","EXEC","BEGIN","END","INT","VARCHAR","BOOLEAN"]),$m=new Set(["if","then","else","elif","fi","for","while","do","done","case","esac","function","return","in","export","local"]),Gm=new Set(["const","let","var","function","return","if","else","for","while","class","import","export","from","async","await","new","true","false","null","undefined","typeof","instanceof"]);function Xm(e){const t=(e??"text").toLowerCase();return t==="python"?Vm:t==="sql"?Dc:t==="bash"||t==="shell"?$m:t==="javascript"||t==="js"?Gm:new Set}function Km(e,t,n){const r=[];let s=0;const i=(n??"").toLowerCase();for(;s<e.length;){const o=e.slice(s);if(i==="python"&&o.startsWith("#")){r.push({type:"comment",text:o});break}if((i==="sql"||i==="bash")&&o.startsWith("--")){r.push({type:"comment",text:o});break}if(i==="bash"&&o.startsWith("#")){r.push({type:"comment",text:o});break}const a=o.match(/^(['"`])(?:\\.|(?!\1)[^\\])*\1/);if(a){r.push({type:"string",text:a[0]}),s+=a[0].length;continue}if(i==="python"&&o[0]==="@"){const g=o.match(/^@\w+/);if(g){r.push({type:"decorator",text:g[0]}),s+=g[0].length;continue}}const l=o.match(/^\d+(?:\.\d+)?/);if(l){r.push({type:"number",text:l[0]}),s+=l[0].length;continue}const d=o.match(/^[A-Za-z_][\w]*/);if(d){const g=d[0],h=g.toUpperCase();t.has(g)||t.has(h)||i==="sql"&&Dc.has(h)?r.push({type:"keyword",text:g}):o[g.length]==="("?r.push({type:"function",text:g}):i==="python"&&/^[A-Z]/.test(g)?r.push({type:"class",text:g}):r.push({type:"plain",text:g}),s+=g.length;continue}const y=o.match(/^[+\-*/%=<>!&|^~.:,;()[\]{}]+/);if(y){r.push({type:"operator",text:y[0]}),s+=y[0].length;continue}r.push({type:"plain",text:e[s]}),s+=1}return r}function Ym(e="",t="text"){const n=Xm(t);return e.replace(/\r\n/g,`
`).split(`
`).map(s=>Km(s,n,t))}function Zm(e="text"){return{python:"Python",javascript:"JavaScript",java:"Java",sql:"SQL",bash:"Bash",xml:"XML",json:"JSON"}[e.toLowerCase()]??"Text"}function eh({lines:e}){return u.jsx(u.Fragment,{children:e.map((t,n)=>u.jsxs("span",{className:"code-block__line",children:[t.map((r,s)=>u.jsx("span",{className:`code-token code-token--${r.type}`,children:r.text},s)),n<e.length-1?`
`:null]},n))})}function th({language:e="text",snippet:t=""}){const[n,r]=A.useState(!1),s=Ym(t,e),i=async()=>{await Lm(t)&&(r(!0),setTimeout(()=>r(!1),2e3))};return u.jsxs("div",{className:`code-block code-block--${e.toLowerCase()}`,children:[u.jsxs("div",{className:"code-block__header",children:[u.jsx("span",{className:"code-block__lang",children:Zm(e)}),u.jsxs("button",{type:"button",onClick:i,className:"code-block__copy",style:{color:n?"var(--text-primary)":void 0},children:[n?u.jsx(xf,{size:12}):u.jsx(Cf,{size:12}),n?"Copied":"Copy"]})]}),u.jsx("pre",{className:"code-block__pre",children:u.jsx("code",{children:u.jsx(eh,{lines:s})})})]})}function nh({codeBlocks:e=[]}){return e.length?u.jsx("div",{className:"code-block-list",children:e.map((t,n)=>u.jsx(th,{language:t.language,snippet:t.snippet},n))}):null}function rh(){return{color:"var(--text-secondary)",bg:"var(--bg-raised)"}}function sh({source:e}){if(!(e!=null&&e.name))return null;const{color:t,bg:n}=rh();return u.jsxs("a",{href:e.url??"#",target:"_blank",rel:"noopener noreferrer",className:"typo-badge",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 10px",borderRadius:"99px",color:t,background:n,textDecoration:"none",border:"1px solid var(--border)",fontWeight:"var(--font-medium)",transition:"opacity 0.18s ease"},onMouseEnter:r=>r.currentTarget.style.opacity="0.8",onMouseLeave:r=>r.currentTarget.style.opacity="1",children:[e.name,e.url&&u.jsx(Pf,{size:10,style:{flexShrink:0}})]})}function ih({source:e}){return e!=null&&e.name?u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"12px"},children:[u.jsx("span",{className:"typo-caption",children:"Source"}),u.jsx(sh,{source:e})]}):null}const Lc=/^(Examples?|e\.g\.|For example)\s*:?\s*/i,oh=[/`([^`]+)`/g,/('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/g,/\b(?:True|False|None)\b/g,/\b[a-zA-Z_][\w]*(?:\.[a-zA-Z_][\w]*)*\([^)]*\)/g,/\[[^\[\]]{1,120}\]/g,/\b(?:def|class|import|from|return|append|extend|len|is|==)\b/g,/\b[a-z_][\w]*\(\)/g];function ah(e=""){return Lc.test(e.trim())}function lh(e){const t=e.trim().match(Lc);if(!t)return{label:null,body:e};const n=e.indexOf(t[0]);return{label:t[0].trim(),body:e.slice(n+t[0].length)}}function uh(e){const t=[];for(const r of oh){r.lastIndex=0;let s;for(;(s=r.exec(e))!==null;)t.push({start:s.index,end:s.index+s[0].length,text:s[0]})}t.sort((r,s)=>r.start-s.start||s.end-r.end-(r.end-r.start));const n=[];for(const r of t){const s=n[n.length-1];s&&r.start<s.end||n.push(r)}return n}function ul({text:e,accentColor:t}){const n=uh(e);if(!n.length)return u.jsx(u.Fragment,{children:e});const r=[];let s=0;return n.forEach((i,o)=>{i.start>s&&r.push(u.jsx("span",{children:e.slice(s,i.start)},`t-${o}-pre`));const a=i.text,l=a.startsWith("`")?a.slice(1,-1):a;r.push(u.jsx("code",{className:"inline-code",children:l},`c-${o}`)),s=i.end}),s<e.length&&r.push(u.jsx("span",{children:e.slice(s)},"tail")),u.jsx(u.Fragment,{children:r})}function cl({text:e,query:t,accentColor:n}){if(!(t!=null&&t.trim()))return u.jsx(ul,{text:e,accentColor:n});const r=qm(e,t);return u.jsx(u.Fragment,{children:r.map((s,i)=>s.highlight?u.jsx("mark",{className:"search-highlight",style:{background:`${n}22`,color:n},children:s.text},i):u.jsx(ul,{text:s.text,accentColor:n},i))})}function ch({text:e,query:t,accentColor:n}){if(ah(e)){const{label:r,body:s}=lh(e);return u.jsxs("p",{className:"answer-block__paragraph answer-example",children:[r&&u.jsx("span",{className:"answer-example__label",children:r}),u.jsx(cl,{text:s,query:t,accentColor:n})]})}return u.jsx("p",{className:"answer-block__paragraph",children:u.jsx(cl,{text:e,query:t,accentColor:n})})}function dh(){return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px 16px",background:"var(--bg-raised)",borderRadius:"var(--radius-md)",border:"1px dashed var(--border)"},children:[u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",borderRadius:"var(--radius-md)",border:"1px solid var(--border)",color:"var(--text-muted)",flexShrink:0},children:u.jsx(If,{size:15,strokeWidth:1.5})}),u.jsxs("div",{children:[u.jsx("p",{className:"answer-block__placeholder-title",children:"Answer not yet added."}),u.jsx("p",{className:"typo-caption",style:{marginTop:"2px"},children:"This will be populated from a reputable source."})]})]})}function ph({text:e="",query:t="",accentColor:n}){const r=e.split(`
`).filter(s=>s.trim());return u.jsx("div",{className:"answer-block__content",children:r.map((s,i)=>u.jsx(ch,{text:s,query:t,accentColor:n},i))})}function fh({question:e,accentColor:t="#6366f1"}){const{answer:n,code:r=[],source:s,searchQuery:i=""}=e;return n?u.jsxs("div",{className:"answer-block",children:[u.jsx(ph,{text:n,query:i,accentColor:t}),r.length>0&&u.jsx(nh,{codeBlocks:r}),u.jsx(ih,{source:s})]}):u.jsx(dh,{})}function $o({question:e,index:t,accentColor:n}){var k;const[r,s]=A.useState(!1),{toggleReviewed:i,isReviewed:o}=ur(),{toggleBookmark:a,isBookmarked:l}=Jo(),{searchQuery:d}=st(),y=o(e.id),g=l(e.id),h=n??e.sectionColor??"#6366f1";return u.jsxs("div",{className:"glass-panel question-card",style:{background:"var(--bg-surface)",border:`1px solid ${r?`${h}55`:"var(--border)"}`,borderLeft:`3px solid ${h}`,borderRadius:"var(--radius-lg)",overflow:"hidden",transition:"all var(--transition)",opacity:y?.82:1,boxShadow:r?`0 6px 28px ${h}22`:"none"},children:[u.jsxs("div",{className:"question-card__header",onClick:()=>s(x=>!x),children:[u.jsx("span",{className:`question-card__index typo-mono${r?" question-card__index--open":""}`,style:{color:r?h:void 0},children:String(t).padStart(2,"0")}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("p",{className:"question-card__question",children:e.question}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"6px"},children:[e.priority&&u.jsx(qc,{priority:e.priority}),e.difficulty&&u.jsx(Wm,{difficulty:e.difficulty}),((k=e.tags)==null?void 0:k.length)>0&&u.jsx(Qm,{tags:e.tags}),y&&u.jsx("span",{className:"question-card__reviewed",children:"✓ Reviewed"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",flexShrink:0},onClick:x=>x.stopPropagation(),children:[u.jsx("button",{type:"button",onClick:()=>a(e.id),title:g?"Remove bookmark":"Bookmark",style:{padding:"4px",borderRadius:"var(--radius-sm)",color:g?h:"var(--text-muted)",transition:"color 0.18s"},children:g?u.jsx(kf,{size:15}):u.jsx(Tc,{size:15})}),u.jsx("button",{type:"button",onClick:()=>i(e.id),title:y?"Mark as unreviewed":"Mark as reviewed",style:{padding:"4px",borderRadius:"var(--radius-sm)",color:y?"var(--green)":"var(--text-muted)",transition:"color 0.18s"},children:y?u.jsx(_f,{size:15}):u.jsx(Ef,{size:15})}),u.jsx("button",{type:"button",onClick:()=>s(x=>!x),style:{padding:"4px",borderRadius:"var(--radius-sm)",color:"var(--text-muted)"},children:r?u.jsx(Sf,{size:15}):u.jsx(bf,{size:15})})]})]}),r&&u.jsx("div",{style:{padding:"0 16px 16px",borderTop:"1px solid var(--border)",paddingTop:"14px"},children:u.jsx(fh,{question:{...e,searchQuery:d},accentColor:h})})]})}const dl={search:{Icon:Ac,title:"No results found",subtitle:"Try a different keyword or check your filters."},bookmarks:{Icon:Tc,title:"No bookmarks yet",subtitle:"Click the bookmark icon on any question to save it here."},filtered:{Icon:Xi,title:"No questions match",subtitle:"Try adjusting the priority or difficulty filter."},default:{Icon:Xi,title:"Nothing here yet",subtitle:"Content will appear once data is populated."}};function rr({variant:e="default",query:t=""}){const{Icon:n,title:r,subtitle:s}=dl[e]??dl.default;return u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",padding:"64px 24px",textAlign:"center"},children:[u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"56px",height:"56px",borderRadius:"50%",background:"var(--bg-raised)",color:"var(--text-muted)",marginBottom:"4px"},children:u.jsx(n,{size:24})}),u.jsx("p",{className:"typo-title",children:r}),u.jsx("p",{className:"typo-body-sm",style:{maxWidth:"280px"},children:e==="search"&&t?`No matches for "${t}"`:s})]})}function pl({total:e,filtered:t}){const{filterPriority:n,filterDifficulty:r,setFilterPriority:s,setFilterDifficulty:i,resetFilters:o}=st(),a=n!=="all"||r!=="all";return u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",flexWrap:"wrap",marginBottom:"16px"},children:[u.jsxs("span",{className:"filter-bar__count",children:[a?`${t} of ${e}`:`${e}`," questions"]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsxs("select",{value:n,onChange:l=>s(l.target.value),className:"filter-bar__select",children:[u.jsx("option",{value:"all",children:"All Priorities"}),u.jsx("option",{value:"critical",children:"Critical"}),u.jsx("option",{value:"high",children:"High"}),u.jsx("option",{value:"medium",children:"Medium"}),u.jsx("option",{value:"low",children:"Low"})]}),u.jsxs("select",{value:r,onChange:l=>i(l.target.value),className:"filter-bar__select",children:[u.jsx("option",{value:"all",children:"All Difficulties"}),u.jsx("option",{value:"easy",children:"Easy"}),u.jsx("option",{value:"medium",children:"Medium"}),u.jsx("option",{value:"hard",children:"Hard"})]}),a&&u.jsx("button",{type:"button",onClick:o,className:"filter-bar__reset",children:"Reset"})]})]})}function mh(e){if(!e.some(n=>n.category))return[{category:null,questions:e}];const t=[];return e.forEach(n=>{const r=n.category??"General",s=t[t.length-1];(s==null?void 0:s.category)===r?s.questions.push(n):t.push({category:r,questions:[n]})}),t}function hh({title:e,accentColor:t="#6366f1"}){return u.jsxs("h2",{className:"category-heading",style:{color:t,borderBottomColor:`${t}33`},children:[u.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:t,flexShrink:0}}),e]})}function gh({questions:e=[],accentColor:t="#6366f1"}){const{filterPriority:n,filterDifficulty:r}=st(),s=zm(e,n,r),i=mh(s);if(e.length===0)return u.jsx(rr,{variant:"default"});if(s.length===0)return u.jsxs(u.Fragment,{children:[u.jsx(pl,{total:e.length,filtered:0}),u.jsx(rr,{variant:"filtered"})]});let o=0;return u.jsxs("div",{children:[u.jsx(pl,{total:e.length,filtered:s.length}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:i.map(a=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.category&&u.jsx(hh,{title:a.category,accentColor:t}),a.questions.map(l=>(o+=1,u.jsx($o,{question:l,index:o,accentColor:t},l.id)))]},a.category??"default"))})]})}function yh({query:e}){const{results:t,totalCount:n,hasResults:r}=Um(Me,e);return u.jsxs("div",{children:[u.jsxs("div",{style:{padding:"24px 0 20px",borderBottom:"1px solid var(--border)",marginBottom:"20px"},children:[u.jsx("h1",{className:"view-title",children:"Search Results"}),u.jsx("p",{className:"view-subtitle",children:r?`${n} result${n!==1?"s":""} for "${e}"`:`No results for "${e}"`})]}),r?u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:t.map((s,i)=>u.jsxs("div",{children:[u.jsxs("p",{className:"typo-label",style:{color:s.sectionColor??"var(--text-muted)",marginBottom:"6px",paddingLeft:"4px",display:"flex",alignItems:"center",gap:"6px",textTransform:"none",fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-wide)"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:s.sectionColor??"var(--text-muted)"}}),s.sectionTitle]}),u.jsx($o,{question:s,index:i+1,accentColor:s.sectionColor})]},s.id))}):u.jsx(rr,{variant:"search",query:e})]})}function vh(){const{getBookmarkIds:e,bookmarkCount:t,clearBookmarks:n}=Jo(),r=e(),s=Me.flatMap(i=>i.questions).filter(i=>r.includes(i.id));return u.jsxs("div",{children:[u.jsxs("div",{style:{padding:"24px 0 20px",borderBottom:"1px solid var(--border)",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{children:[u.jsx("h1",{className:"view-title",children:"Bookmarks"}),u.jsxs("p",{className:"view-subtitle",children:[t," saved question",t!==1?"s":""]})]}),t>0&&u.jsx("button",{type:"button",onClick:n,className:"filter-bar__reset",children:"Clear all"})]}),s.length===0?u.jsx(rr,{variant:"bookmarks"}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:s.map((i,o)=>u.jsx($o,{question:i,index:o+1},i.id))})]})}function wh({sectionId:e}){const t=Me.find(n=>n.id===e);return t?u.jsxs("div",{children:[u.jsx(Jm,{section:t}),u.jsx("div",{style:{marginTop:"20px"},children:u.jsx(gh,{questions:t.questions,accentColor:t.color})})]}):u.jsx(rr,{variant:"default"})}function kh(){const{activeView:e,activeSection:t,searchQuery:n}=st();return u.jsxs("main",{className:"section-view",children:[e==="search"&&u.jsx(yh,{query:n}),e==="bookmarks"&&u.jsx(vh,{}),e==="section"&&u.jsx(wh,{sectionId:t})]})}function xh(){const{navigateTo:e}=st(),{getOverallProgress:t}=ur(),{reviewed:n,total:r}=t(Me),s=r===0?0:Math.round(n/r*100),i=Me.reduce((a,l)=>a+l.questions.length,0),o=Me.reduce((a,l)=>a+l.questions.filter(d=>d.answer).length,0);return u.jsxs("div",{style:{padding:"32px 0 64px"},children:[u.jsxs("section",{style:{textAlign:"center",marginBottom:"56px"},children:[u.jsxs("div",{className:"landing-eyebrow",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"99px",background:"var(--bg-raised)",border:"1px solid var(--border)",marginBottom:"20px"},children:[u.jsx(Nf,{size:12}),i," questions · ",Me.length," sections · ",o," answered"]}),u.jsxs("h1",{className:"typo-display",style:{marginBottom:"16px"},children:["Ace your next",u.jsx("br",{}),u.jsx("span",{style:{background:"linear-gradient(135deg, #7c3aed, #ea580c, #ca8a04)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"QA interview"})]}),u.jsx("p",{className:"typo-body-lg",style:{maxWidth:"480px",margin:"0 auto 28px",textAlign:"center"},children:"Structured prep for automation testing — Python, Selenium, API, SQL, Jenkins, banking domain, and more. Review answers, track progress, bookmark tough ones."}),u.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[u.jsxs("button",{type:"button",onClick:()=>e("hr"),className:"btn-cta btn-cta--primary",children:["Start preparing",u.jsx(vf,{size:16})]}),u.jsxs("button",{type:"button",onClick:()=>e("python"),className:"btn-cta btn-cta--secondary",onMouseEnter:a=>a.currentTarget.style.borderColor="#7c3aed",onMouseLeave:a=>a.currentTarget.style.borderColor="var(--border)",children:[u.jsx(Xi,{size:16}),"Jump to Python"]})]}),n>0&&u.jsxs("p",{className:"typo-body-sm",style:{marginTop:"24px"},children:["You've reviewed"," ",u.jsx("strong",{style:{color:"var(--text-primary)"},children:n})," of"," ",r," questions (",s,"%)"]})]}),u.jsxs("section",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[u.jsx(Tf,{size:16,color:"var(--text-muted)"}),u.jsx("h2",{className:"landing-section-label",children:"All sections"})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"12px"},children:Me.map(a=>u.jsxs("button",{onClick:()=>e(a.id),className:"glass-panel",style:{textAlign:"left",padding:"16px 18px",borderRadius:"var(--radius-lg)",background:"var(--bg-surface)",border:"1px solid var(--border)",borderLeft:`4px solid ${a.color}`,cursor:"pointer",transition:"all var(--transition)"},onMouseEnter:l=>{l.currentTarget.style.borderColor=`${a.color}55`,l.currentTarget.style.boxShadow=`0 6px 24px ${a.color}22`,l.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:l=>{l.currentTarget.style.borderColor="var(--border)",l.currentTarget.style.boxShadow="none",l.currentTarget.style.transform="none"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"},children:[u.jsx("span",{className:"landing-card__num",style:{background:a.color},children:String(a.number).padStart(2,"0")}),u.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:a.color,boxShadow:`0 0 8px ${a.color}88`}})]}),u.jsx("p",{className:"landing-card__title",children:a.title}),u.jsxs("p",{className:"landing-card__meta",children:[a.questions.length," questions"]})]},a.id))})]})]})}function bh(e){const[t,n]=A.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return A.useEffect(()=>{const r=window.matchMedia(e),s=i=>n(i.matches);return n(r.matches),r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[e]),t}function Sh(){return bh("(max-width: 768px)")}function _h(){const{activeSection:e,activeView:t,sidebarOpen:n,closeSidebar:r}=st(),s=Sh(),i=t==="landing",o=Me.find(d=>d.id===e),a=t==="section"?o==null?void 0:o.color:"#6366f1",l=t==="section"?o==null?void 0:o.pastel:"transparent";return A.useEffect(()=>{s||r()},[s,r]),A.useEffect(()=>(s&&n&&!i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s,n,i]),u.jsxs("div",{className:"app-shell",style:{"--section-accent":a,"--section-pastel":i?"rgba(196, 181, 253, 0.35)":l},children:[u.jsx("div",{className:"app-shell__ambient","aria-hidden":!0}),u.jsxs("div",{className:"app-shell__content",children:[u.jsx(Rm,{sectionColor:i?"#6366f1":a,showMenu:!i}),i?u.jsx("div",{className:"main-scroll",children:u.jsx("div",{className:"page-container page-container--wide",children:u.jsx(xh,{})})}):u.jsxs("div",{className:"app-body",children:[s&&n&&u.jsx("button",{type:"button",className:"sidebar-backdrop",onClick:r,"aria-label":"Close menu"}),u.jsx(Bm,{isMobile:s,isOpen:n}),u.jsx("div",{className:"main-scroll",children:u.jsx("div",{className:"page-container",children:u.jsx(kh,{})})})]})]})]})}function Eh(){return u.jsx(ff,{children:u.jsx(mf,{children:u.jsx(_h,{})})})}ri.createRoot(document.getElementById("root")).render(u.jsx(ed.StrictMode,{children:u.jsx(Eh,{})}));
