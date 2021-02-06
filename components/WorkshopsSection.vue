<template>
  <Container id="workshops">
    <Modal
      v-show="isModalVisible"
      @close="closeModal()"
      :workshop="workshops[modalData]"
    />
    <section class="content-section">
      <HashHeader title="Past Workshops" />
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
                {{ workshop.date }} <wbr />{{ workshop.time }}
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
          name: "Community as a Cure",
          date: "10/04/2020",
          time: "9:00 PM",
          speaker: {
            name: "Paras Pundir",
            designation: "Program Manager, Reactor Bangalore",
            picture: "https://miro.medium.com/fit/c/1360/1360/2*1d2PU06qLbaY-3EqeQBUZQ.jpeg",
          },
        },
        {
          name: "What is a Full Stack Developer and how to become One!",
          date: "14/04/2020",
          time: "10:00 PM",
          speaker: {
            name: "Arnav Gupta",
            designation: "Engineering Lead, Zomato",
            picture:
              "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/de2017b2f5cd44da90dc782b28469487/703.jpeg",
          },
        },
        {
          name: "Hackathon 101",
          date: "11/04/2020",
          time: "4:00 PM",
          speaker: {
            name: "Jatin Katyal",
            designation: "Engineering Lead, Zomato",
            picture:
              "https://assets.devfolio.co/hackathons/be0de8e087c844d79199695d8997779f/judges/bea23fa33ba74fa589fa2d56b958741a/309.jpeg",
          },
        },
        {
          name: "Brand Storytelling",
          date: "15/04/2020",
          time: "10:00 PM",
          speaker: {
            name: "Miri Rodriguez",
            designation: "Head of Global Internship Program, Microsoft",
            picture:
              "https://media-exp1.licdn.com/dms/image/C5603AQGccVXExmWSeg/profile-displayphoto-shrink_800_800/0/1585676059716?e=1617840000&v=beta&t=UV7D6RHqvHtQcVKCPfbyXxyXcXCM9setOzo4XI5NBlE",
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

              .name {
                // margin-bottom: -0.4rem;
              }

              .designation {
                margin-top: -1rem;
                color: rgba(255, 255, 255, 0.5);
                // line-height: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
