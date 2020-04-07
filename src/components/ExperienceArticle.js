import React from 'react';
import Experience from './Experience';


const ExperienceArticle = (props) => 
  <article
    id="experience"
    className={`${props.article === 'experience' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
    >
    <h2 className="major">Experience</h2>
    {
      Experiences.map(experience => (
        <>
          <Experience 
            company={experience.company}
            title={experience.title}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
          />
          <hr/>
        </>
      ))
    }
    {props.close}
  </article>

const Experiences = [
  {
    company: "Quicken Loans",
    title: "Software Engineer",
    startDate: "May 2018",
    endDate: "March 2020",
    description: `I worked on multiple teams that focused on making the mortgage qualification process more streamlined, and less error prone.
    Created new applications the focus on different parts of the qualification process. 
    These applications were built using AWS for our infrastructure needs, Node and C# for our backend, and React and Angular for the frontend. 
    We also did this while trying to move functionality from legacy apps to our new apps.`,
  },
  {
    company: "Michigan State University",
    title: "Teaching Assistant",
    startDate: "January 2017",
    endDate: "May 2018",
    description: `I was a Teaching Assistant (TA) for a class about Object Oriented Programming. 
    I created grading rubrics, graded student assignments, and continuously worked with other TAs and the professor to improve the class`,
  },
  {
    company: "Target",
    title: "Software Engineering Intern",
    startDate: "July 2017",
    endDate: "August 2017",
    description: `Worked on a team responsible for the point of sales machines that cashiers at Target retail stores would use.
    Carefully modified legacy C++ code to change or add screens, and worked on breaking legacy code into microservices to make it more scalable and maintainable.
    The tech stack used was Java, Docker, and Kubernetes for the microservices, and C++ and some proprietary software for the legacy code.`,
  },
  {
    company: "Urban Science",
    title: "Performance Testing Intern",
    startDate: "May 2016",
    endDate: "August 2016",
    description: `Prepared scripts to help test the performance of many different applications at the Company. 
    Created a utility application in WPF and C# to automate a task that would take hours to a few minutes.
    Also created code that scrapes a web application to generate code that runs a smoke test for an application.`,
  },
  {
    company: "Michigan State University RHS",
    title: "Full Stack Developer",
    startDate: "November 2014",
    endDate: "May 2017",
    description: `Developed and tested application from the ground up, and maintained applications using HTML, Javascript, CSS, MySQL, and PHP`,
  }
]

export default ExperienceArticle;