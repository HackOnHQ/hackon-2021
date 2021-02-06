<template>
  <Container id="about">
    <section class="content-section">
      <HashHeader title="Workshops" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(workshop, index) in workshops" :key="index" class="card">
            <div class="texts">
              <h4 class="title">{{ workshop.name }}</h4>
              <p class="date">{{ workshop.date }}</p>
            </div>
            <p class="description">
              <img :src="workshop.speaker.picture" class="avatar" />{{
                workshop.speaker.name
              }}
            </p>
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
      workshops: [
        {
          name: "Introduction to Prototyping with Figma",
          date: "12/10/2020 9:30 am",
          speaker: {
            name: "Musthaq Ahamad",
            picture: "https://github.com/haxzie.png"
          }
        },
        {
          name: "Introduction to Prototyping with Figma",
          date: "12/10/2020 9:30 am",
          speaker: {
            name: "Musthaq Ahamad",
            picture: "https://github.com/haxzie.png"
          }
        },
        {
          name: "Introduction to Prototyping with Figma",
          date: "12/10/2020 9:30 am",
          speaker: {
            name: "Musthaq Ahamad",
            picture: "https://github.com/haxzie.png"
          }
        },
        {
          name: "Introduction to Prototyping with Figma",
          date: "12/10/2020 9:30 am",
          speaker: {
            name: "Musthaq Ahamad",
            picture: "https://github.com/haxzie.png"
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
        padding: 15px;
        background: var(--color-secondary-light);
        border-radius: 5px;
        min-height: 200px;

        .texts {
          flex: 1;
          .title {
            font-size: 1.2rem;
            font-weight: bold;
            padding-bottom: 10px;
          }

          .date {
            font-size: 0.8rem;
            opacity: 0.7;
          }
        }

        .description {
          display: flex;
          align-items: center;

          img.avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
