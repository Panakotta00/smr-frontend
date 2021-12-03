import{as as Fe,az as Le,aA as ze,aI as Ee,at as Se,aJ as Ce,S as Ge,i as Ue,s as Je,au as re,e as g,t as w,k as N,j as ue,l as ye,c as v,a as k,g as V,d as f,n as P,m as ce,b as S,f as A,R as r,o as fe,h as C,ad as we,x as X,u as Q,v as de,am as Ve,av as Ze,r as $e,w as Ye,an as He,M as Ne,aw as We,ax as Xe,ay as qe,X as L,C as Ke}from"./vendor-bd04eeb5.js";import{v as Qe}from"./uplugin-3ba44138.js";import{t as xe}from"./forms-8d025218.js";import{m as Pe}from"./markdown-b0181a82.js";const et=(i,e)=>Fe({file:Le(ze().superRefine(async(t,l)=>{if(!("name"in t&&"size"in t&&"type"in t)){l.addIssue({message:"Unknown file error",code:Ee.custom});return}const s=await tt(t,i);if("message"in s){l.addIssue({message:s.message,code:Ee.custom});return}e.set(s)})),changelog:Se(),stability:Se()}),tt=async(i,e)=>new Ce().loadAsync(i).then(l=>{const s=l.file(e+".uplugin");return s?lt(l,s,e):{message:e+".uplugin missing from mod"}}).catch(l=>({message:"invalid zip/smod file: "+l})),lt=async(i,e,t)=>e.async("string").then(async l=>{const s=await Qe(l);if(s.length!=0)return{message:`invalid ${t}.uplugin`,extended:s};const a=JSON.parse(l);let u=!1;for(const n of a.Plugins)if(n.Name==="SML"){u=!0;break}return u?{uplugin:a,objects:Object.keys(i.files).filter(n=>n.endsWith(".dll")||n.endsWith(".pak"))}:{message:"mod must depend on SML"}}).catch(l=>({message:`invalid ${t}.uplugin: ${l}`})),Te=i=>{const[e,t,l]=[1e3,"k","B"],s=Math.log(i)/Math.log(e)|0,a=Number((i/Math.pow(e,s)).toFixed(2));return a+" "+(s?(t+"MGTPEZY")[s-1]+l:"byte"+(a!==1?"s":""))};function Ae(i,e,t){const l=i.slice();return l[15]=e[t],l}function Re(i,e,t){const l=i.slice();return l[18]=e[t],l}function st(i){let e,t=(i[14]||"")+"",l;return{c(){e=g("span"),l=w(t),this.h()},l(s){e=v(s,"SPAN",{class:!0});var a=k(e);l=V(a,t),a.forEach(f),this.h()},h(){S(e,"class","validation-message")},m(s,a){A(s,e,a),r(e,l)},p(s,a){a&16384&&t!==(t=(s[14]||"")+"")&&C(l,t)},d(s){s&&f(e)}}}function Ie(i){let e,t,l,s,a,u,n,c,p,o,d;n=new re({props:{for:"file",$$slots:{default:[nt,({messages:m})=>({14:m}),({messages:m})=>m?16384:0]},$$scope:{ctx:i}}});let _=i[2].file&&Me(i),y=i[5]&&Oe(i);return{c(){e=g("div"),t=g("label"),l=w("File:"),s=N(),a=g("input"),u=N(),ue(n.$$.fragment),c=N(),_&&_.c(),p=N(),y&&y.c(),o=ye(),this.h()},l(m){e=v(m,"DIV",{class:!0});var b=k(e);t=v(b,"LABEL",{for:!0});var h=k(t);l=V(h,"File:"),h.forEach(f),s=P(b),a=v(b,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),u=P(b),ce(n.$$.fragment,b),b.forEach(f),c=P(m),_&&_.l(m),p=P(m),y&&y.l(m),o=ye(),this.h()},h(){S(t,"for","file"),S(a,"id","file"),S(a,"class","base-input"),S(a,"name","file"),S(a,"type","file"),S(a,"accept",".zip,.smod"),S(a,"placeholder","File"),S(e,"class","grid grid-flow-row gap-2")},m(m,b){A(m,e,b),r(e,t),r(t,l),r(e,s),r(e,a),r(e,u),fe(n,e,null),A(m,c,b),_&&_.m(m,b),A(m,p,b),y&&y.m(m,b),A(m,o,b),d=!0},p(m,b){const h={};b&2113536&&(h.$$scope={dirty:b,ctx:m}),n.$set(h),m[2].file?_?_.p(m,b):(_=Me(m),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null),m[5]?y?y.p(m,b):(y=Oe(m),y.c(),y.m(o.parentNode,o)):y&&(y.d(1),y=null)},i(m){d||(X(n.$$.fragment,m),d=!0)},o(m){Q(n.$$.fragment,m),d=!1},d(m){m&&f(e),de(n),m&&f(c),_&&_.d(m),m&&f(p),y&&y.d(m),m&&f(o)}}}function nt(i){let e,t=(i[14]||"")+"",l;return{c(){e=g("span"),l=w(t),this.h()},l(s){e=v(s,"SPAN",{class:!0});var a=k(e);l=V(a,t),a.forEach(f),this.h()},h(){S(e,"class","validation-message")},m(s,a){A(s,e,a),r(e,l)},p(s,a){a&16384&&t!==(t=(s[14]||"")+"")&&C(l,t)},d(s){s&&f(e)}}}function Me(i){let e,t,l,s,a,u=(i[2].file.type||"Unknown")+"",n,c,p,o,d,_,y,m=Te(i[2].file.size)+"",b;return{c(){e=g("div"),t=g("span"),l=g("strong"),s=w("File Type:"),a=N(),n=w(u),c=g("br"),p=N(),o=g("span"),d=g("strong"),_=w("File Size:"),y=N(),b=w(m)},l(h){e=v(h,"DIV",{});var O=k(e);t=v(O,"SPAN",{});var j=k(t);l=v(j,"STRONG",{});var T=k(l);s=V(T,"File Type:"),T.forEach(f),a=P(j),n=V(j,u),j.forEach(f),c=v(O,"BR",{}),p=P(O),o=v(O,"SPAN",{});var E=k(o);d=v(E,"STRONG",{});var R=k(d);_=V(R,"File Size:"),R.forEach(f),y=P(E),b=V(E,m),E.forEach(f),O.forEach(f)},m(h,O){A(h,e,O),r(e,t),r(t,l),r(l,s),r(t,a),r(t,n),r(e,c),r(e,p),r(e,o),r(o,d),r(d,_),r(o,y),r(o,b)},p(h,O){O&4&&u!==(u=(h[2].file.type||"Unknown")+"")&&C(n,u),O&4&&m!==(m=Te(h[2].file.size)+"")&&C(b,m)},d(h){h&&f(e)}}}function Oe(i){let e,t,l,s,a,u,n=i[5].uplugin.Version+"",c,p,o,d,_;function y(E,R){return E[5].uplugin.SemVersion!==void 0?it:at}let m=y(i),b=m(i),h=i[5].uplugin.Plugins!==void 0&&je(i);function O(E,R){return E[5].objects&&E[5].objects.length>0?ct:ut}let j=O(i),T=j(i);return{c(){e=g("div"),t=g("p"),l=g("span"),s=g("strong"),a=w("Version:"),u=N(),c=w(n),p=g("br"),o=N(),b.c(),d=N(),h&&h.c(),_=N(),T.c(),this.h()},l(E){e=v(E,"DIV",{});var R=k(e);t=v(R,"P",{class:!0});var Z=k(t);l=v(Z,"SPAN",{});var B=k(l);s=v(B,"STRONG",{});var Y=k(s);a=V(Y,"Version:"),Y.forEach(f),u=P(B),c=V(B,n),p=v(B,"BR",{}),B.forEach(f),o=P(Z),b.l(Z),Z.forEach(f),d=P(R),h&&h.l(R),_=P(R),T.l(R),R.forEach(f),this.h()},h(){S(t,"class","mb-4")},m(E,R){A(E,e,R),r(e,t),r(t,l),r(l,s),r(s,a),r(l,u),r(l,c),r(l,p),r(t,o),b.m(t,null),r(e,d),h&&h.m(e,null),r(e,_),T.m(e,null)},p(E,R){R&32&&n!==(n=E[5].uplugin.Version+"")&&C(c,n),m===(m=y(E))&&b?b.p(E,R):(b.d(1),b=m(E),b&&(b.c(),b.m(t,null))),E[5].uplugin.Plugins!==void 0?h?h.p(E,R):(h=je(E),h.c(),h.m(e,_)):h&&(h.d(1),h=null),j===(j=O(E))&&T?T.p(E,R):(T.d(1),T=j(E),T&&(T.c(),T.m(e,null)))},d(E){E&&f(e),b.d(),h&&h.d(),T.d()}}}function at(i){let e,t,l=i[5].uplugin.Version+"",s,a;return{c(){e=g("span"),t=w("Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),s=w(l),a=w(".0.0"),this.h()},l(u){e=v(u,"SPAN",{class:!0});var n=k(e);t=V(n,"Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),s=V(n,l),a=V(n,".0.0"),n.forEach(f),this.h()},h(){S(e,"class","text-yellow-600")},m(u,n){A(u,e,n),r(e,t),r(e,s),r(e,a)},p(u,n){n&32&&l!==(l=u[5].uplugin.Version+"")&&C(s,l)},d(u){u&&f(e)}}}function it(i){let e,t,l,s,a=i[5].uplugin.SemVersion+"",u,n;return{c(){e=g("span"),t=g("strong"),l=w("SemVersion:"),s=N(),u=w(a),n=g("br")},l(c){e=v(c,"SPAN",{});var p=k(e);t=v(p,"STRONG",{});var o=k(t);l=V(o,"SemVersion:"),o.forEach(f),s=P(p),u=V(p,a),n=v(p,"BR",{}),p.forEach(f)},m(c,p){A(c,e,p),r(e,t),r(t,l),r(e,s),r(e,u),r(e,n)},p(c,p){p&32&&a!==(a=c[5].uplugin.SemVersion+"")&&C(u,a)},d(c){c&&f(e)}}}function je(i){let e,t,l,s,a,u=i[5].uplugin.Plugins,n=[];for(let c=0;c<u.length;c+=1)n[c]=Be(Re(i,u,c));return{c(){e=g("p"),t=g("strong"),l=w("Dependencies:"),s=g("br"),a=N();for(let c=0;c<n.length;c+=1)n[c].c()},l(c){e=v(c,"P",{});var p=k(e);t=v(p,"STRONG",{});var o=k(t);l=V(o,"Dependencies:"),o.forEach(f),s=v(p,"BR",{}),a=P(p);for(let d=0;d<n.length;d+=1)n[d].l(p);p.forEach(f)},m(c,p){A(c,e,p),r(e,t),r(t,l),r(e,s),r(e,a);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(c,p){if(p&32){u=c[5].uplugin.Plugins;let o;for(o=0;o<u.length;o+=1){const d=Re(c,u,o);n[o]?n[o].p(d,p):(n[o]=Be(d),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=u.length}},d(c){c&&f(e),we(n,c)}}}function ot(i){let e,t;return{c(){e=g("span"),t=w("*")},l(l){e=v(l,"SPAN",{});var s=k(e);t=V(s,"*"),s.forEach(f)},m(l,s){A(l,e,s),r(e,t)},p:L,d(l){l&&f(e)}}}function rt(i){let e,t=i[18].SemVersion+"",l;return{c(){e=g("span"),l=w(t)},l(s){e=v(s,"SPAN",{});var a=k(e);l=V(a,t),a.forEach(f)},m(s,a){A(s,e,a),r(e,l)},p(s,a){a&32&&t!==(t=s[18].SemVersion+"")&&C(l,t)},d(s){s&&f(e)}}}function Be(i){let e,t=i[18].Name+"",l,s,a,u,n;function c(d,_){return d[18].SemVersion?rt:ot}let p=c(i),o=p(i);return{c(){e=g("strong"),l=w(t),s=w(":"),a=N(),o.c(),u=N(),n=g("br")},l(d){e=v(d,"STRONG",{});var _=k(e);l=V(_,t),s=V(_,":"),_.forEach(f),a=P(d),o.l(d),u=P(d),n=v(d,"BR",{})},m(d,_){A(d,e,_),r(e,l),r(e,s),A(d,a,_),o.m(d,_),A(d,u,_),A(d,n,_)},p(d,_){_&32&&t!==(t=d[18].Name+"")&&C(l,t),p===(p=c(d))&&o?o.p(d,_):(o.d(1),o=p(d),o&&(o.c(),o.m(u.parentNode,u)))},d(d){d&&f(e),d&&f(a),o.d(d),d&&f(u),d&&f(n)}}}function ut(i){let e,t,l;return{c(){e=g("p"),t=g("span"),l=w("Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),this.h()},l(s){e=v(s,"P",{});var a=k(e);t=v(a,"SPAN",{class:!0});var u=k(t);l=V(u,"Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),u.forEach(f),a.forEach(f),this.h()},h(){S(t,"class","text-yellow-600")},m(s,a){A(s,e,a),r(e,t),r(t,l)},p:L,d(s){s&&f(e)}}}function ct(i){let e,t,l,s,a,u=i[5].objects,n=[];for(let c=0;c<u.length;c+=1)n[c]=De(Ae(i,u,c));return{c(){e=g("p"),t=g("strong"),l=w("Objects:"),s=g("br"),a=N();for(let c=0;c<n.length;c+=1)n[c].c()},l(c){e=v(c,"P",{});var p=k(e);t=v(p,"STRONG",{});var o=k(t);l=V(o,"Objects:"),o.forEach(f),s=v(p,"BR",{}),a=P(p);for(let d=0;d<n.length;d+=1)n[d].l(p);p.forEach(f)},m(c,p){A(c,e,p),r(e,t),r(t,l),r(e,s),r(e,a);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(c,p){if(p&32){u=c[5].objects;let o;for(o=0;o<u.length;o+=1){const d=Ae(c,u,o);n[o]?n[o].p(d,p):(n[o]=De(d),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=u.length}},d(c){c&&f(e),we(n,c)}}}function De(i){let e,t=i[15]+"",l,s,a;return{c(){e=g("span"),l=w(t),s=N(),a=g("br")},l(u){e=v(u,"SPAN",{});var n=k(e);l=V(n,t),n.forEach(f),s=P(u),a=v(u,"BR",{})},m(u,n){A(u,e,n),r(e,l),A(u,s,n),A(u,a,n)},p(u,n){n&32&&t!==(t=u[15]+"")&&C(l,t)},d(u){u&&f(e),u&&f(s),u&&f(a)}}}function ft(i){let e,t=(i[14]||"")+"",l;return{c(){e=g("span"),l=w(t),this.h()},l(s){e=v(s,"SPAN",{class:!0});var a=k(e);l=V(a,t),a.forEach(f),this.h()},h(){S(e,"class","validation-message")},m(s,a){A(s,e,a),r(e,l)},p(s,a){a&16384&&t!==(t=(s[14]||"")+"")&&C(l,t)},d(s){s&&f(e)}}}function dt(i){return{c:L,l:L,m:L,p:L,d:L}}function pt(i){let e,t=i[13]+"";return{c(){e=g("div"),this.h()},l(l){e=v(l,"DIV",{class:!0});var s=k(e);s.forEach(f),this.h()},h(){S(e,"class","markdown-content right svelte-1ks9yo5")},m(l,s){A(l,e,s),e.innerHTML=t},p(l,s){s&16&&t!==(t=l[13]+"")&&(e.innerHTML=t)},d(l){l&&f(e)}}}function _t(i){return{c:L,l:L,m:L,p:L,d:L}}function mt(i){let e,t,l,s,a,u,n,c,p,o,d,_,y,m,b,h,O,j,T,E,R,Z,B,Y,$,se,G,q,ne,ae,x,ie,K,U,H,oe,pe;b=new re({props:{for:"stability",$$slots:{default:[st,({messages:I})=>({14:I}),({messages:I})=>I?16384:0]},$$scope:{ctx:i}}});let M=!i[1]&&Ie(i);$=new re({props:{for:"changelog",$$slots:{default:[ft,({messages:I})=>({14:I}),({messages:I})=>I?16384:0]},$$scope:{ctx:i}}});let F={ctx:i,current:null,token:null,hasCatch:!1,pending:_t,then:pt,catch:dt,value:13};return Ve(x=Pe(i[4]),F),{c(){e=g("form"),t=g("div"),l=g("div"),s=g("label"),a=w("Stability:"),u=N(),n=g("select"),c=g("option"),p=w("Alpha"),o=g("option"),d=w("Beta"),_=g("option"),y=w("Release"),m=N(),ue(b.$$.fragment),h=N(),M&&M.c(),O=N(),j=g("div"),T=g("div"),E=g("label"),R=w("Changelog:"),Z=N(),B=g("textarea"),Y=N(),ue($.$$.fragment),se=N(),G=g("div"),q=g("span"),ne=w("Preview:"),ae=N(),F.block.c(),ie=N(),K=g("div"),U=g("input"),this.h()},l(I){e=v(I,"FORM",{});var D=k(e);t=v(D,"DIV",{class:!0});var z=k(t);l=v(z,"DIV",{class:!0});var J=k(l);s=v(J,"LABEL",{for:!0});var _e=k(s);a=V(_e,"Stability:"),_e.forEach(f),u=P(J),n=v(J,"SELECT",{id:!0,class:!0,name:!0});var ee=k(n);c=v(ee,"OPTION",{});var me=k(c);p=V(me,"Alpha"),me.forEach(f),o=v(ee,"OPTION",{});var he=k(o);d=V(he,"Beta"),he.forEach(f),_=v(ee,"OPTION",{});var ge=k(_);y=V(ge,"Release"),ge.forEach(f),ee.forEach(f),m=P(J),ce(b.$$.fragment,J),J.forEach(f),h=P(z),M&&M.l(z),O=P(z),j=v(z,"DIV",{class:!0});var te=k(j);T=v(te,"DIV",{class:!0});var W=k(T);E=v(W,"LABEL",{for:!0});var ve=k(E);R=V(ve,"Changelog:"),ve.forEach(f),Z=P(W),B=v(W,"TEXTAREA",{class:!0,id:!0,name:!0,placeholder:!0,rows:!0}),k(B).forEach(f),Y=P(W),ce($.$$.fragment,W),W.forEach(f),se=P(te),G=v(te,"DIV",{class:!0});var le=k(G);q=v(le,"SPAN",{});var be=k(q);ne=V(be,"Preview:"),be.forEach(f),ae=P(le),F.block.l(le),le.forEach(f),te.forEach(f),ie=P(z),K=v(z,"DIV",{});var ke=k(K);U=v(ke,"INPUT",{type:!0,class:!0}),ke.forEach(f),z.forEach(f),D.forEach(f),this.h()},h(){S(s,"for","stability"),c.__value="alpha",c.value=c.__value,o.__value="beta",o.value=o.__value,_.__value="release",_.value=_.__value,S(n,"id","stability"),S(n,"class","base-input"),S(n,"name","stability"),S(l,"class","grid grid-flow-row gap-2"),S(E,"for","changelog"),S(B,"class","base-input"),S(B,"id","changelog"),S(B,"name","changelog"),S(B,"placeholder","Changelog"),S(B,"rows","10"),S(T,"class","grid grid-flow-row gap-2 auto-rows-max"),S(G,"class","grid grid-flow-row gap-2 auto-rows-max"),S(j,"class","grid gap-6 split svelte-1ks9yo5"),S(U,"type","submit"),U.disabled=i[3],U.value=i[0],S(U,"class","px-4 py-2 rounded text-base bg-blue-500 cursor-pointer disabled:opacity-50"),S(t,"class","grid grid-flow-row gap-6")},m(I,D){A(I,e,D),r(e,t),r(t,l),r(l,s),r(s,a),r(l,u),r(l,n),r(n,c),r(c,p),r(n,o),r(o,d),r(n,_),r(_,y),r(l,m),fe(b,l,null),r(t,h),M&&M.m(t,null),r(t,O),r(t,j),r(j,T),r(T,E),r(E,R),r(T,Z),r(T,B),r(T,Y),fe($,T,null),r(j,se),r(j,G),r(G,q),r(q,ne),r(G,ae),F.block.m(G,F.anchor=null),F.mount=()=>G,F.anchor=null,r(t,ie),r(t,K),r(K,U),H=!0,oe||(pe=Ze(i[7].call(null,e)),oe=!0)},p(I,[D]){i=I;const z={};D&2113536&&(z.$$scope={dirty:D,ctx:i}),b.$set(z),i[1]?M&&($e(),Q(M,1,1,()=>{M=null}),Ye()):M?(M.p(i,D),D&2&&X(M,1)):(M=Ie(i),M.c(),X(M,1),M.m(t,O));const J={};D&2113536&&(J.$$scope={dirty:D,ctx:i}),$.$set(J),F.ctx=i,D&16&&x!==(x=Pe(i[4]))&&Ve(x,F)||He(F,i,D),(!H||D&8)&&(U.disabled=i[3]),(!H||D&1)&&(U.value=i[0])},i(I){H||(X(b.$$.fragment,I),X(M),X($.$$.fragment,I),H=!0)},o(I){Q(b.$$.fragment,I),Q(M),Q($.$$.fragment,I),H=!1},d(I){I&&f(e),de(b),M&&M.d(),de($),F.block.d(),F.token=null,F=null,oe=!1,pe()}}}function ht(i,e,t){let l,s,a,{modReference:u}=e,{onSubmit:n}=e,{initialValues:c=void 0}=e,{submitText:p="Create"}=e,{editing:o=!1}=e;const d=Ke();Ne(i,d,h=>t(5,a=h));let _=!1;const y=et(u,d),{form:m,data:b}=We({initialValues:c,extend:[Xe,qe],validateSchema:y,onSubmit:h=>{t(3,_=!0),n(xe(h,y)).then(()=>t(3,_=!1))}});return Ne(i,b,h=>t(2,s=h)),i.$$set=h=>{"modReference"in h&&t(9,u=h.modReference),"onSubmit"in h&&t(10,n=h.onSubmit),"initialValues"in h&&t(11,c=h.initialValues),"submitText"in h&&t(0,p=h.submitText),"editing"in h&&t(1,o=h.editing)},i.$$.update=()=>{i.$$.dirty&4&&t(4,l=s.changelog||"")},[p,o,s,_,l,a,d,m,b,u,n,c]}class Et extends Ge{constructor(e){super();Ue(this,e,ht,mt,Je,{modReference:9,onSubmit:10,initialValues:11,submitText:0,editing:1})}}export{Et as V};
//# sourceMappingURL=VersionForm-b4d37417.js.map
