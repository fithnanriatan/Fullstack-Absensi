import { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import useLogout from "./logout";

const Edit = ({ title }) => {
    const [nama, setNama] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const Logout = useLogout();

    useEffect(() => {
        // Ambil nama dari localStorage saat pertama kali render
        const storedNama = localStorage.getItem("nama");
        if (storedNama) setNama(storedNama);
    }, []);

    const updateProfile = async () => {
        const requestingData = {
            nim: localStorage.getItem("nim"),
            password,
            newPassword,
            nama,
        };

        try {
            const update = await axios.put("http://localhost:3200/users", requestingData);
            console.log(update);
            
            // Update nama di localStorage jika berhasil
            localStorage.setItem("nama", nama);
            alert("Data berhasil diupdate!");
            Logout();
            
        } catch (error) {
            console.error("Gagal update profil:", error);
            alert("Gagal update profil. Periksa kembali data Anda.");
        }
    };

    return (
        <Card className="shadow-sm">
            <Card.Body>
                <h3>{title}</h3>
                <Form className="w-50 mt-4">
                    <Form.Group className="mb-4">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan nama Anda"
                            value={nama}
                            onChange={(event) => setNama(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password Saat Ini</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Masukkan password saat ini"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password Baru</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Masukkan password baru"
                            value={newPassword}
                            onChange={(event) => setNewPassword(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button className="mb-4 fw-bold" onClick={updateProfile}>
                        Ubah
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Edit;
