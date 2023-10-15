import{c as e,j as i,u as S,v as k,w as Z,r as m,a as u,b as C,f as ee,x as $,y as D,R as te,z as ie,A as ae,U as re,W as le,n as oe,p as Q,S as ne,q as de,s as se,D as ce,F as me,E as he,H as M,I as pe,L as U,J as xe,K as ge}from"./index.72231933.js";import{T as fe}from"./TweetModal.3bd328c9.js";import{M as ue,R as q,F as Y,L as ve,S as be,a as we}from"./share.4a2e5bcd.js";import{F as W,C as ye}from"./CircularProgress.2f81e93f.js";import{h as P}from"./moment.9709ab41.js";const ke=({isClicked:t})=>e("span",{style:{width:"19px",height:"19px",color:"var(--dark-1)",position:"relative",fill:t?"blue":"currentcolor",display:"inline-block"},children:e("svg",{viewBox:"0 0 24 24","aria-hidden":"true",style:{width:"100%",height:"100%",display:"inline-block"},children:e("g",{children:e("path",{d:"M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"})})})}),_e=({isClicked:t})=>e("span",{style:{width:"19px",height:"19px",color:"var(--dark-1)",position:"relative",fill:t?"blue":"currentcolor",display:"inline-block"},children:e("svg",{viewBox:"0 0 24 24","aria-hidden":"true",style:{width:"100%",height:"100%",display:"inline-block"},children:e("g",{children:e("path",{d:"M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"})})})}),Ne=({isClicked:t})=>e("span",{style:{width:"19px",height:"19px",color:"var(--dark-1)",position:"relative",fill:t?"blue":"currentcolor",display:"inline-block"},children:e("svg",{viewBox:"0 0 24 24","aria-hidden":"true",style:{width:"100%",height:"100%",display:"inline-block"},children:i("g",{children:[e("path",{d:"M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"})," "]})})}),Ce=({isClicked:t})=>e("span",{style:{width:"19px",height:"19px",color:"var(--dark-1)",position:"relative",fill:t?"blue":"currentcolor",display:"inline-block"},children:e("svg",{viewBox:"0 0 24 24","aria-hidden":"true",style:{width:"100%",height:"100%",display:"inline-block"},children:e("g",{children:e("path",{d:"M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"})})})}),ze=({isClicked:t})=>e("span",{style:{width:"19px",height:"19px",color:"var(--red)",position:"relative",fill:"var(--red)",display:"inline-block"},children:e("svg",{viewBox:"0 0 24 24","aria-hidden":"true",style:{width:"100%",height:"100%",display:"inline-block"},children:e("g",{children:e("path",{d:"M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"})})})}),Se=({modal:t,setModal:p,handleDeleteTweet:n})=>{const c=Z();m.exports.useState(""),m.exports.useState("");const{loginisLoading:r,loginisSuccess:h}=u(d=>d.auth);return C(),m.exports.useEffect(()=>{if(h){const d=setTimeout(()=>{c("/")},3e3);return()=>clearTimeout(d)}},[h]),i(je,{as:k.div,initial:{opacity:0,visibility:"hidden"},exit:{opacity:0,visibility:"hidden"},animate:{opacity:1,visibility:"visible"},children:[r&&e(ee,{}),e("div",{className:"backdrop",onClick:()=>p(!1)}),e(k.div,{variants:$,initial:"hidden",animate:"visible",exit:"exit",className:"deleteCard shadow",children:e("div",{className:"center_content h-100 justify-space w-85 py-2 auto flex column gap-1",children:i("div",{className:"w-85 formwraper auto flex column gap-1",children:[i("h4",{className:"fs-24 text-dark text-start text-bold",children:["Delete Post?",e("span",{className:"block text-grey fs-15 text-light py-1",children:"This can\u2019t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results."})]}),i("div",{className:"flex column gap-1 w-100",children:[e("div",{onClick:n,className:"btn w-100 auto btn-2 fs-16 text-white text-extra-bold",children:"Delete"}),e("div",{onClick:()=>p(!1),className:"btn w-100 auto btn-1 fs-16 text-white text-extra-bold",children:"Cancel"})]})]})})})]})},je=S(k.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  position: fixed;
    left: 50%;
    transform: translateX(-50%);
  display: flex;
  z-index: 4800;
  align-items: center;
  justify-content: center;
  top: 0;
  .formwraper {
    padding: 2rem 0;
    /* width: 70%; */
  }
  .btn.btn-2 {
    background-color:var(--red);
    padding:1.5rem !important;

    cursor: pointer;
  }

  .btn.btn-1 {
    padding:1rem 1.5rem !important;
    padding:1.5rem !important;

    background-color: transparent !important;
    color: var(--dark-1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      background-color: var(--grey-hover) !important;
    }
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


  span {
    font-size: 1.3rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
  }

  .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 16px;
      color: var(--grey-1);
      &::after {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: var(--border);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: var(--border);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  .btn {
    padding: 1rem 2rem !important;
    opacity:1 !important;
  }
  .authBtn {
    border: 1px solid var(--border);
    padding: .9rem 4rem;
    border-radius: 40px;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: var(--dark-grey-hover) !important;
    }
  }
  .LoginBottom {
    position: relative;
    padding: 0 1rem;
    /* padding-bottom: 1.6rem; */

    .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 14px;
      color: var(--dark-1);
      &::after {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .backdrop {
    background: var(--backdrop);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .Logintop {
  z-index: 3000;
  position:sticky;
  left:0;
  top:0;  
  top: 0;
  background-color: var(--top);
  z-index: 30;
  backdrop-filter: blur(12px);
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  }
  .deleteCard {
    max-width: 600px;
    width: 360px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    box-shadow:var(--shadow);
    position: relative;
    border-radius:20px;
    border-top-right-radius:20px;
    @media (max-width:980px) {
      width: 70%;
    }
    @media (max-width:580px) {
      width: 90%;
    }

  }
  .deleteCard_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 20px;
    position: relative;
  }
  .center_content {
    background: var(--white);
    position: relative;
  }
`,Me=()=>{var c,r,h,d,v;const{tweetDetails:t}=u(s=>s.tweet);u(s=>s.auth);const[p,n]=m.exports.useState(!1);return C(),i(Be,{children:[e("div",{className:p?"dropdownCard  flex column active":"dropdownCard  flex column",children:e("div",{onClick:()=>n(!1),className:"dropdown_background"})}),i("div",{className:"flex w-100 auto item-start feed_card_wrapper gap-1",children:[i("div",{className:"image_wrappers",children:[e("div",{className:"image_gradient"}),(c=t==null?void 0:t.tweet_user_id)!=null&&c.profile_image_url?e("img",{src:(r=t==null?void 0:t.tweet_user_id)==null?void 0:r.profile_image_url,alt:"images-avatar",className:"avatar_profile"}):e("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar_profile",className:"avatar_profile"})]}),i("div",{className:"flex column flex-1",style:{gap:".3rem"},children:[i("h4",{className:"fs-16 text-dark text-extra-bold flex item-center",style:{gap:".2rem"},children:[(h=t==null?void 0:t.tweet_user_id)==null?void 0:h.display_name,e("span",{className:"flex item-center",children:e(D,{color:"var(--blue-1)"})}),i("span",{style:{fontSize:"15px"},className:"text-light text-grey ",children:["@",(d=t==null?void 0:t.tweet_user_id)==null?void 0:d.name]})]}),e("h5",{style:{paddingBottom:"1rem",fontSize:"15px",lineHeight:"20px"},className:"text_dark_grey text-light family1",children:t==null?void 0:t.tweet_text})]})]}),e("div",{className:"w-100",children:e("div",{className:"w-100",children:((v=t==null?void 0:t.tweet_image)==null?void 0:v.length)>0&&e(W,{images:t==null?void 0:t.tweet_image})})})]},t==null?void 0:t._id)},Be=S.div`
    width: 100%;
    padding: 1.7rem;
    padding-bottom:.6rem;
   position: relative;
    border: 1px solid var(--border1);
    border-radius: 16px;
    &:hover {
        background-color: var(--dark-grey-hover);
    }
     .image_wrappers {
      width:2.6rem;
      height:2.6rem;
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
      z-index: 200;
      position: absolute;
      background:rgba(0,0,0,.5);
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      position: absolute;
      object-fit: cover;
    }
    }
    h5 {
        font-weight: 600;
        font-size: 15px;
        @media (max-width:980px) {
        font-size: 15.5px !important;
       }
       @media (max-width:580px) {
        font-size: 14px !important;
       }
    }
    .dropdownCard {
        position: absolute;
        right: 2%;
        top: 8px;
        z-index: 2000;
        cursor: pointer;
        width: 370px;
        border-radius: 10px;
        box-shadow: var(--shadow);
        background-color: var(--white);
        height: 0;
        transition: all .3s;    
        opacity:0;
        visibility: hidden;
        &.card1 {
        width: 130px;
        right: -40%;
        &.active {
             @media (max-width:500px)  {
            width: 130px;

        }
         @media (max-width:400px)  {
            width: 130px;

        }
        }
        @media (max-width:500px)  {
            width: 130px;

        }
         @media (max-width:400px)  {
            width: 130px;

        }
        
   ul {

            li {
                padding:.7rem 2.4rem;
            }}
            &.active {
            max-height: 130px;
             height: fit-content;
            }
        }
        @media (max-width:500px) {
        width: 300px;

        }
        .dropdown_background {
            width: 100vw;
            height: 100vh;
            position: fixed;
            z-index: 30;
            top: 0;
            left:0;
            background-color: transparent;
        }
        &.active {
              height: 300px;
             min-height: fit-content;

            @media (max-width:400px) {
            width: 310px;
        height: fit-content;

        }
            opacity:1;
                visibility: visible;
            ul {

            li {
                padding:1.5rem 2.4rem;
                opacity:1;
                visibility: visible;
                width: 100%;
                transition: all .4s;
                border-radius:5px;
                @media (max-width:400px) {
                padding:1.7rem 2rem;

                }
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--dark-grey-hover);

               }
            }
           }
        }
        ul {
            z-index: 35;

li { 
    padding: 1.4rem;
    opacity:0;
    visibility: hidden;
    width: 100%;
    &:hover {
       background-color: #f1f1f1;

   }
}
}
        
    }
    .icons2 {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;
        position: absolute;
        right: 2%;
        top: 8px;
        /* z-index:40; */
        cursor: pointer;

        svg {
            font-size: 20px;
        }
        &:hover {
            background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
        }
    }
    img {
        object-fit: cover;
    }
    .feedtags_wrapper {
        /* justify-content:center; */
        gap:5rem;
        @media (max-width:580px) {
            gap:1rem;
        }
    }
    /* .wrapper {
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        display: grid;
        grid-gap: .5rem;
    } */
    .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        color:rgb(113, 118, 123);
        &:hover {
            color:rgba(29, 156, 240, 0.835) ;
            &.text-3 {
                color:rgba(223, 0, 104, 0.861) ;

            }
            &.text_2 {

                color:rgba(0, 186, 124, 0.802) ;

            }
            .icons.icon1 {
                background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
            }.icons.icon2 {
                background-color: rgba(0,186,124,.1);
                svg {
                    color:rgba(0, 186, 124, 0.802) ;
                }
            }
            .icons.icon3 {
                background-color: rgba(249,24,128,.1);
                svg {
                    color:rgba(223, 0, 104, 0.861) ;
                }
            }
        }
       .icons {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
        }
    }
}
    h5 {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        @media (max-width:780px) {
            font-size: 15px;
        }
    }
  `,Ie=({modal:t,setModal:p,id:n})=>{const c=C();te.useEffect(()=>{c(ie({Detailsdata:n}))},[n]);const{tweetDetails:r}=u(a=>a.tweet),[h,d]=m.exports.useState(!1),[v,s]=m.exports.useState(!1),{userInfo:l}=u(a=>a.auth),[g,_]=m.exports.useState(""),[f,b]=m.exports.useState([]),o=async a=>{const y=a.target.files;d(!0);const N=new FormData;if(y!==null)for(let x=0;x<y.length;x++)N.append("files",y[x]);try{const x={headers:{"Content-Type":"multipart/form-data"}},{data:j}=await se.post("/api/v1/upload",N,x);b(j.urls),s(!0),d(!1)}catch(x){console.log(x)}},w=()=>{var a;c(ce({quote_image:f,quote_text:g,_id:r==null?void 0:r._id,quote_user_id:(a=r==null?void 0:r.tweet_user_id)==null?void 0:a._id})),p(!1)};return i(Fe,{as:k.div,initial:{opacity:0,visibility:"hidden"},exit:{opacity:0,visibility:"hidden"},animate:{opacity:1,visibility:"visible"},children:[e("div",{className:"backdrop",onClick:()=>p(!1)}),e(k.div,{variants:$,initial:"hidden",animate:"visible",exit:"exit",className:"deleteCard shadow gap-2",children:i("div",{className:"top w-100 flex column gap-2",children:[e("div",{className:"w-90 topHeader auto",children:e("div",{onClick:()=>p(!1),className:"icons text-dark flex item-center justify-center",children:e(ae,{fontSize:"20px"})})}),i("div",{className:"flex w-100 column gap-1",children:[i("div",{className:"w-90  auto flex item-start gap-1",children:[l!=null&&l.profile_image_url?e("img",{src:l==null?void 0:l.profile_image_url,alt:"images-avatar",className:"avatar"}):e("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar",className:"avatar"}),i("div",{style:{gap:"6px"},className:"area flex column flex-1 item-start",children:[e("div",{style:{color:"rgb(29, 155, 240)",fontSize:"14px"},className:"replyBtn1 text-bold",children:"Everyone"}),e("textarea",{name:"text",value:g,onChange:a=>_(a.target.value),placeholder:"Add a Comment",className:"text text-light w-100"}),i("div",{className:"w-100 auto",children:[h&&e("div",{className:"flex item-center py-2 justify-center",children:e(ye,{style:{width:"30px",height:"30px",fontSize:"15px"},color:"primary"})}),f.length!==0&&e(re,{images:f,setImages:b})]}),e("div",{className:"w-100",children:e(Me,{})})]})]}),i("div",{className:"bottom w-100",children:[e("div",{className:"w-90 auto flex item-start",children:i("div",{style:{gap:"5px"},className:"flex replyBtn item-center gap-1",children:[e(le,{}),e("span",{style:{color:"rgb(29, 155, 240)",fontSize:"13px"},className:"fs-12 text-bold",children:"Everyone can reply"})]})}),i("div",{className:"flex w-90 auto item-center justify-space",children:[i("div",{className:"flex item-center",children:[i("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),e(oe,{})]}),i("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),e(Q,{})]}),i("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),e(ne,{})]}),i("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),e(de,{})]}),i("label",{htmlFor:"upload",className:"icons flex item-center justify-center",children:[e("input",{type:"file",id:"upload",placeholder:"Gig Image",autoComplete:"off",style:{display:"none"},onChange:o,multiple:!0,className:"w-100"}),e(Q,{})]})]}),e("div",{onClick:w,className:"btn btn-3 fs-14 text-extra-bold text-white",children:"Reply"})]})]})]})]})})]})},Fe=S(k.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 5800;
  align-items: start;
  justify-content: center;
  top: 0;
  overflow: hidden;
  .top {
    max-height: 600px;
    overflow:auto;
    border-radius: 20px;
  }
  .replyBtn {
    padding:4px 10px;
    border-radius:20px;
    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }
   .replyBtn1 {
    padding:2px 15px;
    border-radius:20px;
    border:1px solid rgba(0,0,0,.4);
    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }
  .topHeader {
      background-color: var(--top1);
  backdrop-filter: blur(12px);
  position:sticky;
  left:0;
  top:0;
    z-index: 3000;
  }
.bottom {
    border-top: 1px solid var(--border);
    padding:10px 0;
    padding-bottom:6px;
      background-color: var(--top1);
  backdrop-filter: blur(12px);
  position:sticky;
  left:0;
  bottom:0;
    z-index: 3000;
}
.btn.btn-3 {
  background:var(--blue-1);
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
        color:var(--dark-1);
        &::placeholder {
            font-size: 20px;
            color:var(--grey-1);
            font-weight: light;
        }
    }

  .avatar {
        width: 4rem !important;
        height: 4rem !important;
        border-radius: 50%;
        object-fit: cover;
    
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
  .icons:hover {
  background:rgba(29, 155, 240, 0.1) !important;
  }
 
  .backdrop {
    background: var(--backdrop);
    z-index:200000;
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
    overflow: hidden;

    flex-direction: column;
    background: var(--white);
    border-radius: 14px;
    box-shadow:var(--shadow);

    position: relative;
    margin-top:2rem;
     @media (max-width:480px) {
     
       max-width: 100vw;
    min-width: 100vw;
    border-radius: 0px;

    }
  }
`,Le=({handleQuoteModal:t,setTweet:p,quote:n,setQuote:c,likelength:r,handleLikeTweet:h,isliked:d})=>{var w;const{userDetails:v,userInfo:s}=u(a=>a.auth),{tweetDetails:l,tweets:g,userIdIncludedInTweetLikesArray:_}=u(a=>a.tweet),f=C(),b=()=>{c(!1),f(he({Detailsdata:l==null?void 0:l._id}))};return(w=g==null?void 0:g.find(a=>(a==null?void 0:a._id)===(l==null?void 0:l._id)))==null||w.tweet_likes.includes(s==null?void 0:s._id),e(me,{children:e("div",{className:"w-100 flex item-center",children:e("div",{className:"flex item-center w-100 gap-2",children:e("div",{className:"flex item-center w-90 auto gap-2",children:i("div",{className:"flex w-100 item-center fs-14 text-light justify-start feedtags_wrapper text-dark",children:[e("div",{onClick:()=>p(!0),className:"flex iconwrapper flex-1 item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon1 flex item-center justify-center",children:e(ue,{})})}),i("div",{className:"flex iconwrapper flex-1 relative justify-center text_2 item-center",style:{gap:".3rem"},children:[i("div",{className:n?"dropdownCard card1  flex column active":"dropdownCard card1  flex column",children:[e("div",{onClick:()=>c(!1),className:"dropdown_background"}),i("ul",{className:"flex column w-100 text-bold",children:[i("li",{style:{gap:"10px"},onClick:b,className:"flex fs-15 text-dark text-extra-bold justify-center item-center",children:[e("div",{className:" flex item-center justify-center",children:e(q,{type:"large"})}),"Retweet"]}),i("li",{style:{gap:"10px"},onClick:t,className:"flex fs-15 text-dark text-extra-bold justify-center item-center",children:[e("div",{className:" flex item-center justify-center",children:e(Y,{})}),"Quote "]})]})]}),e("div",{onClick:()=>c(!0),className:"icons icon2 flex item-center justify-center",children:e(q,{})})]}),i("div",{onClick:h,className:"flex iconwrapper flex-1 justify-center text-3 item-center",style:{gap:".3rem"},children:[e("div",{className:"icons icon3 flex item-center justify-center",children:e(ve,{isClicked:d})}),r]}),e("div",{className:"flex iconwrapper flex-1 justify-center item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon1 flex item-center justify-center",children:e(be,{})})}),e("div",{className:"flex iconwrapper flex-1 justify-center item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon1 flex item-center justify-center",children:e(we,{})})})]})})})})})},Ge=t=>{var B,I,F,L,H,T,A,E,R,V,G;const{userDetails:p,userInfo:n}=u(z=>z.auth);u(z=>z.tweet);const c=((B=t==null?void 0:t.tweet_user_id)==null?void 0:B._id)===(n==null?void 0:n._id),r=P(t==null?void 0:t.createdAt),h=P(),d=h.diff(r,"hours"),v=h.diff(r,"minutes");let s;d<1?s=`${v}min`:d<24?s=`${d}hr`:s=r.format("MMMD");const[l,g]=m.exports.useState(!1),[_,f]=m.exports.useState(!1),[b,o]=m.exports.useState(!1),[w,a]=m.exports.useState(!1),[y,N]=m.exports.useState(!1),x=C(),j=()=>{x(xe({Detailsdata:t==null?void 0:t._id}))};(I=t==null?void 0:t.tweet_likes)==null||I.length;const X=()=>{x(ge({Detailsdata:t==null?void 0:t._id})),f(!1)},J=()=>{f(!0),o(!1)},K=()=>{N(!0),o(!1)},O=(F=t==null?void 0:t.tweet_likes)==null?void 0:F.includes(n==null?void 0:n._id);return i(He,{children:[e(M,{initial:!1,exitBeforeEnter:!0,onExitComplete:()=>null,children:_&&e(Se,{handleDeleteTweet:X,modal:_,setModal:f})}),e(M,{initial:!1,exitBeforeEnter:!0,onExitComplete:()=>null,children:y&&e(Ie,{id:t==null?void 0:t._id,modal:y,setModal:N})}),i("div",{className:b?"dropdownCard  flex column active":"dropdownCard  flex column",children:[e("div",{onClick:()=>o(!1),className:"dropdown_background"}),i("ul",{style:{fontSize:"14.6px"},className:"flex column w-100 text-bold",children:[c&&i("li",{onClick:J,style:{color:"rgb(244, 33, 46)"},className:"flex text-extra-bold item-center gap-1",children:[e(ze,{}),"Delete"]}),i("li",{onClick:()=>o(!1),className:"flex item-center gap-1",children:[e(ke,{})," Not interested in this tweet"]}),i("li",{onClick:()=>o(!1),className:"flex item-center gap-1",children:[e(Y,{}),"  Follow Alexander"]}),i("li",{onClick:()=>o(!1),className:"flex item-center gap-1",children:[e(Ce,{})," Mute Alexander"]}),i("li",{onClick:()=>o(!1),className:"flex item-center gap-1",children:[e(Ne,{})," Block Alexander"]}),i("li",{onClick:()=>o(!1),className:"flex item-center gap-1",children:[e(_e,{})," Report tweet"]})]})]}),e(M,{initial:!1,exitBeforeEnter:!0,onExitComplete:()=>null,children:l&&e(fe,{id:t==null?void 0:t._id,setModal:g,modal:l})}),e("div",{onClick:()=>o(!0),className:"icons2 flex item-center justify-center",children:e(pe,{fontSize:"20px",color:"var(--dark-grey)"})}),i("div",{className:"flex w-90 auto item-start feed_card_wrapper gap-1",children:[i(U,{to:`/${(L=t==null?void 0:t.tweet_user_id)==null?void 0:L.name}`,className:"image_wrapper",children:[e("div",{className:"image_gradient"}),(H=t==null?void 0:t.tweet_user_id)!=null&&H.profile_image_url?e("img",{src:(T=t==null?void 0:t.tweet_user_id)==null?void 0:T.profile_image_url,alt:"images-avatar",className:"avatar_profile"}):e("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar_profile",className:"avatar_profile"})]}),i("div",{className:"flex column flex-1",style:{gap:".7rem"},children:[i(U,{style:{gap:".5rem"},to:`/${(A=t==null?void 0:t.tweet_user_id)==null?void 0:A.name}/status/${t._id}`,className:"flex-1 flex column ",children:[i("h4",{className:"fs-16 text-dark text-extra-bold relative flex item-center",style:{gap:".4rem"},children:[i("div",{style:{gap:".3rem"},className:"tweet_user flex item-center",children:[(E=t==null?void 0:t.tweet_user_id)==null?void 0:E.display_name,e("span",{className:"flex item-center",children:e(D,{color:"var(--blue-1)"})}),i("span",{style:{fontSize:"15px"},className:"text-light  text-grey ",children:["@",(R=t==null?void 0:t.tweet_user_id)==null?void 0:R.name]})]}),e("span",{style:{fontSize:"15px"},className:"date text-light text-grey ",children:s})]}),e("h5",{style:{lineHeight:"20px"},className:"text_dark_grey fs-15 text-light family1",children:t.tweet_text}),((V=t.tweet_image)==null?void 0:V.length)>0&&e("div",{className:"w-100 wrapper",children:e(W,{images:t.tweet_image})})]}),e(Le,{isliked:O,handleQuoteModal:K,setTweet:g,quote:w,likelength:(G=t==null?void 0:t.tweet_likes)==null?void 0:G.length,handleLikeTweet:j,setQuote:a,setQuoteModal:function(z){throw new Error("Function not implemented.")}})]})]})]},t._id)},He=S.div`
    width: 100%;
    padding: 1.7rem .7rem;
    padding-bottom:.6rem;
   position: relative;
    border-bottom: 1px solid var(--border);
    &:hover {
        background-color: var(--dark-grey-hover);
    }
    .tweet_user {
        overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* max-width: 250px; */
  @media (max-width:580px) {
    max-width: 290px;
  }
  @media (max-width:500px) {
    max-width: 180px;
  }
   @media (max-width:380px) {
    max-width: 150px;
  }
  
    }
     .image_wrapper {
      width:5rem;
      height:5rem;
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
      z-index: 200;
      position: absolute;
      background:rgba(0,0,0,.5);
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      position: absolute;
      object-fit: cover;
    }
    }
    .date {
        position: relative;
        transform: translateX(10px);
        &::after {
            width: 2px;
            content: '';
            border-radius: 50%;
            background-color: var(--grey-1);
            position: absolute;
            left: -20px;
            top: 50%;
            height: 2px;
            transform: translate(15px,-50%);
        }
    }
    h5 {
        font-weight: 600;
        font-size: 15px;
    }
    .dropdownCard {
        position: absolute;
        right: 2%;
        top: 8px;
        z-index: 2000;
        cursor: pointer;
        width: 370px;
        border-radius: 10px;
        box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
        background-color: var(--white);
        height: 0;
        transition: all .3s;    
        opacity:0;
        visibility: hidden;
        &.card1 {
        width: 110px;
        right: -40%;
        box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
        &.active {
            ul {
            li {
                padding:1.2rem 1rem;
            }
        }
        }
       
        &.active {
             @media (max-width:500px)  {
            width: 130px;

        }
         @media (max-width:400px)  {
            width: 130px;

        }
        }
        @media (max-width:500px)  {
            width: 130px;

        }
         @media (max-width:400px)  {
            width: 130px;

        }
        
   ul {

            li {
                padding:.7rem 2.4rem;
            }}
            &.active {
            max-height: 130px;
             height: fit-content;
            }
        }
        @media (max-width:500px) {
        width: 300px;

        }
        .dropdown_background {
            width: 100vw;
            height: 100vh;
            position: fixed;
            z-index: 30;
            top: 0;
            left:0;
            background-color: transparent;
        }
        &.active {
              height: 300px;
             min-height: fit-content;

            @media (max-width:400px) {
            width: 310px;
        height: fit-content;

        }
            opacity:1;
                visibility: visible;
            ul {

            li {
                padding:1.5rem 2.4rem;
                opacity:1;
                visibility: visible;
                width: 100%;
                transition: all .4s;
                border-radius:5px;
                @media (max-width:400px) {
                padding:1.7rem 2rem;

                }
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--dark-grey-hover);

               }
            }
           }
        }
        ul {
            z-index: 35;

li { 
    padding: 1.2rem;
    opacity:0;
    visibility: hidden;
    width: 100%;
    &:hover {
       background-color: #f1f1f1;

   }
}
}
        
    }
    .icons2 {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;
        position: absolute;
        right: 2%;
        top: 8px;
        /* z-index:40; */
        cursor: pointer;

        svg {
            font-size: 20px;
        }
        &:hover {
            background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
        }
    }
    img {
        object-fit: cover;
    }
    .feedtags_wrapper {
        /* justify-content:center; */
        gap:5rem;
        @media (max-width:580px) {
            gap:1rem;
        }
    }
    /* .wrapper {
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        display: grid;
        grid-gap: .5rem;
    } */
    .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        color:rgb(113, 118, 123);
        &:hover {
            color:rgba(29, 156, 240, 0.835) ;
            &.text-3 {
                color:rgba(223, 0, 104, 0.861) ;

            }
            &.text_2 {

                color:rgba(0, 186, 124, 0.802) ;

            }
            .icons.icon1 {
                background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
            }.icons.icon2 {
                background-color: rgba(0,186,124,.1);
                svg {
                    color:rgba(0, 186, 124, 0.802) ;
                }
            }
            .icons.icon3 {
                background-color: rgba(249,24,128,.1);
                svg {
                    color:rgba(223, 0, 104, 0.861) ;
                }
            }
        }
       .icons {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
        }
    }
}
    h5 {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        @media (max-width:780px) {
            font-size: 15px;
        }
    }
  `;export{Ge as F};
