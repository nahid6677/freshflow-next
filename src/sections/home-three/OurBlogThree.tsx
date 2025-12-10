"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BlogHomeTow } from '@/types/home-tow';
import TextAnimation from '@/components/elements/TextAnimation';
import { motion } from "framer-motion"
import { blogsHomeTow } from '../home-two/contents';
const OurBlogThree: React.FC = () => {
    return (
        <section className="blog-two">
            <div className="blog-two__shape-bg"> </div>
            <div className="blog-two__shape-bg-2"> </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Blogs</span>
                    </div>
                    <h2 className="section-title__title title-custom-animation">
                        <TextAnimation text='Destination for Inspiration' textColor='black' />
                        <TextAnimation text='Tips, Plan and Stories' />
                    </h2>
                </div>
                <div className="row">
                    {
                        blogsHomeTow.map((item: BlogHomeTow, i: number) => <motion.div
                            initial={{ x: (i + 1) % 2 === 0 ? 25 : -25, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true, amount: 0.1 }}
                            key={i} className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                            <div className="blog-two__single">
                                <div className="blog-two__img">
                                    <Image src={item?.image} alt="blog image" />
                                </div>
                                <div className="blog-two__content">
                                    <ul className="list-unstyled blog-two__tags">
                                        {
                                            item?.blogLink.map((L, j) => <li key={j}><Link href={L.lin}>{L?.text}</Link></li>)
                                        }
                                    </ul>
                                    <h3 className="blog-two__title">
                                        <Link href={item?.titleLink}>{item?.title}</Link>
                                    </h3>
                                    <ul className="blog-two__meta list-unstyled">
                                        <li>
                                            <Link href={item?.titleLink}>
                                                <span className="icon-calendar"></span>
                                                {item?.date}
                                            </Link>

                                        </li>
                                        <li>
                                            <Link href={item?.titleLink}>
                                                <span className="icon-bubble-chat"></span>
                                                {item?.comment} Comments
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="blog-two__btn-and-user">
                                        <div className="blog-two__btn">
                                            <Link className="thm-btn" href={item?.titleLink}>
                                                View Details
                                                <span><i className="icon-diagonal-arrow"></i></span>
                                            </Link>
                                        </div>
                                        <div className="blog-two__user">
                                            <div className="blog-two__user-name-box">
                                                <div className="blog-two__user-name-dot"></div>
                                                <h4 className="blog-two__user-name">{item?.username}</h4>
                                            </div>
                                            <p className="blog-two__user-sub-title">{item?.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurBlogThree;