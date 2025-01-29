import{j as e,r as l}from"./react-472d7f6d.js";import{c as _}from"./react-dom-4df14f11.js";import{u as k,A as E}from"./@auth0-c3660424.js";import{L as r,B as P}from"./react-router-dom-fb3b555e.js";import{d as A,e as I,f as d,b as B}from"./react-router-6f32f90d.js";import{B as j,c as C,M as R,D,L as O,e as b,f,g as v,T as y,h as M,i as T,A as V,j as S,k as z,l as F,m as U,n as W}from"./@mui-0a0ea82a.js";import"./hoist-non-react-statics-d052b204.js";import"./scheduler-765c72db.js";import"./@remix-run-5d7bddc6.js";import"./clsx-5a9f8d06.js";import"./@emotion-94b9ecb4.js";import"./@babel-591e0485.js";import"./stylis-79144faa.js";import"./react-transition-group-ffe54232.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const $="modulepreload",K=function(a){return"/"+a},N={},m=function(s,i,c){if(!i||i.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(i.map(o=>{if(o=K(o),o in N)return;N[o]=!0;const n=o.endsWith(".css"),L=n?'[rel="stylesheet"]':"";if(!!c)for(let x=t.length-1;x>=0;x--){const p=t[x];if(p.href===o&&(!n||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${L}`))return;const u=document.createElement("link");if(u.rel=n?"stylesheet":$,n||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),n)return new Promise((x,p)=>{u.addEventListener("load",x),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s()).catch(o=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o})};function q(){return e.jsx("footer",{className:"bg-gray-800 text-white py-4",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:e.jsx("p",{className:"text-sm md:text-base lg:text-lg",children:"© 2024 VMS XAIBIT. All rights reserved."})})})}class H extends l.Component{constructor(s){super(s),this.state={hasError:!1}}static getDerivedStateFromError(s){return{hasError:!0}}componentDidCatch(s,i){console.error("ErrorBoundary caught an error",s,i)}render(){return this.state.hasError?e.jsx("h1",{children:"Something went wrong."}):this.props.children}}const h=({children:a})=>{const{isAuthenticated:s,isLoading:i}=k();return i?e.jsx("div",{children:"Loading..."}):s?a:e.jsx(A,{to:"/login-options"})},g="/assets/logo-8931d7a0.png";function w(){const[a,s]=l.useState(!1),i=()=>{window.open("/login-options","_blank")},c=()=>{s(!a)},t=()=>{s(!1)};return e.jsxs("nav",{className:"bg-white shadow-lg",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"relative flex items-center justify-between h-16",children:[e.jsx("div",{className:"flex items-center flex-shrink-0",children:e.jsxs("a",{href:"/",children:[e.jsx("img",{className:"block lg:hidden h-8 w-auto",src:g,alt:"Logo"}),e.jsx("img",{className:"hidden lg:block h-12 w-auto",src:g,alt:"Logo"})]})}),e.jsx("div",{className:"hidden lg:block lg:ml-6",children:e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(r,{to:"/services",className:"text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors duration-300",children:"Services"}),e.jsx(r,{to:"/industry",className:"text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors duration-300",children:"Industry"}),e.jsx(r,{to:"/testimonials",className:"text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors duration-300",children:"Testimonials"}),e.jsx(r,{to:"/about",className:"text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors duration-300",children:"About"}),e.jsx(r,{to:"/blog",className:"text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors duration-300",children:"Blog"}),e.jsx(r,{to:"/contact",className:"text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors duration-300",children:"Contact"}),e.jsx(r,{to:"/partners",className:"text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors duration-300",children:"Partners"}),e.jsx(r,{to:"/book-meeting",className:"text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors duration-300",children:"Book a Meeting"}),e.jsx(j,{variant:"contained",color:"primary",onClick:i,className:"bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-medium transform hover:scale-105 transition-transform duration-300",children:"Login"})]})}),e.jsx("div",{className:"lg:hidden",children:e.jsx("button",{onClick:c,className:"text-blue-900 focus:outline-none",children:e.jsx("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),a&&e.jsx("div",{className:"lg:hidden",children:e.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[e.jsx(r,{to:"/services",onClick:t,className:"text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors duration-300",children:"Services"}),e.jsx(r,{to:"/industry",onClick:t,className:"text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors duration-300",children:"Industry"}),e.jsx(r,{to:"/testimonials",onClick:t,className:"text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors duration-300",children:"Testimonials"}),e.jsx(r,{to:"/about",onClick:t,className:"text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors duration-300",children:"About"}),e.jsx(r,{to:"/blog",onClick:t,className:"text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors duration-300",children:"Blog"}),e.jsx(r,{to:"/contact",onClick:t,className:"text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors duration-300",children:"Contact"}),e.jsx(r,{to:"/partners",onClick:t,className:"text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors duration-300",children:"Partners"}),e.jsx(r,{to:"/book-meeting",onClick:t,className:"text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors duration-300",children:"Book a Meeting"}),e.jsx(j,{variant:"contained",color:"primary",onClick:i,className:"bg-blue-900 text-white w-full px-3 py-2 rounded-md text-base font-medium transform hover:scale-105 transition-transform duration-300",children:"Login"})]})})]})}const Q=()=>{const{isAuthenticated:a,logout:s}=k(),[i,c]=l.useState(!1),t=n=>()=>{c(n)},o=[{text:"Admin Login",path:"/AdminLoginForm",icon:e.jsx(V,{})},{text:"New Registration",path:"/new-registration",icon:e.jsx(S,{})},{text:"Main Program",path:"/main-program",icon:e.jsx(z,{})},{text:"Data Analysis",path:"/data-analysis",icon:e.jsx(F,{})},{text:"Live Video",path:"/LiveVideo",icon:e.jsx(U,{})},{text:"Play Back",path:"/PlayBackVideo",icon:e.jsx(W,{})}];return e.jsx("nav",{className:"bg-white shadow-lg",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between items-center h-16",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(r,{to:"/",children:e.jsx("img",{className:"h-10 w-auto",src:g,alt:"Logo"})})}),a&&e.jsxs("div",{className:"flex items-center",children:[e.jsx(C,{edge:"start",color:"inherit","aria-label":"menu",onClick:t(!0),children:e.jsx(R,{})}),e.jsx(D,{anchor:"right",open:i,onClose:t(!1),children:e.jsx("div",{className:"w-64",role:"presentation",onClick:t(!1),onKeyDown:t(!1),children:e.jsxs(O,{children:[o.map(n=>e.jsxs(b,{button:!0,component:r,to:n.path,children:[e.jsx(f,{children:n.icon}),e.jsx(v,{primary:e.jsx(y,{variant:"h6",sx:{fontWeight:500},children:n.text})})]},n.text)),e.jsx(M,{sx:{my:2}}),e.jsxs(b,{button:!0,onClick:()=>s({returnTo:window.location.origin}),children:[e.jsx(f,{children:e.jsx(T,{})}),e.jsx(v,{primary:e.jsx(y,{variant:"h6",sx:{fontWeight:500},children:"Logout"})})]})]})})})]})]})})},X=l.lazy(()=>m(()=>import("./homepage-6a55546d.js"),["assets/homepage-6a55546d.js","assets/react-472d7f6d.js","assets/hoist-non-react-statics-d052b204.js"])),Y=l.lazy(()=>m(()=>import("./LoginOptions-6a732e9e.js"),["assets/LoginOptions-6a732e9e.js","assets/react-472d7f6d.js","assets/hoist-non-react-statics-d052b204.js","assets/@auth0-c3660424.js","assets/react-router-6f32f90d.js","assets/@remix-run-5d7bddc6.js","assets/@mui-0a0ea82a.js","assets/clsx-5a9f8d06.js","assets/@emotion-94b9ecb4.js","assets/@babel-591e0485.js","assets/stylis-79144faa.js","assets/react-transition-group-ffe54232.js","assets/react-dom-4df14f11.js","assets/scheduler-765c72db.js"])),G=l.lazy(()=>m(()=>import("./LiveVideo-4ed993c7.js"),[])),J=l.lazy(()=>m(()=>import("./newRegistration-ac3134fe.js"),["assets/newRegistration-ac3134fe.js","assets/react-472d7f6d.js","assets/hoist-non-react-statics-d052b204.js","assets/axios-439bb627.js","assets/@mui-0a0ea82a.js","assets/clsx-5a9f8d06.js","assets/@emotion-94b9ecb4.js","assets/@babel-591e0485.js","assets/stylis-79144faa.js","assets/react-transition-group-ffe54232.js","assets/react-dom-4df14f11.js","assets/scheduler-765c72db.js"])),Z=l.lazy(()=>m(()=>import("./mainProgram-1e06dc92.js"),["assets/mainProgram-1e06dc92.js","assets/react-472d7f6d.js","assets/hoist-non-react-statics-d052b204.js"])),ee=l.lazy(()=>m(()=>import("./BigdataAnalysis-d3cc4dad.js"),["assets/BigdataAnalysis-d3cc4dad.js","assets/react-472d7f6d.js","assets/hoist-non-react-statics-d052b204.js","assets/axios-439bb627.js","assets/react-datepicker-c416dbf1.js","assets/clsx-5a9f8d06.js","assets/date-fns-bb67f43c.js","assets/@floating-ui-b504a04a.js","assets/react-dom-4df14f11.js","assets/scheduler-765c72db.js","assets/react-datepicker-e4868022.css","assets/react-chartjs-2-5b8b6642.js","assets/chart.js-a6ea3831.js","assets/@kurkle-36ca2f10.js"])),te=l.lazy(()=>m(()=>import("./AdminLoginForm-b99d4a84.js"),["assets/AdminLoginForm-b99d4a84.js","assets/react-472d7f6d.js","assets/hoist-non-react-statics-d052b204.js","assets/axios-439bb627.js","assets/@mui-0a0ea82a.js","assets/clsx-5a9f8d06.js","assets/@emotion-94b9ecb4.js","assets/@babel-591e0485.js","assets/stylis-79144faa.js","assets/react-transition-group-ffe54232.js","assets/react-dom-4df14f11.js","assets/scheduler-765c72db.js"])),oe=l.lazy(()=>m(()=>import("./PlackbackVideo-e968d659.js"),["assets/PlackbackVideo-e968d659.js","assets/react-472d7f6d.js","assets/hoist-non-react-statics-d052b204.js","assets/jszip-1dcffc73.js","assets/@mui-0a0ea82a.js","assets/clsx-5a9f8d06.js","assets/@emotion-94b9ecb4.js","assets/@babel-591e0485.js","assets/stylis-79144faa.js","assets/react-transition-group-ffe54232.js","assets/react-dom-4df14f11.js","assets/scheduler-765c72db.js"])),se=({children:a})=>{const s=B(),c=["/AdminLoginForm","/new-registration","/main-program","/data-analysis","/livevideo","/PlayBackVideo"].includes(s.pathname);return e.jsxs(e.Fragment,{children:[s.pathname==="/"?e.jsx(w,{}):c?e.jsx(Q,{}):e.jsx(w,{}),a]})},ne=()=>e.jsx(P,{children:e.jsxs(H,{children:[e.jsxs(se,{children:[" ",e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"flex justify-center items-center h-screen",children:"Loading..."}),children:e.jsxs(I,{children:[e.jsx(d,{path:"/",element:e.jsx(X,{})}),e.jsx(d,{path:"/AdminLoginForm",element:e.jsx(te,{})}),e.jsx(d,{path:"/login-options",element:e.jsx(Y,{})}),e.jsx(d,{path:"/livevideo",element:e.jsx(h,{children:e.jsx(G,{})})}),e.jsx(d,{path:"/new-registration",element:e.jsx(h,{children:e.jsx(J,{})})}),e.jsx(d,{path:"/main-program",element:e.jsx(h,{children:e.jsx(Z,{})})}),e.jsx(d,{path:"/data-analysis",element:e.jsx(h,{children:e.jsx(ee,{})})}),e.jsx(d,{path:"/PlayBackVideo",element:e.jsx(h,{children:e.jsx(oe,{})})})]})})]}),e.jsx(q,{})]})}),re="https://localhost:5000",ie=_(document.getElementById("root")),ae=a=>{window.location.href=`${re}/login-options`};ie.render(e.jsx(E,{domain:"dev-dedaezfkps23cxcu.us.auth0.com",clientId:"KexQt69RUglMtDtcTLm5P1tbtk0YTUUd",authorizationParams:{redirect_uri:window.location.origin},onRedirectCallback:ae,children:e.jsx(ne,{})}));
