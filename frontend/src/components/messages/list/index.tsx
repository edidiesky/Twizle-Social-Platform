import React from 'react';
import styled from 'styled-components';
const ListContent: React.FC = () => {
    return (
        <ListStyles>

            <div className="rightwrapper flex item-center justify-center column gap-1">
                <div className="flex column header gap-1 auto">
                    <h3 className="fs-35 text-extra-bold">Select a message
                        <span className="text-light py-1 block fs-16 text-grey">Choose from your existing conversations, start a new one, or just keep swimming.</span>
                    </h3>
                    <div className="w-100 flex item-start">
                        <div className="btn btn-1 fs-16 text-white text-bold">New Messages</div>
                    </div>
                </div>
            </div>

        </ListStyles>
    )
}

const ListStyles = styled.div`
        flex:1;
        border-right : 1px solid var(--border);
        border-left : 1px solid var(--border);
        height: 100vh;
        /* overflow:auto; */
       
        .rightwrapper {
        width:95%;
        height: 100vh;
        .header {
            width: 70%;
        }
        }

  
  `

export default ListContent