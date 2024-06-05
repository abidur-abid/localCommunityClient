
import useAuth from '../hooks/useAuth';
import login from '../images/login.svg'
import { useForm } from 'react-hook-form';
import GoogleLogin from '../shared components/GoogleLogin';
import { Link } from 'react-router-dom';
import SectionTitle from '../shared components/SectionTitle';
import toast from 'react-hot-toast';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const { signIn } = useAuth();
     

      const onSubmit = async (data) => {
        const { email, password } = data;
        
        try {
          await signIn(email, password);
          toast.success("Successfully Login");
          

        } catch (error) {
          
          console.log(error);
        }

        const inputEmail = document.getElementById('email');
        inputEmail.value ='';
        const inputPassword = document.getElementById('password');
        inputPassword.value ='';

      };
    
      
    return (
        <section className='login'>
            
                <div className=''>
                    <SectionTitle title={"Please Login"}/> 
                </div>
                
                <div className='contactForm mb-20'>
                <div className='mx-auto mb-8'>
                    <img src={login} width={500} alt='Login' />
                </div>
                <div className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <input type="email" name="email" placeholder='YOUR EMAIL' id='email'  className='input' 
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
                        <br />
                        <input type="password" name="password" placeholder='YOUR PASSWORD' id='password' className='input mt-4'
                        {...register("password", { required: true, minLength: 6 })}
                        />
                        {errors.password && (
                        <span className="text-red-500 text-base mt-1">
                            Please enter a password.
                        </span>
                        )}
                        <br />
                        <input type="submit" value="submit" className='button mt-4 w-full'/>
                    </form>
                    <div className="divider">OR</div>
                    <GoogleLogin/>
                    <div className='mt-4 flex justify-center'><Link to={'/registration'} className='text-center'>If you don't have any account, <br/> please register.</Link></div>
                </div>
                </div>
           
        </section>
    );
};

export default Login;


