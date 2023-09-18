import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxtoolkit';
import { useParams } from 'react-router-dom';
import { FollowAndUnFollowAUser, GetAllUserFollowers, GetAllUserFollowings, GetUserProfile } from '../../features/auth/authReducer';
import LoaderIndex from '../loaders';
import { styled } from 'styled-components';

const Followers: React.FC = () => {
  const { followers, userDetails, userprofileisLoading } = useAppSelector(store => store.auth)
  const dispatch = useAppDispatch()
  const { name } = useParams()
  React.useEffect(() => {
    //  dispatch(get)
    if (name) {
      dispatch(GetAllUserFollowers(userDetails?._id))
    }
  }, [])

  const handleFollowUser = (id: string) => {
    dispatch(FollowAndUnFollowAUser(id))
  }
  return (
    <Followerstyles className="w-100">
      <div className="w-100">
        {
          userprofileisLoading && <LoaderIndex type='small' />
        }
        <div className="w-100 flex column">
          {
            followers?.length === 0 ? <div style={{padding:"2rem", width:"60%"}} className="w-85 auto">
              <h3 className="fs-35 w-100 auto text-extra-bold">
                Looking for followers?
                <span style={{marginTop:"3px"}} className="block fs-16 text-grey text-light">
                  When someone follows this account, they’ll show up here. Tweeting and interacting with others helps boost followers.
                </span>
              </h3>
            </div> :
              <div className="w-100 flex column ">
                {
                  followers?.map(x => {
                    const active = userDetails?.followers?.includes(x?._id)

                    return <div className="w-100 connect_card flex item-start justify-space gap-1">
                      <div className="image_wrapper">
                        <img src={x?.profile_image_url ? x?.profile_image_url : `https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png`} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                        <div className="image_gradient"></div>
                      </div>
                      <div className="flex-1 flex column" style={{ gap: ".6rem" }}>
                        <div className="w-100 flex item-center justify-space">
                          <h4 className="fs-16 text-extra-bold flex column" style={{ gap: ".1rem" }}>
                            {x?.display_name}
                            <span className="block fs-14 text-grey text-light">
                              @{x?.name}
                            </span>
                          </h4>
                          <div onClick={() => handleFollowUser(x?._id)} className="btn text-extra-bold btn-3 fs-14 text-white">
                            {
                              active ? <span className="following">Following</span> : "Follow"
                            }
                            {
                              active && <span className="unfollow">UnFollow</span>
                            }
                          </div>

                        </div>
                        {/* about */}
                        <h4 className="fs-16 text-light text-dark">
                          {x?.bio}
                        </h4>
                      </div>
                    </div>
                  })
                }
              </div>
          }
        </div>
      </div>
    </Followerstyles>

  )
}
const Followerstyles = styled.div`
  width: 100%;
   .btn.btn-3 {
        padding: .7rem 1.5rem;
            background-color: transparent !important;
            color: var(--dark-1) !important;
            
            border: 1px solid var(--border1) !important;
            &:hover {
            border: 1px solid rgb(103, 7, 15)!important;
            background-color: rgba(244, 33, 46, 0.1) !important;
            color: var(--red) !important;

                .unfollow {
                display: block;
            }
            .following {
                display: none;
            }
            }
            .unfollow {
                display: none;
                color: var(--red);
            }
        
    }
        .image_wrapper {
      width:5rem;
      height:5rem;
      border-radius:50%;
      cursor:pointer;
      position: relative;
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
      background:rgba(0,0,0,.3);
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      
    }
    }
      .connect_card {
        width: 100%;
    padding:1.3rem 1.5rem;
    &:hover {
        background-color: var(--grey-hover);
    }
    }
`


export default Followers