

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Quote from '../components/quote';
const QuoteIndex: React.FC = () => {
  return (
    <QuoteStyles>
      <Quote />
    </QuoteStyles>
  )
}


const QuoteStyles = styled.div`
  width: 100%;
  position: relative;
`

export default QuoteIndex