<template>
  <Container id="workshops">
    <Modal v-show="isModalVisible" @close="closeModal()" :workshop="workshops[modalData]" />
    <section class="content-section">
      <HashHeader title="Workshops" />
      <div class="contents workshops">
        <div class="cards-grid">
          <div
            v-for="(workshop, index) in workshops"
            :key="index"
            class="card"
            @click="showModal(index)"
          >
            <div class="texts">
              <h4 class="title">{{ workshop.name }}</h4>
              <p class="about">{{ workshop.about }}</p>
            </div>
            <div class="description">
              <div class="speaker">
                <img :src="workshop.speaker.picture" class="avatar" />
                <div class="details">
                  <span class="name">
                    {{ workshop.speaker.name }}
                  </span>
                  <span class="designation">
                    {{ workshop.speaker.designation }}
                  </span>
                </div>
              </div>
              <div class="date">
                {{ workshop.date }}
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
import Modal from "~/components/Modal";

export default {
  components: {
    Container,
    HashHeader,
    Modal,
  },
  data() {
    return {
      workshops: [
        {
          name: "Workshop Title",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",
          date: "12/10/2020 9:30 am",
          speaker: {
            name: "Musthaq Ahamad",
            designation: "Designation",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",

            picture: "https://github.com/haxzie.png",
          },
        },
        {
          name: "Introduction to Prototyping with Figma",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velurna lectus arcu ipsum aliquam sit ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velurna lectus arcu ipsum aliquam sit ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velurna lectus arcu ipsum aliquam sit ornare. ",
          date: "12/10/2020 9:30 am",
          speaker: {
            name: "Musthaq Ahamad",
            designation: "UI/UX Designer",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",

            picture: "https://github.com/haxzie.png",
          },
        },
        {
          name: "Introduction to Prototyping with Figma",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velurna lectus arcu ipsum aliquam sit ornare.",
          date: "12/10/2020 9:30 am",
          speaker: {
            name: "Musthaq Ahamad",
            designation: "Designation",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",

            picture: "https://github.com/haxzie.png",
          },
        },
        {
          name: "Introduction to Prototyping with Figma",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velurna lectus arcu ipsum aliquam sit ornare.",
          date: "12/10/2020 9:30 am",
          speaker: {
            name: "Musthaq Ahamad",
            designation: "Designation",
            about:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",

            picture: "https://github.com/haxzie.png",
          },
        },
      ],
      isModalVisible: false,
      modalData: 0,
    };
  },
  methods: {
    showModal(index) {
      this.isModalVisible = true;
      this.modalData = index;
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".workshops").classList.add = "modalOpen";
    },
    closeModal() {
      this.isModalVisible = false;
      this.modalData = 0;
      document.querySelector("body").style.overflow = "initial";
      document.querySelector(".workshops").classList.remove = "modalOpen";
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
    padding: 10px 0;

    .cards-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 20px;

      @include respond-below(sm) {
        grid-template-columns: 1fr;
      }

      .card {
        display: flex;
        flex-direction: column;
        padding: 15px 24px;
        background: var(--color-secondary-light);
        border-radius: 5px;
        min-height: 200px;
        font-family: "Roboto Mono";
        cursor: pointer;

        .texts {
          flex: 1;
          .title {
            font-size: 1.4rem;
            font-weight: 400;
            padding-bottom: 10px;
          }

          .about {
            width: 90%;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.9);
          }
        }

        .description {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          font-size: 0.8rem;

          .speaker {
            display: flex;
            align-items: center;
            img.avatar {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 10px;
            }
            .details {
              display: flex;
              flex-direction: column;
              justify-content: center;

              .designation {
                margin-top: -1rem;
                color: rgba(255, 255, 255, 0.5);
              }
            }
          }
        }
      }
    }
  }
}
</style>
