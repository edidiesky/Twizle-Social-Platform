import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
import FormInput from "../form/input";
import Message from "../loaders/Message";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import { loginUser } from "../../features/auth/authReducer";
import LoaderIndex from "../loaders";
import { useNavigate } from "react-router-dom";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type modalType = {
  modal?: boolean;
  setModal: (val: boolean) => void;
}

const LoginModal: React.FC<modalType> = ({ modal, setModal }) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('CallofDuty@gmail.com');
  const [password, setPassword] = useState('12345');
  const { loginisLoading, loginisSuccess,

    alertText,
    showAlert,
    alertType,
  } = useAppSelector(store => store.auth)

  const dispatch = useAppDispatch()


  const handleLoginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginUser({ email, password }))
  }

  useEffect(() => {
    if (loginisSuccess) {
      const timeout = setTimeout(() => {
        navigate('/')
      }, 3000);

      return () => clearTimeout(timeout)

    }
  }, [loginisSuccess])

  return (
    <RegisterModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      {
        loginisLoading && <LoaderIndex />
      }
      <div className="backdrop" onClick={() => setModal(false)}></div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
        {/* <Message showAlert={showAlert} alertText={alertText} /> */}

        {/* edit profile top */}
        <div className="flex Logintop w-100 auto ">
          <div className="w-90 auto flex gap-2 item-center">
            <div className="flex item-center gap-3 py-1">
              <div onClick={() => setModal(false)} className="icons flex item-center justify-center"><RxCross2 fontSize={'20px'} /></div>
            </div>
          </div>
        </div>
        <div className="center_content h-100 justify-space w-85 auto flex column gap-1">
          <div style={{ width: "70%" }} className="hidden w-85 auto">

          </div>
          <div className="w-85 formwraper auto flex column gap-3">
            <h4 className="fs-35 text-dark text-center text-extra-bold">Sign in to Twizzle</h4>
            <div className="flex w-100 column" style={{ gap: "10px" }}>
              <div className="flex w-100 column gap-2 item-start">
                <div className="authBtn gap-2 flex fs-16 text-dark item-center">
                  <FcGoogle fontSize={"24px"} />{" "}
                  <div className="w-100 text-center">Continue with Google</div>{" "}
                </div>

                <div className="authBtn gap-2 flex fs-16 text-dark item-center">
                  <FaGithub fontSize={"24px"} />{" "}
                  <div className="w-100 text-center">Continue with Github</div>{" "}
                </div>
              </div>
              <div className="option">or</div>
              <form onSubmit={(e) => handleLoginUser(e)} action="" className="w-100 flex column gap-2">
                <div className="flex column gap-2">
                  <FormInput required={true} state={email} label={'Email'} setState={setEmail} />
                  <FormInput required={true} state={password} type='password' label={'Password'} setState={setPassword} />

                </div>
                <div className="btn_wrapper flex column gap-1 w-100">
                  {/* <Message showAlert={showAlert} alertText={alertText} alertType={alertType} /> */}
                  <button disabled={loginisSuccess || !password || !email} type="submit" className="btn w-100 auto btn-1 fs-16 text-white text-extra-bold">Next
                  </button>
                </div>

              </form>


            </div>

          </div>

        </div>
      </motion.div>
    </RegisterModalStyles>
    // <h2>hello</h2>
  );
}
export default LoginModal

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
    width: 70%;
        @media (max-width:580px) {
      width: 90%;
    }
  }
  .btn_wrapper{
    margin-top: 3rem;
    .btn.btn-1 {
    padding:1.6rem 2rem !important;

    &:disabled {
      cursor: not-allowed;
      background-color: var(--grey-1);

    }
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


  span {
    font-size: 1.3rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
  }

  .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 16px;
      color: var(--grey-1);
      &::after {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: var(--border);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: var(--border);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  .btn {
    padding: 1rem 2rem !important;
    opacity:1 !important;
  }
  .authBtn {
    border: 1px solid var(--border);
    padding: .9rem 4rem;
    border-radius: 40px;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: var(--dark-grey-hover) !important;
    }
  }
  .LoginBottom {
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
  .Logintop {
  z-index: 3000;
  position:sticky;
  left:0;
  top:0;  
  top: 0;
  background-color: var(--top);
  z-index: 30;
  backdrop-filter: blur(12px);
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  }
  .deleteCard {
    max-width: 80vw;
    min-width: 600px;
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
      min-height:100vh;
    max-width: 100vw;
    min-width: 100vw;
    border-radius:0;


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
    padding-bottom: 2rem;
  }
`;
