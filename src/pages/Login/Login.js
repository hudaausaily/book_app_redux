import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./login.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        {/* ________________________________________ */}
        
          <div className="body">
            <form id="form">
              <h2 id="h2">login</h2>
              <div className="qqq">
                <input id="input" type="text" placeholder="Your email" />
                <p id="p1" />
              </div>
              <div className="qqq">
                <input
                  id="input"
                  type="password"
                  placeholder="Enter password"
                />
                <p id="p1" />
              </div>
              <input
                id="inputButtonLogin"
                type="button"
                defaultValue="login"
              />
            </form>
          </div>
        {/* ________________________________________ */}

      </header>
    </div>
  );
}
