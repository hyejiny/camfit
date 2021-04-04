import React, {useState} from "react";
import "../component.css";
import { useDispatch } from "react-redux";
import { selftrainlist } from "../../_actions/index";
import { ListGroup, Card, Button, Row, Col } from "react-bootstrap";
import { Drawer } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import SelftrainCardlist from "./SelftrainCardlist";



function SelftrainSidebar(props) {

  // const category_list = useState([
  //   {id:1,name:'코어'},
  //   {id:2,name:'팔'},
  //   {id:3,name:'다리'},
  //   {id:4,name:'어깨'}
  // ])

  const [Vis,setVis] = useState(false)
  const dispatch = useDispatch();
  const all = () => {
    dispatch(selftrainlist(0));
    props.setCategory("모두");
    setVis(true)
  };
  const shoulder = () => {
    dispatch(selftrainlist(1));
    props.setCategory("어깨");
    console.log('어깨')
    setVis(true)
  };
  const arm = () => {
    dispatch(selftrainlist(2));
    props.setCategory("팔");
    setVis(true)
  };


  const onClose = () => {
    setVis(false)
  };
  
  console.log(props.categoryname)


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
      <Row xs={1} md={2} lg={4} >
        <Col>
        <Card
    text='black'
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
    text='black'
    style={{ width: '20rem' , height: '18rem' }}
    className="mb-2 bgc"
  >
    <Card.Body>
      <Card.Title> 팔 </Card.Title>
      <Button onClick={arm}>시작하기</Button>
    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card
    text='black'
    style={{ width: '20rem' , height: '18rem' }}
    className="mb-2 bgc"
  >
    <Card.Body>
      <Card.Title> 다리 </Card.Title>
      <Button onClick={arm}>시작하기</Button>
    </Card.Body>
  </Card>
  </Col>

<Col>
  <Card
    text='black'
    style={{ width: '20rem' , height: '18rem'}}
    className="mb-2 bgc"
    
  >
    <Card.Body>
      <Card.Title> 코어 </Card.Title>
      <Button onClick={all}>시작하기</Button>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  {/* <Row>

          
            <SelftrainCardlist  title={props.categoryname}
         
          
          onClose={onClose}
          visible={Vis}
          height='350px'/>
          
      
       
  </Row> */}


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
