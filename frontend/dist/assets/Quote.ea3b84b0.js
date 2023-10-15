import{u as c,R,a as n,c as e,r as o,b as L,j as t,I as M,L as h,y as F,_ as T,$,l as q,H as A,F as H,m as D}from"./index.72231933.js";import{A as P}from"./EditProfileModal.0219fa9b.js";import{F as Q,C as E}from"./CircularProgress.2f81e93f.js";import{M as G,R as B,F as W,L as J,S as K,a as O}from"./share.4a2e5bcd.js";import"./camera.c4a218e0.js";import"./clsx.6783245b.js";const U=({setModal:r})=>(R.useState(!1),n(a=>a.auth),n(a=>a.tweet),e(V,{className:"w-100",children:e("div",{className:"flex item-center gap-2 justify-space w-90 auto",children:e("h3",{className:"fs-20 text-extra-bold text-dark",children:"Quotes"})})})),V=c.div`
    width: 100%;
    color: #fff;
  position: sticky;
  top: 0;
  background-color: var(--top);
  z-index: 300;
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  padding:1.6rem 0;
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
  `,X=()=>{const{quotes:r}=n(i=>i.quotes);n(i=>i.auth);const[a,m]=o.exports.useState(!1);o.exports.useState(!1);const[g,d]=o.exports.useState(!1),[f,s]=o.exports.useState(!1);return o.exports.useState(!1),L(),e("div",{className:"w-100 flex column",children:r==null?void 0:r.map(i=>{var p,l,u,x,w,v,b,y,_,k,N,z,S,j,C,I;return t(Y,{children:[e("div",{onClick:()=>d(!0),className:"icons2 flex item-center justify-center",children:e(M,{fontSize:"20px",color:"var(--dark-grey)"})}),t(h,{to:`/${(p=i==null?void 0:i.tweet_user_id)==null?void 0:p.name}/status/${i._id}`,className:"flex w-90 auto item-start feed_card_wrapper gap-1",children:[t(h,{to:`/${(l=i==null?void 0:i.tweet_user_id)==null?void 0:l.name}`,className:"image_wrapper",children:[e("div",{className:"image_gradient"}),(u=i==null?void 0:i.tweet_user_id)!=null&&u.profile_image_url?e("img",{src:(x=i==null?void 0:i.tweet_user_id)==null?void 0:x.profile_image_url,alt:"images-avatar",className:"avatar_profile"}):e("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar_profile",className:"avatar_profile"})]}),t(h,{to:`/${(w=i==null?void 0:i.tweet_user_id)==null?void 0:w.name}/status/${i._id}`,className:"flex column flex-1",style:{gap:".3rem"},children:[t("h4",{className:"fs-16 text-dark text-extra-bold flex item-center",style:{gap:".2rem"},children:[(v=i==null?void 0:i.tweet_user_id)==null?void 0:v.display_name,e("span",{className:"flex item-center",children:e(F,{color:"var(--blue-1)"})}),t("span",{style:{fontSize:"15px"},className:"text-light text-grey ",children:["@",(b=i==null?void 0:i.tweet_user_id)==null?void 0:b.name]})]}),e("h5",{style:{paddingBottom:"1rem",fontSize:"15px",lineHeight:"20px"},className:"text_dark_grey text-light family1",children:i.quote_text}),e("div",{className:"w-100 wrapper",children:((y=i.quote_image)==null?void 0:y.length)>0&&e(Q,{images:i.quote_image})}),t(Z,{children:[e("div",{className:g?"dropdownCard  flex column active":"dropdownCard  flex column",children:e("div",{onClick:()=>d(!1),className:"dropdown_background"})}),t("div",{className:"flex w-100 auto item-start feed_card_wrapper gap-1",children:[t("div",{className:"image_wrappers",children:[e("div",{className:"image_gradient"}),(_=i==null?void 0:i.tweet_user_id)!=null&&_.profile_image_url?e("img",{src:(k=i==null?void 0:i.tweet_user_id)==null?void 0:k.profile_image_url,alt:"images-avatar",className:"avatar_profile"}):e("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"images-avatar_profile",className:"avatar_profile"})]}),t("div",{className:"flex column flex-1",style:{gap:".3rem"},children:[t("h4",{className:"fs-16 text-dark text-extra-bold flex item-center",style:{gap:".2rem"},children:[(N=i==null?void 0:i.tweet_user_id)==null?void 0:N.display_name,e("span",{className:"flex item-center",children:e(F,{color:"var(--blue-1)"})}),t("span",{style:{fontSize:"15px"},className:"text-light text-grey ",children:["@",(z=i==null?void 0:i.tweet_user_id)==null?void 0:z.name]})]}),e("h5",{style:{paddingBottom:"1rem",fontSize:"15px",lineHeight:"20px"},className:"text_dark_grey text-light family1",children:(S=i==null?void 0:i.tweet_id)==null?void 0:S.tweet_text})]})]}),e("div",{className:"w-100",children:e("div",{className:"w-100",children:((C=(j=i==null?void 0:i.tweet_id)==null?void 0:j.tweet_image)==null?void 0:C.length)>0&&e(Q,{images:(I=i==null?void 0:i.tweet_id)==null?void 0:I.tweet_image})})})]})]})]}),e("div",{className:"w-100 flex item-center",children:e("div",{className:"flex item-center w-85 auto gap-2",children:e("div",{style:{marginTop:".6rem"},className:"flex item-center w-90 auto gap-2",children:t("div",{className:"flex w-100 item-center fs-14 text-light justify-center feedtags_wrapper text-dark",children:[e("div",{onClick:()=>m(!0),className:"flex iconwrapper flex-1 item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon1 flex item-center justify-center",children:e(G,{})})}),t("div",{className:"flex iconwrapper flex-1 relative justify-center text_2 item-center",style:{gap:".3rem"},children:[t("div",{className:f?"dropdownCard card1  flex column active":"dropdownCard card1  flex column",children:[e("div",{onClick:()=>s(!1),className:"dropdown_background"}),t("ul",{style:{fontSize:"14px"},className:"flex column w-100 text-bold",children:[t("li",{style:{gap:"5px"},className:"flex fs-16 text-dark text-bold item-center",children:[e("div",{className:"flex-1 flex item-center justify-center",children:e(B,{type:"large"})}),"Retweet"]}),t("li",{style:{gap:"5px"},className:"flex fs-16 text-dark text-bold item-center gap-1",children:[e("div",{className:"flex-1 flex item-center justify-center",children:e(W,{})}),"Quote "]})]})]}),e("div",{onClick:()=>s(!0),className:"icons icon2 flex item-center justify-center",children:e(B,{})})]}),t("div",{className:"flex iconwrapper flex-1 justify-center text-3 item-center",style:{gap:".3rem"},children:[e("div",{className:"icons icon3 flex item-center justify-center",children:e(J,{isClicked:1>=1})}),"2"]}),e("div",{className:"flex iconwrapper flex-1 justify-center item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon1 flex item-center justify-center",children:e(K,{})})}),e("div",{className:"flex iconwrapper flex-1 justify-center item-center",style:{gap:".3rem"},children:e("div",{className:"icons icon1 flex item-center justify-center",children:e(O,{})})})]})})})})]},i==null?void 0:i._id)})})},Y=c.div`
    width: 100%;
    padding: 1.7rem .7rem;
    padding-bottom:.6rem;
     position: relative;
    border-top: 1px solid var(--border1);
    border-bottom: 1px solid var(--border1);
    &:hover {
        background-color: var(--dark-grey-hover);
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
  `,Z=c.div`
    width: 100%;
    padding: 1.7rem;
    padding-bottom:.6rem;
   position: relative;
    border: 1px solid var(--border) !important;
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
  `,ee=()=>{const{id:r}=T();o.exports.useState(0);const[a,m]=R.useState(!1),{userInfo:g,userDetails:d,userprofileisSuccess:f}=n(l=>l.auth),{quotes:s,tweetisLoading:i}=n(l=>l.quotes),p=L();return o.exports.useEffect(()=>{p($({Detailsdata:r}))},[r]),t(ie,{children:[e(q,{}),e(A,{initial:!1,exitBeforeEnter:!0,children:a&&e(P,{modal:a,setModal:m})}),t("div",{className:"flex flex-1 wraps column ",children:[e(U,{}),e("div",{className:"w-100 flex py-2 column",children:(s==null?void 0:s.length)===0?e("div",{className:"flex w-85 auto py-2 item-center justify-center",children:t("h2",{style:{lineHeight:"1.3",width:"60%"},className:"fs-24 w-85 auto text-extra-bold",children:["@",d==null?void 0:d.display_name," you have no quotes",e("span",{className:"text-light fs-14 block text-grey",children:"When they do, their posts will show up here."})]})}):e("div",{className:"w-100",children:i?e("div",{className:"flex py-2 w-100 justify-center",children:e(E,{style:{width:"30px",height:"30px",fontSize:"30px"},color:"primary"})}):e(H,{children:e(X,{})})})})]}),e(D,{})]})},ie=c.div`
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
        min-height: 100vh;
        @media (max-width:980px) {
    border-right : 1px solid var(--border);

        }
    }

  `,ne=()=>e(te,{children:e(ee,{})}),te=c.div`
  width: 100%;
  position: relative;
`;export{ne as default};
