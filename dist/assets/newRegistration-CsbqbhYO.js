import{r as m,j as t}from"./react-BNzEbWkg.js";import{a as p}from"./axios-I_wKO6Q1.js";import{j as C,T as S,G as c,B as d,S as T,k as w}from"./@mui-DtRUgxkQ.js";import"./hoist-non-react-statics-krjyDZfr.js";import"./clsx-BOTyN9u3.js";import"./react-transition-group-shtdoCoV.js";import"./@babel-DuB8yAtz.js";import"./react-dom-Ja3sc9nr.js";import"./scheduler-CzFDRTuY.js";import"./@emotion-CAZp1e-U.js";import"./stylis-YPZU7XtI.js";const z=()=>{const[e,h]=m.useState({id:"",name:"",phone:"",emergencyContactName:"",emergencyContactNumber:"",height:"",weight:"",age:"",bloodGroup:"",email:"",address:""}),[o,u]=m.useState(null),[g,s]=m.useState(""),[x,i]=m.useState(!1),f=a=>{const{name:n,value:l}=a.target;h({...e,[n]:l})},b=()=>e.email.includes("@")?isNaN(e.phone)||e.phone.length<10?(s("Phone number must be at least 10 digits."),i(!0),!1):!e.id||!e.name||!e.address?(s("Please fill in all required fields."),i(!0),!1):!0:(s("Invalid email address."),i(!0),!1),y=async()=>{try{const a=await p.get("http://127.0.0.1:5000/capture-rtsp");u(`data:image/jpeg;base64,${a.data.image}`)}catch{s("Error capturing image from RTSP stream."),i(!0)}},j=()=>{u(null)},N=async a=>{if(a.preventDefault(),!!b())try{const n=await p.post("http://127.0.0.1:5000/new-registration",{...e,image:o});console.log("Form submitted successfully:",n.data),s("Registration successful!"),i(!1),setTimeout(()=>{s("")},2e3)}catch(n){console.error("Error submitting form:",n),s("Error submitting registration. Please try again."),i(!0)}},r=(a,n,l,v="text")=>t.jsx(w,{fullWidth:!0,label:a,name:n,value:l,onChange:f,variant:"outlined",margin:"normal",type:v,required:!0});return t.jsxs("div",{className:"flex flex-row min-h-screen",children:[t.jsxs("div",{className:"flex flex-col w-4/6 p-8",children:[t.jsxs("div",{className:"flex flex-row items-center justify-center mb-4",children:[t.jsx(C,{sx:{fontSize:50,color:"#007FFF"}}),t.jsx(S,{variant:"h4",className:"font-bold ml-2",children:"New Registration Form"})]}),t.jsxs("form",{onSubmit:N,children:[t.jsxs(c,{container:!0,spacing:2,children:[t.jsxs(c,{item:!0,xs:12,md:6,children:[r("ID","id",e.id),r("Phone","phone",e.phone,"tel"),r("Blood Group","bloodGroup",e.bloodGroup),r("Height","height",e.height,"number"),r("Email Address","email",e.email,"email")]}),t.jsxs(c,{item:!0,xs:12,md:6,children:[r("Name","name",e.name),r("Address","address",e.address),r("Age","age",e.age,"number"),r("Weight","weight",e.weight,"number"),r("Emergency Contact Name","emergencyContactName",e.emergencyContactName),r("Emergency Contact Number","emergencyContactNumber",e.emergencyContactNumber,"tel")]})]}),t.jsx(d,{variant:"contained",color:"primary",onClick:y,style:{marginTop:"20px"},children:"Capture Image from RTSP Stream"}),o&&t.jsx(d,{variant:"contained",color:"secondary",onClick:j,style:{marginTop:"10px"},children:"Retake Image"}),o&&t.jsx("div",{style:{marginTop:"20px"},children:t.jsx("img",{src:o,alt:"Captured from RTSP",style:{width:"100%",height:"auto"}})}),t.jsx(d,{type:"submit",variant:"contained",color:"primary",startIcon:t.jsx(T,{}),style:{marginTop:"20px"},children:"Submit"})]})]}),g&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50",children:t.jsx("div",{className:`p-6 rounded-lg text-center ${x?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:t.jsx("p",{className:"text-lg font-bold mb-4",children:g})})})]})};export{z as default};
