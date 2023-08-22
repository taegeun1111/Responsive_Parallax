import React from 'react';
import styled from "styled-components";
import {skillText} from "../../../model/data";

const SkillDesc = () => {
  return (
    <SkillDescGrid>
      {skillText.map((skill,key)=>(
        <div key={key}>
          <Span>{key+1}</Span>
          <H3>{skill.title}</H3>
          <P>{skill.desc}</P>
        </div>
      ))}
    </SkillDescGrid>
  );
};

export default SkillDesc;

const SkillDescGrid = styled.div`
  width: 50%;

  @media (max-width: 800px){
    width: 100%;
  }
`

const Span = styled.span`
  font-size: 5vw;
  font-weight: 900;
  line-height: 1.3;
  font-family: var(--mainNum-font);

  @media (max-width: 800px){
    font-size: 20vw;
  }
`

const H3 = styled.h3`
  font-size: 1.5rem;
  text-decoration: underline;
  text-underline-position: under;
  margin-bottom: 1vw;
`

const P = styled.p`
  margin-bottom: 30vh;
  font-size: 1.1rem;
`