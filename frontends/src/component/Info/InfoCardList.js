import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./info.css";
import {API_BASE_URL} from '../../constants'

function InfoCardList(props) {
    
    if (props.title) {
        console.log(props.title)
        console.log(props.content)
    }
  return (
    <div>
      <Card
        className="bg-dark text-white"
        style={{ width: "30rem", height: "40rem" }}
      >
        <Card.Img src={API_BASE_URL+props.imgg} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
              {props.content}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default InfoCardList;
