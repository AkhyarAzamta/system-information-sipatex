(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{2199:function(e,t,n){Promise.resolve().then(n.bind(n,7231))},7710:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(7437),a=n(492),l=n(2688),o=n(6387),s=n(2265);function d(){let{rowsInfo:e,selectedInfo:t,setSelectedInfo:n,setRowsInfo:d,onMounted:r,isMounted:c,infoId:h,setInfoId:u}=(0,l.N)(),[f,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{r(),(async()=>{try{p(!0);let e=await fetch("/api/info");if(!e.ok)throw Error("Failed to fetch info: ".concat(e.statusText));let t=await e.json();d(t.all),0===h&&t.latest&&u(t.latest.id)}catch(e){alert("Failed to fetch info. Please try again later.")}finally{p(!1)}})()},[d,h,u,r]),(0,s.useEffect)(()=>{(async()=>{if(0!==h)try{p(!0);let e=await fetch("/api/info/".concat(h));if(!e.ok)throw Error("Failed to fetch info by ID: ".concat(e.statusText));let t=await e.json();n(Array.isArray(t)?t[0]:t)}catch(e){alert("Failed to fetch selected info. Please try again later.")}finally{p(!1)}})()},[h,n]),!c||f)?(0,i.jsx)(a.Z,{}):(0,i.jsxs)("div",{style:{position:"relative",padding:"20px"},children:[(0,i.jsx)(o.Z,{variant:"h3",align:"center",style:{color:"#007BFF",fontWeight:"bold"},children:"Pengumuman"}),(0,i.jsx)("div",{style:{marginBottom:"40px",textAlign:"center"},children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{variant:"h5",children:t.judul||"No announcement available"}),(0,i.jsx)(o.Z,{children:t.konten||"No content available"})]}):(0,i.jsx)(o.Z,{children:"No content available"})}),(0,i.jsx)(o.Z,{variant:"body2",sx:{position:"absolute",bottom:0,right:0,margin:"10px",textAlign:"right",whiteSpace:"pre-line",fontSize:"0.9rem"},children:t?(e=>{if(!e)return"No date available";let t=new Date(e),n=new Intl.DateTimeFormat("id-ID",{day:"numeric",month:"long",year:"numeric"}).format(t);return"Majalaya, ".concat(n,"\nHRD PT. SIPATEX")})(t.date):"No date available"})]})}},7231:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var i=n(7437),a=n(2265),l=n(2069),o=n(4013),s=n(4630),d=(0,s.Z)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),r=(0,s.Z)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),c=(0,s.Z)((0,i.jsx)("path",{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"}),"DeleteOutlined"),h=(0,s.Z)((0,i.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save"),u=n(8430),f=n(4269),p=n(8755),m=n(1119),x=n(4610),w=n(2187),j=n(3431),y=n(6373);let g=["label","icon","showInMenu","onClick"],v=["label","icon","showInMenu","onClick","closeMenuOnClick","closeMenu"],I=a.forwardRef((e,t)=>{let n=(0,y.B)();if(!e.showInMenu){let{label:l,icon:o,onClick:s}=e,d=(0,x.Z)(e,g);return(0,i.jsx)(n.slots.baseIconButton,(0,m.Z)({ref:t,size:"small",role:"menuitem","aria-label":l},d,{onClick:e=>{s?.(e)}},n.slotProps?.baseIconButton,{children:a.cloneElement(o,{fontSize:"small"})}))}let{label:l,icon:o,onClick:s,closeMenuOnClick:d=!0,closeMenu:r}=e,c=(0,x.Z)(e,v);return(0,i.jsxs)(w.Z,(0,m.Z)({ref:t},c,{onClick:e=>{s?.(e),d&&r?.()},children:[o&&(0,i.jsx)(j.Z,{children:o}),l]}))});var Z=n(561),b=n(2688),M=n(1327),k=n(20),N=n(6746),S=n(7710);let E=[],C=async()=>{let e=await fetch("/api/admin");return(await e.json()).map(e=>({...e,date:e.date?new Date(e.date):null}))},O=async e=>{let t={...e,date:e.date instanceof Date?e.date.toISOString():e.date};await fetch("/api/admin/".concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},D=async e=>{await fetch("/api/admin/".concat(e),{method:"DELETE"})},T=async e=>{let t={...e,date:e.date instanceof Date?e.date.toISOString():e.date};await fetch("/api/admin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};function z(e){let{setRows:t,setRowModesModel:n}=e,{rowsInfo:a,setRowsInfo:s,onOpen:c,onEdit:h,setInfoId:u,infoId:p}=(0,b.N)(),m=async e=>{u(parseInt(e.target.value,10))};return(0,i.jsxs)(l.Z,{display:"flex",alignItems:"center",gap:2,padding:1,children:[(0,i.jsx)(o.Z,{color:"primary",startIcon:(0,i.jsx)(d,{}),onClick:()=>{let e=Date.now();t(t=>[...t,{id:e,weeklyId:"",date:"",departement:"",keterangan:"",isNew:!0}]),n(t=>({...t,[e]:{mode:f.se.Edit,fieldToFocus:"weeklyId"}}))},children:"Add Schedule"}),(0,i.jsx)(o.Z,{color:"primary",startIcon:(0,i.jsx)(d,{}),onClick:()=>{c(),u(0)},children:"Add Info"}),(0,i.jsx)(o.Z,{color:"primary",startIcon:(0,i.jsx)(r,{}),onClick:()=>{c(),h()},children:"Edit Info"}),(0,i.jsxs)(M.Z,{sx:{margin:1,padding:0,width:"100%"},children:[(0,i.jsx)(k.Z,{id:"select-title-label",children:"Pilih Judul"}),(0,i.jsx)(N.Z,{labelId:"select-title-label",id:"select-title",value:p?String(p):"",onChange:m,label:"Pilih Judul",children:a.map(e=>(0,i.jsx)(w.Z,{value:String(e.id),children:e.judul},e.id))})]})]})}function P(){let[e,t]=a.useState(E),[n,o]=a.useState({});a.useEffect(()=>{C().then(t)},[]);let s=e=>()=>{o({...n,[e]:{mode:f.se.Edit}})},d=e=>async()=>{o({...n,[e]:{mode:f.se.View}})},m=e=>async()=>{if(confirm("Are you sure you want to delete this row?"))try{await D(e),t(t=>t.filter(t=>t.id!==e)),alert("Row successfully deleted.")}catch(e){alert("Failed to delete the row. Please try again.")}},x=i=>()=>{o({...n,[i]:{mode:f.se.View,ignoreModifications:!0}});let a=e.find(e=>e.id===i);(null==a?void 0:a.isNew)&&t(e.filter(e=>e.id!==i))},w=async e=>{if(!e.date||isNaN(new Date(e.date).getTime()))throw Error("Invalid date value");let n={...e};return!0===e.isNew?(await T(n),t(t=>t.map(t=>t.id===e.id?{...n,isNew:!1}:t))):(await O(n),t(t=>t.map(t=>t.id===e.id?n:t))),n},j=[{field:"weeklyId",headerName:"Minggu Ke",width:180,editable:!0,type:"singleSelect",valueOptions:[1,2,3,4]},{field:"date",headerName:"Tanggal",type:"date",width:180,editable:!0},{field:"departement",headerName:"Department",width:220,editable:!0,type:"singleSelect",valueOptions:["Market","Finance","Development"]},{field:"keterangan",headerName:"Keterangan",width:220,editable:!0,type:"singleSelect",valueOptions:["Libur","Masuk"]},{field:"actions",type:"actions",headerName:"Actions",width:100,cellClassName:"actions",getActions:e=>{var t;let{id:a}=e;return(null===(t=n[a])||void 0===t?void 0:t.mode)===f.se.Edit?[(0,i.jsx)(I,{icon:(0,i.jsx)(h,{}),label:"Save",onClick:d(a)},"save-".concat(a)),(0,i.jsx)(I,{icon:(0,i.jsx)(u.Z,{}),label:"Cancel",onClick:x(a)},"cancel-".concat(a))]:[(0,i.jsx)(I,{icon:(0,i.jsx)(r,{}),label:"Edit",onClick:s(a),color:"inherit"},"edit-".concat(a)),(0,i.jsx)(I,{icon:(0,i.jsx)(c,{}),label:"Delete",onClick:m(a),color:"inherit"},"delete-".concat(a))]}}];return(0,i.jsxs)(l.Z,{sx:{height:"90vh",width:"100%"},children:[(0,i.jsx)(S.Z,{}),(0,i.jsx)(z,{setRows:t,setRowModesModel:o}),(0,i.jsx)(Z._,{rows:e,columns:j,editMode:"row",rowModesModel:n,onRowModesModelChange:o,onRowEditStop:(e,t)=>{e.reason===p.U.rowFocusOut&&(t.defaultMuiPrevented=!0)},processRowUpdate:w})]})}},492:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(7437),a=n(1988);function l(){return(0,i.jsxs)("div",{style:{padding:"5px",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(a.Z,{variant:"rounded",width:310,height:60}),(0,i.jsx)(a.Z,{variant:"text",sx:{fontSize:"0.9rem",marginTop:"10px",width:"20%"}}),(0,i.jsx)(a.Z,{variant:"rectangular",width:"100%",height:150,sx:{marginTop:"20px"}})]})}},2688:function(e,t,n){"use strict";n.d(t,{N:function(){return i}});let i=(0,n(3011).U)(e=>({isOpen:!1,isEdit:!1,isMounted:!1,rowsInfo:[],selectedInfo:null,infoId:0,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1}),onEdit:()=>e({isEdit:!0}),onMounted:()=>e({isMounted:!0}),setRowsInfo:t=>e({rowsInfo:t}),setSelectedInfo:t=>e({selectedInfo:t}),setInfoId:t=>e({infoId:t})}))},8430:function(e,t,n){"use strict";var i=n(4630),a=n(7437);t.Z=(0,i.Z)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}},function(e){e.O(0,[587,811,799,971,117,744],function(){return e(e.s=2199)}),_N_E=e.O()}]);