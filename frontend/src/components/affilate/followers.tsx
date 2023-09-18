import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { styled } from 'styled-components';

const Followers: React.FC = () => {
    return (
            <Followerstyles className="w-100">
                <h2 className="fs-35 text-bold">Followers</h2>
            </Followerstyles>
      
    )
}
const Followerstyles = styled.div`
  width: 100%;
`


export default Followers