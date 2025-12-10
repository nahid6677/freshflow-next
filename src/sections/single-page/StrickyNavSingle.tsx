"use client"
import React, { useContext, useEffect, useState } from 'react';
import logo_1 from "../../../public/assets/images/resources/logo-1.png"; 
import Image from 'next/image';
import FreshFlowContext from '@/components/context/FreshFlowContext';
import { FreshFlowContextType } from '@/types/context';
import Link from 'next/link';

const StrickyNavSingle: React.FC = () => {
    const context: FreshFlowContextType | null = useContext(FreshFlowContext);
    if (!context) {
        throw new Error("Context null")
    }
    const { setIsMobileOpen, setIsSearch, scrollToSection, activeSection } = context;
    const handleSearch = (): void => {
        setIsSearch((prev: boolean) => !prev);
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
            linkId: 'blog',
            navItem: 'Blog'
        },
        {
            linkId: 'contact',
            navItem: 'Contact'
        },
    ]
    return (
        <div className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href={"/"}>
                                        <Image className="" src={logo_1} alt="" />
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
                                {/* <ManuList /> */}
                                <ul className="main-menu__list">
                                    {
                                        navItems.map((item: NavItem) => <li className={`${activeSection === item?.linkId ? 'current' : ''}`} key={item?.linkId}>
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
                                        <Link href="#"
                                            onClick={handleSearch}
                                            className="main-menu__search searcher-toggler-box icon-search"
                                        ></Link>
                                    </div>
                                    <div className="main-menu__cart">
                                        <Link href={"/cart"}>
                                            <span className="fas fa-shopping-cart"></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="main-menu__btn-box">
                                    <div className="main-menu__btn">
                                        <Link href={"/contact"}>
                                            <span className="icon-customer-support"></span>
                                            Book Schedule
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrickyNavSingle;