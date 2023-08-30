
import React from 'react';
import { NavLink } from 'react-router-dom';

type linkType = {
    hrefs: string,
    isActive: string,
    children?: React.ReactNode,
}

const ActiveLink: React.FC<linkType> = ({ hrefs, children, isActive }) => {


    return (
        <NavLink to={hrefs} className=" text-dark flex item-center gap-2 text-light">
            <div className={isActive ? 'activeLink text-dark flex item-center gap-2 text-light' : 'text-dark flex item-center gap-2 text-light'}>{children}</div>
        </NavLink>
    );
}

export default ActiveLink;
