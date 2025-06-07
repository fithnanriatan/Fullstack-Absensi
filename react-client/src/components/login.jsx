import { Button, Container, Form } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login({ title, desc }) {

  useEffect(() => {
    if (localStorage.getItem("nama") && localStorage.getItem("nim")) {
      console.log('user sudah login!')
      window.location.replace('/dashboard')
    }
  }, []);

  const [nim, setNim] = useState("");
  const [pass, setPass] = useState("");

  const handleNIM = (inputNIM) => {
    setNim(inputNIM);
  };

  const handlePass = (inputPass) => {
    setPass(inputPass);
  };

  const userLogin = () => {
    const requestingData = {
      nim: nim,
      password: pass
    }
    axios({
      method: "POST",
      url: "http://localhost:3200/users/login",
      data: requestingData
    })
      .then((result) => {
        // Masukkan data ke dalam memory web
        localStorage.setItem('nim', result.data.users.nim)
        localStorage.setItem('nama', result.data.users.nama)
        // Arahkan ke dashboard
        window.location.replace('/dashboard')
      })
      .catch((error) => {
        console.error(error)
        alert('username/password salah!')
      })
  };

  return (
    <Container>
      <h2 className="text-primary my-4 text-center">
        <Typewriter
          words={[title, desc]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={160}
          deleteSpeed={50}
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
            onChange={(event) => handleNIM(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            required
            onChange={(event) => handlePass(event.target.value)}
          />
        </Form.Group>
        
        <div className="d-grid gap-3">
          <Button
            className="fw-bold py-2"
            onClick={() => userLogin()}
          >
            Login Sekarang
          </Button>

          <div className="text-center">
            <small className="text-muted">Belum punya akun? </small>
            <Link to="/register" className="text-primary fw-semibold text-decoration-none">
              Register
            </Link>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
