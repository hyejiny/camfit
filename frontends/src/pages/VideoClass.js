import React, {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import { videoclasslist } from "../_actions/index";
import { API_BASE_URL } from "../constants";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {HighlightOutlined} from '@ant-design/icons';
import './VideoClass.css';
// import ReactCardCarousel from "react-card-carousel";

// import SearchFeature from '../component/utils/SearchFeature'
function VideoClass() {

    const dispatch = useDispatch();
    const username = window.localStorage.getItem('usernickname')

    const [Classes, setClasses] = useState([])
    // const [MyClasses, setMyClasses] = useState([])
    useEffect(() => {
        dispatch(videoclasslist())
        .then((res) => {
            const class_list = res.payload
            console.log(class_list);
            setClasses(class_list)
        })
    }, [dispatch])


    const renderMyClasses = Classes.map((product, index) => {
        if (product.person===username)
        return <Col lg={3} md={6} xs={12} key={index}>
            <a className="MyClasses-Wrapper" href={'/videoclass/detail/'+ product.id}>
                <Card className="MyClasses-Card">
                    <Card.Img className="Classes-Img" src={API_BASE_URL+product.image}/>              
                    <Card.Body>
                        <Card.Title className="Classes-Trainer">{product.title}</Card.Title>
                        <Card.Text className="Classes-Title">{product.user.username}</Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    })


    const renderCards = Classes.map((product, index) => {
        return <Col lg={3} md={6} xs={12} key={index}>
            <a className="Classes-Wrapper" href={'/videoclass/detail/'+ product.id}>
                <Card className="Classes-Card">
                    <Card.Img className="Classes-Img" src={API_BASE_URL+product.image}/>              
                    <Card.Body>
                        <Card.Title className="Classes-Trainer">{product.title}</Card.Title>
                        <Card.Text className="Classes-Title">{product.user.username}</Card.Text>
                    </Card.Body>
                    <Card.Footer >
                        <p className="Classes-Price">{product.price}원</p>
                    </Card.Footer>
                </Card>
            </a>
        </Col>
    })

    
    return (
        <div>
            <button>
              <a href="/videoclass/upload">upload</a>
            </button>

            <div style={{ textAlign: 'center'}}>
                <h2>유료 클래스<HighlightOutlined /></h2>
            </div>


            {/* filter */}



            {/* search */}



            {/* cards */}
            <h1 style={{ textAlign: 'center'}}>Myclass</h1>
            <Row gutter= {16, 16}>
                {renderMyClasses}
            </Row>

            <h1 style={{ textAlign: 'center'}}>Classes</h1>
            <Row gutter= {16, 16}>
                {renderCards}
            </Row>
        </div>
    )
}

export default VideoClass
