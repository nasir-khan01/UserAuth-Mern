import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDetails from "./components/UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              user && user._id ? (
                <Home setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details" element={<UserDetails profile={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
