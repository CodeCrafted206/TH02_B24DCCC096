import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from "./Weather";
import Students from "./Students";
import StudentDetail from "./StudentDetail";
import News from "./News";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav
          style={{
            backgroundColor: "#0078d7",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
          <Link to="/" style={{ color: "white", marginRight: "20px" }}>
            Trang chủ
          </Link>
          <Link to="/weather" style={{ color: "white", marginRight: "20px" }}>
            Bài 1
          </Link>
          <Link to="/students" style={{ color: "white", marginRight: "20px" }}>
            Bài 2
          </Link>
          <Link to="/news" style={{ color: "white" }}>
            Bài 3
          </Link>
        </nav>

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/weather" element={<Weather />} />
            <Route path="/students" element={<Students />} />
            <Route path="/student/:id" element={<StudentDetail />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;





