
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
    text: string;
}
interface Props {
    text: string;
    textColor?: string;
}

const TextAnimation: React.FC<Props> = ({ text, textColor }) => {
    const letters = Array.from(text);

    // Parent animation
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.04 * i,
            },
        }),
    };

    // Child animation
    const child: Variants = {
        hidden: {
            opacity: 0,
            x: 20,
            y: -20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", fontSize: "2rem"}}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} style={{ color: `${textColor ? textColor && '#05173d' : ''}` }}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}

        </motion.div>
    );
};

export default TextAnimation;
