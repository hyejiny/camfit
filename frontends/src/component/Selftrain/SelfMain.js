import React from "react";
import SelftrainSidebar from "./SelftrainSidebar";
import "./train.css";


import backk from "./운동하기 배경.jpg";

import { OverlayTrigger, Button, Popover,Row,Col } from "react-bootstrap";

function SelfMain(props) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging. right?
      </Popover.Content>
    </Popover>
  );
  return (
    <div class="outer2">
      <div
        class="jb-wrap img contrast"
        style={{
          background: `linear-gardient(to bottom,rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url(${backk}), #*1c1c1c`,
          backgroundImage: `url("${backk}")`,
          height: "900px",
          backgroundSize: "100%, cover",
          backgroundPosition: "center, center",
          width: "100%",
          position: "relative",
        }}
      ></div>

      <div class="inner2 multi2">

        <h1>"닉네임" 님 운동을 시작하시겠습니까?</h1>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">AI 운동 가이드</Button>
        </OverlayTrigger>
    
        <SelftrainSidebar/>

     
     
      </div>
      <Row>
            <Col>

            
            </Col>
        </Row>
    </div>
  );
}

export default SelfMain;
