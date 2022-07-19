const hr=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};hr();function M(){}function Kt(i,e){for(const t in e)i[t]=e[t];return i}function ss(i){return i()}function pn(){return Object.create(null)}function Pe(i){i.forEach(ss)}function rs(i){return typeof i=="function"}function Z(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let Ft;function Xt(i,e){return Ft||(Ft=document.createElement("a")),Ft.href=e,i===Ft.href}function fr(i){return Object.keys(i).length===0}function Fi(i,...e){if(i==null)return M;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function et(i){let e;return Fi(i,t=>e=t)(),e}function W(i,e,t){i.$$.on_destroy.push(Fi(e,t))}function os(i,e,t,n){if(i){const s=as(i,e,t,n);return i[0](s)}}function as(i,e,t,n){return i[1]&&n?Kt(t.ctx.slice(),i[1](n(e))):t.ctx}function ls(i,e,t,n){if(i[2]&&n){const s=i[2](n(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function cs(i,e,t,n,s,r){if(s){const o=as(e,t,n,r);i.p(o,s)}}function us(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function gn(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function mn(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function bn(i){return i==null?"":i}function v(i,e){i.appendChild(e)}function w(i,e,t){i.insertBefore(e,t||null)}function y(i){i.parentNode.removeChild(i)}function Pt(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function b(i){return document.createElement(i)}function K(i){return document.createTextNode(i)}function A(){return K(" ")}function We(){return K("")}function ae(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function $(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function S(i,e,t){e in i?i[e]=typeof i[e]=="boolean"&&t===""?!0:t:$(i,e,t)}function pr(i){return Array.from(i.childNodes)}function Ce(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function oe(i,e,t,n){t===null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function gr(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(i,t,n,e),s}let kt;function wt(i){kt=i}function lt(){if(!kt)throw new Error("Function called outside component initialization");return kt}function ri(i){lt().$$.on_mount.push(i)}function mr(i){lt().$$.after_update.push(i)}function ds(i){lt().$$.on_destroy.push(i)}function Fe(){const i=lt();return(e,t,{cancelable:n=!1}={})=>{const s=i.$$.callbacks[e];if(s){const r=gr(e,t,{cancelable:n});return s.slice().forEach(o=>{o.call(i,r)}),!r.defaultPrevented}return!0}}function $t(i,e){return lt().$$.context.set(i,e),e}function Te(i){return lt().$$.context.get(i)}const vt=[],Ie=[],qt=[],vn=[],hs=Promise.resolve();let Li=!1;function fs(){Li||(Li=!0,hs.then(ps))}function br(){return fs(),hs}function zi(i){qt.push(i)}const Ri=new Set;let Vt=0;function ps(){const i=kt;do{for(;Vt<vt.length;){const e=vt[Vt];Vt++,wt(e),vr(e.$$)}for(wt(null),vt.length=0,Vt=0;Ie.length;)Ie.pop()();for(let e=0;e<qt.length;e+=1){const t=qt[e];Ri.has(t)||(Ri.add(t),t())}qt.length=0}while(vt.length);for(;vn.length;)vn.pop()();Li=!1,Ri.clear(),wt(i)}function vr(i){if(i.fragment!==null){i.update(),Pe(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(zi)}}const Yt=new Set;let ze;function be(){ze={r:0,c:[],p:ze}}function ve(){ze.r||Pe(ze.c),ze=ze.p}function k(i,e){i&&i.i&&(Yt.delete(i),i.i(e))}function R(i,e,t,n){if(i&&i.o){if(Yt.has(i))return;Yt.add(i),ze.c.push(()=>{Yt.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function _r(i,e){const t={},n={},s={$$scope:1};let r=i.length;for(;r--;){const o=i[r],a=e[r];if(a){for(const l in o)l in a||(n[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);i[r]=a}else for(const l in o)s[l]=1}for(const o in n)o in t||(t[o]=void 0);return t}function _n(i){return typeof i=="object"&&i!==null?i:{}}function P(i){i&&i.c()}function E(i,e,t,n){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=i.$$;s&&s.m(e,t),n||zi(()=>{const l=r.map(ss).filter(rs);o?o.push(...l):Pe(l),i.$$.on_mount=[]}),a.forEach(zi)}function j(i,e){const t=i.$$;t.fragment!==null&&(Pe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function yr(i,e){i.$$.dirty[0]===-1&&(vt.push(i),fs(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function ee(i,e,t,n,s,r,o,a=[-1]){const l=kt;wt(i);const c=i.$$={fragment:null,ctx:null,props:r,update:M,not_equal:s,bound:pn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:pn(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(d,h,...f)=>{const g=f.length?f[0]:h;return c.ctx&&s(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),u&&yr(i,d)),h}):[],c.update(),u=!0,Pe(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const d=pr(e.target);c.fragment&&c.fragment.l(d),d.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&k(i.$$.fragment),E(i,e.target,e.anchor,e.customElement),ps()}wt(l)}class te{$destroy(){j(this,1),this.$destroy=M}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!fr(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function wr(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qi=Symbol(),yn=new Map;class gs{constructor(e,t){if(this._$cssResult$=!0,t!==qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=yn.get(this.cssText);return Vi&&e===void 0&&(yn.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const $r=i=>new gs(typeof i=="string"?i:i+"",qi),B=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,s,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new gs(t,qi)},kr=(i,e)=>{Vi?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)})},wn=Vi?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return $r(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xi;const $n=window.reactiveElementPolyfillSupport,Ii={toAttribute(i,e){switch(e){case Boolean:i=i?"":null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ms=(i,e)=>e!==i&&(e==e||i==i),Si={attribute:!0,type:String,converter:Ii,reflect:!1,hasChanged:ms};class Ze extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const s=this._$Eh(n,t);s!==void 0&&(this._$Eu.set(s,n),e.push(s))}),e}static createProperty(e,t=Si){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Si}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of n)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(wn(s))}else e!==void 0&&t.push(wn(e));return t}static _$Eh(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Ep(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$Em)!==null&&t!==void 0?t:this._$Em=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$Em)===null||t===void 0||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return kr(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Em)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Em)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$Eg(e,t,n=Si){var s,r;const o=this.constructor._$Eh(e,n);if(o!==void 0&&n.reflect===!0){const a=((r=(s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:Ii.toAttribute)(t,n.type);this._$Ei=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(e,t){var n,s,r;const o=this.constructor,a=o._$Eu.get(e);if(a!==void 0&&this._$Ei!==a){const l=o.getPropertyOptions(a),c=l.converter,u=(r=(s=(n=c)===null||n===void 0?void 0:n.fromAttribute)!==null&&s!==void 0?s:typeof c=="function"?c:null)!==null&&r!==void 0?r:Ii.fromAttribute;this._$Ei=a,this[a]=u(t,l.type),this._$Ei=null}}requestUpdate(e,t,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ms)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Ei!==e&&(this._$ES===void 0&&(this._$ES=new Map),this._$ES.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,r)=>this[r]=s),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$Em)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(n)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$Em)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){this._$ES!==void 0&&(this._$ES.forEach((t,n)=>this._$Eg(n,this[n],t)),this._$ES=void 0),this._$EU()}updated(e){}firstUpdated(e){}}Ze.finalized=!0,Ze.elementProperties=new Map,Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},$n==null||$n({ReactiveElement:Ze}),((xi=globalThis.reactiveElementVersions)!==null&&xi!==void 0?xi:globalThis.reactiveElementVersions=[]).push("1.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ci;const Zt=globalThis.trustedTypes,kn=Zt?Zt.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ae=`lit$${(Math.random()+"").slice(9)}$`,bs="?"+Ae,Rr=`<${bs}>`,tt=document,Rt=(i="")=>tt.createComment(i),xt=i=>i===null||typeof i!="object"&&typeof i!="function",vs=Array.isArray,xr=i=>{var e;return vs(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rn=/-->/g,xn=/>/g,Le=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Sn=/'/g,Cn=/"/g,_s=/^(?:script|style|textarea)$/i,Sr=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),N=Sr(1),it=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),On=new WeakMap,Cr=(i,e,t)=>{var n,s;const r=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Lt(e.insertBefore(Rt(),a),a,void 0,t!=null?t:{})}return o._$AI(i),o},Je=tt.createTreeWalker(tt,129,null,!1),Or=(i,e)=>{const t=i.length-1,n=[];let s,r=e===2?"<svg>":"",o=mt;for(let l=0;l<t;l++){const c=i[l];let u,d,h=-1,f=0;for(;f<c.length&&(o.lastIndex=f,d=o.exec(c),d!==null);)f=o.lastIndex,o===mt?d[1]==="!--"?o=Rn:d[1]!==void 0?o=xn:d[2]!==void 0?(_s.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=Le):d[3]!==void 0&&(o=Le):o===Le?d[0]===">"?(o=s!=null?s:mt,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?Le:d[3]==='"'?Cn:Sn):o===Cn||o===Sn?o=Le:o===Rn||o===xn?o=mt:(o=Le,s=void 0);const g=o===Le&&i[l+1].startsWith("/>")?" ":"";r+=o===mt?c+Rr:h>=0?(n.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+Ae+g):c+Ae+(h===-2?(n.push(void 0),l):g)}const a=r+(i[t]||"<?>")+(e===2?"</svg>":"");return[kn!==void 0?kn.createHTML(a):a,n]};class St{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,u]=Or(e,t);if(this.el=St.createElement(c,n),Je.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=Je.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(Ae)){const f=u[o++];if(d.push(h),f!==void 0){const g=s.getAttribute(f.toLowerCase()+"$lit$").split(Ae),x=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:x[2],strings:g,ctor:x[1]==="."?Tr:x[1]==="?"?Mr:x[1]==="@"?Er:oi})}else l.push({type:6,index:r})}for(const h of d)s.removeAttribute(h)}if(_s.test(s.tagName)){const d=s.textContent.split(Ae),h=d.length-1;if(h>0){s.textContent=Zt?Zt.emptyScript:"";for(let f=0;f<h;f++)s.append(d[f],Rt()),Je.nextNode(),l.push({type:2,index:++r});s.append(d[h],Rt())}}}else if(s.nodeType===8)if(s.data===bs)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(Ae,d+1))!==-1;)l.push({type:7,index:r}),d+=Ae.length-1}r++}}static createElement(e,t){const n=tt.createElement("template");return n.innerHTML=e,n}}function nt(i,e,t=i,n){var s,r,o,a;if(e===it)return e;let l=n!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[n]:t._$Cu;const c=xt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((o=(a=t)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[n]=l:t._$Cu=l),l!==void 0&&(e=nt(i,l._$AS(i,e.values),l,n)),e}class Ar{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:tt).importNode(n,!0);Je.currentNode=r;let o=Je.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Lt(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new jr(o,this,e)),this.v.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=Je.nextNode(),a++)}return r}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Lt{constructor(e,t,n,s){var r;this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cg=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=nt(this,e,t),xt(e)?e===J||e==null||e===""?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==it&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):xr(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==J&&xt(this._$AH)?this._$AA.nextSibling.data=e:this.S(tt.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=St.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(n);else{const o=new Ar(r,this),a=o.p(this.options);o.m(n),this.S(a),this._$AH=o}}_$AC(e){let t=On.get(e.strings);return t===void 0&&On.set(e.strings,t=new St(e)),t}M(e){vs(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const r of e)s===t.length?t.push(n=new Lt(this.A(Rt()),this.A(Rt()),this,this.options)):n=t[s],n._$AI(r),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class oi{constructor(e,t,n,s,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=J}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){const r=this.strings;let o=!1;if(r===void 0)e=nt(this,e,t,0),o=!xt(e)||e!==this._$AH&&e!==it,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=nt(this,a[n+l],t,l),c===it&&(c=this._$AH[l]),o||(o=!xt(c)||c!==this._$AH[l]),c===J?e=J:e!==J&&(e+=(c!=null?c:"")+r[l+1]),this._$AH[l]=c}o&&!s&&this.k(e)}k(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Tr extends oi{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===J?void 0:e}}class Mr extends oi{constructor(){super(...arguments),this.type=4}k(e){e&&e!==J?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Er extends oi{constructor(e,t,n,s,r){super(e,t,n,s,r),this.type=5}_$AI(e,t=this){var n;if((e=(n=nt(this,e,t,0))!==null&&n!==void 0?n:J)===it)return;const s=this._$AH,r=e===J&&s!==J||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==J&&(s===J||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class jr{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){nt(this,e)}}const An=window.litHtmlPolyfillSupport;An==null||An(St,Lt),((Ci=globalThis.litHtmlVersions)!==null&&Ci!==void 0?Ci:globalThis.litHtmlVersions=[]).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oi,Ai;class Re extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Cr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return it}}Re.finalized=!0,Re._$litElement$=!0,(Oi=globalThis.litElementHydrateSupport)===null||Oi===void 0||Oi.call(globalThis,{LitElement:Re});const Tn=globalThis.litElementPolyfillSupport;Tn==null||Tn({LitElement:Re});((Ai=globalThis.litElementVersions)!==null&&Ai!==void 0?Ai:globalThis.litElementVersions=[]).push("3.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=i=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:s,elements:r}=n;return{kind:s,elements:r,finisher(o){window.customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function m(i){return(e,t)=>t!==void 0?((n,s,r)=>{s.constructor.createProperty(r,n)})(i,e,t):Pr(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lr(i){return m({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr=({finisher:i,descriptor:e})=>(t,n)=>{var s;if(n===void 0){const r=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return i!=null&&(o.finisher=function(a){i(a,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(r,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(i,e){return zr({descriptor:t=>{const n={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;n.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&o!==void 0?o:null),this[s]}}return n}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Ir=B`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ni=class extends Re{render(){return N`<span><slot></slot></span>`}};Ni.styles=[Ir];Ni=wr([U("mwc-icon")],Ni);const Mn=i=>typeof i=="undefined",Nr=i=>typeof i=="function",ys=i=>typeof i=="number";function ws(){let i=0;return()=>i++}function Br(){return Math.random().toString(36).substring(2)}const Me=typeof window=="undefined";function $s(i,e,t){return i.addEventListener(e,t),()=>i.removeEventListener(e,t)}const Xe=[];function Ur(i,e){return{subscribe:se(i,e).subscribe}}function se(i,e=M){let t;const n=new Set;function s(a){if(Z(i,a)&&(i=a,t)){const l=!Xe.length;for(const c of n)c[1](),Xe.push(c,i);if(l){for(let c=0;c<Xe.length;c+=2)Xe[c][0](Xe[c+1]);Xe.length=0}}}function r(a){s(a(i))}function o(a,l=M){const c=[a,l];return n.add(c),n.size===1&&(t=e(s)||M),a(i),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}function Hr(i,e,t){const n=!Array.isArray(i),s=n?[i]:i,r=e.length<2;return Ur(t,o=>{let a=!1;const l=[];let c=0,u=M;const d=()=>{if(c)return;u();const f=e(n?l[0]:l,o);r?o(f):u=rs(f)?f:M},h=s.map((f,g)=>Fi(f,x=>{l[g]=x,c&=~(1<<g),a&&d()},()=>{c|=1<<g}));return a=!0,d(),function(){Pe(h),u()}})}const zt=i=>`@@svnav-ctx__${i}`,Bi=zt("LOCATION"),st=zt("ROUTER"),ks=zt("ROUTE"),Dr=zt("ROUTE_PARAMS"),Gr=zt("FOCUS_ELEM"),Rs=/^:(.+)/,En=(i,e)=>i.substr(0,e.length)===e,Wr=i=>i==="",Fr=i=>Rs.test(i),xs=i=>i[0]==="*",Vr=i=>i.replace(/\*.*$/,""),Ss=i=>i.replace(/(^\/+|\/+$)/g,"");function xe(i,e=!1){const t=Ss(i).split("/");return e?t.filter(Boolean):t}const Ti=(i,e)=>i+(e?`?${e}`:""),Yi=i=>`/${Ss(i)}`;function It(...i){const e=n=>xe(n,!0).join("/"),t=i.map(e).join("/");return Yi(t)}const Cs=1,ai=2,Ne=3,qr=4,Os=5,Yr=6,As=7,Kr=8,Xr=9,Ts=10,Ms=11,Zr={[Cs]:"Link",[ai]:"Route",[Ne]:"Router",[qr]:"useFocus",[Os]:"useLocation",[Yr]:"useMatch",[As]:"useNavigate",[Kr]:"useParams",[Xr]:"useResolvable",[Ts]:"useResolve",[Ms]:"navigate"},Ki=i=>Zr[i];function Qr(i,e){let t;return i===ai?t=e.path?`path="${e.path}"`:"default":i===Cs?t=`to="${e.to}"`:i===Ne&&(t=`basepath="${e.basepath||""}"`),`<${Ki(i)} ${t||""} />`}function Jr(i,e,t,n){const s=t&&Qr(n||i,t),r=s?`

Occurred in: ${s}`:"",o=Ki(i),a=Nr(e)?e(o):e;return`<${o}> ${a}${r}`}const Es=i=>(...e)=>i(Jr(...e)),js=Es(i=>{throw new Error(i)}),Qt=Es(console.warn),jn=4,eo=3,to=2,io=1,no=1;function so(i,e){const t=i.default?0:xe(i.fullPath).reduce((n,s)=>{let r=n;return r+=jn,Wr(s)?r+=no:Fr(s)?r+=to:xs(s)?r-=jn+io:r+=eo,r},0);return{route:i,score:t,index:e}}function ro(i){return i.map(so).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function Ps(i,e){let t,n;const[s]=e.split("?"),r=xe(s),o=r[0]==="",a=ro(i);for(let l=0,c=a.length;l<c;l++){const{route:u}=a[l];let d=!1;const h={},f=_=>({...u,params:h,uri:_});if(u.default){n=f(e);continue}const g=xe(u.fullPath),x=Math.max(r.length,g.length);let p=0;for(;p<x;p++){const _=g[p],C=r[p];if(!Mn(_)&&xs(_)){const z=_==="*"?"*":_.slice(1);h[z]=r.slice(p).map(decodeURIComponent).join("/");break}if(Mn(C)){d=!0;break}const O=Rs.exec(_);if(O&&!o){const z=decodeURIComponent(C);h[O[1]]=z}else if(_!==C){d=!0;break}}if(!d){t=f(It(...r.slice(0,p)));break}}return t||n||null}function Ls(i,e){return Ps([i],e)}function oo(i,e){if(En(i,"/"))return i;const[t,n]=i.split("?"),[s]=e.split("?"),r=xe(t),o=xe(s);if(r[0]==="")return Ti(s,n);if(!En(r[0],".")){const c=o.concat(r).join("/");return Ti((s==="/"?"":"/")+c,n)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),Ti(`/${l.join("/")}`,n)}function Pn(i,e){const{pathname:t,hash:n="",search:s="",state:r}=i,o=xe(e,!0),a=xe(t,!0);for(;o.length;)o[0]!==a[0]&&js(Ne,`Invalid state: All locations must begin with the basepath "${e}", found "${t}"`),o.shift(),a.shift();return{pathname:It(...a),hash:n,search:s,state:r}}const Ln=i=>i.length===1?"":i;function zs(i){const e=i.indexOf("?"),t=i.indexOf("#"),n=e!==-1,s=t!==-1,r=s?Ln(i.substr(t)):"",o=s?i.substr(0,t):i,a=n?Ln(o.substr(e)):"";return{pathname:n?o.substr(0,e):o,search:a,hash:r}}function ao(i,e,t){return It(t,oo(i,e))}function lo(i,e){const t=Yi(Vr(i)),n=xe(t,!0),s=xe(e,!0).slice(0,n.length),r=Ls({fullPath:t},It(...s));return r&&r.uri}const Mi="POP",co="PUSH",uo="REPLACE";function Ei(i){return{...i.location,pathname:encodeURI(decodeURI(i.location.pathname)),state:i.history.state,_key:i.history.state&&i.history.state._key||"initial"}}function ho(i){let e=[],t=Ei(i),n=Mi;const s=(r=e)=>r.forEach(o=>o({location:t,action:n}));return{get location(){return t},listen(r){e.push(r);const o=()=>{t=Ei(i),n=Mi,s([r])};s([r]);const a=$s(i,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(n=l?uo:co,ys(r))o&&Qt(Ms,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),n=Mi,i.history.go(r);else{const c={...a,_key:Br()};try{i.history[l?"replaceState":"pushState"](c,"",r)}catch{i.location[l?"replace":"assign"](r)}}t=Ei(i),s()}}}function ji(i,e){return{...zs(e),state:i}}function fo(i="/"){let e=0,t=[ji(null,i)];return{get entries(){return t},get location(){return t[e]},addEventListener(){},removeEventListener(){},history:{get state(){return t[e].state},pushState(n,s,r){e++,t=t.slice(0,e),t.push(ji(n,r))},replaceState(n,s,r){t[e]=ji(n,r)},go(n){const s=e+n;s<0||s>t.length-1||(e=s)}}}}const po=!!(!Me&&window.document&&window.document.createElement),go=!Me&&window.location.origin==="null",Is=ho(po&&!go?window:fo()),{navigate:Be}=Is;let Se=null,Ns=!0;function mo(i,e){const t=document.querySelectorAll("[data-svnav-router]");for(let n=0;n<t.length;n++){const s=t[n],r=Number(s.dataset.svnavRouter);if(r===i)return!0;if(r===e)return!1}return!1}function bo(i){(!Se||i.level>Se.level||i.level===Se.level&&mo(i.routerId,Se.routerId))&&(Se=i)}function vo(){Se=null}function _o(){Ns=!1}function zn(i){if(!i)return!1;const e="tabindex";try{if(!i.hasAttribute(e)){i.setAttribute(e,"-1");let t;t=$s(i,"blur",()=>{i.removeAttribute(e),t()})}return i.focus(),document.activeElement===i}catch{return!1}}function yo(i,e){return Number(i.dataset.svnavRouteEnd)===e}function wo(i){return/^H[1-6]$/i.test(i.tagName)}function In(i,e=document){return e.querySelector(i)}function $o(i){let t=In(`[data-svnav-route-start="${i}"]`).nextElementSibling;for(;!yo(t,i);){if(wo(t))return t;const n=In("h1,h2,h3,h4,h5,h6",t);if(n)return n;t=t.nextElementSibling}return null}function ko(i){Promise.resolve(et(i.focusElement)).then(e=>{const t=e||$o(i.id);t||Qt(Ne,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,i,ai),!zn(t)&&zn(document.documentElement)})}const Ro=(i,e,t)=>(n,s)=>br().then(()=>{if(!Se||Ns){_o();return}if(n&&ko(Se.route),i.announcements&&s){const{path:r,fullPath:o,meta:a,params:l,uri:c}=Se.route,u=i.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},et(t));Promise.resolve(u).then(d=>{e.set(d)})}vo()}),xo="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function So(i){let e,t;return{c(){e=b("div"),t=K(i[0]),$(e,"role","status"),$(e,"aria-atomic","true"),$(e,"aria-live","polite"),$(e,"style",xo)},m(n,s){w(n,e,s),v(e,t)},p(n,s){s[0]&1&&Ce(t,n[0])},d(n){n&&y(e)}}}function Co(i){let e,t,n,s,r;const o=i[20].default,a=os(o,i,i[19],null);let l=i[2]&&i[4]&&i[1].announcements&&So(i);return{c(){e=b("div"),t=A(),a&&a.c(),n=A(),l&&l.c(),s=We(),oe(e,"display","none"),$(e,"aria-hidden","true"),$(e,"data-svnav-router",i[3])},m(c,u){w(c,e,u),w(c,t,u),a&&a.m(c,u),w(c,n,u),l&&l.m(c,u),w(c,s,u),r=!0},p(c,u){a&&a.p&&(!r||u[0]&524288)&&cs(a,o,c,c[19],r?ls(o,c[19],u,null):us(c[19]),null),c[2]&&c[4]&&c[1].announcements&&l.p(c,u)},i(c){r||(k(a,c),r=!0)},o(c){R(a,c),r=!1},d(c){c&&y(e),c&&y(t),a&&a.d(c),c&&y(n),l&&l.d(c),c&&y(s)}}}const Oo=ws(),Nn="/";function Ao(i,e,t){let n,s,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:u=Nn}=e,{url:d=null}=e,{history:h=Is}=e,{primary:f=!0}=e,{a11y:g={}}=e;const x={createAnnouncement:T=>`Navigated to ${T.uri}`,announcements:!0,...g},p=u,_=Yi(u),C=Te(Bi),O=Te(st),z=!C,H=Oo(),D=f&&!(O&&!O.manageFocus),re=se("");W(i,re,T=>t(0,a=T));const pe=se([]);W(i,pe,T=>t(18,o=T));const de=se(null);W(i,de,T=>t(16,s=T));let le=!1;const L=z?0:O.level+1,G=z?se((()=>Pn(Me?zs(d):h.location,_))()):C;W(i,G,T=>t(15,n=T));const I=se(n);W(i,I,T=>t(17,r=T));const he=Ro(x,re,G),gt=T=>ke=>ke.filter(Oe=>Oe.id!==T);function ur(T){if(Me){if(le)return;const ke=Ls(T,n.pathname);if(ke)return le=!0,ke}else pe.update(ke=>{const Oe=gt(T.id)(ke);return Oe.push(T),Oe})}function dr(T){pe.update(gt(T))}return!z&&u!==Nn&&Qt(Ne,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:u}),z&&(ri(()=>h.listen(ke=>{const Oe=Pn(ke.location,_);I.set(n),G.set(Oe)})),$t(Bi,G)),$t(st,{activeRoute:de,registerRoute:ur,unregisterRoute:dr,manageFocus:D,level:L,id:H,history:z?h:O.history,basepath:z?_:O.basepath}),i.$$set=T=>{"basepath"in T&&t(10,u=T.basepath),"url"in T&&t(11,d=T.url),"history"in T&&t(12,h=T.history),"primary"in T&&t(13,f=T.primary),"a11y"in T&&t(14,g=T.a11y),"$$scope"in T&&t(19,c=T.$$scope)},i.$$.update=()=>{if(i.$$.dirty[0]&1024&&u!==p&&Qt(Ne,'You cannot change the "basepath" prop. It is ignored.'),i.$$.dirty[0]&294912){const T=Ps(o,n.pathname);de.set(T)}if(i.$$.dirty[0]&163840&&z){const T=!!n.hash,ke=!T&&D,Oe=!T||n.pathname!==r.pathname;he(ke,Oe)}i.$$.dirty[0]&65536&&D&&s&&s.primary&&bo({level:L,routerId:H,route:s})},[a,x,z,H,D,re,pe,de,G,I,u,d,h,f,g,n,s,r,o,c,l]}class Bs extends te{constructor(e){super(),ee(this,e,Ao,Co,Z,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}}function li(i,e,t=st,n=Ne){Te(t)||js(i,r=>`You cannot use ${r} outside of a ${Ki(n)}.`,e)}const To=i=>{const{subscribe:e}=Te(i);return{subscribe:e}};function Mo(){return li(Os),To(Bi)}function Eo(){const{history:i}=Te(st);return i}function Us(){const i=Te(ks);return i?Hr(i,e=>e.base):se("/")}function jo(){li(Ts);const i=Us(),{basepath:e}=Te(st);return n=>ao(n,et(i),e)}function Po(){li(As);const i=jo(),{navigate:e}=Eo();return(n,s)=>{const r=ys(n)?n:i(n);return e(r,s)}}const Lo=i=>({params:i&16,location:i&8}),Bn=i=>({params:Me?et(i[9]):i[4],location:i[3],navigate:i[10]});function Un(i){let e,t;return e=new Bs({props:{primary:i[1],$$slots:{default:[No]},$$scope:{ctx:i}}}),{c(){P(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&2&&(r.primary=n[1]),s&264217&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function zo(i){let e;const t=i[17].default,n=os(t,i,i[18],Bn);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&262168)&&cs(n,t,s,s[18],e?ls(t,s[18],r,Lo):us(s[18]),Bn)},i(s){e||(k(n,s),e=!0)},o(s){R(n,s),e=!1},d(s){n&&n.d(s)}}}function Io(i){let e,t,n;const s=[{location:i[3]},{navigate:i[10]},Me?et(i[9]):i[4],i[11]];var r=i[0];function o(a){let l={};for(let c=0;c<s.length;c+=1)l=Kt(l,s[c]);return{props:l}}return r&&(e=new r(o())),{c(){e&&P(e.$$.fragment),t=We()},m(a,l){e&&E(e,a,l),w(a,t,l),n=!0},p(a,l){const c=l&3608?_r(s,[l&8&&{location:a[3]},l&1024&&{navigate:a[10]},l&528&&_n(Me?et(a[9]):a[4]),l&2048&&_n(a[11])]):{};if(r!==(r=a[0])){if(e){be();const u=e;R(u.$$.fragment,1,0,()=>{j(u,1)}),ve()}r?(e=new r(o()),P(e.$$.fragment),k(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){n||(e&&k(e.$$.fragment,a),n=!0)},o(a){e&&R(e.$$.fragment,a),n=!1},d(a){a&&y(t),e&&j(e,a)}}}function No(i){let e,t,n,s;const r=[Io,zo],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(i),t=o[e]=r[e](i),{c(){t.c(),n=We()},m(l,c){o[e].m(l,c),w(l,n,c),s=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(be(),R(o[u],1,1,()=>{o[u]=null}),ve(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),k(t,1),t.m(n.parentNode,n))},i(l){s||(k(t),s=!0)},o(l){R(t),s=!1},d(l){o[e].d(l),l&&y(n)}}}function Bo(i){let e,t,n,s,r,o=i[2]&&Un(i);return{c(){e=b("div"),t=A(),o&&o.c(),n=A(),s=b("div"),oe(e,"display","none"),$(e,"aria-hidden","true"),$(e,"data-svnav-route-start",i[5]),oe(s,"display","none"),$(s,"aria-hidden","true"),$(s,"data-svnav-route-end",i[5])},m(a,l){w(a,e,l),w(a,t,l),o&&o.m(a,l),w(a,n,l),w(a,s,l),r=!0},p(a,[l]){a[2]?o?(o.p(a,l),l&4&&k(o,1)):(o=Un(a),o.c(),k(o,1),o.m(n.parentNode,n)):o&&(be(),R(o,1,1,()=>{o=null}),ve())},i(a){r||(k(o),r=!0)},o(a){R(o),r=!1},d(a){a&&y(e),a&&y(t),o&&o.d(a),a&&y(n),a&&y(s)}}}const Uo=ws();function Ho(i,e,t){let n;const s=["path","component","meta","primary"];let r=mn(e,s),o,a,l,c,{$$slots:u={},$$scope:d}=e,{path:h=""}=e,{component:f=null}=e,{meta:g={}}=e,{primary:x=!0}=e;li(ai,e);const p=Uo(),{registerRoute:_,unregisterRoute:C,activeRoute:O}=Te(st);W(i,O,L=>t(15,o=L));const z=Us();W(i,z,L=>t(16,l=L));const H=Mo();W(i,H,L=>t(3,a=L));const D=se(null);let re;const pe=se(),de=se({});W(i,de,L=>t(4,c=L)),$t(ks,pe),$t(Dr,de),$t(Gr,D);const le=Po();return Me||ds(()=>C(p)),i.$$set=L=>{t(23,e=Kt(Kt({},e),gn(L))),t(11,r=mn(e,s)),"path"in L&&t(12,h=L.path),"component"in L&&t(0,f=L.component),"meta"in L&&t(13,g=L.meta),"primary"in L&&t(1,x=L.primary),"$$scope"in L&&t(18,d=L.$$scope)},i.$$.update=()=>{if(i.$$.dirty&77834){const L=h==="",Ke=It(l,h),G={id:p,path:h,meta:g,default:L,fullPath:L?"":Ke,base:L?l:lo(Ke,a.pathname),primary:x,focusElement:D};pe.set(G),t(14,re=_(G))}if(i.$$.dirty&49152&&t(2,n=!!(re||o&&o.id===p)),i.$$.dirty&49156&&n){const{params:L}=re||o;de.set(L)}},e=gn(e),[f,x,n,a,c,p,O,z,H,de,le,r,h,g,re,o,l,u,d]}class Ui extends te{constructor(e){super(),ee(this,e,Ho,Bo,Z,{path:12,component:0,meta:13,primary:1})}}const Do=se([]),ct=se([]),ci=se([]),ui=se([]),Ve=se({}),Xi=se({}),di=se({}),Go={usr1:{name:"Avon Barksdale",avatar:"https://upload.wikimedia.org/wikipedia/en/9/97/Avon_Barksdale.jpg",groups:["grp1","grp2"],contacts:["usr2","usr3","usr4"]},usr2:{name:"Stringer Bell",avatar:"https://upload.wikimedia.org/wikipedia/en/b/b9/Stringer_Bell.jpg",groups:["grp1","grp2","grp3","grp4"],contacts:["usr1","usr3","usr4"]},usr3:{name:"Wee-Bey",avatar:"https://upload.wikimedia.org/wikipedia/en/8/85/Wee-Bey_Brice.jpg",groups:["grp1","grp3"],contacts:["usr1","usr2","usr4"]},usr4:{name:"Omar Little",avatar:"https://upload.wikimedia.org/wikipedia/en/b/b7/Omar_Little.png",groups:["grp4"],contacts:[]}},Wo={grp1:{name:"Barksdale Organization",description:"Drug-dealing gang in West Baltimore",avatar:"https://upload.wikimedia.org/wikipedia/commons/7/72/Barksdale2.jpg",groupType:"group",lastMessage:"There\u2019s always gonna be a Marlo, man. No Marlo, no game",members:{usr1:"admin",usr2:"admin",usr3:"member"}},grp2:{name:"conversation",description:"private chat",avatar:"",groupType:"dialog",lastMessage:"Yeah. They saw your ghetto ass comin' from miles away, n***a! You got a f***in' beef with them? That shit is on YOU!",members:{usr1:"admin",usr2:"admin"}},grp3:{name:"conversation",description:"private chat",avatar:"",groupType:"dialog",lastMessage:"My word is still my word. In here, in Baltimore, in any place you can think of calling home, it'll be my word that finds you.",members:{usr2:"admin",usr3:"admin"}},grp4:{name:"conversation",description:"private chat",avatar:"",groupType:"dialog",lastMessage:"You come at the king, you best not miss",members:{usr2:"admin",usr4:"admin"}}},Fo={grp1:{img1:{user:"usr1",message:"msg1",desc:"image description here...",url:"<url>"},img2:{}},grp2:{},grp3:{}},Vo={grp1:{msg1:{user:"usr1",message:"There\u2019s always gonna be a Marlo, man. No Marlo, no game",timestamp:1459361875337}},grp2:{msg4:{user:"usr2",message:"That n***a took our money, man",timestamp:0},msg5:{user:"usr1",message:"I seen it comin",timestamp:0},msg6:{user:"usr2",message:"Well, he gotta go",timestamp:0},msg7:{user:"usr1",message:"Naw, you a f***in' businessman, you wanna handle it like that! You don't wanna get all gangsta-wild with it and s**t, right? What I tell you about playin' them f***in' away games?",timestamp:0},msg8:{user:"usr1",message:"Yeah. They saw your ghetto ass comin' from miles away, n***a! You got a f***in' beef with them? That shit is on YOU!",timestamp:0}},grp3:{msg8:{user:"usr3",message:"My word is still my word. In here, in Baltimore, in any place you can think of calling home, it'll be my word that finds you.",timestamp:0}},grp4:{msg9:{user:"usr4",message:"You come at the king, you best not miss",timestamp:0}}};var ge={users:Go,groups:Wo,images:Fo,chats:Vo};function qo(i){const s=((ge.users[i]||{}).groups||[]).map(o=>ge.groups[o]).reduce((o,a)=>{const l=Object.keys(a.members).filter(c=>c!==i);return o=[...o,...l],o},[]);return[...new Set(s)].map(o=>hi(o))}function hi(i){return ge.users[i]?{...ge.users[i],id:i}:{}}function Yo(i){return((ge.users[i]||{}).contacts||[]).map(n=>hi(n))}function Ko(i){return((ge.users[i]||{}).groups||[]).reduce((n,s)=>n=[...n,{...Hs(i,s)}],[])}function Hs(i,e){return(ge.users[i]||{}).groups.some(s=>s===e)?{...Zo(i,e)}:{}}function Xo(i){return((ge.users[i]||{}).groups||[]).reduce((n,s)=>n=[...n,{...Ds(i,s)}],[])}function Ds(i,e){const t=ge.chats[e];if((ge.users[i]||{}).groups.some(r=>r===e)){const r=Object.entries(t);let o={id:e,messages:[]};for(const[a,l]of r)o.messages=[...o.messages,{id:a,...l,user:ge.users[l.user]}];return o}else return[]}function Zo(i,e){const t=ge.groups[e]||{};if(t.groupType==="dialog"){const s=t.members||{};let r={};for(const o in s)o!==i&&(r=hi(o));t.name=r.name||"",t.avatar=r.avatar||""}return{id:e,...t}}var qe={getUser:hi,getUsers:qo,getContacts:Yo,getGroups:Ko,getGroup:Hs,getChats:Xo,getChat:Ds};function Qo(i){}function Jo(i){return qe.getUsers(i)}function ea(i){return qe.getUser(i)}function ta(i){}function ia(i){}function na(i){return qe.getContacts(i)}function sa(i,e){}function ra(i,e){}function oa(i){}function aa(i){return qe.getGroups(i)}function la(i,e){return qe.getGroup(i,e)}function ca(i){}function ua(i){}function da(i,e){}function ha(i){return qe.getChats(i)}function fa(i,e){return qe.getChat(i,e)}function pa(i){}function ga(i){}function ma(i){}var Qe={createUser:Qo,getUser:ea,getUsers:Jo,updateUser:ta,deleteUser:ia,getContacts:na,addContact:sa,removeContact:ra,createGroup:oa,getGroup:la,getGroups:aa,updateGroup:ca,deleteGroup:ua,getChats:ha,getChat:fa,createMessage:da,getMessage:pa,updateMessage:ga,deleteMessage:ma};function ba(i){ct.set(Qe.getGroups(i)),ci.set(Qe.getChats(i)),ui.set(Qe.getContacts(i)),Do.set(Qe.getUsers(i))}function va(i){Ve.set(Qe.getUser(i))}function _a(){Ve.set({})}function ya(i){Xi.set(wa(i)),di.set(Gs(i))}function wa(i){let e={};return ct.subscribe(n=>{e=n.find(s=>s.id===i)})(),e||{}}function Gs(i){let e={};return ci.subscribe(n=>{e=n.find(s=>s.id===i)})(),e||{}}function $a(i){return Qe.getUser(i)}function ka(i){let e={};return ui.subscribe(n=>{e=n.find(s=>s.id===i)})(),e||{}}function Ra(i,e){const t=Gs(i)||{},n={...t,messages:[...t.messages,e]};ci.update(s=>s.map(r=>r.id===i?n:r)),di.set(n)}function xa(i){i.id="grp0";const e={id:i.id,messages:[]};return ci.update(t=>[...t,e]),ct.update(t=>[...t,i]),i}function Sa(i){if(ka(i).id){console.log("contact already exist");return}const t=$a(i);if(t.id){ui.update(n=>[...n,t]);return}console.log("user doesn't exist")}var ye={fetchData:ba,setCurrentUser:va,flushCurrentUser:_a,setCurrentGroup:ya,newMessage:Ra,newGroup:xa,newContact:Sa},Ca=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Oa=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};const q=B`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class Y extends Re{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}fire(e,t){Zi(this,e,t)}}Ca([Q("svg"),Oa("design:type",SVGSVGElement)],Y.prototype,"svg",void 0);function Aa(){return Math.floor(Math.random()*2**31)}function Zi(i,e,t){i.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:t}))}function Hi(i,e,t){if(i&&i.length){const[n,s]=e,r=Math.PI/180*t,o=Math.cos(r),a=Math.sin(r);i.forEach(l=>{const[c,u]=l;l[0]=(c-n)*o-(u-s)*a+n,l[1]=(c-n)*a+(u-s)*o+s})}}function Ta(i,e,t){const n=[];i.forEach(s=>n.push(...s)),Hi(n,e,t)}function bt(i){const e=i[0],t=i[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Ma(i,e,t,n){const s=e[1]-i[1],r=i[0]-e[0],o=s*i[0]+r*i[1],a=n[1]-t[1],l=t[0]-n[0],c=a*t[0]+l*t[1],u=s*l-a*r;return u?[(l*o-r*c)/u,(s*c-a*o)/u]:null}function Pi(i,e,t){const n=i.length;if(n<3)return!1;const s=[Number.MAX_SAFE_INTEGER,t],r=[e,t];let o=0;for(let a=0;a<n;a++){const l=i[a],c=i[(a+1)%n];if(Ws(l,c,r,s)){if(yt(l,r,c)===0)return _t(l,r,c);o++}}return o%2===1}function _t(i,e,t){return e[0]<=Math.max(i[0],t[0])&&e[0]>=Math.min(i[0],t[0])&&e[1]<=Math.max(i[1],t[1])&&e[1]>=Math.min(i[1],t[1])}function yt(i,e,t){const n=(e[1]-i[1])*(t[0]-e[0])-(e[0]-i[0])*(t[1]-e[1]);return n===0?0:n>0?1:2}function Ws(i,e,t,n){const s=yt(i,e,t),r=yt(i,e,n),o=yt(t,n,i),a=yt(t,n,e);return!!(s!==r&&o!==a||s===0&&_t(i,t,e)||r===0&&_t(i,n,e)||o===0&&_t(t,i,n)||a===0&&_t(t,e,n))}function Ea(i,e){const t=[0,0],n=Math.round(e.hachureAngle+90);n&&Hi(i,t,n);const s=ja(i,e);return n&&(Hi(i,t,-n),Ta(s,t,-n)),s}function ja(i,e){const t=[...i];t[0].join(",")!==t[t.length-1].join(",")&&t.push([t[0][0],t[0][1]]);const n=[];if(t&&t.length>2){let s=e.hachureGap;s<0&&(s=e.strokeWidth*4),s=Math.max(s,.1);const r=[];for(let l=0;l<t.length-1;l++){const c=t[l],u=t[l+1];if(c[1]!==u[1]){const d=Math.min(c[1],u[1]);r.push({ymin:d,ymax:Math.max(c[1],u[1]),x:d===c[1]?c[0]:u[0],islope:(u[0]-c[0])/(u[1]-c[1])})}}if(r.sort((l,c)=>l.ymin<c.ymin?-1:l.ymin>c.ymin?1:l.x<c.x?-1:l.x>c.x?1:l.ymax===c.ymax?0:(l.ymax-c.ymax)/Math.abs(l.ymax-c.ymax)),!r.length)return n;let o=[],a=r[0].ymin;for(;o.length||r.length;){if(r.length){let l=-1;for(let u=0;u<r.length&&!(r[u].ymin>a);u++)l=u;r.splice(0,l+1).forEach(u=>{o.push({s:a,edge:u})})}if(o=o.filter(l=>!(l.edge.ymax<=a)),o.sort((l,c)=>l.edge.x===c.edge.x?0:(l.edge.x-c.edge.x)/Math.abs(l.edge.x-c.edge.x)),o.length>1)for(let l=0;l<o.length;l=l+2){const c=l+1;if(c>=o.length)break;const u=o[l].edge,d=o[c].edge;n.push([[Math.round(u.x),a],[Math.round(d.x),a]])}a+=s,o.forEach(l=>{l.edge.x=l.edge.x+s*l.edge.islope})}}return n}class Pa{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,n=!1){let s=Ea(e,t);if(n){const o=this.connectingLines(e,s);s=s.concat(o)}const r=this.renderLines(s,t);return{type:"fillSketch",ops:r}}renderLines(e,t){const n=[];for(const s of e)n.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],t));return n}connectingLines(e,t){const n=[];if(t.length>1)for(let s=1;s<t.length;s++){const r=t[s-1];if(bt(r)<3)continue;const a=[t[s][0],r[1]];if(bt(a)>3){const l=this.splitOnIntersections(e,a);n.push(...l)}}return n}midPointInPolygon(e,t){return Pi(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){const n=Math.max(5,bt(t)*.1),s=[];for(let r=0;r<e.length;r++){const o=e[r],a=e[(r+1)%e.length];if(Ws(o,a,...t)){const l=Ma(o,a,t[0],t[1]);if(l){const c=bt([l,t[0]]),u=bt([l,t[1]]);c>n&&u>n&&s.push({point:l,distance:c})}}}if(s.length>1){const r=s.sort((l,c)=>l.distance-c.distance).map(l=>l.point);if(Pi(e,...t[0])||r.shift(),Pi(e,...t[1])||r.pop(),r.length<=1)return this.midPointInPolygon(e,t)?[t]:[];const o=[t[0],...r,t[1]],a=[];for(let l=0;l<o.length-1;l+=2){const c=[o[l],o[l+1]];this.midPointInPolygon(e,c)&&a.push(c)}return a}else return this.midPointInPolygon(e,t)?[t]:[]}}class La extends Pa{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}}class za{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function Fs(i,e,t,n,s){return{type:"path",ops:Ct(i,e,t,n,s)}}function Ia(i,e,t){const n=(i||[]).length;if(n>2){const s=[];for(let r=0;r<n-1;r++)s.push(...Ct(i[r][0],i[r][1],i[r+1][0],i[r+1][1],t));return e&&s.push(...Ct(i[n-1][0],i[n-1][1],i[0][0],i[0][1],t)),{type:"path",ops:s}}else if(n===2)return Fs(i[0][0],i[0][1],i[1][0],i[1][1],t);return{type:"path",ops:[]}}function Vs(i,e){return Ia(i,!0,e)}function Na(i,e,t,n,s){const r=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]];return Vs(r,s)}function qs(i,e,t,n,s){const r=Ys(t,n,s);return Ba(i,e,s,r).opset}function Ys(i,e,t){const n=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(i/2,2)+Math.pow(e/2,2))/2)),s=Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*n),r=Math.PI*2/s;let o=Math.abs(i/2),a=Math.abs(e/2);const l=1-t.curveFitting;return o+=F(o*l,t),a+=F(a*l,t),{increment:r,rx:o,ry:a}}function Ba(i,e,t,n){const[s,r]=Gn(n.increment,i,e,n.rx,n.ry,1,n.increment*Di(.1,Di(.4,1,t),t),t);let o=Dn(s,null,t);if(!t.disableMultiStroke){const[a]=Gn(n.increment,i,e,n.rx,n.ry,1.5,0,t),l=Dn(a,null,t);o=o.concat(l)}return{estimatedPoints:r,opset:{type:"path",ops:o}}}function Ua(i,e,t,n,s){return Ct(i,e,t,n,s,!0)}function Ks(i){return i.randomizer||(i.randomizer=new za(i.seed||0)),i.randomizer.next()}function Di(i,e,t,n=1){return t.roughness*n*(Ks(t)*(e-i)+i)}function F(i,e,t=1){return Di(-i,i,e,t)}function Ct(i,e,t,n,s,r=!1){const o=r?s.disableMultiStrokeFill:s.disableMultiStroke,a=Hn(i,e,t,n,s,!0,!1);if(o)return a;const l=Hn(i,e,t,n,s,!0,!0);return a.concat(l)}function Hn(i,e,t,n,s,r,o){const a=Math.pow(i-t,2)+Math.pow(e-n,2),l=Math.sqrt(a);let c=1;l<200?c=1:l>500?c=.4:c=-.0016668*l+1.233334;let u=s.maxRandomnessOffset||0;u*u*100>a&&(u=l/10);const d=u/2,h=.2+Ks(s)*.2;let f=s.bowing*s.maxRandomnessOffset*(n-e)/200,g=s.bowing*s.maxRandomnessOffset*(i-t)/200;f=F(f,s,c),g=F(g,s,c);const x=[],p=()=>F(d,s,c),_=()=>F(u,s,c),C=s.preserveVertices;return r&&(o?x.push({op:"move",data:[i+(C?0:p()),e+(C?0:p())]}):x.push({op:"move",data:[i+(C?0:F(u,s,c)),e+(C?0:F(u,s,c))]})),o?x.push({op:"bcurveTo",data:[f+i+(t-i)*h+p(),g+e+(n-e)*h+p(),f+i+2*(t-i)*h+p(),g+e+2*(n-e)*h+p(),t+(C?0:p()),n+(C?0:p())]}):x.push({op:"bcurveTo",data:[f+i+(t-i)*h+_(),g+e+(n-e)*h+_(),f+i+2*(t-i)*h+_(),g+e+2*(n-e)*h+_(),t+(C?0:_()),n+(C?0:_())]}),x}function Dn(i,e,t){const n=i.length,s=[];if(n>3){const r=[],o=1-t.curveTightness;s.push({op:"move",data:[i[1][0],i[1][1]]});for(let a=1;a+2<n;a++){const l=i[a];r[0]=[l[0],l[1]],r[1]=[l[0]+(o*i[a+1][0]-o*i[a-1][0])/6,l[1]+(o*i[a+1][1]-o*i[a-1][1])/6],r[2]=[i[a+1][0]+(o*i[a][0]-o*i[a+2][0])/6,i[a+1][1]+(o*i[a][1]-o*i[a+2][1])/6],r[3]=[i[a+1][0],i[a+1][1]],s.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(e&&e.length===2){const a=t.maxRandomnessOffset;s.push({op:"lineTo",data:[e[0]+F(a,t),e[1]+F(a,t)]})}}else n===3?(s.push({op:"move",data:[i[1][0],i[1][1]]}),s.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[2][0],i[2][1]]})):n===2&&s.push(...Ct(i[0][0],i[0][1],i[1][0],i[1][1],t));return s}function Gn(i,e,t,n,s,r,o,a){const l=[],c=[],u=F(.5,a)-Math.PI/2;c.push([F(r,a)+e+.9*n*Math.cos(u-i),F(r,a)+t+.9*s*Math.sin(u-i)]);for(let d=u;d<Math.PI*2+u-.01;d=d+i){const h=[F(r,a)+e+n*Math.cos(d),F(r,a)+t+s*Math.sin(d)];l.push(h),c.push(h)}return c.push([F(r,a)+e+n*Math.cos(u+Math.PI*2+o*.5),F(r,a)+t+s*Math.sin(u+Math.PI*2+o*.5)]),c.push([F(r,a)+e+.98*n*Math.cos(u+o),F(r,a)+t+.98*s*Math.sin(u+o)]),c.push([F(r,a)+e+.9*n*Math.cos(u+o*.5),F(r,a)+t+.9*s*Math.sin(u+o*.5)]),[c,l]}const Ha={randOffset(i,e){return i},randOffsetWithRange(i,e,t){return(i+e)/2},ellipse(i,e,t,n,s){return qs(i,e,t,n,s)},doubleLineOps(i,e,t,n,s){return Ua(i,e,t,n,s)}};function ut(i){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:i}}function Da(i,e){let t="";for(const n of i.ops){const s=n.data;switch(n.op){case"move":if(e&&t)break;t+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `;break}}return t.trim()}function rt(i,e){const t=document.createElementNS("http://www.w3.org/2000/svg",i);if(e)for(const n in e)t.setAttributeNS(null,n,e[n]);return t}function Nt(i,e,t=!1){const n=rt("path",{d:Da(i,t)});return e&&e.appendChild(n),n}function ce(i,e,t,n,s,r){return Nt(Na(e+2,t+2,n-4,s-4,ut(r)),i)}function V(i,e,t,n,s,r){return Nt(Fs(e,t,n,s,ut(r)),i)}function Ga(i,e,t){return Nt(Vs(e,ut(t)),i,!0)}function Ue(i,e,t,n,s,r){return n=Math.max(n>10?n-4:n-1,1),s=Math.max(s>10?s-4:s-1,1),Nt(qs(e,t,n,s,ut(r)),i)}function fi(i,e){const n=new La(Ha).fillPolygon(i,ut(e));return Nt(n,null)}function Qi(i,e,t,n,s){const r=ut(s),o=Ys(t,n,r),a=[];let l=0;for(;l<=Math.PI*2;)a.push([i+o.rx*Math.cos(l),e+o.ry*Math.sin(l)]),l+=o.increment;return fi(a,s)}var pi=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},gi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ot=class extends Y{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[q,B`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return N`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,s=e.height+(t-1)*2;return[n,s]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};ce(e,0,0,s.width,s.height,this.seed);for(let r=1;r<n;r++)V(e,r*2,s.height+r*2,s.width+r*2,s.height+r*2,this.seed).style.opacity=`${(75-r*10)/100}`,V(e,s.width+r*2,s.height+r*2,s.width+r*2,r*2,this.seed).style.opacity=`${(75-r*10)/100}`,V(e,r*2,s.height+r*2,s.width+r*2,s.height+r*2,this.seed).style.opacity=`${(75-r*10)/100}`,V(e,s.width+r*2,s.height+r*2,s.width+r*2,r*2,this.seed).style.opacity=`${(75-r*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};pi([m({type:Number}),gi("design:type",Object)],Ot.prototype,"elevation",void 0);pi([m({type:Boolean,reflect:!0}),gi("design:type",Object)],Ot.prototype,"disabled",void 0);pi([Q("button"),gi("design:type",HTMLButtonElement)],Ot.prototype,"button",void 0);Ot=pi([U("wired-button"),gi("design:paramtypes",[])],Ot);var Ji=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},en=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let At=class extends Y{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[q,B`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return N`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,s=e.height+(t-1)*2;return[n,s]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};if(this.fill&&this.fill.trim()){const r=fi([[2,2],[s.width-4,2],[s.width-2,s.height-4],[2,s.height-4]],this.seed);r.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(r)}ce(e,2,2,s.width-4,s.height-4,this.seed);for(let r=1;r<n;r++)V(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,V(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`,V(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,V(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`}};Ji([m({type:Number}),en("design:type",Object)],At.prototype,"elevation",void 0);Ji([m({type:String}),en("design:type",String)],At.prototype,"fill",void 0);At=Ji([U("wired-card"),en("design:paramtypes",[])],At);var Bt=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},mi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ot=class extends Y{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[q,B`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return N`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){ce(e,0,0,t[0],t[1],this.seed),this.svgCheck=rt("g"),e.appendChild(this.svgCheck),V(this.svgCheck,t[0]*.3,t[1]*.4,t[0]*.5,t[1]*.7,this.seed),V(this.svgCheck,t[0]*.5,t[1]*.7,t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Bt([m({type:Boolean}),mi("design:type",Object)],ot.prototype,"checked",void 0);Bt([m({type:Boolean,reflect:!0}),mi("design:type",Object)],ot.prototype,"disabled",void 0);Bt([Lr(),mi("design:type",Object)],ot.prototype,"focused",void 0);Bt([Q("input"),mi("design:type",HTMLInputElement)],ot.prototype,"input",void 0);ot=Bt([U("wired-checkbox")],ot);var bi=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},tn=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Tt=class extends Y{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[q,B`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return N`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const n=fi([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(n)}};bi([m(),tn("design:type",Object)],Tt.prototype,"value",void 0);bi([m(),tn("design:type",Object)],Tt.prototype,"name",void 0);bi([m({type:Boolean}),tn("design:type",Object)],Tt.prototype,"selected",void 0);Tt=bi([U("wired-item")],Tt);var dt=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Ut=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let He=class extends Re{constructor(){super(...arguments),this.disabled=!1,this.seed=Aa(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return B`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return N`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const n=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${n.width}`),t.setAttribute("height",`${n.height}`);const s=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=s.height+"px",ce(t,0,0,s.width,s.height,this.seed);const r=s.width-4;ce(t,r,0,34,s.height,this.seed);const o=Math.max(0,Math.abs((s.height-24)/2)),a=Ga(t,[[r+8,5+o],[r+26,5+o],[r+17,o+Math.min(s.height,18)]],this.seed);if(a.style.fill="currentColor",a.style.pointerEvents=this.disabled?"none":"auto",a.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const l=this.shadowRoot.getElementById("slot").assignedNodes();if(l&&l.length)for(let c=0;c<l.length;c++){const u=l[c];u.tagName==="WIRED-ITEM"&&(u.setAttribute("role","option"),this.itemNodes.push(u))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let n=null;for(let s=0;s<t.length;s++){const r=t[s];if(r.tagName==="WIRED-ITEM"){const o=r.value||r.getAttribute("value")||"";if(this.selected&&o===this.selected){n=r;break}}}this.lastSelectedItem=n||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),n?this.value={value:n.value||"",text:n.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(n=>n.nodeType===Node.ELEMENT_NODE).forEach(n=>{const s=n;s.requestUpdate&&s.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Zi(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};dt([m({type:Object}),Ut("design:type",Object)],He.prototype,"value",void 0);dt([m({type:String,reflect:!0}),Ut("design:type",String)],He.prototype,"selected",void 0);dt([m({type:Boolean,reflect:!0}),Ut("design:type",Object)],He.prototype,"disabled",void 0);dt([Q("svg"),Ut("design:type",SVGSVGElement)],He.prototype,"svg",void 0);dt([Q("#card"),Ut("design:type",HTMLDivElement)],He.prototype,"card",void 0);He=dt([U("wired-combo")],He);var vi=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},nn=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Mt=class extends Re{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return B`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return N`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};vi([m({type:Number}),nn("design:type",Object)],Mt.prototype,"elevation",void 0);vi([m({type:Boolean,reflect:!0}),nn("design:type",Object)],Mt.prototype,"open",void 0);vi([Q("wired-card"),nn("design:type",At)],Mt.prototype,"card",void 0);Mt=vi([U("wired-dialog")],Mt);var Xs=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Wa=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Gi=class extends Y{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[q,B`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return N`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,t*6]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5);for(let s=0;s<n;s++)V(e,0,s*6+3,t[0],s*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};Xs([m({type:Number}),Wa("design:type",Object)],Gi.prototype,"elevation",void 0);Gi=Xs([U("wired-divider")],Gi);var sn=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Zs=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Jt=class extends Y{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[q,B`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return N`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]),s=Qi(n/2,n/2,n,n,this.seed);e.appendChild(s)}};sn([m({type:Boolean,reflect:!0}),Zs("design:type",Object)],Jt.prototype,"disabled",void 0);sn([Q("button"),Zs("design:type",HTMLButtonElement)],Jt.prototype,"button",void 0);Jt=sn([U("wired-fab")],Jt);var rn=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Qs=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ei=class extends Y{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[q,B`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return N`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]);e.setAttribute("width",`${n}`),e.setAttribute("height",`${n}`),Ue(e,n/2,n/2,n,n,this.seed)}};rn([m({type:Boolean,reflect:!0}),Qs("design:type",Object)],ei.prototype,"disabled",void 0);rn([Q("button"),Qs("design:type",HTMLButtonElement)],ei.prototype,"button",void 0);ei=rn([U("wired-icon-button")],ei);var on=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},an=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};const Fa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let ti=class extends Y{constructor(){super(),this.elevation=1,this.src=Fa,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[q,B`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return N`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,s=e.height+(t-1)*2;return[n,s]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};ce(e,2,2,s.width-4,s.height-4,this.seed);for(let r=1;r<n;r++)V(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,V(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`,V(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,V(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`}};on([m({type:Number}),an("design:type",Object)],ti.prototype,"elevation",void 0);on([m({type:String}),an("design:type",String)],ti.prototype,"src",void 0);ti=on([U("wired-image"),an("design:paramtypes",[])],ti);var ie=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},ne=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let X=class extends Y{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[q,B`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        input:focus + div path {
          stroke-width: 1.5;
        }
      `]}render(){return N`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};ie([m({type:Boolean,reflect:!0}),ne("design:type",Object)],X.prototype,"disabled",void 0);ie([m({type:String}),ne("design:type",Object)],X.prototype,"placeholder",void 0);ie([m({type:String}),ne("design:type",String)],X.prototype,"name",void 0);ie([m({type:String}),ne("design:type",String)],X.prototype,"min",void 0);ie([m({type:String}),ne("design:type",String)],X.prototype,"max",void 0);ie([m({type:String}),ne("design:type",String)],X.prototype,"step",void 0);ie([m({type:String}),ne("design:type",Object)],X.prototype,"type",void 0);ie([m({type:String}),ne("design:type",Object)],X.prototype,"autocomplete",void 0);ie([m({type:String}),ne("design:type",Object)],X.prototype,"autocapitalize",void 0);ie([m({type:String}),ne("design:type",Object)],X.prototype,"autocorrect",void 0);ie([m({type:Boolean}),ne("design:type",Object)],X.prototype,"required",void 0);ie([m({type:Boolean}),ne("design:type",Object)],X.prototype,"autofocus",void 0);ie([m({type:Boolean}),ne("design:type",Object)],X.prototype,"readonly",void 0);ie([m({type:Number}),ne("design:type",Number)],X.prototype,"minlength",void 0);ie([m({type:Number}),ne("design:type",Number)],X.prototype,"maxlength",void 0);ie([m({type:Number}),ne("design:type",Number)],X.prototype,"size",void 0);ie([Q("input"),ne("design:type",HTMLInputElement)],X.prototype,"textInput",void 0);X=ie([U("wired-input"),ne("design:paramtypes",[])],X);var Ht=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},_i=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let at=class extends Y{constructor(){super(...arguments),this.elevation=1}static get styles(){return[q,B`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return N`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width,s=e.height+(t-1)*2;return[n,s]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),s={width:t[0],height:t[1]-(n-1)*2};for(let r=0;r<n;r++)V(e,0,s.height+r*2-2,s.width,s.height+r*2-2,this.seed),V(e,0,s.height+r*2-2,s.width,s.height+r*2-2,this.seed)}};Ht([m({type:Number}),_i("design:type",Object)],at.prototype,"elevation",void 0);Ht([m({type:String}),_i("design:type",String)],at.prototype,"href",void 0);Ht([m({type:String}),_i("design:type",String)],at.prototype,"target",void 0);Ht([Q("a"),_i("design:type",HTMLAnchorElement)],at.prototype,"anchor",void 0);at=Ht([U("wired-link")],at);var yi=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},ln=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Et=class extends Y{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[q,B`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return N`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];n.tagName==="WIRED-ITEM"&&(n.setAttribute("role","option"),this.itemNodes.push(n))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let n=null;for(let s=0;s<t.length;s++){const r=t[s];if(r.tagName==="WIRED-ITEM"){const o=r.value||"";if(this.selected&&o===this.selected){n=r;break}}}this.lastSelectedItem=n||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),n?this.value={value:n.value||"",text:n.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,0,0,t[0],t[1],this.seed)}};yi([m({type:Object}),ln("design:type",Object)],Et.prototype,"value",void 0);yi([m({type:String}),ln("design:type",String)],Et.prototype,"selected",void 0);yi([m({type:Boolean}),ln("design:type",Object)],Et.prototype,"horizontal",void 0);Et=yi([U("wired-listbox")],Et);var Dt=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},wi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let De=class extends Y{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[q,B`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      path.progbox {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return N`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const n=t.width*Math.max(0,Math.min(e,100));this.progBox=fi([[0,0],[n,0],[n,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};Dt([m({type:Number}),wi("design:type",Object)],De.prototype,"value",void 0);Dt([m({type:Number}),wi("design:type",Object)],De.prototype,"min",void 0);Dt([m({type:Number}),wi("design:type",Object)],De.prototype,"max",void 0);Dt([m({type:Boolean}),wi("design:type",Object)],De.prototype,"percentage",void 0);De=Dt([U("wired-progress")],De);var ht=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Gt=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ge=class extends Y{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[q,B`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return N`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){Ue(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=rt("g"),e.appendChild(this.svgCheck);const n=Math.max(t[0]*.6,5),s=Math.max(t[1]*.6,5);Ue(this.svgCheck,t[0]/2,t[1]/2,n,s,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};ht([m({type:Boolean}),Gt("design:type",Object)],Ge.prototype,"checked",void 0);ht([m({type:Boolean,reflect:!0}),Gt("design:type",Object)],Ge.prototype,"disabled",void 0);ht([m({type:String}),Gt("design:type",String)],Ge.prototype,"name",void 0);ht([m(),Gt("design:type",Object)],Ge.prototype,"focused",void 0);ht([Q("input"),Gt("design:type",HTMLInputElement)],Ge.prototype,"input",void 0);Ge=ht([U("wired-radio")],Ge);var Js=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Va=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Wi=class extends Re{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return B`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return N`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,n=e.target,s=n.name||"";t?(this.selected=t&&s||"",this.fireSelected()):n.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],t&&t.length)for(let n=0;n<t.length;n++){const s=t[n];if(s.tagName==="WIRED-RADIO"){this.radioNodes.push(s);const r=s.name||"";this.selected&&r===this.selected?s.checked=!0:s.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){n=s;break}n<0?t=e[0]:(n--,n<0&&(n=e.length-1),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){n=s;break}n<0?t=e[0]:(n++,n>=e.length&&(n=0),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){Zi(this,"selected",{selected:this.selected})}};Js([m({type:String}),Va("design:type",String)],Wi.prototype,"selected",void 0);Wi=Js([U("wired-radio-group")],Wi);var Ye=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},ft=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ee=class extends Y{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[q,B`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return N`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=rt("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),Ue(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),V(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=rt("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),V(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),V(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Ye([m({type:Boolean,reflect:!0}),ft("design:type",Object)],Ee.prototype,"disabled",void 0);Ye([m({type:String}),ft("design:type",Object)],Ee.prototype,"placeholder",void 0);Ye([m({type:String}),ft("design:type",Object)],Ee.prototype,"autocomplete",void 0);Ye([m({type:String}),ft("design:type",Object)],Ee.prototype,"autocorrect",void 0);Ye([m({type:Boolean}),ft("design:type",Object)],Ee.prototype,"autofocus",void 0);Ye([Q("input"),ft("design:type",HTMLInputElement)],Ee.prototype,"textInput",void 0);Ee=Ye([U("wired-search-input")],Ee);var pt=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Wt=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let je=class extends Y{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[q,B`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return N`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const n=Math.round(t[1]/2);V(e,0,n,t[0],n,this.seed).classList.add("bar"),this.knob=Ue(e,10,n,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),n=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${n*(this.canvasWidth-20)}px)`)}}};pt([m({type:Number}),Wt("design:type",Object)],je.prototype,"min",void 0);pt([m({type:Number}),Wt("design:type",Object)],je.prototype,"max",void 0);pt([m({type:Number}),Wt("design:type",Object)],je.prototype,"step",void 0);pt([m({type:Boolean,reflect:!0}),Wt("design:type",Object)],je.prototype,"disabled",void 0);pt([Q("input"),Wt("design:type",HTMLInputElement)],je.prototype,"input",void 0);je=pt([U("wired-slider")],je);var cn=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},er=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ii=class extends Y{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[q,B`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return N`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){Ue(e,t[0]/2,t[1]/2,Math.floor(t[0]*.8),Math.floor(.8*t[1]),this.seed),this.knob=Qi(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};cn([m({type:Boolean}),er("design:type",Object)],ii.prototype,"spinning",void 0);cn([m({type:Number}),er("design:type",Object)],ii.prototype,"duration",void 0);ii=cn([U("wired-spinner")],ii);var un=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},dn=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ni=class extends Y{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[q,B`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return N`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-4,t[1]-4,this.seed)}};un([m({type:String}),dn("design:type",Object)],ni.prototype,"name",void 0);un([m({type:String}),dn("design:type",Object)],ni.prototype,"label",void 0);ni=un([U("wired-tab"),dn("design:paramtypes",[])],ni);var hn=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},tr=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let si=class extends Re{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[q,B`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return N`
    <div id="bar">
      ${this.pages.map(e=>N`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const n=e[t];if(n.nodeType===Node.ELEMENT_NODE&&n.tagName.toLowerCase()==="wired-tab"){const s=n;this.pages.push(s);const r=s.getAttribute("name")||"";r&&r.trim().split(" ").forEach(o=>{o&&this.pageMap.set(o,s)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const n=this.pages[t];n===e?n.classList.remove("hidden"):n.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};hn([m({type:String}),tr("design:type",String)],si.prototype,"selected",void 0);hn([Q("slot"),tr("design:type",HTMLSlotElement)],si.prototype,"slotElement",void 0);si=hn([U("wired-tabs")],si);var fe=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},_e=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ue=class extends Y{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[q,B`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return N`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};fe([m({type:Boolean,reflect:!0}),_e("design:type",Object)],ue.prototype,"disabled",void 0);fe([m({type:Number}),_e("design:type",Object)],ue.prototype,"rows",void 0);fe([m({type:Number}),_e("design:type",Object)],ue.prototype,"maxrows",void 0);fe([m({type:String}),_e("design:type",Object)],ue.prototype,"autocomplete",void 0);fe([m({type:Boolean}),_e("design:type",Object)],ue.prototype,"autofocus",void 0);fe([m({type:String}),_e("design:type",Object)],ue.prototype,"inputmode",void 0);fe([m({type:String}),_e("design:type",Object)],ue.prototype,"placeholder",void 0);fe([m({type:Boolean}),_e("design:type",Object)],ue.prototype,"required",void 0);fe([m({type:Boolean}),_e("design:type",Object)],ue.prototype,"readonly",void 0);fe([m({type:Number}),_e("design:type",Number)],ue.prototype,"minlength",void 0);fe([m({type:Number}),_e("design:type",Number)],ue.prototype,"maxlength",void 0);fe([Q("textarea"),_e("design:type",HTMLTextAreaElement)],ue.prototype,"textareaInput",void 0);ue=fe([U("wired-textarea")],ue);var $i=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},fn=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let jt=class extends Y{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[q,B`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      path.knobfill {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked path.knobfill {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked path.knobfill {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return N`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){ce(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=rt("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const s=Qi(16,16,32,32,this.seed);s.classList.add("knobfill"),this.knob.appendChild(s),Ue(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};$i([m({type:Boolean}),fn("design:type",Object)],jt.prototype,"checked",void 0);$i([m({type:Boolean,reflect:!0}),fn("design:type",Object)],jt.prototype,"disabled",void 0);$i([Q("input"),fn("design:type",HTMLInputElement)],jt.prototype,"input",void 0);jt=$i([U("wired-toggle")],jt);var we=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},$e=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let me=class extends Y{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[q,B`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return N`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"\u25B6"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}:${n}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};we([m({type:String}),$e("design:type",Object)],me.prototype,"src",void 0);we([m({type:Boolean}),$e("design:type",Object)],me.prototype,"autoplay",void 0);we([m({type:Boolean}),$e("design:type",Object)],me.prototype,"loop",void 0);we([m({type:Boolean}),$e("design:type",Object)],me.prototype,"muted",void 0);we([m({type:Boolean}),$e("design:type",Object)],me.prototype,"playsinline",void 0);we([m(),$e("design:type",Object)],me.prototype,"playing",void 0);we([m(),$e("design:type",Object)],me.prototype,"timeDisplay",void 0);we([Q("wired-progress"),$e("design:type",De)],me.prototype,"progressBar",void 0);we([Q("wired-slider"),$e("design:type",je)],me.prototype,"slider",void 0);we([Q("video"),$e("design:type",HTMLVideoElement)],me.prototype,"video",void 0);me=we([U("wired-video"),$e("design:paramtypes",[])],me);function qa(i){let e,t,n;return{c(){e=b("img"),$(e,"class","blah-avatar svelte-1p5josz"),Xt(e.src,t=i[0].src)||$(e,"src",t),$(e,"alt",n=i[0].alt)},m(s,r){w(s,e,r)},p(s,[r]){r&1&&!Xt(e.src,t=s[0].src)&&$(e,"src",t),r&1&&n!==(n=s[0].alt)&&$(e,"alt",n)},i:M,o:M,d(s){s&&y(e)}}}function Ya(i,e,t){let{image:n}=e;return i.$$set=s=>{"image"in s&&t(0,n=s.image)},[n]}class ki extends te{constructor(e){super(),ee(this,e,Ya,qa,Z,{image:0})}}function Wn(i,e,t){const n=i.slice();return n[5]=e[t],n}function Fn(i){let e,t,n,s=i[5].name+"",r,o,a,l,c,u;t=new ki({props:{image:{src:i[5].avatar,alt:i[5].name}}});function d(){return i[3](i[5])}return{c(){e=b("wired-item"),P(t.$$.fragment),n=K(`\xA0\r
        `),r=K(s),o=A(),S(e,"class","blah-group-list__listbox--item svelte-1eg5h28"),S(e,"value",a=i[5].id)},m(h,f){w(h,e,f),E(t,e,null),v(e,n),v(e,r),v(e,o),l=!0,c||(u=ae(e,"click",d),c=!0)},p(h,f){i=h;const g={};f&1&&(g.image={src:i[5].avatar,alt:i[5].name}),t.$set(g),(!l||f&1)&&s!==(s=i[5].name+"")&&Ce(r,s),(!l||f&1&&a!==(a=i[5].id))&&S(e,"value",a)},i(h){l||(k(t.$$.fragment,h),l=!0)},o(h){R(t.$$.fragment,h),l=!1},d(h){h&&y(e),j(t),c=!1,u()}}}function Ka(i){let e,t,n,s,r,o,a,l,c=i[0],u=[];for(let h=0;h<c.length;h+=1)u[h]=Fn(Wn(i,c,h));const d=h=>R(u[h],1,1,()=>{u[h]=null});return{c(){e=b("wired-card"),t=K(`Chats\r
  `),n=b("wired-icon-button"),n.innerHTML="<mwc-icon>add</mwc-icon>",s=A(),r=b("wired-listbox");for(let h=0;h<u.length;h+=1)u[h].c();S(n,"class","blah-group-list__add-group svelte-1eg5h28"),S(r,"selected","two"),S(r,"class","blah-group-list__listbox svelte-1eg5h28"),oe(r,"--wired-item-selected-color","white"),oe(r,"--wired-item-selected-bg","grey"),S(e,"elevation","2"),S(e,"class","blah-group-list svelte-1eg5h28")},m(h,f){w(h,e,f),v(e,t),v(e,n),v(e,s),v(e,r);for(let g=0;g<u.length;g+=1)u[g].m(r,null);o=!0,a||(l=ae(n,"click",i[1]),a=!0)},p(h,[f]){if(f&5){c=h[0];let g;for(g=0;g<c.length;g+=1){const x=Wn(h,c,g);u[g]?(u[g].p(x,f),k(u[g],1)):(u[g]=Fn(x),u[g].c(),k(u[g],1),u[g].m(r,null))}for(be(),g=c.length;g<u.length;g+=1)d(g);ve()}},i(h){if(!o){for(let f=0;f<c.length;f+=1)k(u[f]);o=!0}},o(h){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)R(u[f]);o=!1},d(h){h&&y(e),Pt(u,h),a=!1,l()}}}function Xa(i,e,t){let{groupList:n}=e;const s=Fe();function r(){s("newGroup",{})}function o(l){s("selectGroup",{id:l})}const a=l=>o(l.id);return i.$$set=l=>{"groupList"in l&&t(0,n=l.groupList)},[n,r,o,a]}class ir extends te{constructor(e){super(),ee(this,e,Xa,Ka,Z,{groupList:0})}}function Vn(i){let e,t,n,s;return{c(){e=b("wired-listbox"),t=b("wired-item"),t.textContent="Log out",S(t,"class","blah-main-menubar__user-menu--item"),S(t,"value","log out"),S(e,"selected","two"),S(e,"class","blah-main-menubar__user-menu svelte-1ff5yy2"),oe(e,"--wired-item-selected-color","white"),oe(e,"--wired-item-selected-bg","grey")},m(r,o){w(r,e,o),v(e,t),n||(s=ae(t,"click",i[3]),n=!0)},p:M,d(r){r&&y(e),n=!1,s()}}}function Za(i){let e,t,n,s,r,o,a=i[0].name+"",l,c,u,d,h,f,g;s=new ki({props:{image:{src:i[0].avatar,alt:i[0].name}}});let x=i[1]&&Vn(i);return{c(){e=b("wired-card"),t=b("div"),n=b("div"),P(s.$$.fragment),r=A(),o=b("p"),l=K(a),c=A(),u=b("p"),d=A(),x&&x.c(),$(n,"class","blah-main-menubar__avatar svelte-1ff5yy2"),$(t,"class","blah-main-menubar__container svelte-1ff5yy2"),S(e,"elevation","2"),S(e,"class","blah-main-menubar svelte-1ff5yy2")},m(p,_){w(p,e,_),v(e,t),v(t,n),E(s,n,null),v(t,r),v(t,o),v(o,l),v(t,c),v(t,u),v(t,d),x&&x.m(t,null),h=!0,f||(g=ae(n,"click",i[2]),f=!0)},p(p,[_]){const C={};_&1&&(C.image={src:p[0].avatar,alt:p[0].name}),s.$set(C),(!h||_&1)&&a!==(a=p[0].name+"")&&Ce(l,a),p[1]?x?x.p(p,_):(x=Vn(p),x.c(),x.m(t,null)):x&&(x.d(1),x=null)},i(p){h||(k(s.$$.fragment,p),h=!0)},o(p){R(s.$$.fragment,p),h=!1},d(p){p&&y(e),j(s),x&&x.d(),f=!1,g()}}}function Qa(i,e,t){let{user:n={}}=e,s=!1;const r=()=>t(1,s=!s),o=()=>ye.flushCurrentUser();return i.$$set=a=>{"user"in a&&t(0,n=a.user)},[n,s,r,o]}class nr extends te{constructor(e){super(),ee(this,e,Qa,Za,Z,{user:0})}}function qn(i,e,t){const n=i.slice();return n[4]=e[t],n}function Yn(i){let e,t,n,s=i[4].name+"",r,o,a,l,c,u;t=new ki({props:{image:{src:i[4].avatar,alt:i[4].name}}});function d(){return i[2](i[4])}return{c(){e=b("wired-item"),P(t.$$.fragment),n=K(`\xA0\r
      `),r=K(s),o=A(),S(e,"class","blah-contact-list__listbox--item svelte-6msgne"),S(e,"value",a=i[4].id)},m(h,f){w(h,e,f),E(t,e,null),v(e,n),v(e,r),v(e,o),l=!0,c||(u=ae(e,"click",d),c=!0)},p(h,f){i=h;const g={};f&1&&(g.image={src:i[4].avatar,alt:i[4].name}),t.$set(g),(!l||f&1)&&s!==(s=i[4].name+"")&&Ce(r,s),(!l||f&1&&a!==(a=i[4].id))&&S(e,"value",a)},i(h){l||(k(t.$$.fragment,h),l=!0)},o(h){R(t.$$.fragment,h),l=!1},d(h){h&&y(e),j(t),c=!1,u()}}}function Ja(i){let e,t,n=i[0],s=[];for(let o=0;o<n.length;o+=1)s[o]=Yn(qn(i,n,o));const r=o=>R(s[o],1,1,()=>{s[o]=null});return{c(){e=b("wired-listbox");for(let o=0;o<s.length;o+=1)s[o].c();S(e,"selected","two"),S(e,"class","blah-contact-list__listbox svelte-6msgne"),oe(e,"--wired-item-selected-color","white"),oe(e,"--wired-item-selected-bg","grey")},m(o,a){w(o,e,a);for(let l=0;l<s.length;l+=1)s[l].m(e,null);t=!0},p(o,[a]){if(a&3){n=o[0];let l;for(l=0;l<n.length;l+=1){const c=qn(o,n,l);s[l]?(s[l].p(c,a),k(s[l],1)):(s[l]=Yn(c),s[l].c(),k(s[l],1),s[l].m(e,null))}for(be(),l=n.length;l<s.length;l+=1)r(l);ve()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)k(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)R(s[a]);t=!1},d(o){o&&y(e),Pt(s,o)}}}function el(i,e,t){let{contactList:n}=e;const s=Fe();function r(a){s("selectContact",{contact:a})}const o=a=>r(a);return i.$$set=a=>{"contactList"in a&&t(0,n=a.contactList)},[n,r,o]}class sr extends te{constructor(e){super(),ee(this,e,el,Ja,Z,{contactList:0})}}function Kn(i,e,t){const n=i.slice();return n[13]=e[t],n[15]=t,n}function Xn(i){let e;return{c(){e=K("Add members to the list...")},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function Zn(i){let e;return{c(){e=b("span"),e.textContent=",\xA0"},m(t,n){w(t,e,n)},d(t){t&&y(e)}}}function Qn(i){let e=i[13].name+"",t,n,s,r=i[15]<i[4].length-1&&Zn();return{c(){t=K(e),n=A(),r&&r.c(),s=We()},m(o,a){w(o,t,a),w(o,n,a),r&&r.m(o,a),w(o,s,a)},p(o,a){a&16&&e!==(e=o[13].name+"")&&Ce(t,e),o[15]<o[4].length-1?r||(r=Zn(),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},d(o){o&&y(t),o&&y(n),r&&r.d(o),o&&y(s)}}}function tl(i){let e,t,n,s,r,o,a,l,c,u,d,h,f,g,x,p=i[4],_=[];for(let O=0;O<p.length;O+=1)_[O]=Qn(Kn(i,p,O));let C=null;return p.length||(C=Xn()),u=new sr({props:{contactList:i[0]}}),u.$on("selectContact",i[10]),{c(){e=b("div"),t=b("wired-input"),n=A(),s=b("wired-input"),r=A(),o=b("wired-input"),a=A(),l=b("p");for(let O=0;O<_.length;O+=1)_[O].c();C&&C.c(),c=A(),P(u.$$.fragment),d=A(),h=b("wired-button"),h.textContent="Create",S(t,"class","blah-new-group__name svelte-z2m5ki"),S(t,"placeholder","Enter name"),S(s,"class","blah-new-group__description svelte-z2m5ki"),S(s,"placeholder","Enter description"),S(o,"class","blah-new-group__avatar svelte-z2m5ki"),S(o,"placeholder","Enter avatar url"),$(e,"class","blah-new-group svelte-z2m5ki")},m(O,z){w(O,e,z),v(e,t),i[7](t),v(e,n),v(e,s),i[8](s),v(e,r),v(e,o),i[9](o),v(e,a),v(e,l);for(let H=0;H<_.length;H+=1)_[H].m(l,null);C&&C.m(l,null),v(e,c),E(u,e,null),v(e,d),v(e,h),f=!0,g||(x=ae(h,"click",i[11]),g=!0)},p(O,[z]){if(z&16){p=O[4];let D;for(D=0;D<p.length;D+=1){const re=Kn(O,p,D);_[D]?_[D].p(re,z):(_[D]=Qn(re),_[D].c(),_[D].m(l,null))}for(;D<_.length;D+=1)_[D].d(1);_.length=p.length,p.length?C&&(C.d(1),C=null):C||(C=Xn(),C.c(),C.m(l,null))}const H={};z&1&&(H.contactList=O[0]),u.$set(H)},i(O){f||(k(u.$$.fragment,O),f=!0)},o(O){R(u.$$.fragment,O),f=!1},d(O){O&&y(e),i[7](null),i[8](null),i[9](null),Pt(_,O),C&&C.d(),j(u),g=!1,x()}}}function il(i,e,t){let{contacts:n=[]}=e;const s=Fe();let r,o,a,l=[];function c(p){const _=!l.some(C=>C.id===p.id);t(4,l=_?[...l,p]:l),t(4,l)}function u(){const p={name:r.value||"",description:o.value||"",avatar:a.value||"",groupType:"group",lastMessage:"",members:[...l]};s("newGroup",p)}function d(p){Ie[p?"unshift":"push"](()=>{r=p,t(1,r)})}function h(p){Ie[p?"unshift":"push"](()=>{o=p,t(2,o)})}function f(p){Ie[p?"unshift":"push"](()=>{a=p,t(3,a)})}const g=p=>c(p.detail.contact),x=p=>u();return i.$$set=p=>{"contacts"in p&&t(0,n=p.contacts)},[n,r,o,a,l,c,u,d,h,f,g,x]}class nl extends te{constructor(e){super(),ee(this,e,il,tl,Z,{contacts:0})}}function sl(i){let e,t,n,s,r,o;return{c(){e=b("div"),t=b("wired-input"),n=A(),s=b("wired-button"),s.textContent="Create",S(t,"class","blah-new-contact__name svelte-1himpxv"),S(t,"placeholder","Enter contact id"),$(e,"class","blah-new-contact svelte-1himpxv")},m(a,l){w(a,e,l),v(e,t),i[2](t),v(e,n),v(e,s),r||(o=ae(s,"click",i[3]),r=!0)},p:M,i:M,o:M,d(a){a&&y(e),i[2](null),r=!1,o()}}}function rl(i,e,t){const n=Fe();let s;function r(){n("newContact",s.value)}function o(l){Ie[l?"unshift":"push"](()=>{s=l,t(0,s)})}return[s,r,o,l=>r()]}class ol extends te{constructor(e){super(),ee(this,e,rl,sl,Z,{})}}function al(i){let e,t;return e=new ol({}),e.$on("newContact",i[10]),{c(){P(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p:M,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function ll(i){let e,t;return e=new nl({props:{contacts:i[2]}}),e.$on("newGroup",i[9]),{c(){P(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&4&&(r.contacts=n[2]),e.$set(r)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function cl(i){let e,t,n,s,r,o;return n=new sr({props:{contactList:i[2]}}),n.$on("selectContact",i[8]),{c(){e=b("wired-button"),e.innerHTML=`<div class="blah-new__card-content svelte-y0753p"><wired-icon-button><mwc-icon>group</mwc-icon></wired-icon-button> 
        <p class="svelte-y0753p">New group</p></div>`,t=A(),P(n.$$.fragment),S(e,"elevation","2"),S(e,"class","blah-new__new-group-button svelte-y0753p")},m(a,l){w(a,e,l),w(a,t,l),E(n,a,l),s=!0,r||(o=ae(e,"click",i[7]),r=!0)},p(a,l){const c={};l&4&&(c.contactList=a[2]),n.$set(c)},i(a){s||(k(n.$$.fragment,a),s=!0)},o(a){R(n.$$.fragment,a),s=!1},d(a){a&&y(e),a&&y(t),j(n,a),r=!1,o()}}}function ul(i){let e,t,n,s,r,o,a,l,c,u;const d=[cl,ll,al],h=[];function f(g,x){return g[0]||g[1]?g[0]?1:g[1]?2:-1:0}return~(o=f(i))&&(a=h[o]=d[o](i)),{c(){e=b("wired-card"),t=b("wired-icon-button"),t.innerHTML="<mwc-icon>arrow_back</mwc-icon>",n=K(`\r
  New Chat\r
  `),s=b("br"),r=A(),a&&a.c(),S(t,"class","blah-new__back-button svelte-y0753p"),S(e,"elevation","2"),S(e,"class","blah-new svelte-y0753p")},m(g,x){w(g,e,x),v(e,t),v(e,n),v(e,s),v(e,r),~o&&h[o].m(e,null),l=!0,c||(u=ae(t,"click",i[3]),c=!0)},p(g,[x]){let p=o;o=f(g),o===p?~o&&h[o].p(g,x):(a&&(be(),R(h[p],1,1,()=>{h[p]=null}),ve()),~o?(a=h[o],a?a.p(g,x):(a=h[o]=d[o](g),a.c()),k(a,1),a.m(e,null)):a=null)},i(g){l||(k(a),l=!0)},o(g){R(a),l=!1},d(g){g&&y(e),~o&&h[o].d(),c=!1,u()}}}function dl(i,e,t){let n,s,r;W(i,Ve,_=>t(11,n=_)),W(i,ct,_=>t(12,s=_)),W(i,ui,_=>t(2,r=_));const o=Fe();let a=!1,l=!1;function c(){a||l?(t(0,a=!1),t(1,l=!1)):o("navigateTo",{})}function u(_){let C=s.find(O=>O.members[_.id]&&Object.keys(O.members).length<=2);if(!C){const O=`${n.id}`,z=`${_.id}`,H={avatar:_.avatar,description:"private chat",groupType:"dialog",lastMessage:"",members:{[O]:"admin",[z]:"admin"},name:_.name};C=ye.newGroup(H)}o("navigateTo",{id:C.id})}function d(_){t(0,a=!1);const C=ye.newGroup(_);o("navigateTo",{id:C.id})}function h(_){t(1,l=!1),ye.newContact(_),o("navigateTo",{})}return[a,l,r,c,u,d,h,()=>t(0,a=!0),_=>u(_.detail.contact),_=>d(_.detail),_=>h(_.detail)]}class rr extends te{constructor(e){super(),ee(this,e,dl,ul,Z,{})}}function hl(i){let e,t;return e=new ir({props:{groupList:i[2]}}),e.$on("newGroup",i[6]),e.$on("selectGroup",i[7]),{c(){P(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&4&&(r.groupList=n[2]),e.$set(r)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function fl(i){let e,t;return e=new rr({}),e.$on("navigateTo",i[5]),{c(){P(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p:M,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function pl(i){let e,t,n,s,r,o,a;t=new nr({props:{user:i[1]}});const l=[fl,hl],c=[];function u(d,h){return d[0]?0:1}return r=u(i),o=c[r]=l[r](i),{c(){e=b("div"),P(t.$$.fragment),n=A(),s=b("div"),o.c(),$(e,"class","blah-left-top svelte-1m5b8bi"),$(s,"class","blah-left-middle svelte-1m5b8bi")},m(d,h){w(d,e,h),E(t,e,null),w(d,n,h),w(d,s,h),c[r].m(s,null),a=!0},p(d,[h]){const f={};h&2&&(f.user=d[1]),t.$set(f);let g=r;r=u(d),r===g?c[r].p(d,h):(be(),R(c[g],1,1,()=>{c[g]=null}),ve(),o=c[r],o?o.p(d,h):(o=c[r]=l[r](d),o.c()),k(o,1),o.m(s,null))},i(d){a||(k(t.$$.fragment,d),k(o),a=!0)},o(d){R(t.$$.fragment,d),R(o),a=!1},d(d){d&&y(e),j(t),d&&y(n),d&&y(s),c[r].d()}}}function gl(i,e,t){let n,s;W(i,Ve,d=>t(1,n=d)),W(i,ct,d=>t(2,s=d));let r=!1;ri(async()=>{ye.fetchData(n.id)});function o(d){ye.setCurrentGroup(d),Be(`/group/${d}`)}function a(d){t(0,r=!1),d&&o(d)}return[r,n,s,o,a,d=>a(d.detail.id),()=>t(0,r=!0),d=>o(d.detail.id)]}class ml extends te{constructor(e){super(),ee(this,e,gl,pl,Z,{})}}function Jn(i){let e,t,n;return{c(){e=b("mwc-icon"),e.textContent="arrow_back",S(e,"class","blah-group-menubar__icon svelte-at9cil")},m(s,r){w(s,e,r),t||(n=ae(e,"click",i[3]),t=!0)},p:M,d(s){s&&y(e),t=!1,n()}}}function bl(i){let e,t,n,s,r=i[0].name+"",o,a,l,c,u,d,h,f,g,x,p,_,C,O,z,H,D,re,pe=i[0].name+"",de,le,L,Ke,G=i[1]&&Jn(i);return H=new ki({props:{image:{src:i[0].avatar,alt:i[0].name}}}),{c(){e=b("wired-dialog"),t=b("div"),n=b("div"),s=b("h3"),o=K(r),a=A(),l=b("div"),c=b("img"),h=A(),f=b("div"),g=b("wired-button"),g.textContent="Close",x=A(),p=b("wired-card"),_=b("div"),G&&G.c(),C=A(),O=b("div"),z=b("div"),P(H.$$.fragment),D=A(),re=b("p"),de=K(pe),Xt(c.src,u=i[0].avatar)||$(c,"src",u),$(c,"alt",d=i[0].name),oe(c,"max-height","35vh"),oe(c,"width","100%"),S(g,"id","closeDialog"),oe(f,"width","100%"),oe(f,"text-align","center"),$(t,"class","blah-group-menubar__group-infos svelte-at9cil"),S(e,"open",i[2]),$(z,"class","blah-group-menubar__avatar svelte-at9cil"),$(re,"class","svelte-at9cil"),$(O,"class","blah-group-menubar__infos svelte-at9cil"),$(O,"title","Group infos"),$(_,"class","blah-group-menubar__container svelte-at9cil"),S(p,"elevation","2"),S(p,"class","blah-group-menubar svelte-at9cil")},m(I,he){w(I,e,he),v(e,t),v(t,n),v(n,s),v(s,o),v(t,a),v(t,l),v(l,c),v(t,h),v(t,f),v(f,g),w(I,x,he),w(I,p,he),v(p,_),G&&G.m(_,null),v(_,C),v(_,O),v(O,z),E(H,z,null),v(O,D),v(O,re),v(re,de),le=!0,L||(Ke=[ae(g,"click",i[4]),ae(O,"click",i[4])],L=!0)},p(I,[he]){(!le||he&1)&&r!==(r=I[0].name+"")&&Ce(o,r),(!le||he&1&&!Xt(c.src,u=I[0].avatar))&&$(c,"src",u),(!le||he&1&&d!==(d=I[0].name))&&$(c,"alt",d),(!le||he&4)&&S(e,"open",I[2]),I[1]?G?G.p(I,he):(G=Jn(I),G.c(),G.m(_,C)):G&&(G.d(1),G=null);const gt={};he&1&&(gt.image={src:I[0].avatar,alt:I[0].name}),H.$set(gt),(!le||he&1)&&pe!==(pe=I[0].name+"")&&Ce(de,pe)},i(I){le||(k(H.$$.fragment,I),le=!0)},o(I){R(H.$$.fragment,I),le=!1},d(I){I&&y(e),I&&y(x),I&&y(p),G&&G.d(),j(H),L=!1,Pe(Ke)}}}function vl(i,e,t){let{group:n}=e,{isMobile:s=!1}=e,r=!1;const o=Fe();function a(){o("navigateBack",{})}function l(){t(2,r=!r)}return i.$$set=c=>{"group"in c&&t(0,n=c.group),"isMobile"in c&&t(1,s=c.isMobile)},[n,s,r,a,l]}class or extends te{constructor(e){super(),ee(this,e,vl,bl,Z,{group:0,isMobile:1})}}function es(i,e,t){const n=i.slice();return n[4]=e[t],n}function ts(i){let e,t,n,s=(i[4].user.name===i[1].name?"Me":i[4].user.name)+"",r,o,a,l=i[4].message+"",c,u,d;return{c(){e=b("div"),t=b("p"),n=b("u"),r=K(s),o=A(),a=b("wired-card"),c=K(l),u=A(),$(n,"class","svelte-1021o8k"),$(t,"class","svelte-1021o8k"),$(e,"class",d=bn(i[4].user.name===i[1].name?"blah-chat__message-self":"blah-chat__message-other")+" svelte-1021o8k")},m(h,f){w(h,e,f),v(e,t),v(t,n),v(n,r),v(e,o),v(e,a),v(a,c),v(e,u)},p(h,f){f&3&&s!==(s=(h[4].user.name===h[1].name?"Me":h[4].user.name)+"")&&Ce(r,s),f&1&&l!==(l=h[4].message+"")&&Ce(c,l),f&3&&d!==(d=bn(h[4].user.name===h[1].name?"blah-chat__message-self":"blah-chat__message-other")+" svelte-1021o8k")&&$(e,"class",d)},d(h){h&&y(e)}}}function _l(i){let e,t,n,s=i[0].messages,r=[];for(let o=0;o<s.length;o+=1)r[o]=ts(es(i,s,o));return{c(){e=b("div"),t=b("p"),t.textContent="Start of the conversation",n=A();for(let o=0;o<r.length;o+=1)r[o].c();$(t,"class","blah-chat__intro svelte-1021o8k"),$(e,"class","blah-chat svelte-1021o8k")},m(o,a){w(o,e,a),v(e,t),v(e,n);for(let l=0;l<r.length;l+=1)r[l].m(e,null);i[3](e)},p(o,[a]){if(a&3){s=o[0].messages;let l;for(l=0;l<s.length;l+=1){const c=es(o,s,l);r[l]?r[l].p(c,a):(r[l]=ts(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},i:M,o:M,d(o){o&&y(e),Pt(r,o),i[3](null)}}}function yl(i,e,t){let{chat:n}=e,{currentUser:s}=e,r;mr(()=>{r&&!(r.offsetHeight+r.scrollTop>r.scrollHeight-1)&&setTimeout(()=>{t(2,r.scrollTop=r.scrollHeight,r)},1)});function o(a){Ie[a?"unshift":"push"](()=>{r=a,t(2,r)})}return i.$$set=a=>{"chat"in a&&t(0,n=a.chat),"currentUser"in a&&t(1,s=a.currentUser)},[n,s,r,o]}class ar extends te{constructor(e){super(),ee(this,e,yl,_l,Z,{chat:0,currentUser:1})}}function wl(i){let e,t,n,s,r,o,a,l;return{c(){e=b("wired-card"),t=b("span"),n=b("wired-input"),s=A(),r=b("span"),o=b("wired-icon-button"),o.innerHTML="<mwc-icon>send</mwc-icon>",S(n,"class","blah-message-input__message--input svelte-1pvx6wr"),S(n,"placeholder","Enter message..."),S(n,"value",i[0]),$(t,"class","blah-message-input__message"),$(r,"class","blah-message-input__send"),S(e,"elevation","2"),S(e,"class","blah-message-input svelte-1pvx6wr")},m(c,u){w(c,e,u),v(e,t),v(t,n),v(e,s),v(e,r),v(r,o),a||(l=[ae(n,"input",i[2]),ae(o,"click",i[1])],a=!0)},p(c,[u]){u&1&&S(n,"value",c[0])},i:M,o:M,d(c){c&&y(e),a=!1,Pe(l)}}}function $l(i,e,t){const n=Fe();let s="";function r(a){n("newMessage",{message:s}),t(0,s="")}return[s,r,a=>t(0,s=a.target.value)]}class lr extends te{constructor(e){super(),ee(this,e,$l,wl,Z,{})}}function kl(i){let e,t,n,s,r,o,a,l,c;return t=new or({props:{group:i[0],isMobile:!1}}),t.$on("openGroupInfos",i[4]),r=new ar({props:{chat:i[2],currentUser:i[1]}}),l=new lr({}),l.$on("newMessage",i[5]),{c(){e=b("div"),P(t.$$.fragment),n=A(),s=b("div"),P(r.$$.fragment),o=A(),a=b("div"),P(l.$$.fragment),$(e,"class","blah-center-top svelte-yu0gqn"),$(s,"class","blah-center-middle svelte-yu0gqn"),$(a,"class","blah-center-bottom svelte-yu0gqn")},m(u,d){w(u,e,d),E(t,e,null),w(u,n,d),w(u,s,d),E(r,s,null),w(u,o,d),w(u,a,d),E(l,a,null),c=!0},p(u,d){const h={};d&1&&(h.group=u[0]),t.$set(h);const f={};d&4&&(f.chat=u[2]),d&2&&(f.currentUser=u[1]),r.$set(f)},i(u){c||(k(t.$$.fragment,u),k(r.$$.fragment,u),k(l.$$.fragment,u),c=!0)},o(u){R(t.$$.fragment,u),R(r.$$.fragment,u),R(l.$$.fragment,u),c=!1},d(u){u&&y(e),j(t),u&&y(n),u&&y(s),j(r),u&&y(o),u&&y(a),j(l)}}}function Rl(i){let e=Be("/")+"",t;return{c(){t=K(e)},m(n,s){w(n,t,s)},p:M,i:M,o:M,d(n){n&&y(t)}}}function xl(i){let e,t,n,s;const r=[Rl,kl],o=[];function a(l,c){return l[0].id?1:0}return e=a(i),t=o[e]=r[e](i),{c(){t.c(),n=We()},m(l,c){o[e].m(l,c),w(l,n,c),s=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(be(),R(o[u],1,1,()=>{o[u]=null}),ve(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),k(t,1),t.m(n.parentNode,n))},i(l){s||(k(t),s=!0)},o(l){R(t),s=!1},d(l){o[e].d(l),l&&y(n)}}}function Sl(i){let e,t;return e=new Ui({props:{path:"/group/:id",primary:!1,$$slots:{default:[xl,({params:n})=>({6:n}),({params:n})=>n?64:0]},$$scope:{ctx:i}}}),{c(){P(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,[s]){const r={};s&135&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function Cl(i,e,t){let n,s,r;W(i,Xi,c=>t(0,n=c)),W(i,Ve,c=>t(1,s=c)),W(i,di,c=>t(2,r=c));function o(c){const u={id:"",message:c,timestamp:1,user:s};ye.newMessage(n.id,u)}return[n,s,r,o,()=>console.log("open group infos"),c=>o(c.detail.message)]}class cr extends te{constructor(e){super(),ee(this,e,Cl,Sl,Z,{})}}function Ol(i){let e,t,n;return{c(){e=b("div"),e.innerHTML='<wired-card elevation="2" class="right-card"><p>Right menu</p></wired-card>',t=A(),n=b("div"),n.innerHTML='<wired-card elevation="2" class="blah-right-middle__card svelte-1us4vh9"><p>Right zone</p></wired-card>',$(e,"class","blah-right-top svelte-1us4vh9"),$(n,"class","blah-right-middle svelte-1us4vh9")},m(s,r){w(s,e,r),w(s,t,r),w(s,n,r)},p:M,i:M,o:M,d(s){s&&y(e),s&&y(t),s&&y(n)}}}class Al extends te{constructor(e){super(),ee(this,e,null,Ol,Z,{})}}function Tl(i){let e,t;return e=new ir({props:{groupList:i[3]}}),e.$on("newGroup",i[9]),e.$on("selectGroup",i[10]),{c(){P(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p(n,s){const r={};s&8&&(r.groupList=n[3]),e.$set(r)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function Ml(i){let e,t;return e=new rr({}),e.$on("navigateTo",i[8]),{c(){P(e.$$.fragment)},m(n,s){E(e,n,s),t=!0},p:M,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function El(i){let e,t,n,s,r,o,a;t=new nr({props:{user:i[2]}});const l=[Ml,Tl],c=[];function u(d,h){return d[0]?0:1}return r=u(i),o=c[r]=l[r](i),{c(){e=b("div"),P(t.$$.fragment),n=A(),s=b("div"),o.c(),$(e,"class","blah-mobile-top svelte-40e048"),$(s,"class","blah-mobile-middle-bottom svelte-40e048")},m(d,h){w(d,e,h),E(t,e,null),w(d,n,h),w(d,s,h),c[r].m(s,null),a=!0},p(d,h){const f={};h&4&&(f.user=d[2]),t.$set(f);let g=r;r=u(d),r===g?c[r].p(d,h):(be(),R(c[g],1,1,()=>{c[g]=null}),ve(),o=c[r],o?o.p(d,h):(o=c[r]=l[r](d),o.c()),k(o,1),o.m(s,null))},i(d){a||(k(t.$$.fragment,d),k(o),a=!0)},o(d){R(t.$$.fragment,d),R(o),a=!1},d(d){d&&y(e),j(t),d&&y(n),d&&y(s),c[r].d()}}}function jl(i){let e,t,n,s,r,o,a,l,c;return t=new or({props:{group:i[1],isMobile:!0}}),t.$on("navigateBack",i[11]),r=new ar({props:{chat:i[4],currentUser:i[2]}}),l=new lr({}),l.$on("newMessage",i[12]),{c(){e=b("div"),P(t.$$.fragment),n=A(),s=b("div"),P(r.$$.fragment),o=A(),a=b("div"),P(l.$$.fragment),$(e,"class","blah-mobile-top svelte-40e048"),$(s,"class","blah-mobile-middle svelte-40e048"),$(a,"class","blah-mobile-bottom svelte-40e048")},m(u,d){w(u,e,d),E(t,e,null),w(u,n,d),w(u,s,d),E(r,s,null),w(u,o,d),w(u,a,d),E(l,a,null),c=!0},p(u,d){const h={};d&2&&(h.group=u[1]),t.$set(h);const f={};d&16&&(f.chat=u[4]),d&4&&(f.currentUser=u[2]),r.$set(f)},i(u){c||(k(t.$$.fragment,u),k(r.$$.fragment,u),k(l.$$.fragment,u),c=!0)},o(u){R(t.$$.fragment,u),R(r.$$.fragment,u),R(l.$$.fragment,u),c=!1},d(u){u&&y(e),j(t),u&&y(n),u&&y(s),j(r),u&&y(o),u&&y(a),j(l)}}}function Pl(i){let e=Be("/")+"",t;return{c(){t=K(e)},m(n,s){w(n,t,s)},p:M,i:M,o:M,d(n){n&&y(t)}}}function Ll(i){let e,t,n,s;const r=[Pl,jl],o=[];function a(l,c){return l[1].id?1:0}return e=a(i),t=o[e]=r[e](i),{c(){t.c(),n=We()},m(l,c){o[e].m(l,c),w(l,n,c),s=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(be(),R(o[u],1,1,()=>{o[u]=null}),ve(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),k(t,1),t.m(n.parentNode,n))},i(l){s||(k(t),s=!0)},o(l){R(t),s=!1},d(l){o[e].d(l),l&&y(n)}}}function zl(i){let e,t,n,s;return e=new Ui({props:{path:"/",primary:!1,$$slots:{default:[El,({params:r})=>({13:r}),({params:r})=>r?8192:0]},$$scope:{ctx:i}}}),n=new Ui({props:{path:"/group/:id",primary:!1,$$slots:{default:[Ll,({params:r})=>({13:r}),({params:r})=>r?8192:0]},$$scope:{ctx:i}}}),{c(){P(e.$$.fragment),t=A(),P(n.$$.fragment)},m(r,o){E(e,r,o),w(r,t,o),E(n,r,o),s=!0},p(r,[o]){const a={};o&16397&&(a.$$scope={dirty:o,ctx:r}),e.$set(a);const l={};o&16406&&(l.$$scope={dirty:o,ctx:r}),n.$set(l)},i(r){s||(k(e.$$.fragment,r),k(n.$$.fragment,r),s=!0)},o(r){R(e.$$.fragment,r),R(n.$$.fragment,r),s=!1},d(r){j(e,r),r&&y(t),j(n,r)}}}function Il(i,e,t){let n,s,r,o;W(i,Xi,p=>t(1,n=p)),W(i,Ve,p=>t(2,s=p)),W(i,ct,p=>t(3,r=p)),W(i,di,p=>t(4,o=p));let a=!1;ri(async()=>{ye.fetchData(s.id)});function l(p){ye.setCurrentGroup(p),Be(`/group/${p}`)}function c(p){t(0,a=!1),p&&l(p)}function u(p){const _={id:"",message:p,timestamp:1,user:s};ye.newMessage(n.id,_)}return[a,n,s,r,o,l,c,u,p=>c(p.detail.id),()=>t(0,a=!0),p=>l(p.detail.id),()=>Be("/"),p=>u(p.detail.message)]}class Nl extends te{constructor(e){super(),ee(this,e,Il,zl,Z,{})}}function is(i,e,t){const n=i.slice();return n[3]=e[t],n}function ns(i){let e,t=i[3]+"",n,s,r,o;function a(){return i[2](i[3])}return{c(){e=b("wired-item"),n=K(t),s=A(),S(e,"class","blah-login__listbox--item svelte-x10nsy"),S(e,"value",i[3])},m(l,c){w(l,e,c),v(e,n),v(e,s),r||(o=ae(e,"click",a),r=!0)},p(l,c){i=l},d(l){l&&y(e),r=!1,o()}}}function Bl(i){let e,t,n,s=i[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=ns(is(i,s,o));return{c(){e=b("wired-card"),t=K(`LOGIN\r
  `),n=b("wired-listbox");for(let o=0;o<r.length;o+=1)r[o].c();S(n,"class","blah-login__listbox svelte-x10nsy"),oe(n,"--wired-item-selected-color","white"),oe(n,"--wired-item-selected-bg","lightgrey"),S(e,"elevation","2"),S(e,"class","blah-login svelte-x10nsy")},m(o,a){w(o,e,a),v(e,t),v(e,n);for(let l=0;l<r.length;l+=1)r[l].m(n,null)},p(o,[a]){if(a&3){s=o[0];let l;for(l=0;l<s.length;l+=1){const c=is(o,s,l);r[l]?r[l].p(c,a):(r[l]=ns(c),r[l].c(),r[l].m(n,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},i:M,o:M,d(o){o&&y(e),Pt(r,o)}}}function Ul(i){let e=["usr1","usr2","usr3","usr4"];function t(s){ye.setCurrentUser(s)}return ri(async()=>{Be("/login")}),ds(()=>{Be("/")}),[e,t,s=>t(s)]}class Hl extends te{constructor(e){super(),ee(this,e,Ul,Bl,Z,{})}}function Dl(i){let e,t,n,s;const r=[Fl,Wl],o=[];function a(l,c){return l[0]?0:1}return t=a(i),n=o[t]=r[t](i),{c(){e=b("main"),n.c(),$(e,"class","svelte-8p1egm")},m(l,c){w(l,e,c),o[t].m(e,null),s=!0},p(l,c){let u=t;t=a(l),t===u?o[t].p(l,c):(be(),R(o[u],1,1,()=>{o[u]=null}),ve(),n=o[t],n?n.p(l,c):(n=o[t]=r[t](l),n.c()),k(n,1),n.m(e,null))},i(l){s||(k(n),s=!0)},o(l){R(n),s=!1},d(l){l&&y(e),o[t].d()}}}function Gl(i){let e,t,n,s;return n=new Hl({}),{c(){e=b("main"),t=b("div"),P(n.$$.fragment),$(t,"id","blah-layout"),$(t,"class","svelte-8p1egm"),$(e,"class","svelte-8p1egm")},m(r,o){w(r,e,o),v(e,t),E(n,t,null),s=!0},p:M,i(r){s||(k(n.$$.fragment,r),s=!0)},o(r){R(n.$$.fragment,r),s=!1},d(r){r&&y(e),j(n)}}}function Wl(i){let e,t,n,s,r,o,a;n=new ml({});const l=[ql,Vl],c=[];function u(d,h){return 1}return r=u(),o=c[r]=l[r](i),{c(){e=b("div"),t=b("div"),P(n.$$.fragment),s=A(),o.c(),$(t,"class","blah-layout-left svelte-8p1egm"),$(e,"id","blah-layout"),$(e,"class","svelte-8p1egm")},m(d,h){w(d,e,h),v(e,t),E(n,t,null),v(e,s),c[r].m(e,null),a=!0},p:M,i(d){a||(k(n.$$.fragment,d),k(o),a=!0)},o(d){R(n.$$.fragment,d),R(o),a=!1},d(d){d&&y(e),j(n),c[r].d()}}}function Fl(i){let e,t,n,s;return n=new Nl({}),{c(){e=b("div"),t=b("div"),P(n.$$.fragment),$(t,"class","blah-layout-mobile svelte-8p1egm"),$(e,"id","blah-layout"),$(e,"class","svelte-8p1egm")},m(r,o){w(r,e,o),v(e,t),E(n,t,null),s=!0},p:M,i(r){s||(k(n.$$.fragment,r),s=!0)},o(r){R(n.$$.fragment,r),s=!1},d(r){r&&y(e),j(n)}}}function Vl(i){let e,t,n;return t=new cr({}),{c(){e=b("div"),P(t.$$.fragment),$(e,"class","blah-layout-center-extended svelte-8p1egm")},m(s,r){w(s,e,r),E(t,e,null),n=!0},i(s){n||(k(t.$$.fragment,s),n=!0)},o(s){R(t.$$.fragment,s),n=!1},d(s){s&&y(e),j(t)}}}function ql(i){let e,t,n,s,r,o;return t=new cr({}),r=new Al({}),{c(){e=b("div"),P(t.$$.fragment),n=A(),s=b("div"),P(r.$$.fragment),$(e,"class","blah-layout-center svelte-8p1egm"),$(s,"class","blah-layout-right svelte-8p1egm")},m(a,l){w(a,e,l),E(t,e,null),w(a,n,l),w(a,s,l),E(r,s,null),o=!0},i(a){o||(k(t.$$.fragment,a),k(r.$$.fragment,a),o=!0)},o(a){R(t.$$.fragment,a),R(r.$$.fragment,a),o=!1},d(a){a&&y(e),j(t),a&&y(n),a&&y(s),j(r)}}}function Yl(i){let e,t,n,s;const r=[Gl,Dl],o=[];function a(l,c){return l[1].name?1:0}return e=a(i),t=o[e]=r[e](i),{c(){t.c(),n=We()},m(l,c){o[e].m(l,c),w(l,n,c),s=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(be(),R(o[u],1,1,()=>{o[u]=null}),ve(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),k(t,1),t.m(n.parentNode,n))},i(l){s||(k(t),s=!0)},o(l){R(t),s=!1},d(l){o[e].d(l),l&&y(n)}}}function Kl(i){let e,t,n,s,r,o;return r=new Bs({props:{$$slots:{default:[Yl]},$$scope:{ctx:i}}}),{c(){e=b("link"),t=A(),n=b("link"),s=A(),P(r.$$.fragment),$(e,"href","https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap"),$(e,"rel","stylesheet"),$(n,"href","https://fonts.googleapis.com/css?family=Material+Icons&display=block"),$(n,"rel","stylesheet")},m(a,l){w(a,e,l),w(a,t,l),w(a,n,l),w(a,s,l),E(r,a,l),o=!0},p(a,[l]){const c={};l&7&&(c.$$scope={dirty:l,ctx:a}),r.$set(c)},i(a){o||(k(r.$$.fragment,a),o=!0)},o(a){R(r.$$.fragment,a),o=!1},d(a){a&&y(e),a&&y(t),a&&y(n),a&&y(s),j(r,a)}}}function Xl(i,e,t){let n;W(i,Ve,r=>t(1,n=r));let s=window.innerWidth<700;return window.addEventListener("resize",()=>{t(0,s=window.innerWidth<700)}),[s,n]}class Zl extends te{constructor(e){super(),ee(this,e,Xl,Kl,Z,{})}}new Zl({target:document.getElementById("app")});
