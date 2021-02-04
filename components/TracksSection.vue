<template>
  <Container>
    <section class="content-section">
      <HashHeader title="Tracks" />
      <div class="contents">
        <div class="grid">
          <div class="panel text box-one">
            <div class="track-box healthcare">
              <img src="~/assets/track-healthcare.png" />
            </div>
            <div class="texts">
              <h3 class="title">HealthCare Technology</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                sit convallis sit odio ante.
              </p>
            </div>
          </div>
          <div class="panel text box-two">
            <div class="track-box mental-health">
              <img src="~/assets/track-mental-health.png" />
            </div>
            <div class="texts">
              <h3 class="title">Mental Health</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                sit convallis sit odio ante.
              </p>
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

  img {
    float: left;
    width: 3rem;
    align-content: center;
  }

  .contents {
    padding: 10px 0;

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4rem;

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
            margin-top: 1em;
            opacity: 0.7;
          }
        }
      }

      @include respond-below(sm) {
        .box-one {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
        }

        .box-two {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 2;
        }

        .grid {
          .texts {
            margin-top: 20px;
            padding: 10px 0;
          }
        }
      }
    }
  }
}
</style>
