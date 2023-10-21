import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
import FormInput from "../form/input";
import CameraIcon from "../../assets/svg/camera";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import { UpdateProfile } from "../../features/auth/authReducer";
import LoaderIndex from "../loaders";
import axios from "axios";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type modalType = {
  modal?: boolean;
  setModal: (val: boolean) => void;
}

const AuthModal: React.FC<modalType> = ({ modal, setModal }) => {
  const [auth, setAuth] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [bio, setBio] = useState('false');
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [banner, setBanner] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch()
  const { userInfo, userprofileisLoading } = useAppSelector(store=> store.auth)

  // get the user info from the slice and then update the profile
  useEffect(()=> {
    if(userInfo) {
      const { 
        name, 
        bio, 
        location, 
        display_name,
        profile_image_url ,
        website,
        profession, 
        profile_banners
      } = userInfo
      setBio(bio)
      setName(name)
      setImage(profile_image_url)
      setLocation(location)
      setWebsite(website)
      setBanner(profile_banners)
    }
  }, [setBio, setName, setLocation, setWebsite, setBanner])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type?:string) => {
    // get the file
    // console.log('file')
    const fileInput = e.target as HTMLInputElement;
    if(fileInput.files !== null) {
      const selectedFiles = fileInput.files[0];
      setUploading(true);
      // create formdata
      const formData = new FormData();
      formData.append("files", selectedFiles);


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
    } else {
      setError('No files were being selected')
    }
    
  };
  const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // get the file
    const fileInput = e.target as HTMLInputElement;
    if (fileInput.files !== null) {
      const selectedFiles = fileInput.files[0];
      setUploading(true);
      // create formdata
      const formData = new FormData();
      formData.append("files", selectedFiles);


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
    } else {
      setError('No files were being selected')
    }
  };
  const handleUpdateProfile =()=> {
    dispatch(UpdateProfile({ 
      bio: bio, 
      website: website, 
      name: name, 
      profile_image_url: image,
      profile_banners: banner,
      location: location,
      _id:userInfo?._id
    }))
  }
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
        {
          userprofileisLoading && <LoaderIndex/>
        }
        {/* edit profile top */}
        <div className="edit_wrapper w-100">
          <div className="flex authtop w-100 auto ">
            <div className="w-90 auto flex item-center justify-space item-center">
              <div className="flex item-center gap-3 py-1">
                <div onClick={() => setModal(false)} className="icons flex item-center justify-center"><RxCross2 fontSize={'20px'} /></div>
                <h3 className="fs-20 text-extra-bold">Edit profile</h3>
              </div>
              <div className=" flex item-center justify-end">
                <div onClick={handleUpdateProfile} className="btn btn-3 fs-14 text-bold text-white">Save</div>
              </div>
            </div>
          </div>
          <div className="w-100 authCenterWrapper h-100">
            <div className=" w-100 flex gap-2 column">
              <div className="w-100 profile_background flex item-center justify-center">
                {
                  banner && <img src={banner} alt="images-avatar" className="banner" />

                }
               
                <label htmlFor="upload" style={{
                  width: '5rem', height: "5rem",
                  borderRadius: "50%",
                  zIndex: "50",
                  cursor: "pointer"
                }} className="flex item-center justify-center">
                  <input
                    type="file"
                    id="upload"
                    placeholder="Gig Image"
                    autoComplete="off"
                    style={{ display: "none" }}
                    onChange={handleBannerUpload}
                    multiple
                    className="w-100"
                  />
                  <CameraIcon />
                </label>
               
                

              </div>
              <label htmlFor="upload_image" className="image_wrapper flex item-center justify-center">
                <CameraIcon/>
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
                <img src={image} alt="profile_image" className="avatar_profile" />
                <div className="image_gradient"></div>
              </label>

              <div style={{paddingBottom:"2rem"}} className="w-90 formwraper auto flex column gap-2">
                <FormInput state={name} label={'Name'} setState={setName} />
                <FormInput state={bio} label={'Bio'} types="textarea" setState={setBio} />
                <FormInput state={location} label={'Location'} setState={setLocation} />
                <FormInput state={website} label={'Website'} setState={setWebsite} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </DeleteContainer>
    // <h2>hello</h2>
  );
}
export default AuthModal

const DeleteContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 3800;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 4800;

  position: fixed;
    left: 50%;
    transform: translateX(-50%);
     .banner {
        width:100%;
      height:100%;
      /* transform: translateY(-100%); */
      position: absolute;
      object-fit: cover;
    }
    .authCenterWrapper {
      height:95%;
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
      margin-top:-8rem;
      border:5px solid #fff;
      margin-left:1rem;
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
  .profile_background {
    background-color: rgb(207, 217, 222);
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

  .backdrop {
    background: var(--backdrop);
    /* z-index: 300; */
    position: absolute;
    height: 100%;
    width: 100%;
     @media (max-width:480px) {
      display: none;
     }
  }
  .authtop {
  /* background-color: rgba(255, 255, 255, 0.85); */
      background-color: var(--top1);

  backdrop-filter: blur(12px);
  position:sticky;
  left:0;
  top:0;
    z-index: 3000;
  }
  .deleteCard {
    max-width: 80vw;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 20px;
    position: relative;
    box-shadow:var(--shadow);
    // padding-right:10px;
    overflow:hidden;
    .edit_wrapper {
height: 600px;
overflow:auto;
    border-radius: 20px;

    }

    @media (max-width:980px) {
      width: 70%;
    }
    @media (max-width:480px) {
      width: 90%;
       max-width: 100vw;
    min-width: 100vw;
    border-radius: 0px;

    }

  }
  .center_content {
    background: #fff;
    position: relative;
      z-index: 2000;
  }
`;
