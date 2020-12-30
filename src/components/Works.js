import React from "react";

export default function Works() {
  return (
    <div className="bg-white black tc pa4">
      <h2 className="f1 center">Work Experience</h2>
      <div className="bg-black-80 white w-50-l w-100 center tl pv4 ph4 relative br3">
        <div className="b f4 h-100">May, 2020</div>
        <div className="bl bw2 h-100 b--white ma2 pl4">
          <h3>Remote Roofing</h3>
          <div>Front End developer</div>
          <ul>
            <li>
              Developed the RR’s user report page template using NextJS and
              VueJS to provide the customer with detailed roofing investigation
              data and graph charts
            </li>
            <li>
              Fetched and rendered dynamic user data from Airtable API and
              render it on roofing report with VueJS
            </li>
            <li>
              Readily took on additional tasks following the development
              process, continued to meet deadlines while learning new skills and
              package
            </li>
          </ul>
        </div>

        <div className="b f4 h-100">April, 2020</div>
      </div>
    </div>
  );
}
