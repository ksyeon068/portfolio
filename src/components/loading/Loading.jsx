import { useEffect, useState } from "react";
import "../style/loading.scss";

const Loading = ({ onFinish }) => {
  const [active, setActive] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setActive(true), 1000);

    setTimeout(() => setShowText(true), 50);

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