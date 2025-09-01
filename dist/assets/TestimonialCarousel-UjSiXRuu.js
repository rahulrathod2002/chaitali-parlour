import{c as ce,j as a,a as i,R as ue,u as le,m as de,T as _,B as M}from"./index-DBGs1ZdR.js";import{C as fe}from"./Card-qqtUn9GN.js";import{A as pe,R as ve}from"./Rating-DrAnHAvX.js";import"./useControlled-BmtsWBO8.js";import"./visuallyHidden-Dan1xhjv.js";const he=ce(a.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}));var me=Object.defineProperty,ge=Object.defineProperties,we=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,X=(e,n,t)=>n in e?me(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,L=(e,n)=>{for(var t in n||(n={}))be.call(n,t)&&X(e,t,n[t]);if(F)for(var t of F(n))xe.call(n,t)&&X(e,t,n[t]);return e},ye=(e,n)=>ge(e,we(n)),K=ue.createContext({}),ke=K.Provider,Q=()=>i.useContext(K);function je(e,n,t=!0){const r=i.useRef();i.useEffect(()=>{r.current=e},[e]),i.useEffect(()=>{if(t&&n!==null){const o=setInterval(()=>{r.current&&r.current()},n);return()=>clearInterval(o)}},[n,t])}function Ce({totalPages:e,wrapMode:n,initialPage:t}){const[r,o]=i.useState(0);return i.useEffect(()=>{t&&o(Math.max(0,Math.min(t,e)))},[t,e]),{currentPage:r,goToPage:c=>{c<0||c>=e||o(c)},goForward:()=>{o(n==="wrap"?c=>(c+1)%e:c=>Math.min(c+1,e-1))},goBack:()=>{o(n==="wrap"?c=>(c-1+e)%e:c=>Math.max(c-1,0))}}}function O(e,n){return new Array(e).fill(0).map((t,r)=>r*n)}function Se(e){let n=0;return e.map(t=>n+=t)}var V=()=>typeof window<"u";function E(...e){return e.filter(Boolean).join(" ")}function Y(e){return"clientY"in e}function Ee(e){const[n,t]=i.useState();return i.useEffect(()=>{if(!e.current)return;const r=e.current,o=new ResizeObserver(()=>t(r.getBoundingClientRect()));return o.observe(r),()=>{o.unobserve(r)}},[e]),n}function Re({element:e,scrollDistance:n}){const[t,r]=i.useState(0),[o,s]=i.useState(O(t,0)),u=Ee(e);return i.useEffect(()=>{var f;const c=e.current;if(!(c&&u))return;const v=c.scrollWidth,h=c.offsetWidth,k=v-h;if(h!==0)switch(n){case"screen":{const d=Math.round(v/h);r(d),s(O(d,h));break}case"slide":{const d=((f=c.querySelector("#nuka-wrapper"))==null?void 0:f.children)||[],j=Array.from(d).map(b=>b.offsetWidth),C=Se([0,...j.slice(0,-1)]),w=C.findIndex(b=>b>=k)+1;r(w),s(C);break}default:if(typeof n=="number"&&n>0){const d=Math.ceil(k/n)+1;r(d),s(O(d,n))}}},[e,n,u]),{totalPages:t,scrollOffset:o}}function q({element:e,enabled:n}){const[t,r]=i.useState(!1),o=e?.current;return i.useEffect(()=>{if(o&&o.addEventListener&&n){const s=()=>r(!0),u=()=>r(!1);return o.addEventListener("mouseover",s),o.addEventListener("mouseout",u),()=>{o.removeEventListener("mouseover",s),o.removeEventListener("mouseout",u)}}},[o,n]),t}function Ne({element:e,enabled:n,goForward:t,goBack:r}){const o=e?.current;i.useEffect(()=>{if(o&&n){const s=u=>{u.key==="ArrowLeft"?r():u.key==="ArrowRight"&&t()};return o.addEventListener("keydown",s),()=>o.removeEventListener("keydown",s)}},[n,r,t,o])}var Z="(prefers-reduced-motion: no-preference)",Pe=()=>V()?!window.matchMedia(Z).matches:!0;function _e({enabled:e}){const[n,t]=i.useState(Pe);return i.useEffect(()=>{if(!(V()&&e))return;const r=window.matchMedia(Z),o=s=>{t(!s.matches)};return r.addEventListener("change",o),()=>{r.removeEventListener("change",o)}},[e]),n}function Me(){const{currentPage:e,totalPages:n,wrapMode:t,goBack:r,goForward:o}=Q(),s=t!=="nowrap",u=s||e>0,f=s||e<n-1,c=E("nuka-nav-button","nuka-nav-button-prev",u&&"nuka-nav-button-enabled"),v=E("nuka-nav-button","nuka-nav-button-next",f&&"nuka-nav-button-enabled");return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:c,onClick:r,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentcolor",children:a.jsx("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})})}),a.jsx("div",{className:v,onClick:o,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentcolor",children:a.jsx("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}var Le=()=>{const{totalPages:e,currentPage:n,goToPage:t}=Q(),r=o=>E("nuka-page-indicator",n===o?"nuka-page-indicator-active":"");return a.jsx("div",{className:"nuka-page-container","data-testid":"pageIndicatorContainer",children:[...Array(e)].map((o,s)=>a.jsx("button",{onClick:()=>t(s),className:r(s),children:a.jsx("span",{className:"nuka-hidden",children:s+1})},s))})};function Oe(e,{insertAt:n}={}){if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}Oe(`.nuka-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.nuka-container {
  position: relative;
}
.nuka-slide-container {
  position: relative;
}
.nuka-overflow {
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.nuka-overflow.scroll-smooth {
  scroll-behavior: smooth;
}
.nuka-overflow.scroll-auto {
  scroll-behavior: auto;
}
.nuka-overflow::-webkit-scrollbar {
  display: none;
}
.nuka-wrapper {
  display: flex;
}
.nuka-nav-button {
  position: absolute;
  top: calc(50% - 2rem);
  margin: 1rem;
  display: none;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  background-color: rgba(146, 148, 151, 0.5);
  color: white;
  border-radius: 9999px;
  font-size: 1rem;
  user-select: none;
}
.nuka-nav-button.nuka-nav-button-prev {
  left: 0;
  margin-right: 1rem;
}
.nuka-nav-button.nuka-nav-button-next {
  right: 0;
  margin-left: 1rem;
}
.nuka-nav-button:hover {
  background-color: rgba(146, 148, 151, 0.65);
}
.nuka-nav-button-enabled {
  display: block;
}
.nuka-container-auto-hide .nuka-nav-button {
  display: none;
}
.nuka-container-auto-hide:hover .nuka-nav-button-enabled {
  display: block;
}
.nuka-page-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
.nuka-page-indicator {
  width: 0.75rem;
  height: 0.75rem;
  cursor: pointer;
  border-radius: 9999px;
  border-style: none;
  background-color: rgba(146, 148, 151, 0.65);
}
.nuka-page-indicator.nuka-page-indicator-active,
.nuka-page-indicator.nuka-page-indicator-active:hover {
  background-color: rgb(229 231 235 / 1);
}
.nuka-page-indicator:hover {
  background-color: rgb(229 231 235 / 1);
}
`);var Te={arrows:a.jsx(Me,{}),autoplay:!1,autoplayInterval:3e3,dots:a.jsx(Le,{}),id:"nuka-carousel",keyboard:!0,minSwipeDistance:50,scrollDistance:"screen",showArrows:!1,showDots:!1,swiping:!0,wrapMode:"nowrap"},G=i.forwardRef((e,n)=>{const t=L(L({},Te),e),{afterSlide:r,arrows:o,autoplay:s,autoplayInterval:u,beforeSlide:f,children:c,className:v,dots:h,id:k,keyboard:d,minSwipeDistance:j,scrollDistance:C,showArrows:w,showDots:b,swiping:R,title:T,wrapMode:U,initialPage:S}=t,I=i.useRef(null),p=i.useRef(null),B=i.useRef(-1),A=i.useRef(null),{totalPages:H,scrollOffset:N}=Re({element:p,scrollDistance:C}),{currentPage:m,goBack:x,goForward:g,goToPage:P}=Ce({totalPages:H,wrapMode:U,initialPage:S}),[W,$]=i.useState(null),[D,z]=i.useState(null),J=l=>{R&&(z(null),$(Y(l)?l.clientX:l.targetTouches[0].clientX))},ee=l=>{R&&z(Y(l)?l.clientX:l.targetTouches[0].clientX)},ne=()=>{if(!R||!p.current||!W||!D)return;const l=W-D,y=l>j,ie=l<-j;(y||ie)&&(y?g():x())};Ne({element:I,enabled:d,goForward:g,goBack:x}),i.useImperativeHandle(n,()=>({goForward:g,goBack:x,goToPage:P}),[g,x,P]);const te=q({element:p,enabled:s}),re=q({element:A,enabled:s&&w===!0}),oe=_e({enabled:s});je(g,u,s&&!(te||oe||re)),i.useEffect(()=>{if(p.current){const l=B.current,y=m;f&&f(l,y),p.current.scrollLeft=N[m],r&&setTimeout(()=>r(y),0),B.current=m,(S===void 0||m===S)&&(p.current.classList.remove("scroll-auto"),p.current.classList.add("scroll-smooth"))}},[m,N,f,r,S]);const ae=E("nuka-container",w==="hover"&&"nuka-container-auto-hide",v),se=ye(L({},t),{totalPages:H,currentPage:m,scrollOffset:N,goBack:x,goForward:g,goToPage:P});return a.jsxs(ke,{value:se,children:[a.jsxs("div",{className:ae,"aria-labelledby":"nuka-carousel-heading",tabIndex:d?0:void 0,ref:I,id:k,children:[T&&a.jsx("h3",{id:"nuka-carousel-heading",className:"nuka-hidden",children:T}),a.jsxs("div",{className:"nuka-slide-container",children:[a.jsx("div",{className:"nuka-overflow",ref:p,onTouchEnd:ne,onTouchMove:ee,onTouchStart:J,id:"nuka-overflow","data-testid":"nuka-overflow",style:{touchAction:"pan-y"},children:a.jsx("div",{className:"nuka-wrapper",id:"nuka-wrapper","data-testid":"nuka-wrapper",children:c})}),w&&a.jsx("div",{ref:A,children:o})]})]}),b&&h]})});G.displayName="Carousel";const ze=({testimonials:e})=>{const n=le();return a.jsx(G,{slidesToShow:1,wrapAround:!0,renderCenterLeftControls:({previousSlide:t})=>null,renderCenterRightControls:({nextSlide:t})=>null,renderBottomCenterControls:({slideCount:t,currentSlide:r,goToSlide:o})=>a.jsx(M,{sx:{display:"flex",justifyContent:"center",mt:3,gap:1},children:Array.from({length:t}).map((s,u)=>a.jsx(M,{onClick:()=>o(u),sx:{width:12,height:12,borderRadius:"50%",backgroundColor:r===u?n.palette.primary.main:n.palette.text.disabled,cursor:"pointer",transition:"0.3s all"}},u))}),children:e.map((t,r)=>a.jsx(de.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:r*.1},children:a.jsxs(fe,{sx:{p:{xs:3,sm:5},borderRadius:4,minHeight:280,display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"rgba(255, 255, 255, 0.95)",boxShadow:n.shadows[6],transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"translateY(-8px) scale(1.02)",boxShadow:n.shadows[10]},textAlign:"center"},children:[a.jsx(pe,{src:t.avatar,alt:t.name,sx:{width:{xs:60,sm:90},height:{xs:60,sm:90},mx:"auto",mb:2,border:`3px solid ${n.palette.primary.main}`}}),a.jsx(ve,{name:"read-only",value:t.rating,readOnly:!0,sx:{mb:2},emptyIcon:a.jsx(he,{style:{opacity:.4},fontSize:"inherit"})}),a.jsxs(_,{variant:"body1",sx:{fontStyle:"italic",mb:3,color:n.palette.text.primary,lineHeight:1.6,px:{xs:1,sm:4}},children:['"',t.review,'"']}),a.jsxs(M,{children:[a.jsxs(_,{variant:"h6",color:n.palette.primary.main,sx:{fontFamily:"Cormorant Garamond",fontWeight:600,letterSpacing:.5},children:["- ",t.name]}),t.designation&&a.jsx(_,{variant:"body2",color:"text.secondary",children:t.designation})]})]})},r))})};export{ze as default};
