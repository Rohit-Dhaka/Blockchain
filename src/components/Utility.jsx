import React from 'react'
import HandPhoto from '../assets/images/webp/handPhoto.webp'
import Vector2 from '../assets/images/webp/Vector2.webp'
import Notebook from '../assets/images/webp/noteBook.webp'
import CandleChart from '../assets/images/webp/candleChart.webp'
const Utility = () => {
    return (
        <section  className=' position-relative overflow-hidden'>
            <div className=" position-absolute  CandleChart-2">
                <img src={CandleChart} alt="candlechart"  className='w-100 '/>
            </div>
            <div className="pb-lg-144 pb-sm-80 pb-60">
                <img src={Vector2} alt="vector" className='w-100' />
            </div>
            <div className=" position-absolute note-book ">
                <img src={Notebook} alt="notebook" />
            </div>
            <h6 className='mb-0 ff-Grandstander  fw-black fs-32 lh-32 opacity-54 position-absolute fud-text-4'>I love FUDing</h6>
            <h6 className='mb-0 ff-Grandstander  fw-black fs-32 lh-32 opacity-54 position-absolute fud-text-5'>I love FUDing</h6>
            <h6 className='mb-0 ff-Grandstander  fw-black fs-32 lh-32 opacity-54 position-absolute fud-text-6'>I love FUDing</h6>
            <div className=" mycontainer">
                <div className="row flex-wrap-reverse  ">
                    <div className="col-md-6 col-12 pt-4 pt-md-0 d-flex flex-column align-items-start  justify-content-end z-1" data-aos="fade-up">
                        <h2 className=' ff-Inter fw-black fs-64 lh-77 text-black mb-0 '>UTILITY</h2>
                        <h6 className=' ff-Inter fs-16 text-black lh-25 fw-normal pt-20 opacity-80 pb-27 mb-0 max-w-lg-541'>The utility of $LHGG extends beyond its humorous appeal.  Holders of $LHGG gain access to exclusive merchandise,  events, and community perks. Furthermore, $LHGG serves  as a medium of exchange within our ecosystem, facilitating  transactions and interactions among community members.  Through strategic partnerships and integrations, we aim to  expand the utility of $LHGG, creating additional avenues for  adoption and growth.</h6>
                        <button className=' ff-Inter  fw-semibold  fs-16 lh-19 bg-yellow yellow-btn mb-62 duration-300'>Buy $GrayGensler</button>
                    </div>
                    <div className="col-md-6 col-12 z-1 d-flex justify-content-md-end justify-content-center" data-aos="fade-up">
                        <div className="max-w-440"><img src={HandPhoto} alt="handphoto" className='w-100' /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Utility