import { feedcardtype } from '@/types/feedtype';
import { BiSolidBadgeCheck } from 'react-icons/bi'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { LiaRetweetSolid } from 'react-icons/lia'
import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import TweetModal from '../modals/TweetModal';

const postfeedDetails = {
    tweet_id: 15,
    user_id: 15,
    profile_name: "The champion",
    username: "mhasnneye",
    tweet_text: 'Happy birthday wizkid ',
    timestamp: "07/25/2022",
    retweet_count: 292,
    favorite_count: 299,
    is_verified: false,
    tweet_image: ['https://pbs.twimg.com/media/F1kSXZwXgAEm9lu?format=jpg&name=small'],
    image: "/images/boris-khentov.jpg",
    location: "Agodim",
}

const PostFeedCard = () => {
    const [tweet, setTweet] = useState(false)
    const [drop, setDrop] = useState(false)
    return (
        <FeedCardStyles key={postfeedDetails.tweet_id}>
            <div className={drop ? "dropdownCard  flex column active" : "dropdownCard  flex column"}>
                <div onClick={() => setDrop(false)} className="dropdown_background"></div>
                <ul onClick={() => setDrop(false)} className="flex column w-100 fs-14 text-bold">
                    <li className="flex item-center gap-1">Not interested in this tweet</li>
                    <li className="flex item-center gap-1">Follow Alexander</li>
                    <li className="flex item-center gap-1">Add or remove @Alexander form lists</li>
                    <li className="flex item-center gap-1">Mute Alexander</li>
                    <li className="flex item-center gap-1">Block Alexander</li>
                    <li className="flex item-center gap-1">Mute tweet</li>
                    <li className="flex item-center gap-1">Report tweet</li>
                </ul>
            </div>
            <AnimatePresence
                initial="false"
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {
                    tweet && <TweetModal setModal={setTweet} modal={tweet} />
                }
            </AnimatePresence>
            <div className="flex w-90 auto item-start justify-space feed_card_wrapper gap-1">
                <div className="flex column gap-1">
                    <div className="flex-1 item-start flex gap-1">
                        <div className="image_wrapper">
                            <img src={postfeedDetails.image} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                            <div className="image_gradient"></div>
                        </div>
                        <div className="flex column flex-1" style={{ gap: '.3rem' }}>
                            <h4 className="fs-18 text-extra-bold flex item-center" style={{ gap: '.2rem' }}>
                                {postfeedDetails.profile_name}
                                <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>

                            </h4>
                            <span className="text-light fs-16 text-grey block">@{postfeedDetails.username}</span>

                        </div>
                    </div>
                    <div className="flex-w-100 column gap-1">
                        <h5 style={{ paddingBottom: "1rem" }} className="text-light family1 fs-18">
                            {postfeedDetails.tweet_text}
                        </h5>
                        <div className="w-100 wrapper">
                            {
                                postfeedDetails.tweet_image.map((x, index) => {
                                    return <img key={index} style={{ borderRadius: "10px" }} src={x} alt="" className="w-100 h-100" />
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className="flex item-center justify-end">
                    <div onClick={() => setDrop(true)} className="icons flex item-center justify-center">
                        <BiDotsHorizontalRounded fontSize={'20px'} />
                    </div>
                </div>
            </div>
        </FeedCardStyles>
    )
}

const FeedCardStyles = styled.div`
    width: 100%;
   position: relative;
    padding: 1.5rem .7rem;
    border-bottom: 1px solid var(--border);
    &:hover {
        /* background-color: #f1f1f1; */
        background-color: var(--dark-grey-hover);
    }
    
    .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
        }
        &:hover {
            background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
        }
    }
    .dropdownCard {
        position: absolute;
        right: 2%;
        top: 8px;
        z-index: 40;
        cursor: pointer;
        width: 350px;
        border-radius: 10px;
        box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
        background-color: var(--white);
        height: 0;
        transition: all .3s;    
        opacity:0;
        visibility: hidden;
        .dropdown_background {
            width: 100vw;
            height: 100vh;
            position: fixed;
            z-index: 30;
            top: 0;
            left:0;
            background-color: transparent;
        }
        &.active {
            height: 350px;
            opacity:1;
                visibility: visible;
            ul {

            li {
                padding:2rem 2.4rem;
                opacity:1;
                visibility: visible;
                width: 100%;
                transition: all .4s;
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--dark-grey-hover);

               }
            }
           }
        }
        ul {
            z-index: 35;

li { 
    padding: 1.4rem;
    opacity:0;
    visibility: hidden;
    width: 100%;
    &:hover {
       background-color: #f1f1f1;

   }
}
}
        
    }
    .image_wrapper {
      width:5rem;
      height:5rem;
      border-radius:50%;
      cursor:pointer;
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
      /* transform: translateY(-100%); */
      position: absolute;
      background:rgba(0,0,0,.5);
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
    img {
        object-fit: cover;
    }
    .feedtags_wrapper {
        /* justify-content:center; */
        gap:3rem;
        @media (max-width:580px) {
            gap:1rem;
        }
    }
    .wrapper {
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        display: grid;
        grid-gap: .5rem;
    }
    .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        &:hover {
            color:rgba(29, 156, 240, 0.835) ;
            &.text_2 {

                color:rgba(0, 186, 124, 0.802) ;

            }
            .icons.icon1 {
                background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
            }.icons.icon2 {
                background-color: rgba(0,186,124,.1);
                svg {
                    color:rgba(0, 186, 124, 0.802) ;
                }
            }
        }
       .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
        }
    }
}
    h5 {
        font-size: 16px;
        color: rgb(15, 20, 25);
        font-weight: 300;
        line-height: 20px;
        @media (max-width:580px) {
            font-size: 15px;
        }
    }
  `

export default PostFeedCard