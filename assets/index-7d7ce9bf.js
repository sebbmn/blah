(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function M(){}function Me(i,e){for(const t in e)i[t]=e[t];return i}function us(i){return i()}function _n(){return Object.create(null)}function ze(i){i.forEach(us)}function Yi(i){return typeof i=="function"}function Q(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let Kt;function Zt(i,e){return Kt||(Kt=document.createElement("a")),Kt.href=e,i===Kt.href}function _r(i){return Object.keys(i).length===0}function Ki(i,...e){if(i==null)return M;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function rt(i){let e;return Ki(i,t=>e=t)(),e}function G(i,e,t){i.$$.on_destroy.push(Ki(e,t))}function ds(i,e,t,n){if(i){const r=hs(i,e,t,n);return i[0](r)}}function hs(i,e,t,n){return i[1]&&n?Me(t.ctx.slice(),i[1](n(e))):t.ctx}function fs(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)s[l]=e.dirty[l]|r[l];return s}return e.dirty|r}return e.dirty}function ps(i,e,t,n,r,s){if(r){const o=hs(e,t,n,s);i.p(o,r)}}function gs(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function yn(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function wn(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function $n(i){return i??""}const yr=["",!0,1,"true","contenteditable"];function v(i,e){i.appendChild(e)}function w(i,e,t){i.insertBefore(e,t||null)}function _(i){i.parentNode&&i.parentNode.removeChild(i)}function Nt(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function b(i){return document.createElement(i)}function K(i){return document.createTextNode(i)}function A(){return K(" ")}function Ve(){return K("")}function ae(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function k(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}const wr=["width","height"];function Qt(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in e)e[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=e[n]:n==="__value"?i.value=i[n]=e[n]:t[n]&&t[n].set&&wr.indexOf(n)===-1?i[n]=e[n]:k(i,n,e[n])}function S(i,e,t){e in i?i[e]=typeof i[e]=="boolean"&&t===""?!0:t:k(i,e,t)}function $r(i){return Array.from(i.childNodes)}function Ce(i,e){e=""+e,i.data!==e&&(i.data=e)}function kr(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function Rr(i,e,t){~yr.indexOf(t)?kr(i,e):Ce(i,e)}function fe(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function xr(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(i,t,n,e),r}function kn(i,e){return new i(e)}let Ot;function xt(i){Ot=i}function ft(){if(!Ot)throw new Error("Function called outside component initialization");return Ot}function li(i){ft().$$.on_mount.push(i)}function Sr(i){ft().$$.after_update.push(i)}function ms(i){ft().$$.on_destroy.push(i)}function qe(){const i=ft();return(e,t,{cancelable:n=!1}={})=>{const r=i.$$.callbacks[e];if(r){const s=xr(e,t,{cancelable:n});return r.slice().forEach(o=>{o.call(i,s)}),!s.defaultPrevented}return!0}}function St(i,e){return ft().$$.context.set(i,e),e}function Ee(i){return ft().$$.context.get(i)}const et=[],Be=[];let nt=[];const Rn=[],bs=Promise.resolve();let Ii=!1;function vs(){Ii||(Ii=!0,bs.then(_s))}function Or(){return vs(),bs}function Ni(i){nt.push(i)}const Si=new Set;let Qe=0;function _s(){if(Qe!==0)return;const i=Ot;do{try{for(;Qe<et.length;){const e=et[Qe];Qe++,xt(e),Cr(e.$$)}}catch(e){throw et.length=0,Qe=0,e}for(xt(null),et.length=0,Qe=0;Be.length;)Be.pop()();for(let e=0;e<nt.length;e+=1){const t=nt[e];Si.has(t)||(Si.add(t),t())}nt.length=0}while(et.length);for(;Rn.length;)Rn.pop()();Ii=!1,Si.clear(),xt(i)}function Cr(i){if(i.fragment!==null){i.update(),ze(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Ni)}}function Ar(i){const e=[],t=[];nt.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),nt=e}const Xt=new Set;let Ne;function me(){Ne={r:0,c:[],p:Ne}}function be(){Ne.r||ze(Ne.c),Ne=Ne.p}function $(i,e){i&&i.i&&(Xt.delete(i),i.i(e))}function R(i,e,t,n){if(i&&i.o){if(Xt.has(i))return;Xt.add(i),Ne.c.push(()=>{Xt.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function Tr(i,e){const t={},n={},r={$$scope:1};let s=i.length;for(;s--;){const o=i[s],l=e[s];if(l){for(const a in o)a in l||(n[a]=1);for(const a in l)r[a]||(t[a]=l[a],r[a]=1);i[s]=l}else for(const a in o)r[a]=1}for(const o in n)o in t||(t[o]=void 0);return t}function xn(i){return typeof i=="object"&&i!==null?i:{}}function P(i){i&&i.c()}function E(i,e,t,n){const{fragment:r,after_update:s}=i.$$;r&&r.m(e,t),n||Ni(()=>{const o=i.$$.on_mount.map(us).filter(Yi);i.$$.on_destroy?i.$$.on_destroy.push(...o):ze(o),i.$$.on_mount=[]}),s.forEach(Ni)}function j(i,e){const t=i.$$;t.fragment!==null&&(Ar(t.after_update),ze(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Mr(i,e){i.$$.dirty[0]===-1&&(et.push(i),vs(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function te(i,e,t,n,r,s,o,l=[-1]){const a=Ot;xt(i);const c=i.$$={fragment:null,ctx:[],props:s,update:M,not_equal:r,bound:_n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:_n(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(d,h,...f)=>{const g=f.length?f[0]:h;return c.ctx&&r(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),u&&Mr(i,d)),h}):[],c.update(),u=!0,ze(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const d=$r(e.target);c.fragment&&c.fragment.l(d),d.forEach(_)}else c.fragment&&c.fragment.c();e.intro&&$(i.$$.fragment),E(i,e.target,e.anchor,e.customElement),_s()}xt(a)}class ie{$destroy(){j(this,1),this.$destroy=M}$on(e,t){if(!Yi(t))return M;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!_r(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/*! *****************************************************************************
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
***************************************************************************** */function Er(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zi=Symbol(),Sn=new Map;let ys=class{constructor(e,t){if(this._$cssResult$=!0,t!==Zi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Sn.get(this.cssText);return Xi&&e===void 0&&(Sn.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}};const jr=i=>new ys(typeof i=="string"?i:i+"",Zi),U=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new ys(t,Zi)},Pr=(i,e)=>{Xi?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=window.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},On=Xi?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return jr(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oi;const Cn=window.reactiveElementPolyfillSupport,Bi={toAttribute(i,e){switch(e){case Boolean:i=i?"":null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ws=(i,e)=>e!==i&&(e==e||i==i),Ci={attribute:!0,type:String,converter:Bi,reflect:!1,hasChanged:ws};let tt=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Eh(n,t);r!==void 0&&(this._$Eu.set(r,n),e.push(r))}),e}static createProperty(e,t=Ci){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ci}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(On(r))}else e!==void 0&&t.push(On(e));return t}static _$Eh(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Ep(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$Em)!==null&&t!==void 0?t:this._$Em=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$Em)===null||t===void 0||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Pr(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Em)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Em)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$Eg(e,t,n=Ci){var r,s;const o=this.constructor._$Eh(e,n);if(o!==void 0&&n.reflect===!0){const l=((s=(r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&s!==void 0?s:Bi.toAttribute)(t,n.type);this._$Ei=e,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Ei=null}}_$AK(e,t){var n,r,s;const o=this.constructor,l=o._$Eu.get(e);if(l!==void 0&&this._$Ei!==l){const a=o.getPropertyOptions(l),c=a.converter,u=(s=(r=(n=c)===null||n===void 0?void 0:n.fromAttribute)!==null&&r!==void 0?r:typeof c=="function"?c:null)!==null&&s!==void 0?s:Bi.fromAttribute;this._$Ei=l,this[l]=u(t,a.type),this._$Ei=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ws)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Ei!==e&&(this._$ES===void 0&&(this._$ES=new Map),this._$ES.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,s)=>this[s]=r),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$Em)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$Em)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){this._$ES!==void 0&&(this._$ES.forEach((t,n)=>this._$Eg(n,this[n],t)),this._$ES=void 0),this._$EU()}updated(e){}firstUpdated(e){}};tt.finalized=!0,tt.elementProperties=new Map,tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},Cn==null||Cn({ReactiveElement:tt}),((Oi=globalThis.reactiveElementVersions)!==null&&Oi!==void 0?Oi:globalThis.reactiveElementVersions=[]).push("1.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ai;const Jt=globalThis.trustedTypes,An=Jt?Jt.createPolicy("lit-html",{createHTML:i=>i}):void 0,Te=`lit$${(Math.random()+"").slice(9)}$`,$s="?"+Te,Lr=`<${$s}>`,ot=document,Ct=(i="")=>ot.createComment(i),At=i=>i===null||typeof i!="object"&&typeof i!="function",ks=Array.isArray,zr=i=>{var e;return ks(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tn=/-->/g,Mn=/>/g,Ie=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,En=/'/g,jn=/"/g,Rs=/^(?:script|style|textarea)$/i,Ir=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),B=Ir(1),lt=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),Pn=new WeakMap,Nr=(i,e,t)=>{var n,r;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=s._$litPart$;if(o===void 0){const l=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=o=new Bt(e.insertBefore(Ct(),l),l,void 0,t??{})}return o._$AI(i),o},st=ot.createTreeWalker(ot,129,null,!1),Br=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=yt;for(let a=0;a<t;a++){const c=i[a];let u,d,h=-1,f=0;for(;f<c.length&&(o.lastIndex=f,d=o.exec(c),d!==null);)f=o.lastIndex,o===yt?d[1]==="!--"?o=Tn:d[1]!==void 0?o=Mn:d[2]!==void 0?(Rs.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=Ie):d[3]!==void 0&&(o=Ie):o===Ie?d[0]===">"?(o=r??yt,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?Ie:d[3]==='"'?jn:En):o===jn||o===En?o=Ie:o===Tn||o===Mn?o=yt:(o=Ie,r=void 0);const g=o===Ie&&i[a+1].startsWith("/>")?" ":"";s+=o===yt?c+Lr:h>=0?(n.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+Te+g):c+Te+(h===-2?(n.push(void 0),a):g)}const l=s+(i[t]||"<?>")+(e===2?"</svg>":"");return[An!==void 0?An.createHTML(l):l,n]};class Tt{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[c,u]=Br(e,t);if(this.el=Tt.createElement(c,n),st.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(r=st.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const h of r.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(Te)){const f=u[o++];if(d.push(h),f!==void 0){const g=r.getAttribute(f.toLowerCase()+"$lit$").split(Te),x=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:x[2],strings:g,ctor:x[1]==="."?Hr:x[1]==="?"?Dr:x[1]==="@"?Gr:ai})}else a.push({type:6,index:s})}for(const h of d)r.removeAttribute(h)}if(Rs.test(r.tagName)){const d=r.textContent.split(Te),h=d.length-1;if(h>0){r.textContent=Jt?Jt.emptyScript:"";for(let f=0;f<h;f++)r.append(d[f],Ct()),st.nextNode(),a.push({type:2,index:++s});r.append(d[h],Ct())}}}else if(r.nodeType===8)if(r.data===$s)a.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(Te,d+1))!==-1;)a.push({type:7,index:s}),d+=Te.length-1}s++}}static createElement(e,t){const n=ot.createElement("template");return n.innerHTML=e,n}}function at(i,e,t=i,n){var r,s,o,l;if(e===lt)return e;let a=n!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[n]:t._$Cu;const c=At(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,t,n)),n!==void 0?((o=(l=t)._$Cl)!==null&&o!==void 0?o:l._$Cl=[])[n]=a:t._$Cu=a),a!==void 0&&(e=at(i,a._$AS(i,e.values),a,n)),e}class Ur{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ot).importNode(n,!0);st.currentNode=s;let o=st.nextNode(),l=0,a=0,c=r[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new Bt(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new Wr(o,this,e)),this.v.push(u),c=r[++a]}l!==(c==null?void 0:c.index)&&(o=st.nextNode(),l++)}return s}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Bt{constructor(e,t,n,r){var s;this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cg=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=at(this,e,t),At(e)?e===ee||e==null||e===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):e!==this._$AH&&e!==lt&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):zr(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==ee&&At(this._$AH)?this._$AA.nextSibling.data=e:this.S(ot.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Tt.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(n);else{const o=new Ur(s,this),l=o.p(this.options);o.m(n),this.S(l),this._$AH=o}}_$AC(e){let t=Pn.get(e.strings);return t===void 0&&Pn.set(e.strings,t=new Tt(e)),t}M(e){ks(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new Bt(this.A(Ct()),this.A(Ct()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ai{constructor(e,t,n,r,s){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ee}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=at(this,e,t,0),o=!At(e)||e!==this._$AH&&e!==lt,o&&(this._$AH=e);else{const l=e;let a,c;for(e=s[0],a=0;a<s.length-1;a++)c=at(this,l[n+a],t,a),c===lt&&(c=this._$AH[a]),o||(o=!At(c)||c!==this._$AH[a]),c===ee?e=ee:e!==ee&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}o&&!r&&this.k(e)}k(e){e===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Hr extends ai{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===ee?void 0:e}}class Dr extends ai{constructor(){super(...arguments),this.type=4}k(e){e&&e!==ee?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Gr extends ai{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=at(this,e,t,0))!==null&&n!==void 0?n:ee)===lt)return;const r=this._$AH,s=e===ee&&r!==ee||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==ee&&(r===ee||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Wr{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){at(this,e)}}const Ln=window.litHtmlPolyfillSupport;Ln==null||Ln(Tt,Bt),((Ai=globalThis.litHtmlVersions)!==null&&Ai!==void 0?Ai:globalThis.litHtmlVersions=[]).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ti,Mi;class Re extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Nr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return lt}}Re.finalized=!0,Re._$litElement$=!0,(Ti=globalThis.litElementHydrateSupport)===null||Ti===void 0||Ti.call(globalThis,{LitElement:Re});const zn=globalThis.litElementPolyfillSupport;zn==null||zn({LitElement:Re});((Mi=globalThis.litElementVersions)!==null&&Mi!==void 0?Mi:globalThis.litElementVersions=[]).push("3.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=i=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(o){window.customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fr=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function m(i){return(e,t)=>t!==void 0?((n,r,s)=>{r.constructor.createProperty(s,n)})(i,e,t):Fr(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vr(i){return m({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(o.finisher=function(l){i(l,s)}),o}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(s,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(i,e){return qr({descriptor:t=>{const n={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;n.get=function(){var s,o;return this[r]===void 0&&(this[r]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&o!==void 0?o:null),this[r]}}return n}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Yr=U`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ui=class extends Re{render(){return B`<span><slot></slot></span>`}};Ui.styles=[Yr];Ui=Er([H("mwc-icon")],Ui);const In=i=>typeof i>"u",Kr=i=>typeof i=="function",xs=i=>typeof i=="number";function Ss(){let i=0;return()=>i++}function Xr(){return Math.random().toString(36).substring(2)}const je=typeof window>"u";function Os(i,e,t){return i.addEventListener(e,t),()=>i.removeEventListener(e,t)}const Cs=(i,e)=>i?{}:{style:e},Hi=i=>({"aria-hidden":"true",...Cs(i,"display:none;")}),Je=[];function Zr(i,e){return{subscribe:oe(i,e).subscribe}}function oe(i,e=M){let t;const n=new Set;function r(l){if(Q(i,l)&&(i=l,t)){const a=!Je.length;for(const c of n)c[1](),Je.push(c,i);if(a){for(let c=0;c<Je.length;c+=2)Je[c][0](Je[c+1]);Je.length=0}}}function s(l){r(l(i))}function o(l,a=M){const c=[l,a];return n.add(c),n.size===1&&(t=e(r)||M),l(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function Qr(i,e,t){const n=!Array.isArray(i),r=n?[i]:i,s=e.length<2;return Zr(t,o=>{let l=!1;const a=[];let c=0,u=M;const d=()=>{if(c)return;u();const f=e(n?a[0]:a,o);s?o(f):u=Yi(f)?f:M},h=r.map((f,g)=>Ki(f,x=>{a[g]=x,c&=~(1<<g),l&&d()},()=>{c|=1<<g}));return l=!0,d(),function(){ze(h),u(),l=!1}})}const Ut=i=>`@@svnav-ctx__${i}`,Di=Ut("LOCATION"),ct=Ut("ROUTER"),As=Ut("ROUTE"),Jr=Ut("ROUTE_PARAMS"),eo=Ut("FOCUS_ELEM"),Ts=/^:(.+)/,$t=(i,e,t)=>i.substr(e,t),Nn=(i,e)=>$t(i,0,e.length)===e,to=i=>i==="",io=i=>Ts.test(i),Ms=i=>i[0]==="*",no=i=>i.replace(/\*.*$/,""),Es=i=>i.replace(/(^\/+|\/+$)/g,"");function xe(i,e=!1){const t=Es(i).split("/");return e?t.filter(Boolean):t}const Ei=(i,e)=>i+(e?`?${e}`:""),Qi=i=>`/${Es(i)}`;function Ht(...i){const e=n=>xe(n,!0).join("/"),t=i.map(e).join("/");return Qi(t)}const js=1,ci=2,Ue=3,so=4,Ps=5,ro=6,Ls=7,oo=8,lo=9,zs=10,Is=11,ao={[js]:"Link",[ci]:"Route",[Ue]:"Router",[so]:"useFocus",[Ps]:"useLocation",[ro]:"useMatch",[Ls]:"useNavigate",[oo]:"useParams",[lo]:"useResolvable",[zs]:"useResolve",[Is]:"navigate"},Ji=i=>ao[i];function co(i,e){let t;return i===ci?t=e.path?`path="${e.path}"`:"default":i===js?t=`to="${e.to}"`:i===Ue&&(t=`basepath="${e.basepath||""}"`),`<${Ji(i)} ${t||""} />`}function uo(i,e,t,n){const r=t&&co(n||i,t),s=r?`

Occurred in: ${r}`:"",o=Ji(i),l=Kr(e)?e(o):e;return`<${o}> ${l}${s}`}const Ns=i=>(...e)=>i(uo(...e)),Bs=Ns(i=>{throw new Error(i)}),ei=Ns(console.warn),Bn=4,ho=3,fo=2,po=1,go=1;function mo(i,e){const t=i.default?0:xe(i.fullPath).reduce((n,r)=>{let s=n;return s+=Bn,to(r)?s+=go:io(r)?s+=fo:Ms(r)?s-=Bn+po:s+=ho,s},0);return{route:i,score:t,index:e}}function bo(i){return i.map(mo).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function Us(i,e){let t,n;const[r]=e.split("?"),s=xe(r),o=s[0]==="",l=bo(i);for(let a=0,c=l.length;a<c;a++){const{route:u}=l[a];let d=!1;const h={},f=y=>({...u,params:h,uri:y});if(u.default){n=f(e);continue}const g=xe(u.fullPath),x=Math.max(s.length,g.length);let p=0;for(;p<x;p++){const y=g[p],O=s[p];if(!In(y)&&Ms(y)){const I=y==="*"?"*":y.slice(1);h[I]=s.slice(p).map(decodeURIComponent).join("/");break}if(In(O)){d=!0;break}const C=Ts.exec(y);if(C&&!o){const I=decodeURIComponent(O);h[C[1]]=I}else if(y!==O){d=!0;break}}if(!d){t=f(Ht(...s.slice(0,p)));break}}return t||n||null}function Hs(i,e){return Us([i],e)}function vo(i,e){if(Nn(i,"/"))return i;const[t,n]=i.split("?"),[r]=e.split("?"),s=xe(t),o=xe(r);if(s[0]==="")return Ei(r,n);if(!Nn(s[0],".")){const c=o.concat(s).join("/");return Ei((r==="/"?"":"/")+c,n)}const l=o.concat(s),a=[];return l.forEach(c=>{c===".."?a.pop():c!=="."&&a.push(c)}),Ei(`/${a.join("/")}`,n)}function Un(i,e){const{pathname:t,hash:n="",search:r="",state:s}=i,o=xe(e,!0),l=xe(t,!0);for(;o.length;)o[0]!==l[0]&&Bs(Ue,`Invalid state: All locations must begin with the basepath "${e}", found "${t}"`),o.shift(),l.shift();return{pathname:Ht(...l),hash:n,search:r,state:s}}const Hn=i=>i.length===1?"":i,Ds=i=>{const e=i.indexOf("?"),t=i.indexOf("#"),n=e!==-1,r=t!==-1,s=r?Hn($t(i,t)):"",o=r?$t(i,0,t):i,l=n?Hn($t(o,e)):"";return{pathname:(n?$t(o,0,e):o)||"/",search:l,hash:s}};function _o(i,e,t){return Ht(t,vo(i,e))}function yo(i,e){const t=Qi(no(i)),n=xe(t,!0),r=xe(e,!0).slice(0,n.length),s=Hs({fullPath:t},Ht(...r));return s&&s.uri}const ji="POP",wo="PUSH",$o="REPLACE";function Pi(i){return{...i.location,pathname:encodeURI(decodeURI(i.location.pathname)),state:i.history.state,_key:i.history.state&&i.history.state._key||"initial"}}function ko(i){let e=[],t=Pi(i),n=ji;const r=(s=e)=>s.forEach(o=>o({location:t,action:n}));return{get location(){return t},listen(s){e.push(s);const o=()=>{t=Pi(i),n=ji,r([s])};r([s]);const l=Os(i,"popstate",o);return()=>{l(),e=e.filter(a=>a!==s)}},navigate(s,o){const{state:l={},replace:a=!1}=o||{};if(n=a?$o:wo,xs(s))o&&ei(Is,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),n=ji,i.history.go(s);else{const c={...l,_key:Xr()};try{i.history[a?"replaceState":"pushState"](c,"",s)}catch{i.location[a?"replace":"assign"](s)}}t=Pi(i),r()}}}function Li(i,e){return{...Ds(e),state:i}}function Ro(i="/"){let e=0,t=[Li(null,i)];return{get entries(){return t},get location(){return t[e]},addEventListener(){},removeEventListener(){},history:{get state(){return t[e].state},pushState(n,r,s){e++,t=t.slice(0,e),t.push(Li(n,s))},replaceState(n,r,s){t[e]=Li(n,s)},go(n){const r=e+n;r<0||r>t.length-1||(e=r)}}}}const xo=!!(!je&&window.document&&window.document.createElement),So=!je&&window.location.origin==="null",Gs=ko(xo&&!So?window:Ro()),{navigate:He}=Gs;let Oe=null,Ws=!0;function Oo(i,e){const t=document.querySelectorAll("[data-svnav-router]");for(let n=0;n<t.length;n++){const r=t[n],s=Number(r.dataset.svnavRouter);if(s===i)return!0;if(s===e)return!1}return!1}function Co(i){(!Oe||i.level>Oe.level||i.level===Oe.level&&Oo(i.routerId,Oe.routerId))&&(Oe=i)}function Ao(){Oe=null}function To(){Ws=!1}function Dn(i){if(!i)return!1;const e="tabindex";try{if(!i.hasAttribute(e)){i.setAttribute(e,"-1");let t;t=Os(i,"blur",()=>{i.removeAttribute(e),t()})}return i.focus(),document.activeElement===i}catch{return!1}}function Mo(i,e){return Number(i.dataset.svnavRouteEnd)===e}function Eo(i){return/^H[1-6]$/i.test(i.tagName)}function Gn(i,e=document){return e.querySelector(i)}function jo(i){let t=Gn(`[data-svnav-route-start="${i}"]`).nextElementSibling;for(;!Mo(t,i);){if(Eo(t))return t;const n=Gn("h1,h2,h3,h4,h5,h6",t);if(n)return n;t=t.nextElementSibling}return null}function Po(i){Promise.resolve(rt(i.focusElement)).then(e=>{const t=e||jo(i.id);t||ei(Ue,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,i,ci),!Dn(t)&&Dn(document.documentElement)})}const Lo=(i,e,t)=>(n,r)=>Or().then(()=>{if(!Oe||Ws){To();return}if(n&&Po(Oe.route),i.announcements&&r){const{path:s,fullPath:o,meta:l,params:a,uri:c}=Oe.route,u=i.createAnnouncement({path:s,fullPath:o,meta:l,params:a,uri:c},rt(t));Promise.resolve(u).then(d=>{e.set(d)})}Ao()}),zo="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Io(i){let e,t,n=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},Cs(i[6],zo)],r={};for(let s=0;s<n.length;s+=1)r=Me(r,n[s]);return{c(){e=b("div"),t=K(i[0]),Qt(e,r)},m(s,o){w(s,e,o),v(e,t)},p(s,o){o[0]&1&&Rr(t,s[0],r.contenteditable)},d(s){s&&_(e)}}}function No(i){let e,t,n,r,s,o=[Hi(i[6]),{"data-svnav-router":i[3]}],l={};for(let d=0;d<o.length;d+=1)l=Me(l,o[d]);const a=i[22].default,c=ds(a,i,i[21],null);let u=i[2]&&i[4]&&i[1].announcements&&Io(i);return{c(){e=b("div"),t=A(),c&&c.c(),n=A(),u&&u.c(),r=Ve(),Qt(e,l)},m(d,h){w(d,e,h),w(d,t,h),c&&c.m(d,h),w(d,n,h),u&&u.m(d,h),w(d,r,h),s=!0},p(d,h){c&&c.p&&(!s||h[0]&2097152)&&ps(c,a,d,d[21],s?fs(a,d[21],h,null):gs(d[21]),null),d[2]&&d[4]&&d[1].announcements&&u.p(d,h)},i(d){s||($(c,d),s=!0)},o(d){R(c,d),s=!1},d(d){d&&_(e),d&&_(t),c&&c.d(d),d&&_(n),u&&u.d(d),d&&_(r)}}}const Bo=Ss(),Wn="/";function Uo(i,e,t){let n,r,s,o,l,{$$slots:a={},$$scope:c}=e,{basepath:u=Wn}=e,{url:d=null}=e,{history:h=Gs}=e,{primary:f=!0}=e,{a11y:g={}}=e,{disableInlineStyles:x=!1}=e;const p={createAnnouncement:T=>`Navigated to ${T.uri}`,announcements:!0,...g},y=u,O=Qi(u),C=Ee(Di),I=Ee(ct),z=!C,D=Bo(),le=f&&!(I&&!I.manageFocus),de=oe("");G(i,de,T=>t(0,l=T));const Se=I?I.disableInlineStyles:x,X=oe([]);G(i,X,T=>t(20,o=T));const $e=oe(null);G(i,$e,T=>t(18,r=T));let L=!1;const Y=z?0:I.level+1,re=z?oe((()=>Un(je?Ds(d):h.location,O))()):C;G(i,re,T=>t(17,n=T));const Ze=oe(n);G(i,Ze,T=>t(19,s=T));const mr=Lo(p,de,re),vn=T=>ke=>ke.filter(Ae=>Ae.id!==T);function br(T){if(je){if(L)return;const ke=Hs(T,n.pathname);if(ke)return L=!0,ke}else X.update(ke=>{const Ae=vn(T.id)(ke);return Ae.push(T),Ae})}function vr(T){X.update(vn(T))}return!z&&u!==Wn&&ei(Ue,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:u}),z&&(li(()=>h.listen(ke=>{const Ae=Un(ke.location,O);Ze.set(n),re.set(Ae)})),St(Di,re)),St(ct,{activeRoute:$e,registerRoute:br,unregisterRoute:vr,manageFocus:le,level:Y,id:D,history:z?h:I.history,basepath:z?O:I.basepath,disableInlineStyles:Se}),i.$$set=T=>{"basepath"in T&&t(11,u=T.basepath),"url"in T&&t(12,d=T.url),"history"in T&&t(13,h=T.history),"primary"in T&&t(14,f=T.primary),"a11y"in T&&t(15,g=T.a11y),"disableInlineStyles"in T&&t(16,x=T.disableInlineStyles),"$$scope"in T&&t(21,c=T.$$scope)},i.$$.update=()=>{if(i.$$.dirty[0]&2048&&u!==y&&ei(Ue,'You cannot change the "basepath" prop. It is ignored.'),i.$$.dirty[0]&1179648){const T=Us(o,n.pathname);$e.set(T)}if(i.$$.dirty[0]&655360&&z){const T=!!n.hash,ke=!T&&le,Ae=!T||n.pathname!==s.pathname;mr(ke,Ae)}i.$$.dirty[0]&262144&&le&&r&&r.primary&&Co({level:Y,routerId:D,route:r})},[l,p,z,D,le,de,Se,X,$e,re,Ze,u,d,h,f,g,x,n,r,s,o,c,a]}class Ho extends ie{constructor(e){super(),te(this,e,Uo,No,Q,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}const Fs=Ho;function ui(i,e,t=ct,n=Ue){Ee(t)||Bs(i,s=>`You cannot use ${s} outside of a ${Ji(n)}.`,e)}const Do=i=>{const{subscribe:e}=Ee(i);return{subscribe:e}};function Go(){return ui(Ps),Do(Di)}function Wo(){const{history:i}=Ee(ct);return i}function Vs(){const i=Ee(As);return i?Qr(i,e=>e.base):oe("/")}function Fo(){ui(zs);const i=Vs(),{basepath:e}=Ee(ct);return n=>_o(n,rt(i),e)}function Vo(){ui(Ls);const i=Fo(),{navigate:e}=Wo();return(n,r)=>{const s=xs(n)?n:i(n);return e(s,r)}}const qo=i=>({params:i&16,location:i&8}),Fn=i=>({params:je?rt(i[10]):i[4],location:i[3],navigate:i[11]});function Vn(i){let e,t;return e=new Fs({props:{primary:i[1],$$slots:{default:[Xo]},$$scope:{ctx:i}}}),{c(){P(e.$$.fragment)},m(n,r){E(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.primary=n[1]),r&528409&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function Yo(i){let e;const t=i[18].default,n=ds(t,i,i[19],Fn);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&524312)&&ps(n,t,r,r[19],e?fs(t,r[19],s,qo):gs(r[19]),Fn)},i(r){e||($(n,r),e=!0)},o(r){R(n,r),e=!1},d(r){n&&n.d(r)}}}function Ko(i){let e,t,n;const r=[{location:i[3]},{navigate:i[11]},je?rt(i[10]):i[4],i[12]];var s=i[0];function o(l){let a={};for(let c=0;c<r.length;c+=1)a=Me(a,r[c]);return{props:a}}return s&&(e=kn(s,o())),{c(){e&&P(e.$$.fragment),t=Ve()},m(l,a){e&&E(e,l,a),w(l,t,a),n=!0},p(l,a){const c=a&7192?Tr(r,[a&8&&{location:l[3]},a&2048&&{navigate:l[11]},a&1040&&xn(je?rt(l[10]):l[4]),a&4096&&xn(l[12])]):{};if(a&1&&s!==(s=l[0])){if(e){me();const u=e;R(u.$$.fragment,1,0,()=>{j(u,1)}),be()}s?(e=kn(s,o()),P(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){n||(e&&$(e.$$.fragment,l),n=!0)},o(l){e&&R(e.$$.fragment,l),n=!1},d(l){l&&_(t),e&&j(e,l)}}}function Xo(i){let e,t,n,r;const s=[Ko,Yo],o=[];function l(a,c){return a[0]!==null?0:1}return e=l(i),t=o[e]=s[e](i),{c(){t.c(),n=Ve()},m(a,c){o[e].m(a,c),w(a,n,c),r=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(me(),R(o[u],1,1,()=>{o[u]=null}),be(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){r||($(t),r=!0)},o(a){R(t),r=!1},d(a){o[e].d(a),a&&_(n)}}}function Zo(i){let e,t,n,r,s,o=[Hi(i[7]),{"data-svnav-route-start":i[5]}],l={};for(let d=0;d<o.length;d+=1)l=Me(l,o[d]);let a=i[2]&&Vn(i),c=[Hi(i[7]),{"data-svnav-route-end":i[5]}],u={};for(let d=0;d<c.length;d+=1)u=Me(u,c[d]);return{c(){e=b("div"),t=A(),a&&a.c(),n=A(),r=b("div"),Qt(e,l),Qt(r,u)},m(d,h){w(d,e,h),w(d,t,h),a&&a.m(d,h),w(d,n,h),w(d,r,h),s=!0},p(d,[h]){d[2]?a?(a.p(d,h),h&4&&$(a,1)):(a=Vn(d),a.c(),$(a,1),a.m(n.parentNode,n)):a&&(me(),R(a,1,1,()=>{a=null}),be())},i(d){s||($(a),s=!0)},o(d){R(a),s=!1},d(d){d&&_(e),d&&_(t),a&&a.d(d),d&&_(n),d&&_(r)}}}const Qo=Ss();function Jo(i,e,t){let n;const r=["path","component","meta","primary"];let s=wn(e,r),o,l,a,c,{$$slots:u={},$$scope:d}=e,{path:h=""}=e,{component:f=null}=e,{meta:g={}}=e,{primary:x=!0}=e;ui(ci,e);const p=Qo(),{registerRoute:y,unregisterRoute:O,activeRoute:C,disableInlineStyles:I}=Ee(ct);G(i,C,L=>t(16,o=L));const z=Vs();G(i,z,L=>t(17,a=L));const D=Go();G(i,D,L=>t(3,l=L));const le=oe(null);let de;const Se=oe(),X=oe({});G(i,X,L=>t(4,c=L)),St(As,Se),St(Jr,X),St(eo,le);const $e=Vo();return je||ms(()=>O(p)),i.$$set=L=>{t(24,e=Me(Me({},e),yn(L))),t(12,s=wn(e,r)),"path"in L&&t(13,h=L.path),"component"in L&&t(0,f=L.component),"meta"in L&&t(14,g=L.meta),"primary"in L&&t(1,x=L.primary),"$$scope"in L&&t(19,d=L.$$scope)},i.$$.update=()=>{if(i.$$.dirty&155658){const L=h==="",Y=Ht(a,h),N={id:p,path:h,meta:g,default:L,fullPath:L?"":Y,base:L?a:yo(Y,l.pathname),primary:x,focusElement:le};Se.set(N),t(15,de=y(N))}if(i.$$.dirty&98304&&t(2,n=!!(de||o&&o.id===p)),i.$$.dirty&98308&&n){const{params:L}=de||o;X.set(L)}},e=yn(e),[f,x,n,l,c,p,C,I,z,D,X,$e,s,h,g,de,o,a,u,d]}class el extends ie{constructor(e){super(),te(this,e,Jo,Zo,Q,{path:13,component:0,meta:14,primary:1})}}const Gi=el,tl=oe([]),pt=oe([]),di=oe([]),hi=oe([]),Ye=oe({}),en=oe({}),fi=oe({}),il={usr1:{name:"Avon Barksdale",avatar:"https://upload.wikimedia.org/wikipedia/en/9/97/Avon_Barksdale.jpg",groups:["grp1","grp2"],contacts:["usr2","usr3","usr4"]},usr2:{name:"Stringer Bell",avatar:"https://upload.wikimedia.org/wikipedia/en/b/b9/Stringer_Bell.jpg",groups:["grp1","grp2","grp3","grp4"],contacts:["usr1","usr3","usr4"]},usr3:{name:"Wee-Bey",avatar:"https://upload.wikimedia.org/wikipedia/en/8/85/Wee-Bey_Brice.jpg",groups:["grp1","grp3"],contacts:["usr1","usr2","usr4"]},usr4:{name:"Omar Little",avatar:"https://upload.wikimedia.org/wikipedia/en/b/b7/Omar_Little.png",groups:["grp4"],contacts:[]}},nl={grp1:{name:"Barksdale Organization",description:"Drug-dealing gang in West Baltimore",avatar:"https://upload.wikimedia.org/wikipedia/commons/7/72/Barksdale2.jpg",groupType:"group",lastMessage:"There’s always gonna be a Marlo, man. No Marlo, no game",members:{usr1:"admin",usr2:"admin",usr3:"member"}},grp2:{name:"conversation",description:"private chat",avatar:"",groupType:"dialog",lastMessage:"Yeah. They saw your ghetto ass comin' from miles away, n***a! You got a f***in' beef with them? That shit is on YOU!",members:{usr1:"admin",usr2:"admin"}},grp3:{name:"conversation",description:"private chat",avatar:"",groupType:"dialog",lastMessage:"My word is still my word. In here, in Baltimore, in any place you can think of calling home, it'll be my word that finds you.",members:{usr2:"admin",usr3:"admin"}},grp4:{name:"conversation",description:"private chat",avatar:"",groupType:"dialog",lastMessage:"You come at the king, you best not miss",members:{usr2:"admin",usr4:"admin"}}},sl={grp1:{img1:{user:"usr1",message:"msg1",desc:"image description here...",url:"<url>"},img2:{}},grp2:{},grp3:{}},rl={grp1:{msg1:{user:"usr1",message:"There’s always gonna be a Marlo, man. No Marlo, no game",timestamp:1459361875337}},grp2:{msg4:{user:"usr2",message:"That n***a took our money, man",timestamp:0},msg5:{user:"usr1",message:"I seen it comin",timestamp:0},msg6:{user:"usr2",message:"Well, he gotta go",timestamp:0},msg7:{user:"usr1",message:"Naw, you a f***in' businessman, you wanna handle it like that! You don't wanna get all gangsta-wild with it and s**t, right? What I tell you about playin' them f***in' away games?",timestamp:0},msg8:{user:"usr1",message:"Yeah. They saw your ghetto ass comin' from miles away, n***a! You got a f***in' beef with them? That shit is on YOU!",timestamp:0}},grp3:{msg8:{user:"usr3",message:"My word is still my word. In here, in Baltimore, in any place you can think of calling home, it'll be my word that finds you.",timestamp:0}},grp4:{msg9:{user:"usr4",message:"You come at the king, you best not miss",timestamp:0}}},pe={users:il,groups:nl,images:sl,chats:rl};function ol(i){const r=((pe.users[i]||{}).groups||[]).map(o=>pe.groups[o]).reduce((o,l)=>{const a=Object.keys(l.members).filter(c=>c!==i);return o=[...o,...a],o},[]);return[...new Set(r)].map(o=>pi(o))}function pi(i){return pe.users[i]?{...pe.users[i],id:i}:{}}function ll(i){return((pe.users[i]||{}).contacts||[]).map(n=>pi(n))}function al(i){return((pe.users[i]||{}).groups||[]).reduce((n,r)=>n=[...n,{...qs(i,r)}],[])}function qs(i,e){return(pe.users[i]||{}).groups.some(r=>r===e)?{...ul(i,e)}:{}}function cl(i){return((pe.users[i]||{}).groups||[]).reduce((n,r)=>n=[...n,{...Ys(i,r)}],[])}function Ys(i,e){const t=pe.chats[e];if((pe.users[i]||{}).groups.some(s=>s===e)){const s=Object.entries(t);let o={id:e,messages:[]};for(const[l,a]of s)o.messages=[...o.messages,{id:l,...a,user:pe.users[a.user]}];return o}else return[]}function ul(i,e){const t=pe.groups[e]||{};if(t.groupType==="dialog"){const r=t.members||{};let s={};for(const o in r)o!==i&&(s=pi(o));t.name=s.name||"",t.avatar=s.avatar||""}return{id:e,...t}}const Ke={getUser:pi,getUsers:ol,getContacts:ll,getGroups:al,getGroup:qs,getChats:cl,getChat:Ys};function dl(i){}function hl(i){return Ke.getUsers(i)}function fl(i){return Ke.getUser(i)}function pl(i){}function gl(i){}function ml(i){return Ke.getContacts(i)}function bl(i,e){}function vl(i,e){}function _l(i){}function yl(i){return Ke.getGroups(i)}function wl(i,e){return Ke.getGroup(i,e)}function $l(i){}function kl(i){}function Rl(i,e){}function xl(i){return Ke.getChats(i)}function Sl(i,e){return Ke.getChat(i,e)}function Ol(i){}function Cl(i){}function Al(i){}const it={createUser:dl,getUser:fl,getUsers:hl,updateUser:pl,deleteUser:gl,getContacts:ml,addContact:bl,removeContact:vl,createGroup:_l,getGroup:wl,getGroups:yl,updateGroup:$l,deleteGroup:kl,getChats:xl,getChat:Sl,createMessage:Rl,getMessage:Ol,updateMessage:Cl,deleteMessage:Al};function Tl(i){pt.set(it.getGroups(i)),di.set(it.getChats(i)),hi.set(it.getContacts(i)),tl.set(it.getUsers(i))}function Ml(i){Ye.set(it.getUser(i))}function El(){Ye.set({})}function jl(i){en.set(Pl(i)),fi.set(Ks(i))}function Pl(i){let e={};return pt.subscribe(n=>{e=n.find(r=>r.id===i)})(),e||{}}function Ks(i){let e={};return di.subscribe(n=>{e=n.find(r=>r.id===i)})(),e||{}}function Ll(i){return it.getUser(i)}function zl(i){let e={};return hi.subscribe(n=>{e=n.find(r=>r.id===i)})(),e||{}}function Il(i,e){const t=Ks(i)||{},n={...t,messages:[...t.messages,e]};di.update(r=>r.map(s=>s.id===i?n:s)),fi.set(n)}function Nl(i){i.id="grp0";const e={id:i.id,messages:[]};return di.update(t=>[...t,e]),pt.update(t=>[...t,i]),i}function Bl(i){if(zl(i).id){console.log("contact already exist");return}const t=Ll(i);if(t.id){hi.update(n=>[...n,t]);return}console.log("user doesn't exist")}const _e={fetchData:Tl,setCurrentUser:Ml,flushCurrentUser:El,setCurrentGroup:jl,newMessage:Il,newGroup:Nl,newContact:Bl};var Ul=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Hl=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};const V=U`
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
`;class q extends Re{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}fire(e,t){tn(this,e,t)}}Ul([J("svg"),Hl("design:type",SVGSVGElement)],q.prototype,"svg",void 0);function Dl(){return Math.floor(Math.random()*2**31)}function tn(i,e,t){i.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:t}))}function Wi(i,e,t){if(i&&i.length){const[n,r]=e,s=Math.PI/180*t,o=Math.cos(s),l=Math.sin(s);i.forEach(a=>{const[c,u]=a;a[0]=(c-n)*o-(u-r)*l+n,a[1]=(c-n)*l+(u-r)*o+r})}}function Gl(i,e,t){const n=[];i.forEach(r=>n.push(...r)),Wi(n,e,t)}function wt(i){const e=i[0],t=i[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Wl(i,e,t,n){const r=e[1]-i[1],s=i[0]-e[0],o=r*i[0]+s*i[1],l=n[1]-t[1],a=t[0]-n[0],c=l*t[0]+a*t[1],u=r*a-l*s;return u?[(a*o-s*c)/u,(r*c-l*o)/u]:null}function zi(i,e,t){const n=i.length;if(n<3)return!1;const r=[Number.MAX_SAFE_INTEGER,t],s=[e,t];let o=0;for(let l=0;l<n;l++){const a=i[l],c=i[(l+1)%n];if(Xs(a,c,s,r)){if(Rt(a,s,c)===0)return kt(a,s,c);o++}}return o%2===1}function kt(i,e,t){return e[0]<=Math.max(i[0],t[0])&&e[0]>=Math.min(i[0],t[0])&&e[1]<=Math.max(i[1],t[1])&&e[1]>=Math.min(i[1],t[1])}function Rt(i,e,t){const n=(e[1]-i[1])*(t[0]-e[0])-(e[0]-i[0])*(t[1]-e[1]);return n===0?0:n>0?1:2}function Xs(i,e,t,n){const r=Rt(i,e,t),s=Rt(i,e,n),o=Rt(t,n,i),l=Rt(t,n,e);return!!(r!==s&&o!==l||r===0&&kt(i,t,e)||s===0&&kt(i,n,e)||o===0&&kt(t,i,n)||l===0&&kt(t,e,n))}function Fl(i,e){const t=[0,0],n=Math.round(e.hachureAngle+90);n&&Wi(i,t,n);const r=Vl(i,e);return n&&(Wi(i,t,-n),Gl(r,t,-n)),r}function Vl(i,e){const t=[...i];t[0].join(",")!==t[t.length-1].join(",")&&t.push([t[0][0],t[0][1]]);const n=[];if(t&&t.length>2){let r=e.hachureGap;r<0&&(r=e.strokeWidth*4),r=Math.max(r,.1);const s=[];for(let a=0;a<t.length-1;a++){const c=t[a],u=t[a+1];if(c[1]!==u[1]){const d=Math.min(c[1],u[1]);s.push({ymin:d,ymax:Math.max(c[1],u[1]),x:d===c[1]?c[0]:u[0],islope:(u[0]-c[0])/(u[1]-c[1])})}}if(s.sort((a,c)=>a.ymin<c.ymin?-1:a.ymin>c.ymin?1:a.x<c.x?-1:a.x>c.x?1:a.ymax===c.ymax?0:(a.ymax-c.ymax)/Math.abs(a.ymax-c.ymax)),!s.length)return n;let o=[],l=s[0].ymin;for(;o.length||s.length;){if(s.length){let a=-1;for(let u=0;u<s.length&&!(s[u].ymin>l);u++)a=u;s.splice(0,a+1).forEach(u=>{o.push({s:l,edge:u})})}if(o=o.filter(a=>!(a.edge.ymax<=l)),o.sort((a,c)=>a.edge.x===c.edge.x?0:(a.edge.x-c.edge.x)/Math.abs(a.edge.x-c.edge.x)),o.length>1)for(let a=0;a<o.length;a=a+2){const c=a+1;if(c>=o.length)break;const u=o[a].edge,d=o[c].edge;n.push([[Math.round(u.x),l],[Math.round(d.x),l]])}l+=r,o.forEach(a=>{a.edge.x=a.edge.x+r*a.edge.islope})}}return n}class ql{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,n=!1){let r=Fl(e,t);if(n){const o=this.connectingLines(e,r);r=r.concat(o)}return{type:"fillSketch",ops:this.renderLines(r,t)}}renderLines(e,t){const n=[];for(const r of e)n.push(...this.helper.doubleLineOps(r[0][0],r[0][1],r[1][0],r[1][1],t));return n}connectingLines(e,t){const n=[];if(t.length>1)for(let r=1;r<t.length;r++){const s=t[r-1];if(wt(s)<3)continue;const l=[t[r][0],s[1]];if(wt(l)>3){const a=this.splitOnIntersections(e,l);n.push(...a)}}return n}midPointInPolygon(e,t){return zi(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){const n=Math.max(5,wt(t)*.1),r=[];for(let s=0;s<e.length;s++){const o=e[s],l=e[(s+1)%e.length];if(Xs(o,l,...t)){const a=Wl(o,l,t[0],t[1]);if(a){const c=wt([a,t[0]]),u=wt([a,t[1]]);c>n&&u>n&&r.push({point:a,distance:c})}}}if(r.length>1){const s=r.sort((a,c)=>a.distance-c.distance).map(a=>a.point);if(zi(e,...t[0])||s.shift(),zi(e,...t[1])||s.pop(),s.length<=1)return this.midPointInPolygon(e,t)?[t]:[];const o=[t[0],...s,t[1]],l=[];for(let a=0;a<o.length-1;a+=2){const c=[o[a],o[a+1]];this.midPointInPolygon(e,c)&&l.push(c)}return l}else return this.midPointInPolygon(e,t)?[t]:[]}}class Yl extends ql{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}}class Kl{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function Zs(i,e,t,n,r){return{type:"path",ops:Mt(i,e,t,n,r)}}function Xl(i,e,t){const n=(i||[]).length;if(n>2){const r=[];for(let s=0;s<n-1;s++)r.push(...Mt(i[s][0],i[s][1],i[s+1][0],i[s+1][1],t));return e&&r.push(...Mt(i[n-1][0],i[n-1][1],i[0][0],i[0][1],t)),{type:"path",ops:r}}else if(n===2)return Zs(i[0][0],i[0][1],i[1][0],i[1][1],t);return{type:"path",ops:[]}}function Qs(i,e){return Xl(i,!0,e)}function Zl(i,e,t,n,r){const s=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]];return Qs(s,r)}function Js(i,e,t,n,r){const s=er(t,n,r);return Ql(i,e,r,s).opset}function er(i,e,t){const n=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(i/2,2)+Math.pow(e/2,2))/2)),r=Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*n),s=Math.PI*2/r;let o=Math.abs(i/2),l=Math.abs(e/2);const a=1-t.curveFitting;return o+=W(o*a,t),l+=W(l*a,t),{increment:s,rx:o,ry:l}}function Ql(i,e,t,n){const[r,s]=Kn(n.increment,i,e,n.rx,n.ry,1,n.increment*Fi(.1,Fi(.4,1,t),t),t);let o=Yn(r,null,t);if(!t.disableMultiStroke){const[l]=Kn(n.increment,i,e,n.rx,n.ry,1.5,0,t),a=Yn(l,null,t);o=o.concat(a)}return{estimatedPoints:s,opset:{type:"path",ops:o}}}function Jl(i,e,t,n,r){return Mt(i,e,t,n,r,!0)}function tr(i){return i.randomizer||(i.randomizer=new Kl(i.seed||0)),i.randomizer.next()}function Fi(i,e,t,n=1){return t.roughness*n*(tr(t)*(e-i)+i)}function W(i,e,t=1){return Fi(-i,i,e,t)}function Mt(i,e,t,n,r,s=!1){const o=s?r.disableMultiStrokeFill:r.disableMultiStroke,l=qn(i,e,t,n,r,!0,!1);if(o)return l;const a=qn(i,e,t,n,r,!0,!0);return l.concat(a)}function qn(i,e,t,n,r,s,o){const l=Math.pow(i-t,2)+Math.pow(e-n,2),a=Math.sqrt(l);let c=1;a<200?c=1:a>500?c=.4:c=-.0016668*a+1.233334;let u=r.maxRandomnessOffset||0;u*u*100>l&&(u=a/10);const d=u/2,h=.2+tr(r)*.2;let f=r.bowing*r.maxRandomnessOffset*(n-e)/200,g=r.bowing*r.maxRandomnessOffset*(i-t)/200;f=W(f,r,c),g=W(g,r,c);const x=[],p=()=>W(d,r,c),y=()=>W(u,r,c),O=r.preserveVertices;return s&&(o?x.push({op:"move",data:[i+(O?0:p()),e+(O?0:p())]}):x.push({op:"move",data:[i+(O?0:W(u,r,c)),e+(O?0:W(u,r,c))]})),o?x.push({op:"bcurveTo",data:[f+i+(t-i)*h+p(),g+e+(n-e)*h+p(),f+i+2*(t-i)*h+p(),g+e+2*(n-e)*h+p(),t+(O?0:p()),n+(O?0:p())]}):x.push({op:"bcurveTo",data:[f+i+(t-i)*h+y(),g+e+(n-e)*h+y(),f+i+2*(t-i)*h+y(),g+e+2*(n-e)*h+y(),t+(O?0:y()),n+(O?0:y())]}),x}function Yn(i,e,t){const n=i.length,r=[];if(n>3){const s=[],o=1-t.curveTightness;r.push({op:"move",data:[i[1][0],i[1][1]]});for(let l=1;l+2<n;l++){const a=i[l];s[0]=[a[0],a[1]],s[1]=[a[0]+(o*i[l+1][0]-o*i[l-1][0])/6,a[1]+(o*i[l+1][1]-o*i[l-1][1])/6],s[2]=[i[l+1][0]+(o*i[l][0]-o*i[l+2][0])/6,i[l+1][1]+(o*i[l][1]-o*i[l+2][1])/6],s[3]=[i[l+1][0],i[l+1][1]],r.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[3][0],s[3][1]]})}if(e&&e.length===2){const l=t.maxRandomnessOffset;r.push({op:"lineTo",data:[e[0]+W(l,t),e[1]+W(l,t)]})}}else n===3?(r.push({op:"move",data:[i[1][0],i[1][1]]}),r.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[2][0],i[2][1]]})):n===2&&r.push(...Mt(i[0][0],i[0][1],i[1][0],i[1][1],t));return r}function Kn(i,e,t,n,r,s,o,l){const a=[],c=[],u=W(.5,l)-Math.PI/2;c.push([W(s,l)+e+.9*n*Math.cos(u-i),W(s,l)+t+.9*r*Math.sin(u-i)]);for(let d=u;d<Math.PI*2+u-.01;d=d+i){const h=[W(s,l)+e+n*Math.cos(d),W(s,l)+t+r*Math.sin(d)];a.push(h),c.push(h)}return c.push([W(s,l)+e+n*Math.cos(u+Math.PI*2+o*.5),W(s,l)+t+r*Math.sin(u+Math.PI*2+o*.5)]),c.push([W(s,l)+e+.98*n*Math.cos(u+o),W(s,l)+t+.98*r*Math.sin(u+o)]),c.push([W(s,l)+e+.9*n*Math.cos(u+o*.5),W(s,l)+t+.9*r*Math.sin(u+o*.5)]),[c,a]}const ea={randOffset(i,e){return i},randOffsetWithRange(i,e,t){return(i+e)/2},ellipse(i,e,t,n,r){return Js(i,e,t,n,r)},doubleLineOps(i,e,t,n,r){return Jl(i,e,t,n,r)}};function gt(i){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:i}}function ta(i,e){let t="";for(const n of i.ops){const r=n.data;switch(n.op){case"move":if(e&&t)break;t+=`M${r[0]} ${r[1]} `;break;case"bcurveTo":t+=`C${r[0]} ${r[1]}, ${r[2]} ${r[3]}, ${r[4]} ${r[5]} `;break;case"lineTo":t+=`L${r[0]} ${r[1]} `;break}}return t.trim()}function ut(i,e){const t=document.createElementNS("http://www.w3.org/2000/svg",i);if(e)for(const n in e)t.setAttributeNS(null,n,e[n]);return t}function Dt(i,e,t=!1){const n=ut("path",{d:ta(i,t)});return e&&e.appendChild(n),n}function ce(i,e,t,n,r,s){return Dt(Zl(e+2,t+2,n-4,r-4,gt(s)),i)}function F(i,e,t,n,r,s){return Dt(Zs(e,t,n,r,gt(s)),i)}function ia(i,e,t){return Dt(Qs(e,gt(t)),i,!0)}function De(i,e,t,n,r,s){return n=Math.max(n>10?n-4:n-1,1),r=Math.max(r>10?r-4:r-1,1),Dt(Js(e,t,n,r,gt(s)),i)}function gi(i,e){const n=new Yl(ea).fillPolygon(i,gt(e));return Dt(n,null)}function nn(i,e,t,n,r){const s=gt(r),o=er(t,n,s),l=[];let a=0;for(;a<=Math.PI*2;)l.push([i+o.rx*Math.cos(a),e+o.ry*Math.sin(a)]),a+=o.increment;return gi(l,r)}var mi=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},bi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Et=class extends q{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[V,U`
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
      `]}render(){return B`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,r=e.height+(t-1)*2;return[n,r]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};ce(e,0,0,r.width,r.height,this.seed);for(let s=1;s<n;s++)F(e,s*2,r.height+s*2,r.width+s*2,r.height+s*2,this.seed).style.opacity=`${(75-s*10)/100}`,F(e,r.width+s*2,r.height+s*2,r.width+s*2,s*2,this.seed).style.opacity=`${(75-s*10)/100}`,F(e,s*2,r.height+s*2,r.width+s*2,r.height+s*2,this.seed).style.opacity=`${(75-s*10)/100}`,F(e,r.width+s*2,r.height+s*2,r.width+s*2,s*2,this.seed).style.opacity=`${(75-s*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};mi([m({type:Number}),bi("design:type",Object)],Et.prototype,"elevation",void 0);mi([m({type:Boolean,reflect:!0}),bi("design:type",Object)],Et.prototype,"disabled",void 0);mi([J("button"),bi("design:type",HTMLButtonElement)],Et.prototype,"button",void 0);Et=mi([H("wired-button"),bi("design:paramtypes",[])],Et);var sn=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},rn=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let jt=class extends q{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[V,U`
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
      `]}render(){return B`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,r=e.height+(t-1)*2;return[n,r]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};if(this.fill&&this.fill.trim()){const s=gi([[2,2],[r.width-4,2],[r.width-2,r.height-4],[2,r.height-4]],this.seed);s.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(s)}ce(e,2,2,r.width-4,r.height-4,this.seed);for(let s=1;s<n;s++)F(e,s*2,r.height-4+s*2,r.width-4+s*2,r.height-4+s*2,this.seed).style.opacity=`${(85-s*10)/100}`,F(e,r.width-4+s*2,r.height-4+s*2,r.width-4+s*2,s*2,this.seed).style.opacity=`${(85-s*10)/100}`,F(e,s*2,r.height-4+s*2,r.width-4+s*2,r.height-4+s*2,this.seed).style.opacity=`${(85-s*10)/100}`,F(e,r.width-4+s*2,r.height-4+s*2,r.width-4+s*2,s*2,this.seed).style.opacity=`${(85-s*10)/100}`}};sn([m({type:Number}),rn("design:type",Object)],jt.prototype,"elevation",void 0);sn([m({type:String}),rn("design:type",String)],jt.prototype,"fill",void 0);jt=sn([H("wired-card"),rn("design:paramtypes",[])],jt);var Gt=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},vi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let dt=class extends q{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[V,U`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return B`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){ce(e,0,0,t[0],t[1],this.seed),this.svgCheck=ut("g"),e.appendChild(this.svgCheck),F(this.svgCheck,t[0]*.3,t[1]*.4,t[0]*.5,t[1]*.7,this.seed),F(this.svgCheck,t[0]*.5,t[1]*.7,t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Gt([m({type:Boolean}),vi("design:type",Object)],dt.prototype,"checked",void 0);Gt([m({type:Boolean,reflect:!0}),vi("design:type",Object)],dt.prototype,"disabled",void 0);Gt([Vr(),vi("design:type",Object)],dt.prototype,"focused",void 0);Gt([J("input"),vi("design:type",HTMLInputElement)],dt.prototype,"input",void 0);dt=Gt([H("wired-checkbox")],dt);var _i=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},on=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Pt=class extends q{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[V,U`
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
      `]}render(){return B`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const n=gi([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(n)}};_i([m(),on("design:type",Object)],Pt.prototype,"value",void 0);_i([m(),on("design:type",Object)],Pt.prototype,"name",void 0);_i([m({type:Boolean}),on("design:type",Object)],Pt.prototype,"selected",void 0);Pt=_i([H("wired-item")],Pt);var mt=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Wt=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ge=class extends Re{constructor(){super(...arguments),this.disabled=!1,this.seed=Dl(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return U`
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
    `}render(){return B`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const n=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${n.width}`),t.setAttribute("height",`${n.height}`);const r=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=r.height+"px",ce(t,0,0,r.width,r.height,this.seed);const s=r.width-4;ce(t,s,0,34,r.height,this.seed);const o=Math.max(0,Math.abs((r.height-24)/2)),l=ia(t,[[s+8,5+o],[s+26,5+o],[s+17,o+Math.min(r.height,18)]],this.seed);if(l.style.fill="currentColor",l.style.pointerEvents=this.disabled?"none":"auto",l.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const a=this.shadowRoot.getElementById("slot").assignedNodes();if(a&&a.length)for(let c=0;c<a.length;c++){const u=a[c];u.tagName==="WIRED-ITEM"&&(u.setAttribute("role","option"),this.itemNodes.push(u))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let n=null;for(let r=0;r<t.length;r++){const s=t[r];if(s.tagName==="WIRED-ITEM"){const o=s.value||s.getAttribute("value")||"";if(this.selected&&o===this.selected){n=s;break}}}this.lastSelectedItem=n||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),n?this.value={value:n.value||"",text:n.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(n=>n.nodeType===Node.ELEMENT_NODE).forEach(n=>{const r=n;r.requestUpdate&&r.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){tn(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};mt([m({type:Object}),Wt("design:type",Object)],Ge.prototype,"value",void 0);mt([m({type:String,reflect:!0}),Wt("design:type",String)],Ge.prototype,"selected",void 0);mt([m({type:Boolean,reflect:!0}),Wt("design:type",Object)],Ge.prototype,"disabled",void 0);mt([J("svg"),Wt("design:type",SVGSVGElement)],Ge.prototype,"svg",void 0);mt([J("#card"),Wt("design:type",HTMLDivElement)],Ge.prototype,"card",void 0);Ge=mt([H("wired-combo")],Ge);var yi=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ln=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Lt=class extends Re{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return U`
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
    `}render(){return B`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};yi([m({type:Number}),ln("design:type",Object)],Lt.prototype,"elevation",void 0);yi([m({type:Boolean,reflect:!0}),ln("design:type",Object)],Lt.prototype,"open",void 0);yi([J("wired-card"),ln("design:type",jt)],Lt.prototype,"card",void 0);Lt=yi([H("wired-dialog")],Lt);var ir=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},na=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Vi=class extends q{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[V,U`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return B`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,t*6]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5);for(let r=0;r<n;r++)F(e,0,r*6+3,t[0],r*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};ir([m({type:Number}),na("design:type",Object)],Vi.prototype,"elevation",void 0);Vi=ir([H("wired-divider")],Vi);var an=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},nr=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ti=class extends q{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[V,U`
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
      `]}render(){return B`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]),r=nn(n/2,n/2,n,n,this.seed);e.appendChild(r)}};an([m({type:Boolean,reflect:!0}),nr("design:type",Object)],ti.prototype,"disabled",void 0);an([J("button"),nr("design:type",HTMLButtonElement)],ti.prototype,"button",void 0);ti=an([H("wired-fab")],ti);var cn=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},sr=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ii=class extends q{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[V,U`
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
      `]}render(){return B`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]);e.setAttribute("width",`${n}`),e.setAttribute("height",`${n}`),De(e,n/2,n/2,n,n,this.seed)}};cn([m({type:Boolean,reflect:!0}),sr("design:type",Object)],ii.prototype,"disabled",void 0);cn([J("button"),sr("design:type",HTMLButtonElement)],ii.prototype,"button",void 0);ii=cn([H("wired-icon-button")],ii);var un=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},dn=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};const sa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let ni=class extends q{constructor(){super(),this.elevation=1,this.src=sa,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[V,U`
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
      `]}render(){return B`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,r=e.height+(t-1)*2;return[n,r]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};ce(e,2,2,r.width-4,r.height-4,this.seed);for(let s=1;s<n;s++)F(e,s*2,r.height-4+s*2,r.width-4+s*2,r.height-4+s*2,this.seed).style.opacity=`${(85-s*10)/100}`,F(e,r.width-4+s*2,r.height-4+s*2,r.width-4+s*2,s*2,this.seed).style.opacity=`${(85-s*10)/100}`,F(e,s*2,r.height-4+s*2,r.width-4+s*2,r.height-4+s*2,this.seed).style.opacity=`${(85-s*10)/100}`,F(e,r.width-4+s*2,r.height-4+s*2,r.width-4+s*2,s*2,this.seed).style.opacity=`${(85-s*10)/100}`}};un([m({type:Number}),dn("design:type",Object)],ni.prototype,"elevation",void 0);un([m({type:String}),dn("design:type",String)],ni.prototype,"src",void 0);ni=un([H("wired-image"),dn("design:paramtypes",[])],ni);var ne=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},se=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Z=class extends q{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[V,U`
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
      `]}render(){return B`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};ne([m({type:Boolean,reflect:!0}),se("design:type",Object)],Z.prototype,"disabled",void 0);ne([m({type:String}),se("design:type",Object)],Z.prototype,"placeholder",void 0);ne([m({type:String}),se("design:type",String)],Z.prototype,"name",void 0);ne([m({type:String}),se("design:type",String)],Z.prototype,"min",void 0);ne([m({type:String}),se("design:type",String)],Z.prototype,"max",void 0);ne([m({type:String}),se("design:type",String)],Z.prototype,"step",void 0);ne([m({type:String}),se("design:type",Object)],Z.prototype,"type",void 0);ne([m({type:String}),se("design:type",Object)],Z.prototype,"autocomplete",void 0);ne([m({type:String}),se("design:type",Object)],Z.prototype,"autocapitalize",void 0);ne([m({type:String}),se("design:type",Object)],Z.prototype,"autocorrect",void 0);ne([m({type:Boolean}),se("design:type",Object)],Z.prototype,"required",void 0);ne([m({type:Boolean}),se("design:type",Object)],Z.prototype,"autofocus",void 0);ne([m({type:Boolean}),se("design:type",Object)],Z.prototype,"readonly",void 0);ne([m({type:Number}),se("design:type",Number)],Z.prototype,"minlength",void 0);ne([m({type:Number}),se("design:type",Number)],Z.prototype,"maxlength",void 0);ne([m({type:Number}),se("design:type",Number)],Z.prototype,"size",void 0);ne([J("input"),se("design:type",HTMLInputElement)],Z.prototype,"textInput",void 0);Z=ne([H("wired-input"),se("design:paramtypes",[])],Z);var Ft=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},wi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ht=class extends q{constructor(){super(...arguments),this.elevation=1}static get styles(){return[V,U`
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
      `]}render(){return B`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width,r=e.height+(t-1)*2;return[n,r]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0],height:t[1]-(n-1)*2};for(let s=0;s<n;s++)F(e,0,r.height+s*2-2,r.width,r.height+s*2-2,this.seed),F(e,0,r.height+s*2-2,r.width,r.height+s*2-2,this.seed)}};Ft([m({type:Number}),wi("design:type",Object)],ht.prototype,"elevation",void 0);Ft([m({type:String}),wi("design:type",String)],ht.prototype,"href",void 0);Ft([m({type:String}),wi("design:type",String)],ht.prototype,"target",void 0);Ft([J("a"),wi("design:type",HTMLAnchorElement)],ht.prototype,"anchor",void 0);ht=Ft([H("wired-link")],ht);var $i=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},hn=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let zt=class extends q{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[V,U`
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
      `]}render(){return B`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];n.tagName==="WIRED-ITEM"&&(n.setAttribute("role","option"),this.itemNodes.push(n))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let n=null;for(let r=0;r<t.length;r++){const s=t[r];if(s.tagName==="WIRED-ITEM"){const o=s.value||"";if(this.selected&&o===this.selected){n=s;break}}}this.lastSelectedItem=n||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),n?this.value={value:n.value||"",text:n.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,0,0,t[0],t[1],this.seed)}};$i([m({type:Object}),hn("design:type",Object)],zt.prototype,"value",void 0);$i([m({type:String}),hn("design:type",String)],zt.prototype,"selected",void 0);$i([m({type:Boolean}),hn("design:type",Object)],zt.prototype,"horizontal",void 0);zt=$i([H("wired-listbox")],zt);var Vt=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ki=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let We=class extends q{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[V,U`
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
      `]}render(){return B`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const n=t.width*Math.max(0,Math.min(e,100));this.progBox=gi([[0,0],[n,0],[n,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};Vt([m({type:Number}),ki("design:type",Object)],We.prototype,"value",void 0);Vt([m({type:Number}),ki("design:type",Object)],We.prototype,"min",void 0);Vt([m({type:Number}),ki("design:type",Object)],We.prototype,"max",void 0);Vt([m({type:Boolean}),ki("design:type",Object)],We.prototype,"percentage",void 0);We=Vt([H("wired-progress")],We);var bt=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},qt=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Fe=class extends q{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[V,U`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return B`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){De(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=ut("g"),e.appendChild(this.svgCheck);const n=Math.max(t[0]*.6,5),r=Math.max(t[1]*.6,5);De(this.svgCheck,t[0]/2,t[1]/2,n,r,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};bt([m({type:Boolean}),qt("design:type",Object)],Fe.prototype,"checked",void 0);bt([m({type:Boolean,reflect:!0}),qt("design:type",Object)],Fe.prototype,"disabled",void 0);bt([m({type:String}),qt("design:type",String)],Fe.prototype,"name",void 0);bt([m(),qt("design:type",Object)],Fe.prototype,"focused",void 0);bt([J("input"),qt("design:type",HTMLInputElement)],Fe.prototype,"input",void 0);Fe=bt([H("wired-radio")],Fe);var rr=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ra=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let qi=class extends Re{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return U`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return B`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,n=e.target,r=n.name||"";t?(this.selected=t&&r||"",this.fireSelected()):n.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],t&&t.length)for(let n=0;n<t.length;n++){const r=t[n];if(r.tagName==="WIRED-RADIO"){this.radioNodes.push(r);const s=r.name||"";this.selected&&s===this.selected?r.checked=!0:r.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let r=0;r<e.length;r++)if(e[r].name===this.selected){n=r;break}n<0?t=e[0]:(n--,n<0&&(n=e.length-1),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let r=0;r<e.length;r++)if(e[r].name===this.selected){n=r;break}n<0?t=e[0]:(n++,n>=e.length&&(n=0),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){tn(this,"selected",{selected:this.selected})}};rr([m({type:String}),ra("design:type",String)],qi.prototype,"selected",void 0);qi=rr([H("wired-radio-group")],qi);var Xe=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},vt=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Pe=class extends q{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[V,U`
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
      `]}render(){return B`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=ut("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),De(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),F(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=ut("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),F(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),F(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Xe([m({type:Boolean,reflect:!0}),vt("design:type",Object)],Pe.prototype,"disabled",void 0);Xe([m({type:String}),vt("design:type",Object)],Pe.prototype,"placeholder",void 0);Xe([m({type:String}),vt("design:type",Object)],Pe.prototype,"autocomplete",void 0);Xe([m({type:String}),vt("design:type",Object)],Pe.prototype,"autocorrect",void 0);Xe([m({type:Boolean}),vt("design:type",Object)],Pe.prototype,"autofocus",void 0);Xe([J("input"),vt("design:type",HTMLInputElement)],Pe.prototype,"textInput",void 0);Pe=Xe([H("wired-search-input")],Pe);var _t=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Yt=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Le=class extends q{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[V,U`
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
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return B`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const n=Math.round(t[1]/2);F(e,0,n,t[0],n,this.seed).classList.add("bar"),this.knob=De(e,10,n,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),n=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${n*(this.canvasWidth-20)}px)`)}}};_t([m({type:Number}),Yt("design:type",Object)],Le.prototype,"min",void 0);_t([m({type:Number}),Yt("design:type",Object)],Le.prototype,"max",void 0);_t([m({type:Number}),Yt("design:type",Object)],Le.prototype,"step",void 0);_t([m({type:Boolean,reflect:!0}),Yt("design:type",Object)],Le.prototype,"disabled",void 0);_t([J("input"),Yt("design:type",HTMLInputElement)],Le.prototype,"input",void 0);Le=_t([H("wired-slider")],Le);var fn=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},or=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let si=class extends q{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[V,U`
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
      `]}render(){return B`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){De(e,t[0]/2,t[1]/2,Math.floor(t[0]*.8),Math.floor(.8*t[1]),this.seed),this.knob=nn(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};fn([m({type:Boolean}),or("design:type",Object)],si.prototype,"spinning",void 0);fn([m({type:Number}),or("design:type",Object)],si.prototype,"duration",void 0);si=fn([H("wired-spinner")],si);var pn=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},gn=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ri=class extends q{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[V,U`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return B`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-4,t[1]-4,this.seed)}};pn([m({type:String}),gn("design:type",Object)],ri.prototype,"name",void 0);pn([m({type:String}),gn("design:type",Object)],ri.prototype,"label",void 0);ri=pn([H("wired-tab"),gn("design:paramtypes",[])],ri);var mn=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},lr=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let oi=class extends Re{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[V,U`
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
      `]}render(){return B`
    <div id="bar">
      ${this.pages.map(e=>B`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const n=e[t];if(n.nodeType===Node.ELEMENT_NODE&&n.tagName.toLowerCase()==="wired-tab"){const r=n;this.pages.push(r);const s=r.getAttribute("name")||"";s&&s.trim().split(" ").forEach(o=>{o&&this.pageMap.set(o,r)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const n=this.pages[t];n===e?n.classList.remove("hidden"):n.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};mn([m({type:String}),lr("design:type",String)],oi.prototype,"selected",void 0);mn([J("slot"),lr("design:type",HTMLSlotElement)],oi.prototype,"slotElement",void 0);oi=mn([H("wired-tabs")],oi);var he=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ve=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ue=class extends q{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[V,U`
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
      `]}render(){return B`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};he([m({type:Boolean,reflect:!0}),ve("design:type",Object)],ue.prototype,"disabled",void 0);he([m({type:Number}),ve("design:type",Object)],ue.prototype,"rows",void 0);he([m({type:Number}),ve("design:type",Object)],ue.prototype,"maxrows",void 0);he([m({type:String}),ve("design:type",Object)],ue.prototype,"autocomplete",void 0);he([m({type:Boolean}),ve("design:type",Object)],ue.prototype,"autofocus",void 0);he([m({type:String}),ve("design:type",Object)],ue.prototype,"inputmode",void 0);he([m({type:String}),ve("design:type",Object)],ue.prototype,"placeholder",void 0);he([m({type:Boolean}),ve("design:type",Object)],ue.prototype,"required",void 0);he([m({type:Boolean}),ve("design:type",Object)],ue.prototype,"readonly",void 0);he([m({type:Number}),ve("design:type",Number)],ue.prototype,"minlength",void 0);he([m({type:Number}),ve("design:type",Number)],ue.prototype,"maxlength",void 0);he([J("textarea"),ve("design:type",HTMLTextAreaElement)],ue.prototype,"textareaInput",void 0);ue=he([H("wired-textarea")],ue);var Ri=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},bn=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let It=class extends q{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[V,U`
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
      `]}render(){return B`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){ce(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=ut("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const r=nn(16,16,32,32,this.seed);r.classList.add("knobfill"),this.knob.appendChild(r),De(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};Ri([m({type:Boolean}),bn("design:type",Object)],It.prototype,"checked",void 0);Ri([m({type:Boolean,reflect:!0}),bn("design:type",Object)],It.prototype,"disabled",void 0);Ri([J("input"),bn("design:type",HTMLInputElement)],It.prototype,"input",void 0);It=Ri([H("wired-toggle")],It);var ye=globalThis&&globalThis.__decorate||function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},we=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ge=class extends q{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[V,U`
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
      `]}render(){return B`
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
          <span>${this.playing?"||":"▶"}</span>
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){ce(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}:${n}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};ye([m({type:String}),we("design:type",Object)],ge.prototype,"src",void 0);ye([m({type:Boolean}),we("design:type",Object)],ge.prototype,"autoplay",void 0);ye([m({type:Boolean}),we("design:type",Object)],ge.prototype,"loop",void 0);ye([m({type:Boolean}),we("design:type",Object)],ge.prototype,"muted",void 0);ye([m({type:Boolean}),we("design:type",Object)],ge.prototype,"playsinline",void 0);ye([m(),we("design:type",Object)],ge.prototype,"playing",void 0);ye([m(),we("design:type",Object)],ge.prototype,"timeDisplay",void 0);ye([J("wired-progress"),we("design:type",We)],ge.prototype,"progressBar",void 0);ye([J("wired-slider"),we("design:type",Le)],ge.prototype,"slider",void 0);ye([J("video"),we("design:type",HTMLVideoElement)],ge.prototype,"video",void 0);ge=ye([H("wired-video"),we("design:paramtypes",[])],ge);function oa(i){let e,t,n;return{c(){e=b("img"),k(e,"class","blah-avatar svelte-1p5josz"),Zt(e.src,t=i[0].src)||k(e,"src",t),k(e,"alt",n=i[0].alt)},m(r,s){w(r,e,s)},p(r,[s]){s&1&&!Zt(e.src,t=r[0].src)&&k(e,"src",t),s&1&&n!==(n=r[0].alt)&&k(e,"alt",n)},i:M,o:M,d(r){r&&_(e)}}}function la(i,e,t){let{image:n}=e;return i.$$set=r=>{"image"in r&&t(0,n=r.image)},[n]}class xi extends ie{constructor(e){super(),te(this,e,la,oa,Q,{image:0})}}function Xn(i,e,t){const n=i.slice();return n[5]=e[t],n}function Zn(i){let e,t,n,r=i[5].name+"",s,o,l,a,c,u;t=new xi({props:{image:{src:i[5].avatar,alt:i[5].name}}});function d(){return i[3](i[5])}return{c(){e=b("wired-item"),P(t.$$.fragment),n=K(` 
        `),s=K(r),o=A(),S(e,"class","blah-group-list__listbox--item svelte-1eg5h28"),S(e,"value",l=i[5].id)},m(h,f){w(h,e,f),E(t,e,null),v(e,n),v(e,s),v(e,o),a=!0,c||(u=ae(e,"click",d),c=!0)},p(h,f){i=h;const g={};f&1&&(g.image={src:i[5].avatar,alt:i[5].name}),t.$set(g),(!a||f&1)&&r!==(r=i[5].name+"")&&Ce(s,r),(!a||f&1&&l!==(l=i[5].id))&&S(e,"value",l)},i(h){a||($(t.$$.fragment,h),a=!0)},o(h){R(t.$$.fragment,h),a=!1},d(h){h&&_(e),j(t),c=!1,u()}}}function aa(i){let e,t,n,r,s,o,l,a,c=i[0],u=[];for(let h=0;h<c.length;h+=1)u[h]=Zn(Xn(i,c,h));const d=h=>R(u[h],1,1,()=>{u[h]=null});return{c(){e=b("wired-card"),t=K(`Chats
  `),n=b("wired-icon-button"),n.innerHTML="<mwc-icon>add</mwc-icon>",r=A(),s=b("wired-listbox");for(let h=0;h<u.length;h+=1)u[h].c();S(n,"class","blah-group-list__add-group svelte-1eg5h28"),S(s,"selected","two"),S(s,"class","blah-group-list__listbox svelte-1eg5h28"),fe(s,"--wired-item-selected-color","white"),fe(s,"--wired-item-selected-bg","grey"),S(e,"elevation","2"),S(e,"class","blah-group-list svelte-1eg5h28")},m(h,f){w(h,e,f),v(e,t),v(e,n),v(e,r),v(e,s);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(s,null);o=!0,l||(a=ae(n,"click",i[1]),l=!0)},p(h,[f]){if(f&5){c=h[0];let g;for(g=0;g<c.length;g+=1){const x=Xn(h,c,g);u[g]?(u[g].p(x,f),$(u[g],1)):(u[g]=Zn(x),u[g].c(),$(u[g],1),u[g].m(s,null))}for(me(),g=c.length;g<u.length;g+=1)d(g);be()}},i(h){if(!o){for(let f=0;f<c.length;f+=1)$(u[f]);o=!0}},o(h){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)R(u[f]);o=!1},d(h){h&&_(e),Nt(u,h),l=!1,a()}}}function ca(i,e,t){let{groupList:n}=e;const r=qe();function s(){r("newGroup",{})}function o(a){r("selectGroup",{id:a})}const l=a=>o(a.id);return i.$$set=a=>{"groupList"in a&&t(0,n=a.groupList)},[n,s,o,l]}class ar extends ie{constructor(e){super(),te(this,e,ca,aa,Q,{groupList:0})}}function Qn(i){let e,t,n,r;return{c(){e=b("wired-listbox"),t=b("wired-item"),t.textContent="Log out",S(t,"class","blah-main-menubar__user-menu--item"),S(t,"value","log out"),S(e,"selected","two"),S(e,"class","blah-main-menubar__user-menu svelte-1ff5yy2"),fe(e,"--wired-item-selected-color","white"),fe(e,"--wired-item-selected-bg","grey")},m(s,o){w(s,e,o),v(e,t),n||(r=ae(t,"click",i[3]),n=!0)},p:M,d(s){s&&_(e),n=!1,r()}}}function ua(i){let e,t,n,r,s,o,l=i[0].name+"",a,c,u,d,h,f,g;r=new xi({props:{image:{src:i[0].avatar,alt:i[0].name}}});let x=i[1]&&Qn(i);return{c(){e=b("wired-card"),t=b("div"),n=b("div"),P(r.$$.fragment),s=A(),o=b("p"),a=K(l),c=A(),u=b("p"),d=A(),x&&x.c(),k(n,"class","blah-main-menubar__avatar svelte-1ff5yy2"),k(t,"class","blah-main-menubar__container svelte-1ff5yy2"),S(e,"elevation","2"),S(e,"class","blah-main-menubar svelte-1ff5yy2")},m(p,y){w(p,e,y),v(e,t),v(t,n),E(r,n,null),v(t,s),v(t,o),v(o,a),v(t,c),v(t,u),v(t,d),x&&x.m(t,null),h=!0,f||(g=ae(n,"click",i[2]),f=!0)},p(p,[y]){const O={};y&1&&(O.image={src:p[0].avatar,alt:p[0].name}),r.$set(O),(!h||y&1)&&l!==(l=p[0].name+"")&&Ce(a,l),p[1]?x?x.p(p,y):(x=Qn(p),x.c(),x.m(t,null)):x&&(x.d(1),x=null)},i(p){h||($(r.$$.fragment,p),h=!0)},o(p){R(r.$$.fragment,p),h=!1},d(p){p&&_(e),j(r),x&&x.d(),f=!1,g()}}}function da(i,e,t){let{user:n={}}=e,r=!1;const s=()=>t(1,r=!r),o=()=>_e.flushCurrentUser();return i.$$set=l=>{"user"in l&&t(0,n=l.user)},[n,r,s,o]}class cr extends ie{constructor(e){super(),te(this,e,da,ua,Q,{user:0})}}function Jn(i,e,t){const n=i.slice();return n[4]=e[t],n}function es(i){let e,t,n,r=i[4].name+"",s,o,l,a,c,u;t=new xi({props:{image:{src:i[4].avatar,alt:i[4].name}}});function d(){return i[2](i[4])}return{c(){e=b("wired-item"),P(t.$$.fragment),n=K(` 
      `),s=K(r),o=A(),S(e,"class","blah-contact-list__listbox--item svelte-6msgne"),S(e,"value",l=i[4].id)},m(h,f){w(h,e,f),E(t,e,null),v(e,n),v(e,s),v(e,o),a=!0,c||(u=ae(e,"click",d),c=!0)},p(h,f){i=h;const g={};f&1&&(g.image={src:i[4].avatar,alt:i[4].name}),t.$set(g),(!a||f&1)&&r!==(r=i[4].name+"")&&Ce(s,r),(!a||f&1&&l!==(l=i[4].id))&&S(e,"value",l)},i(h){a||($(t.$$.fragment,h),a=!0)},o(h){R(t.$$.fragment,h),a=!1},d(h){h&&_(e),j(t),c=!1,u()}}}function ha(i){let e,t,n=i[0],r=[];for(let o=0;o<n.length;o+=1)r[o]=es(Jn(i,n,o));const s=o=>R(r[o],1,1,()=>{r[o]=null});return{c(){e=b("wired-listbox");for(let o=0;o<r.length;o+=1)r[o].c();S(e,"selected","two"),S(e,"class","blah-contact-list__listbox svelte-6msgne"),fe(e,"--wired-item-selected-color","white"),fe(e,"--wired-item-selected-bg","grey")},m(o,l){w(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);t=!0},p(o,[l]){if(l&3){n=o[0];let a;for(a=0;a<n.length;a+=1){const c=Jn(o,n,a);r[a]?(r[a].p(c,l),$(r[a],1)):(r[a]=es(c),r[a].c(),$(r[a],1),r[a].m(e,null))}for(me(),a=n.length;a<r.length;a+=1)s(a);be()}},i(o){if(!t){for(let l=0;l<n.length;l+=1)$(r[l]);t=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)R(r[l]);t=!1},d(o){o&&_(e),Nt(r,o)}}}function fa(i,e,t){let{contactList:n}=e;const r=qe();function s(l){r("selectContact",{contact:l})}const o=l=>s(l);return i.$$set=l=>{"contactList"in l&&t(0,n=l.contactList)},[n,s,o]}class ur extends ie{constructor(e){super(),te(this,e,fa,ha,Q,{contactList:0})}}function ts(i,e,t){const n=i.slice();return n[13]=e[t],n[15]=t,n}function is(i){let e;return{c(){e=K("Add members to the list...")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function ns(i){let e;return{c(){e=b("span"),e.textContent=", "},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function ss(i){let e=i[13].name+"",t,n,r,s=i[15]<i[4].length-1&&ns();return{c(){t=K(e),n=A(),s&&s.c(),r=Ve()},m(o,l){w(o,t,l),w(o,n,l),s&&s.m(o,l),w(o,r,l)},p(o,l){l&16&&e!==(e=o[13].name+"")&&Ce(t,e),o[15]<o[4].length-1?s||(s=ns(),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},d(o){o&&_(t),o&&_(n),s&&s.d(o),o&&_(r)}}}function pa(i){let e,t,n,r,s,o,l,a,c,u,d,h,f,g,x,p=i[4],y=[];for(let C=0;C<p.length;C+=1)y[C]=ss(ts(i,p,C));let O=null;return p.length||(O=is()),u=new ur({props:{contactList:i[0]}}),u.$on("selectContact",i[10]),{c(){e=b("div"),t=b("wired-input"),n=A(),r=b("wired-input"),s=A(),o=b("wired-input"),l=A(),a=b("p");for(let C=0;C<y.length;C+=1)y[C].c();O&&O.c(),c=A(),P(u.$$.fragment),d=A(),h=b("wired-button"),h.textContent="Create",S(t,"class","blah-new-group__name svelte-z2m5ki"),S(t,"placeholder","Enter name"),S(r,"class","blah-new-group__description svelte-z2m5ki"),S(r,"placeholder","Enter description"),S(o,"class","blah-new-group__avatar svelte-z2m5ki"),S(o,"placeholder","Enter avatar url"),k(e,"class","blah-new-group svelte-z2m5ki")},m(C,I){w(C,e,I),v(e,t),i[7](t),v(e,n),v(e,r),i[8](r),v(e,s),v(e,o),i[9](o),v(e,l),v(e,a);for(let z=0;z<y.length;z+=1)y[z]&&y[z].m(a,null);O&&O.m(a,null),v(e,c),E(u,e,null),v(e,d),v(e,h),f=!0,g||(x=ae(h,"click",i[11]),g=!0)},p(C,[I]){if(I&16){p=C[4];let D;for(D=0;D<p.length;D+=1){const le=ts(C,p,D);y[D]?y[D].p(le,I):(y[D]=ss(le),y[D].c(),y[D].m(a,null))}for(;D<y.length;D+=1)y[D].d(1);y.length=p.length,p.length?O&&(O.d(1),O=null):O||(O=is(),O.c(),O.m(a,null))}const z={};I&1&&(z.contactList=C[0]),u.$set(z)},i(C){f||($(u.$$.fragment,C),f=!0)},o(C){R(u.$$.fragment,C),f=!1},d(C){C&&_(e),i[7](null),i[8](null),i[9](null),Nt(y,C),O&&O.d(),j(u),g=!1,x()}}}function ga(i,e,t){let{contacts:n=[]}=e;const r=qe();let s,o,l,a=[];function c(p){const y=!a.some(O=>O.id===p.id);t(4,a=y?[...a,p]:a),t(4,a)}function u(){const p={name:s.value||"",description:o.value||"",avatar:l.value||"",groupType:"group",lastMessage:"",members:[...a]};r("newGroup",p)}function d(p){Be[p?"unshift":"push"](()=>{s=p,t(1,s)})}function h(p){Be[p?"unshift":"push"](()=>{o=p,t(2,o)})}function f(p){Be[p?"unshift":"push"](()=>{l=p,t(3,l)})}const g=p=>c(p.detail.contact),x=p=>u();return i.$$set=p=>{"contacts"in p&&t(0,n=p.contacts)},[n,s,o,l,a,c,u,d,h,f,g,x]}class ma extends ie{constructor(e){super(),te(this,e,ga,pa,Q,{contacts:0})}}function ba(i){let e,t,n,r,s,o;return{c(){e=b("div"),t=b("wired-input"),n=A(),r=b("wired-button"),r.textContent="Create",S(t,"class","blah-new-contact__name svelte-1himpxv"),S(t,"placeholder","Enter contact id"),k(e,"class","blah-new-contact svelte-1himpxv")},m(l,a){w(l,e,a),v(e,t),i[2](t),v(e,n),v(e,r),s||(o=ae(r,"click",i[3]),s=!0)},p:M,i:M,o:M,d(l){l&&_(e),i[2](null),s=!1,o()}}}function va(i,e,t){const n=qe();let r;function s(){n("newContact",r.value)}function o(a){Be[a?"unshift":"push"](()=>{r=a,t(0,r)})}return[r,s,o,a=>s()]}class _a extends ie{constructor(e){super(),te(this,e,va,ba,Q,{})}}function ya(i){let e,t;return e=new _a({}),e.$on("newContact",i[10]),{c(){P(e.$$.fragment)},m(n,r){E(e,n,r),t=!0},p:M,i(n){t||($(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function wa(i){let e,t;return e=new ma({props:{contacts:i[2]}}),e.$on("newGroup",i[9]),{c(){P(e.$$.fragment)},m(n,r){E(e,n,r),t=!0},p(n,r){const s={};r&4&&(s.contacts=n[2]),e.$set(s)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function $a(i){let e,t,n,r,s,o;return n=new ur({props:{contactList:i[2]}}),n.$on("selectContact",i[8]),{c(){e=b("wired-button"),e.innerHTML=`<div class="blah-new__card-content svelte-y0753p"><wired-icon-button><mwc-icon>group</mwc-icon></wired-icon-button> 
        <p class="svelte-y0753p">New group</p></div>`,t=A(),P(n.$$.fragment),S(e,"elevation","2"),S(e,"class","blah-new__new-group-button svelte-y0753p")},m(l,a){w(l,e,a),w(l,t,a),E(n,l,a),r=!0,s||(o=ae(e,"click",i[7]),s=!0)},p(l,a){const c={};a&4&&(c.contactList=l[2]),n.$set(c)},i(l){r||($(n.$$.fragment,l),r=!0)},o(l){R(n.$$.fragment,l),r=!1},d(l){l&&_(e),l&&_(t),j(n,l),s=!1,o()}}}function ka(i){let e,t,n,r,s,o,l,a,c,u;const d=[$a,wa,ya],h=[];function f(g,x){return g[0]||g[1]?g[0]?1:g[1]?2:-1:0}return~(o=f(i))&&(l=h[o]=d[o](i)),{c(){e=b("wired-card"),t=b("wired-icon-button"),t.innerHTML="<mwc-icon>arrow_back</mwc-icon>",n=K(`
  New Chat
  `),r=b("br"),s=A(),l&&l.c(),S(t,"class","blah-new__back-button svelte-y0753p"),S(e,"elevation","2"),S(e,"class","blah-new svelte-y0753p")},m(g,x){w(g,e,x),v(e,t),v(e,n),v(e,r),v(e,s),~o&&h[o].m(e,null),a=!0,c||(u=ae(t,"click",i[3]),c=!0)},p(g,[x]){let p=o;o=f(g),o===p?~o&&h[o].p(g,x):(l&&(me(),R(h[p],1,1,()=>{h[p]=null}),be()),~o?(l=h[o],l?l.p(g,x):(l=h[o]=d[o](g),l.c()),$(l,1),l.m(e,null)):l=null)},i(g){a||($(l),a=!0)},o(g){R(l),a=!1},d(g){g&&_(e),~o&&h[o].d(),c=!1,u()}}}function Ra(i,e,t){let n,r,s;G(i,Ye,y=>t(11,n=y)),G(i,pt,y=>t(12,r=y)),G(i,hi,y=>t(2,s=y));const o=qe();let l=!1,a=!1;function c(){l||a?(t(0,l=!1),t(1,a=!1)):o("navigateTo",{})}function u(y){let O=r.find(C=>C.members[y.id]&&Object.keys(C.members).length<=2);if(!O){const C=`${n.id}`,I=`${y.id}`,z={avatar:y.avatar,description:"private chat",groupType:"dialog",lastMessage:"",members:{[C]:"admin",[I]:"admin"},name:y.name};O=_e.newGroup(z)}o("navigateTo",{id:O.id})}function d(y){t(0,l=!1);const O=_e.newGroup(y);o("navigateTo",{id:O.id})}function h(y){t(1,a=!1),_e.newContact(y),o("navigateTo",{})}return[l,a,s,c,u,d,h,()=>t(0,l=!0),y=>u(y.detail.contact),y=>d(y.detail),y=>h(y.detail)]}class dr extends ie{constructor(e){super(),te(this,e,Ra,ka,Q,{})}}function xa(i){let e,t;return e=new ar({props:{groupList:i[2]}}),e.$on("newGroup",i[6]),e.$on("selectGroup",i[7]),{c(){P(e.$$.fragment)},m(n,r){E(e,n,r),t=!0},p(n,r){const s={};r&4&&(s.groupList=n[2]),e.$set(s)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function Sa(i){let e,t;return e=new dr({}),e.$on("navigateTo",i[5]),{c(){P(e.$$.fragment)},m(n,r){E(e,n,r),t=!0},p:M,i(n){t||($(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function Oa(i){let e,t,n,r,s,o,l;t=new cr({props:{user:i[1]}});const a=[Sa,xa],c=[];function u(d,h){return d[0]?0:1}return s=u(i),o=c[s]=a[s](i),{c(){e=b("div"),P(t.$$.fragment),n=A(),r=b("div"),o.c(),k(e,"class","blah-left-top svelte-1m5b8bi"),k(r,"class","blah-left-middle svelte-1m5b8bi")},m(d,h){w(d,e,h),E(t,e,null),w(d,n,h),w(d,r,h),c[s].m(r,null),l=!0},p(d,[h]){const f={};h&2&&(f.user=d[1]),t.$set(f);let g=s;s=u(d),s===g?c[s].p(d,h):(me(),R(c[g],1,1,()=>{c[g]=null}),be(),o=c[s],o?o.p(d,h):(o=c[s]=a[s](d),o.c()),$(o,1),o.m(r,null))},i(d){l||($(t.$$.fragment,d),$(o),l=!0)},o(d){R(t.$$.fragment,d),R(o),l=!1},d(d){d&&_(e),j(t),d&&_(n),d&&_(r),c[s].d()}}}function Ca(i,e,t){let n,r;G(i,Ye,d=>t(1,n=d)),G(i,pt,d=>t(2,r=d));let s=!1;li(async()=>{_e.fetchData(n.id)});function o(d){_e.setCurrentGroup(d),He(`/group/${d}`)}function l(d){t(0,s=!1),d&&o(d)}return[s,n,r,o,l,d=>l(d.detail.id),()=>t(0,s=!0),d=>o(d.detail.id)]}class Aa extends ie{constructor(e){super(),te(this,e,Ca,Oa,Q,{})}}function rs(i){let e,t,n;return{c(){e=b("mwc-icon"),e.textContent="arrow_back",S(e,"class","blah-group-menubar__icon svelte-at9cil")},m(r,s){w(r,e,s),t||(n=ae(e,"click",i[3]),t=!0)},p:M,d(r){r&&_(e),t=!1,n()}}}function Ta(i){let e,t,n,r,s=i[0].name+"",o,l,a,c,u,d,h,f,g,x,p,y,O,C,I,z,D,le,de=i[0].name+"",Se,X,$e,L,Y=i[1]&&rs(i);return z=new xi({props:{image:{src:i[0].avatar,alt:i[0].name}}}),{c(){e=b("wired-dialog"),t=b("div"),n=b("div"),r=b("h3"),o=K(s),l=A(),a=b("div"),c=b("img"),h=A(),f=b("div"),g=b("wired-button"),g.textContent="Close",x=A(),p=b("wired-card"),y=b("div"),Y&&Y.c(),O=A(),C=b("div"),I=b("div"),P(z.$$.fragment),D=A(),le=b("p"),Se=K(de),Zt(c.src,u=i[0].avatar)||k(c,"src",u),k(c,"alt",d=i[0].name),fe(c,"max-height","35vh"),fe(c,"width","100%"),S(g,"id","closeDialog"),fe(f,"width","100%"),fe(f,"text-align","center"),k(t,"class","blah-group-menubar__group-infos svelte-at9cil"),S(e,"open",i[2]),k(I,"class","blah-group-menubar__avatar svelte-at9cil"),k(le,"class","svelte-at9cil"),k(C,"class","blah-group-menubar__infos svelte-at9cil"),k(C,"title","Group infos"),k(y,"class","blah-group-menubar__container svelte-at9cil"),S(p,"elevation","2"),S(p,"class","blah-group-menubar svelte-at9cil")},m(N,re){w(N,e,re),v(e,t),v(t,n),v(n,r),v(r,o),v(t,l),v(t,a),v(a,c),v(t,h),v(t,f),v(f,g),w(N,x,re),w(N,p,re),v(p,y),Y&&Y.m(y,null),v(y,O),v(y,C),v(C,I),E(z,I,null),v(C,D),v(C,le),v(le,Se),X=!0,$e||(L=[ae(g,"click",i[4]),ae(C,"click",i[4])],$e=!0)},p(N,[re]){(!X||re&1)&&s!==(s=N[0].name+"")&&Ce(o,s),(!X||re&1&&!Zt(c.src,u=N[0].avatar))&&k(c,"src",u),(!X||re&1&&d!==(d=N[0].name))&&k(c,"alt",d),(!X||re&4)&&S(e,"open",N[2]),N[1]?Y?Y.p(N,re):(Y=rs(N),Y.c(),Y.m(y,O)):Y&&(Y.d(1),Y=null);const Ze={};re&1&&(Ze.image={src:N[0].avatar,alt:N[0].name}),z.$set(Ze),(!X||re&1)&&de!==(de=N[0].name+"")&&Ce(Se,de)},i(N){X||($(z.$$.fragment,N),X=!0)},o(N){R(z.$$.fragment,N),X=!1},d(N){N&&_(e),N&&_(x),N&&_(p),Y&&Y.d(),j(z),$e=!1,ze(L)}}}function Ma(i,e,t){let{group:n}=e,{isMobile:r=!1}=e,s=!1;const o=qe();function l(){o("navigateBack",{})}function a(){t(2,s=!s)}return i.$$set=c=>{"group"in c&&t(0,n=c.group),"isMobile"in c&&t(1,r=c.isMobile)},[n,r,s,l,a]}class hr extends ie{constructor(e){super(),te(this,e,Ma,Ta,Q,{group:0,isMobile:1})}}function os(i,e,t){const n=i.slice();return n[4]=e[t],n}function ls(i){let e,t,n,r=(i[4].user.name===i[1].name?"Me":i[4].user.name)+"",s,o,l,a=i[4].message+"",c,u,d;return{c(){e=b("div"),t=b("p"),n=b("u"),s=K(r),o=A(),l=b("wired-card"),c=K(a),u=A(),k(n,"class","svelte-1021o8k"),k(t,"class","svelte-1021o8k"),k(e,"class",d=$n(i[4].user.name===i[1].name?"blah-chat__message-self":"blah-chat__message-other")+" svelte-1021o8k")},m(h,f){w(h,e,f),v(e,t),v(t,n),v(n,s),v(e,o),v(e,l),v(l,c),v(e,u)},p(h,f){f&3&&r!==(r=(h[4].user.name===h[1].name?"Me":h[4].user.name)+"")&&Ce(s,r),f&1&&a!==(a=h[4].message+"")&&Ce(c,a),f&3&&d!==(d=$n(h[4].user.name===h[1].name?"blah-chat__message-self":"blah-chat__message-other")+" svelte-1021o8k")&&k(e,"class",d)},d(h){h&&_(e)}}}function Ea(i){let e,t,n,r=i[0].messages,s=[];for(let o=0;o<r.length;o+=1)s[o]=ls(os(i,r,o));return{c(){e=b("div"),t=b("p"),t.textContent="Start of the conversation",n=A();for(let o=0;o<s.length;o+=1)s[o].c();k(t,"class","blah-chat__intro svelte-1021o8k"),k(e,"class","blah-chat svelte-1021o8k")},m(o,l){w(o,e,l),v(e,t),v(e,n);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);i[3](e)},p(o,[l]){if(l&3){r=o[0].messages;let a;for(a=0;a<r.length;a+=1){const c=os(o,r,a);s[a]?s[a].p(c,l):(s[a]=ls(c),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},i:M,o:M,d(o){o&&_(e),Nt(s,o),i[3](null)}}}function ja(i,e,t){let{chat:n}=e,{currentUser:r}=e,s;Sr(()=>{s&&!(s.offsetHeight+s.scrollTop>s.scrollHeight-1)&&setTimeout(()=>{t(2,s.scrollTop=s.scrollHeight,s)},1)});function o(l){Be[l?"unshift":"push"](()=>{s=l,t(2,s)})}return i.$$set=l=>{"chat"in l&&t(0,n=l.chat),"currentUser"in l&&t(1,r=l.currentUser)},[n,r,s,o]}class fr extends ie{constructor(e){super(),te(this,e,ja,Ea,Q,{chat:0,currentUser:1})}}function Pa(i){let e,t,n,r,s,o,l,a;return{c(){e=b("wired-card"),t=b("span"),n=b("wired-input"),r=A(),s=b("span"),o=b("wired-icon-button"),o.innerHTML="<mwc-icon>send</mwc-icon>",S(n,"class","blah-message-input__message--input svelte-1pvx6wr"),S(n,"placeholder","Enter message..."),S(n,"value",i[0]),k(t,"class","blah-message-input__message"),k(s,"class","blah-message-input__send"),S(e,"elevation","2"),S(e,"class","blah-message-input svelte-1pvx6wr")},m(c,u){w(c,e,u),v(e,t),v(t,n),v(e,r),v(e,s),v(s,o),l||(a=[ae(n,"input",i[2]),ae(o,"click",i[1])],l=!0)},p(c,[u]){u&1&&S(n,"value",c[0])},i:M,o:M,d(c){c&&_(e),l=!1,ze(a)}}}function La(i,e,t){const n=qe();let r="";function s(l){n("newMessage",{message:r}),t(0,r="")}return[r,s,l=>t(0,r=l.target.value)]}class pr extends ie{constructor(e){super(),te(this,e,La,Pa,Q,{})}}function za(i){let e,t,n,r,s,o,l,a,c;return t=new hr({props:{group:i[0],isMobile:!1}}),t.$on("openGroupInfos",i[4]),s=new fr({props:{chat:i[2],currentUser:i[1]}}),a=new pr({}),a.$on("newMessage",i[5]),{c(){e=b("div"),P(t.$$.fragment),n=A(),r=b("div"),P(s.$$.fragment),o=A(),l=b("div"),P(a.$$.fragment),k(e,"class","blah-center-top svelte-yu0gqn"),k(r,"class","blah-center-middle svelte-yu0gqn"),k(l,"class","blah-center-bottom svelte-yu0gqn")},m(u,d){w(u,e,d),E(t,e,null),w(u,n,d),w(u,r,d),E(s,r,null),w(u,o,d),w(u,l,d),E(a,l,null),c=!0},p(u,d){const h={};d&1&&(h.group=u[0]),t.$set(h);const f={};d&4&&(f.chat=u[2]),d&2&&(f.currentUser=u[1]),s.$set(f)},i(u){c||($(t.$$.fragment,u),$(s.$$.fragment,u),$(a.$$.fragment,u),c=!0)},o(u){R(t.$$.fragment,u),R(s.$$.fragment,u),R(a.$$.fragment,u),c=!1},d(u){u&&_(e),j(t),u&&_(n),u&&_(r),j(s),u&&_(o),u&&_(l),j(a)}}}function Ia(i){let e=He("/")+"",t;return{c(){t=K(e)},m(n,r){w(n,t,r)},p:M,i:M,o:M,d(n){n&&_(t)}}}function Na(i){let e,t,n,r;const s=[Ia,za],o=[];function l(a,c){return a[0].id?1:0}return e=l(i),t=o[e]=s[e](i),{c(){t.c(),n=Ve()},m(a,c){o[e].m(a,c),w(a,n,c),r=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(me(),R(o[u],1,1,()=>{o[u]=null}),be(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){r||($(t),r=!0)},o(a){R(t),r=!1},d(a){o[e].d(a),a&&_(n)}}}function Ba(i){let e,t;return e=new Gi({props:{path:"/group/:id",primary:!1,$$slots:{default:[Na,({params:n})=>({6:n}),({params:n})=>n?64:0]},$$scope:{ctx:i}}}),{c(){P(e.$$.fragment)},m(n,r){E(e,n,r),t=!0},p(n,[r]){const s={};r&135&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function Ua(i,e,t){let n,r,s;G(i,en,c=>t(0,n=c)),G(i,Ye,c=>t(1,r=c)),G(i,fi,c=>t(2,s=c));function o(c){const u={id:"",message:c,timestamp:1,user:r};_e.newMessage(n.id,u)}return[n,r,s,o,()=>console.log("open group infos"),c=>o(c.detail.message)]}class gr extends ie{constructor(e){super(),te(this,e,Ua,Ba,Q,{})}}function Ha(i){let e,t,n;return{c(){e=b("div"),e.innerHTML='<wired-card elevation="2" class="right-card"><p>Right menu</p></wired-card>',t=A(),n=b("div"),n.innerHTML='<wired-card elevation="2" class="blah-right-middle__card svelte-1us4vh9"><p>Right zone</p></wired-card>',k(e,"class","blah-right-top svelte-1us4vh9"),k(n,"class","blah-right-middle svelte-1us4vh9")},m(r,s){w(r,e,s),w(r,t,s),w(r,n,s)},p:M,i:M,o:M,d(r){r&&_(e),r&&_(t),r&&_(n)}}}class Da extends ie{constructor(e){super(),te(this,e,null,Ha,Q,{})}}function Ga(i){let e,t;return e=new ar({props:{groupList:i[3]}}),e.$on("newGroup",i[9]),e.$on("selectGroup",i[10]),{c(){P(e.$$.fragment)},m(n,r){E(e,n,r),t=!0},p(n,r){const s={};r&8&&(s.groupList=n[3]),e.$set(s)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function Wa(i){let e,t;return e=new dr({}),e.$on("navigateTo",i[8]),{c(){P(e.$$.fragment)},m(n,r){E(e,n,r),t=!0},p:M,i(n){t||($(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function Fa(i){let e,t,n,r,s,o,l;t=new cr({props:{user:i[2]}});const a=[Wa,Ga],c=[];function u(d,h){return d[0]?0:1}return s=u(i),o=c[s]=a[s](i),{c(){e=b("div"),P(t.$$.fragment),n=A(),r=b("div"),o.c(),k(e,"class","blah-mobile-top svelte-40e048"),k(r,"class","blah-mobile-middle-bottom svelte-40e048")},m(d,h){w(d,e,h),E(t,e,null),w(d,n,h),w(d,r,h),c[s].m(r,null),l=!0},p(d,h){const f={};h&4&&(f.user=d[2]),t.$set(f);let g=s;s=u(d),s===g?c[s].p(d,h):(me(),R(c[g],1,1,()=>{c[g]=null}),be(),o=c[s],o?o.p(d,h):(o=c[s]=a[s](d),o.c()),$(o,1),o.m(r,null))},i(d){l||($(t.$$.fragment,d),$(o),l=!0)},o(d){R(t.$$.fragment,d),R(o),l=!1},d(d){d&&_(e),j(t),d&&_(n),d&&_(r),c[s].d()}}}function Va(i){let e,t,n,r,s,o,l,a,c;return t=new hr({props:{group:i[1],isMobile:!0}}),t.$on("navigateBack",i[11]),s=new fr({props:{chat:i[4],currentUser:i[2]}}),a=new pr({}),a.$on("newMessage",i[12]),{c(){e=b("div"),P(t.$$.fragment),n=A(),r=b("div"),P(s.$$.fragment),o=A(),l=b("div"),P(a.$$.fragment),k(e,"class","blah-mobile-top svelte-40e048"),k(r,"class","blah-mobile-middle svelte-40e048"),k(l,"class","blah-mobile-bottom svelte-40e048")},m(u,d){w(u,e,d),E(t,e,null),w(u,n,d),w(u,r,d),E(s,r,null),w(u,o,d),w(u,l,d),E(a,l,null),c=!0},p(u,d){const h={};d&2&&(h.group=u[1]),t.$set(h);const f={};d&16&&(f.chat=u[4]),d&4&&(f.currentUser=u[2]),s.$set(f)},i(u){c||($(t.$$.fragment,u),$(s.$$.fragment,u),$(a.$$.fragment,u),c=!0)},o(u){R(t.$$.fragment,u),R(s.$$.fragment,u),R(a.$$.fragment,u),c=!1},d(u){u&&_(e),j(t),u&&_(n),u&&_(r),j(s),u&&_(o),u&&_(l),j(a)}}}function qa(i){let e=He("/")+"",t;return{c(){t=K(e)},m(n,r){w(n,t,r)},p:M,i:M,o:M,d(n){n&&_(t)}}}function Ya(i){let e,t,n,r;const s=[qa,Va],o=[];function l(a,c){return a[1].id?1:0}return e=l(i),t=o[e]=s[e](i),{c(){t.c(),n=Ve()},m(a,c){o[e].m(a,c),w(a,n,c),r=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(me(),R(o[u],1,1,()=>{o[u]=null}),be(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){r||($(t),r=!0)},o(a){R(t),r=!1},d(a){o[e].d(a),a&&_(n)}}}function Ka(i){let e,t,n,r;return e=new Gi({props:{path:"/",primary:!1,$$slots:{default:[Fa,({params:s})=>({13:s}),({params:s})=>s?8192:0]},$$scope:{ctx:i}}}),n=new Gi({props:{path:"/group/:id",primary:!1,$$slots:{default:[Ya,({params:s})=>({13:s}),({params:s})=>s?8192:0]},$$scope:{ctx:i}}}),{c(){P(e.$$.fragment),t=A(),P(n.$$.fragment)},m(s,o){E(e,s,o),w(s,t,o),E(n,s,o),r=!0},p(s,[o]){const l={};o&16397&&(l.$$scope={dirty:o,ctx:s}),e.$set(l);const a={};o&16406&&(a.$$scope={dirty:o,ctx:s}),n.$set(a)},i(s){r||($(e.$$.fragment,s),$(n.$$.fragment,s),r=!0)},o(s){R(e.$$.fragment,s),R(n.$$.fragment,s),r=!1},d(s){j(e,s),s&&_(t),j(n,s)}}}function Xa(i,e,t){let n,r,s,o;G(i,en,p=>t(1,n=p)),G(i,Ye,p=>t(2,r=p)),G(i,pt,p=>t(3,s=p)),G(i,fi,p=>t(4,o=p));let l=!1;li(async()=>{_e.fetchData(r.id)});function a(p){_e.setCurrentGroup(p),He(`/group/${p}`)}function c(p){t(0,l=!1),p&&a(p)}function u(p){const y={id:"",message:p,timestamp:1,user:r};_e.newMessage(n.id,y)}return[l,n,r,s,o,a,c,u,p=>c(p.detail.id),()=>t(0,l=!0),p=>a(p.detail.id),()=>He("/"),p=>u(p.detail.message)]}class Za extends ie{constructor(e){super(),te(this,e,Xa,Ka,Q,{})}}function as(i,e,t){const n=i.slice();return n[3]=e[t],n}function cs(i){let e,t=i[3]+"",n,r,s,o;function l(){return i[2](i[3])}return{c(){e=b("wired-item"),n=K(t),r=A(),S(e,"class","blah-login__listbox--item svelte-x10nsy"),S(e,"value",i[3])},m(a,c){w(a,e,c),v(e,n),v(e,r),s||(o=ae(e,"click",l),s=!0)},p(a,c){i=a},d(a){a&&_(e),s=!1,o()}}}function Qa(i){let e,t,n,r=i[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=cs(as(i,r,o));return{c(){e=b("wired-card"),t=K(`LOGIN
  `),n=b("wired-listbox");for(let o=0;o<s.length;o+=1)s[o].c();S(n,"class","blah-login__listbox svelte-x10nsy"),fe(n,"--wired-item-selected-color","white"),fe(n,"--wired-item-selected-bg","lightgrey"),S(e,"elevation","2"),S(e,"class","blah-login svelte-x10nsy")},m(o,l){w(o,e,l),v(e,t),v(e,n);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(n,null)},p(o,[l]){if(l&3){r=o[0];let a;for(a=0;a<r.length;a+=1){const c=as(o,r,a);s[a]?s[a].p(c,l):(s[a]=cs(c),s[a].c(),s[a].m(n,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},i:M,o:M,d(o){o&&_(e),Nt(s,o)}}}function Ja(i){let e=["usr1","usr2","usr3","usr4"];function t(r){_e.setCurrentUser(r)}return li(async()=>{He("/login")}),ms(()=>{He("/")}),[e,t,r=>t(r)]}class ec extends ie{constructor(e){super(),te(this,e,Ja,Qa,Q,{})}}function tc(i){let e,t,n,r;const s=[sc,nc],o=[];function l(a,c){return a[0]?0:1}return t=l(i),n=o[t]=s[t](i),{c(){e=b("main"),n.c(),k(e,"class","svelte-8p1egm")},m(a,c){w(a,e,c),o[t].m(e,null),r=!0},p(a,c){let u=t;t=l(a),t===u?o[t].p(a,c):(me(),R(o[u],1,1,()=>{o[u]=null}),be(),n=o[t],n?n.p(a,c):(n=o[t]=s[t](a),n.c()),$(n,1),n.m(e,null))},i(a){r||($(n),r=!0)},o(a){R(n),r=!1},d(a){a&&_(e),o[t].d()}}}function ic(i){let e,t,n,r;return n=new ec({}),{c(){e=b("main"),t=b("div"),P(n.$$.fragment),k(t,"id","blah-layout"),k(t,"class","svelte-8p1egm"),k(e,"class","svelte-8p1egm")},m(s,o){w(s,e,o),v(e,t),E(n,t,null),r=!0},p:M,i(s){r||($(n.$$.fragment,s),r=!0)},o(s){R(n.$$.fragment,s),r=!1},d(s){s&&_(e),j(n)}}}function nc(i){let e,t,n,r,s,o,l;n=new Aa({});const a=[oc,rc],c=[];function u(d,h){return 1}return s=u(),o=c[s]=a[s](i),{c(){e=b("div"),t=b("div"),P(n.$$.fragment),r=A(),o.c(),k(t,"class","blah-layout-left svelte-8p1egm"),k(e,"id","blah-layout"),k(e,"class","svelte-8p1egm")},m(d,h){w(d,e,h),v(e,t),E(n,t,null),v(e,r),c[s].m(e,null),l=!0},p:M,i(d){l||($(n.$$.fragment,d),$(o),l=!0)},o(d){R(n.$$.fragment,d),R(o),l=!1},d(d){d&&_(e),j(n),c[s].d()}}}function sc(i){let e,t,n,r;return n=new Za({}),{c(){e=b("div"),t=b("div"),P(n.$$.fragment),k(t,"class","blah-layout-mobile svelte-8p1egm"),k(e,"id","blah-layout"),k(e,"class","svelte-8p1egm")},m(s,o){w(s,e,o),v(e,t),E(n,t,null),r=!0},p:M,i(s){r||($(n.$$.fragment,s),r=!0)},o(s){R(n.$$.fragment,s),r=!1},d(s){s&&_(e),j(n)}}}function rc(i){let e,t,n;return t=new gr({}),{c(){e=b("div"),P(t.$$.fragment),k(e,"class","blah-layout-center-extended svelte-8p1egm")},m(r,s){w(r,e,s),E(t,e,null),n=!0},i(r){n||($(t.$$.fragment,r),n=!0)},o(r){R(t.$$.fragment,r),n=!1},d(r){r&&_(e),j(t)}}}function oc(i){let e,t,n,r,s,o;return t=new gr({}),s=new Da({}),{c(){e=b("div"),P(t.$$.fragment),n=A(),r=b("div"),P(s.$$.fragment),k(e,"class","blah-layout-center svelte-8p1egm"),k(r,"class","blah-layout-right svelte-8p1egm")},m(l,a){w(l,e,a),E(t,e,null),w(l,n,a),w(l,r,a),E(s,r,null),o=!0},i(l){o||($(t.$$.fragment,l),$(s.$$.fragment,l),o=!0)},o(l){R(t.$$.fragment,l),R(s.$$.fragment,l),o=!1},d(l){l&&_(e),j(t),l&&_(n),l&&_(r),j(s)}}}function lc(i){let e,t,n,r;const s=[ic,tc],o=[];function l(a,c){return a[1].name?1:0}return e=l(i),t=o[e]=s[e](i),{c(){t.c(),n=Ve()},m(a,c){o[e].m(a,c),w(a,n,c),r=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(me(),R(o[u],1,1,()=>{o[u]=null}),be(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){r||($(t),r=!0)},o(a){R(t),r=!1},d(a){o[e].d(a),a&&_(n)}}}function ac(i){let e,t,n,r,s,o;return s=new Fs({props:{$$slots:{default:[lc]},$$scope:{ctx:i}}}),{c(){e=b("link"),t=A(),n=b("link"),r=A(),P(s.$$.fragment),k(e,"href","https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap"),k(e,"rel","stylesheet"),k(n,"href","https://fonts.googleapis.com/css?family=Material+Icons&display=block"),k(n,"rel","stylesheet")},m(l,a){w(l,e,a),w(l,t,a),w(l,n,a),w(l,r,a),E(s,l,a),o=!0},p(l,[a]){const c={};a&7&&(c.$$scope={dirty:a,ctx:l}),s.$set(c)},i(l){o||($(s.$$.fragment,l),o=!0)},o(l){R(s.$$.fragment,l),o=!1},d(l){l&&_(e),l&&_(t),l&&_(n),l&&_(r),j(s,l)}}}function cc(i,e,t){let n;G(i,Ye,s=>t(1,n=s));let r=window.innerWidth<700;return window.addEventListener("resize",()=>{t(0,r=window.innerWidth<700)}),[r,n]}class uc extends ie{constructor(e){super(),te(this,e,cc,ac,Q,{})}}new uc({target:document.getElementById("app")});
