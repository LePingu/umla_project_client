import React from 'react';
import { Modal, Navbar, Nav, Button, Form} from 'react-bootstrap';
import { Login } from '../navigation/authentication/Login';
import { Register } from '../navigation/authentication/Register';

const title = "";

class Navig extends React.Component {

  constructor(props) {
    super(props);

    this.handleLoginShow = this.handleLoginShow.bind(this);
    this.handleRegisterShow = this.handleRegisterShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }
  
  loginState = "";

  handleClose() {
    this.setState({ show: false });
  }

  handleLoginShow() {
    this.loginState = "login";
    this.setState({ show: true});
  }
  handleRegisterShow() {
    this.loginState = "register";
    this.setState({ show: true});
  }

  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">UMLA</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/cardgame">CardGame</Nav.Link>
          </Nav>
          <Nav>
          <Button variant="primary"
            onClick={this.handleRegisterShow}
            className="mr-sm-2" >
            Register
          </Button>
          <Button variant="outline-success"
            onClick={this.handleLoginShow}>
            Login
          </Button> 
          </Nav>
          <Modal
            show={this.state.show} onHide={this.handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.loginState === 'register' ? "Register" : "Login"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.loginState === 'register' ? <Register /> : <Login />}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
      </Navbar>
    );
  }

}

export default Navig;