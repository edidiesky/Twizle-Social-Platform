import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RxCross2 } from 'react-icons/rx'
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import { LuMailPlus } from 'react-icons/lu'
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import LoaderIndex from "../loaders";
import { GetSingleTweetDetails } from "../../features/tweet/tweetReducer";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";


type modalType = {
    modal?: Boolean;
    type?: string;
    id?: string;
    setModal: (val: boolean) => void;
}

const userdata = [
    // edgar
    {
        "username": "allenakinkunle123",
        "display_name": "Edgar Allen Poe",
        "email": "allenakinkunle123@gmail.com",
        

        "bio": "Building http://TechPad.ink, @contentreio| Founder @master_backend | Author of http://EnterpriseVue.dev | I help you become a great Backend Engineer and make money",
        "profile_banners": "",
        "website": "linktr.ee/allenakinkunle123",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "1/14/2011",
        "verified": true,
        "profile_image_url": "https://i.pinimg.com/236x/80/5f/69/805f6966f9ff13b3dad64b3c10f823b8.jpg",
        "language": "English",
        "profession": "Entrepreneur"
    },
    // eddy
    {
        "username": "bigEDDY",
        "display_name": "Big Eddy",
        "email": "bigEDDY@gmail.com",
        

        "bio": "Founder at @fonoster . Building the open-source alternative to Twilio.",
        "location": "World",
        "profile_banners": "https://pbs.twimg.com/profile_banners/739107184148107264/1688746705/600x200",
        "website": "linktr.ee/bigEDDY",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2002",
        "verified": false,
        "profile_image_url": "",
        "language": ["English"]
    },
    {
        "username": "daominique",
        "display_name": "dom",
        "email": "daominique@gmail.com",
        

        "bio": "Teacher 👨🏻‍🏫 to Tech 👨🏻‍💻 in 1.5 yrs ~ Fullstack SWE ~ C#/.Net ~ SQL ~ Python ~ DevOps ~ Ironman Triathlon ‘24 🏊🏼‍♂️🚴🏼‍♂️🏃🏻~ Coram Deo 🕊️",
        "location": "Colorados, USA",
        "profile_banners": "https://pbs.twimg.com/profile_banners/739107184148107264/1688746705/600x200",
        "website": "linktr.ee/daominique",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2002",
        "verified": false,
        "profile_image_url": "https://i.pinimg.com/236x/d6/fb/a8/d6fba80c63c6852632a91ac7edb2aa07.jpg",
        "language": ["Spanish"]
    },
    {
        "username": "DeniTechh",
        "display_name": "denis",
        "email": "DeniTechh@gmail.com",
        

        "bio": "I’m a  @DevAtTheBeachh. ????? @Hashnode.  Building @SetupsProject s4 n&w @_buildspace • Become a (better) developer: http://denitech.dev/#/portal/signup",
        "location": "HashNode",
        "profile_banners": "https://pbs.twimg.com/profile_banners/1440785614673113093/1691059305/600x200",
        "website": "linktr.ee/DeniTechh",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2004",
        "verified": false,
        "profile_image_url": "https://i.pinimg.com/236x/46/d9/ca/46d9cad2612db0ee8d61cf4678231b77.jpg",
        "language": "English",
        "profession": "Entrepreneur"
    },
    {
        "username": "Stiverst",
        "display_name": "striver_79",
        "email": "striver_79@gmail.com",
        

        "bio": "Engineer @ Google | Founder - tUF| Youtuber (300K+ Subs) | Angular, Java | Cricket Enthusiast | http://Ex-Media.net, Amazon",
        "location": "India",
        "profile_banners": "https://pbs.twimg.com/profile_banners/1440785614673113093/1691059305/600x200",
        "website": "linktr.ee/striver_79",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2010",
        "verified": false,
        "profile_image_url": "https://i.pinimg.com/236x/36/d5/5d/36d55d4351eaa9be39de78c2ed522e27.jpg",
        "language": "English",
        "profession": "Entrepreneur"
    },
    // gogole africa
    {
        "username": "googleafrica",
        "display_name": "Google in Africa",
        "email": "googleafrica@gmail.com",
        

        "bio": "Building the tools for Africa's digital transformation.",
        "location": "Sub Saharan Africa",
        "profile_banners": "https://pbs.twimg.com/profile_banners/1440785614673113093/1691059305/600x200",
        "website": "google-africa.blogspot.com",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2009",
        "verified": false,
        "profile_image_url": "https://i.pinimg.com/236x/36/d5/5d/36d55d4351eaa9be39de78c2ed522e27.jpg",
        "language": "English",
        "profession": "Science & Technology"
    },
    // daily mail
    {
        "username": "DailyMailUK",
        "email": "DailyMailUK@gmail.com",
        

        "display_name": "Daily Mail U.K",
        "bio": "For the latest updates on breaking news visit our website: http://dailymail.co.uk 🇬🇧",
        "location": "London, UK",
        "profile_banners": "https://pbs.twimg.com/profile_banners/111556423/1663943035/600x200",
        "website": "google-africa.blogspot.com",
        "followers_count": 0,
        "following_count": 0,
        "tweets_count": 0,
        "createdAt": "8/15/2002",
        "verified": false,
        "profile_image_url": "https://pbs.twimg.com/profile_banners/111556423/1663943035/600x200",
        "language": "English",
        "profession": ""
    },
]

