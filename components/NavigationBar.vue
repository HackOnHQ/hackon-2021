<template>
  <div class="navigation-bar">
    <Container>
      <div class="navigation-contents">
        <!-- Branding area -->
        <div class="branding">
          <h1 class="brand-text">
            HACK<span class="brand-char-o">O</span>N<span class="brand-edition"
              >2.0</span
            >
          </h1>
        </div>
        <!-- Menu area -->
        <div class="menu-area">
          <ul class="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#speakers">Speakers</a>
            </li>
            <li>
              <a href="#schedule">Schedule</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
          <button class="cta-button">
            Register Now
          </button>
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
.navigation-bar {
  z-index: 99;
  .navigation-contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    .branding {
      h1 {
        font-family: var(--title-font);
        font-weight: bold;
        font-size: 1.5rem;

        .brand-char-o {
          color: #e58ab2;
        }

        .brand-edition {
          color: var(--font-color-light);
          margin-left: 10px;
        }
      }
    }

    .menu-area {
      display: flex;
      align-items: center;
      font-family: "Inter";

      @include respond-below(sm) {
        display: none;
      }

      ul.nav-links {
        display: flex;
        align-items: center;
        margin-right: 10px;

        li {
          a {
            padding: 10px 15px;
            color: var(--font-color);
            opacity: 0.7;
            transition: 0.2s all ease-in-out;

            &:hover {
              opacity: 1;
              cursor: pointer;
            }
          }
        }
      }

      .cta-button {
        padding: 15px 20px;
        background: var(--font-color);
        border: 0;
        border-radius: 5px;
        color: var(--color-secondary);
        font-weight: bold;
        box-shadow: 0px 10px 20px rgba(40, 129, 245, 0.164);

        &:hover {
          cursor: pointer;
          background: transparent;
          color: var(--font-color);
        }
      }
    }
  }
}
</style>
