import Iframe from 'react-iframe';
import {Container, Col, Row} from 'react-bootstrap';
import React, {useState} from 'react';
import './page.css';
import './Exercise.css';
import * as tf from '@tensorflow/tfjs';
import * as tmPose from '@teachablemachine/pose';
const Exercise = () => {
    
    const URL = "https://teachablemachine.withgoogle.com/models/ZefWtwqSL/";
    // const URL = "../teachable/";

    let model, webcam, ctx, labelContainer, maxPredictions;

    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const size = 200;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        const canvas = document.getElementById("canvas");
        canvas.width = size; canvas.height = size;
        ctx = canvas.getContext("2d");        
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }
    var status = "stand"
    var count = 0

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        // Prediction 2: run input through teachable machine classification model
        const prediction = await model.predict(posenetOutput);
        if(prediction[0].probability.toFixed(2)>0.9) {
            if(status == 'sit') {
                count++
                console.log(count)
                // 음성 넣을 부분
            }
            if (status != 'stand') {
                status = "stand"
                console.log('일어남')
            }
        } else if(prediction[1].probability.toFixed(2) >0.9) {
            if (status != "sit") {
                status = "sit"
                console.log('앉음')
            }
        } else if(prediction[2].probability.toFixed(2) >0.9) {
            if (status != "허리") {
                status = "허리"
                console.log('허리가 굽었음')
                // 음성 넣을 부분
            }
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
            {/* <script type="text/javascript"></script> */}
            <Row>
                <Col>
                    <iframe src="../media/비디오샘플.mp4"></iframe>
                </Col>
                <Col>
                    <div>Teachable Machine Pose Model</div>
                    <button type="button" onClick={init}>Start</button>
                    <div><canvas id="canvas"></canvas></div>
                    <div id="label-container"></div>
                    <button type="btn" href="/selftrain">뒤로</button>
                </Col>
            </Row>
        </Container>
    );
    // const [playing,setPlaying] =useState(false);

    // const HIGHT = 500;
    // const WIDTH = 500;

    // const startVideo = () => {
    //     setPlaying(true)
    //     navigator.getUserMedia(
    //         {
    //             video: true,
    //         },
    //         (stream) => {
    //             let video = document.getElementsByClassName('app__videoFeed')[0];
    //             if (video) {
    //                 video.srcObject =stream;
    //             }
    //         },
    //         (err) => console.error(err)
    //         );
    //     };
    //     const stopVideo = () => {
    //         setPlaying(false)
    //         let video = document.getElementsByClassName('app__videoFeed')[0];
    //         video.srcObject.getTracks()[0].stop();
    // };
    // return (
    //     <Container className="container">
    //         <Row>
    //             <Col lg="3" className="youtube mt-5">
    //                 <Iframe url="https://www.youtube.com/embed/zmRRuvNAKGo"
    //                         width="500px"
    //                         height="400px"
    //                         id="myId"
    //                         className="myClassname"
    //                         display="initial"
    //                         position="relative"/>    
    //             </Col>
    //             <Col lg="3"></Col>
    //             <Col lg="3" className='app__container'>
    //                 <video
    //                     height={HIGHT}
    //                     width={WIDTH}
    //                     muted
    //                     autoPlay
    //                     className="app__videoFeed">
    //                 </video>    
    //                 <div className="app__target">
    //                     {playing ? (
    //                         <button onClick={stopVideo}>Stop</button>
    //                         ):(
    //                             <button onClick={startVideo}>Start</button>
                                
    //                             )}
    //                 </div>
    //             </Col>    
    //         </Row>
    //     </Container>
    // );
};

export default Exercise;
