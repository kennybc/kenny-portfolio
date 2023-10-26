import Page from "components/Page";

import { Link } from "react-router-dom";

import "./styles.css";

export default function Home() {
  return (
    <Page
      className="Home"
      title="KENNETH CHEN"
      yang={
        <div>
          <p>
            Hello and welcome. I'm Kenneth (Kenny) Chen, a creative and a
            technologist, and this is my portfolio.
          </p>
          <p>
            I'm currently an undergraduate computer science student at
            Northeastern University with a concentration in software. Beyond my
            studies in the logical and concrete, I find passion in the arts: the
            spiritual and imaginative.
          </p>
          <p>
            This website was built as a testament to yin and yang, which (in
            simple terms) describes opposites in a state of balance and harmony.
            This is a concept I've consciously and subconsciously explored and
            applied throughout my life.
          </p>
          <p>
            Being American-born of Chinese ethnicity, I find myself perpetually
            seeking to better align with Chinese culture. The culture feels
            incredibly nostalgic, and yet there is this distant but unshakable
            feeling of alienation from mainland culture. I share this identity
            struggle with many; it's difficult to be born halfway between two
            cultures, not entirely one or the other. The best I can do is
            embrace and celebrate the diversity of my unique heritage.
          </p>
          <p>
            Much of my thinking and thus my work is affected by my cultural
            identity, which I hope you find interesting.
          </p>
        </div>
      }
      yin={
        <div>
          <Link to="/nftescrow"> NFT Escrow </Link>
          <Link to="/motordebate"> MotorDebate </Link>
        </div>
      }
    />
  );
}
