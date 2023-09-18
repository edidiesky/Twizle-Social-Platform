import React from 'react';
import { Outlet } from "react-router-dom";
import DisplayModal from '../components/modals/DisplayModal';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../hooks/reduxtoolkit';
import { styled } from 'styled-components';
import LeftSidebarIndex from '../components/common/LeftSidebar';
import RightSidebarIndex from '../components/common/right/RightBar';
import Top from '../components/affilate/top';

const AffilateLayoutIndex: React.FC = () => {
    const { modal } = useAppSelector(store => store.tweet)
    return (

        <>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {modal && <DisplayModal modal={modal} />}
            </AnimatePresence>
            {/* <DisplayModal/> */}
            <AffilateLayoutstyles className="w-100">
                <LeftSidebarIndex />
                <div className="flex-1 content flex column">
                    <Top/>
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
    .content {
            flex:1;
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);

        min-height: 100vh;
        /* background-color: red; */
        @media (max-width:980px) {
    border-right : 1px solid var(--border);
        }
    
    }
    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }
`


export default AffilateLayoutIndex