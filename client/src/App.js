import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// IMPORT PAGES
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Baca from "./pages/baca/Baca";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { RecoilRoot } from "recoil";
import Detail from "./pages/detail/Detail";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/baca/:id"
            element={user ? <Baca /> : <Navigate to="/" />}
          />
          <Route
            path="/detail"
            element={user ? <Navigate to="/" /> : <Detail />}
          />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
