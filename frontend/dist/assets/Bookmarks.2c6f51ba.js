import{u as c,R as p,a as l,c as e,j as t,a8 as h,r as s,b as x,ad as m,l as f,F as u,m as v}from"./index.72231933.js";import{F as g}from"./FeedCard.cecde406.js";import{C as b}from"./CircularProgress.2f81e93f.js";import"./TweetModal.3bd328c9.js";import"./share.4a2e5bcd.js";import"./moment.9709ab41.js";import"./clsx.6783245b.js";const w=({setModal:d})=>{const[n,r]=p.useState(!1),{userInfo:i}=l(a=>a.auth);return l(a=>a.tweet),e(k,{className:"w-100",children:t("div",{className:"flex item-center gap-2 justify-space w-90 auto",children:[t("h3",{className:"fs-18 text-extra-bold text-dark",children:["Bookmarks",t("span",{style:{marginTop:"1px"},className:"flex item-center gap-1 fs-12 text-light text-dark",children:["@",i==null?void 0:i.email]})]}),t("div",{className:"flex relative",children:[t("div",{className:n?"dropdownCard flex column active":"dropdownCard  flex column",children:[e("div",{onClick:()=>r(!1),className:"dropdown_background"}),e("ul",{onClick:()=>r(!1),className:"flex column w-100",children:e("li",{className:"flex item-center fs-15 text-dark text-extra-bold gap-1",children:"Clear all Bookmarks"})})]}),e("div",{onClick:()=>r(!0),className:"icons flex item-center justify-center",children:e(h,{color:"var(--dark-1)",fontSize:"20px"})})]})]})})},k=c.div`
    width: 100%;
    color: #fff;
  position: sticky;
  top: 0;
  background-color: var(--top);
  z-index: 300;
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  padding:1rem 0;
  border-bottom: 1px solid var(--border);
  /* backdrop-filter: c; */
   .dropdownCard {
        position: absolute;
        right: 2%;
        top: 8px;
        z-index: 40;
        cursor: pointer;
        width: 200px;
        border-radius: 10px;
        box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
        background-color: var(--white);
        box-shadow: var(--shadow);

        height: 0;
        transition: all .6s;    
        opacity:0;
        visibility: hidden;
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
            height: 50px;
            opacity:1;
                visibility: visible;
            ul {
                z-index: 50;
            li {
                padding:1.5rem 2.4rem;
                width: 100%;
                color: var(--red);
                 opacity:1;
                visibility: visible;
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--dark-grey-hover);

               }
            }
           }
        }
         ul {
                z-index: 50;
            li {
                padding:1.5rem 2.4rem;
                width: 100%;
                opacity: 0;
                visibility: hidden;
                color: var(--red);
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--dark-grey-hover);

               }
            }
           }
        
    }
`,y=()=>{s.exports.useState(0),p.useState(!1);const{userInfo:d,userprofileisSuccess:n}=l(o=>o.auth),{bookmarks:r,tweetisLoading:i}=l(o=>o.tweet),a=x();return s.exports.useEffect(()=>{a(m())},[]),t(N,{children:[e(f,{}),t("div",{className:"flex-1 flex wrapper item-center",children:[t("div",{className:"flex flex-1 wraps column ",children:[e(w,{}),e("div",{className:"w-100 flex py-2 column",children:(r==null?void 0:r.length)===0?e("div",{className:"flex w-85 auto py-2 item-center justify-center",children:t("h2",{style:{lineHeight:"1.3",width:"60%"},className:"fs-24 w-85 auto text-extra-bold",children:["@",d==null?void 0:d.display_name," ",e("br",{})," you have no bookmarks",e("span",{className:"text-light fs-14 block text-grey",children:"When they do, their posts will show up here."})]})}):e("div",{className:"w-100",children:i?e("div",{className:"flex py-2 w-100 justify-center",children:e(b,{style:{width:"30px",height:"30px",fontSize:"30px"},color:"primary"})}):e(u,{children:r==null?void 0:r.map(o=>s.exports.createElement(g,{...o,key:o._id}))})})})]}),e(v,{})]})]})},N=c.div`
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
    .wrapper {
        height: 100vh;
    } 
    .wraps {
        border-right : 1px solid var(--border);
        height: 100vh;
        border-left : 1px solid var(--border);
      
        @media (max-width:980px) {
    border-right : 1px solid var(--border);

        }
    }

  `,A=()=>e(S,{children:e(y,{})}),S=c.div`
  width: 100%;
  position: relative;
  overflow: auto;
`;export{A as default};
