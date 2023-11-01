import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom'
import MessageIcon from '../../assets/svg/leftsidebaricons/message';
import ListIcon from '../../assets/svg/leftsidebaricons/list';
import CommunitiesIcon from '../../assets/svg/leftsidebaricons/communities';
import BadgeIcon from '../../assets/svg/leftsidebaricons/badge';
import ProfileIcon from '../../assets/svg/leftsidebaricons/profile';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxtoolkit';
import { GetAllUserProfile } from '../../features/auth/authReducer';
import { BiChevronDown } from 'react-icons/bi';
import BookmarkIcon from '../../assets/svg/feedcardicons/bookmark';
import { offSidebar } from '../../features/tweet/tweetSlice';


const SmallSidebarIndex = () => {
    const { userInfo } = useAppSelector(store => store.auth)
    const { sidebar } = useAppSelector(store => store.tweet)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(GetAllUserProfile())
    }, [userInfo])
    const list = [
        {
            title: "Profile",
            path: '/',
            icon: <ProfileIcon />
        }, {
            title: "Verified",
            path: '/explore',
            icon: <BadgeIcon />
        },
        {
            title: "Lists",
            path: '',
            icon: <ListIcon />

        }, {
            title: "Bookmarks",
            path: '',
            icon: <BookmarkIcon />

        }, {
            title: "Messages",
            path: '/messages',
            icon: <MessageIcon />

        },
        {
            title: "Communities",
            path: '',
            icon: <CommunitiesIcon />

        },
    ]

    return (
        <>
            <SmallSidebarStyles className={sidebar?"active":""}>
                <div onClick={() => dispatch(offSidebar("any"))} className={sidebar ? "backdrop active" : "backdrop"}></div>

                <div className={sidebar ? "sidebarWrapper active" : "sidebarWrapper"}>
                    <div className="flex column w-90 leftwrapper auto gap-1">
                        <div className="w-85 auto py-2 flex column gap-1">
                            {/* top small sidebar */}
                            <div className="w-100 flex item-center justify-space">
                                <span>
                                    {
                                        userInfo?.profile_image_url ?
                                            <img src={userInfo?.profile_image_url} alt="images-avatar" className="avatar" />
                                            : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar" className="avatar" />

                                    }
                                </span>

                            </div>
                            <h4 className="fs-20 text-bold">
                                {userInfo?.display_name}
                                <span style={{ marginTop: "4px" }} className="block fs-18 text-light text-grey2">@{userInfo?.name}</span>
                            </h4>
                            <div className="flex flex-wrap fs-14 text-light item-center w-100 gap-3">
                                <Link to={`/${userInfo?.name}/following`} className="text-bold text-dark flex item-center" style={{ gap: ".5rem" }}>
                                    {userInfo?.followings?.length || 0} <div className="text-light text-grey2">Following</div>
                                </Link> <Link to={`/${userInfo?.name}/followers`} className="text-bold text-dark flex item-center" style={{ gap: ".5rem" }}>
                                    {userInfo?.followers?.length || 0} <div className=" text-light text-grey2">Followers</div>
                                </Link>
                            </div>
                        </div>
                        <div className="leftTop w-90 auto flex column">
                            <div className="flex w-100 column">
                                <ul className="flex list1 w-100 column item-start">
                                    {
                                        list.map((x, index) => {
                                            return (
                                                <li className="list text-dark fs-20 flex item-center gap-4 text-bold" >
                                                    <NavLink className='text-dark flex w-100 item-center gap-3 text-bold' to={x.path}>
                                                        {x.icon}
                                                        <span className='span'>{x.title}</span>
                                                    </NavLink>
                                                </li>
                                            )

                                        })
                                    }
                                </ul>
                                <ul className="flex w-100 column item-start">
                                    <li className="fs-18 justify-space w-100 text-dark flex item-center gap-4 text-bold" >
                                        <span>Creator Studio</span>
                                        <span>
                                            <div className="icons flex item-center justify-center">
                                                <BiChevronDown fontSize={'24px'} />
                                            </div>
                                        </span>
                                    </li>
                                    <li className="fs-18 justify-space w-100 text-dark flex item-center gap-4 text-bold" >
                                        <span>Professional Tools</span>
                                        <span>
                                            <div className="icons flex item-center justify-center">
                                                <BiChevronDown fontSize={'24px'} />
                                            </div>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </SmallSidebarStyles>
        </>

    )
}

const SmallSidebarStyles = styled.div`
   width: 100vw;
    height: 100vh;
    overflow:hidden;
   position: fixed;
    z-index:400000;
    transition: all .5s ease;
    opacity: 0;
    visibility: hidden;
     @media (min-width:580px) { 
     display:none;
    }
    &.active {
        opacity: 1;
        visibility: visible;
    }

  .sidebarWrapper {
     width: 70%;
    height: 100vh;
    overflow:auto;
    background-color: var(--white);
    z-index:200;
    position: relative;
    transition: all .6s ease;
    transform: translateX(-100%);
    &.active {
    transform: translateX(0%);

    }
    @media (max-width:380px) { 
     width: 80%;
    }
     @media (max-width:350px) { 
     width: 90%;
    }

  }
   .backdrop {
    background: var(--backdrop);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index:100;
     opacity: 0;
    visibility: hidden;
    &.active {
        opacity: 1;
        visibility: visible;
    }

  }
  .images {
        display: none;
        margin:4rem auto;
 @media (max-width:980px) {
     display: flex;
    align-items: flex-end;
    justify-content: flex-end;
   }
    @media (max-width:780px) {
     display: flex;
    align-items: center;
    justify-content: center;
   }
  
  }
  .sidebarbottom {
@media (max-width:1180px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  }
  .activeLink {
  font-weight: bold;
  color: var(--dark-1);
  transition: color 0.3s ease; /* or any other color to indicate the active link */
}
    .btn {
        width:100%;
        
        margin: 5px 0;
    @media (max-width:1180px) {
        display: none;
    }
    }
    .top {
        @media (max-width:1180px) {
    align-items: flex-end;
    justify-content: flex-end;
  }
  @media (max-width:780px) {
    align-items: center;
    justify-content: center;
  }
    }
    ul {
        &.list1 {
            border-bottom: 1px solid var(--border1);
            padding-bottom: 1.5rem;
        }
    }
    li {
  border-radius: 40px;
  text-align: center;
  padding:14px 1.1rem;
  padding-right: 2rem;
  }

    .profilewrapper {
 border-radius: 40px;
  text-align: center;
  padding:1.5rem .5rem;
  gap:2px;
  margin-bottom: 1.5rem;
  cursor: pointer;
   @media (max-width:1180px) {
        display: none !important;
  }
  .avatar {
        width: 4rem !important;
        height: 4rem !important;
        border-radius: 50%;
        object-fit: cover;
    margin: 0 !important;
    
    }
  @media (max-width:1180px) {
    width:8rem;
    justify-content: center;
    height:8rem;
   
    border-radius: 50%;
    display: grid;
    place-items: center;
    align-self: flex-end;
    margin: 0 !important;
   
    &:hover {
  background-color: var(--grey-hover);
 
  }
  }
  
  &:hover {
  background-color: var(--grey-hover);
 
  }
  h4 {
    @media (max-width:1180px) {
        display: none;
  }

}
    }
    .leftTop {
    }
    .leftwrapper {
        height: 100vh;
   position: sticky;
   top: 0%;
   left:0;
    position:relative;
    }
`

export default SmallSidebarIndex