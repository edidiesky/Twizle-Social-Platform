import { feedcardtype } from '../../types/feedtype';
import { BiSolidBadgeCheck, BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TweetModal from '../modals/TweetModal';
import IntrestIcon from '../../assets/svg/dropdownicons/interest';
import FollowIcon from '../../assets/svg/dropdownicons/follow';
import ReportIcon from '../../assets/svg/dropdownicons/report';
import BlockIcon from '../../assets/svg/dropdownicons/block';
import MuteIcon from '../../assets/svg/dropdownicons/mute';
import BookmarkIcon from '../../assets/svg/feedcardicons/bookmark';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxtoolkit';
import { DeleteTweet, LikeAndUnlikeATweet, RePostATweet, BookMarkATweet } from '../../features/tweet/tweetReducer';
import ShareIcon from '../../assets/svg/feedcardicons/share';
import DeleteIcon from '../../assets/svg/dropdownicons/delete';
import DeleteModal from '../modals/DeleteModal';
import FeedImage from './FeedImage';
import QuoteModal from '../modals/QuoteModal';
import moment from 'moment';
import FeedCardBottom from './FeedCardBottom';
import MyAnimatePresence from '../../utils/AnimatePresence';
import { QuoteFeedCardStyles } from '../quote/QuoteCard';
import Message from '../loaders/Message';

const FeedCard = (props: feedcardtype) => {
    const { userDetails, userInfo } = useAppSelector(store => store.auth)
    const { userIdIncludedInTweetLikesArray, tweetDetails, alertText, alertType, showAlert } = useAppSelector(store => store.tweet)
    const checkifUser = props?.tweet_user_id?._id === userInfo?._id

    const createdAt = moment(props?.createdAt);
    const now = moment();
    const hoursDifference = now.diff(createdAt, 'hours');
    const minsDifference = now.diff(createdAt, 'minutes');
    const secondsDifference = now.diff(createdAt, 'seconds');
    const timesecondsDifference = (60 - secondsDifference)
    // console.log(secondsDifference - 60)

    let date;
    if (timesecondsDifference > 10) {
        date = `${secondsDifference}sec`;
    }
    else if (hoursDifference < 1) {
        date = `${minsDifference}min`;
    }
    else if (hoursDifference < 24) {
        date = `${hoursDifference}hr`;
    } else {
        date = createdAt.format('MMMD');
    }

    const [tweet, setTweet] = useState<boolean>(false)
    // console.log(tweet)
    const [deletemodal, setDeleteModal] = useState<boolean>(false)
    const [drop, setDrop] = useState<boolean>(false)
    const [quote, setQuote] = useState<boolean>(false)
    const [quotemodal, setQuoteModal] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const handleLikeTweet = () => {

        dispatch(LikeAndUnlikeATweet({ Detailsdata: props?._id }))
    }
    const handleRepostTweet = () => {
        setQuote(false)
        dispatch(RePostATweet({ Detailsdata: props?._id }))
    }
    const likes = props?.tweet_likes?.length
    const handleDeleteTweet = () => {
        dispatch(DeleteTweet({ Detailsdata: props?._id }))
        setDeleteModal(false)
    }
    const handledeleteModal = () => {
        setDeleteModal(true)
        setDrop(false)
    }

    const handleQuoteModal = () => {

        setDrop(false)
        setQuoteModal(true)
        setQuote(false)
    }

    const isliked = props?.tweet_likes?.includes(userInfo?._id)

    return (
        <FeedCardStyles key={props._id}>
           
            <MyAnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {deletemodal && <DeleteModal handleDeleteTweet={handleDeleteTweet} modal={deletemodal} setModal={setDeleteModal} />}
            </MyAnimatePresence>

            <MyAnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {quotemodal && <QuoteModal id={props?._id} modal={quotemodal} setModal={setQuoteModal} />}
            </MyAnimatePresence>
            <div className={drop ? "dropdownCard  flex column active" : "dropdownCard  flex column"}>
                <div onClick={() => setDrop(false)} className="dropdown_background"></div>
                <ul style={{ fontSize: "14.6px" }} className="flex column w-100 text-bold">
                    {
                        checkifUser && <li onClick={handledeleteModal} style={{ color: "rgb(244, 33, 46)" }} className="flex text-extra-bold item-center gap-1">
                            <DeleteIcon />Delete</li>
                    }

                    <li onClick={() => setDrop(false)} className="flex item-center gap-1"><IntrestIcon /> Not interested in this tweet</li>
                    <li onClick={() => setDrop(false)} className="flex item-center gap-1"><FollowIcon />  Follow Alexander</li>
                    <li onClick={() => setDrop(false)} className="flex item-center gap-1"><MuteIcon /> Mute Alexander</li>
                    <li onClick={() => setDrop(false)} className="flex item-center gap-1"><BlockIcon /> Block Alexander</li>
                    <li onClick={() => setDrop(false)} className="flex item-center gap-1"><ReportIcon /> Report tweet</li>
                </ul>
            </div>
            <MyAnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {
                    tweet && <TweetModal id={props?._id} setModal={setTweet} modal={tweet} />
                }
            </MyAnimatePresence>
            
            <div className="flex w-90 auto item-start feed_card_wrapper gap-1">
                {/* profile image */}
                <Link to={`/${props?.tweet_user_id?.name}`} className="image_wrapper">
                    <div className="image_gradient"></div>
                    {
                        props?.tweet_user_id?.profile_image_url ?
                            <img src={props?.tweet_user_id?.profile_image_url} alt="images-avatar" className="avatar_profile" />
                            : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />

                    }
                </Link>
                {/* tweet right card section */}
                <div className="flex column flex-1 w-100" style={{ gap: '.7rem' }}>
                    <div className="w-100 flex column gap-1">
                       <div className="w-100 flex item-start justify-space">
                            <Link style={{ gap: '.5rem' }} to={`/${props?.tweet_user_id?.name}/status/${props._id}`} className='flex-1 flex column w-100'>
                                <h4 className="fs-16 text-dark text-extra-bold relative flex item-center" style={{ gap: '.4rem' }}>
                                    <div style={{ gap: ".3rem" }} className="tweet_user flex item-center">
                                        {props?.tweet_user_id?.display_name}
                                        <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                                        <span style={{ fontSize: "15px" }} className="text-light text-grey">@{props?.tweet_user_id?.name}</span>
                                    </div>

                                    {/* <span sty></span> */}
                                    <span style={{ fontSize: "15px" }} className="date text-light text-grey ">{date}</span>
                                </h4>
                                <h5 style={{ lineHeight: "20px" }} className="text_dark_grey w-100 fs-15 text-light family1">
                                    {props.tweet_text}
                                </h5>

                            </Link>
                            <div onClick={() => setDrop(true)} className="icons2 flex item-center justify-center">
                                <BiDotsHorizontalRounded fontSize={'20px'} color='var(--dark-grey)' />
                            </div>
                       </div>
                        {
                            props.tweet_image?.length > 0 && <div className="w-100 wrapper">

                                <FeedImage images={props.tweet_image} />
                            </div>
                        }
                    </div>

                    {/* quoted tweet section of the tweet card */}
                    {
                        props?.quote_tweet_id && <QuoteFeedCardStyles >
                            <div className={drop ? "dropdownCard  flex column active" : "dropdownCard  flex column"}>
                                <div onClick={() => setDrop(false)} className="dropdown_background"></div>

                            </div>
                            <div className="flex w-100 auto item-start feed_card_wrapper gap-1">
                                <div className="image_wrappers">
                                    <div className="image_gradient"></div>
                                    {
                                        props?.quote_user_id?.profile_image_url ?
                                            <img src={props?.quote_user_id?.profile_image_url} alt="images-avatar" className="avatar_profile" />
                                            : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />

                                    }
                                </div>

                                <div className="flex column flex-1" style={{ gap: '.3rem' }}>
                                    <h4 className="fs-16 text-dark text-extra-bold flex item-center" style={{ gap: '.2rem' }}>
                                        {props?.quote_user_id?.display_name}
                                        <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                                        <span style={{ fontSize: "15px" }} className="text-light text-grey ">@{props?.quote_user_id?.name}</span>
                                    </h4>
                                    <h5 style={{ paddingBottom: "1rem", fontSize: "15px", lineHeight: "20px" }} className="text_dark_grey text-light family1">
                                        {props?.quote_tweet_id?.tweet_text}
                                    </h5>


                                </div>
                            </div>
                            {/* quoted tweets */}
                            <div className="w-100">
                                <div className="w-100">
                                    {
                                        props?.quote_tweet_id?.tweet_image?.length > 0 && <FeedImage images={props?.quote_tweet_id?.tweet_image} />
                                    }
                                </div>
                            </div>

                        </QuoteFeedCardStyles>
                    }


                    <FeedCardBottom
                        isliked={isliked}
                        handleQuoteModal={handleQuoteModal}
                        setTweet={setTweet}
                        quote={quote}
                        tweetDetail={props}
                        likelength={props?.tweet_likes?.length}
                        handleLikeTweet={handleLikeTweet}
                        setQuote={setQuote}
                        setQuoteModal={function (val: boolean): void {
                            throw new Error('Function not implemented.');
                        }}
                    />

                </div>

            </div>


        </FeedCardStyles>
    )
}

const FeedCardStyles = styled.div`
    width: 100%;
    padding: 1.7rem .7rem;
    padding-bottom:.6rem;
   position: relative;
    border-bottom: 1px solid var(--border);
    &:hover {
        background-color: var(--dark-grey-hover);
    }
    .tweet_user {
        overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* max-width: 250px; */
  @media (max-width:580px) {
    max-width: 290px;
  }
  @media (max-width:500px) {
    max-width: 180px;
  }
   @media (max-width:380px) {
    max-width: 150px;
  }
  
    }
     .image_wrapper {
      width:5rem;
      height:5rem;
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
    .date {
        position: relative;
        transform: translateX(10px);
        &::after {
            width: 2px;
            content: '';
            border-radius: 50%;
            background-color: var(--grey-1);
            position: absolute;
            left: -20px;
            top: 50%;
            height: 2px;
            transform: translate(15px,-50%);
        }
    }
    h5 {
        font-weight: 600;
        font-size: 15px;
    }
    .dropdownCard {
        position: absolute;
        right: 2%;
        top: 8px;
        z-index: 2000;
        cursor: pointer;
        width: 300px;
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
    .icons2 {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        transition: all .5s;
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

export default FeedCard