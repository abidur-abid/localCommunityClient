import React, { useState } from 'react';
import logo from '../images/icon.png'
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { MdRoundaboutRight } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import useAuth from '../hooks/useAuth';






const Header = () => {
    
    const {user} = useAuth();
    console.log(user)

    const [mobileMenu, setMobileMenu] = useState(true);
    const handleMobileMenu = () =>{
        setMobileMenu(!mobileMenu);
        
    }

    return (
        <>
        <header>
            <div className='header lg:visible invisible sticky'>
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
        <header className='sticky top-0 z-50 visible lg:invisible my-0'>
          <div className='mobileHeader flex justify-between items-center py-5 my-0'>
          <div>
                <Link to={'/'} className='hover:text-secondaryColor cursor-pointer'><h1 className='logo'>Local Community !</h1></Link>
            </div>
            <nav className='relative '>
               {
                mobileMenu ? <button onClick={handleMobileMenu}><IoMdMenu className='text-2xl hover:text-secondaryColor'/></button> 
                :
                <div className='absolute right-0  transition duration-700 ease-in-out ' onClick={handleMobileMenu}>
                <div className='flex justify-end' >
                <button   className=''><FaMinus className='text-2xl hover:text-secondaryColor '/></button>
                </div>
                <div className=' bg-headerFooterColor w-52 h-72 rounded px-5 overflow-auto' >
                <Link to={'/'} className='navLink'><MdHome />Home</Link>
                        <Link to={'/about'} className='navLink'><MdRoundaboutRight />About</Link>
                        <Link to={'/activities'} className='navLink'><FaNetworkWired />Activities</Link>
                        <Link to={'/news'} className='navLink'><TbLogs />News</Link>
                        <Link to={'/contact'} className='navLink'><MdConnectWithoutContact />Contact</Link>
                        {
                            user ? <Link to={'/dashboard'} className='navLink headerButton'><MdDashboard />Dashboard</Link>:
                            <Link to={'/login'} className='navLink headerButton'><BiLogInCircle />Login</Link>
                        }                             
                </div>
                </div>
                
               
               }
               
                
            </nav>
          </div>
            </header>
        </>
    );
};

export default Header;