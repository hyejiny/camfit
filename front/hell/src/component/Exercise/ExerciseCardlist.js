import React, { Component } from 'react';
import '../component.css';
import {Card, Button} from 'react-bootstrap';

class ExerciseCardlist extends Component {
    render() {
        return (
            <div className="ExerciseCardlist">

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example 
                    </Card.Text>
                    <Button href='/exercise/detail'variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ExerciseCardlist