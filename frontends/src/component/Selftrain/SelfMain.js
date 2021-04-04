import React, { useState } from "react";
import SelftrainSidebar from "./SelftrainSidebar";
import SelftrainCardlist from "./SelftrainCardlist";
import "./train.css";

import { OverlayTrigger, Button, Popover, Row, Col } from "react-bootstrap";

function SelfMain(props) {
  const [Category, setCategory] = useState("팔");
  // const [Vis, setVis] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
  const nickname = window.localStorage.getItem("usernickname");
  return (
    <div class="inner2">
      {nickname ? (
        <h1>"{nickname}" 님 운동을 시작하시겠습니까?</h1>
      ) : (
        <h1>로그인 후 사용해주세요</h1>
      )}
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">AI 운동 가이드</Button>
      </OverlayTrigger>

      <SelftrainSidebar
        setCategory={setCategory}
        categoryname={Category}
      ></SelftrainSidebar>

      {/* <SelftrainCardlist visible={Vis} /> */}
    </div>
  );
}

export default SelfMain;
