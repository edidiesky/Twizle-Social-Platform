import{u as c,a as d,ao as b,R as v,b as u,_ as N,j as a,c as e,L as y,Y as k,ap as _,a8 as F,N as S,r as n,aq as T,l as L,f as P,m as j,am as A}from"./index.72231933.js";import{F as z}from"./FeedCard.cecde406.js";import"./TweetModal.3bd328c9.js";import"./share.4a2e5bcd.js";import"./CircularProgress.2f81e93f.js";import"./clsx.6783245b.js";import"./moment.9709ab41.js";const C=({setModal:m})=>{d(i=>i.auth);let[w,s]=b();const[l,t]=v.useState("");v.useState(0),u(),N(),d(i=>i.auth);const o=i=>{i.preventDefault(),s({q:`${l}`})};return a(U,{className:"w-100 flex column gap-1",children:[a("div",{className:"flex item-center gap-1 w-90 auto",children:[e(y,{to:"/",className:"icons flex item-center justify-center",children:e(k,{color:"var(--dark-1)",fontSize:"20px"})}),e("div",{className:"flex-1",children:e("form",{onSubmit:i=>o(i),className:"w-90 family1 auto flex item-center gap-2",children:a("label",{htmlFor:"search",className:"flex h-100 w-100 item-center gap-2",children:[e(_,{color:"var(--dark-1)"}),e("input",{value:l,name:"search",onChange:i=>t(i.target.value),type:"text",placeholder:"Search",className:"input fs-15 w-100 text-dark text-light"})]})})}),e("div",{className:"icons flex item-center justify-center",children:e(F,{color:"var(--dark-1)",fontSize:"20px"})})]}),a("ul",{className:"w-100 flex item-center text-bold fs-16 profilelist",children:[e("li",{className:"flex-1 profileTag active w-100",children:e(S,{to:"",className:"tag text-dark",children:"Top"})}),e("li",{className:"flex-1 profileTag w-100",children:e("div",{className:"tag text-dark",children:"Latest"})}),e("li",{className:"flex-1 profileTag w-100",children:e("div",{className:"tag text-dark",children:"People"})}),e("li",{className:"flex-1 profileTag w-100",children:e("div",{className:"tag text-dark",children:"Media"})}),e("li",{className:"flex-1 profileTag w-100",children:e("div",{className:"tag text-dark",children:"List"})})]})]})},U=c.div`
    width: 100%;
    color: #fff;
  position: sticky;
  top: 0;
  background-color: var(--top1);
  z-index: 300;
     border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  padding:1rem 0;
   .tag {
        cursor: pointer;
            width: max-content;
            margin: 0 auto;
            /* background-color: red; */
  font-family: "CustomFont_Normal", sans-serif;
  font-weight: normal;
            position: relative;
            &.active {
            position: relative;
            font-weight: 700;
            font-family: "CustomFont_Bold", sans-serif;
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
         form {
   padding:1.2rem 2rem;
    background-color: #EFF3F4;
      border: 1px solid #EFF3F4;

    border-radius: 40px;
    position: sticky;
    top: 0;
    z-index: 3000;

    left: 0;
    &:hover {
      border: 1px solid var(--blue-1);
    }
    @media (max-width: 920px) {
      gap: 0.6rem;
      height: 4.5rem;
    }
   label {
     svg {
      font-size: 20px;
      @media (max-width: 900px) {
        font-size: 28px;
      }
    }
    .input {
      font-family: inherit;
    }
   }
  }
   .profilelist {
        border-bottom:1px solid var(--border);

        .profileTag {
            padding: 2rem;
            text-align:center;
              /* background:var(--grey-hover); */
            &.active {
                background:var(--grey-hover);
            }
            &:hover {
                background:var(--grey-hover);
            }
        }
    }
  /* backdrop-filter: c; */
  `,q=()=>{var h;n.exports.useState(0);let[m,w]=b();const s=m.get("q"),{userInfo:l,userSearchResult:t,tweetSearchResult:o,isLoading:i}=d(r=>r.auth);d(r=>r.tweet);const p=u();n.exports.useEffect(()=>{p(T({authdata:s}))},[s]);const x=r=>{p(A({profiledata:r}))};return a(E,{children:[e(L,{}),a("div",{className:"flex-1 flex wrapper1 item-center",children:[e("div",{style:{height:"100vh"},className:"flex flex-1 item-start column gap-1",children:a("div",{className:"flex w-100  column ",children:[e(C,{}),e("div",{className:"w-100 flex column",children:i?e(P,{type:"small"}):(t==null?void 0:t.length)===0&&(o==null?void 0:o.length)===0?e("div",{className:"flex w-85 auto py-2 item-center justify-center",children:a("h2",{style:{lineHeight:"1.3",width:"60%"},className:"fs-35 w-85 auto text-extra-bold",children:["No results for",a("span",{className:"block",children:['"',s,'"']}),e("span",{className:"text-light fs-14 block text-grey",children:"Try searching for something else, or check your Search settings to see if they\u2019re protecting you from potentially sensitive content."})]})}):a("div",{className:"w-100 wrappers",children:[(t==null?void 0:t.length)!==0&&a("div",{className:"w-100 flex bottom column gap-1",children:[e("h4",{className:"fs-20 w-90 auto text-extra-bold",children:"People"}),(h=t==null?void 0:t.slice(0,3))==null?void 0:h.map(r=>{var f;const g=(f=l==null?void 0:l.followings)==null?void 0:f.includes(r==null?void 0:r._id);return a("div",{className:"w-100 connect_card flex item-start justify-space gap-1",children:[a("div",{className:"image_wrapper",children:[e("img",{src:r!=null&&r.profile_image_url?r==null?void 0:r.profile_image_url:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"tweet_comment_image",className:"avatar_profile w-100 h-100"}),e("div",{className:"image_gradient"})]}),a("div",{className:"flex-1 flex column",style:{gap:".6rem"},children:[a("div",{className:"w-100 flex item-center justify-space",children:[a("h4",{className:"fs-16 text-extra-bold flex column",style:{gap:".1rem"},children:[r==null?void 0:r.display_name,a("span",{className:"block fs-14 text-grey text-light",children:["@",r==null?void 0:r.name]})]}),a("div",{onClick:()=>x(r==null?void 0:r._id),className:"btn text-extra-bold btn-3 fs-14 text-white",children:[g?e("span",{className:"following",children:"Following"}):"Follow",g&&e("span",{className:"unfollow",children:"UnFollow"})]})]}),e("h4",{className:"fs-16 text-light text-dark",children:r==null?void 0:r.bio})]})]})}),(t==null?void 0:t.length)>3&&e("div",{className:"w-100 viewWrapper",children:e("div",{className:"view fs-15",children:"View All"})})]}),e("div",{className:"flex w-100 column",children:o==null?void 0:o.map(r=>n.exports.createElement(z,{...r,key:r._id}))})]})})]})}),e(j,{})]})]})},E=c.div`
    /* width: 100%; */
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
    .viewWrapper {
        padding: 1.5rem;
        &:hover {
            background-color: var(--grey-hover1);
            .view {
                color:var(--blue-1);
            }
        }
        .view {
                color:var(--blue-1);
            }
    }
    
    .bottom {
    border-bottom: 1px solid var(--border);
    padding-bottom: 1rem;

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
            .btn.btn-3 {
             padding: .7rem 1.5rem;

            border: 1px solid var(--border1) !important;
            &:hover {
                .unfollow {
                display: block;
            }
            .following {
                display: none;
            }
            }
            .unfollow {
                display: none;
                color: var(--red);
            }
        
    }
        .image_wrapper {
      width:5rem;
      height:5rem;
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
      background:rgba(0,0,0,.3);
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
      .connect_card {
        width: 100%;
    padding:1.3rem 1.5rem;
    &:hover {
        background-color: var(--grey-hover);
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
    .wrapper1 {
    height: 100vh;
    overflow: auto;

    } 
    .wrappers {
           border-right : 1px solid var(--border);
        /* min-height: 100vh; */
        border-left : 1px solid var(--border);
    }
    .wraps {
        border-right : 1px solid var(--border);
        min-height: 100vh;
        border-left : 1px solid var(--border);
        gap:40rem;
        @media (max-width:980px) {
    border-right : 1px solid var(--border);

        }
    }

  `,O=()=>e(B,{children:e(q,{})}),B=c.div`
  width: 100%;
  position: relative;
  overflow: auto;
`;export{O as default};
