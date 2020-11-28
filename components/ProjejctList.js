import React from 'react'
import styled from 'styled-components'

const SectionStyle = styled.section`
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 15px;
`;

function ProjejctList({ design }) {
    return (
        <SectionStyle>
            <h3>
                <img src={design.picture} />
            </h3>
            <div>
                <strong>{design.title}</strong>
                <p>{design.description}</p>
                <div>
                    <a href={design.url} alt={design.title} >
                        <button aria-label={`See the demo of ${design.title}`}>Demo</button>
                    </a>
                    <a href={design.code} alt={design.titles} >
                        <button aria-label={`See the code for ${design.title}`}>Code</button>
                    </a>
                </div>
            </div>
        </SectionStyle>
    )
}

export default ProjejctList
