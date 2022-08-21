import React, { useEffect, useState } from "react";

const Images = ({ num }) => {
  const [random, setRandom] = useState(1);
  useEffect(() => {
    setRandom((random) => Math.floor(Math.random() * 10));
  }, []);

  //     transition-duration: 3s, 1s;
  // transition-property: margin-right, color;

  return (
    <div
      style={{
        minHeight: "100%",
        border: "2px solid gray",
        transitionDuration: "3s",
        transitionProperty: "marginTop",
        padding: "5px",
      }}
    >
      <img
        style={{
          maxWidth: random % 2 == 0 ? "60vw" : "30vw",
          minHeight: random % 3 === 0 ? "10vh" : "30vh",
          objectFit: "contain",
        }}
        className="images"
        src={`/assets/image(${random}).jpg`}
      />
    </div>
  );
};

export default Images;
