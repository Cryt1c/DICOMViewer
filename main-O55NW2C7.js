import{$ as Sa,$a as tr,$b as Wa,A as qn,Aa as V,Ab as L,B as Co,Ba as Zi,Bb as k,C as Dt,Ca as Ma,Cb as Se,D as ln,Da as Qi,Db as ee,E as ie,Ea as mn,Eb as Vt,F as Do,Fa as gn,Fb as ue,G as ba,Ga as xa,Gb as j,H as Xn,Ha as Na,Hb as z,I as dn,Ia,Ib as nt,J as Et,Ja as Ta,Jb as Qe,K as Eo,Ka as ka,Kb as ne,L as ya,La as Oa,Lb as dt,M as Xi,Ma as Fa,Mb as q,N as Ze,Na as _n,Nb as ja,O as fe,Oa as Pa,Ob as We,P as H,Pa as Ro,Pb as za,Q as re,Qa as Mo,Qb as de,R as x,Ra as xe,Rb as Bt,S as un,Sa as b,Sb as Ha,T as Yi,Ta as ct,Tb as ut,U as B,Ua as Ne,Ub as Be,V as W,Va as $e,Vb as Zn,W as wa,Wa as Kn,Wb as ko,X as p,Xa as Ji,Xb as Qn,Y as R,Ya as xo,Yb as ir,Z as l,Za as Ve,Zb as me,_ as kt,_a as er,_b as $a,a as f,aa as _e,ab as La,ac as Q,b as ce,ba as Ae,bb as No,bc as se,ca as Re,cb as D,cc as Ga,d as T,da as ve,db as G,dc as rr,e as pa,ea as be,eb as F,f as st,fa as Ao,fb as oe,g as wo,ga as Ca,gb as Oe,h as St,ha as K,hb as Io,i as ma,ia as C,ib as To,j as v,ja as Ot,jb as lt,k as le,ka as Da,kb as J,l as ke,la as P,lb as ye,m as He,ma as N,mb as we,n as m,na as Ft,nb as Va,o as Gi,oa as Ki,ob as Ba,p as tt,pa as pe,pb as Ua,q as ga,qa as Yn,qb as Y,r as A,ra as Ea,rb as _,s as at,sa as hn,sb as y,t as Ct,ta as fn,tb as ae,u as Tt,ua as pn,ub as vn,v as qi,va as Aa,vb as bn,w as _a,wa as Ra,wb as Lt,x as va,xa as Pt,xb as At,y as he,ya as Me,yb as Fe,z as So,za as S,zb as nr}from"./chunk-KHRIEGSB.js";var qa=null;function ht(){return qa}function Oo(n){qa??=n}var Jn=class{},yn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:()=>l(Xa),providedIn:"platform"})}return n})();var Xa=(()=>{class n extends yn{_location;_history;_doc=l(C);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ht().getBaseHref(this._doc)}onPopState(e){let t=ht().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=ht().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Za(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function Ya(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function Rt(n){return n&&n[0]!=="?"?`?${n}`:n}var or=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:()=>l(Hd),providedIn:"root"})}return n})(),zd=new p(""),Hd=(()=>{class n extends or{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(C).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Za(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Rt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let s=this.prepareExternalUrl(r+Rt(o));this._platformLocation.pushState(e,t,s)}replaceState(e,t,r,o){let s=this.prepareExternalUrl(r+Rt(o));this._platformLocation.replaceState(e,t,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(R(yn),R(zd,8))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mt=(()=>{class n{_subject=new v;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Gd(Ya(Ka(t))),this._locationStrategy.onPopState(r=>{let o={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Rt(t))}normalize(e){return n.stripTrailingSlash(Wd(this._basePath,Ka(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Rt(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Rt(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=Rt;static joinWithSlash=Za;static stripTrailingSlash=Ya;static \u0275fac=function(t){return new(t||n)(R(or))};static \u0275prov=B({token:n,factory:()=>$d(),providedIn:"root"})}return n})();function $d(){return new Mt(R(or))}function Wd(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Ka(n){return n.replace(/\/index\.html$/,"")}function Gd(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Ut=(()=>{class n{_viewContainer;_context=new sr;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Qa(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Qa(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(Ji(Ve),Ji(ct))};static \u0275dir=F({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),sr=class{$implicit=null;ngIf=null};function Qa(n,i){if(n&&!n.createEmbeddedView)throw new x(2020,!1)}var Fo=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(K);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(Ji(Ve))};static \u0275dir=F({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Pt]})}return n})();var it=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({})}return n})();function ei(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()!==i)continue;let s=o;try{s=decodeURIComponent(o)}catch(c){}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var Po="browser";function Ja(n){return n===Po}var ti=class{_doc;constructor(i){this._doc=i}manager},ar=(()=>{class n extends ti{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(R(C))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),dr=new p(""),jo=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof ar));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof ar);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new x(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(R(dr),R(N))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Vo="ng-app-id";function ec(n){for(let i of n)i.remove()}function tc(n,i){let e=i.createElement("style");return e.textContent=n,e}function Yd(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Vo}="${i}"],link[${Vo}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Vo),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Uo(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var zo=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,Yd(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,tc);t?.forEach(r=>this.addUsage(r,this.external,Uo))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(ec(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ec(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,tc(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Uo(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(R(C),R(Yn),R(pn,8),R(hn))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Bo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ho=/%COMP%/g;var ic="%COMP%",Kd=`_nghost-${ic}`,Zd=`_ngcontent-${ic}`,Qd=!0,Jd=new p("",{factory:()=>Qd}),eu=new p("");function tu(n){return Zd.replace(Ho,n)}function nu(n){return Kd.replace(Ho,n)}function rc(n,i){return i.map(e=>e.replace(Ho,n))}var ri=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,o,s,c,a=null,d=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=c,this.nonce=a,this.tracingService=d,this.cssVarNamespace=u??"",this.defaultRenderer=new ni(e,s,c,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof lr?r.applyToHost(e):r instanceof ii&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let s=this.doc,c=this.ngZone,a=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(t.encapsulation){case Qi.Emulated:o=new lr(a,d,t,this.appId,u,s,c,h,this.cssVarNamespace);break;case Qi.ShadowDom:return new cr(a,e,t,s,c,this.nonce,h,this.cssVarNamespace,d);case Qi.ExperimentalIsolatedShadowDom:return new cr(a,e,t,s,c,this.nonce,h,this.cssVarNamespace);default:o=new ii(a,d,t,u,s,c,h,this.cssVarNamespace);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(R(jo),R(Kn),R(Yn),R(Jd),R(C),R(N),R(pn),R(Ro,8),R(eu,8))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),ni=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r,o=""){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Bo[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(nc(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){if(i){let r=nc(i)?i.content:i;if(t!=null&&t.parentNode!==r)throw new x(-5106,!1);r.insertBefore(e,t)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new x(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=Bo[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Bo[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(_n.DashCase|_n.Important)?i.style.setProperty(e,t,r&_n.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||t&_n.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=ht().getGlobalEventTarget(this.doc,i),!i))throw new x(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function nc(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var cr=class extends ni{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,s,c,a,d){super(i,r,o,c,a),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=t.styles;u=rc(t.id,u).map(g=>g.replace(/%NS%/g,a));for(let g of u){let O=document.createElement("style");s&&O.setAttribute("nonce",s),O.textContent=g,this.shadowRoot.appendChild(O)}let h=t.getExternalStyles?.();if(h)for(let g of h){let O=Uo(g,r);s&&O.setAttribute("nonce",s),this.shadowRoot.appendChild(O)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ii=class extends ni{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,s,c,a,d){super(i,o,s,c,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=t.styles,h=d?rc(d,u):u;this.styles=h.map(g=>g.replace(/%NS%/g,a)),this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Pa.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},lr=class extends ii{contentAttr;hostAttr;constructor(i,e,t,r,o,s,c,a,d){let u=r+"-"+t.id;super(i,e,t,o,s,c,a,d,u),this.contentAttr=tu(u),this.hostAttr=nu(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var ur=class n extends Jn{supportsDOMEvents=!0;static makeCurrent(){Oo(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=ru();return e==null?null:ou(e)}resetBaseElement(){oi=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return ei(document.cookie,i)}},oi=null;function ru(){return oi=oi||document.head.querySelector("base"),oi?oi.getAttribute("href"):null}function ou(n){return new URL(n,document.baseURI).pathname}var oc=["alt","control","meta","shift"],su={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},au={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},sc=(()=>{class n extends ti{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let s=n.parseEventName(t),c=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ht().onAndCancel(e,s.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),s="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),s="code."),oc.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),s+=d+".")}),s+=o,t.length!=0||o.length===0)return null;let a={};return a.domEventName=r,a.fullKey=s,a}static matchEventFullKeyCode(e,t){let r=su[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),oc.forEach(s=>{if(s!==r){let c=au[s];c(e)&&(o+=s+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(R(C))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})();function $o(n,i,e){return T(this,null,function*(){let t=f({rootComponent:n},cu(i,e));return Wa(t)})}function cu(n,i){return{platformRef:i?.platformRef,appProviders:[...fu,...n?.providers??[]],platformProviders:hu}}function lu(){ur.makeCurrent()}function du(){return new Ft}function uu(){return Ma(document),document}var hu=[{provide:hn,useValue:Po},{provide:Ea,useValue:lu,multi:!0},{provide:C,useFactory:uu}];var fu=[{provide:Sa,useValue:"root"},{provide:Ft,useFactory:du},{provide:dr,useClass:ar,multi:!0},{provide:dr,useClass:sc,multi:!0},ri,{provide:Kn,useClass:zo},{provide:zo,useExisting:Kn},jo,{provide:Ne,useExisting:ri},[]];var pt=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],c=this.headers.get(e);if(!c)return;c=c.filter(a=>s.indexOf(a)===-1),c.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var qo=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Xo=class{encodeKey(i){return ac(i)}encodeValue(i){return ac(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function pu(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,c]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],a=e.get(s)||[];a.push(c),e.set(s,a)}),e}var mu=/%(\d[a-f0-9])/gi,gu={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ac(n){return encodeURIComponent(n).replace(mu,(i,e)=>gu[e]??i)}function hr(n){return`${n}`}var ft=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Xo,i.fromString){if(i.fromObject)throw new x(2805,!1);this.map=pu(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(hr):[hr(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(hr(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),r=t.indexOf(hr(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function _u(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function cc(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function lc(n){return typeof Blob<"u"&&n instanceof Blob}function dc(n){return typeof FormData<"u"&&n instanceof FormData}function vu(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Wo="Content-Type",uc="Accept",pc="text/plain",mc="application/json",bu=`${mc}, ${pc}, */*`,wn=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(_u(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new x(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new pt,this.context??=new qo,!this.params)this.params=new ft,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let c=e,a="",d=e.indexOf("#");d!==-1&&(a=e.substring(d),c=e.substring(0,d));let u=c.indexOf("?"),h=u===-1?"?":u<c.length-1?"&":"";this.urlWithParams=c+h+s+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||cc(this.body)||lc(this.body)||dc(this.body)||vu(this.body)?this.body:this.body instanceof ft?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||dc(this.body)?null:lc(this.body)?this.body.type||null:cc(this.body)?null:typeof this.body=="string"?pc:this.body instanceof ft?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?mc:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,s=i.priority||this.priority,c=i.cache||this.cache,a=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,h=i.referrer??this.referrer,g=i.integrity||this.integrity,O=i.referrerPolicy||this.referrerPolicy,Z=i.transferCache??this.transferCache,$=i.timeout??this.timeout,te=i.body!==void 0?i.body:this.body,Ke=i.withCredentials??this.withCredentials,De=i.reportProgress??this.reportProgress,Ee=i.reportUploadProgress??this.reportUploadProgress,$n=i.reportDownloadProgress??this.reportDownloadProgress,yt=i.headers||this.headers,Wn=i.params||this.params,Gn=i.context??this.context;return i.setHeaders!==void 0&&(yt=Object.keys(i.setHeaders).reduce((cn,wt)=>cn.set(wt,i.setHeaders[wt]),yt)),i.setParams&&(Wn=Object.keys(i.setParams).reduce((cn,wt)=>cn.set(wt,i.setParams[wt]),Wn)),new n(e,t,te,{params:Wn,headers:yt,context:Gn,reportProgress:De,reportUploadProgress:Ee,reportDownloadProgress:$n,responseType:r,withCredentials:Ke,transferCache:Z,keepalive:o,cache:c,priority:s,timeout:$,mode:a,redirect:d,credentials:u,referrer:h,integrity:g,referrerPolicy:O})}},zt=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(zt||{}),si=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new pt,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Yo=class n extends si{constructor(i={}){super(i)}type=zt.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},ai=class n extends si{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=zt.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},jt=class extends si{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},yu=200;var wu=/^\)\]\}',?\n/,cv=1024*1024,Su=new p("",{factory:()=>null}),Cu=(()=>{class n{fetchImpl=l(Ko,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(N);destroyRef=l(Ot);maxResponseSize=l(Su);handle(e){return new St(t=>{let r=new AbortController,o=!1,s={next:a=>{a.type===zt.Response&&(o=!0),t.next(a)},error:a=>{o=!0,t.error(a)},complete:()=>{o=!0,t.complete()}};this.doRequest(e,r.signal,s).then(Zo,a=>s.error(new jt({error:a})));let c;return e.timeout&&(c=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{c!==void 0&&clearTimeout(c),!o&&!r.signal.aborted&&r.abort()}})}doRequest(e,t,r){return T(this,null,function*(){let o=this.createRequestInit(e),s;try{let te=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,f({signal:t},o)));Du(te),r.next({type:zt.Sent}),s=yield te}catch(te){r.error(new jt({error:te,status:te.status??0,statusText:te.statusText,url:e.urlWithParams,headers:te.headers}));return}let c=new pt(s.headers),a=s.statusText,d=s.url||e.urlWithParams,u=s.status,h=null,g=e.reportProgress||e.reportDownloadProgress;if(g&&r.next(new Yo({headers:c,status:u,statusText:a,url:d})),s.body){let te=s.headers.get(Wo)??"",Ke=s.headers.get("content-length"),De=Ke!==null?Number(Ke):NaN;this.maxResponseSize!==null&&Number.isFinite(De)&&De>this.maxResponseSize&&(yield s.body.cancel(),hc(this.maxResponseSize));let Ee=[],$n=s.body.getReader(),yt=0,Wn,Gn,cn=typeof Zone<"u"&&Zone.current,wt=!1;if(yield this.ngZone.runOutsideAngular(()=>T(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield $n.cancel(),wt=!0;break}let{done:bo,value:yo}=yield $n.read();if(bo)break;if(Ee.push(yo),yt+=yo.length,this.maxResponseSize!==null&&yt>this.maxResponseSize&&(yield $n.cancel(),hc(this.maxResponseSize)),g){Gn=e.responseType==="text"?(Gn??"")+(Wn??=fc(te)).decode(yo,{stream:!0}):void 0;let fa=()=>r.next({type:zt.DownloadProgress,total:Number.isFinite(De)?De:void 0,loaded:yt,partialText:Gn});cn?cn.run(fa):fa()}}})),wt){r.complete();return}let jd=this.concatChunks(Ee,yt);try{h=this.parseBody(e,jd,te,u)}catch(bo){r.error(new jt({error:bo,headers:new pt(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}u===0&&(u=h?yu:0);let O=u>=200&&u<300,Z=s.redirected,$=s.type;O?(r.next(new ai({body:h,headers:c,status:u,statusText:a,url:d,redirected:Z,responseType:$})),r.complete()):r.error(new jt({error:h,headers:c,status:u,statusText:a,url:d,redirected:Z,responseType:$}))})}parseBody(e,t,r,o){switch(e.responseType){case"json":let s=new TextDecoder().decode(t).replace(wu,"");if(s==="")return null;try{return JSON.parse(s)}catch(c){if(o<200||o>=300)return s;throw c}case"text":return fc(r).decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new x(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,s)=>t[o]=s.join(",")),e.headers.has(uc)||(t[uc]=bu),!e.headers.has(Wo)){let o=e.detectContentTypeHeader();o!==null&&(t[Wo]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),Ko=class{};function Zo(){}function Du(n){n.then(Zo,Zo)}function hc(n){throw new x(-2825,!1)}var Eu=/charset=\s*["']?([^;"'\s]+)["']?/i;function fc(n){let i=n.match(Eu);if(i!==null)try{return new TextDecoder(i[1])}catch(e){}return new TextDecoder}var Au=new p("",{factory:()=>!0}),Ru="XSRF-TOKEN",Mu=new p("",{factory:()=>Ru}),xu="X-XSRF-TOKEN",Nu=new p("",{factory:()=>xu}),Iu=(()=>{class n{cookieName=l(Mu);doc=l(C);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ei(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),Tu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=R(Iu),r},providedIn:"root"})}return n})();function ku(n,i){if(!l(Au)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=l(yn).href,{origin:o}=new URL(r),{origin:s}=new URL(n.url,o);if(o!==s)return i(n)}catch(r){return i(n)}let e=l(Tu).getToken(),t=l(Nu);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function Ou(n,i){return i(n)}function Fu(n,i,e){return(t,r)=>Ae(e,()=>i(t,o=>n(o,r)))}var Pu=new p("",{factory:()=>[ku]}),gc=new p(""),Lu=new p("",{factory:()=>!0});var Vu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=R(Cu),r},providedIn:"root"})}return n})();var Bu=(()=>{class n{backend;injector;chain=null;pendingTasks=l(Ra);contributeToStability=l(Lu);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=this.injector.get(_c,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(gc,[],o?{self:!0}:void 0),c=Array.from(new Set([...this.injector.get(Pu),...s]));this.chain=c.reduceRight((a,d)=>Fu(a,d,this.injector),Ou)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Be(()=>t(e,o=>this.backend.handle(o))).pipe(dn(r))}else return Be(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||n)(R(Vu),R(_e))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_c=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=R(Bu),r},providedIn:"root"})}return n})();function Go(n,i){return f({body:i},n)}var Qo=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof wn)o=e;else{let a;r.headers instanceof pt?a=r.headers:a=new pt(r.headers);let d;r.params&&(r.params instanceof ft?d=r.params:d=new ft({fromObject:r.params})),o=new wn(e,t,r.body!==void 0?r.body:null,{headers:a,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=m(o).pipe(Dt(a=>this.handler.handle(a)));if(e instanceof wn||r.observe==="events")return s;let c=s.pipe(he(a=>a instanceof ai));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(A(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new x(2806,!1);return a.body}));case"blob":return c.pipe(A(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new x(2807,!1);return a.body}));case"text":return c.pipe(A(a=>{if(a.body!==null&&typeof a.body!="string")throw new x(2808,!1);return a.body}));default:return c.pipe(A(a=>a.body))}case"response":return c;default:throw new x(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new ft().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Go(r,t))}post(e,t,r={}){return this.request("POST",e,Go(r,t))}put(e,t,r={}){return this.request("PUT",e,Go(r,t))}static \u0275fac=function(t){return new(t||n)(R(_c))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vc=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(R(C))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ci=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=R(Hu),r},providedIn:"root"})}return n})(),Hu=(()=>{class n extends ci{_doc=l(C);sanitize(e,t){if(t==null)return null;switch(e){case Re.NONE:return t;case Re.HTML:return gn(t,"HTML")?mn(t):Fa(this._doc,String(t)).toString();case Re.STYLE:return gn(t,"Style")?mn(t):t;case Re.SCRIPT:if(gn(t,"Script"))return mn(t);throw new x(5200,!1);case Re.URL:return gn(t,"URL")?mn(t):Oa(String(t));case Re.RESOURCE_URL:if(gn(t,"ResourceURL"))return mn(t);throw new x(-5201,!1);default:throw new x(5202,!1)}}bypassSecurityTrustHtml(e){return xa(e)}bypassSecurityTrustStyle(e){return Na(e)}bypassSecurityTrustScript(e){return Ia(e)}bypassSecurityTrustUrl(e){return Ta(e)}bypassSecurityTrustResourceUrl(e){return ka(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var M="primary",Si=Symbol("RouteTitle"),is=class{params;constructor(i){this.params=i||{}}has(i){return Object.hasOwn(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function $t(n){return new is(n)}function Jo(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Rc(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let a={},d=n.slice(0,t.length);return Jo(t,d,a)?{consumed:d,posParams:a}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),s=t.slice(r+1);if(o.length+s.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let c={};return!Jo(o,n.slice(0,o.length),c)||!Jo(s,n.slice(n.length-s.length),c)?null:{consumed:n,posParams:c}}function vr(n){return new Promise((i,e)=>{n.pipe(Et()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Wu(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!rt(n[e],i[e]))return!1;return!0}function rt(n,i){let e=n?rs(n):void 0,t=i?rs(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Mc(n[r],i[r]))return!1;return!0}function rs(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Mc(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function Gu(n){return n.length>0?n[n.length-1]:null}function Xt(n){return tt(n)?n:er(n)?He(Promise.resolve(n)):m(n)}function xc(n){return tt(n)?vr(n):Promise.resolve(n)}var qu={exact:Tc,subset:kc},Nc={exact:Xu,subset:Yu,ignored:()=>!0},Ic={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},os={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function yc(n,i,e){return qu[e.paths](n.root,i.root,e.matrixParams)&&Nc[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function Xu(n,i){return rt(n,i)}function Tc(n,i,e){if(!Ht(n.segments,i.segments)||!mr(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Tc(n.children[t],i.children[t],e))return!1;return!0}function Yu(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Mc(n[e],i[e]))}function kc(n,i,e){return Oc(n,i,i.segments,e)}function Oc(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!Ht(r,e)||i.hasChildren()||!mr(r,e,t))}else if(n.segments.length===e.length){if(!Ht(n.segments,e)||!mr(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!kc(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!Ht(n.segments,r)||!mr(n.segments,r,t)||!n.children[M]?!1:Oc(n.children[M],i,o,t)}}function mr(n,i,e){return i.every((t,r)=>Nc[e](n[r].parameters,t.parameters))}var qe=class{root;queryParams;fragment;_queryParamMap;constructor(i=new U([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=$t(this.queryParams),this._queryParamMap}toString(){return Qu.serialize(this)}},U=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return gr(this)}},xt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=$t(this.parameters),this._parameterMap}toString(){return Pc(this)}};function Ku(n,i){return Ht(n,i)&&n.every((e,t)=>rt(e.parameters,i[t].parameters))}function Ht(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function Zu(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===M&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==M&&(e=e.concat(i(r,t)))}),e}var Ci=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:()=>new Nt})}return n})(),Nt=class{parse(i){let e=new as(i);return new qe(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${li(i.root,!0)}`,t=th(i.queryParams),r=typeof i.fragment=="string"?`#${Ju(i.fragment)}`:"";return`${e}${t}${r}`}},Qu=new Nt;function gr(n){return n.segments.map(i=>Pc(i)).join("/")}function li(n,i){if(!n.hasChildren())return gr(n);if(i){let e=n.children[M]?li(n.children[M],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==M&&t.push(`${r}:${li(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Zu(n,(t,r)=>r===M?[li(n.children[M],!1)]:[`${r}:${li(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[M]!=null?`${gr(n)}/${e[0]}`:`${gr(n)}/(${e.join("//")})`}}function Fc(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function fr(n){return Fc(n).replace(/%3B/gi,";")}function Ju(n){return encodeURI(n)}function ss(n){return Fc(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _r(n){return decodeURIComponent(n)}function wc(n){return _r(n.replace(/\+/g,"%20"))}function Pc(n){return`${ss(n.path)}${eh(n.parameters)}`}function eh(n){return Object.entries(n).map(([i,e])=>`;${ss(i)}=${ss(e)}`).join("")}function th(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${fr(e)}=${fr(r)}`).join("&"):`${fr(e)}=${fr(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var nh=/^[^\/()?;#]+/;function es(n){let i=n.match(nh);return i?i[0]:""}var ih=/^[^\/()?;=#]+/;function rh(n){let i=n.match(ih);return i?i[0]:""}var oh=/^[^=?&#]+/;function sh(n){let i=n.match(oh);return i?i[0]:""}var ah=/^[^&#]+/;function ch(n){let i=n.match(ah);return i?i[0]:""}var as=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new U([],{}):new U([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new x(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[M]=new U(e,t)),r}parseSegment(){let i=es(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new x(4009,!1);return this.capture(i),new xt(_r(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=rh(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=es(this.remaining);r&&(t=r,this.capture(t))}i[_r(e)]=_r(t)}parseQueryParam(i){let e=sh(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let s=ch(this.remaining);s&&(t=s,this.capture(t))}let r=wc(e),o=wc(t);if(Object.hasOwn(i,r)){let s=i[r];Array.isArray(s)||(s=[s],i[r]=s),s.push(o)}else i[r]=o}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=es(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new x(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):i&&(s=M);let c=this.parseChildren(e+1);t[s??M]=Object.keys(c).length===1&&c[M]?c[M]:new U([],c),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new x(4011,!1)}};function Lc(n){return n.segments.length>0?new U([],{[M]:n}):n}function Vc(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let o=Vc(r);if(t===M&&o.segments.length===0&&o.hasChildren())for(let[s,c]of Object.entries(o.children))i[s]=c;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new U(n.segments,i);return lh(e)}function lh(n){if(n.numberOfChildren===1&&n.children[M]){let i=n.children[M];return new U(n.segments.concat(i.segments),i.children)}return n}function En(n){return n instanceof qe}function Bc(n,i,e=null,t=null,r=new Nt){let o=Uc(n);return jc(o,i,e,t,r)}function Uc(n){let i;function e(o){let s={};for(let a of o.children){let d=e(a);s[a.outlet]=d}let c=new U(o.url,s);return o===n&&(i=c),c}let t=e(n.root),r=Lc(t);return i??r}function jc(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return ts(o,o,o,e,t,r);let s=dh(i);if(s.toRoot())return ts(o,o,new U([],{}),e,t,r);let c=uh(s,o,n),a=c.processChildren?ui(c.segmentGroup,c.index,s.commands):Hc(c.segmentGroup,c.index,s.commands);return ts(o,c.segmentGroup,a,e,t,r)}function br(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function pi(n){return typeof n=="object"&&n!=null&&n.outlets}function Sc(n,i,e){n||="\u0275";let t=new qe;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function ts(n,i,e,t,r,o){let s={};for(let[d,u]of Object.entries(t??{}))s[d]=Array.isArray(u)?u.map(h=>Sc(d,h,o)):Sc(d,u,o);let c;n===i?c=e:c=zc(n,i,e);let a=Lc(Vc(c));return new qe(a,s,r)}function zc(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=zc(o,i,e)}),new U(n.segments,t)}var yr=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&br(t[0]))throw new x(4003,!1);let r=t.find(pi);if(r&&r!==Gu(t))throw new x(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function dh(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new yr(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([a,d])=>{c[a]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:c}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((c,a)=>{a==0&&c==="."||(a==0&&c===""?e=!0:c===".."?i++:c!=""&&r.push(c))}),r):[...r,o]},[]);return new yr(e,i,t)}var Cn=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function uh(n,i,e){if(n.isAbsolute)return new Cn(i,!0,0);if(!e)return new Cn(i,!1,NaN);if(e.parent===null)return new Cn(e,!0,0);let t=br(n.commands[0])?0:1,r=e.segments.length-1+t;return hh(e,r,n.numberOfDoubleDots)}function hh(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new x(4005,!1);r=t.segments.length}return new Cn(t,!1,r-o)}function fh(n){return pi(n[0])?n[0].outlets:{[M]:n}}function Hc(n,i,e){if(n??=new U([],{}),n.segments.length===0&&n.hasChildren())return ui(n,i,e);let t=ph(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new U(n.segments.slice(0,t.pathIndex),{});return o.children[M]=new U(n.segments.slice(t.pathIndex),n.children),ui(o,0,r)}else return t.match&&r.length===0?new U(n.segments,{}):t.match&&!n.hasChildren()?cs(n,i,e):t.match?ui(n,0,r):cs(n,i,e)}function ui(n,i,e){if(e.length===0)return new U(n.segments,{});{let t=fh(e),r=Object.create(null);if(Object.keys(t).some(o=>o!==M)&&n.children[M]&&n.numberOfChildren===1&&n.children[M].segments.length===0){let o=ui(n.children[M],i,e);return new U(n.segments,o.children)}return Object.entries(t).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=Hc(n.children[o],i,s))}),Object.entries(n.children).forEach(([o,s])=>{t[o]===void 0&&(r[o]=s)}),new U(n.segments,r)}}function ph(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let s=n.segments[r],c=e[t];if(pi(c))break;let a=`${c}`,d=t<e.length-1?e[t+1]:null;if(r>0&&a===void 0)break;if(a&&d&&typeof d=="object"&&d.outlets===void 0){if(!Dc(a,d,s))return o;t+=2}else{if(!Dc(a,{},s))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function cs(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(pi(o)){let a=mh(o.outlets);return new U(t,a)}if(r===0&&br(e[0])){let a=n.segments[i];t.push(new xt(a.path,Cc(e[0]))),r++;continue}let s=pi(o)?o.outlets[M]:`${o}`,c=r<e.length-1?e[r+1]:null;s&&c&&br(c)?(t.push(new xt(s,Cc(c))),r+=2):(t.push(new xt(s,{})),r++)}return new U(t,{})}function mh(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=cs(new U([],{}),0,t))}),i}function Cc(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Dc(n,i,e){return n==e.path&&rt(i,e.parameters)}var hi="imperative",ge=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(ge||{}),je=class{id;url;constructor(i,e){this.id=i,this.url=e}},Wt=class extends je{type=ge.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},gt=class extends je{urlAfterRedirects;type=ge.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ce=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Ce||{}),mi=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(mi||{}),Ge=class extends je{reason;code;type=ge.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function $c(n){return n instanceof Ge&&(n.code===Ce.Redirect||n.code===Ce.SupersededByNewNavigation)}var _t=class extends je{reason;code;type=ge.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},Gt=class extends je{error;target;type=ge.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},gi=class extends je{urlAfterRedirects;state;type=ge.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wr=class extends je{urlAfterRedirects;state;type=ge.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Sr=class extends je{urlAfterRedirects;state;shouldActivate;type=ge.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Cr=class extends je{urlAfterRedirects;state;type=ge.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dr=class extends je{urlAfterRedirects;state;type=ge.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Er=class{route;type=ge.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ar=class{route;type=ge.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Rr=class{snapshot;type=ge.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mr=class{snapshot;type=ge.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xr=class{snapshot;type=ge.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nr=class{snapshot;type=ge.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var An=class{},_i=class{},Rn=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function gh(n){return!(n instanceof An)&&!(n instanceof Rn)&&!(n instanceof _i)}var Ir=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new qt(this.rootInjector)}resetChildren(){this.children=new qt(this.rootInjector)}},qt=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Ir(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(R(_e))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Tr=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=ls(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=ls(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=ds(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return ds(i,this._root).map(e=>e.value)}};function ls(n,i){if(n===i.value)return i;for(let e of i.children){let t=ls(n,e);if(t)return t}return null}function ds(n,i){if(n===i.value)return[i];for(let e of i.children){let t=ds(n,e);if(t.length)return t.unshift(i),t}return[]}var Ue=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Sn(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var vi=class extends Tr{snapshot;constructor(i,e){super(i),this.snapshot=e,ys(this,i)}toString(){return this.snapshot.toString()}};function Wc(n,i){let e=_h(n,i),t=new le([new xt("",{})]),r=new le({}),o=new le({}),s=new le({}),c=new le(""),a=new It(t,r,s,c,o,M,n,e.root);return a.snapshot=e.root,new vi(new Ue(a,[]),e)}function _h(n,i){let e={},t={},r={},s=new Mn([],e,r,"",t,M,n,null,{},i);return new bi("",new Ue(s,[]))}var It=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(i,e,t,r,o,s,c,a){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=c,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(A(d=>d[Si]))??m(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(A(i=>$t(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(A(i=>$t(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(i){this._futureSnapshot=i,this.pending?.set(!0)}},vh="always";function bs(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:f(f({},i.params),n.params),data:f(f({},i.data),n.data),resolve:f(f(f(f({},n.data),i.data),r?.data),n._resolvedData)}:t={params:f({},n.params),data:f({},n.data),resolve:f(f({},n.data),n._resolvedData??{})},r&&qc(r)&&(t.resolve[Si]=r.title),t}var Mn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Si]}constructor(i,e,t,r,o,s,c,a,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=s,this.component=c,this.routeConfig=a,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=$t(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=$t(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},bi=class extends Tr{url;constructor(i,e){super(e),this.url=i,ys(this,e)}toString(){return Gc(this._root)}};function ys(n,i){i.value._routerState=n,i.children.forEach(e=>ys(n,e))}function Gc(n){let i=n.children.length>0?` { ${n.children.map(Gc).join(", ")} } `:"";return`${n.value}${i}`}function ns(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,rt(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),rt(i.params,e.params)||n.paramsSubject.next(e.params),Wu(i.url,e.url)||n.urlSubject.next(e.url),rt(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function us(n,i){let e=rt(n.params,i.params)&&Ku(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||us(n.parent,i.parent))}function qc(n){return typeof n.title=="string"||n.title===null}var Xc=new p(""),Di=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=M;activateEvents=new P;deactivateEvents=new P;attachEvents=new P;detachEvents=new P;routerOutletData=Qn();parentContexts=l(qt);location=l(Ve);changeDetector=l(me);inputBinder=l(Pr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new x(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new x(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new x(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new x(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,a=new hs(e,c,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:a,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Pt]})}return n})(),hs=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===It?this.route:i===qt?this.childContexts:i===Xc?this.outletData:this.parent.get(i,e)}},Pr=new p("");var ws=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&ae(0,"router-outlet")},dependencies:[Di],encapsulation:2,changeDetection:1})}return n})();function Ss(n){let i=n.children&&n.children.map(Ss),e=i?ce(f({},n),{children:i}):f({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==M&&(e.component=ws),e}function bh(n,i,e){let t=new Set,r=yi(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new vi(r,i)}}function yi(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._setPending(i.value);let o=yh(n,i,e,t);return new Ue(r,o)}else{if(n.shouldAttach(i.value)){let s=n.retrieve(i.value);if(s!==null){let c=s.route;return c.value._setPending(i.value),c.children=i.children.map(a=>yi(n,a,void 0,t)),c}}let r=wh(i.value);r._setPending(i.value),t.add(r);let o=i.children.map(s=>yi(n,s,void 0,t));return new Ue(r,o)}}function yh(n,i,e,t){return i.children.map(r=>{for(let o of e.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return yi(n,r,o,t);return yi(n,r,void 0,t)})}function wh(n){return new It(new le(n.url),new le(n.params),new le(n.queryParams),new le(n.fragment),new le(n.data),n.outlet,n.component,n)}var xn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Yc="ngNavigationCancelingError";function kr(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=En(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Kc(!1,Ce.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function Kc(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Yc]=!0,e.cancellationCode=i,e}function Sh(n){return Zc(n)&&En(n.url)}function Zc(n){return!!n&&n[Yc]}var fs=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),ns(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=Sn(e);i.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],t),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let s=t.getContext(r.outlet);s&&this.deactivateChildRoutes(i,e,s.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Sn(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(t&&t.outlet){let s=t.outlet.detach(),c=t.children.contexts;t.resetChildren(),this.routeReuseStrategy.store(i.value.snapshot,{componentRef:s,route:i,contexts:c})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Sn(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=Sn(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new Nr(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Mr(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(ns(r),r===o)if(r.component){let s=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,s.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let s=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let c=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),ns(c.route.value),this.activateChildRoutes(i,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(i,null,s.children)}else this.activateChildRoutes(i,null,t)}},Or=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Dn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Ch(n,i,e){let t=n._root,r=i?i._root:null;return di(t,r,e,[t.value])}function Dh(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function In(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!wa(n)?n:i.get(n):t}function di(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Sn(i);return n.children.forEach(s=>{Eh(s,o[s.value.outlet],e,t.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,c])=>fi(c,e.getContext(s),e,r)),r}function Eh(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=i?i.value:null,c=e?e.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let a=Ah(s,o,o.routeConfig.runGuardsAndResolvers);a?r.canActivateChecks.push(new Or(t)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?di(n,i,c?c.children:null,t,r):di(n,i,e,t,r),a&&c&&c.outlet&&c.outlet.isActivated&&r.canDeactivateChecks.push(new Dn(c.outlet.component,s))}else s&&fi(i,c,e,r),r.canActivateChecks.push(new Or(t)),o.component?di(n,null,c?c.children:null,t,r):di(n,null,e,t,r);return r}function Ah(n,i,e){if(typeof e=="function")return Ae(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!Ht(n.url,i.url);case"pathParamsOrQueryParamsChange":return!Ht(n.url,i.url)||!rt(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!us(n,i)||!rt(n.queryParams,i.queryParams);default:return!us(n,i)}}function fi(n,i,e,t){let r=Sn(n),o=n.value;Object.entries(r).forEach(([s,c])=>{o.component?i?fi(c,i.children.getContext(s),i.children,t):fi(c,null,null,t):fi(c,e?e.getContext(s):null,e,t)}),o.component?i&&i.outlet&&i.outlet.isActivated?t.canDeactivateChecks.push(new Dn(i.outlet.component,o)):t.canDeactivateChecks.push(new Dn(null,o)):t.canDeactivateChecks.push(new Dn(null,o))}function Ei(n){return typeof n=="function"}function Rh(n){return typeof n=="boolean"}function Mh(n){return n&&Ei(n.canLoad)}function xh(n){return n&&Ei(n.canActivate)}function Nh(n){return n&&Ei(n.canActivateChild)}function Ih(n){return n&&Ei(n.canDeactivate)}function Th(n){return n&&Ei(n.canMatch)}function Qc(n){return n instanceof ga||n?.name==="EmptyError"}var pr=Symbol("INITIAL_VALUE");function Nn(){return fe(n=>at(n.map(i=>i.pipe(ie(1),Ze(pr)))).pipe(A(i=>{for(let e of i)if(e!==!0){if(e===pr)return pr;if(e===!1||kh(e))return e}return!0}),he(i=>i!==pr),ie(1)))}function kh(n){return En(n)||n instanceof xn}function Jc(n){return n.aborted?m(void 0).pipe(ie(1)):new St(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function el(n){return H(Jc(n))}function Oh(n){return Ct(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?m(ce(f({},i),{guardsResult:!0})):Fh(o,e,t).pipe(Ct(s=>s&&Rh(s)?Ph(e,r,n):m(s)),A(s=>ce(f({},i),{guardsResult:s})))})}function Fh(n,i,e){return He(n).pipe(Ct(t=>jh(t.component,t.route,e,i)),Et(t=>t!==!0,!0))}function Ph(n,i,e){return He(i).pipe(Dt(t=>Tt(Vh(t.route.parent,e),Lh(t.route,e),Uh(n,t.path),Bh(n,t.route))),Et(t=>t!==!0,!0))}function Lh(n,i){return n!==null&&i&&i(new xr(n)),m(!0)}function Vh(n,i){return n!==null&&i&&i(new Rr(n)),m(!0)}function Bh(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return m(!0);let t=e.map(r=>qi(()=>{let o=i._environmentInjector,s=In(r,o),c=xh(s)?s.canActivate(i,n):Ae(o,()=>s(i,n));return Xt(c).pipe(Et())}));return m(t).pipe(Nn())}function Uh(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Dh(o)).filter(o=>o!==null).map(o=>qi(()=>{let s=o.guards.map(c=>{let a=o.node._environmentInjector,d=In(c,a),u=Nh(d)?d.canActivateChild(e,n):Ae(a,()=>d(e,n));return Xt(u).pipe(Et())});return m(s).pipe(Nn())}));return m(r).pipe(Nn())}function jh(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return m(!0);let o=r.map(s=>{let c=i._environmentInjector,a=In(s,c),d=Ih(a)?a.canDeactivate(n,i,e,t):Ae(c,()=>a(n,i,e,t));return Xt(d).pipe(Et())});return m(o).pipe(Nn())}function zh(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return m(!0);let s=o.map(c=>{let a=In(c,n),d=Mh(a)?a.canLoad(i,e):Ae(n,()=>a(i,e)),u=Xt(d);return r?u.pipe(el(r)):u});return m(s).pipe(Nn(),tl(t))}function tl(n){return wo(re(i=>{if(typeof i!="boolean")throw kr(n,i)}),A(i=>i===!0))}function Hh(n,i,e,t,r,o){let s=i.canMatch;if(!s||s.length===0)return m(!0);let c=s.map(a=>{let d=In(a,n),u=Th(d)?d.canMatch(i,e,r):Ae(n,()=>d(i,e,r));return Xt(u).pipe(el(o))});return m(c).pipe(Nn(),tl(t))}var mt=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},wi=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function $h(n){throw new x(4e3,!1)}function Wh(n){throw Kc(!1,Ce.GuardRejected)}var ps=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return T(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[M])throw $h(`${i.redirectTo}`);r=r.children[M]}})}applyRedirectCommands(i,e,t,r,o){return T(this,null,function*(){let s=yield Gh(e,r,o);if(s instanceof qe)throw new wi(s);let c=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),i,t);if(s[0]==="/")throw new wi(c);return c})}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new qe(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let c=o.substring(1);t[r]=e[c]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),s=Object.create(null);return Object.entries(e.children).forEach(([c,a])=>{s[c]=this.createSegmentGroup(i,a,t,r)}),new U(o,s)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new x(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function Gh(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return vr(Xt(Ae(e,()=>t(i))))}function qh(n,i){return n.providers&&!n._injector&&(n._injector=No(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Je(n){return n.outlet||M}function Xh(n,i){let e=n.filter(t=>Je(t)===i);return e.push(...n.filter(t=>Je(t)!==i)),e}var ms={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function nl(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Yh(n,i,e,t,r,o,s){let c=il(n,i,e);if(!c.matched)return m(c);let a=nl(o(c));return t=qh(i,t),Hh(t,i,e,r,a,s).pipe(A(d=>d===!0?c:f({},ms)))}function il(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?f({},ms):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Rc)(e,n,i);if(!r)return f({},ms);let o={};Object.entries(r.posParams??{}).forEach(([c,a])=>{o[c]=a.path});let s=r.consumed.length>0?f(f({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Ec(n,i,e,t,r){return e.length>0&&Qh(n,e,t,r)?{segmentGroup:new U(i,Zh(t,new U(e,n.children))),slicedSegments:[]}:e.length===0&&Jh(n,e,t)?{segmentGroup:new U(n.segments,Kh(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new U(n.segments,n.children),slicedSegments:e}}function Kh(n,i,e,t){let r={};for(let o of e)if(Lr(n,i,o)&&!t[Je(o)]){let s=new U([],{});r[Je(o)]=s}return f(f({},t),r)}function Zh(n,i){let e={};e[M]=i;for(let t of n)if(t.path===""&&Je(t)!==M){let r=new U([],{});e[Je(t)]=r}return e}function Qh(n,i,e,t){return e.some(r=>!Lr(n,i,r)||!(Je(r)!==M)?!1:!(t!==void 0&&Je(r)===t))}function Jh(n,i,e){return e.some(t=>Lr(n,i,t))}function Lr(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function ef(n,i,e){return i.length===0&&!n.children[e]}var gs=class{};function tf(n,i,e,t,r,o,s,c){return T(this,null,function*(){return new _s(n,i,e,t,r,s,o,c).recognize()})}var nf=31,_s=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,s,c,a){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.abortSignal=a,this.applyRedirects=new ps(this.urlSerializer,this.urlTree)}noMatchError(i){return new x(4002,`'${i.segmentGroup}'`)}recognize(){return T(this,null,function*(){let i=Ec(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(i),r=new Ue(t,e),o=new bi("",r),s=Bc(t,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(i){return T(this,null,function*(){let e=new Mn([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),M,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,M,e),rootSnapshot:e}}catch(t){if(t instanceof wi)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof mt?this.noMatchError(t):t}})}processSegmentGroup(i,e,t,r,o){return T(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let s=yield this.processSegment(i,e,t,t.segments,r,!0,o);return s instanceof Ue?[s]:[]})}processChildren(i,e,t,r){return T(this,null,function*(){let o=[];for(let a of Object.keys(t.children))a==="primary"?o.unshift(a):o.push(a);let s=[];for(let a of o){let d=t.children[a],u=Xh(e,a),h=yield this.processSegmentGroup(i,u,d,a,r);s.push(...h)}let c=rl(s);return rf(c),c})}processSegment(i,e,t,r,o,s,c){return T(this,null,function*(){for(let a of e)try{return yield this.processSegmentAgainstRoute(a._injector??i,e,a,t,r,o,s,c)}catch(d){if(d instanceof mt||Qc(d))continue;throw d}if(ef(t,r,o))return new gs;throw new mt(t)})}processSegmentAgainstRoute(i,e,t,r,o,s,c,a){return T(this,null,function*(){if(Je(t)!==s&&(s===M||!Lr(r,o,t)))throw new mt(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,s,a);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,s,a);throw new mt(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,s,c){return T(this,null,function*(){let{matched:a,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:g}=il(e,r,o);if(!a)throw new mt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>nf&&(this.allowRedirects=!1));let O=this.createSnapshot(i,r,o,d,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Z=yield this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,nl(O),i),$=yield this.applyRedirects.lineralizeSegments(r,Z);return this.processSegment(i,t,e,$.concat(g),s,!1,c)})}createSnapshot(i,e,t,r,o){let s=new Mn(t,r,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,sf(e),Je(e),e.component??e._loadedComponent??null,e,af(e),i),c=bs(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(c.params),s.data=Object.freeze(c.data),s}matchSegmentAgainstRoute(i,e,t,r,o,s){return T(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=Ee=>this.createSnapshot(i,t,Ee.consumedSegments,Ee.parameters,s),a=yield vr(Yh(e,t,r,i,this.urlSerializer,c,this.abortSignal));if(t.path==="**"&&(e.children={}),!a?.matched)throw new mt(e);i=t._injector??i;let{routes:d}=yield this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:h,consumedSegments:g,remainingSegments:O}=a,Z=this.createSnapshot(i,t,g,h,s),{segmentGroup:$,slicedSegments:te}=Ec(e,g,O,d,o);if(te.length===0&&$.hasChildren()){let Ee=yield this.processChildren(u,d,$,Z);return new Ue(Z,Ee)}if(d.length===0&&te.length===0)return new Ue(Z,[]);let Ke=Je(t)===o,De=yield this.processSegment(u,d,$,te,Ke?M:o,!0,Z);return new Ue(Z,De instanceof Ue?[De]:[])})}getChildConfig(i,e,t){return T(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield vr(zh(i,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Wh(e)}return{routes:[],injector:i}})}};function rf(n){n.sort((i,e)=>i.value.outlet===M?-1:e.value.outlet===M?1:i.value.outlet.localeCompare(e.value.outlet))}function of(n){let i=n.value.routeConfig;return i&&i.path===""}function rl(n){let i=[],e=new Set;for(let t of n){if(!of(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=rl(t.children);i.push(new Ue(t.value,r))}return i.filter(t=>!e.has(t))}function sf(n){return n.data||{}}function af(n){return n.resolve||{}}function cf(n,i,e,t,r,o,s){return Ct(c=>T(null,null,function*(){let{state:a,tree:d}=yield tf(n,i,e,t,c.extractedUrl,r,o,s);return ce(f({},c),{targetSnapshot:a,urlAfterRedirects:d})}))}function lf(n){return Ct(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return m(i);let r=new Set(t.map(c=>c.route)),o=new Set;for(let c of r)if(!o.has(c))for(let a of ol(c))o.add(a);let s=0;return He(o).pipe(Dt(c=>r.has(c)?df(c,e,n):(c.data=bs(c,c.parent,n).resolve,m(void 0))),re(()=>s++),Eo(1),Ct(c=>s===o.size?m(i):ke))})}function ol(n){let i=n.children.map(e=>ol(e)).flat();return[n,...i]}function df(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!qc(t)&&(r[Si]=t.title),qi(()=>(n.data=bs(n,n.parent,e).resolve,uf(r,n,i).pipe(A(o=>(n._resolvedData=o,n.data=f(f({},n.data),o),null)))))}function uf(n,i,e){let t=rs(n);if(t.length===0)return m({});let r={};return He(t).pipe(Ct(o=>hf(n[o],i,e).pipe(Et(),re(s=>{if(s instanceof xn)throw kr(new Nt,s);r[o]=s}))),Eo(1),A(()=>r),qn(o=>Qc(o)?ke:Gi(o)))}function hf(n,i,e){let t=i._environmentInjector,r=In(n,t),o=r.resolve?r.resolve(i,e):Ae(t,()=>r(i,e));return Xt(o)}var sl=new p("");function vs(n){return fe(i=>{let e=n(i);return e?He(e).pipe(A(()=>i)):m(i)})}var Cs=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===M);return t}getResolvedTitleForRoute(e){return e.data[Si]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:()=>l(al)})}return n})(),al=(()=>{class n extends Cs{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(R(vc))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ai=new p("",{factory:()=>({})}),Ri=new p(""),cl=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Ha);loadComponent(e,t){return T(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=T(this,null,function*(){try{let o=yield xc(Ae(e,()=>t.loadComponent())),s=yield dl(ko(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s,s}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=T(this,null,function*(){try{let o=yield ll(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function ll(n,i,e,t){return T(this,null,function*(){let r=yield xc(Ae(e,()=>n.loadChildren())),o=yield dl(ko(r)),s;o instanceof La||Array.isArray(o)?s=o:s=yield i.compileModuleAsync(o),t&&t(n);let c,a,d=!1,u;return Array.isArray(s)?(a=s,d=!0):(c=s.create(e).injector,u=s,a=c.get(Ri,[],{optional:!0,self:!0}).flat()),{routes:a.map(Ss),injector:c,factory:u}})}function dl(n){return T(this,null,function*(){return n})}var Vr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:()=>l(ff)})}return n})(),ff=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),ul=new p("");var pf=()=>{},hl=new p(""),fl=(()=>{class n{currentNavigation=pe(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=pe(null);events=new v;transitionAbortWithErrorSubject=new v;configLoader=l(cl);environmentInjector=l(_e);destroyRef=l(Ot);urlSerializer=l(Ci);rootContexts=l(qt);location=l(Mt);inputBindingEnabled=l(Pr,{optional:!0})!==null;titleStrategy=l(Cs);options=l(Ai,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||vh;urlHandlingStrategy=l(Vr);createViewTransition=l(ul,{optional:!0});navigationErrorHandler=l(hl,{optional:!0});routerResourcesFeature=l(sl,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>m(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Er(r)),t=r=>this.events.next(new Ar(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Be(()=>{this.transitions?.next(ce(f({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new le(null),this.transitions.pipe(he(t=>t!==null),fe(t=>{let r=!0,o=!1,s=new AbortController,c=()=>!o&&this.currentTransition?.id===t.id;return m(t).pipe(fe(a=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ce.SupersededByNewNavigation),ke;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:d?ce(f({},d),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&h!=="reload")return this.events.next(new _t(a.id,this.urlSerializer.serialize(a.rawUrl),"",mi.IgnoredSameUrlNavigation)),a.resolve(!1),ke;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return m(a).pipe(fe(g=>(this.events.next(new Wt(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?ke:Promise.resolve(g))),cf(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),re(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(O=>(O.finalUrl=g.urlAfterRedirects,O)),this.events.next(new _i)}),fe(g=>He(t.routesRecognizeHandler.deferredHandle??m(void 0)).pipe(A(()=>g))),re(()=>{let g=new gi(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(g)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:g,extractedUrl:O,source:Z,restoredState:$,extras:te}=a,Ke=new Wt(g,this.urlSerializer.serialize(O),Z,$);this.events.next(Ke);let De=Wc(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=ce(f({},a),{targetSnapshot:De,urlAfterRedirects:O,extras:ce(f({},te),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Ee=>(Ee.finalUrl=O,Ee)),m(t)}else return this.events.next(new _t(a.id,this.urlSerializer.serialize(a.extractedUrl),"",mi.IgnoredByUrlHandlingStrategy)),a.resolve(!1),ke}),A(a=>{let d=new wr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(d),this.currentTransition=t=ce(f({},a),{guards:Ch(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),t}),Oh(a=>this.events.next(a)),fe(a=>{if(t.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw kr(this.urlSerializer,a.guardsResult);let d=new Sr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(d),!c())return ke;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",Ce.GuardRejected),ke;if(a.guards.canActivateChecks.length===0)return m(a);let u=new Cr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(u),!c())return ke;let h=!1;return m(a).pipe(lf(this.paramsInheritanceStrategy),re({next:()=>{h=!0;let g=new Dr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(g)},complete:()=>{h||this.cancelNavigationTransition(a,"",Ce.NoDataFromResolver)}}))}),vs(a=>{let d=h=>{let g=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let O=h._environmentInjector;g.push(this.configLoader.loadComponent(O,h.routeConfig).then(Z=>{h.component=Z}))}for(let O of h.children)g.push(...d(O));return g},u=d(a.targetSnapshot.root);return u.length===0?m(a):He(Promise.all(u).then(()=>a))}),fe(a=>{let{newlyCreatedRoutes:d,state:u}=bh(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=t=a=ce(f({},a),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(h=>(h.targetRouterState=u,h)),m(a)}),this.routerResourcesFeature?.setupAndRunResources(s.signal)??(a=>a),vs(()=>this.afterPreactivation()),fe(()=>{let{currentSnapshot:a,targetSnapshot:d}=t,u=this.createViewTransition?.(this.environmentInjector,a.root,d.root,t.hasUAVisualTransition);return u?He(u).pipe(A(()=>t)):m(t)}),ie(1),fe(a=>{r=!1,this.events.next(new An);let d=t.beforeActivateHandler.deferredHandle;return d?He(d.then(()=>a)):m(a)}),re(a=>{new fs(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),a.newlyCreatedRoutes?.clear(),c()&&(pl(a.targetRouterState),o=!0,this.currentNavigation.update(d=>(d.abort=pf,d)),this.lastSuccessfulNavigation.set(Be(this.currentNavigation)),this.events.next(new gt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),H(Jc(s.signal).pipe(he(()=>!o&&r),re(()=>{this.cancelNavigationTransition(t,s.signal.reason+"",Ce.Aborted)}))),re({complete:()=>{o=!0}}),H(this.transitionAbortWithErrorSubject.pipe(re(a=>{throw a}))),dn(()=>{s.abort(),o||this.cancelNavigationTransition(t,"",Ce.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),qn(a=>{if(o=!0,Ac(t),this.destroyed)return t.resolve(!1),ke;if(Zc(a))this.events.next(new Ge(t.id,this.urlSerializer.serialize(t.extractedUrl),a.message,a.cancellationCode)),Sh(a)?this.events.next(new Rn(a.url,a.navigationBehaviorOptions)):t.resolve(!1);else{let d=new Gt(t.id,this.urlSerializer.serialize(t.extractedUrl),a,t.targetSnapshot??void 0);try{let u=Ae(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof xn){let{message:h,cancellationCode:g}=kr(this.urlSerializer,u);this.events.next(new Ge(t.id,this.urlSerializer.serialize(t.extractedUrl),h,g)),this.events.next(new Rn(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),a}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return ke}))}))}cancelNavigationTransition(e,t,r){Ac(e);let o=new Ge(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Be(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function mf(n){return n!==hi}function Ac(n){for(let i of n.newlyCreatedRoutes??[])i._localInjector?.destroy(),i._localInjector=void 0;pl(n.targetRouterState)}function pl(n){if(!n)return;let i=e=>{e.value.pending?.set(!1),e.children.forEach(i)};i(n._root)}var ml=new p("");var gl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:()=>l(gf)})}return n})(),Fr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},gf=(()=>{class n extends Fr{static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),Ds=(()=>{class n{urlSerializer=l(Ci);options=l(Ai,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Mt);urlHandlingStrategy=l(Vr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new qe;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,s=r??o;return s instanceof qe?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Wc(null,l(_e));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:()=>l(_f)})}return n})(),_f=(()=>{class n extends Ds{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0},t.hasUAVisualTransition)})})}handleRouterEvent(e,t){e instanceof Wt?this.updateStateMemento():e instanceof _t?this.commitTransition(t):e instanceof gi?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof An?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Ge&&!$c(e)?this.restoreHistory(t):e instanceof Gt?this.restoreHistory(t,!0):e instanceof gt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:s,state:c}=r;if(this.location.isCurrentPathEqualTo(e)||s){let a=this.browserPageId,d=f(f({},c),this.generateNgRouterState(o,a,t));this.location.replaceState(e,"",d)}else{let a=f(f({},c),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",a)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?f({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):f({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function Es(n,i){n.events.pipe(he(e=>e instanceof gt||e instanceof Ge||e instanceof Gt||e instanceof _t),A(e=>e instanceof gt||e instanceof _t?0:(e instanceof Ge?e.code===Ce.Redirect||e.code===Ce.SupersededByNewNavigation:!1)?2:1),he(e=>e!==2),ie(1)).subscribe(()=>{i()})}var Br=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Io);stateManager=l(Ds);options=l(Ai,{optional:!0})||{};pendingTasks=l(Da);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(fl);urlSerializer=l(Ci);location=l(Mt);urlHandlingStrategy=l(Vr);injector=l(_e);_events=new v;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(gl);injectorCleanup=l(ml,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Ri,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Pr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new st;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Be(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof Ge&&t.code!==Ce.Redirect&&t.code!==Ce.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof gt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Rn){let s=t.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),a=f({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||mf(r.source)},s);this.scheduleNavigation(c,hi,null,a,r.hasUAVisualTransition,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}gh(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),hi,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o,s)=>{this.navigateToSyncWithBrowser(e,r,t,o,s)})}navigateToSyncWithBrowser(e,t,r,o,s){let c=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=ce(f({},o),{browserUrl:e})),r){let u=f({},r);delete u.navigationId,delete u.\u0275routerPageId,delete u.\u0275routerUrl,Object.keys(u).length!==0&&(o.state=u)}let d=this.parseUrl(a);this.scheduleNavigation(d,t,c,o,s).catch(u=>{this.disposed||this.injector.get(Ki)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Be(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ss),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:c,preserveFragment:a}=t,d=a?this.currentUrlTree.fragment:s,u=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":u=f(f({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let g=r?r.snapshot:this.routerState.snapshot.root;h=Uc(g)}catch(g){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return jc(h,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=En(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,hi,null,t)}navigate(e,t={skipLocationChange:!1}){return vf(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(un(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=f({},Ic):t===!1?r=f({},os):r=f(f({},os),t),En(e))return yc(this.currentUrlTree,e,r);let o=this.parseUrl(e);return yc(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,s,c){if(this.disposed)return Promise.resolve(!1);let a,d,u;c?(a=c.resolve,d=c.reject,u=c.promise):u=new Promise((g,O)=>{a=g,d=O});let h=this.pendingTasks.add();return Es(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:s,resolve:a,reject:d,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function vf(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new x(4008,!1)}var wf=new p("");function As(n,...i){return kt([{provide:Ri,multi:!0,useValue:n},{provide:It,useFactory:Sf},{provide:To,multi:!0,useFactory:Cf},i.map(e=>e.\u0275providers)])}function Sf(){return l(Br).routerState.root}function Cf(){let n=l(K);return i=>{let e=n.get(lt);if(i!==e.components[0])return;let t=n.get(Br),r=n.get(Df);n.get(Ef)===1&&t.initialNavigation(),n.get(Af,null,{optional:!0})?.setUpPreloading(),n.get(wf,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Df=new p("",{factory:()=>new v}),Ef=new p("",{factory:()=>1});var Af=new p("");var vl=[];var Mf="@",xf=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(K);loadingSchedulerFn=l(Nf,{optional:!0});_engine;constructor(e,t,r,o,s){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-CDAIFKLK.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new x(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Rs(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let c=s.createRenderer(e,t);o.use(c),this.scheduler??=this.injector.get(Aa,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){xo()};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Rs=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(Mf)}},Nf=new p("");function bl(n="animations"){return Mo("NgAsyncAnimations"),kt([{provide:Ne,useFactory:()=>new xf(l(C),l(ri),l(N),n)},{provide:fn,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var yl={providers:[$a({eventCoalescing:!0}),As(vl),bl()]};var w;function vt(n){let i=w.__externref_table_alloc();return w.__wbindgen_export_2.set(i,n),i}function Mi(n,i){try{return n.apply(this,i)}catch(e){let t=vt(e);w.__wbindgen_exn_store(t)}}function Yt(n){return n==null}var Cl=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Cl.decode();var xi=null;function Ur(){return(xi===null||xi.byteLength===0)&&(xi=new Uint8Array(w.memory.buffer)),xi}function Ie(n,i){return n=n>>>0,Cl.decode(Ur().subarray(n,n+i))}var Ni=null;function If(){return(Ni===null||Ni.byteLength===0)&&(Ni=new Uint8ClampedArray(w.memory.buffer)),Ni}function Tf(n,i){return n=n>>>0,If().subarray(n/1,n/1+i)}var Zt=0,jr=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},kf=typeof jr.encodeInto=="function"?function(n,i){return jr.encodeInto(n,i)}:function(n,i){let e=jr.encode(n);return i.set(e),{read:n.length,written:e.length}};function Ms(n,i,e){if(e===void 0){let c=jr.encode(n),a=i(c.length,1)>>>0;return Ur().subarray(a,a+c.length).set(c),Zt=c.length,a}let t=n.length,r=i(t,1)>>>0,o=Ur(),s=0;for(;s<t;s++){let c=n.charCodeAt(s);if(c>127)break;o[r+s]=c}if(s!==t){s!==0&&(n=n.slice(s)),r=e(r,t,t=s+n.length*3,1)>>>0;let c=Ur().subarray(r+s,r+t),a=kf(n,c);s+=a.written,r=e(r,t,s,1)>>>0}return Zt=s,r}var Kt=null;function Ii(){return(Kt===null||Kt.buffer.detached===!0||Kt.buffer.detached===void 0&&Kt.buffer!==w.memory.buffer)&&(Kt=new DataView(w.memory.buffer)),Kt}function xs(n){let i=typeof n;if(i=="number"||i=="boolean"||n==null)return`${n}`;if(i=="string")return`"${n}"`;if(i=="symbol"){let r=n.description;return r==null?"Symbol":`Symbol(${r})`}if(i=="function"){let r=n.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(n)){let r=n.length,o="[";r>0&&(o+=xs(n[0]));for(let s=1;s<r;s++)o+=", "+xs(n[s]);return o+="]",o}let e=/\[object ([^\]]+)\]/.exec(toString.call(n)),t;if(e&&e.length>1)t=e[1];else return toString.call(n);if(t=="Object")try{return"Object("+JSON.stringify(n)+")"}catch(r){return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:t}function Of(n,i){let e=i(n.length*4,4)>>>0;for(let t=0;t<n.length;t++){let r=vt(n[t]);Ii().setUint32(e+4*t,r,!0)}return Zt=n.length,e}function Ff(n){let i=w.__wbindgen_export_2.get(n);return w.__externref_table_dealloc(n),i}var wl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>w.__wbg_dicomviewer_free(n>>>0,1)),Ti=class n{static __wrap(i){i=i>>>0;let e=Object.create(n.prototype);return e.__wbg_ptr=i,wl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let i=this.__wbg_ptr;return this.__wbg_ptr=0,wl.unregister(this),i}free(){let i=this.__destroy_into_raw();w.__wbg_dicomviewer_free(i,0)}read_files(i){let e=Of(i,w.__wbindgen_malloc),t=Zt,r=w.dicomviewer_read_files(this.__wbg_ptr,e,t);if(r[1])throw Ff(r[0])}get_metadata(){let i=w.dicomviewer_get_metadata(this.__wbg_ptr);return Tn.__wrap(i)}reset_filter(){w.dicomviewer_reset_filter(this.__wbg_ptr)}render_next_file(){w.dicomviewer_render_next_file(this.__wbg_ptr)}get_dicom_hierarchy(){return w.dicomviewer_get_dicom_hierarchy(this.__wbg_ptr)}render_previous_file(){w.dicomviewer_render_previous_file(this.__wbg_ptr)}render_image_at_index(i){w.dicomviewer_render_image_at_index(this.__wbg_ptr,i)}set_current_series_instance_uid(i){let e=Ms(i,w.__wbindgen_malloc,w.__wbindgen_realloc),t=Zt;w.dicomviewer_set_current_series_instance_uid(this.__wbg_ptr,e,t)}static new(){let i=w.dicomviewer_new();return n.__wrap(i)}},Sl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>w.__wbg_metadata_free(n>>>0,1)),Tn=class n{static __wrap(i){i=i>>>0;let e=Object.create(n.prototype);return e.__wbg_ptr=i,Sl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let i=this.__wbg_ptr;return this.__wbg_ptr=0,Sl.unregister(this),i}free(){let i=this.__destroy_into_raw();w.__wbg_metadata_free(i,0)}get total(){return w.__wbg_get_metadata_total(this.__wbg_ptr)>>>0}set total(i){w.__wbg_set_metadata_total(this.__wbg_ptr,i)}get current_index(){return w.__wbg_get_metadata_current_index(this.__wbg_ptr)>>>0}set current_index(i){w.__wbg_set_metadata_current_index(this.__wbg_ptr,i)}get series_total(){return w.__wbg_get_metadata_series_total(this.__wbg_ptr)>>>0}set series_total(i){w.__wbg_set_metadata_series_total(this.__wbg_ptr,i)}get_current_series_instance_uid(){return w.metadata_get_current_series_instance_uid(this.__wbg_ptr)}static new(){let i=w.metadata_new();return n.__wrap(i)}};function Pf(n,i){return T(this,null,function*(){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return yield WebAssembly.instantiateStreaming(n,i)}catch(t){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}let e=yield n.arrayBuffer();return yield WebAssembly.instantiate(e,i)}else{let e=yield WebAssembly.instantiate(n,i);return e instanceof WebAssembly.Instance?{instance:e,module:n}:e}})}function Lf(){let n={};return n.wbg={},n.wbg.__wbg_buffer_609cc3eee51ed158=function(i){return i.buffer},n.wbg.__wbg_call_672a4d21634d4a24=function(){return Mi(function(i,e){return i.call(e)},arguments)},n.wbg.__wbg_clearRect_8e4ba7ea0e06711a=function(i,e,t,r,o){i.clearRect(e,t,r,o)},n.wbg.__wbg_document_d249400bd7bd996d=function(i){let e=i.document;return Yt(e)?0:vt(e)},n.wbg.__wbg_error_7534b8e9a36f1ab4=function(i,e){let t,r;try{t=i,r=e,console.error(Ie(i,e))}finally{w.__wbindgen_free(t,r,1)}},n.wbg.__wbg_getContext_e9cf379449413580=function(){return Mi(function(i,e,t){let r=i.getContext(Ie(e,t));return Yt(r)?0:vt(r)},arguments)},n.wbg.__wbg_getElementById_f827f0d6648718a8=function(i,e,t){let r=i.getElementById(Ie(e,t));return Yt(r)?0:vt(r)},n.wbg.__wbg_height_838cee19ba8597db=function(i){return i.height},n.wbg.__wbg_instanceof_CanvasRenderingContext2d_df82a4d3437bf1cc=function(i){let e;try{e=i instanceof CanvasRenderingContext2D}catch(r){e=!1}return e},n.wbg.__wbg_instanceof_HtmlCanvasElement_2ea67072a7624ac5=function(i){let e;try{e=i instanceof HTMLCanvasElement}catch(r){e=!1}return e},n.wbg.__wbg_instanceof_Window_def73ea0955fc569=function(i){let e;try{e=i instanceof Window}catch(r){e=!1}return e},n.wbg.__wbg_length_a446193dc22c12f8=function(i){return i.length},n.wbg.__wbg_log_0cc1b7768397bcfe=function(i,e,t,r,o,s,c,a){let d,u;try{d=i,u=e,console.log(Ie(i,e),Ie(t,r),Ie(o,s),Ie(c,a))}finally{w.__wbindgen_free(d,u,1)}},n.wbg.__wbg_log_cb9e190acc5753fb=function(i,e){let t,r;try{t=i,r=e,console.log(Ie(i,e))}finally{w.__wbindgen_free(t,r,1)}},n.wbg.__wbg_mark_7438147ce31e9d4b=function(i,e){performance.mark(Ie(i,e))},n.wbg.__wbg_measure_fb7825c11612c823=function(){return Mi(function(i,e,t,r){let o,s,c,a;try{o=i,s=e,c=t,a=r,performance.measure(Ie(i,e),Ie(t,r))}finally{w.__wbindgen_free(o,s,1),w.__wbindgen_free(c,a,1)}},arguments)},n.wbg.__wbg_new_405e22f390576ce2=function(){return new Object},n.wbg.__wbg_new_5e0be73521bc8c17=function(){return new Map},n.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},n.wbg.__wbg_new_a12002a7f91c75be=function(i){return new Uint8Array(i)},n.wbg.__wbg_newnoargs_105ed471475aaf50=function(i,e){return new Function(Ie(i,e))},n.wbg.__wbg_newwithu8clampedarrayandsh_7ea6ee082a25bc85=function(){return Mi(function(i,e,t,r){return new ImageData(Tf(i,e),t>>>0,r>>>0)},arguments)},n.wbg.__wbg_putImageData_4c5aa10f3b3e4924=function(){return Mi(function(i,e,t,r){i.putImageData(e,t,r)},arguments)},n.wbg.__wbg_set_3f1d0b984ed272ed=function(i,e,t){i[e]=t},n.wbg.__wbg_set_65595bdd868b3009=function(i,e,t){i.set(e,t>>>0)},n.wbg.__wbg_set_8fc6bf8a5b1071d1=function(i,e,t){return i.set(e,t)},n.wbg.__wbg_stack_0ed75d68575b0f3c=function(i,e){let t=e.stack,r=Ms(t,w.__wbindgen_malloc,w.__wbindgen_realloc),o=Zt;Ii().setInt32(i+4,o,!0),Ii().setInt32(i+0,r,!0)},n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07=function(){let i=typeof global>"u"?null:global;return Yt(i)?0:vt(i)},n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0=function(){let i=typeof globalThis>"u"?null:globalThis;return Yt(i)?0:vt(i)},n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819=function(){let i=typeof self>"u"?null:self;return Yt(i)?0:vt(i)},n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40=function(){let i=typeof window>"u"?null:window;return Yt(i)?0:vt(i)},n.wbg.__wbg_width_5dde457d606ba683=function(i){return i.width},n.wbg.__wbindgen_debug_string=function(i,e){let t=xs(e),r=Ms(t,w.__wbindgen_malloc,w.__wbindgen_realloc),o=Zt;Ii().setInt32(i+4,o,!0),Ii().setInt32(i+0,r,!0)},n.wbg.__wbindgen_error_new=function(i,e){return new Error(Ie(i,e))},n.wbg.__wbindgen_init_externref_table=function(){let i=w.__wbindgen_export_2,e=i.grow(4);i.set(0,void 0),i.set(e+0,void 0),i.set(e+1,null),i.set(e+2,!0),i.set(e+3,!1)},n.wbg.__wbindgen_is_string=function(i){return typeof i=="string"},n.wbg.__wbindgen_is_undefined=function(i){return i===void 0},n.wbg.__wbindgen_memory=function(){return w.memory},n.wbg.__wbindgen_number_new=function(i){return i},n.wbg.__wbindgen_string_new=function(i,e){return Ie(i,e)},n.wbg.__wbindgen_throw=function(i,e){throw new Error(Ie(i,e))},n}function Vf(n,i){return w=n.exports,Dl.__wbindgen_wasm_module=i,Kt=null,xi=null,Ni=null,w.__wbindgen_start(),w}function Dl(n){return T(this,null,function*(){if(w!==void 0)return w;typeof n<"u"&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof n>"u"&&(n=new URL("dicom_viewer_rs_bg.wasm",import.meta.url));let i=Lf();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));let{instance:e,module:t}=yield Pf(yield n,i);return Vf(e,t)})}var Ns=Dl;function ki(n){return n.buttons===0||n.detail===0}function Oi(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Is;function El(){if(Is==null){let n=typeof document<"u"?document.head:null;Is=!!(n&&(n.createShadowRoot||n.attachShadow))}return Is}function Ts(n){if(El()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Pe(n){if(n.composedPath)try{return n.composedPath()[0]}catch(i){}return n.target}var ks;try{ks=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){ks=!1}var X=(()=>{class n{_platformId=l(hn);isBrowser=this._platformId?Ja(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ks)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var Fi;function Al(){if(Fi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Fi=!0}))}finally{Fi=Fi||!1}return Fi}function kn(n){return Al()?n:!!n.capture}function Pi(n,i=0){return Rl(n)?Number(n):arguments.length===2?i:0}function Rl(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function ot(n){return n instanceof V?n.nativeElement:n}var Ml=new p("cdk-input-modality-detector-options"),xl={ignoreKeys:[18,17,224,91,16]},Nl=650,Os={passive:!0,capture:!0},Il=(()=>{class n{_platform=l(X);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new le(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Pe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Nl||(this._modality.next(ki(e)?"keyboard":"mouse"),this._mostRecentTarget=Pe(e))};_onTouchstart=e=>{if(Oi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Pe(e)};constructor(){let e=l(N),t=l(C),r=l(Ml,{optional:!0});if(this._options=f(f({},xl),r),this.modalityDetected=this._modality.pipe(Xi(1)),this.modalityChanged=this.modalityDetected.pipe(Xn()),this._platform.isBrowser){let o=l(Ne).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Os),o.listen(t,"mousedown",this._onMousedown,Os),o.listen(t,"touchstart",this._onTouchstart,Os)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),Li=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Li||{}),Tl=new p("cdk-focus-monitor-default-options"),zr=kn({passive:!0,capture:!0}),Vi=(()=>{class n{_ngZone=l(N);_platform=l(X);_inputModalityDetector=l(Il);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(C);_stopInputModalityDetector=new v;constructor(){let e=l(Tl,{optional:!0});this._detectionMode=e?.detectionMode||Li.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Pe(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=ot(e);if(!this._platform.isBrowser||r.nodeType!==1)return m();let o=Ts(r)||this._document,s=this._elementInfo.get(r);if(s)return t&&(s.checkChildren=!0),s.subject;let c={checkChildren:t,subject:new v,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=ot(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=ot(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([c,a])=>this._originChanged(c,t,a)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Li.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Li.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Nl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Pe(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,zr),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,zr)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(H(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,zr),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,zr),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var Hr=new WeakMap,Xe=(()=>{class n{_appRef;_injector=l(K);_environmentInjector=l(_e);load(e){let t=this._appRef=this._appRef||this._injector.get(lt),r=Hr.get(t);r||(r={loaders:new Set,refs:[]},Hr.set(t,r),t.onDestroy(()=>{Hr.get(t)?.refs.forEach(o=>o.destroy()),Hr.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(rr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var kl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})(),$r;function Bf(){if($r===void 0&&($r=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{$r=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return $r}function Qt(n){return Bf()?.createHTML(n)||n}function Ol(n,i,e){let t=e.sanitize(Re.HTML,i);n.innerHTML=Qt(t||"")}function Bi(n){return Array.isArray(n)?n:[n]}var Fl=new Set,Jt,Wr=(()=>{class n{_platform=l(X);_nonce=l(pn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):jf}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Uf(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function Uf(n,i){if(!Fl.has(n))try{Jt||(Jt=document.createElement("style"),i&&Jt.setAttribute("nonce",i),Jt.setAttribute("type","text/css"),document.head.appendChild(Jt)),Jt.sheet&&(Jt.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),Fl.add(n))}catch(e){console.error(e)}}function jf(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Fs=(()=>{class n{_mediaMatcher=l(Wr);_zone=l(N);_queries=new Map;_destroySubject=new v;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Pl(Bi(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Pl(Bi(e)).map(s=>this._registerQuery(s).observable),o=at(r);return o=Tt(o.pipe(ie(1)),o.pipe(Xi(1),ln(0))),o.pipe(A(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:a,query:d})=>{c.matches=c.matches||a,c.breakpoints[d]=a}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new St(s=>{let c=a=>this._zone.run(()=>s.next(a));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(Ze(t),A(({matches:s})=>({query:e,matches:s})),H(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function Pl(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var qr=(()=>{class n{_platform=l(X);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Hf(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=zf(Zf(e));if(t&&(Ll(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Ll(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Yf(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return Kf(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function zf(n){try{return n.frameElement}catch(i){return null}}function Hf(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function $f(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Wf(n){return qf(n)&&n.type=="hidden"}function Gf(n){return Xf(n)&&n.hasAttribute("href")}function qf(n){return n.nodeName.toLowerCase()=="input"}function Xf(n){return n.nodeName.toLowerCase()=="a"}function Vl(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Ll(n){if(!Vl(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Yf(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function Kf(n){return Wf(n)?!1:$f(n)||Gf(n)||n.hasAttribute("contenteditable")||Vl(n)}function Zf(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Gr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,s){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){xe(i,{injector:this._injector})}},Ps=(()=>{class n{_checker=l(qr);_ngZone=l(N);_document=l(C);_injector=l(K);constructor(){l(Xe).load(kl)}create(e,t=!1){return new Gr(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var Bl=new p("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Ul=new p("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Qf=0,Ls=(()=>{class n{_ngZone=l(N);_defaultOptions=l(Ul,{optional:!0});_liveElement;_document=l(C);_sanitizer=l(ci);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Bl,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,s;return t.length===1&&typeof t[0]=="number"?s=t[0]:[o,s]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ol(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${Qf++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var Jf=200,Xr=class{_letterKeyStream=new v;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new v;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Jf;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(re(e=>this._pressedLetters.push(e)),ln(i),he(()=>this._pressedLetters.length>0),A(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function jl(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}function en(n){return tt(n)?n:m(n)}var Vs=class{_activeItemIndex=-1;_activeItem=null;_shouldActivationFollowFocus=!1;_horizontalOrientation="ltr";_skipPredicateFn=i=>!1;_trackByFn=i=>i;_items=[];_typeahead;_typeaheadSubscription=st.EMPTY;_hasInitialFocused=!1;_initializeFocus(){if(this._hasInitialFocused||this._items.length===0)return;let i=0;for(let t=0;t<this._items.length;t++)if(!this._skipPredicateFn(this._items[t])&&!this._isItemDisabled(this._items[t])){i=t;break}let e=this._items[i];e.makeFocusable?(this._activeItem?.unfocus(),this._activeItemIndex=i,this._activeItem=e,this._typeahead?.setCurrentSelectedItemIndex(i),e.makeFocusable()):this.focusItem(i),this._hasInitialFocused=!0}constructor(i,e){i instanceof Zi?(this._items=i.toArray(),i.changes.subscribe(t=>this._itemsChanged(t.toArray()))):tt(i)?i.subscribe(t=>this._itemsChanged(t)):(this._items=i,this._initializeFocus()),typeof e.shouldActivationFollowFocus=="boolean"&&(this._shouldActivationFollowFocus=e.shouldActivationFollowFocus),e.horizontalOrientation&&(this._horizontalOrientation=e.horizontalOrientation),e.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),e.trackBy&&(this._trackByFn=e.trackBy),typeof e.typeAheadDebounceInterval<"u"&&this._setTypeAhead(e.typeAheadDebounceInterval)}change=new v;destroy(){this._typeaheadSubscription.unsubscribe(),this._typeahead?.destroy(),this.change.complete()}onKeydown(i){switch(i.key){case"Tab":return;case"ArrowDown":this._focusNextItem();break;case"ArrowUp":this._focusPreviousItem();break;case"ArrowRight":this._horizontalOrientation==="rtl"?this._collapseCurrentItem():this._expandCurrentItem();break;case"ArrowLeft":this._horizontalOrientation==="rtl"?this._expandCurrentItem():this._collapseCurrentItem();break;case"Home":this._focusFirstItem();break;case"End":this._focusLastItem();break;case"Enter":case" ":this._activateCurrentItem();break;default:if(i.key==="*"){this._expandAllItemsAtCurrentItemLevel();break}this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}getActiveItemIndex(){return this._activeItemIndex}getActiveItem(){return this._activeItem}_itemsChanged(i){this._hasInitialFocused&&this._activeItem&&!i.includes(this._activeItem)&&(this._activeItem=null,this._hasInitialFocused=!1),this._items=i,this._typeahead?.setItems(this._items),this._updateActiveItemIndex(this._items),this._initializeFocus()}_focusFirstItem(){this.focusItem(this._findNextAvailableItemIndex(-1))}_focusLastItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._items.length))}_focusNextItem(){this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex))}_focusPreviousItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex))}focusItem(i,e={}){e.emitChangeEvent??=!0;let t=typeof i=="number"?i:this._items.findIndex(s=>this._trackByFn(s)===this._trackByFn(i));if(t<0||t>=this._items.length)return;let r=this._items[t];if(this._activeItem!==null&&this._trackByFn(r)===this._trackByFn(this._activeItem))return;let o=this._activeItem;this._activeItem=r??null,this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t),this._activeItem?.focus(),o?.unfocus(),e.emitChangeEvent&&this.change.next(this._activeItem),this._shouldActivationFollowFocus&&this._activateCurrentItem()}_updateActiveItemIndex(i){let e=this._activeItem;if(!e)return;let t=i.findIndex(r=>this._trackByFn(r)===this._trackByFn(e));t>-1&&t!==this._activeItemIndex&&(this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t))}_setTypeAhead(i){this._typeahead=new Xr(this._items,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.focusItem(e)})}_findNextAvailableItemIndex(i){for(let e=i+1;e<this._items.length;e++)if(!this._skipPredicateFn(this._items[e]))return e;return i}_findPreviousAvailableItemIndex(i){for(let e=i-1;e>=0;e--)if(!this._skipPredicateFn(this._items[e]))return e;return i}_collapseCurrentItem(){if(this._activeItem)if(this._isCurrentItemExpanded())this._activeItem.collapse();else{let i=this._activeItem.getParent();if(!i||this._skipPredicateFn(i))return;this.focusItem(i)}}_expandCurrentItem(){this._activeItem&&(this._isCurrentItemExpanded()?en(this._activeItem.getChildren()).pipe(ie(1)).subscribe(i=>{let e=i.find(t=>!this._skipPredicateFn(t));e&&this.focusItem(e)}):this._activeItem.expand())}_isCurrentItemExpanded(){return this._activeItem?typeof this._activeItem.isExpanded=="boolean"?this._activeItem.isExpanded:this._activeItem.isExpanded():!1}_isItemDisabled(i){return typeof i.isDisabled=="boolean"?i.isDisabled:i.isDisabled?.()}_expandAllItemsAtCurrentItemLevel(){if(!this._activeItem)return;let i=this._activeItem.getParent(),e;i?e=en(i.getChildren()):e=m(this._items.filter(t=>t.getParent()===null)),e.pipe(ie(1)).subscribe(t=>{for(let r of t)r.expand()})}_activateCurrentItem(){this._activeItem?.activate()}},zl=new p("tree-key-manager",{providedIn:"root",factory:()=>(n,i)=>new Vs(n,i)});var Hl=new Map,tn=class n{_appId=l(Yn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=Hl.get(i);return t===void 0?t=0:t++,Hl.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})};var $l={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function Bs(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function nn(n){return n==null?"":typeof n=="string"?n:`${n}px`}var ep=new p("cdk-dir-doc",{providedIn:"root",factory:()=>l(C)}),tp=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Wl(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?tp.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Ye=(()=>{class n{get value(){return this.valueSignal()}valueSignal=pe("ltr");change=new P;constructor(){let e=l(ep,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Wl(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var et=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(et||{}),Yr,rn;function Gl(){if(rn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return rn=!1,rn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)rn=!0;else{let n=Element.prototype.scrollTo;n?rn=!/\{\s*\[native code\]\s*\}/.test(n.toString()):rn=!1}}return rn}function On(){if(typeof document!="object"||!document)return et.NORMAL;if(Yr==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Yr=et.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Yr=n.scrollLeft===0?et.NEGATED:et.INVERTED),n.remove()}return Yr}function ql(n){return n&&typeof n.connect=="function"&&!(n instanceof ma)}var Le=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({})}return n})();var np=20,ip=(()=>{class n{_ngZone=l(N);_platform=l(X);_renderer=l(Ne).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new v;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=np){return this._platform.isBrowser?new St(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(So(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):m()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(he(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let r=ot(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),Fn=(()=>{class n{elementRef=l(V);scrollDispatcher=l(ip);ngZone=l(N);dir=l(Ye,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new v;_renderer=l($e);_cleanupScroll;_elementScrolled=new v;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&On()!=et.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),On()==et.INVERTED?e.left=e.right:On()==et.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Gl()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:t:e=="end"&&(e=s?t:r),s&&On()==et.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&On()==et.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),rp=20,Xl=(()=>{class n{_platform=l(X);_listeners;_viewportSize=null;_change=new v;_document=l(C);constructor(){let e=l(N),t=l(Ne).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,c=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:s,left:c}}change(e=rp){return e>0?this._change.pipe(So(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var Us=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({})}return n})();var Ui=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Pn=class extends Ui{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,o,s){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}},Ln=class extends Ui{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},js=class extends Ui{element;constructor(i){super(),this.element=i instanceof V?i.nativeElement:i}},Vn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Pn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Ln)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof js)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Kr=class extends Vn{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(tr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||K.NULL,o=r.get(_e,t.injector);e=rr(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var zs=(()=>{class n extends Vn{_moduleRef=l(tr,{optional:!0});_document=l(C);_viewContainerRef=l(Ve);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new P;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=F({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[oe]})}return n})();var Zr=class{enable(){}disable(){}attach(){}};var Bn=class{positionStrategy;scrollStrategy=new Zr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Zl=(()=>{class n{_attachedOverlays=[];_document=l(C);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),Ql=(()=>{class n extends Zl{_ngZone=l(N);_renderer=l(Ne).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),Jl=(()=>{class n extends Zl{_platform=l(X);_ngZone=l(N);_renderer=l(Ne).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Pe(e)};_clickListener=e=>{let t=Pe(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let c=o[s],a=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,e,a))){if(Yl(c.overlayElement,t)||Yl(c.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>a.next(e)):a.next(e)}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function Yl(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var ed=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})(),sp=(()=>{class n{_platform=l(X);_containerElement;_document=l(C);_styleLoader=l(Xe);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Bs()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Bs()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(ed)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),$s=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function td(n){return n&&n.nodeType===1}var Hs=new Set;var Qr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new v;_attachments=new v;_detachments=new v;_positionStrategy;_scrollStrategy;_locationChanges=st.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new v;_outsidePointerEvents=new v;_afterNextRenderRef;constructor(i,e,t,r,o,s,c,a,d,u=!1,h,g){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=c,this._location=a,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=h,this._renderer=g,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Hs.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=xe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),Hs.delete(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Hs.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=f(f({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ce(f({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=nn(this._config.width),i.height=nn(this._config.height),i.minWidth=nn(this._config.minWidth),i.minHeight=nn(this._config.minHeight),i.maxWidth=nn(this._config.maxWidth),i.maxHeight=nn(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;td(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new $s(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=Bi(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=xe(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var Kl="cdk-global-overlay-wrapper";function Ws(n){return new Jr}var Jr=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Kl),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:c}=t,a=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),d=(o==="100%"||o==="100vh")&&(!c||c==="100%"||c==="100vh"),u=this._xPosition,h=this._xOffset,g=this._overlayRef.getConfig().direction==="rtl",O="",Z="",$="";a?$="flex-start":u==="center"?($="center",g?Z=h:O=h):g?u==="left"||u==="end"?($="flex-end",O=h):(u==="right"||u==="start")&&($="flex-start",Z=h):u==="left"||u==="start"?($="flex-start",O=h):(u==="right"||u==="end")&&($="flex-end",Z=h),i.position=this._cssPosition,i.marginLeft=a?"0":O,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=a?"0":Z,e.justifyContent=$,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Kl),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}};var nd=new p("OVERLAY_DEFAULT_CONFIG");function Gs(n,i){n.get(Xe).load(ed);let e=n.get(sp),t=n.get(C),r=n.get(tn),o=n.get(lt),s=n.get(Ye),c=n.get($e,null,{optional:!0})||n.get(Ne).createRenderer(null,null),a=new Bn(i),d=n.get(nd,null,{optional:!0})?.usePopover??!0;a.direction=a.direction||s.value,!t.body||!("showPopover"in t.body)?a.usePopover=!1:a.usePopover=i?.usePopover??d;let u=t.createElement("div"),h=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),h.appendChild(u),a.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let g=a.usePopover?a.positionStrategy?.getPopoverInsertionPoint?.():null;return td(g)?g.after(h):g?.type==="parent"?g.element.appendChild(h):e.getContainerElement().appendChild(h),new Qr(new Kr(u,o,n),h,u,a,n.get(N),n.get(Ql),t,n.get(Mt),n.get(Jl),i?.disableAnimations??n.get(fn,null,{optional:!0})==="NoopAnimations",n.get(_e),c)}var cp=new p("MATERIAL_ANIMATIONS"),id=null;function qs(){return l(cp,{optional:!0})?.animationsDisabled||l(fn,{optional:!0})==="NoopAnimations"?"di-disabled":(id??=l(Wr).matchMedia("(prefers-reduced-motion)").matches,id?"reduced-motion":"enabled")}function ze(){return qs()!=="enabled"}function on(n){return n!=null&&`${n}`!="false"}var Te=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Te||{}),Xs=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Te.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},rd=kn({passive:!0,capture:!0}),Ys=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let s=o.get(t);s?s.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,rd)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,rd)))}_delegateEventHandler=i=>{let e=Pe(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},ji={enterDuration:225,exitDuration:150},lp=800,od=kn({passive:!0,capture:!0}),sd=["mousedown","touchstart"],ad=["mouseup","mouseleave","touchend","touchcancel"],dp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),zi=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ys;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=ot(t)),o&&o.get(Xe).load(dp)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=f(f({},ji),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let s=t.radius||up(i,e,r),c=i-r.left,a=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-s}px`,u.style.top=`${a-s}px`,u.style.height=`${s*2}px`,u.style.width=`${s*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),g=h.transitionProperty,O=h.transitionDuration,Z=g==="none"||O==="0s"||O==="0s, 0s"||r.width===0&&r.height===0,$=new Xs(this,u,t,Z);u.style.transform="scale3d(1, 1, 1)",$.state=Te.FADING_IN,t.persistent||(this._mostRecentTransientRipple=$);let te=null;return!Z&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ke=()=>{te&&(te.fallbackTimer=null),clearTimeout(Ee),this._finishRippleTransition($)},De=()=>this._destroyRipple($),Ee=setTimeout(De,d+100);u.addEventListener("transitionend",Ke),u.addEventListener("transitioncancel",De),te={onTransitionEnd:Ke,onTransitionCancel:De,fallbackTimer:Ee}}),this._activeRipples.set($,te),(Z||!d)&&this._finishRippleTransition($),$}fadeOutRipple(i){if(i.state===Te.FADING_OUT||i.state===Te.HIDDEN)return;let e=i.element,t=f(f({},ji),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Te.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=ot(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,sd.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ad.forEach(e=>{this._triggerElement.addEventListener(e,this,od)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Te.FADING_IN?this._startFadeOutTransition(i):i.state===Te.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Te.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Te.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=ki(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+lp;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Oi(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Te.VISIBLE||i.config.terminateOnPointerUp&&i.state===Te.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(sd.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(ad.forEach(e=>i.removeEventListener(e,this,od)),this._pointerUpEventsRegistered=!1))}};function up(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Hi=new p("mat-ripple-global-options"),Ks=(()=>{class n{_elementRef=l(V);_animationsDisabled=ze();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(N),t=l(X),r=l(Hi,{optional:!0}),o=l(K);this._globalOptions=r||{},this._rippleRenderer=new zi(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:f(f(f({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,f(f({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,f(f({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&ne("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var hp={capture:!0},fp=["focus","mousedown","mouseenter","touchstart"],Zs="mat-ripple-loader-uninitialized",Qs="mat-ripple-loader-class-name",cd="mat-ripple-loader-centered",eo="mat-ripple-loader-disabled",ld=(()=>{class n{_document=l(C);_animationsDisabled=ze();_globalRippleOptions=l(Hi,{optional:!0});_platform=l(X);_ngZone=l(N);_injector=l(K);_eventCleanups;_hosts=new Map;constructor(){let e=l(Ne).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>fp.map(t=>e.listen(this._document,t,this._onInteraction,hp)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Zs,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Qs))&&e.setAttribute(Qs,t.className||""),t.centered&&e.setAttribute(cd,""),t.disabled&&e.setAttribute(eo,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(eo,""):e.removeAttribute(eo)}_onInteraction=e=>{let t=Pe(e);if(t instanceof HTMLElement){let r=t.closest(`[${Zs}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Qs)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??ji.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??ji.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(eo),rippleConfig:{centered:e.hasAttribute(cd),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},a=new zi(c,this._ngZone,t,this._platform,this._injector),d=!c.rippleDisabled;d&&a.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:a,hasSetUpEvents:d}),e.removeAttribute(Zs)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var to=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var pp=["*",[["","progressIndicator",""]]],mp=["*","[progressIndicator]"];function gp(n,i){n&1&&(vn(0,"div",1),ee(1,1),bn())}var _p=new p("MAT_BUTTON_CONFIG");function dd(n){return n==null?void 0:se(n)}var Js=(()=>{class n{_elementRef=l(V);_ngZone=l(N);_animationsDisabled=ze();_config=l(_p,{optional:!0});_focusMonitor=l(Vi);_cleanupClick;_renderer=l($e);_rippleLoader=l(ld);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Qn(!1,{transform:Q});constructor(){l(Xe).load(to);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(J("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),dt(r.color?"mat-"+r.color:""),ne("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Q],disabled:[2,"disabled","disabled",Q],ariaDisabled:[2,"aria-disabled","ariaDisabled",Q],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Q],tabIndex:[2,"tabIndex","tabIndex",dd],_tabindex:[2,"tabindex","_tabindex",dd],showProgress:[1,"showProgress"]}})}return n})(),ea=(()=>{class n extends Js{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[oe],ngContentSelectors:mp,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Se(pp),Lt(0,"span",0),ee(1),ye(2,gp,2,0,"div",1),Lt(3,"span",2)(4,"span",3)),t&2&&(b(2),we(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();var no=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({imports:[Le]})}return n})();var vp=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],bp=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function yp(n,i){n&1&&(vn(0,"div",2),ee(1,3),bn())}var ud=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Un=(()=>{class n extends Js{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=wp(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?ud.get(this._appearance):null,o=ud.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[oe],ngContentSelectors:bp,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Se(vp),Lt(0,"span",0),ee(1),vn(2,"span",1),ee(3,1),bn(),ee(4,2),ye(5,yp,2,0,"div",2),Lt(6,"span",3)(7,"span",4)),t&2&&(ne("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),b(5),we(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function wp(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({imports:[no,Le]})}return n})();function Sp(n,i){if(n&1){let e=Fe();_(0,"div",1)(1,"button",2),L("click",function(){ve(e);let r=k();return be(r.action())}),q(2),y()()}if(n&2){let e=k();b(2),We(" ",e.data.action," ")}}var Cp=["label"];function Dp(n,i){}var Ep=Math.pow(2,31)-1,$i=class{_overlayRef;instance;containerInstance;_afterDismissed=new v;_afterOpened=new v;_onAction=new v;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Ep))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},fd=new p("MatSnackBarData"),jn=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Ap=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Rp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Mp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),xp=(()=>{class n{snackBarRef=l($i);data=l(fd);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(_(0,"div",0),q(1),y(),ye(2,Sp,3,1,"div",1)),t&2&&(b(),We(" ",r.data.message,`
`),b(),we(r.hasAction?2:-1))},dependencies:[Un,Ap,Rp,Mp],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})(),ta="_mat-snack-bar-enter",na="_mat-snack-bar-exit",Np=(()=>{class n extends Vn{_ngZone=l(N);_elementRef=l(V);_changeDetectorRef=l(me);_platform=l(X);_animationsDisabled=ze();snackBarConfig=l(jn);_document=l(C);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(K);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new v;_onExit=new v;_onEnter=new v;_animationState="void";_live;_label;_role;_liveElementId=l(tn).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===na?this._completeExit():e===ta&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ta)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ta)},200)))}exit(){return this._destroyed?m(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(na)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(na),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(s=>e.classList.add(s)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&ue(zs,7)(Cp,7),t&2){let o;j(o=z())&&(r._portalOutlet=o.first),j(o=z())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&L("animationend",function(s){return r.onAnimationEnd(s.animationName)})("animationcancel",function(s){return r.onAnimationEnd(s.animationName)}),t&2&&ne("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[oe],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(_(0,"div",1)(1,"div",2,0)(3,"div",3),Oe(4,Dp,0,0,"ng-template",4),y(),ae(5,"div"),y()()),t&2&&(b(5),J("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[zs],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})(),Ip=new p("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new jn}),pd=(()=>{class n{_live=l(Ls);_injector=l(K);_breakpointObserver=l(Fs);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(Ip);_animationsDisabled=ze();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=xp;snackBarContainerComponent=Np;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=f(f({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=K.create({parent:r||this._injector,providers:[{provide:jn,useValue:t}]}),s=new Pn(this.snackBarContainerComponent,t.viewContainerRef,o),c=e.attach(s);return c.instance.snackBarConfig=t,c.instance}_attach(e,t){let r=f(f(f({},new jn),this._defaultConfig),t),o=this._createOverlay(r),s=this._attachSnackBarContainer(o,r),c=new $i(s,o);if(e instanceof ct){let a=new Ln(e,null,{$implicit:r.data,snackBarRef:c});c.instance=s.attachTemplatePortal(a)}else{let a=this._createInjector(r,c),d=new Pn(e,void 0,a),u=s.attachComponentPortal(d);c.instance=u.instance}return this._breakpointObserver.observe($l.HandsetPortrait).pipe(H(o.detachments())).subscribe(a=>{o.overlayElement.classList.toggle(this.handsetCssClass,a.matches)}),r.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(c,r),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Bn;t.direction=e.direction;let r=Ws(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,c=!s&&e.horizontalPosition!=="center";return s?r.left("0"):c?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,Gs(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return K.create({parent:r||this._injector,providers:[{provide:$i,useValue:t},{provide:fd,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();var ro=["*"],kp=["content"],md=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],gd=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function Op(n,i){if(n&1){let e=Fe();_(0,"div",1),L("click",function(){ve(e);let r=k();return be(r._onBackdropClicked())}),y()}if(n&2){let e=k();ne("mat-drawer-shown",e._isShowingBackdrop())}}function Fp(n,i){n&1&&(_(0,"mat-drawer-content"),ee(1,2),y())}function Pp(n,i){if(n&1){let e=Fe();_(0,"div",1),L("click",function(){ve(e);let r=k();return be(r._onBackdropClicked())}),y()}if(n&2){let e=k();ne("mat-drawer-shown",e._isShowingBackdrop())}}function Lp(n,i){n&1&&(_(0,"mat-sidenav-content"),ee(1,2),y())}var Vp=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Bp=new p("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),oa=new p("MAT_DRAWER_CONTAINER"),Wi=(()=>{class n extends Fn{_platform=l(X);_changeDetectorRef=l(me);_element=l(V);_ngZone=l(N);_isInert=!1;_container=l(ra);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(ba(50),ie(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute("inert","true"):t.removeAttribute("inert")}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(Qe("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),ne("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[de([{provide:Fn,useExisting:n}]),oe],ngContentSelectors:ro,decls:1,vars:0,template:function(t,r){t&1&&(Se(),ee(0))},encapsulation:2})}return n})(),ia=(()=>{class n{_elementRef=l(V);_focusTrapFactory=l(Ps);_focusMonitor=l(Vi);_platform=l(X);_ngZone=l(N);_renderer=l($e);_interactivityChecker=l(qr);_doc=l(C);_isAnimating=!1;_container=l(oa,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=on(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=on(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(on(e))}_opened=pe(!1);_openedVia=null;_animationStarted=new v;_animationEnd=new v;openedChange=new P(!0);_openedStream=this.openedChange.pipe(he(e=>e),A(()=>{}));openedStart=this._animationStarted.pipe(he(()=>this.opened),Do(void 0));_closedStream=this.openedChange.pipe(he(e=>!e),A(()=>{}));closedStart=this._animationStarted.pipe(he(()=>!this.opened),Do(void 0));_destroyed=new v;onPositionChanged=new P;_content;_modeChanged=new v;_injector=l(K);_changeDetectorRef=l(me);constructor(){this.openedChange.pipe(H(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!jl(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&(this._interactivityChecker.isFocusable(r)||(r.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{s(),c(),r.removeAttribute("tabindex")},s=this._renderer.listen(r,"blur",o),c=this._renderer.listen(r,"mousedown",o)})),r.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":xe(()=>{let t=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(t)&&typeof e.focus=="function"&&e.focus(t)},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(ie(1)).subscribe(s=>o(s?"open":"close"))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&ue(kp,5),t&2){let o;j(o=z())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(J("align",null)("tabIndex",r.mode!=="side"?"-1":null),Qe("visibility",!r._container&&!r.opened?"hidden":null),ne("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ro,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(Se(),_(0,"div",1,0),ee(2),y())},dependencies:[Fn],encapsulation:2})}return n})(),ra=(()=>{class n{_dir=l(Ye,{optional:!0});_element=l(V);_ngZone=l(N);_changeDetectorRef=l(me);_animationDisabled=ze();_transitionsEnabled=!1;_allDrawers;_drawers=new Zi;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=on(e)}_autosize=l(Bp);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:on(e)}_backdropOverride=null;backdropClick=new P;_start=null;_end=null;_left=null;_right=null;_destroyed=new v;_doCheckSubject=new v;_contentMargins={left:null,right:null};_contentMarginChanges=new v;get scrollable(){return this._userContent||this._content}_injector=l(K);constructor(){let e=l(X),t=l(Xl);this._dir?.change.pipe(H(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(H(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ze(this._allDrawers),H(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ze(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ln(10),H(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(H(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(H(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(H(this._drawers.changes)).subscribe(()=>{xe({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(H(va(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,o){if(t&1&&Vt(o,Wi,5)(o,ia,5),t&2){let s;j(s=z())&&(r._content=s.first),j(s=z())&&(r._allDrawers=s)}},viewQuery:function(t,r){if(t&1&&ue(Wi,5),t&2){let o;j(o=z())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&ne("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[de([{provide:oa,useExisting:n}])],ngContentSelectors:gd,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(Se(md),ye(0,Op,1,2,"div",0),ee(1),ee(2,1),ye(3,Fp,2,0,"mat-drawer-content")),t&2&&(we(r.hasBackdrop?0:-1),b(3),we(r._content?-1:3))},dependencies:[Wi],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return n})(),io=(()=>{class n extends Wi{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[de([{provide:Fn,useExisting:n},{provide:Wi,useExisting:n}]),oe],ngContentSelectors:ro,decls:1,vars:0,template:function(t,r){t&1&&(Se(),ee(0))},encapsulation:2})}return n})(),sa=(()=>{class n extends ia{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=on(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Pi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Pi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(J("tabIndex",r.mode!=="side"?"-1":null)("align",null),Qe("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),ne("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[de([{provide:ia,useExisting:n}]),oe],ngContentSelectors:ro,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(Se(),_(0,"div",1,0),ee(2),y())},dependencies:[Fn],encapsulation:2})}return n})(),_d=(()=>{class n extends ra{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,o){if(t&1&&Vt(o,io,5)(o,sa,5),t&2){let s;j(s=z())&&(r._content=s.first),j(s=z())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&ne("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[de([{provide:oa,useExisting:n},{provide:ra,useExisting:n}]),oe],ngContentSelectors:gd,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(Se(md),ye(0,Pp,1,2,"div",0),ee(1),ee(2,1),ye(3,Lp,2,0,"mat-sidenav-content")),t&2&&(we(r.hasBackdrop?0:-1),b(3),we(r._content?-1:3))},dependencies:[io],styles:[Vp],encapsulation:2})}return n})(),vd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({imports:[Us,Le,Us]})}return n})();var oo=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new v;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var ca=new p("CDK_TREE_NODE_OUTLET_NODE"),so=(()=>{class n{viewContainer=l(Ve);_node=l(ca,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkTreeNodeOutlet",""]]})}return n})(),aa=class{$implicit;level;index;count;constructor(i){this.$implicit=i}},ao=(()=>{class n{template=l(ct);when;static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:[0,"cdkTreeNodeDefWhen","when"]}})}return n})();function bd(){return Error("Could not find a tree control, levelAccessor, or childrenAccessor for the tree.")}var zn=(()=>{class n{_differs=l(ir);_changeDetectorRef=l(me);_elementRef=l(V);_dir=l(Ye);_onDestroy=new v;_dataDiffer;_defaultNodeDef=null;_dataSubscription;_levels=new Map;_parents=new Map;_ariaSets=new Map;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}_dataSource;treeControl;levelAccessor;childrenAccessor;trackBy;expansionKey;_nodeOutlet;_nodeDefs;viewChange=new le({start:0,end:Number.MAX_VALUE});_expansionModel;_flattenedNodes=new le([]);_nodeType=new le(null);_nodes=new le(new Map);_keyManagerNodes=new le([]);_keyManagerFactory=l(zl);_keyManager;_viewInit=!1;ngAfterContentInit(){this._initializeKeyManager()}ngAfterContentChecked(){this._updateDefaultNodeDefinition(),this._subscribeToDataChanges()}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this._nodes.complete(),this._keyManagerNodes.complete(),this._nodeType.complete(),this._flattenedNodes.complete(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,this._keyManager?.destroy()}ngOnInit(){this._checkTreeControlUsage(),this._initializeDataDiffer()}ngAfterViewInit(){this._viewInit=!0}_updateDefaultNodeDefinition(){let e=this._nodeDefs.filter(t=>!t.when);e.length>1,this._defaultNodeDef=e[0]}_setNodeTypeIfUnset(e){this._nodeType.value===null&&this._nodeType.next(e)}_switchDataSource(e){this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._subscribeToDataChanges()}_getExpansionModel(){return this.treeControl?this.treeControl.expansionModel:(this._expansionModel??=new oo(!0),this._expansionModel)}_subscribeToDataChanges(){if(this._dataSubscription)return;let e;ql(this._dataSource)?e=this._dataSource.connect(this):tt(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=m(this._dataSource)),e&&(this._dataSubscription=this._getRenderData(e).pipe(H(this._onDestroy)).subscribe(t=>{this._renderDataChanges(t)}))}_getRenderData(e){let t=this._getExpansionModel();return at([e,this._nodeType,t.changed.pipe(Ze(null),re(r=>{this._emitExpansionChanges(r)}))]).pipe(fe(([r,o])=>o===null?m({renderNodes:r,flattenedNodes:null,nodeType:o}):this._computeRenderingData(r,o).pipe(A(s=>ce(f({},s),{nodeType:o})))))}_renderDataChanges(e){if(e.nodeType===null){this.renderNodeChanges(e.renderNodes);return}this._updateCachedData(e.flattenedNodes),this.renderNodeChanges(e.renderNodes),this._updateKeyManagerItems(e.flattenedNodes)}_emitExpansionChanges(e){if(!e)return;let t=this._nodes.value;for(let r of e.added)t.get(r)?._emitExpansionState(!0);for(let r of e.removed)t.get(r)?._emitExpansionState(!1)}_initializeKeyManager(){let e=at([this._keyManagerNodes,this._nodes]).pipe(A(([r,o])=>r.reduce((s,c)=>{let a=o.get(this._getExpansionKey(c));return a&&s.push(a),s},[]))),t={trackBy:r=>this._getExpansionKey(r.data),skipPredicate:r=>!!r.isDisabled,typeAheadDebounceInterval:!0,horizontalOrientation:this._dir.value};this._keyManager=this._keyManagerFactory(e,t)}_initializeDataDiffer(){let e=this.trackBy??((t,r)=>this._getExpansionKey(r));this._dataDiffer=this._differs.find([]).create(e)}_checkTreeControlUsage(){}renderNodeChanges(e,t=this._dataDiffer,r=this._nodeOutlet.viewContainer,o){let s=t.diff(e);!s&&!this._viewInit||(s?.forEachOperation((c,a,d)=>{if(c.previousIndex==null)this.insertNode(e[d],d,r,o);else if(d==null)r.remove(a);else{let u=r.get(a);r.move(u,d)}}),s?.forEachIdentityChange(c=>{let a=c.item;if(c.currentIndex!=null){let d=r.get(c.currentIndex);d.context.$implicit=a}}),o?this._changeDetectorRef.markForCheck():this._changeDetectorRef.detectChanges())}_getNodeDef(e,t){if(this._nodeDefs.length===1)return this._nodeDefs.first;let r=this._nodeDefs.find(o=>o.when&&o.when(t,e))||this._defaultNodeDef;return r}insertNode(e,t,r,o){let s=this._getLevelAccessor(),c=this._getNodeDef(e,t),a=this._getExpansionKey(e),d=new aa(e);d.index=t,o??=this._parents.get(a)??void 0,s?d.level=s(e):o!==void 0&&this._levels.has(this._getExpansionKey(o))?d.level=this._levels.get(this._getExpansionKey(o))+1:d.level=0,this._levels.set(a,d.level),(r||this._nodeOutlet.viewContainer).createEmbeddedView(c.template,d,t),an.mostRecentTreeNode&&(an.mostRecentTreeNode.data=e)}isExpanded(e){return!!(this.treeControl?.isExpanded(e)||this._expansionModel?.isSelected(this._getExpansionKey(e)))}toggle(e){this.treeControl?this.treeControl.toggle(e):this._expansionModel&&this._expansionModel.toggle(this._getExpansionKey(e))}expand(e){this.treeControl?this.treeControl.expand(e):this._expansionModel&&this._expansionModel.select(this._getExpansionKey(e))}collapse(e){this.treeControl?this.treeControl.collapse(e):this._expansionModel&&this._expansionModel.deselect(this._getExpansionKey(e))}toggleDescendants(e){this.treeControl?this.treeControl.toggleDescendants(e):this._expansionModel&&(this.isExpanded(e)?this.collapseDescendants(e):this.expandDescendants(e))}expandDescendants(e){if(this.treeControl)this.treeControl.expandDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.select(this._getExpansionKey(e)),this._getDescendants(e).pipe(ie(1),H(this._onDestroy)).subscribe(r=>{t.select(...r.map(o=>this._getExpansionKey(o)))})}}collapseDescendants(e){if(this.treeControl)this.treeControl.collapseDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.deselect(this._getExpansionKey(e)),this._getDescendants(e).pipe(ie(1),H(this._onDestroy)).subscribe(r=>{t.deselect(...r.map(o=>this._getExpansionKey(o)))})}}expandAll(){this.treeControl?this.treeControl.expandAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.select(...e))}collapseAll(){this.treeControl?this.treeControl.collapseAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.deselect(...e))}_getLevelAccessor(){return this.treeControl?.getLevel?.bind(this.treeControl)??this.levelAccessor}_getChildrenAccessor(){return this.treeControl?.getChildren?.bind(this.treeControl)??this.childrenAccessor}_getDirectChildren(e){let t=this._getLevelAccessor(),r=this._expansionModel??this.treeControl?.expansionModel;if(!r)return m([]);let o=this._getExpansionKey(e),s=r.changed.pipe(fe(a=>a.added.includes(o)?m(!0):a.removed.includes(o)?m(!1):ke),Ze(this.isExpanded(e)));if(t)return at([s,this._flattenedNodes]).pipe(A(([a,d])=>a?this._findChildrenByLevel(t,d,e,1):[]));let c=this._getChildrenAccessor();if(c)return en(c(e)??[]);throw bd()}_findChildrenByLevel(e,t,r,o){let s=this._getExpansionKey(r),c=t.findIndex(h=>this._getExpansionKey(h)===s),a=e(r),d=a+o,u=[];for(let h=c+1;h<t.length;h++){let g=e(t[h]);if(g<=a)break;g<=d&&u.push(t[h])}return u}_registerNode(e){this._nodes.value.set(this._getExpansionKey(e.data),e),this._nodes.next(this._nodes.value)}_unregisterNode(e){this._nodes.value.delete(this._getExpansionKey(e.data)),this._nodes.next(this._nodes.value)}_getLevel(e){return this._levels.get(this._getExpansionKey(e))}_getSetSize(e){return this._getAriaSet(e).length}_getPositionInSet(e){let t=this._getAriaSet(e),r=this._getExpansionKey(e);return t.findIndex(o=>this._getExpansionKey(o)===r)+1}_getNodeParent(e){let t=this._parents.get(this._getExpansionKey(e.data));return t&&this._nodes.value.get(this._getExpansionKey(t))}_getNodeChildren(e){return this._getDirectChildren(e.data).pipe(A(t=>t.reduce((r,o)=>{let s=this._nodes.value.get(this._getExpansionKey(o));return s&&r.push(s),r},[])))}_sendKeydownToKeyManager(e){if(e.target===this._elementRef.nativeElement)this._keyManager.onKeydown(e);else{let t=this._nodes.getValue();for(let[,r]of t)if(e.target===r._elementRef.nativeElement){this._keyManager.onKeydown(e);break}}}_getDescendants(e){if(this.treeControl)return m(this.treeControl.getDescendants(e));if(this.levelAccessor){let t=this._findChildrenByLevel(this.levelAccessor,this._flattenedNodes.value,e,1/0);return m(t)}if(this.childrenAccessor)return this._getAllChildrenRecursively(e).pipe(Co((t,r)=>(t.push(...r),t),[]));throw bd()}_getAllChildrenRecursively(e){return this.childrenAccessor?en(this.childrenAccessor(e)).pipe(ie(1),fe(t=>{for(let r of t)this._parents.set(this._getExpansionKey(r),e);return m(...t).pipe(Dt(r=>Tt(m([r]),this._getAllChildrenRecursively(r))))})):m([])}_getExpansionKey(e){return this.expansionKey?.(e)??e}_getAriaSet(e){let t=this._getExpansionKey(e),r=this._parents.get(t),o=r?this._getExpansionKey(r):null;return this._ariaSets.get(o)??[e]}_findParentForNode(e,t,r){if(!r.length)return null;let o=this._levels.get(this._getExpansionKey(e))??0;for(let s=t-1;s>=0;s--){let c=r[s];if((this._levels.get(this._getExpansionKey(c))??0)<o)return c}return null}_flattenNestedNodesWithExpansion(e,t=0){let r=this._getChildrenAccessor();return r?m(...e).pipe(Dt(o=>{let s=this._getExpansionKey(o);this._parents.has(s)||this._parents.set(s,null),this._levels.set(s,t);let c=en(r(o));return Tt(m([o]),c.pipe(ie(1),re(a=>{this._ariaSets.set(s,[...a??[]]);for(let d of a??[]){let u=this._getExpansionKey(d);this._parents.set(u,o),this._levels.set(u,t+1)}}),fe(a=>a?this._flattenNestedNodesWithExpansion(a,t+1).pipe(A(d=>this.isExpanded(o)?d:[])):m([]))))}),Co((o,s)=>(o.push(...s),o),[])):m([...e])}_computeRenderingData(e,t){if(this.childrenAccessor&&t==="flat")return this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(A(r=>({renderNodes:r,flattenedNodes:r})));if(this.levelAccessor&&t==="nested"){let r=this.levelAccessor;return m(e.filter(o=>r(o)===0)).pipe(A(o=>({renderNodes:o,flattenedNodes:e})),re(({flattenedNodes:o})=>{this._calculateParents(o)}))}else return t==="flat"?m({renderNodes:e,flattenedNodes:e}).pipe(re(({flattenedNodes:r})=>{this._calculateParents(r)})):(this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(A(r=>({renderNodes:e,flattenedNodes:r}))))}_updateCachedData(e){this._flattenedNodes.next(e)}_updateKeyManagerItems(e){this._keyManagerNodes.next(e)}_calculateParents(e){let t=this._getLevelAccessor();if(t){this._clearPreviousCache();for(let r=0;r<e.length;r++){let o=e[r],s=this._getExpansionKey(o);this._levels.set(s,t(o));let c=this._findParentForNode(o,r,e);this._parents.set(s,c);let a=c?this._getExpansionKey(c):null,d=this._ariaSets.get(a)??[];d.splice(r,0,o),this._ariaSets.set(a,d)}}}_forEachExpansionKey(e){let t=[],r=[];this._nodes.value.forEach(o=>{t.push(this._getExpansionKey(o.data)),r.push(this._getDescendants(o.data))}),r.length>0?at(r).pipe(ie(1),H(this._onDestroy)).subscribe(o=>{o.forEach(s=>s.forEach(c=>t.push(this._getExpansionKey(c)))),e(t)}):e(t)}_clearPreviousCache(){this._parents.clear(),this._levels.clear(),this._ariaSets.clear()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["cdk-tree"]],contentQueries:function(t,r,o){if(t&1&&Vt(o,ao,5),t&2){let s;j(s=z())&&(r._nodeDefs=s)}},viewQuery:function(t,r){if(t&1&&ue(so,7),t&2){let o;j(o=z())&&(r._nodeOutlet=o.first)}},hostAttrs:["role","tree",1,"cdk-tree"],hostBindings:function(t,r){t&1&&L("keydown",function(s){return r._sendKeydownToKeyManager(s)})},inputs:{dataSource:"dataSource",treeControl:"treeControl",levelAccessor:"levelAccessor",childrenAccessor:"childrenAccessor",trackBy:"trackBy",expansionKey:"expansionKey"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(t,r){t&1&&At(0,0)},dependencies:[so],encapsulation:2,changeDetection:1})}return n})(),an=(()=>{class n{_elementRef=l(V);_tree=l(zn);_tabindex=-1;_type="flat";get role(){return"treeitem"}set role(e){}get isExpandable(){return this._isExpandable()}set isExpandable(e){this._inputIsExpandable=e,!(this.data&&!this._isExpandable||!this._inputIsExpandable)&&(this._inputIsExpanded?this.expand():this._inputIsExpanded===!1&&this.collapse())}get isExpanded(){return this._tree.isExpanded(this._data)}set isExpanded(e){this._inputIsExpanded=e,e?this.expand():this.collapse()}isDisabled=!1;typeaheadLabel=null;getLabel(){return this.typeaheadLabel||this._elementRef.nativeElement.textContent?.trim()||""}activation=new P;expandedChange=new P;static mostRecentTreeNode=null;_destroyed=new v;_dataChanges=new v;_inputIsExpandable=!1;_inputIsExpanded=void 0;_shouldFocus=!0;_parentNodeAriaLevel;get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._dataChanges.next())}_data;get isLeafNode(){return this._tree.treeControl?.isExpandable!==void 0&&!this._tree.treeControl.isExpandable(this._data)?!0:this._tree.treeControl?.isExpandable===void 0&&this._tree.treeControl?.getDescendants(this._data).length===0}get level(){return this._tree._getLevel(this._data)??this._parentNodeAriaLevel}_isExpandable(){return this._tree.treeControl?!this.isLeafNode:this._inputIsExpandable}_getAriaExpanded(){return this._isExpandable()?String(this.isExpanded):null}_getSetSize(){return this._tree._getSetSize(this._data)}_getPositionInSet(){return this._tree._getPositionInSet(this._data)}_changeDetectorRef=l(me);constructor(){n.mostRecentTreeNode=this}ngOnInit(){this._parentNodeAriaLevel=jp(this._elementRef.nativeElement),this._tree._getExpansionModel().changed.pipe(A(()=>this.isExpanded),Xn(),H(this._destroyed)).pipe(H(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()),this._tree._setNodeTypeIfUnset(this._type),this._tree._registerNode(this)}ngOnDestroy(){n.mostRecentTreeNode===this&&(n.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}getParent(){return this._tree._getNodeParent(this)??null}getChildren(){return this._tree._getNodeChildren(this)}focus(){this._tabindex=0,this._shouldFocus&&this._elementRef.nativeElement.focus(),this._changeDetectorRef.markForCheck()}unfocus(){this._tabindex=-1,this._changeDetectorRef.markForCheck()}activate(){this.isDisabled||this.activation.next(this._data)}collapse(){this.isExpandable&&this._tree.collapse(this._data)}expand(){this.isExpandable&&this._tree.expand(this._data)}makeFocusable(){this._tabindex=0,this._changeDetectorRef.markForCheck()}_focusItem(){this.isDisabled||this._tree._keyManager.focusItem(this)}_setActiveItem(){this.isDisabled||(this._shouldFocus=!1,this._tree._keyManager.focusItem(this),this._shouldFocus=!0)}_emitExpansionState(e){this.expandedChange.emit(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["cdk-tree-node"]],hostAttrs:["role","treeitem",1,"cdk-tree-node"],hostVars:5,hostBindings:function(t,r){t&1&&L("click",function(){return r._setActiveItem()})("focus",function(){return r._focusItem()}),t&2&&(nr("tabIndex",r._tabindex),J("aria-expanded",r._getAriaExpanded())("aria-level",r.level+1)("aria-posinset",r._getPositionInSet())("aria-setsize",r._getSetSize()))},inputs:{role:"role",isExpandable:[2,"isExpandable","isExpandable",Q],isExpanded:"isExpanded",isDisabled:[2,"isDisabled","isDisabled",Q],typeaheadLabel:[0,"cdkTreeNodeTypeaheadLabel","typeaheadLabel"]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["cdkTreeNode"]})}return n})();function jp(n){let i=n.parentElement;for(;i&&!zp(i);)i=i.parentElement;return i?i.classList.contains("cdk-nested-tree-node")?se(i.getAttribute("aria-level")):0:-1}function zp(n){let i=n.classList;return!!(i?.contains("cdk-nested-tree-node")||i?.contains("cdk-tree"))}var Hp=/([A-Za-z%]+)$/,la=(()=>{class n{_treeNode=l(an);_tree=l(zn);_element=l(V);_dir=l(Ye,{optional:!0});_currentPadding=null;_destroyed=new v;indentUnits="px";get level(){return this._level}set level(e){this._setLevelInput(e)}_level;get indent(){return this._indent}set indent(e){this._setIndentInput(e)}_indent=40;constructor(){this._setPadding(),this._dir?.change.pipe(H(this._destroyed)).subscribe(()=>this._setPadding(!0)),this._treeNode._dataChanges.subscribe(()=>this._setPadding())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){let e=(this._treeNode.data&&this._tree._getLevel(this._treeNode.data))??null,t=this._level==null?e:this._level;return typeof t=="number"?`${t*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){let t=this._paddingIndent();if(t!==this._currentPadding||e){let r=this._element.nativeElement,o=this._dir&&this._dir.value==="rtl"?"paddingRight":"paddingLeft",s=o==="paddingLeft"?"paddingRight":"paddingLeft";r.style[o]=t||"",r.style[s]="",this._currentPadding=t}}_setLevelInput(e){this._level=isNaN(e)?null:e,this._setPadding()}_setIndentInput(e){let t=e,r="px";if(typeof e=="string"){let o=e.split(Hp);t=o[0],r=o[1]||r}this.indentUnits=r,this._indent=se(t),this._setPadding()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:[2,"cdkTreeNodePadding","level",se],indent:[0,"cdkTreeNodePaddingIndent","indent"]}})}return n})(),da=(()=>{class n{_tree=l(zn);_treeNode=l(an);recursive=!1;_toggle(e){e.stopPropagation(),this.recursive?this._tree.toggleDescendants(this._treeNode.data):this._tree.toggle(this._treeNode.data),this._tree._keyManager.focusItem(this._treeNode)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkTreeNodeToggle",""]],hostAttrs:["tabindex","-1"],hostBindings:function(t,r){t&1&&L("click",function(s){return r._toggle(s)})("keydown.Enter",function(s){return r._toggle(s),s.preventDefault()})("keydown.Space",function(s){return r._toggle(s),s.preventDefault()})},inputs:{recursive:[2,"cdkTreeNodeToggleRecursive","recursive",Q]}})}return n})();var yd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({})}return n})();function $p(n){return!!n._isNoopTreeKeyManager}var Sd=(()=>{class n extends an{get tabIndexInputBinding(){return this._tabIndexInputBinding}set tabIndexInputBinding(e){this._tabIndexInputBinding=e}_tabIndexInputBinding;defaultTabIndex=0;_getTabindexAttribute(){return $p(this._tree._keyManager)?this.tabIndexInputBinding:this._tabindex}get disabled(){return this.isDisabled}set disabled(e){this.isDisabled=e}constructor(){super();let e=l(new Zn("tabindex"),{optional:!0});this.tabIndexInputBinding=Number(e)||this.defaultTabIndex}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["mat-tree-node"]],hostAttrs:[1,"mat-tree-node"],hostVars:5,hostBindings:function(t,r){t&1&&L("click",function(){return r._focusItem()}),t&2&&(nr("tabIndex",r._getTabindexAttribute()),J("aria-expanded",r._getAriaExpanded())("aria-level",r.level+1)("aria-posinset",r._getPositionInSet())("aria-setsize",r._getSetSize()))},inputs:{tabIndexInputBinding:[2,"tabIndex","tabIndexInputBinding",e=>e==null?0:se(e)],disabled:[2,"disabled","disabled",Q]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["matTreeNode"],features:[de([{provide:an,useExisting:n}]),oe]})}return n})(),Cd=(()=>{class n extends ao{data;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=F({type:n,selectors:[["","matTreeNodeDef",""]],inputs:{when:[0,"matTreeNodeDefWhen","when"],data:[0,"matTreeNode","data"]},features:[de([{provide:ao,useExisting:n}]),oe]})}return n})();var Dd=(()=>{class n extends la{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=F({type:n,selectors:[["","matTreeNodePadding",""]],inputs:{level:[2,"matTreeNodePadding","level",se],indent:[0,"matTreeNodePaddingIndent","indent"]},features:[de([{provide:la,useExisting:n}]),oe]})}return n})(),wd=(()=>{class n{viewContainer=l(Ve);_node=l(ca,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matTreeNodeOutlet",""]],features:[de([{provide:so,useExisting:n}])]})}return n})(),co=(()=>{class n extends zn{_nodeOutlet=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-tree"]],viewQuery:function(t,r){if(t&1&&ue(wd,7),t&2){let o;j(o=z())&&(r._nodeOutlet=o.first)}},hostAttrs:[1,"mat-tree"],exportAs:["matTree"],features:[de([{provide:zn,useExisting:n}]),oe],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(t,r){t&1&&At(0,0)},dependencies:[wd],styles:[`.mat-tree {
  display: block;
  background-color: var(--%NS%mat-tree-container-background-color, var(--%NS%mat-sys-surface));
}

.mat-tree-node,
.mat-nested-tree-node {
  color: var(--%NS%mat-tree-node-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-tree-node-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-tree-node-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-tree-node-text-weight, var(--%NS%mat-sys-body-large-weight));
}

.mat-tree-node {
  display: flex;
  align-items: center;
  flex: 1;
  word-wrap: break-word;
  min-height: var(--%NS%mat-tree-node-min-height, 48px);
}

.mat-nested-tree-node {
  border-bottom-width: 0;
}
`],encapsulation:2,changeDetection:1})}return n})(),Ed=(()=>{class n extends da{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=F({type:n,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:[0,"matTreeNodeToggleRecursive","recursive"]},features:[de([{provide:da,useExisting:n}]),oe]})}return n})();var Ad=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({imports:[yd,Le]})}return n})();function Rd(n){return Error(`Unable to find icon with the name "${n}"`)}function Gp(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Md(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function xd(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var bt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Id=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new bt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let s=this._sanitizer.sanitize(Re.HTML,r);if(!s)throw xd(r);let c=Qt(s);return this._addSvgIconConfig(e,t,new bt("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new bt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(Re.HTML,t);if(!o)throw xd(t);let s=Qt(o);return this._addSvgIconSetConfig(e,new bt("",s,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Re.RESOURCE_URL,e);if(!t)throw Md(e);let r=this._cachedIconsByUrl.get(t);return r?m(lo(r)):this._loadSvgIconFromConfig(new bt(e,null)).pipe(re(o=>this._cachedIconsByUrl.set(t,o)),A(o=>lo(o)))}getNamedSvgIcon(e,t=""){let r=Nd(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(t);return s?this._getSvgFromIconSetConfigs(e,s):Gi(Rd(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?m(lo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(A(t=>lo(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return m(r);let o=t.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(qn(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Re.RESOURCE_URL,s.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),m(null)})));return _a(o).pipe(A(()=>{let s=this._extractIconWithNameFromAnySet(e,t);if(!s)throw Rd(e);return s}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(s,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(re(t=>e.svgText=t),A(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?m(null):this._fetchIcon(e).pipe(re(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let c=this._svgElementFromString(Qt("<svg></svg>"));return c.appendChild(s),this._setSvgAttributes(c,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Qt("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:c}=r[o];s!=="id"&&t.setAttribute(s,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Gp();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let s=this._sanitizer.sanitize(Re.RESOURCE_URL,t);if(!s)throw Md(t);let c=this._inProgressUrlFetches.get(s);if(c)return c;let a=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(A(d=>Qt(d)),dn(()=>this._inProgressUrlFetches.delete(s)),ya());return this._inProgressUrlFetches.set(s,a),a}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Nd(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return qp(o)?new bt(o.url,null,o.options):new bt(o,null)}}static \u0275fac=function(t){return new(t||n)(R(Qo,8),R(ci),R(C,8),R(Ft))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function lo(n){return n.cloneNode(!0)}function Nd(n,i){return n+":"+i}function qp(n){return!!(n.url&&n.options)}var Xp=["*"],Yp=new p("MAT_ICON_DEFAULT_OPTIONS"),Kp=new p("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(C),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Td=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Zp=Td.map(n=>`[${n}]`).join(", "),Qp=/^url\(['"]?#(.*?)['"]?\)$/,uo=(()=>{class n{_elementRef=l(V);_iconRegistry=l(Id);_location=l(Kp);_errorHandler=l(Ft);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=st.EMPTY;constructor(){let e=l(new Zn("aria-hidden"),{optional:!0}),t=l(Yp,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Zp),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Td.forEach(s=>{let c=t[o],a=c.getAttribute(s),d=a?a.match(Qp):null;if(d){let u=r.get(c);u||(u=[],r.set(c,u)),u.push({name:s,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(ie(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(J("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),dt(r.color?"mat-"+r.color:""),ne("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Q],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Xp,decls:1,vars:0,template:function(t,r){t&1&&(Se(),ee(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return n})(),kd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({imports:[Le]})}return n})();function em(n,i){if(n&1){let e=Fe();_(0,"button",8),L("click",function(){ve(e);let r=k(2);return be(r.handleResetFilterClick())}),q(1," Show all series "),y()}}function tm(n,i){if(n&1){let e=Fe();_(0,"button",9),L("click",function(){ve(e);let r=k(2);return be(r.handleResetFilterClick())}),q(1," Show all series "),y()}}function nm(n,i){if(n&1){let e=Fe();_(0,"button",8),L("click",function(){ve(e);let r=k().$implicit,o=k(2);return be(o.handleNodeClick(r.key))}),q(1),y()}if(n&2){let e=k().$implicit;b(),We(" ",e.label," ")}}function im(n,i){if(n&1){let e=Fe();_(0,"button",9),L("click",function(){ve(e);let r=k().$implicit,o=k(2);return be(o.handleNodeClick(r.key))}),q(1),y()}if(n&2){let e=k().$implicit;b(),We(" ",e.label," ")}}function rm(n,i){if(n&1&&(_(0,"mat-tree-node",10),q(1),Oe(2,nm,2,1,"button",4)(3,im,2,1,"ng-template",null,2,Bt),y()),n&2){let e=i.$implicit,t=nt(4),r=k(2);b(),We(" ",e.type,":"),b(),Y("ngIf",r.selectedKey===e.key)("ngIfElse",t)}}function om(n,i){if(n&1&&(_(0,"mat-tree-node",11),q(1),_(2,"button",12)(3,"mat-icon",13),q(4),y()(),q(5),y()),n&2){let e=i.$implicit;k();let t=nt(5);Y("cdkTreeNodeTypeaheadLabel",e.label),b(),We(" ",e.type,":"),b(),J("aria-label","Toggle "+e.label),b(2),We(" ",t.isExpanded(e)?"expand_more":"chevron_right"," "),b(),We(" ",e.label," ")}}function sm(n,i){if(n&1&&(_(0,"div"),Oe(1,em,2,0,"button",4)(2,tm,2,0,"ng-template",null,0,Bt),_(4,"mat-tree",5,1),Oe(6,rm,5,3,"mat-tree-node",6)(7,om,6,5,"mat-tree-node",7),y()()),n&2){let e=nt(3),t=k();b(),Y("ngIf",t.selectedKey===null)("ngIfElse",e),b(3),Y("dataSource",t.data())("childrenAccessor",t.childrenAccessor),b(3),Y("matTreeNodeDefWhen",t.hasChild)}}var ho=class n{dicomHierarchy;setSeriesFilter=new P;resetFilter=new P;tree;selectedKey=null;data=ut(()=>{let i=this.dicomHierarchy();if(!i?.patients)return[];let e=Array.from(i?.patients.entries(),([t,r])=>({label:`${t}`,key:t,type:"Name",children:Array.from(r.studies.entries(),([o,s])=>({label:`${o}`,key:o,type:"Study",children:Array.from(s?.series.entries(),([c,a])=>{let d=new Map;return a.instances instanceof Map&&a.instances.forEach(u=>{let h=u.acquisition_number||"Unknown";d.has(h)||d.set(h,[]),d.get(h)?.push(u)}),d.size>1?{label:`${a.series_date} ${a.series_time} ${a.modality} ${a.body_part_examined}`,key:c,type:"Series",children:Array.from(d.entries()).sort(([u],[h])=>Number(u)-Number(h)).map(([u,h])=>({label:`Acquisition ${u}`,key:`${c}_acq_${u}`,type:"Acquisition",children:Array.isArray(a.instances)?a.instances:[]}))}:{label:`${a.series_date} ${a.series_time} ${a.modality} ${a.body_part_examined}`,key:c,type:"Series",children:Array.isArray(a.instances)?a.instances:[]}})}))}));return setTimeout(()=>{this.tree.expandAll()}),e});handleNodeClick(i){this.selectedKey=i,this.setSeriesFilter.emit(i)}handleResetFilterClick(){this.selectedKey=null,this.resetFilter.emit()}childrenAccessor=i=>i.children??[];hasChild=(i,e)=>!!e.children&&e.children.length>0;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["dicom-tree"]],viewQuery:function(e,t){if(e&1&&ue(co,5),e&2){let r;j(r=z())&&(t.tree=r.first)}},inputs:{dicomHierarchy:"dicomHierarchy"},outputs:{setSeriesFilter:"setSeriesFilter",resetFilter:"resetFilter"},decls:1,vars:1,consts:[["regularResetButton",""],["tree",""],["regularButton",""],[4,"ngIf"],["mat-stroked-button","",3,"click",4,"ngIf","ngIfElse"],[3,"dataSource","childrenAccessor"],["matTreeNodePadding","",4,"matTreeNodeDef"],["matTreeNodePadding","","matTreeNodeToggle","",3,"cdkTreeNodeTypeaheadLabel",4,"matTreeNodeDef","matTreeNodeDefWhen"],["mat-stroked-button","",3,"click"],["mat-button","",3,"click"],["matTreeNodePadding",""],["matTreeNodePadding","","matTreeNodeToggle","",3,"cdkTreeNodeTypeaheadLabel"],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"]],template:function(e,t){e&1&&Oe(0,sm,8,5,"div",3),e&2&&Y("ngIf",t.data()&&t.data().length>0)},dependencies:[it,Ut,Ad,Cd,Dd,Ed,co,Sd,kd,uo,sn,Un,ea],encapsulation:2})};var am=["determinateSpinner"];function cm(n,i){if(n&1&&(Ao(),_(0,"svg",11),ae(1,"circle",12),y()),n&2){let e=k();J("viewBox",e._viewBox()),b(),Qe("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),J("r",e._circleRadius())}}var lm=new p("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Od})}),Od=100,dm=10,Fd=(()=>{class n{_elementRef=l(V);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(lm),t=qs(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Od;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-dm)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&ue(am,5),t&2){let o;j(o=z())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(J("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),dt("mat-"+r.color),Qe("width",r.diameter,"px")("height",r.diameter,"px")("--%NS%mat-progress-spinner-size",r.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",r.diameter+"px"),ne("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",se],diameter:[2,"diameter","diameter",se],strokeWidth:[2,"strokeWidth","strokeWidth",se]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(Oe(0,cm,2,8,"ng-template",null,0,Bt),_(2,"div",2,1),Ao(),_(4,"svg",3),ae(5,"circle",4),y()(),Ca(),_(6,"div",5)(7,"div",6)(8,"div",7),At(9,8),y(),_(10,"div",9),At(11,8),y(),_(12,"div",10),At(13,8),y()()()),t&2){let o=nt(1);b(4),J("viewBox",r._viewBox()),b(),Qe("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),J("r",r._circleRadius()),b(4),Y("ngTemplateOutlet",o),b(2),Y("ngTemplateOutlet",o),b(2),Y("ngTemplateOutlet",o)}},dependencies:[Fo],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return n})();var po=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({imports:[Le]})}return n})();var Pd=new p("");var hm=["knob"],fm=["valueIndicatorContainer"];function pm(n,i){if(n&1&&(_(0,"div",2,1)(2,"div",5)(3,"span",6),q(4),y()()()),n&2){let e=k();b(4),ja(e.valueIndicatorText)}}var mm=["trackActive"],gm=["*"];function _m(n,i){if(n&1&&ae(0,"div"),n&2){let e=i.$implicit,t=i.$index,r=k(3);dt(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),Qe("transform",r._calcTickMarkTransform(t))}}function vm(n,i){if(n&1&&Ba(0,_m,1,4,"div",8,Va),n&2){let e=k(2);Ua(e._tickMarks)}}function bm(n,i){if(n&1&&(_(0,"div",6,1),ye(2,vm,2,0),y()),n&2){let e=k();b(2),we(e._cachedWidth?2:-1)}}function ym(n,i){if(n&1&&ae(0,"mat-slider-visual-thumb",7),n&2){let e=k();Y("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var E=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(E||{}),Hn=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(Hn||{}),ua=new p("_MatSlider"),Ld=new p("_MatSliderThumb"),wm=new p("_MatSliderRangeThumb"),Vd=new p("_MatSliderVisualThumb");var Sm=(()=>{class n{_cdr=l(me);_ngZone=l(N);_slider=l(ua);_renderer=l($e);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=l(V).nativeElement;_platform=l(X);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(t,"pointermove",this._onPointerMove),r.listen(t,"pointerdown",this._onDragStart),r.listen(t,"pointerup",this._onDragEnd),r.listen(t,"pointerleave",this._onMouseLeave),r.listen(t,"focus",this._onFocus),r.listen(t,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===Te.FADING_IN||e?.state===Te.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===E.START?E.END:E.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===E.START?E.END:E.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,r){if(t&1&&ue(Ks,5)(hm,5)(fm,5),t&2){let o;j(o=z())&&(r._ripple=o.first),j(o=z())&&(r._knob=o.first),j(o=z())&&(r._valueIndicatorContainer=o.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[de([{provide:Vd,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,r){t&1&&(ye(0,pm,5,1,"div",2),ae(1,"div",3,0)(3,"div",4)),t&2&&(we(r.discrete?0:-1),b(3),Y("matRippleDisabled",!0))},dependencies:[Ks],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})}return n})(),Bd=(()=>{class n{_ngZone=l(N);_cdr=l(me);_elementRef=l(V);_dir=l(Ye,{optional:!0});_globalRippleOptions=l(Hi,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(E.END),r=this._getInput(E.START);t&&(t.disabled=this._disabled),r&&(r.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(E.END),r=this._getInput(E.START),o=t.value,s=r.value;r.min=e.new,t.min=Math.max(e.new,r.value),r.max=Math.min(t.max,t.value),r._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,r):this._onTranslateXChangeBySideEffect(r,t),o!==t.value&&this._onValueChange(t),s!==r.value&&this._onValueChange(r)}_updateMinNonRange(e){let t=this._getInput(E.END);if(t){let r=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(E.END),r=this._getInput(E.START),o=t.value,s=r.value;t.max=e.new,r.max=Math.min(e.new,t.value),t.min=r.value,t._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,t):this._onTranslateXChangeBySideEffect(t,r),o!==t.value&&this._onValueChange(t),s!==r.value&&this._onValueChange(r)}_updateMaxNonRange(e){let t=this._getInput(E.END);if(t){let r=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(E.END),t=this._getInput(E.START),r=e.value,o=t.value,s=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<s?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),r!==e.value&&this._onValueChange(e),o!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(E.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=ze();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=ut(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=l(X);constructor(){l(Xe).load(to);let e=this._isRtl();Ga(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(E.END),t=this._getInput(E.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let r=this._getThumb(E.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(E.END),t=this._getInput(E.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(E.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(E.START)._isActive||this._getThumb(E.END)._isActive}_getValue(e=E.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(E.START)?._skipUIUpdate||this._getInput(E.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(E.END),t=this._getInput(E.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(E.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(E.START),t=this._getInput(E.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===E.END?E.END:E.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===E.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let r=this._getThumb(e.thumbPosition);t.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(E.END),t=this._getInput(E.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let r=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),r=Math.max(Math.round((t-this.min)/e),0)+1,o=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(Hn.ACTIVE).concat(Array(o).fill(Hn.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),r=this._getValue(E.START),o=Math.max(Math.round((r-this.min)/e),0),s=Math.max(Math.round((t-r)/e)+1,0),c=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(o).fill(Hn.INACTIVE).concat(Array(s).fill(Hn.ACTIVE),Array(c).fill(Hn.INACTIVE))}_getInput(e){if(e===E.END&&this._input)return this._input;if(this._inputs?.length)return e===E.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===E.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,t){let r=t.width/2,o=t.x+r,s=t.y+r,c=e.clientX-o,a=e.clientY-s;return Math.pow(c,2)+Math.pow(a,2)<Math.pow(r,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-slider"]],contentQueries:function(t,r,o){if(t&1&&Vt(o,Ld,5)(o,wm,4),t&2){let s;j(s=z())&&(r._input=s.first),j(s=z())&&(r._inputs=s)}},viewQuery:function(t,r){if(t&1&&ue(mm,5)(Vd,5),t&2){let o;j(o=z())&&(r._trackActive=o.first),j(o=z())&&(r._thumbs=o)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,r){t&2&&(dt("mat-"+(r.color||"primary")),ne("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",Q],discrete:[2,"discrete","discrete",Q],showTickMarks:[2,"showTickMarks","showTickMarks",Q],min:[2,"min","min",se],color:"color",disableRipple:[2,"disableRipple","disableRipple",Q],max:[2,"max","max",se],step:[2,"step","step",se],displayWith:"displayWith"},exportAs:["matSlider"],features:[de([{provide:ua,useExisting:n}])],ngContentSelectors:gm,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,r){t&1&&(Se(),ee(0),_(1,"div",2),ae(2,"div",3),_(3,"div",4),ae(4,"div",5,0),y(),ye(6,bm,3,1,"div",6),y(),ye(7,ym,1,3,"mat-slider-visual-thumb",7),ae(8,"mat-slider-visual-thumb",7)),t&2&&(b(6),we(r.showTickMarks?6:-1),b(),we(r._isRange?7:-1),b(),Y("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText))},dependencies:[Sm],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));
  height: var(--%NS%mat-slider-active-track-height, 4px);
  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--%NS%inactive::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__track--%NS%inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  height: var(--%NS%mat-slider-value-indicator-height, 28px);
  padding: var(--%NS%mat-slider-value-indicator-padding, 0);
  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);
  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--%NS%mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__value-indicator::after {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));
  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));
  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));
  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));
  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--%NS%mat-slider-handle-width, 20px);
  height: var(--%NS%mat-slider-handle-height, 20px);
  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));
  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));
  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var Cm={provide:Pd,useExisting:Yi(()=>ha),multi:!0};var ha=(()=>{class n{_ngZone=l(N);_elementRef=l(V);_cdr=l(me);_slider=l(ua);_platform=l(X);_listenerCleanups;get value(){return se(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new P;dragStart=new P;dragEnd=new P;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=E.END;get min(){return se(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return se(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return se(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return Q(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=pe("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new v;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=l($e);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,s=Math.floor((this._slider.max-this._slider.min)/o),c=this._slider._isRtl()?1-t/r:t/r,d=Math.round(c*s)/s*(this._slider.max-this._slider.min)+this._slider.min,u=Math.round(d/o)*o,h=this.value;if(u===h){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=u,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,r){t&1&&L("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),t&2&&J("aria-valuetext",r._valuetext())},inputs:{value:[2,"value","value",se]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[de([Cm,{provide:Ld,useExisting:n}])]})}return n})();var Ud=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=W({imports:[no,Le]})}return n})();function Em(n,i){if(n&1){let e=Fe();_(0,"mat-slider",4)(1,"input",5),L("input",function(r){ve(e);let o=k(2);return be(o.onInputChange(r))}),y()()}if(n&2){let e=k(2);Y("max",e.metadata()?e.metadata().series_total:1)("discrete",!0),b(),Y("value",e.currentIndex())}}function Am(n,i){if(n&1&&(_(0,"div")(1,"div"),Oe(2,Em,2,3,"mat-slider",2),ae(3,"br"),_(4,"div",3),q(5),ae(6,"br"),q(7),y()()()),n&2){let e=k();b(2),Y("ngIf",e.metadata().series_total>1),b(3),za(" Showing image ",e.currentIndex()," of ",e.metadata()?.series_total," in series. "),b(2),We(" Total amount of images: ",e.metadata()?.total," ")}}var mo=class n{dicomViewer;metadata;getMetadata=new P;currentIndex=ut(()=>{let i=this.metadata();return i?i.current_index+1:0});onInputChange(i){let e=parseInt(i.target.value),t=this.dicomViewer();t&&(t.render_image_at_index(e-1),this.getMetadata.emit())}handleWheel(i){return T(this,null,function*(){let e=this.dicomViewer();e&&(i.deltaY<0?e.render_previous_file():e.render_next_file(),this.getMetadata.emit())})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["dicom-renderer"]],inputs:{dicomViewer:"dicomViewer",metadata:"metadata"},outputs:{getMetadata:"getMetadata"},decls:3,vars:1,consts:[["id","viewer-canvas","width","512","height","512",3,"wheel"],[4,"ngIf"],["min","1","step","1",3,"max","discrete",4,"ngIf"],[1,"metadata"],["min","1","step","1",3,"max","discrete"],["matSliderThumb","",3,"input","value"]],template:function(e,t){e&1&&(_(0,"div")(1,"canvas",0),L("wheel",function(o){return t.handleWheel(o)}),y(),Oe(2,Am,8,4,"div",1),y()),e&2&&(b(2),Y("ngIf",t.metadata()?.total))},dependencies:[it,Ut,po,sn,Ud,Bd,ha],styles:["mat-slider[_ngcontent-%COMP%]{width:100%}.metadata[_ngcontent-%COMP%]{text-align:center}"]})};var Rm=["dragAndDrop"],go=class n{supportsFileSystemAccessAPI="getAsFileSystemHandle"in DataTransferItem.prototype;supportsWebkitGetAsEntry="webkitGetAsEntry"in DataTransferItem.prototype;dragAndCrop;handleFiles=new P;onDragOver(i){i.preventDefault()}onDrop(i){return T(this,null,function*(){i.preventDefault();let t=Array.from(i.dataTransfer?.items||[]).filter(d=>d.kind==="file").map(d=>this.supportsFileSystemAccessAPI?d.getAsFileSystemHandle():this.supportsWebkitGetAsEntry?d.webkitGetAsEntry():d.getAsFile()),r=[];try{for(var o=pa(t),s,c,a;s=!(c=yield o.next()).done;s=!1){let d=c.value;if(d.kind==="directory"||d.isDirectory)console.log(`Directory: ${d.name}`);else if(d.name){let u=yield d.getFile();r.push(u),console.log(`File: ${d.name}`)}else d instanceof File?(r.push(d),console.log(`File instance: ${d.name}`)):console.log("Unknown entry:",d)}}catch(c){a=[c]}finally{try{s&&(c=o.return)&&(yield c.call(o))}finally{if(a)throw a[0]}}this.handleFiles.emit(r)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["drag-and-drop"]],viewQuery:function(e,t){if(e&1&&ue(Rm,5),e&2){let r;j(r=z())&&(t.dragAndCrop=r.first)}},outputs:{handleFiles:"handleFiles"},decls:4,vars:0,consts:[["dragAndDrop",""],[3,"drop","dragover"],["id","drag-and-drop"]],template:function(e,t){e&1&&(_(0,"span",1,0),L("drop",function(o){return t.onDrop(o)})("dragover",function(o){return t.onDragOver(o)}),_(2,"mat-icon",2),q(3,"insert_drive_file"),y()())},dependencies:[it,uo],styles:["#drag-and-drop[_ngcontent-%COMP%]{border:1px dashed white;font-size:100px;width:100px;height:100px;vertical-align:middle}"]})};function Mm(n,i){n&1&&ae(0,"mat-spinner",8)}function xm(n,i){if(n&1){let e=Fe();_(0,"button",9),L("click",function(){ve(e),k();let r=nt(8);return be(r.click())}),q(1," Select file(s) "),y(),q(2," or "),_(3,"button",9),L("click",function(){ve(e),k();let r=nt(6);return be(r.click())}),q(4," Select folder "),y(),q(5," or Drop file(s) here: "),_(6,"drag-and-drop",10),L("handleFiles",function(r){ve(e);let o=k();return be(o.handleFiles(r))}),y(),_(7,"p",11),q(8,"The files are only processed locally and do not leave your device."),y()}}var _o=class n{loading=pe(!1);isDraggedOver=!1;dicomViewer;metadata;dicomHierarchy;getMetadata=new P;openSnackBar=new P;handleFiles(i){return T(this,null,function*(){let e=this.dicomViewer();if(!e)return;let t=Array.from(i).map(o=>{let s=new FileReader;return new Promise((c,a)=>{s.onload=()=>{s.result instanceof ArrayBuffer?c(new Uint8Array(s.result)):a(new Error("Failed to read file as Arraybuffer"))},s.onerror=()=>{a(s.error)},s.readAsArrayBuffer(o)})}),r=yield Promise.all(t);try{e.read_files(r),e.render_image_at_index(0);let o=e.get_dicom_hierarchy();this.dicomHierarchy.set(o),this.getMetadata.emit(),this.openSnackBar.emit({message:"\u2705 "+this.metadata()?.total+" files successfully loaded",action:"Close"})}catch(o){this.dicomHierarchy.set(null),this.getMetadata.emit(),this.openSnackBar.emit({message:"\u26A0\uFE0F Could not load files: "+o.message,action:"Close"})}finally{this.loading.set(!1)}})}handleInputChangeEvent(i){return T(this,null,function*(){this.loading.set(!0);let e=i.target,t=Array.from(e.files||[]);this.handleFiles(t)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["image-picker"]],inputs:{dicomViewer:"dicomViewer",metadata:"metadata",dicomHierarchy:"dicomHierarchy"},outputs:{getMetadata:"getMetadata",openSnackBar:"openSnackBar"},decls:9,vars:2,consts:[["uploadButton",""],["folderinput",""],["fileinput",""],[1,"image-picker"],[1,"buttonarea"],["diameter","48",4,"ngIf","ngIfElse"],["webkitdirectory","","type","file","multiple","","hidden","",3,"change"],["type","file","multiple","","hidden","",3,"change"],["diameter","48"],["type","button","mat-flat-button","",3,"click"],[3,"handleFiles"],[1,"footnote"]],template:function(e,t){if(e&1&&(_(0,"div",3)(1,"div",4),Oe(2,Mm,1,0,"mat-spinner",5)(3,xm,9,0,"ng-template",null,0,Bt),y(),_(5,"input",6,1),L("change",function(o){return t.handleInputChangeEvent(o)}),y(),_(7,"input",7,2),L("change",function(o){return t.handleInputChangeEvent(o)}),y()()),e&2){let r=nt(4);b(2),Y("ngIf",t.loading())("ngIfElse",r)}},dependencies:[it,Ut,po,Fd,sn,Un,go],styles:[".buttonarea[_ngcontent-%COMP%]{min-height:72px}"]})};var vo=class n{title="DICOMViewer";dicomViewer=pe(null);metadata=pe(null);dicomHierarchy=pe(null);_snackBar=l(pd);ngOnInit(){return T(this,null,function*(){yield Ns(),this.dicomViewer.set(Ti.new()),this.metadata.set(Tn.new())})}setSeriesFilter(i){let e=this.dicomViewer();e&&(e.set_current_series_instance_uid(i),this.getMetadata())}resetFilter(){let i=this.dicomViewer();i&&(i.reset_filter(),this.getMetadata())}openSnackBar(i){this._snackBar.open(i.message,i.action,{duration:3e3})}getMetadata(){let i=this.dicomViewer();if(!i)return;let e=i.get_metadata();this.metadata.set(e)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-root"]],decls:12,vars:7,consts:[["mode","side",3,"opened"],[3,"getMetadata","openSnackBar","dicomViewer","dicomHierarchy","metadata"],[3,"setSeriesFilter","resetFilter","dicomHierarchy"],[3,"getMetadata","dicomViewer","metadata"],[1,"information"],["href","https://github.com/Cryt1c/DICOMViewer/issues","target","_blank"]],template:function(e,t){e&1&&(_(0,"main")(1,"mat-sidenav-container")(2,"mat-sidenav",0)(3,"image-picker",1),L("getMetadata",function(){return t.getMetadata()})("openSnackBar",function(o){return t.openSnackBar(o)}),y(),_(4,"dicom-tree",2),L("setSeriesFilter",function(o){return t.setSeriesFilter(o)})("resetFilter",function(){return t.resetFilter()}),y()(),_(5,"mat-sidenav-content")(6,"dicom-renderer",3),L("getMetadata",function(){return t.getMetadata()}),y()()(),_(7,"div",4),q(8," Learning project, not for clinical use. "),_(9,"a",5),q(10,"Report issues"),y()()(),ae(11,"router-outlet")),e&2&&(b(2),Y("opened",!0),b(),Y("dicomViewer",t.dicomViewer)("dicomHierarchy",t.dicomHierarchy)("metadata",t.metadata),b(),Y("dicomHierarchy",t.dicomHierarchy),b(2),Y("dicomViewer",t.dicomViewer)("metadata",t.metadata))},dependencies:[Di,ho,mo,vd,sa,_d,io,_o],styles:["main[_ngcontent-%COMP%]{padding:1em}mat-sidenav-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.footnote[_ngcontent-%COMP%]{margin:5px;font-size:12px}.information[_ngcontent-%COMP%]{position:fixed;bottom:1em;z-index:100;font-size:12px}mat-sidenav[_ngcontent-%COMP%]{width:700px}"]})};$o(vo,yl).catch(n=>console.error(n));
