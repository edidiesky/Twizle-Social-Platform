import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import { chatData } from '../../../data/chatData';
import { useAppSelector } from '../../../hooks/reduxtoolkit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FollowAndUnFollowAUser, GetAllUserNotFollowed, GetAllUserProfile } from '../../../features/auth/authReducer';
import { CircularProgress } from '@mui/material';
import LoaderIndex from '../../loaders';
import MessageTab from '../messagetab';
type Rightbar = {
    types?: String
}

const images = [
    'https://i.pinimg.com/236x/c1/d9/07/c1d907446b77689dd88526dc65042dee.jpg',
    'https://i.pinimg.com/236x/c1/d9/07/c1d907446b77689dd88526dc65042dee.jpg',
    'https://i.pinimg.com/236x/c1/d9/07/c1d907446b77689dd88526dc65042dee.jpg',
]

const RightSidebarIndex: React.FC<Rightbar> = ({ types }) => {
    const { tweetDetails } = useAppSelector(store => store.tweet)
    const { notfollowedUsers, userprofileisLoading, userInfo, usertoBefollowedInFllowingsArray } = useAppSelector(store => store.auth)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(GetAllUserNotFollowed(userInfo?._id))
    }, [])

    const handleFollowUser = (id: string) => {
        dispatch(FollowAndUnFollowAUser(id))
    }

    return (
        <RightSidebarStyles>
            <div className="wrapper w-100 flex column">
                <Search />
                
                <div className="w-90 auto flex column gap-2">
                    {/* {
                        types === 'profile' && <div className="image_wrappers w-90 auto">
                            {
                                images.map((x, index) => {
                                    return <img key={index} src={x} alt="" className="" />
                                })
                            }
                        </div>
                    } */}
                    <div className="verfiy_wrapper w-90 auto flex column item-start gap-1">
                        <h3 className="text-extra-bold">Subscribe to Premium</h3>
                        <h4 className="fs-16 text-extra-bold">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</h4>
                        <div className="btn text-extra-bold btn-3 fs-16 text-white">Get Verfied</div>
                    </div>
                    {
                        types === 'feeddetails' &&
                        <div className="feed_participant w-90 auto flex column gap-2">
                            <h3 className="text-extra-bold text_dark_grey w-100 auto">
                                Relevant People</h3>
                            <div className="w-100 flex item-start justify-space gap-1">

                                <Link to={`/${tweetDetails?.tweet_user_id?.name}`} className="image_wrapper">
                                    <div className="image_gradient"></div>
                                    {
                                        tweetDetails?.tweet_user_id?.profile_image_url ?
                                            <img src={tweetDetails?.tweet_user_id?.profile_image_url} alt="images-avatar" className="avatar_profile" />
                                            : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />

                                    }
                                </Link>
                                {/* <div className="image_wrapper">
                                    <img src={'https://i.pinimg.com/236x/c1/d9/07/c1d907446b77689dd88526dc65042dee.jpg'} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                                    <div className="image_gradient"></div>
                                </div> */}
                                <div className="flex-1 flex column" style={{ gap: ".6rem" }}>
                                    <div className="w-100 flex item-center justify-space">
                                        <h4 className="fs-16 text-extra-bold flex column" style={{ gap: ".2rem" }}>
                                            {tweetDetails?.tweet_user_id?.display_name}
                                            <span className="block fs-16 text-grey text-light">
                                                @{tweetDetails?.tweet_user_id?.name}
                                            </span>
                                        </h4>
                                        <div className="btn text-extra-bold btn-3 fs-14 text-white">Follow</div>

                                    </div>
                                    {/* about */}
                                    <h4 className="fs-15 text-light text-dark">
                                        {tweetDetails?.tweet_user_id?.bio}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    }
                 
                    <div className="verfiy_wrapper wrapper2 w-90 auto flex column item-start">
                        <h3 className="text-extra-bold text_dark_grey w-90 auto">
                            Who to follow</h3>
                        <div className="flex column w-100">
                            {
                                userprofileisLoading ? <div className="flex justify-center">
                                  <LoaderIndex type='small'/>
                                </div> : <>
                                    {
                                        notfollowedUsers?.slice(0, 3).map((x, index) => {
                                            const active = userInfo?.followings?.includes(x?._id)
                                            return <div key={index} className="w-100 list flex item-center justify-space">
                                                <div className="flex item-center gap-1">
                                                    <Link to={`/${x?.name}`} className="image_wrapper">
                                                        <div className="image_gradient"></div>
                                                        {
                                                            x?.profile_image_url ?
                                                                <img src={x?.profile_image_url} alt="images-avatar" className="avatar_profile" />
                                                                : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />

                                                        }
                                                    </Link>

                                                    <h4 className="fs-16 text_dark_grey text-bold flex column" style={{ gap: ".2rem" }}>
                                                        {x.display_name}
                                                        <span className="block fs-14 text-dark text-light">
                                                            {x.name}
                                                        </span>
                                                    </h4>
                                                </div>
                                                <div onClick={() => handleFollowUser(x?._id)}
                                                    className={`btn ${active && `active`} text-extra-bold btn-3 fs-14 text-white`}>

                                                    {
                                                        active ? <span className="following">Following</span> : "Follow"
                                                    }
                                                    {
                                                        active && <span className="unfollow">UnFollow</span>
                                                    }
                                                </div>

                                            </div>
                                        })
                                    }
                                </>
                            }

                        </div>
                    </div>
                    <div className="flex item-center text-dark w-90 auto fs-16 text-light flex-wrap" style={{ gap: ".5rem", paddingBottom: "2rem" }}>
                        <h5 className='text-light'>Terms of Service</h5>
                        <h5 className='text-light'>Privacy Policy</h5>
                        <h5 className='text-light'>Cookie Policy</h5>
                        <h5 className='text-light'>Ads info</h5>
                        <h5 className='text-light'>More</h5>
                        <h5 className='text-light'>Edidiong Essien</h5>
                        <h5 className='text-light'>© 2023</h5>
                    </div>
                    <MessageTab/>
                </div>

            </div>
        </RightSidebarStyles>
    )
}

