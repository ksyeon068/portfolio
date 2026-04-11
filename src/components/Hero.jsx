import { motion, useAnimation, useInView} from "framer-motion";
import React, { useEffect, useRef } from "react";
import '../style/hero.scss';

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const boxControls = useAnimation();
    const listControls = useAnimation();
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
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
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
   useEffect(() => {
        if (!isInView) return;

        const sequence = async () => {
            await boxControls.start("visible");
            await listControls.start("visible");
        };

        sequence();
    }, [isInView]);

    return (
        <main className='hero' ref={ref}>
            <div className="inner">
                <div className='hero-text'>
                   <div className="reveal">
                        <motion.div
                        className="white-box"
                        variants={boxVariants}
                        initial="hidden"
                        animate={boxControls}
                        />
                        <motion.h2
                        variants={textVariants}
                        initial="hidden"
                        animate={boxControls}
                        >
                        KIM SEYEON
                        </motion.h2>
                    </div>

                    <div className="reveal">
                        <motion.div
                        className="white-box"
                        variants={boxVariants}
                        initial="hidden"
                        animate={boxControls}
                        />
                        <motion.h3
                        variants={textVariants}
                        initial="hidden"
                        animate={boxControls}
                        >
                        PORTFOLIO
                        </motion.h3>
                    </div>
                </div>
                <div className='sub_text'>
                    <motion.div className="profile-left"
                        variants={listVariants}
                        initial="hidden"
                        animate={listControls}
                    >
                        <motion.p variants={itemVariants}>사용자 경험을 중심으로 디자인하고, 이를 코드로 구현합니다.</motion.p>
                        <motion.p variants={itemVariants}>디자인과 개발의 경계를 연결합니다.</motion.p>
                    </motion.div>
                    
                </div>
            </div>
            <motion.div className="profile-right"
                variants={listVariants}
                initial="hidden"
                animate={listControls}
            >
                
                <motion.img src="/img/img2.jpg" alt="프로필용이미지"  variants={itemVariants}/>
            </motion.div>
            
        </main>
    );
};

export default Hero;