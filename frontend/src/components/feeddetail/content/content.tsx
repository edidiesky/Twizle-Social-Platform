import React from 'react';
import styled from 'styled-components';
import Top from '../feedtop/top';
import PostDetailsComments from './comments';
import TweetFormSection from '@/components/common/tweetsection';
import PostFeedCard from '../card';
import { BiSolidBadgeCheck } from 'react-icons/bi'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { LiaRetweetSolid } from 'react-icons/lia'


const PostDetailsContent: React.FC = () => {
    return (
        <PostDetailsContentStyles>
            <Top />
            {/* post feed card */}
            <PostFeedCard />
            {/* data likes reviews comments */}
            <div className="flex-100 column gap-1 fs-18 text-light text-grey text-light">
                <div className="flex bottom w-90 auto item-center gap-1">
                    <span>7:24 AM · Jul 21, 2023</span>
                    <span className="fs-16 text-grey text-light">·
                        <span className="fs-16 text-bold text-dark">5,133</span>
                        {" "}
                        Views
                    </span>
                </div>
                <div className="flex bottom w-90 auto item-center gap-2 flex-wrap">
                    <span className="fs-16 text-grey text-light">
                        <span className="fs-16 text-bold text-dark">50</span>
                        {" "}
                        Retweets
                    </span> <span className="fs-16 text-grey text-light">
                        <span className="fs-16 text-bold text-dark">500</span>
                        {" "}
                        Quotes
                    </span> <span className="fs-16 text-grey text-light">
                        <span className="fs-16 text-bold text-dark">5</span>
                        {" "}
                        Likes
                    </span>
                    <span className="fs-16 text-grey text-light">
                        <span className="fs-16 text-bold text-dark">15</span>
                        {" "}
                        Bookmarks
                    </span>
                </div>
                <div className="flex w-90 auto justify-space bottom item-center w-90 gap-2">
                    <div className="flex item-center w-85 auto justify-space fs-14 text-light feedtags_wrapper">
                        <div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                            <div className="icons icon1 flex item-center justify-center">
                                <HiOutlineChatBubbleOvalLeft />
                            </div>
                            23
                        </div>
                        <div className="flex iconwrapper text_2 item-center" style={{ gap: ".3rem" }}>
                            <div className="icons icon2 flex item-center justify-center">
                                <LiaRetweetSolid fontSize={'24px'} />
                            </div>
                            144
                        </div><div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                            <div className="icons icon1 flex item-center justify-center">
                                <HiOutlineChatBubbleOvalLeft />
                            </div>
                            23
                        </div><div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                            <div className="icons icon1 flex item-center justify-center">
                                <HiOutlineChatBubbleOvalLeft />
                            </div>
                            23
                        </div>
                    </div>
                    {/* <div className="flex iconwrapper item-center fs-16 text-light" style={{ gap: ".3rem" }}>
                        <div className="icons icon1 flex item-center justify-center">
                            <HiOutlineChatBubbleOvalLeft fontSize={'20px'} />
                        </div>
                        23
                    </div> */}
                </div>

            </div>
            <TweetFormSection />
            <PostDetailsComments />
        </PostDetailsContentStyles>
    )
}

const PostDetailsContentStyles = styled.div`
        flex: 1;
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);
        min-height: 100vh;

        .bottom {
            padding:2rem 0;
            border-bottom : 1px solid var(--border);

        }
        .iconwrapper {
        transition: all .5s;
            font-size: 17px;
        cursor: pointer;
        @media (max-width:380px) {
            font-size: 13px;
        }
        &:hover {
            color:rgba(29, 156, 240, 0.835) ;
            &.text_2 {

                color:rgba(0, 186, 124, 0.802) ;

            }
            .icons.icon1 {
                background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
            }.icons.icon2 {
                background-color: rgba(0,186,124,.1);
                svg {
                    color:rgba(0, 186, 124, 0.802) ;
                }
            }
        }
       .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 25px;
        }
    }
}

  `

export default PostDetailsContent