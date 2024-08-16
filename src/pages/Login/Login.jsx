import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";
import LoginIcon from "../../Login.json"
import LoginIcon2 from "../../Login2.json"
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import SocialLogin from '../../Components/SocialLogin';

const Login = () => {
    // const {signIn} = useAuth();
    const navigate = useNavigate();
    const location =  useLocation();

    // const from = location?.state?.from?.pathname || "/"
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =  form.password.value;
        console.log(email,password);
        // signIn(email,password)
        //     .then(result =>{
        //         const user = result.user;
        //         console.log(user);
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Logged in successfully!",
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        //           navigate(from,{replace: true});
        //     })
    }
    return (
        <div className='w-5/6 md:w-full mx-auto pt-24'>
            <Helmet>
                <title>Asset Track Pro | Login</title>
            </Helmet>
            <Title heading={'Please login!'}></Title>
            <div className="bg-base-200 p-5 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="text-center md:text-left">
                        <Lottie className='w-1/2 md:w-full mx-auto md:mx-0' animationData={LoginIcon} />
                    </div>
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-base" type="submit" value="Login" />
                            </div>
                            <h2 className="text-gray-500 text-sm mt-1">New Here? <Link className='text-cyan-400 font-semibold' to="/SignUp" > Sign Up!</Link></h2>
                            {/* <SocialLogin></SocialLogin> */}
                        </form>
                    </div>
                    <div>
                        <div className="text-center md:text-left">
                            <Lottie className='' animationData={LoginIcon2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;