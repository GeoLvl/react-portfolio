import React from "react";

const home = () => {
  return (
    <div className="wrapper">
      <div className="home-container">
        <h3 className="big-title">Welcome</h3>
        <div className="intro">
          <h2 className="little-title-1">Hey ! I'm Geoffrey</h2>
          <h1 className="little-title-2">Web developer & Graphic designer</h1>
          
          <h5 className="little-title-3">I know how to use : </h5>
          <p>HTML/CSS, Javascript, React, NodeJS, Express, MongoDB, <br/>
          Adobe Creative Suite, SEO & SEA.</p>
          <p>Currently learning Sass & Typescript !</p>

          <h5 className="little-title-3">Me in 12 words : </h5>
          <p>I don't really like Comic Sans MS, I'm passionate about web & love good design !<br/>
          I'm also good at maths.</p>
          <p>Welcome to my world !</p>
        </div>
      </div>
    </div>
  );
};

export default home;
