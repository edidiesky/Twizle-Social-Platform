
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
    const navHeaderRef = React.useRef(null)
    const [isVisible, setIsVisible] = useState(false);
    const [height, setHeight] = useState(0)

 
    const listenToScroll = () => {
        let heightToHideFrom = 200;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [height])

    // console.log(height)
    return (
        <NavBottomHeaderStyles ref={navHeaderRef} className={isVisible?'w-100 active':"w-100"}>
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
   @media (max-width:480px) {
    display: flex;
   }
   &.active {
   display: none;

   }
`

export default NavBottomHeader;
