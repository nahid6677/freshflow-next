
import BrandOne from '@/sections/home-one/BrandOne';
import AboutThree from '@/sections/home-three/AboutThree';
import BannerThree from '@/sections/home-three/BannerThree';
import BeforeAfterThree from '@/sections/home-three/BeforeAfterThree';
import ContactThree from '@/sections/home-three/ContactThree';
import CostCalculator from '@/sections/home-three/CostCalculator';
import FaqHomeThree from '@/sections/home-three/FaqHomeThree';
import FooterThree from '@/sections/home-three/FooterThree';
import NewsLeterThree from '@/sections/home-three/NewsLeterThree';
import OurBlogThree from '@/sections/home-three/OurBlogThree';
import PricingPlanThree from '@/sections/home-three/PricingPlanThree';
import ProjectThree from '@/sections/home-three/ProjectThree';
import ServiceThree from '@/sections/home-three/ServiceThree';
import StickyNavThree from '@/sections/home-three/StickyNavThree';
import TeamHomeThree from '@/sections/home-three/TeamHomeThree';
import TestimonialThree from '@/sections/home-three/TestimonialThree';
import WhyChooseHomeThree from '@/sections/home-three/WhyChooseHomeThree';
import React from 'react';

const page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <BannerThree />
            <AboutThree />
            <ServiceThree />
            <WhyChooseHomeThree />
            <ProjectThree />
            <CostCalculator />
            <TestimonialThree />
            <BrandOne />
            <TeamHomeThree />
            <PricingPlanThree />
            <BeforeAfterThree />
            <ContactThree />
            <FaqHomeThree />
            <OurBlogThree />
            <NewsLeterThree />
            <FooterThree />
            <StickyNavThree />
        </div>
    );
};

export default page;