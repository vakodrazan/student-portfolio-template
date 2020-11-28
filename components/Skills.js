import React from 'react'

function Skills() {
    return (
        <article>
            <header>
                <h2>Front End</h2>
            </header>

            <ul>
                <li>
                    <span>HTML</span>
                    <div className="progress-bar">
                        <div className="progress-bar-detail progress-bar-html"></div>
                    </div>
                </li>
                <li>
                    <span>css</span>
                    <div className="progress-bar">
                        <div className="progress-bar-detail progress-bar-css"></div>
                    </div>
                </li>
                <li>
                    <span>SASS</span>
                    <div className="progress-bar">
                        <div className="progress-bar-detail progress-bar-sass"></div>
                    </div>
                </li>
                <li>
                    <span>JAVASCRIPT</span>
                    <div className="progress-bar">
                        <div className="progress-bar-detail progress-bar-javascript"></div>
                    </div>
                </li>
                <li>
                    <span>REACT</span>
                    <div className="progress-bar">
                        <div className="progress-bar-detail progress-bar-react"></div>
                    </div>
                </li>
            </ul>
        </article>
    )
}

export default Skills
