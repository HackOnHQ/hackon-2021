<template>
  <Container id="prizesPage">
    <section class="content-section">
      <HashHeader title="Prizes" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(prize, index) in prizes" :key="index">
            <div
              class="card"
            >
              <div class="image">
                <img :src="prize.image" :alt="prize.name" class="prizeImage" />
              </div>
              <div class="texts">
                <p class="prizeName">{{ prize.name }}</p>
                <h4 class="prizeAmount">{{ prize.amount }}</h4>
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
  },
  data() {
    return {
      prizes: [
        {
          name: "First Prize",
          image: require("~/assets/Prizes/first.svg"),
          amount: "₹25,000",
        },
        {
          name: "Second Prize",
          image: require("~/assets/Prizes/second.svg"),
          amount: "₹15,000",
        },
        {
          name: "Third Prize",
          image: require("~/assets/Prizes/third.svg"),
          amount: "₹10,000",
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
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 15px;
        background: var(--color-secondary-light);
        border-radius: 5px;
        min-height: 275px;

        .image {
          align-content: center;
          img {
            width: 150px;
            margin: 10px;
          }
        }

        .texts {
          text-align: center;
          .prizeAmount {
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
