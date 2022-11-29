import React from "react";
import styled from "styled-components";
import { RiGithubLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
const Card = ({
  name,
  image,
  description,
  tools,
  externalLink,
  githubLink,
}) => {
  return (
    <CardWrapper>
      <CardImage>
        <img src={image} alt="card" />
      </CardImage>
      <CardText>
        <span className="title-span">Featured Project</span>
        <h3 className="headingText">{name}</h3>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="tools">{tools}</div>
        <div className="icons">
          <a href={externalLink}>
            <FaExternalLinkAlt />
          </a>
          {githubLink === "" ? null : (
            <a href={githubLink}>
              <RiGithubLine />
            </a>
          )}
        </div>
      </CardText>
    </CardWrapper>
  );
};

export { Card };

const CardWrapper = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  position: relative;
  isolation: isolate;
`;
const CardText = styled.div`
  width: 50%;
  height: 100%;
  /* border: 1px solid blue; */
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  align-items: end;
  /* ruby-span. */
  .title-span {
    color: gold;
  }
  .headingText {
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: teal;
    }
  }
  .description {
    width: 100%;
    height: fit-content;
    padding: 0.5em 1em;
    border-radius: 10px;
    text-align: end;
    background-color: rgba(43, 34, 33);
    border: 2px solid #3d373d;
    background-color: rgba(61, 55, 61, 0.9);
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
  }
  .tools {
    color: #fff;
    font-size: 0.9rem;
  }
  .icons {
    display: flex;
    gap: 1rem;
    & > a {
      color: gold;
      font-size: 25px;
      &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
      }
    }
  }
  @media (max-width: 813px) {
    width: 100%;
    align-items: start;
    padding: 1rem 0.5rem;
    background-color: rgba(0, 0, 0, 0.8);
    .description {
      text-align: start;
      background-color: unset;
      box-shadow: unset;
      padding: 0;
      /* color: white; */
      & > p {
        color: white;
        line-height: 1.2;
      }
    }
  }
`;
const CardImage = styled.div`
  width: 60%;
  height: 80%;
  position: absolute;
  left: 0;
  & > img {
    height: 100%;
    width: 100%;
    filter: grayscale(30%);
    transition: all 0.2s ease-in-out;
    &:hover {
      filter: sepia(0);
    }
  }
  @media screen and (max-width: 813px) {
    width: 100%;
    height: 100%;
  }
`;
