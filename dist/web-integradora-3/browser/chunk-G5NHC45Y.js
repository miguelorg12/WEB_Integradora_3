import{a as D}from"./chunk-VJMQOC25.js";import{a as V}from"./chunk-N7WXRUGI.js";import"./chunk-VZAEZB6E.js";import{a as k,b as d,c as T,d as q,e as L,f as u,g as N,i as M,j,k as R,l as U,m as A,o as G,q as O}from"./chunk-FJBITYPR.js";import{a as I}from"./chunk-MVAYTFKK.js";import{a as F}from"./chunk-67ANC6KW.js";import{j as S}from"./chunk-6X3NTM2I.js";import{Ab as p,Ib as m,Jb as _,Qb as E,Sa as n,Ta as x,ga as C,gb as c,ib as a,jc as y,kc as h,lc as w,qb as r,rb as t,sb as f,yb as b}from"./chunk-QODOQ2ZI.js";function $(e,i){e&1&&(r(0,"p",26),m(1,"El nombre es requerido"),t())}function z(e,i){e&1&&(r(0,"p",26),m(1,"El nombre debe tener al menos 3 caracteres"),t())}function Z(e,i){e&1&&(r(0,"p",26),m(1,"El nombre debe tener m\xE1ximo 50 caracteres"),t())}function P(e,i){e&1&&(r(0,"p",26),m(1,"El nombre solo debe contener letras y espacios"),t())}function B(e,i){if(e&1&&(r(0,"div"),c(1,$,2,0,"p",25)(2,z,2,0,"p",25)(3,Z,2,0,"p",25)(4,P,2,0,"p",25),t()),e&2){let o=p();n(),a("ngIf",o.createForm.controls.name.errors.required),n(),a("ngIf",o.createForm.controls.name.errors.minlength),n(),a("ngIf",o.createForm.controls.name.errors.maxlength),n(),a("ngIf",o.createForm.controls.name.errors.pattern)}}function H(e,i){e&1&&(r(0,"p",26),m(1,"Los apellidos son requeridos"),t())}function J(e,i){e&1&&(r(0,"p",26),m(1,"Los apellidos deben tener al menos 3 caracteres"),t())}function K(e,i){e&1&&(r(0,"p",26),m(1,"Los apellidos deben tener m\xE1ximo 50 caracteres"),t())}function Q(e,i){e&1&&(r(0,"p",26),m(1,"Los apellidos solo deben contener letras y espacios"),t())}function W(e,i){if(e&1&&(r(0,"div"),c(1,H,2,0,"p",25)(2,J,2,0,"p",25)(3,K,2,0,"p",25)(4,Q,2,0,"p",25),t()),e&2){let o=p();n(),a("ngIf",o.createForm.controls.last_name.errors.required),n(),a("ngIf",o.createForm.controls.last_name.errors.minlength),n(),a("ngIf",o.createForm.controls.last_name.errors.maxlength),n(),a("ngIf",o.createForm.controls.last_name.errors.pattern)}}function X(e,i){e&1&&(r(0,"p",26),m(1,"El email es requerido"),t())}function Y(e,i){e&1&&(r(0,"p",26),m(1,"El email no es valido"),t())}function ee(e,i){e&1&&(r(0,"p",26),m(1,"El nombre debe tener m\xE1ximo 255 caracteres"),t())}function te(e,i){if(e&1&&(r(0,"div"),c(1,X,2,0,"p",25)(2,Y,2,0,"p",25)(3,ee,2,0,"p",25),t()),e&2){let o=p();n(),a("ngIf",o.createForm.controls.email.errors.required),n(),a("ngIf",o.createForm.controls.email.errors.email),n(),a("ngIf",o.createForm.controls.email.errors.maxlength)}}function re(e,i){if(e&1&&(r(0,"div")(1,"p",26),m(2),t()()),e&2){let o=p();n(2),_(o.backendErrors.email)}}function ie(e,i){e&1&&(r(0,"p",26),m(1,"La contrase\xF1a es requerida"),t())}function ne(e,i){e&1&&(r(0,"p",26),m(1,"La contrase\xF1a debe tener 8 caracteres"),t())}function oe(e,i){if(e&1&&(r(0,"div"),c(1,ie,2,0,"p",25)(2,ne,2,0,"p",25),t()),e&2){let o=p();n(),a("ngIf",o.createForm.controls.password.errors.required),n(),a("ngIf",o.createForm.controls.password.errors.minlength)}}function ae(e,i){e&1&&(r(0,"p",26),m(1,"La confirmacion es requerida"),t())}function me(e,i){if(e&1&&(r(0,"div"),c(1,ae,2,0,"p",25),t()),e&2){let o=p();n(),a("ngIf",o.createForm.controls.confirm_password.errors.required)}}function se(e,i){if(e&1&&(r(0,"div")(1,"p",26),m(2),t()()),e&2){let o=p();n(2),_(o.backendErrors.confirm_password)}}function le(e,i){if(e&1&&(r(0,"option",27),m(1),t()),e&2){let o=i.$implicit;a("value",o.id),n(),_(o.nombre)}}function ce(e,i){e&1&&(r(0,"p",26),m(1,"El rol es requerido"),t())}function de(e,i){if(e&1&&(r(0,"div"),c(1,ce,2,0,"p",25),t()),e&2){let o=p();n(),a("ngIf",o.createForm.controls.id_rol.errors.required)}}function pe(e,i){if(e&1&&(r(0,"div")(1,"p",26),m(2),t()()),e&2){let o=p();n(2),_(o.backendErrors.message)}}function fe(e,i){if(e&1&&(r(0,"p",29),m(1),t()),e&2){let o=p(2);n(),_(o.succesMessages.message)}}function ue(e,i){if(e&1&&(r(0,"div"),c(1,fe,2,1,"p",28),t()),e&2){let o=p();n(),a("ngIf",o.succesMessages.message)}}var Se=(()=>{let i=class i{constructor(l,g,s,v){this.router=l,this.userService=g,this.rolesService=s,this.cookie=v,this.roles=[],this.backendErrors={},this.succesMessages={},this.createForm=new L({name:new u("",[d.required,d.minLength(3),d.maxLength(50),d.pattern("^[a-zA-Z ]*$")]),last_name:new u("",[d.required,d.minLength(3),d.maxLength(50),d.pattern("^[a-zA-Z ]*$")]),email:new u("",[d.required,d.email,d.maxLength(255)]),password:new u("",[d.required,d.minLength(8)]),confirm_password:new u("",[d.required]),id_rol:new u("",[d.required])})}ngAfterContentInit(){this.rolesService.getRoles().subscribe({next:l=>{this.roles=l.data,console.log(l),console.log(this.roles)},error:l=>{console.log(l)}})}crearUsuario(){this.createForm.valid&&(console.log(this.createForm.value),this.userService.createUser(this.createForm.value).subscribe({next:l=>{console.log(l),this.succesMessages.message="Usuario creado exitosamente",setTimeout(()=>{this.router.navigate(["/usuarios"]),this.succesMessages.message="",this.backendErrors.email="",this.backendErrors.confirm_password="",this.backendErrors.message=""},3e3)},error:l=>{console.log(l),l.status===400?(console.log(l.error),l.error.errors.email?(this.backendErrors.email="El email ya est\xE1 en uso",this.backendErrors.confirm_password="",this.backendErrors.message=""):l.error.errors.confirm_password&&(this.backendErrors.confirm_password="Las contrase\xF1as no coinciden",this.backendErrors.email="",this.backendErrors.message="")):(console.log(l.error),this.backendErrors={message:"Error al crear usuario, intente mas tarde"})}}))}};i.\u0275fac=function(g){return new(g||i)(x(S),x(I),x(D),x(F))},i.\u0275cmp=C({type:i,selectors:[["app-create"]],standalone:!0,features:[E],decls:55,vars:12,consts:[[1,"flex","mt-5","flex-col","justify-center"],[1,"sm:mx-auto","sm:w-1/2","sm:max-w-2xl"],["src","assets/logo.jpeg","alt","Logo",1,"mx-auto","h-32","w-auto"],[1,"mt-3","text-center","text-2xl","font-bold","leading-9","tracking-tight","text-violet-950"],[1,"space-y-2",3,"formGroup"],[1,"flex","flex-wrap","-mx-3"],[1,"w-full","md:w-1/2","px-3","mb-6","md:mb-0"],["for","name",1,"block","text-sm","font-medium","leading-6","text-gray-900"],[1,""],["formControlName","name","name","name","type","text","autocomplete","nombre","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[4,"ngIf"],["for","lastname",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","last_name","name","lastname","type","text","autocomplete","nombre","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","email",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","email","name","email","type","email","autocomplete","email","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[1,"w-full","md:w-1/2","px-3"],["for","password",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","password","name","password","autocomplete","new-password","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","confirm_password","name","confirmPassword","autocomplete","new-password","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","role",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","id_rol","name","role","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","justify-center"],["type","submit",1,"flex","mb-10","w-1/2","justify-center","rounded-md","bg-fuchsia-500","px-3","py-1.5","text-sm","font-semibold","leading-6","text-white","shadow-sm","hover:bg-cyan-700","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click"],["class","text-red-500 font-medium text-sm",4,"ngIf"],[1,"text-red-500","font-medium","text-sm"],[3,"value"],["class","text-green-500 font-medium text-sm",4,"ngIf"],[1,"text-green-500","font-medium","text-sm"]],template:function(g,s){g&1&&(f(0,"app-toolbar"),r(1,"div",0)(2,"div",1),f(3,"img",2),r(4,"h2",3),m(5,"Crear Usuario"),t()(),r(6,"div",1)(7,"form",4)(8,"div",5)(9,"div",6)(10,"div")(11,"label",7),m(12,"Nombre"),t(),r(13,"div",8),f(14,"input",9),t(),c(15,B,5,4,"div",10),t(),r(16,"div")(17,"label",11),m(18,"Apellidos"),t(),r(19,"div",8),f(20,"input",12),t(),c(21,W,5,4,"div",10),t(),r(22,"div")(23,"label",13),m(24,"Correo"),t(),r(25,"div",8),f(26,"input",14),t(),c(27,te,4,3,"div",10)(28,re,3,1,"div",10),t()(),r(29,"div",15)(30,"div")(31,"label",16),m(32,"Contrase\xF1a"),t(),r(33,"div",8),f(34,"input",17),t(),c(35,oe,3,2,"div",10),t(),r(36,"div")(37,"label",18),m(38,"Confirmar Contrase\xF1a"),t(),r(39,"div",8),f(40,"input",19),t(),c(41,me,2,1,"div",10)(42,se,3,1,"div",10),t(),r(43,"div")(44,"label",20),m(45,"Rol"),t(),r(46,"div",8)(47,"select",21),c(48,le,2,2,"option",22),t(),c(49,de,2,1,"div",10),t()()()(),c(50,pe,3,1,"div",10)(51,ue,2,1,"div",10),r(52,"div",23)(53,"button",24),b("click",function(){return s.crearUsuario()}),m(54,"Crear Usuario"),t()()()()()),g&2&&(n(7),a("formGroup",s.createForm),n(8),a("ngIf",s.createForm.controls.name.errors&&s.createForm.controls.name.touched),n(6),a("ngIf",s.createForm.controls.last_name.errors&&s.createForm.controls.last_name.touched),n(6),a("ngIf",s.createForm.controls.email.errors&&s.createForm.controls.email.touched),n(),a("ngIf",s.backendErrors.email),n(7),a("ngIf",s.createForm.controls.password.errors&&s.createForm.controls.password.touched),n(6),a("ngIf",s.createForm.controls.confirm_password.errors&&s.createForm.controls.confirm_password.touched),n(),a("ngIf",s.backendErrors.confirm_password),n(6),a("ngForOf",s.roles),n(),a("ngIf",s.createForm.controls.id_rol.errors&&s.createForm.controls.id_rol.touched),n(),a("ngIf",s.backendErrors.message),n(),a("ngIf",s.succesMessages.message))},dependencies:[V,w,y,h,O,N,U,A,k,R,T,q,G,M,j]});let e=i;return e})();export{Se as CreateComponent};
