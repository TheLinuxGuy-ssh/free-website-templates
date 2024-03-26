import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render(){
        return (

            <section className="fact-one">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Over 2200 <span>Projects</span> <br /> Completed.
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 4789 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 6400 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 960 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">success</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 378 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}