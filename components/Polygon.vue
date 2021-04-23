<template>
  <Container id="PolygonPage">
    <section class="content-section">
      <div class="logo">
        <img src="~/assets/polygonWithName.svg" alt="polygon logo" />
      </div>
      <br />
      <div class="contents">
        <div class="dataSection">
          <p>
            HackOn Foundation is excited to announce Polygon (previously MATIC)
            as our <span style="color: #f1c232">Bronze Sponsor</span>!
          </p>
          <br />
          <p>
            The Polygon team will provide a prize of 5000 INR for hackers
            building innovative solutions on Polygon.
          </p>
        </div>
        <div class="dataSection">
          <h3>Important Links</h3>
          <ul>
            <li>
              Getting started with Matic
              <a
                rel="noopener noreferrer"
                href="https://docs.matic.network/docs/develop/getting-started"
                target="_blank"
                >Getting Started</a
              >
            </li>
            <li>
              Matic Blockchain Explorer
              <a
                rel="noopener noreferrer"
                href="https://explorer-mainnet.maticvigil.com/"
                target="_blank"
                >Explorer Mainnet</a
              >
            </li>
            <li>
              Matic Testnet Faucet
              <a
                rel="noopener noreferrer"
                href="https://faucet.matic.network/"
                target="_blank"
                >Matic Testnet</a
              >
            </li>
          </ul>
          <br />
          <p>
            Polygon has a dedicated Discord channel for direct communication
            with developers during hackathons. If you have any doubts regarding
            any of the above information, please join our Discord channel to get
            your queries answered: Discord Link
            <a
              href="https://discord.gg/qGwh4Pek8N"
              rel="noopener noreferrer"
              target="_blank"
              >here</a
            >
            <br />
          </p>
        </div>
        <div class="dataSection">
          <h3>Polygon Bounty Track Details</h3>
          <p>
            Polygon team has ideated some impressive bounty tracks to inspire
            the HackOn 2.0 hackers to build innovative solutions on Polygon.
          </p>
          <br />
          <ol>
            <li>
              <h4>Decentralized Prediction Markets</h4>
              <p>
                Aim of the Project: To build a decentralized information markets
                platform, where you can bet on highly-debated topics like
                political elections, the results of reality shows, results of
                ESports tournaments, and earn for being right. Example:
                <a
                  rel="noopener noreferrer"
                  href="http://polymarket.com/"
                  target="_blank"
                  >Polymarket.com</a
                >
              </p>
            </li>
            <br />
            <li>
              <h4>Gaming/NFT</h4>
              <p>
                Aim of the Project: To build a game/NFT based project that
                utilizes Matic’s speed for a seamless gameplay experience.
              </p>
            </li>
            <br />
            <li>
              <h4>DeFi</h4>
              <p>
                Let your imagination run wild while building a Defi DApp that
                takes advantage of Matic Network’s speed and Scalability.
                <br />Some ideas:
              </p>
              <br />
              <ul>
                <li>Aave fork on Matic</li>
                <li>Balancer fork on Matic</li>
                <li>Prediction Market for Equities</li>
                <li>Lossless Arbitrage</li>
                <li>Personal Tokens</li>
                <li>Staker Games</li>
              </ul>
            </li>
            <br />
            <li>
              <h4>Open Track</h4>
              <p>
                Aim of the project: Use your imagination and feel free to build
                any DApp that excites you! The sky’s the limit.
              </p>
            </li>
          </ol>
        </div>
        <div class="dataSection">
          <h3>Post-Hackathon Opportunities</h3>
          <p>
            We expect awesome projects with long-term potential to be built on
            Polygon at HackOn Hackathon. Top Teams building on Polygon will be
            eligible for Incubation and Marketing Support from Polygon.
          </p>
        </div>
        <div class="dataSection">
          <h3>Judging Criteria</h3>
          <ol>
            <li>
              The importance of Polygon’s infrastructure in the
              application/originality of the idea.
            </li>
            <li>User experience: intuitive, easy to use and interact with.</li>
            <li>
              Technical complexity: going above and beyond the specification.
              Code quality, bug-free, documentation quality.
            </li>
            <li>Polish: how refined the project is.</li>
          </ol>
          <br />
          <p>
            Note: The quality of the application determines the bounty payout
            amount for each winning submission.
          </p>
        </div>
        <div class="dataSection">
          <h3>Let’s #BUIDL!</h3>
          <p>
            Now you have the background knowledge of building on Polygon and
            information regarding the bounties on offer; it’s over to you! Let
            your ingenuity, creativity, and development talent guide you to
            build an awesome hack to further the decentralized movement.
          </p>
          <br />
          <p>
            Polygon remains dedicated as ever to accelerating the decentralized
            revolution. We are therefore excited to see what amazing hackers
            from all over the world will create by building on Polygon, and to
            see how the world will benefit from the new ideas born at HackOn
            2.0!
          </p>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  .logo {
    width: 95%;
    background-color: white;
    padding: 2rem 1rem;
    align-content: center;
    margin: 20px auto 0;
    img {
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 50%;
    }
  }

  .contents {
    padding: 10px 0;

    .dataSection {
      margin: 10px;
      padding: 20px 10px;

      h3 {
        font-size: 1.6rem;
        font-weight: 600;
        font-family: "Sen";
        margin-bottom: 1rem;
      }

      h4 {
        font-size: 1.4rem;
        font-weight: 600;
        font-family: "Sen";
        margin-bottom: 1rem;
      }

      p {
        font-family: "Sen";
        font-size: 1.2rem;
      }

      ul {
        list-style-type: disc;
        font-family: "Sen";
        font-size: 1.2rem;
        list-style-position: inside;

        li {
          padding: 2px;
        }
      }

      ol {
        list-style-type: decimal;
        font-family: "Sen";
        font-size: 1.2rem;
        list-style-position: inside;

        li {
          padding: 2px;

          h4 {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
