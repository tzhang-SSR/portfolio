import React from "react";
import FadeIn from "./FadeIn";

export default function WorkCard(props) {
  const { startDate, endDate, title, company, description } = props.item;
  return (
    <FadeIn>
      <div className="bg-black-80 white w-60-l w-100 center tl pv4 ph4 mv4 relative br3">
        <div className="b f4 h-100">{endDate}</div>
        <div className="bl bw2 h-100 b--white ma2 pl4">
          <h3 className="mv1 lh-title">{company}</h3>
          <p className="mv1 ttc">{title}</p>
          <ul className="mv1">
            {description.map((item, index) => (
              <li key={index} className="pv2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="b f4 h-100">{startDate}</div>
      </div>
    </FadeIn>
  );
}
