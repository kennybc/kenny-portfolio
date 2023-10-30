import test from "assets/Picture1.svg";
import Image from "components/Image";
import Page from "components/Page";
import URL from "components/URL";

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
        <div>
          <h3>Philosophy</h3>
          <p>
            Yin and yang originate from the{" "}
            <URL to="https://en.wikipedia.org/wiki/Yin_and_yang" newTab>
              I Ching (Yi Jing)
            </URL>
            , considered to be one of the oldest Chinese texts discovered. Yin
            and yang are the concepts of opposites in harmony and can thus be
            interpreted in an infinite number of ways. Some of the more popular
            translations are from yin/yang to (respectively) feminine/masculine,
            cold/hot, earth/heaven.
          </p>
          <p>
            The translation I've chosen to adapt this site design to is
            earth/heaven; I found earth/heaven to be best aligned to showcase my
            technical and creative skills.
          </p>
          <p>
            As yang relates to the divine and yin the earthly, I decided it
            would be fitting in the context of my projects to relate
            imagination/creativity to yang, and material/logic to yin.
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
              eight trigrams
            </URL>{" "}
            that are associated with the elements: heaven ☰, lake ☱, fire ☲,
            thunder ☳, wind ☴, water ☵, mountain ☶, and earth ☷. Bigrams can
            then be stacked on top of each other for a total of 64 hexagrams,
            each representing a specific divination theory. For the simpler
            purpose of my site, it makes sense to use the trigrams and omit fire
            and water.
          </p>
          <Image
            className="BaguaCycle"
            src={test}
            alt="The Bagua Trigram Cycle"
          />
          <p>
            Considering the structure of a trigram in the typical clockwise
            cycle, you can see that change enters from the bottom. For example,
            as heaven transitions towards earth, the first step is wind. This
            makes it possible to "tiebreak" between numerically equivalent
            trigrams (e.g. mountain ☶ versus thunder ☳) because we can see that,
            following a clockwise rotation, mountain approaches earth while
            thunder approaches heaven, which makes sense elementally as well.
          </p>
          <p>
            <b>Heaven ☰</b>
            <br />A purely imaginative project; a thought experiment.
          </p>
          <p>
            <b>Wind ☴</b>
            <br />A somewhat technical and highly imaginative project with more
            technical potential.
          </p>
          <p>
            <b>Mountain ☶</b>
            <br />A highly technical and somewhat imaginative project with more
            technical potential.
          </p>
          <p>
            <b>Earth ☰</b>
            <br />A purely technical project; no creative direction.
          </p>
          <p>
            <b>Thunder ☳</b>
            <br />A somewhat imaginative and highly technical project with more
            imaginative potential.
          </p>
          <p>
            <b>Lake ☱</b>
            <br />A highly imaginative and somewhat technical project with more
            imaginative potential.
          </p>
        </div>
      }
      yin={
        <div>
          <URL to="/"> Home </URL>
          <h3>Translation</h3>
          <p>
            Beginning with their most basic forms, or <i>monogram</i>, yin is
            expressed as a single broken line "⚋" and yang is expressed as a
            single whole line "⚊".
          </p>
          <p>
            From monograms comes bigrams: greater yin "⚏", greater yang "⚌",
            lesser yin "⚍", and lesser yang "⚎".
          </p>
          <p>
            From bigrams comes the{" "}
            <URL to="https://en.wikipedia.org/wiki/Bagua" newTab>
              eight trigrams
            </URL>{" "}
            that are associated with the elements: heaven "☰", lake "☱", fire
            "☲", thunder "☳", windw "☴", water "☵", mountain "☶", and earth "☷".
            Bigrams can then be stacked on top of each other for a total of 64
            hexagrams, each representing a specific divination theory.
          </p>
          <h3>Translation</h3>
          <p>
            Beginning with their most basic forms, or <i>monogram</i>, yin is
            expressed as a single broken line "⚋" and yang is expressed as a
            single whole line "⚊".
          </p>
          <p>
            From monograms comes bigrams: greater yin "⚏", greater yang "⚌",
            lesser yin "⚍", and lesser yang "⚎".
          </p>
          <p>
            From bigrams comes the{" "}
            <URL to="https://en.wikipedia.org/wiki/Bagua" newTab>
              eight trigrams
            </URL>
            that are associated with the elements: heaven "☰", lake "☱", fire
            "☲", thunder "☳", windw "☴", water "☵", mountain "☶", and earth "☷".
            Bigrams can then be stacked on top of each other for a total of 64
            hexagrams, each representing a specific divination theory.
          </p>
        </div>
      }
    />
  );
}
