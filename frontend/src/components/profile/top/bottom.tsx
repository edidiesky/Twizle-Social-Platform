import React from 'react';
import moment from 'moment'
import styled from 'styled-components';
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { useAppSelector } from '../../../hooks/reduxtoolkit';
import { HiOutlineMail } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>
type modalType = {
  setModal?: SetStateProp<Boolean>;
}

const ProfileBottomIndex: React.FC<modalType> = ({ setModal }) => {
  const { userDetails, userInfo } = useAppSelector(store => store.auth)
  const checkifUser = userDetails?._id === userInfo?._id

  const date = moment(userDetails?.createdAt).format('MMM YYYY')

  return (
    <ProfileBottomStyles className='flex column gap-1'>
      <div className="w-90 auto flex item-center justify-space">
        <div className="flex gap-1 item-center justify-end w-100"> 
         {
          !checkifUser && <>
              <div className="icons flex item-center justify-center"><BsThreeDots color='var(--dark-1)' fontSize={'20px'} /></div>
              <div className="icons flex item-center justify-center"><HiOutlineMail color='var(--dark-1)' fontSize={'24px'} /></div>
          </>
         }
          {
            checkifUser ? <div className="profileBtn text-dark text-bold" onClick={() => setModal(true)}>Edit Profile</div>:
        <div className="profileBtn followbtn text-dark text-bold">Follow User</div>
          }
        </div>
      </div>
      <div className="w-90 flex column  gap-2 auto">
        {/* username and  */}
        <h3 className="fs-24 text-extra-bold">{userDetails?.name}
          <div style={{marginTop:"7px"}} className="block fs-16 text-grey text-light">@{userDetails?.display_name}</div>
        </h3>
        {
          userDetails?.bio && <h4 className="fs-16 text-light">
            {
              userDetails?.bio
            }
          </h4>
        }


        {/* ocupation date location */}
        <div className="flex flex-wrap fs-16 text-light item-center w-100 gap-1">
          {
            userDetails?.profession && <div className="flex item-center" style={{ gap: ".5rem" }}>
              <PiSuitcaseSimple fontSize={'20px'} />
              {
                userDetails?.profession
              }
            </div>
          }
          {/* users country */}
          {
            userDetails?.country && <div className="flex item-center" style={{ gap: ".5rem" }}>
              <IoLocationOutline fontSize={'20px'} color={'var(--dark-1)'} />
              {
                userDetails?.country
              }
            </div>
          }
          <div className="flex item-center" style={{ gap: ".5rem" }}>
            <IoCalendarOutline fontSize={'20px'} />
            Joined {date}
          </div>
        </div>
        {/* followers followings */}
        <div className="flex flex-wrap fs-16 text-light item-center w-100 gap-3">
          <div className="text-bold flex item-center" style={{ gap: ".5rem" }}>
            {userDetails?.following_count || 0} <div className="text-light">Following</div>
          </div> <div className="text-bold flex item-center" style={{ gap: ".5rem" }}>
            {userDetails?.followers_count || 0} <div className=" text-light">Followers</div>
          </div>
        </div>
      </div>
    </ProfileBottomStyles>
  )
}

const ProfileBottomStyles = styled.div`
    width: 100%;
    padding-top:2rem;
    position: relative;
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
  border:1px solid rgba(0,0,0,.1);
    cursor: pointer;

  &.followbtn {
    background:var(--dark-1);
    color:#fff;
    &:hover {
      opacity:.9;
    background:var(--dark-1);

    }
  }
  &:hover {
    background:var(--grey-2);
  }
    }
    
  `

export default ProfileBottomIndex