import React, { Component } from 'react';
import './page.css';
import honey from '../component/Info/images/honey.jpg'
import Infocard from '../component/Info/InfoCard'

class Info extends Component {
    render() {
        return (
            <div className="Info">
            
            <div style={{backgroundImage: `url("${honey}")`,
         height: "250px",
         backgroundSize: "100%, cover",
         backgroundPosition: "center, center",
         width: "100%",
         marginBottom:"50px",
         position:'relative',
         }}
         className="Infoouter">
                <h1 className="Infomid" style={{color:"white"}}> 꿀팁을 드려요 </h1>
            </div>
            <Infocard/>
            </div>
        )
    }
}

export default Info