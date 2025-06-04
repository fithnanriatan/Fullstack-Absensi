import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { PersonFill, CalendarCheckFill, BoxArrowRight } from "react-bootstrap-icons";

function Dashboard() {
  const [user, setUser] = useState({ nama: "Pengguna", nim: "0000" });

  useEffect(() => {
    // Simulasi ambil data user dari API atau localStorage
    const storedUser = {
      nama: "Tyoo Rizky",
      nim: "3302",
    };
    setUser(storedUser);
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Selamat Datang, {user.nama} 🎉</h2>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <PersonFill size={32} className="text-primary mb-2" />
              <Card.Title>Profil</Card.Title>
              <Card.Text>NIM: {user.nim}</Card.Text>
              <Button variant="outline-primary" size="sm">
                Lihat Profil
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <CalendarCheckFill size={32} className="text-success mb-2" />
              <Card.Title>Absensi</Card.Title>
              <Card.Text>Rekap absensi minggu ini tersedia.</Card.Text>
              <Button variant="outline-success" size="sm">
                Cek Absensi
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <BoxArrowRight size={32} className="text-danger mb-2" />
              <Card.Title>Keluar</Card.Title>
              <Card.Text>Akhiri sesi login Anda dengan aman.</Card.Text>
              <Button variant="outline-danger" size="sm">
                Logout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <footer className="text-center text-muted">
        <small>© 2025 Sistem Absensi UPT Komputer</small>
      </footer>
    </Container>
  );
}

export default Dashboard;
