import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Screenshots = () => {

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
        <section className="app-shot-one" id="screenshots">
            <img src="/assets/images/background/app-shot-bg.png" alt="Awesome Image" className="app-shot-one__bg" />
            <div className="container-fluid">
                <div className="block-title text-center">
                    <h2 className="block-title__title">Checkout Our App <br /> <span>Interface</span> Screenshots.
                    </h2>
                </div>
                <div className="app-shot-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-1.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-2.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-3.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-4.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-5.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-1.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-2.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-3.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-4.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-5.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-1.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-2.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-3.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-4.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/app-shots/app-shot-1-5.jpg" alt="" />
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default Screenshots;