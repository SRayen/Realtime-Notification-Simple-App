import "./App.css";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  console.log(userName);
  console.log(user);
  return (
    <div className="container">
      <div className="login">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => setUser(userName)}>Login</button>
      </div>
    </div>
  );
}

export default App;
