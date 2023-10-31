import Page from "components/Page";
import URL from "components/URL";

import { Link } from "react-router-dom";

import "./styles.css";

export default function Home() {
  return (
    <Page
      className="Home"
      title="Kenneth Chen"
      yang={
        <div>
          <p>
            Hello and welcome. I'm Kenneth (Kenny) Chen, a technologist and a
            creative, and this is my portfolio.
          </p>
          <p>
            I'm currently an undergraduate computer science student at
            Northeastern University with a concentration in software. Beyond my
            studies in the logical and concrete, I find passion in the arts: the
            spiritual and imaginative.
          </p>
          <p>
            This website was built as a testament to{" "}
            <URL to="/yin-yang">yin and yang</URL>--balance and
            interconnectedness of opposites--which is a concept I hold close to
            my heart. Much of my thinking, my mannerism, my identity is affected
            by my Chinese-American cultural background; my work is a reflection
            of my person.
          </p>
        </div>
      }
      yin={
        <div className="Home__Links">
          <Link to="/fusion-recipe-generator">Fusion Recipe Generator</Link>
          <Link to="/yin-yang">Yin Yang (kenny.us)</Link>
          <Link to="/archive">Archive</Link>
        </div>
      }
    />
  );
}
