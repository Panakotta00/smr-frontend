import{b0 as f}from"./vendor-ecbd8300.js";const a=(o,i)=>Object.fromEntries(Object.entries(o).map(t=>{if(Object.keys(i.shape).indexOf(t[0])>=0){let e=t[1];if(typeof e=="object"){let r=i.shape[t[0]];if(r instanceof f&&(r=r.unwrap()),Array.isArray(e)){const s=r.element;for(let n=0;n<e.length;n++)e[n]=a(e[n],s)}else e=a(e,r)}return[t[0],e]}}).filter(t=>!!t));export{a as t};
//# sourceMappingURL=forms-c1d14f68.js.map
