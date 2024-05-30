

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Bookmarks from '../components/bookmarks';
const BookmarksIndex: React.FC = () => {
  return (
    <Bookmarks />
  )
}


const BookmarksStyles = styled.div`
  width: 100%;
  position: relative;
  /* overflow: hidden; */
`

export default BookmarksIndex