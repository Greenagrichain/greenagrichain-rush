(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{7598:function(e,t,r){Promise.resolve().then(r.bind(r,23084)),Promise.resolve().then(r.bind(r,66523)),Promise.resolve().then(r.t.bind(r,99369,23)),Promise.resolve().then(r.bind(r,38584)),Promise.resolve().then(r.t.bind(r,43853,23))},38584:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var n=r(86764);r(7481);var o=r(66523),s=r(12081),a=r(1630);function u(e){let{children:t}=e;return(0,n.jsx)(o.AuthContextProvider,{children:(0,n.jsx)(s.J$,{value:{fetcher:a.F},children:t})})}},93760:function(e,t,r){"use strict";r.d(t,{J:function(){return a},Z:function(){return s}});var n=r(86764),o=r(51548);function s(e){let{className:t=""}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:(0,o.cn)(t),children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{className:"animate-spin origin-center",d:"M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"}),(0,n.jsx)("path",{className:"animate-spin direction-reverse origin-center",d:"M17 12a5 5 0 1 0 -5 5"})]})}function a(e){let{className:t,loaderClassName:r,variant:a="light"}=e;return(0,n.jsx)("div",{className:(0,o.cn)("absolute inset-0  z-50 flex justify-center items-center","light"===a?"bg-white/90":"bg-slate-950/90 "),children:(0,n.jsx)(s,{className:(0,o.cn)("w-20 h-20","light"===a?"text-primary":"text-primary-foreground",r)})})}r(7481)},23084:function(e,t,r){"use strict";r.d(t,{Toaster:function(){return c}});var n=r(86764),o=r(7481),s=o.createContext(void 0),a={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=o.useContext(s))?e:a},i=r(92671);let c=e=>{let{...t}=e,{theme:r="system"}=u();return(0,n.jsx)(i.x7,{theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})}},99369:function(){},43853:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},66523:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthContext:function(){return a},AuthContextProvider:function(){return u},authReducer:function(){return i}});var n=r(86764),o=r(93760),s=r(7481);let a=(0,s.createContext)();function u(e){let{children:t}=e,[r,u]=(0,s.useReducer)(i,null),[c,l]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("_greenagrichain"));e&&u({type:"LOGIN",payload:{...e,userFound:!0}}),l(!1)},[]),(0,n.jsx)(a.Provider,{value:{authData:r,dispatch:u},children:c?(0,n.jsx)("div",{className:"absolute inset-0 bg-slate-400/40 flex justify-center items-center",children:(0,n.jsx)(o.Z,{className:"w-20 h-20 text-primary"})}):t})}function i(e,t){switch(t.type){case"LOGIN":return t.payload;case"LOGOUT":return null;case"UPDATE_USER":return{...e,user:{...e.user,...t.payload}};default:return e}}},1630:function(e,t,r){"use strict";r.d(t,{F:function(){return o}});let n=r(28024).Z.create({baseURL:"https://greenagrichain-backend.onrender.com",headers:{"Content-Type":"application/json"}}),o=e=>n.get(e).then(e=>e.data);t.Z=n},51548:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(17090),o=r(76539);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}}},function(e){e.O(0,[5971,6697,5800,8024,3677,3014,1744],function(){return e(e.s=7598)}),_N_E=e.O()}]);