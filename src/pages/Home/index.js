import Page from "components/Page";
import URL from "components/URL";

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
          <URL to="/nftescrow"> NFT Escrow </URL>
          <URL to="/motordebate"> MotorDebate </URL>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            dictum libero a felis faucibus, non condimentum tellus fringilla.
            Etiam vestibulum ut massa ac mattis. Etiam pretium, leo id auctor
            venenatis, ligula nibh porttitor lacus, sit amet viverra neque dui
            in neque. Morbi quis metus vitae est interdum iaculis. Integer ut
            posuere erat, in dapibus dolor. Vivamus in tellus id ligula dictum
            commodo sed in nulla. Morbi fringilla sagittis dapibus. Nulla ac
            massa eget turpis semper pharetra ut id neque. Ut facilisis
            dignissim velit. Nullam at ligula sapien. Nullam accumsan, libero
            vel mattis semper, dui erat pulvinar ante, aliquam gravida tellus
            nunc ac arcu. Curabitur finibus pretium ultrices. Suspendisse
            vestibulum, neque efficitur consectetur fermentum, risus felis
            sagittis lectus, sed volutpat lectus ante et orci. Praesent et lorem
            non tortor tincidunt blandit ac in turpis. Aenean leo nisl,
            fermentum blandit volutpat vel, porttitor non justo. Proin eros
            lacus, venenatis eget turpis sed, hendrerit efficitur lacus. Duis
            vulputate egestas erat a dictum. Nam gravida nec lectus non viverra.
            In id facilisis enim, et lacinia purus. Curabitur in imperdiet arcu.
            Etiam et accumsan nunc, non porttitor risus. Donec pellentesque,
            diam sit amet tincidunt varius, leo ligula sodales ipsum, quis
            laoreet libero urna vel lectus. Etiam cursus quam ut fringilla
            vestibulum. Pellentesque elit enim, vestibulum vitae tristique vel,
            euismod vitae eros. Donec facilisis massa eu arcu aliquam rutrum id
            lobortis quam. Cras eget rhoncus tellus, eget vestibulum lacus.
            Aenean pellentesque, ligula imperdiet bibendum varius, nisi nisl
            ultrices purus, vitae pellentesque sapien dolor quis nunc. Nunc
            ultricies sapien sit amet lorem interdum, nec commodo ipsum pretium.
            Phasellus quis vulputate erat. Proin a urna consectetur, sodales
            turpis rhoncus, euismod nisi. Etiam quis est tellus. Nullam aliquet
            ex tortor, in egestas risus consectetur vitae. Phasellus lorem urna,
            bibendum a justo a, posuere fringilla nisl. Maecenas at varius erat.
            Donec a enim ex. Maecenas sed convallis tortor. Ut viverra, augue ut
            ultrices molestie, quam tellus tristique sem, nec efficitur quam
            neque quis odio. Aenean non consequat ex, non aliquam magna. Nullam
            tempus, elit sed rutrum interdum, lectus enim posuere sapien, congue
            rutrum tellus arcu at augue. Nulla in augue eget ex venenatis
            viverra et nec orci. Ut scelerisque et eros et tincidunt. Duis ac
            suscipit metus. Vestibulum dictum varius mauris, eget dictum nisi
            convallis a. Proin porta purus justo. Etiam dictum fringilla tortor
            sagittis placerat. Quisque velit ligula, pellentesque ut molestie
            rhoncus, vulputate eget lorem. Nam porta mi a elementum auctor. Nunc
            interdum nec quam vel sodales. Mauris a euismod orci. Ut rutrum
            tempus sagittis. Etiam et eros ut nunc ullamcorper bibendum id at
            diam. Nam scelerisque blandit augue nec congue. Etiam sollicitudin
            orci eu tortor sollicitudin gravida. Integer suscipit condimentum
            nunc, non mollis nibh. Mauris auctor sem enim, ac pretium turpis
            rhoncus in. Nam luctus suscipit sapien nec eleifend. Ut non ante
            velit. Vestibulum eu quam nec lacus lacinia facilisis. Donec blandit
            semper ante tincidunt gravida. Sed vehicula aliquet congue. Donec
            imperdiet diam nisl, vel blandit justo egestas ac. Aenean id
            tincidunt libero. Praesent venenatis mattis maximus. Vivamus egestas
            orci sed nunc congue, et convallis lorem semper. Nunc rhoncus
            hendrerit justo, et tincidunt nunc hendrerit quis. Integer posuere
            eu sem eu ultrices. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      }
    />
  );
}
