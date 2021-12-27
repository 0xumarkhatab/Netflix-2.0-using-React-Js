import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__bg"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
        alt="netflix logo"
      />
      <img
        className="nav__smily"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Breathe-face-smile-big.svg"
        alt="smily"
      />
    </div>
  );
}

export default Nav;
