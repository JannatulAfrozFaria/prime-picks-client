import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";


const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Prime Pricks Ltd | Blogs</title>
            </Helmet>
            <Title></Title>
            <h1>This is Blogs Section</h1>
        </div>
    );
};

export default Blogs;