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
    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity:1,
            transition: {
            staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, 
            transition: {
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1],   
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
                <div className='sub_text'>
                    <div className="profile-left">
                        <motion.p variants={itemVariants}>사용자 경험을 중심으로 디자인하고, 이를 코드로 구현합니다.</motion.p>
                        <motion.p variants={itemVariants}>디자인과 개발의 경계를 연결합니다.</motion.p>
                    </div>
                    
                </div>
            </div>
            <div className="profile-right">
                <img src="./" alt="프로필용이미지" />
            </div>
            
        </main>
    );
};

export default Hero;