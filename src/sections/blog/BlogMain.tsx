import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Allblogs } from './blogContent';
import { Blog } from '@/types/home-one';

const BlogMain: React.FC = () => {
    return (
        <section className="blog-one">
            <div className="blog-one__shape-bg" >
            </div>
            <div className="container">
                <div className="blog-one__top">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-box">
                                <div className="section-title__tagline-shape"></div>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <span className="section-title__tagline">OUR INSIGHT</span>
                        </div>
                        <h2 className="section-title__title title-animation">Discover Insights and <span>Tips </span> <br />
                            <span>in Our Latest Articles</span>
                        </h2>
                    </div>
                    <div className="blog-one__btn-box">
                        <Link href={"#"} className="thm-btn">
                            View All Blogs<span><i className="icon-diagonal-arrow"></i></span>
                        </Link>
                    </div>
                </div>
                <div className="blog-one__bottom">
                    <div className="row">
                        {
                            Allblogs.map((item: Blog, i) => {
                                return (
                                    <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                        data-wow-duration="1500ms">
                                        <div className="blog-one__single">
                                            <div className="blog-one__img-box">
                                                <div className="blog-one__img">
                                                    <Image src={item?.image} alt="" width={300} height={300} />
                                                </div>
                                                <div className="blog-one__date">
                                                    <p>{item?.date?.day}</p>
                                                    <span>{item?.date?.month}</span>
                                                </div>
                                                <ul className="list-unstyled blog-one__tag">
                                                    <li><Link href={"/blog-details"}>{item?.links?.link1}</Link></li>
                                                    <li><Link href={"/blog-details"}>{item?.links?.link2}</Link></li>
                                                </ul>
                                            </div>
                                            <div className="blog-one__content">
                                                <h3 className="blog-one__title">
                                                    <Link href={"/blog-details"}>{item?.title}</Link>
                                                </h3>
                                                <p className="blog-one__text">{item?.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="blog-page__pagination">
                    <div className="blog-list__pagination">
                        <ul className="pg-pagination list-unstyled">
                            <li className="prev">
                                <button aria-label="prev"><i className="fas fa-arrow-left"></i></button>
                            </li>
                            <li className="count active"><button >01</button></li>
                            <li className="count"><button >02</button></li>
                            <li className="count"><button >03</button></li>
                            <li className="next">
                                <button aria-label="Next"><i className="fas fa-arrow-right"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogMain;