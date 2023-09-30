
// export default ProtectRoute
import React, { ReactNode } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAppSelector } from "../hooks/reduxtoolkit";
interface LayoutProps {
  children?: ReactNode;
}

const ProtectRoute: React.FC<LayoutProps> = ({ children }) => {
  // Your logic for protecting the route (e.g., authentication checks)
   const {userInfo } = useAppSelector(store => store.auth)

  if (userInfo) {
    return <Route>{children}</Route>; // Render the children when authenticated
  } else {
    return <Navigate to="/login" />; // Redirect to the login page when not authenticated
  }
};

export default ProtectRoute;
