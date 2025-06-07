import { Button, Container, Form } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import axios from "axios";

function Register({ title, desc }) {
    const [nim, setNim] = useState("");
    const [nama, setNama] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [telp, setTelp] = useState("");

    const handleRegister = async () => {
        console.log('start Register!');

        // Validasi input kosong
        if (!nim || !nama || !pass || !email || !telp) {
            alert("⚠️ Mohon lengkapi semua data terlebih dahulu.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3200/users", {
                nim,
                nama,
                password: pass,
                email,
                telp,
            });

            // Simpan data pengguna di localStorage
            localStorage.setItem("nim", response.data.registered.nim);
            localStorage.setItem("nama", response.data.registered.nama);

            // Arahkan ke dashboard
            alert('Pendaftaran Berhasil!')
            window.location.replace("/dashboard");
        } catch (error) {
            console.error("❌ Gagal daftar:", error);

            // Tangani error dari server
            if (error.response && error.response.data) {
                alert(`Pendaftaran gagal: ${error.response.data.error || "Terjadi kesalahan."}`);
            } else {
                alert("Pendaftaran gagal! Silakan coba lagi nanti.");
            }
        }
    };


    return (
        <Container>
            <h2 className="text-primary my-4 text-center">
                <Typewriter
                    words={[title, desc]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={1000}
                />
            </h2>
            <Form className="w-50 mx-auto">
                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">NIM</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Masukkan NIM anda"
                        required
                        onChange={(e) => setNim(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Nama</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Masukkan Nama anda"
                        required
                        onChange={(e) => setNama(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="********"
                        required
                        onChange={(e) => setPass(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="example@gmail.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">No Telp</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="0859XXXXXXXX"
                        required
                        onChange={(e) => setTelp(e.target.value)}
                    />
                </Form.Group>

                <Button className="mb-4 fw-bold" onClick={handleRegister}>
                    Daftar Sekarang
                </Button>
            </Form>
        </Container>
    );
}

export default Register;
