import React from 'react';
import styled from 'styled-components';
import { BiSolidBadgeCheck, BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { LiaRetweetSolid } from 'react-icons/lia'

const postcomments = [
    {
        profile_name: "Blair Dulder CPA™",
        username: "mhasnneye",
        tweet_text: 'its not in js hence unusable',
        image: "/images/boris-khentov.jpg",
        location: "Agodim",
    },
    {
        profile_name: "Blair Dulder CPA™",
        username: "mhasnneye",
        tweet_text: 'Its black and white, programs shold be colorful on black',
        image: "/images/raoul-bhavnani.jpg",
        location: "Agodim",
    },
    {
        profile_name: "Blair Dulder CPA™",
        username: "mhasnneye",
        tweet_text: 'Its black and white, programs shold be colorful on black',
        image: "/images/raoul-bhavnani.jpg",
        location: "Agodim",
    },
    {
        profile_name: "mhasnneye",
        username: "mhasnneye",
        tweet_text: 'Its black and white, programs shold be colorful on black',
        image: "/images/boris-khentov.jpg",
        location: "Agodim",
    },
    {
        profile_name: "Lamine Mbacke",
        username: "mhasnneye",
        tweet_text: 'Its black and white, programs shold be colorful on black',
        image: "/images/jon-mauney.jpg",
        location: "Agodim",
    }
]

const PostDetailsComments: React.FC = () => {
    return (
        <PostDetailsCommentsStyles className='w-100 flex column '>
            {
                postcomments.map((x, index) => {
                    return <div key={index} className="postCard w-100 flex item-start justify-space gap-2">
                        <div className="image_wrapper">
                            <img src={x.image} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                            <div className="image_gradient"></div>
                        </div>

                        <div className="flex w-100 column gap-1">
                            <div className="flex item-start justify-space gap-1 w-100 " style={{ gap: ".3rem" }}>
                                <div className="flex column">
                                    <h4 className="fs-16 text-bold flex item-center" style={{ gap: '.2rem' }}>
                                        {x.profile_name}
                                        <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                                        <span className="text-light fs-16 text-grey ">@{x.username}</span>
                                    </h4>
                                    <h5 className="fs-16 text-light">{x.tweet_text}</h5>
                                </div>

                                <div className="flex item-center justify-end">
                                    <div className="icons flex item-center justify-center">
                                        <BiDotsHorizontalRounded fontSize={'20px'} />
                                    </div>
                                </div>

                            </div>
                            <div className="flex commenticon justify-space flex-1 item-center w-100 gap-2">
                                <div className="flex w-100 item-center  text-light feedtags_wrapper">
                                    <div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                                        <div className="icons icon1 flex item-center justify-center">
                                            <HiOutlineChatBubbleOvalLeft />
                                        </div>
                                        23
                                    </div>
                                    <div className="flex iconwrapper text_2 item-center" style={{ gap: ".3rem" }}>
                                        <div className="icons icon2 flex item-center justify-center">
                                            <LiaRetweetSolid fontSize={'24px'} />
                                        </div>
                                        144
                                    </div><div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                                        <div className="icons icon1 flex item-center justify-center">
                                            <HiOutlineChatBubbleOvalLeft />
                                        </div>
                                        23
                                    </div><div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                                        <div className="icons icon1 flex item-center justify-center">
                                            <BiBarChart />
                                        </div>
                                        123
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                })
            }
        </PostDetailsCommentsStyles>
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