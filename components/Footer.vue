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
          <div class="socialLinks">
            <a href="https://instagram.com/hackon">
              <img
                src="~/assets/facebook.svg"
                alt="FacebookLink"
                class="socialImage"
              />
            </a>
            <a href="https://instagram.com/hackon">
              <img
                src="~/assets/discord.svg"
                alt="DiscordLink"
                class="socialImage"
              />
            </a>
            <a href="https://instagram.com/hackon">
              <img
                src="~/assets/twitter.svg"
                alt="TwitterLink"
                class="socialImage"
              />
            </a>
          </div>
        </div>

        <div class="panel">
          <h4 class="title">Links</h4>
          <a href="https://github.com">Code Of Conduct</a>
          <a href="https://github.com">Oath of Undertaking</a>
          <a href="https://github.com">Sponsorship Brochure</a>
          <a href="https://github.com">Branding Guidelines</a>
        </div>

        <div class="panel">
          <div class="title">Contact Us</div>
          <p class="info">hello@hackon.tech</p>
          <p class="info">+919876543210</p>
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
  padding: 60px 30px;
  background: var(--color-secondary-light);
  display: flex;
  flex-direction: column;

  @include respond-between(md, lg) {
    padding: 60px 20px;
  }

  @include respond-between(sm, md) {
    padding: 60px 20px;
  }

  @include respond-below(sm) {
    padding: 60px 10px;
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

      a {
        padding: 15px 10px;
        margin: 10px;
        background: #252638;
        border-radius: 50%;
        text-align: center;

        @include respond-between(md, lg) {
          margin: 0;
          padding: 15px;
        }

        @include respond-between(sm, md) {
          margin: 0;
          padding: 15px;
        }

        @include respond-below(sm) {
          margin: 0;
          padding: 15px;
        }

        img {
          height: 30px;
          width: 30px;
          position: relative;
          top: 9px;
          @include respond-between(md, lg) {
            height: 20px;
            width: 20px;
            position: relative;
            top: 5px;
          }

          @include respond-between(sm, md) {
            height: 20px;
            width: 20px;
            position: relative;
            top: 5px;
          }

          @include respond-below(sm) {
            height: 20px;
            width: 20px;
            position: relative;
            top: 5px;
          }
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
