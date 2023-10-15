import{u as x,c as e,j as t,L as u,Y as j,r as n,a as g,b as w,Z as z,F as S,H as C,y,I as N,_ as B,R as v,z as T,$ as A,k as M,a0 as I,l as R,m as P}from"./index.72231933.js";import{M as k,R as f,F,L as _,S as L,a as Y}from"./share.4a2e5bcd.js";import{T as E}from"./TweetModal.3bd328c9.js";import{T as Q}from"./tweetsection.01e50c76.js";const $=({setModal:r})=>e(q,{className:"w-100",children:t("div",{className:"flex item-center gap-2 w-90 auto",children:[e(u,{to:"/",className:"icons flex item-center justify-center",children:e(j,{color:"var(--dark-1)",fontSize:"20px"})}),e("h3",{className:"fs-24 text-bold text-dark",children:"Tweets"})]})}),q=x.div`
width: 100%;
color: #fff;
  position: sticky;
  top: 0;
  background-color: var(--top);
  z-index: 30;
  padding: 1rem 0;
  backdrop-filter: blur(12px);
  /* height: 10rem; */
  border-bottom: 1px solid var(--border);
  `,G=()=>{n.exports.useState(!1);const[r,m]=n.exports.useState(!1),[o,p]=n.exports.useState(!1);n.exports.useState(!1);const{comment:s}=g(i=>i.comment),{tweetDetails:a}=g(i=>i.tweet),l=w();return n.exports.useEffect(()=>{a&&l(z(a==null?void 0:a._id))},[a]),t(S,{children:[e(C,{initial:!1,exitBeforeEnter:!0,children:o&&e(E,{id:a==null?void 0:a._id,setModal:p,modal:o})}),e(H,{className:"w-100 flex column ",children:s==null?void 0:s.map((i,c)=>{var d,h,b;return t("div",{className:"postCard w-100 flex item-start justify-space gap-1",children:[t("div",{className:"image_wrapper",children:[e("img",{src:(d=i.user)==null?void 0:d.profile_image_url,alt:"tweet_comment_image",className:"avatar_profile w-100 h-100"}),e("div",{className:"image_gradient"})]}),t("div",{className:"flex flex-1 column gap-1",children:[t("div",{className:"flex item-start justify-space gap-1 w-100 ",style:{gap:".3rem"},children:[t("div",{className:"flex column",children:[t("h4",{className:"fs-16 text-bold flex item-center",style:{gap:".2rem",fontSize:"15px"},children:[(h=i.user)==null?void 0:h.display_name,e("span",{className:"flex item-center",children:e(y,{color:"var(--blue-1)"})}),t("span",{className:"text-light fs-14 text-grey ",children:["@",(b=i.user)==null?void 0:b.name]})]}),e("h5",{style:{fontSize:"16px",marginTop:"6px"},className:" text-light",children:i.text})]}),e("div",{className:"flex item-center justify-end",children:e("div",{className:"icons flex item-center justify-center",children:e(N,{fontSize:"20px"})})})]}),e("div",{className:"w-100 flex justify-space item-center",children:e("div",{className:"flex item-center w-100 auto gap-2",children:e("div",{className:"flex item-center w-90 auto gap-2",children:t("div",{className:"flex w-100 item-center fs-14 text-light justify-center feedtags_wrapper text-dark",children:[e("div",{onClick:()=>p(!0),className:"flex iconwrapper flex-1 item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon1 flex item-center justify-center",children:e(k,{})})}),t("div",{className:"flex iconwrapper flex-1 relative justify-center text_2 item-center",style:{gap:".3rem"},children:[t("div",{className:r?"dropdownCard card1  flex column active":"dropdownCard card1  flex column",children:[e("div",{onClick:()=>m(!1),className:"dropdown_background"}),t("ul",{style:{fontSize:"14px"},className:"flex column w-100 text-bold",children:[t("li",{style:{gap:"5px"},className:"flex fs-16 text-dark text-bold item-center",children:[e("div",{className:"flex-1 flex item-center justify-center",children:e(f,{type:"large"})}),"Retweet"]}),t("li",{style:{gap:"5px"},className:"flex fs-16 text-dark text-bold item-center gap-1",children:[e("div",{className:"flex-1 flex item-center justify-center",children:e(F,{})}),"Quote "]})]})]}),e("div",{onClick:()=>m(!0),className:"icons icon2 flex item-center justify-center",children:e(f,{})})]}),e("div",{className:"flex iconwrapper flex-1 justify-center text-3 item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon3 flex item-center justify-center",children:e(_,{})})}),e("div",{className:"flex iconwrapper flex-1 justify-center item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon1 flex item-center justify-center",children:e(L,{})})}),e("div",{className:"flex iconwrapper flex-1 justify-center item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon1 flex item-center justify-center",children:e(Y,{})})})]})})})})]})]},c)})})]})},H=x.div`

h5 {
    @media (max-width:780px) {
            font-size: 15px;
        }
        @media (max-width:380px) {
            font-size: 13px;
        }
}

    .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

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
    .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        flex:1;
        font-size: 16px !important;
        @media (max-width:500px) {
            font-size: 14px !important;
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
       .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
            @media (max-width:380px) {
            font-size: 20px !important;
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
     .dropdownCard {
        position: absolute;

        right: 2%;
        top: 8px;
        z-index: 20;
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
    .postCard {
        width: 100%;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border);
    &:hover {
        /* background-color: #f1f1f1; */
        background-color: var(--dark-grey-hover);
    }
    }
  `,J=()=>{var p,s,a,l,i;n.exports.useState(!1);const{tweetDetails:r}=g(c=>c.tweet),[m,o]=n.exports.useState(!1);return t(O,{children:[t("div",{className:m?"dropdownCard  flex column active":"dropdownCard  flex column",children:[e("div",{onClick:()=>o(!1),className:"dropdown_background"}),t("ul",{onClick:()=>o(!1),className:"flex column w-100 fs-14 text-bold",children:[e("li",{className:"flex item-center gap-1",children:"Not interested in this tweet"}),e("li",{className:"flex item-center gap-1",children:"Follow Alexander"}),e("li",{className:"flex item-center gap-1",children:"Add or remove @Alexander form lists"}),e("li",{className:"flex item-center gap-1",children:"Mute Alexander"}),e("li",{className:"flex item-center gap-1",children:"Block Alexander"}),e("li",{className:"flex item-center gap-1",children:"Mute tweet"}),e("li",{className:"flex item-center gap-1",children:"Report tweet"})]})]}),t("div",{className:"flex w-90 auto item-start justify-space feed_card_wrapper gap-1",children:[t("div",{className:"flex column gap-1",children:[t("div",{className:"flex-1 item-center flex gap-1",children:[t(u,{to:`/${(p=r==null?void 0:r.tweet_user_id)==null?void 0:p.name}`,className:"image_wrapper",children:[e("div",{className:"image_gradient"}),(s=r==null?void 0:r.tweet_user_id)!=null&&s.profile_image_url?e("img",{src:(a=r==null?void 0:r.tweet_user_id)==null?void 0:a.profile_image_url,alt:"images-avatar",className:"avatar_profile"}):e("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar_profile",className:"avatar_profile"})]}),t("div",{className:"flex column flex-1",style:{gap:".1rem"},children:[t("h4",{className:"fs-16 text-extra-bold flex item-center",style:{gap:".2rem"},children:[(l=r==null?void 0:r.tweet_user_id)==null?void 0:l.display_name,e("span",{className:"flex item-center",children:e(y,{color:"var(--blue-1)"})})]}),t("span",{className:"text-light fs-14 text-grey block",children:["@",(i=r==null?void 0:r.tweet_user_id)==null?void 0:i.name]})]})]}),t("div",{className:"flex-w-100 column gap-1",children:[e("h5",{style:{paddingBottom:"1rem"},className:"text-light family1 fs-18",children:r==null?void 0:r.tweet_text}),e("div",{className:"w-100 wrapper",children:r==null?void 0:r.tweet_image.map((c,d)=>e("img",{style:{borderRadius:"10px"},src:c,alt:"",className:"w-100 h-100"},d))})]})]}),e("div",{className:"flex item-center justify-end",children:e("div",{onClick:()=>o(!0),className:"icons flex item-center justify-center",children:e(N,{fontSize:"20px"})})})]})]},r==null?void 0:r.tweet_id)},O=x.div`
    width: 100%;
   position: relative;
    padding: 1.5rem .7rem;
    padding-bottom: 0;
    &:hover {
        /* background-color: #f1f1f1; */
        background-color: var(--dark-grey-hover);
    }
    
    .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

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
    .dropdownCard {
        position: absolute;
        right: 2%;
        top: 8px;
        z-index: 40;
        cursor: pointer;
        width: 350px;
        box-shadow: var(--shadow);
  border-radius: 10px;
      background-color: var(--white);
        height: 0;
        transition: all .3s;    
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
            height: 350px;
            opacity:1;
                visibility: visible;
            ul {

            li {
                padding:2rem 2.4rem;
                opacity:1;
                visibility: visible;
                width: 100%;
                transition: all .4s;
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
    img {
        object-fit: cover;
    }
    .feedtags_wrapper {
        /* justify-content:center; */
        gap:3rem;
        @media (max-width:580px) {
            gap:1rem;
        }
    }
    .wrapper {
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        display: grid;
        grid-gap: .5rem;
    }
    .iconwrapper {
        transition: all .5s;
        cursor: pointer;
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
       .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
        }
    }
}
    h5 {
        font-size: 16px;
        color: rgb(15, 20, 25);
        font-weight: 300;
        line-height: 20px;
        @media (max-width:580px) {
            font-size: 15px;
        }
    }
  `,V=()=>{var d;const{id:r}=B(),[m,o]=n.exports.useState(!1),{tweets:p,tweetDetails:s,isBookMarked:a}=g(h=>h.tweet),{quotes:l}=g(h=>h.quotes);console.log(a);const i=w();v.useEffect(()=>{i(T({Detailsdata:r}))},[r]),v.useEffect(()=>{i(A({Detailsdata:r}))},[r]);const c=()=>{o(!m),i(I({Detailsdata:r}))};return t(Z,{children:[e($,{}),e(J,{}),t("div",{className:"flex-100 column gap-1 fs-18 text-light text-grey text-light",children:[t("div",{className:"flex bottom fs-15 w-90 auto item-center gap-1",children:[e("span",{children:"7:24 AM \xB7 Jul 21, 2023"}),t("span",{className:"fs-14 text-grey text-light",children:["\xB7",e("span",{className:"fs-14 text-bold text-dark",children:"5,133"})," ","Views"]})]}),t("div",{style:{borderBottom:"1px solid rgba(0,0,0,.1)"},className:"flex w-90 auto item-center gap-2 flex-wrap",children:[t("span",{className:"fs-15 list text-grey text-light",children:[e("span",{className:"fs-15 text-bold text-dark",children:"50"})," ","Retweets"]})," ",t(u,{to:`/i/quote/${s==null?void 0:s._id}`,className:"fs-15 list text-grey text-light",children:[e("span",{className:"fs-15 text-bold text-dark",children:l==null?void 0:l.length})," ","Quotes"]})," ",t("span",{className:"fs-15 list text-grey text-light",children:[e("span",{className:"fs-15 text-bold text-dark",children:"5"})," ","Likes"]}),t("span",{className:"fs-15 list text-grey text-light",children:[e("span",{className:"fs-15 text-bold text-dark",children:"15"})," ","Bookmarks"]})]}),e("div",{className:"flex w-90 auto justify-space bottom bottom1 item-center w-90 gap-2",children:t("div",{className:"flex w-100 auto item-center fs-14 text-light feedtags_wrapper text-dark",children:[t("div",{className:"flex iconwrapper flex-1 item-center",style:{gap:".3rem"},children:[e("div",{className:"icons icon1 flex item-center justify-center",children:e(k,{type:"large"})}),"23"]}),t("div",{className:"flex iconwrapper flex-1 justify-center text_2 item-center",style:{gap:".3rem"},children:[e("div",{className:"icons icon2 flex item-center justify-center",children:e(f,{type:"large"})}),"144"]}),t("div",{className:"flex iconwrapper flex-1 justify-center text-3 item-center",style:{gap:".3rem"},children:[e("div",{className:"icons icon3 flex item-center justify-center",children:e(_,{type:"large"})}),"23"]}),t("div",{className:"flex iconwrapper flex-1 justify-center item-center",style:{gap:".3rem"},children:[e("div",{onClick:c,className:"icons icon1 flex item-center justify-center",children:e(M,{isClicked:a,type:"large"})}),(d=s==null?void 0:s.tweet_bookmarks)==null?void 0:d.length]})]})})]}),e(Q,{}),e(G,{})]})},Z=x.div`
        flex: 1;
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);
        min-height: 100vh;
        .list {
        transition: all .5s;
        cursor: pointer;
            padding:15px 6px;
            &:hover {
                background-color: rgba(0,0,0,.08);
            }

        }
        .bottom {
            padding:17px 0;
            border-bottom : 1px solid var(--border);
            &.bottom1 {
                padding: 10px 0;
            }
        }
        .fs-15 {
            font-size: 15px;
        }
        .iconwrapper {
        transition: all .5s;
            font-size: 14px;
        cursor: pointer;
        @media (max-width:380px) {
            font-size: 13px;
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
       .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 25px;
        }
    }
}

  `,K=()=>t(U,{children:[e(R,{}),e(V,{}),e(P,{types:"feeddetails"})]}),U=x.div`
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

  `,re=()=>e(W,{children:e(K,{})}),W=x.div`
  width: 100%;
  position: relative;
`;export{re as default};
