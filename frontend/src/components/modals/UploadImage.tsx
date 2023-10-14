import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";

type uploadType = {
    images: string[], 
    setImages: (value: string[]) => void
}

const UploadImage: React.FC<uploadType> = ({images, setImages}) => {
   
    const handleDeleteListUpload = (listindex?:Number) => {
        const result = images.filter((x, index) => index !== listindex);
        setImages(result);
    };
    if (images.length === 3) {
        return (
            <UploadImageStyles
                className="lenght1"
            >
                <div className="imageWrapper lenght1 w-100" key={1}>
                    <img src={images[0]} alt="" className="image" />
                    <div className="imagegradient w-100 h-100"></div>
                </div>
                <UploadImageStyles>
                    {
                        images.slice(1, 3).map((x, index) => {
                            return <div className="imageWrapper w-100" key={index}>
                                <img src={x} alt="" className="image" />
                                <div className="imagegradient w-100 h-100"></div>
                                <div
                                    className="icon delete"
                                    onClick={() => handleDeleteListUpload(index)}
                                >
                                    <RxCross2 />
                                </div>
                            </div>
                        })
                    }
                </UploadImageStyles>

            </UploadImageStyles>
            // <h2>hello</h2>
        );
    }
    return (
        <UploadImageStyles
        >
            {
                images.map((x, index) => {
                    return <div className="imageWrapper w-100" key={index}>
                        <img src={x} alt="" className="image" />
                        <div
                            onClick={()=>handleDeleteListUpload(index)}
                            className="icon delete"
                        >
                            <RxCross2 />
                        </div>
                        <div className="imagegradient w-100 h-100"></div>
                    </div>
                })
            }
        </UploadImageStyles>
        // <h2>hello</h2>
    );
}
export default UploadImage

const UploadImageStyles = styled.div`
width: 100%;
display:grid;
gap:7px;
grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    height: 30rem;

&.lenght1 {
    grid-template-columns: 1fr 1fr;

}
  .imageWrapper {
    height: 100%;
    position: relative;
    border-radius: 20px;
    &.lenght1 {
        height:100%;
    }
    @media (max-width: 780px) {
      height: 25rem;
    }
    .delete {
      position: absolute;
      top: 3%;
      cursor: pointer;
      right: 3%;
      border-radius: 50%;
      display: grid;
      place-items: center;
      transition: all 0.4s;
      z-index: 2000;
      width: 3.5rem !important;
      height: 3.5rem !important;
      background-color: rgba(0, 0, 0, 0.7);

      svg {
        font-size: 18px;
        color: #fff;
      }
    }
    .imagegradient {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 20;
      width: 100%;
      border-radius: inherit;
    }
    .image {
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: inherit;
      object-fit: cover;
    }
  }
    
`