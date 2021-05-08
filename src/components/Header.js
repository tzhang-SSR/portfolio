import React from "react";

export default function Header() {
  return (
    <div className="header-wrapper flex justify-center items-center vh-100 mw-100">
      <div>
        <h1 className="f-headline f2-m pv3 lh-solid dib typewriter">
          <a name="home">
            Hello, I'm Teng Zhang :)
          </a>
        </h1>
        <br />
        <div className="f1 f3-m lh-title">
          A Front-End Developer<span role="img" aria-label="hello">👋</span>
        </div>
      </div>
    </div>
  );
}
