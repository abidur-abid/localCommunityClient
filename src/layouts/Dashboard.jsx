import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaNewspaper } from "react-icons/fa6";
import { MdAddTask } from "react-icons/md";
import { GrOverview } from "react-icons/gr";




const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="button drawer-button lg:hidden">Open Sidebar</label>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-20 w-80 min-h-full bg-headerFooterColor text-base-content uppercase">
                <Link to={'/'} className='link2'><MdHome />Home</Link><br />
                <Link to={'/dashboard/profile'} className='link2'><CgProfile />Profile</Link><br />
                <Link to={'/dashboard/overview'} className='link2'><GrOverview />Overview</Link><br />
               <Link to={'/dashboard/allnews'} className='link2'><FaNewspaper />All News</Link><br />
               <Link to={'/dashboard/addnews'} className='link2'><MdAddTask />Add News</Link>
            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;