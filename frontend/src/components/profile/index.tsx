import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';
import WallpaperIndex from './top/wallpaper';
import ProfileBottomIndex from './top/bottom';
import RightSidebarIndex from '../common/right/RightBar';
import LeftSidebarIndex from '../common/LeftSidebar';
import Top from './top/top';
import AuthModal from '../modals/EditProfileModal';
import { AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxtoolkit';
import { GetUserProfile } from '../../features/auth/authReducer';
import { useParams } from 'react-router-dom';
import { clearUserProfile } from '../../features/auth/authSlice';
import { GetUserTweet } from '../../features/tweet/tweetReducer';
import { feedcardtype } from '../../types/feedtype';
import FeedCard from '../common/FeedCard';

type Rightbar = {
    type: String
}

const Profile: React.FC = () => {
    const { name } = useParams()
    const [tab, setTab] = useState(0)
    const feed = false
    // console.log(name)
    const [modal, setModal] = React.useState<Boolean>(false)

    const { userDetails, userInfo } = useAppSelector(store => store.auth)
    const { tweets, tweetisLoading } = useAppSelector(store => store.tweet)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearUserProfile({payload: "any"}))
        dispatch(GetUserProfile(name))
    }, [name, userInfo])

    useEffect(() => {
        if(userDetails?._id) {
            dispatch(GetUserTweet(userDetails?._id))
        }
    }, [userDetails?._id])
    return (
        <ProfileStyles>
            {/* top bar of user profile */}
            <LeftSidebarIndex />
            {/* control the update modal */}
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {
                    modal && <AuthModal modal={modal} setModal={setModal} />
                }
            </AnimatePresence>
            <div className="flex flex-1 wraps column ">
                <Top />
                <div className="flex column">
                    
                    <WallpaperIndex />
                    <ProfileBottomIndex setModal={setModal} />
                </div>
                <div className="w-100 flex py-2 column">
                    <div className="w-100 flex item-center text-bold fs-16 profilelist">
                        <div className="flex-1 profileTag">
                            <div onClick={() => setTab(0)} className={tab === 0 ? "tag active" : "tag text-light"}>Tweets</div>
                        </div>
                        <div className="flex-1 profileTag">
                            <div onClick={() => setTab(1)} className={tab === 1 ? "tag active" : "tag text-light"}>Replies</div>
                        </div>
                        <div className="flex-1 profileTag">
                            <div onClick={() => setTab(2)} className={tab === 2 ? "tag active" : "tag text-light"}>Media</div>
                        </div>
                        <div className="flex-1 profileTag">
                            <div onClick={() => setTab(4)} className={tab === 4 ? "tag active" : "tag text-light"}>Likes</div>
                        </div>
                    </div>
                    {
                        tweets?.length === 0 ? <div className="flex w-85 auto py-2 item-center justify-center">
                            <h2 style={{lineHeight:"1.3", width:"60%"}} className="fs-30 w-85 auto text-bold">
                                @{userDetails?.display_name} hasn’t posted

                                <span className="text-light fs-14 block text-grey">When they do, their posts will show up here.</span>
                            </h2>
                        </div> : <div className="w-100">
                                {
                                    tweetisLoading ? <div className="flex py-2 w-100 justify-center">
                                        <CircularProgress style={{ width: '30px', height: '30px', fontSize: '30px' }} color="primary" />
                                    </div> : <>
                                        {
                                            tweets?.map((value: feedcardtype) => {
                                                return <FeedCard {...value} key={value._id} />
                                            })
                                        }
                                    </>
                                }
                        </div>
                    }

                </div>
            </div>
            <RightSidebarIndex types={'profile'} />
            {/* User feeds */}
        </ProfileStyles>
    )
}

const ProfileStyles = styled.div`
    width: 100%;
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
    .wraps {
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);
        min-height: 100vh;
        @media (max-width:980px) {
    border-right : 1px solid var(--border);

        }
    }

  `

export default Profile