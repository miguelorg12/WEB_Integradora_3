import{a as ee,b as ce}from"./chunk-W2V527CK.js";import{a as E}from"./chunk-MVAYTFKK.js";import{a as v}from"./chunk-67ANC6KW.js";import{c as X,d as Y,e as Z,f as $,h as G,i as J,j as f,k as K,l as Q}from"./chunk-6X3NTM2I.js";import{$a as W,D as b,Ea as _,Ib as h,Qb as D,Rb as R,Sa as w,Ua as z,V as M,Wa as B,X as p,Ya as H,_a as V,aa as d,ba as T,e as le,ec as q,ga as A,ib as I,ja as L,ka as O,o as N,p as U,qb as m,rb as u,s as y,sb as x}from"./chunk-QODOQ2ZI.js";var de=()=>["login"],pe=()=>["register"],te=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["app-welcome"]],standalone:!0,features:[D],decls:19,vars:4,consts:[[1,"flex","min-h-screen","py-2","justify-center"],[1,"flex","flex-col","justify-center","sm:w-96","sm:m-auto","mx-2","mb-5","space-y-5","text-left"],["src","assets/logo.jpeg","alt","Logo",1,"w-25","h-25","self-start"],[1,"font-bold","text-3xl","text-purple-600","text-center"],[1,"flex","justify-between"],[1,"w-1/2","py-2","bg-fuchsia-500","text-white","text-xl","font-bold","transition","duration-300","ease-in-out","hover:bg-cyan-700","transform","hover:-translate-y-1","hover:scale-110","mr-2","rounded","text-center",3,"routerLink"],[1,"w-1/2","py-2","bg-cyan-700","text-white","text-xl","font-bold","transition","duration-300","ease-in-out","hover:bg-fuchsia-500","transform","hover:-translate-y-1","hover:scale-110","ml-2","rounded","text-center",3,"routerLink"],[1,"flex","flex-col","justify-center","sm:w-96","sm:m-auto","mx-1","mb-5","space-y-3","text-left"],[1,"font-bold","text-3xl","text-violet-950"]],template:function(r,n){r&1&&(m(0,"div",0)(1,"div",1),x(2,"img",2),m(3,"h1",3),h(4,"Bienvenido a Smart Nest"),u(),m(5,"div",4)(6,"a",5),h(7,"Iniciar sesi\xF3n"),u(),m(8,"a",6),h(9,"Registrarse"),u()()(),m(10,"div",7)(11,"h2",8),h(12,"Sobre nosotros"),u(),m(13,"p"),h(14,"En smart nest, estamos comprometidos con el cuidado y seguimiento de los beb\xE9s prematuros de una manera m\xE1s tecnol\xF3gica y efectiva. Nuestra misi\xF3n es proporcionar soluciones innovadoras para garantizar la salud y el bienestar de los beb\xE9s prematuros y brindar tranquilidad a sus familias."),u(),m(15,"h2",8),h(16,"Sobre el proyecto"),u(),m(17,"p"),h(18,"El proyecto consiste en el desarrollo de una plataforma web especializada en el cuidado y seguimiento de beb\xE9s prematuros, con el objetivo de proporcionar un enfoque m\xE1s tecnol\xF3gico y efectivo para garantizar su salud y bienestar. La plataforma estar\xE1 dirigida tanto al personal m\xE9dico como a los padres de los beb\xE9s prematuros, ofreciendo herramientas y recursos que faciliten el monitoreo continuo, la comunicaci\xF3n y la colaboraci\xF3n entre todas las partes involucradas en el cuidado del beb\xE9."),u()()()),r&2&&(w(6),I("routerLink",R(2,de)),w(2),I("routerLink",R(3,pe)))},dependencies:[K]});let t=e;return t})();var a=(()=>{let e=class e{constructor(o,r,n){this.cookie=o,this.usuarioService=r,this.router=n}canActivate(o,r){return this.cookie.get("token")?this.usuarioService.verifyToken().pipe(y(c=>c.valid&&c.active?!0:(this.router.navigate(["/login"]),this.cookie.deleteAll(),!1))):(this.router.navigate(["/login"]),N(!1))}};e.\u0275fac=function(r){return new(r||e)(d(v),d(E),d(f))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var s=(()=>{let e=class e{constructor(o,r,n){this.router=o,this.usuarioService=r,this.cookie=n}canActivate(o,r){return this.usuarioService.getRole().pipe(y(n=>{let c=o.data.role;this.id_rol=this.cookie.get("id_rol"),this.rolanterior=n.role,(this.id_rol!=this.rolanterior||this.id_rol==null)&&this.cookie.set("id_rol",n.role.toString(),1);let k={1:"Developer",2:"Administrador",3:"Doctor",4:"Enfermera",5:"Invitado"}[n.role];return c.includes(k)?!0:(console.error("Access denied - Invalid role"),this.router.navigate(["/bienvenido"]),!1)}),b(n=>{throw console.error("Error getting role:",n),this.router.navigate(["/bienvenido"]),n}))}};e.\u0275fac=function(r){return new(r||e)(d(f),d(E),d(v))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var oe=le(ce());var re=(()=>{let e=class e{constructor(o,r,n){this.router=o,this.cookieService=r,this.route=n,this.user_id=Number(this.cookieService.get("id")),this.id_rol=Number(this.cookieService.get("id_rol")),window.Pusher=oe.default,window.Echo=new ee({broadcaster:"pusher",key:"askjsdak",cluster:"mt1",wsHost:"34.227.197.144",wsPort:6001,forceTLS:!1,disableStatus:!0}),window.Echo.channel("UserUpdate").listen(".UpdateUser",c=>{console.log(c),console.log(this.user_id),console.log(this.id_rol),this.user_id===c.user_id&&!c.user_status?(this.router.navigate(["/login"]),this.cookieService.deleteAll()):this.user_id===c.user_id&&this.id_rol!==c.id_rol&&(this.router.url==="/home"&&(this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"),this.router.navigate(["/home"]),this.cookieService.delete("id_rol"),this.cookieService.set("id_rol",c.id_rol))})}};e.\u0275fac=function(r){return new(r||e)(d(f),d(v),d(G))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var l=(()=>{let e=class e{constructor(o){this.socketUpdateUserService=o}canActivate(o,r){return!0}};e.\u0275fac=function(r){return new(r||e)(d(re))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ie=[{path:"login",loadComponent:()=>import("./chunk-J3NGPAJV.js").then(t=>t.LoginComponent)},{path:"register",loadComponent:()=>import("./chunk-OU4R5XHZ.js").then(t=>t.RegisterComponent)},{path:"password-recovery",loadComponent:()=>import("./chunk-XLDVLAWS.js").then(t=>t.PasswordRecoveryComponent)},{path:"code-verificacion",loadComponent:()=>import("./chunk-K2IEUEX7.js").then(t=>t.CodeVerificacionComponent)},{path:"check-email",loadComponent:()=>import("./chunk-M4PA24FA.js").then(t=>t.CheckEmailComponent)},{path:"home",loadComponent:()=>import("./chunk-YZ4SGUJ7.js").then(t=>t.HomeComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera","Invitado"]}},{path:"values",loadComponent:()=>import("./chunk-AR5SBXKA.js").then(t=>t.IndexComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"sensores",loadComponent:()=>import("./chunk-ZWZIMI5C.js").then(t=>t.IndexComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"sensores/create",loadComponent:()=>import("./chunk-ZPMPXD3K.js").then(t=>t.CreateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"sensores/edit/:id",loadComponent:()=>import("./chunk-KMKZNBJE.js").then(t=>t.UpdateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"usuarios",loadComponent:()=>import("./chunk-UGLJ62QL.js").then(t=>t.IndexComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"usuarios/create",loadComponent:()=>import("./chunk-G5NHC45Y.js").then(t=>t.CreateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"usuarios/edit/:id",loadComponent:()=>import("./chunk-HCR36NVQ.js").then(t=>t.UpdateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"bebes",loadComponent:()=>import("./chunk-TMRH3OIN.js").then(t=>t.IndexComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"bebes/create",loadComponent:()=>import("./chunk-RPZXULJR.js").then(t=>t.CreateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"bebes/edit/:id",loadComponent:()=>import("./chunk-PKFG3UDV.js").then(t=>t.UpdateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"bebes-incubadoras",loadComponent:()=>import("./chunk-ZOQD6CQZ.js").then(t=>t.BebesIncubadorasComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"contacto",loadComponent:()=>import("./chunk-HCSMKYCF.js").then(t=>t.IndexComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"contacto/create",loadComponent:()=>import("./chunk-CTZ7ZFSN.js").then(t=>t.CreateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"contacto/edit/:id",loadComponent:()=>import("./chunk-5GL2VJX5.js").then(t=>t.UpdateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"historial",loadComponent:()=>import("./chunk-AKG2UQX2.js").then(t=>t.IndexComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"historial/create",loadComponent:()=>import("./chunk-2LJYHTAT.js").then(t=>t.CreateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"historial/edit/:id",loadComponent:()=>import("./chunk-YSYDS4KO.js").then(t=>t.UpdateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera"]}},{path:"incubadoras",loadComponent:()=>import("./chunk-5V5L772Q.js").then(t=>t.IndexComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"incubadoras/create",loadComponent:()=>import("./chunk-XF755WZO.js").then(t=>t.CreateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"incubadoras/edit/:id",loadComponent:()=>import("./chunk-46XK3DFX.js").then(t=>t.UpdateComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador"]}},{path:"profile",loadComponent:()=>import("./chunk-NQZNYD6E.js").then(t=>t.ProfileComponent),canActivate:[a,s,l],data:{role:["Developer","Administrador","Doctor","Enfermera","Invitado"]}},{path:"hospitales",loadComponent:()=>import("./chunk-DMMQ5ZGQ.js").then(t=>t.IndexComponent),canActivate:[a,s,l],data:{role:["Developer"]}},{path:"hospitales/create",loadComponent:()=>import("./chunk-ELNDZTH4.js").then(t=>t.CreateComponent),canActivate:[a,s,l],data:{role:["Developer"]}},{path:"hospitales/edit/:id",loadComponent:()=>import("./chunk-WSRQNBTB.js").then(t=>t.UpdateComponent),canActivate:[a,s,l],data:{role:["Developer"]}},{path:"",component:te},{path:"**",loadComponent:()=>import("./chunk-54VIYWHC.js").then(t=>t.NotFoundComponent)}];var he="@",fe=(()=>{let e=class e{constructor(o,r,n,c,C){this.doc=o,this.delegate=r,this.zone=n,this.animationType=c,this.moduleImpl=C,this._rendererFactoryPromise=null,this.scheduler=T(B,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-YZ2YE5MS.js")).catch(r=>{throw new M(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:n})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let c=new n(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(o,r){let n=this.delegate.createRenderer(o,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let c=new P(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(C=>{let k=C.createRenderer(o,r);c.use(k)}).catch(C=>{c.use(n)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){z()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})(),P=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,o,r){this.delegate.insertBefore(e,i,o,r)}removeChild(e,i,o){this.delegate.removeChild(e,i,o)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,o,r){this.delegate.setAttribute(e,i,o,r)}removeAttribute(e,i,o){this.delegate.removeAttribute(e,i,o)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,o,r){this.delegate.setStyle(e,i,o,r)}removeStyle(e,i,o){this.delegate.removeStyle(e,i,o)}setProperty(e,i,o){this.shouldReplay(i)&&this.replay.push(r=>r.setProperty(e,i,o)),this.delegate.setProperty(e,i,o)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,o){return this.shouldReplay(i)&&this.replay.push(r=>r.listen(e,i,o)),this.delegate.listen(e,i,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(he)}};function S(t="animations"){return V("NgAsyncAnimations"),L([{provide:H,useFactory:(e,i,o)=>new fe(e,i,o,t),deps:[q,Z,W]},{provide:_,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ne=(()=>{let e=class e{constructor(o,r){this.router=o,this.cookieService=r}intercept(o,r){let n=this.cookieService.get("token");return n&&(o=o.clone({setHeaders:{Authorization:`Bearer ${n}`}})),r.handle(o).pipe(b(c=>(c.status===401&&(this.cookieService.delete("token"),this.router.navigate(["/login"])),U(c))))}};e.\u0275fac=function(r){return new(r||e)(d(f),d(v))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})();var ae={providers:[Q(ie),S(),S(),S(),O(Y),{provide:X,useClass:ne,multi:!0}]};var se=(()=>{let e=class e{constructor(){this.title="Web_Integradora_3"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["app-root"]],standalone:!0,features:[D],decls:1,vars:0,template:function(r,n){r&1&&x(0,"router-outlet")},dependencies:[J]});let t=e;return t})();$(se,ae).catch(t=>console.error(t));