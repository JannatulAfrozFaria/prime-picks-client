import useAuth from "../../Hooks/useAuth";
import Title from "../../Components/Title";
import { Helmet } from "react-helmet-async";
const Profile = () => {
    const {user} = useAuth();
    return (
        <div className="w-3/4 mx-auto text-center pt-24 pb-8 md:pb-16" >
                <Helmet>
                    <title>Prime Pricks Ltd | Profile</title>
                </Helmet>
                <Title heading={'Profile Details'} subHeading={'Here is your Profile Information'}></Title>
            <div>
                <img className="w-72 mx-auto rounded-full" src={user?.photoURL} alt="" />
            </div>
            <div className="grid grid-cols-1 gap-4 mt-6 text-left md:text-center w-1/2 md:w-1/5 mx-auto">
                <h2> <span className="text-cyan-400 poppins">User Name:</span>  {user?.displayName} </h2>
                <h2> <span className="text-cyan-400 poppins">Email: </span>  {user?.email} </h2>
            </div>
        </div>
    );
};

export default Profile;