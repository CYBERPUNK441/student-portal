import { useState } from "react";
import "./App.css";
import logo from "./assets/ui-logo.png";

function App() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (studentId === "e057559" && password === "E057559") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid Student ID or Password");
    }
  };

  if (loggedIn) {
    return (
      <div className="dashboard">
        <div className="header">
          <h1>Student Result Portal</h1>
          <p>2024/2025 Academic Session</p>

          <button
            className="logout-btn"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        </div>

        <div className="profile-section">
          <div className="profile-card">
            <div className="student-photo">
              FO
            </div>

            <h2>FARUQ OJO</h2>

            <p><strong>Student ID:</strong> e057559</p>
            <p><strong>Status:</strong> Student</p>
            <p><strong>Session:</strong> 2024/2025</p>
            <p><strong>Programme:</strong> Computer Science</p>
            <p><strong>Level:</strong> 100 Level</p>
            <p><strong>Faculty:</strong> Science</p>
            <p><strong>Mode:</strong> Distance Learning</p>
          </div>

          <div className="quick-info">
            <h3>Academic Summary</h3>

            <div className="summary-item">
              <span>CGPA</span>
              <strong>N/A</strong>
            </div>

            <div className="summary-item">
              <span>Courses</span>
              <strong>8</strong>
            </div>

            <div className="summary-item">
              <span>Units</span>
              <strong>24</strong>
            </div>

            <div className="summary-item">
              <span>Outstanding</span>
              <strong>1</strong>
            </div>

            <div className="summary-item">
              <span>Result Status</span>
              <strong>Released</strong>
            </div>
          </div>
        </div>

        <div className="results-card">
          <div className="results-header">
            <h2>First Semester Results</h2>

            <button className="download-btn">
              Download Result
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>GES108</td>
                <td>55</td>
                <td className="grade-d">D</td>
                <td><span className="status-pass">Passed</span></td>
              </tr>

              <tr>
                <td>PHY102</td>
                <td>60</td>
                <td className="grade-c">C</td>
                <td><span className="status-pass">Passed</span></td>
              </tr>

              <tr>
                <td>STA115</td>
                <td>AR</td>
                <td>AR</td>
                <td><span className="status-ar">Awaiting Result</span></td>
              </tr>

              <tr>
                <td>GES101</td>
                <td>90</td>
                <td className="grade-a">A</td>
                <td><span className="status-pass">Passed</span></td>
              </tr>

              <tr>
                <td>CSC102</td>
                <td>80</td>
                <td className="grade-b">B</td>
                <td><span className="status-pass">Passed</span></td>
              </tr>

              <tr>
                <td>MAT111</td>
                <td>65</td>
                <td className="grade-c">C</td>
                <td><span className="status-pass">Passed</span></td>
              </tr>

              <tr>
                <td>MAT121</td>
                <td>60</td>
                <td className="grade-d">D</td>
                <td><span className="status-pass">Passed</span></td>
              </tr>

              <tr>
                <td>STA112</td>
                <td>56</td>
                <td className="grade-c">C</td>
                <td><span className="status-pass">Passed</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="footer">
          © 2025 University of Ibadan Distance Learning Centre
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <img src={logo} alt="UI Logo" />

        <h1>Distance Learning Centre</h1>

        <h3>University of Ibadan</h3>

        <p>Education for liberty and development</p>
      </div>

      <div className="login-right">
        <div className="card">
          <h1>Login to your Portal</h1>

          <h2>Enter your Student ID and Password</h2>

          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;