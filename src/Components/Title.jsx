
const Title = ({heading, subHeading}) => {
    return (
        <div className="text-center mb-4">
            <h5 className="base text-3xl edu">{heading} </h5>
            <p className="border-b-1 w-1/3 mt-1 mb-3 mx-auto border border-cyan-500"></p>
            <p className="poppins text-gray-500">{subHeading} </p>
        </div>
    );
};

export default Title;