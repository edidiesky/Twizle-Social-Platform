import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
import FormInput from "../form/input";
import Message from "../loaders/Message";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import LoaderIndex from "../loaders";
import { registerUser } from "../../features/auth/authReducer";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>


type modalType = {
  modal?: boolean;
  setModal: (val: boolean) => void;
}

const RegsiterModal: React.FC<modalType> = ({ modal, setModal }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [index, setIndex] = useState(0);

  const { registerisLoading, registerisSuccess } = useAppSelector(store => store.auth)
  const dispatch = useAppDispatch()
  // console.log(registerisLoading)

  const HandleRegisterUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // dispatch(registerUser({ email, name, password }))
    console.log('submit')
  }

  return (
    <RegisterModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      {
        registerisLoading && <LoaderIndex />
      }
      <div className="backdrop"></div>


      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
        {/* edit profile top */}
        <div className="flex Regsitertop w-100 auto ">
          <div className="w-90 auto flex gap-2 item-center">
            <div className="flex item-center gap-3 py-1">
              <div onClick={() => setModal(false)} className="icons flex item-center justify-center"><RxCross2 fontSize={'20px'} /></div>
            </div>
            {
              index === 1 ? <h4 className="fs-20 text-dark text-extra-bold">
                Step 1 of 2</h4> : index === 2 ? <h4 className="fs-20 text-dark text-extra-bold">
                  Step 2 of 2</h4> : ''
            }
          </div>
        </div>
        <div className="center_content h-100 justify-space w-85 py-2 auto flex column">

          <div className="w-85 formwraper justify-space auto flex column gap-2">
            <div className="flex h-100 column gap-2">
              <h4 className="fs-30 text-extra-bold">Create your account</h4>
              <form onSubmit={(e) => HandleRegisterUser(e)} className="h-100 flex column justify-space">
                <div className="flex w-100 column gap-2">
                  <FormInput required={true} type="text" state={name} label={'Name'} setState={setName} />
                  <FormInput required={true} type="email" state={email} label={'Email'} setState={setEmail} />
                  <FormInput required={true} type="password" state={password} label={'Password'} setState={setPassword} />
                </div>

                <button type="submit" className="btn w-85 auto btn-1 fs-16 text-white text-extra-bold">Next
                </button>

              </form>
            </div>
           
          </div>

        </div>
      </motion.div>
    </RegisterModalStyles>
    // <h2>hello</h2>
  );
}
export default RegsiterModal

const RegisterModalStyles = styled(motion.div)`
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
  .btn.btn-1 {
    border: none;
    outline: none;
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
    width: 600px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    box-shadow:var(--shadow);
    position: relative;
    min-height: 60rem;
    border-radius:20px;
    border-top-right-radius:20px;
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
    min-height: 50rem;

  }
`;
