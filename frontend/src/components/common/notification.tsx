
import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'
import styled from 'styled-components';

const Notification = () => {

    return (
        <NotificationStyles className='flex item-center fs-16 text-white shadow' style={{ gap: "1rem" }}>
            <AiOutlineArrowUp fontSize={'20px'} />
            <div className="flex item-center">
                <img src="/images/johanna-richardson.jpg" alt="" className="avatar image_1" />
                <img src="/images/johanna-richardson.jpg" alt="" className="avatar image_1" />
                <img src="/images/johanna-richardson.jpg" alt="" className="avatar image_1" />
            </div>
            Tweeted
        </NotificationStyles>
    )
}

const NotificationStyles = styled.div`
    padding: .8rem 2rem;
    border-radius: 40px;
    position:fixed;
    left: 45%;
    transform:translateX(-50%);
    top:20%;
    z-index: 300;
    background: var(--blue-1);
    .avatar {
        width: 3.5rem !important;
        height: 3.5rem !important;
        &:not(:last-child) {
            margin-right: -5%;
        }
    }
`
export default Notification