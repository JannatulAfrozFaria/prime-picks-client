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

    const [medicines,loading] = useMedicine();
     // STATE FOR-----SEARCH-----
     const [searchTerm, setSearchTerm] = useState('');
     const [searchResults, setSearchResults] = useState(medicines);
    // to load all the data initially when page is loaded
    useEffect(()=>{
        if(!loading){
            setSearchResults(medicines);
        }
    },[loading])
 
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
        const filteredMedicines = searchResults.filter(item=> {
            if(brand && item.brandName === brand){
                return item;
            }
            else if(!brand){
                return item;
            }
        })
        setSearchResults(filteredMedicines);
        console.log(filteredMedicines);
    }
    const handleFilterByCategory= (category) =>{
        const filteredMedicines = searchResults.filter(item=> {
           
            if(category && item.categoryName === category){
                console.log(item);
                return item;
            }
            else if(!category){
                return item;
            }
            // return item;
        })
        setSearchResults(filteredMedicines);
    }
    return (
        <div className="mb-8">
            <Title heading={'Health Essentials'} subHeading={'Here comes our wide range of collection'}></Title>
            {/* Search,Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-1 my-4">
                {/* SEARCH----OPTION */}
                <div className="join">
                    <div className=''>
                        <div>
                            <input type="text" value={searchTerm}
                            onChange={handleChange} className="input input-bordered join-item" placeholder="Search"/>
                        </div>
                    </div>
                    <div className="indicator">
                        <button onClick={handleSearch} className="btn join-item btn-basic">Search</button>
                    </div>
                </div>
                {/* FILTER---BY---BRAND---OPTION */}
                <div>
                        <details className="dropdown">
                            <summary className="btn btn-filter w-28 md:w-full">Filter By Brand <IoIosArrowDown /></summary>
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
                            <summary className="btn btn-filter w-28 md:w-full">Filter By Category <IoIosArrowDown /></summary>
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
                {/* FILTER---BY---PRICE---RANGE---OPTION */}
                <div>
                        <details className="dropdown">
                            <summary className="btn btn-filter w-28 md:w-full">Filter By Price <IoIosArrowDown /></summary>
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
            {/* Map Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {searchResults.map(medicine=> <EachMedicine key={medicine.id} medicine={medicine} ></EachMedicine> )}
            </div>
        </div>
    );
};

export default MedicineSection;