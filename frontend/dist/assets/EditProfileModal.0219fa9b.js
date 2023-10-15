import{u as W,v as x,r as t,b as Y,a as G,j as a,c as e,x as P,f as R,A as T,s as F,a5 as X}from"./index.72231933.js";import{C as I,F as p}from"./camera.c4a218e0.js";const V=({modal:H,setModal:v})=>{t.exports.useState(!1);const[J,c]=t.exports.useState(!1),[K,w]=t.exports.useState(!1),[y,f]=t.exports.useState("false"),[k,m]=t.exports.useState(""),[N,u]=t.exports.useState(""),[_,h]=t.exports.useState(""),[b,C]=t.exports.useState(""),[S,g]=t.exports.useState(""),[M,z]=t.exports.useState(""),A=Y(),{userInfo:n,userprofileisLoading:D}=G(r=>r.auth);t.exports.useEffect(()=>{if(n){const{name:r,bio:l,location:s,display_name:d,profile_image_url:i,website:o,profession:j,profile_banners:L}=n;f(l),u(r),h(i),g(s),m(o),C(L)}},[f,u,g,m,C]);const U=async(r,l)=>{const s=r.target;if(s.files!==null){const d=s.files[0];c(!0);const i=new FormData;i.append("files",d);try{const o={headers:{"Content-Type":"multipart/form-data"}},{data:j}=await F.post("/api/v1/upload/single",i,o);h(j.urls),w(!0),c(!1)}catch(o){console.log(o)}}else z("No files were being selected")},B=async r=>{const l=r.target;if(l.files!==null){const s=l.files[0];c(!0);const d=new FormData;d.append("files",s);try{const i={headers:{"Content-Type":"multipart/form-data"}},{data:o}=await F.post("/api/v1/upload/single",d,i);h(o.urls),w(!0),c(!1)}catch(i){console.log(i)}}else z("No files were being selected")},E=()=>{A(X({bio:y,website:k,name:N,profile_image_url:_,profile_banners:b,location:S,_id:n==null?void 0:n._id}))};return a(q,{as:x.div,initial:{opacity:0,visibility:"hidden"},exit:{opacity:0,visibility:"hidden"},animate:{opacity:1,visibility:"visible"},children:[e("div",{className:"backdrop",onClick:()=>v(!1)}),a(x.div,{variants:P,initial:"hidden",animate:"visible",exit:"exit",className:"deleteCard shadow",children:[D&&e(R,{}),a("div",{className:"edit_wrapper w-100",children:[e("div",{className:"flex authtop w-100 auto ",children:a("div",{className:"w-90 auto flex item-center justify-space item-center",children:[a("div",{className:"flex item-center gap-3 py-1",children:[e("div",{onClick:()=>v(!1),className:"icons flex item-center justify-center",children:e(T,{fontSize:"20px"})}),e("h3",{className:"fs-20 text-extra-bold",children:"Edit profile"})]}),e("div",{className:" flex item-center justify-end",children:e("div",{onClick:E,className:"btn btn-3 fs-14 text-bold text-white",children:"Save"})})]})}),e("div",{className:"w-100 authCenterWrapper h-100",children:a("div",{className:" w-100 flex gap-2 column",children:[a("div",{className:"w-100 profile_background flex item-center justify-center",children:[b&&e("img",{src:b,alt:"images-avatar",className:"banner"}),a("label",{htmlFor:"upload",style:{width:"5rem",height:"5rem",borderRadius:"50%",zIndex:"50",cursor:"pointer"},className:"flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:B,multiple:!0,className:"w-100"}),e(I,{})]})]}),a("label",{htmlFor:"upload_image",className:"image_wrapper flex item-center justify-center",children:[e(I,{}),e("input",{type:"file",id:"upload_image",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:U,multiple:!0,className:"w-100"}),e("img",{src:_,alt:"profile_image",className:"avatar_profile"}),e("div",{className:"image_gradient"})]}),a("div",{style:{paddingBottom:"2rem"},className:"w-90 formwraper auto flex column gap-2",children:[e(p,{state:N,label:"Name",setState:u}),e(p,{state:y,label:"Bio",types:"textarea",setState:f}),e(p,{state:S,label:"Location",setState:g}),e(p,{state:k,label:"Website",setState:m})]})]})})]})]})]})},q=W(x.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 3800;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 4800;

  position: fixed;
    left: 50%;
    transform: translateX(-50%);
     .banner {
        width:100%;
      height:100%;
      /* transform: translateY(-100%); */
      position: absolute;
      object-fit: cover;
    }
    .authCenterWrapper {
      height:95%;
    }
 
  .label {
    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  font-size: 1.3rem;
  color: var(--dark-1);
  font-weight: 700;
  text-transform: capitalize;
  position: relative;

  .labelspan {
    position: absolute;
    top: -15%;
    padding: 0 .6rem;
    left: 2%;
    background-color: #fff;
    font-weight: normal;
  }
  textarea {
    height: 10rem;
    border-radius: 8px;
    background: transparent;
    padding:1.8rem;
    width: 100%;
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    resize:none;
    font-family: inherit;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: var(--dark-1);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--blue-1);
      background: transparent;
    }
    &.true {
      background: #fff;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }
  input {
    height: 5.5rem;
    border-radius: 8px;
    background: transparent;
    padding: 0 1.8rem;
    width: 100%;
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    font-family: inherit;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: var(--dark-1);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--blue-1);
      background: transparent;
    }
    &.true {
      background: #fff;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }

  span {
    font-size: 1.3rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
  }
  .image_wrapper {
      width:12rem;
      height:12rem;
      position: relative;
      border-radius:50%;
      cursor:pointer;
      margin-top:-8rem;
      border:5px solid #fff;
      margin-left:1rem;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
    }
    .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      background:rgba(0,0,0,.5);
      /* opacity:0; */
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      object-fit:cover;
      
    }
  .profile_background {
    background-color: rgb(207, 217, 222);
    height: 200px;
    position:relative;
  
  }
  .btn-3 {
    padding: 1rem 2rem;
  }
  .icon {
  }
  .icon:hover {
    background-color: #ccc;
  }

  .backdrop {
    background: var(--backdrop);
    /* z-index: 300; */
    position: absolute;
    height: 100%;
    width: 100%;
     @media (max-width:480px) {
      display: none;
     }
  }
  .authtop {
  /* background-color: rgba(255, 255, 255, 0.85); */
      background-color: var(--top1);

  backdrop-filter: blur(12px);
  position:sticky;
  left:0;
  top:0;
    z-index: 3000;
  }
  .deleteCard {
    max-width: 80vw;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 20px;
    position: relative;
    box-shadow:var(--shadow);
    // padding-right:10px;
    overflow:hidden;
    .edit_wrapper {
height: 600px;
overflow:auto;
    border-radius: 20px;

    }

    @media (max-width:980px) {
      width: 70%;
    }
    @media (max-width:480px) {
      width: 90%;
       max-width: 100vw;
    min-width: 100vw;
    border-radius: 0px;

    }

  }
  .center_content {
    background: #fff;
    position: relative;
      z-index: 2000;
  }
`;export{V as A};
