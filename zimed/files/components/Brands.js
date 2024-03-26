import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';


const Brands = () => {

    const params = {
        slidesPerView : 5,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1499:{
                slidesPerView : 5
            },

            991:{
                slidesPerView : 3
            },

            767:{
                slidesPerView : 3

            },

            575:{
                slidesPerView : 2
            }
        }
        }
    return (
        <section className="brand-one brand-one__home-one">
            <div className="container">
                <div className="brand-one__carousel">
                <Swiper {...params}>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-1.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-2.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-3.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-4.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-5.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-6.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-1.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-2.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-3.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-4.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-5.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="/assets/images/brand/brand-1-6.png" alt=""/>
                    </div>
                </Swiper>

                </div>
            </div>
        </section>
    )
}
export default Brands;