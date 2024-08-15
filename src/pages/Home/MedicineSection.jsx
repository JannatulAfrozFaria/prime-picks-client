import { useEffect, useState } from "react";
import Title from "../../Components/Title";
import EachMedicine from "./EachMedicine";


const MedicineSection = () => {
    const [medicines,setMedicines] = useState([]);
    useEffect( ()=>{
        fetch('medicine.json')
        .then(res=>res.json())
        .then(data=>setMedicines(data))
    } ,[])
    return (
        <div>
            <Title heading={'Health Essentials'} subHeading={'Here comes our wide range of collection'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {medicines.map(medicine=> <EachMedicine key={medicine.id} medicine={medicine} ></EachMedicine> )}
            </div>
        </div>
    );
};

export default MedicineSection;