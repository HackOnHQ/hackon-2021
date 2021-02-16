<template>
  <Container id="sponsors">
    <section class="content-section">
      <HashHeader title="Past Sponsors" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(sponsor, index) in sponsors" :key="index" class="card">
            <img :src="sponsor.image" alt="sponsor" />
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";

export default {
  components: {
    Container,
    HashHeader,
  },
  data() {
    return {
      sponsors: [
        {
          image:
            "https://webstockreview.net/images/google-logo-white-png-4.png",
        },
        {
          image: require("~/assets/Sponsors/GitHub.png"),
        },
        {
          image: require("~/assets/Sponsors/Gitkraken.png"),
        },
        {
          image: require("~/assets/Sponsors/Auth0.png"),
        },
        {
          image: require("~/assets/Sponsors/Dev.png"),
        },
        {
          image: require("~/assets/Sponsors/Elastic.png"),
        },
        {
          image: require("~/assets/Sponsors/IBM.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  .contents {
    padding: 20px 0;

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 30px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        row-gap: 10px;
      }

      .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 20px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        height: 200px;

        @include respond-below(sm) {
          height: 120px;
        }

        img {
          width: 200px;
          margin: auto;

          @include respond-below(sm) {
            width: 120px;
          }
        }
      }
    }
  }
}
</style>
