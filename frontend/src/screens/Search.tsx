

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Search from '../components/search';
const SearchIndex: React.FC = () => {
  return (
    <SearchStyles>
      <Search />
    </SearchStyles>
  )
}


const SearchStyles = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`

export default SearchIndex