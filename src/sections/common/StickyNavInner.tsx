'use client';

import image1 from "../../../public/assets/images/resources/logo-1.png";
import image2 from "../../../public/assets/images/home-showcase/home-showcase-1-1.jpg";
import image3 from "../../../public/assets/images/home-showcase/home-showcase-1-2.jpg";
import image4 from "../../../public/assets/images/home-showcase/home-showcase-1-3.jpg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import FreshFlowContext from "@/components/context/FreshFlowContext";
import { PagePath } from "@/types/about";

const StickyNavInner = () => {
    const context = useContext(FreshFlowContext);
    if (!context) {
        throw new Error("Context Null")
    }
    const { setSideBar } = context;
    const pathName = usePathname();

    const isCurrent = (pathArray: PagePath[]): boolean => {
        return pathArray.includes(pathName as PagePath);
    };

    const [isStick, setIsSticky] = useState<boolean>(false);
    const headerScrollPos: number = 130;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > headerScrollPos) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`stricky-header stricked-menu main-menu main-menu-three ${isStick ? "stricky-fixed" : ""
                }`}
        >
            <div className="sticky-header__content">
                <div className="main-menu-three__wrapper">
                    <div className="container">
                        <div className="main-menu-three__wrapper-inner">
                            <div className="main-menu-three__left">
                                <div className="main-menu-three__logo">
                                    <Link href="/">
                                        <Image src={image1} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu-three__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler">
                                    <i className="fa fa-bars"></i>
                                </Link>
                                <ul className="main-menu__list">
                                    <li className="dropdown megamenu">
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
                                                                            <Image src={image2} alt="Home Page 01" />
                                                                            <div className="home-showcase__buttons">
                                                                                <Link href="/" className="thm-btn home-showcase__buttons__item">
                                                                                    Multi Page <span className="icon-diagonal-arrow"></span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="home-showcase__title">
                                                                            Home Page 01
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="home-showcase__item">
                                                                        <div className="home-showcase__image">
                                                                            <Image src={image3} alt="Home Page 02" />
                                                                            <div className="home-showcase__buttons">
                                                                                <Link href="/home-2" className="thm-btn home-showcase__buttons__item">
                                                                                    Multi Page <span className="icon-diagonal-arrow"></span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="home-showcase__title">
                                                                            Home Page 02
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="home-showcase__item">
                                                                        <div className="home-showcase__image">
                                                                            <Image src={image4} alt="Home Page 03" />
                                                                            <div className="home-showcase__buttons">
                                                                                <Link href="/home-3" className="thm-btn home-showcase__buttons__item">
                                                                                    Multi Page
                                                                                    <span className="icon-diagonal-arrow"></span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="home-showcase__title">
                                                                            Home Page 03
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="home-showcase__item">
                                                                        <div className="home-showcase__image">
                                                                            <Image src={image2} alt="Single Page" />
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
                                                                        <h3 className="home-showcase__title">
                                                                            Single Page
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
                                    <li className={pathName === "/about" ? 'current' : ''}>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li className={`dropdown ${isCurrent(["/team", "/team-details", "/projects", "/projects-carousel", "/project-details", "/testimonials", "/pricing", "/testimonials-carousel", "/pricing-carousel", "/gallery", "/faq"]) ? 'current' : ''}`}>
                                        <Link href="#">Pages</Link>
                                        <ul className="shadow-box">
                                            <li>
                                                <Link href="/team">Team</Link>
                                            </li>
                                            <li>
                                                <Link href="/team-details">Team Details</Link>
                                            </li>
                                            <li>
                                                <Link href="/projects">Projects</Link>
                                            </li>
                                            <li>
                                                <Link href="/projects-carousel">
                                                    Projects Carousel
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/project-details">
                                                    Project Details
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/testimonials">Testimonials</Link>
                                            </li>
                                            <li>
                                                <Link href="/testimonials-carousel">
                                                    Testimonial Carousel
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pricing">Pricing</Link>
                                            </li>
                                            <li>
                                                <Link href="/pricing-carousel">
                                                    Pricing Carousel
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/gallery">Gallery</Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">FAQs</Link>
                                            </li>
                                            <li>
                                                <Link href="/error-404">404 Error</Link>
                                            </li>
                                            <li>
                                                <Link href="/coming-soon">Coming Soon</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`dropdown ${isCurrent(["/services", "/residential-cleaning", "/commercial-cleaning", "/deep-cleaning", "/office-cleaning", "/sanitizing-mopping"]) ? 'current' : ''}`}>
                                        <Link href="#">Services</Link>
                                        <ul className="shadow-box">
                                            <li>
                                                <Link href="/services">Services</Link>
                                            </li>
                                            <li>
                                                <Link href="/residential-cleaning">
                                                    Residential Cleaning
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/commercial-cleaning">
                                                    Commercial Cleaning
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/deep-cleaning">Deep Cleaning</Link>
                                            </li>
                                            <li>
                                                <Link href="/office-cleaning">Office Cleaning</Link>
                                            </li>
                                            <li>
                                                <Link href="/sanitizing-mopping">
                                                    Sanitizing & Mopping
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`dropdown ${isCurrent(["/products-left", "/products-right", "/products", "/product-details", "/cart", "/checkout", "/wishlist", "/sign-up", "/login"]) ? 'current' : ''}`}>
                                        <Link href="#">Shop</Link>
                                        <ul className="shadow-box">
                                            <li className="dropdown">
                                                <Link href="#">Products</Link>
                                                <ul>
                                                    <li>
                                                        <Link href="/products-left">Left Sidebar</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products-right">
                                                            Right Sidebar
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">No Sidebar</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/product-details">Product Details</Link>
                                            </li>
                                            <li>
                                                <Link href="/cart">Cart</Link>
                                            </li>
                                            <li>
                                                <Link href="/checkout">Checkout</Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist">Wishlist</Link>
                                            </li>
                                            <li>
                                                <Link href="/sign-up">Sign Up</Link>
                                            </li>
                                            <li>
                                                <Link href="/login">Login</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`dropdown ${isCurrent(["/blog", "/blog-carousel", "/blog-list", "/blog-details"]) ? 'current' : ''}`}>
                                        <Link href="/blog">Blog</Link>
                                        <ul className="shadow-box">
                                            <li>
                                                <Link href="/blog">Blog</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-carousel">Blog Carousel</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-list">Blog List</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details">Blog Details</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={pathName === "/contact" ? 'current' : ''}>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-menu-three__right">
                                <div className="main-menu-three__btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        Get Started
                                        <span>
                                            <i className="icon-diagonal-arrow"></i>
                                        </span>
                                    </Link>
                                </div>
                                <div className="main-menu-three__nav-sidebar-icon">
                                    <Link className="navSidebar-button" href="#" onClick={() => setSideBar(pre => !pre)}>
                                        <span className="icon-app"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyNavInner;