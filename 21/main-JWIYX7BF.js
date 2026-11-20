import{$ as Pa,$a as ur,$b as ic,A as ni,Aa as B,Ab as Dn,B as To,Ba as cr,Bb as O,C as Mt,Ca as ja,Cb as F,D as hn,Da as lr,Db as fe,E as oe,Ea as bn,Eb as Z,F as Fo,Fa as yn,Fb as Ht,G as Ta,Ga as za,Gb as de,H as ii,Ha,Hb as z,I as fn,Ia as $a,Ib as H,J as Rt,Ja as Wa,Jb as qe,K as Oo,Ka as Ga,Kb as et,L as Fa,La as qa,Lb as $,M as or,Ma as Xa,Mb as tt,N as Je,Na as Ka,Nb as X,O as ge,Oa as wn,Ob as fr,P as K,Pa as Ya,Pb as Xe,Q as se,Qa as Po,Qb as tc,R as T,Ra as Lo,Rb as le,S as mn,Sa as Ne,Sb as $t,T as pn,Ta as y,Tb as nc,U,Ua as mt,Ub as gt,V as G,Va as Ie,Vb as ze,W as Oa,Wa as Ge,Wb as Wt,X as p,Xa as si,Xb as zo,Y as M,Ya as dr,Yb as ai,Z as l,Za as Vo,Zb as mr,_ as Bt,_a as je,_b as me,a as f,aa as ye,ab as hr,ac as rc,b as ue,ba as Ae,bb as Za,bc as j,ca as Me,cb as Bo,cc as ie,d as k,da as _e,db as S,dc as oc,e as Aa,ea as ve,eb as q,ec as pr,f as ut,fa as ri,fb as L,g as No,ga as sr,gb as ce,h as kt,ha as ee,hb as Ve,i as Ma,ia as D,ib as Uo,j as w,ja as Ut,jb as jo,k as he,ka as La,kb as pt,l as Le,la as P,lb as J,m as We,ma as N,mb as we,n as g,na as jt,nb as Se,o as ir,oa as ar,ob as Qa,p as rt,pa as ae,pb as Ja,q as Ra,qa as oi,qb as ec,r as A,ra as Va,rb as V,s as ht,sa as gn,sb as _,t as At,ta as _n,tb as b,u as Vt,ua as vn,ub as te,v as rr,va as Ba,vb as Sn,w as Na,wa as Ua,wb as Cn,x as Ia,xa as ft,xb as zt,y as pe,ya as Re,yb as Nt,z as Io,za as C,zb as Te}from"./chunk-BXHUDTLU.js";var sc=null;function _t(){return sc}function Ho(n){sc??=n}var ci=class{},En=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:()=>l(ac),providedIn:"platform"})}return n})();var ac=(()=>{class n extends En{_location;_history;_doc=l(D);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return _t().getBaseHref(this._doc)}onPopState(e){let t=_t().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=_t().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function dc(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function cc(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function It(n){return n&&n[0]!=="?"?`?${n}`:n}var gr=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:()=>l(su),providedIn:"root"})}return n})(),ou=new p(""),su=(()=>{class n extends gr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(D).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return dc(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+It(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let s=this.prepareExternalUrl(r+It(o));this._platformLocation.pushState(e,t,s)}replaceState(e,t,r,o){let s=this.prepareExternalUrl(r+It(o));this._platformLocation.replaceState(e,t,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(M(En),M(ou,8))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Tt=(()=>{class n{_subject=new w;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=lu(cc(lc(t))),this._locationStrategy.onPopState(r=>{let o={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+It(t))}normalize(e){return n.stripTrailingSlash(cu(this._basePath,lc(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+It(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+It(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=It;static joinWithSlash=dc;static stripTrailingSlash=cc;static \u0275fac=function(t){return new(t||n)(M(gr))};static \u0275prov=U({token:n,factory:()=>au(),providedIn:"root"})}return n})();function au(){return new Tt(M(gr))}function cu(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function lc(n){return n.replace(/\/index\.html$/,"")}function lu(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Gt=(()=>{class n{_viewContainer;_context=new _r;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){uc(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){uc(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(dr(je),dr(mt))};static \u0275dir=L({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),_r=class{$implicit=null;ngIf=null};function uc(n,i){if(n&&!n.createEmbeddedView)throw new T(2020,!1)}var $o=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(ee);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(dr(je))};static \u0275dir=L({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ft]})}return n})();var ot=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({})}return n})();function li(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()!==i)continue;let s=o;try{s=decodeURIComponent(o)}catch(c){}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var Wo="browser";function hc(n){return n===Wo}var di=class{_doc;constructor(i){this._doc=i}manager},vr=(()=>{class n extends di{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(M(D))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),wr=new p(""),Yo=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof vr));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof vr);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new T(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(M(wr),M(N))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),qo="ng-app-id";function fc(n){for(let i of n)i.remove()}function mc(n,i){let e=i.createElement("style");return e.textContent=n,e}function hu(n,i,e,t){let r=n.head?.querySelectorAll(`style[${qo}="${i}"],link[${qo}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(qo),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Ko(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Zo=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,hu(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,mc);t?.forEach(r=>this.addUsage(r,this.external,Ko))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(fc(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])fc(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,mc(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Ko(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(M(D),M(oi),M(vn,8),M(gn))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),Xo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Qo=/%COMP%/g;var gc="%COMP%",fu=`_nghost-${gc}`,mu=`_ngcontent-${gc}`,pu=!0,gu=new p("",{factory:()=>pu}),_u=new p("");function vu(n){return mu.replace(Qo,n)}function bu(n){return fu.replace(Qo,n)}function _c(n,i){return i.map(e=>e.replace(Qo,n))}var fi=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,r,o,s,c,a=null,d=null,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=c,this.nonce=a,this.tracingService=d,this.cssVarNamespace=u??"",this.defaultRenderer=new ui(e,s,c,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof yr?r.applyToHost(e):r instanceof hi&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let s=this.doc,c=this.ngZone,a=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(t.encapsulation){case lr.Emulated:o=new yr(a,d,t,this.appId,u,s,c,h,this.cssVarNamespace);break;case lr.ShadowDom:return new br(a,e,t,s,c,this.nonce,h,this.cssVarNamespace,d);case lr.ExperimentalIsolatedShadowDom:return new br(a,e,t,s,c,this.nonce,h,this.cssVarNamespace);default:o=new hi(a,d,t,u,s,c,h,this.cssVarNamespace);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(M(Yo),M(si),M(oi),M(gu),M(D),M(N),M(vn),M(Po,8),M(_u,8))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),ui=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r,o=""){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Xo[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(pc(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){if(i){let r=pc(i)?i.content:i;if(t!=null&&t.parentNode!==r)throw new T(-5106,!1);r.insertBefore(e,t)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new T(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=Xo[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Xo[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(wn.DashCase|wn.Important)?i.style.setProperty(e,t,r&wn.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||t&wn.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=_t().getGlobalEventTarget(this.doc,i),!i))throw new T(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function pc(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var br=class extends ui{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,s,c,a,d){super(i,r,o,c,a),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=t.styles;u=_c(t.id,u).map(m=>m.replace(/%NS%/g,a));for(let m of u){let E=document.createElement("style");s&&E.setAttribute("nonce",s),E.textContent=m,this.shadowRoot.appendChild(E)}let h=t.getExternalStyles?.();if(h)for(let m of h){let E=Ko(m,r);s&&E.setAttribute("nonce",s),this.shadowRoot.appendChild(E)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},hi=class extends ui{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,s,c,a,d){super(i,o,s,c,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=t.styles,h=d?_c(d,u):u;this.styles=h.map(m=>m.replace(/%NS%/g,a)),this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ya.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},yr=class extends hi{contentAttr;hostAttr;constructor(i,e,t,r,o,s,c,a,d){let u=r+"-"+t.id;super(i,e,t,o,s,c,a,d,u),this.contentAttr=vu(u),this.hostAttr=bu(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var Sr=class n extends ci{supportsDOMEvents=!0;static makeCurrent(){Ho(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=wu();return e==null?null:Su(e)}resetBaseElement(){mi=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return li(document.cookie,i)}},mi=null;function wu(){return mi=mi||document.head.querySelector("base"),mi?mi.getAttribute("href"):null}function Su(n){return new URL(n,document.baseURI).pathname}var vc=["alt","control","meta","shift"],Cu={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Du={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},bc=(()=>{class n extends di{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let s=n.parseEventName(t),c=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>_t().onAndCancel(e,s.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),s="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),s="code."),vc.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),s+=d+".")}),s+=o,t.length!=0||o.length===0)return null;let a={};return a.domEventName=r,a.fullKey=s,a}static matchEventFullKeyCode(e,t){let r=Cu[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),vc.forEach(s=>{if(s!==r){let c=Du[s];c(e)&&(o+=s+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(M(D))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})();function Jo(n,i,e){return k(this,null,function*(){let t=f({rootComponent:n},Eu(i,e));return rc(t)})}function Eu(n,i){return{platformRef:i?.platformRef,appProviders:[...Ru,...n?.providers??[]],platformProviders:Mu}}function xu(){Sr.makeCurrent()}function ku(){return new jt}function Au(){return ja(document),document}var Mu=[{provide:gn,useValue:Wo},{provide:Va,useValue:xu,multi:!0},{provide:D,useFactory:Au}];var Ru=[{provide:Pa,useValue:"root"},{provide:jt,useFactory:ku},{provide:wr,useClass:vr,multi:!0},{provide:wr,useClass:bc,multi:!0},fi,{provide:si,useClass:Zo},{provide:Zo,useExisting:si},Yo,{provide:Ie,useExisting:fi},[]];var bt=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=i.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],c=this.headers.get(e);if(!c)return;c=c.filter(a=>s.indexOf(a)===-1),c.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ns=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},is=class{encodeKey(i){return yc(i)}encodeValue(i){return yc(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Nu(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,c]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],a=e.get(s)||[];a.push(c),e.set(s,a)}),e}var Iu=/%(\d[a-f0-9])/gi,Tu={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function yc(n){return encodeURIComponent(n).replace(Iu,(i,e)=>Tu[e]??i)}function Cr(n){return`${n}`}var vt=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new is,i.fromString){if(i.fromObject)throw new T(2805,!1);this.map=Nu(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Cr):[Cr(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(Cr(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),r=t.indexOf(Cr(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function Fu(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function wc(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Sc(n){return typeof Blob<"u"&&n instanceof Blob}function Cc(n){return typeof FormData<"u"&&n instanceof FormData}function Ou(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var es="Content-Type",Dc="Accept",kc="text/plain",Ac="application/json",Pu=`${Ac}, ${kc}, */*`,xn=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(Fu(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new T(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new bt,this.context??=new ns,!this.params)this.params=new vt,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let c=e,a="",d=e.indexOf("#");d!==-1&&(a=e.substring(d),c=e.substring(0,d));let u=c.indexOf("?"),h=u===-1?"?":u<c.length-1?"&":"";this.urlWithParams=c+h+s+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||wc(this.body)||Sc(this.body)||Cc(this.body)||Ou(this.body)?this.body:this.body instanceof vt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Cc(this.body)?null:Sc(this.body)?this.body.type||null:wc(this.body)?null:typeof this.body=="string"?kc:this.body instanceof vt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ac:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,s=i.priority||this.priority,c=i.cache||this.cache,a=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,h=i.referrer??this.referrer,m=i.integrity||this.integrity,E=i.referrerPolicy||this.referrerPolicy,ne=i.transferCache??this.transferCache,Y=i.timeout??this.timeout,re=i.body!==void 0?i.body:this.body,Qe=i.withCredentials??this.withCredentials,xe=i.reportProgress??this.reportProgress,ke=i.reportUploadProgress??this.reportUploadProgress,Jn=i.reportDownloadProgress??this.reportDownloadProgress,Et=i.headers||this.headers,ei=i.params||this.params,ti=i.context??this.context;return i.setHeaders!==void 0&&(Et=Object.keys(i.setHeaders).reduce((un,xt)=>un.set(xt,i.setHeaders[xt]),Et)),i.setParams&&(ei=Object.keys(i.setParams).reduce((un,xt)=>un.set(xt,i.setParams[xt]),ei)),new n(e,t,re,{params:ei,headers:Et,context:ti,reportProgress:xe,reportUploadProgress:ke,reportDownloadProgress:Jn,responseType:r,withCredentials:Qe,transferCache:ne,keepalive:o,cache:c,priority:s,timeout:Y,mode:a,redirect:d,credentials:u,referrer:h,integrity:m,referrerPolicy:E})}},Xt=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Xt||{}),pi=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new bt,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},rs=class n extends pi{constructor(i={}){super(i)}type=Xt.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},gi=class n extends pi{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Xt.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},qt=class extends pi{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Lu=200;var Vu=/^\)\]\}',?\n/,Rv=1024*1024,Bu=new p("",{factory:()=>null}),Uu=(()=>{class n{fetchImpl=l(os,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(N);destroyRef=l(Ut);maxResponseSize=l(Bu);handle(e){return new kt(t=>{let r=new AbortController,o=!1,s={next:a=>{a.type===Xt.Response&&(o=!0),t.next(a)},error:a=>{o=!0,t.error(a)},complete:()=>{o=!0,t.complete()}};this.doRequest(e,r.signal,s).then(ss,a=>s.error(new qt({error:a})));let c;return e.timeout&&(c=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{c!==void 0&&clearTimeout(c),!o&&!r.signal.aborted&&r.abort()}})}doRequest(e,t,r){return k(this,null,function*(){let o=this.createRequestInit(e),s;try{let re=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,f({signal:t},o)));ju(re),r.next({type:Xt.Sent}),s=yield re}catch(re){r.error(new qt({error:re,status:re.status??0,statusText:re.statusText,url:e.urlWithParams,headers:re.headers}));return}let c=new bt(s.headers),a=s.statusText,d=s.url||e.urlWithParams,u=s.status,h=null,m=e.reportProgress||e.reportDownloadProgress;if(m&&r.next(new rs({headers:c,status:u,statusText:a,url:d})),s.body){let re=s.headers.get(es)??"",Qe=s.headers.get("content-length"),xe=Qe!==null?Number(Qe):NaN;this.maxResponseSize!==null&&Number.isFinite(xe)&&xe>this.maxResponseSize&&(yield s.body.cancel(),Ec(this.maxResponseSize));let ke=[],Jn=s.body.getReader(),Et=0,ei,ti,un=typeof Zone<"u"&&Zone.current,xt=!1;if(yield this.ngZone.runOutsideAngular(()=>k(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield Jn.cancel(),xt=!0;break}let{done:Mo,value:Ro}=yield Jn.read();if(Mo)break;if(ke.push(Ro),Et+=Ro.length,this.maxResponseSize!==null&&Et>this.maxResponseSize&&(yield Jn.cancel(),Ec(this.maxResponseSize)),m){ti=e.responseType==="text"?(ti??"")+(ei??=xc(re)).decode(Ro,{stream:!0}):void 0;let ka=()=>r.next({type:Xt.DownloadProgress,total:Number.isFinite(xe)?xe:void 0,loaded:Et,partialText:ti});un?un.run(ka):ka()}}})),xt){r.complete();return}let ru=this.concatChunks(ke,Et);try{h=this.parseBody(e,ru,re,u)}catch(Mo){r.error(new qt({error:Mo,headers:new bt(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}u===0&&(u=h?Lu:0);let E=u>=200&&u<300,ne=s.redirected,Y=s.type;E?(r.next(new gi({body:h,headers:c,status:u,statusText:a,url:d,redirected:ne,responseType:Y})),r.complete()):r.error(new qt({error:h,headers:c,status:u,statusText:a,url:d,redirected:ne,responseType:Y}))})}parseBody(e,t,r,o){switch(e.responseType){case"json":let s=new TextDecoder().decode(t).replace(Vu,"");if(s==="")return null;try{return JSON.parse(s)}catch(c){if(o<200||o>=300)return s;throw c}case"text":return xc(r).decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new T(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,s)=>t[o]=s.join(",")),e.headers.has(Dc)||(t[Dc]=Pu),!e.headers.has(es)){let o=e.detectContentTypeHeader();o!==null&&(t[es]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),os=class{};function ss(){}function ju(n){n.then(ss,ss)}function Ec(n){throw new T(-2825,!1)}var zu=/charset=\s*["']?([^;"'\s]+)["']?/i;function xc(n){let i=n.match(zu);if(i!==null)try{return new TextDecoder(i[1])}catch(e){}return new TextDecoder}var Hu=new p("",{factory:()=>!0}),$u="XSRF-TOKEN",Wu=new p("",{factory:()=>$u}),Gu="X-XSRF-TOKEN",qu=new p("",{factory:()=>Gu}),Xu=(()=>{class n{cookieName=l(Wu);doc=l(D);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=li(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Ku=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=M(Xu),r},providedIn:"root"})}return n})();function Yu(n,i){if(!l(Hu)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=l(En).href,{origin:o}=new URL(r),{origin:s}=new URL(n.url,o);if(o!==s)return i(n)}catch(r){return i(n)}let e=l(Ku).getToken(),t=l(qu);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function Zu(n,i){return i(n)}function Qu(n,i,e){return(t,r)=>Ae(e,()=>i(t,o=>n(o,r)))}var Ju=new p("",{factory:()=>[Yu]}),Mc=new p(""),eh=new p("",{factory:()=>!0});var th=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=M(Uu),r},providedIn:"root"})}return n})();var nh=(()=>{class n{backend;injector;chain=null;pendingTasks=l(Ua);contributeToStability=l(eh);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=this.injector.get(Rc,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(Mc,[],o?{self:!0}:void 0),c=Array.from(new Set([...this.injector.get(Ju),...s]));this.chain=c.reduceRight((a,d)=>Qu(a,d,this.injector),Zu)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return ze(()=>t(e,o=>this.backend.handle(o))).pipe(fn(r))}else return ze(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||n)(M(th),M(ye))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Rc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=M(nh),r},providedIn:"root"})}return n})();function ts(n,i){return f({body:i},n)}var as=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof xn)o=e;else{let a;r.headers instanceof bt?a=r.headers:a=new bt(r.headers);let d;r.params&&(r.params instanceof vt?d=r.params:d=new vt({fromObject:r.params})),o=new xn(e,t,r.body!==void 0?r.body:null,{headers:a,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=g(o).pipe(Mt(a=>this.handler.handle(a)));if(e instanceof xn||r.observe==="events")return s;let c=s.pipe(pe(a=>a instanceof gi));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(A(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new T(2806,!1);return a.body}));case"blob":return c.pipe(A(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new T(2807,!1);return a.body}));case"text":return c.pipe(A(a=>{if(a.body!==null&&typeof a.body!="string")throw new T(2808,!1);return a.body}));default:return c.pipe(A(a=>a.body))}case"response":return c;default:throw new T(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new vt().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,ts(r,t))}post(e,t,r={}){return this.request("POST",e,ts(r,t))}put(e,t,r={}){return this.request("PUT",e,ts(r,t))}static \u0275fac=function(t){return new(t||n)(M(Rc))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Nc=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(M(D))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _i=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=M(sh),r},providedIn:"root"})}return n})(),sh=(()=>{class n extends _i{_doc=l(D);sanitize(e,t){if(t==null)return null;switch(e){case Me.NONE:return t;case Me.HTML:return yn(t,"HTML")?bn(t):Xa(this._doc,String(t)).toString();case Me.STYLE:return yn(t,"Style")?bn(t):t;case Me.SCRIPT:if(yn(t,"Script"))return bn(t);throw new T(5200,!1);case Me.URL:return yn(t,"URL")?bn(t):qa(String(t));case Me.RESOURCE_URL:if(yn(t,"ResourceURL"))return bn(t);throw new T(-5201,!1);default:throw new T(5202,!1)}}bypassSecurityTrustHtml(e){return za(e)}bypassSecurityTrustStyle(e){return Ha(e)}bypassSecurityTrustScript(e){return $a(e)}bypassSecurityTrustUrl(e){return Wa(e)}bypassSecurityTrustResourceUrl(e){return Ga(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var R="primary",Ni=Symbol("RouteTitle"),hs=class{params;constructor(i){this.params=i||{}}has(i){return Object.hasOwn(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Yt(n){return new hs(n)}function cs(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Uc(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let a={},d=n.slice(0,t.length);return cs(t,d,a)?{consumed:d,posParams:a}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),s=t.slice(r+1);if(o.length+s.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let c={};return!cs(o,n.slice(0,o.length),c)||!cs(s,n.slice(n.length-s.length),c)?null:{consumed:n,posParams:c}}function Mr(n){return new Promise((i,e)=>{n.pipe(Rt()).subscribe({next:t=>i(t),error:t=>e(t)})})}function ch(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!st(n[e],i[e]))return!1;return!0}function st(n,i){let e=n?fs(n):void 0,t=i?fs(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!jc(n[r],i[r]))return!1;return!0}function fs(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function jc(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function lh(n){return n.length>0?n[n.length-1]:null}function en(n){return rt(n)?n:ur(n)?We(Promise.resolve(n)):g(n)}function zc(n){return rt(n)?Mr(n):Promise.resolve(n)}var dh={exact:Wc,subset:Gc},Hc={exact:uh,subset:hh,ignored:()=>!0},$c={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ms={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Tc(n,i,e){return dh[e.paths](n.root,i.root,e.matrixParams)&&Hc[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function uh(n,i){return st(n,i)}function Wc(n,i,e){if(!Kt(n.segments,i.segments)||!xr(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Wc(n.children[t],i.children[t],e))return!1;return!0}function hh(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>jc(n[e],i[e]))}function Gc(n,i,e){return qc(n,i,i.segments,e)}function qc(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!Kt(r,e)||i.hasChildren()||!xr(r,e,t))}else if(n.segments.length===e.length){if(!Kt(n.segments,e)||!xr(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Gc(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!Kt(n.segments,r)||!xr(n.segments,r,t)||!n.children[R]?!1:qc(n.children[R],i,o,t)}}function xr(n,i,e){return i.every((t,r)=>Hc[e](n[r].parameters,t.parameters))}var Ye=class{root;queryParams;fragment;_queryParamMap;constructor(i=new W([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=Yt(this.queryParams),this._queryParamMap}toString(){return ph.serialize(this)}},W=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return kr(this)}},Ft=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Yt(this.parameters),this._parameterMap}toString(){return Kc(this)}};function fh(n,i){return Kt(n,i)&&n.every((e,t)=>st(e.parameters,i[t].parameters))}function Kt(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function mh(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===R&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==R&&(e=e.concat(i(r,t)))}),e}var Ii=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>new Ot})}return n})(),Ot=class{parse(i){let e=new gs(i);return new Ye(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${vi(i.root,!0)}`,t=vh(i.queryParams),r=typeof i.fragment=="string"?`#${gh(i.fragment)}`:"";return`${e}${t}${r}`}},ph=new Ot;function kr(n){return n.segments.map(i=>Kc(i)).join("/")}function vi(n,i){if(!n.hasChildren())return kr(n);if(i){let e=n.children[R]?vi(n.children[R],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==R&&t.push(`${r}:${vi(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=mh(n,(t,r)=>r===R?[vi(n.children[R],!1)]:[`${r}:${vi(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[R]!=null?`${kr(n)}/${e[0]}`:`${kr(n)}/(${e.join("//")})`}}function Xc(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Dr(n){return Xc(n).replace(/%3B/gi,";")}function gh(n){return encodeURI(n)}function ps(n){return Xc(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ar(n){return decodeURIComponent(n)}function Fc(n){return Ar(n.replace(/\+/g,"%20"))}function Kc(n){return`${ps(n.path)}${_h(n.parameters)}`}function _h(n){return Object.entries(n).map(([i,e])=>`;${ps(i)}=${ps(e)}`).join("")}function vh(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Dr(e)}=${Dr(r)}`).join("&"):`${Dr(e)}=${Dr(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var bh=/^[^\/()?;#]+/;function ls(n){let i=n.match(bh);return i?i[0]:""}var yh=/^[^\/()?;=#]+/;function wh(n){let i=n.match(yh);return i?i[0]:""}var Sh=/^[^=?&#]+/;function Ch(n){let i=n.match(Sh);return i?i[0]:""}var Dh=/^[^&#]+/;function Eh(n){let i=n.match(Dh);return i?i[0]:""}var gs=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new W([],{}):new W([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new T(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[R]=new W(e,t)),r}parseSegment(){let i=ls(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new T(4009,!1);return this.capture(i),new Ft(Ar(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=wh(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=ls(this.remaining);r&&(t=r,this.capture(t))}i[Ar(e)]=Ar(t)}parseQueryParam(i){let e=Ch(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let s=Eh(this.remaining);s&&(t=s,this.capture(t))}let r=Fc(e),o=Fc(t);if(Object.hasOwn(i,r)){let s=i[r];Array.isArray(s)||(s=[s],i[r]=s),s.push(o)}else i[r]=o}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ls(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new T(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):i&&(s=R);let c=this.parseChildren(e+1);t[s??R]=Object.keys(c).length===1&&c[R]?c[R]:new W([],c),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new T(4011,!1)}};function Yc(n){return n.segments.length>0?new W([],{[R]:n}):n}function Zc(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let o=Zc(r);if(t===R&&o.segments.length===0&&o.hasChildren())for(let[s,c]of Object.entries(o.children))i[s]=c;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new W(n.segments,i);return xh(e)}function xh(n){if(n.numberOfChildren===1&&n.children[R]){let i=n.children[R];return new W(n.segments.concat(i.segments),i.children)}return n}function Rn(n){return n instanceof Ye}function Qc(n,i,e=null,t=null,r=new Ot){let o=Jc(n);return el(o,i,e,t,r)}function Jc(n){let i;function e(o){let s={};for(let a of o.children){let d=e(a);s[a.outlet]=d}let c=new W(o.url,s);return o===n&&(i=c),c}let t=e(n.root),r=Yc(t);return i??r}function el(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return ds(o,o,o,e,t,r);let s=kh(i);if(s.toRoot())return ds(o,o,new W([],{}),e,t,r);let c=Ah(s,o,n),a=c.processChildren?yi(c.segmentGroup,c.index,s.commands):nl(c.segmentGroup,c.index,s.commands);return ds(o,c.segmentGroup,a,e,t,r)}function Rr(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ci(n){return typeof n=="object"&&n!=null&&n.outlets}function Oc(n,i,e){n||="\u0275";let t=new Ye;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function ds(n,i,e,t,r,o){let s={};for(let[d,u]of Object.entries(t??{}))s[d]=Array.isArray(u)?u.map(h=>Oc(d,h,o)):Oc(d,u,o);let c;n===i?c=e:c=tl(n,i,e);let a=Yc(Zc(c));return new Ye(a,s,r)}function tl(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=tl(o,i,e)}),new W(n.segments,t)}var Nr=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Rr(t[0]))throw new T(4003,!1);let r=t.find(Ci);if(r&&r!==lh(t))throw new T(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function kh(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Nr(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([a,d])=>{c[a]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:c}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((c,a)=>{a==0&&c==="."||(a==0&&c===""?e=!0:c===".."?i++:c!=""&&r.push(c))}),r):[...r,o]},[]);return new Nr(e,i,t)}var An=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Ah(n,i,e){if(n.isAbsolute)return new An(i,!0,0);if(!e)return new An(i,!1,NaN);if(e.parent===null)return new An(e,!0,0);let t=Rr(n.commands[0])?0:1,r=e.segments.length-1+t;return Mh(e,r,n.numberOfDoubleDots)}function Mh(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new T(4005,!1);r=t.segments.length}return new An(t,!1,r-o)}function Rh(n){return Ci(n[0])?n[0].outlets:{[R]:n}}function nl(n,i,e){if(n??=new W([],{}),n.segments.length===0&&n.hasChildren())return yi(n,i,e);let t=Nh(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new W(n.segments.slice(0,t.pathIndex),{});return o.children[R]=new W(n.segments.slice(t.pathIndex),n.children),yi(o,0,r)}else return t.match&&r.length===0?new W(n.segments,{}):t.match&&!n.hasChildren()?_s(n,i,e):t.match?yi(n,0,r):_s(n,i,e)}function yi(n,i,e){if(e.length===0)return new W(n.segments,{});{let t=Rh(e),r=Object.create(null);if(Object.keys(t).some(o=>o!==R)&&n.children[R]&&n.numberOfChildren===1&&n.children[R].segments.length===0){let o=yi(n.children[R],i,e);return new W(n.segments,o.children)}return Object.entries(t).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=nl(n.children[o],i,s))}),Object.entries(n.children).forEach(([o,s])=>{t[o]===void 0&&(r[o]=s)}),new W(n.segments,r)}}function Nh(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let s=n.segments[r],c=e[t];if(Ci(c))break;let a=`${c}`,d=t<e.length-1?e[t+1]:null;if(r>0&&a===void 0)break;if(a&&d&&typeof d=="object"&&d.outlets===void 0){if(!Lc(a,d,s))return o;t+=2}else{if(!Lc(a,{},s))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function _s(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(Ci(o)){let a=Ih(o.outlets);return new W(t,a)}if(r===0&&Rr(e[0])){let a=n.segments[i];t.push(new Ft(a.path,Pc(e[0]))),r++;continue}let s=Ci(o)?o.outlets[R]:`${o}`,c=r<e.length-1?e[r+1]:null;s&&c&&Rr(c)?(t.push(new Ft(s,Pc(c))),r+=2):(t.push(new Ft(s,{})),r++)}return new W(t,{})}function Ih(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=_s(new W([],{}),0,t))}),i}function Pc(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Lc(n,i,e){return n==e.path&&st(i,e.parameters)}var wi="imperative",be=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(be||{}),$e=class{id;url;constructor(i,e){this.id=i,this.url=e}},Zt=class extends $e{type=be.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},wt=class extends $e{urlAfterRedirects;type=be.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ce=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Ce||{}),Di=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Di||{}),Ke=class extends $e{reason;code;type=be.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function il(n){return n instanceof Ke&&(n.code===Ce.Redirect||n.code===Ce.SupersededByNewNavigation)}var St=class extends $e{reason;code;type=be.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},Qt=class extends $e{error;target;type=be.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ei=class extends $e{urlAfterRedirects;state;type=be.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ir=class extends $e{urlAfterRedirects;state;type=be.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Tr=class extends $e{urlAfterRedirects;state;shouldActivate;type=be.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Fr=class extends $e{urlAfterRedirects;state;type=be.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Or=class extends $e{urlAfterRedirects;state;type=be.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Pr=class{route;type=be.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Lr=class{route;type=be.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Vr=class{snapshot;type=be.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Br=class{snapshot;type=be.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ur=class{snapshot;type=be.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},jr=class{snapshot;type=be.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Nn=class{},xi=class{},In=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Th(n){return!(n instanceof Nn)&&!(n instanceof In)&&!(n instanceof xi)}var zr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Jt(this.rootInjector)}resetChildren(){this.children=new Jt(this.rootInjector)}},Jt=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new zr(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(M(ye))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Hr=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=vs(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=vs(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=bs(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return bs(i,this._root).map(e=>e.value)}};function vs(n,i){if(n===i.value)return i;for(let e of i.children){let t=vs(n,e);if(t)return t}return null}function bs(n,i){if(n===i.value)return[i];for(let e of i.children){let t=bs(n,e);if(t.length)return t.unshift(i),t}return[]}var He=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function kn(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var ki=class extends Hr{snapshot;constructor(i,e){super(i),this.snapshot=e,Ms(this,i)}toString(){return this.snapshot.toString()}};function rl(n,i){let e=Fh(n,i),t=new he([new Ft("",{})]),r=new he({}),o=new he({}),s=new he({}),c=new he(""),a=new Pt(t,r,s,c,o,R,n,e.root);return a.snapshot=e.root,new ki(new He(a,[]),e)}function Fh(n,i){let e={},t={},r={},s=new Tn([],e,r,"",t,R,n,null,{},i);return new Ai("",new He(s,[]))}var Pt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(i,e,t,r,o,s,c,a){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=c,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(A(d=>d[Ni]))??g(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(A(i=>Yt(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(A(i=>Yt(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(i){this._futureSnapshot=i,this.pending?.set(!0)}},Oh="always";function As(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:f(f({},i.params),n.params),data:f(f({},i.data),n.data),resolve:f(f(f(f({},n.data),i.data),r?.data),n._resolvedData)}:t={params:f({},n.params),data:f({},n.data),resolve:f(f({},n.data),n._resolvedData??{})},r&&sl(r)&&(t.resolve[Ni]=r.title),t}var Tn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Ni]}constructor(i,e,t,r,o,s,c,a,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=s,this.component=c,this.routeConfig=a,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Yt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Yt(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Ai=class extends Hr{url;constructor(i,e){super(e),this.url=i,Ms(this,e)}toString(){return ol(this._root)}};function Ms(n,i){i.value._routerState=n,i.children.forEach(e=>Ms(n,e))}function ol(n){let i=n.children.length>0?` { ${n.children.map(ol).join(", ")} } `:"";return`${n.value}${i}`}function us(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,st(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),st(i.params,e.params)||n.paramsSubject.next(e.params),ch(i.url,e.url)||n.urlSubject.next(e.url),st(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ys(n,i){let e=st(n.params,i.params)&&fh(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||ys(n.parent,i.parent))}function sl(n){return typeof n.title=="string"||n.title===null}var al=new p(""),Ti=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=R;activateEvents=new P;deactivateEvents=new P;attachEvents=new P;detachEvents=new P;routerOutletData=ai();parentContexts=l(Jt);location=l(je);changeDetector=l(me);inputBinder=l(qr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new T(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,a=new ws(e,c,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:a,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ft]})}return n})(),ws=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===Pt?this.route:i===Jt?this.childContexts:i===al?this.outletData:this.parent.get(i,e)}},qr=new p("");var Rs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&te(0,"router-outlet")},dependencies:[Ti],encapsulation:2,changeDetection:1})}return n})();function Ns(n){let i=n.children&&n.children.map(Ns),e=i?ue(f({},n),{children:i}):f({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==R&&(e.component=Rs),e}function Ph(n,i,e){let t=new Set,r=Mi(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new ki(r,i)}}function Mi(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._setPending(i.value);let o=Lh(n,i,e,t);return new He(r,o)}else{if(n.shouldAttach(i.value)){let s=n.retrieve(i.value);if(s!==null){let c=s.route;return c.value._setPending(i.value),c.children=i.children.map(a=>Mi(n,a,void 0,t)),c}}let r=Vh(i.value);r._setPending(i.value),t.add(r);let o=i.children.map(s=>Mi(n,s,void 0,t));return new He(r,o)}}function Lh(n,i,e,t){return i.children.map(r=>{for(let o of e.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return Mi(n,r,o,t);return Mi(n,r,void 0,t)})}function Vh(n){return new Pt(new he(n.url),new he(n.params),new he(n.queryParams),new he(n.fragment),new he(n.data),n.outlet,n.component,n)}var Fn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},cl="ngNavigationCancelingError";function $r(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Rn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=ll(!1,Ce.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function ll(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[cl]=!0,e.cancellationCode=i,e}function Bh(n){return dl(n)&&Rn(n.url)}function dl(n){return!!n&&n[cl]}var Ss=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),us(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=kn(e);i.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],t),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let s=t.getContext(r.outlet);s&&this.deactivateChildRoutes(i,e,s.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=kn(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(t&&t.outlet){let s=t.outlet.detach(),c=t.children.contexts;t.resetChildren(),this.routeReuseStrategy.store(i.value.snapshot,{componentRef:s,route:i,contexts:c})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=kn(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=kn(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new jr(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Br(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(us(r),r===o)if(r.component){let s=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,s.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let s=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let c=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),us(c.route.value),this.activateChildRoutes(i,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(i,null,s.children)}else this.activateChildRoutes(i,null,t)}},Wr=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Mn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Uh(n,i,e){let t=n._root,r=i?i._root:null;return bi(t,r,e,[t.value])}function jh(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Pn(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!Oa(n)?n:i.get(n):t}function bi(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=kn(i);return n.children.forEach(s=>{zh(s,o[s.value.outlet],e,t.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,c])=>Si(c,e.getContext(s),e,r)),r}function zh(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=i?i.value:null,c=e?e.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let a=Hh(s,o,o.routeConfig.runGuardsAndResolvers);a?r.canActivateChecks.push(new Wr(t)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?bi(n,i,c?c.children:null,t,r):bi(n,i,e,t,r),a&&c&&c.outlet&&c.outlet.isActivated&&r.canDeactivateChecks.push(new Mn(c.outlet.component,s))}else s&&Si(i,c,e,r),r.canActivateChecks.push(new Wr(t)),o.component?bi(n,null,c?c.children:null,t,r):bi(n,null,e,t,r);return r}function Hh(n,i,e){if(typeof e=="function")return Ae(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!Kt(n.url,i.url);case"pathParamsOrQueryParamsChange":return!Kt(n.url,i.url)||!st(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ys(n,i)||!st(n.queryParams,i.queryParams);default:return!ys(n,i)}}function Si(n,i,e,t){let r=kn(n),o=n.value;Object.entries(r).forEach(([s,c])=>{o.component?i?Si(c,i.children.getContext(s),i.children,t):Si(c,null,null,t):Si(c,e?e.getContext(s):null,e,t)}),o.component?i&&i.outlet&&i.outlet.isActivated?t.canDeactivateChecks.push(new Mn(i.outlet.component,o)):t.canDeactivateChecks.push(new Mn(null,o)):t.canDeactivateChecks.push(new Mn(null,o))}function Fi(n){return typeof n=="function"}function $h(n){return typeof n=="boolean"}function Wh(n){return n&&Fi(n.canLoad)}function Gh(n){return n&&Fi(n.canActivate)}function qh(n){return n&&Fi(n.canActivateChild)}function Xh(n){return n&&Fi(n.canDeactivate)}function Kh(n){return n&&Fi(n.canMatch)}function ul(n){return n instanceof Ra||n?.name==="EmptyError"}var Er=Symbol("INITIAL_VALUE");function On(){return ge(n=>ht(n.map(i=>i.pipe(oe(1),Je(Er)))).pipe(A(i=>{for(let e of i)if(e!==!0){if(e===Er)return Er;if(e===!1||Yh(e))return e}return!0}),pe(i=>i!==Er),oe(1)))}function Yh(n){return Rn(n)||n instanceof Fn}function hl(n){return n.aborted?g(void 0).pipe(oe(1)):new kt(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function fl(n){return K(hl(n))}function Zh(n){return At(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?g(ue(f({},i),{guardsResult:!0})):Qh(o,e,t).pipe(At(s=>s&&$h(s)?Jh(e,r,n):g(s)),A(s=>ue(f({},i),{guardsResult:s})))})}function Qh(n,i,e){return We(n).pipe(At(t=>of(t.component,t.route,e,i)),Rt(t=>t!==!0,!0))}function Jh(n,i,e){return We(i).pipe(Mt(t=>Vt(tf(t.route.parent,e),ef(t.route,e),rf(n,t.path),nf(n,t.route))),Rt(t=>t!==!0,!0))}function ef(n,i){return n!==null&&i&&i(new Ur(n)),g(!0)}function tf(n,i){return n!==null&&i&&i(new Vr(n)),g(!0)}function nf(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return g(!0);let t=e.map(r=>rr(()=>{let o=i._environmentInjector,s=Pn(r,o),c=Gh(s)?s.canActivate(i,n):Ae(o,()=>s(i,n));return en(c).pipe(Rt())}));return g(t).pipe(On())}function rf(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>jh(o)).filter(o=>o!==null).map(o=>rr(()=>{let s=o.guards.map(c=>{let a=o.node._environmentInjector,d=Pn(c,a),u=qh(d)?d.canActivateChild(e,n):Ae(a,()=>d(e,n));return en(u).pipe(Rt())});return g(s).pipe(On())}));return g(r).pipe(On())}function of(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return g(!0);let o=r.map(s=>{let c=i._environmentInjector,a=Pn(s,c),d=Xh(a)?a.canDeactivate(n,i,e,t):Ae(c,()=>a(n,i,e,t));return en(d).pipe(Rt())});return g(o).pipe(On())}function sf(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return g(!0);let s=o.map(c=>{let a=Pn(c,n),d=Wh(a)?a.canLoad(i,e):Ae(n,()=>a(i,e)),u=en(d);return r?u.pipe(fl(r)):u});return g(s).pipe(On(),ml(t))}function ml(n){return No(se(i=>{if(typeof i!="boolean")throw $r(n,i)}),A(i=>i===!0))}function af(n,i,e,t,r,o){let s=i.canMatch;if(!s||s.length===0)return g(!0);let c=s.map(a=>{let d=Pn(a,n),u=Kh(d)?d.canMatch(i,e,r):Ae(n,()=>d(i,e,r));return en(u).pipe(fl(o))});return g(c).pipe(On(),ml(t))}var yt=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Ri=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function cf(n){throw new T(4e3,!1)}function lf(n){throw ll(!1,Ce.GuardRejected)}var Cs=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return k(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[R])throw cf(`${i.redirectTo}`);r=r.children[R]}})}applyRedirectCommands(i,e,t,r,o){return k(this,null,function*(){let s=yield df(e,r,o);if(s instanceof Ye)throw new Ri(s);let c=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),i,t);if(s[0]==="/")throw new Ri(c);return c})}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new Ye(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let c=o.substring(1);t[r]=e[c]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),s=Object.create(null);return Object.entries(e.children).forEach(([c,a])=>{s[c]=this.createSegmentGroup(i,a,t,r)}),new W(o,s)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new T(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function df(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Mr(en(Ae(e,()=>t(i))))}function uf(n,i){return n.providers&&!n._injector&&(n._injector=Bo(n.providers,i,`Route: ${n.path}`)),n._injector??i}function nt(n){return n.outlet||R}function hf(n,i){let e=n.filter(t=>nt(t)===i);return e.push(...n.filter(t=>nt(t)!==i)),e}var Ds={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function pl(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function ff(n,i,e,t,r,o,s){let c=gl(n,i,e);if(!c.matched)return g(c);let a=pl(o(c));return t=uf(i,t),af(t,i,e,r,a,s).pipe(A(d=>d===!0?c:f({},Ds)))}function gl(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?f({},Ds):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Uc)(e,n,i);if(!r)return f({},Ds);let o={};Object.entries(r.posParams??{}).forEach(([c,a])=>{o[c]=a.path});let s=r.consumed.length>0?f(f({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Vc(n,i,e,t,r){return e.length>0&&gf(n,e,t,r)?{segmentGroup:new W(i,pf(t,new W(e,n.children))),slicedSegments:[]}:e.length===0&&_f(n,e,t)?{segmentGroup:new W(n.segments,mf(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new W(n.segments,n.children),slicedSegments:e}}function mf(n,i,e,t){let r={};for(let o of e)if(Xr(n,i,o)&&!t[nt(o)]){let s=new W([],{});r[nt(o)]=s}return f(f({},t),r)}function pf(n,i){let e={};e[R]=i;for(let t of n)if(t.path===""&&nt(t)!==R){let r=new W([],{});e[nt(t)]=r}return e}function gf(n,i,e,t){return e.some(r=>!Xr(n,i,r)||!(nt(r)!==R)?!1:!(t!==void 0&&nt(r)===t))}function _f(n,i,e){return e.some(t=>Xr(n,i,t))}function Xr(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function vf(n,i,e){return i.length===0&&!n.children[e]}var Es=class{};function bf(n,i,e,t,r,o,s,c){return k(this,null,function*(){return new xs(n,i,e,t,r,s,o,c).recognize()})}var yf=31,xs=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,s,c,a){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.abortSignal=a,this.applyRedirects=new Cs(this.urlSerializer,this.urlTree)}noMatchError(i){return new T(4002,`'${i.segmentGroup}'`)}recognize(){return k(this,null,function*(){let i=Vc(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(i),r=new He(t,e),o=new Ai("",r),s=Qc(t,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(i){return k(this,null,function*(){let e=new Tn([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),R,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,R,e),rootSnapshot:e}}catch(t){if(t instanceof Ri)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof yt?this.noMatchError(t):t}})}processSegmentGroup(i,e,t,r,o){return k(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let s=yield this.processSegment(i,e,t,t.segments,r,!0,o);return s instanceof He?[s]:[]})}processChildren(i,e,t,r){return k(this,null,function*(){let o=[];for(let a of Object.keys(t.children))a==="primary"?o.unshift(a):o.push(a);let s=[];for(let a of o){let d=t.children[a],u=hf(e,a),h=yield this.processSegmentGroup(i,u,d,a,r);s.push(...h)}let c=_l(s);return wf(c),c})}processSegment(i,e,t,r,o,s,c){return k(this,null,function*(){for(let a of e)try{return yield this.processSegmentAgainstRoute(a._injector??i,e,a,t,r,o,s,c)}catch(d){if(d instanceof yt||ul(d))continue;throw d}if(vf(t,r,o))return new Es;throw new yt(t)})}processSegmentAgainstRoute(i,e,t,r,o,s,c,a){return k(this,null,function*(){if(nt(t)!==s&&(s===R||!Xr(r,o,t)))throw new yt(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,s,a);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,s,a);throw new yt(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,s,c){return k(this,null,function*(){let{matched:a,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:m}=gl(e,r,o);if(!a)throw new yt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>yf&&(this.allowRedirects=!1));let E=this.createSnapshot(i,r,o,d,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let ne=yield this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,pl(E),i),Y=yield this.applyRedirects.lineralizeSegments(r,ne);return this.processSegment(i,t,e,Y.concat(m),s,!1,c)})}createSnapshot(i,e,t,r,o){let s=new Tn(t,r,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Cf(e),nt(e),e.component??e._loadedComponent??null,e,Df(e),i),c=As(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(c.params),s.data=Object.freeze(c.data),s}matchSegmentAgainstRoute(i,e,t,r,o,s){return k(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=ke=>this.createSnapshot(i,t,ke.consumedSegments,ke.parameters,s),a=yield Mr(ff(e,t,r,i,this.urlSerializer,c,this.abortSignal));if(t.path==="**"&&(e.children={}),!a?.matched)throw new yt(e);i=t._injector??i;let{routes:d}=yield this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:h,consumedSegments:m,remainingSegments:E}=a,ne=this.createSnapshot(i,t,m,h,s),{segmentGroup:Y,slicedSegments:re}=Vc(e,m,E,d,o);if(re.length===0&&Y.hasChildren()){let ke=yield this.processChildren(u,d,Y,ne);return new He(ne,ke)}if(d.length===0&&re.length===0)return new He(ne,[]);let Qe=nt(t)===o,xe=yield this.processSegment(u,d,Y,re,Qe?R:o,!0,ne);return new He(ne,xe instanceof He?[xe]:[])})}getChildConfig(i,e,t){return k(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Mr(sf(i,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw lf(e)}return{routes:[],injector:i}})}};function wf(n){n.sort((i,e)=>i.value.outlet===R?-1:e.value.outlet===R?1:i.value.outlet.localeCompare(e.value.outlet))}function Sf(n){let i=n.value.routeConfig;return i&&i.path===""}function _l(n){let i=[],e=new Set;for(let t of n){if(!Sf(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=_l(t.children);i.push(new He(t.value,r))}return i.filter(t=>!e.has(t))}function Cf(n){return n.data||{}}function Df(n){return n.resolve||{}}function Ef(n,i,e,t,r,o,s){return At(c=>k(null,null,function*(){let{state:a,tree:d}=yield bf(n,i,e,t,c.extractedUrl,r,o,s);return ue(f({},c),{targetSnapshot:a,urlAfterRedirects:d})}))}function xf(n){return At(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return g(i);let r=new Set(t.map(c=>c.route)),o=new Set;for(let c of r)if(!o.has(c))for(let a of vl(c))o.add(a);let s=0;return We(o).pipe(Mt(c=>r.has(c)?kf(c,e,n):(c.data=As(c,c.parent,n).resolve,g(void 0))),se(()=>s++),Oo(1),At(c=>s===o.size?g(i):Le))})}function vl(n){let i=n.children.map(e=>vl(e)).flat();return[n,...i]}function kf(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!sl(t)&&(r[Ni]=t.title),rr(()=>(n.data=As(n,n.parent,e).resolve,Af(r,n,i).pipe(A(o=>(n._resolvedData=o,n.data=f(f({},n.data),o),null)))))}function Af(n,i,e){let t=fs(n);if(t.length===0)return g({});let r={};return We(t).pipe(At(o=>Mf(n[o],i,e).pipe(Rt(),se(s=>{if(s instanceof Fn)throw $r(new Ot,s);r[o]=s}))),Oo(1),A(()=>r),ni(o=>ul(o)?Le:ir(o)))}function Mf(n,i,e){let t=i._environmentInjector,r=Pn(n,t),o=r.resolve?r.resolve(i,e):Ae(t,()=>r(i,e));return en(o)}var bl=new p("");function ks(n){return ge(i=>{let e=n(i);return e?We(e).pipe(A(()=>i)):g(i)})}var Is=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===R);return t}getResolvedTitleForRoute(e){return e.data[Ni]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(yl)})}return n})(),yl=(()=>{class n extends Is{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(M(Nc))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Oi=new p("",{factory:()=>({})}),Pi=new p(""),wl=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(nc);loadComponent(e,t){return k(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=k(this,null,function*(){try{let o=yield zc(Ae(e,()=>t.loadComponent())),s=yield Cl(zo(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s,s}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=k(this,null,function*(){try{let o=yield Sl(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Sl(n,i,e,t){return k(this,null,function*(){let r=yield zc(Ae(e,()=>n.loadChildren())),o=yield Cl(zo(r)),s;o instanceof Za||Array.isArray(o)?s=o:s=yield i.compileModuleAsync(o),t&&t(n);let c,a,d=!1,u;return Array.isArray(s)?(a=s,d=!0):(c=s.create(e).injector,u=s,a=c.get(Pi,[],{optional:!0,self:!0}).flat()),{routes:a.map(Ns),injector:c,factory:u}})}function Cl(n){return k(this,null,function*(){return n})}var Kr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Rf)})}return n})(),Rf=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Dl=new p("");var Nf=()=>{},El=new p(""),xl=(()=>{class n{currentNavigation=ae(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ae(null);events=new w;transitionAbortWithErrorSubject=new w;configLoader=l(wl);environmentInjector=l(ye);destroyRef=l(Ut);urlSerializer=l(Ii);rootContexts=l(Jt);location=l(Tt);inputBindingEnabled=l(qr,{optional:!0})!==null;titleStrategy=l(Is);options=l(Oi,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Oh;urlHandlingStrategy=l(Kr);createViewTransition=l(Dl,{optional:!0});navigationErrorHandler=l(El,{optional:!0});routerResourcesFeature=l(bl,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>g(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Pr(r)),t=r=>this.events.next(new Lr(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;ze(()=>{this.transitions?.next(ue(f({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new he(null),this.transitions.pipe(pe(t=>t!==null),ge(t=>{let r=!0,o=!1,s=new AbortController,c=()=>!o&&this.currentTransition?.id===t.id;return g(t).pipe(ge(a=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ce.SupersededByNewNavigation),Le;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:d?ue(f({},d),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&h!=="reload")return this.events.next(new St(a.id,this.urlSerializer.serialize(a.rawUrl),"",Di.IgnoredSameUrlNavigation)),a.resolve(!1),Le;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return g(a).pipe(ge(m=>(this.events.next(new Zt(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?Le:Promise.resolve(m))),Ef(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),se(m=>{t.targetSnapshot=m.targetSnapshot,t.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=m.urlAfterRedirects,E)),this.events.next(new xi)}),ge(m=>We(t.routesRecognizeHandler.deferredHandle??g(void 0)).pipe(A(()=>m))),se(()=>{let m=new Ei(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:m,extractedUrl:E,source:ne,restoredState:Y,extras:re}=a,Qe=new Zt(m,this.urlSerializer.serialize(E),ne,Y);this.events.next(Qe);let xe=rl(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=ue(f({},a),{targetSnapshot:xe,urlAfterRedirects:E,extras:ue(f({},re),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ke=>(ke.finalUrl=E,ke)),g(t)}else return this.events.next(new St(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Di.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Le}),A(a=>{let d=new Ir(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(d),this.currentTransition=t=ue(f({},a),{guards:Uh(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),t}),Zh(a=>this.events.next(a)),ge(a=>{if(t.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw $r(this.urlSerializer,a.guardsResult);let d=new Tr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(d),!c())return Le;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",Ce.GuardRejected),Le;if(a.guards.canActivateChecks.length===0)return g(a);let u=new Fr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(u),!c())return Le;let h=!1;return g(a).pipe(xf(this.paramsInheritanceStrategy),se({next:()=>{h=!0;let m=new Or(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(m)},complete:()=>{h||this.cancelNavigationTransition(a,"",Ce.NoDataFromResolver)}}))}),ks(a=>{let d=h=>{let m=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let E=h._environmentInjector;m.push(this.configLoader.loadComponent(E,h.routeConfig).then(ne=>{h.component=ne}))}for(let E of h.children)m.push(...d(E));return m},u=d(a.targetSnapshot.root);return u.length===0?g(a):We(Promise.all(u).then(()=>a))}),ge(a=>{let{newlyCreatedRoutes:d,state:u}=Ph(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=t=a=ue(f({},a),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(h=>(h.targetRouterState=u,h)),g(a)}),this.routerResourcesFeature?.setupAndRunResources(s.signal)??(a=>a),ks(()=>this.afterPreactivation()),ge(()=>{let{currentSnapshot:a,targetSnapshot:d}=t,u=this.createViewTransition?.(this.environmentInjector,a.root,d.root,t.hasUAVisualTransition);return u?We(u).pipe(A(()=>t)):g(t)}),oe(1),ge(a=>{r=!1,this.events.next(new Nn);let d=t.beforeActivateHandler.deferredHandle;return d?We(d.then(()=>a)):g(a)}),se(a=>{new Ss(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),a.newlyCreatedRoutes?.clear(),c()&&(kl(a.targetRouterState),o=!0,this.currentNavigation.update(d=>(d.abort=Nf,d)),this.lastSuccessfulNavigation.set(ze(this.currentNavigation)),this.events.next(new wt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),K(hl(s.signal).pipe(pe(()=>!o&&r),se(()=>{this.cancelNavigationTransition(t,s.signal.reason+"",Ce.Aborted)}))),se({complete:()=>{o=!0}}),K(this.transitionAbortWithErrorSubject.pipe(se(a=>{throw a}))),fn(()=>{s.abort(),o||this.cancelNavigationTransition(t,"",Ce.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ni(a=>{if(o=!0,Bc(t),this.destroyed)return t.resolve(!1),Le;if(dl(a))this.events.next(new Ke(t.id,this.urlSerializer.serialize(t.extractedUrl),a.message,a.cancellationCode)),Bh(a)?this.events.next(new In(a.url,a.navigationBehaviorOptions)):t.resolve(!1);else{let d=new Qt(t.id,this.urlSerializer.serialize(t.extractedUrl),a,t.targetSnapshot??void 0);try{let u=Ae(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof Fn){let{message:h,cancellationCode:m}=$r(this.urlSerializer,u);this.events.next(new Ke(t.id,this.urlSerializer.serialize(t.extractedUrl),h,m)),this.events.next(new In(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),a}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return Le}))}))}cancelNavigationTransition(e,t,r){Bc(e);let o=new Ke(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=ze(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function If(n){return n!==wi}function Bc(n){for(let i of n.newlyCreatedRoutes??[])i._localInjector?.destroy(),i._localInjector=void 0;kl(n.targetRouterState)}function kl(n){if(!n)return;let i=e=>{e.value.pending?.set(!1),e.children.forEach(i)};i(n._root)}var Al=new p("");var Ml=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Tf)})}return n})(),Gr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Tf=(()=>{class n extends Gr{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Ts=(()=>{class n{urlSerializer=l(Ii);options=l(Oi,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Tt);urlHandlingStrategy=l(Kr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ye;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,s=r??o;return s instanceof Ye?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=rl(null,l(ye));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Ff)})}return n})(),Ff=(()=>{class n extends Ts{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0},t.hasUAVisualTransition)})})}handleRouterEvent(e,t){e instanceof Zt?this.updateStateMemento():e instanceof St?this.commitTransition(t):e instanceof Ei?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Nn?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Ke&&!il(e)?this.restoreHistory(t):e instanceof Qt?this.restoreHistory(t,!0):e instanceof wt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:s,state:c}=r;if(this.location.isCurrentPathEqualTo(e)||s){let a=this.browserPageId,d=f(f({},c),this.generateNgRouterState(o,a,t));this.location.replaceState(e,"",d)}else{let a=f(f({},c),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",a)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?f({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):f({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Fs(n,i){n.events.pipe(pe(e=>e instanceof wt||e instanceof Ke||e instanceof Qt||e instanceof St),A(e=>e instanceof wt||e instanceof St?0:(e instanceof Ke?e.code===Ce.Redirect||e.code===Ce.SupersededByNewNavigation:!1)?2:1),pe(e=>e!==2),oe(1)).subscribe(()=>{i()})}var Yr=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Uo);stateManager=l(Ts);options=l(Oi,{optional:!0})||{};pendingTasks=l(La);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(xl);urlSerializer=l(Ii);location=l(Tt);urlHandlingStrategy=l(Kr);injector=l(ye);_events=new w;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Ml);injectorCleanup=l(Al,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Pi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(qr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ut;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=ze(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof Ke&&t.code!==Ce.Redirect&&t.code!==Ce.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof wt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof In){let s=t.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),a=f({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||If(r.source)},s);this.scheduleNavigation(c,wi,null,a,r.hasUAVisualTransition,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Th(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),wi,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o,s)=>{this.navigateToSyncWithBrowser(e,r,t,o,s)})}navigateToSyncWithBrowser(e,t,r,o,s){let c=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=ue(f({},o),{browserUrl:e})),r){let u=f({},r);delete u.navigationId,delete u.\u0275routerPageId,delete u.\u0275routerUrl,Object.keys(u).length!==0&&(o.state=u)}let d=this.parseUrl(a);this.scheduleNavigation(d,t,c,o,s).catch(u=>{this.disposed||this.injector.get(ar)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ze(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ns),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:c,preserveFragment:a}=t,d=a?this.currentUrlTree.fragment:s,u=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":u=f(f({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let m=r?r.snapshot:this.routerState.snapshot.root;h=Jc(m)}catch(m){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return el(h,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Rn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,wi,null,t)}navigate(e,t={skipLocationChange:!1}){return Of(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(mn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=f({},$c):t===!1?r=f({},ms):r=f(f({},ms),t),Rn(e))return Tc(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Tc(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,s,c){if(this.disposed)return Promise.resolve(!1);let a,d,u;c?(a=c.resolve,d=c.reject,u=c.promise):u=new Promise((m,E)=>{a=m,d=E});let h=this.pendingTasks.add();return Fs(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:s,resolve:a,reject:d,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Of(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new T(4008,!1)}var Vf=new p("");function Os(n,...i){return Bt([{provide:Pi,multi:!0,useValue:n},{provide:Pt,useFactory:Bf},{provide:jo,multi:!0,useFactory:Uf},i.map(e=>e.\u0275providers)])}function Bf(){return l(Yr).routerState.root}function Uf(){let n=l(ee);return i=>{let e=n.get(pt);if(i!==e.components[0])return;let t=n.get(Yr),r=n.get(jf);n.get(zf)===1&&t.initialNavigation(),n.get(Hf,null,{optional:!0})?.setUpPreloading(),n.get(Vf,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var jf=new p("",{factory:()=>new w}),zf=new p("",{factory:()=>1});var Hf=new p("");var Nl=[];var Wf="@",Gf=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(ee);loadingSchedulerFn=l(qf,{optional:!0});_engine;constructor(e,t,r,o,s){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-RL4LWBCR.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new T(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Ps(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let c=s.createRenderer(e,t);o.use(c),this.scheduler??=this.injector.get(Ba,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Vo()};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),Ps=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(Wf)}},qf=new p("");function Il(n="animations"){return Lo("NgAsyncAnimations"),Bt([{provide:Ie,useFactory:()=>new Gf(l(D),l(fi),l(N),n)},{provide:_n,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Tl={providers:[ic({eventCoalescing:!0}),Os(Nl),Il()]};var v,lt=0,Vi=null;function Ln(){return(Vi===null||Vi.byteLength===0)&&(Vi=new Uint8Array(v.memory.buffer)),Vi}var Zr=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},Xf=typeof Zr.encodeInto=="function"?function(n,i){return Zr.encodeInto(n,i)}:function(n,i){let e=Zr.encode(n);return i.set(e),{read:n.length,written:e.length}};function Bi(n,i,e){if(e===void 0){let c=Zr.encode(n),a=i(c.length,1)>>>0;return Ln().subarray(a,a+c.length).set(c),lt=c.length,a}let t=n.length,r=i(t,1)>>>0,o=Ln(),s=0;for(;s<t;s++){let c=n.charCodeAt(s);if(c>127)break;o[r+s]=c}if(s!==t){s!==0&&(n=n.slice(s)),r=e(r,t,t=s+n.length*3,1)>>>0;let c=Ln().subarray(r+s,r+t),a=Xf(n,c);s+=a.written,r=e(r,t,s,1)>>>0}return lt=s,r}var tn=null;function at(){return(tn===null||tn.buffer.detached===!0||tn.buffer.detached===void 0&&tn.buffer!==v.memory.buffer)&&(tn=new DataView(v.memory.buffer)),tn}function Lt(n){let i=v.__externref_table_alloc();return v.__wbindgen_export_4.set(i,n),i}function Li(n,i){try{return n.apply(this,i)}catch(e){let t=Lt(e);v.__wbindgen_exn_store(t)}}function ct(n){return n==null}var Vl=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Vl.decode();function Fe(n,i){return n=n>>>0,Vl.decode(Ln().subarray(n,n+i))}var Ui=null;function Kf(){return(Ui===null||Ui.byteLength===0)&&(Ui=new Uint8ClampedArray(v.memory.buffer)),Ui}function Yf(n,i){return n=n>>>0,Kf().subarray(n/1,n/1+i)}function Ls(n){let i=typeof n;if(i=="number"||i=="boolean"||n==null)return`${n}`;if(i=="string")return`"${n}"`;if(i=="symbol"){let r=n.description;return r==null?"Symbol":`Symbol(${r})`}if(i=="function"){let r=n.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(n)){let r=n.length,o="[";r>0&&(o+=Ls(n[0]));for(let s=1;s<r;s++)o+=", "+Ls(n[s]);return o+="]",o}let e=/\[object ([^\]]+)\]/.exec(toString.call(n)),t;if(e&&e.length>1)t=e[1];else return toString.call(n);if(t=="Object")try{return"Object("+JSON.stringify(n)+")"}catch(r){return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:t}function Bl(n,i){let e=i(n.length*1,1)>>>0;return Ln().set(n,e/1),lt=n.length,e}function Us(n){let i=v.__wbindgen_export_4.get(n);return v.__externref_table_dealloc(n),i}function js(n){let i=Bl(n,v.__wbindgen_malloc),e=lt,t=v.parse_file(i,e);if(t[2])throw Us(t[1]);return Vs.__wrap(t[0])}function Zf(n,i){return n=n>>>0,Ln().subarray(n/1,n/1+i)}var Fl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>v.__wbg_dicomviewer_free(n>>>0,1)),ji=class n{static __wrap(i){i=i>>>0;let e=Object.create(n.prototype);return e.__wbg_ptr=i,Fl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let i=this.__wbg_ptr;return this.__wbg_ptr=0,Fl.unregister(this),i}free(){let i=this.__destroy_into_raw();v.__wbg_dicomviewer_free(i,0)}begin_read(){v.dicomviewer_begin_read(this.__wbg_ptr)}finish_read(){v.dicomviewer_finish_read(this.__wbg_ptr)}get_metadata(){let i=v.dicomviewer_get_metadata(this.__wbg_ptr);return Vn.__wrap(i)}reset_filter(){v.dicomviewer_reset_filter(this.__wbg_ptr)}render_next_file(){v.dicomviewer_render_next_file(this.__wbg_ptr)}add_processed_file(i,e){let t=Bl(e,v.__wbindgen_malloc),r=lt,o=v.dicomviewer_add_processed_file(this.__wbg_ptr,i,t,r);if(o[1])throw Us(o[0])}get_dicom_hierarchy(){return v.dicomviewer_get_dicom_hierarchy(this.__wbg_ptr)}render_previous_file(){v.dicomviewer_render_previous_file(this.__wbg_ptr)}render_image_at_index(i){v.dicomviewer_render_image_at_index(this.__wbg_ptr,i)}set_current_series_instance_uid(i){let e=Bi(i,v.__wbindgen_malloc,v.__wbindgen_realloc),t=lt;v.dicomviewer_set_current_series_instance_uid(this.__wbg_ptr,e,t)}static new(){let i=v.dicomviewer_new();return n.__wrap(i)}},Ol=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>v.__wbg_metadata_free(n>>>0,1)),Vn=class n{static __wrap(i){i=i>>>0;let e=Object.create(n.prototype);return e.__wbg_ptr=i,Ol.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let i=this.__wbg_ptr;return this.__wbg_ptr=0,Ol.unregister(this),i}free(){let i=this.__destroy_into_raw();v.__wbg_metadata_free(i,0)}get total(){return v.__wbg_get_metadata_total(this.__wbg_ptr)>>>0}set total(i){v.__wbg_set_metadata_total(this.__wbg_ptr,i)}get current_index(){return v.__wbg_get_metadata_current_index(this.__wbg_ptr)>>>0}set current_index(i){v.__wbg_set_metadata_current_index(this.__wbg_ptr,i)}get series_total(){return v.__wbg_get_metadata_series_total(this.__wbg_ptr)>>>0}set series_total(i){v.__wbg_set_metadata_series_total(this.__wbg_ptr,i)}get_current_series_instance_uid(){return v.metadata_get_current_series_instance_uid(this.__wbg_ptr)}static new(){let i=v.metadata_new();return n.__wrap(i)}},Pl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>v.__wbg_parseddicom_free(n>>>0,1)),Vs=class n{static __wrap(i){i=i>>>0;let e=Object.create(n.prototype);return e.__wbg_ptr=i,Pl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let i=this.__wbg_ptr;return this.__wbg_ptr=0,Pl.unregister(this),i}free(){let i=this.__destroy_into_raw();v.__wbg_parseddicom_free(i,0)}decode(){let i=v.parseddicom_decode(this.__wbg_ptr);if(i[2])throw Us(i[1]);return Bs.__wrap(i[0])}},Ll=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>v.__wbg_processedfile_free(n>>>0,1)),Bs=class n{static __wrap(i){i=i>>>0;let e=Object.create(n.prototype);return e.__wbg_ptr=i,Ll.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let i=this.__wbg_ptr;return this.__wbg_ptr=0,Ll.unregister(this),i}free(){let i=this.__destroy_into_raw();v.__wbg_processedfile_free(i,0)}luma(){let i=v.processedfile_luma(this.__wbg_ptr);var e=Zf(i[0],i[1]).slice();return v.__wbindgen_free(i[0],i[1]*1,1),e}meta(){return v.processedfile_meta(this.__wbg_ptr)}};function Qf(n,i){return k(this,null,function*(){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return yield WebAssembly.instantiateStreaming(n,i)}catch(t){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}let e=yield n.arrayBuffer();return yield WebAssembly.instantiate(e,i)}else{let e=yield WebAssembly.instantiate(n,i);return e instanceof WebAssembly.Instance?{instance:e,module:n}:e}})}function Jf(){let n={};return n.wbg={},n.wbg.__wbg_String_8f0eb39a4a4c2f66=function(i,e){let t=String(e),r=Bi(t,v.__wbindgen_malloc,v.__wbindgen_realloc),o=lt;at().setInt32(i+4,o,!0),at().setInt32(i+0,r,!0)},n.wbg.__wbg_buffer_609cc3eee51ed158=function(i){return i.buffer},n.wbg.__wbg_call_672a4d21634d4a24=function(){return Li(function(i,e){return i.call(e)},arguments)},n.wbg.__wbg_clearRect_8e4ba7ea0e06711a=function(i,e,t,r,o){i.clearRect(e,t,r,o)},n.wbg.__wbg_document_d249400bd7bd996d=function(i){let e=i.document;return ct(e)?0:Lt(e)},n.wbg.__wbg_error_7534b8e9a36f1ab4=function(i,e){let t,r;try{t=i,r=e,console.error(Fe(i,e))}finally{v.__wbindgen_free(t,r,1)}},n.wbg.__wbg_getContext_e9cf379449413580=function(){return Li(function(i,e,t){let r=i.getContext(Fe(e,t));return ct(r)?0:Lt(r)},arguments)},n.wbg.__wbg_getElementById_f827f0d6648718a8=function(i,e,t){let r=i.getElementById(Fe(e,t));return ct(r)?0:Lt(r)},n.wbg.__wbg_getwithrefkey_1dc361bd10053bfe=function(i,e){return i[e]},n.wbg.__wbg_height_838cee19ba8597db=function(i){return i.height},n.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc=function(i){let e;try{e=i instanceof ArrayBuffer}catch(r){e=!1}return e},n.wbg.__wbg_instanceof_CanvasRenderingContext2d_df82a4d3437bf1cc=function(i){let e;try{e=i instanceof CanvasRenderingContext2D}catch(r){e=!1}return e},n.wbg.__wbg_instanceof_HtmlCanvasElement_2ea67072a7624ac5=function(i){let e;try{e=i instanceof HTMLCanvasElement}catch(r){e=!1}return e},n.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9=function(i){let e;try{e=i instanceof Uint8Array}catch(r){e=!1}return e},n.wbg.__wbg_instanceof_Window_def73ea0955fc569=function(i){let e;try{e=i instanceof Window}catch(r){e=!1}return e},n.wbg.__wbg_isSafeInteger_343e2beeeece1bb0=function(i){return Number.isSafeInteger(i)},n.wbg.__wbg_length_a446193dc22c12f8=function(i){return i.length},n.wbg.__wbg_log_0cc1b7768397bcfe=function(i,e,t,r,o,s,c,a){let d,u;try{d=i,u=e,console.log(Fe(i,e),Fe(t,r),Fe(o,s),Fe(c,a))}finally{v.__wbindgen_free(d,u,1)}},n.wbg.__wbg_log_cb9e190acc5753fb=function(i,e){let t,r;try{t=i,r=e,console.log(Fe(i,e))}finally{v.__wbindgen_free(t,r,1)}},n.wbg.__wbg_mark_7438147ce31e9d4b=function(i,e){performance.mark(Fe(i,e))},n.wbg.__wbg_measure_fb7825c11612c823=function(){return Li(function(i,e,t,r){let o,s,c,a;try{o=i,s=e,c=t,a=r,performance.measure(Fe(i,e),Fe(t,r))}finally{v.__wbindgen_free(o,s,1),v.__wbindgen_free(c,a,1)}},arguments)},n.wbg.__wbg_new_405e22f390576ce2=function(){return new Object},n.wbg.__wbg_new_5e0be73521bc8c17=function(){return new Map},n.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},n.wbg.__wbg_new_a12002a7f91c75be=function(i){return new Uint8Array(i)},n.wbg.__wbg_newnoargs_105ed471475aaf50=function(i,e){return new Function(Fe(i,e))},n.wbg.__wbg_newwithu8clampedarrayandsh_7ea6ee082a25bc85=function(){return Li(function(i,e,t,r){return new ImageData(Yf(i,e),t>>>0,r>>>0)},arguments)},n.wbg.__wbg_putImageData_4c5aa10f3b3e4924=function(){return Li(function(i,e,t,r){i.putImageData(e,t,r)},arguments)},n.wbg.__wbg_set_3f1d0b984ed272ed=function(i,e,t){i[e]=t},n.wbg.__wbg_set_65595bdd868b3009=function(i,e,t){i.set(e,t>>>0)},n.wbg.__wbg_set_8fc6bf8a5b1071d1=function(i,e,t){return i.set(e,t)},n.wbg.__wbg_stack_0ed75d68575b0f3c=function(i,e){let t=e.stack,r=Bi(t,v.__wbindgen_malloc,v.__wbindgen_realloc),o=lt;at().setInt32(i+4,o,!0),at().setInt32(i+0,r,!0)},n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07=function(){let i=typeof global>"u"?null:global;return ct(i)?0:Lt(i)},n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0=function(){let i=typeof globalThis>"u"?null:globalThis;return ct(i)?0:Lt(i)},n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819=function(){let i=typeof self>"u"?null:self;return ct(i)?0:Lt(i)},n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40=function(){let i=typeof window>"u"?null:window;return ct(i)?0:Lt(i)},n.wbg.__wbg_width_5dde457d606ba683=function(i){return i.width},n.wbg.__wbindgen_as_number=function(i){return+i},n.wbg.__wbindgen_boolean_get=function(i){let e=i;return typeof e=="boolean"?e?1:0:2},n.wbg.__wbindgen_debug_string=function(i,e){let t=Ls(e),r=Bi(t,v.__wbindgen_malloc,v.__wbindgen_realloc),o=lt;at().setInt32(i+4,o,!0),at().setInt32(i+0,r,!0)},n.wbg.__wbindgen_error_new=function(i,e){return new Error(Fe(i,e))},n.wbg.__wbindgen_in=function(i,e){return i in e},n.wbg.__wbindgen_init_externref_table=function(){let i=v.__wbindgen_export_4,e=i.grow(4);i.set(0,void 0),i.set(e+0,void 0),i.set(e+1,null),i.set(e+2,!0),i.set(e+3,!1)},n.wbg.__wbindgen_is_object=function(i){let e=i;return typeof e=="object"&&e!==null},n.wbg.__wbindgen_is_string=function(i){return typeof i=="string"},n.wbg.__wbindgen_is_undefined=function(i){return i===void 0},n.wbg.__wbindgen_jsval_loose_eq=function(i,e){return i==e},n.wbg.__wbindgen_memory=function(){return v.memory},n.wbg.__wbindgen_number_get=function(i,e){let t=e,r=typeof t=="number"?t:void 0;at().setFloat64(i+8,ct(r)?0:r,!0),at().setInt32(i+0,!ct(r),!0)},n.wbg.__wbindgen_number_new=function(i){return i},n.wbg.__wbindgen_string_get=function(i,e){let t=e,r=typeof t=="string"?t:void 0;var o=ct(r)?0:Bi(r,v.__wbindgen_malloc,v.__wbindgen_realloc),s=lt;at().setInt32(i+4,s,!0),at().setInt32(i+0,o,!0)},n.wbg.__wbindgen_string_new=function(i,e){return Fe(i,e)},n.wbg.__wbindgen_throw=function(i,e){throw new Error(Fe(i,e))},n}function em(n,i){return v=n.exports,Ul.__wbindgen_wasm_module=i,tn=null,Vi=null,Ui=null,v.__wbindgen_start(),v}function Ul(n){return k(this,null,function*(){if(v!==void 0)return v;typeof n<"u"&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof n>"u"&&(n=new URL("dicom_viewer_rs_bg.wasm",import.meta.url));let i=Jf();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));let{instance:e,module:t}=yield Qf(yield n,i);return em(e,t)})}var zs=Ul;var Bn=class n{workers=[];modulePromise=null;mainWasmReady;initWasm(){return k(this,null,function*(){this.mainWasmReady||(this.mainWasmReady=k(this,null,function*(){let i=yield this.precompiledModule();yield zs(i?{module_or_path:i}:void 0)})),yield this.mainWasmReady})}precompiledModule(){if(!this.modulePromise){let i=new URL("dicom_viewer_rs_bg.wasm",document.baseURI);this.modulePromise=k(this,null,function*(){try{return yield WebAssembly.compileStreaming(fetch(i))}catch(e){return yield WebAssembly.compile(yield(yield fetch(i)).arrayBuffer())}}),this.modulePromise.catch(()=>{this.modulePromise=null})}return this.modulePromise.catch(()=>{})}process(i){return k(this,null,function*(){let e={ok:[],failed:[],readMs:0,parseMs:0,decodeMs:0};if(i.length===0)return e;let t=Math.max(1,Math.min(i.length,navigator.hardwareConcurrency||4)),r=this.getWorkers(t),o=yield this.precompiledModule();return new Promise(s=>{let c=0,a=0,d=new Map,u=h=>{let m=c;c+=1,!(m>=i.length)&&(d.set(h,m),h.postMessage({id:m,file:i[m],wasmModule:o}))};for(let h of r)h.onmessage=m=>{let E=m.data;if(E.type==="result"?(e.ok.push({id:E.id,meta:E.meta,luma:E.luma}),e.readMs+=E.readMs,e.parseMs+=E.parseMs,e.decodeMs+=E.decodeMs):e.failed.push({id:E.id,message:E.message}),a+=1,a===i.length){s(e);return}u(h)},h.onerror=m=>{if(e.failed.push({id:d.get(h)??-1,message:m.message}),a+=1,a===i.length){s(e);return}u(h)},u(h)})})}processSequential(i){return k(this,null,function*(){let e={ok:[],failed:[],readMs:0,parseMs:0,decodeMs:0};for(let t of i)try{let r=performance.now(),o=new Uint8Array(yield t.arrayBuffer());e.readMs+=performance.now()-r;let s=performance.now(),c=js(o);e.parseMs+=performance.now()-s;let a=performance.now(),d=c.decode(),u=d.meta(),h=d.luma();d.free(),c.free(),e.decodeMs+=performance.now()-a,e.ok.push({id:e.ok.length,meta:u,luma:h.slice().buffer})}catch(r){e.failed.push({id:e.ok.length+e.failed.length,message:r instanceof Error?r.message:String(r)})}return e})}getWorkers(i){for(;this.workers.length<i;)this.workers.push(new Worker(new URL("worker-QPPOYZGJ.js",import.meta.url),{type:"module"}));return this.workers.slice(0,i)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})};function zi(n){return n.buttons===0||n.detail===0}function Hi(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Hs;function jl(){if(Hs==null){let n=typeof document<"u"?document.head:null;Hs=!!(n&&(n.createShadowRoot||n.attachShadow))}return Hs}function $s(n){if(jl()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Be(n){if(n.composedPath)try{return n.composedPath()[0]}catch(i){}return n.target}var Ws;try{Ws=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){Ws=!1}var Q=(()=>{class n{_platformId=l(gn);isBrowser=this._platformId?hc(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ws)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var $i;function zl(){if($i==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>$i=!0}))}finally{$i=$i||!1}return $i}function Un(n){return zl()?n:!!n.capture}function Wi(n,i=0){return Hl(n)?Number(n):arguments.length===2?i:0}function Hl(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function dt(n){return n instanceof B?n.nativeElement:n}var $l=new p("cdk-input-modality-detector-options"),Wl={ignoreKeys:[18,17,224,91,16]},Gl=650,Gs={passive:!0,capture:!0},ql=(()=>{class n{_platform=l(Q);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new he(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Be(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Gl||(this._modality.next(zi(e)?"keyboard":"mouse"),this._mostRecentTarget=Be(e))};_onTouchstart=e=>{if(Hi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Be(e)};constructor(){let e=l(N),t=l(D),r=l($l,{optional:!0});if(this._options=f(f({},Wl),r),this.modalityDetected=this._modality.pipe(or(1)),this.modalityChanged=this.modalityDetected.pipe(ii()),this._platform.isBrowser){let o=l(Ie).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Gs),o.listen(t,"mousedown",this._onMousedown,Gs),o.listen(t,"touchstart",this._onTouchstart,Gs)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Gi=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Gi||{}),Xl=new p("cdk-focus-monitor-default-options"),Qr=Un({passive:!0,capture:!0}),qi=(()=>{class n{_ngZone=l(N);_platform=l(Q);_inputModalityDetector=l(ql);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(D);_stopInputModalityDetector=new w;constructor(){let e=l(Xl,{optional:!0});this._detectionMode=e?.detectionMode||Gi.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Be(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=dt(e);if(!this._platform.isBrowser||r.nodeType!==1)return g();let o=$s(r)||this._document,s=this._elementInfo.get(r);if(s)return t&&(s.checkChildren=!0),s.subject;let c={checkChildren:t,subject:new w,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=dt(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=dt(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([c,a])=>this._originChanged(c,t,a)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Gi.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Gi.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Gl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Be(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Qr),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Qr)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(K(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Qr),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Qr),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Jr=new WeakMap,Ue=(()=>{class n{_appRef;_injector=l(ee);_environmentInjector=l(ye);load(e){let t=this._appRef=this._appRef||this._injector.get(pt),r=Jr.get(t);r||(r={loaders:new Set,refs:[]},Jr.set(t,r),t.onDestroy(()=>{Jr.get(t)?.refs.forEach(o=>o.destroy()),Jr.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(pr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Kl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})(),eo;function tm(){if(eo===void 0&&(eo=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{eo=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return eo}function nn(n){return tm()?.createHTML(n)||n}function Yl(n,i,e){let t=e.sanitize(Me.HTML,i);n.innerHTML=nn(t||"")}function Xi(n){return Array.isArray(n)?n:[n]}var Zl=new Set,rn,to=(()=>{class n{_platform=l(Q);_nonce=l(vn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):im}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&nm(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function nm(n,i){if(!Zl.has(n))try{rn||(rn=document.createElement("style"),i&&rn.setAttribute("nonce",i),rn.setAttribute("type","text/css"),document.head.appendChild(rn)),rn.sheet&&(rn.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),Zl.add(n))}catch(e){console.error(e)}}function im(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var qs=(()=>{class n{_mediaMatcher=l(to);_zone=l(N);_queries=new Map;_destroySubject=new w;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Ql(Xi(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Ql(Xi(e)).map(s=>this._registerQuery(s).observable),o=ht(r);return o=Vt(o.pipe(oe(1)),o.pipe(or(1),hn(0))),o.pipe(A(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:a,query:d})=>{c.matches=c.matches||a,c.breakpoints[d]=a}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new kt(s=>{let c=a=>this._zone.run(()=>s.next(a));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(Je(t),A(({matches:s})=>({query:e,matches:s})),K(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Ql(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var io=(()=>{class n{_platform=l(Q);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return om(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=rm(fm(e));if(t&&(Jl(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Jl(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!um(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return hm(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function rm(n){try{return n.frameElement}catch(i){return null}}function om(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function sm(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function am(n){return lm(n)&&n.type=="hidden"}function cm(n){return dm(n)&&n.hasAttribute("href")}function lm(n){return n.nodeName.toLowerCase()=="input"}function dm(n){return n.nodeName.toLowerCase()=="a"}function ed(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Jl(n){if(!ed(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function um(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function hm(n){return am(n)?!1:sm(n)||cm(n)||n.hasAttribute("contenteditable")||ed(n)}function fm(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var no=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,s){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){Ne(i,{injector:this._injector})}},Xs=(()=>{class n{_checker=l(io);_ngZone=l(N);_document=l(D);_injector=l(ee);constructor(){l(Ue).load(Kl)}create(e,t=!1){return new no(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var td=new p("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),nd=new p("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),mm=0,Ks=(()=>{class n{_ngZone=l(N);_defaultOptions=l(nd,{optional:!0});_liveElement;_document=l(D);_sanitizer=l(_i);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(td,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,s;return t.length===1&&typeof t[0]=="number"?s=t[0]:[o,s]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Yl(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${mm++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var pm=200,ro=class{_letterKeyStream=new w;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new w;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:pm;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(se(e=>this._pressedLetters.push(e)),hn(i),pe(()=>this._pressedLetters.length>0),A(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function id(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}function on(n){return rt(n)?n:g(n)}var Ys=class{_activeItemIndex=-1;_activeItem=null;_shouldActivationFollowFocus=!1;_horizontalOrientation="ltr";_skipPredicateFn=i=>!1;_trackByFn=i=>i;_items=[];_typeahead;_typeaheadSubscription=ut.EMPTY;_hasInitialFocused=!1;_initializeFocus(){if(this._hasInitialFocused||this._items.length===0)return;let i=0;for(let t=0;t<this._items.length;t++)if(!this._skipPredicateFn(this._items[t])&&!this._isItemDisabled(this._items[t])){i=t;break}let e=this._items[i];e.makeFocusable?(this._activeItem?.unfocus(),this._activeItemIndex=i,this._activeItem=e,this._typeahead?.setCurrentSelectedItemIndex(i),e.makeFocusable()):this.focusItem(i),this._hasInitialFocused=!0}constructor(i,e){i instanceof cr?(this._items=i.toArray(),i.changes.subscribe(t=>this._itemsChanged(t.toArray()))):rt(i)?i.subscribe(t=>this._itemsChanged(t)):(this._items=i,this._initializeFocus()),typeof e.shouldActivationFollowFocus=="boolean"&&(this._shouldActivationFollowFocus=e.shouldActivationFollowFocus),e.horizontalOrientation&&(this._horizontalOrientation=e.horizontalOrientation),e.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),e.trackBy&&(this._trackByFn=e.trackBy),typeof e.typeAheadDebounceInterval<"u"&&this._setTypeAhead(e.typeAheadDebounceInterval)}change=new w;destroy(){this._typeaheadSubscription.unsubscribe(),this._typeahead?.destroy(),this.change.complete()}onKeydown(i){switch(i.key){case"Tab":return;case"ArrowDown":this._focusNextItem();break;case"ArrowUp":this._focusPreviousItem();break;case"ArrowRight":this._horizontalOrientation==="rtl"?this._collapseCurrentItem():this._expandCurrentItem();break;case"ArrowLeft":this._horizontalOrientation==="rtl"?this._expandCurrentItem():this._collapseCurrentItem();break;case"Home":this._focusFirstItem();break;case"End":this._focusLastItem();break;case"Enter":case" ":this._activateCurrentItem();break;default:if(i.key==="*"){this._expandAllItemsAtCurrentItemLevel();break}this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}getActiveItemIndex(){return this._activeItemIndex}getActiveItem(){return this._activeItem}_itemsChanged(i){this._hasInitialFocused&&this._activeItem&&!i.includes(this._activeItem)&&(this._activeItem=null,this._hasInitialFocused=!1),this._items=i,this._typeahead?.setItems(this._items),this._updateActiveItemIndex(this._items),this._initializeFocus()}_focusFirstItem(){this.focusItem(this._findNextAvailableItemIndex(-1))}_focusLastItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._items.length))}_focusNextItem(){this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex))}_focusPreviousItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex))}focusItem(i,e={}){e.emitChangeEvent??=!0;let t=typeof i=="number"?i:this._items.findIndex(s=>this._trackByFn(s)===this._trackByFn(i));if(t<0||t>=this._items.length)return;let r=this._items[t];if(this._activeItem!==null&&this._trackByFn(r)===this._trackByFn(this._activeItem))return;let o=this._activeItem;this._activeItem=r??null,this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t),this._activeItem?.focus(),o?.unfocus(),e.emitChangeEvent&&this.change.next(this._activeItem),this._shouldActivationFollowFocus&&this._activateCurrentItem()}_updateActiveItemIndex(i){let e=this._activeItem;if(!e)return;let t=i.findIndex(r=>this._trackByFn(r)===this._trackByFn(e));t>-1&&t!==this._activeItemIndex&&(this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t))}_setTypeAhead(i){this._typeahead=new ro(this._items,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.focusItem(e)})}_findNextAvailableItemIndex(i){for(let e=i+1;e<this._items.length;e++)if(!this._skipPredicateFn(this._items[e]))return e;return i}_findPreviousAvailableItemIndex(i){for(let e=i-1;e>=0;e--)if(!this._skipPredicateFn(this._items[e]))return e;return i}_collapseCurrentItem(){if(this._activeItem)if(this._isCurrentItemExpanded())this._activeItem.collapse();else{let i=this._activeItem.getParent();if(!i||this._skipPredicateFn(i))return;this.focusItem(i)}}_expandCurrentItem(){this._activeItem&&(this._isCurrentItemExpanded()?on(this._activeItem.getChildren()).pipe(oe(1)).subscribe(i=>{let e=i.find(t=>!this._skipPredicateFn(t));e&&this.focusItem(e)}):this._activeItem.expand())}_isCurrentItemExpanded(){return this._activeItem?typeof this._activeItem.isExpanded=="boolean"?this._activeItem.isExpanded:this._activeItem.isExpanded():!1}_isItemDisabled(i){return typeof i.isDisabled=="boolean"?i.isDisabled:i.isDisabled?.()}_expandAllItemsAtCurrentItemLevel(){if(!this._activeItem)return;let i=this._activeItem.getParent(),e;i?e=on(i.getChildren()):e=g(this._items.filter(t=>t.getParent()===null)),e.pipe(oe(1)).subscribe(t=>{for(let r of t)r.expand()})}_activateCurrentItem(){this._activeItem?.activate()}},rd=new p("tree-key-manager",{providedIn:"root",factory:()=>(n,i)=>new Ys(n,i)});var od=new Map,Ct=class n{_appId=l(oi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=od.get(i);return t===void 0?t=0:t++,od.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})};var sd={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function Zs(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function sn(n){return n==null?"":typeof n=="string"?n:`${n}px`}var gm=new p("cdk-dir-doc",{providedIn:"root",factory:()=>l(D)}),_m=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ad(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?_m.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Ze=(()=>{class n{get value(){return this.valueSignal()}valueSignal=ae("ltr");change=new P;constructor(){let e=l(gm,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ad(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var it=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(it||{}),oo,an;function cd(){if(an==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return an=!1,an;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)an=!0;else{let n=Element.prototype.scrollTo;n?an=!/\{\s*\[native code\]\s*\}/.test(n.toString()):an=!1}}return an}function jn(){if(typeof document!="object"||!document)return it.NORMAL;if(oo==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),oo=it.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,oo=n.scrollLeft===0?it.NEGATED:it.INVERTED),n.remove()}return oo}function ld(n){return n&&typeof n.connect=="function"&&!(n instanceof Ma)}var De=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({})}return n})();var vm=20,bm=(()=>{class n{_ngZone=l(N);_platform=l(Q);_renderer=l(Ie).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new w;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=vm){return this._platform.isBrowser?new kt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Io(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):g()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(pe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let r=dt(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),zn=(()=>{class n{elementRef=l(B);scrollDispatcher=l(bm);ngZone=l(N);dir=l(Ze,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new w;_renderer=l(Ge);_cleanupScroll;_elementScrolled=new w;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&jn()!=it.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),jn()==it.INVERTED?e.left=e.right:jn()==it.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;cd()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:t:e=="end"&&(e=s?t:r),s&&jn()==it.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&jn()==it.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),ym=20,dd=(()=>{class n{_platform=l(Q);_listeners;_viewportSize=null;_change=new w;_document=l(D);constructor(){let e=l(N),t=l(Ie).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,c=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:s,left:c}}change(e=ym){return e>0?this._change.pipe(Io(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Qs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({})}return n})();var Ki=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Hn=class extends Ki{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,o,s){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}},$n=class extends Ki{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Js=class extends Ki{element;constructor(i){super(),this.element=i instanceof B?i.nativeElement:i}},Wn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Hn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof $n)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Js)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},so=class extends Wn{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(hr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||ee.NULL,o=r.get(ye,t.injector);e=pr(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var ea=(()=>{class n extends Wn{_moduleRef=l(hr,{optional:!0});_document=l(D);_viewContainerRef=l(je);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new P;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(n)))(r||n)}})();static \u0275dir=L({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ce]})}return n})();var ao=class{enable(){}disable(){}attach(){}};var Gn=class{positionStrategy;scrollStrategy=new ao;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var fd=(()=>{class n{_attachedOverlays=[];_document=l(D);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),md=(()=>{class n extends fd{_ngZone=l(N);_renderer=l(Ie).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),pd=(()=>{class n extends fd{_platform=l(Q);_ngZone=l(N);_renderer=l(Ie).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Be(e)};_clickListener=e=>{let t=Be(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let c=o[s],a=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,e,a))){if(ud(c.overlayElement,t)||ud(c.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>a.next(e)):a.next(e)}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function ud(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var gd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})(),Sm=(()=>{class n{_platform=l(Q);_containerElement;_document=l(D);_styleLoader=l(Ue);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Zs()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Zs()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(gd)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),na=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function _d(n){return n&&n.nodeType===1}var ta=new Set;var co=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new w;_attachments=new w;_detachments=new w;_positionStrategy;_scrollStrategy;_locationChanges=ut.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new w;_outsidePointerEvents=new w;_afterNextRenderRef;constructor(i,e,t,r,o,s,c,a,d,u=!1,h,m){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=c,this._location=a,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=h,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),ta.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ne(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),ta.delete(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,ta.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=f(f({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ue(f({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=sn(this._config.width),i.height=sn(this._config.height),i.minWidth=sn(this._config.minWidth),i.minHeight=sn(this._config.minHeight),i.maxWidth=sn(this._config.maxWidth),i.maxHeight=sn(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;_d(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new na(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=Xi(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ne(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var hd="cdk-global-overlay-wrapper";function ia(n){return new lo}var lo=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(hd),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:c}=t,a=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),d=(o==="100%"||o==="100vh")&&(!c||c==="100%"||c==="100vh"),u=this._xPosition,h=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",E="",ne="",Y="";a?Y="flex-start":u==="center"?(Y="center",m?ne=h:E=h):m?u==="left"||u==="end"?(Y="flex-end",E=h):(u==="right"||u==="start")&&(Y="flex-start",ne=h):u==="left"||u==="start"?(Y="flex-start",E=h):(u==="right"||u==="end")&&(Y="flex-end",ne=h),i.position=this._cssPosition,i.marginLeft=a?"0":E,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=a?"0":ne,e.justifyContent=Y,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(hd),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}};var vd=new p("OVERLAY_DEFAULT_CONFIG");function ra(n,i){n.get(Ue).load(gd);let e=n.get(Sm),t=n.get(D),r=n.get(Ct),o=n.get(pt),s=n.get(Ze),c=n.get(Ge,null,{optional:!0})||n.get(Ie).createRenderer(null,null),a=new Gn(i),d=n.get(vd,null,{optional:!0})?.usePopover??!0;a.direction=a.direction||s.value,!t.body||!("showPopover"in t.body)?a.usePopover=!1:a.usePopover=i?.usePopover??d;let u=t.createElement("div"),h=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),h.appendChild(u),a.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let m=a.usePopover?a.positionStrategy?.getPopoverInsertionPoint?.():null;return _d(m)?m.after(h):m?.type==="parent"?m.element.appendChild(h):e.getContainerElement().appendChild(h),new co(new so(u,o,n),h,u,a,n.get(N),n.get(md),t,n.get(Tt),n.get(pd),i?.disableAnimations??n.get(_n,null,{optional:!0})==="NoopAnimations",n.get(ye),c)}var Dm=new p("MATERIAL_ANIMATIONS"),bd=null;function oa(){return l(Dm,{optional:!0})?.animationsDisabled||l(_n,{optional:!0})==="NoopAnimations"?"di-disabled":(bd??=l(to).matchMedia("(prefers-reduced-motion)").matches,bd?"reduced-motion":"enabled")}function Oe(){return oa()!=="enabled"}function cn(n){return n!=null&&`${n}`!="false"}var Pe=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Pe||{}),sa=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Pe.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},yd=Un({passive:!0,capture:!0}),aa=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let s=o.get(t);s?s.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,yd)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,yd)))}_delegateEventHandler=i=>{let e=Be(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Yi={enterDuration:225,exitDuration:150},Em=800,wd=Un({passive:!0,capture:!0}),Sd=["mousedown","touchstart"],Cd=["mouseup","mouseleave","touchend","touchcancel"],xm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})(),Zi=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new aa;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=dt(t)),o&&o.get(Ue).load(xm)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=f(f({},Yi),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let s=t.radius||km(i,e,r),c=i-r.left,a=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-s}px`,u.style.top=`${a-s}px`,u.style.height=`${s*2}px`,u.style.width=`${s*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),m=h.transitionProperty,E=h.transitionDuration,ne=m==="none"||E==="0s"||E==="0s, 0s"||r.width===0&&r.height===0,Y=new sa(this,u,t,ne);u.style.transform="scale3d(1, 1, 1)",Y.state=Pe.FADING_IN,t.persistent||(this._mostRecentTransientRipple=Y);let re=null;return!ne&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Qe=()=>{re&&(re.fallbackTimer=null),clearTimeout(ke),this._finishRippleTransition(Y)},xe=()=>this._destroyRipple(Y),ke=setTimeout(xe,d+100);u.addEventListener("transitionend",Qe),u.addEventListener("transitioncancel",xe),re={onTransitionEnd:Qe,onTransitionCancel:xe,fallbackTimer:ke}}),this._activeRipples.set(Y,re),(ne||!d)&&this._finishRippleTransition(Y),Y}fadeOutRipple(i){if(i.state===Pe.FADING_OUT||i.state===Pe.HIDDEN)return;let e=i.element,t=f(f({},Yi),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Pe.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=dt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Sd.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Cd.forEach(e=>{this._triggerElement.addEventListener(e,this,wd)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Pe.FADING_IN?this._startFadeOutTransition(i):i.state===Pe.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Pe.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Pe.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=zi(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Em;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Hi(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Pe.VISIBLE||i.config.terminateOnPointerUp&&i.state===Pe.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Sd.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Cd.forEach(e=>i.removeEventListener(e,this,wd)),this._pointerUpEventsRegistered=!1))}};function km(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Qi=new p("mat-ripple-global-options"),Ji=(()=>{class n{_elementRef=l(B);_animationsDisabled=Oe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(N),t=l(Q),r=l(Qi,{optional:!0}),o=l(ee);this._globalOptions=r||{},this._rippleRenderer=new Zi(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:f(f(f({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,f(f({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,f(f({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&$("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Am={capture:!0},Mm=["focus","mousedown","mouseenter","touchstart"],ca="mat-ripple-loader-uninitialized",la="mat-ripple-loader-class-name",Dd="mat-ripple-loader-centered",uo="mat-ripple-loader-disabled",Ed=(()=>{class n{_document=l(D);_animationsDisabled=Oe();_globalRippleOptions=l(Qi,{optional:!0});_platform=l(Q);_ngZone=l(N);_injector=l(ee);_eventCleanups;_hosts=new Map;constructor(){let e=l(Ie).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Mm.map(t=>e.listen(this._document,t,this._onInteraction,Am)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(ca,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(la))&&e.setAttribute(la,t.className||""),t.centered&&e.setAttribute(Dd,""),t.disabled&&e.setAttribute(uo,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(uo,""):e.removeAttribute(uo)}_onInteraction=e=>{let t=Be(e);if(t instanceof HTMLElement){let r=t.closest(`[${ca}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(la)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Yi.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Yi.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(uo),rippleConfig:{centered:e.hasAttribute(Dd),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},a=new Zi(c,this._ngZone,t,this._platform,this._injector),d=!c.rippleDisabled;d&&a.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:a,hasSetUpEvents:d}),e.removeAttribute(ca)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var qn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var Rm=["*",[["","progressIndicator",""]]],Nm=["*","[progressIndicator]"];function Im(n,i){n&1&&(Sn(0,"div",1),Z(1,1),Cn())}var Tm=new p("MAT_BUTTON_CONFIG");function xd(n){return n==null?void 0:ie(n)}var da=(()=>{class n{_elementRef=l(B);_ngZone=l(N);_animationsDisabled=Oe();_config=l(Tm,{optional:!0});_focusMonitor=l(qi);_cleanupClick;_renderer=l(Ge);_rippleLoader=l(Ed);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=ai(!1,{transform:j});constructor(){l(Ue).load(qn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(J("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),tt(r.color?"mat-"+r.color:""),$("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",j],disabled:[2,"disabled","disabled",j],ariaDisabled:[2,"aria-disabled","ariaDisabled",j],disabledInteractive:[2,"disabledInteractive","disabledInteractive",j],tabIndex:[2,"tabIndex","tabIndex",xd],_tabindex:[2,"tabindex","_tabindex",xd],showProgress:[1,"showProgress"]}})}return n})(),er=(()=>{class n extends da{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ce],ngContentSelectors:Nm,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(fe(Rm),zt(0,"span",0),Z(1),we(2,Im,2,0,"div",1),zt(3,"span",2)(4,"span",3)),t&2&&(y(2),Se(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})}return n})();var ho=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[De]})}return n})();var Fm=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Om=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function Pm(n,i){n&1&&(Sn(0,"div",2),Z(1,3),Cn())}var kd=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Xn=(()=>{class n extends da{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Lm(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?kd.get(this._appearance):null,o=kd.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ce],ngContentSelectors:Om,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(fe(Fm),zt(0,"span",0),Z(1),Sn(2,"span",1),Z(3,1),Cn(),Z(4,2),we(5,Pm,2,0,"div",2),zt(6,"span",3)(7,"span",4)),t&2&&($("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),y(5),Se(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})}return n})();function Lm(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var ln=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[ho,De]})}return n})();function Vm(n,i){if(n&1){let e=Te();_(0,"div",1)(1,"button",2),O("click",function(){_e(e);let r=F();return ve(r.action())}),X(2),b()()}if(n&2){let e=F();y(2),Xe(" ",e.data.action," ")}}var Bm=["label"];function Um(n,i){}var jm=Math.pow(2,31)-1,tr=class{_overlayRef;instance;containerInstance;_afterDismissed=new w;_afterOpened=new w;_onAction=new w;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,jm))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ad=new p("MatSnackBarData"),Kn=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},zm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Hm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),$m=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Wm=(()=>{class n{snackBarRef=l(tr);data=l(Ad);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(_(0,"div",0),X(1),b(),we(2,Vm,3,1,"div",1)),t&2&&(y(),Xe(" ",r.data.message,`
`),y(),Se(r.hasAction?2:-1))},dependencies:[Xn,zm,Hm,$m],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})(),ha="_mat-snack-bar-enter",fa="_mat-snack-bar-exit",Gm=(()=>{class n extends Wn{_ngZone=l(N);_elementRef=l(B);_changeDetectorRef=l(me);_platform=l(Q);_animationsDisabled=Oe();snackBarConfig=l(Kn);_document=l(D);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(ee);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new w;_onExit=new w;_onEnter=new w;_animationState="void";_live;_label;_role;_liveElementId=l(Ct).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===fa?this._completeExit():e===ha&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ne(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ha)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ha)},200)))}exit(){return this._destroyed?g(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ne(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(fa)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(fa),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(s=>e.classList.add(s)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&de(ea,7)(Bm,7),t&2){let o;z(o=H())&&(r._portalOutlet=o.first),z(o=H())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&O("animationend",function(s){return r.onAnimationEnd(s.animationName)})("animationcancel",function(s){return r.onAnimationEnd(s.animationName)}),t&2&&$("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ce],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(_(0,"div",1)(1,"div",2,0)(3,"div",3),Ve(4,Um,0,0,"ng-template",4),b(),te(5,"div"),b()()),t&2&&(y(5),J("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[ea],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2,changeDetection:1})}return n})(),qm=new p("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Kn}),Md=(()=>{class n{_live=l(Ks);_injector=l(ee);_breakpointObserver=l(qs);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(qm);_animationsDisabled=Oe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Wm;snackBarContainerComponent=Gm;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=f(f({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=ee.create({parent:r||this._injector,providers:[{provide:Kn,useValue:t}]}),s=new Hn(this.snackBarContainerComponent,t.viewContainerRef,o),c=e.attach(s);return c.instance.snackBarConfig=t,c.instance}_attach(e,t){let r=f(f(f({},new Kn),this._defaultConfig),t),o=this._createOverlay(r),s=this._attachSnackBarContainer(o,r),c=new tr(s,o);if(e instanceof mt){let a=new $n(e,null,{$implicit:r.data,snackBarRef:c});c.instance=s.attachTemplatePortal(a)}else{let a=this._createInjector(r,c),d=new Hn(e,void 0,a),u=s.attachComponentPortal(d);c.instance=u.instance}return this._breakpointObserver.observe(sd.HandsetPortrait).pipe(K(o.detachments())).subscribe(a=>{o.overlayElement.classList.toggle(this.handsetCssClass,a.matches)}),r.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(c,r),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Gn;t.direction=e.direction;let r=ia(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,c=!s&&e.horizontalPosition!=="center";return s?r.left("0"):c?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,ra(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ee.create({parent:r||this._injector,providers:[{provide:tr,useValue:t},{provide:Ad,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var mo=["*"],Km=["content"],Rd=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],Nd=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function Ym(n,i){if(n&1){let e=Te();_(0,"div",1),O("click",function(){_e(e);let r=F();return ve(r._onBackdropClicked())}),b()}if(n&2){let e=F();$("mat-drawer-shown",e._isShowingBackdrop())}}function Zm(n,i){n&1&&(_(0,"mat-drawer-content"),Z(1,2),b())}function Qm(n,i){if(n&1){let e=Te();_(0,"div",1),O("click",function(){_e(e);let r=F();return ve(r._onBackdropClicked())}),b()}if(n&2){let e=F();$("mat-drawer-shown",e._isShowingBackdrop())}}function Jm(n,i){n&1&&(_(0,"mat-sidenav-content"),Z(1,2),b())}var ep=`.mat-drawer-container {
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
`;var tp=new p("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ga=new p("MAT_DRAWER_CONTAINER"),nr=(()=>{class n extends zn{_platform=l(Q);_changeDetectorRef=l(me);_element=l(B);_ngZone=l(N);_isInert=!1;_container=l(pa);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Ta(50),oe(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute("inert","true"):t.removeAttribute("inert")}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(n)))(r||n)}})();static \u0275cmp=S({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(et("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),$("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[le([{provide:zn,useExisting:n}]),ce],ngContentSelectors:mo,decls:1,vars:0,template:function(t,r){t&1&&(fe(),Z(0))},encapsulation:2})}return n})(),ma=(()=>{class n{_elementRef=l(B);_focusTrapFactory=l(Xs);_focusMonitor=l(qi);_platform=l(Q);_ngZone=l(N);_renderer=l(Ge);_interactivityChecker=l(io);_doc=l(D);_isAnimating=!1;_container=l(ga,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=cn(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=cn(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(cn(e))}_opened=ae(!1);_openedVia=null;_animationStarted=new w;_animationEnd=new w;openedChange=new P(!0);_openedStream=this.openedChange.pipe(pe(e=>e),A(()=>{}));openedStart=this._animationStarted.pipe(pe(()=>this.opened),Fo(void 0));_closedStream=this.openedChange.pipe(pe(e=>!e),A(()=>{}));closedStart=this._animationStarted.pipe(pe(()=>!this.opened),Fo(void 0));_destroyed=new w;onPositionChanged=new P;_content;_modeChanged=new w;_injector=l(ee);_changeDetectorRef=l(me);constructor(){this.openedChange.pipe(K(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!id(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&(this._interactivityChecker.isFocusable(r)||(r.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{s(),c(),r.removeAttribute("tabindex")},s=this._renderer.listen(r,"blur",o),c=this._renderer.listen(r,"mousedown",o)})),r.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Ne(()=>{let t=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(t)&&typeof e.focus=="function"&&e.focus(t)},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(oe(1)).subscribe(s=>o(s?"open":"close"))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&de(Km,5),t&2){let o;z(o=H())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(J("align",null)("tabIndex",r.mode!=="side"?"-1":null),et("visibility",!r._container&&!r.opened?"hidden":null),$("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:mo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(fe(),_(0,"div",1,0),Z(2),b())},dependencies:[zn],encapsulation:2})}return n})(),pa=(()=>{class n{_dir=l(Ze,{optional:!0});_element=l(B);_ngZone=l(N);_changeDetectorRef=l(me);_animationDisabled=Oe();_transitionsEnabled=!1;_allDrawers;_drawers=new cr;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=cn(e)}_autosize=l(tp);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:cn(e)}_backdropOverride=null;backdropClick=new P;_start=null;_end=null;_left=null;_right=null;_destroyed=new w;_doCheckSubject=new w;_contentMargins={left:null,right:null};_contentMarginChanges=new w;get scrollable(){return this._userContent||this._content}_injector=l(ee);constructor(){let e=l(Q),t=l(dd);this._dir?.change.pipe(K(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(K(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Je(this._allDrawers),K(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Je(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(hn(10),K(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(K(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(K(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(K(this._drawers.changes)).subscribe(()=>{Ne({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(K(Ia(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,o){if(t&1&&Ht(o,nr,5)(o,ma,5),t&2){let s;z(s=H())&&(r._content=s.first),z(s=H())&&(r._allDrawers=s)}},viewQuery:function(t,r){if(t&1&&de(nr,5),t&2){let o;z(o=H())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&$("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[le([{provide:ga,useExisting:n}])],ngContentSelectors:Nd,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(fe(Rd),we(0,Ym,1,2,"div",0),Z(1),Z(2,1),we(3,Zm,2,0,"mat-drawer-content")),t&2&&(Se(r.hasBackdrop?0:-1),y(3),Se(r._content?-1:3))},dependencies:[nr],styles:[`.mat-drawer-container {
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
`],encapsulation:2})}return n})(),fo=(()=>{class n extends nr{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(n)))(r||n)}})();static \u0275cmp=S({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[le([{provide:zn,useExisting:n},{provide:nr,useExisting:n}]),ce],ngContentSelectors:mo,decls:1,vars:0,template:function(t,r){t&1&&(fe(),Z(0))},encapsulation:2})}return n})(),_a=(()=>{class n extends ma{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=cn(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Wi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Wi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(n)))(r||n)}})();static \u0275cmp=S({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(J("tabIndex",r.mode!=="side"?"-1":null)("align",null),et("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),$("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[le([{provide:ma,useExisting:n}]),ce],ngContentSelectors:mo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(fe(),_(0,"div",1,0),Z(2),b())},dependencies:[zn],encapsulation:2})}return n})(),Id=(()=>{class n extends pa{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(n)))(r||n)}})();static \u0275cmp=S({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,o){if(t&1&&Ht(o,fo,5)(o,_a,5),t&2){let s;z(s=H())&&(r._content=s.first),z(s=H())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&$("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[le([{provide:ga,useExisting:n},{provide:pa,useExisting:n}]),ce],ngContentSelectors:Nd,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(fe(Rd),we(0,Qm,1,2,"div",0),Z(1),Z(2,1),we(3,Jm,2,0,"mat-sidenav-content")),t&2&&(Se(r.hasBackdrop?0:-1),y(3),Se(r._content?-1:3))},dependencies:[fo],styles:[ep],encapsulation:2})}return n})(),Td=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[Qs,De,Qs]})}return n})();var po=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new w;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var ba=new p("CDK_TREE_NODE_OUTLET_NODE"),go=(()=>{class n{viewContainer=l(je);_node=l(ba,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","cdkTreeNodeOutlet",""]]})}return n})(),va=class{$implicit;level;index;count;constructor(i){this.$implicit=i}},_o=(()=>{class n{template=l(mt);when;static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:[0,"cdkTreeNodeDefWhen","when"]}})}return n})();function Fd(){return Error("Could not find a tree control, levelAccessor, or childrenAccessor for the tree.")}var Yn=(()=>{class n{_differs=l(mr);_changeDetectorRef=l(me);_elementRef=l(B);_dir=l(Ze);_onDestroy=new w;_dataDiffer;_defaultNodeDef=null;_dataSubscription;_levels=new Map;_parents=new Map;_ariaSets=new Map;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}_dataSource;treeControl;levelAccessor;childrenAccessor;trackBy;expansionKey;_nodeOutlet;_nodeDefs;viewChange=new he({start:0,end:Number.MAX_VALUE});_expansionModel;_flattenedNodes=new he([]);_nodeType=new he(null);_nodes=new he(new Map);_keyManagerNodes=new he([]);_keyManagerFactory=l(rd);_keyManager;_viewInit=!1;ngAfterContentInit(){this._initializeKeyManager()}ngAfterContentChecked(){this._updateDefaultNodeDefinition(),this._subscribeToDataChanges()}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this._nodes.complete(),this._keyManagerNodes.complete(),this._nodeType.complete(),this._flattenedNodes.complete(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,this._keyManager?.destroy()}ngOnInit(){this._checkTreeControlUsage(),this._initializeDataDiffer()}ngAfterViewInit(){this._viewInit=!0}_updateDefaultNodeDefinition(){let e=this._nodeDefs.filter(t=>!t.when);e.length>1,this._defaultNodeDef=e[0]}_setNodeTypeIfUnset(e){this._nodeType.value===null&&this._nodeType.next(e)}_switchDataSource(e){this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._subscribeToDataChanges()}_getExpansionModel(){return this.treeControl?this.treeControl.expansionModel:(this._expansionModel??=new po(!0),this._expansionModel)}_subscribeToDataChanges(){if(this._dataSubscription)return;let e;ld(this._dataSource)?e=this._dataSource.connect(this):rt(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=g(this._dataSource)),e&&(this._dataSubscription=this._getRenderData(e).pipe(K(this._onDestroy)).subscribe(t=>{this._renderDataChanges(t)}))}_getRenderData(e){let t=this._getExpansionModel();return ht([e,this._nodeType,t.changed.pipe(Je(null),se(r=>{this._emitExpansionChanges(r)}))]).pipe(ge(([r,o])=>o===null?g({renderNodes:r,flattenedNodes:null,nodeType:o}):this._computeRenderingData(r,o).pipe(A(s=>ue(f({},s),{nodeType:o})))))}_renderDataChanges(e){if(e.nodeType===null){this.renderNodeChanges(e.renderNodes);return}this._updateCachedData(e.flattenedNodes),this.renderNodeChanges(e.renderNodes),this._updateKeyManagerItems(e.flattenedNodes)}_emitExpansionChanges(e){if(!e)return;let t=this._nodes.value;for(let r of e.added)t.get(r)?._emitExpansionState(!0);for(let r of e.removed)t.get(r)?._emitExpansionState(!1)}_initializeKeyManager(){let e=ht([this._keyManagerNodes,this._nodes]).pipe(A(([r,o])=>r.reduce((s,c)=>{let a=o.get(this._getExpansionKey(c));return a&&s.push(a),s},[]))),t={trackBy:r=>this._getExpansionKey(r.data),skipPredicate:r=>!!r.isDisabled,typeAheadDebounceInterval:!0,horizontalOrientation:this._dir.value};this._keyManager=this._keyManagerFactory(e,t)}_initializeDataDiffer(){let e=this.trackBy??((t,r)=>this._getExpansionKey(r));this._dataDiffer=this._differs.find([]).create(e)}_checkTreeControlUsage(){}renderNodeChanges(e,t=this._dataDiffer,r=this._nodeOutlet.viewContainer,o){let s=t.diff(e);!s&&!this._viewInit||(s?.forEachOperation((c,a,d)=>{if(c.previousIndex==null)this.insertNode(e[d],d,r,o);else if(d==null)r.remove(a);else{let u=r.get(a);r.move(u,d)}}),s?.forEachIdentityChange(c=>{let a=c.item;if(c.currentIndex!=null){let d=r.get(c.currentIndex);d.context.$implicit=a}}),o?this._changeDetectorRef.markForCheck():this._changeDetectorRef.detectChanges())}_getNodeDef(e,t){if(this._nodeDefs.length===1)return this._nodeDefs.first;let r=this._nodeDefs.find(o=>o.when&&o.when(t,e))||this._defaultNodeDef;return r}insertNode(e,t,r,o){let s=this._getLevelAccessor(),c=this._getNodeDef(e,t),a=this._getExpansionKey(e),d=new va(e);d.index=t,o??=this._parents.get(a)??void 0,s?d.level=s(e):o!==void 0&&this._levels.has(this._getExpansionKey(o))?d.level=this._levels.get(this._getExpansionKey(o))+1:d.level=0,this._levels.set(a,d.level),(r||this._nodeOutlet.viewContainer).createEmbeddedView(c.template,d,t),dn.mostRecentTreeNode&&(dn.mostRecentTreeNode.data=e)}isExpanded(e){return!!(this.treeControl?.isExpanded(e)||this._expansionModel?.isSelected(this._getExpansionKey(e)))}toggle(e){this.treeControl?this.treeControl.toggle(e):this._expansionModel&&this._expansionModel.toggle(this._getExpansionKey(e))}expand(e){this.treeControl?this.treeControl.expand(e):this._expansionModel&&this._expansionModel.select(this._getExpansionKey(e))}collapse(e){this.treeControl?this.treeControl.collapse(e):this._expansionModel&&this._expansionModel.deselect(this._getExpansionKey(e))}toggleDescendants(e){this.treeControl?this.treeControl.toggleDescendants(e):this._expansionModel&&(this.isExpanded(e)?this.collapseDescendants(e):this.expandDescendants(e))}expandDescendants(e){if(this.treeControl)this.treeControl.expandDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.select(this._getExpansionKey(e)),this._getDescendants(e).pipe(oe(1),K(this._onDestroy)).subscribe(r=>{t.select(...r.map(o=>this._getExpansionKey(o)))})}}collapseDescendants(e){if(this.treeControl)this.treeControl.collapseDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.deselect(this._getExpansionKey(e)),this._getDescendants(e).pipe(oe(1),K(this._onDestroy)).subscribe(r=>{t.deselect(...r.map(o=>this._getExpansionKey(o)))})}}expandAll(){this.treeControl?this.treeControl.expandAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.select(...e))}collapseAll(){this.treeControl?this.treeControl.collapseAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.deselect(...e))}_getLevelAccessor(){return this.treeControl?.getLevel?.bind(this.treeControl)??this.levelAccessor}_getChildrenAccessor(){return this.treeControl?.getChildren?.bind(this.treeControl)??this.childrenAccessor}_getDirectChildren(e){let t=this._getLevelAccessor(),r=this._expansionModel??this.treeControl?.expansionModel;if(!r)return g([]);let o=this._getExpansionKey(e),s=r.changed.pipe(ge(a=>a.added.includes(o)?g(!0):a.removed.includes(o)?g(!1):Le),Je(this.isExpanded(e)));if(t)return ht([s,this._flattenedNodes]).pipe(A(([a,d])=>a?this._findChildrenByLevel(t,d,e,1):[]));let c=this._getChildrenAccessor();if(c)return on(c(e)??[]);throw Fd()}_findChildrenByLevel(e,t,r,o){let s=this._getExpansionKey(r),c=t.findIndex(h=>this._getExpansionKey(h)===s),a=e(r),d=a+o,u=[];for(let h=c+1;h<t.length;h++){let m=e(t[h]);if(m<=a)break;m<=d&&u.push(t[h])}return u}_registerNode(e){this._nodes.value.set(this._getExpansionKey(e.data),e),this._nodes.next(this._nodes.value)}_unregisterNode(e){this._nodes.value.delete(this._getExpansionKey(e.data)),this._nodes.next(this._nodes.value)}_getLevel(e){return this._levels.get(this._getExpansionKey(e))}_getSetSize(e){return this._getAriaSet(e).length}_getPositionInSet(e){let t=this._getAriaSet(e),r=this._getExpansionKey(e);return t.findIndex(o=>this._getExpansionKey(o)===r)+1}_getNodeParent(e){let t=this._parents.get(this._getExpansionKey(e.data));return t&&this._nodes.value.get(this._getExpansionKey(t))}_getNodeChildren(e){return this._getDirectChildren(e.data).pipe(A(t=>t.reduce((r,o)=>{let s=this._nodes.value.get(this._getExpansionKey(o));return s&&r.push(s),r},[])))}_sendKeydownToKeyManager(e){if(e.target===this._elementRef.nativeElement)this._keyManager.onKeydown(e);else{let t=this._nodes.getValue();for(let[,r]of t)if(e.target===r._elementRef.nativeElement){this._keyManager.onKeydown(e);break}}}_getDescendants(e){if(this.treeControl)return g(this.treeControl.getDescendants(e));if(this.levelAccessor){let t=this._findChildrenByLevel(this.levelAccessor,this._flattenedNodes.value,e,1/0);return g(t)}if(this.childrenAccessor)return this._getAllChildrenRecursively(e).pipe(To((t,r)=>(t.push(...r),t),[]));throw Fd()}_getAllChildrenRecursively(e){return this.childrenAccessor?on(this.childrenAccessor(e)).pipe(oe(1),ge(t=>{for(let r of t)this._parents.set(this._getExpansionKey(r),e);return g(...t).pipe(Mt(r=>Vt(g([r]),this._getAllChildrenRecursively(r))))})):g([])}_getExpansionKey(e){return this.expansionKey?.(e)??e}_getAriaSet(e){let t=this._getExpansionKey(e),r=this._parents.get(t),o=r?this._getExpansionKey(r):null;return this._ariaSets.get(o)??[e]}_findParentForNode(e,t,r){if(!r.length)return null;let o=this._levels.get(this._getExpansionKey(e))??0;for(let s=t-1;s>=0;s--){let c=r[s];if((this._levels.get(this._getExpansionKey(c))??0)<o)return c}return null}_flattenNestedNodesWithExpansion(e,t=0){let r=this._getChildrenAccessor();return r?g(...e).pipe(Mt(o=>{let s=this._getExpansionKey(o);this._parents.has(s)||this._parents.set(s,null),this._levels.set(s,t);let c=on(r(o));return Vt(g([o]),c.pipe(oe(1),se(a=>{this._ariaSets.set(s,[...a??[]]);for(let d of a??[]){let u=this._getExpansionKey(d);this._parents.set(u,o),this._levels.set(u,t+1)}}),ge(a=>a?this._flattenNestedNodesWithExpansion(a,t+1).pipe(A(d=>this.isExpanded(o)?d:[])):g([]))))}),To((o,s)=>(o.push(...s),o),[])):g([...e])}_computeRenderingData(e,t){if(this.childrenAccessor&&t==="flat")return this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(A(r=>({renderNodes:r,flattenedNodes:r})));if(this.levelAccessor&&t==="nested"){let r=this.levelAccessor;return g(e.filter(o=>r(o)===0)).pipe(A(o=>({renderNodes:o,flattenedNodes:e})),se(({flattenedNodes:o})=>{this._calculateParents(o)}))}else return t==="flat"?g({renderNodes:e,flattenedNodes:e}).pipe(se(({flattenedNodes:r})=>{this._calculateParents(r)})):(this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(A(r=>({renderNodes:e,flattenedNodes:r}))))}_updateCachedData(e){this._flattenedNodes.next(e)}_updateKeyManagerItems(e){this._keyManagerNodes.next(e)}_calculateParents(e){let t=this._getLevelAccessor();if(t){this._clearPreviousCache();for(let r=0;r<e.length;r++){let o=e[r],s=this._getExpansionKey(o);this._levels.set(s,t(o));let c=this._findParentForNode(o,r,e);this._parents.set(s,c);let a=c?this._getExpansionKey(c):null,d=this._ariaSets.get(a)??[];d.splice(r,0,o),this._ariaSets.set(a,d)}}}_forEachExpansionKey(e){let t=[],r=[];this._nodes.value.forEach(o=>{t.push(this._getExpansionKey(o.data)),r.push(this._getDescendants(o.data))}),r.length>0?ht(r).pipe(oe(1),K(this._onDestroy)).subscribe(o=>{o.forEach(s=>s.forEach(c=>t.push(this._getExpansionKey(c)))),e(t)}):e(t)}_clearPreviousCache(){this._parents.clear(),this._levels.clear(),this._ariaSets.clear()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["cdk-tree"]],contentQueries:function(t,r,o){if(t&1&&Ht(o,_o,5),t&2){let s;z(s=H())&&(r._nodeDefs=s)}},viewQuery:function(t,r){if(t&1&&de(go,7),t&2){let o;z(o=H())&&(r._nodeOutlet=o.first)}},hostAttrs:["role","tree",1,"cdk-tree"],hostBindings:function(t,r){t&1&&O("keydown",function(s){return r._sendKeydownToKeyManager(s)})},inputs:{dataSource:"dataSource",treeControl:"treeControl",levelAccessor:"levelAccessor",childrenAccessor:"childrenAccessor",trackBy:"trackBy",expansionKey:"expansionKey"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(t,r){t&1&&Nt(0,0)},dependencies:[go],encapsulation:2,changeDetection:1})}return n})(),dn=(()=>{class n{_elementRef=l(B);_tree=l(Yn);_tabindex=-1;_type="flat";get role(){return"treeitem"}set role(e){}get isExpandable(){return this._isExpandable()}set isExpandable(e){this._inputIsExpandable=e,!(this.data&&!this._isExpandable||!this._inputIsExpandable)&&(this._inputIsExpanded?this.expand():this._inputIsExpanded===!1&&this.collapse())}get isExpanded(){return this._tree.isExpanded(this._data)}set isExpanded(e){this._inputIsExpanded=e,e?this.expand():this.collapse()}isDisabled=!1;typeaheadLabel=null;getLabel(){return this.typeaheadLabel||this._elementRef.nativeElement.textContent?.trim()||""}activation=new P;expandedChange=new P;static mostRecentTreeNode=null;_destroyed=new w;_dataChanges=new w;_inputIsExpandable=!1;_inputIsExpanded=void 0;_shouldFocus=!0;_parentNodeAriaLevel;get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._dataChanges.next())}_data;get isLeafNode(){return this._tree.treeControl?.isExpandable!==void 0&&!this._tree.treeControl.isExpandable(this._data)?!0:this._tree.treeControl?.isExpandable===void 0&&this._tree.treeControl?.getDescendants(this._data).length===0}get level(){return this._tree._getLevel(this._data)??this._parentNodeAriaLevel}_isExpandable(){return this._tree.treeControl?!this.isLeafNode:this._inputIsExpandable}_getAriaExpanded(){return this._isExpandable()?String(this.isExpanded):null}_getSetSize(){return this._tree._getSetSize(this._data)}_getPositionInSet(){return this._tree._getPositionInSet(this._data)}_changeDetectorRef=l(me);constructor(){n.mostRecentTreeNode=this}ngOnInit(){this._parentNodeAriaLevel=ip(this._elementRef.nativeElement),this._tree._getExpansionModel().changed.pipe(A(()=>this.isExpanded),ii(),K(this._destroyed)).pipe(K(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()),this._tree._setNodeTypeIfUnset(this._type),this._tree._registerNode(this)}ngOnDestroy(){n.mostRecentTreeNode===this&&(n.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}getParent(){return this._tree._getNodeParent(this)??null}getChildren(){return this._tree._getNodeChildren(this)}focus(){this._tabindex=0,this._shouldFocus&&this._elementRef.nativeElement.focus(),this._changeDetectorRef.markForCheck()}unfocus(){this._tabindex=-1,this._changeDetectorRef.markForCheck()}activate(){this.isDisabled||this.activation.next(this._data)}collapse(){this.isExpandable&&this._tree.collapse(this._data)}expand(){this.isExpandable&&this._tree.expand(this._data)}makeFocusable(){this._tabindex=0,this._changeDetectorRef.markForCheck()}_focusItem(){this.isDisabled||this._tree._keyManager.focusItem(this)}_setActiveItem(){this.isDisabled||(this._shouldFocus=!1,this._tree._keyManager.focusItem(this),this._shouldFocus=!0)}_emitExpansionState(e){this.expandedChange.emit(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["cdk-tree-node"]],hostAttrs:["role","treeitem",1,"cdk-tree-node"],hostVars:5,hostBindings:function(t,r){t&1&&O("click",function(){return r._setActiveItem()})("focus",function(){return r._focusItem()}),t&2&&(Dn("tabIndex",r._tabindex),J("aria-expanded",r._getAriaExpanded())("aria-level",r.level+1)("aria-posinset",r._getPositionInSet())("aria-setsize",r._getSetSize()))},inputs:{role:"role",isExpandable:[2,"isExpandable","isExpandable",j],isExpanded:"isExpanded",isDisabled:[2,"isDisabled","isDisabled",j],typeaheadLabel:[0,"cdkTreeNodeTypeaheadLabel","typeaheadLabel"]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["cdkTreeNode"]})}return n})();function ip(n){let i=n.parentElement;for(;i&&!rp(i);)i=i.parentElement;return i?i.classList.contains("cdk-nested-tree-node")?ie(i.getAttribute("aria-level")):0:-1}function rp(n){let i=n.classList;return!!(i?.contains("cdk-nested-tree-node")||i?.contains("cdk-tree"))}var op=/([A-Za-z%]+)$/,ya=(()=>{class n{_treeNode=l(dn);_tree=l(Yn);_element=l(B);_dir=l(Ze,{optional:!0});_currentPadding=null;_destroyed=new w;indentUnits="px";get level(){return this._level}set level(e){this._setLevelInput(e)}_level;get indent(){return this._indent}set indent(e){this._setIndentInput(e)}_indent=40;constructor(){this._setPadding(),this._dir?.change.pipe(K(this._destroyed)).subscribe(()=>this._setPadding(!0)),this._treeNode._dataChanges.subscribe(()=>this._setPadding())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){let e=(this._treeNode.data&&this._tree._getLevel(this._treeNode.data))??null,t=this._level==null?e:this._level;return typeof t=="number"?`${t*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){let t=this._paddingIndent();if(t!==this._currentPadding||e){let r=this._element.nativeElement,o=this._dir&&this._dir.value==="rtl"?"paddingRight":"paddingLeft",s=o==="paddingLeft"?"paddingRight":"paddingLeft";r.style[o]=t||"",r.style[s]="",this._currentPadding=t}}_setLevelInput(e){this._level=isNaN(e)?null:e,this._setPadding()}_setIndentInput(e){let t=e,r="px";if(typeof e=="string"){let o=e.split(op);t=o[0],r=o[1]||r}this.indentUnits=r,this._indent=ie(t),this._setPadding()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:[2,"cdkTreeNodePadding","level",ie],indent:[0,"cdkTreeNodePaddingIndent","indent"]}})}return n})(),wa=(()=>{class n{_tree=l(Yn);_treeNode=l(dn);recursive=!1;_toggle(e){e.stopPropagation(),this.recursive?this._tree.toggleDescendants(this._treeNode.data):this._tree.toggle(this._treeNode.data),this._tree._keyManager.focusItem(this._treeNode)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","cdkTreeNodeToggle",""]],hostAttrs:["tabindex","-1"],hostBindings:function(t,r){t&1&&O("click",function(s){return r._toggle(s)})("keydown.Enter",function(s){return r._toggle(s),s.preventDefault()})("keydown.Space",function(s){return r._toggle(s),s.preventDefault()})},inputs:{recursive:[2,"cdkTreeNodeToggleRecursive","recursive",j]}})}return n})();var Od=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({})}return n})();function sp(n){return!!n._isNoopTreeKeyManager}var Ld=(()=>{class n extends dn{get tabIndexInputBinding(){return this._tabIndexInputBinding}set tabIndexInputBinding(e){this._tabIndexInputBinding=e}_tabIndexInputBinding;defaultTabIndex=0;_getTabindexAttribute(){return sp(this._tree._keyManager)?this.tabIndexInputBinding:this._tabindex}get disabled(){return this.isDisabled}set disabled(e){this.isDisabled=e}constructor(){super();let e=l(new Wt("tabindex"),{optional:!0});this.tabIndexInputBinding=Number(e)||this.defaultTabIndex}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["mat-tree-node"]],hostAttrs:[1,"mat-tree-node"],hostVars:5,hostBindings:function(t,r){t&1&&O("click",function(){return r._focusItem()}),t&2&&(Dn("tabIndex",r._getTabindexAttribute()),J("aria-expanded",r._getAriaExpanded())("aria-level",r.level+1)("aria-posinset",r._getPositionInSet())("aria-setsize",r._getSetSize()))},inputs:{tabIndexInputBinding:[2,"tabIndex","tabIndexInputBinding",e=>e==null?0:ie(e)],disabled:[2,"disabled","disabled",j]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["matTreeNode"],features:[le([{provide:dn,useExisting:n}]),ce]})}return n})(),Vd=(()=>{class n extends _o{data;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(n)))(r||n)}})();static \u0275dir=L({type:n,selectors:[["","matTreeNodeDef",""]],inputs:{when:[0,"matTreeNodeDefWhen","when"],data:[0,"matTreeNode","data"]},features:[le([{provide:_o,useExisting:n}]),ce]})}return n})();var Bd=(()=>{class n extends ya{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(n)))(r||n)}})();static \u0275dir=L({type:n,selectors:[["","matTreeNodePadding",""]],inputs:{level:[2,"matTreeNodePadding","level",ie],indent:[0,"matTreeNodePaddingIndent","indent"]},features:[le([{provide:ya,useExisting:n}]),ce]})}return n})(),Pd=(()=>{class n{viewContainer=l(je);_node=l(ba,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["","matTreeNodeOutlet",""]],features:[le([{provide:go,useExisting:n}])]})}return n})(),vo=(()=>{class n extends Yn{_nodeOutlet=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(n)))(r||n)}})();static \u0275cmp=S({type:n,selectors:[["mat-tree"]],viewQuery:function(t,r){if(t&1&&de(Pd,7),t&2){let o;z(o=H())&&(r._nodeOutlet=o.first)}},hostAttrs:[1,"mat-tree"],exportAs:["matTree"],features:[le([{provide:Yn,useExisting:n}]),ce],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(t,r){t&1&&Nt(0,0)},dependencies:[Pd],styles:[`.mat-tree {
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
`],encapsulation:2,changeDetection:1})}return n})(),Ud=(()=>{class n extends wa{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Re(n)))(r||n)}})();static \u0275dir=L({type:n,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:[0,"matTreeNodeToggleRecursive","recursive"]},features:[le([{provide:wa,useExisting:n}]),ce]})}return n})();var jd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[Od,De]})}return n})();function zd(n){return Error(`Unable to find icon with the name "${n}"`)}function cp(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Hd(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function $d(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Dt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Gd=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Dt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let s=this._sanitizer.sanitize(Me.HTML,r);if(!s)throw $d(r);let c=nn(s);return this._addSvgIconConfig(e,t,new Dt("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Dt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(Me.HTML,t);if(!o)throw $d(t);let s=nn(o);return this._addSvgIconSetConfig(e,new Dt("",s,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Me.RESOURCE_URL,e);if(!t)throw Hd(e);let r=this._cachedIconsByUrl.get(t);return r?g(bo(r)):this._loadSvgIconFromConfig(new Dt(e,null)).pipe(se(o=>this._cachedIconsByUrl.set(t,o)),A(o=>bo(o)))}getNamedSvgIcon(e,t=""){let r=Wd(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(t);return s?this._getSvgFromIconSetConfigs(e,s):ir(zd(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?g(bo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(A(t=>bo(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return g(r);let o=t.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(ni(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Me.RESOURCE_URL,s.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),g(null)})));return Na(o).pipe(A(()=>{let s=this._extractIconWithNameFromAnySet(e,t);if(!s)throw zd(e);return s}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(s,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(se(t=>e.svgText=t),A(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?g(null):this._fetchIcon(e).pipe(se(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let c=this._svgElementFromString(nn("<svg></svg>"));return c.appendChild(s),this._setSvgAttributes(c,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(nn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:c}=r[o];s!=="id"&&t.setAttribute(s,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw cp();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let s=this._sanitizer.sanitize(Me.RESOURCE_URL,t);if(!s)throw Hd(t);let c=this._inProgressUrlFetches.get(s);if(c)return c;let a=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(A(d=>nn(d)),fn(()=>this._inProgressUrlFetches.delete(s)),Fa());return this._inProgressUrlFetches.set(s,a),a}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Wd(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return lp(o)?new Dt(o.url,null,o.options):new Dt(o,null)}}static \u0275fac=function(t){return new(t||n)(M(as,8),M(_i),M(D,8),M(jt))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function bo(n){return n.cloneNode(!0)}function Wd(n,i){return n+":"+i}function lp(n){return!!(n.url&&n.options)}var dp=["*"],up=new p("MAT_ICON_DEFAULT_OPTIONS"),hp=new p("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(D),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),qd=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],fp=qd.map(n=>`[${n}]`).join(", "),mp=/^url\(['"]?#(.*?)['"]?\)$/,Zn=(()=>{class n{_elementRef=l(B);_iconRegistry=l(Gd);_location=l(hp);_errorHandler=l(jt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ut.EMPTY;constructor(){let e=l(new Wt("aria-hidden"),{optional:!0}),t=l(up,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(fp),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)qd.forEach(s=>{let c=t[o],a=c.getAttribute(s),d=a?a.match(mp):null;if(d){let u=r.get(c);u||(u=[],r.set(c,u)),u.push({name:s,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(oe(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(J("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),tt(r.color?"mat-"+r.color:""),$("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",j],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:dp,decls:1,vars:0,template:function(t,r){t&1&&(fe(),Z(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return n})(),yo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[De]})}return n})();function pp(n,i){if(n&1){let e=Te();_(0,"button",8),O("click",function(){_e(e);let r=F(2);return ve(r.handleResetFilterClick())}),X(1," Show all series "),b()}}function gp(n,i){if(n&1){let e=Te();_(0,"button",9),O("click",function(){_e(e);let r=F(2);return ve(r.handleResetFilterClick())}),X(1," Show all series "),b()}}function _p(n,i){if(n&1){let e=Te();_(0,"button",8),O("click",function(){_e(e);let r=F().$implicit,o=F(2);return ve(o.handleNodeClick(r.key))}),X(1),b()}if(n&2){let e=F().$implicit;y(),Xe(" ",e.label," ")}}function vp(n,i){if(n&1){let e=Te();_(0,"button",9),O("click",function(){_e(e);let r=F().$implicit,o=F(2);return ve(o.handleNodeClick(r.key))}),X(1),b()}if(n&2){let e=F().$implicit;y(),Xe(" ",e.label," ")}}function bp(n,i){if(n&1&&(_(0,"mat-tree-node",10),X(1),Ve(2,_p,2,1,"button",4)(3,vp,2,1,"ng-template",null,2,$t),b()),n&2){let e=i.$implicit,t=qe(4),r=F(2);y(),Xe(" ",e.type,":"),y(),V("ngIf",r.selectedKey===e.key)("ngIfElse",t)}}function yp(n,i){if(n&1&&(_(0,"mat-tree-node",11),X(1),_(2,"button",12)(3,"mat-icon",13),X(4),b()(),X(5),b()),n&2){let e=i.$implicit;F();let t=qe(5);V("cdkTreeNodeTypeaheadLabel",e.label),y(),Xe(" ",e.type,":"),y(),J("aria-label","Toggle "+e.label),y(2),Xe(" ",t.isExpanded(e)?"expand_more":"chevron_right"," "),y(),Xe(" ",e.label," ")}}function wp(n,i){if(n&1&&(_(0,"div"),Ve(1,pp,2,0,"button",4)(2,gp,2,0,"ng-template",null,0,$t),_(4,"mat-tree",5,1),Ve(6,bp,5,3,"mat-tree-node",6)(7,yp,6,5,"mat-tree-node",7),b()()),n&2){let e=qe(3),t=F();y(),V("ngIf",t.selectedKey===null)("ngIfElse",e),y(3),V("dataSource",t.data())("childrenAccessor",t.childrenAccessor),y(3),V("matTreeNodeDefWhen",t.hasChild)}}var wo=class n{dicomHierarchy;setSeriesFilter=new P;resetFilter=new P;tree;selectedKey=null;data=gt(()=>{let i=this.dicomHierarchy();if(!i?.patients)return[];let e=Array.from(i?.patients.entries(),([t,r])=>({label:`${t}`,key:t,type:"Name",children:Array.from(r.studies.entries(),([o,s])=>({label:`${o}`,key:o,type:"Study",children:Array.from(s?.series.entries(),([c,a])=>{let d=new Map;return a.instances instanceof Map&&a.instances.forEach(u=>{let h=u.acquisition_number||"Unknown";d.has(h)||d.set(h,[]),d.get(h)?.push(u)}),d.size>1?{label:`${a.series_date} ${a.series_time} ${a.modality} ${a.body_part_examined}`,key:c,type:"Series",children:Array.from(d.entries()).sort(([u],[h])=>Number(u)-Number(h)).map(([u,h])=>({label:`Acquisition ${u}`,key:`${c}_acq_${u}`,type:"Acquisition",children:Array.isArray(a.instances)?a.instances:[]}))}:{label:`${a.series_date} ${a.series_time} ${a.modality} ${a.body_part_examined}`,key:c,type:"Series",children:Array.isArray(a.instances)?a.instances:[]}})}))}));return setTimeout(()=>{this.tree.expandAll()}),e});handleNodeClick(i){this.selectedKey=i,this.setSeriesFilter.emit(i)}handleResetFilterClick(){this.selectedKey=null,this.resetFilter.emit()}childrenAccessor=i=>i.children??[];hasChild=(i,e)=>!!e.children&&e.children.length>0;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["dicom-tree"]],viewQuery:function(e,t){if(e&1&&de(vo,5),e&2){let r;z(r=H())&&(t.tree=r.first)}},inputs:{dicomHierarchy:"dicomHierarchy"},outputs:{setSeriesFilter:"setSeriesFilter",resetFilter:"resetFilter"},decls:1,vars:1,consts:[["regularResetButton",""],["tree",""],["regularButton",""],[4,"ngIf"],["mat-stroked-button","",3,"click",4,"ngIf","ngIfElse"],[3,"dataSource","childrenAccessor"],["matTreeNodePadding","",4,"matTreeNodeDef"],["matTreeNodePadding","","matTreeNodeToggle","",3,"cdkTreeNodeTypeaheadLabel",4,"matTreeNodeDef","matTreeNodeDefWhen"],["mat-stroked-button","",3,"click"],["mat-button","",3,"click"],["matTreeNodePadding",""],["matTreeNodePadding","","matTreeNodeToggle","",3,"cdkTreeNodeTypeaheadLabel"],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"]],template:function(e,t){e&1&&Ve(0,wp,8,5,"div",3),e&2&&V("ngIf",t.data()&&t.data().length>0)},dependencies:[ot,Gt,jd,Vd,Bd,Ud,vo,Ld,yo,Zn,ln,Xn,er],encapsulation:2})};var Sp=["determinateSpinner"];function Cp(n,i){if(n&1&&(ri(),_(0,"svg",11),te(1,"circle",12),b()),n&2){let e=F();J("viewBox",e._viewBox()),y(),et("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),J("r",e._circleRadius())}}var Dp=new p("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Kd})}),Kd=100,Ep=10,Yd=(()=>{class n{_elementRef=l(B);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(Dp),t=oa(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Kd;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Ep)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&de(Sp,5),t&2){let o;z(o=H())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(J("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),tt("mat-"+r.color),et("width",r.diameter,"px")("height",r.diameter,"px")("--%NS%mat-progress-spinner-size",r.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",r.diameter+"px"),$("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",ie],diameter:[2,"diameter","diameter",ie],strokeWidth:[2,"strokeWidth","strokeWidth",ie]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(Ve(0,Cp,2,8,"ng-template",null,0,$t),_(2,"div",2,1),ri(),_(4,"svg",3),te(5,"circle",4),b()(),sr(),_(6,"div",5)(7,"div",6)(8,"div",7),Nt(9,8),b(),_(10,"div",9),Nt(11,8),b(),_(12,"div",10),Nt(13,8),b()()()),t&2){let o=qe(1);y(4),J("viewBox",r._viewBox()),y(),et("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),J("r",r._circleRadius()),y(4),V("ngTemplateOutlet",o),y(2),V("ngTemplateOutlet",o),y(2),V("ngTemplateOutlet",o)}},dependencies:[$o],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var Co=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[De]})}return n})();var Do=new p("");var Zd=new p("");var kp=["knob"],Ap=["valueIndicatorContainer"];function Mp(n,i){if(n&1&&(_(0,"div",2,1)(2,"div",5)(3,"span",6),X(4),b()()()),n&2){let e=F();y(4),fr(e.valueIndicatorText)}}var Rp=["trackActive"],Np=["*"];function Ip(n,i){if(n&1&&te(0,"div"),n&2){let e=i.$implicit,t=i.$index,r=F(3);tt(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),et("transform",r._calcTickMarkTransform(t))}}function Tp(n,i){if(n&1&&Ja(0,Ip,1,4,"div",8,Qa),n&2){let e=F(2);ec(e._tickMarks)}}function Fp(n,i){if(n&1&&(_(0,"div",6,1),we(2,Tp,2,0),b()),n&2){let e=F();y(2),Se(e._cachedWidth?2:-1)}}function Op(n,i){if(n&1&&te(0,"mat-slider-visual-thumb",7),n&2){let e=F();V("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var x=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(x||{}),Qn=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(Qn||{}),Sa=new p("_MatSlider"),Qd=new p("_MatSliderThumb"),Pp=new p("_MatSliderRangeThumb"),Jd=new p("_MatSliderVisualThumb");var Lp=(()=>{class n{_cdr=l(me);_ngZone=l(N);_slider=l(Sa);_renderer=l(Ge);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=l(B).nativeElement;_platform=l(Q);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(t,"pointermove",this._onPointerMove),r.listen(t,"pointerdown",this._onDragStart),r.listen(t,"pointerup",this._onDragEnd),r.listen(t,"pointerleave",this._onMouseLeave),r.listen(t,"focus",this._onFocus),r.listen(t,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===Pe.FADING_IN||e?.state===Pe.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===x.START?x.END:x.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===x.START?x.END:x.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,r){if(t&1&&de(Ji,5)(kp,5)(Ap,5),t&2){let o;z(o=H())&&(r._ripple=o.first),z(o=H())&&(r._knob=o.first),z(o=H())&&(r._valueIndicatorContainer=o.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[le([{provide:Jd,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,r){t&1&&(we(0,Mp,5,1,"div",2),te(1,"div",3,0)(3,"div",4)),t&2&&(Se(r.discrete?0:-1),y(3),V("matRippleDisabled",!0))},dependencies:[Ji],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})(),eu=(()=>{class n{_ngZone=l(N);_cdr=l(me);_elementRef=l(B);_dir=l(Ze,{optional:!0});_globalRippleOptions=l(Qi,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(x.END),r=this._getInput(x.START);t&&(t.disabled=this._disabled),r&&(r.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(x.END),r=this._getInput(x.START),o=t.value,s=r.value;r.min=e.new,t.min=Math.max(e.new,r.value),r.max=Math.min(t.max,t.value),r._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,r):this._onTranslateXChangeBySideEffect(r,t),o!==t.value&&this._onValueChange(t),s!==r.value&&this._onValueChange(r)}_updateMinNonRange(e){let t=this._getInput(x.END);if(t){let r=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(x.END),r=this._getInput(x.START),o=t.value,s=r.value;t.max=e.new,r.max=Math.min(e.new,t.value),t.min=r.value,t._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,t):this._onTranslateXChangeBySideEffect(t,r),o!==t.value&&this._onValueChange(t),s!==r.value&&this._onValueChange(r)}_updateMaxNonRange(e){let t=this._getInput(x.END);if(t){let r=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(x.END),t=this._getInput(x.START),r=e.value,o=t.value,s=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<s?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),r!==e.value&&this._onValueChange(e),o!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(x.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=Oe();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=gt(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=l(Q);constructor(){l(Ue).load(qn);let e=this._isRtl();oc(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(x.END),t=this._getInput(x.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let r=this._getThumb(x.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(x.END),t=this._getInput(x.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(x.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(x.START)._isActive||this._getThumb(x.END)._isActive}_getValue(e=x.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(x.START)?._skipUIUpdate||this._getInput(x.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(x.END),t=this._getInput(x.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(x.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(x.START),t=this._getInput(x.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===x.END?x.END:x.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===x.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let r=this._getThumb(e.thumbPosition);t.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(x.END),t=this._getInput(x.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let r=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),r=Math.max(Math.round((t-this.min)/e),0)+1,o=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(Qn.ACTIVE).concat(Array(o).fill(Qn.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),r=this._getValue(x.START),o=Math.max(Math.round((r-this.min)/e),0),s=Math.max(Math.round((t-r)/e)+1,0),c=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(o).fill(Qn.INACTIVE).concat(Array(s).fill(Qn.ACTIVE),Array(c).fill(Qn.INACTIVE))}_getInput(e){if(e===x.END&&this._input)return this._input;if(this._inputs?.length)return e===x.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===x.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,t){let r=t.width/2,o=t.x+r,s=t.y+r,c=e.clientX-o,a=e.clientY-s;return Math.pow(c,2)+Math.pow(a,2)<Math.pow(r,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-slider"]],contentQueries:function(t,r,o){if(t&1&&Ht(o,Qd,5)(o,Pp,4),t&2){let s;z(s=H())&&(r._input=s.first),z(s=H())&&(r._inputs=s)}},viewQuery:function(t,r){if(t&1&&de(Rp,5)(Jd,5),t&2){let o;z(o=H())&&(r._trackActive=o.first),z(o=H())&&(r._thumbs=o)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,r){t&2&&(tt("mat-"+(r.color||"primary")),$("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",j],discrete:[2,"discrete","discrete",j],showTickMarks:[2,"showTickMarks","showTickMarks",j],min:[2,"min","min",ie],color:"color",disableRipple:[2,"disableRipple","disableRipple",j],max:[2,"max","max",ie],step:[2,"step","step",ie],displayWith:"displayWith"},exportAs:["matSlider"],features:[le([{provide:Sa,useExisting:n}])],ngContentSelectors:Np,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,r){t&1&&(fe(),Z(0),_(1,"div",2),te(2,"div",3),_(3,"div",4),te(4,"div",5,0),b(),we(6,Fp,3,1,"div",6),b(),we(7,Op,1,3,"mat-slider-visual-thumb",7),te(8,"mat-slider-visual-thumb",7)),t&2&&(y(6),Se(r.showTickMarks?6:-1),y(),Se(r._isRange?7:-1),y(),V("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText))},dependencies:[Lp],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var Vp={provide:Do,useExisting:pn(()=>Ca),multi:!0};var Ca=(()=>{class n{_ngZone=l(N);_elementRef=l(B);_cdr=l(me);_slider=l(Sa);_platform=l(Q);_listenerCleanups;get value(){return ie(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new P;dragStart=new P;dragEnd=new P;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=x.END;get min(){return ie(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return ie(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return ie(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return j(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=ae("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new w;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=l(Ge);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,s=Math.floor((this._slider.max-this._slider.min)/o),c=this._slider._isRtl()?1-t/r:t/r,d=Math.round(c*s)/s*(this._slider.max-this._slider.min)+this._slider.min,u=Math.round(d/o)*o,h=this.value;if(u===h){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=u,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=L({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,r){t&1&&O("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),t&2&&J("aria-valuetext",r._valuetext())},inputs:{value:[2,"value","value",ie]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[le([Vp,{provide:Qd,useExisting:n}])]})}return n})();var tu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[ho,De]})}return n})();function Up(n,i){if(n&1){let e=Te();_(0,"mat-slider",7)(1,"input",8),O("input",function(r){_e(e);let o=F(2);return ve(o.onInputChange(r))}),b()()}if(n&2){let e=F(2);V("max",e.metadata()?e.metadata().series_total:1)("discrete",!0),y(),V("value",e.currentIndex())}}function jp(n,i){if(n&1&&(_(0,"div",9),X(1),te(2,"br"),X(3),b()),n&2){let e=F(2);y(),tc(" Showing image ",e.currentIndex()," of ",e.metadata()?.series_total," in series. "),y(2),Xe(" Total amount of images: ",e.metadata()?.total," ")}}function zp(n,i){if(n&1&&(_(0,"div",4),Ve(1,Up,2,3,"mat-slider",5)(2,jp,4,3,"div",6),b()),n&2){let e=F();y(),V("ngIf",e.metadata().series_total>1),y(),V("ngIf",!e.isFullscreen)}}function Hp(n,i){if(n&1){let e=Te();_(0,"button",10),O("click",function(){_e(e);let r=F();return ve(r.fullscreenToggle.emit())}),_(1,"mat-icon"),X(2),b()()}if(n&2){let e=F();V("title",e.isFullscreen?"Exit fullscreen (Esc)":"Fullscreen (F)"),y(2),fr(e.isFullscreen?"fullscreen_exit":"fullscreen")}}var Eo=class n{dicomViewer;metadata;isFullscreen=!1;getMetadata=new P;fullscreenToggle=new P;currentIndex=gt(()=>{let i=this.metadata();return i?i.current_index+1:0});onInputChange(i){let e=parseInt(i.target.value),t=this.dicomViewer();t&&(t.render_image_at_index(e-1),this.getMetadata.emit())}handleWheel(i){return k(this,null,function*(){let e=this.dicomViewer();e&&(i.deltaY<0?e.render_previous_file():e.render_next_file(),this.getMetadata.emit())})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["dicom-renderer"]],inputs:{dicomViewer:"dicomViewer",metadata:"metadata",isFullscreen:"isFullscreen"},outputs:{getMetadata:"getMetadata",fullscreenToggle:"fullscreenToggle"},decls:5,vars:4,consts:[[1,"canvas-wrapper"],["id","viewer-canvas","width","512","height","512",3,"wheel"],["class","controls",4,"ngIf"],["mat-icon-button","","class","fullscreen-btn",3,"title","click",4,"ngIf"],[1,"controls"],["min","1","step","1",3,"max","discrete",4,"ngIf"],["class","metadata",4,"ngIf"],["min","1","step","1",3,"max","discrete"],["matSliderThumb","",3,"input","value"],[1,"metadata"],["mat-icon-button","",1,"fullscreen-btn",3,"click","title"]],template:function(e,t){e&1&&(_(0,"div")(1,"div",0)(2,"canvas",1),O("wheel",function(o){return t.handleWheel(o)}),b()(),Ve(3,zp,3,2,"div",2)(4,Hp,3,2,"button",3),b()),e&2&&($("fullscreen-container",t.isFullscreen),y(3),V("ngIf",t.metadata()?.total),y(),V("ngIf",t.metadata()?.total))},dependencies:[ot,Gt,Co,ln,er,tu,eu,Ca,yo,Zn],styles:["mat-slider[_ngcontent-%COMP%]{width:100%}.metadata[_ngcontent-%COMP%]{text-align:center}.fullscreen-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;gap:1em}.fullscreen-container[_ngcontent-%COMP%]   .canvas-wrapper[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden}.fullscreen-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{max-width:90vmin;max-height:90vmin;width:auto;height:auto}.fullscreen-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{width:60%;max-width:600px}.fullscreen-btn[_ngcontent-%COMP%]{position:absolute;top:1em;right:1em;z-index:10}"]})};var $p=["dragAndDrop"],xo=class n{supportsFileSystemAccessAPI="getAsFileSystemHandle"in DataTransferItem.prototype;supportsWebkitGetAsEntry="webkitGetAsEntry"in DataTransferItem.prototype;dragAndCrop;handleFiles=new P;onDragOver(i){i.preventDefault()}onDrop(i){return k(this,null,function*(){i.preventDefault();let t=Array.from(i.dataTransfer?.items||[]).filter(d=>d.kind==="file").map(d=>this.supportsFileSystemAccessAPI?d.getAsFileSystemHandle():this.supportsWebkitGetAsEntry?d.webkitGetAsEntry():d.getAsFile()),r=[];try{for(var o=Aa(t),s,c,a;s=!(c=yield o.next()).done;s=!1){let d=c.value;if(d.kind==="directory"||d.isDirectory)console.log(`Directory: ${d.name}`);else if(d.name){let u=yield d.getFile();r.push(u),console.log(`File: ${d.name}`)}else d instanceof File?(r.push(d),console.log(`File instance: ${d.name}`)):console.log("Unknown entry:",d)}}catch(c){a=[c]}finally{try{s&&(c=o.return)&&(yield c.call(o))}finally{if(a)throw a[0]}}this.handleFiles.emit(r)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["drag-and-drop"]],viewQuery:function(e,t){if(e&1&&de($p,5),e&2){let r;z(r=H())&&(t.dragAndCrop=r.first)}},outputs:{handleFiles:"handleFiles"},decls:4,vars:0,consts:[["dragAndDrop",""],[3,"drop","dragover"],["id","drag-and-drop"]],template:function(e,t){e&1&&(_(0,"span",1,0),O("drop",function(o){return t.onDrop(o)})("dragover",function(o){return t.onDragOver(o)}),_(2,"mat-icon",2),X(3,"insert_drive_file"),b()())},dependencies:[ot,Zn],styles:["#drag-and-drop[_ngcontent-%COMP%]{border:1px dashed white;font-size:100px;width:100px;height:100px;vertical-align:middle}"]})};var Wp=["*"],nu=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&$("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Wp,decls:1,vars:0,template:function(t,r){t&1&&(fe(),Z(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return n})();var Gp=["input"],qp=["*"],Da={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Xp=new p("mat-checkbox-default-options",{providedIn:"root",factory:()=>Da}),Ee=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(Ee||{}),Ea=class{source;checked},xa=(()=>{class n{_elementRef=l(B);_changeDetectorRef=l(me);_ngZone=l(N);_animationsDisabled=Oe();_options=l(Xp,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Ea;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new P;indeterminateChange=new P;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Ee.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){l(Ue).load(qn);let e=l(new Wt("tabindex"),{optional:!0});this._options=this._options||Da,this.color=this._options.color||Da.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=l(Ct).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(Ee.Indeterminate):this._transitionCheckState(this.checked?Ee.Checked:Ee.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=ae(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Ee.Checked:Ee.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case Ee.Init:if(t===Ee.Checked)return this._animationClasses.uncheckedToChecked;if(t==Ee.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Ee.Unchecked:return t===Ee.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Ee.Checked:return t===Ee.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Ee.Indeterminate:return t===Ee.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,r){if(t&1&&de(Gp,5),t&2){let o;z(o=H())&&(r._inputElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,r){t&2&&(Dn("id",r.id),J("tabindex",null)("aria-label",null)("aria-labelledby",null),tt(r.color?"mat-"+r.color:"mat-accent"),$("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",j],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",j],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",j],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ie(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",j],checked:[2,"checked","checked",j],disabled:[2,"disabled","disabled",j],indeterminate:[2,"indeterminate","indeterminate",j]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[le([{provide:Do,useExisting:pn(()=>n),multi:!0},{provide:Zd,useExisting:n,multi:!0}]),ft],ngContentSelectors:qp,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(t,r){if(t&1&&(fe(),_(0,"label",3),O("click",function(s){return r._preventBubblingFromLabel(s)}),_(1,"span",4,0),te(3,"span",5),_(4,"input",6,1),O("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(s){return r._onInteractionEvent(s)}),b(),te(6,"span",7),_(7,"span",8),ri(),_(8,"svg",9),te(9,"path",10),b(),sr(),te(10,"span",11),b(),te(11,"span",12),b(),_(12,"span",13,2),Z(14),b()()),t&2){let o=qe(2);V("labelPosition",r.labelPosition)("for",r.inputId),y(4),$("mdc-checkbox--selected",r.checked),V("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),J("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),y(7),V("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0)}},dependencies:[Ji,nu],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})(),iu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=G({imports:[xa,De]})}return n})();function Yp(n,i){n&1&&te(0,"mat-spinner",8)}function Zp(n,i){if(n&1){let e=Te();_(0,"button",9),O("click",function(){_e(e),F();let r=qe(8);return ve(r.click())}),X(1," Select file(s) "),b(),X(2," or "),_(3,"button",9),O("click",function(){_e(e),F();let r=qe(6);return ve(r.click())}),X(4," Select folder "),b(),X(5," or Drop file(s) here: "),_(6,"drag-and-drop",10),O("handleFiles",function(r){_e(e);let o=F();return ve(o.handleFiles(r))}),b(),_(7,"mat-checkbox",11),O("change",function(r){_e(e);let o=F();return ve(o.singleThreaded.set(r.checked))}),X(8," single-threaded loading (benchmark) "),b(),_(9,"p",12),X(10," The files are only processed locally and do not leave your device. "),b()}if(n&2){let e=F();y(7),V("checked",e.singleThreaded())}}var ko=class n{loading=ae(!1);isDraggedOver=!1;pool=l(Bn);singleThreaded=ae(!1);dicomViewer;metadata;dicomHierarchy;getMetadata=new P;openSnackBar=new P;handleFiles(i){return k(this,null,function*(){let e=this.dicomViewer();if(e){this.loading.set(!0);try{let t=performance.now(),r=this.singleThreaded()?yield this.pool.processSequential(i):yield this.pool.process(i);if(r.ok.length===0)throw new Error(r.failed[0]?.message??"could not process any file");e.begin_read();for(let a of r.ok)e.add_processed_file(a.meta,new Uint8Array(a.luma));e.finish_read();let o=performance.now()-t;console.log(`dicom load: ${r.ok.length}/${i.length} files | file reading \u03A3${r.readMs.toFixed(0)}ms, parsing \u03A3${r.parseMs.toFixed(0)}ms, decoding \u03A3${r.decodeMs.toFixed(0)}ms, total ${o.toFixed(0)}ms`),e.render_image_at_index(0);let s=e.get_dicom_hierarchy();this.dicomHierarchy.set(s),this.getMetadata.emit();let c=r.failed.length>0?`, ${r.failed.length} failed`:"";this.openSnackBar.emit({message:"\u2705 "+this.metadata()?.total+" files successfully loaded"+c,action:"Close"})}catch(t){this.dicomHierarchy.set(null),this.getMetadata.emit(),this.openSnackBar.emit({message:"\u26A0\uFE0F Could not load files: "+t.message,action:"Close"})}finally{this.loading.set(!1)}}})}handleInputChangeEvent(i){return k(this,null,function*(){let e=i.target,t=Array.from(e.files||[]);yield this.handleFiles(t)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["image-picker"]],inputs:{dicomViewer:"dicomViewer",metadata:"metadata",dicomHierarchy:"dicomHierarchy"},outputs:{getMetadata:"getMetadata",openSnackBar:"openSnackBar"},decls:9,vars:2,consts:[["uploadButton",""],["folderinput",""],["fileinput",""],[1,"image-picker"],[1,"buttonarea"],["diameter","48",4,"ngIf","ngIfElse"],["webkitdirectory","","type","file","multiple","","hidden","",3,"change"],["type","file","multiple","","hidden","",3,"change"],["diameter","48"],["type","button","mat-flat-button","",3,"click"],[3,"handleFiles"],[3,"change","checked"],[1,"footnote"]],template:function(e,t){if(e&1&&(_(0,"div",3)(1,"div",4),Ve(2,Yp,1,0,"mat-spinner",5)(3,Zp,11,1,"ng-template",null,0,$t),b(),_(5,"input",6,1),O("change",function(o){return t.handleInputChangeEvent(o)}),b(),_(7,"input",7,2),O("change",function(o){return t.handleInputChangeEvent(o)}),b()()),e&2){let r=qe(4);y(2),V("ngIf",t.loading())("ngIfElse",r)}},dependencies:[ot,Gt,Co,Yd,ln,Xn,iu,xa,xo],styles:[".buttonarea[_ngcontent-%COMP%]{min-height:72px}"]})};var Ao=class n{title="DICOMViewer";dicomViewer=ae(null);metadata=ae(null);dicomHierarchy=ae(null);isFullscreen=ae(!1);_snackBar=l(Md);pool=l(Bn);handleKeydown(i){i.target instanceof HTMLInputElement||(i.key==="f"||i.key==="F"?this.toggleFullscreen():i.key==="Escape"&&this.isFullscreen()&&this.isFullscreen.set(!1))}toggleFullscreen(){this.isFullscreen.update(i=>!i)}ngOnInit(){return k(this,null,function*(){yield this.pool.initWasm(),this.dicomViewer.set(ji.new()),this.metadata.set(Vn.new())})}setSeriesFilter(i){let e=this.dicomViewer();e&&(e.set_current_series_instance_uid(i),this.getMetadata())}resetFilter(){let i=this.dicomViewer();i&&(i.reset_filter(),this.getMetadata())}openSnackBar(i){this._snackBar.open(i.message,i.action,{duration:3e3})}getMetadata(){let i=this.dicomViewer();if(!i)return;let e=i.get_metadata();this.metadata.set(e)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["app-root"]],hostBindings:function(e,t){e&1&&O("keydown",function(o){return t.handleKeydown(o)},Ka)},decls:12,vars:10,consts:[["mode","side",3,"opened"],[3,"getMetadata","openSnackBar","dicomViewer","dicomHierarchy","metadata"],[3,"setSeriesFilter","resetFilter","dicomHierarchy"],[3,"getMetadata","fullscreenToggle","dicomViewer","metadata","isFullscreen"],[1,"information"],["href","https://github.com/Cryt1c/DICOMViewer/issues","target","_blank"]],template:function(e,t){e&1&&(_(0,"main")(1,"mat-sidenav-container")(2,"mat-sidenav",0)(3,"image-picker",1),O("getMetadata",function(){return t.getMetadata()})("openSnackBar",function(o){return t.openSnackBar(o)}),b(),_(4,"dicom-tree",2),O("setSeriesFilter",function(o){return t.setSeriesFilter(o)})("resetFilter",function(){return t.resetFilter()}),b()(),_(5,"mat-sidenav-content")(6,"dicom-renderer",3),O("getMetadata",function(){return t.getMetadata()})("fullscreenToggle",function(){return t.toggleFullscreen()}),b()()(),_(7,"div",4),X(8," Learning project, not for clinical use. "),_(9,"a",5),X(10,"Report issues"),b()()(),te(11,"router-outlet")),e&2&&($("fullscreen",t.isFullscreen()),y(2),V("opened",!t.isFullscreen()),y(),V("dicomViewer",t.dicomViewer)("dicomHierarchy",t.dicomHierarchy)("metadata",t.metadata),y(),V("dicomHierarchy",t.dicomHierarchy),y(2),V("dicomViewer",t.dicomViewer)("metadata",t.metadata)("isFullscreen",t.isFullscreen()))},dependencies:[Ti,wo,Eo,Td,_a,Id,fo,ko],styles:["main[_ngcontent-%COMP%]{padding:1em}main.fullscreen[_ngcontent-%COMP%]{padding:0;height:100vh;overflow:hidden}main.fullscreen[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]{height:100vh}main.fullscreen[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]{height:100vh}main.fullscreen[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{display:none}mat-sidenav-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.footnote[_ngcontent-%COMP%]{margin:5px;font-size:12px}.information[_ngcontent-%COMP%]{position:fixed;bottom:1em;z-index:100;font-size:12px}mat-sidenav[_ngcontent-%COMP%]{width:700px}"]})};Jo(Ao,Tl).catch(n=>console.error(n));
