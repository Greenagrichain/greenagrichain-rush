(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9674],{81610:function(e,n,r){Promise.resolve().then(r.bind(r,41680))},41680:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return N}});var t=r(86764),l=r(7481),i=r(95894),s=r(45014),a=r(33651),o=r(65929),c=r(92671),u=r(12081),d=r(51548),m=r(94157),f=r(57878),h=r(57699),p=r(11180);let x={id:{label:"ID",childrenClassName:"max-w-10 truncate"},firstname:{label:"Firstname"},lastname:{label:"Lastname"},email:{label:"Email"},role:{label:"Role",render:(e,n)=>{let r=e[n];return(0,t.jsx)(i.C,{className:(0,d.cn)({"bg-green-800":"ADMIN"===r},{"bg-cyan-600":"USER"===r}),children:r})},childrenClassName:"min-w-4 last:text-center"},edit:{label:"Action",render:e=>(0,t.jsx)(f.z,{size:"icon",asChild:!0,children:(0,t.jsx)(h.default,{href:{pathname:"/admin/users/user",query:e},children:(0,t.jsx)(p.Z,{})})})}};function N(){let{data:e,isLoading:n,error:r}=(0,u.ZP)("/api/users"),[i,d]=(0,l.useState)({filterText:"",filterBy:"",sortBy:""});r&&c.Am.error("Error fetching users",{description:r});let f=function(){if(!e)return[];let{filterText:n,filterBy:r,sortBy:t}=i,l=e.filter(e=>(r&&"all"!==r?e[r]:Object.values(e).join("")).toLowerCase().includes(n.toLowerCase()));if(t&&"none"!==t){let e=t.split(" "),n="asc"===e.pop()?1:-1,r=e.join("");l.sort((e,t)=>(e[r]>t[r]?1:-1)*n)}return l}();return(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("div",{className:"stats p-2 border rounded-lg",children:(0,t.jsxs)("p",{children:["Total Users: ",(0,t.jsx)("span",{className:"font-bold",children:null==e?void 0:e.length})]})}),(0,t.jsxs)("div",{className:"filter flex flex-wrap gap-4 *:w-min my-2 p-2 border rounded-lg",children:[(0,t.jsx)(s.I,{value:i.filterText,onChange:e=>d(n=>({...n,filterText:e.target.value})),placeholder:"Search..."}),(0,t.jsxs)("div",{className:"form-group flex gap-2 items-center",children:[(0,t.jsxs)(m._,{htmlFor:"filterBy",className:"text-nowrap",children:["Filter By:"," "]}),(0,t.jsxs)(a.Ph,{value:i.filterBy,id:"filterBy",placeholder:"Filter By",onValueChange:e=>d(n=>({...n,filterBy:e})),children:[(0,t.jsx)(a.i4,{className:"",children:(0,t.jsx)(a.ki,{placeholder:"Filter By"})}),(0,t.jsx)(a.Bw,{children:(0,t.jsxs)(a.DI,{children:[(0,t.jsx)(a.n5,{children:"Filter By"}),(0,t.jsx)(a.Ql,{value:"all",children:"All"}),Object.keys(x).map((e,n)=>(0,t.jsx)(a.Ql,{value:e,children:x[e].label},e+n))]})})]})]}),(0,t.jsxs)("div",{className:"form-group flex gap-2 items-center",children:[(0,t.jsxs)(m._,{htmlFor:"filterBy",className:"text-nowrap",children:["Sort By:"," "]}),(0,t.jsxs)(a.Ph,{value:i.sortBy,placeholder:"Sort By",onValueChange:e=>d(n=>({...n,sortBy:e})),children:[(0,t.jsx)(a.i4,{className:"",children:(0,t.jsx)(a.ki,{placeholder:"Sort By"})}),(0,t.jsx)(a.Bw,{children:(0,t.jsxs)(a.DI,{children:[(0,t.jsx)(a.n5,{children:"Sort By"}),(0,t.jsx)(a.Ql,{value:"none",children:"None"}),Object.keys(x).map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsxs)(a.Ql,{value:"".concat(e," asc"),children:[x[e].label," (ASC)"]}),(0,t.jsxs)(a.Ql,{value:"".concat(e," dsc"),children:[x[e].label," (DSC)"]})]},e+n))]})})]})]})]}),(0,t.jsx)(o.Z,{title:"Users",isLoading:n,data:f,settings:x})]})}},74126:function(e,n,r){"use strict";r.d(n,{z:function(){return a}});var t=r(7481),l=r(8474),i=r(59169),s=r(23324),a=e=>{var n,r;let a,c;let{present:u,children:d}=e,m=function(e){var n,r;let[i,a]=t.useState(),c=t.useRef({}),u=t.useRef(e),d=t.useRef("none"),[m,f]=(n=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},t.useReducer((e,n)=>{let t=r[e][n];return null!=t?t:e},n));return t.useEffect(()=>{let e=o(c.current);d.current="mounted"===m?e:"none"},[m]),(0,s.b)(()=>{let n=c.current,r=u.current;if(r!==e){let t=d.current,l=o(n);e?f("MOUNT"):"none"===l||(null==n?void 0:n.display)==="none"?f("UNMOUNT"):r&&t!==l?f("ANIMATION_OUT"):f("UNMOUNT"),u.current=e}},[e,f]),(0,s.b)(()=>{if(i){let e=e=>{let n=o(c.current).includes(e.animationName);e.target===i&&n&&l.flushSync(()=>f("ANIMATION_END"))},n=e=>{e.target===i&&(d.current=o(c.current))};return i.addEventListener("animationstart",n),i.addEventListener("animationcancel",e),i.addEventListener("animationend",e),()=>{i.removeEventListener("animationstart",n),i.removeEventListener("animationcancel",e),i.removeEventListener("animationend",e)}}f("ANIMATION_END")},[i,f]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:t.useCallback(e=>{e&&(c.current=getComputedStyle(e)),a(e)},[])}}(u),f="function"==typeof d?d({present:m.isPresent}):t.Children.only(d),h=(0,i.e)(m.ref,(a=null===(n=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in a&&a.isReactWarning?f.ref:(a=null===(r=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in a&&a.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof d||m.isPresent?t.cloneElement(f,{ref:h}):null};function o(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},84125:function(e,n,r){"use strict";r.d(n,{f:function(){return c}});var t=r(7481),l=r(13964),i=r(86764),s="horizontal",a=["horizontal","vertical"],o=t.forwardRef((e,n)=>{let{decorative:r,orientation:t=s,...o}=e,c=a.includes(t)?t:s;return(0,i.jsx)(l.WV.div,{"data-orientation":c,...r?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},...o,ref:n})});o.displayName="Separator";var c=o}},function(e){e.O(0,[792,6697,2031,5391,2817,2671,2081,878,364,7974,3677,3014,1744],function(){return e(e.s=81610)}),_N_E=e.O()}]);