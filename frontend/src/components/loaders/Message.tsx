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
      <div className=" flex1 fs-14 text-bold text-center">{alertText}</div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 260px;
  padding: 1.2rem 2rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
  background-color: var(--blue-1);
  z-index: 10000;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: var(--white);
  transition: all 0.6s;
  text-align:center;
  position:fixed;
  /* top:-100%; */
  left:50%;
  transform:translateX(-50%);
  /* transform: translateY(-1000%); */
  top: -10005%;

  &.active {
    top: 5%;
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