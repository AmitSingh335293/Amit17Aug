import React from "react";
import Common from "./Common";
import abt from "./abt.svg";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to the about page"
        imgsrc={abt}
        visit="./contact"
        btn="Contact Now"
      />
    </>
  );
};

export default About;
