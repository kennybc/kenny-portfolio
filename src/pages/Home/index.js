import Page from "components/Page";

import { Link } from "react-router-dom";

import "./styles.css";

export default function Home() {
  return (
    <Page className="Home">
      <Link to="/nftescrow"> Link </Link>
    </Page>
  );
}
