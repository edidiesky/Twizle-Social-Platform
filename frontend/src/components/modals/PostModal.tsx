import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgress } from '@mui/material';

import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
import MediaIcon from "../../assets/svg/media";
import GiIcon from "../../assets/svg/gif";
import ScheduleIcon from "../../assets/svg/schedule";
import PollIcon from "../../assets/svg/poll";
import WorldIcon from "../../assets/svg/world";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import UploadImage from "./UploadImage";
import { CreateTweet } from "../../features/tweet/tweetReducer";
import LoaderIndex from "../loaders";

type modalType = {
  modal?: boolean;
  type?: string;
  setModal: (val: boolean) => void;
}

const PostModal: React.FC<modalType> = ({ modal, setModal, type }) => {
  const [uploading, setUploading] = useState(false);
  const [alert, setAlert] = useState(false);
  const dispatch = useAppDispatch()
  const { userInfo } = useAppSelector(store => store.auth)
  const {
    createtweetisLoading,
    createtweetisSuccess,
    createtweetisError,
  } = useAppSelector(store => store.tweet)
  const [text, setText] = useState<string>('')
  const [images, setImages] = useState<string[]>([])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // get the file
    const file = e.target.files;
    setUploading(true);
    // create formdata
    const formData = new FormData();
    if(file !== null) {
      for (let i = 0; i < file.length; i++) {
        formData.append("files", file[i]);
      }
    }
   

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URLS}/upload`, formData, config);

      setImages(data.urls);
      setAlert(true);
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handlePost = () => {
    dispatch(CreateTweet({
      tweet_image: images,
      tweet_text: text,
      tweet_user_id: {
        _id: userInfo?._id,
        display_name: userInfo?.display_name,
        name: userInfo?.name,
        bio: userInfo?.bio,
        profile_image_url: userInfo?.profile_image_url,
      }
    }))
    setText('')
    // setModal(false)
  }
  useEffect(()=> {
    if (createtweetisSuccess || createtweetisLoading) {
      setModal(false)
    }
  }, [createtweetisSuccess, createtweetisLoading, setModal])
  return (
    <>
    
     {
        createtweetisLoading && <LoaderIndex />
      }
      <PostModalStyles
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
          className={"deleteCard shadow gap-2"}
        >
          {/* top of the feed */}
          <div className="top w-100 flex column gap-2">
            <div className="w-90 auto">
              <div onClick={() => setModal(false)} className="icons text-dark flex item-center justify-center">
                <RxCross2 fontSize={'20px'} />
              </div>
            </div>


            <div className="flex w-100 column gap-1">
              <div className="w-90 auto flex item-start gap-1">

                {
                  userInfo?.profile_image_url ?
                    <img src={userInfo?.profile_image_url} alt="images-avatar" className="avatar" />
                    : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar" className="avatar" />

                }

                <div style={{ gap: "6px" }} className="area flex column flex-1 item-start">
                  <div style={{ color: "rgb(29, 155, 240)", fontSize: "14px" }} className="replyBtn1 text-bold">Everyone</div>
                  <textarea
                    name={"text"}
                    value={text}
                    onChange={(e) => setText(e.target.value)}

                    placeholder='What is Happening?!' className="text text-light w-100"></textarea>
                  <div className="w-100 auto">
                    {
                      uploading && <div className="flex item-center py-2 justify-center">
                        <LoaderIndex type="small" />
                      </div>
                    }
                    {
                      images.length !== 0 && <UploadImage
                        images={images}
                        setImages={setImages}
                      />
                    }

                  </div>
                </div>
              </div>
              <div className="w-90 auto flex item-start">
                <div style={{ gap: "5px" }} className="flex replyBtn item-center gap-1">
                  <WorldIcon />
                  <span style={{ color: "rgb(29, 155, 240)", fontSize: "13px" }} className="fs-12 text-bold">Everyone can reply</span>
                </div>
              </div>
              <div className="flex bottom w-90 auto item-center justify-space">
                <div className="flex item-center">
                  <label
                    htmlFor="upload" className="icons flex item-center justify-center">
                    <input
                      type="file"
                      id="upload"
                      placeholder="Gig Image"
                      autoComplete="off"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                      multiple
                      className="w-100"
                    />
                    <MediaIcon />
                  </label>
                  <label
                    htmlFor="upload" className="icons flex item-center justify-center">
                    <input
                      type="file"
                      id="upload"
                      placeholder="Gig Image"
                      autoComplete="off"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                      multiple
                      className="w-100"
                    />
                    <GiIcon />
                  </label>
                  <label
                    htmlFor="upload" className="icons flex item-center justify-center">
                    <input
                      type="file"
                      id="upload"
                      placeholder="Gig Image"
                      autoComplete="off"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                      multiple
                      className="w-100"
                    />
                    <ScheduleIcon />
                  </label>
                  <label
                    htmlFor="upload" className="icons flex item-center justify-center">
                    <input
                      type="file"
                      id="upload"
                      placeholder="Gig Image"
                      autoComplete="off"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                      multiple
                      className="w-100"
                    />
                    <PollIcon />
                  </label>
                  <label
                    htmlFor="upload" className="icons flex item-center justify-center">
                    <input
                      type="file"
                      id="upload"
                      placeholder="Gig Image"
                      autoComplete="off"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                      multiple
                      className="w-100"
                    />
                    <GiIcon />
                  </label>
                </div>
                <button disabled={!text && images.length === 0} onClick={handlePost} className="btn btn-3 fs-14 text-extra-bold text-white">Reply</button>
              </div>
            </div>
          </div>

        </motion.div>
      </PostModalStyles>
    </>
   
    // <h2>hello</h2>
  );
}
export default PostModal

const PostModalStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 5800;
  align-items: start;
  justify-content: center;
  top: 0;
  .replyBtn {
    padding:4px 10px;
    border-radius:20px;
    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }
   .replyBtn1 {
    padding:2px 15px;
    border-radius:20px;
    border:1px solid var(--border1);

    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }
.bottom {
    border-top: 1px solid var(--border);
    padding:10px 0;
    padding-bottom:6px;
}
.btn.btn-3 {
  background:var(--blue-1);
   &:disabled {
      cursor: not-allowed;
      opacity: .3 !important;
    }
    &:hover {
      opacity:.8;
    }
}

.area {
  

    }
        .text {
        resize: none;
        border:none;
        outline:none;
        font-size: 20px;
        font-family: inherit;
        font-weight: 400;
        background-color: transparent;
        padding: 1rem ;
        color:var(--dark-1);
        &::placeholder {
            font-size: 20px;
            color:var(--grey-1);
            font-weight: light;
        }
    }

  .avatar {
        width: 4rem !important;
        height: 4rem !important;
        border-radius: 50%;
        object-fit: cover;
    
    }

  .profile_background {
    background-color: #B2B2B2;
    height: 20rem;
    position:relative;
  }
  .btn-3 {
        padding: 1rem 2rem;
  }
  .icon {
  }
  .icons:hover {
  background:rgba(29, 155, 240, 0.1) !important;
  }
 
  .backdrop {
    background: var(--backdrop);
    z-index:200000;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .deleteCard {
    max-width: 600px;
    min-width: 600px;
    display: flex;
    z-index:210000;

    flex-direction: column;
    background: var(--white);
    border-radius: 14px;
    box-shadow:var(--shadow);

    position: relative;
    padding:1rem 0;
    margin-top:2rem;
     @media (max-width:480px) {
      width: 90%;
       max-width: 100vw;
    min-width: 100vw;
    border-radius: 0px;
    min-height: 100vh;
    margin:0;

    }
  }
`;
