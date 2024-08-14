
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: "url(../src/assets/banner/1.PNG)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Welcome to Prime Picks Limited!</h1>
                                    <p className="mb-5">
                                    Discover the best in health with our trusted collection of quality medicines. From Over-the-Counter essentials to herbal remedies, we provide reliable options for all your healthcare needs.
                                    </p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                    </div>
                    {/* <img
                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                    className="w-full" /> */}
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Welcome to Prime Picks Limited!</h1>
                                    <p className="mb-5">Your well-being is our priority, offering expert guidance and top-tier products to ensure you get the care you deserve. Explore our wide range of medicines and experience the convenience of finding exactly what you need, all in one place. Your health, our commitment.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                    </div>
                </div>
                {/* <div id="item2" className="carousel-item w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full" />
                </div> */}
                <div id="item3" className="carousel-item w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" />
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