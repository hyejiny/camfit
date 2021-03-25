import React, { Component } from 'react';
import './page.css';
import InfoCard from '../component/Info/InfoCard'


class Info extends Component {
    render() {
        return (
            <div className="Info">정보게시판
            
            <InfoCard/>
            </div>
        )
    }
}

export default Info