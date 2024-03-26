import React,{ Component } from 'react';

export default class Footer extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          scrollBtn: false
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.scrollTop = this.scrollTop.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

      if (window.scrollY > 70) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div>
                <footer className="site-footer">
                    <img src="/assets/images/shapes/footer-shape-1.png" className="site-footer__shape-1" alt=""/>
                        <img src="/assets/images/shapes/footer-shape-2.png" className="site-footer__shape-2" alt=""/>
                            <img src="/assets/images/shapes/footer-shape-3.png" className="site-footer__shape-3" alt=""/>
                                <div className="site-footer__upper">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="footer-widget footer-widget__about">
                                                    <a className="footer-widget__logo" href="/"><img
                                                        src="/assets/images/logo-1-1.png" width="105"
                                                        alt="Awesome Image"/></a>
                                                    <p>Lorem Ipsum is simply dummy text the printing and setting
                                                        industry. Lorm Ipsum has been the industry's stanard dummy text
                                                        ever. </p>
                                                    <p><a href="mailto:needhelp@zimed.com">needhelp@zimed.com</a> <br/>
                                                        <a href="tel:666-888-0000">666 888 0000</a></p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="footer-widget footer-widget__links">
                                                    <h3 className="footer-widget__title">Explore</h3>
                                                    <div className="footer-widget__links-wrap">
                                                        <ul className="list-unstyled">
                                                            <li><a href="#">About us</a></li>
                                                            <li><a href="#">Our Team</a></li>
                                                            <li><a href="#">All Features</a></li>
                                                            <li><a href="#">Our Services</a></li>
                                                            <li><a href="#">Latest Blog</a></li>
                                                        </ul>

                                                        <ul className="list-unstyled">
                                                            <li><a href="#">Help</a></li>
                                                            <li><a href="#">Support</a></li>
                                                            <li><a href="#">Contact us</a></li>
                                                            <li><a href="#">Privacy Policy</a></li>
                                                            <li><a href="#">Terms & Condition</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4">
                                                <div className="footer-widget footer-widget__subscribe">
                                                    <h3 className="footer-widget__title">Subscribe</h3>
                                                    <form className="footer-widget__mc-form mc-form" data-url="">
                                                        <input type="text" name="email" placeholder="Email address" />
                                                            <button type="submit"
                                                                    className="thm-btn footer-widget__mc-btn">Register
                                                                Now
                                                            </button>
                                                    </form>
                                                    <div className="mc-form__response"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="site-footer__bottom">
                                    <div className="container">
                                        <div className="inner-container">
                                            <div className="site-footer__social">
                                                <a className="fab fa-facebook-f" href="#"></a>
                                                <a className="fab fa-twitter" href="#"></a>
                                                <a className="fab fa-instagram" href="#"></a>
                                                <a className="fab fa-pinterest-p" href="#"></a>
                                            </div>
                                            <p>© copyright 2020 by Layerdrops.com</p>
                                        </div>

                                    </div>

                                </div>
                </footer>
                <div onClick={this.scrollTop} className="scroll-to-target scroll-to-top" style={{display: this.state.scrollBtn ? 'block' : 'none'}}><i
                    className="fa fa-angle-up"></i></div>

                <div className="side-menu__block">


                    <div className="side-menu__block-overlay custom-cursor__overlay">
                        <div className="cursor"></div>
                        <div className="cursor-follower"></div>
                    </div>
                    <div className="side-menu__block-inner ">
                        <div className="side-menu__top justify-content-end">

                            <a href="#" className="side-menu__toggler side-menu__close-btn"><img
                                src="assets/images/shapes/close-1-1.png" alt=""/></a>
                        </div>

                        <nav className="mobile-nav__container">

                        </nav>
                        <div className="side-menu__sep"></div>

                        <div className="side-menu__content">
                            <p>Lorem Ipsum is simply dummy text the printing and setting industry. Lorm Ipsum has been
                                the industry's stanard dummy text ever. </p>
                            <p><a href="mailto:needhelp@zimed.com">needhelp@zimed.com</a> <br/> <a
                                href="tel:888-999-0000">888 999 0000</a></p>
                            <div className="side-menu__social">
                                <a className="fab fa-facebook-f" href="#"></a>
                                <a className="fab fa-twitter" href="#"></a>
                                <a className="fab fa-instagram" href="#"></a>
                                <a className="fab fa-pinterest-p" href="#"></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}