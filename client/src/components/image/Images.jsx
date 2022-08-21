import React, { useEffect, useState } from "react";
import "./images.css";

const Images = ({ num }) => {
  const [image, setImage] = useState(1);
  let random = Math.floor(Math.random(1) * 10);
  if (random === 0) random = 1;
  useEffect(() => {
    setImage((image) => `/assets/image(${random}).jpg`);
  }, []);

  //     transition-duration: 3s, 1s;
  // transition-property: margin-right, color;

  return (
    <div
      className={random % 2 === 0 ? "in" : "out"}
      style={{
        display: "flex",
        flexWrap: "wrap",
        minHeight: "400px",
        padding: "0.5px",
        width: random % 2 === 0 ? "40vw" : "20vw",
      }}
    >
      <img
        src={image}
        height={"100%"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Images;
