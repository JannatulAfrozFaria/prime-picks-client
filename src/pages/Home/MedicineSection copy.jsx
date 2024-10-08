import { useEffect, useState } from "react";
import Title from "../../Components/Title";
import EachMedicine from "./EachMedicine";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import useMedicine from "../../Hooks/useMedicine";

const MedicineSection = () => {
    // const [medicines,setMedicines] =useState([]);
    // useEffect( ()=>{
    //     fetch('medicine.json')
    //     .then(res=>res.json())
    //     .then(data=>setMedicines(data))
    // } ,[medicines])
   
    const [medicines,loading,page,setPage,setBrandFilter,setCategoryFilter] = useMedicine();

     // STATE FOR-----SEARCH-----
     const [searchTerm, setSearchTerm] = useState('');
     const [searchResults, setSearchResults] = useState(medicines);
      //STATE---FOR------PAGINATION
    const [pageCount, setPageCount] = useState(0);
    // to load all the data initially when page is loaded
    useEffect(()=>{
        if(!loading){
            setSearchResults(medicines);
            console.log(medicines);
            setPageCount(medicines.pagination.pageCount)
        }
    },[loading])

    //FUNCTION----FOR-----PAGINATION
    const handlePrevious = () =>{
        setPage((p)=>{
            if(p === 1) return p;
            return p -1 ;
        })
        }
    const handleNext = () =>{
            setPage((p)=>{
                if(p === pageCount) return p;
                return p + 1;
            })
        }
 
     // FUNCTION FOR-----SEARCH-----
     const handleSearch = () =>{
        const results = medicines.filter(medicine=>
            medicine.medicineName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };
    const handleChange = event =>{
        setSearchTerm(event.target.value);
    }
     //FUNCTION FOR ------FILTER------
     const handleFilterByBrand= (brand) =>{
        // const filteredMedicines = searchResults.filter(item=> {
        //     if(brand && item.brandName === brand){
        //         return item;
        //     }
        //     else if(!brand){
        //         return item;
        //     }
        // })
        // setSearchResults(filteredMedicines);
        // console.log(filteredMedicines);
        console.log(brand);
        setBrandFilter(brand);
        
    }
    const handleFilterByCategory= (category) =>{
        // const filteredMedicines = searchResults.filter(item=> {
           
        //     if(category && item.categoryName === category){
        //         console.log(item);
        //         return item;
        //     }
        //     else if(!category){
        //         return item;
        //     }
        //     // return item;
        // })
        // setSearchResults(filteredMedicines);
        console.log(category);
        setCategoryFilter(category);
    }
    const handleFilterByPriceRange= (min,max) =>{
        // const filteredMedicines = searchResults.filter(item=> {
        //     if(item.price >= min && item.price <= max){
        //         console.log(item);
        //         return item;
        //     }
        //     // else if(!category){
        //     //     return item;
        //     // }
        // })
        // setSearchResults(filteredMedicines);

        // setPriceMin(min);
        // setPriceMax(max);
    }
    //FUNCTION FOR----SORT
    const sortByLowToHigh = () =>{
        const sortByLowToHighPrice = [...searchResults].sort((a,b)=>a.price -b.price)
        setSearchResults(sortByLowToHighPrice);
    }
    const sortByHIghToLow = () =>{
        const sortByHighToLowPrice = [...searchResults].sort((a,b)=>b.price -a.price)
        setSearchResults(sortByHighToLowPrice);
    }
    const sortByDateAdded = () =>{
        const sortByNewestDate = [...searchResults].sort((a,b)=>
            new Date(b.dateAdded) - new Date(a.dateAdded)
        );
        setSearchResults(sortByNewestDate);
    }
    console.log(searchResults);
    if(!searchResults.items){

        return <div>Loading</div>
    }
    return (
        <div className="mb-8">
            <Title heading={'Health Essentials'} subHeading={'Here comes our wide range of collection'}></Title>
            {/* Search,Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 mb-8 w-full md:w-3/4 mx-auto items-center justify-center">
                {/* SEARCH----OPTION */}
                <div className="join w-1/3 md:w-full mx-auto">
                    <div>
                        <input type="text" value={searchTerm}
                        onChange={handleChange} className="input input-bordered join-item w-24 md:w-44" placeholder="Search"/>
                    </div>
                    <div className="indicator">
                        <button onClick={handleSearch} className="btn join-item btn-filter w-full md:w-36">Search</button>
                    </div>
                </div>
                {/* division---1 */}
                <div className="grid grid-cols-2 items-center justify-center w-2/3 md:w-full mx-auto">
                     {/* FILTER---BY---BRAND---OPTION */}
                    <div>
                        <details className="dropdown">
                            <summary className="btn btn-filter w-40 md:w-full">Filter By Brand <IoIosArrowDown /></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><Link onClick={()=>handleFilterByBrand('AntibioticPlus')}>AntibioticPlus</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('BioPharma')}>BioPharma</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('GlucoCare')}>GlucoCare</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('HealthCare')}>HealthCare</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('HerbHealth')}>HerbHealth</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('NutriBoost')}>NutriBoost</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('Square')}>Square</Link></li>
                            </ul>
                        </details>
                    </div>   
                    {/* FILTER---BY---CATEGORY---OPTION */}
                    <div>
                        <details className="dropdown">
                            <summary className="btn btn-filter w-44 md:w-42">FilterByCategory<IoIosArrowDown /></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><Link onClick={()=>handleFilterByCategory('Allergy Relief')}>Allergy Relief</Link></li>
                                <li><Link onClick={()=>handleFilterByCategory('Antibiotics')}>Antibiotics</Link></li>
                                <li><Link onClick={()=>handleFilterByCategory('Diabetes Care')}>Diabetes Care</Link></li>
                                <li><Link onClick={()=>handleFilterByCategory('Digestive Health')}>Digestive Health</Link></li>
                                <li><Link onClick={()=>handleFilterByCategory('Heart Health')}>Heart Health</Link></li>
                                <li><Link onClick={()=>handleFilterByCategory('Herbal Remedies')}>Herbal Remedies</Link></li>
                                <li><Link onClick={()=>handleFilterByCategory('Pain Reliever')}>Pain Reliever</Link></li>
                                <li><Link onClick={()=>handleFilterByCategory('Supplements')}>Supplements</Link></li>
                            </ul>
                        </details>
                    </div>  
                </div> 
                {/* division----2 */}
                <div className="grid grid-cols-2 items-center justify-center w-2/3 md:w-full mx-auto">
                    {/* FILTER---BY---PRICE---RANGE---OPTION */}
                    {/* <div>
                        <details className="dropdown">
                            <summary className="btn btn-filter w-40 md:w-full">Filter By Price <IoIosArrowDown /></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><Link onClick={()=>handleFilterByPriceRange(0,5)}><span className="poppins text-yellow-500">0$ to 5$</span></Link></li>
                                <li><Link onClick={()=>handleFilterByPriceRange(5,10)}><span className="poppins text-yellow-500">5$ to 10$</span></Link></li>
                                <li><Link onClick={()=>handleFilterByPriceRange(10,15)}><span className="poppins text-yellow-500">10$ to 15$</span></Link></li>
                                <li><Link onClick={()=>handleFilterByPriceRange(15,20)}><span className="poppins text-yellow-500">15$ to 20$</span></Link></li>
                                <li><Link onClick={()=>handleFilterByPriceRange(20,25)}><span className="poppins text-yellow-500">20$ to 25$</span></Link></li>
                            </ul>
                        </details>
                    </div>    */}
                    {/* SORT---OPTION */}
                    <div>
                        <details className="dropdown">
                            <summary className="btn btn-filter w-44 md:w-40">Sort<IoIosArrowDown /></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><Link onClick={sortByLowToHigh}><span className="poppins text-yellow-500">Low to High Price</span></Link></li>
                                <li><Link onClick={sortByHIghToLow}><span className="poppins text-yellow-500">High to Low Price</span></Link></li>
                                <li><Link onClick={sortByDateAdded}><span className="poppins text-yellow-500">Addition Date</span></Link></li>
                            </ul>
                        </details>
                    </div> 
                </div>  
            </div>
            {/* Map Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-5/6 md:w-full mx-auto">
                {searchResults.items.map(medicine=> <EachMedicine key={medicine._id} medicine={medicine} ></EachMedicine> )}
            </div>
            <div className="w-5/6 mx-auto text-center mt-6 flex justify-center gap-1">
                <p className="mb-2">Page : <span className="text-yellow-500 poppins">{page} </span> , Page Count : <span className="text-yellow-500 poppins">{pageCount}</span></p>
                <button disabled={page===1} onClick={handlePrevious} className="btn btn-filter w-full md:w-24">Previous</button>
                <button disabled={page===pageCount} onClick={handleNext} className="btn btn-filter w-full md:w-28">Next</button>
            </div>
            <div className="w-5/6 mx-auto text-center mt-6 flex justify-center gap-1">
                 <button className="btn btn-filter w-16 md:w-20">Previous</button>
                 <button className="btn btn-round">1</button>
                 <button className="btn btn-round">2</button>
                 <button className="btn btn-round">3</button>
                 <button className="btn btn-round">4</button>
                <button className="btn btn-filter w-16 md:w-20">Next</button>
            </div>
        </div>
    );
};

export default MedicineSection;