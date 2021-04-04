// import React, { Component} from 'react';
import {  ListGroup } from "react-bootstrap";
import { selftrainlist } from "../../_actions/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";

function Selfdetailcate(props) {

  const dispatch = useDispatch();
  const store = useStore();
  const [TrainInfo, setTrainInfo] = useState([]);

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
    <ListGroup>
    <ListGroup.Item
      style={{ height: "100px" }}
      action
      variant='dark'
      key={index}
      onClick={() => props.setId(index)}
      >
      {cate.title}
    </ListGroup.Item>
  </ListGroup>
));

  return  category;
}

export default Selfdetailcate;
