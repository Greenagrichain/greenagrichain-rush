(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{32488:function(e,t,n){Promise.resolve().then(n.bind(n,20533))},93760:function(e,t,n){"use strict";n.d(t,{J:function(){return s},Z:function(){return a}});var r=n(86764),i=n(51548);function a(e){let{className:t=""}=e;return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:(0,i.cn)(t),children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{className:"animate-spin origin-center",d:"M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"}),(0,r.jsx)("path",{className:"animate-spin direction-reverse origin-center",d:"M17 12a5 5 0 1 0 -5 5"})]})}function s(e){let{className:t,loaderClassName:n,variant:s="light"}=e;return(0,r.jsx)("div",{className:(0,i.cn)("absolute inset-0  z-50 flex justify-center items-center","light"===s?"bg-white/90":"bg-slate-950/90 "),children:(0,r.jsx)(a,{className:(0,i.cn)("w-20 h-20","light"===s?"text-primary":"text-primary-foreground",n)})})}n(7481)},57878:function(e,t,n){"use strict";n.d(t,{d:function(){return o},z:function(){return u}});var r=n(86764),i=n(7481),a=n(88008),s=n(33935),l=n(51548);let o=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:n,variant:i,size:s,asChild:u=!1,...c}=e,d=u?a.g7:"button";return(0,r.jsx)(d,{className:(0,l.cn)(o({variant:i,size:s,className:n})),ref:t,...c})});u.displayName="Button"},45014:function(e,t,n){"use strict";n.d(t,{I:function(){return s}});var r=n(86764),i=n(7481),a=n(51548);let s=i.forwardRef((e,t)=>{let{className:n,type:i,...s}=e;return(0,r.jsx)("input",{type:i,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...s})});s.displayName="Input"},94157:function(e,t,n){"use strict";n.d(t,{_:function(){return u}});var r=n(86764),i=n(7481),a=n(6631),s=n(33935),l=n(51548);let o=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(a.f,{ref:t,className:(0,l.cn)(o(),n),...i})});u.displayName=a.f.displayName},20533:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(86764),i=n(94157),a=n(45014),s=n(57878),l=n(99997),o=n(7481),u=n(58964);function c(){let[e,t]=(0,o.useState)(!1),{authData:{user:{firstname:n,lastname:c,email:d,number:f}},dispatch:m,authData:h}=(0,u.Z)(),[p,v]=(0,o.useState)({firstname:n,lastname:c,email:d,phone:f});function x(e){v(t=>({...t,[e.target.name]:e.target.value}))}return(0,r.jsxs)("div",{className:"px-4 space-y-6 md:px-6",children:[(0,r.jsx)("div",{className:"avatar-container space-y-1.5",children:(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)("div",{className:"avatar border-2 rounded-full p-4",children:(0,r.jsx)(l.Z,{})}),(0,r.jsxs)("div",{className:"space-y-1.5",children:[(0,r.jsxs)("h1",{className:"text-2xl font-bold",children:[n," ",c]}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:d})]})]})}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold",children:"Personal Information"}),(0,r.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,r.jsxs)("div",{className:"name-wrapper flex flex-wrap *:grow gap-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i._,{htmlFor:"name",children:"Firstname"}),(0,r.jsx)(a.I,{id:"firstname",name:"firstname",value:p.firstname,readOnly:!e,onChange:x})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i._,{htmlFor:"lastname",children:"Lastname"}),(0,r.jsx)(a.I,{id:"lastname",name:"lastname",value:p.lastname,readOnly:!e,onChange:x})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i._,{htmlFor:"email",children:"Email"}),(0,r.jsx)(a.I,{id:"email",name:"email",value:p.email,type:"email",readOnly:!e,onChange:x})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i._,{htmlFor:"phone",children:"Phone"}),(0,r.jsx)(a.I,{id:"phone",name:"phone",value:p.phone,type:"tel",readOnly:!e,onChange:x})]})]})]}),(0,r.jsx)("div",{className:"mt-8",onClick:()=>{e&&m({type:"UPDATE_USER",payload:p}),t(e=>!e)},children:(0,r.jsx)(s.z,{size:"lg",children:e?"Save":"Edit"})})]})}},66523:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthContext:function(){return s},AuthContextProvider:function(){return l},authReducer:function(){return o}});var r=n(86764),i=n(93760),a=n(7481);let s=(0,a.createContext)();function l(e){let{children:t}=e,[n,l]=(0,a.useReducer)(o,null),[u,c]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("_greenagrichain"));e&&l({type:"LOGIN",payload:e}),c(!1)},[]),(0,r.jsx)(s.Provider,{value:{authData:n,dispatch:l},children:u?(0,r.jsx)("div",{className:"absolute inset-0 bg-slate-400/40 flex justify-center items-center",children:(0,r.jsx)(i.Z,{className:"w-20 h-20 text-primary"})}):t})}function o(e,t){switch(t.type){case"LOGIN":return t.payload;case"LOGOUT":return null;case"UPDATE_USER":return{...e,user:{...e.user,...t.payload}};default:return e}}},58964:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7481),i=n(66523);function a(){let e=(0,r.useContext)(i.AuthContext);if(!e)throw Error("Unauthorized access. Check your context");return e}},51548:function(e,t,n){"use strict";n.d(t,{cn:function(){return a}});var r=n(17090),i=n(76539);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m6)((0,r.W)(t))}},59169:function(e,t,n){"use strict";n.d(t,{F:function(){return i},e:function(){return a}});var r=n(7481);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function a(...e){return r.useCallback(i(...e),e)}},6631:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(7481),i=n(13964),a=n(86764),s=r.forwardRef((e,t)=>(0,a.jsx)(i.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));s.displayName="Label";var l=s},13964:function(e,t,n){"use strict";n.d(t,{WV:function(){return l},jH:function(){return o}});var r=n(7481),i=n(8474),a=n(88008),s=n(86764),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...i}=e,l=r?a.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(l,{...i,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function o(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}},88008:function(e,t,n){"use strict";n.d(t,{A4:function(){return o},g7:function(){return s}});var r=n(7481),i=n(59169),a=n(86764),s=r.forwardRef((e,t)=>{let{children:n,...i}=e,s=r.Children.toArray(n),o=s.find(u);if(o){let e=o.props.children,n=s.map(t=>t!==o?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,a.jsx)(l,{...i,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,a.jsx)(l,{...i,ref:t,children:n})});s.displayName="Slot";var l=r.forwardRef((e,t)=>{let{children:n,...a}=e;if(r.isValidElement(n)){let e,s;let l=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{a(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...a}:"className"===r&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}(a,n.props),ref:t?(0,i.F)(t,l):l})}return r.Children.count(n)>1?r.Children.only(null):null});l.displayName="SlotClone";var o=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function u(e){return r.isValidElement(e)&&e.type===o}},24021:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7481),i={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(e,t,n,a)=>{let s=(0,r.forwardRef)((n,s)=>{let{color:l="currentColor",size:o=24,stroke:u=2,title:c,className:d,children:f,...m}=n;return(0,r.createElement)("svg",{ref:s,...i[e],width:o,height:o,className:["tabler-icon","tabler-icon-".concat(t),d].join(" "),..."filled"===e?{fill:l}:{strokeWidth:u,stroke:l},...m},[c&&(0,r.createElement)("title",{key:"svg-title"},c),...a.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(f)?f:[f]])});return s.displayName="".concat(n),s}},99997:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.12.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(24021).Z)("outline","user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]])},33935:function(e,t,n){"use strict";n.d(t,{j:function(){return a}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r},a=(e,t)=>n=>{var a;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:s,defaultVariants:l}=t,o=Object.keys(s).map(e=>{let t=null==n?void 0:n[e],i=null==l?void 0:l[e];if(null===t)return null;let a=r(t)||r(i);return s[e][a]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return i(e,o,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...u}[t]):({...l,...u})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}},function(e){e.O(0,[697,677,14,744],function(){return e(e.s=32488)}),_N_E=e.O()}]);