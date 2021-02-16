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
        <h1 class="hero-text">
          <a
            href="https://twitter.com/search?q=%23HackOn%20%40hackonhackathon&src=typed_query"
            target="_blank"
            ref="noopener noreferrer"
            >#HackOn</a
          >
        </h1>
        <VueTyper
          :text="text"
          :shuffle="true"
          erase-style="backspace"
          type-delay="150"
        />
        <h2 class="powered-by">
          Powered by
          <a href="https://raahee.in" target="_blank" ref="noopener noreferrer"
            >Raahee</a
          >
        </h2>
        <div class="date">10<sup>th</sup> to 18<sup>th</sup> April 2021</div>
        <button class="cta">
          <a href="https://hackon.hackerearth.com" target="_blank">
            <div class="contents">
              Register Now<ArrowRightIcon class="icon" />
            </div>
          </a>
        </button>
        <p class="call-for-proposals">
          Interested in giving a talk or workshop? <a href="">CFPs Coming Soon!</a>
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "~/components/Container";
import ArrowRightIcon from "~/components/Icons/ArrowRight";
import { VueTyper } from "vue-typer";

export default {
  components: {
    Container,
    ArrowRightIcon,
    VueTyper
  },

  data() {
    return { text: ["Ready? Set. Hack!", "Hack For Change."] };
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

    h1.hero-text {
      font-size: 2.4rem;
      font-weight: bold;
      font-family: var(--title-font);
    }

    .vue-typer {
      font-size: 2.4rem;
      font-weight: bold;
      font-family: var(--title-font);

      .custom.char {
        color: #fff !important;
      }

      .custom.caret {
        background-color: #fff;
      }
    }
    .powered-by {
      margin-top: 15px;
      font-size: 1rem;
      color: var(--colour-pink);

      a {
        color: var(--colour-pink);
      }
    }

    .date {
      font-size: 1.2rem;
      margin: 15px 0;
      font-weight: bold;
    }

    .cta {
      align-self: flex-start;
      margin: 20px 0px;
      background: var(--gradient-blue);
      border: 0;
      border-radius: 100px;
      padding: 2px;
      transition: 0.2s all ease-in-out;

      .contents {
        padding: 15px 20px;
        background: var(--color-secondary);
        border-radius: 100px;
        color: var(--font-color);
        font-size: 1.2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        opacity: 0.9;
        .icon {
          margin-left: 10px;
        }
      }

      &:hover {
        box-shadow: 0px 10px 20px rgba(40, 129, 245, 0.164);
        cursor: pointer;
      }
    }

    .call-for-proposals {
      margin-top: 15px;
      font-size: 0.9rem;

      a {
        color: var(--color-accent);
      }
    }
  }
}
</style>
