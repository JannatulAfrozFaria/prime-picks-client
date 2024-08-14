
const Banner = () => {
    return (
        <div className="mb-4 md:mb-10">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero h-[350px] md:h-[500px]" style={{backgroundImage: "https://i.postimg.cc/bNp31MfQ/1.png)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="w-4/5">
                                    <h1 className="mb-5 text-2xl md:text-5xl font-bold">Welcome to <br /> Prime Picks Limited!</h1>
                                    <p className="mb-5 w-3/4 mx-auto">
                                    Discover the best in health with our trusted collection of quality medicines. From Over-the-Counter essentials to herbal remedies, we provide reliable options for all your healthcare needs.
                                    </p>
                                    <button className="btn btn-basic">Get Started</button>
                                </div>
                            </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero h-[350px] md:h-[500px]" style={{backgroundImage: "https://i.postimg.cc/ZqBcTz6h/4.png)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="w-4/5">
                                    <h1 className="mb-5 text-2xl md:text-5xl font-bold"> Trusted Source for <br />  Quality Medicines and Expert Care</h1>
                                    <p className="mb-5">Your well-being is our priority, offering expert guidance and top-tier products to ensure you get the care you deserve. Explore our wide range of medicines and experience the convenience of finding exactly what you need, all in one place. Your health, our commitment.</p>
                                    <button className="btn btn-basic">Get Started</button>
                                </div>
                            </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero h-[350px] md:h-[500px]" style={{backgroundImage: "url(https://i.postimg.cc/0jxdd6F8/2.png)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="w-4/5">
                                    <h1 className="mb-5 text-2xl md:text-5xl font-bold"> Your Health, Our Priority</h1>
                                    <p className="mb-5 w-3/4 mx-auto">
                                    Explore a wide range of trusted medicines, from prescription drugs to herbal remedies, all at your fingertips. Quality care, affordable prices, and fast delivery – we’re here to support your wellness journey every step of the way
                                    </p>
                                    <button className="btn btn-basic">Get Started</button>
                                </div>
                            </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="hero h-[350px] md:h-[500px]" style={{backgroundImage: "url(https://i.postimg.cc/xTf3XzL5/5.png)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="w-4/5">
                                    <h1 className="mb-5 text-2xl md:text-5xl font-bold">Affordable, reliable medicines <br /> delivered to your door</h1>
                                    <p className="mb-5 w-3/4 mx-auto">
                                    Find the medicines you need, when you need them. Whether it's over-the-counter essentials or specialized treatments, we've got you covered with top-quality products. Reliable, convenient, and always focused on your well-being.
                                    </p>
                                    <button className="btn btn-basic">Get Started</button>
                                </div>
                            </div>
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