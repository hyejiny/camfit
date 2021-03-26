import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class InfoCardS extends Component {
    render() {
        return (
            <div>
                <Card className="bg-dark text-white" style={{ width: '30rem', height : '20rem' }}>
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
        </Card>
                
            </div>
        );
    }
}

export default InfoCardS;