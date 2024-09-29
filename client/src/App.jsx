import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  console.log(userName);
  console.log(user);
  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          <Card />
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={() => setUser(userName)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
