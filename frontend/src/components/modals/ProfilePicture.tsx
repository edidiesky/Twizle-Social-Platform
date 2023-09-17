import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import Message from "../loaders/Message";
import axios from "axios";
import CameraIcon from "../../assets/svg/camera";
import TwitterIcon from "../../assets/svg/twitter";
import { clearUserProfile } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type modalType = {
  modal?: boolean;
  setModal: (val: boolean) => void;
  setTab?: any
}

const ProfilePictureModal: React.FC<modalType> = ({ modal, setModal, setTab }) => {
  const { userInfo, userprofileisSuccess } = useAppSelector(store => store.auth)

  const [profilepicture, setProfilePicture] = useState('');
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const dispatch = useAppDispatch()
  const [alert, setAlert] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type?: string) => {
    // get the file
    // console.log('file')

    const file = e?.target?.files[0];
    setUploading(true);
    // create formdata
    const formData = new FormData();
    formData.append("files", file);


    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/v1/upload/single", formData, config);


      setImage(data.urls)
      setAlert(true);
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // navigate home if update profile is succesfull
  useEffect(() => {
    dispatch(clearUserProfile("any"))
  }, [])
  useEffect(() => {
    if (userprofileisSuccess) {
      setTimeout(() => {
        navigate('/')
      }, 4000);

      return () => clearTimeout(navigate('/'),4000)
      // setTab(2)
    }
  }, [userprofileisSuccess, setTab])

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
            <TwitterIcon type={'small'} />
          </div>
          <div className="center_content h-100 justify-space w-85 py-1 auto flex gap-1 column">
            <div className="hidden w-85 auto">
              <div className="w-85 auto"><Message showAlert={false} alertText={'Hello Hi are u fine'} /></div>
            </div>
            <div className="w-85 formwraper auto flex column gap-3">

              <h3 className="fs-35 text-dark text-extra-bold">Pick a profile Picture
                <span style={{ fontSize: "15px", marginTop: "6px" }} className="block text-grey fs-15 text-light">Have a favourite selfie? Upload it now.</span>
              </h3>
              <div className="flex w-100 column flex item-center justify-center" style={{ gap: "10px" }}>
                <label htmlFor="upload_image" className="image_wrapper flex item-center justify-center">
                  <CameraIcon />
                  <input
                    type="file"
                    id="upload_image"
                    placeholder="Gig Image"
                    autoComplete="off"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                    multiple
                    className="w-100"
                  />
                  <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="profile_image" className="avatar_profile" />
                  <div className="image_gradient"></div>
                </label>
                
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
