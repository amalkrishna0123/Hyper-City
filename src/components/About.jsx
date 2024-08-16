import React from 'react'
import aboutImg from "../assets/about-img.jpg"
import Footer from './Footer'
import author1 from '../assets/author1.jpg'
import author2 from '../assets/author2.jpg'


const About = () => {
  return (
    <div>
      <section className='pt-32'>
        <div className=''>
          <div className=' px-6 lg:max-w-[1200px] lg:mx-auto mt-2 mb-10 lg:flex lg:flex-row-reverse lg:gap-10'>
            {/* Left */}
            <div className='lg:w-[50%]'>
              <div className='titleText font-bold mb-2 text-[#FF6C00]'>About Us</div>
              <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>
              <div className='paraText mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim error quos? Iste ducimus quae veniam! Quisquam officia consequatur rem culpa saepe vel, architecto quidem iusto quibusdam pariatur possimus nobis.Qui non facere quas alias perspiciatis iusto doloremque. Ea sequi amet repudiandae atque, dicta blanditiis quaerat laborum. Facere officia, quam fuga cupiditate, deleniti praesentium enim sunt iusto vero quos possimus!
              Modi, eum voluptate? Vitae soluta accusantium doloribus vel, eaque dignissimos, minus quia aliquid praesentium a officia eligendi ea saepe placeat repudiandae. Eligendi cum modi corrupti provident facere, mollitia natus harum?
              </div>
              <div className='paraText mb-7'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eligendi facilis qui dolorum! Debitis voluptas distinctio reiciendis saepe totam eligendi quia inventore odit corporis maxime laborum, dolores nisi harum voluptatem?
                Labore dolore et ullam cum, sed temporibus, qui possimus ex modi nesciunt molestiae deserunt maiores inventore corporis dignissimos beatae in! Illum possimus ab magnam quas dignissimos odit deserunt suscipit veniam.
              </div>
            </div>
            {/* Right */}
            <div className=' flex justify-center items-center'>
              <div className='aboutImg w-[300px] h-[300px] lg:h-[500px] lg:w-[500px] rounded-full'>
                <img src={aboutImg} className=' w-full h-full object-cover rounded-full BlobDesign' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='bg-[#c3b6b622]'>
          <div className='lg:max-w-[1200px] lg:mx-auto px-6 py-10'>
            {/* Excecutive List 1 */}
            <div className='grid grid-cols-1 place-items-center mb-10 md:flex md:justify-center md:items-center md:gap-10'>
              {/* Excecutive Photo */}
              <div className=' w-[150px] h-[150px] rounded-full bg-[#8f6666] mb-3'>
                <img src={author1} className='w-full h-full object-cover rounded-full' alt="" />
              </div>
              {/* Excecutive Quote */}
              <div className='md:w-[70%]'>
                  <div className=' paraText text-sm italic text-center md:text-start px-16 md:px-0 mb-3'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus error aspernatur aliquid ipsa nisi reiciendis obcaecati optio repudiandae incidunt non consectetur impedit, in sed ipsum. Consequuntur esse necessitatibus odio accusamus"
                  </div>
                  <div className=' text-center md:text-start font-bold titleText'>Excecutive Name - Managing Director</div>
              </div>
            </div>

            {/* Excecutive List 2 */}
            <div className='grid grid-cols-1 place-items-center mb-10 md:flex md:justify-center md:items-center md:gap-10 md:flex-row-reverse'>
              {/* Excecutive Photo */}
              <div className=' w-[150px] h-[150px] rounded-full bg-[#8f6666] mb-3'>
              <img src={author2} className='w-full h-full object-cover rounded-full' alt="" />
              </div>
              {/* Excecutive Quote */}
              <div className='md:w-[70%]'>
                  <div className=' paraText text-sm italic text-center px-16 mb-3 md:px-0 md:text-end'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus error aspernatur aliquid ipsa nisi reiciendis obcaecati optio repudiandae incidunt non consectetur impedit, in sed ipsum. Consequuntur esse necessitatibus odio accusamus"
                  </div>
                  <div className=' text-center font-bold titleText md:text-end'>Excecutive Name - Managing Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#FF6C00]'>
        <Footer/>
      </section>
    </div>
  )
}

export default About
