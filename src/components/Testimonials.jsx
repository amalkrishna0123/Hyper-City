import React from 'react'
import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.jpg"
import testimonial3 from "../assets/testimonial3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
      };
    
      return (
        <div className='max-w-[1200px] mx-auto'>
          <Slider {...settings} className=''>
            <div className=' flex'>
              
                <div className='testimonialCard mx-auto'>
                    <img src={testimonial1} className='w-full h-full object-cover rounded-full' alt="" />
                </div>
                
                <div> 
                    <div className='text-center mb-2 italic px-8 lg:px-32 llg:px-56'>
                    "Shopping at Hypercity Hypermarket is always great. They have lots of top-quality products at affordable prices, and the staff is very helpful. It's my go-to spot for all my shopping needs."
                    </div>
                    <div className='text-center font-bold'>Girish Choudary</div>
                </div>

            </div>
    
            <div className=''>
              <div className='mb-2'>
                <div className='testimonialCard mx-auto'>
                  <img src={testimonial2} className='w-full h-full object-cover rounded-full' alt="" />
                </div>
              </div>
              <div>
                <div className='text-center mb-2 italic px-8 lg:px-32 llg:px-56'>
                  "I have been a loyal customer of Hypercity Hypermarket for years. I always feel that their quality and prices are as good as can be. Their products are great, and their service is excellent too. Household needs will, without a doubt, take one to Hypercity!"
                </div>
                <div className='text-center font-bold'>Saniya Jithesh</div>
              </div>
            </div>
    
            <div className=''>
              <div className='mb-2'>
                <div className='testimonialCard mx-auto'>
                  <img src={testimonial3} className='w-full h-full object-cover rounded-full' alt="" />
                </div>
              </div>
              <div>
                <div className='text-center mb-2 italic px-8 lg:px-32 llg:px-56'>
                  "Hypercity Hypermarket never disappoints! With a great product variety, fresh groceries, and frequent discounts, it's a reliable and convenient place to shop. They've earned my loyalty!"
                </div>
                <div className='text-center font-bold'>Akash K V</div>
              </div>
            </div>
          </Slider>
        </div>
      );
    };
    

export default Testimonials
