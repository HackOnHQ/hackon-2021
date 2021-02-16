<template>
  <Container id="CommunityPartners">
    <section class="content-section">
      <HashHeader title="Past Community Partners" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(sponsor, index) in sponsors" :key="index" class="card">
            <img :src="sponsor.image" alt="sponsor" />
          </div>
        </div>
      </div>
      <div class="new-sponsor">
        <p>Want to get involved?</p>
        <p>
          Drop us an e-mail at
          <MailTo email="contact@hackon.tech" />
        </p>
        <br />
        <p><a href="brochure">Download Brochure</a></p>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
import MailTo from "~/components/MailTo";

export default {
  components: {
    Container,
    HashHeader,
    MailTo,
  },
  data() {
    return {
      sponsors: [
        {
          image: require("~/assets/Community/CodingBlocks.png"),
        },
        {
          image: require("~/assets/Community/AngelHack.png"),
        },
        {
          image: require("~/assets/Community/DCD.svg"),
        },
        {
          image: require("~/assets/Community/JSLovers.png"),
        },
        {
          image: require("~/assets/Community/WWCD.jpeg"),
        },
        {
          image: require("~/assets/Community/GDG New Delhi.png"),
        },
        {
          image: require("~/assets/Community/GDG Bangalore.png"),
        },
        {
          image: require("~/assets/Community/GDG Jaipur.png"),
        },
        {
          image: require("~/assets/Community/GDG Ahmedabad.png"),
        },
        {
          image: require("~/assets/Community/GDG Jalandar.png"),
        },
        {
          image: require("~/assets/Community/GDG Nagpur.png"),
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

  .new-sponsor {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 20px 0 -10px;
    padding: 2em 0em;
    text-align: center;
    background: var(--color-secondary-light);
    border-radius: 5px;

    a {
      text-decoration: underline;
    }
  }
}
</style>
