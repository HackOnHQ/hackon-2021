<template>
  <Container id="about">
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
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/4dc72bf6d4b04b358059ef4842c3ab4b/315.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/a9b13ae87abb4520aed717a000ddffee/160.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/c69ecafd00d4422e8c2a5a6a606ca650/328.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/7a36071e781c49b7a55e045e9cafced5/700.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/2bee3202cdc14a69b7acb037f90d2523/793.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/41950e4086ee4b93a7a070e89ba995fe/236.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/58879484580046af955eac199aeb950b/842.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/8272188e7a404e268634681fdf1408ab/505.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/97b7cabc3522441c8a3fffd01bf91c03/975.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/c0083c36d85a47f8b0a191f85a54db87/784.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/f25f670fe30b4850a9c95dd85881dd0f/456.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/ea8c9272d9da4fc8aaf7e544f0c16a1a/516.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/ac70a14760444d7898da15c036347fca/966.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/888d14a1b4f64eceb393b86d909fd715/736.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/4b585604d13a45ecb58ad42e640ff8b7/469.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/d1bb368717124c93801a07907430eeab/26.png"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/f207b437c1144a648adabcf2c901aeae/984.jpeg"
        },
        {
          image:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/sponsors/eae9732bcdf84d21800269925f3d1d83/704.png"
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
