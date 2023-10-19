import bannerBackground from "assets/home/projects/nftescrow.gif";
import tx1 from "assets/nftescrow/tx1.png";
import tx2 from "assets/nftescrow/tx2.png";
import Page from "components/Page";
import ProjectBanner from "components/Project/ProjectBanner";

import "./NFTEscrow.css";

function NFTEscrow() {
  return (
    <Page className="NFTEscrow">
      <ProjectBanner text="NFT ESCROW" background={bannerBackground} />
      <div className="wrapper--about">
        <div className="content">
          <div id="about__overview">
            <span id="overview-1" className="title">
              Project Overview
            </span>
            <span id="overview-2">
              At the time of this project's undertaking, NFTs were extremely new
              and popular. During its youth, there were no widely available
              trading platforms--only marketplaces.
              <br /> <br />
              This service is meant to act as an automated middleman for NFT
              trades and to allow transactions between any ethereum-based
              tokens/currencies.
            </span>
          </div>
          <div id="about__apps">
            <span id="apps-1" className="title">
              Features
            </span>
            <div id="apps-2">
              <div
                className="apps__app"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), #6f1986",
                }}
              >
                Secure Transacting
              </div>
              <div
                className="apps__app"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), #245d8b",
                }}
              >
                Easy/Intuitive Interface
              </div>
              <div
                className="apps__app"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), #9a0026",
                }}
              >
                Cross-Currency Trading
              </div>
              <div
                className="apps__app"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), #138674",
                }}
              >
                One-Click Exchange Process
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-features">
        <div className="content" style={{ background: "white" }}>
          <div id="features__escrow">
            <span id="escrow-1" className="title">
              Escrow
            </span>
            <span id="escrow-2">
              There are a few layers involved in the sale of an NFT that might
              not be apparent.
              <br /> <br />
              Actually transferring ownership of an NFT is not so complicated:
              address A sends a transaction to the token's smart contract
              address (not address B) with instructions to then transfer it to
              address B. This limits transactions to be one-sided.
              <img src={tx1} />
              The NFT Escrow app will allow users more options, such as the
              ability to sell one or more NFT for ether, trade an NFT for
              another NFT, or a combination of NFT/ether. However, the primary
              role this app will play is to act an a neutral third-party holding
              site to eliminate the possibility of scams, and to ensure both
              parties receive what they negotiated for.
              <img src={tx2} />
            </span>
          </div>
          <div id="features__discontinue">
            <span id="discontinue-1" className="title">
              Discontinuation
            </span>
            <span id="discontinue-2">
              Unfortunately, NFT Escrow has been taken offline. The service
              required high fees for the user as ERC-721 contracts are expensive
              to deploy. These fees made it difficult to compete with dominant
              NFT marketplaces, one of which released its own version of an
              escrow service shortly after this project was completed.
              <br /> <br />
              That being said, this project was an extraordinarily educational
              experience, and I consider my time learning and coding very well
              spent.
            </span>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default NFTEscrow;
