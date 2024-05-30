import React, { useState } from 'react'
import Dextools from '../assets/images/svg/dextools.svg'
import Xlogo from '../assets/images/svg/x-logo.svg'
import Telegram from '../assets/images/svg/telegram.svg'
import Copyicon from '../assets/images/svg/copyicon.svg'
import Heroimg from '../assets/images/webp/hero-img.webp'
const Hero = () => {
  const [show , setShow ] = useState(false)
  if( show == true  ){
    document.body.classList.add("overflow-hidden")
  }
  else{
    document.body.classList.remove("overflow-hidden")
  }
  return (    
    <header className='bg-black min-vh-100  d-flex flex-column position-relative overflow-hidden'>
      <div className=' position-absolute  hero-img z-0 ' >
        <img src={Heroimg} alt="hero" className='w-100' />                
      </div>    
      <nav className='pt-lg-40 pt-30' data-aos="fade-down">
        <div className="mycontainer"  >
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo  ff-Inter  fs-40  lh-48 fw-black text-white ">Gxxx Gxxxxxx</div>
            <div className={`${(show) ? "left-0" : "" }   d-flex gap-46 align-items-center menu`} >
              <div className=" d-flex gap-21 ">
                <a href="https://www.dextools.io/app/en/pairs" target='_blank'>
                  <img src={Dextools} alt="dextools" />
                </a>
                <a href="https://x.com/?lang=en" target='_blank'>
                  <img src={Xlogo} alt="xlogo" />
                </a>
                <a href="https://telegram.org/" target='_blank'>
                  <img src={Telegram} alt="telagram" />
                </a>
              </div>
              <button className='white-btn ff-Inter fw-semibold fs-16 lh-19 text-white bg-transparent duration-300'>Buy On Uniswap</button>
            </div>
            <div className="menu-icon d-md-none d-block" onClick={()=> setShow(!show) }>
              <span className='bar '></span>
              <span className='bar my-2'></span>
              <span className='bar '></span>
            </div>
          </div>
        </div>
      </nav>
      <div className=" mycontainer d-flex flex-column  flex-grow-1 justify-content-center  pb-4 mb-sm-0 z-1 w-100  " data-aos="fade-up">
        <h1 className=' ff-Inter fw-black  fs-108  lh-130 text-white mb-0'>G<span className="color-yellow">G</span></h1>
        <h6 className='ff-Inter  fw-semibold fs-20 lh-24 text-white max-w-538 mb-0'>Join The <span className="color-yellow">Worldwide Blockchain </span>Protest Against Corrupt Government Bodies</h6>
        <div className="d-flex gap-20 pt-sm-62 pt-4 pb-sm-36  pb-20 flex-sm-nowrap flex-wrap">
          <button className='white-btn-1 ff-Inter fw-semibold fs-16 lh-19 text-black bg-yellow duration-300'>Buy $GrayGensler</button>
          <button className='white-btn ff-Inter fw-semibold fs-16 lh-19 text-white bg-transparent duration-300'>How To Buy?</button>
        </div>
        <div className="copy-text d-flex gap-19 align-items-center  ">
          <h4 className=' mb-0 ff-Inter fw-normal fs-20 lh-30 text-white duration-300'>dwqjddj324dnewdne3dewrrets</h4>
        <img src={Copyicon} alt="copyicon" className='cursor-pointer' />
        </div>
      </div>
    </header>
  )
}
export default Hero