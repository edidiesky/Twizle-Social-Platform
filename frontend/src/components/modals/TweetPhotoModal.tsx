import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import Message from "../loaders/Message";
import { clearUserProfile } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import { useNavigate } from "react-router-dom";
import LoaderIndex from "../loaders";

type modalType = {
  modal?: boolean;
  setModal: (val: boolean) => void;
  setTab?: any
}

const TweetPhotoModal: React.FC<modalType> = ({ modal, setModal, setTab }) => {
  const { userInfo, userprofileisSuccess } = useAppSelector(store => store.auth)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [alert, setAlert] = useState(false);

  return (
    <TweetPhotoModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      <div className="backdrop" onClick={() => setModal(false)}></div>
      {/* {
        uploading && <LoaderIndex/>
      } */}

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
      </motion.div>
    </TweetPhotoModalStyles>
    // <h2>hello</h2>
  );
}
export default TweetPhotoModal

const TweetPhotoModalStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  position: fixed;
    left: 50%;
    transform: translateX(-50%);
  display: flex;
  z-index: 3800;
  align-items: center;
  justify-content: center;
  top: 0;
  .formwraper {
    padding-bottom: 3rem;
  }
  .profile_svg {
    width:20rem !important;
    height:20rem !important;
  }

  .icons {
    width:6rem !important;
    height:6rem !important;
  }
  .btn_3 {
    /* width: 100%; */
    border:1px solid var(--border1);
    padding:1.4rem 0;
    border-radius:40px;
    cursor:pointer;
    &:hover {
      background:var(--dark-grey-hover);
    }
  }
  .btn.btn-1 {
    padding:1.6rem 2rem !important;
    margin-top: 4rem;
    &:hover {
      opacity:.5;
    }
  }
  .image_wrapper {
      width:32rem;
      height:32rem;
      position: relative;
      border-radius:50%;
      cursor:pointer;
      margin: 0 auto;
      border:5px solid #fff;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
    }
    .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      background:rgba(0,0,0,.2);
      /* opacity:0; */
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      object-fit:cover;
      
    }
  .RegsiterBottom {
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
     @media (max-width:480px) {
     display: none;

    }
  }
  .Regsitertop {
  z-index: 3000;
  position:sticky;
  left:0;
  top:0;  
  top: 0;
  background-color: var(--top);
  z-index: 30;
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  }
  .deleteCard {
    display: flex;
     max-width: 80vw;
    min-width: 600px;
    flex-direction: column;
    background: var(--white);
    position: relative;
    box-shadow:var(--shadow);

    min-height: 60rem;
    border-radius:20px;
    border-top-right-radius:20px;
    justify-content:space-between;
   
    @media (max-width:580px) {
      width: 100%;
    }
    @media (max-width:480px) {
     
       max-width: 100vw;
    min-width: 100vw;
    border-radius: 0px;

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
`;
