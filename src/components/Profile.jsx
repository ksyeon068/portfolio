import React from 'react';
import '../style/profile.scss';

const Profile = () => {
    return (
        <div>
            <div className="profile-left">
                <span>김세연</span>
                <p>사용자 경험을 중심으로 디자인하고, 이를 코드로 구현하는 김세연입니다.</p>
                <br />
                <p>시각적인 완성도와 인터랙션의 흐름을 함께 고민하며, 디자인과 개발의 경계를 자연스럽게 연결합니다.</p>
            </div>
            <div className="profile-right">
                <img src="./" alt="프로필용이미지" />
            </div>
        </div>
    );
};

export default Profile;