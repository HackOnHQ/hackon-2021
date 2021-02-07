<template>
  <Container id="CommunityPartners">
    <section class="content-section">
      <HashHeader title="Past Community Partners" />
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
