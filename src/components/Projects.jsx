import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Mousewheel } from "swiper/modules";
import { motion, useAnimation, useInView   } from "framer-motion";

import { FaGithub } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/thumbs";

import '../style/projects.scss';

const slides = [
  {
    img: "/img/slider1.jpg",
    title: "관악구청 클론코딩",
    subtitle: "html / css / swiper / API / JavaScript \n 메인페이지만 제작 \n 개인",
    siteLink: "https://ksyeon068.github.io/Gwanak-gu_clone/",
    gitLink: "https://github.com/ksyeon068/Gwanak-gu_clone"
  },
  {
    img: "/img/slider2.jpg",
    title: "관악성모이비인후과 클론코딩",
    subtitle: "html / scss / swiper / JavaScript \n 반응형으로 제작 \n 개인",
    siteLink: "https://ksyeon068.github.io/Gwanak-S-ENT/",
    gitLink: "https://github.com/ksyeon068/Gwanak-S-ENT"
  },
  {
    img: "/img/slider3.jpg",
    title: "MoodScape",
    subtitle: "react / scss / API / swiper \n 팀프로젝트 / git관리 / Vercel배포 \n Header, Footer, Section3",
    siteLink: "https://mood-scape-umber.vercel.app/",
    gitLink: "https://github.com/ksyeon068/MoodScape"
  },
  {
    img: "/img/slider4.jpg",
    title: "ECLAT",
    subtitle: "react / scss / swiper \n 팀프로젝트 / 데이터 파일 생성&관리 \n Details / 반응형,로그인페이지 연동예정",
    siteLink: "https://eclat-t.vercel.app/",
    gitLink: "https://github.com/seongeun040624/eclatT.git"
  },
  {
    img: "/img/slider5.jpg",
    title: "Portfolio",
    subtitle: "react / scss / swiper \n 반응형으로 제작 / Vercel배포 \n 개인 / 디테일 수정예정",
    siteLink: "https://eclat-t.vercel.app/",
    gitLink: "https://github.com/seongeun040624/eclatT.git"
  }
];


const Projects = () => {
    //제목 모션//
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const boxControls = useAnimation();
    const listControls = useAnimation();
    const boxVariants = {
        hidden: { x: "-100%" },
        visible: {
            x: "100%",
            transition: {
            duration: 1.0,
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
    useEffect(() => {
        if (!isInView) return;

        const sequence = async () => {
            await new Promise(res => setTimeout(res, 200));
            await boxControls.start("visible");
            await listControls.start("visible");
        };
        sequence();
    }, [isInView]);

    //스와이퍼 제어//
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [mainSwiper, setMainSwiper] = useState(null);
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const isScrolling = useRef(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const wheelHandler = (e) => {
            if (!mainSwiper) return;
            const isFirst = mainSwiper.activeIndex === 0;
            const isLast = mainSwiper.activeIndex === slides.length - 1;

            const isMovingNext = e.deltaY > 0 && !isLast;
            const isMovingPrev = e.deltaY < 0 && !isFirst;

            if (isMovingNext || isMovingPrev) {
                if (e.cancelable) e.preventDefault();
                if (isScrolling.current) return;
                isScrolling.current = true;
                if (e.deltaY > 0) {mainSwiper.slideNext();}
                else { mainSwiper.slidePrev();}
                setTimeout(() => {isScrolling.current = false;}, 500);
            }
        };
        el.addEventListener("wheel", wheelHandler, { passive: false });
        return () => {
            el.removeEventListener("wheel", wheelHandler);
        };
    }, [mainSwiper]);

    const thumbItemRef = useRef(null);
    const [thumbHeight, setThumbHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (thumbItemRef.current) {
            setThumbHeight(thumbItemRef.current.offsetHeight + 10);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);
    const slideRefs = useRef([]);
        useEffect(() => {
    const updateHeight = () => {
        const el = slideRefs.current[0];
        if (!el) return;

        const gap = 10; // swiper gap
        setThumbHeight(el.offsetHeight + gap);
    };

    setTimeout(updateHeight, 100); 
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
    }, []);
    return (
        <>
        <div className='projects_W' ref={ref}>
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
                    Projects
                </motion.h3>
            </div>
            <div 
                className='projects' 
                ref={containerRef}
                style={{ overscrollBehavior: "contain" }}
            >
                <div className='contentRow'>
                    <div className="leftArea">
                        {/* 텍스트 */}
                        <div className="textBox">
                            <h3 className="title">{slides[activeIndex]?.title}</h3>
                            <p className="subtitle">{slides[activeIndex]?.subtitle}</p>
                            <a href={slides[activeIndex]?.gitLink} target="_blank"><FaGithub /> Git</a>
                        </div>
        
                        {/* 썸네일 */}
                        <Swiper
                            initialSlide={0}
                            modules={[Thumbs, Mousewheel]}
                            onSwiper={setThumbsSwiper}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            direction="vertical"
                            slidesPerView={6}
                            mousewheel={false}
                            touchReleaseOnEdges={true}
                            className="thumbsSwiper"
                        >
                            {slides.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div ref={(el) => (slideRefs.current[i] = el)}>
                                        <img src={item.img} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div 
                            className="scrollbox" 
                            style={{ 
                                transform: `translateY(${activeIndex * thumbHeight}px) rotate(${activeIndex * 90}deg)`
                            }}
                        >
                        </div>
                    </div>
            
                    {/* 메인슬라이드이미지 */}
                    <Swiper
                        initialSlide={0}
                        modules={[Thumbs, Mousewheel]}
                        onSwiper={setMainSwiper}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        direction="vertical"
                        mousewheel={false}
                        slidesPerView={1}
                        touchReleaseOnEdges={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className="mainSwiper"
                    >
                        {slides.map((item, i) => (
                        <SwiperSlide key={i}>
                            <a href={item.siteLink} target="_blank">
                            <img src={item.img} />
                            </a>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
        <div className="mo">
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
                    Projects
                </motion.h3>
            </div>
            <div className="projectsList">
                {slides.map((item, i) => (
                    <div className="projectItem" key={i}>
                        <a href={item.siteLink} target="_blank" rel="noopener noreferrer">
                            <img src={item.img} alt={item.title} />
                        </a>
                        <div className="textBox_m">
                            <div className='t_g'>
                                <h3>{item.title}</h3>
                                <a href={item.gitLink}
                                target="_blank" rel="noopener noreferrer">
                                <FaGithub />GitHub
                                </a>
                            </div>
                            <p>
                            {item.subtitle.split("\n").map((line, idx) => (
                                <span key={idx}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                            </p>
                            
                        </div>

                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Projects;