

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import LogoutModal from '../components/modals/LogoutModal';
const LogoutIndex: React.FC = () => {
  const [logout, setLogout] = React.useState<boolean>(true)
  return (
    <LogoutStyles>
      <LogoutModal modal={logout} setModal={setLogout} />
    </LogoutStyles>
  )
}


const LogoutStyles = styled.div`
  width: 100%;
  position: relative;
`

export default LogoutIndex