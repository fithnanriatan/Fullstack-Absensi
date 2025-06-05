import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container className="text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Row className="align-items-center">
        <Col md={12}>
          <h1 className="display-3 fw-bold text-danger">404</h1>
          <h4 className="mb-3 text-muted">Oops! Halaman tidak ditemukan.</h4>
          <p className="text-secondary mb-4">
            Mungkin halaman ini telah dipindahkan atau tautan yang Anda klik salah.
          </p>
          <Button variant="primary" size="lg" className="px-4" onClick={handleBack}>
            Kembali ke Beranda
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
