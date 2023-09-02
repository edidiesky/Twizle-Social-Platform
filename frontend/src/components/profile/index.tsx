import React from 'react';
import styled from 'styled-components';
import WallpaperIndex from './top/wallpaper';
import ProfileBottomIndex from './top/bottom';
import RightSidebarIndex from '../common/right/RightBar';
import LeftSidebarIndex from '../common/LeftSidebar';
import Top from './top/top';
import Feed from '../common/feed/feed';
import AuthModal from '../modals/EditProfileModal';
import { AnimatePresence } from 'framer-motion';

type Rightbar = {
    type: String
}

const Profile: React.FC = () => {
    const [modal, setModal] = React.useState(false)
    return (
        <ProfileStyles>
            {/* top bar of user profile */}
            <LeftSidebarIndex />
            {/* control the update modal */}
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {
                    modal && <AuthModal modal={modal} setModal={setModal} />
                }
            </AnimatePresence>
            <div className="flex flex-1 wrap column gap-2">
                <div className="flex column">
                    <Top />
                    <WallpaperIndex />
                    <ProfileBottomIndex setModal={setModal} />
                </div>
                <div className="w-100 flex column">
                    <div className="w-100 flex item-center text-bold fs-16 profilelist">
                        <div className="flex-1 active profileTag"><div className="tag">Tweets</div></div>
                        <div className="flex-1 profileTag">Tweets</div>
                        <div className="flex-1 profileTag">Tweets</div>
                    </div>
                    <Feed />
                </div>
            </div>
            <RightSidebarIndex types={'profile'} />
            {/* User feeds */}
        </ProfileStyles>
    )
}

const ProfileStyles = styled.div`
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
    .profilelist {
        border-bottom:1px solid rgba(0,0,0,.1);
        .profileTag {
            padding:2rem;
            text-align:center;
            &:hover {
                background:var(--grey-2);
            }
        }
    }
    .wrap {
        border-right : 1px solid rgba(0,0,0,.1);
        border-left : 1px solid rgba(0,0,0,.1);
        @media (max-width:980px) {
    border-right : 1px solid rgba(0,0,0,.1);

        }
    }

  `

export default Profile