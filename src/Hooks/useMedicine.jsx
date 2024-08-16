import { useEffect, useState } from "react";


const useMedicine = () => {
    const [page, setPage] = useState(1);
    // const [pageCount, setPageCount] = useState(0);
    const [medicines,setMedicines] = useState([]);
    const [loading,setLoading] =useState(true);
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/medicines?page=${page}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMedicines(data);
    //         setLoading(false);
    //     })
    // })
    useEffect(()=>{
        fetch('http://localhost:5000/medicines')
        .then(res=>res.json())
        .then(data=>{
            setMedicines(data);
            setLoading(false);
        })
    })
    return [medicines,loading,page,setPage]
};

export default useMedicine;