import{a as c,b as i}from"./chunk-JRUOX2RA.js";import{a as n,b as h}from"./chunk-SD2P4HH3.js";import{X as s,aa as o}from"./chunk-XQ3MI7UQ.js";var f=(()=>{let e=class e{constructor(t,r){this.http=t,this.cookie=r,this.token=this.cookie.get("token"),this.headers=new n().set("Authorization","Bearer "+this.token)}getContactos(){return this.http.get(`${i.api_url}/contactoFamiliar/list`,{headers:this.headers})}getContactoById(t){return this.http.get(`${i.api_url}/contactoFamiliar/oneContactoFamiliar/${t}`,{headers:this.headers})}createContacto(t){return this.http.post(`${i.api_url}/contactoFamiliar/create`,t,{headers:this.headers})}updateContacto(t,r){return this.http.put(`${i.api_url}/contactoFamiliar/update/${r}`,t,{headers:this.headers})}deleteContacto(t){return this.http.delete(`${i.api_url}/contactoFamiliar/delete/${t}`,{headers:this.headers})}};e.\u0275fac=function(r){return new(r||e)(o(h),o(c))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})();export{f as a};
