import React, { useState, useEffect } from "react";
import ThreeTest from "./ThreeTest";

export default function Home() {
  const [mainContent, setMainContent] = useState(true);

  useEffect(() => {
    // If the get request includes strawberry or ?strawberry=true
    // then set the mainContent to false
    if (window.location.search.includes("strawberry=true")) {
      setMainContent(false);
    }

    
  }, [])
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
            style={{
              zIndex: 0,
            }}
          />
          <div className="hero fancyAnimateIn">
            <h1>Michael Lund</h1>
            <span>Fullstack Developer - Passionate Solution Finder</span>
          </div>
          <div className="content">
            <p>
              I am ceaselessly driven by my passion for innovative and impactful
              solutions that transform and streamline the lives of individuals
              globally.
            </p>
            <p>
              Welcome to my personal website. I'm an experienced and dedicated
              software developer, with a deep passion for
              optimizing, scaling, and designing both intricate and robust
              systems.
            </p>
            <p>
              In my career, I have mastered a variety of programming languages
              including .Net, Java, JavaScript, Python, and Go
              (Golang). I have a special affinity for Go's simplicity,
              efficiency, and its powerful support for concurrent programming,
              which makes it my go-to choice for creating high-performing,
              server-side applications and modern, cloud-native solutions.
            </p>
            <p>
              As part of my ongoing commitment to stay on the cutting edge of
              technology, I've recently embarked on an exciting journey to learn
              Rust. Known for its performance and safety, Rust is an innovative
              tool for system programming and creating software that's free from
              common bugs related to memory safety. I'm eager to explore Rust's
              potential to create highly efficient software with its minimal
              runtime and precise control over system resources.
            </p>
            <p>
              Throughout my career, I've also had the pleasure to create a
              complete SaaS booking platform from the ground up. This platform
              is a testament to my comprehensive understanding of software
              development, ability to design scalable systems, and proficiency
              in bringing complex projects to fruition.
            </p>
            <p>
              As a seasoned professional and lifelong learner, I continually
              strive to perfect my craft, explore new technologies, and create
              sophisticated, efficient solutions that meet both technical
              requirements and user needs. Feel free to explore my website to
              learn more about my projects and my journey in software
              development.
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
                  which is a SaaS booking platform for the hospitality industry.
                </p>
                <p>
                  The system is seamlessly integrated with continously development
                  of new features and improvements.
                </p>
               
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
                  Payroll platform integration with the OCC system for time
                  tracking, payroll and staff management.
                </p>
               
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
                
              </div>
              <div className="project__card">
                <h3>Kvelde helse</h3>
                <span>
                  Tech: React, MongoDB, Go, Cloudflare,
                  Twilio, Stripe, Visma eAccounting
                </span>
                <p>
                  I am creating a membership platform for Kvelde Helse. The
                  platform is built with the goal of making it easy for the
                  customer to sign-up for a membership and pay for the
                  membership online.
                </p>
                <p>
                  I have created the platform to be easy to use and easy to
                  maintain. The platform is built with a modern tech-stack and
                  is hosted on a cloud platform.
                </p>
               
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
