import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import CategorySingle from './CategorySingle';


const Category = () => {
    const [categorytoys, setCategorytoys] = useState([]);
    const [activeTab, setActiveTab] = useState("Avengers");

    useEffect(() => {

        fetch(`https://hero-haven-server-two.vercel.app/categorytoys/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                // console.log(data)
                setCategorytoys(result);
            })
        const result = categorytoys?.filter(category => category.subCategory === activeTab);
        console.log(result);


    }, [activeTab]);
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div>

            <div className='container mx-auto pt-6 pb-16'>
                <div>
                    <h1 className="text-[#283149] text-2xl custom-font md:text-5xl md:mb-6 mb-4 text-center">Our Categories</h1>
                    <div className="container flex mx-auto">
                        <div className="text-center w-100 m-auto">
                            <div className="">
                            <div
                                    onClick={() => handleTabClick("Avengers")}
                                    className={`uppercase tab  tab2 Avengers ${activeTab == "Avengers" ? " bg-[#F7B801]" : ""
                                        }`}
                                >
                                    Avengers
                                </div>
                                <div
                                    onClick={() => handleTabClick("Batman")}
                                    className={`tab  uppercase  Batman ${activeTab == "Batman" ? " bg-[#F7B801] " : ""
                                        }`}
                                >
                                    Batman
                                </div>
                                <div
                                    onClick={() => handleTabClick("Spiderman")}
                                    className={`tab uppercase   tab2 Spiderman ${activeTab == "Spiderman" ? " bg-[#F7B801] " : ""
                                        }`}
                                >
                                    Spiderman
                                </div>
                                <div
                                    onClick={() => handleTabClick("IRONMAN")}
                                    className={`tab uppercase  tab2 IRONMAN ${activeTab == "IRONMAN" ? " bg-[#F7B801]" : ""
                                        }`}
                                >
                                    IRONMAN
                                </div>
                                <div
                                    onClick={() => handleTabClick("Naruto")}
                                    className={`tab uppercase  tab2 Naruto ${activeTab == "Naruto" ? " bg-[#F7B801] " : ""
                                        }`}
                                >
                                    Naruto
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto grid md:grid-cols-4 gap-6 mt-5">
                        {categorytoys?.map((category) => <CategorySingle key={category._id}
                            category={category}
                        >


                        </CategorySingle>

                        )}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Category;