import React from 'react';

const techStacks = [
    { title: 'Languages', content: 'HTML, CSS, JavaScript, TypeScirpt jQuery, Sass/SCSS' },
    { title: 'JS Libraries/Frameworks', content: 'ReactJS, NextJS' },
    { title: 'CSS Libraries', content: 'Boottstrap, Tachyons, TailwindCSS' }
];

export default function Intro() {
    return (
        <div className="pv5 ph4 bg-light-gray">
            <div className="w-70-l w-100 center">
                <div className="title1"> <a name="intro">About Me</a></div>
                <div className="flex-l db-m">
                    <div className="dib w-50-l w-100">
                        <hr />
                        <p>
                            I'm a Front End Web developer who is currently based in Malden, MA.
                            I got my Bachelor’s degree in Computer Engineering from Northeastern University.
                            Up until now, I've been working as a front end developer for one year
                            and truly enjoyed the process of developing various websites
                            and web applications.
                            For me, using the web to visually deliver and present information is a rewarding and meaningful work.
                        </p>
                        <p>
                            I'm experienced in using basic web languages
                            like HTML, CSS, JavaScript and jQuery to build websites,
                            and also familiar with frontend frameworks like React and CSS libraries.
                            My previous works also taught me a lot in
                            developing using CMS such as WordPress and WebFlow.
                            Right now, I'm working part time and am looking for opportunities to put my skills into best use.
                        </p>

                    </div>
                    <div className="dib w-50-l w-100">
                        <div className="bg-black-80 white mh3 pa4 br4">
                            <div className="tc center f3 pv1 b">💡 Tech Stacks 💡</div>
                            <ul className="list pl0">
                                {
                                    techStacks.map((stack, index) =>
                                        <li key={index} className="pt2 f4"><strong>{stack.title}: </strong>{stack.content} </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
