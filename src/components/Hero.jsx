import React from 'react';
   
    

function Hero() {
  return (
    <section className=" text-white px-6 py-20 md:px-12 max-w-screen-xl mx-auto container ">
      <div className="max-w-7xl mx-auto text-center">
       
        <div className="text-4xl  md:text-6xl font-extrabold leading-tight -tracking-tighter space-y-3 uppercase">
          <div>
            I AM A 
            <div className="inline-block bg-white h-12 w-24 rounded-full overflow-hidden">
              <img
                src='./public/assets/top image.jpg'
                alt=""
                className=" mx-auto object-fill h-20 w-24 md:w-16 md:h-16"
              />
            </div>
            FREELANCE
          </div>
          <div>
            DESIGNER
            <div className=" bg-white  h-11 w-24 rounded-full overflow-hidden inline-block mx-2 ">
              <img
                src="./public/assets/bottomimage.png"
                alt=""
                className="inline-bldiv md:w-16 md:h-16 mx-auto my-auto"
              />
            </div>
            FROM
          </div>
          <div>SAN FRANCISCO</div>
        </div>

       
        <div className="flex flex-col md:flex-row sm:flex-col sm:items-center md:items-end justify-between gap-20 mt-25 ">
        
          <div className="flex justify-center md:justify-start gap-30 flex-wrap">
            <img src="./public/assets/dora.png" alt="dora" className="h-7" />
            <img src="./public/assets/wavefun.png" alt="wave" className="h-7" />
            <img src="./public/assets/Frame.png" alt="silola" className="h-7" />
          </div>

        
          <p className="text-sm text-gray-400 max-w-md text-left">
            Welcome to my portfolio. Here, artistry meets functionality.  
            Dive into a curated showcase of distinctive branding and web designs,  
            each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
