import BaguaCycle from "src/assets/YinYang/bagua.svg";
import DullAngle from "src/assets/YinYang/dull.svg";
import SharpAngle from "src/assets/YinYang/sharp.svg";
import ShellSlant from "src/assets/YinYang/shell-slant.png";
import Image from "src/components/Image";
import Page from "src/components/Page";
import URL from "src/components/URL";

import "./styles.css";

export default function YinYang() {
  return (
    <Page
      className="YinYang"
      title="Yin Yang"
      tags={[
        "#project",
        <span>
          #lake <b>☱</b>
        </span>,
        "#react",
      ]}
      yang={
        <>
          <h3 style={{ paddingTop: 0 }}>Philosophy</h3>
          <p>
            Yin and yang originate from the{" "}
            <URL to="https://en.wikipedia.org/wiki/I_Ching" newTab>
              I Ching (Yi Jing)
            </URL>
            , which is considered to be one of the oldest Chinese texts
            discovered. Yin and yang are the concepts of opposites in harmony
            and can thus be interpreted in a number of ways. Some of the more
            popular translations are from yin/yang to (respectively)
            feminine/masculine, cold/hot, earth/heaven.
          </p>
          <p>
            The translation I've chosen to adapt this site design to is
            earth/heaven; I found earth/heaven to be best aligned to showcase my
            technical and creative skills.
          </p>
          <p>
            As yin relates to the earthly yang the divine, I decided it would be
            fitting in the context of my projects to relate technique/material
            to yin and imagination/philosophy to yang.
          </p>
          <h3>Translation</h3>
          <p>
            Beginning with their most basic forms, or <i>monogram</i>, yin is
            expressed as a single broken line ⚋ and yang is expressed as a
            single whole line ⚊.
          </p>
          <p>
            One level more complex than monograms is bigrams: greater yin ⚏,
            greater yang ⚌, lesser yin ⚍, and lesser yang ⚎.
          </p>
          <p>
            After bigrams comes the{" "}
            <URL to="https://en.wikipedia.org/wiki/Bagua" newTab>
              8 trigrams
            </URL>{" "}
            that are associated with the elements: heaven ☰, lake ☱, fire ☲,
            thunder ☳, wind ☴, water ☵, mountain ☶, and earth ☷. Trigrams can
            then be stacked on top of each other for a total of{" "}
            <URL to="https://en.wikipedia.org/wiki/Hexagram_(I_Ching)" newTab>
              64 hexagrams
            </URL>
            , each representing a specific divination theory.
          </p>
          <p>
            For my portfolio, I've chosen to use trigrams but omit fire and
            water; I find the 6 trigrams are simple enough to convey my thoughts
            clearly yet complex enough to provide sufficient detail.
          </p>
          <Image
            className="BaguaCycle"
            src={BaguaCycle}
            alt="The Bagua Trigram Cycle"
          />
          <p>
            Considering the structure of a trigram in the typical clockwise
            cycle, you can see that change enters from the bottom. For example,
            as heaven transitions towards earth, the first step is wind. This
            makes it possible to "tiebreak" between numerically equivalent
            trigrams (e.g. mountain ☶ versus thunder ☳) because we can see that,
            following a clockwise rotation, mountain approaches earth while
            thunder approaches heaven, which makes also makes sense elementally.
          </p>
          <div className="TrigramCaptions">
            <p>
              <b>Heaven ☰</b>A purely imaginative project; a thought experiment.
            </p>
            <p>
              <b>Wind ☴</b>A somewhat technical and highly imaginative project
              with more technical potential.
            </p>
            <p>
              <b>Mountain ☶</b>A highly technical and somewhat imaginative
              project with more technical potential.
            </p>
            <p>
              <b>Earth ☰</b>A purely technical project: virtually no creative
              direction.
            </p>
            <p>
              <b>Thunder ☳</b>A somewhat imaginative and highly technical
              project with more imaginative potential.
            </p>
            <p>
              <b>Lake ☱</b>A highly imaginative and somewhat technical project
              with more imaginative potential.
            </p>
          </div>
          <h3>Further Reading</h3>
          <p>
            This has been a highly simplified explanation of the concepts behind
            my design choices; I've stripped the philosophy down to its
            fundamentals in order to most clearly communicate my thought
            process. Yin and yang are truly very complex concepts with limitless
            translations and applications.
          </p>
          <p>
            I would strongly encourage anyone interested in divination,
            philosophy, or history to dig into the lore of the hexagrams. The I
            Ching is a great place to start and contains scripture integral to
            Chinese culture.
          </p>
        </>
      }
      yin={
        <>
          <h3 style={{ paddingTop: "0" }}>Stack</h3>
          <p>
            This project--kenny.us--was created with React and Vite for
            efficient rendering and a smoother user experience. It was
            originally written with Create React App and later migrated to Vite
            for better to-date support and faster bundling.
          </p>
          <p>
            Other tools used include Framer's motion library for page
            transitions, Prettier for formatting during development, and Git for
            version control.
          </p>
          <p></p>
          <h3>Layout</h3>
          <p>
            Traditionally, the{" "}
            <URL to="https://en.wikipedia.org/wiki/Taijitu" newTab>
              Tai Ji Tu
            </URL>{" "}
            is depicted as "bottom heavy," meaning if the symbol is rotated as
            such: ☯ with yang at the bottom, then it is yang dominated.
          </p>
          <p>
            This proved to be impractical in a web rendering as it would create
            sharp angles which occupied space where text could go, as well as a
            generally worse flow of content. Instead, the render is "left heavy"
            in landscape mode.
          </p>
          <p>
            I have elected to disable these interpretations of yin and yang when
            viewing in portrait mode (e.g. on a mobile device) to best preserve
            readability, so I highly recommend viewing this page on a landscape
            oriented display.
          </p>
          <Image
            className="SharpAngle"
            src={SharpAngle}
            alt="Layout with Sharp Accurate Angles"
            caption="Bottom Heavy, Accurate Angle"
          />
          <Image
            className="DullAngle"
            src={DullAngle}
            alt="Layout with Dull Inaccurate Angles"
            caption="Left Heavy, Dulled Angle"
          />
          <p>
            The angle of the split was also dulled drastically for better text
            layout. Originally, to represent a trigram, the heavy half was
            divided into equal thirds to represent the three stages of
            transition.
          </p>
          <Image
            className="ShellSlant"
            src={ShellSlant}
            alt="Loading Progress Bar in Shell"
            caption="Shell Progress Bar"
          />
          <p>
            The dulled angle of the split was also modeled after the progress
            bar commonly seen in the shell when working on projects that involve
            some consuming tasks.
          </p>
          <h3>Typography</h3>
          <p>
            The "yin" sections use the font "Sometype Mono" and the "yang"
            sections use the font "Lora". Both are sourced from{" "}
            <URL to="https://fonts.google.com/" newTab>
              Google Fonts
            </URL>
            .
          </p>
          <p>
            These were consciously chosen with the divination concepts of yin
            and yang in mind: a bold and authoritative type for the heavenly
            yang, and a colder mechanical type for the earthly yin.
          </p>
        </>
      }
    />
  );
}
