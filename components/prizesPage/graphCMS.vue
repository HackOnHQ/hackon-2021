<template>
  <Container id="graphCMS">
    <div class="contents">
      <div class="cards-grid">
        <img
          class="background"
          src="~/assets/Prizes/graphCMSTransparent.png"
          alt="background"
        />
        <div class="company">
          <img src="~/assets/Prizes/graphCMS.png" alt="magic logo" />
          <h1>Graph CMS</h1>
        </div>
        <div v-for="(prize, index) in magicLabPrizes" :key="index">
          <div class="card">
            <div class="image">
              <img :src="prize.image1" :alt="prize.name" class="prizeImage1" />
              <img :src="prize.image2" alt="amazon logo" class="prizeImage2" />
            </div>
            <div class="texts">
              <h4 class="prizeName">{{ prize.name }}</h4>
              <p class="prizeDescription">{{ prize.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container,
  },
  data() {
    return {
      magicLabPrizes: [
        {
          name: "Best GraphCMS Project",
          image1: require("~/assets/Prizes/7500-amazon.svg"),
          image2: require("~/assets/Prizes/amazon.png"),
          description: "The best hack built using GraphCMS",
        },
        {
          name: "Best GraphQL Project",
          image1: require("~/assets/Prizes/5000-amazon.svg"),
          image2: require("~/assets/Prizes/amazon.png"),
          description: "The best hack that implements GraphQL ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contents {
  padding: 20px 0;

  .cards-grid {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1.5fr 1.5fr;
    background-color: var(--color-secondary-light);
    padding: 30px;
    border-radius: 10px;
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

    .background {
      position: absolute;
      height: 100%;
      left: 6rem;

      @include respond-below(lg) {
        left: 2rem;
      }

      @include respond-below(md) {
        display: unset;
        height: 90%;
        top: 5%;
        left: 2rem;
      }

      @include respond-below(sm) {
        display: unset;
        height: 40%;
        top: 5%;
        left: 4rem;
      }

      @include respond-below(xs) {
        display: none;
      }
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
      min-height: 300px;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      padding: 15px;
      background: var(--color-secondary);
      border-radius: 5px;

      @include respond-between(md, lg) {
        min-height: 350px;
      }

      @include respond-below(md) {
        min-height: 350px;
      }

      @include respond-below(sm) {
        min-height: 400px;
      }

      .image {
        display: flex;
        flex-direction: column;
        align-content: center;
        margin-left: auto;
        margin-right: auto;

        .prizeImage1 {
          width: 130px;
        }

        .prizeImage2 {
          margin-top: -0.5rem;
          width: 130px;
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
</style>
