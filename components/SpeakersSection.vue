<template>
  <Container id="speakers">
    <section class="content-section">
      <HashHeader title="Speakers, Judges and Mentors" />
      <div class="contents">
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            class="speakers-card"
          >
            <a :href="speaker.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper">
                <img
                  :src="speaker.picture"
                  alt="profile picture"
                  class="profile-pic"
                />
              </div>
            </a>
            <h4 class="title">{{ speaker.name }}</h4>
            <p class="description">{{ speaker.description }}</p>
            <img
              v-if="speaker.companyLogo"
              :src="speaker.companyLogo"
              :title="speaker.company"
              alt="company logo"
              class="company-logo"
            />
          </div>
        </div>
        <a class="view-more" href="/judgesAndMentors"
          >View more <img src="~/assets/faq-up-arrow.svg"
        /></a>
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
      speakers: [
        {
          name: "Juan Pablo Flores Cortés",
          description: "Program Manager",
          url: "https://twitter.com/juanpflores_",
          picture: require("~/assets/Speakers/Juan-Pablo.png"),
          companyLogo: require("~/assets/Sponsors/github.svg"),
          company: "GitHub",
        },
        {
          name: "Eddie Jaoude",
          description: "GitHub Star of the Year",
          url: "https://twitter.com/eddiejaoude",
          picture: require("~/assets/Speakers/Eddie.jpg"),
          companyLogo: require("~/assets/github-star.svg"),
          company: "GitHub Stars",
        },
        {
          name: "Logan Kilpatrick",
          description: "Community Manager",
          url: "https://twitter.com/OfficialLoganK",
          picture: require("~/assets/Speakers/Logan.jpeg"),
          companyLogo: require("~/assets/julia.svg"),
          company: "The Julia Language",
        },
        {
          name: "Ali Mustufa Shaikh",
          description: "Student Community Manager",
          url: "https://twitter.com/ialimustufa",
          picture: require("~/assets/Speakers/Ali.jpg"),
          companyLogo: require("~/assets/postman.png"),
          company: "Postman",
        },
        {
          name: "Kunal Kushwaha",
          description: "MLH Coach",
          url: "https://twitter.com/kunalstwt",
          picture: require("~/assets/Speakers/Kunal.jpg"),
          companyLogo: require("~/assets/Sponsors/mlh.svg"),
          company: "MLH",
        },
        {
          name: "Haimantika Mitra",
          description: "Judge | Support Engineer Intern",
          url: "https://twitter.com/HaimantikaM",
          picture: require("~/assets/Speakers/Haimantika.jpg"),
          companyLogo: require("~/assets/microsoft.svg"),
          company: "Microsoft",
        },
        {
          name: "Yashraj Nayak",
          description: "Community Growth Manager (APAC)",
          url: "https://twitter.com/yashrajnayak",
          picture: require("~/assets/Speakers/Yashraj.jpeg"),
          companyLogo: require("~/assets/Sponsors/outsystems.svg"),
          company: "OutSystems",
        },
        {
          name: "Madhav Bahl",
          description: "Judge | Software Engineer",
          url: "",
          picture: require("~/assets/Judges/madhav.jpeg"),
          companyLogo: require("~/assets/microsoft.svg"),
          company: "Microsoft",
        },
        {
          name: "Mohammad Shahbaz Alam",
          description: "Developer Advocate",
          url: "https://twitter.com/mdsbzalam",
          picture: require("~/assets/Speakers/Mohammad-Shahbaz-Alam.png"),
          companyLogo: require("~/assets/magic.svg"),
          company: "Magic",
        },
        {
          name: "Kathita",
          description: "Judge | Senior Product Manager",
          url: "https://www.linkedin.com/in/kathita",
          picture: require("~/assets/Judges/Kathita.jpeg"),
          companyLogo: require("~/assets/google.png"),
          company: "Google",
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
    text-align: center;

    .speakers-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      column-gap: 20px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
      }

      .speakers-card {
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;

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
            width: 120px;
            height: 120px;
            .profile-pic {
              width: 110px;
              height: 110px;
            }
          }

          @include respond-below(sm) {
            width: 100px;
            height: 100px;
            .profile-pic {
              width: 90px;
              height: 90px;
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
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }

        .company-logo {
          font-size: 0.8rem;
          margin-top: 5px;
          height: 20px;
        }
      }
    }

    .view-more {
      cursor: pointer;
      color: var(--colour-pink);

      img {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
