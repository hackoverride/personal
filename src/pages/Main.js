import React, { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const moveMouse = (e) => {
      const { clientX, clientY } = e;
      cursor.style.left = clientX + "px";
      cursor.style.top = clientY + "px";
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);
  return (
    <main>
      <div className="hero">
        <div className="profile__container">
          <div className="profileHolder">
            <img
              src={"./profile.png"}
              alt={"animation style profile of Michael Lund"}
            />
          </div>
          <div className="profileDetails">
            <span>Hello, I'm</span>
            <h1>Michael</h1>
          </div>
        </div>
      </div>
      <div className="Links">
        <a href="#work">My Work</a>
        <a href="#background">My Background</a>
        <a href="#contact">My Contact</a>
      </div>
      <section className="content">
        <div className="content__container">
          <div className="image__right">
            <div>
              <h2>Consultant</h2>
              <p>
                I am currently working as a Consultant at Capgemini in Norway.
              </p>
            </div>
            <img src={"./cap.svg"} alt={"Capgemini logo"} style={{padding: '12px', background: '#999'}} />
          </div>
        </div>
      </section>
      <section className="content" id="work">
        <div className="content__container">
          <div className="image__right">
            <div>
              <h2>Fullstack Developer</h2>
              <p>
                As a coder, I pride myself in my ability to deep-dive into
                problems, unravel their complexities, and craft real solutions.
                My professional fullstack journey began in May 2020, bridging
                gaps between ideas and execution.
              </p>
              <p>
                My portfolio spans diverse projects, from the very personal and
                intimate projects to very large projects with teams that require
                years of planning and development - working with many different
                departments.
              </p>
              <p>
                I enjoy working both on the frontend with design and the user
                experience, but also on the backend with efficient data
                structures and system design. I like to understand the complete
                picture to be able to make the best decisions for the project.
              </p>
            </div>
            <img src={"./dev.png"} alt={"Sydney CBD"} width="250" />
          </div>
        </div>
      </section>
      <section className="content">
        <div className="content__container">
          <h2>Workshop and Speaker</h2>
          <p>
            I enjoy speaking about topics that I am passionate about. I have
            spoken about code structure, the startup journey and more general
            about understanding modern software.
          </p>
          <p>
            My process and method is to try to teach a few different learning
            points and not just speak directly off the page. That way I can
            engage with the audience and hopefully make the talk more
            interesting.
          </p>
          <p>
            I strive to deliver content that is informative and actionable,
            drawing on my experience in both the technical and business sides of
            the software industry, to reach a wide range of audiences.
          </p>
          <p>
            If you're looking for a speaker who can provide perspective on
            technology, entrepreneurship and business processes, and the
            combination of my background and passion, I'd be delighted to
            contribute to your event or platform.
          </p>
        </div>
      </section>
      <section className="content">
        <div className="content__container">
          <h2>Founder and Business Owner</h2>
          <p>
            I founded Klikkit ActivityCloud.io - An activity and experience
            platform with some amazing clients.
          </p>
          <p>
            Time flies when you're having fun, and I have been having a lot of
            fun building this platform over the past three- four years. We have
            integrated activities with three different payment providers, all
            the while learning a lot about design, both in terems of the user
            experience, but also when building the flow of data and systems.
          </p>
          <p>
            This has taught me a lot about the importance of good design and
            most importantly, connecting business and technology processes.
          </p>
        </div>
      </section>
      <section className="content" id="background">
        <div className="content__container">
          <div className="image__left">
            <img
              src={"./australian_school.webp"}
              alt={"International School of Management, Sydney"}
              width="250"
            />
            <div>
              <h2>Hospitality Domain</h2>
              <p>
                In 2005 I started studying hospitality management at the
                International School of Management in Sydney. And for around
                four years I lived in and around Sydney and worked in the CBD at
                Sheraton on the Park as a Porter, Shift leader and Concierge.
              </p>
              <p>
                In 2009 I moved back to Norway and started working at Farris
                Bad, and kept busy with Front of House and Guest Relations.
              </p>
              <p>
                I have worked in the hotel industry from 2005 - giving me a good
                insight into the domain, but it has given me so much more as the
                hospitality industry is all about giving service to others,
                always trying to find the Yes and understanding and exceeding
                expectations of a multitude of different characters and
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="content__container">
          <div className="image__right">
            <div>
              <h2>Golfer</h2>
              <p>
                My only outlet that is not creative. I love to walk around a
                course and try to hit the ball in a hole. To me, golf is more
                meditative than anything else. I love the challenge of the game,
                and the opportunity to be outside in nature, without any
                distractions.
              </p>
              <p>
                It's a sport that teaches patience and precision - it's an
                opportunity to reset and recharge. I do not play to become a
                professional, but I play to become a better version of myself.
              </p>
              <p>
                Like coding and development I concider everything an opportinity
                to improve, to iterate and take what is and to improve a little
                bit each time.
              </p>
            </div>
            <img src={"/golf.png"} alt={"Golf"} width="250" />
          </div>
        </div>
      </section>
      <section className="content">
        <div className="content__container">
          <h2>Raspberry PI and IOT</h2>
          <p>
            I try to find time to build IOT projects with Arduino and Raspberry
            Pi. I have a few projects that I have built over the years, and I am
            always looking for new ideas and projects to build.
          </p>
          <p>
            My current project is a robotic car with a camera and sonic sensors,
            streaming video from a webserver over the internet. I am learning a
            lot about networking and security and linux - Aswell as electric
            circuits, amplifiers, motors and sensors and how to build a project
            from scratch.
          </p>
        </div>
      </section>
      <section className="content" id="contact">
        <div className="content__container">
          <h2>Contact</h2>
          <p>
            If you want to get in touch, you can send me an email at
            michael@klikkit.no
          </p>
        </div>
      </section>
      <div className="cursor"></div>
    </main>
  );
}
