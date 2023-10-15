import{u as z,v as d,b as I,R as F,z as G,a as v,r as o,j as a,c as e,x as B,A as T,y as R,f as U,U as A,n as M,p as w,S as P,q,s as E}from"./index.72231933.js";const O=({modal:Y,setModal:N,type:H,id:m})=>{var g,f,x,y;const _=I();F.useEffect(()=>{_(G({Detailsdata:m}))},[m]);const{tweetDetails:t}=v(i=>i.tweet),[k,p]=o.exports.useState(!1),[J,C]=o.exports.useState(!1),{userInfo:s}=v(i=>i.auth),[h,j]=o.exports.useState(""),[n,u]=o.exports.useState([]),r=async i=>{const c=i.target.files;p(!0);const b=new FormData;if(c!==null)for(let l=0;l<c.length;l++)b.append("files",c[l]);try{const l={headers:{"Content-Type":"multipart/form-data"}},{data:S}=await E.post("/api/v1/upload",b,l);u(S.urls),C(!0),p(!1)}catch(l){console.log(l)}};return a(L,{as:d.div,initial:{opacity:0,visibility:"hidden"},exit:{opacity:0,visibility:"hidden"},animate:{opacity:1,visibility:"visible"},children:[e("div",{className:"backdrop",onClick:()=>N(!1)}),e(d.div,{variants:B,initial:"hidden",animate:"visible",exit:"exit",className:"deleteCard shadow gap-2",children:a("div",{className:"top w-100 flex column gap-2",children:[e("div",{className:" w-100 flex",children:e("div",{className:"w-90 auto",children:e("div",{className:"icons text-dark flex item-center justify-center",children:e(T,{fontSize:"20px"})})})}),a("div",{className:"tweet_content w-100 flex column gap-2",children:[a("div",{className:"w-90 auto flex item-start gap-1",children:[a("div",{style:{gap:".4rem"},className:"flex column h-100 justify-center item-center",children:[a("div",{className:"image_wrapper",children:[e("div",{className:"image_gradient"}),e("img",{src:(g=t==null?void 0:t.tweet_user_id)==null?void 0:g.profile_image_url,alt:"",className:"avatar_profile"})]}),e("div",{className:"timeline"})]}),e("div",{className:"flex flex-1 column gap-1",children:a("div",{className:"flex w-85 column flex-1",style:{gap:".7rem"},children:[a("h4",{className:"fs-18 text-extra-bold flex item-center",style:{gap:".2rem"},children:[(f=t==null?void 0:t.tweet_user_id)==null?void 0:f.display_name,e("span",{className:"flex item-center",children:e(R,{color:"var(--blue-1)"})}),a("span",{className:"text-light fs-16 text-grey block",children:["@",(x=t==null?void 0:t.tweet_user_id)==null?void 0:x.name]}),e("span",{className:"text-light fs-16 text-grey block",children:"\xB7 10h"})]}),e("h5",{className:"w-90 text-light family1 fs-14",children:t==null?void 0:t.tweet_text}),a("span",{className:"text-light fs-16 text-grey block",children:["Replying to ",e("span",{className:"text-blue",children:(y=t==null?void 0:t.tweet_user_id)==null?void 0:y.name})," "]})]})})]}),a("div",{className:"w-90  auto flex item-start gap-1",children:[s!=null&&s.profile_image_url?e("img",{src:s==null?void 0:s.profile_image_url,alt:"images-avatar",className:"avatar"}):e("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar",className:"avatar"}),a("div",{style:{gap:"6px"},className:"area flex column flex-1 item-start",children:[e("textarea",{name:"text",value:h,onChange:i=>j(i.target.value),placeholder:"Post your reply",className:"text text-light w-100"}),a("div",{className:"w-100 auto",children:[k&&e("div",{className:"flex item-center py-2 justify-center",children:e(U,{type:"small"})}),n.length!==0&&e(A,{images:n,setImages:u})]})]})]})]}),e("div",{className:"bottom w-100",children:a("div",{className:"flex w-90 auto item-center justify-space",children:[a("div",{className:"flex item-center",children:[a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:r,multiple:!0,className:"w-100"}),e(M,{})]}),a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:r,multiple:!0,className:"w-100"}),e(w,{})]}),a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:r,multiple:!0,className:"w-100"}),e(P,{})]}),a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:r,multiple:!0,className:"w-100"}),e(q,{})]}),a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:r,multiple:!0,className:"w-100"}),e(w,{})]})]}),e("button",{disabled:!h&&n.length===0,className:"btn btn-3 fs-14 text-extra-bold text-white",children:"Reply"})]})})]})})]})},L=z(d.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 3800;
  align-items: start;
  justify-content: center;
  z-index: 4800;
  top: 0;
  .timeline {
    min-height: 4.6rem;
    width:2px;
    background:rgba(0,0,0,.2);
  }

.top {
    max-height: 600px;
    overflow:auto;
    border-radius: 20px;
  }

  .avatar {
        width: 4rem !important;
        height: 4rem !important;
        border-radius: 50%;
        object-fit: cover;
    
    }
    .area {
    }
        .text {
        resize: none;
        border:none;
        outline:none;
        font-size: 20px;
        font-family: inherit;
        font-weight: 400;
        background-color: transparent;
        padding: 1rem ;
        height: 10rem;
        color:var(--dark-1);
        &::placeholder {
            font-size: 20px;
            color:var(--grey-1);
            font-weight: light;
        }
    }

.bottom {
    padding:3px 0;
      background-color: var(--top1);
  backdrop-filter: blur(12px);
  position:sticky;
  left:0;
  bottom:0;
    z-index: 3000;
}
.btn.btn-3 {
  background:var(--blue-1);
   &:disabled {
      cursor: not-allowed;
      opacity: .3 !important;
    }
    &:hover {
      opacity:.8;
    }
}

  .image_wrapper {
      width:4rem;
      height:4rem;
      position: relative;
      border-radius:50%;
      cursor:pointer;
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
      position: absolute;
      background:rgba(0,0,0,.2);
      opacity:0;
      z-index:20;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      
    }
  .profile_background {
    background-color: #B2B2B2;
    height: 20rem;
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

    position: absolute;
    height: 100%;
    width: 100%;
     @media (max-width:480px) {
     display: none;

    }
  }
  .deleteCard {
    max-width: 600px;
    min-width: 600px;
    display: flex;
    z-index:210000;

    flex-direction: column;
    background: var(--white);
    border-radius: 14px;
    box-shadow:var(--shadow);

    position: relative;
    padding:1rem 0;
    margin-top:2rem;
     @media (max-width:480px) {
     
       max-width: 100vw;
    min-width: 100vw;
    border-radius: 0px;

    }
  }
`;export{O as T};
