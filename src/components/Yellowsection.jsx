import React from 'react'
import Xlogo from '../assets/images/svg/x-logo.svg'
import Telegram from '../assets/images/svg/telegram.svg'
import Dextools from '../assets/images/svg/dextools.svg'



const Yellowsection = () => {
 
    return (
        <section className='bg-yellow'>                        
                <div className="mycontainer">
                    <div className="pt-sm-39 pb-sm-39 py-4 d-flex justify-content-between yellow-container gap-md-144 gap-90 " data-aos="fade-up">
                        <div className="d-flex gap-22 align-items-center ">
                            <img src={Xlogo} alt="xlogo" />
                            <h4 className=' ff-Inter text-white   fw-semibold fs-48 lh-58 mb-0'>twitter</h4>
                        </div>
                        <div className="d-flex gap-22 align-items-center max-w-285">
                            <img src={Telegram} alt="telegram" />
                            <h4 className=' ff-Inter text-white   fw-semibold fs-48 lh-58 mb-0'>Telegram</h4>
                        </div>
                        <div className="d-flex gap-22 align-items-center max-w-328">
                            <img src={Dextools} alt="dextools" />
                            <h4 className=' ff-Inter text-white   fw-semibold fs-48 lh-58 mb-0'>DEXTOOLS</h4>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}
export default Yellowsection