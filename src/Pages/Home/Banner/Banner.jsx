import React from 'react';
import { FaArrowCircleLeft, FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="carousel w-full  mx-auto">
        <div id="slide1" className="carousel-item relative w-full md:h-5/6 h-56">
            <div className="carousel-content md:left-[5%] left-[3%]  md:top-[30%] top-[10%] absolute  text-left">
                <h2 className='md:text-6xl text-xl md:w-7/12 w-2/3 text-white font-[Josefin Sans] font-bold leading-relaxed md:mb-4'>Buy your favorite Heros <span className='text-[#F7B801] italic'>Action Figure</span></h2>
                <p className=' text-white md:text-base text-xs leading-relaxed md:w-7/12 w-3/4  md:pb-6 pb-2'>At Hero Haven, we understand the passion and excitement that comes with collecting and immersing oneself in the world of action figures.</p>
                <div className="button-group">
                    <button className=" mr-4 text-white border border-[#F7B801] rounded md:text-base text-sm  md:px-3 px-2 md:py-2 py-1 hover:text-white duration-300 hover:animate-pulse bg-[#F7B801] focus:outline-none">All Toys</button>
                    <button className=" text-white border border-white rounded md:text-base text-sm  md:px-3 px-2 md:py-2 py-1 focus:outline-none hover:animate-pulse">Categories</button>
                </div>
            </div>
            <img src="https://i.ibb.co/Smqf3wY/1.png" />

            <div className="absolute md:right-10 right-[2%] bottom-5 md:bottom-32 flex">
                <a href="#slide4" className="  text-[#F7B801] mr-3"> <FaArrowLeft /> </a>
                <a href="#slide2" className="   text-[#F7B801] "><FaArrowRight /></a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full md:h-5/6 h-56">
        <div className="carousel-content md:left-[5%] left-[3%]  md:top-[30%] top-[10%] absolute  text-left">
                <h2 className='md:text-6xl text-xl md:w-7/12 w-2/3 text-white font-[Josefin Sans] font-bold leading-relaxed md:mb-4'>Buy your favorite Heros <span className='text-[#F7B801] italic'>Action Figure</span></h2>
                <p className=' text-white md:text-base text-xs leading-relaxed md:w-7/12 w-3/4  md:pb-6 pb-2'>At Hero Haven, we understand the passion and excitement that comes with collecting and immersing oneself in the world of action figures.</p>
                <div className="button-group">
                    <button className=" mr-4 text-white border border-[#F7B801] rounded md:text-base text-sm  md:px-3 px-2 md:py-2 py-1 hover:text-white duration-300 hover:animate-pulse bg-[#F7B801] focus:outline-none">All Toys</button>
                    <button className=" text-white border border-white rounded md:text-base text-sm  md:px-3 px-2 md:py-2 py-1 focus:outline-none hover:animate-pulse">Categories</button>
                </div>
            </div>
            <img src="https://i.ibb.co/6nvHLdD/2.png" />
            <div className="absolute md:right-10 right-[2%] bottom-5 md:bottom-32 flex">
                <a href="#slide1" className=" text-[#F7B801] mr-3"> <FaArrowLeft /> </a>
                <a href="#slide3" className="text-[#F7B801]"><FaArrowRight /></a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full md:h-5/6 h-56">
        <div className="carousel-content md:left-[5%] left-[3%]  md:top-[30%] top-[10%] absolute  text-left">
                <h2 className='md:text-6xl text-xl md:w-7/12 w-2/3 text-white font-[Josefin Sans] font-bold leading-relaxed md:mb-4'>Buy your favorite Heros <span className='text-[#F7B801] italic'>Action Figure</span></h2>
                <p className=' text-white md:text-base text-xs leading-relaxed md:w-7/12 w-3/4  md:pb-6 pb-2'>At Hero Haven, we understand the passion and excitement that comes with collecting and immersing oneself in the world of action figures.</p>
                <div className="button-group">
                    <button className=" mr-4 text-white border border-[#F7B801] rounded md:text-base text-sm  md:px-3 px-2 md:py-2 py-1 hover:text-white duration-300 hover:animate-pulse bg-[#F7B801] focus:outline-none">All Toys</button>
                    <button className=" text-white border border-white rounded md:text-base text-sm  md:px-3 px-2 md:py-2 py-1 focus:outline-none hover:animate-pulse">Categories</button>
                </div>
            </div>
            <img src="https://i.ibb.co/vDXRs2z/3.png" />
            <div className="absolute md:right-10 right-[2%] bottom-5 md:bottom-32 flex">
                <a href="#slide2" className=" text-[#F7B801] mr-3"> <FaArrowLeft /> </a>
                <a href="#slide1" className="text-[#F7B801]"><FaArrowRight /></a>
            </div>
        </div>
    </div>
    );
};

export default Banner;