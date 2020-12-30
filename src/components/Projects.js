import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import budgetapp from '../pictures/budgetapp.jpg'
import countdown from '../pictures/countdown.jpg'
import mboard from '../pictures/mboard.jpg'
import musicmaster from '../pictures/musicmaster.jpg'
import reminder from '../pictures/reminder.jpg'

const projectTable = {
    0: { "title": "Spotify Master", "text": "Online search engine that can search for music artists and view their TOP 10 albums, built with Spotify API", "img": musicmaster, link: "https://musicmasters.herokuapp.com/" },
    1: { "title": "Reminder Pro", "text": "Powerful reminder app with detailed deadline and second by second countdown feature", "img": reminder, link: "https://urpineapple.github.io/reminderPro/" },
    2: { "title": "Budget Web App", "text": "Clean budget creator that can record and calcualte incomes and expenses", "img": budgetapp, link: "https://urpineapple.github.io/BudgetApp/" }
}

export default class Projects extends Component {
    render() {
        return (
            <div className="project-wrapper bg-light-gray">
                <div className="title1"><a name="project">Projects</a></div>
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
