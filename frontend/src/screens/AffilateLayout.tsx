import React from 'react';
import { Outlet } from "react-router-dom";
import DisplayModal from '../components/modals/DisplayModal';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../hooks/reduxtoolkit';
import { styled } from 'styled-components';
import LeftSidebarIndex from '../components/common/LeftSidebar';
import RightSidebarIndex from '../components/common/right/RightBar';

const AffilateLayoutIndex: React.FC = () => {
    const { modal } = useAppSelector(store => store.tweet)
    return (

        <>
            {/* <DisplayModal/> */}
            <AffilateLayoutstyles className="w-100">
                <LeftSidebarIndex />
                <div className="flex-1 flex column gap-2">
                    <Outlet />
                </div>
                <RightSidebarIndex />
            </AffilateLayoutstyles>
        </>
    )
}
const AffilateLayoutstyles = styled.div`
  width: 100%;
  position: relative;
      width: 100%;
    display:flex;
    gap:1rem;
    height: 100vh;
    overflow: auto;
    align-items: flex-start;
    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }
`


export default AffilateLayoutIndex