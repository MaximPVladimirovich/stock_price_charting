import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Slider from './Slider';

const Layout = ({ children }: any) => {
    return (
        <>
            <Slider />
            <Header />
            <main>
                {children}
            </main>
            <Outlet />
        </>
    )
}

export default Layout;