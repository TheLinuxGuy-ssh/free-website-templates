import React,{ Component } from 'react';
import ModalVideo from 'react-modal-video';

export default class Video extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render(){
        return (
            <section className="video-one">
                <div className="container">
                    <div className="video-one__box wow fadeInUp" data-wow-duration="1500ms">
                        <img src="/assets/images/resources/video-1-1.jpg" alt="" />
                            <div className="video-one__content">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='aitb---aDYM' onClose={() => this.setState({isOpen: false})} />
                                <div onClick={this.openModal} className="video-popup"><i
                                    className="fa fa-play"></i></div>
                                <h3>Watch Our Video</h3>
                            </div>
                    </div>
                </div>
            </section>

        )
    }
}