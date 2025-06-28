import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-base-200'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className='min-h-[calc(100vh-8rem)]'>
                <Outlet></Outlet>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;