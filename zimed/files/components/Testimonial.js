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

        <section className="testimonials__one" id="testimonials">
            <img src="/assets/images/shapes/map-1-1.png" alt="Awesome Image" className="map-img"/>
            <img src="/assets/images/shapes/testi-shape-1.png" alt="" className="testimonials__one-shape-1"/>
                <img src="/assets/images/shapes/testi-shape-2.png" alt="" className="testimonials__one-shape-2"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex">
                            <div className="my-auto wow fadeInUp" data-wow-duration="1500ms">
                                <div id="testimonials-slider-pager">
                                    <div className="testimonials-slider-pager-one">
                                        <span onClick={goNext} className="pager-item active" data-slide-index="0"><img
                                            src="/assets/images/testimonials/testi-1-1.jpg"
                                            alt="Awesome Image"/></span>
                                        <span onClick={goPrev} className="pager-item" data-slide-index="1"><img
                                            src="/assets/images/testimonials/testi-1-2.jpg"
                                            alt="Awesome Image"/></span>
                                        <span onClick={goNext} className="pager-item" data-slide-index="2"><img
                                            src="/assets/images/testimonials/testi-1-3.jpg"
                                            alt="Awesome Image"/></span>
                                        <span onClick={goPrev} className="pager-item" data-slide-index="3"><img
                                            src="/assets/images/testimonials/testi-1-4.jpg"
                                            alt="Awesome Image"/></span>
                                        <span  onClick={goNext} className="pager-item" data-slide-index="4"><img
                                            src="/assets/images/testimonials/testi-1-5.jpg"
                                            alt="Awesome Image"/></span>
                                        <span  onClick={goPrev} className="pager-item" data-slide-index="5"><img
                                            src="/assets/images/testimonials/testi-1-6.jpg"
                                            alt="Awesome Image"/></span>
                                    </div>
                                    <div className="testimonials-slider-pager-two">
                                        <a href="#" className="pager-item active" data-slide-index="0"><img
                                            src="/assets/images/testimonials/testi-1-1.jpg"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="1"><img
                                            src="/assets/images/testimonials/testi-1-2.jpg"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="2"><img
                                            src="/assets/images/testimonials/testi-1-3.jpg"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="3"><img
                                            src="/assets/images/testimonials/testi-1-4.jpg"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="4"><img
                                            src="/assets/images/testimonials/testi-1-5.jpg"
                                            alt="Awesome Image"/></a>
                                        <a href="#" className="pager-item" data-slide-index="5"><img
                                            src="/assets/images/testimonials/testi-1-6.jpg"
                                            alt="Awesome Image"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block-title text-left">
                                <span className="block-title__bubbles"></span>
                                <p>Checkout Latest Posts</p>
                                <h3>What Our Clients Are Saying</h3>
                            </div>
                            <ul className="slider testimonials-slider">

                                <Swiper getSwiper={setSwiper}>

                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>This is due to their excellent service, competitive pricing and
                                                customer support. It’s
                                                throughly refresing to get such a personal touch. Duis aute irure
                                                dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <h3>Delila Rayam</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>This is due to their excellent service, competitive pricing and
                                                customer support. It’s
                                                throughly refresing to get such a personal touch. Duis aute irure
                                                dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <h3>Terrilyn Werme</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>This is due to their excellent service, competitive pricing and
                                                customer support. It’s
                                                throughly refresing to get such a personal touch. Duis aute irure
                                                dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <h3>Kyle Demayo</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>This is due to their excellent service, competitive pricing and
                                                customer support. It’s
                                                throughly refresing to get such a personal touch. Duis aute irure
                                                dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <h3>Minta Hadad</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>This is due to their excellent service, competitive pricing and
                                                customer support. It’s
                                                throughly refresing to get such a personal touch. Duis aute irure
                                                dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <h3>Sherman Cibrian</h3>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="testimonials__one__single">
                                            <p>This is due to their excellent service, competitive pricing and
                                                customer support. It’s
                                                throughly refresing to get such a personal touch. Duis aute irure
                                                dolor in reprehenderit
                                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <h3>Adrianne Hagans</h3>
                                        </div>
                                    </li>
                                </Swiper>


                                <div className="testimonial_pagination">
                                    <div className="testimonials-slider-pager-one testimonials-slider-pager-two" onClick={goPrev}>
                                        <i className="zimed-icon-left-arrow"></i>
                                    </div>
                                    <div className="ml-3" onClick={goNext}>
                                        <i className="zimed-icon-right-arrow"></i>
                                    </div>

                                </div>
                            </ul>
                        </div>
                    </div>
                    </div>
        </section>
    )
}
export default Testimonial;