import React, { Component } from 'react';
import SelftrainSidebar from '../component/Selftrain/SelftrainSidebar';

import './page.css';

class SelftrainDetail extends Component {
    render() {
        return (
            <div className="Selftrain row">
                <SelftrainSidebar class="col"></SelftrainSidebar>
                <div className="col">

                    <h1 className="SelftrainHead">운동하기 디테일 페이지</h1>
                    <image>이미지</image>
                </div>

            </div>
        )
    }
}

export default SelftrainDetail