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
                    About Me
                </motion.h3>
            </div>
            <div className="profile-top">
                <motion.div className="left-img"
                    variants={listVariants}
                    initial="hidden"
                    animate={listControls}>
                    <motion.img variants={itemVariants} src="/img/pimg.jpg" alt="프로필이미지" />
                </motion.div>
                <div className="introduce">
                    <motion.div className="i-top"
                        variants={listVariants}
                        initial="hidden"
                        animate={listControls}>
                        <motion.p variants={itemVariants} className='name'><span>김세연</span> | 1996.06.08 | 웹퍼블리셔</motion.p>
                        <motion.p variants={itemVariants} className="i-text">
                            안녕하세요 신입 웹 퍼블리셔 김세연입니다.<br />
                            디자인 전공에서 시작해 퍼블리싱까지. <br />
                            HTML, CSS, JavaScript, React 등 다양한 툴을 활용하여 <br /> 사용자의 흐름을 설계하고 구현하고자 합니다.
                        </motion.p>
                    </motion.div>
                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        animate={listControls}
                    >
                        <motion.li variants={itemVariants}>
                            <p className='ti'>교육</p>
                            <motion.ul>
                                <motion.li>
                                    <p className='date'>2015.03 - 2017</p>
                                    <p className="liText"><span className='boldText'>세명대학교</span> 융합디자인학과 2년 중퇴</p>
                                </motion.li>
                                <motion.li>
                                    <p className='date'>2025.10 - 2026.04</p>
                                    <p className="liText"><span className='boldText'>MBC아카데미</span> 챗GPT 생성형 AI를 활용한 반응형 웹콘텐츠제작</p>
                                </motion.li>
                            </motion.ul>
                        </motion.li>
                        
                        <motion.li variants={itemVariants}>
                            <p className='ti'>자격</p>
                            <motion.ul>
                                <motion.li>
                                    <p className='date'>2019.09</p>
                                    <p className="liText"><span className='boldText'>운전면허</span> 한국도로교통공단</p>
                                </motion.li>
                                <motion.li>
                                    <p className='date'>2024.03</p>
                                    <p className="liText"><span className='boldText'>JLPT N2</span> 일본국제교육협회</p>
                                </motion.li>
                                <motion.li>
                                    <p className='date'>2026.03</p>
                                    <p className="liText"><span className='boldText'>웹디자인개발기능사</span> 한국산업인력공단(실기예정)</p>
                                </motion.li>
                            </motion.ul>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;