

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Profile from '../components/profile';
const ProfileIndex: React.FC = () => {
  return (
    <ProfileStyles>
      <Profile />
    </ProfileStyles>
  )
}


const ProfileStyles = styled.div`
  width: 100%;
  position: relative;
`

export default ProfileIndex