<template>
  <Container id="amagiAndElastic">
    <div class="contents">
      <SubHashHeader title="Sponsored Prizes" />
      <div class="sponsoredPrizes">
        <div class="cardGrid">
          <div v-for="(prize, index) in sponsoredPrizes" :key="index">
            <div class="card">
              <img
                class="background"
                :style="{ width: `${prize.width}`, top: `${prize.top}` }"
                :src="prize.background"
                alt="background"
              />
              <div class="companyImage">
                <img :src="prize.logo" alt="logo" />
                <h4>{{ prize.name }}</h4>
              </div>
              <div class="details">
                <img v-if="prize.detailImage" :src="prize.detailImage" />
                <h4>
                  {{ prize.heading }}
                </h4>
                <p v-for="(para, index) in prize.description" :key="index">
                  {{ para }}
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
    SubHashHeader
  },
  data() {
    return {
      sponsoredPrizes: [
        {
          name: "Amagi",
          background: require("~/assets/Prizes/amagiTransparent.png"),
          logo: require("~/assets/Prizes/amagiLogo.svg"),
          heading: "Best Women and LGBTQIA+ Team",
          description: [
            "The best team consisting of women and/or LGBTQIA+ members only will be eligible for a prize of ₹5000",
            "The top teams (up to 50 participants total) of this track shall be connected with Amagi for a chance to earn future work opportunities."
          ],
          width: "90%",
          top: "150px"
        },
        {
          name: "Elastic",
          detailImage: require("~/assets/Prizes/5000.svg"),
          background: require("~/assets/Prizes/elasticTransparent.png"),
          logo: require("~/assets/Prizes/elasticLogo.svg"),
          heading: "Best Hack Built On Elastic",
          description: [
            "The best hack that implements Elastic shall be eligible for a prize of ₹5000"
          ],
          width: "60%",
          top: "30px"
        }
      ]
    };
  }
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
        min-height: 400px;
        padding: 20px;
        overflow: hidden;

        @include respond-below(xs) {
          flex-direction: column;
          text-align: center;
        }

        .background {
          position: absolute;

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
          background-color: #0c0d21e7;
          padding: 20px;
          min-height: calc(100% - 80px);
          text-align: center;
          border-radius: 10px;
          right: 30px;
          width: 50%;

          @include respond-below(xs) {
            position: unset;
            width: unset;
            right: unset;
            background-color: #0c0d21;
          }

          img {
            width: 70%;
            margin-top: 30px;
            margin-bottom: 50px;
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
