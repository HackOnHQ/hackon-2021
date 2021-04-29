<template>
  <Container id="prizes">
    <PolygonModal v-show="isModalVisible" @close="closeModal()" />
    <section class="content-section">
      <HashHeader title="Prizes" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(prize, index) in prizes" :key="index">
            <div
              class="card"
              v-bind:class="[prize.polygon ? 'clickable' : '']"
              @click="showModal(prize.polygon)"
            >
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
        <div class="cards-grid">
          <div v-for="(prize, index) in specialPrizes" :key="index">
            <div
              class="card"
              v-bind:class="[prize.polygon ? 'clickable' : '']"
              @click="showModal(prize.polygon)"
            >
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
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
import PolygonModal from "~/components/PolygonModal";

export default {
  components: {
    Container,
    HashHeader,
    PolygonModal,
  },
  data() {
    return {
      isModalVisible: false,
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
      specialPrizes: [
        {
          name: "Best Hack Built On Polygon",
          image: require("~/assets/Prizes/polygon.svg"),
          amount: "₹5,000",
          polygon: true,
        },
        {
          name: "Best Hack Built On Elastic",
          image: require("~/assets/Prizes/elastic.png"),
          amount: "₹5,000",
        },
        {
          name: "Best Hack Built On Voice",
          image: require("~/assets/Prizes/voice.svg"),
          amount: "₹5,000",
        },
      ],
    };
  },
  methods: {
    showModal(isPolygon) {
      if (!isPolygon) return;
      this.isModalVisible = true;
      document.querySelector("body").style.overflow = "hidden";
    },
    closeModal() {
      this.isModalVisible = false;
      document.querySelector("body").style.overflow = "initial";
    },
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  .contents {
    .cards-grid {
      padding: 20px 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
      row-gap: 30px;
      align-content: center;

      &:nth-child(2) {
        grid-template-columns: repeat(5, 1fr);
        padding-top: 0px;
      }

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);

        &:nth-child(2) {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(1, 1fr);

        &:nth-child(2) {
          grid-template-columns: repeat(1, 1fr);
        }
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

      .clickable {
        cursor: pointer;
      }
    }
  }
}
</style>
