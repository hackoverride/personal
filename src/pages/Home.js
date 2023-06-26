import React, { useState } from "react";
// import Klikkit from "./projects/Klikkit";
// import Digikort from "./projects/Digikort";
// import OCC from "./projects/OCC";
import ThreeTest from "./ThreeTest";

export default function Home() {
  const [mainContent, setMainContent] = useState(true);
  const [showInfo, setShowInfo] = useState({
    show: false,
    info: "",
  });
  return (
    <>
      {mainContent ? (
        <>
          <img
            src="./baseLogo.png"
            alt="hero"
            className="hero-image"
            id="backgroundImage"
            draggable={false}
          />
          <div className="hero fancyAnimateIn">
            <h1>Michael Lund</h1>
            <span>Fullstack Developer - Solution Architect</span>
          </div>
          <div className="content">
            <p>
              I am ceaselessly driven by my passion for innovative and impactful
              solutions that transform and streamline the lives of individuals
              globally.
            </p>
          </div>

          <div className="content">
            <h2>My latest projects</h2>
            <div className="project__container">
              <div className="project__card">
                <h3>Klikkit.no</h3>
                <span>
                  Tech: React, MongoDB, Node/Express, Heroku, Azure, Cloudflare,
                  Twilio, Nets Easy and Go
                </span>
                <p>
                  My role as the CEO, System Developer and Project Manager for
                  Klikkit is to make sure that the projects are delivered on
                  time and within budget.
                </p>
                <p>
                  I am responsible for the development of the Klikkit system
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (showInfo.show) {
                      setShowInfo({
                        show: false,
                        info: "",
                      });
                    } else {
                      setShowInfo({
                        show: true,
                        info: "Klikkit",
                      });
                    }
                  }}
                >
                  Tell me more
                </button>
              </div>
              <div className="project__card">
                <h3>OCC</h3>
                <span>Tech: Go, React, MongoDB, MySQL, C#.NET, Azure</span>
                <p>
                  My reponsibilities as a developer at OCC is to develop and
                  maintain the OCC system. I evaluate, analyze and implementet
                  new technologies and systems with the goal of improving the
                  overall system experience.
                </p>
                <p>
                  I was also responsible for the development of the HR and
                  Payroll platform integrated with the OCC system for time
                  tracking and staff management.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (showInfo.show) {
                      setShowInfo({
                        show: false,
                        info: "",
                      });
                    } else {
                      setShowInfo({
                        show: true,
                        info: "OCC",
                      });
                    }
                  }}
                >
                  Tell me more
                </button>
              </div>
              <div className="project__card">
                <h3>Digikort.no</h3>
                <span>
                  Tech: React, MongoDB, Node/Express, Azure, Cloudflare, Twilio,
                  Nets Easy
                </span>
                <p>
                  I worked as a project manager for the development of
                  Digikort.no - An online giftcard web-app.
                </p>
                <p>
                  We created an MVP for online gift-cards. The system was built
                  with the goal of making it easy for the customer to create and
                  send gift-cards to their friends and family online.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (showInfo.show) {
                      setShowInfo({
                        show: false,
                        info: "",
                      });
                    } else {
                      setShowInfo({
                        show: true,
                        info: "Digikort",
                      });
                    }
                  }}
                >
                  Tell me more
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ThreeTest />
      )}
      <span
        id="secret"
        onClick={() => {
          setMainContent(!mainContent);
        }}
      >
        &pi;
      </span>
    </>
  );
}
