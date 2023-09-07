import React, { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { BiSolidBadgeCheck } from 'react-icons/bi'
import styleds from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
import PostFormSection from "../common/tweetsection";
import MediaIcon from "../../assets/svg/media";
import GiIcon from "../../assets/svg/gif";
import ScheduleIcon from "../../assets/svg/schedule";
import PollIcon from "../../assets/svg/poll";
import WorldIcon from "../../assets/svg/world";
import { useAppSelector } from "../../hooks/reduxtoolkit";
import UploadImage from "./UploadImage";


type modalType = {
  modal?: Boolean;
  type?: string;
  setModal: (val: Boolean) => void;
}

const PostModal: React.FC<modalType> = ({ modal, setModal, type }) => {

  const { userInfo } = useAppSelector(store => store.auth)

  const [images, setImages] = useState(['./blog.jpg', './blog.jpg'])

  return (
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
            <div className="icons text-dark flex item-center justify-center">
              <RxCross2 fontSize={'20px'} />
            </div>
          </div>


          <div className="flex w-100 column gap-1">
            <div className="w-90 auto flex item-start gap-1">

              {
                userInfo?.image ?
                  <img src={userInfo?.image} alt="images-avatar" className="avatar" />
                  : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar" className="avatar" />

              }

              <div style={{ gap: "6px" }} className="area flex column flex-1 item-start">
                <div style={{ color: "rgb(29, 155, 240)", fontSize: "14px" }} className="replyBtn1 text-bold">Everyone</div>
                <textarea placeholder='What is Happening?!' className="text text-light w-100"></textarea>
                <div className="w-90 auto">
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
                <div className="icons flex item-center justify-center">
                  <MediaIcon />
                </div> <div className="icons flex item-center justify-center">
                  <GiIcon />
                </div>
                <div className="icons flex item-center justify-center">
                  <ScheduleIcon />
                </div>
                <div className="icons flex item-center justify-center">
                  <PollIcon />
                </div>
                <div className="icons flex item-center justify-center">
                  <GiIcon />
                </div>
              </div>
              <div className="btn btn-3 fs-14 text-extra-bold text-white">Reply</div>
            </div>
          </div>
        </div>

      </motion.div>
    </PostModalStyles>
    // <h2>hello</h2>
  );
}
export default PostModal

const PostModalStyles = styleds(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 3800;
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
    border:1px solid rgba(0,0,0,.4);
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
            font-size: 24px;
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

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .deleteCard {
    max-width: 600px;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 14px;
    box-shadow: 0 5px 1rem rgba(0, 0, 0, 0.3);
    position: relative;
    padding:1rem 0;
    margin-top:2rem;
  }
`;
