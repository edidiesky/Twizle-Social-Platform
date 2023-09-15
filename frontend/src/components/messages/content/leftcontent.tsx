import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from "react-router-dom";
import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi'
import { BiSolidBadgeCheck, BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { GoSearch } from 'react-icons/go'
import { LuMailPlus } from 'react-icons/lu'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';
import { GetSingleconversationDetails } from '../../../features/conversation/conversationReducer';
import ListContent from '../list';
const messagecomments = [
    {
        _id: 3,
        profile_name: "Blair Dulder CPA™",
        username: "mhasnneye",
        tweet_text: 'Sent a link',
        image: "https://i.pinimg.com/236x/80/5f/69/805f6966f9ff13b3dad64b3c10f823b8.jpg",
        location: "Agodim",
    },
    {
        _id: 1,
        profile_name: "mhasnneye",
        username: "mhasnneye",
        tweet_text: 'Sent a tweet',
        image: "https://i.pinimg.com/236x/80/5f/69/805f6966f9ff13b3dad64b3c10f823b8.jpg",
        location: "Agodim",
    },
    {
        _id: 2,
        profile_name: "Lamine Mbacke",
        username: "mhasnneye",
        tweet_text: 'Sent a tweet',
        image: "/images/jon-mauney.jpg",
        location: "Agodim",
    }
]

const LeftContent: React.FC = () => {
    const { id } = useParams()
    const [userconversation, setUserConversation] = useState([])
    const { userInfo } = useAppSelector(store => store.auth)
    const { conversation } = useAppSelector(store => store.conversation)


    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(GetSingleconversationDetails(userInfo?._id))
    }, [])


    return (
        <LeftContentStyles>
            <div className="flex column w-100 column gap-2">
                <div className="top1 w-100 auto ">
                    <div className="w-90 auto flex item-center justify-space">
                        <h3 className="fs-20 text-bold text-dark">Messages</h3>
                        <div className="flex item-center justify-end">
                            <div className="icons flex item-center justify-center">
                                <FiSettings fontSize={'20px'} color='var(--dark-1)' />
                            </div>
                            <div className="icons flex item-center justify-center">
                                <LuMailPlus fontSize={'20px'} color='var(--dark-1)' />
                            </div>
                        </div>
                    </div>

                </div>
                {
                    conversation?.length !== 0 && <div className="search w-90 auto flex item-center justify-center gap-1">
                        <GoSearch fontSize={'20px'} color='var(--grey-1)' />
                        <input type="text" placeholder='Search direct messages' className='searchinput' />
                    </div>
                }

                <div className="flex column w-100">
                    {
                        conversation?.length === 0 ? <div className="w-85 auto flex column">
                            <h3 className="fs-30 text-extra-bold">Welcome to your inbox!
                                <span className="text-light py-1 block fs-16 text-grey">Drop a line, share posts and more with private conversations between you and others on X. </span>
                            </h3>
                            <div className="w-100 flex item-start">
                                <div className="btn btn-1 fs-16 text-white text-bold">Write Messages</div>
                            </div>
                        </div> : <div className="w-100">
                            {
                                conversation?.map((x, index) => {
                                    return x?.sender?._id !== userInfo?._id && <NavLink
                                        activeClassName="active"
                                        to={`/messages/${x._id}`} key={index} className="messageCard w-100 flex item-start justify-space">
                                        <div className="flex item-start gap-1">
                                            <div className="image_wrapper">
                                                <img src={x.sender?.profile_image_url} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                                                <div className="image_gradient"></div>
                                            </div>
                                            <div className="flex flex-1 column " style={{ gap: ".1rem" }}>
                                                <h4 className="fs-16 text-bold text_dark_grey flex item-center" style={{ gap: '.2rem' }}>
                                                    {x?.sender?.display_name}
                                                    <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                                                    <span className="text-light fs-14 text-grey">@{x?.sender?.name}</span>
                                                </h4>
                                                <h5 className="fs-14 text-light text-grey">{x.lastMessage}</h5>

                                            </div>
                                        </div>
                                    </NavLink>
                                })
                            }
                            {
                                conversation?.map((x, index) => {
                                    return x?.receiver?._id !== userInfo?._id && <NavLink
                                        activeClassName="active"
                                        to={`/messages/${x._id}`} key={index} className="messageCard w-100 flex item-start justify-space">
                                        <div className="flex item-start gap-1">
                                            <div className="image_wrapper">
                                                <img src={x.receiver?.profile_image_url} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                                                <div className="image_gradient"></div>
                                            </div>
                                            <div className="flex flex-1 item-center column " style={{ gap: ".1rem" }}>
                                                <h4 className="fs-16 text-bold text_dark_grey flex item-center" style={{ gap: '.2rem' }}>
                                                    {x?.receiver?.display_name}
                                                    <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                                                    <span className="text-light fs-14 text-grey ">@{x?.receiver?.name}</span>
                                                </h4>
                                                <h5 className="fs-14 text-light text-grey">{x.lastMessage}</h5>

                                            </div>
                                        </div>
                                    </NavLink>
                                })
                            }
                        </div>
                    }
                    {/* if sender */}

                </div>
            </div>
        </LeftContentStyles>
    )
}

const LeftContentStyles = styled.div`
        flex:0 0 390px;
        overflow:auto;
        height: 100vh;
        /* background-color: red; */
        .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        flex:1;
        .wrapper {
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

        .search {
            padding: 1.2rem 2rem;
            border: 1px solid var(--border);
            border-radius: 40px;
            .searchinput {
    background: transparent;
    outline: none;
    border: none;
    font-size: 1.6rem;
    font-weight: normal;
    font-family: inherit;

            }
        }
        .messageCard {
        width: 100%;
    padding:1rem 2rem;
    &.active {
        background-color: #F4F6F7;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 2px;
            background-color: var(--blue-1);
            height: 100%;
            right: 0;
            top: 0;
        }
    }
    &:hover {
        /* background-color: #f1f1f1; */
        background-color: var(--dark-grey-hover);
    }
    }
            .top1 {
position: sticky;
  top: 0;
  background-color: var(--top);
  z-index: 3000;
  padding: 1rem 0;
  backdrop-filter: blur(12px);
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


  `

export default LeftContent