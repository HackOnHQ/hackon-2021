<template>
  <Container id="workshops">
    <Modal
      v-show="isModalVisible"
      @close="closeModal()"
      :workshop="workshops[modalData]"
    />
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
                <img
                  :src="workshop.speaker.picture"
                  class="avatar"
                  alt="avatar"
                />
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
          name: "Building Tech Careers though the Open Source Julia Project",
          about: "",
          date: "23/04/2021",
          time: "8:30 PM",
          url: "https://www.youtube.com/watch?v=dAF59I5nLvw",
          speaker: {
            name: "Logan Kilpatrick",
            designation: "Community Manager, The Julia Language",
            about: "",
            picture: require("~/assets/Speakers/Logan.jpeg"),
          },
        },
        {
          name: "API Development 101",
          about: "",
          date: "01/05/2021",
          time: "8:00 PM",
          url: "https://www.youtube.com/watch?v=Y3AzcxLsqyQ",
          speaker: {
            name: "Ali Mustufa Shaikh",
            designation: "Student Community Manager, Postman",
            about: "",
            picture: require("~/assets/Speakers/Ali.jpg"),
          },
        },
        {
          name: "Low Code Development with Power Platform",
          about: "",
          date: "09/05/2021",
          time: "8:00 PM",
          url: "https://www.youtube.com/watch?v=LkxPhTdSvX0",
          speaker: {
            name: "Haimantika Mitra",
            designation: "Support Engineer Intern at Microsoft",
            about: "",
            picture: require("~/assets/Speakers/Haimantika.jpg"),
          },
        },
        {
          name: "Fundamentals of Kubernetes",
          about: "",
          date: "15/05/2021",
          time: "8:00 PM",
          url: "https://www.youtube.com/watch?v=gv9BmcbHrA4",
          speaker: {
            name: "Kunal Kushwaha",
            designation: "MLH Coach",
            about: "",
            picture: require("~/assets/Speakers/Kunal.jpg"),
          },
        },
        {
          name: "Intro to Full Stack Web Development",
          about: "",
          date: "16/05/2021",
          time: "8:00 PM",
          url: "https://www.youtube.com/watch?v=KeaaBBwnauM",
          speaker: {
            name: "Wilson Wang",
            designation: "Engineer Intern, OpenText",
            about: "",
            picture: require("~/assets/Speakers/Wilson-Wang.jpeg"),
          },
        },
        {
          name: "Intro to Full Stack Web Development",
          about: "",
          date: "16/05/2021",
          time: "8:00 PM",
          url: "https://www.youtube.com/watch?v=KeaaBBwnauM",
          speaker: {
            name: "Bowen Sun",
            designation: "",
            about: "",
            picture: require("~/assets/Speakers/Bowen-Sun.jpg"),
          },
        },
        {
          name: "Entreprenuerial Assets (Twitter Spaces)",
          about: "",
          date: "18/05/2021",
          time: "8:00 PM",
          url: "",
          speaker: {
            name: "Galicia Gordon",
            designation: "Founder, Leading Learners",
            about: "",
            picture: require("~/assets/Speakers/Galicia-Gordon.jpg"),
          },
        },
        {
          name: "Social Media for Devs (Twitter Spaces)",
          about: "",
          date: "19/05/2021",
          time: "8:00 PM",
          url: "",
          speaker: {
            name: "Priyanka Yadav",
            designation: "Software Engineer Intern, Commvault",
            about: "",
            picture: require("~/assets/Speakers/Priyanka.jpg"),
          },
        },
        {
          name: "Web3 Is A Cake With QuikNode",
          about: "",
          date: "20/05/2021",
          time: "6:00 PM",
          url: "https://www.youtube.com/watch?v=XFExMgnTSio",
          speaker: {
            name: "Sahil Sen",
            designation: "Developer Advocate, QuikNode",
            about: "",
            picture: require("~/assets/Speakers/Sahil-Sen.png"),
          },
        },
        {
          name: "Ask Me Anything",
          about: "",
          date: "21/05/2021",
          time: "8:00 PM",
          url: "https://www.youtube.com/watch?v=tZtXOAynxhY",
          speaker: {
            name: "Juan Pablo Flores Cortés",
            designation: "Program Manager, GitHub",
            about: "",
            picture: require("~/assets/Speakers/Juan-Pablo.png"),
          },
        },
        {
          name: "How to Create a Discord Bot and Host It 24/7 for Free!",
          about: "",
          date: "22/05/2021",
          time: "8:00 PM",
          url: "https://www.youtube.com/watch?v=rzxJgH9WwvI",
          speaker: {
            name: "Mara Hart",
            designation: "Returning Software Engineer Intern, Microsoft",
            about: "",
            picture: require("~/assets/Speakers/Mara.jpg"),
          },
        },
        {
          name: "Introduction to Tensorflow and Tensorflow.js",
          about: "",
          date: "23/05/2021",
          time: "8:00 PM",
          url: "https://www.youtube.com/watch?v=vE1hN4o4Ny0",
          speaker: {
            name: "Shivay Lamba",
            designation: "Google Summer of Code Mentor @ Tensorflow",
            about: "",
            picture: require("~/assets/Speakers/Shivay.jpg"),
          },
        },
        {
          name: "Progressive Web Apps - A Revolution into Mobile landscape",
          about: "",
          date: "24/05/2021",
          time: "4:30 PM",
          url: "https://www.youtube.com/watch?v=AWORI0G03DY",
          speaker: {
            name: "Ranjoy Sen",
            designation: "Staff Software Developer, Collins Aerospace",
            about: "",
            picture: require("~/assets/Speakers/Ranjoy.png"),
          },
        },
        {
          name: "Getting started with Symbl.ai in 15 mins",
          about: "",
          date: "24/05/2021",
          time: "9:30 PM",
          url: "https://www.youtube.com/watch?v=mIFr2hxqAUg",
          speaker: {
            name: "Eric Giannini",
            designation: "Lead Developer Evangelist, Symbl.ai",
            about: "",
            picture: require("~/assets/Speakers/Eric.jpeg"),
          },
        },
        {
          name: "Getting started with Symbl.ai in 15 mins",
          about: "",
          date: "24/05/2021",
          time: "9:30 PM",
          url: "https://www.youtube.com/watch?v=mIFr2hxqAUg",
          speaker: {
            name: "Akanksha Bhasin",
            designation: "Community Evangelist, Symbl.ai",
            about: "",
            picture: require("~/assets/Speakers/Akanksha.jpg"),
          },
        },
        {
          name: "How to make your Open Source Project a Success?",
          about: "",
          date: "25/05/2021",
          time: "8:30 PM",
          url: "https://www.youtube.com/watch?v=DwONvABme5M",
          speaker: {
            name: "Eddie Jaoude",
            designation: "GitHub Star of the Year",
            about: "",
            picture: require("~/assets/Speakers/Eddie.jpg"),
          },
        },
        {
          name: "Who's who in Azure AI",
          about: "",
          date: "26/05/2021",
          time: "8:00 PM",
          url: "",
          speaker: {
            name: "Stephen Simon",
            designation: "Regional Community Director, C# Corner",
            about: "",
            picture: require("~/assets/Speakers/Stephen-Simon.jpg"),
          },
        },
        {
          name: "How to build apps fast, right, and for the future",
          about: "",
          date: "27/05/2021",
          time: "5:00 PM",
          url: "",
          speaker: {
            name: "Yashraj Nayak",
            designation: "Community Growth Manager (APAC), OutSystems",
            about: "",
            picture: require("~/assets/Speakers/Yashraj.jpeg"),
          },
        },
        {
          name: "Let's Make Magic!",
          about: "",
          date: "27/05/2021",
          time: "8:00 PM",
          url: "",
          speaker: {
            name: "Mohammad Shahbaz Alam",
            designation: "Developer Advocate, Magic",
            about: "",
            picture: require("~/assets/Speakers/Mohammad-Shahbaz-Alam.png"),
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
        min-height: 150px;
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
          margin-top: 1rem;
          line-height: 1rem;

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
                color: rgba(255, 255, 255, 0.5);
              }
            }
          }

          .date {
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
