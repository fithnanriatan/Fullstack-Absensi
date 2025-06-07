import { PersonFill } from "react-bootstrap-icons";
import { Row, Col, Card, Button } from "react-bootstrap";
import useLogout from "./logout"; // Import custom hook

const Navbar = () => {
    const nim = localStorage.getItem("nim");
    const nama = localStorage.getItem("nama");
    const logout = useLogout(); // Gunakan custom hook
    
    return (
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
                        <Button
                            variant="danger"
                            onClick={logout} // ✅ Panggil function dari hook
                        >
                            Logout
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Navbar;