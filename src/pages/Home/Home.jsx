import Banner from "./Banner";
import MedicineSection from "./MedicineSection";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <MedicineSection></MedicineSection>
            </div>
        </div>
    );
};

export default Home;