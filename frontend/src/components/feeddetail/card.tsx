
import { BiSolidBadgeCheck } from 'react-icons/bi'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import TweetModal from '../modals/TweetModal';
import { useAppSelector } from '../../hooks/reduxtoolkit';
import { Link } from 'react-router-dom';
import FeedImage from '../common/FeedImage';

const PostFeedCard = () => {
    const [tweet, setTweet] = useState(false)
    const { tweetDetails } = useAppSelector(store => store.tweet)

    const [drop, setDrop] = useState(false)

    return (
        <FeedCardStyles key={tweetDetails?.tweet_id}>


            <div className="flex w-90 auto item-start justify-space feed_card_wrapper gap-1">
                <div className="flex column gap-1 w-100">
                    <div className="flex-1 item-center flex gap-1">
                        <Link to={`/${tweetDetails?.tweet_user_id?.name}`} className="image_wrapper">
                            <div className="image_gradient"></div>
                            {
                                tweetDetails?.tweet_user_id?.profile_image_url ?
                                    <img src={tweetDetails?.tweet_user_id?.profile_image_url} alt="images-avatar" className="avatar_profile" />
                                    : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />

                            }
                        </Link>

                        <div className="flex column flex-1" style={{ gap: '.1rem' }}>
                            <h4 className="fs-16 text-extra-bold flex item-center" style={{ gap: '.2rem' }}>
                                {tweetDetails?.tweet_user_id?.display_name}
                                <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>

                            </h4>
                            <span className="text-light fs-14 text-grey block">@{tweetDetails?.tweet_user_id?.name}</span>

                        </div>
                    </div>
                    <div className="flex-w-100 column gap-1">
                        <h5 style={{ paddingBottom: "1rem" }} className="text-light text-dark family1 fs-18">
                            {tweetDetails?.tweet_text}
                        </h5>
                        <div className="w-100 wrapper">

                            {
                                tweetDetails.tweet_image?.length > 0 && <div className="w-100 wrapper">

                                    <FeedImage id={tweetDetails?._id} images={tweetDetails.tweet_image} name={tweetDetails?.tweet_user_id?.name} />
                                </div>
                            }
                            {/* {
                                tweetDetails?.tweet_image.map((x:any, index?:any) => {
                                    return <img key={index} style={{ borderRadius: "10px" }} src={x} alt="" className="w-100 h-100" />
                                })
                            } */}
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
    padding-bottom: 0;
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
        z-index: 2000;
        cursor: pointer;
        width: 320px;
        border-radius: 10px;
        box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
        background-color: var(--white);
        height: 0;
        transition: all .3s;    
        opacity:0;
        visibility: hidden;
        &.card1 {
        width: 110px;
        right: -40%;
        box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
        &.active {
            ul {
            li {
                padding:1.2rem 1rem;
            }
        }
        }
       
        &.active {
             @media (max-width:500px)  {
            width: 130px;

        }
         @media (max-width:400px)  {
            width: 130px;

        }
        }
        @media (max-width:500px)  {
            width: 130px;

        }
         @media (max-width:400px)  {
            width: 130px;

        }
        
   ul {

            li {
                padding:.7rem 2.4rem;
            }}
            &.active {
            max-height: 130px;
             height: fit-content;
            }
        }
        @media (max-width:500px) {
        width: 300px;

        }
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
              height: 300px;
             min-height: fit-content;

            @media (max-width:400px) {
            width: 310px;
        height: fit-content;

        }
            opacity:1;
                visibility: visible;
            ul {

            li {
                padding:1.5rem 2.4rem;
                opacity:1;
                visibility: visible;
                width: 100%;
                transition: all .4s;
                border-radius:5px;
                @media (max-width:400px) {
                padding:1.7rem 2rem;

                }
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
    padding: 1.2rem;
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
        font-weight: 300;
        line-height: 20px;
        @media (max-width:580px) {
            font-size: 15px;
        }
    }
  `

export default PostFeedCard