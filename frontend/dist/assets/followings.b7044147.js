import{b as m,_ as p,a as h,R as g,an as f,c as a,j as r,f as w,u,am as b}from"./index.72231933.js";const y=()=>{const t=m(),{name:n}=p(),{followings:l,userDetails:o,userprofileisLoading:c}=h(e=>e.auth);g.useEffect(()=>{n&&t(f(o==null?void 0:o._id))},[]);const d=e=>{t(b({profiledata:e}))};return a(v,{className:"w-100",children:r("div",{className:"w-100",children:[c&&a(w,{type:"small"}),a("div",{className:"w-100 flex column",children:(l==null?void 0:l.length)===0?a("div",{style:{padding:"2rem",width:"60%"},className:"w-85 auto",children:r("h3",{className:"fs-35 w-100 auto text-extra-bold",children:["Looking for followings?",a("span",{style:{marginTop:"3px"},className:"block fs-16 text-grey text-light",children:"When someone follows this account, they\u2019ll show up here. Tweeting and interacting with others helps boost followings."})]})}):a("div",{className:"w-100 flex column ",children:l==null?void 0:l.map(e=>{var i;const s=(i=o==null?void 0:o.followings)==null?void 0:i.includes(e==null?void 0:e._id);return r("div",{className:"w-100 connect_card flex item-start justify-space gap-1",children:[r("div",{className:"image_wrapper",children:[a("img",{src:e!=null&&e.profile_image_url?e==null?void 0:e.profile_image_url:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",alt:"tweet_comment_image",className:"avatar_profile w-100 h-100"}),a("div",{className:"image_gradient"})]}),r("div",{className:"flex-1 flex column",style:{gap:".6rem"},children:[r("div",{className:"w-100 flex item-center justify-space",children:[r("h4",{className:"fs-16 text-extra-bold flex column",style:{gap:".1rem"},children:[e==null?void 0:e.display_name,r("span",{className:"block fs-14 text-grey text-light",children:["@",e==null?void 0:e.name]})]}),r("div",{onClick:()=>d(e==null?void 0:e._id),className:"btn text-extra-bold btn-3 fs-14 text-white",children:[s?a("span",{className:"following",children:"Following"}):"Follow",s&&a("span",{className:"unfollow",children:"UnFollow"})]})]}),a("h4",{className:"fs-15 text-light text-grey",children:e==null?void 0:e.bio})]})]})})})})]})})},v=u.div`
  width: 100%;
    .btn.btn-3 {
        padding: .7rem 1.5rem;
            background-color: transparent !important;
            color: var(--dark-1) !important;
            color: var(--red);

            border: 1px solid var(--border1) !important;
            &:hover {
            border: 1px solid rgb(103, 7, 15)!important;
            background-color: rgba(244, 33, 46, 0.1) !important;
            color: var(--red) !important;

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
`;export{y as default};
