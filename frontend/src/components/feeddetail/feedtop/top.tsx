import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>
type modalType = {
    setModal?: SetStateProp<Boolean>;
}

const Top: React.FC<modalType> = ({ setModal }) => {
    return (
        <TopStyles className="w-100">

            <div className='flex item-center gap-2 w-90 auto'>
                {/* <h2 className="fs-30">Top bar</h2> */}
                <Link to={'/'} className="icons flex item-center justify-center"><AiOutlineArrowLeft color='var(--dark-1)' fontSize={'20px'} /></Link>
                <h4 className="fs-20 text-bold text-dark">Tweets
                </h4>
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
  z-index: 30;
  padding: 1rem 0;
  backdrop-filter: blur(12px);
  /* height: 10rem; */
  border-bottom: 1px solid var(--border);
  `

export default Top