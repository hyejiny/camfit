import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import {ArticleDetail} from "../../_actions/index"
import { API_BASE_URL } from "../../constants";

function ArticleDetail(props) {

    const dispatch = useDispatch();
    
    const classId = props.match.params.classId

    const [Classs, setClasss] = useState({})


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
                <h2>강의 설명 : {Classs.content}</h2>
                <hr/>
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


            {/* image */}   




            {/* info */}



        </div>
    )
}

export default ClassDetailPage
