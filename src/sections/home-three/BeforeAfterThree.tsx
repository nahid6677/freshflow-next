import React from 'react';
import image1 from "../../../public/assets/images/resources/before-after-three-img-1.jpg"
import image2 from "../../../public/assets/images/resources/before-after-three-img-2.jpg"
import BeforeAfterSlider from '@/components/elements/BeforeAfterSlider';
import TextAnimation from '@/components/elements/TextAnimation';
const BeforeAfterThree: React.FC = () => {
    return (
        <section className="before-after-three">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Before After</span>
                    </div>
                    <h2 className="section-title__title title-custom-animation">
                        <TextAnimation text='Benefited After Clearing' textColor='black' />
                        <TextAnimation text='Your Organization' />
                    </h2>
                </div>
                <div className="before-after-three__img-box">
                    <div className="before-after">
                        <div className="before-after-twentytwenty" id="wrinkle-before-after">
                            <BeforeAfterSlider
                                beforeImage={image1}
                                afterImage={image2}
                                height="600px"
                                afterLabel={""}
                                beforeLabel={""}
                                className="wrinkle-before-after"
                            />
                        </div>
                    </div>
                    <div className="before-after-three__tag">
                        <span>Before</span>
                    </div>
                    <div className="before-after-three__tag before-after-three__tag-2">
                        <span>AFTER</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterThree;