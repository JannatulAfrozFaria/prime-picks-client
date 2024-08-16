import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Prime Picks Ltd | Log In</title>
             </Helmet>
             <Title heading={'Log In'}  subHeading={'Provide the accurate information which you used during signing up.'}></Title>
        </div>
    );
};

export default Login;