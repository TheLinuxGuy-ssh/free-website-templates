import React,{ useState } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Testimonial = () => {

    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
    };

    return (
        <section className="testimonials-one">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">What Our <span>Clients</span> Say <br /> About Us.
                    </h2>
                </div>
                <div className="testimonials-one__carousel-outer">
                    <div className="testimonials-one__carousel">
                        <Swiper getSwiper={setSwiper}>
                            <div className="item">
                                <div className="testimonials-one__single">
                                    <div className="testimonials-one__inner">
                                        <p>This is due to their excellent service, competitive pricing and <br/> customer
                                            support. It’s throughly refresing to get such a personal <br/> touch. Duis
                                                aute irure dolor in reprehenderit.</p>
                                        <h3>Shirley Smith</h3>
                                        <span>Our Customers</span>
                                        <img src="/assets/images/resources/testi-1-1.png" alt="Awesome Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-one__single">
                                    <div className="testimonials-one__inner">
                                        <p>This is due to their excellent service, competitive pricing and <br/> customer
                                            support. It’s throughly refresing to get such a personal <br/> touch. Duis
                                                aute irure dolor in reprehenderit.</p>
                                        <h3>Shirley Smith</h3>
                                        <span>Our Customers</span>
                                        <img src="/assets/images/resources/testi-1-1.png" alt="Awesome Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials-one__single">
                                    <div className="testimonials-one__inner">
                                        <p>This is due to their excellent service, competitive pricing and <br/> customer
                                            support. It’s throughly refresing to get such a personal <br/> touch. Duis
                                                aute irure dolor in reprehenderit.</p>
                                        <h3>Shirley Smith</h3>
                                        <span>Our Customers</span>
                                        <img src="/assets/images/resources/testi-1-1.png" alt="Awesome Image" />
                                    </div>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                    <div className="testimonials-one__carousel__shape-one"></div>
                    <div className="testimonials-one__carousel__shape-two"></div>
                    <div className="testimonials-one__nav">
                        <div onClick={goPrev} className="testimonials-one__nav-left"><i className="dimon-icon-left-arrow"></i></div>
                        <div onClick={goNext} className="testimonials-one__nav-right"><i
                            className="dimon-icon-right-arrow"></i></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonial;