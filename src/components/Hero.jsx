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
            delay: 0.8,
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
                <div>
                    <div className="profile-left">
                        <span>김세연</span>
                        <p>사용자 경험을 중심으로 디자인하고, 이를 코드로 구현하는 김세연입니다.</p>
                        <br />
                        <p>시각적인 완성도와 인터랙션의 흐름을 함께 고민하며, 디자인과 개발의 경계를 자연스럽게 연결합니다.</p>
                    </div>
                    <div className="profile-right">
                        <img src="./" alt="프로필용이미지" />
                    </div>
                </div>
            </div>
            
        </main>
    );
};

export default Hero;