import{a as D}from"./chunk-OPMPZTXV.js";import{a as O}from"./chunk-GUIL43MT.js";import{a as R}from"./chunk-4DSLLFDV.js";import"./chunk-FEMZR6YW.js";import{a as w,b as d,c as T,d as U,e as k,f as x,g as q,h as N,j as A,k as B,l as M,m as V,n as j,o as z,p as L,r as G}from"./chunk-FA5XPTQ2.js";import"./chunk-JRUOX2RA.js";import{h as F,j as I}from"./chunk-SD2P4HH3.js";import{Bb as c,Jb as l,Kb as b,Rb as y,Ta as n,Ua as f,ga as _,hb as p,jb as a,mc as E,nc as S,pc as C,rb as i,sb as t,tb as g,zb as h}from"./chunk-XQ3MI7UQ.js";function $(e,o){e&1&&(i(0,"p",19),l(1,"El nombre es requerido"),t())}function Z(e,o){e&1&&(i(0,"p",19),l(1,"El nombre debe contener al menos 3 caracteres"),t())}function P(e,o){e&1&&(i(0,"p",19),l(1,"El nombre debe contener maximo 50 caracteres"),t())}function H(e,o){e&1&&(i(0,"p",19),l(1,"El nombre solo debe contener letras y espacios"),t())}function J(e,o){if(e&1&&(i(0,"div"),p(1,$,2,0,"p",18)(2,Z,2,0,"p",18)(3,P,2,0,"p",18)(4,H,2,0,"p",18),t()),e&2){let r=c();n(),a("ngIf",r.updateForm.controls.nombre.errors.required),n(),a("ngIf",r.updateForm.controls.nombre.errors.minlength),n(),a("ngIf",r.updateForm.controls.nombre.errors.maxlength),n(),a("ngIf",r.updateForm.controls.nombre.errors.pattern)}}function K(e,o){e&1&&(i(0,"p",19),l(1,"El apellido es requerido"),t())}function Q(e,o){e&1&&(i(0,"p",19),l(1,"El apellido debe contener al menos 3 caracteres"),t())}function W(e,o){e&1&&(i(0,"p",19),l(1,"El apellido debe contener maximo 50 caracteres"),t())}function X(e,o){e&1&&(i(0,"p",19),l(1,"El apellido solo debe contener letras y espacios"),t())}function Y(e,o){if(e&1&&(i(0,"div"),p(1,K,2,0,"p",18)(2,Q,2,0,"p",18)(3,W,2,0,"p",18)(4,X,2,0,"p",18),t()),e&2){let r=c();n(),a("ngIf",r.updateForm.controls.apellido.errors.required),n(),a("ngIf",r.updateForm.controls.apellido.errors.minlength),n(),a("ngIf",r.updateForm.controls.apellido.errors.maxlength),n(),a("ngIf",r.updateForm.controls.apellido.errors.pattern)}}function ee(e,o){e&1&&(i(0,"p",19),l(1,"El peso es requerido"),t())}function te(e,o){e&1&&(i(0,"p",19),l(1,"El peso debe solo contener numeros"),t())}function ie(e,o){if(e&1&&(i(0,"div"),p(1,ee,2,0,"p",18)(2,te,2,0,"p",18),t()),e&2){let r=c();n(),a("ngIf",r.updateForm.controls.peso.errors.required),n(),a("ngIf",r.updateForm.controls.peso.errors.pattern)}}function oe(e,o){if(e&1&&(i(0,"option",20),l(1),t()),e&2){let r=o.$implicit;a("value",r.id),n(),b(r.estado)}}function ne(e,o){e&1&&(i(0,"p",19),l(1,"El estado es requerido"),t())}function re(e,o){if(e&1&&(i(0,"div"),p(1,ne,2,0,"p",18),t()),e&2){let r=c();n(),a("ngIf",r.updateForm.controls.id_estado.errors.required)}}function ae(e,o){if(e&1&&(i(0,"div")(1,"p",21),l(2),t()()),e&2){let r=c();n(2),b(r.succesMessages.message)}}function le(e,o){if(e&1&&(i(0,"div")(1,"p",19),l(2),t()()),e&2){let r=c();n(2),b(r.backendErrors.message)}}var be=(()=>{let o=class o{constructor(s,u,m,v){this.bebeService=s,this.router=u,this.route=m,this.estadoService=v,this.estados=[],this.backendErrors={},this.succesMessages={},this.updateForm=new k({nombre:new x("",[d.required,d.minLength(3),d.maxLength(50),d.pattern("^[a-zA-Z ]*$")]),apellido:new x("",[d.required,d.minLength(3),d.maxLength(50),d.pattern("^[a-zA-Z ]*$")]),peso:new x("",[d.required,d.pattern("^[0-9]*$")]),id_estado:new x("",[d.required])})}ngAfterContentInit(){this.estadoService.getEstadosBebe().subscribe({next:s=>{this.estados=s.data,console.log(s),console.log(this.estados)},error:s=>{console.log(s)}}),this.bebeService.getBebebyId(this.route.snapshot.params.id).subscribe({next:s=>{console.log(s),this.bebe=s.Bebe,this.updateForm.setValue({nombre:this.bebe.nombre,apellido:this.bebe.apellido,peso:this.bebe.peso,id_estado:this.bebe.id_estado}),console.log(s),console.log(this.bebe)},error:s=>{console.log(s)}})}updateBebe(){console.log(this.updateForm.value),this.bebeService.updateBebe(this.route.snapshot.params.id,this.updateForm.value).subscribe({next:s=>{this.succesMessages.message="Actualizacion de bebe exitosa",this.backendErrors.message="",console.log(s),this.router.navigate(["/bebes"])},error:s=>{this.backendErrors={message:"Error al actualizar bebe, intente mas tarde"},console.log(s)}})}};o.\u0275fac=function(u){return new(u||o)(f(R),f(I),f(F),f(D))},o.\u0275cmp=_({type:o,selectors:[["app-update"]],standalone:!0,features:[y],decls:38,vars:8,consts:[[1,"flex","mt-10","flex-col","justify-center"],[1,"sm:mx-auto","sm:w-1/2","sm:max-w-2xl"],["src","assets/logo.jpeg","alt","Logo",1,"mx-auto","h-32","w-auto"],[1,"mt-3","text-center","text-2xl","font-bold","leading-9","tracking-tight","text-violet-950"],[1,"sm:mx-auto","sm:w-1/3","sm:max-w-2xl"],[1,"space-y-2",3,"formGroup"],["for","name",1,"block","text-sm","font-medium","leading-6","text-gray-900"],[1,"mt-2"],["formControlName","nombre","name","name","type","text","autocomplete","nombre","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[4,"ngIf"],["for","lastname",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","apellido","name","lastname","type","text","autocomplete","apellido","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","weight",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","peso","name","weight","type","number","min","0","step","0.01","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","status",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["formControlName","id_estado","name","sex","required","",1,"pl-3","block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"flex","w-full","justify-center","mb-8","rounded-md","bg-fuchsia-500","px-3","py-1.5","text-sm","font-semibold","leading-6","text-white","shadow-sm","hover:bg-cyan-700","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click"],["class","text-red-500 font-medium text-sm",4,"ngIf"],[1,"text-red-500","font-medium","text-sm"],[3,"value"],[1,"text-green-500","font-medium","text-sm"]],template:function(u,m){u&1&&(g(0,"app-toolbar"),i(1,"div",0)(2,"div",1),g(3,"img",2),i(4,"h2",3),l(5,"Actualizar Beb\xE9"),t()(),i(6,"div",4)(7,"form",5)(8,"div")(9,"label",6),l(10,"Nombre"),t(),i(11,"div",7),g(12,"input",8),t(),p(13,J,5,4,"div",9),t(),i(14,"div")(15,"label",10),l(16,"Apellidos"),t(),i(17,"div",7),g(18,"input",11),t(),p(19,Y,5,4,"div",9),t(),i(20,"div")(21,"label",12),l(22,"Peso(en gramos)"),t(),i(23,"div",7),g(24,"input",13),t(),p(25,ie,3,2,"div",9),t(),i(26,"div")(27,"label",14),l(28,"Estado"),t(),i(29,"div",7)(30,"select",15),p(31,oe,2,2,"option",16),t()(),p(32,re,2,1,"div",9),t(),p(33,ae,3,1,"div",9)(34,le,3,1,"div",9),i(35,"div")(36,"button",17),h("click",function(){return m.updateBebe()}),l(37,"Actualizar Beb\xE9"),t()()()()()),u&2&&(n(7),a("formGroup",m.updateForm),n(6),a("ngIf",m.updateForm.controls.nombre.errors&&m.updateForm.controls.nombre.touched),n(6),a("ngIf",m.updateForm.controls.apellido.errors&&m.updateForm.controls.apellido.touched),n(6),a("ngIf",m.updateForm.controls.peso.errors&&m.updateForm.controls.peso.touched),n(6),a("ngForOf",m.estados),n(),a("ngIf",m.updateForm.controls.id_estado.errors&&m.updateForm.controls.id_estado.touched),n(),a("ngIf",m.succesMessages.message),n(),a("ngIf",m.backendErrors.message))},dependencies:[O,G,q,V,j,w,N,M,T,U,L,z,A,B,C,E,S]});let e=o;return e})();export{be as UpdateComponent};