var ws=Object.defineProperty,_s=Object.defineProperties;var xs=Object.getOwnPropertyDescriptors;var Wi=Object.getOwnPropertySymbols;var Rs=Object.prototype.hasOwnProperty,$s=Object.prototype.propertyIsEnumerable;var Fi=(i,e,t)=>e in i?ws(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Q=(i,e)=>{for(var t in e||(e={}))Rs.call(e,t)&&Fi(i,t,e[t]);if(Wi)for(var t of Wi(e))$s.call(e,t)&&Fi(i,t,e[t]);return i},oe=(i,e)=>_s(i,xs(e));function re(){}function ft(i,e){for(const t in e)i[t]=e[t];return i}function Vi(i){return i()}function qi(){return Object.create(null)}function Re(i){i.forEach(Vi)}function Gi(i){return typeof i=="function"}function Gt(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let gt;function Sr(i,e){return gt||(gt=document.createElement("a")),gt.href=e,i===gt.href}function Ss(i){return Object.keys(i).length===0}function Yt(i,...e){if(i==null)return re;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function $e(i){let e;return Yt(i,t=>e=t)(),e}function J(i,e,t){i.$$.on_destroy.push(Yt(e,t))}function Yi(i,e,t,n){if(i){const s=Ki(i,e,t,n);return i[0](s)}}function Ki(i,e,t,n){return i[1]&&n?ft(t.ctx.slice(),i[1](n(e))):t.ctx}function Xi(i,e,t,n){if(i[2]&&n){const s=i[2](n(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|s[a];return o}return e.dirty|s}return e.dirty}function Zi(i,e,t,n,s,o){if(s){const r=Ki(e,t,n,o);i.p(r,s)}}function Qi(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Ji(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function en(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function kr(i){return i==null?"":i}function ks(i,e){i.appendChild(e)}function U(i,e,t){i.insertBefore(e,t||null)}function N(i){i.parentNode.removeChild(i)}function Or(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function bt(i){return document.createElement(i)}function Kt(i){return document.createTextNode(i)}function vt(){return Kt(" ")}function Xt(){return Kt("")}function Ar(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function W(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Er(i,e,t){e in i?i[e]=typeof i[e]=="boolean"&&t===""?!0:t:W(i,e,t)}function Os(i){return Array.from(i.childNodes)}function As(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function Zt(i,e,t,n){i.style.setProperty(e,t,n?"important":"")}function Es(i,e,t=!1){const n=document.createEvent("CustomEvent");return n.initCustomEvent(i,t,!1,e),n}let mt;function yt(i){mt=i}function Se(){if(!mt)throw new Error("Function called outside component initialization");return mt}function Ts(i){Se().$$.on_mount.push(i)}function Tr(i){Se().$$.after_update.push(i)}function Cs(i){Se().$$.on_destroy.push(i)}function Cr(){const i=Se();return(e,t)=>{const n=i.$$.callbacks[e];if(n){const s=Es(e,t);n.slice().forEach(o=>{o.call(i,s)})}}}function De(i,e){Se().$$.context.set(i,e)}function ae(i){return Se().$$.context.get(i)}const Ue=[],tn=[],wt=[],nn=[],sn=Promise.resolve();let Qt=!1;function on(){Qt||(Qt=!0,sn.then(rn))}function js(){return on(),sn}function Jt(i){wt.push(i)}let ei=!1;const ti=new Set;function rn(){if(!ei){ei=!0;do{for(let i=0;i<Ue.length;i+=1){const e=Ue[i];yt(e),Ms(e.$$)}for(yt(null),Ue.length=0;tn.length;)tn.pop()();for(let i=0;i<wt.length;i+=1){const e=wt[i];ti.has(e)||(ti.add(e),e())}wt.length=0}while(Ue.length);for(;nn.length;)nn.pop()();Qt=!1,ei=!1,ti.clear()}}function Ms(i){if(i.fragment!==null){i.update(),Re(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Jt)}}const _t=new Set;let fe;function ii(){fe={r:0,c:[],p:fe}}function ni(){fe.r||Re(fe.c),fe=fe.p}function F(i,e){i&&i.i&&(_t.delete(i),i.i(e))}function ee(i,e,t,n){if(i&&i.o){if(_t.has(i))return;_t.add(i),fe.c.push(()=>{_t.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}}function Ps(i,e){const t={},n={},s={$$scope:1};let o=i.length;for(;o--;){const r=i[o],a=e[o];if(a){for(const l in r)l in a||(n[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);i[o]=a}else for(const l in r)s[l]=1}for(const r in n)r in t||(t[r]=void 0);return t}function an(i){return typeof i=="object"&&i!==null?i:{}}function si(i){i&&i.c()}function xt(i,e,t,n){const{fragment:s,on_mount:o,on_destroy:r,after_update:a}=i.$$;s&&s.m(e,t),n||Jt(()=>{const l=o.map(Vi).filter(Gi);r?r.push(...l):Re(l),i.$$.on_mount=[]}),a.forEach(Jt)}function Rt(i,e){const t=i.$$;t.fragment!==null&&(Re(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function zs(i,e){i.$$.dirty[0]===-1&&(Ue.push(i),on(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function ln(i,e,t,n,s,o,r,a=[-1]){const l=mt;yt(i);const c=i.$$={fragment:null,ctx:null,props:o,update:re,not_equal:s,bound:qi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:qi(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let d=!1;if(c.ctx=t?t(i,e.props||{},(u,p,...f)=>{const b=f.length?f[0]:p;return c.ctx&&s(c.ctx[u],c.ctx[u]=b)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](b),d&&zs(i,u)),p}):[],c.update(),d=!0,Re(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const u=Os(e.target);c.fragment&&c.fragment.l(u),u.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&F(i.$$.fragment),xt(i,e.target,e.anchor,e.customElement),rn()}yt(l)}class cn{$destroy(){Rt(this,1),this.$destroy=re}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Ss(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/*! *****************************************************************************
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
***************************************************************************** */function Is(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ri=Symbol(),dn=new Map;class hn{constructor(e,t){if(this._$cssResult$=!0,t!==ri)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=dn.get(this.cssText);return oi&&e===void 0&&(dn.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Ls=i=>new hn(typeof i=="string"?i:i+"",ri),m=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new hn(t,ri)},Ns=(i,e)=>{oi?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)})},un=oi?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ls(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ai;const pn=window.reactiveElementPolyfillSupport,li={toAttribute(i,e){switch(e){case Boolean:i=i?"":null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},fn=(i,e)=>e!==i&&(e==e||i==i),ci={attribute:!0,type:String,converter:li,reflect:!1,hasChanged:fn};class ke extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const s=this._$Eh(n,t);s!==void 0&&(this._$Eu.set(s,n),e.push(s))}),e}static createProperty(e,t=ci){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ci}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of n)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(un(s))}else e!==void 0&&t.push(un(e));return t}static _$Eh(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Ep(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$Em)!==null&&t!==void 0?t:this._$Em=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$Em)===null||t===void 0||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ns(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Em)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Em)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$Eg(e,t,n=ci){var s,o;const r=this.constructor._$Eh(e,n);if(r!==void 0&&n.reflect===!0){const a=((o=(s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:li.toAttribute)(t,n.type);this._$Ei=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(e,t){var n,s,o;const r=this.constructor,a=r._$Eu.get(e);if(a!==void 0&&this._$Ei!==a){const l=r.getPropertyOptions(a),c=l.converter,d=(o=(s=(n=c)===null||n===void 0?void 0:n.fromAttribute)!==null&&s!==void 0?s:typeof c=="function"?c:null)!==null&&o!==void 0?o:li.fromAttribute;this._$Ei=a,this[a]=d(t,l.type),this._$Ei=null}}requestUpdate(e,t,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||fn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Ei!==e&&(this._$ES===void 0&&(this._$ES=new Map),this._$ES.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,o)=>this[o]=s),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$Em)===null||e===void 0||e.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(n)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$Em)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){this._$ES!==void 0&&(this._$ES.forEach((t,n)=>this._$Eg(n,this[n],t)),this._$ES=void 0),this._$EU()}updated(e){}firstUpdated(e){}}ke.finalized=!0,ke.elementProperties=new Map,ke.elementStyles=[],ke.shadowRootOptions={mode:"open"},pn==null||pn({ReactiveElement:ke}),((ai=globalThis.reactiveElementVersions)!==null&&ai!==void 0?ai:globalThis.reactiveElementVersions=[]).push("1.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var di;const $t=globalThis.trustedTypes,gn=$t?$t.createPolicy("lit-html",{createHTML:i=>i}):void 0,le=`lit$${(Math.random()+"").slice(9)}$`,bn="?"+le,Bs=`<${bn}>`,Oe=document,We=(i="")=>Oe.createComment(i),Fe=i=>i===null||typeof i!="object"&&typeof i!="function",vn=Array.isArray,Hs=i=>{var e;return vn(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mn=/-->/g,yn=/>/g,ge=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,wn=/'/g,_n=/"/g,xn=/^(?:script|style|textarea)$/i,Ds=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),y=Ds(1),Ae=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Rn=new WeakMap,Us=(i,e,t)=>{var n,s;const o=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let r=o._$litPart$;if(r===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new Ge(e.insertBefore(We(),a),a,void 0,t!=null?t:{})}return r._$AI(i),r},Ee=Oe.createTreeWalker(Oe,129,null,!1),Ws=(i,e)=>{const t=i.length-1,n=[];let s,o=e===2?"<svg>":"",r=Ve;for(let l=0;l<t;l++){const c=i[l];let d,u,p=-1,f=0;for(;f<c.length&&(r.lastIndex=f,u=r.exec(c),u!==null);)f=r.lastIndex,r===Ve?u[1]==="!--"?r=mn:u[1]!==void 0?r=yn:u[2]!==void 0?(xn.test(u[2])&&(s=RegExp("</"+u[2],"g")),r=ge):u[3]!==void 0&&(r=ge):r===ge?u[0]===">"?(r=s!=null?s:Ve,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?ge:u[3]==='"'?_n:wn):r===_n||r===wn?r=ge:r===mn||r===yn?r=Ve:(r=ge,s=void 0);const b=r===ge&&i[l+1].startsWith("/>")?" ":"";o+=r===Ve?c+Bs:p>=0?(n.push(d),c.slice(0,p)+"$lit$"+c.slice(p)+le+b):c+le+(p===-2?(n.push(void 0),l):b)}const a=o+(i[t]||"<?>")+(e===2?"</svg>":"");return[gn!==void 0?gn.createHTML(a):a,n]};class qe{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[c,d]=Ws(e,t);if(this.el=qe.createElement(c,n),Ee.currentNode=this.el.content,t===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(s=Ee.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const p of s.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(le)){const f=d[r++];if(u.push(p),f!==void 0){const b=s.getAttribute(f.toLowerCase()+"$lit$").split(le),x=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:x[2],strings:b,ctor:x[1]==="."?Vs:x[1]==="?"?qs:x[1]==="@"?Gs:St})}else l.push({type:6,index:o})}for(const p of u)s.removeAttribute(p)}if(xn.test(s.tagName)){const u=s.textContent.split(le),p=u.length-1;if(p>0){s.textContent=$t?$t.emptyScript:"";for(let f=0;f<p;f++)s.append(u[f],We()),Ee.nextNode(),l.push({type:2,index:++o});s.append(u[p],We())}}}else if(s.nodeType===8)if(s.data===bn)l.push({type:2,index:o});else{let u=-1;for(;(u=s.data.indexOf(le,u+1))!==-1;)l.push({type:7,index:o}),u+=le.length-1}o++}}static createElement(e,t){const n=Oe.createElement("template");return n.innerHTML=e,n}}function Te(i,e,t=i,n){var s,o,r,a;if(e===Ae)return e;let l=n!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[n]:t._$Cu;const c=Fe(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((r=(a=t)._$Cl)!==null&&r!==void 0?r:a._$Cl=[])[n]=l:t._$Cu=l),l!==void 0&&(e=Te(i,l._$AS(i,e.values),l,n)),e}class Fs{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:s}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Oe).importNode(n,!0);Ee.currentNode=o;let r=Ee.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new Ge(r,r.nextSibling,this,e):c.type===1?d=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(d=new Ys(r,this,e)),this.v.push(d),c=s[++l]}a!==(c==null?void 0:c.index)&&(r=Ee.nextNode(),a++)}return o}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Ge{constructor(e,t,n,s){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cg=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Te(this,e,t),Fe(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Ae&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):Hs(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==T&&Fe(this._$AH)?this._$AA.nextSibling.data=e:this.S(Oe.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=qe.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(n);else{const r=new Fs(o,this),a=r.p(this.options);r.m(n),this.S(a),this._$AH=r}}_$AC(e){let t=Rn.get(e.strings);return t===void 0&&Rn.set(e.strings,t=new qe(e)),t}M(e){vn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const o of e)s===t.length?t.push(n=new Ge(this.A(We()),this.A(We()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class St{constructor(e,t,n,s,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){const o=this.strings;let r=!1;if(o===void 0)e=Te(this,e,t,0),r=!Fe(e)||e!==this._$AH&&e!==Ae,r&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Te(this,a[n+l],t,l),c===Ae&&(c=this._$AH[l]),r||(r=!Fe(c)||c!==this._$AH[l]),c===T?e=T:e!==T&&(e+=(c!=null?c:"")+o[l+1]),this._$AH[l]=c}r&&!s&&this.k(e)}k(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Vs extends St{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===T?void 0:e}}class qs extends St{constructor(){super(...arguments),this.type=4}k(e){e&&e!==T?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Gs extends St{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=Te(this,e,t,0))!==null&&n!==void 0?n:T)===Ae)return;const s=this._$AH,o=e===T&&s!==T||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==T&&(s===T||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ys{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Te(this,e)}}const $n=window.litHtmlPolyfillSupport;$n==null||$n(qe,Ge),((di=globalThis.litHtmlVersions)!==null&&di!==void 0?di:globalThis.litHtmlVersions=[]).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hi,ui;class Y extends ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Us(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Ae}}Y.finalized=!0,Y._$litElement$=!0,(hi=globalThis.litElementHydrateSupport)===null||hi===void 0||hi.call(globalThis,{LitElement:Y});const Sn=globalThis.litElementPolyfillSupport;Sn==null||Sn({LitElement:Y});((ui=globalThis.litElementVersions)!==null&&ui!==void 0?ui:globalThis.litElementVersions=[]).push("3.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=i=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:s,elements:o}=n;return{kind:s,elements:o,finisher(r){window.customElements.define(t,r)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?oe(Q({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function h(i){return(e,t)=>t!==void 0?((n,s,o)=>{s.constructor.createProperty(o,n)})(i,e,t):Ks(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xs(i){return h(oe(Q({},i),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zs=({finisher:i,descriptor:e})=>(t,n)=>{var s;if(n===void 0){const o=(s=t.originalKey)!==null&&s!==void 0?s:t.key,r=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:oe(Q({},t),{key:o});return i!=null&&(r.finisher=function(a){i(a,o)}),r}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(o,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(i,e){return Zs({descriptor:t=>{const n={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;n.get=function(){var o,r;return this[s]===void 0&&(this[s]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&r!==void 0?r:null),this[s]}}return n}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Qs=m`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pi=class extends Y{render(){return y`<span><slot></slot></span>`}};pi.styles=[Qs];pi=Is([w("mwc-icon")],pi);const kn=i=>typeof i=="undefined",Js=i=>typeof i=="function",On=i=>typeof i=="number";function An(){let i=0;return()=>i++}function eo(){return Math.random().toString(36).substring(2)}const ce=typeof window=="undefined";function En(i,e,t){return i.addEventListener(e,t),()=>i.removeEventListener(e,t)}const Ce=[];function to(i,e){return{subscribe:K(i,e).subscribe}}function K(i,e=re){let t;const n=new Set;function s(a){if(Gt(i,a)&&(i=a,t)){const l=!Ce.length;for(const c of n)c[1](),Ce.push(c,i);if(l){for(let c=0;c<Ce.length;c+=2)Ce[c][0](Ce[c+1]);Ce.length=0}}}function o(a){s(a(i))}function r(a,l=re){const c=[a,l];return n.add(c),n.size===1&&(t=e(s)||re),a(i),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:s,update:o,subscribe:r}}function io(i,e,t){const n=!Array.isArray(i),s=n?[i]:i,o=e.length<2;return to(t,r=>{let a=!1;const l=[];let c=0,d=re;const u=()=>{if(c)return;d();const f=e(n?l[0]:l,r);o?r(f):d=Gi(f)?f:re},p=s.map((f,b)=>Yt(f,x=>{l[b]=x,c&=~(1<<b),a&&u()},()=>{c|=1<<b}));return a=!0,u(),function(){Re(p),d()}})}const Ye=i=>`@@svnav-ctx__${i}`,fi=Ye("LOCATION"),je=Ye("ROUTER"),Tn=Ye("ROUTE"),no=Ye("ROUTE_PARAMS"),so=Ye("FOCUS_ELEM"),Cn=/^:(.+)/,jn=(i,e)=>i.substr(0,e.length)===e,oo=i=>i==="",ro=i=>Cn.test(i),Mn=i=>i[0]==="*",ao=i=>i.replace(/\*.*$/,""),Pn=i=>i.replace(/(^\/+|\/+$)/g,"");function X(i,e=!1){const t=Pn(i).split("/");return e?t.filter(Boolean):t}const gi=(i,e)=>i+(e?`?${e}`:""),bi=i=>`/${Pn(i)}`;function Ke(...i){const e=n=>X(n,!0).join("/"),t=i.map(e).join("/");return bi(t)}const zn=1,kt=2,be=3,lo=4,In=5,co=6,Ln=7,ho=8,uo=9,Nn=10,Bn=11,po={[zn]:"Link",[kt]:"Route",[be]:"Router",[lo]:"useFocus",[In]:"useLocation",[co]:"useMatch",[Ln]:"useNavigate",[ho]:"useParams",[uo]:"useResolvable",[Nn]:"useResolve",[Bn]:"navigate"},vi=i=>po[i];function fo(i,e){let t;return i===kt?t=e.path?`path="${e.path}"`:"default":i===zn?t=`to="${e.to}"`:i===be&&(t=`basepath="${e.basepath||""}"`),`<${vi(i)} ${t||""} />`}function go(i,e,t,n){const s=t&&fo(n||i,t),o=s?`

Occurred in: ${s}`:"",r=vi(i),a=Js(e)?e(r):e;return`<${r}> ${a}${o}`}const Hn=i=>(...e)=>i(go(...e)),Dn=Hn(i=>{throw new Error(i)}),Ot=Hn(console.warn),Un=4,bo=3,vo=2,mo=1,yo=1;function wo(i,e){const t=i.default?0:X(i.fullPath).reduce((n,s)=>{let o=n;return o+=Un,oo(s)?o+=yo:ro(s)?o+=vo:Mn(s)?o-=Un+mo:o+=bo,o},0);return{route:i,score:t,index:e}}function _o(i){return i.map(wo).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function Wn(i,e){let t,n;const[s]=e.split("?"),o=X(s),r=o[0]==="",a=_o(i);for(let l=0,c=a.length;l<c;l++){const{route:d}=a[l];let u=!1;const p={},f=R=>oe(Q({},d),{params:p,uri:R});if(d.default){n=f(e);continue}const b=X(d.fullPath),x=Math.max(o.length,b.length);let _=0;for(;_<x;_++){const R=b[_],M=o[_];if(!kn(R)&&Mn(R)){const P=R==="*"?"*":R.slice(1);p[P]=o.slice(_).map(decodeURIComponent).join("/");break}if(kn(M)){u=!0;break}const D=Cn.exec(R);if(D&&!r){const P=decodeURIComponent(M);p[D[1]]=P}else if(R!==M){u=!0;break}}if(!u){t=f(Ke(...o.slice(0,_)));break}}return t||n||null}function Fn(i,e){return Wn([i],e)}function xo(i,e){if(jn(i,"/"))return i;const[t,n]=i.split("?"),[s]=e.split("?"),o=X(t),r=X(s);if(o[0]==="")return gi(s,n);if(!jn(o[0],".")){const c=r.concat(o).join("/");return gi((s==="/"?"":"/")+c,n)}const a=r.concat(o),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),gi(`/${l.join("/")}`,n)}function Vn(i,e){const{pathname:t,hash:n="",search:s="",state:o}=i,r=X(e,!0),a=X(t,!0);for(;r.length;)r[0]!==a[0]&&Dn(be,`Invalid state: All locations must begin with the basepath "${e}", found "${t}"`),r.shift(),a.shift();return{pathname:Ke(...a),hash:n,search:s,state:o}}const qn=i=>i.length===1?"":i;function Gn(i){const e=i.indexOf("?"),t=i.indexOf("#"),n=e!==-1,s=t!==-1,o=s?qn(i.substr(t)):"",r=s?i.substr(0,t):i,a=n?qn(r.substr(e)):"";return{pathname:n?r.substr(0,e):r,search:a,hash:o}}function Ro(i,e,t){return Ke(t,xo(i,e))}function $o(i,e){const t=bi(ao(i)),n=X(t,!0),s=X(e,!0).slice(0,n.length),o=Fn({fullPath:t},Ke(...s));return o&&o.uri}const mi="POP",So="PUSH",ko="REPLACE";function yi(i){return oe(Q({},i.location),{pathname:encodeURI(decodeURI(i.location.pathname)),state:i.history.state,_key:i.history.state&&i.history.state._key||"initial"})}function Oo(i){let e=[],t=yi(i),n=mi;const s=(o=e)=>o.forEach(r=>r({location:t,action:n}));return{get location(){return t},listen(o){e.push(o);const r=()=>{t=yi(i),n=mi,s([o])};s([o]);const a=En(i,"popstate",r);return()=>{a(),e=e.filter(l=>l!==o)}},navigate(o,r){const{state:a={},replace:l=!1}=r||{};if(n=l?ko:So,On(o))r&&Ot(Bn,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),n=mi,i.history.go(o);else{const c=oe(Q({},a),{_key:eo()});try{i.history[l?"replaceState":"pushState"](c,"",o)}catch{i.location[l?"replace":"assign"](o)}}t=yi(i),s()}}}function wi(i,e){return oe(Q({},Gn(e)),{state:i})}function Ao(i="/"){let e=0,t=[wi(null,i)];return{get entries(){return t},get location(){return t[e]},addEventListener(){},removeEventListener(){},history:{get state(){return t[e].state},pushState(n,s,o){e++,t=t.slice(0,e),t.push(wi(n,o))},replaceState(n,s,o){t[e]=wi(n,o)},go(n){const s=e+n;s<0||s>t.length-1||(e=s)}}}}const Eo=!!(!ce&&window.document&&window.document.createElement),To=!ce&&window.location.origin==="null",Yn=Oo(Eo&&!To?window:Ao()),{navigate:Mr}=Yn;let te=null,Kn=!0;function Co(i,e){const t=document.querySelectorAll("[data-svnav-router]");for(let n=0;n<t.length;n++){const s=t[n],o=Number(s.dataset.svnavRouter);if(o===i)return!0;if(o===e)return!1}return!1}function jo(i){(!te||i.level>te.level||i.level===te.level&&Co(i.routerId,te.routerId))&&(te=i)}function Mo(){te=null}function Po(){Kn=!1}function Xn(i){if(!i)return!1;const e="tabindex";try{if(!i.hasAttribute(e)){i.setAttribute(e,"-1");let t;t=En(i,"blur",()=>{i.removeAttribute(e),t()})}return i.focus(),document.activeElement===i}catch{return!1}}function zo(i,e){return Number(i.dataset.svnavRouteEnd)===e}function Io(i){return/^H[1-6]$/i.test(i.tagName)}function Zn(i,e=document){return e.querySelector(i)}function Lo(i){let t=Zn(`[data-svnav-route-start="${i}"]`).nextElementSibling;for(;!zo(t,i);){if(Io(t))return t;const n=Zn("h1,h2,h3,h4,h5,h6",t);if(n)return n;t=t.nextElementSibling}return null}function No(i){Promise.resolve($e(i.focusElement)).then(e=>{const t=e||Lo(i.id);t||Ot(be,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,i,kt),!Xn(t)&&Xn(document.documentElement)})}const Bo=(i,e,t)=>(n,s)=>js().then(()=>{if(!te||Kn){Po();return}if(n&&No(te.route),i.announcements&&s){const{path:o,fullPath:r,meta:a,params:l,uri:c}=te.route,d=i.createAnnouncement({path:o,fullPath:r,meta:a,params:l,uri:c},$e(t));Promise.resolve(d).then(u=>{e.set(u)})}Mo()}),Ho="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Do(i){let e,t;return{c(){e=bt("div"),t=Kt(i[0]),W(e,"role","status"),W(e,"aria-atomic","true"),W(e,"aria-live","polite"),W(e,"style",Ho)},m(n,s){U(n,e,s),ks(e,t)},p(n,s){s[0]&1&&As(t,n[0])},d(n){n&&N(e)}}}function Uo(i){let e,t,n,s,o;const r=i[20].default,a=Yi(r,i,i[19],null);let l=i[2]&&i[4]&&i[1].announcements&&Do(i);return{c(){e=bt("div"),t=vt(),a&&a.c(),n=vt(),l&&l.c(),s=Xt(),Zt(e,"display","none"),W(e,"aria-hidden","true"),W(e,"data-svnav-router",i[3])},m(c,d){U(c,e,d),U(c,t,d),a&&a.m(c,d),U(c,n,d),l&&l.m(c,d),U(c,s,d),o=!0},p(c,d){a&&a.p&&(!o||d[0]&524288)&&Zi(a,r,c,c[19],o?Xi(r,c[19],d,null):Qi(c[19]),null),c[2]&&c[4]&&c[1].announcements&&l.p(c,d)},i(c){o||(F(a,c),o=!0)},o(c){ee(a,c),o=!1},d(c){c&&N(e),c&&N(t),a&&a.d(c),c&&N(n),l&&l.d(c),c&&N(s)}}}const Wo=An(),Qn="/";function Fo(i,e,t){let n,s,o,r,a,{$$slots:l={},$$scope:c}=e,{basepath:d=Qn}=e,{url:u=null}=e,{history:p=Yn}=e,{primary:f=!0}=e,{a11y:b={}}=e;const x=Q({createAnnouncement:g=>`Navigated to ${g.uri}`,announcements:!0},b),_=d,R=bi(d),M=ae(fi),D=ae(je),P=!M,xe=Wo(),ue=f&&!(D&&!D.manageFocus),ie=K("");J(i,ie,g=>t(0,a=g));const pe=K([]);J(i,pe,g=>t(18,r=g));const Z=K(null);J(i,Z,g=>t(16,s=g));let pt=!1;const v=P?0:D.level+1,ne=P?K((()=>Vn(ce?Gn(u):p.location,R))()):M;J(i,ne,g=>t(15,n=g));const qt=K(n);J(i,qt,g=>t(17,o=g));const vs=Bo(x,ie,ne),Ui=g=>G=>G.filter(se=>se.id!==g);function ms(g){if(ce){if(pt)return;const G=Fn(g,n.pathname);if(G)return pt=!0,G}else pe.update(G=>{const se=Ui(g.id)(G);return se.push(g),se})}function ys(g){pe.update(Ui(g))}return!P&&d!==Qn&&Ot(be,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:d}),P&&(Ts(()=>p.listen(G=>{const se=Vn(G.location,R);qt.set(n),ne.set(se)})),De(fi,ne)),De(je,{activeRoute:Z,registerRoute:ms,unregisterRoute:ys,manageFocus:ue,level:v,id:xe,history:P?p:D.history,basepath:P?R:D.basepath}),i.$$set=g=>{"basepath"in g&&t(10,d=g.basepath),"url"in g&&t(11,u=g.url),"history"in g&&t(12,p=g.history),"primary"in g&&t(13,f=g.primary),"a11y"in g&&t(14,b=g.a11y),"$$scope"in g&&t(19,c=g.$$scope)},i.$$.update=()=>{if(i.$$.dirty[0]&1024&&d!==_&&Ot(be,'You cannot change the "basepath" prop. It is ignored.'),i.$$.dirty[0]&294912){const g=Wn(r,n.pathname);Z.set(g)}if(i.$$.dirty[0]&163840&&P){const g=!!n.hash,G=!g&&ue,se=!g||n.pathname!==o.pathname;vs(G,se)}i.$$.dirty[0]&65536&&ue&&s&&s.primary&&jo({level:v,routerId:xe,route:s})},[a,x,P,xe,ue,ie,pe,Z,ne,qt,d,u,p,f,b,n,s,o,r,c,l]}class Vo extends cn{constructor(e){super();ln(this,e,Fo,Uo,Gt,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}}function At(i,e,t=je,n=be){ae(t)||Dn(i,o=>`You cannot use ${o} outside of a ${vi(n)}.`,e)}const qo=i=>{const{subscribe:e}=ae(i);return{subscribe:e}};function Go(){return At(In),qo(fi)}function Yo(){const{history:i}=ae(je);return i}function Jn(){const i=ae(Tn);return i?io(i,e=>e.base):K("/")}function Ko(){At(Nn);const i=Jn(),{basepath:e}=ae(je);return n=>Ro(n,$e(i),e)}function Xo(){At(Ln);const i=Ko(),{navigate:e}=Yo();return(n,s)=>{const o=On(n)?n:i(n);return e(o,s)}}const Zo=i=>({params:i&16,location:i&8}),es=i=>({params:ce?$e(i[9]):i[4],location:i[3],navigate:i[10]});function ts(i){let e,t;return e=new Vo({props:{primary:i[1],$$slots:{default:[er]},$$scope:{ctx:i}}}),{c(){si(e.$$.fragment)},m(n,s){xt(e,n,s),t=!0},p(n,s){const o={};s&2&&(o.primary=n[1]),s&264217&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){ee(e.$$.fragment,n),t=!1},d(n){Rt(e,n)}}}function Qo(i){let e;const t=i[17].default,n=Yi(t,i,i[18],es);return{c(){n&&n.c()},m(s,o){n&&n.m(s,o),e=!0},p(s,o){n&&n.p&&(!e||o&262168)&&Zi(n,t,s,s[18],e?Xi(t,s[18],o,Zo):Qi(s[18]),es)},i(s){e||(F(n,s),e=!0)},o(s){ee(n,s),e=!1},d(s){n&&n.d(s)}}}function Jo(i){let e,t,n;const s=[{location:i[3]},{navigate:i[10]},ce?$e(i[9]):i[4],i[11]];var o=i[0];function r(a){let l={};for(let c=0;c<s.length;c+=1)l=ft(l,s[c]);return{props:l}}return o&&(e=new o(r())),{c(){e&&si(e.$$.fragment),t=Xt()},m(a,l){e&&xt(e,a,l),U(a,t,l),n=!0},p(a,l){const c=l&3608?Ps(s,[l&8&&{location:a[3]},l&1024&&{navigate:a[10]},l&528&&an(ce?$e(a[9]):a[4]),l&2048&&an(a[11])]):{};if(o!==(o=a[0])){if(e){ii();const d=e;ee(d.$$.fragment,1,0,()=>{Rt(d,1)}),ni()}o?(e=new o(r()),si(e.$$.fragment),F(e.$$.fragment,1),xt(e,t.parentNode,t)):e=null}else o&&e.$set(c)},i(a){n||(e&&F(e.$$.fragment,a),n=!0)},o(a){e&&ee(e.$$.fragment,a),n=!1},d(a){a&&N(t),e&&Rt(e,a)}}}function er(i){let e,t,n,s;const o=[Jo,Qo],r=[];function a(l,c){return l[0]!==null?0:1}return e=a(i),t=r[e]=o[e](i),{c(){t.c(),n=Xt()},m(l,c){r[e].m(l,c),U(l,n,c),s=!0},p(l,c){let d=e;e=a(l),e===d?r[e].p(l,c):(ii(),ee(r[d],1,1,()=>{r[d]=null}),ni(),t=r[e],t?t.p(l,c):(t=r[e]=o[e](l),t.c()),F(t,1),t.m(n.parentNode,n))},i(l){s||(F(t),s=!0)},o(l){ee(t),s=!1},d(l){r[e].d(l),l&&N(n)}}}function tr(i){let e,t,n,s,o,r=i[2]&&ts(i);return{c(){e=bt("div"),t=vt(),r&&r.c(),n=vt(),s=bt("div"),Zt(e,"display","none"),W(e,"aria-hidden","true"),W(e,"data-svnav-route-start",i[5]),Zt(s,"display","none"),W(s,"aria-hidden","true"),W(s,"data-svnav-route-end",i[5])},m(a,l){U(a,e,l),U(a,t,l),r&&r.m(a,l),U(a,n,l),U(a,s,l),o=!0},p(a,[l]){a[2]?r?(r.p(a,l),l&4&&F(r,1)):(r=ts(a),r.c(),F(r,1),r.m(n.parentNode,n)):r&&(ii(),ee(r,1,1,()=>{r=null}),ni())},i(a){o||(F(r),o=!0)},o(a){ee(r),o=!1},d(a){a&&N(e),a&&N(t),r&&r.d(a),a&&N(n),a&&N(s)}}}const ir=An();function nr(i,e,t){let n;const s=["path","component","meta","primary"];let o=en(e,s),r,a,l,c,{$$slots:d={},$$scope:u}=e,{path:p=""}=e,{component:f=null}=e,{meta:b={}}=e,{primary:x=!0}=e;At(kt,e);const _=ir(),{registerRoute:R,unregisterRoute:M,activeRoute:D}=ae(je);J(i,D,v=>t(15,r=v));const P=Jn();J(i,P,v=>t(16,l=v));const xe=Go();J(i,xe,v=>t(3,a=v));const ue=K(null);let ie;const pe=K(),Z=K({});J(i,Z,v=>t(4,c=v)),De(Tn,pe),De(no,Z),De(so,ue);const pt=Xo();return ce||Cs(()=>M(_)),i.$$set=v=>{t(23,e=ft(ft({},e),Ji(v))),t(11,o=en(e,s)),"path"in v&&t(12,p=v.path),"component"in v&&t(0,f=v.component),"meta"in v&&t(13,b=v.meta),"primary"in v&&t(1,x=v.primary),"$$scope"in v&&t(18,u=v.$$scope)},i.$$.update=()=>{if(i.$$.dirty&77834){const v=p==="",Vt=Ke(l,p),ne={id:_,path:p,meta:b,default:v,fullPath:v?"":Vt,base:v?l:$o(Vt,a.pathname),primary:x,focusElement:ue};pe.set(ne),t(14,ie=R(ne))}if(i.$$.dirty&49152&&t(2,n=!!(ie||r&&r.id===_)),i.$$.dirty&49156&&n){const{params:v}=ie||r;Z.set(v)}},e=Ji(e),[f,x,n,a,c,_,D,P,xe,Z,pt,o,p,b,ie,r,l,d,u]}class Pr extends cn{constructor(e){super();ln(this,e,nr,tr,Gt,{path:12,component:0,meta:13,primary:1})}}var sr=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},or=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};const $=m`
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
`;class S extends Y{constructor(){super(...arguments);this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}fire(e,t){_i(this,e,t)}}sr([A("svg"),or("design:type",SVGSVGElement)],S.prototype,"svg",void 0);function rr(){return Math.floor(Math.random()*2**31)}function _i(i,e,t){i.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:t}))}function xi(i,e,t){if(i&&i.length){const[n,s]=e,o=Math.PI/180*t,r=Math.cos(o),a=Math.sin(o);i.forEach(l=>{const[c,d]=l;l[0]=(c-n)*r-(d-s)*a+n,l[1]=(c-n)*a+(d-s)*r+s})}}function ar(i,e,t){const n=[];i.forEach(s=>n.push(...s)),xi(n,e,t)}function Xe(i){const e=i[0],t=i[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function lr(i,e,t,n){const s=e[1]-i[1],o=i[0]-e[0],r=s*i[0]+o*i[1],a=n[1]-t[1],l=t[0]-n[0],c=a*t[0]+l*t[1],d=s*l-a*o;return d?[(l*r-o*c)/d,(s*c-a*r)/d]:null}function Ri(i,e,t){const n=i.length;if(n<3)return!1;const s=[Number.MAX_SAFE_INTEGER,t],o=[e,t];let r=0;for(let a=0;a<n;a++){const l=i[a],c=i[(a+1)%n];if(is(l,c,o,s)){if(Qe(l,o,c)===0)return Ze(l,o,c);r++}}return r%2==1}function Ze(i,e,t){return e[0]<=Math.max(i[0],t[0])&&e[0]>=Math.min(i[0],t[0])&&e[1]<=Math.max(i[1],t[1])&&e[1]>=Math.min(i[1],t[1])}function Qe(i,e,t){const n=(e[1]-i[1])*(t[0]-e[0])-(e[0]-i[0])*(t[1]-e[1]);return n===0?0:n>0?1:2}function is(i,e,t,n){const s=Qe(i,e,t),o=Qe(i,e,n),r=Qe(t,n,i),a=Qe(t,n,e);return!!(s!==o&&r!==a||s===0&&Ze(i,t,e)||o===0&&Ze(i,n,e)||r===0&&Ze(t,i,n)||a===0&&Ze(t,e,n))}function cr(i,e){const t=[0,0],n=Math.round(e.hachureAngle+90);n&&xi(i,t,n);const s=dr(i,e);return n&&(xi(i,t,-n),ar(s,t,-n)),s}function dr(i,e){const t=[...i];t[0].join(",")!==t[t.length-1].join(",")&&t.push([t[0][0],t[0][1]]);const n=[];if(t&&t.length>2){let s=e.hachureGap;s<0&&(s=e.strokeWidth*4),s=Math.max(s,.1);const o=[];for(let l=0;l<t.length-1;l++){const c=t[l],d=t[l+1];if(c[1]!==d[1]){const u=Math.min(c[1],d[1]);o.push({ymin:u,ymax:Math.max(c[1],d[1]),x:u===c[1]?c[0]:d[0],islope:(d[0]-c[0])/(d[1]-c[1])})}}if(o.sort((l,c)=>l.ymin<c.ymin?-1:l.ymin>c.ymin?1:l.x<c.x?-1:l.x>c.x?1:l.ymax===c.ymax?0:(l.ymax-c.ymax)/Math.abs(l.ymax-c.ymax)),!o.length)return n;let r=[],a=o[0].ymin;for(;r.length||o.length;){if(o.length){let l=-1;for(let d=0;d<o.length&&!(o[d].ymin>a);d++)l=d;o.splice(0,l+1).forEach(d=>{r.push({s:a,edge:d})})}if(r=r.filter(l=>!(l.edge.ymax<=a)),r.sort((l,c)=>l.edge.x===c.edge.x?0:(l.edge.x-c.edge.x)/Math.abs(l.edge.x-c.edge.x)),r.length>1)for(let l=0;l<r.length;l=l+2){const c=l+1;if(c>=r.length)break;const d=r[l].edge,u=r[c].edge;n.push([[Math.round(d.x),a],[Math.round(u.x),a]])}a+=s,r.forEach(l=>{l.edge.x=l.edge.x+s*l.edge.islope})}}return n}class hr{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,n=!1){let s=cr(e,t);if(n){const r=this.connectingLines(e,s);s=s.concat(r)}const o=this.renderLines(s,t);return{type:"fillSketch",ops:o}}renderLines(e,t){const n=[];for(const s of e)n.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],t));return n}connectingLines(e,t){const n=[];if(t.length>1)for(let s=1;s<t.length;s++){const o=t[s-1];if(Xe(o)<3)continue;const a=[t[s][0],o[1]];if(Xe(a)>3){const l=this.splitOnIntersections(e,a);n.push(...l)}}return n}midPointInPolygon(e,t){return Ri(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){const n=Math.max(5,Xe(t)*.1),s=[];for(let o=0;o<e.length;o++){const r=e[o],a=e[(o+1)%e.length];if(is(r,a,...t)){const l=lr(r,a,t[0],t[1]);if(l){const c=Xe([l,t[0]]),d=Xe([l,t[1]]);c>n&&d>n&&s.push({point:l,distance:c})}}}if(s.length>1){const o=s.sort((l,c)=>l.distance-c.distance).map(l=>l.point);if(Ri(e,...t[0])||o.shift(),Ri(e,...t[1])||o.pop(),o.length<=1)return this.midPointInPolygon(e,t)?[t]:[];const r=[t[0],...o,t[1]],a=[];for(let l=0;l<r.length-1;l+=2){const c=[r[l],r[l+1]];this.midPointInPolygon(e,c)&&a.push(c)}return a}else return this.midPointInPolygon(e,t)?[t]:[]}}class ur extends hr{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}}class pr{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function ns(i,e,t,n,s){return{type:"path",ops:Je(i,e,t,n,s)}}function fr(i,e,t){const n=(i||[]).length;if(n>2){const s=[];for(let o=0;o<n-1;o++)s.push(...Je(i[o][0],i[o][1],i[o+1][0],i[o+1][1],t));return e&&s.push(...Je(i[n-1][0],i[n-1][1],i[0][0],i[0][1],t)),{type:"path",ops:s}}else if(n===2)return ns(i[0][0],i[0][1],i[1][0],i[1][1],t);return{type:"path",ops:[]}}function ss(i,e){return fr(i,!0,e)}function gr(i,e,t,n,s){const o=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]];return ss(o,s)}function os(i,e,t,n,s){const o=rs(t,n,s);return br(i,e,s,o).opset}function rs(i,e,t){const n=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(i/2,2)+Math.pow(e/2,2))/2)),s=Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*n),o=Math.PI*2/s;let r=Math.abs(i/2),a=Math.abs(e/2);const l=1-t.curveFitting;return r+=k(r*l,t),a+=k(a*l,t),{increment:o,rx:r,ry:a}}function br(i,e,t,n){const[s,o]=ds(n.increment,i,e,n.rx,n.ry,1,n.increment*$i(.1,$i(.4,1,t),t),t);let r=cs(s,null,t);if(!t.disableMultiStroke){const[a]=ds(n.increment,i,e,n.rx,n.ry,1.5,0,t),l=cs(a,null,t);r=r.concat(l)}return{estimatedPoints:o,opset:{type:"path",ops:r}}}function vr(i,e,t,n,s){return Je(i,e,t,n,s,!0)}function as(i){return i.randomizer||(i.randomizer=new pr(i.seed||0)),i.randomizer.next()}function $i(i,e,t,n=1){return t.roughness*n*(as(t)*(e-i)+i)}function k(i,e,t=1){return $i(-i,i,e,t)}function Je(i,e,t,n,s,o=!1){const r=o?s.disableMultiStrokeFill:s.disableMultiStroke,a=ls(i,e,t,n,s,!0,!1);if(r)return a;const l=ls(i,e,t,n,s,!0,!0);return a.concat(l)}function ls(i,e,t,n,s,o,r){const a=Math.pow(i-t,2)+Math.pow(e-n,2),l=Math.sqrt(a);let c=1;l<200?c=1:l>500?c=.4:c=-.0016668*l+1.233334;let d=s.maxRandomnessOffset||0;d*d*100>a&&(d=l/10);const u=d/2,p=.2+as(s)*.2;let f=s.bowing*s.maxRandomnessOffset*(n-e)/200,b=s.bowing*s.maxRandomnessOffset*(i-t)/200;f=k(f,s,c),b=k(b,s,c);const x=[],_=()=>k(u,s,c),R=()=>k(d,s,c),M=s.preserveVertices;return o&&(r?x.push({op:"move",data:[i+(M?0:_()),e+(M?0:_())]}):x.push({op:"move",data:[i+(M?0:k(d,s,c)),e+(M?0:k(d,s,c))]})),r?x.push({op:"bcurveTo",data:[f+i+(t-i)*p+_(),b+e+(n-e)*p+_(),f+i+2*(t-i)*p+_(),b+e+2*(n-e)*p+_(),t+(M?0:_()),n+(M?0:_())]}):x.push({op:"bcurveTo",data:[f+i+(t-i)*p+R(),b+e+(n-e)*p+R(),f+i+2*(t-i)*p+R(),b+e+2*(n-e)*p+R(),t+(M?0:R()),n+(M?0:R())]}),x}function cs(i,e,t){const n=i.length,s=[];if(n>3){const o=[],r=1-t.curveTightness;s.push({op:"move",data:[i[1][0],i[1][1]]});for(let a=1;a+2<n;a++){const l=i[a];o[0]=[l[0],l[1]],o[1]=[l[0]+(r*i[a+1][0]-r*i[a-1][0])/6,l[1]+(r*i[a+1][1]-r*i[a-1][1])/6],o[2]=[i[a+1][0]+(r*i[a][0]-r*i[a+2][0])/6,i[a+1][1]+(r*i[a][1]-r*i[a+2][1])/6],o[3]=[i[a+1][0],i[a+1][1]],s.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(e&&e.length===2){const a=t.maxRandomnessOffset;s.push({op:"lineTo",data:[e[0]+k(a,t),e[1]+k(a,t)]})}}else n===3?(s.push({op:"move",data:[i[1][0],i[1][1]]}),s.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[2][0],i[2][1]]})):n===2&&s.push(...Je(i[0][0],i[0][1],i[1][0],i[1][1],t));return s}function ds(i,e,t,n,s,o,r,a){const l=[],c=[],d=k(.5,a)-Math.PI/2;c.push([k(o,a)+e+.9*n*Math.cos(d-i),k(o,a)+t+.9*s*Math.sin(d-i)]);for(let u=d;u<Math.PI*2+d-.01;u=u+i){const p=[k(o,a)+e+n*Math.cos(u),k(o,a)+t+s*Math.sin(u)];l.push(p),c.push(p)}return c.push([k(o,a)+e+n*Math.cos(d+Math.PI*2+r*.5),k(o,a)+t+s*Math.sin(d+Math.PI*2+r*.5)]),c.push([k(o,a)+e+.98*n*Math.cos(d+r),k(o,a)+t+.98*s*Math.sin(d+r)]),c.push([k(o,a)+e+.9*n*Math.cos(d+r*.5),k(o,a)+t+.9*s*Math.sin(d+r*.5)]),[c,l]}const mr={randOffset(i,e){return i},randOffsetWithRange(i,e,t){return(i+e)/2},ellipse(i,e,t,n,s){return os(i,e,t,n,s)},doubleLineOps(i,e,t,n,s){return vr(i,e,t,n,s)}};function Me(i){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:i}}function yr(i,e){let t="";for(const n of i.ops){const s=n.data;switch(n.op){case"move":if(e&&t)break;t+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `;break}}return t.trim()}function Pe(i,e){const t=document.createElementNS("http://www.w3.org/2000/svg",i);if(e)for(const n in e)t.setAttributeNS(null,n,e[n]);return t}function et(i,e,t=!1){const n=Pe("path",{d:yr(i,t)});return e&&e.appendChild(n),n}function z(i,e,t,n,s,o){return et(gr(e+2,t+2,n-4,s-4,Me(o)),i)}function O(i,e,t,n,s,o){return et(ns(e,t,n,s,Me(o)),i)}function wr(i,e,t){return et(ss(e,Me(t)),i,!0)}function ve(i,e,t,n,s,o){return n=Math.max(n>10?n-4:n-1,1),s=Math.max(s>10?s-4:s-1,1),et(os(e,t,n,s,Me(o)),i)}function Et(i,e){const n=new ur(mr).fillPolygon(i,Me(e));return et(n,null)}function Si(i,e,t,n,s){const o=Me(s),r=rs(t,n,o),a=[];let l=0;for(;l<=Math.PI*2;)a.push([i+r.rx*Math.cos(l),e+r.ry*Math.sin(l)]),l+=r.increment;return Et(a,s)}var Tt=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ct=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let tt=class extends S{constructor(){super();this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[$,m`
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
      `]}render(){return y`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,s=e.height+(t-1)*2;return[n,s]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};z(e,0,0,s.width,s.height,this.seed);for(let o=1;o<n;o++)O(e,o*2,s.height+o*2,s.width+o*2,s.height+o*2,this.seed).style.opacity=`${(75-o*10)/100}`,O(e,s.width+o*2,s.height+o*2,s.width+o*2,o*2,this.seed).style.opacity=`${(75-o*10)/100}`,O(e,o*2,s.height+o*2,s.width+o*2,s.height+o*2,this.seed).style.opacity=`${(75-o*10)/100}`,O(e,s.width+o*2,s.height+o*2,s.width+o*2,o*2,this.seed).style.opacity=`${(75-o*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};Tt([h({type:Number}),Ct("design:type",Object)],tt.prototype,"elevation",void 0);Tt([h({type:Boolean,reflect:!0}),Ct("design:type",Object)],tt.prototype,"disabled",void 0);Tt([A("button"),Ct("design:type",HTMLButtonElement)],tt.prototype,"button",void 0);tt=Tt([w("wired-button"),Ct("design:paramtypes",[])],tt);var ki=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Oi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let it=class extends S{constructor(){super();this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[$,m`
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
      `]}render(){return y`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,s=e.height+(t-1)*2;return[n,s]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};if(this.fill&&this.fill.trim()){const o=Et([[2,2],[s.width-4,2],[s.width-2,s.height-4],[2,s.height-4]],this.seed);o.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(o)}z(e,2,2,s.width-4,s.height-4,this.seed);for(let o=1;o<n;o++)O(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`}};ki([h({type:Number}),Oi("design:type",Object)],it.prototype,"elevation",void 0);ki([h({type:String}),Oi("design:type",String)],it.prototype,"fill",void 0);it=ki([w("wired-card"),Oi("design:paramtypes",[])],it);var nt=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},jt=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ze=class extends S{constructor(){super(...arguments);this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[$,m`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return y`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){z(e,0,0,t[0],t[1],this.seed),this.svgCheck=Pe("g"),e.appendChild(this.svgCheck),O(this.svgCheck,t[0]*.3,t[1]*.4,t[0]*.5,t[1]*.7,this.seed),O(this.svgCheck,t[0]*.5,t[1]*.7,t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};nt([h({type:Boolean}),jt("design:type",Object)],ze.prototype,"checked",void 0);nt([h({type:Boolean,reflect:!0}),jt("design:type",Object)],ze.prototype,"disabled",void 0);nt([Xs(),jt("design:type",Object)],ze.prototype,"focused",void 0);nt([A("input"),jt("design:type",HTMLInputElement)],ze.prototype,"input",void 0);ze=nt([w("wired-checkbox")],ze);var Mt=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ai=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let st=class extends S{constructor(){super(...arguments);this.value="",this.name="",this.selected=!1}static get styles(){return[$,m`
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
      `]}render(){return y`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const n=Et([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(n)}};Mt([h(),Ai("design:type",Object)],st.prototype,"value",void 0);Mt([h(),Ai("design:type",Object)],st.prototype,"name",void 0);Mt([h({type:Boolean}),Ai("design:type",Object)],st.prototype,"selected",void 0);st=Mt([w("wired-item")],st);var Ie=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},ot=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let me=class extends Y{constructor(){super(...arguments);this.disabled=!1,this.seed=rr(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return m`
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
    `}render(){return y`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const n=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${n.width}`),t.setAttribute("height",`${n.height}`);const s=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=s.height+"px",z(t,0,0,s.width,s.height,this.seed);const o=s.width-4;z(t,o,0,34,s.height,this.seed);const r=Math.max(0,Math.abs((s.height-24)/2)),a=wr(t,[[o+8,5+r],[o+26,5+r],[o+17,r+Math.min(s.height,18)]],this.seed);if(a.style.fill="currentColor",a.style.pointerEvents=this.disabled?"none":"auto",a.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const l=this.shadowRoot.getElementById("slot").assignedNodes();if(l&&l.length)for(let c=0;c<l.length;c++){const d=l[c];d.tagName==="WIRED-ITEM"&&(d.setAttribute("role","option"),this.itemNodes.push(d))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let n=null;for(let s=0;s<t.length;s++){const o=t[s];if(o.tagName==="WIRED-ITEM"){const r=o.value||o.getAttribute("value")||"";if(this.selected&&r===this.selected){n=o;break}}}this.lastSelectedItem=n||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),n?this.value={value:n.value||"",text:n.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(n=>n.nodeType===Node.ELEMENT_NODE).forEach(n=>{const s=n;s.requestUpdate&&s.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){_i(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Ie([h({type:Object}),ot("design:type",Object)],me.prototype,"value",void 0);Ie([h({type:String,reflect:!0}),ot("design:type",String)],me.prototype,"selected",void 0);Ie([h({type:Boolean,reflect:!0}),ot("design:type",Object)],me.prototype,"disabled",void 0);Ie([A("svg"),ot("design:type",SVGSVGElement)],me.prototype,"svg",void 0);Ie([A("#card"),ot("design:type",HTMLDivElement)],me.prototype,"card",void 0);me=Ie([w("wired-combo")],me);var Pt=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ei=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let rt=class extends Y{constructor(){super(...arguments);this.elevation=5,this.open=!1}static get styles(){return m`
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
    `}render(){return y`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};Pt([h({type:Number}),Ei("design:type",Object)],rt.prototype,"elevation",void 0);Pt([h({type:Boolean,reflect:!0}),Ei("design:type",Object)],rt.prototype,"open",void 0);Pt([A("wired-card"),Ei("design:type",it)],rt.prototype,"card",void 0);rt=Pt([w("wired-dialog")],rt);var hs=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},_r=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ti=class extends S{constructor(){super(...arguments);this.elevation=1,this.roAttached=!1}static get styles(){return[$,m`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return y`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,t*6]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5);for(let s=0;s<n;s++)O(e,0,s*6+3,t[0],s*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};hs([h({type:Number}),_r("design:type",Object)],Ti.prototype,"elevation",void 0);Ti=hs([w("wired-divider")],Ti);var Ci=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},us=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let zt=class extends S{constructor(){super(...arguments);this.disabled=!1}static get styles(){return[$,m`
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
      `]}render(){return y`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]),s=Si(n/2,n/2,n,n,this.seed);e.appendChild(s)}};Ci([h({type:Boolean,reflect:!0}),us("design:type",Object)],zt.prototype,"disabled",void 0);Ci([A("button"),us("design:type",HTMLButtonElement)],zt.prototype,"button",void 0);zt=Ci([w("wired-fab")],zt);var ji=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},ps=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let It=class extends S{constructor(){super(...arguments);this.disabled=!1}static get styles(){return[$,m`
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
      `]}render(){return y`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]);e.setAttribute("width",`${n}`),e.setAttribute("height",`${n}`),ve(e,n/2,n/2,n,n,this.seed)}};ji([h({type:Boolean,reflect:!0}),ps("design:type",Object)],It.prototype,"disabled",void 0);ji([A("button"),ps("design:type",HTMLButtonElement)],It.prototype,"button",void 0);It=ji([w("wired-icon-button")],It);var Mi=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Pi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};const xr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let Lt=class extends S{constructor(){super();this.elevation=1,this.src=xr,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[$,m`
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
      `]}render(){return y`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,s=e.height+(t-1)*2;return[n,s]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};z(e,2,2,s.width-4,s.height-4,this.seed);for(let o=1;o<n;o++)O(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`}};Mi([h({type:Number}),Pi("design:type",Object)],Lt.prototype,"elevation",void 0);Mi([h({type:String}),Pi("design:type",String)],Lt.prototype,"src",void 0);Lt=Mi([w("wired-image"),Pi("design:paramtypes",[])],Lt);var C=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},j=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let E=class extends S{constructor(){super();this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[$,m`
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
      `]}render(){return y`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){z(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};C([h({type:Boolean,reflect:!0}),j("design:type",Object)],E.prototype,"disabled",void 0);C([h({type:String}),j("design:type",Object)],E.prototype,"placeholder",void 0);C([h({type:String}),j("design:type",String)],E.prototype,"name",void 0);C([h({type:String}),j("design:type",String)],E.prototype,"min",void 0);C([h({type:String}),j("design:type",String)],E.prototype,"max",void 0);C([h({type:String}),j("design:type",String)],E.prototype,"step",void 0);C([h({type:String}),j("design:type",Object)],E.prototype,"type",void 0);C([h({type:String}),j("design:type",Object)],E.prototype,"autocomplete",void 0);C([h({type:String}),j("design:type",Object)],E.prototype,"autocapitalize",void 0);C([h({type:String}),j("design:type",Object)],E.prototype,"autocorrect",void 0);C([h({type:Boolean}),j("design:type",Object)],E.prototype,"required",void 0);C([h({type:Boolean}),j("design:type",Object)],E.prototype,"autofocus",void 0);C([h({type:Boolean}),j("design:type",Object)],E.prototype,"readonly",void 0);C([h({type:Number}),j("design:type",Number)],E.prototype,"minlength",void 0);C([h({type:Number}),j("design:type",Number)],E.prototype,"maxlength",void 0);C([h({type:Number}),j("design:type",Number)],E.prototype,"size",void 0);C([A("input"),j("design:type",HTMLInputElement)],E.prototype,"textInput",void 0);E=C([w("wired-input"),j("design:paramtypes",[])],E);var at=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Nt=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Le=class extends S{constructor(){super(...arguments);this.elevation=1}static get styles(){return[$,m`
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
      `]}render(){return y`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width,s=e.height+(t-1)*2;return[n,s]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),s={width:t[0],height:t[1]-(n-1)*2};for(let o=0;o<n;o++)O(e,0,s.height+o*2-2,s.width,s.height+o*2-2,this.seed),O(e,0,s.height+o*2-2,s.width,s.height+o*2-2,this.seed)}};at([h({type:Number}),Nt("design:type",Object)],Le.prototype,"elevation",void 0);at([h({type:String}),Nt("design:type",String)],Le.prototype,"href",void 0);at([h({type:String}),Nt("design:type",String)],Le.prototype,"target",void 0);at([A("a"),Nt("design:type",HTMLAnchorElement)],Le.prototype,"anchor",void 0);Le=at([w("wired-link")],Le);var Bt=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},zi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let lt=class extends S{constructor(){super(...arguments);this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[$,m`
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
      `]}render(){return y`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];n.tagName==="WIRED-ITEM"&&(n.setAttribute("role","option"),this.itemNodes.push(n))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let n=null;for(let s=0;s<t.length;s++){const o=t[s];if(o.tagName==="WIRED-ITEM"){const r=o.value||"";if(this.selected&&r===this.selected){n=o;break}}}this.lastSelectedItem=n||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),n?this.value={value:n.value||"",text:n.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){z(e,0,0,t[0],t[1],this.seed)}};Bt([h({type:Object}),zi("design:type",Object)],lt.prototype,"value",void 0);Bt([h({type:String}),zi("design:type",String)],lt.prototype,"selected",void 0);Bt([h({type:Boolean}),zi("design:type",Object)],lt.prototype,"horizontal",void 0);lt=Bt([w("wired-listbox")],lt);var ct=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ht=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ye=class extends S{constructor(){super(...arguments);this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[$,m`
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
      `]}render(){return y`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){z(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const n=t.width*Math.max(0,Math.min(e,100));this.progBox=Et([[0,0],[n,0],[n,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};ct([h({type:Number}),Ht("design:type",Object)],ye.prototype,"value",void 0);ct([h({type:Number}),Ht("design:type",Object)],ye.prototype,"min",void 0);ct([h({type:Number}),Ht("design:type",Object)],ye.prototype,"max",void 0);ct([h({type:Boolean}),Ht("design:type",Object)],ye.prototype,"percentage",void 0);ye=ct([w("wired-progress")],ye);var Ne=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},dt=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let we=class extends S{constructor(){super(...arguments);this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[$,m`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return y`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){ve(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=Pe("g"),e.appendChild(this.svgCheck);const n=Math.max(t[0]*.6,5),s=Math.max(t[1]*.6,5);ve(this.svgCheck,t[0]/2,t[1]/2,n,s,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Ne([h({type:Boolean}),dt("design:type",Object)],we.prototype,"checked",void 0);Ne([h({type:Boolean,reflect:!0}),dt("design:type",Object)],we.prototype,"disabled",void 0);Ne([h({type:String}),dt("design:type",String)],we.prototype,"name",void 0);Ne([h(),dt("design:type",Object)],we.prototype,"focused",void 0);Ne([A("input"),dt("design:type",HTMLInputElement)],we.prototype,"input",void 0);we=Ne([w("wired-radio")],we);var fs=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Rr=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ii=class extends Y{constructor(){super(...arguments);this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return m`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return y`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,n=e.target,s=n.name||"";t?(this.selected=t&&s||"",this.fireSelected()):n.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],t&&t.length)for(let n=0;n<t.length;n++){const s=t[n];if(s.tagName==="WIRED-RADIO"){this.radioNodes.push(s);const o=s.name||"";this.selected&&o===this.selected?s.checked=!0:s.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){n=s;break}n<0?t=e[0]:(n--,n<0&&(n=e.length-1),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){n=s;break}n<0?t=e[0]:(n++,n>=e.length&&(n=0),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){_i(this,"selected",{selected:this.selected})}};fs([h({type:String}),Rr("design:type",String)],Ii.prototype,"selected",void 0);Ii=fs([w("wired-radio-group")],Ii);var _e=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Be=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let de=class extends S{constructor(){super(...arguments);this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[$,m`
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
      `]}render(){return y`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){z(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=Pe("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),ve(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),O(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=Pe("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),O(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),O(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};_e([h({type:Boolean,reflect:!0}),Be("design:type",Object)],de.prototype,"disabled",void 0);_e([h({type:String}),Be("design:type",Object)],de.prototype,"placeholder",void 0);_e([h({type:String}),Be("design:type",Object)],de.prototype,"autocomplete",void 0);_e([h({type:String}),Be("design:type",Object)],de.prototype,"autocorrect",void 0);_e([h({type:Boolean}),Be("design:type",Object)],de.prototype,"autofocus",void 0);_e([A("input"),Be("design:type",HTMLInputElement)],de.prototype,"textInput",void 0);de=_e([w("wired-search-input")],de);var He=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},ht=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let he=class extends S{constructor(){super(...arguments);this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[$,m`
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
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return y`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const n=Math.round(t[1]/2);O(e,0,n,t[0],n,this.seed).classList.add("bar"),this.knob=ve(e,10,n,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),n=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${n*(this.canvasWidth-20)}px)`)}}};He([h({type:Number}),ht("design:type",Object)],he.prototype,"min",void 0);He([h({type:Number}),ht("design:type",Object)],he.prototype,"max",void 0);He([h({type:Number}),ht("design:type",Object)],he.prototype,"step",void 0);He([h({type:Boolean,reflect:!0}),ht("design:type",Object)],he.prototype,"disabled",void 0);He([A("input"),ht("design:type",HTMLInputElement)],he.prototype,"input",void 0);he=He([w("wired-slider")],he);var Li=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},gs=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Dt=class extends S{constructor(){super(...arguments);this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[$,m`
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
      `]}render(){return y`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){ve(e,t[0]/2,t[1]/2,Math.floor(t[0]*.8),Math.floor(.8*t[1]),this.seed),this.knob=Si(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Li([h({type:Boolean}),gs("design:type",Object)],Dt.prototype,"spinning",void 0);Li([h({type:Number}),gs("design:type",Object)],Dt.prototype,"duration",void 0);Dt=Li([w("wired-spinner")],Dt);var Ni=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Bi=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ut=class extends S{constructor(){super();this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[$,m`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return y`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){z(e,2,2,t[0]-4,t[1]-4,this.seed)}};Ni([h({type:String}),Bi("design:type",Object)],Ut.prototype,"name",void 0);Ni([h({type:String}),Bi("design:type",Object)],Ut.prototype,"label",void 0);Ut=Ni([w("wired-tab"),Bi("design:paramtypes",[])],Ut);var Hi=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},bs=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Wt=class extends Y{constructor(){super(...arguments);this.pages=[],this.pageMap=new Map}static get styles(){return[$,m`
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
      `]}render(){return y`
    <div id="bar">
      ${this.pages.map(e=>y`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const n=e[t];if(n.nodeType===Node.ELEMENT_NODE&&n.tagName.toLowerCase()==="wired-tab"){const s=n;this.pages.push(s);const o=s.getAttribute("name")||"";o&&o.trim().split(" ").forEach(r=>{r&&this.pageMap.set(r,s)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const n=this.pages[t];n===e?n.classList.remove("hidden"):n.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};Hi([h({type:String}),bs("design:type",String)],Wt.prototype,"selected",void 0);Hi([A("slot"),bs("design:type",HTMLSlotElement)],Wt.prototype,"slotElement",void 0);Wt=Hi([w("wired-tabs")],Wt);var L=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},B=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let I=class extends S{constructor(){super(...arguments);this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[$,m`
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
      `]}render(){return y`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){z(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};L([h({type:Boolean,reflect:!0}),B("design:type",Object)],I.prototype,"disabled",void 0);L([h({type:Number}),B("design:type",Object)],I.prototype,"rows",void 0);L([h({type:Number}),B("design:type",Object)],I.prototype,"maxrows",void 0);L([h({type:String}),B("design:type",Object)],I.prototype,"autocomplete",void 0);L([h({type:Boolean}),B("design:type",Object)],I.prototype,"autofocus",void 0);L([h({type:String}),B("design:type",Object)],I.prototype,"inputmode",void 0);L([h({type:String}),B("design:type",Object)],I.prototype,"placeholder",void 0);L([h({type:Boolean}),B("design:type",Object)],I.prototype,"required",void 0);L([h({type:Boolean}),B("design:type",Object)],I.prototype,"readonly",void 0);L([h({type:Number}),B("design:type",Number)],I.prototype,"minlength",void 0);L([h({type:Number}),B("design:type",Number)],I.prototype,"maxlength",void 0);L([A("textarea"),B("design:type",HTMLTextAreaElement)],I.prototype,"textareaInput",void 0);I=L([w("wired-textarea")],I);var Ft=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Di=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ut=class extends S{constructor(){super(...arguments);this.checked=!1,this.disabled=!1}static get styles(){return[$,m`
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
      `]}render(){return y`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){z(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Pe("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const s=Si(16,16,32,32,this.seed);s.classList.add("knobfill"),this.knob.appendChild(s),ve(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};Ft([h({type:Boolean}),Di("design:type",Object)],ut.prototype,"checked",void 0);Ft([h({type:Boolean,reflect:!0}),Di("design:type",Object)],ut.prototype,"disabled",void 0);Ft([A("input"),Di("design:type",HTMLInputElement)],ut.prototype,"input",void 0);ut=Ft([w("wired-toggle")],ut);var V=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},q=globalThis&&globalThis.__metadata||function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let H=class extends S{constructor(){super();this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[$,m`
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
      `]}render(){return y`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){z(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}:${n}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};V([h({type:String}),q("design:type",Object)],H.prototype,"src",void 0);V([h({type:Boolean}),q("design:type",Object)],H.prototype,"autoplay",void 0);V([h({type:Boolean}),q("design:type",Object)],H.prototype,"loop",void 0);V([h({type:Boolean}),q("design:type",Object)],H.prototype,"muted",void 0);V([h({type:Boolean}),q("design:type",Object)],H.prototype,"playsinline",void 0);V([h(),q("design:type",Object)],H.prototype,"playing",void 0);V([h(),q("design:type",Object)],H.prototype,"timeDisplay",void 0);V([A("wired-progress"),q("design:type",ye)],H.prototype,"progressBar",void 0);V([A("wired-slider"),q("design:type",he)],H.prototype,"slider",void 0);V([A("video"),q("design:type",HTMLVideoElement)],H.prototype,"video",void 0);H=V([w("wired-video"),q("design:paramtypes",[])],H);export{tn as A,J as B,Ts as C,Mr as D,Re as E,kr as F,Tr as G,Cs as H,Vo as I,Pr as R,cn as S,W as a,Sr as b,U as c,N as d,bt as e,si as f,vt as g,Er as h,ln as i,ks as j,As as k,Ar as l,xt as m,re as n,F as o,ee as p,Rt as q,Zt as r,Gt as s,Kt as t,ii as u,ni as v,K as w,Or as x,Cr as y,Xt as z};
