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


type modalType = {
  modal?: Boolean;
  type?: string;
  setModal: (val: Boolean) => void;
}

const PostModal: React.FC<modalType> = ({ modal, setModal, type }) => {

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
              <div className="image_wrapper">
                <img src={"https://i.pinimg.com/236x/c1/d9/07/c1d907446b77689dd88526dc65042dee.jpg"} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                <div className="image_gradient"></div>
              </div>
              <div className="area flex-1">
                <textarea placeholder='What is Happening' className="text text-light w-100"></textarea>
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
.bottom {
    border-top: 1px solid var(--border);
    padding:10px 0;
    padding-bottom:6px;
}
.btn.btn-3 {
  background:var(--blue-1);
}

.area {
        height: 14rem;

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
            font-weight: 400;
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
  }
  .deleteCard {
    max-width: 80vw;
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
