import React from 'react';

const PopularThemes = () => {
    return (
        <div className='md:py-10 '>
          <div className="grid grid-cols-12 container mx-auto gap-6 bg-white " >
            <div className="md:col-span-3 col-span-12 ">
                <div className='bg-[#283149] md:h-full h-36 flex flex-col justify-center'>
                    <h1  className='text-[#F7B801] mb-3  md:text-5xl tracking-wide text-3xl custom-font text-center font-bold'>ALL YOUR <br></br> FAVORITE BRANDS</h1>
                    <h1 className='text-white text-sm text-center tracking-widest font-semibold uppercase '>See All Brands</h1>
                </div>
            </div>
            <div  className="md:col-span-9 col-span-12">
            <div className='grid md:grid-cols-6 grid-cols-4 md:gap-12 gap-6 md:p-10 px-6'>
                <div>
                    <img  src="https://i.ibb.co/hLyBwDS/brands-harrypotter.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/w6RT0v2/brands-startrek.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/v1f1PGj/brands-hottoys.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/b71Mwy9/brands-starwars.png" alt="" />
                </div>
                <div>
                    <img src=" https://i.ibb.co/vdGQ04F/10007.png" alt="" />
                </div>
                <div>
                    <img src=" https://i.ibb.co/F5NYtv3/10008.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/BsSBhfm/10001.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/PGphvKr/10002.jpg" alt="" />
                </div>
                <div>
                    <img src=" https://i.ibb.co/WzfTwrs/10003.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/qyT6VhJ/10004.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/PDSN09P/10005.png " alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/9W6pTHB/10006.jpg " alt="" />
                </div>

            </div>
            </div>
          </div>


            {/* https://i.ibb.co/hLyBwDS/brands-harrypotter.png
            https://i.ibb.co/w6RT0v2/brands-startrek.png
            https://i.ibb.co/v1f1PGj/brands-hottoys.png
            https://i.ibb.co/b71Mwy9/brands-starwars.png
            https://i.ibb.co/9W6pTHB/10006.jpg
            https://i.ibb.co/vdGQ04F/10007.png
            https://i.ibb.co/F5NYtv3/10008.jpg
            https://i.ibb.co/BsSBhfm/10001.jpg
            https://i.ibb.co/PGphvKr/10002.jpg
            https://i.ibb.co/WzfTwrs/10003.jpg
            https://i.ibb.co/qyT6VhJ/10004.jpg
            https://i.ibb.co/PDSN09P/10005.png */}

        </div>
    );
};

export default PopularThemes;