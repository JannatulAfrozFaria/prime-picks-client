import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";
import LoginIcon from "../../Login.json"
import LoginIcon2 from "../../Login2.json"
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle, FaGithub  } from "react-icons/fa";
// import SocialLogin from '../../Components/SocialLogin';

const Login = () => {
    const {signIn,signInWithGoogle,signInWithGitHub} = useAuth();
    const navigate = useNavigate();
    const location =  useLocation();

    const from = location?.state?.from?.pathname || "/"
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =  form.password.value;
        console.log(email,password);
        signIn(email,password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from,{replace: true});
            })
    }
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleGitHubSignIn = () =>{
        signInWithGitHub()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
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
                                <input className="btn btn-filter" type="submit" value="Login" />
                            </div>
                            <h2 className="text-gray-500 text-sm mt-1">New Here? <Link className='text-cyan-400 font-semibold' to="/SignUp" > Sign Up!</Link></h2>
                            {/* SOCIAL-----LOG----IN */}
                            <div className='mt-3 grid grid-cols-2 gap-2 w-full'>
                                <div className='btn btn-social flex'>
                                    <div><FaGoogle></FaGoogle></div>
                                    <div><button onClick={handleGoogleSignIn}  className='text-xs' >  Log in With Google</button></div>
                                </div>          
                                <div className='btn btn-social flex'>
                                    <div><FaGithub></FaGithub></div>
                                    <div><button onClick={handleGitHubSignIn}   className='text-xs' >Log in With GitHub</button></div>
                                </div>          
                                {/* <div className='text-left theme-light'><button onClick={handleGitHubSignIn}  className='btn btn-filter' > <FaGithub></FaGithub> Log in With GitHub</button></div>     */}
                            </div>    
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