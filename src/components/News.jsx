import React from 'react'
import Vector from '../assets/images/webp/Vector2.webp'
import Cardimg from '../assets/images/svg/cardimg.svg'
import Tick from '../assets/images/svg/Tick.svg'
import Retweet from '../assets/images/svg/retweet.svg'
import Commont from '../assets/images/svg/commont.svg'
import Share from '../assets/images/svg/share.svg'
import Like from '../assets/images/svg/like.svg'
import Laptop from '../assets/images/webp/lapTop.webp'
import Phone from '../assets/images/webp/phoNe.webp'
import Candlechart from '../assets/images/webp/candleChart.webp'
const News = () => {
    return (
        <section className='  position-relative  overflow-hidden'>
            <div className=" position-absolute CandleChart-4 z-0 ">
                <img src={Candlechart} alt="candlechart" className='w-100 ' />
            </div>
            <div className="">
                <img src={Vector} alt="vector" className='w-100' />
            </div>
            <div className=" mycontainer pb-lg-96 pb-sm-80 pb-60 position-relative ">
                <div className="laptop-img position-absolute  z-n1">
                    <img src={Laptop} alt="laptop" />
                </div>
                <div className="position-absolute z-n1">
                    <img src={Phone} alt="phone" />
                </div>
                <div className="pt-lg-125 pt-sm-80 pt-60 z-1">
                    <h2 className=' ff-Inter fw-black fs-64 lh-77 text-black mb-0   text-center text-black z-1 '>LATEST NEWS</h2>
                </div>
                <div className="row pt-lg-96 pt-sm-80 pt-60 ">
                    <div className="col-lg-4 col-sm-6  z-1" data-aos="fade-up">
                        <div className="mycard duration-300 bg-white">
                            <div className="d-flex gap-14 align-items-center">
                                <img src={Cardimg} alt="carding" />
                                <div className="d-flex flex-column">
                                    <h4 className=' ff-Inter  fs-16 lh-19 fw-black mb-0 '> Joe Bidenn <img src={Tick} alt="tick" /> </h4>
                                    <h6 className='ff-Inter fs-14 lh-25 text-black  pt-1  opacity-80 mb-0'> I am giving back in the community.</h6>
                                </div>
                            </div>
                            <h6 className=' pt-20 mb-0 ff-Inter  fw-normal fs-16 lh-25 opacity-80'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</h6>
                            <div className="pt-27 d-flex  justify-content-between ">
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Commont} alt="commont" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>28</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Retweet} alt="retweet" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>5</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Like} alt="like" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>21</h6>
                                </div>
                                <img src={Share} alt="share" className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6  z-1 pt-27 pt-sm-0" data-aos="fade-up">
                        <div className="mycard duration-300 bg-white">
                            <div className="d-flex gap-14 align-items-center">
                                <img src={Cardimg} alt="cardimg" />
                                <div className="d-flex flex-column">
                                    <h4 className=' ff-Inter  fs-16 lh-19 fw-black mb-0 '> Joe Bidenn <img src={Tick} alt="tick" /> </h4>
                                    <h6 className='ff-Inter fs-14 lh-25 text-black  pt-1  opacity-80 mb-0'> I am giving back in the community.</h6>
                                </div>
                            </div>
                            <h6 className=' pt-20 mb-0 ff-Inter  fw-normal fs-16 lh-25 opacity-80'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</h6>
                            <div className="pt-27 d-flex  justify-content-between ">
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Commont} alt="commont" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>28</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Retweet} alt="retweet" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>5</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Like} alt="like" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>21</h6>
                                </div>
                                <img src={Share} alt="share" className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6  z-1 pt-27 pt-lg-0" data-aos="fade-up">
                        <div className="mycard duration-300 bg-white">
                            <div className="d-flex gap-14 align-items-center">
                                <img src={Cardimg} alt="cardimg" />
                                <div className="d-flex flex-column">
                                    <h4 className=' ff-Inter  fs-16 lh-19 fw-black mb-0 '> Joe Bidenn <img src={Tick} alt="tick" /> </h4>
                                    <h6 className='ff-Inter fs-14 lh-25 text-black  pt-1  opacity-80 mb-0'> I am giving back in the community.</h6>
                                </div>
                            </div>
                            <h6 className=' pt-20 mb-0 ff-Inter  fw-normal fs-16 lh-25 opacity-80'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</h6>
                            <div className="pt-27 d-flex  justify-content-between ">
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Commont} alt="commont" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>28</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Retweet} alt="retweet" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>5</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Like} alt="like" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>21</h6>
                                </div>
                                <img src={Share} alt="share" className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6  pt-27 z-1" data-aos="fade-up">
                        <div className="mycard duration-300 bg-white">
                            <div className="d-flex gap-14 align-items-center">
                                <img src={Cardimg} alt="cardimg" />
                                <div className="d-flex flex-column">
                                    <h4 className=' ff-Inter  fs-16 lh-19 fw-black mb-0 '> Joe Bidenn <img src={Tick} alt="tick" /> </h4>
                                    <h6 className='ff-Inter fs-14 lh-25 text-black  pt-1  opacity-80 mb-0'> I am giving back in the community.</h6>
                                </div>
                            </div>
                            <h6 className=' pt-20 mb-0 ff-Inter  fw-normal fs-16 lh-25 opacity-80'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</h6>
                            <div className="pt-27 d-flex  justify-content-between ">
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Commont} alt="commont" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>28</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Retweet} alt="retweet" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>5</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Like} alt="like" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>21</h6>
                                </div>
                                <img src={Share} alt="share" className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6  pt-27 z-1" data-aos="fade-up">
                        <div className="mycard duration-300 bg-white">
                            <div className="d-flex gap-14 align-items-center">
                                <img src={Cardimg} alt="cardimg" />
                                <div className="d-flex flex-column">
                                    <h4 className=' ff-Inter  fs-16 lh-19 fw-black mb-0 '> Joe Bidenn <img src={Tick} alt="tick" /> </h4>
                                    <h6 className='ff-Inter fs-14 lh-25 text-black  pt-1  opacity-80 mb-0'> I am giving back in the community.</h6>
                                </div>
                            </div>
                            <h6 className=' pt-20 mb-0 ff-Inter  fw-normal fs-16 lh-25 opacity-80'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</h6>
                            <div className="pt-27 d-flex  justify-content-between ">
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Commont} alt="commont" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>28</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Retweet} alt="retweet" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>5</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Like} alt="like" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>21</h6>
                                </div>
                                <img src={Share} alt="share" className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6  pt-27 z-1" data-aos="fade-up">
                        <div className="mycard duration-300 bg-white">
                            <div className="d-flex gap-14 align-items-center">
                                <img src={Cardimg} alt="cardimg" />
                                <div className="d-flex flex-column">
                                    <h4 className=' ff-Inter  fs-16 lh-19 fw-black mb-0 '> Joe Bidenn <img src={Tick} alt="tick" /> </h4>
                                    <h6 className='ff-Inter fs-14 lh-25 text-black  pt-1  opacity-80 mb-0'> I am giving back in the community.</h6>
                                </div>
                            </div>
                            <h6 className=' pt-20 mb-0 ff-Inter  fw-normal fs-16 lh-25 opacity-80'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</h6>
                            <div className="pt-27 d-flex  justify-content-between ">
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Commont} alt="commont" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>28</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Retweet} alt="retweet" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>5</h6>
                                </div>
                                <div className="d-flex gap-1  align-items-center">
                                    <img src={Like} alt="like" className='cursor-pointer' />
                                    <h6 className='mb-0 fs-14 lh-17 opacity-80'>21</h6>
                                </div>
                                <img src={Share} alt="share" className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default News