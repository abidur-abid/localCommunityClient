import React from 'react';
import logo from '../images/icon.png'
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { MdRoundaboutRight } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import useAuth from '../hooks/useAuth';






const Header = () => {
    
    const {user} = useAuth();
    console.log(user)

    return (
        <header>
            <div className='header'>
                <div>
                    <h4 className='logo'> Local Community !</h4>
                </div>
                <div>
                    <nav className='nav'>
                        <Link to={'/'} className='navLink'><MdHome />Home</Link>
                        <Link to={'/about'} className='navLink'><MdRoundaboutRight />About</Link>
                        <Link to={'/activities'} className='navLink'><FaNetworkWired />Activities</Link>
                        <Link to={'/news'} className='navLink'><TbLogs />News</Link>
                        <Link to={'/contact'} className='navLink'><MdConnectWithoutContact />Contact</Link>
                        {
                            user ? <Link to={'/dashboard'} className='navLink headerButton'><MdDashboard />Dashboard</Link>:
                            <Link to={'/login'} className='navLink headerButton'><BiLogInCircle />Login</Link>
                        }
                        
                        
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;