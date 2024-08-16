import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title"
const AddMedicine = () => {
    return (
       <div className="pt-24">
         <Helmet>
              <title>Prime Picks Ltd | Add A Medicine</title>
          </Helmet>
         <Title heading={'Add A Medicine'} subHeading={'Here You can Add a medicine through providing appropriate information'}></Title>
       </div>
    );
};

export default AddMedicine;