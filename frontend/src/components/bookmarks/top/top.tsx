import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useAppSelector } from '../../../hooks/reduxtoolkit';
import { CircularProgress } from '@material-ui/core';
import { BsThreeDots } from 'react-icons/bs';
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>
type modalType = {
    setModal?: SetStateProp<Boolean>;
}

const Top: React.FC<modalType> = ({ setModal }) => {
    const [drop, setDrop] = React.useState(false)

    const {  userInfo } = useAppSelector(store => store.auth)
    const { tweets, tweetisLoading } = useAppSelector(store => store.tweet)

    return (
        <TopStyles className="w-100">

            <div className='flex item-center gap-2 justify-space w-90 auto'>
                {/* <h2 className="fs-30">Top bar</h2> */}
               
                <h3 className="fs-18 text-extra-bold text-dark">Bookmarks
                    <span style={{marginTop:"1px"}} className="flex item-center gap-1 fs-12 text-light text-dark">
                       @{userInfo?.email}</span>
                </h3>
                <div className="flex relative">
                    <div className={drop ? "dropdownCard flex column active" : "dropdownCard  flex column"}>
                        <div onClick={() => setDrop(false)} className="dropdown_background"></div>
                        <ul onClick={() => setDrop(false)} className="flex column w-100">
                            <li className="flex item-center fs-15 text-dark text-extra-bold gap-1">
                               Clear all Bookmarks</li>
                       </ul>
                    </div>
                    <div onClick={() => setDrop(true)} className="icons flex item-center justify-center"><BsThreeDots color='var(--dark-1)' fontSize={'20px'} /></div>
                </div>
                
            </div>

        </TopStyles>
    )
}

const TopStyles = styled.div`
    width: 100%;
    color: #fff;
  position: sticky;
  top: 0;
  background-color: var(--top);
  z-index: 300;
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  padding:1rem 0;
  border-bottom: 1px solid var(--border);
  /* backdrop-filter: c; */
   .dropdownCard {
        position: absolute;
        right: 2%;
        top: 8px;
        z-index: 40;
        cursor: pointer;
        width: 200px;
        border-radius: 10px;
        box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
        background-color: var(--white);
        box-shadow: var(--shadow);

        height: 0;
        transition: all .6s;    
        opacity:0;
        visibility: hidden;
        .dropdown_background {
            width: 100vw;
            height: 100vh;
            position: fixed;
            z-index: 30;
            top: 0;
            left:0;
            background-color: transparent;
        }
        &.active {
            height: 50px;
            opacity:1;
                visibility: visible;
            ul {
                z-index: 50;
            li {
                padding:1.5rem 2.4rem;
                width: 100%;
                color: var(--red);
                 opacity:1;
                visibility: visible;
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--dark-grey-hover);

               }
            }
           }
        }
         ul {
                z-index: 50;
            li {
                padding:1.5rem 2.4rem;
                width: 100%;
                opacity: 0;
                visibility: hidden;
                color: var(--red);
                &:hover {
                   /* background-color: #f1f1f1; */
                   background-color: var(--dark-grey-hover);

               }
            }
           }
        
    }
  `

export default Top