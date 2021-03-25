import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {login} from '../../actions/index';
import { Form,Button } from 'react-bootstrap';
// import axios from 'axios';


// class LoginModal extends Component {
//   state = {
//     email:'',
//     password:'',
//   };
//   handleEmail = e => {
//     this.setState({
//       email: e.target.value,
//     });
//     console.log(this.state.email);
//   }
//   handlePassword = e => {
//     this.setState({
//       password: e.target.value,
//     });
//     console.log('e');
//   }
//   handleSubmit = e => {
//     console.log('32414123')
//     e.preventDefault();
//     const data = {
//       username : this.state.email,
//       password: this.state.password
//     }
//     console.log(data)
//     axios.post('http://127.0.0.1:8000/accounts/api-token-auth/', data)
//       .then(res => {
//         console.log(res)
//       })
//       .catch(err=> {
//         console.log(err)
//       })
    
//   };

//   constructor(props) {
//     super(props);
//   }

function LoginModal(props) {
  const dispatch = useDispatch();
  const [Email,setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const onSubmitHandler = (event) => {
    // page refresh를 막아준다
    event.preventDefault();
    let body = {
      username : Email,
      password : Password
    };
    // axios.post('http://127.0.0.1:8000/accounts/api-token-auth/', body)
    //   .then(res => {
    //     console.log(res.data.token)
    //   })
    //   .catch(err=> {
    //     console.log(err)
    //   })
    dispatch(login(body))
      .then((res) => {
        if (res.payload.loginSuccess) {
            props.history.push('/');
        } else {
          alert(res.payload.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email" 
        onChange={onEmailHandler} 
        value={Email}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Password"
        onChange={onPasswordHandler}
        value={Password} 
        />
      </Form.Group>
      {/* <Form.Text className="text-muted">
          비밀번호가 생각이 안나시나요? 그렇다면
        </Form.Text>
      <Button variant="primary" type="submit">
        비밀번호 찾기
      </Button> */}
      <Button variant="primary" type="submit">
        진짜로그인
      </Button>
    </Form>
  );
  
}

export default LoginModal;
