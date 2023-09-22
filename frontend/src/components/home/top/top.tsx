import React from 'react';
import styled from 'styled-components';

interface TopProps {
}
const Top: React.FC<TopProps> = () => {
    return (
        <TopStyles className="w-100">
            <div style={{ paddingTop: "1rem" }} className='flex column gap-1'>
                <h2 style={{fontWeight:"800"}} className="fs-20 text-bold w-90 auto text-dark">Home</h2>
                <div className="w-100 flex item-center">
                    <div className="flex-1 tab text-center fs-15 text-dark text-bold tab-1">
                        <div className="spans text-center">For you</div>
                    </div>
                    <div className="flex-1 tab text-center fs-15 text-grey2 text-light tab-2">Following</div>
                </div>
            </div>

        </TopStyles>
    )
}

const TopStyles = styled.div`
    width: 100%;
    color: #fff;
  position: sticky;
  top: 0;
  /* background-color: rgba(0, 0, 0, 0.65); */
  background-color: var(--top);
  z-index: 3000;
  /* padding: 1rem 0; */
  backdrop-filter: blur(12px);
  /* height: 10rem; */
  border-bottom: 1px solid var(--border);
  /* backdrop-filter: c; */
  .tab {
    padding:2rem;
    &.tab-1 {
        &:hover {
            /* background-color: #e9e9e9; */
            background-color: var(--grey-hover);
        }
        .spans {
            width: max-content;
            margin: 0 auto;
            /* background-color: red; */
            position: relative;
            &::after {
                position: absolute;
                width: 100%;
                content: '';
                left: 0;
                background-color: var(--blue-1);
                height: 4px;
                border-radius: 10px;
                bottom: -110%;
            }
        }
    }
  }
  `

export default Top