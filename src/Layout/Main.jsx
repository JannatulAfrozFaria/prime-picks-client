import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;