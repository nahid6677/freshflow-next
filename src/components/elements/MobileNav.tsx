
"use client";

import React, { useContext, useState } from 'react';
import logo from "../../../public/assets/resources/newsletter-one-img-1-1.jpg"
import home_showcase_1 from "../../../public/assets/images/home-showcase/home-showcase-1-1.jpg";
import home_showcase_2 from "../../../public/assets/images/home-showcase/home-showcase-1-2.jpg";
import home_showcase_3 from "../../../public/assets/images/home-showcase/home-showcase-1-3.jpg";
import Link from 'next/link';
import Image from 'next/image';
import FreshFlowContext from '../context/FreshFlowContext';

const MobileNav: React.FC = () => {
    const context = useContext(FreshFlowContext);
    if (!context) throw new Error('context is null!')
    const { setIsMobileOpen, isMobileOpen } = context;
    const [isHomeOpen, setIsHomeOpen] = useState<boolean>(false);
    const [isPageOpen, setIsPagesOpen] = useState<boolean>(false);
    const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
    const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
    const [isBlogOpen, setIsBlogOpen] = useState<boolean>(false);
    const [product, setProducts] = useState<boolean>(false);
    const handleLinkClick = (): void => {
        setIsHomeOpen(false);
        setIsPagesOpen(false);
        setIsServicesOpen(false);
        setIsShopOpen(false);
        setIsBlogOpen(false);
        setProducts(false);
    };

    return (
        <div className={`mobile-nav__wrapper ${isMobileOpen ? 'expanded' : ''}`}>
            <div onClick={() => setIsMobileOpen((pre) => !pre)} className="mobile-nav__overlay mobile-nav__toggler"></div>
            <div className="mobile-nav__content">
                <span onClick={() => setIsMobileOpen((pre) => !pre)} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" aria-label="logo image" onClick={handleLinkClick}>
                        {/* <Image
                            src="/public/assets/resources/logo-2.png"
                            alt="Logo"
                            width={150}
                            height={100}
                        /> */}
                    </Link>
                </div>
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li className="dropdown megamenu current">
                            <a className={`${isHomeOpen ? 'expanded' : ''} `}>
                                Home
                                <button onClick={() => setIsHomeOpen(!isHomeOpen)} type="button" className={`${isHomeOpen ? 'expanded' : ''}  `}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </a>
                            <ul style={{ display: `${isHomeOpen ? 'block' : 'none'}` }}>
                                <li>
                                    <section className="home-showcase">
                                        <div className="container">
                                            <div className="home-showcase__inner">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <div className="home-showcase__item">
                                                            <div className="home-showcase__image">
                                                                <Image src={home_showcase_1} alt="home-one" />
                                                                <div className="home-showcase__buttons">
                                                                    <Link href="/" className='thm-btn home-showcase__buttons__item' onClick={handleLinkClick}>
                                                                        View Page
                                                                        <span className='icon-diagonal-arrow'></span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <h3 className='home-showcase__title'>
                                                                Home Page 01
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="home-showcase__item">
                                                            <div className="home-showcase__image">
                                                                <Image src={home_showcase_2} alt="home-tow" />
                                                                <div className="home-showcase__buttons">
                                                                    <Link href="/home-2" className='thm-btn home-showcase__buttons__item' onClick={handleLinkClick}>
                                                                        View Page
                                                                        <span className='icon-diagonal-arrow'></span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <h3 className='home-showcase__title'>
                                                                Home Page 02
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="home-showcase__item">
                                                            <div className="home-showcase__image">
                                                                <Image src={home_showcase_3} alt="home-three" />
                                                                <div className="home-showcase__buttons">
                                                                    <Link href="/home-3" className='thm-btn home-showcase__buttons__item' onClick={handleLinkClick}>
                                                                        View Page
                                                                        <span className='icon-diagonal-arrow'></span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <h3 className='home-showcase__title'>
                                                                Home Page 03
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="home-showcase__item">
                                                            <div className="home-showcase__image">
                                                                <Image src={home_showcase_1} alt="home-one single-page" />
                                                                <div className="home-showcase__buttons">
                                                                    <Link href="/" className='thm-btn home-showcase__buttons__item' onClick={handleLinkClick}>
                                                                        View
                                                                        <span className="icon-diagonal-arrow"></span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <h3 className="home-showcase__title">
                                                                Home Page 04
                                                            </h3>
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
                            <Link href="/about" onClick={handleLinkClick}>About</Link>
                        </li>
                        <li className="dropdown">
                            <a className={`${isPageOpen ? 'expanded' : ''}`}>
                                Pages
                                <button onClick={() => setIsPagesOpen(!isPageOpen)} type="button" className={`${isPageOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </a>
                            <ul style={{ display: `${isPageOpen ? 'block' : 'none'}` }}>
                                <li>
                                    <Link href="/team" onClick={handleLinkClick}>Team</Link>
                                </li>
                                <li>
                                    <Link href="/team-details" onClick={handleLinkClick}>Team Details</Link>
                                </li>
                                <li>
                                    <Link href="/projects" onClick={handleLinkClick}>Projects</Link>
                                </li>
                                <li>
                                    <Link href="/projects-carousel" onClick={handleLinkClick}>Projects Carousel</Link>
                                </li>
                                <li>
                                    <Link href="/project-details" onClick={handleLinkClick}>Project Details</Link>
                                </li>
                                <li>
                                    <Link href="/testimonials" onClick={handleLinkClick}>Testimonials</Link>
                                </li>
                                <li>
                                    <Link href="/testimonial-carousel" onClick={handleLinkClick}>Testimonial Carousel</Link>
                                </li>
                                <li>
                                    <Link href="/pricing" onClick={handleLinkClick}>Pricing</Link>
                                </li>
                                <li>
                                    <Link href="/pricing-carousel" onClick={handleLinkClick}>Pricing Carousel</Link>
                                </li>
                                <li>
                                    <Link href="/gallery" onClick={handleLinkClick}>Gallery</Link>
                                </li>
                                <li>
                                    <Link href="/faq" onClick={handleLinkClick}>FAQs</Link>
                                </li>
                                <li>
                                    <Link href="/error" onClick={handleLinkClick}>404 Error</Link>
                                </li>
                                <li>
                                    <Link href="/coming-soon" onClick={handleLinkClick}>Coming Soon</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='dropdown'>
                            <a className={`${isServicesOpen ? 'expanded' : ''}`}>
                                Services
                                <button onClick={() => setIsServicesOpen(!isServicesOpen)} type="button" className={`${isServicesOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </a>
                            <ul style={{ display: `${isServicesOpen ? 'block' : 'none'}` }}>
                                <li>
                                    <Link href="/services" onClick={handleLinkClick}>Services</Link>
                                </li>
                                <li>
                                    <Link href="/residential-cleaning" onClick={handleLinkClick}>Residential Cleaning</Link>
                                </li>
                                <li>
                                    <Link href="/commercial-cleaning" onClick={handleLinkClick}>Commercial Cleaning</Link>
                                </li>
                                <li>
                                    <Link href="/deep-cleaning" onClick={handleLinkClick}>Deep Cleaning</Link>
                                </li>
                                <li>
                                    <Link href="/office-cleaning" onClick={handleLinkClick}>Office Cleaning</Link>
                                </li>
                                <li>
                                    <Link href="/sanitizing-mopping" onClick={handleLinkClick}>Sanitizing & Mopping</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className={`${isShopOpen ? 'expanded' : ''}`}>
                                Shop
                                <button onClick={() => setIsShopOpen(!isShopOpen)} type="button" className={`${isShopOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </a>
                            <ul style={{ display: `${isShopOpen ? 'block' : 'none'}` }}>
                                <li>
                                    <a className={`${product ? 'expanded' : ''}`}>
                                        Products
                                        <button onClick={() => setProducts((pre => !pre))} className={`${product ? 'expanded' : ''}`}>
                                            <i className='fa fa-angle-down '></i>
                                        </button>
                                    </a>
                                    <ul style={{ display: `${product ? 'block' : 'none'}` }}>
                                        <li>
                                            <Link href="/products-left" onClick={handleLinkClick}>Left Sidebar</Link>
                                        </li>
                                        <li>
                                            <Link href="/products-right" onClick={handleLinkClick}>Right Sidebar</Link>
                                        </li>
                                        <li>
                                            <Link href="/products" onClick={handleLinkClick}>No Sidebar</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/product-details" onClick={handleLinkClick}>Product Details</Link>
                                </li>
                                <li>
                                    <Link href="/cart" onClick={handleLinkClick}>Cart</Link>
                                </li>
                                <li>
                                    <Link href="/checkout" onClick={handleLinkClick}>Checkout</Link>
                                </li>
                                <li>
                                    <Link href="/wishlist" onClick={handleLinkClick}>Wishlist</Link>
                                </li>
                                <li>
                                    <Link href="/signup" onClick={handleLinkClick}>Sign Up</Link>
                                </li>
                                <li>
                                    <Link href="/login" onClick={handleLinkClick}>Login</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className={`${isBlogOpen ? 'expanded' : ''}`}>
                                Blog
                                <button onClick={() => setIsBlogOpen(!isBlogOpen)} type="button" className={`${isBlogOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </a>
                            <ul style={{ display: `${isBlogOpen ? 'block' : 'none'}` }}>
                                <li>
                                    <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                                </li>
                                <li>
                                    <Link href="/blog-carousel" onClick={handleLinkClick}>Blog Carousel</Link>
                                </li>
                                <li>
                                    <Link href="/blog-list" onClick={handleLinkClick}>Blog List</Link>
                                </li>
                                <li>
                                    <Link href="/blog-details" onClick={handleLinkClick}>Blog Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/contact" onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:needhelp@Freshflow.com">
                            needhelp@Freshflow.com
                        </a>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <a href="tel:666-888-0000">666 888 0000</a>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-facebook-square"></a>
                        <a href="#" className="fab fa-pinterest-p"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;