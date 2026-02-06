import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="../public/images/logo.png" alt="Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link active className="fw-bold" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              TV Shows
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              My List
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
