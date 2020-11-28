import React, { useState } from 'react'
import styled from 'styled-components';
import designs from "../pages/designList";
import ProjejctList from './ProjejctList';

const ArticleStyle = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 32px;
    row-gap: 40px;
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
