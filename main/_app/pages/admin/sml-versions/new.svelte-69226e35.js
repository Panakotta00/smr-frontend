import{S as s,i as r,s as a,W as n,X as o,e as t,t as e,k as m,j as i,c,a as f,g as u,d as $,n as p,m as h,b as d,f as g,a2 as l,o as k,Y as j,x as b,u as v,v as x,a1 as S,h as w}from"../../../chunks/vendor-d3bf6e8b.js";import{o as y}from"../../../chunks/graphql-7b224d75.js";import{T as V}from"../../../chunks/Toast-ae4bd24a.js";import{g as E}from"../../../chunks/navigation-2ffed81e.js";import{S as L}from"../../../chunks/SMLVersionForm-997596c6.js";import{b as M}from"../../../chunks/paths-6758d194.js";import"../../../chunks/singletons-12a22614.js";import"../../../chunks/forms-8d025218.js";import"../../../chunks/markdown-129d1c4f.js";function N(s){let r,a;return{c(){r=t("span"),a=e(s[1])},l(n){r=c(n,"SPAN",{});var o=f(r);a=u(o,s[1]),o.forEach($)},m(s,n){g(s,r,n),l(r,a)},p(s,r){2&r&&w(a,s[1])},d(s){s&&$(r)}}}function q(s){let r,a,S,w,y,E,M,q;function T(r){s[3](r)}w=new L({props:{onSubmit:s[2]}});let A={$$slots:{default:[N]},$$scope:{ctx:s}};return void 0!==s[0]&&(A.running=s[0]),E=new V({props:A}),n.push((()=>o(E,"running",T))),{c(){r=t("h1"),a=e("New SML Version"),S=m(),i(w.$$.fragment),y=m(),i(E.$$.fragment),this.h()},l(s){r=c(s,"H1",{class:!0});var n=f(r);a=u(n,"New SML Version"),n.forEach($),S=p(s),h(w.$$.fragment,s),y=p(s),h(E.$$.fragment,s),this.h()},h(){d(r,"class","text-4xl my-4 font-bold")},m(s,n){g(s,r,n),l(r,a),g(s,S,n),k(w,s,n),g(s,y,n),k(E,s,n),q=!0},p(s,[r]){const a={};34&r&&(a.$$scope={dirty:r,ctx:s}),!M&&1&r&&(M=!0,a.running=s[0],j((()=>M=!1))),E.$set(a)},i(s){q||(b(w.$$.fragment,s),b(E.$$.fragment,s),q=!0)},o(s){v(w.$$.fragment,s),v(E.$$.fragment,s),q=!1},d(s){s&&$(r),s&&$(S),x(w,s),s&&$(y),x(E,s)}}}function T(s,r,a){let n="",o=!1;const t=S({query:y});return s.$$.update=()=>{1&s.$$.dirty&&(o||a(1,n=""))},[o,n,s=>{t({smlVersion:s}).then((s=>{s.error?(console.error(s.error.message),a(1,n="Error creating mod: "+s.error.message),a(0,o=!0)):E(M+"/admin/sml-versions")}))},function(s){o=s,a(0,o)}]}class A extends s{constructor(s){super(),r(this,s,T,q,a,{})}}export{A as default};
