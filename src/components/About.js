import React from "react";
import image from "../assets/image.jpg"; // Make sure the image exists at this path

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I’m a passionate web developer building awesome apps with React.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
