import MotorDebate from "assets/motordebate/tile-2b.png";
import Image from "components/Image";
import Page from "components/Page";
import URL from "components/URL";

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
          <h3 style={{ paddingTop: 0 }}>Timeline</h3>
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
            That account was eventually closed 🙃 when I attempted link my own
            bank account. In the time I was active, I had completed a number of
            projects: anything from small niche-use scripts to a landing page
            for an investment banking firm.
          </p>
          <p>
            Ironically, once old enough to "legally" use freelancer, I had
            become disinterested in that form of short-term fulfillment. My
            projects began to lean towards personal hobbies and interests.
          </p>
          <p>
            I've condensed this period of my life into a brief recap that
            highlights some notable past works and may offer some insight into
            my personality (in no particular order).
          </p>
          <h3>Growth</h3>
          <p>
            Something I used to pride myself on was how personalized all of my
            work was: not that it was evident of my personality, but that
            everything was handmade and custom. While this did help me develop a
            strong sense of basics, it would eventually hold me back. Namely, I
            viewed using libraries to automate/simplify tasks as "cheating."
          </p>
          <p>
            I've only recently overcome this mindset, and have noticed much more
            mental capacity for creative thinking, undoubtedly recovered from
            slaving over menial tasks.
          </p>
          <p>
            Coming out of this phase with solid fundamentals has allowed me to
            pursue more intricate and creative ideas without getting as bogged
            down by implementational setbacks.
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
            features. All implemented using OOP concepts in PHP which was a
            first for me (PHP was taught procedurally when I learned it). All in
            all, very educational, especially understanding the structure of a
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
