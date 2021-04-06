import React,{useEffect, useLayoutEffect, useState, useRef} from 'react'
import { useDispatch } from "react-redux";
import { videoclassdetail, videoclasslist } from "../../_actions/index"
import ProductInfo from './ProductInfo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { API_BASE_URL } from "../../constants";
import './ClassDetailPage.css';
import Image from 'react-bootstrap/Image';
// import OtherclassesBackground from './images/Abract01.png';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import 'codemirror/lib/codemirror.css';
// import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';


import PayButton from './PayButton';
import ClassButton from './ClassButton';


function ClassDetailPage(props) {
    const editorRef = useRef()
    const dispatch = useDispatch();        
    const classId = props.match.params.classId
    const [Classs, setClasss] = useState({})
    const [Classes, setClasses] = useState([])
    console.log(Classs.desc_image);

    useEffect(() => {
        dispatch(videoclassdetail(classId))
        .then((res) => {
            console.log(res.payload);
            setClasss(res.payload)            
            console.log(res.payload.content);  
        })
    }, [dispatch])

    useEffect(() => {
        dispatch(videoclasslist())
        .then((res) => {
            const class_list = res.payload
            console.log(class_list,'123');
            setClasses(class_list)
        })
    }, [dispatch])

    


    const renderCards = Classes.map((product, index) => {
        return <a href={'/videoclass/detail/'+ product.id } key={index}>
            <Card
                className="Other-Class">                     
                <Card.Body>
                    <Image className="Other-Class-Image" src={API_BASE_URL+product.image}/>
                        <Card.Title className="Other-Class-Title">
                            {product.title}
                        </Card.Title>
                        <Card.Text className="Other-Class-Price">
                            {product.price}원
                        </Card.Text>
                </Card.Body>
            </Card>
        </a>
    })
    
    return (    
        <div>
            <textarea value={Classs.content} readOnly="readOnly" style={{display:"none"}}></textarea>
            <Row>
                <Col className="imagespace" lg={6} xs={12}>
                    <Image src={API_BASE_URL + Classs.desc_image}/>
                </Col>
                <Col lg={6} xs={12}>
                    {/* ProductInfo */}
                    <ProductInfo detail={Classs} />
                </Col>                            
            </Row>
            <h2> 다른 클래스들</h2>
            <Row className="Other-Classes-Row">
                <OwlCarousel className="Other-Classes">
                    { renderCards }
                </OwlCarousel>
            </Row>
            <br/>
        </div>       
    )   
}


export default ClassDetailPage

