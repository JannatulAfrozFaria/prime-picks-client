import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";


const Blogs = () => {
    return (
        <div className="pt-24">
            <Helmet>
                <title>Prime Pricks Ltd | Blogs</title>
            </Helmet>
            <div className="w-5/6 mx-auto">
                <Title heading={'Answers to Your Most Pressing Medicine Questions'} subHeading={'Whether you are curious about how to store your medications, the difference between generic and brand-name drugs, or how to safely purchase medicine online, our comprehensive Q&A section has you covered. We have compiled answers to the most common queries to help you make informed decisions about your health and wellness. Browse through our frequently asked questions and find expert advice on everything from safe medicine use to understanding your prescriptions. Our goal is to provide clear, concise, and reliable information to help you navigate your medical needs with confidence.'} ></Title>
            </div>

            <div className="text-center mx-10 md:mx-auto lg:mx-auto ">
                {/* IMAGE-------- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8 w-4/5 mx-auto">
                {/*     LEFT-----COL */}
                    <div data-aos="fade-up" data-aos-duration="3000" className='col-span-1 h-full w-full grid grid-cols-1 gap-6'>
                        <img className='w-full h-full' src='https://i.postimg.cc/HWKMBnh4/m1.png' alt="" />
                        <img className='w-full h-full' src='https://i.postimg.cc/Df9LNMqv/medicine5.jpg' alt="" />
                    </div>
                    {/* MIDDLE----COL */}
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
                    {/* RIGHT--COL--- */}
                    <div data-aos="fade-up" data-aos-duration="3000" className='col-span-1 h-full w-full grid grid-cols-1 gap-6'>
                        <img className='w-full h-full' src='https://i.postimg.cc/bJhm85hj/medicine1.jpg' alt="" />
                        <img className='w-full h-full' src='https://i.postimg.cc/d050KLpR/medicine2.jpg' alt="" />
                        <img className='w-full h-full' src='https://i.postimg.cc/ZK6pzxcr/medicine6.jpg' alt="" />
                        <img className='w-full h-full' src='https://i.postimg.cc/Z0zbL3vm/medicine4.jpg' alt="" />
                        <img className='w-full h-full' src='https://i.postimg.cc/V65kszPx/medicine3.jpg' alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-5/6 mx-auto my-16'>
                   <div className="col-span-2">
                        {/*     QUESTION NO----------2 */}
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <h1 className='text-xl font-bold text-left w-full theme-color'> How do I know if I am allergic to a medicine?</h1>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-left text-gray-400 w-full mb-8'>Medicine allergies can present in various ways, ranging from mild symptoms like rashes, itching, and swelling to more severe reactions such as difficulty breathing, dizziness, or anaphylaxis. If you suspect you are allergic to a medicine, stop taking it immediately and seek medical advice. A healthcare provider can help diagnose the allergy through a review of your symptoms and possibly recommend an allergy test. It's essential to inform all your healthcare providers about any known allergies to ensure that they avoid prescribing medicines that may trigger an allergic reaction in the future. <br />
                            </p>
                        </div>
                        {/*     QUESTION NO----------3 */}
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <h1 className='text-xl font-bold text-left w-full theme-color my-6'>What should I consider before purchasing medicine online?</h1>
                        </div>
                        <div className="mb-8" data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-justify text-gray-400 w-full'><span className='font-bold text-sky-400'>Verify the Website's Legitimacy:<br /></span> </p>
                            <p className='text-justify text-gray-400 w-full'>Ensure that the online pharmacy is licensed and reputable. Look for certification seals, such as those from regulatory authorities like the National Association of Boards of Pharmacy (NABP) or equivalent in your region. Avoid websites that offer prescription medicines without requiring a prescription, as this could indicate an unsafe or illegal operation.
                            </p>
                            <p className='text-justify text-gray-400 w-full'><span className='font-bold text-sky-400'>Consult with a Healthcare Professional:<br /></span> </p>
                            <p className='text-justify text-gray-400 w-full'>Always consult with your healthcare provider before purchasing medicine online, especially if it’s a new or unfamiliar product. They can advise you on whether the medication is appropriate for your condition and how it may interact with any other medicines you’re taking.
                            </p>
                            <p className='text-justify text-gray-400 w-full'><span className='font-bold text-sky-400'>Check the Medicine’s Authenticity:<br /></span> </p>
                            <p className='text-justify text-gray-400 w-full'>Ensure that the medicine you’re buying is from a trusted brand or manufacturer. Counterfeit medicines are a significant risk in online shopping, and they can be ineffective or even harmful. Look for clear labeling, proper packaging, and detailed product information on the website.
                            </p>
                            <p className='text-justify text-gray-400 w-full'><span className='font-bold text-sky-400'>Understand the Return and Refund Policies:<br /></span> </p>
                            <p className='text-justify text-gray-400 w-full'>Before making a purchase, review the website’s return and refund policies in case you receive the wrong product, or there is an issue with your order.
                            </p>
                        </div>
                   </div>
                   <div className="col-span-1 grid grid-cols-1 gap-4">
                        <img className='h-full w-full' src='https://i.postimg.cc/zfJHVgy5/medi1.jpg' alt="" />
                        <img className='h-full w-full' src='https://i.postimg.cc/MKVYB1pj/medi4.jpg' alt="" />
                        <img className='h-full w-full' src='https://i.postimg.cc/RV7ch9g7/medi3.jpg' alt="" />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;