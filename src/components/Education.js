import React from "react";

const education = () => {
  const myEducation = [
    {
      schoolName: "Ironhack",
      city: "Remote",
      country: "EU",
      degree: "Full-Stack Web Developer",
      schoolStarted: "2021",
      schoolEnded: "2021",
    },
    {
      schoolName: "Altea Business & Digital School",
      city: "Bordeaux",
      country: "France",
      degree: "Web Project Manager",
      schoolStarted: "2020",
      schoolEnded: "2021",
    },
    {
      schoolName: "Mjm Graphic Design",
      city: "Bordeaux",
      country: "France",
      degree: "Graphic designer",
      schoolStarted: "2018",
      schoolEnded: "2019",
    },
  ];

  return (
    <div>
      <h2>Education :</h2>
      {myEducation.map((eachSchool, index) => {
        return (
          <div key={index}>
            <h3>- {eachSchool.degree}</h3>
            <h4>{eachSchool.schoolName}</h4>
            <p>
              {eachSchool.city}, {eachSchool.country}
            </p>
            <p>
              {eachSchool.schoolStarted} - {eachSchool.schoolEnded}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default education;
