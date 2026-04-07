import React from 'react';
import '../style/Skills.scss';

const Skills = () => {
    return (
        <div className='skills'>
            <ul className='develop'>
                <li>
                    <h4>HTML</h4>
                    <span>웹 표준을 준수하고 접근성을 고려하여 마크업 구조에 따라 <br />적절한 시멘틱 태그를 선택하여 사용 가능.</span>
                </li>
                <li>
                    <h4>CSS</h4>
                    <span>CSS 속성을 이해하고 디자인 시안에 따라 적절한 레이아웃을 구현할 수 있음.<br />미디어 쿼리를 활용하여 반응형 웹을 구현. CSS Animation활용 가능.SCSS사용가능.</span>
                </li>
                <li>
                    <h4>Javascript</h4>
                    <span>기초 문법과 제어문을 숙지.<br />Vanila JavaScript로 화면을 제어하고 기능을 구현가능 <br />비동기 처리를 활용한 API 데이터 연동가능</span>
                </li>
                <li>
                    <h4>jQuery</h4>
                    <span>다양한 종류의 슬라이더, 모달창, 스크롤이벤트, 아코디언 메뉴등을 구현가능.</span>
                </li>
                <li>
                    <h4>React</h4>
                    <span>컴퍼넌트, API를 엑시오스 활용하여 사용가능.<br />AI를 활용하여 더욱 폭 넓게 사용가능.</span>
                </li>
                
            </ul>
            <ul className='design'>
                <li>
                    <h4>Photoshop</h4>
                    <span>사진보정, 이미지편집, 합성 가능 </span>
                </li>
                <li>
                    <h4>Illustrator</h4>
                    <span>로고, 아이콘 등 벡터 이미지 제작 가능.</span>
                </li>
                <li>
                    <h4>Lightroom</h4>
                    <span>사진보정, 라이트룸 내 생성형 AI활용</span>
                </li>
                <li>
                    <h4>AfterEffects</h4>
                    <span>애니메이션 제작가능, 이펙트 효과 생성가능</span>
                </li>
                <li>
                    <h4>Figma</h4>
                    <span>와이어프레임 제작 가능.디자인 협업경험.</span>
                </li>
            </ul>
        </div>
    );
};

export default Skills;