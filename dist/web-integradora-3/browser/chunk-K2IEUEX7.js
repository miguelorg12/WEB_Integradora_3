import{a as G,b as v,c as D,d as R,e as U,f as x,g as A,i as B,j as H,p as L,q as Y}from"./chunk-FJBITYPR.js";import{a as q}from"./chunk-MVAYTFKK.js";import{a as j}from"./chunk-67ANC6KW.js";import{j as M}from"./chunk-6X3NTM2I.js";import{Ab as C,Hb as n,Ib as p,Jb as b,Qb as I,Sa as m,Ta as w,ga as V,gb as E,ib as y,kc as T,lc as N,pa as f,qa as g,qb as i,rb as r,sb as F,vb as S,yb as h}from"./chunk-QODOQ2ZI.js";function z(o,s){o&1&&(i(0,"div")(1,"p",22),p(2,"Todos los campos son requeridos"),r()())}function J(o,s){if(o&1&&(i(0,"div")(1,"p",22),p(2),r()()),o&2){let _=C();m(2),b(_.backendErrors.code)}}function K(o,s){if(o&1&&(i(0,"div")(1,"p",22),p(2),r()()),o&2){let _=C();m(2),b(_.backendErrors.message)}}function O(o,s){if(o&1&&(i(0,"div")(1,"p",23),p(2),r()()),o&2){let _=C();m(2),b(_.succesMessages.message)}}var oe=(()=>{let s=class s{constructor(u,c,e){this.usuarioService=u,this.router=c,this.cookie=e,this.backendErrors={},this.succesMessages={},this.codeForm=new U({code1:new x("",[v.required]),code2:new x("",[v.required]),code3:new x("",[v.required]),code4:new x("",[v.required]),code5:new x("",[v.required]),code6:new x("",[v.required])})}moveFocus(u,c,e){let t=u.target;t.value.length===1?c.focus():u.key==="Backspace"&&t.value.length===0&&e.focus()}verifyCode(){if(this.codeForm.valid){let u=localStorage.getItem("email"),c=localStorage.getItem("password"),e=this.codeForm.value.code1+this.codeForm.value.code2+this.codeForm.value.code3+this.codeForm.value.code4+this.codeForm.value.code5+this.codeForm.value.code6;this.usuarioService.codeVerificacion(e,u,c).subscribe({next:t=>{console.log(t),localStorage.removeItem("email"),localStorage.removeItem("password"),this.succesMessages.message="C\xF3digo correcto",this.backendErrors.code="",this.backendErrors.message="",this.cookie.set("token",t.access_token,1),setTimeout(()=>{this.backendErrors={},this.router.navigate(["/home"])},3e3)},error:t=>{console.log(e),console.log(t.error),t.status===400?(console.log(t.error),this.backendErrors.code="C\xF3digo incorrecto"):t.status===401?(console.log(t.error),this.backendErrors.code="Credenciales incorrectas"):t.status===404?this.backendErrors.code="Usuario no encontrado":this.backendErrors={message:"Error al verificar el c\xF3digo, intente mas tarde"}}})}}};s.\u0275fac=function(c){return new(c||s)(w(q),w(M),w(j))},s.\u0275cmp=V({type:s,selectors:[["app-code-verificacion"]],standalone:!0,features:[I],decls:29,vars:5,consts:[["input1",""],["input2",""],["input3",""],["input4",""],["input5",""],["input6",""],[1,"flex","min-h-full","flex-col","justify-center","px-6","py-12","lg:px-8"],[1,"sm:mx-auto","sm:w-full","sm:max-w-sm"],["src","assets/logo.jpeg","alt","Your Company",1,"mx-auto","h-32","w-auto"],[1,"mt-5","text-center","text-2xl","font-bold","leading-9","tracking-tight","text-violet-950"],[1,"mt-2","text-center","tracking-tight"],[1,"mt-5","sm:mx-auto","sm:w-full","sm:max-w-sm"],[1,"space-y-6",3,"formGroup"],[1,"flex","justify-between"],["formControlName","code1","type","text","maxlength","1",1,"block","w-14","h-12","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-500","placeholder:text-purple-600","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6","text-center","font-bold",3,"keyup"],["formControlName","code2","type","text","maxlength","1",1,"block","w-14","h-12","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-500","placeholder:text-purple-600","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6","text-center","font-bold",3,"keyup"],["formControlName","code3","type","text","maxlength","1",1,"block","w-14","h-12","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-500","placeholder:text-purple-600","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6","text-center","font-bold",3,"keyup"],["formControlName","code4","type","text","maxlength","1",1,"block","w-14","h-12","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-500","placeholder:text-purple-600","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6","text-center","font-bold",3,"keyup"],["formControlName","code5","type","text","maxlength","1",1,"block","w-14","h-12","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-500","placeholder:text-purple-600","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6","text-center","font-bold",3,"keyup"],["formControlName","code6","type","text","maxlength","1",1,"block","w-14","h-12","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-500","placeholder:text-purple-600","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6","text-center","font-bold"],[4,"ngIf"],["type","submit",1,"flex","w-full","justify-center","rounded-md","bg-purple-500","px-3","py-1.5","text-sm","font-semibold","leading-6","text-white","shadow-sm","hover:bg-purple-600","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click"],[1,"text-red-500","font-medium","text-xs"],[1,"text-green-500","font-medium","text-sm"]],template:function(c,e){if(c&1){let t=S();i(0,"div",6)(1,"div",7),F(2,"img",8),i(3,"h2",9),p(4,"Ingrese su c\xF3digo de verificaci\xF3n"),r(),i(5,"p",10),p(6,"Hemos enviado un codigo de verificacion a tu correo"),r()(),i(7,"div",11)(8,"form",12)(9,"div",13)(10,"input",14,0),h("keyup",function(d){f(t);let a=n(11),l=n(13);return g(e.moveFocus(d,l,a))}),r(),i(12,"input",15,1),h("keyup",function(d){f(t);let a=n(13),l=n(15);return g(e.moveFocus(d,l,a))}),r(),i(14,"input",16,2),h("keyup",function(d){f(t);let a=n(15),l=n(17);return g(e.moveFocus(d,l,a))}),r(),i(16,"input",17,3),h("keyup",function(d){f(t);let a=n(17),l=n(19);return g(e.moveFocus(d,l,a))}),r(),i(18,"input",18,4),h("keyup",function(d){f(t);let a=n(19),l=n(21);return g(e.moveFocus(d,l,a))}),r(),F(20,"input",19,5),r(),E(22,z,3,0,"div",20)(23,J,3,1,"div",20)(24,K,3,1,"div",20)(25,O,3,1,"div",20),i(26,"div")(27,"button",21),h("click",function(){return f(t),g(e.verifyCode())}),p(28,"Verificar C\xF3digo"),r()()()()()}c&2&&(m(8),y("formGroup",e.codeForm),m(14),y("ngIf",e.codeForm.controls.code1.errors&&e.codeForm.controls.code1.touched||e.codeForm.controls.code2.errors&&e.codeForm.controls.code2.touched||e.codeForm.controls.code3.errors&&e.codeForm.controls.code3.touched||e.codeForm.controls.code4.errors&&e.codeForm.controls.code4.touched||e.codeForm.controls.code5.errors&&e.codeForm.controls.code5.touched||e.codeForm.controls.code6.errors&&e.codeForm.controls.code6.touched),m(),y("ngIf",e.backendErrors.code),m(),y("ngIf",e.backendErrors.message),m(),y("ngIf",e.succesMessages.message))},dependencies:[N,T,Y,A,G,D,R,L,B,H]});let o=s;return o})();export{oe as CodeVerificacionComponent};