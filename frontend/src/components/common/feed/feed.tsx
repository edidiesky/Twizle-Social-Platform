import FeedCard from '../FeedCard';
import { feedData } from '../../../data';
import { feedcardtype } from '../../../types/feedtype';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../hooks/reduxtoolkit';

const Feed: React.FC = () => {
    const { loginisLoading, loginisSuccess } = useAppSelector(store => store.auth)

    return (
        <div className="w-100 h-100">
            <FeedStyles>
                <div className="flex w-100 column">
                    {
                        feedData.map((value:feedcardtype) => {
                            return <FeedCard {...value} key={value.tweet_id} />
                        })
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