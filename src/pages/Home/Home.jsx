import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import MedicineSection from "./MedicineSection";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Prime Picks Ltd | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <MedicineSection></MedicineSection>
            </div>
        </div>
    );
};

export default Home;