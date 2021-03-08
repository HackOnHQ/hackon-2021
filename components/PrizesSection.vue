<template>
  <Container id="prizes">
    <section class="content-section">
      <HashHeader title="Prizes" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(prize, index) in prizes" :key="index" class="card">
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
      prizes: [
        {
          name: "First Prize",
          image: require("~/assets/first.svg"),
          amount: "₹25,000"
        },
        {
          name: "Second Prize",
          image: require("~/assets/second.svg"),
          amount: "₹15,000"
        },
        {
          name: "Third Prize",
          image: require("~/assets/third.svg"),
          amount: "₹10,000"
        },
        {
          name: "Best Hack Built On Polygon",
          image: require("~/assets/polygon.svg"),
          amount: "₹5,000"
        },
        {
          name: "Best Hack Built On Elastic",
          image: require("~/assets/elastic.png"),
          amount: "₹5,000"
        },
        {
          name: "Best Hack Built On Voice",
          image: require("~/assets/voice.svg"),
          amount: "₹5,000"
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
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 15px;
        background: var(--color-secondary-light);
        border-radius: 5px;
        min-height: 275px;

        .image {
          img {
            height: 150px;
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
    }
  }
}
</style>
