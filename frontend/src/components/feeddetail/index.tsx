import React from 'react';
import styled from 'styled-components';
import RightSidebarIndex from '../common/right/RightBar';
import LeftSidebarIndex from '../common/LeftSidebar';
import PostDetailsContent from './content/content';

const PostFeedDetails = {
    tweet_id: 15,
    user_id: 15,
    profile_name: "The champion",
    username: "mhasnneye",
    tweet_text: 'Happy birthday wizkid ',
    timestamp: "07/25/2022",
    retweet_count: 292,
    favorite_count: 299,
    is_verified: false,
    tweet_image: ['https://pbs.twimg.com/media/F1JXtgeX0AIZfX1?format=jpg&name=900x900'],
    image: "./images/boris-khentov.jpg",
    location: "Agodim",
}

const PostDetails: React.FC = () => {
    return (
        <PostDetailsStyles>
            {/* top bar of user PostDetails */}
            <LeftSidebarIndex />
            <PostDetailsContent />
            <RightSidebarIndex types={'feeddetails'}/>
            {/* User feeds */}
        </PostDetailsStyles>
    )
}

const PostDetailsStyles = styled.div`
 width: 100%;
    display:flex;
    gap:1rem;
    height: 100vh;
    overflow: auto;
    align-items: flex-start;
    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }

  `

export default PostDetails