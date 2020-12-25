import React from 'react';

export default function Header() {
    return (
        <div className="header-wrapper flex justify-center items-center vh-100 mw-100">
            <div>
                <span><a name="home" className="f-headline f2-m pv3 lh-solid dib typewriter">Hello, I'm Teng Zhang :)</a></span>
                <br />
                <span className="f1 f3-m lh-title">A Front-End Developer</span>
            </div>
        </div>
    )
}