import React, {useState} from 'react';
import './page.css';
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
        <div>
            <div className='app__container'>
                <video
                    height={HIGHT}
                    width={WIDTH}
                    muted
                    autoPlay
                    className="app__videoFeed">
                </video>    
            </div>    
            <div className="app__target">
                {playing ? (
                    <button onClick={stopVideo}>Stop</button>
                    ):(
                        <button onClick={startVideo}>Start</button>
                        
                )}
            </div>
        </div>
    );
};

export default Exercise;
