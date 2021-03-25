import React, { Component } from 'react';
import { Form,Button,Row,Col } from 'react-bootstrap';
class Signup extends Component {
    render() {
        return (
            <div>
                <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
    
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">이메일 중복 확인</Button>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
        Confirm Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
        Nickname
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Nickname" />
    </Col>
  </Form.Group>
 
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign up</Button>
    </Col>
  </Form.Group>
</Form>
            </div>
        );
    }
}

export default Signup;