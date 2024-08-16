import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";
import LoginIcon from "../../Login.json"
import LoginIcon2 from "../../Login2.json"

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Prime Picks Ltd | Log In</title>
             </Helmet>
             <Title heading={'Log In'}  subHeading={'Provide the accurate information which you used during signing up.'}></Title>
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
                            <h2 className="text-gray-500 text-sm mt-1">New Here? <Link className='text-purple-400 font-semibold' to="/joinAsManager" > Join as a HR Manager</Link>  or <Link className='text-purple-400 font-semibold' to="/joinAsEmployee" > Join as an Employee</Link></h2>
                            <SocialLogin></SocialLogin>
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