"use client";
import React, { useContext, useEffect } from "react";
import FreshFlowContext from "@/components/context/FreshFlowContext";
import { FreshFlowContextType } from "@/types/context";
import HeaderSingle from "@/sections/single-page/HeaderSingle";
import BannerSingle from "@/sections/single-page/BannerSingle";
import SlidingTextSingle from "@/sections/single-page/SlidingTextSingle";
import AboutSingle from "@/sections/single-page/AboutSingle";
import ServiceSingle from "@/sections/single-page/ServiceSingle";
import SliddingTextTowSingle from "@/sections/single-page/SliddingTextTowSingle";
import CounterSingle from "@/sections/single-page/CounterSingle";
import AfterBeforeSingle from "@/sections/single-page/AfterBeforeSingle";
import WhyChooseSingle from "@/sections/single-page/WhyChooseSingle";
import ProjectSingle from "@/sections/single-page/ProjectSingle";
import TeamSingle from "@/sections/single-page/TeamSingle";
import ContactSingle from "@/sections/single-page/ContactSingle";
import TestimonialSingle from "@/sections/single-page/TestimonialSingle";
import BrandSingle from "@/sections/single-page/BrandSingle";
import OfficeLocationSingle from "@/sections/single-page/OfficeLocationSingle";
import PricingSingle from "@/sections/single-page/PricingSingle";
import BlogSingle from "@/sections/single-page/BlogSingle";
import NewsLaterSingle from "@/sections/single-page/NewsLaterSingle";
import FooterSingle from "@/sections/single-page/FooterSingle";
import StrickyNavSingle from "@/sections/single-page/StrickyNavSingle";
import SearchProp from "@/components/elements/SearchProp";

const SingleHomePage: React.FC = () => {
    const context = useContext<FreshFlowContextType | null>(FreshFlowContext);
    if (!context) throw new Error("FreshFlowContext is missing");

    const { setActiveSection } = context;
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, [setActiveSection]);

    return (
        <div className="page-wrapper">
            <HeaderSingle />
            <BannerSingle />
            <SlidingTextSingle />
            <AboutSingle />
            <ServiceSingle />
            <SliddingTextTowSingle />
            <CounterSingle />
            <AfterBeforeSingle />
            <WhyChooseSingle />
            <ProjectSingle />
            <TeamSingle />
            <TestimonialSingle />
            <BrandSingle />
            <OfficeLocationSingle />
            <PricingSingle />
            <NewsLaterSingle />
            <BlogSingle />
            <ContactSingle />
            <FooterSingle />
            <StrickyNavSingle />
            <SearchProp />
        </div>
    );
};

export default SingleHomePage;
