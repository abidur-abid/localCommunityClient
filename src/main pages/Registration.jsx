import registration from '../images/register.svg';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import SectionTitle from '../shared components/SectionTitle';
import GoogleLogin from '../shared components/GoogleLogin';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Registration = () => {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const [imageUrl, setImageUrl] = useState('');

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
            setValue("photo", data.data.url);
        } catch (error) {
            toast.error("Image not uploaded!");
            toast.dismiss(toastId);
        }
    };

    const onSubmit = async (data) => {
        const { name, email, password } = data;
        const photo = imageUrl;

        const toastId = toast.loading("Loading...");
        try {
            // Create the user with email and password
            await createUser(email, password);
            // Update the user's profile with name and photo
            await updateUserProfile(name, photo);

            // Save the user information to the database
            const res = await fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, photo }),
            }).then((res) => res.json())
            .then((data) => {
              localStorage.setItem("token", data?.token);
            });;
            
            if (!res.ok) throw new Error('Failed to save user to database');

            toast.dismiss(toastId);
            toast.success("User registered successfully!");
            reset();
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not signed in");
        }
    };

    return (
        <section className='registration'>
            <div>
                <SectionTitle title={'Please Register'} />
            </div>
            <div className='contactForm mb-20'>
                <div className='mx-auto mb-8'>
                    <img src={registration} width={500} alt='Registration' />
                </div>
                <div className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder='YOUR NAME'
                                className='input'
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-base mt-1">
                                    Please enter your name.
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full mt-4 input py-6"
                                onChange={uploadImage}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder='YOUR EMAIL'
                                className='input mt-4'
                                {...register("email", {
                                    required: true,
                                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-base mt-1">
                                    Please enter a valid email address.
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder='YOUR PASSWORD'
                                className='input mt-4'
                                {...register("password", { required: true, minLength: 6 })}
                            />
                            {errors.password && (
                                <span className="text-red-500 text-base mt-1">
                                    Please enter a password.
                                </span>
                            )}
                        </div>
                        <input type="submit" value="Submit" className='button mt-4 w-full' />
                    </form>
                    <div className="divider">OR</div>
                    <GoogleLogin />
                    <div className='mt-4 flex justify-center'>
                        <Link to={'/login'} className='text-center'>
                            If you already have an account, <br /> please login.
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
