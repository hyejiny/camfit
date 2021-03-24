import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class LoginModal extends Component {
  render() {
    return (
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Text className="text-muted">
      비밀번호가 생각이 안나시나요? 그렇다면
    </Form.Text>
  <Button variant="primary" type="submit">
    비밀번호 찾기
  </Button>
</Form>
    );
  }
}

export default LoginModal;
