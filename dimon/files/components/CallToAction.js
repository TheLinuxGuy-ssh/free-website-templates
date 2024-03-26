import React from 'react';

const CallToAction = () => {
        return (
            <section className="cta-one">
                <img src="/assets/images/background/cta-one-bg.png" className="cta-one__bg" alt="Awesome Image" />
                <div className="container">
                    <img src="/assets/images/mocs/cta-moc-1-1.png" className="cta-one__moc" alt="Awesome Image" />
                    <div className="row justify-content-lg-end">
                        <div className="col-lg-6">
                            <div className="cta-one__content">
                                <i className="cta-one__icon dimon-icon-data1"></i>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Powerful <span>Tools</span> for Your Customers.
                                    </h2>
                                </div>
                                <div className="cta-one__text">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check"></i>Refresing to get such a personal touch.</li>
                                    <li><i className="fa fa-check"></i>Duis aute irure dolor in reprehenderit in
                                        voluptate.
                                    </li>
                                    <li><i className="fa fa-check"></i>Velit esse cillum dolore eu fugiat nulla
                                        pariatur.
                                    </li>
                                </ul>
                                <a href="#" className="thm-btn"><span>Get Started</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToAction;