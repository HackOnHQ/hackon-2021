<template>
  <Container id="faq">
    <section class="content-section">
      <HashHeader title="FAQ" />
      <div class="contents">
        <div class="cards-grid">
          <div
            v-for="(faq, index) in FAQs"
            :key="index"
            :data-card-id="index"
            class="card hidden"
          >
            <div class="texts" @click="toggleFAQItem(index)">
              <h4 class="title">{{ index + 1 }}. {{ faq.title }}</h4>
              <img src="~/assets/faq-up-arrow.svg" />
            </div>
            <div class="answer">
              <div>{{ faq.content }}</div>
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
      FAQs: [
        {
          title: "What is a hackathon?",
          content:
            "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
        },
        {
          title: "What is an online hackathon?",
          content:
            "It's an invention marathon like the traditional in-person hackathon, but held remotely!",
        },
        {
          title: "How long will it be on for?",
          content:
            "The event will be running for about one week from 11th April to 19th April.",
        },
        {
          title: "Who can participate?",
          content:
            "Everyone is welcome to participate, be it, students, professionals or aliens from different Planet!",
        },
        {
          title: "How will project submissions work?",
          content:
            'To participate, click on the "Apply with Devfolio" button. You will then be able to create your project once the hackathon starts. To be eligible for the judging process you\'ll have to submit the project before the hackathon ends.',
        },
        {
          title: "How will judging work?",
          content: "We'll be reviewing submissions on Devfolio!",
        },
        {
          title: "Do I need to be a student?",
          content:
            "Absolutely not! The team behind HackOn is mostly made up of students, however, anyone age 13 and above can give it a go!",
        },
        {
          title: "How much does it cost?",
          content:
            "Zero. Zip. Zilch. Nada. Nothing. Admission to HackOn is completely free, thanks to our sponsors!",
        },
        {
          title: "Where can I find updates?",
          content:
            "We have an active Discord for communication, along with a Telegram ",
        },
        {
          title: "How big can a team be?",
          content:
            "You can form teams of 2 to 4 people. Most teams aim to have a mix of people with both design and developer skills. Remember we won't accept project submissions from individual applicants.",
        },
      ],
    };
  },
  methods: {
    toggleFAQItem(index) {
      const characterInfoElement = document.querySelectorAll(
        '[data-card-id="' + index + '"]'
      )[0];
      this.currentOpen = index;
      if (characterInfoElement.classList.contains("hidden")) {
        characterInfoElement.classList.remove("hidden");
      } else {
        characterInfoElement.classList.add("hidden");
      }
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
        flex: 1;
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        background: var(--color-secondary-light);
        border-radius: 5px;
        background-color: #252638;

        &.hidden {
          .answer {
            max-height: 0px;
          }

          img {
            transform: rotate(180deg);
          }
        }

        img {
          width: 1rem;
        }

        .texts {
          padding: 15px 15px 10px;
          margin-left: 9px;
          margin-right: 2px;
          display: flex;
          justify-content: space-between;
          align-content: flex-start;
          cursor: pointer;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;

          .title {
            font-size: 1.2rem;
            font-weight: 300;
          }
        }

        .answer {
          margin: 0px 6px 6px;
          height: 100%;
          background-color: #151629;
          max-height: 200px;
          overflow: hidden;
          transition: all 0.3s ease-out;

          div {
            padding: 16px 24px;
          }
        }
      }
    }
  }
}
</style>
