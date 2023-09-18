import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useAppSelector } from '../../../hooks/reduxtoolkit';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoaderIndex from '../../loaders';
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>
type modalType = {
    setModal?: SetStateProp<Boolean>;
}

const Top: React.FC<modalType> = ({ setModal }) => {
    const { userDetails } = useAppSelector(store => store.auth)
    const { tweets, tweetisLoading } = useAppSelector(store => store.tweet)

    return (
        <TopStyles className="w-100">

            <div className='flex item-center gap-2 w-90 auto'>
                {/* <h2 className="fs-30">Top bar</h2> */}
                <Link to={'/'} className="icons flex item-center justify-center"><AiOutlineArrowLeft color='var(--dark-1)' fontSize={'20px'} /></Link>
                <h3 className="fs-20 text-extra-bold text-dark">{userDetails?.name}
                    <span style={{marginTop:"4px"}} className="flex item-center gap-1 fs-14 text-light text-dark">
                        {
                            tweetisLoading ? <div className="flex justify-center">
                              <LoaderIndex type='small'/>
                            </div> : <>
                                {tweets.length} {" "}
                            </>
                        }Tweets</span>
                </h3>
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
  border-bottom: 1px solid rgba(0,0,0,.1);
  /* backdrop-filter: c; */
  `

export default Top