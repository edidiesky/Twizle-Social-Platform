import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/reduxtoolkit";

interface LayoutProps {
  children: React.ReactNode
}
const ProtectRoute: React.FC<LayoutProps> = ({ children }) => {
  // const navigate = useNavigate()
  const { registerisLoading, registerisSuccess, userInfo } = useAppSelector(store => store.auth)
  if (!userInfo) {
    return <Navigate to="/i/flow/login" />;
  }

  return (children);
};

export default ProtectRoute
