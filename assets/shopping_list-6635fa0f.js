import"./main-9b7358ab.js";import{f as it,c as rt}from"./booksApi-f996d83f.js";var F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function st(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var G={},at={get exports(){return G},set exports(p){G=p}};(function(p,C){(function(v,e){p.exports=e()})(window,function(){return function(u){var v={};function e(i){if(v[i])return v[i].exports;var n=v[i]={i,l:!1,exports:{}};return u[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=u,e.c=v,e.d=function(i,n,f){e.o(i,n)||Object.defineProperty(i,n,{enumerable:!0,get:f})},e.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},e.t=function(i,n){if(n&1&&(i=e(i)),n&8||n&4&&typeof i=="object"&&i&&i.__esModule)return i;var f=Object.create(null);if(e.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:i}),n&2&&typeof i!="string")for(var d in i)e.d(f,d,function(a){return i[a]}.bind(null,d));return f},e.n=function(i){var n=i&&i.__esModule?function(){return i.default}:function(){return i};return e.d(n,"a",n),n},e.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)},e.p="dist",e(e.s=10)}([function(u,v,e){function i(n,f){var d=Object.prototype.hasOwnProperty,a,l,h,E;for(h=1,E=arguments.length;h<E;h+=1){a=arguments[h];for(l in a)d.call(a,l)&&(n[l]=a[l])}return n}u.exports=i},function(u,v,e){function i(n){return n===void 0}u.exports=i},function(u,v,e){function i(n){return n instanceof Array}u.exports=i},function(u,v,e){var i=e(2),n=e(17),f=e(6);function d(a,l,h){i(a)?n(a,l,h):f(a,l,h)}u.exports=d},function(u,v,e){function i(n){return typeof n=="string"||n instanceof String}u.exports=i},function(u,v,e){function i(n){return n instanceof Function}u.exports=i},function(u,v,e){function i(n,f,d){var a;d=d||null;for(a in n)if(n.hasOwnProperty(a)&&f.call(d,n[a],a,n)===!1)break}u.exports=i},function(u,v,e){var i=e(18),n=e(0);function f(d,a){var l;return a||(a=d,d=null),l=a.init||function(){},d&&i(l,d),a.hasOwnProperty("static")&&(n(l,a.static),delete a.static),n(l.prototype,a),l}u.exports=f},function(u,v,e){var i=e(2);function n(f,d,a){var l,h;if(a=a||0,!i(d))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(d,f,a);for(h=d.length,l=a;a>=0&&l<h;l+=1)if(d[l]===f)return l;return-1}u.exports=n},function(u,v,e){var i=e(29),n=e(30),f=e(5),d={capitalizeFirstLetter:function(a){return a.substring(0,1).toUpperCase()+a.substring(1,a.length)},isContained:function(a,l){return l?a===l?!0:l.contains(a):!1},createElementByTemplate:function(a,l){var h=document.createElement("div"),E=f(a)?a(l):i(a,l);return h.innerHTML=E,h.firstChild},bind:function(a,l){var h=Array.prototype.slice,E;return a.bind?a.bind.apply(a,h.call(arguments,1)):(E=h.call(arguments,2),function(){return a.apply(l,E.length?E.concat(h.call(arguments)):arguments)})},sendHostName:function(){n("pagination","UA-129987462-1")}};u.exports=d},function(u,v,e){e(11),u.exports=e(12)},function(u,v,e){},function(u,v,e){var i=e(13),n=e(7),f=e(0),d=e(1),a=e(20),l=e(9),h={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},E=n({init:function(s,t){this._options=f({},h,t),this._currentPage=0,this._view=new a(s,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(s){this._currentPage=s||this._options.page},_getLastPage:function(){var s=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return s||1},_getPageIndex:function(s){var t,r;return this._options.centerAlign?(t=Math.floor(this._options.visiblePages/2),r=s-t,r=Math.max(r,1),r=Math.min(r,this._getLastPage()-this._options.visiblePages+1),r):Math.ceil(s/this._options.visiblePages)},_getRelativePage:function(s){var t=s==="prev",r=this.getCurrentPage();return t?r-1:r+1},_getMorePageIndex:function(s){var t=this._getPageIndex(this.getCurrentPage()),r=this._options.visiblePages,o=s==="prev",g;return this._options.centerAlign?g=o?t-1:t+r:g=o?(t-1)*r:t*r+1,g},_convertToValidPage:function(s){var t=this._getLastPage();return s=Math.max(s,1),s=Math.min(s,t),s},_paginate:function(s){var t=this._makeViewData(s||this._options.page);this._setCurrentPage(s),this._view.update(t)},_makeViewData:function(s){var t={},r=this._getLastPage(),o=this._getPageIndex(s),g=this._getPageIndex(r),_=this._getEdge(s);return t.leftPageNumber=_.left,t.rightPageNumber=_.right,t.prevMore=o>1,t.nextMore=o<g,t.page=s,t.currentPageIndex=s,t.lastPage=r,t.lastPageListIndex=r,t},_getEdge:function(s){var t,r,o,g=this._getLastPage(),_=this._options.visiblePages,L=this._getPageIndex(s);return this._options.centerAlign?(o=Math.floor(_/2),t=Math.max(s-o,1),r=t+_-1,r>g&&(t=Math.max(g-_+1,1),r=g)):(t=(L-1)*_+1,r=L*_,r=Math.min(r,g)),{left:t,right:r}},_onClickHandler:function(s,t){switch(s){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(s){d(s)&&(s=this._options.totalItems),this._options.totalItems=s,this._paginate(1)},movePageTo:function(s){s=this._convertToValidPage(s),this.invoke("beforeMove",{page:s})&&(this._paginate(s),this.fire("afterMove",{page:s}))},setTotalItems:function(s){this._options.totalItems=s},setItemsPerPage:function(s){this._options.itemsPerPage=s},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(E),u.exports=E},function(u,v,e){var i=e(0),n=e(14),f=e(4),d=e(16),a=e(2),l=e(5),h=e(3),E=/\s+/g;function s(){this.events=null,this.contexts=null}s.mixin=function(t){i(t.prototype,s.prototype)},s.prototype._getHandlerItem=function(t,r){var o={handler:t};return r&&(o.context=r),o},s.prototype._safeEvent=function(t){var r=this.events,o;return r||(r=this.events={}),t&&(o=r[t],o||(o=[],r[t]=o),r=o),r},s.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},s.prototype._indexOfContext=function(t){for(var r=this._safeContext(),o=0;r[o];){if(t===r[o][0])return o;o+=1}return-1},s.prototype._memorizeContext=function(t){var r,o;n(t)&&(r=this._safeContext(),o=this._indexOfContext(t),o>-1?r[o][1]+=1:r.push([t,1]))},s.prototype._forgetContext=function(t){var r,o;n(t)&&(r=this._safeContext(),o=this._indexOfContext(t),o>-1&&(r[o][1]-=1,r[o][1]<=0&&r.splice(o,1)))},s.prototype._bindEvent=function(t,r,o){var g=this._safeEvent(t);this._memorizeContext(o),g.push(this._getHandlerItem(r,o))},s.prototype.on=function(t,r,o){var g=this;f(t)?(t=t.split(E),h(t,function(_){g._bindEvent(_,r,o)})):d(t)&&(o=r,h(t,function(_,L){g.on(L,_,o)}))},s.prototype.once=function(t,r,o){var g=this;if(d(t)){o=r,h(t,function(L,c){g.once(c,L,o)});return}function _(){r.apply(o,arguments),g.off(t,_,o)}this.on(t,_,o)},s.prototype._spliceMatches=function(t,r){var o=0,g;if(a(t))for(g=t.length;o<g;o+=1)r(t[o])===!0&&(t.splice(o,1),g-=1,o-=1)},s.prototype._matchHandler=function(t){var r=this;return function(o){var g=t===o.handler;return g&&r._forgetContext(o.context),g}},s.prototype._matchContext=function(t){var r=this;return function(o){var g=t===o.context;return g&&r._forgetContext(o.context),g}},s.prototype._matchHandlerAndContext=function(t,r){var o=this;return function(g){var _=t===g.handler,L=r===g.context,c=_&&L;return c&&o._forgetContext(g.context),c}},s.prototype._offByEventName=function(t,r){var o=this,g=l(r),_=o._matchHandler(r);t=t.split(E),h(t,function(L){var c=o._safeEvent(L);g?o._spliceMatches(c,_):(h(c,function(m){o._forgetContext(m.context)}),o.events[L]=[])})},s.prototype._offByHandler=function(t){var r=this,o=this._matchHandler(t);h(this._safeEvent(),function(g){r._spliceMatches(g,o)})},s.prototype._offByObject=function(t,r){var o=this,g;this._indexOfContext(t)<0?h(t,function(_,L){o.off(L,_)}):f(r)?(g=this._matchContext(t),o._spliceMatches(this._safeEvent(r),g)):l(r)?(g=this._matchHandlerAndContext(r,t),h(this._safeEvent(),function(_){o._spliceMatches(_,g)})):(g=this._matchContext(t),h(this._safeEvent(),function(_){o._spliceMatches(_,g)}))},s.prototype.off=function(t,r){f(t)?this._offByEventName(t,r):arguments.length?l(t)?this._offByHandler(t):d(t)&&this._offByObject(t,r):(this.events={},this.contexts=[])},s.prototype.fire=function(t){this.invoke.apply(this,arguments)},s.prototype.invoke=function(t){var r,o,g,_;if(!this.hasListener(t))return!0;for(r=this._safeEvent(t),o=Array.prototype.slice.call(arguments,1),g=0;r[g];){if(_=r[g],_.handler.apply(_.context,o)===!1)return!1;g+=1}return!0},s.prototype.hasListener=function(t){return this.getListenerLength(t)>0},s.prototype.getListenerLength=function(t){var r=this._safeEvent(t);return r.length},u.exports=s},function(u,v,e){var i=e(1),n=e(15);function f(d){return!i(d)&&!n(d)}u.exports=f},function(u,v,e){function i(n){return n===null}u.exports=i},function(u,v,e){function i(n){return n===Object(n)}u.exports=i},function(u,v,e){function i(n,f,d){var a=0,l=n.length;for(d=d||null;a<l&&f.call(d,n[a],a,n)!==!1;a+=1);}u.exports=i},function(u,v,e){var i=e(19);function n(f,d){var a=i(d.prototype);a.constructor=f,f.prototype=a}u.exports=n},function(u,v,e){function i(n){function f(){}return f.prototype=n,new f}u.exports=i},function(u,v,e){var i=e(3),n=e(7),f=e(21),d=e(22),a=e(24),l=e(25),h=e(0),E=e(4),s=e(28),t=e(9),r={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},o=["first","prev","next","last"],g=["prev","next"],_="The container element is invalid.",L=n({init:function(c,m,P){this._containerElement=null,this._firstItemClassName=m.firstItemClassName,this._lastItemClassName=m.lastItemClassName,this._template=h({},r,m.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(c),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(P)},_setRootElement:function(c){if(E(c)?c=document.getElementById(c)||document.querySelector(c):c.jquery&&(c=c[0]),!s(c))throw new Error(_);this._containerElement=c},_setMoveButtons:function(){i(o,function(c){this._buttons[c]=t.createElementByTemplate(this._template.moveButton,{type:c})},this)},_setDisabledMoveButtons:function(){i(o,function(c){var m="disabled"+t.capitalizeFirstLetter(c);this._buttons[m]=t.createElementByTemplate(this._template.disabledMoveButton,{type:c})},this)},_setMoreButtons:function(){i(g,function(c){var m=c+"More";this._buttons[m]=t.createElementByTemplate(this._template.moreButton,{type:c})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(c){var m;c.page>1?m=this._buttons.first:m=this._buttons.disabledFirst,this._getContainerElement().appendChild(m)},_appendPrevButton:function(c){var m;c.currentPageIndex>1?m=this._buttons.prev:m=this._buttons.disabledPrev,this._getContainerElement().appendChild(m)},_appendNextButton:function(c){var m;c.currentPageIndex<c.lastPageListIndex?m=this._buttons.next:m=this._buttons.disabledNext,this._getContainerElement().appendChild(m)},_appendLastButton:function(c){var m;c.page<c.lastPage?m=this._buttons.last:m=this._buttons.disabledLast,this._getContainerElement().appendChild(m)},_appendPrevMoreButton:function(c){var m;c.prevMore&&(m=this._buttons.prevMore,l(m,this._firstItemClassName),this._getContainerElement().appendChild(m))},_appendNextMoreButton:function(c){var m;c.nextMore&&(m=this._buttons.nextMore,l(m,this._lastItemClassName),this._getContainerElement().appendChild(m))},_appendPages:function(c){var m=c.leftPageNumber,P=c.rightPageNumber,T,O;for(O=m;O<=P;O+=1)O===c.page?T=t.createElementByTemplate(this._template.currentPage,{page:O}):(T=t.createElementByTemplate(this._template.page,{page:O}),this._enabledPageElements.push(T)),O===m&&!c.prevMore&&l(T,this._firstItemClassName),O===P&&!c.nextMore&&l(T,this._lastItemClassName),this._getContainerElement().appendChild(T)},_attachClickEvent:function(c){var m=this._getContainerElement();d(m,"click",function(P){var T=f(P),O,A;a(P),A=this._getButtonType(T),A||(O=this._getPageNumber(T)),c(A,O)},this)},_getButtonType:function(c){var m,P=this._buttons;return i(P,function(T,O){return t.isContained(c,T)?(m=O,!1):!0},this),m},_getPageNumber:function(c){var m=this._findPageElement(c),P;return m&&(P=parseInt(m.innerText,10)),P},_findPageElement:function(c){for(var m=0,P=this._enabledPageElements.length,T;m<P;m+=1)if(T=this._enabledPageElements[m],t.isContained(c,T))return T;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(c,m){this._buttons[m]=c.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(c){this._empty(),this._appendFirstButton(c),this._appendPrevButton(c),this._appendPrevMoreButton(c),this._appendPages(c),this._appendNextMoreButton(c),this._appendNextButton(c),this._appendLastButton(c)}});u.exports=L},function(u,v,e){function i(n){return n.target||n.srcElement}u.exports=i},function(u,v,e){var i=e(4),n=e(3),f=e(23);function d(h,E,s,t){if(i(E)){n(E.split(/\s+/g),function(r){a(h,r,s,t)});return}n(E,function(r,o){a(h,o,r,s)})}function a(h,E,s,t){function r(o){s.call(t||h,o||window.event)}"addEventListener"in h?h.addEventListener(E,r):"attachEvent"in h&&h.attachEvent("on"+E,r),l(h,E,s,r)}function l(h,E,s,t){var r=f(h,E),o=!1;n(r,function(g){return g.handler===s?(o=!0,!1):!0}),o||r.push({handler:s,wrappedHandler:t})}u.exports=d},function(u,v,e){var i="_feEventKey";function n(f,d){var a=f[i],l;return a||(a=f[i]={}),l=a[d],l||(l=a[d]=[]),l}u.exports=n},function(u,v,e){function i(n){if(n.preventDefault){n.preventDefault();return}n.returnValue=!1}u.exports=i},function(u,v,e){var i=e(3),n=e(8),f=e(26),d=e(27);function a(l){var h=Array.prototype.slice.call(arguments,1),E=l.classList,s=[],t;if(E){i(h,function(r){l.classList.add(r)});return}t=f(l),t&&(h=[].concat(t.split(/\s+/),h)),i(h,function(r){n(r,s)<0&&s.push(r)}),d(l,s)}u.exports=a},function(u,v,e){var i=e(1);function n(f){return!f||!f.className?"":i(f.className.baseVal)?f.className:f.className.baseVal}u.exports=n},function(u,v,e){var i=e(2),n=e(1);function f(d,a){if(a=i(a)?a.join(" "):a,a=a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),n(d.className.baseVal)){d.className=a;return}d.className.baseVal=a}u.exports=f},function(u,v,e){function i(n){return typeof HTMLElement=="object"?n&&(n instanceof HTMLElement||!!n.nodeType):!!(n&&n.nodeType)}u.exports=i},function(u,v,e){var i=e(8),n=e(3),f=e(2),d=e(4),a=e(0),l=/{{\s?|\s?}}/g,h=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,E=/\[\s?|\s?\]/,s=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,t=/\./,r=/^["']\w+["']$/,o=/"|'/g,g=/^-?\d+\.?\d*$/,_=2,L={if:O,each:A,with:Y},c="a".split(/a/).length===3,m=function(){return c?function(x,y){return x.split(y)}:function(x,y){var b=[],I=0,M,B;for(y.global||(y=new RegExp(y,"g")),M=y.exec(x);M!==null;)B=M.index,b.push(x.slice(I,B)),I=B+M[0].length,M=y.exec(x);return b.push(x.slice(I)),b}}();function P(x,y){var b,I=y[x];return x==="true"?I=!0:x==="false"?I=!1:r.test(x)?I=x.replace(o,""):h.test(x)?(b=x.split(E),I=P(b[0],y)[P(b[1],y)]):s.test(x)?(b=x.split(t),I=P(b[0],y)[b[1]]):g.test(x)&&(I=parseFloat(x)),I}function T(x,y){var b=[x],I=[],M=0,B=0;return n(y,function(S,N){S.indexOf("if")===0?M+=1:S==="/if"?M-=1:!M&&(S.indexOf("elseif")===0||S==="else")&&(b.push(S==="else"?["true"]:S.split(" ").slice(1)),I.push(y.slice(B,N)),B=N+1)}),I.push(y.slice(B)),{exps:b,sourcesInsideIf:I}}function O(x,y,b){var I=T(x,y),M=!1,B="";return n(I.exps,function(S,N){return M=k(S,b),M&&(B=j(I.sourcesInsideIf[N],b)),!M}),B}function A(x,y,b){var I=k(x,b),M=f(I)?"@index":"@key",B={},S="";return n(I,function(N,H){B[M]=H,B["@this"]=N,a(b,B),S+=j(y.slice(),b)}),S}function Y(x,y,b){var I=i("as",x),M=x[I+1],B=k(x.slice(0,I),b),S={};return S[M]=B,j(y,a(b,S))||""}function q(x,y,b){var I=x.splice(y+1,b-y);return I.pop(),I}function tt(x,y,b){for(var I=L[x],M=1,B=0,S,N=B+_,H=y[N];M&&d(H);)H.indexOf(x)===0?M+=1:H.indexOf("/"+x)===0&&(M-=1,S=N),N+=_,H=y[N];if(M)throw Error(x+" needs {{/"+x+"}} expression.");return y[B]=I(y[B].split(" ").slice(1),q(y,B,S),b),y}function k(x,y){var b=P(x[0],y);return b instanceof Function?et(b,x.slice(1),y):b}function et(x,y,b){var I=[];return n(y,function(M){I.push(P(M,b))}),x.apply(null,I)}function j(x,y){for(var b=1,I=x[b],M,B,S;d(I);)M=I.split(" "),B=M[0],L[B]?(S=tt(B,x.splice(b,x.length-b),y),x=x.concat(S)):x[b]=k(M,y),b+=_,I=x[b];return x.join("")}function nt(x,y){return j(m(x,l),y)}u.exports=nt},function(u,v,e){var i=e(1),n=e(31),f=7*24*60*60*1e3;function d(l){var h=new Date().getTime();return h-l>f}function a(l,h){var E="https://www.google-analytics.com/collect",s=location.hostname,t="event",r="use",o="TOAST UI "+l+" for "+s+": Statistics",g=window.localStorage.getItem(o);!i(window.tui)&&window.tui.usageStatistics===!1||g&&!d(g)||(window.localStorage.setItem(o,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&n(E,{v:1,t,tid:h,cid:s,dp:s,dh:l,el:l,ec:r})},1e3))}u.exports=a},function(u,v,e){var i=e(6);function n(f,d){var a=document.createElement("img"),l="";return i(d,function(h,E){l+="&"+E+"="+h}),l=l.substring(1),a.src=f+"?"+l,a.style.display="none",document.body.appendChild(a),document.body.removeChild(a),a}u.exports=n}])})})(at);const ot=st(G);var ut="Expected a function",D=0/0,ft="[object Symbol]",lt=/^\s+|\s+$/g,ct=/^[-+]0x[0-9a-f]+$/i,pt=/^0b[01]+$/i,dt=/^0o[0-7]+$/i,ht=parseInt,gt=typeof F=="object"&&F&&F.Object===Object&&F,vt=typeof self=="object"&&self&&self.Object===Object&&self,mt=gt||vt||Function("return this")(),xt=Object.prototype,yt=xt.toString,Pt=Math.max,bt=Math.min,U=function(){return mt.Date.now()};function Et(p,C,u){var v,e,i,n,f,d,a=0,l=!1,h=!1,E=!0;if(typeof p!="function")throw new TypeError(ut);C=W(C)||0,$(u)&&(l=!!u.leading,h="maxWait"in u,i=h?Pt(W(u.maxWait)||0,C):i,E="trailing"in u?!!u.trailing:E);function s(P){var T=v,O=e;return v=e=void 0,a=P,n=p.apply(O,T),n}function t(P){return a=P,f=setTimeout(g,C),l?s(P):n}function r(P){var T=P-d,O=P-a,A=C-T;return h?bt(A,i-O):A}function o(P){var T=P-d,O=P-a;return d===void 0||T>=C||T<0||h&&O>=i}function g(){var P=U();if(o(P))return _(P);f=setTimeout(g,r(P))}function _(P){return f=void 0,E&&v?s(P):(v=e=void 0,n)}function L(){f!==void 0&&clearTimeout(f),a=0,v=d=e=f=void 0}function c(){return f===void 0?n:_(U())}function m(){var P=U(),T=o(P);if(v=arguments,e=this,d=P,T){if(f===void 0)return t(d);if(h)return f=setTimeout(g,C),s(d)}return f===void 0&&(f=setTimeout(g,C)),n}return m.cancel=L,m.flush=c,m}function $(p){var C=typeof p;return!!p&&(C=="object"||C=="function")}function _t(p){return!!p&&typeof p=="object"}function It(p){return typeof p=="symbol"||_t(p)&&yt.call(p)==ft}function W(p){if(typeof p=="number")return p;if(It(p))return D;if($(p)){var C=typeof p.valueOf=="function"?p.valueOf():p;p=$(C)?C+"":C}if(typeof p!="string")return p===0?p:+p;p=p.replace(lt,"");var u=pt.test(p);return u||dt.test(p)?ht(p.slice(2),u?2:8):ct.test(p)?D:+p}var Ct=Et;let w=[];localStorage.getItem("list")&&(w=JSON.parse(localStorage.getItem("list")));function Mt(p){const{_id:C,list_name:u,author:v,description:e,title:i,book_image:n,buy_links:f}=p;w.some(d=>d._id===C)||(w.push({_id:C,list_name:u,author:v,description:e,title:i,book_image:n,buy_links:f}),localStorage.setItem("list",JSON.stringify(w)))}function Tt(){try{const p=localStorage.getItem("list");return p?JSON.parse(p):[]}catch(p){console.log(p)}}let V=[],R=3,X=3,Bt=window.matchMedia("(max-width: 767px)");const Ot=document.getElementById("pagination"),z=document.getElementById("booksContainer");async function Lt(){try{const C=(await it()).map(v=>rt(v.books[0]._id));if((await Promise.all(C)).forEach(v=>{Mt(v)}),V=await Tt(),V.length===0||Array.isArray(V)===!1){J();return}K()}catch{J()}}function Z(){const p=St(V),C=Nt(p);At(C,p),Ht(p[0])}function J(){const p=`<div class="shopping_list-placeholder-container">
    <p class="shopping_list-placeholder-text">This page is empty, add some books and proceed to order.</p>
    <div class="shopping_list-placeholder-thumb">
    </div>
    </div>`;z.innerHTML=p}function K(){Bt.matches?(R=4,X=2,Z()):(R=3,X=3,Z())}function St(p){const C=[],u=Math.ceil(p.length/R);for(let v=0;v<u;v++){const e=v*R,i=p.slice(e,e+R);C.push(i)}return C}function Nt(p){return{totalItems:p.length,itemsPerPage:1,visiblePages:X,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{ type }}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{ type }}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}}function At(p,C){new ot(Ot,p).on("afterMove",function(v){const e=v.page-1,i=C[e];z.innerHTML="",Q(i)})}function Ht(p){z.innerHTML="",Q(p)}function Q(p){const C=p.map(({list_name:u,book_image:v})=>`
      <li class="shoppinglist-item">
        <img src="${v}" alt="${u}" style="width: 116px"
"height: 165px" class="shoppinglist-img">
        <p class="shoppinglist-name">${u}</p>
        <p class="shoppinglist-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut .</p>
      </li>`).join("");z.insertAdjacentHTML("beforeend",C)}window.addEventListener("resize",Ct(K,200));Lt();
