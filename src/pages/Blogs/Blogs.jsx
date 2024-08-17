import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";


const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Prime Pricks Ltd | Blogs</title>
            </Helmet>
            <Title></Title>
            <div className="text-center mx-10 md:mx-auto lg:mx-auto">
            <h2 data-aos="fade-left" data-aos-duration="2000" className="text-4xl font-bold my-7 md:my-7 lg:my-10 text-sky-500">Queries</h2>
            <h2 data-aos="fade-left" data-aos-duration="3000"className=" sm:text-base lg:text-lg my-5 lg:my-10 w-full lg:w-4/5 mx-auto text-gray-400">Unlock the answers to your burning questions about job hunting, resume writing, interview tips, and more! Our queries section is your one-stop destination for expert advice and insights from seasoned professionals. Whether you're a recent graduate or a seasoned professional, we're here to provide guidance and support every step of the way. Explore, learn, and excel in your career journey with us!</h2>
            {/* IMAGE-------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 w-4/5 mx-auto">
                <div data-aos="fade-up" data-aos-duration="3000" className='col-span-1'>
                    <img className='h-full w-full' src='https://i.postimg.cc/bJhm85hj/medicine1.jpg' alt="" />
                </div>
                <div className='col-span-2'>
                            {/* QUESTION N0-----------1 */}
                        <div data-aos="fade-up" data-aos-duration="3000">
                                <div className="text-justify">
                                    <h1 className='text-xl font-bold text-left theme-color'> What is the difference between generic and brand-name medicines?</h1>
                                    <div className='flex-col md:flex-row gap-8'>
                                        <div data-aos="fade-up" data-aos-duration="3000">
                                            <p className='text-left text-gray-400 w-full'><span className='font-bold text-sky-400'><br /></span>Generic medicines are chemically identical to brand-name medicines in terms of active ingredients, dosage, and effectiveness. The key difference lies in their appearance, packaging, and price. Generic medicines are usually less expensive because they do not carry the cost of research, development, and marketing that brand-name drugs do. Both generic and brand-name medicines are regulated by the FDA to ensure they meet the same safety and efficacy standards. When prescribed by a healthcare provider, generic medicines offer a cost-effective alternative without compromising on quality or performance.</p>
                                            <p className='text-left text-gray-400 w-full'><span className='font-bold text-sky-400'>How should I store my medicines at home? <br /></span>
                                            Proper storage of medicines is crucial to maintaining their effectiveness. Most medicines should be stored in a cool, dry place, away from direct sunlight and moisture, such as in a medicine cabinet or drawer. Avoid keeping them in bathrooms, where humidity levels are high. Certain medicines, like insulin or some liquid antibiotics, need to be refrigerated. Always read the storage instructions on the medicine label. Keep medicines out of reach of children and pets. It's also important to store them in their original containers with the labels intact for easy identification.</p>
                                        </div>
                                        <div data-aos="fade-up" data-aos-duration="3000">
                                            <p className='text-left text-gray-400 w-full'><span className='font-bold text-sky-400'>What should I do if I miss a dose of my medication? <br /></span>
                                            If you miss a dose of your medication, the first step is to check the medication’s instructions or consult your pharmacist or healthcare provider. Generally, if it's close to the time for your next dose, skip the missed dose and take the next one as scheduled. Never double up on doses to make up for a missed one, as this can lead to overdose or unwanted side effects. For time-sensitive medications like antibiotics or heart medications, missing a dose can have more serious consequences, so it's important to seek guidance from a healthcare professional if you're unsure.</p>
                                            <p className='text-left text-gray-400 w-full'><span className='font-bold text-sky-400'>Can I take over-the-counter (OTC) medicine with my prescription drugs? <br /></span>
                                            Before taking any over-the-counter (OTC) medicine with prescription drugs, it's essential to consult with your healthcare provider or pharmacist. Some OTC medicines can interact with prescription medications, potentially causing adverse effects or reducing the effectiveness of your treatment. For example, certain pain relievers, antihistamines, or cold medicines can interact with blood pressure medications or antidepressants. Always inform your healthcare provider about all the medications and supplements you're taking to ensure that there are no harmful interactions.</p>
                                            
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <p className='text-justify text-gray-400 w-full'><span className='font-bold text-sky-400'>Can I take expired medicine? <br /></span>
                                        Taking expired medicine is generally not recommended. While some medicines may retain their potency after the expiration date, others can lose their effectiveness or even become harmful. The expiration date indicates the period during which the manufacturer guarantees the full potency and safety of the drug. After this date, the chemical composition of the medicine may change, leading to reduced efficacy or unexpected side effects. If you have expired medicine, it's best to dispose of it properly and consult your pharmacist or healthcare provider for a replacement.</p>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
            <div className='grid grid-cols-1 w-5/6 mx-auto'>
                    {/*     QUESTION NO----------2 */}
                    <div data-aos="fade-up" data-aos-duration="3000">
                                <h1 className='text-xl font-bold text-left w-full theme-color mt-6'> How do I know if I am allergic to a medicine?</h1>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-left text-gray-400 w-full mb-8'>Medicine allergies can present in various ways, ranging from mild symptoms like rashes, itching, and swelling to more severe reactions such as difficulty breathing, dizziness, or anaphylaxis. If you suspect you are allergic to a medicine, stop taking it immediately and seek medical advice. A healthcare provider can help diagnose the allergy through a review of your symptoms and possibly recommend an allergy test. It's essential to inform all your healthcare providers about any known allergies to ensure that they avoid prescribing medicines that may trigger an allergic reaction in the future. <br />
                            </p>
                        </div>
                            {/*     QUESTION NO----------3 */}
                        {/* <div data-aos="fade-up" data-aos-duration="3000">
                                <h1 className='text-xl font-bold text-left w-full theme-color mt-6'> Explanation of Code </h1>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-justify text-gray-400 w-full'>In this Site, I have implemented Dynamic Title Feature for Every Single Route using the UseEffect Hook of React. The Wesite Icon has been changed by replacing the default href of icon Link in the index.html file. For creating live link of image, postimages.org has been used. For Animation, Lottie React, AOS package, Framer-motion etc have been used in various pages. 
                            In the "How we Started" Section of Home Page, Framer-Motion has been used to create motion effect.
                            In this Particular Route, I have used Tailwind and Daisy UI for the Design Portion. I have utilized the grid Layout Property for organizing the answers properly. <br />
                            For Routing, I have used React Router Dom. I have created a Private Route Component for Controlling the access in certain routes. 
                            For Deployment of client side, Firebase has been used as the deployment platform. On the other hand, Vercel has been used for deployment of Client Side. 
                            For Storing Various Data, MongoDB has been used as a server side Database. All the data is being stored in MongoDB and being rendered from specific data collection created in MongoDB when needed. In the BackEnd/Server Side, create, read, update, delete -all of these operations have been executed. The AuthProvider Component has been created to implement the Login and Register Process with Firebase Authentication. 
                            The Environment Variables have been used to hide the Firebase config data and MongoDB Credentials.
                              </p>
                        </div> */}
                </div>
        </div>
        </div>
    );
};

export default Blogs;