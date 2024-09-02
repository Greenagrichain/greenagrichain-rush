(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{74190:function(e,r,t){Promise.resolve().then(t.bind(t,88130))},93760:function(e,r,t){"use strict";t.d(r,{J:function(){return u},Z:function(){return o}});var n=t(86764),i=t(51548);function o(e){let{className:r=""}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:(0,i.cn)(r),children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{className:"animate-spin origin-center",d:"M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"}),(0,n.jsx)("path",{className:"animate-spin direction-reverse origin-center",d:"M17 12a5 5 0 1 0 -5 5"})]})}function u(e){let{className:r,loaderClassName:t,variant:u="light"}=e;return(0,n.jsx)("div",{className:(0,i.cn)("absolute inset-0  z-50 flex justify-center items-center","light"===u?"bg-white/90":"bg-slate-950/90 "),children:(0,n.jsx)(o,{className:(0,i.cn)("w-20 h-20","light"===u?"text-primary":"text-primary-foreground",t)})})}t(7481)},57878:function(e,r,t){"use strict";t.d(r,{d:function(){return s},z:function(){return l}});var n=t(86764),i=t(7481),o=t(88008),u=t(33935),a=t(51548);let s=(0,u.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=i.forwardRef((e,r)=>{let{className:t,variant:i,size:u,asChild:l=!1,...c}=e,d=l?o.g7:"button";return(0,n.jsx)(d,{className:(0,a.cn)(s({variant:i,size:u,className:t})),ref:r,...c})});l.displayName="Button"},93239:function(e,r,t){"use strict";t.d(r,{Ol:function(){return a},SZ:function(){return l},Zb:function(){return u},aY:function(){return c},eW:function(){return d},ll:function(){return s}});var n=t(86764),i=t(7481),o=t(51548);let u=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,o.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...i})});u.displayName="Card";let a=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",t),...i})});a.displayName="CardHeader";let s=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("h3",{ref:r,className:(0,o.cn)("font-semibold leading-none tracking-tight",t),...i})});s.displayName="CardTitle";let l=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("p",{ref:r,className:(0,o.cn)("text-sm text-muted-foreground",t),...i})});l.displayName="CardDescription";let c=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,o.cn)("p-6 pt-0",t),...i})});c.displayName="CardContent";let d=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,o.cn)("flex items-center p-6 pt-0",t),...i})});d.displayName="CardFooter"},88130:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(86764),i=t(7481),o=t(57878),u=t(93239),a=t(58964),s=t(57699),l=t(62761);function c(){let e=function(){let e=(0,a.Z)();return function(){localStorage.removeItem("_greenagrichain"),e.dispatch("LOGOUT")}}(),[r,t]=(0,i.useState)(!0),{authData:c}=(0,a.Z)(),d=(0,l.useRouter)();return(0,i.useEffect)(()=>{c&&t(!1)},[c]),(0,n.jsxs)(u.Zb,{className:"w-min mt-20 mx-auto",children:[(0,n.jsxs)(u.Ol,{children:[(0,n.jsx)(u.ll,{children:"Logout"}),(0,n.jsx)(u.SZ,{children:r?"You are currently logged out":"You will be logged out of your account"})]}),(0,n.jsx)(u.eW,{className:"flex gap-4",children:r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.z,{variant:"outline",asChild:!0,children:(0,n.jsx)(s.default,{href:"/login",children:"Login"})}),(0,n.jsx)(o.z,{variant:"outline",asChild:!0,children:(0,n.jsx)(s.default,{href:"/signup",children:"Signup"})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.z,{onClick:function(){e()},children:(0,n.jsx)("a",{href:"/login",children:"Logout"})}),(0,n.jsx)(o.z,{variant:"outline",onClick:()=>d.back(),children:"Take me back"})]})})]})}},57699:function(e,r,t){"use strict";t.d(r,{default:function(){return i.a}});var n=t(12031),i=t.n(n)},62761:function(e,r,t){"use strict";var n=t(84032);t.o(n,"redirect")&&t.d(r,{redirect:function(){return n.redirect}}),t.o(n,"usePathname")&&t.d(r,{usePathname:function(){return n.usePathname}}),t.o(n,"useRouter")&&t.d(r,{useRouter:function(){return n.useRouter}})},66523:function(e,r,t){"use strict";t.r(r),t.d(r,{AuthContext:function(){return u},AuthContextProvider:function(){return a},authReducer:function(){return s}});var n=t(86764),i=t(93760),o=t(7481);let u=(0,o.createContext)();function a(e){let{children:r}=e,[t,a]=(0,o.useReducer)(s,null),[l,c]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("_greenagrichain"));e&&a({type:"LOGIN",payload:e}),c(!1)},[]),(0,n.jsx)(u.Provider,{value:{authData:t,dispatch:a},children:l?(0,n.jsx)("div",{className:"absolute inset-0 bg-slate-400/40 flex justify-center items-center",children:(0,n.jsx)(i.Z,{className:"w-20 h-20 text-primary"})}):r})}function s(e,r){switch(r.type){case"LOGIN":return r.payload;case"LOGOUT":return null;case"UPDATE_USER":return{...e,user:{...e.user,...r.payload}};default:return e}}},58964:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(7481),i=t(66523);function o(){let e=(0,n.useContext)(i.AuthContext);if(!e)throw Error("Unauthorized access. Check your context");return e}},51548:function(e,r,t){"use strict";t.d(r,{cn:function(){return o}});var n=t(17090),i=t(76539);function o(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,i.m6)((0,n.W)(r))}},59169:function(e,r,t){"use strict";t.d(r,{F:function(){return i},e:function(){return o}});var n=t(7481);function i(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function o(...e){return n.useCallback(i(...e),e)}},88008:function(e,r,t){"use strict";t.d(r,{A4:function(){return s},g7:function(){return u}});var n=t(7481),i=t(59169),o=t(86764),u=n.forwardRef((e,r)=>{let{children:t,...i}=e,u=n.Children.toArray(t),s=u.find(l);if(s){let e=s.props.children,t=u.map(r=>r!==s?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,o.jsx)(a,{...i,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,o.jsx)(a,{...i,ref:r,children:t})});u.displayName="Slot";var a=n.forwardRef((e,r)=>{let{children:t,...o}=e;if(n.isValidElement(t)){let e,u;let a=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let i=e[n],o=r[n];/^on[A-Z]/.test(n)?i&&o?t[n]=(...e)=>{o(...e),i(...e)}:i&&(t[n]=i):"style"===n?t[n]={...i,...o}:"className"===n&&(t[n]=[i,o].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props),ref:r?(0,i.F)(r,a):a})}return n.Children.count(t)>1?n.Children.only(null):null});a.displayName="SlotClone";var s=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function l(e){return n.isValidElement(e)&&e.type===s}},33935:function(e,r,t){"use strict";t.d(r,{j:function(){return o}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,i="";if("string"==typeof r||"number"==typeof r)i+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(i&&(i+=" "),i+=n);else for(t in r)r[t]&&(i&&(i+=" "),i+=t)}return i}(e))&&(n&&(n+=" "),n+=r);return n},o=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return i(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:u,defaultVariants:a}=r,s=Object.keys(u).map(e=>{let r=null==t?void 0:t[e],i=null==a?void 0:a[e];if(null===r)return null;let o=n(r)||n(i);return u[e][o]}),l=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return i(e,s,null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:n,...i}=r;return Object.entries(i).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...l}[r]):({...a,...l})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}},function(e){e.O(0,[697,31,677,14,744],function(){return e(e.s=74190)}),_N_E=e.O()}]);