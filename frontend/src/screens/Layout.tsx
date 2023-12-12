import React from 'react';
import { Outlet } from "react-router-dom";
import DisplayModal from '../components/modals/DisplayModal';
import { useAppSelector } from '../hooks/reduxtoolkit';
import MyAnimatePresence from '../utils/AnimatePresence';
import NavBottomHeader from '../components/common/NavBottomHeader';
import TweetPhotoModal from '../components/modals/TweetPhotoModal';

const LayoutIndex: React.FC = () => {
    const { modal, tweetphotomodal } = useAppSelector(store => store.tweet)

    // TweetPhotoModal
    return (

        <>
            <MyAnimatePresence

            >
                {modal && <DisplayModal modal={modal} />}
            </MyAnimatePresence>

             <MyAnimatePresence

            >
                {tweetphotomodal && <TweetPhotoModal setModal={function (val: boolean): void {
                    throw new Error('Function not implemented.');
                } } />}
            </MyAnimatePresence>
            {/* <DisplayModal/> */}
            <div className="w-100">
                <Outlet />
                
            </div>
        </>
    )
}


export default LayoutIndex