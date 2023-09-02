import React, { useEffect, useState } from "react";
import styleds from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
import FormInput from "../form/input";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type modalType = {
  modal?: Boolean;
  setModal: SetStateProp<Boolean>;
}

const AuthModal: React.FC<modalType> = ({ modal, setModal }) => {
  const [auth, setAuth] = useState(false);
  const [bio, setBio] = useState('false');
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  return (
    <DeleteContainer
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
        <div className="flex authtop w-100 auto ">
          <div className="w-90 auto flex item-center justify-space item-center">
            <div className="flex item-center gap-3 py-1">
              <div className="icons flex item-center justify-center"><RxCross2 fontSize={'20px'} /></div>
              <h3 className="fs-20 text-extra-bold">Edit profile</h3>
            </div>
            <div className=" flex item-center justify-end">
              <div className="btn btn-3 fs-14 text-bold text-white">Save</div>
            </div>
          </div>
        </div>
        <div className="center_content flex gap-2 column">
          <div className="w-100 profile_background flex item-center justify-center">
          </div>
          <div className="image_wrapper">
            <img src="https://i.pinimg.com/236x/e6/33/ee/e633eefbeb77cd4323a1557d33c91c83.jpg" alt="" className="avatar_profile" />
            <div className="image_gradient"></div>
          </div>
          <div className="w-90 formwraper auto flex column gap-2">
            <FormInput state={name} label={'Name'} setState={setName} />
            <FormInput state={bio} label={'Bio'} types="textarea" setState={setBio} />
            <FormInput state={location} label={'Location'} setState={setLocation} />
            <FormInput state={website} label={'Website'} setState={setWebsite} />
          </div>
        </div>
      </motion.div>
    </DeleteContainer>
    // <h2>hello</h2>
  );
}
export default AuthModal

const DeleteContainer = styleds(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 3800;
  align-items: center;
  justify-content: center;
  top: 0;
  position: fixed;
    left: 50%;
    transform: translateX(-50%);
  .formwraper {
    padding-bottom: 3rem;
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
    background-color: #fff;
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
      background: #fff;
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
      background: #fff;
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
  .image_wrapper {
      width:12rem;
      height:12rem;
      position: relative;
      border-radius:50%;
      cursor:pointer;
      transform:translate(10%,-50%);
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
      object-fit:cover;
      
    }
  .profile_background {
    background-color: #B2B2B2;
    height: 200px;
    position:relative;
    
  }
  .btn-3 {
    padding: 1rem 2rem;
  }
  .icon {
  }
  .icon:hover {
    background-color: #ccc;
  }
  .authBottom {
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
    background: rgba(0, 0, 0, 0.3);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .authtop {
  background-color: rgba(255, 255, 255, 0.875);
  z-index: 3000;
  backdrop-filter: blur(14px);
  position:sticky;
  left:0;
  top:0;
  }
  .deleteCard {
    max-width: 80vw;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
   height: 650px;
    overflow: auto;

    @media (max-width:980px) {
      width: 70%;
    }
    @media (max-width:580px) {
      width: 90%;
    }

  }
  .center_content {
    background: #fff;
    position: relative;
  }
`;
