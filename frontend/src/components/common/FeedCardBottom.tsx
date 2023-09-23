
import React, { useState } from 'react';
import RetweetIcon from '../../assets/svg/feedcardicons/retweet';
import LikeIcon from '../../assets/svg/feedcardicons/like';
import StatIcon from '../../assets/svg/feedcardicons/stat';
import MessageIcon from '../../assets/svg/feedcardicons/message';
import FollowIcon from '../../assets/svg/dropdownicons/follow';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxtoolkit';
import { DeleteTweet, LikeAndUnlikeATweet, RePostATweet } from '../../features/tweet/tweetReducer';
import ShareIcon from '../../assets/svg/feedcardicons/share';
type FeedCardBottomType = {
    handleQuoteModal: (value?: any) => void,
    handleLikeTweet: (value?: any) => void,
    quote?: boolean;
    isliked?: boolean;
    likelength?: any;
    setQuoteModal: (val: boolean) => void;
    setTweet: (val: boolean) => void;
    setQuote: (val: boolean) => void;

}

const FeedCardBottom: React.FC<FeedCardBottomType> = ({ 
    handleQuoteModal, 
    setTweet,
    quote,
    setQuote,
    likelength,
    handleLikeTweet,
    isliked
}) => {
    const { userDetails, userInfo } = useAppSelector(store => store.auth)
    const { tweetDetails, tweets, userIdIncludedInTweetLikesArray } = useAppSelector(store => store.tweet)
    const dispatch = useAppDispatch()
    
    const handleRepostTweet = () => {
        setQuote(false)
        dispatch(RePostATweet({Detailsdata:props?._id}))
    }
    const tweetDetail = tweets?.find((x:any)=> x?._id === tweetDetails?._id)?.tweet_likes.includes(userInfo?._id)
    // console.log(userIdIncludedInTweetLikesArray)
    const likes = likelength

 
    return (
        <>
            
            <div className="w-100 flex item-center">
                <div className="flex item-center w-100 gap-2">
                    <div className="flex item-center w-90 auto gap-2">
                        <div 
                        className="flex w-100 item-center fs-14 text-light justify-start feedtags_wrapper text-dark">
                            <div onClick={() => setTweet(true)} className="flex iconwrapper flex-1 item-center" style={{ gap: ".3rem" }}>
                                <div className="icons icon1 flex item-center justify-center">
                                    <MessageIcon />
                                </div>
                                {/* 23 */}
                            </div>
                            <div className="flex iconwrapper flex-1 relative justify-center text_2 item-center" style={{ gap: ".3rem" }}>
                                <div className={quote ? "dropdownCard card1  flex column active" : "dropdownCard card1  flex column"}>
                                    <div onClick={() => setQuote(false)} className="dropdown_background"></div>
                                    <ul className="flex column w-100 text-bold">
                                        <li style={{ gap: "10px" }} onClick={handleRepostTweet} className="flex fs-15 text-dark text-extra-bold justify-center item-center">
                                            <div className=" flex item-center justify-center"><RetweetIcon type={'large'} /></div>Retweet</li>
                                        <li style={{ gap: "10px" }} onClick={handleQuoteModal} className="flex fs-15 text-dark text-extra-bold justify-center item-center">
                                            <div className=" flex item-center justify-center"><FollowIcon /></div>Quote </li>
                                    </ul>
                                </div>
                                <div onClick={() => setQuote(true)} className="icons icon2 flex item-center justify-center">
                                    <RetweetIcon />
                                </div>
                                {/* 144 */}
                            </div>
                            <div onClick={handleLikeTweet} className="flex iconwrapper flex-1 justify-center text-3 item-center" style={{ gap: ".3rem" }}>
                                <div className="icons icon3 flex item-center justify-center">
                                    <LikeIcon isClicked={isliked} />
                                </div>
                                {likes}
                                {/* 23 */}
                            </div>
                            <div className="flex iconwrapper flex-1 justify-center item-center" style={{ gap: ".3rem" }}>
                                <div className="icons icon1 flex item-center justify-center">
                                    <StatIcon />
                                </div>
                                {/* 123 */}
                            </div>
                            <div className="flex iconwrapper flex-1 justify-center item-center" style={{ gap: ".3rem" }}>
                                <div className="icons icon1 flex item-center justify-center">
                                    <ShareIcon />
                                </div>
                                {/* 123 */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}


export default FeedCardBottom