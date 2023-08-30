import React, { useState } from 'react';
import styled from 'styled-components';
import ChatContent from './chat';

const RightContent: React.FC = () => {
    const [message, setMessage] = useState(true)
    return (
        <RightContentStyles className='flex item-center justify-center'>
            {
                message ? <ChatContent /> : <div className="rightwrapper flex item-center justify-center column gap-1">
                    <div className="flex column header gap-2 auto">
                        <h3 className="fs-40 text-extra-bold">Select a message
                            <span className="text-light block fs-16 text-grey">Choose from your existing conversations, start a new one, or just keep swimming.</span>
                        </h3>
                        <div className="w-100 flex item-start">
                            <div className="btn btn-1 fs-16 text-white text-bold">New Messages</div>
                        </div>
                    </div>
                </div>
            }
        </RightContentStyles>
    )
}

const RightContentStyles = styled.div`
        flex:1;
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);
        min-height: 100vh;
        overflow:auto;
       
        .rightwrapper {
        width:95%;
        min-height: 100vh;
        border-right : 1px solid var(--border);
        height: 100%;
        .header {
            width: 70%;
        }
        }

  
  `

export default RightContent