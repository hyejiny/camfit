// import React, { Component} from 'react';
import {
  Carousel,
  Button,
  Row,
  Col,
  Container,
  ListGroup,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { API_BASE_URL } from "../../constants";
function SelfDetail(props) {
  const store = useStore();
  const TrainInfo = store.getState().selftrainlist.list;
  const [tmp, setTmp] = useState('');
  const changeStore = () => {setTmp(1)};
  const unsubscribe = store.subscribe(changeStore);
  var detail = null;
  if (TrainInfo) {
    detail = (
      <Col>
        <Row style={{
            height:'100%', 
            alignItems:'center', 
            justifyContent:'center',
            textAlign:'center'
            }}>
          <Col>
            <Carousel
              className="CarouselImg my-auto"
              style={{ background: "gray", marginLeft:'30%' }}
            >
              <Carousel.Item>
                <img
                  className="d-block"
                  width="400px"
                  height="300px"
                  src={API_BASE_URL + TrainInfo[props.id].thumbnail}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <img
                  className="d-block"
                  width="400px"
                  height="300px"
                  src={API_BASE_URL + TrainInfo[props.id].thumbnail2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <img
                  className="d-block"
                  width="400px"
                  height="300px"
                  src={API_BASE_URL + TrainInfo[props.id].thumbnail3}
                  alt="First slide"
                />

                {/* <Carousel.Caption>
                          <h3 style={{color:'black'}}>Third slide label</h3>
                          <p style={{color:'black'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <div className="col text-align-center">
              <h1>{TrainInfo[props.id].title}</h1>
              <h2>{TrainInfo[props.id].content}</h2>
              <h3> 운동 관련 설명</h3>
              <Button href="/selftrain/exercise">운동 시작 하기</Button>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
  return detail;
}

export default SelfDetail;
