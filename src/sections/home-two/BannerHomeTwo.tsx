'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import images
import logo1 from '../../../public/assets/images/resources/logo-1.png';
import homeShowcase1 from '../../../public/assets/images/home-showcase/home-showcase-1-1.jpg';
import homeShowcase2 from '../../../public/assets/images/home-showcase/home-showcase-1-2.jpg';
import homeShowcase3 from '../../../public/assets/images/home-showcase/home-showcase-1-3.jpg';
import slidimg1 from '../../../public/assets/images/shapes/main-slider-shape-1.png';
import slidimg2 from '../../../public/assets/images/resources/main-slider-img-1.jpg';
import itembg1 from '../../../public/assets/images/backgrounds/slider-1-1.jpg';
import itembg2 from '../../../public/assets/images/backgrounds/slider-1-2.jpg';
import itembg3 from '../../../public/assets/images/backgrounds/slider-1-3.jpg';
import FreshFlowContext from '@/components/context/FreshFlowContext';

// Define types
interface SlideTitle {
    line1: string;
    line2: string;
    span1: string;
    span2: string;
}

interface SlideData {
    id: number;
    backgroundImage: string;
    title: SlideTitle;
    text1: string;
    text2: string;
    buttonText: string;
    buttonLink: string;
}

// Array of slide data
const slideData: SlideData[] = [
    {
        id: 1,
        backgroundImage: itembg1.src,
        title: {
            line1: 'Professional',
            line2: 'Cleaning',
            span1: ' You Can',
            span2: 'Trust!',
        },
        text1: 'Experience top-notch cleaning services tailored to your needs, ensuring',
        text2: 'spotless results, healthier environments',
        buttonText: 'Get Started',
        buttonLink: '/about',
    },
    {
        id: 2,
        backgroundImage: itembg2.src,
        title: {
            line1: 'Professional',
            line2: 'Cleaning',
            span1: ' You Can',
            span2: 'Trust!',
        },
        text1: 'Experience top-notch cleaning services tailored to your needs, ensuring',
        text2: 'spotless results, healthier environments',
        buttonText: 'Get Started',
        buttonLink: '/about',
    },
    {
        id: 3,
        backgroundImage: itembg3.src,
        title: {
            line1: 'Professional',
            line2: 'Cleaning',
            span1: ' You Can',
            span2: 'Trust!',
        },
        text1: 'Experience top-notch cleaning services tailored to your needs, ensuring',
        text2: 'spotless results, healthier environments',
        buttonText: 'Get Started',
        buttonLink: '/about',
    },
];

