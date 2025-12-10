"use client";
import React, { useContext } from 'react';
import logo from "../../../public/assets/images/resources/logo-2.png";

import Image from 'next/image';
import Link from 'next/link';
import FreshFlowContext from '../context/FreshFlowContext';

const MobileNavSingle: React.FC = () => {
    const context = useContext(FreshFlowContext)
    if (!context) {
        throw new Error("Context is null. App must be used within a ContextProvider")
    }
    const { isMobileOpen, setIsMobileOpen, scrollToSection, activeSection } = context;
    const handleNavLinkClick = (): void => {
        setIsMobileOpen(false);
    };

    interface NavItem {
        linkId: string,
        navItem: string
    }
    const navItems: NavItem[] = [
        {
            linkId: 'home',
            navItem: 'Home'
        },
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
            linkId: 'contact',
            navItem: 'Contact'
        },
        {
            linkId: 'blog',
            navItem: 'Blog'
        },
    ]
    return (
        <div className={`mobile-nav__wrapper ${isMobileOpen ? 'expanded' : ''}`}>
            <div onClick={() => setIsMobileOpen((pre) => !pre)} className="mobile-nav__overlay mobile-nav__toggler"></div>
            <div className="mobile-nav__content">
                <span onClick={() => setIsMobileOpen((pre) => !pre)} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" aria-label="logo image" onClick={handleNavLinkClick}>
                        <Image src={logo} width="150" alt="" />
                    </Link>
                </div>
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        {
                            navItems.map((item: NavItem) => <li className={`${activeSection === item?.linkId ? 'is-active' : ''}`} key={item?.linkId}>
                                <Link

                                    href={`#${item?.linkId}`}
                                    data-section={item?.linkId}
                                    onClick={() => { scrollToSection(`#${item?.linkId}`); setIsMobileOpen(false) }}
                                >
                                    {item?.navItem}
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>

                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:needhelp@Freshflow.com">
                            needhelp@Freshflow.com
                        </Link>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <Link href="tel:666-888-0000">666 888 0000</Link>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link href="#" className="fab fa-twitter"></Link>
                        <Link href="#" className="fab fa-facebook-square"></Link>
                        <Link href="#" className="fab fa-pinterest-p"></Link>
                        <Link href="#" className="fab fa-instagram"></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavSingle;