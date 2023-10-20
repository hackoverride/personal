import { useEffect } from "react";
import React from "react";
import "./nav.scss";

export default function Navigation({ open, close, activeArea, setActiveArea }) {
  useEffect(() => {
    const nav = document.getElementById("navigation");

    if (!open) {
      nav.classList.remove("open");
      nav.classList.add("closed");
    } else {
      nav.classList.remove("closed");
      nav.classList.add("open");
    }
  }, [open]);
  return (
    <nav
      id="navigation"
      aria-label="Main Navigation"
      aria-hidden={open ? "false" : "true"}
    >
      <div className="menu__content">
        <div>
          <a
            href="/"
            onClick={() => {
              close();
            }}
          >
            Home
          </a>
        </div>
        <div>
          <span
            className="nav__link"
            onClick={() => {
              setActiveArea("innovation");
              close();
            }}
          >
            R & D
          </span>
        </div>
        <div>
          <span
            className="nav__link"
            onClick={() => {
              // redirect to linkedin
              window.open(
                "https://www.linkedin.com/in/michael-lund-67350b95/",
                "_blank"
              );
              close();
            }}
          >
            Resume
          </span>
        </div>
      </div>
    </nav>
  );
}
