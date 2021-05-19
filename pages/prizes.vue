<template>
  <Container id="prizesPage">
    <section class="content-section">
      <HashHeader title="Prizes" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(prize, index) in prizes" :key="index">
            <div class="card">
              <div class="card-side front">
                <div class="image">
                  <img :src="prize.image" :alt="prize.name" />
                </div>
                <div class="texts">
                  <h4 class="prizeName">{{ prize.name }}</h4>
                  <p class="prizeDescription" v-html="prize.details">{{}}</p>
                </div>
              </div>
              <div class="card-side back">
                <div class="image">
                  <img :src="prize.prizeImage" :alt="prize.name" />
                </div>
                <p>
                  <span v-html="prize.description">{{}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <OtherPrizes />
        <AmagiAndElastic />
        <MagicLabs />
        <GraphCMS />
        <MLH />
        <SawoAndPolygon />
        <Symbl />
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
import SubHashHeader from "~/components/SubHashHeader";
import OtherPrizes from "~/components/prizesPage/OtherPrizes.vue";
import AmagiAndElastic from "~/components/prizesPage/AmagiAndElastic.vue";
import MagicLabs from "~/components/prizesPage/magicLabs.vue";
import SawoAndPolygon from "~/components/prizesPage/SawoAndPolygon.vue";
import GraphCMS from "~/components/prizesPage/graphCMS.vue";
import MLH from "~/components/prizesPage/MLH.vue";
import Symbl from "~/components/prizesPage/Symbl.vue";

export default {
  components: {
    Container,
    HashHeader,
    SubHashHeader,
    OtherPrizes,
    AmagiAndElastic,
    MagicLabs,
    SawoAndPolygon,
    GraphCMS,
    MLH,
    Symbl
  },
  data() {
    return {
      prizes: [
        {
          name: "Winner (1st Prize)",
          image: require("~/assets/Prizes/first.svg"),
          prizeImage: require("~/assets/Prizes/25000.svg"),
          amount: "₹25,000",
          details:
            'The team ranked 1st overall at Hack<span style="color: #E58AB2">O</span>n 2.0',
          description: "₹25000 Prize to winning team"
        },
        {
          name: "First Runner-Up (2nd Prize)",
          image: require("~/assets/Prizes/second.svg"),
          prizeImage: require("~/assets/Prizes/15000.svg"),
          amount: "₹15,000",
          details:
            'The team ranked 2nd overall at Hack<span style="color: #E58AB2">O</span>n 2.0',
          description: "₹15000 Prize to winning team"
        },
        {
          name: "2nd Runner-Up (3rd Prize)",
          image: require("~/assets/Prizes/third.svg"),
          prizeImage: require("~/assets/Prizes/10000.svg"),
          amount: "₹10,000",
          details:
            'The team ranked 3rd overall at Hack<span style="color: #E58AB2">O</span>n 2.0',
          description: "₹10000 Prize to winning team"
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
    padding: 20px 0;

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(1, 1fr);
      }

      .card {
        position: relative;
        text-align: center;
        border-radius: 15px;
        min-height: 300px;
        margin: auto;

        @media (max-width: 1000px) {
          width: 96%;
        }

        .card-side {
          width: 96%;
          margin: auto;
          border-radius: 15px;
          transition: all 0.8s ease;
          backface-visibility: hidden;
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0.5rem;
          min-height: 95%;
          color: white;
          background-color: var(--color-secondary-light);
        }
        .card-side.back {
          transform: rotateY(-180deg);
        }
        &:hover .card-side.front {
          transform: rotateY(180deg);
        }
        &:hover .card-side.back {
          transform: rotateY(0deg);
        }

        .image {
          align-content: center;
          img {
            width: 150px;
            margin: 10px;
          }
        }

        .texts {
          text-align: center;
          .prizeName {
            font-size: 1.2rem;
            font-weight: bold;
            padding-bottom: 10px;
          }
        }
      }

      .clickable {
        cursor: pointer;
      }
    }
  }
}
</style>
