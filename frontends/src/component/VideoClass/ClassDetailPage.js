import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import {videoclassdetail} from "../../_actions/index"
function ClassDetailPage(props) {

    const dispatch = useDispatch();
    
    const classId = props.match.params.classId

    const [Class, setClass] = useState({})


    useEffect(() => {

        dispatch(videoclassdetail(classId))
        .then((res) => {
            console.log(res.payload);
            setClass(res.payload)
            
        })
    }, [])




    return (
        <div style={{ width: '100%', padding: '3rem 4rem'}}>
            <div style= {{ display: 'flex', justifyContent: 'center'}}>
                <h1>{Class.title} 11</h1>
            </div>
            <br/>


            {/* image */}   




            {/* info */}



        </div>
    )
}

export default ClassDetailPage
