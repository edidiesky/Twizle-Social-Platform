import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BookmarkIcon from '../../assets/svg/feedcardicons/bookmark';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';

type propTypes = {
    setDrop: (value: boolean) => void
};

const Moredropdown: React.FC<propTypes> = ({ setDrop }) => {
    return <Dropdown className="dropdown flex column">
        <div onClick={() => setDrop(false)} className="dropdown_background"></div>

        <ul style={{ fontSize: "14.6px" }} className="flex bottom column w-100 text-bold">
            <li onClick={() => setDrop(false)} className="flex item-center text-bold fs-20 text-dark gap-3">
                <Link to={'/'} className="w-100 flex item-center text-bold fs-20 text-dark gap-3">
                    <BookmarkIcon />Bookmarks
                </Link>
            </li>
            <li onClick={() => setDrop(false)} className="flex item-center text-bold fs-20 text-dark gap-3"><BookmarkIcon />Connect</li>

        </ul>
        <div className="flex w-100 column">
            <div className="fs-15 seeting_list text-bold text-dark w-100 flex item-center justify-space">
                <span>Creator Studio</span>
                <span>
                    <BiChevronDown/>
                </span>
            </div>
            <div className="fs-15 seeting_list text-bold text-dark w-100 flex item-center justify-space">
                <span>Professional Tools</span>
                <span>
                    <BiChevronDown />
                </span>
            </div>
            <div className="fs-15 seeting_list text-bold text-dark w-100 flex item-center justify-space">
                <span>Settings and Support</span>
                <span>
                    <BiChevronDown />
                </span>
            </div>
        </div>
    </Dropdown>
}

const Dropdown = styled.div`
        position: absolute;
        right: -152%;
        bottom: 10%;
        z-index: 4000;
        cursor: pointer;
        width: 320px;
        border-radius: 10px;
        box-shadow: var(--shadow);
        background-color: var(--white);
        min-height: fit-content;
        transition: all .3s;    
        /* opacity:0;
        visibility: hidden; */
     
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
        .seeting_list {
                padding:.6rem 2.4rem;
            z-index: 200;

          &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--grey-hover);

               }
        }
         ul {
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border);
            z-index: 200;
            li {
                padding:1.7rem 2.4rem;
                opacity:1;
                visibility: visible;
                width: 100%;
                transition: all .4s;
                border-radius:5px;
                @media (max-width:400px) {
                padding:1.7rem 2rem;

                }
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--grey-hover);

               }
            }
           }
        &.active {
              height: 300px;
             min-height: fit-content;

            @media (max-width:400px) {
            width: 310px;
        height: fit-content;

        }
            opacity:1;
                visibility: visible;
            ul {

            li {
                padding:1.5rem 2.4rem;
                opacity:1;
                visibility: visible;
                width: 100%;
                transition: all .4s;
                border-radius:5px;
                @media (max-width:400px) {
                padding:1.7rem 2rem;

                }
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--dark-grey-hover);

               }
            }
           }
        }
        
    
`


export default Moredropdown;