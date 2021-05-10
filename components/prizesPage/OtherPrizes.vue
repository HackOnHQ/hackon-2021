<template>
  <Container id="otherPrizes">
    <div class="contents">
      <SubHashHeader title="Other Prizes" />
      <div class="otherPrizes">
        <div class="cards-grid">
          <div class="company">
            <img src="~/assets/Prizes/hackon.svg" alt="hackon logo" />
            <h1>HackOn Foundation</h1>
          </div>
          <div v-for="(prize, index) in otherPrizes" :key="index">
            <div class="card">
              <div class="image">
                <img :src="prize.image" :alt="prize.name" class="prizeImage" />
              </div>
              <div class="texts">
                <h4 class="prizeName">{{ prize.name }}</h4>
                <p class="prizeDescription">{{ prize.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import SubHashHeader from "~/components/SubHashHeader";

export default {
  components: {
    Container,
    SubHashHeader
  },
  data() {
    return {
      otherPrizes: [
        {
          name: "Best of Hackon x 7",
          image: require("~/assets/Prizes/5000.svg"),
          description: "The teams ranked 4th-10th overall at HackOn 2.0"
        },
        {
          name: "Best Voice Hack",
          image: require("~/assets/Prizes/alexaDot.png"),
          description:
            "The best hack built using voice technologies such as Amazon Alexa Skills, Google Assistant Actions, etc."
        },
        {
          name: "Best Beginner Hack",
          image: require("~/assets/Prizes/sonyHeadphones.png"),
          description:
            "The best hack built by a team of new hackers (At least ≥50% members should be hacking for the first time)"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contents {
  padding: 20px 0;

  .otherPrizes {
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 30px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
        margin-top: 30px;
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 30px;
      }

      @include respond-below(xs) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 30px;
      }

      .company {
        text-align: center;
        margin: auto;

        img {
          width: 110px;
        }

        h1 {
          font-weight: 600;
          font-family: "Sen";
          font-size: 1.4rem;
        }
      }

      .card {
        min-height: 400px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 15px;
        background: var(--color-secondary-light);
        border-radius: 5px;

        @include respond-between(md, lg) {
          min-height: 450px;
        }

        .image {
          align-content: center;
          img {
            width: 130px;
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
    }
  }
}
</style>
