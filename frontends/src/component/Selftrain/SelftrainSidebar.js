import React, { useState } from "react";
import "../component.css";
import { useDispatch } from "react-redux";
import { selftrainlist } from "../../_actions/index";
import { ListGroup, Card, Button, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { Image, Reveal } from "semantic-ui-react";

function SelftrainSidebar(props) {
  // const category_list = useState([
  //   {id:1,name:'코어'},
  //   {id:2,name:'팔'},
  //   {id:3,name:'다리'},
  //   {id:4,name:'어깨'}
  // ])

  const [Vis, setVis] = useState(false);
  const dispatch = useDispatch();
  const all = () => {
    dispatch(selftrainlist(0));
    props.setCategory("모두");
    setVis(true);
  };
  const shoulder = () => {
    dispatch(selftrainlist(1));
    props.setCategory("어깨");
    console.log("어깨");
    setVis(true);
  };
  const arm = () => {
    dispatch(selftrainlist(2));
    props.setCategory("팔");
    setVis(true);
  };

  const onClose = () => {
    setVis(false);
  };

  console.log(props.categoryname);

  return (
    <div className="site-content">
      <Row xs={1} md={4}>
        <Col>
          <Reveal animated="rotate">
            <Reveal.Content visible>
              어깨
              <Image circular size="medium" src="https://ifh.cc/g/b70G9w.jpg" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Button onClick={arm} className="mt-3">시작하기</Button>
            </Reveal.Content>
          </Reveal>
        </Col>

        <Col>
        <Reveal animated="rotate">
            <Reveal.Content visible>
              코어
              <Image circular size="medium" src="https://ifh.cc/g/uKNRvB.jpg" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Button onClick={arm} className="mt-3">시작하기</Button>
            </Reveal.Content>
            </Reveal>
        </Col>
    
        <Col>
        <Reveal animated="rotate">
        <Reveal.Content visible>
              팔
              <Image circular size="medium" src="https://ifh.cc/g/z85Vm7.jpg" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Button onClick={arm} className="mt-3">시작하기</Button>
            </Reveal.Content>
            </Reveal>
        </Col>

        <Col>
        <Reveal animated="rotate">
        <Reveal.Content visible>
              하체
              <Image circular size="medium" src="https://ifh.cc/g/Q7zSHG.jpg" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Button onClick={arm} className="mt-3">시작하기</Button>
            </Reveal.Content>
            </Reveal>
        </Col>
      </Row>

      {/* <Row xs={1} md={2} lg={4}>
        <Col>
          <List
            text="black"
            style={{ width: "20rem", height: "18rem" }}
            className="mb-2 bgc"
          >
            <List.Item>
            <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<div>어깨</div>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
              <Card.Title> 어깨 </Card.Title>
              <Button onClick={shoulder}>시작하기</Button>
            </List.Item>
          </List>
        </Col>

        <Col>
          <Card
            text="black"
            style={{ width: "20rem", height: "18rem" }}
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
            text="black"
            style={{ width: "20rem", height: "18rem" }}
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
            text="black"
            style={{ width: "20rem", height: "18rem" }}
            className="mb-2 bgc"
          >
            <Card.Body>
              <Card.Title> 코어 </Card.Title>
              <Button onClick={all}>시작하기</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
}

export default SelftrainSidebar;
