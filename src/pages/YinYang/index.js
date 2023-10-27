import Page from "components/Page";
import URL from "components/URL";

import "./styles.css";

export default function YinYang() {
  return (
    <Page
      className="YinYang"
      title="Yin Yang"
      subtitle="Philosophy, Translation"
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
            would be fitting to relate imagination/creativity to yang, and its
            material logical form to yin.
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
        </div>
      }
    />
  );
}
