import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";

const SignUp = () => {
    return (
        <div className="pt-24">
             <Helmet>
                <title>Prime Picks Ltd | Sign Up</title>
             </Helmet>
            <Title heading={'Join us!'}  subHeading={'Register with your email.'}></Title>
        </div>
    );
};

export default SignUp;