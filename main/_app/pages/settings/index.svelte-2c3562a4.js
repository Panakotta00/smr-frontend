import{S as Y,i as Z,s as ee,J as te,K as se,j as z,k as A,e as h,t as N,$ as ae,m as B,d as u,n as I,c as $,a as E,g as D,b as p,o as C,f as P,R as c,u as q,w as re,x,L as ne,v as F,M as oe,Q as ie,as as le,az as ue,aA as ce,at as pe,r as fe,aw as me,ax as de,ay as _e,au as W,av as ge,X as J,h as K}from"../../chunks/vendor-bd04eeb5.js";import{U as he}from"../../chunks/graphql-44245247.js";import{T as $e}from"../../chunks/Toast-cf8cd1a0.js";import{g as ve}from"../../chunks/navigation-51f4a605.js";import{t as be}from"../../chunks/forms-8d025218.js";import{a as ke}from"../../chunks/user-3938001f.js";import{b as ye}from"../../chunks/paths-6758d194.js";import{M as Ee}from"../../chunks/MetaDescriptors-99b66b31.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/stores-44ecde00.js";function Se(i){let t,a,e,r,n,d,o,b,f,_,g,v,k,M,S,V,s,m,y,j,R,H,O;return f=new W({props:{for:"avatar",$$slots:{default:[we,({messages:l})=>({7:l}),({messages:l})=>l?128:0]},$$scope:{ctx:i}}}),s=new W({props:{for:"username",$$slots:{default:[Te,({messages:l})=>({7:l}),({messages:l})=>l?128:0]},$$scope:{ctx:i}}}),{c(){t=h("form"),a=h("div"),e=h("div"),r=h("label"),n=N("Avatar:"),d=A(),o=h("input"),b=A(),z(f.$$.fragment),_=A(),g=h("div"),v=h("label"),k=N("Username:"),M=A(),S=h("input"),V=A(),z(s.$$.fragment),m=A(),y=h("div"),j=h("input"),this.h()},l(l){t=$(l,"FORM",{});var w=E(t);a=$(w,"DIV",{class:!0});var T=E(a);e=$(T,"DIV",{class:!0});var U=E(e);r=$(U,"LABEL",{for:!0});var Q=E(r);n=D(Q,"Avatar:"),Q.forEach(u),d=I(U),o=$(U,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),b=I(U),B(f.$$.fragment,U),U.forEach(u),_=I(T),g=$(T,"DIV",{class:!0});var L=E(g);v=$(L,"LABEL",{for:!0});var X=E(v);k=D(X,"Username:"),X.forEach(u),M=I(L),S=$(L,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),V=I(L),B(s.$$.fragment,L),L.forEach(u),m=I(T),y=$(T,"DIV",{});var G=E(y);j=$(G,"INPUT",{type:!0,class:!0}),G.forEach(u),T.forEach(u),w.forEach(u),this.h()},h(){p(r,"for","avatar"),p(o,"id","avatar"),p(o,"class","base-input"),p(o,"name","avatar"),p(o,"type","file"),p(o,"accept","image/png,image/jpeg,image/gif"),p(o,"placeholder","Avatar"),p(e,"class","grid grid-flow-row gap-2"),p(v,"for","username"),p(S,"id","username"),p(S,"class","base-input"),p(S,"name","username"),p(S,"type","text"),p(S,"placeholder","Username"),p(g,"class","grid grid-flow-row gap-2"),p(j,"type","submit"),j.value="Save",p(j,"class","px-4 py-2 rounded text-base bg-blue-500 cursor-pointer"),p(a,"class","grid grid-flow-row gap-6")},m(l,w){P(l,t,w),c(t,a),c(a,e),c(e,r),c(r,n),c(e,d),c(e,o),c(e,b),C(f,e,null),c(a,_),c(a,g),c(g,v),c(v,k),c(g,M),c(g,S),c(g,V),C(s,g,null),c(a,m),c(a,y),c(y,j),R=!0,H||(O=ge(i[2].call(null,t)),H=!0)},p(l,w){const T={};w&384&&(T.$$scope={dirty:w,ctx:l}),f.$set(T);const U={};w&384&&(U.$$scope={dirty:w,ctx:l}),s.$set(U)},i(l){R||(x(f.$$.fragment,l),x(s.$$.fragment,l),R=!0)},o(l){q(f.$$.fragment,l),q(s.$$.fragment,l),R=!1},d(l){l&&u(t),F(f),F(s),H=!1,O()}}}function je(i){let t,a;return{c(){t=h("p"),a=N("Please log in")},l(e){t=$(e,"P",{});var r=E(t);a=D(r,"Please log in"),r.forEach(u)},m(e,r){P(e,t,r),c(t,a)},p:J,i:J,o:J,d(e){e&&u(t)}}}function we(i){let t,a=(i[7]||"")+"",e;return{c(){t=h("span"),e=N(a),this.h()},l(r){t=$(r,"SPAN",{class:!0});var n=E(t);e=D(n,a),n.forEach(u),this.h()},h(){p(t,"class","validation-message")},m(r,n){P(r,t,n),c(t,e)},p(r,n){n&128&&a!==(a=(r[7]||"")+"")&&K(e,a)},d(r){r&&u(t)}}}function Te(i){let t,a=(i[7]||"")+"",e;return{c(){t=h("span"),e=N(a),this.h()},l(r){t=$(r,"SPAN",{class:!0});var n=E(t);e=D(n,a),n.forEach(u),this.h()},h(){p(t,"class","validation-message")},m(r,n){P(r,t,n),c(t,e)},p(r,n){n&128&&a!==(a=(r[7]||"")+"")&&K(e,a)},d(r){r&&u(t)}}}function Ue(i){let t,a;return{c(){t=h("span"),a=N(i[1])},l(e){t=$(e,"SPAN",{});var r=E(t);a=D(r,i[1]),r.forEach(u)},m(e,r){P(e,t,r),c(t,a)},p(e,r){r&2&&K(a,e[1])},d(e){e&&u(t)}}}function Ae(i){let t,a,e,r,n,d,o,b,f,_,g;t=new Ee({props:{description:"Change your user settings",title:"Settings"}});const v=[je,Se],k=[];function M(s,m){return s[2]?1:0}d=M(i),o=k[d]=v[d](i);function S(s){i[5](s)}let V={$$slots:{default:[Ue]},$$scope:{ctx:i}};return i[0]!==void 0&&(V.running=i[0]),f=new $e({props:V}),te.push(()=>se(f,"running",S)),{c(){z(t.$$.fragment),a=A(),e=h("h1"),r=N("Settings"),n=A(),o.c(),b=A(),z(f.$$.fragment),this.h()},l(s){const m=ae('[data-svelte="svelte-1ae5i2c"]',document.head);B(t.$$.fragment,m),m.forEach(u),a=I(s),e=$(s,"H1",{class:!0});var y=E(e);r=D(y,"Settings"),y.forEach(u),n=I(s),o.l(s),b=I(s),B(f.$$.fragment,s),this.h()},h(){p(e,"class","text-4xl my-4 font-bold")},m(s,m){C(t,document.head,null),P(s,a,m),P(s,e,m),c(e,r),P(s,n,m),k[d].m(s,m),P(s,b,m),C(f,s,m),g=!0},p(s,[m]){let y=d;d=M(s),d===y?k[d].p(s,m):(fe(),q(k[y],1,1,()=>{k[y]=null}),re(),o=k[d],o?o.p(s,m):(o=k[d]=v[d](s),o.c()),x(o,1),o.m(b.parentNode,b));const j={};m&258&&(j.$$scope={dirty:m,ctx:s}),!_&&m&1&&(_=!0,j.running=s[0],ne(()=>_=!1)),f.$set(j)},i(s){g||(x(t.$$.fragment,s),x(o),x(f.$$.fragment,s),g=!0)},o(s){q(t.$$.fragment,s),q(o),q(f.$$.fragment,s),g=!1},d(s){F(t),s&&u(a),s&&u(e),s&&u(n),k[d].d(s),s&&u(b),F(f,s)}}}function Ie(i,t,a){let e;oe(i,ke,_=>a(4,e=_));let r="",n=!1;const d=ie({query:he}),o=le({avatar:ue(ce().refine(_=>"name"in _&&"size"in _&&"type"in _)),username:pe().min(3).max(32)});let b;function f(_){n=_,a(0,n),a(4,e)}return i.$$.update=()=>{if(i.$$.dirty&16&&e){const{form:_}=me({initialValues:{username:e.username},extend:[de,_e],validateSchema:o,onSubmit:g=>{d({user:be(g,o),userId:e.id}).then(v=>{v.error?(console.error(v.error.message),a(1,r="Error editing guide: "+v.error.message),a(0,n=!0)):ve(ye+"/user/"+v.data.updateUser.id)})}});a(2,b=_)}i.$$.dirty&1&&(n||a(1,r=""))},[n,r,b,o,e,f]}class Be extends Y{constructor(t){super();Z(this,t,Ie,Ae,ee,{userSchema:3})}get userSchema(){return this.$$.ctx[3]}}export{Be as default};
//# sourceMappingURL=index.svelte-2c3562a4.js.map
