import React, {useState} from "react";
import "../component.css";
import { useDispatch } from "react-redux";
import { selftrainlist } from "../../_actions/index";
import { ListGroup, Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



function SelftrainSidebar(props) {

  // const category_list = useState([
  //   {id:1,name:'코어'},
  //   {id:2,name:'팔'},
  //   {id:3,name:'다리'},
  //   {id:4,name:'어깨'}
  // ])


  const dispatch = useDispatch();
  const all = () => {
    dispatch(selftrainlist(0));
    props.setCategory("모두");
  };
  const shoulder = () => {
    dispatch(selftrainlist(1));
    props.setCategory("어깨");
    console.log('어깨')
  };
  const arm = () => {
    dispatch(selftrainlist(2));
    props.setCategory("팔");
  };
  // const bottom = () => {

  // }

  // const card_li = category_list.map((cate) => (
  //   <Card
  //   bg={'Info'.toLowerCase()}
  //   text='white'
  //   style={{ width: '18rem' }}
  //   className="mb-2"
  //   key={cate.id}
  // >
  //   <Card.Body>
  //     <Card.Title> {cate.name} </Card.Title>
  //     <Button onClick={shoulder}>시작하기</Button>
  //   </Card.Body>
  // </Card>
  // ));
  return (

    <div className="site-content">
      <Row xs={1} md={3} lg={4} >
        <Col>
        <Card
    text='white'
    style={{ width: '20rem', height: '18rem' }}
    className="mb-2 bgc"
  >
    <Card.Body>
      <Card.Title> 어깨 </Card.Title>
      <Button onClick={shoulder}>시작하기</Button>
    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card
    text='white'
    style={{ width: '20rem' , height: '18rem' }}
    className="mb-2 bgc"
  >
    <Card.Body>
      <Card.Title> 팔 </Card.Title>
      <Button onClick={shoulder}>시작하기</Button>
    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card
    text='white'
    style={{ width: '20rem' , height: '18rem' }}
    className="mb-2 bgc"
  >
    <Card.Body>
      <Card.Title> 다리 </Card.Title>
      <Button onClick={shoulder}>시작하기</Button>
    </Card.Body>
  </Card>
  </Col>

<Col>
  <Card
    text='white'
    style={{ width: '20rem' , height: '18rem'}}
    className="mb-2 bgc"
    
  >
    <Card.Body>
      <Card.Title> 코어 </Card.Title>
      <Button onClick={shoulder}>시작하기</Button>
    </Card.Body>
  </Card>
  </Col>
  </Row>


{/* 

    <ListGroup as="ul">
      <ListGroup.Item as="li" active><a onClick={all}>모두</a></ListGroup.Item>
      <ListGroup.Item as="li"><a onClick={shoulder}>어깨</a></ListGroup.Item>
      <ListGroup.Item as="li"><a onClick={arm}>팔</a></ListGroup.Item>
    </ListGroup> */}
  </div>



  );
}

export default SelftrainSidebar;
