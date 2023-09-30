import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';
import RightSidebarIndex from '../common/right/RightBar';
import LeftSidebarIndex from '../common/LeftSidebar';
import Top from './top/top';
import AuthModal from '../modals/EditProfileModal';
import { AnimatePresence } from 'framer-motion';
import { getAllBookmarkedTweet } from '../../features/tweet/tweetReducer';
import { feedcardtype } from '../../types/feedtype';
import FeedCard from '../common/FeedCard';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxtoolkit';
import { useSearchParams } from 'react-router-dom';
import { FollowAndUnFollowAUser, GetUserSearch } from '../../features/auth/authReducer';
import LoaderIndex from '../loaders';

const Search: React.FC = () => {
    const [tab, setTab] = useState(0)
    let [searchParams, setSearchParams] = useSearchParams();
    const queryvalue = searchParams.get("q");
    const { userInfo, userSearchResult, tweetSearchResult, isLoading } = useAppSelector(store => store.auth)
    const { bookmarks } = useAppSelector(store => store.tweet)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(GetUserSearch({authdata:queryvalue}))
    }, [queryvalue])
    const handleFollowUser = (id: string) => {
        dispatch(FollowAndUnFollowAUser({profiledata:id}))
    }
    return (
        <ProfileStyles>
            {/* top bar of user profile */}
            <LeftSidebarIndex />
            <div className="flex-1 flex wrapper1 item-center">
                <div style={{ height: "100vh" }} className="flex flex-1 item-start column gap-1">

                    <div className="flex w-100  column ">
                        <Top />
                        <div className="w-100 flex column">
                            {
                                isLoading ? <LoaderIndex type='small' /> :
                                    userSearchResult?.length === 0 && tweetSearchResult?.length === 0 ? <div className="flex w-85 auto py-2 item-center justify-center">
                                        <h2 style={{ lineHeight: "1.3", width: "60%" }} className="fs-35 w-85 auto text-extra-bold">
                                            No results for
                                            <span className="block">"{queryvalue}"</span>

                                            <span className="text-light fs-14 block text-grey">Try searching for something else, or check your Search settings to see if they’re protecting you from potentially sensitive content.</span>
                                        </h2>
                                    </div>
                                        : <div className="w-100 wrappers">
                                            {
                                                userSearchResult?.length !== 0 && <div className="w-100 flex bottom column gap-1">
                                                    <h4 className="fs-20 w-90 auto text-extra-bold">People</h4>
                                                    {
                                                        userSearchResult?.slice(0, 3)?.map((x:string) => {
                                                            const active = userInfo?.followings?.includes(x?._id)

                                                            return <div className="w-100 connect_card flex item-start justify-space gap-1">
                                                                <div className="image_wrapper">
                                                                    <img src={x?.profile_image_url ? x?.profile_image_url : `https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png`} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                                                                    <div className="image_gradient"></div>
                                                                </div>
                                                                <div className="flex-1 flex column" style={{ gap: ".6rem" }}>
                                                                    <div className="w-100 flex item-center justify-space">
                                                                        <h4 className="fs-16 text-extra-bold flex column" style={{ gap: ".1rem" }}>
                                                                            {x?.display_name}
                                                                            <span className="block fs-14 text-grey text-light">
                                                                                @{x?.name}
                                                                            </span>
                                                                        </h4>
                                                                        <div onClick={() => handleFollowUser(x?._id)} className="btn text-extra-bold btn-3 fs-14 text-white">
                                                                            {
                                                                                active ? <span className="following">Following</span> : "Follow"
                                                                            }
                                                                            {
                                                                                active && <span className="unfollow">UnFollow</span>
                                                                            }
                                                                        </div>

                                                                    </div>
                                                                    {/* about */}
                                                                    <h4 className="fs-16 text-light text-dark">
                                                                        {x?.bio}
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        })
                                                    }
                                                    {
                                                        userSearchResult?.length > 3 &&
                                                        <div className="w-100 viewWrapper">
                                                            <div className="view fs-15">View All</div>
                                                        </div>
                                                    }
                                                </div>
                                            }

                                            {/* // tweet search */}

                                            <div className="flex w-100 column">
                                                {
                                                    tweetSearchResult?.map((value: feedcardtype) => {
                                                        return <FeedCard {...value} key={value._id} />
                                                    })
                                                }
                                            </div>
                                        </div>
                            }

                        </div>
                    </div>
                </div>

                <RightSidebarIndex />
            </div>
            {/* User feeds */}
        </ProfileStyles>
    )
}

const ProfileStyles = styled.div`
    /* width: 100%; */
    display:flex;
    gap:1rem;
    height: 100vh;
    overflow: auto;
    align-items: flex-start;
    border-right: 1px solid var(--border);
    border-left: 1px solid var(--border);

    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }
    .viewWrapper {
        padding: 1.5rem;
        &:hover {
            background-color: var(--grey-hover1);
            .view {
                color:var(--blue-1);
            }
        }
        .view {
                color:var(--blue-1);
            }
    }
    
    .bottom {
    border-bottom: 1px solid var(--border);
    padding-bottom: 1rem;

    }
     .tag {
        cursor: pointer;
            width: max-content;
            margin: 0 auto;
            /* background-color: red; */
            position: relative;
            &.active {
            position: relative;
             &::after {
                position: absolute;
                width: 100%;
                content: '';
                left: 0;
                background-color: var(--blue-1);
                height: 4px;
                border-radius: 10px;
                bottom: -100%;
            }
            }
           
        }
            .btn.btn-3 {
             padding: .7rem 1.5rem;

            border: 1px solid var(--border1) !important;
            &:hover {
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
      .connect_card {
        width: 100%;
    padding:1.3rem 1.5rem;
    &:hover {
        background-color: var(--grey-hover);
    }
    }
    .profilelist {
        border-bottom:1px solid var(--border);
        .profileTag {
            padding:1.7rem 2rem;
            text-align:center;
            
            &:hover {
                background:var(--grey-2);
            }
        }
    }
    .wrapper1 {
    height: 100vh;
    overflow: auto;

    } 
    .wrappers {
           border-right : 1px solid var(--border);
        /* min-height: 100vh; */
        border-left : 1px solid var(--border);
    }
    .wraps {
        border-right : 1px solid var(--border);
        min-height: 100vh;
        border-left : 1px solid var(--border);
        gap:40rem;
        @media (max-width:980px) {
    border-right : 1px solid var(--border);

        }
    }

  `

export default Search