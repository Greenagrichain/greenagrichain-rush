"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{74126:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(7481),o=n(8474),i=n(59169),l=n(23324),a=e=>{var t,n;let a,s;let{present:c,children:d}=e,p=function(e){var t,n;let[i,a]=r.useState(),s=r.useRef({}),c=r.useRef(e),d=r.useRef("none"),[p,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=u(s.current);d.current="mounted"===p?e:"none"},[p]),(0,l.b)(()=>{let t=s.current,n=c.current;if(n!==e){let r=d.current,o=u(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),c.current=e}},[e,f]),(0,l.b)(()=>{if(i){let e=e=>{let t=u(s.current).includes(e.animationName);e.target===i&&t&&o.flushSync(()=>f("ANIMATION_END"))},t=e=>{e.target===i&&(d.current=u(s.current))};return i.addEventListener("animationstart",t),i.addEventListener("animationcancel",e),i.addEventListener("animationend",e),()=>{i.removeEventListener("animationstart",t),i.removeEventListener("animationcancel",e),i.removeEventListener("animationend",e)}}f("ANIMATION_END")},[i,f]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:r.useCallback(e=>{e&&(s.current=getComputedStyle(e)),a(e)},[])}}(c),f="function"==typeof d?d({present:p.isPresent}):r.Children.only(d),v=(0,i.e)(p.ref,(a=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in a&&a.isReactWarning?f.ref:(a=null===(n=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in a&&a.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof d||p.isPresent?r.cloneElement(f,{ref:v}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},74417:function(e,t,n){n.d(t,{VY:function(){return z},aJ:function(){return k},fC:function(){return B},xz:function(){return V},zt:function(){return W}});var r=n(7481),o=n(5304),i=n(59169),l=n(43474),a=n(9914),u=n(61055),s=n(62200),c=(n(45330),n(74126)),d=n(13964),p=n(88008),f=n(92609),v=n(24389),g=n(86764),[h,m]=(0,l.b)("Tooltip",[s.D7]),x=(0,s.D7)(),y="TooltipProvider",b="tooltip.open",[w,T]=h(y),E=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:l}=e,[a,u]=r.useState(!0),s=r.useRef(!1),c=r.useRef(0);return r.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,g.jsx)(w,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:r.useCallback(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),o)},[o]),isPointerInTransitRef:s,onPointerInTransitChange:r.useCallback(e=>{s.current=e},[]),disableHoverableContent:i,children:l})};E.displayName=y;var C="Tooltip",[N,M]=h(C),O=e=>{let{__scopeTooltip:t,children:n,open:o,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:c}=e,d=T(C,e.__scopeTooltip),p=x(t),[v,h]=r.useState(null),m=(0,u.M)(),y=r.useRef(0),w=null!=a?a:d.disableHoverableContent,E=null!=c?c:d.delayDuration,M=r.useRef(!1),[O=!1,R]=(0,f.T)({prop:o,defaultProp:i,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(b))):d.onClose(),null==l||l(e)}}),k=r.useMemo(()=>O?M.current?"delayed-open":"instant-open":"closed",[O]),L=r.useCallback(()=>{window.clearTimeout(y.current),M.current=!1,R(!0)},[R]),_=r.useCallback(()=>{window.clearTimeout(y.current),R(!1)},[R]),j=r.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{M.current=!0,R(!0)},E)},[E,R]);return r.useEffect(()=>()=>window.clearTimeout(y.current),[]),(0,g.jsx)(s.fC,{...p,children:(0,g.jsx)(N,{scope:t,contentId:m,open:O,stateAttribute:k,trigger:v,onTriggerChange:h,onTriggerEnter:r.useCallback(()=>{d.isOpenDelayed?j():L()},[d.isOpenDelayed,j,L]),onTriggerLeave:r.useCallback(()=>{w?_():window.clearTimeout(y.current)},[_,w]),onOpen:L,onClose:_,disableHoverableContent:w,children:n})})};O.displayName=C;var R="TooltipTrigger",k=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...l}=e,a=M(R,n),u=T(R,n),c=x(n),p=r.useRef(null),f=(0,i.e)(t,p,a.onTriggerChange),v=r.useRef(!1),h=r.useRef(!1),m=r.useCallback(()=>v.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),(0,g.jsx)(s.ee,{asChild:!0,...c,children:(0,g.jsx)(d.WV.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...l,ref:f,onPointerMove:(0,o.M)(e.onPointerMove,e=>{"touch"===e.pointerType||h.current||u.isPointerInTransitRef.current||(a.onTriggerEnter(),h.current=!0)}),onPointerLeave:(0,o.M)(e.onPointerLeave,()=>{a.onTriggerLeave(),h.current=!1}),onPointerDown:(0,o.M)(e.onPointerDown,()=>{v.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:(0,o.M)(e.onFocus,()=>{v.current||a.onOpen()}),onBlur:(0,o.M)(e.onBlur,a.onClose),onClick:(0,o.M)(e.onClick,a.onClose)})})});k.displayName=R;var[L,_]=h("TooltipPortal",{forceMount:void 0}),j="TooltipContent",P=r.forwardRef((e,t)=>{let n=_(j,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,l=M(j,e.__scopeTooltip);return(0,g.jsx)(c.z,{present:r||l.open,children:l.disableHoverableContent?(0,g.jsx)(U,{side:o,...i,ref:t}):(0,g.jsx)(I,{side:o,...i,ref:t})})}),I=r.forwardRef((e,t)=>{let n=M(j,e.__scopeTooltip),o=T(j,e.__scopeTooltip),l=r.useRef(null),a=(0,i.e)(t,l),[u,s]=r.useState(null),{trigger:c,onClose:d}=n,p=l.current,{onPointerInTransitChange:f}=o,v=r.useCallback(()=>{s(null),f(!1)},[f]),h=r.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());s(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),f(!0)},[f]);return r.useEffect(()=>()=>v(),[v]),r.useEffect(()=>{if(c&&p){let e=e=>h(e,p),t=e=>h(e,c);return c.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[c,p,h,v]),r.useEffect(()=>{if(u){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==c?void 0:c.contains(t))||(null==p?void 0:p.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,u=t[i].x,s=t[i].y;a>r!=s>r&&n<(u-l)*(r-a)/(s-a)+l&&(o=!o)}return o}(n,u);r?v():o&&(v(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,p,u,d,v]),(0,g.jsx)(U,{...e,ref:a})}),[D,A]=h(C,{isInside:!1}),U=r.forwardRef((e,t)=>{let{__scopeTooltip:n,children:o,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:u,...c}=e,d=M(j,n),f=x(n),{onClose:h}=d;return r.useEffect(()=>(document.addEventListener(b,h),()=>document.removeEventListener(b,h)),[h]),r.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&h()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,h]),(0,g.jsx)(a.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:h,children:(0,g.jsxs)(s.VY,{"data-state":d.stateAttribute,...f,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,g.jsx)(p.A4,{children:o}),(0,g.jsx)(D,{scope:n,isInside:!0,children:(0,g.jsx)(v.f,{id:d.contentId,role:"tooltip",children:i||o})})]})})});P.displayName=j;var S="TooltipArrow";r.forwardRef((e,t)=>{let{__scopeTooltip:n,...r}=e,o=x(n);return A(S,n).isInside?null:(0,g.jsx)(s.Eh,{...o,...r,ref:t})}).displayName=S;var W=E,B=O,V=k,z=P},24389:function(e,t,n){n.d(t,{T:function(){return l},f:function(){return a}});var r=n(7481),o=n(13964),i=n(86764),l=r.forwardRef((e,t)=>(0,i.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));l.displayName="VisuallyHidden";var a=l}}]);