import React, { useContext } from "react";
import HeroSection from "../components/hero-section/HeroSection";
import Images from "../components/image/Images";
import { ModalContext } from "../context/ModalContext";

const LandingPage = () => {
  const { register, toggleRegister } = useContext(ModalContext);

  return (
    <div>
      <HeroSection />
      <div
        className="p-3"
        style={{
          width: "90vw",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
          <Images key={index} num={num} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
