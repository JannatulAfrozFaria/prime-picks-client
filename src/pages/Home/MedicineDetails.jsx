// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Title from "../../Components/Title";

const MedicineDetails = () => {
    const singleMedicine = useLoaderData();
    const { image, medicineName, brandName, categoryName, price, dateAdded } = singleMedicine;
    console.log(singleMedicine);
    return (
        <div className="py-28">
            <Title heading={'Details of'} subHeading={`${medicineName}`} ></Title>
            <div className="hero bg-base-200 border-2 border-cyan-500 rounded-3xl p-4 w-1/3 mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div className=''>
                        <img className=' border rounded-3xl  h-[280px]' src={image} />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h1 className="text-3xl font-bold text-left mb-2"> {medicineName}  </h1>
                        <div className='text-left text-gray-300'>
                                <div className="grid grid-cols-1 gap-3"> 
                                    <p><span className='option-title'>Brand Name :</span> {brandName} </p>
                                    <p><span className='option-title'>Category Name :</span> {categoryName} </p>
                                    <p><span className='option-title'>Price :</span> {price} $ </p>
                                    <p><span className='option-title'>Date of Addition :</span> {dateAdded} </p>
                                    <div className="mt-8">
                                        <Link to={'/'} >
                                            <button className="btn btn-basic">Go to Home</button>
                                        </Link>
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicineDetails;