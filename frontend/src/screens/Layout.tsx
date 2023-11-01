import React from 'react';
import { Outlet } from "react-router-dom";
import DisplayModal from '../components/modals/DisplayModal';
import { useAppSelector } from '../hooks/reduxtoolkit';
import MyAnimatePresence from '../utils/AnimatePresence';
import NavBottomHeader from '../components/common/NavBottomHeader';

const LayoutIndex: React.FC = () => {
    const { modal } = useAppSelector(store => store.tweet)
    return (

        <>
            <MyAnimatePresence

            >
                {modal && <DisplayModal modal={modal} />}
            </MyAnimatePresence>
            {/* <DisplayModal/> */}
            <div className="w-100">
                <Outlet />
                
            </div>
        </>
    )
}


export default LayoutIndex