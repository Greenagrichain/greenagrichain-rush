(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7663],{90840:function(e,r,n){Promise.resolve().then(n.bind(n,80773))},80773:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var s=n(86764),t=n(7481),a=n(6557),i=n(98147),l=n(58964),c=n(32584),u=n(52445),o=n(62761),d=n(12081),f=n(92671);function h(e){let{children:r}=e,{authData:n,dispatch:h}=(0,l.Z)();(null==n?void 0:n.user)||(0,o.redirect)("/login");let{data:m,isLoading:g,error:p}=(0,d.ZP)("/api/users/".concat(n.user.id));return p&&f.Am.error("Error fetching updated information",{description:p.message+". refresh the page to try again.",id:"userError"}),(0,t.useEffect)(()=>{m&&(localStorage.setItem("_greenagrichain",JSON.stringify({...n,user:m})),h({type:"UPDATE_USER",payload:m}))},[m]),(0,s.jsxs)("div",{className:"dashboard relative flex min-h-screen w-full bg-muted/40",children:[(0,s.jsx)(a.Z,{className:"max-w-[250px] min-w-[250px]",navlinks:c.Z}),(0,s.jsxs)("main",{className:"grow flex flex-col relative bg-neutral-50",children:[(0,s.jsx)(i.Z,{}),r,(0,s.jsx)(u.Z,{})]})]})}}},function(e){e.O(0,[792,6697,2031,3651,2817,2671,2081,650,1148,653,2090,3677,3014,1744],function(){return e(e.s=90840)}),_N_E=e.O()}]);