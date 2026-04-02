import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";

import '../style/projects.scss';

const slides = [
  {
    img: "/img/slider1.jpg",
    title: "관악구청 클론코딩",
    subtitle: "html / css / swiper / API / JavaScript \n 메인페이지만 제작",
    siteLink: "https://ksyeon068.github.io/Gwanak-gu_clone/",
    gitLink: "https://github.com/ksyeon068/Gwanak-gu_clone"
  },
  {
    img: "/img/slider2.jpg",
    title: "관악성모이비인후과 클론코딩",
    subtitle: "html / scss / swiper / JavaScript \n 반응형으로 제작",
    siteLink: "https://ksyeon068.github.io/Gwanak-S-ENT/",
    gitLink: "https://github.com/ksyeon068/Gwanak-S-ENT"
  },
  {
    img: "/img/slider3.jpg",
    title: "MoodScape",
    subtitle: "react / scss / API / swiper \n 팀프로젝트 / git관리 / Vercel배포 / Header, Footer, Section3",
    siteLink: "https://mood-scape-umber.vercel.app/",
    gitLink: "https://github.com/ksyeon068/MoodScape"
  }
];


const Projects = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='projects'>
                <div className="leftArea">
                    {/* 텍스트 */}
                    <div className="textBox">
                        <h3 className="title">{slides[activeIndex]?.title}</h3>
                        <p className="subtitle">{slides[activeIndex]?.subtitle}</p>
                        <a href={slides[activeIndex]?.gitLink} target="_blank">Git</a>
                    </div>
    
                    {/* 썸네일 */}
                    <Swiper
                        modules={[Mousewheel]}
                        onSwiper={setThumbsSwiper}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        direction="vertical"
                        slidesPerView={6}
                        mousewheel={true}
                        className="thumbsSwiper"
                    >
                        {slides.map((item, i) => (
                            <SwiperSlide key={i}>
                            <img src={item.img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
    
                {/* 메인슬라이드이미지 */}
                <Swiper
                    modules={[Thumbs, Mousewheel]}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    direction="vertical"
                    mousewheel={{releaseOnEdges: true}}
                    slidesPerView={1}
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