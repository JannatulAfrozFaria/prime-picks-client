import { useEffect, useState } from "react";


const useMedicine = () => {
    const [medicines,setMedicines] = useState([]);
    const [loading,setLoading] =useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/medicines')
        .then(res=>res.json())
        .then(data=>{
            setMedicines(data);
            setLoading(false);
        })
    })
    return [medicines,loading]
};

export default useMedicine;