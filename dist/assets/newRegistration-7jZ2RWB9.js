import{r as i,j as e}from"./react-BNzEbWkg.js";import{a as y}from"./axios-I_wKO6Q1.js";import{W as v}from"./react-webcam-CzCVUox_.js";import{a as w}from"./react-router-CrdmaTQi.js";import{j as C,T as F,G as x,B as S,S as I,k as E}from"./@mui-DtRUgxkQ.js";import"./hoist-non-react-statics-krjyDZfr.js";import"./@remix-run-CrqJK5sb.js";import"./clsx-BOTyN9u3.js";import"./react-transition-group-shtdoCoV.js";import"./@babel-DuB8yAtz.js";import"./react-dom-Ja3sc9nr.js";import"./scheduler-CzFDRTuY.js";import"./@emotion-CAZp1e-U.js";import"./stylis-YPZU7XtI.js";const R=({setImageData:t})=>{const c=i.useRef(null),[u,d]=i.useState(null),g=()=>{const h=c.current.getScreenshot();d(h),t(h)},r=()=>{d(null)};return e.jsx("div",{className:"flex flex-col items-center p-4",children:u?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:u,alt:"Captured",className:"w-full h-auto mb-4"}),e.jsx("button",{onClick:r,className:"bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4",children:"Retake Image"})]}):e.jsxs(e.Fragment,{children:[e.jsx(v,{audio:!1,ref:c,screenshotFormat:"image/jpeg",mirrored:!1,className:"mb-4"}),e.jsx("button",{onClick:g,className:" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Capture Image"})]})})},J=()=>{const[t,c]=i.useState({id:"",name:"",phone:"",emergencyContactName:"",emergencyContactNumber:"",height:"",weight:"",age:"",bloodGroup:"",email:"",address:""}),[u,d]=i.useState(null),[g,r]=i.useState(""),[h,l]=i.useState(!1),p=w(),b=m=>{const{name:a,value:n}=m.target;c({...t,[a]:n})},j=()=>t.email.includes("@")?isNaN(t.phone)||t.phone.length<10?(r("Phone number must be at least 10 digits."),l(!0),!1):!t.id||!t.name||!t.address?(r("Please fill in all required fields."),l(!0),!1):!0:(r("Invalid email address."),l(!0),!1),f=async m=>{var a,n;if(m.preventDefault(),!!j())try{const o=await y.post("https://localhost:5000/new-registration",{...t,image:u});console.log("Form submitted successfully:",o.data),r("Registration successful!"),l(!1),setTimeout(()=>{r(""),p("/Counselor-Login")},2e3)}catch(o){console.error("Error submitting form:",o);const N=((n=(a=o.response)==null?void 0:a.data)==null?void 0:n.message)||"Error submitting registration. Please try again.";r(N),l(!0),setTimeout(()=>{r("")},2e3)}},s=(m,a,n,o="text")=>e.jsx(E,{fullWidth:!0,label:m,name:a,value:n,onChange:b,variant:"outlined",margin:"normal",type:o,required:!0});return e.jsxs("div",{className:"flex flex-row min-h-screen",children:[e.jsxs("div",{className:"flex flex-col w-4/6 p-8",children:[e.jsxs("div",{className:"flex flex-row items-center justify-center mb-4",children:[e.jsx(C,{sx:{fontSize:50,color:"#007FFF"}}),e.jsx(F,{variant:"h4",className:"font-bold ml-2",children:"New Registration Form"})]}),e.jsx("form",{onSubmit:f,children:e.jsxs(x,{container:!0,spacing:2,children:[e.jsxs(x,{item:!0,xs:12,md:6,children:[s("ID","id",t.id),s("Phone","phone",t.phone,"tel"),s("Blood Group","bloodGroup",t.bloodGroup),s("Height","height",t.height,"number"),s("Email Address","email",t.email,"email")]}),e.jsxs(x,{item:!0,xs:12,md:6,children:[s("Name","name",t.name),s("Address","address",t.address),s("Age","age",t.age,"number"),s("Weight","weight",t.weight,"number"),s("Emergency Contact Name","emergencyContactName",t.emergencyContactName),s("Emergency Contact Number","emergencyContactNumber",t.emergencyContactNumber,"tel")]})]})})]}),e.jsxs("div",{className:"w-2/6 p-8 bg-gray-100 flex flex-col items-center justify-center",children:[e.jsx(R,{setImageData:d}),e.jsx(S,{type:"submit",variant:"contained",color:"primary",startIcon:e.jsx(I,{}),onClick:f,className:"mt-4",children:"Submit"})]}),g&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50",children:e.jsx("div",{className:`p-6 rounded-lg text-center ${h?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:e.jsx("p",{className:"text-lg font-bold mb-4",children:g})})})]})};export{J as default};
