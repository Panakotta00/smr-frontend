import{S as t,i as e,s,e as r,t as a,k as n,c as l,a as o,g as c,d,n as u,b as i,f as g,a2 as f,h as m,a8 as h,ar as p,l as $,u as v,w as U,x,Z as E,_ as b,$ as I,r as w,j,m as k,o as D,a7 as V,v as G,an as y}from"../../../chunks/vendor-d3bf6e8b.js";import{p as M}from"../../../chunks/routing-405c8d47.js";import{t as S}from"../../../chunks/graphql-7b224d75.js";import{M as A}from"../../../chunks/ModCard-1c75a36e.js";import{G as B}from"../../../chunks/GuideCard-b9330e3a.js";import{a as C}from"../../../chunks/user-679d7474.js";import{b as N}from"../../../chunks/paths-6758d194.js";import"../../../chunks/image-54ff6a87.js";function O(t){let e,s,p,$,v,U,x,E,b,I,w=t[0].created_at+"";return{c(){e=r("div"),s=r("h3"),p=a("Info"),$=n(),v=r("span"),U=r("strong"),x=a("Created:"),E=n(),b=a(w),I=r("br"),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=o(e);s=l(r,"H3",{class:!0});var a=o(s);p=c(a,"Info"),a.forEach(d),$=u(r),v=l(r,"SPAN",{});var n=o(v);U=l(n,"STRONG",{});var i=o(U);x=c(i,"Created:"),i.forEach(d),E=u(n),b=c(n,w),n.forEach(d),I=l(r,"BR",{}),r.forEach(d),this.h()},h(){i(s,"class","text-2xl my-4 font-bold"),i(e,"class","text-lg")},m(t,r){g(t,e,r),f(e,s),f(s,p),f(e,$),f(e,v),f(v,U),f(U,x),f(v,E),f(v,b),f(e,I)},p(t,[e]){1&e&&w!==(w=t[0].created_at+"")&&m(b,w)},i:h,o:h,d(t){t&&d(e)}}}function q(t,e,s){let{user:r}=e;return t.$$set=t=>{"user"in t&&s(0,r=t.user)},[r]}class P extends t{constructor(t){super(),e(this,t,q,O,s,{user:0})}}function T(t){let e,s,a,n;return{c(){e=r("div"),s=r("img"),this.h()},l(t){e=l(t,"DIV",{});var r=o(e);s=l(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(d),this.h()},h(){i(s,"class","rounded-lg max-w-lg"),p(s.src,a=t[0])||i(s,"src",a),i(s,"alt",n="Avatar for "+t[1])},m(t,r){g(t,e,r),f(e,s)},p(t,[e]){1&e&&!p(s.src,a=t[0])&&i(s,"src",a),2&e&&n!==(n="Avatar for "+t[1])&&i(s,"alt",n)},i:h,o:h,d(t){t&&d(e)}}}function _(t,e,s){let{avatar:r}=e,{username:a}=e;return t.$$set=t=>{"avatar"in t&&s(0,r=t.avatar),"username"in t&&s(1,a=t.username)},[r,a]}class H extends t{constructor(t){super(),e(this,t,_,T,s,{avatar:0,username:1})}}function L(t,e,s){const r=t.slice();return r[9]=e[s],r}function R(t,e,s){const r=t.slice();return r[6]=e[s],r}function Z(t){let e;return{c(){e=a("404")},l(t){e=c(t,"404")},m(t,s){g(t,e,s)},p:h,i:h,o:h,d(t){t&&d(e)}}}function z(t){let e,s,h,p,$,E,b,I,y,M,S,A,B,C,N,O,q,T,_,L=t[1].data.getUser.username+"",R=t[2]&&t[1].data.getUser.id===t[2].id&&K();function Z(t,e){return t[0]?Q:W}let z=Z(t),F=z(t);const J=[Y,X],tt=[];function et(t,e){return t[0]?1:0}return M=et(t),S=tt[M]=J[M](t),C=new H({props:{avatar:t[1].data.getUser.avatar,username:t[1].data.getUser.username}}),O=new P({props:{user:t[1].data.getUser}}),{c(){e=r("div"),s=r("div"),h=r("div"),p=r("h1"),$=a(L),E=n(),R&&R.c(),b=n(),I=r("button"),F.c(),y=n(),S.c(),A=n(),B=r("div"),j(C.$$.fragment),N=n(),j(O.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=o(e);s=l(r,"DIV",{class:!0});var a=o(s);h=l(a,"DIV",{class:!0});var n=o(h);p=l(n,"H1",{class:!0});var i=o(p);$=c(i,L),i.forEach(d),E=u(n),R&&R.l(n),b=u(n),I=l(n,"BUTTON",{class:!0});var g=o(I);F.l(g),g.forEach(d),n.forEach(d),y=u(a),S.l(a),a.forEach(d),A=u(r),B=l(r,"DIV",{class:!0});var f=o(B);k(C.$$.fragment,f),N=u(f),k(O.$$.fragment,f),f.forEach(d),r.forEach(d),this.h()},h(){i(p,"class","text-4xl my-4 font-bold"),i(I,"class","py-2 px-4 rounded text-base bg-blue-500"),i(h,"class","grid grid-flow-col grid-auto-max h-auto gap-4 items-center svelte-1sejgqw"),i(s,"class","grid grid-cols-1 auto-rows-min gap-8"),i(B,"class","grid grid-cols-1 auto-rows-min gap-8"),i(e,"class","grid gap-8 grid-auto-max svelte-1sejgqw")},m(r,a){g(r,e,a),f(e,s),f(s,h),f(h,p),f(p,$),f(h,E),R&&R.m(h,null),f(h,b),f(h,I),F.m(I,null),f(s,y),tt[M].m(s,null),f(e,A),f(e,B),D(C,B,null),f(B,N),D(O,B,null),q=!0,T||(_=V(I,"click",t[5]),T=!0)},p(t,e){(!q||2&e)&&L!==(L=t[1].data.getUser.username+"")&&m($,L),t[2]&&t[1].data.getUser.id===t[2].id?R?R.p(t,e):(R=K(),R.c(),R.m(h,b)):R&&(R.d(1),R=null),z!==(z=Z(t))&&(F.d(1),F=z(t),F&&(F.c(),F.m(I,null)));let r=M;M=et(t),M===r?tt[M].p(t,e):(w(),v(tt[r],1,1,(()=>{tt[r]=null})),U(),S=tt[M],S?S.p(t,e):(S=tt[M]=J[M](t),S.c()),x(S,1),S.m(s,null));const a={};2&e&&(a.avatar=t[1].data.getUser.avatar),2&e&&(a.username=t[1].data.getUser.username),C.$set(a);const n={};2&e&&(n.user=t[1].data.getUser),O.$set(n)},i(t){q||(x(S),x(C.$$.fragment,t),x(O.$$.fragment,t),q=!0)},o(t){v(S),v(C.$$.fragment,t),v(O.$$.fragment,t),q=!1},d(t){t&&d(e),R&&R.d(),F.d(),tt[M].d(),G(C),G(O),T=!1,_()}}}function F(t){let e,s,n,u=t[1].error.message+"";return{c(){e=r("p"),s=a("Oh no... "),n=a(u)},l(t){e=l(t,"P",{});var r=o(e);s=c(r,"Oh no... "),n=c(r,u),r.forEach(d)},m(t,r){g(t,e,r),f(e,s),f(e,n)},p(t,e){2&e&&u!==(u=t[1].error.message+"")&&m(n,u)},i:h,o:h,d(t){t&&d(e)}}}function J(t){let e,s;return{c(){e=r("p"),s=a("Loading...")},l(t){e=l(t,"P",{});var r=o(e);s=c(r,"Loading..."),r.forEach(d)},m(t,r){g(t,e,r),f(e,s)},p:h,i:h,o:h,d(t){t&&d(e)}}}function K(t){let e,s,n;return{c(){e=r("a"),s=a("Settings"),this.h()},l(t){e=l(t,"A",{href:!0,class:!0});var r=o(e);s=c(r,"Settings"),r.forEach(d),this.h()},h(){i(e,"href",n=N+"/settings"),i(e,"class","py-2 px-4 rounded text-base bg-yellow-600")},m(t,r){g(t,e,r),f(e,s)},p:h,d(t){t&&d(e)}}}function Q(t){let e;return{c(){e=a("Mods")},l(t){e=c(t,"Mods")},m(t,s){g(t,e,s)},d(t){t&&d(e)}}}function W(t){let e;return{c(){e=a("Guides")},l(t){e=c(t,"Guides")},m(t,s){g(t,e,s)},d(t){t&&d(e)}}}function X(t){let e,s,a,c=t[1].data.getUser.guides,m=[];for(let r=0;r<c.length;r+=1)m[r]=tt(L(t,c,r));const h=t=>v(m[t],1,1,(()=>{m[t]=null}));let p=0===t[1].data.getUser.guides.length&&et();return{c(){e=r("div");for(let t=0;t<m.length;t+=1)m[t].c();s=n(),p&&p.c(),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=o(e);for(let e=0;e<m.length;e+=1)m[e].l(r);s=u(r),p&&p.l(r),r.forEach(d),this.h()},h(){i(e,"class","grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4")},m(t,r){g(t,e,r);for(let s=0;s<m.length;s+=1)m[s].m(e,null);f(e,s),p&&p.m(e,null),a=!0},p(t,r){if(2&r){let a;for(c=t[1].data.getUser.guides,a=0;a<c.length;a+=1){const n=L(t,c,a);m[a]?(m[a].p(n,r),x(m[a],1)):(m[a]=tt(n),m[a].c(),x(m[a],1),m[a].m(e,s))}for(w(),a=c.length;a<m.length;a+=1)h(a);U()}0===t[1].data.getUser.guides.length?p||(p=et(),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i(t){if(!a){for(let t=0;t<c.length;t+=1)x(m[t]);a=!0}},o(t){m=m.filter(Boolean);for(let e=0;e<m.length;e+=1)v(m[e]);a=!1},d(t){t&&d(e),y(m,t),p&&p.d()}}}function Y(t){let e,s,a,c=t[1].data.getUser.mods,m=[];for(let r=0;r<c.length;r+=1)m[r]=st(R(t,c,r));const h=t=>v(m[t],1,1,(()=>{m[t]=null}));let p=0===t[1].data.getUser.mods.length&&rt();return{c(){e=r("div");for(let t=0;t<m.length;t+=1)m[t].c();s=n(),p&&p.c(),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=o(e);for(let e=0;e<m.length;e+=1)m[e].l(r);s=u(r),p&&p.l(r),r.forEach(d),this.h()},h(){i(e,"class","grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4")},m(t,r){g(t,e,r);for(let s=0;s<m.length;s+=1)m[s].m(e,null);f(e,s),p&&p.m(e,null),a=!0},p(t,r){if(2&r){let a;for(c=t[1].data.getUser.mods,a=0;a<c.length;a+=1){const n=R(t,c,a);m[a]?(m[a].p(n,r),x(m[a],1)):(m[a]=st(n),m[a].c(),x(m[a],1),m[a].m(e,s))}for(w(),a=c.length;a<m.length;a+=1)h(a);U()}0===t[1].data.getUser.mods.length?p||(p=rt(),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i(t){if(!a){for(let t=0;t<c.length;t+=1)x(m[t]);a=!0}},o(t){m=m.filter(Boolean);for(let e=0;e<m.length;e+=1)v(m[e]);a=!1},d(t){t&&d(e),y(m,t),p&&p.d()}}}function tt(t){let e,s;return e=new B({props:{guide:t[9],logo:t[1].data.getUser.avatar}}),{c(){j(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){D(e,t,r),s=!0},p(t,s){const r={};2&s&&(r.guide=t[9]),2&s&&(r.logo=t[1].data.getUser.avatar),e.$set(r)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function et(t){let e;return{c(){e=a("User has no guides")},l(t){e=c(t,"User has no guides")},m(t,s){g(t,e,s)},d(t){t&&d(e)}}}function st(t){let e,s;return e=new A({props:{mod:t[6].mod}}),{c(){j(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){D(e,t,r),s=!0},p(t,s){const r={};2&s&&(r.mod=t[6].mod),e.$set(r)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function rt(t){let e;return{c(){e=a("User has no mods")},l(t){e=c(t,"User has no mods")},m(t,s){g(t,e,s)},d(t){t&&d(e)}}}function at(t){let e,s,r,a;const n=[J,F,z,Z],l=[];function o(t,e){return t[1].fetching?0:t[1].error?1:t[1].data.getUser?2:3}return e=o(t),s=l[e]=n[e](t),{c(){s.c(),r=$()},l(t){s.l(t),r=$()},m(t,s){l[e].m(t,s),g(t,r,s),a=!0},p(t,[a]){let c=e;e=o(t),e===c?l[e].p(t,a):(w(),v(l[c],1,1,(()=>{l[c]=null})),U(),s=l[e],s?s.p(t,a):(s=l[e]=n[e](t),s.c()),x(s,1),s.m(r.parentNode,r))},i(t){a||(x(s),a=!0)},o(t){v(s),a=!1},d(t){l[e].d(t),t&&d(r)}}}const nt=M();function lt(t,e,s){let r,a;E(t,C,(t=>s(2,a=t)));let{userId:n}=e,l=!1;const o=b(S,{user:n});E(t,o,(t=>s(1,r=t))),I(o);return t.$$set=t=>{"userId"in t&&s(4,n=t.userId)},[l,r,a,o,n,()=>s(0,l=!l)]}class ot extends t{constructor(t){super(),e(this,t,lt,at,s,{userId:4})}}export{ot as default,nt as load};
