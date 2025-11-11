import AboutTow from '@/sections/home-tow/AboutTow';
import AfterBeforeHomeTow from '@/sections/home-tow/AfterBeforeHomeTow';
import BannerHomeTwo from '@/sections/home-tow/BannerHomeTwo';
import ContactTow from '@/sections/home-tow/ContactTow';
import FaqHomeTow from '@/sections/home-tow/FaqHomeTow';
import FooterTwo from '@/sections/home-tow/FooterTow';
import NewsLeterTow from '@/sections/home-tow/NewsLeterTow';
import OurBlogTow from '@/sections/home-tow/OurBlogTow';
import PricingPlanTow from '@/sections/home-tow/PricingPlanTow';
import ProcessTow from '@/sections/home-tow/ProcessTow';
import ProjectsTow from '@/sections/home-tow/ProjectsTow';
import ServiceTwo from '@/sections/home-tow/ServiceTwo';
import StickyNavHomeTwo from '@/sections/home-tow/StickyNavHomeTwo';
import TeamTow from '@/sections/home-tow/TeamTow';
import TestimonialTow from '@/sections/home-tow/TestimonialTow';
import WhyChooseTow from '@/sections/home-tow/WhyChooseTow';
import React from 'react';

const page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <BannerHomeTwo />
            <AboutTow />
            <ServiceTwo />
            <WhyChooseTow />
            <ProjectsTow />
            <ProcessTow />
            <AfterBeforeHomeTow />
            <ContactTow />
            <TestimonialTow />
            <TeamTow />
            <PricingPlanTow />
            <FaqHomeTow />
            <OurBlogTow />
            <NewsLeterTow />
            <FooterTwo />
            <StickyNavHomeTwo />
        </div>
    );
};

export default page;