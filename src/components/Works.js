import React from "react";
import WorkCard from "./WorkCard";

const WorkExperience = [
  {
    endDate: "Aug, 2020",
    startDate: "Jul, 2020",
    company: "Remote Roofing",
    title: "Frontend Developer Intern",
    description: [
      "Developed the RR's user report page template using NextJS and VueJS to provide the customer with detailed roofing investigation data and graph charts",
      "Fetched and rendered dynamic user data from Airtable API and render it on roofing report with VueJS",
      "Readily took on additional tasks following the development process, continued to meet deadlines while learning new skills and package",
    ],
  },
  {
    endDate: "Aug, 2020",
    startDate: "May, 2020",
    company: "Three Monkeys Communication",
    title: "Frontend Software Developer",
    description: [
      "Rebuilt the 3MC's official website with ReactJS and Bootstrap, and added robust web accessibility features",
      "Created the 3MC's SaaS product 'Mizaru' with React to provide hundreds of users from the deafblind community with professional services, used redux for the application's global state management",
      "Identified key areas for improvement such as responsive features and implementing changes constantly to improve user experience",
    ],
  },
  {
    endDate: "April, 2019",
    startDate: "Jan, 2019",
    company: "Gleentown Education",
    title: "Web Developer Internship",
    description: [
      "Improved the UI design of GE's official website using web languages and WordPress tools that increased website traffic by 20%",
      "Developed GE's own LMS with ES6 and WordPress extension Quiz Master to help 20 GE volunteers complete their online training programs",
    ],
  },
];

export default function Works() {
  return (
    <div className="bg-white black tc pa4">
      <h2 className="f1 center">Work Experience</h2>
      {WorkExperience.map((item, index) => (
        <WorkCard key={index} item={item} />
      ))}
    </div>
  );
}
