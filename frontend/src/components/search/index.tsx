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
import { GetUserSearch } from '../../features/auth/authReducer';

const Search: React.FC = () => {
    const [tab, setTab] = useState(0)
    let [searchParams, setSearchParams] = useSearchParams();
    const queryvalue = searchParams.get("q");
    // console.log(queryvalue)
    const [modal, setModal] = React.useState<Boolean>(false)

    const { userInfo, userSearchResult, tweetSearchResult, isLoading } = useAppSelector(store => store.auth)
    const { bookmarks } = useAppSelector(store => store.tweet)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(GetUserSearch(queryvalue))
    }, [queryvalue])
    return (
        <ProfileStyles>
            {/* top bar of user profile */}
            <LeftSidebarIndex />
            <div className="flex-1 flex wrapper1 item-center">
                <div style={{height:"100vh"}} className="flex flex-1 item-start column gap-1">
                    
                    <div className="flex w-100  column ">
                        <Top/>
                        <div className="w-100 flex column">

                            {/* {
                                bookmarks?.map((value: feedcardtype) => {
                                    return <FeedCard {...value} key={value._id} />
                                })
                            } */}

                            {
                                userSearchResult?.length === 0 && tweetSearchResult?.length === 0 && <div className="flex w-85 auto py-2 item-center justify-center">
                                    <h2 style={{ lineHeight: "1.3", width: "60%" }} className="fs-35 w-85 auto text-extra-bold">
                                        No results for 
                                        <span className="block">"{queryvalue}"</span>

                                        <span className="text-light fs-14 block text-grey">Try searching for something else, or check your Search settings to see if they’re protecting you from potentially sensitive content.</span>
                                    </h2>
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
    .wrapper1 {
    height: 100vh;
    overflow: auto;

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