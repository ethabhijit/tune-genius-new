import {
  Container,
  Nav,
  Navbar as BTNavbar,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import Logo from "../../assets/images/logo.png"

import "./Navbar.css";

const Navbar = () => {
  return (
    <BTNavbar className="navbar-expand-lg" collapseOnSelect expand="lg">
      <Container fluid>
        <BTNavbar.Toggle aria-controls="navbarScroll" />
        <BTNavbar.Brand href="#" id="logo__container">
          <img src={Logo} alt="Tunegenius" className="logo" />
        </BTNavbar.Brand>
        <BTNavbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 custom__nav"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Info</Nav.Link>
            <Nav.Link href="#action2">Support</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <button type="button" className="custom__connect__btn">Connect Wallet</button>
          </Form>
        </BTNavbar.Collapse>
      </Container>
    </BTNavbar>
  );
};

export default Navbar;
