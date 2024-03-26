import React from 'react';

const Banner = () => {
        return (
            <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <div className="container">
                    <div className="banner-one__moc">
                        <img src="/assets/images/mocs/banner-moc-1-1.png" alt="Awesome Image" />
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-one__content">
                                <h3 className="banner-one__title">We Deliver the <br />
                                    <span>Software</span> you <br /> Need.</h3>
                                <p className="banner-one__text">We are committed to providing our customers
                                    with <br /> exceptional service while offering our employees the <br /> best training.
                                </p>
                                <a href="#" className="banner-one__btn thm-btn "><span>Get Started</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Banner;