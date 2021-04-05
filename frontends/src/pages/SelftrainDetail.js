// import React, { Component} from 'react';
import { Row, Col } from "react-bootstrap";
import "./page.css";
import React, { useState } from "react";
import SelfDetail from "../component/Selftrain/SelfDetail";
import Selfdetailcate from "../component/Selftrain/Selfdetailcate";

function SelftrainDetail(props) {

  const [id, setId] = useState(0)

  return (
    <Row style={{height:'500px'}}>
      <Col xs={2}>
        <div
          style={{ backgroundColor: "green", height: "auto", width: "100%" }}
        >
          <Selfdetailcate setId={setId} trainId={props.match.params}></Selfdetailcate>
        </div>
      </Col>
          <SelfDetail id={id} trainId={props.match.params}></SelfDetail>
    </Row>
  );
}

export default SelftrainDetail;
