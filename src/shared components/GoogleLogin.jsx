
import { GrGoogle } from "react-icons/gr";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const GoogleLogin = () => {

    const { googleSignIn } = useAuth();

    const handleGoogleLogin = async() => {      
            const googleUser = await googleSignIn();
            toast.success("Successfully Login");
            console.log(googleUser.user);
            const res = await fetch('https://localcommunityserver.onrender.com/users', {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name: googleUser.user.displayName, email: googleUser.user.email, photo: googleUser.user.photoURL}),
        }).then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data?.token);
        });;
      };

    return (
        <section>
            <button onClick={handleGoogleLogin}  className='button w-full flex justify-center items-center gap-3'>
                <GrGoogle />
                <p>Login With Google</p>
            </button>
        </section>
    );
};

export default GoogleLogin;