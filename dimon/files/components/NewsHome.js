import React from 'react';
import Link from 'next/link';

const NewsHome = () => {
        return (

            <section className="blog-one blog-one__home thm-gray-bg" id="news">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Checkout Our <span>Latest</span> <br /> News & Articles.
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/blog/blog-1-1.jpg" alt="" />
                                    <Link href="/news-details">
                                        <a className="blog-one__more-link"><i
                                            className="fa fa-link"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><a href="#">22 Oct, 2019</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <Link href="/news-details">
                                        <a>Pre and post launch mobile app marketing pitfalls to
                                            avoid</a>
                                        </Link>
                                    </h3>
                                    <Link href="/news-details">
                                    <a className="blog-one__link">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/blog/blog-1-2.jpg" alt="" />
                                    <Link href="/news-details">
                                        <a className="blog-one__more-link"><i
                                            className="fa fa-link"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><a href="#">22 Oct, 2019</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <Link href="/news-details">
                                        <a>It is all exactly as i said, but i don't like it
                                            let's unpack
                                            that</a>
                                        </Link>
                                    </h3>
                                    <Link href="/news-details">
                                    <a className="blog-one__link">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/blog/blog-1-3.jpg" alt="" />
                                    <Link href="/news-details">
                                        <a className="blog-one__more-link"><i
                                            className="fa fa-link"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><a href="#">22 Oct, 2019</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <Link href="/news-details">
                                        <a>I just wanted to give you a heads-up, or this you
                                            feel you
                                            would</a>
                                        </Link>
                                    </h3>
                                    <Link href="/news-details">
                                    <a className="blog-one__link">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default NewsHome;