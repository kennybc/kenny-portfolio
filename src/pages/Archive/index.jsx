import KhanAcademy from "src/assets/khan-academy.png";
import MotorDebate from "src/assets/motordebate/tile-2b.png";
import Image from "src/components/Image";
import Page from "src/components/Page";
import URL from "src/components/URL";

import { useEffect } from "react";

import "./styles.css";

export default function Archive() {
  useEffect(() => {
    const writer2 = new Writer("demo-2", { imageQuality: 0.6 });
    writer2.init();
  });
  return (
    <Page
      className="Archive"
      title="Archive"
      tags={[
        "#project",
        <span>
          #mountain <b>☶</b>
        </span>,
        "#archived",
      ]}
      yang={
        <>
          <h3 style={{ paddingTop: 0 }}>Background</h3>
          <p>
            I started programming in 2nd grade: learning{" "}
            <URL
              to="https://www.khanacademy.org/computing/computer-programming/pjs-documentation"
              newTab
            >
              JS + ProcessingJS
            </URL>{" "}
            on KhanAcademy. I started a freelance career at age 13; I had my
            parents create a freelancer.com account so I could receive my first
            payout.
          </p>
          <p>
            It's through these past projects that I've learned how to program on
            my own. I've cherrypicked some of my favorites (in no particular
            order) that I find notable or fun/interesting.
          </p>
        </>
      }
      yin={
        <>
          <URL to="/"> Home </URL>
          <h3 style={{ paddingTop: "0" }}>MotorDebate</h3>
          <p>
            A blog created from scratch with a PHP backend. This was one of my
            first projects where I felt fully in control of the design decisions
            and had freedom to experiment and grow. Deepened my interest in the
            arts.
          </p>
          <Image
            className="MotorDebate"
            src={MotorDebate}
            alt="MotorDebate Landing Jumbotron Design"
            caption="Jumbotron Design"
          />
          <p>
            Featured a user account system with robust web security features. A
            very educational project for understanding the structure of a
            full-stack project and designing with OOP principles.
          </p>
          <h3>WriterJS</h3>
          <p>
            A custom WYSIWYG text editor JS library created for MotorDebate as
            part of my highly customized vision.
          </p>
          <div id="demo-1">
            <b>demo</b>
            <div id="demo-2"></div>
          </div>
          <p>
            Built for block-based editing which allows for easy componentization
            of the text: perfect for articles and blog posts.
          </p>
          <h3>Minecraft</h3>
          <p>
            In high school, I discovered a way to download Minecraft Education
            onto the school laptops. This mode didn't allow plugins or modded
            gameplay.
          </p>
          <p>
            I created a popular school-wide skyblock server with only command
            blocks (included in vanilla MC) through very niche manipulation of
            JSON-adjacent data and some research into the command block
            scripting language.
          </p>
          <iframe
            className="SkyblockYouTube"
            src="https://www.youtube.com/embed/al0PVAkX1x0?si=BDg-0zyb_WwUPH98"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3>NFT Escrow</h3>
          <p>
            A smart contract that acts as a middleman for Ethereum-based
            (primarily NFT) transactions. Lots of time spent here researching
            the complex and poorly documented smart contract standards.
          </p>
          <p>
            Great practice as I was immersed in a new unfamiliar environment and
            had to do a lot of self-teaching and research.
          </p>
          <h3>KhanAcademy</h3>
          <Image
            className="KhanAcademy"
            src={KhanAcademy}
            alt="KhanAcademy Project Grid List"
            caption="My First Projects"
          />
          <p>
            A full list of my first ever programming projects can be found{" "}
            <URL
              to="https://www.khanacademy.org/profile/BobJoe425/projects"
              newTab
            >
              here
            </URL>
            ...
          </p>
        </>
      }
    />
  );
}
