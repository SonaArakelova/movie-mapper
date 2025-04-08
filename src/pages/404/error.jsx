import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const NotFoundPage = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Row className="text-center">
        <Col>
          <h1 className="display-1 text-primary fw-bold">404</h1>
          <h5 className="text-muted mb-3">
            Oops! The page you're looking for doesn't exist.
          </h5>
          <p className="text-muted mb-4">
            It looks like the page you're trying to reach is not available. You might want to check the URL or go back to the homepage.
          </p>
          <Button as={Link} to="/main" variant="primary" size="lg" className="rounded-pill px-4 py-2">
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
