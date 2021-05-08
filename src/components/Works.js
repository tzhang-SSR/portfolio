import React from "react";
import WorkCard from "./WorkCard";

const WorkExperience = [
  {
    endDate: "Apr 2021",
    startDate: "Nov 2020",
    company: "RAWsb Inc.",
    title: "Software Developer Intern",
    description: [
      "Collaborated with other Front End developers to design, develop and maintain the webpages of Collegiate Independent Study",
      "Optimized the SEO, web performance, and accessibility of the CIS website constantly and increased the average LightHouse score by 7%",
      "Provided detailed guidance to other developers on development issues including backend connection and API fetching",
    ],
  },
  {
    endDate: "Aug 2020",
    startDate: "Jul 2020",
    company: "Remote Roofing",
    title: "Frontend Developer Intern",
    description: [
      "Developed and maintained the user report template and homepage and with robust responsive features",
      "Eagerly took on tasks that requiring new technology such as Airtable API and VueJS and managed to apply it for development needs",
      "Assisted other colleagues with development tasks and continued to meet deadlines while performing individual duties",
    ],
  },
  {
    endDate: "Aug 2020",
    startDate: "May 2020",
    company: "Three Monkeys Communication",
    title: "Frontend Software Developer",
    description: [
      "Finished the main part of 3MC's homepage and other development tasks rapidly with quality ensured",
      "Developed and maintained 3MC's SaaS product 'Mizaru' according to WCAG standards, and continually adjusted based on feedback from the deaf-blind community",
      "Identified key areas for improvement and implemented changes instantly to improve user experience throughout the development process",
    ],
  },
  {
    endDate: "April 2019",
    startDate: "Jan 2019",
    company: "Gleentown Education",
    title: "Web Developer Internship",
    description: [
      "Increased GE's website visitors by 10% through improving the UI design with web languages and Elementor",
      "Helped over 20 GE volunteers complete their online training programs by developing GE's own LMS with JavaScript and WordPress extensions",
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
