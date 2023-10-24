import Page from "components/Page";

import { Link } from "react-router-dom";

import "./NFTEscrow.css";

function NFTEscrow() {
  return (
    <Page
      className="Home"
      title="Project Page Title"
      yang={
        <p>
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
          posuere id. Nulla vel tortor mattis, dignissim ante id, auctor dolor.
          Cras sed accumsan quam. Proin quis arcu vehicula, pharetra nisl nec,
          ornare orci. Cras suscipit, ex id rhoncus auctor, risus nunc blandit
          ex, sit amet iaculis ligula nibh eu turpis. Suspendisse semper aliquam
          purus at tincidunt. Nulla facilisi. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam id nunc quis elit sagittis
          ultricies. Aliquam arcu magna, egestas eu dui maximus, dapibus
          imperdiet enim. Fusce sit amet arcu sapien. Morbi ut sem bibendum ante
          gravida luctus. Etiam ac mollis eros, vitae pellentesque urna. Vivamus
          ex quam, dictum nec elementum id, blandit auctor augue. Vivamus non
          nibh sit amet ipsum luctus ultricies eget et nisi. Integer lacus
          magna, posuere vitae lacinia vel, gravida in eros. Phasellus ac purus
          eu nibh dictum venenatis at sed leo. Duis ut pharetra odio. Sed ac
          eros eu libero dapibus vulputate. Nulla et efficitur libero, et
          tristique tortor. Aliquam tempor suscipit metus, sit amet dictum
          turpis blandit sed. Praesent mauris ligula, bibendum et massa ac,
          viverra varius tellus. Fusce ut est auctor odio blandit lacinia non
          nec dui. Nullam rutrum nibh nibh, vitae aliquet est ullamcorper sed.
          Donec interdum tempus maximus. Nam volutpat, purus vel dignissim
          vestibulum, erat ligula iaculis risus, sit amet iaculis risus odio vel
          urna. Aliquam libero quam, mollis in egestas ac, ultrices in purus.
          Quisque vel elementum odio. Donec sagittis venenatis sapien vel
          bibendum. Nulla sed lacus id arcu aliquet lacinia. Aenean maximus nibh
          vel libero tincidunt, ut convallis turpis ultricies. Aenean vestibulum
          lacinia volutpat. Aenean dignissim auctor nibh vel tempus. Nunc in
          luctus odio, a sagittis ex. In in lorem felis. Nulla volutpat nulla
          lectus, id ornare orci cursus quis. Fusce at arcu at quam iaculis
          aliquet. Quisque id libero ligula. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Phasellus
          in diam odio. Morbi porttitor, lorem nec euismod egestas, diam nisi
          interdum ex, non feugiat turpis ante vitae tortor. Nullam congue,
          neque nec tempus aliquet, ex libero sagittis ante, sit amet tincidunt
          quam leo non velit. Cras finibus nibh est, id pretium diam ornare
          ultricies. Vivamus posuere, ex a vestibulum hendrerit, nisl odio
          faucibus sapien, id ornare urna turpis a nisi. Fusce pellentesque
          massa vitae orci mattis vulputate. Integer nunc urna, aliquam eu
          iaculis vitae, ultrices et sapien. In hac habitasse platea dictumst.
          Fusce enim libero, commodo ac justo id, pulvinar fringilla ipsum.
          Pellentesque semper est vitae ultricies dapibus. Mauris lacinia dictum
          risus, id vulputate risus ultrices interdum.
        </p>
      }
      yin={
        <div>
          <Link to="/"> Home </Link>
        </div>
      }
    />
  );
}

export default NFTEscrow;
