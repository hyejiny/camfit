import React, { useState } from "react";
import "../component.css";
import { useDispatch } from "react-redux";
import { selftrainlist } from "../../_actions/index";
import { ListGroup } from "react-bootstrap";

function SelftrainSidebar(props) {
    // const [Color,setColor] = useState()
    const dispatch = useDispatch();

  const all = () => {
    dispatch(selftrainlist(0));
    props.setCategory("모두");
  };
  const shoulder = () => {
    dispatch(selftrainlist(1));
    props.setCategory("어깨");
  };
  const arm = () => {
    dispatch(selftrainlist(2));
    props.setCategory("팔");
  };
  // const bottom = () => {

  // }

  return (
    <div className="SelftrainSidebar">
      <ListGroup as="ul">
        <ListGroup.Item as="li" active><a onClick={all}>모두</a></ListGroup.Item>
        <ListGroup.Item as="li"><a onClick={shoulder}>어깨</a></ListGroup.Item>
        <ListGroup.Item as="li"><a onClick={arm}>팔</a></ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default SelftrainSidebar;
