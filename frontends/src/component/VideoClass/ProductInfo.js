import React, {useEffect, useState} from 'react'
import { Button, Descriptions } from 'antd';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './ProductInfo.css';

import {Col, Card, Row} from 'antd'
import Meta from 'antd/lib/card/Meta'
import { videoclasslist } from "../../_actions/index";
import { API_BASE_URL } from "../../constants";
// import { addToCart } from '../../../../_actions/user_actions';

function ProductInfo(props) {

    const dispatch = useDispatch();
    const history = useHistory();
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

    const renderCards = Classes.map((product, index) => {


        return <Col key={index}>
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
        <div >  
        <div className="cardlist">
            
            <div className="chart-board" title="Product Info">
                <p className="chart-title" label="title">{props.detail.title}</p>
                <p className="chart-item" label="Price">가격 : {props.detail.price}</p>
                <p className="chart-item" label="start_day">시작일 : {props.detail.start_day}</p>
                <p className="chart-item" label="end_day">마감일 : {props.detail.end_day}</p>
                <br />
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="large" shape="round" type="danger" onClick={() => {history.push({
                        pathname: `/videochat`})}}>
                        수강하기
                    </Button>
                </div>
            </div>

            <div >
                {renderCards}
            </div>
            
            </div>  
        </div>
    )
}

export default ProductInfo
