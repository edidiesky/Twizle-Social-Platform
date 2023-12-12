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
import { Monthdata, Yeardata } from "../../data/selectdata";

type modalType = {
  modal?: boolean;
  setModal: (val: boolean) => void;
  setTab: (val?: any) => void;
}

const RegsiterModal: React.FC<modalType> = ({ modal, setModal, setTab }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [password, setPassword] = useState('');
  const [index, setIndex] = useState(0);
  // console.log('month is', month)
  // console.log('year is', year)
  // console.log('day is', day)

  const { registerisLoading,
    registerisSuccess,
    alertText,
    showAlert,
    alertType,

  } = useAppSelector(store => store.auth)
  const dispatch = useAppDispatch()
  // console.log(registerisLoading)
  let birthday = `${day} ${month} ${year}`
  // console.log(birthday)

  const HandleRegisterUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(registerUser({ email, name, password, birthday }))
    // console.log('submit')
  }



  const handleClearFormData = () => {
    setMonth('')
    setYear('')
    setDay('')
    setName('')
    setEmail('')
    setPassword('')
    setModal(false)
  }
   useEffect(()=> {
    if (registerisSuccess) {
      const interval = setTimeout(()=> {
        setModal(false)
      }, 3000)
      return () => clearTimeout(interval)
    }
  }, [registerisSuccess, setModal])

  useEffect(() => {
    if (registerisSuccess) {
      const interval = setTimeout(() => {
        setTab(1)
      }, 5000)
      return () => clearTimeout(interval)
      
    }
  }, [registerisSuccess, setTab])

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
              <div onClick={handleClearFormData} className="icons flex item-center justify-center"><RxCross2 fontSize={'20px'} /></div>
            </div>
          </div>
        </div>
        <div className="center_content h-100 justify-space w-85 auto flex column">
       
          <div className="w-85 formwraper justify-space auto flex column gap-2">
            <div className="flex h-100 column gap-2">
              
              <h4 className="fs-30 text-extra-bold">Create your account</h4>
              <form onSubmit={(e) => HandleRegisterUser(e)} className="h-100 flex column justify-space">
                <div style={{ gap: "1.5rem" }} className="flex w-100 column gap-1">
                  <FormInput required={true} type="text" state={name} label={'Name'} setState={setName} />
                  <FormInput required={true} type="email" state={email} label={'Email'} setState={setEmail} />
                  <FormInput required={true} type="password" state={password} label={'Password'} setState={setPassword} />

                  <div className="flex w-100 column gap-1">
                    <h4 className="fs-16 text-bold">
                      Date of birth
                      <span className="block py-1 fs-14 text-light text-grey2">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                    </h4>

                    <div className="w-100 birthdayWrapper flex item-center gap-2">
                      {/* Month */}
                      <label htmlFor="month" className="selectLabel w-100">
                        <div className="labelspan fs-12 text-grey2">Month</div>
                        <select id="month" className='w-100' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMonth(e.target.value)}>
                          <option disabled></option>
                          {
                            Monthdata.map((x?: any, index?: any) => {
                              return <option key={index} value={x}>{x}</option>
                            })
                          }
                        </select>
                      </label>
                      {/* // Day */}
                      <label htmlFor="day" className="selectLabel w-100">
                        <div className="labelspan fs-12 text-grey2">Day</div>
                        <select id="day" className='w-100' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMonth(e.target.value)}>
                          <option disabled></option>
                          {
                            new Array(31).fill('').map((x?: any, index?: any) => {
                              return (<>

                                <option key={index} value={index + 1}>{index + 1}</option>
                              </>)
                            })
                          }
                        </select>
                      </label>
                     {/* Year */}
                      <label htmlFor="Year" className="selectLabel w-100">
                        <div className="labelspan fs-12 text-grey2">Year</div>
                        <select className='w-100' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setYear(e.target.value)}>
                          <option disabled></option>
                          {
                            Yeardata.map((x?: any, index?: any) => {
                              return <option key={index} value={x}>{x}</option>
                            })
                          }
                        </select>
                      </label>
                      
                    </div>
                  </div>

                </div>

              
                <div className="btn_wrapper flex column gap-1 w-100">
                  {/* <Message showAlert={showAlert} alertText={alertText} alertType={alertType} /> */}
                  <button disabled={registerisSuccess || !email || !password || !name || !birthday} type="submit" className="btn w-100 auto btn-1 fs-16 text-white text-extra-bold">Next
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
  }
  .btn_wrapper {
    margin-top: 7rem;
     .btn.btn-1 {
    border: none;
    outline: none;
    padding:1.6rem 2rem !important;
    
    &:disabled {
      cursor: not-allowed;
      background-color: var(--grey-1);

    }
    &:hover {
      opacity:.5;
    }
  }
  }
 
  .birthdayWrapper {
    display:grid;
    grid-template-columns: 1fr .5fr .5fr;
    grid-gap: 1rem;
  }
  .selectLabel {
    position: relative;
     .labelspan {
    position: absolute;
    top: 10%;
    padding: 0 .6rem;
    left: 2%;
    font-weight: normal;
    background-color: var(--white);

  }
  }
  select {
    height: 6.7rem;
    outline-color: var(--blue-1);
      font-size: 15px !important;
    border: 1px solid var(--grey-3);
    padding: 0 .6rem;
    border-radius: 5px;
    background-color: var(--white);
    color: var(--dark-1);
    option {
      font-size: 16px !important;
      padding:20px 10px !important;
    }
    &:hover {
   outline:2px solid var(--blue-1);

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
    background: var(--backdrop1);

    position: fixed;
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
      min-height:100vh;
    max-width: 100vw;
    min-width: 100vw;
    border-radius:0;


    }

  }
  .icons {
  width: 3rem !important;
  height: 3rem !important;
  transition: all 0.4s;
  border-radius: 50%;
  cursor: pointer;
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
    min-height: 40rem;
    padding-bottom: 2rem;

  }
`;
