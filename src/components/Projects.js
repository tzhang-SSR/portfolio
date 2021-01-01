import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import musicmaster from '../pictures/musicmaster.jpg'
import reminder from '../pictures/reminder.jpg'

const projectTable = {
    0: { "title": "Spotify Master", "text": "Online search engine that can search for music artists and view their TOP 10 albums, built with Spotify API", "img": musicmaster, link: "https://musicmasters.herokuapp.com/" },
    1: { "title": "Reminder Pro", "text": "Powerful reminder app with detailed deadline and second by second countdown feature", "img": reminder, link: "https://urpineapple.github.io/reminderPro/" },
}

export default class Projects extends Component {
    render() {
        return (
            <div className="project-wrapper bg-light-gray">
                <h2 className=" f1"><a name="project">Projects</a></h2>
                <hr />
                <div className="project-content row">
                    {
                        Object.values(projectTable).map((e, index) => <ProjectCard key={index} src={e["img"]} title={e["title"]} text={e["text"]} link={e["link"]} />)
                    }

                </div>
            </div>
        )
    }
}
