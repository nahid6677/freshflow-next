"use client"
import React, { useState } from 'react';
import bgteamTow1 from "../../../public/assets/images/shapes/team-two-shape-1.png"
import bgteamTow2 from "../../../public/assets/images/shapes/team-two-shape-2.png"
import buttomimg1 from "../../../public/assets/images/team/team-two-buttons-img-1-1.jpg"
import buttomimg2 from "../../../public/assets/images/team/team-two-buttons-img-1-2.jpg"
import buttomimg3 from "../../../public/assets/images/team/team-two-buttons-img-1-3.jpg"
import buttomimg4 from "../../../public/assets/images/team/team-two-buttons-img-1-4.jpg"
import buttomimg5 from "../../../public/assets/images/team/team-two-buttons-img-1-5.jpg"
import buttomimg6 from "../../../public/assets/images/team/team-two-buttons-img-1-6.jpg"
import teamimg1 from "../../../public/assets/images/team/team-two-1-1.jpg"
import teamimg2 from "../../../public/assets/images/team/team-two-1-2.jpg"
import teamimg3 from "../../../public/assets/images/team/team-two-1-3.jpg"
import teamimg4 from "../../../public/assets/images/team/team-two-1-4.jpg"
import teamimg5 from "../../../public/assets/images/team/team-two-1-5.jpg"
import teamimg6 from "../../../public/assets/images/team/team-two-1-6.jpg"
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TextAnimation from '@/components/elements/TextAnimation';


interface TabButtonTeam {
    id: number,
    year: string,
    image: string | StaticImageData,
    title: string,
    subTitle: string,
}
interface TeamMember {
    id: number,
    singleImg: string | StaticImageData
}

export const tabButtons: TabButtonTeam[] = [
    {
        id: 1,
        year: "05",
        image: buttomimg1,
        title: "Olivia Grace",
        subTitle: "Customer Service Coordinator"
    },
    {
        id: 2,
        year: "02",
        image: buttomimg2,
        title: "Sophia Marie",
        subTitle: "Operations Manager"
    },
    {
        id: 3,
        year: "12",
        image: buttomimg3,
        title: "Jordan Walk",
        subTitle: "Cleaning Specialist"
    },
    {
        id: 4,
        year: "14",
        image: buttomimg4,
        title: "Amelia Brooks",
        subTitle: "Quality Assurance Inspector"
    },
    {
        id: 5,
        year: "16",
        image: buttomimg5,
        title: "Sophia Anne",
        subTitle: "Operations Manager"
    },
    {
        id: 6,
        year: "18",
        image: buttomimg6,
        title: "Charlotte Johnson",
        subTitle: "Team Manager"
    },
]
export const teamMenbers: TeamMember[] = [
    {
        id: 1,
        singleImg: teamimg1
    },
    {
        id: 2,
        singleImg: teamimg2
    },
    {
        id: 3,
        singleImg: teamimg3
    },
    {
        id: 4,
        singleImg: teamimg4
    },
    {
        id: 5,
        singleImg: teamimg5
    },
    {
        id: 6,
        singleImg: teamimg6
    },
]



const TeamTow: React.FC = () => {
    const [activeItem, setActiveItem] = useState<number>(1)
    return (
        <section className="team-two">
            <div className="team-two__shape-1">
                <Image src={bgteamTow1} alt="" />
            </div>
            <div className="team-two__shape-2 img-bounce">
                <Image src={bgteamTow2} alt="" />
            </div>
            <div className="team-two__shape-3"></div>
            <div className="team-two__shape-4"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Team member</span>
                    </div>
                    <h2 className="section-title__title title-custom-animation">
                        <TextAnimation text='Meet Our Professional Team' textColor='black' />
                        <TextAnimation text='Dedicated to Excellence' />
                    </h2>
                </div>
                <div className="team-two__inner">
                    <div className="team-two__main-tab-box tabs-box">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="team-two__tab-buttons-box-one">
                                    <ul className="tab-buttons list-unstyled">
                                        {
                                            tabButtons.filter((buttons: TabButtonTeam) => buttons?.id < 4).map((item, i) => <li key={i} className={`tab-btn ${activeItem === item?.id ? 'active-btn' : ''} `}>
                                                <div onClick={() => setActiveItem(item?.id)} className="team-two__buttons">
                                                    <div className="team-two__buttons-experience-years">
                                                        <div className="team-two__buttons-experience-years-count">
                                                            <h3>{item?.year}</h3>
                                                        </div>
                                                        <p className="team-two__buttons-experience-years-text">Years <br />
                                                            Experience</p>
                                                    </div>
                                                    <div className="team-two__buttons-img-box">
                                                        <div className="team-two__buttons-img">
                                                            <Image src={item?.image} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="team-two__buttons-content">
                                                        <div className="team-two__buttons-title-box">
                                                            <h4 className="team-two__buttons-title">
                                                                <Link href={"/team-details"}>
                                                                    {item?.title}
                                                                </Link>
                                                            </h4>
                                                            <p className="team-two__buttons-sub-title">
                                                                {item?.subTitle}
                                                            </p>
                                                        </div>
                                                        <div className="team-two__buttons-arrow">
                                                            <Link href={"/team-details"}>
                                                                <span className="icon-diagonal-arrow"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>)
                                        }

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="team-two__tabs-content-outer">
                                    <div className="tabs-content">
                                        {
                                            teamMenbers.map((img: TeamMember, i) => <div key={`${i}ky`} className={`tab ${activeItem === img?.id ? 'active-tab' : ''}`} style={{ display: `${activeItem === img?.id ? 'block' : 'none'}` }}>
                                                <div className="team-two__tabs-content-box">
                                                    <div className="team-two__img-box">
                                                        <div className="team-two__img">
                                                            <Image src={img?.singleImg} alt="" />
                                                            <div className="team-two__social">
                                                                <Link href={"/team-details"}> <span className="icon-facebook-app-symbol"></span> </Link>
                                                                <Link href={"/team-details"}><span className="icon-pinterest"></span></Link>
                                                                <Link href={"/team-details"}><span className="icon-linkedin-big-logo"></span></Link>
                                                                <Link href={"/team-details"}> <span className="icon-instagram"></span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="team-two__tab-buttons-box-two">
                                    <ul className="tab-buttons list-unstyled">
                                        {
                                            tabButtons.filter((buttons) => buttons?.id > 3 && buttons?.id < 7).map((item, i) => <li key={i} className={`tab-btn ${activeItem === item?.id ? 'active-btn' : ''} `}>
                                                <div onClick={() => setActiveItem(item?.id)} className="team-two__buttons">
                                                    <div className="team-two__buttons-experience-years">
                                                        <div className="team-two__buttons-experience-years-count">
                                                            <h3>{item?.year}</h3>
                                                        </div>
                                                        <p className="team-two__buttons-experience-years-text">Years <br />
                                                            Experience</p>
                                                    </div>
                                                    <div className="team-two__buttons-img-box">
                                                        <div className="team-two__buttons-img">
                                                            <Image src={item?.image} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="team-two__buttons-content">
                                                        <div className="team-two__buttons-title-box">
                                                            <h4 className="team-two__buttons-title">
                                                                <Link href={"/team-details"}>
                                                                    {item?.title}
                                                                </Link>
                                                            </h4>
                                                            <p className="team-two__buttons-sub-title">
                                                                {item?.subTitle}
                                                            </p>
                                                        </div>
                                                        <div className="team-two__buttons-arrow">
                                                            <Link href={"/team-details"}>
                                                                <span className="icon-diagonal-arrow"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamTow;