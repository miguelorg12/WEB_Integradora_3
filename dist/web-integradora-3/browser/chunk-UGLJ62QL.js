import{a as D}from"./chunk-BAK6H35K.js";import{f as R,l as A}from"./chunk-W243LKK5.js";import"./chunk-3Q7LQYIA.js";import{J as T,K as U,M as j,O as L}from"./chunk-VZAEZB6E.js";import"./chunk-FJBITYPR.js";import"./chunk-5IC5DNT2.js";import{a as F}from"./chunk-MVAYTFKK.js";import"./chunk-67ANC6KW.js";import{j as M,k}from"./chunk-6X3NTM2I.js";import{Ab as f,Ib as i,Jb as d,Qb as S,Rb as E,Sa as o,Sb as I,Ta as u,ga as v,gb as p,ib as c,jc as y,kc as C,lc as w,pa as g,qa as h,qb as t,rb as e,vb as b,yb as _}from"./chunk-QODOQ2ZI.js";var O=()=>["/usuarios/create"],V=n=>["/usuarios/edit",n];function B(n,s){n&1&&(t(0,"div")(1,"tr")(2,"td",8),i(3,"No hay registros"),e()()())}function $(n,s){if(n&1&&(t(0,"div")(1,"p",9),i(2),e()()),n&2){let r=f();o(2),d(r.successMessage.message)}}function z(n,s){if(n&1){let r=b();t(0,"tr")(1,"td",14),i(2),e(),t(3,"td",14),i(4),e(),t(5,"td",14),i(6),e(),t(7,"td",14),i(8),e(),t(9,"td",14),i(10),e(),t(11,"td",14),i(12),e(),t(13,"td",14),i(14),e(),t(15,"td",14)(16,"a",15)(17,"mat-icon",16),i(18,"border_color"),e()()(),t(19,"td",17)(20,"button",18),_("click",function(){let l=g(r).$implicit,m=f(2);return h(m.delete(l.id))}),t(21,"mat-icon",19),i(22,"delete"),e()()()()}if(n&2){let r=s.$implicit;o(2),d(r.id),o(2),d(r.name),o(2),d(r.last_name),o(2),d(r.email),o(2),d(r.rol),o(2),d(r.is_active==1?"Activo":"Inactivo"),o(2),d(r.hospital),o(2),c("routerLink",I(8,V,r.id))}}function H(n,s){if(n&1&&(t(0,"div",10)(1,"table",11)(2,"thead")(3,"tr")(4,"th",12),i(5,"#Id"),e(),t(6,"th",12),i(7,"Nombre(s)"),e(),t(8,"th",12),i(9,"Apellidos"),e(),t(10,"th",12),i(11,"Correo"),e(),t(12,"th",12),i(13,"Rol"),e(),t(14,"th",12),i(15,"Estado"),e(),t(16,"th",12),i(17,"Hospital"),e(),t(18,"th",12),i(19,"Actualizar"),e(),t(20,"th",12),i(21,"Eliminar"),e()()(),t(22,"tbody"),p(23,z,23,10,"tr",13),e()()()),n&2){let r=f();o(23),c("ngForOf",r.usuarios)}}var ne=(()=>{let s=class s{constructor(a,l,m){this.usuarioService=a,this.dialog=l,this.router=m,this.usuarios=[],this.successMessage={}}ngAfterContentInit(){this.usuarioService.getUsers().subscribe({next:a=>{this.usuarios=a.data,console.log(this.usuarios)},error:a=>{console.log(a)}})}delete(a){this.dialog.open(D).afterClosed().subscribe(m=>{m&&this.usuarioService.deleteUser(a).subscribe({next:x=>{console.log(x),this.successMessage.message="Usuario eliminado exitosamente",setTimeout(()=>{this.successMessage.message="",this.router.navigate(["/usuarios"])},3e3),this.usuarios=this.usuarios.filter(N=>N.id!==a)},error:x=>{console.log(x)}})})}};s.\u0275fac=function(l){return new(l||s)(u(F),u(R),u(M))},s.\u0275cmp=v({type:s,selectors:[["app-index"]],standalone:!0,features:[S],decls:13,vars:5,consts:[[1,"flex","flex-col","justify-center","px-6","py-12","lg:px-8","w-full","mx-auto"],[1,"w-full"],[1,"flex","justify-between","items-center"],[1,"text-2xl","font-bold","leading-9","tracking-tight","text-violet-950"],[1,"flex","items-center","rounded-md","bg-cyan-700","px-3","py-1.5","text-sm","font-semibold","leading-6","text-white","shadow-sm","hover:bg-purple-600","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"routerLink"],[1,"mr-2"],[4,"ngIf"],["class","mt-5 w-full",4,"ngIf"],[1,"text-red-500","font-medium","text-2xl"],[1,"text-green-500","font-medium","text-sm"],[1,"mt-5","w-full"],[1,"table-auto","w-full"],[1,"px-4","py-2"],[4,"ngFor","ngForOf"],[1,"border","px-2","text-center"],[1,"example-icon","favorite-icon","rounded-md","px-3","py-1.5","text-sm","font-semibold","leading-6","shadow-sm","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"routerLink"],[1,"text-fuchsia-500"],[1,"border","px-4","py-2","text-center"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon","rounded-md","px-3","py-1.5","text-sm","font-semibold","leading-6","shadow-sm","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click"],[1,"text-cyan-700","hover:text-fuchsia-500"]],template:function(l,m){l&1&&(t(0,"app-side-tool")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h2",3),i(5,"Usuarios"),e(),t(6,"a",4)(7,"mat-icon",5),i(8,"add"),e(),i(9,"Crear Usuario "),e()(),p(10,B,4,0,"div",6)(11,$,3,1,"div",6),e(),p(12,H,24,1,"div",7),e()()),l&2&&(o(6),c("routerLink",E(4,O)),o(4),c("ngIf",m.usuarios.length<=0),o(),c("ngIf",m.successMessage.message),o(),c("ngIf",m.usuarios.length>0))},dependencies:[A,U,T,L,j,k,w,y,C]});let n=s;return n})();export{ne as IndexComponent};
