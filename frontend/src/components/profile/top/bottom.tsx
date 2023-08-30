import React from 'react';
import styled from 'styled-components';
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5'
import { PiSuitcaseSimple } from 'react-icons/pi'
type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>
type modalType = {
  setModal?: SetStateProp<Boolean>;
}

const ProfileBottomIndex: React.FC<modalType> = ({ setModal }) => {
  return (
    <ProfileBottomStyles className='flex column gap-1'>
      <div className="w-90 auto flex item-center justify-space">
        <div className="flex item-center justify-end w-100"> <div className="profileBtn text-dark text-bold" onClick={() => setModal(true)}>Edit Profile</div></div>
      </div>
      <div className="w-90 flex column  gap-2 auto">
        {/* username and  */}
        <h3 className="fs-20 text-extra-bold">Eddie tried coding
          <div className="block fs-18 text-grey text-light">@edidiesky</div>
        </h3>
        <h4 className="fs-16 text-light">Typescript || React.js || Node.js || Nextjs developer - A curious developer | You can visit my portfolio website to see how curious a developer I am</h4>
        {/* ocupation date location */}
        <div className="flex flex-wrap fs-16 text-light item-center w-100 gap-1">
          <div className="flex item-center" style={{ gap: ".5rem" }}>
            <PiSuitcaseSimple fontSize={'20px'} />
            Science & Technology
          </div>
          <div className="flex item-center" style={{ gap: ".5rem" }}>
            <IoLocationOutline fontSize={'20px'} color={'var(--dark-1)'} />
            Nigeria
          </div><div className="flex item-center" style={{ gap: ".5rem" }}>
            <IoCalendarOutline fontSize={'20px'} />
            Joined January 2022
          </div>
        </div>
        {/* followers followings */}
        <div className="flex flex-wrap fs-16 text-light item-center w-100 gap-3">
          <div className="text-bold flex item-center" style={{ gap: ".5rem" }}>
            24 <div className="text-light">Following</div>
          </div> <div className="text-bold flex item-center" style={{ gap: ".5rem" }}>
            204 <div className=" text-light">Followers</div>
          </div>
        </div>
      </div>
    </ProfileBottomStyles>
  )
}

const ProfileBottomStyles = styled.div`
    width: 100%;
    padding-top:1rem;

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
    .profileBtn {
      z-index: 300;
  border-radius: 40px;
  text-align: center;
  padding: 1rem 2rem;
  font-size:15px;
  border:1px solid rgba(0,0,0,.1);
  &:hover {
    background:var(--grey-2);
  }
    }
    
  `

export default ProfileBottomIndex