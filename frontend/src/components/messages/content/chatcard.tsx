import React, { useState } from 'react';
import styled from 'styled-components';

type propstypes = {
    types?: String;
}

const ChatCard: React.FC = (props: propstypes) => {
    return (
        <ChatCardtStyles className='flex item-center SenderChat flex py-2 item-center family1 text-light justify-center'>
            <div className="flex gap-1">
                <div className="flex column gap-1">
                    <div className="w-100 flex gap-1">
                        <h4 className="fs-12 ">ME</h4>
                        <h5 className="text-light fs-12 text-grey">
                            Mar 19, 2023, 1:17 AM
                        </h5>
                    </div>
                    <div className="w-100">
                        <h4 className="fs-16 text-grey text-light">
                            Do you think you can deliver an order by would
                            be suitable
                        </h4>
                    </div>
                </div>
            </div>
        </ChatCardtStyles >
    )
}

const ChatCardtStyles = styled.div`
  
  `

export default ChatCard