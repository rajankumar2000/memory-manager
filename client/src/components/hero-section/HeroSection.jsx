import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { ModalContext } from "../../context/ModalContext";
import "./heroSection.css";

const HeroSection = () => {
  const { toggleRegister } = useContext(ModalContext);
  return (
    <div className="container">
      <div className="call__to__action">
        <h1>Capture and Store Your Memories</h1>
        <Button
          onClick={() => {
            toggleRegister();
          }}
        >
          Get Started
        </Button>
      </div>
      <div className="images">
        <img src={"/assets/hero-image.jpg"} className="img1" />
      </div>
    </div>
  );
};

export default HeroSection;
