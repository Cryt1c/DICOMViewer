import{$ as ya,$a as er,$b as Ha,A as Wn,Aa as Ki,Ab as P,B as wo,Ba as Aa,Bb as O,C as Ct,Ca as Zi,Cb as De,D as an,Da as fn,Db as ee,E as ie,Ea as pn,Eb as Lt,F as Co,Fa as xa,Fb as ue,G as _a,Ga as Ra,Gb as U,H as Gn,Ha as Ma,Hb as j,I as cn,Ia,Ib as nt,J as Dt,Ja as Ta,Jb as Qe,K as Do,Ka as ka,Kb as ne,L as va,La as Oa,Lb as dt,M as qi,Ma as Ae,Mb as G,N as Ze,Na as mn,Nb as Ba,O as fe,Oa as Fa,Ob as Ge,P as z,Pa as So,Pb as Ua,Q as re,Qa as Ao,Qb as de,R as I,Ra as xe,Rb as Vt,S as qn,Sa as b,Sb as ja,T as Xi,Ta as ct,Tb as ut,U as B,Ua as Re,Ub as Ue,V as $,Va as We,Vb as Kn,W as ba,Wa as Yn,Wb as To,X as m,Xa as Qi,Xb as Zn,Y as R,Ya as xo,Yb as nr,Z as l,Za as Be,Zb as me,_ as ln,_a as Ji,_b as za,a as f,aa as ve,ab as Na,ac as Q,b as ce,ba as ke,bb as Ro,bc as se,ca as be,cb as D,cc as $a,d as k,da as ye,db as W,dc as ir,e as ua,ea as Eo,eb as F,f as st,fa as wa,fb as oe,g as ha,ga as K,gb as Oe,h as yt,ha as E,hb as Mo,i as fa,ia as Ot,ib as Io,j as v,ja as Ca,jb as lt,k as le,ka as N,kb as J,l as Te,la as M,lb as we,m as $e,ma as Ft,mb as Ce,n as p,na as Yi,nb as Pa,o as Wi,oa as pe,ob as La,p as tt,pa as Xn,pb as Va,q as pa,qa as Da,qb as X,r as A,ra as dn,rb as _,s as at,sa as un,sb as y,t as wt,ta as hn,tb as ae,u as kt,ua as Ea,ub as gn,v as Gi,va as Sa,vb as _n,w as ma,wa as Nt,wb as Pt,x as ga,xa as Se,xb as Et,y as he,ya as C,yb as Fe,z as yo,za as L,zb as tr}from"./chunk-JXQ52XST.js";var Wa=null;function ht(){return Wa}function ko(n){Wa??=n}var Qn=class{},rr=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:()=>l(Ga),providedIn:"platform"})}return n})();var Ga=(()=>{class n extends rr{_location;_history;_doc=l(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ht().getBaseHref(this._doc)}onPopState(e){let t=ht().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=ht().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Ya(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function qa(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function St(n){return n&&n[0]!=="?"?`?${n}`:n}var or=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:()=>l(Ld),providedIn:"root"})}return n})(),Pd=new m(""),Ld=(()=>{class n extends or{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ya(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+St(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let s=this.prepareExternalUrl(r+St(o));this._platformLocation.pushState(e,t,s)}replaceState(e,t,r,o){let s=this.prepareExternalUrl(r+St(o));this._platformLocation.replaceState(e,t,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(R(rr),R(Pd,8))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var At=(()=>{class n{_subject=new v;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Ud(qa(Xa(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+St(t))}normalize(e){return n.stripTrailingSlash(Bd(this._basePath,Xa(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+St(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+St(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=St;static joinWithSlash=Ya;static stripTrailingSlash=qa;static \u0275fac=function(t){return new(t||n)(R(or))};static \u0275prov=B({token:n,factory:()=>Vd(),providedIn:"root"})}return n})();function Vd(){return new At(R(or))}function Bd(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Xa(n){return n.replace(/\/index\.html$/,"")}function Ud(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Bt=(()=>{class n{_viewContainer;_context=new sr;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Ka(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Ka(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(Qi(Be),Qi(ct))};static \u0275dir=F({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),sr=class{$implicit=null;ngIf=null};function Ka(n,i){if(n&&!n.createEmbeddedView)throw new I(2020,!1)}var Oo=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(K);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(Qi(Be))};static \u0275dir=F({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Nt]})}return n})();var it=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({})}return n})();function Fo(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var No="browser";function Za(n){return n===No}var Jn=class{_doc;constructor(i){this._doc=i}manager},ar=(()=>{class n extends Jn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(R(E))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),dr=new m(""),Uo=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof ar));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof ar);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new I(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(R(dr),R(M))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Lo="ng-app-id";function Qa(n){for(let i of n)i.remove()}function Ja(n,i){let e=i.createElement("style");return e.textContent=n,e}function zd(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Lo}="${i}"],link[${Lo}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Lo),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Bo(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var jo=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,zd(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Ja);t?.forEach(r=>this.addUsage(r,this.external,Bo))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Qa(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Qa(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Ja(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Bo(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(R(E),R(Xn),R(hn,8),R(dn))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Vo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},zo=/%COMP%/g;var tc="%COMP%",Hd=`_nghost-${tc}`,$d=`_ngcontent-${tc}`,Wd=!0,Gd=new m("",{factory:()=>Wd});function qd(n){return $d.replace(zo,n)}function Xd(n){return Hd.replace(zo,n)}function nc(n,i){return i.map(e=>e.replace(zo,n))}var ni=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,s,c,a=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=c,this.nonce=a,this.tracingService=d,this.defaultRenderer=new ei(e,s,c,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof lr?r.applyToHost(e):r instanceof ti&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let s=this.doc,c=this.ngZone,a=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(t.encapsulation){case Zi.Emulated:o=new lr(a,d,t,this.appId,u,s,c,h);break;case Zi.ShadowDom:return new cr(a,e,t,s,c,this.nonce,h,d);case Zi.ExperimentalIsolatedShadowDom:return new cr(a,e,t,s,c,this.nonce,h);default:o=new ti(a,d,t,u,s,c,h);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(R(Uo),R(Yn),R(Xn),R(Gd),R(E),R(M),R(hn),R(So,8))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),ei=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Vo[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ec(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(ec(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new I(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=Vo[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Vo[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(mn.DashCase|mn.Important)?i.style.setProperty(e,t,r&mn.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&mn.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=ht().getGlobalEventTarget(this.doc,i),!i))throw new I(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ec(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var cr=class extends ei{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,s,c,a){super(i,r,o,c),this.hostEl=e,this.sharedStylesHost=a,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=nc(t.id,d);for(let h of d){let g=document.createElement("style");s&&g.setAttribute("nonce",s),g.textContent=h,this.shadowRoot.appendChild(g)}let u=t.getExternalStyles?.();if(u)for(let h of u){let g=Bo(h,r);s&&g.setAttribute("nonce",s),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ti=class extends ei{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,s,c,a){super(i,o,s,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=a?nc(a,d):d,this.styleUrls=t.getExternalStyles?.(a)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Fa.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},lr=class extends ti{contentAttr;hostAttr;constructor(i,e,t,r,o,s,c,a){let d=r+"-"+t.id;super(i,e,t,o,s,c,a,d),this.contentAttr=qd(d),this.hostAttr=Xd(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var ur=class n extends Qn{supportsDOMEvents=!0;static makeCurrent(){ko(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Kd();return e==null?null:Zd(e)}resetBaseElement(){ii=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Fo(document.cookie,i)}},ii=null;function Kd(){return ii=ii||document.head.querySelector("base"),ii?ii.getAttribute("href"):null}function Zd(n){return new URL(n,document.baseURI).pathname}var ic=["alt","control","meta","shift"],Qd={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Jd={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},rc=(()=>{class n extends Jn{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let s=n.parseEventName(t),c=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ht().onAndCancel(e,s.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),s="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),s="code."),ic.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),s+=d+".")}),s+=o,t.length!=0||o.length===0)return null;let a={};return a.domEventName=r,a.fullKey=s,a}static matchEventFullKeyCode(e,t){let r=Qd[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ic.forEach(s=>{if(s!==r){let c=Jd[s];c(e)&&(o+=s+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(R(E))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})();function Ho(n,i,e){return k(this,null,function*(){let t=f({rootComponent:n},eu(i,e));return Ha(t)})}function eu(n,i){return{platformRef:i?.platformRef,appProviders:[...ou,...n?.providers??[]],platformProviders:ru}}function tu(){ur.makeCurrent()}function nu(){return new Ft}function iu(){return Aa(document),document}var ru=[{provide:dn,useValue:No},{provide:Da,useValue:tu,multi:!0},{provide:E,useFactory:iu}];var ou=[{provide:ya,useValue:"root"},{provide:Ft,useFactory:nu},{provide:dr,useClass:ar,multi:!0},{provide:dr,useClass:rc,multi:!0},ni,{provide:Yn,useClass:jo},{provide:jo,useExisting:Yn},Uo,{provide:Re,useExisting:ni},[]];var pt=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(c=>o.indexOf(c)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Go=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},qo=class{encodeKey(i){return oc(i)}encodeValue(i){return oc(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function su(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,c]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],a=e.get(s)||[];a.push(c),e.set(s,a)}),e}var au=/%(\d[a-f0-9])/gi,cu={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function oc(n){return encodeURIComponent(n).replace(au,(i,e)=>cu[e]??i)}function hr(n){return`${n}`}var ft=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new qo,i.fromString){if(i.fromObject)throw new I(2805,!1);this.map=su(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(hr):[hr(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(hr(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],r=t.indexOf(hr(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function lu(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function sc(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ac(n){return typeof Blob<"u"&&n instanceof Blob}function cc(n){return typeof FormData<"u"&&n instanceof FormData}function du(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var $o="Content-Type",lc="Accept",uc="text/plain",hc="application/json",uu=`${hc}, ${uc}, */*`,vn=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(lu(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new I(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new pt,this.context??=new Go,!this.params)this.params=new ft,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let c=e,a="",d=e.indexOf("#");d!==-1&&(a=e.substring(d),c=e.substring(0,d));let u=c.indexOf("?"),h=u===-1?"?":u<c.length-1?"&":"";this.urlWithParams=c+h+s+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||sc(this.body)||ac(this.body)||cc(this.body)||du(this.body)?this.body:this.body instanceof ft?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||cc(this.body)?null:ac(this.body)?this.body.type||null:sc(this.body)?null:typeof this.body=="string"?uc:this.body instanceof ft?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?hc:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,s=i.priority||this.priority,c=i.cache||this.cache,a=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,h=i.referrer??this.referrer,g=i.integrity||this.integrity,Y=i.referrerPolicy||this.referrerPolicy,Z=i.transferCache??this.transferCache,H=i.timeout??this.timeout,te=i.body!==void 0?i.body:this.body,Le=i.withCredentials??this.withCredentials,Ve=i.reportProgress??this.reportProgress,_e=i.reportUploadProgress??this.reportUploadProgress,on=i.reportDownloadProgress??this.reportDownloadProgress,Hn=i.headers||this.headers,It=i.params||this.params,$i=i.context??this.context;return i.setHeaders!==void 0&&(Hn=Object.keys(i.setHeaders).reduce((sn,Tt)=>sn.set(Tt,i.setHeaders[Tt]),Hn)),i.setParams&&(It=Object.keys(i.setParams).reduce((sn,Tt)=>sn.set(Tt,i.setParams[Tt]),It)),new n(e,t,te,{params:It,headers:Hn,context:$i,reportProgress:Ve,reportUploadProgress:_e,reportDownloadProgress:on,responseType:r,withCredentials:Le,transferCache:Z,keepalive:o,cache:c,priority:s,timeout:H,mode:a,redirect:d,credentials:u,referrer:h,integrity:g,referrerPolicy:Y})}},bn=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(bn||{}),ri=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new pt,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Xo=class n extends ri{constructor(i={}){super(i)}type=bn.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},oi=class n extends ri{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=bn.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Ut=class extends ri{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},hu=200;var fu=/^\)\]\}',?\n/,$_=1024*1024,pu=new m("",{factory:()=>null}),mu=(()=>{class n{fetchImpl=l(Yo,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(M);destroyRef=l(Ot);maxResponseSize=l(pu);handle(e){return new yt(t=>{let r=new AbortController;this.doRequest(e,r.signal,t).then(Ko,s=>t.error(new Ut({error:s})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}doRequest(e,t,r){return k(this,null,function*(){let o=this.createRequestInit(e),s;try{let te=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,f({signal:t},o)));gu(te),r.next({type:bn.Sent}),s=yield te}catch(te){r.error(new Ut({error:te,status:te.status??0,statusText:te.statusText,url:e.urlWithParams,headers:te.headers}));return}let c=new pt(s.headers),a=s.statusText,d=s.url||e.urlWithParams,u=s.status,h=null,g=e.reportProgress||e.reportDownloadProgress;if(g&&r.next(new Xo({headers:c,status:u,statusText:a,url:d})),s.body){let te=s.headers.get("content-length"),Le=te!==null?Number(te):NaN;this.maxResponseSize!==null&&Number.isFinite(Le)&&Le>this.maxResponseSize&&dc(this.maxResponseSize);let Ve=[],_e=s.body.getReader(),on=0,Hn,It,$i=typeof Zone<"u"&&Zone.current,sn=!1;if(yield this.ngZone.runOutsideAngular(()=>k(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield _e.cancel(),sn=!0;break}let{done:$n,value:bo}=yield _e.read();if($n)break;if(Ve.push(bo),on+=bo.length,this.maxResponseSize!==null&&on>this.maxResponseSize&&(yield _e.cancel(),dc(this.maxResponseSize)),g){It=e.responseType==="text"?(It??"")+(Hn??=new TextDecoder).decode(bo,{stream:!0}):void 0;let da=()=>r.next({type:bn.DownloadProgress,total:Number.isFinite(Le)?Le:void 0,loaded:on,partialText:It});$i?$i.run(da):da()}}})),sn){r.complete();return}let Tt=this.concatChunks(Ve,on);try{let $n=s.headers.get($o)??"";h=this.parseBody(e,Tt,$n,u)}catch($n){r.error(new Ut({error:$n,headers:new pt(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}u===0&&(u=h?hu:0);let Y=u>=200&&u<300,Z=s.redirected,H=s.type;Y?(r.next(new oi({body:h,headers:c,status:u,statusText:a,url:d,redirected:Z,responseType:H})),r.complete()):r.error(new Ut({error:h,headers:c,status:u,statusText:a,url:d,redirected:Z,responseType:H}))})}parseBody(e,t,r,o){switch(e.responseType){case"json":let s=new TextDecoder().decode(t).replace(fu,"");if(s==="")return null;try{return JSON.parse(s)}catch(c){if(o<200||o>=300)return s;throw c}case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new I(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,s)=>t[o]=s.join(",")),e.headers.has(lc)||(t[lc]=uu),!e.headers.has($o)){let o=e.detectContentTypeHeader();o!==null&&(t[$o]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Yo=class{};function Ko(){}function gu(n){n.then(Ko,Ko)}function dc(n){throw new I(-2825,!1)}function _u(n,i){return i(n)}function vu(n,i,e){return(t,r)=>ke(e,()=>i(t,o=>n(o,r)))}var bu=new m("",{factory:()=>[]}),fc=new m(""),yu=new m("",{factory:()=>!0});var wu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=R(mu),r},providedIn:"root"})}return n})();var Cu=(()=>{class n{backend;injector;chain=null;pendingTasks=l(Sa);contributeToStability=l(yu);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(bu),...this.injector.get(fc,[])]));this.chain=r.reduceRight((o,s)=>vu(o,s,this.injector),_u)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return Ue(()=>t(e,o=>this.backend.handle(o))).pipe(cn(r))}else return Ue(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||n)(R(wu),R(ve))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Du=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=R(Cu),r},providedIn:"root"})}return n})();function Wo(n,i){return f({body:i},n)}var Zo=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof vn)o=e;else{let a;r.headers instanceof pt?a=r.headers:a=new pt(r.headers);let d;r.params&&(r.params instanceof ft?d=r.params:d=new ft({fromObject:r.params})),o=new vn(e,t,r.body!==void 0?r.body:null,{headers:a,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=p(o).pipe(Ct(a=>this.handler.handle(a)));if(e instanceof vn||r.observe==="events")return s;let c=s.pipe(he(a=>a instanceof oi));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(A(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new I(2806,!1);return a.body}));case"blob":return c.pipe(A(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new I(2807,!1);return a.body}));case"text":return c.pipe(A(a=>{if(a.body!==null&&typeof a.body!="string")throw new I(2808,!1);return a.body}));default:return c.pipe(A(a=>a.body))}case"response":return c;default:throw new I(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new ft().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,Wo(r,t))}post(e,t,r={}){return this.request("POST",e,Wo(r,t))}put(e,t,r={}){return this.request("PUT",e,Wo(r,t))}static \u0275fac=function(t){return new(t||n)(R(Du))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var pc=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(R(E))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var si=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=R(xu),r},providedIn:"root"})}return n})(),xu=(()=>{class n extends si{_doc=l(E);sanitize(e,t){if(t==null)return null;switch(e){case Ae.NONE:return t;case Ae.HTML:return pn(t,"HTML")?fn(t):Oa(this._doc,String(t)).toString();case Ae.STYLE:return pn(t,"Style")?fn(t):t;case Ae.SCRIPT:if(pn(t,"Script"))return fn(t);throw new I(5200,!1);case Ae.URL:return pn(t,"URL")?fn(t):ka(String(t));case Ae.RESOURCE_URL:if(pn(t,"ResourceURL"))return fn(t);throw new I(-5201,!1);default:throw new I(5202,!1)}}bypassSecurityTrustHtml(e){return xa(e)}bypassSecurityTrustStyle(e){return Ra(e)}bypassSecurityTrustScript(e){return Ma(e)}bypassSecurityTrustUrl(e){return Ia(e)}bypassSecurityTrustResourceUrl(e){return Ta(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var x="primary",yi=Symbol("RouteTitle"),ns=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function zt(n){return new ns(n)}function Qo(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Ec(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let a={},d=n.slice(0,t.length);return Qo(t,d,a)?{consumed:d,posParams:a}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),s=t.slice(r+1);if(o.length+s.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let c={};return!Qo(o,n.slice(0,o.length),c)||!Qo(s,n.slice(n.length-s.length),c)?null:{consumed:n,posParams:c}}function vr(n){return new Promise((i,e)=>{n.pipe(Dt()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Ru(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!rt(n[e],i[e]))return!1;return!0}function rt(n,i){let e=n?is(n):void 0,t=i?is(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Sc(n[r],i[r]))return!1;return!0}function is(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Sc(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function Mu(n){return n.length>0?n[n.length-1]:null}function Wt(n){return tt(n)?n:Ji(n)?$e(Promise.resolve(n)):p(n)}function Ac(n){return tt(n)?vr(n):Promise.resolve(n)}var Iu={exact:Mc,subset:Ic},xc={exact:Tu,subset:ku,ignored:()=>!0},Rc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},rs={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function gc(n,i,e){return Iu[e.paths](n.root,i.root,e.matrixParams)&&xc[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function Tu(n,i){return rt(n,i)}function Mc(n,i,e){if(!jt(n.segments,i.segments)||!mr(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Mc(n.children[t],i.children[t],e))return!1;return!0}function ku(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Sc(n[e],i[e]))}function Ic(n,i,e){return Tc(n,i,i.segments,e)}function Tc(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!jt(r,e)||i.hasChildren()||!mr(r,e,t))}else if(n.segments.length===e.length){if(!jt(n.segments,e)||!mr(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Ic(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!jt(n.segments,r)||!mr(n.segments,r,t)||!n.children[x]?!1:Tc(n.children[x],i,o,t)}}function mr(n,i,e){return i.every((t,r)=>xc[e](n[r].parameters,t.parameters))}var Xe=class{root;queryParams;fragment;_queryParamMap;constructor(i=new V([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=zt(this.queryParams),this._queryParamMap}toString(){return Nu.serialize(this)}},V=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return gr(this)}},xt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=zt(this.parameters),this._parameterMap}toString(){return Oc(this)}};function Ou(n,i){return jt(n,i)&&n.every((e,t)=>rt(e.parameters,i[t].parameters))}function jt(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function Fu(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===x&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==x&&(e=e.concat(i(r,t)))}),e}var wi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>new Rt})}return n})(),Rt=class{parse(i){let e=new ss(i);return new Xe(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${ai(i.root,!0)}`,t=Vu(i.queryParams),r=typeof i.fragment=="string"?`#${Pu(i.fragment)}`:"";return`${e}${t}${r}`}},Nu=new Rt;function gr(n){return n.segments.map(i=>Oc(i)).join("/")}function ai(n,i){if(!n.hasChildren())return gr(n);if(i){let e=n.children[x]?ai(n.children[x],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==x&&t.push(`${r}:${ai(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Fu(n,(t,r)=>r===x?[ai(n.children[x],!1)]:[`${r}:${ai(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[x]!=null?`${gr(n)}/${e[0]}`:`${gr(n)}/(${e.join("//")})`}}function kc(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function fr(n){return kc(n).replace(/%3B/gi,";")}function Pu(n){return encodeURI(n)}function os(n){return kc(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _r(n){return decodeURIComponent(n)}function _c(n){return _r(n.replace(/\+/g,"%20"))}function Oc(n){return`${os(n.path)}${Lu(n.parameters)}`}function Lu(n){return Object.entries(n).map(([i,e])=>`;${os(i)}=${os(e)}`).join("")}function Vu(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${fr(e)}=${fr(r)}`).join("&"):`${fr(e)}=${fr(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Bu=/^[^\/()?;#]+/;function Jo(n){let i=n.match(Bu);return i?i[0]:""}var Uu=/^[^\/()?;=#]+/;function ju(n){let i=n.match(Uu);return i?i[0]:""}var zu=/^[^=?&#]+/;function Hu(n){let i=n.match(zu);return i?i[0]:""}var $u=/^[^&#]+/;function Wu(n){let i=n.match($u);return i?i[0]:""}var ss=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new V([],{}):new V([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new I(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[x]=new V(e,t)),r}parseSegment(){let i=Jo(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new I(4009,!1);return this.capture(i),new xt(_r(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=ju(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Jo(this.remaining);r&&(t=r,this.capture(t))}i[_r(e)]=_r(t)}parseQueryParam(i){let e=Hu(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let s=Wu(this.remaining);s&&(t=s,this.capture(t))}let r=_c(e),o=_c(t);if(Object.hasOwn(i,r)){let s=i[r];Array.isArray(s)||(s=[s],i[r]=s),s.push(o)}else i[r]=o}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Jo(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new I(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):i&&(s=x);let c=this.parseChildren(e+1);t[s??x]=Object.keys(c).length===1&&c[x]?c[x]:new V([],c),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new I(4011,!1)}};function Fc(n){return n.segments.length>0?new V([],{[x]:n}):n}function Nc(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let o=Nc(r);if(t===x&&o.segments.length===0&&o.hasChildren())for(let[s,c]of Object.entries(o.children))i[s]=c;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new V(n.segments,i);return Gu(e)}function Gu(n){if(n.numberOfChildren===1&&n.children[x]){let i=n.children[x];return new V(n.segments.concat(i.segments),i.children)}return n}function Dn(n){return n instanceof Xe}function Pc(n,i,e=null,t=null,r=new Rt){let o=Lc(n);return Vc(o,i,e,t,r)}function Lc(n){let i;function e(o){let s={};for(let a of o.children){let d=e(a);s[a.outlet]=d}let c=new V(o.url,s);return o===n&&(i=c),c}let t=e(n.root),r=Fc(t);return i??r}function Vc(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return es(o,o,o,e,t,r);let s=qu(i);if(s.toRoot())return es(o,o,new V([],{}),e,t,r);let c=Xu(s,o,n),a=c.processChildren?li(c.segmentGroup,c.index,s.commands):Uc(c.segmentGroup,c.index,s.commands);return es(o,c.segmentGroup,a,e,t,r)}function br(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function hi(n){return typeof n=="object"&&n!=null&&n.outlets}function vc(n,i,e){n||="\u0275";let t=new Xe;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function es(n,i,e,t,r,o){let s={};for(let[d,u]of Object.entries(t??{}))s[d]=Array.isArray(u)?u.map(h=>vc(d,h,o)):vc(d,u,o);let c;n===i?c=e:c=Bc(n,i,e);let a=Fc(Nc(c));return new Xe(a,s,r)}function Bc(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Bc(o,i,e)}),new V(n.segments,t)}var yr=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&br(t[0]))throw new I(4003,!1);let r=t.find(hi);if(r&&r!==Mu(t))throw new I(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function qu(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new yr(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([a,d])=>{c[a]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:c}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((c,a)=>{a==0&&c==="."||(a==0&&c===""?e=!0:c===".."?i++:c!=""&&r.push(c))}),r):[...r,o]},[]);return new yr(e,i,t)}var wn=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Xu(n,i,e){if(n.isAbsolute)return new wn(i,!0,0);if(!e)return new wn(i,!1,NaN);if(e.parent===null)return new wn(e,!0,0);let t=br(n.commands[0])?0:1,r=e.segments.length-1+t;return Yu(e,r,n.numberOfDoubleDots)}function Yu(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new I(4005,!1);r=t.segments.length}return new wn(t,!1,r-o)}function Ku(n){return hi(n[0])?n[0].outlets:{[x]:n}}function Uc(n,i,e){if(n??=new V([],{}),n.segments.length===0&&n.hasChildren())return li(n,i,e);let t=Zu(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new V(n.segments.slice(0,t.pathIndex),{});return o.children[x]=new V(n.segments.slice(t.pathIndex),n.children),li(o,0,r)}else return t.match&&r.length===0?new V(n.segments,{}):t.match&&!n.hasChildren()?as(n,i,e):t.match?li(n,0,r):as(n,i,e)}function li(n,i,e){if(e.length===0)return new V(n.segments,{});{let t=Ku(e),r=Object.create(null);if(Object.keys(t).some(o=>o!==x)&&n.children[x]&&n.numberOfChildren===1&&n.children[x].segments.length===0){let o=li(n.children[x],i,e);return new V(n.segments,o.children)}return Object.entries(t).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=Uc(n.children[o],i,s))}),Object.entries(n.children).forEach(([o,s])=>{t[o]===void 0&&(r[o]=s)}),new V(n.segments,r)}}function Zu(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let s=n.segments[r],c=e[t];if(hi(c))break;let a=`${c}`,d=t<e.length-1?e[t+1]:null;if(r>0&&a===void 0)break;if(a&&d&&typeof d=="object"&&d.outlets===void 0){if(!yc(a,d,s))return o;t+=2}else{if(!yc(a,{},s))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function as(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(hi(o)){let a=Qu(o.outlets);return new V(t,a)}if(r===0&&br(e[0])){let a=n.segments[i];t.push(new xt(a.path,bc(e[0]))),r++;continue}let s=hi(o)?o.outlets[x]:`${o}`,c=r<e.length-1?e[r+1]:null;s&&c&&br(c)?(t.push(new xt(s,bc(c))),r+=2):(t.push(new xt(s,{})),r++)}return new V(t,{})}function Qu(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=as(new V([],{}),0,t))}),i}function bc(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function yc(n,i,e){return n==e.path&&rt(i,e.parameters)}var di="imperative",ge=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(ge||{}),ze=class{id;url;constructor(i,e){this.id=i,this.url=e}},Ht=class extends ze{type=ge.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},gt=class extends ze{urlAfterRedirects;type=ge.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ee=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Ee||{}),fi=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(fi||{}),qe=class extends ze{reason;code;type=ge.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function jc(n){return n instanceof qe&&(n.code===Ee.Redirect||n.code===Ee.SupersededByNewNavigation)}var _t=class extends ze{reason;code;type=ge.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},$t=class extends ze{error;target;type=ge.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},pi=class extends ze{urlAfterRedirects;state;type=ge.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wr=class extends ze{urlAfterRedirects;state;type=ge.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cr=class extends ze{urlAfterRedirects;state;shouldActivate;type=ge.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Dr=class extends ze{urlAfterRedirects;state;type=ge.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Er=class extends ze{urlAfterRedirects;state;type=ge.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Sr=class{route;type=ge.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ar=class{route;type=ge.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},xr=class{snapshot;type=ge.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Rr=class{snapshot;type=ge.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mr=class{snapshot;type=ge.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ir=class{snapshot;type=ge.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var En=class{},mi=class{},Sn=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Ju(n){return!(n instanceof En)&&!(n instanceof Sn)&&!(n instanceof mi)}var Tr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Mn(this.rootInjector)}},Mn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Tr(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(R(ve))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kr=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=cs(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=cs(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=ls(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return ls(i,this._root).map(e=>e.value)}};function cs(n,i){if(n===i.value)return i;for(let e of i.children){let t=cs(n,e);if(t)return t}return null}function ls(n,i){if(n===i.value)return[i];for(let e of i.children){let t=ls(n,e);if(t.length)return t.unshift(i),t}return[]}var je=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function yn(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var gi=class extends kr{snapshot;constructor(i,e){super(i),this.snapshot=e,vs(this,i)}toString(){return this.snapshot.toString()}};function zc(n,i){let e=eh(n,i),t=new le([new xt("",{})]),r=new le({}),o=new le({}),s=new le({}),c=new le(""),a=new Mt(t,r,s,c,o,x,n,e.root);return a.snapshot=e.root,new gi(new je(a,[]),e)}function eh(n,i){let e={},t={},r={},s=new An([],e,r,"",t,x,n,null,{},i);return new _i("",new je(s,[]))}var Mt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(i,e,t,r,o,s,c,a){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=c,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(A(d=>d[yi]))??p(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(A(i=>zt(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(A(i=>zt(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},th="always";function _s(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:f(f({},i.params),n.params),data:f(f({},i.data),n.data),resolve:f(f(f(f({},n.data),i.data),r?.data),n._resolvedData)}:t={params:f({},n.params),data:f({},n.data),resolve:f(f({},n.data),n._resolvedData??{})},r&&$c(r)&&(t.resolve[yi]=r.title),t}var An=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[yi]}constructor(i,e,t,r,o,s,c,a,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=s,this.component=c,this.routeConfig=a,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=zt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=zt(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},_i=class extends kr{url;constructor(i,e){super(e),this.url=i,vs(this,e)}toString(){return Hc(this._root)}};function vs(n,i){i.value._routerState=n,i.children.forEach(e=>vs(n,e))}function Hc(n){let i=n.children.length>0?` { ${n.children.map(Hc).join(", ")} } `:"";return`${n.value}${i}`}function ts(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,rt(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),rt(i.params,e.params)||n.paramsSubject.next(e.params),Ru(i.url,e.url)||n.urlSubject.next(e.url),rt(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ds(n,i){let e=rt(n.params,i.params)&&Ou(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||ds(n.parent,i.parent))}function $c(n){return typeof n.title=="string"||n.title===null}var Wc=new m(""),Ci=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=x;activateEvents=new N;deactivateEvents=new N;attachEvents=new N;detachEvents=new N;routerOutletData=Zn();parentContexts=l(Mn);location=l(Be);changeDetector=l(me);inputBinder=l(Pr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new I(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new I(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new I(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new I(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,a=new us(e,c,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:a,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Nt]})}return n})(),us=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===Mt?this.route:i===Mn?this.childContexts:i===Wc?this.outletData:this.parent.get(i,e)}},Pr=new m("");var bs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&ae(0,"router-outlet")},dependencies:[Ci],encapsulation:2,changeDetection:1})}return n})();function ys(n){let i=n.children&&n.children.map(ys),e=i?ce(f({},n),{children:i}):f({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==x&&(e.component=bs),e}function nh(n,i,e){let t=new Set,r=vi(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new gi(r,i)}}function vi(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=i.value;let o=ih(n,i,e,t);return new je(r,o)}else{if(n.shouldAttach(i.value)){let s=n.retrieve(i.value);if(s!==null){let c=s.route;return c.value._futureSnapshot=i.value,c.children=i.children.map(a=>vi(n,a,void 0,t)),c}}let r=rh(i.value);t.add(r);let o=i.children.map(s=>vi(n,s,void 0,t));return new je(r,o)}}function ih(n,i,e,t){return i.children.map(r=>{for(let o of e.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return vi(n,r,o,t);return vi(n,r,void 0,t)})}function rh(n){return new Mt(new le(n.url),new le(n.params),new le(n.queryParams),new le(n.fragment),new le(n.data),n.outlet,n.component,n)}var xn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Gc="ngNavigationCancelingError";function Or(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Dn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=qc(!1,Ee.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function qc(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Gc]=!0,e.cancellationCode=i,e}function oh(n){return Xc(n)&&Dn(n.url)}function Xc(n){return!!n&&n[Gc]}var hs=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),ts(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=yn(e);i.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],t),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let s=t.getContext(r.outlet);s&&this.deactivateChildRoutes(i,e,s.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=yn(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(t&&t.outlet){let s=t.outlet.detach(),c=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:s,route:i,contexts:c})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=yn(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=yn(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new Ir(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Rr(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(ts(r),r===o)if(r.component){let s=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,s.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let s=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let c=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),ts(c.route.value),this.activateChildRoutes(i,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(i,null,s.children)}else this.activateChildRoutes(i,null,t)}},Fr=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Cn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function sh(n,i,e){let t=n._root,r=i?i._root:null;return ci(t,r,e,[t.value])}function ah(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function In(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!ba(n)?n:i.get(n):t}function ci(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=yn(i);return n.children.forEach(s=>{ch(s,o[s.value.outlet],e,t.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,c])=>ui(c,e.getContext(s),r)),r}function ch(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=i?i.value:null,c=e?e.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let a=lh(s,o,o.routeConfig.runGuardsAndResolvers);a?r.canActivateChecks.push(new Fr(t)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ci(n,i,c?c.children:null,t,r):ci(n,i,e,t,r),a&&c&&c.outlet&&c.outlet.isActivated&&r.canDeactivateChecks.push(new Cn(c.outlet.component,s))}else s&&ui(i,c,r),r.canActivateChecks.push(new Fr(t)),o.component?ci(n,null,c?c.children:null,t,r):ci(n,null,e,t,r);return r}function lh(n,i,e){if(typeof e=="function")return ke(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!jt(n.url,i.url);case"pathParamsOrQueryParamsChange":return!jt(n.url,i.url)||!rt(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ds(n,i)||!rt(n.queryParams,i.queryParams);default:return!ds(n,i)}}function ui(n,i,e){let t=yn(n),r=n.value;Object.entries(t).forEach(([o,s])=>{r.component?i?ui(s,i.children.getContext(o),e):ui(s,null,e):ui(s,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Cn(i.outlet.component,r)):e.canDeactivateChecks.push(new Cn(null,r)):e.canDeactivateChecks.push(new Cn(null,r))}function Di(n){return typeof n=="function"}function dh(n){return typeof n=="boolean"}function uh(n){return n&&Di(n.canLoad)}function hh(n){return n&&Di(n.canActivate)}function fh(n){return n&&Di(n.canActivateChild)}function ph(n){return n&&Di(n.canDeactivate)}function mh(n){return n&&Di(n.canMatch)}function Yc(n){return n instanceof pa||n?.name==="EmptyError"}var pr=Symbol("INITIAL_VALUE");function Rn(){return fe(n=>at(n.map(i=>i.pipe(ie(1),Ze(pr)))).pipe(A(i=>{for(let e of i)if(e!==!0){if(e===pr)return pr;if(e===!1||gh(e))return e}return!0}),he(i=>i!==pr),ie(1)))}function gh(n){return Dn(n)||n instanceof xn}function Kc(n){return n.aborted?p(void 0).pipe(ie(1)):new yt(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Zc(n){return z(Kc(n))}function _h(n){return wt(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?p(ce(f({},i),{guardsResult:!0})):vh(o,e,t).pipe(wt(s=>s&&dh(s)?bh(e,r,n):p(s)),A(s=>ce(f({},i),{guardsResult:s})))})}function vh(n,i,e){return $e(n).pipe(wt(t=>Eh(t.component,t.route,e,i)),Dt(t=>t!==!0,!0))}function bh(n,i,e){return $e(i).pipe(Ct(t=>kt(wh(t.route.parent,e),yh(t.route,e),Dh(n,t.path),Ch(n,t.route))),Dt(t=>t!==!0,!0))}function yh(n,i){return n!==null&&i&&i(new Mr(n)),p(!0)}function wh(n,i){return n!==null&&i&&i(new xr(n)),p(!0)}function Ch(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return p(!0);let t=e.map(r=>Gi(()=>{let o=i._environmentInjector,s=In(r,o),c=hh(s)?s.canActivate(i,n):ke(o,()=>s(i,n));return Wt(c).pipe(Dt())}));return p(t).pipe(Rn())}function Dh(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>ah(o)).filter(o=>o!==null).map(o=>Gi(()=>{let s=o.guards.map(c=>{let a=o.node._environmentInjector,d=In(c,a),u=fh(d)?d.canActivateChild(e,n):ke(a,()=>d(e,n));return Wt(u).pipe(Dt())});return p(s).pipe(Rn())}));return p(r).pipe(Rn())}function Eh(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return p(!0);let o=r.map(s=>{let c=i._environmentInjector,a=In(s,c),d=ph(a)?a.canDeactivate(n,i,e,t):ke(c,()=>a(n,i,e,t));return Wt(d).pipe(Dt())});return p(o).pipe(Rn())}function Sh(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return p(!0);let s=o.map(c=>{let a=In(c,n),d=uh(a)?a.canLoad(i,e):ke(n,()=>a(i,e)),u=Wt(d);return r?u.pipe(Zc(r)):u});return p(s).pipe(Rn(),Qc(t))}function Qc(n){return ha(re(i=>{if(typeof i!="boolean")throw Or(n,i)}),A(i=>i===!0))}function Ah(n,i,e,t,r,o){let s=i.canMatch;if(!s||s.length===0)return p(!0);let c=s.map(a=>{let d=In(a,n),u=mh(d)?d.canMatch(i,e,r):ke(n,()=>d(i,e,r));return Wt(u).pipe(Zc(o))});return p(c).pipe(Rn(),Qc(t))}var mt=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},bi=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function xh(n){throw new I(4e3,!1)}function Rh(n){throw qc(!1,Ee.GuardRejected)}var fs=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){return k(this,null,function*(){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[x])throw xh(`${i.redirectTo}`);r=r.children[x]}})}applyRedirectCommands(i,e,t,r,o){return k(this,null,function*(){let s=yield Mh(e,r,o);if(s instanceof Xe)throw new bi(s);let c=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),i,t);if(s[0]==="/")throw new bi(c);return c})}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new Xe(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let c=o.substring(1);t[r]=e[c]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),s=Object.create(null);return Object.entries(e.children).forEach(([c,a])=>{s[c]=this.createSegmentGroup(i,a,t,r)}),new V(o,s)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new I(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function Mh(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return vr(Wt(ke(e,()=>t(i))))}function Ih(n,i){return n.providers&&!n._injector&&(n._injector=Ro(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Je(n){return n.outlet||x}function Th(n,i){let e=n.filter(t=>Je(t)===i);return e.push(...n.filter(t=>Je(t)!==i)),e}var ps={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Jc(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function kh(n,i,e,t,r,o,s){let c=el(n,i,e);if(!c.matched)return p(c);let a=Jc(o(c));return t=Ih(i,t),Ah(t,i,e,r,a,s).pipe(A(d=>d===!0?c:f({},ps)))}function el(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?f({},ps):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Ec)(e,n,i);if(!r)return f({},ps);let o={};Object.entries(r.posParams??{}).forEach(([c,a])=>{o[c]=a.path});let s=r.consumed.length>0?f(f({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function wc(n,i,e,t,r){return e.length>0&&Nh(n,e,t,r)?{segmentGroup:new V(i,Fh(t,new V(e,n.children))),slicedSegments:[]}:e.length===0&&Ph(n,e,t)?{segmentGroup:new V(n.segments,Oh(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new V(n.segments,n.children),slicedSegments:e}}function Oh(n,i,e,t){let r={};for(let o of e)if(Lr(n,i,o)&&!t[Je(o)]){let s=new V([],{});r[Je(o)]=s}return f(f({},t),r)}function Fh(n,i){let e={};e[x]=i;for(let t of n)if(t.path===""&&Je(t)!==x){let r=new V([],{});e[Je(t)]=r}return e}function Nh(n,i,e,t){return e.some(r=>!Lr(n,i,r)||!(Je(r)!==x)?!1:!(t!==void 0&&Je(r)===t))}function Ph(n,i,e){return e.some(t=>Lr(n,i,t))}function Lr(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Lh(n,i,e){return i.length===0&&!n.children[e]}var ms=class{};function Vh(n,i,e,t,r,o,s,c){return k(this,null,function*(){return new gs(n,i,e,t,r,s,o,c).recognize()})}var Bh=31,gs=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,s,c,a){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.abortSignal=a,this.applyRedirects=new fs(this.urlSerializer,this.urlTree)}noMatchError(i){return new I(4002,`'${i.segmentGroup}'`)}recognize(){return k(this,null,function*(){let i=wc(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(i),r=new je(t,e),o=new _i("",r),s=Pc(t,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(i){return k(this,null,function*(){let e=new An([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),x,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,i,x,e),rootSnapshot:e}}catch(t){if(t instanceof bi)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof mt?this.noMatchError(t):t}})}processSegmentGroup(i,e,t,r,o){return k(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let s=yield this.processSegment(i,e,t,t.segments,r,!0,o);return s instanceof je?[s]:[]})}processChildren(i,e,t,r){return k(this,null,function*(){let o=[];for(let a of Object.keys(t.children))a==="primary"?o.unshift(a):o.push(a);let s=[];for(let a of o){let d=t.children[a],u=Th(e,a),h=yield this.processSegmentGroup(i,u,d,a,r);s.push(...h)}let c=tl(s);return Uh(c),c})}processSegment(i,e,t,r,o,s,c){return k(this,null,function*(){for(let a of e)try{return yield this.processSegmentAgainstRoute(a._injector??i,e,a,t,r,o,s,c)}catch(d){if(d instanceof mt||Yc(d))continue;throw d}if(Lh(t,r,o))return new ms;throw new mt(t)})}processSegmentAgainstRoute(i,e,t,r,o,s,c,a){return k(this,null,function*(){if(Je(t)!==s&&(s===x||!Lr(r,o,t)))throw new mt(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,s,a);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,s,a);throw new mt(r)})}expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,s,c){return k(this,null,function*(){let{matched:a,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:g}=el(e,r,o);if(!a)throw new mt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Bh&&(this.allowRedirects=!1));let Y=this.createSnapshot(i,r,o,d,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Z=yield this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,Jc(Y),i),H=yield this.applyRedirects.lineralizeSegments(r,Z);return this.processSegment(i,t,e,H.concat(g),s,!1,c)})}createSnapshot(i,e,t,r,o){let s=new An(t,r,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,zh(e),Je(e),e.component??e._loadedComponent??null,e,Hh(e),i),c=_s(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(c.params),s.data=Object.freeze(c.data),s}matchSegmentAgainstRoute(i,e,t,r,o,s){return k(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=_e=>this.createSnapshot(i,t,_e.consumedSegments,_e.parameters,s),a=yield vr(kh(e,t,r,i,this.urlSerializer,c,this.abortSignal));if(t.path==="**"&&(e.children={}),!a?.matched)throw new mt(e);i=t._injector??i;let{routes:d}=yield this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:h,consumedSegments:g,remainingSegments:Y}=a,Z=this.createSnapshot(i,t,g,h,s),{segmentGroup:H,slicedSegments:te}=wc(e,g,Y,d,o);if(te.length===0&&H.hasChildren()){let _e=yield this.processChildren(u,d,H,Z);return new je(Z,_e)}if(d.length===0&&te.length===0)return new je(Z,[]);let Le=Je(t)===o,Ve=yield this.processSegment(u,d,H,te,Le?x:o,!0,Z);return new je(Z,Ve instanceof je?[Ve]:[])})}getChildConfig(i,e,t){return k(this,null,function*(){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield vr(Sh(i,e,t,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Rh(e)}return{routes:[],injector:i}})}};function Uh(n){n.sort((i,e)=>i.value.outlet===x?-1:e.value.outlet===x?1:i.value.outlet.localeCompare(e.value.outlet))}function jh(n){let i=n.value.routeConfig;return i&&i.path===""}function tl(n){let i=[],e=new Set;for(let t of n){if(!jh(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=tl(t.children);i.push(new je(t.value,r))}return i.filter(t=>!e.has(t))}function zh(n){return n.data||{}}function Hh(n){return n.resolve||{}}function $h(n,i,e,t,r,o,s){return wt(c=>k(null,null,function*(){let{state:a,tree:d}=yield Vh(n,i,e,t,c.extractedUrl,r,o,s);return ce(f({},c),{targetSnapshot:a,urlAfterRedirects:d})}))}function Wh(n){return wt(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return p(i);let r=new Set(t.map(c=>c.route)),o=new Set;for(let c of r)if(!o.has(c))for(let a of nl(c))o.add(a);let s=0;return $e(o).pipe(Ct(c=>r.has(c)?Gh(c,e,n):(c.data=_s(c,c.parent,n).resolve,p(void 0))),re(()=>s++),Do(1),wt(c=>s===o.size?p(i):Te))})}function nl(n){let i=n.children.map(e=>nl(e)).flat();return[n,...i]}function Gh(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!$c(t)&&(r[yi]=t.title),Gi(()=>(n.data=_s(n,n.parent,e).resolve,qh(r,n,i).pipe(A(o=>(n._resolvedData=o,n.data=f(f({},n.data),o),null)))))}function qh(n,i,e){let t=is(n);if(t.length===0)return p({});let r={};return $e(t).pipe(wt(o=>Xh(n[o],i,e).pipe(Dt(),re(s=>{if(s instanceof xn)throw Or(new Rt,s);r[o]=s}))),Do(1),A(()=>r),Wn(o=>Yc(o)?Te:Wi(o)))}function Xh(n,i,e){let t=i._environmentInjector,r=In(n,t),o=r.resolve?r.resolve(i,e):ke(t,()=>r(i,e));return Wt(o)}function Cc(n){return fe(i=>{let e=n(i);return e?$e(e).pipe(A(()=>i)):p(i)})}var ws=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===x);return t}getResolvedTitleForRoute(e){return e.data[yi]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(il)})}return n})(),il=(()=>{class n extends ws{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(R(pc))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ei=new m("",{factory:()=>({})}),Si=new m(""),rl=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(ja);loadComponent(e,t){return k(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=k(this,null,function*(){try{let o=yield Ac(ke(e,()=>t.loadComponent())),s=yield sl(To(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s,s}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,r),r})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=k(this,null,function*(){try{let o=yield ol(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function ol(n,i,e,t){return k(this,null,function*(){let r=yield Ac(ke(e,()=>n.loadChildren())),o=yield sl(To(r)),s;o instanceof Na||Array.isArray(o)?s=o:s=yield i.compileModuleAsync(o),t&&t(n);let c,a,d=!1,u;return Array.isArray(s)?(a=s,d=!0):(c=s.create(e).injector,u=s,a=c.get(Si,[],{optional:!0,self:!0}).flat()),{routes:a.map(ys),injector:c,factory:u}})}function sl(n){return k(this,null,function*(){return n})}var Vr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Yh)})}return n})(),Yh=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),al=new m("");var cl=new m(""),Kh=()=>{},ll=new m(""),dl=(()=>{class n{currentNavigation=pe(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=pe(null);events=new v;transitionAbortWithErrorSubject=new v;configLoader=l(rl);environmentInjector=l(ve);destroyRef=l(Ot);urlSerializer=l(wi);rootContexts=l(Mn);location=l(At);inputBindingEnabled=l(Pr,{optional:!0})!==null;titleStrategy=l(ws);options=l(Ei,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||th;urlHandlingStrategy=l(Vr);createViewTransition=l(al,{optional:!0});navigationErrorHandler=l(ll,{optional:!0});activatedRouteInjectorFeature=l(cl,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>p(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Sr(r)),t=r=>this.events.next(new Ar(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Ue(()=>{this.transitions?.next(ce(f({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new le(null),this.transitions.pipe(he(t=>t!==null),fe(t=>{let r=!0,o=!1,s=new AbortController,c=()=>!o&&this.currentTransition?.id===t.id;return p(t).pipe(fe(a=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ee.SupersededByNewNavigation),Te;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:d?ce(f({},d),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&h!=="reload")return this.events.next(new _t(a.id,this.urlSerializer.serialize(a.rawUrl),"",fi.IgnoredSameUrlNavigation)),a.resolve(!1),Te;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return p(a).pipe(fe(g=>(this.events.next(new Ht(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?Te:Promise.resolve(g))),$h(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),re(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(Y=>(Y.finalUrl=g.urlAfterRedirects,Y)),this.events.next(new mi)}),fe(g=>$e(t.routesRecognizeHandler.deferredHandle??p(void 0)).pipe(A(()=>g))),re(()=>{let g=new pi(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(g)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:g,extractedUrl:Y,source:Z,restoredState:H,extras:te}=a,Le=new Ht(g,this.urlSerializer.serialize(Y),Z,H);this.events.next(Le);let Ve=zc(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=ce(f({},a),{targetSnapshot:Ve,urlAfterRedirects:Y,extras:ce(f({},te),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(_e=>(_e.finalUrl=Y,_e)),p(t)}else return this.events.next(new _t(a.id,this.urlSerializer.serialize(a.extractedUrl),"",fi.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Te}),A(a=>{let d=new wr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(d),this.currentTransition=t=ce(f({},a),{guards:sh(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),t}),_h(a=>this.events.next(a)),fe(a=>{if(t.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Or(this.urlSerializer,a.guardsResult);let d=new Cr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(d),!c())return Te;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",Ee.GuardRejected),Te;if(a.guards.canActivateChecks.length===0)return p(a);let u=new Dr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(u),!c())return Te;let h=!1;return p(a).pipe(Wh(this.paramsInheritanceStrategy),re({next:()=>{h=!0;let g=new Er(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(g)},complete:()=>{h||this.cancelNavigationTransition(a,"",Ee.NoDataFromResolver)}}))}),Cc(a=>{let d=h=>{let g=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let Y=h._environmentInjector;g.push(this.configLoader.loadComponent(Y,h.routeConfig).then(Z=>{h.component=Z}))}for(let Y of h.children)g.push(...d(Y));return g},u=d(a.targetSnapshot.root);return u.length===0?p(a):$e(Promise.all(u).then(()=>a))}),fe(a=>{let{newlyCreatedRoutes:d,state:u}=nh(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=t=a=ce(f({},a),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(h=>(h.targetRouterState=u,h)),p(a)}),this.activatedRouteInjectorFeature?.operator()??(a=>a),Cc(()=>this.afterPreactivation()),fe(()=>{let{currentSnapshot:a,targetSnapshot:d}=t,u=this.createViewTransition?.(this.environmentInjector,a.root,d.root);return u?$e(u).pipe(A(()=>t)):p(t)}),ie(1),fe(a=>{r=!1,this.events.next(new En);let d=t.beforeActivateHandler.deferredHandle;return d?$e(d.then(()=>a)):p(a)}),re(a=>{new hs(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),a.newlyCreatedRoutes?.clear(),c()&&(o=!0,this.currentNavigation.update(d=>(d.abort=Kh,d)),this.lastSuccessfulNavigation.set(Ue(this.currentNavigation)),this.events.next(new gt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),z(Kc(s.signal).pipe(he(()=>!o&&r),re(()=>{this.cancelNavigationTransition(t,s.signal.reason+"",Ee.Aborted)}))),re({complete:()=>{o=!0}}),z(this.transitionAbortWithErrorSubject.pipe(re(a=>{throw a}))),cn(()=>{s.abort(),o||this.cancelNavigationTransition(t,"",Ee.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Wn(a=>{if(o=!0,Dc(t),this.destroyed)return t.resolve(!1),Te;if(Xc(a))this.events.next(new qe(t.id,this.urlSerializer.serialize(t.extractedUrl),a.message,a.cancellationCode)),oh(a)?this.events.next(new Sn(a.url,a.navigationBehaviorOptions)):t.resolve(!1);else{let d=new $t(t.id,this.urlSerializer.serialize(t.extractedUrl),a,t.targetSnapshot??void 0);try{let u=ke(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof xn){let{message:h,cancellationCode:g}=Or(this.urlSerializer,u);this.events.next(new qe(t.id,this.urlSerializer.serialize(t.extractedUrl),h,g)),this.events.next(new Sn(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),a}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return Te}))}))}cancelNavigationTransition(e,t,r){Dc(e);let o=new qe(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Ue(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Zh(n){return n!==di}function Dc(n){if(n.newlyCreatedRoutes)for(let i of n.newlyCreatedRoutes)i._localInjector?.destroy()}var ul=new m("");var hl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Qh)})}return n})(),Nr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Qh=(()=>{class n extends Nr{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Cs=(()=>{class n{urlSerializer=l(wi);options=l(Ei,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(At);urlHandlingStrategy=l(Vr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Xe;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,s=r??o;return s instanceof Xe?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=zc(null,l(ve));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>l(Jh)})}return n})(),Jh=(()=>{class n extends Cs{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof Ht?this.updateStateMemento():e instanceof _t?this.commitTransition(t):e instanceof pi?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof En?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof qe&&!jc(e)?this.restoreHistory(t):e instanceof $t?this.restoreHistory(t,!0):e instanceof gt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:s,state:c}=r;if(this.location.isCurrentPathEqualTo(e)||s){let a=this.browserPageId,d=f(f({},c),this.generateNgRouterState(o,a,t));this.location.replaceState(e,"",d)}else{let a=f(f({},c),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",a)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?f({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):f({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Ds(n,i){n.events.pipe(he(e=>e instanceof gt||e instanceof qe||e instanceof $t||e instanceof _t),A(e=>e instanceof gt||e instanceof _t?0:(e instanceof qe?e.code===Ee.Redirect||e.code===Ee.SupersededByNewNavigation:!1)?2:1),he(e=>e!==2),ie(1)).subscribe(()=>{i()})}var Br=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Mo);stateManager=l(Cs);options=l(Ei,{optional:!0})||{};pendingTasks=l(Ca);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(dl);urlSerializer=l(wi);location=l(At);urlHandlingStrategy=l(Vr);injector=l(ve);_events=new v;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(hl);injectorCleanup=l(ul,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Si,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Pr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new st;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Ue(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof qe&&t.code!==Ee.Redirect&&t.code!==Ee.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof gt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Sn){let s=t.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),a=f({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Zh(r.source)},s);this.scheduleNavigation(c,di,null,a,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Ju(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),di,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let s=r?.navigationId?r:null,c=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=ce(f({},o),{browserUrl:e})),r){let d=f({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let a=this.parseUrl(c);this.scheduleNavigation(a,t,s,o).catch(d=>{this.disposed||this.injector.get(Yi)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ue(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ys),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:c,preserveFragment:a}=t,d=a?this.currentUrlTree.fragment:s,u=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":u=f(f({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let g=r?r.snapshot:this.routerState.snapshot.root;h=Lc(g)}catch(g){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return Vc(h,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Dn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,di,null,t)}navigate(e,t={skipLocationChange:!1}){return ef(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(qn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=f({},Rc):t===!1?r=f({},rs):r=f(f({},rs),t),Dn(e))return gc(this.currentUrlTree,e,r);let o=this.parseUrl(e);return gc(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,s){if(this.disposed)return Promise.resolve(!1);let c,a,d;s?(c=s.resolve,a=s.reject,d=s.promise):d=new Promise((h,g)=>{c=h,a=g});let u=this.pendingTasks.add();return Ds(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:c,reject:a,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function ef(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new I(4008,!1)}var rf=new m("");function Es(n,...i){return ln([{provide:Si,multi:!0,useValue:n},{provide:Mt,useFactory:of},{provide:Io,multi:!0,useFactory:sf},i.map(e=>e.\u0275providers)])}function of(){return l(Br).routerState.root}function sf(){let n=l(K);return i=>{let e=n.get(lt);if(i!==e.components[0])return;let t=n.get(Br),r=n.get(af);n.get(cf)===1&&t.initialNavigation(),n.get(lf,null,{optional:!0})?.setUpPreloading(),n.get(rf,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var af=new m("",{factory:()=>new v}),cf=new m("",{factory:()=>1});var lf=new m("");var fl=[];var uf="@",hf=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(K);loadingSchedulerFn=l(ff,{optional:!0});_engine;constructor(e,t,r,o,s){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-LK7GSIDM.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new I(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Ss(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let c=s.createRenderer(e,t);o.use(c),this.scheduler??=this.injector.get(Ea,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){xo()};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Ss=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(uf)}},ff=new m("");function pl(n="animations"){return Ao("NgAsyncAnimations"),ln([{provide:Re,useFactory:()=>new hf(l(E),l(ni),l(M),n)},{provide:un,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ml={providers:[za({eventCoalescing:!0}),Es(fl),pl()]};var w;function vt(n){let i=w.__externref_table_alloc();return w.__wbindgen_export_2.set(i,n),i}function Ai(n,i){try{return n.apply(this,i)}catch(e){let t=vt(e);w.__wbindgen_exn_store(t)}}function Gt(n){return n==null}var vl=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&vl.decode();var xi=null;function Ur(){return(xi===null||xi.byteLength===0)&&(xi=new Uint8Array(w.memory.buffer)),xi}function Me(n,i){return n=n>>>0,vl.decode(Ur().subarray(n,n+i))}var Ri=null;function pf(){return(Ri===null||Ri.byteLength===0)&&(Ri=new Uint8ClampedArray(w.memory.buffer)),Ri}function mf(n,i){return n=n>>>0,pf().subarray(n/1,n/1+i)}var Xt=0,jr=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},gf=typeof jr.encodeInto=="function"?function(n,i){return jr.encodeInto(n,i)}:function(n,i){let e=jr.encode(n);return i.set(e),{read:n.length,written:e.length}};function As(n,i,e){if(e===void 0){let c=jr.encode(n),a=i(c.length,1)>>>0;return Ur().subarray(a,a+c.length).set(c),Xt=c.length,a}let t=n.length,r=i(t,1)>>>0,o=Ur(),s=0;for(;s<t;s++){let c=n.charCodeAt(s);if(c>127)break;o[r+s]=c}if(s!==t){s!==0&&(n=n.slice(s)),r=e(r,t,t=s+n.length*3,1)>>>0;let c=Ur().subarray(r+s,r+t),a=gf(n,c);s+=a.written,r=e(r,t,s,1)>>>0}return Xt=s,r}var qt=null;function Mi(){return(qt===null||qt.buffer.detached===!0||qt.buffer.detached===void 0&&qt.buffer!==w.memory.buffer)&&(qt=new DataView(w.memory.buffer)),qt}function xs(n){let i=typeof n;if(i=="number"||i=="boolean"||n==null)return`${n}`;if(i=="string")return`"${n}"`;if(i=="symbol"){let r=n.description;return r==null?"Symbol":`Symbol(${r})`}if(i=="function"){let r=n.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(n)){let r=n.length,o="[";r>0&&(o+=xs(n[0]));for(let s=1;s<r;s++)o+=", "+xs(n[s]);return o+="]",o}let e=/\[object ([^\]]+)\]/.exec(toString.call(n)),t;if(e&&e.length>1)t=e[1];else return toString.call(n);if(t=="Object")try{return"Object("+JSON.stringify(n)+")"}catch(r){return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:t}function _f(n,i){let e=i(n.length*4,4)>>>0;for(let t=0;t<n.length;t++){let r=vt(n[t]);Mi().setUint32(e+4*t,r,!0)}return Xt=n.length,e}function vf(n){let i=w.__wbindgen_export_2.get(n);return w.__externref_table_dealloc(n),i}var gl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>w.__wbg_dicomviewer_free(n>>>0,1)),Ii=class n{static __wrap(i){i=i>>>0;let e=Object.create(n.prototype);return e.__wbg_ptr=i,gl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let i=this.__wbg_ptr;return this.__wbg_ptr=0,gl.unregister(this),i}free(){let i=this.__destroy_into_raw();w.__wbg_dicomviewer_free(i,0)}read_files(i){let e=_f(i,w.__wbindgen_malloc),t=Xt,r=w.dicomviewer_read_files(this.__wbg_ptr,e,t);if(r[1])throw vf(r[0])}get_metadata(){let i=w.dicomviewer_get_metadata(this.__wbg_ptr);return Tn.__wrap(i)}reset_filter(){w.dicomviewer_reset_filter(this.__wbg_ptr)}render_next_file(){w.dicomviewer_render_next_file(this.__wbg_ptr)}get_dicom_hierarchy(){return w.dicomviewer_get_dicom_hierarchy(this.__wbg_ptr)}render_previous_file(){w.dicomviewer_render_previous_file(this.__wbg_ptr)}render_image_at_index(i){w.dicomviewer_render_image_at_index(this.__wbg_ptr,i)}set_current_series_instance_uid(i){let e=As(i,w.__wbindgen_malloc,w.__wbindgen_realloc),t=Xt;w.dicomviewer_set_current_series_instance_uid(this.__wbg_ptr,e,t)}static new(){let i=w.dicomviewer_new();return n.__wrap(i)}},_l=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>w.__wbg_metadata_free(n>>>0,1)),Tn=class n{static __wrap(i){i=i>>>0;let e=Object.create(n.prototype);return e.__wbg_ptr=i,_l.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let i=this.__wbg_ptr;return this.__wbg_ptr=0,_l.unregister(this),i}free(){let i=this.__destroy_into_raw();w.__wbg_metadata_free(i,0)}get total(){return w.__wbg_get_metadata_total(this.__wbg_ptr)>>>0}set total(i){w.__wbg_set_metadata_total(this.__wbg_ptr,i)}get current_index(){return w.__wbg_get_metadata_current_index(this.__wbg_ptr)>>>0}set current_index(i){w.__wbg_set_metadata_current_index(this.__wbg_ptr,i)}get series_total(){return w.__wbg_get_metadata_series_total(this.__wbg_ptr)>>>0}set series_total(i){w.__wbg_set_metadata_series_total(this.__wbg_ptr,i)}get_current_series_instance_uid(){return w.metadata_get_current_series_instance_uid(this.__wbg_ptr)}static new(){let i=w.metadata_new();return n.__wrap(i)}};function bf(n,i){return k(this,null,function*(){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return yield WebAssembly.instantiateStreaming(n,i)}catch(t){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}let e=yield n.arrayBuffer();return yield WebAssembly.instantiate(e,i)}else{let e=yield WebAssembly.instantiate(n,i);return e instanceof WebAssembly.Instance?{instance:e,module:n}:e}})}function yf(){let n={};return n.wbg={},n.wbg.__wbg_buffer_609cc3eee51ed158=function(i){return i.buffer},n.wbg.__wbg_call_672a4d21634d4a24=function(){return Ai(function(i,e){return i.call(e)},arguments)},n.wbg.__wbg_clearRect_8e4ba7ea0e06711a=function(i,e,t,r,o){i.clearRect(e,t,r,o)},n.wbg.__wbg_document_d249400bd7bd996d=function(i){let e=i.document;return Gt(e)?0:vt(e)},n.wbg.__wbg_error_7534b8e9a36f1ab4=function(i,e){let t,r;try{t=i,r=e,console.error(Me(i,e))}finally{w.__wbindgen_free(t,r,1)}},n.wbg.__wbg_getContext_e9cf379449413580=function(){return Ai(function(i,e,t){let r=i.getContext(Me(e,t));return Gt(r)?0:vt(r)},arguments)},n.wbg.__wbg_getElementById_f827f0d6648718a8=function(i,e,t){let r=i.getElementById(Me(e,t));return Gt(r)?0:vt(r)},n.wbg.__wbg_height_838cee19ba8597db=function(i){return i.height},n.wbg.__wbg_instanceof_CanvasRenderingContext2d_df82a4d3437bf1cc=function(i){let e;try{e=i instanceof CanvasRenderingContext2D}catch(r){e=!1}return e},n.wbg.__wbg_instanceof_HtmlCanvasElement_2ea67072a7624ac5=function(i){let e;try{e=i instanceof HTMLCanvasElement}catch(r){e=!1}return e},n.wbg.__wbg_instanceof_Window_def73ea0955fc569=function(i){let e;try{e=i instanceof Window}catch(r){e=!1}return e},n.wbg.__wbg_length_a446193dc22c12f8=function(i){return i.length},n.wbg.__wbg_log_0cc1b7768397bcfe=function(i,e,t,r,o,s,c,a){let d,u;try{d=i,u=e,console.log(Me(i,e),Me(t,r),Me(o,s),Me(c,a))}finally{w.__wbindgen_free(d,u,1)}},n.wbg.__wbg_log_cb9e190acc5753fb=function(i,e){let t,r;try{t=i,r=e,console.log(Me(i,e))}finally{w.__wbindgen_free(t,r,1)}},n.wbg.__wbg_mark_7438147ce31e9d4b=function(i,e){performance.mark(Me(i,e))},n.wbg.__wbg_measure_fb7825c11612c823=function(){return Ai(function(i,e,t,r){let o,s,c,a;try{o=i,s=e,c=t,a=r,performance.measure(Me(i,e),Me(t,r))}finally{w.__wbindgen_free(o,s,1),w.__wbindgen_free(c,a,1)}},arguments)},n.wbg.__wbg_new_405e22f390576ce2=function(){return new Object},n.wbg.__wbg_new_5e0be73521bc8c17=function(){return new Map},n.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},n.wbg.__wbg_new_a12002a7f91c75be=function(i){return new Uint8Array(i)},n.wbg.__wbg_newnoargs_105ed471475aaf50=function(i,e){return new Function(Me(i,e))},n.wbg.__wbg_newwithu8clampedarrayandsh_7ea6ee082a25bc85=function(){return Ai(function(i,e,t,r){return new ImageData(mf(i,e),t>>>0,r>>>0)},arguments)},n.wbg.__wbg_putImageData_4c5aa10f3b3e4924=function(){return Ai(function(i,e,t,r){i.putImageData(e,t,r)},arguments)},n.wbg.__wbg_set_3f1d0b984ed272ed=function(i,e,t){i[e]=t},n.wbg.__wbg_set_65595bdd868b3009=function(i,e,t){i.set(e,t>>>0)},n.wbg.__wbg_set_8fc6bf8a5b1071d1=function(i,e,t){return i.set(e,t)},n.wbg.__wbg_stack_0ed75d68575b0f3c=function(i,e){let t=e.stack,r=As(t,w.__wbindgen_malloc,w.__wbindgen_realloc),o=Xt;Mi().setInt32(i+4,o,!0),Mi().setInt32(i+0,r,!0)},n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07=function(){let i=typeof global>"u"?null:global;return Gt(i)?0:vt(i)},n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0=function(){let i=typeof globalThis>"u"?null:globalThis;return Gt(i)?0:vt(i)},n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819=function(){let i=typeof self>"u"?null:self;return Gt(i)?0:vt(i)},n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40=function(){let i=typeof window>"u"?null:window;return Gt(i)?0:vt(i)},n.wbg.__wbg_width_5dde457d606ba683=function(i){return i.width},n.wbg.__wbindgen_debug_string=function(i,e){let t=xs(e),r=As(t,w.__wbindgen_malloc,w.__wbindgen_realloc),o=Xt;Mi().setInt32(i+4,o,!0),Mi().setInt32(i+0,r,!0)},n.wbg.__wbindgen_error_new=function(i,e){return new Error(Me(i,e))},n.wbg.__wbindgen_init_externref_table=function(){let i=w.__wbindgen_export_2,e=i.grow(4);i.set(0,void 0),i.set(e+0,void 0),i.set(e+1,null),i.set(e+2,!0),i.set(e+3,!1)},n.wbg.__wbindgen_is_string=function(i){return typeof i=="string"},n.wbg.__wbindgen_is_undefined=function(i){return i===void 0},n.wbg.__wbindgen_memory=function(){return w.memory},n.wbg.__wbindgen_number_new=function(i){return i},n.wbg.__wbindgen_string_new=function(i,e){return Me(i,e)},n.wbg.__wbindgen_throw=function(i,e){throw new Error(Me(i,e))},n}function wf(n,i){return w=n.exports,bl.__wbindgen_wasm_module=i,qt=null,xi=null,Ri=null,w.__wbindgen_start(),w}function bl(n){return k(this,null,function*(){if(w!==void 0)return w;typeof n<"u"&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof n>"u"&&(n=new URL("dicom_viewer_rs_bg.wasm",import.meta.url));let i=yf();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));let{instance:e,module:t}=yield bf(yield n,i);return wf(e,t)})}var Rs=bl;function Ti(n){return n.buttons===0||n.detail===0}function ki(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Ms;function yl(){if(Ms==null){let n=typeof document<"u"?document.head:null;Ms=!!(n&&(n.createShadowRoot||n.attachShadow))}return Ms}function Is(n){if(yl()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Ne(n){if(n.composedPath)try{return n.composedPath()[0]}catch(i){}return n.target}var Ts;try{Ts=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){Ts=!1}var q=(()=>{class n{_platformId=l(dn);isBrowser=this._platformId?Za(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ts)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Oi;function wl(){if(Oi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Oi=!0}))}finally{Oi=Oi||!1}return Oi}function kn(n){return wl()?n:!!n.capture}function Fi(n,i=0){return Cl(n)?Number(n):arguments.length===2?i:0}function Cl(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function ot(n){return n instanceof L?n.nativeElement:n}var Dl=new m("cdk-input-modality-detector-options"),El={ignoreKeys:[18,17,224,91,16]},Sl=650,ks={passive:!0,capture:!0},Al=(()=>{class n{_platform=l(q);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new le(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ne(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Sl||(this._modality.next(Ti(e)?"keyboard":"mouse"),this._mostRecentTarget=Ne(e))};_onTouchstart=e=>{if(ki(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ne(e)};constructor(){let e=l(M),t=l(E),r=l(Dl,{optional:!0});if(this._options=f(f({},El),r),this.modalityDetected=this._modality.pipe(qi(1)),this.modalityChanged=this.modalityDetected.pipe(Gn()),this._platform.isBrowser){let o=l(Re).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,ks),o.listen(t,"mousedown",this._onMousedown,ks),o.listen(t,"touchstart",this._onTouchstart,ks)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Ni=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Ni||{}),xl=new m("cdk-focus-monitor-default-options"),zr=kn({passive:!0,capture:!0}),Pi=(()=>{class n{_ngZone=l(M);_platform=l(q);_inputModalityDetector=l(Al);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(E);_stopInputModalityDetector=new v;constructor(){let e=l(xl,{optional:!0});this._detectionMode=e?.detectionMode||Ni.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Ne(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=ot(e);if(!this._platform.isBrowser||r.nodeType!==1)return p();let o=Is(r)||this._document,s=this._elementInfo.get(r);if(s)return t&&(s.checkChildren=!0),s.subject;let c={checkChildren:t,subject:new v,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=ot(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=ot(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([c,a])=>this._originChanged(c,t,a)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ni.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Ni.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Sl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Ne(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,zr),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,zr)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(z(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,zr),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,zr),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Hr=new WeakMap,Ye=(()=>{class n{_appRef;_injector=l(K);_environmentInjector=l(ve);load(e){let t=this._appRef=this._appRef||this._injector.get(lt),r=Hr.get(t);r||(r={loaders:new Set,refs:[]},Hr.set(t,r),t.onDestroy(()=>{Hr.get(t)?.refs.forEach(o=>o.destroy()),Hr.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(ir(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Rl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})(),$r;function Cf(){if($r===void 0&&($r=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{$r=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return $r}function Yt(n){return Cf()?.createHTML(n)||n}function Ml(n,i,e){let t=e.sanitize(Ae.HTML,i);n.innerHTML=Yt(t||"")}function Li(n){return Array.isArray(n)?n:[n]}var Il=new Set,Kt,Wr=(()=>{class n{_platform=l(q);_nonce=l(hn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ef}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Df(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Df(n,i){if(!Il.has(n))try{Kt||(Kt=document.createElement("style"),i&&Kt.setAttribute("nonce",i),Kt.setAttribute("type","text/css"),document.head.appendChild(Kt)),Kt.sheet&&(Kt.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),Il.add(n))}catch(e){console.error(e)}}function Ef(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Os=(()=>{class n{_mediaMatcher=l(Wr);_zone=l(M);_queries=new Map;_destroySubject=new v;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Tl(Li(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Tl(Li(e)).map(s=>this._registerQuery(s).observable),o=at(r);return o=kt(o.pipe(ie(1)),o.pipe(qi(1),an(0))),o.pipe(A(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:a,query:d})=>{c.matches=c.matches||a,c.breakpoints[d]=a}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new yt(s=>{let c=a=>this._zone.run(()=>s.next(a));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(Ze(t),A(({matches:s})=>({query:e,matches:s})),z(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Tl(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var qr=(()=>{class n{_platform=l(q);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Af(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Sf(Ff(e));if(t&&(kl(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=kl(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!kf(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return Of(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function Sf(n){try{return n.frameElement}catch(i){return null}}function Af(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function xf(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Rf(n){return If(n)&&n.type=="hidden"}function Mf(n){return Tf(n)&&n.hasAttribute("href")}function If(n){return n.nodeName.toLowerCase()=="input"}function Tf(n){return n.nodeName.toLowerCase()=="a"}function Ol(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function kl(n){if(!Ol(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function kf(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function Of(n){return Rf(n)?!1:xf(n)||Mf(n)||n.hasAttribute("contenteditable")||Ol(n)}function Ff(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Gr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,s){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){xe(i,{injector:this._injector})}},Fs=(()=>{class n{_checker=l(qr);_ngZone=l(M);_document=l(E);_injector=l(K);constructor(){l(Ye).load(Rl)}create(e,t=!1){return new Gr(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Fl=new m("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Nl=new m("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Nf=0,Ns=(()=>{class n{_ngZone=l(M);_defaultOptions=l(Nl,{optional:!0});_liveElement;_document=l(E);_sanitizer=l(si);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Fl,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,s;return t.length===1&&typeof t[0]=="number"?s=t[0]:[o,s]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ml(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${Nf++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Pf=200,Xr=class{_letterKeyStream=new v;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new v;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Pf;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(re(e=>this._pressedLetters.push(e)),an(i),he(()=>this._pressedLetters.length>0),A(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Pl(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}function Zt(n){return tt(n)?n:p(n)}var Ps=class{_activeItemIndex=-1;_activeItem=null;_shouldActivationFollowFocus=!1;_horizontalOrientation="ltr";_skipPredicateFn=i=>!1;_trackByFn=i=>i;_items=[];_typeahead;_typeaheadSubscription=st.EMPTY;_hasInitialFocused=!1;_initializeFocus(){if(this._hasInitialFocused||this._items.length===0)return;let i=0;for(let t=0;t<this._items.length;t++)if(!this._skipPredicateFn(this._items[t])&&!this._isItemDisabled(this._items[t])){i=t;break}let e=this._items[i];e.makeFocusable?(this._activeItem?.unfocus(),this._activeItemIndex=i,this._activeItem=e,this._typeahead?.setCurrentSelectedItemIndex(i),e.makeFocusable()):this.focusItem(i),this._hasInitialFocused=!0}constructor(i,e){i instanceof Ki?(this._items=i.toArray(),i.changes.subscribe(t=>this._itemsChanged(t.toArray()))):tt(i)?i.subscribe(t=>this._itemsChanged(t)):(this._items=i,this._initializeFocus()),typeof e.shouldActivationFollowFocus=="boolean"&&(this._shouldActivationFollowFocus=e.shouldActivationFollowFocus),e.horizontalOrientation&&(this._horizontalOrientation=e.horizontalOrientation),e.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),e.trackBy&&(this._trackByFn=e.trackBy),typeof e.typeAheadDebounceInterval<"u"&&this._setTypeAhead(e.typeAheadDebounceInterval)}change=new v;destroy(){this._typeaheadSubscription.unsubscribe(),this._typeahead?.destroy(),this.change.complete()}onKeydown(i){switch(i.key){case"Tab":return;case"ArrowDown":this._focusNextItem();break;case"ArrowUp":this._focusPreviousItem();break;case"ArrowRight":this._horizontalOrientation==="rtl"?this._collapseCurrentItem():this._expandCurrentItem();break;case"ArrowLeft":this._horizontalOrientation==="rtl"?this._expandCurrentItem():this._collapseCurrentItem();break;case"Home":this._focusFirstItem();break;case"End":this._focusLastItem();break;case"Enter":case" ":this._activateCurrentItem();break;default:if(i.key==="*"){this._expandAllItemsAtCurrentItemLevel();break}this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}getActiveItemIndex(){return this._activeItemIndex}getActiveItem(){return this._activeItem}_itemsChanged(i){this._hasInitialFocused&&this._activeItem&&!i.includes(this._activeItem)&&(this._activeItem=null,this._hasInitialFocused=!1),this._items=i,this._typeahead?.setItems(this._items),this._updateActiveItemIndex(this._items),this._initializeFocus()}_focusFirstItem(){this.focusItem(this._findNextAvailableItemIndex(-1))}_focusLastItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._items.length))}_focusNextItem(){this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex))}_focusPreviousItem(){this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex))}focusItem(i,e={}){e.emitChangeEvent??=!0;let t=typeof i=="number"?i:this._items.findIndex(s=>this._trackByFn(s)===this._trackByFn(i));if(t<0||t>=this._items.length)return;let r=this._items[t];if(this._activeItem!==null&&this._trackByFn(r)===this._trackByFn(this._activeItem))return;let o=this._activeItem;this._activeItem=r??null,this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t),this._activeItem?.focus(),o?.unfocus(),e.emitChangeEvent&&this.change.next(this._activeItem),this._shouldActivationFollowFocus&&this._activateCurrentItem()}_updateActiveItemIndex(i){let e=this._activeItem;if(!e)return;let t=i.findIndex(r=>this._trackByFn(r)===this._trackByFn(e));t>-1&&t!==this._activeItemIndex&&(this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t))}_setTypeAhead(i){this._typeahead=new Xr(this._items,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.focusItem(e)})}_findNextAvailableItemIndex(i){for(let e=i+1;e<this._items.length;e++)if(!this._skipPredicateFn(this._items[e]))return e;return i}_findPreviousAvailableItemIndex(i){for(let e=i-1;e>=0;e--)if(!this._skipPredicateFn(this._items[e]))return e;return i}_collapseCurrentItem(){if(this._activeItem)if(this._isCurrentItemExpanded())this._activeItem.collapse();else{let i=this._activeItem.getParent();if(!i||this._skipPredicateFn(i))return;this.focusItem(i)}}_expandCurrentItem(){this._activeItem&&(this._isCurrentItemExpanded()?Zt(this._activeItem.getChildren()).pipe(ie(1)).subscribe(i=>{let e=i.find(t=>!this._skipPredicateFn(t));e&&this.focusItem(e)}):this._activeItem.expand())}_isCurrentItemExpanded(){return this._activeItem?typeof this._activeItem.isExpanded=="boolean"?this._activeItem.isExpanded:this._activeItem.isExpanded():!1}_isItemDisabled(i){return typeof i.isDisabled=="boolean"?i.isDisabled:i.isDisabled?.()}_expandAllItemsAtCurrentItemLevel(){if(!this._activeItem)return;let i=this._activeItem.getParent(),e;i?e=Zt(i.getChildren()):e=p(this._items.filter(t=>t.getParent()===null)),e.pipe(ie(1)).subscribe(t=>{for(let r of t)r.expand()})}_activateCurrentItem(){this._activeItem?.activate()}},Ll=new m("tree-key-manager",{providedIn:"root",factory:()=>(n,i)=>new Ps(n,i)});var Vl=new Map,Qt=class n{_appId=l(Xn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=Vl.get(i);return t===void 0?t=0:t++,Vl.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})};var Bl={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function Ls(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Jt(n){return n==null?"":typeof n=="string"?n:`${n}px`}var Lf=new m("cdk-dir-doc",{providedIn:"root",factory:()=>l(E)}),Vf=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ul(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Vf.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Ke=(()=>{class n{get value(){return this.valueSignal()}valueSignal=pe("ltr");change=new N;constructor(){let e=l(Lf,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ul(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var et=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(et||{}),Yr,en;function jl(){if(en==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return en=!1,en;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)en=!0;else{let n=Element.prototype.scrollTo;n?en=!/\{\s*\[native code\]\s*\}/.test(n.toString()):en=!1}}return en}function On(){if(typeof document!="object"||!document)return et.NORMAL;if(Yr==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Yr=et.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Yr=n.scrollLeft===0?et.NEGATED:et.INVERTED),n.remove()}return Yr}function zl(n){return n&&typeof n.connect=="function"&&!(n instanceof fa)}var Pe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({})}return n})();var Uf=20,jf=(()=>{class n{_ngZone=l(M);_platform=l(q);_renderer=l(Re).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new v;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Uf){return this._platform.isBrowser?new yt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(yo(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):p()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(he(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let r=ot(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Fn=(()=>{class n{elementRef=l(L);scrollDispatcher=l(jf);ngZone=l(M);dir=l(Ke,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new v;_renderer=l(We);_cleanupScroll;_elementScrolled=new v;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&On()!=et.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),On()==et.INVERTED?e.left=e.right:On()==et.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;jl()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:t:e=="end"&&(e=s?t:r),s&&On()==et.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&On()==et.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),zf=20,Hl=(()=>{class n{_platform=l(q);_listeners;_viewportSize=null;_change=new v;_document=l(E);constructor(){let e=l(M),t=l(Re).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,c=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:s,left:c}}change(e=zf){return e>0?this._change.pipe(yo(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Vs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({})}return n})();var Vi=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Nn=class extends Vi{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,o,s){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}},Pn=class extends Vi{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Bs=class extends Vi{element;constructor(i){super(),this.element=i instanceof L?i.nativeElement:i}},Ln=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Nn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Pn)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Bs)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Kr=class extends Ln{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(er,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||K.NULL,o=r.get(ve,t.injector);e=ir(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Us=(()=>{class n extends Ln{_moduleRef=l(er,{optional:!0});_document=l(E);_viewContainerRef=l(Be);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new N;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Se(n)))(r||n)}})();static \u0275dir=F({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[oe]})}return n})();var Zr=class{enable(){}disable(){}attach(){}};var Vn=class{positionStrategy;scrollStrategy=new Zr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Gl=(()=>{class n{_attachedOverlays=[];_document=l(E);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),ql=(()=>{class n extends Gl{_ngZone=l(M);_renderer=l(Re).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),Xl=(()=>{class n extends Gl{_platform=l(q);_ngZone=l(M);_renderer=l(Re).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ne(e)};_clickListener=e=>{let t=Ne(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let c=o[s],a=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,e,a))){if($l(c.overlayElement,t)||$l(c.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>a.next(e)):a.next(e)}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();function $l(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Yl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})(),$f=(()=>{class n{_platform=l(q);_containerElement;_document=l(E);_styleLoader=l(Ye);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ls()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Ls()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Yl)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})(),js=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Kl(n){return n&&n.nodeType===1}var Qr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new v;_attachments=new v;_detachments=new v;_positionStrategy;_scrollStrategy;_locationChanges=st.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new v;_outsidePointerEvents=new v;_afterNextRenderRef;constructor(i,e,t,r,o,s,c,a,d,u=!1,h,g){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=c,this._location=a,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=h,this._renderer=g,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=xe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=f(f({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ce(f({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Jt(this._config.width),i.height=Jt(this._config.height),i.minWidth=Jt(this._config.minWidth),i.minHeight=Jt(this._config.minHeight),i.maxWidth=Jt(this._config.maxWidth),i.maxHeight=Jt(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Kl(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new js(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=Li(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=xe(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var Wl="cdk-global-overlay-wrapper";function zs(n){return new Jr}var Jr=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Wl),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:c}=t,a=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),d=(o==="100%"||o==="100vh")&&(!c||c==="100%"||c==="100vh"),u=this._xPosition,h=this._xOffset,g=this._overlayRef.getConfig().direction==="rtl",Y="",Z="",H="";a?H="flex-start":u==="center"?(H="center",g?Z=h:Y=h):g?u==="left"||u==="end"?(H="flex-end",Y=h):(u==="right"||u==="start")&&(H="flex-start",Z=h):u==="left"||u==="start"?(H="flex-start",Y=h):(u==="right"||u==="end")&&(H="flex-end",Z=h),i.position=this._cssPosition,i.marginLeft=a?"0":Y,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=a?"0":Z,e.justifyContent=H,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Wl),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}};var Zl=new m("OVERLAY_DEFAULT_CONFIG");function Hs(n,i){n.get(Ye).load(Yl);let e=n.get($f),t=n.get(E),r=n.get(Qt),o=n.get(lt),s=n.get(Ke),c=n.get(We,null,{optional:!0})||n.get(Re).createRenderer(null,null),a=new Vn(i),d=n.get(Zl,null,{optional:!0})?.usePopover??!0;a.direction=a.direction||s.value,!t.body||!("showPopover"in t.body)?a.usePopover=!1:a.usePopover=i?.usePopover??d;let u=t.createElement("div"),h=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),h.appendChild(u),a.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let g=a.usePopover?a.positionStrategy?.getPopoverInsertionPoint?.():null;return Kl(g)?g.after(h):g?.type==="parent"?g.element.appendChild(h):e.getContainerElement().appendChild(h),new Qr(new Kr(u,o,n),h,u,a,n.get(M),n.get(ql),t,n.get(At),n.get(Xl),i?.disableAnimations??n.get(un,null,{optional:!0})==="NoopAnimations",n.get(ve),c)}var Gf=new m("MATERIAL_ANIMATIONS"),Ql=null;function $s(){return l(Gf,{optional:!0})?.animationsDisabled||l(un,{optional:!0})==="NoopAnimations"?"di-disabled":(Ql??=l(Wr).matchMedia("(prefers-reduced-motion)").matches,Ql?"reduced-motion":"enabled")}function He(){return $s()!=="enabled"}function tn(n){return n!=null&&`${n}`!="false"}var Ie=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Ie||{}),Ws=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ie.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Jl=kn({passive:!0,capture:!0}),Gs=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let s=o.get(t);s?s.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Jl)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Jl)))}_delegateEventHandler=i=>{let e=Ne(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Bi={enterDuration:225,exitDuration:150},qf=800,ed=kn({passive:!0,capture:!0}),td=["mousedown","touchstart"],nd=["mouseup","mouseleave","touchend","touchcancel"],Xf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),Ui=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Gs;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=ot(t)),o&&o.get(Ye).load(Xf)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=f(f({},Bi),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let s=t.radius||Yf(i,e,r),c=i-r.left,a=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-s}px`,u.style.top=`${a-s}px`,u.style.height=`${s*2}px`,u.style.width=`${s*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),g=h.transitionProperty,Y=h.transitionDuration,Z=g==="none"||Y==="0s"||Y==="0s, 0s"||r.width===0&&r.height===0,H=new Ws(this,u,t,Z);u.style.transform="scale3d(1, 1, 1)",H.state=Ie.FADING_IN,t.persistent||(this._mostRecentTransientRipple=H);let te=null;return!Z&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Le=()=>{te&&(te.fallbackTimer=null),clearTimeout(_e),this._finishRippleTransition(H)},Ve=()=>this._destroyRipple(H),_e=setTimeout(Ve,d+100);u.addEventListener("transitionend",Le),u.addEventListener("transitioncancel",Ve),te={onTransitionEnd:Le,onTransitionCancel:Ve,fallbackTimer:_e}}),this._activeRipples.set(H,te),(Z||!d)&&this._finishRippleTransition(H),H}fadeOutRipple(i){if(i.state===Ie.FADING_OUT||i.state===Ie.HIDDEN)return;let e=i.element,t=f(f({},Bi),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Ie.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=ot(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,td.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{nd.forEach(e=>{this._triggerElement.addEventListener(e,this,ed)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Ie.FADING_IN?this._startFadeOutTransition(i):i.state===Ie.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Ie.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Ie.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Ti(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+qf;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!ki(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Ie.VISIBLE||i.config.terminateOnPointerUp&&i.state===Ie.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(td.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(nd.forEach(e=>i.removeEventListener(e,this,ed)),this._pointerUpEventsRegistered=!1))}};function Yf(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var ji=new m("mat-ripple-global-options"),qs=(()=>{class n{_elementRef=l(L);_animationsDisabled=He();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(M),t=l(q),r=l(ji,{optional:!0}),o=l(K);this._globalOptions=r||{},this._rippleRenderer=new Ui(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:f(f(f({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,f(f({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,f(f({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&ne("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Kf={capture:!0},Zf=["focus","mousedown","mouseenter","touchstart"],Xs="mat-ripple-loader-uninitialized",Ys="mat-ripple-loader-class-name",id="mat-ripple-loader-centered",eo="mat-ripple-loader-disabled",rd=(()=>{class n{_document=l(E);_animationsDisabled=He();_globalRippleOptions=l(ji,{optional:!0});_platform=l(q);_ngZone=l(M);_injector=l(K);_eventCleanups;_hosts=new Map;constructor(){let e=l(Re).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Zf.map(t=>e.listen(this._document,t,this._onInteraction,Kf)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Xs,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Ys))&&e.setAttribute(Ys,t.className||""),t.centered&&e.setAttribute(id,""),t.disabled&&e.setAttribute(eo,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(eo,""):e.removeAttribute(eo)}_onInteraction=e=>{let t=Ne(e);if(t instanceof HTMLElement){let r=t.closest(`[${Xs}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Ys)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Bi.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Bi.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(eo),rippleConfig:{centered:e.hasAttribute(id),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},a=new Ui(c,this._ngZone,t,this._platform,this._injector),d=!c.rippleDisabled;d&&a.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:a,hasSetUpEvents:d}),e.removeAttribute(Xs)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var to=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
    --mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var Qf=["*",[["","progressIndicator",""]]],Jf=["*","[progressIndicator]"];function ep(n,i){n&1&&(gn(0,"div",1),ee(1,1),_n())}var tp=new m("MAT_BUTTON_CONFIG");function od(n){return n==null?void 0:se(n)}var Ks=(()=>{class n{_elementRef=l(L);_ngZone=l(M);_animationsDisabled=He();_config=l(tp,{optional:!0});_focusMonitor=l(Pi);_cleanupClick;_renderer=l(We);_rippleLoader=l(rd);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Zn(!1,{transform:Q});constructor(){l(Ye).load(to);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(J("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),dt(r.color?"mat-"+r.color:""),ne("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Q],disabled:[2,"disabled","disabled",Q],ariaDisabled:[2,"aria-disabled","ariaDisabled",Q],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Q],tabIndex:[2,"tabIndex","tabIndex",od],_tabindex:[2,"tabindex","_tabindex",od],showProgress:[1,"showProgress"]}})}return n})(),Zs=(()=>{class n extends Ks{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[oe],ngContentSelectors:Jf,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(Qf),Pt(0,"span",0),ee(1),we(2,ep,2,0,"div",1),Pt(3,"span",2)(4,"span",3)),t&2&&(b(2),Ce(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
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
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
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
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
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
`],encapsulation:2})}return n})();var no=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({imports:[Pe]})}return n})();var np=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],ip=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function rp(n,i){n&1&&(gn(0,"div",2),ee(1,3),_n())}var sd=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Bn=(()=>{class n extends Ks{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=op(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?sd.get(this._appearance):null,o=sd.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[oe],ngContentSelectors:ip,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(np),Pt(0,"span",0),ee(1),gn(2,"span",1),ee(3,1),_n(),ee(4,2),we(5,rp,2,0,"div",2),Pt(6,"span",3)(7,"span",4)),t&2&&(ne("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),b(5),Ce(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
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
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
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
`],encapsulation:2})}return n})();function op(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var nn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({imports:[no,Pe]})}return n})();function sp(n,i){if(n&1){let e=Fe();_(0,"div",1)(1,"button",2),P("click",function(){be(e);let r=O();return ye(r.action())}),G(2),y()()}if(n&2){let e=O();b(2),Ge(" ",e.data.action," ")}}var ap=["label"];function cp(n,i){}var lp=Math.pow(2,31)-1,zi=class{_overlayRef;instance;containerInstance;_afterDismissed=new v;_afterOpened=new v;_onAction=new v;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,lp))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},cd=new m("MatSnackBarData"),Un=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},dp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),up=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),hp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),fp=(()=>{class n{snackBarRef=l(zi);data=l(cd);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(_(0,"div",0),G(1),y(),we(2,sp,3,1,"div",1)),t&2&&(b(),Ge(" ",r.data.message,`
`),b(),Ce(r.hasAction?2:-1))},dependencies:[Bn,dp,up,hp],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})(),Qs="_mat-snack-bar-enter",Js="_mat-snack-bar-exit",pp=(()=>{class n extends Ln{_ngZone=l(M);_elementRef=l(L);_changeDetectorRef=l(me);_platform=l(q);_animationsDisabled=He();snackBarConfig=l(Un);_document=l(E);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(K);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new v;_onExit=new v;_onEnter=new v;_animationState="void";_live;_label;_role;_liveElementId=l(Qt).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Js?this._completeExit():e===Qs&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Qs)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Qs)},200)))}exit(){return this._destroyed?p(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Js)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Js),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(s=>e.classList.add(s)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&ue(Us,7)(ap,7),t&2){let o;U(o=j())&&(r._portalOutlet=o.first),U(o=j())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&P("animationend",function(s){return r.onAnimationEnd(s.animationName)})("animationcancel",function(s){return r.onAnimationEnd(s.animationName)}),t&2&&ne("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[oe],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(_(0,"div",1)(1,"div",2,0)(3,"div",3),Oe(4,cp,0,0,"ng-template",4),y(),ae(5,"div"),y()()),t&2&&(b(5),J("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Us],styles:[`@keyframes _mat-snack-bar-enter {
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
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
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
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
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
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})(),mp=new m("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Un}),ld=(()=>{class n{_live=l(Ns);_injector=l(K);_breakpointObserver=l(Os);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(mp);_animationsDisabled=He();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=fp;snackBarContainerComponent=pp;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=f(f({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=K.create({parent:r||this._injector,providers:[{provide:Un,useValue:t}]}),s=new Nn(this.snackBarContainerComponent,t.viewContainerRef,o),c=e.attach(s);return c.instance.snackBarConfig=t,c.instance}_attach(e,t){let r=f(f(f({},new Un),this._defaultConfig),t),o=this._createOverlay(r),s=this._attachSnackBarContainer(o,r),c=new zi(s,o);if(e instanceof ct){let a=new Pn(e,null,{$implicit:r.data,snackBarRef:c});c.instance=s.attachTemplatePortal(a)}else{let a=this._createInjector(r,c),d=new Nn(e,void 0,a),u=s.attachComponentPortal(d);c.instance=u.instance}return this._breakpointObserver.observe(Bl.HandsetPortrait).pipe(z(o.detachments())).subscribe(a=>{o.overlayElement.classList.toggle(this.handsetCssClass,a.matches)}),r.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(c,r),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Vn;t.direction=e.direction;let r=zs(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,c=!s&&e.horizontalPosition!=="center";return s?r.left("0"):c?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,Hs(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return K.create({parent:r||this._injector,providers:[{provide:zi,useValue:t},{provide:cd,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var ro=["*"],_p=["content"],dd=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],ud=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function vp(n,i){if(n&1){let e=Fe();_(0,"div",1),P("click",function(){be(e);let r=O();return ye(r._onBackdropClicked())}),y()}if(n&2){let e=O();ne("mat-drawer-shown",e._isShowingBackdrop())}}function bp(n,i){n&1&&(_(0,"mat-drawer-content"),ee(1,2),y())}function yp(n,i){if(n&1){let e=Fe();_(0,"div",1),P("click",function(){be(e);let r=O();return ye(r._onBackdropClicked())}),y()}if(n&2){let e=O();ne("mat-drawer-shown",e._isShowingBackdrop())}}function wp(n,i){n&1&&(_(0,"mat-sidenav-content"),ee(1,2),y())}var Cp=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`;var Dp=new m("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),na=new m("MAT_DRAWER_CONTAINER"),Hi=(()=>{class n extends Fn{_platform=l(q);_changeDetectorRef=l(me);_element=l(L);_ngZone=l(M);_isInert=!1;_container=l(ta);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(_a(50),ie(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute("inert","true"):t.removeAttribute("inert")}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Se(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(Qe("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),ne("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[de([{provide:Fn,useExisting:n}]),oe],ngContentSelectors:ro,decls:1,vars:0,template:function(t,r){t&1&&(De(),ee(0))},encapsulation:2})}return n})(),ea=(()=>{class n{_elementRef=l(L);_focusTrapFactory=l(Fs);_focusMonitor=l(Pi);_platform=l(q);_ngZone=l(M);_renderer=l(We);_interactivityChecker=l(qr);_doc=l(E);_container=l(na,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=tn(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=tn(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(tn(e))}_opened=pe(!1);_openedVia=null;_animationStarted=new v;_animationEnd=new v;openedChange=new N(!0);_openedStream=this.openedChange.pipe(he(e=>e),A(()=>{}));openedStart=this._animationStarted.pipe(he(()=>this.opened),Co(void 0));_closedStream=this.openedChange.pipe(he(e=>!e),A(()=>{}));closedStart=this._animationStarted.pipe(he(()=>!this.opened),Co(void 0));_destroyed=new v;onPositionChanged=new N;_content;_modeChanged=new v;_injector=l(K);_changeDetectorRef=l(me);constructor(){this.openedChange.pipe(z(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Pl(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&(this._interactivityChecker.isFocusable(r)||(r.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{s(),c(),r.removeAttribute("tabindex")},s=this._renderer.listen(r,"blur",o),c=this._renderer.listen(r,"mousedown",o)})),r.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":xe(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(ie(1)).subscribe(s=>o(s?"open":"close"))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&ue(_p,5),t&2){let o;U(o=j())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(J("align",null)("tabIndex",r.mode!=="side"?"-1":null),Qe("visibility",!r._container&&!r.opened?"hidden":null),ne("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ro,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(De(),_(0,"div",1,0),ee(2),y())},dependencies:[Fn],encapsulation:2})}return n})(),ta=(()=>{class n{_dir=l(Ke,{optional:!0});_element=l(L);_ngZone=l(M);_changeDetectorRef=l(me);_animationDisabled=He();_transitionsEnabled=!1;_allDrawers;_drawers=new Ki;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=tn(e)}_autosize=l(Dp);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:tn(e)}_backdropOverride=null;backdropClick=new N;_start=null;_end=null;_left=null;_right=null;_destroyed=new v;_doCheckSubject=new v;_contentMargins={left:null,right:null};_contentMarginChanges=new v;get scrollable(){return this._userContent||this._content}_injector=l(K);constructor(){let e=l(q),t=l(Hl);this._dir?.change.pipe(z(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(z(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ze(this._allDrawers),z(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ze(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(an(10),z(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(z(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(z(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(z(this._drawers.changes)).subscribe(()=>{xe({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(z(ga(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,o){if(t&1&&Lt(o,Hi,5)(o,ea,5),t&2){let s;U(s=j())&&(r._content=s.first),U(s=j())&&(r._allDrawers=s)}},viewQuery:function(t,r){if(t&1&&ue(Hi,5),t&2){let o;U(o=j())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&ne("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[de([{provide:na,useExisting:n}])],ngContentSelectors:ud,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(De(dd),we(0,vp,1,2,"div",0),ee(1),ee(2,1),we(3,bp,2,0,"mat-drawer-content")),t&2&&(Ce(r.hasBackdrop?0:-1),b(3),Ce(r._content?-1:3))},dependencies:[Hi],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`],encapsulation:2})}return n})(),io=(()=>{class n extends Hi{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Se(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[de([{provide:Fn,useExisting:n},{provide:Hi,useExisting:n}]),oe],ngContentSelectors:ro,decls:1,vars:0,template:function(t,r){t&1&&(De(),ee(0))},encapsulation:2})}return n})(),ia=(()=>{class n extends ea{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=tn(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Fi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Fi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Se(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(J("tabIndex",r.mode!=="side"?"-1":null)("align",null),Qe("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),ne("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[de([{provide:ea,useExisting:n}]),oe],ngContentSelectors:ro,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(De(),_(0,"div",1,0),ee(2),y())},dependencies:[Fn],encapsulation:2})}return n})(),hd=(()=>{class n extends ta{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Se(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,o){if(t&1&&Lt(o,io,5)(o,ia,5),t&2){let s;U(s=j())&&(r._content=s.first),U(s=j())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&ne("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[de([{provide:na,useExisting:n},{provide:ta,useExisting:n}]),oe],ngContentSelectors:ud,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(De(dd),we(0,yp,1,2,"div",0),ee(1),ee(2,1),we(3,wp,2,0,"mat-sidenav-content")),t&2&&(Ce(r.hasBackdrop?0:-1),b(3),Ce(r._content?-1:3))},dependencies:[io],styles:[Cp],encapsulation:2})}return n})(),fd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({imports:[Vs,Pe,Vs]})}return n})();var oo=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new v;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var oa=new m("CDK_TREE_NODE_OUTLET_NODE"),so=(()=>{class n{viewContainer=l(Be);_node=l(oa,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkTreeNodeOutlet",""]]})}return n})(),ra=class{$implicit;level;index;count;constructor(i){this.$implicit=i}},ao=(()=>{class n{template=l(ct);when;static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:[0,"cdkTreeNodeDefWhen","when"]}})}return n})();function pd(){return Error("Could not find a tree control, levelAccessor, or childrenAccessor for the tree.")}var jn=(()=>{class n{_differs=l(nr);_changeDetectorRef=l(me);_elementRef=l(L);_dir=l(Ke);_onDestroy=new v;_dataDiffer;_defaultNodeDef=null;_dataSubscription;_levels=new Map;_parents=new Map;_ariaSets=new Map;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}_dataSource;treeControl;levelAccessor;childrenAccessor;trackBy;expansionKey;_nodeOutlet;_nodeDefs;viewChange=new le({start:0,end:Number.MAX_VALUE});_expansionModel;_flattenedNodes=new le([]);_nodeType=new le(null);_nodes=new le(new Map);_keyManagerNodes=new le([]);_keyManagerFactory=l(Ll);_keyManager;_viewInit=!1;ngAfterContentInit(){this._initializeKeyManager()}ngAfterContentChecked(){this._updateDefaultNodeDefinition(),this._subscribeToDataChanges()}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this._nodes.complete(),this._keyManagerNodes.complete(),this._nodeType.complete(),this._flattenedNodes.complete(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,this._keyManager?.destroy()}ngOnInit(){this._checkTreeControlUsage(),this._initializeDataDiffer()}ngAfterViewInit(){this._viewInit=!0}_updateDefaultNodeDefinition(){let e=this._nodeDefs.filter(t=>!t.when);e.length>1,this._defaultNodeDef=e[0]}_setNodeTypeIfUnset(e){this._nodeType.value===null&&this._nodeType.next(e)}_switchDataSource(e){this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._subscribeToDataChanges()}_getExpansionModel(){return this.treeControl?this.treeControl.expansionModel:(this._expansionModel??=new oo(!0),this._expansionModel)}_subscribeToDataChanges(){if(this._dataSubscription)return;let e;zl(this._dataSource)?e=this._dataSource.connect(this):tt(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=p(this._dataSource)),e&&(this._dataSubscription=this._getRenderData(e).pipe(z(this._onDestroy)).subscribe(t=>{this._renderDataChanges(t)}))}_getRenderData(e){let t=this._getExpansionModel();return at([e,this._nodeType,t.changed.pipe(Ze(null),re(r=>{this._emitExpansionChanges(r)}))]).pipe(fe(([r,o])=>o===null?p({renderNodes:r,flattenedNodes:null,nodeType:o}):this._computeRenderingData(r,o).pipe(A(s=>ce(f({},s),{nodeType:o})))))}_renderDataChanges(e){if(e.nodeType===null){this.renderNodeChanges(e.renderNodes);return}this._updateCachedData(e.flattenedNodes),this.renderNodeChanges(e.renderNodes),this._updateKeyManagerItems(e.flattenedNodes)}_emitExpansionChanges(e){if(!e)return;let t=this._nodes.value;for(let r of e.added)t.get(r)?._emitExpansionState(!0);for(let r of e.removed)t.get(r)?._emitExpansionState(!1)}_initializeKeyManager(){let e=at([this._keyManagerNodes,this._nodes]).pipe(A(([r,o])=>r.reduce((s,c)=>{let a=o.get(this._getExpansionKey(c));return a&&s.push(a),s},[]))),t={trackBy:r=>this._getExpansionKey(r.data),skipPredicate:r=>!!r.isDisabled,typeAheadDebounceInterval:!0,horizontalOrientation:this._dir.value};this._keyManager=this._keyManagerFactory(e,t)}_initializeDataDiffer(){let e=this.trackBy??((t,r)=>this._getExpansionKey(r));this._dataDiffer=this._differs.find([]).create(e)}_checkTreeControlUsage(){}renderNodeChanges(e,t=this._dataDiffer,r=this._nodeOutlet.viewContainer,o){let s=t.diff(e);!s&&!this._viewInit||(s?.forEachOperation((c,a,d)=>{if(c.previousIndex==null)this.insertNode(e[d],d,r,o);else if(d==null)r.remove(a);else{let u=r.get(a);r.move(u,d)}}),s?.forEachIdentityChange(c=>{let a=c.item;if(c.currentIndex!=null){let d=r.get(c.currentIndex);d.context.$implicit=a}}),o?this._changeDetectorRef.markForCheck():this._changeDetectorRef.detectChanges())}_getNodeDef(e,t){if(this._nodeDefs.length===1)return this._nodeDefs.first;let r=this._nodeDefs.find(o=>o.when&&o.when(t,e))||this._defaultNodeDef;return r}insertNode(e,t,r,o){let s=this._getLevelAccessor(),c=this._getNodeDef(e,t),a=this._getExpansionKey(e),d=new ra(e);d.index=t,o??=this._parents.get(a)??void 0,s?d.level=s(e):o!==void 0&&this._levels.has(this._getExpansionKey(o))?d.level=this._levels.get(this._getExpansionKey(o))+1:d.level=0,this._levels.set(a,d.level),(r||this._nodeOutlet.viewContainer).createEmbeddedView(c.template,d,t),rn.mostRecentTreeNode&&(rn.mostRecentTreeNode.data=e)}isExpanded(e){return!!(this.treeControl?.isExpanded(e)||this._expansionModel?.isSelected(this._getExpansionKey(e)))}toggle(e){this.treeControl?this.treeControl.toggle(e):this._expansionModel&&this._expansionModel.toggle(this._getExpansionKey(e))}expand(e){this.treeControl?this.treeControl.expand(e):this._expansionModel&&this._expansionModel.select(this._getExpansionKey(e))}collapse(e){this.treeControl?this.treeControl.collapse(e):this._expansionModel&&this._expansionModel.deselect(this._getExpansionKey(e))}toggleDescendants(e){this.treeControl?this.treeControl.toggleDescendants(e):this._expansionModel&&(this.isExpanded(e)?this.collapseDescendants(e):this.expandDescendants(e))}expandDescendants(e){if(this.treeControl)this.treeControl.expandDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.select(this._getExpansionKey(e)),this._getDescendants(e).pipe(ie(1),z(this._onDestroy)).subscribe(r=>{t.select(...r.map(o=>this._getExpansionKey(o)))})}}collapseDescendants(e){if(this.treeControl)this.treeControl.collapseDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.deselect(this._getExpansionKey(e)),this._getDescendants(e).pipe(ie(1),z(this._onDestroy)).subscribe(r=>{t.deselect(...r.map(o=>this._getExpansionKey(o)))})}}expandAll(){this.treeControl?this.treeControl.expandAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.select(...e))}collapseAll(){this.treeControl?this.treeControl.collapseAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.deselect(...e))}_getLevelAccessor(){return this.treeControl?.getLevel?.bind(this.treeControl)??this.levelAccessor}_getChildrenAccessor(){return this.treeControl?.getChildren?.bind(this.treeControl)??this.childrenAccessor}_getDirectChildren(e){let t=this._getLevelAccessor(),r=this._expansionModel??this.treeControl?.expansionModel;if(!r)return p([]);let o=this._getExpansionKey(e),s=r.changed.pipe(fe(a=>a.added.includes(o)?p(!0):a.removed.includes(o)?p(!1):Te),Ze(this.isExpanded(e)));if(t)return at([s,this._flattenedNodes]).pipe(A(([a,d])=>a?this._findChildrenByLevel(t,d,e,1):[]));let c=this._getChildrenAccessor();if(c)return Zt(c(e)??[]);throw pd()}_findChildrenByLevel(e,t,r,o){let s=this._getExpansionKey(r),c=t.findIndex(h=>this._getExpansionKey(h)===s),a=e(r),d=a+o,u=[];for(let h=c+1;h<t.length;h++){let g=e(t[h]);if(g<=a)break;g<=d&&u.push(t[h])}return u}_registerNode(e){this._nodes.value.set(this._getExpansionKey(e.data),e),this._nodes.next(this._nodes.value)}_unregisterNode(e){this._nodes.value.delete(this._getExpansionKey(e.data)),this._nodes.next(this._nodes.value)}_getLevel(e){return this._levels.get(this._getExpansionKey(e))}_getSetSize(e){return this._getAriaSet(e).length}_getPositionInSet(e){let t=this._getAriaSet(e),r=this._getExpansionKey(e);return t.findIndex(o=>this._getExpansionKey(o)===r)+1}_getNodeParent(e){let t=this._parents.get(this._getExpansionKey(e.data));return t&&this._nodes.value.get(this._getExpansionKey(t))}_getNodeChildren(e){return this._getDirectChildren(e.data).pipe(A(t=>t.reduce((r,o)=>{let s=this._nodes.value.get(this._getExpansionKey(o));return s&&r.push(s),r},[])))}_sendKeydownToKeyManager(e){if(e.target===this._elementRef.nativeElement)this._keyManager.onKeydown(e);else{let t=this._nodes.getValue();for(let[,r]of t)if(e.target===r._elementRef.nativeElement){this._keyManager.onKeydown(e);break}}}_getDescendants(e){if(this.treeControl)return p(this.treeControl.getDescendants(e));if(this.levelAccessor){let t=this._findChildrenByLevel(this.levelAccessor,this._flattenedNodes.value,e,1/0);return p(t)}if(this.childrenAccessor)return this._getAllChildrenRecursively(e).pipe(wo((t,r)=>(t.push(...r),t),[]));throw pd()}_getAllChildrenRecursively(e){return this.childrenAccessor?Zt(this.childrenAccessor(e)).pipe(ie(1),fe(t=>{for(let r of t)this._parents.set(this._getExpansionKey(r),e);return p(...t).pipe(Ct(r=>kt(p([r]),this._getAllChildrenRecursively(r))))})):p([])}_getExpansionKey(e){return this.expansionKey?.(e)??e}_getAriaSet(e){let t=this._getExpansionKey(e),r=this._parents.get(t),o=r?this._getExpansionKey(r):null;return this._ariaSets.get(o)??[e]}_findParentForNode(e,t,r){if(!r.length)return null;let o=this._levels.get(this._getExpansionKey(e))??0;for(let s=t-1;s>=0;s--){let c=r[s];if((this._levels.get(this._getExpansionKey(c))??0)<o)return c}return null}_flattenNestedNodesWithExpansion(e,t=0){let r=this._getChildrenAccessor();return r?p(...e).pipe(Ct(o=>{let s=this._getExpansionKey(o);this._parents.has(s)||this._parents.set(s,null),this._levels.set(s,t);let c=Zt(r(o));return kt(p([o]),c.pipe(ie(1),re(a=>{this._ariaSets.set(s,[...a??[]]);for(let d of a??[]){let u=this._getExpansionKey(d);this._parents.set(u,o),this._levels.set(u,t+1)}}),fe(a=>a?this._flattenNestedNodesWithExpansion(a,t+1).pipe(A(d=>this.isExpanded(o)?d:[])):p([]))))}),wo((o,s)=>(o.push(...s),o),[])):p([...e])}_computeRenderingData(e,t){if(this.childrenAccessor&&t==="flat")return this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(A(r=>({renderNodes:r,flattenedNodes:r})));if(this.levelAccessor&&t==="nested"){let r=this.levelAccessor;return p(e.filter(o=>r(o)===0)).pipe(A(o=>({renderNodes:o,flattenedNodes:e})),re(({flattenedNodes:o})=>{this._calculateParents(o)}))}else return t==="flat"?p({renderNodes:e,flattenedNodes:e}).pipe(re(({flattenedNodes:r})=>{this._calculateParents(r)})):(this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(A(r=>({renderNodes:e,flattenedNodes:r}))))}_updateCachedData(e){this._flattenedNodes.next(e)}_updateKeyManagerItems(e){this._keyManagerNodes.next(e)}_calculateParents(e){let t=this._getLevelAccessor();if(t){this._clearPreviousCache();for(let r=0;r<e.length;r++){let o=e[r],s=this._getExpansionKey(o);this._levels.set(s,t(o));let c=this._findParentForNode(o,r,e);this._parents.set(s,c);let a=c?this._getExpansionKey(c):null,d=this._ariaSets.get(a)??[];d.splice(r,0,o),this._ariaSets.set(a,d)}}}_forEachExpansionKey(e){let t=[],r=[];this._nodes.value.forEach(o=>{t.push(this._getExpansionKey(o.data)),r.push(this._getDescendants(o.data))}),r.length>0?at(r).pipe(ie(1),z(this._onDestroy)).subscribe(o=>{o.forEach(s=>s.forEach(c=>t.push(this._getExpansionKey(c)))),e(t)}):e(t)}_clearPreviousCache(){this._parents.clear(),this._levels.clear(),this._ariaSets.clear()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["cdk-tree"]],contentQueries:function(t,r,o){if(t&1&&Lt(o,ao,5),t&2){let s;U(s=j())&&(r._nodeDefs=s)}},viewQuery:function(t,r){if(t&1&&ue(so,7),t&2){let o;U(o=j())&&(r._nodeOutlet=o.first)}},hostAttrs:["role","tree",1,"cdk-tree"],hostBindings:function(t,r){t&1&&P("keydown",function(s){return r._sendKeydownToKeyManager(s)})},inputs:{dataSource:"dataSource",treeControl:"treeControl",levelAccessor:"levelAccessor",childrenAccessor:"childrenAccessor",trackBy:"trackBy",expansionKey:"expansionKey"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(t,r){t&1&&Et(0,0)},dependencies:[so],encapsulation:2,changeDetection:1})}return n})(),rn=(()=>{class n{_elementRef=l(L);_tree=l(jn);_tabindex=-1;_type="flat";get role(){return"treeitem"}set role(e){}get isExpandable(){return this._isExpandable()}set isExpandable(e){this._inputIsExpandable=e,!(this.data&&!this._isExpandable||!this._inputIsExpandable)&&(this._inputIsExpanded?this.expand():this._inputIsExpanded===!1&&this.collapse())}get isExpanded(){return this._tree.isExpanded(this._data)}set isExpanded(e){this._inputIsExpanded=e,e?this.expand():this.collapse()}isDisabled=!1;typeaheadLabel=null;getLabel(){return this.typeaheadLabel||this._elementRef.nativeElement.textContent?.trim()||""}activation=new N;expandedChange=new N;static mostRecentTreeNode=null;_destroyed=new v;_dataChanges=new v;_inputIsExpandable=!1;_inputIsExpanded=void 0;_shouldFocus=!0;_parentNodeAriaLevel;get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._dataChanges.next())}_data;get isLeafNode(){return this._tree.treeControl?.isExpandable!==void 0&&!this._tree.treeControl.isExpandable(this._data)?!0:this._tree.treeControl?.isExpandable===void 0&&this._tree.treeControl?.getDescendants(this._data).length===0}get level(){return this._tree._getLevel(this._data)??this._parentNodeAriaLevel}_isExpandable(){return this._tree.treeControl?!this.isLeafNode:this._inputIsExpandable}_getAriaExpanded(){return this._isExpandable()?String(this.isExpanded):null}_getSetSize(){return this._tree._getSetSize(this._data)}_getPositionInSet(){return this._tree._getPositionInSet(this._data)}_changeDetectorRef=l(me);constructor(){n.mostRecentTreeNode=this}ngOnInit(){this._parentNodeAriaLevel=Sp(this._elementRef.nativeElement),this._tree._getExpansionModel().changed.pipe(A(()=>this.isExpanded),Gn(),z(this._destroyed)).pipe(z(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()),this._tree._setNodeTypeIfUnset(this._type),this._tree._registerNode(this)}ngOnDestroy(){n.mostRecentTreeNode===this&&(n.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}getParent(){return this._tree._getNodeParent(this)??null}getChildren(){return this._tree._getNodeChildren(this)}focus(){this._tabindex=0,this._shouldFocus&&this._elementRef.nativeElement.focus(),this._changeDetectorRef.markForCheck()}unfocus(){this._tabindex=-1,this._changeDetectorRef.markForCheck()}activate(){this.isDisabled||this.activation.next(this._data)}collapse(){this.isExpandable&&this._tree.collapse(this._data)}expand(){this.isExpandable&&this._tree.expand(this._data)}makeFocusable(){this._tabindex=0,this._changeDetectorRef.markForCheck()}_focusItem(){this.isDisabled||this._tree._keyManager.focusItem(this)}_setActiveItem(){this.isDisabled||(this._shouldFocus=!1,this._tree._keyManager.focusItem(this),this._shouldFocus=!0)}_emitExpansionState(e){this.expandedChange.emit(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["cdk-tree-node"]],hostAttrs:["role","treeitem",1,"cdk-tree-node"],hostVars:5,hostBindings:function(t,r){t&1&&P("click",function(){return r._setActiveItem()})("focus",function(){return r._focusItem()}),t&2&&(tr("tabIndex",r._tabindex),J("aria-expanded",r._getAriaExpanded())("aria-level",r.level+1)("aria-posinset",r._getPositionInSet())("aria-setsize",r._getSetSize()))},inputs:{role:"role",isExpandable:[2,"isExpandable","isExpandable",Q],isExpanded:"isExpanded",isDisabled:[2,"isDisabled","isDisabled",Q],typeaheadLabel:[0,"cdkTreeNodeTypeaheadLabel","typeaheadLabel"]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["cdkTreeNode"]})}return n})();function Sp(n){let i=n.parentElement;for(;i&&!Ap(i);)i=i.parentElement;return i?i.classList.contains("cdk-nested-tree-node")?se(i.getAttribute("aria-level")):0:-1}function Ap(n){let i=n.classList;return!!(i?.contains("cdk-nested-tree-node")||i?.contains("cdk-tree"))}var xp=/([A-Za-z%]+)$/,sa=(()=>{class n{_treeNode=l(rn);_tree=l(jn);_element=l(L);_dir=l(Ke,{optional:!0});_currentPadding=null;_destroyed=new v;indentUnits="px";get level(){return this._level}set level(e){this._setLevelInput(e)}_level;get indent(){return this._indent}set indent(e){this._setIndentInput(e)}_indent=40;constructor(){this._setPadding(),this._dir?.change.pipe(z(this._destroyed)).subscribe(()=>this._setPadding(!0)),this._treeNode._dataChanges.subscribe(()=>this._setPadding())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){let e=(this._treeNode.data&&this._tree._getLevel(this._treeNode.data))??null,t=this._level==null?e:this._level;return typeof t=="number"?`${t*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){let t=this._paddingIndent();if(t!==this._currentPadding||e){let r=this._element.nativeElement,o=this._dir&&this._dir.value==="rtl"?"paddingRight":"paddingLeft",s=o==="paddingLeft"?"paddingRight":"paddingLeft";r.style[o]=t||"",r.style[s]="",this._currentPadding=t}}_setLevelInput(e){this._level=isNaN(e)?null:e,this._setPadding()}_setIndentInput(e){let t=e,r="px";if(typeof e=="string"){let o=e.split(xp);t=o[0],r=o[1]||r}this.indentUnits=r,this._indent=se(t),this._setPadding()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:[2,"cdkTreeNodePadding","level",se],indent:[0,"cdkTreeNodePaddingIndent","indent"]}})}return n})(),aa=(()=>{class n{_tree=l(jn);_treeNode=l(rn);recursive=!1;_toggle(e){e.stopPropagation(),this.recursive?this._tree.toggleDescendants(this._treeNode.data):this._tree.toggle(this._treeNode.data),this._tree._keyManager.focusItem(this._treeNode)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkTreeNodeToggle",""]],hostAttrs:["tabindex","-1"],hostBindings:function(t,r){t&1&&P("click",function(s){return r._toggle(s)})("keydown.Enter",function(s){return r._toggle(s),s.preventDefault()})("keydown.Space",function(s){return r._toggle(s),s.preventDefault()})},inputs:{recursive:[2,"cdkTreeNodeToggleRecursive","recursive",Q]}})}return n})();var md=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({})}return n})();function Rp(n){return!!n._isNoopTreeKeyManager}var _d=(()=>{class n extends rn{get tabIndexInputBinding(){return this._tabIndexInputBinding}set tabIndexInputBinding(e){this._tabIndexInputBinding=e}_tabIndexInputBinding;defaultTabIndex=0;_getTabindexAttribute(){return Rp(this._tree._keyManager)?this.tabIndexInputBinding:this._tabindex}get disabled(){return this.isDisabled}set disabled(e){this.isDisabled=e}constructor(){super();let e=l(new Kn("tabindex"),{optional:!0});this.tabIndexInputBinding=Number(e)||this.defaultTabIndex}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["mat-tree-node"]],hostAttrs:[1,"mat-tree-node"],hostVars:5,hostBindings:function(t,r){t&1&&P("click",function(){return r._focusItem()}),t&2&&(tr("tabIndex",r._getTabindexAttribute()),J("aria-expanded",r._getAriaExpanded())("aria-level",r.level+1)("aria-posinset",r._getPositionInSet())("aria-setsize",r._getSetSize()))},inputs:{tabIndexInputBinding:[2,"tabIndex","tabIndexInputBinding",e=>e==null?0:se(e)],disabled:[2,"disabled","disabled",Q]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["matTreeNode"],features:[de([{provide:rn,useExisting:n}]),oe]})}return n})(),vd=(()=>{class n extends ao{data;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Se(n)))(r||n)}})();static \u0275dir=F({type:n,selectors:[["","matTreeNodeDef",""]],inputs:{when:[0,"matTreeNodeDefWhen","when"],data:[0,"matTreeNode","data"]},features:[de([{provide:ao,useExisting:n}]),oe]})}return n})();var bd=(()=>{class n extends sa{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Se(n)))(r||n)}})();static \u0275dir=F({type:n,selectors:[["","matTreeNodePadding",""]],inputs:{level:[2,"matTreeNodePadding","level",se],indent:[0,"matTreeNodePaddingIndent","indent"]},features:[de([{provide:sa,useExisting:n}]),oe]})}return n})(),gd=(()=>{class n{viewContainer=l(Be);_node=l(oa,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matTreeNodeOutlet",""]],features:[de([{provide:so,useExisting:n}])]})}return n})(),co=(()=>{class n extends jn{_nodeOutlet=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Se(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-tree"]],viewQuery:function(t,r){if(t&1&&ue(gd,7),t&2){let o;U(o=j())&&(r._nodeOutlet=o.first)}},hostAttrs:[1,"mat-tree"],exportAs:["matTree"],features:[de([{provide:jn,useExisting:n}]),oe],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(t,r){t&1&&Et(0,0)},dependencies:[gd],styles:[`.mat-tree {
  display: block;
  background-color: var(--mat-tree-container-background-color, var(--mat-sys-surface));
}

.mat-tree-node,
.mat-nested-tree-node {
  color: var(--mat-tree-node-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight));
}

.mat-tree-node {
  display: flex;
  align-items: center;
  flex: 1;
  word-wrap: break-word;
  min-height: var(--mat-tree-node-min-height, 48px);
}

.mat-nested-tree-node {
  border-bottom-width: 0;
}
`],encapsulation:2,changeDetection:1})}return n})(),yd=(()=>{class n extends aa{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Se(n)))(r||n)}})();static \u0275dir=F({type:n,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:[0,"matTreeNodeToggleRecursive","recursive"]},features:[de([{provide:aa,useExisting:n}]),oe]})}return n})();var wd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({imports:[md,Pe]})}return n})();function Cd(n){return Error(`Unable to find icon with the name "${n}"`)}function Ip(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Dd(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Ed(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var bt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Ad=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new bt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let s=this._sanitizer.sanitize(Ae.HTML,r);if(!s)throw Ed(r);let c=Yt(s);return this._addSvgIconConfig(e,t,new bt("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new bt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(Ae.HTML,t);if(!o)throw Ed(t);let s=Yt(o);return this._addSvgIconSetConfig(e,new bt("",s,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Ae.RESOURCE_URL,e);if(!t)throw Dd(e);let r=this._cachedIconsByUrl.get(t);return r?p(lo(r)):this._loadSvgIconFromConfig(new bt(e,null)).pipe(re(o=>this._cachedIconsByUrl.set(t,o)),A(o=>lo(o)))}getNamedSvgIcon(e,t=""){let r=Sd(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(t);return s?this._getSvgFromIconSetConfigs(e,s):Wi(Cd(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?p(lo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(A(t=>lo(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return p(r);let o=t.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Wn(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ae.RESOURCE_URL,s.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),p(null)})));return ma(o).pipe(A(()=>{let s=this._extractIconWithNameFromAnySet(e,t);if(!s)throw Cd(e);return s}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(s,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(re(t=>e.svgText=t),A(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?p(null):this._fetchIcon(e).pipe(re(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let c=this._svgElementFromString(Yt("<svg></svg>"));return c.appendChild(s),this._setSvgAttributes(c,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Yt("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:c}=r[o];s!=="id"&&t.setAttribute(s,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Ip();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let s=this._sanitizer.sanitize(Ae.RESOURCE_URL,t);if(!s)throw Dd(t);let c=this._inProgressUrlFetches.get(s);if(c)return c;let a=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(A(d=>Yt(d)),cn(()=>this._inProgressUrlFetches.delete(s)),va());return this._inProgressUrlFetches.set(s,a),a}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Sd(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Tp(o)?new bt(o.url,null,o.options):new bt(o,null)}}static \u0275fac=function(t){return new(t||n)(R(Zo,8),R(si),R(E,8),R(Ft))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function lo(n){return n.cloneNode(!0)}function Sd(n,i){return n+":"+i}function Tp(n){return!!(n.url&&n.options)}var kp=["*"],Op=new m("MAT_ICON_DEFAULT_OPTIONS"),Fp=new m("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(E),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),xd=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Np=xd.map(n=>`[${n}]`).join(", "),Pp=/^url\(['"]?#(.*?)['"]?\)$/,uo=(()=>{class n{_elementRef=l(L);_iconRegistry=l(Ad);_location=l(Fp);_errorHandler=l(Ft);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=st.EMPTY;constructor(){let e=l(new Kn("aria-hidden"),{optional:!0}),t=l(Op,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Np),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)xd.forEach(s=>{let c=t[o],a=c.getAttribute(s),d=a?a.match(Pp):null;if(d){let u=r.get(c);u||(u=[],r.set(c,u)),u.push({name:s,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(ie(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(J("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),dt(r.color?"mat-"+r.color:""),ne("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Q],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:kp,decls:1,vars:0,template:function(t,r){t&1&&(De(),ee(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
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
`],encapsulation:2})}return n})(),Rd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({imports:[Pe]})}return n})();function Vp(n,i){if(n&1){let e=Fe();_(0,"button",8),P("click",function(){be(e);let r=O(2);return ye(r.handleResetFilterClick())}),G(1," Show all series "),y()}}function Bp(n,i){if(n&1){let e=Fe();_(0,"button",9),P("click",function(){be(e);let r=O(2);return ye(r.handleResetFilterClick())}),G(1," Show all series "),y()}}function Up(n,i){if(n&1){let e=Fe();_(0,"button",8),P("click",function(){be(e);let r=O().$implicit,o=O(2);return ye(o.handleNodeClick(r.key))}),G(1),y()}if(n&2){let e=O().$implicit;b(),Ge(" ",e.label," ")}}function jp(n,i){if(n&1){let e=Fe();_(0,"button",9),P("click",function(){be(e);let r=O().$implicit,o=O(2);return ye(o.handleNodeClick(r.key))}),G(1),y()}if(n&2){let e=O().$implicit;b(),Ge(" ",e.label," ")}}function zp(n,i){if(n&1&&(_(0,"mat-tree-node",10),G(1),Oe(2,Up,2,1,"button",4)(3,jp,2,1,"ng-template",null,2,Vt),y()),n&2){let e=i.$implicit,t=nt(4),r=O(2);b(),Ge(" ",e.type,":"),b(),X("ngIf",r.selectedKey===e.key)("ngIfElse",t)}}function Hp(n,i){if(n&1&&(_(0,"mat-tree-node",11),G(1),_(2,"button",12)(3,"mat-icon",13),G(4),y()(),G(5),y()),n&2){let e=i.$implicit;O();let t=nt(5);X("cdkTreeNodeTypeaheadLabel",e.label),b(),Ge(" ",e.type,":"),b(),J("aria-label","Toggle "+e.label),b(2),Ge(" ",t.isExpanded(e)?"expand_more":"chevron_right"," "),b(),Ge(" ",e.label," ")}}function $p(n,i){if(n&1&&(_(0,"div"),Oe(1,Vp,2,0,"button",4)(2,Bp,2,0,"ng-template",null,0,Vt),_(4,"mat-tree",5,1),Oe(6,zp,5,3,"mat-tree-node",6)(7,Hp,6,5,"mat-tree-node",7),y()()),n&2){let e=nt(3),t=O();b(),X("ngIf",t.selectedKey===null)("ngIfElse",e),b(3),X("dataSource",t.data())("childrenAccessor",t.childrenAccessor),b(3),X("matTreeNodeDefWhen",t.hasChild)}}var ho=class n{dicomHierarchy;setSeriesFilter=new N;resetFilter=new N;tree;selectedKey=null;data=ut(()=>{let i=this.dicomHierarchy();if(!i?.patients)return[];let e=Array.from(i?.patients.entries(),([t,r])=>({label:`${t}`,key:t,type:"Name",children:Array.from(r.studies.entries(),([o,s])=>({label:`${o}`,key:o,type:"Study",children:Array.from(s?.series.entries(),([c,a])=>{let d=new Map;return a.instances instanceof Map&&a.instances.forEach(u=>{let h=u.acquisition_number||"Unknown";d.has(h)||d.set(h,[]),d.get(h)?.push(u)}),d.size>1?{label:`${a.series_date} ${a.series_time} ${a.modality} ${a.body_part_examined}`,key:c,type:"Series",children:Array.from(d.entries()).sort(([u],[h])=>Number(u)-Number(h)).map(([u,h])=>({label:`Acquisition ${u}`,key:`${c}_acq_${u}`,type:"Acquisition",children:Array.isArray(a.instances)?a.instances:[]}))}:{label:`${a.series_date} ${a.series_time} ${a.modality} ${a.body_part_examined}`,key:c,type:"Series",children:Array.isArray(a.instances)?a.instances:[]}})}))}));return setTimeout(()=>{this.tree.expandAll()}),e});handleNodeClick(i){this.selectedKey=i,this.setSeriesFilter.emit(i)}handleResetFilterClick(){this.selectedKey=null,this.resetFilter.emit()}childrenAccessor=i=>i.children??[];hasChild=(i,e)=>!!e.children&&e.children.length>0;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["dicom-tree"]],viewQuery:function(e,t){if(e&1&&ue(co,5),e&2){let r;U(r=j())&&(t.tree=r.first)}},inputs:{dicomHierarchy:"dicomHierarchy"},outputs:{setSeriesFilter:"setSeriesFilter",resetFilter:"resetFilter"},decls:1,vars:1,consts:[["regularResetButton",""],["tree",""],["regularButton",""],[4,"ngIf"],["mat-stroked-button","",3,"click",4,"ngIf","ngIfElse"],[3,"dataSource","childrenAccessor"],["matTreeNodePadding","",4,"matTreeNodeDef"],["matTreeNodePadding","","matTreeNodeToggle","",3,"cdkTreeNodeTypeaheadLabel",4,"matTreeNodeDef","matTreeNodeDefWhen"],["mat-stroked-button","",3,"click"],["mat-button","",3,"click"],["matTreeNodePadding",""],["matTreeNodePadding","","matTreeNodeToggle","",3,"cdkTreeNodeTypeaheadLabel"],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"]],template:function(e,t){e&1&&Oe(0,$p,8,5,"div",3),e&2&&X("ngIf",t.data()&&t.data().length>0)},dependencies:[it,Bt,wd,vd,bd,yd,co,_d,Rd,uo,nn,Bn,Zs],encapsulation:2})};var Wp=["determinateSpinner"];function Gp(n,i){if(n&1&&(Eo(),_(0,"svg",11),ae(1,"circle",12),y()),n&2){let e=O();J("viewBox",e._viewBox()),b(),Qe("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),J("r",e._circleRadius())}}var qp=new m("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Md})}),Md=100,Xp=10,Id=(()=>{class n{_elementRef=l(L);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(qp),t=$s(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Md;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Xp)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&ue(Wp,5),t&2){let o;U(o=j())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(J("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),dt("mat-"+r.color),Qe("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),ne("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",se],diameter:[2,"diameter","diameter",se],strokeWidth:[2,"strokeWidth","strokeWidth",se]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(Oe(0,Gp,2,8,"ng-template",null,0,Vt),_(2,"div",2,1),Eo(),_(4,"svg",3),ae(5,"circle",4),y()(),wa(),_(6,"div",5)(7,"div",6)(8,"div",7),Et(9,8),y(),_(10,"div",9),Et(11,8),y(),_(12,"div",10),Et(13,8),y()()()),t&2){let o=nt(1);b(4),J("viewBox",r._viewBox()),b(),Qe("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),J("r",r._circleRadius()),b(4),X("ngTemplateOutlet",o),b(2),X("ngTemplateOutlet",o),b(2),X("ngTemplateOutlet",o)}},dependencies:[Oo],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
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
  --mat-progress-spinner-animation-multiplier: 1.25;
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
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
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
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
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
`],encapsulation:2})}return n})();var po=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({imports:[Pe]})}return n})();var Td=new m("");var Kp=["knob"],Zp=["valueIndicatorContainer"];function Qp(n,i){if(n&1&&(_(0,"div",2,1)(2,"div",5)(3,"span",6),G(4),y()()()),n&2){let e=O();b(4),Ba(e.valueIndicatorText)}}var Jp=["trackActive"],em=["*"];function tm(n,i){if(n&1&&ae(0,"div"),n&2){let e=i.$implicit,t=i.$index,r=O(3);dt(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),Qe("transform",r._calcTickMarkTransform(t))}}function nm(n,i){if(n&1&&La(0,tm,1,4,"div",8,Pa),n&2){let e=O(2);Va(e._tickMarks)}}function im(n,i){if(n&1&&(_(0,"div",6,1),we(2,nm,2,0),y()),n&2){let e=O();b(2),Ce(e._cachedWidth?2:-1)}}function rm(n,i){if(n&1&&ae(0,"mat-slider-visual-thumb",7),n&2){let e=O();X("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var S=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(S||{}),zn=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(zn||{}),ca=new m("_MatSlider"),kd=new m("_MatSliderThumb"),om=new m("_MatSliderRangeThumb"),Od=new m("_MatSliderVisualThumb");var sm=(()=>{class n{_cdr=l(me);_ngZone=l(M);_slider=l(ca);_renderer=l(We);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=l(L).nativeElement;_platform=l(q);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(t,"pointermove",this._onPointerMove),r.listen(t,"pointerdown",this._onDragStart),r.listen(t,"pointerup",this._onDragEnd),r.listen(t,"pointerleave",this._onMouseLeave),r.listen(t,"focus",this._onFocus),r.listen(t,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===Ie.FADING_IN||e?.state===Ie.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===S.START?S.END:S.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===S.START?S.END:S.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,r){if(t&1&&ue(qs,5)(Kp,5)(Zp,5),t&2){let o;U(o=j())&&(r._ripple=o.first),U(o=j())&&(r._knob=o.first),U(o=j())&&(r._valueIndicatorContainer=o.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[de([{provide:Od,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,r){t&1&&(we(0,Qp,5,1,"div",2),ae(1,"div",3,0)(3,"div",4)),t&2&&(Ce(r.discrete?0:-1),b(3),X("matRippleDisabled",!0))},dependencies:[qs],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})(),Fd=(()=>{class n{_ngZone=l(M);_cdr=l(me);_elementRef=l(L);_dir=l(Ke,{optional:!0});_globalRippleOptions=l(ji,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(S.END),r=this._getInput(S.START);t&&(t.disabled=this._disabled),r&&(r.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(S.END),r=this._getInput(S.START),o=t.value,s=r.value;r.min=e.new,t.min=Math.max(e.new,r.value),r.max=Math.min(t.max,t.value),r._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,r):this._onTranslateXChangeBySideEffect(r,t),o!==t.value&&this._onValueChange(t),s!==r.value&&this._onValueChange(r)}_updateMinNonRange(e){let t=this._getInput(S.END);if(t){let r=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(S.END),r=this._getInput(S.START),o=t.value,s=r.value;t.max=e.new,r.max=Math.min(e.new,t.value),t.min=r.value,t._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,t):this._onTranslateXChangeBySideEffect(t,r),o!==t.value&&this._onValueChange(t),s!==r.value&&this._onValueChange(r)}_updateMaxNonRange(e){let t=this._getInput(S.END);if(t){let r=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(S.END),t=this._getInput(S.START),r=e.value,o=t.value,s=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<s?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),r!==e.value&&this._onValueChange(e),o!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(S.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=He();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=ut(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=l(q);constructor(){l(Ye).load(to);let e=this._isRtl();$a(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(S.END),t=this._getInput(S.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let r=this._getThumb(S.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(S.END),t=this._getInput(S.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(S.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(S.START)._isActive||this._getThumb(S.END)._isActive}_getValue(e=S.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(S.START)?._skipUIUpdate||this._getInput(S.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(S.END),t=this._getInput(S.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(S.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(S.START),t=this._getInput(S.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===S.END?S.END:S.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===S.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let r=this._getThumb(e.thumbPosition);t.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(S.END),t=this._getInput(S.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let r=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),r=Math.max(Math.round((t-this.min)/e),0)+1,o=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(zn.ACTIVE).concat(Array(o).fill(zn.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),r=this._getValue(S.START),o=Math.max(Math.round((r-this.min)/e),0),s=Math.max(Math.round((t-r)/e)+1,0),c=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(o).fill(zn.INACTIVE).concat(Array(s).fill(zn.ACTIVE),Array(c).fill(zn.INACTIVE))}_getInput(e){if(e===S.END&&this._input)return this._input;if(this._inputs?.length)return e===S.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===S.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,t){let r=t.width/2,o=t.x+r,s=t.y+r,c=e.clientX-o,a=e.clientY-s;return Math.pow(c,2)+Math.pow(a,2)<Math.pow(r,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-slider"]],contentQueries:function(t,r,o){if(t&1&&Lt(o,kd,5)(o,om,4),t&2){let s;U(s=j())&&(r._input=s.first),U(s=j())&&(r._inputs=s)}},viewQuery:function(t,r){if(t&1&&ue(Jp,5)(Od,5),t&2){let o;U(o=j())&&(r._trackActive=o.first),U(o=j())&&(r._thumbs=o)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,r){t&2&&(dt("mat-"+(r.color||"primary")),ne("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",Q],discrete:[2,"discrete","discrete",Q],showTickMarks:[2,"showTickMarks","showTickMarks",Q],min:[2,"min","min",se],color:"color",disableRipple:[2,"disableRipple","disableRipple",Q],max:[2,"max","max",se],step:[2,"step","step",se],displayWith:"displayWith"},exportAs:["matSlider"],features:[de([{provide:ca,useExisting:n}])],ngContentSelectors:em,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,r){t&1&&(De(),ee(0),_(1,"div",2),ae(2,"div",3),_(3,"div",4),ae(4,"div",5,0),y(),we(6,im,3,1,"div",6),y(),we(7,rm,1,3,"mat-slider-visual-thumb",7),ae(8,"mat-slider-visual-thumb",7)),t&2&&(b(6),Ce(r.showTickMarks?6:-1),b(),Ce(r._isRange?7:-1),b(),X("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText))},dependencies:[sm],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
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
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
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
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
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
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
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
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
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
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
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
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
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
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
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
`],encapsulation:2})}return n})();var am={provide:Td,useExisting:Xi(()=>la),multi:!0};var la=(()=>{class n{_ngZone=l(M);_elementRef=l(L);_cdr=l(me);_slider=l(ca);_platform=l(q);_listenerCleanups;get value(){return se(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new N;dragStart=new N;dragEnd=new N;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=S.END;get min(){return se(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return se(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return se(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return Q(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=pe("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new v;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=l(We);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,s=Math.floor((this._slider.max-this._slider.min)/o),c=this._slider._isRtl()?1-t/r:t/r,d=Math.round(c*s)/s*(this._slider.max-this._slider.min)+this._slider.min,u=Math.round(d/o)*o,h=this.value;if(u===h){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=u,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,r){t&1&&P("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),t&2&&J("aria-valuetext",r._valuetext())},inputs:{value:[2,"value","value",se]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[de([am,{provide:kd,useExisting:n}])]})}return n})();var Nd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=W({type:n});static \u0275inj=$({imports:[no,Pe]})}return n})();function lm(n,i){if(n&1){let e=Fe();_(0,"mat-slider",4)(1,"input",5),P("input",function(r){be(e);let o=O(2);return ye(o.onInputChange(r))}),y()()}if(n&2){let e=O(2);X("max",e.metadata()?e.metadata().series_total:1)("discrete",!0),b(),X("value",e.currentIndex())}}function dm(n,i){if(n&1&&(_(0,"div")(1,"div"),Oe(2,lm,2,3,"mat-slider",2),ae(3,"br"),_(4,"div",3),G(5),ae(6,"br"),G(7),y()()()),n&2){let e=O();b(2),X("ngIf",e.metadata().series_total>1),b(3),Ua(" Showing image ",e.currentIndex()," of ",e.metadata()?.series_total," in series. "),b(2),Ge(" Total amount of images: ",e.metadata()?.total," ")}}var mo=class n{dicomViewer;metadata;getMetadata=new N;currentIndex=ut(()=>{let i=this.metadata();return i?i.current_index+1:0});onInputChange(i){let e=parseInt(i.target.value),t=this.dicomViewer();t&&(t.render_image_at_index(e-1),this.getMetadata.emit())}handleWheel(i){return k(this,null,function*(){let e=this.dicomViewer();e&&(i.deltaY<0?e.render_previous_file():e.render_next_file(),this.getMetadata.emit())})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["dicom-renderer"]],inputs:{dicomViewer:"dicomViewer",metadata:"metadata"},outputs:{getMetadata:"getMetadata"},decls:3,vars:1,consts:[["id","viewer-canvas","width","512","height","512",3,"wheel"],[4,"ngIf"],["min","1","step","1",3,"max","discrete",4,"ngIf"],[1,"metadata"],["min","1","step","1",3,"max","discrete"],["matSliderThumb","",3,"input","value"]],template:function(e,t){e&1&&(_(0,"div")(1,"canvas",0),P("wheel",function(o){return t.handleWheel(o)}),y(),Oe(2,dm,8,4,"div",1),y()),e&2&&(b(2),X("ngIf",t.metadata()?.total))},dependencies:[it,Bt,po,nn,Nd,Fd,la],styles:["mat-slider[_ngcontent-%COMP%]{width:100%}.metadata[_ngcontent-%COMP%]{text-align:center}"]})};var um=["dragAndDrop"],go=class n{supportsFileSystemAccessAPI="getAsFileSystemHandle"in DataTransferItem.prototype;supportsWebkitGetAsEntry="webkitGetAsEntry"in DataTransferItem.prototype;dragAndCrop;handleFiles=new N;onDragOver(i){i.preventDefault()}onDrop(i){return k(this,null,function*(){i.preventDefault();let t=Array.from(i.dataTransfer?.items||[]).filter(d=>d.kind==="file").map(d=>this.supportsFileSystemAccessAPI?d.getAsFileSystemHandle():this.supportsWebkitGetAsEntry?d.webkitGetAsEntry():d.getAsFile()),r=[];try{for(var o=ua(t),s,c,a;s=!(c=yield o.next()).done;s=!1){let d=c.value;if(d.kind==="directory"||d.isDirectory)console.log(`Directory: ${d.name}`);else if(d.name){let u=yield d.getFile();r.push(u),console.log(`File: ${d.name}`)}else d instanceof File?(r.push(d),console.log(`File instance: ${d.name}`)):console.log("Unknown entry:",d)}}catch(c){a=[c]}finally{try{s&&(c=o.return)&&(yield c.call(o))}finally{if(a)throw a[0]}}this.handleFiles.emit(r)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["drag-and-drop"]],viewQuery:function(e,t){if(e&1&&ue(um,5),e&2){let r;U(r=j())&&(t.dragAndCrop=r.first)}},outputs:{handleFiles:"handleFiles"},decls:4,vars:0,consts:[["dragAndDrop",""],[3,"drop","dragover"],["id","drag-and-drop"]],template:function(e,t){e&1&&(_(0,"span",1,0),P("drop",function(o){return t.onDrop(o)})("dragover",function(o){return t.onDragOver(o)}),_(2,"mat-icon",2),G(3,"insert_drive_file"),y()())},dependencies:[it,uo],styles:["#drag-and-drop[_ngcontent-%COMP%]{border:1px dashed white;font-size:100px;width:100px;height:100px;vertical-align:middle}"]})};function hm(n,i){n&1&&ae(0,"mat-spinner",8)}function fm(n,i){if(n&1){let e=Fe();_(0,"button",9),P("click",function(){be(e),O();let r=nt(8);return ye(r.click())}),G(1," Select file(s) "),y(),G(2," or "),_(3,"button",9),P("click",function(){be(e),O();let r=nt(6);return ye(r.click())}),G(4," Select folder "),y(),G(5," or Drop file(s) here: "),_(6,"drag-and-drop",10),P("handleFiles",function(r){be(e);let o=O();return ye(o.handleFiles(r))}),y(),_(7,"p",11),G(8,"The files are only processed locally and do not leave your device."),y()}}var _o=class n{loading=pe(!1);isDraggedOver=!1;dicomViewer;metadata;dicomHierarchy;getMetadata=new N;openSnackBar=new N;handleFiles(i){return k(this,null,function*(){let e=this.dicomViewer();if(!e)return;let t=Array.from(i).map(o=>{let s=new FileReader;return new Promise((c,a)=>{s.onload=()=>{s.result instanceof ArrayBuffer?c(new Uint8Array(s.result)):a(new Error("Failed to read file as Arraybuffer"))},s.onerror=()=>{a(s.error)},s.readAsArrayBuffer(o)})}),r=yield Promise.all(t);try{e.read_files(r),e.render_image_at_index(0);let o=e.get_dicom_hierarchy();this.dicomHierarchy.set(o),this.getMetadata.emit(),this.openSnackBar.emit({message:"\u2705 "+this.metadata()?.total+" files successfully loaded",action:"Close"})}catch(o){this.dicomHierarchy.set(null),this.getMetadata.emit(),this.openSnackBar.emit({message:"\u26A0\uFE0F Could not load files: "+o.message,action:"Close"})}finally{this.loading.set(!1)}})}handleInputChangeEvent(i){return k(this,null,function*(){this.loading.set(!0);let e=i.target,t=Array.from(e.files||[]);this.handleFiles(t)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["image-picker"]],inputs:{dicomViewer:"dicomViewer",metadata:"metadata",dicomHierarchy:"dicomHierarchy"},outputs:{getMetadata:"getMetadata",openSnackBar:"openSnackBar"},decls:9,vars:2,consts:[["uploadButton",""],["folderinput",""],["fileinput",""],[1,"image-picker"],[1,"buttonarea"],["diameter","48",4,"ngIf","ngIfElse"],["webkitdirectory","","type","file","multiple","","hidden","",3,"change"],["type","file","multiple","","hidden","",3,"change"],["diameter","48"],["type","button","mat-flat-button","",3,"click"],[3,"handleFiles"],[1,"footnote"]],template:function(e,t){if(e&1&&(_(0,"div",3)(1,"div",4),Oe(2,hm,1,0,"mat-spinner",5)(3,fm,9,0,"ng-template",null,0,Vt),y(),_(5,"input",6,1),P("change",function(o){return t.handleInputChangeEvent(o)}),y(),_(7,"input",7,2),P("change",function(o){return t.handleInputChangeEvent(o)}),y()()),e&2){let r=nt(4);b(2),X("ngIf",t.loading())("ngIfElse",r)}},dependencies:[it,Bt,po,Id,nn,Bn,go],styles:[".buttonarea[_ngcontent-%COMP%]{min-height:72px}"]})};var vo=class n{title="DICOMViewer";dicomViewer=pe(null);metadata=pe(null);dicomHierarchy=pe(null);_snackBar=l(ld);ngOnInit(){return k(this,null,function*(){yield Rs(),this.dicomViewer.set(Ii.new()),this.metadata.set(Tn.new())})}setSeriesFilter(i){let e=this.dicomViewer();e&&(e.set_current_series_instance_uid(i),this.getMetadata())}resetFilter(){let i=this.dicomViewer();i&&(i.reset_filter(),this.getMetadata())}openSnackBar(i){this._snackBar.open(i.message,i.action,{duration:3e3})}getMetadata(){let i=this.dicomViewer();if(!i)return;let e=i.get_metadata();this.metadata.set(e)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-root"]],decls:12,vars:7,consts:[["mode","side",3,"opened"],[3,"getMetadata","openSnackBar","dicomViewer","dicomHierarchy","metadata"],[3,"setSeriesFilter","resetFilter","dicomHierarchy"],[3,"getMetadata","dicomViewer","metadata"],[1,"information"],["href","https://github.com/Cryt1c/DICOMViewer/issues","target","_blank"]],template:function(e,t){e&1&&(_(0,"main")(1,"mat-sidenav-container")(2,"mat-sidenav",0)(3,"image-picker",1),P("getMetadata",function(){return t.getMetadata()})("openSnackBar",function(o){return t.openSnackBar(o)}),y(),_(4,"dicom-tree",2),P("setSeriesFilter",function(o){return t.setSeriesFilter(o)})("resetFilter",function(){return t.resetFilter()}),y()(),_(5,"mat-sidenav-content")(6,"dicom-renderer",3),P("getMetadata",function(){return t.getMetadata()}),y()()(),_(7,"div",4),G(8," Learning project, not for clinical use. "),_(9,"a",5),G(10,"Report issues"),y()()(),ae(11,"router-outlet")),e&2&&(b(2),X("opened",!0),b(),X("dicomViewer",t.dicomViewer)("dicomHierarchy",t.dicomHierarchy)("metadata",t.metadata),b(),X("dicomHierarchy",t.dicomHierarchy),b(2),X("dicomViewer",t.dicomViewer)("metadata",t.metadata))},dependencies:[Ci,ho,mo,fd,ia,hd,io,_o],styles:["main[_ngcontent-%COMP%]{padding:1em}mat-sidenav-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.footnote[_ngcontent-%COMP%]{margin:5px;font-size:12px}.information[_ngcontent-%COMP%]{position:fixed;bottom:1em;z-index:100;font-size:12px}mat-sidenav[_ngcontent-%COMP%]{width:700px}"]})};Ho(vo,ml).catch(n=>console.error(n));
