// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Title from "../../Components/Title";

const MedicineDetails = () => {
    const singleMedicine = useLoaderData();
    const {_id,image,medicineName,brandName,categoryName,price,dateAdded} = singleMedicine;
    console.log(singleMedicine);
    return (
        <div className="py-24 w-5/6 mx-auto">
            <Title heading={'Details of'} subHeading={`${medicineName}`} ></Title>
            <div>
                <img src={image} alt="" />
            </div>
            <p>Name: {medicineName} </p>
            <p>Category Name: {categoryName} </p>
            <p>Brand Name: {brandName} </p>
            <p>Price: {price} </p>
            <p>Date of Addition: {dateAdded} </p>
            <p>id: {_id} </p>
        </div>
    );
};

export default MedicineDetails;