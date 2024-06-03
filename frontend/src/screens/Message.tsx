

import React, { useEffect } from 'react';
import { Outlet, useParams } from "react-router-dom";
import styled from 'styled-components';
import LeftSidebarIndex from '../components/common/LeftSidebar';
import LeftContent from '../components/messages/content/leftcontent';
import { useAppDispatch, useAppSelector } from '../hooks/reduxtoolkit';
import { Createconversation, getAllUserConversation } from '../features/conversation/conversationReducer';
const MessageIndex: React.FC = () => {
  const { id } = useParams()
  const [messages, setMessages] = React.useState<string>('')
  const dispatch = useAppDispatch()
  const { message } = useAppSelector(store => store.message)
  const { conversationDetails } = useAppSelector(store => store.conversation)
  useEffect(() => {
    if (id) {
      dispatch(getAllUserConversation())
    }
  }, [id])
  React.useEffect(() => {

    if (!conversationDetails) {
      dispatch(Createconversation({receiverId: id?.split('-')[0] }))
    }

  }, [conversationDetails, id])
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
    height: 100vh;
    overflow: hidden;
    align-items: flex-start;
    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }
    .content {
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