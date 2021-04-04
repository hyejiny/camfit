import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import {videoclassdetail} from "../../_actions/index"
import { API_BASE_URL } from "../../constants";

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import { Editor } from '@toast-ui/react-editor';
// import { Viewer } from '@toast-ui/react-editor';

function ClassDetailPage(props) {

    const dispatch = useDispatch();
    
    const classId = props.match.params.classId

    const [Classs, setClasss] = useState({})

    

    const clickHandler = () => {}


    useEffect(() => {

        dispatch(videoclassdetail(classId))
        .then((res) => {
            console.log(res.payload);
            setClasss(res.payload)
            
        })
    }, [])




    return (
        <div style={{ width: '100%', padding: '3rem 4rem'}}>
            <div>
                <h1>강의명 : {Classs.title}</h1>
                <hr/>
                <Viewer
                height="500px"
                initialValue={Classs.content} />


                <h2>강의 가격 : {Classs.price}</h2>
                <img 
                height='240px'
                src={API_BASE_URL+Classs.image} />
                <hr/>
                <h2>시작날짜 : {Classs.start_day}</h2>
                <hr/>
                <h2>종료날짜 : {Classs.end_day}</h2>
            </div>
            <br/>


            <div>
                <button onClick={clickHandler}>add to cart</button>
            </div>



            {/* info */}



        </div>
    )
}

export default ClassDetailPage
