import React from 'react';
import { Outlet } from "react-router-dom";

const LayoutIndex: React.FC = () => {
    return (
        <>
            <Outlet />
        </>
    )
}


export default LayoutIndex