import React from 'react';
import styled from "styled-components";
import {siteText} from "../../../model/data";
import {flexCenter} from "../../../styles/mixin";

const SiteList = () => {
  return (
    <SiteListGrid>
      {siteText.map((site,key)=>(
        <ListItem className={`s${key+1}`}>
          <ListNum>{key+1}.</ListNum>
          <ListText>
            <div>{site.text[0]}</div>
            <div>{site.text[1]}</div>
            <div>{site.text[2]}</div>
          </ListText>
          <ListTitle>
            {site.title}
          </ListTitle>
          <ListBtn>
            <a href={site.code}>code</a>
            <a href={site.view}>view</a>
          </ListBtn>
          <ListInfo>
            <ListSpan>{site.info[0]}</ListSpan>
            <ListSpan>{site.info[1]}</ListSpan>
            <ListSpan>{site.info[2]}</ListSpan>
          </ListInfo>
        </ListItem>
      ))}
    </SiteListGrid>
  );
};

export default SiteList;

const SiteListGrid = styled.div`
`

const ListItem = styled.article`
  height: 70vh;
  flex-direction: column;
  position: sticky;
  left: 0;
  ${flexCenter}
  &.s1 {
    background-color: var(--subBg100);
    top: 180px;

    @media (max-width: 800px) {
      top: 140px;
    }
  }

  &.s2 {
    background-color: var(--subBg200);
    top: 200px;

    @media (max-width: 800px) {
      top: 160px;
    }
  }

  &.s3 {
    background-color: var(--subBg300);
    top: 220px;

    @media (max-width: 800px) {
      top: 180px;
    }
  }

  &.s4 {
    background-color: var(--subBg400);
    top: 240px;

    @media (max-width: 800px) {
      top: 200px;
    }
  }
`

const ListNum = styled.span`
  font-size: 5vw;
  line-height: 1;
  font-weight: 900;
  font-family: var(--mainNum-font);
  position: absolute;
  left: 1vw;
  top: 1vw;

  @media (max-width: 800px){
    font-size: 80px;
    left: 20px;
    top: 20px;
  }
`

const ListText= styled.div`
  text-align: center;
  margin-bottom: 1rem;

  > div {
    font-size: 3vw;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: underline;
    font-family: var(--mainEng-font);

    @media (max-width: 800px){
      font-size: 26px;
    }
  }
`

const ListTitle = styled.h3`
  font-family: var(--mainKor-font);
  margin-bottom: 1rem;
`

const ListBtn = styled.div`
  a {
    text-decoration: underline;
    text-transform: uppercase;
    color: var(--black200);
    font-size: 1rem;
    transition: all 0.3s;
    margin: 0 2px;

    &:hover {
      color: var(--black);
    }
  }
`

const ListInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 3%;
  width: 98%;
  margin-left: 1%;
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px){
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    padding: 5px 0;
  }
`

const ListSpan = styled.span`
  font-family: var(--mainKor-font);
  font-size: 12px;
  padding: 3px 0;
  text-transform: uppercase;
`