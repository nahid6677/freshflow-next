'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo1 from '../../../public/assets/images/resources/logo-1.png';
import homeShowcase1 from '../../../public/assets/images/home-showcase/home-showcase-1-1.jpg';
import homeShowcase2 from '../../../public/assets/images/home-showcase/home-showcase-1-2.jpg';
import homeShowcase3 from '../../../public/assets/images/home-showcase/home-showcase-1-3.jpg';
import FreshFlowContext from '@/components/context/FreshFlowContext';

interface ContextType {
    setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const StickyNavThree: React.FC = () => {
    const context: ContextType | null = useContext(FreshFlowContext);
    if (!context) {
        throw new Error("FreshFlowContext is null");
    }
    const { setIsMobileOpen, setSideBar } = context;
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const headerScrollPos: number = 130;

    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY > headerScrollPos) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // const formData = new FormData(e.currentTarget);
        // const searchQuery = formData.get('search');
        // console.log(searchQuery);
    };

    return (
        <div
            className={`stricky-header stricked-menu main-menu main-menu-two ${isSticky ? 'stricky-fixed' : ''
                }`}
        >
            <div className="sticky-header__content">
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
                                    setIsMobileOpen((prev: boolean) => !prev);
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
                                                                            <Link
                                                                                href="/home-2"
                                                                                className="thm-btn home-showcase__buttons__item"
                                                                            >
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
                                                                            <Link
                                                                                href="/home-3"
                                                                                className="thm-btn home-showcase__buttons__item"
                                                                            >
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
                                                                        <Image src={homeShowcase1} alt="Home Page 04" />
                                                                        <div className="home-showcase__buttons">
                                                                            <Link
                                                                                href="/single-page"
                                                                                className="thm-btn home-showcase__buttons__item"
                                                                            >
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
                                    className="navSidebar-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSideBar((prev) => !prev);
                                    }}
                                    href="#"
                                >
                                    <span className="icon-app"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyNavThree;