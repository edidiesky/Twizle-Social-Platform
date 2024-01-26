
import axios from "axios";
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { AiOutlineCheck } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import { offDisplayModal } from "../../features/tweet/tweetSlice";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { setBackgroundThemes, setColorTheme } from "../../features/theme/themeSlice";

type modalType = {
  modal?: boolean;
  id?: string;
  setModal?: (val: boolean) => void;
}

const DisplayModal: React.FC<modalType> = ({ modal, setModal, id }) => {
  const dispatch = useAppDispatch()
  const [colortab, setColorTab] = useState(0)
  const [backgroundtab, setBackgroundTab] = useState(0)
  const [color, setColor] = useState([
    {
      text:"blue-theme",
      color:"var(--blue-1)"
    },
    {
      text: "yellow-theme",
      color: "#FFD400"
    },
    {
      text: "pinkred-theme",
      color: "#F91880"
    },
    {
      text: "purple-theme",
      color: "#7856FF"
    },
    {
      text: "greyred-theme",
      color: "#FF7A00"
    },
     {
      text: "green-theme",
       color: "#00BA7C"
    }
  ])
  const handleBackgroundTheme = (theme: string, tab: number) => {
    // setThemes(theme)
    setBackgroundTab(tab)
    dispatch(setBackgroundThemes(theme))
  }
  const handleColorTheme = (theme: string, tab: number) => {
    setColorTab(tab)
    dispatch(setColorTheme(theme))
  }
 

  return (
    <DisplayModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      <div className="backdrop" onClick={() => dispatch(offDisplayModal('any'))}></div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow gap-2"}
      >
        {/* top of the feed */}
        <div className="top w-100 flex column gap-2">
          {/* <div className="w-90 topHeader auto">
            <div onClick={() => dispatch(offDisplayModal('any'))} className="icons text-dark flex item-center justify-center">
              <RxCross2 fontSize={'20px'} />
            </div>
          </div> */}


          <div className="flex w-100 column gap-1">
            <div className="w-90 auto flex py-1 item-center justify-center column gap-1">
              <h3 className="fs-24 w-100 text-center text-extra-bold">Customize your view
                <span className="block fs-15 py-1 text-center text-grey text-light">
                  These settings affect all the X accounts on this browser.
                </span>
              </h3>
              {/* twitter colors */}
              <div className="w-85 auto">
                <div className="w-90 auto card flex item-start gap-2">
                  <div className="image_wrapper">
                    <div className="image_gradient"></div>
                    <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />
                  </div>
                  <div style={{ gap: '.4rem' }} className="flex flex-1 column">
                    <h4 className="fs-18 text-dark text-extra-bold relative flex item-center" style={{ gap: '.4rem' }}>
                      <div style={{ gap: '.4rem' }} className="tweet_user flex item-center">
                        X
                        <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                        <span style={{ fontSize: "15px" }} className="text-light  text-grey ">@X</span>
                        <span style={{ fontSize: "15px" }} className="text-light  text-grey ">2h</span>
                      </div>

                      {/* <span sty></span> */}
                      <span style={{ fontSize: "15px" }} className="date text-light text-grey "></span>
                    </h4>
                    <h5 style={{ paddingBottom: "1rem", fontSize: "16px" }} className="text_dark_grey text-light family1">
                      At the hearts of X are short messages called posts - Just like this one - Which can include photos, videos, links, text, hashtags and mentions like @X
                    </h5>
                  </div>
                </div>
              </div>
              <div className="w-90 auto flex column gap-2">
                {/* color tab */}
                <div className="w-100 flex column gap-1">
                  <h4 className="fs-14 text-grey text-bold">Color</h4>
                  <div className="tab_wrapper justify-space flex item-center">
                    {color.map((x, index) => {

                      const active = index === colortab
                      return <div onClick={() => handleColorTheme(`${x.text}`, index)} style={{ background: `${x.color}` }}
                        className="card_color text-white flex item-center justify-center">
                        <span className={active ? "flex item-center justify-center active" : "flex item-center justify-center"}>
                          <AiOutlineCheck fontSize={'24px'} />
                        </span>
                      </div>
                    })

                    }
                  </div>
                </div>
                {/* color tab */}
                <div className="w-100 flex column gap-1">
                  <h4 className="fs-14 text-grey text-bold">Background</h4>
                  <div className="tab_wrapper justify-space gap-1 flex item-center">
                    {/* blue */}
                    <div onClick={() => handleBackgroundTheme('light-theme', 0)} className={`background_tab flex-1 ${backgroundtab === 0 && `active`} fs-15 text-bold flex item-center justify-center gap-1`}>
                      <div className="icons1 flex item-center justify-center">

                        <span className={backgroundtab === 0 ? "flex icon_check item-center justify-center active" : "flex icon_check item-center justify-center"}>
                          <AiOutlineCheck />
                        </span>
                      </div>
                      <span style={{color:"#000"}} className="flex-1"> Default</span>
                    </div>
                    {/* blue */}
                    <div onClick={() => handleBackgroundTheme('dim-theme', 1)} className={`background_tab flex-1 text-white ${backgroundtab === 1 && `active`} tab1 fs-15 text-bold flex item-center justify-center gap-1`}>
                      <div className="icons1 icon2 flex item-center justify-center">
                        <span 
                        className={backgroundtab === 1 ? 
                        "flex icon_check item-center justify-center active" : "flex icon_check item-center justify-center"}>
                          <AiOutlineCheck />
                        </span>
                      </div>
                      <span className="flex-1">Dim</span>
                    </div>
                    {/* lights out */}
                    <div onClick={() => handleBackgroundTheme('dark-theme', 2)} className={`background_tab flex-1 text-white tab2 ${backgroundtab === 2 && `active`} fs-15 text-bold flex item-center justify-center gap-1`}>
                      <div className="icons1 icon2 flex item-center justify-center">
                        <span className={backgroundtab === 2 ? "flex icon_check item-center justify-center active" : "flex icon_check item-center justify-center"}>
                          <AiOutlineCheck />
                        </span>
                      </div>
                      <span className="flex-1">Lights Out</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 flex item-center justify-center">
              <div onClick={() => dispatch(offDisplayModal('any'))} className="btn btn-3 fs-14 text-extra-bold text-white">Done</div>

            </div>
          </div>
        </div>

      </motion.div>
    </DisplayModalStyles>
    // <h2>hello</h2>
  );
}
export default DisplayModal

const DisplayModalStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 5800;
  align-items: center;
  justify-content: center;
  top: 0;
  overflow: hidden;
  .card {
    padding: 1rem 2rem;
    border: 1px solid var(--border1);
    border-radius: 20px;
  }
  .background_tab {
    padding:1.7rem 1rem;
    border-radius: 4px;
    cursor:pointer;
    min-height:7.5rem;
    background-color: #fff;
    &.active {
      border: 2px solid var(--blue-1);
    }
    &.tab1 {
      background-color: #15202B;
      border: none;
       &.active {
      border: 2px solid var(--blue-1);
    }
    }
    &.tab2 {
      background-color: #0e0d0c;
      border: none;
       &.active {
      border: 2px solid var(--blue-1);
    }
    }
  }
  .icons1 {
     /* width: 3.5rem;
    height: 3.5rem; */
    border-radius: 50%;
     &:hover {
       background-color:rgba(207, 217, 222,.9);
     }

    &.icon2 {
       &:hover {
      background-color:#f9f9f90f;
    }
    }
   
    /* background-color: var(--dark-grey-hover); */
    .icon_check {
      border: 2px solid var(--grey-1);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      &.active {
        opacity: 1;
        visibility: visible;
        background-color: var(--blue-1);
      border: none;

        svg {
 opacity: 1;
        visibility: visible;
        }
      }
      svg {
          width: 60%;
      height: 60%;
      opacity: 0;
      visibility: hidden;
      color: #fff;
      transition: all .3s;
      }
    }
  }
  .card_color {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor:pointer;
    span {
      opacity: 0;
      visibility: hidden;
      transition: all .3s;
      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  .top {
    height: 595px;
    overflow:auto;
    border-radius: 20px;
    padding: 2rem 0;
  }
  .tab_wrapper {
    background-color: var(--grey-2);
    padding:1.4rem;
    border-radius: 13px;
    @media (max-width:580px) {
      /* flex-direction: column; */
    }
  }
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


  .profile_background {
    background-color: #B2B2B2;
    height: 20rem;
    position:relative;
  }
  .btn-3 {
        padding: 1.4rem 2.5rem;
        background-color: var(--blue-1) !important;
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
    overflow: hidden;
 justify-content: center;
 align-items: center;
    flex-direction: column;
    background: var(--white);
    border-radius: 14px;
    box-shadow:var(--shadow);

    position: relative;
    margin-top:2rem;
    @media (max-width:690px) {
       max-width: 100%;
    min-width: 100%;
    height: 100vh;
    }
  }
   .image_wrapper {
      width:4.5rem;
      height:4.5rem;
      position: relative;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
      .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      z-index: 200;
      position: absolute;
      background:rgba(0,0,0,.5);
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      position: absolute;
      object-fit: cover;
    }
    }
`;
