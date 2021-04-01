import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "antd/dist/antd.css";
import './Navbar.css';
import { Modal, Button } from "antd";
// import { Modal } from "antd";
import LoginModal from "./Account/LoginModal";
import { ACCESS_TOKEN } from "../constants";

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
      visible: false,
    });
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
    window.location.replace("/");
  };

  render() {
    let button;
    if (!ACCESS_TOKEN) {
      console.log("no token");
      button = (
        <>
          <Nav.Link onClick={this.showModal}>로그인</Nav.Link>
          <Modal
            visible={this.state.visible}
            title="로그인 하시겠습니까?"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            show={this.visible}
            >
            <LoginModal />
          </Modal>
        </>
      );
    } else {
      
      button = <><Nav.Link href='/'>{window.localStorage.getItem('email')} 환영합니다.</Nav.Link><Nav.Link onClick={this.logout}>로그아웃</Nav.Link></>
    }
    return (
      <Navbar className="Nav" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand className="NavLogo" href="/">CamFit</Navbar.Brand>
        <Navbar.Toggle className="fabar" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="NavbarMenu" as="ul">
            <Nav.Link className="nav-links" href="/selftrain">AI트레이닝</Nav.Link>
            <Nav.Link className="nav-links" href="/info">캠핏꿀팁</Nav.Link>
            <Nav.Link className="nav-links" href="/videoclass">클래스</Nav.Link>
            <Nav.Link className="nav-links" href="/community">커뮤니티</Nav.Link>
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
