"use client"
import React, { useState } from 'react';
import aboutSec12 from "../../../public/assets/images/shapes/testimonial-two-shape-1.png"
import aboutSec13 from "../../../public/assets/images/shapes/testimonial-two-shape-2.png"
import aboutSec8 from "../../../public/assets/images/testimonial/testimonial-client-1-1.jpg"
import aboutSec9 from "../../../public/assets/images/testimonial/testimonial-client-1-2.jpg"
import aboutSec10 from "../../../public/assets/images/testimonial/testimonial-client-1-3.jpg"
import aboutSec11 from "../../../public/assets/images/testimonial/testimonial-client-1-3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TextAnimation from '@/components/elements/TextAnimation';


interface Testimonial {
    id: number,
    topTitle: string,
    description: string,
    clientName: string,
    subTitle: string,
    image: string | StaticImageData,
}

export const testimonialCarosel: Testimonial[] = [
    {
        id: 1,
        topTitle: "Awesome Services",
        description: `The cleaning team has been an absolute lifesaver! They go 
            above and beyond to make sure my home looks immaculate. Every surface sparkles, and they
            even take care of the small details that most services overlook. I can’t recommend them enough!`,
        clientName: `– David R.`,
        subTitle: `Founder & CEO`,
        image: aboutSec8
    },
    {
        id: 2,
        topTitle: "Excellent Convesation",
        description: `I’ve been using their services for over a year, and they’ve
            never let me down. The cleaners are punctual, friendly, and incredibly professional.
            It’s such a relief knowing I can rely on them to take care of my home while I focus on
            my busy sheduls.`,
        clientName: `– James T.`,
        subTitle: `Ui/Ux Designer`,
        image: aboutSec9
    },
    {
        id: 3,
        topTitle: "Awesome Services",
        description: `I needed a deep cleaning before hosting a big family event,
            and they delivered beyond my expectations! The team asked about my specific needs and
            ensured every corner of my home was spotless. They truly care about their customers and
            it shows`,
        clientName: `- Sophia L.`,
        subTitle: `Web Developer`,
        image: aboutSec10
    },
    {
        id: 4,
        topTitle: "Awesome Services",
        description: `The cleaning team has been an absolute lifesaver! They go 
            above and beyond to make sure my home looks immaculate. Every surface sparkles, and they
            even take care of the small details that most services overlook. I can’t recommend them enough!`,
        clientName: `- Sophia L.`,
        subTitle: `Web Developer`,
        image: aboutSec11
    },
    {
        id: 5,
        topTitle: "Awesome Services",
        description: `I needed a deep cleaning before hosting a big family event,
            and they delivered beyond my expectations! The team asked about my specific needs and
            ensured every corner of my home was spotless. They truly care about their customers and
            it shows`,
        clientName: `- Sophia L.`,
        subTitle: `Web Developer`,
        image: aboutSec10
    },

]



const TestimonialTow: React.FC = () => {

    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="testimonial-two">
            <div className="testimonial-two__shape-bg-1"
            ></div>
            <div className="testimonial-two__shape-1">
                <Image src={aboutSec12} alt="" />
            </div>
            <div className="testimonial-two__shape-2">
                <Image src={aboutSec13} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Testimonial</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Hear from our satisfied' textColor='black' /> <br></br>
                        <TextAnimation text='clients who praise' />
                    </h2>
                </div>
                <div className="testimonial-two__carousel  owl-theme owl-carousel">
                    <Swiper
                        modules={[Navigation, Autoplay, EffectFade]}
                        spaceBetween={10}
                        slidesPerView={3}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={1000}
                        onSwiper={setSwiperInstance}
                        className="main-slider-swiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {
                            testimonialCarosel.map((item) => {
                                return <SwiperSlide key={item?.id}>
                                    <div className="item">
                                        <div className="testimonial-two__single">
                                            <div className="testimonial-two__top">
                                                <div className="testimonial-two__top-title">
                                                    <h4>{item?.topTitle}</h4>
                                                </div>
                                                <div className="testimonial-two__top-quote">
                                                    <span className="icon-left"></span>
                                                </div>
                                            </div>
                                            <p className="testimonial-two__text">{item?.description}</p>
                                            <div className="testimonial-two__bottom">
                                                <div className="testimonial-two__star">
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                    <span className="icon-star"></span>
                                                    <span className="icon-favorite"></span>
                                                    <span className="icon-favorite"></span>
                                                </div>
                                                <div className="testimonial-two__client-info">
                                                    <div className="testimonial-two__client-img-box">
                                                        <div className="testimonial-two__client-img">
                                                            <Image src={item?.image} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-two__client-content">
                                                        <h3 className="testimonial-two__client-name">
                                                            <Link href={"/testimonials"}>{item?.clientName}</Link>
                                                        </h3>
                                                        <p className="testimonial-two__client-sub-title">{item?.subTitle}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                    <div className="owl-nav" style={{ zIndex: "111" }}>
                        <button onClick={() => swiperInstance?.slideNext()}
                            className="owl-prev"
                            aria-label="Previous Slide"
                            type="button">
                            <span className="icon-diagonal-arrow"></span>
                        </button>
                        <button onClick={() => swiperInstance?.slidePrev()}
                            className="owl-next"
                            aria-label="Next Slide"
                            type="button">
                            <span className="icon-diagonal-arrow"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialTow;