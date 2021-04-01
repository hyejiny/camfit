import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {videoclassdetail} from "../../_actions/index"
function ClassDetailPage(props) {

    const dispatch = useDispatch();
    
    const classId = props.match.params.classId

    useEffect(() => {

        dispatch(videoclassdetail(classId))
        .then((res) => {
            console.log(res.payload);
            
        })
    }, [])




    return (
        <div>
            detail
        </div>
    )
}

export default ClassDetailPage
