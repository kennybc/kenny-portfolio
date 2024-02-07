import Page from "src/components/Page";
import URL from "src/components/URL";

import { Link } from "react-router-dom";

import "./styles.css";

export default function Home() {
  return (
    <Page
      className="Home"
      title="Kenneth Chen"
      yang={
        <>
          <p>
            Hello! I'm Kenneth (Kenny) Chen, a technologist and a creative, and
            this is my portfolio.
          </p>
          <p>
            I'm currently an undergraduate computer science student at
            Northeastern University with a concentration in software. I also
            have passion for the arts in complement.
          </p>
          <p>
            Much of my thinking, my mannerism, my identity is affected by my
            Chinese-American cultural background; thus, my portfolio is built as
            a testament to <URL to="/yin-yang">yin and yang</URL>--balance and
            interconnectedness of opposites--which is a concept I hold close to
            my heart.
          </p>
        </>
      }
      yin={
        <div className="Home__Links">
          <Link to="/reddit-nuker">Reddit Nuker</Link>
          <Link to="/ing2vec">Ingredient Embeddings (ing2vec)</Link>
          <Link to="/yin-yang">Yin Yang (kenny.us)</Link>
          <Link to="/archive">Archive</Link>
        </div>
      }
    />
  );
}
