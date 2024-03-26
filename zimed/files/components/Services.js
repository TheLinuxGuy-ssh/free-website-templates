import React from 'react';

const Services = () => {
        return (
            <section className="service-one" id="features">
                <div className="container">
                    <div className="block-title text-center">
                        <span className="block-title__bubbles"></span>
                        <p>Checkout App Features</p>
                        <h3>The Only App You’ll Need</h3>
                    </div>
                    <div className="row">
                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="000ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-responsive"></i>
                                <h3>Free Setup</h3>
                            </div>
                        </div>

                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="100ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-computer-graphic"></i>
                                <h3>Quick Access</h3>
                            </div>

                        </div>

                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="200ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-development1"></i>
                                <h3>Manage Users</h3>
                            </div>

                        </div>

                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="300ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-development"></i>
                                <h3>Fully Secured</h3>
                            </div>

                        </div>

                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="400ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-development"></i>
                                <h3>Daily Update</h3>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        )
}
export default Services;