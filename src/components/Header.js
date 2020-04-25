import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="header-content">
                    <span id="title1"><a name="home">Hello, I'm Teng Zhang :)</a></span>
                    <br />
                    <span id="title2">A Front-End Developer</span>
                </div>
            </div>
        )
    }
}
