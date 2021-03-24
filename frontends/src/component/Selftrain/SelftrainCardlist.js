import React, { Component } from 'react';
import '../component.css';
import {Card, Button} from 'react-bootstrap';

class SelftrainCardlist extends Component {
    render() {
        return (
            <div className="SelftrainCardlist">

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example 
                    </Card.Text>
                    <Button href='/selftrain/detail'variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default SelftrainCardlist