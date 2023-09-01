

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Auth from '../components/register';
const AuthIndex: React.FC = () => {
  return (
    <AuthStyles>
      <Auth />
    </AuthStyles>
  )
}


const AuthStyles = styled.div`
  width: 100%;
  position: relative;
`

export default AuthIndex