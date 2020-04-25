import React, { Component } from 'react'
import profile from '../pictures/profile.jpg'

export default class Intro extends Component {
    render() {
        return (
            <div className="intro-wrapper container-fluid">
                <div className="row">
                    <div className="col-md-8 col-xs-12">
                        <div className="title1"><a name="intro">About Me</a></div>
                        <hr />
                        <div className="intro-edu">
                            I'm a <b>New Graduate</b> at Northeastern University with a strong background in Computer Engineering.
                    I discovered my passion for web development during freshman year and has been sutdying in that filed ever since.
                    In my spare time, I also enjoy working as a volunteer in non-profit organizations to help people in need.
                    </div>
                        <br />
                        <div className="intro-skills">
                            <div className="title2">Tech Stacks</div>
                            <ul>
                                <li><em>Programming Languages:</em> C++, CSS, HTML, Java, JavaScript, Python, Racket, Verilog</li>
                                <li><em>Libraries/Frameworks:</em> Bootstrap, React, Redux</li>
                                <li><em>Development Tools:</em> Eclipse, GitHub, PyCharm, Sublime Text, Visual Studio 2017, VS Code</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 intro-pic">
                        <img id="intro-profile" alt="profile-pic" src={profile} />
                    </div>
                </div>
            </div>
        )
    }
}
