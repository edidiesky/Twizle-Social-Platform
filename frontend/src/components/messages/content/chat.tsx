import Link from 'next/link';
import React, { useState } from 'react';
import { MdAddReaction, MdOutlineAddCircle } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { IoSend } from 'react-icons/io5'
import styled from 'styled-components';

const converstionData = [
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
      },
    ],
    recieverMessage: [
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "I am fine",
      },
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "How was the wekend",
      },
    ],
  },
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
      },
    ],
    recieverMessage: [
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "I am fine",
      },
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "How was the wekend",
      },
    ],
  },
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
      },
    ],
    recieverMessage: [
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "I am fine",
      },
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "How was the wekend",
      },
    ],
  },
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
      },
    ],
    recieverMessage: [
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "I am fine",
      },
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "How was the wekend",
      },
    ],
  },
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
      },
    ],
    recieverMessage: [
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "I am fine",
      },
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "How was the wekend",
      },
    ],
  },
  {
    id: 1,
    senderMessage: [
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "Hi Dear",
      },
      {
        image:
          "/images/johanna-richardson.jpg",
        text: "How was your day",
      },
    ],
    recieverMessage: [
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "I am fine",
      },
      {
        image:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
        text: "How was the wekend",
      },
    ],
  },
];


const ChatContent: React.FC = () => {
  const [message, setMessage] = useState(false)
  return (
    <ChatContentStyles className='flex rightwrapper column gap-4 item-center justify-center'>
      <div className="chatWrapper w-100">
        <Link href={'/edidie'} className="top w-90 auto flex column item-center justify-center gap-2">
          <div className="flex column gap-1 item-center justify-center w-100">
            <div className="image_wrapper">
              <div className="image_gradient"></div>
              <img src="/images/raoul-bhavnani.jpg" alt="" className="avatar_profile" />
            </div>
            <h4 className="fs-20 text-center text-bold text-dark">Mohammed Asamin
              <span className="block fs-16 text-grey text-light">@SINF-163</span>
            </h4>
          </div>
          <h4 className="w-100 auto text-center fs-16 text-light text-dark">
            Software Engineer @ NetApp | Tweets about Tech, AI, productivity tools | Helping you to get into Tech | Let's connect.
          </h4>
          <h4 className="w-85 auto text-center fs-14 text-light text-grey">

            Joined March 2017
            ·
            4,127 Followers
          </h4>
        </Link>
        <div className="flex w-90 auto column gap-1">
          <div className="w-100 chatList column flex gap-2">
            {converstionData.map((x) => {
              return (
                <div className="flex ">
                  <div className="chatCard flex w-100 item-start column">
                    {x.senderMessage.map((x, index) => {
                      return (
                        <div key={index} className="flex py-2 item-center family1 text-light">

                          <div className="flex column gap-1">
                            <div className=" SenderChat">
                              <h4 className="fs-16 text-grey text-light">
                                {x.text}
                              </h4>
                            </div>
                            <div className=" flex gap-1">
                              <h5 className="fs-14 text-light text-grey">
                                Mar 19, 2023, 1:17 AM
                              </h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {x.recieverMessage.map((x, index) => {
                      return (
                        <div key={index} className="flex py-2 justify-end revieverWrapper item-end family1 text-light">

                          <div className="flex column gap-1 item-end">
                            <div className=" recieverChat">
                              <h4 className="fs-16 text-white text-light">
                                {x.text}
                              </h4>
                            </div>
                            <div className=" flex gap-1">
                              <h5 className="fs-14 text-end text-light text-grey">
                                Mar 19, 2023, 1:17 AM
                              </h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* search */}
        <form action="" className="w-90 family1 auto flex item-center">
          <div className="flex item-center">
            <div className="icons flex item-center justify-center avatar">
              <MdAddReaction className="fs-20" color={'var(--blue-1)'} />
            </div>
            <div className="icons flex item-center justify-center avatar">
              <MdOutlineAddCircle className="fs-20" color={'var(--blue-1)'} />
            </div>
            <div className="icons flex item-center justify-center avatar">
              <AiFillPicture className="fs-20" color={'var(--blue-1)'} />
            </div>
          </div>
          <input
            type="text"
            placeholder="Aa"
            className="input fs-16 flex-1 text-dark family1"
          />
          <div className="icons flex item-center justify-center avatar">
            <IoSend className="fs-20" color={'var(--blue-1)'} />
          </div>
        </form>
      </div>
    </ChatContentStyles>
  )
}

const ChatContentStyles = styled.div`
height: 100vh;
   .chatWrapper {
    /* height: 85vh;
    overflow: auto; */
   }
      .image_wrapper {
      width:10rem;
      height:10rem;
      border-radius:50%;
      cursor:pointer;
      position: relative;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
      .chatList{
        border-top: 1px solid rgba(0,0,0,.1);
        padding-top: 4rem;
      }
      .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      background:rgba(0,0,0,1) !important;
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      
    }
    }
    .revieverWrapper {
    justify-content: flex-end;
    gap: 1.2rem;
    align-self: flex-end;
    position: relative;
  }
  .SenderChat {
    background-color: var(--grey-2);
   &:nth-child(1) {
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
   }
   border-radius: 40px;
  }
  .recieverChat {
   border-radius: 40px;
   background-color: var(--blue-1);
  }
  .SenderChat,
  .recieverChat {
    padding: 1.5rem 3rem;
    @media (max-width: 980px) {
      background-color: #fff;
      padding: 2rem 4rem;
    }
  }
  .chatCard {
    display: flex;
    display: flex;
    align-items: flex-start;
  }
    .top {
    padding:5rem 1.5rem;

        &:hover {
        background-color: var(--grey-2);
    }
    }

    .avatar {
    width: 4rem;
    height: 4rem;
  }
  form {
    position: sticky;
    bottom: -5%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem 2rem;
    gap: 0.5rem;
    background-color: var(--grey-2);
    border-radius: 40px;
    z-index: 300;

    .input {
      height: 3.8rem;
      background-color: inherit;
      border-radius: 40px;
      position: sticky;
      top: 0;
      z-index: 3000;
      padding: 0 2rem;
    }
  }
  `

export default ChatContent