<template>
  <Container>
    <section class="content-section">
      <HashHeader title="Tracks" />
      <div class="grid">
        <div class="panel text">
          <div class="track-box healthcare">
            <img src="~/assets/Tracks/healthcare.png" alt="Track Healthcare" />
          </div>
          <div class="texts">
            <h3 class="title">Diversity and Inclusion</h3>
            <p class="description">
              Generate awareness and/or develop empathetic spaces that people
              coming from any and every walk of life to meet and connect,
              regardless of their background. Build solutions that address
              today's biggest problems related to bias, diversity, and
              inclusion.
            </p>
          </div>
        </div>
        <div class="panel text">
          <div class="track-box mental-health">
            <img
              src="~/assets/Tracks/mental-health.png"
              alt="Track Mental Health"
            />
          </div>
          <div class="texts">
            <h3 class="title">Mental Health and Awareness</h3>
            <p class="description">
              Help people learn more about their mental health and take better
              care of their well-being in these challenging times that have
              significantly impacted our day-to-day lives.
            </p>
          </div>
        </div>
        <div class="panel text">
          <div class="track-box virus">
            <img src="~/assets/Tracks/virus.svg" alt="Track Healthcare" />
          </div>
          <div class="texts">
            <h3 class="title">COVID-19 Impact</h3>
            <p class="description">
              Develop solutions to help Indian society cope with the drastic
              impact that the resurgence of COVID-19 has had on all our lives
              over the last few months.
            </p>
          </div>
        </div>
        <div class="panel text">
          <div class="track-box innovation">
            <img src="~/assets/Tracks/light-bulb.svg" alt="Track Healthcare" />
          </div>
          <div class="texts">
            <h3 class="title">Open Innovation</h3>
            <p class="description">
              Even if you have an idea that does not fit in our primary themes,
              we do not want to restrict your creativity. Create solutions that
              have a social good impact on society in any manner.
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
    HashHeader,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  .track-box {
    border-radius: 20%;
    display: inline-block;
    padding: 1rem;
    height: 5.5rem;
    margin-top: 1rem;
    width: 5.5rem;
    box-sizing: border-box;
  }

  .healthcare {
    border: 3px solid #e58ab2;
  }

  .mental-health {
    border: 3px solid #7fc1c8;
  }

  .virus {
    border: 3px solid #7fc1c8;
  }

  .innovation {
    border: 3px solid #e58ab2;
  }

  img {
    float: left;
    width: 3rem;
    align-content: center;
  }

  .grid {
    padding: 10px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
    row-gap: 1em;

    .panel {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &.text {
        justify-content: space-between;
      }

      .texts {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        padding: 10px;

        .title {
          font-family: "Roboto Mono";
          font-weight: 400;
          font-size: 1.5rem;
        }

        .description {
          margin-top: 0.5em;
          opacity: 0.7;
        }
      }
    }

    @include respond-below(sm) {
      grid-template-columns: repeat(1, 1fr);

      .texts {
        padding: 10px 0;
      }
    }
  }
}
</style>
