import{a as p,b as i}from"./chunk-JRUOX2RA.js";import{a as h,b as n}from"./chunk-SD2P4HH3.js";import{X as a,aa as o}from"./chunk-XQ3MI7UQ.js";var f=(()=>{let e=class e{constructor(t,r){this.http=t,this.cookies=r,this.token=this.cookies.get("token"),this.headers=new h().set("Authorization","Bearer "+this.token)}getHistoriales(){return this.http.get(`${i.api_url}/historial/list`,{headers:this.headers})}getHistorialbyId(t){return this.http.get(`${i.api_url}/historial/oneHistorial/${t}`,{headers:this.headers})}createHistorial(t){return this.http.post(`${i.api_url}/historial/create`,t,{headers:this.headers})}updateHistorial(t,r){return this.http.put(`${i.api_url}/historial/update/${r}`,t,{headers:this.headers})}deleteHistorial(t){return this.http.delete(`${i.api_url}/historial/delete/${t}`,{headers:this.headers})}};e.\u0275fac=function(r){return new(r||e)(o(n),o(p))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{f as a};
