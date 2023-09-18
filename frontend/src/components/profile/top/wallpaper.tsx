import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../hooks/reduxtoolkit';

const WallpaperIndex: React.FC = () => {
  const { userDetails } = useAppSelector(store => store.auth)

  return (
    <WallpaperStyles>
      <div className="absolute w-100 h-100">
          <div className="image_gradient"></div>
          {
          userDetails?.profile_banners && <img src={userDetails?.profile_banners} alt="" className="w-100 h-100 banner " />

          }

       
      </div>
      <div className="image_wrapper">
        {
          userDetails?.profile_image_url ?
            <img src={userDetails?.profile_image_url} alt="images-avatar" className="avatar_profile" />
            : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />

        }  <div className="image_gradient"></div>
      </div>
    </WallpaperStyles>
  )
}

const WallpaperStyles = styled.div`
    width: 100%;
    height: 25rem;
    background-color: var(--grey-3);
    position: relative;
    .image_gradient {
      width:100%;
      height:100%;
      position: absolute;
      background:rgba(0,0,0,.1);
      z-index: 20;
      transition:all .5s;
    }
    .banner {
        width:100%;
      height:100%;
      /* transform: translateY(-100%); */
      position: absolute;
      object-fit: cover;
    }
    .image_wrapper {
      width:15rem;
      height:15rem;
      border-radius:50%;
      position: absolute;
      bottom:-30%;
      z-index: 30;
      left:2%;
      cursor:pointer;
      border:5px solid var(--white);
         .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      position: absolute;
      background:rgba(0,0,0,.5);
      opacity:0;
      z-index: 20;
      transition:all .5s;
    }
      &:hover {
        .image_gradient{
          opacity:1;
        }
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