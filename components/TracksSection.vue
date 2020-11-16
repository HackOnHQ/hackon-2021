<template>
  <Container>
    <section class="content-section">
      <HashHeader title="Tracks"/>
      <div class="contents">
        <div class="grid">
          <div class="panel text">
            <div class="texts">
              <h3 class="title">HealthCare Technology</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                sit convallis sit odio ante.
              </p>
            </div>
            <div class="texts">
              <h3 class="title">Remote Work and Ed.</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                sit convallis sit odio ante.
              </p>
            </div>
          </div>
          <div class="panel illustration">
              <img src="~/assets/tracks-illustration.svg"/>
          </div>
          <div class="panel text">
            <div class="texts">
              <h3 class="title">Awareness & Behaviour</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                sit convallis sit odio ante.
              </p>
            </div>
            <div class="texts">
              <h3 class="title">Supporting COVID Patients</h3>
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
    HashHeader
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

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        .panel {
            display: flex;
            flex-direction: column;
            &.text {
                justify-content: space-between;
            }
            &.illustration {
                justify-content: center;
                align-items: center;

                img {
                    width: 250px;
                }
            }

            .texts {
                display: flex;
                flex-direction: column;
                padding: 10px;

                &:last-child {
                    margin-top: 50px;
                }

                .title {
                    font-weight: bold;
                    font-size: 1.2rem;
                }

                .description {
                    opacity: 0.7;
                }
            }
        }

        @include respond-below(sm) {
          grid-template-columns: 1fr;

          .illustration {
            display: none;
          }

          .texts {
            margin-top: 20px;
            padding: 10px 0;
          }
        }
    }
  }
}
</style>
