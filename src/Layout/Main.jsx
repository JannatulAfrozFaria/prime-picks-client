import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const Main = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;