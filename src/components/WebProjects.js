import React from "react";

const webProjects = () => {
  const myWebProjects = [
    {
      screenshot: "/imgs/music-hub-screenshot.PNG",
      title: "Music Hub",
      techno: "React, Express, Node, MongoDB, API REST",
      projectLink: "https://music-hub-ironhack.netlify.app/",
      gitLink: "https://github.com/South-Connection",
    },
    {
      screenshot: "/imgs/moodshaker-screenshot.PNG",
      title: "Mood Shaker",
      techno: "JavaScript, Express, Node, MongoDB, API REST",
      projectLink: "https://mood-shaker.herokuapp.com/",
      gitLink: "https://github.com/French-Connection-Ironhack/moodshaker",
    },
    {
      screenshot: "/imgs/nyanspace-screenshot.jpg",
      title: "NyanSpace",
      techno: "HTML/CSS, JavaScript",
      projectLink: "https://geolvl.github.io/NyanSpaceGame/",
      gitLink: "https://github.com/GeoLvl/NyanSpaceGame",
    },
  ];

  return (
    <section>
      <h2 className="big-title">Projects</h2>
      {myWebProjects.map((eachProject, index) => {
        return (
          <article className="project-container" key={index}>
            <div className="project-desc">
              <h3 className="little-title-1">{eachProject.title}</h3>
              <p>
                {eachProject.techno}
                <ul className="project-ul">
                  <li className="links">
                    <a href={eachProject.projectLink}>Website</a>
                  </li>
                  <li className="links">
                    <a  href={eachProject.gitLink}>Github</a>
                  </li>
                </ul>
              </p>
            </div>
            <div className="project-img">
              <img src={eachProject.screenshot} alt={eachProject.title} />
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default webProjects;
