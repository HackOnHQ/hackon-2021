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
          </div>
        </div>

        <div class="panel">
          <h4 class="title">Links</h4>
          <a href="https://github.com">Code Of Conduct</a>
          <a href="https://github.com">Privacy Policy</a>
        
          <h4 class="title">Social</h4>
          <a href="https://instagram.com/hackon">Twitter</a>
          <a href="https://instagram.com/hackon">Instagram</a>
          <a href="https://instagram.com/hackon">Facebook</a>
          <a href="https://instagram.com/hackon">Discord</a>
        </div>

        <div class="panel">
          <div class="title">Contact us</div>
          <p class="info">hello@hackon.tech</p>
          <p class="info">+919876543210</p>
        </div>
      </div>
      <div class="attribution">
          Designed by <a href="https://twitter.com/haxzie" target="_blank" rel="noopener noreferrer">@haxzie</a>
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
  padding: 15px;
  background: var(--color-secondary-light);
  display: flex;
  flex-direction: column;

  .contents {
    display: flex;
    flex-direction: column;

    .attribution {
        padding: 10px 0;
        border-top: 1px solid var(--color-secondary);
        margin-top: 20px;

        a {
            color: var(--color-accent);
        }
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 15px;
      row-gap: 15px;

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

      .description {
        opacity: 0.5;
      }

      .title {
          padding: 10px 0;
      }

      a {
          color: var(--color-accent);
      }
    }
  }
}
</style>