interface ContextType {
    setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const BannerHomeTwo: React.FC = () => {
    const context: ContextType | null = useContext(FreshFlowContext);
    if (!context) {
        throw new Error("FreshFlowContext is null");
    }
    const { setIsMobileOpen, setSideBar } = context;
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <header className="main-header-two">
                <div className="main-header-two__wrap">
                    <div className="main-header-two__logo">
                        <Link href="/">
                            <Image src={logo1} alt="Logo" />
                        </Link>
                    </div>

                    <div className="main-header-two__content">
                        <div className="main-menu-two__top">
                            <div className="main-menu-two__top-inner">
                                <ul className="list-unstyled main-menu-two__contact-list">
                                    <li>
                                        <div className="icon">
                                            <i className="icon-mail"></i>
                                        </div>
                                        <div className="text">
                                            <p>
                                                <Link href="mailto:support@example.com">support@example.com</Link>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-phone-call"></i>
                                        </div>
                                        <div className="text">
                                            <p>
                                                <Link href="tel:1212345678900">+12 (123) 456 78900</Link>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-pin-1"></i>
                                        </div>
                                        <div className="text">
                                            <p>684 West College St. Sun City, USA</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="main-menu-two__top-social-box">
                                    <h4 className="main-menu-two__top-social-title">Follow Us</h4>
                                    <div className="main-menu-two__top-social">
                                        <Link href="#" aria-label="Facebook">
                                            <span className="icon-facebook-app-symbol"></span>
                                        </Link>
                                        <Link href="#" aria-label="Pinterest">
                                            <span className="icon-pinterest"></span>
                                        </Link>
                                        <Link href="#" aria-label="LinkedIn">
                                            <span className="icon-linkedin-big-logo"></span>
                                        </Link>
                                        <Link href="#" aria-label="Instagram">
                                            <span className="icon-instagram"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav className="main-menu main-menu-two">
                            <div className="main-menu-two__wrapper">
                                <div className="main-menu-two__wrapper-inner">
                                    <div className="main-menu-two__left">
                                        <div className="main-menu-two__logo">
                                            <Link href="/">
                                                <Image src={logo1} alt="Logo" />
                                            </Link>
                                        </div>

                                        <div className="main-menu-two__call">
                                            <div className="main-menu-two__call-icon">
                                                <i className="icon-phone-call"></i>
                                            </div>
                                            <div className="main-menu-two__call-content">
                                                <p className="main-menu-two__call-sub-title">Call Us Any Time</p>
                                                <h5 className="main-menu-two__call-number">
                                                    <Link href="tel:12004578960">+12 (00) 457 8960</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="main-menu-two__main-menu-box">
                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsMobileOpen((pre: boolean) => !pre);
                                            }}
                                            className="mobile-nav__toggler"
                                        >
                                            <i className="fa fa-bars"></i>
                                        </Link>

                                        <ul className="main-menu__list">
                                            <li className="dropdown megamenu current">
                                                <Link href="/">Home</Link>
                                                <ul>
                                                    <li>
                                                        <section className="home-showcase">
                                                            <div className="container">
                                                                <div className="home-showcase__inner">
                                                                    <div className="row">
                                                                        <div className="col-lg-3">
                                                                            <div className="home-showcase__item">
                                                                                <div className="home-showcase__image">
                                                                                    <Image src={homeShowcase1} alt="Home Page 01" />
                                                                                    <div className="home-showcase__buttons">
                                                                                        <Link href="/" className="thm-btn home-showcase__buttons__item">
                                                                                            View Page
                                                                                            <span className="icon-diagonal-arrow"></span>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <h3 className="home-showcase__title">Home Page 01</h3>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-3">
                                                                            <div className="home-showcase__item">
                                                                                <div className="home-showcase__image">
                                                                                    <Image src={homeShowcase2} alt="Home Page 02" />
                                                                                    <div className="home-showcase__buttons">
                                                                                        <Link href="/home-2" className="thm-btn home-showcase__buttons__item">
                                                                                            View Page
                                                                                            <span className="icon-diagonal-arrow"></span>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <h3 className="home-showcase__title">Home Page 02</h3>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-3">
                                                                            <div className="home-showcase__item">
                                                                                <div className="home-showcase__image">
                                                                                    <Image src={homeShowcase3} alt="Home Page 03" />
                                                                                    <div className="home-showcase__buttons">
                                                                                        <Link href="/home-3" className="thm-btn home-showcase__buttons__item">
                                                                                            View Page
                                                                                            <span className="icon-diagonal-arrow"></span>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <h3 className="home-showcase__title">Home Page 03</h3>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-3">
                                                                            <div className="home-showcase__item">
                                                                                <div className="home-showcase__image">
                                                                                    <Image src={homeShowcase1} alt="Home Dark" />
                                                                                    <div className="home-showcase__buttons">
                                                                                        <Link href="/single-page" className="thm-btn home-showcase__buttons__item">
                                                                                            View
                                                                                            <span className="icon-diagonal-arrow"></span>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <h3 className="home-showcase__title">Single Page</h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <Link href="/about">About</Link>
                                            </li>

                                            <li className="dropdown">
                                                <Link href="#">Pages</Link>
                                                <ul className="shadow-box">
                                                    <li><Link href="/team">Team</Link></li>
                                                    <li><Link href="/team-details">Team Details</Link></li>
                                                    <li><Link href="/projects">Projects</Link></li>
                                                    <li><Link href="/projects-carousel">Projects Carousel</Link></li>
                                                    <li><Link href="/project-details">Project Details</Link></li>
                                                    <li><Link href="/testimonials">Testimonials</Link></li>
                                                    <li><Link href="/testimonials-carousel">Testimonial Carousel</Link></li>
                                                    <li><Link href="/pricing">Pricing</Link></li>
                                                    <li><Link href="/pricing-carousel">Pricing Carousel</Link></li>
                                                    <li><Link href="/gallery">Gallery</Link></li>
                                                    <li><Link href="/faq">FAQs</Link></li>
                                                    <li><Link href="/error-404">404 Error</Link></li>
                                                    <li><Link href="/coming-soon">Coming Soon</Link></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown">
                                                <Link href="#">Services</Link>
                                                <ul className="shadow-box">
                                                    <li><Link href="/services">Services</Link></li>
                                                    <li><Link href="/residential-cleaning">Residential Cleaning</Link></li>
                                                    <li><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                                    <li><Link href="/deep-cleaning">Deep Cleaning</Link></li>
                                                    <li><Link href="/office-cleaning">Office Cleaning</Link></li>
                                                    <li><Link href="/sanitizing-mopping">Sanitizing & Mopping</Link></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown">
                                                <Link href="#">Shop</Link>
                                                <ul className="shadow-box">
                                                    <li className="dropdown">
                                                        <Link href="#">Products</Link>
                                                        <ul>
                                                            <li><Link href="/products-left">Left Sidebar</Link></li>
                                                            <li><Link href="/products-right">Right Sidebar</Link></li>
                                                            <li><Link href="/products">No Sidebar</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/product-details">Product Details</Link></li>
                                                    <li><Link href="/cart">Cart</Link></li>
                                                    <li><Link href="/checkout">Checkout</Link></li>
                                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                                    <li><Link href="/sign-up">Sign Up</Link></li>
                                                    <li><Link href="/login">Login</Link></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown">
                                                <Link href="#">Blog</Link>
                                                <ul className="shadow-box">
                                                    <li><Link href="/blog">Blog</Link></li>
                                                    <li><Link href="/blog-carousel">Blog Carousel</Link></li>
                                                    <li><Link href="/blog-list">Blog List</Link></li>
                                                    <li><Link href="/blog-details">Blog Details</Link></li>
                                                </ul>
                                            </li>

                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="main-menu-two__right">
                                        <div className="main-menu-two__search-box">
                                            <form onSubmit={handleSearch} action="#" className="main-menu-two__search-form">
                                                <input type="search" name="search" placeholder="Search..." />
                                                <button type="submit">
                                                    <i className="icon-search"></i>
                                                </button>
                                            </form>
                                        </div>

                                        <div className="main-menu-two__nav-sidebar-icon">
                                            <Link
                                                href='#'
                                                className="navSidebar-button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSideBar((pre: boolean) => !pre);
                                                }}
                                            >
                                                <span className="icon-app"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="main-slider">
                <div className="main-slider__wrap">
                    <div className="swiper-container main-slider-style1">
                        <Swiper
                            modules={[Navigation, Autoplay, EffectFade]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={1000}
                            onSwiper={setSwiperInstance}
                            className="main-slider-swiper"
                        >
                            {slideData.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className="slid-item">
                                        <div className="main-slider__bg" style={{ backgroundImage: `url(${slide.backgroundImage})` }}></div>
                                        <div className="main-slider__shape-bg float-bob-y"></div>
                                        <div className="main-slider__shape-1 float-bob-y">
                                            <Image src={slidimg1} alt="Slider shape" />
                                        </div>
                                        <div className="main-slider__img-box">
                                            <div className="main-slider__img">
                                                <Image src={slidimg2} alt="Slider content" />
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="main-slider__content">
                                                <h2 className="main-slider__title">
                                                    {slide.title.line1}
                                                    <br />
                                                    {slide.title.line2}
                                                    <span>{slide.title.span1}</span>
                                                    <br />
                                                    <span>{slide.title.span2}</span>
                                                </h2>
                                                <p className="main-slider__text">
                                                    {slide.text1}
                                                    <br />
                                                    {slide.text2}
                                                </p>
                                                <div className="main-slider__btn-box">
                                                    <Link href={slide.buttonLink} className="thm-btn">
                                                        {slide.buttonText}
                                                        <span>
                                                            <i className="icon-diagonal-arrow"></i>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom navigation buttons */}
                        <div className="main-slider__nav">
                            <button onClick={() => swiperInstance?.slideNext()} className="swiper-button-prev" aria-label="Previous Slide" type="button">
                                <i className="icon-diagonal-arrow"></i>
                            </button>
                            <button onClick={() => swiperInstance?.slidePrev()} className="swiper-button-next" aria-label="Next Slide" type="button">
                                <i className="icon-diagonal-arrow"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerHomeTwo;