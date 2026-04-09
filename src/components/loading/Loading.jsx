import { useEffect, useState } from "react";
import "../style/loading.scss";

const Loading = ({ onFinish }) => {
  const [active, setActive] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // 0.2초 뒤 물 올라오기 시작
    setTimeout(() => setActive(true), 1000);

    // 0.5초 뒤 텍스트 등장
    setTimeout(() => setShowText(true), 50);

    // 모든 애니메이션이 끝나고 배경이 화면을 다 덮었을 때 (약 2.2초 정도가 적당합니다)
    setTimeout(() => {
      onFinish();
    }, 2200);
  }, [onFinish]);

  return (
    <div className={`loading ${active ? "active" : ""}`}>
      {/* 배경 레이어 */}
      <div className="wave"></div>

      {/* 텍스트 레이어 */}
      <div className={`loadingText ${showText ? "show" : ""}`}>
        <h1>
          LOADING
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </h1>
      </div>
    </div>
  );
};

export default Loading;