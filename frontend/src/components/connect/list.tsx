import React from 'react';
import styled from 'styled-components';
import Top from './top/top';
const ConnectList: React.FC = () => {
    return (
        <ConnectlistStyles>
            <Top />
            <div className="flex column py-2 gap-2 w-100">
                <h3 className="text-extra-bold w-90 auto">Suggested for you</h3>
                <div className="w-100 flex column">
                    <div className="w-100 connect_card flex item-start justify-space gap-1">
                        <div className="image_wrapper">
                            <img src={'/images/raoul-bhavnani.jpg'} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                            <div className="image_gradient"></div>
                        </div>
                        <div className="flex-1 flex column" style={{ gap: ".6rem" }}>
                            <div className="w-100 flex item-center justify-space">
                                <h4 className="fs-16 text-extra-bold flex column" style={{ gap: ".2rem" }}>
                                    Nai_SmaeTech
                                    <span className="block fs-16 text-grey text-light">
                                        @name_sake103
                                    </span>
                                </h4>
                                <div className="btn text-extra-bold btn-3 fs-14 text-white">Follow</div>

                            </div>
                            {/* about */}
                            <h4 className="fs-16 text-light text-dark">
                                Building http://TechPad.ink,
                                @contentreio
                                | Founder
                                @master_backend
                                | Author of http://EnterpriseVue.dev | I help you become a great Backend Engineer and make money
                            </h4>
                        </div>
                    </div>
                    <div className="w-100 connect_card flex item-start justify-space gap-1">
                        <div className="image_wrapper">
                            <img src={'/images/raoul-bhavnani.jpg'} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                            <div className="image_gradient"></div>
                        </div>
                        <div className="flex-1 flex column" style={{ gap: ".6rem" }}>
                            <div className="w-100 flex item-center justify-space">
                                <h4 className="fs-16 text-extra-bold flex column" style={{ gap: ".2rem" }}>
                                    Nai_SmaeTech
                                    <span className="block fs-16 text-grey text-light">
                                        @name_sake103
                                    </span>
                                </h4>
                                <div className="btn text-extra-bold btn-3 fs-14 text-white">Follow</div>

                            </div>
                            {/* about */}
                            <h4 className="fs-16 text-light text-dark">
                                Building http://TechPad.ink,
                                @contentreio
                                | Founder
                                @master_backend
                                | Author of http://EnterpriseVue.dev | I help you become a great Backend Engineer and make money
                            </h4>
                        </div>
                    </div>
                    <div className="w-100 connect_card flex item-start justify-space gap-1">
                        <div className="image_wrapper">
                            <img src={'/images/raoul-bhavnani.jpg'} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                            <div className="image_gradient"></div>
                        </div>
                        <div className="flex-1 flex column" style={{ gap: ".6rem" }}>
                            <div className="w-100 flex item-center justify-space">
                                <h4 className="fs-16 text-extra-bold flex column" style={{ gap: ".2rem" }}>
                                    Nai_SmaeTech
                                    <span className="block fs-16 text-grey text-light">
                                        @name_sake103
                                    </span>
                                </h4>
                                <div className="btn text-extra-bold btn-3 fs-14 text-white">Follow</div>

                            </div>
                            {/* about */}
                            <h4 className="fs-16 text-light text-dark">
                                Building http://TechPad.ink,
                                @contentreio
                                | Founder
                                @master_backend
                                | Author of http://EnterpriseVue.dev | I help you become a great Backend Engineer and make money
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </ConnectlistStyles>
    )
}

const ConnectlistStyles = styled.div`

        flex:1;
        border-right : 1px solid rgba(0,0,0,.06);
        border-left : 1px solid rgba(0,0,0,.06);

        min-height: 100vh;
        /* background-color: red; */
        @media (max-width:980px) {
    border-right : 1px solid rgba(0,0,0,.06);
        }
        h3 {
        font-size: 22px;
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
    border-bottom: 1px solid rgba(0,0,0,.1);
    &:hover {
        background-color: #f1f1f1;
    }
    }

  `

export default ConnectList