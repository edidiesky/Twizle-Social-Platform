import React from 'react';
import styled from 'styled-components';
import RightSidebarIndex from '../common/right/RightBar';
import LeftSidebarIndex from '../common/LeftSidebar';
import PostDetailsContent from './content/content';


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