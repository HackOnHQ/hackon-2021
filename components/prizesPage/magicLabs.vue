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
          <h1>Magic</h1>
        </div>
        <div v-for="(prize, index) in magicLabPrizes" :key="index">
          <div class="card">
            <div class="card-side front">
              <div class="texts">
                <h4 class="prizeName">{{ prize.name }}</h4>
                <p class="prizeDescription">{{ prize.details }}</p>
              </div>
            </div>
            <div class="card-side back">
              <img :src="prize.image" :alt="prize.name" class="prizeImage" />
              <p v-for="(para, index) in prize.description" :key="index">
                <span v-html="para">{{}}</span>
              </p>
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
          name: "Build With Magic: Winner",
          image: require("~/assets/Prizes/HomepodMini.png"),
          details: "The best hack built using Magic",
          description: [
            "Apple HomePod mini",
            "(Prizes are subject to review by Magic)",
          ],
        },
        {
          name: "Build With Magic: First Runners-Up",
          image: require("~/assets/Prizes/Yubikey5NFC.png"),
          details: "The 2nd best hack built using Magic",
          description: [
            "Yubikey 5 NFC",
            "(Prizes are subject to review by Magic)",
          ],
        },
        {
          name: "Build With Magic: Second Runners-Up",
          image: require("~/assets/Prizes/SecurityKeyNFC.png"),
          details: "The 3rd best hack built using Magic",
          description: [
            "Security Key NFC by Yubico",
            "(Prizes are subject to review by Magic)",
          ],
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
      left: 1em;

      @include respond-below(md) {
        display: unset;
        height: 40%;
        top: 5.5%;
        left: 2em;
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
      position: relative;
      min-height: 300px;
      text-align: center;
      border-radius: 5px;

      @media (max-width: 1000px) {
        width: 96%;
      }

      .card-side {
        width: 100%;
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
        background-color: var(--color-secondary);
      }
      .card-side.back {
        transform: rotateY(-180deg);
        img {
          margin: 16px auto;
          width: 50%;
        }
      }
      &:hover .card-side.front {
        transform: rotateY(180deg);
      }
      &:hover .card-side.back {
        transform: rotateY(0deg);
      }

      @include respond-between(md, lg) {
        min-height: 350px;
      }

      @include respond-below(md) {
        min-height: 350px;
      }

      @include respond-below(sm) {
        min-height: 400px;
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
