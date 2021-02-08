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
    Modal
  },
  data() {
    return {
      workshops: [
        {
          name: "Let's Be Faster than COVID with AMP",
          about:
            "Ever wanted pages to load quickly on mobile devices, but not sure about how to do that? AMP or Accelerated Mobile Pages is a Google-backed project that can help you do this! Interested in knowing more about it? Hear it from a Googler itself! ❤️",
          date: "11/04/2020",
          time: "7:00 PM",
          speaker: {
            name: "Saurabh Rajpal",
            designation: "Technical Solutions Consultant, Google",
            picture:
              "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/4e828a778c604399913a1dd4e4d87e21/265.png"
          }
        },
        {
          name: "Community as a Cure",
          about:
            "Talk about the importance of communities, and how a group of like-minded people can bring about an essential change in our lives.",
          date: "10/04/2020",
          time: "9:00 PM",
          speaker: {
            name: "Paras Pundir",
            designation: "Program Manager, Reactor Bangalore, Microsoft",
            about:
              "Paras is the Program Manager at Microsoft Reactor, Bangalore, who is also the Community Professional of the Year 2020.",
            picture:
              "https://miro.medium.com/fit/c/1360/1360/2*1d2PU06qLbaY-3EqeQBUZQ.jpeg"
          }
        },
        {
          name: "Brand Storytelling",
          about:
            "Workshop: Building your Personal Brand by none other than the amazing personality Miri Rodriguez! She is probably the first person you would want to consult if you want your personal brand. So don't let go of this wonderful opportunity!💖",
          date: "15/04/2020",
          time: "10:00 PM",
          speaker: {
            name: "Miri Rodriguez",
            designation: "Head of Global Internship Program, Microsoft",
            about:
              "Miri is the Head of Global Internship Program at Microsoft and the author of Brand Storytelling.",
            picture:
              "https://media-exp1.licdn.com/dms/image/C5603AQGccVXExmWSeg/profile-displayphoto-shrink_800_800/0/1585676059716?e=1617840000&v=beta&t=UV7D6RHqvHtQcVKCPfbyXxyXcXCM9setOzo4XI5NBlE"
          }
        },
        {
          name: "Power of Communities",
          about:
            "Talk about the importance of communities, and how a group of like-minded people can bring about an essential change in our lives.💖",
          date: "17/04/2020",
          time: "10:00 PM",
          speaker: {
            name: "Nikita Gandhi",
            designation: "Community Manager, Google",
            about:
              "Nikita is the Community Manager at Google Developers and was a Project Coordinator at Google.",
            picture:
              "https://assets.devfolio.co/hackathons/be0de8e087c844d79199695d8997779f/judges/503be308d27942c6af30aa665c9e2940/430.png"
          }
        },
        {
          name: "The World of Web Components",
          about:
            "Get ready to dive into single page applications, component based web, web component specifications and a lot more!",
          date: "18/04/2020",
          time: "6:00 PM",
          speaker: {
            name: "Nishu Goel",
            designation: "Google Developer Expert",
            about:
              "Nishu is a Google Developers Experts(GDE) for Angular and Web Technologies and a Developer at UI Garage, IBM.",
            picture:
              "https://assets.devfolio.co/hackathons/be0de8e087c844d79199695d8997779f/judges/976dbbca2b7346d781894b11d4bca2f5/350.jpeg"
          }
        },
        {
          name: "Getting Started with Angular",
          date: "12/04/2020",
          time: "7:00 PM",
          speaker: {
            name: "Dhananjay Kumar",
            designation: "Most Valuable Professional, Microsoft",
            picture:
              "https://assets.devfolio.co/hackathons/be0de8e087c844d79199695d8997779f/judges/519c888869584eefa120edf5e4971e22/652.jpeg"
          }
        },
        {
          name: "Taking flight with Flutter",
          about:
            "Realise the power of Flutter and start making cross-platform applications with Flutter.",
          date: "16/04/2020",
          time: "10:00 PM",
          speaker: {
            name: "Pawan Kumar",
            designation: "Google Developer Expert",
            about:
              "Pawan is the Founder of MTechViral, and a Google Developers Experts (GDE) for Flutter by Google, Firebase, Dart and Web Tech.",
            picture:
              "https://media-exp1.licdn.com/dms/image/C4E03AQFU_Pks7-2qbA/profile-displayphoto-shrink_200_200/0/1610945863156?e=1617840000&v=beta&t=_pkadk5xabdD-LyBnReydJnHuO5T76OYBQZfiBdxHfc"
          }
        },
        {
          name: "Hackathon 101",
          about:
            "Never participated in a hackathon? Don't worry. HackOn brings to you Hackathon 101 by Jatin Katyal, the absolute champion of hackathons!",
          date: "11/04/2020",
          time: "4:00 PM",
          speaker: {
            name: "Jatin Katyal",
            designation: "Software Engineer, Coding Blocks",
            about:
              "Jatin is a full-stack web developer, who has won numerous hackathons, and is extremely passionate about them.",
            picture:
              "https://assets.devfolio.co/hackathons/be0de8e087c844d79199695d8997779f/judges/bea23fa33ba74fa589fa2d56b958741a/309.jpeg"
          }
        },
        {
          name: "Intro to Git/GitHub",
          about:
            "This is a hands-on workshop that will teach you how Git and GitHub have been revolutionizing teamwork, how to work remotely and how version control systems are useful. ✨",
          date: "11/04/2020",
          time: "10:00 PM",
          speaker: {
            name: "Gunnika Batra",
            designation: "GitHub Campus Expert",
            about:
              "Gunnika is a GitHub Campus Expert and Google Code-in '19 mentor for TensorFlow.",
            picture:
              "https://he-s3.s3.amazonaws.com/media/avatars/b.gunnika/resized/180/aaue7mbcptlsehn0xoe6ddpcxas8dthvswnxzds8y6eynlq"
          }
        },
        {
          name: "What is a Full Stack Developer and how to become One!",
          date: "14/04/2020",
          time: "10:00 PM",
          speaker: {
            name: "Arnav Gupta",
            designation: "Engineering Lead, Zomato",
            about:
              " Arnav is a Co-Founder at Coding Blocks and was an Android Lead at Zomato.",
            picture:
              "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/de2017b2f5cd44da90dc782b28469487/703.jpeg"
          }
        },
        {
          name: "Webscraping with Python - 101",
          date: "15/04/2020",
          time: "4:00 PM",
          about:
            "This is a hands-on workshop that will teach you what web scraping is, and how to perform web scraping using Python libraries like Beautiful Soup!",
          speaker: {
            name: "Saketha Ramanujam",
            designation: "GitHub Campus Expert",
            picture:
              "https://res.cloudinary.com/stuartlittle/image/upload/v1587120916/me/ID.jpg"
          }
        },
        {
          name: "Elastic App Search Demo",
          about:
            "Building a web application to solve a business problem is easy in today's world. But this workshop will teach you how to create an experience that lets the user spend more time on your service.",
          date: "16/04/2020",
          time: "6:00 PM",
          speaker: {
            name: "Aravind Putrevu",
            designation: "Senior Developer Advocate, Elastic",
            about:
              "Aravind is a Senior Developer Advocate at Elastic, a tech evangelist and a FOSS enthusiast.",
            picture:
              "https://assets.devfolio.co/hackathons/be0de8e087c844d79199695d8997779f/judges/9162cfc964dd43babff57c68122d6906/460.jpeg"
          }
        }
      ],
      isModalVisible: false,
      modalData: 0
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
    }
  }
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
