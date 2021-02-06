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
          title: "How to register to the Hack?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",
        },
        {
          title: "Introduction to Prototyping with Figma",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",
        },
        {
          title: "Introduction to Prototyping with Figma",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",
        },
        {
          title: "Introduction to Prototyping with Figma",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",
        },
        {
          title: "Introduction to Prototyping with Figma",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",
        },
        {
          title: "Introduction to Prototyping with Figma",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Velurna lectus arcu ipsum aliquam sit ornare.",
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
