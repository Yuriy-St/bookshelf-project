import"./main-b7069fe9.js";import{d as nt,a as rt}from"./dbAPI-8f4e3522.js";function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:ot}=Object.prototype,{getPrototypeOf:ce}=Object,H=(e=>t=>{const n=ot.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),k=e=>(e=e.toLowerCase(),t=>H(t)===e),z=e=>t=>typeof t===e,{isArray:L}=Array,x=z("undefined");function st(e){return e!==null&&!x(e)&&e.constructor!==null&&!x(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Be=k("ArrayBuffer");function it(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Be(e.buffer),t}const at=z("string"),w=z("function"),Le=z("number"),J=e=>e!==null&&typeof e=="object",ct=e=>e===!0||e===!1,M=e=>{if(H(e)!=="object")return!1;const t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lt=k("Date"),ut=k("File"),ft=k("Blob"),dt=k("FileList"),ht=e=>J(e)&&w(e.pipe),pt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||w(e.append)&&((t=H(e))==="formdata"||t==="object"&&w(e.toString)&&e.toString()==="[object FormData]"))},mt=k("URLSearchParams"),yt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function P(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Ne(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const xe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Pe=e=>!x(e)&&e!==xe;function ne(){const{caseless:e}=Pe(this)&&this||{},t={},n=(r,o)=>{const s=e&&Ne(t,o)||o;M(t[s])&&M(r)?t[s]=ne(t[s],r):M(r)?t[s]=ne({},r):L(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&P(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(P(t,(o,s)=>{n&&w(o)?e[s]=Te(o,n):e[s]=o},{allOwnKeys:r}),e),bt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),wt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Et=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},St=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},kt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},At=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ce(Uint8Array)),Rt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Ct=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ot=k("HTMLFormElement"),Tt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Bt=k("RegExp"),_e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};P(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},Lt=e=>{_e(e,(t,n)=>{if(w(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(w(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Nt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return L(e)?r(e):r(String(e).split(t)),n},xt=()=>{},Pt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",ge="0123456789",Fe={DIGIT:ge,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+ge},_t=(e=16,t=Fe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ft(e){return!!(e&&w(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Dt=e=>{const t=new Array(10),n=(r,o)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=L(r)?[]:{};return P(r,(i,l)=>{const d=n(i,o+1);!x(d)&&(s[l]=d)}),t[o]=void 0,s}}return r};return n(e,0)},Ut=k("AsyncFunction"),Mt=e=>e&&(J(e)||w(e))&&w(e.then)&&w(e.catch),a={isArray:L,isArrayBuffer:Be,isBuffer:st,isFormData:pt,isArrayBufferView:it,isString:at,isNumber:Le,isBoolean:ct,isObject:J,isPlainObject:M,isUndefined:x,isDate:lt,isFile:ut,isBlob:ft,isRegExp:Bt,isFunction:w,isStream:ht,isURLSearchParams:mt,isTypedArray:At,isFileList:dt,forEach:P,merge:ne,extend:gt,trim:yt,stripBOM:bt,inherits:wt,toFlatObject:Et,kindOf:H,kindOfTest:k,endsWith:St,toArray:kt,forEachEntry:Rt,matchAll:Ct,isHTMLForm:Ot,hasOwnProperty:ye,hasOwnProp:ye,reduceDescriptors:_e,freezeMethods:Lt,toObjectSet:Nt,toCamelCase:Tt,noop:xt,toFiniteNumber:Pt,findKey:Ne,global:xe,isContextDefined:Pe,ALPHABET:Fe,generateString:_t,isSpecCompliantForm:Ft,toJSONObject:Dt,isAsyncFn:Ut,isThenable:Mt};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const De=m.prototype,Ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ue[e]={value:e}});Object.defineProperties(m,Ue);Object.defineProperty(De,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(De);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const vt=null;function re(e){return a.isPlainObject(e)||a.isArray(e)}function Me(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function be(e,t,n){return e?e.concat(t).map(function(o,s){return o=Me(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function jt(e){return a.isArray(e)&&!e.some(re)}const $t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,A){return!a.isUndefined(A[p])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,p,A){let E=f;if(f&&!A&&typeof f=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&jt(f)||(a.isFileList(f)||a.endsWith(p,"[]"))&&(E=a.toArray(f)))return p=Me(p),E.forEach(function(U,tt){!(a.isUndefined(U)||U===null)&&t.append(i===!0?be([p],tt,s):i===null?p:p+"[]",c(U))}),!1}return re(f)?!0:(t.append(be(A,p,s),c(f)),!1)}const h=[],b=Object.assign($t,{defaultVisitor:u,convertValue:c,isVisitable:re});function y(f,p){if(!a.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(f),a.forEach(f,function(E,O){(!(a.isUndefined(E)||E===null)&&o.call(t,E,a.isString(O)?O.trim():O,p,b))===!0&&y(E,p?p.concat(O):[O])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function le(e,t){this._pairs=[],e&&V(e,this,t)}const ve=le.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function It(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function je(e,t,n){if(!t)return e;const r=n&&n.encode||It,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class qt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ee=qt,$e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ht=typeof URLSearchParams<"u"?URLSearchParams:le,zt=typeof FormData<"u"?FormData:null,Jt=typeof Blob<"u"?Blob:null,Vt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Wt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Ht,FormData:zt,Blob:Jt},isStandardBrowserEnv:Vt,isStandardBrowserWebWorkerEnv:Wt,protocols:["http","https","file","blob","url","data"]};function Kt(e,t){return V(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Gt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Xt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ie(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Xt(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Gt(r),o,n,0)}),n}return null}const Zt={"Content-Type":void 0};function Qt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const W={transitional:$e,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Ie(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Kt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return V(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Qt(t)):t}],transformResponse:[function(t){const n=this.transitional||W.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){W.headers[t]={}});a.forEach(["post","put","patch"],function(t){W.headers[t]=a.merge(Zt)});const ue=W,Yt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),en=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Yt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Se=Symbol("internals");function N(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function tn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const nn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function rn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function on(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,d,c){const u=N(d);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(o,u);(!h||o[h]===void 0||c===!0||c===void 0&&o[h]!==!1)&&(o[h||d]=v(l))}const i=(l,d)=>a.forEach(l,(c,u)=>s(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!nn(t)?i(en(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=N(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return tn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=N(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=N(i),i){const l=a.findKey(r,i);l&&(!n||Y(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||Y(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=v(o),delete n[s];return}const l=t?rn(s):String(s).trim();l!==s&&delete n[s],n[l]=v(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Se]=this[Se]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=N(i);r[l]||(on(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(K.prototype);a.freezeMethods(K);const R=K;function ee(e,t){const n=this||ue,r=t||n,o=R.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function qe(e){return!!(e&&e.__CANCEL__)}function _(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,m,{__CANCEL__:!0});function sn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const an=S.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ln(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function He(e,t){return e&&!cn(t)?ln(e,t):t}const un=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function fn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[s];i||(i=c),n[o]=d,r[o]=c;let h=s,b=0;for(;h!==o;)b+=n[h++],h=h%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function ke(e,t){let n=0;const r=dn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,d=r(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-s)/d:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const hn=typeof XMLHttpRequest<"u",pn=hn&&function(e){return new Promise(function(n,r){let o=e.data;const s=R.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const u=He(e.baseURL,e.url);c.open(e.method.toUpperCase(),je(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const y=R.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};sn(function(E){n(E),d()},function(E){r(E),d()},p),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||$e;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,p.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||un(u))&&e.xsrfCookieName&&an.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,p){c.setRequestHeader(p,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ke(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ke(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new _(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=fn(u);if(b&&S.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},j={http:vt,xhr:pn};a.forEach(j,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const mn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?j[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(j,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:j};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function Ae(e){return te(e),e.headers=R.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),mn.getAdapter(e.adapter||ue.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return qe(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const Re=e=>e instanceof R?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(c,u,h){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:h},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,h){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,h)}else return r(c,u,h)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,h){if(h in t)return r(c,u);if(h in e)return r(void 0,c)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>o(Re(c),Re(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=d[u]||o,b=h(e[u],t[u],u);a.isUndefined(b)&&h!==l||(n[u]=b)}),n}const ze="1.4.0",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ce={};fe.transitional=function(t,n,r){function o(s,i){return"[Axios v"+ze+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ce[i]&&(Ce[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function yn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],d=l===void 0||i(l,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const oe={assertOptions:yn,validators:fe},C=oe.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new Ee,response:new Ee}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&oe.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:oe.assertOptions(o,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=R.concat(i,s);const l=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(d=d&&p.synchronous,l.unshift(p.fulfilled,p.rejected))});const c=[];this.interceptors.response.forEach(function(p){c.push(p.fulfilled,p.rejected)});let u,h=0,b;if(!d){const f=[Ae.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),b=f.length,u=Promise.resolve(n);h<b;)u=u.then(f[h++],f[h++]);return u}b=l.length;let y=n;for(h=0;h<b;){const f=l[h++],p=l[h++];try{y=f(y)}catch(A){p.call(this,A);break}}try{u=Ae.call(this,y)}catch(f){return Promise.reject(f)}for(h=0,b=c.length;h<b;)u=u.then(c[h++],c[h++]);return u}getUri(t){t=B(this.defaults,t);const n=He(t.baseURL,t.url);return je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(B(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}I.prototype[t]=n(),I.prototype[t+"Form"]=n(!0)});const $=I;class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new _(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(o){t=o}),cancel:t}}}const gn=de;function bn(e){return function(n){return e.apply(null,n)}}function wn(e){return a.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});const En=se;function Je(e){const t=new $(e),n=Te($.prototype.request,t);return a.extend(n,$.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Je(B(e,o))},n}const g=Je(ue);g.Axios=$;g.CanceledError=_;g.CancelToken=gn;g.isCancel=qe;g.VERSION=ze;g.toFormData=V;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=bn;g.isAxiosError=wn;g.mergeConfig=B;g.AxiosHeaders=R;g.formToJSON=e=>Ie(a.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=En;g.default=g;const G=g,X="https://books-backend.p.goit.global/books/";async function Sn(){try{const e=await G.get(`${X}/category-list`);return Z(e)}catch(e){F(e)}}async function kn(){try{const e=await G.get(`${X}/top-books`);return Z(e)}catch(e){F(e)}}async function An(e){try{const t=await G.get(`${X}/category?category=${e}`);return Z(t)}catch(t){F(t)}}async function Rn(e){try{const t=await G.get(`${X}/${e}`);return Z(t)}catch(t){F(t)}}function Z(e){try{if(e.status!==200)throw e.data;return e.data}catch(t){F(t)}}function F(e){const{response:t}=e;throw t!=null&&t.data?{message:t.data}:t||e}function Cn(e={}){if(typeof e!="object")return;const{bookId:t="",bookImage:n="../../img/book_card_plug.png",bookAuthorName:r="Author was stolen",bookTitle:o="Opps, something is wrong :("}=e;return`<li class="book_card" data-bookId="${t}">
      <div class="book_container--img">
        <img src="${n}" alt="${o}, Author:${r}" class="book_card--img" />
        <p class="quick-view">quick view</p>
      </div>
      <h3 class="book_card--title">${o}</h3>
      <p class="book_card--author">${r}</p>
    </li>`}function he(e){e.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function On(e){e.querySelector(".loader").remove()}function Tn(e,t){const n=t||document.querySelector(".bookshelf");he(n);const r=Bn(e);n.innerHTML=r}function Bn(e){const n=e[0].list_name,r=We(n),o=Ke(e),s=Ve(o);return`${r} ${s}`}function Ve(e){return`<ul class="bookshelf_category--list">${e.map(n=>Cn(n)).join("")}</ul>`}function We(e){let t=e.split(" ");const n=t.slice(0,t.length-1).join(" "),r=t.slice(-1);return`<h1 class="bookshelf_category--title">${n} <span class="blue-last-word">${r}</span></h1>`}function Ke(e){return e.map(n=>{let r=n._id,o=n.author,s=n.book_image,i=n.title;return{bookId:r,bookImage:s,bookAuthorName:o,bookTitle:i}})}function Ge(e,t=""){if(!e){console.error("Can not find target element");return}e.classList.add("error"),e.innerHTML=`
    <div class="error_container">
      <div class="error_container--message">
          <p>Oops!</p>
          <p>${t||"Something went wrong."}</p>
          <p>Please, try reload the page.</p>
      </div>
    </div>
    `}async function Xe(e){const t=e||document.querySelector(".bookshelf");try{t.innerHTML="",he(t);const n=await Ln();t.innerHTML=n,Pn()}catch{Ge(t)}finally{On(t)}}async function Ln(){const e=We("Best Seller Books"),t=await xn();return`${e} ${t}`}async function Nn(){try{return await kn()}catch(e){return console.error("Error fetching top books:",e),[]}}async function xn(){return`<ul class="bestbooks_list">${(await Nn()).map(n=>{const o=n.books[0].list_name,s=Ke(n.books),i=Ve(s);return`
        <li class="bestbooks_category--container">
          <h2 class="bestbooks_category--name">${o}</h2>
          ${i}
          <button type="button" class="button-brand-ghost button" data-categoryname="${o}">
            See more
          </button>
        </li>
      `}).join("")}</ul>`}function Pn(){document.querySelectorAll(".button-brand-ghost").forEach(t=>t.addEventListener("click",_n))}async function _n(e){const n=e.target.dataset.categoryname,o=[...document.querySelector(".categories_list").children].find(s=>s.textContent===n);o?pe(o):renderAllBookCategories()}let ie=null;async function Fn(e){try{e.innerHTML="",he(e);const t=await Dn();e.innerHTML=t,ie=document.querySelector(".categories_list"),ie.addEventListener("click",vn)}catch{Ge(e,"Sorry, but we were not able to get a category list.")}}async function Dn(){const e=await Un();return`<ul class="categories_list list">
      <li id="all-categories" class="categories_list--item current">All categories</li>
      ${Mn(e)}
    </ul>`}async function Un(){const e=await Sn();return e.sort((t,n)=>t.list_name.localeCompare(n.list_name)),e}function Mn(e){return e.map(t=>`<li class="categories_list--item">${t.list_name}</li>`).join("")}async function vn(e){const{target:t}=e;if(t!==ie){if(t.textContent==="All categories"){ae();return}pe(t)}}async function jn(e){return await An(e)}function Ze(e){document.querySelector(".categories_list--item.current").classList.remove("current"),e.classList.add("current")}async function pe(e){const t=e.textContent,n=await jn(t);Ze(e),Tn(n)}function ae(){Xe();const e=document.getElementById("all-categories");Ze(e)}let q;function $n(){return`
	<label class="theme-switcher">
		<input type="checkbox" />
		<span class="slider round"></span>
	</label>`}function In(e,t="afterbegin"){const n=$n();e.insertAdjacentHTML(t,n),q=document.querySelector(".theme-switcher input"),q.addEventListener("change",Hn)}function qn(){const e=localStorage.getItem("theme");e==="theme-dark"&&(Ye(e),q.checked=!0)}function Qe(){document.documentElement.classList.remove("theme-dark"),localStorage.removeItem("theme")}function Ye(e){if(!e){Qe();return}localStorage.setItem("theme",e),document.documentElement.classList.add(e)}function Hn(){document.documentElement.classList.toggle("theme-dark"),q.checked?Ye("theme-dark"):Qe()}const Oe="All categories";function zn(){const e=document.querySelector(".user-block");Jn(),In(e),qn()}function Jn(){Vn()}function Vn(){document.querySelector("[data-home]").addEventListener("click",Wn)}function Wn(){const e=localStorage.getItem("currentCategory")||Oe;if(e===Oe){ae();return}const n=[...document.querySelector(".categories_list").children].find(r=>r.textContent===e);n?pe(n):ae()}const Kn=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./charity/save-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./charity/hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./charity/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./charity/med-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./charity/med-sans.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./charity/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./charity/action-against.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./charity/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./charity/prytula.png"}],Gn=document.querySelector(".charity");Gn.innerHTML=`<div class="charity-header"><h2 class="charity-title">Support Ukraine</h2>
    <svg class="charity-logo"><use href="./svg/charity.svg#ua"></use></svg>
    </div>
    <ul class="charity-list"></ul>
    <button class="btn-scroll" type="button">
    <svg class="arrow-down" >
      <use href="./svg/charity.svg#downarrow"></use>
    </svg>
    </button>`;const T=document.querySelector(".charity-list"),D=document.querySelector(".btn-scroll"),me=document.querySelector(".arrow-down");function Xn(){return Kn.map((e,t)=>`<li class="charity-item">
    <p class="counter">${Zn(t+1)}</p>
    <a href=${e.url} target="_blank"><img src=${e.img} alt="${e.title}" class="foundation-logo"/></a></li>`)}function Zn(e){return e.toString().padStart(2,"0")}function Qn(){T.innerHTML=Xn().join("")}const et={threshold:1},Yn=new IntersectionObserver(function(e){e.forEach(function(t){t.isIntersecting&&nr()})},et),er=new IntersectionObserver(function(e){e.forEach(function(t){t.isIntersecting&&rr()})},et);D.addEventListener("click",tr);function tr(){Yn.observe(T.lastElementChild),er.observe(T.firstElementChild),T.lastElementChild.isIntersecting||T.scrollBy({top:100,behavior:"smooth"}),me.classList.contains("arrow-up")&&T.scrollBy({top:-100,behavior:"smooth"})}function nr(){me.classList.add("arrow-up")}function rr(){me.classList.remove("arrow-up")}D.addEventListener("touchstart",or);function or(){D.classList.add("focus")}D.addEventListener("touchend",sr);function sr(){D.classList.remove("focus")}async function ir(e){try{const t=await cr(e),n=await ar(e,t);document.body.insertAdjacentHTML("beforeend",n),document.querySelector(".action-button").addEventListener("click",lr.bind(null,e,t)),document.querySelector(".modal-close-button").addEventListener("click",ur)}catch(t){console.log("Помилка при отриманні даних:",t)}}async function ar(e,t){try{const n=await Rn(e),r=n.buy_links.map(s=>`<li><a href="${s.url}">${s.label}</a></li>`).join("");return`
      <div class="modal-book-background">
        <div class="modal-book">
            <button class="modal-close-button">
              <svg class="modal-close-icon">
                <use xlink:href="#modal-close-button"></use>
              </svg>
            </button>
            <div class="modal-content">
            <div class="book-info">
              <div class="book-image" >
                <img src="${n.book_image}" alt="Book Cover">
              </div>
              <div class="modal-text">
                <h2 class="modal-title">${n.title}</h2>
                <p class="modal-author">Автор: ${n.author}</p>
                <p class="modal-decsription">${n.description}</p>
                <ul class="modal-svg">
                  <!-- ${r} -->
                </ul>
              </div>
            </div>
            <div class="modal-button-container">
              <button class="modal-action-button">${t?"Видалити з Shopping List":"Додати до Shopping List"}</button>
            </div>
          </div>
        </div>
      </div>
    `}catch(n){console.log("Помилка при отриманні даних:",n)}}async function cr(e){return!1}async function lr(e,t){const n=document.querySelector(".action-button");t?(await nt(e),n.textContent="Додати до Shopping List"):(await rt(e),n.textContent="Видалити з Shopping List")}function ur(){const e=document.querySelector(".modal");e.style.display="none"}const fr=document.querySelector(".categories"),dr=document.querySelector(".bookshelf");zn();Fn(fr);Xe(dr);Qn();ir("643282b1e85766588626a0b4");
