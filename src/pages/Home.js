import React, { useState } from "react";
import {ChatZone} from "./ChatZone";

export default function Home() {
  const [mainContent, setMainContent] = useState(true);
  return (
    <>
     {mainContent ? ( <>
        <img
          src="./baseLogo.png"
          alt="hero"
          className="hero-image"
          id="backgroundImage"
          draggable={false}
        />
        <div className="hero">
          <h1>Michael Lund</h1>
          <span>Cloud System Developer</span>
        </div>
        <div className="content">
          <h2>Please sit back and relax while I tell you about my process</h2>
          <p>
            The development process I use is very much inspired by the Agile
            methodology. Continous development and deployment.
          </p>
          <p>
            I have a very strong focus on the customer and their needs. I like
            to think of the end system as a product inspired by an{" "}
            <span className="emphasize">iceberg</span>. The visible part is the
            customer facing part of the system. The part that is not visible is
            the infrastructure, data modelling, architecture and the development
            process. The customer facing part is the part that is most important
            to the customer. The infrastructure and the development process is
            the part that is most important to me.
          </p>
          <p>
            In the start of every process and project I try to find learning
            points that I can attach to the project. This way I can learn new
            technologies and improve my skills. I start by thinking of the end
            user and also making sure we all are on the same page when it comes
            to the problem we are trying to solve.
          </p>
          <p>
            I use Figma or Adobe XD to design a prototype of the system. This is
            a very important step in the process. It gives me a chance to think
            about the user experience and how the system will be used by
            creating a clickable prototype. I try to find a few different design
            solutions and then present them to the customer. This way I can get
            feedback on the design and make sure that the design is what the
            customer wants.
          </p>
          <p>
            As I like to work in an Agile way I try to deliver a working
            prototype as soon as possible. This way I can get feedback from the
            customer and make sure that I am on the right track. The design, UML
            diagrams and the prototype is the most important part of the
            process. We can code less if the pre-development process is done
            right.
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
                My role as the CEO, system developer and Project Manager for
                Klikkit was to make sure that the project was delivered on time
                and within budget.
              </p>
              <p>
                I was the key-account manager and contained the relationship
                with the customers while translating their needs into a
                technical solution.
              </p>
              <button type="button">Tell me more</button>
            </div>
            <div className="project__card">
              <h3>OCC - Developer</h3>
              <span>Tech: Go, React, MongoDB, MySQL, C#.NET, Azure</span>
              <p>
                My reponsibilities as a developer at OCC is to develop and
                maintain the OCC system. I evaluate, analyze and implemented new
                technologies and systems with the goal of improving the overall
                system.
              </p>
              <p>
                I was also responsible for the development of the HR and Payroll
                platform integrated with the OCC system for time tracking and
                staff management.
              </p>
              <button type="button">Tell me more</button>
            </div>
            <div className="project__card">
              <h3>WeStudy</h3>
              <span>Tech: Go, React, Oauth2, MongoDB, MySQL, Heroku.</span>
              <p>
                I am a tech-advisor for startup WeStudy. I advise and help the
                CEO with the development of the first system prototype.
              </p>
              <p>
                The system is a LMS (Learning Management System) for students at
                schools and universities. The system is built with the goal of
                making it easy for students to learn.
              </p>
              <button type="button">Tell me more</button>
            </div>
            <div className="project__card">
              <h3>Digikort.no</h3>
              <span>
                Tech: React, MongoDB, Node/Express, Azure, Cloudflare, Twilio,
                Nets Easy
              </span>
              <p>
                I worked as a project manager for the design and development of
                Digikort.no. I was responsible for the development of the system
                and the infrastructure.
              </p>
              <p>
                We created an MVP for online gift-cards. The system was built
                with the goal of making it easy for the customer to create and
                send gift-cards to their friends and family online.
              </p>
              <button type="button">Tell me more</button>
            </div>
          </div>
        </div>
      </>) : <ChatZone />}
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
