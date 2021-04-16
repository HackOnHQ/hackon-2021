<template>
  <Container id="sponsors">
    <section class="content-section">
      <HashHeader title="Sponsors" />
      <div class="contents">
        <div v-for="(section, index) in sponsors" :key="index">
          <div class="subheading">
            <h2 class="section-title">{{ section.type }}</h2>
            <img :src="section.image" :alt="section.type" />
          </div>
          <div class="cards-grid">
            <div v-for="(sponsor, index) in section.logos" :key="index">
              <a :href="sponsor.url" target="_blank">
                <div class="card">
                  <img :src="sponsor.image" alt="sponsor" />
                </div>
              </a>
            </div>
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
          type: "Diamond Sponsors",
          image: require("~/assets/Sponsors/Types/diamond.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/google-cloud.svg"),
              url: "https://cloud.google.com/",
            },
          ],
        },
        {
          type: "Platinum Sponsors",
          image: require("~/assets/Sponsors/Types/silver.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/elastic.svg"),
              url: "https://www.elastic.co",
            },
            {
              image: require("~/assets/Sponsors/Auth0.png"),
              url: "https://auth0.com",
            },
          ],
        },
        {
          type: "Gold Sponsors",
          image: require("~/assets/Sponsors/Types/gold.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/wazirx.svg"),
              url: "https://wazirx.com",
            },
            {
              image: require("~/assets/Sponsors/github.svg"),
              url: "https://github.com",
            },
            {
              image: require("~/assets/Sponsors/digitalocean.svg"),
              url: "https://digitalocean.com",
            },
            {
              image: require("~/assets/Sponsors/stickermule.svg"),
              url: "https://stickermule.com",
            },
          ],
        },
        {
          type: "Bronze Sponsors",
          image: require("~/assets/Sponsors/Types/bronze.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/dottech.svg"),
              url: "https://get.tech",
            },
            {
              image: require("~/assets/Sponsors/linode.svg"),
              url: "https://linode.com",
            },
            {
              image: require("~/assets/Sponsors/sendgrid.svg"),
              url: "https://sendgrid.com",
            },
            {
              image: require("~/assets/Sponsors/polygon.svg"),
              url: "https://polygon.technology",
            },
            {
              image: require("~/assets/Sponsors/netlify.svg"),
              url: "https://polygon.technology",
            },
            {
              image: require("~/assets/Sponsors/vercel.svg"),
              url: "https://polygon.technology",
            },
          ],
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
    .subheading {
      // padding: 20px 0px;
      display: flex;
      align-items: center;

      &:first-child {
        // padding-top: 0px;
      }

      h2.section-title {
        font-family: "Sen";
        font-size: 1.26rem;
        font-weight: 600;
        padding: 20px 10px 20px 0;

        &:before {
          content: "##";
          color: var(--font-color-light);
          padding-right: 5px;
        }
      }
    }
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
        // padding: 20px;
        // background: rgba(255, 255, 255, 0.2);
        // border-radius: 5px;
        height: 150px;

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
