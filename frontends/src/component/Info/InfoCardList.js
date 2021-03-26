import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './info.css'
// import {IoIosArrowForward} from "react-icons/io"

function InfoCardList(props)  {
    

        return (
            <div>
                <Card className="bg-dark text-white" style={{ width: '30rem', height : '40rem' }}>
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        {props.first}
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
        </Card>
            </div>
        );
    
}

export default InfoCardList;