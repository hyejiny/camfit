import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './info.css'
import {IoIosArrowForward} from "react-icons/io"

class InfoCardList extends Component {
    render() {
        return (
            <div>
                <IoIosArrowForward class="arrown"/>
                <Card className="bg-dark text-white" style={{ width: '30rem', height : '40rem' }}>
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
        </Card>
            </div>
        );
    }
}

export default InfoCardList;