import React from 'react';

const FeaturesTwo = () => {
        return (
            <section className="cta-two">
                <img src="/assets/images/shapes/cta-2-shape-1.png" alt="" className="cta-two__shape-1" />
                <img src="/assets/images/shapes/cta-2-shape-2.png" alt="" className="cta-two__shape-2" />
                <div className="container">
                    <img src="/assets/images/shapes/cta-2-shape-3.png" alt="" className="cta-two__shape-3" />
                    <img src="/assets/images/mocs/cta-moc-2-1.png" alt="" className="cta-two__moc" />
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="cta-two__content">
                                    <div className="block-title text-left">
                                        <span className="block-title__bubbles"></span>
                                        <p>Checkout App Features</p>
                                        <h3>Discover the Powerful Tools For Your Repeat Customers</h3>
                                    </div>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry when an unknown printer
                                        took a galley of type and scrambled it to make. Lorem ipsum dolor
                                        sit amet, consectetur
                                        adipisicing elit.</p>
                                    <a href="#" className="thm-btn cta-two__btn">Discover More</a>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        )
}
export default FeaturesTwo;