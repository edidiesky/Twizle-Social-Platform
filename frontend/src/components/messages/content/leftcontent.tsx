import React from 'react';
import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi'
import { BiSolidBadgeCheck, BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { GoSearch } from 'react-icons/go'
import { LuMailPlus } from 'react-icons/lu'
const messagecomments = [
    {
        profile_name: "Blair Dulder CPA™",
        username: "mhasnneye",
        tweet_text: 'Sent a link',
        image: "/images/boris-khentov.jpg",
        location: "Agodim",
    },
    {
        profile_name: "Blair Dulder CPA™",
        username: "mhasnneye",
        tweet_text: 'Sent a tweet',
        image: "/images/raoul-bhavnani.jpg",
        location: "Agodim",
    },
    {
        profile_name: "Blair Dulder CPA™",
        username: "mhasnneye",
        tweet_text: 'Sent a tweet',
        image: "/images/raoul-bhavnani.jpg",
        location: "Agodim",
    },
    {
        profile_name: "mhasnneye",
        username: "mhasnneye",
        tweet_text: 'Sent a tweet',
        image: "/images/boris-khentov.jpg",
        location: "Agodim",
    },
    {
        profile_name: "Lamine Mbacke",
        username: "mhasnneye",
        tweet_text: 'Sent a tweet',
        image: "/images/jon-mauney.jpg",
        location: "Agodim",
    }
]

const LeftContent: React.FC = () => {
    return (
        <LeftContentStyles>
            <div className="flex column py-1 w-100 column gap-2">
                <div className="top w-90 auto flex item-center justify-space">
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
                <div className="search w-90 auto flex item-center justify-center gap-1">
                    <GoSearch fontSize={'20px'} color='var(--grey-1)' />
                    <input type="text" placeholder='Search direct messages' className='searchinput' />
                </div>
                <div className="flex column w-100">
                    {
                        messagecomments.map((x, index) => {
                            return <div key={index} className="messageCard w-100 flex item-start justify-space">
                                <div className="flex item-start gap-1">
                                    <div className="image_wrapper">
                                        <img src={x.image} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                                        <div className="image_gradient"></div>
                                    </div>
                                    <div className="flex flex-1 column " style={{ gap: ".1rem" }}>
                                        <h4 className="fs-16 text-bold text_dark_grey flex item-center" style={{ gap: '.2rem' }}>
                                            {x.profile_name}
                                            <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                                            <span className="text-light fs-16 text-grey ">@{x.username}</span>
                                        </h4>
                                        <h5 className="fs-16 text-light text-grey">{x.tweet_text}</h5>
                                        
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </LeftContentStyles>
    )
}

const LeftContentStyles = styled.div`
        flex:0 0 390px;
        overflow:hidden;
        max-height: 100vh;
        .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        flex:1;
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
    padding:1rem 1.5rem;
    &:hover {
        /* background-color: #f1f1f1; */
        background-color: var(--dark-grey-hover);
    }
    }

  `

export default LeftContent