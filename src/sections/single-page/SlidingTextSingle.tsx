import React from 'react';
import slidingTextShape from "../../../public/assets/images/shapes/sliding-text-shape-1.png";
import Image from 'next/image';

const SlidingTextSingle: React.FC = () => {
    type SlidingText = [
        "Organizing",
        "Sanitizing",
        "Mopping",
        "Dusting",
        "Vacuuming",
        "Polishing",
    ]
    const textItems: SlidingText = [
        "Organizing",
        "Sanitizing",
        "Mopping",
        "Dusting",
        "Vacuuming",
        "Polishing",
    ];
    return (
        <section className="sliding-text-one">
            <div className="sliding-text-one__wrap">
                <ul className="sliding-text__list list-unstyled">
                    {[
                        ...textItems,
                        ...textItems,
                        ...textItems,
                        ...textItems,
                        ...textItems,
                    ].map((item, index) => (
                        <li key={index}>
                            <h2 className="sliding-text__title">
                                {item}
                                <Image src={slidingTextShape} alt="icon" width={24} height={25} />
                            </h2>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SlidingTextSingle;