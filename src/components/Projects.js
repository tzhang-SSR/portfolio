import React from 'react'
import ProjectCard from './ProjectCard'
import playlistpro from '../pictures/playlistpro.png'
import reminder from '../pictures/reminder.jpg'
import earth from '../pictures/earth.png'

const projectTable = [
    {
        title: "PlaylistPro",
        text: "The ultimate Spotify playlist editor tool, drag and drop to add a song in the unqiue 2-column interface",
        img: playlistpro,
        link: "https://playlistpro-spotify.herokuapp.com/"
    },
    {
        title: "Reminder Pro",
        text: "Powerful reminder app with detailed deadline and second by second countdown feature",
        img: reminder,
        link: "https://tzhang-ssr.github.io/reminderPro/"
    },
    {
        title: "VSCode Theme - Earth",
        text: "Eye-Care Color Theme of Code Editor Visual Studio Code, a true blessing for developers WFH",
        img: earth,
        link: "https://marketplace.visualstudio.com/items?itemName=URblacktea.dateng"
    },
]

export default function Projects() {
    return (
        <div className="project-wrapper bg-light-gray">
            <h2 className="f1"><a name="project">Projects</a></h2>
            <hr />
            <div className="project-content">
                {
                    projectTable.map((e, index) =>
                        <ProjectCard key={index} src={e.img} title={e.title} text={e.text} link={e.link} />)
                }
            </div>
        </div>
    )
}
