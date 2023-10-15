import { BsTwitter } from 'react-icons/bs'
import { CiCircleMore } from 'react-icons/ci'

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom'
import ActiveLink from './activelink'
import TweetModal from '../modals/TweetModal'
import SearchIcon from '../../assets/svg/leftsidebaricons/search'
import HomeIcon from '../../assets/svg/leftsidebaricons/home'
import NotificationIcon from '../../assets/svg/leftsidebaricons/notification'
import MessageIcon from '../../assets/svg/leftsidebaricons/message';
import ListIcon from '../../assets/svg/leftsidebaricons/list';
import CommunitiesIcon from '../../assets/svg/leftsidebaricons/communities';
import BadgeIcon from '../../assets/svg/leftsidebaricons/badge';
import ProfileIcon from '../../assets/svg/leftsidebaricons/profile';
import PostModal from '../modals/PostModal';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxtoolkit';
import { GetAllUserProfile } from '../../features/auth/authReducer';
import LoaderIndex from '../loaders';
import Moredropdown from './moredropdown';
import Logoutdropdown from './logoutdropdown';
import TwitterIcon from '../../assets/svg/twitter';
import TweetIcon from '../../assets/svg/leftsidebaricons/tweet';
import MyAnimatePresence from '../../utils/AnimatePresence';


const LeftSidebarIndex = () => {
    const [tweet, setTweet] = useState<boolean>(false)
    const [drop, setDrop] = useState<boolean>(false)
    const [logout, setLogOut] = useState<boolean>(false)
    const { userInfo, userDetails } = useAppSelector(store => store.auth)
    const { tweetisLoading } = useAppSelector(store => store.tweet)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(GetAllUserProfile())
    }, [userInfo])
    const list = [
        {
            title: "Home",
            path: '/',
            icon: <HomeIcon />
        }, {
            title: "Explore",
            path: '/explore',
            icon: <SearchIcon />
        }, {
            title: "Notifications",
            path: '',
            icon: <NotificationIcon />

        }, {
            title: "Messages",
            path: '/messages',
            icon: <MessageIcon />

        }, {
            title: "Lists",
            path: '',
            icon: <ListIcon />

        },
        {
            title: "Communities",
            path: '',
            icon: <CommunitiesIcon />

        }, {
            title: "Verified",
            path: '',
            icon: <BadgeIcon />

        },
        {
            title: "Profile    ",
            path: `/${userInfo?.name}`,
            icon: <ProfileIcon />

        },
    ]

return (
        <>
            {/* {
                tweetisLoading && <LoaderIndex/>
        } */}
            <MyAnimatePresence
            >
                {tweet && <PostModal modal={tweet} setModal={setTweet} />}
            </MyAnimatePresence>
            <LeftSidebarStyles>


                <div className="flex column w-100 justify-space leftwrapper auto gap-1">
                    <div className="leftTop w-85 auto flex column">
                        <div className="flex w-100 column">
                            <div className="flex top w-100">
                                <Link to={'/'} className="icon flex item-center justify-center">
                                    <TwitterIcon type={'small'} />
                                </Link>
                            </div>
                            <ul className="flex w-100 column item-start">
                                {
                                    list.map((x, index) => {
                                        return (
                                            <li className="list text-dark flex item-center gap-2 text-light" >
                                                <NavLink className='text-dark flex item-center gap-2 text-light' to={x.path}>
                                                    {x.icon}
                                                    <span className='span'>{x.title}</span>
                                                </NavLink>
                                            </li>
                                        )

                                    })
                                }
                                <li className="list relative text-dark flex item-center gap-2 text-light" >
                                    {drop && <Moredropdown setDrop={setDrop} />}
                                    <div onClick={() => setDrop(true)} className="w-100 flex w-100 item-center gap-2">
                                        <CiCircleMore fontSize={'20px'} />
                                        <span className='span'>More</span>
                                    </div>

                                </li>
                                <div onClick={() => setTweet(true)} className="">
                                    <TweetIcon />
                                </div>

                            </ul>
                            <div onClick={() => setTweet(true)} className="btn fs-18 text-white text-bold">Tweet</div>
                        </div>
                    </div>
                    <div className="w-85 sidebarbottom relative auto">
                        {
                            logout && <Logoutdropdown setDrop={setLogOut} />
                        }
                        <span onClick={() => setTweet(true)} className="images w-85 auto">
                            {
                                userInfo?.profile_image_url ?
                                    <img src={userInfo?.profile_image_url} alt="images-avatar" className="avatar" />
                                    : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar" className="avatar" />

                            }
                        </span>

                        <div onClick={() => setLogOut(true)} style={{ gap: ".5rem" }} className="profilewrapper w-100 flex item-center">
                            {
                                userInfo?.profile_image_url ?
                                    <img src={userInfo?.profile_image_url} alt="images-avatar" className="avatar" />
                                    : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar" className="avatar" />

                            }
                            <h4 className="fs-16 text-dark text-extra-bold text-start">
                                {userInfo?.name}
                                <span className="block text-grey text-light fs-14">@{userInfo?.display_name}</span>
                            </h4>
                        </div>
                    </div>
                </div>

            </LeftSidebarStyles>
        </>

    )
}

const LeftSidebarStyles = styled.div`
    flex: 0 0 310px;
    height: 100vh;
    
   position: sticky;
    /* border-right: 1px solid var(--border); */
@media (max-width:780px) {
    overflow:auto;
}
   top: 0;
        z-index: 4000;

    /* overflow: hidden; */
    @media (max-width:1080px) {
        flex: 0 0 110px;

  }
  @media (max-width:980px) {
        flex: 0 0 150px;
  }
  @media (max-width:780px) {
        flex: 0 0 120px;
  }
  @media (max-width:580px) {
        flex: 0 0 80px;
  }
    @media (max-width:480px) {
        display: none;
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
        @media (max-width:1180px) {
    align-items: flex-end;
    justify-content: flex-end;
  }
  @media (max-width:780px) {
    align-items: center;
    justify-content: center
  }
    }
    li {
  border-radius: 40px;
  text-align: center;
  padding: 1.1rem;
  padding-right: 2rem;
  font-size: 20px;
   @media (min-width:2440px) {
        padding: 14px;
  padding-right: 2rem;

    }
   @media (min-width:1440px) {
        padding: 10px;
  padding-right: 2rem;

    }
    @media (max-width:980px) {
          width: 6.4rem !important;
        height: 6.4rem !important;
        border-radius: 50% !important;
  padding: 0;

        a {
            align-items: center !important;
    justify-content: center !important;
    margin: 0 auto !important;
        }
    }
    
  a {
    @media (min-width:1440px) {
        padding: 4px;
    }
  

  }
  @media (max-width:1180px) {
    align-items: flex-end;
    justify-content: flex-end;
    width:7rem;
    justify-content: center;
    height:7rem;
    /* padding: 0; */
    border-radius: 50%;
    display: grid;
    place-items: center;
    span {
        display: none;
    }
  }
  @media (max-width:980px) {
    width:6.5rem;
    justify-content: center;
    height:6.5rem;
  }
  svg {
    font-size: 30px;
    @media (max-width:780px) {
        font-size: 25px;
    }
  }
  &:hover {
  /* background-color: #c7c6c6; */
  background-color: var(--grey-hover);
}
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
   padding-left: 2rem;
    position:relative;
    }
`

export default LeftSidebarIndex