<template>
  <div class="footer">
    <Container class="contents">
      <div class="content-grid">
        <div class="panel">
          <div class="branding">
            <h1 class="brand-text">HACKON FOUNDATION</h1>
            <span>
              The goal of HackOn Foundation is to support
              <i style="color: var(--colour-pink)"
                >hackers and the hackathon communities</i
              >
              around the globe.
            </span>
          </div>
        </div>

        <div class="panel">
          <h4 class="title">About HackOn Foundation</h4>
          <a href="/coc">Code Of Conduct</a>
          <a href="/team">Team Behind HackOn</a>
        </div>

        <div class="panel">
          <h4 class="title">HackOn Universe</h4>
          <a href="https://www.hackjaipur.com" target="_blank">HackJaipur</a>
          <a href="https://www.hackchennai.in" target="_blank">HackChennai</a>
          <a href="https://hacknagpur.tech" target="_blank">HackNagpur</a>
          <a href="https://hackthisfall.tech" target="_blank">Hack This Fall</a>
          <a href="https://www.amihacks.tech" target="_blank">AmiHacks</a>
          <a href="https://unblock.octaloop.com/" target="_blank">Unblock</a>
          <a class="hackonUniverse" href="/hackonUniverse" target="_blank"
            >More...</a
          >
        </div>

        <div class="panel">
          <div class="title">Connect With Us</div>
          <p class="info">
            <CopyLink
              value="contact@hackon.tech"
              link="mailto:contact@hackon.tech"
              text="email address"
            />
          </p>
          <p class="info">+919560678655</p>
          <div class="socialLinks">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/hackonhackathon"
            >
              <img src="~/assets/linkedin.svg" alt="LinkedInLink" />
            </a>
            <a target="_blank" href="https://discord.hackon.tech/">
              <img src="~/assets/discord.svg" alt="DiscordLink" />
            </a>
            <a target="_blank" href="https://medium.com/hackonhackathon">
              <img src="~/assets/medium.svg" alt="MediumLink" />
            </a>
          </div>
          <div class="socialLinks">
            <a target="_blank" href="https://twitter.com/hackonhackathon">
              <img src="~/assets/twitter.svg" alt="FacebookLink" />
            </a>
            <a
              target="_blank"
              href="https://youtube.com/playlist?list=PLl4Y2XuUavmuPZrFczbT6xk8zwJv0Irli"
            >
              <img src="~/assets/youtube.svg" alt="YoutubeLink" />
            </a>
            <a target="_blank" href="https://telegram.hackon.tech/">
              <img src="~/assets/telegram.svg" alt="TelegramLink" />
            </a>
          </div>
        </div>
      </div>
      <div class="attribution">
        <span>
          Powered by
          <a
            href="https://hackerearth.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackerEarth
          </a>
          and
          <a href="https://raahee.in" target="_blank" rel="noopener noreferrer">
            Raahee
          </a>
        </span>
        <a
          href="https://vercel.com/?utm_source=HackOnHackathon&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="vercel-logo" src="~/assets/powered-by-vercel.svg" />
        </a>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "~/components/Container";
import CopyLink from "~/components/CopyLink";

export default {
  components: {
    Container,
    CopyLink
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 100px;
    row-gap: 30px;

    @include respond-between(md, lg) {
      column-gap: 50px;
    }

    @include respond-below(md) {
      column-gap: 50px;
    }

    @include respond-between(sm, md) {
      column-gap: 30px;
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

    .hackonUniverse {
      color: white;

      &:hover {
        color: var(--colour-pink);
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

  .attribution {
    padding: 10px 0;
    border-top: 1px solid var(--color-secondary);
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    span {
      margin-top: -10px;
      @include respond-below(sm) {
        margin-bottom: 1em;
      }
      a {
        color: var(--color-accent);
      }
    }

    img {
      height: 1.75em;
    }
  }
}
</style>
