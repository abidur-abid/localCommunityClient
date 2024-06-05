import React, { useState, useEffect } from 'react';
import updateArticle from '../images/updateProfile.svg';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';

const UpdateProfile = () => {

    const {user, updateUserProfile} = useAuth();

//   const user = useLoaderData();
//   console.log(user);

  const [newName, setNewName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (user) {
      setNewName(user.name || '');
      setImageUrl(user.photo || '');
    }
  }, [user]);

  

  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");
    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();
      toast.dismiss(toastId);
      toast.success("Image uploaded successfully!");
      setImageUrl(data.data.url);
    } catch (error) {
      toast.error("Image not uploaded!");
      toast.dismiss(toastId);
    }
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name= newName;
    const photo = imageUrl;

    try {
       const res =  await updateUserProfile(name, photo);

      if (!res.ok) {
        throw new Error("Failed to update user");
      }
      toast.success("Profile updated successfully!");
      const updatedUser = await res.json();
      console.log(updatedUser);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <section className='lg:flex justify-center items-center gap-20 mb-16 mt-16 lg:mt-0'>
      <div>
        <img src={updateArticle} width={300} className='mx-auto mb-8' />
      </div>
      <div>
        <form onSubmit={handleSubmit} className='px-10'>
          <label className="input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
              type="text"
              id="newName"
              className="grow placeholder-gray-600"
              placeholder="Name"
            />
          </label>
          
          <div>
            <input
              type="file"
              className="file-input file-input-bordered w-full mt-4 input py-6"
              onChange={uploadImage}
            />
          </div>
          <input type='submit' value='Submit' className='button mt-8 cursor-pointer w-full uppercase' />
        </form>
      </div>
    </section>
  );
};

export default UpdateProfile;
