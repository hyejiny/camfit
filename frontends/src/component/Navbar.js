import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "antd/dist/antd.css";
// import { Modal, Button } from "antd";
import { Modal } from "antd";
import LoginModal from "./Account/LoginModal";
import {ACCESS_TOKEN} from "../constants"
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  modalfunc() {
      this.setState({
          visible: false
      })
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  logout = () => {
    localStorage.clear();
    window.location.replace('/')
  };

  render() {
    let button;
    if (!ACCESS_TOKEN) {
        button = 
        <>
        <Nav.Link onClick={this.showModal}>로그인</Nav.Link>
            <Modal
              visible={this.state.visible}
              title="로그인 하시겠습니까?"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              show={this.visible}
              // footer={[

              //     <Button key="submit" type="primary" onClick={this.handleOk}>
              //     로그인
              //     </Button>,
              // ]}
            >
              <LoginModal/>
            </Modal>
            </>
    } else {
        button =<Nav.Link onClick={this.logout}>
        로그아웃
      </Nav.Link>
    }
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">CamFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/selftrain">AI트레이닝</Nav.Link>
            <Nav.Link href="/info">캠핏꿀팁</Nav.Link>
            <Nav.Link href="/videoclass">클래스</Nav.Link>
            <Nav.Link href="/community">커뮤니티</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
          </Nav>
          <Nav className="ml-auto">
            {button}
             
            
            <Nav.Link href="/signup">회원가입</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
