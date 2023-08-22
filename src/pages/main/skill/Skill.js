import React from 'react';
import styled from "styled-components";
import SkillDesc from "./SkillDesc";

const Skill = () => {
  return (
    <SkillSection>
      <SkillInner>
        <SkillTitle>
          Challenge
          <EM>나의 도전</EM>
        </SkillTitle>
        <SkillDesc />
      </SkillInner>
    </SkillSection>
  );
};

export default Skill;

const SkillSection = styled.section`
`
const SkillInner = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px){
    flex-direction: column;
  }
`
const SkillTitle = styled.div`
  position: sticky;
  top: 70px;
  left: 0;
  width: 48%;
  height: 5vw;
  font-size: 4vw;
  font-weight: 900;
  line-height: 1.6;
  font-family: var(--mainKor-font);
  text-transform: uppercase;
  color: var(--black100);
  border-bottom: 0.4vw solid var(--black100);

  @media (max-width: 800px){
    width: 100%;
    margin-bottom: 10vw;
    font-size: 30px;
    height: auto;
    top: 68px;
    background-color: var(--mainBg-color);
  }
`

const EM = styled.em`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2;
`

