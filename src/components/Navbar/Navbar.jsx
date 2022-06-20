import { Container, Nav, Navbar as BTNavbar } from "react-bootstrap";

import "./Navbar.css";

const Navbar = () => {
  return (
    <BTNavbar>
      <Container className="d-flex justify-content-center">
        <Nav className="custom__nav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#tuneraise">tuneraise</Nav.Link>
          <Nav.Link href="#investments">investments</Nav.Link>
          <Nav.Link href="#settings">settings</Nav.Link>
        </Nav>
      </Container>
    </BTNavbar>
  );
};

export default Navbar;
