<template>
  <Container id="speakers">
    <section class="content-section">
      <HashHeader title="Speakers" />
      <div class="contents">
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            class="speakers-card"
          >
            <div class="picture-wrapper">
              <img :src="speaker.picture" alt="" class="profile-pic" />
            </div>
            <h4 class="title">{{ speaker.name }}</h4>
            <p class="description">{{ speaker.description }}</p>
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
      speakers: [
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
        },
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
        },
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
        },
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
        },
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
        },
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
        },
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
        },
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
        },
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
        },
        {
          name: "Haxzie",
          description: "UX Engineer at Locale.ai",
          picture: "https://github.com/haxzie.png"
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
          //   background: var(--gradient-blue);
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
          opacity: 0.7;
          text-align: center;
        }
      }
    }
  }
}
</style>
