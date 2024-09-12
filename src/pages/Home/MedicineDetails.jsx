// import React from 'react';

import { useLoaderData } from "react-router-dom";

const MedicineDetails = () => {
    const singleMedicine = useLoaderData();
    const {photo, job, deadline, description,range,number} = singleMedicine;
    return (
        <div>
            
        </div>
    );
};

export default MedicineDetails;