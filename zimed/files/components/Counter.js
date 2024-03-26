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

    render() {
        return (
            <div>
            <section className="funfact-one">
                <img src="/assets/images/shapes/pricing-shape-1.png" alt="" className="funfact-one__shape-1" />
                <img src="/assets/images/shapes/pricing-shape-2.png" alt="" className="funfact-one__shape-2" />
                <img src="/assets/images/shapes/pricing-shape-3.png" alt="" className="funfact-one__shape-3" />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="funfact-one__single">
                                <h3 className="counter">
                                    <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 7842 : 0} /></VisibilitySensor>
                                </h3>
                                <p>Downloads</p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="funfact-one__single">
                                <h3 className="counter">
                                    <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 6020 : 0} /></VisibilitySensor>
                                </h3>
                                <p>Likes</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="funfact-one__single">
                                <h3 className="counter">
                                    <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 360 : 0} /></VisibilitySensor>
                                </h3>
                                <p>5 Star Rating</p>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="funfact-one__single">
                                <h3 className="counter">
                                    <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 200 : 0} /></VisibilitySensor>
                                </h3>
                                <p>Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </div>
        );
    }
}