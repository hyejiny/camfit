import React, { Component } from 'react';
import Background from './images/CamFit.png';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'antd';

class MainImage extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col xs={16}><Image src={Background} fluid/></Col>
        </Row>
      </div>
    );
  }
}

export default MainImage;