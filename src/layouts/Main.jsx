import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared components/Header';
import Footer from '../shared components/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;