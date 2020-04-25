import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-6 navbar">
                        <div className="navbar-title"><a href="#home"><em>00.</em> Home </a></div>
                        <div className="navbar-title"><a href="#intro"><em>01.</em> Intro</a></div>
                        <div className="navbar-title"><a href="#project"><em>02.</em> Project</a></div>
                        <div className="navbar-title"><a href="#footer"><em>03.</em> Contact</a></div>
                    </div>
                </div>
            </div>
        )
    }
}
