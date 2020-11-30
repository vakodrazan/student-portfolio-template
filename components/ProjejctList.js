import React from 'react'
import styled from 'styled-components'

const SectionStyle = styled.section`
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 15px;
    margin-left: 20px;
    max-width: 30%;

    .heading {
        padding-bottom: 22px;
    }

    .title {
        font-weight: 500;
        font-size: 24px;
    }

    .description {
        font-weight: 500;
        font-size: 16px;
        color: #828282;
        padding-top: 18px;
        padding-bottom: 40px;
        width: 210px;
    }

    .buttons {
        border-radius: 12px;
        padding-top: 13px;
        padding-bottom: 11px;
        padding-right: 20px;
        padding-left: 20px;
        border: none;
        
        &-demo {
            background-color: #5C94E1;
            color: #fff;
            margin-right: 11px;
        }
        &-code {
            border: 1px solid #5C94E1;  
            background-color: #fff; 
            color: #5C94E1;

            &:hover {
                background-color: #F2F2F2;
            }
        }

        &:hover {
            outline: none;
            opacity: 0.9;
        }
    }
`;

function ProjejctList({ design }) {
    return (
        <SectionStyle>
            <h3 className="heading">
                <img src={design.picture} />
            </h3>
            <div>
                <strong className="title">{design.title}</strong>
                <p className="description">{design.description}</p>
                <div>
                    <a href={design.url} alt={design.title} >
                        <button className="buttons buttons-demo" aria-label={`See the demo of ${design.title}`}>Demo</button>
                    </a>
                    <a href={design.code} alt={design.titles} >
                        <button className="buttons buttons-code" aria-label={`See the code for ${design.title}`}>Code</button>
                    </a>
                </div>
            </div>
        </SectionStyle>
    )
}

export default ProjejctList
