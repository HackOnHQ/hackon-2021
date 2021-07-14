<template>
  <Container id="team2021">
    <section class="content-section">
      <HashHeader title="HackOn Team 2021" />
      <div class="contents">
        <div class="team-grid">
          <div
            v-for="(teamMember, index) in team"
            :key="index"
            class="team-card"
          >
            <div class="picture-wrapper">
              <img
                :src="teamMember.picture"
                alt="profile picture"
                class="profile-pic"
              />
            </div>
            <h4 class="title">{{ teamMember.name }}</h4>
            <p class="description">{{ teamMember.description }}</p>
            <div class="socialLinks">
              <a
                :href="teamMember.linkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="~/assets/linkedin.svg" alt="LinkedInLink" />
              </a>
              <a
                :href="teamMember.github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="~/assets/github.svg" alt="GithubLink" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HashHeader title="Founder" />
      <div class="contents">
        <div class="team-grid">
          <div class="team-card">
            <div class="picture-wrapper">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGN9WF9aic8Aw/profile-displayphoto-shrink_200_200/0/1608998142556?e=1625702400&v=beta&t=w4s3tmsCcollSmJvlvazPiqQ6rcB7WBfq92ru4Il74I"
                alt="profile picture"
                class="profile-pic"
              />
            </div>
            <h4 class="title">Rishabh Bansal</h4>
            <div class="socialLinks">
              <a
                href="https://www.linkedin.com/in/rishabhbansal97/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="~/assets/linkedin.svg" alt="LinkedInLink" />
              </a>
              <a
                href="https://github.com/rishabh-bansal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="~/assets/github.svg" alt="GithubLink" />
              </a>
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

export default {
  components: {
    Container,
    HashHeader,
  },
  data() {
    return {
      team: [
        {
          name: "Musthaq Ahamad",
          //   description:
          //     "Building @localeai. UX Engineer. I write, design and build things on the internet",
          picture:
            "https://avatars.githubusercontent.com/u/53584487?s=460&u=958300368b2eae87277477bf1fcead4dfa2e31ec&v=4",
          linkedIn: "https://www.linkedin.com/in/haxzie/",
          github: "https://github.com/haxzie",
        },
        {
          name: "Shubhangi Gupta",
          //    description:
          //      "Gold Microsoft Learn Ambassador | President at TechnoLiterati | Gold #IamRemarkable Facilitator",
          picture:
            "https://avatars.githubusercontent.com/u/31511497?s=460&u=8834975fa238be878ffd74092143a6bc15d38607&v=4",
          linkedIn: "https://www.linkedin.com/in/knowshubhangi/",
          github: "https://github.com/Shubhangi0304",
        },
        {
          name: "Aditya Oberai",
          //    description:
          //      "MLH Coach | Gold Microsoft Learn Student Ambassador | Active Member at .NET Foundation",
          picture:
            "https://avatars.githubusercontent.com/u/31401437?s=460&u=1ad52dad34daf68e98fd7324c94c97c3b369d471&v=4",
          linkedIn: "https://www.linkedin.com/in/adityaoberai1/",
          github: "https://github.com/adityaoberai",
        },
        {
          name: "Apoorv Dwivedi",
          //   description:
          //     "Btech sophomore from MAIT | Full Stack Web Developer (MERN) | ML and AI enthusiast",
          picture:
            "https://avatars.githubusercontent.com/u/56197821?s=460&u=693be068482cf3a5b23a1bf708ee1e399487659a&v=4",
          linkedIn: "https://www.linkedin.com/in/apoorvdwi/",
          github: "https://github.com/apoorvdwi",
        },
        {
          name: "Paras Gupta",
          //     description:
          //      "Senior at IIIT Una | Open source @electron and @validatorjs | Full Stack Developer",
          picture: require("/assets/paras.jpeg"),
          linkedIn: "https://www.linkedin.com/in/parasg1999/",
          github: "https://github.com/parasg1999",
        },
        {
          name: "Saish Adlak",
          //   description:
          //     "UI/UX Designer | Imagination and Implementation is what I do",
          picture:
            "https://avatars.githubusercontent.com/u/71888339?s=460&u=2be63077304e5b88c626b1fa64bc4c3a23ba72a1&v=4",
          linkedIn: "https://www.linkedin.com/in/saishadlak/",
          github: "https://github.com/saish-lmx",
        },
        {
          name: "Ojasvi Khuranna",
          //   description:
          //     "Incoming SDE Intern at Amazon | Intuit Augment Mentee | GitHub Campus Expert",
          picture:
            "https://user-images.githubusercontent.com/44267452/74556077-29ded180-4f83-11ea-8b5b-0dc0611fa3c2.jpeg",
          linkedIn: "https://www.linkedin.com/in/ojasvikhurana/",
          github: "https://github.com/ojasvik",
        },
        {
          name: "Siddharth Dayalwal",
          // description:
          //   "AngelHack Student Ambassador | Microsoft Learn Student Ambassador | Former Intern - @Progate",
          picture:
            "https://avatars.githubusercontent.com/u/41017419?s=460&u=ece0c309cba6ed5ecbe43a8845e2bd0e54fe210c&v=4",
          linkedIn: "https://www.linkedin.com/in/siddharth-dayalwal/",
          github: "https://github.com/siddharthdayalwal",
        },
        {
          name: "Khushi Sharma",
          picture: require("/assets/khushi.jpg"),
          linkedIn: "https://www.linkedin.com/in/khushi-sharma-2201/",
          github: "https://github.com/KhushiSharma22",
        },
        {
          name: "Priyanshi Bhola",
          picture: "https://avatars.githubusercontent.com/u/43310746?v=4",
          linkedIn: "https://www.linkedin.com/in/priyanshibhola/",
          github: "https://github.com/priyanshibhola",
        },
      ],
    };
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

    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 30px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-below(xxs) {
        grid-template-columns: repeat(1, 1fr);
      }

      .team-card {
        display: flex;
        flex-direction: column;
        background: var(--color-secondary-light);
        // min-height: 400px;
        border-radius: 20px;
        padding: 15px;
        justify-content: center;
        align-items: center;

        @include respond-below(sm) {
          min-height: 300px;
        }

        .picture-wrapper {
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--colour-pink);
          border-radius: 50%;
          transition: 0.3s all ease-in-out;

          &:hover {
            background: var(--gradient-blue);
          }

          .profile-pic {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: var(--color-secondary-light);
          }

          @include respond-below(md) {
            width: 140px;
            height: 140px;
            .profile-pic {
              width: 130px;
              height: 130px;
            }
          }

          @include respond-below(sm) {
            width: 120px;
            height: 120px;
            .profile-pic {
              width: 110px;
              height: 110px;
            }
          }
        }

        .socialLinks {
          padding: 20px 0 10px;
          margin-left: -5px;

          a {
            padding: 10px;
            margin: 5px;
            background: #252638;
            border-radius: 50%;
            text-align: center;

            @include respond-below(sm) {
              margin: 0;
            }

            &:hover {
              filter: invert(100%);
            }

            img {
              height: 20px;
              width: 20px;
              position: relative;
              top: 4px;
            }
          }
        }

        .title {
          font-size: 1.2rem;
          text-align: center;
          margin-top: 20px;

          @include respond-below(sm) {
            font-size: 1rem;
            margin-top: 10px;
          }
        }

        .description {
          font-size: 0.8rem;
          opacity: 0.7;
          text-align: center;
        }
      }
    }
  }
}
</style>
