import FeedCard from '../FeedCard';
import { feedcardtype } from '../../../types/feedtype';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';
import { CircularProgress } from '@mui/material';
import { getAllTweet } from '../../../features/tweet/tweetReducer';
import { cleartweet } from '../../../features/tweet/tweetSlice';
import { GetAllUserProfile } from '../../../features/auth/authReducer';
import LoaderIndex from '../../loaders';
import Message from '../../loaders/Message';

const Feed: React.FC = () => {
    const { quoteisSuccess } = useAppSelector(store => store.quotes)
    const { userInfo } = useAppSelector(store => store.auth)
    const { tweets, tweetDetails, alertText, alertType, showAlert } = useAppSelector(store => store.tweet)

    const isBookmarked = tweetDetails?.tweet_bookmarks?.includes(userInfo?._id)

    const dispatch = useAppDispatch()

    // React.useEffect(() => {
    //     dispatch(cleartweet({payload:"any"}))
    //     dispatch(GetAllUserProfile())
    //     dispatch(getAllTweet())
    // }, [])

    React.useEffect(() => {
        const timer = setTimeout(() => {dispatch(cleartweet("any")}, 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="w-100 h-100">
            <Message
                // handleClearAlert={dispatch(cleartweet("any"))}
                showAlert={showAlert} alertText={isBookmarked ? alertText : "Removed from your bookmarks"} alertType={alertType} />

            <FeedStyles>
                <div className="flex w-100 column">
                    {
                        tweets?.length === 0 ? <div className="flex py-2 w-100 justify-center">

                            <LoaderIndex type="small" />

                        </div> : <>
                            {
                                tweets?.map((value: feedcardtype) => {
                                    return <FeedCard {...value} key={value?._id} />
                                })
                            }
                        </>
                    }

                </div>
            </FeedStyles>

        </div>
    )
}

const FeedStyles = styled.div`
    width: 100%;

  `

export default Feed