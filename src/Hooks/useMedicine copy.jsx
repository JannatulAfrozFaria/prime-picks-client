import { useEffect, useState } from "react";


const useMedicine = () => {
    const [page, setPage] = useState(1);
    const [brandFilter,setBrandFilter] = useState('');
    const [categoryFilter,setCategoryFilter] = useState('');
    const [priceMin,setPriceMin] = useState(null);
    const [priceMax,setPriceMax] = useState(null);
    // const [pageCount, setPageCount] = useState(0);
    const [medicines,setMedicines] = useState({});
    const [loading,setLoading] =useState(true);
    console.log(page);
    useEffect(()=>{
        const fetchURL = `http://localhost:5000/medicines?page=${page}&brand=${brandFilter}&category=${categoryFilter}`
        setLoading(true);
        fetch(fetchURL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMedicines(data);
            setLoading(false);
        })
    },[page,brandFilter,categoryFilter])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/medicines')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setMedicines(data);
    //         setLoading(false);
    //     })
    // })

    return [medicines,loading,page,setPage,brandFilter,setBrandFilter,categoryFilter,setCategoryFilter,setPriceMin,setPriceMax]
};

export default useMedicine;