import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Tippy from "@tippyjs/react";


const Navbar = () => {
    const {user,logOut} = useAuth();
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch((error)=>console.log(error))
    }
    const NavOptions = <>
        <li><Link to="/"><a href="">Home</a></Link> </li>
        {/* <li><Link to="/addMedicine"><a href="">Add a Medicine</a></Link> </li> */}
        <li><Link to="/queries"><a href="">Queries</a></Link> </li>
        <li><Link to="/SignUp"><a href="">Sign Up </a></Link> </li>
        
    </>
    return (
        <div className="shadow-lg poppins bg-black bg-opacity-50 fixed z-10 w-full mx-auto">
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow base font-bold">
                        {NavOptions}
                    </ul>
                    </div>
                    <img className="w-16"
                     src="https://i.postimg.cc/XJ8qypbS/prime1.png" alt="prime picks logo" />
                    <a className="btn btn-ghost text-xl md:text-2xl edu light-text font-bold">Prime Picks</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 light-text font-bold">
                        {NavOptions}
                    </ul>
                </div>
                {/* Profile Starts*/}
                <div className="navbar-end">
                    <div> <span className="text-cyan-400 poppins pr-0 md:pr-2">{user?.displayName} </span></div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        
                        <div className="w-10 rounded-full">
                       
                        {
                            user? 
                            <>
                                <img src={user?.photoURL} alt="" />
                            </> 
                            :
                            <>
                                <img
                                alt="Profile Photo"
                                src="https://i.postimg.cc/nhst6y3S/profile1.png" />
                            </>
                        }
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-cyan-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {/* <li><a>Settings</a></li> */}
                            {
                                user ? 
                                <>
                                    <li>
                                        <Link to={'/profile'} >Profile</Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleLogOut} >Log out</Link>
                                    </li>
                                </> 
                                : 
                                <>
                                    <li>
                                        <Link to={'/login'} >Log in</Link>
                                    </li>
                                </>
                            }
                    </ul>
                    </div>
                </div>
                {/* Profile Icon ENds */}
            </div>
        </div>
    );
};

export default Navbar;