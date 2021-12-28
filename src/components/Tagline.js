import React from "react";

export default function Tagline() {
  return (
    <>
      <span>Fullstack developer | Freelance | Love to level up</span>
      <p className="linkHolder">
        <a href="https://github.com/hackoverride" target="_blank">
          <i className="fab fa-github-square"></i>
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/michael-lund-67350b95/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </p>
    </>
  );
}
