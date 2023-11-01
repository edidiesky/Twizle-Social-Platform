
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import SearchIcon from '../../assets/svg/leftsidebaricons/search'
import HomeIcon from '../../assets/svg/leftsidebaricons/home'
import NotificationIcon from '../../assets/svg/leftsidebaricons/notification'
import MessageIcon from '../../assets/svg/leftsidebaricons/message';

const list = [
    {
        title: "Home",
        path: '/',
        icon: <HomeIcon />
    }, {
        title: "Explore",
        path: '/explore',
        icon: <SearchIcon />
    }, {
        title: "Notifications",
        path: '',
        icon: <NotificationIcon />

    }, {
        title: "Messages",
        path: '/messages',
        icon: <MessageIcon />

    }
]

const NavBottomHeader: React.FC = () => {


    return (
        <NavBottomHeaderStyles className="w-100">
            <div className="w-100 flex item-center justify-space">
                {
                    list.map((x?: any) => {
                        return <li className='flex-1 flex item-center justify-center'>
                            {x.icon}
                        </li>
                    })
                }
            </div>
        </NavBottomHeaderStyles>
    );
}

const NavBottomHeaderStyles = styled.div`
   padding: 2rem 0;
   background-color: var(--top1);
   backdrop-filter: blur(12px);
   position: fixed;
   bottom: 0;
   z-index: 200000;
   left: 0;
   display: none;
   @media (max-width:580px) {
    display: flex;
   }
`

export default NavBottomHeader;
