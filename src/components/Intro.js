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
                <h2 className="title1 ma0"> <a name="intro">About Me</a></h2>
                <div className="flex-l db-m">
                    <div className="dib w-50-l w-100 courier tracked-tight">
                        <hr />
                        <p>
                            Passionate Front End Web developer who is currently located in <u>Malden, MA</u>.
                            Up until now, I've worked in Front End development for <b>1.5 years</b> and truly enjoyed the process.</p>
                        <p>
                            I finished my Bachelor’s degree in Computer Engineering at <em>Northeastern University</em>.
                            Currently pursuing a Master from <em>Boston University</em>
                        </p>
                        <p>
                            In my opinion, using the web to deliver information visually is a rewarding and meaningful job.
                        </p>
                        <p>
                            I am experienced in using web languages including HTML, CSS, JavaScript, and jQuery,
                            and also familiar with modern Front End frameworks and CSS libraries.
                        </p>
                        <p>
                            Right now, I am actively looking for opportunities to put my skills to the best use.
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
