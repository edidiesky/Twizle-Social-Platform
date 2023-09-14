import React from 'react';
import styled from 'styled-components';
import LeftSidebarIndex from '../common/LeftSidebar';
const Message: React.FC = () => {
    return (
        <HomeStyles>
          {/* <Content/> */}
        </HomeStyles>
    )
}

const HomeStyles = styled.div`
 width: 100%;
    display:flex;
    gap:1rem;
    /* height: 100vh;
    overflow: auto; */
    align-items: flex-start;
    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }
  `

export default Message