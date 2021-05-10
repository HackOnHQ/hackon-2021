<template>
  <Container id="graphCMS">
    <div class="contents">
      <div class="cards-grid">
        <img
          class="background"
          src="~/assets/Prizes/mlhTransparent.png"
          alt="background"
        />
        <div class="company">
          <img src="~/assets/Prizes/mlh.png" alt="magic logo" />
          <h1>MLH</h1>
        </div>
        <div v-for="(prize, index) in magicLabPrizes" :key="index" :class="['card', prize.specialClass]">
          <div class="image">
            <img v-if="prize.image1" :src="prize.image1" :alt="prize.name" class="prizeImage1" />
            <img v-if="prize.image2" :src="prize.image2" alt="amazon logo" class="prizeImage2" />
          </div>
          <div class="texts">
            <h4 class="prizeName">{{ prize.name }}</h4>
            <p class="prizeDescription">{{ prize.description }}</p>
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
          name: "Best Hardware Hack Sponsored by Digi-Key x 2",
          image1: require("~/assets/Prizes/7500-amazon.svg"),
          image2: require("~/assets/Prizes/amazon.png"),
          description:
            "Using your preferred hardware or hardware emulator, build a hack for your chance to win a Grove Beginner Kit, with an embedded Arduino compatible board. 1 prize for each winning team member with 2 winning teams per event!",
        },
        {
          name: "Best Use of Linode",
          image1: require("~/assets/Prizes/5000-amazon.svg"),
          image2: require("~/assets/Prizes/amazon.png"),
          description:
            "Use any one of Linode's wide array of cloud products and take your hack to the next level! Whether you're looking for data storage, compute power or hosting, Linode has what you need and the complimentary credits to get you started. Sign up and start hacking for your chance to win a Raspberry Pi 4 Starter Kit.",
        },
        {
          name: "",
          description:"",
          specialClass:"hidden"
        },
        {
          name: "Best Domain Name from GoDaddy Registry",
          image1: require("~/assets/Prizes/5000-amazon.svg"),
          image2: require("~/assets/Prizes/amazon.png"),
          description:
            "GoDaddy Registry is giving you everything you need to be the best hacker no matter where you are. Register your domain name with GoDaddy Registry for a chance to win a Hack from Home Kit! Each Kit contains wireless earbuds, blue light glasses, selfie ring light and a pouch for easy transport.",
        },
        {
          name: "Best Use of Jina",
          image1: require("~/assets/Prizes/5000-amazon.svg"),
          image2: require("~/assets/Prizes/amazon.png"),
          description:
            "Jina is an open-source search framework that makes building AI-powered search applications even easier for hackers. Create search functionality that matches all kinds of data, including text, images, video & more! Hack with Jina for a chance to win Arduino Tiny Machine Learning Kits for you and your team!",
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
      top: 10%;
      left: 4rem;

      @include respond-below(lg) {
        left: 2rem;
      }

      @include respond-below(md) {
        top: 15%;
        left: 2rem;
      }

      @include respond-below(sm) {
        height: 10rem;
        top: 10rem;
        left: 2rem;
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
      position: relative;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      padding: 15px;
      background: var(--color-secondary);
      border-radius: 5px;

      &.hidden {
        background: transparent;

        @include respond-below(sm) {
          display: none;
        }
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
