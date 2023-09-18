import React from 'react';
import { Outlet } from "react-router-dom";
import DisplayModal from '../components/modals/DisplayModal';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../hooks/reduxtoolkit';

const LayoutIndex: React.FC = () => {
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
            <div className="w-100">
                <Outlet />
            </div>
        </>
    )
}


export default LayoutIndex