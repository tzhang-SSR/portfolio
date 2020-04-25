import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import budgetapp from '../pictures/budgetapp.jpg'
import countdown from '../pictures/countdown.jpg'
import mboard from '../pictures/mboard.jpg'
import musicmaster from '../pictures/musicmaster.jpg'
import reminder from '../pictures/reminder.jpg'

const projectTable = {
    0: { "title": "Spotify Master", "text": "A search engine built with Spotify API that's able to search for music artists and view their TOP 10 albums", "img": musicmaster, link: "https://musicmasters.herokuapp.com/" },
    1: { "title": "Message Board", "text": "Meesage board let users leave message with personal details like name and address, built with React and Redux", "img": mboard, link: "https://urpineapple.github.io/react-redux-messageBoard/" },
    2: { "title": "Deadline CountDown", "text": "A useful countdown web app that let user calculate the remaining time before dealines", "img": countdown, link: "https://github.com/URpineapple/countdownChamp" },
    3: { "title": "Reminder Pro", "text": "A web app that put sitcky notes with dealine, including date and time, built with React and Redux", "img": reminder, link: "https://urpineapple.github.io/reminderPro/" },
    4: { "title": "", "text": "", "img": "", link: "" },
    5: { "title": "Budget Web App", "text": "Vanilla JS budget web app, allowing visitors to record their incomes and expenses", "img": budgetapp, link: "https://urpineapple.github.io/BudgetApp/" },
}

export default class Projects extends Component {
    render() {
        return (
            <div className="project-wrapper">
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
