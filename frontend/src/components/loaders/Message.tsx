import React, { useEffect } from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
type messageprops = {
  showAlert?: boolean,
  alertText?: string,
  alertType?: string,
  handleClearAlert?: () => void,
}
const Message: React.FC<messageprops> = ({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) => {
  // dispatch
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(handleClearAlert())
  //   }, 10000);
  // }, []);

  return (
    <MessageContent
      className={
        showAlert
          ? "gap-1 flex item-center justify-space active"
          : "gap-1 flex item-center justify-space"
      }
    >
      <div className=" flex1 text-light text-center">{alertText}</div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 220px;
  padding: 1.2rem 2rem;
  background-color: var(--blue-1);
  z-index: 10000;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  transition: all 1s;
  text-align:center;
  position:fixed;
  /* top:-100%; */
  left:50%;
  transform:translateX(-50%);
  /* transform: translateY(-1000%); */
  bottom: -100vh;

  &.active {
    bottom: -2%;
  /* bottom: -1000%; */

  } 
  &.danger {
    background-color: var(--red);
    color: #fff;
    border-left: 4px solid var(--red);
  }
  @media (max-width: 780px) {
    min-width: 300px;
    justify-content: flex-start;
  }
  .flex1 {
    flex: 1;
  }
`;

export default Message