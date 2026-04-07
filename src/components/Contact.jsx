import React from 'react';
import { motion, useAnimation, useInView   } from "framer-motion";
import { useEffect, useRef  } from "react";

import { IoMdMail } from "react-icons/io";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";

import '../style/contact.scss';

const Contact = () => {
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
        hidden: { opacity: 0 },
        visible: {
            opacity:1,
            transition: {
            staggerChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
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
        <div className='contact' ref={ref}>
            <div className="reveal">
                <motion.div
                    className="black-box"
                    variants={boxVariants}
                    initial="hidden"
                    animate={boxControls}
                />
                <motion.h3
                    variants={textVariants}
                    initial="hidden"
                    animate={boxControls}
                >
                    Contact Me
                </motion.h3>
            </div>
            
            <motion.ul
                variants={listVariants}
                initial="hidden"
                animate={listControls}/* 
                whileInView="visible"
                viewport={{ once: true }} */
            >
                <motion.li variants={itemVariants}>
                    <a href="https://github.com/ksyeon068" target="_blank"><BsArrowRightSquareFill className='contactIcon' /> GitHub: https://github.com/ksyeon068 </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <a href="mailto:ksyeon068@gmail.com"><IoMdMail className='contactIcon'/> Email: ksyeon068@gmail.com </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <a><FaSquarePhone className='contactIcon' /> Phone: 010-4132-7448</a>
                </motion.li>
            </motion.ul>
        </div>
    );
};

export default Contact;