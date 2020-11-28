import React from 'react'
import styled from 'styled-components'

const ArticleStyle = styled.article`
    background: #FFFFFF;
    border-radius: 12px;
    margin-top: 25px;
    padding: 23px;
    color: #4F4F4F;

    h2 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 18px;
    }

    .list-item {
        font-weight: 500;
        font-size: 16px;
        padding-top: 10px;

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-top: 8px; 
            padding-bottom: 8px; 

            .progress-bar {
                width: 60%;
                height: 9px;
                background-color: #C4C4C4;
                border-radius: 12px;

                &-detail {
                    background-color: rgba(47, 128, 237, 0.7);
                    border-radius: 12px;
                    height: 9px;
                }

                &-html {
                    width: 60%;
                }
                &-css {
                    width: 65%;
                }
                &-sass {
                    width: 70%;
                }
                &-javascript {
                    width: 65%;
                }
                &-react {
                    width: 75%;
                }
            }
        }
    }
`;

function Skills() {
    return (
        <ArticleStyle>
            <header>
                <h2>Front End</h2>
            </header>

            <ul className="list-item">
                <li>
                    <span>HTML</span>
                    <div className="progress-bar">
                        <div className="progress-bar-detail progress-bar-html"></div>
                    </div>
                </li>
                <li>
                    <span>CSS</span>
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
        </ArticleStyle>
    )
}

export default Skills
