import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./components/notfound";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="HOME PAGE"/>}/>
        <Route path="/dashboard" element={<Dashboard title="DASHBOARD"/>}/>
        <Route path="/login" element={<Login title="LOGIN PUBG" desc="wkwkwkwkkw"/>}/>
        <Route path="/register" element={<Register title="Registrasi" desc="silahkan masukkan seluruh data"/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
