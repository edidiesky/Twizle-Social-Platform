

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PostDetails from '../components/feeddetail';
const TweetDetailIndex: React.FC = () => {
  return (
    <TweetDetailStyles>
      <PostDetails />
    </TweetDetailStyles>
  )
}


const TweetDetailStyles = styled.div`
  width: 100%;
  position: relative;
`

export default TweetDetailIndex