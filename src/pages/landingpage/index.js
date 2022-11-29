import React from "react";
import styled from "styled-components";
import { dp, mb, me, mob } from "../../assets";
import { Button, Card } from "../../components";
const LandingPage = () => {
  const data = [
    {
      name: "DefiPronto",
      image: dp,
      description:
        "DefiPronto is a decentralized incubation and launchpad for Cardano. DefiPronto helps accelerate awesome high quality projects built on the Cardano blockchain.",
      tools: "styled Reactjs Redux Nami",
      externalLink: "https://www.defipronto.com/",
      githubLink: "",
    },
    {
      name: "Mobius",
      image: mob,
      description:
        "Mobius is a education platform for kids between the ages of 5-10 years. Mobius allows kids to sign up with parental guidance, learn, and play interactive games.",
      tools: "styled Reactjs Redux Nami axios agile Methodology",
      externalLink: "https://mobiusorg.vercel.app/",
      githubLink: "https://github.com/Mobius-Org",
    },
    {
      name: "Review Rabbit",
      image: mb,
      description:
        "Review Rabbit is a product feedback application that allows users to share feedback and or opinion about how they feel about a particular product they've used.",
      tools: "styled Reactjs Redux  axios agile Methodology",
      externalLink: "https://reviewrabbit.vercel.app/",
      githubLink: "https://github.com/mad-max-fury/feedbackApp",
    },
  ];
  return (
    <Container>
      <Hero>
        <h1>Hola! I'm Promise 👋</h1>
        <p>
          I craft high-performing, beautiful websites that are
          conversion-focused, <br /> brand-accurate, and user-friendly.
        </p>
        <a
          href="https://drive.google.com/file/d/1BxqApgUiTZdZH6rEzyaMEVPeE1Glvyad/view?usp=drivesdk"
          target={"_blank"}
        >
          <Button
            text={"Download Resume"}
            bgColor="#2FABB2"
            filled={true}
            noIcon
          />
        </a>
      </Hero>
      <AboutMeWrap id="about">
        <Heading>
          {" "}
          <span>01.</span>
          <h2>About Me</h2>
          <span className="line"></span>
        </Heading>

        <AboutMe>
          <div>
            <p>
              Hello again! My name is Promise Boniface. As a frontend
              developer, I help businesses realize their full potentials by
              aligning their vision and mission with their online platform,
              helping them build their brands and giving them a stage where they
              can broadcast their message with clarity.
            </p>
            <br />

            <p>
              I've had the privilege of completing an internship at Innovation Growth
              Hub, where I successfully collaborated and built awesome digital
              products.
            </p>
            <br />
            <p>
              I've been privileged to build many other amazing websites. My
              focus these days is building accessible, inclusive products and
              digital experiences.
            </p>
          </div>
          <div>
            <div className="imageOverlay"></div>
            <img src={me} />
            <div></div>
          </div>
        </AboutMe>
      </AboutMeWrap>
      <ProjectsWrap id="projects">
        <Heading>
          {" "}
          <span>02.</span>
          <h2>Selected Projects</h2>
          <span className="line"></span>
        </Heading>
        <Projects>
          {data.map(
            ({ name, image, description, tools, externalLink, githubLink }) => {
              return (
                <Card
                  name={name}
                  image={image}
                  description={description}
                  tools={tools}
                  externalLink={externalLink}
                  githubLink={githubLink}
                />
              );
            }
          )}
        </Projects>
      </ProjectsWrap>

      <Attention>
        <h1>Attention!</h1>
        <p>
          This website is new and currently under active development. Please
          report any issues to{" "}
          <a href="mailto:bonifacepromzy7@gmail.com">
            bonifacepromzy7@gmail.com
          </a>
          . mucha gracias 😘
        </p>
      </Attention>
    </Container>
  );
};

export { LandingPage };
//
const Container = styled.main`
  max-width: 950px;
  margin: 0 auto;
  width: 100%;
`;
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-top: 4rem;
  height: 60vh;
  text-align: center;
  gap: 1.5rem;
  h1 {
    font-size: clamp(1rem, 2vw + 1rem, 2.5rem);
  }
  p {
    font-size: clamp(1rem, 1vw, 1.5rem);
    text-align: start;
    width: 80%;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    p {
      width: 90%;
    }
  }
`;
const AboutMeWrap = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const Heading = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  & > span {
    font-size: clamp(1rem, 2vw + 1rem, 2rem);
    color: gold;
  }
  & > h2 {
    font-size: clamp(1rem, 2vw + 1rem, 2rem);
  }
  & > span.line {
    width: 50%;
    height: 1px;
    background-color: gold;
    margin: 0 0.5rem;
    @media screen and (max-width: 768px) {
      width: 30%;
    }
  }
`;
const AboutMe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  & > div {
    &:first-child {
      width: 60%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    &:last-child {
      width: 30%;
      height: 18rem;
      position: relative;
      isolation: isolate;
      border-radius: 5px;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
        z-index: 2;
        position: absolute;
        filter: grayscale(100%);
        transition: filter 0.5s ease-in-out;
        &:hover {
          filter: grayscale(0%);
          & + div {
            top: 10px;
            left: 10px;
          }
        }
      }
      & > div {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100%;
        height: 100%;
        border: 2px solid gold;
        z-index: -1;
        transition: all 0.5s ease-in-out;
      }

      @media screen and (max-width: 768px) {
        width: 80%;
        margin: 2rem auto;
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ProjectsWrap = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div {
    &:nth-child(even) {
      & > div {
        &:first-child {
          right: 0;
          left: unset;
          @media (max-width: 813px) {
            left: 0;
            right: unset;
          }
        }
        &:last-child {
          /* border: 1px solid gold; */
          right: unset;
          left: 0;
          align-items: start;
          .description {
            text-align: start;
          }
          @media (max-width: 813px) {
            left: unset;
            right: 0;
          }
        }
      }
    }
  }
`;
const Attention = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 10rem;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid #3d373d;
  background-color: rgba(61, 55, 61, 0.3);
  & > h1 {
    font-size: 25px;
  }
  & > P {
    color: #fff;
    a {
      color: #2fabb2;
      text-decoration: none;
    }
  }
`;
