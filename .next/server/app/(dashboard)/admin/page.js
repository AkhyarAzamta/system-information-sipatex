(()=>{var e={};e.id=772,e.ids=[772],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2048:e=>{"use strict";e.exports=require("fs")},6162:e=>{"use strict";e.exports=require("stream")},1568:e=>{"use strict";e.exports=require("zlib")},2527:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>h,pages:()=>c,routeModule:()=>u,tree:()=>d}),n(5551),n(8032),n(5866),n(2843);var i=n(3191),a=n(8716),s=n(7922),r=n.n(s),o=n(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let d=["",{children:["(dashboard)",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,5551)),"/home/azam/Documents/sis-main/app/(dashboard)/admin/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,8032)),"/home/azam/Documents/sis-main/app/(dashboard)/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(n.bind(n,2843)),"/home/azam/Documents/sis-main/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/home/azam/Documents/sis-main/app/(dashboard)/admin/page.tsx"],h="/(dashboard)/admin/page",m={require:n,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(dashboard)/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2741:(e,t,n)=>{Promise.resolve().then(n.bind(n,7980))},2294:(e,t,n)=>{Promise.resolve().then(n.bind(n,4654)),Promise.resolve().then(n.bind(n,7438)),Promise.resolve().then(n.bind(n,7495))},5750:(e,t,n)=>{Promise.resolve().then(n.bind(n,3689)),Promise.resolve().then(n.bind(n,837)),Promise.resolve().then(n.bind(n,137)),Promise.resolve().then(n.bind(n,7066)),Promise.resolve().then(n.bind(n,2027))},23:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2994,23)),Promise.resolve().then(n.t.bind(n,6114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,9671,23)),Promise.resolve().then(n.t.bind(n,1868,23)),Promise.resolve().then(n.t.bind(n,4759,23))},8460:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(326),a=n(7859),s=n(3224),r=n(5609),o=n(7577);function l(){let{rowsInfo:e,selectedInfo:t,setSelectedInfo:n,setRowsInfo:l,onMounted:d,isMounted:c,infoId:h,setInfoId:m}=(0,s.N)(),[u,p]=(0,o.useState)(!1);return!c||u?i.jsx(a.Z,{}):(0,i.jsxs)("div",{style:{position:"relative",padding:"20px"},children:[i.jsx(r.Z,{variant:"h3",align:"center",style:{color:"#007BFF",fontWeight:"bold"},children:"Pengumuman"}),i.jsx("div",{style:{marginBottom:"40px",textAlign:"center"},children:t?(0,i.jsxs)(i.Fragment,{children:[i.jsx(r.Z,{variant:"h5",children:t.judul||"No announcement available"}),i.jsx(r.Z,{children:t.konten||"No content available"})]}):i.jsx(r.Z,{children:"No content available"})}),i.jsx(r.Z,{variant:"body2",sx:{position:"absolute",bottom:0,right:0,margin:"10px",textAlign:"right",whiteSpace:"pre-line",fontSize:"0.9rem"},children:t?(e=>{if(!e)return"No date available";let t=new Date(e),n=new Intl.DateTimeFormat("id-ID",{day:"numeric",month:"long",year:"numeric"}).format(t);return`Majalaya, ${n}
HRD PT. SIPATEX`})(t.date):"No date available"})]})}},7980:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var i=n(326),a=n(7577),s=n(6579),r=n(2265),o=n(1426);let l=(0,o.Z)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),d=(0,o.Z)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),c=(0,o.Z)((0,i.jsx)("path",{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"}),"DeleteOutlined"),h=(0,o.Z)((0,i.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");var m=n(6690),u=n(1057),p=n(4611),x=n(5353),f=n(1367),g=n(7841),v=n(8969),b=n(7833);let j=["label","icon","showInMenu","onClick"],w=["label","icon","showInMenu","onClick","closeMenuOnClick","closeMenu"],y=a.forwardRef((e,t)=>{let n=(0,b.B)();if(!e.showInMenu){let{label:s,icon:r,onClick:o}=e,l=(0,f.Z)(e,j);return(0,i.jsx)(n.slots.baseIconButton,(0,x.Z)({ref:t,size:"small",role:"menuitem","aria-label":s},l,{onClick:e=>{o?.(e)}},n.slotProps?.baseIconButton,{children:a.cloneElement(r,{fontSize:"small"})}))}let{label:s,icon:r,onClick:o,closeMenuOnClick:l=!0,closeMenu:d}=e,c=(0,f.Z)(e,w);return(0,i.jsxs)(g.Z,(0,x.Z)({ref:t},c,{onClick:e=>{o?.(e),l&&d?.()},children:[r&&(0,i.jsx)(v.Z,{children:r}),s]}))});var P=n(3175),I=n(3224),Z=n(3913),S=n(2313),M=n(862),k=n(8460);let C=[],N=async()=>{let e=await fetch("/api/admin");return(await e.json()).map(e=>({...e,date:e.date?new Date(e.date):null}))},D=async e=>{let t={...e,date:e.date instanceof Date?e.date.toISOString():e.date};await fetch(`/api/admin/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},E=async e=>{await fetch(`/api/admin/${e}`,{method:"DELETE"})},z=async e=>{let t={...e,date:e.date instanceof Date?e.date.toISOString():e.date};await fetch("/api/admin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};function _({setRows:e,setRowModesModel:t}){let{rowsInfo:n,setRowsInfo:a,onOpen:o,onEdit:c,setInfoId:h,infoId:m}=(0,I.N)(),p=async e=>{h(parseInt(e.target.value,10))};return(0,i.jsxs)(s.Z,{display:"flex",alignItems:"center",gap:2,padding:1,children:[i.jsx(r.Z,{color:"primary",startIcon:i.jsx(l,{}),onClick:()=>{let n=Date.now();e(e=>[...e,{id:n,weeklyId:"",date:"",departement:"",keterangan:"",isNew:!0}]),t(e=>({...e,[n]:{mode:u.se.Edit,fieldToFocus:"weeklyId"}}))},children:"Add Schedule"}),i.jsx(r.Z,{color:"primary",startIcon:i.jsx(l,{}),onClick:()=>{o(),h(0)},children:"Add Info"}),i.jsx(r.Z,{color:"primary",startIcon:i.jsx(d,{}),onClick:()=>{o(),c()},children:"Edit Info"}),(0,i.jsxs)(Z.Z,{sx:{margin:1,padding:0,width:"100%"},children:[i.jsx(S.Z,{id:"select-title-label",children:"Pilih Judul"}),i.jsx(M.Z,{labelId:"select-title-label",id:"select-title",value:m?String(m):"",onChange:p,label:"Pilih Judul",children:n.map(e=>i.jsx(g.Z,{value:String(e.id),children:e.judul},e.id))})]})]})}function O(){let[e,t]=a.useState(C),[n,r]=a.useState({});a.useEffect(()=>{N().then(t)},[]);let o=e=>()=>{r({...n,[e]:{mode:u.se.Edit}})},l=e=>async()=>{r({...n,[e]:{mode:u.se.View}})},x=e=>async()=>{if(confirm("Are you sure you want to delete this row?"))try{await E(e),t(t=>t.filter(t=>t.id!==e)),alert("Row successfully deleted.")}catch(e){alert("Failed to delete the row. Please try again.")}},f=i=>()=>{r({...n,[i]:{mode:u.se.View,ignoreModifications:!0}});let a=e.find(e=>e.id===i);a?.isNew&&t(e.filter(e=>e.id!==i))},g=async e=>{if(!e.date||isNaN(new Date(e.date).getTime()))throw Error("Invalid date value");let n={...e};return!0===e.isNew?(await z(n),t(t=>t.map(t=>t.id===e.id?{...n,isNew:!1}:t))):(await D(n),t(t=>t.map(t=>t.id===e.id?n:t))),n},v=[{field:"weeklyId",headerName:"Minggu Ke",width:180,editable:!0,type:"singleSelect",valueOptions:[1,2,3,4]},{field:"date",headerName:"Tanggal",type:"date",width:180,editable:!0},{field:"departement",headerName:"Department",width:220,editable:!0,type:"singleSelect",valueOptions:["Market","Finance","Development"]},{field:"keterangan",headerName:"Keterangan",width:220,editable:!0,type:"singleSelect",valueOptions:["Libur","Masuk"]},{field:"actions",type:"actions",headerName:"Actions",width:100,cellClassName:"actions",getActions:({id:e})=>n[e]?.mode===u.se.Edit?[i.jsx(y,{icon:i.jsx(h,{}),label:"Save",onClick:l(e)},`save-${e}`),i.jsx(y,{icon:i.jsx(m.Z,{}),label:"Cancel",onClick:f(e)},`cancel-${e}`)]:[i.jsx(y,{icon:i.jsx(d,{}),label:"Edit",onClick:o(e),color:"inherit"},`edit-${e}`),i.jsx(y,{icon:i.jsx(c,{}),label:"Delete",onClick:x(e),color:"inherit"},`delete-${e}`)]}];return(0,i.jsxs)(s.Z,{sx:{height:"90vh",width:"100%"},children:[i.jsx(k.Z,{}),i.jsx(_,{setRows:t,setRowModesModel:r}),i.jsx(P._,{rows:e,columns:v,editMode:"row",rowModesModel:n,onRowModesModelChange:r,onRowEditStop:(e,t)=>{e.reason===p.U.rowFocusOut&&(t.defaultMuiPrevented=!0)},processRowUpdate:g})]})}},7859:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(326),a=n(6823);function s(){return(0,i.jsxs)("div",{style:{padding:"5px",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},children:[i.jsx(a.Z,{variant:"rounded",width:310,height:60}),i.jsx(a.Z,{variant:"text",sx:{fontSize:"0.9rem",marginTop:"10px",width:"20%"}}),i.jsx(a.Z,{variant:"rectangular",width:"100%",height:150,sx:{marginTop:"20px"}})]})}},3224:(e,t,n)=>{"use strict";n.d(t,{N:()=>i});let i=(0,n(8408).U)(e=>({isOpen:!1,isEdit:!1,isMounted:!1,rowsInfo:[],selectedInfo:null,infoId:0,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1}),onEdit:()=>e({isEdit:!0}),onMounted:()=>e({isMounted:!0}),setRowsInfo:t=>e({rowsInfo:t}),setSelectedInfo:t=>e({selectedInfo:t}),setInfoId:t=>e({infoId:t})}))},7495:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});let i=(0,n(984).Z)({cssVariables:{colorSchemeSelector:"data-toolpad-color-scheme"},colorSchemes:{light:!0,dark:!0},breakpoints:{values:{xs:0,sm:600,md:900,lg:1200,xl:1536}}})},5551:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});let i=(0,n(8570).createProxy)(String.raw`/home/azam/Documents/sis-main/app/(dashboard)/admin/page.tsx#default`)},8032:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var i=n(9510);n(1159);var a=n(4486),s=n(7131);function r(e){return i.jsx(a.c,{hideNavigation:!0,children:i.jsx(s._,{children:e.children})})}},2843:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var i=n(9510);n(1159);var a=n(2906),s=n(5451);let r=(0,n(8570).createProxy)(String.raw`/home/azam/Documents/sis-main/theme.ts#default`),o={title:"Sistem Informasi PT. Sipatex"};function l(e){return i.jsx("html",{lang:"en","data-toolpad-color-scheme":"light",suppressHydrationWarning:!0,children:i.jsx("body",{children:i.jsx(s.Z,{options:{enableCssLayer:!0},children:i.jsx(a.w,{branding:o,theme:r,children:e.children})})})})}}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),i=t.X(0,[276,614,689],()=>n(2527));module.exports=i})();