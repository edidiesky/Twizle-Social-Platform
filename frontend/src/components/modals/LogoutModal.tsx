import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import { ClearUserInfo } from "../../features/auth/authSlice";
import TwitterIcon from "../../assets/svg/twitter";
import { Link } from "react-router-dom";

type modalType = {
  modal?: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal: React.FC<modalType> = ({setModal }) => {

  const { userInfo } = useAppSelector(store => store.auth)
  const dispatch = useAppDispatch()
    const handleLogOut = () => {
        dispatch(ClearUserInfo("any"));
        window.location.reload();
    };

    



  return (
    <LogoutModalStyles
    >
     
      <Link to={'/'} className="backdrop" onClick={() => setModal(false)}></Link>

      <div
        
        className={"LogoutCard shadow"}
      >
       <div className="center_content h-100 justify-space w-85 py-2 auto flex column gap-1">
          
          <div className="w-85 formwraper auto flex column gap-1">
            <div style={{marginBottom:"15px"}} className="w-100 flex item-center justify-center">
              <TwitterIcon type={'small'}/>
            </div>
            <h4 className="fs-20 text-dark text-start text-bold">Log out of Weeters?
            
            <span className="block text-grey fs-14 text-light py-1">
                You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account. 
            </span>
            </h4>
          
           <div className="flex column gap-1 w-100">
              <div onClick={handleLogOut} className="btn w-100 auto btn-2 fs-16 text-white text-extra-bold">Logout
              </div>
              <Link to={'/'} onClick={() => setModal(false)} className="btn w-100 auto btn-1 fs-16 text-white text-extra-bold">Cancel
              </Link>
           </div>
          </div>

        </div>
      </div>
    </LogoutModalStyles>
    // <h2>hello</h2>
  );
}
export default LogoutModal

const LogoutModalStyles = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  position: fixed;
    left: 50%;
    transform: translateX(-50%);
  display: flex;
  z-index: 4800;
  align-items: center;
  justify-content: center;
  top: 0;
  .formwraper {
    padding: 2rem 0;
    /* width: 70%; */
  }
  .btn.btn-2 {
    background-color:var(--dark-1);
    padding:1.5rem !important;

    cursor: pointer;
     &:hover {
      opacity:.7 !important;
    }
  }

  .btn.btn-1 {
    padding:1rem 1.5rem !important;
    padding:1.5rem !important;

    background-color: transparent !important;
    color: var(--dark-1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      background-color: var(--grey-hover) !important;
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
  .LogoutCard {
    max-width: 600px;
    width: 360px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    box-shadow:var(--shadow);
    position: relative;
    border-radius:20px;
    border-top-right-radius:20px;
    @media (max-width:980px) {
      width: 50%;
    }
    @media (max-width:580px) {
      width: 70%;
    }

  }
  .LogoutCard_wrapper {
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
