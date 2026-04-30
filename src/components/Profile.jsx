import '../style/profile.scss';
import { motion, useAnimation, useInView   } from "framer-motion";
import React, { useEffect, useRef  } from "react";

const Profile = () => {
    const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.1});
        const boxControls = useAnimation();
        const listControls = useAnimation();
        const boxVariants = {
            hidden: { x: "-100%" },
            visible: {
                x: "100%",
                transition: {
                duration: 0.9,
                ease: "easeInOut",
                },
            },
        };
    
        const textVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                delay: 0.5,
                duration: 0.1,
                },
            },
        };
        const listVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity:1,
                transition: {
                staggerChildren: 0.1,
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
                    await new Promise(res => setTimeout(res, 100));
                    await boxControls.start("visible");
                    await listControls.start("visible");
                };
        
                sequence();
            }, [isInView]);
            
    return (
        <div className='profile' ref={ref}>
            <motion.h3
                    variants={textVariants}
                    initial="hidden"
                    animate={boxControls}
                >
                    About Me
                </motion.h3>
        </div>
    );
};

export default Profile;