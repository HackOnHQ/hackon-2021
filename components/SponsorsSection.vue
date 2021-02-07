<template>
  <Container id="Sponsors">
    <section class="content-section">
      <HashHeader title="Past Sponsors" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(sponsor, index) in sponsors" :key="index" class="card">
            <img :src="sponsor.image" alt="sponsor" />
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
      sponsors: [
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/d0266300b5234991b89cf25b247d56b3/436.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/3ffea72da37e4944b22069e3070881f0/874.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/8459f3c1a83b43ad87f614c8dae58d13/123.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/63fe95182efe437185dcc86d2dda7a75/844.jpeg"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/9ce7b85ce0f54c8bb9be74dff79ecec3/415.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/854baedb6d314f859e7dde4c1d0641c6/483.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/482d208c56734886b8469a8d9edb1779/307.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/9ddaa4c18c964fde98022ff15472d4cd/795.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/aaef47c078f249dbbb8aa9fbdca8b21b/65.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/8c26aceefe8a4432afef3631f6e03bd7/816.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/e89e594b0e234259879c9744c543932f/706.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/7187f376166546988cbce332e6833dd3/877.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/eee25080b07f425292b9f4cb85a8b237/696.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/778a81db82d3491993549efff6a628bd/407.png"
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
    padding: 20px 0;

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 30px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        row-gap: 10px;
      }

      .card {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 20px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        height: 200px;

        @include respond-below(sm) {
          height: 120px;
        }

        img {
          width: 200px;
          margin: auto;

          @include respond-below(sm) {
            width: 120px;
          }
        }
      }
    }
  }
}
</style>
