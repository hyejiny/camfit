import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import {videoclassdetail} from "../../_actions/index"


import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

import PayButton from './PayButton';
import ClassButton from './ClassButton';

function ClassDetailPage(props) {

    const dispatch = useDispatch();
    
    const classId = props.match.params.classId
    const [Classs, setClasss] = useState({})

    

    let Button;
    let isLoggedIn = false;
    if(isLoggedIn) {
        Button = <PayButton/>;
    }else{
        Button = <ClassButton/>;
    }


    useEffect(() => {

        dispatch(videoclassdetail(classId))
        .then((res) => {
            console.log(res.payload);
            setClasss(res.payload)            
            console.log(res.payload.content);
            // setContent(res.payload.content)
        })
    }, [dispatch])

    return (
        <div style={{ width: '100%', padding: '3rem 4rem'}}>
            <div>
                <h1>강의명 : {Classs.title}</h1>
                <hr/>
                <h2>강의 내용 : </h2>

                <textarea value={Classs.content} readOnly="readOnly" style={{display:"none"}}></textarea>
                <Viewer
                height="500px"
                Value={Classs.content}/>
                <h2>강의 가격 : {Classs.price}</h2>

                <hr/>
                <h2>시작날짜 : {Classs.start_day}</h2>
                <hr/>
                <h2>종료날짜 : {Classs.end_day}</h2>
            </div>
            <br/>


            <div>
                {Button}
                {/* <button onClick={clickHandler}>add to cart</button> */}
            </div>



            {/* info */}



        </div>
    )
}

export default ClassDetailPage
