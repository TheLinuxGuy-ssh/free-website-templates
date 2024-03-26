import React from 'react';

const BlogDetails = () => {
        return (
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details__content">
                                <div className="blog-details__image">
                                    <img src="/assets/images/blog/blog-d-1.jpg" alt=""/>
                                </div>
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                </ul>
                                <h3>Launch New Mobile App Marketing Pitfalls To Avoid</h3>
                                <p>There are many variations of passages of available but majority have alteration in
                                    some by inject
                                    humour or random words. There are many variations of passages of Lorem Ipsum
                                    available, but the
                                    majority have suffered alteration in some form, by injected humour, or randomised
                                    words which
                                    don't look even slightly believable. If you are going to use a passage of Lorem
                                    Ipsum, you need
                                    to be sure there isn't anything embarrassing hidden in the middle of text. All the
                                    Lorem Ipsum
                                    generators on the Internet tend to repeat predefined chunks as necessary, making
                                    this the first
                                    true generator on the Internet. It uses a dictionary of over 200 Latin words,
                                    combined with a
                                    handful of model sentence structures, to generate Lorem Ipsum which looks
                                    reasonable. The
                                    generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                                    non-characteristic words etc.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal
                                    distribution of letters, as opposed to using 'Content here, content here', making it
                                    look like
                                    readable English. Many desktop publishing packages and web page editors now use
                                    Lorem Ipsum as
                                    their default model text, and a search for 'lorem ipsum' will uncover many web sites
                                    still in
                                    their infancy. Various versions have evolved over the years, sometimes by accident,
                                    sometimes on
                                    purpose injected humour and the like.</p>
                            </div>
                            <div className="blog-details__bottom">
                                <p className="blog-details__tags">
                                    <span>Tags:</span>
                                    <a href="#">Tour,</a>
                                    <a href="#">Travel,</a>
                                    <a href="#">beach</a>
                                </p>
                                <div className="blog-details__social site-footer__social">
                                    <a className="fab fa-facebook-f" href="#"></a>
                                    <a className="fab fa-twitter" href="#"></a>
                                    <a className="fab fa-instagram" href="#"></a>
                                    <a className="fab fa-pinterest-p" href="#"></a>
                                </div>
                            </div>

                            <div className="author-one">
                                <div className="author-one__image">
                                    <img src="/assets/images/blog/author-1-1.jpg" alt=""/>
                                </div>

                                <div className="author-one__content">
                                    <h3>Christine Eve</h3>
                                    <p>It has survived not only five centuries, but also the leap into electronic
                                        typesetting,
                                        remaining unchanged. It was popularised in the sheets containing.</p>
                                </div>

                            </div>

                            <div className="comment-one">
                                <h3 className="comment-one__title">2 Comments</h3>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="/assets/images/blog/comment-1-1.jpg" alt=""/>
                                    </div>

                                    <div className="comment-one__content">
                                        <h3>Roxie Harrison</h3>
                                        <div className="comment-one__date">20 Feb, 2020 <span>.</span> 4:00 pm</div>
                                        <p>Lorem Ipsum is simply dummy free text of the available printing and
                                            typesetting been the industry standard dummy text ever sincer condimentum
                                            purus.</p>
                                        <a href="#" className="thm-btn comment-one__btn">Reply</a>
                                    </div>

                                </div>

                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="/assets/images/blog/comment-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Jorge Glover</h3>
                                        <div className="comment-one__date">20 Feb, 2020 <span>.</span> 4:00 pm</div>
                                        <p>Lorem Ipsum is simply dummy free text of the available printing and
                                            typesetting been the industry standard dummy text ever sincer condimentum
                                            purus.</p>
                                        <a href="#" className="thm-btn comment-one__btn">Reply</a>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-form">
                                <h3 className="comment-form__title">Leave a Comment</h3>
                                <form action="#" className="contact-one__form contact-form-validated"
                                      noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="name" placeholder="Name"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="email" placeholder="Email"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="website" placeholder="Website"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="subject" placeholder="Subject"/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea name="message" placeholder="Message"></textarea>
                                            <button type="submit" className="thm-btn contact-one__form-btn">Post
                                                Comment
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-single sidebar__search">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="text" placeholder="Search here"/>
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>

                                </div>
                                <div className="sidebar-single sidebar__post">
                                    <h3 className="sidebar__title">Latest Posts</h3>
                                    <div className="sidebar__post-single">
                                        <img src="/assets/images/blog/lp-1-1.jpg" alt=""/>
                                            <h3><a href="/blog-details">Pre launch Mobile App Marketing Pitfalls</a>
                                            </h3>
                                    </div>
                                    <div className="sidebar__post-single">
                                        <img src="/assets/images/blog/lp-1-2.jpg" alt=""/>
                                            <h3><a href="/blog-details">Pre launch Mobile App Marketing Pitfalls</a>
                                            </h3>
                                    </div>
                                    <div className="sidebar__post-single">
                                        <img src="/assets/images/blog/lp-1-3.jpg" alt=""/>
                                            <h3><a href="/blog-details">Pre launch Mobile App Marketing Pitfalls</a>
                                            </h3>
                                    </div>
                                </div>
                                <div className="sidebar-single sidebar__cat">
                                    <h3 className="sidebar__title">Categories</h3>
                                    <ul className="list-unstyled sidebar__cat-list">
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Introductions</a></li>
                                        <li><a href="#">One Page Template</a></li>
                                        <li><a href="#">Parallax Effects</a></li>
                                        <li><a href="#">New Technologies</a></li>
                                        <li><a href="#">Video Backgrounds</a></li>
                                    </ul>
                                </div>
                                <div className="sidebar-single sidebar__tags">
                                    <h3 className="sidebar__title">Tags</h3>
                                    <div className="sidebar__tags-list">
                                        <a href="#">Business,</a>
                                        <a href="#">Agency,</a>
                                        <a href="#">Technology,</a>
                                        <a href="#">Parallax</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default BlogDetails;