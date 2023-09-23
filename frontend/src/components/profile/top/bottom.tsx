import React from 'react';
import moment from 'moment'
import styled from 'styled-components';
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { useAppSelector } from '../../../hooks/reduxtoolkit';
import { HiOutlineMail } from 'react-icons/hi';
import { BsThreeDots, BsLink45Deg } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { Link } from 'react-router-dom';
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>
type modalType = {
  modal?: Boolean;
  setModal: (val: Boolean) => void;
}

const ProfileBottomIndex: React.FC<modalType> = ({ setModal }) => {
  const { userDetails, userInfo } = useAppSelector(store => store.auth)
  const checkifUser = userDetails?._id === userInfo?._id

  const date = moment(userDetails?.createdAt).format('MMM YYYY')

  return (
    <ProfileBottomStyles style={{marginTop:"2rem"}} className='flex column gap-1'>
      <div className="w-90 auto flex item-center justify-space">
        <div className="flex gap-1 item-center justify-end w-100"> 
         {
          !checkifUser && <>
              <div className="icons flex item-center justify-center"><BsThreeDots color='var(--dark-1)' fontSize={'20px'} /></div>
              <Link to={`/messages/${userDetails?._id}-${userInfo?._id}`} className="icons flex item-center justify-center"><HiOutlineMail color='var(--dark-1)' fontSize={'24px'} /></Link>
              <div className="icons flex item-center justify-center"><AiOutlineBell color='var(--dark-1)' fontSize={'24px'} /></div>
          </>
         }
          {
            checkifUser ? <div className="profileBtn text-dark text-bold" onClick={() => setModal(true)}>Edit Profile</div>:
        <div className="profileBtn followbtn text-dark text-bold">Follow</div>
          }
        </div>
      </div>
      <div className="w-90 flex column gap-1 auto">
        {/* username and  */}
        <h3 className="fs-24 text-extra-bold">{userDetails?.name}
          <div style={{marginTop:"3px"}} className="block fs-14 text-grey2 text-light">@{userDetails?.display_name}</div>
        </h3>
        {
          userDetails?.bio && <h4 className="fs-16 text-light">
            {
              userDetails?.bio
            }
          </h4>
        }


        {/* ocupation date location */}
        <div style={{ gap: "1.2rem" }} className="flex flex-wrap fs-15 text-grey2 text-light item-center w-100">
          {
            userDetails?.profession && <div className="flex item-center" style={{ gap: ".5rem" }}>
              <PiSuitcaseSimple fontSize={'18px'} />
              {
                userDetails?.profession
              }
            </div>
          }
          {/* users country */}
          {
            userDetails?.country && <div className="flex item-center" style={{ gap: ".5rem" }}>
              <IoLocationOutline fontSize={'18px'} color={'var(--dark-1)'} />
              {
                userDetails?.country
              }
            </div>
          }
          {/* users website */}
          {
            userDetails?.website && <div className="flex item-center" style={{ gap: ".5rem" }}>
              <BsLink45Deg fontSize={'18px'} color={'var(--dark-1)'} />
              {
                userDetails?.website
              }
            </div>
          }
          <div className="flex item-center" style={{ gap: ".5rem" }}>
            <IoCalendarOutline fontSize={'18px'} />
            Joined {date}
          </div>
        </div>
        {/* followers followings */}
        <div className="flex flex-wrap fs-14 text-light item-center w-100 gap-3">
          <Link to={`/${userDetails?.name}/following`} className="text-bold text-dark flex item-center" style={{ gap: ".5rem" }}>
            {userDetails?.followings?.length || 0} <div className="text-light text-grey2">Following</div>
          </Link> <Link to={`/${userDetails?.name}/followers`} className="text-bold text-dark flex item-center" style={{ gap: ".5rem" }}>
            {userDetails?.followers?.length || 0} <div className=" text-light text-grey2">Followers</div>
          </Link>
        </div>
      </div>
    </ProfileBottomStyles>
  )
}

const ProfileBottomStyles = styled.div`
    width: 100%;
    padding-top:2rem;
    position: relative;
    a:hover {
      text-decoration: underline;
    }
    .avatar_profile {
      width:12rem;
      height:12rem;
      border-radius:50%;
      top:-100px;
      /* transform: translateY(-100%); */
      position: absolute;
      border:5px solid #fff;
    }
    .icons {
  border:1px solid rgba(0,0,0,.1);
  cursor: pointer;
  &:hover {
    background:var(--grey-hover) !important;
  }

    }
    .profileBtn {
      z-index: 300;
  border-radius: 40px;
  text-align: center;
  padding: 1rem 2rem;
  font-size:15px;
  transition: all .4s;
  border:1px solid var(--border1);
    cursor: pointer;

  &.followbtn {
    background:var(--dark-1);
    color:#fff;
    &:hover {
      opacity:.9;
    background:var(--dark-grey-hover);

    }
  }
  &:hover {
    background:var(--grey-2);
  }
    }
    
  `

export default ProfileBottomIndex