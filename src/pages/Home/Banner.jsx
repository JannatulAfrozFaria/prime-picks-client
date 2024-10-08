import SliderText from "../../Components/SliderText";

const Banner = () => {
    return (
        <div className="mb-4 md:mb-10">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero h-[350px] md:h-[500px]" style={{backgroundImage: "url(https://i.postimg.cc/bNp31MfQ/1.png)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <SliderText heading1={'Welcome to'} heading2={'Prime Picks Limited!'} description={'Discover the best in health with our trusted collection of quality medicines. From Over-the-Counter essentials to herbal remedies, we provide reliable options for all your healthcare needs.'} ></SliderText>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero h-[350px] md:h-[500px]" style={{backgroundImage: "url(https://i.postimg.cc/ZqBcTz6h/4.png)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <SliderText heading1={'Trusted Source for'} heading2={'Quality Medicines and Expert Care'} description={'Your well-being is our priority, offering expert guidance and top-tier products to ensure you get the care you deserve. Explore our wide range of medicines and experience the convenience of finding exactly what you need, all in one place. Your health, our commitment.'} ></SliderText>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero h-[350px] md:h-[500px]" style={{backgroundImage: "url(https://i.postimg.cc/0jxdd6F8/2.png)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <SliderText heading1={'Your Health, Our Priority '} description={'Explore a wide range of trusted medicines, from prescription drugs to herbal remedies, all at your fingertips. Quality care, affordable prices, and fast delivery – we’re here to support your wellness journey every step of the way.'} ></SliderText>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="hero h-[350px] md:h-[500px]" style={{backgroundImage: "url(https://i.postimg.cc/xTf3XzL5/5.png)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <SliderText heading1={'Affordable, reliable medicines'} heading2={'delivered to your door'} description={'Find the medicines you need, when you need them. Whether it is over-the-counter essentials or specialized treatments, we have got you covered with top-quality products. Reliable, convenient, and always focused on your well-being.'} ></SliderText>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;