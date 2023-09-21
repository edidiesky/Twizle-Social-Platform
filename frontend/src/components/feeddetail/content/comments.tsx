import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiSolidBadgeCheck,BiDotsHorizontalRounded } from 'react-icons/bi'
import RetweetIcon from '../../../assets/svg/feedcardicons/retweet';
import LikeIcon from '../../../assets/svg/feedcardicons/like';
import StatIcon from '../../../assets/svg/feedcardicons/stat';
import ShareIcon from '../../../assets/svg/feedcardicons/share';
import MessageIcon from '../../../assets/svg/feedcardicons/message';
import FollowIcon from '../../../assets/svg/dropdownicons/follow';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';
import { getAllComment } from '../../../features/comment/commentReducer';
import TweetModal from '../../modals/TweetModal';
import { AnimatePresence } from 'framer-motion';

const postcomments = [
    {
        profile_name: "Blair Dulder CPA™",
        username: "mhasnneye",
        tweet_text: 'its not in js hence unusable',
        image: "https://pbs.twimg.com/profile_images/1678538017898655744/NyiEWy6M_400x400.jpg",
        location: "Agodim",
    },

]

const PostDetailsComments: React.FC = () => {
    const [drop, setDrop] = useState(false)
    const [quote, setQuote] = useState(false)
    const [tweet, setTweet] = useState(false)
    const [like, setLike] = useState(false)
    const { comment } = useAppSelector(store => store.comment)
    const { tweetDetails } = useAppSelector(store => store.tweet)
    const dispatch = useAppDispatch()
    useEffect(()=> {
        if (tweetDetails) {
            dispatch(getAllComment(tweetDetails?._id))
        }
        
    }, [tweetDetails])
    return (
        <>
           <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {
                    tweet && <TweetModal id={tweetDetails?._id} setModal={setTweet} modal={tweet} />
                }
            </AnimatePresence>
            <PostDetailsCommentsStyles className='w-100 flex column '>
                {
                    comment?.map((x:any, index:any) => {
                        return <div key={index} className="postCard w-100 flex item-start justify-space gap-1">
                            <div className="image_wrapper">
                                <img src={x.user?.profile_image_url} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                                <div className="image_gradient"></div>
                            </div>

                            <div className="flex flex-1 column gap-1">
                                <div className="flex item-start justify-space gap-1 w-100 " style={{ gap: ".3rem" }}>
                                    <div className="flex column">
                                        <h4 className="fs-16 text-bold flex item-center" style={{ gap: '.2rem', fontSize: "15px" }}>
                                            {x.user?.display_name}
                                            <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                                            <span className="text-light fs-14 text-grey ">@{x.user?.name}</span>
                                        </h4>
                                        <h5 style={{ fontSize: "16px", marginTop: "6px" }} className=" text-light">{x.text}</h5>
                                    </div>

                                    <div className="flex item-center justify-end">
                                        <div className="icons flex item-center justify-center">
                                            <BiDotsHorizontalRounded fontSize={'20px'} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-100 flex justify-space item-center">

                                    <div className="flex item-center w-100 auto gap-2">
                                        <div className="flex item-center w-90 auto gap-2">
                                            <div className="flex w-100 item-center fs-14 text-light justify-center feedtags_wrapper text-dark">
                                                <div onClick={() => setTweet(true)} className="flex iconwrapper flex-1 item-center"
                                                    style={{ gap: ".3rem" }}>
                                                    <div className="icons icon1 flex item-center justify-center">
                                                        <MessageIcon />
                                                    </div>
                                                    {/* 23 */}
                                                </div>
                                                <div className="flex iconwrapper flex-1 relative justify-center text_2 item-center" style={{ gap: ".3rem" }}>
                                                    <div className={quote ? "dropdownCard card1  flex column active" : "dropdownCard card1  flex column"}>
                                                        <div onClick={() => setQuote(false)} className="dropdown_background"></div>
                                                        <ul style={{ fontSize: "14px" }} className="flex column w-100 text-bold">
                                                            <li style={{ gap: "5px" }} className="flex fs-16 text-dark text-bold item-center">
                                                                <div className="flex-1 flex item-center justify-center"><RetweetIcon type={'large'} /></div>Retweet</li>
                                                            <li style={{ gap: "5px" }} className="flex fs-16 text-dark text-bold item-center gap-1">
                                                                <div className="flex-1 flex item-center justify-center"><FollowIcon /></div>Quote </li>
                                                        </ul>
                                                    </div>
                                                    <div onClick={() => setQuote(true)} className="icons icon2 flex item-center justify-center">
                                                        <RetweetIcon />
                                                    </div>
                                                    {/* 144 */}
                                                </div>
                                                <div className="flex iconwrapper flex-1 justify-center text-3 item-center" style={{ gap: ".3rem" }}>
                                                    <div className="icons icon3 flex item-center justify-center">
                                                        <LikeIcon />
                                                    </div>
                                                    {/* {likes} */}
                                                    {/* 23 */}
                                                </div>
                                                <div className="flex iconwrapper flex-1 justify-center item-center" style={{ gap: ".3rem" }}>
                                                    <div className="icons icon1 flex item-center justify-center">
                                                        <StatIcon />
                                                    </div>
                                                    {/* 123 */}
                                                </div>
                                                <div className="flex iconwrapper flex-1 justify-center item-center" style={{ gap: ".3rem" }}>
                                                    <div className="icons icon1 flex item-center justify-center">
                                                        <ShareIcon />
                                                    </div>
                                                    {/* 123 */}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    })
                }
            </PostDetailsCommentsStyles>
        </>
      
    )
}

const PostDetailsCommentsStyles = styled.div`

h5 {
    @media (max-width:780px) {
            font-size: 15px;
        }
        @media (max-width:380px) {
            font-size: 13px;
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
        &:hover {
            background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
        }
    }
    .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        flex:1;
        font-size: 16px !important;
        @media (max-width:500px) {
            font-size: 14px !important;
        }
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
            @media (max-width:380px) {
            font-size: 20px !important;
        }
        }
    }
}
    .image_wrapper {
      width:4rem;
      height:4rem;
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
     .dropdownCard {
        position: absolute;

        right: 2%;
        top: 8px;
        z-index: 20;
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
    .postCard {
        width: 100%;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border);
    &:hover {
        /* background-color: #f1f1f1; */
        background-color: var(--dark-grey-hover);
    }
    }
  `

export default PostDetailsComments