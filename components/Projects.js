import React, { useState } from 'react'
import styled from 'styled-components';
import designs from "../pages/designList";
import ProjejctList from './ProjejctList';

const ArticleStyle = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow-x: scroll;
    margin-right: -2rem;
    padding-top: 20px;
`;

function Projects() {
    const [Alldesigns, setAllDesigns] = useState(designs)
    return (
        <ArticleStyle>
            {Alldesigns.map(design => (<ProjejctList key={design.id} design={design} />))}
        </ArticleStyle>
    )
}

export default Projects
