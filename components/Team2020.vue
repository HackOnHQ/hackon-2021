<template>
  <Container id="team2020">
    <section class="content-section">
      <HashHeader title="Hackon Team 2020" />
      <div class="contents">
        <div class="team-grid">
          <div
            v-for="(teamMember, index) in team"
            :key="index"
            class="team-card"
          >
            <div class="picture-wrapper">
              <img :src="teamMember.picture" alt="" class="profile-pic" />
            </div>
            <h4 class="title">{{ teamMember.name }}</h4>
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
      team: [
        {
          name: "Aditya",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/aditya.png"
        },
        {
          name: "Akanksha",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/akanksha.png"
        },
        {
          name: "Akshat",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/akshat.png"
        },
        {
          name: "Bhumika",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/bhumika.png"
        },
        {
          name: "Divyansh",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/divyansh.png"
        },
        {
          name: "Gunnika",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/gunnika.png"
        },
        {
          name: "Hunar",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/hunar.jpeg"
        },
        {
          name: "Kapil",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/kapil.png"
        },
        {
          name: "Karan",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/karan.png"
        },
        {
          name: "Loveneesh",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/loveneesh.png"
        },
        {
          name: "Manbir",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/manbir.png"
        },
        {
          name: "Manvi",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/manvi_.png"
        },
        {
          name: "Nirbhay",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/nirbhay.JPG"
        },
        {
          name: "Rishabh",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/rishabh.png"
        },
        {
          name: "Sarthak",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/sarthak.png"
        },
        {
          name: "Shivang",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/shivang.png"
        },
        {
          name: "Shivay",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/shivay.png"
        },
        {
          name: "Shubhangi",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/shubhangi.png"
        },
        {
          name: "Tejas",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/tejas.png"
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

    .team-grid {
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

      .team-card {
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
          background: var(--colour-pink);
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
      }
    }
  }
}
</style>
