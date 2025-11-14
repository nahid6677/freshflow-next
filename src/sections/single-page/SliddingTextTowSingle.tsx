import React from 'react';
import sliding_text_shape1 from '../../../public/assets/images/shapes/sliding-text-shape-1.png'
import FreshFlowMarquee from '@/components/elements/FreshFlowMarquee';
import Image from 'next/image';
const SliddingTextTowSingle: React.FC = () => {
    const textContent: string[] = [
        "Organizing",
        'Sanitizing',
        'Mopping',
        'Dusting',
        'Vacuuming',
        'Polishing',
    ]
    return (
        <section className="sliding-text-two">
            <div className="sliding-text-one__wrap">
                <ul className="sliding-text-two__list list-unstyled">

                    <FreshFlowMarquee
                        speed={200}
                        gap={0}
                        pauseOnHover={true}
                        direction='left'
                    >
                        {
                            [
                                ...textContent,
                                ...textContent,
                                ...textContent,
                                ...textContent,
                                ...textContent,
                                ...textContent,
                                ...textContent,
                            ].map((text, idx) => {
                                return <li key={idx}>
                                    <h2 className='sliding-text-two__title'>{text} <Image src={sliding_text_shape1} alt="logo" /></h2>
                                </li>
                            })
                        }
                    </FreshFlowMarquee>

                </ul>
            </div>
        </section>
    );
};

export default SliddingTextTowSingle;