import { useEffect, useState } from "react";
import Title from "../../Components/Title";
import EachMedicine from "./EachMedicine";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const MedicineSection = () => {
    const [medicines,setMedicines] = useState([]);
    useEffect( ()=>{
        fetch('medicine.json')
        .then(res=>res.json())
        .then(data=>setMedicines(data))
    } ,[medicines])
     // STATE FOR-----SEARCH-----
     const [searchTerm, setSearchTerm] = useState('');
     const [searchResults, setSearchResults] = useState(medicines);
 
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
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
                {/* FILTER---OPTION */}
                <div>
                        <details className="dropdown">
                            <summary className="btn bg-purple-200 w-28 md:w-36">Filter <IoIosArrowDown /></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><Link onClick={()=>handleFilterByBrand('HerbHealth')}>HerbHealth</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('NutriBoost')}>NutriBoost</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('AntibioticPlus')}>AntibioticPlus</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('HeartGuard')}>HeartGuard</Link></li>
                                <li><Link onClick={()=>handleFilterByBrand('GlucoCare')}>GlucoCare</Link></li>
                                <li><Link onClick={()=>handleFilterByCategory('Returnable')}>Returnable</Link></li>
                                <li><Link onClick={()=>handleFilterByCategory('Non-Returnable')}>Non-Returnable</Link></li>
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