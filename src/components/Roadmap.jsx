import React from 'react'
import Stick1 from '../assets/images/webp/Stick1.webp'
import Stick2 from '../assets/images/webp/Stick2.webp'
import Stick3 from '../assets/images/webp/stick3.webp'
import Stick4 from '../assets/images/webp/stick4.webp'
import Stick5 from '../assets/images/webp/stick5.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Roadmap = () => {
    var setting = {
        dots: false,
        infinite: true,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear'
    };  
    return (
        <section className=' bg-black pb-lg-143 pb-sm-80 pb-60  overflow-hidden '>
            <div className=" mycontainer">
                <div className=' d-flex flex-column align-items-center pb-lg-141 pb-sm-80 pb-60 pt-sm-68 pt-60' data-aos="fade-up">
                    <h2 className=' ff-Inter fw-black fs-64 lh-77 text-white mb-0 '>ROADMAP</h2>
                    <h6 className=' ff-Inter fw-normal opacity-70 text-white fs-16 lh-30 text-center max-w-894 pt-20 mb-0'>Our roadmap isn't just a journey; it's a comedic adventure  through the cryptoverse, filled with twists, turns, and plenty of  laughs along the way. Here's a glimpse into what the future holds  for Let's Hug GG ($LHGG)</h6>
                </div>
            </div>
            <Slider {...setting} data-aos="fade-up">
                <div className="roadmap-item d-flex pt-93 ps-2 max-w-229">                    
                    <img src={Stick1} alt="stick--1" className='pe-2' />
                    <div className="d-flex flex-column  justify-content-end pb-23 max-w-340">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '>Token Launch (Q1 2024)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'>Launch $LHGG token, establish initial  liquidity.</h5>
                    </div>
                </div>
                <div className="roadmap-item d-flex pt-19 pl-30 max-w-310">
                    <img src={Stick2} alt="stick" className=' pr-18 ' />
                    <div className="d-flex flex-column  justify-content-center max-w-450">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '>Community Building (Q2 2024)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'>Grow vibrant community  through humor and engagement.</h5>
                    </div>
                </div>
                <div className="roadmap-item d-flex ps-1 max-w-280">
                    <img src={Stick3} alt="stick" className='pr-18 ' />
                    <div className="d-flex flex-column  pt-13 max-w-360">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '>Governance Implementation (Q3 2024)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'>Introduce community  governance mechanisms.</h5>
                    </div>
                </div>
                <div className="roadmap-item d-flex max-w-290">
                    <img src={Stick4} alt="stick" className='  pr-30 pb-31' />
                    <div className="d-flex flex-column  justify-content-end  max-w-370">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '> Partnerships and Influencer Collaborations (Q4 2024)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'> Forge  strategic partnerships and collaborations.</h5>
                    </div>
                </div>
                <div className="roadmap-item d-flex pl-30 max-w-284">
                    <img src={Stick5} alt="stick" className=' pr-21 ' />
                    <div className="d-flex flex-column  justify-content-center max-w-340">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '> Utility Expansion (Q1 2025)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'>Explore new use cases and  integrations for $LHGG.</h5>
                    </div>
                </div>
                <div className="roadmap-item d-flex pt-93 ps-2 max-w-229">
                    
                    <img src={Stick1} alt="stick--2" className='pe-2' />                    
                    <div className="d-flex flex-column  justify-content-end pb-23 max-w-340">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '>Token Launch (Q1 2024)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'>Launch $LHGG token, establish initial  liquidity.</h5>
                    </div>
                </div>
                <div className="roadmap-item d-flex pt-19 pl-30 max-w-310">
                    <img src={Stick2} alt="stick" className=' pr-18 ' />
                    <div className="d-flex flex-column  justify-content-center max-w-450">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '>Community Building (Q2 2024)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'>Grow vibrant community  through humor and engagement.</h5>
                    </div>
                </div>
                <div className="roadmap-item d-flex ps-1 max-w-280">
                    <img src={Stick3} alt="stick" className='pr-18 ' />
                    <div className="d-flex flex-column  pt-13 max-w-360">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '>Governance Implementation (Q3 2024)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'>Introduce community  governance mechanisms.</h5>
                    </div>
                </div>
                <div className="roadmap-item d-flex max-w-290">
                    <img src={Stick4} alt="stick" className='  pr-30 pb-31' />
                    <div className="d-flex flex-column  justify-content-end  max-w-370">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '> Partnerships and Influencer Collaborations (Q4 2024)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'> Forge  strategic partnerships and collaborations.</h5>
                    </div>
                </div>
                <div className="roadmap-item d-flex pl-30 max-w-284">
                    <img src={Stick5} alt="stick" className=' pr-21 ' />
                    <div className="d-flex flex-column  justify-content-center max-w-340">
                        <h4 className=' ff-Inter fw-black fs-24 lh-29 text-white mb-0 '> Utility Expansion (Q1 2025)</h4>
                        <h5 className=' ff-Inter fw-normal fs-16 lh-30 text-white  opacity-70 mb-0 pt-9'>Explore new use cases and  integrations for $LHGG.</h5>
                    </div>
                </div>    
            </Slider>
        </section>
    )
}
export default Roadmap