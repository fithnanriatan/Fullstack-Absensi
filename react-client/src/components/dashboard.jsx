import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [absensi, setAbsensi] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus data dari localStorage
    localStorage.clear();
    // Arahkan ke halaman login
    navigate("/login");
  };

  useEffect(() => {
    const nim = localStorage.getItem("nim");
    const nama = localStorage.getItem("nama");

    // validasi belum login
    if (!nim || !nama) {
      navigate("/login");
      return;
    }

    // Ambil data absensi dari server
    axios
      .get("http://localhost:3200/absensi")
      .then((res) => {
        const semuaAbsensi = res.data.absensi;
        // const filtered = semuaAbsensi.filter(
        //   (item) => item.users_nim == nim // pastikan pakai == bukan === agar string vs int tetap cocok
        // );
        setAbsensi(semuaAbsensi);
      })
      .catch((err) => {
        console.error("Gagal mengambil data absensi:", err);
      });

  }, [navigate]);

  const nim = localStorage.getItem("nim");
  const nama = localStorage.getItem("nama");

  return (
    <Container className="mt-4">
      {/* Header Profil */}
      <Card className="shadow mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={1}>
              <PersonFill size={42} className="text-primary" />
            </Col>
            <Col md={9}>
              <h4 className="mb-1">Selamat Datang, {nama} 🎉</h4>
              <p className="mb-0 text-muted">NIM: {nim}</p>
            </Col>
            <Col md={2} className="text-end">
              <Button variant="outline-primary" size="sm" className="me-2">
                Profil
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Tabel Absensi */}
      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="mb-3">Riwayat Absensi</h5>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>No</th>
                <th>NIM</th>
                <th>Status</th>
                <th>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {absensi.length > 0 ? (
                absensi.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.users_nim}</td>
                    <td>
                      <span className={item.status === "in" ? "text-success" : "text-danger"}>
                        {item.status.toUpperCase()}
                      </span>
                    </td>
                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    Belum ada data absensi
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

        </Card.Body>
      </Card>

      <footer className="text-center text-muted mt-4">
        <small>© 2025 Sistem Absensi UPT Komputer</small>
      </footer>
    </Container>
  );
}

export default Dashboard;
