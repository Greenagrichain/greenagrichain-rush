(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{43853:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},5304:function(e,t,n){"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}n.d(t,{M:function(){return r}})},36732:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(7481),o=n(43474),i=n(59169),u=n(88008),s=n(86764);function a(e){let t=e+"CollectionProvider",[n,a]=(0,o.b)(t),[l,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,o=r.useRef(null),i=r.useRef(new Map).current;return(0,s.jsx)(l,{scope:t,itemMap:i,collectionRef:o,children:n})};d.displayName=t;let f=e+"CollectionSlot",v=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=c(f,n),a=(0,i.e)(t,o.collectionRef);return(0,s.jsx)(u.g7,{ref:a,children:r})});v.displayName=f;let p=e+"CollectionItemSlot",m="data-radix-collection-item",w=r.forwardRef((e,t)=>{let{scope:n,children:o,...a}=e,l=r.useRef(null),d=(0,i.e)(t,l),f=c(p,n);return r.useEffect(()=>(f.itemMap.set(l,{ref:l,...a}),()=>void f.itemMap.delete(l))),(0,s.jsx)(u.g7,{[m]:"",ref:d,children:o})});return w.displayName=p,[{Provider:d,Slot:v,ItemSlot:w},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},a]}},43474:function(e,t,n){"use strict";n.d(t,{b:function(){return u},k:function(){return i}});var r=n(7481),o=n(86764);function i(e,t){let n=r.createContext(t);function i(e){let{children:t,...i}=e,u=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:u,children:t})}return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let u=r.createContext(i),s=n.length;function a(t){let{scope:n,children:i,...a}=t,l=n?.[e][s]||u,c=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(l.Provider,{value:c,children:i})}return n=[...n,i],a.displayName=t+"Provider",[a,function(n,o){let a=o?.[e][s]||u,l=r.useContext(a);if(l)return l;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},9914:function(e,t,n){"use strict";n.d(t,{I0:function(){return y},XB:function(){return f},fC:function(){return w}});var r,o=n(7481),i=n(5304),u=n(13964),s=n(59169),a=n(8903),l=n(86764),c="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:v=!1,onEscapeKeyDown:w,onPointerDownOutside:y,onFocusOutside:E,onInteractOutside:b,onDismiss:h,...x}=e,g=o.useContext(d),[T,C]=o.useState(null),N=null!==(f=null==T?void 0:T.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,P]=o.useState({}),R=(0,s.e)(t,e=>C(e)),L=Array.from(g.layers),[M]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),j=L.indexOf(M),D=T?L.indexOf(T):-1,S=g.layersWithOutsidePointerEventsDisabled.size>0,O=D>=j,k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,a.W)(e),i=o.useRef(!1),u=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",u.current),u.current=t,n.addEventListener("click",u.current,{once:!0})):t()}else n.removeEventListener("click",u.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",u.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!O||n||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==h||h())},N),W=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,a.W)(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==E||E(e),null==b||b(e),e.defaultPrevented||null==h||h())},N);return!function(e,t=globalThis?.document){let n=(0,a.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{D!==g.layers.size-1||(null==w||w(e),!e.defaultPrevented&&h&&(e.preventDefault(),h()))},N),o.useEffect(()=>{if(T)return v&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(T)),g.layers.add(T),p(),()=>{v&&1===g.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[T,N,v,g]),o.useEffect(()=>()=>{T&&(g.layers.delete(T),g.layersWithOutsidePointerEventsDisabled.delete(T),p())},[T,g]),o.useEffect(()=>{let e=()=>P({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,l.jsx)(u.WV.div,{...x,ref:R,style:{pointerEvents:S?O?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,k.onPointerDownCapture)})});f.displayName="DismissableLayer";var v=o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),i=(0,s.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(u.WV.div,{...e,ref:i})});function p(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,u.jH)(i,s):i.dispatchEvent(s)}v.displayName="DismissableLayerBranch";var w=f,y=v},45330:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(7481),o=n(8474),i=n(13964),u=n(23324),s=n(86764),a=r.forwardRef((e,t)=>{var n,a;let{container:l,...c}=e,[d,f]=r.useState(!1);(0,u.b)(()=>f(!0),[]);let v=l||d&&(null===(a=globalThis)||void 0===a?void 0:null===(n=a.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,s.jsx)(i.WV.div,{...c,ref:t}),v):null});a.displayName="Portal"},74126:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(7481),o=n(8474),i=n(59169),u=n(23324),s=e=>{var t,n;let s,l;let{present:c,children:d}=e,f=function(e){var t,n;let[i,s]=r.useState(),l=r.useRef({}),c=r.useRef(e),d=r.useRef("none"),[f,v]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(l.current);d.current="mounted"===f?e:"none"},[f]),(0,u.b)(()=>{let t=l.current,n=c.current;if(n!==e){let r=d.current,o=a(t);e?v("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?v("UNMOUNT"):n&&r!==o?v("ANIMATION_OUT"):v("UNMOUNT"),c.current=e}},[e,v]),(0,u.b)(()=>{if(i){let e=e=>{let t=a(l.current).includes(e.animationName);e.target===i&&t&&o.flushSync(()=>v("ANIMATION_END"))},t=e=>{e.target===i&&(d.current=a(l.current))};return i.addEventListener("animationstart",t),i.addEventListener("animationcancel",e),i.addEventListener("animationend",e),()=>{i.removeEventListener("animationstart",t),i.removeEventListener("animationcancel",e),i.removeEventListener("animationend",e)}}v("ANIMATION_END")},[i,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),s(e)},[])}}(c),v="function"==typeof d?d({present:f.isPresent}):r.Children.only(d),p=(0,i.e)(f.ref,(s=null===(t=Object.getOwnPropertyDescriptor(v.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in s&&s.isReactWarning?v.ref:(s=null===(n=Object.getOwnPropertyDescriptor(v,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in s&&s.isReactWarning?v.props.ref:v.props.ref||v.ref);return"function"==typeof d||f.isPresent?r.cloneElement(v,{ref:p}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"},13964:function(e,t,n){"use strict";n.d(t,{WV:function(){return s},jH:function(){return a}});var r=n(7481),o=n(8474),i=n(88008),u=n(86764),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,s=r?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(s,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},54466:function(e,t,n){"use strict";n.d(t,{Dx:function(){return Z},aU:function(){return et},dk:function(){return ee},fC:function(){return Q},l_:function(){return J},x8:function(){return en},zt:function(){return G}});var r=n(7481),o=n(8474),i=n(5304),u=n(59169),s=n(36732),a=n(43474),l=n(9914),c=n(45330),d=n(74126),f=n(13964),v=n(8903),p=n(92609),m=n(23324),w=n(24389),y=n(86764),E="ToastProvider",[b,h,x]=(0,s.B)("Toast"),[g,T]=(0,a.b)("Toast",[x]),[C,N]=g(E),P=e=>{let{__scopeToast:t,label:n="Notification",duration:o=5e3,swipeDirection:i="right",swipeThreshold:u=50,children:s}=e,[a,l]=r.useState(null),[c,d]=r.useState(0),f=r.useRef(!1),v=r.useRef(!1);return n.trim()||console.error("Invalid prop `label` supplied to `".concat(E,"`. Expected non-empty `string`.")),(0,y.jsx)(b.Provider,{scope:t,children:(0,y.jsx)(C,{scope:t,label:n,duration:o,swipeDirection:i,swipeThreshold:u,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:r.useCallback(()=>d(e=>e+1),[]),onToastRemove:r.useCallback(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:v,children:s})})};P.displayName=E;var R="ToastViewport",L=["F8"],M="toast.viewportPause",j="toast.viewportResume",D=r.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:o=L,label:i="Notifications ({hotkey})",...s}=e,a=N(R,n),c=h(n),d=r.useRef(null),v=r.useRef(null),p=r.useRef(null),m=r.useRef(null),w=(0,u.e)(t,m,a.onViewportChange),E=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=a.toastCount>0;r.useEffect(()=>{let e=e=>{var t;o.every(t=>e[t]||e.code===t)&&(null===(t=m.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[o]),r.useEffect(()=>{let e=d.current,t=m.current;if(x&&e&&t){let n=()=>{if(!a.isClosePausedRef.current){let e=new CustomEvent(M);t.dispatchEvent(e),a.isClosePausedRef.current=!0}},r=()=>{if(a.isClosePausedRef.current){let e=new CustomEvent(j);t.dispatchEvent(e),a.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||r()},i=()=>{e.contains(document.activeElement)||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[x,a.isClosePausedRef]);let g=r.useCallback(e=>{let{tabbingDirection:t}=e,n=c().map(e=>{let n=e.ref.current,r=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===t?r:r.reverse()});return("forwards"===t?n.reverse():n).flat()},[c]);return r.useEffect(()=>{let e=m.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!n){var r,o,i;let n=document.activeElement,u=t.shiftKey;if(t.target===e&&u){null===(r=v.current)||void 0===r||r.focus();return}let s=g({tabbingDirection:u?"backwards":"forwards"}),a=s.findIndex(e=>e===n);Y(s.slice(a+1))?t.preventDefault():u?null===(o=v.current)||void 0===o||o.focus():null===(i=p.current)||void 0===i||i.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[c,g]),(0,y.jsxs)(l.I0,{ref:d,role:"region","aria-label":i.replace("{hotkey}",E),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&(0,y.jsx)(O,{ref:v,onFocusFromOutsideViewport:()=>{Y(g({tabbingDirection:"forwards"}))}}),(0,y.jsx)(b.Slot,{scope:n,children:(0,y.jsx)(f.WV.ol,{tabIndex:-1,...s,ref:w})}),x&&(0,y.jsx)(O,{ref:p,onFocusFromOutsideViewport:()=>{Y(g({tabbingDirection:"backwards"}))}})]})});D.displayName=R;var S="ToastFocusProxy",O=r.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=N(S,n);return(0,y.jsx)(w.T,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget;(null===(t=i.viewport)||void 0===t?void 0:t.contains(n))||r()}})});O.displayName=S;var k="Toast",W=r.forwardRef((e,t)=>{let{forceMount:n,open:r,defaultOpen:o,onOpenChange:u,...s}=e,[a=!0,l]=(0,p.T)({prop:r,defaultProp:o,onChange:u});return(0,y.jsx)(d.z,{present:n||a,children:(0,y.jsx)(_,{open:a,...s,ref:t,onClose:()=>l(!1),onPause:(0,v.W)(e.onPause),onResume:(0,v.W)(e.onResume),onSwipeStart:(0,i.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,i.M)(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(n,"px"))}),onSwipeCancel:(0,i.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,i.M)(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(n,"px")),l(!1)})})})});W.displayName=k;var[A,I]=g(k,{onClose(){}}),_=r.forwardRef((e,t)=>{let{__scopeToast:n,type:s="foreground",duration:a,open:c,onClose:d,onEscapeKeyDown:p,onPause:m,onResume:w,onSwipeStart:E,onSwipeMove:h,onSwipeCancel:x,onSwipeEnd:g,...T}=e,C=N(k,n),[P,R]=r.useState(null),L=(0,u.e)(t,e=>R(e)),D=r.useRef(null),S=r.useRef(null),O=a||C.duration,W=r.useRef(0),I=r.useRef(O),_=r.useRef(0),{onToastAdd:V,onToastRemove:U}=C,K=(0,v.W)(()=>{var e;(null==P?void 0:P.contains(document.activeElement))&&(null===(e=C.viewport)||void 0===e||e.focus()),d()}),B=r.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(_.current),W.current=new Date().getTime(),_.current=window.setTimeout(K,e))},[K]);r.useEffect(()=>{let e=C.viewport;if(e){let t=()=>{B(I.current),null==w||w()},n=()=>{let e=new Date().getTime()-W.current;I.current=I.current-e,window.clearTimeout(_.current),null==m||m()};return e.addEventListener(M,n),e.addEventListener(j,t),()=>{e.removeEventListener(M,n),e.removeEventListener(j,t)}}},[C.viewport,O,m,w,B]),r.useEffect(()=>{c&&!C.isClosePausedRef.current&&B(O)},[c,O,C.isClosePausedRef,B]),r.useEffect(()=>(V(),()=>U()),[V,U]);let $=r.useMemo(()=>P?function e(t){let n=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(P):null,[P]);return C.viewport?(0,y.jsxs)(y.Fragment,{children:[$&&(0,y.jsx)(F,{__scopeToast:n,role:"status","aria-live":"foreground"===s?"assertive":"polite","aria-atomic":!0,children:$}),(0,y.jsx)(A,{scope:n,onClose:K,children:o.createPortal((0,y.jsx)(b.ItemSlot,{scope:n,children:(0,y.jsx)(l.fC,{asChild:!0,onEscapeKeyDown:(0,i.M)(p,()=>{C.isFocusedToastEscapeKeyDownRef.current||K(),C.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,y.jsx)(f.WV.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":C.swipeDirection,...T,ref:L,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==p||p(e.nativeEvent),e.nativeEvent.defaultPrevented||(C.isFocusedToastEscapeKeyDownRef.current=!0,K()))}),onPointerDown:(0,i.M)(e.onPointerDown,e=>{0===e.button&&(D.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,i.M)(e.onPointerMove,e=>{if(!D.current)return;let t=e.clientX-D.current.x,n=e.clientY-D.current.y,r=!!S.current,o=["left","right"].includes(C.swipeDirection),i=["left","up"].includes(C.swipeDirection)?Math.min:Math.max,u=o?i(0,t):0,s=o?0:i(0,n),a="touch"===e.pointerType?10:2,l={x:u,y:s},c={originalEvent:e,delta:l};r?(S.current=l,X("toast.swipeMove",h,c,{discrete:!1})):q(l,C.swipeDirection,a)?(S.current=l,X("toast.swipeStart",E,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>a||Math.abs(n)>a)&&(D.current=null)}),onPointerUp:(0,i.M)(e.onPointerUp,e=>{let t=S.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),S.current=null,D.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};q(t,C.swipeDirection,C.swipeThreshold)?X("toast.swipeEnd",g,r,{discrete:!0}):X("toast.swipeCancel",x,r,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),C.viewport)})]}):null}),F=e=>{let{__scopeToast:t,children:n,...o}=e,i=N(k,t),[u,s]=r.useState(!1),[a,l]=r.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,v.W)(e);(0,m.b)(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>s(!0)),r.useEffect(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),a?null:(0,y.jsx)(c.h,{asChild:!0,children:(0,y.jsx)(w.T,{...o,children:u&&(0,y.jsxs)(y.Fragment,{children:[i.label," ",n]})})})},V=r.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,y.jsx)(f.WV.div,{...r,ref:t})});V.displayName="ToastTitle";var U=r.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,y.jsx)(f.WV.div,{...r,ref:t})});U.displayName="ToastDescription";var K="ToastAction",B=r.forwardRef((e,t)=>{let{altText:n,...r}=e;return n.trim()?(0,y.jsx)(H,{altText:n,asChild:!0,children:(0,y.jsx)(z,{...r,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(K,"`. Expected non-empty `string`.")),null)});B.displayName=K;var $="ToastClose",z=r.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e,o=I($,n);return(0,y.jsx)(H,{asChild:!0,children:(0,y.jsx)(f.WV.button,{type:"button",...r,ref:t,onClick:(0,i.M)(e.onClick,o.onClose)})})});z.displayName=$;var H=r.forwardRef((e,t)=>{let{__scopeToast:n,altText:r,...o}=e;return(0,y.jsx)(f.WV.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function X(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.currentTarget,u=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,f.jH)(i,u):i.dispatchEvent(u)}var q=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return"left"===t||"right"===t?i&&r>n:!i&&o>n};function Y(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var G=P,J=D,Q=W,Z=V,ee=U,et=B,en=z},8903:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(7481);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},92609:function(e,t,n){"use strict";n.d(t,{T:function(){return i}});var r=n(7481),o=n(8903);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,u]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,u=r.useRef(i),s=(0,o.W)(t);return r.useEffect(()=>{u.current!==i&&(s(i),u.current=i)},[i,u,s]),n}({defaultProp:t,onChange:n}),s=void 0!==e,a=s?e:i,l=(0,o.W)(n);return[a,r.useCallback(t=>{if(s){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else u(t)},[s,e,u,l])]}},23324:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(7481),o=globalThis?.document?r.useLayoutEffect:()=>{}},24389:function(e,t,n){"use strict";n.d(t,{T:function(){return u},f:function(){return s}});var r=n(7481),o=n(13964),i=n(86764),u=r.forwardRef((e,t)=>(0,i.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));u.displayName="VisuallyHidden";var s=u},33935:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},i=(e,t)=>n=>{var i;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:u,defaultVariants:s}=t,a=Object.keys(u).map(e=>{let t=null==n?void 0:n[e],o=null==s?void 0:s[e];if(null===t)return null;let i=r(t)||r(o);return u[e][i]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,a,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...s,...l}[t]):({...s,...l})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);