import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Mousewheel } from "swiper/modules";

import { FaGithub } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/thumbs";

import '../style/projects.scss';

const slides = [
  {
    img: "/img/slider1.jpg",
    title: "관악구청 클론코딩",
    subtitle: "html / css / swiper / API / JavaScript \n 메인페이지만 제작 \n 개인100%",
    siteLink: "https://ksyeon068.github.io/Gwanak-gu_clone/",
    gitLink: "https://github.com/ksyeon068/Gwanak-gu_clone"
  },
  {
    img: "/img/slider2.jpg",
    title: "관악성모이비인후과 클론코딩",
    subtitle: "html / scss / swiper / JavaScript \n 반응형으로 제작 \n 개인100%",
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
    subtitle: "react / scss / swiper \n 팀프로젝트 / 데이터 파일 생성&관리 \n Details ",
    siteLink: "https://mood-scape-umber.vercel.app/",
    gitLink: "https://github.com/ksyeon068/MoodScape"
  }
];


const Projects = () => {
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
                if (e.deltaY > 0) {
                    mainSwiper.slideNext();
                } else {
                    mainSwiper.slidePrev();
                }

                setTimeout(() => {
                    isScrolling.current = false;
                }, 500);
            }
            
        };
        el.addEventListener("wheel", wheelHandler, { passive: false });

        return () => {
            el.removeEventListener("wheel", wheelHandler);
        };
    }, [mainSwiper]);

    

    return (
        <div 
            className='projects' 
            ref={containerRef}
            style={{ overscrollBehavior: "contain" }}
        >
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
                            <img src={item.img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div 
                        className="scrollbox" 
                        style={{ 
                            transform: `translateY(${activeIndex * 600}%) rotate(${activeIndex * 720}deg)`
                        }}
                    ></div>
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
    );
};

export default Projects;