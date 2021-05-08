import React from 'react';

const routes = [
    { link: '#home', title: 'Home' },
    { link: '#intro', title: 'Intro' },
    { link: '#project', title: 'Project' },
    { link: '#footer', title: 'Contact' },
]

const toggleNavbar = () => {
    let navbar = document.getElementById("navbar")
    navbar.classList.toggle("responsive")
}

const NavStyle = "bg-black-80 mh2 w4-l tc pa2 dn-m";

export default function Navbar() {
    return (
        <div className="navbar w-100-m flex" id="navbar">
            <div className="bg-black-80 white mh2 tc tr-m pa2 dn db-m pointer"
                onClick={toggleNavbar}>
                <i className="fa fa-bars"></i>
            </div>
            {
                routes.map((route, index) =>
                    <div key={index} className={NavStyle}>
                        <a className="link white hover-white ttc" href={route.link}>{route.title} </a>
                    </div>
                )
            }
        </div>
    )
}
