import{r as d,h as f,k as y,s as C,_ as c,i as T,e as R,j as m,f as h,g as $,d as x,w as q,B as H,v as J,R as s}from"./index.ddb875c4.js";import{P as F}from"./Page.7429c086.js";import"./axios.32df2655.js";import{C as K}from"./Container.ded1a665.js";import{B as Q}from"./Box.a5d65e11.js";import{T as B}from"./Typography.8e5823f0.js";import{G as U}from"./Grid.41b81032.js";import{A as V}from"./Avatar.4d2378a7.js";const Y=d.exports.createContext();var G=Y;function Z(e){return f("MuiTable",e)}y("MuiTable",["root","stickyHeader"]);const ee=["className","component","padding","size","stickyHeader"],te=e=>{const{classes:t,stickyHeader:a}=e;return $({root:["root",a&&"stickyHeader"]},Z,t)},oe=C("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>c({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":c({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),S="table",ae=d.exports.forwardRef(function(t,a){const o=T({props:t,name:"MuiTable"}),{className:l,component:r=S,padding:i="normal",size:n="medium",stickyHeader:p=!1}=o,g=R(o,ee),b=c({},o,{component:r,padding:i,size:n,stickyHeader:p}),w=te(b),z=d.exports.useMemo(()=>({padding:i,size:n,stickyHeader:p}),[i,n,p]);return m.exports.jsx(G.Provider,{value:z,children:m.exports.jsx(oe,c({as:r,role:r===S?null:"table",ref:a,className:h(w.root,l),ownerState:b},g))})});var se=ae;const re=d.exports.createContext();var N=re;function le(e){return f("MuiTableBody",e)}y("MuiTableBody",["root"]);const ne=["className","component"],ie=e=>{const{classes:t}=e;return $({root:["root"]},le,t)},ce=C("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),de={variant:"body"},j="tbody",pe=d.exports.forwardRef(function(t,a){const o=T({props:t,name:"MuiTableBody"}),{className:l,component:r=j}=o,i=R(o,ne),n=c({},o,{component:r}),p=ie(n);return m.exports.jsx(N.Provider,{value:de,children:m.exports.jsx(ce,c({className:h(p.root,l),as:r,ref:a,role:r===j?null:"rowgroup",ownerState:n},i))})});var ue=pe;function be(e){return f("MuiTableCell",e)}const me=y("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);var ge=me;const ve=["align","className","component","padding","scope","size","sortDirection","variant"],xe=e=>{const{classes:t,variant:a,align:o,padding:l,size:r,stickyHeader:i}=e,n={root:["root",a,i&&"stickyHeader",o!=="inherit"&&`align${x(o)}`,l!=="normal"&&`padding${x(l)}`,`size${x(r)}`]};return $(n,be,t)},fe=C("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${x(a.size)}`],a.padding!=="normal"&&t[`padding${x(a.padding)}`],a.align!=="inherit"&&t[`align${x(a.align)}`],a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>c({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?q(H(e.palette.divider,1),.88):J(H(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${ge.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),ye=d.exports.forwardRef(function(t,a){const o=T({props:t,name:"MuiTableCell"}),{align:l="inherit",className:r,component:i,padding:n,scope:p,size:g,sortDirection:b,variant:w}=o,z=R(o,ve),v=d.exports.useContext(G),M=d.exports.useContext(N),P=M&&M.variant==="head";let E;i?E=i:E=P?"th":"td";let k=p;E==="td"?k=void 0:!k&&P&&(k="col");const A=w||M&&M.variant,I=c({},o,{align:l,component:E,padding:n||(v&&v.padding?v.padding:"normal"),size:g||(v&&v.size?v.size:"medium"),sortDirection:b,stickyHeader:A==="head"&&v&&v.stickyHeader,variant:A}),X=xe(I);let O=null;return b&&(O=b==="asc"?"ascending":"descending"),m.exports.jsx(fe,c({as:E,ref:a,className:h(X.root,r),"aria-sort":O,scope:k,ownerState:I},z))});var u=ye;function Ce(e){return f("MuiTableContainer",e)}y("MuiTableContainer",["root"]);const Te=["className","component"],Re=e=>{const{classes:t}=e;return $({root:["root"]},Ce,t)},he=C("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),$e=d.exports.forwardRef(function(t,a){const o=T({props:t,name:"MuiTableContainer"}),{className:l,component:r="div"}=o,i=R(o,Te),n=c({},o,{component:r}),p=Re(n);return m.exports.jsx(he,c({ref:a,as:r,className:h(p.root,l),ownerState:n},i))});var we=$e;function Ee(e){return f("MuiTableHead",e)}y("MuiTableHead",["root"]);const Me=["className","component"],ke=e=>{const{classes:t}=e;return $({root:["root"]},Ee,t)},He=C("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),Ne={variant:"head"},D="thead",ze=d.exports.forwardRef(function(t,a){const o=T({props:t,name:"MuiTableHead"}),{className:l,component:r=D}=o,i=R(o,Me),n=c({},o,{component:r}),p=ke(n);return m.exports.jsx(N.Provider,{value:Ne,children:m.exports.jsx(He,c({as:r,className:h(p.root,l),ref:a,role:r===D?null:"rowgroup",ownerState:n},i))})});var Pe=ze;function Ae(e){return f("MuiTableRow",e)}const Ie=y("MuiTableRow",["root","selected","hover","head","footer"]);var _=Ie;const Oe=["className","component","hover","selected"],Be=e=>{const{classes:t,selected:a,hover:o,head:l,footer:r}=e;return $({root:["root",a&&"selected",o&&"hover",l&&"head",r&&"footer"]},Ae,t)},Ue=C("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${_.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${_.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:H(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:H(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),L="tr",Se=d.exports.forwardRef(function(t,a){const o=T({props:t,name:"MuiTableRow"}),{className:l,component:r=L,hover:i=!1,selected:n=!1}=o,p=R(o,Oe),g=d.exports.useContext(N),b=c({},o,{component:r,hover:i,selected:n,head:g&&g.variant==="head",footer:g&&g.variant==="footer"}),w=Be(b);return m.exports.jsx(Ue,c({as:r,ref:a,className:h(w.root,l),role:r===L?null:"row",ownerState:b},p))});var W=Se;const je=()=>{const[e,t]=d.exports.useState([]),a=async()=>{const{data:o}=await ApiRequest().get("/candidatos");t(o),console.log(o)};return d.exports.useEffect(a,[]),s.createElement(F,{title:"IziPresi | Dashboard"},s.createElement(K,{maxWidth:"xl"},s.createElement(Q,{sx:{display:"flex",flexDirection:"column",alignItems:"center"}},s.createElement(B,{sx:{mt:3,fontWeight:"bold"},variant:"h5"},"Bienvenido a"),s.createElement(B,{sx:{mt:3,fontWeight:"bold"},variant:"h2"},"IziPresi"),s.createElement("br",null)),s.createElement(U,{container:!0,spacing:2},s.createElement(U,{item:!0,xs:12,sm:12},s.createElement(we,null,s.createElement(se,null,s.createElement(Pe,null,s.createElement(W,null,s.createElement(u,null,"IMAGEN"),s.createElement(u,null,"DNI"),s.createElement(u,null,"NOMBRE"),s.createElement(u,null,"SEXO"),s.createElement(u,null,"PARTIDO POLITICO"),s.createElement(u,null,"PAIS"))),s.createElement(ue,null,e.map((o,l)=>s.createElement(W,{key:l},s.createElement(u,null,s.createElement(V,{src:o.IMAGEN})),s.createElement(u,null,o.DNI),s.createElement(u,null,o.NOMBRE),s.createElement(u,null,o.SEXO),s.createElement(u,null,o.PARTIDO_POLITICO),s.createElement(u,null,o.PAIS_NACIMIENTO))))))))))};var Fe=je;export{Fe as default};