import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import { getTweetId, onTweetPhototModal } from "../../features/tweet/tweetSlice";

type uploadType = {
    images: string[],
    id?: string,
    name?: string,
}

const FeedImage: React.FC<uploadType> = ({ images, id, name }) => {
  const dispatch = useAppDispatch()

  const handlePhotoModal = ()=> {
      dispatch(getTweetId(id))
      dispatch(onTweetPhototModal("any"))
  }

    if (images.length === 3) {
        return (
            <div onClick={()=> handlePhotoModal()}>
                <FeedImageWrapperStyles>
                    <FeedImageStyles
                        className="lenght1"
                    >
                        <div className="imageWrapper lenght1 images w-100" key={1}>
                            <img src={images[0]} alt="" className="image images" />
                            <div className="imagegradient w-100 h-100"></div>
                        </div>
                        <FeedImageStyles className="thirdImageWrapper">
                            {
                                images.slice(1, 3).map((x, index) => {
                                    return <div className="imageWrapper w-100" key={index}>
                                        <img src={x} alt="" className="image" />
                                        <div className="imagegradient w-100 h-100"></div>

                                    </div>
                                })
                            }
                        </FeedImageStyles>

                    </FeedImageStyles>
                </FeedImageWrapperStyles>
            </div>
            // <h2>hello</h2>
        );
    }
    if (images.length === 1) {
        return (
            <div onClick={()=> handlePhotoModal()}>
                <FeedImageWrapperStyles className="active">
                    <FeedImageStyles
                        className="active"
                    >
                        <div className="imageWrappers firstImageWrapper h-100 w-100">
                            <img src={images[0]} alt="" className="image w-100 h-100" />

                            {/* <div className="imagegradient absolute w-100 h-100"></div> */}
                        </div>
                    </FeedImageStyles>
                </FeedImageWrapperStyles>
            </div>
            // <h2>hello</h2>
        );
    }
    if (images.length === 4) {
        return (
            <div onClick={()=> handlePhotoModal()}>
                <FeedImageWrapperStyles>
                    <FeedImageStyles
                        className="wrapper"
                    >
                        {
                            images.map((x, index) => {
                                return <div className="imageWrapper w-100" key={index}>
                                    <img src={x} alt="" className="image" />

                                    <div className="imagegradient w-100 h-100"></div>
                                </div>
                            })
                        }
                    </FeedImageStyles>
                </FeedImageWrapperStyles>
            </div>
            // <h2>hello</h2>
        );
    }
    return (
        <div onClick={()=> handlePhotoModal()}>
            <FeedImageWrapperStyles>
                <FeedImageStyles
                >
                    {
                        images.map((x, index) => {
                            return <div className="imageWrapper w-100" key={index}>
                                <img src={x} alt="" className="image" />

                                <div className="imagegradient w-100 h-100"></div>
                            </div>
                        })
                    }
                </FeedImageStyles>
            </FeedImageWrapperStyles>
        </div>
        // <h2>hello</h2>
    );
}
export default FeedImage

const FeedImageWrapperStyles = styled.div`
   width: 100%;
  border-radius: 12px;
  cursor:pointer;
 `
const FeedImageStyles = styled.div`
width: 100%;
display:grid;
gap:3px;
grid-template-columns: repeat(2,1fr);
min-height: 30rem;
border-radius: 12px;
&.active {
grid-template-columns: repeat(1,1fr);

}
@media (max-width:780px) {
min-height: 20rem;
&.wrapper {
    min-height: 20rem;
    /* min-height: 100%; */
      .imageWrapper {
    @media (max-width: 780px) {
      height: 15rem !important;
    }
}
}

}
@media (max-width:580px) {
min-height: 20rem;
&.wrapper {
    min-height: 20rem;
    /* min-height: 100%; */
      .imageWrapper {
    @media (max-width: 780px) {
      height: 15rem !important;
    }
}
}

}

&.active {
    min-height: 100%;
    height: 100%;
  /* border:1px solid rgb(207, 217, 222); */

    .imageWrappers {
        border-radius: 12px;
        position: relative;
        .image {
            border-radius: 12px;
        }
    }
}
&.lenght1 {
    grid-template-columns: 1fr 1fr;

}
&.thirdImageWrapper {
    grid-template-columns: 1fr;
    .imageWrapper {
           &:nth-child(1) {
        border-top-right-radius: 12px;

            }
             &:nth-child(2) {
        border-bottom-right-radius: 12px;

            }
        img {
            border-radius: 12px;
            &:nth-child(1) {
        /* border-top-right-radius: 12px; */

            }
        }
    }
}
  .imageWrapper {
    height: 100%;
    position: relative;
     &.images {
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
    }
     &:nth-child(1),&:nth-child(3) {
        .image {
              border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        }
      }
        &:nth-child(2),&:nth-child(4) {
        .image {
              border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        }
      }
   
    &.lenght1 {
        height:100%;
    }
    @media (max-width: 780px) {
      height: 25rem;
    }
    .imagegradient {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.08);
      z-index: 20;
      width: 100%;
      border-radius: 12px;
     
    }
    .image {
      width: 100%;
      height: 100%;
      position: absolute;
      /* border-radius: 12px; */
      object-fit: cover;
      :nth-child(1) {
        /* display: none; */
      
      }
      &.images {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }
    }
  }
    
`