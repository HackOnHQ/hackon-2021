<template>
  <Container id="sponsors">
    <section class="content-section">
      <HashHeader title="Sponsors and Partners" />
      <div class="contents">
        <div v-for="(section, index) in sponsors" :key="index">
          <div class="subheading">
            <h2 class="section-title">{{ section.type }}</h2>
            <img
              v-if="section.image"
              :src="section.image"
              :alt="section.type"
            />
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
    HashHeader
  },
  data() {
    return {
      sponsors: [
        {
          type: "Hackathon Partners 🤝🏻",
          logos: [
            {
              image: require("~/assets/Sponsors/mlh.svg"),
              url: "https://mlh.io"
            },
            {
              image: require("~/assets/Sponsors/hackerearth.png"),
              url: "https://hackerearth.com"
            },
            {
              image: require("~/assets/Sponsors/raahee.png"),
              url: "https://raahee.in"
            }
          ]
        },
        {
          type: "Diamond Sponsors",
          image: require("~/assets/Sponsors/Types/diamond.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/google-cloud.svg"),
              url: "https://cloud.google.com"
            }
          ]
        },
        {
          type: "Platinum Sponsors",
          image: require("~/assets/Sponsors/Types/silver.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/elastic.svg"),
              url: "https://www.elastic.co"
            },
            {
              image: require("~/assets/Sponsors/Auth0.png"),
              url: "https://a0.to/Hackon"
            }
          ]
        },
        {
          type: "Gold Sponsors",
          image: require("~/assets/Sponsors/Types/gold.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/wazirx.png"),
              url: "https://wazirx.com"
            },
            {
              image: require("~/assets/Sponsors/github.svg"),
              url: "https://github.com"
            },
            {
              image: require("~/assets/Sponsors/digitalocean.svg"),
              url: "https://digitalocean.com"
            },
            {
              image: require("~/assets/Sponsors/stickermule.svg"),
              url: "http://hackp.ac/mlh-stickermule-hackathons"
            }
          ]
        },
        {
          type: "Bronze Sponsors",
          image: require("~/assets/Sponsors/Types/bronze.svg"),
          logos: [
            {
              image: require("~/assets/Sponsors/dottech.svg"),
              url: "https://get.tech"
            },
            {
              image: require("~/assets/Sponsors/linode.svg"),
              url: "https://linode.com"
            },
            {
              image: require("~/assets/Sponsors/sendgrid.svg"),
              url: "https://sendgrid.com"
            },
            {
              image: require("~/assets/Sponsors/polygon.svg"),
              url: "https://polygon.technology"
            },
            {
              image: require("~/assets/Sponsors/netlify.svg"),
              url: "https://www.netlify.com"
            },
            {
              image: require("~/assets/Sponsors/vercel.svg"),
              url:
                "https://vercel.com/?utm_source=HackOnHackathon&utm_campaign=oss"
            },
            {
              image: require("~/assets/Sponsors/dev.to.png"),
              url: "https://dev.to/"
            },
            {
              image: require("~/assets/Sponsors/streamYard.png"),
              url: "https://streamyard.com/"
            }
          ]
        }
      ]
    };
  }
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
