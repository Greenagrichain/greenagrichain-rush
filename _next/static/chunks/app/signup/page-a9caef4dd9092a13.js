(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{20028:function(e,r,n){Promise.resolve().then(n.bind(n,23633))},78760:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(86764),s=n(81176),a=n(51548);function i(e){let{msg:r,type:n}=e;if(!r)return null;let i={error:{style:"bg-red-500 border-red-600 text-red-50",icon:(0,t.jsx)(s.LPM,{})},success:{style:"bg-green-500 border-green-600 text-green-50",icon:(0,t.jsx)(s.NhS,{})}};return(0,t.jsx)("div",{className:(0,a.cn)("relative p-2 rounded-lg text-sm border",i[n].style),children:(0,t.jsxs)("p",{className:"flex gap-2 items-center",children:[i[n].icon," ",r]})})}},57878:function(e,r,n){"use strict";n.d(r,{d:function(){return l},z:function(){return d}});var t=n(86764),s=n(7481),a=n(88008),i=n(33935),o=n(51548);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:n,variant:s,size:i,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,t.jsx)(u,{className:(0,o.cn)(l({variant:s,size:i,className:n})),ref:r,...c})});d.displayName="Button"},93239:function(e,r,n){"use strict";n.d(r,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var t=n(86764),s=n(7481),a=n(51548);let i=s.forwardRef((e,r)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,a.cn)("rounded-xl border bg-card text-card-foreground shadow",n),...s})});i.displayName="Card";let o=s.forwardRef((e,r)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",n),...s})});o.displayName="CardHeader";let l=s.forwardRef((e,r)=>{let{className:n,...s}=e;return(0,t.jsx)("h3",{ref:r,className:(0,a.cn)("font-semibold leading-none tracking-tight",n),...s})});l.displayName="CardTitle";let d=s.forwardRef((e,r)=>{let{className:n,...s}=e;return(0,t.jsx)("p",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",n),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,r)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",n),...s})});c.displayName="CardContent";let u=s.forwardRef((e,r)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",n),...s})});u.displayName="CardFooter"},45014:function(e,r,n){"use strict";n.d(r,{I:function(){return i}});var t=n(86764),s=n(7481),a=n(51548);let i=s.forwardRef((e,r)=>{let{className:n,type:s,...i}=e;return(0,t.jsx)("input",{type:s,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n),ref:r,...i})});i.displayName="Input"},28428:function(e,r,n){"use strict";n.d(r,{_:function(){return c}});var t=n(86764),s=n(7481),a=n(13964),i=s.forwardRef((e,r)=>(0,t.jsx)(a.WV.label,{...e,ref:r,onMouseDown:r=>{var n;r.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));i.displayName="Label";var o=n(33935),l=n(51548);let d=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,r)=>{let{className:n,...s}=e;return(0,t.jsx)(i,{ref:r,className:(0,l.cn)(d(),n),...s})});c.displayName=i.displayName},23633:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f}});var t=n(86764),s=n(57699),a=n(57878),i=n(93239),o=n(45014),l=n(28428),d=n(78760);function c(e){let{formData:r,setFormData:n,handleFormSubmit:c,error:u,success:f,waiting:m}=e;function p(e){n(r=>({...r,[e.target.name]:e.target.value}))}return(0,t.jsxs)("div",{className:"w-screen h-screen flex justify-center items-center relative",children:[(0,t.jsx)("img",{className:"absolute top-0 left-0 w-screen h-screen -z-10 ",src:"/login-bg.jpg",alt:"Background Image"}),(0,t.jsx)("div",{className:"bg-overlay absolute top-0 left-0 w-screen -z-10 h-screen bg-neutral-900/60"}),(0,t.jsxs)(i.Zb,{className:"mx-auto max-w-md",children:[(0,t.jsxs)(i.Ol,{children:[(0,t.jsx)(i.ll,{className:"text-xl",children:(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold",children:"Sign Up"}),(0,t.jsx)("img",{className:"",src:"/greenagrichain-logo.png",alt:"Logo",width:72,height:72})]})}),(0,t.jsx)(i.SZ,{children:"Enter your information to create an account"})]}),(0,t.jsxs)(i.aY,{children:[(0,t.jsx)("form",{onSubmit:c,action:"post",children:(0,t.jsxs)("div",{className:"grid gap-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(l._,{htmlFor:"first-name",children:"First name"}),(0,t.jsx)(o.I,{id:"first-name",placeholder:"Max",name:"firstName",value:r.firstName,onChange:p,required:!0})]}),(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(l._,{htmlFor:"last-name",children:"Last name"}),(0,t.jsx)(o.I,{id:"last-name",placeholder:"Robinson",name:"lastName",value:r.lastName,onChange:p,required:!0})]})]}),(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(l._,{htmlFor:"email",children:"Email"}),(0,t.jsx)(o.I,{id:"email",type:"email",placeholder:"m@example.com",name:"email",value:r.email,onChange:p,required:!0})]}),(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(l._,{htmlFor:"email",children:"Phone"}),(0,t.jsx)(o.I,{id:"phone",type:"phone",placeholder:"+1234567899",name:"phone",value:r.phone,onChange:p,required:!0})]}),(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(l._,{htmlFor:"password",children:"Password"}),(0,t.jsx)(o.I,{id:"password",type:"password",name:"password",value:r.password,onChange:p})]}),(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(l._,{htmlFor:"confirm_password",children:"Confirm Password"}),(0,t.jsx)(o.I,{id:"confirm_password",type:"password",name:"confirmPassword",value:r.confirmPassword,onChange:p})]}),(0,t.jsx)(d.Z,{msg:f||u,type:f?"success":"error"}),m?(0,t.jsxs)(a.z,{disabled:!0,children:[(0,t.jsx)("span",{className:"p-1 m-1 rounded-full border-4 border-s-transparent animate-spin "}),"Creating your account..."]}):(0,t.jsx)(a.z,{type:"submit",className:"w-full",children:"Create an account"})]})}),(0,t.jsxs)("div",{className:"mt-4 text-center text-sm",children:["Already have an account?"," ",(0,t.jsx)(s.default,{href:"/login",className:"underline",children:"Sign in"})]})]})]})]})}var u=n(7481);function f(){let[e,r]=(0,u.useState)({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[n,s]=(0,u.useState)(!1),[a,i]=(0,u.useState)(""),[o,l]=(0,u.useState)("");async function d(r){if(r.preventDefault(),e.password.length<6)return f("Password must be longer than 6 characters");if(e.password!==e.confirmPassword)return f("Password does not match");try{var n;let r=await fetch("https://greenagrichain-backend.onrender.com/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:e.firstName,lastname:e.lastName,number:e.phone,email:e.email,password:e.password,confirmPassword:e.confirmPassword})}),t=await r.json();if(!r.ok)throw Error(t.message||"A server error occured");n="Check your email for verification link",l(n),setTimeout(()=>l(""),5e3)}catch(e){f(e.message||"An unkown error occurred")}}function f(e){i(e),setTimeout(()=>i(""),5e3)}return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c,{formData:e,setFormData:r,handleFormSubmit:e=>{s(!0),d(e),s(!1)},error:a,success:o,waiting:n})})}},57699:function(e,r,n){"use strict";n.d(r,{default:function(){return s.a}});var t=n(12031),s=n.n(t)},51548:function(e,r,n){"use strict";n.d(r,{cn:function(){return a}});var t=n(17090),s=n(76539);function a(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,s.m6)((0,t.W)(r))}},13964:function(e,r,n){"use strict";n.d(r,{WV:function(){return o},jH:function(){return l}});var t=n(7481),s=n(8474),a=n(88008),i=n(86764),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=t.forwardRef((e,n)=>{let{asChild:t,...s}=e,o=t?a.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...s,ref:n})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{});function l(e,r){e&&s.flushSync(()=>e.dispatchEvent(r))}},33935:function(e,r,n){"use strict";n.d(r,{j:function(){return a}});let t=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e,r,n=0,t="";n<arguments.length;)(e=arguments[n++])&&(r=function e(r){var n,t,s="";if("string"==typeof r||"number"==typeof r)s+=r;else if("object"==typeof r){if(Array.isArray(r))for(n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(s&&(s+=" "),s+=t);else for(n in r)r[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(t&&(t+=" "),t+=r);return t},a=(e,r)=>n=>{var a;if((null==r?void 0:r.variants)==null)return s(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:o}=r,l=Object.keys(i).map(e=>{let r=null==n?void 0:n[e],s=null==o?void 0:o[e];if(null===r)return null;let a=t(r)||t(s);return i[e][a]}),d=n&&Object.entries(n).reduce((e,r)=>{let[n,t]=r;return void 0===t||(e[n]=t),e},{});return s(e,l,null==r?void 0:null===(a=r.compoundVariants)||void 0===a?void 0:a.reduce((e,r)=>{let{class:n,className:t,...s}=r;return Object.entries(s).every(e=>{let[r,n]=e;return Array.isArray(n)?n.includes({...o,...d}[r]):({...o,...d})[r]===n})?[...e,n,t]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}},function(e){e.O(0,[792,595,31,677,14,744],function(){return e(e.s=20028)}),_N_E=e.O()}]);