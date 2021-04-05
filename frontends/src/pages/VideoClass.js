import React, {useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { videoclasslist } from "../_actions/index";
import { API_BASE_URL } from "../constants";

import {Col, Card, Row} from 'antd'
import Meta from 'antd/lib/card/Meta'
import {HighlightOutlined} from '@ant-design/icons'

// import SearchFeature from '../component/utils/SearchFeature'
function VideoClass() {

    const dispatch = useDispatch();
    const username = window.localStorage.getItem('userid')

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
            return <Col lg={6} md={8} xs={24} key={index}>
                <Card
                    cover={<a href={'/videoclass/detail/'+ product.id }></a>}>
                        
                    <Meta
                        title={product.title}
                        description={`${product.price}원`}
                    />
                </Card>
            </Col>
    })


    const renderCards = Classes.map((product, index) => {


        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                cover={<a href={'/videoclass/detail/'+ product.id }>
                   <img 
                height='240px'
                src={API_BASE_URL+product.image} /></a>}>
                     
                <Meta
                    title={product.title}
                    description={`${product.price}원`}
                />
            </Card>
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
            <h2>myclass</h2>
            <Row gutter= {16, 16}>
                {renderMyClasses}
            </Row>

            <h2>classes</h2>
            <Row gutter= {16, 16}>
                {renderCards}
            </Row>

        </div>
    )
}

export default VideoClass
