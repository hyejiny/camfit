import React from "react";
import { useDispatch } from "react-redux";
import "../Info/info.css";
import "./main.css"
import backgr from "./images/메인 이미지.jpg";

function MainTop(props) {


  return (
    <div className="outer2">
      <div
        className="jb-wrap img contrast2"
        style={{
            backgroundImage: `url("${backgr}")`,
            height: "700px",
            backgroundSize: "100%, cover",
            backgroundPosition: "center, center",
            width: "100%",
            position: "relative",
          }}
      ></div>

      <div className="bottomleft">
        <h1 style={{ color: "white" }}>당신의 홈트 파트너 캠피트
        // 밝은 이미지로 갈가?? 고민 ㅠ</h1>
      </div>
      
    </div>
  );
}

export default MainTop;
