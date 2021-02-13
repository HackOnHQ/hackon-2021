<template>
  <div class="footer">
    <Container class="contents">
      <div class="content-grid">
        <div class="panel">
          <div class="branding">
            <h1 class="brand-text">HACKON<span>2.0</span></h1>
            <p class="description">
              Hackon &copy; 2020
            </p>
            <span>
              Hackon and it's trademarks are associated as a registered
              <i style="color: var(--colour-pink)">Non-Profit</i>
              Company
            </span>
          </div>
        </div>

        <div class="panel">
          <h4 class="title">Links</h4>
          <a href="https://github.com">Code Of Conduct</a>
          <a href="https://github.com">Sponsorship Brochure</a>
          <a href="/team">Hackon 2.0 Team</a>
        </div>

        <div class="panel">
          <div class="title">Contact Us</div>
          <p class="info">
            <a href="mailto:contact@hackon.tech">contact@hackon.tech</a>
          </p>
          <p class="info">+919876543210</p>
          <div class="socialLinks">
            <a href="https://www.linkedin.com/company/hackonhackathon">
              <img src="~/assets/linkedin.svg" alt="LinkedInLink" />
            </a>
            <a href="https://discord.hackon.tech/">
              <img src="~/assets/discord.svg" alt="DiscordLink" />
            </a>
            <a href="https://medium.com/hackonhackathon">
              <img src="~/assets/medium.svg" alt="MediumLink" />
            </a>
          </div>
          <div class="socialLinks">
            <a href="https://twitter.com/hackonhackathon">
              <img src="~/assets/twitter.svg" alt="FacebookLink" />
            </a>
            <a
              href="https://youtube.com/playlist?list=PLl4Y2XuUavmuPZrFczbT6xk8zwJv0Irli"
            >
              <img src="~/assets/youtube.svg" alt="YoutubeLink" />
            </a>
            <a href="https://telegram.hackon.tech/">
              <img src="~/assets/telegram.svg" alt="TelegramLink" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 40px 30px;
  background: var(--color-secondary-light);
  display: flex;
  flex-direction: column;

  @include respond-between(md, lg) {
    padding: 40px 20px;
  }

  @include respond-between(sm, md) {
    padding: 40px 20px;
  }

  @include respond-below(sm) {
    padding: 40px 10px;
  }

  .contents {
    display: flex;
    flex-direction: column;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 180px;
    row-gap: 30px;

    @include respond-between(md, lg) {
      column-gap: 140px;
    }

    @include respond-below(md) {
      column-gap: 140px;
    }

    @include respond-between(sm, md) {
      column-gap: 90px;
    }

    @include respond-below(sm) {
      grid-template-columns: 1fr;
    }
  }

  .panel {
    display: flex;
    flex-direction: column;

    .branding {
      h1.brand-text {
        font-family: var(--title-font);
        font-weight: bold;
        font-size: 1.2rem;

        span {
          color: var(--font-color-light);
          margin-left: 10px;
        }
      }
    }

    .socialLinks {
      padding: 20px 0 10px;
      margin-left: -5px;

      a {
        padding: 10px;
        margin: 5px;
        background: #252638;
        border-radius: 50%;
        text-align: center;

        &:hover {
          filter: invert(100%);
        }

        img {
          height: 20px;
          width: 20px;
          position: relative;
          top: 4px;
        }
      }
    }

    .description {
      opacity: 0.5;
    }

    .title {
      padding: 10px 0;
    }

    a {
      color: var(--colour-pink);
    }
  }
}
</style>
