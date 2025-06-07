import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar'
import axios from "axios";
import Edit from "./edit";

function Dashboard() {
  const [absensi, setAbsensi] = useState([]);
  const navigate = useNavigate();

  const fetchAbsensi = async () => {
    axios
      .get("http://localhost:3200/absensi")
      .then((res) => {
        const semuaAbsensi = res.data.absensi;
        const filtered = semuaAbsensi.filter(
          (item) => item.users_nim == localStorage.getItem("nim") // pastikan pakai == bukan === agar string vs int tetap cocok
        );
        setAbsensi(filtered);
      })
      .catch((err) => {
        console.error("Gagal mengambil data absensi:", err);
      });
  }

  useEffect(() => {
    const nim = localStorage.getItem("nim");
    const nama = localStorage.getItem("nama");

    // validasi belum login
    if (!nim || !nama) {
      navigate("/login");
      return;
    }

    // Ambil data absensi dari server
    fetchAbsensi()

  }, []);

  const absen = async (params) => {
    try {
      await axios.post(`http://localhost:3200/absensi/${params}`, { nim: localStorage.getItem('nim') })
      fetchAbsensi()
      alert('absen sukses!')
    } catch (error) {
      console.log('eror pak!' + error);
    }
  }

  return (
    <Container className="mt-4">
      {/* Header Profil */}
      <Navbar />

      {/* Edit Form */}
      <Edit title={"Edit Profile"} />

      {/* Tabel Absensi */}
      <Card className="shadow-sm mt-4">
        <Card.Body>
          <Row className="align-items-center mb-2">
            <Col md={8}>
              <h4>Riwayat Absen</h4>
            </Col>
            <Col md={4} className="text-end">
              <Button variant="outline-primary" size="sm" onClick={() => absen('checkin')}>
                Checkin
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => absen('checkout')}>
                Checkout
              </Button>
            </Col>
          </Row>
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
        <small>© 2025 Sistem Absensi Fullstack</small>
      </footer>
    </Container>
  );
}

export default Dashboard;
