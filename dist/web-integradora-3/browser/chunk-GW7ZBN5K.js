import{a as L}from"./chunk-JQJ4TIQC.js";import{a as D}from"./chunk-WYSEU7VP.js";import{d as T,j as H}from"./chunk-WMDP52WQ.js";import"./chunk-NHGVYZ4M.js";import{G as k,H as F}from"./chunk-2PNSS65N.js";import"./chunk-BZHRZEYF.js";import"./chunk-5IC5DNT2.js";import"./chunk-MVAYTFKK.js";import"./chunk-67ANC6KW.js";import{k as M}from"./chunk-6X3NTM2I.js";import{Ab as f,Ib as i,Jb as c,Qb as S,Rb as E,Sa as s,Sb as I,Ta as x,ga as g,gb as u,ib as m,jc as y,kc as C,lc as w,pa as h,qa as v,qb as t,rb as e,vb as b,yb as _}from"./chunk-QODOQ2ZI.js";var R=()=>["/historial/create"],N=n=>["/historial/edit/",n];function O(n,r){if(n&1&&(t(0,"div")(1,"p",8),i(2),e()()),n&2){let o=f();s(2),c(o.successMessage.message)}}function V(n,r){n&1&&(t(0,"div")(1,"tr")(2,"td",9),i(3,"No hay registros"),e()()())}function A(n,r){if(n&1){let o=b();t(0,"tr")(1,"td",14),i(2),e(),t(3,"td",14),i(4),e(),t(5,"td",14),i(6),e(),t(7,"td",14),i(8),e(),t(9,"td",14)(10,"a",15)(11,"mat-icon",16),i(12,"border_color"),e()()(),t(13,"td",17)(14,"button",18),_("click",function(){let a=h(o).$implicit,d=f(2);return v(d.delete(a.id))}),t(15,"mat-icon",19),i(16,"delete"),e()()()()}if(n&2){let o=r.$implicit;s(2),c(o.id),s(2),c(o.bebe+" "+o.bebe_apellido),s(2),c(o.diagnostico),s(2),c(o.medicamentos),s(2),m("routerLink",I(5,N,o.id))}}function $(n,r){if(n&1&&(t(0,"div",10)(1,"table",11)(2,"thead")(3,"tr")(4,"th",12),i(5,"Id"),e(),t(6,"th",12),i(7,"Bebe"),e(),t(8,"th",12),i(9,"Diagnostico"),e(),t(10,"th",12),i(11,"Medicamento Subministrado"),e(),t(12,"th",12),i(13,"Actualizar"),e(),t(14,"th",12),i(15,"Eliminar"),e()()(),t(16,"tbody"),u(17,A,17,7,"tr",13),e()()()),n&2){let o=f();s(17),m("ngForOf",o.historiales)}}var X=(()=>{let r=class r{constructor(l,a){this.historialService=l,this.dialog=a,this.historiales=[],this.successMessage={}}ngAfterContentInit(){this.historialService.getHistoriales().subscribe({next:l=>{this.historiales=l.data,console.log(l),console.log(this.historiales)},error:l=>{console.log(l)}})}delete(l){this.dialog.open(D).afterClosed().subscribe(d=>{d&&this.historialService.deleteHistorial(l).subscribe({next:p=>{console.log(p),this.successMessage.message="Historial eliminado exitosamente",setTimeout(()=>{this.successMessage.message="",this.historiales=this.historiales.filter(j=>j.id!==l)},3e3)},error:p=>{console.log(p)}})})}};r.\u0275fac=function(a){return new(a||r)(x(L),x(T))},r.\u0275cmp=g({type:r,selectors:[["app-index"]],standalone:!0,features:[S],decls:13,vars:5,consts:[[1,"flex","flex-col","justify-center","px-6","py-12","lg:px-8","w-full","mx-auto"],[1,"w-full"],[1,"flex","justify-between","items-center"],[1,"text-2xl","font-bold","leading-9","tracking-tight","text-violet-950"],[1,"flex","items-center","rounded-md","bg-cyan-700","px-3","py-1.5","text-sm","font-semibold","leading-6","text-white","shadow-sm","hover:bg-purple-600","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"routerLink"],[1,"mr-2"],[4,"ngIf"],["class","mt-5 w-full",4,"ngIf"],[1,"text-green-500","font-medium","text-sm"],[1,"text-red-500","font-medium","text-2xl"],[1,"mt-5","w-full"],[1,"table-auto","w-full"],[1,"px-4","py-2"],[4,"ngFor","ngForOf"],[1,"border","px-2","text-center"],[1,"example-icon","favorite-icon","rounded-md","px-3","py-1.5","text-sm","font-semibold","leading-6","shadow-sm","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"routerLink"],[1,"text-fuchsia-500"],[1,"border","px-4","py-2","text-center"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon","rounded-md","px-3","py-1.5","text-sm","font-semibold","leading-6","shadow-sm","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click"],[1,"text-cyan-700","hover:text-fuchsia-500"]],template:function(a,d){a&1&&(t(0,"app-side-tool")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h2",3),i(5,"Historiales Medicos"),e(),t(6,"a",4)(7,"mat-icon",5),i(8,"add"),e(),i(9,"Registrar Historial "),e()(),u(10,O,3,1,"div",6)(11,V,4,0,"div",6),e(),u(12,$,18,1,"div",7),e()()),a&2&&(s(6),m("routerLink",E(4,R)),s(4),m("ngIf",d.successMessage.message),s(),m("ngIf",d.historiales.length<=0),s(),m("ngIf",d.historiales.length>0))},dependencies:[H,F,k,M,w,y,C]});let n=r;return n})();export{X as IndexComponent};