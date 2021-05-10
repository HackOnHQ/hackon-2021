<template>
  <Container id="amagiAndElastic">
    <div class="contents">
      <SubHashHeader title="Sponsored Prizes" />
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
                <img :src="prize.logo" alt="logo" />
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
                    <img v-if="prize.detailImage" :src="prize.detailImage" />
                    <p v-for="(para, index) in prize.description" :key="index">
                      <span v-html="para">{{}}</span>
                    </p>
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
          name: "Amagi",
          detailImage: require("~/assets/Prizes/5000.svg"),
          background: require("~/assets/Prizes/amagiTransparent.png"),
          logo: require("~/assets/Prizes/amagiLogo.svg"),
          heading: "Best Women and LGBTQIA+ Team",
          details:
            "The best hack built by a team with only women and/or LGBTQIA+ members",
          description: [
            "● ₹5000 Prize to winning team",
            "● The top teams (up to 50 participants total) of this track shall be connected with Amagi for a chance to earn future work opportunities.",
          ],
        },
        {
          name: "Elastic",
          detailImage: require("~/assets/Prizes/5000.svg"),
          background: require("~/assets/Prizes/elasticTransparent.png"),
          logo: require("~/assets/Prizes/elasticLogo.svg"),
          heading: "Best Hack Built On Elastic",
          details: "The best hack built using Elastic",
          description: ["₹5000 Prize to winning team"],
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

          &.Elastic {
            height: 70%;
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

          @include respond-below(xs) {
            position: unset;
            margin-bottom: 20px;
          }

          @include respond-between(md, lg) {
            left: 3.5%;
            img {
              width: 100px;
            }
          }

          img {
            width: 120px;
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
            background-color: #0c0d21;
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
