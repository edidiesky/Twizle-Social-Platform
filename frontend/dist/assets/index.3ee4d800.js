import{a1 as Y,_ as G,r as m,b as J,a as h,ag as P,ah as $,ai as O,c as r,j as a,L as F,aj as R,u as U,ak as q}from"./index.72231933.js";import{b as K}from"./index.esm.fca25ec3.js";import{h as n}from"./moment.9709ab41.js";function Q(i){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18 9V7h-2V2.84A9.929 9.929 0 0011.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-1.05-.17-2.05-.47-3H18zm-2.5-1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zM22 3h2v2h-2v2h-2V5h-2V3h2V1h2v2z"}}]})(i)}function T(i){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}}]})(i)}const ee=()=>{var f,x,u,v,b,w,N,y,_,k,M,C,j,z,A,S,V;const{id:i}=G(),[p,g]=m.exports.useState(""),s=J(),{message:o}=h(t=>t.message),{conversationDetails:e}=h(t=>t.conversation),{userInfo:d}=h(t=>t.auth),l=i==null?void 0:i.split("-")[0],c=i==null?void 0:i.split("-")[1];m.exports.useEffect(()=>{s(P({senderId:l,receiverId:c}))},[l,c]),m.exports.useEffect(()=>{s($({senderId:l,receiverId:c}))},[l,c]),m.exports.useEffect(()=>{s(O(e==null?void 0:e._id))},[e]);const B=t=>{t.preventDefault(),s(q({message:p,userId:d==null?void 0:d._id,conversationId:e==null?void 0:e._id})),g("")},E=n((f=e==null?void 0:e.sender)==null?void 0:f.createdAt).format("MMMM, h:mm a"),H=n((x=e==null?void 0:e.receiver)==null?void 0:x.createdAt).format("MMMM, h:mm a");return r(X,{className:"flex flex-1 column item-center",children:a("div",{className:"chatWrapper w-100",children:[r("div",{className:"top2 w-100 auto ",children:r("div",{className:"w-90 auto flex item-center justify-space",children:r("h3",{className:"fs-20 text-bold text-dark",children:((u=e==null?void 0:e.sender)==null?void 0:u._id)!==(d==null?void 0:d._id)?(v=e==null?void 0:e.sender)==null?void 0:v.display_name:(b=e==null?void 0:e.receiver)==null?void 0:b.display_name})})}),a("div",{className:"flex chatWrap w-100 auto list auto column gap-1",children:[((w=e==null?void 0:e.sender)==null?void 0:w._id)!==(d==null?void 0:d._id)?a(F,{to:`/${(N=e==null?void 0:e.sender)==null?void 0:N.name}`,className:"top w-90 auto flex column item-center justify-center gap-2",children:[a("div",{className:"flex column gap-1 item-center justify-center w-100",children:[a("div",{className:"image_wrapper",children:[r("div",{className:"image_gradient"}),r("img",{src:(y=e==null?void 0:e.sender)==null?void 0:y.profile_image_url,alt:"",className:"avatar_profile"})]}),a("h4",{className:"fs-16 text-center text-bold text-dark",children:[(_=e==null?void 0:e.sender)==null?void 0:_.display_name,a("span",{className:"block fs-14 text-grey text-light",children:["@",(k=e==null?void 0:e.sender)==null?void 0:k.name]})]})]}),r("h4",{className:"w-100 bio auto text-center fs-15 text-light text-dark",children:(M=e==null?void 0:e.sender)==null?void 0:M.bio}),a("h4",{className:"w-85 auto text-center fs-14 text-light text-grey",children:["Joined ",E,"\xB7 4,127 Followers"]})]}):((C=e==null?void 0:e.receiver)==null?void 0:C._id)!==(d==null?void 0:d._id)?a(F,{to:`/${(j=e==null?void 0:e.receiver)==null?void 0:j.name}`,className:"top w-90 auto flex column item-center justify-center gap-2",children:[a("div",{className:"flex column gap-1 item-center justify-center w-100",children:[a("div",{className:"image_wrapper",children:[r("div",{className:"image_gradient"}),r("img",{src:(z=e==null?void 0:e.receiver)==null?void 0:z.profile_image_url,alt:"",className:"avatar_profile"})]}),a("h4",{className:"fs-16 text-center text-bold text-dark",children:[(A=e==null?void 0:e.receiver)==null?void 0:A.display_name,a("span",{className:"block fs-14 text-grey text-light",children:["@",(S=e==null?void 0:e.receiver)==null?void 0:S.name]})]})]}),r("h4",{className:"w-100 bio auto text-center fs-15 text-light text-dark",children:(V=e==null?void 0:e.receiver)==null?void 0:V.bio}),a("h4",{className:"w-85 auto text-center fs-14 text-light text-grey",children:["Joined ",H,"\xB7 4,127 Followers"]})]}):"",r("div",{className:"w-85 auto chatList column flex gap-2",children:o==null?void 0:o.map(t=>{const L=(t==null?void 0:t.sender)===(d==null?void 0:d._id),W=n(t==null?void 0:t.createdAt).format("MMMM Do YYYY, h:mm a");return r("div",{className:"flex ",children:r("div",{className:"chatCard flex w-100 column",children:L?a("div",{className:"flex revieverWrapper column gap-1",children:[r("div",{className:"flex wrap revieverWrapper column",children:r("div",{className:"recieverChat",children:r("h4",{className:"fs-14 text-white text-light",children:t==null?void 0:t.message})})}),r("div",{className:" flex gap-1",children:r("h5",{className:"fs-14 text-light text-grey",children:W})})]}):a("div",{className:"flex column gap-1",children:[r("div",{className:" SenderChat",children:r("h4",{className:"fs-14 text-grey text-light",children:t==null?void 0:t.message})}),r("div",{className:" flex gap-1",children:r("h5",{className:"fs-14 text-light text-grey",children:W})})]})})})})})]}),r("div",{className:"form_wrapper w-100 auto",children:a("form",{onSubmit:t=>B(t),action:"",className:"w-100 family1 auto flex item-center",children:[a("div",{className:"flex item-center",children:[r("div",{className:"icons flex item-center justify-center avatar",children:r(Q,{className:"fs-20",color:"var(--blue-1)"})}),r("div",{className:"icons flex item-center justify-center avatar",children:r(T,{className:"fs-20",color:"var(--blue-1)"})}),r("div",{className:"icons flex item-center justify-center avatar",children:r(R,{className:"fs-20",color:"var(--blue-1)"})})]}),r("input",{type:"text",value:p,name:"messages",onChange:t=>g(t.target.value),placeholder:"Start a new Message",className:"input fs-15 flex-1 text-dark family1"}),r("div",{className:"icons flex item-center justify-center avatar",children:r(K,{className:"fs-20",color:"var(--blue-1)"})})]})})]})})},X=U.div`
height: 100vh;
    /* border-right : 1px solid var(--border);
border-left : 1px solid var(--border); */
overflow:hidden;
    overflow: auto;

/* background-color: red; */
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
.bio {
  width: 70%;
  @media (max-width:980px) {
  width: 70%;

  }
   @media (max-width:480px) {
  width: 90%;

  }
}
.top2 {
position: sticky;
  top: 0;
  background-color: var(--top);
  z-index: 300;
  padding: 2rem 0;
  backdrop-filter: blur(12px);
        }
        .chatWrap {
          /* height: 85vh; */
    overflow: auto;
    height: 100vh;
    padding-bottom: 15rem;
    /* width: 85%;
    height: 100vh; */
          background-color: var(--white);
        }
   .chatWrapper {
    border-right : 1px solid var(--border);
border-left : 1px solid var(--border);
overflow:auto;
    height: 100vh;

overflow:hidden;

   }
   .list {
height: 100%;
    overflow: auto;
   }
      .image_wrapper {
      width:6rem;
      height:6rem;
      border-radius:50%;
      cursor:pointer;
      position: relative;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
      .chatList{
        border-top: 1px solid rgba(0,0,0,.1);
        padding-top: 4rem;
        padding-right: 2rem;
      }
      .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      background:rgba(0,0,0,1) !important;
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
    .revieverWrapper {
    justify-content: flex-end;
    gap: 1.2rem;
    align-self: flex-end;
    position: relative;
  }
  .SenderChat {
    background-color: var(--grey-3);
   &:nth-child(1) {
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
   }
   border-radius: 24px;
   border-bottom-left-radius: 4px;
  }
  .recieverChat {
   border-radius: 24px;
   border-bottom-right-radius: 4px;
   background-color: var(--blue-1);
  }
  .SenderChat,
  .recieverChat {
    padding: 1.5rem;
    width: fit-content;
    @media (max-width: 980px) {
      background-color: #fff;
      padding: 2rem 4rem;
    }
  }
  .chatCard {
    display: flex;
    display: flex;
    align-items: flex-start;
  }
    .top {
    padding:5rem 1.5rem;
    border-bottom: 1px solid var(--border);

        &:hover {

        background-color: var(--grey-2);
    }
    }

    .avatar {
    width: 4rem;
    height: 4rem;
  }
  .form_wrapper {
  background-color:var(--top);
    z-index: 300;
  backdrop-filter: blur(12px);
    border-top: 1px solid var(--border);

    padding: 1rem 2rem;
     position: sticky;
    bottom: 0%;
    left: 0;
    form {
   
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem 2rem;
    gap: 0.5rem;
    border-radius: 40px;
    background-color: #EFF3F4;

    .input {
      height: 3.8rem;
      background-color: inherit;
      border-radius: 40px;
      position: sticky;
      top: 0;
      z-index: 3000;
      padding: 0 2rem;
    }
  }
  }

  `;export{ee as default};
