import React, { Component } from 'react';
import './page.css';
import SelftrainSidebar from '../component/Selftrain/SelftrainSidebar';
import SelftrainCardlist from '../component/Selftrain/SelftrainCardlist';

class Selftrain extends Component {
    render() {
        return (
            <div className="Selftrain row">
        
                <SelftrainSidebar className="col"></SelftrainSidebar>
                <div className="col" sytle="boder-sytle:dotted; border-radius:3px; border-color:black;">

                    
                    <div className="SelftrainHead">운동하기 메인</div>
                    <SelftrainCardlist></SelftrainCardlist>
                    
                </div>
                
            </div>
        )
    }
}

export default Selftrain