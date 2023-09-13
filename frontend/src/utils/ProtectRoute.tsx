import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxtoolkit";

interface LayoutProps {
  children: React.ReactNode
}
const ProtectRoute: React.FC<LayoutProps> = ({ children }) => {
  // const navigate = useNavigate()
  const {userInfo } = useAppSelector(store => store.auth)
  // protect the home page and other routes
  if (!userInfo) {
    return <Navigate to="/i/flow/login" />;
  }

  return (children);
};

export default ProtectRoute
