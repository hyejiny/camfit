import React, {useEffect, useState} from 'react'
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './ProductInfo.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { videoclasslist } from "../../_actions/index";
import { API_BASE_URL } from "../../constants";
import { classReg } from '../../_actions/index';

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
    const classID = props.detail.id

    const gotoCart = () => {
        dispatch(classReg(classID))
    }

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
                    <div style={{ display: 'flex', justifyContent: 'center' }} onClick={gotoCart}>
                        <Button size="large" shape="round" type="danger" onClick={() => {history.push({
                            pathname: `/videochat`})}}>
                            수강하기
                        </Button>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>  
        </div>
    )
}

export default ProductInfo