const RightSidebarStyles = styled.div`
   flex:.7;
   min-height: 100vh;
   position: sticky;
   top: 0;
    /* border-left: 1px solid var(--border); */

   @media (max-width:1080px) {
        flex: .6;
    }
    @media (max-width:980px) {
        flex: .26;
    }
    
    @media (max-width:780px) {
        flex: .1;
    }
    @media (max-width:680px) {
        display: none;
    }
  h5 {
    color: var(--grey-1);
  }
  .feed_participant {
    border: 1px solid var(--border);
    border-radius: 15px;
    padding:1.5rem 2rem;
  }
  .image_wrappers {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    border: 1px solid var(--border);
    border-radius: 15px;
    padding:1.5rem 2rem;

    img {
        width: 100%;
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
      z-index: 30;
      position: absolute;
      background:rgba(0,0,0,.3);
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

  h4 {
    @media (max-width:1180px) {
        font-size: 16px;
        span {
        font-size: 14px;

        }
    }
    @media (max-width:1080px) {
        font-size: 14px;
        span {
        font-size: 12px;

        }
    }
  }
    .wrapper {
        margin: 0 auto;
        position: sticky;
        top: 0%;
        height: 100%;
        padding-right: 2rem;
        /* width: 93%; */

        @media (max-width:1080px) {
            width: 95%;
        }
        @media (max-width:980px) {
            display: none;
        }
    }
    h3 {
        font-size: 20px;
    }
    .btn.btn-3 {
        padding: .7rem 1.5rem;
        &.active {
            background-color: transparent !important;
            color: var(--dark-1) !important;
            border: 1px solid var(--border) !important;
            &:hover {
            border: 1px solid var(--red) !important;
            background-color: #ffe7e7fa !important;

                .unfollow {
                display: block;
            }
            .following {
                display: none;
            }
            }
            .unfollow {
                display: none;
                color: var(--red);
            }
        }
    }
    .list {
        padding:.8rem 2rem;
        justify-content: space-between;
        gap: 1rem;

        &:hover {
            background-color:var(--grey-hover1);
        }
    }
    .verfiy_wrapper {
    background-color: var(--grey-2);
    padding:1.4rem 2rem;

    border-radius: 15px;
  
    &.wrapper2 {
        padding:1.8rem 0;
        h3 {
        padding:1rem;
    }

    }
    }
  `

export default RightSidebarIndex