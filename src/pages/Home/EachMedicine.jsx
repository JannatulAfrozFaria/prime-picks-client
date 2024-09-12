import { Link } from "react-router-dom";


const EachMedicine = ({medicine}) => {
    const {_id,image,medicineName,brandName,categoryName,price,dateAdded} = medicine;
    return (
        <div className="bg-base-100 w-full shadow-lg shadow-cyan-700">
            <div className="grid grid-cols-5">
                <div className="col-span-2"><img className="h-[180px] w-full" src={image} alt="medicine" /></div>
                <div className="col-span-3 py-2 px-4">
                    <h2 className="card-title">{medicineName}</h2>
                    <div className="text-sm">
                        <p> <span className="poppins text-cyan-600">Brand : </span> {brandName}</p>
                        <p> <span className="poppins text-cyan-600">Category : </span> {categoryName}</p>
                        <p> <span className="poppins text-cyan-600">Price: </span>  <span className="poppins text-yellow-600 ">$ </span>{price}</p>
                        <p> <span className="poppins text-cyan-600">Date of Addition : </span> {dateAdded}</p>
                        {/* <button className="btn btn-basic btn-sm my-2">View Details</button> */}
                        <div>
                            <Link to={`/medicines/${_id}`} ><button className='btn btn-basic btn-sm my-2' >View Details 2</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachMedicine;