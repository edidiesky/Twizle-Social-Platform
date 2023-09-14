

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Message from '../components/messages';
const MessageIndex: React.FC = () => {
  return (
    <MessageStyles>
      
      <Message />
    </MessageStyles>
  )
}


const MessageStyles = styled.div`
  width: 100%;
  position: relative;
`

export default MessageIndex