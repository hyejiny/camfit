import React, { Component, useState } from 'react';
import './page.css';
import SelftrainSidebar from '../component/Selftrain/SelftrainSidebar';
import SelftrainCardlist from '../component/Selftrain/SelftrainCardlist';
// import { useStore } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selftrainlist } from '../_actions';


function Selftrain() {
    const [Category, setCategory] = useState('모두');

    // const category = ''
    // if (StorageEvent.subscribe)
    return (
        <div className="Selftrain row">
    
            <SelftrainSidebar className="col" setCategory={setCategory}></SelftrainSidebar>
            <div className="col" sytle="boder-sytle:dotted; border-radius:3px; border-color:black;">

                
                <div className="SelftrainHead">{Category}</div>
                <SelftrainCardlist></SelftrainCardlist>
                
            </div>
            
        </div>
    )

}

export default Selftrain