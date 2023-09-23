import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxtoolkit';
import { Link } from 'react-router-dom';
import TwitterIcon from '../../../assets/svg/twitter';
import { ToggleSidebar, offSidebar } from '../../../features/tweet/tweetSlice';

interface TopProps {
}
const Top: React.FC<TopProps> = () => {
    const { userInfo, userDetails } = useAppSelector(store => store.auth)
    const dispatch = useAppDispatch()

    return (
        <TopStyles className="w-100">
            <div style={{ paddingTop: "1rem" }} className='flex top2 w-85 auto column gap-1'>
               <div className="w-100 flex item-center justify-space">
                    <div onClick={() => dispatch(ToggleSidebar("any"))} className="flex-1">
                        {
                            userInfo?.profile_image_url ?
                                <img src={userInfo?.profile_image_url} alt="images-avatar" className="avatar" />
                                : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar" className="avatar" />

                        }
                    </div>
                    <Link to={'/'} className="icon flex item-center justify-center">
                        <TwitterIcon type={'small'} />
                    </Link>
                    <div className="flex-1"></div>
               </div>
                <div className="w-100 flex item-center">
                    <div className="flex-1 tab text-center fs-15 text-dark text-bold tab-1">
                        <div className="spans text-center">For you</div>
                    </div>
                    <div className="flex-1 tab text-center fs-15 text-grey2 text-light tab-2">Following</div>
                </div>
            </div>
            <div style={{ paddingTop: "1rem" }} className='flex top1 column gap-1'>
                <h2 style={{ fontWeight: "800" }} className="fs-20 text-bold w-90 auto text-dark">Home</h2>
                <div className="w-100 flex item-center">
                    <div className="flex-1 tab text-center fs-15 text-dark text-bold tab-1">
                        <div className="spans text-center">For you</div>
                    </div>
                    <div className="flex-1 tab text-center fs-15 text-grey2 text-light tab-2">Following</div>
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
  /* background-color: rgba(0, 0, 0, 0.65); */
  background-color: var(--top);
  z-index: 3000;
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  /* height: 10rem; */
  border-bottom: 1px solid var(--border);
  /* backdrop-filter: c; */
   .avatar {
        width: 4rem !important;
        height: 4rem !important;
        border-radius: 50%;
        object-fit: cover;
    margin: 0 !important;
    
    }
    .top1 {
        @media (max-width:490px) {
            display:none;
        }
    }
    .top2 {
        @media (min-width:490px) {
            display:none;
        }
    }
  .tab {
    padding:2rem;
    &.tab-1 {
        &:hover {
            /* background-color: #e9e9e9; */
            background-color: var(--grey-hover);
        }
        .spans {
            width: max-content;
            margin: 0 auto;
            /* background-color: red; */
            position: relative;
            &::after {
                position: absolute;
                width: 100%;
                content: '';
                left: 0;
                background-color: var(--blue-1);
                height: 4px;
                border-radius: 10px;
                bottom: -110%;
            }
        }
    }
  }
  `

export default Top