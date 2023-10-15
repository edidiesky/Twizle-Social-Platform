import{u as o,a as d,b as m,j as a,c as e,T as v,L as c,d as b,R as x,e as w,G as g,g as y,f as u,F as f,r as N,o as k,N as S,B as h,P as j,h as _,i as T,k as F,M as C,C as L,l as z,m as B}from"./index.72231933.js";import{F as H}from"./FeedCard.cecde406.js";import{T as P}from"./tweetsection.01e50c76.js";import"./TweetModal.3bd328c9.js";import"./share.4a2e5bcd.js";import"./CircularProgress.2f81e93f.js";import"./clsx.6783245b.js";import"./moment.9709ab41.js";const A=()=>{const{userInfo:t,userDetails:s}=d(r=>r.auth),n=m();return a(D,{className:"w-100",children:[a("div",{style:{paddingTop:"1rem"},className:"flex top2 w-85 auto column gap-1",children:[a("div",{className:"w-100 flex item-center justify-space",children:[e("div",{onClick:()=>n(v("any")),className:"flex-1",children:t!=null&&t.profile_image_url?e("img",{src:t==null?void 0:t.profile_image_url,alt:"images-avatar",className:"avatar"}):e("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar",className:"avatar"})}),e(c,{to:"/",className:"icon flex item-center justify-center",children:e(b,{type:"small"})}),e("div",{className:"flex-1"})]}),a("div",{className:"w-100 flex item-center",children:[e("div",{className:"flex-1 tab text-center fs-15 text-dark text-bold tab-1",children:e("div",{className:"spans text-center",children:"For you"})}),e("div",{className:"flex-1 tab text-center fs-15 text-grey2 text-light tab-2",children:"Following"})]})]}),a("div",{style:{paddingTop:"1rem"},className:"flex top1 column gap-1",children:[e("h2",{style:{fontWeight:"800"},className:"fs-20 text-bold w-90 auto text-dark",children:"Home"}),a("div",{className:"w-100 flex item-center",children:[e("div",{className:"flex-1 tab text-center fs-15 text-dark text-bold tab-1",children:e("div",{className:"spans text-center",children:"For you"})}),e("div",{className:"flex-1 tab text-center fs-15 text-grey2 text-light tab-2",children:"Following"})]})]})]})},D=o.div`
    width: 100%;
    color: #fff;
  position: sticky;
  top: 0;
  /* background-color: rgba(0, 0, 0, 0.65); */
  background-color: var(--top);
  z-index: 3000;
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  /* height: 10rem; */
  border-bottom: 1px solid var(--border);
  /* backdrop-filter: c; */
   .avatar {
        width: 4rem !important;
        height: 4rem !important;
        border-radius: 50%;
        object-fit: cover;
    margin: 0 !important;
    
    }
    .top1 {
        @media (max-width:490px) {
            display:none;
        }
    }
    .top2 {
        @media (min-width:490px) {
            display:none;
        }
    }
  .tab {
    padding:2rem;
    &.tab-1 {
        &:hover {
            /* background-color: #e9e9e9; */
            background-color: var(--grey-hover);
        }
        .spans {
            width: max-content;
            margin: 0 auto;
            /* background-color: red; */
            position: relative;
            &::after {
                position: absolute;
                width: 100%;
                content: '';
                left: 0;
                background-color: var(--blue-1);
                height: 4px;
                border-radius: 10px;
                bottom: -110%;
            }
        }
    }
  }
  `,W=()=>{const{tweets:t,tweetisLoading:s,tweetDetails:n}=d(i=>i.tweet),r=m();return x.useEffect(()=>{r(w({payload:"any"})),r(g()),r(y())},[]),e("div",{className:"w-100 h-100",children:e(E,{children:e("div",{className:"flex w-100 column",children:s?e("div",{className:"flex py-2 w-100 justify-center",children:e(u,{type:"small"})}):e(f,{children:t==null?void 0:t.map(i=>N.exports.createElement(H,{...i,key:i==null?void 0:i._id}))})})})})},E=o.div`
    width: 100%;

  `,M=()=>a(R,{children:[e(A,{}),e("div",{className:"forms w-100",children:e(P,{})}),e(W,{})]}),R=o.div`
        flex:1;
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);

        min-height: 100vh;
        /* background-color: red; */
        @media (max-width:980px) {
    border-right : 1px solid var(--border);
        }
        .forms {
            @media (max-width:490px) {
                display:none;
            }
        }
    
  `,$=()=>{var i,p;const{userInfo:t}=d(l=>l.auth),{sidebar:s}=d(l=>l.tweet),n=m();x.useEffect(()=>{n(g())},[t]);const r=[{title:"Profile",path:"/",icon:e(j,{})},{title:"Verified",path:"/explore",icon:e(_,{})},{title:"Lists",path:"",icon:e(T,{})},{title:"Bookmarks",path:"",icon:e(F,{})},{title:"Messages",path:"/messages",icon:e(C,{})},{title:"Communities",path:"",icon:e(L,{})}];return e(f,{children:a(G,{className:s?"active":"",children:[e("div",{onClick:()=>n(k("any")),className:s?"backdrop active":"backdrop"}),e("div",{className:s?"sidebarWrapper active":"sidebarWrapper",children:a("div",{className:"flex column w-100 leftwrapper auto gap-1",children:[a("div",{className:"w-90 auto py-2 flex column gap-1",children:[e("div",{className:"w-100 flex item-center justify-space",children:e("span",{children:t!=null&&t.profile_image_url?e("img",{src:t==null?void 0:t.profile_image_url,alt:"images-avatar",className:"avatar"}):e("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar",className:"avatar"})})}),a("h4",{className:"fs-20 text-bold",children:[t==null?void 0:t.display_name,a("span",{style:{marginTop:"4px"},className:"block fs-18 text-light text-grey2",children:["@",t==null?void 0:t.name]})]}),a("div",{className:"flex flex-wrap fs-14 text-light item-center w-100 gap-3",children:[a(c,{to:`/${t==null?void 0:t.name}/following`,className:"text-bold text-dark flex item-center",style:{gap:".5rem"},children:[((i=t==null?void 0:t.followings)==null?void 0:i.length)||0," ",e("div",{className:"text-light text-grey2",children:"Following"})]})," ",a(c,{to:`/${t==null?void 0:t.name}/followers`,className:"text-bold text-dark flex item-center",style:{gap:".5rem"},children:[((p=t==null?void 0:t.followers)==null?void 0:p.length)||0," ",e("div",{className:" text-light text-grey2",children:"Followers"})]})]})]}),e("div",{className:"leftTop w-90 auto flex column",children:a("div",{className:"flex w-100 column",children:[e("ul",{className:"flex list1 w-100 column item-start",children:r.map((l,U)=>e("li",{className:"list text-dark fs-20 flex item-center gap-4 text-bold",children:a(S,{className:"text-dark flex item-center gap-3 text-bold",to:l.path,children:[l.icon,e("span",{className:"span",children:l.title})]})}))}),a("ul",{className:"flex w-100 column item-start",children:[a("li",{className:"fs-18 justify-space w-100 text-dark flex item-center gap-4 text-bold",children:[e("span",{children:"Creator Studio"}),e("span",{children:e("div",{className:"icons flex item-center justify-center",children:e(h,{fontSize:"24px"})})})]}),a("li",{className:"fs-18 justify-space w-100 text-dark flex item-center gap-4 text-bold",children:[e("span",{children:"Professional Tools"}),e("span",{children:e("div",{className:"icons flex item-center justify-center",children:e(h,{fontSize:"24px"})})})]})]})]})})]})})]})})},G=o.div`
   width: 100vw;
    height: 100vh;
    overflow:hidden;
   position: fixed;
    z-index:400000;
    transition: all .5s ease;
    opacity: 0;
    visibility: hidden;
     @media (min-width:580px) { 
     display:none;
    }
    &.active {
        opacity: 1;
        visibility: visible;
    }

  .sidebarWrapper {
     width: 70%;
    height: 100vh;
    overflow:auto;
    background-color: var(--white);
    z-index:200;
    position: relative;
    transition: all .6s ease;
    transform: translateX(-100%);
    &.active {
    transform: translateX(0%);

    }
    @media (max-width:380px) { 
     width: 80%;
    }
     @media (max-width:350px) { 
     width: 90%;
    }

  }
   .backdrop {
    background: var(--backdrop);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index:100;
     opacity: 0;
    visibility: hidden;
    &.active {
        opacity: 1;
        visibility: visible;
    }

  }
  .images {
        display: none;
        margin:4rem auto;
 @media (max-width:980px) {
     display: flex;
    align-items: flex-end;
    justify-content: flex-end;
   }
    @media (max-width:780px) {
     display: flex;
    align-items: center;
    justify-content: center;
   }
  
  }
  .sidebarbottom {
@media (max-width:1180px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  }
  .activeLink {
  font-weight: bold;
  color: var(--dark-1);
  transition: color 0.3s ease; /* or any other color to indicate the active link */
}
    .btn {
        width:100%;
        
        margin: 5px 0;
    @media (max-width:1180px) {
        display: none;
    }
    }
    .top {
        @media (max-width:1180px) {
    align-items: flex-end;
    justify-content: flex-end;
  }
  @media (max-width:780px) {
    align-items: center;
    justify-content: center;
  }
    }
    ul {
        &.list1 {
            border-bottom: 1px solid var(--border1);
            padding-bottom: 1.5rem;
        }
    }
    li {
  border-radius: 40px;
  text-align: center;
  padding:14px 1.1rem;
  padding-right: 2rem;
  }

    .profilewrapper {
 border-radius: 40px;
  text-align: center;
  padding:1.5rem .5rem;
  gap:2px;
  margin-bottom: 1.5rem;
  cursor: pointer;
   @media (max-width:1180px) {
        display: none !important;
  }
  .avatar {
        width: 4rem !important;
        height: 4rem !important;
        border-radius: 50%;
        object-fit: cover;
    margin: 0 !important;
    
    }
  @media (max-width:1180px) {
    width:8rem;
    justify-content: center;
    height:8rem;
   
    border-radius: 50%;
    display: grid;
    place-items: center;
    align-self: flex-end;
    margin: 0 !important;
   
    &:hover {
  background-color: var(--grey-hover);
 
  }
  }
  
  &:hover {
  background-color: var(--grey-hover);
 
  }
  h4 {
    @media (max-width:1180px) {
        display: none;
  }

}
    }
    .leftTop {
    }
    .leftwrapper {
        height: 100vh;
   position: sticky;
   top: 0%;
   left:0;
    position:relative;
    }
`,X=()=>(JSON.parse(localStorage.getItem("tweet")||"false"),a(J,{children:[e($,{}),e(z,{}),e(M,{}),e(B,{})]})),J=o.div`
    width: 100%;
    display:flex;
    gap:1rem;
    height: 100vh;
    overflow: auto;
    align-items: flex-start;
    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }
  `,te=()=>e(O,{children:e(X,{})}),O=o.div`
  width: 100%;
  position: relative;
`;export{te as default};
