import React from "react";
import selfie from "../images/selfportrait.png";
function Home() {
  return (
    <div>
      <img src={selfie} alt={`Screenshot of ${selfie}`} />
    </div>
  );
}

export default Home;
