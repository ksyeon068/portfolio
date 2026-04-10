import '../style/Skills.scss';
import { motion, useAnimation, useInView   } from "framer-motion";
import { useEffect, useRef  } from "react";

import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { BiLogoAdobe } from "react-icons/bi";
import { TbBrandAdobePremier } from "react-icons/tb";
import { TbBrandAdobeAfterEffect } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";
import { OpenAI } from '@lobehub/icons';
import { Gemini } from '@lobehub/icons';
import { Grok } from '@lobehub/icons';
import { Sora } from '@lobehub/icons';
import { Google } from '@lobehub/icons';
import { Cursor } from '@lobehub/icons';

const Skills = () => {
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
        <div className='skills' ref={ref}>
            <div className="reveal_s">
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
                    Skills
                </motion.h3>
            </div>
            <div className='skillsWrap'>
                <motion.ul
                    className='develop'
                    variants={listVariants}
                    initial="hidden"
                    animate={listControls}
                >
                    <motion.li variants={itemVariants}>
                        <h4>HTML <TbBrandHtml5  className='skillIcon'/></h4>
                        <span>웹 표준을 준수하고 접근성을 고려하여 마크업 구조에 따라 <br />적절한 시멘틱 태그를 선택하여 사용 가능.</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>CSS <TbBrandCss3 className='skillIcon'/></h4>
                        <span>CSS 속성을 이해. 디자인 시안에 따라 적절한 레이아웃 구현가능.<br />미디어 쿼리를 활용하여 반응형 웹을 구현. <br /> CSS Animation활용 가능.SCSS사용가능.</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>Javascript <TbBrandJavascript className='skillIcon'/></h4>
                        <span>기초 문법과 제어문을 숙지.<br />Vanila JavaScript로 화면을 제어하고 기능을 구현가능 <br />비동기 처리를 활용한 API 데이터 연동가능</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>jQuery <DiJqueryLogo className='skillIcon'/></h4>
                        <span>다양한 종류의 슬라이더, 모달창, 스크롤이벤트, 아코디언 메뉴등 구현가능.</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>React <FaReact className='skillIcon'/></h4>
                        <span>컴퍼넌트, API를 엑시오스 활용하여 사용가능.<br />AI를 활용하여 더욱 폭 넓게 사용가능.</span>
                    </motion.li>
                    
                </motion.ul>
                <motion.ul 
                    className='design'
                    variants={listVariants}
                    initial="hidden"
                    animate={listControls}
                >
                    <motion.li variants={itemVariants}>
                        <h4>Photoshop <TbBrandAdobePhotoshop className='skillIcon'/></h4>
                        <span>사진보정, 이미지편집, 합성 가능 </span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>Illustrator <TbBrandAdobeIllustrator className='skillIcon'/></h4>
                        <span>로고, 아이콘 등 벡터 이미지 제작 가능.</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>Lightroom <BiLogoAdobe className='skillIcon'/></h4>
                        <span>사진보정, 라이트룸 내 생성형 AI활용</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>AfterEffects <TbBrandAdobeAfterEffect className='skillIcon'/></h4>
                        <span>애니메이션 제작가능, 이펙트 효과 생성가능</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>Premiere <TbBrandAdobePremier className='skillIcon'/></h4>
                        <span>애니메이션 제작가능, 이펙트 효과 생성가능</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>Figma <LuFigma className='skillIcon'/></h4>
                        <span>와이어프레임 제작 가능. 디자인 협업경험.</span>
                    </motion.li>
                </motion.ul>
                <motion.ul 
                    className='ai'
                    variants={listVariants}
                    initial="hidden"
                    animate={listControls}
                >
                    <motion.li variants={itemVariants}>
                        <h4>ChatGPT <OpenAI className='skillIcon'/></h4>
                        <span>이미지생성, 코드생성&수정 효율적인 프롬프트 작성 가능 </span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>Gemini <Gemini className='skillIcon'/></h4>
                        <span>이미지생성, 코드생성&수정 효율적인 프롬프트 작성 가능</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>flow <Google className='skillIcon'/></h4>
                        <span>Google Labs 이미지 생성 활용 경험</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>Sora <Sora className='skillIcon'/></h4>
                        <span>영상 생성 경험</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>Grok <Grok className='skillIcon'/></h4>
                        <span>이미지, 음성 생성 경험</span>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <h4>Cursor<Cursor className='skillIcon'/></h4>
                        <span>바이브코딩 사용경험</span>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    );
};

export default Skills;