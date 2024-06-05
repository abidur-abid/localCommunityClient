import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";





const SocialContact = () => {
    return (
        <div className='socialContact'>
            <Link className='link'><FaLinkedin /></Link>
            <Link className='link'><FaInstagramSquare /></Link>
            <Link className='link'><FaTwitter /></Link>
            <Link className='link'><ImFacebook2 /></Link>
        </div>
    );
};

export default SocialContact;