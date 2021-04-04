import React, { Component, useState } from "react";
import "./page.css";
import SelftrainSidebar from "../component/Selftrain/SelftrainSidebar";
import SelftrainCardlist from "../component/Selftrain/SelftrainCardlist";
import SelfMain from "../component/Selftrain/SelfMain";
import backk from "./운동하기 배경.jpg";


function Selftrain() {

  return (
    <div className="Selftrain">
        <SelfMain></SelfMain>
    </div>
  );
}

export default Selftrain;
