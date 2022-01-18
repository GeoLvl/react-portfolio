import React from "react";

const webProjects = () => {
  const myWebProjects = [
    {
      screenshot: "Full-Stack Web Developer",
      title: "Music Hub",
      techno: "React, Express, Node, MongoDB, RESTful API",
      projectLink: "https://music-hub-ironhack.netlify.app/",
      gitLink: "https://github.com/South-Connection",
    },
    {
      screenshot: "Full-Stack Web Developer",
      title: "Mood Shaker",
      techno: "JavaScript, Express, Node, MongoDB, RESTful API",
      projectLink: "https://mood-shaker.herokuapp.com/",
      gitLink: "https://github.com/French-Connection-Ironhack/moodshaker",
    },
    {
      screenshot: "Full-Stack Web Developer",
      title: "NyanSpace",
      techno: "HTML/CSS, JavaScript",
      projectLink: "https://geolvl.github.io/NyanSpaceGame/",
      gitLink: "https://github.com/GeoLvl/NyanSpaceGame",
    },
  ];

  return (
    <div>
      <h2>Projects :</h2>
      {myWebProjects.map((eachProject, index) => {
        return (
          <div key={index}>
            <h3>- {eachProject.title}</h3>
            <h4>{eachProject.screenshot}</h4>
            <p>
              {eachProject.techno}
              <ul>
                <li>
                  <a href={eachProject.projectLink}>Website</a>
                </li>
                <li>
                  <a href={eachProject.gitLink}>Github</a>
                </li>
              </ul>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default webProjects;
