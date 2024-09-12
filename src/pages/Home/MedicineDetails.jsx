// import React from 'react';

import { useLoaderData } from "react-router-dom";

const MedicineDetails = () => {
    const singleMedicine = useLoaderData();
    const {id,image,medicineName,brandName,categoryName,price,dateAdded} = singleMedicine;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <p>Name: {medicineName} </p>
            <p>Category Name: {categoryName} </p>
            <p>Brand Name: {brandName} </p>
            <p>Price: {price} </p>
            <p>Date of Addition: {dateAdded} </p>
        </div>
    );
};

export default MedicineDetails;