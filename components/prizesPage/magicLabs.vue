<template>
  <Container id="magicLabs">
    <div class="contents">
      <div class="cards-grid">
        <img
          class="background"
          src="~/assets/Prizes/magicTransparent.png"
          alt="background"
        />
        <div class="company">
          <img src="~/assets/Prizes/magicLogo.svg" alt="magic logo" />
          <h1>Magic Labs</h1>
        </div>
        <div v-for="(prize, index) in magicLabPrizes" :key="index">
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
  </Container>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container
  },
  data() {
    return {
      magicLabPrizes: [
        {
          name: "Build With Magic: Winner",
          image: require("~/assets/Prizes/HomepodMini.png"),
          description: "The best hack built using Magic"
        },
        {
          name: "Build With Magic: First Runners-Up",
          image: require("~/assets/Prizes/Yubikey5NFC.png"),
          description: "The 2nd best hack built using Magic"
        },
        {
          name: "Build With Magic: Second Runners-Up",
          image: require("~/assets/Prizes/SecurityKeyNFC.png"),
          description: "The 3rd best hack built using Magic"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contents {
  padding: 20px 0;

  .cards-grid {
    display: grid;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
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
      left: 2px;

      @include respond-below(lg) {
        display: none;
      }

      @include respond-below(md) {
        display: unset;
        height: 40%;
        top: 5.5%;
        left: 1%;
      }

      @include respond-below(sm) {
        display: unset;
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
</style>
