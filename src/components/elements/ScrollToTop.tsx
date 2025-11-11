"use client";
import React, { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                scrollToTop();
            }}
            className={`scroll-to-top ${visible ? "show" : ""}`}
        >
            <span className="scroll-to-top__wrapper">
                <span className="scroll-to-top__inner"></span>
            </span>
            <span className="scroll-to-top__text">Go Back Top</span>
        </a>
    );
};

export default ScrollToTop;