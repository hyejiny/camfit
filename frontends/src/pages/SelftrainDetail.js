// import React, { Component} from 'react';
import SelftrainSidebar from "../component/Selftrain/SelftrainSidebar";
import { Carousel, Button } from "react-bootstrap";
import "./page.css";
import React, { useEffect, useState } from "react";
import { selftraindetail } from "../_actions/index";
import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../constants";

import img1 from "../media/logo512.png";
function SelftrainDetail(props) {
  const dispatch = useDispatch();
  const [TrainInfo, setTrainInfo] = useState([]);
  useEffect(() => {
    let trainId = props.match.params.id;
    console.log(trainId, "아이디");
    dispatch(selftraindetail(trainId)).then((res) => {
      const tmp_list = res.payload;
      setTrainInfo(tmp_list);
      console.log(TrainInfo);
    });
  }, [dispatch]);

  return (
    <div className="Selftrain row">
      <SelftrainSidebar className="col"></SelftrainSidebar>
      <div className="col SelftrainCarousel">
        <div className="row">
          <Carousel
            className="CarouselImg col-4 my-auto"
            style={{ background: "gray" }}
          >
            <Carousel.Item>
              <img
                className="d-block"
                width="300"
                height="300"
                // src={require("holder.js/800x400?text=First slide&bg=373940")}
                src={API_BASE_URL + TrainInfo.thumbnail}
                alt="First slide"
              />
              {/* <Carousel.Caption>
                            <h3 style={{color:'black'}}>First slide label</h3>
                            <p style={{color:'black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                // src={require("../media/logo512.png")}
                src={img1}
                // src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              {/* <Carousel.Caption>
                            <h3 style={{color:'black'}}>Second slide label</h3>
                            <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                // src={require("../media/logo512.png")}
                src={img1}
                // src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                            <h3 style={{color:'black'}}>Third slide label</h3>
                            <p style={{color:'black'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
          <div className="col text-align-center">
            <h1>{TrainInfo.title}</h1>
            <h2>{TrainInfo.content}</h2>
            <Button href="/selftrain/exercise">sfad</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelftrainDetail;
