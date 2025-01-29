import{r as s,j as e}from"./react-472d7f6d.js";import{a as m}from"./axios-439bb627.js";import{D as M}from"./react-datepicker-c416dbf1.js";import{P as ee,B as te}from"./react-chartjs-2-5b8b6642.js";import{C as ae,p as se,a as ne,b as le,c as oe,d as re,L as ce,A as de}from"./chart.js-a6ea3831.js";import{a7 as h}from"./date-fns-bb67f43c.js";import"./hoist-non-react-statics-d052b204.js";import"./clsx-5a9f8d06.js";import"./@floating-ui-b504a04a.js";import"./react-dom-4df14f11.js";import"./scheduler-765c72db.js";import"./@kurkle-36ca2f10.js";ae.register(se,ne,le,oe,re,ce,de);const ke=()=>{const[l,T]=s.useState(null),[o,U]=s.useState(null),[g,B]=s.useState({}),[b,K]=s.useState({}),[j,P]=s.useState(null),[N,F]=s.useState(null),[f,$]=s.useState({total:"",knownVisits:[],unknownVisits:[]}),[R,x]=s.useState(!1),[D,p]=s.useState(null),[ie,L]=s.useState([]),[me,Y]=s.useState([]),[d,w]=s.useState(0),[O,W]=s.useState(!1),[_,S]=s.useState(!1),[u,k]=s.useState([]),[he,y]=s.useState(null),[q,v]=s.useState([]),[Z,E]=s.useState([]),[z,C]=s.useState([]);s.useEffect(()=>{l&&o&&(I(l,o),A(l,o))},[l,o]);const I=async(t,a)=>{x(!0),p(null);try{const n=await m.get("https://30-1.vercel.app/data-analysis",{params:{startDate:h(t,"yyyy-MM-dd"),endDate:h(a,"yyyy-MM-dd")}});B(n.data)}catch(n){p("Error fetching data."),console.error("Error fetching data:",n)}finally{x(!1)}},A=async(t,a)=>{x(!0),p(null);try{const n=await m.get("https://30-1.vercel.app/unknow-data-analysis",{params:{startDate:h(t,"yyyy-MM-dd"),endDate:h(a,"yyyy-MM-dd")}});K(n.data)}catch(n){p("Error fetching unknown data."),console.error("Error fetching unknown data:",n)}finally{x(!1)}},V=async(t,a)=>{S(!0),W(!0),w(0),v([]),E([]),C([]);try{const n=a==="Known"?"https://30-1.vercel.app/know-images-by date":"https://30-1.vercel.app/unknow-images-by-date",i=await m.get(n,{params:{date:t}});a==="Known"?(L(i.data),k(i.data)):(Y(i.data),k(i.data))}catch(n){console.error("Error fetching images:",n)}finally{S(!1)}},G=async t=>{try{const a=await m.get("https://30-1.vercel.app/names-by-date",{params:{date:t}});console.log(a.data);const n=Array.from(new Set(a.data));v(n),y(t)}catch(a){console.error("Error fetching names:",a)}},H=async t=>{try{const a=await m.get("https://30-1.vercel.app/untimestamp-by-date",{params:{date:t}});console.log("dt",a.data);const n=Array.from(new Set(a.data));C(n),y(t)}catch(a){console.error("Error fetching timestamps:",a)}},J=async t=>{try{const a=await m.get("https://30-1.vercel.app/timestamp-by-date",{params:{date:t}});console.log("dt",a.data);const n=Array.from(new Set(a.data));E(n),y(t)}catch(a){console.error("Error fetching timestamps:",a)}};s.useEffect(()=>{const t=Object.values(g).reduce((r,c)=>r+c,0),a=Object.values(b).reduce((r,c)=>r+c,0),n=Object.entries(g).map(([r,c])=>({date:r,count:c})),i=Object.entries(b).map(([r,c])=>({date:r,count:c}));P({labels:["Known Data","Unknown Data"],datasets:[{data:[t||1,a||1],backgroundColor:["#64C2A6","#2D87BB"]}]}),F({labels:["Known Data","Unknown Data"],datasets:[{label:"Total Visits",data:[t,a],backgroundColor:["#FF6384","#36A2EB"],borderColor:["#FF6384","#36A2EB"],borderWidth:1}]}),$({total:`${t} KNOWN  ,    ${a} UNKNOWN`,knownVisits:n,unknownVisits:i})},[g,b]);const Q=()=>{d+5<u.length&&w(t=>t+1)},X=()=>{d-1>=0&&w(t=>t-1)};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col md:flex-row w-full gap-4 p-10",children:[e.jsxs("div",{className:"bg-blue-50 shadow rounded-lg p-4 md:w-1/5 w-full flex flex-col text-center",style:{height:"400px",overflowY:"auto"},children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"DATA SUMMARY"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block font-semibold mb-2",children:"Start Date & Time:"}),e.jsx(M,{selected:l,onChange:t=>T(t),showTimeSelect:!0,timeFormat:"hh:mm aa",timeIntervals:15,dateFormat:"Pp",className:"w-full border rounded p-2",placeholderText:"Select Start Date & Time"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block font-semibold mb-2",children:"End Date & Time:"}),e.jsx(M,{selected:o,onChange:t=>U(t),showTimeSelect:!0,timeFormat:"hh:mm aa",timeIntervals:15,dateFormat:"Pp",className:"w-full border rounded p-2",placeholderText:"Select End Date & Time"})]}),e.jsx("button",{className:"bg-blue-500 text-white py-1 px-4 font-bold rounded text-m mx-auto",onClick:()=>{I(l,o),A(l,o)},children:"Fetch Data"}),R&&e.jsx("p",{children:"Loading..."}),D&&e.jsx("p",{className:"text-red-500",children:D})]}),e.jsxs("div",{className:"bg-blue-50 shadow rounded-lg px-4 md:w-4/5 w-full",style:{height:"400px",overflowY:"auto"},children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Data Distribution"}),j?e.jsxs("div",{style:{width:"100%",height:"280px"},children:[e.jsx(ee,{data:j,options:{plugins:{legend:{display:!0,position:"bottom"}},responsive:!0,maintainAspectRatio:!1}}),e.jsx("p",{className:"mt-2 font-bold text-xl text-center",children:f.total})]}):e.jsx("p",{children:"No data available for the selected range."})]}),e.jsxs("div",{className:"bg-blue-50 shadow rounded-lg px-4 md:w-1/2 w-full",style:{height:"400px",overflowY:"auto"},children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Data Distribution (Bar Chart)"}),N?e.jsx("div",{style:{width:"100%",height:"280px"},children:e.jsx(te,{data:N,options:{plugins:{legend:{display:!0,position:"top"}},responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}})}):e.jsx("p",{children:"No data available for the selected range."})]})]}),e.jsx("div",{className:"flex flex-col md:flex-row w-full gap-4 px-10",children:e.jsxs("table",{className:"w-full table-auto border-separate ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100 hover:bg-gray-200",children:[e.jsx("th",{className:"border text-xl px-4 py-2 ",children:"Known and Unknown Visits"}),e.jsx("th",{className:"border text-xl px-4 py-2",children:"Known Visits by Date"}),e.jsx("th",{className:"border text-xl px-4 py-2",children:"Unknown Visits by Date"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-green-50",children:[e.jsxs("td",{className:"border px-4 py-2",style:{height:"200px",overflowY:"auto"},children:[e.jsxs("p",{className:"mt-2 text-lg",children:[e.jsx("strong",{children:"Start Date & Time:"})," ",l?h(l,"MM/dd/yyyy, h:mm a"):"Not Selected"]}),e.jsxs("p",{className:"mt-2 text-lg",children:[e.jsx("strong",{children:"End Date & Time:"})," ",o?h(o,"MM/dd/yyyy, h:mm a"):"Not Selected"]})]}),e.jsx("td",{className:"border px-4 py-2 text-lg",style:{height:"200px",overflowY:"auto"},children:f.knownVisits.map(t=>e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{children:[t.date,": ",e.jsx("span",{className:"font-bold",children:t.count})]}),e.jsx("button",{className:"bg-blue-400 hover:bg-blue-600 text-white py-1.5 px-2 text-sm rounded mb-1",onClick:()=>{V(t.date,"Known"),G(t.date),J(t.date)},children:"View People"})]},t.date))}),e.jsx("td",{className:"border px-4 py-2 text-lg",style:{height:"200px",overflowY:"auto"},children:f.unknownVisits.map(t=>e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{children:[t.date,": ",e.jsx("span",{className:"font-bold",children:t.count})]}),e.jsx("button",{className:"bg-blue-400 hover:bg-blue-600 text-white py-1.5 px-2 text-sm rounded mb-1",onClick:()=>{V(t.date,"Unknown"),H(t.date)},children:"View People"})]},t.date))})]}),O&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",className:"border px-4 py-2",children:e.jsx("div",{className:"flex justify-center items-center",children:_?e.jsx("p",{children:"Loading images..."}):e.jsx(e.Fragment,{children:u.length>0&&e.jsxs("div",{className:"flex items-center gap-4 py-4",children:[e.jsx("button",{onClick:X,disabled:d===0,className:"bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400",children:"Prev"}),e.jsx("div",{className:"flex flex-wrap gap-4 py-4",children:u.slice(d,d+5).map((t,a)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("img",{src:`data:image/jpeg;base64,${t}`,alt:"Person",className:"w-72 h-72 object-cover rounded-lg"}),e.jsx("p",{className:"text-center font-semibold mt-4 text-xl",children:q[a]}),e.jsx("p",{className:"text-center font-semibold mt-4 text-xl",children:Z[a]}),e.jsx("p",{className:"text-center font-semibold mt-4 text-xl",children:z[a]})]},a))}),e.jsx("button",{onClick:Q,disabled:d+5>=u.length,className:"bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400",children:"Next"})]})})})})})]})]})})]})};export{ke as default};
