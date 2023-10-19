import motordebate from "assets/home/projects/motordebate.png";
import motordebate2 from "assets/home/projects/motordebate.svg";
import nftescrow from "assets/home/projects/nftescrow.png";
import writerjs from "assets/home/projects/writerjs.png";
import Block from "components/Block";
import Page from "components/Page";
import { ProjectSlide } from "components/Project";

import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <Page className="Home">
      <Block className="greeting Block--Large">
        <div id="greeting__text">
          <span id="greeting-1"> Lorem Ipsum </span>
          <span id="greeting-2">
            <i>&#9670;</i> Lorem ipsum dolor sit amet, consectetur.
          </span>
        </div>
        <div className="greeting__bg"></div>
      </Block>
      <Block className="projects Block--Medium Block--Full">
        <div className="projects__slideshow">
          <div>
            <ProjectSlide title="1" background={motordebate2} />
            <ProjectSlide title="2" background={motordebate2} />
            <ProjectSlide title="3" background={motordebate2} />
            <ProjectSlide title="4" background={motordebate2} />
            <ProjectSlide title="5" background={motordebate2} />
          </div>{" "}
        </div>
      </Block>
      <Block className="about Block--Medium">
        <div id="about__skills">
          <span id="skills-1" className="title">
            Skill Levels
          </span>
          <span id="skills-2">
            <span data-level="proficient">
              <i>&#9670;</i> Java
            </span>
            <span data-level="proficient">
              <i>&#9670;</i> HTML/CSS/JS
            </span>
            <span data-level="proficient">
              <i>&#9670;</i> PHP/SQL
            </span>
            <span data-level="proficient">
              <i>&#9670;</i> Python
            </span>
            <span data-level="intermediate">
              <i>&#9670;</i> C/C++
            </span>
            <span data-level="intermediate">
              <i>&#9670;</i> Node.js
            </span>
            <span data-level="intermediate">
              <i>&#9670;</i> PS/Inkscape
            </span>
            <span data-level="learning">
              <i>&#9670;</i> Solidity
            </span>
          </span>
        </div>
        <div id="about__text">
          <span id="about-1" className="title">
            About Myself
          </span>
          <span id="about-2">
            I'm a 2nd year undergraduate student at Northeastern University
            pursuing a degree in computer science with a concentration in
            software. I've been working with programming languages since 2nd
            grade and have had a passion for programming and mathematical
            concepts ever since. I also enjoy learning about everything
            technology; I've completed several PC builds and have an interest in
            cybersecurity and AI.
            <br /> <br />I have also dabbled in the arts--including but not
            limited to graphic design, studio arts, clarinet/saxophone/piano,
            origami. In my free time, I enjoy weight lifting, cooking,
            volleyball, reading/drawing, and (recently) running.
          </span>
        </div>
      </Block>
      <div className="wrapper--projects">
        <div className="content">
          <span id="projects-1" className="title">
            Notable Projects
          </span>
          <div id="projects-2">
            <div className="project" id="motordebate" tabIndex="0">
              <img src={motordebate} />
              <span className="project__title"> MotorDebate </span>
              <div className="project__about">
                <div>
                  <span>
                    <i>&#9670;</i> PHP-based blog built entirely from scratch.
                  </span>
                  <div
                    className="button--light project__button"
                    id="href--motordebate"
                  >
                    <Link to="motordebate">View Project</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project" id="writerjs" tabIndex="0">
              <img src={writerjs} />
              <span className="project__title"> Writer JS </span>
              <div className="project__about">
                <div>
                  <span>
                    <i>&#9670;</i> Dependency-free, block-based, WYSIWYG
                    JavaScript editor.
                  </span>
                  <div
                    className="button--light project__button"
                    id="href--writerjs"
                  >
                    <Link to="writerjs">View Project</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project" id="nftescrow" tabIndex="0">
              <img src={nftescrow} />
              <span className="project__title"> NFT Escrow </span>
              <div className="project__about">
                <div>
                  <span>
                    <i>&#9670;</i> An escrow service for NFT exchanges.
                  </span>
                  <div
                    className="button--light project__button"
                    id="href--nftescrow"
                  >
                    <Link to="nftescrow">View Project</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
