
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import SingleNews from '../main pages/SingleNews';

const PrivateRoute = () => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(user);
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
   
    if(user){
        return <SingleNews></SingleNews>;
    }
    
};

export default PrivateRoute;