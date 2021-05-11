<template>
  <Container id="prizes">
    <section class="content-section">
      <HashHeader title="Prizes" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(prize, index) in prizes" :key="index">
            <div class="card">
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
        <a class="view-more" href="/prizes"
          >View more <img src="~/assets/faq-up-arrow.svg"
        /></a>
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
    text-align: center;

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
      row-gap: 30px;
      margin-bottom: 2rem;

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

    .view-more {
      cursor: pointer;
      color: var(--colour-pink);

      img {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
