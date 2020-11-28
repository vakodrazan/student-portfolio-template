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

            progress {
                width: 60%;
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
                    <label>HTML</label>
                    <progress id="file" value="60" max="100"> 60% </progress>
                </li>
                <li>
                    <label>CSS</label>
                    <progress id="file" value="65" max="100"> 65% </progress>
                </li>
                <li>
                    <label>SASS</label>
                    <progress id="file" value="68" max="100"> 68% </progress>
                </li>
                <li>
                    <label>JAVASCRIPT</label>
                    <progress id="file" value="70" max="100"> 70% </progress>
                </li>
                <li>
                    <label>REACT</label>
                    <progress id="file" value="60" max="100"> 60% </progress>
                </li>
            </ul>
        </ArticleStyle>
    )
}

export default Skills
