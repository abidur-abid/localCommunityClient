import React from 'react';
import SocialContact from './SocialContact';
import { Link } from 'react-router-dom';
import logo from '../images/icon2.png'
import { MdHome } from "react-icons/md";
import { MdRoundaboutRight } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className="footer">
            <div>
                <h3 className='footerTitle'>Get In Touch</h3>
                <p className='footerText'>I will be happy to talk with you. Just contact me by any media, <br /> which are mentioned on this website!</p>
                <SocialContact></SocialContact>
            </div>
            <div>
                <img src={logo} alt="Logo" className='logo2' />
            </div>
            <div>
                <h3 className='footerTitle uppercase'>Page Links</h3>
                <Link to={'/'} className='footerText2 link'><MdHome />Home</Link>
                <Link to={'/about'} className='footerText2 link'><MdRoundaboutRight />About</Link>
                <Link to={'/activities'} className='footerText2 link'><FaNetworkWired />Activities</Link>
                <Link to={'/news'} className='footerText2 link'><TbLogs />News</Link>
                <Link to={'/contact'} className='footerText2 link'><MdConnectWithoutContact />Contact</Link>
            </div>
            </div>
        </footer>
    );
};

export default Footer;