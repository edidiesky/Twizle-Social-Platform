import { Variants, motion } from "framer-motion";
import React, { useEffect } from "react";
import { CgDanger } from "react-icons/cg";
import styled from "styled-components";
import { errorMessage } from "../../utils/framer";
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

  const errorMessageVariants: Variants = {
    hidden: {
      scale: 0, // Add other properties like opacity, transform, etc.
      opacity: 0,
      visibility: 'hidden',
      display: 'none',
    },
    visible: {
      scale: 1,
      opacity: 1,
      visibility: 'visible',
      display: 'block',
      // Add other properties as needed
    },
    exit: {
      // Define exit animation properties here
      scale: 0, // Define exit animation properties here
      opacity: 0,
      visibility: 'hidden',
      display: 'none',
    },
  };

  if (alertType === 'danger') {
    return (
      <ErrorMessage
        as={motion.div}
        variants={errorMessageVariants}
        initial="hidden"
        animate={showAlert ? "visible" : "exit"}
        exit="exit"
        className="gap-1 flex item-center justify-center"
      >
        <div className="flex flex1 flex item-center justify-center  w-100 text-center text-light">{alertText}</div>
      </ErrorMessage>
    );
  }

  return (
    <MessageContent
      className={
        showAlert
          ? "gap-1 flex item-center justify-center active"
          : "gap-1 flex item-center justify-center"
      }
    >
      <div className="flex1 family1 flex item-center justify-center w-100 text-light text-center">{alertText}</div>
    </MessageContent>
  );
}

const ErrorMessage = styled(motion.div)`
  min-width: 200px;
  border-radius: 4px;
  padding: 15px 20px;
  background: #f906061d;
  color: #5b0404c9;
  font-size: 14px;
`;
const MessageContent = styled.div`
  min-width: 260px;
  padding: 1.5rem 2rem;
  background-color: var(--blue-1);
  z-index: 10000;
  border-radius: 3px;
  font-size: 13.5px;
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
    bottom: 5%;
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