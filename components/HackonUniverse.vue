<template>
  <Container id="universe">
    <section class="content-section">
      <h1 class="hero-text">
        HACK<span style="color: #e58ab2">O</span>N UNIVERSE
      </h1>
      <div class="contents universe">
        <div class="cards-grid">
          <div v-for="(hackathon, index) in universe" :key="index" class="card">
            <a :href="hackathon.url" target="_blank">
              <div class="texts">
                <h4 class="title">
                  <img class="logo" :src="hackathon.logo" />
                  {{ hackathon.name }}
                </h4>
                <p class="about">{{ hackathon.about }}</p>
              </div>
              <div class="description">
                <div class="organiser">
                  <img :src="hackathon.organiser.picture" class="avatar" />
                  <div class="details">
                    <span class="name">
                      {{ hackathon.organiser.name }}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";

export default {
  components: {
    Container,
    HashHeader
  },
  data() {
    return {
      universe: [
        {
          name: "HackNagpur",
          logo: require("~/assets/HackonUniverse/hacknagpur.png"),
          about:
            "HackNagpur, the very first Central India’s biggest community-driven Hackathon, a platform to unleash innovative developers worldwide and come together virtually to ideate, innovate and inspire one another and the community. HN is the very first initiative by the community members of GDG Nagpur, bringing in together 20+ other communities to host this hackathon, for Innovators to brainstorm and create a virtual but real prototype.",
          url: "https://hacknagpur.tech/",
          organiser: {
            name: "Sohail Pathan",
            picture:
              "https://media-exp1.licdn.com/dms/image/C5103AQFUiHTuOwP-uw/profile-displayphoto-shrink_200_200/0/1574675509785?e=1623283200&v=beta&t=jj1fUKUQJyNnkMR_DUqwAZx-55HUWW4Z2KOsEmk6vVA"
          }
        },
        {
          name: "BU Hack",
          logo: require("~/assets/HackonUniverse/buhacks.png"),
          about:
            "BU'hack, the very first initiative by students of Bennett University to host an inter-hackathon under Zenevia - the first techfest of Bennett University. The competition like this which aims at developing something awesome within a limited timeframe infuses work pressure among the participants, testing them beyond their limits.",
          url: "https://bu-hack.tech/",
          organiser: {
            name: "Deep Patel",
            picture:
              "https://media-exp1.licdn.com/dms/image/C4E03AQHZZ4ykdwji8Q/profile-displayphoto-shrink_200_200/0/1593777967770?e=1623283200&v=beta&t=QWr76XeHeW4qm_1cfaqCvE1bTEpY27gunyJlnZ-gH-I"
          }
        },
        {
          name: "HackJaipur",
          logo: require("~/assets/HackonUniverse/hackjaipur.png"),
          about:
            "HackJaipur is a community-focused virtual Hackathon, designed especially for the needs of the communities, with problem statements centered around the community itself. Whether you are a beginner or an expert, here is the perfect chance to hone and show your skills and witness the competitive yet inclusive developer community around you!",
          url: "https://www.hackjaipur.com/",
          organiser: {
            name: "Mayank Goyal",
            picture:
              "https://media-exp1.licdn.com/dms/image/C4E03AQH-orTIbxY_YQ/profile-displayphoto-shrink_200_200/0/1601666357113?e=1623283200&v=beta&t=e5bduLLpKjd2FpqaNVRXm3GH2GbygFiOrn5Wi54WT84"
          }
        },
        {
          name: "HackChennai",
          logo: require("~/assets/HackonUniverse/hackchennai.jpg"),
          about:
            "HackChennai, a student-led virtual hackathon, brought to you by SRM HackerEarth, the Official Campus Club of HackerEarth at SRM Institute of Science and Technology, Kattankulathur, is bound to drive your quarantine blues away! With innovative tracks based on the need of the hour, HackChennai implores all the aspiring strategists to share their vision with the community.",
          url: "https://www.hackchennai.in/",
          organiser: {
            name: "Aaishika S Bhattacharya",
            picture:
              "https://media-exp1.licdn.com/dms/image/C5603AQH10Aaq7XorYA/profile-displayphoto-shrink_200_200/0/1602915695424?e=1623283200&v=beta&t=7WZBR7s7wO4OqbvywJQ6P5-GUiM52EmZjQi8muULka0"
          }
        },

        {
          name: "Hack This Fall",
          logo: require("~/assets/HackonUniverse/hackthisfall.png"),
          about:
            "Hack This Fall is a 24 Hours Virtual Hackathon where we aim to promote Hackers and help them nurture their new ideas and prototypes in various fields of tech. This can help us to solve the shared problems of our society and bring a change in a revolutionary way. Here, we will talk about various technologies, create awareness, encourage others, Hack to contribute and many more exciting events & sessions. We have various tracks under which you can choose your hack",
          url: "https://hackthisfall.tech/",
          organiser: {
            name: "Siddharth Dayalwal",
            picture:
              "https://media-exp1.licdn.com/dms/image/C4D03AQG3Ijm4ORcasQ/profile-displayphoto-shrink_200_200/0/1612435094711?e=1623283200&v=beta&t=zpPrJ6VHNhZ_f0rzOlO4_C7jXttZDjA7AgeqeGbQZSg"
          }
        },
        {
          name: "AmiHacks",
          logo: require("~/assets/HackonUniverse/amihacks.png"),
          about:
            "Usually AMI-HACKS is a 24-hour hackathon, or “creative marathon”. We were founded in 2019 and are now in our 3rd iteration, having grown from 122 to 700+ attendees. We provide a unique space for hundreds of passionate technologists to share their experiences, meet new people and learn something new - gaining valuable skills in the process.",
          url: "https://www.amihacks.tech/",
          organiser: {
            name: "Arshad Khan",
            picture:
              "https://media-exp1.licdn.com/dms/image/C4E03AQFAxdsfFWHWUw/profile-displayphoto-shrink_200_200/0/1611300787974?e=1623283200&v=beta&t=zNRji0xP-uUh5jueshZJCChOtQFqDPutI5eWm8Fqtqw"
          }
        },
        {
          name: "Unblock",
          logo: require("~/assets/HackonUniverse/unblock.png"),
          about:
            "Unblock 2021 is a celebration of software development that aims to spark interest in amateur and expert developers alike. We want to help you make blockchain better through developing robust, relevant applications that can bring value to people.",
          url: "https://unblock.octaloop.com/",
          organiser: {
            name: "Anupam Varshney",
            picture:
              "https://media-exp1.licdn.com/dms/image/C4E03AQHzdKFE_ymwlA/profile-displayphoto-shrink_200_200/0/1531452867828?e=1623283200&v=beta&t=NS7GHfMWZvhRJR20opRbFJo36YtejO6CWlOJ-kkPTHw"
          }
        },
        {
          name: "Hackverse",
          logo: require("~/assets/HackonUniverse/hackverse.webp"),
          about:
            "HackVerse serves as a platform to encourage enthusiastic minds to brainstorm on solutions for challenging issues from all over India. The unified motive of gathering all like-minded hackers to our alma mater, is what led to the creation of the idea in NITK Surathkal, the first of its kind. We’ll provide a platform for innovations, where developers can test and showcase their potential to the best of their abilities. The hackathon will also have keynotes & workshops from executives from the industry.",
          url: "https://hackverse.nitk.ac.in/",
          organiser: {
            name: "Aastha Chowdhary",
            picture:
              "https://media-exp1.licdn.com/dms/image/C4D03AQFh8xqfHflwsQ/profile-displayphoto-shrink_200_200/0/1617365190244?e=1623283200&v=beta&t=KK_Pppfwgjd82Ortl1QsqkK5bGm-D0-g6b7bXXvLpBs"
          }
        },
        {
          name: "Vihaan",
          logo: require("~/assets/HackonUniverse/vihaan.png"),
          about:
            "Vihaan is an annual event organized by IEEE DTU Women in Engineering (WIE) Affinity Group, a university wide professional organization dedicated to encourage women to take up and continue their careers in STEM Fields. IEEE WIE believes in encouraging talent that is not bounded by gender inequalities and with Vihaan, IEEE DTU aims at carrying this thought forward. The event is a 24 hour Hackathon which provides a platform to budding programmers to come up with a solution to an existing problem using technology.",
          url: "https://vihaan.ieeedtu.in/",
          organiser: {
            name: "Ritwik Ranjan",
            picture: require("~/assets/HackonUniverse/ritwik.jpeg")
          }
        },
        {
          name: "Hack A Nova",
          logo: require("~/assets/HackonUniverse/hackanova.jpg"),
          about:
            "Hack-A-Nova imparts you the platform to showcase your ideas and technical skills at a recognized level. Compete with the brightest minds in the country and establish yourself as the best among them. We warmly invite you all to forge out your creativity, embody the spirit of innovation and disrupt the current normal!",
          url: "https://hack-a-nova.web.app/",
          organiser: {
            name: "Seemant Aggarwal",
            picture:
              "https://media-exp1.licdn.com/dms/image/C5603AQGiluhAHVv1Iw/profile-displayphoto-shrink_200_200/0/1587819081359?e=1623283200&v=beta&t=QmJk8ZqIAuZf1TKR2bwEiKtn8QdV3PnFTLl7aSSPXkA"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  .hero-text {
    font-size: 3.6rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    font-family: var(--title-font);

    @include respond-below(sm) {
      font-size: 2.4rem;
    }
  }

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
        position: relative;
        flex-direction: column;
        padding: 20px 20px 20px 28px;
        background: var(--color-secondary-light);
        border-radius: 10px;
        min-height: 150px;
        font-family: "Roboto Mono";
        cursor: pointer;

        a {
          color: white;
          .texts {
            flex: 1;
            .title {
              font-size: 1.6rem;
              font-weight: 500;
              padding-bottom: 10px;

              .logo {
                max-height: 40px;
                margin-bottom: -10px;
              }
            }

            .about {
              width: 95%;
              text-align: justify;
              font-size: 1rem;
              color: rgba(255, 255, 255, 0.9);
              margin-bottom: 3.7rem;
              margin-top: 0.7rem;
            }
          }

          .description {
            position: absolute;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            font-size: 1rem;
            margin-top: 1rem;
            bottom: 1rem;

            .organiser {
              display: flex;
              align-items: center;
              img.avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
              }
              .details {
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
