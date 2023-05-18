import React from 'react';

const WhyShop = () => {
    return (
        <div className='py-14'>
            <div>
                <div className='grid grid-cols-10 container mx-auto justify-center gap-10  items-center'>
                    <div className='md:col-span-2 col-span-12 '>
                    <div className='flex flex-col items-center text-center gap-8'>
                        <img className='w-24' src="https://i.ibb.co/Lv8XJd1/feature-icon-1.png" alt="" />
                        <h1 className='font-bold text-xl '>EARN REWARDS AND SHOP WITH POINTS</h1>
                    </div>
                    </div>
                    <div className='md:col-span-2 col-span-12 '>
                    <div className='flex flex-col items-center text-center gap-8'>
                        <img className='w-24' src="https://i.ibb.co/KL1nk8Y/feature-icon-2.png" alt="" />
                        <h1 className='font-bold text-xl '>RSVP & WAITLISTS</h1>
                    </div>
                    </div>
                    <div className='md:col-span-2 col-span-12 '>
                    <div className='flex flex-col items-center text-center gap-8'>
                        <img className='w-24' src="https://i.ibb.co/HgH5XyW/feature-icon-3.png" alt="" />
                        <h1 className='font-bold text-xl '>FLEXIBLE PAYMENT OPTIONS</h1>
                    </div>
                    </div>
                    <div className='md:col-span-2 col-span-12 '>
                    <div className='flex flex-col items-center text-center gap-8'>
                        <img className='w-24' src="https://i.ibb.co/PDjN9gC/feature-icon-4.png" alt="" />
                        <h1 className='font-bold text-xl '>CONTESTS & GIVEAWAYS</h1>
                    </div>
                    </div>
                    <div className='md:col-span-2 col-span-12 '>
                    <button className='custom-button font-bold uppercase'>See More Reason</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default WhyShop;