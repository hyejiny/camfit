import React, { Component } from 'react';
import './page.css';
import CamFitWhat from '../component/Mainpage/CamFitWhat';
import CamFitWhy from '../component/Mainpage/CamFitWhy';
import CamFitHow from '../component/Mainpage/CamFitHow';

class Mainpage extends Component {
    render() {
        return (
            <div className="Mainpage">
                <CamFitWhat/>
                <h2>홈 피트니스(Fit)를 하는 동안, 웹 카메라(Cam)를 통해 촬영하면</h2>
                <h2>AI가 사용자의 자세를 음성으로 트레이닝해주는 서비스</h2>
                <CamFitWhy/>
                <CamFitHow/>
            </div>
        )
    }
}

export default Mainpage