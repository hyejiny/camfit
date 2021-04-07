
import { Container, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import "./page.css";
import "./Exercise.css";

import * as tmPose from "@teachablemachine/pose";

import { useDispatch } from "react-redux";
import {createjandi} from "../_actions/index"
const Exercise = (props) => {
  // const URL = "https://teachablemachine.withgoogle.com/models/ZefWtwqSL/";
  const dispatch = useDispatch();
  const name = props.match.params.category;
  const URL = "/teachable/" + name + "/";

  let model, webcam, ctx, labelContainer, maxPredictions;

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const size = 500;
    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    const canvas = document.getElementById("canvas");
    canvas.width = size;
    canvas.height = size;
    ctx = canvas.getContext("2d");
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
      // and class labels
      labelContainer.appendChild(document.createElement("div"));
    }
    var audio = new Audio("/wavfolder/0.wav");
    audio.play();
  }

  async function loop(timestamp) {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }
  var status = "stand";
  const [Count, setCount] = useState(0);
  var cnt = 0;
  const [Status, setStatus] = useState("");
  // run the webcam image through the image model
  async function predict() {
    // predict can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // Prediction 2: run input through teachable machine classification model
    const prediction = await model.predict(posenetOutput);
    
    if (prediction[2].probability.toFixed(2) > 0.9) {
      if (status === "armdown") {
        cnt++;
        if (cnt===10) {
          var audio = new Audio("/wavfolder/11_train_finish.wav");
          audio.play();
          dispatch(createjandi());
          // props.history.push('/selftrain')
          setTimeout(function() {
            alert('운동을 마칩니다.')
            window.location.replace('/selftrain')
          },5000)
        }
        console.log(cnt, "정상카운트");
        setCount(cnt);
        // 음성 넣을 부분
        const wavPath = "/wavfolder/" + cnt + ".wav";
        var audio = new Audio(wavPath);
        audio.play();
      }
      if (status !== "armup") {
        status = "armup";
        setStatus(status);
        console.log("일어남");
      }
    } else if (prediction[1].probability.toFixed(2) > 0.9) {
      if (status !== "wrongpose") {
        status = "wrongpose";
        setStatus(status);
        console.log("wrongpose");
        var audio = new Audio("/wavfolder/12_check_your_pose.wav");
        audio.play();
      }
    } else if (prediction[0].probability.toFixed(2) > 0.9) {
      if (status !== "armdown") {
        status = "armdown";
        setStatus(status);
        console.log("armdown");      }
    }
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;
    }
    // finally draw the poses
    drawPose(pose);
  }
  function drawPose(pose) {
    if (webcam.canvas) {
      ctx.drawImage(webcam.canvas, 0, 0);
      // draw the keypoints and skeleton
      if (pose) {
        const minPartConfidence = 0.5;
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  }

  return (
    <Container className="container">
      <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8.3/dist/teachablemachine-pose.min.js"></script>
      <Row>
        <Col className="mt-5">
          <video
            width="500"
            height="500"
            // controls
            autoPlay
            muted
          >
            <source src="/media/Woman.mp4" type="video/mp4" />
          </video>
        </Col>
        <Col>
          <div>Teachable Machine Pose Model</div>
          <button type="button" onClick={init}>
            Start
          </button>
          <div>
            <div style={{ position: "relative" }}>
              <canvas style={{ position: "absolute" }} id="canvas"></canvas>
              <div
                style={{
                  position: "absolute",
                  marginLeft: "35%",
                  fontSize: "100px",
                  fontStyle: "yellow",
                }}
              >
                {Status}
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }} id="label-container"></div>
        </Col>
      </Row>
      <div style={{ textAlign: "right", marginRight: "40px" }}>
        <h2 style={{ color: "green" }}>{Count}회</h2>
        <button
          type="btn"
          href="/selftrain"
          style={{ width: "100px", height: "30px" }}
        >
          뒤로
        </button>
      </div>
    </Container>
  );
};

export default Exercise;
