(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Wu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yl={exports:{}},hs={},vl={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),zu=Symbol.for("react.portal"),Hu=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),Gu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),Ku=Symbol.for("react.memo"),Yu=Symbol.for("react.lazy"),ei=Symbol.iterator;function Zu(e){return e===null||typeof e!="object"?null:(e=ei&&e[ei]||e["@@iterator"],typeof e=="function"?e:null)}var wl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bl=Object.assign,kl={};function yt(e,n,t){this.props=e,this.context=n,this.refs=kl,this.updater=t||wl}yt.prototype.isReactComponent={};yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xl(){}xl.prototype=yt.prototype;function no(e,n,t){this.props=e,this.context=n,this.refs=kl,this.updater=t||wl}var to=no.prototype=new xl;to.constructor=no;bl(to,yt.prototype);to.isPureReactComponent=!0;var ni=Array.isArray,Sl=Object.prototype.hasOwnProperty,ro={current:null},Cl={key:!0,ref:!0,__self:!0,__source:!0};function El(e,n,t){var r,s={},a=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)Sl.call(n,r)&&!Cl.hasOwnProperty(r)&&(s[r]=n[r]);var i=arguments.length-2;if(i===1)s.children=t;else if(1<i){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)s[r]===void 0&&(s[r]=i[r]);return{$$typeof:ir,type:e,key:a,ref:o,props:s,_owner:ro.current}}function ed(e,n){return{$$typeof:ir,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function so(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function nd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ti=/\/+/g;function Os(e,n){return typeof e=="object"&&e!==null&&e.key!=null?nd(""+e.key):n.toString(36)}function Rr(e,n,t,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ir:case zu:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+Os(o,0):r,ni(s)?(t="",e!=null&&(t=e.replace(ti,"$&/")+"/"),Rr(s,n,t,"",function(d){return d})):s!=null&&(so(s)&&(s=ed(s,t+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ti,"$&/")+"/")+e)),n.push(s)),1;if(o=0,r=r===""?".":r+":",ni(e))for(var i=0;i<e.length;i++){a=e[i];var l=r+Os(a,i);o+=Rr(a,n,t,l,s)}else if(l=Zu(e),typeof l=="function")for(e=l.call(e),i=0;!(a=e.next()).done;)a=a.value,l=r+Os(a,i++),o+=Rr(a,n,t,l,s);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function hr(e,n,t){if(e==null)return e;var r=[],s=0;return Rr(e,r,"","",function(a){return n.call(t,a,s++)}),r}function td(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},qr={transition:null},rd={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:qr,ReactCurrentOwner:ro};function Pl(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:hr,forEach:function(e,n,t){hr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return hr(e,function(){n++}),n},toArray:function(e){return hr(e,function(n){return n})||[]},only:function(e){if(!so(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=yt;D.Fragment=Hu;D.Profiler=Vu;D.PureComponent=no;D.StrictMode=Ju;D.Suspense=Xu;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rd;D.act=Pl;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bl({},e.props),s=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=ro.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in n)Sl.call(n,l)&&!Cl.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&i!==void 0?i[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){i=Array(l);for(var d=0;d<l;d++)i[d]=arguments[d+2];r.children=i}return{$$typeof:ir,type:e.type,key:s,ref:a,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Qu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gu,_context:e},e.Consumer=e};D.createElement=El;D.createFactory=function(e){var n=El.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:$u,render:e}};D.isValidElement=so;D.lazy=function(e){return{$$typeof:Yu,_payload:{_status:-1,_result:e},_init:td}};D.memo=function(e,n){return{$$typeof:Ku,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=qr.transition;qr.transition={};try{e()}finally{qr.transition=n}};D.unstable_act=Pl;D.useCallback=function(e,n){return ye.current.useCallback(e,n)};D.useContext=function(e){return ye.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};D.useEffect=function(e,n){return ye.current.useEffect(e,n)};D.useId=function(){return ye.current.useId()};D.useImperativeHandle=function(e,n,t){return ye.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return ye.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ye.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ye.current.useMemo(e,n)};D.useReducer=function(e,n,t){return ye.current.useReducer(e,n,t)};D.useRef=function(e){return ye.current.useRef(e)};D.useState=function(e){return ye.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return ye.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return ye.current.useTransition()};D.version="18.3.1";vl.exports=D;var R=vl.exports;const sd=Wu(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=R,od=Symbol.for("react.element"),id=Symbol.for("react.fragment"),ld=Object.prototype.hasOwnProperty,cd=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ud={key:!0,ref:!0,__self:!0,__source:!0};function Al(e,n,t){var r,s={},a=null,o=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)ld.call(n,r)&&!ud.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)s[r]===void 0&&(s[r]=n[r]);return{$$typeof:od,type:e,key:a,ref:o,props:s,_owner:cd.current}}hs.Fragment=id;hs.jsx=Al;hs.jsxs=Al;yl.exports=hs;var c=yl.exports,ia={},Tl={exports:{}},Te={},jl={exports:{}},_l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,q){var O=E.length;E.push(q);e:for(;0<O;){var K=O-1>>>1,se=E[K];if(0<s(se,q))E[K]=q,E[O]=se,O=K;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var q=E[0],O=E.pop();if(O!==q){E[0]=O;e:for(var K=0,se=E.length,mr=se>>>1;K<mr;){var jn=2*(K+1)-1,qs=E[jn],_n=jn+1,fr=E[_n];if(0>s(qs,O))_n<se&&0>s(fr,qs)?(E[K]=fr,E[_n]=O,K=_n):(E[K]=qs,E[jn]=O,K=jn);else if(_n<se&&0>s(fr,O))E[K]=fr,E[_n]=O,K=_n;else break e}}return q}function s(E,q){var O=E.sortIndex-q.sortIndex;return O!==0?O:E.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var l=[],d=[],y=1,g=null,h=3,b=!1,k=!1,x=!1,U=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var q=t(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=E)r(d),q.sortIndex=q.expirationTime,n(l,q);else break;q=t(d)}}function v(E){if(x=!1,f(E),!k)if(t(l)!==null)k=!0,Is(C);else{var q=t(d);q!==null&&Rs(v,q.startTime-E)}}function C(E,q){k=!1,x&&(x=!1,m(I),I=-1),b=!0;var O=h;try{for(f(q),g=t(l);g!==null&&(!(g.expirationTime>q)||E&&!Ne());){var K=g.callback;if(typeof K=="function"){g.callback=null,h=g.priorityLevel;var se=K(g.expirationTime<=q);q=e.unstable_now(),typeof se=="function"?g.callback=se:g===t(l)&&r(l),f(q)}else r(l);g=t(l)}if(g!==null)var mr=!0;else{var jn=t(d);jn!==null&&Rs(v,jn.startTime-q),mr=!1}return mr}finally{g=null,h=O,b=!1}}var A=!1,T=null,I=-1,X=5,N=-1;function Ne(){return!(e.unstable_now()-N<X)}function bt(){if(T!==null){var E=e.unstable_now();N=E;var q=!0;try{q=T(!0,E)}finally{q?kt():(A=!1,T=null)}}else A=!1}var kt;if(typeof p=="function")kt=function(){p(bt)};else if(typeof MessageChannel<"u"){var Zo=new MessageChannel,Uu=Zo.port2;Zo.port1.onmessage=bt,kt=function(){Uu.postMessage(null)}}else kt=function(){U(bt,0)};function Is(E){T=E,A||(A=!0,kt())}function Rs(E,q){I=U(function(){E(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||b||(k=!0,Is(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var O=h;h=q;try{return E()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,q){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=h;h=E;try{return q()}finally{h=O}},e.unstable_scheduleCallback=function(E,q,O){var K=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?K+O:K):O=K,E){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=O+se,E={id:y++,callback:q,priorityLevel:E,startTime:O,expirationTime:se,sortIndex:-1},O>K?(E.sortIndex=O,n(d,E),t(l)===null&&E===t(d)&&(x?(m(I),I=-1):x=!0,Rs(v,O-K))):(E.sortIndex=se,n(l,E),k||b||(k=!0,Is(C))),E},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(E){var q=h;return function(){var O=h;h=q;try{return E.apply(this,arguments)}finally{h=O}}}})(_l);jl.exports=_l;var dd=jl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=R,Ae=dd;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Il=new Set,zt={};function zn(e,n){ut(e,n),ut(e+"Capture",n)}function ut(e,n){for(zt[e]=n,e=0;e<n.length;e++)Il.add(n[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,md=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ri={},si={};function fd(e){return la.call(si,e)?!0:la.call(ri,e)?!1:md.test(e)?si[e]=!0:(ri[e]=!0,!1)}function hd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gd(e,n,t,r){if(n===null||typeof n>"u"||hd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,s,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ao=/[\-:]([a-z])/g;function oo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ao,oo);ce[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ao,oo);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ao,oo);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function io(e,n,t,r){var s=ce.hasOwnProperty(n)?ce[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(gd(n,t,s,r)&&(t=null),r||s===null?fd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,r=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var on=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),lo=Symbol.for("react.strict_mode"),ca=Symbol.for("react.profiler"),Rl=Symbol.for("react.provider"),ql=Symbol.for("react.context"),co=Symbol.for("react.forward_ref"),ua=Symbol.for("react.suspense"),da=Symbol.for("react.suspense_list"),uo=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Ol=Symbol.for("react.offscreen"),ai=Symbol.iterator;function xt(e){return e===null||typeof e!="object"?null:(e=ai&&e[ai]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ds;function _t(e){if(Ds===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ds=n&&n[1]||""}return`
`+Ds+e}var Ns=!1;function Ls(e,n){if(!e||Ns)return"";Ns=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,i=a.length-1;1<=o&&0<=i&&s[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(s[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||s[o]!==a[i]){var l=`
`+s[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=i);break}}}finally{Ns=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_t(e):""}function yd(e){switch(e.tag){case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 2:case 15:return e=Ls(e.type,!1),e;case 11:return e=Ls(e.type.render,!1),e;case 1:return e=Ls(e.type,!0),e;default:return""}}function pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Vn:return"Portal";case ca:return"Profiler";case lo:return"StrictMode";case ua:return"Suspense";case da:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ql:return(e.displayName||"Context")+".Consumer";case Rl:return(e._context.displayName||"Context")+".Provider";case co:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uo:return n=e.displayName||null,n!==null?n:pa(e.type)||"Memo";case un:n=e._payload,e=e._init;try{return pa(e(n))}catch{}}return null}function vd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(n);case 8:return n===lo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wd(e){var n=Dl(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yr(e){e._valueTracker||(e._valueTracker=wd(e))}function Nl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Dl(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ma(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function oi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ll(e,n){n=n.checked,n!=null&&io(e,"checked",n,!1)}function fa(e,n){Ll(e,n);var t=Cn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ha(e,n.type,t):n.hasOwnProperty("defaultValue")&&ha(e,n.type,Cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ii(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ha(e,n,t){(n!=="number"||Hr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var It=Array.isArray;function st(e,n,t,r){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Cn(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function ga(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function li(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(It(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Cn(t)}}function Ml(e,n){var t=Cn(n.value),r=Cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ci(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Bl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Bl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Fl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ht(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(Ot).forEach(function(e){bd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ot[n]=Ot[e]})});function Ul(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ot.hasOwnProperty(e)&&Ot[e]?(""+n).trim():n+"px"}function Wl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,s=Ul(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,s):e[t]=s}}var kd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(e,n){if(n){if(kd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function wa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,at=null,ot=null;function ui(e){if(e=ur(e)){if(typeof ka!="function")throw Error(w(280));var n=e.stateNode;n&&(n=bs(n),ka(e.stateNode,e.type,n))}}function zl(e){at?ot?ot.push(e):ot=[e]:at=e}function Hl(){if(at){var e=at,n=ot;if(ot=at=null,ui(e),n)for(e=0;e<n.length;e++)ui(n[e])}}function Jl(e,n){return e(n)}function Vl(){}var Ms=!1;function Gl(e,n,t){if(Ms)return e(n,t);Ms=!0;try{return Jl(e,n,t)}finally{Ms=!1,(at!==null||ot!==null)&&(Vl(),Hl())}}function Jt(e,n){var t=e.stateNode;if(t===null)return null;var r=bs(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var xa=!1;if(tn)try{var St={};Object.defineProperty(St,"passive",{get:function(){xa=!0}}),window.addEventListener("test",St,St),window.removeEventListener("test",St,St)}catch{xa=!1}function xd(e,n,t,r,s,a,o,i,l){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(y){this.onError(y)}}var Dt=!1,Jr=null,Vr=!1,Sa=null,Sd={onError:function(e){Dt=!0,Jr=e}};function Cd(e,n,t,r,s,a,o,i,l){Dt=!1,Jr=null,xd.apply(Sd,arguments)}function Ed(e,n,t,r,s,a,o,i,l){if(Cd.apply(this,arguments),Dt){if(Dt){var d=Jr;Dt=!1,Jr=null}else throw Error(w(198));Vr||(Vr=!0,Sa=d)}}function Hn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ql(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function di(e){if(Hn(e)!==e)throw Error(w(188))}function Pd(e){var n=e.alternate;if(!n){if(n=Hn(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,r=n;;){var s=t.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){t=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===t)return di(s),e;if(a===r)return di(s),n;a=a.sibling}throw Error(w(188))}if(t.return!==r.return)t=s,r=a;else{for(var o=!1,i=s.child;i;){if(i===t){o=!0,t=s,r=a;break}if(i===r){o=!0,r=s,t=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===t){o=!0,t=a,r=s;break}if(i===r){o=!0,r=a,t=s;break}i=i.sibling}if(!o)throw Error(w(189))}}if(t.alternate!==r)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function $l(e){return e=Pd(e),e!==null?Xl(e):null}function Xl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Xl(e);if(n!==null)return n;e=e.sibling}return null}var Kl=Ae.unstable_scheduleCallback,pi=Ae.unstable_cancelCallback,Ad=Ae.unstable_shouldYield,Td=Ae.unstable_requestPaint,Z=Ae.unstable_now,jd=Ae.unstable_getCurrentPriorityLevel,mo=Ae.unstable_ImmediatePriority,Yl=Ae.unstable_UserBlockingPriority,Gr=Ae.unstable_NormalPriority,_d=Ae.unstable_LowPriority,Zl=Ae.unstable_IdlePriority,gs=null,$e=null;function Id(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(gs,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Od,Rd=Math.log,qd=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(Rd(e)/qd|0)|0}var wr=64,br=4194304;function Rt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var i=o&~s;i!==0?r=Rt(i):(a&=o,a!==0&&(r=Rt(a)))}else o=t&~s,o!==0?r=Rt(o):a!==0&&(r=Rt(a));if(r===0)return 0;if(n!==0&&n!==r&&!(n&s)&&(s=r&-r,a=n&-n,s>=a||s===16&&(a&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-We(n),s=1<<t,r|=e[t],n&=~s;return r}function Dd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-We(a),i=1<<o,l=s[o];l===-1?(!(i&t)||i&r)&&(s[o]=Dd(i,n)):l<=n&&(e.expiredLanes|=i),a&=~i}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ec(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Bs(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-We(n),e[n]=t}function Ld(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-We(t),a=1<<s;n[s]=0,r[s]=-1,e[s]=-1,t&=~a}}function fo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-We(t),s=1<<r;s&n|e[r]&n&&(e[r]|=n),t&=~s}}var B=0;function nc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tc,ho,rc,sc,ac,Ea=!1,kr=[],gn=null,yn=null,vn=null,Vt=new Map,Gt=new Map,pn=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mi(e,n){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Vt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gt.delete(n.pointerId)}}function Ct(e,n,t,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},n!==null&&(n=ur(n),n!==null&&ho(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Bd(e,n,t,r,s){switch(n){case"focusin":return gn=Ct(gn,e,n,t,r,s),!0;case"dragenter":return yn=Ct(yn,e,n,t,r,s),!0;case"mouseover":return vn=Ct(vn,e,n,t,r,s),!0;case"pointerover":var a=s.pointerId;return Vt.set(a,Ct(Vt.get(a)||null,e,n,t,r,s)),!0;case"gotpointercapture":return a=s.pointerId,Gt.set(a,Ct(Gt.get(a)||null,e,n,t,r,s)),!0}return!1}function oc(e){var n=qn(e.target);if(n!==null){var t=Hn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ql(t),n!==null){e.blockedOn=n,ac(e.priority,function(){rc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Pa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ba=r,t.target.dispatchEvent(r),ba=null}else return n=ur(t),n!==null&&ho(n),e.blockedOn=t,!1;n.shift()}return!0}function fi(e,n,t){Or(e)&&t.delete(n)}function Fd(){Ea=!1,gn!==null&&Or(gn)&&(gn=null),yn!==null&&Or(yn)&&(yn=null),vn!==null&&Or(vn)&&(vn=null),Vt.forEach(fi),Gt.forEach(fi)}function Et(e,n){e.blockedOn===n&&(e.blockedOn=null,Ea||(Ea=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Fd)))}function Qt(e){function n(s){return Et(s,e)}if(0<kr.length){Et(kr[0],e);for(var t=1;t<kr.length;t++){var r=kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&Et(gn,e),yn!==null&&Et(yn,e),vn!==null&&Et(vn,e),Vt.forEach(n),Gt.forEach(n),t=0;t<pn.length;t++)r=pn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(t=pn[0],t.blockedOn===null);)oc(t),t.blockedOn===null&&pn.shift()}var it=on.ReactCurrentBatchConfig,$r=!0;function Ud(e,n,t,r){var s=B,a=it.transition;it.transition=null;try{B=1,go(e,n,t,r)}finally{B=s,it.transition=a}}function Wd(e,n,t,r){var s=B,a=it.transition;it.transition=null;try{B=4,go(e,n,t,r)}finally{B=s,it.transition=a}}function go(e,n,t,r){if($r){var s=Pa(e,n,t,r);if(s===null)$s(e,n,r,Xr,t),mi(e,r);else if(Bd(s,e,n,t,r))r.stopPropagation();else if(mi(e,r),n&4&&-1<Md.indexOf(e)){for(;s!==null;){var a=ur(s);if(a!==null&&tc(a),a=Pa(e,n,t,r),a===null&&$s(e,n,r,Xr,t),a===s)break;s=a}s!==null&&r.stopPropagation()}else $s(e,n,r,null,t)}}var Xr=null;function Pa(e,n,t,r){if(Xr=null,e=po(r),e=qn(e),e!==null)if(n=Hn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ql(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Xr=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jd()){case mo:return 1;case Yl:return 4;case Gr:case _d:return 16;case Zl:return 536870912;default:return 16}default:return 16}}var fn=null,yo=null,Dr=null;function lc(){if(Dr)return Dr;var e,n=yo,t=n.length,r,s="value"in fn?fn.value:fn.textContent,a=s.length;for(e=0;e<t&&n[e]===s[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===s[a-r];r++);return Dr=s.slice(e,1<r?1-r:void 0)}function Nr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function hi(){return!1}function je(e){function n(t,r,s,a,o){this._reactName=t,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?xr:hi,this.isPropagationStopped=hi,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),n}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vo=je(vt),cr=Q({},vt,{view:0,detail:0}),zd=je(cr),Fs,Us,Pt,ys=Q({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pt&&(Pt&&e.type==="mousemove"?(Fs=e.screenX-Pt.screenX,Us=e.screenY-Pt.screenY):Us=Fs=0,Pt=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),gi=je(ys),Hd=Q({},ys,{dataTransfer:0}),Jd=je(Hd),Vd=Q({},cr,{relatedTarget:0}),Ws=je(Vd),Gd=Q({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),Qd=je(Gd),$d=Q({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xd=je($d),Kd=Q({},vt,{data:0}),yi=je(Kd),Yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ep[e])?!!n[e]:!1}function wo(){return np}var tp=Q({},cr,{key:function(e){if(e.key){var n=Yd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rp=je(tp),sp=Q({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vi=je(sp),ap=Q({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),op=je(ap),ip=Q({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),lp=je(ip),cp=Q({},ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),up=je(cp),dp=[9,13,27,32],bo=tn&&"CompositionEvent"in window,Nt=null;tn&&"documentMode"in document&&(Nt=document.documentMode);var pp=tn&&"TextEvent"in window&&!Nt,cc=tn&&(!bo||Nt&&8<Nt&&11>=Nt),wi=" ",bi=!1;function uc(e,n){switch(e){case"keyup":return dp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function mp(e,n){switch(e){case"compositionend":return dc(n);case"keypress":return n.which!==32?null:(bi=!0,wi);case"textInput":return e=n.data,e===wi&&bi?null:e;default:return null}}function fp(e,n){if(Qn)return e==="compositionend"||!bo&&uc(e,n)?(e=lc(),Dr=yo=fn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cc&&n.locale!=="ko"?null:n.data;default:return null}}var hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ki(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hp[e.type]:n==="textarea"}function pc(e,n,t,r){zl(r),n=Kr(n,"onChange"),0<n.length&&(t=new vo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Lt=null,$t=null;function gp(e){Sc(e,0)}function vs(e){var n=Kn(e);if(Nl(n))return e}function yp(e,n){if(e==="change")return n}var mc=!1;if(tn){var zs;if(tn){var Hs="oninput"in document;if(!Hs){var xi=document.createElement("div");xi.setAttribute("oninput","return;"),Hs=typeof xi.oninput=="function"}zs=Hs}else zs=!1;mc=zs&&(!document.documentMode||9<document.documentMode)}function Si(){Lt&&(Lt.detachEvent("onpropertychange",fc),$t=Lt=null)}function fc(e){if(e.propertyName==="value"&&vs($t)){var n=[];pc(n,$t,e,po(e)),Gl(gp,n)}}function vp(e,n,t){e==="focusin"?(Si(),Lt=n,$t=t,Lt.attachEvent("onpropertychange",fc)):e==="focusout"&&Si()}function wp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vs($t)}function bp(e,n){if(e==="click")return vs(n)}function kp(e,n){if(e==="input"||e==="change")return vs(n)}function xp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var He=typeof Object.is=="function"?Object.is:xp;function Xt(e,n){if(He(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var s=t[r];if(!la.call(n,s)||!He(e[s],n[s]))return!1}return!0}function Ci(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ei(e,n){var t=Ci(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ci(t)}}function hc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gc(){for(var e=window,n=Hr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Hr(e.document)}return n}function ko(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Sp(e){var n=gc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&hc(t.ownerDocument.documentElement,t)){if(r!==null&&ko(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=Ei(t,a);var o=Ei(t,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cp=tn&&"documentMode"in document&&11>=document.documentMode,$n=null,Aa=null,Mt=null,Ta=!1;function Pi(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ta||$n==null||$n!==Hr(r)||(r=$n,"selectionStart"in r&&ko(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mt&&Xt(Mt,r)||(Mt=r,r=Kr(Aa,"onSelect"),0<r.length&&(n=new vo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=$n)))}function Sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Js={},yc={};tn&&(yc=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function ws(e){if(Js[e])return Js[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in yc)return Js[e]=n[t];return e}var vc=ws("animationend"),wc=ws("animationiteration"),bc=ws("animationstart"),kc=ws("transitionend"),xc=new Map,Ai="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,n){xc.set(e,n),zn(n,[e])}for(var Vs=0;Vs<Ai.length;Vs++){var Gs=Ai[Vs],Ep=Gs.toLowerCase(),Pp=Gs[0].toUpperCase()+Gs.slice(1);Pn(Ep,"on"+Pp)}Pn(vc,"onAnimationEnd");Pn(wc,"onAnimationIteration");Pn(bc,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(kc,"onTransitionEnd");ut("onMouseEnter",["mouseout","mouseover"]);ut("onMouseLeave",["mouseout","mouseover"]);ut("onPointerEnter",["pointerout","pointerover"]);ut("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));function Ti(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Ed(r,n,void 0,e),e.currentTarget=null}function Sc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],s=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var o=r.length-1;0<=o;o--){var i=r[o],l=i.instance,d=i.currentTarget;if(i=i.listener,l!==a&&s.isPropagationStopped())break e;Ti(s,i,d),a=l}else for(o=0;o<r.length;o++){if(i=r[o],l=i.instance,d=i.currentTarget,i=i.listener,l!==a&&s.isPropagationStopped())break e;Ti(s,i,d),a=l}}}if(Vr)throw e=Sa,Vr=!1,Sa=null,e}function z(e,n){var t=n[qa];t===void 0&&(t=n[qa]=new Set);var r=e+"__bubble";t.has(r)||(Cc(n,e,2,!1),t.add(r))}function Qs(e,n,t){var r=0;n&&(r|=4),Cc(t,e,r,n)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function Kt(e){if(!e[Cr]){e[Cr]=!0,Il.forEach(function(t){t!=="selectionchange"&&(Ap.has(t)||Qs(t,!1,e),Qs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cr]||(n[Cr]=!0,Qs("selectionchange",!1,n))}}function Cc(e,n,t,r){switch(ic(n)){case 1:var s=Ud;break;case 4:s=Wd;break;default:s=go}t=s.bind(null,n,t,e),s=void 0,!xa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function $s(e,n,t,r,s){var a=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;i!==null;){if(o=qn(i),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}i=i.parentNode}}r=r.return}Gl(function(){var d=a,y=po(t),g=[];e:{var h=xc.get(e);if(h!==void 0){var b=vo,k=e;switch(e){case"keypress":if(Nr(t)===0)break e;case"keydown":case"keyup":b=rp;break;case"focusin":k="focus",b=Ws;break;case"focusout":k="blur",b=Ws;break;case"beforeblur":case"afterblur":b=Ws;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=gi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=op;break;case vc:case wc:case bc:b=Qd;break;case kc:b=lp;break;case"scroll":b=zd;break;case"wheel":b=up;break;case"copy":case"cut":case"paste":b=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=vi}var x=(n&4)!==0,U=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var p=d,f;p!==null;){f=p;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,m!==null&&(v=Jt(p,m),v!=null&&x.push(Yt(p,v,f)))),U)break;p=p.return}0<x.length&&(h=new b(h,k,null,t,y),g.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&t!==ba&&(k=t.relatedTarget||t.fromElement)&&(qn(k)||k[rn]))break e;if((b||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,b?(k=t.relatedTarget||t.toElement,b=d,k=k?qn(k):null,k!==null&&(U=Hn(k),k!==U||k.tag!==5&&k.tag!==6)&&(k=null)):(b=null,k=d),b!==k)){if(x=gi,v="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=vi,v="onPointerLeave",m="onPointerEnter",p="pointer"),U=b==null?h:Kn(b),f=k==null?h:Kn(k),h=new x(v,p+"leave",b,t,y),h.target=U,h.relatedTarget=f,v=null,qn(y)===d&&(x=new x(m,p+"enter",k,t,y),x.target=f,x.relatedTarget=U,v=x),U=v,b&&k)n:{for(x=b,m=k,p=0,f=x;f;f=Jn(f))p++;for(f=0,v=m;v;v=Jn(v))f++;for(;0<p-f;)x=Jn(x),p--;for(;0<f-p;)m=Jn(m),f--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break n;x=Jn(x),m=Jn(m)}x=null}else x=null;b!==null&&ji(g,h,b,x,!1),k!==null&&U!==null&&ji(g,U,k,x,!0)}}e:{if(h=d?Kn(d):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var C=yp;else if(ki(h))if(mc)C=kp;else{C=wp;var A=vp}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=bp);if(C&&(C=C(e,d))){pc(g,C,t,y);break e}A&&A(e,h,d),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&ha(h,"number",h.value)}switch(A=d?Kn(d):window,e){case"focusin":(ki(A)||A.contentEditable==="true")&&($n=A,Aa=d,Mt=null);break;case"focusout":Mt=Aa=$n=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,Pi(g,t,y);break;case"selectionchange":if(Cp)break;case"keydown":case"keyup":Pi(g,t,y)}var T;if(bo)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Qn?uc(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(cc&&t.locale!=="ko"&&(Qn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Qn&&(T=lc()):(fn=y,yo="value"in fn?fn.value:fn.textContent,Qn=!0)),A=Kr(d,I),0<A.length&&(I=new yi(I,e,null,t,y),g.push({event:I,listeners:A}),T?I.data=T:(T=dc(t),T!==null&&(I.data=T)))),(T=pp?mp(e,t):fp(e,t))&&(d=Kr(d,"onBeforeInput"),0<d.length&&(y=new yi("onBeforeInput","beforeinput",null,t,y),g.push({event:y,listeners:d}),y.data=T))}Sc(g,n)})}function Yt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Kr(e,n){for(var t=n+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Jt(e,t),a!=null&&r.unshift(Yt(e,a,s)),a=Jt(e,n),a!=null&&r.push(Yt(e,a,s))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ji(e,n,t,r,s){for(var a=n._reactName,o=[];t!==null&&t!==r;){var i=t,l=i.alternate,d=i.stateNode;if(l!==null&&l===r)break;i.tag===5&&d!==null&&(i=d,s?(l=Jt(t,a),l!=null&&o.unshift(Yt(t,l,i))):s||(l=Jt(t,a),l!=null&&o.push(Yt(t,l,i)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Tp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function _i(e){return(typeof e=="string"?e:""+e).replace(Tp,`
`).replace(jp,"")}function Er(e,n,t){if(n=_i(n),_i(e)!==n&&t)throw Error(w(425))}function Yr(){}var ja=null,_a=null;function Ia(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ra=typeof setTimeout=="function"?setTimeout:void 0,_p=typeof clearTimeout=="function"?clearTimeout:void 0,Ii=typeof Promise=="function"?Promise:void 0,Ip=typeof queueMicrotask=="function"?queueMicrotask:typeof Ii<"u"?function(e){return Ii.resolve(null).then(e).catch(Rp)}:Ra;function Rp(e){setTimeout(function(){throw e})}function Xs(e,n){var t=n,r=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(r===0){e.removeChild(s),Qt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=s}while(t);Qt(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ri(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+wt,Zt="__reactProps$"+wt,rn="__reactContainer$"+wt,qa="__reactEvents$"+wt,qp="__reactListeners$"+wt,Op="__reactHandles$"+wt;function qn(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[rn]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ri(e);e!==null;){if(t=e[Qe])return t;e=Ri(e)}return n}e=t,t=e.parentNode}return null}function ur(e){return e=e[Qe]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function bs(e){return e[Zt]||null}var Oa=[],Yn=-1;function An(e){return{current:e}}function H(e){0>Yn||(e.current=Oa[Yn],Oa[Yn]=null,Yn--)}function W(e,n){Yn++,Oa[Yn]=e.current,e.current=n}var En={},fe=An(En),ke=An(!1),Mn=En;function dt(e,n){var t=e.type.contextTypes;if(!t)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in t)s[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function xe(e){return e=e.childContextTypes,e!=null}function Zr(){H(ke),H(fe)}function qi(e,n,t){if(fe.current!==En)throw Error(w(168));W(fe,n),W(ke,t)}function Ec(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(w(108,vd(e)||"Unknown",s));return Q({},t,r)}function es(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Mn=fe.current,W(fe,e),W(ke,ke.current),!0}function Oi(e,n,t){var r=e.stateNode;if(!r)throw Error(w(169));t?(e=Ec(e,n,Mn),r.__reactInternalMemoizedMergedChildContext=e,H(ke),H(fe),W(fe,e)):H(ke),W(ke,t)}var Ye=null,ks=!1,Ks=!1;function Pc(e){Ye===null?Ye=[e]:Ye.push(e)}function Dp(e){ks=!0,Pc(e)}function Tn(){if(!Ks&&Ye!==null){Ks=!0;var e=0,n=B;try{var t=Ye;for(B=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ye=null,ks=!1}catch(s){throw Ye!==null&&(Ye=Ye.slice(e+1)),Kl(mo,Tn),s}finally{B=n,Ks=!1}}return null}var Zn=[],et=0,ns=null,ts=0,_e=[],Ie=0,Bn=null,Ze=1,en="";function In(e,n){Zn[et++]=ts,Zn[et++]=ns,ns=e,ts=n}function Ac(e,n,t){_e[Ie++]=Ze,_e[Ie++]=en,_e[Ie++]=Bn,Bn=e;var r=Ze;e=en;var s=32-We(r)-1;r&=~(1<<s),t+=1;var a=32-We(n)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ze=1<<32-We(n)+s|t<<s|r,en=a+e}else Ze=1<<a|t<<s|r,en=e}function xo(e){e.return!==null&&(In(e,1),Ac(e,1,0))}function So(e){for(;e===ns;)ns=Zn[--et],Zn[et]=null,ts=Zn[--et],Zn[et]=null;for(;e===Bn;)Bn=_e[--Ie],_e[Ie]=null,en=_e[--Ie],_e[Ie]=null,Ze=_e[--Ie],_e[Ie]=null}var Pe=null,Ee=null,J=!1,Fe=null;function Tc(e,n){var t=Re(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Di(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Pe=e,Ee=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Pe=e,Ee=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Bn!==null?{id:Ze,overflow:en}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Re(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Pe=e,Ee=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(J){var n=Ee;if(n){var t=n;if(!Di(e,n)){if(Da(e))throw Error(w(418));n=wn(t.nextSibling);var r=Pe;n&&Di(e,n)?Tc(r,t):(e.flags=e.flags&-4097|2,J=!1,Pe=e)}}else{if(Da(e))throw Error(w(418));e.flags=e.flags&-4097|2,J=!1,Pe=e}}}function Ni(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Pr(e){if(e!==Pe)return!1;if(!J)return Ni(e),J=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ia(e.type,e.memoizedProps)),n&&(n=Ee)){if(Da(e))throw jc(),Error(w(418));for(;n;)Tc(e,n),n=wn(n.nextSibling)}if(Ni(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ee=wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ee=null}}else Ee=Pe?wn(e.stateNode.nextSibling):null;return!0}function jc(){for(var e=Ee;e;)e=wn(e.nextSibling)}function pt(){Ee=Pe=null,J=!1}function Co(e){Fe===null?Fe=[e]:Fe.push(e)}var Np=on.ReactCurrentBatchConfig;function At(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var r=t.stateNode}if(!r)throw Error(w(147,e));var s=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var i=s.refs;o===null?delete i[a]:i[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function Ar(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Li(e){var n=e._init;return n(e._payload)}function _c(e){function n(m,p){if(e){var f=m.deletions;f===null?(m.deletions=[p],m.flags|=16):f.push(p)}}function t(m,p){if(!e)return null;for(;p!==null;)n(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=Sn(m,p),m.index=0,m.sibling=null,m}function a(m,p,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<p?(m.flags|=2,p):f):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function i(m,p,f,v){return p===null||p.tag!==6?(p=sa(f,m.mode,v),p.return=m,p):(p=s(p,f),p.return=m,p)}function l(m,p,f,v){var C=f.type;return C===Gn?y(m,p,f.props.children,v,f.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&Li(C)===p.type)?(v=s(p,f.props),v.ref=At(m,p,f),v.return=m,v):(v=zr(f.type,f.key,f.props,null,m.mode,v),v.ref=At(m,p,f),v.return=m,v)}function d(m,p,f,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=aa(f,m.mode,v),p.return=m,p):(p=s(p,f.children||[]),p.return=m,p)}function y(m,p,f,v,C){return p===null||p.tag!==7?(p=Ln(f,m.mode,v,C),p.return=m,p):(p=s(p,f),p.return=m,p)}function g(m,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=sa(""+p,m.mode,f),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:return f=zr(p.type,p.key,p.props,null,m.mode,f),f.ref=At(m,null,p),f.return=m,f;case Vn:return p=aa(p,m.mode,f),p.return=m,p;case un:var v=p._init;return g(m,v(p._payload),f)}if(It(p)||xt(p))return p=Ln(p,m.mode,f,null),p.return=m,p;Ar(m,p)}return null}function h(m,p,f,v){var C=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:i(m,p,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:return f.key===C?l(m,p,f,v):null;case Vn:return f.key===C?d(m,p,f,v):null;case un:return C=f._init,h(m,p,C(f._payload),v)}if(It(f)||xt(f))return C!==null?null:y(m,p,f,v,null);Ar(m,f)}return null}function b(m,p,f,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(f)||null,i(p,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gr:return m=m.get(v.key===null?f:v.key)||null,l(p,m,v,C);case Vn:return m=m.get(v.key===null?f:v.key)||null,d(p,m,v,C);case un:var A=v._init;return b(m,p,f,A(v._payload),C)}if(It(v)||xt(v))return m=m.get(f)||null,y(p,m,v,C,null);Ar(p,v)}return null}function k(m,p,f,v){for(var C=null,A=null,T=p,I=p=0,X=null;T!==null&&I<f.length;I++){T.index>I?(X=T,T=null):X=T.sibling;var N=h(m,T,f[I],v);if(N===null){T===null&&(T=X);break}e&&T&&N.alternate===null&&n(m,T),p=a(N,p,I),A===null?C=N:A.sibling=N,A=N,T=X}if(I===f.length)return t(m,T),J&&In(m,I),C;if(T===null){for(;I<f.length;I++)T=g(m,f[I],v),T!==null&&(p=a(T,p,I),A===null?C=T:A.sibling=T,A=T);return J&&In(m,I),C}for(T=r(m,T);I<f.length;I++)X=b(T,m,I,f[I],v),X!==null&&(e&&X.alternate!==null&&T.delete(X.key===null?I:X.key),p=a(X,p,I),A===null?C=X:A.sibling=X,A=X);return e&&T.forEach(function(Ne){return n(m,Ne)}),J&&In(m,I),C}function x(m,p,f,v){var C=xt(f);if(typeof C!="function")throw Error(w(150));if(f=C.call(f),f==null)throw Error(w(151));for(var A=C=null,T=p,I=p=0,X=null,N=f.next();T!==null&&!N.done;I++,N=f.next()){T.index>I?(X=T,T=null):X=T.sibling;var Ne=h(m,T,N.value,v);if(Ne===null){T===null&&(T=X);break}e&&T&&Ne.alternate===null&&n(m,T),p=a(Ne,p,I),A===null?C=Ne:A.sibling=Ne,A=Ne,T=X}if(N.done)return t(m,T),J&&In(m,I),C;if(T===null){for(;!N.done;I++,N=f.next())N=g(m,N.value,v),N!==null&&(p=a(N,p,I),A===null?C=N:A.sibling=N,A=N);return J&&In(m,I),C}for(T=r(m,T);!N.done;I++,N=f.next())N=b(T,m,I,N.value,v),N!==null&&(e&&N.alternate!==null&&T.delete(N.key===null?I:N.key),p=a(N,p,I),A===null?C=N:A.sibling=N,A=N);return e&&T.forEach(function(bt){return n(m,bt)}),J&&In(m,I),C}function U(m,p,f,v){if(typeof f=="object"&&f!==null&&f.type===Gn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:e:{for(var C=f.key,A=p;A!==null;){if(A.key===C){if(C=f.type,C===Gn){if(A.tag===7){t(m,A.sibling),p=s(A,f.props.children),p.return=m,m=p;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&Li(C)===A.type){t(m,A.sibling),p=s(A,f.props),p.ref=At(m,A,f),p.return=m,m=p;break e}t(m,A);break}else n(m,A);A=A.sibling}f.type===Gn?(p=Ln(f.props.children,m.mode,v,f.key),p.return=m,m=p):(v=zr(f.type,f.key,f.props,null,m.mode,v),v.ref=At(m,p,f),v.return=m,m=v)}return o(m);case Vn:e:{for(A=f.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){t(m,p.sibling),p=s(p,f.children||[]),p.return=m,m=p;break e}else{t(m,p);break}else n(m,p);p=p.sibling}p=aa(f,m.mode,v),p.return=m,m=p}return o(m);case un:return A=f._init,U(m,p,A(f._payload),v)}if(It(f))return k(m,p,f,v);if(xt(f))return x(m,p,f,v);Ar(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(t(m,p.sibling),p=s(p,f),p.return=m,m=p):(t(m,p),p=sa(f,m.mode,v),p.return=m,m=p),o(m)):t(m,p)}return U}var mt=_c(!0),Ic=_c(!1),rs=An(null),ss=null,nt=null,Eo=null;function Po(){Eo=nt=ss=null}function Ao(e){var n=rs.current;H(rs),e._currentValue=n}function La(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function lt(e,n){ss=e,Eo=nt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(be=!0),e.firstContext=null)}function Oe(e){var n=e._currentValue;if(Eo!==e)if(e={context:e,memoizedValue:n,next:null},nt===null){if(ss===null)throw Error(w(308));nt=e,ss.dependencies={lanes:0,firstContext:e}}else nt=nt.next=e;return n}var On=null;function To(e){On===null?On=[e]:On.push(e)}function Rc(e,n,t,r){var s=n.interleaved;return s===null?(t.next=t,To(n)):(t.next=s.next,s.next=t),n.interleaved=t,sn(e,r)}function sn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dn=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function bn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,sn(e,t)}return s=r.interleaved,s===null?(n.next=n,To(r)):(n.next=s.next,s.next=n),r.interleaved=n,sn(e,t)}function Lr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,fo(e,t)}}function Mi(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var s=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?s=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?s=a=n:a=a.next=n}else s=a=n;t={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function as(e,n,t,r){var s=e.updateQueue;dn=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var l=i,d=l.next;l.next=null,o===null?a=d:o.next=d,o=l;var y=e.alternate;y!==null&&(y=y.updateQueue,i=y.lastBaseUpdate,i!==o&&(i===null?y.firstBaseUpdate=d:i.next=d,y.lastBaseUpdate=l))}if(a!==null){var g=s.baseState;o=0,y=d=l=null,i=a;do{var h=i.lane,b=i.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var k=e,x=i;switch(h=n,b=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){g=k.call(b,g,h);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(b,g,h):k,h==null)break e;g=Q({},g,h);break e;case 2:dn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[i]:h.push(i))}else b={eventTime:b,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},y===null?(d=y=b,l=g):y=y.next=b,o|=h;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;h=i,i=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(y===null&&(l=g),s.baseState=l,s.firstBaseUpdate=d,s.lastBaseUpdate=y,n=s.shared.interleaved,n!==null){s=n;do o|=s.lane,s=s.next;while(s!==n)}else a===null&&(s.shared.lanes=0);Un|=o,e.lanes=o,e.memoizedState=g}}function Bi(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],s=r.callback;if(s!==null){if(r.callback=null,r=t,typeof s!="function")throw Error(w(191,s));s.call(r)}}}var dr={},Xe=An(dr),er=An(dr),nr=An(dr);function Dn(e){if(e===dr)throw Error(w(174));return e}function _o(e,n){switch(W(nr,n),W(er,e),W(Xe,dr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ya(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ya(n,e)}H(Xe),W(Xe,n)}function ft(){H(Xe),H(er),H(nr)}function Oc(e){Dn(nr.current);var n=Dn(Xe.current),t=ya(n,e.type);n!==t&&(W(er,e),W(Xe,t))}function Io(e){er.current===e&&(H(Xe),H(er))}var V=An(0);function os(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ys=[];function Ro(){for(var e=0;e<Ys.length;e++)Ys[e]._workInProgressVersionPrimary=null;Ys.length=0}var Mr=on.ReactCurrentDispatcher,Zs=on.ReactCurrentBatchConfig,Fn=0,G=null,te=null,ae=null,is=!1,Bt=!1,tr=0,Lp=0;function de(){throw Error(w(321))}function qo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!He(e[t],n[t]))return!1;return!0}function Oo(e,n,t,r,s,a){if(Fn=a,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mr.current=e===null||e.memoizedState===null?Up:Wp,e=t(r,s),Bt){a=0;do{if(Bt=!1,tr=0,25<=a)throw Error(w(301));a+=1,ae=te=null,n.updateQueue=null,Mr.current=zp,e=t(r,s)}while(Bt)}if(Mr.current=ls,n=te!==null&&te.next!==null,Fn=0,ae=te=G=null,is=!1,n)throw Error(w(300));return e}function Do(){var e=tr!==0;return tr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?G.memoizedState=ae=e:ae=ae.next=e,ae}function De(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=ae===null?G.memoizedState:ae.next;if(n!==null)ae=n,te=e;else{if(e===null)throw Error(w(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ae===null?G.memoizedState=ae=e:ae=ae.next=e}return ae}function rr(e,n){return typeof n=="function"?n(e):n}function ea(e){var n=De(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=te,s=r.baseQueue,a=t.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,t.pending=null}if(s!==null){a=s.next,r=r.baseState;var i=o=null,l=null,d=a;do{var y=d.lane;if((Fn&y)===y)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(i=l=g,o=r):l=l.next=g,G.lanes|=y,Un|=y}d=d.next}while(d!==null&&d!==a);l===null?o=r:l.next=i,He(r,n.memoizedState)||(be=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){s=e;do a=s.lane,G.lanes|=a,Un|=a,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function na(e){var n=De(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=t.dispatch,s=t.pending,a=n.memoizedState;if(s!==null){t.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);He(a,n.memoizedState)||(be=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function Dc(){}function Nc(e,n){var t=G,r=De(),s=n(),a=!He(r.memoizedState,s);if(a&&(r.memoizedState=s,be=!0),r=r.queue,No(Bc.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||ae!==null&&ae.memoizedState.tag&1){if(t.flags|=2048,sr(9,Mc.bind(null,t,r,s,n),void 0,null),oe===null)throw Error(w(349));Fn&30||Lc(t,n,s)}return s}function Lc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Mc(e,n,t,r){n.value=t,n.getSnapshot=r,Fc(n)&&Uc(e)}function Bc(e,n,t){return t(function(){Fc(n)&&Uc(e)})}function Fc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!He(e,t)}catch{return!0}}function Uc(e){var n=sn(e,1);n!==null&&ze(n,e,1,-1)}function Fi(e){var n=Ge();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},n.queue=e,e=e.dispatch=Fp.bind(null,G,e),[n.memoizedState,e]}function sr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Wc(){return De().memoizedState}function Br(e,n,t,r){var s=Ge();G.flags|=e,s.memoizedState=sr(1|n,t,void 0,r===void 0?null:r)}function xs(e,n,t,r){var s=De();r=r===void 0?null:r;var a=void 0;if(te!==null){var o=te.memoizedState;if(a=o.destroy,r!==null&&qo(r,o.deps)){s.memoizedState=sr(n,t,a,r);return}}G.flags|=e,s.memoizedState=sr(1|n,t,a,r)}function Ui(e,n){return Br(8390656,8,e,n)}function No(e,n){return xs(2048,8,e,n)}function zc(e,n){return xs(4,2,e,n)}function Hc(e,n){return xs(4,4,e,n)}function Jc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vc(e,n,t){return t=t!=null?t.concat([e]):null,xs(4,4,Jc.bind(null,n,e),t)}function Lo(){}function Gc(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Qc(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function $c(e,n,t){return Fn&21?(He(t,n)||(t=ec(),G.lanes|=t,Un|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=t)}function Mp(e,n){var t=B;B=t!==0&&4>t?t:4,e(!0);var r=Zs.transition;Zs.transition={};try{e(!1),n()}finally{B=t,Zs.transition=r}}function Xc(){return De().memoizedState}function Bp(e,n,t){var r=xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Kc(e))Yc(n,t);else if(t=Rc(e,n,t,r),t!==null){var s=ge();ze(t,e,r,s),Zc(t,n,r)}}function Fp(e,n,t){var r=xn(e),s={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Kc(e))Yc(n,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,i=a(o,t);if(s.hasEagerState=!0,s.eagerState=i,He(i,o)){var l=n.interleaved;l===null?(s.next=s,To(n)):(s.next=l.next,l.next=s),n.interleaved=s;return}}catch{}finally{}t=Rc(e,n,s,r),t!==null&&(s=ge(),ze(t,e,r,s),Zc(t,n,r))}}function Kc(e){var n=e.alternate;return e===G||n!==null&&n===G}function Yc(e,n){Bt=is=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Zc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,fo(e,t)}}var ls={readContext:Oe,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Up={readContext:Oe,useCallback:function(e,n){return Ge().memoizedState=[e,n===void 0?null:n],e},useContext:Oe,useEffect:Ui,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Br(4194308,4,Jc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Br(4194308,4,e,n)},useInsertionEffect:function(e,n){return Br(4,2,e,n)},useMemo:function(e,n){var t=Ge();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ge();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Bp.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var n=Ge();return e={current:e},n.memoizedState=e},useState:Fi,useDebugValue:Lo,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Fi(!1),n=e[0];return e=Mp.bind(null,e[1]),Ge().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=G,s=Ge();if(J){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),oe===null)throw Error(w(349));Fn&30||Lc(r,n,t)}s.memoizedState=t;var a={value:t,getSnapshot:n};return s.queue=a,Ui(Bc.bind(null,r,a,e),[e]),r.flags|=2048,sr(9,Mc.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=Ge(),n=oe.identifierPrefix;if(J){var t=en,r=Ze;t=(r&~(1<<32-We(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=tr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Lp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Wp={readContext:Oe,useCallback:Gc,useContext:Oe,useEffect:No,useImperativeHandle:Vc,useInsertionEffect:zc,useLayoutEffect:Hc,useMemo:Qc,useReducer:ea,useRef:Wc,useState:function(){return ea(rr)},useDebugValue:Lo,useDeferredValue:function(e){var n=De();return $c(n,te.memoizedState,e)},useTransition:function(){var e=ea(rr)[0],n=De().memoizedState;return[e,n]},useMutableSource:Dc,useSyncExternalStore:Nc,useId:Xc,unstable_isNewReconciler:!1},zp={readContext:Oe,useCallback:Gc,useContext:Oe,useEffect:No,useImperativeHandle:Vc,useInsertionEffect:zc,useLayoutEffect:Hc,useMemo:Qc,useReducer:na,useRef:Wc,useState:function(){return na(rr)},useDebugValue:Lo,useDeferredValue:function(e){var n=De();return te===null?n.memoizedState=e:$c(n,te.memoizedState,e)},useTransition:function(){var e=na(rr)[0],n=De().memoizedState;return[e,n]},useMutableSource:Dc,useSyncExternalStore:Nc,useId:Xc,unstable_isNewReconciler:!1};function Me(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ma(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ss={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),s=xn(e),a=nn(r,s);a.payload=n,t!=null&&(a.callback=t),n=bn(e,a,s),n!==null&&(ze(n,e,s,r),Lr(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),s=xn(e),a=nn(r,s);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=bn(e,a,s),n!==null&&(ze(n,e,s,r),Lr(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=xn(e),s=nn(t,r);s.tag=2,n!=null&&(s.callback=n),n=bn(e,s,r),n!==null&&(ze(n,e,r,t),Lr(n,e,r))}};function Wi(e,n,t,r,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):n.prototype&&n.prototype.isPureReactComponent?!Xt(t,r)||!Xt(s,a):!0}function eu(e,n,t){var r=!1,s=En,a=n.contextType;return typeof a=="object"&&a!==null?a=Oe(a):(s=xe(n)?Mn:fe.current,r=n.contextTypes,a=(r=r!=null)?dt(e,s):En),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ss,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),n}function zi(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ss.enqueueReplaceState(n,n.state,null)}function Ba(e,n,t,r){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},jo(e);var a=n.contextType;typeof a=="object"&&a!==null?s.context=Oe(a):(a=xe(n)?Mn:fe.current,s.context=dt(e,a)),s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Ma(e,n,a,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Ss.enqueueReplaceState(s,s.state,null),as(e,t,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ht(e,n){try{var t="",r=n;do t+=yd(r),r=r.return;while(r);var s=t}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:s,digest:null}}function ta(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Fa(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Hp=typeof WeakMap=="function"?WeakMap:Map;function nu(e,n,t){t=nn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){us||(us=!0,Xa=r),Fa(e,n)},t}function tu(e,n,t){t=nn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;t.payload=function(){return r(s)},t.callback=function(){Fa(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Fa(e,n),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Hi(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Hp;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(t)||(s.add(t),e=sm.bind(null,e,n,t),n.then(e,e))}function Ji(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Vi(e,n,t,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nn(-1,1),n.tag=2,bn(t,n,1))),t.lanes|=1),e)}var Jp=on.ReactCurrentOwner,be=!1;function he(e,n,t,r){n.child=e===null?Ic(n,null,t,r):mt(n,e.child,t,r)}function Gi(e,n,t,r,s){t=t.render;var a=n.ref;return lt(n,s),r=Oo(e,n,t,r,a,s),t=Do(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,an(e,n,s)):(J&&t&&xo(n),n.flags|=1,he(e,n,r,s),n.child)}function Qi(e,n,t,r,s){if(e===null){var a=t.type;return typeof a=="function"&&!Jo(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,ru(e,n,a,r,s)):(e=zr(t.type,null,r,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:Xt,t(o,r)&&e.ref===n.ref)return an(e,n,s)}return n.flags|=1,e=Sn(a,r),e.ref=n.ref,e.return=n,n.child=e}function ru(e,n,t,r,s){if(e!==null){var a=e.memoizedProps;if(Xt(a,r)&&e.ref===n.ref)if(be=!1,n.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(be=!0);else return n.lanes=e.lanes,an(e,n,s)}return Ua(e,n,t,r,s)}function su(e,n,t){var r=n.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(rt,Ce),Ce|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(rt,Ce),Ce|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,W(rt,Ce),Ce|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,W(rt,Ce),Ce|=r;return he(e,n,s,t),n.child}function au(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ua(e,n,t,r,s){var a=xe(t)?Mn:fe.current;return a=dt(n,a),lt(n,s),t=Oo(e,n,t,r,a,s),r=Do(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,an(e,n,s)):(J&&r&&xo(n),n.flags|=1,he(e,n,t,s),n.child)}function $i(e,n,t,r,s){if(xe(t)){var a=!0;es(n)}else a=!1;if(lt(n,s),n.stateNode===null)Fr(e,n),eu(n,t,r),Ba(n,t,r,s),r=!0;else if(e===null){var o=n.stateNode,i=n.memoizedProps;o.props=i;var l=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=Oe(d):(d=xe(t)?Mn:fe.current,d=dt(n,d));var y=t.getDerivedStateFromProps,g=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||l!==d)&&zi(n,o,r,d),dn=!1;var h=n.memoizedState;o.state=h,as(n,r,o,s),l=n.memoizedState,i!==r||h!==l||ke.current||dn?(typeof y=="function"&&(Ma(n,t,y,r),l=n.memoizedState),(i=dn||Wi(n,t,i,r,h,l,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),o.props=r,o.state=l,o.context=d,r=i):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,qc(e,n),i=n.memoizedProps,d=n.type===n.elementType?i:Me(n.type,i),o.props=d,g=n.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Oe(l):(l=xe(t)?Mn:fe.current,l=dt(n,l));var b=t.getDerivedStateFromProps;(y=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==g||h!==l)&&zi(n,o,r,l),dn=!1,h=n.memoizedState,o.state=h,as(n,r,o,s);var k=n.memoizedState;i!==g||h!==k||ke.current||dn?(typeof b=="function"&&(Ma(n,t,b,r),k=n.memoizedState),(d=dn||Wi(n,t,d,r,h,k,l)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,l)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),o.props=r,o.state=k,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Wa(e,n,t,r,a,s)}function Wa(e,n,t,r,s,a){au(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return s&&Oi(n,t,!1),an(e,n,a);r=n.stateNode,Jp.current=n;var i=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=mt(n,e.child,null,a),n.child=mt(n,null,i,a)):he(e,n,i,a),n.memoizedState=r.state,s&&Oi(n,t,!0),n.child}function ou(e){var n=e.stateNode;n.pendingContext?qi(e,n.pendingContext,n.pendingContext!==n.context):n.context&&qi(e,n.context,!1),_o(e,n.containerInfo)}function Xi(e,n,t,r,s){return pt(),Co(s),n.flags|=256,he(e,n,t,r),n.child}var za={dehydrated:null,treeContext:null,retryLane:0};function Ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function iu(e,n,t){var r=n.pendingProps,s=V.current,a=!1,o=(n.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),W(V,s&1),e===null)return Na(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,a?(r=n.mode,a=n.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ps(o,r,0,null),e=Ln(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Ha(t),n.memoizedState=za,e):Mo(n,o));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return Vp(e,n,o,r,i,s,t);if(a){a=r.fallback,o=n.mode,s=e.child,i=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=Sn(s,l),r.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=Sn(i,a):(a=Ln(a,o,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,o=e.child.memoizedState,o=o===null?Ha(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,n.memoizedState=za,r}return a=e.child,e=a.sibling,r=Sn(a,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Mo(e,n){return n=Ps({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Tr(e,n,t,r){return r!==null&&Co(r),mt(n,e.child,null,t),e=Mo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vp(e,n,t,r,s,a,o){if(t)return n.flags&256?(n.flags&=-257,r=ta(Error(w(422))),Tr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,s=n.mode,r=Ps({mode:"visible",children:r.children},s,0,null),a=Ln(a,s,o,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,n.mode&1&&mt(n,e.child,null,o),n.child.memoizedState=Ha(o),n.memoizedState=za,a);if(!(n.mode&1))return Tr(e,n,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(w(419)),r=ta(a,r,void 0),Tr(e,n,o,r)}if(i=(o&e.childLanes)!==0,be||i){if(r=oe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,sn(e,s),ze(r,e,s,-1))}return Ho(),r=ta(Error(w(421))),Tr(e,n,o,r)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=am.bind(null,e),s._reactRetry=n,null):(e=a.treeContext,Ee=wn(s.nextSibling),Pe=n,J=!0,Fe=null,e!==null&&(_e[Ie++]=Ze,_e[Ie++]=en,_e[Ie++]=Bn,Ze=e.id,en=e.overflow,Bn=n),n=Mo(n,r.children),n.flags|=4096,n)}function Ki(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),La(e.return,n,t)}function ra(e,n,t,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:s}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=s)}function lu(e,n,t){var r=n.pendingProps,s=r.revealOrder,a=r.tail;if(he(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ki(e,t,n);else if(e.tag===19)Ki(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(V,r),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&os(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),ra(n,!1,s,t,a);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&os(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}ra(n,!0,t,null,a);break;case"together":ra(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function an(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Un|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=Sn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Sn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Gp(e,n,t){switch(n.tag){case 3:ou(n),pt();break;case 5:Oc(n);break;case 1:xe(n.type)&&es(n);break;case 4:_o(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;W(rs,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?iu(e,n,t):(W(V,V.current&1),e=an(e,n,t),e!==null?e.sibling:null);W(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return lu(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),W(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,su(e,n,t)}return an(e,n,t)}var cu,Ja,uu,du;cu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ja=function(){};uu=function(e,n,t,r){var s=e.memoizedProps;if(s!==r){e=n.stateNode,Dn(Xe.current);var a=null;switch(t){case"input":s=ma(e,s),r=ma(e,r),a=[];break;case"select":s=Q({},s,{value:void 0}),r=Q({},r,{value:void 0}),a=[];break;case"textarea":s=ga(e,s),r=ga(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}va(t,r);var o;t=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var i=s[d];for(o in i)i.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(zt.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var l=r[d];if(i=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&l!==i&&(l!=null||i!=null))if(d==="style")if(i){for(o in i)!i.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&i[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(a||(a=[]),a.push(d,t)),t=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(zt.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&z("scroll",e),a||i===l||(a=[])):(a=a||[]).push(d,l))}t&&(a=a||[]).push("style",t);var d=a;(n.updateQueue=d)&&(n.flags|=4)}};du=function(e,n,t,r){t!==r&&(n.flags|=4)};function Tt(e,n){if(!J)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Qp(e,n,t){var r=n.pendingProps;switch(So(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return xe(n.type)&&Zr(),pe(n),null;case 3:return r=n.stateNode,ft(),H(ke),H(fe),Ro(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(Za(Fe),Fe=null))),Ja(e,n),pe(n),null;case 5:Io(n);var s=Dn(nr.current);if(t=n.type,e!==null&&n.stateNode!=null)uu(e,n,t,r,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(w(166));return pe(n),null}if(e=Dn(Xe.current),Pr(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[Qe]=n,r[Zt]=a,e=(n.mode&1)!==0,t){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(s=0;s<qt.length;s++)z(qt[s],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":oi(r,a),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},z("invalid",r);break;case"textarea":li(r,a),z("invalid",r)}va(t,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Er(r.textContent,i,e),s=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Er(r.textContent,i,e),s=["children",""+i]):zt.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&z("scroll",r)}switch(t){case"input":yr(r),ii(r,a,!0);break;case"textarea":yr(r),ci(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Yr)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Qe]=n,e[Zt]=r,cu(e,n,!1,!1),n.stateNode=e;e:{switch(o=wa(t,r),t){case"dialog":z("cancel",e),z("close",e),s=r;break;case"iframe":case"object":case"embed":z("load",e),s=r;break;case"video":case"audio":for(s=0;s<qt.length;s++)z(qt[s],e);s=r;break;case"source":z("error",e),s=r;break;case"img":case"image":case"link":z("error",e),z("load",e),s=r;break;case"details":z("toggle",e),s=r;break;case"input":oi(e,r),s=ma(e,r),z("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Q({},r,{value:void 0}),z("invalid",e);break;case"textarea":li(e,r),s=ga(e,r),z("invalid",e);break;default:s=r}va(t,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="style"?Wl(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fl(e,l)):a==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ht(e,l):typeof l=="number"&&Ht(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(zt.hasOwnProperty(a)?l!=null&&a==="onScroll"&&z("scroll",e):l!=null&&io(e,a,l,o))}switch(t){case"input":yr(e),ii(e,r,!1);break;case"textarea":yr(e),ci(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?st(e,!!r.multiple,a,!1):r.defaultValue!=null&&st(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Yr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)du(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(w(166));if(t=Dn(nr.current),Dn(Xe.current),Pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Qe]=n,(a=r.nodeValue!==t)&&(e=Pe,e!==null))switch(e.tag){case 3:Er(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Qe]=n,n.stateNode=r}return pe(n),null;case 13:if(H(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Ee!==null&&n.mode&1&&!(n.flags&128))jc(),pt(),n.flags|=98560,a=!1;else if(a=Pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(w(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(w(317));a[Qe]=n}else pt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),a=!1}else Fe!==null&&(Za(Fe),Fe=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?re===0&&(re=3):Ho())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return ft(),Ja(e,n),e===null&&Kt(n.stateNode.containerInfo),pe(n),null;case 10:return Ao(n.type._context),pe(n),null;case 17:return xe(n.type)&&Zr(),pe(n),null;case 19:if(H(V),a=n.memoizedState,a===null)return pe(n),null;if(r=(n.flags&128)!==0,o=a.rendering,o===null)if(r)Tt(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=os(e),o!==null){for(n.flags|=128,Tt(a,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(V,V.current&1|2),n.child}e=e.sibling}a.tail!==null&&Z()>gt&&(n.flags|=128,r=!0,Tt(a,!1),n.lanes=4194304)}else{if(!r)if(e=os(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Tt(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!J)return pe(n),null}else 2*Z()-a.renderingStartTime>gt&&t!==1073741824&&(n.flags|=128,r=!0,Tt(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(t=a.last,t!==null?t.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Z(),n.sibling=null,t=V.current,W(V,r?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return zo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ce&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function $p(e,n){switch(So(n),n.tag){case 1:return xe(n.type)&&Zr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ft(),H(ke),H(fe),Ro(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Io(n),null;case 13:if(H(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));pt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(V),null;case 4:return ft(),null;case 10:return Ao(n.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var jr=!1,me=!1,Xp=typeof WeakSet=="function"?WeakSet:Set,S=null;function tt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){$(e,n,r)}else t.current=null}function Va(e,n,t){try{t()}catch(r){$(e,n,r)}}var Yi=!1;function Kp(e,n){if(ja=$r,e=gc(),ko(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,i=-1,l=-1,d=0,y=0,g=e,h=null;n:for(;;){for(var b;g!==t||s!==0&&g.nodeType!==3||(i=o+s),g!==a||r!==0&&g.nodeType!==3||(l=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(b=g.firstChild)!==null;)h=g,g=b;for(;;){if(g===e)break n;if(h===t&&++d===s&&(i=o),h===a&&++y===r&&(l=o),(b=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=b}t=i===-1||l===-1?null:{start:i,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(_a={focusedElem:e,selectionRange:t},$r=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,U=k.memoizedState,m=n.stateNode,p=m.getSnapshotBeforeUpdate(n.elementType===n.type?x:Me(n.type,x),U);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){$(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return k=Yi,Yi=!1,k}function Ft(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Va(n,t,a)}s=s.next}while(s!==r)}}function Cs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ga(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function pu(e){var n=e.alternate;n!==null&&(e.alternate=null,pu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[Zt],delete n[qa],delete n[qp],delete n[Op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mu(e){return e.tag===5||e.tag===3||e.tag===4}function Zi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(Qa(e,n,t),e=e.sibling;e!==null;)Qa(e,n,t),e=e.sibling}function $a(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,n,t),e=e.sibling;e!==null;)$a(e,n,t),e=e.sibling}var ie=null,Be=!1;function cn(e,n,t){for(t=t.child;t!==null;)fu(e,n,t),t=t.sibling}function fu(e,n,t){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(gs,t)}catch{}switch(t.tag){case 5:me||tt(t,n);case 6:var r=ie,s=Be;ie=null,cn(e,n,t),ie=r,Be=s,ie!==null&&(Be?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(Be?(e=ie,t=t.stateNode,e.nodeType===8?Xs(e.parentNode,t):e.nodeType===1&&Xs(e,t),Qt(e)):Xs(ie,t.stateNode));break;case 4:r=ie,s=Be,ie=t.stateNode.containerInfo,Be=!0,cn(e,n,t),ie=r,Be=s;break;case 0:case 11:case 14:case 15:if(!me&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Va(t,n,o),s=s.next}while(s!==r)}cn(e,n,t);break;case 1:if(!me&&(tt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(i){$(t,n,i)}cn(e,n,t);break;case 21:cn(e,n,t);break;case 22:t.mode&1?(me=(r=me)||t.memoizedState!==null,cn(e,n,t),me=r):cn(e,n,t);break;default:cn(e,n,t)}}function el(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Xp),n.forEach(function(r){var s=om.bind(null,e,r);t.has(r)||(t.add(r),r.then(s,s))})}}function Le(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];try{var a=e,o=n,i=o;e:for(;i!==null;){switch(i.tag){case 5:ie=i.stateNode,Be=!1;break e;case 3:ie=i.stateNode.containerInfo,Be=!0;break e;case 4:ie=i.stateNode.containerInfo,Be=!0;break e}i=i.return}if(ie===null)throw Error(w(160));fu(a,o,s),ie=null,Be=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(d){$(s,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)hu(n,e),n=n.sibling}function hu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(n,e),Ve(e),r&4){try{Ft(3,e,e.return),Cs(3,e)}catch(x){$(e,e.return,x)}try{Ft(5,e,e.return)}catch(x){$(e,e.return,x)}}break;case 1:Le(n,e),Ve(e),r&512&&t!==null&&tt(t,t.return);break;case 5:if(Le(n,e),Ve(e),r&512&&t!==null&&tt(t,t.return),e.flags&32){var s=e.stateNode;try{Ht(s,"")}catch(x){$(e,e.return,x)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,i=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&Ll(s,a),wa(i,o);var d=wa(i,a);for(o=0;o<l.length;o+=2){var y=l[o],g=l[o+1];y==="style"?Wl(s,g):y==="dangerouslySetInnerHTML"?Fl(s,g):y==="children"?Ht(s,g):io(s,y,g,d)}switch(i){case"input":fa(s,a);break;case"textarea":Ml(s,a);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?st(s,!!a.multiple,b,!1):h!==!!a.multiple&&(a.defaultValue!=null?st(s,!!a.multiple,a.defaultValue,!0):st(s,!!a.multiple,a.multiple?[]:"",!1))}s[Zt]=a}catch(x){$(e,e.return,x)}}break;case 6:if(Le(n,e),Ve(e),r&4){if(e.stateNode===null)throw Error(w(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(x){$(e,e.return,x)}}break;case 3:if(Le(n,e),Ve(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(x){$(e,e.return,x)}break;case 4:Le(n,e),Ve(e);break;case 13:Le(n,e),Ve(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Uo=Z())),r&4&&el(e);break;case 22:if(y=t!==null&&t.memoizedState!==null,e.mode&1?(me=(d=me)||y,Le(n,e),me=d):Le(n,e),Ve(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(S=e,y=e.child;y!==null;){for(g=S=y;S!==null;){switch(h=S,b=h.child,h.tag){case 0:case 11:case 14:case 15:Ft(4,h,h.return);break;case 1:tt(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(x){$(r,t,x)}}break;case 5:tt(h,h.return);break;case 22:if(h.memoizedState!==null){tl(g);continue}}b!==null?(b.return=h,S=b):tl(g)}y=y.sibling}e:for(y=null,g=e;;){if(g.tag===5){if(y===null){y=g;try{s=g.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=g.stateNode,l=g.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=Ul("display",o))}catch(x){$(e,e.return,x)}}}else if(g.tag===6){if(y===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(x){$(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;y===g&&(y=null),g=g.return}y===g&&(y=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Le(n,e),Ve(e),r&4&&el(e);break;case 21:break;default:Le(n,e),Ve(e)}}function Ve(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(mu(t)){var r=t;break e}t=t.return}throw Error(w(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ht(s,""),r.flags&=-33);var a=Zi(e);$a(e,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,i=Zi(e);Qa(e,i,o);break;default:throw Error(w(161))}}catch(l){$(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Yp(e,n,t){S=e,gu(e)}function gu(e,n,t){for(var r=(e.mode&1)!==0;S!==null;){var s=S,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||jr;if(!o){var i=s.alternate,l=i!==null&&i.memoizedState!==null||me;i=jr;var d=me;if(jr=o,(me=l)&&!d)for(S=s;S!==null;)o=S,l=o.child,o.tag===22&&o.memoizedState!==null?rl(s):l!==null?(l.return=o,S=l):rl(s);for(;a!==null;)S=a,gu(a),a=a.sibling;S=s,jr=i,me=d}nl(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,S=a):nl(e)}}function nl(e){for(;S!==null;){var n=S;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:me||Cs(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!me)if(t===null)r.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:Me(n.type,t.memoizedProps);r.componentDidUpdate(s,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Bi(n,a,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Bi(n,o,t)}break;case 5:var i=n.stateNode;if(t===null&&n.flags&4){t=i;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var g=y.dehydrated;g!==null&&Qt(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}me||n.flags&512&&Ga(n)}catch(h){$(n,n.return,h)}}if(n===e){S=null;break}if(t=n.sibling,t!==null){t.return=n.return,S=t;break}S=n.return}}function tl(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var t=n.sibling;if(t!==null){t.return=n.return,S=t;break}S=n.return}}function rl(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Cs(4,n)}catch(l){$(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(l){$(n,s,l)}}var a=n.return;try{Ga(n)}catch(l){$(n,a,l)}break;case 5:var o=n.return;try{Ga(n)}catch(l){$(n,o,l)}}}catch(l){$(n,n.return,l)}if(n===e){S=null;break}var i=n.sibling;if(i!==null){i.return=n.return,S=i;break}S=n.return}}var Zp=Math.ceil,cs=on.ReactCurrentDispatcher,Bo=on.ReactCurrentOwner,qe=on.ReactCurrentBatchConfig,L=0,oe=null,ee=null,le=0,Ce=0,rt=An(0),re=0,ar=null,Un=0,Es=0,Fo=0,Ut=null,we=null,Uo=0,gt=1/0,Ke=null,us=!1,Xa=null,kn=null,_r=!1,hn=null,ds=0,Wt=0,Ka=null,Ur=-1,Wr=0;function ge(){return L&6?Z():Ur!==-1?Ur:Ur=Z()}function xn(e){return e.mode&1?L&2&&le!==0?le&-le:Np.transition!==null?(Wr===0&&(Wr=ec()),Wr):(e=B,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e):1}function ze(e,n,t,r){if(50<Wt)throw Wt=0,Ka=null,Error(w(185));lr(e,t,r),(!(L&2)||e!==oe)&&(e===oe&&(!(L&2)&&(Es|=t),re===4&&mn(e,le)),Se(e,r),t===1&&L===0&&!(n.mode&1)&&(gt=Z()+500,ks&&Tn()))}function Se(e,n){var t=e.callbackNode;Nd(e,n);var r=Qr(e,e===oe?le:0);if(r===0)t!==null&&pi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&pi(t),n===1)e.tag===0?Dp(sl.bind(null,e)):Pc(sl.bind(null,e)),Ip(function(){!(L&6)&&Tn()}),t=null;else{switch(nc(r)){case 1:t=mo;break;case 4:t=Yl;break;case 16:t=Gr;break;case 536870912:t=Zl;break;default:t=Gr}t=Cu(t,yu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function yu(e,n){if(Ur=-1,Wr=0,L&6)throw Error(w(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var r=Qr(e,e===oe?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ps(e,r);else{n=r;var s=L;L|=2;var a=wu();(oe!==e||le!==n)&&(Ke=null,gt=Z()+500,Nn(e,n));do try{tm();break}catch(i){vu(e,i)}while(!0);Po(),cs.current=a,L=s,ee!==null?n=0:(oe=null,le=0,n=re)}if(n!==0){if(n===2&&(s=Ca(e),s!==0&&(r=s,n=Ya(e,s))),n===1)throw t=ar,Nn(e,0),mn(e,r),Se(e,Z()),t;if(n===6)mn(e,r);else{if(s=e.current.alternate,!(r&30)&&!em(s)&&(n=ps(e,r),n===2&&(a=Ca(e),a!==0&&(r=a,n=Ya(e,a))),n===1))throw t=ar,Nn(e,0),mn(e,r),Se(e,Z()),t;switch(e.finishedWork=s,e.finishedLanes=r,n){case 0:case 1:throw Error(w(345));case 2:Rn(e,we,Ke);break;case 3:if(mn(e,r),(r&130023424)===r&&(n=Uo+500-Z(),10<n)){if(Qr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ra(Rn.bind(null,e,we,Ke),n);break}Rn(e,we,Ke);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,s=-1;0<r;){var o=31-We(r);a=1<<o,o=n[o],o>s&&(s=o),r&=~a}if(r=s,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zp(r/1960))-r,10<r){e.timeoutHandle=Ra(Rn.bind(null,e,we,Ke),r);break}Rn(e,we,Ke);break;case 5:Rn(e,we,Ke);break;default:throw Error(w(329))}}}return Se(e,Z()),e.callbackNode===t?yu.bind(null,e):null}function Ya(e,n){var t=Ut;return e.current.memoizedState.isDehydrated&&(Nn(e,n).flags|=256),e=ps(e,n),e!==2&&(n=we,we=t,n!==null&&Za(n)),e}function Za(e){we===null?we=e:we.push.apply(we,e)}function em(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var s=t[r],a=s.getSnapshot;s=s.value;try{if(!He(a(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mn(e,n){for(n&=~Fo,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-We(n),r=1<<t;e[t]=-1,n&=~r}}function sl(e){if(L&6)throw Error(w(327));ct();var n=Qr(e,0);if(!(n&1))return Se(e,Z()),null;var t=ps(e,n);if(e.tag!==0&&t===2){var r=Ca(e);r!==0&&(n=r,t=Ya(e,r))}if(t===1)throw t=ar,Nn(e,0),mn(e,n),Se(e,Z()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rn(e,we,Ke),Se(e,Z()),null}function Wo(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(gt=Z()+500,ks&&Tn())}}function Wn(e){hn!==null&&hn.tag===0&&!(L&6)&&ct();var n=L;L|=1;var t=qe.transition,r=B;try{if(qe.transition=null,B=1,e)return e()}finally{B=r,qe.transition=t,L=n,!(L&6)&&Tn()}}function zo(){Ce=rt.current,H(rt)}function Nn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,_p(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(So(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:ft(),H(ke),H(fe),Ro();break;case 5:Io(r);break;case 4:ft();break;case 13:H(V);break;case 19:H(V);break;case 10:Ao(r.type._context);break;case 22:case 23:zo()}t=t.return}if(oe=e,ee=e=Sn(e.current,null),le=Ce=n,re=0,ar=null,Fo=Es=Un=0,we=Ut=null,On!==null){for(n=0;n<On.length;n++)if(t=On[n],r=t.interleaved,r!==null){t.interleaved=null;var s=r.next,a=t.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}t.pending=r}On=null}return e}function vu(e,n){do{var t=ee;try{if(Po(),Mr.current=ls,is){for(var r=G.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}is=!1}if(Fn=0,ae=te=G=null,Bt=!1,tr=0,Bo.current=null,t===null||t.return===null){re=1,ar=n,ee=null;break}e:{var a=e,o=t.return,i=t,l=n;if(n=le,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,y=i,g=y.tag;if(!(y.mode&1)&&(g===0||g===11||g===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var b=Ji(o);if(b!==null){b.flags&=-257,Vi(b,o,i,a,n),b.mode&1&&Hi(a,d,n),n=b,l=d;var k=n.updateQueue;if(k===null){var x=new Set;x.add(l),n.updateQueue=x}else k.add(l);break e}else{if(!(n&1)){Hi(a,d,n),Ho();break e}l=Error(w(426))}}else if(J&&i.mode&1){var U=Ji(o);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Vi(U,o,i,a,n),Co(ht(l,i));break e}}a=l=ht(l,i),re!==4&&(re=2),Ut===null?Ut=[a]:Ut.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var m=nu(a,l,n);Mi(a,m);break e;case 1:i=l;var p=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(kn===null||!kn.has(f)))){a.flags|=65536,n&=-n,a.lanes|=n;var v=tu(a,i,n);Mi(a,v);break e}}a=a.return}while(a!==null)}ku(t)}catch(C){n=C,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function wu(){var e=cs.current;return cs.current=ls,e===null?ls:e}function Ho(){(re===0||re===3||re===2)&&(re=4),oe===null||!(Un&268435455)&&!(Es&268435455)||mn(oe,le)}function ps(e,n){var t=L;L|=2;var r=wu();(oe!==e||le!==n)&&(Ke=null,Nn(e,n));do try{nm();break}catch(s){vu(e,s)}while(!0);if(Po(),L=t,cs.current=r,ee!==null)throw Error(w(261));return oe=null,le=0,re}function nm(){for(;ee!==null;)bu(ee)}function tm(){for(;ee!==null&&!Ad();)bu(ee)}function bu(e){var n=Su(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,n===null?ku(e):ee=n,Bo.current=null}function ku(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=$p(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(t=Qp(t,n,Ce),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);re===0&&(re=5)}function Rn(e,n,t){var r=B,s=qe.transition;try{qe.transition=null,B=1,rm(e,n,t,r)}finally{qe.transition=s,B=r}return null}function rm(e,n,t,r){do ct();while(hn!==null);if(L&6)throw Error(w(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Ld(e,a),e===oe&&(ee=oe=null,le=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_r||(_r=!0,Cu(Gr,function(){return ct(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=qe.transition,qe.transition=null;var o=B;B=1;var i=L;L|=4,Bo.current=null,Kp(e,t),hu(t,e),Sp(_a),$r=!!ja,_a=ja=null,e.current=t,Yp(t),Td(),L=i,B=o,qe.transition=a}else e.current=t;if(_r&&(_r=!1,hn=e,ds=s),a=e.pendingLanes,a===0&&(kn=null),Id(t.stateNode),Se(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],r(s.value,{componentStack:s.stack,digest:s.digest});if(us)throw us=!1,e=Xa,Xa=null,e;return ds&1&&e.tag!==0&&ct(),a=e.pendingLanes,a&1?e===Ka?Wt++:(Wt=0,Ka=e):Wt=0,Tn(),null}function ct(){if(hn!==null){var e=nc(ds),n=qe.transition,t=B;try{if(qe.transition=null,B=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,ds=0,L&6)throw Error(w(331));var s=L;for(L|=4,S=e.current;S!==null;){var a=S,o=a.child;if(S.flags&16){var i=a.deletions;if(i!==null){for(var l=0;l<i.length;l++){var d=i[l];for(S=d;S!==null;){var y=S;switch(y.tag){case 0:case 11:case 15:Ft(8,y,a)}var g=y.child;if(g!==null)g.return=y,S=g;else for(;S!==null;){y=S;var h=y.sibling,b=y.return;if(pu(y),y===d){S=null;break}if(h!==null){h.return=b,S=h;break}S=b}}}var k=a.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var U=x.sibling;x.sibling=null,x=U}while(x!==null)}}S=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,S=o;else e:for(;S!==null;){if(a=S,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ft(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,S=m;break e}S=a.return}}var p=e.current;for(S=p;S!==null;){o=S;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,S=f;else e:for(o=p;S!==null;){if(i=S,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Cs(9,i)}}catch(C){$(i,i.return,C)}if(i===o){S=null;break e}var v=i.sibling;if(v!==null){v.return=i.return,S=v;break e}S=i.return}}if(L=s,Tn(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(gs,e)}catch{}r=!0}return r}finally{B=t,qe.transition=n}}return!1}function al(e,n,t){n=ht(t,n),n=nu(e,n,1),e=bn(e,n,1),n=ge(),e!==null&&(lr(e,1,n),Se(e,n))}function $(e,n,t){if(e.tag===3)al(e,e,t);else for(;n!==null;){if(n.tag===3){al(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=ht(t,e),e=tu(n,e,1),n=bn(n,e,1),e=ge(),n!==null&&(lr(n,1,e),Se(n,e));break}}n=n.return}}function sm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,oe===e&&(le&t)===t&&(re===4||re===3&&(le&130023424)===le&&500>Z()-Uo?Nn(e,0):Fo|=t),Se(e,n)}function xu(e,n){n===0&&(e.mode&1?(n=br,br<<=1,!(br&130023424)&&(br=4194304)):n=1);var t=ge();e=sn(e,n),e!==null&&(lr(e,n,t),Se(e,t))}function am(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),xu(e,t)}function om(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(n),xu(e,t)}var Su;Su=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ke.current)be=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return be=!1,Gp(e,n,t);be=!!(e.flags&131072)}else be=!1,J&&n.flags&1048576&&Ac(n,ts,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fr(e,n),e=n.pendingProps;var s=dt(n,fe.current);lt(n,t),s=Oo(null,n,r,e,s,t);var a=Do();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,xe(r)?(a=!0,es(n)):a=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,jo(n),s.updater=Ss,n.stateNode=s,s._reactInternals=n,Ba(n,r,e,t),n=Wa(null,n,r,!0,a,t)):(n.tag=0,J&&a&&xo(n),he(null,n,s,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fr(e,n),e=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=lm(r),e=Me(r,e),s){case 0:n=Ua(null,n,r,e,t);break e;case 1:n=$i(null,n,r,e,t);break e;case 11:n=Gi(null,n,r,e,t);break e;case 14:n=Qi(null,n,r,Me(r.type,e),t);break e}throw Error(w(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Me(r,s),Ua(e,n,r,s,t);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Me(r,s),$i(e,n,r,s,t);case 3:e:{if(ou(n),e===null)throw Error(w(387));r=n.pendingProps,a=n.memoizedState,s=a.element,qc(e,n),as(n,r,null,t);var o=n.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){s=ht(Error(w(423)),n),n=Xi(e,n,r,t,s);break e}else if(r!==s){s=ht(Error(w(424)),n),n=Xi(e,n,r,t,s);break e}else for(Ee=wn(n.stateNode.containerInfo.firstChild),Pe=n,J=!0,Fe=null,t=Ic(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pt(),r===s){n=an(e,n,t);break e}he(e,n,r,t)}n=n.child}return n;case 5:return Oc(n),e===null&&Na(n),r=n.type,s=n.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,Ia(r,s)?o=null:a!==null&&Ia(r,a)&&(n.flags|=32),au(e,n),he(e,n,o,t),n.child;case 6:return e===null&&Na(n),null;case 13:return iu(e,n,t);case 4:return _o(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=mt(n,null,r,t):he(e,n,r,t),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Me(r,s),Gi(e,n,r,s,t);case 7:return he(e,n,n.pendingProps,t),n.child;case 8:return he(e,n,n.pendingProps.children,t),n.child;case 12:return he(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,a=n.memoizedProps,o=s.value,W(rs,r._currentValue),r._currentValue=o,a!==null)if(He(a.value,o)){if(a.children===s.children&&!ke.current){n=an(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var l=i.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=nn(-1,t&-t),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?l.next=l:(l.next=y.next,y.next=l),d.pending=l}}a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),La(a.return,t,n),i.lanes|=t;break}l=l.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(w(341));o.lanes|=t,i=o.alternate,i!==null&&(i.lanes|=t),La(o,t,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}he(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,lt(n,t),s=Oe(s),r=r(s),n.flags|=1,he(e,n,r,t),n.child;case 14:return r=n.type,s=Me(r,n.pendingProps),s=Me(r.type,s),Qi(e,n,r,s,t);case 15:return ru(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Me(r,s),Fr(e,n),n.tag=1,xe(r)?(e=!0,es(n)):e=!1,lt(n,t),eu(n,r,s),Ba(n,r,s,t),Wa(null,n,r,!0,e,t);case 19:return lu(e,n,t);case 22:return su(e,n,t)}throw Error(w(156,n.tag))};function Cu(e,n){return Kl(e,n)}function im(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,n,t,r){return new im(e,n,t,r)}function Jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lm(e){if(typeof e=="function")return Jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===co)return 11;if(e===uo)return 14}return 2}function Sn(e,n){var t=e.alternate;return t===null?(t=Re(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function zr(e,n,t,r,s,a){var o=2;if(r=e,typeof e=="function")Jo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gn:return Ln(t.children,s,a,n);case lo:o=8,s|=8;break;case ca:return e=Re(12,t,n,s|2),e.elementType=ca,e.lanes=a,e;case ua:return e=Re(13,t,n,s),e.elementType=ua,e.lanes=a,e;case da:return e=Re(19,t,n,s),e.elementType=da,e.lanes=a,e;case Ol:return Ps(t,s,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rl:o=10;break e;case ql:o=9;break e;case co:o=11;break e;case uo:o=14;break e;case un:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Re(o,t,n,s),n.elementType=e,n.type=r,n.lanes=a,n}function Ln(e,n,t,r){return e=Re(7,e,r,n),e.lanes=t,e}function Ps(e,n,t,r){return e=Re(22,e,r,n),e.elementType=Ol,e.lanes=t,e.stateNode={isHidden:!1},e}function sa(e,n,t){return e=Re(6,e,null,n),e.lanes=t,e}function aa(e,n,t){return n=Re(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function cm(e,n,t,r,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bs(0),this.expirationTimes=Bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Vo(e,n,t,r,s,a,o,i,l){return e=new cm(e,n,t,i,l),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Re(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(a),e}function um(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Eu(e){if(!e)return En;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(xe(t))return Ec(e,t,n)}return n}function Pu(e,n,t,r,s,a,o,i,l){return e=Vo(t,r,!0,e,s,a,o,i,l),e.context=Eu(null),t=e.current,r=ge(),s=xn(t),a=nn(r,s),a.callback=n??null,bn(t,a,s),e.current.lanes=s,lr(e,s,r),Se(e,r),e}function As(e,n,t,r){var s=n.current,a=ge(),o=xn(s);return t=Eu(t),n.context===null?n.context=t:n.pendingContext=t,n=nn(a,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=bn(s,n,o),e!==null&&(ze(e,s,o,a),Lr(e,s,o)),o}function ms(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ol(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Go(e,n){ol(e,n),(e=e.alternate)&&ol(e,n)}function dm(){return null}var Au=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qo(e){this._internalRoot=e}Ts.prototype.render=Qo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));As(e,n,null,null)};Ts.prototype.unmount=Qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wn(function(){As(null,e,null,null)}),n[rn]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var n=sc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<pn.length&&n!==0&&n<pn[t].priority;t++);pn.splice(t,0,e),t===0&&oc(e)}};function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function il(){}function pm(e,n,t,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var d=ms(o);a.call(d)}}var o=Pu(n,r,e,0,null,!1,!1,"",il);return e._reactRootContainer=o,e[rn]=o.current,Kt(e.nodeType===8?e.parentNode:e),Wn(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var i=r;r=function(){var d=ms(l);i.call(d)}}var l=Vo(e,0,!1,null,null,!1,!1,"",il);return e._reactRootContainer=l,e[rn]=l.current,Kt(e.nodeType===8?e.parentNode:e),Wn(function(){As(n,l,t,r)}),l}function _s(e,n,t,r,s){var a=t._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var i=s;s=function(){var l=ms(o);i.call(l)}}As(n,o,e,s)}else o=pm(t,n,e,s,r);return ms(o)}tc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Rt(n.pendingLanes);t!==0&&(fo(n,t|1),Se(n,Z()),!(L&6)&&(gt=Z()+500,Tn()))}break;case 13:Wn(function(){var r=sn(e,1);if(r!==null){var s=ge();ze(r,e,1,s)}}),Go(e,1)}};ho=function(e){if(e.tag===13){var n=sn(e,134217728);if(n!==null){var t=ge();ze(n,e,134217728,t)}Go(e,134217728)}};rc=function(e){if(e.tag===13){var n=xn(e),t=sn(e,n);if(t!==null){var r=ge();ze(t,e,n,r)}Go(e,n)}};sc=function(){return B};ac=function(e,n){var t=B;try{return B=e,n()}finally{B=t}};ka=function(e,n,t){switch(n){case"input":if(fa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var s=bs(r);if(!s)throw Error(w(90));Nl(r),fa(r,s)}}}break;case"textarea":Ml(e,t);break;case"select":n=t.value,n!=null&&st(e,!!t.multiple,n,!1)}};Jl=Wo;Vl=Wn;var mm={usingClientEntryPoint:!1,Events:[ur,Kn,bs,zl,Hl,Wo]},jt={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fm={bundleType:jt.bundleType,version:jt.version,rendererPackageName:jt.rendererPackageName,rendererConfig:jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$l(e),e===null?null:e.stateNode},findFiberByHostInstance:jt.findFiberByHostInstance||dm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{gs=Ir.inject(fm),$e=Ir}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$o(n))throw Error(w(200));return um(e,n,null,t)};Te.createRoot=function(e,n){if(!$o(e))throw Error(w(299));var t=!1,r="",s=Au;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Vo(e,1,!1,null,null,t,!1,r,s),e[rn]=n.current,Kt(e.nodeType===8?e.parentNode:e),new Qo(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=$l(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Wn(e)};Te.hydrate=function(e,n,t){if(!js(n))throw Error(w(200));return _s(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!$o(e))throw Error(w(405));var r=t!=null&&t.hydratedSources||null,s=!1,a="",o=Au;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Pu(n,null,e,1,t??null,s,!1,a,o),e[rn]=n.current,Kt(e),r)for(e=0;e<r.length;e++)t=r[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new Ts(n)};Te.render=function(e,n,t){if(!js(n))throw Error(w(200));return _s(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!js(e))throw Error(w(40));return e._reactRootContainer?(Wn(function(){_s(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};Te.unstable_batchedUpdates=Wo;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!js(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return _s(e,n,t,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Tu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tu)}catch(e){console.error(e)}}Tu(),Tl.exports=Te;var hm=Tl.exports,ll=hm;ia.createRoot=ll.createRoot,ia.hydrateRoot=ll.hydrateRoot;const ju=R.createContext(null);function gm({children:e}){const[n,t]=R.useState(()=>localStorage.getItem("ip-theme")||"dark");R.useEffect(()=>{document.documentElement.setAttribute("data-theme",n),localStorage.setItem("ip-theme",n)},[n]);const r=()=>{t(s=>s==="dark"?"light":"dark")};return c.jsx(ju.Provider,{value:{theme:n,toggleTheme:r},children:e})}function _u(){const e=R.useContext(ju);if(!e)throw new Error("useTheme must be used inside ThemeProvider");return e}const Iu=R.createContext(null);function ym({children:e}){const[n,t]=R.useState("hr"),[r,s]=R.useState(""),[a,o]=R.useState("landing"),[i,l]=R.useState("all"),[d,y]=R.useState("all"),[g,h]=R.useState(!1),b=R.useCallback(()=>h(!1),[]),k=R.useCallback(()=>h(v=>!v),[]),x=v=>{t(v),o("section"),s(""),h(!1)},U=v=>{s(v),o(v.trim()?"search":"section"),v.trim()&&h(!1)},m=()=>{o("bookmarks"),s(""),h(!1)},p=()=>{o("landing"),s(""),h(!1)},f=()=>{l("all"),y("all")};return c.jsx(Iu.Provider,{value:{activeSection:n,searchQuery:r,activeView:a,filterPriority:i,filterDifficulty:d,sidebarOpen:g,setFilterPriority:l,setFilterDifficulty:y,navigateTo:x,triggerSearch:U,openBookmarks:m,goToLanding:p,toggleSidebar:k,closeSidebar:b,resetFilters:f},children:e})}function ln(){const e=R.useContext(Iu);if(!e)throw new Error("useApp must be used inside AppProvider");return e}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ru=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=R.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:o,...i},l)=>R.createElement("svg",{ref:l,...wm,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Ru("lucide",s),...i},[...o.map(([d,y])=>R.createElement(d,y)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(e,n)=>{const t=R.forwardRef(({className:r,...s},a)=>R.createElement(bm,{ref:a,iconNode:n,className:Ru(`lucide-${vm(e)}`,r),...s}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=ne("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=ne("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=ne("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=ne("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=ne("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=ne("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=ne("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=ne("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=ne("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ne("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=ne("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=ne("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=ne("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=ne("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=ne("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=ne("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=ne("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=ne("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=ne("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=ne("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Lm({accentColor:e="#6366f1"}){const{searchQuery:n,triggerSearch:t}=ln(),[r,s]=R.useState(n),a=R.useRef(null);R.useEffect(()=>{const i=setTimeout(()=>{t(r)},300);return()=>clearTimeout(i)},[r]),R.useEffect(()=>{n||s("")},[n]);const o=()=>{var i;s(""),t(""),(i=a.current)==null||i.focus()};return R.useEffect(()=>{const i=l=>{var d,y;l.key==="/"&&document.activeElement!==a.current&&(l.preventDefault(),(d=a.current)==null||d.focus()),l.key==="Escape"&&(o(),(y=a.current)==null||y.blur())};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]),c.jsxs("div",{className:"search-bar",children:[c.jsx(Ou,{className:"search-bar__icon",size:15,"aria-hidden":!0}),c.jsx("input",{ref:a,type:"search",className:"search-bar__input",placeholder:'Search…  "/"',value:r,onChange:i=>s(i.target.value),onFocus:i=>{i.target.style.borderColor=e},onBlur:i=>{i.target.style.borderColor=""},"aria-label":"Search questions, answers, and tags"}),r&&c.jsx("button",{type:"button",onClick:o,className:"search-bar__clear","aria-label":"Clear search",children:c.jsx(Du,{size:13})})]})}const Nu="ip-progress";function Mm(){try{const e=localStorage.getItem(Nu);return e?JSON.parse(e):{}}catch{return{}}}function Bm(e){try{localStorage.setItem(Nu,JSON.stringify(e))}catch{console.warn("Could not save progress to localStorage")}}function pr(){const[e,n]=R.useState(Mm);R.useEffect(()=>{Bm(e)},[e]);const t=R.useCallback(i=>{n(l=>({...l,[i]:!l[i]}))},[]),r=R.useCallback(i=>!!e[i],[e]),s=R.useCallback((i=[])=>({reviewed:i.filter(d=>!!e[d.id]).length,total:i.length}),[e]),a=R.useCallback((i=[])=>{let l=0,d=0;return i.forEach(y=>{y.questions.forEach(g=>{l++,e[g.id]&&d++})}),{reviewed:d,total:l}},[e]),o=R.useCallback(()=>{n({})},[]);return{toggleReviewed:t,isReviewed:r,getSectionProgress:s,getOverallProgress:a,resetProgress:o}}const Lu="ip-bookmarks";function Fm(){try{const e=localStorage.getItem(Lu);return e?JSON.parse(e):[]}catch{return[]}}function Um(e){try{localStorage.setItem(Lu,JSON.stringify(e))}catch{console.warn("Could not save bookmarks to localStorage")}}function Xo(){const[e,n]=R.useState(Fm);R.useEffect(()=>{Um(e)},[e]);const t=R.useCallback(i=>{n(l=>l.includes(i)?l.filter(d=>d!==i):[...l,i])},[]),r=R.useCallback(i=>e.includes(i),[e]),s=R.useCallback(()=>e,[e]),a=e.length,o=R.useCallback(()=>{n([])},[]);return{toggleBookmark:t,isBookmarked:r,getBookmarkIds:s,bookmarkCount:a,clearBookmarks:o}}const cl={hr:{color:"#FF6F61",dim:"rgba(255, 111, 97, 0.22)",pastel:"rgba(255, 111, 97, 0.42)",textOnDarkCard:"#1E293B"},python:{color:"#7E57C2",dim:"rgba(126, 87, 194, 0.22)",pastel:"rgba(126, 87, 194, 0.42)",textOnDarkCard:"#1E293B"},selenium:{color:"#43A047",dim:"rgba(67, 160, 71, 0.22)",pastel:"rgba(67, 160, 71, 0.42)",textOnDarkCard:"#1E293B"},framework:{color:"#8D5524",dim:"rgba(141, 85, 36, 0.24)",pastel:"rgba(141, 85, 36, 0.45)",textOnDarkCard:"#FFFFFF"},api:{color:"#FFA726",dim:"rgba(255, 167, 38, 0.24)",pastel:"rgba(255, 167, 38, 0.45)",textOnDarkCard:"#1E293B"},sql:{color:"#FDD835",dim:"rgba(253, 216, 53, 0.24)",pastel:"rgba(253, 216, 53, 0.45)",textOnDarkCard:"#1E293B"},jenkins:{color:"#FB8C00",dim:"rgba(251, 140, 0, 0.24)",pastel:"rgba(251, 140, 0, 0.42)",textOnDarkCard:"#1E293B"},banking:{color:"#42A5F5",dim:"rgba(66, 165, 245, 0.24)",pastel:"rgba(66, 165, 245, 0.42)",textOnDarkCard:"#1E293B"},scenario:{color:"#2E7D32",dim:"rgba(46, 125, 50, 0.22)",pastel:"rgba(46, 125, 50, 0.42)",textOnDarkCard:"#1E293B"},manual:{color:"#C9A227",dim:"rgba(201, 162, 39, 0.24)",pastel:"rgba(201, 162, 39, 0.42)",textOnDarkCard:"#1E293B"},git:{color:"#6B8E23",dim:"rgba(107, 142, 35, 0.24)",pastel:"rgba(107, 142, 35, 0.42)",textOnDarkCard:"#1E293B"},deepdive:{color:"#304FFE",dim:"rgba(48, 79, 254, 0.24)",pastel:"rgba(48, 79, 254, 0.45)",textOnDarkCard:"#FFFFFF"},fakecheck:{color:"#C96A23",dim:"rgba(201, 106, 35, 0.24)",pastel:"rgba(201, 106, 35, 0.42)",textOnDarkCard:"#1E293B"},highpriority:{color:"#D32F2F",dim:"rgba(211, 47, 47, 0.24)",pastel:"rgba(211, 47, 47, 0.45)",textOnDarkCard:"#FFFFFF"},java:{color:"#E53935",dim:"rgba(229, 57, 53, 0.22)",pastel:"rgba(229, 57, 53, 0.42)",textOnDarkCard:"#FFFFFF"},javascript:{color:"#F7DF1E",dim:"rgba(247, 223, 30, 0.24)",pastel:"rgba(247, 223, 30, 0.45)",textOnDarkCard:"#1E293B"},springboot:{color:"#6DB33F",dim:"rgba(109, 179, 63, 0.22)",pastel:"rgba(109, 179, 63, 0.42)",textOnDarkCard:"#1E293B"}};function Wm(e){return cl[e]??cl.framework}function zm(e){const n=Wm(e.id);return{...e,color:n.color,colorDim:n.dim,pastel:n.pastel,darkCardText:n.textOnDarkCard??"#1E293B"}}function ul(e,n,t={}){return{id:e,question:n,answer:t.answer??null,code:t.code??[],source:t.source??null,tags:t.tags??[],category:t.category??null,difficulty:t.difficulty??"medium",priority:t.priority??"medium"}}function M(e,n,t={}){return n.map((r,s)=>{const a=String(s+1).padStart(2,"0");if(typeof r=="string")return ul(`${e}-${a}`,r,t);const{question:o,...i}=r;return ul(`${e}-${a}`,o,{...t,...i})})}function ue({id:e,number:n,title:t,description:r,priority:s,color:a,questions:o}){return{id:e,number:n,title:t,description:r,priority:s,color:a,questions:o}}const u=e=>({name:"GeeksForGeeks",url:`https://www.geeksforgeeks.org/${e}/`}),Je=e=>({name:"TutorialsPoint",url:`https://www.tutorialspoint.com/${e}`}),F=e=>({name:"BrowserStack",url:`https://www.browserstack.com/guide/${e}`}),Y=(e="javase/tutorial/java/concepts/")=>({name:"Oracle Docs",url:`https://docs.oracle.com/${e}`}),fs={name:"dev.java",url:"https://dev.java/learn/"},j=e=>({name:"MDN Web Docs",url:`https://developer.mozilla.org/en-US/docs/${e}`}),Hm=[{question:"Tell me about yourself.",answer:`Structure your answer in 3 parts: Present (current role + key skills), Past (relevant experience that led here), Future (why this role excites you). Keep it under 90 seconds. Avoid reading your resume — tell a story instead.

Example: "I am currently working as a QA Automation Engineer at [company], where I build and maintain Selenium + pytest frameworks for payment applications. Over the past [X] years I moved from manual testing into automation and API testing. I am now looking for a role where I can deepen framework design and work in the banking domain."`,source:u("tell-me-about-yourself-in-interview"),tags:["behavioral","introduction","HR"],priority:"critical"},{question:"Walk me through your current project.",answer:`Cover these 5 points: (1) Application purpose and domain, (2) Your role and team size, (3) Tech stack — languages, tools, CI/CD, (4) Testing scope — modules, manual vs automation split, regression/smoke, (5) One concrete challenge you solved.

Example: "We test a SWIFT payment processing portal. I own the automation framework in Python/Selenium, integrate API tests with Postman/pytest, and run nightly Jenkins pipelines. I recently fixed flaky login tests by replacing implicit waits with explicit expected conditions."`,source:u("how-to-answer-tell-me-about-your-current-project"),tags:["behavioral","project","HR"],priority:"critical"},{question:"Explain your role in your current organization.",answer:`Describe reporting line, team structure, and day-to-day ownership. Cover: test planning, execution, automation, defect management, and collaboration with dev/BA/ops.

Example: "I report to the QA Lead in a squad of 4 testers. I am the primary automation owner — I write frameworks, review test scripts, maintain Jenkins jobs, and support production UAT. I also mentor junior testers on Python basics and participate in sprint ceremonies."`,source:u("how-to-explain-your-role-in-interview"),tags:["behavioral","HR"],priority:"critical"},{question:"Why are you looking for a job change?",answer:`Stay positive — never criticize your current employer. Valid reasons: growth, new tech stack, better automation exposure, domain interest, relocation, contract ending.

Example: "I have learned a lot in my current role, but the project is stabilizing and automation opportunities are limited. I want a role with stronger framework ownership, CI/CD integration, and exposure to modern API and cloud-based testing."`,source:u("why-are-you-looking-for-a-job-change"),tags:["behavioral","HR"],priority:"critical"},{question:"Why should we hire you?",answer:`Match your strengths to the job description. Highlight: relevant domain, automation skills, problem-solving, team collaboration, and quick learning.

Example: "I bring hands-on Selenium + Python automation, experience in banking payments, and a track record of reducing regression time by 40%. I communicate clearly with developers and business teams, and I take ownership of quality end-to-end — not just writing scripts."`,source:u("why-should-we-hire-you"),tags:["behavioral","HR"],priority:"critical"},{question:"What makes you suitable for Automation Testing?",answer:`Connect programming ability, testing mindset, and tool experience. Mention: coding skills (Python/Java), understanding of SDLC, debugging ability, framework knowledge, and passion for efficiency.

Example: "I enjoy coding and have built reusable Page Object frameworks. I think like a tester — I cover edge cases and negative flows — but I also think like a developer — clean code, version control, and CI integration. That combination makes me effective at automation."`,source:u("automation-tester-interview-questions"),tags:["behavioral","automation","HR"],priority:"high"},{question:"Difference between QA Analyst and Automation Tester?",answer:`QA Analyst focuses on overall quality — test planning, manual execution, test cases, defect logging, process adherence, UAT support. Automation Tester writes and maintains automated scripts, builds frameworks, integrates with CI/CD, and reduces manual regression effort.

Key difference: QA Analyst is process- and coverage-oriented; Automation Tester is code- and efficiency-oriented. Many roles combine both.`,source:u("difference-between-qa-analyst-and-automation-tester"),tags:["QA","automation","comparison"],priority:"high"},{question:"What challenges are you facing in your current project?",answer:`Pick a real challenge and explain how you handle it — shows honesty and problem-solving. Examples: flaky tests, unstable test data, unclear requirements, tight deadlines, legacy code without locators.

Example: "Our biggest challenge is dynamic locators in a React frontend. I addressed it by working with devs to add data-testid attributes and by building a custom wait utility that retries with multiple locator strategies before failing."`,source:u("common-challenges-in-software-testing"),tags:["behavioral","HR"],priority:"medium"},{question:"Describe a production issue you handled.",answer:`Use STAR: Situation, Task, Action, Result. Show calmness, triage skills, communication, and follow-up.

Example: "A payment message failed validation in production after a release. I reproduced it in UAT, identified a missing XML field mapping, logged a critical defect with logs and screenshots, coordinated a hotfix, and added an automated regression test to prevent recurrence. The fix went live within 4 hours."`,source:u("production-support-interview-questions"),tags:["behavioral","production","HR"],priority:"high"},{question:"Describe your biggest achievement.",answer:`Quantify impact where possible. Examples: built framework from scratch, cut regression time, found critical bug before release, improved CI pipeline stability.

Example: "I built our automation framework from scratch using Python, Selenium, and pytest. We went from 100% manual regression (3 days) to 70% automated coverage with a 6-hour nightly run. Defect leakage dropped and the team freed up time for exploratory testing."`,source:u("what-is-your-greatest-achievement-interview-question"),tags:["behavioral","HR"],priority:"medium"},{question:"Describe a conflict with developers/business users.",answer:`Show professionalism — focus on resolution, not blame. Use STAR format.

Example: "A developer marked my defect as 'Not Reproducible' but I had logs and screenshots. I set up a 15-minute call, walked through steps live, and we found an environment-specific config issue. We agreed on clearer environment tagging going forward. The relationship improved because I stayed factual, not emotional."`,source:u("conflict-resolution-interview-questions"),tags:["behavioral","conflict","HR"],priority:"medium"},{question:"Why banking domain?",answer:`Show genuine interest in domain complexity: compliance, accuracy, payment flows, security.

Example: "Banking testing is high-stakes — a missed decimal or wrong SWIFT field has real financial impact. I enjoy the challenge of validating payment lifecycles, message formats, and regulatory rules. My experience with SWIFT MT/MX and reconciliation gives me confidence to add value quickly."`,source:u("domain-knowledge-interview-questions"),tags:["domain","banking","HR"],priority:"high"},{question:"Explain your daily activities.",answer:`Walk through a typical day: stand-up, test execution, automation maintenance, defect triage, meetings, documentation.

Example: "Morning stand-up → execute assigned test cases and triage failures → fix/update automation scripts → attend refinement/planning as needed → log defects with clear evidence → end-of-day status update. On regression days I monitor Jenkins runs and investigate failures."`,source:u("software-tester-daily-activities"),tags:["behavioral","HR"],priority:"medium"},{question:"What percentage of work is automation vs manual?",answer:`Be honest and explain the split logically. Typical mid-level: 60–70% automation, 30–40% manual/exploratory.

Example: "Currently about 65% automation — I maintain scripts, framework, and CI jobs. 35% manual — new feature exploratory testing, UAT support, and complex scenarios not yet automated. I am actively increasing automation coverage for stable modules."`,source:u("manual-testing-vs-automation-testing"),tags:["behavioral","automation","HR"],priority:"medium"},{question:"What kind of applications have you tested?",answer:`List types with brief context: web apps, APIs, mobile (if applicable), domain (banking, e-commerce, etc.).

Example: "Web-based payment portals, SWIFT message validation tools, REST APIs for transaction status, and internal admin dashboards. Mostly browser-based on Chrome/Firefox with some headless CI execution."`,source:u("types-of-software-testing"),tags:["behavioral","testing","HR"],priority:"medium"},{question:"Have you worked in Agile?",answer:`Confirm experience and name ceremonies you participate in: sprint planning, daily stand-up, refinement, review, retrospective.

Example: "Yes, Scrum with 2-week sprints. I join planning to estimate testing effort, daily stand-ups for blockers, refinement to clarify acceptance criteria, and retrospectives to suggest process improvements. Testing is embedded in the sprint, not a separate phase."`,source:u("agile-testing-interview-questions"),tags:["Agile","process","HR"],priority:"high"},{question:"Explain your sprint lifecycle.",answer:`Map testing activities to each sprint phase:

Planning — estimate stories, identify test scope. Development — write test cases, start automation. Testing — execute manual + automated, log defects. Review — demo tested features. Retro — discuss what worked.

Example: "Day 1–2: review stories, write cases. Day 3–7: dev delivers, I test and automate. Day 8–9: regression + bug fixes. Day 10: sprint review and retro."`,source:u("scrum-sprint-lifecycle"),tags:["Agile","sprint","HR"],priority:"high"},{question:"How do you estimate testing effort?",answer:`Factors: story complexity, number of acceptance criteria, new vs existing module, automation vs manual, environment readiness, regression impact.

Techniques: experience-based, task breakdown, test case count × time per case, historical velocity, three-point estimation (optimistic/likely/pessimistic).

Example: "I break each story into test scenarios, estimate hours per scenario, add buffer for defect retesting, and flag dependencies like test data or API availability."`,source:u("test-estimation-techniques"),tags:["estimation","planning","HR"],priority:"medium"},{question:"What tools are you currently using?",answer:`Organize by category — be specific with versions if asked.

Automation: Selenium, pytest, Python. API: Postman, requests. CI/CD: Jenkins, Git. Reporting: Allure / HTML reports. Defect: Jira. DB: SQL Developer / pgAdmin. Other: Git, Confluence, BrowserStack (if applicable).`,source:u("software-testing-tools"),tags:["tools","HR"],priority:"medium"},{question:"Why do you want this company?",answer:`Research the company beforehand. Mention: product/domain fit, tech stack, culture, growth, reputation.

Example: "I admire your focus on digital payments and the scale of transactions you handle. The role combines automation framework work with banking domain — exactly where I want to grow. Your investment in CI/CD and modern testing practices aligns with how I work."`,source:u("why-do-you-want-to-work-for-our-company"),tags:["behavioral","motivation","HR"],priority:"high"},{question:"Explain your notice period situation.",answer:`Be direct and honest. State notice period length, whether negotiable, buyout option, and earliest joining date.

Example: "My notice period is 60 days as per company policy, but my manager is open to negotiation to 30 days for the right opportunity. I can join immediately after relieving. I am already wrapping up documentation for a smooth handover."`,source:u("notice-period-interview-questions"),tags:["HR","logistics"],priority:"medium"},{question:"What are your strengths and weaknesses?",answer:`Strengths: pick 2–3 relevant ones (attention to detail, debugging, collaboration, self-learning).

Weaknesses: pick a real one with improvement action — never say "I work too hard."

Example strengths: "Strong debugging of flaky tests and clear defect reporting."
Example weakness: "I sometimes dive deep into automation before confirming requirements — I now validate acceptance criteria in refinement before writing scripts."`,source:u("strengths-and-weaknesses-in-interview"),tags:["behavioral","HR"],priority:"high"}],Jm=ue({id:"hr",number:1,title:"HR + Introduction",description:"These decide whether the interviewer continues comfortably or starts attacking your weak areas. Nail the narrative first.",priority:"critical",color:"var(--red)",questions:M("hr",Hm,{difficulty:"easy"})}),P=e=>({name:"GeeksForGeeks",url:`https://www.geeksforgeeks.org/${e}/`}),Vm=e=>({name:"TutorialsPoint",url:`https://www.tutorialspoint.com/${e}`}),Gm=[{question:"Difference between list, tuple, set, dictionary.",answer:`List: ordered, mutable, allows duplicates, uses []. Tuple: ordered, immutable, allows duplicates, uses (). Set: unordered, mutable, no duplicates, uses {}. Dictionary: ordered (Py3.7+), mutable key-value pairs, keys unique, uses {key: val}.

Use lists for sequences you modify, tuples for fixed records, sets for unique collections/membership tests, dicts for labeled data.`,source:P("python-list-vs-tuple-vs-dict-vs-set")},{question:"Mutable vs immutable objects.",answer:`Mutable objects can be changed in-place after creation (list, dict, set, bytearray). Immutable objects cannot be changed — a new object is created on modification (int, float, str, tuple, frozenset, bytes).

Immutability makes objects hashable (usable as dict keys) and safer to share across threads.`,source:P("mutable-vs-immutable-in-python")},{question:"What is slicing?",answer:`Slicing extracts a sub-sequence using [start:stop:step]. start is inclusive, stop is exclusive, step controls increment. Omitting start defaults to 0, omitting stop defaults to end, omitting step defaults to 1.

Works on strings, lists, tuples. Negative indices count from the end. [::−1] reverses a sequence.`,code:[{language:"python",snippet:`s = 'Interview'
print(s[0:5])    # Inter
print(s[::-1])   # weivretnI
print([1,2,3,4][1:3])  # [2, 3]`}],source:P("python-list-slicing")},{question:"Difference between append() and extend().",answer:`append(x) adds a single element to the end of the list (even if x is a list, it becomes one nested element). extend(iterable) adds each element from the iterable individually.

Example: [1,2].append([3,4]) → [1,2,[3,4]]. [1,2].extend([3,4]) → [1,2,3,4].`,code:[{language:"python",snippet:`a = [1, 2]
a.append([3, 4])   # [1, 2, [3, 4]]

b = [1, 2]
b.extend([3, 4])   # [1, 2, 3, 4]`}],source:P("append-extend-python")},{question:"What is unpacking?",answer:`Unpacking assigns elements of an iterable to multiple variables in one statement. Tuple unpacking: a, b, c = [1, 2, 3]. The * operator collects remaining items: first, *rest = [1, 2, 3, 4]. ** unpacks dictionaries into keyword arguments.

Commonly used to swap variables: a, b = b, a.`,code:[{language:"python",snippet:`a, b, c = (10, 20, 30)
first, *middle, last = [1, 2, 3, 4, 5]
# first=1, middle=[2,3,4], last=5`}],source:P("packing-unpacking-python")},{question:"Difference between deep copy and shallow copy.",answer:`Shallow copy creates a new object but references nested objects inside the original (copy.copy() or list slicing). Changes to nested objects affect both copies.

Deep copy recursively copies all nested objects, creating fully independent copies (copy.deepcopy()). Use deep copy when nested mutability matters.`,code:[{language:"python",snippet:`import copy
original = [[1, 2], [3, 4]]
shallow = copy.copy(original)
deep = copy.deepcopy(original)
shallow[0][0] = 99  # also changes original[0][0]
deep[0][0] = 99     # original unchanged`}],source:P("copy-python")},{question:"What are lambda functions?",answer:`A lambda is an anonymous one-expression function: lambda args: expression. Used for short throwaway functions, often with map(), filter(), sorted(key=...).

Limitations: single expression only, no statements, no annotations. For complex logic, use def instead.`,code:[{language:"python",snippet:`square = lambda x: x ** 2
nums = [3, 1, 4]
sorted(nums, key=lambda x: -x)  # [4, 3, 1]`}],source:P("python-lambda-anonymous-functions")},{question:"What are decorators?",answer:`A decorator is a function that wraps another function (or class) to extend its behavior without modifying its source. Syntax @decorator above def is shorthand for func = decorator(func).

Common uses: logging, timing, authentication, retry logic, and pytest fixtures.`,code:[{language:"python",snippet:`def log_calls(fn):
    def wrapper(*args, **kwargs):
        print(f'Calling {fn.__name__}')
        return fn(*args, **kwargs)
    return wrapper

@log_calls
def greet(name):
    return f'Hello {name}'`}],source:P("decorators-in-python")},{question:"What are generators?",answer:`Generators produce values lazily using yield instead of return, pausing execution and resuming on next(). Created with generator functions or generator expressions (x*2 for x in range(5)).

Memory-efficient for large datasets — values generated one at a time, not stored all at once.`,code:[{language:"python",snippet:`def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for num in count_up_to(3):
    print(num)  # 1, 2, 3`}],source:P("generators-in-python")},{question:"Difference between is and ==.",answer:`== compares values (equality). is compares object identity (same memory address).

Use == for value comparison. Use is only for singletons like None, True, False. Two lists with same content are == but not is. Small integers (−5 to 256) may be cached and appear identical with is.`,code:[{language:"python",snippet:`a = [1, 2]
b = [1, 2]
print(a == b)  # True
print(a is b)  # False

x = None
print(x is None)  # True — preferred over x == None`}],source:P("difference-between-is-and-in-python")},{question:"Explain *args and **kwargs.",answer:`*args collects extra positional arguments as a tuple. **kwargs collects extra keyword arguments as a dictionary. Names are convention — only * and ** matter.

Used in functions that accept variable arguments and when forwarding args to another function.`,code:[{language:"python",snippet:`def demo(a, *args, **kwargs):
    print(a, args, kwargs)

demo(1, 2, 3, x=10, y=20)
# 1 (2, 3) {'x': 10, 'y': 20}`}],source:P("args-kwargs-python")},{question:"What is list comprehension?",answer:`List comprehension creates a list in a single concise line: [expression for item in iterable if condition]. Faster and more readable than equivalent for-loop + append for simple transforms.

Dict and set comprehensions use similar syntax with {} or {key: val}.`,code:[{language:"python",snippet:`squares = [x**2 for x in range(6)]
evens = [x for x in range(10) if x % 2 == 0]
word_lens = {w: len(w) for w in ['hi', 'hello']}`}],source:P("list-comprehension-in-python")},{question:"What is exception handling?",answer:`Exception handling manages runtime errors gracefully using try, except, else, finally. try runs risky code; except catches specific exceptions; else runs if no exception; finally always runs (cleanup).

Always catch specific exceptions, not bare except. Use raise to re-throw or custom exceptions.`,code:[{language:"python",snippet:`try:
    result = 10 / int(input_val)
except ZeroDivisionError:
    print('Cannot divide by zero')
except ValueError:
    print('Invalid number')
finally:
    print('Done')`}],source:P("python-exception-handling")},{question:"Difference between compile-time and runtime errors.",answer:`Python is interpreted — compile-time errors occur before execution: SyntaxError, IndentationError (parser cannot understand code). Runtime errors occur during execution: TypeError, ValueError, ZeroDivisionError, IndexError.

Python has no traditional compile step like C++; "compile-time" here means parse/bytecode-compile phase before the code runs.`,source:P("errors-python")},{question:"Explain Python memory management.",answer:`Python uses private heap memory managed by the Python memory manager. Key mechanisms:

1. Reference counting — object deleted when count hits 0.
2. Garbage collector — detects and breaks reference cycles.
3. Memory pools — small object allocator (pymalloc) for efficiency.

Objects are accessed via references; assignment never copies data unless explicitly copied.`,source:P("memory-management-in-python")},{question:"What are modules and packages?",answer:`A module is a single .py file containing reusable code. A package is a directory of modules with __init__.py, allowing hierarchical imports (e.g., os.path).

Import with import module or from package import module. Python searches sys.path for modules.`,source:P("python-modules")},{question:"What is __init__.py?",answer:`__init__.py marks a directory as a Python package (Py3.3+ namespace packages can omit it, but it is still best practice). It runs on package import and can initialize package-level variables or expose a public API via __all__.

Can be empty — its presence alone tells Python to treat the folder as a package.`,source:P("python-package-init-py-file")},{question:"Explain OOP concepts in Python.",answer:`Python supports Object-Oriented Programming with four pillars:

1. Encapsulation — bundling data + methods, hiding internals.
2. Inheritance — child class inherits parent attributes/methods.
3. Polymorphism — same interface, different implementations.
4. Abstraction — hiding complexity, exposing essentials.

Everything in Python is an object, including functions and classes.`,source:P("object-oriented-programming-oops-concept-in-python")},{question:"Method overloading vs overriding.",answer:`Overriding: subclass provides its own implementation of a parent method with the same name — resolved at runtime (polymorphism).

Overloading: multiple methods with same name but different parameters. Python does NOT support traditional overloading — last def wins. Simulate with default args or @functools.singledispatch.`,code:[{language:"python",snippet:`class Animal:
    def speak(self):
        return '...'

class Dog(Animal):
    def speak(self):  # overriding
        return 'Woof'`}],source:P("method-overloading-vs-method-overriding-in-python")},{question:"What is inheritance?",answer:`Inheritance lets a child class (derived) acquire attributes and methods from a parent class (base). Syntax: class Child(Parent). Supports code reuse and is-a relationships.

Python supports single, multilevel, hierarchical, and multiple inheritance. Use super() to call parent methods.`,code:[{language:"python",snippet:`class Person:
    def __init__(self, name):
        self.name = name

class Employee(Person):
    def __init__(self, name, emp_id):
        super().__init__(name)
        self.emp_id = emp_id`}],source:P("inheritance-in-python")},{question:"Multiple inheritance in Python?",answer:`A class can inherit from multiple parents: class Child(A, B). Python resolves method lookup using MRO (C3 linearization) — visible via ClassName.__mro__ or mro().

Diamond problem is handled by MRO order. Mixins are a common pattern for adding behavior without deep hierarchies.`,code:[{language:"python",snippet:`class A:
    def show(self): return 'A'
class B:
    def show(self): return 'B'
class C(A, B): pass

print(C().show())       # A
print(C.__mro__)        # method resolution order`}],source:P("multiple-inheritance-in-python")},{question:"What is polymorphism?",answer:`Polymorphism means "many forms" — same method name behaves differently based on the object. Python achieves this via duck typing (if it walks and quacks...) and method overriding.

Example: len() works on str, list, dict. Different classes implement __len__ differently.`,source:P("polymorphism-in-python")},{question:"Static method vs class method vs instance method.",answer:`Instance method: first param is self, operates on instance data.

Class method (@classmethod): first param is cls, operates on class-level data, can be used as alternative constructors.

Static method (@staticmethod): no self/cls, behaves like a plain function inside the class namespace — utility functions related to the class.`,code:[{language:"python",snippet:`class Demo:
    count = 0
    def inst(self): return 'instance'
    @classmethod
    def cls_method(cls): return cls.count
    @staticmethod
    def util(x, y): return x + y`}],source:P("difference-between-static-method-class-method-and-instance-method-in-python")},{question:"What is encapsulation?",answer:`Encapsulation bundles data (attributes) and methods that operate on it into a class, restricting direct access to internals. Python uses naming conventions: _single underscore (internal use), __double underscore (name mangling to _ClassName__attr).

Use @property for controlled getter/setter access without breaking the interface.`,source:P("encapsulation-in-python")},{question:"What is abstraction?",answer:`Abstraction hides complex implementation details and exposes only essential features. In Python, achieved via abstract base classes (abc module) and interfaces.

@abstractmethod forces subclasses to implement specific methods — you cannot instantiate the abstract class directly.`,code:[{language:"python",snippet:`from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def area(self):
        return 3.14 * self.r ** 2`}],source:P("abstract-classes-in-python")},{question:"Explain MRO (Method Resolution Order).",answer:`MRO is the order Python searches base classes when resolving a method. Calculated using C3 linearization algorithm. View with ClassName.mro() or ClassName.__mro__.

Critical in multiple inheritance — ensures predictable, consistent method lookup. super() follows MRO, not just the direct parent.`,code:[{language:"python",snippet:`class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print(D.__mro__)
# D, B, C, A, object`}],source:P("method-resolution-order-in-python-inheritance")}],Qm=[{question:"Reverse a string.",answer:"Slice with step −1 is the Pythonic approach. Also works with reversed() + join for readability.",code:[{language:"python",snippet:`s = 'hello'
print(s[::-1])              # olleh
print(''.join(reversed(s))) # olleh`}],source:P("python-program-to-reverse-a-string")},{question:"Reverse a number.",answer:"Extract digits using modulo and build the reversed integer. Handle negative numbers by preserving sign.",code:[{language:"python",snippet:`def reverse_number(n):
    sign = -1 if n < 0 else 1
    n = abs(n)
    rev = 0
    while n:
        rev = rev * 10 + n % 10
        n //= 10
    return sign * rev

print(reverse_number(12345))  # 54321`}],source:P("python-program-to-reverse-a-number")},{question:"Palindrome program.",answer:"A palindrome reads the same forwards and backwards. Compare string with its reverse, or use two-pointer approach.",code:[{language:"python",snippet:`def is_palindrome(s):
    s = s.lower().replace(' ', '')
    return s == s[::-1]

print(is_palindrome('madam'))  # True
print(is_palindrome('hello'))  # False`}],source:P("python-program-to-check-if-a-string-is-palindrome-or-not")},{question:"Prime number check.",answer:"A prime is divisible only by 1 and itself. Check divisibility up to √n for efficiency.",code:[{language:"python",snippet:`def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(17))  # True`}],source:P("python-program-to-check-whether-a-number-is-prime-or-not")},{question:"Fibonacci series.",answer:"Each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8... Generate iteratively or recursively (with memoization for large n).",code:[{language:"python",snippet:`def fib(n):
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print(fib(8))  # [0, 1, 1, 2, 3, 5, 8, 13]`}],source:P("python-program-for-nth-fibonacci-number")},{question:"Factorial.",answer:"Factorial of n (n!) = n × (n−1) × ... × 1. Use loop or math.factorial(). 0! = 1 by definition.",code:[{language:"python",snippet:`def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

print(factorial(5))  # 120`}],source:P("python-program-to-find-factorial-of-a-number")},{question:"Armstrong number.",answer:"An Armstrong number equals the sum of its digits each raised to the power of the number of digits. Example: 153 = 1³ + 5³ + 3³.",code:[{language:"python",snippet:`def is_armstrong(n):
    s = str(n)
    power = len(s)
    return n == sum(int(d) ** power for d in s)

print(is_armstrong(153))   # True
print(is_armstrong(123))   # False`}],source:P("python-program-to-check-armstrong-number")},{question:"Anagram check.",answer:"Two strings are anagrams if they contain the same characters in the same frequency. Sort both strings and compare, or use Counter.",code:[{language:"python",snippet:`from collections import Counter

def is_anagram(a, b):
    return Counter(a.lower()) == Counter(b.lower())

print(is_anagram('listen', 'silent'))  # True`}],source:P("python-program-to-check-if-two-strings-are-anagram-or-not")},{question:"Count vowels in string.",answer:"Iterate through the string and count characters in the vowel set a, e, i, o, u (case-insensitive).",code:[{language:"python",snippet:`def count_vowels(s):
    vowels = 'aeiouAEIOU'
    return sum(1 for c in s if c in vowels)

print(count_vowels('Interview Prep'))  # 5`}],source:P("python-program-to-count-vowels-in-a-string")},{question:"Find duplicate characters.",answer:"Use a dictionary or Counter to track character frequency. Characters with count > 1 are duplicates.",code:[{language:"python",snippet:`from collections import Counter

def duplicates(s):
    counts = Counter(s)
    return {ch: cnt for ch, cnt in counts.items() if cnt > 1}

print(duplicates('programming'))  # {'r': 2, 'g': 2, 'm': 2}`}],source:P("python-program-to-find-duplicates-in-a-string")},{question:"Remove duplicates from list.",answer:"Convert to set (loses order) or use dict.fromkeys() (preserves insertion order in Py3.7+). List comprehension with seen set also works.",code:[{language:"python",snippet:`nums = [1, 2, 2, 3, 1, 4]
unique = list(dict.fromkeys(nums))
print(unique)  # [1, 2, 3, 4]`}],source:P("python-remove-duplicates-from-a-list")},{question:"Find largest/smallest element.",answer:"Use built-in max() and min(), or iterate manually. For empty lists, handle ValueError.",code:[{language:"python",snippet:`nums = [3, 7, 2, 9, 1]
print(max(nums))  # 9
print(min(nums))  # 1

# manual
largest = nums[0]
for n in nums:
    if n > largest:
        largest = n`}],source:P("python-program-to-find-largest-and-smallest-element-in-an-array")},{question:"Sort list without using sort().",answer:"Implement bubble sort, selection sort, or insertion sort. Bubble sort repeatedly swaps adjacent out-of-order elements.",code:[{language:"python",snippet:`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([5, 3, 1, 4, 2]))`}],source:P("bubble-sort-in-python")},{question:"Swap two numbers.",answer:"Python allows tuple unpacking swap without a temp variable: a, b = b, a. Also works with arithmetic or XOR (not recommended in Python).",code:[{language:"python",snippet:`a, b = 10, 20
a, b = b, a
print(a, b)  # 20 10`}],source:P("python-program-to-swap-two-numbers")},{question:"Count frequency of characters.",answer:"Use collections.Counter for a one-liner, or a dict with get/chars as keys.",code:[{language:"python",snippet:`from collections import Counter

freq = Counter('mississippi')
print(dict(freq))  # {'m': 1, 'i': 4, 's': 4, 'p': 2}`}],source:P("python-program-to-count-the-characters-frequency-in-a-string")},{question:"Find missing number in array.",answer:"Given n distinct numbers from 1 to n+1, one is missing. Use sum formula: expected = n*(n+1)/2, subtract actual sum. Or XOR all indices and values.",code:[{language:"python",snippet:`def missing_number(nums):
    n = len(nums)
    expected = n * (n + 1) // 2
    return expected - sum(nums)

print(missing_number([1, 2, 4, 5, 6]))  # 3`}],source:P("find-the-missing-number-in-python")},{question:"Merge two lists.",answer:"Use + operator, extend(), or list unpacking [*a, *b]. For sorted merge (merge step of merge sort), use two pointers.",code:[{language:"python",snippet:`a = [1, 3, 5]
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
result += a[i:] + b[j:]`}],source:P("python-program-to-merge-two-sorted-arrays")},{question:"Find second largest number.",answer:"Sort and pick second element, or track largest and second_largest in one pass (more efficient).",code:[{language:"python",snippet:`def second_largest(nums):
    unique = sorted(set(nums), reverse=True)
    return unique[1] if len(unique) >= 2 else None

print(second_largest([10, 5, 20, 8, 20]))  # 10`}],source:P("python-program-to-find-second-largest-number-in-a-list")},{question:"Check if number is perfect/disarium/automorphic.",answer:`Perfect number: sum of proper divisors equals the number (6 = 1+2+3).
Disarium number: sum of digits raised to power of their position equals the number (135 = 1¹+3²+5³).
Automorphic number: square ends with the number itself (25² = 625).`,code:[{language:"python",snippet:`def is_perfect(n):
    return sum(i for i in range(1, n) if n % i == 0) == n

def is_automorphic(n):
    sq = str(n * n)
    return sq.endswith(str(n))

print(is_perfect(6))       # True
print(is_automorphic(25))  # True`}],source:P("perfect-number-in-python")},{question:"Binary to decimal conversion.",answer:"Use int(binary_string, 2) built-in, or manual: multiply each bit by 2^position and sum.",code:[{language:"python",snippet:`binary = '1011'
print(int(binary, 2))  # 11

# manual
decimal = sum(int(bit) * 2**i for i, bit in enumerate(reversed(binary)))
print(decimal)  # 11`}],source:P("python-program-to-convert-binary-to-decimal")},{question:"Decimal to binary.",answer:"Use bin(n)[2:] to strip 0b prefix, or repeatedly divide by 2 collecting remainders.",code:[{language:"python",snippet:`n = 11
print(bin(n)[2:])  # 1011

# manual
num, bits = n, ''
while num:
    bits = str(num % 2) + bits
    num //= 2
print(bits)  # 1011`}],source:P("python-program-to-convert-decimal-to-binary")},{question:"String compression logic.",answer:"Run-length encoding: replace consecutive duplicates with char + count. Example: aaabb → a3b2. Only compress if result is shorter.",code:[{language:"python",snippet:`def compress(s):
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

print(compress('aaabbcc'))  # a3b2c2`}],source:P("string-compression-in-python")},{question:"Find repeated words in sentence.",answer:"Split sentence into words, use Counter or dict to find words appearing more than once. Normalize case and strip punctuation for accuracy.",code:[{language:"python",snippet:`from collections import Counter
import re

def repeated_words(sentence):
    words = re.findall(r'\\b\\w+\\b', sentence.lower())
    counts = Counter(words)
    return [w for w, c in counts.items() if c > 1]

print(repeated_words('the cat and the dog and the bird'))  # ['the', 'and']`}],source:P("python-program-to-count-words-in-a-sentence")}],$m=[{question:"Explain multithreading.",answer:`Multithreading runs multiple threads within one process, sharing the same memory space. In Python, use the threading module. Good for I/O-bound tasks (network, file, waiting for UI).

Due to the GIL, threads do not achieve true parallel CPU execution for CPU-bound work — use multiprocessing instead for that.`,code:[{language:"python",snippet:`import threading

def task(name):
    print(f'Thread {name} running')

t1 = threading.Thread(target=task, args=('A',))
t2 = threading.Thread(target=task, args=('B',))
t1.start(); t2.start()
t1.join(); t2.join()`}],source:P("multithreading-python")},{question:"Multithreading vs multiprocessing.",answer:`Multithreading: multiple threads, one process, shared memory, GIL limits CPU parallelism — best for I/O-bound.

Multiprocessing: multiple processes, separate memory, true parallel CPU usage — best for CPU-bound (heavy computation, data processing).

In test automation: parallel browser tests often use multiprocessing or pytest-xdist, not threads.`,source:P("difference-between-multiprocessing-and-multithreading-in-python")},{question:"What is GIL?",answer:`The Global Interpreter Lock (GIL) is a mutex that allows only one thread to execute Python bytecode at a time in CPython. It simplifies memory management but prevents true multi-core parallelism for CPU-bound threads.

I/O operations release the GIL, so threads still help for I/O-bound work. Alternatives: multiprocessing, or other Python implementations (Jython, IronPython) without GIL.`,source:P("global-interpreter-lock-in-python")},{question:"What is concurrency?",answer:`Concurrency is structuring a program to handle multiple tasks in overlapping time periods — tasks make progress without necessarily running simultaneously. Parallelism means tasks run at the same time on multiple cores.

Python achieves concurrency via threading (I/O-bound), asyncio (async/await), or multiprocessing (CPU-bound parallelism).`,source:P("concurrency-in-python")},{question:"Async programming?",answer:`Async programming uses async/await syntax with an event loop (asyncio module). Coroutines yield control while waiting for I/O instead of blocking the thread.

Ideal for many concurrent network requests or API calls. Not faster for CPU-heavy work. In automation, useful for parallel API testing without threads.`,code:[{language:"python",snippet:`import asyncio

async def fetch():
    await asyncio.sleep(1)  # non-blocking wait
    return 'done'

async def main():
    results = await asyncio.gather(fetch(), fetch())
    print(results)

asyncio.run(main())`}],source:P("asyncio-in-python")},{question:"File handling in Python.",answer:`Use open() with a context manager (with statement) for safe automatic close. Modes: r (read), w (write), a (append), b (binary), + (read/write).

read(), readline(), readlines() for reading; write(), writelines() for writing. pathlib.Path is the modern approach for file paths.`,code:[{language:"python",snippet:`with open('data.txt', 'r', encoding='utf-8') as f:
    content = f.read()

with open('out.txt', 'w') as f:
    f.write('Hello')`}],source:P("file-handling-python")},{question:"CSV/Excel reading.",answer:`CSV: use csv module or pandas.read_csv(). Excel: use openpyxl or pandas.read_excel() (requires openpyxl/xlrd).

Pandas is standard in test automation for data-driven testing — read test data from spreadsheets and feed to pytest parametrization.`,code:[{language:"python",snippet:`import csv
import pandas as pd

# CSV
with open('tests.csv') as f:
    rows = list(csv.DictReader(f))

# Excel
df = pd.read_excel('testdata.xlsx', sheet_name='Login')
print(df.head())`}],source:P("reading-csv-files-in-python")},{question:"Logging implementation.",answer:`Use the logging module instead of print(). Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL. Configure once with basicConfig or dictConfig.

In frameworks: log to file + console, include timestamp and level. log = logging.getLogger(__name__) in each module.`,code:[{language:"python",snippet:`import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.FileHandler('test.log'),
        logging.StreamHandler()
    ]
)
logging.info('Test started')`}],source:P("logging-in-python")},{question:"Regex questions.",answer:`Regular expressions match patterns in text. Use re module: re.search() (first match), re.findall() (all matches), re.sub() (replace), re.compile() (reusable pattern).

Common patterns: \\d+ (digits), \\w+ (word), .* (any), ^ $ (start/end). Raw strings r"pattern" avoid escape issues.`,code:[{language:"python",snippet:`import re

text = 'Order ID: 12345, Status: PASS'
id_match = re.search(r'ID: (\\d+)', text)
print(id_match.group(1))  # 12345

emails = re.findall(r'[\\w.-]+@[\\w.-]+', 'a@b.com c@d.com')`}],source:P("python-regex-re-module")},{question:"JSON parsing.",answer:`json.loads() parses JSON string to Python dict/list. json.dumps() serializes Python object to JSON string. json.load() / json.dump() for file I/O.

Essential for API test automation — parse responses and assert on fields.`,code:[{language:"python",snippet:`import json

data = '{"name": "test", "status": 200}'
parsed = json.loads(data)
print(parsed['status'])  # 200

print(json.dumps(parsed, indent=2))`}],source:P("json-in-python")},{question:"API response handling.",answer:`Use requests library: response = requests.get/post(url, headers=..., json=...). Key attributes: status_code, json(), text, headers, elapsed.

Assert status code and response body in tests. Handle timeouts, auth tokens, and session cookies via requests.Session().`,code:[{language:"python",snippet:`import requests

resp = requests.post(
    'https://api.example.com/login',
    json={'user': 'admin', 'pass': 'secret'},
    timeout=10
)
assert resp.status_code == 200
data = resp.json()
assert data['token']`}],source:P("python-requests-tutorial")},{question:"Database connection using Python.",answer:`Use DB-API drivers: sqlite3 (built-in), psycopg2 (PostgreSQL), pymysql/mysql-connector (MySQL). Pattern: connect → cursor → execute → fetch → commit → close.

In test automation: verify DB state after API/UI actions, seed test data, cleanup after tests.`,code:[{language:"python",snippet:`import sqlite3

conn = sqlite3.connect('test.db')
cur = conn.cursor()
cur.execute('SELECT * FROM users WHERE id = ?', (1,))
rows = cur.fetchall()
conn.close()`}],source:P("python-database-connection")},{question:"Virtual environment.",answer:`A virtual environment (venv) isolates project dependencies from system Python. Create: python -m venv venv. Activate: venv\\Scripts\\activate (Windows) or source venv/bin/activate (Mac/Linux).

Always use a venv per project — avoids version conflicts between automation projects.`,source:Vm("python/python_venv.htm")},{question:"Pip requirements.",answer:`pip install package installs dependencies. pip freeze > requirements.txt captures exact versions. pip install -r requirements.txt installs all dependencies for a project.

Pin versions in CI/CD for reproducible builds. Common in automation: selenium, pytest, requests, openpyxl, allure-pytest.`,code:[{language:"text",snippet:`# requirements.txt example
selenium==4.15.0
pytest==7.4.3
requests==2.31.0
openpyxl==3.1.2`}],source:P("how-to-use-pip-requirements-file-in-python")},{question:"Pytest fixtures.",answer:`Fixtures provide setup/teardown and shared test data. Defined with @pytest.fixture. Tests request fixtures by name as parameters. scope controls lifetime: function, class, module, session.

conftest.py holds shared fixtures. yield fixtures run teardown after yield.`,code:[{language:"python",snippet:`import pytest

@pytest.fixture
def browser():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_login(browser):
    browser.get('https://example.com')
    assert 'Login' in browser.title`}],source:P("pytest-fixtures")},{question:"Parametrization in pytest.",answer:`@pytest.mark.parametrize runs the same test with multiple input sets. Pass arg names as string and list of tuples.

Ideal for data-driven UI/API tests — one test function, many data rows from a list, CSV, or Excel.`,code:[{language:"python",snippet:`import pytest

@pytest.mark.parametrize('user,password,expected', [
    ('admin', 'pass123', 200),
    ('guest', 'wrong',   401),
    ('',      '',        400),
])
def test_login(user, password, expected):
    resp = api_login(user, password)
    assert resp.status_code == expected`}],source:P("parameterized-testing-with-pytest")}],Xm={category:"Basic Python",tags:["python","core"],difficulty:"easy",priority:"high"},Km={category:"Python Coding Questions",tags:["python","coding"],difficulty:"medium",priority:"high"},Ym={category:"Advanced Python",tags:["python","advanced"],difficulty:"medium",priority:"critical"},Zm=ue({id:"python",number:2,title:"Python Core",description:"This section destroys many automation testers because they only know Selenium syntax. Master Python fundamentals and coding problems.",priority:"critical",color:"var(--amber)",questions:[...M("py",Gm,Xm),...M("pyc",Qm,Km),...M("pya",$m,Ym)]}),ef=[{question:"What is Selenium?",answer:`Selenium is an open-source suite of tools for automating web browsers. It supports functional and regression testing of web applications across browsers and platforms. Selenium is not a single tool — it includes WebDriver, IDE, and Grid.

WebDriver is the primary component used in professional automation frameworks today.`,source:u("selenium-interview-questions")},{question:"Selenium components?",answer:`1. Selenium WebDriver — API to control browsers programmatically (most used).
2. Selenium IDE — browser extension for record-and-playback (prototyping only).
3. Selenium Grid — runs tests in parallel across machines/browsers.
4. Selenium RC (deprecated) — old server-based approach, replaced by WebDriver.`,source:u("components-of-selenium")},{question:"Why Selenium over other tools?",answer:`Selenium is free, open-source, supports multiple languages (Python, Java, C#), all major browsers, and integrates with TestNG/pytest, Jenkins, and CI/CD. Large community and extensive documentation.

Alternatives like Cypress, Playwright, and Katalon exist — Selenium remains industry standard due to flexibility and vendor-neutral browser control.`,source:u("why-selenium-is-best-automation-tool")},{question:"Advantages and limitations of Selenium.",answer:`Advantages: free, multi-browser, multi-language, parallel execution with Grid, large ecosystem, CI/CD friendly.

Limitations: web-only (no native mobile/desktop), no built-in reporting, CAPTCHA/OTP/barcode cannot be automated easily, steep learning curve for framework design, flaky tests if waits/locators are poor, no automatic test maintenance.`,source:u("advantages-and-disadvantages-of-selenium")},{question:"Difference between Selenium RC and WebDriver.",answer:`Selenium RC used a JavaScript-based server (Selenium Server) as a proxy between code and browser — slower, more complex. WebDriver communicates directly with browser native APIs — faster, simpler, more stable.

WebDriver is the modern standard. RC is deprecated and removed from Selenium 3+.`,source:u("difference-between-selenium-rc-and-webdriver")},{question:"WebDriver architecture.",answer:`Client Library (Python/Java code) → JSON Wire Protocol / W3C WebDriver Protocol → Browser Driver (ChromeDriver, GeckoDriver) → Browser.

Your test script sends commands (find element, click) as HTTP requests. The driver translates them to browser-native calls. Each browser needs its own driver executable.`,source:u("selenium-webdriver-architecture")},{question:"How browser communicates with Selenium?",answer:`Selenium WebDriver uses the W3C WebDriver protocol (formerly JSON Wire Protocol). Test code sends HTTP REST commands to the browser driver, which controls the browser.

Example flow: driver.get(url) → HTTP POST to driver → ChromeDriver opens URL in Chrome → response sent back to test script.`,source:u("how-does-selenium-webdriver-work")}],nf=[{question:"Types of locators.",answer:`8 locator strategies in Selenium:
1. ID — fastest, most reliable if unique
2. Name
3. ClassName
4. TagName
5. LinkText / PartialLinkText
6. CSS Selector
7. XPath
8. DOM (rarely used)

Priority: ID > Name > CSS > XPath. Always prefer stable, unique locators.`,source:u("locators-in-selenium")},{question:"Difference between XPath and CSS Selector.",answer:`CSS Selector: faster, simpler syntax, good for class/id/tag-based selection, cannot traverse up the DOM easily.

XPath: more powerful, can traverse any direction (parent, sibling, ancestor), supports text-based matching, but slower and more brittle if overused.

Use CSS for simple locators; XPath when you need text, axes, or complex hierarchy.`,source:u("css-selectors-vs-xpath")},{question:"Absolute vs relative XPath.",answer:`Absolute XPath starts from root (/html/body/div[1]/...) — breaks with any DOM change, avoid in automation.

Relative XPath starts from anywhere (//div[@id='login']) — more resilient, preferred approach.

Always use relative XPath with unique attributes, not positional indexes like div[3]/span[2].`,source:u("absolute-and-relative-xpath-in-selenium")},{question:"Dynamic XPath.",answer:`Dynamic XPath handles elements whose attributes change at runtime (dynamic IDs, auto-generated classes). Strategies:

- contains(): //input[contains(@id, 'username')]
- starts-with(): //button[starts-with(@id, 'submit')]
- text(): //span[text()='Login']
- Combine stable parent + relative child
- Use data-testid attributes (best practice)`,code:[{language:"python",snippet:`# Dynamic ID partial match
driver.find_element(By.XPATH, "//input[contains(@id, 'email')]")

# Text-based
driver.find_element(By.XPATH, "//button[normalize-space()='Submit']")`}],source:u("dynamic-xpath-in-selenium")},{question:"Write XPath for difficult elements.",answer:`Techniques for hard elements:

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
)`}],source:u("xpath-axes-in-selenium")},{question:"Following-sibling, ancestor, descendant usage.",answer:`XPath axes navigate relative to current node:

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
//div[@id='menu']//a[text()='Settings']`}],source:u("xpath-axes-in-selenium")},{question:"When CSS is preferred over XPath?",answer:`Prefer CSS when:
- Element has stable id, class, or name
- Simple hierarchy selection (#login-form input[type=email])
- Performance matters (CSS is generally faster)
- You do not need text or upward traversal

Prefer XPath when you need text matching, sibling/parent navigation, or complex conditional logic.`,source:u("css-selectors-in-selenium")}],tf=[{question:"Difference between find_element and find_elements.",answer:`find_element(locator) — returns the first matching WebElement. Throws NoSuchElementException if not found.

find_elements(locator) — returns a list of all matches. Returns empty list [] if none found (no exception).

Use find_elements when checking existence without failing, or when iterating multiple elements.`,code:[{language:"python",snippet:`from selenium.webdriver.common.by import By

# Single element
btn = driver.find_element(By.ID, 'submit')

# Multiple — no exception if empty
items = driver.find_elements(By.CLASS_NAME, 'list-item')
print(len(items))`}],source:u("find-element-and-find-elements-in-selenium")},{question:"How to handle dropdowns?",answer:`Use Select class from selenium.webdriver.support.ui for standard <select> elements.

Methods: select_by_visible_text(), select_by_value(), select_by_index(), deselect_all().

For custom dropdowns (non-select), click to open and click the option element directly.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import Select

dropdown = Select(driver.find_element(By.ID, 'country'))
dropdown.select_by_visible_text('India')
dropdown.select_by_value('IN')`}],source:u("how-to-handle-dropdown-in-selenium")},{question:"How to handle autosuggestions?",answer:`Type into input, wait for suggestion list to appear, then click the matching option.

Steps: locate input → send_keys(partial text) → explicit wait for suggestions → click desired item by text or index.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

inp = driver.find_element(By.ID, 'search')
inp.send_keys('Pyth')

option = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//li[contains(text(),'Python')]"))
)
option.click()`}],source:u("handling-auto-suggestion-in-selenium")},{question:"How to handle checkboxes/radio buttons?",answer:`Use is_selected() to check state. Use click() to toggle checkbox or select radio button.

For radio groups, find by value or associated label. Do not assume click is needed — check state first to avoid deselecting.`,code:[{language:"python",snippet:`checkbox = driver.find_element(By.ID, 'terms')
if not checkbox.is_selected():
    checkbox.click()

radio = driver.find_element(By.XPATH, "//input[@type='radio' and @value='male']")
radio.click()`}],source:u("how-to-handle-checkbox-in-selenium")},{question:"Handle hidden elements.",answer:`Hidden elements (display:none, visibility:hidden) cannot be clicked directly. Options:

1. JavaScript click: driver.execute_script("arguments[0].click()", element)
2. Scroll into view first, then click
3. Remove hidden attribute via JS (use cautiously)
4. Interact with visible proxy element if available`,code:[{language:"python",snippet:`elem = driver.find_element(By.ID, 'hidden-btn')
driver.execute_script('arguments[0].click();', elem)

# Scroll into view
driver.execute_script('arguments[0].scrollIntoView(true);', elem)
elem.click()`}],source:u("how-to-click-on-hidden-element-in-selenium")},{question:"Handle dynamic elements.",answer:`Dynamic elements load asynchronously or change attributes. Solutions:

1. Explicit waits (WebDriverWait + expected_conditions)
2. Stable locators (data-testid, partial attribute match)
3. Retry logic with custom wait
4. Avoid Thread.sleep — use condition-based waits`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

element = WebDriverWait(driver, 15).until(
    EC.visibility_of_element_located((By.ID, 'dynamic-content'))
)`}],source:u("handling-dynamic-elements-in-selenium")},{question:"Handle stale element exception.",answer:`StaleElementReferenceException occurs when an element reference is outdated — DOM was refreshed or page re-rendered after you found the element.

Fix: re-find the element before interacting, use explicit waits, avoid storing WebElement references across page navigations. Retry wrapper is common in frameworks.`,code:[{language:"python",snippet:`from selenium.common.exceptions import StaleElementReferenceException

def safe_click(driver, locator, retries=3):
    for _ in range(retries):
        try:
            driver.find_element(*locator).click()
            return
        except StaleElementReferenceException:
            continue`}],source:u("stale-element-reference-exception-selenium")},{question:"Handle element click intercepted exception.",answer:`ElementClickInterceptedException — another element (overlay, modal, cookie banner) covers the target. Fixes:

1. Wait for overlay to disappear
2. Scroll element into view
3. JavaScript click
4. Close popup/banner first`,code:[{language:"python",snippet:`from selenium.webdriver.common.action_chains import ActionChains

# Scroll then click
elem = driver.find_element(By.ID, 'submit')
ActionChains(driver).move_to_element(elem).click().perform()

# JS click fallback
driver.execute_script('arguments[0].click();', elem)`}],source:u("element-click-intercepted-exception-selenium")},{question:"Handle NoSuchElementException.",answer:`Thrown when find_element cannot locate the element. Causes: wrong locator, element not yet loaded, element in iframe, typo in attribute.

Fix: verify locator in DevTools, add explicit wait, check iframe context, use find_elements to check existence without crash.`,source:u("nosuchelementexception-in-selenium")},{question:"Difference between implicit and explicit wait.",answer:`Implicit wait: driver.implicitly_wait(10) — global setting, driver polls for element before throwing exception. Applies to all find_element calls.

Explicit wait: WebDriverWait + expected condition — waits for a specific condition on a specific element (clickable, visible). More precise and recommended.

Never mix many implicit waits with explicit waits — causes unpredictable delays.`,code:[{language:"python",snippet:`# Implicit — global
driver.implicitly_wait(10)

# Explicit — recommended
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, 'login-btn'))
)`}],source:u("implicit-wait-vs-explicit-wait-in-selenium")},{question:"Fluent wait?",answer:`FluentWait polls at a custom interval and ignores specific exceptions during the wait period. More flexible than WebDriverWait.

Use when you need custom polling frequency or to ignore StaleElementReferenceException during wait.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

wait = WebDriverWait(
    driver, timeout=30, poll_frequency=2,
    ignored_exceptions=[NoSuchElementException]
)
wait.until(EC.visibility_of_element_located((By.ID, 'result')))`}],source:u("fluent-wait-in-selenium")},{question:"Which wait do you prefer and why?",answer:`Explicit wait (WebDriverWait) — it waits for a specific condition rather than a fixed time, reducing flakiness and execution time. Encapsulate common waits in utility methods (wait_for_clickable, wait_for_visible).

Avoid Thread.sleep — wastes time and does not guarantee readiness. Set implicit wait to 0 when using explicit waits consistently.`,source:F("selenium-wait-for-page-to-load")},{question:"What is synchronization issue?",answer:`Synchronization issues occur when test speed outpaces application load speed — test tries to interact before element is ready. Symptoms: NoSuchElementException, stale element, click intercepted.

Fix with proper waits, page load strategy, and ensuring AJAX/dynamic content completes before assertions.`,source:u("synchronization-in-selenium-webdriver")}],rf=[{question:"Handle multiple windows/tabs.",answer:"Use driver.window_handles (list of IDs) and driver.switch_to.window(handle). Get current with driver.current_window_handle. Always switch back to original window after validation.",code:[{language:"python",snippet:`main = driver.current_window_handle
driver.find_element(By.LINK_TEXT, 'Open New Tab').click()

for handle in driver.window_handles:
    if handle != main:
        driver.switch_to.window(handle)
        break

# do work in new tab
driver.close()
driver.switch_to.window(main)`}],source:u("how-to-handle-multiple-windows-in-selenium")},{question:"Handle frames/iFrames.",answer:`Switch context with driver.switch_to.frame(index/name/WebElement). Always switch back with driver.switch_to.default_content() when done.

Nested frames require switching into each level. Elements outside frame are not accessible while inside frame context.`,code:[{language:"python",snippet:`driver.switch_to.frame('iframe-id')
# or
driver.switch_to.frame(driver.find_element(By.TAG_NAME, 'iframe'))

driver.find_element(By.ID, 'inner-btn').click()
driver.switch_to.default_content()`}],source:u("how-to-handle-frames-in-selenium")},{question:"Handle alerts/popups.",answer:`JavaScript alerts/confirms/prompts: use driver.switch_to.alert. Methods: accept(), dismiss(), send_keys() (prompt), .text.

HTML modals are NOT alerts — handle them as regular DOM elements with explicit waits.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
print(alert.text)
alert.accept()  # or alert.dismiss()`}],source:u("alert-popup-handling-in-selenium-webdriver")},{question:"Handle file upload/download.",answer:`Upload: send_keys with absolute file path directly to <input type="file"> — no need to open OS dialog.

Download: configure browser profile to set download directory, then verify file exists after click. ChromeOptions with prefs for download.default_directory.`,code:[{language:"python",snippet:`upload = driver.find_element(By.ID, 'file-upload')
upload.send_keys('/absolute/path/to/file.pdf')

# Chrome download config
opts = webdriver.ChromeOptions()
opts.add_experimental_option('prefs', {
    'download.default_directory': '/tmp/downloads'
})`}],source:u("file-upload-in-selenium")},{question:"Handle authentication popup.",answer:`HTTP Basic Auth popup: pass credentials in URL — https://username:password@host.com. Or use Chrome DevTools Protocol / AutoIt (Windows) for native dialogs.

Form-based login: automate normally with find_element + send_keys. Never hardcode credentials in scripts — use environment variables or secrets manager.`,code:[{language:"python",snippet:`import os

# Form login
driver.find_element(By.ID, 'user').send_keys(os.getenv('TEST_USER'))
driver.find_element(By.ID, 'pass').send_keys(os.getenv('TEST_PASS'))
driver.find_element(By.ID, 'login').click()`}],source:u("how-to-handle-login-popup-in-selenium-webdriver")},{question:"Execute JavaScript in Selenium.",answer:"driver.execute_script(js, *args) runs JavaScript in browser context. Common uses: click hidden elements, scroll, remove overlays, get page load state, set attribute values.",code:[{language:"python",snippet:`# Scroll to bottom
driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')

# Click via JS
driver.execute_script('arguments[0].click();', element)

# Get return value
title = driver.execute_script('return document.title;')`}],source:u("javascriptexecutor-in-selenium")},{question:"Scroll page.",answer:"Methods: scrollIntoView on element, window.scrollBy pixels, scroll to bottom/top via JS, ActionChains move_to_element for hover menus.",code:[{language:"python",snippet:`elem = driver.find_element(By.ID, 'footer')
driver.execute_script('arguments[0].scrollIntoView(true);', elem)

# Scroll down 500px
driver.execute_script('window.scrollBy(0, 500);')`}],source:u("scroll-down-in-selenium-webdriver")},{question:"Screenshot capture.",answer:`driver.save_screenshot('path.png') — full page screenshot. element.screenshot('element.png') — specific element.

In pytest: capture screenshot on failure in conftest.py using request.node and driver fixture. Attach to Allure/HTML reports.`,code:[{language:"python",snippet:`driver.save_screenshot('screenshots/failure.png')

# Element screenshot
elem = driver.find_element(By.ID, 'error-msg')
elem.screenshot('error_element.png')`}],source:u("how-to-take-screenshot-in-selenium-webdriver")}],sf=[{question:"How would you automate OTP-based login?",answer:`Approaches:
1. Test environment: disable OTP or use static test OTP from backend team
2. Read OTP from test email/SMS API (Mailosaur, Twilio test API)
3. Fetch OTP from database in test env
4. Mock OTP validation via API stub

Never automate production OTP SMS — use test hooks agreed with dev team.`,source:F("automate-otp-authentication-selenium")},{question:"How would you automate CAPTCHA?",answer:`CAPTCHA is designed to block automation. Options:
1. Disable CAPTCHA in test/staging environment (best practice)
2. Use test bypass key from dev team
3. Mock CAPTCHA service in test env

Do NOT use third-party CAPTCHA solving services in professional test suites — unreliable and against most ToS.`,source:u("how-to-handle-captcha-in-selenium")},{question:"How would you handle dynamic IDs?",answer:`1. Use partial match: contains(@id, 'stable-part')
2. Use data-testid or data-qa attributes (request from devs)
3. CSS attribute selectors: [id^='prefix']
4. Locate by stable parent + relative XPath
5. Avoid absolute XPath with indexes`,code:[{language:"python",snippet:`driver.find_element(By.CSS_SELECTOR, '[data-testid="login-button"]')
driver.find_element(By.XPATH, "//button[contains(@id, 'submit-btn')]")`}],source:u("dynamic-xpath-in-selenium")},{question:"How would you validate broken links?",answer:`Collect all <a href> elements, send HTTP HEAD/GET request to each URL, assert status code is 200. Use requests library alongside Selenium, or Java HttpURLConnection.

Skip mailto:, javascript:, and anchor-only links.`,code:[{language:"python",snippet:`import requests

links = driver.find_elements(By.TAG_NAME, 'a')
for link in links:
    url = link.get_attribute('href')
    if url and url.startswith('http'):
        resp = requests.head(url, timeout=5)
        assert resp.status_code < 400, f'Broken: {url}'`}],source:u("find-broken-links-in-selenium")},{question:"How would you validate UI alignment?",answer:`Compare element location and size using .location, .size, .rect. Assert relative positions (button below label, elements aligned). Visual regression tools (Applitools, Percy) compare screenshots pixel-by-pixel.

For manual-style checks: get bounding boxes of two elements and compare y-coordinates for horizontal alignment.`,source:u("ui-testing-with-selenium")},{question:"How would you test pagination?",answer:"Verify: page 1 loads with expected row count, Next/Previous buttons work, page numbers update, last page disables Next, first page disables Previous, data changes between pages, URL/page param updates correctly.",code:[{language:"python",snippet:`rows = driver.find_elements(By.CSS_SELECTOR, 'table tbody tr')
assert len(rows) <= 10  # page size

driver.find_element(By.LINK_TEXT, 'Next').click()
WebDriverWait(driver, 10).until(
    EC.text_to_be_present_in_element((By.ID, 'page-num'), '2')
)`}],source:u("pagination-handling-in-selenium")},{question:"How would you test a search feature?",answer:"Test cases: valid search returns results, invalid/no results message, partial match, special characters, empty search, case sensitivity, result count, pagination of results, search persistence on navigation back.",source:u("test-cases-for-search-functionality")},{question:"How would you automate table validation?",answer:"Read table rows/cells via find_elements on tr/td. Compare cell text against expected data from a list or Excel. Dynamic tables: use column headers to map indices, then iterate rows.",code:[{language:"python",snippet:`rows = driver.find_elements(By.CSS_SELECTOR, 'table tbody tr')
data = []
for row in rows:
    cols = row.find_elements(By.TAG_NAME, 'td')
    data.append([c.text for c in cols])

assert data[0] == ['John', 'Admin', 'Active']`}],source:u("handling-web-table-in-selenium")},{question:"How would you validate sorting functionality?",answer:"Click column header, read all values in that column, verify ascending/descending order in Python with sorted(). Click again to verify toggle. Test numeric vs alphabetic sort separately.",code:[{language:"python",snippet:`driver.find_element(By.XPATH, "//th[text()='Name']").click()

cells = driver.find_elements(By.CSS_SELECTOR, 'td.name-col')
names = [c.text for c in cells]
assert names == sorted(names)`}],source:u("sorting-in-web-table-selenium")},{question:"How would you automate calendar/date picker?",answer:"Approach depends on widget type. Standard HTML5 date input: send_keys('2024-01-15'). Custom widgets: click input, navigate month/year, click day cell by text or attribute. Use explicit waits after each navigation click.",code:[{language:"python",snippet:`# HTML5 date input
date_input = driver.find_element(By.CSS_SELECTOR, 'input[type="date"]')
date_input.send_keys('2024-06-15')

# Custom picker
driver.find_element(By.ID, 'date-picker').click()
driver.find_element(By.XPATH, "//td[@data-date='2024-06-15']").click()`}],source:u("how-to-handle-date-picker-in-selenium")},{question:"How would you handle flaky tests?",answer:`Root causes: poor locators, hard sleeps, test data dependency, environment instability, async loading.

Fixes: explicit waits, stable locators (data-testid), test isolation, retry only for known transient failures (pytest-rerunfailures), parallel-safe test data, screenshot + logs on failure, quarantine consistently failing tests until fixed.`,source:F("flaky-selenium-test")},{question:"How would you reduce execution time?",answer:"Run headless, parallel execution (pytest-xdist), skip unnecessary waits, reuse browser session where safe, run smoke subset on commit and full regression nightly, optimize locators, disable images in browser prefs, use API setup instead of UI for test data creation.",source:u("speed-up-selenium-test-cases-execution")},{question:"How would you run tests in parallel?",answer:`pytest-xdist: pytest -n 4 (4 workers). Each worker needs isolated browser instance and test data. Selenium Grid distributes tests across machines/browsers.

Ensure tests are independent — no shared state, unique user accounts, thread-safe reporting.`,code:[{language:"bash",snippet:`# Parallel with pytest-xdist
pytest tests/ -n 4 --dist loadscope

# Selenium Grid — point driver to hub
driver = webdriver.Remote(
    command_executor='http://localhost:4444',
    options=chrome_options
)`}],source:u("parallel-testing-in-selenium")},{question:"How would you run tests on multiple browsers?",answer:"Parameterize browser in pytest with @pytest.mark.parametrize. Use WebDriver Manager or Grid to provision Chrome, Firefox, Edge drivers. Run same test suite against each browser — catches browser-specific issues.",code:[{language:"python",snippet:`import pytest
from selenium import webdriver

@pytest.mark.parametrize('browser', ['chrome', 'firefox'])
def test_login(browser):
    if browser == 'chrome':
        driver = webdriver.Chrome()
    else:
        driver = webdriver.Firefox()
    driver.get('https://example.com')
    # ... test logic
    driver.quit()`}],source:u("cross-browser-testing-using-selenium-webdriver")}],af={category:"Selenium Basics",tags:["selenium","basics"],difficulty:"easy",priority:"high"},of={category:"Locators",tags:["selenium","locators","xpath"],difficulty:"medium",priority:"critical"},lf={category:"Web Elements",tags:["selenium","waits","elements"],difficulty:"medium",priority:"critical"},cf={category:"Browser Handling",tags:["selenium","browser"],difficulty:"medium",priority:"high"},uf={category:"Selenium Scenarios",tags:["selenium","scenarios"],difficulty:"hard",priority:"high"},df=ue({id:"selenium",number:3,title:"Selenium",description:"This section is guaranteed in automation interviews. Cover locators, waits, browser handling, and real-world scenarios.",priority:"critical",color:"var(--green)",questions:[...M("sel",ef,af),...M("loc",nf,of),...M("we",tf,lf),...M("bh",rf,cf),...M("scn",sf,uf)]}),pf=[{question:"Explain your automation framework architecture.",answer:`A solid QA automation framework is layered: test layer (pytest test files), page object layer (UI locators and actions), business/service layer (API helpers, workflows), utilities (logging, config, data), and reporting/CI integration.

Tests stay thin — they call page methods and assert outcomes. Page objects hide Selenium/Playwright details. Config and credentials live outside tests. This separation makes maintenance easier when the UI or environment changes.

Example: A login test calls LoginPage.enter_credentials() and LoginPage.click_submit(), then asserts dashboard URL — it never touches raw driver.find_element calls.`,code:[{language:"python",snippet:`# tests/test_login.py — thin test layer
def test_valid_login(driver, config):
    login = LoginPage(driver)
    login.open(config.base_url)
    login.login(config.test_user, config.test_password)
    assert DashboardPage(driver).is_loaded()`}],source:F("test-automation-framework-design")},{question:"Did you create framework or maintain it?",answer:`Be honest about your role. If you built it: describe requirements gathered (POM, pytest, reporting, CI), tech choices, folder layout, and how you onboarded the team with README and code reviews.

If you maintained it: describe fixing flaky tests, adding page objects for new features, improving waits, refactoring duplicate code into utilities, and keeping Jenkins jobs green.

Example: "I inherited a Selenium + pytest framework with 200 tests. I refactored hard-coded sleeps to explicit waits, introduced conftest fixtures for driver lifecycle, and added Allure reporting — failure rate in CI dropped from 15% to under 3%."`,source:u("automation-testing-interview-questions")},{question:"Explain folder structure.",answer:`A typical Python + Selenium/Playwright framework structure:

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
└── pytest.ini`}],source:Je("/selenium/selenium_automation_framework.htm")},{question:"Explain Page Object Model.",answer:`Page Object Model (POM) maps each UI page (or component) to a class. The class holds locators as attributes and exposes methods for user actions (click, type, select). Tests interact only with these methods, not raw locators.

When the UI changes, you update one page class instead of dozens of tests. POM also improves readability — test_login reads like a user story.

Example: LoginPage has locators for username, password, submit button, and methods login(user, pwd) that encapsulates the full flow.`,code:[{language:"python",snippet:`class LoginPage(BasePage):
    USERNAME = (By.ID, 'username')
    PASSWORD = (By.ID, 'password')
    SUBMIT   = (By.CSS_SELECTOR, 'button[type=submit]')

    def login(self, user, pwd):
        self.type(self.USERNAME, user)
        self.type(self.PASSWORD, pwd)
        self.click(self.SUBMIT)`}],source:u("page-object-model-for-automation")},{question:"Why POM?",answer:`Without POM, locators and Selenium calls are duplicated across tests. A single ID change breaks many files. POM centralizes locators and actions in one place per page.

Benefits: maintainability (one change point), readability (tests express intent), reusability (same page used by smoke and regression), and easier code review (reviewers see business actions, not XPath soup).

Example: If the login button ID changes from btn-login to login-submit, you update LoginPage only — 30 tests keep working without edits.`,source:u("advantages-of-page-object-model")},{question:"Hybrid framework?",answer:`A hybrid framework combines two or more approaches — commonly keyword-driven + data-driven + POM. Keywords describe actions (open browser, click, verify text); data files supply inputs; page objects implement the actual Selenium logic behind keywords.

Useful when manual testers or BAs contribute test cases in Excel/CSV while engineers maintain the underlying keyword library. Reduces coding for repetitive flows but needs discipline to avoid a messy keyword sprawl.

Example: A row in Excel says Action=Login, Username={user}, Password={pwd} — the keyword engine reads the row, loads user from a data sheet, and calls LoginPage.login().`,source:Je("/selenium/hybrid_framework.htm")},{question:"Data-driven framework?",answer:`Data-driven testing runs the same test logic with multiple data sets — from JSON, CSV, Excel, or pytest parametrize. Separates test data from test code so adding cases does not require new test methods.

In pytest, use @pytest.mark.parametrize or read external files in conftest. Assert the same outcomes for valid/invalid boundary cases.

Example: test_login runs 5 times with different username/password pairs — one test function, five data rows, five independent results in the report.`,code:[{language:"python",snippet:`import pytest

@pytest.mark.parametrize('user,pwd,expected', [
    ('valid@mail.com', 'Pass123', True),
    ('invalid', 'wrong', False),
    ('', 'Pass123', False),
])
def test_login(user, pwd, expected, login_page):
    result = login_page.login(user, pwd)
    assert result.success == expected`}],source:u("data-driven-testing")},{question:"Keyword-driven framework?",answer:`Keyword-driven framework defines reusable action keywords (OPEN_URL, CLICK, INPUT, VERIFY_TEXT) stored in a library. Test cases are written as sequences of keywords — often in spreadsheets — without Python/Java code per case.

Engine maps each keyword to an implementation function. Good for teams with mixed technical skills; downside is abstraction overhead and debugging indirection.

Example: Robot Framework is keyword-driven by design — "Click Button    Submit" calls the built-in or custom keyword implemented in Python libraries.`,source:u("keyword-driven-testing")},{question:"Explain utilities/helpers.",answer:`Utilities are shared, stateless helper modules — not tied to a single page. Common examples: explicit wait wrappers, screenshot capture, JSON/CSV readers, date generators, API client wrappers, DB query helpers, and random test data builders.

Keep utilities generic and well-tested. Page objects use utilities; tests should rarely import utilities directly except for special setup.

Example: wait_utils.wait_for_clickable(driver, locator, timeout=15) is used by every page class instead of repeating WebDriverWait boilerplate.`,code:[{language:"python",snippet:`def wait_for_visible(driver, locator, timeout=10):
    return WebDriverWait(driver, timeout).until(
        EC.visibility_of_element_located(locator)
    )

def read_json(path):
    with open(path) as f:
        return json.load(f)`}],source:u("test-automation-framework-best-practices")},{question:"How do you manage test data?",answer:`Strategies: (1) static JSON/CSV/YAML files in data/ folder versioned in Git; (2) pytest parametrize for small inline sets; (3) environment-specific data files (data/dev.json vs data/staging.json); (4) factories/faker for dynamic data; (5) DB seed scripts for integration tests.

Never commit real passwords or PII. Use secrets/env vars for credentials. Keep data independent from test logic so QA can add cases without touching code.

Example: users.json holds role-based accounts; conftest loads the file based on --env flag and injects test_user fixture into tests.`,code:[{language:"python",snippet:`# conftest.py
@pytest.fixture
def test_user(env):
    data = json.load(open(f'data/{env}/users.json'))
    return data['standard_user']`}],source:F("test-data-management-automation")},{question:"How do you manage configuration files?",answer:`Store environment settings in config files (config.ini, YAML, or .env) — base URL, timeouts, browser type, API endpoints. Load config once at session start via conftest or a Config singleton.

Override with CLI flags (--env=staging) or environment variables in Jenkins (BASE_URL, BROWSER). Never hardcode URLs or credentials in tests.

Example: config/dev.yaml has base_url: https://dev.app.com; Jenkins job sets ENV=staging and the framework loads config/staging.yaml automatically.`,code:[{language:"python",snippet:`import os, yaml

def load_config():
    env = os.getenv('ENV', 'dev')
    with open(f'config/{env}.yaml') as f:
        return yaml.safe_load(f)`}],source:u("configuration-management-in-test-automation")},{question:"Explain logging framework.",answer:`Use Python logging module — not print statements. Configure log level (DEBUG locally, INFO in CI), format with timestamp/thread/test name, and write to console plus rotating file (logs/test.log).

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
logger = logging.getLogger(__name__)`}],source:u("logging-in-python")},{question:"Explain reporting mechanism.",answer:`Reporting answers: what ran, pass/fail, duration, failure reason, screenshots, and trends over time. Common tools: pytest-html, Allure, ExtentReports (Java), or custom JSON + dashboard.

Hook into pytest hooks (pytest_runtest_makereport) to capture status and attach screenshots on failure. Publish HTML/XML to Jenkins artifacts or Allure server after the pipeline.

Example: After each failed test, conftest attaches screenshot and browser console log to the Allure report — reviewers see failure context without re-running.`,source:F("test-reporting-in-automation")},{question:"Explain reusable methods.",answer:`Reusable methods live in base page classes, utility modules, or shared fixtures. Examples: click_and_wait, scroll_into_view, safe_type (clear + send_keys), login_as_role(role), and api_post_with_auth(endpoint, body).

Rule: if two tests duplicate more than 3 lines, extract a method. Name methods by user intent (submit_order) not by Selenium API (click_button_id_x).

Example: BasePage.click(locator) wraps wait + click + log — every page inherits it instead of copying WebDriverWait code.`,code:[{language:"python",snippet:`class BasePage:
    def click(self, locator):
        el = wait_for_clickable(self.driver, locator)
        el.click()
        logger.info('Clicked %s', locator)`}],source:u("reusable-functions-in-test-automation")},{question:"How do you capture screenshots on failure?",answer:`Use pytest hook pytest_runtest_makereport in conftest.py. When call.when == "call" and report.failed, call driver.save_screenshot() with a timestamped filename under reports/screenshots/.

Attach to Allure with allure.attach.file() or embed in HTML report. Ensure screenshot dir exists and Jenkins archives it as a build artifact.

Example: On failure, save reports/screenshots/test_login_20240531_143022.png and log the path in the console output for quick access.`,code:[{language:"python",snippet:`@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    report = outcome.get_result()
    if report.when == 'call' and report.failed:
        driver = item.funcargs.get('driver')
        if driver:
            path = f'reports/screenshots/{item.name}.png'
            driver.save_screenshot(path)`}],source:F("screenshot-on-test-failure-selenium")},{question:"How do you retry failed test cases?",answer:`Options: (1) pytest-rerunfailures plugin — @pytest.mark.flaky(reruns=2, reruns_delay=1); (2) retry only in CI with --reruns 2; (3) Jenkins retry failed stage; (4) separate quarantine job for known flaky tests.

Use retries sparingly — they mask real bugs. Pair with flake detection (track tests that pass on rerun) and fix root cause (waits, test data, env stability).

Example: pytest tests/ --reruns 2 --reruns-delay 3 runs failed tests up to two more times before marking final failure.`,code:[{language:"bash",snippet:`pip install pytest-rerunfailures
pytest tests/ --reruns 2 --reruns-delay 2`}],source:u("pytest-rerun-failed-tests")},{question:"How do you integrate Jenkins?",answer:`Create a Pipeline or Freestyle job that: checks out code from Git, creates a virtualenv, installs requirements.txt, runs pytest with markers/env vars, publishes HTML/Allure report, and archives screenshots/logs.

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
}`}],source:u("jenkins-integration-with-selenium")},{question:"How do you execute from command line?",answer:`Run pytest from project root after activating venv and installing dependencies. Common flags: -v (verbose), -m smoke (marker), -k "login" (name filter), --env=staging (custom option via conftest), --headed/--headless, parallel with pytest-xdist (-n auto).

CI and local should use the same command for consistency. Document the canonical run command in README.

Example: pytest tests/ -m smoke -v --env=qa --tb=short runs only smoke-tagged tests against QA with short tracebacks.`,code:[{language:"bash",snippet:`python -m venv venv
source venv/bin/activate   # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
pytest tests/ -m regression -v --env=staging --html=reports/report.html`}],source:u("pytest-command-line")},{question:"Explain pytest.ini.",answer:`pytest.ini is the project-level pytest config file (also pyproject.toml [tool.pytest.ini_options]). It sets defaults so you do not repeat flags every run.

Common settings: testpaths = tests, python_files = test_*.py, addopts = -v --tb=short, markers (smoke, regression), log_cli = true, filterwarnings.

Example: Defining marker smoke in pytest.ini lets you run pytest -m smoke without registering markers manually each time.`,code:[{language:"ini",snippet:`[pytest]
testpaths = tests
python_files = test_*.py
addopts = -v --tb=short --strict-markers
markers =
    smoke: quick sanity tests
    regression: full suite`}],source:u("pytest-ini-configuration")},{question:"Explain conftest.py.",answer:`conftest.py is a special pytest file for shared fixtures and hooks. pytest auto-discovers it — no import needed. Place at project root or tests/ folder; nested conftest.py scopes fixtures to subfolders.

Typical contents: driver/browser fixture (setup/teardown), config loader, API session, database connection, screenshot-on-failure hook, and custom CLI options (--env, --browser).

Example: A session-scoped driver fixture starts Chrome once for all tests in a module; function-scoped fixture clears cookies between tests.`,code:[{language:"python",snippet:`# conftest.py
@pytest.fixture(scope='function')
def driver(request):
    drv = webdriver.Chrome()
    yield drv
    drv.quit()`}],source:u("pytest-conftest-py-file")},{question:"Explain fixtures.",answer:`Fixtures provide setup/teardown and dependency injection for tests. Declare with @pytest.fixture; tests receive them as parameters by name. Scopes: function (default), class, module, package, session — control how often setup runs.

Use yield for teardown after test completes. fixture can depend on other fixtures (driver → login_page → logged_in_user). Use @pytest.fixture(params=[...]) for parametrized fixtures.

Example: logged_in_user fixture depends on driver and config — test_checkout only requests logged_in_user and starts already authenticated.`,code:[{language:"python",snippet:`@pytest.fixture
def logged_in_user(driver, config):
    LoginPage(driver).login(config.user, config.password)
    yield config.user
    # teardown if needed`}],source:u("pytest-fixtures")},{question:"How do you generate HTML reports?",answer:`Popular options: pytest-html (pytest --html=report.html --self-contained-html), Allure (pytest --alluredir=results then allure serve), or junit XML + Jenkins HTML publisher.

pytest-html gives a single self-contained file good for email/artifact sharing. Allure gives rich dashboards with history, categories, and attachments.

Example: pytest tests/ --html=reports/report.html --self-contained-html generates one HTML file with pass/fail, duration, and embedded logs — attach to Jenkins build.`,code:[{language:"bash",snippet:`pip install pytest-html allure-pytest
pytest tests/ --html=reports/report.html --self-contained-html
pytest tests/ --alluredir=allure-results
allure serve allure-results`}],source:F("pytest-html-report")},{question:"How do you manage environment-specific execution?",answer:`Use --env CLI option (registered in conftest), ENV environment variable in Jenkins, or separate config YAML per environment. Fixtures read config and expose base_url, credentials reference, and feature flags.

Same test code runs against dev/qa/staging/prod — only config changes. Prod runs should use read-only test accounts and restricted markers (@pytest.mark.prod_safe).

Example: pytest tests/ --env=staging loads config/staging.yaml; Jenkins sets ENV=qa in job parameters for on-demand QA runs.`,code:[{language:"python",snippet:`def pytest_addoption(parser):
    parser.addoption('--env', default='dev')

@pytest.fixture(scope='session')
def config(request):
    env = request.config.getoption('--env')
    return load_config(env)`}],source:u("environment-configuration-testing")},{question:"How do you run smoke/regression suites?",answer:`Tag tests with pytest markers: @pytest.mark.smoke for critical path (login, checkout), @pytest.mark.regression for full coverage. Register markers in pytest.ini to avoid warnings.

Smoke runs on every commit (fast, <15 min). Regression runs nightly or pre-release. Jenkins jobs pass -m smoke or -m regression. Can combine: -m "smoke and not slow".

Example: PR pipeline runs pytest -m smoke; nightly job runs pytest -m regression --env=staging with parallel workers (-n 4).`,code:[{language:"bash",snippet:`pytest tests/ -m smoke -v          # PR / quick check
pytest tests/ -m regression -n 4  # nightly full suite`}],source:F("smoke-testing-vs-regression-testing")},{question:"Git branching strategy?",answer:`For automation teams: feature branches per story (feature/QA-123-login-tests), PR into develop/main, CI runs smoke on PR, full regression on merge to develop, release branch for stabilization.

Keep test code in same repo as framework (or dedicated automation repo linked to app releases). Tag framework versions to match app releases. Never commit secrets — use .gitignore for reports, screenshots, .env.

Example: Branch feature/add-payment-tests → PR → Jenkins smoke on PR → merge to develop → nightly regression on develop.`,source:u("git-branching-strategies")},{question:"How do you handle flaky scripts?",answer:`Flaky tests pass and fail without code changes. Fix systematically: (1) replace implicit waits/sleep with explicit waits; (2) isolate test data — no shared state; (3) mock unstable third parties; (4) quarantine flaky tests (@pytest.mark.quarantine) until fixed; (5) track flake rate in CI dashboard.

Do not only add retries — investigate root cause (timing, env, data collision, locator fragility). Use stable locators (data-testid over dynamic XPath).

Example: test_payment_flaked because two tests used same order ID — fix by generating unique order_id per test with uuid4() instead of increasing reruns.`,source:F("flaky-test-automation")}],mf=ue({id:"framework",number:4,title:"Framework",description:"This is the most important section for experienced candidates. Be ready to explain architecture, POM, reporting, and CI integration in detail.",priority:"critical",color:"var(--accent)",questions:M("fw",pf,{tags:["framework","architecture","pytest"],difficulty:"medium",priority:"critical"})}),ff=[{question:"What is API testing?",answer:`API testing validates application programming interfaces directly — business logic layer — without UI. Tests request/response, status codes, headers, payload structure, error handling, and performance.

Faster and more stable than UI tests. Catches bugs earlier. Essential for microservices and mobile backends.`,source:u("api-testing-interview-questions")},{question:"Difference between SOAP and REST.",answer:`SOAP: XML-only, strict standards (WSDL), built-in security (WS-Security), stateful possible, heavier payloads. Used in enterprise/banking legacy systems.

REST: architectural style, uses HTTP methods, supports JSON/XML, lightweight, stateless, cacheable. Dominant in modern web and mobile APIs.`,source:u("difference-between-soap-and-rest-web-services")},{question:"GET vs POST vs PUT vs PATCH vs DELETE.",answer:`GET — retrieve data, idempotent, no body (typically), cacheable.
POST — create resource, not idempotent.
PUT — replace entire resource, idempotent.
PATCH — partial update, idempotent.
DELETE — remove resource, idempotent.

Idempotent = same request repeated produces same result.`,code:[{language:"python",snippet:`import requests

requests.get('https://api.example.com/users/1')
requests.post('https://api.example.com/users', json={'name': 'Akash'})
requests.put('https://api.example.com/users/1', json={'name': 'Akash', 'role': 'QA'})
requests.patch('https://api.example.com/users/1', json={'role': 'Lead'})
requests.delete('https://api.example.com/users/1')`}],source:u("http-methods-get-post-put-patch-delete")},{question:"Status codes.",answer:`1xx Informational — 100 Continue
2xx Success — 200 OK, 201 Created, 204 No Content
3xx Redirection — 301 Moved, 302 Found, 304 Not Modified
4xx Client Error — 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable
5xx Server Error — 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable

In tests: always assert expected status code first.`,source:u("http-status-codes")},{question:"Authentication types.",answer:`Common API authentication methods:

1. API Key — key in header or query param
2. Basic Auth — Base64(username:password) in Authorization header
3. Bearer Token — token in Authorization: Bearer <token>
4. OAuth 2.0 — delegated access via access tokens
5. JWT — self-contained signed token
6. Session/Cookie — session ID after login`,source:u("api-authentication-methods")},{question:"Bearer token?",answer:`Bearer token authentication sends a token in the Authorization header. The server validates the token on each request. Format: Authorization: Bearer <access_token>.

Token is obtained from login/auth endpoint. Store securely in environment variables, not in source code. Tokens often expire — handle refresh flow.`,code:[{language:"python",snippet:`import requests

headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',
    'Content-Type': 'application/json'
}
resp = requests.get('https://api.example.com/profile', headers=headers)
assert resp.status_code == 200`}],source:u("bearer-token-authentication")},{question:"OAuth?",answer:`OAuth 2.0 is an authorization framework — allows apps to access user resources without sharing passwords. Roles: Resource Owner, Client, Authorization Server, Resource Server.

Flows: Authorization Code (most secure for web apps), Client Credentials (machine-to-machine), Password Grant (legacy, avoid). Returns access_token and optionally refresh_token.`,source:u("oauth-2-0-protocol")},{question:"Headers and payloads.",answer:`Headers carry metadata: Content-Type, Authorization, Accept, Cache-Control, custom headers (X-Request-ID).

Payload (body): data sent with POST/PUT/PATCH — usually JSON in REST APIs.

Content-Type: application/json tells server how to parse body. Accept header specifies expected response format.`,code:[{language:"python",snippet:`headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer <token>'
}
payload = {'username': 'testuser', 'password': 'secret'}
resp = requests.post(url, json=payload, headers=headers)`}],source:u("http-headers")},{question:"JSON vs XML.",answer:`JSON: lightweight, human-readable, native to JavaScript, faster to parse, dominant in REST APIs. Types: string, number, boolean, null, array, object.

XML: verbose, schema support (XSD), namespaces, still used in SOAP/banking (SWIFT MX). Better for complex document structures with strict validation.

For automation: json.loads() / response.json() in Python.`,source:u("json-vs-xml")},{question:"What is serialization/deserialization?",answer:`Serialization: convert object/data structure to storable/transmittable format (JSON string, XML). Deserialization: convert back to object.

In API testing: request body is serialized to JSON before sending; response JSON is deserialized to Python dict for assertions.`,code:[{language:"python",snippet:`import json

# Serialize
data = {'id': 1, 'status': 'PASS'}
json_str = json.dumps(data)

# Deserialize
parsed = json.loads('{"id": 1, "status": "PASS"}')
assert parsed['status'] == 'PASS'`}],source:u("serialization-in-python")},{question:"How do you validate response?",answer:`Validate at multiple levels:

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
assert isinstance(data['amount'], (int, float))`}],source:u("api-response-validation")},{question:"What tools have you used?",answer:`Common API testing tools:

Manual/Exploratory: Postman, Insomnia, Swagger UI
Automation: Python requests + pytest, REST Assured (Java), Karate DSL
Performance: JMeter, k6
Mocking: WireMock, MockServer
Documentation: Swagger/OpenAPI

Mention what you used and for what purpose (manual vs CI automation).`,source:u("api-testing-tools")},{question:"How do you automate APIs using Python?",answer:`Use requests library + pytest. Structure: test data (JSON/Excel), API client wrapper class, assertions, fixtures for auth token and base URL.

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
    assert resp.status_code == 201`}],source:u("api-testing-using-python-requests")},{question:"How do you chain APIs?",answer:`Chain APIs when one response feeds the next request — e.g., login → get token → create order → verify status.

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
    assert status.json()['state'] == 'COMPLETED'`}],source:u("api-chaining-in-automation")},{question:"How do you validate schema?",answer:`JSON Schema defines expected structure — field types, required fields, formats. Validate with jsonschema library in Python or built-in checks in Postman.

Catches unexpected API contract changes early. Store schemas in version control alongside tests.`,code:[{language:"python",snippet:`import jsonschema

schema = {
    'type': 'object',
    'required': ['id', 'status'],
    'properties': {
        'id':     {'type': 'integer'},
        'status': {'type': 'string', 'enum': ['PASS', 'FAIL']}
    }
}

jsonschema.validate(instance=resp.json(), schema=schema)`}],source:u("json-schema-validation-in-python")},{question:"Difference between functional and integration API testing.",answer:`Functional API testing: validates individual endpoints against requirements — correct status, response fields, error messages for given input.

Integration API testing: validates interaction between services — payment service calls auth service, message queue triggers, database state after API call.

Functional = single API in isolation. Integration = multiple components together.`,source:u("integration-testing-vs-functional-testing")},{question:"How do you handle dynamic tokens?",answer:`1. Login fixture — call auth API before tests, store token in variable or pytest fixture
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
    assert resp.status_code == 200`}],source:u("how-to-handle-authentication-in-api-testing")},{question:"What is contract testing?",answer:`Contract testing verifies that API provider and consumer agree on request/response format without running full integration. Consumer defines expected contract; provider tests confirm they meet it.

Tools: Pact. Benefits: catch breaking changes early, test services independently, faster than end-to-end.`,source:u("contract-testing-in-microservices")}],hf=ue({id:"api",number:5,title:"API Testing",description:"Massively important now. Expect REST fundamentals, authentication, validation, and Python automation follow-ups.",priority:"critical",color:"var(--blue)",questions:M("api",ff,{tags:["api","rest","automation"],difficulty:"medium",priority:"critical"})}),gf=[{question:"Difference between WHERE and HAVING.",answer:`WHERE filters rows before grouping — cannot use aggregate functions. HAVING filters groups after GROUP BY — used with aggregates like COUNT, SUM, AVG.

Rule: WHERE for row-level filters, HAVING for group-level filters. Both can appear in the same query: WHERE first, then GROUP BY, then HAVING.`,code:[{language:"sql",snippet:`-- WHERE — filter rows before grouping
SELECT dept_id, salary
FROM employees
WHERE salary > 50000;

-- HAVING — filter groups after aggregation
SELECT dept_id, AVG(salary) AS avg_sal
FROM employees
GROUP BY dept_id
HAVING AVG(salary) > 50000;`}],source:u("difference-between-where-and-having-clause-in-sql")},{question:"JOIN types.",answer:`INNER JOIN — returns only matching rows in both tables.
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
LEFT JOIN departments d ON e.dept_id = d.dept_id;`}],source:u("sql-join-set-operators")},{question:"Primary key vs foreign key.",answer:`Primary Key (PK): uniquely identifies each row in a table. Cannot be NULL. Only one per table. Creates clustered index by default in many DBs.

Foreign Key (FK): column that references PK of another table. Enforces referential integrity — prevents orphan records. A table can have multiple FKs.`,code:[{language:"sql",snippet:`CREATE TABLE departments (
    dept_id   INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE employees (
    emp_id   INT PRIMARY KEY,
    name     VARCHAR(100),
    dept_id  INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`}],source:u("difference-between-primary-key-and-foreign-key")},{question:"Normalize vs denormalize.",answer:`Normalization: organize data to reduce redundancy — split into related tables (1NF, 2NF, 3NF). Pros: data integrity, less duplication. Cons: more JOINs, complex queries.

Denormalization: intentionally add redundancy for faster reads (e.g., store dept_name in employees table). Pros: faster queries. Cons: update anomalies, more storage.

OLTP systems favor normalization; reporting/analytics often denormalize.`,source:u("normalization-in-dbms")},{question:"Write query for duplicate records.",answer:"Find duplicates using GROUP BY + HAVING COUNT > 1, or window functions like ROW_NUMBER().",code:[{language:"sql",snippet:`-- Find duplicate emails
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
);`}],source:u("sql-query-to-find-duplicate-records")},{question:"Second highest salary query.",answer:"Common approaches: subquery with MAX, LIMIT/OFFSET, DENSE_RANK/ROW_NUMBER window function. Handle ties with DENSE_RANK if multiple employees share second-highest salary.",code:[{language:"sql",snippet:`-- Subquery approach
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Window function (handles ties)
SELECT DISTINCT salary
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) ranked
WHERE rnk = 2;`}],source:u("sql-query-to-find-second-highest-salary")},{question:"Count employees department-wise.",answer:"Use GROUP BY with COUNT. Add ORDER BY for sorted output. Use LEFT JOIN on departments if you need departments with zero employees.",code:[{language:"sql",snippet:`SELECT d.dept_name, COUNT(e.emp_id) AS employee_count
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name
ORDER BY employee_count DESC;`}],source:u("sql-group-by-count")},{question:"Delete duplicate rows.",answer:"Keep one row per duplicate key, delete the rest. Use ROW_NUMBER() in a CTE (SQL Server, PostgreSQL) or self-join with MIN(id). Always backup or test in transaction first.",code:[{language:"sql",snippet:`-- Keep lowest id per email (PostgreSQL / SQL Server)
WITH cte AS (
    SELECT id,
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM users
)
DELETE FROM users
WHERE id IN (SELECT id FROM cte WHERE rn > 1);`}],source:u("delete-duplicate-rows-in-sql")},{question:"Difference between DELETE, DROP, TRUNCATE.",answer:`DELETE — removes specific rows (with WHERE). Can be rolled back. Triggers fire. Slow for large datasets.

TRUNCATE — removes ALL rows, keeps table structure. Faster, minimal logging. Cannot use WHERE. Resets identity seed.

DROP — removes entire table (structure + data + constraints). Cannot rollback easily.`,source:u("difference-between-delete-drop-and-truncate")},{question:"What is indexing?",answer:`An index is a data structure (usually B-tree) that speeds up data retrieval at the cost of slower writes and extra storage. Like a book index — find rows without full table scan.

Types: clustered (defines physical order), non-clustered (separate structure). Index columns used in WHERE, JOIN, ORDER BY benefit most.`,code:[{language:"sql",snippet:`CREATE INDEX idx_emp_email ON employees(email);
CREATE UNIQUE INDEX idx_emp_email_unique ON employees(email);

-- Composite index for multi-column queries
CREATE INDEX idx_dept_salary ON employees(dept_id, salary);`}],source:u("indexing-in-databases")},{question:"What is a view?",answer:`A view is a virtual table based on a SQL query — stored query definition, not data. Used to simplify complex queries, restrict column access, and present consistent reporting interfaces.

Updating views depends on complexity — simple views may be updatable; joins/aggregates often are not.`,code:[{language:"sql",snippet:`CREATE VIEW vw_active_employees AS
SELECT e.emp_id, e.name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.status = 'ACTIVE';

SELECT * FROM vw_active_employees;`}],source:u("sql-views")},{question:"What is stored procedure?",answer:`A stored procedure is precompiled SQL code stored in the database. Called with EXEC/CALL. Used for reusable business logic, batch operations, and security (grant execute without table access).

In testing: used to seed test data, reset DB state, or validate backend data directly.`,code:[{language:"sql",snippet:`CREATE PROCEDURE sp_get_employees_by_dept
    @dept_id INT
AS
BEGIN
    SELECT emp_id, name, salary
    FROM employees
    WHERE dept_id = @dept_id;
END;

EXEC sp_get_employees_by_dept @dept_id = 10;`}],source:u("stored-procedures-in-sql")}],yf=ue({id:"sql",number:6,title:"SQL",description:"Very common in QA interviews. Practice writing queries for duplicates, rankings, and joins.",priority:"high",color:"var(--blue)",questions:M("sql",gf,{tags:["sql","database"],difficulty:"medium",priority:"high"})}),vf=[{question:"What is Jenkins?",answer:`Jenkins is an open-source automation server used for CI/CD — Continuous Integration and Continuous Delivery. It automates building, testing, and deploying software when developers push code.

For QA: Jenkins runs your pytest/Selenium/API suites on schedule or on every commit, publishes reports, notifies the team on failure, and keeps test execution consistent across machines.

Example: Every push to develop triggers a Jenkins job that installs dependencies, runs smoke tests, and emails the team if any test fails.`,source:u("what-is-jenkins")},{question:"Explain Jenkins pipeline.",answer:`A Jenkins Pipeline is a suite of plugins that models the delivery process as code — typically a Jenkinsfile in the repo. Pipelines define stages (Checkout, Build, Test, Deploy) and steps inside each stage.

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
}`}],source:u("jenkins-pipeline-tutorial")},{question:"Difference between freestyle and pipeline job.",answer:`Freestyle project: configured entirely in Jenkins UI — build steps, shell commands, post-build actions. Simple for one-off jobs but hard to version, review, and reproduce.

Pipeline job: defined in Jenkinsfile stored in Git — version controlled, code-reviewed, supports complex parallel stages, checkpoints, and shared libraries. Industry standard for CI/CD.

Example: A freestyle job runs "pytest tests/" via UI shell step; the same logic in a Jenkinsfile travels with the repo and works identically on every Jenkins instance.`,source:u("difference-between-freestyle-and-pipeline-job-in-jenkins")},{question:"What stages are in your pipeline?",answer:`Typical QA automation pipeline stages:

1. Checkout — clone repo from Git
2. Setup — create venv, pip install -r requirements.txt
3. Lint/Static check (optional) — flake8, pylint
4. Test — pytest with markers (smoke/regression), env vars
5. Report — publish JUnit, HTML, Allure
6. Notify — email/Slack on failure
7. Archive — screenshots, logs as artifacts

Tailor to your project — mention parallel API and UI stages if applicable.

Example: "Our PR pipeline has Checkout → Install → Smoke Tests → Publish Allure; nightly adds Regression Tests with --env=staging."`,source:Je("/jenkins/jenkins_pipeline.htm")},{question:"How do you trigger execution?",answer:`Common triggers: (1) SCM polling or webhook on Git push/PR; (2) cron schedule (H 2 * * * for nightly); (3) manual Build with Parameters; (4) upstream job trigger after build completes; (5) remote API trigger (curl with Jenkins token).

For QA: smoke on every PR, full regression nightly, on-demand staging run before release.

Example: GitHub webhook fires on push to main — Jenkins Multibranch Pipeline auto-discovers branch and runs smoke within 5 minutes of merge.`,code:[{language:"bash",snippet:`# Trigger build remotely
curl -X POST https://jenkins.example.com/job/qa-smoke/build \\
  --user user:api_token \\
  --data-urlencode json='{"parameter": [{"name":"ENV", "value":"qa"}]}'`}],source:u("jenkins-build-triggers")},{question:"How do you integrate Git with Jenkins?",answer:`Install Git plugin. Configure credentials (SSH key or HTTPS username/token) in Jenkins Credentials. In job config or Jenkinsfile, use checkout scm or git url + branch.

Multibranch Pipeline auto-scans repo branches and PRs — creates a job per branch. Link Jenkins to GitHub/GitLab via webhook for instant feedback on commits.

Example: Jenkinsfile uses checkout scm; credentials ID git-ssh-key stored in Jenkins; branch main runs regression, feature/* runs smoke only.`,code:[{language:"bash",snippet:`stage('Checkout') {
  steps {
    git branch: 'develop',
        credentialsId: 'github-token',
        url: 'https://github.com/org/automation-framework.git'
  }
}`}],source:u("jenkins-git-integration")},{question:"What happens when tests fail?",answer:`When pytest exits non-zero, the Test stage fails — pipeline marks build UNSTABLE or FAILED depending on configuration. JUnit plugin shows failed test names; HTML/Allure links show details; archived screenshots help triage.

Post actions: post { failure { emailext ... } } notifies QA/dev; Slack webhook posts channel alert. Downstream deploy stages are skipped (when { expression { currentBuild.result == "SUCCESS" } }).

Example: Failed login test → Jenkins build #452 FAILED → email to team with Allure link → developer checks screenshot artifact and fixes locator.`,source:F("jenkins-test-failure-handling")},{question:"How do you generate reports in Jenkins?",answer:`Generate reports during test stage, publish in post. JUnit: pytest --junitxml=report.xml then junit 'report.xml' in pipeline. HTML: archive reports/report.html as artifact or HTML Publisher plugin. Allure: pytest --alluredir=allure-results then Allure Jenkins plugin.

Trend graphs come from JUnit history plugin. Keep reports self-contained for offline review.

Example: post { always { junit 'report.xml'; allure includeProperties: false, results: [[path: 'allure-results']] } } publishes results even when tests fail.`,code:[{language:"bash",snippet:`pytest tests/ --junitxml=report.xml --alluredir=allure-results
# Jenkinsfile post block:
post {
  always {
    junit 'report.xml'
    archiveArtifacts artifacts: 'reports/**/*.html', allowEmptyArchive: true
  }
}`}],source:u("jenkins-junit-plugin")},{question:"How do you debug failed pipeline?",answer:`Steps: (1) Open Console Output — full shell log with stderr; (2) identify failed stage and exact command; (3) check workspace files (archived artifacts, screenshots); (4) Replay pipeline with same parameters; (5) add echo/debug steps temporarily; (6) reproduce locally with same ENV and command from log.

Common issues: wrong branch, missing credential, path differences (Windows vs Linux), timeout, agent missing Chrome/Java.

Example: Console shows ModuleNotFoundError: selenium — fix by adding pip install -r requirements.txt in Setup stage before Test stage.`,source:u("jenkins-troubleshooting")},{question:"Why script passes locally but fails in Jenkins?",answer:`Root causes: different Python/package versions; missing env vars or config files; headless vs headed browser; different OS paths (backslash vs slash); Jenkins runs as different user without display; stale dependencies; parallel tests colliding on shared data; firewall blocking URLs Jenkins agent cannot reach.

Fix: pin versions in requirements.txt, document exact Jenkins command in README, use same --env flag, run Docker agent matching local image.

Example: Test passed locally with .env file but Jenkins had no BASE_URL — fixed by adding BASE_URL to Jenkins job environment parameters.`,source:F("tests-pass-locally-fail-ci")},{question:"Environment issue handling?",answer:`Treat Jenkins agent environment explicitly: define ENV, BASE_URL, BROWSER in job parameters or credentials; use config files per env; verify agent has network access to test URLs and DB; install browsers/drivers on agent or use Docker with pre-baked image.

Use labeled agents (agent { label 'linux-selenium' }) for consistent capability. Health-check job validates env before regression.

Example: Staging tests failed because Jenkins agent could not resolve internal hostname — added DNS entry and documented required VPN for on-prem agents.`,source:u("jenkins-environment-variables")},{question:"Dependency issue handling?",answer:`Pin dependencies in requirements.txt with versions. Always create fresh venv in pipeline: python -m venv venv && source venv/bin/activate && pip install -r requirements.txt. Cache pip downloads with Jenkins cache plugin for speed but not stale packages.

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
}`}],source:u("jenkins-pipeline-python")},{question:"Parallel execution in Jenkins?",answer:`Pipeline parallel block runs stages concurrently — e.g. API tests and UI tests on different agents. pytest-xdist (-n auto) parallelizes inside one stage. Matrix builds test multiple browser/OS combinations.

Watch shared resources (same test account, DB) — use isolated data per worker. Set adequate agent capacity to avoid queue timeouts.

Example: parallel { stage('API') { steps { sh 'pytest tests/api -n 4' } }; stage('UI') { agent { label 'chrome' }; steps { sh 'pytest tests/ui -n 2' } } } cuts total time nearly in half.`,code:[{language:"bash",snippet:`parallel {
  stage('Chrome') { steps { sh 'pytest tests/ --browser=chrome' } }
  stage('Firefox') { steps { sh 'pytest tests/ --browser=firefox' } }
}`}],source:u("jenkins-parallel-stages")},{question:"Headless execution?",answer:`Headless browsers run without GUI — required on Linux Jenkins agents with no display. Chrome: --headless=new; Firefox: --headless. Selenium 4 options: ChromeOptions().add_argument("--headless").

Set window size explicitly in headless (1920x1080) — some layouts break at default small size. Xvfb (virtual framebuffer) is an alternative for older setups.

Example: conftest reads HEADLESS=true from Jenkins env and passes headless ChromeOptions — same tests run locally headed for debug and in CI headless.`,code:[{language:"python",snippet:`options = ChromeOptions()
if os.getenv('HEADLESS', 'true').lower() == 'true':
    options.add_argument('--headless=new')
    options.add_argument('--window-size=1920,1080')
driver = webdriver.Chrome(options=options)`}],source:F("headless-browser-testing")},{question:"Docker exposure?",answer:`Run tests inside Docker for reproducible Jenkins agents: pipeline uses agent { docker { image 'selenium/standalone-chrome' } } or docker-compose with app + tests. Expose ports (-p 4444:4444) for Selenium Grid; link containers on same network.

Benefits: consistent Chrome/driver versions, no polluting Jenkins host, easy scale with Kubernetes agents. Mount workspace volume for code and reports.

Example: Jenkins stage runs docker run -v $WORKSPACE:/app -w /app python:3.11 pytest tests/ — identical environment every build regardless of host OS.`,code:[{language:"bash",snippet:`stage('Test in Docker') {
  agent {
    docker {
      image 'python:3.11-slim'
      args '-v $WORKSPACE:/app -w /app'
    }
  }
  steps { sh 'pip install -r requirements.txt && pytest tests/' }
}`}],source:u("jenkins-docker-pipeline")},{question:"GitHub webhook?",answer:`A GitHub webhook sends HTTP POST to Jenkins on events (push, pull_request, release). Jenkins GitHub plugin receives payload and triggers the matching job — no polling delay.

Setup: Jenkins job → Build Triggers → GitHub hook trigger; GitHub repo → Settings → Webhooks → Payload URL https://jenkins.example.com/github-webhook/ → events Push and Pull request. Use secret token for security.

Example: Developer opens PR → webhook fires → Multibranch Pipeline runs smoke on PR branch → status reported back to GitHub Checks API — merge blocked if red.`,source:u("jenkins-github-webhook")}],wf=ue({id:"jenkins",number:7,title:"Jenkins / CI-CD",description:"You already got asked pipeline questions. Expect more on stages, triggers, debugging, and environment failures.",priority:"high",color:"var(--amber)",questions:M("jen",vf,{tags:["jenkins","ci-cd","pipeline"],difficulty:"medium",priority:"high"})}),bf=[{question:"What is SWIFT?",answer:`SWIFT (Society for Worldwide Interbank Financial Telecommunication) is a global messaging network used by banks and financial institutions to exchange standardized payment and securities instructions securely. It is not a payment system itself — it carries messages; settlement happens through correspondent banks, central banks, or clearing systems.

Members connect via SWIFTNet using BIC (Bank Identifier Code) to route messages. For QA, you validate that outbound/inbound messages conform to format rules, contain correct BICs, amounts, currencies, and reference fields, and that the application maps UI/API input correctly into SWIFT fields.`,source:u("introduction-to-swift")},{question:"Difference between MT and MX messages.",answer:`MT (Message Type) is the legacy SWIFT FIN format — fixed-length, tag-based text (e.g. :20:, :32A:). Examples: MT103 (customer credit transfer), MT202 (bank transfer). Human-readable in logs but harder to extend and validate programmatically.

MX (ISO 20022 XML) is the modern format — structured XML with XSD schemas, richer data (remittance, structured addresses), and better straight-through processing. CBPR+ and many corridors now mandate MX. In testing, MT checks focus on tag presence/length/format; MX checks add schema validation, namespace, and element business rules.`,source:u("swift-mt-vs-mx")},{question:"ISO 20022?",answer:`ISO 20022 is an international standard for financial messaging that defines a common data dictionary and XML/ASN.1 message models (e.g. pacs.008 for credit transfer, camt.053 for statements). It enables richer, structured payment data and global interoperability.

For QA in banking: validate messages against published XSDs, check mandatory elements (Debtor, Creditor, Amount, EndToEndId), verify mapping from internal payment objects to ISO elements, and regression-test when the bank upgrades schema versions (e.g. CBPR+ profile constraints).`,source:Je("/iso_20022/index.htm")},{question:"What message types have you worked on?",answer:`Tailor this to your experience. Common types QA teams test in payment projects:

Customer payments: MT103 / pacs.008 (single customer credit transfer). Bank transfers: MT202 / pacs.009 (financial institution transfer). Status: MT199, pacs.002 (payment status), camt.054/053 (notifications/statements). Investigations: MT192/MT196 or camt.056 (cancellation/recall).

In the interview, name 2–3 you actually tested, what module generated/consumed them, and what you validated — field mapping, amounts, charges (OUR/BEN/SHA), value date, and end-to-end reference across UI → core banking → SWIFT out.`,source:u("swift-message-types")},{question:"Explain payment lifecycle.",answer:`Typical cross-border/customer payment lifecycle:

1. Initiation — client or operations enters payment (portal, file upload, API). 2. Validation — format, mandatory fields, limits, sanctions, account status. 3. Routing — determine nostro/correspondent path and message type. 4. Authorization — maker-checker or straight-through if rules pass. 5. Messaging — generate MT/MX and send via SWIFT/interface. 6. Clearing/settlement — funds move at beneficiary bank (may be T+0 to T+2). 7. Status updates — ACK/NACK, settlement confirmation, exceptions. 8. Reconciliation — match internal ledger with SWIFT confirmations and statements.

As QA, you test each gate: invalid data rejected early, approved payments produce correct messages, status API/UI matches back-office state.`,source:u("payment-life-cycle")},{question:"What validations did you perform?",answer:`Functional: amount/currency precision, debit/credit account rules, cut-off times, holiday calendars, duplicate reference detection, charge bearer, FX rate application.

Message-level: SWIFT field lengths, allowed character sets, BIC format, mandatory tags/elements, MT vs MX profile rules (CBPR+).

Compliance: sanctions screening hits, PEP flags, country restrictions. Integration: API request/response vs generated message file, database posting, queue handoff.

Negative testing: missing IBAN, invalid BIC, over limit, closed account, screening block — expect clear error codes and no partial posting.`,source:F("api-testing-interview-questions")},{question:"What is UAT in banking?",answer:`User Acceptance Testing in banking is business-led validation that the system meets operational and regulatory requirements before production go-live. Participants often include operations, payments specialists, compliance, and sometimes treasury — not only IT QA.

Scope: real-world scenarios (high-value payment, recall, returns, cut-off edge cases), reconciliation reports, audit trails, and sign-off on message samples sent to SWIFT test environment or bank sandbox. QA supports UAT with test data, defect triage, evidence packs, and retest after fixes. Success criteria: zero critical defects, signed test summary, and parallel run results matching legacy if migrating.`,source:u("user-acceptance-testing")},{question:"Explain sanctions screening.",answer:`Sanctions screening compares payment parties (ordering customer, beneficiary, banks, intermediaries) and sometimes payment reference text against government and internal watchlists (OFAC, EU, UN, etc.) before release.

Flow: payment captured → screening engine called (in-house or vendor) → match score/hit → auto-release, false-positive workflow, or hard stop. QA tests: exact name match, fuzzy match, alias, secondary sanctions, country embargo, rescreening on amendment, and audit log of who released a hit. Never use real sanctioned names in lower environments — use approved test personas from compliance.`,source:u("aml-kyc-in-banking")},{question:"What happens if payment fails?",answer:`Failure can occur at validation, authorization, messaging (SWIFT NACK), settlement, or beneficiary rejection. System should: stop or reverse debit if not yet settled, set transaction status (Failed/Rejected/Returned), store reason code (ISO reason or internal code), notify operations/customer, and allow repair or re-initiation per policy.

QA verifies: no double debit, status consistency across UI/API/DB, correct exception queue entry, alert/email if configured, and that failed payments appear in ops dashboards and reconciliation exceptions. Retest recall/return flows if funds already left nostro account.`,source:u("payment-processing")},{question:"Explain settlement flow.",answer:`Settlement is the actual transfer of funds between banks to fulfill a payment instruction. In correspondent banking, ordering bank debits customer, credits nostro at intermediary, beneficiary bank credits end customer — often via MT202/pacs.009 chains.

QA focuses on: correct nostro selection, value date, settlement method (gross vs net), alignment with message amount, and status transition to Settled/Completed when camt/MT910 or internal confirmation received. Test partial settlements, delays, and mismatch between instructed amount and settled amount (FX, fees).`,source:u("bank-settlement-process")},{question:"Explain transaction status flow.",answer:`Typical statuses: Draft → Submitted → Pending Validation → Pending Approval → Approved → Sent to SWIFT → Acknowledged → In Progress → Settled → Completed (or Rejected/Failed/Returned/Cancelled).

Each transition should be auditable with timestamp and user/system id. QA validates: status API matches DB, UI timeline correct, invalid transitions blocked (e.g. cannot approve after reject), and webhook/event consumers get same status. Regression on status polling and bulk file payments where thousands update asynchronously.`,source:u("transaction-life-cycle")},{question:"What are message queues?",answer:`Message queues (e.g. IBM MQ, RabbitMQ, Kafka in modern stacks) decouple payment components — front office, core banking, SWIFT gateway, screening, reporting — so spikes and downstream slowness do not crash upstream.

Payments are published as messages; consumers process asynchronously with retry and dead-letter queues (DLQ). QA tests: message not lost on restart, poison message goes to DLQ, idempotent reprocessing, ordering where required, and correlation IDs linking queue payload to payment reference. Monitor queue depth alerts in production-like load tests.`,source:u("message-queue-system")},{question:"What production issues did you see?",answer:`Answer with sanitized real examples if you have them. Common production issues in payments QA support:

Cut-off misconfiguration causing payments stuck in Pending. Wrong BIC/nostro after reference data update. Duplicate file processing without idempotency key. Timezone/value date off by one day. Screening timeout releasing late. MX schema validation failure after SWIFT rulebook upgrade.

Describe your role: reproduce in lower env, gather logs/SWIFT traces, compare message before/after fix, verify hotfix in prod support window, and add regression automation or monitoring.`,source:F("production-testing")},{question:"What is reconciliation?",answer:`Reconciliation matches internal transaction records against external evidence — SWIFT confirmations (MT900/910, camt), nostro statements, clearing house files — to ensure every payment is accounted for and balances agree.

Types: intraday (exceptions), EOD nostro reconciliation, fee/charge reconciliation. QA validates report accuracy, unmatched item workflows, break reasons, and that retried/settled payments clear breaks. Test scenarios: missing confirmation, amount mismatch, duplicate entry, late statement line.`,source:u("bank-reconciliation")},{question:"What is STP (Straight Through Processing)?",answer:`STP means payments flow from initiation to messaging/settlement with no manual intervention when all automated checks pass — validation, limits, sanctions, routing, and message generation.

STP rate is a key KPI. QA improves STP by exhaustive negative testing (fail fast with clear errors) and positive path coverage so valid payments never land in ops queues incorrectly. Test that manual queue only receives true exceptions (screening hit, missing nostro, format error), not data bugs fixable in software.`,source:u("straight-through-processing")},{question:"Explain cross-border payments.",answer:`Cross-border payments move funds between accounts in different countries, often involving currency conversion, correspondent banks, and compliance (sanctions, AML reporting). Messages may chain MT103 + MT202 or ISO pacs.008/009 with routing via intermediary BICs.

QA covers: IBAN/account format per country, SWIFT BIC routing, FX rates and charges, regulatory reporting fields (purpose of payment), cut-offs per corridor, and longer settlement timelines. Test USD/EUR/GBP corridors and edge cases like payments to countries with capital controls.`,source:u("cross-border-payments")},{question:"Difference between SWIFT MT103 and MT202.",answer:`MT103 is a single customer credit transfer — contains ordering customer, beneficiary, remittance info, amount; used when bank pays end customer on behalf of client.

MT202 is a general financial institution transfer — bank-to-bank only, no detailed customer fields; used to move funds between nostro accounts, often as cover payment for an MT103.

In testing: MT103 has field 50/59 (ordering/beneficiary); MT202 uses field 52/58 (ordering/beneficiary institution). Verify correct pairing in cover payment scenarios and that amounts and references link both messages.`,code:[{language:"text",snippet:`{1:F01BANKUS33AXXX0000000000}{2:I103BANKDEFFXXXXN}{3:{108:REF12345}}{4:
:20:TXNREF001
:23B:CRED
:32A:240531USD10000,
:50K:/123456789
JOHN DOE
:59:/DE89370400440532013000
JANE SMITH
-}`}],source:u("swift-mt103")},{question:"What is CBPR+?",answer:`CBPR+ (Cross-Border Payments and Reporting Plus) is SWIFT's harmonized ISO 20022 usage guideline for cross-border payments on SWIFT, replacing many MT messages with constrained MX (pacs/camt) to improve STP globally.

Key for QA: messages must comply with CBPR+ implementation guidelines — restricted optional elements, specific code sets, character sets, and network-validated rules beyond base XSD. Test migration projects: dual MT/MX period, translation accuracy, and SWIFT gpi tracker fields where applicable.`,source:u("iso-20022-cbpr")},{question:"How did you validate XML messages?",answer:`Multi-layer validation:

1. Well-formed XML — parser loads without error. 2. XSD schema validation — pacs.008 / camt versions match environment. 3. Business rules — CBPR+, bank-specific rules (amount > 0, currency ISO4217, BIC pattern). 4. Golden file comparison — hash or diff against approved sample. 5. SWIFT pre-validator or alliance access test ACK/NACK.

Automation: Python lxml/xmlschema, Java JAXB with schema validator, or dedicated tools in CI. Store expected outputs per test case; on failure attach full XML to defect ticket.`,code:[{language:"python",snippet:`from lxml import etree

schema = etree.XMLSchema(etree.parse('pacs.008.001.08.xsd'))
tree = etree.parse('generated_payment.xml')
assert schema.validate(tree), schema.error_log`}],source:u("xml-validation")}],kf=ue({id:"banking",number:8,title:"Banking / SWIFT Domain",description:"This is your differentiator. Most testers cannot answer domain questions properly — payment lifecycle, SWIFT messages, and reconciliation.",priority:"high",color:"var(--red)",questions:M("bank",bf,{tags:["banking","swift","domain"],difficulty:"medium",priority:"high"})}),xf=[{question:"Test case is failing intermittently. What will you do?",answer:`Treat it as a flaky test until proven otherwise. First, check failure rate and pattern — same step every time vs random, specific browser/env, or after parallel run. Collect evidence: screenshots, logs, HAR, timestamps, and compare pass vs fail runs.

Common causes: timing (use explicit waits), shared test data, environment load, async UI/API, or order dependency in suite. Reproduce locally with same seed/data; run 10–20 times (pytest --count). Fix root cause — do not mask with blind retries unless transient infra is documented. Quarantine in CI if blocking pipeline while investigating.`,source:F("flaky-selenium-test")},{question:"Dev says issue is not reproducible. What will you do?",answer:`Provide a reproducible package: exact steps, environment (browser/OS/build), test data, user role, time zone, and video/screenshot. Confirm you are on the same build and config as dev (feature flags, API URL).

Try on another machine or clean profile to rule out local cache. Check if issue is data-specific — share DB snapshot or API request/response. If still not reproducible, log as intermittent with severity based on business impact, request logging/monitoring in prod-like env, and agree on watch period after release.`,source:u("how-to-report-bug-effectively")},{question:"Requirement changes during sprint. How do you handle it?",answer:`Acknowledge change with PO/BA in writing (Jira comment or updated AC). Impact analysis: which test cases/scripts are obsolete, what new coverage is needed, and effort delta. Update test plan and automation backlog; do not silently delete tests without review.

Re-prioritize sprint QA work with the team — negotiate scope trade-off if capacity is fixed. Run regression on affected module plus adjacent integrations. Flag release risk if change is late and untested; never sign off without explicit PO acceptance of residual risk.`,source:u("agile-testing")},{question:"You have limited time. What will you prioritize?",answer:`Prioritize by risk and business impact: critical path (login, payment submit, compliance checks), new/changed code in the sprint, and production defect hotspots. Run smoke first, then targeted regression on touched modules — not full suite if time-boxed.

Automate high-value repeatable checks for next sprint. Communicate clearly what was not tested and get PO sign-off on gaps. Document deferred areas in test summary. Never skip security/compliance or financial calculation tests in banking without explicit approval.`,source:u("test-prioritization")},{question:"Smoke passes but regression fails. What next?",answer:`Smoke passing only means core paths work — regression failure indicates deeper or edge-case breakage. Triage failures: group by module/root cause (one bug vs many). Check if regression env differs from smoke (data, config, feature flags).

Compare last green build — bisect commits if needed. Block release if failures are in scope of release or severity High/Critical. Fix or log defects with clear repro; re-run failed subset after fix before full regression. Update smoke suite if gap allowed regression failure to surprise late.`,source:u("smoke-testing-vs-regression-testing")},{question:"Production defect found after release. What steps?",answer:`1. Contain — assess severity, notify on-call/lead, disable feature flag or rollback if customer-impacting. 2. Document — steps, users affected, time window, logs/SWIFT traces (no PII in tickets). 3. Reproduce in lower environment with prod-like data mask. 4. Root cause with dev — code, config, data, or missed test scenario.

5. Hotfix + targeted regression + smoke in prod after deploy. 6. Post-incident: add regression test, improve monitoring/alert, update test plan. Communicate status to stakeholders until closed.`,source:F("production-testing")},{question:"Automation script unstable only in CI environment.",answer:`CI differs from local: headless mode, screen resolution, parallel workers, network latency, no display, different Chrome/driver versions, and shared agents. Compare Jenkins job config vs local — branches, env vars, secrets, base URL.

Fixes: pin browser/driver versions, increase timeouts modestly with explicit waits, use unique test users per worker, disable unnecessary video if resource-starved, run job on dedicated agent. Capture CI artifacts (screenshot, console, page source) on failure. Reproduce with Docker image matching CI.`,source:F("selenium-ci-cd")},{question:"API works manually but fails in automation.",answer:`Compare manual (Postman) vs script byte-for-byte: URL, method, headers (Content-Type, Authorization, Accept), body encoding, and query params. Common misses: missing Bearer token refresh, wrong Content-Type, trailing slash, HTTP vs HTTPS, or certificate issues in CI.

Check session/cookie not carried from UI test. Assert on response body in script — status 200 with error JSON is still failure. Log request/response in test for debugging. Use same environment variables as manual collection.`,code:[{language:"python",snippet:`import requests

resp = requests.post(url, json=payload, headers=headers, timeout=30)
print(resp.status_code, resp.text)  # debug CI failure
assert resp.status_code == 200`}],source:u("api-testing-interview-questions")},{question:"Element works locally but not in Jenkins.",answer:`Typical causes: headless rendering differences, viewport size hiding elements, slower page load in CI, different locale/date format, and stale locators after deploy timing. Use explicit waits for element visible + clickable, scroll into view, and stable locators (data-testid).

Verify Jenkins runs against correct environment URL and build. Check for overlays, cookie banners, or MFA disabled in test env only locally. Increase logging: save screenshot and HTML on failure. Run Jenkins job from branch with fix before merging.`,source:F("selenium-jenkins")},{question:"Business says expected result changed.",answer:`Do not change tests unilaterally. Request updated acceptance criteria or change request from BA/PO — email/Jira ticket. Assess impact on automation baselines, regression suite, and UAT sign-off documents.

Update test cases and scripts after approval; version-control with ticket reference. Re-run affected suite and communicate to team if other tests assumed old behavior. If change is retroactive for in-flight defects, clarify which failures are now invalid.`,source:u("change-management-in-testing")},{question:"Test data unavailable.",answer:`Escalate early — blocked testing is a sprint risk. Options: work with DBA/ops for masked prod subset, use API/factory scripts to create data, maintain golden test accounts documented in wiki, or use stub/mock for non-UI layers with PO agreement.

Never use real customer PII in test. For banking, use compliance-approved synthetic IBANs/BICs. Meanwhile execute static tests (message validation, unit-level) or peer review test cases. Log blocker in daily standup with ETA.`,source:u("test-data-management")},{question:"Application response slow.",answer:`Separate environment slowness from product defect. Measure response time with timestamps in automation (soft assert threshold), APM tools, or browser Network tab. Identify layer — UI, API, DB, third-party screening/SWIFT.

If slowness causes failures, adjust waits strategically (explicit, not huge sleep) and flag performance defect with evidence (p95 latency). Run tests off-peak or on dedicated env. Do not ignore — slow prod impacts STP and cut-offs in banking.`,source:u("performance-testing-basics")},{question:"Random popup appears.",answer:`Identify trigger — cookie consent, session timeout, marketing modal, error toast, or concurrent user alert. Reproduce with video; check if popup is iframe or shadow DOM.

Short-term: handle in Page Object — wait and close if displayed within short timeout (do not fail if absent). Long-term: request disable in test env or data-testid for dismiss button. Avoid clicking random coordinates. If popup is a bug (should not block flow), log defect separately from test maintenance.`,source:u("handle-alerts-popups-selenium")},{question:"Test passes individually but fails in suite execution.",answer:`Classic test isolation failure. Check shared state: same user logged in twice, data consumed by prior test, database not reset, static variables, or file locks. Review test order — @pytest.mark dependency or alphabetical order may expose coupling.

Fix: unique data per test, cleanup in teardown, independent browser session per test, pytest random order to detect. Run failed test with tests that ran before it. Use pytest fixtures with function scope for driver and fresh login.`,source:u("test-isolation")},{question:"Parallel execution causing failures.",answer:`Parallel tests must not share accounts, payment references, or DB rows. Use worker-specific IDs (pytest-xdist worker_id), separate browsers, and thread-safe reporting. Race conditions on same record cause intermittent failures.

Reduce parallelism for tests that hit single shared resource, or mock backend. Verify Grid/hub capacity — session timeouts under load. Run with -n auto locally to reproduce; fix data strategy before increasing CI parallelism.`,code:[{language:"bash",snippet:`pytest tests/ -n 4 --dist loadscope
# Each worker: unique user via worker input`}],source:u("parallel-testing-in-selenium")},{question:"Database values mismatch.",answer:`Confirm UI/API action completed — check transaction status and timestamps. Query correct schema/environment; watch replication lag in clustered DB. Compare expected vs actual with SQL — payment amount, status, nostro, message id.

Mismatch sources: async posting, rollback after SWIFT NACK, wrong test account, or date boundary (value date). Attach query results to defect. Automate DB assertion via controlled test API or read-only test DB user; avoid hardcoding prod connection.`,source:u("database-testing")},{question:"User story unclear.",answer:`Do not guess expected behavior. Schedule refinement with BA/PO — list specific questions (edge cases, error messages, limits). Document assumptions and get written answers in Jira AC before test design.

Write draft test scenarios and send for review — often clarifies gaps early. If story stays unclear, mark story as blocked in sprint; testing on ambiguity creates false defects. Escalate to Scrum Master if recurring.`,source:u("user-story-in-agile")},{question:"Requirement document missing.",answer:`Use available sources: Jira AC, mockups, API Swagger, previous sprint behavior, and SME interview. Produce a short test basis document listing assumptions and send to PO for confirmation before execution.

Log risk: incomplete coverage without BRD. For regulated banking, insist on compliance-approved requirements for audit trail. Do not sign UAT without documented expected results. Follow up formally for missing artifacts.`,source:u("software-requirement-specification")},{question:"High severity defect near release date.",answer:`Immediately notify QA lead, PM, and release manager with impact assessment — modules affected, workaround exists or not, regulatory exposure. Do not quietly downgrade severity without approval.

Options: fix and targeted retest, defer release, release with known issue + waiver (PO/compliance sign-off), or hotfix branch. Accelerate regression on fix; avoid skipping full smoke. Document decision in release notes. Post-release: monitor production closely for related symptoms.`,source:u("defect-life-cycle")}],Sf=ue({id:"scenario",number:9,title:"Scenario-Based",description:"These are the real elimination questions. Interviewers test your debugging mindset, prioritization, and communication under pressure.",priority:"critical",color:"var(--red)",questions:M("scen",xf,{tags:["scenario","debugging","process"],difficulty:"medium",priority:"critical"})}),Cf=[{question:"SDLC vs STLC.",answer:`SDLC (Software Development Life Cycle) is the end-to-end process of building software — planning, requirements, design, development, testing, deployment, maintenance. It is owned by the whole project team.

STLC (Software Testing Life Cycle) is the subset focused only on testing activities — requirement analysis, test planning, test case design, environment setup, execution, cycle closure. STLC fits inside SDLC.

Key difference: SDLC produces the product; STLC validates it. Testing starts early in SDLC (shift-left) even though execution peaks before release.`,source:u("software-development-life-cycle-sdlc")},{question:"Severity vs priority.",answer:`Severity = technical impact on the system (how bad is the defect?). Set by QA based on functionality/data loss.

Priority = business urgency to fix (how soon should dev fix it?). Set by product/management based on release timelines and user impact.

They are independent. Example: wrong logo on login page — Low severity (cosmetic) but High priority if CEO demo is tomorrow. Payment calculation off by 1 cent — High severity but Low priority if feature is not live yet.

Common scale: Critical / Major / Minor / Trivial for severity; P1–P4 for priority.`,source:u("difference-between-severity-and-priority")},{question:"Defect lifecycle.",answer:`Typical states:

1. New — tester logs defect
2. Assigned — triaged to developer
3. Open / In Progress — developer investigating or fixing
4. Fixed / Resolved — fix deployed to test environment
5. Retest — QA verifies fix
6. Verified / Closed — fix confirmed
7. Reopened — fix failed retest
8. Deferred / Rejected / Duplicate / Cannot Reproduce — alternate closures

Good practice: every transition has an owner, comment, and build/version. Reopened defects often indicate poor root-cause analysis or missing regression coverage.`,source:u("defect-life-cycle-in-software-testing")},{question:"Bug leakage vs bug release.",answer:`Bug leakage — a defect that existed in the application but was NOT found during testing; it escapes to production or UAT. Indicates gaps in test coverage, environment parity, or test data.

Bug release — a defect that WAS found during testing but was consciously released anyway (known issue) — usually documented with waiver, workaround, or deferred fix due to low risk or deadline.

Leakage = testing miss. Release = informed business decision. Both hurt quality; leakage is worse for QA credibility.`,source:Je("/software_testing_dictionary/bug_leakage.htm")},{question:"Regression vs retesting.",answer:`Retesting — re-execute specific test cases that failed after a fix, on the same build or new build, to confirm the defect is resolved. Narrow scope, tied to defect IDs.

Regression testing — re-run a broader (or full) suite to ensure new code or fixes did NOT break existing functionality. Wider scope, often automated.

Example: login bug fixed → retest login test cases. Before release → run regression suite (smoke + critical paths + affected modules).`,source:u("difference-between-retesting-and-regression-testing")},{question:"Smoke vs sanity.",answer:`Smoke testing — shallow, wide check that the build is stable enough for further testing. "Does it install, launch, and core paths work?" Run on every new build. Fail fast — reject build if smoke fails.

Sanity testing — narrow, deep check on a specific changed area after a small fix. "Does this one feature still work after the patch?" Subset of regression, not full suite.

Smoke = build acceptance. Sanity = focused confidence after localized change.`,source:u("difference-between-sanity-testing-and-smoke-testing")},{question:"Test plan vs test strategy.",answer:`Test Strategy — high-level, organization/project-wide document. Defines testing approach, tools, levels (unit/integration/system), entry/exit criteria, risk approach, roles. Usually stable across releases.

Test Plan — project/release-specific document derived from strategy. Scope, schedule, features in/out of scope, test environment, deliverables, milestones, resources. Changes per sprint or release.

Analogy: Strategy = how we test in this company; Plan = how we test this release of Payment App v2.3.`,source:u("difference-between-test-plan-and-test-strategy")},{question:"Functional vs non-functional testing.",answer:`Functional testing — validates WHAT the system does against requirements. Examples: login with valid credentials, transfer amount, search returns correct results. Black-box, requirement-driven.

Non-functional testing — validates HOW WELL the system behaves. Examples: performance (load time under 2s), security (SQL injection blocked), usability, reliability, compatibility, scalability.

Both are required for production readiness. A feature can pass functional tests but fail performance under 1000 concurrent users.`,source:u("functional-vs-non-functional-testing")},{question:"Black box vs white box.",answer:`Black box testing — tester has no knowledge of internal code structure. Tests based on inputs, outputs, and requirements. Techniques: equivalence partitioning, boundary values, decision tables, exploratory testing. Typical for manual and system testing.

White box testing — tester knows internal logic, code paths, branches. Techniques: statement/branch coverage, path testing, unit tests by developers. Typical for unit and integration testing.

Gray box — partial knowledge (e.g., DB schema, API contracts) — common in API and integration testing.`,source:u("difference-between-black-box-and-white-box-testing")},{question:"Boundary value analysis.",answer:`Defects cluster at boundaries of input ranges. BVA tests values at, just below, and just above boundaries rather than every value in the range.

For field accepting 1–100: test 0, 1, 2, 99, 100, 101 (min-1, min, min+1, max-1, max, max+1).

Works with equivalence partitioning — first divide inputs into valid/invalid classes, then apply BVA on class edges.`,code:[{language:"text",snippet:`Field: Age 18–60 (inclusive)

BVA test values:
  17  → invalid (below min)
  18  → valid (min boundary)
  19  → valid (min+1)
  59  → valid (max-1)
  60  → valid (max boundary)
  61  → invalid (above max)`}],source:u("boundary-value-analysis-in-software-testing")},{question:"Equivalence partitioning.",answer:`Divide input data into partitions where all values in a partition are expected to behave the same. Pick one representative value per partition instead of testing every value — reduces test cases while maintaining coverage.

Example: password length 8–20 characters.
- Invalid partition 1: length < 8 (test: "abc")
- Valid partition: length 8–20 (test: "password1")
- Invalid partition 2: length > 20 (test: 21-char string)

Combine with BVA for edge cases within each partition.`,source:u("equivalence-partitioning-method")},{question:"Exploratory testing.",answer:`Simultaneous learning, test design, and test execution — no detailed pre-written scripts. Tester explores the application based on charter, intuition, and risk areas to find unexpected defects.

Best for: new features, unclear requirements, usability issues, edge cases scripts miss. Often time-boxed (e.g., 90-minute session) with session notes and debrief.

Not a replacement for scripted regression — complements it. Strong exploratory testers document findings and turn critical paths into automated checks later.`,source:u("exploratory-testing-software-testing")},{question:"Risk-based testing.",answer:`Prioritize testing effort based on risk = Probability of failure × Impact if it fails. High-risk areas get more depth, earlier execution, and automation; low-risk areas get lighter coverage.

Risk identification sources: requirements ambiguity, complex integrations, new technology, past defect history, regulatory impact (payments, healthcare).

Example: in a banking app, fund transfer and authentication are high risk; "About Us" page is low risk. Allocate 60% of regression effort to payment and auth modules.`,source:u("risk-based-testing-in-software-testing")},{question:"Agile testing principles.",answer:`Key principles (aligned with Agile Manifesto):

1. Testing is whole-team responsibility — not only QA at the end
2. Early and continuous testing — shift-left in every sprint
3. Automate regression; keep manual for exploratory and new stories
4. Working software over exhaustive documentation — lightweight test charters and BDD scenarios
5. Adapt to changing requirements — reprioritize tests each sprint
6. Face-to-face communication with dev and BA for quick clarification
7. Sustainable pace — avoid death-marches; quality drops under burnout

QA attends standups, refinement, and retros; defines Definition of Done with test evidence.`,source:u("agile-testing-principles")},{question:"Entry and exit criteria.",answer:`Entry criteria — conditions that must be met BEFORE testing starts. Examples: requirements signed off, test environment available, test data loaded, build deployed, smoke passed, test cases reviewed.

Exit criteria — conditions to STOP testing for a phase/release. Examples: planned test cases executed, critical/high defects closed or waived, regression pass rate ≥ 95%, no open P1 defects, sign-off from stakeholders.

Without clear criteria, teams debate "are we done?" and releases slip or ship with unknown risk.`,source:Je("/software_testing/software_testing_entry_exit_criteria.htm")},{question:"Traceability matrix.",answer:`A document (often spreadsheet or ALM tool) mapping requirements → test cases → defects → test results. Ensures every requirement is tested and every test traces back to a business need.

Types: Forward (requirement → tests), Backward (test → requirement), Bi-directional (both).

Example: REQ-101 "User can reset password" maps to TC-45, TC-46, TC-47. If REQ-101 fails UAT, you instantly see which tests should have caught it.

Critical for audits in regulated domains (banking, healthcare).`,source:u("requirement-traceability-matrix")},{question:"Defect report contents.",answer:`A good defect report enables reproduction without back-and-forth:

1. Defect ID and title (clear, specific)
2. Environment — build version, OS, browser, test data
3. Steps to reproduce (numbered)
4. Expected vs actual result
5. Severity and priority
6. Screenshots, logs, HAR files, or video
7. Test case reference / requirement ID
8. Reporter, date, assignment
9. Attachments (sample payload, DB snapshot if relevant)

Bad example: "Login broken." Good example: "Login fails with valid AD user on Chrome 120 — build 2.4.1 — returns 500 after MFA step; see attached network log."`,source:u("bug-report-format")}],Ef=ue({id:"manual",number:10,title:"Manual Testing",description:"Do not underestimate this section. Core QA concepts like SDLC, defect lifecycle, and test design techniques are still frequently asked.",priority:"high",color:"var(--green)",questions:M("man",Cf,{tags:["manual","testing","fundamentals"],difficulty:"easy",priority:"high"})}),Pf=[{question:"Difference between clone and fork.",answer:`git clone copies a remote repository to your local machine — full history, you push/pull to that remote (origin).

Fork (GitHub/GitLab feature) creates your own copy of someone else's repo on the hosting platform. You clone your fork, make changes, and submit a Pull Request to the original repo.

Clone = local copy. Fork = your own remote copy of another project.`,source:u("difference-between-fork-and-clone-in-github")},{question:"Difference between fetch and pull.",answer:`git fetch downloads commits from remote to your local repo but does NOT merge — safe to inspect changes first.

git pull = git fetch + git merge (or rebase). Downloads and immediately integrates into your current branch.

Use fetch when you want to review remote changes before merging. Use pull for quick sync when you trust remote changes.`,code:[{language:"bash",snippet:`git fetch origin          # download only
git log origin/main       # review changes
git pull origin main      # fetch + merge in one step`}],source:u("git-fetch-vs-pull")},{question:"Rebase vs merge.",answer:`git merge combines branches — creates a merge commit, preserves full history with branches visible.

git rebase replays your commits on top of another branch — linear history, no merge commit, cleaner log. Never rebase public/shared branches others are using.

Use merge for shared/main branches. Use rebase to update feature branch before PR.`,code:[{language:"bash",snippet:`# Merge — preserves branch history
git checkout main
git merge feature/login

# Rebase — linear history
git checkout feature/login
git rebase main`}],source:u("git-merge-vs-rebase")},{question:"Cherry-pick?",answer:`git cherry-pick <commit-hash> applies a specific commit from one branch onto your current branch — without merging the entire branch.

Useful for hotfixes: pick a bug fix commit from develop into release branch without merging everything else.`,code:[{language:"bash",snippet:`git checkout release/v1.2
git cherry-pick abc1234   # apply single commit
git push`}],source:u("git-cherry-pick")},{question:"Resolve merge conflict.",answer:`Conflicts occur when Git cannot auto-merge changes to the same lines.

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
git commit -m 'Resolve merge conflict in test_login.py'`}],source:u("merge-conflicts-in-git")},{question:"Git stash.",answer:`git stash temporarily saves uncommitted changes and reverts working directory to clean state. Useful when you need to switch branches but aren't ready to commit.

git stash — save changes
git stash pop — restore and remove from stash
git stash list — view all stashes
git stash apply — restore without removing`,code:[{language:"bash",snippet:`git stash save 'WIP login tests'
git checkout hotfix/urgent-bug
# ... fix and commit ...
git checkout feature/login
git stash pop`}],source:u("git-stash")},{question:"Git revert vs reset.",answer:`git revert <commit> — creates a NEW commit that undoes a specific commit. Safe for shared/public branches — does not rewrite history.

git reset — moves branch pointer backward. --soft keeps changes staged, --mixed keeps changes unstaged, --hard discards all changes. Dangerous on pushed branches.

Use revert for production/shared branches. Use reset only on local unpushed commits.`,code:[{language:"bash",snippet:`# Safe for shared branches
git revert abc1234
git push

# Local only — undo last commit, keep changes
git reset --soft HEAD~1

# Local only — discard everything
git reset --hard HEAD~1`}],source:u("git-revert-vs-reset")},{question:"Branching strategy.",answer:`Common strategies:

Git Flow: main (production) + develop + feature/release/hotfix branches. Formal, good for scheduled releases.

GitHub Flow: main + short-lived feature branches + PR. Simple, continuous delivery.

Trunk-Based: everyone commits to main frequently with feature flags. Fast CI/CD.

For QA automation: feature branches per story, PR review, merge to develop, regression on staging, release to main.`,source:u("git-branching-strategies")},{question:"Pull request process.",answer:`Pull Request (PR) / Merge Request workflow:

1. Create feature branch from main/develop
2. Commit changes with clear messages
3. Push branch to remote
4. Open PR with description, linked ticket, test evidence
5. Code review + CI pipeline runs (tests must pass)
6. Address review comments
7. Squash/merge into target branch
8. Delete feature branch

As QA: include test results, automation report links in PR description.`,source:u("pull-request-in-git")}],Af=ue({id:"git",number:11,title:"Git",description:"Version control workflow questions — branching, merging, conflicts, and pull request process.",priority:"medium",color:"var(--text-muted)",questions:M("git",Pf,{tags:["git","version-control"],difficulty:"easy",priority:"medium"})}),Tf=[{question:"Show me one automation flow you designed.",answer:`Describe end-to-end: trigger → layers → assertions → reporting.

Example (payment portal): "I designed a nightly regression flow: Jenkins triggers pytest suite on staging. Tests pull test data from a JSON fixture factory. Flow: UI login via Page Object → navigate to Outgoing Payment → fill SWIFT fields via API shortcut for speed → submit → poll status API until SETTLED → assert DB record in Oracle via JDBC helper. Failures attach screenshot + log to Allure and Slack alert QA channel. Runtime dropped from 4h manual to 45 min automated."

Highlight: why you chose UI vs API, how you handle async waits, and how the flow maps to a real business scenario.`,source:F("test-automation-framework-design")},{question:"Explain your hardest bug.",answer:`Use STAR and technical depth — intermittent bugs impress when you explain investigation method.

Example: "Intermittent duplicate SWIFT messages in UAT only under load. Reproduced after 200 parallel submissions. I correlated app logs with MQ queue depth — race condition: two threads read same sequence number before DB lock. I built a minimal JMeter script to reproduce, captured thread dumps, and paired with dev to add optimistic locking. Added an API-level idempotency test and a concurrency integration test. Bug was Critical severity — would have caused duplicate settlements in production."

Show: hypothesis → evidence → collaboration → permanent test guard.`,source:u("how-to-debug-intermittent-software-bugs")},{question:"Explain one failed release.",answer:`Be honest, blameless, and focus on process improvements — interviewers want maturity not excuses.

Example: "Release 3.2 failed UAT because FX rate table migration script ran against wrong schema in pre-prod — rates showed zeros. Testing had used mocked rates in lower env; integration gap. We rolled back within 2 hours. Post-mortem actions: (1) mandatory data parity checklist before UAT, (2) automated smoke on live rate feed, (3) release checklist owner sign-off. I updated regression to include end-to-end rate validation, not just UI display."

Cover: what broke, impact, rollback, root cause, what you changed personally.`,source:u("post-mortem-meeting-in-software-development")},{question:"Explain one production issue.",answer:`Demonstrate calm triage, communication, and follow-up automation.

Example: "After go-live, corporate clients could not download MT940 statements. I joined the war room, reproduced in prod-like UAT with same client ID, traced to a null pointer when account had zero transactions for the day — edge case missed. Provided logs and SQL evidence. Hotfix in 6 hours. I added a negative test for empty-state download and a monitoring alert on 500 errors for that endpoint. Communicated workaround to support: use date range with prior day."

Mention: severity, stakeholders notified, workaround, prevention test.`,source:u("production-support-interview-questions")},{question:"Explain your regression strategy.",answer:`Layer your answer: what runs when, on which environment, manual vs automated.

Example structure:
- Smoke (15 min) — every build: login, core navigation, one payment path
- Sprint regression (2h) — end of sprint: all stories in sprint + affected modules
- Full regression (nightly, 6h) — automated P1/P2 suites on staging
- Pre-prod — manual exploratory on changed areas + full automated pass
- Production sanity — post-deploy smoke only

Prioritize by risk matrix. Maintain regression suite in version control; retire obsolete tests quarterly. Track pass rate trend — dropping pass rate signals tech debt.`,source:u("regression-testing-in-software-testing")},{question:"How do you select automation candidates?",answer:`Use repeatable, stable, high-value criteria — not "automate everything."

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

Example: automate login, payment submission, status API checks; keep one-time regulatory form layout review manual.`,source:F("what-test-cases-to-automate")},{question:"Which tests should NOT be automated?",answer:`Shows judgment — senior testers know automation limits.

Do NOT automate (or deprioritize):
- Exploratory / usability / ad-hoc sessions
- One-time tests (single migration validation)
- Unstable features still in flux (locators change daily)
- CAPTCHA, OTP hardware tokens, physical devices without harness
- Subjective visual design ("does branding look right?")
- Tests where maintenance cost exceeds manual run cost
- Compliance interviews or document review workflows

Better approach: automate the stable checks around these areas (e.g., API returns 200) and keep human judgment for the rest.`,source:u("when-not-to-automate-tests")},{question:"How do you measure automation success?",answer:`Use metrics that tie to business outcomes, not vanity counts.

Useful metrics:
- % critical regression automated (target e.g. 70% of P1 paths)
- Manual regression effort hours saved per release
- Defect leakage rate (prod bugs not caught in QA)
- Mean time to feedback — build to test results (CI duration)
- Flaky test rate (< 2% of runs)
- Automation pass rate trend (stable or improving)
- Cost per test run (infra + maintenance hours)

Avoid: "we have 5000 tests" without context. Report: "Nightly suite covers 85% of P1 scenarios; regression manual effort down from 3 days to 4 hours; zero P1 leakage last 2 releases."`,source:F("test-automation-metrics")},{question:"How do you reduce maintenance cost?",answer:`Maintenance kills automation ROI — explain concrete practices.

1. Page Object Model / Screenplay — UI changes in one place
2. Stable locators — data-testid agreements with frontend team
3. API setup instead of UI for test data (faster, less brittle)
4. Shared libraries for waits, drivers, DB helpers
5. Remove obsolete tests — quarterly suite audit
6. Parallel-safe tests — no shared state between tests
7. Code review for test PRs same as production code
8. Tag tests (@smoke, @payments) — run subsets, not always full suite

Example: "Refactoring 40 duplicate login steps into one fixture cut login-related failures by 60% and fix time from 2 hours to 15 minutes per locator change."`,source:u("page-object-model-in-selenium")},{question:"How do you improve execution speed?",answer:`Parallelization, smarter scope, and faster setup.

Tactics:
- Parallel runs (pytest-xdist, Selenium Grid, cloud like BrowserStack)
- Headless browsers where UI validation allows
- API tests instead of UI for data setup and assertions
- Skip unnecessary sleeps — explicit waits only
- Test data caching / DB snapshots instead of full UI registration per test
- Split suites: smoke on commit, full nightly
- Reuse browser session where framework supports it
- Mock external systems (credit bureau, SWIFT gateway) in lower envs

Example: "Parallelizing 80 tests across 4 nodes + replacing UI login with token injection reduced suite from 3h to 40 min."`,source:F("speed-up-selenium-test-automation")},{question:"How do you maintain test stability?",answer:`Flakiness erodes trust — describe prevention and detection.

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

Example: "We added a custom wait helper and banned Thread.sleep in reviews. Flaky rate went from 12% to under 2% in one quarter."`,source:F("flaky-selenium-tests")},{question:"What improvements did you personally introduce?",answer:`Pick 2–3 with measurable impact — ownership matters for senior roles.

Examples you can adapt:
- "Built pytest + Selenium framework from scratch — team adopted in 2 months"
- "Integrated Allure reports into Jenkins — stakeholders see pass/fail without asking QA"
- "Introduced contract tests for payment API — caught breaking changes in CI before merge"
- "Added data-testid standards with dev lead — locator breakage down 50%"
- "Mentored 2 manual testers on Python — they now own 30% of automation backlog"

Formula: Problem → your action → measurable result. Avoid "we" only — say "I proposed, I implemented, I drove adoption."`,source:u("software-tester-career-growth")},{question:"What bottlenecks existed in your project?",answer:`Show awareness of process constraints and how you navigated them.

Common bottlenecks + responses:
- Slow environment provisioning → pushed for Dockerized test env
- Unclear requirements → asked for acceptance criteria in refinement, wrote BDD scenarios
- Serial QA at end of sprint → advocated shift-left, dev pairing on unit tests
- Shared test data conflicts → built data factory API
- Long regression → automation + risk-based selection
- Dev queue for bug fixes → prioritized by severity, daily triage with lead

Example: "UAT environment was shared with 3 projects — bookings collided. I documented a booking calendar and pushed for dedicated automation sandbox — reduced blocked days from 5/sprint to zero."`,source:u("common-challenges-in-software-testing")},{question:"How do you communicate with business teams?",answer:`Business cares about risk, timeline, and user impact — not Selenium details.

Practices:
- Plain language status: "Payment module — 2 high defects open, release at risk without fix by Wednesday"
- Visual evidence — screenshots, short demo videos for UAT sign-off
- Risk-based summaries in steering meetings — not raw defect counts
- Clarify requirements early — "Given/When/Then" examples in refinement
- Manage expectations on automation — what is covered, what is not
- Document known issues and workarounds before go-live

Example: "For business UAT I run a 30-minute walkthrough of test scope and show a one-page sign-off checklist with pass/fail per requirement — they sign digitally instead of reading 200 test cases."`,source:u("communication-skills-for-software-testers")},{question:"How do you prepare solution documents?",answer:`Solution docs bridge QA findings and dev/BA implementation — structure matters.

Typical sections:
1. Problem statement and business impact
2. Environment and reproduction steps
3. Root cause analysis (with logs/evidence)
4. Proposed solution options (pros/cons)
5. Recommended approach and effort estimate
6. Test impact — regression areas, new test cases
7. Risks and rollback plan

For automation proposals add: framework diagram, folder structure, CI integration, timeline, maintenance ownership.

Example: "For flaky payment tests I wrote a 3-page doc: root cause (implicit waits), option A (explicit waits, 3 days), option B (API-only path, 5 days). Lead chose hybrid. Attached sample code and migration plan for 45 tests."`,source:Je("/software_testing/software_test_documentation.htm")}],jf=ue({id:"deepdive",number:12,title:"Real Project Deep-Dive",description:"These decide seniority. Prepare concrete stories about automation flows, failed releases, and improvements you personally drove.",priority:"critical",color:"var(--accent)",questions:M("dd",Tf,{tags:["project","senior","behavioral"],difficulty:"hard",priority:"critical"})}),_f=[{question:"Show framework flow step by step.",answer:`Typical pytest + Selenium + POM flow:

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
    assert login.is_dashboard_visible()`}],source:u("page-object-model-in-selenium-python")},{question:"Where exactly are locators stored?",answer:`Locators live in a dedicated layer — not scattered in tests.

Common patterns:
1. locators/ package — one file per page (login_locators.py) with tuples/constants
2. Inside Page Object class as class variables (LOC_USERNAME = (By.ID, "user"))
3. YAML/JSON locator files loaded by a LocatorReader utility (environment-specific overrides)

Rule: tests never contain raw By.XPATH strings. Page methods import locators. When UI changes, you update one file, not 50 tests.`,code:[{language:"python",snippet:`# locators/login_locators.py
from selenium.webdriver.common.by import By

USERNAME = (By.ID, 'username')
PASSWORD = (By.ID, 'password')
SUBMIT   = (By.CSS_SELECTOR, 'button[type="submit"]')

# pages/login_page.py — uses locators above`}],source:u("locators-in-selenium")},{question:"What is inside conftest.py?",answer:`conftest.py is pytest's shared configuration module (auto-discovered). Typical contents:

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
    setattr(item, 'rep_' + report.when, report)`}],source:u("pytest-fixtures")},{question:"How are fixtures triggered?",answer:`Fixtures run when pytest sees them as test function parameters (dependency injection).

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
    assert login_user.is_dashboard_visible()`}],source:u("pytest-fixtures")},{question:"How are reports generated?",answer:`Reporting stack in most Python frameworks:

1. pytest-html — plugin adds --html=report.html; conftest embeds screenshots via extras
2. Allure — pytest-allure-adaptor; steps/attachments; allure generate for dashboard
3. Custom listener — pytest hook writes JSON results per test for Jenkins parsing
4. Logging — loguru/logging to logs/run_<timestamp>.log

Flow: test runs → makereport hook captures pass/fail/duration → on fail attach screenshot/log → pytest sessionfinish writes HTML → Jenkins archives report/ and publishes HTML Publisher or Allure plugin.`,code:[{language:"bash",snippet:`pytest tests/ --html=reports/report.html --self-contained-html
# or
pytest tests/ --alluredir=allure-results
allure serve allure-results`}],source:u("pytest-html-report")},{question:"How do retries work internally?",answer:`Retries re-run failed tests without manual intervention.

1. pytest-rerunfailures — @pytest.mark.flaky(reruns=2, reruns_delay=1) or --reruns 2 CLI
2. Custom wrapper — for loop around action catching StaleElementReferenceException
3. Tenacity library on API calls — retry on 503/timeout
4. CI level — Jenkins retry stage (not ideal; prefer test-level)

Internal flow: test fails → plugin checks reruns remaining → same test re-executed → pass stops retry; final fail logged once in report. Combine with root-cause fix — retries mask locator/timing bugs if overused.`,code:[{language:"python",snippet:`import pytest

@pytest.mark.flaky(reruns=2, reruns_delay=1)
def test_flaky_submit(driver):
    LoginPage(driver).submit_form()`}],source:u("pytest-rerunfailed-tests")},{question:"How are screenshots attached?",answer:`Screenshot on failure pattern:

1. pytest_runtest_makereport hook stores report on item
2. Fixture with request.node accesses rep_call.failed
3. driver.save_screenshot(path) or element.screenshot()
4. Attach to report: pytest-html extras (pytest_html.extras.image), or allure.attach.file()

Paths usually: reports/screenshots/<test_name>_<timestamp>.png. Session fixture ensures screenshots/ exists. Only capture on call phase failure to avoid duplicate shots on setup errors unless needed.`,code:[{language:"python",snippet:`@pytest.fixture(autouse=True)
def screenshot_on_fail(request, driver):
    yield
    if hasattr(request.node, 'rep_call') and request.node.rep_call.failed:
        path = f"reports/screenshots/{request.node.name}.png"
        driver.save_screenshot(path)`}],source:u("screenshots-in-selenium-webdriver")},{question:"Explain one Jenkinsfile.",answer:`Declarative Jenkinsfile example for automation:

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
}`}],source:u("jenkins-pipeline-tutorial")},{question:"Explain exact Git flow in your project.",answer:`Typical QA automation Git flow:

1. main — production-ready framework + stable tests
2. develop — integration branch; nightly regression runs here
3. feature/<ticket>-<desc> — branched from develop for new tests/fixes
4. Commit with ticket ID: "QA-123 Add payment status API tests"
5. Push → open Pull Request to develop
6. CI runs smoke on PR (pytest -m smoke)
7. Code review from lead/peer → merge squash
8. Release: develop → main via release PR after UAT sign-off
9. hotfix/<issue> from main for urgent locator fix → PR back to main and develop

You personally: create branch, write tests, push, fix CI failures, update PR from review comments.`,source:u("git-branching-strategies")},{question:"Show one XPath you wrote recently.",answer:`Interviewers want a real, purposeful XPath — not textbook examples.

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
driver.find_element(By.XPATH, STATUS_CELL[1].format(ref='REF12345'))`}],source:u("dynamic-xpath-in-selenium")},{question:"Explain one SQL query you used recently.",answer:`Tie query to test validation — not random SQL.

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
  AND t.status = 'COMPLETED';`}],source:u("sql-join-set-operators")},{question:"Explain one real defect you found.",answer:`Use STAR format with technical depth:

Situation: regression on payment transfer page after UI release.
Task: automate happy path + edge cases for cross-border transfer.
Action: API returned 200 but UI showed "Processing" indefinitely. Compared API JSON status vs DB — DB stuck PENDING. Traced to missing status callback when intermediary bank rejected. Logged Sev-2, attached HAR, API response, SQL proof.
Result: dev fixed webhook handler; added API+DB assertion in automation; defect prevented in 2 later releases.

Pick YOUR story: wrong amount decimal, duplicate SWIFT message, sanction hold not displayed, timezone on value date. Quantify impact if possible.`,source:Je("software_testing/bug_life_cycle.htm")},{question:"What exactly did YOU do personally?",answer:`Separate team vs personal ownership clearly:

I personally:
- Built/maintained Page Objects and locators for 3 modules (login, transfers, admin)
- Wrote 40+ pytest tests (UI + API) and parametrized data sets
- Designed conftest fixtures (driver, env, screenshot hook)
- Integrated Jenkins pipeline and fixed 5+ CI-only failures (headless, paths, secrets)
- Triaged flaky tests — replaced implicit waits, added explicit waits
- Raised 12 production/UAT defects with logs and steps
- Reviewed PRs for locator standards and POM compliance

Team/shared: overall architecture decision, Grid infra, some legacy test migration.

Never claim sole credit for entire framework if you joined mid-project — be honest and specific.`,source:Je("software_testing/skills_required_for_software_tester.htm")}],If=ue({id:"fakecheck",number:13,title:"Fake Experience Checks",description:"Very important. If you cannot answer these naturally, the interviewer will know instantly. Know your framework internals cold.",priority:"critical",color:"var(--red)",questions:M("fc",_f,{tags:["verification","framework","authenticity"],difficulty:"hard",priority:"critical"})}),Rf=[{question:"Python OOP — explain classes, inheritance, polymorphism, and encapsulation with examples.",answer:`Class — blueprint for objects (attributes + methods). Inheritance — child class gets parent behavior; use super() for parent __init__. Polymorphism — same interface, different behavior (method overriding, duck typing). Encapsulation — hide internal state; use _private convention and @property for controlled access.

In test frameworks: BasePage parent with common wait/click; LoginPage( BasePage ) overrides open().`,code:[{language:"python",snippet:`class BasePage:
    def __init__(self, driver):
        self._driver = driver  # encapsulation
    def click(self, locator):
        self._driver.find_element(*locator).click()

class LoginPage(BasePage):  # inheritance
    def login(self, user, pwd):
        self.click(USERNAME)
        # polymorphism — same click(), page-specific flow`}],source:u("python-oops-concepts")},{question:"Pytest framework — explain fixtures, markers, parametrization, and conftest.py usage.",answer:`Fixtures — setup/teardown via @pytest.fixture; inject by parameter name; scopes: function/class/module/session.
Markers — @pytest.mark.smoke to categorize; run with pytest -m smoke; register in pytest.ini.
Parametrize — @pytest.mark.parametrize("user,pwd", [("a","1"),("b","2")]) runs same test with multiple data sets.
conftest.py — shared fixtures/hooks for a directory tree; no import needed.

pytest.ini sets addopts, markers, test paths, log format.`,code:[{language:"python",snippet:`@pytest.mark.smoke
@pytest.mark.parametrize('role', ['admin', 'viewer'])
def test_access(login_fixture, role):
    assert login_fixture.has_permission(role)`}],source:u("pytest-fixtures")},{question:"Selenium waits — explain implicit, explicit, and fluent waits with when to use each.",answer:`Implicit wait — driver.implicitly_wait(n): global poll on find_element. Simple but imprecise; avoid mixing heavily with explicit.
Explicit wait — WebDriverWait + expected_conditions on specific element/state. Preferred for automation.
Fluent wait — WebDriverWait with poll_frequency and ignored_exceptions; fine-grained polling.

Best practice: set implicit to 0; use explicit helpers (wait_clickable, wait_visible) in BasePage. Never Thread.sleep except debugging.`,code:[{language:"python",snippet:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

WebDriverWait(driver, 15).until(
    EC.element_to_be_clickable((By.ID, 'submit'))
).click()`}],source:u("implicit-wait-vs-explicit-wait-in-selenium")},{question:"Dynamic XPath — write and explain XPath strategies for dynamic elements.",answer:`Dynamic elements change id/class at runtime. Strategies:

1. contains() — //input[contains(@id,'email')]
2. starts-with() — //div[starts-with(@id,'panel-')]
3. normalize-space() text — //button[normalize-space()='Submit']
4. Stable parent + relative child — //form[@id='login']//input[@name='user']
5. Axes — following-sibling, ancestor for label-input pairs
6. Prefer data-testid when devs add it — //*[@data-testid='login-btn']

Avoid absolute XPath and index-only paths (div[3]/span[2]).`,code:[{language:"python",snippet:`driver.find_element(By.XPATH, "//input[contains(@id,'username')]")
driver.find_element(By.XPATH, "//label[text()='Amount']/following-sibling::input")`}],source:u("dynamic-xpath-in-selenium")},{question:"Jenkins pipeline failures — debug why tests pass locally but fail in CI.",answer:`Common causes:

1. Environment — missing env vars, wrong BASE_URL, secrets not in Jenkins credentials
2. Headless/browser — Chrome options differ; add --headless=new, --no-sandbox, --disable-dev-shm-usage
3. Timing — CI slower; increase explicit waits; remove Thread.sleep assumptions
4. Paths — Windows vs Linux case sensitivity; hardcoded C:\\ paths
5. Dependencies — requirements.txt not installed; wrong Python version
6. Parallel — race conditions only under -n auto
7. Data — test account locked; DB not seeded in QA
8. Display — no DISPLAY on Linux without headless

Debug: reproduce with same Docker image, archive console + pytest log + screenshot on CI, compare pytest --collect-only locally vs CI.`,source:F("common-jenkins-errors")},{question:"API automation — explain end-to-end API test automation using Python.",answer:`Stack: requests/httpx + pytest + JSON schema validation.

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
    assert r.json()['id'] == 1`}],source:u("api-testing-interview-questions")},{question:"SQL joins — explain INNER, LEFT, RIGHT, and FULL joins with examples.",answer:`INNER JOIN — only rows matching ON condition in both tables.
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
WHERE a.account_id IS NULL;  -- orphans`}],source:u("sql-join-set-operators")},{question:"SWIFT MT vs MX — explain the difference and when each format is used.",answer:`SWIFT MT (Message Type) — legacy FIN format, fixed/block structure (MT103 customer transfer, MT202 bank transfer). Text-based, field tags like :20:, :32A:.

SWIFT MX — XML messages based on ISO 20022 (e.g., pacs.008, pain.001). Rich structured data, better for straight-through processing and modern APIs.

When: MT still widely used in correspondent banking; MX/CBPR+ adoption growing for cross-border ISO 20022 migration. QA validates field tags in MT vs XSD/schema in MX; UAT often compares both during migration.`,source:u("difference-between-mt-and-mx-messages")},{question:"Regression strategy — explain how you plan, select, and execute regression testing.",answer:`Plan:
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
- Sign-off criteria: zero Sev-1/2 open, >95% automated pass, known failures documented`,source:Je("software_testing/regression_testing.htm")},{question:"Production support scenarios — describe how you handle live production issues.",answer:`Production support flow:

1. Triage — severity (Sev-1 payment down vs cosmetic), assign owner
2. Reproduce — logs, transaction ID, timestamp, environment; compare with QA
3. Mitigate — rollback, disable feature flag, manual workaround for ops
4. Root cause — app logs, DB state, SWIFT message trace, API gateway
5. Verify fix in UAT → deploy → smoke in prod (read-only checks)
6. Post-incident — RCA document, new regression test, monitoring alert

QA role: reproduce from prod data (sanitized), validate hotfix, run targeted regression, update automation for gap that missed it.`,source:Je("software_testing/incident_management.htm")},{question:"Framework architecture — explain layers, design patterns, and data flow in your framework.",answer:`Layers:
1. Tests — assertions, markers, thin (no locators)
2. Pages — user actions (login, transfer); inherit BasePage
3. Locators — constants only
4. Utilities — waits, driver factory, API client, DB helper, config reader
5. Data — JSON/Excel/DB fixtures
6. Reports/logs — hooks, Allure

Patterns: Page Object Model, Factory (driver), Singleton (config), Facade (API helper).

Data flow: config.ini → conftest fixtures → test → page → driver → browser; parallel path API client → assertions on JSON + optional DB check.`,source:u("page-object-model-in-selenium-python")},{question:"Exception handling — explain try/except/finally in Python and Selenium exception handling.",answer:`Python: try runs code; except catches specific errors; else if no error; finally always runs (cleanup).

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
    raise`}],source:u("python-exception-handling")},{question:"Logging and reporting — explain how logging and HTML reports are implemented in your framework.",answer:`Logging:
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
    # ... on fail, hook attaches screenshot to HTML report`}],source:u("pytest-html-report")},{question:"Parallel execution — explain how you run tests in parallel locally and in CI.",answer:`Local/CI parallel with pytest-xdist:
pytest tests/ -n auto  (workers = CPU count)
pytest tests/ -n 4     (fixed workers)

Requirements:
- Tests independent — no shared static state
- Session-scoped driver → use function scope OR pytest-xdist worker-specific fixtures
- Unique test data per worker (UUID suffix on accounts)
- Separate Grid nodes or Docker agents in Jenkins for heavy suites

Selenium Grid: Hub routes to multiple nodes; each node one browser instance. CI: parallel stages or matrix (Chrome + Firefox).`,code:[{language:"bash",snippet:`pytest tests/ -n 4 --dist loadscope
# loadscope keeps class tests on same worker`}],source:u("pytest-parallel-testing")},{question:"Real-time debugging scenarios — walk through how you debug flaky or failing tests live.",answer:`Live debugging checklist:

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

Communicate: share screen, narrate hypothesis, prove with one targeted fix.`,source:F("debug-flaky-selenium-tests")}],qf=ue({id:"highpriority",number:14,title:"Extra Hard Prep",description:"These are the highest probability topics based on your profile. Review these last and make sure you can speak to each one confidently.",priority:"critical",color:"var(--amber)",questions:M("hp",Rf,{priority:"critical"})}),Of=[{question:"What is Java, and how do the JDK, JRE, and JVM differ?",answer:`Java is a high-level, object-oriented, platform-independent programming language. Source code (.java) is compiled to bytecode (.class), which the JVM executes. The "Write Once, Run Anywhere" promise comes from running the same bytecode on any OS that has a compatible JVM.

JVM (Java Virtual Machine) is the runtime engine that interprets/JIT-compiles bytecode and manages memory (heap, stack, GC). JRE (Java Runtime Environment) = JVM + core libraries needed to run Java applications. JDK (Java Development Kit) = JRE + development tools (javac compiler, jar, javadoc, debugger).

Example: To run a packaged app you need only the JRE. To write and compile Java code you need the JDK.`,source:Y("javase/tutorial/getStarted/intro/definition.html")},{question:"What is the difference between primitive types and reference types?",answer:`Primitive types (byte, short, int, long, float, double, char, boolean) store values directly on the stack (or inline in objects). They are not objects, have fixed size, and cannot be null.

Reference types (classes, interfaces, arrays, enums) store a reference (memory address) to an object on the heap. They can be null, support methods, and participate in polymorphism. Autoboxing wraps primitives in wrapper objects (int → Integer) when needed.

Example: int x = 10 stores the value 10. String s = "hi" stores a reference to a String object on the heap.`,code:[{language:"java",snippet:`int count = 42;              // primitive
Integer boxed = count;       // autoboxing
String name = "Akash";       // reference type
name = null;                 // valid for references, not primitives`}],source:Y("javase/tutorial/java/nutsandbolts/datatypes.html")},{question:"What is a class, and what is an object?",answer:`A class is a blueprint that defines fields (state) and methods (behavior). It describes what data an entity holds and what operations it can perform. A class exists at compile time as a type definition.

An object is a runtime instance of a class — a concrete entity in memory with its own field values. You create objects with the new keyword and invoke constructors. Many objects can share one class definition.

Example: class Car defines model and speed; new Car("Sedan") creates an object with its own model value.`,code:[{language:"java",snippet:`class Car {
    String model;
    int speed;
    Car(String model) { this.model = model; }
}

Car myCar = new Car("Sedan");  // object instance`}],source:Y("javase/tutorial/java/concepts/")},{question:"What are the four main principles of object-oriented programming?",answer:`Encapsulation bundles data and methods inside a class, hiding internal state behind access modifiers and exposing controlled APIs (getters/setters). This protects invariants and reduces coupling.

Inheritance lets a subclass reuse and extend a superclass (extends keyword). It models is-a relationships and enables code reuse. Java supports single class inheritance but multiple interface implementation.

Polymorphism allows one interface to take many forms — method overriding lets subclasses provide specific behavior; a superclass reference can point to subclass objects. Abstraction hides implementation complexity and exposes only essential behavior via abstract classes and interfaces.

Example: List interface is polymorphic — ArrayList and LinkedList both implement List but behave differently internally.`,source:Y("javase/tutorial/java/concepts/")},{question:"What is the difference between a constructor and a method?",answer:`A constructor initializes a new object when it is created. It has the same name as the class, no return type (not even void), and is invoked automatically by new. A class can have multiple constructors via overloading.

A method performs operations on an object or class. It has a return type (or void), a name, parameters, and is called explicitly. Methods can be static or instance-level; constructors are always instance-level.

Example: Employee(String name) is a constructor that sets initial state. calculateSalary() is a method that returns a computed value.`,code:[{language:"java",snippet:`class Employee {
    String name;
    Employee(String name) { this.name = name; }  // constructor
    double calculateSalary() { return 50000; }   // method
}`}],source:u("constructors-in-java")},{question:"What do public, protected, package-private, and private mean in Java?",answer:`Access modifiers control visibility of classes, fields, and methods:

public — accessible from any class in any package.
protected — accessible within the same package and by subclasses (even in other packages).
package-private (default, no modifier) — accessible only within the same package.
private — accessible only within the declaring class.

Principle of least privilege: start with private, widen only when necessary. Protected is useful for framework extension points; public for API surfaces.`,code:[{language:"java",snippet:`public class User {
    private String password;       // class only
    String email;                  // package-private
    protected int age;             // package + subclasses
    public String getName() { return "Akash"; }  // everywhere
}`}],source:Y("javase/tutorial/java/javaOO/accesscontrol.html")},{question:"What is the difference between an instance member and a static member?",answer:`Instance members (fields and methods without static) belong to each object. Every instance has its own copy of instance fields. You access them via an object reference: obj.method().

Static members belong to the class itself, not any single instance. There is one copy shared by all instances. Access via ClassName.member or obj.member (discouraged). Static methods cannot access instance fields directly — they lack a this reference.

Example: Math.PI is static (one constant for all). An Employee name field is instance-level (each employee has their own name).`,code:[{language:"java",snippet:`class Counter {
    static int total = 0;   // shared across all instances
    int id;
    Counter() { total++; id = total; }
    static int getTotal() { return total; }
}`}],source:u("static-keyword-in-java")},{question:"What is method overloading, and how is it different from method overriding?",answer:`Overloading (compile-time polymorphism) defines multiple methods with the same name but different parameter lists (type, count, or order) within the same class. Return type alone cannot distinguish overloads. Resolved at compile time.

Overriding (runtime polymorphism) provides a subclass-specific implementation of a method already defined in a parent class. Requires the same method signature, compatible return type, and @Override annotation. Resolved at runtime via virtual method dispatch.

Example: println(int) and println(String) are overloaded. A Dog class overriding Animal.speak() is overriding.`,code:[{language:"java",snippet:`class Printer {
    void print(int x) { System.out.println(x); }      // overload
    void print(String s) { System.out.println(s); }   // overload
}

class Animal { void speak() { System.out.println("..."); } }
class Dog extends Animal {
    @Override void speak() { System.out.println("Woof"); }  // override
}`}],source:u("method-overloading-in-java")},{question:"What is inheritance, and why does Java not support multiple inheritance of classes?",answer:`Inheritance (extends) lets a subclass acquire fields and methods from a superclass. It promotes reuse and establishes is-a relationships. Subclasses can override methods and add new behavior. Use super() to call parent constructors.

Java allows only single inheritance of classes to avoid the diamond problem — if two parent classes define the same method, which one does the child inherit? Interfaces solve this: a class can implement multiple interfaces, each declaring contracts without state.

Example: class SavingsAccount extends BankAccount inherits balance and deposit(), but also implements Auditable interface.`,code:[{language:"java",snippet:`class BankAccount {
    double balance;
    void deposit(double amt) { balance += amt; }
}

class SavingsAccount extends BankAccount {
    double interestRate;
    void addInterest() { balance += balance * interestRate; }
}`}],source:Y("javase/tutorial/java/IandI/subclasses.html")},{question:"What is the difference between an interface and an abstract class?",answer:`An interface defines a contract — abstract methods (plus default and static methods since Java 8) that implementing classes must provide. A class can implement multiple interfaces. Interfaces cannot have instance fields (only public static final constants).

An abstract class can have both abstract and concrete methods, instance fields, and constructors. A class extends only one abstract class. Use it when related classes share common state and partial implementation.

Rule of thumb: prefer interfaces for capabilities (Serializable, Runnable). Use abstract classes when subclasses share substantial common code (e.g., BasePage in a test framework).`,code:[{language:"java",snippet:`interface Payable {
    double getAmount();
    default void log() { System.out.println(getAmount()); }
}

abstract class Shape {
    String color;
    abstract double area();
}`}],source:u("difference-between-abstract-class-and-interface-in-java")},{question:"What is the difference between == and equals() when comparing objects?",answer:`== compares references for objects — true only if both variables point to the exact same memory location. For primitives, == compares values.

equals() compares logical equality as defined by the class (default implementation in Object compares references, same as ==). Override equals() to compare meaningful fields. Always override hashCode() when overriding equals() to satisfy the hashCode contract.

Example: Two String objects with "hello" may be == if interned, but equals() always compares character content. For value comparison of objects, use equals(), never ==.`,code:[{language:"java",snippet:`String a = new String("hi");
String b = new String("hi");
System.out.println(a == b);       // false — different objects
System.out.println(a.equals(b));  // true — same content`}],source:u("equals-method-in-java")},{question:"Why is String immutable in Java?",answer:`String objects cannot be modified after creation — any "change" (concat, replace) creates a new String. The char array inside is final and the class is final (cannot be subclassed to break immutability).

Reasons: (1) Security — strings used in class loading, network connections, and file paths cannot be altered by malicious code. (2) String pool — immutability allows safe interning and reuse in the literal pool, saving memory. (3) Thread safety — immutable objects are inherently thread-safe without synchronization. (4) Hash stability — a String used as a HashMap key will not change its hashCode.

Example: String s = "hello"; s.concat(" world") returns a new String; s remains "hello".`,code:[{language:"java",snippet:`String s = "hello";
s.concat(" world");   // returns new String
System.out.println(s);  // still "hello"`}],source:u("string-class-in-java")},{question:"How do String, StringBuilder, and StringBuffer differ?",answer:`String is immutable — every modification creates a new object. Safe for sharing but inefficient for many concatenations in loops.

StringBuilder is mutable and not thread-safe. It modifies an internal char array in place, making it fast for single-threaded string building. Introduced in Java 5.

StringBuffer is mutable and thread-safe (synchronized methods). Slightly slower than StringBuilder due to locking. Use when multiple threads modify the same buffer.

Example: Building a CSV in a loop — use StringBuilder. Building a shared log buffer across threads — use StringBuffer.`,code:[{language:"java",snippet:`String s = "a" + "b" + "c";  // compiler may optimize

StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) sb.append(i);  // efficient

StringBuffer sbf = new StringBuffer();  // thread-safe variant`}],source:u("string-vs-stringbuilder-vs-stringbuffer-in-java")},{question:"What is an exception, and how do checked and unchecked exceptions differ?",answer:`An exception is an event that disrupts normal program flow, represented by Throwable subclasses. Use try-catch-finally to handle them; throw to signal errors; throws to declare checked exceptions on a method signature.

Checked exceptions (extend Exception but not RuntimeException) must be declared or caught at compile time — e.g., IOException, SQLException. They represent recoverable conditions the caller should handle.

Unchecked exceptions (extend RuntimeException) — e.g., NullPointerException, IllegalArgumentException — do not require declaration. They usually indicate programming bugs or unrecoverable failures.

Example: Opening a file throws FileNotFoundException (checked) — caller must handle. Passing null where forbidden throws NullPointerException (unchecked).`,code:[{language:"java",snippet:`try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line = br.readLine();
} catch (IOException e) {          // checked — must handle
    System.err.println(e.getMessage());
}`}],source:Y("javase/tutorial/essential/exceptions/")},{question:"What is the purpose of the final keyword when applied to a variable, method, or class?",answer:`final variable — value cannot be reassigned after initialization. For primitives, the value is fixed. For references, the reference cannot point to another object (but the object itself may still be mutable unless it is immutable).

final method — cannot be overridden by subclasses. Used to lock critical behavior (e.g., security-sensitive methods in java.lang.SecurityManager).

final class — cannot be extended. Examples: String, Integer, Math. Prevents subclassing that could break invariants.

Example: final int MAX_RETRIES = 3 prevents accidental reassignment. final class Utility prevents inheritance of a class meant only for static helpers.`,code:[{language:"java",snippet:`final int MAX = 100;
// MAX = 200;  // compile error

final class Utility {
    static int add(int a, int b) { return a + b; }
}`}],source:u("final-keyword-in-java")}],Df=[{question:"What contract must equals() and hashCode() satisfy?",answer:`If two objects are equal according to equals(), they must have the same hashCode(). This is required for correct behavior in hash-based collections (HashMap, HashSet).

The contract also requires: reflexivity (x.equals(x)), symmetry (x.equals(y) ⇔ y.equals(x)), transitivity, consistency (repeated calls return same result if state unchanged), and x.equals(null) must be false.

Violating the hashCode contract causes objects to land in wrong buckets — lookups fail even when equals() would return true. Use IDE generation or Objects.equals()/Objects.hash() for consistency.`,code:[{language:"java",snippet:`@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof User u)) return false;
    return Objects.equals(id, u.id);
}

@Override
public int hashCode() { return Objects.hash(id); }`}],source:Y("en/java/javase/25/docs/api/java.base/java/lang/Object.html")},{question:"How do List, Set, Queue, and Map differ?",answer:`List — ordered collection allowing duplicates. Access by index. Implementations: ArrayList (fast random access), LinkedList (fast insert/delete at ends).

Set — no duplicate elements. HashSet (unordered, O(1)), LinkedHashSet (insertion order), TreeSet (sorted).

Queue — FIFO (or priority-ordered) processing. LinkedList, PriorityQueue, ArrayDeque (double-ended).

Map — key-value pairs, no duplicate keys. Not a Collection. HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap.

Example: Use List for test case ordering, Set for unique test IDs, Queue for job scheduling, Map for test data keyed by username.`,source:Y("en/java/javase/25/docs/api/java.base/java/util/Collections.html")},{question:"When would you choose ArrayList over LinkedList, or vice versa?",answer:`ArrayList uses a dynamic array — O(1) random access by index, O(1) amortized append at end, but O(n) insert/delete in the middle (shifting elements). Best when you frequently access elements by index or iterate sequentially.

LinkedList uses a doubly-linked node structure — O(1) insert/delete at known node position, O(n) random access. Implements Deque, so efficient as a queue/stack. Higher memory overhead per element (node pointers).

Example: Storing 10,000 test results and accessing by index — ArrayList. Implementing a work queue with frequent add/remove at both ends — LinkedList or ArrayDeque.`,source:u("arraylist-vs-linkedlist-in-java")},{question:"How does HashMap store and retrieve entries, and how are hash collisions handled?",answer:`HashMap computes hashCode() of the key, applies an internal hash function to spread bits, then maps to a bucket index (array position). Each bucket holds a linked list or tree (when bucket size exceeds TREEIFY_THRESHOLD = 8) of entries with the same bucket index.

On put: compute bucket, traverse the chain comparing keys with equals(). If found, replace value; otherwise add new node. On get: same bucket lookup, then equals() chain walk.

Collisions (different keys, same bucket) are handled by chaining (linked list) or treeification for many collisions in one bucket. Load factor (default 0.75) triggers resize/rehash when buckets get too full.`,code:[{language:"java",snippet:`Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);
Integer alice = scores.get("Alice");  // hash → bucket → equals match`}],source:u("internal-working-of-hashmap-java")},{question:"How do HashMap, LinkedHashMap, TreeMap, and ConcurrentHashMap differ?",answer:`HashMap — unordered, not thread-safe, O(1) average get/put. Default choice for single-threaded maps.

LinkedHashMap — maintains insertion order (or access order if configured). Slightly more memory due to linked list links. Useful for LRU caches with removeEldestEntry override.

TreeMap — Red-Black tree, keys sorted by natural order or Comparator. O(log n) operations. No null keys (in natural ordering mode).

ConcurrentHashMap — thread-safe without locking the entire map. Uses segment/bucket-level locking or CAS. Preferred over Collections.synchronizedMap(new HashMap<>()) for concurrent reads/writes.`,source:Y("en/java/javase/25/docs/api/java.base/java/util/HashMap.html")},{question:"What are generics, and what problems does type erasure create?",answer:`Generics add compile-time type safety to collections and methods: List<String> rejects adding an Integer at compile time. Syntax: class Box<T>, List<? extends Number>.

Type erasure removes generic type information at compile time — bytecode only sees raw types. The compiler inserts casts and bridge methods. This means: (1) you cannot use new T() or new T[] at runtime, (2) instanceof List<String> is illegal, (3) overloads differing only by generic type erasure collide, (4) runtime Class tokens lose parameterization.

Example: List<String> and List<Integer> are both just List at runtime — erasure enables backward compatibility with pre-generics bytecode.`,code:[{language:"java",snippet:`List<String> names = new ArrayList<>();
names.add("Akash");
// names.add(42);  // compile error — type safety at compile time

// At runtime: names is just ArrayList (erased)`}],source:Y("javase/tutorial/java/generics/")},{question:"Explain the difference between <? extends T> and <? super T>.",answer:`<? extends T> (upper bounded wildcard) — accepts T or any subtype. You can read (get) as T but cannot add (except null). Producer — produces T values. Example: List<? extends Number> can hold List<Integer>.

<? super T> (lower bounded wildcard) — accepts T or any supertype. You can add T (and subtypes) but read as Object. Consumer — consumes T values. Example: List<? super Integer> can hold List<Number>.

PECS: Producer Extends, Consumer Super. Use extends when you read from the structure; super when you write to it.`,code:[{language:"java",snippet:`void sumNumbers(List<? extends Number> nums) {
    double total = 0;
    for (Number n : nums) total += n.doubleValue();  // read OK
}

void addIntegers(List<? super Integer> list) {
    list.add(42);  // write OK
}`}],source:u("wildcard-in-java")},{question:"What is the difference between Comparable and Comparator?",answer:`Comparable is implemented by the class itself (compareTo method) — defines natural ordering. One ordering per class. Used by TreeSet, TreeMap, Collections.sort() without explicit comparator.

Comparator is a separate strategy object (compare method) — defines external, multiple orderings. Pass to sort(), TreeSet constructor, or stream sorted(). Lambda-friendly: Comparator.comparing(User::getName).

Example: Employee implements Comparable by empId (natural order). Use Comparator.comparing(Employee::getSalary) for salary-based sorting without modifying the class.`,code:[{language:"java",snippet:`class Employee implements Comparable<Employee> {
    int empId;
    public int compareTo(Employee other) {
        return Integer.compare(this.empId, other.empId);
    }
}

Comparator<Employee> bySalary = Comparator.comparing(e -> e.salary);
employees.sort(bySalary);`}],source:u("comparable-vs-comparator-in-java")},{question:"What are lambda expressions and functional interfaces?",answer:`A lambda expression is a concise anonymous function: (params) -> expression or (params) -> { statements }. It implements the single abstract method of a functional interface.

A functional interface has exactly one abstract method (e.g., Runnable, Callable, Comparator, Predicate). Annotate with @FunctionalInterface. Java provides java.util.function.* (Predicate, Function, Consumer, Supplier).

Example: list.forEach(s -> System.out.println(s)) uses Consumer. Streams heavily use lambdas for filtering, mapping, and reducing.`,code:[{language:"java",snippet:`List<String> names = List.of("Alice", "Bob");
names.forEach(n -> System.out.println(n));  // Consumer

Predicate<String> longName = s -> s.length() > 5;
names.stream().filter(longName).count();`}],source:fs},{question:"How do intermediate and terminal Stream operations differ?",answer:`Intermediate operations (filter, map, sorted, distinct, flatMap) return a new Stream and are lazy — they do not process elements until a terminal operation triggers the pipeline. They can be chained.

Terminal operations (collect, forEach, reduce, count, findFirst, anyMatch) produce a non-Stream result (or void) and trigger execution of the entire pipeline. After a terminal operation, the stream is consumed and cannot be reused.

Example: users.stream().filter(u -> u.isActive()).map(User::getName).collect(toList()) — filter and map are intermediate; collect is terminal and drives execution.`,code:[{language:"java",snippet:`List<Integer> result = Stream.of(1, 2, 3, 4, 5)
    .filter(n -> n % 2 == 0)   // intermediate
    .map(n -> n * 10)          // intermediate
    .collect(Collectors.toList());  // terminal → [20, 40]`}],source:Y("en/java/javase/25/docs/api/java.base/java/util/stream/Stream.html")},{question:"Why are Java streams lazy, and why should a stream normally be used only once?",answer:`Laziness means intermediate operations build a pipeline without processing data until a terminal operation requests results. This enables short-circuiting (findFirst stops after first match) and fusing operations for efficiency.

A stream maintains internal state (spliterator position, consumed flag). Once a terminal operation runs, the source is marked consumed. Reusing the same stream throws IllegalStateException. Create a new stream from the source for another pass.

Example: Calling .count() then .collect() on the same stream fails. Instead: List<T> copy = stream.collect(toList()) then process copy twice.`,source:Y("en/java/javase/25/docs/api/java.base/java/util/stream/Stream.html")},{question:"What is the difference between map() and flatMap()?",answer:`map() transforms each element to exactly one output element — 1:1 mapping. Stream<T> → function → Stream<R> with one R per T.

flatMap() transforms each element to zero or more elements and flattens the nested streams into one. Stream<T> → function → Stream<Stream<R>> → flattened Stream<R>. Use when each input produces a collection or optional result.

Example: map(s -> s.length()) turns strings to integers. flatMap(s -> Arrays.stream(s.split(" "))) turns each sentence into multiple words in one stream.`,code:[{language:"java",snippet:`List<String> words = List.of("hello world", "java streams");

List<Integer> lengths = words.stream()
    .map(String::length)           // [11, 13]
    .collect(Collectors.toList());

List<String> tokens = words.stream()
    .flatMap(s -> Arrays.stream(s.split(" ")))  // [hello, world, java, streams]
    .collect(Collectors.toList());`}],source:u("map-vs-flatmap-in-java-stream")},{question:"What is Optional intended for, and when should it not be used?",answer:`Optional<T> is a container that may or may not hold a non-null value. It makes absence explicit in return types, reducing NullPointerException risk. Use orElse/orElseGet/orElseThrow, map, flatMap, filter for safe chaining.

Intended for return values where a result may legitimately be absent — e.g., findUserById() returning Optional<User>. Not intended for: fields, method parameters, collections (use empty collection), or serializable DTOs.

Do not use Optional everywhere — it adds overhead and verbosity. Use null for internal implementation details; Optional for public API return types where absence is meaningful.`,code:[{language:"java",snippet:`Optional<User> user = findUserById(42);
String name = user.map(User::getName).orElse("Guest");

User required = user.orElseThrow(() -> new NotFoundException("User 42"));`}],source:Y("en/java/javase/25/docs/api/java.base/java/util/Optional.html")},{question:"How do orElse() and orElseGet() differ?",answer:`orElse(T other) takes the fallback value directly — it is always evaluated, even if Optional is present. Use for cheap constants: orElse("default").

orElseGet(Supplier<T> supplier) takes a lambda that produces the fallback — invoked only if Optional is empty. Use when the fallback is expensive to compute (database call, heavy object creation).

Performance trap: orElse(computeDefault()) calls computeDefault() even when value is present. orElseGet(() -> computeDefault()) defers computation. orElseThrow() throws if empty.`,code:[{language:"java",snippet:`Optional<String> opt = Optional.of("present");

String a = opt.orElse("fallback");              // "present" — fallback not used
String b = opt.orElseGet(() -> expensiveLookup()); // supplier NOT called
String c = opt.orElse(expensiveLookup());          // expensiveLookup() STILL called!`}],source:Y("en/java/javase/25/docs/api/java.base/java/util/Optional.html")},{question:"Explain thread states and the difference between start() and run().",answer:`Thread states (Thread.State enum): NEW (created, not started), RUNNABLE (executing or ready for CPU), BLOCKED (waiting for monitor lock), WAITING (wait()/join() with no timeout), TIMED_WAITING (sleep/join with timeout), TERMINATED (completed).

start() creates a new native thread and calls run() asynchronously — JVM schedules it. Calling start() twice throws IllegalThreadStateException.

run() is an ordinary method — calling it directly executes synchronously in the current thread with no new thread created. Common interview trap: myThread.run() does not start a thread.`,code:[{language:"java",snippet:`Thread t = new Thread(() -> System.out.println("running"));
t.start();  // new thread, async
t.run();    // runs in current thread — NOT concurrent`}],source:Y("javase/tutorial/essential/concurrency/")},{question:"How do synchronized, volatile, and atomic classes solve different concurrency problems?",answer:`synchronized (method or block) provides mutual exclusion and visibility — only one thread holds the lock; unlock establishes happens-before. Use for compound operations (check-then-act, read-modify-write).

volatile guarantees visibility of writes across threads and prevents instruction reordering for that variable. Does NOT make i++ atomic. Use for single-field flags (boolean done, int status code).

java.util.concurrent.atomic (AtomicInteger, AtomicReference) provide lock-free CAS operations for single-variable atomic updates. Faster than synchronized for counters and reference swaps.

Example: volatile boolean shutdown flag for visibility. AtomicInteger for request counter. synchronized block for transfer between two accounts.`,code:[{language:"java",snippet:`volatile boolean running = true;
AtomicInteger counter = new AtomicInteger(0);

counter.incrementAndGet();  // atomic, lock-free

synchronized void transfer(Account from, Account to, int amt) {
    from.balance -= amt;
    to.balance += amt;
}`}],source:u("volatile-keyword-in-java")},{question:"What is the difference between Runnable, Callable, Future, and CompletableFuture?",answer:`Runnable — void run(), no return value, cannot throw checked exceptions. Used with Thread or ExecutorService.execute().

Callable — V call() returns a value and can throw checked exceptions. Submitted via ExecutorService.submit(), returns Future<V>.

Future — represents async result: get() blocks, isDone(), cancel(). Limited — no chaining, no combining multiple futures.

CompletableFuture — Future + completion callbacks. Supports thenApply, thenCompose, allOf, exceptionally, non-blocking composition. Preferred for async pipelines.`,code:[{language:"java",snippet:`ExecutorService pool = Executors.newFixedThreadPool(2);

Future<Integer> future = pool.submit(() -> 42);
Integer result = future.get();

CompletableFuture<String> cf = CompletableFuture
    .supplyAsync(() -> "Hello")
    .thenApply(s -> s + " World");`}],source:u("callable-vs-runnable-in-java")},{question:"How does try-with-resources work, and what is the role of AutoCloseable?",answer:`try-with-resources (Java 7+) automatically closes resources declared in the try header at block exit, even if an exception occurs. Replaces manual finally { resource.close() }.

AutoCloseable interface defines void close() throws Exception. Any class implementing it (or Closeable) can be used. Resources are closed in reverse declaration order. Suppressed exceptions from close() are attached to the primary exception.

Example: try (BufferedReader br = new BufferedReader(new FileReader(f))) { ... } — br.close() called automatically.`,code:[{language:"java",snippet:`try (FileInputStream fis = new FileInputStream("data.txt");
     BufferedInputStream bis = new BufferedInputStream(fis)) {
    byte[] buf = bis.readAllBytes();
}  // fis and bis closed automatically`}],source:Y("javase/tutorial/essential/exceptions/tryResourceClose.html")},{question:"What is the difference between shallow copying and deep copying?",answer:`Shallow copy duplicates the top-level object but copies references to nested objects — both original and copy share the same mutable nested objects. Cloneable default clone() is shallow. Changes to nested state affect both.

Deep copy recursively duplicates all nested objects, producing fully independent graphs. No shared mutable state between original and copy. Implement manually, via serialization, or copy constructors.

Example: Shallow copy of a List<String> is safe (strings are immutable). Shallow copy of List<List<Integer>> shares inner lists — use deep copy when nested mutability matters.`,code:[{language:"java",snippet:`class Address { String city; }
class Person implements Cloneable {
    Address addr;
    public Person clone() throws CloneNotSupportedException {
        Person p = (Person) super.clone();  // shallow
        p.addr = new Address(); p.addr.city = this.addr.city;  // deep fix
        return p;
    }
}`}],source:u("deep-copy-vs-shallow-copy-in-java")},{question:"What are records and sealed classes, and when are they useful?",answer:`Records (Java 16+) are concise immutable data carriers: record Point(int x, int y) {} auto-generates constructor, equals, hashCode, toString, and final fields. Ideal for DTOs, value objects, and API responses.

Sealed classes (Java 17+) restrict which classes can extend them: sealed class Shape permits Circle, Rectangle. Combined with pattern matching (switch expressions), enables exhaustive handling without default fallthrough.

Use records for immutable data with no behavior beyond accessors. Use sealed classes for controlled inheritance hierarchies (e.g., AST node types, payment methods) where all subtypes are known.`,code:[{language:"java",snippet:`record UserDto(String name, String email) {}

sealed interface Payment permits Card, UPI {
    double amount();
}
record Card(double amount, String last4) implements Payment {}
record UPI(double amount, String vpa) implements Payment {}`}],source:fs}],Nf=[{question:"Explain the Java Memory Model's happens-before relationship and its practical importance.",answer:`The JMM defines when writes by one thread are guaranteed visible to another. A happens-before edge establishes ordering and visibility guarantees. Without it, the compiler and CPU may reorder reads/writes, causing surprising behavior.

Key rules: unlock on a monitor happens-before subsequent lock on same monitor; write to volatile happens-before subsequent read; Thread.start() happens-before any action in started thread; thread termination happens-before return from join().

Practical importance: without happens-before, a thread may never see an update to a shared flag, or see partially constructed objects. Use synchronized, volatile, concurrent utilities, or java.util.concurrent locks to establish ordering.`,source:Y("javase/tutorial/essential/concurrency/memconsist.html")},{question:"Why does volatile provide visibility but not make compound operations atomic?",answer:`volatile ensures that a write is immediately flushed to main memory and subsequent reads see the latest value — no thread-local cache staleness. It also restricts reordering around volatile accesses.

However, volatile does not compose multiple operations into one atomic step. count++ is three operations: read, increment, write. Two threads can both read the same value, increment, and write — losing an update.

Use AtomicInteger.incrementAndGet() for atomic counters, or synchronized/Lock for multi-field invariants. volatile is correct for single-write / single-read flags (initialized, shutdown).`,code:[{language:"java",snippet:`volatile int count = 0;

void increment() {
    count++;  // NOT atomic — race condition possible
}

// Fix:
AtomicInteger safeCount = new AtomicInteger(0);
void safeIncrement() { safeCount.incrementAndGet(); }`}],source:u("volatile-keyword-in-java")},{question:"Describe a deadlock, livelock, and starvation. How would you diagnose and prevent each?",answer:`Deadlock — two or more threads permanently block, each holding a resource the other needs (circular wait). Diagnose: thread dumps (jstack, VisualVM) show "Found one Java-level deadlock". Prevent: lock ordering (always acquire A then B), tryLock with timeout, reduce lock scope.

Livelock — threads actively respond to each other but make no progress (e.g., two people stepping aside in a hallway). Diagnose: high CPU, no state change. Prevent: randomized backoff, state machine with progress guarantees.

Starvation — a thread never gets the resource because higher-priority or greedy threads monopolize it. Diagnose: one thread always waiting in dump. Prevent: fair locks (new ReentrantLock(true)), avoid thread priority abuse, separate thread pools.`,code:[{language:"java",snippet:`// Deadlock prevention — consistent lock order
synchronized (lockA) {
    synchronized (lockB) { /* work */ }
}

// Fair lock
ReentrantLock fairLock = new ReentrantLock(true);`}],source:u("deadlock-in-java")},{question:"How does ConcurrentHashMap support concurrency, and why is it preferable to synchronizing a HashMap?",answer:`ConcurrentHashMap uses fine-grained locking (Java 7 segments) or CAS + synchronized bucket heads (Java 8+). Reads are generally lock-free. Writes lock only the affected bucket, not the entire map.

Collections.synchronizedMap(new HashMap<>()) wraps every method in one lock — all reads and writes serialize, killing scalability under contention.

ConcurrentHashMap also provides atomic compound operations: putIfAbsent, compute, merge. Never use null keys or values. Prefer it for shared caches, registries, and concurrent counters keyed by ID.`,code:[{language:"java",snippet:`ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.putIfAbsent("key", 1);
map.compute("key", (k, v) -> v == null ? 1 : v + 1);`}],source:u("concurrenthashmap-in-java")},{question:"What makes a Stream reduction safe or unsafe for parallel execution?",answer:`A reduction is parallel-safe when the accumulator is associative — grouping does not matter: (a op b) op c == a op (b op c). Integer sum and min are associative. String concatenation and subtraction are NOT.

The combiner must be compatible with the accumulator — merging partial results from different threads must produce the same result as sequential processing. Identity element must satisfy: identity op x == x.

Unsafe: collecting into a non-thread-safe shared container (ArrayList via forEach side effect). Safe: Collectors.toConcurrentMap, reducing with associative ops, or collect(toList()) which uses thread-safe merging internally.`,code:[{language:"java",snippet:`int sum = IntStream.range(1, 1000).parallel()
    .reduce(0, Integer::sum);  // safe — associative

// UNSAFE — shared mutation:
List<Integer> list = new ArrayList<>();
IntStream.range(1, 100).parallel().forEach(list::add);  // race!`}],source:Y("en/java/javase/25/docs/api/java.base/java/util/stream/Stream.html")},{question:"When can parallel streams reduce performance or produce incorrect results?",answer:`Performance degrades when: dataset is small (fork/join overhead exceeds benefit), tasks are trivially cheap, source splitting is poor (LinkedList, IO-bound tasks), or pipeline runs on common ForkJoinPool already saturated with blocking work.

Incorrect results when: operations have side effects on shared mutable state, reduction is non-associative, or ordering-dependent logic assumes sequential encounter order without forOrdered().

Use parallel streams for large in-memory datasets with CPU-bound, stateless, associative operations on ArrayList/arrays. For IO or blocking, use dedicated ExecutorService or virtual threads instead.`,source:u("parallel-streams-in-java")},{question:"Explain covariance, contravariance, invariance, and PECS in the context of Java generics.",answer:`Invariance — Java generics are invariant: List<Dog> is NOT a List<Animal>, even though Dog extends Animal. Prevents adding a Cat to a List<Dog> through an Animal reference.

Covariance (producer) — ? extends T lets you read T but not write (except null). List<? extends Animal> can reference List<Dog> — you get Animals out.

Contravariance (consumer) — ? super T lets you write T but read as Object. List<? super Dog> can reference List<Animal> — you put Dogs in.

PECS: Producer Extends, Consumer Super. Collections.copy uses this: dest is super (consumer), src is extends (producer).`,code:[{language:"java",snippet:`List<? extends Number> producers = List.of(1, 2.5);
Number n = producers.get(0);  // read OK

List<? super Integer> consumers = new ArrayList<Number>();
consumers.add(42);  // write OK`}],source:Y("javase/tutorial/java/generics/wildcards.html")},{question:"What are bridge methods, and why can type erasure cause the compiler to generate them?",answer:`Bridge methods are synthetic methods the compiler generates to preserve polymorphism after type erasure. When a class implements Comparable<Employee>, the compiled bytecode only knows Comparable.compareTo(Object). The actual compareTo(Employee) needs a bridge that casts and delegates.

Without bridges, overriding a generic method with type-specific parameters would not override the erased signature — JVM method resolution would break.

You can see them with javap -p or reflection getDeclaredMethods() — they appear as bridge synthetic methods with erased parameter types.`,code:[{language:"java",snippet:`class Employee implements Comparable<Employee> {
    @Override
    public int compareTo(Employee other) {  // compiler adds bridge:
        return this.id - other.id;        // compareTo(Object) → cast + delegate
    }
}`}],source:u("bridge-method-in-java")},{question:"How does class loading work through loading, linking, initialization, and parent delegation?",answer:`Loading — ClassLoader finds bytecode (.class), defines Class object in method area/metaspace. Binary name → Class<?>

Linking — (1) verify bytecode validity, (2) prepare static fields with default values, (3) resolve symbolic references to direct references (may be lazy).

Initialization — execute <clinit> (static initializers and static field assignments) once per class, thread-safe, parent-first.

Parent delegation: custom loader asks parent (bootstrap → platform → app) first. Prevents core class spoofing (java.lang.String from random JAR). Bootstrap loads java.* from modules/JDK.`,source:Y("javase/tutorial/ext/basics/load.html")},{question:"What types of references can prevent or permit garbage collection, and how do strong, soft, weak, and phantom references differ?",answer:`Strong reference (default) — obj = new Object() prevents GC while reachable. Only collected when no strong path from GC roots.

Soft reference — collected when memory is pressured, before OutOfMemoryError. Useful for memory-sensitive caches (SoftReference<byte[]>).

Weak reference — collected at next GC cycle regardless of memory pressure. WeakHashMap keys for listener maps that should not prevent key GC.

Phantom reference — enqueued after finalization when object is unreachable; get() always returns null. Used for post-mortem cleanup tracking via ReferenceQueue, not accessing the object.`,code:[{language:"java",snippet:`SoftReference<byte[]> cache = new SoftReference<>(largeData);
WeakReference<Object> weak = new WeakReference<>(obj);
PhantomReference<Object> phantom =
    new PhantomReference<>(obj, referenceQueue);`}],source:u("reference-types-in-java")},{question:"How would you investigate a Java memory leak, high garbage-collection pause time, or OutOfMemoryError?",answer:`Step 1: Reproduce and capture evidence — enable GC logging (-Xlog:gc*), heap dump on OOM (-XX:+HeapDumpOnOutOfMemoryError), thread dump (jcmd <pid> Thread.print).

Step 2: Analyze heap with Eclipse MAT, VisualVM, or JFR — look for dominator tree, retained size, leak suspects (collections growing unbounded, static maps holding references, unclosed connections, classloader leaks).

Step 3: For long GC pauses — check heap size vs allocation rate, tune G1/ZGC (-XX:MaxGCPauseMillis), reduce object churn, fix leaks. For OOM — identify Metaspace (class loading), heap (leak), or direct memory (ByteBuffer). Profile with async-profiler or JFR allocation events.`,source:F("java-memory-leak")},{question:"What is escape analysis, and how can the JIT compiler use it to optimize allocation and locking?",answer:`Escape analysis determines whether an object's scope exceeds the current method/thread. If an object does not escape (not returned, not stored in a field, not passed to external code), the JIT can apply optimizations.

Optimizations: scalar replacement (allocate fields on stack instead of heap — no GC pressure), lock elision (remove synchronized on non-shared objects), dead allocation elimination.

Example: Creating a Point inside a loop for local calculation — if it does not escape, the JIT may eliminate heap allocation entirely. Not guaranteed — depends on HotSpot heuristics and -XX:+DoEscapeAnalysis (enabled by default).`,source:u("escape-analysis-in-java")},{question:"Compare platform threads and virtual threads. Which workloads benefit from virtual threads?",answer:`Platform threads (java.lang.Thread) map 1:1 to OS threads — expensive to create (MB stack), limited to thousands. Blocking one blocks an OS thread.

Virtual threads (Project Loom, Java 21+) are JVM-managed, lightweight (KB stack), cheap to create millions. Blocking I/O unmounts the virtual thread from its carrier platform thread, freeing the carrier for other work.

Ideal workloads: high-concurrency I/O-bound tasks — HTTP servers handling many concurrent requests, database connection pools with blocking JDBC, microservice fan-out. Poor fit: CPU-bound computation (use platform threads or parallel streams) and code that pins carriers (synchronized blocks, native code).`,code:[{language:"java",snippet:`try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 10_000; i++) {
        executor.submit(() -> fetchFromApi());  // cheap per task
    }
}`}],source:fs},{question:"Why is pinning important with virtual threads, and how would you detect or reduce it?",answer:`Pinning occurs when a virtual thread cannot unmount from its carrier platform thread during a blocking operation — typically inside synchronized blocks/methods or native (JNI) code. While pinned, the carrier is blocked, reducing scalability toward platform-thread limits.

Detect: JFR event jdk.VirtualThreadPinned, thread dumps showing carrier blocked in synchronized. JDK 21+ reports pinned duration in JFR.

Reduce: replace synchronized with ReentrantLock (virtual-thread-friendly), minimize critical sections, avoid blocking in synchronized, use java.net socket refactored for async or non-blocking I/O. For native libraries, offload to dedicated platform thread pool.`,source:fs},{question:"How would you design an immutable, thread-safe class whose fields include mutable collections?",answer:`Defensive copying: copy mutable inputs in constructor; never expose internal references directly. Use Collections.unmodifiableList/Map on copies for getters, or return new copies each time.

Ensure all fields are final. If the class itself can be subclassed, make it final or prevent overriding of methods that expose state.

For nested mutability: deep copy collections and their elements if elements are mutable. Use immutable collection factories: List.copyOf(), Map.copyOf(), or Guava ImmutableList.

Example: a TestSuite class wrapping List<TestCase> — constructor copies list, getTests() returns List.copyOf(tests).`,code:[{language:"java",snippet:`final class TestSuite {
    private final List<String> cases;
    TestSuite(List<String> cases) {
        this.cases = List.copyOf(cases);  // defensive copy
    }
    List<String> getCases() {
        return cases;  // already unmodifiable
    }
}`}],source:u("immutable-class-in-java")},{question:"Explain optimistic and pessimistic concurrency strategies and when each is appropriate.",answer:`Optimistic concurrency assumes conflicts are rare — read without locking, validate at write time (version field, CAS). If conflict detected, retry or fail. Examples: AtomicReference.compareAndSet, JPA @Version, ConcurrentHashMap.compute. Good for read-heavy, low-contention workloads.

Pessimistic concurrency locks before access — synchronized, ReentrantLock, database SELECT FOR UPDATE. Guarantees exclusive access during critical section. Good for write-heavy, high-contention, or strict invariants (financial transfers).

Choose optimistic when retry cost is low and contention is rare. Choose pessimistic when conflicts are frequent or retry is expensive (long transactions).`,code:[{language:"java",snippet:`// Optimistic — CAS retry loop
AtomicReference<State> state = new AtomicReference<>(initial);
boolean updated;
do {
    State current = state.get();
    State next = current.increment();
    updated = state.compareAndSet(current, next);
} while (!updated);

// Pessimistic
lock.lock();
try { /* critical section */ } finally { lock.unlock(); }`}],source:u("optimistic-vs-pessimistic-locking")},{question:"How would you implement a bounded producer-consumer system with backpressure and graceful shutdown?",answer:`Use a bounded BlockingQueue (ArrayBlockingQueue) — producers block on put() when full (backpressure), consumers block on take() when empty. Decouples rates without unbounded memory growth.

Graceful shutdown: volatile boolean shutdown flag, poison pill sentinel object, or ExecutorService.shutdown() + awaitTermination. Producers check shutdown before put; consumers drain remaining items after shutdown signal.

For multiple producers/consumers: use thread pool executors. CountDownLatch or Phaser to coordinate completion. Handle InterruptedException by restoring interrupt status and exiting cleanly.`,code:[{language:"java",snippet:`BlockingQueue<Task> queue = new ArrayBlockingQueue<>(100);

// Producer
void produce(Task t) throws InterruptedException {
    queue.put(t);  // blocks when full — backpressure
}

// Consumer loop
void consume() throws InterruptedException {
    while (running || !queue.isEmpty()) {
        Task t = queue.poll(1, TimeUnit.SECONDS);
        if (t != null) process(t);
    }
}`}],source:u("producer-consumer-problem-in-java")},{question:"What can go wrong when CompletableFuture stages use the common ForkJoinPool for blocking work?",answer:`CompletableFuture.supplyAsync() and runAsync() default to ForkJoinPool.commonPool() — sized to CPU cores. Blocking calls (JDBC, HTTP, file I/O) inside these tasks occupy worker threads without releasing them, starving other async and parallel stream work system-wide.

Symptoms: throughput collapse under load, deadlocks when all common pool threads block waiting for tasks that cannot start, increased latency for unrelated CompletableFuture chains.

Fix: pass a dedicated Executor for blocking work — Executors.newFixedThreadPool(n), cached pool, or virtual thread executor. Reserve common pool for short CPU-bound tasks only.`,code:[{language:"java",snippet:`ExecutorService blockingPool = Executors.newFixedThreadPool(50);

CompletableFuture<User> future = CompletableFuture
    .supplyAsync(() -> db.fetchUser(id), blockingPool);  // not commonPool

// Java 21+: Executors.newVirtualThreadPerTaskExecutor()`}],source:u("completablefuture-in-java")},{question:"How would you preserve exception context and cancellation across a multi-stage asynchronous workflow?",answer:`Chain with exceptionally() or handle() to recover/log without losing the original cause. Use whenComplete() for side effects that need both result and throwable. Wrap checked exceptions in CompletionException.

Propagate cancellation: CompletableFuture.cancel(true) cascades to incomplete dependencies if composed correctly. Use orTimeout()/completeOnTimeout() (Java 9+) to prevent hung stages. Store correlation IDs in MDC — copy MDC to child tasks explicitly (MDC is thread-local).

For complex workflows, record each stage's outcome in a structured result object rather than swallowing exceptions. Use allOf() + join() carefully — collect all failures, not just the first.`,code:[{language:"java",snippet:`CompletableFuture<String> pipeline = fetchData()
    .thenApply(this::transform)
    .orTimeout(5, TimeUnit.SECONDS)
    .exceptionally(ex -> {
        log.error("Stage failed", ex);
        return "fallback";
    });

pipeline.cancel(true);  // cancel pending work`}],source:u("completablefuture-in-java")},{question:"Design an in-memory, thread-safe cache with expiration. What correctness and performance trade-offs would you consider?",answer:`Core design: ConcurrentHashMap for storage, value wrapper holding data + expiry timestamp. On get: return if not expired, else remove and miss. Background ScheduledExecutorService or Caffeine's eviction thread for proactive cleanup.

Correctness: handle thundering herd on expiry (only one thread reloads — use compute or Future), null values (ConcurrentHashMap disallows null — use Optional), clock skew (use System.nanoTime() or Instant).

Trade-offs: size-bound (LRU via LinkedHashMap removeEldestEntry vs Caffeine W-TinyLFU), TTL vs idle expiration, read-through vs cache-aside, soft references for memory pressure. For production, prefer Caffeine or Guava Cache over hand-rolled — battle-tested eviction, stats, and concurrency.`,code:[{language:"java",snippet:`class CacheEntry<V> {
    final V value;
    final long expiresAt;
    boolean isExpired() { return System.currentTimeMillis() > expiresAt; }
}

ConcurrentHashMap<String, CacheEntry<User>> cache = new ConcurrentHashMap<>();

User get(String key) {
    CacheEntry<User> entry = cache.get(key);
    if (entry == null || entry.isExpired()) {
        cache.remove(key);
        return loadAndPut(key);
    }
    return entry.value;
}`}],source:u("lru-cache-in-java")}],Lf={category:"Basic Java",tags:["java","core"],difficulty:"easy",priority:"high"},Mf={category:"Intermediate Java",tags:["java","collections","concurrency"],difficulty:"medium",priority:"high"},Bf={category:"Challenging Java",tags:["java","advanced","jvm"],difficulty:"hard",priority:"critical"},Ff=ue({id:"java",number:15,title:"Java",description:"Core Java from fundamentals through collections, concurrency, JVM internals, and system design — essential for backend and automation roles.",priority:"high",color:"var(--accent)",questions:[...M("java",Of,Lf),...M("jav",Df,Mf),...M("javc",Nf,Bf)]}),Uf=[{question:"What is JavaScript, and how does it differ from Java?",answer:`JavaScript is a high-level, dynamic, interpreted programming language standardized as ECMAScript. It runs in browsers (client-side), on servers (Node.js), and in embedded runtimes. It is multi-paradigm — procedural, object-oriented, and functional.

Java is a statically typed, compiled language on the JVM with class-based OOP. JavaScript is dynamically typed and prototype-based. Despite the similar name (a 1995 marketing decision), they are unrelated languages with different syntax, type systems, and execution models.

In QA automation: JavaScript powers Playwright, Cypress, and WebdriverIO; Java powers Selenium with TestNG/JUnit.`,source:j("Web/JavaScript/Guide/Introduction")},{question:"What primitive data types does JavaScript provide?",answer:`JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, null, and symbol. Primitives are immutable and compared by value.

Everything else is an object — including functions, arrays, dates, and regular expressions. typeof null returns "object" (a long-standing bug), so use value === null to test for null.

typeof undefined → "undefined". typeof 42n → "bigint". typeof Symbol() → "symbol".`,code:[{language:"javascript",snippet:`typeof 'hello'     // 'string'
typeof 42          // 'number'
typeof true        // 'boolean'
typeof undefined   // 'undefined'
typeof null        // 'object' (historical quirk)
typeof {}          // 'object'
typeof []          // 'object'
typeof (() => {})  // 'function'`}],source:j("Web/JavaScript/Guide/Data_structures")},{question:"How do var, let, and const differ in scope, initialization, and reassignment?",answer:`var is function-scoped (or global-scoped), hoisted with initial value undefined, and can be redeclared and reassigned.

let and const are block-scoped ({ }), hoisted but uninitialized (temporal dead zone until declaration), and cannot be redeclared in the same scope. let allows reassignment; const does not allow rebinding the variable identifier (though object/array contents can still be mutated).

Modern code: prefer const by default, let when reassignment is needed, avoid var.`,code:[{language:"javascript",snippet:`if (true) {
  var a = 1;   // visible outside block
  let b = 2;   // block-scoped
  const c = 3; // block-scoped, no rebinding
}
console.log(a); // 1
// console.log(b); // ReferenceError

const user = { name: 'Akash' };
user.name = 'Lead'; // OK — mutating object, not rebinding const`}],source:j("Web/JavaScript/Reference/Statements/let")},{question:"What is the difference between null and undefined?",answer:`undefined means a variable has been declared but not assigned a value, or a function parameter was omitted, or a property does not exist on an object. It is the default value of uninitialized let/const bindings.

null is an intentional absence of value — a programmer-assigned placeholder meaning "no object here." typeof undefined is "undefined"; typeof null is "object."

Loose equality: null == undefined is true. Strict equality: null === undefined is false. Prefer === and explicit null/undefined checks in tests.`,code:[{language:"javascript",snippet:`let x;
console.log(x);              // undefined
console.log(x === undefined); // true

let y = null;
console.log(y === null);      // true
console.log(null == undefined); // true
console.log(null === undefined); // false`}],source:j("Web/JavaScript/Reference/Global_Objects/null")},{question:"What is the difference between == and ===?",answer:`== (loose equality) compares values after type coercion — e.g., "5" == 5 is true, null == undefined is true, 0 == false is true.

=== (strict equality) compares without coercion — types and values must match. "5" === 5 is false.

Best practice: always use === and !== to avoid subtle coercion bugs. Use Object.is() when you need SameValue semantics (distinguishes +0 and -0, treats NaN as equal to NaN).`,code:[{language:"javascript",snippet:`console.log('5' == 5);   // true
console.log('5' === 5);  // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true`}],source:j("Web/JavaScript/Equality_comparisons_and_sameness")},{question:"What values are falsy in JavaScript?",answer:`A value is falsy if it coerces to false in a boolean context. The 8 falsy values are:

false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, and NaN.

Everything else is truthy — including "0", "false", [], {}, and function references. In conditionals and assertions, explicitly check for null/undefined/empty rather than relying on truthiness when clarity matters.`,code:[{language:"javascript",snippet:`const falsy = [false, 0, -0, 0n, '', null, undefined, NaN];
falsy.forEach(v => console.log(Boolean(v))); // all false

console.log(Boolean('0'));    // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true`}],source:j("Web/JavaScript/Reference/Global_Objects/Boolean")},{question:"What is type coercion? Give examples of implicit and explicit coercion.",answer:`Type coercion converts a value from one type to another. Explicit coercion is intentional: Number("42"), String(42), Boolean(0).

Implicit coercion happens automatically in operations: "5" + 1 → "51" (number coerced to string for concatenation), "5" - 1 → 4 (string coerced to number), if ([]) { ... } (value coerced to boolean).

Coercion causes many interview bugs. Use strict equality, Number.parseInt/parseFloat with radix, and explicit conversions in test data handling.`,code:[{language:"javascript",snippet:`// Explicit
Number('42');    // 42
String(42);        // '42'
Boolean(0);        // false

// Implicit
'5' + 1;           // '51'
'5' - 1;           // 4
!!'hello';         // true
null + 1;          // 1`}],source:j("Web/JavaScript/Guide/Equality_comparisons_and_sameness")},{question:"What is the difference between a function declaration and a function expression?",answer:`Function declaration: function greet() { } — hoisted entirely; can be called before its line in the source.

Function expression: const greet = function() { } or const greet = function named() { } — the variable is hoisted but not initialized until assignment; cannot be called before that line.

Named function expressions help stack traces. Arrow functions are always expressions. Declarations are invalid inside block scopes in sloppy mode but allowed in strict/module code.`,code:[{language:"javascript",snippet:`sayHi(); // works — declaration hoisted
function sayHi() { return 'hi'; }

// sayBye(); // TypeError — const in TDZ
const sayBye = function () { return 'bye'; };`}],source:j("Web/JavaScript/Reference/Statements/function")},{question:"How do arrow functions differ from regular functions?",answer:`Arrow functions (() => {}) have lexical this — they inherit this from the enclosing scope, not from how they are called. They have no own arguments object, cannot be used as constructors (no new), and cannot be generator functions.

Regular functions get dynamic this (method call, call/apply/bind, new). Arrow functions are concise for callbacks; regular functions are needed for object methods that need their own this, constructors, and prototype methods.`,code:[{language:"javascript",snippet:`const obj = {
  name: 'QA',
  regular() { return this.name; },
  arrow: () => this?.name,
};
console.log(obj.regular()); // 'QA'
console.log(obj.arrow());   // undefined (lexical this)

const double = n => n * 2;`}],source:j("Web/JavaScript/Reference/Functions/Arrow_functions")},{question:"What is an object, and how can its properties be read, added, changed, and deleted?",answer:`An object is a collection of key-value properties. Keys are strings or symbols; values can be any type including functions (methods).

Read: dot notation obj.name or bracket notation obj["name"] (required for dynamic keys). Add/change: assignment obj.key = value. Delete: delete obj.key (returns true if successful).

Optional chaining obj?.prop and nullish coalescing obj?.prop ?? default safely handle missing values in automation configs.`,code:[{language:"javascript",snippet:`const user = { name: 'Akash' };
user.role = 'QA';           // add
user['name'] = 'Akash K';  // change
console.log(user.name);     // read
delete user.role;
console.log(user?.team ?? 'N/A');`}],source:j("Web/JavaScript/Guide/Working_with_objects")},{question:"How do arrays differ from ordinary objects?",answer:`Arrays are specialized objects optimized for ordered, integer-indexed collections. Keys are automatic non-negative integer indices (0, 1, 2…). They have a length property and Array prototype methods (map, filter, push, etc.).

Objects use arbitrary string/symbol keys and have no guaranteed order (though modern engines preserve insertion order for string keys). typeof [] is "object"; Array.isArray([]) reliably identifies arrays.

Use arrays for ordered lists; objects for keyed records/maps.`,code:[{language:"javascript",snippet:`const arr = ['a', 'b'];
arr.custom = true;       // arrays are objects too
console.log(arr[0]);     // 'a'
console.log(arr.length); // 2
console.log(Array.isArray(arr)); // true`}],source:j("Web/JavaScript/Reference/Global_Objects/Array")},{question:"What do map(), filter(), reduce(), find(), and forEach() do?",answer:`All are Array iteration methods that take a callback.

forEach — runs callback for each element; returns undefined; cannot break early.
map — returns new array of callback return values (same length).
filter — returns new array of elements where callback returns truthy.
find — returns first element where callback returns truthy, else undefined.
reduce — accumulates to a single value: arr.reduce((acc, cur) => ..., initial).

map/filter/reduce are non-mutating; prefer them over manual loops for readability in test data transforms.`,code:[{language:"javascript",snippet:`const nums = [1, 2, 3, 4];
nums.map(n => n * 2);           // [2, 4, 6, 8]
nums.filter(n => n % 2 === 0);  // [2, 4]
nums.find(n => n > 2);          // 3
nums.reduce((s, n) => s + n, 0); // 10
nums.forEach(n => console.log(n));`}],source:j("Web/JavaScript/Reference/Global_Objects/Array/map")},{question:"What is destructuring, and how does it work with arrays and objects?",answer:`Destructuring unpacks values from arrays or properties from objects into distinct variables in one statement.

Array: const [a, b, ...rest] = arr — position-based, rest collects remaining elements.
Object: const { name, role = 'QA' } = user — key-based, rename with { name: userName }, defaults for missing keys.

Common in automation: extracting API response fields, swapping variables, function parameter unpacking.`,code:[{language:"javascript",snippet:`const [first, second] = [10, 20, 30];
const { status, data: body } = { status: 200, data: { ok: true } };

function login({ user, pass }) {
  return \`\${user}:\${pass}\`;
}
login({ user: 'admin', pass: 'secret' });`}],source:j("Web/JavaScript/Reference/Operators/Destructuring")},{question:"What do the spread and rest syntaxes do?",answer:`Spread (...) expands an iterable into elements or object properties: [...arr1, ...arr2], { ...defaults, ...overrides }, fn(...args).

Rest collects remaining items into an array or object: function sum(...nums), const [head, ...tail] = arr. Same syntax, opposite direction — spread expands, rest collects.

Use spread for shallow copies and merging configs; rest for variadic functions and partial destructuring.`,code:[{language:"javascript",snippet:`const base = { timeout: 5000 };
const opts = { ...base, retries: 3 };

const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3

function logAll(level, ...messages) {
  messages.forEach(m => console.log(level, m));
}`}],source:j("Web/JavaScript/Reference/Operators/Spread_syntax")},{question:"What is the difference between synchronous and asynchronous code?",answer:`Synchronous code runs line by line — each statement blocks until it finishes. The call stack executes one function at a time to completion.

Asynchronous code schedules work for later (timers, network I/O, file reads) and continues without waiting. Completion is handled via callbacks, promises, or async/await. JavaScript is single-threaded but non-blocking via the event loop.

In browser tests: clicking a button is sync; waiting for an API response or animation is async — use await, explicit waits, or promise-based helpers.`,source:j("Web/JavaScript/Reference/Global_Objects/Promise")}],Wf=[{question:"What is lexical scope?",answer:`Lexical (static) scope means a function's accessible variables are determined by where the function is written in source code, not where it is called. Inner functions can access outer function variables, module-level bindings, and globals — but not sibling scopes.

Scope chain: inner → outer → … → global. Block statements with let/const create block scope. Closures and module privacy rely on lexical scope.`,code:[{language:"javascript",snippet:`function outer() {
  const secret = 'token';
  function inner() {
    console.log(secret); // lexical access to outer
  }
  return inner;
}
const fn = outer();
fn(); // 'token' — still in closure scope`}],source:j("Web/JavaScript/Guide/Closures")},{question:"What is a closure, and what are practical uses for closures?",answer:`A closure is a function plus its lexical environment — it retains access to outer variables even after the outer function returns.

Practical uses:
1. Data privacy — hide state behind factory functions
2. Partial application / currying
3. Event handlers that remember context
4. Memoization caches
5. Module pattern before ES modules

Closures are powerful but can retain large objects if not careful (memory leaks in long-lived SPAs).`,code:[{language:"javascript",snippet:`function createCounter() {
  let count = 0;
  return {
    inc() { return ++count; },
    get() { return count; },
  };
}
const c = createCounter();
c.inc(); // 1
c.get(); // 1`}],source:j("Web/JavaScript/Guide/Closures")},{question:"What is hoisting, and how does it affect var, let, const, functions, and classes?",answer:`Hoisting moves declarations to the top of their scope during compilation — before execution.

var: declaration and initialization hoisted as undefined; usable before assignment.
let/const: declaration hoisted but uninitialized (temporal dead zone until line runs).
Function declarations: fully hoisted — callable before definition line.
Function expressions / arrow functions: only variable hoisting applies.
Classes: hoisted but in TDZ like let — ReferenceError if used before declaration.

Understanding hoisting explains "Cannot access before initialization" errors.`,code:[{language:"javascript",snippet:`console.log(typeof fnDecl); // 'function'
function fnDecl() {}

// console.log(fnExpr); // ReferenceError
const fnExpr = function () {};

// console.log(MyClass); // ReferenceError
class MyClass {}`}],source:j("Web/JavaScript/Guide/Functions#function_hoisting")},{question:"What is the temporal dead zone?",answer:`The temporal dead zone (TDZ) is the period between entering a scope and the line where let, const, or class is declared. Accessing the binding in the TDZ throws ReferenceError.

var does not have a TDZ — it is initialized to undefined when hoisted. TDZ prevents using block-scoped variables before they are properly initialized, catching bugs that var allowed.

typeof undeclaredVariable → ReferenceError in modules; typeof x where let x exists in TDZ → ReferenceError.`,code:[{language:"javascript",snippet:`{
  // TDZ for \`value\` starts
  // console.log(value); // ReferenceError
  const value = 42;
  // TDZ ends
}`}],source:j("Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz")},{question:"How is this determined in a regular function, method, constructor, and arrow function?",answer:`this is determined by call site, not definition (except arrows):

1. Simple call fn() — this is undefined (strict) or global object (sloppy)
2. Method call obj.m() — this is obj
3. Constructor new Fn() — this is the new instance
4. call/apply/bind — this is explicitly set
5. Arrow function — lexical this from enclosing scope; ignores call-site rules

Losing this: const m = obj.method; m() drops object context — fix with bind or arrow in class fields.`,code:[{language:"javascript",snippet:`const user = {
  name: 'Akash',
  greet() { return this.name; },
  arrow: () => this?.name,
};
console.log(user.greet()); // 'Akash'
const loose = user.greet;
// console.log(loose()); // undefined or error in strict`}],source:j("Web/JavaScript/Reference/Operators/this")},{question:"What do call(), apply(), and bind() do?",answer:`All three set the this value for a function invocation.

call(thisArg, arg1, arg2, …) — invokes immediately with individual arguments.
apply(thisArg, [args]) — invokes immediately with arguments as array-like.
bind(thisArg, …) — returns a new function with permanently bound this (and optional partial args); does not invoke immediately.

Use bind for event handlers, call/apply for borrowing methods (e.g., Array.prototype.slice.call(arguments)).`,code:[{language:"javascript",snippet:`function greet(greeting) {
  return \`\${greeting}, \${this.name}\`;
}
const user = { name: 'QA' };
greet.call(user, 'Hello');
greet.apply(user, ['Hi']);
const bound = greet.bind(user, 'Hey');
bound();`}],source:j("Web/JavaScript/Reference/Global_Objects/Function/bind")},{question:"How does prototype-based inheritance work?",answer:`Every object has an internal [[Prototype]] link (accessed via Object.getPrototypeOf or __proto__). When a property is read, JavaScript walks the prototype chain until found or null.

Functions have a prototype property used when called with new — new instance's [[Prototype]] links to Constructor.prototype. Methods on Constructor.prototype are shared by all instances.

Object.create(proto) sets prototype directly. class syntax is syntactic sugar over this model.`,code:[{language:"javascript",snippet:`function Animal(name) { this.name = name; }
Animal.prototype.speak = function () {
  return \`\${this.name} speaks\`;
};
const dog = new Animal('Rex');
console.log(dog.speak()); // Rex speaks
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true`}],source:j("Web/JavaScript/Inheritance_and_the_prototype_chain")},{question:"How is class syntax related to JavaScript's prototype system?",answer:`class declarations define a constructor function and attach methods to prototype — same inheritance model as pre-ES6 patterns. class methods are non-enumerable on prototype. static methods live on the constructor.

extends sets up prototype chain between prototypes and provides super keyword. class fields add instance properties in constructor body.

Classes are not hoisted like function declarations (TDZ). They are cleaner syntax, not a new object model.`,code:[{language:"javascript",snippet:"class Page {\n  constructor(url) { this.url = url; }\n  open() { return `Opening ${this.url}`; }\n}\nclass LoginPage extends Page {\n  login(user) { return super.open() + ` as ${user}`; }\n}"}],source:j("Web/JavaScript/Reference/Classes")},{question:"What is the difference between own and inherited properties?",answer:`Own properties exist directly on the object. Inherited properties come from the prototype chain.

Object.hasOwn(obj, key) or obj.hasOwnProperty(key) — own only.
key in obj — own or inherited.
Object.keys(obj) — enumerable own string keys only.

When iterating test config objects, own properties avoid picking up prototype pollution or inherited methods.`,code:[{language:"javascript",snippet:`const parent = { shared: 1 };
const child = Object.create(parent);
child.own = 2;

Object.hasOwn(child, 'own');    // true
Object.hasOwn(child, 'shared'); // false
'shared' in child;              // true`}],source:j("Web/JavaScript/Reference/Global_Objects/Object/hasOwn")},{question:"How do Object.freeze(), Object.seal(), and const differ?",answer:`const prevents rebinding a variable — the binding is constant, but the object it points to can still be mutated.

Object.seal(obj) — cannot add/delete properties; existing properties can be changed if writable.
Object.freeze(obj) — shallow freeze: cannot add, delete, or change properties (writable/configurable false).

Deep immutability requires recursive freeze or immutable data libraries. freeze/seal are shallow — nested objects remain mutable.`,code:[{language:"javascript",snippet:`const cfg = { retries: 3 };
cfg.retries = 5; // OK — const does not freeze object

const frozen = Object.freeze({ retries: 3 });
// frozen.retries = 5; // fails silently or throws in strict`}],source:j("Web/JavaScript/Reference/Global_Objects/Object/freeze")},{question:"What are shallow copies, and why do spread syntax and Object.assign() not perform deep cloning?",answer:`A shallow copy duplicates top-level properties/elements but shares references to nested objects.

[...arr], { ...obj }, Object.assign({}, obj), and Array.slice() all create shallow copies. Mutating nested.shared in the copy also mutates the original.

Deep cloning requires recursion or structuredClone() (built-in, handles many types but not functions or DOM nodes). JSON.parse(JSON.stringify(obj)) works for plain JSON data only.`,code:[{language:"javascript",snippet:`const orig = { meta: { env: 'prod' } };
const copy = { ...orig };
copy.meta.env = 'staging';
console.log(orig.meta.env); // 'staging' — shared reference

const deep = structuredClone(orig);`}],source:j("Web/JavaScript/Reference/Global_Objects/Object/assign")},{question:"What is a Promise, and what are its pending, fulfilled, and rejected states?",answer:`A Promise represents a future value from async work. States:

pending — initial; neither fulfilled nor rejected.
fulfilled — operation succeeded; value available to .then handlers.
rejected — operation failed; reason available to .catch handlers.

Once settled (fulfilled or rejected), a promise cannot change state. .then/.catch/.finally return new promises, enabling chains. Prefer async/await for readability; promises for parallel composition (Promise.all).`,code:[{language:"javascript",snippet:`const p = fetch('/api/users')
  .then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  })
  .catch(err => console.error(err))
  .finally(() => console.log('done'));`}],source:j("Web/JavaScript/Reference/Global_Objects/Promise")},{question:"How do Promise.all(), allSettled(), race(), and any() differ?",answer:`Promise.all(iterable) — waits for all; rejects immediately on first rejection; resolves to array of results in order.
Promise.allSettled(iterable) — waits for all; never short-circuits; each result is { status, value/reason }.
Promise.race(iterable) — settles when first promise settles (fulfill or reject).
Promise.any(iterable) — fulfills when first promise fulfills; rejects AggregateError only if all reject.

Use all for parallel required steps, allSettled for independent reports, race for timeouts, any for fastest successful response.`,code:[{language:"javascript",snippet:`await Promise.all([fetch('/a'), fetch('/b')]);
const results = await Promise.allSettled(tasks);
const winner = await Promise.race([fetch(url), timeout(5000)]);`}],source:j("Web/JavaScript/Reference/Global_Objects/Promise/all")},{question:"How are async and await related to promises?",answer:`async marks a function as always returning a Promise — explicit return values are wrapped in Promise.resolve.

await pauses execution inside async functions until a promise settles, then unwraps the value or throws on rejection. await only works inside async functions (or modules/top-level await in modules).

async/await is syntactic sugar over .then chains — same microtask scheduling. Use try/catch for error handling; Promise.all inside async for concurrency.`,code:[{language:"javascript",snippet:`async function loadUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    if (!res.ok) throw new Error('Not found');
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}`}],source:j("Web/JavaScript/Reference/Operators/await")},{question:"How does error propagation differ between synchronous code, promise chains, and async functions?",answer:`Synchronous: throw propagates up the call stack until caught by try/catch or becomes uncaught exception.

Promise chains: throw or rejection inside .then becomes rejected promise; must .catch at end or unhandledrejection fires. Re-throw in catch continues rejection downstream.

async/await: rejected awaited promise throws synchronously inside async function — catch with try/catch around await. Unhandled throw in async function rejects returned promise.

Never forget return await in nested try/catch when you need to catch downstream rejections in the same function.`,code:[{language:"javascript",snippet:`// Sync
try { JSON.parse('bad'); } catch (e) { /* handle */ }

// Promise
Promise.resolve()
  .then(() => { throw new Error('fail'); })
  .catch(e => console.error(e));

// async/await
async function run() {
  try { await mightFail(); }
  catch (e) { /* handle */ }
}`}],source:j("Web/JavaScript/Guide/Using_promises#chaining")},{question:"What are ES modules, and how do named and default exports differ?",answer:`ES modules (import/export) are static, file-scoped, strict, and tree-shakeable. Browser and Node (with "type": "module") support them natively.

Named export: export const foo = 1; import { foo } from './mod.js' — must match export name (or alias with as).
Default export: export default function() {} — import anyName from './mod.js' — one per module.

import is hoisted and read-only live binding for named exports. CommonJS (require/module.exports) is dynamic and used in older Node code.`,code:[{language:"javascript",snippet:`// utils.js
export const PI = 3.14;
export default function add(a, b) { return a + b; }

// app.js
import add, { PI } from './utils.js';`}],source:j("Web/JavaScript/Guide/Modules")},{question:"What is event delegation, and when is it useful in browser applications?",answer:`Event delegation attaches one listener to a parent element instead of many on children. Events bubble — the handler checks event.target (or closest()) to identify which child was interacted with.

Benefits: fewer listeners, works for dynamically added elements, lower memory. Useful for tables, lists, menus, and paginated UI in tests.

Use event.target.matches(selector) or e.target.closest("button") for robust delegation. Remember blur/focus do not bubble; use capture phase if needed.`,code:[{language:"javascript",snippet:`document.querySelector('#user-table').addEventListener('click', (e) => {
  const row = e.target.closest('tr[data-id]');
  if (!row) return;
  console.log('Clicked user', row.dataset.id);
});`}],source:j("Web/JavaScript/Event_delegation")},{question:"What is the difference between debouncing and throttling?",answer:`Debouncing delays execution until events stop for a wait period — only the last trigger runs. Ideal for search-as-you-type, resize handlers, form validation.

Throttling limits execution to at most once per interval — first (or last) call in window runs. Ideal for scroll, mousemove, rate-limited API polling.

Both reduce expensive handler frequency. Debounce = wait for pause; throttle = cap frequency.`,code:[{language:"javascript",snippet:`function debounce(fn, ms) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), ms);
  };
}

function throttle(fn, ms) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) { last = now; fn(...args); }
  };
}`}],source:j("Web/API/Document/scroll_event")},{question:"What are iterators and generators?",answer:`An iterator is an object with next() returning { value, done }. Iterables (arrays, maps, sets, strings) implement Symbol.iterator.

A generator function function* gen() uses yield to pause and resume, automatically returning an iterator. Generators simplify lazy sequences, infinite streams, and custom iteration.

for...of consumes iterables. Generators are single-use iterators. Useful for paginated API fetching one page at a time.`,code:[{language:"javascript",snippet:`function* range(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
for (const n of range(1, 3)) console.log(n);

const iter = [1, 2][Symbol.iterator]();
iter.next(); // { value: 1, done: false }`}],source:j("Web/JavaScript/Guide/Iterators_and_generators")},{question:"How do Map and Set differ from Object and Array for common lookup and uniqueness tasks?",answer:`Map: key-value store with any type as key, insertion order, size property, better performance for frequent add/delete. No key stringification like Object.

Set: collection of unique values — add/has/delete are O(1) average. Deduping: [...new Set(arr)].

Object: literal-friendly, JSON-serializable, prototype chain (use Object.create(null) for pure dict). Array: ordered list with index access; includes() for membership is O(n) — Set.has() is O(1).`,code:[{language:"javascript",snippet:`const seen = new Set();
seen.add('btn-submit');
seen.has('btn-submit'); // true

const cache = new Map();
cache.set(requestKey, response);
cache.get(requestKey);`}],source:j("Web/JavaScript/Reference/Global_Objects/Map")}],zf=[{question:"Explain the call stack, job queues, and the event loop.",answer:`The call stack executes synchronous JavaScript — one frame per function call. When empty, the event loop checks job queues.

Macrotask queue (task queue): setTimeout, setInterval, I/O callbacks — one macrotask per loop turn after microtasks drain.

Microtask queue: promise reactions (.then/catch/finally), queueMicrotask, MutationObserver — entire queue flushed after each macrotask before next macrotask.

Pattern: run sync code → drain all microtasks → render (browser) → next macrotask. This explains why promise callbacks run before setTimeout(0).`,code:[{language:"javascript",snippet:`console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// 1, 4, 3, 2`}],source:j("Web/JavaScript/Event_loop")},{question:"What is the ordering relationship among synchronous code, promise jobs, queueMicrotask(), and timers?",answer:`Order within one event loop turn:

1. Execute current synchronous call stack to completion.
2. Drain the microtask queue completely (all promise jobs and queueMicrotask callbacks, including microtasks scheduled by other microtasks).
3. (Browser) potentially render.
4. Dequeue and run one macrotask (e.g., setTimeout callback).
5. Return to step 2.

queueMicrotask and Promise.then share the microtask queue — FIFO among them. Timers always wait until microtasks after the triggering macrotask finish.`,code:[{language:"javascript",snippet:`queueMicrotask(() => console.log('micro 1'));
Promise.resolve().then(() => console.log('promise'));
queueMicrotask(() => console.log('micro 2'));
setTimeout(() => console.log('timer'), 0);
// micro 1, promise, micro 2, then timer (after sync)`}],source:j("Web/API/Window/queueMicrotask")},{question:"Predict and explain the output of code that mixes Promise.then(), async/await, and setTimeout().",answer:`Rule: synchronous first, then all microtasks (promises/async continuations), then macrotasks (timers).

async function body runs synchronously until first await; awaited promise resolution schedules microtask. .then callbacks are microtasks. setTimeout is macrotask.

Classic trap: async IIFE starts, hits await, resumes later as microtask; nested .then chains enqueue in order; setTimeout always after microtask drain of current turn.`,code:[{language:"javascript",snippet:`console.log('A');
setTimeout(() => console.log('B'), 0);
(async () => {
  console.log('C');
  await Promise.resolve();
  console.log('D');
})();
Promise.resolve().then(() => console.log('E'));
console.log('F');
// A, C, F, D, E, B`}],source:j("Web/JavaScript/Event_loop")},{question:"Why can a long-running JavaScript callback make an application unresponsive even though asynchronous APIs are used?",answer:`Async APIs only offload waiting (network, disk) — their completion callbacks still run on the main thread. Any CPU-heavy synchronous work (large JSON parse, tight loop, DOM thrashing, complex regex on big strings) blocks the call stack.

While blocked: UI cannot repaint, clicks queue up, animations freeze, promise microtasks and timers wait. fetch is async; processing 50MB response synchronously is not.

Fix: chunk work (requestAnimationFrame, setTimeout(0) slices), Web Workers for CPU work, virtualize large lists, profile with Performance tab.`,source:j("Web/API/Web_Workers_API/Using_web_workers")},{question:"How do closures accidentally retain memory, and how would you investigate such a leak?",answer:`Closures keep references to outer variables alive. Common leaks:

1. Event listeners holding DOM nodes in closures without removeEventListener
2. Caches (Map) growing without eviction
3. Timers/intervals capturing large state
4. Detached DOM trees still referenced from JS

Investigation: Chrome DevTools Memory — heap snapshot diff, "Retainers" view tracing closure → object chain. Performance monitor for growing DOM node count. Fix: null references, WeakMap for caches, AbortController to cancel fetch, remove listeners on teardown.`,source:j("Web/JavaScript/Guide/Closures")},{question:"Explain property descriptors and the differences among writable, enumerable, and configurable.",answer:`Every property has a descriptor from Object.getOwnPropertyDescriptor:

value + writable — data property; writable false prevents value changes.
get + set — accessor property.
enumerable — if true, appears in for...in and Object.keys.
configurable — if false, cannot delete or change descriptor (except writable true→false).

Object.defineProperty sets descriptors. Array indices are enumerable by default; most built-in methods are non-enumerable. Frameworks use symbols/non-enumerable props to avoid iteration pollution.`,code:[{language:"javascript",snippet:`const obj = {};
Object.defineProperty(obj, 'id', {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false,
});
// obj.id = 2; // fails in strict mode`}],source:j("Web/JavaScript/Guide/Working_with_objects#defining_properties")},{question:"How do getters, setters, Proxy, and Reflect differ as metaprogramming tools?",answer:`Getters/setters (Object.defineProperty or class syntax) intercept access on specific properties — validation, computed values, lazy init.

Proxy wraps an object — trap handlers (get, set, has, deleteProperty) intercept many operations on the whole target. Powerful but no transparent this binding in methods.

Reflect provides forwarding methods matching Proxy traps (Reflect.get, Reflect.set) — used inside traps for default behavior.

Use getters/setters for API ergonomics; Proxy for logging, reactivity (Vue 3), immutable wrappers; Reflect as Proxy companion.`,code:[{language:"javascript",snippet:`const proxy = new Proxy(target, {
  get(t, key, recv) {
    console.log('get', key);
    return Reflect.get(t, key, recv);
  },
});`}],source:j("Web/JavaScript/Reference/Global_Objects/Proxy")},{question:"Explain the prototype lookup algorithm and the effects of changing an object's prototype at runtime.",answer:`Property lookup: check own property on object → if missing, follow [[Prototype]] → repeat until null → undefined if not found.

Assignment (obj.x = 1): if own or prototype writable property exists on chain, set on that object; else create own property on original object (shadowing).

Object.setPrototypeOf(obj, proto) mutates [[Prototype]] at runtime — slow on hot paths (deoptimizes JIT). Changing constructor.prototype affects future instances, not existing ones unless their [[Prototype]] pointed there.`,code:[{language:"javascript",snippet:`const base = { greet() { return 'hi'; } };
const obj = Object.create(base);
console.log(obj.greet()); // 'hi' via prototype
Object.setPrototypeOf(obj, { greet() { return 'hello'; } });
console.log(obj.greet()); // 'hello'`}],source:j("Web/JavaScript/Inheritance_and_the_prototype_chain")},{question:"What is the difference between SameValue, SameValueZero, strict equality, and loose equality?",answer:`Loose equality (==) applies type coercion then compares.

Strict equality (===) uses SameValue: no coercion; NaN !== NaN; +0 === -0.

SameValueZero: like SameValue except +0 and -0 are equal; NaN still not equal to NaN. Used by Map/Set key lookup.

Object.is(): SameValue — distinguishes +0/-0, treats NaN equal to NaN.

Map.set(NaN, 1); Map.get(NaN) works via SameValueZero. Use Object.is for NaN checks; === otherwise.`,code:[{language:"javascript",snippet:`Object.is(NaN, NaN);        // true
NaN === NaN;                 // false
Object.is(+0, -0);           // false
+0 === -0;                   // true

const m = new Map();
m.set(NaN, 'ok');
m.get(NaN); // 'ok'`}],source:j("Web/JavaScript/Equality_comparisons_and_sameness")},{question:"Why can instanceof fail across realms, and when is Array.isArray() safer?",answer:`instanceof checks whether Constructor.prototype appears anywhere on object's prototype chain. Each iframe/window/realm has its own global — Array from realm A !== Array from realm B.

An array from an iframe fails value instanceof Array in parent window.

Array.isArray(value) uses internal [[Class]] tag — realm-independent. Prefer Array.isArray for cross-frame tests and serialized/rehydrated data. instanceof still useful for custom class instances in same realm.`,code:[{language:"javascript",snippet:`// Same realm
[] instanceof Array;     // true
Array.isArray([]);      // true

// Cross-realm (conceptual)
// iframeArray instanceof window.Array; // often false
Array.isArray(iframeArray);            // true`}],source:j("Web/JavaScript/Reference/Global_Objects/Array/isArray")},{question:"What are common problems with floating-point arithmetic, and how would you handle money accurately?",answer:`IEEE 754 doubles cannot represent all decimals exactly: 0.1 + 0.2 === 0.3 is false (0.30000000000000004). Accumulated rounding breaks financial calculations.

Mitigations:
1. Integer minor units — store cents as integers (1999 = $19.99)
2. Decimal libraries — decimal.js, big.js
3. BigInt for whole minor units at scale
4. Round at display boundaries with explicit policy (bankers rounding)

Never use raw float equality for money — compare with tolerance or use integers.`,code:[{language:"javascript",snippet:`0.1 + 0.2; // 0.30000000000000004

const cents = 1999;
const display = (cents / 100).toFixed(2); // '19.99'

// Or: (0.1 * 10 + 0.2 * 10) / 10 with integer math`}],source:j("Web/JavaScript/Reference/Global_Objects/Number/EPSILON")},{question:"How do AbortController and AbortSignal support cancellation in asynchronous workflows?",answer:`AbortController creates an AbortSignal via controller.signal. Pass signal to fetch, streams, or custom async APIs. controller.abort(reason) sets signal.aborted and fires abort event.

Listeners check signal.aborted or use signal.throwIfAborted(). Combine with Promise.race for timeout patterns. One controller per operation; AbortSignal.timeout(ms) (modern) creates timed signals.

Essential for cancelling in-flight requests on route change, test teardown, or user cancel — prevents leaks and stale UI updates.`,code:[{language:"javascript",snippet:`const controller = new AbortController();
const { signal } = controller;

const req = fetch('/api/data', { signal });

controller.abort('User cancelled');
// req rejects with AbortError`}],source:j("Web/API/AbortController")},{question:"How would you limit concurrency when processing thousands of promise-returning tasks?",answer:`Promise.all on thousands of tasks spawns all at once — exhausts sockets, memory, and rate limits. Use a concurrency pool:

Maintain active count ≤ limit. Queue remaining tasks. On each settlement, dequeue next task. Implement with async pool function, p-limit library, or manual worker loop.

Pattern: async function pool(limit, tasks, fn) with semaphore. For batch E2E API checks: concurrency 5–10, retry failed, aggregate results.`,code:[{language:"javascript",snippet:`async function mapPool(items, limit, worker) {
  const ret = [];
  const executing = new Set();
  for (const [i, item] of items.entries()) {
    const p = Promise.resolve().then(() => worker(item, i));
    ret.push(p);
    executing.add(p);
    const clean = () => executing.delete(p);
    p.then(clean, clean);
    if (executing.size >= limit) await Promise.race(executing);
  }
  return Promise.all(ret);
}`}],source:j("Web/JavaScript/Reference/Global_Objects/Promise")},{question:"How would you implement retries with exponential backoff, jitter, cancellation, and a maximum attempt limit?",answer:`Retry loop: attempt work, on failure wait delay then retry until maxAttempts. Exponential backoff: delay = base * 2^attempt. Jitter: delay += random(0, jitter) to avoid thundering herd.

Respect AbortSignal — abort between attempts. Retry only transient errors (network, 429, 503), not 4xx client errors.

Return last error after exhaustion. Log attempt count for observability.`,code:[{language:"javascript",snippet:`async function retry(fn, { max = 5, base = 200, signal } = {}) {
  let attempt = 0;
  while (attempt < max) {
    signal?.throwIfAborted();
    try { return await fn(attempt); }
    catch (err) {
      attempt++;
      if (attempt >= max) throw err;
      const jitter = Math.random() * base;
      const delay = base * 2 ** (attempt - 1) + jitter;
      await new Promise((r, t) => {
        const id = setTimeout(r, delay);
        signal?.addEventListener('abort', () => { clearTimeout(id); t(signal.reason); });
      });
    }
  }
}`}],source:j("Web/API/AbortSignal")},{question:"What race conditions can occur in a single-threaded JavaScript application?",answer:`Single-threaded means no parallel memory access, but async interleaving still causes races:

1. Check-then-act — if (!cache) cache = await fetch() — two callers both miss and duplicate fetch
2. Stale closures — event handler uses old state after rapid updates
3. Out-of-order responses — slower request overwrites newer data
4. Shared mutable module state across parallel async flows
5. DOM read/write interleaving with async gaps causing inconsistent UI

Fix: dedupe in-flight requests, version tokens on responses, functional state updates, mutex-like promise chains for critical sections.`,source:j("Web/JavaScript/Event_loop")},{question:"How do Web Workers or worker threads change JavaScript's concurrency model?",answer:`Web Workers run JavaScript on separate threads with no shared DOM access. Communication via postMessage / onmessage (structured clone) or Transferable objects.

Worker threads (Node.js worker_threads) share memory optionally via SharedArrayBuffer with Atomics.

Main thread stays responsive for UI; workers handle parsing, crypto, image processing. Cost: serialization overhead, no direct DOM — coordinate results back to main. Service Workers add offline/network intercept layer.`,source:j("Web/API/Web_Workers_API/Using_web_workers")},{question:"What are SharedArrayBuffer and Atomics, and what risks arise when sharing memory?",answer:`SharedArrayBuffer (SAB) is fixed-length raw binary buffer shared across workers — true shared memory. Atomics provide atomic read-modify-write (add, compareExchange, wait/notify) for safe coordination without locks in some patterns.

Risks: data races if reads/writes lack synchronization — torn reads, corrupted state. Spectre/Meltdown led browsers to require cross-origin isolation (COOP/COEP headers) for SAB.

Prefer message passing unless profiling proves need. When using SAB, design clear memory layout and use Atomics or locks.`,source:j("Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer")},{question:"How do circular ES module dependencies behave, and how can initialization order cause failures?",answer:`Modules A imports B, B imports A — cycles are allowed. ES modules create live bindings. During evaluation, module bodies run depth-first; exports exist but may be in temporal dead zone (uninitialized) when cycle partner reads them during top-level execution.

Failure mode: const fn = () => helper(); where helper from cycle is undefined at module init time.

Fix: defer access to runtime (functions called after all modules evaluated), move shared API to third module, or use dynamic import() to break cycle. Avoid top-level side effects that depend on cyclic imports.`,code:[{language:"javascript",snippet:`// a.js
import { b } from './b.js';
export const a = 'a' + (b ?? '');

// b.js
import { a } from './a.js';
export const b = 'b';
// \`a\` may throw or be partial during init — defer reads`}],source:j("Web/JavaScript/Guide/Modules#cyclic_imports")},{question:"How would you design a deep-clone utility, and which values make general-purpose cloning difficult?",answer:`Approach: recursive walk with WeakMap for cycle detection (map original → clone). Branch on type: Date, RegExp, Map, Set, Array, plain Object, typed arrays. Copy prototype chain or treat as plain object per policy.

Hard cases: functions (usually copy by reference), symbols as keys, DOM nodes, window objects, class instances with private fields, properties with getters with side effects, prototypes with custom behavior.

structuredClone() handles many built-ins and cycles but not functions. JSON clone loses types. Document what your clone supports.`,code:[{language:"javascript",snippet:`function deepClone(val, seen = new WeakMap()) {
  if (val === null || typeof val !== 'object') return val;
  if (seen.has(val)) return seen.get(val);
  if (val instanceof Date) return new Date(val);
  if (val instanceof Map) {
    const c = new Map();
    seen.set(val, c);
    val.forEach((v, k) => c.set(deepClone(k, seen), deepClone(v, seen)));
    return c;
  }
  const c = Array.isArray(val) ? [] : {};
  seen.set(val, c);
  for (const k of Reflect.ownKeys(val)) {
    c[k] = deepClone(val[k], seen);
  }
  return c;
}`}],source:j("Web/API/Web_Workers_API/Structured_clone_algorithm")},{question:"Design a cache for asynchronous requests that deduplicates in-flight work, expires results, and avoids caching failures.",answer:`Data structure: Map<key, { promise, expiresAt, status }>.

On get(key):
1. If valid cached fulfilled entry (now < expiresAt), return resolved value.
2. If in-flight promise exists for key, return same promise (dedupe).
3. Else start fetch, store promise immediately, on success set expiresAt = now + TTL and store value; on failure delete entry (do not cache errors) and rethrow.

Optional: stale-while-revalidate, max size with LRU eviction, AbortSignal per key for invalidation. Key = serialized URL + params.`,code:[{language:"javascript",snippet:`function createCache({ ttl = 60_000 } = {}) {
  const store = new Map();
  return function cached(key, fetcher) {
    const hit = store.get(key);
    if (hit?.value && hit.expires > Date.now()) return Promise.resolve(hit.value);
    if (hit?.promise) return hit.promise;
    const promise = fetcher()
      .then(v => { store.set(key, { value: v, expires: Date.now() + ttl }); return v; })
      .catch(e => { store.delete(key); throw e; });
    store.set(key, { promise });
    return promise;
  };
}`}],source:j("Web/JavaScript/Reference/Global_Objects/Promise")}],Hf={category:"Basic JavaScript",tags:["javascript","core"],difficulty:"easy",priority:"high"},Jf={category:"Intermediate JavaScript",tags:["javascript","closures","async"],difficulty:"medium",priority:"high"},Vf={category:"Challenging JavaScript",tags:["javascript","event-loop","advanced"],difficulty:"hard",priority:"critical"},Gf=ue({id:"javascript",number:16,title:"JavaScript",description:"From language fundamentals to closures, async/await, the event loop, and advanced patterns — critical for web automation and full-stack interviews.",priority:"high",color:"var(--amber)",questions:[...M("js",Uf,Hf),...M("jsm",Wf,Jf),...M("jsc",zf,Vf)]}),_=e=>({name:"Spring Boot Reference",url:`https://docs.spring.io/spring-boot/${e}`}),Qf=[{question:"What is Spring Boot, and what problems does it solve compared with manual Spring configuration?",answer:`Spring Boot is an opinionated layer on top of the Spring Framework that gets production-ready applications running quickly with minimal boilerplate.

Manual Spring requires extensive XML or Java configuration for component scanning, embedded servers, data sources, transaction managers, and MVC setup. Spring Boot solves this with:

• Auto-configuration — beans created based on classpath and properties
• Starter dependencies — curated dependency bundles (spring-boot-starter-web, -data-jpa)
• Embedded servers — Tomcat/Jetty/Undertow included, no WAR deployment needed
• Production features — Actuator health, metrics, externalized config
• Opinionated defaults — sensible starting point, override when needed

You still use Spring DI, MVC, Data, Security — Boot removes ceremony so you focus on business logic.`,code:[{language:"java",snippet:`@SpringBootApplication
public class PaymentApplication {
    public static void main(String[] args) {
        SpringApplication.run(PaymentApplication.class, args);
    }
}`}],source:_("reference/")},{question:"What does @SpringBootApplication combine?",answer:`@SpringBootApplication is a convenience meta-annotation that combines three core annotations:

1. @SpringBootConfiguration — marks the class as a source of @Bean definitions (specialized @Configuration)
2. @EnableAutoConfiguration — triggers Spring Boot auto-configuration based on classpath
3. @ComponentScan — scans the package of the annotated class and sub-packages for @Component, @Service, @Repository, @Controller

Equivalent to writing all three explicitly. Place it on your main application class in the root package so component scanning covers your entire application structure.`,code:[{language:"java",snippet:`@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan
public @interface SpringBootApplication { }`}],source:_("reference/using/using-the-springbootapplication-annotation.html")},{question:"What is dependency injection, and why is constructor injection usually preferred?",answer:`Dependency Injection (DI) is an IoC pattern where Spring creates objects and supplies their dependencies instead of classes constructing collaborators with new.

Constructor injection is preferred because:

• Immutability — dependencies declared as final fields
• Required dependencies enforced at construction — object cannot exist in invalid state
• Testability — pass mocks directly in unit tests without Spring context
• Circular dependency detection — fails fast at startup with constructor injection
• No reflection needed — unlike field injection (@Autowired on fields)

Field injection is discouraged. Setter injection is acceptable for optional dependencies.`,code:[{language:"java",snippet:`@Service
public class OrderService {
    private final OrderRepository repository;
    private final PaymentClient paymentClient;

    public OrderService(OrderRepository repository, PaymentClient paymentClient) {
        this.repository = repository;
        this.paymentClient = paymentClient;
    }
}`}],source:_("reference/features/developing-auto-configuration.html")},{question:"What is a Spring bean?",answer:`A Spring bean is an object that is instantiated, assembled, and managed by the Spring IoC container (ApplicationContext).

Beans are created from:
• Component scanning (@Component and stereotype annotations)
• @Bean methods in @Configuration classes
• Auto-configuration classes

The container handles lifecycle (creation, initialization, destruction), dependency wiring, and scope (singleton by default). You retrieve beans by type or name, though constructor injection is the standard approach in modern Spring Boot apps.`,code:[{language:"java",snippet:`@Configuration
public class AppConfig {
    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }
}

// Component-scanned bean
@Component
public class AuditLogger { }`}],source:_("reference/")},{question:"What are @Component, @Service, @Repository, and @Controller used for?",answer:`All four are stereotype annotations — specialized @Component markers that tell Spring to register the class as a bean and convey semantic intent:

@Component — generic Spring-managed component
@Service — business/service layer logic
@Repository — data access layer; adds persistence exception translation (SQLException → DataAccessException)
@Controller — MVC controller that returns view names (Thymeleaf, JSP)

Functionally similar for bean registration. Use the stereotype that matches the layer for readability and tooling support. @RestController = @Controller + @ResponseBody for REST APIs.`,code:[{language:"java",snippet:`@Service
public class AccountService { }

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> { }

@Controller
public class HomeController {
    @GetMapping("/")
    public String home() { return "index"; }
}`}],source:_("reference/")},{question:"What is the difference between @Controller and @RestController?",answer:`@Controller is for traditional server-side MVC — handler methods return view names resolved to HTML templates.

@RestController combines @Controller and @ResponseBody. Return values are serialized directly to the HTTP response body (JSON/XML) via HttpMessageConverters (Jackson by default).

Use @Controller for web pages. Use @RestController for REST APIs. You can add @ResponseBody to individual @Controller methods when only some endpoints return JSON.`,code:[{language:"java",snippet:`@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    private final AccountService service;

    public AccountController(AccountService service) { this.service = service; }

    @GetMapping("/{id}")
    public AccountDto get(@PathVariable Long id) {
        return service.findById(id);
    }
}`}],source:_("reference/web/servlet.html")},{question:"What is component scanning, and how does package placement affect it?",answer:`Component scanning tells Spring to detect and register classes annotated with @Component, @Service, @Repository, @Controller, and @Configuration by scanning specified packages.

@SpringBootApplication enables scanning starting from the package of the annotated class downward. If your main class is com.bank.app.Application, beans in com.bank.app.service are found, but beans in com.bank.config (sibling package) are NOT scanned unless you add @ComponentScan("com.bank").

Best practice: place the main application class in the root package (com.bank.app) with sub-packages for layers (controller, service, repository). Use @ComponentScan only when you need to include beans from external or sibling packages.`,code:[{language:"java",snippet:`// com.bank.app.Application — root package
@SpringBootApplication
public class Application { }

// Scanned: com.bank.app.controller.UserController
// NOT scanned: com.bank.security.JwtFilter (sibling package)

@SpringBootApplication
@ComponentScan(basePackages = "com.bank")
public class ApplicationWithWideScan { }`}],source:_("reference/using/using-the-springbootapplication-annotation.html")},{question:"What are Spring Boot starters?",answer:`Starters are curated dependency descriptors (POMs) that bundle commonly used libraries for a specific feature. They follow the naming convention spring-boot-starter-*.

Examples:
• spring-boot-starter-web — Spring MVC, Jackson, embedded Tomcat
• spring-boot-starter-data-jpa — Hibernate, Spring Data JPA, JDBC
• spring-boot-starter-test — JUnit, Mockito, AssertJ, Spring Test
• spring-boot-starter-security — Spring Security

Starters reduce version conflicts (managed by spring-boot-dependencies BOM) and ensure compatible transitive dependencies. Custom starters package reusable auto-configuration for internal libraries.`,code:[{language:"xml",snippet:`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>`}],source:_("reference/using/build-systems.html")},{question:"What is auto-configuration?",answer:`Auto-configuration is Spring Boot's mechanism for automatically configuring beans based on the classpath, existing beans, and property settings.

When you add spring-boot-starter-data-jpa and a DataSource URL, Boot configures a DataSource, EntityManagerFactory, and JpaTransactionManager without manual @Bean definitions.

Auto-configuration classes are conditional — they apply only when relevant classes are present and required beans are missing (@ConditionalOnClass, @ConditionalOnMissingBean). You can exclude unwanted auto-config with @SpringBootApplication(exclude = {...}) or spring.autoconfigure.exclude property.

Goal: sensible defaults you can override with your own @Bean or properties.`,code:[{language:"java",snippet:`@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class NoDatabaseApp { }

// application.properties
// spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration`}],source:_("reference/using/auto-configuration.html")},{question:"How do application.properties and application.yml differ?",answer:`Both externalize configuration with identical capabilities — format is the only difference.

application.properties — flat key=value pairs:
server.port=8081
spring.datasource.url=jdbc:postgresql://localhost/bank

application.yml — hierarchical YAML structure, often more readable for nested config:
server:
  port: 8081
spring:
  datasource:
    url: jdbc:postgresql://localhost/bank

Spring Boot loads both if present (properties override yml for same keys depending on order). Use @ConfigurationProperties for type-safe binding regardless of format. YAML supports multi-document files separated by ---.`,code:[{language:"yaml",snippet:`server:
  port: 8081
spring:
  application:
    name: payment-service
  datasource:
    url: jdbc:postgresql://localhost:5432/bank
    username: app
    password: secret`}],source:_("how-to/properties-and-configuration.html")},{question:"What are Spring profiles, and how are they activated?",answer:`Profiles group beans and configuration for specific environments (dev, test, staging, prod). Beans annotated @Profile("prod") register only when that profile is active.

Activation methods:
• spring.profiles.active=dev in application.properties
• --spring.profiles.active=dev command-line argument
• SPRING_PROFILES_ACTIVE=dev environment variable
• @ActiveProfiles("test") in tests

Profile-specific files: application-dev.properties, application-prod.yml. Multiple profiles can be active: spring.profiles.active=dev,h2.`,code:[{language:"java",snippet:`@Configuration
@Profile("dev")
public class DevDataSourceConfig {
    @Bean
    public DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .build();
    }
}

// application.properties
// spring.profiles.active=dev`}],source:_("how-to/properties-and-configuration.html")},{question:"How do @Value and @ConfigurationProperties differ?",answer:`@Value injects individual properties using SpEL or placeholders. Good for one-off values but scatters property keys across classes and is harder to test.

@ConfigurationProperties binds a prefix of properties to a typed POJO. Supports validation (@Validated, @NotNull), relaxed binding (max-pool-size ↔ maxPoolSize), lists, maps, and nested objects.

Prefer @ConfigurationProperties for grouped settings (database, feature flags, API client config). Use @Value for single optional overrides. Enable @ConfigurationProperties with @EnableConfigurationProperties or @ConfigurationPropertiesScan.`,code:[{language:"java",snippet:`@ConfigurationProperties(prefix = "app.payment")
@Validated
public record PaymentProperties(
    @NotBlank String baseUrl,
    Duration timeout,
    int maxRetries
) { }

@Service
public class PaymentClient {
    public PaymentClient(PaymentProperties props) {
        // type-safe, testable config object
    }
}`}],source:_("how-to/properties-and-configuration.html")},{question:"How do @RequestMapping, @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping work?",answer:`@RequestMapping is the general mapping annotation — configure path, HTTP method, consumes, produces, headers.

HTTP-method-specific shortcuts reduce boilerplate:
• @GetMapping — HTTP GET (read)
• @PostMapping — HTTP POST (create)
• @PutMapping — HTTP PUT (replace)
• @DeleteMapping — HTTP DELETE (remove)
• @PatchMapping — HTTP PATCH (partial update)

Class-level @RequestMapping("/api/orders") sets base path; method-level annotations add segment and method. Spring MVC matches incoming requests to handler methods and invokes them with resolved arguments.`,code:[{language:"java",snippet:`@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @GetMapping("/{id}")
    public Order get(@PathVariable Long id) { }

    @PostMapping
    public ResponseEntity<Order> create(@RequestBody CreateOrderRequest req) { }

    @PutMapping("/{id}")
    public Order replace(@PathVariable Long id, @RequestBody Order order) { }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) { }
}`}],source:_("reference/web/servlet.html")},{question:"What is the difference between @PathVariable, @RequestParam, and @RequestBody?",answer:`@PathVariable — binds a URI template variable from the path. /users/{id} → @PathVariable Long id.

@RequestParam — binds query string parameters. /users?status=ACTIVE → @RequestParam String status. Supports defaultValue and required=false.

@RequestBody — deserializes the HTTP request body (JSON/XML) into a Java object via HttpMessageConverter (Jackson). Used with POST/PUT/PATCH.

Choose based on REST conventions: resource identity in path, filters/sorting in query params, payload in body.`,code:[{language:"java",snippet:`@GetMapping("/users/{id}")
public User getUser(
    @PathVariable Long id,
    @RequestParam(defaultValue = "false") boolean includeOrders) { }

@PostMapping("/users")
public User createUser(@Valid @RequestBody CreateUserRequest request) { }`}],source:_("reference/web/servlet.html")},{question:"How do you change the application port and provide environment-specific configuration?",answer:`Change the embedded server port via server.port property or SERVER_PORT environment variable.

Environment-specific configuration strategies:
• Profile-specific files: application-dev.yml, application-prod.yml
• Environment variables: SPRING_DATASOURCE_URL (relaxed binding)
• External config: spring.config.import=optional:file:./config/
• Command line: --server.port=9090 --spring.profiles.active=prod
• Cloud config servers (Spring Cloud Config) for centralized management

Precedence (highest wins): command-line args > SPRING_APPLICATION_JSON > OS env vars > profile-specific files > application.properties.`,code:[{language:"properties",snippet:`# application-dev.properties
server.port=8080
spring.datasource.url=jdbc:h2:mem:devdb

# application-prod.properties
server.port=8080
spring.datasource.url=\${DB_URL}
logging.level.root=WARN`}],source:_("how-to/properties-and-configuration.html")}],$f=[{question:"How does Spring Boot decide which auto-configurations to apply?",answer:`At startup, @EnableAutoConfiguration imports AutoConfigurationImportSelector, which loads candidate auto-configuration classes from META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports (Spring Boot 3+) or spring.factories (older versions).

Each candidate is evaluated against @Conditional annotations:
• @ConditionalOnClass — required class on classpath
• @ConditionalOnMissingBean — no user-defined bean of type
• @ConditionalOnProperty — property matches value
• @ConditionalOnWebApplication — servlet vs reactive context

Only configurations whose conditions pass are registered. Auto-config runs before user @Configuration but respects @ConditionalOnMissingBean — your beans win.`,source:_("reference/using/auto-configuration.html")},{question:"What roles do @ConditionalOnClass, @ConditionalOnMissingBean, and related conditional annotations play?",answer:`Conditional annotations gate whether a @Configuration class or @Bean method is processed. They are the core of Spring Boot's "convention over configuration" safety net.

@ConditionalOnClass — activate when specified classes are present (e.g., DataSource when JDBC driver exists)
@ConditionalOnMissingBean — skip if application already defined a bean of that type — prevents overriding user beans
@ConditionalOnProperty — enable feature flags via properties
@ConditionalOnWebApplication / @ConditionalOnNotWebApplication — servlet vs non-web
@ConditionalOnResource — file exists on classpath

Together they ensure auto-config applies only in relevant contexts and backs off when you provide your own configuration.`,code:[{language:"java",snippet:`@Configuration
@ConditionalOnClass(DataSource.class)
@ConditionalOnProperty(name = "app.db.enabled", havingValue = "true", matchIfMissing = true)
public class DataSourceAutoConfiguration {
    @Bean
    @ConditionalOnMissingBean
    public DataSource dataSource(DataSourceProperties props) {
        return props.initializeDataSourceBuilder().build();
    }
}`}],source:_("reference/features/developing-auto-configuration.html")},{question:"How can an application override or exclude an auto-configuration?",answer:`Override: define your own @Bean of the same type — @ConditionalOnMissingBean causes auto-config to skip. Or use @Primary / @Order for multiple candidates.

Exclude entirely:
• @SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
• @EnableAutoConfiguration(exclude = {...})
• spring.autoconfigure.exclude in properties
• spring.boot.autoconfigure.exclude in Spring Boot 3.x

For fine control, use @AutoConfigureBefore / @AutoConfigureAfter in custom config. spring.main.allow-bean-definition-overriding=true (discouraged) permits bean overriding.`,code:[{language:"java",snippet:`@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class InternalApiApplication { }

@Configuration
public class CustomSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(a -> a.anyRequest().permitAll()).build();
    }
}`}],source:_("reference/using/auto-configuration.html")},{question:"What is the difference between @Bean and component scanning?",answer:`@Bean — declared in @Configuration class methods. You control instantiation logic (third-party classes, conditional setup, multiple implementations). Method name becomes bean name by default.

Component scanning — registers classes annotated @Component/@Service/etc. automatically. Class is instantiated by Spring; you don't write factory methods.

Use @Bean when you need programmatic construction (RestTemplate with interceptors, ObjectMapper customization). Use component scanning for your own application classes. Both produce beans managed by the same ApplicationContext.`,code:[{language:"java",snippet:`@Configuration
public class JacksonConfig {
    @Bean
    public ObjectMapper objectMapper() {
        return JsonMapper.builder()
            .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
            .build();
    }
}

@Service  // discovered by component scan
public class ReportService { }`}],source:_("reference/")},{question:"What are bean scopes, and when would singleton, prototype, request, or session scope be appropriate?",answer:`Scope controls bean lifecycle and visibility:

singleton (default) — one instance per ApplicationContext. Use for stateless services, repositories, clients.

prototype — new instance per injection/getBean call. Use for stateful, short-lived objects. Spring does not manage full prototype lifecycle destruction.

request — one instance per HTTP request (web apps). Use for request-specific context (user request metadata).

session — one instance per HTTP session. Use for shopping cart, user wizard state.

application — one per ServletContext. Less common than singleton in Boot.

Most Spring Boot beans are singleton. Request/session scopes require web context and @Scope(proxyMode = TARGET_CLASS) when injected into singletons.`,code:[{language:"java",snippet:`@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestContextHolder {
    private String correlationId;
}`}],source:_("reference/")},{question:"What is the bean lifecycle, and where do @PostConstruct and @PreDestroy fit?",answer:`Bean lifecycle: instantiate → populate properties → BeanNameAware/BeanFactoryAware callbacks → @PostConstruct → InitializingBean.afterPropertiesSet → custom init-method → bean ready → @PreDestroy → DisposableBean.destroy → custom destroy-method.

@PostConstruct (JSR-250) — run after dependency injection, before bean is used. Initialize caches, validate config, open connections.

@PreDestroy — cleanup before container removes bean. Close resources, flush buffers.

In Spring Boot, beans are destroyed gracefully on shutdown (see server.shutdown=graceful). Prefer @PostConstruct/@PreDestroy or initMethod/destroyMethod over implementing Spring lifecycle interfaces.`,code:[{language:"java",snippet:`@Component
public class CacheWarmer {
    @PostConstruct
    public void warmCache() {
        // load reference data on startup
    }

    @PreDestroy
    public void shutdown() {
        // release resources
    }
}`}],source:_("reference/")},{question:"What causes circular dependencies, and why does constructor injection reveal them early?",answer:`Circular dependency: Bean A needs Bean B, and Bean B needs Bean A (directly or through a chain). Spring cannot resolve instantiation order.

Constructor injection fails at startup with BeanCurrentlyInCreationException — neither bean can be constructed because each waits for the other's constructor. This is desirable: fail fast with a clear error.

Field/setter injection can sometimes defer the cycle (object created, then injected) and may mask design problems. Spring Boot 2.6+ disallows circular references by default (spring.main.allow-circular-references=false).

Fix: refactor to extract shared logic into a third bean, use @Lazy on one dependency, or redesign to eliminate mutual dependency.`,code:[{language:"java",snippet:`@Service
public class OrderService {
    public OrderService(PaymentService payment) { }
}

@Service
public class PaymentService {
    public PaymentService(OrderService orders) { }  // circular — fails at startup
}`}],source:_("reference/")},{question:"How does externalized configuration precedence work?",answer:`Spring Boot PropertySource order (lowest to highest priority):

1. Default properties (@SpringApplication.setDefaultProperties)
2. @PropertySource on @Configuration classes
3. Config data (application.properties/yml)
4. Profile-specific application-{profile}.properties
5. Application properties outside jar (./config/ adjacent to jar)
6. OS environment variables
7. Java System properties
8. JNDI attributes
9. ServletContext/ServletConfig init params
10. SPRING_APPLICATION_JSON
11. Command-line arguments
12. @TestPropertySource / @DynamicPropertySource in tests

Higher priority overrides lower. Relaxed binding maps SPRING_DATASOURCE_URL to spring.datasource.url. Use spring.config.import for additional locations.`,source:_("how-to/properties-and-configuration.html")},{question:"How do validation annotations work with request models and @ConfigurationProperties?",answer:`Add spring-boot-starter-validation (Hibernate Validator). Use JSR-380 annotations on DTOs and property classes.

For REST: annotate @RequestBody parameter with @Valid or @Validated. Validation runs before handler method; failures throw MethodArgumentNotValidException — handle with @ControllerAdvice.

For config: annotate @ConfigurationProperties class with @Validated and fields with @NotNull, @Min, @Pattern, etc. Bind failures throw BindException at startup or refresh.

Custom constraints via @Constraint and ConstraintValidator. Group validation with @Validated(Create.class).`,code:[{language:"java",snippet:`public record CreateAccountRequest(
    @NotBlank String name,
    @Email String email,
    @Min(18) int age
) { }

@PostMapping
public Account create(@Valid @RequestBody CreateAccountRequest req) { }

@ConfigurationProperties(prefix = "app")
@Validated
public class AppProperties {
    @NotBlank private String apiKey;
}`}],source:_("reference/web/servlet.html")},{question:"How would you implement consistent REST error responses with @ControllerAdvice and @ExceptionHandler?",answer:`@ControllerAdvice defines global exception handling across controllers. @ExceptionHandler methods map exceptions to ResponseEntity with consistent JSON error body.

Pattern:
1. Define ErrorResponse record (timestamp, status, error, message, path, fieldErrors)
2. @ControllerAdvice class with handlers for MethodArgumentNotValidException, EntityNotFoundException, AccessDeniedException, Exception
3. Log server errors; return safe messages to clients
4. Use @ResponseStatus for simple cases or ResponseEntity for full control

Combine with ProblemDetail (RFC 7807) via ResponseEntityExceptionHandler in Spring 6+ for standardized problem+json responses.`,code:[{language:"java",snippet:`@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        var errors = ex.getBindingResult().getFieldErrors().stream()
            .map(fe -> fe.getField() + ": " + fe.getDefaultMessage())
            .toList();
        return ResponseEntity.badRequest()
            .body(new ErrorResponse(400, "Validation failed", errors));
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(EntityNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(new ErrorResponse(404, ex.getMessage(), List.of()));
    }
}`}],source:_("reference/web/servlet.html")},{question:"What is Spring Data JPA, and how are repository implementations generated?",answer:`Spring Data JPA abstracts data access with repository interfaces. You declare interface extending JpaRepository<Entity, ID> — Spring generates the implementation at runtime via JDK dynamic proxy or class proxy.

Query methods parsed from method names (findByStatusAndCreatedAtAfter). @Query for JPQL/native SQL. @Modifying for updates. Pagination via Pageable.

Implementation stack: Spring Data repository proxy → SimpleJpaRepository (default) → EntityManager → Hibernate → JDBC.

Enable with @EnableJpaRepositories (auto-enabled with starter). Custom fragments: define custom interface + impl class named RepositoryImpl.`,code:[{language:"java",snippet:`public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByStatus(PaymentStatus status);

    @Query("select p from Payment p where p.amount > :min")
    List<Payment> findLargePayments(@Param("min") BigDecimal min);
}`}],source:_("reference/data/sql.html")},{question:"What is the difference between lazy and eager fetching, and what is the N+1 query problem?",answer:`Eager fetching (FetchType.EAGER) — associated entities loaded immediately with parent. Risk: loads unnecessary data, multiple joins, Cartesian products.

Lazy fetching (FetchType.LAZY) — associated entities loaded on first access. Default for @OneToMany and @ManyToMany. Requires active persistence context (session).

N+1 problem: loading N parent entities triggers 1 query for parents + N additional queries for each child association access. Classic with lazy collections in loops.

Fixes: JOIN FETCH in JPQL, @EntityGraph, batch fetching (@BatchSize), DTO projections, or spring.jpa.properties.hibernate.default_batch_fetch_size.`,code:[{language:"java",snippet:`@Query("select o from Order o join fetch o.items where o.customerId = :id")
List<Order> findWithItems(@Param("id") Long customerId);

// Or @EntityGraph(attributePaths = {"items"})
List<Order> findByCustomerId(Long customerId);`}],source:_("reference/data/sql.html")},{question:"What does @Transactional do, and why can self-invocation prevent it from working as expected?",answer:`@Transactional wraps method calls in a database transaction managed by PlatformTransactionManager. Defines propagation (REQUIRED, REQUIRES_NEW, etc.), isolation, rollback rules (default: rollback on RuntimeException).

Self-invocation problem: calling this.saveInternal() from within the same class bypasses Spring's proxy. The proxy applies transaction advice only on external calls through the Spring bean.

Fixes: move @Transactional method to another bean, use self-injection (discouraged), or AspectJ compile-time weaving (spring-aspects).

Also: @Transactional only works on public methods of proxied beans by default. private/final methods are not advised with JDK/CGLIB proxy mode limitations.`,code:[{language:"java",snippet:`@Service
public class TransferService {
    private final TransferService self;  // injected proxy

    public TransferService(@Lazy TransferService self) { this.self = self; }

    public void transfer(Long from, Long to, BigDecimal amount) {
        self.debitAndCredit(from, to, amount);  // goes through proxy
    }

    @Transactional
    public void debitAndCredit(Long from, Long to, BigDecimal amount) { }
}`}],source:_("reference/data/sql.html")},{question:"What is the difference between unit tests, slice tests, and @SpringBootTest integration tests?",answer:`Unit tests — test single class in isolation with mocks (JUnit 5 + Mockito). No Spring context. Fast, narrow scope.

Slice tests — load partial Spring context for one layer:
• @WebMvcTest — controllers only, MockMvc, mock services
• @DataJpaTest — JPA + in-memory DB, repositories only
• @JsonTest — Jackson serialization
Faster than full context, focused failures.

@SpringBootTest — loads full ApplicationContext (or WebEnvironment). Integration/end-to-end tests with real or test containers wiring. Slower but validates bean assembly and cross-layer behavior.

Use the narrowest test type that proves the behavior — pyramid: many unit, some slice, few full integration.`,source:_("reference/testing/index.html")},{question:"When would you use @WebMvcTest, @DataJpaTest, MockMvc, or Testcontainers?",answer:`@WebMvcTest(Controller.class) — test MVC layer: request mapping, JSON serialization, status codes, security. Uses MockMvc to simulate HTTP without starting full server. Mock @MockBean services.

@DataJpaTest — test repositories with auto-configured in-memory DB (H2) or Testcontainers PostgreSQL. Rolls back transactions after each test by default.

MockMvc — standalone or @AutoConfigureMockMvc for simulating HTTP requests and asserting responses.

Testcontainers — spin real Docker containers (Postgres, Kafka, Redis) for integration tests that need production-like behavior. Repeatable, isolated, no shared test DB.

Use Testcontainers when H2 incompatibilities or broker-specific behavior matter; use slices when mocking dependencies is sufficient.`,code:[{language:"java",snippet:`@WebMvcTest(AccountController.class)
class AccountControllerTest {
    @Autowired MockMvc mockMvc;
    @MockBean AccountService accountService;

    @Test
    void returnsAccount() throws Exception {
        when(accountService.find(1L)).thenReturn(new AccountDto(1L, "Akash"));
        mockMvc.perform(get("/api/accounts/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Akash"));
    }
}`}],source:_("reference/testing/index.html")},{question:"What does Spring Boot Actuator provide?",answer:`Actuator adds production-ready operational endpoints and metrics to your application:

Health — /actuator/health (liveness, readiness, diskSpace, DB)
Metrics — /actuator/metrics, Micrometer integration (Prometheus, Datadog)
Info — build/git info via info.* properties
Environment — /actuator/env, configprops for debugging config
Loggers — adjust log levels at runtime
HTTP mappings, thread dump, heap dump (sensitive)

Add spring-boot-starter-actuator dependency. Expose endpoints via management.endpoints.web.exposure.include. Separate management port possible: management.server.port=9090.`,source:_("reference/actuator/endpoints.html")},{question:"How should Actuator endpoints be exposed and secured?",answer:`Default: only /health exposed over HTTP (Boot 2.x+). Configure exposure explicitly:

management.endpoints.web.exposure.include=health,info,prometheus
management.endpoints.web.exposure.exclude=env,beans

Security best practices:
• Never expose env, heapdump, shutdown publicly
• Use separate management port and network (management.server.port)
• Require authentication/authorization via Spring Security for sensitive endpoints
• Expose health/info on internal network only; use Kubernetes probes against /actuator/health/liveness
• Disable JMX if unused: spring.jmx.enabled=false

Production: expose health + prometheus; secure with OAuth2/mTLS on internal VLAN.`,code:[{language:"properties",snippet:`management.endpoints.web.exposure.include=health,info,prometheus
management.endpoint.health.show-details=when_authorized
management.server.port=9090
management.endpoints.web.base-path=/actuator`}],source:_("reference/actuator/endpoints.html")},{question:"How is security auto-configuration changed when a custom SecurityFilterChain bean is declared?",answer:`Spring Boot's SecurityAutoConfiguration backs off when a SecurityFilterChain @Bean is defined (Spring Security 6+ filter chain model). Your bean replaces Boot's default permit-all/basic setup.

You take full responsibility for:
• Authorization rules (authorizeHttpRequests)
• Authentication mechanism (form login, OAuth2, JWT)
• CSRF, CORS, session management
• Actuator endpoint protection (separate requestMatchers for /actuator/**)

Multiple SecurityFilterChain beans supported with @Order — e.g., Order(1) for actuator on management port, Order(2) for application API.`,code:[{language:"java",snippet:`@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    SecurityFilterChain apiChain(HttpSecurity http) throws Exception {
        return http
            .securityMatcher("/api/**")
            .authorizeHttpRequests(a -> a.anyRequest().authenticated())
            .oauth2ResourceServer(o -> o.jwt(Customizer.withDefaults()))
            .csrf(csrf -> csrf.disable())
            .build();
    }
}`}],source:_("reference/actuator/endpoints.html")},{question:"How do servlet-based Spring MVC and reactive Spring WebFlux differ?",answer:`Spring MVC (spring-boot-starter-web) — servlet stack (Tomcat), thread-per-request model. Blocking I/O. Mature ecosystem, Spring Data JPA works naturally. Best for typical CRUD REST, JDBC, most enterprise apps.

Spring WebFlux (spring-boot-starter-webflux) — reactive stack (Netty), event-loop with small thread pool. Non-blocking I/O end-to-end required for benefit. Uses Mono/Flux (Project Reactor). Best for high-concurrency I/O-bound services, streaming, gateway patterns.

Do not mix blocking JDBC/JPA calls on WebFlux event-loop threads — use bounded elastic scheduler or separate blocking service layer. Choose one stack per application; Boot auto-configures based on classpath (prefer WebFlux if both present unless spring.main.web-application-type=servlet).`,code:[{language:"java",snippet:`// WebFlux reactive controller
@RestController
public class EventController {
    @GetMapping("/events")
    public Flux<Event> stream() {
        return eventRepository.findAll().delayElements(Duration.ofMillis(100));
    }
}`}],source:_("reference/web/reactive.html")},{question:"How do executable JAR files work, and how are they typically built with Maven or Gradle?",answer:`Spring Boot repackages the application into an executable "fat" JAR with nested structure:
• BOOT-INF/classes — your compiled classes and resources
• BOOT-INF/lib — dependency JARs
• JarLauncher as Main-Class in manifest

Running java -jar app.jar starts JarLauncher → LaunchedURLClassLoader → Spring Boot main method.

Maven: spring-boot-maven-plugin with repackage goal (bound to package phase).
Gradle: org.springframework.boot plugin, bootJar task.

Layers support (Spring Boot 2.3+) for efficient Docker caching. Buildpacks and Cloud Native Buildpacks produce images without Dockerfile.`,code:[{language:"xml",snippet:`<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>

<!-- mvn package → target/myapp-0.0.1-SNAPSHOT.jar -->`}],source:_("reference/using/build-systems.html")}],Xf=[{question:"Trace the startup process from SpringApplication.run() to creation of the application context and singleton beans.",answer:`SpringApplication.run() sequence:

1. Create SpringApplication instance — infer web app type (servlet/reactive/none) from classpath
2. Load ApplicationContextInitializer and ApplicationListener via spring.factories
3. Prepare Environment — process args, property sources, profiles
4. Print banner (optional)
5. Create ApplicationContext (AnnotationConfigServletWebServerApplicationContext for web)
6. Prepare context — postProcessApplicationContext, apply initializers
7. Refresh context (AbstractApplicationContext.refresh):
   a. prepareRefresh
   b. obtainFreshBeanFactory / refreshBeanFactory
   c. prepareBeanFactory
   d. postProcessBeanFactory (BeanFactoryPostProcessors — critical for auto-config)
   e. invokeBeanFactoryPostProcessors (ConfigurationClassPostProcessor parses @Configuration, triggers auto-config import)
   f. registerBeanPostProcessors
   g. onRefresh — start embedded web server (Tomcat/Netty)
   h. registerListeners, finishBeanFactoryInitialization — instantiate singleton beans (dependency injection, @PostConstruct)
   i. finishRefresh — publish ContextRefreshedEvent
8. Call runners — ApplicationRunner and CommandLineRunner beans
9. Return running ApplicationContext

Failures during refresh typically prevent context creation — fail-fast at startup.`,source:_("reference/using/auto-configuration.html")},{question:"How are auto-configuration candidates discovered in current Spring Boot versions?",answer:`Spring Boot 3.x uses META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports — plain text file listing fully qualified auto-configuration class names (one per line). AutoConfigurationImportSelector reads this file from all jars on classpath.

Older Boot 2.x used META-INF/spring.factories with org.springframework.boot.autoconfigure.EnableAutoConfiguration key.

Additional mechanisms:
• @ImportAutoConfiguration for test slices and libraries
• spring.autoconfigure.exclude property
• AutoConfigurationCustomizer for programmatic filtering

Candidates are filtered by @Conditional evaluation before registration. spring-boot-autoconfigure-processor generates metadata at compile time for IDE and conditions report.`,source:_("reference/features/developing-auto-configuration.html")},{question:"How would you design and package a reusable custom auto-configuration and starter?",answer:`Structure as two modules (convention):

1. autoconfigure module — contains @AutoConfiguration class, @Conditional beans, META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports entry, spring-configuration-metadata.json for IDE property hints
2. starter module — empty POM depending on autoconfigure + required libraries (e.g., my-feature-spring-boot-starter)

Design principles:
• Use @ConditionalOnClass / @ConditionalOnMissingBean aggressively
• Externalize settings with @ConfigurationProperties(prefix = "my.feature")
• @AutoConfigureAfter(DataSourceAutoConfiguration.class) when order matters
• Provide sensible defaults; document override points
• Ship sample application and tests using @ApplicationContextRunner for auto-config unit tests

Consumers add one starter dependency — beans appear automatically.`,code:[{language:"java",snippet:`@AutoConfiguration
@ConditionalOnClass(NotificationClient.class)
@EnableConfigurationProperties(NotificationProperties.class)
public class NotificationAutoConfiguration {
    @Bean
    @ConditionalOnMissingBean
    NotificationClient notificationClient(NotificationProperties props) {
        return new NotificationClient(props.getUrl(), props.getApiKey());
    }
}`}],source:_("reference/features/developing-auto-configuration.html")},{question:"How do you make a custom auto-configuration back off cleanly when an application supplies its own bean?",answer:`Annotate your @Bean methods with @ConditionalOnMissingBean (no name/type specified = any bean of return type). If the application defines NotificationClient, your auto-configured bean is skipped.

For multiple variants: @ConditionalOnMissingBean(NotificationClient.class) on default impl; user provides @Primary bean or named @Bean("customNotificationClient").

For entire configuration class: @ConditionalOnMissingBean(type = NotificationClient.class) on the @AutoConfiguration class.

Offer extension points: interface + default impl auto-configured; user replaces interface bean. Document the bean type and property prefix. Use @ConditionalOnProperty for feature toggle: my.feature.enabled=false disables module entirely.`,code:[{language:"java",snippet:`@Bean
@ConditionalOnMissingBean
public NotificationClient notificationClient(NotificationProperties props) {
    return new DefaultNotificationClient(props);
}

// Application override — no annotation needed
@Bean
public NotificationClient notificationClient() {
    return new CustomNotificationClient();
}`}],source:_("reference/features/developing-auto-configuration.html")},{question:"How would you debug why an expected auto-configuration or bean was not created?",answer:`Debugging checklist:

1. Enable auto-config report: debug=true or --debug. Logs positive matches, negative matches, exclusions at startup.
2. Actuator /actuator/conditions (if exposed) — same report in JSON.
3. /actuator/beans — search for expected bean name/type.
4. Verify @ConditionalOnClass — missing dependency on classpath?
5. Check @ConditionalOnProperty — property misspelled or profile inactive?
6. @ConditionalOnMissingBean — did another bean already exist?
7. Component scan package — is class outside scan path?
8. Exclude filters — spring.autoconfigure.exclude or @SpringBootApplication(exclude)
9. Bean definition overriding disabled — duplicate bean types?
10. Use ApplicationContextRunner in unit test to reproduce conditions in isolation.

Common fix: add missing starter, correct property, move class into scanned package, or remove conflicting @Bean.`,code:[{language:"properties",snippet:`debug=true
logging.level.org.springframework.boot.autoconfigure=DEBUG`}],source:_("reference/using/auto-configuration.html")},{question:"Explain transaction propagation and isolation. Which combinations can create unexpected behavior?",answer:`Propagation — how transactional methods join existing transactions:
• REQUIRED (default) — join or create new
• REQUIRES_NEW — suspend current, always new transaction
• NESTED — nested savepoint within current (if supported)
• SUPPORTS — join if exists, non-transactional otherwise
• NOT_SUPPORTED — suspend current, run non-transactional
• MANDATORY — must have existing transaction or fail
• NEVER — must not have transaction

Isolation — concurrency visibility: DEFAULT, READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE.

Unexpected behavior traps:
• REQUIRES_NEW + outer rollback — inner commit persists (partial commit)
• self-invocation skips @Transactional entirely
• NESTED not supported on all JPA providers
• READ_COMMITTED + non-repeatable reads in long transactions
• SERIALIZABLE — deadlocks and performance hits
• Catching exceptions without rollback — mark rollback-only or use rollbackFor`,code:[{language:"java",snippet:`@Transactional(propagation = Propagation.REQUIRES_NEW)
public void writeAuditLog(String action) {
    auditRepository.save(new Audit(action));  // commits even if outer rolls back
}`}],source:_("reference/data/sql.html")},{question:"Why might @Transactional fail on private methods, final methods, or self-invocation in proxy-based configurations?",answer:`Spring AOP applies @Transactional via proxy wrapping the bean. External calls hit the proxy → transaction interceptor → target method.

Self-invocation: internal this.method() bypasses proxy — no transaction advice applied.

private methods: not visible to proxy/CGLIB subclass — cannot be overridden/intercepted.

final methods/classes: CGLIB cannot subclass final class or override final methods — proxy limitations (JDK proxy uses interfaces only).

Spring Boot default: CGLIB proxies for @Transactional on concrete classes (spring.aop.proxy-target-class=true).

Solutions: move transactional logic to separate bean, use AspectJ mode (spring.transaction.aspectj.enabled), or inject self proxy with @Lazy.`,source:_("reference/data/sql.html")},{question:"How would you prevent lost updates in a concurrent REST API using optimistic locking?",answer:`Lost update: two clients read version N, both write, last write silently overwrites first.

Optimistic locking: add @Version field (Long/Timestamp). JPA increments on successful update. Concurrent update throws OptimisticLockingFailureException → map to 409 Conflict.

Flow:
1. Client GET receives entity with version field
2. Client PUT/PATCH includes version in body
3. UPDATE ... WHERE id=? AND version=? — if 0 rows updated, conflict
4. Return 409 with current state for client retry

Alternative: ETag/If-Match headers. Pessimistic locking (@Lock(PESSIMISTIC_WRITE)) for high-contention financial operations — blocks readers/writers, use sparingly.`,code:[{language:"java",snippet:`@Entity
public class Account {
    @Id private Long id;
    @Version private Long version;
    private BigDecimal balance;
}

@PutMapping("/{id}")
public Account update(@PathVariable Long id, @RequestBody UpdateAccountRequest req) {
    try {
        return accountService.update(id, req);
    } catch (OptimisticLockingFailureException ex) {
        throw new ConflictException("Account was modified by another user");
    }
}`}],source:_("reference/data/sql.html")},{question:"How would you diagnose connection-pool exhaustion, slow database calls, and thread-pool saturation?",answer:`Connection pool exhaustion:
• Symptoms: timeouts waiting for connection, PoolExhaustedException
• Check HikariCP metrics: hikaricp.connections.active, pending threads
• Causes: pool too small, connection leaks (missing @Transactional close, stream not closed), long-running queries holding connections
• Fix: right-size maximum-pool-size, leak detection threshold, ensure @Transactional boundaries, query tuning

Slow database:
• Enable spring.jpa.properties.hibernate.generate_statistics (dev)
• Micrometer @Timed, datasource proxy logging, pg_stat_statements
• Actuator metrics, distributed traces (Micrometer Tracing)

Thread pool saturation:
• Tomcat: server.tomcat.threads.max, accept-count, queue metrics
• Async @Async pool: TaskExecutor bean sizing, rejected execution handler
• Symptoms: 503 responses, slow latency under load, threads blocked on JDBC

Correlate thread dumps (/actuator/threaddump) with DB active sessions.`,source:_("reference/actuator/endpoints.html")},{question:"How would you design idempotent POST processing for requests that may be retried?",answer:`Idempotent POST ensures duplicate requests (client retry, network timeout) produce same result without duplicate side effects.

Patterns:
1. Idempotency-Key header — client sends UUID; server stores key → response mapping in Redis/DB with TTL. Duplicate key returns cached response.
2. Natural idempotency — upsert by business key (orderRef) with unique constraint; duplicate insert fails gracefully.
3. Token-based — client obtains one-time token via GET, submits with POST.

Implementation:
• @Transactional: check idempotency store first
• Unique index on idempotency_key
• Return same HTTP status/body on replay (201 vs 200 debate — many return original 201 with same Location)
• Handle in-flight duplicates: processing state + locked key

Essential for payment APIs and message consumers with at-least-once delivery.`,code:[{language:"java",snippet:`@PostMapping("/payments")
public ResponseEntity<PaymentResponse> pay(
    @RequestHeader("Idempotency-Key") String key,
    @RequestBody PaymentRequest req) {
    return idempotencyService.execute(key, () -> paymentService.process(req));
}`}],source:_("reference/")},{question:"How would you coordinate database changes and message publication without relying on a distributed transaction?",answer:`Distributed transactions (2PC/XA) are slow, fragile, and discouraged across DB + Kafka.

Preferred patterns:

1. Transactional Outbox — write business data + outbox event in same local DB transaction. Separate poller publishes to broker and marks sent.

2. Change Data Capture (Debezium) — read DB transaction log, publish events. No application publish code.

3. Saga — choreographed or orchestrated compensating transactions across services.

Application flow (outbox):
• BEGIN; UPDATE account; INSERT INTO outbox(event_type, payload); COMMIT
• OutboxRelay (@Scheduled or separate process) reads unpublished rows, publishes to Kafka, updates status

Guarantees at-least-once delivery to broker; consumers must be idempotent. No dual-write race between DB commit and message send.`,source:_("reference/")},{question:"What is the transactional outbox pattern, and what failure modes must its publisher handle?",answer:`Transactional outbox stores events in an outbox table within the same database transaction as domain changes. A separate publisher process relays events to the message broker.

Publisher failure modes:
1. Crash after DB commit, before publish — row stays pending; retry poller picks up (at-least-once)
2. Publish succeeds, mark-sent fails — duplicate publish on retry → consumers need idempotency
3. Ordering — publish in transaction order (ORDER BY created_at, id); partition by aggregate ID
4. Poison messages — max retry + dead-letter queue
5. Publisher faster than consumers — monitor lag, scale consumers
6. Schema evolution — version events, backward compatible payloads

Use SELECT ... FOR UPDATE SKIP LOCKED for concurrent pollers. Spring: @Scheduled relay, or Debezium for log-based capture without polling.`,code:[{language:"java",snippet:`@Transactional
public void placeOrder(Order order) {
    orderRepository.save(order);
    outboxRepository.save(new OutboxEvent(
        "OrderPlaced", order.getId().toString(), toJson(order)));
}

@Scheduled(fixedDelay = 1000)
public void publishOutbox() {
    outboxRepository.findPendingForUpdate().forEach(this::publishAndMarkSent);
}`}],source:_("reference/")},{question:"How would you implement graceful shutdown while allowing in-flight requests and message handlers to finish?",answer:`Spring Boot graceful shutdown:

server.shutdown=graceful — stops accepting new requests, waits for in-flight HTTP requests to complete within spring.lifecycle.timeout-per-shutdown-phase (default 30s).

Additional steps:
• Register SmartLifecycle / @PreDestroy to pause Kafka listeners (KafkaListenerEndpointRegistry.stop)
• Use @EventListener(ContextClosedEvent) to drain executor queues
• Configure TaskExecutor waitForTasksToCompleteOnShutdown=true, awaitTerminationSeconds
• Kubernetes: preStop hook + sufficient terminationGracePeriodSeconds

Message consumers: stop polling, finish current message, commit offset, then exit. Avoid hard kill during DB transaction.

For long jobs: return 503 on health check during shutdown; register with platform load balancer deregistration first.`,code:[{language:"properties",snippet:`server.shutdown=graceful
spring.lifecycle.timeout-per-shutdown-phase=30s
spring.kafka.listener.ack-mode=record`}],source:_("reference/actuator/endpoints.html")},{question:"How would you structure liveness, readiness, startup, and dependency health checks?",answer:`Kubernetes probe mapping:

startupProbe — slow-starting apps (migrations, cache warm). /actuator/health/liveness with long failureThreshold. Until success, other probes disabled.

livenessProbe — is process alive? Restart if fails. Lightweight — don't include external deps (avoid restart loops when DB down). Custom /actuator/health/liveness with diskSpace + internal state only.

readinessProbe — can accept traffic? Include DB, broker, cache checks. /actuator/health/readiness. Remove from load balancer when failing.

Implementation:
• Custom HealthIndicator beans for Kafka, Redis, downstream HTTP
• @Component class implements HealthIndicator
• management.endpoint.health.group.readiness.include=readinessState,db,kafka
• management.endpoint.health.group.liveness.include=livenessState,ping

Actuator 3.x supports dedicated /actuator/health/liveness and /readiness groups.`,code:[{language:"java",snippet:`@Component
public class PaymentGatewayHealth implements HealthIndicator {
    private final PaymentClient client;

    @Override
    public Health health() {
        try {
            client.ping();
            return Health.up().build();
        } catch (Exception ex) {
            return Health.down(ex).build();
        }
    }
}`}],source:_("reference/actuator/endpoints.html")},{question:"How would you add metrics, traces, structured logs, and correlation IDs across service boundaries?",answer:`Observability stack for Spring Boot:

Metrics — Micrometer + spring-boot-starter-actuator. Export to Prometheus (management.prometheus.metrics.export.enabled=true). Custom @Timed, Counter, Gauge via MeterRegistry.

Traces — Micrometer Tracing with OpenTelemetry or Brave bridge. Auto-instrumentation for WebMvc, WebClient, JDBC, Kafka. Propagate trace context via W3C traceparent headers.

Structured logs — Logback JSON encoder (logstash-logback-encoder). Include traceId, spanId from MDC.

Correlation IDs — Servlet Filter or WebFilter reads/generates X-Correlation-Id, puts in MDC, adds to response. RestTemplate/WebClient ClientHttpRequestInterceptor propagates header downstream.

Unified: same trace ID flows through logs, metrics (exemplars), and traces. Dashboard per request path in Grafana/Datadog.`,code:[{language:"java",snippet:`@Component
public class CorrelationIdFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {
        String id = Optional.ofNullable(req.getHeader("X-Correlation-Id"))
            .orElse(UUID.randomUUID().toString());
        MDC.put("correlationId", id);
        res.setHeader("X-Correlation-Id", id);
        try { chain.doFilter(req, res); } finally { MDC.clear(); }
    }
}`}],source:_("reference/actuator/endpoints.html")},{question:"How do you secure Actuator, management, and application endpoints when they use separate ports or networks?",answer:`Separate management port (management.server.port=9090) binds Actuator on different interface — firewall rules restrict 9090 to ops network only; public port 8080 has no actuator exposure.

Security patterns:
• Dual SecurityFilterChain with @Order — management chain permits health/prometheus from monitoring CIDR; requires ADMIN role for env/beans
• mTLS for management port in service mesh
• NetworkPolicy (K8s) — only Prometheus scrapes 9090
• Do not expose management port via public Ingress
• application API uses OAuth2/JWT; management uses separate credentials or IP allowlist

management.endpoints.web.exposure.include=health,prometheus — minimal surface. spring.security.user for simple setups; LDAP/OAuth for production.`,code:[{language:"java",snippet:`@Bean
@Order(1)
SecurityFilterChain managementSecurity(HttpSecurity http) throws Exception {
    return http
        .securityMatcher(EndpointRequest.toAnyEndpoint())
        .authorizeHttpRequests(a -> a
            .requestMatchers(EndpointRequest.to("health", "prometheus")).permitAll()
            .anyRequest().hasRole("ACTUATOR_ADMIN"))
        .httpBasic(Customizer.withDefaults())
        .build();
}`}],source:_("reference/actuator/endpoints.html")},{question:"How would you test an application against real database and message-broker behavior while keeping tests repeatable?",answer:`Testcontainers provides disposable Docker instances per test class or suite:

• @Container static PostgreSQLContainer<?> postgres — JDBC URL injected via @DynamicPropertySource
• KafkaContainer for producer/consumer integration
• @ServiceConnection (Boot 3.1+) auto-wires datasource/kafka properties

Repeatability practices:
• Flyway/Liquibase migrations run before tests — known schema state
• @Transactional test rollback OR @Sql cleanup scripts
• Isolated topics/queues per test run (UUID suffix)
• @DirtiesContext sparingly — expensive
• Slice vs full: @SpringBootTest + Testcontainers for critical paths; @DataJpaTest + container for repository layer

CI: Docker-in-Docker or Testcontainers Cloud. Pin image versions (postgres:16-alpine).`,code:[{language:"java",snippet:`@SpringBootTest
@Testcontainers
class PaymentIntegrationTest {
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");

    @DynamicPropertySource
    static void configure(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
}`}],source:_("reference/testing/index.html")},{question:"When should an application use asynchronous methods, scheduled jobs, messaging, or reactive processing?",answer:`Choose based on workload shape:

@Async (TaskExecutor) — offload blocking work from HTTP thread (send email, generate PDF). Not for transaction boundaries across threads without TransactionSynchronization. Fire-and-forget or CompletableFuture return.

@Scheduled — periodic housekeeping (outbox relay, cache refresh, cleanup). Single-node unless Quartz/ShedLock for cluster coordination.

Messaging (Kafka/RabbitMQ) — decouple services, buffer spikes, event-driven architecture, cross-team contracts. At-least-once consumers with idempotency.

Reactive (WebFlux) — high concurrency I/O-bound with non-blocking stack end-to-end. Streaming, SSE, gateway aggregation.

Decision guide: async for intra-service offload; messaging for inter-service events; reactive when thread pools become bottleneck on I/O; scheduled for time-based batch. Avoid @Async for DB transactions that must commit before response unless carefully designed.`,code:[{language:"java",snippet:`@Async
public CompletableFuture<Void> sendReceipt(Order order) {
    emailService.send(order);
    return CompletableFuture.completedFuture(null);
}

@Scheduled(cron = "0 */5 * * * *")
public void relayOutbox() { outboxPublisher.publishPending(); }`}],source:_("reference/")},{question:"How would you diagnose a memory leak caused by application-context references, caches, listeners, or thread-local state?",answer:`Leak sources in Spring Boot:

1. Static fields holding ApplicationContext or beans — prevents GC of entire context on redeploy
2. Unbounded caches (HashMap without eviction) — Caffeine/Guava with maximumSize and TTL
3. Event listeners not removed — register/unregister pairs; avoid leaking references in @EventListener
4. ThreadLocal without remove — request context, MDC, security context on pooled threads
5. Custom ThreadPoolExecutor without shutdown on context destroy
6. ClassLoader leaks from hot deploy (less common in Boot executable JAR)

Diagnosis:
• Heap dump (jmap, Actuator heapdump in dev only)
• Eclipse MAT — dominator tree, leak suspects
• Micrometer JVM memory metrics trend
• Repeated redeploy test in dev — metaspace growth

Fix: @PreDestroy cleanup, remove ThreadLocal in finally, bounded caches, WeakReference where appropriate, avoid static context references.`,source:_("reference/actuator/endpoints.html")},{question:"Design a resilient Spring Boot service that calls an unreliable downstream API. Address timeouts, bounded retries, backoff, circuit breaking, bulkheads, observability, and fallback behavior.",answer:`Resilience design for downstream HTTP calls:

Timeouts — connect + read timeouts on RestTemplate/WebClient (e.g., 2s connect, 5s read). Never infinite wait.

Bounded retries — retry only idempotent operations (GET) or with idempotency key. Max 3 attempts. Exponential backoff with jitter (Resilience4j Retry). No retry on 4xx (except 429).

Circuit breaker — Resilience4j CircuitBreaker: open after failure rate threshold, half-open probe, slow call detection. Prevents cascade failures.

Bulkhead — separate thread pool/semaphore for downstream calls (Resilience4j Bulkhead). Payment API slowness does not exhaust Tomcat threads.

Fallback — return cached/default response, degraded mode flag, or queue for async retry. Log and metric the degradation.

Observability — Micrometer metrics (resilience4j.circuitbreaker.calls), trace spans on each attempt, structured log with correlation ID and downstream status.

Implementation: Resilience4j Spring Boot 3 integration (@CircuitBreaker, @Retry, @Bulkhead) or Spring Cloud Circuit Breaker abstraction with WebClient reactive stack.`,code:[{language:"java",snippet:`@Service
public class RatingClient {
    private final WebClient webClient;
    private final CircuitBreaker circuitBreaker;

    public RatingClient(WebClient.Builder builder, CircuitBreakerRegistry registry) {
        this.webClient = builder.baseUrl("https://ratings.api").build();
        this.circuitBreaker = registry.circuitBreaker("ratings");
    }

    public Rating fetchRating(String productId) {
        Supplier<Rating> supplier = CircuitBreaker.decorateSupplier(circuitBreaker, () ->
            webClient.get().uri("/ratings/{id}", productId)
                .retrieve()
                .bodyToMono(Rating.class)
                .timeout(Duration.ofSeconds(3))
                .blockOptional()
                .orElse(Rating.unavailable()));
        try {
            return supplier.get();
        } catch (CallNotPermittedException ex) {
            return Rating.unavailable();  // circuit open — fallback
        }
    }
}`}],source:_("reference/")}],Kf={category:"Basic Spring Boot",tags:["spring","spring-boot","core"],difficulty:"easy",priority:"high"},Yf={category:"Intermediate Spring Boot",tags:["spring-boot","jpa","testing"],difficulty:"medium",priority:"high"},Zf={category:"Challenging Spring Boot",tags:["spring-boot","architecture","resilience"],difficulty:"hard",priority:"critical"},eh=ue({id:"springboot",number:17,title:"Spring Boot",description:"Spring Boot from DI and REST APIs through JPA, transactions, Actuator, and production patterns like outbox, graceful shutdown, and resilience.",priority:"high",color:"var(--green)",questions:[...M("sb",Qf,Kf),...M("sbm",$f,Yf),...M("sbc",Xf,Zf)]}),nh=[Jm,Zm,df,mf,hf,yf,wf,kf,Sf,Ef,Af,jf,If,qf,Ff,Gf,eh],Ue=nh.map(zm);function th({sectionColor:e="#6366f1",showMenu:n=!0}){const{theme:t,toggleTheme:r}=_u(),{openBookmarks:s,activeView:a,goToLanding:o,toggleSidebar:i,sidebarOpen:l}=ln(),{getOverallProgress:d}=pr(),{bookmarkCount:y}=Xo(),{reviewed:g,total:h}=d(Ue),b=h===0?0:Math.round(g/h*100);return c.jsxs("header",{className:"app-header glass-panel",children:[c.jsxs("div",{className:"app-header__left",children:[n&&c.jsx("button",{type:"button",className:"app-header__menu-btn",onClick:i,"aria-label":l?"Close menu":"Open menu","aria-expanded":l,children:c.jsx(qm,{size:18})}),c.jsxs("button",{type:"button",onClick:o,title:"Back to home",className:"app-header__brand",children:[c.jsx("div",{className:"app-header__logo",style:{background:`linear-gradient(135deg, ${e}, color-mix(in srgb, ${e} 60%, #fff))`,boxShadow:`0 2px 12px ${e}44`},children:"PF"}),c.jsx("span",{className:"app-header__title",style:{color:a==="landing"?e:"var(--text-primary)"},children:"Prep First"})]})]}),c.jsx("div",{className:"app-header__search",children:c.jsx(Lm,{accentColor:e})}),c.jsxs("div",{className:"app-header__actions",children:[c.jsxs("div",{className:"app-header__progress",children:[c.jsx("span",{className:"app-header__progress-dot",style:{background:b===100?"var(--green)":e,boxShadow:`0 0 6px ${e}66`}}),c.jsxs("span",{className:"app-header__progress-pct",style:{color:e},children:[b,"%"]}),c.jsxs("span",{className:"app-header__progress-count",children:[g,"/",h]})]}),c.jsxs("button",{type:"button",onClick:s,title:"Bookmarks",className:`app-header__icon-btn${a==="bookmarks"?" app-header__icon-btn--active":""}`,style:{"--btn-accent":e,borderColor:a==="bookmarks"?e:void 0,color:a==="bookmarks"?e:void 0},children:[c.jsx(xm,{size:16}),y>0&&c.jsx("span",{className:"app-header__badge",style:{background:e},children:y})]}),c.jsx("button",{type:"button",onClick:r,title:`Switch to ${t==="dark"?"light":"dark"} mode`,className:"app-header__icon-btn app-header__icon-btn--square",style:{"--btn-accent":e},children:t==="dark"?c.jsx(Nm,{size:16}):c.jsx(Om,{size:16})})]})]})}const dl={critical:{label:"Critical",color:"var(--red)",bg:"var(--red-dim)"},high:{label:"High",color:"var(--amber)",bg:"var(--amber-dim)"},medium:{label:"Medium",color:"var(--blue)",bg:"var(--blue-dim)"},low:{label:"Low",color:"var(--green)",bg:"var(--green-dim)"}},pl={easy:{label:"Easy",color:"var(--green)",bg:"var(--green-dim)"},medium:{label:"Medium",color:"var(--amber)",bg:"var(--amber-dim)"},hard:{label:"Hard",color:"var(--red)",bg:"var(--red-dim)"}};function rh(e){return dl[e]??dl.medium}function sh(e){return pl[e]??pl.easy}function ah(e="",n=""){if(!n.trim())return[{text:e,highlight:!1}];const t=new RegExp(`(${oh(n.trim())})`,"gi");return e.split(t).map(s=>({text:s,highlight:t.test(s)}))}function oh(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function ih(e=""){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function lh({value:e=0,total:n=1,height:t=4,color:r="var(--accent)",bg:s="var(--border)",showLabel:a=!1,style:o={}}){const i=n===0?0:Math.round(e/n*100);return c.jsxs("div",{style:{width:"100%",...o},children:[a&&c.jsxs("div",{className:"progress-bar__label",style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[c.jsxs("span",{children:[e," / ",n," reviewed"]}),c.jsxs("span",{children:[i,"%"]})]}),c.jsx("div",{style:{width:"100%",height:`${t}px`,background:s,borderRadius:"99px",overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${i}%`,background:r,borderRadius:"99px",transition:"width 0.4s ease"}})})]})}function ch({value:e=0,total:n=1,size:t=36,strokeWidth:r=3,color:s="var(--accent)"}){const a=n===0?0:Math.round(e/n*100),o=(t-r*2)/2,i=2*Math.PI*o,l=i-a/100*i;return c.jsxs("div",{style:{position:"relative",width:t,height:t},children:[c.jsxs("svg",{width:t,height:t,style:{transform:"rotate(-90deg)"},children:[c.jsx("circle",{cx:t/2,cy:t/2,r:o,fill:"none",stroke:"var(--border)",strokeWidth:r}),c.jsx("circle",{cx:t/2,cy:t/2,r:o,fill:"none",stroke:s,strokeWidth:r,strokeDasharray:i,strokeDashoffset:l,strokeLinecap:"round",style:{transition:"stroke-dashoffset 0.4s ease"}})]}),c.jsxs("span",{className:"progress-ring__label",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:[a,"%"]})]})}function uh({section:e,isActive:n,onClick:t}){const[r,s]=R.useState(!1),{theme:a}=_u(),{getSectionProgress:o}=pr(),{reviewed:i,total:l}=o(e.questions),d=e.color??"#6366f1",y=a==="dark",g=y?n?"#ffffff":r?d:"var(--text-muted)":n||r?d:"var(--text-muted)";return c.jsxs("button",{type:"button",onClick:t,className:`sidebar-item${n?" sidebar-item--active":""}${r&&!n?" sidebar-item--hover":""}`,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{"--item-accent":d,"--item-accent-dim":e.colorDim??"var(--accent-dim)","--item-text":e.darkCardText??"#1E293B"},children:[c.jsx("span",{className:"sidebar-item__strip","aria-hidden":!0}),c.jsx("span",{className:"sidebar-item__num",children:String(e.number).padStart(2,"0")}),c.jsxs("div",{className:"sidebar-item__body",children:[c.jsxs("div",{className:"sidebar-item__title-row",children:[c.jsx("span",{className:"sidebar-item__dot","aria-hidden":!0}),c.jsx("span",{className:"sidebar-item__title",children:e.title})]}),c.jsxs("span",{className:"sidebar-item__meta",children:[i,"/",l," reviewed"]})]}),c.jsx("div",{className:"sidebar-item__ring",children:c.jsx(ch,{value:i,total:l,size:28,strokeWidth:2.5,color:g})})]})}function dh({isMobile:e=!1,isOpen:n=!1}){const{activeSection:t,activeView:r,navigateTo:s,closeSidebar:a}=ln();return c.jsxs("aside",{className:`sidebar glass-panel${e?" sidebar--drawer":" sidebar--desktop"}${n?" sidebar--open":""}`,"aria-hidden":e&&!n,"aria-label":"Sections navigation",children:[c.jsxs("div",{className:"sidebar__header",children:[c.jsx("span",{className:"sidebar__label",children:"Sections"}),e&&c.jsx("button",{type:"button",className:"sidebar__close",onClick:a,"aria-label":"Close menu",children:c.jsx(Du,{size:18})})]}),c.jsx("nav",{className:"sidebar__nav",children:Ue.map(o=>c.jsx(uh,{section:o,isActive:r==="section"&&t===o.id,onClick:()=>s(o.id)},o.id))})]})}function ph(e=[],n=""){const t=R.useMemo(()=>{const r=n.trim().toLowerCase();if(!r)return[];const s=[];return e.forEach(a=>{a.questions.forEach(o=>{var y,g;const i=o.question.toLowerCase().includes(r),l=((y=o.answer)==null?void 0:y.toLowerCase().includes(r))??!1,d=((g=o.tags)==null?void 0:g.some(h=>h.toLowerCase().includes(r)))??!1;(i||l||d)&&s.push({...o,sectionId:a.id,sectionTitle:a.title,sectionColor:a.color,sectionPastel:a.pastel})})}),s},[e,n]);return{results:t,totalCount:t.length,hasResults:t.length>0}}function mh(e=[],n="all",t="all"){return R.useMemo(()=>e.filter(r=>{const s=n==="all"||r.priority===n,a=t==="all"||r.difficulty===t;return s&&a}),[e,n,t])}const Ko={display:"inline-flex",alignItems:"center",padding:"2px 8px",borderRadius:"99px",whiteSpace:"nowrap"};function Mu({priority:e}){const n=rh(e);return c.jsx("span",{className:"typo-badge",style:{...Ko,color:n.color,background:n.bg},children:n.label})}function fh({difficulty:e}){const n=sh(e);return c.jsx("span",{className:"typo-badge",style:{...Ko,color:n.color,background:n.bg},children:n.label})}function hh({label:e,color:n="var(--text-muted)",bg:t="var(--bg-primary)"}){return c.jsx("span",{className:"typo-badge",style:{...Ko,color:n,background:t,border:"1px solid var(--border)",fontWeight:"var(--font-medium)"},children:e})}function gh({tags:e=[]}){return e.length?c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.map(n=>c.jsx(hh,{label:n},n))}):null}function yh({section:e}){const{getSectionProgress:n}=pr(),{reviewed:t,total:r}=n(e.questions),s=r===0?0:Math.round(t/r*100),a=e.color??"#6366f1";return c.jsxs("div",{style:{padding:"24px 0 20px",marginBottom:"8px"},children:[c.jsxs("div",{className:"section-hero",style:{background:`linear-gradient(135deg, ${e.colorDim??"var(--accent-dim)"} 0%, transparent 70%)`,border:`1px solid ${a}33`,borderLeft:`4px solid ${a}`,boxShadow:`0 8px 32px ${a}18`},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px",flexWrap:"wrap"},children:[c.jsx("span",{className:"section-hero__badge",style:{background:a},children:String(e.number).padStart(2,"0")}),c.jsx("h1",{className:"section-hero__title",children:e.title}),e.priority&&c.jsx(Mu,{priority:e.priority})]}),e.description&&c.jsx("p",{className:"section-hero__desc",children:e.description})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap",paddingTop:"12px",borderBottom:"1px solid var(--border)",paddingBottom:"16px"},children:[c.jsxs("div",{style:{display:"flex",gap:"16px"},children:[c.jsx(oa,{label:"Questions",value:r}),c.jsx(oa,{label:"Reviewed",value:t,color:a}),c.jsx(oa,{label:"Remaining",value:r-t,color:"var(--text-muted)"})]}),c.jsx("div",{style:{flex:1,minWidth:"160px"},children:c.jsx(lh,{value:t,total:r,height:6,color:a,showLabel:!1})}),c.jsxs("span",{className:"section-pct",style:{color:a},children:[s,"%"]})]})]})}function oa({label:e,value:n,color:t="var(--text-primary)"}){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[c.jsx("span",{className:"section-stat__value",style:{color:t},children:n}),c.jsx("span",{className:"section-stat__label",children:e})]})}const vh=new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"]),Bu=new Set(["SELECT","FROM","WHERE","JOIN","INNER","LEFT","RIGHT","OUTER","ON","GROUP","BY","HAVING","ORDER","ASC","DESC","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","VIEW","INDEX","UNIQUE","PRIMARY","KEY","FOREIGN","REFERENCES","AS","DISTINCT","COUNT","AVG","SUM","MAX","MIN","AND","OR","NOT","NULL","IS","IN","EXISTS","BETWEEN","LIKE","LIMIT","OFFSET","UNION","ALL","CASE","WHEN","THEN","ELSE","END","WITH","OVER","PARTITION","ROW_NUMBER","DENSE_RANK","PROCEDURE","EXEC","BEGIN","END","INT","VARCHAR","BOOLEAN"]),wh=new Set(["if","then","else","elif","fi","for","while","do","done","case","esac","function","return","in","export","local"]),bh=new Set(["const","let","var","function","return","if","else","for","while","class","import","export","from","async","await","new","true","false","null","undefined","typeof","instanceof"]);function kh(e){const n=(e??"text").toLowerCase();return n==="python"?vh:n==="sql"?Bu:n==="bash"||n==="shell"?wh:n==="javascript"||n==="js"?bh:new Set}function xh(e,n,t){const r=[];let s=0;const a=(t??"").toLowerCase();for(;s<e.length;){const o=e.slice(s);if(a==="python"&&o.startsWith("#")){r.push({type:"comment",text:o});break}if((a==="sql"||a==="bash")&&o.startsWith("--")){r.push({type:"comment",text:o});break}if(a==="bash"&&o.startsWith("#")){r.push({type:"comment",text:o});break}const i=o.match(/^(['"`])(?:\\.|(?!\1)[^\\])*\1/);if(i){r.push({type:"string",text:i[0]}),s+=i[0].length;continue}if(a==="python"&&o[0]==="@"){const g=o.match(/^@\w+/);if(g){r.push({type:"decorator",text:g[0]}),s+=g[0].length;continue}}const l=o.match(/^\d+(?:\.\d+)?/);if(l){r.push({type:"number",text:l[0]}),s+=l[0].length;continue}const d=o.match(/^[A-Za-z_][\w]*/);if(d){const g=d[0],h=g.toUpperCase();n.has(g)||n.has(h)||a==="sql"&&Bu.has(h)?r.push({type:"keyword",text:g}):o[g.length]==="("?r.push({type:"function",text:g}):a==="python"&&/^[A-Z]/.test(g)?r.push({type:"class",text:g}):r.push({type:"plain",text:g}),s+=g.length;continue}const y=o.match(/^[+\-*/%=<>!&|^~.:,;()[\]{}]+/);if(y){r.push({type:"operator",text:y[0]}),s+=y[0].length;continue}r.push({type:"plain",text:e[s]}),s+=1}return r}function Sh(e="",n="text"){const t=kh(n);return e.replace(/\r\n/g,`
`).split(`
`).map(s=>xh(s,t,n))}function Ch(e="text"){return{python:"Python",javascript:"JavaScript",java:"Java",sql:"SQL",bash:"Bash",xml:"XML",json:"JSON"}[e.toLowerCase()]??"Text"}function Eh({lines:e}){return c.jsx(c.Fragment,{children:e.map((n,t)=>c.jsxs("span",{className:"code-block__line",children:[n.map((r,s)=>c.jsx("span",{className:`code-token code-token--${r.type}`,children:r.text},s)),t<e.length-1?`
`:null]},t))})}function Ph({language:e="text",snippet:n=""}){const[t,r]=R.useState(!1),s=Sh(n,e),a=async()=>{await ih(n)&&(r(!0),setTimeout(()=>r(!1),2e3))};return c.jsxs("div",{className:`code-block code-block--${e.toLowerCase()}`,children:[c.jsxs("div",{className:"code-block__header",children:[c.jsx("span",{className:"code-block__lang",children:Ch(e)}),c.jsxs("button",{type:"button",onClick:a,className:"code-block__copy",style:{color:t?"var(--text-primary)":void 0},children:[t?c.jsx(Cm,{size:12}):c.jsx(jm,{size:12}),t?"Copied":"Copy"]})]}),c.jsx("pre",{className:"code-block__pre",children:c.jsx("code",{children:c.jsx(Eh,{lines:s})})})]})}function Ah({codeBlocks:e=[]}){return e.length?c.jsx("div",{className:"code-block-list",children:e.map((n,t)=>c.jsx(Ph,{language:n.language,snippet:n.snippet},t))}):null}function Th(){return{color:"var(--text-secondary)",bg:"var(--bg-raised)"}}function jh({source:e}){if(!(e!=null&&e.name))return null;const{color:n,bg:t}=Th();return c.jsxs("a",{href:e.url??"#",target:"_blank",rel:"noopener noreferrer",className:"typo-badge",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 10px",borderRadius:"99px",color:n,background:t,textDecoration:"none",border:"1px solid var(--border)",fontWeight:"var(--font-medium)",transition:"opacity 0.18s ease"},onMouseEnter:r=>r.currentTarget.style.opacity="0.8",onMouseLeave:r=>r.currentTarget.style.opacity="1",children:[e.name,e.url&&c.jsx(_m,{size:10,style:{flexShrink:0}})]})}function _h({source:e}){return e!=null&&e.name?c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"12px"},children:[c.jsx("span",{className:"typo-caption",children:"Source"}),c.jsx(jh,{source:e})]}):null}const Fu=/^(Examples?|e\.g\.|For example)\s*:?\s*/i,Ih=[/`([^`]+)`/g,/('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/g,/\b(?:True|False|None)\b/g,/\b[a-zA-Z_][\w]*(?:\.[a-zA-Z_][\w]*)*\([^)]*\)/g,/\[[^\[\]]{1,120}\]/g,/\b(?:def|class|import|from|return|append|extend|len|is|==)\b/g,/\b[a-z_][\w]*\(\)/g];function Rh(e=""){return Fu.test(e.trim())}function qh(e){const n=e.trim().match(Fu);if(!n)return{label:null,body:e};const t=e.indexOf(n[0]);return{label:n[0].trim(),body:e.slice(t+n[0].length)}}function Oh(e){const n=[];for(const r of Ih){r.lastIndex=0;let s;for(;(s=r.exec(e))!==null;)n.push({start:s.index,end:s.index+s[0].length,text:s[0]})}n.sort((r,s)=>r.start-s.start||s.end-r.end-(r.end-r.start));const t=[];for(const r of n){const s=t[t.length-1];s&&r.start<s.end||t.push(r)}return t}function ml({text:e,accentColor:n}){const t=Oh(e);if(!t.length)return c.jsx(c.Fragment,{children:e});const r=[];let s=0;return t.forEach((a,o)=>{a.start>s&&r.push(c.jsx("span",{children:e.slice(s,a.start)},`t-${o}-pre`));const i=a.text,l=i.startsWith("`")?i.slice(1,-1):i;r.push(c.jsx("code",{className:"inline-code",children:l},`c-${o}`)),s=a.end}),s<e.length&&r.push(c.jsx("span",{children:e.slice(s)},"tail")),c.jsx(c.Fragment,{children:r})}function fl({text:e,query:n,accentColor:t}){if(!(n!=null&&n.trim()))return c.jsx(ml,{text:e,accentColor:t});const r=ah(e,n);return c.jsx(c.Fragment,{children:r.map((s,a)=>s.highlight?c.jsx("mark",{className:"search-highlight",style:{background:`${t}22`,color:t},children:s.text},a):c.jsx(ml,{text:s.text,accentColor:t},a))})}function Dh({text:e,query:n,accentColor:t}){if(Rh(e)){const{label:r,body:s}=qh(e);return c.jsxs("p",{className:"answer-block__paragraph answer-example",children:[r&&c.jsx("span",{className:"answer-example__label",children:r}),c.jsx(fl,{text:s,query:n,accentColor:t})]})}return c.jsx("p",{className:"answer-block__paragraph",children:c.jsx(fl,{text:e,query:n,accentColor:t})})}function Nh(){return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px 16px",background:"var(--bg-raised)",borderRadius:"var(--radius-md)",border:"1px dashed var(--border)"},children:[c.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",borderRadius:"var(--radius-md)",border:"1px solid var(--border)",color:"var(--text-muted)",flexShrink:0},children:c.jsx(Im,{size:15,strokeWidth:1.5})}),c.jsxs("div",{children:[c.jsx("p",{className:"answer-block__placeholder-title",children:"Answer not yet added."}),c.jsx("p",{className:"typo-caption",style:{marginTop:"2px"},children:"This will be populated from a reputable source."})]})]})}function Lh({text:e="",query:n="",accentColor:t}){const r=e.split(`
`).filter(s=>s.trim());return c.jsx("div",{className:"answer-block__content",children:r.map((s,a)=>c.jsx(Dh,{text:s,query:n,accentColor:t},a))})}function Mh({question:e,accentColor:n="#6366f1"}){const{answer:t,code:r=[],source:s,searchQuery:a=""}=e;return t?c.jsxs("div",{className:"answer-block",children:[c.jsx(Lh,{text:t,query:a,accentColor:n}),r.length>0&&c.jsx(Ah,{codeBlocks:r}),c.jsx(_h,{source:s})]}):c.jsx(Nh,{})}function Yo({question:e,index:n,accentColor:t}){var b;const[r,s]=R.useState(!1),{toggleReviewed:a,isReviewed:o}=pr(),{toggleBookmark:i,isBookmarked:l}=Xo(),{searchQuery:d}=ln(),y=o(e.id),g=l(e.id),h=t??e.sectionColor??"#6366f1";return c.jsxs("div",{className:"glass-panel question-card",style:{background:"var(--bg-surface)",border:`1px solid ${r?`${h}55`:"var(--border)"}`,borderLeft:`3px solid ${h}`,borderRadius:"var(--radius-lg)",overflow:"hidden",transition:"all var(--transition)",opacity:y?.82:1,boxShadow:r?`0 6px 28px ${h}22`:"none"},children:[c.jsxs("div",{className:"question-card__header",onClick:()=>s(k=>!k),children:[c.jsx("span",{className:`question-card__index typo-mono${r?" question-card__index--open":""}`,style:{color:r?h:void 0},children:String(n).padStart(2,"0")}),c.jsxs("div",{style:{flex:1,minWidth:0},children:[c.jsx("p",{className:"question-card__question",children:e.question}),c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"6px"},children:[e.priority&&c.jsx(Mu,{priority:e.priority}),e.difficulty&&c.jsx(fh,{difficulty:e.difficulty}),((b=e.tags)==null?void 0:b.length)>0&&c.jsx(gh,{tags:e.tags}),y&&c.jsx("span",{className:"question-card__reviewed",children:"✓ Reviewed"})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",flexShrink:0},onClick:k=>k.stopPropagation(),children:[c.jsx("button",{type:"button",onClick:()=>i(e.id),title:g?"Remove bookmark":"Bookmark",style:{padding:"4px",borderRadius:"var(--radius-sm)",color:g?h:"var(--text-muted)",transition:"color 0.18s"},children:g?c.jsx(Sm,{size:15}):c.jsx(qu,{size:15})}),c.jsx("button",{type:"button",onClick:()=>a(e.id),title:y?"Mark as unreviewed":"Mark as reviewed",style:{padding:"4px",borderRadius:"var(--radius-sm)",color:y?"var(--green)":"var(--text-muted)",transition:"color 0.18s"},children:y?c.jsx(Am,{size:15}):c.jsx(Tm,{size:15})}),c.jsx("button",{type:"button",onClick:()=>s(k=>!k),style:{padding:"4px",borderRadius:"var(--radius-sm)",color:"var(--text-muted)"},children:r?c.jsx(Pm,{size:15}):c.jsx(Em,{size:15})})]})]}),r&&c.jsx("div",{style:{padding:"0 16px 16px",borderTop:"1px solid var(--border)",paddingTop:"14px"},children:c.jsx(Mh,{question:{...e,searchQuery:d},accentColor:h})})]})}const hl={search:{Icon:Ou,title:"No results found",subtitle:"Try a different keyword or check your filters."},bookmarks:{Icon:qu,title:"No bookmarks yet",subtitle:"Click the bookmark icon on any question to save it here."},filtered:{Icon:eo,title:"No questions match",subtitle:"Try adjusting the priority or difficulty filter."},default:{Icon:eo,title:"Nothing here yet",subtitle:"Content will appear once data is populated."}};function or({variant:e="default",query:n=""}){const{Icon:t,title:r,subtitle:s}=hl[e]??hl.default;return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",padding:"64px 24px",textAlign:"center"},children:[c.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"56px",height:"56px",borderRadius:"50%",background:"var(--bg-raised)",color:"var(--text-muted)",marginBottom:"4px"},children:c.jsx(t,{size:24})}),c.jsx("p",{className:"typo-title",children:r}),c.jsx("p",{className:"typo-body-sm",style:{maxWidth:"280px"},children:e==="search"&&n?`No matches for "${n}"`:s})]})}function gl({total:e,filtered:n}){const{filterPriority:t,filterDifficulty:r,setFilterPriority:s,setFilterDifficulty:a,resetFilters:o}=ln(),i=t!=="all"||r!=="all";return c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",flexWrap:"wrap",marginBottom:"16px"},children:[c.jsxs("span",{className:"filter-bar__count",children:[i?`${n} of ${e}`:`${e}`," questions"]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsxs("select",{value:t,onChange:l=>s(l.target.value),className:"filter-bar__select",children:[c.jsx("option",{value:"all",children:"All Priorities"}),c.jsx("option",{value:"critical",children:"Critical"}),c.jsx("option",{value:"high",children:"High"}),c.jsx("option",{value:"medium",children:"Medium"}),c.jsx("option",{value:"low",children:"Low"})]}),c.jsxs("select",{value:r,onChange:l=>a(l.target.value),className:"filter-bar__select",children:[c.jsx("option",{value:"all",children:"All Difficulties"}),c.jsx("option",{value:"easy",children:"Easy"}),c.jsx("option",{value:"medium",children:"Medium"}),c.jsx("option",{value:"hard",children:"Hard"})]}),i&&c.jsx("button",{type:"button",onClick:o,className:"filter-bar__reset",children:"Reset"})]})]})}function Bh(e){if(!e.some(t=>t.category))return[{category:null,questions:e}];const n=[];return e.forEach(t=>{const r=t.category??"General",s=n[n.length-1];(s==null?void 0:s.category)===r?s.questions.push(t):n.push({category:r,questions:[t]})}),n}function Fh({title:e,accentColor:n="#6366f1"}){return c.jsxs("h2",{className:"category-heading",style:{color:n,borderBottomColor:`${n}33`},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:n,flexShrink:0}}),e]})}function Uh({questions:e=[],accentColor:n="#6366f1"}){const{filterPriority:t,filterDifficulty:r}=ln(),s=mh(e,t,r),a=Bh(s);if(e.length===0)return c.jsx(or,{variant:"default"});if(s.length===0)return c.jsxs(c.Fragment,{children:[c.jsx(gl,{total:e.length,filtered:0}),c.jsx(or,{variant:"filtered"})]});let o=0;return c.jsxs("div",{children:[c.jsx(gl,{total:e.length,filtered:s.length}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:a.map(i=>c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[i.category&&c.jsx(Fh,{title:i.category,accentColor:n}),i.questions.map(l=>(o+=1,c.jsx(Yo,{question:l,index:o,accentColor:n},l.id)))]},i.category??"default"))})]})}function Wh({query:e}){const{results:n,totalCount:t,hasResults:r}=ph(Ue,e);return c.jsxs("div",{children:[c.jsxs("div",{style:{padding:"24px 0 20px",borderBottom:"1px solid var(--border)",marginBottom:"20px"},children:[c.jsx("h1",{className:"view-title",children:"Search Results"}),c.jsx("p",{className:"view-subtitle",children:r?`${t} result${t!==1?"s":""} for "${e}"`:`No results for "${e}"`})]}),r?c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:n.map((s,a)=>c.jsxs("div",{children:[c.jsxs("p",{className:"typo-label",style:{color:s.sectionColor??"var(--text-muted)",marginBottom:"6px",paddingLeft:"4px",display:"flex",alignItems:"center",gap:"6px",textTransform:"none",fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-wide)"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:s.sectionColor??"var(--text-muted)"}}),s.sectionTitle]}),c.jsx(Yo,{question:s,index:a+1,accentColor:s.sectionColor})]},s.id))}):c.jsx(or,{variant:"search",query:e})]})}function zh(){const{getBookmarkIds:e,bookmarkCount:n,clearBookmarks:t}=Xo(),r=e(),s=Ue.flatMap(a=>a.questions).filter(a=>r.includes(a.id));return c.jsxs("div",{children:[c.jsxs("div",{style:{padding:"24px 0 20px",borderBottom:"1px solid var(--border)",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsx("h1",{className:"view-title",children:"Bookmarks"}),c.jsxs("p",{className:"view-subtitle",children:[n," saved question",n!==1?"s":""]})]}),n>0&&c.jsx("button",{type:"button",onClick:t,className:"filter-bar__reset",children:"Clear all"})]}),s.length===0?c.jsx(or,{variant:"bookmarks"}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:s.map((a,o)=>c.jsx(Yo,{question:a,index:o+1},a.id))})]})}function Hh({sectionId:e}){const n=Ue.find(t=>t.id===e);return n?c.jsxs("div",{children:[c.jsx(yh,{section:n}),c.jsx("div",{style:{marginTop:"20px"},children:c.jsx(Uh,{questions:n.questions,accentColor:n.color})})]}):c.jsx(or,{variant:"default"})}function Jh(){const{activeView:e,activeSection:n,searchQuery:t}=ln();return c.jsxs("main",{className:"section-view",children:[e==="search"&&c.jsx(Wh,{query:t}),e==="bookmarks"&&c.jsx(zh,{}),e==="section"&&c.jsx(Hh,{sectionId:n})]})}function Vh(){const{navigateTo:e}=ln(),{getOverallProgress:n}=pr(),{reviewed:t,total:r}=n(Ue),s=r===0?0:Math.round(t/r*100),a=Ue.reduce((i,l)=>i+l.questions.length,0),o=Ue.reduce((i,l)=>i+l.questions.filter(d=>d.answer).length,0);return c.jsxs("div",{style:{padding:"32px 0 64px"},children:[c.jsxs("section",{style:{textAlign:"center",marginBottom:"56px"},children:[c.jsxs("div",{className:"landing-eyebrow",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"99px",background:"var(--bg-raised)",border:"1px solid var(--border)",marginBottom:"20px"},children:[c.jsx(Dm,{size:12}),a," questions · ",Ue.length," sections · ",o," answered"]}),c.jsxs("h1",{className:"typo-display",style:{marginBottom:"16px"},children:["Ace your next",c.jsx("br",{}),c.jsx("span",{style:{background:"linear-gradient(135deg, #7c3aed, #ea580c, #ca8a04)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"QA interview"})]}),c.jsx("p",{className:"typo-body-lg",style:{maxWidth:"480px",margin:"0 auto 28px",textAlign:"center"},children:"Structured prep for automation testing — Python, Selenium, API, SQL, Jenkins, banking domain, and more. Review answers, track progress, bookmark tough ones."}),c.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[c.jsxs("button",{type:"button",onClick:()=>e("hr"),className:"btn-cta btn-cta--primary",children:["Start preparing",c.jsx(km,{size:16})]}),c.jsxs("button",{type:"button",onClick:()=>e("python"),className:"btn-cta btn-cta--secondary",onMouseEnter:i=>i.currentTarget.style.borderColor="#7c3aed",onMouseLeave:i=>i.currentTarget.style.borderColor="var(--border)",children:[c.jsx(eo,{size:16}),"Jump to Python"]})]}),t>0&&c.jsxs("p",{className:"typo-body-sm",style:{marginTop:"24px"},children:["You've reviewed"," ",c.jsx("strong",{style:{color:"var(--text-primary)"},children:t})," of"," ",r," questions (",s,"%)"]})]}),c.jsxs("section",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[c.jsx(Rm,{size:16,color:"var(--text-muted)"}),c.jsx("h2",{className:"landing-section-label",children:"All sections"})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"12px"},children:Ue.map(i=>c.jsxs("button",{onClick:()=>e(i.id),className:"glass-panel",style:{textAlign:"left",padding:"16px 18px",borderRadius:"var(--radius-lg)",background:"var(--bg-surface)",border:"1px solid var(--border)",borderLeft:`4px solid ${i.color}`,cursor:"pointer",transition:"all var(--transition)"},onMouseEnter:l=>{l.currentTarget.style.borderColor=`${i.color}55`,l.currentTarget.style.boxShadow=`0 6px 24px ${i.color}22`,l.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:l=>{l.currentTarget.style.borderColor="var(--border)",l.currentTarget.style.boxShadow="none",l.currentTarget.style.transform="none"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"},children:[c.jsx("span",{className:"landing-card__num",style:{background:i.color},children:String(i.number).padStart(2,"0")}),c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:i.color,boxShadow:`0 0 8px ${i.color}88`}})]}),c.jsx("p",{className:"landing-card__title",children:i.title}),c.jsxs("p",{className:"landing-card__meta",children:[i.questions.length," questions"]})]},i.id))})]})]})}function Gh(e){const[n,t]=R.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return R.useEffect(()=>{const r=window.matchMedia(e),s=a=>t(a.matches);return t(r.matches),r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[e]),n}function Qh(){return Gh("(max-width: 768px)")}function $h(){const{activeSection:e,activeView:n,sidebarOpen:t,closeSidebar:r}=ln(),s=Qh(),a=n==="landing",o=Ue.find(d=>d.id===e),i=n==="section"?o==null?void 0:o.color:"#6366f1",l=n==="section"?o==null?void 0:o.pastel:"transparent";return R.useEffect(()=>{s||r()},[s,r]),R.useEffect(()=>(s&&t&&!a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s,t,a]),c.jsxs("div",{className:"app-shell",style:{"--section-accent":i,"--section-pastel":a?"rgba(196, 181, 253, 0.35)":l},children:[c.jsx("div",{className:"app-shell__ambient","aria-hidden":!0}),c.jsxs("div",{className:"app-shell__content",children:[c.jsx(th,{sectionColor:a?"#6366f1":i,showMenu:!a}),a?c.jsx("div",{className:"main-scroll",children:c.jsx("div",{className:"page-container page-container--wide",children:c.jsx(Vh,{})})}):c.jsxs("div",{className:"app-body",children:[s&&t&&c.jsx("button",{type:"button",className:"sidebar-backdrop",onClick:r,"aria-label":"Close menu"}),c.jsx(dh,{isMobile:s,isOpen:t}),c.jsx("div",{className:"main-scroll",children:c.jsx("div",{className:"page-container",children:c.jsx(Jh,{})})})]})]})]})}function Xh(){return c.jsx(gm,{children:c.jsx(ym,{children:c.jsx($h,{})})})}ia.createRoot(document.getElementById("root")).render(c.jsx(sd.StrictMode,{children:c.jsx(Xh,{})}));
