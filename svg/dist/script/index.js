/* Graphery SVG library - 0.1.2 */ (()=>{let O="gySVGObject",A="http://www.w3.org/2000/svg",y="object",N="function",V="string",T="number",E="undefined",S="",p=new WeakMap,G=new Set;class _{constructor(t){this._el=t}get[Symbol.toStringTag](){return O}get el(){return this._el}add(t){let r=c(t,V)?x(t):m(t)?t:f(t);return this._el.appendChild(r._el),r}attachTo(t){let r=c(t,y)?m(t)?t._el:t:document.querySelector(t);return r.appendChild(this._el),this}id(t){return t?(this._el.setAttribute("id",t),this):this._el.id||(this._el.id=M())}ref(){return`#${this.id()}`}url(){return`url(#${this.id()})`}animateTo(t,r=200){let a=0;let i={},e={},g={},o=Object.keys(t);for(let n=0;n<o.length;n++){let s=o[n],d=w(this[s]()),b=w(t[s]);if(b.measure&&d.measure!==b.measure||!c(b.value,T)||!c(d.value,T)){o.splice(n--,1),this[s](t[s]);continue}e[s]=d.value,i[s]=b.value,g[s]=d.measure}let u=n=>{a||(a=n);let s=n-a,d=Math.min(s/r,1)||.01;for(let b of o)this[b](`${(e[b]+(t[b]-e[b])*d).toFixed(2)}${g[b]||S}`);s<r&&requestAnimationFrame(u)};return u(a),this}}let c=(t,r)=>typeof t===r,j=(t,r)=>t instanceof r,M=()=>O+Math.random().toString(32).substring(2),m=t=>typeof t===y&&t[Symbol.toStringTag]===O,x=t=>f(document.createElementNS(A,t)),w=t=>{if(c(t,V)){let r=t.match(/^(^-?\d+(?:\.\d+)?)(.*)$/);return r===null?{origin:t,value:t}:{origin:t,value:Number(r[1]),measure:r[2]||S}}return{origin:t,value:t}},C=t=>({content:"innerHTML",source:"outerHTML",parent:"parentElement",next:"nextElementSibling",previous:"previousElementSibling"})[t]||t,f=t=>{if(!c(t,y)||t===null)return null;if(p.has(t))return p.get(t);let r=new Proxy(new _(t),{get(a,i){if(["_call","_el","el",Symbol.toStringTag].includes(i))return a[i];if(!c(a[i],E))return(...e)=>l(r,i,e)||a[i].call(r,...e);if(i==="d"&&t.tagName.toLowerCase()==="path"){let e=S;let g=new Proxy(o=>l(r,i,[o])||o?t.setAttribute("d",o)||r:t.getAttribute("d"),{get(o,u){return(...n)=>(e+=`${u}${l(r,i,n)||n.join(",")}`,t.setAttribute(i,e),g)}});return g}return i=C(i),c(t[i],N)?(...e)=>{let g=l(r,i,e)||t[i].call(t,...e);return g===void 0?r:P(g)}:$(t,i,r)}});return p.set(t,r),r},$=(t,r,a,i)=>{let e=r.replace(/_/g,"-"),g=(...o)=>{let u=l(a,i?`${i}.${r}`:r,o);if(u!==void 0)return u;if(o.length===0){let s=e in t&&(!t.hasAttribute||!t.hasAttribute(e))?t[e]:t.getAttribute(e);return P(s)}let n=o[0];if(j(t,CSSStyleDeclaration))return t[e]=n,a;if(e in t&&!G.has(e)){if(t[e]===n)return a;let s=t[e];try{t[e]=n}catch(d){G.add(e)}if(c(t[e],y)&&t[e]===n||t[e]!==s)return a;G.add(e)}return n!==0&&!n?t.removeAttribute(e):t.setAttribute(e,String(o)),a};return new Proxy(g,{get(o,u){let n=t[e][u];return c(n,N)?(...s)=>{let d=l(a,`${r}.${u}`,s)||n.call(t[e],...s);return d===void 0?a:d}:$(t[e],u,a,e)},set(o,u,n){return t[e][u]=n}})},P=t=>j(t,HTMLCollection)||j(t,NodeList)?[...t].map(r=>f(r)):j(t,SVGElement)?f(t):c(t,V)?Number.isNaN(Number(t))?t:Number(t):t,l=(t,r,a)=>{if(t._call)return t._call(t,r,a)};function h(t){return l(h,S,[t]),c(t,y)?m(t)?t:f(t):x(t||"svg")}var v=h;h.isWrapped=m;h.extend=t=>t(h,_);(typeof gobalThis!="undefined"?globalThis:window).gySVG=v;})();