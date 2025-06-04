import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="HOME PAGE"/>}/>
        <Route path="/dashboard" element={<Dashboard title="DASHBOARD"/>}/>
        <Route path="/login" element={<Login title="LOGIN PUBG" desc="wkwkwkwkkw"/>}/>
        <Route path="*" element={<h1>PAGE NOT FOUND 404 :/</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
