import Iframe from 'react-iframe';
import {Container, Col, Row} from 'react-bootstrap';
import React, {useState} from 'react';
import './page.css';
import './Exercise.css';
const Exercise = () => {
    const [playing,setPlaying] =useState(false);

    const HIGHT = 500;
    const WIDTH = 500;

    const startVideo = () => {
        setPlaying(true)
        navigator.getUserMedia(
            {
                video: true,
            },
            (stream) => {
                let video = document.getElementsByClassName('app__videoFeed')[0];
                if (video) {
                    video.srcObject =stream;
                }
            },
            (err) => console.error(err)
            );
        };
        const stopVideo = () => {
            setPlaying(false)
            let video = document.getElementsByClassName('app__videoFeed')[0];
            video.srcObject.getTracks()[0].stop();
    };
    return (
        <Container className="container">
            <Row>
                <Col lg="3" className="youtube mt-5">
                    <Iframe url="https://www.youtube.com/embed/zmRRuvNAKGo"
                            width="500px"
                            height="400px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"/>    
                </Col>
                <Col lg="3"></Col>
                <Col lg="3" className='app__container'>
                    <video
                        height={HIGHT}
                        width={WIDTH}
                        muted
                        autoPlay
                        className="app__videoFeed">
                    </video>    
                    <div className="app__target">
                        {playing ? (
                            <button onClick={stopVideo}>Stop</button>
                            ):(
                                <button onClick={startVideo}>Start</button>
                                
                                )}
                    </div>
                </Col>    
            </Row>
        </Container>
    );
};

export default Exercise;
