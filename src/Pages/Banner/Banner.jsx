import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

const Banner = () => {
    return (
        <div className='mt-5 pt-3'>
            <div className="row px-5">
                <div className="col-md-6">
                    <h2 className='banner-text'>Best social marketing agency</h2>
                    <p className='banner-detail mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                    <div className='mt-5 ms-2'>
                        <button className="primary-btn">Get Started</button>
                    </div>
                    <Tada><div className="arrow">
                        <img src="https://templatekit.tokomoo.com/socialkit/wp-content/uploads/sites/58/2021/12/arrow-2.png" alt="" />
                    </div></Tada>
                    
                   <div className="banner-star">
                   <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <h6 className='mt-3'>Rated 5/5 - <span className='bn-sp'>from over 450 reviews</span></h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='banner-img'>
                    <Fade left><img src="https://templatekit.tokomoo.com/socialkit/wp-content/uploads/sites/58/2021/12/young-caucasian-woman-using-digital-tablet-browsi-2021-12-09-08-12-48-utc-1.jpg" alt="" width="90%" className='bn-img'  /></Fade>
                    </div>
                    <Fade bottom>
                    <div className="bn-img-ex">
                        <div className="d-flex">
                            <div className="">
                                <img src="https://templatekit.tokomoo.com/socialkit/wp-content/uploads/sites/58/2021/12/110-hand-drawn-business-icons-MYYRXM-1.png" alt="" height="85px" width="85px" />
                            </div>
                            <div className=" pe-1 ms-5 ex-info">
                                <h3><CountUp end={370} />%</h3>
                                <h5>Increase in Leads</h5>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>

        </div>
    );
};

export default Banner;