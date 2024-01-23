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
            <h1>Michael Lund</h1>
          </div>
        </div>
      </div>
      <div className="cursor"></div>
    </main>
  );
}
