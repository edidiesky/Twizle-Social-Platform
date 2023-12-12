
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsImages, BsEmojiSmile } from 'react-icons/bs'
import GiIcon from '../../assets/svg/gif';
import MediaIcon from '../../assets/svg/media';
import ScheduleIcon from '../../assets/svg/schedule';
import PollIcon from '../../assets/svg/poll';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxtoolkit';
import WorldIcon from '../../assets/svg/world';
import { BiChevronDown } from 'react-icons/bi';
import axios from 'axios';
import { CreateTweet } from '../../features/tweet/tweetReducer';
import LoaderIndex from '../loaders';
import { CreateTweetcomment } from '../../features/comment/commentReducer';

const TweetFormSection:React.FC<{
    type?: string,
    placeholder?: string,
}> = ({ type, placeholder }) => {
    const { userInfo } = useAppSelector(store => store.auth)
    const { createtweetisLoading, tweetDetails } = useAppSelector(store => store.tweet)
    const [active, setActive] = useState(true)
    const [text, setText] = useState<string>('')
    const [images, setImages] = useState<string[]>([])
    const [uploading, setUploading] = useState(false);
    const [alert, setAlert] = useState(false);
    const dispatch = useAppDispatch()
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        setUploading(true);
        // create formdata
        const formData = new FormData();

        if (file !== null) {
            for (let i = 0; i < file.length; i++) {
                formData.append("files", file[i]);
            }
        }

        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URLS}/upload`, formData, config);

            setImages(data.urls);
            setAlert(true);
            setUploading(false);
        } catch (err) {
            console.log(err);
        }
    };
    const handlePost = () => {
        type === 'details' ? dispatch(CreateTweetcomment({
            reply_image: images,
            text: text,
            tweetid: tweetDetails?._id
        })) :
        dispatch(CreateTweet({
            tweet_image: images,
            tweet_text: text,
            tweet_user_id: {
                _id: userInfo?._id,
                display_name: userInfo?.display_name,
                name: userInfo?.name,
                bio: userInfo?.bio,
                profile_image_url: userInfo?.profile_image_url,
            }
        }))
        setText('')
        setImages([])
        // setModal(false)
    }

    return (
        <TweetFormSectionStyles>
            {
                createtweetisLoading && <LoaderIndex/>
            }
            <div style={{ gap: "3px" }} className="w-100 tweetformsection_wrapper flex item-start">
                <div className="image_wrapper">
                    {
                        userInfo?.profile_image_url ?
                            <img src={userInfo?.profile_image_url} alt="images-avatar" className="avatar_profile" />
                            : <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="images-avatar_profile" className="avatar_profile" />

                    }

                    <div className="image_gradient"></div>
                </div>
                <div className="flex w-100 column gap-1">
                    <div className={!active ? "flex tweetTop w-100 column item-start active" : "flex tweetTop w-100 column item-start"}>
                        {
                            !active && type !== 'details' && <div style={{ color: "rgb(29, 155, 240)", fontSize: "13.5px", gap: "2px" }} className="replyBtn1 flex item-center text-bold">
                                Everyone <span className='flex item-center justify-center'><BiChevronDown fontSize={'24px'} /></span></div>

                        }

                        <div onClick={() => setActive(false)} className="area w-100">
                            <textarea
                                name={"text"}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder={placeholder} className="text w-100 text-light"></textarea>
                        </div>
                        {
                            !active && type !== 'details' && <div style={{ gap: "5px" }} className="flex replyBtn item-center gap-1">
                                <WorldIcon />
                                <span style={{ color: "rgb(29, 155, 240)", fontSize: "14px" }} className="fs-12 text-bold">Everyone can reply</span>
                            </div>
                        }

                    </div>

                    <div className="flex w-100 item-center justify-space">
                        <div className="flex item-center">
                            <label
                                htmlFor="upload" className="icons flex item-center justify-center">
                                <input
                                    type="file"
                                    id="upload"
                                    placeholder="Gig Image"
                                    autoComplete="off"
                                    style={{ display: "none" }}
                                    onChange={handleFileUpload}
                                    multiple
                                    className="w-100"
                                />
                                <MediaIcon />
                            </label>
                            <label
                                htmlFor="upload" className="icons flex item-center justify-center">
                                <input
                                    type="file"
                                    id="upload"
                                    placeholder="Gig Image"
                                    autoComplete="off"
                                    style={{ display: "none" }}
                                    onChange={handleFileUpload}
                                    multiple
                                    className="w-100"
                                />
                                <GiIcon />
                            </label>
                            <label
                                htmlFor="upload" className="icons flex item-center justify-center">
                                <input
                                    type="file"
                                    id="upload"
                                    placeholder="Gig Image"
                                    autoComplete="off"
                                    style={{ display: "none" }}
                                    onChange={handleFileUpload}
                                    multiple
                                    className="w-100"
                                />
                                <ScheduleIcon />
                            </label>
                            <label
                                htmlFor="upload" className="icons flex item-center justify-center">
                                <input
                                    type="file"
                                    id="upload"
                                    placeholder="Gig Image"
                                    autoComplete="off"
                                    style={{ display: "none" }}
                                    onChange={handleFileUpload}
                                    multiple
                                    className="w-100"
                                />
                                <PollIcon />
                            </label>
                            <label
                                htmlFor="upload" className="icons flex item-center justify-center">
                                <input
                                    type="file"
                                    id="upload"
                                    placeholder="Gig Image"
                                    autoComplete="off"
                                    style={{ display: "none" }}
                                    onChange={handleFileUpload}
                                    multiple
                                    className="w-100"
                                />
                                <GiIcon />
                            </label>
                        </div>
                        <button disabled={!text && images.length === 0} onClick={handlePost} className="btn btn-3 fs-13 text-extra-bold text-white">Post</button>
                    </div>
                </div>
            </div>
        </TweetFormSectionStyles>
    )
}

const TweetFormSectionStyles = styled.div`
    width: 100%;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border);
  font-family: "CustomFont2_light", sans-serif;
