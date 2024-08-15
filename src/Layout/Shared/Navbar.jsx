import { Link } from "react-router-dom";


const Navbar = () => {
    const NavOptions = <>
        <li><Link to="/"><a href="">Home</a></Link> </li>
        <li><Link to="/register"><a href="">Register</a></Link> </li>
        <li><Link to="/login"><a href="">Login</a></Link> </li>
        {/* <li><Link to="/dashboard/profile"><a href="">Dashboard</a></Link> </li> */}
    </>
    return (
        <div className="shadow-lg poppins bg-black bg-opacity-30 fixed z-10 w-full mx-auto">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow base">
                        {NavOptions}
                    </ul>
                    </div>
                    <img className="w-16"
                     src="https://i.postimg.cc/XJ8qypbS/prime1.png" alt="prime picks logo" />
                    <a className="btn btn-ghost text-xl md:text-2xl edu base">Prime Picks</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 light-text">
                        {NavOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
                
                {/* Profile Starts*/}
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
                {/* Profile Icon ENds */}
            </div>
        </div>
    );
};

export default Navbar;