import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BsTwitter } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
import FormInput from "../form/input";
import Message from "../loaders/Message";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type modalType = {
  modal?: Boolean;
  setModal: (val: Boolean) => void;
}

const ProfilePictureModal: React.FC<modalType> = ({ modal, setModal }) => {

  const [profilepicture, setProfilePicture] = useState('');

  return (
    <ProfilePictureModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      <div className="backdrop" onClick={() => setModal(false)}></div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
        {/* edit profile top */}

        <div className="flex column justify-center item-center">
          <div style={{ marginTop: "10px" }} className="icon flex item-center justify-center">
            <BsTwitter fontSize={'45px'} color='var(--blue-1)' />
          </div>
          <div className="center_content h-100 justify-space w-85 py-1 auto flex gap-1 column">
            <div className="hidden w-85 auto">
              <div className="w-85 auto"><Message showAlert={false} alertText={'Hello Hi are u fine'} /></div>
            </div>
            <div className="w-85 formwraper auto flex column gap-3">

              <h3 className="fs-35 text-dark text-extra-bold">Pick a profile Picture
                <span style={{ fontSize: "15px", marginTop: "6px" }} className="block fs-14 text-light">Have a favourite selfie? Upload it now.</span>
              </h3>
              <div className="flex w-100 column" style={{ gap: "10px" }}>
                {/* <FormInput state={profilepicture} label={'ProfilePicture'} setState={setProfilePicture} /> */}
                {/* <div className="profile_icons flex item-center justify-center">
                  <div className="profile_svg flex item-center justify-center">
                    <CgProfile style={{ width: "100%", height: "100%" }} />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-85 py-2 auto item-center justify-center">
          <div className="btn_3 w-85 text-bold auto text-center fs-16 text-dark">Skip For Now</div>
        </div>

      </motion.div>
    </ProfilePictureModalStyles>
    // <h2>hello</h2>
  );
}
export default ProfilePictureModal

const ProfilePictureModalStyles = styled(motion.div)`
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
    border:1px solid var(--border);
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
  .label {
    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  font-size: 1.3rem;
  color: var(--dark-1);
  font-weight: 700;
  text-transform: capitalize;
  position: relative;

  .labelspan {
    position: absolute;
    top: -15%;
    padding: 0 .6rem;
    left: 2%;
    background-color: var(--white);
    font-weight: normal;
  }
  textarea {
    height: 10rem;
    border-radius: 8px;
    background: transparent;
    padding:1.8rem;
    width: 100%;
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    resize:none;
    font-family: inherit;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: var(--dark-1);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--blue-1);
      background: transparent;
    }
    &.true {
      background: var(--white);
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }
  input {
    height: 5.5rem;
    border-radius: 8px;
    background: transparent;
    padding: 0 1.8rem;
    width: 100%;
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    font-family: inherit;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: var(--dark-1);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--blue-1);
      background: transparent;
    }
    &.true {
      background: var(--white);
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }

  span {
    font-size: 1.3rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
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
    width: clamp(45%, 150px, 100%);
    display: flex;
    flex-direction: column;
    background: var(--white);
    position: relative;
    box-shadow:var(--shadow);

    min-height: 60rem;
    border-radius:20px;
    border-top-right-radius:20px;
    justify-content:space-between;
    @media (max-width:980px) {
      width: 70%;
    }
    @media (max-width:580px) {
      width: 90%;
    }
    @media (max-width:580px) {
    min-height: 100vh;
      width: 100%;
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
