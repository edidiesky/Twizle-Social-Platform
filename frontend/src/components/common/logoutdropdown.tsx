import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/reduxtoolkit';
import { Link } from 'react-router-dom';

type propTypes = {
    setDrop: (value: boolean) => void
};

const Logoutdropdown: React.FC<propTypes> = ({ setDrop }) => {
    const { userInfo } = useAppSelector(store => store.auth)

    return <Dropdown className="dropdown flex column">
        <div onClick={() => setDrop(false)} className="dropdown_background"></div>
        <ul className="flex drop w-100 column">
            <li onClick={() => setDrop(false)} className="fs-15 text-bold text-dark w-100 flex item-center justify-space">
                <span>Add an existing account</span>
            </li>

            <li className="fs-15 text-bold text-dark w-100 flex item-center justify-space">
                <Link to={'/logout'} onClick={() => setDrop(false)} className='w-100 text-start fs-15 text-bold text-dark w-100 '>
                    <span>Logout @{userInfo?.name}</span></Link>
            </li>
        </ul>
    </Dropdown>
}

const Dropdown = styled.div`
        position: absolute;
        left: 2%;
        bottom: 100%;
        z-index: 4000;
        cursor: pointer;
        width: 320px;
        border-radius: 17px;
        box-shadow: var(--shadow);
        background-color: var(--white);
        min-height: fit-content;
        transition: all .3s;    
        /* opacity:0;
        visibility: hidden; */
        &::after {
            width: 2rem;
            height: 2rem;
            content: '';
            position: absolute;
            left: 50%;
            background-color: var(--white);
            /* box-shadow: var(--shadow); */
            z-index: -1;
            border-left: 1px solid rgba(0,0,0,.1);
            border-bottom: 1px solid rgba(0,0,0,.1);
            bottom: -8%;
            transform: translateX(-50%) rotate(-45deg);
        }
     
        @media (max-width:500px) {
        width: 300px;

        }
               .dropdown_background {
            width: 100vw;
            height: 100vh;
            position: fixed;
            z-index: 1;
            top: 0;
            left:0;
            background-color: transparent;
        }
        .dropdown_background {
            width: 100vw;
            height: 100vh;
            position: fixed;
            z-index: 30;
            top: 0;
            left:0;
            background-color: transparent;
        }
         ul {
            padding:1rem 0;
            border-bottom: 1px solid var(--border);
            z-index: 200;
            li {
                padding:1.3rem 2.4rem !important;
                opacity:1;
            z-index: 40;

                visibility: visible;
                width: 100%;
                transition: all .4s;
                border-radius:0px !important;
                font-size: 15px !important;
                @media (max-width:400px) {
                padding:1.7rem 2rem;

                }
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--dark-grey-hover) !important;

               }
            }
           }
    
`


export default Logoutdropdown;