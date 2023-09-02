import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BsTwitter } from 'react-icons/bs'
import { slideUp } from "../utils/framer"
import FormInput from "../form/input";
import Message from "../loaders/Message";
import TwitterIcon from "../../assets/svg/twitter";
import { useAppDispatch } from "../../hooks/reduxtoolkit";
import { UpdateProfile } from "../../features/auth/authReducer";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type modalType = {
  modal?: Boolean;
  setModal: SetStateProp<Boolean>;
}

const UsernameModal: React.FC<modalType> = ({ modal, setModal }) => {

  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch()

  const handleUpdateUserName = () => {
    dispatch(UpdateProfile({ display_name: username }))
  }

  return (
    <UsernameModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      <div className="backdrop"></div>

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
            <TwitterIcon />
          </div>
          <div className="center_content h-100 justify-space w-85 py-1 auto flex gap-1 column">
            <div className="hidden w-85 auto">
              <div className="w-85 auto"><Message showAlert={false} alertText={'Hello Hi are u fine'} /></div>
            </div>
            <div className="w-85 formwraper auto flex column gap-3">

              <h3 className="fs-35 text-dark text-extra-bold">What should we call you?
                <span style={{ fontSize: "15px" }} className="block fs-14 text-light">Your username should be unique. you can always change it later.</span>
              </h3>
              <div className="flex w-100 column" style={{ gap: "10px" }}>
                <FormInput state={username} label={'Username'} setState={setUsername} />

                <div className="py-2 flex item-center gap-1">
                  <span className="fs-16 text-blue text-bold">@workuserindgf</span>
                  <span className="fs-16 text-blue text-bold">@workuerindgf</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex w-85 py-2 auto item-center justify-center">
          <div onClick={handleUpdateUserName} className="btn_3 w-85 text-bold auto text-center fs-16 text-dark">Skip For Now</div>
        </div>

      </motion.div>
    </UsernameModalStyles>
    // <h2>hello</h2>
  );
}
export default UsernameModal

const UsernameModalStyles = styled(motion.div)`
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
   max-width: 80vw;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    box-shadow: 0 1rem 3rem var(--backdrop);
    position: relative;
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
