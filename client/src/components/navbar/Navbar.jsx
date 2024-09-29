import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Info from "../../img/info.svg";

function Navbar({ socket }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleNotification = (data) => {
      setNotifications((prev) => [...prev, data]);
    };

    socket.on("getNotification", handleNotification);

    // Clean up the previous listener when the component unmounts or socket changes
    return () => {
      socket.off("getNotification", handleNotification);
    };
  }, [socket]);

  console.log("notifications=>", notifications);

  return (
    <div className="navbar">
      <span className="logo">Lama App</span>
      <div className="icons">
        <div className="icon">
          <img src={Notification} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>

        <div className="icon">
          <img src={Message} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>

        <div className="icon">
          <img src={Info} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
