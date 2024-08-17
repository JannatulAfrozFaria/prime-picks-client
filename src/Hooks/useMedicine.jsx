import { useEffect, useState } from "react";


const useMedicine = () => {
    const [page, setPage] = useState(1);
    const [searchedMedi,setSearchedMedi] = useState('');
    const [brandFilter,setBrandFilter] = useState('');
    const [categoryFilter,setCategoryFilter] = useState('');
    const [priceMin,setPriceMin] = useState(null);
    const [priceMax,setPriceMax] = useState(null);
    const [order,setOrder] =useState('');
    // const [pageCount, setPageCount] = useState(0);
    const [medicines,setMedicines] = useState({});
    const [loading,setLoading] =useState(true);
    console.log(page);
    useEffect(()=>{
        setLoading(true);
        // console.log(`https://prime-picks-server.vercel.app/medicines?page=${page}&brand=${brandFilter}&category=${categoryFilter}`);
        fetch(`https://prime-picks-server.vercel.app/medicines?page=${page}&brand=${brandFilter}&category=${categoryFilter}${priceMin?`&priceMin=${priceMin}`:''}${priceMax?`&priceMax=${priceMax}`:''}&order=${order}&search=${searchedMedi}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMedicines(data);
            setLoading(false);
        })
    },[page,brandFilter,categoryFilter,priceMin,priceMax,order,searchedMedi])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/medicines')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setMedicines(data);
    //         setLoading(false);
    //     })
    // })

    return {medicines,loading,page,setPage,setBrandFilter,setCategoryFilter,setPriceMin,setPriceMax,setOrder,setSearchedMedi}
};

export default useMedicine;