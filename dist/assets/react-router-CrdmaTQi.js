import{r as n}from"./react-BNzEbWkg.js";import{i as v,g as _,r as L,j as P,p as J,m as W,A as M,s as V,a as A}from"./@remix-run-CrqJK5sb.js";/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},b.apply(this,arguments)}const F=n.createContext(null),Y=n.createContext(null),E=n.createContext(null),B=n.createContext(null),x=n.createContext({outlet:null,matches:[],isDataRoute:!1}),T=n.createContext(null);function de(t,e){let{relative:r}=e===void 0?{}:e;R()||v(!1);let{basename:a,navigator:i}=n.useContext(E),{hash:s,pathname:o,search:f}=K(t,{relative:r}),c=o;return a!=="/"&&(c=o==="/"?a:P([a,o])),i.createHref({pathname:c,search:f,hash:s})}function R(){return n.useContext(B)!=null}function U(){return R()||v(!1),n.useContext(B).location}function w(t){n.useContext(E).static||n.useLayoutEffect(t)}function q(){let{isDataRoute:t}=n.useContext(x);return t?le():G()}function G(){R()||v(!1);let t=n.useContext(F),{basename:e,future:r,navigator:a}=n.useContext(E),{matches:i}=n.useContext(x),{pathname:s}=U(),o=JSON.stringify(_(i,r.v7_relativeSplatPath)),f=n.useRef(!1);return w(()=>{f.current=!0}),n.useCallback(function(p,u){if(u===void 0&&(u={}),!f.current)return;if(typeof p=="number"){a.go(p);return}let l=L(p,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(l.pathname=l.pathname==="/"?e:P([e,l.pathname])),(u.replace?a.replace:a.push)(l,u.state,u)},[e,a,o,s,t])}function K(t,e){let{relative:r}=e===void 0?{}:e,{future:a}=n.useContext(E),{matches:i}=n.useContext(x),{pathname:s}=U(),o=JSON.stringify(_(i,a.v7_relativeSplatPath));return n.useMemo(()=>L(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function Q(t,e){return X(t,e)}function X(t,e,r,a){R()||v(!1);let{navigator:i}=n.useContext(E),{matches:s}=n.useContext(x),o=s[s.length-1],f=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let p=U(),u;if(e){var l;let d=typeof e=="string"?J(e):e;c==="/"||(l=d.pathname)!=null&&l.startsWith(c)||v(!1),u=d}else u=p;let h=u.pathname||"/",m=h;if(c!=="/"){let d=c.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=W(t,{pathname:m}),C=te(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:P([c,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:P([c,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),s,r,a);return e&&C?n.createElement(B.Provider,{value:{location:b({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:M.Pop}},C):C}function Z(){let t=oe(),e=A(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},e),r?n.createElement("pre",{style:i},r):null,null)}const $=n.createElement(Z,null);class H extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?n.createElement(x.Provider,{value:this.props.routeContext},n.createElement(T.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ee(t){let{routeContext:e,match:r,children:a}=t,i=n.useContext(F);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(x.Provider,{value:e},a)}function te(t,e,r,a){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),a===void 0&&(a=null),t==null){var s;if(!r)return null;if(r.errors)t=r.matches;else if((s=a)!=null&&s.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let o=t,f=(i=r)==null?void 0:i.errors;if(f!=null){let u=o.findIndex(l=>l.route.id&&(f==null?void 0:f[l.route.id])!==void 0);u>=0||v(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,p=-1;if(r&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let l=o[u];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(p=u),l.route.id){let{loaderData:h,errors:m}=r,g=l.route.loader&&h[l.route.id]===void 0&&(!m||m[l.route.id]===void 0);if(l.route.lazy||g){c=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((u,l,h)=>{let m,g=!1,C=null,d=null;r&&(m=f&&l.route.id?f[l.route.id]:void 0,C=l.route.errorElement||$,c&&(p<0&&h===0?(g=!0,d=null):p===h&&(g=!0,d=l.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,h+1)),j=()=>{let y;return m?y=C:g?y=d:l.route.Component?y=n.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=u,n.createElement(ee,{match:l,routeContext:{outlet:u,matches:I,isDataRoute:r!=null},children:y})};return r&&(l.route.ErrorBoundary||l.route.errorElement||h===0)?n.createElement(H,{location:r.location,revalidation:r.revalidation,component:C,error:m,children:j(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):j()},null)}var S=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(S||{}),N=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(N||{});function re(t){let e=n.useContext(F);return e||v(!1),e}function ae(t){let e=n.useContext(Y);return e||v(!1),e}function ne(t){let e=n.useContext(x);return e||v(!1),e}function z(t){let e=ne(),r=e.matches[e.matches.length-1];return r.route.id||v(!1),r.route.id}function oe(){var t;let e=n.useContext(T),r=ae(N.UseRouteError),a=z(N.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[a]}function le(){let{router:t}=re(S.UseNavigateStable),e=z(N.UseNavigateStable),r=n.useRef(!1);return w(()=>{r.current=!0}),n.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,b({fromRouteId:e},s)))},[t,e])}const k={};function ie(t,e){k[e]||(k[e]=!0,console.warn(e))}const D=(t,e,r)=>ie(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+r+"."));function fe(t,e){t!=null&&t.v7_startTransition||D("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&D("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function pe(t){let{to:e,replace:r,state:a,relative:i}=t;R()||v(!1);let{future:s,static:o}=n.useContext(E),{matches:f}=n.useContext(x),{pathname:c}=U(),p=q(),u=L(e,_(f,s.v7_relativeSplatPath),c,i==="path"),l=JSON.stringify(u);return n.useEffect(()=>p(JSON.parse(l),{replace:r,state:a,relative:i}),[p,l,i,r,a]),null}function se(t){v(!1)}function ve(t){let{basename:e="/",children:r=null,location:a,navigationType:i=M.Pop,navigator:s,static:o=!1,future:f}=t;R()&&v(!1);let c=e.replace(/^\/*/,"/"),p=n.useMemo(()=>({basename:c,navigator:s,static:o,future:b({v7_relativeSplatPath:!1},f)}),[c,f,s,o]);typeof a=="string"&&(a=J(a));let{pathname:u="/",search:l="",hash:h="",state:m=null,key:g="default"}=a,C=n.useMemo(()=>{let d=V(u,c);return d==null?null:{location:{pathname:d,search:l,hash:h,state:m,key:g},navigationType:i}},[c,u,l,h,m,g,i]);return C==null?null:n.createElement(E.Provider,{value:p},n.createElement(B.Provider,{children:r,value:C}))}function he(t){let{children:e,location:r}=t;return Q(O(e),r)}new Promise(()=>{});function O(t,e){e===void 0&&(e=[]);let r=[];return n.Children.forEach(t,(a,i)=>{if(!n.isValidElement(a))return;let s=[...e,i];if(a.type===n.Fragment){r.push.apply(r,O(a.props.children,s));return}a.type!==se&&v(!1),!a.props.index||!a.props.children||v(!1);let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=O(a.props.children,s)),r.push(o)}),r}export{E as N,ve as R,q as a,U as b,K as c,pe as d,he as e,se as f,fe as l,de as u};
