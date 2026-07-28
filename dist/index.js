"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var m=q(function(G,p){
var b=require('@stdlib/number-float64-base-to-float32/dist'),E=require('@stdlib/math-base-assert-is-nanf/dist');function F(r,e,n,f,t,l,_){var o,u,s,v,a,i;if(r<=0)return NaN;for(s=f,v=_,i=0;i<r&&(a=e[s],!(a===a&&t[v]===0));i++)s+=n,v+=l;if(i===r)return NaN;for(u=a,o=u,i+=1,i;i<r;i++)s+=n,v+=l,!t[v]&&(a=e[s],!E(a)&&(a<u?u=a:a>o&&(o=a)));return b(o-u)}p.exports=F
});var g=q(function(H,y){
var x=require('@stdlib/strided-base-stride2offset/dist'),O=m();function T(r,e,n,f,t){return O(r,e,n,x(r,n),f,t,x(r,t))}y.exports=T
});var k=q(function(I,d){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=g(),w=m();h(j,"ndarray",w);d.exports=j
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=k(),c,R=A(z(__dirname,"./native.js"));B(R)?c=C:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
