import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <progress className="progress progress-success w-56" value="40" max="100"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;