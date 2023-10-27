import React from 'react';
import { Outlet } from 'react-router-dom';

interface RootProps {}

const Root = ({ ...restProps }: RootProps) => {
    return (
        <>
            <nav>Nav</nav>
            <Outlet />
        </>
    );
};

export default Root;
