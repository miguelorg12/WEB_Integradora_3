import{a as O}from"./chunk-SXKS2AHR.js";import{a as z}from"./chunk-N7WXRUGI.js";import{a as G}from"./chunk-TQ6YLM7Q.js";import"./chunk-VZAEZB6E.js";import{a as w,b as s,c as T,d as U,e as q,f as g,g as k,i as N,j as L,k as A,l as M,m as j,o as R,q as V}from"./chunk-FJBITYPR.js";import"./chunk-67ANC6KW.js";import{h as F,j as I}from"./chunk-6X3NTM2I.js";import{Ab as c,Ib as r,Jb as _,Qb as E,Sa as o,Ta as x,ga as b,gb as p,ib as l,jc as h,kc as C,lc as S,qb as i,rb as t,sb as u,yb as y}from"./chunk-QODOQ2ZI.js";function B(e,n){e&1&&(i(0,"p",25),r(1,"El nombre es requerido"),t())}function D(e,n){e&1&&(i(0,"p",25),r(1,"El nombre debe contener al menos 3 caracteres"),t())}function $(e,n){e&1&&(i(0,"p",25),r(1,"El nombre debe contener maximo 50 caracteres"),t())}function Z(e,n){e&1&&(i(0,"p",25),r(1,"El nombre solo debe contener letras y espacios"),t())}function H(e,n){if(e&1&&(i(0,"div"),p(1,B,2,0,"p",24)(2,D,2,0,"p",24)(3,$,2,0,"p",24)(4,Z,2,0,"p",24),t()),e&2){let a=c();o(),l("ngIf",a.Form.controls.nombre.errors.required),o(),l("ngIf",a.Form.controls.nombre.errors.minlength),o(),l("ngIf",a.Form.controls.nombre.errors.maxlength),o(),l("ngIf",a.Form.controls.nombre.errors.pattern)}}function J(e,n){e&1&&(i(0,"p",25),r(1,"Los apellidos son requeridos"),t())}function K(e,n){e&1&&(i(0,"p",25),r(1,"Los apellidos deben tener al menos 3 caracteres"),t())}function P(e,n){e&1&&(i(0,"p",25),r(1,"Los apellidos deben tener m\xE1ximo 50 caracteres"),t())}function Q(e,n){e&1&&(i(0,"p",25),r(1,"Los apellidos solo deben contener letras y espacios"),t())}function W(e,n){if(e&1&&(i(0,"div"),p(1,J,2,0,"p",24)(2,K,2,0,"p",24)(3,P,2,0,"p",24)(4,Q,2,0,"p",24),t()),e&2){let a=c();o(),l("ngIf",a.Form.controls.apellido.errors.required),o(),l("ngIf",a.Form.controls.apellido.errors.minlength),o(),l("ngIf",a.Form.controls.apellido.errors.maxlength),o(),l("ngIf",a.Form.controls.apellido.errors.pattern)}}function X(e,n){if(e&1&&(i(0,"option",26),r(1),t()),e&2){let a=n.$implicit;l("value",a.id),o(),_(a.nombre)}}function Y(e,n){e&1&&(i(0,"p",25),r(1,"El beb\xE9 es requerido"),t())}function ee(e,n){if(e&1&&(i(0,"div"),p(1,Y,2,0,"p",24),t()),e&2){let a=c();o(),l("ngIf",a.Form.controls.id_bebe.errors.required)}}function te(e,n){e&1&&(i(0,"p",25),r(1,"El tel\xE9fono es requerido"),t())}function ie(e,n){e&1&&(i(0,"p",25),r(1,"El tel\xE9fono debe contener solo n\xFAmeros"),t())}function ne(e,n){if(e&1&&(i(0,"div"),p(1,te,2,0,"p",24)(2,ie,2,0,"p",24),t()),e&2){let a=c();o(),l("ngIf",a.Form.controls.telefono.errors.required),o(),l("ngIf",a.Form.controls.telefono.errors.pattern)}}function oe(e,n){e&1&&(i(0,"p",25),r(1,"El correo es requerido"),t())}function re(e,n){e&1&&(i(0,"p",25),r(1,"El correo debe ser v\xE1lido"),t())}function ae(e,n){if(e&1&&(i(0,"div"),p(1,oe,2,0,"p",24)(2,re,2,0,"p",24),t()),e&2){let a=c();o(),l("ngIf",a.Form.controls.email.errors.required),o(),l("ngIf",a.Form.controls.email.errors.email)}}function le(e,n){if(e&1&&(i(0,"div")(1,"p",27),r(2),t()()),e&2){let a=c();o(2),_(a.succesMessages.message)}}function me(e,n){if(e&1&&(i(0,"div")(1,"p",25),r(2),t()()),e&2){let a=c();o(2),_(a.backendErrors.message)}}var ve=(()=>{let n=class n{constructor(m,f,d,v){this.contactoService=m,this.router=f,this.bebeService=d,this.route=v,this.backendErrors={},this.bebes=[],this.succesMessages={},this.Form=new q({nombre:new g("",[s.required,s.minLength(3),s.maxLength(50),s.pattern("^[a-zA-Z ]*$")]),apellido:new g("",[s.required,s.minLength(3),s.maxLength(50),s.pattern("^[a-zA-Z ]*$")]),telefono:new g("",[s.required,s.pattern("^[0-9]*$")]),email:new g("",[s.required,s.email]),id_bebe:new g("",[s.required])})}ngAfterContentInit(){this.bebeService.getBebes().subscribe({next:m=>{console.log(m),this.bebes=m.data},error:m=>{console.log(m)}}),this.contact_id=Number(this.route.snapshot.params.id),this.contactoService.getContactoById(this.contact_id).subscribe({next:m=>{console.log(m),this.Form.patchValue(m.data)},error:m=>{console.log(m)}})}updateContacto(){this.contactoService.updateContacto(this.Form.value,this.contact_id).subscribe({next:m=>{console.log(m),setTimeout(()=>{this.succesMessages.message="Contacto actualizado con \xE9xito",this.backendErrors.message="",this.router.navigate(["/contacto"])},2e3)},error:m=>{console.log(m),this.backendErrors.message="Error para actualizar al contacto, intente mas tarde"}})}};n.\u0275fac=function(f){return new(f||n)(x(O),x(I),x(G),x(F))},n.\u0275cmp=b({type:n,selectors:[["app-update"]],standalone:!0,features:[E],decls:49,vars:9,consts:[[1,"flex","mt-10","flex-col","justify-center"],[1,"sm:mx-auto","sm:w-1/2","sm:max-w-2xl"],["src","assets/logo.jpeg","alt","Logo",1,"mx-auto","h-32","w-auto"],[1,"mt-3","text-center","text-2xl","font-bold","leading-9","tracking-tight","text-violet-950"],[1,"space-y-2",3,"formGroup"],[1,"flex","flex-wrap","-mx-3"],[1,"w-full","md:w-1/2","px-3","mb-6","md:mb-0"],["for","name",1,"block","text-sm","font-medium","leading-6","text-gray-900"],[1,"mt-2"],["formControlName","nombre","name","name","type","text","autocomplete","nombre","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[4,"ngIf"],["for","lastname",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","apellido","name","lastname","type","text","autocomplete","nombre","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","baby",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","id_bebe","name","baby","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"w-full","md:w-1/2","px-3"],["for","phone",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","telefono","name","phone","type","tel","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","email",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","email","name","email","type","email","autocomplete","email","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[1,"flex","w-full","justify-center"],[1,"flex","mt-10","mb-10","w-3/4","justify-center","rounded-md","bg-fuchsia-500","px-3","py-1.5","text-sm","font-semibold","leading-6","text-white","shadow-sm","hover:bg-cyan-700","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click"],["class","text-red-500 font-medium text-sm",4,"ngIf"],[1,"text-red-500","font-medium","text-sm"],[3,"value"],[1,"text-green-500","font-medium","text-sm"]],template:function(f,d){f&1&&(u(0,"app-toolbar"),i(1,"div",0)(2,"div",1),u(3,"img",2),i(4,"h2",3),r(5,"Registrar Contacto Familiar"),t()(),i(6,"div",1)(7,"form",4)(8,"div",5)(9,"div",6)(10,"div")(11,"label",7),r(12,"Nombre"),t(),i(13,"div",8),u(14,"input",9),t(),p(15,H,5,4,"div",10),t(),i(16,"div")(17,"label",11),r(18,"Apellidos"),t(),i(19,"div",8),u(20,"input",12),t(),p(21,W,5,4,"div",10),t(),i(22,"div")(23,"label",13),r(24,"Beb\xE9"),t(),i(25,"div",8)(26,"select",14)(27,"option",15),r(28,"Selecciona el beb\xE9"),t(),p(29,X,2,2,"option",16),t()(),p(30,ee,2,1,"div",10),t()(),i(31,"div",17)(32,"div")(33,"label",18),r(34,"Tel\xE9fono"),t(),i(35,"div",8),u(36,"input",19),t(),p(37,ne,3,2,"div",10),t(),i(38,"div")(39,"label",20),r(40,"Correo"),t(),i(41,"div",8),u(42,"input",21),t(),p(43,ae,3,2,"div",10),t()()(),p(44,le,3,1,"div",10)(45,me,3,1,"div",10),i(46,"div",22)(47,"button",23),y("click",function(){return d.updateContacto()}),r(48,"Actualizar Contacto"),t()()()()()),f&2&&(o(7),l("formGroup",d.Form),o(8),l("ngIf",d.Form.controls.nombre.errors&&d.Form.controls.nombre.touched),o(6),l("ngIf",d.Form.controls.apellido.errors&&d.Form.controls.apellido.touched),o(8),l("ngForOf",d.bebes),o(),l("ngIf",d.Form.controls.id_bebe.errors&&d.Form.controls.id_bebe.touched),o(7),l("ngIf",d.Form.controls.telefono.errors&&d.Form.controls.telefono.touched),o(6),l("ngIf",d.Form.controls.email.errors&&d.Form.controls.email.touched),o(),l("ngIf",d.succesMessages.message),o(),l("ngIf",d.backendErrors.message))},dependencies:[z,S,h,C,V,k,M,j,w,A,T,U,R,N,L]});let e=n;return e})();export{ve as UpdateComponent};
