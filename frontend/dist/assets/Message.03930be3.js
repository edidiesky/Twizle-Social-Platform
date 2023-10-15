import{a1 as w,u as _,_ as k,r as b,a as N,b as M,ae as S,c as t,j as a,N as x,y as j,l as D,af as L}from"./index.72231933.js";import{h as f}from"./moment.9709ab41.js";function A(r){return w({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(r)}function C(r){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"}}]})(r)}function $(r){return w({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}},{tag:"path",attr:{d:"M19 16v6"}},{tag:"path",attr:{d:"M16 19h6"}}]})(r)}const z=()=>{k(),b.exports.useState([]);const{userInfo:r}=N(e=>e.auth),{conversation:i}=N(e=>e.conversation),y=M();return b.exports.useEffect(()=>{y(S(r==null?void 0:r._id))},[]),t(B,{children:a("div",{className:"flex column w-100 column gap-2",children:[t("div",{className:"top1 w-100 auto ",children:a("div",{className:"w-90 auto flex item-center justify-space",children:[t("h3",{className:"fs-20 text-bold text-dark",children:"Messages"}),a("div",{className:"flex item-center justify-end",children:[t("div",{className:"icons flex item-center justify-center",children:t(A,{fontSize:"20px",color:"var(--dark-1)"})}),t("div",{className:"icons flex item-center justify-center",children:t($,{fontSize:"20px",color:"var(--dark-1)"})})]})]})}),(i==null?void 0:i.length)!==0&&a("div",{className:"search w-90 auto flex item-center justify-center gap-1",children:[t(C,{fontSize:"20px",color:"var(--grey-1)"}),t("input",{type:"text",placeholder:"Search direct messages",className:"searchinput"})]}),t("div",{className:"flex column w-100",children:(i==null?void 0:i.length)===0?a("div",{className:"w-85 auto flex column",children:[a("h3",{className:"fs-30 text-extra-bold",children:["Welcome to your inbox!",t("span",{className:"text-light py-1 block fs-16 text-grey",children:"Drop a line, share posts and more with private conversations between you and others on X. "})]}),t("div",{className:"w-100 flex item-start",children:t("div",{className:"btn btn-1 fs-16 text-white text-bold",children:"Write Messages"})})]}):a("div",{className:"w-100",children:[i==null?void 0:i.map((e,u)=>{var d,c,m,h,p,g;const l=f(e==null?void 0:e.updatedAt),n=f(),o=n.diff(l,"hours"),v=n.diff(l,"minutes");let s;return o<1?s=`${v}min`:o<24?s=`${o}hr`:(o>24,s=l.format("MMMD")),((d=e==null?void 0:e.sender)==null?void 0:d._id)!==(r==null?void 0:r._id)&&t(x,{to:`/messages/${(c=e==null?void 0:e.sender)==null?void 0:c._id}-${(m=e==null?void 0:e.receiver)==null?void 0:m._id}`,className:"messageCard w-100 flex item-start justify-space",children:a("div",{className:"flex item-start gap-1",children:[a("div",{className:"image_wrapper",children:[t("img",{src:(h=e.sender)==null?void 0:h.profile_image_url,alt:"tweet_comment_image",className:"avatar_profile w-100 h-100"}),t("div",{className:"image_gradient"})]}),a("div",{className:"flex flex-1 column item-start",style:{gap:".4rem"},children:[a("h4",{className:"fs-16 tweet_user text-bold text_dark_grey flex item-center",style:{gap:".2rem"},children:[(p=e==null?void 0:e.sender)==null?void 0:p.display_name,t("span",{className:"flex item-center",children:t(j,{color:"var(--blue-1)"})}),a("span",{className:"text-light fs-14 text-grey",children:["@",(g=e==null?void 0:e.sender)==null?void 0:g.name]}),t("span",{className:"text-light date fs-15 text-grey",children:s})]}),t("h5",{className:"fs-14 text-light text-grey",children:e.lastMessage})]})]})},u)}),i==null?void 0:i.map((e,u)=>{var d,c,m,h,p,g;const l=f(e==null?void 0:e.updatedAt),n=f(),o=n.diff(l,"hours"),v=n.diff(l,"minutes");let s;return o<1?s=`${v}min`:o<24?s=`${o}hr`:(o>24,s=l.format("MMMD")),((d=e==null?void 0:e.receiver)==null?void 0:d._id)!==(r==null?void 0:r._id)&&t(x,{to:`/messages/${(c=e==null?void 0:e.sender)==null?void 0:c._id}-${(m=e==null?void 0:e.receiver)==null?void 0:m._id}`,className:"messageCard w-100 flex item-start justify-space",children:a("div",{className:"flex item-start gap-1",children:[a("div",{className:"image_wrapper",children:[t("img",{src:(h=e.receiver)==null?void 0:h.profile_image_url,alt:"tweet_comment_image",className:"avatar_profile w-100 h-100"}),t("div",{className:"image_gradient"})]}),a("div",{className:"flex  flex-1 item-start column ",style:{gap:".4rem"},children:[a("h4",{className:"fs-16  text-bold text_dark_grey flex item-center",style:{gap:".2rem"},children:[t("span",{className:"tweet_user",children:(p=e==null?void 0:e.receiver)==null?void 0:p.display_name}),a("span",{className:"text-light fs-14 tweet_user text-grey ",children:["@",(g=e==null?void 0:e.receiver)==null?void 0:g.name]}),t("span",{className:"text-light fs-15 text-grey date",children:s})]}),t("h5",{className:"fs-14 text-light text-grey",children:e.lastMessage})]})]})},u)})]})})]})})},B=_.div`
        flex:0 0 370px;
        overflow:auto;
        height: 100vh;
        /* background-color: red; */
          .tweet_user {
        overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100px;
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
        .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        flex:1;

        .wrapper {
        }
        &:hover {
            color:rgba(29, 156, 240, 0.835) ;
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
        }
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
      /* transform: translateY(-100%); */
      position: absolute;
      
    }
    }

        .search {
            padding: 1.2rem 2rem;
            border: 1px solid var(--border);
            border-radius: 40px;
            .searchinput {
    background: transparent;
    outline: none;
    border: none;
    font-size: 1.6rem;
    font-weight: normal;
    font-family: inherit;

            }
        }
        .messageCard {
        width: 100%;
    padding:1.5rem 2rem;
    &.active {
        background-color: #F4F6F7;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 2px;
            background-color: var(--blue-1);
            height: 100%;
            right: 0;
            top: 0;
        }
    }
    &:hover {
        /* background-color: #f1f1f1; */
        background-color: var(--dark-grey-hover);
    }
    }
            .top1 {
position: sticky;
  top: 0;
  background-color: var(--top);
  z-index: 3000;
  padding: 1rem 0;
  backdrop-filter: blur(12px);
        }
       .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
        }
    }


  `,W=()=>a(F,{children:[t(D,{}),a("div",{className:"content flex item-start",children:[t(z,{}),t(L,{})]})]}),F=_.div`
    width: 100%;
    display:flex;
    gap:1rem;
    /* height: 100vh;
    overflow: auto; */
    align-items: flex-start;
    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }
    .content {
        /* flex:1; */
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);
        overflow:auto;
        height: 100vh;
        width: 72%;
        /* background-color: red; */
        @media (max-width:980px) {
          border-right : 1px solid var(--border);
        }
    }
`;export{W as default};
