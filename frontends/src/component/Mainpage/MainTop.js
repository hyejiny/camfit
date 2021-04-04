import React from "react";
import { useDispatch } from "react-redux";
import "../Info/info.css";
import "./main.css"
import backgr from "./images/메인 이미지.jpg";

function MainTop(props) {


  return (
    <div>
      <div
        className="jb-wrap outer2 img contrast2"
        style={{
            backgroundImage: `url("${backgr}")`,
            height: "500px",
            backgroundSize: "100%, cover",
            backgroundPosition: "center, center",
            width: "100%",
            // position: "relative",
          }}
      ></div>

      <div className="bottomleft">
        <h1 style={{ color: "white" }}>Make Your Wonderful Body</h1>

        <h1 style={{ color: "white" }}>with "CamFit"</h1>
      </div>
      
    </div>
  );
}

export default MainTop;
