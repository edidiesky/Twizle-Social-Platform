import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../hooks/reduxtoolkit';

const WallpaperIndex: React.FC = () => {
  const { userDetails } = useAppSelector(store => store.auth)

  return (
    <WallpaperStyles>
      <div className="image_wrapper">
        {
          userDetails?.image ?
            <img src={userDetails?.image} alt="images-avatar" className="avatar_profile" />
            : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />

        }  <div className="image_gradient"></div>
      </div>
    </WallpaperStyles>
  )
}

const WallpaperStyles = styled.div`
    width: 100%;
    height: 20rem;
    background-color: #CFD9DE;
    position: relative;
    .image_wrapper {
      width:15rem;
      height:15rem;
      border-radius:50%;
      position: absolute;
      bottom:-30%;
      left:2%;
      cursor:pointer;
      border:5px solid #fff;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
      .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      background:rgba(0,0,0,.5);
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      object-fit: cover;
    }
    }

`

export default WallpaperIndex