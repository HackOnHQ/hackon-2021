<template>
  <div class="home-page-hero">
    <Container
      :style="{
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }"
    >
      <div class="hero-img"></div>
      <div class="texts">
        <div class="heroTextContainer">
          <h1 class="hero-text">Hack For&nbsp;</h1>
          <VueTyper
            :text="text"
            :shuffle="true"
            erase-style="backspace"
            :type-delay="delay"
          />
        </div>
        <h2 class="powered-by">
          Powered by
          <a href="https://raahee.in" target="_blank" ref="noopener noreferrer"
            >Raahee</a
          ><img class="raaheeLogo" src="~/assets/hero-raahee-logo.png" />
        </h2>
        <div class="date">28<sup>th</sup> to 30<sup>th</sup> May 2021</div>
        <div class="buttonContainer">
          <button class="cta">
            <a href="https://hackon.hackerearth.com" target="_blank">
              <div class="contents">
                <img src="~/assets/hackerEarth.svg" class="icon" />Register Now
              </div>
            </a>
          </button>
          <button class="ctaDiscord">
            <a href="https://discord.hackon.tech" target="_blank">
              <div class="contentsDiscord">
                <img src="~/assets/discord.svg" class="icon" />Join Discord
              </div>
            </a>
          </button>
        </div>
        <p class="call-for-proposals">
          Interested in giving a talk or workshop?
          <a href="/cfp">Submit a proposal</a>
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "~/components/Container";
import { VueTyper } from "vue-typer";

export default {
  components: {
    Container,
    VueTyper
  },

  data() {
    return {
      text: ["Change", "Inclusion", "Diversity", "Community"],
      delay: 150
    };
  }
};
</script>

<style lang="scss">
.home-page-hero {
  height: 600px;
  max-height: 800px;
  background: var(--color-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .hero-img {
    background-image: url(~assets/hero-img.svg);
    position: absolute;
    background-position: right top;
    width: 850px;
    height: 730px;
    right: -36px;
    top: -75px;
    -webkit-mask-image: radial-gradient(
      54.23% 54.23% at 54.76% 43.67%,
      #c4c4c4 0%,
      rgba(196, 196, 196, 0) 100%
    );
    mask-image: radial-gradient(
      54.23% 54.23% at 54.76% 43.67%,
      #c4c4c4 0%,
      rgba(196, 196, 196, 0) 100%
    );

    @include respond-below(md) {
      background-position: center top;
      right: -24px;
      width: 80%;
    }

    @include respond-below(sm) {
      right: -10px;
    }
  }

  .texts {
    display: flex;
    flex-direction: column;
    z-index: 10;

    .heroTextContainer {
      display: flex;

      @include respond-below(sm) {
        display: inline-block;
      }

      h1.hero-text {
        font-size: 2.9rem;
        font-weight: bold;
        font-family: var(--title-font);

        @include respond-below(sm) {
          font-size: 2.4rem;
        }
      }

      .vue-typer {
        font-size: 2.9rem;
        font-weight: bold;
        font-family: var(--title-font);
        margin: 19px 0;
        vertical-align: middle !important;

        @include respond-below(sm) {
          font-size: 2.4rem;
        }

        .custom.char {
          color: var(--colour-pink) !important;
        }

        .custom.caret {
          background-color: var(--colour-pink);
        }
      }
    }
    .powered-by {
      margin-top: -10px;
      margin-left: 2px;
      font-size: 1.1rem;
      color: var(--font-color);

      @include respond-below(sm) {
        margin-top: 7px;
      }

      img {
        width: 18px;
        margin: 5px 5px -2px;
      }

      a {
        color: var(--colour-pink);
      }
    }

    .date {
      font-size: 1.3rem;
      margin: 50px 0 0;
      font-weight: bold;

      @include respond-below(sm) {
        margin: 50px 0 10px;
        font-size: 1rem;
      }
    }

    .buttonContainer {
      .cta {
        align-self: flex-start;
        margin: 20px 0px;
        background: var(--font-color);
        border: 0;
        border-radius: 10px;
        padding: 2px;
        transition: 0.2s all ease-in-out;

        @include respond-below(sm) {
          margin: 5px 0;
        }

        .contents {
          padding: 10px;
          background: var(--font-color);
          border-radius: 10px;
          color: var(--color-secondary);
          font-size: 1.1rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          opacity: 0.9;
          .icon {
            margin-right: 10px;
            height: 1.9rem;
            width: 1.9rem;
          }
        }

        &:hover {
          box-shadow: 0px 5px 20px rgba(40, 129, 245, 0.164);
          cursor: pointer;
        }
      }

      .ctaDiscord {
        align-self: flex-start;
        margin: 20px 0px;
        background: #313742;
        border: 0;
        border-radius: 10px;
        padding: 2px;
        transition: 0.2s all ease-in-out;

        @include respond-below(sm) {
          margin: 5px 0;
        }

        .contentsDiscord {
          padding: 10px;
          background: #313742;
          border-radius: 10px;
          color: var(--font-color);
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          opacity: 0.9;
          .icon {
            margin-right: 10px;
            height: 1.9rem;
            width: 1.9rem;
          }
        }

        &:hover {
          box-shadow: 0px 5px 20px rgba(40, 129, 245, 0.164);
          cursor: pointer;
        }
      }
    }

    .call-for-proposals {
      margin-top: 15px;
      font-size: 0.9rem;

      a {
        color: var(--color-accent);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
