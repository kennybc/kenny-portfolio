import Page from "components/Page";

import { Link } from "react-router-dom";

import "./styles.css";

export default function Home() {
  return (
    <Page
      className="Home"
      title="Home Page Title"
      yang={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          turpis sit amet dui tempor blandit. Curabitur laoreet posuere massa,
          et mollis enim. In sed ullamcorper risus, in dictum turpis. Maecenas
          et congue felis. Morbi in vestibulum tellus. Fusce laoreet, nisi quis
          vulputate sollicitudin, sem ipsum vestibulum justo, vulputate varius
          tortor tortor in justo. Quisque feugiat leo maximus, aliquet quam ac,
          hendrerit leo. Vivamus dignissim vestibulum nunc, vel fermentum nunc
          pretium id. Ut vel dolor eget nunc dignissim tincidunt quis ac nisl.
          Curabitur non volutpat massa, ut ullamcorper justo. Sed vehicula leo
          non lorem pulvinar, ac malesuada metus mattis. Fusce vehicula quis
          ipsum id ullamcorper. Nunc auctor rhoncus purus, eu fermentum purus
          posuere id.
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
