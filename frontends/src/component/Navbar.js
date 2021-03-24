import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';




class NavBar extends Component {
    
    render() {
    


        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/info">정보게시판</Nav.Link>
                <Nav.Link href="/community">자유게시판</Nav.Link>
                <Nav.Link href="/selftrain">ai운동하기</Nav.Link>
                <Nav.Link href="/videoclass">유료강의</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/login">로그인</Nav.Link>

                {/* <LoginModal isOpen={this.state.isModalOpen} close={this.closeModal}/> */}
                
                <Nav.Link eventKey={2} href="#">
                    로그아웃
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar