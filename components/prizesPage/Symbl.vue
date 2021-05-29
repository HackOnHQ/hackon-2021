<template>
  <Container id="symbl">
    <div class="contents">
      <div class="sponsoredPrizes">
        <div class="cardGrid">
          <div v-for="(prize, index) in sponsoredPrizes" :key="index">
            <div class="card">
              <img
                :class="['background', prize.name]"
                :src="prize.background"
                alt="background"
              />
              <div class="companyImage">
                <div class="image">
                  <img :src="prize.logo" alt="logo" />
                </div>
                <h4>{{ prize.name }}</h4>
              </div>
              <div class="details">
                <div class="inner">
                  <div class="card-side front">
                    <h4>
                      {{ prize.heading }}
                    </h4>
                    <p>
                      <span v-html="prize.details">{{}}</span>
                    </p>
                  </div>
                  <div class="card-side back">
                    <div class="image">
                      <img
                        :src="prize.image1"
                        :alt="prize.name"
                        class="prizeImage1"
                      />
                      <img
                        :src="prize.image2"
                        alt="amazon logo"
                        class="prizeImage2"
                      />
                    </div>
                    <div class="texts">
                      <h4 class="prizeName">{{ prize.description }}</h4>
                    </div>
                  </div>
                </div>
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
      sponsoredPrizes: [
        {
          name: "Symbl.ai",
          image1: require("~/assets/Prizes/100-usd.svg"),
          image2: require("~/assets/Prizes/amazon.png"),
          background: require("~/assets/Prizes/symblTransparent.png"),
          logo: require("~/assets/Prizes/symbl.png"),
          heading: "Best use of Symbl.ai",
          details: "The best hack built using the Symbl APIs",
          description: "$100 Amazon Voucher to winning team",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contents {
  padding: 20px 0;

  .sponsoredPrizes {
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

    .cardGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(1, 1fr);
      }
      .card {
        background-color: var(--color-secondary-light) !important;
        position: relative;
        border-radius: 10px;
        display: flex;
        min-height: 350px;
        padding: 20px;
        overflow: hidden;

        @include respond-below(xs) {
          flex-direction: column;
          text-align: center;
        }

        .background {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);

          &.Symbl.ai {
            height: 80%;
          }

          @include respond-below(xs) {
            display: none;
          }
        }

        .companyImage {
          text-align: center;
          position: absolute;
          top: 33%;
          left: 10%;

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

          @include respond-below(xs) {
            position: unset;
            margin-bottom: 20px;

            .image {
              margin: 0 auto 10px;
            }
          }

          @include respond-between(md, lg) {
            left: 3.5%;
            .image {
              width: 100px;
            }
          }

          h4 {
            font-family: "Sen";
            font-size: 1.6rem;
            font-weight: 600;
          }
        }

        .details {
          position: absolute;
          min-height: calc(100% - 80px);
          text-align: center;
          border-radius: 10px;
          right: 30px;
          width: 56%;

          .inner {
            position: relative;
            min-height: 350px;
            @media (max-width: 580px) {
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
            }
            &:hover .card-side.front {
              transform: rotateY(180deg);
            }
            &:hover .card-side.back {
              transform: rotateY(0deg);
            }
          }

          @include respond-below(xs) {
            position: unset;
            width: unset;
            right: unset;
          }

          img {
            width: 70%;
            margin: 16px auto;
          }

          h4 {
            font-family: "Sen";
            font-size: 1.6rem;
            font-weight: 600;
          }

          p {
            margin-top: 20px;
            font-family: "Sen";
            font-size: 1.13rem;

            @include respond-between(md, lg) {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
