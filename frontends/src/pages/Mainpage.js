import React, { Component } from 'react';
import './page.css';

class Mainpage extends Component {
    render() {
        return (
            <div className="Mainpage">
                {/* <img src="@/images/CamFit.jpg" alt=""/> */}
                <h2>홈 피트니스(Fit)를 하는 동안, 웹 카메라(Cam)를 통해 촬영하면</h2>
                <h2>AI가 사용자의 자세를 음성으로 트레이닝해주는 서비스</h2>
            </div>
        )
    }
}

export default Mainpage