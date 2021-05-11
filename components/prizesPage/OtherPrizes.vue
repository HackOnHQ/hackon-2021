<template>
  <Container id="otherPrizes">
    <div class="contents">
      <SubHashHeader title="Other Prizes" />
      <div class="otherPrizes">
        <div class="cards-grid">
          <div class="company">
            <img src="~/assets/Prizes/Logo.svg" alt="hackon logo" />
            <h1>HackOn Foundation</h1>
          </div>
          <div v-for="(prize, index) in otherPrizes" :key="index">
            <div class="card">
              <div class="card-side front">
                <div class="texts">
                  <h4 class="prizeName" v-html="prize.name">{{}}</h4>
                  <p class="prizeDescription" v-html="prize.details">{{}}</p>
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
    </div>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import SubHashHeader from "~/components/SubHashHeader";

export default {
  components: {
    Container,
    SubHashHeader,
  },
  data() {
    return {
      otherPrizes: [
        {
          name: "Best of Hack<span style=\"color: #E58AB2\">O</span>n <span style=\"color: #00FFA4\">x</span> 7",
          image: require("~/assets/Prizes/5000.svg"),
          details: "The teams ranked 4th-10th overall at Hack<span style=\"color: #E58AB2\">O</span>n 2.0",
          description: ["₹5000 Prize to all winning teams"],
        },
        {
          name: "Best Voice Hack",
          image: require("~/assets/Prizes/alexaDot.png"),
          details:
            "The best hack built using voice technologies such as Amazon Alexa Skills, Google Assistant Actions, etc.",
          description: ["Amazon Alexa Echo Dot (3rd Gen)"],
        },
        {
          name: "Best Beginner Hack",
          image: require("~/assets/Prizes/sonyHeadphones.png"),
          details:
            "The best hack built by a team of new hackers (At least ≥50% members should be hacking for the first time)",
          description: ["Sony Headphones (Model MDR - XB450AP)"],
        },
      ],
    };
  },
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
        position: relative;
        min-height: 300px;
        text-align: center;

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
          background-color: var(--color-secondary-light);
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
          min-height: 430px;
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
