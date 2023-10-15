import{u as m,a as s,j as r,c as t,a1 as v,F as g,a8 as w,L as f,a9 as y,aa as N,Y as u,f as k,_,r as h,R as S,b as z,ab as j,ac as T,l as M,H as L,m as A}from"./index.72231933.js";import{h as H}from"./moment.9709ab41.js";import{I as P,a as B}from"./index.esm.fca25ec3.js";import{A as C}from"./EditProfileModal.0219fa9b.js";import{F as Y}from"./FeedCard.cecde406.js";import{C as F}from"./CircularProgress.2f81e93f.js";import"./camera.c4a218e0.js";import"./clsx.6783245b.js";import"./TweetModal.3bd328c9.js";import"./share.4a2e5bcd.js";const I=()=>{const{userDetails:a}=s(e=>e.auth);return r(V,{children:[r("div",{className:"absolute w-100 h-100",children:[t("div",{className:"image_gradient"}),(a==null?void 0:a.profile_banners)&&t("img",{src:a==null?void 0:a.profile_banners,alt:"",className:"w-100 h-100 banner "})]}),r("div",{className:"image_wrapper",children:[a!=null&&a.profile_image_url?t("img",{src:a==null?void 0:a.profile_image_url,alt:"images-avatar",className:"avatar_profile"}):t("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar_profile",className:"avatar_profile"}),"  ",t("div",{className:"image_gradient"})]})]})},V=m.div`
    width: 100%;
    height: 25rem;
    background-color: var(--grey-3);
    position: relative;
    .image_gradient {
      width:100%;
      height:100%;
      position: absolute;
      background:rgba(0,0,0,.1);
      z-index: 20;
      transition:all .5s;
    }
    .banner {
        width:100%;
      height:100%;
      /* transform: translateY(-100%); */
      position: absolute;
      object-fit: cover;
    }
    .image_wrapper {
      width:15rem;
      height:15rem;
      border-radius:50%;
      position: absolute;
      bottom:-30%;
      z-index: 30;
      left:2%;
      cursor:pointer;
      border:5px solid var(--white);
         .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      position: absolute;
      background:rgba(0,0,0,.5);
      opacity:0;
      z-index: 20;
      transition:all .5s;
    }
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
  
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      object-fit: cover;
    }
    }

`;function E(a){return v({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Zm0,128H40V160H216v40Z"}}]})(a)}function O(a){return v({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(a)}const $=({setModal:a})=>{var i,p;const{userDetails:e,userInfo:o}=s(n=>n.auth),d=(e==null?void 0:e._id)===(o==null?void 0:o._id),l=H(e==null?void 0:e.createdAt).format("MMM YYYY");return r(R,{style:{marginTop:"2rem"},className:"flex column gap-1",children:[t("div",{className:"w-90 auto flex item-center justify-space",children:r("div",{className:"flex gap-1 item-center justify-end w-100",children:[!d&&r(g,{children:[t("div",{className:"icons flex item-center justify-center",children:t(w,{color:"var(--dark-1)",fontSize:"20px"})}),t(f,{to:`/messages/${e==null?void 0:e._id}-${o==null?void 0:o._id}`,className:"icons flex item-center justify-center",children:t(O,{color:"var(--dark-1)",fontSize:"24px"})}),t("div",{className:"icons flex item-center justify-center",children:t(y,{color:"var(--dark-1)",fontSize:"24px"})})]}),d?t("div",{className:"profileBtn text-dark text-bold",onClick:()=>a(!0),children:"Edit Profile"}):t("div",{className:"profileBtn followbtn text-dark text-bold",children:"Follow"})]})}),r("div",{className:"w-90 flex column gap-1 auto",children:[r("h3",{className:"fs-24 text-extra-bold",children:[e==null?void 0:e.name,r("div",{style:{marginTop:"3px"},className:"block fs-14 text-grey2 text-light",children:["@",e==null?void 0:e.display_name]})]}),(e==null?void 0:e.bio)&&t("h4",{className:"fs-16 text-light",children:e==null?void 0:e.bio}),r("div",{style:{gap:"1.2rem"},className:"flex flex-wrap fs-15 text-grey2 text-light item-center w-100",children:[(e==null?void 0:e.profession)&&r("div",{className:"flex item-center",style:{gap:".5rem"},children:[t(E,{fontSize:"18px"}),e==null?void 0:e.profession]}),(e==null?void 0:e.country)&&r("div",{className:"flex item-center",style:{gap:".5rem"},children:[t(P,{fontSize:"18px",color:"var(--dark-1)"}),e==null?void 0:e.country]}),(e==null?void 0:e.website)&&r("div",{className:"flex item-center",style:{gap:".5rem"},children:[t(N,{fontSize:"18px",color:"var(--dark-1)"}),e==null?void 0:e.website]}),r("div",{className:"flex item-center",style:{gap:".5rem"},children:[t(B,{fontSize:"18px"}),"Joined ",l]})]}),r("div",{className:"flex flex-wrap fs-14 text-light item-center w-100 gap-3",children:[r(f,{to:`/${e==null?void 0:e.name}/following`,className:"text-bold text-dark flex item-center",style:{gap:".5rem"},children:[((i=e==null?void 0:e.followings)==null?void 0:i.length)||0," ",t("div",{className:"text-light text-grey2",children:"Following"})]})," ",r(f,{to:`/${e==null?void 0:e.name}/followers`,className:"text-bold text-dark flex item-center",style:{gap:".5rem"},children:[((p=e==null?void 0:e.followers)==null?void 0:p.length)||0," ",t("div",{className:" text-light text-grey2",children:"Followers"})]})]})]})]})},R=m.div`
    width: 100%;
    padding-top:2rem;
    position: relative;
    a:hover {
      text-decoration: underline;
    }
    .avatar_profile {
      width:12rem;
      height:12rem;
      border-radius:50%;
      top:-100px;
      /* transform: translateY(-100%); */
      position: absolute;
      border:5px solid #fff;
    }
    .icons {
  border:1px solid rgba(0,0,0,.1);
  cursor: pointer;
  &:hover {
    background:var(--grey-hover) !important;
  }

    }
    .profileBtn {
      z-index: 300;
  border-radius: 40px;
  text-align: center;
  padding: 1rem 2rem;
  font-size:15px;
  transition: all .4s;
  border:1px solid var(--border1);
    cursor: pointer;

  &.followbtn {
    background:var(--dark-1);
    color:#fff;
    &:hover {
      opacity:.9;
    background:var(--dark-grey-hover);

    }
  }
  &:hover {
    background:var(--grey-2);
  }
    }
    
  `,W=({setModal:a})=>{const{userDetails:e}=s(l=>l.auth),{tweets:o,tweetisLoading:d}=s(l=>l.tweet);return t(Z,{className:"w-100",children:r("div",{className:"flex item-center gap-2 w-90 auto",children:[t(f,{to:"/",className:"icons flex item-center justify-center",children:t(u,{color:"var(--dark-1)",fontSize:"20px"})}),r("h3",{className:"fs-20 text-extra-bold text-dark",children:[e==null?void 0:e.name,r("span",{style:{marginTop:"4px"},className:"flex item-center gap-1 fs-14 text-light text-dark",children:[d?t("div",{className:"flex justify-center",children:t(k,{type:"small"})}):r(g,{children:[o.length," "," "]}),"Tweets"]})]})]})})},Z=m.div`
    width: 100%;
    color: #fff;
  position: sticky;
  top: 0;
  background-color: var(--top);
  z-index: 300;
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  padding:1rem 0;
  border-bottom: 1px solid rgba(0,0,0,.1);
  /* backdrop-filter: c; */
  `,G=()=>{const{name:a}=_(),[e,o]=h.exports.useState(0),[d,l]=S.useState(!1),{userDetails:i,userprofileisSuccess:p}=s(c=>c.auth),{tweets:n,tweetisLoading:b}=s(c=>c.tweet),x=z();return h.exports.useEffect(()=>{a&&x(j(a))},[a]),h.exports.useEffect(()=>{i!=null&&i._id&&x(T(i==null?void 0:i._id))},[i==null?void 0:i._id,p]),r(U,{children:[t(M,{}),t(L,{initial:!1,exitBeforeEnter:!0,children:d&&t(C,{modal:d,setModal:l})}),r("div",{className:"flex flex-1 wraps column ",children:[t(W,{}),r("div",{className:"flex column",children:[t(I,{}),t($,{setModal:l})]}),r("div",{className:"w-100 flex py-2 column",children:[r("div",{className:"w-100 flex item-center text-bold fs-16 profilelist",children:[t("div",{className:"flex-1 profileTag",children:t("div",{onClick:()=>o(0),className:e===0?"tag active":"tag text-light",children:"Tweets"})}),t("div",{className:"flex-1 profileTag",children:t("div",{onClick:()=>o(1),className:e===1?"tag active":"tag text-light",children:"Replies"})}),t("div",{className:"flex-1 profileTag",children:t("div",{onClick:()=>o(2),className:e===2?"tag active":"tag text-light",children:"Media"})}),t("div",{className:"flex-1 profileTag",children:t("div",{onClick:()=>o(4),className:e===4?"tag active":"tag text-light",children:"Likes"})})]}),(n==null?void 0:n.length)===0?t("div",{className:"flex w-85 auto py-2 item-center justify-center",children:r("h2",{style:{lineHeight:"1.3",width:"60%"},className:"fs-30 w-85 auto text-bold",children:["@",i==null?void 0:i.display_name," hasn\u2019t posted",t("span",{className:"text-light fs-14 block text-grey",children:"When they do, their posts will show up here."})]})}):t("div",{className:"w-100 h-100 wrapper",children:b?t("div",{className:"flex py-2 w-100 justify-center",children:t(F,{style:{width:"30px",height:"30px",fontSize:"30px"},color:"primary"})}):t(g,{children:n==null?void 0:n.map(c=>h.exports.createElement(Y,{...c,key:c._id}))})})]})]}),t(A,{types:"profile"})]})},U=m.div`
    width: 100%;
    display:flex;
    gap:1rem;
    height: 100vh;
    overflow: auto;
    align-items: flex-start;
  border-right: 1px solid var(--border);
  border-left: 1px solid var(--border);

    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }
     .tag {
        cursor: pointer;
            width: max-content;
            margin: 0 auto;
            /* background-color: red; */
            position: relative;
            &.active {
            position: relative;
             &::after {
                position: absolute;
                width: 100%;
                content: '';
                left: 0;
                background-color: var(--blue-1);
                height: 4px;
                border-radius: 10px;
                bottom: -100%;
            }
            }
           
        }
    .profilelist {
        border-bottom:1px solid var(--border);
        .profileTag {
            padding:1.7rem 2rem;
            text-align:center;
            
            &:hover {
                background:var(--grey-2);
            }
        }
    }
    .wraps {
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);
        /* min-height: 50vh; */
        min-height: 150vh;
        @media (max-width:980px) {
    border-right : 1px solid var(--border);

        }
    }

  `,oe=()=>t(J,{children:t(G,{})}),J=m.div`
  width: 100%;
  position: relative;
`;export{oe as default};
