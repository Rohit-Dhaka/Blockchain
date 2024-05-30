import React from 'react'
import Logo1 from '../assets/images/svg/logo1.svg'
import Logo2 from '../assets/images/svg/logo2.svg'
import Logo3 from '../assets/images/svg/logo3.svg'
import Logo4 from '../assets/images/svg/logo4.svg'
import Logo5 from '../assets/images/svg/logo5.svg'
import Sell from '../assets/images/webp/sellAll.webp'
import Vector from '../assets/images/webp/Vector.webp'
import SunGlasses from '../assets/images/webp/sunGlasses.webp'
import CandleChart from '../assets/images/webp/candleChart.webp'
const About = () => {
    return ( 
        <section className='position-relative about-bgackground    '>
            <div className="position-absolute CandleChart-1">
                <img src={CandleChart} alt="canlechart" className='w-100 ' />
            </div>
            <div className="position-absolute SunGlasses">
                <img src={SunGlasses} alt="sunglasses" className=' ' />
            </div>
            <div className="mycontainer pt-lg-218 pt-sm-80 pt-60 pb-lg-130 pb-sm-80 pb-60 position-relative ">
                <h6 className='mb-0 ff-Grandstander  fw-black fs-32 lh-32 opacity-54 position-absolute fud-text-1'>I love FUDing</h6>
                <h6 className='mb-0 ff-Grandstander  fw-black fs-32 lh-32 opacity-54 position-absolute fud-text-2'>I love FUDing</h6>
                <h6 className='mb-0 ff-Grandstander  fw-black fs-32 lh-32 opacity-54 position-absolute fud-text-3'>I love FUDing</h6>
                <div className="row">
                    <div className="col-lg-6 d-flex  justify-content-lg-start justify-content-center  z-1" data-aos="fade-up">
                        <div className=" max-w-482  ">
                            <img src={Sell} alt="sell" className='pt-lg-70 w-100 ' />
                        </div>
                    </div>
                    <div className="col-lg-6 pt-lg-0 pt-4" data-aos="fade-up">
                        <div className="d-flex gap-23 logo-contant align-items-center">
                            <a href=""><img src={Logo4} alt="logo" /></a>
                            <a href=""><img src={Logo1} alt="logo" /></a>
                            <a href=""><img src={Logo2} alt="logo" /></a>
                            <a href=""><img src={Logo3} alt="logo" /></a>
                            <a href=""><img src={Logo5} alt="logo" /></a>
                        </div>
                        <h2 className=' ff-Inter fw-black fs-64 lh-77 text-black mb-0 pt-26'>ABOUT US</h2>
                        <h6 className=' ff-Inter fs-16 text-black lh-25 fw-normal pt-20 opacity-80 mb-0 max-w-lg-553'> In the ever-evolving landscape of cryptocurrency, where markets  can swing on a tweet and sentiments wield as much power as  technical analysis, one figure has recently stepped into the  spotlight: Gary Gensler, or as we affectionately call him, GG. With his  recent comments on Bitcoin, Gensler stirred the pot of fear,  uncertainty, and doubt (FUD), sending shockwaves through the  crypto community.</h6>
                        <h6 className=' ff-Inter fs-16 text-black lh-25 fw-normal pt-17 opacity-80 mb-0 max-w-lg-535'>But fear not, for in the midst of this whirlwind of emotions, there  emerges a beacon of levity and laughter: Let's Hug GG ($LHGG). Hug  We're not your average token; we're a humorous response to the  serious business of crypto. Inspired by Gensler's remarks and the  ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor  into the conversation while playfully encouraging individuals to  consider selling their Bitcoins.</h6>
                        <h6 className=' ff-Inter fs-16 text-black lh-25 fw-normal pt-17 opacity-80 mb-0 max-w-lg-540'>ou see, we believe that in times of uncertainty, a good laugh can be  the best antidote. And what better way to address fear than with a  hug—from behind, of course! Our slogan, "If you sell your BTC, we'll  let you hug GG from behind so tightly," embodies our playful  approach to tackling the anxiety surrounding Bitcoin and the  broader crypto market.</h6>
                        <h6 className=' ff-Inter fs-16 text-black lh-25 fw-normal pt-17 opacity-80 mb-0 max-w-lg-547'>So, buckle up and get ready for a rollercoaster ride of giggles, hugs,  and maybe even a few profitable trades along the way. Because in  the world of $LHGG, laughter isn't just the best medicine—it's the  best investment strategy.</h6>
                    </div>
                </div>
            </div>
            <div className="">
            <img src={Vector} alt="vector" className='w-100' />
            </div>
        </section>
    )
}
export default About