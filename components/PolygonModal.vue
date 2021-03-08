<script>
export default {
  name: "polygonModal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-on:click.self="close()">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <img
          class="close-modal"
          src="~/assets/close-modal.svg"
          v-on:click.self="close()"
        />
        <header class="modal-header" id="modalTitle">
          Matic Network Supports the EtherPunk Hackathon with $5k in Bounties!
        </header>
        <section class="modal-body" id="modalDescription">
          <div class="logo">
            <img src="~/assets/polygon.svg" />
          </div>
          <br />
          <!-- <div class="title">About the workshop</div> -->
          <div class="content">
            The next installment of ETHIndia’s Online hackathon series
            EtherPunk, is right around the corner. We’re proud to be
            accelerating the Ethereum ecosystem’s growth by supporting the event
            organized by our longstanding hackathon partner Devfolio.
            <br />
            <br />
            The month-long virtual hackathon is taking place entirely online
            from Jan 22nd – Feb 21st and is bringing together developers from
            across the globe to help build our decentralized future.
            <br />
            <br />

            The Matic team will provide a range of bounty tracks with prizes
            totaling up to $5000 (USDT) for hackers building innovative
            solutions on Matic Network.
          </div>
          <div class="title">Important Links</div>
          <div class="content">
            <ul>
              <li>
                <b> Getting started with Matic </b>
                https://docs.matic.network/docs/develop/getting-started
              </li>
              <li>
                <b> Matic Blockchain Explorer </b>
                https://explorer-mainnet.maticvigil.com/
              </li>
              <li>
                <b> Matic Testnet Faucet https://faucet.matic.network/ </b>
              </li>
              <li>
                <b> Matic-Covalent Docs </b>
                https://www.covalenthq.com/docs/networks/matic
              </li>
            </ul>
            <br />
            We also have a dedicated Discord channel for direct communication
            with developers during hackathons. If you have any doubts regarding
            any of the above information, please join our Discord channel to get
            your queries answered. Discord Link
            <a href="https://discord.gg/qGwh4Pek8N">here</a>.
          </div>
          <div class="title">Matic Network Bounty Track Details</div>
          <div class="content">
            We have ideated some impressive bounty tracks to inspire the
            Etherpunk hackers to build innovative solutions on Matic Network.
            <br /><br />
            <div class="subtitle">
              1. One Million Wallets Campaign with Covalent
            </div>
            Matic’s ecosystem partner Covalent will offer an additional $3,000
            (USDT) in rewards for the One Million Wallets Campaign as part of
            EtherPunk 2021. This campaign focuses on building custom-themed
            wallets and showcasing the creativity and diversity of the developer
            community. Throughout the campaign, Covalent will be guiding and
            mentoring One Million Wallets projects through tutorial videos, live
            coding sessions, and regular ‘office hours’.’ Developers can find
            more details
            <a
              href="https://www.covalenthq.com/docs/quickstart/campaigns/one-million-wallets"
              >here</a
            >.
            <br />
            <br />
            Furthermore, Covalent will be contributing to the prize pool of the
            tracks outlined below so long as the winning bounty submission
            incorporates the Covalent API into their work.
            <br /><br />
            <div class="subtitle">2. Decentralized Prediction Markets</div>
            <b>Aim of the Project:</b> To build a decentralized information
            markets platform, where you can bet on highly-debated topics like
            political elections, the results of reality shows, results of
            ESports tournaments, and earn for being right.<br />
            Example:
            <a href="http://polymarket.com/">polymarket.com</a>
            <br /><br />
            <div class="subtitle">3. Gaming/NFT</div>
            <b>Aim of the Project:</b> To build a game/NFT based project that
            utilizes Matic’s speed for a seamless gameplay experience.
            <br /><br />
            <div class="subtitle">4. DeFi</div>
            Let your imagination run wild while building a Defi DApp that takes
            advantage of Matic Network’s speed and Scalability. Some ideas:
            <ul>
              <li>Aave fork on Matic</li>
              <li>Balancer fork on Matic</li>
              <li>Prediction Market for Equities</li>
              <li>Lossless Arbitrage</li>
              <li>Personal Tokens</li>
              <li>Staker Games</li>
            </ul>
            <br />
            <div class="subtitle">5. Open Track</div>
            <b>Aim of the project: </b>Use your imagination and feel free to
            build any DApp that excites you! The sky’s the limit.
          </div>
          <div class="title">Post-EtherPunk Opportunities</div>
          <div class="content">
            We expect awesome projects with long-term potential to be built on
            Matic Network at EtherPunk. Top Teams building on Matic will be
            eligible for Incubation and Marketing Support from Matic.
          </div>
          <div class="title">Judging Criteria</div>
          <div class="content">
            <ol>
              <li>
                The importance of Matic Network’s infrastructure in the
                application/originality of the idea.
              </li>
              <li>
                User experience: intuitive, easy to use and interact with.
              </li>
              <li>
                Technical complexity: going above and beyond the specification.
                Code quality, bug-free, documentation quality.
              </li>
              <li>Polish: how refined the project is.</li>
            </ol>
            <b>Note:</b> The quality of the application determines the bounty
            payout amount for each winning submission.
          </div>
          <div class="title">Let’s #BUIDL!</div>
          <div class="content">
            Now you have the background knowledge of building on Matic Network
            and information regarding the bounties on offer; it’s over to you!
            Let your ingenuity, creativity, and development talent guide you to
            build an awesome hack to further the decentralized movement.<br />
            Matic remains dedicated as ever to accelerating the decentralized
            revolution. We are therefore excited to see what amazing hackers
            from all over the world will create by building on Matic, and to see
            how the world will benefit from the new ideas born at EtherPunk!
          </div>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <a href="" target="_blank">
              <button type="button" class="btn-green" aria-label="Close modal">
                <img src="~/assets/discord.svg" />
                Discord Link
              </button>
            </a>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8) !important;
  display: flex;
  z-index: 0;
  justify-content: center;
  align-items: center;
}

.modal {
  max-width: 600px;
  min-width: 40%;
  background: #171e2e;
  padding: 2rem 3rem;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  position: relative;

  .close-modal {
    cursor: pointer;
    transform: rotate(45deg);
    width: 1.8rem;
    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
  }

  .modal-header {
    font-family: "Sen";
    font-weight: 600;
    font-size: 2rem;
    justify-content: space-between;
  }

  .logo {
    width: 100%;
    align-content: center;
    img {
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 50%;
    }
  }

  .title {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .content {
    margin-top: 0.4rem;
    margin-bottom: 1.2rem;
    ul {
      list-style-type: disc !important;
    }
    ol {
      list-style-type: decimal !important;
    }
  }

  .speaker-details {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    img.avatar {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin-right: 10px;
    }
    .details {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .name {
        font-weight: bold;
      }

      .designation {
        margin-top: -0.4rem;
        // color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}

/* 
  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  } */

button {
  float: right;
  border-radius: 20px;
  cursor: pointer;
  margin-top: -10px;
  border: 0px;
  color: #fff;
  padding: 12px 16px;
  background-color: var(--color-accent-2);
  img {
    width: 1rem;
    position: relative;
    top: 3px;
  }
  font-family: "Roboto Mono";
}

.modal-body {
  /* position: relative; */
  padding: 20px 0px;
}

/* .btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
} */
</style>
