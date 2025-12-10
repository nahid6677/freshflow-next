"use client"
import React, { useContext } from 'react';
import logo_1 from "../../../public/assets/images/resources/logo-1.png";
import image2 from '../../../public/assets/images/home-showcase/home-showcase-1-1.jpg';
import image3 from '../../../public/assets/images/home-showcase/home-showcase-1-2.jpg';
import image4 from '../../../public/assets/images/home-showcase/home-showcase-1-3.jpg';
import FreshFlowContext from '@/components/context/FreshFlowContext';
import { FreshFlowContextType } from '@/types/context';
import Link from 'next/link';
import Image from 'next/image';

const HeaderSingle: React.FC = () => {
    const context: FreshFlowContextType | null = useContext(FreshFlowContext);
    if (!context) {
        throw new Error("FreshFlowContext is null");
    }
    const { setIsMobileOpen, setIsSearch, scrollToSection } = context;

    const handleSearch = (): void => {
        setIsSearch((prev) => !prev);
    };
    interface NavItem {
        linkId: string,
        navItem: string
    }
    const navItems: NavItem[] = [
        {
            linkId: 'about',
            navItem: 'About'
        },
        {
            linkId: 'services',
            navItem: 'Services'
        },
        {
            linkId: 'project',
            navItem: 'Project'
        },
        {
            linkId: 'team',
            navItem: 'Team'
        },
        {
            linkId: 'blog',
            navItem: 'Blog'
        },
        {
            linkId: 'contact',
            navItem: 'Contact'
        },
    ]

    return (
        <header className="main-header">
            <div className="main-menu__top">
                <div className="container">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
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
                                        <Link href="tel:+121234567890">+12 (123) 456 78900</Link>
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
                        <div className="main-menu__top-social-box">
                            <h4 className="main-menu__top-social-title">Follow Us</h4>
                            <div className="main-menu__top-social">
                                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-facebook-app-symbol"></span>
                                </Link>
                                <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-pinterest"></span>
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-linkedin-big-logo"></span>
                                </Link>
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-instagram"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/">
                                        <Image src={logo_1} alt="FreshFlow Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <button
                                    className="mobile-nav__toggler"
                                    onClick={() => setIsMobileOpen((pre) => !pre)}
                                >
                                    <i className="fa fa-bars"></i>
                                </button>
                                <ul className="main-menu__list">
                                    <li className={`current`}>
                                        <Link href='#'>Home</Link>

                                    </li>
                                    {
                                        navItems.map((item: NavItem) => <li key={item?.linkId}>
                                            <Link
                                                href={`#${item.linkId}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToSection(item.linkId);
                                                }}
                                            >
                                                {item.navItem}
                                            </Link>
                                        </li>)
                                    }
                                </ul>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-cart-box">
                                    <div className="main-menu__search-box">
                                        <button
                                            onClick={handleSearch}
                                            className="main-menu__search searcher-toggler-box icon-search"
                                            aria-label="Toggle search"
                                        />
                                    </div>
                                    <div className="main-menu__cart">
                                        <Link href="/cart">
                                            <span className="fas fa-shopping-cart"></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="main-menu__btn-box">
                                    <div className="main-menu__btn">
                                        <Link href="/contact">
                                            <span className="icon-customer-support"></span>
                                            Book Schedule
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderSingle;