import{u as D,c as a,j as o,r as j}from"./index.72231933.js";import{g as z,a as U,k as I,s as k,c as h,_ as l,b as _,u as K,d as B,e as E,f as G}from"./clsx.6783245b.js";const Y=({images:r})=>r.length===3?a(m,{children:o(n,{className:"lenght1",children:[o("div",{className:"imageWrapper lenght1 images w-100",children:[a("img",{src:r[0],alt:"",className:"image images"}),a("div",{className:"imagegradient w-100 h-100"})]},1),a(n,{className:"thirdImageWrapper",children:r.slice(1,3).map((e,i)=>o("div",{className:"imageWrapper w-100",children:[a("img",{src:e,alt:"",className:"image"}),a("div",{className:"imagegradient w-100 h-100"})]},i))})]})}):r.length===1?a(m,{children:a(n,{className:"active",children:a("div",{className:"imageWrappers firstImageWrapper h-100 w-100",children:a("img",{src:r[0],alt:"",className:"image w-100 h-100"})})})}):r.length===4?a(m,{children:a(n,{className:"wrapper",children:r.map((e,i)=>o("div",{className:"imageWrapper w-100",children:[a("img",{src:e,alt:"",className:"image"}),a("div",{className:"imagegradient w-100 h-100"})]},i))})}):a(m,{children:a(n,{children:r.map((e,i)=>o("div",{className:"imageWrapper w-100",children:[a("img",{src:e,alt:"",className:"image"}),a("div",{className:"imagegradient w-100 h-100"})]},i))})}),m=D.div`
   width: 100%;
  border-radius: 12px;
 `,n=D.div`
width: 100%;
display:grid;
gap:3px;
grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
min-height: 30rem;
border-radius: 12px;

@media (max-width:580px) {
grid-template-columns: repeat(auto-fit, minmax(120px,1fr));
min-height: 20rem;
&.wrapper {
    min-height: 20rem;
    /* min-height: 100%; */
      .imageWrapper {
    @media (max-width: 780px) {
      height: 15rem !important;
    }
}
}

}

&.active {
    min-height: 100%;
    height: 100%;
  border:1px solid rgb(207, 217, 222);

    .imageWrappers {
        border-radius: 12px;
        position: relative;
        .image {
            border-radius: 12px;
        }
    }
}
&.lenght1 {
    grid-template-columns: 1fr 1fr;

}
&.thirdImageWrapper {
    .imageWrapper {
           &:nth-child(1) {
        border-top-right-radius: 12px;

            }
             &:nth-child(2) {
        border-bottom-right-radius: 12px;

            }
        img {
            border-radius: 12px;
            &:nth-child(1) {
        /* border-top-right-radius: 12px; */

            }
        }
    }
}
  .imageWrapper {
    height: 100%;
    position: relative;
     &.images {
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
    }
     &:nth-child(1),&:nth-child(3) {
        .image {
              border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        }
      }
        &:nth-child(2),&:nth-child(4) {
        .image {
              border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        }
      }
   
    &.lenght1 {
        height:100%;
    }
    @media (max-width: 780px) {
      height: 25rem;
    }
    .imagegradient {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.08);
      z-index: 20;
      width: 100%;
      border-radius: 12px;
     
    }
    .image {
      width: 100%;
      height: 100%;
      position: absolute;
      /* border-radius: 12px; */
      object-fit: cover;
      :nth-child(1) {
        /* display: none; */
      
      }
      &.images {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }
    }
  }
    
`;function L(r){return z("MuiCircularProgress",r)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const T=["className","color","disableShrink","size","style","thickness","value","variant"];let p=r=>r,P,S,W,$;const t=44,V=I(P||(P=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=I(S||(S=p`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),q=r=>{const{classes:e,variant:i,color:s,disableShrink:g}=r,u={root:["root",i,`color${h(s)}`],svg:["svg"],circle:["circle",`circle${h(i)}`,g&&"circleDisableShrink"]};return G(u,L,e)},A=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:i}=r;return[e.root,e[i.variant],e[`color${h(i.color)}`]]}})(({ownerState:r,theme:e})=>l({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&_(W||(W=p`
      animation: ${0} 1.4s linear infinite;
    `),V)),H=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),J=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:i}=r;return[e.circle,e[`circle${h(i.variant)}`],i.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>l({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&_($||($=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z)),O=j.exports.forwardRef(function(e,i){const s=K({props:e,name:"MuiCircularProgress"}),{className:g,color:u="primary",disableShrink:M=!1,size:x=40,style:R,thickness:c=3.6,value:f=0,variant:w="indeterminate"}=s,F=B(s,T),d=l({},s,{color:u,disableShrink:M,size:x,thickness:c,value:f,variant:w}),v=q(d),b={},y={},N={};if(w==="determinate"){const C=2*Math.PI*((t-c)/2);b.strokeDasharray=C.toFixed(3),N["aria-valuenow"]=Math.round(f),b.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,y.transform="rotate(-90deg)"}return a(A,l({className:E(v.root,g),style:l({width:x,height:x},y,R),ownerState:d,ref:i,role:"progressbar"},N,F,{children:a(H,{className:v.svg,ownerState:d,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:a(J,{className:v.circle,style:b,ownerState:d,cx:t,cy:t,r:(t-c)/2,fill:"none",strokeWidth:c})})}))});var rr=O;export{rr as C,Y as F};
