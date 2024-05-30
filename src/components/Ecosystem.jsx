import React from 'react'
import Logo1 from '../assets/images/svg/logo1.svg'
import Logo2 from '../assets/images/svg/logo2.svg'
import Logo3 from '../assets/images/svg/logo3.svg'
import Logo4 from '../assets/images/svg/logo4.svg'
import Logo5 from '../assets/images/svg/logo5.svg'
import Newspaper from '../assets/images/webp/newspaper.webp'
import Vector from '../assets/images/webp/Vector.webp'
import NewspaperIcon from '../assets/images/webp/newspaperIcon.webp'
import Sunglassess from '../assets/images/webp/sunGlasses.webp'
import Candlechart from '../assets/images/webp/candleChart.webp'
const Ecosystem = () => {
  return (
    <section className=' position-relative overflow-hidden'>
      <div className=" position-absolute CandleChart-3 ">
        <img src={Candlechart} alt="candlechart" className='w-100 ' />
      </div>
      <div className=" position-absolute Sunglassess-1 ">
        <img src={Sunglassess} alt="sungleasses" />
      </div>
      <div className=" position-absolute papericon">
        <img src={NewspaperIcon} alt="newspaper" />
      </div>
      <div className='yellow-line mt-56 '  data-aos="fade-left">
        <h3 className=' mb-0 ff-Inter fw-black fs-36 lh-43 text-center ' >PLACE YOURSELF ON THE RIGHT SIDE OF HISTORY</h3>
      </div>
      <div className="mycontainer pt-lg-250  pt-sm-80 pt-60">
        <div className="row pb-sm-68 pb-60">
          <div className="col-lg-6 col-12 z-1 d-flex justify-content-lg-start justify-content-center" data-aos="fade-up">
            <div className="pt-13 max-w-457"><img src={Newspaper} alt="newspaper" className='w-100' /></div>
          </div>
          <div className="col-lg-6 col-12 z-1 pt-4 pt-lg-0 " data-aos="fade-up">
            <div className="d-flex gap-23 logo-contant align-items-center">
              <a href=""><img src={Logo4} alt="logo" /></a>
              <a href=""><img src={Logo1} alt="logo" /></a>
              <a href=""><img src={Logo2} alt="logo" /></a>
              <a href=""><img src={Logo3} alt="logo" /></a>
              <a href=""><img src={Logo5} alt="logo" /></a>
            </div>
            <h2 className=' ff-Inter fw-black fs-64 lh-77 text-black mb-0 pt-13'>ECOSYSTEM</h2>
            <h6 className=' ff-Inter fs-16 text-black lh-25 fw-normal pt-20 opacity-80 pb-33 mb-0 max-w-lg-541'> The $LHGG ecosystem is built upon the principles of inclusivity,  humor, and innovation. Our community-driven approach  empowers members to actively participate in governance,  decision-making, and promotional activities. Through social  media campaigns, memes, and creative content, we seek to  amplify the message of embracing humor in the crypto space  and challenging conventional narratives. Together, we aspire to  foster a vibrant and engaging ecosystem where laughter reigns  supreme.</h6>
            <button className=' ff-Inter  fw-semibold  fs-16 lh-19 bg-yellow yellow-btn duration-300'>Buy $GrayGensler</button>
          </div>
        </div>
      </div>
      <div className="">
        <img src={Vector} alt="vector" className='w-100' />
      </div>
    </section>
  )
}
export default Ecosystem