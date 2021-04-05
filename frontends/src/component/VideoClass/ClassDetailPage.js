import React,{useEffect,useLayoutEffect, useState,useRef} from 'react'
import { useDispatch } from "react-redux";
import {videoclassdetail} from "../../_actions/index"
import ProductInfo from './ProductInfo';
import { Row, Col } from 'antd';
import { API_BASE_URL } from "../../constants";
import './ClassDetailPage.css';


import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';


import PayButton from './PayButton';
import ClassButton from './ClassButton';


function ClassDetailPage(props) {
    const editorRef = useRef()
    const dispatch = useDispatch();
    
    
    const classId = props.match.params.classId
    const [Classs, setClasss] = useState({})
    console.log(Classs.desc_image);

    useEffect(() => {

            dispatch(videoclassdetail(classId))
            .then((res) => {
                console.log(res.payload);
                setClasss(res.payload)            
                console.log(res.payload.content);  
        })

    }, [dispatch])

    

    return (
        
        <div style={{ width: '100%', padding: '3rem 4rem'}}>
            <div >

                <textarea value={Classs.content} readOnly="readOnly" style={{display:"none"}}></textarea>
                <div >
                {/* <Viewer
            viewer="true"
            // el= {document.querySelector('#viewer')}
            height="500px"
            initialValue={Classs.content}/> */}
                </div>
                <Row gutter={[16, 16]} >
                <Col lg={18} sm={24}>
                    <div className="imagespace">

                        <img src={API_BASE_URL+Classs.desc_image} alt=""/>
                    </div>
                </Col>
                <Col lg={6} sm={24}>
                    {/* ProductInfo */}
                    <ProductInfo detail={Classs} />
                </Col>
            </Row>
            </div>
            <br/>


            <div>
                {/* {Button} */}
                {/* <button onClick={clickHandler}>add to cart</button> */}
            </div>



            {/* info */}
            



        </div>
        
    )
    
}


export default ClassDetailPage

