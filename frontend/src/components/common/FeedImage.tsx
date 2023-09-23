import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { styled } from "styled-components";

type uploadType = {
    images: string[]
}

const FeedImage: React.FC<uploadType> = ({ images }) => {

    if (images.length === 3) {
        return (
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
            // <h2>hello</h2>
        );
    }
    if (images.length === 1) {
        return (
            <FeedImageWrapperStyles >
                <FeedImageStyles
                    className="active"
                >
                    <div className="imageWrappers firstImageWrapper h-100 w-100">
                        <img src={images[0]} alt="" className="image w-100 h-100" />

                        {/* <div className="imagegradient absolute w-100 h-100"></div> */}
                    </div>
                </FeedImageStyles>
            </FeedImageWrapperStyles>
            // <h2>hello</h2>
        );
    }
    if(images.length === 4) {
        return (
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
            // <h2>hello</h2>
        );
    }
    return (
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
        // <h2>hello</h2>
    );
}
export default FeedImage

const FeedImageWrapperStyles = styled.div`
   width: 100%;
  border-radius: 12px;
 `
const FeedImageStyles = styled.div`
width: 100%;
display:grid;
gap:3px;
grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
min-height: 30rem;
border-radius: 12px;

@media (max-width:580px) {
grid-template-columns: repeat(auto-fit, minmax(120px,1fr));
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
  border:1px solid rgb(207, 217, 222);

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