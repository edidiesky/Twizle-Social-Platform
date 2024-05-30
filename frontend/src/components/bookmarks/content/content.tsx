import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';
import { feedcardtype } from '../../../types/feedtype';
import FeedCard from '../../common/FeedCard';
import { getAllBookmarkedTweet } from '../../../features/tweet/tweetReducer';
import LoaderIndex from '../../loaders';
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>
type modalType = {
    setModal?: SetStateProp<Boolean>;
}

const Content: React.FC<modalType> = ({ setModal }) => {
    const { userInfo, userprofileisSuccess } = useAppSelector(store => store.auth)
    const { bookmarks, tweetisLoading } = useAppSelector(store => store.tweet)

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(getAllBookmarkedTweet())
    }, [])

    return (
        <div className="w-100 flex py-2 column">

            {
                bookmarks?.length === 0 ? <>
                    <div className="flex w-85 auto py-2 item-center justify-center">
                        <h2 style={{ lineHeight: "1.3", width: "60%" }} className="fs-24 w-85 auto text-extra-bold">
                            @{userInfo?.display_name} <br /> you have no bookmarks

                            <span className="text-light fs-14 block text-grey">When they do, their posts will show up here.</span>
                        </h2>
                    </div>
                </> : <div className="w-100">
                    {
                        tweetisLoading ? <div className="flex column gap-1 justify-center">
                            {
                                Array(8).fill("").map((arr, index) => {
                                    return <LoaderIndex type={'skeleton'} />
                                })
                            }
                        </div> : <>
                            {
                                bookmarks?.map((value: feedcardtype) => {
                                    return <FeedCard {...value} key={value._id} />
                                })
                            }
                        </>
                    }
                </div>
            }

        </div>
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

export default Content