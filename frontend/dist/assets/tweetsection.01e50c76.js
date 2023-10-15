import{u as w,a as _,r,b as N,c as t,j as a,B as C,W as S,n as F,p as g,S as j,q as k,s as T,t as z}from"./index.72231933.js";const P=()=>{const{userInfo:e}=_(i=>i.auth),[s,u]=r.exports.useState(!0),[n,h]=r.exports.useState(""),[p,f]=r.exports.useState([]),[G,d]=r.exports.useState(!1),[A,x]=r.exports.useState(!1),b=N(),o=async i=>{const c=i.target.files;d(!0);const m=new FormData;if(c!==null)for(let l=0;l<c.length;l++)m.append("files",c[l]);try{const l={headers:{"Content-Type":"multipart/form-data"}},{data:v}=await T.post("/api/v1/upload",m,l);f(v.urls),x(!0),d(!1)}catch(l){console.log(l)}},y=()=>{b(z({tweet_image:p,tweet_text:n,tweet_user_id:{_id:e==null?void 0:e._id,display_name:e==null?void 0:e.display_name,name:e==null?void 0:e.name,bio:e==null?void 0:e.bio,profile_image_url:e==null?void 0:e.profile_image_url}}))};return t(B,{children:a("div",{style:{gap:"3px"},className:"w-100 flex item-start",children:[a("div",{className:"image_wrapper",children:[e!=null&&e.profile_image_url?t("img",{src:e==null?void 0:e.profile_image_url,alt:"images-avatar",className:"avatar_profile"}):t("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar_profile",className:"avatar_profile"}),t("div",{className:"image_gradient"})]}),a("div",{className:"flex flex-1 column gap-1",children:[a("div",{className:s?"flex tweetTop flex-1 column item-start gap-1":"flex tweetTop flex-1 column item-start gap-1 active",children:[!s&&a("div",{style:{color:"rgb(29, 155, 240)",fontSize:"13.5px",gap:"2px"},className:"replyBtn1 flex item-center text-bold",children:["Everyone ",t("span",{className:"flex item-center justify-center",children:t(C,{fontSize:"24px"})})]}),t("div",{onClick:()=>u(!1),className:"area w-100",children:t("textarea",{name:"text",value:n,onChange:i=>h(i.target.value),placeholder:"What is happening?!",className:"text w-100 text-light"})}),!s&&a("div",{style:{gap:"5px"},className:"flex replyBtn item-center gap-1",children:[t(S,{}),t("span",{style:{color:"rgb(29, 155, 240)",fontSize:"14px"},className:"fs-12 text-bold",children:"Everyone can reply"})]})]}),a("div",{className:"flex w-100 item-center justify-space",children:[a("div",{className:"flex item-center",children:[a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[t("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),t(F,{})]}),a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[t("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),t(g,{})]}),a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[t("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),t(j,{})]}),a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[t("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),t(k,{})]}),a("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[t("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),t(g,{})]})]}),t("button",{disabled:!n&&p.length===0,onClick:y,className:"btn btn-3 fs-14 text-extra-bold text-white",children:"Post"})]})]})]})})},B=w.div`
    width: 100%;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border);
  font-family: "CustomFont2_light", sans-serif;

    .btn-3 {
        background-color: var(--blue-1) !important;
        opacity: .6;
        padding: .8rem 2rem;
        background:var(--blue-1);
   &:disabled {
      opacity: .3 !important;
      cursor: not-allowed;
    }
    &:hover {
      opacity:.8;
    }
    }
     .replyBtn1 {
    padding:.5px 10px;
    border-radius:20px;
    border:1px solid var(--border1);
    padding-right:5px;

    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }
     .replyBtn {
    padding:4px 10px;
    border-radius:20px;
    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }
  .tweetTop {
     
     padding-bottom: 1rem;
     &.active {
border-bottom: 1px solid var(--border);
     }
  }
    .area {
        height: 4rem;
    }

    .image_wrapper {
      width:4rem;
      height:4rem;
      border-radius:50%;
      cursor:pointer;
      position: relative;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
      .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      background:rgba(0,0,0,.5);
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      object-fit: cover;
      /* transform: translateY(-100%); */
      position: absolute;
      
    }
    }
    .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            /* font-size: 20px; */
            color:rgba(29, 156, 240, 0.835) ;
        }
        &:hover {
            background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
        }
    }
    .text {
        resize: none;
        border:none;
        outline:none;
        

        font-size: 17px;
        font-family: "CustomFont_Normal", sans-serif;
        font-weight: 400;
        background-color: transparent;
        padding: 1rem ;
        color:var(--dark-1);
        &::placeholder {
            font-size: 20px;
        font-family: "CustomFont_Normal", sans-serif;
            font-family: inherit;
            color:var(--grey-1);
            font-weight: 400;
        }
    }
`;export{P as T};
