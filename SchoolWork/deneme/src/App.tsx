import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";
import Events from "./Events";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Sign" element={<SignupPage />} />
          <Route path="/events" element={<Events />} />
        </Routes>
    </Router>
  );
};

export default App;
