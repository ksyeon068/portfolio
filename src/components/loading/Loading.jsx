import { useState, useEffect } from 'react';
import '../style/Loading.scss';

const text = "Loading...";

const Loading = ({ onFinish }) => {
    const [startFill, setStartFill] = useState(false);

    useEffect(() => {
        // 텍스트 애니메이션 끝나고 검은색 채우기 시작
        const timer = setTimeout(() => {
        setStartFill(true);
        }, 1400);

        // 전체 로딩 종료
        const endTimer = setTimeout(() => {
        onFinish && onFinish();
        }, 2500);

        return () => {
        clearTimeout(timer);
        clearTimeout(endTimer);
        };
    }, []);

    return (
        <div className="loading">
        <div className="loading-text">
            {text.split("").map((char, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                {char}
            </span>
            ))}
        </div>

        <div className={`fill ${startFill ? "active" : ""}`} />
        </div>
    );
};

export default Loading;