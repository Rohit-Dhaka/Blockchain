import React from 'react'
import Dextools from '../assets/images/svg/dextools.svg'
import Xlogo from '../assets/images/svg/x-logo.svg'
import Telegram from '../assets/images/svg/telegram.svg'
const Footer = () => {
    const Year = new Date().getFullYear();
    return (
        <footer className='bg-black '>
            <div className="mycontainer pt-2">
                <div className="row pt-lg-153 pt-sm-80 pt-60 pb-lg-120 pb-sm-80 pb-60">
                    <div className="col-md-3 col-12" >
                        <h3 className=' ff-Inter fw-black  fs-79  lh-95 text-white mb-0'>G<span className="color-yellow">G</span></h3>
                        <h6 className=' ff-Inter fw-400 fs-16 lh-25 pt-sm-41 text-white mb-0 d-sm-block d-none'>@copyright{Year}</h6>
                    </div>
                    <div className="col-xl-6 col-sm-6 col-12 pt-18">
                        <ul className=' d-flex flex-column border-left mb-0  pl-sm-66'>
                            <li className=' ff-Inter fw-bold fs-16 lh-25 text-white'>QUICK LINKS</li>
                            <li className='pt-30'><a href="#" className='ff-Inter fw-normal fs-16 lh-25 text-white pt-13  underline position-relative  duration-300'>Twitter</a></li>
                            <li className='pt-17'><a href="#" className='ff-Inter fw-normal fs-16 lh-25 text-white   underline position-relative duration-300 '>Telegram</a></li>
                            <li className='pt-17'><a href="#" className='ff-Inter fw-normal fs-16 lh-25 text-white  underline position-relative duration-300 '>DexTools</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12   d-flex  justify-content-md-end pt-4 pt-md-0" >
                        <div className="d-flex gap-21">
                            <a href="https://www.dextools.io/app/en/pairs" target='_blank' className='media-icon duration-300' >
                                <img src={Dextools} alt="dextools" />
                            </a>
                            <a href="https://x.com/?lang=en" target='_blank' className='media-icon duration-300'>
                                <img src={Xlogo} alt="xlogo" />
                            </a>
                            <a href="https://telegram.org/" target='_blank' className='media-icon duration-300'>
                                <img src={Telegram} alt="telegram" />
                            </a>
                        </div>
                    </div>
                </div>
                <h6 className=' ff-Inter fw-400 fs-16 lh-25  text-white mb-0 pb-4 d-sm-none d-block'>@copyright{Year}</h6>
            </div>
        </footer>
    )
}
export default Footer