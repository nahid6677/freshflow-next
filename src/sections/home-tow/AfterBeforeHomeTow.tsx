import React from 'react';
import beforAft1 from "../../../public/assets/images/shapes/before-after-two-shape-1.png"
import beforAft2 from "../../../public/assets/images/resources/before-after-two-img-1.jpg"
import beforAft3 from "../../../public/assets/images/resources/before-after-two-img-2.jpg"
import beforAft4 from "../../../public/assets/images/resources/before-after-two-client-img-1.jpg"
import beforAft5 from "../../../public/assets/images/resources/before-after-two-client-img-2.jpg"
import beforAft6 from "../../../public/assets/images/resources/before-after-two-client-img-3.jpg"
import beforAft7 from "../../../public/assets/images/resources/before-after-two-img-3.jpg"
import beforAft8 from "../../../public/assets/images/resources/before-after-two-img-4.jpg"
import bgimg from "../../../public/assets/images/shapes/before-after-two-bg-shape.png"
import Image from 'next/image';
import BeforeAfterSlider from '@/components/elements/BeforeAfterSlider';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import Link from 'next/link';
import FreshFlowMarquee from '@/components/elements/FreshFlowMarquee';
import TextAnimation from '@/components/elements/TextAnimation';



const textContentsec: string[] = [
    "Organizing",
    'Sanitizing',
    'Mopping',
    'Dusting',
    'Vacuuming',
    'Polishing',
]

const AfterBeforeHomeTow: React.FC = () => {
    return (
        <section className="before-after-two">
            <div className="before-after-two__bg-shape" style={{ backgroundImage: `url(${bgimg})` }}></div>
            <div className="before-after-two__shape-1 float-bob-y">
                <Image src={beforAft1} alt="" />
            </div>
            <div className="before-after-two__shape-2"></div>
            <div className="before-after-two__shape-3"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="before-after-two__left">
                            <div className="before-after-two__img-box">
                                <div className="before-after">
                                    <div className="before-after-twentytwenty"  >
                                        <BeforeAfterSlider
                                            beforeImage={beforAft2}
                                            afterImage={beforAft3}
                                            height="480px"
                                            className="wrinkle-before-after"
                                        />
                                    </div>
                                </div>
                                <div className="before-after-two__tag"><span>Before</span></div>
                                <div className="before-after-two__tag before-after-two__tag-2"> <span>AFTER</span></div>
                            </div>
                            <div className="before-after-two__client-and-points">
                                <div className="before-after-two__client-box-inner">
                                    <div className="before-after-two__client-box">
                                        <ul className="before-after-two__client-list list-unstyled">
                                            <li>
                                                <div className="before-after-two__client-img">
                                                    <Image src={beforAft4} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="before-after-two__client-img">
                                                    <Image src={beforAft5} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="before-after-two__client-img">
                                                    <Image src={beforAft6} alt="" />
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="before-after-two__counter-box">
                                            <div className="before-after-two__count-box">
                                                <p className="odometer" ><AdvanceCountUp ending={200} /></p>
                                                <span>k</span>
                                                <span>+</span>
                                            </div>
                                            <p className="before-after-two__count-text">Problem Solve</p>
                                        </div>
                                    </div>
                                    <div className="before-after-two__btn-box">
                                        <Link className="thm-btn" href={"/contact"}>
                                            Contact Us<span><i className="icon-diagonal-arrow"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="before-after-two__points-box">
                                    <ul className="before-after-two__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-star-1"></span>
                                            </div>
                                            <p>Innovative Solutions for Every<br /> Need</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-star-1"></span>
                                            </div>
                                            <p>Expert Team Delivering Quality <br />Results</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-star-1"></span>
                                            </div>
                                            <p>Reliable Services You Can Trust</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="before-after-two__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-box">
                                        <div className="section-title__tagline-shape"></div>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <span className="section-title__tagline">Before After</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation text='Benefited After Clearing' textColor='black' /><br></br>
                                    <TextAnimation text='Your Organization' />
                                </h2>
                            </div>
                            <div className="before-after-two__img-box-2">
                                <div className="before-after">
                                    <div className="before-after-twentytwenty" id="wrinkle-before-after-1">
                                        <BeforeAfterSlider
                                            beforeImage={beforAft7}
                                            afterImage={beforAft8}
                                            height="480px"
                                            className="wrinkle-before-after"
                                        />
                                    </div>
                                </div>
                                <div className="before-after-two__tag"><span>Before</span></div>
                                <div className="before-after-two__tag before-after-two__tag-2">
                                    <span>AFTER</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="before-after-two__sliding-text">
                <ul className="before-after-two__sliding-text-list list-unstyled marquee_mode">
                    <FreshFlowMarquee
                        speed={100}
                        gap={0}
                        pauseOnHover={true}
                        direction='left'
                    >
                        {
                            [
                                ...textContentsec,
                                ...textContentsec,
                                ...textContentsec,
                                ...textContentsec,
                                ...textContentsec,
                                ...textContentsec,

                            ].map((text, idx) => {
                                return <li key={idx}>
                                    <h2 className="before-after-two__sliding-title">
                                        {text}
                                        <span className="icon-sparkle"></span>
                                    </h2>
                                </li>
                            })
                        }
                    </FreshFlowMarquee>
                </ul>
            </div>
        </section>
    );
};

export default AfterBeforeHomeTow;