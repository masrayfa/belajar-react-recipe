import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
