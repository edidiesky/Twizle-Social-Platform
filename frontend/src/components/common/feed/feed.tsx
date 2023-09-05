import FeedCard from '../FeedCard';
import { feedData } from '../../../data';
import { feedcardtype } from '../../../types/feedtype';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';
import { CircularProgress } from '@mui/material';
import { getAllTweet } from '../../../features/tweet/tweetReducer';

const Feed: React.FC = () => {
    const { tweets, tweetisLoading } = useAppSelector(store => store.tweet)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(getAllTweet())
    }, [])

    return (
        <div className="w-100 h-100">
            <FeedStyles>
                <div className="flex w-100 column">
                    {
                        tweetisLoading ? <div className="flex py-2 w-100 justify-center">
                            <CircularProgress style={{ width: '30px', height: '30px', fontSize: '30px' }} color="primary" />
                        </div> : <>
                            {
                                    tweets?.map((value: feedcardtype) => {
                                    return <FeedCard {...value} key={value.tweet_id} />
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