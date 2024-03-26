import React,{ Component } from 'react';

export default class Pricing extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            month: true,
            year: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(){
        const month = this.state.month;
        const year = this.state.year;

        if(month){
            this.setState({year: true, month: false})
        }
        if(year){
            this.setState({year: false, month: true})
        }


    }

    render(){
        return (

            <section className="pricing-one" id="pricing">
                <div className="container">
                    <div className="pricing-one__sep"></div>

                    <div className="block-title text-center">
                        <span className="block-title__bubbles"></span>
                        <p>Our Pricing Tables</p>
                        <h3>Choose Pricing Plans</h3>
                    </div>

                    <ul className="list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
                        <li className={this.state.month ? 'month active' : 'month'}><a href="#">Monthly</a></li>
                        <li>
                            <label className={this.state.year ? 'switch off' : 'switch on'}>
                                <span onClick={this.handleToggle} className="slider round"></span>
                            </label>
                        </li>
                        <li className={this.state.year ? 'year active' : 'year'}><a href="#">Yearly</a></li>
                    </ul>

                    <div className="tabed-content">
                        <div id="month" style={{ display: this.state.month ? 'block' : 'none'}}>
                            <div className="row">
                                <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                 className="pricing-one__line" />
                                                <img src="/assets/images/shapes/pricing-icon-1-1.png" alt=""
                                                     className="pricing-one__icon" />
                                                    <h3>$20.00</h3>
                                                    <p>Basic Pack</p>
                                                    <ul className="list-unstyled pricing-one__list">
                                                        <li><i className="fa fa-check"></i> Extra features</li>
                                                        <li><i className="fa fa-check"></i> Lifetime free support</li>
                                                        <li><i className="fa fa-check"></i> Upgrate options</li>
                                                        <li><i className="fa fa-check"></i> Full access</li>
                                                    </ul>

                                                    <a href="#" className="thm-btn pricing-one__btn">Get Started</a>
                                                    <span>Get a Free Trial</span>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                 className="pricing-one__line" />
                                                <img src="/assets/images/shapes/pricing-icon-1-2.png" alt=""
                                                     className="pricing-one__icon" />
                                                    <h3>$30.00</h3>
                                                    <p>Standard Pack</p>
                                                    <ul className="list-unstyled pricing-one__list">
                                                        <li><i className="fa fa-check"></i> Extra features</li>
                                                        <li><i className="fa fa-check"></i> Lifetime free support</li>
                                                        <li><i className="fa fa-check"></i> Upgrate options</li>
                                                        <li><i className="fa fa-check"></i> Full access</li>
                                                    </ul>
                                                    <a href="#" className="thm-btn pricing-one__btn">Get Started</a>
                                                    <span>Get a Free Trial</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInRight" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                 className="pricing-one__line" />
                                                <img src="/assets/images/shapes/pricing-icon-1-3.png" alt=""
                                                     className="pricing-one__icon" />
                                                    <h3>$40.00</h3>
                                                    <p>Ultimate Pack</p>
                                                    <ul className="list-unstyled pricing-one__list">
                                                        <li><i className="fa fa-check"></i> Extra features</li>
                                                        <li><i className="fa fa-check"></i> Lifetime free support</li>
                                                        <li><i className="fa fa-check"></i> Upgrate options</li>
                                                        <li><i className="fa fa-check"></i> Full access</li>
                                                    </ul>

                                                    <a href="#" className="thm-btn pricing-one__btn">Get Started</a>
                                                    <span>Get a Free Trial</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div id="year" style={{ display: this.state.year ? 'block' : 'none'}}>
                            <div className="row">
                                <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                 className="pricing-one__line" />
                                                <img src="/assets/images/shapes/pricing-icon-1-1.png" alt=""
                                                     className="pricing-one__icon" />
                                                    <h3>$99.00</h3>
                                                    <p>Basic Pack</p>
                                                    <ul className="list-unstyled pricing-one__list">
                                                        <li><i className="fa fa-check"></i> Extra features</li>
                                                        <li><i className="fa fa-check"></i> Lifetime free support</li>
                                                        <li><i className="fa fa-check"></i> Upgrate options</li>
                                                        <li><i className="fa fa-check"></i> Full access</li>
                                                    </ul>

                                                    <a href="#" className="thm-btn pricing-one__btn">Get Started</a>
                                                    <span>Get a Free Trial</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                 className="pricing-one__line" />
                                                <img src="/assets/images/shapes/pricing-icon-1-2.png" alt=""
                                                     className="pricing-one__icon" />
                                                    <h3>$199.00</h3>
                                                    <p>Standard Pack</p>
                                                    <ul className="list-unstyled pricing-one__list">
                                                        <li><i className="fa fa-check"></i> Extra features</li>
                                                        <li><i className="fa fa-check"></i> Lifetime free support</li>
                                                        <li><i className="fa fa-check"></i> Upgrate options</li>
                                                        <li><i className="fa fa-check"></i> Full access</li>
                                                    </ul>

                                                    <a href="#" className="thm-btn pricing-one__btn">Get Started</a>
                                                    <span>Get a Free Trial</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 wow fadeInRight" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                 className="pricing-one__line" />
                                                <img src="/assets/images/shapes/pricing-icon-1-3.png" alt=""
                                                     className="pricing-one__icon" />
                                                    <h3>$299.00</h3>
                                                    <p>Ultimate Pack</p>
                                                    <ul className="list-unstyled pricing-one__list">
                                                        <li><i className="fa fa-check"></i> Extra features</li>
                                                        <li><i className="fa fa-check"></i> Lifetime free support</li>
                                                        <li><i className="fa fa-check"></i> Upgrate options</li>
                                                        <li><i className="fa fa-check"></i> Full access</li>
                                                    </ul>
                                                    <a href="#" className="thm-btn pricing-one__btn">Get Started</a>
                                                    <span>Get a Free Trial</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}