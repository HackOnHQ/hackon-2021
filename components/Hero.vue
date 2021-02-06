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
        <h1 class="hero-text">Let's Build Big!</h1>
        <h1 class="hero-text">Pan-India Virtual Hackathon</h1>
        <h2 class="powered-by">
          Powered by
          <a href="https://github.com" target="_blank" ref="noopener noreferrer"
            >GitHub</a
          >
        </h2>
        <div class="date">11<sup>th</sup> to 19<sup>th</sup> April 2021</div>
        <button class="cta">
          <div class="contents">
            Register Now<ArrowRightIcon class="icon" />
          </div>
        </button>
        <p class="call-for-proposals">
          Interested in giving a talk or workshop? <a href="">CFPs Open Now!</a>
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "~/components/Container";
import ArrowRightIcon from "~/components/Icons/ArrowRight";

export default {
  components: {
    Container,
    ArrowRightIcon
  }
};
</script>

<style lang="scss" scoped>
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
      font-size: 2.5rem;
      font-weight: bold;
      font-family: var(--title-font);
    }

    .powered-by {
      margin-top: 15px;
      font-size: 1rem;

      a {
        color: var(--font-color);
      }
    }

    .date {
      font-size: 1.2rem;
      margin: 15px 0;
      font-weight: bold;
    }

    .cta {
      align-self: flex-start;
      margin-top: 50px;
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
