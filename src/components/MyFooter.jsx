import { Container, Row, Col, Button } from "react-bootstrap";

function MyFooter() {
  return (
    <footer>
      <Container className="mt-5">
        <Row className="justify-content-center mb-4">
          <Col className="text-center">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>

        {/* Footer links in 4 columns */}
        <Row className="mb-4 text-center text-md-start">
          <Col md={3} className="footer-links">
            <p>
              <a href="#">Audio and Subtitles</a>
            </p>
            <p>
              <a href="#">Media Center</a>
            </p>
            <p>
              <a href="#">Privacy</a>
            </p>
            <p>
              <a href="#">Contact us</a>
            </p>
          </Col>
          <Col md={3} className="footer-links">
            <p>
              <a href="#">Audio Description</a>
            </p>
            <p>
              <a href="#">Investor Relations</a>
            </p>
            <p>
              <a href="#">Legal Notices</a>
            </p>
          </Col>
          <Col md={3} className="footer-links">
            <p>
              <a href="#">Help Center</a>
            </p>
            <p>
              <a href="#">Jobs</a>
            </p>
            <p>
              <a href="#">Cookie Preferences</a>
            </p>
          </Col>
          <Col md={3} className="footer-links">
            <p>
              <a href="#">Gift Cards</a>
            </p>
            <p>
              <a href="#">Terms of Use</a>
            </p>
            <p>
              <a href="#">Corporate Information</a>
            </p>
          </Col>
        </Row>

        {/* Service Code button */}
        <Row className="justify-content-center mb-3">
          <Col className="text-center">
            <Button variant="secondary" size="sm" className="footer-button rounded-0 mt-3">
              Service Code
            </Button>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="justify-content-center">
          <Col className="text-center copyright">© 1997-2023 Netflix, Inc.</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