const MessageTab: React.FC<modalType> = ({ }) => {
    const dispatch = useAppDispatch()
    const [active, setActive] = useState(false)
    // React.useEffect(() => {
    //     dispatch(GetSingleTweetDetails(id))
    // }, [id])
    const { tweetDetails } = useAppSelector(store => store.tweet)
    return (
        <MessageTabStyles
            className={active?'active':''}
        >
            <div
                className={"deleteCard shadow gap-2"}
            >
                {/* top of the feed */}
                <div className="top w-100 flex column">
                    <div className="w-100 topwrapper flex">
                        <div className="w-85 auto flex item-center justify-space">
                            <h3 className="fs-24 text-bold">Messages</h3>
                            <div className="flex justify-end item-center">
                                <div className="icons text-dark flex item-center justify-center">
                                    <LuMailPlus fontSize={'20px'} />
                                </div>
                                <div onClick={() => setActive(!active)} className="icons text-dark flex item-center justify-center">
                                    <MdOutlineKeyboardDoubleArrowDown fontSize={'24px'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="content flex column w-100">
                        {
                            userdata.map(x=> {
                                return <li className="fs-16 list w-100 text-bold flex item-center justify-space">
                                    <div className="image_wrapper">
                                        <img src={x?.profile_image_url} alt="" className="avatar_profile" />
                                    </div>
                                    <div className="flex flex-1 item-center justify-space">
                                        <div style={{ gap: '.4rem' }} className="flex column flex-1">
                                            <h4 className="fs-16 text-dark text-bold relative flex item-center" style={{ gap: '1rem' }}>
                                                <div style={{ gap: ".3rem" }} className=" flex item-center">
                                                    <span className="text-bold tweet_user">{x?.display_name}</span>
                                                    <span className="text-light fs-14 text-grey tweet_user1">@{x?.username}</span>
                                                </div>

                                                {/* <span sty></span> */}
                                                <span style={{ fontSize: "15px" }} className="date text-light text-grey ">2hr</span>
                                            </h4>
                                            <h5 style={{ paddingBottom: "1rem", fontSize: "15px", lineHeight: "20px" }} className="text_dark_grey text-light family1">
                                                {/* {x.tweet_text} */} Good Morning Sir!
                                            </h5>
                                        </div>
                                        <div className="icons text-dark flex item-center justify-center">
                                            <BsThreeDots fontSize={'20px'} />
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                    {/* <div className="bottom w-100">
                    </div> */}

                </div>
            </div>
        </MessageTabStyles>
        // <h2>hello</h2>
    );
}
export default MessageTab

const MessageTabStyles = styled.div`
 position: absolute;
 right:10%;
 bottom:-200%;
 width:85%;
 transition: all .6s ease;
 @media (min-width:1440px) {
        bottom: -250%;

 }
  @media (min-width:2560px) {
        bottom: -450%;
    }
 &.active {
    bottom:-150%;
     @media (min-width:1440px) {
        bottom: -250%;
 }
    @media (min-width:2560px) {
        bottom: -350%;
    }
 }
  .timeline {
    min-height: 4.6rem;
    width:2px;
    background:rgba(0,0,0,.2);
  }
  .list {
    padding: 1.2rem 2rem;
  }
   .tweet_user, 
   .tweet_user1 {
        overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70px;
  
    }
.top {
    height: 1099px;
    overflow:auto;
    border-radius: 20px;
  }
  .topwrapper {
 background-color: var(--top1);
  backdrop-filter: blur(12px);
  position:sticky;
    padding:6px 0;
  left:0;
  top:0;
    z-index: 3000;
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
        font-size: 20px;
        font-family: inherit;
        font-weight: 400;
        background-color: transparent;
        padding: 1rem ;
        height: 10rem;
        color:var(--dark-1);
        &::placeholder {
            font-size: 20px;
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
      width:4.5rem;
      height:4.5rem;
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

  .deleteCard {
    max-width: 100%;
    min-width: 100%;
    display: flex;
    z-index:210000;

    flex-direction: column;
    background: var(--white);
    border-radius: 14px;
    box-shadow:var(--shadow);
    overflow:hidden;
    position: relative;
    margin-top:2rem;
  }
`;
