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
        "#react",
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
            and had freedom to experiment and grow. I believe my taste improved
            resultingly.
          </p>
          <Image
            className="MotorDebate"
            src={MotorDebate}
            alt="MotorDebate Landing Jumbotron Design"
            caption="Jumbotron Design"
          />
          <p>
            Also featured a user account system with robust web security
            features; Implemented using OOP concepts in PHP which was a first
            for me (PHP was taught procedurally when I learned it). All in all,
            very educational, especially understanding the structure of a
            full-stack project.
          </p>
          <h3>WriterJS</h3>
          <p>
            A custom WYSIWYG text editor JS library. This was created for
            MotorDebate as part of my highly customized vision; I didn't want to
            settle for the outdated looks of freely available editor libraries,
            so I made my own.
          </p>
          <div id="demo-1">
            <b>DEMO</b>
            <div id="demo-2"></div>
          </div>
          <p>
            As opposed to your standard "text file" structure, WriterJS was
            built with blocks. This allows for easy componentization of the
            text, which is perfect for articles and blog posts.
          </p>
          <h3>NFT Escrow</h3>
          <p>
            I was hired to develop a smart contract that acts as a middleman for
            Ethereum-based (primarily NFT) transactions. Lots of time spent here
            researching the complex and poorly documented smart contract
            standards. Unfortunately, a very large public marketplace site
            released a free version which completely undermined this project,
            which was intended to provide the escrow service for a fee.
          </p>
          <p>
            Although this project was never deployed, it was great practice as I
            was immersed in a new unfamiliar environment and also tasked to
            learn a new language.
          </p>
          <h3>Minecraft</h3>
          <p>
            Some of my greatest logical feats were undertaken while slacking off
            during class. Most notably, in high school, I discovered a way to
            download Minecraft onto the school laptops, which led to a frenzy.
            Unfortunately, we were limited to LAN servers which disallowed
            plugins and modded gameplay.
          </p>
          <p>
            I poured much of my time into creating a skyblock server with only
            command blocks (included in vanilla MC), which essentially required
            very niche manipulation of JSON-adjacent data and some research into
            the scripting language of command blocks.
          </p>
          <iframe
            className="SkyblockYouTube"
            src="https://www.youtube.com/embed/al0PVAkX1x0?si=BDg-0zyb_WwUPH98"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3>KhanAcademy</h3>
          <p>Where it all began...</p>
          <p>
            See some of my first ever programming{" "}
            <URL
              to="https://www.khanacademy.org/profile/BobJoe425/projects"
              newTab
            >
              projects
            </URL>{" "}
            and try not to cringe.
          </p>
        </>
      }
    />
  );
}
