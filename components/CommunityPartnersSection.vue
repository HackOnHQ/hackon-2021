<template>
  <Container id="CommunityPartners">
    <section class="content-section">
      <HashHeader title="Community Partners" />
      <div class="contents">
        <div class="cards-grid">
          <div v-for="(community, index) in communities" :key="index">
            <a :href="community.url" rel="noopener noreferrer" target="_blank">
              <div class="card">
                <img :src="community.image" alt="community" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="new-community">
        <p>Want to get involved?</p>
        <p>
          Drop us an e-mail at
          <CopyLink
            value="contact@hackon.tech"
            link="mailto:contact@hackon.tech"
            text="email address"
          />
        </p>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";
import CopyLink from "~/components/CopyLink";

export default {
  components: {
    Container,
    HashHeader,
    CopyLink
  },
  data() {
    return {
      communities: [
        {
          image: require("~/assets/Community/codingBlocks.png"),
          url: "https://codingblocks.com"
        },
        {
          image: require("~/assets/Community/EddieHub.png"),
          url: "https://eddiehubcommunity.github.io"
        },
        {
          image: require("~/assets/Community/Julia.png"),
          url: "https://julialang.org"
        },
        {
          image: require("~/assets/Community/EquiCode.png"),
          url: "https://linktr.ee/Equicode"
        },
        {
          image: require("~/assets/Community/DSC.png"),
          url: "https://developerstudentcommunity.co"
        },
        {
          image: require("~/assets/Community/DevScript.png"),
          url: "https://devscript.tech"
        },
        {
          image: require("~/assets/Community/MergeIntern.png"),
          url: "https://www.mergeintern.com"
        },
        {
          image: require("~/assets/Community/Hack This Fall.png"),
          url: "https://hackthisfall.tech"
        },
        {
          image: require("~/assets/Community/GDG Ranchi.png"),
          url: "https://gdgranchi.in"
        },
        {
          image: require("~/assets/Community/GDG Cloud Pune.png"),
          url: "https://gdg.community.dev/gdg-cloud-pune/"
        },
        {
          image: require("~/assets/Community/GDG Gwalior.png"),
          url: "https://gdg.community.dev/gdg-gwalior"
        },
        {
          image: require("~/assets/Community/DSC Amity.png"),
          url: "https://discord.gg/BSng5bRgwa"
        },
        {
          image: require("~/assets/Community/AngelHack.png"),
          url: "https://angelhack.com/"
        },
        {
          image: require("~/assets/Community/Hack Club VIT.png"),
          url:
            "https://www.linkedin.com/company/hackclubvit/?originalSubdomain=in"
        },
        {
          image: require("~/assets/Community/CodXCrypt.jpg"),
          url: "https://www.linkedin.com/in/codxcrypt/?originalSubdomain=in"
        },
        {
          image: require("~/assets/Community/CodeFlow.png"),
          url:
            "https://www.linkedin.com/company/codefloworg/?originalSubdomain=in"
        },
        {
          image: require("~/assets/Community/Programmers Universal.jpg"),
          url: "https://discord.gg/8V3KzhgngQ"
        },
        {
          image: require("~/assets/Community/MSAC-KIIT.png"),
          url: "https://msackiit.tech/"
        },
        {
          image: require("~/assets/Community/DSC Chitkara.png"),
          url: "https://dsc.community.dev/chitkara-university-punjab/"
        },
        {
          image: require("~/assets/Community/CodeChef-VIT.png"),
          url: "https://twitter.com/codechefvit"
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
        // padding: 20px;
        // background: rgba(255, 255, 255, 0.2);
        // border-radius: 5px;
        height: 210px;

        @include respond-below(sm) {
          height: 120px;
        }

        img {
          width: 210px;
          margin: auto;

          @include respond-below(sm) {
            width: 120px;
          }
        }
      }
    }
  }

  .new-community {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 20px 0 -10px;
    padding: 2em 0em;
    text-align: center;
    background: var(--color-secondary-light);
    border-radius: 5px;

    a {
      text-decoration: underline;
    }
  }
}
</style>
