import React, { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { BiSolidBadgeCheck } from 'react-icons/bi'
import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
import TweetFormSection from "../common/tweetsection";
import MediaIcon from "../../assets/svg/media";
import GiIcon from "../../assets/svg/gif";
import ScheduleIcon from "../../assets/svg/schedule";
import PollIcon from "../../assets/svg/poll";
import WorldIcon from "../../assets/svg/world";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import LoaderIndex from "../loaders";
import UploadImage from "./UploadImage";
import QuoteFeedCard from "./QuoteCard";
import { GetSingleTweetDetails } from "../../features/tweet/tweetReducer";
import axios from "axios";
import FeedImage from "../common/FeedImage";
import { CreateTweetcomment } from "../../features/comment/commentReducer";


type modalType = {
  modal?: Boolean;
  type?: string;
  id?: string;
  setModal: (val: boolean) => void;
}

const TweetModal: React.FC<modalType> = ({ modal, setModal, type, id }) => {
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(GetSingleTweetDetails({Detailsdata:id}))
  }, [id])
  const { tweetDetails } = useAppSelector(store => store.tweet)
  const { commentisLoading, commentisSuccess } = useAppSelector(store => store.comment)
  const [uploading, setUploading] = useState(false);
  const [alert, setAlert] = useState(false);
  const { userInfo } = useAppSelector(store => store.auth)
  const [text, setText] = useState<string>('')
  const [images, setImages] = useState<string[]>([])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // get the file
    const file = e.target.files;
    setUploading(true);
    // create formdata
    const formData = new FormData();
    if (file !== null) {
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
      const { data } = await axios.post("/api/v1/upload", formData, config);

      setImages(data.urls);
      setAlert(true);
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostReply = () => {
    dispatch(CreateTweetcomment({
      reply_image: images,
      text: text,
      tweetid: tweetDetails?._id
    }))
    setText('')
    setModal(false)
  }
  useEffect(() => {
    if (!commentisLoading && commentisSuccess) {
      setModal(false)
    }
  }, [commentisLoading, commentisSuccess, setModal])
  return (

    <>
    {
        commentisLoading && <LoaderIndex />
      }
      <TweetModalStyles
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
            <div className=" w-100 topHeader flex">
              <div className="w-90 auto">
                <div onClick={() => setModal(false)} className="icons text-dark flex item-center justify-center">
                  <RxCross2 fontSize={'20px'} />
                </div>
              </div>
            </div>
            {/* original feed */}
            <div className="tweet_content w-100 flex column gap-2">
              <div className="w-90 auto flex gap-1 item-start">
                <div style={{ gap: '.4rem' }} className="flex column justify-center item-center">
                  <div className="image_wrapper">
                    <div className="image_gradient"></div>
                    <img src={tweetDetails?.tweet_user_id?.profile_image_url} alt="" className="avatar_profile" />
                  </div>
                  <div className="timeline"></div>
                </div>
                <div className="flex flex-1 column gap-1">
                  <div className="flex w-85 column flex-1" style={{ gap: '.7rem' }}>
                    <h4 className="fs-18 text-extra-bold flex item-center" style={{ gap: '.2rem' }}>
                      {tweetDetails?.tweet_user_id?.display_name}
                      <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                      <span className="text-light fs-16 text-grey block">@{tweetDetails?.tweet_user_id?.name}</span>
                      <span className="text-light fs-16 text-grey block">· 10h</span>
                    </h4>
                    <h5 className="w-90 text-light family1 fs-14">
                      {tweetDetails?.tweet_text}
                    </h5>
                    <div className="w-100">
                      {
                        tweetDetails?.tweet_image?.length > 0 && <FeedImage images={tweetDetails?.tweet_image} />
                      }
                    </div>
                    <span className="text-light fs-16 text-grey block">Replying to <span className="text-blue">{tweetDetails?.tweet_user_id?.name}</span> </span>


                  </div>
                </div>
              </div>
              <div className="w-90  auto flex item-start gap-1">
                {/* check if the profile image url exists */}
                {
                  userInfo?.profile_image_url ?
                    <img src={userInfo?.profile_image_url} alt="images-avatar" className="avatar" />
                    : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar" className="avatar" />

                }

                <div style={{ gap: "6px" }} className="area flex column flex-1 item-start">
                  <textarea
                    name={"text"}
                    value={text}
                    onChange={(e) => setText(e.target.value)}

                    placeholder='Post your reply' className="text text-light w-100"></textarea>
                  <div className="w-100 auto">
                    {
                      uploading && <div className="flex item-center py-2 justify-center">
                        <LoaderIndex type='small' />
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
            </div>

            <div className="bottom w-100">

              <div className="flex w-90 auto item-center justify-space">
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
                {/* {onClick = { handlePost } } */}
                <button onClick={handlePostReply} disabled={!text && images.length === 0} className="btn btn-3 fs-14 text-extra-bold text-white">Reply</button>
              </div>
            </div>

          </div>
        </motion.div>
      </TweetModalStyles>
    </>
   
    // <h2>hello</h2>
  );
}
export default TweetModal

const TweetModalStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 800;
  align-items: start;
  justify-content: center;
  z-index: 4800;
  top: 0;
  .timeline {
    min-height: 4.6rem;
    width:2px;
    background:rgba(0,0,0,.2);
  }
    .topHeader {
      background-color: var(--top1);
  backdrop-filter: blur(12px);
  position:sticky;
  left:0;
  top:0;
    z-index: 3000;
    padding: 1rem 0;
  }

.top {
    max-height: 600px;
    overflow:auto;
    border-radius: 20px;
  }

  .avatar {
        width: 4rem !important;
        height: 4rem !important;
        border-radius: 50%;
        object-fit: cover;
    
    }
    .area {
    }
        .text {
        resize: none;
        border:none;
        outline:none;
        font-size: 17px;
        font-family: inherit;
        font-weight: 400;
        background-color: transparent;
        padding: 1rem ;
        height: 10rem;
        color:var(--dark-1);
        &::placeholder {
            font-size: 19.7px;
            color:var(--grey-1);
            font-weight: light;
        }
    }

.bottom {
    padding:3px 0;
      background-color: var(--top1);
  backdrop-filter: blur(12px);
  position:sticky;
  left:0;
  bottom:0;
    z-index: 3000;
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

  .image_wrapper {
      width:4rem;
      height:4rem;
      position: relative;
      border-radius:50%;
      cursor:pointer;
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
      position: absolute;
      background:rgba(0,0,0,.2);
      opacity:0;
      z-index:20;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      
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
  .icon:hover {
    background-color: #ccc;
  }
 
  .backdrop {
    background: var(--backdrop);

    position: absolute;
    height: 100%;
    width: 100%;
     @media (max-width:480px) {
     display: none;

    }
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
    overflow: hidden;
    margin-top:2rem;
     @media (max-width:480px) {
     
       max-width: 100vw;
    min-width: 100vw;
    border-radius: 0px;

    }
  }
`;
