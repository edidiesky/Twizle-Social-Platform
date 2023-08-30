import React from 'react';
import styled from 'styled-components';
import Top from '../top/top';
import Feed from '../../common/feed/feed';
import TweetFormSection from '../../common/tweetsection';
import Notification from '../../common/notification';

const Content: React.FC = () => {
    return (
        <ContentStyles>
            <Top />
            {/* notification popup */}
            {/* <Notification/> */}
            <TweetFormSection />
            <Feed />
        </ContentStyles>
    )
}

const ContentStyles = styled.div`
        flex:1;
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);

        min-height: 100vh;
        /* background-color: red; */
        @media (max-width:980px) {
    border-right : 1px solid var(--border);
        }
    
  `

export default Content