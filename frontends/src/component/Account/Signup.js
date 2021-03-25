import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {signup, emailcheck} from '../../_actions/index';

import { Form, Button, Row, Col } from "react-bootstrap";

function Signup(props) {
  
  const dispatch = useDispatch();
  const [Email,setEmail] = useState("");
  const [EmailCheck,setEmailCheck] = useState(false);
  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");

  const onEmailHandler = (event) => {
    setEmailCheck(false);
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onPasswordCheckHandler = (event) => {
    setPasswordCheck(event.currentTarget.value);
  }

  const emailCheck = (event) => {
    event.preventDefault();
    if (!Email) {
      return alert('이메일을 입력하세요')
    }
    dispatch(emailcheck({username:Email}))
      .then((res) => {
        if (res.payload[0]==="있음") {
          alert('이미 계정이 있습니다')
        } else {
          alert('사용해도 좋습니다')
          setEmailCheck(true);
        }

      })
  }

  const onSubmitHandler = (event) => {
    // console.log('클릭됨')
    // page refresh를 막아준다
    event.preventDefault();
    if (!Email) {
      return alert('이메일을 입력하세요')
    }
    if (!EmailCheck) {
      return alert('이메일 중복 확인을 하세요')
    } else {
    }
    if (!Password) {
      return alert('비밀번호를 입력하세요')
    }
    if (!PasswordCheck) {
      return alert('비밀번호를 입력하세요')
    }
    if (Password !== PasswordCheck) {
      return alert('비밀번호가 일치하지 않습니다.')
    }

    let body = {
      username : Email,
      password : Password,
      passwordcheck : PasswordCheck,
      category : 1,
    };
    console.log(body);
    dispatch(signup(body))
      .then((res) => {
        console.log(res);
        if (res.payload.username) {
          console.log('signup success')
          props.history.push('/')
          alert('가입성공')

        } else {
          console.log('signup fail')
          alert(res.payload.message)
        }
      })
      .catch((err) => {
        alert('가입실패')
        console.log(err);
      });
  };

  return (
    <div>
      <Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control 
            type="email" 
            placeholder="Email" 
            value={Email} 
            onChange={onEmailHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" onClick={emailCheck}>이메일 중복 확인</Button>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            value={Password} 
            onChange={onPasswordHandler}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPasswordCheck">
          <Form.Label column sm={2}>
            Confirm Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control 
            type="password" 
            placeholder="PasswordCheck" 
            value={PasswordCheck} 
            onChange={onPasswordCheckHandler} 
            />
          </Col>
        </Form.Group>

        {/* <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Nickname
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Nickname" />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" onClick={onSubmitHandler}>Sign up</Button>
          </Col>
        </Form.Group>
      </Form.Group>
    </div>
  );
}

export default Signup;
