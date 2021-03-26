import React from 'react';
import '../component.css';
import { useDispatch } from "react-redux";
import {selftrainlist} from '../../_actions/index';

function SelftrainSidebar(props) {
    const dispatch = useDispatch();

    const shoulder = () => {
        dispatch(selftrainlist())
    }
    // const arm = () => {

    // }
    // const bottom = () => {

    // }

    return (
        <div className="SelftrainSidebar">
        <h1 onClick={shoulder}>어깨</h1>
        {/* <a onclick={arm}>팔</a> */}
        {/* <a onclick={bottom}>하체</a> */}

    </div>
    )

    
}

export default SelftrainSidebar 