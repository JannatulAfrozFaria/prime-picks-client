import useAuth from "../../Hooks/useAuth";
import Title from "../../Components/Title";
import { Helmet } from "react-helmet-async";
const Profile = () => {
    const {user} = useAuth();
    return (
        <div className="w-3/4 mx-auto text-center pt-24" >
                <Helmet>
                    <title>Prime Pricks Ltd | Profile</title>
                </Helmet>
                <Title heading={'Profile Details'} subHeading={'Here is your Profile Information'}></Title>
            <div>
                <img className="w-96 mx-auto rounded-3xl" src={user?.photoURL} alt="" />
            </div>
            <div className="grid grid-cols-1 gap-4 mt-6">
                <h2>User Name: {user?.displayName} </h2>
                <h2>User Email: {user?.email} </h2>
            </div>
        </div>
    );
};

export default Profile;