// src/components/Index.jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsClipboardCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Index({ title }) {
  const navigate = useNavigate();
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="text-center shadow-lg border-0 rounded-4 p-4">
            <Card.Body>
              <BsClipboardCheck size={64} className="mb-4 text-primary" />
              <Card.Title as="h1" className="fw-bold display-5 mb-3">
                {title || "Sistem Absensi Digital"}
              </Card.Title>
              <Card.Text className="text-muted fs-5">
                Selamat datang di sistem absensi berbasis web.
                <br />
                Silakan login untuk mengakses dashboard kehadiran.
              </Card.Text>
              <Button
                variant="primary"
                size="lg"
                className="mt-4 px-5"
                onClick={() => navigate("/login")}
              >
                Masuk Sekarang
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
