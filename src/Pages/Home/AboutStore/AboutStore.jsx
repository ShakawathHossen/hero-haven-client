import React from 'react';

const AboutStore = () => {
    return (
        <div>
            <div className='md:my-8 container mx-auto'>
                <div className="container mx-auto lg:flex lg:flex-row items-center">
                    <div className="md:w-1/2">
                        <img src="https://i.ibb.co/f14b29P/10001-removebg-preview-1.png" alt="About Us Image" className="object-cover w-11/12 " />
                    </div>
                    <div className="md:w-1/2 ">
                        <div className="my-8 lg:my-0">
                            <h2 className='text-[#283149] text-2xl custom-font md:text-5xl md:mb-6 mb-4'>About Us</h2>
                            <p className="text-gray-700 mb-4 leading-7">
                            Welcome to <span className='text-[#283149] font-semibold '>Hero Haven</span>, the ultimate destination for action figure enthusiasts! At Hero Haven, we understand the passion and excitement that comes with collecting and immersing oneself in the world of action figures. Our shop is a haven where heroes come to life, and dreams take flight.

                                Step into our store and prepare to be captivated by a vast array of action figures that span across your favorite comic book heroes, iconic movie characters, beloved video game protagonists, and much more. From the mighty superheroes of Marvel and DC Comics to the mystical warriors of fantasy realms, we have curated a collection that will ignite your imagination.
                            </p>
                            <button className="custom-button">All Toys</button>
                        </div>
                    </div>
                </div>

        </div>
        </div>
    );
};

export default AboutStore;