// import React, { Component} from 'react';
import {  ListGroup } from "react-bootstrap";
import { selftrainlist } from "../../_actions/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import './train.css'

import { Menu, Button } from 'antd';

function Selfdetailcate(props) {

  const dispatch = useDispatch();
  const store = useStore();
  const [TrainInfo, setTrainInfo] = useState([]);
  const [State,setState] = useState(false);
  const toggleCollapsed = () => {
    setState(true)
  };


  useEffect(() => {
    let trainId = props.trainId['id'];
    console.log(trainId, "카테고리");
    dispatch(selftrainlist(trainId)).then((res) => {
      const tmp_list = res.payload;
      setTrainInfo(tmp_list);
      console.log(TrainInfo);
    });
  }, [dispatch]);
 
  const category = TrainInfo.map((cate, index) => (
        
    <ListGroup.Item
      style={{ height: "80px" }}
      action
      variant="info"
      key={index}
      onClick={() => props.setId(index)}
      className="bgc"
      >
      {cate.title}
    </ListGroup.Item>
  
    

));

  return (
<ListGroup variant="flush">
{category}
</ListGroup>

  )
  
  

}

export default Selfdetailcate;