.tweetformsection_wrapper{
    display:grid;
    grid-template-columns: .5fr 1fr;
}
    .btn-3 {
        background-color: var(--blue-1) !important;
        opacity: .6;
        padding: .8rem 2rem;
        background:var(--blue-1);
   &:disabled {
      opacity: .3 !important;
      cursor: not-allowed;
    }
    &:hover {
      opacity:.8;
    }
    }
     .replyBtn1 {
    padding:.5px 10px;
    border-radius:20px;
    border:1px solid var(--border1);
    padding-right:5px;

    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }
     .replyBtn {
    padding:4px 10px;
    border-radius:20px;
    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }
  .tweetTop {
     
     padding-bottom: 1rem;
     &.active {
border-bottom: 1px solid var(--border);
     }
  }
    .area {
        height: 4rem;
    }

    .image_wrapper {
      width:4rem;
      height:4rem;
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
      background:rgba(0,0,0,.5);
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      object-fit: cover;
      /* transform: translateY(-100%); */
      position: absolute;
      
    }
    }
    .icons {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            /* font-size: 20px; */
            color:rgba(29, 156, 240, 0.835) ;
        }
        &:hover {
            background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
        }
    }
    .text {
        resize: none;
        border:none;
        outline:none;
        

        font-size: 17px;
        font-family: "CustomFont_Normal", sans-serif;
        font-weight: 400;
        background-color: transparent;
        padding: 1rem ;
        color:var(--dark-1);
        &::placeholder {
            font-size: 20px;
        font-family: "CustomFont_Normal", sans-serif;
            font-family: inherit;
            color:var(--grey-1);
            font-weight: 400;
        }
    }
`
export default TweetFormSection