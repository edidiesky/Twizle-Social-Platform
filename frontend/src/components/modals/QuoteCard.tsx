
import { BiSolidBadgeCheck, BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxtoolkit';
import FeedImage from '../common/FeedImage';
import { CreateQuote } from '../../features/quote/quoteReducer';

const QuoteFeedCard = () => {
    const { tweetDetails } = useAppSelector(store => store.tweet)

    const { userInfo } = useAppSelector(store => store.auth)
    const [drop, setDrop] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    

    return (
        <FeedCardStyles key={tweetDetails?._id}>
            <div className={drop ? "dropdownCard  flex column active" : "dropdownCard  flex column"}>
             <div onClick={() => setDrop(false)} className="dropdown_background"></div>
               
            </div>
            <div  className="flex w-100 auto item-start feed_card_wrapper gap-1">
                <div className="image_wrappers">
                    <div className="image_gradient"></div>
                    {
                        tweetDetails?.tweet_user_id?.profile_image_url ?
                            <img src={tweetDetails?.tweet_user_id?.profile_image_url} alt="images-avatar" className="avatar_profile" />
                            : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />

                    }
                </div>

                <div  className="flex column flex-1" style={{ gap: '.3rem' }}>
                    <h4 className="fs-16 text-dark text-extra-bold flex item-center" style={{ gap: '.2rem' }}>
                        {tweetDetails?.tweet_user_id?.display_name}
                        <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                        <span style={{ fontSize: "15px" }} className="text-light text-grey ">@{tweetDetails?.tweet_user_id?.name}</span>
                    </h4>
                    <h5 style={{ paddingBottom: "1rem", fontSize: "15px", lineHeight: "20px" }} className="text_dark_grey text-light family1">
                        {tweetDetails?.tweet_text}
                    </h5>
                    

                </div>
            </div>
            <div className="w-100">
                <div className="w-100">
                    {
                        tweetDetails?.tweet_image?.length > 0 && <FeedImage images={tweetDetails?.tweet_image} />
                    }
                </div>
            </div>

        </FeedCardStyles>
    )
}

const FeedCardStyles = styled.div`
    width: 100%;
    padding: 1.7rem;
    padding-bottom:.6rem;
   position: relative;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 16px;
    &:hover {
        background-color: var(--dark-grey-hover);
    }
     .image_wrappers {
      width:2.6rem;
      height:2.6rem;
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
    h5 {
        font-weight: 600;
        font-size: 15px;
        @media (max-width:980px) {
        font-size: 15.5px !important;
       }
       @media (max-width:580px) {
        font-size: 14px !important;
       }
    }
    .dropdownCard {
        position: absolute;
        right: 2%;
        top: 8px;
        z-index: 2000;
        cursor: pointer;
        width: 370px;
        border-radius: 10px;
        box-shadow: var(--shadow);
        background-color: var(--white);
        height: 0;
        transition: all .3s;    
        opacity:0;
        visibility: hidden;
        &.card1 {
        width: 130px;
        right: -40%;
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
    .icons2 {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;
        position: absolute;
        right: 2%;
        top: 8px;
        /* z-index:40; */
        cursor: pointer;

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
    img {
        object-fit: cover;
    }
    .feedtags_wrapper {
        /* justify-content:center; */
        gap:5rem;
        @media (max-width:580px) {
            gap:1rem;
        }
    }
    /* .wrapper {
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        display: grid;
        grid-gap: .5rem;
    } */
    .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        color:rgb(113, 118, 123);
        &:hover {
            color:rgba(29, 156, 240, 0.835) ;
            &.text-3 {
                color:rgba(223, 0, 104, 0.861) ;

            }
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
            .icons.icon3 {
                background-color: rgba(249,24,128,.1);
                svg {
                    color:rgba(223, 0, 104, 0.861) ;
                }
            }
        }
       .icons {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
        }
    }
}
    h5 {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        @media (max-width:780px) {
            font-size: 15px;
        }
    }
  `

export default QuoteFeedCard