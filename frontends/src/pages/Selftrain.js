import React, { Component, useState } from 'react';
import './page.css';
import SelftrainSidebar from '../component/Selftrain/SelftrainSidebar';
import SelftrainCardlist from '../component/Selftrain/SelftrainCardlist';
import SelfMain from '../component/Selftrain/SelfMain';
// import { useStore } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selftrainlist } from '../_actions';


function Selftrain() {
    

    // const category = ''
    // if (StorageEvent.subscribe)
    return (
        <div className="">
            <div style={{ width: '100%', margin : '0'}}>
            <SelfMain/>
            
        </div>
        {/* <div>

                <SelftrainCardlist></SelftrainCardlist>
        </div> */}
            {/* <SelftrainSidebar className="col" setCategory={setCategory}></SelftrainSidebar>
            <div className="col" sytle="boder-sytle:dotted; border-radius:3px; border-color:black;">

                <div className="SelftrainHead">{Category}</div>
            
            </div> */}
            
        </div>
    )

}

export default Selftrain