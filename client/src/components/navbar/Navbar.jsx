import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Info from "../../img/info.svg";

function Navbar({ socket }) {
  const [notifications, setNotifications] = useState([]);
  const [display, setDisplay] = useState(false);

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

  const displayNotification = (senderName, type, index) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span
        className="notification"
        key={index}
      >{`${senderName} ${action} your post`}</span>
    );
  };

  return (
    <div className="navbar">
      <span className="logo">Lama App</span>
      <div className="icons">
        <div className="icon" onClick={() => setDisplay(!display)}>
          <img src={Notification} alt="" className="iconImg" />
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>

        <div className="icon">
          <img src={Message} alt="" className="iconImg" />
        </div>

        <div className="icon">
          <img src={Info} alt="" className="iconImg" />
        </div>
      </div>
      {display && (
        <div className="notifications">
          {notifications.map((n, index) =>
            displayNotification(n.senderName, n.type, index)
          )}
          <button
            className="nButton"
            onClick={() => {
              setDisplay(!display);
              setNotifications([]);
            }}
          >
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
