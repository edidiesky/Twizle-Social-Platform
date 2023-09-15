

import React, { useEffect, useRef } from 'react';
import { Outlet } from "react-router-dom";
import { styled } from 'styled-components';
import LeftSidebarIndex from '../components/common/LeftSidebar';
import LeftContent from '../components/messages/content/leftcontent';
const MessageIndex: React.FC = () => {
  return (
    <MessageStyles>
      <LeftSidebarIndex />
      <div className="content flex item-start">
        <LeftContent />
        <Outlet />
      </div>

    </MessageStyles>
  )
}


const MessageStyles = styled.div`
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
    .content {
        /* flex:1; */
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);
        overflow:auto;
        height: 100vh;
        width: 72%;
        /* background-color: red; */
        @media (max-width:980px) {
          border-right : 1px solid var(--border);
        }
    }
`

export default MessageIndex