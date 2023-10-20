import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Dashboard from "../components/Dashboard";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";
import { Particles } from "./Particles";
import "./main.scss";
import RnD from "./RnD";

const piStyle = {
  button: {
    background: "#fff",
    color: "#000",
  },
  background: "#fff",
  color: "#000",
  padding: "10px",
  borderRadius: "50%",
};

function BurgerButton({ onClick, showMenu }) {
  return (
    <button
      id="burger"
      aria-controls="navigation"
      aria-expanded={showMenu ? "true" : "false"}
      aria-label="Toggle navigation"
      className={showMenu ? "open" : "closed"}
      onClick={onClick}
    >
      <div className="bun" id="patty1"></div>
      <div className="bun" id="patty2"></div>
      <div className="bun" id="patty3"></div>
    </button>
  );
}

export default function Main() {
  const [displayLoading, setDisplayLoading] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [showMenu, setShowMenu] = useState(false);
  const [activeArea, setActiveArea] = useState(0); // Used to handle navigation
  const [praetorian, setPraetorian] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoading(false);
    }, 250);
  }, [setDisplayLoading]);

  useEffect(() => {
    console.log(
      "%cWelcome to my website!",
      "color: #fff; background: #000; font-size: 24px; padding: 10px;"
    );
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {displayLoading && <Loading />}
      <div>
        <BurgerButton
          onClick={() => setShowMenu(!showMenu)}
          showMenu={showMenu}
        />
        <Navigation
          open={showMenu}
          activeArea={activeArea}
          setActiveArea={(e) => {
            setActiveArea(e);
            setShowMenu(false);
          }}
          close={() => {
            setShowMenu(false);
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        {/* The Canvas is the background of the website */}
        <Canvas
          shadows
          style={{
            height: height + "px",
            width: width + "px",
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 0, 0]} intensity={0.5} />

          <OrbitControls
            autoRotate
            makeDefault
            autoRotateSpeed={0.9}
            zoomSpeed={0.2}
          />
          <Particles />
        </Canvas>
      </div>
      <RnD praetorian={praetorian} />

      <Dashboard show={activeArea === 0} />
      <span
        style={{
          color: "#fff",
          position: "fixed",
          bottom: 0,
          right: 0,
          zIndex: 11,
          padding: "10px",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={() => {
          console.log("Praetorian mode activated");
          setPraetorian(!praetorian);
        }}
      >
        &pi;
      </span>
    </>
  );
}
