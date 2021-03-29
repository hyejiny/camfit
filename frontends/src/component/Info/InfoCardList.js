import React from "react";
import { Card,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./info.css";
import {API_BASE_URL} from '../../constants'

function InfoCardList(props) {
    
    if (props.title) {
        console.log(props.title)
        console.log(props.content)
        console.log(props)
        console.log(props.id,'id')
    }
  return (
    <Col>
      <Card
        className="bg-dark text-white"
        style={{ width: "45rem", height: "25rem" }}
      >
        <Card.Img src={API_BASE_URL+props.imgg} alt="Card image" class="image-container contrast" />
        <Card.ImgOverlay>
          <Card.Title><a href={`/info/detail/${props.id}`}>{props.title}</a></Card.Title>
          <Card.Text>
              {props.content}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

export default InfoCardList;
