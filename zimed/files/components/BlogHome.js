import React,{ Component } from 'react';
import Link from 'next/link';

const BlogHome = () => {
        return (

            <section className="blog-one blog-one__home" id="blog">
                <img src="/assets/images/shapes/blog-shape-1-1.png" alt="" className="blog-one__shape-1"/>
                    <div className="container">
                        <div className="block-title text-center">
                            <span className="block-title__bubbles"></span>
                            <p>Checkout Latest Posts</p>
                            <h3>News & Articles</h3>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__image">
                                        <img src="/assets/images/blog/blog-1-1.jpg" alt=""/>
                                    </div>

                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                            <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                        </ul>

                                        <h3>
                                            <Link href="/blog-details">
                                                <a>Pre and post launch mobile app marketing
                                                    pitfalls to avoid
                                                </a>
                                            </Link>
                                        </h3>
                                        <Link href="/blog-details">
                                        <a className="blog-one__link"><i
                                            className="zimed-icon-right-arrow"></i></a>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__image">
                                        <img src="/assets/images/blog/blog-1-2.jpg" alt=""/>
                                    </div>

                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                            <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                        </ul>

                                        <h3>
                                            <Link href="/blog-details">
                                                <a>It is all exactly as i said, but i don't like
                                                    it let's unpack
                                                    that
                                                </a>
                                            </Link>
                                        </h3>

                                        <Link href="/blog-details">
                                        <a className="blog-one__link"><i
                                            className="zimed-icon-right-arrow"></i></a>
                                        </Link>

                                    </div>

                                </div>

                            </div>
                            <div className="col-lg-4 wow fadeInRight" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__image">
                                        <img src="/assets/images/blog/blog-1-3.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                            <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                        </ul>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>I just wanted to give you a heads-up, or this
                                                    you feel you
                                                    would
                                                </a>
                                            </Link>
                                        </h3>
                                        <Link href="/blog-details">
                                        <a className="blog-one__link"><i
                                            className="zimed-icon-right-arrow"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
}
export default BlogHome;