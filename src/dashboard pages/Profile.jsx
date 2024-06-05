import { startTransition, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CgProfile } from "react-icons/cg";
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, logOut } = useAuth();
    const { displayName, photoURL, email } = user || {};
    // const [singleUser, setSingleUser] = useState(null);  // Correctly initialize useState

    // console.log(singleUser);

    const handleLogout = async () => {
        const toastId = toast.loading("Loading...");
        try {
            await logOut();
            toast.dismiss(toastId);
            toast.success("Successfully logged out!");
            startTransition(() => {
                // Assuming refresh is a function that updates the state or redirects
                window.location.reload();  // Refresh the page or perform other actions
            });
        } catch (error) {
            toast.error("Failed to log out!");
            toast.dismiss(toastId);
        }
    };

    // useEffect(() => {
    //     if (!email) return; // Ensure email is available before fetching data

    //     const fetchUser = async () => {
    //         try {
    //             const res = await fetch(`https://localcommunityserver.onrender.com/users/${email}`);

    //             if (!res.ok) {
    //                 throw new Error("Failed to fetch user data");
    //             }

    //             const data = await res.json();
    //             setSingleUser(data);
    //         } catch (error) {
    //             console.error("Error loading user data: ", error);
    //             toast.error("Failed to fetch user data");
    //         }
    //     };

    //     fetchUser();
    // }, [email]); // Fetch data when the email changes

    return (
        <section className='mb-8'>
            <div>
                {user ? (
                    <img 
                        src={user.photoURL} 
                        width={160} 
                        height={160} 
                        className='rounded-full mx-auto border-slate-300 text-secondaryColor border-4' 
                        alt='User Profile'
                    />
                ) : (
                    <CgProfile className='w-40 h-40 rounded-full mx-auto border-slate-300 text-secondaryColor border-4' />
                )}
            </div>
            <div className='flex justify-center'>
                <h2 className='text-3xl text-center mt-2 rounded font-bold uppercase'>Name: {user&& user.displayName}</h2>
            </div>
            <div className='flex justify-center'>
                <h2 className='text-3xl text-center mt-2 rounded font-bold'><span className='uppercase'>Email:</span> {user && user.email}</h2>
            </div>
            <div className='flex justify-center items-center gap-10 mt-4'>
                <button onClick={handleLogout} className='button'>Logout</button>
                <Link to={`/dashboard/profile/${user && user.email}`}><button className='button'>Edit Profile</button></Link>
            </div>
        </section>
    );
};

export default Profile;
