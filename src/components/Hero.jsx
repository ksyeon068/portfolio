import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import '../style/hero.scss';

const Hero = () => {

    const boxVariants = {
        hidden: { x: "-100%" },
        visible: {
            x: "100%",
            transition: {
            duration: 1.5,
            ease: "easeInOut",
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            delay: 0.6,
            duration: 0.1,
            },
        },
    };

    return (
        <main className='hero'>
            <div className="inner">
                <div className='hero-text'>
                   <div className="reveal">
                        <motion.div
                        className="white-box"
                        variants={boxVariants}
                        initial="hidden"
                        animate="visible"
                        />
                        <motion.h2
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        KIM SEYEON
                        </motion.h2>
                    </div>

                    <div className="reveal">
                        <motion.div
                        className="white-box"
                        variants={boxVariants}
                        initial="hidden"
                        animate="visible"
                        />
                        <motion.h3
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        PORTFOLIO
                        </motion.h3>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;