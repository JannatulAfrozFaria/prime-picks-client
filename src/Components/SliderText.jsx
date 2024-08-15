
const SliderText = ({heading1, heading2, description}) => {
    return (
        <div>
            <div className="hero-content text-neutral-content text-center">
                <div className="w-full md:w-4/5">
                    <h1 className="mb-2 md:mb-5 text-xl md:text-5xl font-bold pt-4 md:pt-8">{heading1} <br /> {heading2}</h1>
                    <p className="mb-3 md:mb-5 w-5/6 md:w-3/4 mx-auto text-sm md:text-base">
                    {description}
                    </p>
                    <button className="btn btn-basic">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SliderText;