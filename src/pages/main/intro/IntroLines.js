import React from 'react';
import styled from "styled-components";

const IntroLines = () => {
  return (
    <IntroLineGrid>
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </IntroLineGrid>
  );
};

export default IntroLines;

const IntroLineGrid = styled.div`
  width: 100%;
`

const Line = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--black);
  margin-bottom: 0.5vw;

  &:nth-child(1){
    height: 1px;
  }
  &:nth-child(2){
    height: 2px;
  }
  &:nth-child(3){
    height: 5px;
  }
  &:nth-child(4){
    height: 9px;
  }
  &:nth-child(5){
    height: 13px;
  }
  &:nth-child(6){
    height: 17px;
  }
  &:nth-child(7){
    height: 25px;
  }
`